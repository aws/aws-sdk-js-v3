import { ServiceException as __ServiceException__ } from "@aws-sdk/types";

/**
 * <p>This exception is thrown when the Amazon Cognito service encounters an invalid password.</p>
 */
export interface InvalidPasswordException
  extends __ServiceException__<_InvalidPasswordExceptionDetails> {
  name: "InvalidPasswordException";
}

export interface _InvalidPasswordExceptionDetails {
  /**
   * <p>The message returned when the Amazon Cognito service throws an invalid user password exception.</p>
   */
  message?: string;
}
