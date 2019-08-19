import { ServiceException as __ServiceException__ } from "@aws-sdk/types";

/**
 * <p>The request exceeded a limit. Try your request again.</p>
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
