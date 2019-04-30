/**
 * <p>A configuration document that specifies encryption configuration settings.</p>
 */
export interface _EncryptionConfig {
  /**
   * <p>The ID of the customer master key (CMK) used for encryption, if applicable.</p>
   */
  KeyId?: string;

  /**
   * <p>The encryption status. While the status is <code>UPDATING</code>, X-Ray may encrypt data with a combination of the new and old settings.</p>
   */
  Status?: "UPDATING" | "ACTIVE" | string;

  /**
   * <p>The type of encryption. Set to <code>KMS</code> for encryption with CMKs. Set to <code>NONE</code> for default encryption.</p>
   */
  Type?: "NONE" | "KMS" | string;
}

export type _UnmarshalledEncryptionConfig = _EncryptionConfig;
