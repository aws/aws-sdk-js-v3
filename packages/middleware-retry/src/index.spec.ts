import {
  DEFAULT_RETRY_DELAY_BASE,
  THROTTLING_RETRY_DELAY_BASE
} from "./constants";
import { retryMiddleware } from "./retryMiddleware";
import { resolveRetryConfig } from "./configurations";
import * as delayDeciderModule from "./delayDecider";
import { StandardRetryStrategy, RetryDecider } from "./defaultStrategy";
import { HttpRequest } from "@aws-sdk/protocol-http";
import { SdkError } from "@aws-sdk/smithy-client";

describe("retryMiddleware", () => {
  it("should not retry when the handler completes successfully", async () => {
    const next = jest.fn().mockResolvedValue({ output: { $metadata: {} } });
    const retryHandler = retryMiddleware(
      resolveRetryConfig({ maxAttempts: 0 })
    )(next);

    const {
      output: { $metadata }
    } = await retryHandler({ input: {}, request: new HttpRequest({}) });
    expect($metadata.attempts).toBe(1);
    expect($metadata.totalRetryDelay).toBe(0);

    expect(next.mock.calls.length).toBe(1);
  });

  it("should stop retrying when the the maximum number of retries is reached", async () => {
    const maxAttempts = 3;
    const error = new Error();
    error.name = "ProvisionedThroughputExceededException";
    const next = jest.fn().mockRejectedValue(error);
    const retryHandler = retryMiddleware(resolveRetryConfig({ maxAttempts }))(
      next
    );

    await expect(
      retryHandler({ input: {}, request: new HttpRequest({}) })
    ).rejects.toMatchObject(error);

    expect(next.mock.calls.length).toBe(maxAttempts);
  });

  it("should not retry if the error is not transient", async () => {
    const error = new Error();
    error.name = "ValidationException";
    const next = jest.fn().mockRejectedValue(error);
    const retryHandler = retryMiddleware(
      resolveRetryConfig({ maxAttempts: 3 })
    )(next);

    await expect(
      retryHandler({ input: {}, request: new HttpRequest({}) })
    ).rejects.toMatchObject(error);

    expect(next.mock.calls.length).toBe(1);
  });

  it("should use a higher base delay when a throttling error is encountered", async () => {
    const next = jest.fn().mockResolvedValue({ output: { $metadata: {} } });

    const validation = new Error();
    validation.name = "ValidationException";
    next.mockImplementationOnce(args => Promise.reject(validation));

    const throttling = new Error();
    throttling.name = "RequestLimitExceeded";
    next.mockImplementationOnce(args => Promise.reject(throttling));

    jest.mock("./delayDecider");

    const maxAttempts = 3;
    const delayDeciderMock = jest.spyOn(
      delayDeciderModule,
      "defaultDelayDecider"
    );
    const retryDecider: RetryDecider = (error: SdkError) => true;
    const strategy = new StandardRetryStrategy(maxAttempts, retryDecider);
    const retryHandler = retryMiddleware({
      maxAttempts,
      retryStrategy: strategy
    })(next);

    await retryHandler({ input: {}, request: new HttpRequest({}) });

    expect(next.mock.calls.length).toBe(3);
    expect(delayDeciderMock.mock.calls).toEqual([
      [DEFAULT_RETRY_DELAY_BASE, 1],
      [THROTTLING_RETRY_DELAY_BASE, 2]
    ]);
  });
});
