import { ServiceException as __ServiceException__ } from "@aws-sdk/types";

/**
 * <p>An error occurred on the server side.</p>
 */
export interface InternalServiceError
  extends __ServiceException__<_InternalServiceErrorDetails> {
  name: "InternalServiceError";
}

export interface _InternalServiceErrorDetails {
  /**
   * _ErrorMessage shape
   */
  Message?: string;
}
