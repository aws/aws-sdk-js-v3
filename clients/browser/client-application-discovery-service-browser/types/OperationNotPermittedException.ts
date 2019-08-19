import { ServiceException as __ServiceException__ } from "@aws-sdk/types";

/**
 * <p>This operation is not permitted.</p>
 */
export interface OperationNotPermittedException
  extends __ServiceException__<_OperationNotPermittedExceptionDetails> {
  name: "OperationNotPermittedException";
}

export interface _OperationNotPermittedExceptionDetails {
  /**
   * _Message shape
   */
  message?: string;
}
