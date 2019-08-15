import { ServiceException as __ServiceException__ } from "@aws-sdk/types";

/**
 * <p>There was an internal failure.</p>
 */
export interface InternalFailureException
  extends __ServiceException__<_InternalFailureExceptionDetails> {
  name: "InternalFailureException";
}

export interface _InternalFailureExceptionDetails {
  /**
   * __errorMessage shape
   */
  message?: string;
}
