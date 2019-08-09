import { ServiceException as __ServiceException__ } from "@aws-sdk/types";

/**
 * <p>The specified ID refers to an operation that doesn't exist.</p>
 */
export interface OperationNotFoundException
  extends __ServiceException__<_OperationNotFoundExceptionDetails> {
  name: "OperationNotFoundException";
}

export interface _OperationNotFoundExceptionDetails {}
