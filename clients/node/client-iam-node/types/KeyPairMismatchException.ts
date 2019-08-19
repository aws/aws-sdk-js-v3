import { ServiceException as __ServiceException__ } from "@aws-sdk/types";

/**
 * <p>The request was rejected because the public key certificate and the private key do not match.</p>
 */
export interface KeyPairMismatchException
  extends __ServiceException__<_KeyPairMismatchExceptionDetails> {
  name: "KeyPairMismatchException";
}

export interface _KeyPairMismatchExceptionDetails {
  /**
   * _keyPairMismatchMessage shape
   */
  message?: string;
}
