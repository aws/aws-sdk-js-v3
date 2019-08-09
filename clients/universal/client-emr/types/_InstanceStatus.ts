import {
  _InstanceStateChangeReason,
  _UnmarshalledInstanceStateChangeReason
} from "./_InstanceStateChangeReason";
import {
  _InstanceTimeline,
  _UnmarshalledInstanceTimeline
} from "./_InstanceTimeline";

/**
 * <p>The instance status details.</p>
 */
export interface _InstanceStatus {
  /**
   * <p>The current state of the instance.</p>
   */
  State?:
    | "AWAITING_FULFILLMENT"
    | "PROVISIONING"
    | "BOOTSTRAPPING"
    | "RUNNING"
    | "TERMINATED"
    | string;

  /**
   * <p>The details of the status change reason for the instance.</p>
   */
  StateChangeReason?: _InstanceStateChangeReason;

  /**
   * <p>The timeline of the instance status over time.</p>
   */
  Timeline?: _InstanceTimeline;
}

export interface _UnmarshalledInstanceStatus extends _InstanceStatus {
  /**
   * <p>The details of the status change reason for the instance.</p>
   */
  StateChangeReason?: _UnmarshalledInstanceStateChangeReason;

  /**
   * <p>The timeline of the instance status over time.</p>
   */
  Timeline?: _UnmarshalledInstanceTimeline;
}
