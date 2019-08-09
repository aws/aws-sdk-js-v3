import { ServiceException as __ServiceException__ } from "@aws-sdk/types";

/**
 * <p>The requested limit exceeds the permitted limit for an account.</p>
 */
export interface LimitExceededException
  extends __ServiceException__<_LimitExceededExceptionDetails> {
  name: "LimitExceededException";
}

export interface _LimitExceededExceptionDetails {
  /**
   * <p>The error message in the exception.</p>
   */
  Message?: string;
}
