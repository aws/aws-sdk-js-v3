// @ts-nocheck
/**
 * Worker thread for the S3 multipart UPLOAD. Three roles:
 *
 *  - SLICE mode (uploadSource 'memory' | 'file' | 'open'): the worker owns a fixed
 *    slice of parts and uploads them with up to `concurrency` parallel UploadPart
 *    calls. Protocol: main->worker 'start'; worker->main 'done'.
 *
 *  - POOL/UPLOADER mode (uploadSource 'stream' or role 'uploader'): the main thread
 *    transfers part buffers here one at a time; this worker uploads each and
 *    transfers the (now free) buffer back for reuse.
 *    Protocol: main->worker 'upload'; worker->main 'uploaded'; main->worker 'stop'.
 *
 *  - CARVER role (open-stream): opens each assigned object's whole stream, carves
 *    parts into buffers, and TRANSFERS them to main for the uploader pool.
 *    Protocol: main->worker 'carve'; worker->main 'part'; main->worker 'ack'/'stop'.
 */

import { parentPort, workerData } from "node:worker_threads";
import { randomFillSync } from "node:crypto";
import { openSync, readSync, closeSync, createReadStream } from "node:fs";
import { Readable } from "node:stream";
import { UploadPartCommand } from "@aws-sdk/client-s3";
import { makeClient } from "./s3";
import { IpThroughputTracker } from "./ip-throughput";
import { installNativeCrc32 } from "./crc32-native";
import { bumpProgress, progressView } from "./progress";

