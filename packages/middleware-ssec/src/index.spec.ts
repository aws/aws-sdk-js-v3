import { ChecksumConstructor } from "@smithy/types";
import * as crypto from "crypto";

import { ssecMiddleware } from "./";

describe("ssecMiddleware", () => {
  const next = jest.fn();
  const decoder = jest.fn().mockResolvedValue(new Uint8Array(0));
  const base64Decoder = jest.fn();
  const encoder1 = jest.fn();
  const encoder2 = jest.fn();
  const mockHashUpdate = jest.fn();
  const mockHashReset = jest.fn();
  const mockHashDigest = jest.fn().mockReturnValue(new Uint8Array(0));
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
    encoder1.mockReturnValue("/+JF8FMG8UVMWSaNz0s6Wg==");
    const key = "TestKey123";
    const binaryRepresentationOfKey = Buffer.from(key);
    const base64Key = binaryRepresentationOfKey.toString("base64");
    const md5Hash = crypto.createHash("md5").update(binaryRepresentationOfKey).digest();
    const base64Md5Hash = Buffer.from(md5Hash).toString("base64");

    const args = {
      input: {
        SSECustomerKey: base64Key,
        CopySourceSSECustomerKey: base64Key,
      },
    };

    const handler = ssecMiddleware({
      base64Encoder: encoder1,
      utf8Decoder: decoder,
      md5: MockHash,
      base64Decoder: base64Decoder,
    })(next, {} as any);

    await handler(args);

    expect(next.mock.calls.length).toBe(1);
    expect(next).toHaveBeenCalledWith({
      input: {
        SSECustomerKey: base64Key,
        SSECustomerKeyMD5: base64Md5Hash,
        CopySourceSSECustomerKey: base64Key,
        CopySourceSSECustomerKeyMD5: base64Md5Hash,
      },
    });
    expect(decoder.mock.calls.length).toBe(0);
    expect(encoder1.mock.calls.length).toBe(2);
    expect(mockHashUpdate.mock.calls.length).toBe(2);
    expect(mockHashDigest.mock.calls.length).toBe(2);
    encoder1.mockClear();
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
});
