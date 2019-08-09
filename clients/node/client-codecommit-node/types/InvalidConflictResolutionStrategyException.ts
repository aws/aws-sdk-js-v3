import { ServiceException as __ServiceException__ } from "@aws-sdk/types";

/**
 * <p>The specified conflict resolution strategy is not valid.</p>
 */
export interface InvalidConflictResolutionStrategyException
  extends __ServiceException__<
    _InvalidConflictResolutionStrategyExceptionDetails
  > {
  name: "InvalidConflictResolutionStrategyException";
}

export interface _InvalidConflictResolutionStrategyExceptionDetails {}
