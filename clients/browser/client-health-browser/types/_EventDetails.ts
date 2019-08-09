import { _Event, _UnmarshalledEvent } from "./_Event";
import {
  _EventDescription,
  _UnmarshalledEventDescription
} from "./_EventDescription";

/**
 * <p>Detailed information about an event. A combination of an <a>Event</a> object, an <a>EventDescription</a> object, and additional metadata about the event. Returned by the <a>DescribeEventDetails</a> operation.</p>
 */
export interface _EventDetails {
  /**
   * <p>Summary information about the event.</p>
   */
  event?: _Event;

  /**
   * <p>The most recent description of the event.</p>
   */
  eventDescription?: _EventDescription;

  /**
   * <p>Additional metadata about the event.</p>
   */
  eventMetadata?: { [key: string]: string } | Iterable<[string, string]>;
}

export interface _UnmarshalledEventDetails extends _EventDetails {
  /**
   * <p>Summary information about the event.</p>
   */
  event?: _UnmarshalledEvent;

  /**
   * <p>The most recent description of the event.</p>
   */
  eventDescription?: _UnmarshalledEventDescription;

  /**
   * <p>Additional metadata about the event.</p>
   */
  eventMetadata?: { [key: string]: string };
}
