import { ServiceException as __ServiceException__ } from "@aws-sdk/types";

/**
 * <p>Indicates that the user has been denied access to the requested resource.</p>
 */
export interface AuthorizationErrorException
  extends __ServiceException__<_AuthorizationErrorExceptionDetails> {
  name: "AuthorizationErrorException";
}

export interface _AuthorizationErrorExceptionDetails {
  /**
   * _string shape
   */
  message?: string;
}
