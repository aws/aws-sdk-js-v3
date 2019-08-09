/**
 * <p>Provides all of the details about a particular cache engine version.</p>
 */
export interface _CacheEngineVersion {
  /**
   * <p>The name of the cache engine.</p>
   */
  Engine?: string;

  /**
   * <p>The version number of the cache engine.</p>
   */
  EngineVersion?: string;

  /**
   * <p>The name of the cache parameter group family associated with this cache engine.</p> <p>Valid values are: <code>memcached1.4</code> | <code>memcached1.5</code> | <code>redis2.6</code> | <code>redis2.8</code> | <code>redis3.2</code> | <code>redis4.0</code> | <code>redis5.0</code> | </p>
   */
  CacheParameterGroupFamily?: string;

  /**
   * <p>The description of the cache engine.</p>
   */
  CacheEngineDescription?: string;

  /**
   * <p>The description of the cache engine version.</p>
   */
  CacheEngineVersionDescription?: string;
}

export type _UnmarshalledCacheEngineVersion = _CacheEngineVersion;
