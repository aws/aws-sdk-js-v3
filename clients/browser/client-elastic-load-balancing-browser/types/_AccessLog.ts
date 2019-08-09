/**
 * <p>Information about the <code>AccessLog</code> attribute.</p>
 */
export interface _AccessLog {
  /**
   * <p>Specifies whether access logs are enabled for the load balancer.</p>
   */
  Enabled: boolean;

  /**
   * <p>The name of the Amazon S3 bucket where the access logs are stored.</p>
   */
  S3BucketName?: string;

  /**
   * <p>The interval for publishing the access logs. You can specify an interval of either 5 minutes or 60 minutes.</p> <p>Default: 60 minutes</p>
   */
  EmitInterval?: number;

  /**
   * <p>The logical hierarchy you created for your Amazon S3 bucket, for example <code>my-bucket-prefix/prod</code>. If the prefix is not provided, the log is placed at the root level of the bucket.</p>
   */
  S3BucketPrefix?: string;
}

export type _UnmarshalledAccessLog = _AccessLog;
