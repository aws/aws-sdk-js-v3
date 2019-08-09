/**
 * <p>Specifies how Amazon CloudWatch data should be encrypted.</p>
 */
export interface _CloudWatchEncryption {
  /**
   * <p>The encryption mode to use for CloudWatch data.</p>
   */
  CloudWatchEncryptionMode?: "DISABLED" | "SSE-KMS" | string;

  /**
   * <p>The Amazon Resource Name (ARN) of the KMS key to be used to encrypt the data.</p>
   */
  KmsKeyArn?: string;
}

export type _UnmarshalledCloudWatchEncryption = _CloudWatchEncryption;
