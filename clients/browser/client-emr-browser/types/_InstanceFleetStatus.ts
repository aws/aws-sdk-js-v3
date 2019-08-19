import {
  _InstanceFleetStateChangeReason,
  _UnmarshalledInstanceFleetStateChangeReason
} from "./_InstanceFleetStateChangeReason";
import {
  _InstanceFleetTimeline,
  _UnmarshalledInstanceFleetTimeline
} from "./_InstanceFleetTimeline";

/**
 * <p>The status of the instance fleet.</p> <note> <p>The instance fleet configuration is available only in Amazon EMR versions 4.8.0 and later, excluding 5.0.x versions.</p> </note>
 */
export interface _InstanceFleetStatus {
  /**
   * <p>A code representing the instance fleet status.</p> <ul> <li> <p> <code>PROVISIONING</code>—The instance fleet is provisioning EC2 resources and is not yet ready to run jobs.</p> </li> <li> <p> <code>BOOTSTRAPPING</code>—EC2 instances and other resources have been provisioned and the bootstrap actions specified for the instances are underway.</p> </li> <li> <p> <code>RUNNING</code>—EC2 instances and other resources are running. They are either executing jobs or waiting to execute jobs.</p> </li> <li> <p> <code>RESIZING</code>—A resize operation is underway. EC2 instances are either being added or removed.</p> </li> <li> <p> <code>SUSPENDED</code>—A resize operation could not complete. Existing EC2 instances are running, but instances can't be added or removed.</p> </li> <li> <p> <code>TERMINATING</code>—The instance fleet is terminating EC2 instances.</p> </li> <li> <p> <code>TERMINATED</code>—The instance fleet is no longer active, and all EC2 instances have been terminated.</p> </li> </ul>
   */
  State?:
    | "PROVISIONING"
    | "BOOTSTRAPPING"
    | "RUNNING"
    | "RESIZING"
    | "SUSPENDED"
    | "TERMINATING"
    | "TERMINATED"
    | string;

  /**
   * <p>Provides status change reason details for the instance fleet.</p>
   */
  StateChangeReason?: _InstanceFleetStateChangeReason;

  /**
   * <p>Provides historical timestamps for the instance fleet, including the time of creation, the time it became ready to run jobs, and the time of termination.</p>
   */
  Timeline?: _InstanceFleetTimeline;
}

export interface _UnmarshalledInstanceFleetStatus extends _InstanceFleetStatus {
  /**
   * <p>Provides status change reason details for the instance fleet.</p>
   */
  StateChangeReason?: _UnmarshalledInstanceFleetStateChangeReason;

  /**
   * <p>Provides historical timestamps for the instance fleet, including the time of creation, the time it became ready to run jobs, and the time of termination.</p>
   */
  Timeline?: _UnmarshalledInstanceFleetTimeline;
}
