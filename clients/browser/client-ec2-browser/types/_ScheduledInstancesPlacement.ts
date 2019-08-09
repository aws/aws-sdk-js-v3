/**
 * <p>Describes the placement for a Scheduled Instance.</p>
 */
export interface _ScheduledInstancesPlacement {
  /**
   * <p>The Availability Zone.</p>
   */
  AvailabilityZone?: string;

  /**
   * <p>The name of the placement group.</p>
   */
  GroupName?: string;
}

export type _UnmarshalledScheduledInstancesPlacement = _ScheduledInstancesPlacement;
