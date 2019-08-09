import { ServiceException as __ServiceException__ } from "@aws-sdk/types";

/**
 * <p>Lambda was unable to decrypt the environment variables because the KMS key was not found. Check the function's KMS key settings. </p>
 */
export interface KMSNotFoundException
  extends __ServiceException__<_KMSNotFoundExceptionDetails> {
  name: "KMSNotFoundException";
}

export interface _KMSNotFoundExceptionDetails {
  /**
   * _String shape
   */
  Type?: string;

  /**
   * _String shape
   */
  Message?: string;
}
