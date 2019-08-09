import { ServiceException as __ServiceException__ } from "@aws-sdk/types";

/**
 * <p>The S3 bucket policy is not valid. The policy must give ACM Private CA rights to read from and write to the bucket and find the bucket location.</p>
 */
export interface InvalidPolicyException
  extends __ServiceException__<_InvalidPolicyExceptionDetails> {
  name: "InvalidPolicyException";
}

export interface _InvalidPolicyExceptionDetails {
  /**
   * _String shape
   */
  message?: string;
}
