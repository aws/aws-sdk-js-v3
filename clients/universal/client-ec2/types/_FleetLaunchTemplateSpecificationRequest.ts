/**
 * <p>The launch template to use. You must specify either the launch template ID or launch template name in the request. </p>
 */
export interface _FleetLaunchTemplateSpecificationRequest {
  /**
   * <p>The ID of the launch template.</p>
   */
  LaunchTemplateId?: string;

  /**
   * <p>The name of the launch template.</p>
   */
  LaunchTemplateName?: string;

  /**
   * <p>The version number of the launch template. Note: This is a required parameter and will be updated soon. </p>
   */
  Version?: string;
}

export type _UnmarshalledFleetLaunchTemplateSpecificationRequest = _FleetLaunchTemplateSpecificationRequest;
