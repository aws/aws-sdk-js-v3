import {
  _CacheNodeTypeSpecificValue,
  _UnmarshalledCacheNodeTypeSpecificValue
} from "./_CacheNodeTypeSpecificValue";

/**
 * <p>A parameter that has a different value for each cache node type it is applied to. For example, in a Redis cluster, a <code>cache.m1.large</code> cache node type would have a larger <code>maxmemory</code> value than a <code>cache.m1.small</code> type.</p>
 */
export interface _CacheNodeTypeSpecificParameter {
  /**
   * <p>The name of the parameter.</p>
   */
  ParameterName?: string;

  /**
   * <p>A description of the parameter.</p>
   */
  Description?: string;

  /**
   * <p>The source of the parameter value.</p>
   */
  Source?: string;

  /**
   * <p>The valid data type for the parameter.</p>
   */
  DataType?: string;

  /**
   * <p>The valid range of values for the parameter.</p>
   */
  AllowedValues?: string;

  /**
   * <p>Indicates whether (<code>true</code>) or not (<code>false</code>) the parameter can be modified. Some parameters have security or operational implications that prevent them from being changed.</p>
   */
  IsModifiable?: boolean;

  /**
   * <p>The earliest cache engine version to which the parameter can apply.</p>
   */
  MinimumEngineVersion?: string;

  /**
   * <p>A list of cache node types and their corresponding values for this parameter.</p>
   */
  CacheNodeTypeSpecificValues?:
    | Array<_CacheNodeTypeSpecificValue>
    | Iterable<_CacheNodeTypeSpecificValue>;

  /**
   * <p>Indicates whether a change to the parameter is applied immediately or requires a reboot for the change to be applied. You can force a reboot or wait until the next maintenance window's reboot. For more information, see <a href="https://docs.aws.amazon.com/AmazonElastiCache/latest/red-ug/Clusters.Rebooting.html">Rebooting a Cluster</a>.</p>
   */
  ChangeType?: "immediate" | "requires-reboot" | string;
}

export interface _UnmarshalledCacheNodeTypeSpecificParameter
  extends _CacheNodeTypeSpecificParameter {
  /**
   * <p>A list of cache node types and their corresponding values for this parameter.</p>
   */
  CacheNodeTypeSpecificValues?: Array<_UnmarshalledCacheNodeTypeSpecificValue>;
}
