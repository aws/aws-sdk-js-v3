import { concatBytes, toUint8Array } from "@smithy/core/serde";
import type { Checksum, SourceData } from "@smithy/types";

import { Sha1Js } from "./Sha1Js";

const { digest, sign, importKey } = globalThis?.crypto?.subtle ?? {};
const subtle: SubtleCrypto | undefined =
  typeof digest === "function" && typeof sign === "function" && typeof importKey === "function"
    ? globalThis.crypto.subtle
    : undefined;

/**
 * Maximum bytes to buffer before falling back to streaming Sha1Js.
 */
const MAX_PENDING_BYTES = 8 * 1024 * 1024;

/**
 * SHA-1 using the Web Crypto API (crypto.subtle) when available,
 * falling back to the pure JS implementation.
 *
 * Caution: buffers data entirely in memory since WebCrypto requires
 * all data at once for digest().
 * @public
 */
export class Sha1WebCrypto implements Checksum {
  public readonly digestLength = 20 as const;
  private readonly secret?: Uint8Array;
  private pending: Uint8Array[] = [];
  private pendingBytes = 0;
  private fallback?: Sha1Js;
  private finished = false;

  public constructor(secret?: SourceData) {
    if (secret) {
      this.secret = toUint8Array(secret);
    }
  }

  public update(data: Uint8Array): void {
    if (this.finished) {
      throw new Error("Attempted to update an already finished HMAC.");
    }
    if (this.fallback) {
      this.fallback.update(data);
      return;
    }

    this.pending.push(data.slice());
    this.pendingBytes += data.byteLength;

    if (this.pendingBytes >= MAX_PENDING_BYTES) {
      this.switchToFallback();
    }
  }

  public async digest(): Promise<Uint8Array> {
    if (this.fallback) {
      return this.fallback.digest();
    }

    if (this.secret && this.finished) {
      throw new Error("Attempted to digest an already finished HMAC.");
    }

    const data = concatBytes(this.pending);
    if (subtle) {
      if (this.secret) {
        this.finished = true;
        const key = await subtle.importKey("raw", this.secret, { name: "HMAC", hash: "SHA-1" }, false, ["sign"]);
        const sig = await subtle.sign("HMAC", key, data);
        return new Uint8Array(sig);
      }

      const hash = await subtle.digest("SHA-1", data);
      return new Uint8Array(hash);
    }

    const sha1 = new Sha1Js(this.secret);
    sha1.update(data);
    return sha1.digest();
  }

  public reset(): void {
    this.pending = [];
    this.pendingBytes = 0;
    this.fallback = undefined;
    this.finished = false;
  }

  private switchToFallback(): void {
    const sha1Js = new Sha1Js(this.secret);
    for (const chunk of this.pending) {
      sha1Js.update(chunk);
    }
    this.fallback = sha1Js;
    this.pending = [];
    this.pendingBytes = 0;
  }
}
