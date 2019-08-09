import { ServiceException as __ServiceException__ } from "@aws-sdk/types";

/**
 * <p>The payload exceeds the maximum size allowed.</p>
 */
export interface RequestEntityTooLargeException
  extends __ServiceException__<_RequestEntityTooLargeExceptionDetails> {
  name: "RequestEntityTooLargeException";
}

export interface _RequestEntityTooLargeExceptionDetails {
  /**
   * <p>The message for the exception.</p>
   */
  message?: string;
}
