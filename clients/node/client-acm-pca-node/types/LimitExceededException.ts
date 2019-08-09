import { ServiceException as __ServiceException__ } from "@aws-sdk/types";

/**
 * <p>An ACM Private CA limit has been exceeded. See the exception message returned to determine the limit that was exceeded.</p>
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
