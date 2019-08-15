import { ServiceException as __ServiceException__ } from "@aws-sdk/types";

/**
 * <p>Indicates an internal service error.</p>
 */
export interface InternalErrorException
  extends __ServiceException__<_InternalErrorExceptionDetails> {
  name: "InternalErrorException";
}

export interface _InternalErrorExceptionDetails {
  /**
   * __string shape
   */
  message?: string;
}
