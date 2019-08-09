import { ServiceException as __ServiceException__ } from "@aws-sdk/types";

/**
 * <p>The request was not valid.</p>
 */
export interface InvalidRequestException
  extends __ServiceException__<_InvalidRequestExceptionDetails> {
  name: "InvalidRequestException";
}

export interface _InvalidRequestExceptionDetails {
  /**
   * _errorMessage shape
   */
  message?: string;
}
