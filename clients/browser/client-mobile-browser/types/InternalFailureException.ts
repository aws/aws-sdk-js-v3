import { ServiceException as __ServiceException__ } from "@aws-sdk/types";

/**
 * <p> The service has encountered an unexpected error condition which prevents it from servicing the request. </p>
 */
export interface InternalFailureException
  extends __ServiceException__<_InternalFailureExceptionDetails> {
  name: "InternalFailureException";
}

export interface _InternalFailureExceptionDetails {
  /**
   * <p> The Exception Error Message. </p>
   */
  message?: string;
}
