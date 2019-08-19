import { ServiceException as __ServiceException__ } from "@aws-sdk/types";

/**
 * <p>Invalid input was provided.</p>
 */
export interface InvalidPaginationTokenException
  extends __ServiceException__<_InvalidPaginationTokenExceptionDetails> {
  name: "InvalidPaginationTokenException";
}

export interface _InvalidPaginationTokenExceptionDetails {
  /**
   * _ExceptionMessage shape
   */
  Message?: string;
}
