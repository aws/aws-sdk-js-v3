import { ServiceException as __ServiceException__ } from "@aws-sdk/types";

/**
 * <p>The cluster does not have read bucket or put object permissions on the S3 bucket specified when enabling logging.</p>
 */
export interface InsufficientS3BucketPolicyFault
  extends __ServiceException__<_InsufficientS3BucketPolicyFaultDetails> {
  name: "InsufficientS3BucketPolicyFault";
}

export interface _InsufficientS3BucketPolicyFaultDetails {}
