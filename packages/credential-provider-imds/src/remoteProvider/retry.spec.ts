import { retry } from "./retry";

describe("retry", () => {
  const successMsg = "Success";
  const errorMsg = "Expected failure";
  const retries = 10;
  const retryable = jest.fn().mockRejectedValue(errorMsg);

  afterEach(() => {
    jest.clearAllMocks();
  });

  it("should retry a function the specified number of times", async () => {
    await expect(retry(retryable, retries)).rejects.toStrictEqual(errorMsg);
    expect(retryable).toHaveBeenCalledTimes(retries + 1);
  });

  it("should not retry if successful", async () => {
    retryable.mockResolvedValueOnce(successMsg);
    await expect(retry(retryable, retries)).resolves.toStrictEqual(successMsg);
    expect(retryable).toHaveBeenCalledTimes(1);
  });

  it("should stop retrying after the first successful invocation", async () => {
    const successfulInvocationIndex = 3;
    for (let i = 1; i < successfulInvocationIndex; i++) {
      retryable.mockRejectedValueOnce(errorMsg);
    }
    retryable.mockResolvedValueOnce(successMsg);

    await expect(retry(retryable, retries)).resolves.toStrictEqual(successMsg);
    expect(retryable).toHaveBeenCalledTimes(successfulInvocationIndex);
  });
});
