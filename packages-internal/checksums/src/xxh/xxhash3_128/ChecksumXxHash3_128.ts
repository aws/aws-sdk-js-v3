import type { Checksum } from "@smithy/types";

import type { index, size } from "../../U64";
import {
  bswap32,
  PRIME_MX2_0,
  PRIME_MX2_1,
  PRIME32_2,
  PRIME64_1_0,
  PRIME64_1_1,
  PRIME64_2_0,
  PRIME64_2_1,
  PRIME64_4_0,
  PRIME64_4_1,
  readU32LE,
  readU64LE,
  SECRET_LENGTH,
  T0,
  T1,
  T2,
  T3,
  T4,
  T5,
  T6,
  XxHash3Base,
} from "../XxHash3Base";

/**
 * XXHASH3 128-bit.
 * @see https://github.com/Cyan4973/xxHash/blob/dev/doc/xxhash_spec.md#xxh3-algorithm-overview
 * @internal
 */
export class ChecksumXxHash3_128 extends XxHash3Base implements Checksum {
  public readonly digestLength = 128;

  public constructor() {
    super(17, 0, 0);
  }

  public async digest(): Promise<Uint8Array> {
    const len = this.byteCount;
    if (len <= 240) {
      const input = this.getBufferedInput();
      if (len <= 16) return this.digestSmall(input, len);
      return this.digestMedium(input, len);
    }
    return this.digestLarge(len);
  }

  /**
   * Concatenates two 64-bit slots into a 128-bit result.
   * Used in step 4: merge.
   */
  private concat(i: index, j: index): Uint8Array {
    const result = new Uint8Array(16);
    result.set(this.mem.toBytes(i), 0);
    result.set(this.mem.toBytes(j), 8);
    return result;
  }

