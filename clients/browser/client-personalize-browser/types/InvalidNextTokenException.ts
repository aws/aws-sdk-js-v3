import { ServiceException as __ServiceException__ } from "@aws-sdk/types";

/**
 * <p>The token is not valid.</p>
 */
export interface InvalidNextTokenException
  extends __ServiceException__<_InvalidNextTokenExceptionDetails> {
  name: "InvalidNextTokenException";
}

export interface _InvalidNextTokenExceptionDetails {
  /**
   * _ErrorMessage shape
   */
  message?: string;
}
