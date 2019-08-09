import { ServiceException as __ServiceException__ } from "@aws-sdk/types";

/**
 * <p>The pagination token is invalid.</p>
 */
export interface InvalidNextTokenException
  extends __ServiceException__<_InvalidNextTokenExceptionDetails> {
  name: "InvalidNextTokenException";
}

export interface _InvalidNextTokenExceptionDetails {
  /**
   * <p>The error message the exception carries.</p>
   */
  Message?: string;
}
