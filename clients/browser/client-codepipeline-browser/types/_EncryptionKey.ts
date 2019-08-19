/**
 * <p>Represents information about the key used to encrypt data in the artifact store, such as an AWS Key Management Service (AWS KMS) key.</p>
 */
export interface _EncryptionKey {
  /**
   * <p>The ID used to identify the key. For an AWS KMS key, this is the key ID or key ARN.</p>
   */
  id: string;

  /**
   * <p>The type of encryption key, such as an AWS Key Management Service (AWS KMS) key. When creating or updating a pipeline, the value must be set to 'KMS'.</p>
   */
  type: "KMS" | string;
}

export type _UnmarshalledEncryptionKey = _EncryptionKey;
