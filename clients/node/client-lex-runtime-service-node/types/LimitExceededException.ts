import { ServiceException as __ServiceException__ } from "@aws-sdk/types";

/**
 * <p>Exceeded a limit.</p>
 */
export interface LimitExceededException
  extends __ServiceException__<_LimitExceededExceptionDetails> {
  name: "LimitExceededException";
}

export interface _LimitExceededExceptionDetails {
  /**
   * _String shape
   */
  retryAfterSeconds?: string;

  /**
   * _String shape
   */
  message?: string;
}
