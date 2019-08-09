/**
 * <p>Describes a launch template.</p>
 */
export interface _FleetLaunchTemplateSpecification {
  /**
   * <p>The ID of the launch template. You must specify either a template ID or a template name.</p>
   */
  LaunchTemplateId?: string;

  /**
   * <p>The name of the launch template. You must specify either a template name or a template ID.</p>
   */
  LaunchTemplateName?: string;

  /**
   * <p>The version number of the launch template. You must specify a version number.</p>
   */
  Version?: string;
}

export type _UnmarshalledFleetLaunchTemplateSpecification = _FleetLaunchTemplateSpecification;
