import {
  _InstanceCountLimits,
  _UnmarshalledInstanceCountLimits
} from "./_InstanceCountLimits";

/**
 * <p>InstanceLimits represents the list of instance related attributes that are available for given InstanceType. </p>
 */
export interface _InstanceLimits {
  /**
   * <p> InstanceCountLimits represents the limits on number of instances that be created in Amazon Elasticsearch for given InstanceType. </p>
   */
  InstanceCountLimits?: _InstanceCountLimits;
}

export interface _UnmarshalledInstanceLimits extends _InstanceLimits {
  /**
   * <p> InstanceCountLimits represents the limits on number of instances that be created in Amazon Elasticsearch for given InstanceType. </p>
   */
  InstanceCountLimits?: _UnmarshalledInstanceCountLimits;
}
