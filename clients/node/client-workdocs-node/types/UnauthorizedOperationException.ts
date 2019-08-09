import { ServiceException as __ServiceException__ } from "@aws-sdk/types";

/**
 * <p>The operation is not permitted.</p>
 */
export interface UnauthorizedOperationException
  extends __ServiceException__<_UnauthorizedOperationExceptionDetails> {
  name: "UnauthorizedOperationException";
}

export interface _UnauthorizedOperationExceptionDetails {}
