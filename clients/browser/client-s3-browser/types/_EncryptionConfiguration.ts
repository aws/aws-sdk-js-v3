/**
 * <p>Specifies encryption-related information for an Amazon S3 bucket that is a destination for replicated objects.</p>
 */
export interface _EncryptionConfiguration {
  /**
   * <p>Specifies the AWS KMS Key ID (Key ARN or Alias ARN) for the destination bucket. Amazon S3 uses this key to encrypt replica objects.</p>
   */
  ReplicaKmsKeyID?: string;
}

export type _UnmarshalledEncryptionConfiguration = _EncryptionConfiguration;
