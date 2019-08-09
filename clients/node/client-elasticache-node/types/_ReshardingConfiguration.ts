/**
 * <p>A list of <code>PreferredAvailabilityZones</code> objects that specifies the configuration of a node group in the resharded cluster.</p>
 */
export interface _ReshardingConfiguration {
  /**
   * <p>Either the ElastiCache for Redis supplied 4-digit id or a user supplied id for the node group these configuration values apply to.</p>
   */
  NodeGroupId?: string;

  /**
   * <p>A list of preferred availability zones for the nodes in this cluster.</p>
   */
  PreferredAvailabilityZones?: Array<string> | Iterable<string>;
}

export interface _UnmarshalledReshardingConfiguration
  extends _ReshardingConfiguration {
  /**
   * <p>A list of preferred availability zones for the nodes in this cluster.</p>
   */
  PreferredAvailabilityZones?: Array<string>;
}
