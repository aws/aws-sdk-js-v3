import { describe, expect, it } from "vitest";

import { ChecksumXxHash3_64 } from "./ChecksumXxHash3_64";

describe("ChecksumXxHash3_64", () => {
  async function digest(input: Uint8Array): Promise<string> {
    const c = new ChecksumXxHash3_64();
    c.update(input);
    return Buffer.from(await c.digest()).toString("hex");
  }

  // Reference values generated from the C xxHash reference implementation (xxhash.h).
  const ref: Record<string, string> = {
    "": "2d06800538d394c2",
    a: "e6c632b61e964e1f",
    ab: "a873719c24d5735c",
    abc: "78af5f94892f3950",
    abcd: "6497a96f53a89890",
    abcde: "55c65158ee9e652d",
    abcdefgh: "6f45a76842a96483",
    abcdefghij: "c85ff0a489414010",
    abcdefghijklmnopq: "ca7f3571df47cacf",
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
    expect(await digest(Buffer.alloc(100, 0x61))).toBe("411d9368f9c30e07");
  });

  it("should hash medium inputs (129-240 bytes)", async () => {
    expect(await digest(Buffer.alloc(129, 0x61))).toBe("1586e7ed07cba75b");
    expect(await digest(Buffer.alloc(200, 0x61))).toBe("ac2bd404bce6c995");
  });

  it("should hash large inputs (>240 bytes)", async () => {
    expect(await digest(Buffer.alloc(241, 0x61))).toBe("f6cfef5c5aca1930");
    expect(await digest(Buffer.alloc(500, 0x61))).toBe("36ce122140130771");
    expect(await digest(Buffer.alloc(1000, 0x61))).toBe("b3e7af627147db7c");
    expect(await digest(Buffer.alloc(2000, 0x61))).toBe("6c137a3091e34b7c");
  });

  it("should produce correct results with multiple update calls", async () => {
    const c = new ChecksumXxHash3_64();
    c.update(Buffer.from("hello"));
    c.update(Buffer.from(" world"));
    const hex = Buffer.from(await c.digest()).toString("hex");

    const c2 = new ChecksumXxHash3_64();
    c2.update(Buffer.from("hello world"));
    const hex2 = Buffer.from(await c2.digest()).toString("hex");
    expect(hex).toBe(hex2);
  });

  it("should reset state", async () => {
    const c = new ChecksumXxHash3_64();
    c.update(Buffer.from("garbage"));
    c.reset();
    c.update(Buffer.from(""));
    expect(Buffer.from(await c.digest()).toString("hex")).toBe(ref[""]);
  });

  it("should have digestLength", () => {
    expect(new ChecksumXxHash3_64().digestLength).toBe(64);
  });
});
