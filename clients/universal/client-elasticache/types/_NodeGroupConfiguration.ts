/**
 * <p>Node group (shard) configuration options. Each node group (shard) configuration has the following: <code>Slots</code>, <code>PrimaryAvailabilityZone</code>, <code>ReplicaAvailabilityZones</code>, <code>ReplicaCount</code>.</p>
 */
export interface _NodeGroupConfiguration {
  /**
   * <p>Either the ElastiCache for Redis supplied 4-digit id or a user supplied id for the node group these configuration values apply to.</p>
   */
  NodeGroupId?: string;

  /**
   * <p>A string that specifies the keyspace for a particular node group. Keyspaces range from 0 to 16,383. The string is in the format <code>startkey-endkey</code>.</p> <p>Example: <code>"0-3999"</code> </p>
   */
  Slots?: string;

  /**
   * <p>The number of read replica nodes in this node group (shard).</p>
   */
  ReplicaCount?: number;

  /**
   * <p>The Availability Zone where the primary node of this node group (shard) is launched.</p>
   */
  PrimaryAvailabilityZone?: string;

  /**
   * <p>A list of Availability Zones to be used for the read replicas. The number of Availability Zones in this list must match the value of <code>ReplicaCount</code> or <code>ReplicasPerNodeGroup</code> if not specified.</p>
   */
  ReplicaAvailabilityZones?: Array<string> | Iterable<string>;
}

export interface _UnmarshalledNodeGroupConfiguration
  extends _NodeGroupConfiguration {
  /**
   * <p>A list of Availability Zones to be used for the read replicas. The number of Availability Zones in this list must match the value of <code>ReplicaCount</code> or <code>ReplicasPerNodeGroup</code> if not specified.</p>
   */
  ReplicaAvailabilityZones?: Array<string>;
}
