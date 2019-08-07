import { _Session, _UnmarshalledSession } from "./_Session";

/**
 * Model for creating or updating events.
 */
export interface _Event {
  /**
   * Custom attributes that are associated with the event you're adding or updating.
   */
  Attributes?: { [key: string]: string } | Iterable<[string, string]>;

  /**
   * The version of the SDK that's running on the client device.
   */
  ClientSdkVersion?: string;

  /**
   * The name of the custom event that you're recording.
   */
  EventType?: string;

  /**
   * Custom metrics related to the event.
   */
  Metrics?: { [key: string]: number } | Iterable<[string, number]>;

  /**
   * Information about the session in which the event occurred.
   */
  Session?: _Session;

  /**
   * The date and time when the event occurred, in ISO 8601 format.
   */
  Timestamp?: string;
}

export interface _UnmarshalledEvent extends _Event {
  /**
   * Custom attributes that are associated with the event you're adding or updating.
   */
  Attributes?: { [key: string]: string };

  /**
   * Custom metrics related to the event.
   */
  Metrics?: { [key: string]: number };

  /**
   * Information about the session in which the event occurred.
   */
  Session?: _UnmarshalledSession;
}
