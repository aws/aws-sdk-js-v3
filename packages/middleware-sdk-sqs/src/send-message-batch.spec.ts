import { ChecksumConstructor } from "@smithy/types";

import { sendMessageBatchMiddleware } from "./send-message-batch";

describe("sendMessageBatchMiddleware", () => {
  const mockHashUpdate = jest.fn();
  const mockHashDigest = jest.fn().mockReturnValue(new Uint8Array(1));
  const mockHashReset = jest.fn();
  const MockHash: ChecksumConstructor = class {} as any;
  MockHash.prototype.update = mockHashUpdate;
  MockHash.prototype.digest = mockHashDigest;
  MockHash.prototype.reset = mockHashReset;

  beforeEach(() => {
    mockHashUpdate.mockClear();
    mockHashDigest.mockClear();
    mockHashReset.mockClear();
  });

  it("should call next exactly once", async () => {
    const next = jest.fn().mockReturnValue({
      output: {
        Successful: [
          { Id: "foo", MD5OfMessageBody: "00" },
          { Id: "bar", MD5OfMessageBody: "00" },
        ],
      },
    });
    const handler = sendMessageBatchMiddleware({
      md5: MockHash,
    })(next, {} as any);

    await handler({
      input: {
        Entries: [
          { Id: "foo", MessageBody: "0" },
          { Id: "bar", MessageBody: "0" },
        ],
      },
    });

    expect(next).toBeCalledTimes(1);
  });

  it("should do nothing if the checksums match", async () => {
    const next = jest.fn().mockReturnValue({
      output: {
        Successful: [
          { Id: "foo", MD5OfMessageBody: "00" },
          { Id: "bar", MD5OfMessageBody: "00" },
        ],
      },
    });
    const handler = sendMessageBatchMiddleware({
      md5: MockHash,
    })(next, {} as any);

    await handler({
      input: {
        Entries: [
          { Id: "foo", MessageBody: "0" },
          { Id: "bar", MessageBody: "0" },
        ],
      },
    });

    expect(mockHashUpdate.mock.calls.length).toBe(2);
    expect(mockHashDigest.mock.calls.length).toBe(2);
  });

  it("should throw if the checksum does not match", async () => {
    const next = jest.fn().mockReturnValue({
      output: {
        Successful: [
          { Id: "foo", MD5OfMessageBody: "00", MessageId: "fooMessage" },
          { Id: "bar", MD5OfMessageBody: "1", MessageId: "barMessage" },
        ],
      },
    });
    const handler = sendMessageBatchMiddleware({
      md5: MockHash,
    })(next, {} as any);

    await expect(
      handler({
        input: {
          Entries: [
            { Id: "foo", MessageBody: "0" },
            { Id: "bar", MessageBody: "0" },
          ],
        },
      })
    ).rejects.toThrow(new Error("Invalid MD5 checksum on messages: barMessage"));
    expect(mockHashUpdate.mock.calls.length).toBe(2);
    expect(mockHashDigest.mock.calls.length).toBe(2);
  });
});
