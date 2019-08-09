/**
 * Encryption options for the broker.
 */
export interface _EncryptionOptions {
  /**
   * The customer master key (CMK) to use for the AWS Key Management Service (KMS). This key is used to encrypt your data at rest. If not provided, Amazon MQ will use a default CMK to encrypt your data.
   */
  KmsKeyId?: string;

  /**
   * Enables the use of an AWS owned CMK using AWS Key Management Service (KMS).
   */
  UseAwsOwnedKey: boolean;
}

export type _UnmarshalledEncryptionOptions = _EncryptionOptions;
