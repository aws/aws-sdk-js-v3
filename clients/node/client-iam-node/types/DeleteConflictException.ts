import { ServiceException as __ServiceException__ } from "@aws-sdk/types";

/**
 * <p>The request was rejected because it attempted to delete a resource that has attached subordinate entities. The error message describes these entities.</p>
 */
export interface DeleteConflictException
  extends __ServiceException__<_DeleteConflictExceptionDetails> {
  name: "DeleteConflictException";
}

export interface _DeleteConflictExceptionDetails {
  /**
   * _deleteConflictMessage shape
   */
  message?: string;
}
