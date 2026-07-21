// @ts-nocheck
/**
 * Worker thread: downloads parts by PartNumber. Each part carries its own object
 * `key`, so a single pool can span many objects.
 *
 * Two operating modes:
 *   - discard / file  : SLICE mode. The worker owns a fixed slice of parts and
 *                       processes them with up to `concurrency` lanes on 'start'.
 *   - ordered-stream  : DISPATCH mode. The main thread assigns parts one at a time
 *                       via 'assign'; the worker downloads and transfers each to
 *                       main for in-order delivery.
 *
 * Protocol (slice):    main->worker 'start'; worker->main 'done'
 * Protocol (dispatch): main->worker 'assign' {part}; worker->main 'part' (transfer);
 *                      main->worker 'stop'; worker->main 'worker-done'
 */

import { parentPort, workerData } from "node:worker_threads";
import { openSync, writevSync, writev as writevCb, closeSync, writeFileSync } from "node:fs";
import { promisify } from "node:util";
import { Readable } from "node:stream";
import { GetObjectCommand } from "@aws-sdk/client-s3";

const writevAsync = promisify(writevCb);
import { makeClient } from "./s3";
import { IpThroughputTracker } from "./ip-throughput";
import { installNativeCrc32 } from "./crc32-native";
import { bumpProgress, progressView } from "./progress";

const {
  bucket,
  region,
  parts,
  concurrency,
  keep,
  maxSockets,
  validateChecksum,
  deliveryMode,
  filePaths,
  logConnections,
  spreadConnections,
  tls,
  ipThroughput,
  httpHandler,
  ciphers,
  stallTimeoutMs,
  partRetries,
  partTimes,
  workerId = 0,
  bufferPool,
  bufferReturn = true,
  fileAsync,
  profile,
  profileDir,
  nativeCrc32,
  progressBuf,
} = workerData;

const progress = progressView(progressBuf);

if (nativeCrc32) {
  const r = await installNativeCrc32();
  if (workerId === 0) {
    if (r.patched) {
      console.error(`[native-crc32] patched: ${r.reason}`);
    } else if (!r.alreadyNative) {
      console.error(`[native-crc32] not applied: ${r.reason}`);
    }
  }
}

// Optional per-worker CPU profiler.
let profSession: any = null;
if (profile) {
  const inspector = await import("node:inspector/promises");
  profSession = new inspector.Session();
  profSession.connect();
  await profSession.post("Profiler.enable");
  await profSession.post("Profiler.setSamplingInterval", { interval: 250 });
  await profSession.post("Profiler.start");
}
async function stopProfile() {
  if (!profSession) {
    return;
  }
  const s = profSession;
  profSession = null;
  try {
    const { profile: p } = await s.post("Profiler.stop");
    s.disconnect();
    writeFileSync(`${profileDir}/dl-worker-${workerId}.cpuprofile`, JSON.stringify(p));
  } catch {
    /* ignore profiling errors */
  }
}

const STALL_MS = Number(stallTimeoutMs) > 0 ? Number(stallTimeoutMs) : 0;
const MAX_PART_RETRIES = Number.isFinite(Number(partRetries)) ? Number(partRetries) : 3;

const ipCounts = logConnections ? new Map() : null;
const tracker = ipThroughput ? new IpThroughputTracker((s: any) => s.bytesRead) : null;
const onConnect =
  logConnections || ipThroughput
    ? (ip: string, socket: any) => {
        if (ipCounts) {
          ipCounts.set(ip, (ipCounts.get(ip) || 0) + 1);
        }
        if (tracker) {
          tracker.register(socket, ip);
        }
      }
    : null;

let tlsInfo: any = null;
const onTls = (info: any) => {
  if (!tlsInfo) {
    tlsInfo = info;
  }
};

const client = makeClient({
  region,
  maxSockets,
  validateChecksum,
  onConnect,
  spreadConnections,
  tls,
  httpHandler,
  captureSocket: Boolean(partTimes),
  connIdPrefix: `w${workerId}`,
  ciphers,
  onTls,
});

