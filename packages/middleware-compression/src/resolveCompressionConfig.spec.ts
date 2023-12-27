import { resolveCompressionConfig } from "./resolveCompressionConfig";

describe(resolveCompressionConfig.name, () => {
  it("should throw an error if requestMinCompressionSizeBytes is less than 0", () => {
    const requestMinCompressionSizeBytes = -1;
    expect(() => {
      resolveCompressionConfig({ disableRequestCompression: false, requestMinCompressionSizeBytes });
    }).toThrow(
      new RangeError(
        "The value for requestMinCompressionSizeBytes must be between 0 and 10485760 inclusive. " +
          `The provided value ${requestMinCompressionSizeBytes} is outside this range."`
      )
    );
  });

  it("should throw an error if requestMinCompressionSizeBytes is greater than 10485760", () => {
    const requestMinCompressionSizeBytes = 10485761;
    expect(() => {
      resolveCompressionConfig({ disableRequestCompression: false, requestMinCompressionSizeBytes });
    }).toThrow(
      new RangeError(
        "The value for requestMinCompressionSizeBytes must be between 0 and 10485760 inclusive. " +
          `The provided value ${requestMinCompressionSizeBytes} is outside this range."`
      )
    );
  });

  it.each([0, 10240, 10485760])("returns requestMinCompressionSizeBytes value %s", (requestMinCompressionSizeBytes) => {
    const inputConfig = { disableRequestCompression: false, requestMinCompressionSizeBytes };
    const resolvedConfig = resolveCompressionConfig(inputConfig);
    expect(inputConfig).toEqual(resolvedConfig);
  });

  it.each([false, true])("returns disableRequestCompression value %s", (disableRequestCompression) => {
    const inputConfig = { disableRequestCompression, requestMinCompressionSizeBytes: 0 };
    const resolvedConfig = resolveCompressionConfig(inputConfig);
    expect(inputConfig).toEqual(resolvedConfig);
  });
});
