import { ServiceException as __ServiceException__ } from "@aws-sdk/types";

/**
 * <p>The supplied password doesn't match the minimum security constraints, such as length or use of special characters.</p>
 */
export interface InvalidPasswordException
  extends __ServiceException__<_InvalidPasswordExceptionDetails> {
  name: "InvalidPasswordException";
}

export interface _InvalidPasswordExceptionDetails {
  /**
   * _String shape
   */
  Message?: string;
}
