import { Sha512, Sha512Js } from "@aws-sdk/checksums/sha";
import { createHash, createHmac } from "node:crypto";
import { describe, expect, it } from "vitest";

import { toHex, utf8 } from "./checksum.fixture";

// FIPS 180-4 / NIST CAVP known-answer vectors.
const VECTORS: Array<{ description: string; input: Uint8Array; expected: string }> = [
  {
    description: "empty",
    input: new Uint8Array(0),
    expected:
      "cf83e1357eefb8bdf1542850d66d8007d620e4050b5715dc83f4a921d36ce9ce47d0d13c5d85f2b0ff8318d2877eec2f63b931bd47417a81a538327af927da3e",
  },
  {
    description: '"abc"',
    input: utf8("abc"),
    expected:
      "ddaf35a193617abacc417349ae20413112e6fa4e89a97ea20a9eeee64b55d39a2192992a274fc1a836ba3c23a3feebbd454d4423643ce80e2a9ac94fa54ca49f",
  },
  {
    description: "896-bit two-block message",
    input: utf8(
      "abcdefghbcdefghicdefghijdefghijkefghijklfghijklmghijklmnhijklmnoijklmnopjklmnopqklmnopqrlmnopqrsmnopqrstnopqrstu"
    ),
    expected:
      "8e959b75dae313da8cf4f72814fc143f8f7779c6eb9f7fa17299aeadb6889018501d289e4900f7e4331b99dec4b5433ac7d329eeb6dd26545e96e55b874be909",
  },
];

// Each class under test, with the matching HMAC availability.
const IMPLS: Array<{ name: string; Ctor: new (secret?: any) => any; hmac: boolean }> = [
  { name: "Sha512", Ctor: Sha512 as any, hmac: true },
  { name: "Sha512Js", Ctor: Sha512Js, hmac: true },
];

describe.each(IMPLS)("$name", ({ Ctor, hmac }) => {
  it("has digestLength 64", () => {
    expect(new Ctor().digestLength).toBe(64);
  });

  it("returns a 64-byte Uint8Array digest", async () => {
    const h = new Ctor();
    h.update(new Uint8Array(0));
    const d = await h.digest();
    expect(d).toBeInstanceOf(Uint8Array);
    expect(d.length).toBe(64);
  });

  it.each(VECTORS)("$description", async ({ input, expected }) => {
    const h = new Ctor();
    h.update(input);
    expect(toHex(await h.digest())).toBe(expected);
  });

  it("incremental: abc split byte-by-byte", async () => {
    const h = new Ctor();
    h.update(utf8("a"));
    h.update(utf8("b"));
    h.update(utf8("c"));
    expect(toHex(await h.digest())).toBe(VECTORS[1].expected);
  });

  it("reset returns to initial state", async () => {
    const h = new Ctor();
    h.update(utf8("abc"));
    h.reset();
    h.update(new Uint8Array(0));
    expect(toHex(await h.digest())).toBe(VECTORS[0].expected);
  });

  it.each([0, 1, 63, 111, 112, 127, 128, 129, 200, 1000, 4096])(
    "matches node:crypto for length %i (incl. block boundaries)",
    async (len) => {
      const input = new Uint8Array(len);
      for (let i = 0; i < len; ++i) {
        input[i] = (i * 31 + 7) & 0xff;
      }
      const h = new Ctor();
      // split across several updates to exercise buffering.
      h.update(input.subarray(0, Math.floor(len / 3)));
      h.update(input.subarray(Math.floor(len / 3), Math.floor((2 * len) / 3)));
      h.update(input.subarray(Math.floor((2 * len) / 3)));
      const expected = createHash("sha512").update(input).digest("hex");
      expect(toHex(await h.digest())).toBe(expected);
    }
  );

  if (hmac) {
    it.each([3, 64, 128, 200])("HMAC-SHA-512 matches node:crypto for key length %i", async (keyLen) => {
      const key = new Uint8Array(keyLen);
      for (let i = 0; i < keyLen; ++i) {
        key[i] = (i * 17 + 3) & 0xff;
      }
      const msg = utf8("The quick brown fox jumps over the lazy dog");
      const h = new Ctor(key);
      h.update(msg);
      const expected = createHmac("sha512", Buffer.from(key)).update(msg).digest("hex");
      expect(toHex(await h.digest())).toBe(expected);
    });
  }
});
