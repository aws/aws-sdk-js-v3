import { ServiceException as __ServiceException__ } from "@aws-sdk/types";

/**
 * <p>The next token was specified in an invalid format. Make sure that the next token you provided is the token returned by a previous call.</p>
 */
export interface InvalidNextTokenException
  extends __ServiceException__<_InvalidNextTokenExceptionDetails> {
  name: "InvalidNextTokenException";
}

export interface _InvalidNextTokenExceptionDetails {}
