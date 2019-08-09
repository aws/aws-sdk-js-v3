import { ServiceException as __ServiceException__ } from "@aws-sdk/types";

/**
 * <p>The AWS user account does not have permission to perform the action. Check the IAM policy associated with this account.</p>
 */
export interface AuthorizationException
  extends __ServiceException__<_AuthorizationExceptionDetails> {
  name: "AuthorizationException";
}

export interface _AuthorizationExceptionDetails {
  /**
   * _Message shape
   */
  Message?: string;
}
