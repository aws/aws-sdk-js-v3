import { ServiceException as __ServiceException__ } from "@aws-sdk/types";

/**
 * <p>Registration token is invalid.</p>
 */
export interface InvalidTokenException
  extends __ServiceException__<_InvalidTokenExceptionDetails> {
  name: "InvalidTokenException";
}

export interface _InvalidTokenExceptionDetails {
  /**
   * _errorMessage shape
   */
  message?: string;
}
