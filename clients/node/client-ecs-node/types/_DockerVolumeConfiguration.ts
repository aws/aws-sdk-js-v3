/**
 * <p>This parameter is specified when you are using Docker volumes. Docker volumes are only supported when you are using the EC2 launch type. Windows containers only support the use of the <code>local</code> driver. To use bind mounts, specify a <code>host</code> instead.</p>
 */
export interface _DockerVolumeConfiguration {
  /**
   * <p>The scope for the Docker volume that determines its lifecycle. Docker volumes that are scoped to a <code>task</code> are automatically provisioned when the task starts and destroyed when the task stops. Docker volumes that are scoped as <code>shared</code> persist after the task stops.</p>
   */
  scope?: "task" | "shared" | string;

  /**
   * <p>If this value is <code>true</code>, the Docker volume is created if it does not already exist.</p> <note> <p>This field is only used if the <code>scope</code> is <code>shared</code>.</p> </note>
   */
  autoprovision?: boolean;

  /**
   * <p>The Docker volume driver to use. The driver value must match the driver name provided by Docker because it is used for task placement. If the driver was installed using the Docker plugin CLI, use <code>docker plugin ls</code> to retrieve the driver name from your container instance. If the driver was installed using another method, use Docker plugin discovery to retrieve the driver name. For more information, see <a href="https://docs.docker.com/engine/extend/plugin_api/#plugin-discovery">Docker plugin discovery</a>. This parameter maps to <code>Driver</code> in the <a href="https://docs.docker.com/engine/api/v1.35/#operation/VolumeCreate">Create a volume</a> section of the <a href="https://docs.docker.com/engine/api/v1.35/">Docker Remote API</a> and the <code>xxdriver</code> option to <a href="https://docs.docker.com/engine/reference/commandline/volume_create/">docker volume create</a>.</p>
   */
  driver?: string;

  /**
   * <p>A map of Docker driver-specific options passed through. This parameter maps to <code>DriverOpts</code> in the <a href="https://docs.docker.com/engine/api/v1.35/#operation/VolumeCreate">Create a volume</a> section of the <a href="https://docs.docker.com/engine/api/v1.35/">Docker Remote API</a> and the <code>xxopt</code> option to <a href="https://docs.docker.com/engine/reference/commandline/volume_create/">docker volume create</a>.</p>
   */
  driverOpts?: { [key: string]: string } | Iterable<[string, string]>;

  /**
   * <p>Custom metadata to add to your Docker volume. This parameter maps to <code>Labels</code> in the <a href="https://docs.docker.com/engine/api/v1.35/#operation/VolumeCreate">Create a volume</a> section of the <a href="https://docs.docker.com/engine/api/v1.35/">Docker Remote API</a> and the <code>xxlabel</code> option to <a href="https://docs.docker.com/engine/reference/commandline/volume_create/">docker volume create</a>.</p>
   */
  labels?: { [key: string]: string } | Iterable<[string, string]>;
}

export interface _UnmarshalledDockerVolumeConfiguration
  extends _DockerVolumeConfiguration {
  /**
   * <p>A map of Docker driver-specific options passed through. This parameter maps to <code>DriverOpts</code> in the <a href="https://docs.docker.com/engine/api/v1.35/#operation/VolumeCreate">Create a volume</a> section of the <a href="https://docs.docker.com/engine/api/v1.35/">Docker Remote API</a> and the <code>xxopt</code> option to <a href="https://docs.docker.com/engine/reference/commandline/volume_create/">docker volume create</a>.</p>
   */
  driverOpts?: { [key: string]: string };

  /**
   * <p>Custom metadata to add to your Docker volume. This parameter maps to <code>Labels</code> in the <a href="https://docs.docker.com/engine/api/v1.35/#operation/VolumeCreate">Create a volume</a> section of the <a href="https://docs.docker.com/engine/api/v1.35/">Docker Remote API</a> and the <code>xxlabel</code> option to <a href="https://docs.docker.com/engine/reference/commandline/volume_create/">docker volume create</a>.</p>
   */
  labels?: { [key: string]: string };
}
