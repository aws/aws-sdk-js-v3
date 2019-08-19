import {
  _CreateVolumePermission,
  _UnmarshalledCreateVolumePermission
} from "./_CreateVolumePermission";

/**
 * <p>Describes modifications to the list of create volume permissions for a volume.</p>
 */
export interface _CreateVolumePermissionModifications {
  /**
   * <p>Adds the specified AWS account ID or group to the list.</p>
   */
  Add?: Array<_CreateVolumePermission> | Iterable<_CreateVolumePermission>;

  /**
   * <p>Removes the specified AWS account ID or group from the list.</p>
   */
  Remove?: Array<_CreateVolumePermission> | Iterable<_CreateVolumePermission>;
}

export interface _UnmarshalledCreateVolumePermissionModifications
  extends _CreateVolumePermissionModifications {
  /**
   * <p>Adds the specified AWS account ID or group to the list.</p>
   */
  Add?: Array<_UnmarshalledCreateVolumePermission>;

  /**
   * <p>Removes the specified AWS account ID or group from the list.</p>
   */
  Remove?: Array<_UnmarshalledCreateVolumePermission>;
}
