import { ServiceException as __ServiceException__ } from "@aws-sdk/types";

/**
 * <p>The operation is not supported.</p>
 */
export interface OperationNotSupportedException
  extends __ServiceException__<_OperationNotSupportedExceptionDetails> {
  name: "OperationNotSupportedException";
}

export interface _OperationNotSupportedExceptionDetails {}
