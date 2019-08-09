import { ServiceException as __ServiceException__ } from "@aws-sdk/types";

/**
 * <p>The tag filter was specified in an invalid format.</p>
 */
export interface InvalidTagFilterException
  extends __ServiceException__<_InvalidTagFilterExceptionDetails> {
  name: "InvalidTagFilterException";
}

export interface _InvalidTagFilterExceptionDetails {}
