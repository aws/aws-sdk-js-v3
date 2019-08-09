import { ServiceException as __ServiceException__ } from "@aws-sdk/types";

/**
 * <p>Another operation is currently in progress for this stack set. Only one operation can be performed for a stack set at a given time.</p>
 */
export interface OperationInProgressException
  extends __ServiceException__<_OperationInProgressExceptionDetails> {
  name: "OperationInProgressException";
}

export interface _OperationInProgressExceptionDetails {}
