/**
 * <p>The details of the status change reason for the instance.</p>
 */
export interface _InstanceStateChangeReason {
  /**
   * <p>The programmable code for the state change reason.</p>
   */
  Code?:
    | "INTERNAL_ERROR"
    | "VALIDATION_ERROR"
    | "INSTANCE_FAILURE"
    | "BOOTSTRAP_FAILURE"
    | "CLUSTER_TERMINATED"
    | string;

  /**
   * <p>The status change reason description.</p>
   */
  Message?: string;
}

export type _UnmarshalledInstanceStateChangeReason = _InstanceStateChangeReason;
