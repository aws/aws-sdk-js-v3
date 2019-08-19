import {
  _AutoScalingPolicyStateChangeReason,
  _UnmarshalledAutoScalingPolicyStateChangeReason
} from "./_AutoScalingPolicyStateChangeReason";

/**
 * <p>The status of an automatic scaling policy. </p>
 */
export interface _AutoScalingPolicyStatus {
  /**
   * <p>Indicates the status of the automatic scaling policy.</p>
   */
  State?:
    | "PENDING"
    | "ATTACHING"
    | "ATTACHED"
    | "DETACHING"
    | "DETACHED"
    | "FAILED"
    | string;

  /**
   * <p>The reason for a change in status.</p>
   */
  StateChangeReason?: _AutoScalingPolicyStateChangeReason;
}

export interface _UnmarshalledAutoScalingPolicyStatus
  extends _AutoScalingPolicyStatus {
  /**
   * <p>The reason for a change in status.</p>
   */
  StateChangeReason?: _UnmarshalledAutoScalingPolicyStateChangeReason;
}
