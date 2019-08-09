import {
  _AnalyticsS3BucketDestination,
  _UnmarshalledAnalyticsS3BucketDestination
} from "./_AnalyticsS3BucketDestination";

/**
 * <p>Where to publish the analytics results.</p>
 */
export interface _AnalyticsExportDestination {
  /**
   * <p>A destination signifying output to an S3 bucket.</p>
   */
  S3BucketDestination: _AnalyticsS3BucketDestination;
}

export interface _UnmarshalledAnalyticsExportDestination
  extends _AnalyticsExportDestination {
  /**
   * <p>A destination signifying output to an S3 bucket.</p>
   */
  S3BucketDestination: _UnmarshalledAnalyticsS3BucketDestination;
}
