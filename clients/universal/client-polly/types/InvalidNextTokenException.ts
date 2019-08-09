import { ServiceException as __ServiceException__ } from "@aws-sdk/types";

/**
 * <p>The NextToken is invalid. Verify that it's spelled correctly, and then try again.</p>
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
