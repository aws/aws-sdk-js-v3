import {
  _EndpointBatchItem,
  _UnmarshalledEndpointBatchItem
} from "./_EndpointBatchItem";

/**
 * <p>Specifies a batch of endpoints to create or update and the settings and attributes to set or change for each endpoint.</p>
 */
export interface _EndpointBatchRequest {
  /**
   * <p>An array that defines the endpoints to create or update and, for each endpoint, the property values to set or change. An array can contain a maximum of 100 items.</p>
   */
  Item: Array<_EndpointBatchItem> | Iterable<_EndpointBatchItem>;
}

export interface _UnmarshalledEndpointBatchRequest
  extends _EndpointBatchRequest {
  /**
   * <p>An array that defines the endpoints to create or update and, for each endpoint, the property values to set or change. An array can contain a maximum of 100 items.</p>
   */
  Item: Array<_UnmarshalledEndpointBatchItem>;
}
