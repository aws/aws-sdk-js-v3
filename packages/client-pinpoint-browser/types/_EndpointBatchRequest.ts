import {
  _EndpointBatchItem,
  _UnmarshalledEndpointBatchItem
} from "./_EndpointBatchItem";

/**
 * Endpoint batch update request.
 */
export interface _EndpointBatchRequest {
  /**
   * List of items to update. Maximum 100 items
   */
  Item?: Array<_EndpointBatchItem> | Iterable<_EndpointBatchItem>;
}

export interface _UnmarshalledEndpointBatchRequest
  extends _EndpointBatchRequest {
  /**
   * List of items to update. Maximum 100 items
   */
  Item?: Array<_UnmarshalledEndpointBatchItem>;
}
