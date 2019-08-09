/**
 * <p>A group of settings that are applied to the cluster in the future, or that are currently being applied.</p>
 */
export interface _PendingModifiedValues {
  /**
   * <p>The new number of cache nodes for the cluster.</p> <p>For clusters running Redis, this value must be 1. For clusters running Memcached, this value must be between 1 and 20.</p>
   */
  NumCacheNodes?: number;

  /**
   * <p>A list of cache node IDs that are being removed (or will be removed) from the cluster. A node ID is a 4-digit numeric identifier (0001, 0002, etc.).</p>
   */
  CacheNodeIdsToRemove?: Array<string> | Iterable<string>;

  /**
   * <p>The new cache engine version that the cluster runs.</p>
   */
  EngineVersion?: string;

  /**
   * <p>The cache node type that this cluster or replication group is scaled to.</p>
   */
  CacheNodeType?: string;
}

export interface _UnmarshalledPendingModifiedValues
  extends _PendingModifiedValues {
  /**
   * <p>A list of cache node IDs that are being removed (or will be removed) from the cluster. A node ID is a 4-digit numeric identifier (0001, 0002, etc.).</p>
   */
  CacheNodeIdsToRemove?: Array<string>;
}
