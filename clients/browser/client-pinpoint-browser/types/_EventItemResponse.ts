/**
 * A complex object that holds the status code and message as a result of processing an event.
 */
export interface _EventItemResponse {
  /**
   * A custom message that is associated with the processing of an event.
   */
  Message?: string;

  /**
   * The status returned in the response as a result of processing the event.
   *
   * Possible values: 400 (for invalid events) and 202 (for events that were accepted).
   */
  StatusCode?: number;
}

export type _UnmarshalledEventItemResponse = _EventItemResponse;
