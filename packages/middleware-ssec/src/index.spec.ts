import { ChecksumConstructor } from "@smithy/types";
import * as crypto from "crypto";
import { beforeEach, describe, expect, test as it, vi } from "vitest";

import { isValidBase64EncodedSSECustomerKey, ssecMiddleware } from "./";

describe("ssecMiddleware", () => {
  const next = vi.fn();
  const decoder = vi.fn().mockResolvedValue(new Uint8Array(0));
  const base64Decoder = vi.fn();
  const encoder1 = vi.fn();
  const encoder2 = vi.fn();
  const mockHashUpdate = vi.fn();
  const mockHashReset = vi.fn();
  const mockHashDigest = vi.fn().mockReturnValue(new Uint8Array(0));
  const MockHash: ChecksumConstructor = class {} as any;
  MockHash.prototype.update = mockHashUpdate;
  MockHash.prototype.digest = mockHashDigest;
  MockHash.prototype.reset = mockHashReset;

  beforeEach(() => {
    next.mockClear();
    decoder.mockClear();
    encoder1.mockClear();
    encoder2.mockClear();
    mockHashUpdate.mockClear();
    mockHashDigest.mockClear();
    mockHashReset.mockClear();
  });

  it("should base64 encode input keys and set respective MD5 inputs", async () => {
    encoder2.mockReturnValue("base64");
    const args = {
      input: {
        SSECustomerKey: "foo",
        CopySourceSSECustomerKey: "bar",
      },
    };

    const handler = ssecMiddleware({
      base64Encoder: encoder2,
      utf8Decoder: decoder,
      md5: MockHash,
      base64Decoder: base64Decoder,
    })(next, {} as any);

    await handler(args);

    expect(next.mock.calls.length).toBe(1);
    expect(next).toHaveBeenCalledWith({
      input: {
        SSECustomerKey: "base64",
        SSECustomerKeyMD5: "base64",
        CopySourceSSECustomerKey: "base64",
        CopySourceSSECustomerKeyMD5: "base64",
      },
    });
    expect(decoder.mock.calls.length).toBe(2);
    expect(encoder2.mock.calls.length).toBe(4);
    expect(mockHashUpdate.mock.calls.length).toBe(2);
    expect(mockHashDigest.mock.calls.length).toBe(2);
    encoder2.mockClear();
  });

  it("should handle valid base64 encoded 32byte key input for SSECustomerKey and CopySourceSSECustomerKey", async () => {
    const validBase64EncodedKey = "QUIwMTIzNDU2Nzg5QUJDREVGQUJDREVGQUJDREVGQUI=";
    const decodedBytes = Buffer.from(validBase64EncodedKey, "base64");
    const md5Hash = crypto.createHash("md5").update(decodedBytes).digest();
    const base64EncodedMD5Hash = Buffer.from(md5Hash).toString("base64");

    base64Decoder.mockReturnValue(decodedBytes);
    const mockMD5Instance = {
      update: vi.fn().mockReturnThis(),
      digest: vi.fn().mockReturnValue(md5Hash),
    };
    const mockMD5Constructor = vi.fn().mockReturnValue(mockMD5Instance);
    const base64Encoder = vi.fn().mockReturnValue(base64EncodedMD5Hash);

    const handler = ssecMiddleware({
      base64Encoder,
      utf8Decoder: decoder,
      md5: mockMD5Constructor,
      base64Decoder,
    })(next, {} as any);

    const args = {
      input: {
        SSECustomerKey: validBase64EncodedKey,
        CopySourceSSECustomerKey: validBase64EncodedKey,
      },
    };

    await handler(args);

    expect(next).toHaveBeenCalledTimes(1);
    expect(next).toHaveBeenCalledWith({
      input: {
        SSECustomerKey: validBase64EncodedKey,
        SSECustomerKeyMD5: base64EncodedMD5Hash,
        CopySourceSSECustomerKey: validBase64EncodedKey,
        CopySourceSSECustomerKeyMD5: base64EncodedMD5Hash,
      },
    });

    expect(base64Decoder).toHaveBeenCalledTimes(4);
    expect(base64Decoder).toHaveBeenCalledWith(validBase64EncodedKey);
    expect(mockMD5Constructor).toHaveBeenCalledTimes(2);
    expect(mockMD5Instance.update).toHaveBeenCalledTimes(2);
    expect(mockMD5Instance.update).toHaveBeenCalledWith(decodedBytes);
    expect(mockMD5Instance.digest).toHaveBeenCalledTimes(2);
    expect(base64Encoder).toHaveBeenCalledTimes(2);
    expect(base64Encoder).toHaveBeenCalledWith(md5Hash);
  });

  it("should handle 32-byte binary key input for SSECustomerKey and CopySourceSSECustomerKey", async () => {
    const binaryKey = crypto.randomBytes(32);
    const md5Hash = crypto.createHash("md5").update(binaryKey).digest();
    const base64EncodedKey = binaryKey.toString("base64");
    const base64EncodedMD5Hash = md5Hash.toString("base64");

    const mockMD5Constructor = vi.fn().mockReturnValue({
      update: vi.fn().mockReturnThis(),
      digest: vi.fn().mockReturnValueOnce(md5Hash).mockReturnValueOnce(md5Hash),
    });

    const base64Encoder = vi
      .fn()
      .mockReturnValueOnce(base64EncodedKey)
      .mockReturnValueOnce(base64EncodedMD5Hash)
      .mockReturnValueOnce(base64EncodedKey)
      .mockReturnValueOnce(base64EncodedMD5Hash);

    const handler = ssecMiddleware({
      base64Encoder,
      utf8Decoder: decoder,
      md5: mockMD5Constructor,
      base64Decoder,
    })(next, {} as any);

    const args = {
      input: {
        SSECustomerKey: binaryKey,
        CopySourceSSECustomerKey: binaryKey,
      },
    };

    await handler(args);

    expect(next).toHaveBeenCalledTimes(1);
    expect(next).toHaveBeenCalledWith({
      input: {
        SSECustomerKey: base64EncodedKey,
        SSECustomerKeyMD5: base64EncodedMD5Hash,
        CopySourceSSECustomerKey: base64EncodedKey,
        CopySourceSSECustomerKeyMD5: base64EncodedMD5Hash,
      },
    });

    expect(mockMD5Constructor).toHaveBeenCalledTimes(2);
    expect(base64Encoder).toHaveBeenCalledTimes(4);
  });

  it("should return false for an invalid base64 string", () => {
    const invalidBase64 = "invalid!@#$%";
    const base64Decoder = vi.fn();
    const options = { base64Decoder };

    const result = isValidBase64EncodedSSECustomerKey(invalidBase64, options as any);
    expect(result).toBe(false);
    expect(base64Decoder).not.toHaveBeenCalled();
  });

  it("should return true for a valid base64 string and 32 bytes", () => {
    const validBase64EncodedSSECustomerKey = "QUIwMTIzNDU2Nzg5QUJDREVGQUJDREVGQUJDREVGQUI=";
    const decodedBytes = new Uint8Array(32);
    const base64Decoder = vi.fn().mockReturnValue(decodedBytes);
    const options = { base64Decoder };

    const result = isValidBase64EncodedSSECustomerKey(validBase64EncodedSSECustomerKey, options as any);
    expect(result).toBe(true);
    expect(base64Decoder).toHaveBeenCalledTimes(1);
    expect(base64Decoder).toHaveBeenCalledWith(validBase64EncodedSSECustomerKey);
  });

  it("should return false for a valid base64 string but not 32 bytes", () => {
    const validBase64NonThirtyTwoBytes = "SGVsbG8=";
    const base64Decoder = vi.fn().mockReturnValue(new Uint8Array([72, 101, 108, 108, 111]));
    const options = { base64Decoder };

    const result = isValidBase64EncodedSSECustomerKey(validBase64NonThirtyTwoBytes, options as any);
    expect(result).toBe(false);
    expect(base64Decoder).toHaveBeenCalledTimes(1);
    expect(base64Decoder).toHaveBeenCalledWith(validBase64NonThirtyTwoBytes);
  });
});
