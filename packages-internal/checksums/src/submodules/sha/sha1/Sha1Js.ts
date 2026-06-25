import { toUint8Array } from "@smithy/core/serde";
import type { Checksum, SourceData } from "@smithy/types";

const BLOCK = 64;
const DIGEST_LENGTH = 20;
const INIT = new Int32Array([0x67452301, 0xefcdab89, 0x98badcfe, 0x10325476, 0xc3d2e1f0]);
// SHA-1 round constants indexed by round range (0-19, 20-39, 40-59, 60-79).
const K = new Int32Array([0x5a827999, 0x6ed9eba1, 0x8f1bbcdc, 0xca62c1d6]);

/**
 * Pure JS SHA-1 implementation with HMAC support.
 * Non-destructive digest for plain hash — safe to call digest() multiple times.
 * @see https://csrc.nist.gov/pubs/fips/180-4/upd1/final
 * @public
 */
export class Sha1Js implements Checksum {
  public readonly digestLength = DIGEST_LENGTH;

  private state: Int32Array = Int32Array.from(INIT);
  private w?: Int32Array;
  private buffer: Uint8Array = new Uint8Array(BLOCK);
  private bufferLength = 0;
  private bytesHashed = 0;
  private finished = false;
  private readonly inner?: Sha1Js;
  private readonly outer?: Sha1Js;

  public constructor(secret?: SourceData) {
    if (secret) {
      const key = Sha1Js.normalizeKey(secret);
      this.inner = new Sha1Js();
      this.outer = new Sha1Js();
      const pad = new Uint8Array(BLOCK * 2);
      for (let i = 0; i < BLOCK; ++i) {
        pad[i] = 0x36 ^ key[i];
        pad[i + BLOCK] = 0x5c ^ key[i];
      }
      this.inner.update(pad.subarray(0, BLOCK));
      this.outer.update(pad.subarray(BLOCK));
    }
  }

  public update(data: Uint8Array): void {
    if (this.finished) {
      throw new Error("Attempted to update an already finished HMAC.");
    }
    if (this.inner) {
      this.inner.update(data);
      return;
    }

    let pos = 0;
    let { length } = data;
    this.bytesHashed += length;

    if (this.bufferLength > 0) {
      while (length > 0 && this.bufferLength < BLOCK) {
        this.buffer[this.bufferLength++] = data[pos++];
        --length;
      }
      if (this.bufferLength === BLOCK) {
        this.hashBuffer(this.buffer, 0);
        this.bufferLength = 0;
      }
    }

    while (length >= BLOCK) {
      this.hashBuffer(data, pos);
      pos += BLOCK;
      length -= BLOCK;
    }

    while (length > 0) {
      this.buffer[this.bufferLength++] = data[pos++];
      --length;
    }
  }

  public async digest(): Promise<Uint8Array> {
    if (this.inner && this.outer) {
      if (this.finished) {
        throw new Error("Attempted to digest an already finished HMAC.");
      }
      this.finished = true;
      const innerDigest = this.inner.digestSync();
      this.outer.update(innerDigest);
      return this.outer.digestSync();
    }
    return this.digestSync();
  }

  public reset(): void {
    this.state = Int32Array.from(INIT);
    this.buffer = new Uint8Array(BLOCK);
    this.bufferLength = 0;
    this.bytesHashed = 0;
  }

