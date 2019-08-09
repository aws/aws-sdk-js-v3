import { ServiceException as __ServiceException__ } from "@aws-sdk/types";

/**
 * <p>You cannot delete a cluster that has active tasks.</p>
 */
export interface ClusterContainsTasksException
  extends __ServiceException__<_ClusterContainsTasksExceptionDetails> {
  name: "ClusterContainsTasksException";
}

export interface _ClusterContainsTasksExceptionDetails {}
