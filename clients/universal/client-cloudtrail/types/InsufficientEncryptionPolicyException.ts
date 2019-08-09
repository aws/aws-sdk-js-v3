import { ServiceException as __ServiceException__ } from "@aws-sdk/types";

/**
 * <p>This exception is thrown when the policy on the S3 bucket or KMS key is not sufficient.</p>
 */
export interface InsufficientEncryptionPolicyException
  extends __ServiceException__<_InsufficientEncryptionPolicyExceptionDetails> {
  name: "InsufficientEncryptionPolicyException";
}

export interface _InsufficientEncryptionPolicyExceptionDetails {}
