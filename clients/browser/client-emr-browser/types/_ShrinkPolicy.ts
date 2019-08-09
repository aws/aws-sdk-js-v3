import {
  _InstanceResizePolicy,
  _UnmarshalledInstanceResizePolicy
} from "./_InstanceResizePolicy";

/**
 * <p>Policy for customizing shrink operations. Allows configuration of decommissioning timeout and targeted instance shrinking.</p>
 */
export interface _ShrinkPolicy {
  /**
   * <p>The desired timeout for decommissioning an instance. Overrides the default YARN decommissioning timeout.</p>
   */
  DecommissionTimeout?: number;

  /**
   * <p>Custom policy for requesting termination protection or termination of specific instances when shrinking an instance group.</p>
   */
  InstanceResizePolicy?: _InstanceResizePolicy;
}

export interface _UnmarshalledShrinkPolicy extends _ShrinkPolicy {
  /**
   * <p>Custom policy for requesting termination protection or termination of specific instances when shrinking an instance group.</p>
   */
  InstanceResizePolicy?: _UnmarshalledInstanceResizePolicy;
}
