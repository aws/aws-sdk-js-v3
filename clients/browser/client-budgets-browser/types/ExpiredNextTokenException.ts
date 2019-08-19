import { ServiceException as __ServiceException__ } from "@aws-sdk/types";

/**
 * <p>The pagination token expired.</p>
 */
export interface ExpiredNextTokenException
  extends __ServiceException__<_ExpiredNextTokenExceptionDetails> {
  name: "ExpiredNextTokenException";
}

export interface _ExpiredNextTokenExceptionDetails {
  /**
   * <p>The error message the exception carries.</p>
   */
  Message?: string;
}
