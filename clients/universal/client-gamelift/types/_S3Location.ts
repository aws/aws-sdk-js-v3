/**
 * <p>Location in Amazon Simple Storage Service (Amazon S3) where build or script files are stored for access by Amazon GameLift. This location is specified in <a>CreateBuild</a>, <a>CreateScript</a>, and <a>UpdateScript</a> requests. </p>
 */
export interface _S3Location {
  /**
   * <p>Amazon S3 bucket identifier. This is the name of the S3 bucket.</p>
   */
  Bucket?: string;

  /**
   * <p>Name of the zip file containing the build files or script files. </p>
   */
  Key?: string;

  /**
   * <p>Amazon Resource Name (<a href="https://docs.aws.amazon.com/AmazonS3/latest/dev/s3-arn-format.html">ARN</a>) for an IAM role that allows Amazon GameLift to access the S3 bucket.</p>
   */
  RoleArn?: string;

  /**
   * <p>Version of the file, if object versioning is turned on for the bucket. Amazon GameLift uses this information when retrieving files from an S3 bucket that you own. Use this parameter to specify a specific version of the file; if not set, the latest version of the file is retrieved. </p>
   */
  ObjectVersion?: string;
}

export type _UnmarshalledS3Location = _S3Location;
