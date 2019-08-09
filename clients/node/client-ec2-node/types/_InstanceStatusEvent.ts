/**
 * <p>Describes a scheduled event for an instance.</p>
 */
export interface _InstanceStatusEvent {
  /**
   * <p>The ID of the event.</p>
   */
  InstanceEventId?: string;

  /**
   * <p>The event code.</p>
   */
  Code?:
    | "instance-reboot"
    | "system-reboot"
    | "system-maintenance"
    | "instance-retirement"
    | "instance-stop"
    | string;

  /**
   * <p>A description of the event.</p> <p>After a scheduled event is completed, it can still be described for up to a week. If the event has been completed, this description starts with the following text: [Completed].</p>
   */
  Description?: string;

  /**
   * <p>The latest scheduled end time for the event.</p>
   */
  NotAfter?: Date | string | number;

  /**
   * <p>The earliest scheduled start time for the event.</p>
   */
  NotBefore?: Date | string | number;

  /**
   * <p>The deadline for starting the event.</p>
   */
  NotBeforeDeadline?: Date | string | number;
}

export interface _UnmarshalledInstanceStatusEvent extends _InstanceStatusEvent {
  /**
   * <p>The latest scheduled end time for the event.</p>
   */
  NotAfter?: Date;

  /**
   * <p>The earliest scheduled start time for the event.</p>
   */
  NotBefore?: Date;

  /**
   * <p>The deadline for starting the event.</p>
   */
  NotBeforeDeadline?: Date;
}
