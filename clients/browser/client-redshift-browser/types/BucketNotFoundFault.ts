import { ServiceException as __ServiceException__ } from "@aws-sdk/types";

/**
 * <p>Could not find the specified S3 bucket.</p>
 */
export interface BucketNotFoundFault
  extends __ServiceException__<_BucketNotFoundFaultDetails> {
  name: "BucketNotFoundFault";
}

export interface _BucketNotFoundFaultDetails {}
