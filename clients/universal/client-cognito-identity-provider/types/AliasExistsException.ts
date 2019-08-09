import { ServiceException as __ServiceException__ } from "@aws-sdk/types";

/**
 * <p>This exception is thrown when a user tries to confirm the account with an email or phone number that has already been supplied as an alias from a different account. This exception tells user that an account with this email or phone already exists.</p>
 */
export interface AliasExistsException
  extends __ServiceException__<_AliasExistsExceptionDetails> {
  name: "AliasExistsException";
}

export interface _AliasExistsExceptionDetails {
  /**
   * <p>The message sent to the user when an alias exists.</p>
   */
  message?: string;
}
