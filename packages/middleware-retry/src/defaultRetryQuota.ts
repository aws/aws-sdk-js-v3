import { RetryQuota } from "./defaultStrategy";
import { SdkError } from "@aws-sdk/smithy-client";
import {
  INITIAL_RETRY_TOKENS,
  RETRY_COST,
  TIMEOUT_RETRY_COST,
  NO_RETRY_INCREMENT
} from "./constants";

export const getDefaultRetryQuota = (): RetryQuota => {
  const MAX_CAPACITY = INITIAL_RETRY_TOKENS;
  let availableCapacity = INITIAL_RETRY_TOKENS;

  const getCapacityAmount = (error: SdkError) =>
    error.name === "TimeoutError" ? TIMEOUT_RETRY_COST : RETRY_COST;

  const hasRetryTokens = (error: SdkError) =>
    getCapacityAmount(error) <= availableCapacity;

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
    availableCapacity += capacityReleaseAmount ?? NO_RETRY_INCREMENT;
    availableCapacity = Math.min(availableCapacity, MAX_CAPACITY);
  };

  return Object.freeze({
    hasRetryTokens,
    retrieveRetryTokens,
    releaseRetryTokens
  });
};
