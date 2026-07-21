// @ts-nocheck
/**
 * S3TransferManager — a Transfer-Manager-shaped wrapper over the ranged-GET-by-
 * PartNumber worker pool, exposing a clean, stream-returning download API.
 *
 * Lifecycle:
 *   const tm = new S3TransferManager(cfg);
 *   await tm.ready();
 *   const { body } = await tm.download({ bucket, key });
 *   await pipeline(body, sink);
 *   await tm.close();
 *
 * Design: all objects share ONE worker pool and ONE global reorder budget
 * (maxBufferedBytes). Parts are NOT pinned to objects — the scheduler round-robins
 * across active objects so every object's frontier advances and the pool stays full.
 */

import { Worker } from "node:worker_threads";
import { Readable } from "node:stream";
import path from "node:path";
import { HeadObjectCommand } from "@aws-sdk/client-s3";
import { makeClient } from "./s3";
import { bumpProgress, progressView } from "./progress";

// Resolve the worker script path relative to THIS file's compiled location.
// At runtime the compiled .js files sit in the same directory (dist-cjs/ or dist-es/).
const WORKER_PATH = path.resolve(__dirname, "download-worker.js");

/** Build the PartNumber work list for one object (uniform parts, last is the tail). */
function buildParts(key: string, partsCount: number, firstPartSize: number, totalSize: number) {
  const parts: Array<{ key: string; partNumber: number; offset: number; size: number }> = [];
  for (let p = 1; p <= partsCount; ++p) {
    const offset = (p - 1) * firstPartSize;
    const size = p < partsCount ? firstPartSize : totalSize - offset;
    parts.push({ key, partNumber: p, offset, size });
  }
  return parts;
}

/** HEAD the object (whole + PartNumber=1) to learn size, part count, part size. */
async function describeObject(client: any, bucket: string, key: string) {
  const whole = await client.send(new HeadObjectCommand({ Bucket: bucket, Key: key, ChecksumMode: "ENABLED" }));
  const totalSize = Number(whole.ContentLength);
  const part1 = await client.send(
    new HeadObjectCommand({ Bucket: bucket, Key: key, PartNumber: 1, ChecksumMode: "ENABLED" })
  );
  const partsCount = part1.PartsCount ? Number(part1.PartsCount) : 1;
  const firstPartSize = Number(part1.ContentLength);
  return { totalSize, partsCount, firstPartSize };
}

export interface S3TransferManagerConfig {
  bucket: string;
  region?: string;
  workers?: number;
  concurrency?: number;
  maxBufferedBytes?: number;
  streamHwm?: number;
  validateChecksum?: boolean;
  httpHandler?: "node" | "undici";
  spreadConnections?: boolean;
  tls?: boolean;
  ciphers?: string | null;
  stallTimeoutMs?: number;
  partRetries?: number;
  partTimes?: boolean;
  nativeCrc32?: boolean;
  progressBuf?: SharedArrayBuffer | null;
  bufferReturn?: boolean;
  logConnections?: boolean;
  ipThroughput?: boolean;
  profile?: boolean;
  profileDir?: string;
}

export class S3TransferManager {
  cfg: S3TransferManagerConfig;
  nWorkers: number;
  concurrency: number;
  cap: number;
  bufferReturn: boolean;
  progress: any;
  threads: Worker[];
  freeLanes: number[];
  active: any[];
  rr: number;
  objects: Map<string, any>;
  heldBuffers: Map<string, any>;
  bufferedBytes: number;
  totalInFlight: number;
  deliveredBytes: number;
  deliveredCount: number;
  deliveredChecksummed: number;
  partTimes: any[] | null;
  ipCounts: Map<string, number>;
  ipThroughput: Map<string, number>;
  tlsInfo: any;
  _readyCount: number;
  _readyResolve: ((value?: any) => void) | null;
  _readyPromise: Promise<void>;
  _spawnStart: number;
  spawnMs: number;
  _workerDone: number;
  _closeResolve: ((value?: any) => void) | null;
  _closePromise: Promise<any> | null;
  _failed: Error | null;
  control: any;

  constructor(cfg: S3TransferManagerConfig) {
    this.cfg = cfg;
    this.nWorkers = Math.max(1, cfg.workers || 1);
    this.concurrency = Math.max(1, cfg.concurrency || 1);
    this.cap = (cfg.maxBufferedBytes ?? 0) > 0 ? cfg.maxBufferedBytes! : Infinity;
    this.bufferReturn = Boolean(cfg.bufferReturn);
    this.progress = progressView(cfg.progressBuf ?? null);

    this.threads = [];
    this.freeLanes = new Array(this.nWorkers).fill(this.concurrency);
    this.active = [];
    this.rr = 0;
    this.objects = new Map();
    this.heldBuffers = new Map();
    this.bufferedBytes = 0;
    this.totalInFlight = 0;

    this.deliveredBytes = 0;
    this.deliveredCount = 0;
    this.deliveredChecksummed = 0;
    this.partTimes = cfg.partTimes ? [] : null;
    this.ipCounts = new Map();
    this.ipThroughput = new Map();
    this.tlsInfo = null;

    this._readyCount = 0;
    this._readyResolve = null;
    this._readyPromise = new Promise((res) => (this._readyResolve = res));
    this._spawnStart = performance.now();
    this.spawnMs = 0;
    this._workerDone = 0;
    this._closeResolve = null;
    this._closePromise = null;
    this._failed = null;

    this.control = makeClient({ region: cfg.region });
    this._spawnPool();
  }

