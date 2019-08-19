import { ServiceException as __ServiceException__ } from "@aws-sdk/types";

/**
 * <p>The specified Amazon S3 bucket does not exist.</p>
 */
export interface NoSuchBucketException
  extends __ServiceException__<_NoSuchBucketExceptionDetails> {
  name: "NoSuchBucketException";
}

export interface _NoSuchBucketExceptionDetails {}
