import { _ShrinkPolicy, _UnmarshalledShrinkPolicy } from "./_ShrinkPolicy";
import { _Configuration, _UnmarshalledConfiguration } from "./_Configuration";

/**
 * <p>Modify the size or configurations of an instance group.</p>
 */
export interface _InstanceGroupModifyConfig {
  /**
   * <p>Unique ID of the instance group to expand or shrink.</p>
   */
  InstanceGroupId: string;

  /**
   * <p>Target size for the instance group.</p>
   */
  InstanceCount?: number;

  /**
   * <p>The EC2 InstanceIds to terminate. After you terminate the instances, the instance group will not return to its original requested size.</p>
   */
  EC2InstanceIdsToTerminate?: Array<string> | Iterable<string>;

  /**
   * <p>Policy for customizing shrink operations.</p>
   */
  ShrinkPolicy?: _ShrinkPolicy;

  /**
   * <p>A list of new or modified configurations to apply for an instance group.</p>
   */
  Configurations?: Array<_Configuration> | Iterable<_Configuration>;
}

export interface _UnmarshalledInstanceGroupModifyConfig
  extends _InstanceGroupModifyConfig {
  /**
   * <p>The EC2 InstanceIds to terminate. After you terminate the instances, the instance group will not return to its original requested size.</p>
   */
  EC2InstanceIdsToTerminate?: Array<string>;

  /**
   * <p>Policy for customizing shrink operations.</p>
   */
  ShrinkPolicy?: _UnmarshalledShrinkPolicy;

  /**
   * <p>A list of new or modified configurations to apply for an instance group.</p>
   */
  Configurations?: Array<_UnmarshalledConfiguration>;
}
