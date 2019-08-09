/**
 * <p/>
 */
export interface _AnalyticsS3BucketDestination {
  /**
   * <p>Specifies the file format used when exporting data to Amazon S3.</p>
   */
  Format: "CSV" | string;

  /**
   * <p>The account ID that owns the destination bucket. If no account ID is provided, the owner will not be validated prior to exporting data.</p>
   */
  BucketAccountId?: string;

  /**
   * <p>The Amazon Resource Name (ARN) of the bucket to which data is exported.</p>
   */
  Bucket: string;

  /**
   * <p>The prefix to use when exporting data. The prefix is prepended to all results.</p>
   */
  Prefix?: string;
}

export type _UnmarshalledAnalyticsS3BucketDestination = _AnalyticsS3BucketDestination;
