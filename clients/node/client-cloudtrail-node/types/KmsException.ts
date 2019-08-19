import { ServiceException as __ServiceException__ } from "@aws-sdk/types";

/**
 * <p>This exception is thrown when there is an issue with the specified KMS key and the trail can’t be updated.</p>
 */
export interface KmsException
  extends __ServiceException__<_KmsExceptionDetails> {
  name: "KmsException";
}

export interface _KmsExceptionDetails {}
