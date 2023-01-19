import { HttpRequest } from "@aws-sdk/protocol-http";
import { ChecksumConstructor } from "@aws-sdk/types";

import { applyMd5BodyChecksumMiddleware } from "./applyMd5BodyChecksumMiddleware";

describe("applyMd5BodyChecksumMiddleware", () => {
  const mockEncoder = jest.fn().mockReturnValue("encoded");
  const mockHashUpdate = jest.fn();
  const mockHashDigest = jest.fn().mockReturnValue(new Uint8Array(0));
  const mockHashReset = jest.fn();
  const MockHash: ChecksumConstructor = class {} as any;
  MockHash.prototype.update = mockHashUpdate;
  MockHash.prototype.digest = mockHashDigest;
  MockHash.prototype.reset = mockHashReset;

  const next = jest.fn();

  class ExoticStream {}

  beforeEach(() => {
    mockEncoder.mockClear();
    mockHashUpdate.mockClear();
    mockHashDigest.mockClear();
    mockHashReset.mockClear();
    next.mockClear();
  });

  for (const body of ["body", new ArrayBuffer(10), new Uint8Array(10), void 0]) {
    it("should calculate the body hash, encode the result, and set the encoded hash to content-md5 header", async () => {
      const handler = applyMd5BodyChecksumMiddleware({
        md5: MockHash,
        base64Encoder: mockEncoder,
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        streamHasher: async (stream: ExoticStream) => new Uint8Array(5),
      })(next, {} as any);

      await handler({
        input: {},
        request: new HttpRequest({
          body: body,
        }),
      });

      expect(next.mock.calls.length).toBe(1);
      const { request } = next.mock.calls[0][0];
      expect(request.headers["content-md5"]).toBe("encoded");
      expect(mockHashUpdate.mock.calls).toEqual([[body || ""]]);
    });

    it("should do nothing if a case-insenitive match for the desired header has already been set", async () => {
      const handler = applyMd5BodyChecksumMiddleware({
        md5: MockHash,
        base64Encoder: mockEncoder,
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        streamHasher: async (stream: ExoticStream) => new Uint8Array(5),
      })(next, {} as any);

      await handler({
        input: {},
        request: new HttpRequest({
          body: body,
          headers: {
            "CoNtEnT-Md5": "foo",
          },
        }),
      });

      expect(next.mock.calls.length).toBe(1);
      const { request } = next.mock.calls[0][0];
      expect(request.headers["CoNtEnT-Md5"]).toBe("foo");
      expect(request.headers["content-md5"]).toBe(undefined);
      expect(mockHashUpdate.mock.calls.length).toBe(0);
      expect(mockHashDigest.mock.calls.length).toBe(0);
      expect(mockEncoder.mock.calls.length).toBe(0);
    });
  }

  it("should use the supplied stream hasher to calculate the hash of a streaming body", async () => {
    const handler = applyMd5BodyChecksumMiddleware({
      md5: MockHash,
      base64Encoder: mockEncoder,
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      streamHasher: async (stream: ExoticStream) => new Uint8Array(5),
    })(next, {} as any);

    await handler({
      input: {},
      request: new HttpRequest({
        body: new ExoticStream(),
      }),
    });

    expect(next.mock.calls.length).toBe(1);
    const { request } = next.mock.calls[0][0];
    expect(request.body).toStrictEqual(new ExoticStream());
    expect(request.headers["content-md5"]).toBe("encoded");
    expect(mockHashDigest.mock.calls.length).toBe(0);
    expect(mockEncoder.mock.calls.length).toBe(1);
    expect(mockEncoder.mock.calls).toEqual([[new Uint8Array(5)]]);
  });
});
