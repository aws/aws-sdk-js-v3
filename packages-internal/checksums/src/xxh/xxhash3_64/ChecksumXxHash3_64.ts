import type { Checksum } from "@smithy/types";

import type { size } from "../../U64";
import {
  bswap32,
  PRIME_MX2_0,
  PRIME_MX2_1,
  PRIME64_1_0,
  PRIME64_1_1,
  readU32LE,
  readU64LE,
  T0,
  T1,
  T2,
  T3,
  T4,
  XxHash3Base,
} from "../XxHash3Base";

/**
 * XXHASH3 64-bit.
 * @see https://github.com/Cyan4973/xxHash/blob/dev/doc/xxhash_spec.md#xxh3-algorithm-overview
 * @internal
 */
export class ChecksumXxHash3_64 extends XxHash3Base implements Checksum {
  public readonly digestLength = 64;

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
   * Handles inputs of 0–16 bytes.
   * Used in steps 2–5: accumulate through avalanche (single-shot path).
   */
  private digestSmall(input: Uint8Array, len: size): Uint8Array {
    const { mem } = this;
    const secret = this.secret;

    if (len === 0) {
      const [s00, s01] = readU64LE(secret, 56);
      const [s10, s11] = readU64LE(secret, 64);
      mem.write(T0, s00 ^ s10, (s01 ^ s11) >>> 0).xor(T0, this.seed0, this.seed1);
      this.avalanche64(T0, mem.hi(T0), mem.lo(T0));
      return mem.toBytes(T0);
    }

    if (len <= 3) {
      const combined = (input[len - 1] | (len << 8) | (input[0] << 16) | ((input[len >> 1] << 24) >>> 0)) >>> 0;
      const s0 = readU32LE(secret, 0);
      const s1 = readU32LE(secret, 4);
      mem
        .write(T0, 0, (s0 ^ s1) >>> 0)
        .add(T0, this.seed0, this.seed1)
        .xor(T0, 0, combined);
      this.avalanche64(T0, mem.hi(T0), mem.lo(T0));
      return mem.toBytes(T0);
    }

    if (len <= 8) {
      const inputFirst = readU32LE(input, 0);
      const inputLast = readU32LE(input, len - 4);
      const modSeed0 = (this.seed0 ^ bswap32(this.seed1)) >>> 0;
      const [s00, s01] = readU64LE(secret, 8);
      const [s10, s11] = readU64LE(secret, 16);
      mem
        .write(T0, (s00 ^ s10) >>> 0, (s01 ^ s11) >>> 0)
        .subtract(T0, modSeed0, this.seed1)
        .xor(T0, inputFirst, inputLast);
      mem.copy(T0, T1).rotateLeft(T1, 49);
      mem.copy(T0, T2).rotateLeft(T2, 24);
      mem.xor(T0, mem.hi(T1), mem.lo(T1)).xor(T0, mem.hi(T2), mem.lo(T2));
      mem.multiply(T0, PRIME_MX2_0, PRIME_MX2_1);
      mem.copy(T0, T1).right(T1, 35).add(T1, 0, len);
      mem.xor(T0, mem.hi(T1), mem.lo(T1));
      mem.multiply(T0, PRIME_MX2_0, PRIME_MX2_1);
      mem.copy(T0, T1).right(T1, 28);
      mem.xor(T0, mem.hi(T1), mem.lo(T1));
      return mem.toBytes(T0);
    }

    // 9-16 bytes
    const [if0, if1] = readU64LE(input, 0);
    const [il0, il1] = readU64LE(input, len - 8);
    const [s00, s01] = readU64LE(secret, 24);
    const [s10, s11] = readU64LE(secret, 32);
    const [s20, s21] = readU64LE(secret, 40);
    const [s30, s31] = readU64LE(secret, 48);
    mem
      .write(T0, (s00 ^ s10) >>> 0, (s01 ^ s11) >>> 0)
      .add(T0, this.seed0, this.seed1)
      .xor(T0, if0, if1);
    mem
      .write(T1, (s20 ^ s30) >>> 0, (s21 ^ s31) >>> 0)
      .subtract(T1, this.seed0, this.seed1)
      .xor(T1, il0, il1);
    mem.multiply128(T0, T1, T3, T2);
    mem.write(T4, 0, len);
    mem.add(T4, bswap32(mem.lo(T0)), bswap32(mem.hi(T0))).add(T4, mem.hi(T1), mem.lo(T1));
    mem.copy(T2, T0).xor(T0, mem.hi(T3), mem.lo(T3));
    mem.add(T4, mem.hi(T0), mem.lo(T0));
    this.avalanche(T0, mem.hi(T4), mem.lo(T4));
    return mem.toBytes(T0);
  }

  /**
   * Handles inputs of 17–240 bytes.
   * Used in steps 2–5: accumulate through avalanche (single-shot path).
   */
  private digestMedium(input: Uint8Array, len: size): Uint8Array {
    const { mem } = this;
    mem.write(T0, 0, len).multiply(T0, PRIME64_1_0, PRIME64_1_1);

    if (len <= 128) {
      const numRounds = ((len - 1) >> 5) + 1;
      for (let i = numRounds - 1; i >= 0; i--) {
        const ms1 = this.mix(input, i * 16, i * 32);
        mem.add(T0, mem.hi(ms1), mem.lo(ms1));
        const ms2 = this.mix(input, len - i * 16 - 16, i * 32 + 16);
        mem.add(T0, mem.hi(ms2), mem.lo(ms2));
      }
      this.avalanche(T0, mem.hi(T0), mem.lo(T0));
      return mem.toBytes(T0);
    }

    // 129-240 bytes
    for (let i = 0; i < 8; i++) {
      const mix = this.mix(input, i * 16, i * 16);
      mem.add(T0, mem.hi(mix), mem.lo(mix));
    }
    this.avalanche(T0, mem.hi(T0), mem.lo(T0));
    const numChunks = len >> 4;
    for (let i = 8; i < numChunks; i++) {
      const ms = this.mix(input, i * 16, (i - 8) * 16 + 3);
      mem.add(T0, mem.hi(ms), mem.lo(ms));
    }
    const ms = this.mix(input, len - 16, 119);
    mem.add(T0, mem.hi(ms), mem.lo(ms));
    this.avalanche(T0, mem.hi(T0), mem.lo(T0));
    return mem.toBytes(T0);
  }

  /**
   * Handles inputs over 240 bytes via streaming accumulators.
   * Used in steps 2–5: accumulate through avalanche (streaming path).
   */
  private digestLarge(len: size): Uint8Array {
    const { mem } = this;
    this.finalizeLargeAccumulators();
    mem.write(T0, 0, len).multiply(T0, PRIME64_1_0, PRIME64_1_1);
    return this.finalMerge(mem.hi(T0), mem.lo(T0), 11);
  }
}