const {
  bucket,
  region,
  parts,
  concurrency,
  checksum,
  maxSockets,
  uploadSource,
  role,
  sourceFilePath,
  openDesc,
  objectBuffers,
  carverObjects,
  carverLimit = 1,
  spreadConnections,
  tls,
  ipThroughput,
  httpHandler,
  ciphers,
  nativeCrc32,
  workerId = 0,
  maxPartSize = 0,
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

const tracker = ipThroughput ? new IpThroughputTracker((s: any) => s.bytesWritten) : null;
const onConnect = tracker ? (ip: string, socket: any) => tracker.register(socket, ip) : null;

let tlsInfo: any = null;
const onTls = (info: any) => {
  if (!tlsInfo) {
    tlsInfo = info;
  }
};

const client = makeClient({ region, maxSockets, spreadConnections, tls, onConnect, httpHandler, ciphers, onTls });

// Skip SHA-256 payload hashing — S3 accepts UNSIGNED-PAYLOAD for uploads.
client.middlewareStack.add(
  (next: any) => async (args: any) => {
    args.request.headers["x-amz-content-sha256"] = "UNSIGNED-PAYLOAD";
    return next(args);
  },
  { step: "build", name: "unsignedPayload", override: true }
);

// In-memory synthetic stream: emits `total` bytes from a reused random template.
function memoryStream(total: number, template: Buffer): Readable {
  let sent = 0;
  return new Readable({
    highWaterMark: template.length,
    read() {
      if (sent >= total) {
        this.push(null);
        return;
      }
      const n = Math.min(template.length, total - sent);
      sent += n;
      this.push(n === template.length ? template : template.subarray(0, n));
    },
  });
}

// Send one part's body and normalize the result.
async function sendPartBody({ key, uploadId, partNumber, size }: any, body: any) {
  const res = await client.send(
    new UploadPartCommand({
      Bucket: bucket,
      Key: key,
      UploadId: uploadId,
      PartNumber: partNumber,
      Body: body,
      ...(checksum ? { ChecksumAlgorithm: checksum } : {}),
    })
  );
  return {
    key,
    PartNumber: partNumber,
    ETag: res.ETag,
    size,
    ChecksumCRC32C: res.ChecksumCRC32C,
    ChecksumCRC32: res.ChecksumCRC32,
    ChecksumSHA1: res.ChecksumSHA1,
    ChecksumSHA256: res.ChecksumSHA256,
  };
}

// ---------------------------------------------------------------------------
// CARVER role
// ---------------------------------------------------------------------------
if (role === "carver") {
  const partSize = maxPartSize;
  const freePool: Buffer[] = [];
  let outstanding = 0;
  let resume: (() => void) | null = null;
  const acquire = () => freePool.pop() || Buffer.allocUnsafeSlow(partSize);

  let openObject: (key: string, size: number) => any;
  if (openDesc?.type === "memory") {
    const tmpl = Buffer.allocUnsafe(Math.max(1, openDesc.chunk || 1 << 20));
    randomFillSync(tmpl);
    openObject = (_key: string, size: number) => memoryStream(size, tmpl);
  } else {
    openObject = () => createReadStream(openDesc.path);
  }

  parentPort!.on("message", async (msg: any) => {
    if (msg?.type === "ack") {
      if (msg.buffer) {
        freePool.push(Buffer.from(msg.buffer));
      }
      --outstanding;
      if (resume && outstanding < carverLimit) {
        const r = resume;
        resume = null;
        r();
      }
      return;
    }
    if (msg?.type !== "carve") {
      return;
    }
    try {
      for (const obj of msg.objects) {
        const stream = await openObject(obj.key, obj.size);
        const bp = obj.baseParts;
        let partIdx = 0;
        let buf = acquire();
        let off = 0;
        for await (const chunk of stream) {
          let cpos = 0;
          while (cpos < chunk.length && partIdx < bp.length) {
            const target = bp[partIdx].size;
            const n = Math.min(chunk.length - cpos, target - off);
            chunk.copy(buf, off, cpos, cpos + n);
            off += n;
            cpos += n;
            if (off === target) {
              parentPort!.postMessage(
                {
                  type: "part",
                  key: obj.key,
                  uploadId: obj.uploadId,
                  partNumber: bp[partIdx].partNumber,
                  size: target,
                  buffer: buf.buffer,
                },
                [buf.buffer]
              );
              ++outstanding;
              ++partIdx;
              off = 0;
              if (outstanding >= carverLimit) {
                await new Promise<void>((r) => (resume = r));
              }
              if (partIdx < bp.length) {
                buf = acquire();
              }
            }
          }
        }
      }
      parentPort!.postMessage({ type: "carver-done" });
    } catch (err: any) {
      parentPort!.postMessage({ type: "error", message: err?.message ?? String(err) });
    }
  });
  parentPort!.postMessage({ type: "ready" });
}
// ---------------------------------------------------------------------------
// UPLOADER / POOL role
// ---------------------------------------------------------------------------
else if (role === "uploader" || uploadSource === "stream") {
  parentPort!.on("message", async (msg: any) => {
    if (msg?.type === "upload") {
      try {
        const body = Buffer.from(msg.buffer, 0, msg.size);
        const r = await sendPartBody(
          { key: msg.key, uploadId: msg.uploadId, partNumber: msg.partNumber, size: msg.size },
          body
        );
        bumpProgress(progress, msg.size);
        parentPort!.postMessage(
          {
            type: "uploaded",
            key: r.key,
            partNumber: r.PartNumber,
            size: r.size,
            carverId: msg.carverId,
            ETag: r.ETag,
            ChecksumCRC32C: r.ChecksumCRC32C,
            ChecksumCRC32: r.ChecksumCRC32,
            ChecksumSHA1: r.ChecksumSHA1,
            ChecksumSHA256: r.ChecksumSHA256,
            tlsInfo,
            buffer: msg.buffer,
          },
          [msg.buffer]
        );
      } catch (err: any) {
        parentPort!.postMessage({ type: "error", message: err?.message ?? String(err) });
      }
    } else if (msg?.type === "stop") {
      try {
        client.destroy();
      } catch {
        /* ignore */
      }
    }
  });
  parentPort!.postMessage({ type: "ready" });
} else {
  // -------------------------------------------------------------------------
  // SLICE mode (uploadSource 'memory' | 'file' | 'open').
  // -------------------------------------------------------------------------
  let fd: number | null = null;
  let openStream: ((part: any) => Readable) | null = null;
  if (uploadSource === "file") {
    fd = openSync(sourceFilePath, "r");
  } else if (uploadSource === "open") {
    if (openDesc?.type === "memory") {
      const tmpl = Buffer.allocUnsafe(Math.max(1, openDesc.chunk || 1 << 20));
      randomFillSync(tmpl);
      openStream = (part: any) => memoryStream(part.size, tmpl);
    } else {
      openStream = (part: any) =>
        createReadStream(openDesc.path, { start: part.start, end: part.start + part.size - 1 });
    }
  }

  async function uploadPart(part: any) {
    const { start, size } = part;
    let body: any;
    if (uploadSource === "file") {
      body = Buffer.allocUnsafeSlow(size);
      let read = 0;
      while (read < size) {
        const n = readSync(fd!, body, read, size - read, start + read);
        if (n === 0) {
          break;
        }
        read += n;
      }
    } else if (uploadSource === "open") {
      const rs = await openStream!(part);
      const chunks: Buffer[] = [];
      for await (const c of rs) {
        chunks.push(c);
      }
      body = chunks.length === 1 ? chunks[0] : Buffer.concat(chunks, size);
    } else {
      // memory: zero-copy view into shared buffer.
      body = Buffer.from(objectBuffers[part.key], start, size);
    }
    return sendPartBody(part, body);
  }

  async function run(sliceParts: any[]) {
    let cursor = 0;
    let totalBytes = 0;
    const completed: any[] = [];

    async function nextInQueue() {
      while (cursor < sliceParts.length) {
        const part = sliceParts[cursor++];
        const r = await uploadPart(part);
        bumpProgress(progress, part.size);
        totalBytes += part.size;
        completed.push(r);
      }
    }

    const lanes = Math.max(1, Math.min(concurrency, sliceParts.length || 1));
    await Promise.all(Array.from({ length: lanes }, nextInQueue));
    return { totalBytes, partsDone: completed.length, completed };
  }

  parentPort!.on("message", async (msg: any) => {
    if (msg?.type !== "start") {
      return;
    }
    try {
      const { totalBytes, partsDone, completed } = await run(msg.parts || []);
      const ipTput = tracker ? tracker.snapshot() : null;
      parentPort!.postMessage({
        type: "done",
        bytes: totalBytes,
        parts: partsDone,
        completed,
        ipThroughput: ipTput,
        tlsInfo,
      });
    } catch (err: any) {
      parentPort!.postMessage({ type: "error", message: err?.message ?? String(err) });
    } finally {
      if (fd !== null) {
        try {
          closeSync(fd);
        } catch {
          /* ignore */
        }
      }
      client.destroy();
    }
  });

  parentPort!.postMessage({ type: "ready" });
}
