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
  maxRetries: number,
  delayMs: number
): RetryableProvider<T> => {
  return async () => {
    for (let i = 0; i < maxRetries; ++i) {
      try {
        return await toRetry();
      } catch (e) {
        await new Promise((resolve) => setTimeout(resolve, delayMs));
      }
    }
    return await toRetry();
  };
};
