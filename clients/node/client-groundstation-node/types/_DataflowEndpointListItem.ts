/**
 * <p>Item in a list of <code>DataflowEndpoint</code> groups.</p>
 */
export interface _DataflowEndpointListItem {
  /**
   * <p>ARN of a dataflow endpoint group.</p>
   */
  dataflowEndpointGroupArn?: string;

  /**
   * <p>UUID of a dataflow endpoint group.</p>
   */
  dataflowEndpointGroupId?: string;
}

export type _UnmarshalledDataflowEndpointListItem = _DataflowEndpointListItem;
