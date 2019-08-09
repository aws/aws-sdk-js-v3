import { ServiceException as __ServiceException__ } from "@aws-sdk/types";

/**
 * <p>The API used does not support the deployment.</p>
 */
export interface OperationNotSupportedException
  extends __ServiceException__<_OperationNotSupportedExceptionDetails> {
  name: "OperationNotSupportedException";
}

export interface _OperationNotSupportedExceptionDetails {}
