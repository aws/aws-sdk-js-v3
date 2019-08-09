import {
  _CapacityReservationTarget,
  _UnmarshalledCapacityReservationTarget
} from "./_CapacityReservationTarget";

/**
 * <p>Describes an instance's Capacity Reservation targeting option. You can specify only one option at a time. Use the <code>CapacityReservationPreference</code> parameter to configure the instance to run in On-Demand capacity or to run in any <code>open</code> Capacity Reservation that has matching attributes (instance type, platform, Availability Zone). Use the <code>CapacityReservationTarget</code> parameter to explicitly target a specific Capacity Reservation.</p>
 */
export interface _LaunchTemplateCapacityReservationSpecificationRequest {
  /**
   * <p>Indicates the instance's Capacity Reservation preferences. Possible preferences include:</p> <ul> <li> <p> <code>open</code> - The instance can run in any <code>open</code> Capacity Reservation that has matching attributes (instance type, platform, Availability Zone).</p> </li> <li> <p> <code>none</code> - The instance avoids running in a Capacity Reservation even if one is available. The instance runs in On-Demand capacity.</p> </li> </ul>
   */
  CapacityReservationPreference?: "open" | "none" | string;

  /**
   * <p>Information about the target Capacity Reservation.</p>
   */
  CapacityReservationTarget?: _CapacityReservationTarget;
}

export interface _UnmarshalledLaunchTemplateCapacityReservationSpecificationRequest
  extends _LaunchTemplateCapacityReservationSpecificationRequest {
  /**
   * <p>Information about the target Capacity Reservation.</p>
   */
  CapacityReservationTarget?: _UnmarshalledCapacityReservationTarget;
}
