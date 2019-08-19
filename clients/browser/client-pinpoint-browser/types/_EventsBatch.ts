import {
  _PublicEndpoint,
  _UnmarshalledPublicEndpoint
} from "./_PublicEndpoint";
import { _Event, _UnmarshalledEvent } from "./_Event";

/**
 * <p>Specifies a batch of endpoints and events to process.</p>
 */
export interface _EventsBatch {
  /**
   * <p>A set of properties and attributes that are associated with the endpoint.</p>
   */
  Endpoint: _PublicEndpoint;

  /**
   * <p>A set of properties that are associated with the event.</p>
   */
  Events: { [key: string]: _Event } | Iterable<[string, _Event]>;
}

export interface _UnmarshalledEventsBatch extends _EventsBatch {
  /**
   * <p>A set of properties and attributes that are associated with the endpoint.</p>
   */
  Endpoint: _UnmarshalledPublicEndpoint;

  /**
   * <p>A set of properties that are associated with the event.</p>
   */
  Events: { [key: string]: _UnmarshalledEvent };
}
