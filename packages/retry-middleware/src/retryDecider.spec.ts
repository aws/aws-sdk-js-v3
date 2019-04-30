import { defaultRetryDecider } from "./retryDecider";

describe("defaultRetryDecider", () => {
  const decider = defaultRetryDecider();

  it("should return false when the provided error is falsy", () => {
    expect(decider(null as any)).toBe(false);
  });

  it("should return true if the error was tagged as a connection error", () => {
    const err: Error & { connectionError?: boolean } = new Error();
    err.connectionError = true;
    expect(decider(err)).toBe(true);
  });

  for (const httpStatusCode of [429, 500, 502, 503, 504, 509]) {
    it(`should return true if the error represents a service response with an HTTP status code of ${httpStatusCode}`, () => {
      const err: any = new Error();
      err.$metadata = { httpStatusCode };
      expect(decider(err)).toBe(true);
    });
  }

  it('should return true if the response represents a "still processing" error', () => {
    const err = new Error();
    err.name = "PriorRequestNotComplete";
    expect(decider(err)).toBe(true);
  });

  it("should return true if the response represents a throttling error", () => {
    const err = new Error();
    err.name = "TooManyRequestsException";
    expect(decider(err)).toBe(true);
  });

  it("should return false for other errors", () => {
    expect(decider(new Error())).toBe(false);
  });

  describe("clock skew retries enabled", () => {
    const decider = defaultRetryDecider(true);

    it("should return true if the response represents a clock skew error", () => {
      const err = new Error();
      err.name = "RequestTimeTooSkewed";
      expect(decider(err)).toBe(true);
    });
  });
});
