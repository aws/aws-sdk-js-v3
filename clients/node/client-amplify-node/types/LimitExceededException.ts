import { ServiceException as __ServiceException__ } from "@aws-sdk/types";

/**
 * <p> Exception thrown when a resource could not be created because of service limits. </p>
 */
export interface LimitExceededException
  extends __ServiceException__<_LimitExceededExceptionDetails> {
  name: "LimitExceededException";
}

export interface _LimitExceededExceptionDetails {
  /**
   * _ErrorMessage shape
   */
  message?: string;
}