  _spawnPool(): void {
    const c = this.cfg;
    const maxSockets = Math.max(64, this.concurrency * 2);
    for (let wi = 0; wi < this.nWorkers; ++wi) {
      const worker = new Worker(WORKER_PATH, {
        workerData: {
          bucket: c.bucket,
          region: c.region,
          parts: [],
          concurrency: this.concurrency,
          maxSockets,
          validateChecksum: c.validateChecksum,
          deliveryMode: "ordered-stream",
          logConnections: c.logConnections,
          spreadConnections: c.spreadConnections,
          tls: c.tls,
          ipThroughput: c.ipThroughput,
          httpHandler: c.httpHandler,
          ciphers: c.ciphers,
          stallTimeoutMs: c.stallTimeoutMs,
          partRetries: c.partRetries,
          partTimes: c.partTimes,
          workerId: wi,
          bufferPool: false,
          bufferReturn: this.bufferReturn,
          profile: c.profile,
          profileDir: c.profileDir,
          nativeCrc32: c.nativeCrc32,
          progressBuf: c.progressBuf,
        },
      });
      this.threads.push(worker);
      worker.on("message", (msg: any) => this._onMessage(wi, msg));
      worker.on("error", (err: any) => this._fail(err));
      worker.on("exit", (code: number) => {
        if (code !== 0 && !this._failed) {
          this._fail(new Error(`worker exited with code ${code}`));
        }
      });
    }
  }

  ready(): Promise<void> {
    return this._readyPromise;
  }

  _onMessage(wi: number, msg: any): void {
    if (msg.type === "ready") {
      if (++this._readyCount === this.nWorkers) {
        this.spawnMs = performance.now() - this._spawnStart;
        this._readyResolve!();
      }
    } else if (msg.type === "part") {
      const buf = Buffer.from(msg.buffer, 0, msg.byteLength);
      this.heldBuffers.set(`${msg.key}#${msg.partNumber}`, {
        buf,
        byteLength: msg.byteLength,
        hasChecksum: msg.hasChecksum,
        wi,
      });
      if (this.partTimes && msg.downloadMs !== undefined) {
        this.partTimes.push({
          key: msg.key,
          partNumber: msg.partNumber,
          bytes: msg.byteLength,
          ms: msg.downloadMs,
          vip: msg.vip ?? null,
          connId: msg.connId ?? null,
        });
      }
      this.bufferedBytes += msg.byteLength;
      this.freeLanes[wi] += 1;
      this.totalInFlight -= 1;
      this._drainKey(msg.key);
      this._dispatchMore();
    } else if (msg.type === "worker-done") {
      if (msg.ipCounts) {
        for (const [ip, c] of msg.ipCounts) {
          this.ipCounts.set(ip, (this.ipCounts.get(ip) || 0) + c);
        }
      }
      if (msg.ipThroughput) {
        for (const [ip, v] of msg.ipThroughput) {
          this.ipThroughput.set(ip, (this.ipThroughput.get(ip) || 0) + v);
        }
      }
      if (!this.tlsInfo && msg.tlsInfo) {
        this.tlsInfo = msg.tlsInfo;
      }
      if (++this._workerDone === this.nWorkers && this._closeResolve) {
        this._closeResolve();
      }
    } else if (msg.type === "error") {
      this._fail(new Error(`worker: ${msg.message}`));
    }
  }

  _nextPart(): any {
    const n = this.active.length;
    for (let i = 0; i < n; ++i) {
      const obj = this.active[this.rr % this.active.length];
      this.rr += 1;
      if (obj.cursor < obj.parts.length) {
        return obj.parts[obj.cursor++];
      }
    }
    return null;
  }

  _dispatchMore(): void {
    for (let wi = 0; wi < this.nWorkers; ++wi) {
      while (this.freeLanes[wi] > 0) {
        if (this.totalInFlight > 0 && this.bufferedBytes >= this.cap) {
          return;
        }
        const part = this._nextPart();
        if (!part) {
          return;
        }
        this.threads[wi].postMessage({ type: "assign", part });
        this.freeLanes[wi] -= 1;
        this.totalInFlight += 1;
      }
    }
  }

