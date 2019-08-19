/**
 * <p>A value that applies only to a certain cache node type.</p>
 */
export interface _CacheNodeTypeSpecificValue {
  /**
   * <p>The cache node type for which this value applies.</p>
   */
  CacheNodeType?: string;

  /**
   * <p>The value for the cache node type.</p>
   */
  Value?: string;
}

export type _UnmarshalledCacheNodeTypeSpecificValue = _CacheNodeTypeSpecificValue;
