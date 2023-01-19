import { Checksum, SourceData } from "@aws-sdk/types";
import { fromArrayBuffer, fromString, StringEncoding } from "@aws-sdk/util-buffer-from";
import { toUint8Array } from "@aws-sdk/util-utf8";
import { Buffer } from "buffer";
import { createHash, createHmac, Hash as NodeHash, Hmac } from "crypto";

export class Hash implements Checksum {
  private readonly algorithmIdentifier: string;
  private readonly secret?: SourceData;
  private hash!: NodeHash | Hmac;

  constructor(algorithmIdentifier: string, secret?: SourceData) {
    this.algorithmIdentifier = algorithmIdentifier;
    this.secret = secret;
    this.reset();
  }

  update(toHash: SourceData, encoding?: "utf8" | "ascii" | "latin1"): void {
    this.hash.update(toUint8Array(castSourceData(toHash, encoding)));
  }

  digest(): Promise<Uint8Array> {
    return Promise.resolve(this.hash.digest());
  }

  reset(): void {
    this.hash = this.secret
      ? createHmac(this.algorithmIdentifier, castSourceData(this.secret))
      : createHash(this.algorithmIdentifier);
  }
}

function castSourceData(toCast: SourceData, encoding?: StringEncoding): Buffer {
  if (Buffer.isBuffer(toCast)) {
    return toCast;
  }

  if (typeof toCast === "string") {
    return fromString(toCast, encoding);
  }

  if (ArrayBuffer.isView(toCast)) {
    return fromArrayBuffer(toCast.buffer, toCast.byteOffset, toCast.byteLength);
  }

  return fromArrayBuffer(toCast);
}