  /**
   * Handles inputs of 0–16 bytes.
   * Used in steps 2–5: accumulate through avalanche (single-shot path).
   */
  private digestSmall(input: Uint8Array, len: size): Uint8Array {
    const { mem } = this;
    const secret = this.secret;

    if (len === 0) {
      const [s00, s01] = readU64LE(secret, 64);
      const [s10, s11] = readU64LE(secret, 72);
      const [s20, s21] = readU64LE(secret, 80);
      const [s30, s31] = readU64LE(secret, 88);
      this.avalanche64(T0, ((s00 ^ s10) >>> 0) ^ this.seed0, ((s01 ^ s11) >>> 0) ^ this.seed1);
      this.avalanche64(T1, ((s20 ^ s30) >>> 0) ^ this.seed0, ((s21 ^ s31) >>> 0) ^ this.seed1);
      return this.concat(T1, T0);
    }

    if (len <= 3) {
      const combined = (input[len - 1] | (len << 8) | (input[0] << 16) | ((input[len >> 1] << 24) >>> 0)) >>> 0;
      const s0 = readU32LE(secret, 0);
      const s1 = readU32LE(secret, 4);
      const s2 = readU32LE(secret, 8);
      const s3 = readU32LE(secret, 12);
      mem
        .write(T0, 0, (s0 ^ s1) >>> 0)
        .add(T0, this.seed0, this.seed1)
        .xor(T0, 0, combined);
      this.avalanche64(T0, mem.hi(T0), mem.lo(T0));
      const bsc = bswap32(combined);
      const rotated = ((bsc << 13) | (bsc >>> 19)) >>> 0;
      mem
        .write(T1, 0, (s2 ^ s3) >>> 0)
        .subtract(T1, this.seed0, this.seed1)
        .xor(T1, 0, rotated);
      this.avalanche64(T1, mem.hi(T1), mem.lo(T1));
      return this.concat(T1, T0);
    }

    if (len <= 8) {
      const inputFirst = readU32LE(input, 0);
      const inputLast = readU32LE(input, len - 4);
      const modSeed0 = (this.seed0 ^ bswap32(this.seed1)) >>> 0;
      const [s00, s01] = readU64LE(secret, 16);
      const [s10, s11] = readU64LE(secret, 24);
      mem
        .write(T0, (s00 ^ s10) >>> 0, (s01 ^ s11) >>> 0)
        .add(T0, modSeed0, this.seed1)
        .xor(T0, inputLast, inputFirst);
      mem.write(T1, PRIME64_1_0, PRIME64_1_1).add(T1, 0, len << 2);
      mem.multiply128(T0, T1, T3, T2);
      mem.copy(T2, T4).left(T4, 1);
      mem.copy(T3, T5).add(T5, mem.hi(T4), mem.lo(T4));
      mem.copy(T5, T4).right(T4, 3);
      mem.xor(T2, mem.hi(T4), mem.lo(T4));
      mem.copy(T2, T4).right(T4, 35);
      mem.xor(T2, mem.hi(T4), mem.lo(T4));
      mem.multiply(T2, PRIME_MX2_0, PRIME_MX2_1);
      mem.copy(T2, T4).right(T4, 28);
      mem.xor(T2, mem.hi(T4), mem.lo(T4));
      this.avalanche(T5, mem.hi(T5), mem.lo(T5));
      return this.concat(T5, T2);
    }

    // 9-16 bytes
    const [if0, if1] = readU64LE(input, 0);
    const [il0, il1] = readU64LE(input, len - 8);
    const [s00, s01] = readU64LE(secret, 32);
    const [s10, s11] = readU64LE(secret, 40);
    const [s20, s21] = readU64LE(secret, 48);
    const [s30, s31] = readU64LE(secret, 56);
    mem
      .write(T0, (s00 ^ s10) >>> 0, (s01 ^ s11) >>> 0)
      .subtract(T0, this.seed0, this.seed1)
      .xor(T0, if0, if1)
      .xor(T0, il0, il1);
    mem
      .write(T1, (s20 ^ s30) >>> 0, (s21 ^ s31) >>> 0)
      .add(T1, this.seed0, this.seed1)
      .xor(T1, il0, il1);
    mem.write(T2, PRIME64_1_0, PRIME64_1_1);
    mem.multiply128(T0, T2, T4, T3);
    mem.add(T3, ((len - 1) << (54 - 32)) >>> 0, 0);
    mem.add(T4, mem.hi(T1), mem.lo(T1));
    mem.write(T5, 0, mem.lo(T1)).multiply(T5, 0, (PRIME32_2 - 1) >>> 0);
    mem.add(T4, mem.hi(T5), mem.lo(T5));
    mem.xor(T3, bswap32(mem.lo(T4)), bswap32(mem.hi(T4)));
    mem.write(T5, PRIME64_2_0, PRIME64_2_1);
    mem.multiply128(T3, T5, T6, T0);
    mem.multiply(T4, PRIME64_2_0, PRIME64_2_1);
    mem.add(T6, mem.hi(T4), mem.lo(T4));
    this.avalanche(T0, mem.hi(T0), mem.lo(T0));
    this.avalanche(T6, mem.hi(T6), mem.lo(T6));
    return this.concat(T6, T0);
  }

