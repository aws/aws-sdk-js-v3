import { _Endpoint, _UnmarshalledEndpoint } from "./_Endpoint";

/**
 * <p>Represents an individual node within a DAX cluster.</p>
 */
export interface _Node {
  /**
   * <p>A system-generated identifier for the node.</p>
   */
  NodeId?: string;

  /**
   * <p>The endpoint for the node, consisting of a DNS name and a port number. Client applications can connect directly to a node endpoint, if desired (as an alternative to allowing DAX client software to intelligently route requests and responses to nodes in the DAX cluster.</p>
   */
  Endpoint?: _Endpoint;

  /**
   * <p>The date and time (in UNIX epoch format) when the node was launched.</p>
   */
  NodeCreateTime?: Date | string | number;

  /**
   * <p>The Availability Zone (AZ) in which the node has been deployed.</p>
   */
  AvailabilityZone?: string;

  /**
   * <p>The current status of the node. For example: <code>available</code>.</p>
   */
  NodeStatus?: string;

  /**
   * <p>The status of the parameter group associated with this node. For example, <code>in-sync</code>.</p>
   */
  ParameterGroupStatus?: string;
}

export interface _UnmarshalledNode extends _Node {
  /**
   * <p>The endpoint for the node, consisting of a DNS name and a port number. Client applications can connect directly to a node endpoint, if desired (as an alternative to allowing DAX client software to intelligently route requests and responses to nodes in the DAX cluster.</p>
   */
  Endpoint?: _UnmarshalledEndpoint;

  /**
   * <p>The date and time (in UNIX epoch format) when the node was launched.</p>
   */
  NodeCreateTime?: Date;
}
