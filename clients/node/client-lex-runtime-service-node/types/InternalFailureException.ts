import { ServiceException as __ServiceException__ } from "@aws-sdk/types";

/**
 * <p>Internal service error. Retry the call.</p>
 */
export interface InternalFailureException
  extends __ServiceException__<_InternalFailureExceptionDetails> {
  name: "InternalFailureException";
}

export interface _InternalFailureExceptionDetails {
  /**
   * _String shape
   */
  message?: string;
}
