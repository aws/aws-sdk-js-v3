import {
  _EventInformation,
  _UnmarshalledEventInformation
} from "./_EventInformation";

/**
 * <p>Describes an event in the history of an EC2 Fleet.</p>
 */
export interface _HistoryRecordEntry {
  /**
   * <p>Information about the event.</p>
   */
  EventInformation?: _EventInformation;

  /**
   * <p>The event type.</p>
   */
  EventType?: "instance-change" | "fleet-change" | "service-error" | string;

  /**
   * <p>The date and time of the event, in UTC format (for example, <i>YYYY</i>-<i>MM</i>-<i>DD</i>T<i>HH</i>:<i>MM</i>:<i>SS</i>Z).</p>
   */
  Timestamp?: Date | string | number;
}

export interface _UnmarshalledHistoryRecordEntry extends _HistoryRecordEntry {
  /**
   * <p>Information about the event.</p>
   */
  EventInformation?: _UnmarshalledEventInformation;

  /**
   * <p>The date and time of the event, in UTC format (for example, <i>YYYY</i>-<i>MM</i>-<i>DD</i>T<i>HH</i>:<i>MM</i>:<i>SS</i>Z).</p>
   */
  Timestamp?: Date;
}
