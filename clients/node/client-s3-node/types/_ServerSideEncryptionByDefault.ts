/**
 * <p>Describes the default server-side encryption to apply to new objects in the bucket. If a PUT Object request doesn't specify any server-side encryption, this default encryption will be applied. For more information, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/API/RESTBucketPUTencryption.html">PUT Bucket encryption</a> in the <i>Amazon Simple Storage Service API Reference</i>.</p>
 */
export interface _ServerSideEncryptionByDefault {
  /**
   * <p>Server-side encryption algorithm to use for the default encryption.</p>
   */
  SSEAlgorithm: "AES256" | "aws:kms" | string;

  /**
   * <p>KMS master key ID to use for the default encryption. This parameter is allowed if and only if <code>SSEAlgorithm</code> is set to <code>aws:kms</code>.</p>
   */
  KMSMasterKeyID?: string;
}

export type _UnmarshalledServerSideEncryptionByDefault = _ServerSideEncryptionByDefault;
