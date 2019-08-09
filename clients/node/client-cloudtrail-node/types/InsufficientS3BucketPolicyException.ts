import { ServiceException as __ServiceException__ } from "@aws-sdk/types";

/**
 * <p>This exception is thrown when the policy on the S3 bucket is not sufficient.</p>
 */
export interface InsufficientS3BucketPolicyException
  extends __ServiceException__<_InsufficientS3BucketPolicyExceptionDetails> {
  name: "InsufficientS3BucketPolicyException";
}

export interface _InsufficientS3BucketPolicyExceptionDetails {}
