import { ServiceException as __ServiceException__ } from "@aws-sdk/types";

/**
 * <p>Exception that indicates that the NextToken specified in the request is invalid. Submit the request using the NextToken value that was returned in the response.</p>
 */
export interface InvalidPaginationTokenException
  extends __ServiceException__<_InvalidPaginationTokenExceptionDetails> {
  name: "InvalidPaginationTokenException";
}

export interface _InvalidPaginationTokenExceptionDetails {
  /**
   * _errorMessage shape
   */
  message?: string;
}
