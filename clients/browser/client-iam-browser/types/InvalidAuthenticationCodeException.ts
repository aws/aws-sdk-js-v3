import { ServiceException as __ServiceException__ } from "@aws-sdk/types";

/**
 * <p>The request was rejected because the authentication code was not recognized. The error message describes the specific error.</p>
 */
export interface InvalidAuthenticationCodeException
  extends __ServiceException__<_InvalidAuthenticationCodeExceptionDetails> {
  name: "InvalidAuthenticationCodeException";
}

export interface _InvalidAuthenticationCodeExceptionDetails {
  /**
   * _invalidAuthenticationCodeMessage shape
   */
  message?: string;
}
