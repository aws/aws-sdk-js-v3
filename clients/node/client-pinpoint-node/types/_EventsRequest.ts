import { _EventsBatch, _UnmarshalledEventsBatch } from "./_EventsBatch";

/**
 * <p>Specifies a batch of events to process.</p>
 */
export interface _EventsRequest {
  /**
   * <p>The batch of events to process. For each item in a batch, the endpoint ID acts as a key that has an EventsBatch object as its value.</p>
   */
  BatchItem: { [key: string]: _EventsBatch } | Iterable<[string, _EventsBatch]>;
}

export interface _UnmarshalledEventsRequest extends _EventsRequest {
  /**
   * <p>The batch of events to process. For each item in a batch, the endpoint ID acts as a key that has an EventsBatch object as its value.</p>
   */
  BatchItem: { [key: string]: _UnmarshalledEventsBatch };
}
