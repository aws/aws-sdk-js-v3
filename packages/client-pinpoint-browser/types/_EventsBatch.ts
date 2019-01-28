import {_PublicEndpoint, _UnmarshalledPublicEndpoint} from './_PublicEndpoint';
import {_Event, _UnmarshalledEvent} from './_Event';

/**
 * A batch of PublicEndpoints and Events to process.
 */
export interface _EventsBatch {
    /**
     * The PublicEndpoint attached to the EndpointId from the request.
     */
    Endpoint?: _PublicEndpoint;

    /**
     * An object that contains a set of events associated with the endpoint.
     */
    Events?: {[key: string]: _Event}|Iterable<[string, _Event]>;
}

export interface _UnmarshalledEventsBatch extends _EventsBatch {
    /**
     * The PublicEndpoint attached to the EndpointId from the request.
     */
    Endpoint?: _UnmarshalledPublicEndpoint;

    /**
     * An object that contains a set of events associated with the endpoint.
     */
    Events?: {[key: string]: _UnmarshalledEvent};
}