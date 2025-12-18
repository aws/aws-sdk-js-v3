import { toBase64 } from "@smithy/util-base64";
import { describe, expect, test } from "vitest";

import { Crc64Nvme } from "./Crc64Nvme";

/**
 * Known test vectors for CRC64-NVME
 * These can be verified against reference implementations
 */
const TEST_VECTORS = [
  {
    input: "",
    expected: "AAAAAAAAAAA=",
    description: "empty string",
  },
  {
    input: "123456789",
    expected: "rosUhgp5mIg=",
    description: 'ASCII "123456789"',
  },
  {
    input: "a",
    expected: "jC+ERbTL/Dw=",
    description: 'single character "a"',
  },
  {
    input: "abc",
    expected: "BeXKuz/B+us=",
    description: 'ASCII "abc"',
  },
  {
    input: "The quick brown fox jumps over the lazy dog",
    expected: "12xUBUlUwUM=",
    description: "pangram",
  },
  {
    input: "\x00",
    expected: "1dpQR+/shyg=",
    description: "single null byte",
  },
  {
    input: "\x00\x00\x00\x00",
    expected: "bbgR5aHaUCQ=",
    description: "four null bytes",
  },
  {
    input: "\xFF\xFF\xFF\xFF",
    expected: "dqAywHboEF0=",
    description: "four 0xFF bytes",
  },
];

describe(Crc64Nvme.name, () => {
  test.each(TEST_VECTORS)("$description", async (vector) => {
    const crc = new Crc64Nvme();
    crc.update(new TextEncoder().encode(vector.input));
    const digest = await crc.digest();
    const hex = toBase64(digest);

    expect(hex).toBe(vector.expected);
  });

  test("empty input", async () => {
    const crc = new Crc64Nvme();
    const digest = await crc.digest();

    expect(digest).toBeInstanceOf(Uint8Array);
    expect(digest.length).toBe(8);
    expect(toBase64(digest)).toBe("AAAAAAAAAAA=");
  });

  test.each([
    { byte: 0x00, expected: "1dpQR+/shyg=" },
    { byte: 0x01, expected: "qrSgj9/ZDlE=" },
    { byte: 0xff, expected: "/wAAAAAAAAA=" },
    { byte: 0x41, expected: "fe56MqW3Iz4=" }, // 'A'
    { byte: 0x61, expected: "jC+ERbTL/Dw=" }, // 'a'
  ])("byte 0x$byte", async ({ byte, expected }) => {
    const crc = new Crc64Nvme();
    crc.update(new Uint8Array([byte]));
    const digest = await crc.digest();
    const hex = toBase64(digest);

    expect(hex).toBe(expected);
  });

  test("reset functionality", async () => {
    const crc = new Crc64Nvme();
    const input = new TextEncoder().encode("test data");

    // First calculation
    crc.update(input);
    const digest1 = toBase64(await crc.digest());

    // Reset and calculate again
    crc.reset();
    crc.update(input);
    const digest2 = toBase64(await crc.digest());

    expect(digest1).toBe(digest2);
  });

  test("multiple updates equivalent to single update", async () => {
    const input = new TextEncoder().encode("The quick brown fox");

    // Single update
    const crc1 = new Crc64Nvme();
    crc1.update(input);
    const digest1 = toBase64(await crc1.digest());

    // Multiple updates
    const crc2 = new Crc64Nvme();
    crc2.update(input.slice(0, 5));
    crc2.update(input.slice(5, 10));
    crc2.update(input.slice(10));
    const digest2 = toBase64(await crc2.digest());

    expect(digest1).toBe(digest2);
  });

  test("incremental updates", async () => {
    const crc = new Crc64Nvme();
    const textEncoder = new TextEncoder();

    // Build up "123456789" byte by byte
    for (let i = 1; i <= 9; i++) {
      crc.update(textEncoder.encode(i.toString()));
    }

    const digest = toBase64(await crc.digest());
    expect(digest).toBe("rosUhgp5mIg=");
  });

  test("digest returns Uint8Array of length 8", async () => {
    const crc = new Crc64Nvme();
    const digest = await crc.digest();

    expect(digest).toBeInstanceOf(Uint8Array);
    expect(digest.length).toBe(8);
  });

  test("digest does not mutate state", async () => {
    const crc = new Crc64Nvme();
    crc.update(new TextEncoder().encode("test"));

    const digest1 = toBase64(await crc.digest());
    const digest2 = toBase64(await crc.digest());

    expect(digest1).toBe(digest2);
  });

  test("consistent across multiple instances", async () => {
    const input = new TextEncoder().encode("consistency test");

    const crc1 = new Crc64Nvme();
    crc1.update(input);
    const digest1 = toBase64(await crc1.digest());

    const crc2 = new Crc64Nvme();
    crc2.update(input);
    const digest2 = toBase64(await crc2.digest());

    expect(digest1).toBe(digest2);
  });

  test("empty updates between data", async () => {
    const crc1 = new Crc64Nvme();
    crc1.update(new TextEncoder().encode("hello"));
    crc1.update(new Uint8Array(0)); // Empty update
    crc1.update(new TextEncoder().encode("world"));
    const digest1 = toBase64(await crc1.digest());

    const crc2 = new Crc64Nvme();
    crc2.update(new TextEncoder().encode("helloworld"));
    const digest2 = toBase64(await crc2.digest());

    expect(digest1).toBe(digest2);
  });
});
