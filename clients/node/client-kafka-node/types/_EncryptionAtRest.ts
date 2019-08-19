/**
 *
 *             <p>The data-volume encryption details.</p>
 *
 */
export interface _EncryptionAtRest {
  /**
   *
   *             <p>The ARN of the AWS KMS key for encrypting data at rest. If you don't specify a KMS key, MSK creates one for you and uses it.</p>
   *
   */
  DataVolumeKMSKeyId: string;
}

export type _UnmarshalledEncryptionAtRest = _EncryptionAtRest;
