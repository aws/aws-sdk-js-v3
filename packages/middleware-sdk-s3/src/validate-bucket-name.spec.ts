import { validateBucketName } from "./validate-bucket-name";
import { SerializeHandler } from "@aws-sdk/types";

describe("validateBucketName", () => {
  const mockNextHandler = jest.fn();
  const composedHandler: SerializeHandler<any, any> = validateBucketName(
    mockNextHandler
  );

  beforeEach(() => {
    jest.clearAllMocks();
  });

  it("throws error if Bucket parameter contains '/'", async () => {
    const bucket = "bucket/part/of/key";
    let error;
    try {
      await composedHandler({
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
    const args = {
      input: {
        Bucket: "bucket"
      }
    };
    await composedHandler(args);
    expect(mockNextHandler.mock.calls.length).toBe(1);
    expect(mockNextHandler.mock.calls[0][0]).toEqual(args);
  });
});
