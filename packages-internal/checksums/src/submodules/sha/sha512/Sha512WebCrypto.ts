import { concatBytes, toUint8Array } from "@smithy/core/serde";
import type { Checksum, SourceData } from "@smithy/types";

import { Sha512Js } from "./Sha512Js";

const { digest, sign, importKey } = globalThis?.crypto?.subtle ?? ({} as SubtleCrypto);
const subtle: SubtleCrypto | undefined =
  typeof digest === "function" && typeof sign === "function" && typeof importKey === "function"
    ? globalThis.crypto.subtle
    : undefined;

/**
 * Maximum bytes to buffer before falling back to streaming Sha512Js.
 */
const MAX_PENDING_BYTES = 8 * 1024 * 1024;

/**
 * SHA-512 using the Web Crypto API (crypto.subtle) when available,
 * falling back to the pure JS implementation.
 *
 * Caution: WebCrypto digest() needs the whole message at once, so data is
 * buffered until MAX_PENDING_BYTES, then streamed through Sha512Js instead.
 * @public
 */
export class Sha512WebCrypto implements Checksum {
  public readonly digestLength = 64 as const;
  private readonly secret?: Uint8Array;
  private pending: Uint8Array[] = [];
  private pendingBytes = 0;
  private fallback?: Sha512Js;
  private finished = false;

  public constructor(secret?: SourceData) {
    if (secret) {
      this.secret = toUint8Array(secret);
    }
    if (!subtle) {
      this.fallback = new Sha512Js(secret);
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
    if (this.secret) {
      this.finished = true;
      const key = await subtle!.importKey(
        "raw",
        this.secret as Uint8Array<ArrayBuffer>,
        { name: "HMAC", hash: "SHA-512" },
        false,
        ["sign"]
      );
      const sig = await subtle!.sign("HMAC", key, data as Uint8Array<ArrayBuffer>);
      return new Uint8Array(sig);
    }

    const hash = await subtle!.digest("SHA-512", data as Uint8Array<ArrayBuffer>);
    return new Uint8Array(hash);
  }

  public reset(): void {
    this.pending = [];
    this.pendingBytes = 0;
    this.finished = false;
    if (subtle) {
      this.fallback = undefined;
    } else {
      this.fallback = new Sha512Js(this.secret);
    }
  }

  private switchToFallback(): void {
    const sha512Js = new Sha512Js(this.secret);
    for (const chunk of this.pending) {
      sha512Js.update(chunk);
    }
    this.fallback = sha512Js;
    this.pending = [];
    this.pendingBytes = 0;
  }
}
