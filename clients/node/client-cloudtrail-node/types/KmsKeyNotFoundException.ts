import { ServiceException as __ServiceException__ } from "@aws-sdk/types";

/**
 * <p>This exception is thrown when the KMS key does not exist, or when the S3 bucket and the KMS key are not in the same region.</p>
 */
export interface KmsKeyNotFoundException
  extends __ServiceException__<_KmsKeyNotFoundExceptionDetails> {
  name: "KmsKeyNotFoundException";
}

export interface _KmsKeyNotFoundExceptionDetails {}
