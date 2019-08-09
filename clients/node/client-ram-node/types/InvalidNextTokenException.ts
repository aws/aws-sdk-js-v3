import { ServiceException as __ServiceException__ } from "@aws-sdk/types";

/**
 * <p>The specified value for NextToken is not valid.</p>
 */
export interface InvalidNextTokenException
  extends __ServiceException__<_InvalidNextTokenExceptionDetails> {
  name: "InvalidNextTokenException";
}

export interface _InvalidNextTokenExceptionDetails {
  /**
   * _String shape
   */
  message: string;
}
