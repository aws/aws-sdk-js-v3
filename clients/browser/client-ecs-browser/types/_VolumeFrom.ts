/**
 * <p>Details on a data volume from another container in the same task definition.</p>
 */
export interface _VolumeFrom {
  /**
   * <p>The name of another container within the same task definition from which to mount volumes.</p>
   */
  sourceContainer?: string;

  /**
   * <p>If this value is <code>true</code>, the container has read-only access to the volume. If this value is <code>false</code>, then the container can write to the volume. The default value is <code>false</code>.</p>
   */
  readOnly?: boolean;
}

export type _UnmarshalledVolumeFrom = _VolumeFrom;
