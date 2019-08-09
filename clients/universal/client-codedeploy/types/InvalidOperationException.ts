import { ServiceException as __ServiceException__ } from "@aws-sdk/types";

/**
 * <p>An invalid operation was detected.</p>
 */
export interface InvalidOperationException
  extends __ServiceException__<_InvalidOperationExceptionDetails> {
  name: "InvalidOperationException";
}

export interface _InvalidOperationExceptionDetails {}
