import { ServiceException as __ServiceException__ } from "@aws-sdk/types";

/**
 * <p>Pagination token in the request is not valid.</p>
 */
export interface InvalidPaginationTokenException
  extends __ServiceException__<_InvalidPaginationTokenExceptionDetails> {
  name: "InvalidPaginationTokenException";
}

export interface _InvalidPaginationTokenExceptionDetails {}
