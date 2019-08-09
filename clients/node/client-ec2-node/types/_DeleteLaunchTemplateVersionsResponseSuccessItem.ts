/**
 * <p>Describes a launch template version that was successfully deleted.</p>
 */
export interface _DeleteLaunchTemplateVersionsResponseSuccessItem {
  /**
   * <p>The ID of the launch template.</p>
   */
  LaunchTemplateId?: string;

  /**
   * <p>The name of the launch template.</p>
   */
  LaunchTemplateName?: string;

  /**
   * <p>The version number of the launch template.</p>
   */
  VersionNumber?: number;
}

export type _UnmarshalledDeleteLaunchTemplateVersionsResponseSuccessItem = _DeleteLaunchTemplateVersionsResponseSuccessItem;
