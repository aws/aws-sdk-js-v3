import { ServiceException as __ServiceException__ } from "@aws-sdk/types";

/**
 * <p>The password is invalid.</p>
 */
export interface InvalidPasswordException
  extends __ServiceException__<_InvalidPasswordExceptionDetails> {
  name: "InvalidPasswordException";
}

export interface _InvalidPasswordExceptionDetails {
  /**
   * _ErrorMessageType shape
   */
  Message?: string;
}
