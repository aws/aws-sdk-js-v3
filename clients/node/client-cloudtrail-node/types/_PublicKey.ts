/**
 * <p>Contains information about a returned public key.</p>
 */
export interface _PublicKey {
  /**
   * <p>The DER encoded public key value in PKCS#1 format.</p>
   */
  Value?: ArrayBuffer | ArrayBufferView | string;

  /**
   * <p>The starting time of validity of the public key.</p>
   */
  ValidityStartTime?: Date | string | number;

  /**
   * <p>The ending time of validity of the public key.</p>
   */
  ValidityEndTime?: Date | string | number;

  /**
   * <p>The fingerprint of the public key.</p>
   */
  Fingerprint?: string;
}

export interface _UnmarshalledPublicKey extends _PublicKey {
  /**
   * <p>The DER encoded public key value in PKCS#1 format.</p>
   */
  Value?: Uint8Array;

  /**
   * <p>The starting time of validity of the public key.</p>
   */
  ValidityStartTime?: Date;

  /**
   * <p>The ending time of validity of the public key.</p>
   */
  ValidityEndTime?: Date;
}
