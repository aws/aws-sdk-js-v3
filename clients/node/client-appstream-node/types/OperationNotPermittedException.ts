import { ServiceException as __ServiceException__ } from "@aws-sdk/types";

/**
 * <p>The attempted operation is not permitted.</p>
 */
export interface OperationNotPermittedException
  extends __ServiceException__<_OperationNotPermittedExceptionDetails> {
  name: "OperationNotPermittedException";
}

export interface _OperationNotPermittedExceptionDetails {
  /**
   * <p>The error message in the exception.</p>
   */
  Message?: string;
}
