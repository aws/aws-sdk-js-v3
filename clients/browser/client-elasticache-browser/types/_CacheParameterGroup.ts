/**
 * <p>Represents the output of a <code>CreateCacheParameterGroup</code> operation.</p>
 */
export interface _CacheParameterGroup {
  /**
   * <p>The name of the cache parameter group.</p>
   */
  CacheParameterGroupName?: string;

  /**
   * <p>The name of the cache parameter group family that this cache parameter group is compatible with.</p> <p>Valid values are: <code>memcached1.4</code> | <code>memcached1.5</code> | <code>redis2.6</code> | <code>redis2.8</code> | <code>redis3.2</code> | <code>redis4.0</code> | <code>redis5.0</code> | </p>
   */
  CacheParameterGroupFamily?: string;

  /**
   * <p>The description for this cache parameter group.</p>
   */
  Description?: string;
}

export type _UnmarshalledCacheParameterGroup = _CacheParameterGroup;
