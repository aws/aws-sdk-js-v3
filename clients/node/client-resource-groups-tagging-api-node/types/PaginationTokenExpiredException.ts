import { ServiceException as __ServiceException__ } from "@aws-sdk/types";

/**
 * <p>A <code>PaginationToken</code> is valid for a maximum of 15 minutes. Your request was denied because the specified <code>PaginationToken</code> has expired.</p>
 */
export interface PaginationTokenExpiredException
  extends __ServiceException__<_PaginationTokenExpiredExceptionDetails> {
  name: "PaginationTokenExpiredException";
}

export interface _PaginationTokenExpiredExceptionDetails {
  /**
   * _ExceptionMessage shape
   */
  Message?: string;
}
