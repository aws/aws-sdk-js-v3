import {
  _NodeGroupConfiguration,
  _UnmarshalledNodeGroupConfiguration
} from "./_NodeGroupConfiguration";

/**
 * <p>Represents an individual cache node in a snapshot of a cluster.</p>
 */
export interface _NodeSnapshot {
  /**
   * <p>A unique identifier for the source cluster.</p>
   */
  CacheClusterId?: string;

  /**
   * <p>A unique identifier for the source node group (shard).</p>
   */
  NodeGroupId?: string;

  /**
   * <p>The cache node identifier for the node in the source cluster.</p>
   */
  CacheNodeId?: string;

  /**
   * <p>The configuration for the source node group (shard).</p>
   */
  NodeGroupConfiguration?: _NodeGroupConfiguration;

  /**
   * <p>The size of the cache on the source cache node.</p>
   */
  CacheSize?: string;

  /**
   * <p>The date and time when the cache node was created in the source cluster.</p>
   */
  CacheNodeCreateTime?: Date | string | number;

  /**
   * <p>The date and time when the source node's metadata and cache data set was obtained for the snapshot.</p>
   */
  SnapshotCreateTime?: Date | string | number;
}

export interface _UnmarshalledNodeSnapshot extends _NodeSnapshot {
  /**
   * <p>The configuration for the source node group (shard).</p>
   */
  NodeGroupConfiguration?: _UnmarshalledNodeGroupConfiguration;

  /**
   * <p>The date and time when the cache node was created in the source cluster.</p>
   */
  CacheNodeCreateTime?: Date;

  /**
   * <p>The date and time when the source node's metadata and cache data set was obtained for the snapshot.</p>
   */
  SnapshotCreateTime?: Date;
}
