import { ServiceException as __ServiceException__ } from "@aws-sdk/types";

/**
 * <p>The specified conflict resolution list is not valid.</p>
 */
export interface InvalidConflictResolutionException
  extends __ServiceException__<_InvalidConflictResolutionExceptionDetails> {
  name: "InvalidConflictResolutionException";
}

export interface _InvalidConflictResolutionExceptionDetails {}
