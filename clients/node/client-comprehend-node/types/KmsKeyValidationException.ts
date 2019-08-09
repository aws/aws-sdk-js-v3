import { ServiceException as __ServiceException__ } from "@aws-sdk/types";

/**
 * <p>The KMS customer managed key (CMK) entered cannot be validated. Verify the key and re-enter it.</p>
 */
export interface KmsKeyValidationException
  extends __ServiceException__<_KmsKeyValidationExceptionDetails> {
  name: "KmsKeyValidationException";
}

export interface _KmsKeyValidationExceptionDetails {
  /**
   * _String shape
   */
  Message?: string;
}
