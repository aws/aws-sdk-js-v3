import { describe, expect, it } from "vitest";

import { ChecksumXxHash3_128 } from "./ChecksumXxHash3_128";

describe("ChecksumXxHash3_128", () => {
  async function digest(input: Uint8Array): Promise<string> {
    const c = new ChecksumXxHash3_128();
    c.update(input);
    return Buffer.from(await c.digest()).toString("hex");
  }

  // Reference values generated from the C xxHash reference implementation (xxhash.h).
  // Format: high64 || low64 (big-endian canonical).
  const ref: Record<string, string> = {
    "": "99aa06d3014798d86001c324468d497f",
    a: "a96faf705af16834e6c632b61e964e1f",
    ab: "89c65ebc828eebaca873719c24d5735c",
    abc: "06b05ab6733a618578af5f94892f3950",
    abcd: "8d6b60383dfa90c21be79eecd1b1353d",
    abcde: "3043c78169f25c3f97d5a48ef320eec2",
    abcdefgh: "dac23237af37353342b702b313880f12",
    abcdefghij: "9e814df2752571c7b0a8c058e69ff5a7",
    abcdefghijklmnopq: "11078c38a5ca3a8dc3acc9940596efab",
  };

  it("should hash empty input", async () => {
    expect(await digest(Buffer.from(""))).toBe(ref[""]);
  });

  it("should hash small inputs (1-3 bytes)", async () => {
    for (const s of ["a", "ab", "abc"]) {
      expect(await digest(Buffer.from(s))).toBe(ref[s]);
    }
  });

  it("should hash 4-8 byte inputs", async () => {
    for (const s of ["abcd", "abcde", "abcdefgh"]) {
      expect(await digest(Buffer.from(s))).toBe(ref[s]);
    }
  });

  it("should hash 9-16 byte inputs", async () => {
    for (const s of ["abcdefghij"]) {
      expect(await digest(Buffer.from(s))).toBe(ref[s]);
    }
  });

  it("should hash medium inputs (17-128 bytes)", async () => {
    expect(await digest(Buffer.from("abcdefghijklmnopq"))).toBe(ref["abcdefghijklmnopq"]);
    expect(await digest(Buffer.alloc(100, 0x61))).toBe("7d09cdccbc6bead248fb02115fe96a8a");
  });

  it("should hash medium inputs (129-240 bytes)", async () => {
    expect(await digest(Buffer.alloc(129, 0x61))).toBe("a7758bdd09a0b20fd53a57a017f40a2f");
    expect(await digest(Buffer.alloc(200, 0x61))).toBe("cffe968d25cc79dac8654f5c46034008");
  });

  it("should hash large inputs (>240 bytes)", async () => {
    expect(await digest(Buffer.alloc(241, 0x61))).toBe("3e7bebe4a2c07b0bf6cfef5c5aca1930");
    expect(await digest(Buffer.alloc(500, 0x61))).toBe("33f342aafc33c27b36ce122140130771");
    expect(await digest(Buffer.alloc(1000, 0x61))).toBe("b01da365eddaa29cb3e7af627147db7c");
    expect(await digest(Buffer.alloc(2000, 0x61))).toBe("7a206569ef970dac6c137a3091e34b7c");
  });

  it("should produce correct results with multiple update calls", async () => {
    const c = new ChecksumXxHash3_128();
    c.update(Buffer.from("hello"));
    c.update(Buffer.from(" world"));
    const hex = Buffer.from(await c.digest()).toString("hex");

    const c2 = new ChecksumXxHash3_128();
    c2.update(Buffer.from("hello world"));
    const hex2 = Buffer.from(await c2.digest()).toString("hex");
    expect(hex).toBe(hex2);
  });

  it("should reset state", async () => {
    const c = new ChecksumXxHash3_128();
    c.update(Buffer.from("garbage"));
    c.reset();
    c.update(Buffer.from(""));
    expect(Buffer.from(await c.digest()).toString("hex")).toBe(ref[""]);
  });

  it("should have digestLength", () => {
    expect(new ChecksumXxHash3_128().digestLength).toBe(128);
  });

  it("should produce low64 matching xxh3_64 output", async () => {
    // Per spec, the low 64 bits of XXH3-128 equals XXH3-64 for large inputs.
    for (const size of [241, 500, 1000, 2000]) {
      const hex128 = await digest(Buffer.alloc(size, 0x61));
      const low64 = hex128.slice(16); // last 16 hex chars
      const { ChecksumXxHash3_64 } = await import("../xxhash3_64/ChecksumXxHash3_64");
      const c64 = new ChecksumXxHash3_64();
      c64.update(Buffer.alloc(size, 0x61));
      const hex64 = Buffer.from(await c64.digest()).toString("hex");
      expect(low64).toBe(hex64);
    }
  });
});
