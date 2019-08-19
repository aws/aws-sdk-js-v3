import { ServiceException as __ServiceException__ } from "@aws-sdk/types";

/**
 * <p>This exception is thrown when the requested operation is not supported.</p>
 */
export interface UnsupportedOperationException
  extends __ServiceException__<_UnsupportedOperationExceptionDetails> {
  name: "UnsupportedOperationException";
}

export interface _UnsupportedOperationExceptionDetails {}
