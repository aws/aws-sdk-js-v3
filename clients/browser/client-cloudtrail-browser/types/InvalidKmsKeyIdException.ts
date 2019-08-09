import { ServiceException as __ServiceException__ } from "@aws-sdk/types";

/**
 * <p>This exception is thrown when the KMS key ARN is invalid.</p>
 */
export interface InvalidKmsKeyIdException
  extends __ServiceException__<_InvalidKmsKeyIdExceptionDetails> {
  name: "InvalidKmsKeyIdException";
}

export interface _InvalidKmsKeyIdExceptionDetails {}
