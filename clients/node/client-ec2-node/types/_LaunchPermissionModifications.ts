import {
  _LaunchPermission,
  _UnmarshalledLaunchPermission
} from "./_LaunchPermission";

/**
 * <p>Describes a launch permission modification.</p>
 */
export interface _LaunchPermissionModifications {
  /**
   * <p>The AWS account ID to add to the list of launch permissions for the AMI.</p>
   */
  Add?: Array<_LaunchPermission> | Iterable<_LaunchPermission>;

  /**
   * <p>The AWS account ID to remove from the list of launch permissions for the AMI.</p>
   */
  Remove?: Array<_LaunchPermission> | Iterable<_LaunchPermission>;
}

export interface _UnmarshalledLaunchPermissionModifications
  extends _LaunchPermissionModifications {
  /**
   * <p>The AWS account ID to add to the list of launch permissions for the AMI.</p>
   */
  Add?: Array<_UnmarshalledLaunchPermission>;

  /**
   * <p>The AWS account ID to remove from the list of launch permissions for the AMI.</p>
   */
  Remove?: Array<_UnmarshalledLaunchPermission>;
}
