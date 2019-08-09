import { ServiceException as __ServiceException__ } from "@aws-sdk/types";

/**
 * <p>The sort order was specified in an invalid format.</p>
 */
export interface InvalidSortOrderException
  extends __ServiceException__<_InvalidSortOrderExceptionDetails> {
  name: "InvalidSortOrderException";
}

export interface _InvalidSortOrderExceptionDetails {}
