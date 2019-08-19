import { ServiceException as __ServiceException__ } from "@aws-sdk/types";

/**
 * <p>Unable to perform the specified operation because another operation that effects an element in this activity is already in progress.</p>
 */
export interface OperationInProgressException
  extends __ServiceException__<_OperationInProgressExceptionDetails> {
  name: "OperationInProgressException";
}

export interface _OperationInProgressExceptionDetails {}
