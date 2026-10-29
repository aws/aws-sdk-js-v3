import type { SourceData } from "@smithy/types";
import { createHash, createHmac } from "node:crypto";

import { Sha512Js } from "./Sha512Js";

// Cached on first construction rather than at module load.
let nativeSupported: boolean | undefined;

function detectNative(): boolean {
  if (nativeSupported === undefined) {
    try {
      createHash("sha512");
      nativeSupported = true;
    } catch {
      nativeSupported = false;
    }
  }
  return nativeSupported;
}

/**
 * SHA-512, using Node.js native crypto when available and falling back to the
 * inherited pure-JS implementation otherwise.
 * @public
 */
export class Sha512 extends Sha512Js {
  private native?: ReturnType<typeof createHash> | ReturnType<typeof createHmac>;
  private readonly nativeSecret?: SourceData;
  private nativeFinished = false;

  public constructor(secret?: SourceData) {
    super(secret);
    this.nativeSecret = secret;
    if (detectNative()) {
      this.native = this.createNative();
    }
  }

  public update(data: Uint8Array): void {
    if (!this.native) {
      super.update(data);
      return;
    }
    if (this.nativeFinished) {
      throw new Error("Attempted to update an already finished hash.");
    }
    this.native.update(data);
  }

  public async digest(): Promise<Uint8Array> {
    if (!this.native) {
      return super.digest();
    }
    let buf: Buffer;
    if (this.nativeSecret !== undefined) {
      this.nativeFinished = true;
      buf = (this.native as ReturnType<typeof createHmac>).digest();
    } else {
      // copy() keeps digest() non-destructive for plain hashes.
      buf = (this.native as ReturnType<typeof createHash>).copy().digest();
    }
    return new Uint8Array(buf.buffer, buf.byteOffset, buf.byteLength);
  }

  public reset(): void {
    if (!this.native) {
      super.reset();
      return;
    }
    this.native = this.createNative();
    this.nativeFinished = false;
  }

  private createNative() {
    return this.nativeSecret !== undefined ? createHmac("sha512", toBuffer(this.nativeSecret)) : createHash("sha512");
  }
}

function toBuffer(data: SourceData): Buffer | string {
  if (typeof data === "string") {
    return data;
  }
  if (ArrayBuffer.isView(data)) {
    return Buffer.from(data.buffer, data.byteOffset, data.byteLength);
  }
  return Buffer.from(data);
}
