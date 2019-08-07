import { _EventsBatch, _UnmarshalledEventsBatch } from "./_EventsBatch";

/**
 * A set of events to process.
 */
export interface _EventsRequest {
  /**
   * A batch of events to process. Each BatchItem consists of an endpoint ID as the key, and an EventsBatch object as the value.
   */
  BatchItem?:
    | { [key: string]: _EventsBatch }
    | Iterable<[string, _EventsBatch]>;
}

export interface _UnmarshalledEventsRequest extends _EventsRequest {
  /**
   * A batch of events to process. Each BatchItem consists of an endpoint ID as the key, and an EventsBatch object as the value.
   */
  BatchItem?: { [key: string]: _UnmarshalledEventsBatch };
}
