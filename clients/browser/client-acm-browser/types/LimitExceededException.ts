import { ServiceException as __ServiceException__ } from "@aws-sdk/types";

/**
 * <p>An ACM limit has been exceeded.</p>
 */
export interface LimitExceededException
  extends __ServiceException__<_LimitExceededExceptionDetails> {
  name: "LimitExceededException";
}

export interface _LimitExceededExceptionDetails {
  /**
   * _String shape
   */
  message?: string;
}
