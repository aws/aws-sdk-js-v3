import { defaultRetryDecider } from "./retryDecider";

describe("defaultRetryDecider", () => {
  it("should return false when the provided error is falsy", () => {
    expect(defaultRetryDecider(null as any)).toBe(false);
  });

  // Mock isClockSkewError, isThrottlingError and isTransientError

  it("should return false for other errors", () => {
    expect(
      defaultRetryDecider(Object.assign(new Error(), { $metadata: {} }))
    ).toBe(false);
  });
});
