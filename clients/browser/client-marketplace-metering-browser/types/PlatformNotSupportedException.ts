import { ServiceException as __ServiceException__ } from "@aws-sdk/types";

/**
 * <p>AWS Marketplace does not support metering usage from the underlying platform. Currently, only Amazon ECS is supported.</p>
 */
export interface PlatformNotSupportedException
  extends __ServiceException__<_PlatformNotSupportedExceptionDetails> {
  name: "PlatformNotSupportedException";
}

export interface _PlatformNotSupportedExceptionDetails {
  /**
   * _errorMessage shape
   */
  message?: string;
}
