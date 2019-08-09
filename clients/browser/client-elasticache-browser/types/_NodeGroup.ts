import { _Endpoint, _UnmarshalledEndpoint } from "./_Endpoint";
import {
  _NodeGroupMember,
  _UnmarshalledNodeGroupMember
} from "./_NodeGroupMember";

/**
 * <p>Represents a collection of cache nodes in a replication group. One node in the node group is the read/write primary node. All the other nodes are read-only Replica nodes.</p>
 */
export interface _NodeGroup {
  /**
   * <p>The identifier for the node group (shard). A Redis (cluster mode disabled) replication group contains only 1 node group; therefore, the node group ID is 0001. A Redis (cluster mode enabled) replication group contains 1 to 90 node groups numbered 0001 to 0090. Optionally, the user can provide the id for a node group. </p>
   */
  NodeGroupId?: string;

  /**
   * <p>The current state of this replication group - <code>creating</code>, <code>available</code>, etc.</p>
   */
  Status?: string;

  /**
   * <p>The endpoint of the primary node in this node group (shard).</p>
   */
  PrimaryEndpoint?: _Endpoint;

  /**
   * <p>The endpoint of the replica nodes in this node group (shard).</p>
   */
  ReaderEndpoint?: _Endpoint;

  /**
   * <p>The keyspace for this node group (shard).</p>
   */
  Slots?: string;

  /**
   * <p>A list containing information about individual nodes within the node group (shard).</p>
   */
  NodeGroupMembers?: Array<_NodeGroupMember> | Iterable<_NodeGroupMember>;
}

export interface _UnmarshalledNodeGroup extends _NodeGroup {
  /**
   * <p>The endpoint of the primary node in this node group (shard).</p>
   */
  PrimaryEndpoint?: _UnmarshalledEndpoint;

  /**
   * <p>The endpoint of the replica nodes in this node group (shard).</p>
   */
  ReaderEndpoint?: _UnmarshalledEndpoint;

  /**
   * <p>A list containing information about individual nodes within the node group (shard).</p>
   */
  NodeGroupMembers?: Array<_UnmarshalledNodeGroupMember>;
}
