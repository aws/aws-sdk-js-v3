import { ServiceException as __ServiceException__ } from "@aws-sdk/types";

/**
 * <p>The request failed due to an unknown error.</p>
 */
export interface InternalServiceError
  extends __ServiceException__<_InternalServiceErrorDetails> {
  name: "InternalServiceError";
}

export interface _InternalServiceErrorDetails {
  /**
   * _String shape
   */
  Message?: string;
}
