import { ServiceException as __ServiceException__ } from "@aws-sdk/types";

/**
 * <p>An internal error has occurred. Retry your request. If the problem persists, post a message with details on the AWS forums.</p>
 */
export interface InternalServiceErrorException
  extends __ServiceException__<_InternalServiceErrorExceptionDetails> {
  name: "InternalServiceErrorException";
}

export interface _InternalServiceErrorExceptionDetails {
  /**
   * _errorMessage shape
   */
  message?: string;
}
