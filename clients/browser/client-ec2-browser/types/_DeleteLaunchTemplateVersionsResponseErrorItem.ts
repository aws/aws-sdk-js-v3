import { _ResponseError, _UnmarshalledResponseError } from "./_ResponseError";

/**
 * <p>Describes a launch template version that could not be deleted.</p>
 */
export interface _DeleteLaunchTemplateVersionsResponseErrorItem {
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

  /**
   * <p>Information about the error.</p>
   */
  ResponseError?: _ResponseError;
}

export interface _UnmarshalledDeleteLaunchTemplateVersionsResponseErrorItem
  extends _DeleteLaunchTemplateVersionsResponseErrorItem {
  /**
   * <p>Information about the error.</p>
   */
  ResponseError?: _UnmarshalledResponseError;
}
