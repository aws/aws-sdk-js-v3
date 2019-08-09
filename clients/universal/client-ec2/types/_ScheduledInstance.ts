import {
  _ScheduledInstanceRecurrence,
  _UnmarshalledScheduledInstanceRecurrence
} from "./_ScheduledInstanceRecurrence";

/**
 * <p>Describes a Scheduled Instance.</p>
 */
export interface _ScheduledInstance {
  /**
   * <p>The Availability Zone.</p>
   */
  AvailabilityZone?: string;

  /**
   * <p>The date when the Scheduled Instance was purchased.</p>
   */
  CreateDate?: Date | string | number;

  /**
   * <p>The hourly price for a single instance.</p>
   */
  HourlyPrice?: string;

  /**
   * <p>The number of instances.</p>
   */
  InstanceCount?: number;

  /**
   * <p>The instance type.</p>
   */
  InstanceType?: string;

  /**
   * <p>The network platform (<code>EC2-Classic</code> or <code>EC2-VPC</code>).</p>
   */
  NetworkPlatform?: string;

  /**
   * <p>The time for the next schedule to start.</p>
   */
  NextSlotStartTime?: Date | string | number;

  /**
   * <p>The platform (<code>Linux/UNIX</code> or <code>Windows</code>).</p>
   */
  Platform?: string;

  /**
   * <p>The time that the previous schedule ended or will end.</p>
   */
  PreviousSlotEndTime?: Date | string | number;

  /**
   * <p>The schedule recurrence.</p>
   */
  Recurrence?: _ScheduledInstanceRecurrence;

  /**
   * <p>The Scheduled Instance ID.</p>
   */
  ScheduledInstanceId?: string;

  /**
   * <p>The number of hours in the schedule.</p>
   */
  SlotDurationInHours?: number;

  /**
   * <p>The end date for the Scheduled Instance.</p>
   */
  TermEndDate?: Date | string | number;

  /**
   * <p>The start date for the Scheduled Instance.</p>
   */
  TermStartDate?: Date | string | number;

  /**
   * <p>The total number of hours for a single instance for the entire term.</p>
   */
  TotalScheduledInstanceHours?: number;
}

export interface _UnmarshalledScheduledInstance extends _ScheduledInstance {
  /**
   * <p>The date when the Scheduled Instance was purchased.</p>
   */
  CreateDate?: Date;

  /**
   * <p>The time for the next schedule to start.</p>
   */
  NextSlotStartTime?: Date;

  /**
   * <p>The time that the previous schedule ended or will end.</p>
   */
  PreviousSlotEndTime?: Date;

  /**
   * <p>The schedule recurrence.</p>
   */
  Recurrence?: _UnmarshalledScheduledInstanceRecurrence;

  /**
   * <p>The end date for the Scheduled Instance.</p>
   */
  TermEndDate?: Date;

  /**
   * <p>The start date for the Scheduled Instance.</p>
   */
  TermStartDate?: Date;
}
