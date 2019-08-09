import { ServiceException as __ServiceException__ } from "@aws-sdk/types";

/**
 * <p>RegisterUsage must be called in the same AWS Region the ECS task was launched in. This prevents a container from hardcoding a Region (e.g. withRegion(“us-east-1”) when calling RegisterUsage.</p>
 */
export interface InvalidRegionException
  extends __ServiceException__<_InvalidRegionExceptionDetails> {
  name: "InvalidRegionException";
}

export interface _InvalidRegionExceptionDetails {
  /**
   * _errorMessage shape
   */
  message?: string;
}