// Lazily-opened file descriptors (file mode only).
const fds = deliveryMode === "file" ? new Map() : null;
function fdFor(key: string) {
  let fd = fds!.get(key);
  if (fd === undefined) {
    fd = openSync(filePaths[key], "r+");
    fds!.set(key, fd);
  }
  return fd;
}

// Test hooks for simulating slow/stalled parts.
const SLOW_PART = Number(process.env.BENCH_SLOW_PART || 0);
const SLOW_MS = Number(process.env.BENCH_SLOW_MS || 0);
const SLOW_ONCE = process.env.BENCH_SLOW_ONCE === "1";
const slowedOnce = new Set<number>();
const STALL_PART = Number(process.env.BENCH_STALL_PART || 0);
const stalledOnce = new Set<number>();

async function maybeDelay(part: any) {
  if (SLOW_PART && SLOW_MS && part.partNumber === SLOW_PART) {
    if (SLOW_ONCE && slowedOnce.has(part.partNumber)) {
      return;
    }
    slowedOnce.add(part.partNumber);
    await new Promise((r) => setTimeout(r, SLOW_MS));
  }
}

function killOnAbort(body: any, signal: any) {
  if (!signal || !body) {
    return;
  }
  const kill = () => {
    try {
      if (typeof body.destroy === "function") {
        body.destroy(new Error("stalled: aborted by watchdog"));
      } else if (typeof body.cancel === "function") {
        body.cancel();
      }
    } catch {
      /* ignore */
    }
  };
  if (signal.aborted) {
    kill();
  } else {
    signal.addEventListener("abort", kill, { once: true });
  }
}

async function getPart(part: any, signal: any) {
  await maybeDelay(part);

  if (STALL_PART && part.partNumber === STALL_PART && !stalledOnce.has(part.partNumber)) {
    stalledOnce.add(part.partNumber);
    const body = new Readable({ read() {} });
    killOnAbort(body, signal);
    return { body, hasChecksum: false, vip: null, connId: null };
  }

  const res = await client.send(
    new GetObjectCommand({
      Bucket: bucket,
      Key: part.key,
      PartNumber: part.partNumber,
      ...(validateChecksum ? { ChecksumMode: "ENABLED" } : {}),
    }),
    signal ? { abortSignal: signal } : {}
  );
  const hasChecksum = Boolean(res.ChecksumCRC32C || res.ChecksumCRC32 || res.ChecksumSHA1 || res.ChecksumSHA256);
  const conn = (res as any).$benchConn ?? {};
  killOnAbort(res.Body, signal);
  return { body: res.Body, hasChecksum, vip: conn.vip ?? null, connId: conn.connId ?? null };
}

async function withStallRetry(label: string, attempt: (signal: any, bump: () => void) => Promise<any>) {
  for (let tryNo = 0; ; ++tryNo) {
    const ac = new AbortController();
    let lastProgress = Date.now();
    let timer: any = null;
    if (STALL_MS > 0) {
      timer = setInterval(
        () => {
          if (Date.now() - lastProgress >= STALL_MS) {
            ac.abort(new Error(`stalled: no bytes for ${STALL_MS}ms`));
          }
        },
        Math.min(STALL_MS, 1000)
      );
      timer.unref?.();
    }
    try {
      return await attempt(ac.signal, () => {
        lastProgress = Date.now();
      });
    } catch (err: any) {
      if (!ac.signal.aborted || tryNo >= MAX_PART_RETRIES) {
        throw err;
      }
      console.error(`[worker] ${label} stalled, re-fetching (retry ${tryNo + 1}/${MAX_PART_RETRIES})`);
    } finally {
      if (timer) {
        clearInterval(timer);
      }
    }
  }
}

