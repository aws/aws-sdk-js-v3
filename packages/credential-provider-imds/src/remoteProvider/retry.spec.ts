import { retry } from "./retry";

describe("retry", () => {
  it("should retry a function the specified number of times", async () => {
    const retries = 10;
    const retryable = jest.fn().mockRejectedValue("Expected failure");

    await retry(retryable, retries).catch(msg => {
      expect(retryable.mock.calls.length).toEqual(retries + 1);
      expect(msg).toEqual("Expected failure");
    });
  });

  it("should stop retrying after the first successful invocation", async () => {
    const retries = 10;
    const successfulInvocationIndex = 3;
    let invocations = 0;
    const retryable = jest.fn(() => {
      if (++invocations === successfulInvocationIndex) {
        return Promise.resolve("Success!");
      }
      return Promise.reject("Expected failure");
    });

    await retry(retryable, retries).then(() => {
      expect(retryable.mock.calls.length).toEqual(successfulInvocationIndex);
    });
  });
});
