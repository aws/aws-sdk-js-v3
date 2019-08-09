/**
 * <p>Describes a launch permission.</p>
 */
export interface _LaunchPermission {
  /**
   * <p>The name of the group.</p>
   */
  Group?: "all" | string;

  /**
   * <p>The AWS account ID.</p>
   */
  UserId?: string;
}

export type _UnmarshalledLaunchPermission = _LaunchPermission;
