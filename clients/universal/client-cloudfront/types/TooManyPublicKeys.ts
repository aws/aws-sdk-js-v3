import { ServiceException as __ServiceException__ } from "@aws-sdk/types";

/**
 * <p>The maximum number of public keys for field-level encryption have been created. To create a new public key, delete one of the existing keys.</p>
 */
export interface TooManyPublicKeys
  extends __ServiceException__<_TooManyPublicKeysDetails> {
  name: "TooManyPublicKeys";
}

export interface _TooManyPublicKeysDetails {
  /**
   * _string shape
   */
  Message?: string;
}
