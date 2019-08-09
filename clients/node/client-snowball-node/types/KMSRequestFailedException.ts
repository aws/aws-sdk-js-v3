import { ServiceException as __ServiceException__ } from "@aws-sdk/types";

/**
 * <p>The provided AWS Key Management Service key lacks the permissions to perform the specified <a>CreateJob</a> or <a>UpdateJob</a> action.</p>
 */
export interface KMSRequestFailedException
  extends __ServiceException__<_KMSRequestFailedExceptionDetails> {
  name: "KMSRequestFailedException";
}

export interface _KMSRequestFailedExceptionDetails {
  /**
   * _String shape
   */
  Message?: string;
}
