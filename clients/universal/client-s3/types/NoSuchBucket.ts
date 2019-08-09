import { ServiceException as __ServiceException__ } from "@aws-sdk/types";

/**
 * <p>The specified bucket does not exist.</p>
 */
export interface NoSuchBucket
  extends __ServiceException__<_NoSuchBucketDetails> {
  name: "NoSuchBucket";
}

export interface _NoSuchBucketDetails {}
