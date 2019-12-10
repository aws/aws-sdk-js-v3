import { sendMessageBatchMiddleware } from "./send-message-batch";
import { HashConstructor } from "@aws-sdk/types";

describe("sendMessageBatchMiddleware", () => {
  const mockHashUpdate = jest.fn();
  const mockHashDigest = jest.fn().mockReturnValue(new Uint8Array(1));
  const MockHash: HashConstructor = class {} as any;
  MockHash.prototype.update = mockHashUpdate;
  MockHash.prototype.digest = mockHashDigest;

  beforeEach(() => {
    mockHashUpdate.mockClear();
    mockHashDigest.mockClear();
  });

  it("should do nothing if the checksums match", async () => {
    const next = jest.fn().mockReturnValue({
      output: {
        Successful: [
          { Id: "foo", MD5OfMessageBody: "0" },
          { Id: "bar", MD5OfMessageBody: "0" }
        ]
      }
    });
    const handler = sendMessageBatchMiddleware({
      md5: MockHash
    })(next, {} as any);

    await handler({
      input: {
        Entries: [
          { Id: "foo", MessageBody: "0" },
          { Id: "bar", MessageBody: "0" }
        ]
      }
    });

    expect(mockHashUpdate.mock.calls.length).toBe(2);
    expect(mockHashDigest.mock.calls.length).toBe(2);
  });

  it("should throw if the checksum does not match", async () => {
    const next = jest.fn().mockReturnValue({
      output: {
        Successful: [
          { Id: "foo", MD5OfMessageBody: "0", MessageId: "fooMessage" },
          { Id: "bar", MD5OfMessageBody: "1", MessageId: "barMessage" }
        ]
      }
    });
    const handler = sendMessageBatchMiddleware({
      md5: MockHash
    })(next, {} as any);

    try {
      await handler({
        input: {
          Entries: [
            { Id: "foo", MessageBody: "0" },
            { Id: "bar", MessageBody: "0" }
          ]
        }
      });
    } catch (e) {
      expect(e).toEqual(new Error("Invalid messages: barMessage"));
    }
    expect(mockHashUpdate.mock.calls.length).toBe(2);
    expect(mockHashDigest.mock.calls.length).toBe(2);
  });
});
