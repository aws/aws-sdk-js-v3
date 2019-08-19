/**
 * <p>Provides the status code and message that result from processing an event.</p>
 */
export interface _EventItemResponse {
  /**
   * <p>A custom message that's returned in the response as a result of processing the event.</p>
   */
  Message?: string;

  /**
   * <p>The status code that's returned in the response as a result of processing the event. Possible values are: 202, for events that were accepted; and, 400, for events that weren't valid.</p>
   */
  StatusCode?: number;
}

export type _UnmarshalledEventItemResponse = _EventItemResponse;
