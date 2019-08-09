import { ServiceException as __ServiceException__ } from "@aws-sdk/types";

/**
 * <p>The S3 bucket name is invalid. For more information about naming rules, go to <a href="https://docs.aws.amazon.com/AmazonS3/latest/dev/BucketRestrictions.html">Bucket Restrictions and Limitations</a> in the Amazon Simple Storage Service (S3) Developer Guide.</p>
 */
export interface InvalidS3BucketNameFault
  extends __ServiceException__<_InvalidS3BucketNameFaultDetails> {
  name: "InvalidS3BucketNameFault";
}

export interface _InvalidS3BucketNameFaultDetails {}
