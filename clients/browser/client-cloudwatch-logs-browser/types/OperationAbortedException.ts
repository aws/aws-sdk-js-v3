import { ServiceException as __ServiceException__ } from "@aws-sdk/types";

/**
 * <p>Multiple requests to update the same resource were in conflict.</p>
 */
export interface OperationAbortedException
  extends __ServiceException__<_OperationAbortedExceptionDetails> {
  name: "OperationAbortedException";
}

export interface _OperationAbortedExceptionDetails {}
