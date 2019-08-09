import {
  _FleetLaunchTemplateSpecification,
  _UnmarshalledFleetLaunchTemplateSpecification
} from "./_FleetLaunchTemplateSpecification";
import {
  _FleetLaunchTemplateOverrides,
  _UnmarshalledFleetLaunchTemplateOverrides
} from "./_FleetLaunchTemplateOverrides";

/**
 * <p>Describes a launch template and overrides.</p>
 */
export interface _FleetLaunchTemplateConfig {
  /**
   * <p>The launch template.</p>
   */
  LaunchTemplateSpecification?: _FleetLaunchTemplateSpecification;

  /**
   * <p>Any parameters that you specify override the same parameters in the launch template.</p>
   */
  Overrides?:
    | Array<_FleetLaunchTemplateOverrides>
    | Iterable<_FleetLaunchTemplateOverrides>;
}

export interface _UnmarshalledFleetLaunchTemplateConfig
  extends _FleetLaunchTemplateConfig {
  /**
   * <p>The launch template.</p>
   */
  LaunchTemplateSpecification?: _UnmarshalledFleetLaunchTemplateSpecification;

  /**
   * <p>Any parameters that you specify override the same parameters in the launch template.</p>
   */
  Overrides?: Array<_UnmarshalledFleetLaunchTemplateOverrides>;
}
