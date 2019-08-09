import { ServiceException as __ServiceException__ } from "@aws-sdk/types";

/**
 * <p>The column name to sort by is either not present or was specified in an invalid format.</p>
 */
export interface InvalidSortByException
  extends __ServiceException__<_InvalidSortByExceptionDetails> {
  name: "InvalidSortByException";
}

export interface _InvalidSortByExceptionDetails {}
