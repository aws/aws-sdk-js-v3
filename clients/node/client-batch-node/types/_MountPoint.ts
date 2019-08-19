/**
 * <p>Details on a Docker volume mount point that is used in a job's container properties. This parameter maps to <code>Volumes</code> in the <a href="https://docs.docker.com/engine/reference/api/docker_remote_api_v1.19/#create-a-container">Create a container</a> section of the Docker Remote API and the <code>--volume</code> option to docker run.</p>
 */
export interface _MountPoint {
  /**
   * <p>The path on the container at which to mount the host volume.</p>
   */
  containerPath?: string;

  /**
   * <p>If this value is <code>true</code>, the container has read-only access to the volume; otherwise, the container can write to the volume. The default value is <code>false</code>.</p>
   */
  readOnly?: boolean;

  /**
   * <p>The name of the volume to mount.</p>
   */
  sourceVolume?: string;
}

export type _UnmarshalledMountPoint = _MountPoint;
