import { ServiceException as __ServiceException__ } from "@aws-sdk/types";

/**
 * <p>This operation is not allowed.</p>
 */
export interface OperationNotPermittedException
  extends __ServiceException__<_OperationNotPermittedExceptionDetails> {
  name: "OperationNotPermittedException";
}

export interface _OperationNotPermittedExceptionDetails {
  /**
   * _ErrorMessage shape
   */
  message?: string;
}
