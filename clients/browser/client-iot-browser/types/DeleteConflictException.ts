import { ServiceException as __ServiceException__ } from "@aws-sdk/types";

/**
 * <p>You can't delete the resource because it is attached to one or more resources.</p>
 */
export interface DeleteConflictException
  extends __ServiceException__<_DeleteConflictExceptionDetails> {
  name: "DeleteConflictException";
}

export interface _DeleteConflictExceptionDetails {
  /**
   * <p>The message for the exception.</p>
   */
  message?: string;
}
