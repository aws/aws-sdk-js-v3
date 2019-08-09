import { ServiceException as __ServiceException__ } from "@aws-sdk/types";

/**
 * <p>More than one conflict resolution entries exists for the conflict. A conflict can have only one conflict resolution entry.</p>
 */
export interface MultipleConflictResolutionEntriesException
  extends __ServiceException__<
    _MultipleConflictResolutionEntriesExceptionDetails
  > {
  name: "MultipleConflictResolutionEntriesException";
}

export interface _MultipleConflictResolutionEntriesExceptionDetails {}
