import { ServiceException as __ServiceException__ } from "@aws-sdk/types";

/**
 * <p>This exception is thrown when the user has made too many failed attempts for a given action (e.g., sign in).</p>
 */
export interface TooManyFailedAttemptsException
  extends __ServiceException__<_TooManyFailedAttemptsExceptionDetails> {
  name: "TooManyFailedAttemptsException";
}

export interface _TooManyFailedAttemptsExceptionDetails {
  /**
   * <p>The message returned when the Amazon Cognito service returns a too many failed attempts exception.</p>
   */
  message?: string;
}
