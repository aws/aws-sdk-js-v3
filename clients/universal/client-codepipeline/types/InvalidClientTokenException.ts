import { ServiceException as __ServiceException__ } from "@aws-sdk/types";

/**
 * <p>The client token was specified in an invalid format</p>
 */
export interface InvalidClientTokenException
  extends __ServiceException__<_InvalidClientTokenExceptionDetails> {
  name: "InvalidClientTokenException";
}

export interface _InvalidClientTokenExceptionDetails {}
