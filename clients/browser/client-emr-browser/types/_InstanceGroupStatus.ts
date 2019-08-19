import {
  _InstanceGroupStateChangeReason,
  _UnmarshalledInstanceGroupStateChangeReason
} from "./_InstanceGroupStateChangeReason";
import {
  _InstanceGroupTimeline,
  _UnmarshalledInstanceGroupTimeline
} from "./_InstanceGroupTimeline";

/**
 * <p>The details of the instance group status.</p>
 */
export interface _InstanceGroupStatus {
  /**
   * <p>The current state of the instance group.</p>
   */
  State?:
    | "PROVISIONING"
    | "BOOTSTRAPPING"
    | "RUNNING"
    | "RECONFIGURING"
    | "RESIZING"
    | "SUSPENDED"
    | "TERMINATING"
    | "TERMINATED"
    | "ARRESTED"
    | "SHUTTING_DOWN"
    | "ENDED"
    | string;

  /**
   * <p>The status change reason details for the instance group.</p>
   */
  StateChangeReason?: _InstanceGroupStateChangeReason;

  /**
   * <p>The timeline of the instance group status over time.</p>
   */
  Timeline?: _InstanceGroupTimeline;
}

export interface _UnmarshalledInstanceGroupStatus extends _InstanceGroupStatus {
  /**
   * <p>The status change reason details for the instance group.</p>
   */
  StateChangeReason?: _UnmarshalledInstanceGroupStateChangeReason;

  /**
   * <p>The timeline of the instance group status over time.</p>
   */
  Timeline?: _UnmarshalledInstanceGroupTimeline;
}
