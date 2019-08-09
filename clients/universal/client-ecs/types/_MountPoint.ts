/**
 * <p>Details on a volume mount point that is used in a container definition.</p>
 */
export interface _MountPoint {
  /**
   * <p>The name of the volume to mount. Must be a volume name referenced in the <code>name</code> parameter of task definition <code>volume</code>.</p>
   */
  sourceVolume?: string;

  /**
   * <p>The path on the container to mount the host volume at.</p>
   */
  containerPath?: string;

  /**
   * <p>If this value is <code>true</code>, the container has read-only access to the volume. If this value is <code>false</code>, then the container can write to the volume. The default value is <code>false</code>.</p>
   */
  readOnly?: boolean;
}

export type _UnmarshalledMountPoint = _MountPoint;
