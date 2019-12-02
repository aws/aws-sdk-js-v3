import { validateBucketNameMiddleware } from "./validate-bucket-name";

describe("validateBucketNameMiddleware", () => {
  const mockNextHandler = jest.fn();

  beforeEach(() => {
    jest.clearAllMocks();
  });

  it("throws error if Bucket parameter contains '/'", async () => {
    const handler = validateBucketNameMiddleware()(mockNextHandler, {} as any);
    const bucket = "bucket/part/of/key";
    let error;
    try {
      await handler({
        input: {
          Bucket: bucket
        }
      });
    } catch (e) {
      error = e;
    }
    expect(error).toBeDefined();
    expect(error.message).toEqual(
      `Bucket name shouldn't contain '/', received '${bucket}'`
    );
    expect(error.name).toEqual("InvalidBucketName");
  });

  it("doesn't throw error if Bucket parameter has no '/'", async () => {
    const handler = validateBucketNameMiddleware()(mockNextHandler, {} as any);
    const args = {
      input: {
        Bucket: "bucket"
      }
    };
    await handler(args);
    expect(mockNextHandler.mock.calls.length).toBe(1);
    expect(mockNextHandler.mock.calls[0][0]).toEqual(args);
  });
});
