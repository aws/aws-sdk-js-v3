import {
  _ReservedInstancesConfiguration,
  _UnmarshalledReservedInstancesConfiguration
} from "./_ReservedInstancesConfiguration";

/**
 * <p>Describes the modification request/s.</p>
 */
export interface _ReservedInstancesModificationResult {
  /**
   * <p>The ID for the Reserved Instances that were created as part of the modification request. This field is only available when the modification is fulfilled.</p>
   */
  ReservedInstancesId?: string;

  /**
   * <p>The target Reserved Instances configurations supplied as part of the modification request.</p>
   */
  TargetConfiguration?: _ReservedInstancesConfiguration;
}

export interface _UnmarshalledReservedInstancesModificationResult
  extends _ReservedInstancesModificationResult {
  /**
   * <p>The target Reserved Instances configurations supplied as part of the modification request.</p>
   */
  TargetConfiguration?: _UnmarshalledReservedInstancesConfiguration;
}
