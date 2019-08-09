import { ServiceException as __ServiceException__ } from "@aws-sdk/types";

/**
 * <p>Your account exceeded a limit. This exception is thrown when a per-account resource limit is exceeded.</p>
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
