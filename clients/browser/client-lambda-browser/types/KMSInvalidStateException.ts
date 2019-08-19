import { ServiceException as __ServiceException__ } from "@aws-sdk/types";

/**
 * <p>Lambda was unable to decrypt the environment variables because the KMS key used is in an invalid state for Decrypt. Check the function's KMS key settings.</p>
 */
export interface KMSInvalidStateException
  extends __ServiceException__<_KMSInvalidStateExceptionDetails> {
  name: "KMSInvalidStateException";
}

export interface _KMSInvalidStateExceptionDetails {
  /**
   * _String shape
   */
  Type?: string;

  /**
   * _String shape
   */
  Message?: string;
}
