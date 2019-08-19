import { ServiceException as __ServiceException__ } from "@aws-sdk/types";

/**
 * <p>The request was rejected because the public key is malformed or otherwise invalid.</p>
 */
export interface InvalidPublicKeyException
  extends __ServiceException__<_InvalidPublicKeyExceptionDetails> {
  name: "InvalidPublicKeyException";
}

export interface _InvalidPublicKeyExceptionDetails {
  /**
   * _invalidPublicKeyMessage shape
   */
  message?: string;
}