  _drainKey(key: string): void {
    const obj = this.objects.get(key);
    if (!obj || obj.paused) {
      return;
    }
    let n = obj.nextN;
    let id = `${key}#${n}`;
    while (this.heldBuffers.has(id)) {
      const info = this.heldBuffers.get(id);
      const buf = info.buf;
      if (this.bufferReturn) {
        buf.__wi = info.wi;
      }
      this.heldBuffers.delete(id);
      this.bufferedBytes -= info.byteLength;
      this.deliveredBytes += info.byteLength;
      if (info.hasChecksum) {
        ++this.deliveredChecksummed;
      }
      ++this.deliveredCount;
      ++n;
      id = `${key}#${n}`;
      const ok = obj.readable.push(buf);
      if (n > obj.partsCount) {
        obj.readable.push(null);
        obj.eofPushed = true;
      }
      if (!ok) {
        obj.paused = true;
        break;
      }
    }
    obj.nextN = n;
  }

  recycle(chunk: any): void {
    if (!this.bufferReturn || !chunk || chunk.__wi === undefined) {
      return;
    }
    const w = this.threads[chunk.__wi];
    if (!w) {
      return;
    }
    try {
      w.postMessage({ type: "return", buffer: chunk.buffer }, [chunk.buffer]);
    } catch {
      /* worker already stopped */
    }
  }

  async download({
    bucket,
    key,
  }: {
    bucket?: string;
    key: string;
  }): Promise<{ key: string; body: Readable; contentLength: number }> {
    if (this._failed) {
      throw this._failed;
    }
    const b = bucket ?? this.cfg.bucket;
    const info = await describeObject(this.control, b, key);
    const parts = buildParts(key, info.partsCount, info.firstPartSize, info.totalSize);
    const streamHwm =
      (this.cfg.streamHwm ?? 0) > 0 ? this.cfg.streamHwm! : Math.max(1 << 20, 2 * (parts[0]?.size ?? 1 << 20));

    const obj: any = {
      key,
      parts,
      cursor: 0,
      partsCount: info.partsCount,
      contentLength: info.totalSize,
      nextN: 1,
      paused: false,
      eofPushed: false,
      readable: null,
    };
    obj.readable = new Readable({
      highWaterMark: streamHwm,
      read: () => {
        if (obj.paused) {
          obj.paused = false;
          this._drainKey(key);
          this._dispatchMore();
        }
      },
    });
    this.objects.set(key, obj);
    this.active.push(obj);
    this._dispatchMore();
    return { key, body: obj.readable, contentLength: obj.contentLength };
  }

  async downloadMany({ bucket, keys }: { bucket?: string; keys: string[] }): Promise<{
    objects: Array<{ key: string; body: Readable; contentLength: number }>;
    done: Promise<void>;
    [Symbol.asyncIterator]: () => AsyncIterator<{ key: string; body: Readable; contentLength: number }>;
  }> {
    const handles = await Promise.all(keys.map((key) => this.download({ bucket, key })));
    const done = Promise.all(
      handles.map(
        (h) =>
          new Promise<void>((res, rej) => {
            h.body.once("end", res);
            h.body.once("error", rej);
          })
      )
    ).then(() => {});
    return {
      objects: handles,
      done,
      [Symbol.asyncIterator]() {
        let i = 0;
        return {
          next: () =>
            Promise.resolve(
              i < handles.length ? { value: handles[i++], done: false } : { value: undefined as any, done: true }
            ),
        };
      },
    };
  }

  resetScheduler(): void {
    this.active = [];
    this.objects.clear();
    this.heldBuffers.clear();
    this.bufferedBytes = 0;
    this.totalInFlight = 0;
    this.rr = 0;
    this.freeLanes.fill(this.concurrency);
    this.deliveredBytes = 0;
    this.deliveredCount = 0;
    this.deliveredChecksummed = 0;
    if (this.partTimes) {
      this.partTimes = [];
    }
  }

  async close(): Promise<any> {
    if (this._closePromise) {
      return this._closePromise;
    }
    this._closePromise = new Promise((res) => (this._closeResolve = res));
    for (const w of this.threads) {
      w.postMessage({ type: "stop" });
    }
    await this._closePromise;
    await Promise.all(this.threads.map((w) => w.terminate()));
    this.control.destroy();
    return {
      deliveredBytes: this.deliveredBytes,
      partsDone: this.deliveredCount,
      checksummed: this.deliveredChecksummed,
      ipCounts: [...this.ipCounts],
      ipThroughput: [...this.ipThroughput],
      partTimes: this.partTimes ?? [],
      tlsInfo: this.tlsInfo,
      spawnMs: this.spawnMs,
    };
  }

  _fail(err: any): void {
    if (this._failed) {
      return;
    }
    this._failed = err instanceof Error ? err : new Error(String(err));
    for (const obj of this.objects.values()) {
      if (!obj.eofPushed) {
        obj.readable.destroy(this._failed);
      }
    }
    if (this._readyResolve) {
      this._readyResolve();
    }
    if (this._closeResolve) {
      this._closeResolve();
    }
  }
}
