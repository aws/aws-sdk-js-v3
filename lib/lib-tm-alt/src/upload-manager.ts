// @ts-nocheck
/**
 * S3UploadManager — orchestrates multipart uploads via worker thread pools.
 *
 * Supports three upload sources:
 *   - 'memory': pre-filled SharedArrayBuffers (zero-copy view per part)
 *   - 'file': read from a source file at part offsets
 *   - 'stream': main-thread carves a Readable into part buffers, transfers them
 *               to an uploader pool (bounded buffer recycling = backpressure)
 *   - 'open': per-worker opener resolves its own stream (distributed ingress)
 *   - 'open-stream': two-tier carver+uploader with per-carver streams
 *
 * Lifecycle:
 *   const um = new S3UploadManager(cfg);
 *   await um.ready();
 *   const result = await um.upload({ key, size, body?, ... });
 *   await um.close();
 */

import { Worker } from "node:worker_threads";
import type { Readable } from "node:stream";
import { randomFillSync } from "node:crypto";
import path from "node:path";
import {
  CreateMultipartUploadCommand,
  CompleteMultipartUploadCommand,
  AbortMultipartUploadCommand,
} from "@aws-sdk/client-s3";
import { makeClient } from "./s3";
import { computeParts } from "./config";
import { bumpProgress, progressView, newProgressBuffer, ProgressReporter } from "./progress";
import { mergeIpThroughput } from "./ip-throughput";

const WORKER_PATH = path.resolve(__dirname, "upload-worker.js");

export interface S3UploadManagerConfig {
  bucket: string;
  region?: string;
  workers?: number;
  concurrency?: number;
  partSize?: number;
  checksum?: string | null;
  maxSockets?: number;
  uploadSource?: "memory" | "file" | "stream" | "open" | "open-stream";
  sourceFilePath?: string | null;
  openDesc?: { type: "memory"; chunk?: number } | { type: "file"; path: string } | null;
  spreadConnections?: boolean;
  tls?: boolean;
  ipThroughput?: boolean;
  httpHandler?: "node" | "undici";
  ciphers?: string | null;
  nativeCrc32?: boolean;
  progressBuf?: SharedArrayBuffer | null;
  uploadMaxBuffered?: number;
  clientRate?: number;
  clientChunk?: number;
  carvers?: number;
}

/** Round-robin parts across N buckets. */
function assignParts(parts: any[], n: number): any[][] {
  const buckets: any[][] = Array.from({ length: n }, () => []);
  parts.forEach((p, i) => buckets[i % n].push(p));
  return buckets;
}

/** Build a CompletedPart entry carrying whichever checksum the part returned. */
function completedPart(r: any) {
  const p: any = { PartNumber: r.PartNumber, ETag: r.ETag };
  if (r.ChecksumCRC32C) {
    p.ChecksumCRC32C = r.ChecksumCRC32C;
  }
  if (r.ChecksumCRC32) {
    p.ChecksumCRC32 = r.ChecksumCRC32;
  }
  if (r.ChecksumSHA1) {
    p.ChecksumSHA1 = r.ChecksumSHA1;
  }
  if (r.ChecksumSHA256) {
    p.ChecksumSHA256 = r.ChecksumSHA256;
  }
  return p;
}

export interface UploadResult {
  bytes: number;
  completed: any[];
  wallMs: number;
  ipThroughput: any[];
  tlsInfo: any;
}

export class S3UploadManager {
  cfg: S3UploadManagerConfig;
  control: any;

  constructor(cfg: S3UploadManagerConfig) {
    this.cfg = {
      workers: 4,
      concurrency: 4,
      partSize: 8 * 1024 * 1024,
      uploadSource: "memory",
      checksum: "CRC32",
      ...cfg,
    };
    this.control = makeClient({ region: this.cfg.region });
  }

