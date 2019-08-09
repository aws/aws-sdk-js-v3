import { ServiceException as __ServiceException__ } from "@aws-sdk/types";

/**
 * <p>A limit was exceeded.</p>
 */
export interface LimitExceededException
  extends __ServiceException__<_LimitExceededExceptionDetails> {
  name: "LimitExceededException";
}

export interface _LimitExceededExceptionDetails {
  /**
   * <p>The message for the exception.</p>
   */
  message?: string;
}
