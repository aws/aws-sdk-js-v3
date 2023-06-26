import { ChecksumConstructor } from "@smithy/types";

import { ssecMiddleware } from "./";

describe("ssecMiddleware", () => {
  const next = jest.fn();
  const decoder = jest.fn().mockResolvedValue(new Uint8Array(0));
  const encoder = jest.fn().mockReturnValue("base64");
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
    encoder.mockClear();
    mockHashUpdate.mockClear();
    mockHashDigest.mockClear();
    mockHashReset.mockClear();
  });

  it("should base64 encode input keys and set respective MD5 inputs", async () => {
    const args = {
      input: {
        SSECustomerKey: "foo",
        CopySourceSSECustomerKey: "bar",
      },
    };

    const handler = ssecMiddleware({
      base64Encoder: encoder,
      utf8Decoder: decoder,
      md5: MockHash,
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
    expect(encoder.mock.calls.length).toBe(4);
    expect(mockHashUpdate.mock.calls.length).toBe(2);
    expect(mockHashDigest.mock.calls.length).toBe(2);
  });
});
