import { ServiceException as __ServiceException__ } from "@aws-sdk/types";

/**
 * <p>The pagination token is invalid. Try again without a pagination token.</p>
 */
export interface InvalidNextTokenException
  extends __ServiceException__<_InvalidNextTokenExceptionDetails> {
  name: "InvalidNextTokenException";
}

export interface _InvalidNextTokenExceptionDetails {
  /**
   * _errorMessage shape
   */
  Message?: string;
}
