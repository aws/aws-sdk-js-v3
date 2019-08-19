import { ServiceException as __ServiceException__ } from "@aws-sdk/types";

/**
 * <p>You made too many calls in a short period of time. Try again later.</p>
 */
export interface LimitExceededException
  extends __ServiceException__<_LimitExceededExceptionDetails> {
  name: "LimitExceededException";
}

export interface _LimitExceededExceptionDetails {
  /**
   * _ErrorMessage shape
   */
  Message?: string;
}
