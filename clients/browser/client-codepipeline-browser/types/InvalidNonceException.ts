import { ServiceException as __ServiceException__ } from "@aws-sdk/types";

/**
 * <p>The specified nonce was specified in an invalid format.</p>
 */
export interface InvalidNonceException
  extends __ServiceException__<_InvalidNonceExceptionDetails> {
  name: "InvalidNonceException";
}

export interface _InvalidNonceExceptionDetails {}
