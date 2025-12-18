import { Checksum } from "@smithy/types";

const generateCRC64NVMETable = (): Uint32Array[] => {
  const sliceLength = 8;
  const tables: Uint32Array[] = new Array(sliceLength);

  for (let slice = 0; slice < sliceLength; slice++) {
    const table: number[] = new Array(512);

    for (let i = 0; i < 256; i++) {
      let crc = BigInt(i);

      for (let j = 0; j < 8 * (slice + 1); j++) {
        if (crc & 1n) {
          crc = (crc >> 1n) ^ 0x9a6c9329ac4bc9b5n;
        } else {
          crc = crc >> 1n;
        }
      }

      // Split 64-bit value into two 32-bit values
      table[i * 2] = Number((crc >> 32n) & 0xffffffffn); // high 32 bits
      table[i * 2 + 1] = Number(crc & 0xffffffffn); // low 32 bits
    }

    tables[slice] = new Uint32Array(table);
  }

  return tables;
};

export const CRC64_NVME_REVERSED_TABLE = generateCRC64NVMETable();
const t0 = CRC64_NVME_REVERSED_TABLE[0];
const t1 = CRC64_NVME_REVERSED_TABLE[1];
const t2 = CRC64_NVME_REVERSED_TABLE[2];
const t3 = CRC64_NVME_REVERSED_TABLE[3];
const t4 = CRC64_NVME_REVERSED_TABLE[4];
const t5 = CRC64_NVME_REVERSED_TABLE[5];
const t6 = CRC64_NVME_REVERSED_TABLE[6];
const t7 = CRC64_NVME_REVERSED_TABLE[7];

/**
 * Alternate implementation in JS using int32 pairs.
 */
export class Crc64Nvme implements Checksum {
  private c1 = 0;
  private c2 = 0;

  constructor() {
    this.reset();
  }

  update(data: Uint8Array): void {
    const len = data.length;
    let i = 0;
    let crc1 = this.c1;
    let crc2 = this.c2;

    while (i + 8 <= len) {
      const idx0 = ((crc2 ^ data[i++]) & 255) << 1;
      const idx1 = (((crc2 >>> 8) ^ data[i++]) & 255) << 1;
      const idx2 = (((crc2 >>> 16) ^ data[i++]) & 255) << 1;
      const idx3 = (((crc2 >>> 24) ^ data[i++]) & 255) << 1;
      const idx4 = ((crc1 ^ data[i++]) & 255) << 1;
      const idx5 = (((crc1 >>> 8) ^ data[i++]) & 255) << 1;
      const idx6 = (((crc1 >>> 16) ^ data[i++]) & 255) << 1;
      const idx7 = (((crc1 >>> 24) ^ data[i++]) & 255) << 1;

      crc1 = t7[idx0] ^ t6[idx1] ^ t5[idx2] ^ t4[idx3] ^ t3[idx4] ^ t2[idx5] ^ t1[idx6] ^ t0[idx7];
      crc2 =
        t7[idx0 + 1] ^
        t6[idx1 + 1] ^
        t5[idx2 + 1] ^
        t4[idx3 + 1] ^
        t3[idx4 + 1] ^
        t2[idx5 + 1] ^
        t1[idx6 + 1] ^
        t0[idx7 + 1];
    }

    while (i < len) {
      const idx = ((crc2 ^ data[i]) & 255) << 1;
      crc2 = ((crc2 >>> 8) | ((crc1 & 255) << 24)) >>> 0;
      crc1 = (crc1 >>> 8) ^ t0[idx];
      crc2 ^= t0[idx + 1];
      i++;
    }

    this.c1 = crc1;
    this.c2 = crc2;
  }

  async digest(): Promise<Uint8Array> {
    const c1 = this.c1 ^ 4294967295;
    const c2 = this.c2 ^ 4294967295;

    return new Uint8Array([
      c1 >>> 24,
      (c1 >>> 16) & 255,
      (c1 >>> 8) & 255,
      c1 & 255,
      c2 >>> 24,
      (c2 >>> 16) & 255,
      (c2 >>> 8) & 255,
      c2 & 255,
    ]);
  }

  reset(): void {
    this.c1 = 4294967295; // int32 max
    this.c2 = 4294967295;
  }
}
