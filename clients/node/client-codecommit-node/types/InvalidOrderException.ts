import { ServiceException as __ServiceException__ } from "@aws-sdk/types";

/**
 * <p>The specified sort order is not valid.</p>
 */
export interface InvalidOrderException
  extends __ServiceException__<_InvalidOrderExceptionDetails> {
  name: "InvalidOrderException";
}

export interface _InvalidOrderExceptionDetails {}
