import { Logger } from "@smithy/types";

/**
 * @internal
 */
export interface RetryableProvider<T> {
  (): Promise<T>;
}

/**
 * @internal
 */
export const retryWrapper = <T>(
  toRetry: RetryableProvider<T>,
  options: { maxRetries: number; delayMs: number; logger?: Logger }
): RetryableProvider<T> => {
  const { maxRetries, delayMs, logger } = options;
  return async () => {
    for (let i = 0; i < maxRetries; ++i) {
      try {
        return await toRetry();
      } catch (e) {
        if (i === maxRetries - 1) {
          logger?.warn?.(
            `@aws-sdk/credential-provider-http - retry limit ${maxRetries} reached. error: ${JSON.stringify(e)}`
          );
        }
        await new Promise((resolve) => setTimeout(resolve, delayMs));
      }
    }
    return await toRetry();
  };
};
