/**
 * <p> InstanceCountLimits represents the limits on number of instances that be created in Amazon Elasticsearch for given InstanceType. </p>
 */
export interface _InstanceCountLimits {
  /**
   * <p> Minimum number of Instances that can be instantiated for given InstanceType. </p>
   */
  MinimumInstanceCount?: number;

  /**
   * <p> Maximum number of Instances that can be instantiated for given InstanceType. </p>
   */
  MaximumInstanceCount?: number;
}

export type _UnmarshalledInstanceCountLimits = _InstanceCountLimits;
