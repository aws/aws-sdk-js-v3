import type { Checksum, SourceData } from "@smithy/types";
import { createHash, createHmac } from "node:crypto";

import { Sha1Js } from "./Sha1Js";

const hasNativeCrypto = (() => {
  try {
    createHash("sha1");
    return true;
  } catch {
    return false;
  }
})();

/**
 * SHA-1 using Node.js crypto native implementation when available,
 * falling back to the pure JS implementation.
 * @public
 */
export interface Sha1Node extends Checksum {
  readonly digestLength: 20;
}

/**
 * @public
 */
export const Sha1Node: new (secret?: SourceData) => Sha1Node = hasNativeCrypto ? buildNativeClass() : Sha1Js;

function buildNativeClass() {
  return class Sha1Node implements Checksum {
    public readonly digestLength = 20 as const;
    private readonly secret?: SourceData;
    private hash: ReturnType<typeof createHash> | ReturnType<typeof createHmac>;
    private readonly isHmac: boolean;
    private finished = false;

    public constructor(secret?: SourceData) {
      this.secret = secret;
      this.isHmac = !!secret;
      this.hash = this.createHash();
    }

    public update(data: Uint8Array): void {
      if (this.finished) {
        throw new Error("Attempted to update an already finished hash.");
      }
      this.hash.update(data);
    }

    public async digest(): Promise<Uint8Array> {
      let buf: Buffer;
      if (this.isHmac) {
        this.finished = true;
        buf = (this.hash as ReturnType<typeof createHmac>).digest();
      } else {
        buf = (this.hash as ReturnType<typeof createHash>).copy().digest();
      }
      return new Uint8Array(buf.buffer, buf.byteOffset, buf.byteLength);
    }

    public reset(): void {
      this.hash = this.createHash();
      this.finished = false;
    }

    private createHash() {
      return this.secret ? createHmac("sha1", toBuffer(this.secret)) : createHash("sha1");
    }
  };
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
