import { ServiceException as __ServiceException__ } from "@aws-sdk/types";

/**
 * <p>Exception that indicates that a problem occurred with the service infrastructure. You can retry the request.</p>
 */
export interface InternalErrorException
  extends __ServiceException__<_InternalErrorExceptionDetails> {
  name: "InternalErrorException";
}

export interface _InternalErrorExceptionDetails {
  /**
   * _errorMessage shape
   */
  message?: string;
}
