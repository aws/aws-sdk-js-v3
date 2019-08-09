import { ServiceException as __ServiceException__ } from "@aws-sdk/types";

/**
 * <p>The number of allowed conflict resolution entries was exceeded.</p>
 */
export interface MaximumConflictResolutionEntriesExceededException
  extends __ServiceException__<
    _MaximumConflictResolutionEntriesExceededExceptionDetails
  > {
  name: "MaximumConflictResolutionEntriesExceededException";
}

export interface _MaximumConflictResolutionEntriesExceededExceptionDetails {}
