import { ServiceException as __ServiceException__ } from "@aws-sdk/types";

/**
 * <p>The request was rejected because it attempted to create resources beyond the current AWS account limits. The error code describes the limit exceeded. </p>
 */
export interface LimitExceededException
  extends __ServiceException__<_LimitExceededExceptionDetails> {
  name: "LimitExceededException";
}

export interface _LimitExceededExceptionDetails {
  /**
   * Error code for the exception
   */
  errorCode?: string;

  /**
   * _ExceptionMessage shape
   */
  message?: string;

  /**
   * Resource type that caused the exception
   */
  resourceType?: string;
}
