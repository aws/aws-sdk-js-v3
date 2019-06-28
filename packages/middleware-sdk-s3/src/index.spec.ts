import { encodeCopySource } from "./index";

describe("encodeCopySource", () => {
  const mockNextHandler = jest.fn();
  const mockHandlerArgs = {
    input: {}
  };

  beforeEach(() => {
    jest.clearAllMocks();
  });

  it("should uri encode object key in CopySource parameter", async () => {
    const input = {
      CopySource: "bucket/path?to;the%object"
    };
    mockHandlerArgs.input = input;
    const handler = encodeCopySource(mockNextHandler);
    await handler(mockHandlerArgs as any);

    expect(mockNextHandler.mock.calls.length).toBe(1);
    const { input: nextInput } = mockNextHandler.mock.calls[0][0];
    expect(nextInput.CopySource).toBe("bucket/path%3Fto%3Bthe%25object");
  });

  it("should uri encode object key and versionId in CopySource parameter", async () => {
    const input = {
      CopySource: "bucket/path?to;the%object?versionId=12345"
    };
    mockHandlerArgs.input = input;
    const handler = encodeCopySource(mockNextHandler);
    await handler(mockHandlerArgs as any);

    expect(mockNextHandler.mock.calls.length).toBe(1);
    const { input: nextInput } = mockNextHandler.mock.calls[0][0];
    expect(nextInput.CopySource).toBe(
      "bucket/path%3Fto%3Bthe%25object?versionId=12345"
    );
  });

  it("should uri encode object key looks like versionId in CopySource parameter", async () => {
    const input = {
      CopySource: "bucket/?versionId=12345/still/path"
    };
    mockHandlerArgs.input = input;
    const handler = encodeCopySource(mockNextHandler);
    await handler(mockHandlerArgs as any);

    expect(mockNextHandler.mock.calls.length).toBe(1);
    const { input: nextInput } = mockNextHandler.mock.calls[0][0];
    expect(nextInput.CopySource).toBe("bucket/%3FversionId%3D12345/still/path");
  });
});
