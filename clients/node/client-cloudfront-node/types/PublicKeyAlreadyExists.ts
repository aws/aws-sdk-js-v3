import { ServiceException as __ServiceException__ } from "@aws-sdk/types";

/**
 * <p>The specified public key already exists.</p>
 */
export interface PublicKeyAlreadyExists
  extends __ServiceException__<_PublicKeyAlreadyExistsDetails> {
  name: "PublicKeyAlreadyExists";
}

export interface _PublicKeyAlreadyExistsDetails {
  /**
   * _string shape
   */
  Message?: string;
}