  /**
   * Upload one or more objects. Each entry in `objects` specifies a key and size.
   * For 'memory' source, provide `objectBuffers` (key -> SharedArrayBuffer).
   * For 'stream' source, provide `bodies` (key -> Readable).
   *
   * Returns aggregated results after CompleteMultipartUpload succeeds for all.
   */
  async upload({
    keys,
    sizes,
    objectBuffers,
    bodies,
  }: {
    keys: string[];
    sizes: Record<string, number>;
    objectBuffers?: Record<string, SharedArrayBuffer>;
    bodies?: Record<string, Readable>;
  }): Promise<UploadResult> {
    const cfg = this.cfg;
    const bucket = cfg.bucket;
    const partSize = cfg.partSize!;
    const uploadSource = cfg.uploadSource!;

    // Build base part list from the first object's size (all same size assumed for simplicity).
    const firstSize = sizes[keys[0]];
    const baseParts = computeParts(firstSize, partSize);

    if (uploadSource === "stream") {
      return this._runStreamUpload({ keys, baseParts, bodies: bodies! });
    }
    if (uploadSource === "open-stream") {
      return this._runOpenStreamUpload({ keys, baseParts });
    }
    return this._runSliceUpload({ keys, baseParts, objectBuffers: objectBuffers ?? null });
  }

  /**
   * SLICE mode: spawn workers, each owns a slice of parts.
   */
  private async _runSliceUpload({ keys, baseParts, objectBuffers }: any): Promise<UploadResult> {
    const cfg = this.cfg;
    const bucket = cfg.bucket;
    const nWorkers = Math.max(1, cfg.workers!);
    const concurrency = cfg.concurrency!;
    const maxSockets = Math.max(64, nWorkers * concurrency);

    // CreateMultipartUpload for each key.
    const uploadIds: Record<string, string> = {};
    for (const key of keys) {
      const res = await this.control.send(
        new CreateMultipartUploadCommand({
          Bucket: bucket,
          Key: key,
          ...(cfg.checksum ? { ChecksumAlgorithm: cfg.checksum } : {}),
        })
      );
      uploadIds[key] = res.UploadId!;
    }

    // Build the full part list.
    const allParts: any[] = [];
    for (const key of keys) {
      for (const p of baseParts) {
        allParts.push({ ...p, key, uploadId: uploadIds[key] });
      }
    }
    const buckets = assignParts(allParts, nWorkers);

    const result = await new Promise<UploadResult>((resolve, reject) => {
      const threads: Worker[] = [];
      let readyCount = 0;
      let doneCount = 0;
      const results: any[] = [];
      let t0 = 0;
      let tlsInfo: any = null;
      const runIpTput = new Map();

      for (let wi = 0; wi < nWorkers; ++wi) {
        const worker = new Worker(WORKER_PATH, {
          workerData: {
            bucket,
            region: cfg.region,
            concurrency,
            maxSockets,
            checksum: cfg.checksum || null,
            uploadSource: cfg.uploadSource,
            objectBuffers: objectBuffers ?? undefined,
            sourceFilePath: cfg.sourceFilePath ?? null,
            openDesc: cfg.openDesc ?? null,
            spreadConnections: cfg.spreadConnections ?? false,
            tls: cfg.tls ?? true,
            ipThroughput: cfg.ipThroughput ?? false,
            httpHandler: cfg.httpHandler ?? "node",
            ciphers: cfg.ciphers ?? null,
            nativeCrc32: cfg.nativeCrc32 ?? false,
            workerId: wi,
            maxPartSize: baseParts.reduce((m: number, p: any) => Math.max(m, p.size), 0),
            progressBuf: cfg.progressBuf ?? null,
          },
        });
        threads.push(worker);
        worker.on("message", (msg: any) => {
          if (msg.type === "ready") {
            if (++readyCount === nWorkers) {
              t0 = performance.now();
              for (let i = 0; i < nWorkers; ++i) {
                threads[i].postMessage({ type: "start", parts: buckets[i] });
              }
            }
          } else if (msg.type === "done") {
            results.push(msg);
            mergeIpThroughput(runIpTput, msg.ipThroughput);
            if (!tlsInfo && msg.tlsInfo) {
              tlsInfo = msg.tlsInfo;
            }
            if (++doneCount === nWorkers) {
              const completed = results.flatMap((r) => r.completed);
              const wallMs = performance.now() - t0;
              threads.forEach((w) => w.terminate());
              resolve({
                bytes: results.reduce((s, r) => s + r.bytes, 0),
                completed,
                wallMs,
                ipThroughput: [...runIpTput],
                tlsInfo,
              });
            }
          } else if (msg.type === "error") {
            threads.forEach((w) => w.terminate());
            reject(new Error(`worker: ${msg.message}`));
          }
        });
        worker.on("error", reject);
      }
    });

    // CompleteMultipartUpload for each key.
    for (const key of keys) {
      const parts = result.completed
        .filter((c: any) => c.key === key)
        .map(completedPart)
        .sort((a: any, b: any) => a.PartNumber - b.PartNumber);
      await this.control.send(
        new CompleteMultipartUploadCommand({
          Bucket: bucket,
          Key: key,
          UploadId: uploadIds[key],
          MultipartUpload: { Parts: parts },
        })
      );
    }

    return result;
  }

