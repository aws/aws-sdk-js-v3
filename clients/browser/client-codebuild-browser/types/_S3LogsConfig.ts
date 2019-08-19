/**
 * <p> Information about S3 logs for a build project. </p>
 */
export interface _S3LogsConfig {
  /**
   * <p>The current status of the S3 build logs. Valid values are:</p> <ul> <li> <p> <code>ENABLED</code>: S3 build logs are enabled for this build project.</p> </li> <li> <p> <code>DISABLED</code>: S3 build logs are not enabled for this build project.</p> </li> </ul>
   */
  status: "ENABLED" | "DISABLED" | string;

  /**
   * <p> The ARN of an S3 bucket and the path prefix for S3 logs. If your Amazon S3 bucket name is <code>my-bucket</code>, and your path prefix is <code>build-log</code>, then acceptable formats are <code>my-bucket/build-log</code> or <code>arn:aws:s3:::my-bucket/build-log</code>. </p>
   */
  location?: string;

  /**
   * <p> Set to true if you do not want your S3 build log output encrypted. By default S3 build logs are encrypted. </p>
   */
  encryptionDisabled?: boolean;
}

export type _UnmarshalledS3LogsConfig = _S3LogsConfig;
