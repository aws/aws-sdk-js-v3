import {
  _FleetLaunchTemplateSpecificationRequest,
  _UnmarshalledFleetLaunchTemplateSpecificationRequest
} from "./_FleetLaunchTemplateSpecificationRequest";
import {
  _FleetLaunchTemplateOverridesRequest,
  _UnmarshalledFleetLaunchTemplateOverridesRequest
} from "./_FleetLaunchTemplateOverridesRequest";

/**
 * <p>Describes a launch template and overrides.</p>
 */
export interface _FleetLaunchTemplateConfigRequest {
  /**
   * <p>The launch template to use. You must specify either the launch template ID or launch template name in the request. </p>
   */
  LaunchTemplateSpecification?: _FleetLaunchTemplateSpecificationRequest;

  /**
   * <p>Any parameters that you specify override the same parameters in the launch template.</p>
   */
  Overrides?:
    | Array<_FleetLaunchTemplateOverridesRequest>
    | Iterable<_FleetLaunchTemplateOverridesRequest>;
}

export interface _UnmarshalledFleetLaunchTemplateConfigRequest
  extends _FleetLaunchTemplateConfigRequest {
  /**
   * <p>The launch template to use. You must specify either the launch template ID or launch template name in the request. </p>
   */
  LaunchTemplateSpecification?: _UnmarshalledFleetLaunchTemplateSpecificationRequest;

  /**
   * <p>Any parameters that you specify override the same parameters in the launch template.</p>
   */
  Overrides?: Array<_UnmarshalledFleetLaunchTemplateOverridesRequest>;
}
