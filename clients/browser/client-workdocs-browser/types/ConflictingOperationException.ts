import { ServiceException as __ServiceException__ } from "@aws-sdk/types";

/**
 * <p>Another operation is in progress on the resource that conflicts with the current operation.</p>
 */
export interface ConflictingOperationException
  extends __ServiceException__<_ConflictingOperationExceptionDetails> {
  name: "ConflictingOperationException";
}

export interface _ConflictingOperationExceptionDetails {
  /**
   * _ErrorMessageType shape
   */
  Message?: string;
}
