/**
 * <p>The reason that the cluster changed to its current state.</p>
 */
export interface _ClusterStateChangeReason {
  /**
   * <p>The programmatic code for the state change reason.</p>
   */
  Code?:
    | "INTERNAL_ERROR"
    | "VALIDATION_ERROR"
    | "INSTANCE_FAILURE"
    | "INSTANCE_FLEET_TIMEOUT"
    | "BOOTSTRAP_FAILURE"
    | "USER_REQUEST"
    | "STEP_FAILURE"
    | "ALL_STEPS_COMPLETED"
    | string;

  /**
   * <p>The descriptive message for the state change reason.</p>
   */
  Message?: string;
}

export type _UnmarshalledClusterStateChangeReason = _ClusterStateChangeReason;
