/**
 * <p>The status change reason details for the instance group.</p>
 */
export interface _InstanceGroupStateChangeReason {
  /**
   * <p>The programmable code for the state change reason.</p>
   */
  Code?:
    | "INTERNAL_ERROR"
    | "VALIDATION_ERROR"
    | "INSTANCE_FAILURE"
    | "CLUSTER_TERMINATED"
    | string;

  /**
   * <p>The status change reason description.</p>
   */
  Message?: string;
}

export type _UnmarshalledInstanceGroupStateChangeReason = _InstanceGroupStateChangeReason;
