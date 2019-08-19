import {
  _ScheduledInstanceRecurrence,
  _UnmarshalledScheduledInstanceRecurrence
} from "./_ScheduledInstanceRecurrence";

/**
 * <p>Describes a schedule that is available for your Scheduled Instances.</p>
 */
export interface _ScheduledInstanceAvailability {
  /**
   * <p>The Availability Zone.</p>
   */
  AvailabilityZone?: string;

  /**
   * <p>The number of available instances.</p>
   */
  AvailableInstanceCount?: number;

  /**
   * <p>The time period for the first schedule to start.</p>
   */
  FirstSlotStartTime?: Date | string | number;

  /**
   * <p>The hourly price for a single instance.</p>
   */
  HourlyPrice?: string;

  /**
   * <p>The instance type. You can specify one of the C3, C4, M4, or R3 instance types.</p>
   */
  InstanceType?: string;

  /**
   * <p>The maximum term. The only possible value is 365 days.</p>
   */
  MaxTermDurationInDays?: number;

  /**
   * <p>The minimum term. The only possible value is 365 days.</p>
   */
  MinTermDurationInDays?: number;

  /**
   * <p>The network platform (<code>EC2-Classic</code> or <code>EC2-VPC</code>).</p>
   */
  NetworkPlatform?: string;

  /**
   * <p>The platform (<code>Linux/UNIX</code> or <code>Windows</code>).</p>
   */
  Platform?: string;

  /**
   * <p>The purchase token. This token expires in two hours.</p>
   */
  PurchaseToken?: string;

  /**
   * <p>The schedule recurrence.</p>
   */
  Recurrence?: _ScheduledInstanceRecurrence;

  /**
   * <p>The number of hours in the schedule.</p>
   */
  SlotDurationInHours?: number;

  /**
   * <p>The total number of hours for a single instance for the entire term.</p>
   */
  TotalScheduledInstanceHours?: number;
}

export interface _UnmarshalledScheduledInstanceAvailability
  extends _ScheduledInstanceAvailability {
  /**
   * <p>The time period for the first schedule to start.</p>
   */
  FirstSlotStartTime?: Date;

  /**
   * <p>The schedule recurrence.</p>
   */
  Recurrence?: _UnmarshalledScheduledInstanceRecurrence;
}
