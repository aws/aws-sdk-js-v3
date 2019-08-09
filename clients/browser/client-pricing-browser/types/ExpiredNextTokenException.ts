import { ServiceException as __ServiceException__ } from "@aws-sdk/types";

/**
 * <p>The pagination token expired. Try again without a pagination token.</p>
 */
export interface ExpiredNextTokenException
  extends __ServiceException__<_ExpiredNextTokenExceptionDetails> {
  name: "ExpiredNextTokenException";
}

export interface _ExpiredNextTokenExceptionDetails {
  /**
   * _errorMessage shape
   */
  Message?: string;
}
