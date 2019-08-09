/**
 * <p>Describes a volume status event.</p>
 */
export interface _VolumeStatusEvent {
  /**
   * <p>A description of the event.</p>
   */
  Description?: string;

  /**
   * <p>The ID of this event.</p>
   */
  EventId?: string;

  /**
   * <p>The type of this event.</p>
   */
  EventType?: string;

  /**
   * <p>The latest end time of the event.</p>
   */
  NotAfter?: Date | string | number;

  /**
   * <p>The earliest start time of the event.</p>
   */
  NotBefore?: Date | string | number;
}

export interface _UnmarshalledVolumeStatusEvent extends _VolumeStatusEvent {
  /**
   * <p>The latest end time of the event.</p>
   */
  NotAfter?: Date;

  /**
   * <p>The earliest start time of the event.</p>
   */
  NotBefore?: Date;
}
