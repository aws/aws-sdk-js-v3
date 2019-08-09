import { ServiceException as __ServiceException__ } from "@aws-sdk/types";

/**
 * <p>You can't change the value of a public key.</p>
 */
export interface CannotChangeImmutablePublicKeyFields
  extends __ServiceException__<_CannotChangeImmutablePublicKeyFieldsDetails> {
  name: "CannotChangeImmutablePublicKeyFields";
}

export interface _CannotChangeImmutablePublicKeyFieldsDetails {
  /**
   * _string shape
   */
  Message?: string;
}
