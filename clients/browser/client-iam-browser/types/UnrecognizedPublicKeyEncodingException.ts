import { ServiceException as __ServiceException__ } from "@aws-sdk/types";

/**
 * <p>The request was rejected because the public key encoding format is unsupported or unrecognized.</p>
 */
export interface UnrecognizedPublicKeyEncodingException
  extends __ServiceException__<_UnrecognizedPublicKeyEncodingExceptionDetails> {
  name: "UnrecognizedPublicKeyEncodingException";
}

export interface _UnrecognizedPublicKeyEncodingExceptionDetails {
  /**
   * _unrecognizedPublicKeyEncodingMessage shape
   */
  message?: string;
}
