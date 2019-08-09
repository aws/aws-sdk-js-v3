import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * CreateUsageReportSubscriptionOutput shape
 */
export interface CreateUsageReportSubscriptionOutput
  extends __aws_sdk_types.MetadataBearer {
  /**
   * <p>The Amazon S3 bucket where generated reports are stored.</p> <p>If you enabled on-instance session scripts and Amazon S3 logging for your session script configuration, AppStream 2.0 created an S3 bucket to store the script output. The bucket is unique to your account and Region. When you enable usage reporting in this case, AppStream 2.0 uses the same bucket to store your usage reports. If you haven't already enabled on-instance session scripts, when you enable usage reports, AppStream 2.0 creates a new S3 bucket.</p>
   */
  S3BucketName?: string;

  /**
   * <p>The schedule for generating usage reports.</p>
   */
  Schedule?: "DAILY" | string;

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}
