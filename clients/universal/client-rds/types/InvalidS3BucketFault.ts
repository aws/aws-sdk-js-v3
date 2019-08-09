import { ServiceException as __ServiceException__ } from "@aws-sdk/types";

/**
 * <p>The specified Amazon S3 bucket name can't be found or Amazon RDS isn't authorized to access the specified Amazon S3 bucket. Verify the <b>SourceS3BucketName</b> and <b>S3IngestionRoleArn</b> values and try again.</p>
 */
export interface InvalidS3BucketFault
  extends __ServiceException__<_InvalidS3BucketFaultDetails> {
  name: "InvalidS3BucketFault";
}

export interface _InvalidS3BucketFaultDetails {}
