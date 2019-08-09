import { ServiceException as __ServiceException__ } from "@aws-sdk/types";

/**
 * <p>An internal service error occurred.</p>
 */
export interface InternalServiceError
  extends __ServiceException__<_InternalServiceErrorDetails> {
  name: "InternalServiceError";
}

export interface _InternalServiceErrorDetails {
  /**
   * <p>Description of the error message.</p>
   */
  message?: string;
}
