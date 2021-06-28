import { SdkError } from "@aws-sdk/types";

import { NO_RETRY_INCREMENT, RETRY_COST, TIMEOUT_RETRY_COST } from "./constants";
import { RetryQuota } from "./types";

export interface DefaultRetryQuotaOptions {
  /**
   * The total amount of retry token to be incremented from retry token balance
   * if an SDK operation invocation succeeds without requiring a retry request.
   */
  noRetryIncrement?: number;

  /**
   * The total amount of retry tokens to be decremented from retry token balance.
   */
  retryCost?: number;

  /**
   * The total amount of retry tokens to be decremented from retry token balance
   * when a throttling error is encountered.
   */
  timeoutRetryCost?: number;
}

export const getDefaultRetryQuota = (initialRetryTokens: number, options?: DefaultRetryQuotaOptions): RetryQuota => {
  const MAX_CAPACITY = initialRetryTokens;
  const noRetryIncrement = options?.noRetryIncrement ?? NO_RETRY_INCREMENT;
  const retryCost = options?.retryCost ?? RETRY_COST;
  const timeoutRetryCost = options?.timeoutRetryCost ?? TIMEOUT_RETRY_COST;

  let availableCapacity = initialRetryTokens;

  const getCapacityAmount = (error: SdkError) => (error.name === "TimeoutError" ? timeoutRetryCost : retryCost);

  const hasRetryTokens = (error: SdkError) => getCapacityAmount(error) <= availableCapacity;

  const retrieveRetryTokens = (error: SdkError) => {
    if (!hasRetryTokens(error)) {
      // retryStrategy should stop retrying, and return last error
      throw new Error("No retry token available");
    }
    const capacityAmount = getCapacityAmount(error);
    availableCapacity -= capacityAmount;
    return capacityAmount;
  };

  const releaseRetryTokens = (capacityReleaseAmount?: number) => {
    availableCapacity += capacityReleaseAmount ?? noRetryIncrement;
    availableCapacity = Math.min(availableCapacity, MAX_CAPACITY);
  };

  return Object.freeze({
    hasRetryTokens,
    retrieveRetryTokens,
    releaseRetryTokens,
  });
};
