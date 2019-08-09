/**
 * <p>Describes the server-side encryption that will be applied to the restore results.</p>
 */
export interface _Encryption {
  /**
   * <p>The server-side encryption algorithm used when storing job results in Amazon S3 (e.g., AES256, aws:kms).</p>
   */
  EncryptionType: "AES256" | "aws:kms" | string;

  /**
   * <p>If the encryption type is aws:kms, this optional value specifies the AWS KMS key ID to use for encryption of job results.</p>
   */
  KMSKeyId?: string;

  /**
   * <p>If the encryption type is aws:kms, this optional value can be used to specify the encryption context for the restore results.</p>
   */
  KMSContext?: string;
}

export type _UnmarshalledEncryption = _Encryption;
