import { describe, expect, it } from "vitest";
import XXH from "xxhashjs";

import { ChecksumXxHash64 } from "./ChecksumXxHash64";

describe("ChecksumXxHash64", () => {
  async function digest(input: Uint8Array, seed = 0): Promise<string> {
    const c = new ChecksumXxHash64(0, seed);
    c.update(input);
    return Buffer.from(await c.digest()).toString("hex");
  }

  function ref(input: Uint8Array, seed = 0): string {
    return XXH.h64(Buffer.from(input), seed).toString(16).padStart(16, "0");
  }

  it("should hash empty input", async () => {
    expect(await digest(Buffer.from(""))).toBe(ref(Buffer.from("")));
  });

  it("should hash short inputs (1-4 bytes, 1-byte lane only)", async () => {
    for (const s of ["a", "ab", "abc", "abcd"]) {
      const buf = Buffer.from(s);
      expect(await digest(buf)).toBe(ref(buf));
    }
  });

  it("should hash inputs using 4-byte and 1-byte lanes", async () => {
    for (const s of ["abcde", "abcdef", "abcdefg"]) {
      const buf = Buffer.from(s);
      expect(await digest(buf)).toBe(ref(buf));
    }
  });

  it("should hash inputs using 8-byte, 4-byte, and 1-byte lanes", async () => {
    for (const len of [8, 9, 11, 15, 16, 24, 31]) {
      const buf = Buffer.alloc(len, 0x61);
      expect(await digest(buf)).toBe(ref(buf));
    }
  });

  it("should hash inputs requiring stripe processing (>= 32 bytes)", async () => {
    for (const len of [32, 33, 63, 64, 65, 100, 128, 256]) {
      const buf = Buffer.alloc(len, 0x61);
      expect(await digest(buf)).toBe(ref(buf));
    }
  });

  it("should hash large inputs", async () => {
    const buf = Buffer.alloc(1000, 0xab);
    expect(await digest(buf)).toBe(ref(buf));
  });

  /**
   * todo(checksums): implement seeding.
   */
  it.skip("should support non-zero seed", async () => {
    const buf = Buffer.from("abcd");
    expect(await digest(buf, 42)).toBe(ref(buf, 42));
    expect(await digest(buf, 42)).not.toBe(ref(buf, 0));
  });

  it("should produce correct results with multiple update calls", async () => {
    const c = new ChecksumXxHash64();
    c.update(Buffer.from("hello"));
    c.update(Buffer.from(" world"));
    const hex = Buffer.from(await c.digest()).toString("hex");
    expect(hex).toBe(ref(Buffer.from("hello world")));
  });

  it("should produce correct results with multi-update crossing stripe boundary", async () => {
    const full = Buffer.alloc(100, 0x61);
    for (const split of [1, 15, 31, 32, 33, 50, 64, 99]) {
      const c = new ChecksumXxHash64();
      c.update(full.subarray(0, split));
      c.update(full.subarray(split));
      const hex = Buffer.from(await c.digest()).toString("hex");
      expect(hex).toBe(ref(full));
    }
  });

  it("should match reference for all lengths 0-200", async () => {
    for (let len = 0; len <= 200; len++) {
      const buf = Buffer.alloc(len, len & 0xff);
      expect(await digest(buf)).toBe(ref(buf));
    }
  });
});
