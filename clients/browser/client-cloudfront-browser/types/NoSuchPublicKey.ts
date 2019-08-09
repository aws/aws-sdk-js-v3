import { ServiceException as __ServiceException__ } from "@aws-sdk/types";

/**
 * <p>The specified public key doesn't exist.</p>
 */
export interface NoSuchPublicKey
  extends __ServiceException__<_NoSuchPublicKeyDetails> {
  name: "NoSuchPublicKey";
}

export interface _NoSuchPublicKeyDetails {
  /**
   * _string shape
   */
  Message?: string;
}
