import { _Endpoint, _UnmarshalledEndpoint } from "./_Endpoint";

/**
 * <p>Represents a single node within a node group (shard).</p>
 */
export interface _NodeGroupMember {
  /**
   * <p>The ID of the cluster to which the node belongs.</p>
   */
  CacheClusterId?: string;

  /**
   * <p>The ID of the node within its cluster. A node ID is a numeric identifier (0001, 0002, etc.).</p>
   */
  CacheNodeId?: string;

  /**
   * <p>The information required for client programs to connect to a node for read operations. The read endpoint is only applicable on Redis (cluster mode disabled) clusters.</p>
   */
  ReadEndpoint?: _Endpoint;

  /**
   * <p>The name of the Availability Zone in which the node is located.</p>
   */
  PreferredAvailabilityZone?: string;

  /**
   * <p>The role that is currently assigned to the node - <code>primary</code> or <code>replica</code>. This member is only applicable for Redis (cluster mode disabled) replication groups.</p>
   */
  CurrentRole?: string;
}

export interface _UnmarshalledNodeGroupMember extends _NodeGroupMember {
  /**
   * <p>The information required for client programs to connect to a node for read operations. The read endpoint is only applicable on Redis (cluster mode disabled) clusters.</p>
   */
  ReadEndpoint?: _UnmarshalledEndpoint;
}