  /**
   * STREAM mode: main thread carves customer Readable into part buffers, transfers
   * them to uploader workers, bounded buffer pool = backpressure.
   */
  private async _runStreamUpload({ keys, baseParts, bodies }: any): Promise<UploadResult> {
    const cfg = this.cfg;
    const bucket = cfg.bucket;
    const nWorkers = Math.max(1, cfg.workers!);
    const concurrency = cfg.concurrency!;
    const maxSockets = Math.max(64, nWorkers * concurrency);
    const partSizeMax = baseParts.reduce((m: number, p: any) => Math.max(m, p.size), 0) || 1;
    const totalParts = baseParts.length * keys.length;
    const lanesPerWorker = Math.max(1, concurrency);
    const budget =
      (cfg.uploadMaxBuffered ?? 0) > 0 ? cfg.uploadMaxBuffered! : (nWorkers * lanesPerWorker + 1) * partSizeMax;
    const maxBuffers = Math.max(nWorkers * lanesPerWorker + 1, Math.floor(budget / partSizeMax) || 1);

    // CreateMultipartUpload for each key.
    const uploadIds: Record<string, string> = {};
    for (const key of keys) {
      const res = await this.control.send(
        new CreateMultipartUploadCommand({
          Bucket: bucket,
          Key: key,
          ...(cfg.checksum ? { ChecksumAlgorithm: cfg.checksum } : {}),
        })
      );
      uploadIds[key] = res.UploadId!;
    }

    const result = await new Promise<UploadResult>((resolve, reject) => {
      const threads: Worker[] = [];
      let readyCount = 0;
      let settled = false;
      let t0 = 0;
      let tlsInfo: any = null;

      // Recycled buffer pool.
      const freeBufs: Buffer[] = [];
      for (let i = 0; i < maxBuffers; ++i) {
        freeBufs.push(Buffer.allocUnsafeSlow(partSizeMax));
      }
      const bufWaiters: Array<() => void> = [];
      const acquireBuf = async (): Promise<Buffer> => {
        let b = freeBufs.pop();
        while (!b) {
          await new Promise<void>((r) => bufWaiters.push(r));
          b = freeBufs.pop();
        }
        return b;
      };
      const releaseBuf = (ab: ArrayBuffer) => {
        freeBufs.push(Buffer.from(ab));
        bufWaiters.shift()?.();
      };

      const freeLanes = new Array(nWorkers).fill(lanesPerWorker);
      const ready: any[] = [];
      const completed: any[] = [];
      let uploadedCount = 0;
      let totalBytes = 0;

      const cleanup = () => {
        threads.forEach((w) => w.terminate());
      };
      const fail = (err: any) => {
        if (settled) {
          return;
        }
        settled = true;
        cleanup();
        reject(err instanceof Error ? err : new Error(String(err)));
      };

      const dispatch = () => {
        for (let wi = 0; wi < nWorkers && ready.length; ++wi) {
          while (freeLanes[wi] > 0 && ready.length) {
            const it = ready.shift()!;
            freeLanes[wi] -= 1;
            threads[wi].postMessage(
              {
                type: "upload",
                key: it.key,
                uploadId: it.uploadId,
                partNumber: it.partNumber,
                size: it.size,
                buffer: it.buf.buffer,
              },
              [it.buf.buffer]
            );
          }
        }
      };
      const enqueue = (item: any) => {
        ready.push(item);
        dispatch();
      };

      // Producer per object: read its stream, carve + fill part buffers.
      async function produceKey(key: string) {
        const uploadId = uploadIds[key];
        const stream = bodies[key];
        let partIdx = 0;
        let buf: Buffer | null = null;
        let off = 0;
        for await (const chunk of stream) {
          let cpos = 0;
          while (cpos < chunk.length) {
            if (!buf) {
              buf = await acquireBuf();
              off = 0;
            }
            const target = baseParts[partIdx].size;
            const n = Math.min(chunk.length - cpos, target - off);
            chunk.copy(buf, off, cpos, cpos + n);
            off += n;
            cpos += n;
            if (off === target) {
              enqueue({ key, uploadId, partNumber: baseParts[partIdx].partNumber, size: target, buf });
              buf = null;
              ++partIdx;
            }
          }
        }
      }

      const onUploaded = (wi: number, msg: any) => {
        freeLanes[wi] += 1;
        if (!tlsInfo && msg.tlsInfo) {
          tlsInfo = msg.tlsInfo;
        }
        completed.push({
          key: msg.key,
          PartNumber: msg.partNumber,
          ETag: msg.ETag,
          ChecksumCRC32C: msg.ChecksumCRC32C,
          ChecksumCRC32: msg.ChecksumCRC32,
          ChecksumSHA1: msg.ChecksumSHA1,
          ChecksumSHA256: msg.ChecksumSHA256,
        });
        totalBytes += msg.size;
        ++uploadedCount;
        releaseBuf(msg.buffer);
        if (uploadedCount === totalParts) {
          if (!settled) {
            const wallMs = performance.now() - t0;
            settled = true;
            threads.forEach((w) => w.postMessage({ type: "stop" }));
            cleanup();
            resolve({ bytes: totalBytes, completed, wallMs, ipThroughput: [], tlsInfo });
          }
          return;
        }
        dispatch();
      };

      for (let wi = 0; wi < nWorkers; ++wi) {
        const worker = new Worker(WORKER_PATH, {
          workerData: {
            bucket,
            region: cfg.region,
            uploadSource: "stream",
            concurrency,
            checksum: cfg.checksum || null,
            maxSockets,
            spreadConnections: cfg.spreadConnections ?? false,
            tls: cfg.tls ?? true,
            ipThroughput: cfg.ipThroughput ?? false,
            httpHandler: cfg.httpHandler ?? "node",
            ciphers: cfg.ciphers ?? null,
            nativeCrc32: cfg.nativeCrc32 ?? false,
            workerId: wi,
            progressBuf: cfg.progressBuf ?? null,
          },
        });
        threads.push(worker);
        worker.on("message", (msg: any) => {
          if (msg.type === "ready") {
            if (++readyCount === nWorkers) {
              t0 = performance.now();
              Promise.all(keys.map((k) => produceKey(k))).catch(fail);
            }
          } else if (msg.type === "uploaded") {
            onUploaded(wi, msg);
          } else if (msg.type === "error") {
            fail(new Error(`worker: ${msg.message}`));
          }
        });
        worker.on("error", fail);
        worker.on("exit", (code: number) => {
          if (code !== 0 && !settled) {
            fail(new Error(`worker exited with code ${code}`));
          }
        });
      }
    });

    // CompleteMultipartUpload.
    for (const key of keys) {
      const parts = result.completed
        .filter((c: any) => c.key === key)
        .map(completedPart)
        .sort((a: any, b: any) => a.PartNumber - b.PartNumber);
      await this.control.send(
        new CompleteMultipartUploadCommand({
          Bucket: bucket,
          Key: key,
          UploadId: uploadIds[key],
          MultipartUpload: { Parts: parts },
        })
      );
    }

    return result;
  }

