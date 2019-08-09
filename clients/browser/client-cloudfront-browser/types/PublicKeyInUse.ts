import { ServiceException as __ServiceException__ } from "@aws-sdk/types";

/**
 * <p>The specified public key is in use. </p>
 */
export interface PublicKeyInUse
  extends __ServiceException__<_PublicKeyInUseDetails> {
  name: "PublicKeyInUse";
}

export interface _PublicKeyInUseDetails {
  /**
   * _string shape
   */
  Message?: string;
}
