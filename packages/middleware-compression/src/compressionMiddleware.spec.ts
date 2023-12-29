import { HttpRequest } from "@smithy/protocol-http";

import { compressionMiddleware } from "./compressionMiddleware";
import { compressStream } from "./compressStream";
import { compressString } from "./compressString";
import { CompressionAlgorithm } from "./constants";
import { isStreaming } from "./isStreaming";

jest.mock("@smithy/protocol-http");
jest.mock("./compressString");
jest.mock("./compressStream");
jest.mock("./isStreaming");

describe(compressionMiddleware.name, () => {
  const mockBody = "body";
  const mockConfig = {
    bodyLengthChecker: jest.fn().mockReturnValue(mockBody.length),
    disableRequestCompression: false,
    requestMinCompressionSizeBytes: 0,
  };
  const mockMiddlewareConfig = {
    encodings: [CompressionAlgorithm.GZIP],
  };

  const mockNext = jest.fn();
  const mockContext = {};
  const mockArgs = { request: { headers: {}, body: mockBody } };

  afterEach(() => {
    jest.clearAllMocks();
  });

  it("skips compression if it's not an HttpRequest", async () => {
    const { isInstance } = HttpRequest;
    (isInstance as unknown as jest.Mock).mockReturnValue(false);
    await compressionMiddleware(mockConfig, mockMiddlewareConfig)(mockNext, mockContext)({ ...mockArgs } as any);
    expect(mockNext).toHaveBeenCalledWith(mockArgs);
  });

  describe("HttpRequest", () => {
    beforeEach(() => {
      const { isInstance } = HttpRequest;
      (isInstance as unknown as jest.Mock).mockReturnValue(true);
      (isStreaming as jest.Mock).mockReturnValue(false);
    });

    it("skips compression if disabled", async () => {
      await compressionMiddleware({ ...mockConfig, disableRequestCompression: true }, mockMiddlewareConfig)(
        mockNext,
        mockContext
      )({ ...mockArgs } as any);
      expect(mockNext).toHaveBeenCalledWith(mockArgs);
    });

    it("skips compression if encodings are not provided", async () => {
      await compressionMiddleware(mockConfig, { encodings: [] })(mockNext, mockContext)({ ...mockArgs } as any);
      expect(mockNext).toHaveBeenCalledWith(mockArgs);
    });

    it("skips compression if encodings are not supported", async () => {
      await compressionMiddleware(mockConfig, { encodings: ["brotli"] })(mockNext, mockContext)({ ...mockArgs } as any);
      expect(mockNext).toHaveBeenCalledWith(mockArgs);
    });

    describe("streaming", () => {
      beforeEach(() => {
        (isStreaming as jest.Mock).mockReturnValue(true);
      });

      it("throws error if streaming blob requires length", async () => {
        await expect(
          compressionMiddleware(mockConfig, { ...mockMiddlewareConfig, streamRequiresLength: true })(
            mockNext,
            mockContext
          )({ ...mockArgs } as any)
        ).rejects.toThrow("Compression is not supported for streaming blobs that require a length.");

        expect(isStreaming).toHaveBeenCalledTimes(1);
        expect(isStreaming).toHaveBeenCalledWith(mockBody);
        expect(mockNext).not.toHaveBeenCalled();
      });

      it("compresses streaming blob", async () => {
        const mockCompressedStream = "compressed-stream";
        (compressStream as jest.Mock).mockResolvedValueOnce(mockCompressedStream);

        await compressionMiddleware(mockConfig, mockMiddlewareConfig)(mockNext, mockContext)({ ...mockArgs } as any);

        expect(isStreaming).toHaveBeenCalledTimes(1);
        expect(isStreaming).toHaveBeenCalledWith(mockBody);
        expect(mockNext).toHaveBeenCalledWith({
          ...mockArgs,
          request: {
            ...mockArgs.request,
            body: mockCompressedStream,
            headers: {
              ...mockArgs.request.headers,
              "Content-Encoding": "gzip",
            },
          },
        });
        expect(compressStream).toHaveBeenCalledTimes(1);
        expect(compressStream).toHaveBeenCalledWith(mockBody);
      });
    });

    describe("not streaming", () => {
      it("skips compression if body is smaller than min size", async () => {
        await compressionMiddleware(
          { ...mockConfig, requestMinCompressionSizeBytes: mockBody.length + 1 },
          mockMiddlewareConfig
        )(
          mockNext,
          mockContext
        )({ ...mockArgs } as any);

        expect(mockNext).toHaveBeenCalledWith(mockArgs);
      });

      it("compresses body", async () => {
        const mockCompressedBody = "compressed-body";
        (compressString as jest.Mock).mockResolvedValueOnce(mockCompressedBody);

        await compressionMiddleware(mockConfig, mockMiddlewareConfig)(mockNext, mockContext)({ ...mockArgs } as any);

        expect(mockNext).toHaveBeenCalledWith({
          ...mockArgs,
          request: {
            ...mockArgs.request,
            body: mockCompressedBody,
            headers: {
              ...mockArgs.request.headers,
              "Content-Encoding": "gzip",
            },
          },
        });
        expect(compressString).toHaveBeenCalledTimes(1);
        expect(compressString).toHaveBeenCalledWith(mockBody);
      });

      it("appends algorithm to existing Content-Encoding header", async () => {
        const mockCompressedBody = "compressed-body";
        (compressString as jest.Mock).mockResolvedValueOnce(mockCompressedBody);

        const mockExistingContentEncoding = "deflate";
        await compressionMiddleware(mockConfig, mockMiddlewareConfig)(mockNext, mockContext)({
          ...mockArgs,
          request: {
            ...mockArgs.request,
            headers: {
              "Content-Encoding": mockExistingContentEncoding,
            },
          },
        } as any);

        expect(mockNext).toHaveBeenCalledWith({
          ...mockArgs,
          request: {
            ...mockArgs.request,
            body: mockCompressedBody,
            headers: {
              ...mockArgs.request.headers,
              "Content-Encoding": [mockExistingContentEncoding, "gzip"].join(","),
            },
          },
        });
        expect(compressString).toHaveBeenCalledTimes(1);
        expect(compressString).toHaveBeenCalledWith(mockBody);
      });
    });
  });
});