// SLICE mode part handler.
async function downloadPart(part: any) {
  let vip: string | null = null;
  let connId: string | null = null;
  const r = await withStallRetry(`${part.key}#${part.partNumber}`, async (signal: any, bump: () => void) => {
    const got = await getPart(part, signal);
    vip = got.vip;
    connId = got.connId;
    const { body, hasChecksum } = got;

    if (deliveryMode === "file") {
      const fd = fdFor(part.key);
      const chunks: Buffer[] = [];
      let bytes = 0;
      for await (const chunk of body) {
        chunks.push(chunk);
        bytes += chunk.length;
        bump();
      }
      if (chunks.length) {
        if (fileAsync) {
          await writevAsync(fd, chunks, part.offset);
        } else {
          writevSync(fd, chunks, part.offset);
        }
      }
      return { bytes, hasChecksum };
    }

    // discard
    let bytes = 0;
    const kept = keep ? [] : null;
    for await (const chunk of body) {
      bytes += chunk.length;
      if (kept) {
        kept.push(chunk);
      }
      bump();
    }
    return { bytes, hasChecksum };
  });
  return { ...r, vip, connId };
}

function closeFds() {
  if (!fds) {
    return;
  }
  for (const fd of fds.values()) {
    try {
      closeSync(fd);
    } catch {
      /* ignore */
    }
  }
}

// SLICE mode runner.
async function runSlice() {
  let cursor = 0;
  let totalBytes = 0;
  let partsDone = 0;
  let checksummed = 0;
  const partTimings = partTimes ? [] : null;

  async function lane() {
    while (cursor < parts.length) {
      const part = parts[cursor++];
      const t0 = performance.now();
      const { bytes, hasChecksum, vip, connId } = await downloadPart(part);
      const ms = performance.now() - t0;
      bumpProgress(progress, bytes);
      totalBytes += bytes;
      ++partsDone;
      if (hasChecksum) {
        ++checksummed;
      }
      if (partTimings) {
        partTimings.push({ key: part.key, partNumber: part.partNumber, bytes, ms, vip, connId });
      }
    }
  }

  const lanes = Math.max(1, Math.min(concurrency, parts.length || 1));
  const start = performance.now();
  await Promise.all(Array.from({ length: lanes }, lane));
  const elapsedMs = performance.now() - start;
  return { totalBytes, partsDone, checksummed, elapsedMs, partTimings };
}

// DISPATCH mode state.
const heldChunks = new Map();
const bufPool: Buffer[] = [];
function acquireBuf(size: number) {
  for (let i = 0; i < bufPool.length; ++i) {
    if (bufPool[i].length >= size) {
      return bufPool.splice(i, 1)[0];
    }
  }
  return Buffer.allocUnsafe(size);
}
function releaseBuf(buf: Buffer) {
  if (buf) {
    bufPool.push(buf);
  }
}

const streamMode = deliveryMode === "ordered-stream";
const returnedBufs: ArrayBuffer[] = [];
function acquireArrayBuffer(size: number) {
  if (bufferReturn) {
    for (let i = 0; i < returnedBufs.length; ++i) {
      if (returnedBufs[i].byteLength >= size) {
        return returnedBufs.splice(i, 1)[0];
      }
    }
  }
  return Buffer.allocUnsafeSlow(size).buffer;
}

let dispatchInFlight = 0;
let dispatchStopped = false;
let dPartsDone = 0;
let dChecksummed = 0;

let doneEmitted = false;
async function dispatchMaybeDone() {
  if (dispatchStopped && dispatchInFlight === 0 && !doneEmitted) {
    doneEmitted = true;
    await stopProfile();
    const ipTput = tracker ? tracker.snapshot() : null;
    parentPort!.postMessage({
      type: "worker-done",
      parts: dPartsDone,
      checksummed: dChecksummed,
      ipCounts: ipCounts ? [...ipCounts] : null,
      ipThroughput: ipTput,
      tlsInfo,
    });
    heldChunks.clear();
    bufPool.length = 0;
    returnedBufs.length = 0;
    closeFds();
    client.destroy();
  }
}

