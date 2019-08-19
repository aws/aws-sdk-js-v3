import { ServiceException as __ServiceException__ } from "@aws-sdk/types";

/**
 * <p>Invalid token or token that was previously used in a request with different parameters. This exception is thrown if the token is invalid.</p>
 */
export interface InvalidNextTokenException
  extends __ServiceException__<_InvalidNextTokenExceptionDetails> {
  name: "InvalidNextTokenException";
}

export interface _InvalidNextTokenExceptionDetails {}
