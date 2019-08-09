/**
 * <p>Describes the storage parameters for S3 and S3 buckets for an instance store-backed AMI.</p>
 */
export interface _S3Storage {
  /**
   * <p>The access key ID of the owner of the bucket. Before you specify a value for your access key ID, review and follow the guidance in <a href="https://docs.aws.amazon.com/general/latest/gr/aws-access-keys-best-practices.html">Best Practices for Managing AWS Access Keys</a>.</p>
   */
  AWSAccessKeyId?: string;

  /**
   * <p>The bucket in which to store the AMI. You can specify a bucket that you already own or a new bucket that Amazon EC2 creates on your behalf. If you specify a bucket that belongs to someone else, Amazon EC2 returns an error.</p>
   */
  Bucket?: string;

  /**
   * <p>The beginning of the file name of the AMI.</p>
   */
  Prefix?: string;

  /**
   * <p>An Amazon S3 upload policy that gives Amazon EC2 permission to upload items into Amazon S3 on your behalf.</p>
   */
  UploadPolicy?: ArrayBuffer | ArrayBufferView | string;

  /**
   * <p>The signature of the JSON document.</p>
   */
  UploadPolicySignature?: string;
}

export interface _UnmarshalledS3Storage extends _S3Storage {
  /**
   * <p>An Amazon S3 upload policy that gives Amazon EC2 permission to upload items into Amazon S3 on your behalf.</p>
   */
  UploadPolicy?: Uint8Array;
}