if (deliveryMode === "ordered-stream" || deliveryMode === "ordered-drop") {
  parentPort!.on("message", async (msg: any) => {
    if (msg?.type === "assign") {
      ++dispatchInFlight;
      try {
        const label = `${msg.part.key}#${msg.part.partNumber}`;
        const t0 = performance.now();
        let byteLength = 0;
        let vip: string | null = null;
        let connId: string | null = null;

        if (streamMode) {
          const ab = acquireArrayBuffer(msg.part.size);
          const view = Buffer.from(ab, 0, msg.part.size);
          const hasChecksum = await withStallRetry(label, async (signal: any, bump: () => void) => {
            const got = await getPart(msg.part, signal);
            vip = got.vip;
            connId = got.connId;
            byteLength = 0;
            for await (const chunk of got.body) {
              chunk.copy(view, byteLength);
              byteLength += chunk.length;
              bump();
            }
            return got.hasChecksum;
          });
          const downloadMs = performance.now() - t0;
          ++dPartsDone;
          if (hasChecksum) {
            ++dChecksummed;
          }
          --dispatchInFlight;
          bumpProgress(progress, byteLength);
          parentPort!.postMessage(
            {
              type: "part",
              key: msg.part.key,
              partNumber: msg.part.partNumber,
              buffer: ab,
              byteLength,
              hasChecksum,
              downloadMs: partTimes ? downloadMs : undefined,
              vip: partTimes ? vip : undefined,
              connId: partTimes ? connId : undefined,
            },
            [ab]
          );
          dispatchMaybeDone();
          return;
        }

        // discard sink: hold bytes here.
        let held: any = null;
        const poolBuf = bufferPool ? acquireBuf(msg.part.size) : null;
        const hasChecksum = await withStallRetry(label, async (signal: any, bump: () => void) => {
          const got = await getPart(msg.part, signal);
          vip = got.vip;
          connId = got.connId;
          byteLength = 0;
          const chunks = bufferPool ? null : [];
          for await (const chunk of got.body) {
            if (bufferPool) {
              chunk.copy(poolBuf, byteLength);
            } else {
              chunks!.push(chunk);
            }
            byteLength += chunk.length;
            bump();
          }
          held = bufferPool ? poolBuf : chunks;
          return got.hasChecksum;
        });
        const downloadMs = performance.now() - t0;
        heldChunks.set(label, held);
        ++dPartsDone;
        if (hasChecksum) {
          ++dChecksummed;
        }
        --dispatchInFlight;
        bumpProgress(progress, byteLength);
        parentPort!.postMessage({
          type: "part-ready",
          key: msg.part.key,
          partNumber: msg.part.partNumber,
          byteLength,
          hasChecksum,
          downloadMs: partTimes ? downloadMs : undefined,
          vip: partTimes ? vip : undefined,
          connId: partTimes ? connId : undefined,
        });
        dispatchMaybeDone();
      } catch (err: any) {
        parentPort!.postMessage({ type: "error", message: err?.message ?? String(err) });
      }
    } else if (msg?.type === "return") {
      if (bufferReturn && msg.buffer) {
        returnedBufs.push(msg.buffer);
      }
    } else if (msg?.type === "release") {
      const rkey = `${msg.key}#${msg.partNumber}`;
      if (bufferPool) {
        releaseBuf(heldChunks.get(rkey));
      }
      heldChunks.delete(rkey);
    } else if (msg?.type === "stop") {
      dispatchStopped = true;
      dispatchMaybeDone();
    }
  });
} else {
  parentPort!.on("message", async (msg: any) => {
    if (msg?.type !== "start") {
      return;
    }
    try {
      const { totalBytes, partsDone, checksummed, elapsedMs, partTimings } = await runSlice();
      await stopProfile();
      const ipTput = tracker ? tracker.snapshot() : null;
      parentPort!.postMessage({
        type: "done",
        bytes: totalBytes,
        parts: partsDone,
        checksummed,
        elapsedMs,
        ipCounts: ipCounts ? [...ipCounts] : null,
        ipThroughput: ipTput,
        partTimes: partTimings,
        tlsInfo,
      });
    } catch (err: any) {
      parentPort!.postMessage({ type: "error", message: err?.message ?? String(err) });
    } finally {
      closeFds();
      client.destroy();
    }
  });
}

parentPort!.postMessage({ type: "ready" });
