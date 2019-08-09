import {
  _FleetLaunchTemplateSpecification,
  _UnmarshalledFleetLaunchTemplateSpecification
} from "./_FleetLaunchTemplateSpecification";
import {
  _LaunchTemplateOverrides,
  _UnmarshalledLaunchTemplateOverrides
} from "./_LaunchTemplateOverrides";

/**
 * <p>Describes a launch template and overrides.</p>
 */
export interface _LaunchTemplateConfig {
  /**
   * <p>The launch template.</p>
   */
  LaunchTemplateSpecification?: _FleetLaunchTemplateSpecification;

  /**
   * <p>Any parameters that you specify override the same parameters in the launch template.</p>
   */
  Overrides?:
    | Array<_LaunchTemplateOverrides>
    | Iterable<_LaunchTemplateOverrides>;
}

export interface _UnmarshalledLaunchTemplateConfig
  extends _LaunchTemplateConfig {
  /**
   * <p>The launch template.</p>
   */
  LaunchTemplateSpecification?: _UnmarshalledFleetLaunchTemplateSpecification;

  /**
   * <p>Any parameters that you specify override the same parameters in the launch template.</p>
   */
  Overrides?: Array<_UnmarshalledLaunchTemplateOverrides>;
}
