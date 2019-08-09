/**
 * <p>Information about the Convertible Reserved Instance offering.</p>
 */
export interface _TargetConfiguration {
  /**
   * <p>The number of instances the Convertible Reserved Instance offering can be applied to. This parameter is reserved and cannot be specified in a request</p>
   */
  InstanceCount?: number;

  /**
   * <p>The ID of the Convertible Reserved Instance offering.</p>
   */
  OfferingId?: string;
}

export type _UnmarshalledTargetConfiguration = _TargetConfiguration;
