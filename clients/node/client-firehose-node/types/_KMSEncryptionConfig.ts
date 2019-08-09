/**
 * <p>Describes an encryption key for a destination in Amazon S3.</p>
 */
export interface _KMSEncryptionConfig {
  /**
   * <p>The Amazon Resource Name (ARN) of the encryption key. Must belong to the same AWS Region as the destination Amazon S3 bucket. For more information, see <a href="https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html">Amazon Resource Names (ARNs) and AWS Service Namespaces</a>.</p>
   */
  AWSKMSKeyARN: string;
}

export type _UnmarshalledKMSEncryptionConfig = _KMSEncryptionConfig;
