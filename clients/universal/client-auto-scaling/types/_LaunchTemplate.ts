import {
  _LaunchTemplateSpecification,
  _UnmarshalledLaunchTemplateSpecification
} from "./_LaunchTemplateSpecification";
import {
  _LaunchTemplateOverrides,
  _UnmarshalledLaunchTemplateOverrides
} from "./_LaunchTemplateOverrides";

/**
 * <p>Describes a launch template and overrides. </p> <p>The overrides are used to override the instance type specified by the launch template with multiple instance types that can be used to launch On-Demand Instances and Spot Instances. </p>
 */
export interface _LaunchTemplate {
  /**
   * <p>The launch template to use. You must specify either the launch template ID or launch template name in the request. </p>
   */
  LaunchTemplateSpecification?: _LaunchTemplateSpecification;

  /**
   * <p>Any parameters that you specify override the same parameters in the launch template. Currently, the only supported override is instance type. You must specify between 2 and 20 overrides.</p>
   */
  Overrides?:
    | Array<_LaunchTemplateOverrides>
    | Iterable<_LaunchTemplateOverrides>;
}

export interface _UnmarshalledLaunchTemplate extends _LaunchTemplate {
  /**
   * <p>The launch template to use. You must specify either the launch template ID or launch template name in the request. </p>
   */
  LaunchTemplateSpecification?: _UnmarshalledLaunchTemplateSpecification;

  /**
   * <p>Any parameters that you specify override the same parameters in the launch template. Currently, the only supported override is instance type. You must specify between 2 and 20 overrides.</p>
   */
  Overrides?: Array<_UnmarshalledLaunchTemplateOverrides>;
}
