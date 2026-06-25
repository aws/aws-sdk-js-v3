import { Crc32cJs } from "@aws-sdk/checksums/crc";
import { describe, expect, it } from "vitest";

import { CRC32C_INCREMENTAL, CRC32C_VECTORS, toHex, utf8 } from "./checksum.fixture";

const digestUint32 = async (hash: Crc32cJs): Promise<number> =>
  new DataView((await hash.digest()).buffer).getUint32(0, false);

describe("Crc32cJs", () => {
  it("has digestLength 4", () => {
    expect(new Crc32cJs().digestLength).toBe(4);
  });

  it("returns a 4-byte Uint8Array digest", async () => {
    const h = new Crc32cJs();
    h.update(new Uint8Array(0));
    const d = await h.digest();
    expect(d).toBeInstanceOf(Uint8Array);
    expect(d.length).toBe(4);
  });

  it.each(CRC32C_VECTORS)("$description -> 0x$expected", async ({ input, expected }) => {
    const h = new Crc32cJs();
    h.update(input);
    expect(await digestUint32(h)).toBe(expected);
  });

  it("incremental: " + CRC32C_INCREMENTAL.description, async () => {
    const h = new Crc32cJs();
    for (let i = 0; i < CRC32C_INCREMENTAL.chunks.length; ++i) {
      h.update(CRC32C_INCREMENTAL.chunks[i]);
    }
    expect(await digestUint32(h)).toBe(CRC32C_INCREMENTAL.expected);
  });

  it("incremental split matches single update", async () => {
    const full = utf8("The quick brown fox jumps over the lazy dog");
    const h1 = new Crc32cJs();
    h1.update(full);

    const h2 = new Crc32cJs();
    h2.update(full.slice(0, 10));
    h2.update(full.slice(10, 25));
    h2.update(full.slice(25));

    expect(await digestUint32(h2)).toBe(await digestUint32(h1));
  });

  it("reset returns to initial state", async () => {
    const h = new Crc32cJs();
    h.update(utf8("garbage"));
    h.reset();
    h.update(utf8("The quick brown fox jumps over the lazy dog"));
    expect(await digestUint32(h)).toBe(0x22620404);
  });

  it("non-destructive digest: repeated calls return same value", async () => {
    const h = new Crc32cJs();
    h.update(utf8("test"));
    const d1 = toHex(await h.digest());
    const d2 = toHex(await h.digest());
    expect(d1).toBe(d2);
  });

  it("non-destructive digest: update after digest extends the hash", async () => {
    const h = new Crc32cJs();
    h.update(utf8("Hello"));
    await h.digest();
    h.update(utf8(" world"));
    const combined = new Crc32cJs();
    combined.update(utf8("Hello world"));
    expect(await digestUint32(h)).toBe(await digestUint32(combined));
  });

  it("empty update is a no-op", async () => {
    const h1 = new Crc32cJs();
    h1.update(utf8("abc"));

    const h2 = new Crc32cJs();
    h2.update(utf8("abc"));
    h2.update(new Uint8Array(0));

    expect(await digestUint32(h1)).toBe(await digestUint32(h2));
  });

  it("progressive single bytes 1-64", async () => {
    // Verify that feeding N bytes one-at-a-time equals feeding them all at once.
    for (let n = 1; n <= 64; ++n) {
      const data = new Uint8Array(n);
      for (let i = 0; i < n; ++i) {
        data[i] = i & 0xff;
      }

      const single = new Crc32cJs();
      single.update(data);

      const incremental = new Crc32cJs();
      for (let i = 0; i < n; ++i) {
        incremental.update(data.subarray(i, i + 1));
      }

      expect(await digestUint32(incremental)).toBe(await digestUint32(single));
    }
  });
});
