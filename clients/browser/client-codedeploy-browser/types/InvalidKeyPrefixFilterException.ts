import { ServiceException as __ServiceException__ } from "@aws-sdk/types";

/**
 * <p>The specified key prefix filter was specified in an invalid format.</p>
 */
export interface InvalidKeyPrefixFilterException
  extends __ServiceException__<_InvalidKeyPrefixFilterExceptionDetails> {
  name: "InvalidKeyPrefixFilterException";
}

export interface _InvalidKeyPrefixFilterExceptionDetails {}
