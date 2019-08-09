import {
  _EventInformation,
  _UnmarshalledEventInformation
} from "./_EventInformation";

/**
 * <p>Describes an event in the history of the Spot Fleet request.</p>
 */
export interface _HistoryRecord {
  /**
   * <p>Information about the event.</p>
   */
  EventInformation?: _EventInformation;

  /**
   * <p>The event type.</p> <ul> <li> <p> <code>error</code> - An error with the Spot Fleet request.</p> </li> <li> <p> <code>fleetRequestChange</code> - A change in the status or configuration of the Spot Fleet request.</p> </li> <li> <p> <code>instanceChange</code> - An instance was launched or terminated.</p> </li> <li> <p> <code>Information</code> - An informational event.</p> </li> </ul>
   */
  EventType?:
    | "instanceChange"
    | "fleetRequestChange"
    | "error"
    | "information"
    | string;

  /**
   * <p>The date and time of the event, in UTC format (for example, <i>YYYY</i>-<i>MM</i>-<i>DD</i>T<i>HH</i>:<i>MM</i>:<i>SS</i>Z).</p>
   */
  Timestamp?: Date | string | number;
}

export interface _UnmarshalledHistoryRecord extends _HistoryRecord {
  /**
   * <p>Information about the event.</p>
   */
  EventInformation?: _UnmarshalledEventInformation;

  /**
   * <p>The date and time of the event, in UTC format (for example, <i>YYYY</i>-<i>MM</i>-<i>DD</i>T<i>HH</i>:<i>MM</i>:<i>SS</i>Z).</p>
   */
  Timestamp?: Date;
}
