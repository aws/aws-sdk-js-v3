import {
  isClockSkewError,
  isThrottlingError,
  isTransientError
} from "@aws-sdk/service-error-classification";
import { SdkError } from "@aws-sdk/types";

export const defaultRetryDecider = (error: SdkError) => {
  if (!error) {
    return false;
  }

  return (
    isClockSkewError(error) ||
    isThrottlingError(error) ||
    isTransientError(error)
  );
};
