import { ChecksumConstructor } from "@smithy/types";

import { sendMessageMiddleware } from "./send-message";

describe("sendMessageMiddleware", () => {
  const mockHashUpdate = jest.fn();
  const mockHashReset = jest.fn();
  const mockHashDigest = jest.fn().mockReturnValue(new Uint8Array(1));
  const MockHash: ChecksumConstructor = class {} as any;
  MockHash.prototype.update = mockHashUpdate;
  MockHash.prototype.digest = mockHashDigest;
  MockHash.prototype.reset = mockHashReset;

  beforeEach(() => {
    mockHashUpdate.mockClear();
    mockHashDigest.mockClear();
    mockHashReset.mockClear();
  });

  it("should only call next once", async () => {
    const next = jest.fn().mockReturnValue({
      output: {
        MD5OfMessageBody: "00",
      },
    });
    const handler = sendMessageMiddleware({
      md5: MockHash,
    })(next, {} as any);
    await handler({ input: {} });
    expect(next).toBeCalledTimes(1);
  });

  it("should do nothing if the checksum matches", async () => {
    const next = jest.fn().mockReturnValue({
      output: {
        MD5OfMessageBody: "00",
      },
    });
    const handler = sendMessageMiddleware({
      md5: MockHash,
    })(next, {} as any);

    await handler({ input: {} });

    expect(mockHashUpdate.mock.calls.length).toBe(1);
    expect(mockHashDigest.mock.calls.length).toBe(1);
  });

  it("should throw if the checksum does not match", async () => {
    const next = jest.fn().mockReturnValue({
      output: {
        MD5OfMessageBody: "1",
      },
    });
    const handler = sendMessageMiddleware({
      md5: MockHash,
    })(next, {} as any);

    await expect(handler({ input: {} })).rejects.toThrow(new Error("InvalidChecksumError"));
    expect(mockHashUpdate.mock.calls.length).toBe(1);
    expect(mockHashDigest.mock.calls.length).toBe(1);
  });
});
