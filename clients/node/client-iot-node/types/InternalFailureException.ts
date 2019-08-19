import { ServiceException as __ServiceException__ } from "@aws-sdk/types";

/**
 * <p>An unexpected error has occurred.</p>
 */
export interface InternalFailureException
  extends __ServiceException__<_InternalFailureExceptionDetails> {
  name: "InternalFailureException";
}

export interface _InternalFailureExceptionDetails {
  /**
   * <p>The message for the exception.</p>
   */
  message?: string;
}
