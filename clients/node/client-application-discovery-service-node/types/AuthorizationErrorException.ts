import { ServiceException as __ServiceException__ } from "@aws-sdk/types";

/**
 * <p>The AWS user account does not have permission to perform the action. Check the IAM policy associated with this account.</p>
 */
export interface AuthorizationErrorException
  extends __ServiceException__<_AuthorizationErrorExceptionDetails> {
  name: "AuthorizationErrorException";
}

export interface _AuthorizationErrorExceptionDetails {
  /**
   * _Message shape
   */
  message?: string;
}
