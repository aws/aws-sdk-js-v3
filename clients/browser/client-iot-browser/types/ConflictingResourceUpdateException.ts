import { ServiceException as __ServiceException__ } from "@aws-sdk/types";

/**
 * <p>A conflicting resource update exception. This exception is thrown when two pending updates cause a conflict.</p>
 */
export interface ConflictingResourceUpdateException
  extends __ServiceException__<_ConflictingResourceUpdateExceptionDetails> {
  name: "ConflictingResourceUpdateException";
}

export interface _ConflictingResourceUpdateExceptionDetails {
  /**
   * <p>The message for the exception.</p>
   */
  message?: string;
}
