import {
  _AvailableCapacity,
  _UnmarshalledAvailableCapacity
} from "./_AvailableCapacity";
import {
  _HostProperties,
  _UnmarshalledHostProperties
} from "./_HostProperties";
import { _HostInstance, _UnmarshalledHostInstance } from "./_HostInstance";
import { _Tag, _UnmarshalledTag } from "./_Tag";

/**
 * <p>Describes the properties of the Dedicated Host.</p>
 */
export interface _Host {
  /**
   * <p>Whether auto-placement is on or off.</p>
   */
  AutoPlacement?: "on" | "off" | string;

  /**
   * <p>The Availability Zone of the Dedicated Host.</p>
   */
  AvailabilityZone?: string;

  /**
   * <p>The number of new instances that can be launched onto the Dedicated Host.</p>
   */
  AvailableCapacity?: _AvailableCapacity;

  /**
   * <p>Unique, case-sensitive identifier that you provide to ensure the idempotency of the request. For more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/APIReference/Run_Instance_Idempotency.html">How to Ensure Idempotency</a>.</p>
   */
  ClientToken?: string;

  /**
   * <p>The ID of the Dedicated Host.</p>
   */
  HostId?: string;

  /**
   * <p>The hardware specifications of the Dedicated Host.</p>
   */
  HostProperties?: _HostProperties;

  /**
   * <p>The reservation ID of the Dedicated Host. This returns a <code>null</code> response if the Dedicated Host doesn't have an associated reservation.</p>
   */
  HostReservationId?: string;

  /**
   * <p>The IDs and instance type that are currently running on the Dedicated Host.</p>
   */
  Instances?: Array<_HostInstance> | Iterable<_HostInstance>;

  /**
   * <p>The Dedicated Host's state.</p>
   */
  State?:
    | "available"
    | "under-assessment"
    | "permanent-failure"
    | "released"
    | "released-permanent-failure"
    | "pending"
    | string;

  /**
   * <p>The time that the Dedicated Host was allocated.</p>
   */
  AllocationTime?: Date | string | number;

  /**
   * <p>The time that the Dedicated Host was released.</p>
   */
  ReleaseTime?: Date | string | number;

  /**
   * <p>Any tags assigned to the Dedicated Host.</p>
   */
  Tags?: Array<_Tag> | Iterable<_Tag>;

  /**
   * <p>Indicates whether host recovery is enabled or disabled for the Dedicated Host.</p>
   */
  HostRecovery?: "on" | "off" | string;
}

export interface _UnmarshalledHost extends _Host {
  /**
   * <p>The number of new instances that can be launched onto the Dedicated Host.</p>
   */
  AvailableCapacity?: _UnmarshalledAvailableCapacity;

  /**
   * <p>The hardware specifications of the Dedicated Host.</p>
   */
  HostProperties?: _UnmarshalledHostProperties;

  /**
   * <p>The IDs and instance type that are currently running on the Dedicated Host.</p>
   */
  Instances?: Array<_UnmarshalledHostInstance>;

  /**
   * <p>The time that the Dedicated Host was allocated.</p>
   */
  AllocationTime?: Date;

  /**
   * <p>The time that the Dedicated Host was released.</p>
   */
  ReleaseTime?: Date;

  /**
   * <p>Any tags assigned to the Dedicated Host.</p>
   */
  Tags?: Array<_UnmarshalledTag>;
}
