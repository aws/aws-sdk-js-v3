/**
 * <p>The Amazon Resource Name (ARN) of the AWS Identity and Access Management (IAM) role that is used to access an Amazon S3 bucket.</p> <p>For detailed information about using such a role, see Creating a Location for Amazon S3 in the <i>AWS DataSync User Guide</i>.</p>
 */
export interface _S3Config {
  /**
   * <p>The Amazon S3 bucket to access. This bucket is used as a parameter in the <a>CreateLocationS3</a> operation. </p>
   */
  BucketAccessRoleArn: string;
}

export type _UnmarshalledS3Config = _S3Config;