  private digestSync(): Uint8Array {
    // Non-destructive: operate on copies.
    const state = this.state.slice();
    const buffer = this.buffer.slice();
    let bufferLength = this.bufferLength;
    const bitsHi = (this.bytesHashed / 0x20000000) | 0;
    const bitsLo = this.bytesHashed << 3;

    buffer[bufferLength++] = 0x80;

    if (bufferLength > BLOCK - 8) {
      for (let i = bufferLength; i < BLOCK; ++i) {
        buffer[i] = 0;
      }
      this.hashBufferWith(state, buffer, 0);
      bufferLength = 0;
    }

    for (let i = bufferLength; i < BLOCK - 8; ++i) {
      buffer[i] = 0;
    }
    const v = new DataView(buffer.buffer, buffer.byteOffset, BLOCK);
    v.setUint32(BLOCK - 8, bitsHi, false);
    v.setUint32(BLOCK - 4, bitsLo, false);
    this.hashBufferWith(state, buffer, 0);

    const out = new Uint8Array(DIGEST_LENGTH);
    out[0] = (state[0] >>> 24) & 0xff;
    out[1] = (state[0] >>> 16) & 0xff;
    out[2] = (state[0] >>> 8) & 0xff;
    out[3] = state[0] & 0xff;
    out[4] = (state[1] >>> 24) & 0xff;
    out[5] = (state[1] >>> 16) & 0xff;
    out[6] = (state[1] >>> 8) & 0xff;
    out[7] = state[1] & 0xff;
    out[8] = (state[2] >>> 24) & 0xff;
    out[9] = (state[2] >>> 16) & 0xff;
    out[10] = (state[2] >>> 8) & 0xff;
    out[11] = state[2] & 0xff;
    out[12] = (state[3] >>> 24) & 0xff;
    out[13] = (state[3] >>> 16) & 0xff;
    out[14] = (state[3] >>> 8) & 0xff;
    out[15] = state[3] & 0xff;
    out[16] = (state[4] >>> 24) & 0xff;
    out[17] = (state[4] >>> 16) & 0xff;
    out[18] = (state[4] >>> 8) & 0xff;
    out[19] = state[4] & 0xff;
    return out;
  }

  private static normalizeKey(secret: SourceData): Uint8Array {
    const key = toUint8Array(secret);
    if (key.byteLength > BLOCK) {
      const h = new Sha1Js();
      h.update(key);
      const digest = h.digestSync();
      const padded = new Uint8Array(BLOCK);
      padded.set(digest);
      return padded;
    }
    const padded = new Uint8Array(BLOCK);
    padded.set(key);
    return padded;
  }

  private hashBuffer(data: Uint8Array, offset: number): void {
    this.hashBufferWith(this.state, data, offset);
  }

  private hashBufferWith(state: Int32Array, data: Uint8Array, offset: number): void {
    const w = (this.w ??= new Int32Array(80));

    let s0 = state[0],
      s1 = state[1],
      s2 = state[2],
      s3 = state[3],
      s4 = state[4];

    for (let t = 0; t < 16; ++t) {
      w[t] =
        ((data[offset + t * 4] & 0xff) << 24) |
        ((data[offset + t * 4 + 1] & 0xff) << 16) |
        ((data[offset + t * 4 + 2] & 0xff) << 8) |
        (data[offset + t * 4 + 3] & 0xff);
    }
    for (let t = 16; t < 80; ++t) {
      const x = w[t - 3] ^ w[t - 8] ^ w[t - 14] ^ w[t - 16];
      w[t] = (x << 1) | (x >>> 31);
    }

    for (let t = 0; t < 80; ++t) {
      const r = t < 20 ? 0 : t < 40 ? 1 : t < 60 ? 2 : 3;
      const temp =
        (((((s0 << 5) | (s0 >>> 27)) +
          (r === 0 ? (s1 & s2) ^ (~s1 & s3) : r === 2 ? (s1 & s2) ^ (s1 & s3) ^ (s2 & s3) : s1 ^ s2 ^ s3)) |
          0) +
          ((s4 + ((K[r] + w[t]) | 0)) | 0)) |
        0;
      s4 = s3;
      s3 = s2;
      s2 = (s1 << 30) | (s1 >>> 2);
      s1 = s0;
      s0 = temp;
    }

    state[0] = (state[0] + s0) | 0;
    state[1] = (state[1] + s1) | 0;
    state[2] = (state[2] + s2) | 0;
    state[3] = (state[3] + s3) | 0;
    state[4] = (state[4] + s4) | 0;
  }
}
