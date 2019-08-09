/**
 * <p>An object representing a launch template associated with a compute resource. You must specify either the launch template ID or launch template name in the request, but not both. </p>
 */
export interface _LaunchTemplateSpecification {
  /**
   * <p>The ID of the launch template.</p>
   */
  launchTemplateId?: string;

  /**
   * <p>The name of the launch template.</p>
   */
  launchTemplateName?: string;

  /**
   * <p>The version number of the launch template.</p> <p>Default: The default version of the launch template.</p>
   */
  version?: string;
}

export type _UnmarshalledLaunchTemplateSpecification = _LaunchTemplateSpecification;
