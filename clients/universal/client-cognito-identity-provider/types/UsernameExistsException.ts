import { ServiceException as __ServiceException__ } from "@aws-sdk/types";

/**
 * <p>This exception is thrown when Amazon Cognito encounters a user name that already exists in the user pool.</p>
 */
export interface UsernameExistsException
  extends __ServiceException__<_UsernameExistsExceptionDetails> {
  name: "UsernameExistsException";
}

export interface _UsernameExistsExceptionDetails {
  /**
   * <p>The message returned when Amazon Cognito throws a user name exists exception.</p>
   */
  message?: string;
}
