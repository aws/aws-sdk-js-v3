import type { Checksum } from "@smithy/types";

// CRC-32C lookup table (Castagnoli polynomial 0x82F63B78).
const T = new Uint32Array(256);
for (let i = 0; i < 256; ++i) {
  let c = i;
  for (let j = 0; j < 8; ++j) {
    c = c & 1 ? 0x82f63b78 ^ (c >>> 1) : c >>> 1;
  }
  T[i] = c >>> 0;
}

/**
 * Pure JS CRC-32C using the Castagnoli polynomial.
 * Non-destructive digest — safe to call digest() multiple times.
 * @public
 */
export class Crc32cJs implements Checksum {
  public readonly digestLength = 4;
  private crc = 0xffff_ffff;

  public update(data: Uint8Array): void {
    let crc = this.crc;
    for (let i = 0; i < data.length; ++i) {
      crc = (crc >>> 8) ^ T[(crc ^ data[i]) & 0xff];
    }
    this.crc = crc;
  }

  public async digest(): Promise<Uint8Array> {
    const value = (this.crc ^ 0xffff_ffff) >>> 0;
    const out = new Uint8Array(4);
    out[0] = value >>> 24;
    out[1] = (value >>> 16) & 0xff;
    out[2] = (value >>> 8) & 0xff;
    out[3] = value & 0xff;
    return out;
  }

  public reset(): void {
    this.crc = 0xffff_ffff;
  }
}
