import { ServiceException as __ServiceException__ } from "@aws-sdk/types";

/**
 * <p>The specified <code>ResultToken</code> is invalid.</p>
 */
export interface InvalidResultTokenException
  extends __ServiceException__<_InvalidResultTokenExceptionDetails> {
  name: "InvalidResultTokenException";
}

export interface _InvalidResultTokenExceptionDetails {}