  /**
   * OPEN-STREAM mode: two-tier carver+uploader.
   */
  private async _runOpenStreamUpload({ keys, baseParts }: any): Promise<UploadResult> {
    const cfg = this.cfg;
    const bucket = cfg.bucket;
    const nWorkers = Math.max(1, cfg.workers!);
    const concurrency = cfg.concurrency!;
    const maxSockets = Math.max(64, nWorkers * concurrency);
    const partSizeMax = baseParts.reduce((m: number, p: any) => Math.max(m, p.size), 0) || 1;
    const perFileBytes = baseParts.reduce((s: number, p: any) => s + p.size, 0);
    const totalParts = baseParts.length * keys.length;
    const nUploaders = Math.max(1, Math.min(nWorkers, totalParts));
    const nCarvers = Math.max(1, Math.min(cfg.carvers ?? keys.length, keys.length));
    const lanesPerUploader = Math.max(1, concurrency);
    const budget =
      (cfg.uploadMaxBuffered ?? 0) > 0
        ? cfg.uploadMaxBuffered!
        : (nUploaders * lanesPerUploader + nCarvers) * partSizeMax;
    const maxBuffers = Math.max(nUploaders * lanesPerUploader + nCarvers, Math.floor(budget / partSizeMax));
    const carverLimit = Math.max(1, Math.floor(maxBuffers / nCarvers));

    const carverObjects: string[][] = Array.from({ length: nCarvers }, () => []);
    keys.forEach((key: string, i: number) => carverObjects[i % nCarvers].push(key));

    // CreateMultipartUpload for each key.
    const uploadIds: Record<string, string> = {};
    for (const key of keys) {
      const res = await this.control.send(
        new CreateMultipartUploadCommand({
          Bucket: bucket,
          Key: key,
          ...(cfg.checksum ? { ChecksumAlgorithm: cfg.checksum } : {}),
        })
      );
      uploadIds[key] = res.UploadId!;
    }

    const result = await new Promise<UploadResult>((resolve, reject) => {
      const uploaders: Worker[] = [];
      const carvers: Worker[] = [];
      let uReady = 0;
      let cReady = 0;
      let started = false;
      let settled = false;
      let t0 = 0;
      let tlsInfo: any = null;
      let uploadedCount = 0;
      let totalBytes = 0;
      const completed: any[] = [];
      const freeLanes = new Array(nUploaders).fill(lanesPerUploader);
      const ready: any[] = [];

      const cleanup = () => {
        for (const w of uploaders) {
          try {
            w.terminate();
          } catch {
            /* ignore */
          }
        }
        for (const w of carvers) {
          try {
            w.terminate();
          } catch {
            /* ignore */
          }
        }
      };
      const fail = (err: any) => {
        if (settled) {
          return;
        }
        settled = true;
        cleanup();
        reject(err instanceof Error ? err : new Error(String(err)));
      };

      const dispatch = () => {
        for (let ui = 0; ui < nUploaders && ready.length; ++ui) {
          while (freeLanes[ui] > 0 && ready.length) {
            const it = ready.shift()!;
            freeLanes[ui] -= 1;
            uploaders[ui].postMessage(
              {
                type: "upload",
                key: it.key,
                uploadId: it.uploadId,
                partNumber: it.partNumber,
                size: it.size,
                carverId: it.carverId,
                buffer: it.buf.buffer,
              },
              [it.buf.buffer]
            );
          }
        }
      };

      const maybeBegin = () => {
        if (started || uReady !== nUploaders || cReady !== nCarvers) {
          return;
        }
        started = true;
        t0 = performance.now();
        for (let ci = 0; ci < nCarvers; ++ci) {
          const objects = carverObjects[ci].map((key) => ({
            key,
            uploadId: uploadIds[key],
            size: perFileBytes,
            baseParts,
          }));
          carvers[ci].postMessage({ type: "carve", objects });
        }
      };

      // Uploader tier.
      for (let ui = 0; ui < nUploaders; ++ui) {
        const worker = new Worker(WORKER_PATH, {
          workerData: {
            role: "uploader",
            bucket,
            region: cfg.region,
            concurrency,
            checksum: cfg.checksum || null,
            maxSockets,
            spreadConnections: cfg.spreadConnections ?? false,
            tls: cfg.tls ?? true,
            ipThroughput: cfg.ipThroughput ?? false,
            httpHandler: cfg.httpHandler ?? "node",
            ciphers: cfg.ciphers ?? null,
            nativeCrc32: cfg.nativeCrc32 ?? false,
            workerId: ui,
            progressBuf: cfg.progressBuf ?? null,
          },
        });
        uploaders.push(worker);
        worker.on("message", (msg: any) => {
          if (msg.type === "ready") {
            ++uReady;
            maybeBegin();
          } else if (msg.type === "uploaded") {
            freeLanes[ui] += 1;
            if (!tlsInfo && msg.tlsInfo) {
              tlsInfo = msg.tlsInfo;
            }
            completed.push({
              key: msg.key,
              PartNumber: msg.partNumber,
              ETag: msg.ETag,
              ChecksumCRC32C: msg.ChecksumCRC32C,
              ChecksumCRC32: msg.ChecksumCRC32,
              ChecksumSHA1: msg.ChecksumSHA1,
              ChecksumSHA256: msg.ChecksumSHA256,
            });
            totalBytes += msg.size;
            ++uploadedCount;
            carvers[msg.carverId]?.postMessage({ type: "ack", buffer: msg.buffer }, [msg.buffer]);
            if (uploadedCount === totalParts) {
              if (!settled) {
                const wallMs = performance.now() - t0;
                settled = true;
                cleanup();
                resolve({ bytes: totalBytes, completed, wallMs, ipThroughput: [], tlsInfo });
              }
              return;
            }
            dispatch();
          } else if (msg.type === "error") {
            fail(new Error(`uploader: ${msg.message}`));
          }
        });
        worker.on("error", fail);
        worker.on("exit", (code: number) => {
          if (code !== 0 && !settled) {
            fail(new Error(`uploader exited with code ${code}`));
          }
        });
      }

      // Carver tier.
      for (let ci = 0; ci < nCarvers; ++ci) {
        const cid = ci;
        const worker = new Worker(WORKER_PATH, {
          workerData: {
            role: "carver",
            bucket,
            region: cfg.region,
            concurrency,
            checksum: cfg.checksum || null,
            maxSockets,
            spreadConnections: cfg.spreadConnections ?? false,
            tls: cfg.tls ?? true,
            ipThroughput: cfg.ipThroughput ?? false,
            httpHandler: cfg.httpHandler ?? "node",
            ciphers: cfg.ciphers ?? null,
            nativeCrc32: cfg.nativeCrc32 ?? false,
            workerId: ci,
            openDesc: cfg.openDesc ?? null,
            maxPartSize: partSizeMax,
            carverLimit,
          },
        });
        carvers.push(worker);
        worker.on("message", (msg: any) => {
          if (msg.type === "ready") {
            ++cReady;
            maybeBegin();
          } else if (msg.type === "part") {
            ready.push({
              key: msg.key,
              uploadId: msg.uploadId,
              partNumber: msg.partNumber,
              size: msg.size,
              carverId: cid,
              buf: Buffer.from(msg.buffer),
            });
            dispatch();
          } else if (msg.type === "carver-done") {
            /* informational */
          } else if (msg.type === "error") {
            fail(new Error(`carver: ${msg.message}`));
          }
        });
        worker.on("error", fail);
        worker.on("exit", (code: number) => {
          if (code !== 0 && !settled) {
            fail(new Error(`carver exited with code ${code}`));
          }
        });
      }
    });

    // CompleteMultipartUpload.
    for (const key of keys) {
      const parts = result.completed
        .filter((c: any) => c.key === key)
        .map(completedPart)
        .sort((a: any, b: any) => a.PartNumber - b.PartNumber);
      await this.control.send(
        new CompleteMultipartUploadCommand({
          Bucket: bucket,
          Key: key,
          UploadId: uploadIds[key],
          MultipartUpload: { Parts: parts },
        })
      );
    }

    return result;
  }

  close(): void {
    try {
      this.control.destroy();
    } catch {
      /* ignore */
    }
  }
}
