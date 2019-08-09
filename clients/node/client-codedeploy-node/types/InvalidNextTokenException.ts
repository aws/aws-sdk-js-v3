import { ServiceException as __ServiceException__ } from "@aws-sdk/types";

/**
 * <p>The next token was specified in an invalid format.</p>
 */
export interface InvalidNextTokenException
  extends __ServiceException__<_InvalidNextTokenExceptionDetails> {
  name: "InvalidNextTokenException";
}

export interface _InvalidNextTokenExceptionDetails {}
