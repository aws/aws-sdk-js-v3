/**
 * <p>Status of the cache parameter group.</p>
 */
export interface _CacheParameterGroupStatus {
  /**
   * <p>The name of the cache parameter group.</p>
   */
  CacheParameterGroupName?: string;

  /**
   * <p>The status of parameter updates.</p>
   */
  ParameterApplyStatus?: string;

  /**
   * <p>A list of the cache node IDs which need to be rebooted for parameter changes to be applied. A node ID is a numeric identifier (0001, 0002, etc.).</p>
   */
  CacheNodeIdsToReboot?: Array<string> | Iterable<string>;
}

export interface _UnmarshalledCacheParameterGroupStatus
  extends _CacheParameterGroupStatus {
  /**
   * <p>A list of the cache node IDs which need to be rebooted for parameter changes to be applied. A node ID is a numeric identifier (0001, 0002, etc.).</p>
   */
  CacheNodeIdsToReboot?: Array<string>;
}
