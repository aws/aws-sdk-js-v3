import {
  DEFAULT_RETRY_DELAY_BASE,
  THROTTLING_RETRY_DELAY_BASE
} from "./constants";
import { retryMiddleware } from "./retryMiddleware";

describe("retryMiddleware", () => {
  it("should not retry when the handler completes successfully", async () => {
    const next = jest.fn().mockResolvedValue({ $metadata: {} });
    const retryHandler = retryMiddleware(0)(next);

    const {
      output: { $metadata }
    } = await retryHandler({ input: {}, request: {} as any });
    expect($metadata.retries).toBe(0);
    expect($metadata.totalRetryDelay).toBe(0);

    expect(next.mock.calls.length).toBe(1);
  });

  it("should stop retrying when the the maximum number of retries is reached", async () => {
    const maxRetries = 3;
    const error = new Error();
    error.name = "ProvisionedThroughputExceededException";
    const next = jest.fn().mockRejectedValue(error);
    const retryHandler = retryMiddleware(maxRetries)(next);

    await expect(
      retryHandler({ input: {}, request: {} as any })
    ).rejects.toMatchObject(error);

    expect(next.mock.calls.length).toBe(maxRetries + 1);
  });

  it("should not retry if the error is not transient", async () => {
    const error = new Error();
    error.name = "ValidationException";
    const next = jest.fn().mockRejectedValue(error);
    const retryHandler = retryMiddleware(3)(next);

    await expect(
      retryHandler({ input: {}, request: {} as any })
    ).rejects.toMatchObject(error);

    expect(next.mock.calls.length).toBe(1);
  });

  it("should use a higher base delay when a throttling error is encountered", async () => {
    const next = jest.fn().mockResolvedValue({ $metadata: {} });

    const validation = new Error();
    validation.name = "ValidationException";
    next.mockImplementationOnce(args => Promise.reject(validation));

    const throttling = new Error();
    throttling.name = "RequestLimitExceeded";
    next.mockImplementationOnce(args => Promise.reject(throttling));

    const delayDecider = jest.fn().mockReturnValue(0);
    const retryHandler = retryMiddleware(3, () => true, delayDecider)(next);

    await retryHandler({ input: {}, request: {} as any });

    expect(next.mock.calls.length).toBe(3);
    expect(delayDecider.mock.calls).toEqual([
      [DEFAULT_RETRY_DELAY_BASE, 0],
      [THROTTLING_RETRY_DELAY_BASE, 1]
    ]);
  });
});
