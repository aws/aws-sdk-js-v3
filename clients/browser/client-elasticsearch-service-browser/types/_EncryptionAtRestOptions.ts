/**
 * <p>Specifies the Encryption At Rest Options.</p>
 */
export interface _EncryptionAtRestOptions {
  /**
   * <p>Specifies the option to enable Encryption At Rest.</p>
   */
  Enabled?: boolean;

  /**
   * <p> Specifies the KMS Key ID for Encryption At Rest options.</p>
   */
  KmsKeyId?: string;
}

export type _UnmarshalledEncryptionAtRestOptions = _EncryptionAtRestOptions;
