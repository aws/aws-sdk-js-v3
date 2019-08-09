/**
 * <p>Details about the target configuration.</p>
 */
export interface _TargetConfigurationRequest {
  /**
   * <p>The number of instances the Covertible Reserved Instance offering can be applied to. This parameter is reserved and cannot be specified in a request</p>
   */
  InstanceCount?: number;

  /**
   * <p>The Convertible Reserved Instance offering ID.</p>
   */
  OfferingId: string;
}

export type _UnmarshalledTargetConfigurationRequest = _TargetConfigurationRequest;
