import { ServiceException as __ServiceException__ } from "@aws-sdk/types";

/**
 * <p>The specified operation isn't valid.</p>
 */
export interface InvalidOperationException
  extends __ServiceException__<_InvalidOperationExceptionDetails> {
  name: "InvalidOperationException";
}

export interface _InvalidOperationExceptionDetails {}
