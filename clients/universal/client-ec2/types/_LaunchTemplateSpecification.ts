/**
 * <p>The launch template to use. You must specify either the launch template ID or launch template name in the request, but not both.</p>
 */
export interface _LaunchTemplateSpecification {
  /**
   * <p>The ID of the launch template.</p>
   */
  LaunchTemplateId?: string;

  /**
   * <p>The name of the launch template.</p>
   */
  LaunchTemplateName?: string;

  /**
   * <p>The version number of the launch template.</p> <p>Default: The default version for the launch template.</p>
   */
  Version?: string;
}

export type _UnmarshalledLaunchTemplateSpecification = _LaunchTemplateSpecification;