  /**
   * Handles inputs of 17–240 bytes.
   * Used in steps 2–5: accumulate through avalanche (single-shot path).
   */
  private digestMedium(input: Uint8Array, len: size): Uint8Array {
    const { mem } = this;
    mem.write(T0, 0, len).multiply(T0, PRIME64_1_0, PRIME64_1_1);
    mem.write(T1, 0, 0);

    if (len <= 128) {
      const numRounds = ((len - 1) >> 5) + 1;
      for (let i = numRounds - 1; i >= 0; i--) {
        this.mixTwoChunks(input, i * 16, len - i * 16 - 16, i * 32);
      }
    } else {
      for (let i = 0; i < 4; i++) this.mixTwoChunks(input, i * 32, i * 32 + 16, i * 32);
      this.avalanche(T0, mem.hi(T0), mem.lo(T0));
      this.avalanche(T1, mem.hi(T1), mem.lo(T1));
      const numChunks = len >> 5;
      for (let i = 4; i < numChunks; i++) this.mixTwoChunks(input, i * 32, i * 32 + 16, (i - 4) * 32 + 3);
      const sv0 = this.seed0,
        sv1 = this.seed1;
      this.seed0 = (0 - sv0 - (sv1 > 0 ? 1 : 0)) >>> 0;
      this.seed1 = (0 - sv1) >>> 0;
      this.mixTwoChunks(input, len - 16, len - 32, 103);
      this.seed0 = sv0;
      this.seed1 = sv1;
    }

    const low0 = mem.hi(T0),
      low1 = mem.lo(T0);
    const high0 = mem.hi(T1),
      high1 = mem.lo(T1);
    mem.write(T2, low0, low1).add(T2, high0, high1);
    mem.write(T3, low0, low1).multiply(T3, PRIME64_1_0, PRIME64_1_1);
    mem.write(T4, high0, high1).multiply(T4, PRIME64_4_0, PRIME64_4_1);
    mem.add(T3, mem.hi(T4), mem.lo(T4));
    mem.write(T4, 0, len).subtract(T4, this.seed0, this.seed1).multiply(T4, PRIME64_2_0, PRIME64_2_1);
    mem.add(T3, mem.hi(T4), mem.lo(T4));
    const saved0 = mem.hi(T3),
      saved1 = mem.lo(T3);
    this.avalanche(T2, mem.hi(T2), mem.lo(T2));
    this.avalanche(T4, saved0, saved1);
    mem.write(T5, 0, 0).subtract(T5, mem.hi(T4), mem.lo(T4));
    return this.concat(T5, T2);
  }

  /**
   * Mixes two 16-byte chunks from the input and accumulates into T0 and T1.
   * Used in step 2: accumulate (medium-length path, 17–240 bytes).
   */
  private mixTwoChunks(data: Uint8Array, offset0: index, offset1: index, secretOffset: index): void {
    const { mem } = this;
    const [d100, d101] = readU64LE(data, offset0);
    const [d110, d111] = readU64LE(data, offset0 + 8);
    const [d200, d201] = readU64LE(data, offset1);
    const [d210, d211] = readU64LE(data, offset1 + 8);
    const ms1 = this.mix(data, offset0, secretOffset);
    mem.add(T0, mem.hi(ms1), mem.lo(ms1));
    const ms2 = this.mix(data, offset1, secretOffset + 16);
    mem.add(T1, mem.hi(ms2), mem.lo(ms2));
    mem.write(T5, d200, d201).add(T5, d210, d211);
    mem.xor(T0, mem.hi(T5), mem.lo(T5));
    mem.write(T5, d100, d101).add(T5, d110, d111);
    mem.xor(T1, mem.hi(T5), mem.lo(T5));
  }

  /**
   * Handles inputs over 240 bytes via streaming accumulators.
   * Used in steps 2–5: accumulate through avalanche (streaming path).
   */
  private digestLarge(len: size): Uint8Array {
    const { mem } = this;
    this.finalizeLargeAccumulators();
    mem.write(T0, 0, len).multiply(T0, PRIME64_1_0, PRIME64_1_1);
    const lowBytes = this.finalMerge(mem.hi(T0), mem.lo(T0), 11);
    mem.write(T0, 0, len).multiply(T0, PRIME64_2_0, PRIME64_2_1);
    mem.write(T1, 0xffffffff, 0xffffffff).xor(T1, mem.hi(T0), mem.lo(T0));
    const highBytes = this.finalMerge(mem.hi(T1), mem.lo(T1), SECRET_LENGTH - 75);
    const result = new Uint8Array(16);
    result.set(highBytes, 0);
    result.set(lowBytes, 8);
    return result;
  }
}
