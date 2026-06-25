import { Sha1Js } from "@aws-sdk/checksums/sha";
// eslint-disable-next-line @typescript-eslint/no-require-imports
const hashTestVectors = require("hash-test-vectors");
import { describe, expect, it } from "vitest";

import { SHA1_HMAC_VECTORS, SHA1_VECTORS, toHex, utf8 } from "./checksum.fixture";

describe("Sha1Js", () => {
  it("has digestLength 20", () => {
    expect(new Sha1Js().digestLength).toBe(20);
  });

  it("returns a 20-byte Uint8Array digest", async () => {
    const h = new Sha1Js();
    h.update(new Uint8Array(0));
    const d = await h.digest();
    expect(d).toBeInstanceOf(Uint8Array);
    expect(d.length).toBe(20);
  });

  it.each(SHA1_VECTORS)("$description", async ({ input, expected }) => {
    const h = new Sha1Js();
    h.update(input);
    expect(toHex(await h.digest())).toBe(expected);
  });

  it("incremental: abc split", async () => {
    const h = new Sha1Js();
    h.update(utf8("a"));
    h.update(utf8("b"));
    h.update(utf8("c"));
    expect(toHex(await h.digest())).toBe("a9993e364706816aba3e25717850c26c9cd0d89d");
  });

  it("incremental: 448-bit message split at block boundary", async () => {
    const msg = utf8("abcdbcdecdefdefgefghfghighijhijkijkljklmklmnlmnomnopnopq");
    const h = new Sha1Js();
    // Split at 32 bytes (half a block) and remainder
    h.update(msg.subarray(0, 32));
    h.update(msg.subarray(32));
    expect(toHex(await h.digest())).toBe("84983e441c3bd26ebaae4aa1f95129e5e54670f1");
  });

  it("reset returns to initial state", async () => {
    const h = new Sha1Js();
    h.update(utf8("garbage"));
    h.reset();
    h.update(utf8("abc"));
    expect(toHex(await h.digest())).toBe("a9993e364706816aba3e25717850c26c9cd0d89d");
  });

  it("progressive single bytes 1-64", async () => {
    // Single-shot vs one-byte-at-a-time must match.
    for (let n = 1; n <= 64; ++n) {
      const data = new Uint8Array(n);
      for (let i = 0; i < n; ++i) {
        data[i] = i & 0xff;
      }

      const single = new Sha1Js();
      single.update(data);

      const incremental = new Sha1Js();
      for (let i = 0; i < n; ++i) {
        incremental.update(data.subarray(i, i + 1));
      }

      expect(toHex(await incremental.digest())).toBe(toHex(await single.digest()));
    }
  });

  describe("HMAC (RFC 2202)", () => {
    it.each(SHA1_HMAC_VECTORS)("$description", async ({ key, data, expected }) => {
      const h = new Sha1Js(key);
      h.update(data);
      expect(toHex(await h.digest())).toBe(expected);
    });

    it("HMAC with string key", async () => {
      const h = new Sha1Js("key");
      h.update(utf8("The quick brown fox jumps over the lazy dog"));
      expect(toHex(await h.digest())).toBe("de7c9b85b8b78aa6bc8a7a36f70a90701c9db4d9");
    });

    it("HMAC digest is destructive: second call throws", async () => {
      const h = new Sha1Js("secret");
      h.update(utf8("data"));
      await h.digest();
      await expect(h.digest()).rejects.toThrow("already finished");
    });

    it("HMAC update after digest throws", async () => {
      const h = new Sha1Js("secret");
      h.update(utf8("data"));
      await h.digest();
      expect(() => h.update(utf8("more"))).toThrow("already finished");
    });
  });

  describe("non-destructive digest (plain hash)", () => {
    it("repeated digest calls return same value", async () => {
      const h = new Sha1Js();
      h.update(utf8("abc"));
      const d1 = toHex(await h.digest());
      const d2 = toHex(await h.digest());
      expect(d1).toBe(d2);
      expect(d1).toBe("a9993e364706816aba3e25717850c26c9cd0d89d");
    });

    it("update after digest extends the hash", async () => {
      const h = new Sha1Js();
      h.update(utf8("abc"));
      await h.digest();
      h.update(utf8("abc"));

      const combined = new Sha1Js();
      combined.update(utf8("abcabc"));
      expect(toHex(await h.digest())).toBe(toHex(await combined.digest()));
    });
  });

  describe("hash-test-vectors (196 KAT)", () => {
    const vectors = (hashTestVectors as { input: string; sha1: string }[]).map((v, i) => {
      const buf = Buffer.from(v.input, "base64");
      return {
        name: `vector #${i} (${buf.length} bytes)`,
        input: new Uint8Array(buf),
        expected: v.sha1,
      };
    });

    it.each(vectors)("$name", async ({ input, expected }) => {
      const h = new Sha1Js();
      h.update(input);
      expect(toHex(await h.digest())).toBe(expected);
    });
  });
});
