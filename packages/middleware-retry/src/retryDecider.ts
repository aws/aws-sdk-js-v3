import {
  isClockSkewError,
  isRetryableByTrait,
  isThrottlingError,
  isTransientError,
} from "@aws-sdk/service-error-classification";
import { SdkException } from "@aws-sdk/types";

export const defaultRetryDecider = (error: SdkException) => {
  if (!error) {
    return false;
  }

  return isRetryableByTrait(error) || isClockSkewError(error) || isThrottlingError(error) || isTransientError(error);
};
