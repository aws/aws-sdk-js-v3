/**
 * Shared test fixtures for checksum algorithm specs.
 */

// --- Helper functions ---

export const utf8 = (s: string): Uint8Array => new TextEncoder().encode(s);

export const fromHex = (hex: string): Uint8Array => {
  const out = new Uint8Array(hex.length / 2);
  for (let i = 0; i < out.length; ++i) {
    out[i] = parseInt(hex.slice(i * 2, i * 2 + 2), 16);
  }
  return out;
};

export const toHex = (buf: Uint8Array): string => {
  let out = "";
  for (let i = 0; i < buf.length; ++i) {
    out += buf[i].toString(16).padStart(2, "0");
  }
  return out;
};

export const aBytes = (byte: number, count: number): Uint8Array => {
  const out = new Uint8Array(count);
  out.fill(byte);
  return out;
};

// --- CRC-32C KAT vectors ---

export interface Crc32cVector {
  description: string;
  input: Uint8Array;
  expected: number; // uint32
}

export const CRC32C_VECTORS: Crc32cVector[] = [
  { description: "empty", input: new Uint8Array(0), expected: 0x00000000 },
  { description: '"123456789"', input: utf8("123456789"), expected: 0xe3069283 },
  {
    description: '"The quick brown fox jumps over the lazy dog"',
    input: utf8("The quick brown fox jumps over the lazy dog"),
    expected: 0x22620404,
  },
  { description: "32 zero bytes", input: new Uint8Array(32), expected: 0x8a9136aa },
  { description: "32 0xFF bytes", input: aBytes(0xff, 32), expected: 0x62a8ab43 },
  { description: '"a"', input: utf8("a"), expected: 0xc1d04330 },
  { description: '"abc"', input: utf8("abc"), expected: 0x364b3fb7 },
];

export const CRC32C_INCREMENTAL = {
  description: '"123456789" byte-by-byte',
  chunks: [utf8("1"), utf8("2"), utf8("3"), utf8("4"), utf8("5"), utf8("6"), utf8("7"), utf8("8"), utf8("9")],
  expected: 0xe3069283,
};

// --- CRC-64/NVME KAT vectors (base64-encoded digests) ---

export interface Crc64NvmeVector {
  description: string;
  input: Uint8Array;
  expectedBase64: string;
}

export const CRC64_NVME_VECTORS: Crc64NvmeVector[] = [
  { description: "empty", input: new Uint8Array(0), expectedBase64: "AAAAAAAAAAA=" },
  { description: '"123456789"', input: utf8("123456789"), expectedBase64: "rosUhgp5mIg=" },
  { description: '"a"', input: utf8("a"), expectedBase64: "jC+ERbTL/Dw=" },
  { description: '"abc"', input: utf8("abc"), expectedBase64: "BeXKuz/B+us=" },
  {
    description: '"The quick brown fox jumps over the lazy dog"',
    input: utf8("The quick brown fox jumps over the lazy dog"),
    expectedBase64: "12xUBUlUwUM=",
  },
  { description: "single null byte", input: new Uint8Array([0x00]), expectedBase64: "1dpQR+/shyg=" },
  { description: "four null bytes", input: new Uint8Array([0, 0, 0, 0]), expectedBase64: "bbgR5aHaUCQ=" },
  { description: "four 0xFF bytes", input: aBytes(0xff, 4), expectedBase64: "dqAywHboEF0=" },
];

// --- SHA-1 KAT vectors (NIST FIPS 180-4) ---

export interface Sha1Vector {
  description: string;
  input: Uint8Array;
  expected: string; // hex
}

export const SHA1_VECTORS: Sha1Vector[] = [
  {
    description: "empty",
    input: new Uint8Array(0),
    expected: "da39a3ee5e6b4b0d3255bfef95601890afd80709",
  },
  {
    description: '"abc"',
    input: utf8("abc"),
    expected: "a9993e364706816aba3e25717850c26c9cd0d89d",
  },
  {
    description: "448-bit message",
    input: utf8("abcdbcdecdefdefgefghfghighijhijkijkljklmklmnlmnomnopnopq"),
    expected: "84983e441c3bd26ebaae4aa1f95129e5e54670f1",
  },
  {
    description: "1 million 'a' characters",
    input: aBytes(0x61, 1_000_000),
    expected: "34aa973cd4c4daa4f61eeb2bdbad27316534016f",
  },
];

// --- SHA-1 HMAC vectors (RFC 2202) ---

export interface Sha1HmacVector {
  description: string;
  key: Uint8Array;
  data: Uint8Array;
  expected: string; // hex
}

export const SHA1_HMAC_VECTORS: Sha1HmacVector[] = [
  {
    description: "RFC 2202 test case 1",
    key: aBytes(0x0b, 20),
    data: utf8("Hi There"),
    expected: "b617318655057264e28bc0b6fb378c8ef146be00",
  },
  {
    description: "RFC 2202 test case 2",
    key: utf8("Jefe"),
    data: utf8("what do ya want for nothing?"),
    expected: "effcdf6ae5eb2fa2d27416d5f184df9c259a7c79",
  },
  {
    description: "RFC 2202 test case 3",
    key: aBytes(0xaa, 20),
    data: aBytes(0xdd, 50),
    expected: "125d7342b9ac11cd91a39af48aa17b4f63f175d3",
  },
  {
    description: "RFC 2202 test case 5 (key > block size)",
    key: aBytes(0xaa, 80),
    data: utf8("Test Using Larger Than Block-Size Key - Hash Key First"),
    expected: "aa4ae5e15272d00e95705637ce8a3b55ed402112",
  },
];
