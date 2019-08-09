import {
  _CapacityReservationTargetResponse,
  _UnmarshalledCapacityReservationTargetResponse
} from "./_CapacityReservationTargetResponse";

/**
 * <p>Information about the Capacity Reservation targeting option.</p>
 */
export interface _LaunchTemplateCapacityReservationSpecificationResponse {
  /**
   * <p>Indicates the instance's Capacity Reservation preferences. Possible preferences include:</p> <ul> <li> <p> <code>open</code> - The instance can run in any <code>open</code> Capacity Reservation that has matching attributes (instance type, platform, Availability Zone).</p> </li> <li> <p> <code>none</code> - The instance avoids running in a Capacity Reservation even if one is available. The instance runs in On-Demand capacity.</p> </li> </ul>
   */
  CapacityReservationPreference?: "open" | "none" | string;

  /**
   * <p>Information about the target Capacity Reservation.</p>
   */
  CapacityReservationTarget?: _CapacityReservationTargetResponse;
}

export interface _UnmarshalledLaunchTemplateCapacityReservationSpecificationResponse
  extends _LaunchTemplateCapacityReservationSpecificationResponse {
  /**
   * <p>Information about the target Capacity Reservation.</p>
   */
  CapacityReservationTarget?: _UnmarshalledCapacityReservationTargetResponse;
}
