import {
  _ResponseLaunchTemplateData,
  _UnmarshalledResponseLaunchTemplateData
} from "./_ResponseLaunchTemplateData";

/**
 * <p>Describes a launch template version.</p>
 */
export interface _LaunchTemplateVersion {
  /**
   * <p>The ID of the launch template.</p>
   */
  LaunchTemplateId?: string;

  /**
   * <p>The name of the launch template.</p>
   */
  LaunchTemplateName?: string;

  /**
   * <p>The version number.</p>
   */
  VersionNumber?: number;

  /**
   * <p>The description for the version.</p>
   */
  VersionDescription?: string;

  /**
   * <p>The time the version was created.</p>
   */
  CreateTime?: Date | string | number;

  /**
   * <p>The principal that created the version.</p>
   */
  CreatedBy?: string;

  /**
   * <p>Indicates whether the version is the default version.</p>
   */
  DefaultVersion?: boolean;

  /**
   * <p>Information about the launch template.</p>
   */
  LaunchTemplateData?: _ResponseLaunchTemplateData;
}

export interface _UnmarshalledLaunchTemplateVersion
  extends _LaunchTemplateVersion {
  /**
   * <p>The time the version was created.</p>
   */
  CreateTime?: Date;

  /**
   * <p>Information about the launch template.</p>
   */
  LaunchTemplateData?: _UnmarshalledResponseLaunchTemplateData;
}
