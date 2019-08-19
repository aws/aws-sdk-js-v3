import { ServiceException as __ServiceException__ } from "@aws-sdk/types";

/**
 * <p>The pagination token passed to the operation is expired.</p>
 */
export interface ExpiredNextTokenException
  extends __ServiceException__<_ExpiredNextTokenExceptionDetails> {
  name: "ExpiredNextTokenException";
}

export interface _ExpiredNextTokenExceptionDetails {
  /**
   * _ErrorMessage shape
   */
  message?: string;
}
