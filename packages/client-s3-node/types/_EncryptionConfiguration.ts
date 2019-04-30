/**
 * <p>Container for information regarding encryption based configuration for replicas.</p>
 */
export interface _EncryptionConfiguration {
  /**
   * <p> The ID of the AWS KMS key for the region where the destination bucket resides. Amazon S3 uses this key to encrypt the replica object. </p>
   */
  ReplicaKmsKeyID?: string;
}

export type _UnmarshalledEncryptionConfiguration = _EncryptionConfiguration;
