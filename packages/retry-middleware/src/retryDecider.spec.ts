import { defaultRetryDecider } from "./retryDecider";

describe("defaultRetryDecider", () => {
  it("should return false when the provided error is falsy", () => {
    expect(defaultRetryDecider(null as any)).toBe(false);
  });

  it("should return true if the error was tagged as a connection error", () => {
    const err: Error & { connectionError?: boolean } = new Error();
    err.connectionError = true;
    expect(defaultRetryDecider(err)).toBe(true);
  });

  for (const httpStatusCode of [429, 500, 502, 503, 504, 509]) {
    it(`should return true if the error represents a service response with an HTTP status code of ${httpStatusCode}`, () => {
      const err: any = new Error();
      err.$metadata = { httpStatusCode };
      expect(defaultRetryDecider(err)).toBe(true);
    });
  }

  it('should return true if the response represents a "still processing" error', () => {
    const err = new Error();
    err.name = "PriorRequestNotComplete";
    expect(defaultRetryDecider(err)).toBe(true);
  });

  it("should return true if the response represents a throttling error", () => {
    const err = new Error();
    err.name = "TooManyRequestsException";
    expect(defaultRetryDecider(err)).toBe(true);
  });

  it("should return false for other errors", () => {
    expect(defaultRetryDecider(new Error())).toBe(false);
  });
});
