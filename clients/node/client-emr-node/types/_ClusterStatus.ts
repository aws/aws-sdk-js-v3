import {
  _ClusterStateChangeReason,
  _UnmarshalledClusterStateChangeReason
} from "./_ClusterStateChangeReason";
import {
  _ClusterTimeline,
  _UnmarshalledClusterTimeline
} from "./_ClusterTimeline";

/**
 * <p>The detailed status of the cluster.</p>
 */
export interface _ClusterStatus {
  /**
   * <p>The current state of the cluster.</p>
   */
  State?:
    | "STARTING"
    | "BOOTSTRAPPING"
    | "RUNNING"
    | "WAITING"
    | "TERMINATING"
    | "TERMINATED"
    | "TERMINATED_WITH_ERRORS"
    | string;

  /**
   * <p>The reason for the cluster status change.</p>
   */
  StateChangeReason?: _ClusterStateChangeReason;

  /**
   * <p>A timeline that represents the status of a cluster over the lifetime of the cluster.</p>
   */
  Timeline?: _ClusterTimeline;
}

export interface _UnmarshalledClusterStatus extends _ClusterStatus {
  /**
   * <p>The reason for the cluster status change.</p>
   */
  StateChangeReason?: _UnmarshalledClusterStateChangeReason;

  /**
   * <p>A timeline that represents the status of a cluster over the lifetime of the cluster.</p>
   */
  Timeline?: _UnmarshalledClusterTimeline;
}
