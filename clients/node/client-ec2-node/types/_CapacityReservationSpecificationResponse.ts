import {
  _CapacityReservationTargetResponse,
  _UnmarshalledCapacityReservationTargetResponse
} from "./_CapacityReservationTargetResponse";

/**
 * <p>Describes the instance's Capacity Reservation targeting preferences. The action returns the <code>capacityReservationPreference</code> response element if the instance is configured to run in On-Demand capacity, or if it is configured in run in any <code>open</code> Capacity Reservation that has matching attributes (instance type, platform, Availability Zone). The action returns the <code>capacityReservationTarget</code> response element if the instance explicily targets a specific Capacity Reservation.</p>
 */
export interface _CapacityReservationSpecificationResponse {
  /**
   * <p>Describes the instance's Capacity Reservation preferences. Possible preferences include:</p> <ul> <li> <p> <code>open</code> - The instance can run in any <code>open</code> Capacity Reservation that has matching attributes (instance type, platform, Availability Zone).</p> </li> <li> <p> <code>none</code> - The instance avoids running in a Capacity Reservation even if one is available. The instance runs in On-Demand capacity.</p> </li> </ul>
   */
  CapacityReservationPreference?: "open" | "none" | string;

  /**
   * <p>Information about the targeted Capacity Reservation.</p>
   */
  CapacityReservationTarget?: _CapacityReservationTargetResponse;
}

export interface _UnmarshalledCapacityReservationSpecificationResponse
  extends _CapacityReservationSpecificationResponse {
  /**
   * <p>Information about the targeted Capacity Reservation.</p>
   */
  CapacityReservationTarget?: _UnmarshalledCapacityReservationTargetResponse;
}
