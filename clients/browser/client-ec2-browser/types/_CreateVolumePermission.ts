/**
 * <p>Describes the user or group to be added or removed from the list of create volume permissions for a volume.</p>
 */
export interface _CreateVolumePermission {
  /**
   * <p>The group to be added or removed. The possible value is <code>all</code>.</p>
   */
  Group?: "all" | string;

  /**
   * <p>The AWS account ID to be added or removed.</p>
   */
  UserId?: string;
}

export type _UnmarshalledCreateVolumePermission = _CreateVolumePermission;
