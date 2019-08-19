import { ServiceException as __ServiceException__ } from "@aws-sdk/types";

/**
 * <p>The new password provided by the user does not meet the password complexity requirements defined in your directory.</p>
 */
export interface InvalidPasswordException
  extends __ServiceException__<_InvalidPasswordExceptionDetails> {
  name: "InvalidPasswordException";
}

export interface _InvalidPasswordExceptionDetails {
  /**
   * <p>The descriptive message for the exception.</p>
   */
  Message?: string;

  /**
   * <p>The AWS request identifier.</p>
   */
  RequestId?: string;
}
