import { applyBodyChecksumMiddleware } from "./";
import { HashConstructor, HttpRequest } from "@aws-sdk/types";

describe("applyChecksumMiddleware", () => {
  const mockEncoder = jest.fn(() => "encoded");
  const mockHashUpdate = jest.fn(() => {});
  const mockHashDigest = jest.fn(() => new Uint8Array(0));
  const MockHash: HashConstructor = class {} as any;
  MockHash.prototype.update = mockHashUpdate;
  MockHash.prototype.digest = mockHashDigest;

  const next = jest.fn(() => Promise.resolve({}));

  class ExoticStream {}

  const request: HttpRequest<ExoticStream> = {
    method: "REPORT",
    headers: {
      "Content-Length": "10",
      Range: "bytes=0-1000"
    },
    protocol: "https:",
    hostname: "example.com",
    path: "/"
  };

  beforeEach(() => {
    mockEncoder.mockClear();
    mockHashUpdate.mockClear();
    mockHashDigest.mockClear();
    next.mockClear();
  });

  for (const body of [
    "body",
    new ArrayBuffer(10),
    new Uint8Array(10),
    void 0
  ]) {
    it("should calculate the body hash using the supplied hash constructor, encode the result using the supplied encoder, and set the encoded hash to the provided header", async () => {
      await applyBodyChecksumMiddleware(
        "checksumHeader",
        MockHash,
        mockEncoder
      )(next, {} as any)({
        request: { ...request, body },
        input: {}
      });

      expect(next.mock.calls).toEqual([
        [
          {
            input: {},
            request: {
              ...request,
              body,
              headers: {
                ...request.headers,
                checksumHeader: "encoded"
              }
            }
          }
        ]
      ]);
      expect(mockHashUpdate.mock.calls).toEqual([[body || ""]]);
    });

    it("should do nothing if a case-insenitive match for the desired header has already been set", async () => {
      await applyBodyChecksumMiddleware(
        "checksumHeader",
        MockHash,
        mockEncoder
      )(next, {} as any)({
        request: {
          ...request,
          body,
          headers: {
            ...request.headers,
            cHeCkSuMhEaDeR: "foo"
          }
        },
        input: {}
      });

      expect(next.mock.calls).toEqual([
        [
          {
            input: {},
            request: {
              ...request,
              body,
              headers: {
                ...request.headers,
                cHeCkSuMhEaDeR: "foo"
              }
            }
          }
        ]
      ]);

      expect(mockHashUpdate.mock.calls.length).toBe(0);
      expect(mockHashDigest.mock.calls.length).toBe(0);
      expect(mockEncoder.mock.calls.length).toBe(0);
    });
  }

  it("should throw if a streaming body is encounterd and no stream hasher was provided", async () => {
    const handler = applyBodyChecksumMiddleware<ExoticStream>(
      "checksumHeader",
      MockHash,
      mockEncoder
    )(next, {} as any);

    await expect(
      handler({
        request: {
          ...request,
          body: new ExoticStream()
        },
        input: {}
      })
    ).rejects.toBeInstanceOf(Error);

    expect(mockHashUpdate.mock.calls.length).toBe(0);
    expect(mockHashDigest.mock.calls.length).toBe(0);
    expect(mockEncoder.mock.calls.length).toBe(0);
  });

  it("should use the supplied stream hasher to calculate the hash of a streaming body", async () => {
    await applyBodyChecksumMiddleware(
      "checksumHeader",
      MockHash,
      mockEncoder,
      async (stream: ExoticStream) => new Uint8Array(5)
    )(next, {} as any)({
      request: {
        ...request,
        body: new ExoticStream()
      },
      input: {}
    });

    expect(next.mock.calls).toEqual([
      [
        {
          input: {},
          request: {
            ...request,
            body: new ExoticStream(),
            headers: {
              ...request.headers,
              checksumHeader: "encoded"
            }
          }
        }
      ]
    ]);

    expect(mockHashDigest.mock.calls.length).toBe(0);
    expect(mockEncoder.mock.calls.length).toBe(1);
    expect(mockEncoder.mock.calls).toEqual([[new Uint8Array(5)]]);
  });
});
