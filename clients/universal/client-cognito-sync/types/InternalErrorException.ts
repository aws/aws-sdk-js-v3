import { ServiceException as __ServiceException__ } from "@aws-sdk/types";

/**
 * Indicates an internal service error.
 */
export interface InternalErrorException
  extends __ServiceException__<_InternalErrorExceptionDetails> {
  name: "InternalErrorException";
}

export interface _InternalErrorExceptionDetails {
  /**
   * Message returned by InternalErrorException.
   */
  message: string;
}
