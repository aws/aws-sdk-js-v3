/**
 * <p>Describes an action to write data to an Amazon S3 bucket.</p>
 */
export interface _S3Action {
  /**
   * <p>The ARN of the IAM role that grants access.</p>
   */
  roleArn: string;

  /**
   * <p>The Amazon S3 bucket.</p>
   */
  bucketName: string;

  /**
   * <p>The object key.</p>
   */
  key: string;

  /**
   * <p>The Amazon S3 canned ACL that controls access to the object identified by the object key. For more information, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/dev/acl-overview.html#canned-acl">S3 canned ACLs</a>.</p>
   */
  cannedAcl?:
    | "private"
    | "public-read"
    | "public-read-write"
    | "aws-exec-read"
    | "authenticated-read"
    | "bucket-owner-read"
    | "bucket-owner-full-control"
    | "log-delivery-write"
    | string;
}

export type _UnmarshalledS3Action = _S3Action;
