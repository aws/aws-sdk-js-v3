/**
 * <p>The identifier of a node in a cluster.</p>
 */
export interface _ClusterNode {
  /**
   * <p>Whether the node is a leader node or a compute node.</p>
   */
  NodeRole?: string;

  /**
   * <p>The private IP address of a node within a cluster.</p>
   */
  PrivateIPAddress?: string;

  /**
   * <p>The public IP address of a node within a cluster.</p>
   */
  PublicIPAddress?: string;
}

export type _UnmarshalledClusterNode = _ClusterNode;
