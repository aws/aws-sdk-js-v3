import { ServiceException as __ServiceException__ } from "@aws-sdk/types";

/**
 * <p>An unexpected error has occurred.</p>
 */
export interface InternalException
  extends __ServiceException__<_InternalExceptionDetails> {
  name: "InternalException";
}

export interface _InternalExceptionDetails {
  /**
   * <p>The message for the exception.</p>
   */
  message?: string;
}
