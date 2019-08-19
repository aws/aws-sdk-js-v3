import { ServiceException as __ServiceException__ } from "@aws-sdk/types";

/**
 * <p>The <code>NextToken</code> parameter that was passed is invalid.</p>
 */
export interface InvalidNextTokenException
  extends __ServiceException__<_InvalidNextTokenExceptionDetails> {
  name: "InvalidNextTokenException";
}

export interface _InvalidNextTokenExceptionDetails {
  /**
   * _Message shape
   */
  Message: string;
}
