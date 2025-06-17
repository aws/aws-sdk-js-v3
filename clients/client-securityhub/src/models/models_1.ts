// smithy-typescript generated code
import {
  Actor,
  AssociatedStandard,
  AvailabilityZone,
  AwsEcsContainerDetails,
  AwsEcsTaskDefinitionContainerDefinitionsDependsOnDetails,
  AwsEcsTaskDefinitionContainerDefinitionsEnvironmentDetails,
  AwsEcsTaskDefinitionContainerDefinitionsEnvironmentFilesDetails,
  AwsEcsTaskDefinitionContainerDefinitionsExtraHostsDetails,
  AwsEcsTaskDefinitionContainerDefinitionsFirelensConfigurationDetails,
  RelatedFinding,
  SeverityLabel,
} from "./models_0";

/**
 * <p>The container health check command and associated configuration parameters for the container.</p>
 * @public
 */
export interface AwsEcsTaskDefinitionContainerDefinitionsHealthCheckDetails {
  /**
   * <p>The command that the container runs to determine whether it is healthy.</p>
   * @public
   */
  Command?: string[] | undefined;

  /**
   * <p>The time period in seconds between each health check execution. The default value is 30 seconds.</p>
   * @public
   */
  Interval?: number | undefined;

  /**
   * <p>The number of times to retry a failed health check before the container is considered unhealthy. The default value is 3.</p>
   * @public
   */
  Retries?: number | undefined;

  /**
   * <p>The optional grace period in seconds that allows containers time to bootstrap before failed health checks count towards the maximum number of retries.</p>
   * @public
   */
  StartPeriod?: number | undefined;

  /**
   * <p>The time period in seconds to wait for a health check to succeed before it is considered a failure. The default value is 5.</p>
   * @public
   */
  Timeout?: number | undefined;
}

/**
 * <p>The Linux capabilities for the container that are added to or dropped from the default configuration provided by Docker.</p>
 * @public
 */
export interface AwsEcsTaskDefinitionContainerDefinitionsLinuxParametersCapabilitiesDetails {
  /**
   * <p>The Linux capabilities for the container that are added to the default configuration provided by Docker. Valid values are as follows:</p>
   *          <p>Valid values: <code>"ALL"</code> | <code>"AUDIT_CONTROL"</code> |<code> "AUDIT_WRITE"</code> |
   *    		<code>"BLOCK_SUSPEND"</code> | <code>"CHOWN"</code> | <code>"DAC_OVERRIDE"</code> |
   *    		<code>"DAC_READ_SEARCH"</code> | <code>"FOWNER"</code> | <code>"FSETID"</code> |
   *    		<code>"IPC_LOCK"</code> | <code>"IPC_OWNER"</code> | <code>"KILL"</code> |
   *    		<code>"LEASE"</code> | <code>"LINUX_IMMUTABLE"</code> | <code>"MAC_ADMIN"</code> |<code>
   *    			"MAC_OVERRIDE"</code> | <code>"MKNOD"</code> | <code>"NET_ADMIN"</code> |
   *    		<code>"NET_BIND_SERVICE"</code> | <code>"NET_BROADCAST"</code> | <code>"NET_RAW"</code> |
   *    		<code>"SETFCAP"</code> | <code>"SETGID"</code> | <code>"SETPCAP"</code> |
   *    		<code>"SETUID"</code> | <code>"SYS_ADMIN"</code> | <code>"SYS_BOOT"</code> |
   *    		<code>"SYS_CHROOT"</code> | <code>"SYS_MODULE"</code> | <code>"SYS_NICE"</code> |
   *    		<code>"SYS_PACCT"</code> | <code>"SYS_PTRACE"</code> | <code>"SYS_RAWIO"</code> |
   *    		<code>"SYS_RESOURCE"</code> | <code>"SYS_TIME"</code> | <code>"SYS_TTY_CONFIG"</code> |
   *    		<code>"SYSLOG"</code> | <code>"WAKE_ALARM"</code>
   *          </p>
   * @public
   */
  Add?: string[] | undefined;

  /**
   * <p>The Linux capabilities for the container that are dropped from the default configuration provided by Docker.</p>
   *          <p>Valid values: <code>"ALL"</code> | <code>"AUDIT_CONTROL"</code> |<code> "AUDIT_WRITE"</code> |
   *    		<code>"BLOCK_SUSPEND"</code> | <code>"CHOWN"</code> | <code>"DAC_OVERRIDE"</code> |
   *    		<code>"DAC_READ_SEARCH"</code> | <code>"FOWNER"</code> | <code>"FSETID"</code> |
   *    		<code>"IPC_LOCK"</code> | <code>"IPC_OWNER"</code> | <code>"KILL"</code> |
   *    		<code>"LEASE"</code> | <code>"LINUX_IMMUTABLE"</code> | <code>"MAC_ADMIN"</code> |<code>
   *    			"MAC_OVERRIDE"</code> | <code>"MKNOD"</code> | <code>"NET_ADMIN"</code> |
   *    		<code>"NET_BIND_SERVICE"</code> | <code>"NET_BROADCAST"</code> | <code>"NET_RAW"</code> |
   *    		<code>"SETFCAP"</code> | <code>"SETGID"</code> | <code>"SETPCAP"</code> |
   *    		<code>"SETUID"</code> | <code>"SYS_ADMIN"</code> | <code>"SYS_BOOT"</code> |
   *    		<code>"SYS_CHROOT"</code> | <code>"SYS_MODULE"</code> | <code>"SYS_NICE"</code> |
   *    		<code>"SYS_PACCT"</code> | <code>"SYS_PTRACE"</code> | <code>"SYS_RAWIO"</code> |
   *    		<code>"SYS_RESOURCE"</code> | <code>"SYS_TIME"</code> | <code>"SYS_TTY_CONFIG"</code> |
   *    		<code>"SYSLOG"</code> | <code>"WAKE_ALARM"</code>
   *          </p>
   * @public
   */
  Drop?: string[] | undefined;
}

/**
 * <p>A host device to expose to the container.</p>
 * @public
 */
export interface AwsEcsTaskDefinitionContainerDefinitionsLinuxParametersDevicesDetails {
  /**
   * <p>The path inside the container at which to expose the host device.</p>
   * @public
   */
  ContainerPath?: string | undefined;

  /**
   * <p>The path for the device on the host container instance.</p>
   * @public
   */
  HostPath?: string | undefined;

  /**
   * <p>The explicit permissions to provide to the container for the device. By default, the container has permissions for read, write, and <code>mknod</code> for the device.</p>
   * @public
   */
  Permissions?: string[] | undefined;
}

/**
 * <p>The container path, mount options, and size (in MiB) of a tmpfs mount.</p>
 * @public
 */
export interface AwsEcsTaskDefinitionContainerDefinitionsLinuxParametersTmpfsDetails {
  /**
   * <p>The absolute file path where the tmpfs volume is to be mounted.</p>
   * @public
   */
  ContainerPath?: string | undefined;

  /**
   * <p>The list of tmpfs volume mount options.</p>
   *          <p>Valid values: <code>"defaults"</code> | <code>"ro"</code> | <code>"rw"</code> | <code>"suid"</code> |
   *    		<code>"nosuid"</code> | <code>"dev"</code> | <code>"nodev"</code> |<code> "exec"</code> |
   *    		<code>"noexec"</code> | <code>"sync"</code> | <code>"async"</code> | <code>"dirsync"</code>
   *    		| <code>"remount"</code> | <code>"mand"</code> | <code>"nomand"</code> | <code>"atime"</code>
   *    		| <code>"noatime"</code> | <code>"diratime"</code> | <code>"nodiratime"</code> |
   *    		<code>"bind"</code> | <code>"rbind"</code> | <code>"unbindable"</code> |
   *    		<code>"runbindable"</code> | <code>"private"</code> | <code>"rprivate"</code> |
   *    		<code>"shared"</code> | <code>"rshared"</code> | <code>"slave"</code> |
   *    		<code>"rslave"</code> | <code>"relatime"</code> | <code>"norelatime"</code> |
   *    		<code>"strictatime"</code> | <code>"nostrictatime"</code> |<code> "mode"</code> |
   *    		<code>"uid"</code> | <code>"gid"</code> | <code>"nr_inodes"</code> |<code>
   *    			"nr_blocks"</code> | <code>"mpol"</code>
   *          </p>
   * @public
   */
  MountOptions?: string[] | undefined;

  /**
   * <p>The maximum size (in MiB) of the tmpfs volume.</p>
   * @public
   */
  Size?: number | undefined;
}

/**
 * <p>>Linux-specific modifications that are applied to the container, such as Linux kernel capabilities.</p>
 * @public
 */
export interface AwsEcsTaskDefinitionContainerDefinitionsLinuxParametersDetails {
  /**
   * <p>The Linux capabilities for the container that are added to or dropped from the default configuration provided by Docker.</p>
   * @public
   */
  Capabilities?: AwsEcsTaskDefinitionContainerDefinitionsLinuxParametersCapabilitiesDetails | undefined;

  /**
   * <p>The host devices to expose to the container.</p>
   * @public
   */
  Devices?: AwsEcsTaskDefinitionContainerDefinitionsLinuxParametersDevicesDetails[] | undefined;

  /**
   * <p>Whether to run an <code>init</code> process inside the container that forwards signals and reaps processes. </p>
   * @public
   */
  InitProcessEnabled?: boolean | undefined;

  /**
   * <p>The total amount of swap memory (in MiB) that a container can use.</p>
   * @public
   */
  MaxSwap?: number | undefined;

  /**
   * <p>The value for the size (in MiB) of the <b>/dev/shm</b> volume.</p>
   * @public
   */
  SharedMemorySize?: number | undefined;

  /**
   * <p>Configures the container's memory swappiness behavior. Determines how aggressively pages are swapped. The higher the value, the more aggressive the swappiness. The default is 60.</p>
   * @public
   */
  Swappiness?: number | undefined;

  /**
   * <p>The container path, mount options, and size (in MiB) of the tmpfs mount.</p>
   * @public
   */
  Tmpfs?: AwsEcsTaskDefinitionContainerDefinitionsLinuxParametersTmpfsDetails[] | undefined;
}

/**
 * <p>A secret to pass to the log configuration.</p>
 * @public
 */
export interface AwsEcsTaskDefinitionContainerDefinitionsLogConfigurationSecretOptionsDetails {
  /**
   * <p>The name of the secret.</p>
   * @public
   */
  Name?: string | undefined;

  /**
   * <p>The secret to expose to the container.</p>
   *          <p>The value is either the full ARN of the Secrets Manager secret or the full ARN of the
   *          parameter in the Systems Manager Parameter Store.</p>
   * @public
   */
  ValueFrom?: string | undefined;
}

/**
 * <p>The log configuration specification for the container.</p>
 * @public
 */
export interface AwsEcsTaskDefinitionContainerDefinitionsLogConfigurationDetails {
  /**
   * <p>The log driver to use for the container.</p>
   *          <p>Valid values on Fargate are as follows:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>awsfirelens</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>awslogs</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>splunk</code>
   *                </p>
   *             </li>
   *          </ul>
   *          <p>Valid values on Amazon EC2 are as follows:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>awsfirelens</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>awslogs</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>fluentd</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>gelf</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>journald</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>json-file</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>logentries</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>splunk</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>syslog</code>
   *                </p>
   *             </li>
   *          </ul>
   * @public
   */
  LogDriver?: string | undefined;

  /**
   * <p>The configuration options to send to the log driver. Requires version 1.19 of the Docker Remote API or greater on your container instance.</p>
   * @public
   */
  Options?: Record<string, string> | undefined;

  /**
   * <p>The secrets to pass to the log configuration.</p>
   * @public
   */
  SecretOptions?: AwsEcsTaskDefinitionContainerDefinitionsLogConfigurationSecretOptionsDetails[] | undefined;
}

/**
 * <p>A mount point for the data volumes in the container.</p>
 * @public
 */
export interface AwsEcsTaskDefinitionContainerDefinitionsMountPointsDetails {
  /**
   * <p>The path on the container to mount the host volume at.</p>
   * @public
   */
  ContainerPath?: string | undefined;

  /**
   * <p>Whether the container has read-only access to the volume.</p>
   * @public
   */
  ReadOnly?: boolean | undefined;

  /**
   * <p>The name of the volume to mount. Must match the name of a volume listed in <code>VolumeDetails</code> for the task definition.</p>
   * @public
   */
  SourceVolume?: string | undefined;
}

/**
 * <p>A port mapping for the container.</p>
 * @public
 */
export interface AwsEcsTaskDefinitionContainerDefinitionsPortMappingsDetails {
  /**
   * <p>The port number on the container that is bound to the user-specified or automatically assigned host port.</p>
   * @public
   */
  ContainerPort?: number | undefined;

  /**
   * <p>The port number on the container instance to reserve for the container.</p>
   * @public
   */
  HostPort?: number | undefined;

  /**
   * <p>The protocol used for the port mapping. The default is <code>tcp</code>.</p>
   * @public
   */
  Protocol?: string | undefined;
}

/**
 * <p>The private repository authentication credentials to use.</p>
 * @public
 */
export interface AwsEcsTaskDefinitionContainerDefinitionsRepositoryCredentialsDetails {
  /**
   * <p>The ARN of the secret that contains the private repository credentials.</p>
   * @public
   */
  CredentialsParameter?: string | undefined;
}

/**
 * <p>A resource to assign to a container.</p>
 * @public
 */
export interface AwsEcsTaskDefinitionContainerDefinitionsResourceRequirementsDetails {
  /**
   * <p>The type of resource to assign to a container. Valid values are <code>GPU</code> or <code>InferenceAccelerator</code>.</p>
   * @public
   */
  Type?: string | undefined;

  /**
   * <p>The value for the specified resource type.</p>
   *          <p>For <code>GPU</code>, the value is the number of physical GPUs the Amazon ECS container agent
   *          reserves for the container.</p>
   *          <p>For <code>InferenceAccelerator</code>, the value should match the <code>DeviceName</code>
   *          attribute of an entry in <code>InferenceAccelerators</code>.</p>
   * @public
   */
  Value?: string | undefined;
}

/**
 * <p>A secret to pass to the container.</p>
 * @public
 */
export interface AwsEcsTaskDefinitionContainerDefinitionsSecretsDetails {
  /**
   * <p>The name of the secret.</p>
   * @public
   */
  Name?: string | undefined;

  /**
   * <p>The secret to expose to the container. The value is either the full ARN of the Secrets Manager
   *          secret or the full ARN of the parameter in the Systems Manager Parameter Store.</p>
   * @public
   */
  ValueFrom?: string | undefined;
}

/**
 * <p>A namespaced kernel parameter to set in the container.</p>
 * @public
 */
export interface AwsEcsTaskDefinitionContainerDefinitionsSystemControlsDetails {
  /**
   * <p>The namespaced kernel parameter for which to set a value.</p>
   * @public
   */
  Namespace?: string | undefined;

  /**
   * <p>The value of the parameter.</p>
   * @public
   */
  Value?: string | undefined;
}

/**
 * <p>A ulimit to set in the container.</p>
 * @public
 */
export interface AwsEcsTaskDefinitionContainerDefinitionsUlimitsDetails {
  /**
   * <p>The hard limit for the ulimit type.</p>
   * @public
   */
  HardLimit?: number | undefined;

  /**
   * <p>The type of the ulimit. Valid values are as follows:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>core</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>cpu</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>data</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>fsize</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>locks</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>memlock</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>msgqueue</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>nice</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>nofile</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>nproc</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>rss</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>rtprio</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>rttime</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>sigpending</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>stack</code>
   *                </p>
   *             </li>
   *          </ul>
   * @public
   */
  Name?: string | undefined;

  /**
   * <p>The soft limit for the ulimit type.</p>
   * @public
   */
  SoftLimit?: number | undefined;
}

/**
 * <p>A data volume to mount from another container.</p>
 * @public
 */
export interface AwsEcsTaskDefinitionContainerDefinitionsVolumesFromDetails {
  /**
   * <p>Whether the container has read-only access to the volume.</p>
   * @public
   */
  ReadOnly?: boolean | undefined;

  /**
   * <p>The name of another container within the same task definition from which to mount volumes.</p>
   * @public
   */
  SourceContainer?: string | undefined;
}

/**
 * <p>A container definition that describes a container in the task.</p>
 * @public
 */
export interface AwsEcsTaskDefinitionContainerDefinitionsDetails {
  /**
   * <p>The command that is passed to the container.</p>
   * @public
   */
  Command?: string[] | undefined;

  /**
   * <p>The number of CPU units reserved for the container.</p>
   * @public
   */
  Cpu?: number | undefined;

  /**
   * <p>The dependencies that are defined for container startup and shutdown.</p>
   * @public
   */
  DependsOn?: AwsEcsTaskDefinitionContainerDefinitionsDependsOnDetails[] | undefined;

  /**
   * <p>Whether to disable networking within the container.</p>
   * @public
   */
  DisableNetworking?: boolean | undefined;

  /**
   * <p>A list of DNS search domains that are presented to the container.</p>
   * @public
   */
  DnsSearchDomains?: string[] | undefined;

  /**
   * <p>A list of DNS servers that are presented to the container.</p>
   * @public
   */
  DnsServers?: string[] | undefined;

  /**
   * <p>A key-value map of labels to add to the container.</p>
   * @public
   */
  DockerLabels?: Record<string, string> | undefined;

  /**
   * <p>A list of strings to provide custom labels for SELinux and AppArmor multi-level security systems.</p>
   * @public
   */
  DockerSecurityOptions?: string[] | undefined;

  /**
   * <p>The entry point that is passed to the container.</p>
   * @public
   */
  EntryPoint?: string[] | undefined;

  /**
   * <p>The environment variables to pass to a container.</p>
   * @public
   */
  Environment?: AwsEcsTaskDefinitionContainerDefinitionsEnvironmentDetails[] | undefined;

  /**
   * <p>A list of files containing the environment variables to pass to a container.</p>
   * @public
   */
  EnvironmentFiles?: AwsEcsTaskDefinitionContainerDefinitionsEnvironmentFilesDetails[] | undefined;

  /**
   * <p>Whether the container is essential. All tasks must have at least one essential container.</p>
   * @public
   */
  Essential?: boolean | undefined;

  /**
   * <p>A list of hostnames and IP address mappings to append to the <b>/etc/hosts</b> file on the container.</p>
   * @public
   */
  ExtraHosts?: AwsEcsTaskDefinitionContainerDefinitionsExtraHostsDetails[] | undefined;

  /**
   * <p>The FireLens configuration for the container. Specifies and configures a log router for container logs.</p>
   * @public
   */
  FirelensConfiguration?: AwsEcsTaskDefinitionContainerDefinitionsFirelensConfigurationDetails | undefined;

  /**
   * <p>The container health check command and associated configuration parameters for the container.</p>
   * @public
   */
  HealthCheck?: AwsEcsTaskDefinitionContainerDefinitionsHealthCheckDetails | undefined;

  /**
   * <p>The hostname to use for the container.</p>
   * @public
   */
  Hostname?: string | undefined;

  /**
   * <p>The image used to start the container.</p>
   * @public
   */
  Image?: string | undefined;

  /**
   * <p>If set to true, then containerized applications can be deployed that require <code>stdin</code> or a <code>tty</code> to be allocated.</p>
   * @public
   */
  Interactive?: boolean | undefined;

  /**
   * <p>A list of links for the container in the form <code>
   *                <i>container_name</i>:<i>alias</i>
   *             </code>. Allows containers to communicate with each other without the need for port mappings.</p>
   * @public
   */
  Links?: string[] | undefined;

  /**
   * <p>Linux-specific modifications that are applied to the container, such as Linux kernel capabilities.</p>
   * @public
   */
  LinuxParameters?: AwsEcsTaskDefinitionContainerDefinitionsLinuxParametersDetails | undefined;

  /**
   * <p>The log configuration specification for the container.</p>
   * @public
   */
  LogConfiguration?: AwsEcsTaskDefinitionContainerDefinitionsLogConfigurationDetails | undefined;

  /**
   * <p>The amount (in MiB) of memory to present to the container. If the container attempts to exceed the memory specified here, the container is shut down. The total amount of memory reserved for all containers within a task must be lower than the task memory value, if one is specified.</p>
   * @public
   */
  Memory?: number | undefined;

  /**
   * <p>The soft limit (in MiB) of memory to reserve for the container.</p>
   * @public
   */
  MemoryReservation?: number | undefined;

  /**
   * <p>The mount points for the data volumes in the container.</p>
   * @public
   */
  MountPoints?: AwsEcsTaskDefinitionContainerDefinitionsMountPointsDetails[] | undefined;

  /**
   * <p>The name of the container.</p>
   * @public
   */
  Name?: string | undefined;

  /**
   * <p>The list of port mappings for the container.</p>
   * @public
   */
  PortMappings?: AwsEcsTaskDefinitionContainerDefinitionsPortMappingsDetails[] | undefined;

  /**
   * <p>Whether the container is given elevated privileges on the host container instance. The elevated privileges are similar to the root user.</p>
   * @public
   */
  Privileged?: boolean | undefined;

  /**
   * <p>Whether to allocate a TTY to the container.</p>
   * @public
   */
  PseudoTerminal?: boolean | undefined;

  /**
   * <p>Whether the container is given read-only access to its root file system.</p>
   * @public
   */
  ReadonlyRootFilesystem?: boolean | undefined;

  /**
   * <p>The private repository authentication credentials to use.</p>
   * @public
   */
  RepositoryCredentials?: AwsEcsTaskDefinitionContainerDefinitionsRepositoryCredentialsDetails | undefined;

  /**
   * <p>The type and amount of a resource to assign to a container. The only supported resource is a GPU.</p>
   * @public
   */
  ResourceRequirements?: AwsEcsTaskDefinitionContainerDefinitionsResourceRequirementsDetails[] | undefined;

  /**
   * <p>The secrets to pass to the container.</p>
   * @public
   */
  Secrets?: AwsEcsTaskDefinitionContainerDefinitionsSecretsDetails[] | undefined;

  /**
   * <p>The number of seconds to wait before giving up on resolving dependencies for a container. </p>
   * @public
   */
  StartTimeout?: number | undefined;

  /**
   * <p>The number of seconds to wait before the container is stopped if it doesn't shut down normally on its own.</p>
   * @public
   */
  StopTimeout?: number | undefined;

  /**
   * <p>A list of namespaced kernel parameters to set in the container.</p>
   * @public
   */
  SystemControls?: AwsEcsTaskDefinitionContainerDefinitionsSystemControlsDetails[] | undefined;

  /**
   * <p>A list of ulimits to set in the container. </p>
   * @public
   */
  Ulimits?: AwsEcsTaskDefinitionContainerDefinitionsUlimitsDetails[] | undefined;

  /**
   * <p>The user to use inside the container.</p>
   *          <p>The value can use one of the following formats.</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>
   *                      <i>user</i>
   *                   </code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>
   *                      <i>user</i>
   *                   </code>:<code>
   *                      <i>group</i>
   *                   </code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>
   *                      <i>uid</i>
   *                   </code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>
   *                      <i>uid</i>
   *                   </code>:<code>
   *                      <i>gid</i>
   *                   </code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>
   *                      <i>user</i>
   *                   </code>:<code>
   *                      <i>gid</i>
   *                   </code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>
   *                      <i>uid</i>
   *                   </code>:<code>
   *                      <i>group</i>
   *                   </code>
   *                </p>
   *             </li>
   *          </ul>
   * @public
   */
  User?: string | undefined;

  /**
   * <p>Data volumes to mount from another container.</p>
   * @public
   */
  VolumesFrom?: AwsEcsTaskDefinitionContainerDefinitionsVolumesFromDetails[] | undefined;

  /**
   * <p>The working directory in which to run commands inside the container.</p>
   * @public
   */
  WorkingDirectory?: string | undefined;
}

/**
 * <p>An Elastic Inference accelerator to use
 *          for the containers in the task.</p>
 * @public
 */
export interface AwsEcsTaskDefinitionInferenceAcceleratorsDetails {
  /**
   * <p>The Elastic Inference accelerator device name.</p>
   * @public
   */
  DeviceName?: string | undefined;

  /**
   * <p>The Elastic Inference accelerator type to use.</p>
   * @public
   */
  DeviceType?: string | undefined;
}

/**
 * <p>A placement constraint object to use for tasks.</p>
 * @public
 */
export interface AwsEcsTaskDefinitionPlacementConstraintsDetails {
  /**
   * <p>A cluster query language expression to apply to the constraint.</p>
   * @public
   */
  Expression?: string | undefined;

  /**
   * <p>The type of constraint.</p>
   * @public
   */
  Type?: string | undefined;
}

/**
 * <p>A network configuration parameter to provide to the Container Network Interface (CNI) plugin.</p>
 * @public
 */
export interface AwsEcsTaskDefinitionProxyConfigurationProxyConfigurationPropertiesDetails {
  /**
   * <p>The name of the property.</p>
   * @public
   */
  Name?: string | undefined;

  /**
   * <p>The value of the property.</p>
   * @public
   */
  Value?: string | undefined;
}

/**
 * <p>The configuration details for the App Mesh
 *          proxy.</p>
 * @public
 */
export interface AwsEcsTaskDefinitionProxyConfigurationDetails {
  /**
   * <p>The name of the container that will serve as the App Mesh proxy.</p>
   * @public
   */
  ContainerName?: string | undefined;

  /**
   * <p>The set of network configuration parameters to provide to the Container Network Interface (CNI) plugin, specified as key-value pairs.</p>
   * @public
   */
  ProxyConfigurationProperties?:
    | AwsEcsTaskDefinitionProxyConfigurationProxyConfigurationPropertiesDetails[]
    | undefined;

  /**
   * <p>The proxy type.</p>
   * @public
   */
  Type?: string | undefined;
}

/**
 * <p>Information about a Docker volume.</p>
 * @public
 */
export interface AwsEcsTaskDefinitionVolumesDockerVolumeConfigurationDetails {
  /**
   * <p>Whether to create the Docker volume automatically if it does not already exist.</p>
   * @public
   */
  Autoprovision?: boolean | undefined;

  /**
   * <p>The Docker volume driver to use.</p>
   * @public
   */
  Driver?: string | undefined;

  /**
   * <p>A map of Docker driver-specific options that are passed through.</p>
   * @public
   */
  DriverOpts?: Record<string, string> | undefined;

  /**
   * <p>Custom metadata to add to the Docker volume.</p>
   * @public
   */
  Labels?: Record<string, string> | undefined;

  /**
   * <p>The scope for the Docker volume that determines its lifecycle. Docker volumes that are scoped to a task are provisioned
   * automatically when the task starts and destroyed when the task stops. Docker volumes that are shared persist after the task stops. Valid values are <code>shared</code> or <code>task</code>.</p>
   * @public
   */
  Scope?: string | undefined;
}

/**
 * <p></p>
 * @public
 */
export interface AwsEcsTaskDefinitionVolumesEfsVolumeConfigurationAuthorizationConfigDetails {
  /**
   * <p>The Amazon EFS access point identifier to use.</p>
   * @public
   */
  AccessPointId?: string | undefined;

  /**
   * <p>Whether to use the Amazon ECS task IAM role defined in a task definition when mounting the Amazon EFS file system.</p>
   * @public
   */
  Iam?: string | undefined;
}

/**
 * <p>Information about the Amazon Elastic File System file system that is used for task storage.</p>
 * @public
 */
export interface AwsEcsTaskDefinitionVolumesEfsVolumeConfigurationDetails {
  /**
   * <p>The authorization configuration details for the Amazon EFS file system.</p>
   * @public
   */
  AuthorizationConfig?: AwsEcsTaskDefinitionVolumesEfsVolumeConfigurationAuthorizationConfigDetails | undefined;

  /**
   * <p>The Amazon EFS file system identifier to use.</p>
   * @public
   */
  FilesystemId?: string | undefined;

  /**
   * <p>The directory within the Amazon EFS file system to mount as the root directory inside the host.</p>
   * @public
   */
  RootDirectory?: string | undefined;

  /**
   * <p>Whether to enable encryption for Amazon EFS data in transit between the Amazon ECS host and the Amazon EFS server. </p>
   * @public
   */
  TransitEncryption?: string | undefined;

  /**
   * <p>The port to use when sending encrypted data between the Amazon ECS host and the Amazon EFS server.</p>
   * @public
   */
  TransitEncryptionPort?: number | undefined;
}

/**
 * <p>Information about a bind mount host volume.</p>
 * @public
 */
export interface AwsEcsTaskDefinitionVolumesHostDetails {
  /**
   * <p>The path on the host container instance that is presented to the container.</p>
   * @public
   */
  SourcePath?: string | undefined;
}

/**
 * <p>A data volume to mount from another container.</p>
 * @public
 */
export interface AwsEcsTaskDefinitionVolumesDetails {
  /**
   * <p>Information about a Docker volume.</p>
   * @public
   */
  DockerVolumeConfiguration?: AwsEcsTaskDefinitionVolumesDockerVolumeConfigurationDetails | undefined;

  /**
   * <p>Information about the Amazon Elastic File System file system that is used for task storage.</p>
   * @public
   */
  EfsVolumeConfiguration?: AwsEcsTaskDefinitionVolumesEfsVolumeConfigurationDetails | undefined;

  /**
   * <p>Information about a bind mount host volume.</p>
   * @public
   */
  Host?: AwsEcsTaskDefinitionVolumesHostDetails | undefined;

  /**
   * <p>The name of the data volume.</p>
   * @public
   */
  Name?: string | undefined;
}

/**
 * <p>Details about a task definition. A task definition describes the container and volume definitions
 *          of an Amazon Elastic Container Service task.</p>
 * @public
 */
export interface AwsEcsTaskDefinitionDetails {
  /**
   * <p>The container definitions that describe the containers that make up the task.</p>
   * @public
   */
  ContainerDefinitions?: AwsEcsTaskDefinitionContainerDefinitionsDetails[] | undefined;

  /**
   * <p>The number of CPU units used by the task.Valid values are as follows:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>256 (.25 vCPU)</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>512 (.5 vCPU)</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>1024 (1 vCPU)</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>2048 (2 vCPU)</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>4096 (4 vCPU)</code>
   *                </p>
   *             </li>
   *          </ul>
   * @public
   */
  Cpu?: string | undefined;

  /**
   * <p>The ARN of the task execution role that grants the container agent permission to make API calls on behalf of the container user.</p>
   * @public
   */
  ExecutionRoleArn?: string | undefined;

  /**
   * <p>The name of a family that this task definition is registered to.</p>
   * @public
   */
  Family?: string | undefined;

  /**
   * <p>The Elastic Inference accelerators to use for the containers in the task.</p>
   * @public
   */
  InferenceAccelerators?: AwsEcsTaskDefinitionInferenceAcceleratorsDetails[] | undefined;

  /**
   * <p>The inter-process communication (IPC) resource namespace to use for the containers in the task. Valid values are as follows:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>host</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>none</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>task</code>
   *                </p>
   *             </li>
   *          </ul>
   * @public
   */
  IpcMode?: string | undefined;

  /**
   * <p>The amount (in MiB) of memory used by the task. </p>
   *          <p>For tasks that are hosted on Amazon EC2, you can provide a task-level memory value or a container-level memory value.
   *       For tasks that are hosted on Fargate, you must use one of the <a href="https://docs.aws.amazon.com/AmazonECS/latest/developerguide/task_definition_parameters.html#task_size">specified values</a> in the <i>
   *                <i>Amazon Elastic Container Service Developer Guide</i>
   *             </i>, which determines your range of supported values for the <code>Cpu</code> and <code>Memory</code> parameters.</p>
   * @public
   */
  Memory?: string | undefined;

  /**
   * <p>The Docker networking mode to use for the containers in the task. Valid values are as follows:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>awsvpc</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>bridge</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>host</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>none</code>
   *                </p>
   *             </li>
   *          </ul>
   * @public
   */
  NetworkMode?: string | undefined;

  /**
   * <p>The process namespace to use for the containers in the task. Valid values are <code>host</code> or <code>task</code>.</p>
   * @public
   */
  PidMode?: string | undefined;

  /**
   * <p>The placement constraint objects to use for tasks.</p>
   * @public
   */
  PlacementConstraints?: AwsEcsTaskDefinitionPlacementConstraintsDetails[] | undefined;

  /**
   * <p>The configuration details for the App Mesh proxy.</p>
   * @public
   */
  ProxyConfiguration?: AwsEcsTaskDefinitionProxyConfigurationDetails | undefined;

  /**
   * <p>The task launch types that the task definition was validated against.</p>
   * @public
   */
  RequiresCompatibilities?: string[] | undefined;

  /**
   * <p>The short name or ARN of the IAM role that grants containers in the task permission to call Amazon Web Services API operations on your behalf.</p>
   * @public
   */
  TaskRoleArn?: string | undefined;

  /**
   * <p>The data volume definitions for the task.</p>
   * @public
   */
  Volumes?: AwsEcsTaskDefinitionVolumesDetails[] | undefined;

  /**
   * <p>
   *             The status of the task definition.
   *         </p>
   * @public
   */
  Status?: string | undefined;
}

/**
 * <p>Provides details on a container instance bind mount host volume.
 *       </p>
 * @public
 */
export interface AwsEcsTaskVolumeHostDetails {
  /**
   * <p>When the <code>host</code> parameter is used, specify a <code>sourcePath</code> to declare the path
   * on the host container instance that's presented to the container.
   *       </p>
   * @public
   */
  SourcePath?: string | undefined;
}

/**
 * <p>Provides information about a data volume that's used in a task definition.
 *       </p>
 * @public
 */
export interface AwsEcsTaskVolumeDetails {
  /**
   * <p>The name of the volume. Up to 255 letters (uppercase and lowercase), numbers, underscores, and
   * hyphens are allowed. This name is referenced in the <code>sourceVolume</code> parameter of container definition <code>mountPoints</code>.
   *       </p>
   * @public
   */
  Name?: string | undefined;

  /**
   * <p>This parameter is specified when you use bind mount host volumes. The contents of the <code>host</code> parameter
   * determine whether your bind mount host volume persists on the host container instance and where it's stored.
   *       </p>
   * @public
   */
  Host?: AwsEcsTaskVolumeHostDetails | undefined;
}

/**
 * <p>Provides details about a task in a cluster.
 *       </p>
 * @public
 */
export interface AwsEcsTaskDetails {
  /**
   * <p>The Amazon Resource Name (ARN) of the cluster that hosts the task.
   *       </p>
   * @public
   */
  ClusterArn?: string | undefined;

  /**
   * <p>The ARN of the task definition that creates the task.
   *       </p>
   * @public
   */
  TaskDefinitionArn?: string | undefined;

  /**
   * <p>The version counter for the task.
   *       </p>
   * @public
   */
  Version?: string | undefined;

  /**
   * <p>The Unix timestamp for the time when the task was created. More specifically, it's for the time when
   * the task entered the <code>PENDING</code> state.
   *       </p>
   * @public
   */
  CreatedAt?: string | undefined;

  /**
   * <p>The Unix timestamp for the time when the task started. More specifically, it's for the time when the
   *          task transitioned from the <code>PENDING</code> state to the <code>RUNNING</code> state.
   *    </p>
   * @public
   */
  StartedAt?: string | undefined;

  /**
   * <p>The tag specified when a task is started. If an Amazon ECS service started the task, the
   *          <code>startedBy</code> parameter contains the deployment ID of that service.
   *       </p>
   * @public
   */
  StartedBy?: string | undefined;

  /**
   * <p>The name of the task group that's associated with the task.
   *       </p>
   * @public
   */
  Group?: string | undefined;

  /**
   * <p>Details about the data volume that is used in a task definition.
   *       </p>
   * @public
   */
  Volumes?: AwsEcsTaskVolumeDetails[] | undefined;

  /**
   * <p>The containers that are associated with the task.
   *       </p>
   * @public
   */
  Containers?: AwsEcsContainerDetails[] | undefined;
}

/**
 * <p>Provides details for all file system operations using this Amazon EFS access point.
 *       </p>
 * @public
 */
export interface AwsEfsAccessPointPosixUserDetails {
  /**
   * <p>The POSIX group ID used for all file system operations using this access point.
   *       </p>
   * @public
   */
  Gid?: string | undefined;

  /**
   * <p>Secondary POSIX group IDs used for all file system operations using this access point.
   *       </p>
   * @public
   */
  SecondaryGids?: string[] | undefined;

  /**
   * <p>The POSIX user ID used for all file system operations using this access point.
   *       </p>
   * @public
   */
  Uid?: string | undefined;
}

/**
 * <p>Provides information about the settings that Amazon EFS uses to create the root directory
 * when a client connects to an access point.
 *       </p>
 * @public
 */
export interface AwsEfsAccessPointRootDirectoryCreationInfoDetails {
  /**
   * <p>Specifies the POSIX group ID to apply to the root directory.
   *       </p>
   * @public
   */
  OwnerGid?: string | undefined;

  /**
   * <p>Specifies the POSIX user ID to apply to the root directory.
   *       </p>
   * @public
   */
  OwnerUid?: string | undefined;

  /**
   * <p>Specifies the POSIX permissions to apply to the root directory, in the format of an octal number
   * representing the file's mode bits.
   *       </p>
   * @public
   */
  Permissions?: string | undefined;
}

/**
 * <p>Provides information about the directory on the Amazon EFS file system that the access point exposes
 * as the root directory to NFS clients using the access point.
 *       </p>
 * @public
 */
export interface AwsEfsAccessPointRootDirectoryDetails {
  /**
   * <p>Specifies the POSIX IDs and permissions to apply to the access point's root directory.
   *       </p>
   * @public
   */
  CreationInfo?: AwsEfsAccessPointRootDirectoryCreationInfoDetails | undefined;

  /**
   * <p>Specifies the path on the Amazon EFS file system to expose as the root directory to NFS clients
   * using the access point to access the EFS file system. A path can have up to four subdirectories. If the specified
   * path does not exist, you are required to provide <code>CreationInfo</code>.
   *       </p>
   * @public
   */
  Path?: string | undefined;
}

/**
 * <p>Provides information about an Amazon EFS access point.
 *       </p>
 * @public
 */
export interface AwsEfsAccessPointDetails {
  /**
   * <p>The ID of the Amazon EFS access point.
   *       </p>
   * @public
   */
  AccessPointId?: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the Amazon EFS access point. </p>
   * @public
   */
  Arn?: string | undefined;

  /**
   * <p>The opaque string specified in the request to ensure idempotent creation.
   *       </p>
   * @public
   */
  ClientToken?: string | undefined;

  /**
   * <p>The ID of the Amazon EFS file system that the access point applies to.
   *       </p>
   * @public
   */
  FileSystemId?: string | undefined;

  /**
   * <p>The full POSIX identity, including the user ID, group ID, and secondary group IDs on the access point,
   * that is used for all file operations by NFS clients using the access point.
   *       </p>
   * @public
   */
  PosixUser?: AwsEfsAccessPointPosixUserDetails | undefined;

  /**
   * <p>The directory on the Amazon EFS file system that the access point exposes as the root
   * directory to NFS clients using the access point.
   *       </p>
   * @public
   */
  RootDirectory?: AwsEfsAccessPointRootDirectoryDetails | undefined;
}

/**
 * <p>Details for a cluster logging configuration.</p>
 * @public
 */
export interface AwsEksClusterLoggingClusterLoggingDetails {
  /**
   * <p>Whether the logging types that are listed in <code>Types</code> are enabled.</p>
   * @public
   */
  Enabled?: boolean | undefined;

  /**
   * <p>A list of logging types. Valid values are as follows:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>api</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>audit</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>authenticator</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>controllerManager</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>scheduler</code>
   *                </p>
   *             </li>
   *          </ul>
   * @public
   */
  Types?: string[] | undefined;
}

/**
 * <p>The logging configuration for an Amazon EKS cluster.</p>
 * @public
 */
export interface AwsEksClusterLoggingDetails {
  /**
   * <p>Cluster logging configurations.</p>
   * @public
   */
  ClusterLogging?: AwsEksClusterLoggingClusterLoggingDetails[] | undefined;
}

/**
 * <p>Information about the VPC configuration used by the cluster control plane.</p>
 * @public
 */
export interface AwsEksClusterResourcesVpcConfigDetails {
  /**
   * <p>The security groups that are associated with the cross-account elastic network interfaces that are used to allow communication between your nodes and the Amazon EKS control plane.</p>
   * @public
   */
  SecurityGroupIds?: string[] | undefined;

  /**
   * <p>The subnets that are associated with the cluster.</p>
   * @public
   */
  SubnetIds?: string[] | undefined;

  /**
   * <p>
   *          Indicates whether the Amazon EKS public API server endpoint is turned on. If the Amazon EKS public API
   *          server endpoint is turned off, your cluster's Kubernetes API server can only receive requests that originate from within
   *          the cluster VPC.
   *       </p>
   * @public
   */
  EndpointPublicAccess?: boolean | undefined;
}

/**
 * <p>Provides details about an Amazon EKS cluster.</p>
 * @public
 */
export interface AwsEksClusterDetails {
  /**
   * <p>The ARN of the cluster.</p>
   * @public
   */
  Arn?: string | undefined;

  /**
   * <p>The certificate authority data for the cluster.</p>
   * @public
   */
  CertificateAuthorityData?: string | undefined;

  /**
   * <p>The status of the cluster. Valid values are as follows:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>ACTIVE</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>CREATING</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>DELETING</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>FAILED</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>PENDING</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>UPDATING</code>
   *                </p>
   *             </li>
   *          </ul>
   * @public
   */
  ClusterStatus?: string | undefined;

  /**
   * <p>The endpoint for the Amazon EKS API server.</p>
   * @public
   */
  Endpoint?: string | undefined;

  /**
   * <p>The name of the cluster.</p>
   * @public
   */
  Name?: string | undefined;

  /**
   * <p>The VPC configuration used by the cluster control plane.</p>
   * @public
   */
  ResourcesVpcConfig?: AwsEksClusterResourcesVpcConfigDetails | undefined;

  /**
   * <p>The ARN of the IAM role that provides permissions for the Amazon EKS control plane to make calls to Amazon Web Services API operations on your behalf.</p>
   * @public
   */
  RoleArn?: string | undefined;

  /**
   * <p>The Amazon EKS server version for the cluster.</p>
   * @public
   */
  Version?: string | undefined;

  /**
   * <p>The logging configuration for the cluster.</p>
   * @public
   */
  Logging?: AwsEksClusterLoggingDetails | undefined;
}

/**
 * <p>Contains information about a link to another environment that is in the same group.</p>
 * @public
 */
export interface AwsElasticBeanstalkEnvironmentEnvironmentLink {
  /**
   * <p>The name of the linked environment.</p>
   * @public
   */
  EnvironmentName?: string | undefined;

  /**
   * <p>The name of the environment link.</p>
   * @public
   */
  LinkName?: string | undefined;
}

/**
 * <p>A configuration option setting for the environment.</p>
 * @public
 */
export interface AwsElasticBeanstalkEnvironmentOptionSetting {
  /**
   * <p>The type of resource that the configuration option is associated with.</p>
   * @public
   */
  Namespace?: string | undefined;

  /**
   * <p>The name of the option.</p>
   * @public
   */
  OptionName?: string | undefined;

  /**
   * <p>The name of the resource.</p>
   * @public
   */
  ResourceName?: string | undefined;

  /**
   * <p>The value of the configuration setting.</p>
   * @public
   */
  Value?: string | undefined;
}

/**
 * <p>Contains information about the tier of the environment.</p>
 * @public
 */
export interface AwsElasticBeanstalkEnvironmentTier {
  /**
   * <p>The name of the environment tier. Valid values are <code>WebServer</code> or <code>Worker</code>.</p>
   * @public
   */
  Name?: string | undefined;

  /**
   * <p>The type of environment tier. Valid values are <code>Standard</code> or <code>SQS/HTTP</code>.</p>
   * @public
   */
  Type?: string | undefined;

  /**
   * <p>The version of the environment tier.</p>
   * @public
   */
  Version?: string | undefined;
}

/**
 * <p>Contains details about an Elastic Beanstalk environment.</p>
 * @public
 */
export interface AwsElasticBeanstalkEnvironmentDetails {
  /**
   * <p>The name of the application that is associated with the environment.</p>
   * @public
   */
  ApplicationName?: string | undefined;

  /**
   * <p>The URL to the CNAME for this environment.</p>
   * @public
   */
  Cname?: string | undefined;

  /**
   * <p>The creation date for this environment.</p>
   * @public
   */
  DateCreated?: string | undefined;

  /**
   * <p>The date when this environment was last modified.</p>
   * @public
   */
  DateUpdated?: string | undefined;

  /**
   * <p>A description of the environment.</p>
   * @public
   */
  Description?: string | undefined;

  /**
   * <p>For load-balanced, autoscaling environments, the URL to the load balancer. For single-instance environments, the IP address of the instance.</p>
   * @public
   */
  EndpointUrl?: string | undefined;

  /**
   * <p>The ARN of the environment.</p>
   * @public
   */
  EnvironmentArn?: string | undefined;

  /**
   * <p>The identifier of the environment.</p>
   * @public
   */
  EnvironmentId?: string | undefined;

  /**
   * <p>Links to other environments in the same group.</p>
   * @public
   */
  EnvironmentLinks?: AwsElasticBeanstalkEnvironmentEnvironmentLink[] | undefined;

  /**
   * <p>The name of the environment.</p>
   * @public
   */
  EnvironmentName?: string | undefined;

  /**
   * <p>The configuration setting for the environment.</p>
   * @public
   */
  OptionSettings?: AwsElasticBeanstalkEnvironmentOptionSetting[] | undefined;

  /**
   * <p>The ARN of the platform version for the environment.</p>
   * @public
   */
  PlatformArn?: string | undefined;

  /**
   * <p>The name of the solution stack that is deployed with the environment.</p>
   * @public
   */
  SolutionStackName?: string | undefined;

  /**
   * <p>The current operational status of the environment. Valid values are as follows:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>Aborting</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>Launching</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>LinkingFrom</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>LinkingTo</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>Ready</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>Terminated</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>Terminating</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>Updating</code>
   *                </p>
   *             </li>
   *          </ul>
   * @public
   */
  Status?: string | undefined;

  /**
   * <p>The tier of the environment.</p>
   * @public
   */
  Tier?: AwsElasticBeanstalkEnvironmentTier | undefined;

  /**
   * <p>The application version of the environment.</p>
   * @public
   */
  VersionLabel?: string | undefined;
}

/**
 * <p>Additional options for the domain endpoint, such as whether to require HTTPS for all
 *          traffic.</p>
 * @public
 */
export interface AwsElasticsearchDomainDomainEndpointOptions {
  /**
   * <p>Whether to require that all traffic to the domain arrive over HTTPS.</p>
   * @public
   */
  EnforceHTTPS?: boolean | undefined;

  /**
   * <p>The TLS security policy to apply to the HTTPS endpoint of the OpenSearch
   *          domain.</p>
   *          <p>Valid values:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>Policy-Min-TLS-1-0-2019-07</code>, which supports TLSv1.0 and higher</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>Policy-Min-TLS-1-2-2019-07</code>, which only supports TLSv1.2</p>
   *             </li>
   *          </ul>
   * @public
   */
  TLSSecurityPolicy?: string | undefined;
}

/**
 * <p>Configuration options for zone awareness.</p>
 * @public
 */
export interface AwsElasticsearchDomainElasticsearchClusterConfigZoneAwarenessConfigDetails {
  /**
   * <p>he number of Availability Zones that the domain uses. Valid values are 2 and 3. The default is 2.</p>
   * @public
   */
  AvailabilityZoneCount?: number | undefined;
}

/**
 * <p>details about the configuration of an OpenSearch cluster.</p>
 * @public
 */
export interface AwsElasticsearchDomainElasticsearchClusterConfigDetails {
  /**
   * <p>The number of instances to use for the master node. If this attribute is specified, then <code>DedicatedMasterEnabled</code> must be <code>true</code>.</p>
   * @public
   */
  DedicatedMasterCount?: number | undefined;

  /**
   * <p>Whether to use a dedicated master node for the Elasticsearch domain. A dedicated master node performs cluster management tasks, but doesn't hold data or respond to data upload requests.</p>
   * @public
   */
  DedicatedMasterEnabled?: boolean | undefined;

  /**
   * <p>The hardware configuration of the computer that hosts the dedicated master node. A sample value is <code>m3.medium.elasticsearch</code>. If this attribute is specified, then <code>DedicatedMasterEnabled</code> must be <code>true</code>.</p>
   *          <p>For a list of valid values, see <a href="https://docs.aws.amazon.com/opensearch-service/latest/developerguide/supported-instance-types.html">Supported instance types in Amazon OpenSearch Service</a> in the <i>Amazon OpenSearch Service Developer Guide</i>.</p>
   * @public
   */
  DedicatedMasterType?: string | undefined;

  /**
   * <p>The number of data nodes to use in the Elasticsearch domain.</p>
   * @public
   */
  InstanceCount?: number | undefined;

  /**
   * <p>The instance type for your data nodes. For example, <code>m3.medium.elasticsearch</code>.</p>
   *          <p>For a list of valid values, see <a href="https://docs.aws.amazon.com/opensearch-service/latest/developerguide/supported-instance-types.html">Supported instance types in Amazon OpenSearch Service</a> in the <i>Amazon OpenSearch Service Developer Guide</i>.</p>
   * @public
   */
  InstanceType?: string | undefined;

  /**
   * <p>Configuration options for zone awareness. Provided if <code>ZoneAwarenessEnabled</code> is <code>true</code>.</p>
   * @public
   */
  ZoneAwarenessConfig?: AwsElasticsearchDomainElasticsearchClusterConfigZoneAwarenessConfigDetails | undefined;

  /**
   * <p>Whether to enable zone awareness for the Elasticsearch domain. When zone awareness is enabled, OpenSearch allocates the cluster's nodes and replica index shards across Availability Zones in the same Region. This prevents data loss and minimizes downtime if a node or data center fails.</p>
   * @public
   */
  ZoneAwarenessEnabled?: boolean | undefined;
}

/**
 * <p>Details about the configuration for encryption at rest.</p>
 * @public
 */
export interface AwsElasticsearchDomainEncryptionAtRestOptions {
  /**
   * <p>Whether encryption at rest is enabled.</p>
   * @public
   */
  Enabled?: boolean | undefined;

  /**
   * <p>The KMS key ID. Takes the form <code>1a2a3a4-1a2a-3a4a-5a6a-1a2a3a4a5a6a</code>.</p>
   * @public
   */
  KmsKeyId?: string | undefined;
}

/**
 * <p>The log configuration.</p>
 * @public
 */
export interface AwsElasticsearchDomainLogPublishingOptionsLogConfig {
  /**
   * <p>The ARN of the CloudWatch Logs group to publish the logs to.</p>
   * @public
   */
  CloudWatchLogsLogGroupArn?: string | undefined;

  /**
   * <p>Whether the log publishing is enabled.</p>
   * @public
   */
  Enabled?: boolean | undefined;
}

/**
 * <p>configures the CloudWatch Logs to publish for the
 *          Elasticsearch domain.</p>
 * @public
 */
export interface AwsElasticsearchDomainLogPublishingOptions {
  /**
   * <p>Configures the OpenSearch index logs
   *          publishing.</p>
   * @public
   */
  IndexSlowLogs?: AwsElasticsearchDomainLogPublishingOptionsLogConfig | undefined;

  /**
   * <p>Configures the OpenSearch search slow log
   *          publishing.</p>
   * @public
   */
  SearchSlowLogs?: AwsElasticsearchDomainLogPublishingOptionsLogConfig | undefined;

  /**
   * <p>The log configuration.</p>
   * @public
   */
  AuditLogs?: AwsElasticsearchDomainLogPublishingOptionsLogConfig | undefined;
}

/**
 * <p>Details about the configuration for node-to-node encryption.</p>
 * @public
 */
export interface AwsElasticsearchDomainNodeToNodeEncryptionOptions {
  /**
   * <p>Whether node-to-node encryption is enabled.</p>
   * @public
   */
  Enabled?: boolean | undefined;
}

/**
 * <p>Information about the state of the domain relative to the latest service software.</p>
 * @public
 */
export interface AwsElasticsearchDomainServiceSoftwareOptions {
  /**
   * <p>The epoch time when the deployment window closes for required updates. After this time,
   *          Amazon OpenSearch Service schedules the software upgrade automatically.</p>
   * @public
   */
  AutomatedUpdateDate?: string | undefined;

  /**
   * <p>Whether a request to update the domain can be canceled.</p>
   * @public
   */
  Cancellable?: boolean | undefined;

  /**
   * <p>The version of the service software that is currently installed on the domain.</p>
   * @public
   */
  CurrentVersion?: string | undefined;

  /**
   * <p>A more detailed description of the service software status.</p>
   * @public
   */
  Description?: string | undefined;

  /**
   * <p>The most recent version of the service software.</p>
   * @public
   */
  NewVersion?: string | undefined;

  /**
   * <p>Whether a service software update is available for the domain.</p>
   * @public
   */
  UpdateAvailable?: boolean | undefined;

  /**
   * <p>The status of the service software update. Valid values are as follows:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>COMPLETED</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>ELIGIBLE</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>IN_PROGRESS</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>NOT_ELIGIBLE</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>PENDING_UPDATE</code>
   *                </p>
   *             </li>
   *          </ul>
   * @public
   */
  UpdateStatus?: string | undefined;
}

/**
 * <p>Information that OpenSearch derives based on <code>VPCOptions</code> for the
 *          domain.</p>
 * @public
 */
export interface AwsElasticsearchDomainVPCOptions {
  /**
   * <p>The list of Availability Zones associated with the VPC subnets.</p>
   * @public
   */
  AvailabilityZones?: string[] | undefined;

  /**
   * <p>The list of security group IDs associated with the VPC endpoints for the domain.</p>
   * @public
   */
  SecurityGroupIds?: string[] | undefined;

  /**
   * <p>A list of subnet IDs associated with the VPC endpoints for the domain.</p>
   * @public
   */
  SubnetIds?: string[] | undefined;

  /**
   * <p>ID for the VPC.</p>
   * @public
   */
  VPCId?: string | undefined;
}

/**
 * <p>Information about an Elasticsearch domain.</p>
 * @public
 */
export interface AwsElasticsearchDomainDetails {
  /**
   * <p>IAM policy document specifying the access policies for the new Elasticsearch domain.</p>
   * @public
   */
  AccessPolicies?: string | undefined;

  /**
   * <p>Additional options for the domain endpoint.</p>
   * @public
   */
  DomainEndpointOptions?: AwsElasticsearchDomainDomainEndpointOptions | undefined;

  /**
   * <p>Unique identifier for an Elasticsearch domain.</p>
   * @public
   */
  DomainId?: string | undefined;

  /**
   * <p>Name of an Elasticsearch domain.</p>
   *          <p>Domain names are unique across all domains owned by the same account within an Amazon Web Services
   *          Region.</p>
   *          <p>Domain names must start with a lowercase letter and must be between 3 and 28
   *          characters.</p>
   *          <p>Valid characters are a-z (lowercase only), 0-9, and – (hyphen). </p>
   * @public
   */
  DomainName?: string | undefined;

  /**
   * <p>Domain-specific endpoint used to submit index, search, and data upload requests to an
   *          Elasticsearch domain.</p>
   *          <p>The endpoint is a service URL. </p>
   * @public
   */
  Endpoint?: string | undefined;

  /**
   * <p>The key-value pair that exists if the Elasticsearch domain uses VPC endpoints.</p>
   * @public
   */
  Endpoints?: Record<string, string> | undefined;

  /**
   * <p>OpenSearch version.</p>
   * @public
   */
  ElasticsearchVersion?: string | undefined;

  /**
   * <p>Information about an OpenSearch cluster configuration.</p>
   * @public
   */
  ElasticsearchClusterConfig?: AwsElasticsearchDomainElasticsearchClusterConfigDetails | undefined;

  /**
   * <p>Details about the configuration for encryption at rest.</p>
   * @public
   */
  EncryptionAtRestOptions?: AwsElasticsearchDomainEncryptionAtRestOptions | undefined;

  /**
   * <p>Configures the CloudWatch Logs to publish for the Elasticsearch domain.</p>
   * @public
   */
  LogPublishingOptions?: AwsElasticsearchDomainLogPublishingOptions | undefined;

  /**
   * <p>Details about the configuration for node-to-node encryption.</p>
   * @public
   */
  NodeToNodeEncryptionOptions?: AwsElasticsearchDomainNodeToNodeEncryptionOptions | undefined;

  /**
   * <p>Information about the status of a domain relative to the latest service software.</p>
   * @public
   */
  ServiceSoftwareOptions?: AwsElasticsearchDomainServiceSoftwareOptions | undefined;

  /**
   * <p>Information that OpenSearch derives based on <code>VPCOptions</code> for the
   *          domain.</p>
   * @public
   */
  VPCOptions?: AwsElasticsearchDomainVPCOptions | undefined;
}

/**
 * <p>Contains information about a stickiness policy that was created using
 *             <code>CreateAppCookieStickinessPolicy</code>.</p>
 * @public
 */
export interface AwsElbAppCookieStickinessPolicy {
  /**
   * <p>The name of the application cookie used for stickiness.</p>
   * @public
   */
  CookieName?: string | undefined;

  /**
   * <p>The mnemonic name for the policy being created. The name must be unique within the set
   *          of policies for the load balancer.</p>
   * @public
   */
  PolicyName?: string | undefined;
}

/**
 * <p>Contains information about a stickiness policy that was created using
 *             <code>CreateLBCookieStickinessPolicy</code>.</p>
 * @public
 */
export interface AwsElbLbCookieStickinessPolicy {
  /**
   * <p>The amount of time, in seconds, after which the cookie is considered stale. If an
   *          expiration period is not specified, the stickiness session lasts for the duration of the
   *          browser session.</p>
   * @public
   */
  CookieExpirationPeriod?: number | undefined;

  /**
   * <p>The name of the policy. The name must be unique within the set of policies for the load
   *          balancer.</p>
   * @public
   */
  PolicyName?: string | undefined;
}

/**
 * <p>Contains information about the access log configuration for the load balancer.</p>
 * @public
 */
export interface AwsElbLoadBalancerAccessLog {
  /**
   * <p>The interval in minutes for publishing the access logs.</p>
   *          <p>You can publish access logs either every 5 minutes or every 60 minutes.</p>
   * @public
   */
  EmitInterval?: number | undefined;

  /**
   * <p>Indicates whether access logs are enabled for the load balancer.</p>
   * @public
   */
  Enabled?: boolean | undefined;

  /**
   * <p>The name of the S3 bucket where the access logs are stored.</p>
   * @public
   */
  S3BucketName?: string | undefined;

  /**
   * <p>The logical hierarchy that was created for the S3 bucket.</p>
   *          <p>If a prefix is not provided, the log is placed at the root level of the bucket.</p>
   * @public
   */
  S3BucketPrefix?: string | undefined;
}

/**
 * <p>Provides information about additional attributes for the load balancer.</p>
 * @public
 */
export interface AwsElbLoadBalancerAdditionalAttribute {
  /**
   * <p>The name of the attribute.</p>
   * @public
   */
  Key?: string | undefined;

  /**
   * <p>The value of the attribute.</p>
   * @public
   */
  Value?: string | undefined;
}

/**
 * <p>Contains information about the connection draining configuration for the load
 *          balancer.</p>
 * @public
 */
export interface AwsElbLoadBalancerConnectionDraining {
  /**
   * <p>Indicates whether connection draining is enabled for the load balancer.</p>
   * @public
   */
  Enabled?: boolean | undefined;

  /**
   * <p>The maximum time, in seconds, to keep the existing connections open before deregistering
   *          the instances.</p>
   * @public
   */
  Timeout?: number | undefined;
}

/**
 * <p>Contains connection settings for the load balancer.</p>
 * @public
 */
export interface AwsElbLoadBalancerConnectionSettings {
  /**
   * <p>The time, in seconds, that the connection can be idle (no data is sent over the
   *          connection) before it is closed by the load balancer.</p>
   * @public
   */
  IdleTimeout?: number | undefined;
}

/**
 * <p>Contains cross-zone load balancing settings for the load balancer.</p>
 * @public
 */
export interface AwsElbLoadBalancerCrossZoneLoadBalancing {
  /**
   * <p>Indicates whether cross-zone load balancing is enabled for the load balancer.</p>
   * @public
   */
  Enabled?: boolean | undefined;
}

/**
 * <p>Contains attributes for the load balancer.</p>
 * @public
 */
export interface AwsElbLoadBalancerAttributes {
  /**
   * <p>Information about the access log configuration for the load balancer.</p>
   *          <p>If the access log is enabled, the load balancer captures detailed information about all
   *          requests. It delivers the information to a specified S3 bucket.</p>
   * @public
   */
  AccessLog?: AwsElbLoadBalancerAccessLog | undefined;

  /**
   * <p>Information about the connection draining configuration for the load balancer.</p>
   *          <p>If connection draining is enabled, the load balancer allows existing requests to
   *          complete before it shifts traffic away from a deregistered or unhealthy instance.</p>
   * @public
   */
  ConnectionDraining?: AwsElbLoadBalancerConnectionDraining | undefined;

  /**
   * <p>Connection settings for the load balancer.</p>
   *          <p>If an idle timeout is configured, the load balancer allows connections to remain idle
   *          for the specified duration. When a connection is idle, no data is sent over the
   *          connection.</p>
   * @public
   */
  ConnectionSettings?: AwsElbLoadBalancerConnectionSettings | undefined;

  /**
   * <p>Cross-zone load balancing settings for the load balancer.</p>
   *          <p>If cross-zone load balancing is enabled, the load balancer routes the request traffic
   *          evenly across all instances regardless of the Availability Zones.</p>
   * @public
   */
  CrossZoneLoadBalancing?: AwsElbLoadBalancerCrossZoneLoadBalancing | undefined;

  /**
   * <p>Any additional attributes for a load balancer.</p>
   * @public
   */
  AdditionalAttributes?: AwsElbLoadBalancerAdditionalAttribute[] | undefined;
}

/**
 * <p>Provides information about the configuration of an EC2 instance for the load
 *          balancer.</p>
 * @public
 */
export interface AwsElbLoadBalancerBackendServerDescription {
  /**
   * <p>The port on which the EC2 instance is listening.</p>
   * @public
   */
  InstancePort?: number | undefined;

  /**
   * <p>The names of the policies that are enabled for the EC2 instance.</p>
   * @public
   */
  PolicyNames?: string[] | undefined;
}

/**
 * <p>Contains information about the health checks that are conducted on the load
 *          balancer.</p>
 * @public
 */
export interface AwsElbLoadBalancerHealthCheck {
  /**
   * <p>The number of consecutive health check successes required before the instance is moved
   *          to the Healthy state.</p>
   * @public
   */
  HealthyThreshold?: number | undefined;

  /**
   * <p>The approximate interval, in seconds, between health checks of an individual
   *          instance.</p>
   * @public
   */
  Interval?: number | undefined;

  /**
   * <p>The instance that is being checked. The target specifies the protocol and port. The
   *          available protocols are TCP, SSL, HTTP, and HTTPS. The range of valid ports is 1 through
   *          65535.</p>
   *          <p>For the HTTP and HTTPS protocols, the target also specifies the ping path.</p>
   *          <p>For the TCP protocol, the target is specified as <code>TCP:
   *                <i><port></i>
   *             </code>.</p>
   *          <p>For the SSL protocol, the target is specified as
   *                <code>SSL.<i><port></i>
   *             </code>.</p>
   *          <p>For the HTTP and HTTPS protocols, the target is specified as
   *                <code>
   *                <i><protocol></i>:<i><port></i>/<i><path
   *                to ping></i>
   *             </code>.</p>
   * @public
   */
  Target?: string | undefined;

  /**
   * <p>The amount of time, in seconds, during which no response means a failed health
   *          check.</p>
   * @public
   */
  Timeout?: number | undefined;

  /**
   * <p>The number of consecutive health check failures that must occur before the instance is
   *          moved to the Unhealthy state.</p>
   * @public
   */
  UnhealthyThreshold?: number | undefined;
}

/**
 * <p>Provides information about an EC2 instance for a load balancer.</p>
 * @public
 */
export interface AwsElbLoadBalancerInstance {
  /**
   * <p>The instance identifier.</p>
   * @public
   */
  InstanceId?: string | undefined;
}

/**
 * <p>Information about a load balancer listener.</p>
 * @public
 */
export interface AwsElbLoadBalancerListener {
  /**
   * <p>The port on which the instance is listening.</p>
   * @public
   */
  InstancePort?: number | undefined;

  /**
   * <p>The protocol to use to route traffic to instances.</p>
   *          <p>Valid values: <code>HTTP</code> | <code>HTTPS</code> | <code>TCP</code> |
   *             <code>SSL</code>
   *          </p>
   * @public
   */
  InstanceProtocol?: string | undefined;

  /**
   * <p>The port on which the load balancer is listening.</p>
   *          <p>On EC2-VPC, you can specify any port from the range 1-65535.</p>
   *          <p>On EC2-Classic, you can specify any port from the following list: 25, 80, 443, 465, 587,
   *          1024-65535.</p>
   * @public
   */
  LoadBalancerPort?: number | undefined;

  /**
   * <p>The load balancer transport protocol to use for routing.</p>
   *          <p>Valid values: <code>HTTP</code> | <code>HTTPS</code> | <code>TCP</code> |
   *             <code>SSL</code>
   *          </p>
   * @public
   */
  Protocol?: string | undefined;

  /**
   * <p>The ARN of the server certificate.</p>
   * @public
   */
  SslCertificateId?: string | undefined;
}

/**
 * <p>Lists the policies that are enabled for a load balancer listener.</p>
 * @public
 */
export interface AwsElbLoadBalancerListenerDescription {
  /**
   * <p>Information about the listener.</p>
   * @public
   */
  Listener?: AwsElbLoadBalancerListener | undefined;

  /**
   * <p>The policies enabled for the listener.</p>
   * @public
   */
  PolicyNames?: string[] | undefined;
}

/**
 * <p>Contains information about the policies for a load balancer.</p>
 * @public
 */
export interface AwsElbLoadBalancerPolicies {
  /**
   * <p>The stickiness policies that are created using
   *             <code>CreateAppCookieStickinessPolicy</code>.</p>
   * @public
   */
  AppCookieStickinessPolicies?: AwsElbAppCookieStickinessPolicy[] | undefined;

  /**
   * <p>The stickiness policies that are created using
   *             <code>CreateLBCookieStickinessPolicy</code>.</p>
   * @public
   */
  LbCookieStickinessPolicies?: AwsElbLbCookieStickinessPolicy[] | undefined;

  /**
   * <p>The policies other than the stickiness policies.</p>
   * @public
   */
  OtherPolicies?: string[] | undefined;
}

/**
 * <p>Contains information about the security group for the load balancer.</p>
 * @public
 */
export interface AwsElbLoadBalancerSourceSecurityGroup {
  /**
   * <p>The name of the security group.</p>
   * @public
   */
  GroupName?: string | undefined;

  /**
   * <p>The owner of the security group.</p>
   * @public
   */
  OwnerAlias?: string | undefined;
}

/**
 * <p>Contains details about a Classic Load Balancer.</p>
 * @public
 */
export interface AwsElbLoadBalancerDetails {
  /**
   * <p>The list of Availability Zones for the load balancer.</p>
   * @public
   */
  AvailabilityZones?: string[] | undefined;

  /**
   * <p>Information about the configuration of the EC2 instances.</p>
   * @public
   */
  BackendServerDescriptions?: AwsElbLoadBalancerBackendServerDescription[] | undefined;

  /**
   * <p>The name of the Amazon Route 53 hosted zone for the load balancer.</p>
   * @public
   */
  CanonicalHostedZoneName?: string | undefined;

  /**
   * <p>The ID of the Amazon Route 53 hosted zone for the load balancer.</p>
   * @public
   */
  CanonicalHostedZoneNameID?: string | undefined;

  /**
   * <p>Indicates when the load balancer was created.</p>
   *          <p>For more information about the validation and formatting of timestamp fields in Security Hub, see <a href="https://docs.aws.amazon.com/securityhub/1.0/APIReference/Welcome.html#timestamps">Timestamps</a>.</p>
   * @public
   */
  CreatedTime?: string | undefined;

  /**
   * <p>The DNS name of the load balancer.</p>
   * @public
   */
  DnsName?: string | undefined;

  /**
   * <p>Information about the health checks that are conducted on the load balancer.</p>
   * @public
   */
  HealthCheck?: AwsElbLoadBalancerHealthCheck | undefined;

  /**
   * <p>List of EC2 instances for the load balancer.</p>
   * @public
   */
  Instances?: AwsElbLoadBalancerInstance[] | undefined;

  /**
   * <p>The policies that are enabled for the load balancer listeners.</p>
   * @public
   */
  ListenerDescriptions?: AwsElbLoadBalancerListenerDescription[] | undefined;

  /**
   * <p>The attributes for a load balancer.</p>
   * @public
   */
  LoadBalancerAttributes?: AwsElbLoadBalancerAttributes | undefined;

  /**
   * <p>The name of the load balancer.</p>
   * @public
   */
  LoadBalancerName?: string | undefined;

  /**
   * <p>The policies for a load balancer.</p>
   * @public
   */
  Policies?: AwsElbLoadBalancerPolicies | undefined;

  /**
   * <p>The type of load balancer. Only provided if the load balancer is in a VPC.</p>
   *          <p>If <code>Scheme</code> is <code>internet-facing</code>, the load balancer has a public
   *          DNS name that resolves to a public IP address.</p>
   *          <p>If <code>Scheme</code> is <code>internal</code>, the load balancer has a public DNS name
   *          that resolves to a private IP address.</p>
   * @public
   */
  Scheme?: string | undefined;

  /**
   * <p>The security groups for the load balancer. Only provided if the load balancer is in a
   *          VPC.</p>
   * @public
   */
  SecurityGroups?: string[] | undefined;

  /**
   * <p>Information about the security group for the load balancer. This is the security group
   *          that is used for inbound rules.</p>
   * @public
   */
  SourceSecurityGroup?: AwsElbLoadBalancerSourceSecurityGroup | undefined;

  /**
   * <p>The list of subnet identifiers for the load balancer.</p>
   * @public
   */
  Subnets?: string[] | undefined;

  /**
   * <p>The identifier of the VPC for the load balancer.</p>
   * @public
   */
  VpcId?: string | undefined;
}

/**
 * <p>A load balancer attribute.</p>
 * @public
 */
export interface AwsElbv2LoadBalancerAttribute {
  /**
   * <p>The name of the load balancer attribute.</p>
   * @public
   */
  Key?: string | undefined;

  /**
   * <p>The value of the load balancer attribute.</p>
   * @public
   */
  Value?: string | undefined;
}

/**
 * <p>Information about the state of the load balancer.</p>
 * @public
 */
export interface LoadBalancerState {
  /**
   * <p>The state code. The initial state of the load balancer is provisioning.</p>
   *          <p>After the load balancer is fully set up and ready to route traffic, its state is
   *          active.</p>
   *          <p>If the load balancer could not be set up, its state is failed. </p>
   * @public
   */
  Code?: string | undefined;

  /**
   * <p>A description of the state.</p>
   * @public
   */
  Reason?: string | undefined;
}

/**
 * <p>Information about a load balancer.</p>
 * @public
 */
export interface AwsElbv2LoadBalancerDetails {
  /**
   * <p>The Availability Zones for the load balancer.</p>
   * @public
   */
  AvailabilityZones?: AvailabilityZone[] | undefined;

  /**
   * <p>The ID of the Amazon Route 53 hosted zone associated with the load balancer.</p>
   * @public
   */
  CanonicalHostedZoneId?: string | undefined;

  /**
   * <p>Indicates when the load balancer was created.</p>
   *          <p>For more information about the validation and formatting of timestamp fields in Security Hub, see <a href="https://docs.aws.amazon.com/securityhub/1.0/APIReference/Welcome.html#timestamps">Timestamps</a>.</p>
   * @public
   */
  CreatedTime?: string | undefined;

  /**
   * <p>The public DNS name of the load balancer.</p>
   * @public
   */
  DNSName?: string | undefined;

  /**
   * <p>The type of IP addresses used by the subnets for your load balancer. The possible values
   *          are <code>ipv4</code> (for IPv4 addresses) and <code>dualstack</code> (for IPv4 and IPv6
   *          addresses).</p>
   * @public
   */
  IpAddressType?: string | undefined;

  /**
   * <p>The nodes of an Internet-facing load balancer have public IP addresses.</p>
   * @public
   */
  Scheme?: string | undefined;

  /**
   * <p>The IDs of the security groups for the load balancer.</p>
   * @public
   */
  SecurityGroups?: string[] | undefined;

  /**
   * <p>The state of the load balancer.</p>
   * @public
   */
  State?: LoadBalancerState | undefined;

  /**
   * <p>The type of load balancer.</p>
   * @public
   */
  Type?: string | undefined;

  /**
   * <p>The ID of the VPC for the load balancer.</p>
   * @public
   */
  VpcId?: string | undefined;

  /**
   * <p>Attributes of the load balancer.</p>
   * @public
   */
  LoadBalancerAttributes?: AwsElbv2LoadBalancerAttribute[] | undefined;
}

/**
 * <p>
 *             A schema defines the structure of events that are sent to Amazon EventBridge. Schema registries are containers for
 *             schemas. They collect and organize schemas so that your schemas are in logical groups.
 *         </p>
 * @public
 */
export interface AwsEventSchemasRegistryDetails {
  /**
   * <p>
   *             A description of the registry to be created.
   *         </p>
   * @public
   */
  Description?: string | undefined;

  /**
   * <p>
   *             The Amazon Resource Name (ARN) of the registry.
   *         </p>
   * @public
   */
  RegistryArn?: string | undefined;

  /**
   * <p>
   *             The name of the schema registry.
   *         </p>
   * @public
   */
  RegistryName?: string | undefined;
}

/**
 * <p>
 *             Provides details about the Amazon EventBridge event buses that the endpoint is associated with.</p>
 * @public
 */
export interface AwsEventsEndpointEventBusesDetails {
  /**
   * <p>
   *             The Amazon Resource Name (ARN) of the event bus that the endpoint is associated with.</p>
   * @public
   */
  EventBusArn?: string | undefined;
}

/**
 * <p>
 *             Indicates whether replication is enabled or disabled for the endpoint. If enabled, the endpoint can replicate all
 *             events to a secondary Amazon Web Services Region.</p>
 * @public
 */
export interface AwsEventsEndpointReplicationConfigDetails {
  /**
   * <p>
   *             The state of event replication.</p>
   * @public
   */
  State?: string | undefined;
}

/**
 * <p>
 *             Provides details about the primary Amazon Web Services Region of the endpoint.</p>
 * @public
 */
export interface AwsEventsEndpointRoutingConfigFailoverConfigPrimaryDetails {
  /**
   * <p>
   *             The Amazon Resource Name (ARN) of the health check used by the endpoint to determine whether failover is triggered.</p>
   * @public
   */
  HealthCheck?: string | undefined;
}

/**
 * <p>
 *             The Amazon Web Services Region that events are routed to when failover is triggered or event replication is enabled.</p>
 * @public
 */
export interface AwsEventsEndpointRoutingConfigFailoverConfigSecondaryDetails {
  /**
   * <p>
   *             Defines the secondary Region.</p>
   * @public
   */
  Route?: string | undefined;
}

/**
 * <p>
 *             The failover configuration for an endpoint. This includes what triggers failover and what happens when it's triggered.</p>
 * @public
 */
export interface AwsEventsEndpointRoutingConfigFailoverConfigDetails {
  /**
   * <p>
   *             The main Region of the endpoint.</p>
   * @public
   */
  Primary?: AwsEventsEndpointRoutingConfigFailoverConfigPrimaryDetails | undefined;

  /**
   * <p>
   *             The Region that events are routed to when failover is triggered or event replication is enabled.</p>
   * @public
   */
  Secondary?: AwsEventsEndpointRoutingConfigFailoverConfigSecondaryDetails | undefined;
}

/**
 * <p>
 *             Provides details about the routing configuration of the endpoint.</p>
 * @public
 */
export interface AwsEventsEndpointRoutingConfigDetails {
  /**
   * <p>
   *             The failover configuration for an endpoint. This includes what triggers failover and what happens when it's triggered.</p>
   * @public
   */
  FailoverConfig?: AwsEventsEndpointRoutingConfigFailoverConfigDetails | undefined;
}

/**
 * <p>
 *             Provides details about an Amazon EventBridge global endpoint. The endpoint can improve your application’s
 *             availability by making it Regional-fault tolerant.
 *         </p>
 * @public
 */
export interface AwsEventsEndpointDetails {
  /**
   * <p>
   *             The Amazon Resource Name (ARN) of the endpoint.
   *         </p>
   * @public
   */
  Arn?: string | undefined;

  /**
   * <p>
   *             A description of the endpoint.
   *         </p>
   * @public
   */
  Description?: string | undefined;

  /**
   * <p>
   *             The URL subdomain of the endpoint. For example, if <code>EndpointUrl</code> is
   *             <code>https://abcde.veo.endpoints.event.amazonaws.com</code>, then the <code>EndpointId</code> is <code>abcde.veo</code>.</p>
   * @public
   */
  EndpointId?: string | undefined;

  /**
   * <p>
   *             The URL of the endpoint.</p>
   * @public
   */
  EndpointUrl?: string | undefined;

  /**
   * <p>
   *             The event buses being used by the endpoint.</p>
   * @public
   */
  EventBuses?: AwsEventsEndpointEventBusesDetails[] | undefined;

  /**
   * <p>
   *             The name of the endpoint.</p>
   * @public
   */
  Name?: string | undefined;

  /**
   * <p>
   *             Whether event replication was enabled or disabled for this endpoint. The default state is <code>ENABLED</code>, which
   *             means you must supply a <code>RoleArn</code>. If you don't have a <code>RoleArn</code> or you don't want event
   *             replication enabled, set the state to <code>DISABLED</code>.</p>
   * @public
   */
  ReplicationConfig?: AwsEventsEndpointReplicationConfigDetails | undefined;

  /**
   * <p>
   *             The ARN of the role used by event replication for the endpoint.</p>
   * @public
   */
  RoleArn?: string | undefined;

  /**
   * <p>
   *             The routing configuration of the endpoint.</p>
   * @public
   */
  RoutingConfig?: AwsEventsEndpointRoutingConfigDetails | undefined;

  /**
   * <p>
   *             The current state of the endpoint.</p>
   * @public
   */
  State?: string | undefined;

  /**
   * <p>
   *             The reason the endpoint is in its current state.</p>
   * @public
   */
  StateReason?: string | undefined;
}

/**
 * <p>
 *             Provides details about Amazon EventBridge event bus. An event bus is a router that receives events and delivers
 *             them to zero or more destinations, or targets. This can be a custom event bus which you can use to receive events
 *             from your custom applications and services, or it can be a partner event bus which can be matched to a partner event
 *             source.</p>
 * @public
 */
export interface AwsEventsEventbusDetails {
  /**
   * <p>
   *             The Amazon Resource Name (ARN) of the account permitted to write events to the current account.</p>
   * @public
   */
  Arn?: string | undefined;

  /**
   * <p>
   *             The name of the event bus.</p>
   * @public
   */
  Name?: string | undefined;

  /**
   * <p>
   *             The policy that enables the external account to send events to your account.</p>
   * @public
   */
  Policy?: string | undefined;
}

/**
 * <p>
 *             An object that contains information on the status of CloudTrail as a data source for the detector.
 *         </p>
 * @public
 */
export interface AwsGuardDutyDetectorDataSourcesCloudTrailDetails {
  /**
   * <p>
   *             Specifies whether CloudTrail is activated as a data source for the detector.
   *         </p>
   * @public
   */
  Status?: string | undefined;
}

/**
 * <p>
 *             An object that contains information on the status of DNS logs as a data source for the detector.
 *         </p>
 * @public
 */
export interface AwsGuardDutyDetectorDataSourcesDnsLogsDetails {
  /**
   * <p>
   *             Describes whether DNS logs is enabled as a data source for the detector.
   *         </p>
   * @public
   */
  Status?: string | undefined;
}

/**
 * <p>
 *             An object that contains information on the status of VPC Flow Logs as a data source for the detector.
 *         </p>
 * @public
 */
export interface AwsGuardDutyDetectorDataSourcesFlowLogsDetails {
  /**
   * <p>
   *             Describes whether VPC Flow Logs are activated as a data source for the detector.
   *         </p>
   * @public
   */
  Status?: string | undefined;
}

/**
 * <p>
 *             An object that contains information on the status of Kubernetes audit logs as a data source for the detector.
 *         </p>
 * @public
 */
export interface AwsGuardDutyDetectorDataSourcesKubernetesAuditLogsDetails {
  /**
   * <p>
   *             Describes whether Kubernetes audit logs are activated as a data source for the detector.
   *         </p>
   * @public
   */
  Status?: string | undefined;
}

/**
 * <p>
 *             An object that contains information on the status of Kubernetes data sources for the detector.
 *         </p>
 * @public
 */
export interface AwsGuardDutyDetectorDataSourcesKubernetesDetails {
  /**
   * <p>
   *             Describes whether Kubernetes audit logs are activated as a data source for the detector.
   *         </p>
   * @public
   */
  AuditLogs?: AwsGuardDutyDetectorDataSourcesKubernetesAuditLogsDetails | undefined;
}

/**
 * <p>
 *             Describes the configuration of scanning EBS volumes (Malware Protection) as a data source.
 *         </p>
 * @public
 */
export interface AwsGuardDutyDetectorDataSourcesMalwareProtectionScanEc2InstanceWithFindingsEbsVolumesDetails {
  /**
   * <p>
   *             Specifies the reason why scanning EBS volumes (Malware Protection) isn’t activated as a data source.
   *         </p>
   * @public
   */
  Reason?: string | undefined;

  /**
   * <p>
   *             Describes whether scanning EBS volumes is activated as a data source for the detector.
   *         </p>
   * @public
   */
  Status?: string | undefined;
}

/**
 * <p>
 *             Describes the configuration of Malware Protection for EC2 instances with findings.
 *         </p>
 * @public
 */
export interface AwsGuardDutyDetectorDataSourcesMalwareProtectionScanEc2InstanceWithFindingsDetails {
  /**
   * <p>
   *             Describes the configuration of scanning EBS volumes (Malware Protection) as a data source.
   *         </p>
   * @public
   */
  EbsVolumes?: AwsGuardDutyDetectorDataSourcesMalwareProtectionScanEc2InstanceWithFindingsEbsVolumesDetails | undefined;
}

/**
 * <p>
 *             An object that contains information on the status of Malware Protection as a data source for the detector.
 *         </p>
 * @public
 */
export interface AwsGuardDutyDetectorDataSourcesMalwareProtectionDetails {
  /**
   * <p>
   *             Describes the configuration of Malware Protection for EC2 instances with findings.
   *         </p>
   * @public
   */
  ScanEc2InstanceWithFindings?:
    | AwsGuardDutyDetectorDataSourcesMalwareProtectionScanEc2InstanceWithFindingsDetails
    | undefined;

  /**
   * <p>
   *             The GuardDuty Malware Protection service role.
   *         </p>
   * @public
   */
  ServiceRole?: string | undefined;
}

/**
 * <p>
 *             An object that contains information on the status of S3 data event logs as a data source for the detector.
 *         </p>
 * @public
 */
export interface AwsGuardDutyDetectorDataSourcesS3LogsDetails {
  /**
   * <p>
   *             A value that describes whether S3 data event logs are automatically enabled for new members of an organization.
   *         </p>
   * @public
   */
  Status?: string | undefined;
}

/**
 * <p>
 *             Describes which data sources are activated for the detector.
 *         </p>
 * @public
 */
export interface AwsGuardDutyDetectorDataSourcesDetails {
  /**
   * <p>
   *             An object that contains information on the status of CloudTrail as a data source for the detector.
   *         </p>
   * @public
   */
  CloudTrail?: AwsGuardDutyDetectorDataSourcesCloudTrailDetails | undefined;

  /**
   * <p>
   *             An object that contains information on the status of DNS logs as a data source for the detector.
   *         </p>
   * @public
   */
  DnsLogs?: AwsGuardDutyDetectorDataSourcesDnsLogsDetails | undefined;

  /**
   * <p>
   *             An object that contains information on the status of VPC Flow Logs as a data source for the detector.
   *         </p>
   * @public
   */
  FlowLogs?: AwsGuardDutyDetectorDataSourcesFlowLogsDetails | undefined;

  /**
   * <p>
   *             An object that contains information on the status of Kubernetes data sources for the detector.
   *         </p>
   * @public
   */
  Kubernetes?: AwsGuardDutyDetectorDataSourcesKubernetesDetails | undefined;

  /**
   * <p>
   *             An object that contains information on the status of Malware Protection as a data source for the detector.
   *         </p>
   * @public
   */
  MalwareProtection?: AwsGuardDutyDetectorDataSourcesMalwareProtectionDetails | undefined;

  /**
   * <p>
   *             An object that contains information on the status of S3 Data event logs as a data source for the detector.
   *         </p>
   * @public
   */
  S3Logs?: AwsGuardDutyDetectorDataSourcesS3LogsDetails | undefined;
}

/**
 * <p>
 *             Describes which features are activated for the detector.
 *         </p>
 * @public
 */
export interface AwsGuardDutyDetectorFeaturesDetails {
  /**
   * <p>
   *             Indicates the name of the feature that is activated for the detector.
   *         </p>
   * @public
   */
  Name?: string | undefined;

  /**
   * <p>
   *             Indicates the status of the feature that is activated for the detector.
   *         </p>
   * @public
   */
  Status?: string | undefined;
}

/**
 * <p>
 *             Provides details about an Amazon GuardDuty detector. A detector is an object that represents the GuardDuty service. A detector is required for GuardDuty to become operational.
 *         </p>
 * @public
 */
export interface AwsGuardDutyDetectorDetails {
  /**
   * <p>
   *             Describes which data sources are activated for the detector.
   *         </p>
   * @public
   */
  DataSources?: AwsGuardDutyDetectorDataSourcesDetails | undefined;

  /**
   * <p>
   *             Describes which features are activated for the detector.
   *         </p>
   * @public
   */
  Features?: AwsGuardDutyDetectorFeaturesDetails[] | undefined;

  /**
   * <p>
   *             The publishing frequency of the finding.
   *         </p>
   * @public
   */
  FindingPublishingFrequency?: string | undefined;

  /**
   * <p>
   *             The GuardDuty service role.
   *         </p>
   * @public
   */
  ServiceRole?: string | undefined;

  /**
   * <p>
   *             The activation status of the detector.
   *         </p>
   * @public
   */
  Status?: string | undefined;
}

/**
 * <p>Attributes of the session that the key was used for.</p>
 * @public
 */
export interface AwsIamAccessKeySessionContextAttributes {
  /**
   * <p>Indicates whether the session used multi-factor authentication (MFA).</p>
   * @public
   */
  MfaAuthenticated?: boolean | undefined;

  /**
   * <p>Indicates when the session was created.</p>
   *          <p>For more information about the validation and formatting of timestamp fields in Security Hub, see <a href="https://docs.aws.amazon.com/securityhub/1.0/APIReference/Welcome.html#timestamps">Timestamps</a>.</p>
   * @public
   */
  CreationDate?: string | undefined;
}

/**
 * <p>Information about the entity that created the session.</p>
 * @public
 */
export interface AwsIamAccessKeySessionContextSessionIssuer {
  /**
   * <p>The type of principal (user, role, or group) that created the session.</p>
   * @public
   */
  Type?: string | undefined;

  /**
   * <p>The principal ID of the principal (user, role, or group) that created the
   *          session.</p>
   * @public
   */
  PrincipalId?: string | undefined;

  /**
   * <p>The ARN of the session.</p>
   * @public
   */
  Arn?: string | undefined;

  /**
   * <p>The identifier of the Amazon Web Services account that created the session.</p>
   * @public
   */
  AccountId?: string | undefined;

  /**
   * <p>The name of the principal that created the session.</p>
   * @public
   */
  UserName?: string | undefined;
}

/**
 * <p>Provides information about the session that the key was used for.</p>
 * @public
 */
export interface AwsIamAccessKeySessionContext {
  /**
   * <p>Attributes of the session that the key was used for.</p>
   * @public
   */
  Attributes?: AwsIamAccessKeySessionContextAttributes | undefined;

  /**
   * <p>Information about the entity that created the session.</p>
   * @public
   */
  SessionIssuer?: AwsIamAccessKeySessionContextSessionIssuer | undefined;
}

/**
 * @public
 * @enum
 */
export const AwsIamAccessKeyStatus = {
  ACTIVE: "Active",
  INACTIVE: "Inactive",
} as const;

/**
 * @public
 */
export type AwsIamAccessKeyStatus = (typeof AwsIamAccessKeyStatus)[keyof typeof AwsIamAccessKeyStatus];

/**
 * <p>IAM access key details related to a finding.</p>
 * @public
 */
export interface AwsIamAccessKeyDetails {
  /**
   * <p>The user associated with the IAM access key related to a finding.</p>
   *          <p>The <code>UserName</code> parameter has been replaced with the
   *             <code>PrincipalName</code> parameter because access keys can also be assigned to
   *          principals that are not IAM users.</p>
   *
   * @deprecated
   * @public
   */
  UserName?: string | undefined;

  /**
   * <p>The status of the IAM access key related to a finding.</p>
   * @public
   */
  Status?: AwsIamAccessKeyStatus | undefined;

  /**
   * <p>Indicates when the IAM access key was created.</p>
   *          <p>For more information about the validation and formatting of timestamp fields in Security Hub, see <a href="https://docs.aws.amazon.com/securityhub/1.0/APIReference/Welcome.html#timestamps">Timestamps</a>.</p>
   * @public
   */
  CreatedAt?: string | undefined;

  /**
   * <p>The ID of the principal associated with an access key.</p>
   * @public
   */
  PrincipalId?: string | undefined;

  /**
   * <p>The type of principal associated with an access key.</p>
   * @public
   */
  PrincipalType?: string | undefined;

  /**
   * <p>The name of the principal.</p>
   * @public
   */
  PrincipalName?: string | undefined;

  /**
   * <p>The Amazon Web Services account ID of the account for the key.</p>
   * @public
   */
  AccountId?: string | undefined;

  /**
   * <p>The identifier of the access key.</p>
   * @public
   */
  AccessKeyId?: string | undefined;

  /**
   * <p>Information about the session that the key was used for.</p>
   * @public
   */
  SessionContext?: AwsIamAccessKeySessionContext | undefined;
}

/**
 * <p>A managed policy that is attached to an IAM principal.</p>
 * @public
 */
export interface AwsIamAttachedManagedPolicy {
  /**
   * <p>The name of the policy.</p>
   * @public
   */
  PolicyName?: string | undefined;

  /**
   * <p>The ARN of the policy.</p>
   * @public
   */
  PolicyArn?: string | undefined;
}

/**
 * <p>A managed policy that is attached to the IAM group.</p>
 * @public
 */
export interface AwsIamGroupPolicy {
  /**
   * <p>The name of the policy.</p>
   * @public
   */
  PolicyName?: string | undefined;
}

/**
 * <p>Contains details about an IAM group.</p>
 * @public
 */
export interface AwsIamGroupDetails {
  /**
   * <p>A list of the managed policies that are attached to the IAM group.</p>
   * @public
   */
  AttachedManagedPolicies?: AwsIamAttachedManagedPolicy[] | undefined;

  /**
   * <p>Indicates when the IAM group was created.</p>
   *          <p>For more information about the validation and formatting of timestamp fields in Security Hub, see <a href="https://docs.aws.amazon.com/securityhub/1.0/APIReference/Welcome.html#timestamps">Timestamps</a>.</p>
   * @public
   */
  CreateDate?: string | undefined;

  /**
   * <p>The identifier of the IAM group.</p>
   * @public
   */
  GroupId?: string | undefined;

  /**
   * <p>The name of the IAM group.</p>
   * @public
   */
  GroupName?: string | undefined;

  /**
   * <p>The list of inline policies that are embedded in the group.</p>
   * @public
   */
  GroupPolicyList?: AwsIamGroupPolicy[] | undefined;

  /**
   * <p>The path to the group.</p>
   * @public
   */
  Path?: string | undefined;
}

/**
 * <p>Information about a role associated with an instance profile.</p>
 * @public
 */
export interface AwsIamInstanceProfileRole {
  /**
   * <p>The ARN of the role.</p>
   * @public
   */
  Arn?: string | undefined;

  /**
   * <p>The policy that grants an entity permission to assume the role.</p>
   * @public
   */
  AssumeRolePolicyDocument?: string | undefined;

  /**
   * <p>Indicates when the role was created.</p>
   *          <p>For more information about the validation and formatting of timestamp fields in Security Hub, see <a href="https://docs.aws.amazon.com/securityhub/1.0/APIReference/Welcome.html#timestamps">Timestamps</a>.</p>
   * @public
   */
  CreateDate?: string | undefined;

  /**
   * <p>The path to the role.</p>
   * @public
   */
  Path?: string | undefined;

  /**
   * <p>The identifier of the role.</p>
   * @public
   */
  RoleId?: string | undefined;

  /**
   * <p>The name of the role.</p>
   * @public
   */
  RoleName?: string | undefined;
}

/**
 * <p>Information about an instance profile.</p>
 * @public
 */
export interface AwsIamInstanceProfile {
  /**
   * <p>The ARN of the instance profile.</p>
   * @public
   */
  Arn?: string | undefined;

  /**
   * <p>Indicates when the instance profile was created.</p>
   *          <p>For more information about the validation and formatting of timestamp fields in Security Hub, see <a href="https://docs.aws.amazon.com/securityhub/1.0/APIReference/Welcome.html#timestamps">Timestamps</a>.</p>
   * @public
   */
  CreateDate?: string | undefined;

  /**
   * <p>The identifier of the instance profile.</p>
   * @public
   */
  InstanceProfileId?: string | undefined;

  /**
   * <p>The name of the instance profile.</p>
   * @public
   */
  InstanceProfileName?: string | undefined;

  /**
   * <p>The path to the instance profile.</p>
   * @public
   */
  Path?: string | undefined;

  /**
   * <p>The roles associated with the instance profile.</p>
   * @public
   */
  Roles?: AwsIamInstanceProfileRole[] | undefined;
}

/**
 * <p>Information about the policy used to set the permissions boundary for an IAM
 *          principal.</p>
 * @public
 */
export interface AwsIamPermissionsBoundary {
  /**
   * <p>The ARN of the policy used to set the permissions boundary.</p>
   * @public
   */
  PermissionsBoundaryArn?: string | undefined;

  /**
   * <p>The usage type for the permissions boundary.</p>
   * @public
   */
  PermissionsBoundaryType?: string | undefined;
}

/**
 * <p>A version of an IAM policy.</p>
 * @public
 */
export interface AwsIamPolicyVersion {
  /**
   * <p>The identifier of the policy version.</p>
   * @public
   */
  VersionId?: string | undefined;

  /**
   * <p>Whether the version is the default version.</p>
   * @public
   */
  IsDefaultVersion?: boolean | undefined;

  /**
   * <p>Indicates when the version was created.</p>
   *          <p>For more information about the validation and formatting of timestamp fields in Security Hub, see <a href="https://docs.aws.amazon.com/securityhub/1.0/APIReference/Welcome.html#timestamps">Timestamps</a>.</p>
   * @public
   */
  CreateDate?: string | undefined;
}

/**
 * <p>Represents an IAM permissions policy.</p>
 * @public
 */
export interface AwsIamPolicyDetails {
  /**
   * <p>The number of users, groups, and roles that the policy is attached to.</p>
   * @public
   */
  AttachmentCount?: number | undefined;

  /**
   * <p>When the policy was created.</p>
   *          <p>For more information about the validation and formatting of timestamp fields in Security Hub, see <a href="https://docs.aws.amazon.com/securityhub/1.0/APIReference/Welcome.html#timestamps">Timestamps</a>.</p>
   * @public
   */
  CreateDate?: string | undefined;

  /**
   * <p>The identifier of the default version of the policy.</p>
   * @public
   */
  DefaultVersionId?: string | undefined;

  /**
   * <p>A description of the policy.</p>
   * @public
   */
  Description?: string | undefined;

  /**
   * <p>Whether the policy can be attached to a user, group, or role.</p>
   * @public
   */
  IsAttachable?: boolean | undefined;

  /**
   * <p>The path to the policy.</p>
   * @public
   */
  Path?: string | undefined;

  /**
   * <p>The number of users and roles that use the policy to set the permissions
   *          boundary.</p>
   * @public
   */
  PermissionsBoundaryUsageCount?: number | undefined;

  /**
   * <p>The unique identifier of the policy.</p>
   * @public
   */
  PolicyId?: string | undefined;

  /**
   * <p>The name of the policy.</p>
   * @public
   */
  PolicyName?: string | undefined;

  /**
   * <p>List of versions of the policy.</p>
   * @public
   */
  PolicyVersionList?: AwsIamPolicyVersion[] | undefined;

  /**
   * <p>When the policy was most recently updated.</p>
   *          <p>For more information about the validation and formatting of timestamp fields in Security Hub, see <a href="https://docs.aws.amazon.com/securityhub/1.0/APIReference/Welcome.html#timestamps">Timestamps</a>.</p>
   * @public
   */
  UpdateDate?: string | undefined;
}

/**
 * <p>An inline policy that is embedded in the role.</p>
 * @public
 */
export interface AwsIamRolePolicy {
  /**
   * <p>The name of the policy.</p>
   * @public
   */
  PolicyName?: string | undefined;
}

/**
 * <p>Contains information about an IAM role, including all of the role's policies.</p>
 * @public
 */
export interface AwsIamRoleDetails {
  /**
   * <p>The trust policy that grants permission to assume the role.</p>
   * @public
   */
  AssumeRolePolicyDocument?: string | undefined;

  /**
   * <p>The list of the managed policies that are attached to the role.</p>
   * @public
   */
  AttachedManagedPolicies?: AwsIamAttachedManagedPolicy[] | undefined;

  /**
   * <p>Indicates when the role was created.</p>
   *          <p>For more information about the validation and formatting of timestamp fields in Security Hub, see <a href="https://docs.aws.amazon.com/securityhub/1.0/APIReference/Welcome.html#timestamps">Timestamps</a>.</p>
   * @public
   */
  CreateDate?: string | undefined;

  /**
   * <p>The list of instance profiles that contain this role.</p>
   * @public
   */
  InstanceProfileList?: AwsIamInstanceProfile[] | undefined;

  /**
   * <p>Information about the policy used to set the permissions boundary for an IAM
   *          principal.</p>
   * @public
   */
  PermissionsBoundary?: AwsIamPermissionsBoundary | undefined;

  /**
   * <p>The stable and unique string identifying the role.</p>
   * @public
   */
  RoleId?: string | undefined;

  /**
   * <p>The friendly name that identifies the role.</p>
   * @public
   */
  RoleName?: string | undefined;

  /**
   * <p>The list of inline policies that are embedded in the role.</p>
   * @public
   */
  RolePolicyList?: AwsIamRolePolicy[] | undefined;

  /**
   * <p>The maximum session duration (in seconds) that you want to set for the specified role.</p>
   * @public
   */
  MaxSessionDuration?: number | undefined;

  /**
   * <p>The path to the role.</p>
   * @public
   */
  Path?: string | undefined;
}

/**
 * <p>Information about an inline policy that is embedded in the user.</p>
 * @public
 */
export interface AwsIamUserPolicy {
  /**
   * <p>The name of the policy.</p>
   * @public
   */
  PolicyName?: string | undefined;
}

/**
 * <p>Information about an IAM user.</p>
 * @public
 */
export interface AwsIamUserDetails {
  /**
   * <p>A list of the managed policies that are attached to the user.</p>
   * @public
   */
  AttachedManagedPolicies?: AwsIamAttachedManagedPolicy[] | undefined;

  /**
   * <p>Indicates when the user was created.</p>
   *          <p>For more information about the validation and formatting of timestamp fields in Security Hub, see <a href="https://docs.aws.amazon.com/securityhub/1.0/APIReference/Welcome.html#timestamps">Timestamps</a>.</p>
   * @public
   */
  CreateDate?: string | undefined;

  /**
   * <p>A list of IAM groups that the user belongs to.</p>
   * @public
   */
  GroupList?: string[] | undefined;

  /**
   * <p>The path to the user.</p>
   * @public
   */
  Path?: string | undefined;

  /**
   * <p>The permissions boundary for the user.</p>
   * @public
   */
  PermissionsBoundary?: AwsIamPermissionsBoundary | undefined;

  /**
   * <p>The unique identifier for the user.</p>
   * @public
   */
  UserId?: string | undefined;

  /**
   * <p>The name of the user.</p>
   * @public
   */
  UserName?: string | undefined;

  /**
   * <p>The list of inline policies that are embedded in the user.</p>
   * @public
   */
  UserPolicyList?: AwsIamUserPolicy[] | undefined;
}

/**
 * <p>Provides information about stream encryption.
 *       </p>
 * @public
 */
export interface AwsKinesisStreamStreamEncryptionDetails {
  /**
   * <p>The encryption type to use.
   *       </p>
   * @public
   */
  EncryptionType?: string | undefined;

  /**
   * <p>The globally unique identifier for the customer-managed KMS key to use for encryption. </p>
   * @public
   */
  KeyId?: string | undefined;
}

/**
 * <p>Provides information about an Amazon Kinesis data stream.
 *       </p>
 * @public
 */
export interface AwsKinesisStreamDetails {
  /**
   * <p>The name of the Kinesis stream. If you don't specify a name, CloudFront generates a unique
   * physical ID and uses that ID for the stream name.
   *       </p>
   * @public
   */
  Name?: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the Kinesis data stream.
   *       </p>
   * @public
   */
  Arn?: string | undefined;

  /**
   * <p>When specified, enables or updates server-side encryption using an KMS key for a specified stream.
   * Removing this property from your stack template and updating your stack disables encryption.
   *       </p>
   * @public
   */
  StreamEncryption?: AwsKinesisStreamStreamEncryptionDetails | undefined;

  /**
   * <p>The number of shards that the stream uses.
   *       </p>
   * @public
   */
  ShardCount?: number | undefined;

  /**
   * <p>The number of hours for the data records that are stored in shards to remain accessible.
   *       </p>
   * @public
   */
  RetentionPeriodHours?: number | undefined;
}

/**
 * <p>Contains metadata about an KMS key.</p>
 * @public
 */
export interface AwsKmsKeyDetails {
  /**
   * <p>The twelve-digit account ID of the Amazon Web Services account that owns the KMS key.</p>
   * @public
   */
  AWSAccountId?: string | undefined;

  /**
   * <p>Indicates when the KMS key was created.</p>
   *          <p>For more information about the validation and formatting of timestamp fields in Security Hub, see <a href="https://docs.aws.amazon.com/securityhub/1.0/APIReference/Welcome.html#timestamps">Timestamps</a>.</p>
   * @public
   */
  CreationDate?: number | undefined;

  /**
   * <p>The globally unique identifier for the KMS key.</p>
   * @public
   */
  KeyId?: string | undefined;

  /**
   * <p>The manager of the KMS key. KMS keys in your Amazon Web Services account are either customer managed or Amazon Web Services managed.</p>
   * @public
   */
  KeyManager?: string | undefined;

  /**
   * <p>The state of the KMS key. Valid values are as follows:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>Disabled</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>Enabled</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>PendingDeletion</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>PendingImport</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>Unavailable</code>
   *                </p>
   *             </li>
   *          </ul>
   * @public
   */
  KeyState?: string | undefined;

  /**
   * <p>The source of the KMS key material.</p>
   *          <p>When this value is <code>AWS_KMS</code>, KMS created the key material.</p>
   *          <p>When this value is <code>EXTERNAL</code>, the key material was imported from your
   *          existing key management infrastructure or the KMS key lacks key material.</p>
   *          <p>When this value is <code>AWS_CLOUDHSM</code>, the key material was created in the CloudHSM cluster associated with a custom key store.</p>
   * @public
   */
  Origin?: string | undefined;

  /**
   * <p>A description of the KMS key.</p>
   * @public
   */
  Description?: string | undefined;

  /**
   * <p>Whether the key has key rotation enabled.</p>
   * @public
   */
  KeyRotationStatus?: boolean | undefined;
}

/**
 * <p>The code for the Lambda function. You can specify either an object in Amazon S3, or upload a deployment package directly.</p>
 * @public
 */
export interface AwsLambdaFunctionCode {
  /**
   * <p>An Amazon S3 bucket in the same Amazon Web Services Region as your function. The bucket can be in a different Amazon Web Services account.</p>
   * @public
   */
  S3Bucket?: string | undefined;

  /**
   * <p>The Amazon S3 key of the deployment package.</p>
   * @public
   */
  S3Key?: string | undefined;

  /**
   * <p>For versioned objects, the version of the deployment package object to use.</p>
   * @public
   */
  S3ObjectVersion?: string | undefined;

  /**
   * <p>The base64-encoded contents of the deployment package. Amazon Web Services SDK and Amazon Web Services CLI clients handle the encoding for you.</p>
   * @public
   */
  ZipFile?: string | undefined;
}

/**
 * <p>The dead-letter queue for failed asynchronous invocations.</p>
 * @public
 */
export interface AwsLambdaFunctionDeadLetterConfig {
  /**
   * <p>The ARN of an SQS queue or SNS topic.</p>
   * @public
   */
  TargetArn?: string | undefined;
}

/**
 * <p>Error messages for environment variables that could not be applied.</p>
 * @public
 */
export interface AwsLambdaFunctionEnvironmentError {
  /**
   * <p>The error code.</p>
   * @public
   */
  ErrorCode?: string | undefined;

  /**
   * <p>The error message.</p>
   * @public
   */
  Message?: string | undefined;
}

/**
 * <p>A function's environment variable settings.</p>
 * @public
 */
export interface AwsLambdaFunctionEnvironment {
  /**
   * <p>Environment variable key-value pairs.</p>
   * @public
   */
  Variables?: Record<string, string> | undefined;

  /**
   * <p>An <code>AwsLambdaFunctionEnvironmentError</code> object.</p>
   * @public
   */
  Error?: AwsLambdaFunctionEnvironmentError | undefined;
}

/**
 * <p>An Lambda layer.</p>
 * @public
 */
export interface AwsLambdaFunctionLayer {
  /**
   * <p>The ARN of the function layer.</p>
   * @public
   */
  Arn?: string | undefined;

  /**
   * <p>The size of the layer archive in bytes.</p>
   * @public
   */
  CodeSize?: number | undefined;
}

/**
 * <p>The function's X-Ray tracing configuration.</p>
 * @public
 */
export interface AwsLambdaFunctionTracingConfig {
  /**
   * <p>The tracing mode.</p>
   * @public
   */
  Mode?: string | undefined;
}

/**
 * <p>The VPC security groups and subnets that are attached to a Lambda function.</p>
 * @public
 */
export interface AwsLambdaFunctionVpcConfig {
  /**
   * <p>A list of VPC security groups IDs.</p>
   * @public
   */
  SecurityGroupIds?: string[] | undefined;

  /**
   * <p>A list of VPC subnet IDs.</p>
   * @public
   */
  SubnetIds?: string[] | undefined;

  /**
   * <p>The ID of the VPC.</p>
   * @public
   */
  VpcId?: string | undefined;
}

/**
 * <p>Details about an Lambda function's configuration.</p>
 * @public
 */
export interface AwsLambdaFunctionDetails {
  /**
   * <p>An <code>AwsLambdaFunctionCode</code> object.</p>
   * @public
   */
  Code?: AwsLambdaFunctionCode | undefined;

  /**
   * <p>The SHA256 hash of the function's deployment package.</p>
   * @public
   */
  CodeSha256?: string | undefined;

  /**
   * <p>The function's dead letter queue.</p>
   * @public
   */
  DeadLetterConfig?: AwsLambdaFunctionDeadLetterConfig | undefined;

  /**
   * <p>The function's environment variables.</p>
   * @public
   */
  Environment?: AwsLambdaFunctionEnvironment | undefined;

  /**
   * <p>The name of the function.</p>
   * @public
   */
  FunctionName?: string | undefined;

  /**
   * <p>The function that Lambda calls to begin executing your function.</p>
   * @public
   */
  Handler?: string | undefined;

  /**
   * <p>The KMS key that is used to encrypt the function's environment variables. This key is only returned if you've configured a customer managed customer managed key.</p>
   * @public
   */
  KmsKeyArn?: string | undefined;

  /**
   * <p>Indicates when the function was last updated.</p>
   *          <p>For more information about the validation and formatting of timestamp fields in Security Hub, see <a href="https://docs.aws.amazon.com/securityhub/1.0/APIReference/Welcome.html#timestamps">Timestamps</a>.</p>
   * @public
   */
  LastModified?: string | undefined;

  /**
   * <p>The function's layers.</p>
   * @public
   */
  Layers?: AwsLambdaFunctionLayer[] | undefined;

  /**
   * <p>For Lambda@Edge functions, the ARN of the master function.</p>
   * @public
   */
  MasterArn?: string | undefined;

  /**
   * <p>The memory that is allocated to the function.</p>
   * @public
   */
  MemorySize?: number | undefined;

  /**
   * <p>The latest updated revision of the function or alias.</p>
   * @public
   */
  RevisionId?: string | undefined;

  /**
   * <p>The function's execution role.</p>
   * @public
   */
  Role?: string | undefined;

  /**
   * <p>The runtime environment for the Lambda function.</p>
   * @public
   */
  Runtime?: string | undefined;

  /**
   * <p>The amount of time that Lambda allows a function to run before stopping it.</p>
   * @public
   */
  Timeout?: number | undefined;

  /**
   * <p>The function's X-Ray tracing configuration.</p>
   * @public
   */
  TracingConfig?: AwsLambdaFunctionTracingConfig | undefined;

  /**
   * <p>The function's networking configuration.</p>
   * @public
   */
  VpcConfig?: AwsLambdaFunctionVpcConfig | undefined;

  /**
   * <p>The version of the Lambda function.</p>
   * @public
   */
  Version?: string | undefined;

  /**
   * <p>The instruction set architecture that the function uses. Valid values are <code>x86_64</code> or
   * <code>arm64</code>.</p>
   * @public
   */
  Architectures?: string[] | undefined;

  /**
   * <p>The type of deployment package that's used to deploy the function code to Lambda. Set to <code>Image</code> for a container image and <code>Zip</code>  for a .zip file archive.
   *       </p>
   * @public
   */
  PackageType?: string | undefined;
}

/**
 * <p>Details about a Lambda layer version.</p>
 * @public
 */
export interface AwsLambdaLayerVersionDetails {
  /**
   * <p>The version number.</p>
   * @public
   */
  Version?: number | undefined;

  /**
   * <p>The layer's compatible <a href="https://docs.aws.amazon.com/lambda/latest/dg/lambda-runtimes.html">function runtimes</a>.</p>
   *          <p>The following list includes deprecated runtimes. For more information, see <a href="https://docs.aws.amazon.com/lambda/latest/dg/lambda-runtimes.html#runtime-support-policy">Runtime deprecation policy</a> in the <i>Lambda Developer Guide</i>.</p>
   *          <p>Array Members: Maximum number of 5 items.</p>
   *          <p>Valid Values: <code>nodejs | nodejs4.3 | nodejs6.10 | nodejs8.10 | nodejs10.x | nodejs12.x | nodejs14.x | nodejs16.x | java8 | java8.al2 | java11 | python2.7 | python3.6 | python3.7 | python3.8 | python3.9 | dotnetcore1.0 | dotnetcore2.0 | dotnetcore2.1 | dotnetcore3.1 | dotnet6 | nodejs4.3-edge | go1.x | ruby2.5 | ruby2.7 | provided | provided.al2 | nodejs18.x | python3.10 | java17 | ruby3.2 | python3.11 | nodejs20.x | provided.al2023 | python3.12 | java21</code>
   *          </p>
   * @public
   */
  CompatibleRuntimes?: string[] | undefined;

  /**
   * <p>Indicates when the version was created.</p>
   *          <p>For more information about the validation and formatting of timestamp fields in Security Hub, see <a href="https://docs.aws.amazon.com/securityhub/1.0/APIReference/Welcome.html#timestamps">Timestamps</a>.</p>
   * @public
   */
  CreatedDate?: string | undefined;
}

/**
 * <p>
 *             Details for SASL/IAM client authentication.</p>
 * @public
 */
export interface AwsMskClusterClusterInfoClientAuthenticationSaslIamDetails {
  /**
   * <p>
   *             Indicates whether SASL/IAM authentication is enabled or not.</p>
   * @public
   */
  Enabled?: boolean | undefined;
}

/**
 * <p>
 *             Details for SASL/SCRAM client authentication.</p>
 * @public
 */
export interface AwsMskClusterClusterInfoClientAuthenticationSaslScramDetails {
  /**
   * <p>
   *             Indicates whether SASL/SCRAM authentication is enabled or not.</p>
   * @public
   */
  Enabled?: boolean | undefined;
}

/**
 * <p>
 *             Provides details for client authentication using SASL.</p>
 * @public
 */
export interface AwsMskClusterClusterInfoClientAuthenticationSaslDetails {
  /**
   * <p>
   *             Provides details for SASL client authentication using IAM. </p>
   * @public
   */
  Iam?: AwsMskClusterClusterInfoClientAuthenticationSaslIamDetails | undefined;

  /**
   * <p>
   *             Details for SASL client authentication using SCRAM.</p>
   * @public
   */
  Scram?: AwsMskClusterClusterInfoClientAuthenticationSaslScramDetails | undefined;
}

/**
 * <p>
 *             Provides details for client authentication using TLS.</p>
 * @public
 */
export interface AwsMskClusterClusterInfoClientAuthenticationTlsDetails {
  /**
   * <p>
   *             List of Amazon Web Services Private CA Amazon Resource Names (ARNs). Amazon Web Services Private CA enables creation of
   * private certificate authority (CA) hierarchies, including root and subordinate CAs, without the investment and maintenance costs
   * of operating an on-premises CA.</p>
   * @public
   */
  CertificateAuthorityArnList?: string[] | undefined;

  /**
   * <p>
   *             Indicates whether TLS authentication is enabled or not.</p>
   * @public
   */
  Enabled?: boolean | undefined;
}

/**
 * <p>
 *             Provides details for allowing no client authentication.
 *         </p>
 * @public
 */
export interface AwsMskClusterClusterInfoClientAuthenticationUnauthenticatedDetails {
  /**
   * <p>
   *             Indicates whether unauthenticated is allowed or not.</p>
   * @public
   */
  Enabled?: boolean | undefined;
}

/**
 * <p>
 *             Provides details about different modes of client authentication.</p>
 * @public
 */
export interface AwsMskClusterClusterInfoClientAuthenticationDetails {
  /**
   * <p>
   *             Provides details for client authentication using SASL.</p>
   * @public
   */
  Sasl?: AwsMskClusterClusterInfoClientAuthenticationSaslDetails | undefined;

  /**
   * <p>
   *             Provides details for allowing no client authentication.</p>
   * @public
   */
  Unauthenticated?: AwsMskClusterClusterInfoClientAuthenticationUnauthenticatedDetails | undefined;

  /**
   * <p>
   *             Provides details for client authentication using TLS.</p>
   * @public
   */
  Tls?: AwsMskClusterClusterInfoClientAuthenticationTlsDetails | undefined;
}

/**
 * <p>
 *             The data-volume encryption details. You can't update encryption at rest settings for existing clusters.</p>
 * @public
 */
export interface AwsMskClusterClusterInfoEncryptionInfoEncryptionAtRestDetails {
  /**
   * <p>
   *             The Amazon Resource Name (ARN) of the KMS key for encrypting data at rest. If you don't specify a
   * KMS key, MSK creates one for you and uses it.</p>
   * @public
   */
  DataVolumeKMSKeyId?: string | undefined;
}

/**
 * <p>
 *             The settings for encrypting data in transit.</p>
 * @public
 */
export interface AwsMskClusterClusterInfoEncryptionInfoEncryptionInTransitDetails {
  /**
   * <p>
   *             When set to <code>true</code>, it indicates that data communication among the broker nodes of the cluster is
   *             encrypted. When set to <code>false</code>, the communication happens in plain text. The default value is
   *             <code>true</code>.</p>
   * @public
   */
  InCluster?: boolean | undefined;

  /**
   * <p>
   *             Indicates the encryption setting for data in transit between clients and brokers.</p>
   * @public
   */
  ClientBroker?: string | undefined;
}

/**
 * <p>
 *             Includes encryption-related information, such as the KMS key used for encrypting data at rest and
 * whether you want MSK to encrypt your data in transit.</p>
 * @public
 */
export interface AwsMskClusterClusterInfoEncryptionInfoDetails {
  /**
   * <p>
   *             The settings for encrypting data in transit.</p>
   * @public
   */
  EncryptionInTransit?: AwsMskClusterClusterInfoEncryptionInfoEncryptionInTransitDetails | undefined;

  /**
   * <p>
   *             The data-volume encryption details. You can't update encryption at rest settings for existing clusters.</p>
   * @public
   */
  EncryptionAtRest?: AwsMskClusterClusterInfoEncryptionInfoEncryptionAtRestDetails | undefined;
}

/**
 * <p>
 *             Provide details about an Amazon Managed Streaming for Apache Kafka (Amazon MSK) cluster.</p>
 * @public
 */
export interface AwsMskClusterClusterInfoDetails {
  /**
   * <p>
   *             Includes encryption-related information, such as the KMS key used for encrypting data at rest and
   * whether you want Amazon MSK to encrypt your data in transit.</p>
   * @public
   */
  EncryptionInfo?: AwsMskClusterClusterInfoEncryptionInfoDetails | undefined;

  /**
   * <p>
   *             The current version of the cluster.</p>
   * @public
   */
  CurrentVersion?: string | undefined;

  /**
   * <p>
   *             The number of broker nodes in the cluster.</p>
   * @public
   */
  NumberOfBrokerNodes?: number | undefined;

  /**
   * <p>
   *             The name of the cluster.</p>
   * @public
   */
  ClusterName?: string | undefined;

  /**
   * <p>
   *             Provides information for different modes of client authentication.</p>
   * @public
   */
  ClientAuthentication?: AwsMskClusterClusterInfoClientAuthenticationDetails | undefined;

  /**
   * <p>
   *             Specifies the level of monitoring for the cluster.
   *         </p>
   * @public
   */
  EnhancedMonitoring?: string | undefined;
}

/**
 * <p>
 *             Provides details about an Amazon Managed Streaming for Apache Kafka (Amazon MSK) cluster.
 *         </p>
 * @public
 */
export interface AwsMskClusterDetails {
  /**
   * <p>
   *             Provides information about a cluster.</p>
   * @public
   */
  ClusterInfo?: AwsMskClusterClusterInfoDetails | undefined;
}

/**
 * <p>A public subnet that Network Firewall uses for the firewall.</p>
 * @public
 */
export interface AwsNetworkFirewallFirewallSubnetMappingsDetails {
  /**
   * <p>The identifier of the subnet</p>
   * @public
   */
  SubnetId?: string | undefined;
}

/**
 * <p>Details about an Network Firewall firewall.</p>
 * @public
 */
export interface AwsNetworkFirewallFirewallDetails {
  /**
   * <p>Whether the firewall is protected from deletion. If set to <code>true</code>, then the firewall cannot be deleted.</p>
   * @public
   */
  DeleteProtection?: boolean | undefined;

  /**
   * <p>A description of the firewall.</p>
   * @public
   */
  Description?: string | undefined;

  /**
   * <p>The ARN of the firewall.</p>
   * @public
   */
  FirewallArn?: string | undefined;

  /**
   * <p>The identifier of the firewall.</p>
   * @public
   */
  FirewallId?: string | undefined;

  /**
   * <p>A descriptive name of the firewall.</p>
   * @public
   */
  FirewallName?: string | undefined;

  /**
   * <p>The ARN of the firewall policy.</p>
   * @public
   */
  FirewallPolicyArn?: string | undefined;

  /**
   * <p>Whether the firewall is protected from a change to the firewall policy. If set to <code>true</code>, you cannot associate a different policy with the firewall.</p>
   * @public
   */
  FirewallPolicyChangeProtection?: boolean | undefined;

  /**
   * <p>Whether the firewall is protected from a change to the subnet associations. If set to <code>true</code>, you cannot map different subnets to the firewall.</p>
   * @public
   */
  SubnetChangeProtection?: boolean | undefined;

  /**
   * <p>The public subnets that Network Firewall uses for the firewall. Each subnet must belong to a different Availability Zone.</p>
   * @public
   */
  SubnetMappings?: AwsNetworkFirewallFirewallSubnetMappingsDetails[] | undefined;

  /**
   * <p>The identifier of the VPC where the firewall is used.</p>
   * @public
   */
  VpcId?: string | undefined;
}

/**
 * <p>A stateful rule group that is used by the firewall policy.</p>
 * @public
 */
export interface FirewallPolicyStatefulRuleGroupReferencesDetails {
  /**
   * <p>The ARN of the stateful rule group.</p>
   * @public
   */
  ResourceArn?: string | undefined;
}

/**
 * <p>Defines a CloudWatch dimension value to publish.</p>
 * @public
 */
export interface StatelessCustomPublishMetricActionDimension {
  /**
   * <p>The value to use for the custom metric dimension.</p>
   * @public
   */
  Value?: string | undefined;
}

/**
 * <p>Information about metrics to publish to CloudWatch.</p>
 * @public
 */
export interface StatelessCustomPublishMetricAction {
  /**
   * <p>Defines CloudWatch dimension values to publish.</p>
   * @public
   */
  Dimensions?: StatelessCustomPublishMetricActionDimension[] | undefined;
}

/**
 * <p>The definition of a custom action that can be used for stateless packet handling.</p>
 * @public
 */
export interface StatelessCustomActionDefinition {
  /**
   * <p>Information about metrics to publish to CloudWatch.</p>
   * @public
   */
  PublishMetricAction?: StatelessCustomPublishMetricAction | undefined;
}

/**
 * <p>A custom action that can be used for stateless packet handling.</p>
 * @public
 */
export interface FirewallPolicyStatelessCustomActionsDetails {
  /**
   * <p>The definition of the custom action.</p>
   * @public
   */
  ActionDefinition?: StatelessCustomActionDefinition | undefined;

  /**
   * <p>The name of the custom action.</p>
   * @public
   */
  ActionName?: string | undefined;
}

/**
 * <p>A stateless rule group that is used by the firewall policy.</p>
 * @public
 */
export interface FirewallPolicyStatelessRuleGroupReferencesDetails {
  /**
   * <p>The order in which to run the stateless rule group.</p>
   * @public
   */
  Priority?: number | undefined;

  /**
   * <p>The ARN of the stateless rule group.</p>
   * @public
   */
  ResourceArn?: string | undefined;
}

/**
 * <p>Defines the behavior of the firewall.</p>
 * @public
 */
export interface FirewallPolicyDetails {
  /**
   * <p>The stateful rule groups that are used in the firewall policy.</p>
   * @public
   */
  StatefulRuleGroupReferences?: FirewallPolicyStatefulRuleGroupReferencesDetails[] | undefined;

  /**
   * <p>The custom action definitions that are available to use in the firewall policy's <code>StatelessDefaultActions</code> setting.</p>
   * @public
   */
  StatelessCustomActions?: FirewallPolicyStatelessCustomActionsDetails[] | undefined;

  /**
   * <p>The actions to take on a packet if it doesn't match any of the stateless rules in the policy.</p>
   *          <p>You must specify a standard action (<code>aws:pass</code>, <code>aws:drop</code>, <code>aws:forward_to_sfe</code>), and can optionally include a custom action from <code>StatelessCustomActions</code>.
   *       </p>
   * @public
   */
  StatelessDefaultActions?: string[] | undefined;

  /**
   * <p>The actions to take on a fragmented UDP packet if it doesn't match any of the stateless rules in the policy.</p>
   *          <p>You must specify a standard action (<code>aws:pass</code>, <code>aws:drop</code>, <code>aws:forward_to_sfe</code>), and can optionally include a custom action from <code>StatelessCustomActions</code>.
   *       </p>
   * @public
   */
  StatelessFragmentDefaultActions?: string[] | undefined;

  /**
   * <p>The stateless rule groups that are used in the firewall policy.</p>
   * @public
   */
  StatelessRuleGroupReferences?: FirewallPolicyStatelessRuleGroupReferencesDetails[] | undefined;
}

/**
 * <p>Details about a firewall policy. A firewall policy defines the behavior of a network firewall.</p>
 * @public
 */
export interface AwsNetworkFirewallFirewallPolicyDetails {
  /**
   * <p>The firewall policy configuration.</p>
   * @public
   */
  FirewallPolicy?: FirewallPolicyDetails | undefined;

  /**
   * <p>The ARN of the firewall policy.</p>
   * @public
   */
  FirewallPolicyArn?: string | undefined;

  /**
   * <p>The identifier of the firewall policy.</p>
   * @public
   */
  FirewallPolicyId?: string | undefined;

  /**
   * <p>The name of the firewall policy.</p>
   * @public
   */
  FirewallPolicyName?: string | undefined;

  /**
   * <p>A description of the firewall policy.</p>
   * @public
   */
  Description?: string | undefined;
}

/**
 * <p>Stateful inspection criteria for a domain list rule group.</p>
 * @public
 */
export interface RuleGroupSourceListDetails {
  /**
   * <p>Indicates whether to allow or deny access to the domains listed in <code>Targets</code>.</p>
   * @public
   */
  GeneratedRulesType?: string | undefined;

  /**
   * <p>The protocols that you want to inspect. Specify <code>LS_SNI</code> for HTTPS. Specify <code>HTTP_HOST</code> for HTTP. You can specify either or both.</p>
   * @public
   */
  TargetTypes?: string[] | undefined;

  /**
   * <p>The domains that you want to inspect for in your traffic flows. You can provide full domain names, or use the '.' prefix as a wildcard. For example, <code>.example.com</code> matches all domains that end with <code>example.com</code>.</p>
   * @public
   */
  Targets?: string[] | undefined;
}

/**
 * <p>The inspection criteria for a stateful rule.</p>
 * @public
 */
export interface RuleGroupSourceStatefulRulesHeaderDetails {
  /**
   * <p>The destination IP address or address range to inspect for, in CIDR notation. To match with any address, specify <code>ANY</code>.</p>
   * @public
   */
  Destination?: string | undefined;

  /**
   * <p>The destination port to inspect for. You can specify an individual port, such as <code>1994</code>. You also can specify a port range, such as <code>1990:1994</code>. To match with any port, specify <code>ANY</code>.</p>
   * @public
   */
  DestinationPort?: string | undefined;

  /**
   * <p>The direction of traffic flow to inspect. If set to <code>ANY</code>, the inspection matches bidirectional traffic, both from the source to the destination and from the destination to the source. If set to <code>FORWARD</code>, the inspection only matches traffic going from the source to the destination.</p>
   * @public
   */
  Direction?: string | undefined;

  /**
   * <p>The protocol to inspect for. To inspector for all protocols, use <code>IP</code>.</p>
   * @public
   */
  Protocol?: string | undefined;

  /**
   * <p>The source IP address or address range to inspect for, in CIDR notation. To match with any address, specify <code>ANY</code>.</p>
   * @public
   */
  Source?: string | undefined;

  /**
   * <p>The source port to inspect for. You can specify an individual port, such as <code>1994</code>. You also can specify a port range, such as <code>1990:1994</code>. To match with any port, specify <code>ANY</code>.</p>
   * @public
   */
  SourcePort?: string | undefined;
}

/**
 * <p>A rule option for a stateful rule.</p>
 * @public
 */
export interface RuleGroupSourceStatefulRulesOptionsDetails {
  /**
   * <p>A keyword to look for.</p>
   * @public
   */
  Keyword?: string | undefined;

  /**
   * <p>A list of settings.</p>
   * @public
   */
  Settings?: string[] | undefined;
}

/**
 * <p>A Suricata rule specification.</p>
 * @public
 */
export interface RuleGroupSourceStatefulRulesDetails {
  /**
   * <p>Defines what Network Firewall should do with the packets in a traffic flow when the flow matches the stateful rule criteria.</p>
   * @public
   */
  Action?: string | undefined;

  /**
   * <p>The stateful inspection criteria for the rule.</p>
   * @public
   */
  Header?: RuleGroupSourceStatefulRulesHeaderDetails | undefined;

  /**
   * <p>Additional options for the rule.</p>
   * @public
   */
  RuleOptions?: RuleGroupSourceStatefulRulesOptionsDetails[] | undefined;
}

/**
 * <p>A custom action definition. A custom action is an optional, non-standard action to use for stateless packet handling.</p>
 * @public
 */
export interface RuleGroupSourceCustomActionsDetails {
  /**
   * <p>The definition of a custom action.</p>
   * @public
   */
  ActionDefinition?: StatelessCustomActionDefinition | undefined;

  /**
   * <p>A descriptive name of the custom action.</p>
   * @public
   */
  ActionName?: string | undefined;
}

/**
 * <p>A port range to specify the destination ports to inspect for.</p>
 * @public
 */
export interface RuleGroupSourceStatelessRuleMatchAttributesDestinationPorts {
  /**
   * <p>The starting port value for the port range.</p>
   * @public
   */
  FromPort?: number | undefined;

  /**
   * <p>The ending port value for the port range.</p>
   * @public
   */
  ToPort?: number | undefined;
}

/**
 * <p>A destination IP address or range.</p>
 * @public
 */
export interface RuleGroupSourceStatelessRuleMatchAttributesDestinations {
  /**
   * <p>An IP address or a block of IP addresses.</p>
   * @public
   */
  AddressDefinition?: string | undefined;
}

/**
 * <p>A port range to specify the source ports to inspect for.</p>
 * @public
 */
export interface RuleGroupSourceStatelessRuleMatchAttributesSourcePorts {
  /**
   * <p>The starting port value for the port range.</p>
   * @public
   */
  FromPort?: number | undefined;

  /**
   * <p>The ending port value for the port range.</p>
   * @public
   */
  ToPort?: number | undefined;
}

/**
 * <p>A source IP addresses and address range to inspect for.</p>
 * @public
 */
export interface RuleGroupSourceStatelessRuleMatchAttributesSources {
  /**
   * <p>An IP address or a block of IP addresses.</p>
   * @public
   */
  AddressDefinition?: string | undefined;
}

/**
 * <p>A set of TCP flags and masks to inspect for.</p>
 * @public
 */
export interface RuleGroupSourceStatelessRuleMatchAttributesTcpFlags {
  /**
   * <p>Defines the flags from the <code>Masks</code> setting that must be set in order for the packet to match. Flags that are listed must be set. Flags that are not listed must not be set.</p>
   * @public
   */
  Flags?: string[] | undefined;

  /**
   * <p>The set of flags to consider in the inspection. If not specified, then all flags are inspected.</p>
   * @public
   */
  Masks?: string[] | undefined;
}

/**
 * <p>Criteria for the stateless rule.</p>
 * @public
 */
export interface RuleGroupSourceStatelessRuleMatchAttributes {
  /**
   * <p>A list of port ranges to specify the destination ports to inspect for.</p>
   * @public
   */
  DestinationPorts?: RuleGroupSourceStatelessRuleMatchAttributesDestinationPorts[] | undefined;

  /**
   * <p>The destination IP addresses and address ranges to inspect for, in CIDR notation.</p>
   * @public
   */
  Destinations?: RuleGroupSourceStatelessRuleMatchAttributesDestinations[] | undefined;

  /**
   * <p>The protocols to inspect for.</p>
   * @public
   */
  Protocols?: number[] | undefined;

  /**
   * <p>A list of port ranges to specify the source ports to inspect for.</p>
   * @public
   */
  SourcePorts?: RuleGroupSourceStatelessRuleMatchAttributesSourcePorts[] | undefined;

  /**
   * <p>The source IP addresses and address ranges to inspect for, in CIDR notation.</p>
   * @public
   */
  Sources?: RuleGroupSourceStatelessRuleMatchAttributesSources[] | undefined;

  /**
   * <p>The TCP flags and masks to inspect for.</p>
   * @public
   */
  TcpFlags?: RuleGroupSourceStatelessRuleMatchAttributesTcpFlags[] | undefined;
}

/**
 * <p>The definition of the stateless rule.</p>
 * @public
 */
export interface RuleGroupSourceStatelessRuleDefinition {
  /**
   * <p>The actions to take on a packet that matches one of the stateless rule definition's match attributes. You must specify a standard action (<code>aws:pass</code>, <code>aws:drop</code>, or <code>aws:forward_to_sfe</code>). You can then add custom actions.</p>
   * @public
   */
  Actions?: string[] | undefined;

  /**
   * <p>The criteria for Network Firewall to use to inspect an individual packet in a stateless rule inspection.</p>
   * @public
   */
  MatchAttributes?: RuleGroupSourceStatelessRuleMatchAttributes | undefined;
}

/**
 * <p>A stateless rule in the rule group.</p>
 * @public
 */
export interface RuleGroupSourceStatelessRulesDetails {
  /**
   * <p>Indicates the order in which to run this rule relative to all of the rules in the stateless rule group.</p>
   * @public
   */
  Priority?: number | undefined;

  /**
   * <p>Provides the definition of the stateless rule.</p>
   * @public
   */
  RuleDefinition?: RuleGroupSourceStatelessRuleDefinition | undefined;
}

/**
 * <p>Stateless rules and custom actions for a stateless rule group.</p>
 * @public
 */
export interface RuleGroupSourceStatelessRulesAndCustomActionsDetails {
  /**
   * <p>Custom actions for the rule group.</p>
   * @public
   */
  CustomActions?: RuleGroupSourceCustomActionsDetails[] | undefined;

  /**
   * <p>Stateless rules for the rule group.</p>
   * @public
   */
  StatelessRules?: RuleGroupSourceStatelessRulesDetails[] | undefined;
}

/**
 * <p>The rules and actions for the rule group.</p>
 * @public
 */
export interface RuleGroupSource {
  /**
   * <p>Stateful inspection criteria for a domain list rule group. A domain list rule group determines access by specific protocols to specific domains.</p>
   * @public
   */
  RulesSourceList?: RuleGroupSourceListDetails | undefined;

  /**
   * <p>Stateful inspection criteria, provided in Suricata compatible intrusion prevention system (IPS) rules.</p>
   * @public
   */
  RulesString?: string | undefined;

  /**
   * <p>Suricata rule specifications.</p>
   * @public
   */
  StatefulRules?: RuleGroupSourceStatefulRulesDetails[] | undefined;

  /**
   * <p>The stateless rules and custom actions used by a stateless rule group.</p>
   * @public
   */
  StatelessRulesAndCustomActions?: RuleGroupSourceStatelessRulesAndCustomActionsDetails | undefined;
}

/**
 * <p>A list of IP addresses and address ranges, in CIDR notation.</p>
 * @public
 */
export interface RuleGroupVariablesIpSetsDetails {
  /**
   * <p>The list of IP addresses and ranges.</p>
   * @public
   */
  Definition?: string[] | undefined;
}

/**
 * <p>A list of port ranges.</p>
 * @public
 */
export interface RuleGroupVariablesPortSetsDetails {
  /**
   * <p>The list of port ranges.</p>
   * @public
   */
  Definition?: string[] | undefined;
}

/**
 * <p>Additional settings to use in the specified rules.</p>
 * @public
 */
export interface RuleGroupVariables {
  /**
   * <p>A list of IP addresses and address ranges, in CIDR notation.</p>
   * @public
   */
  IpSets?: RuleGroupVariablesIpSetsDetails | undefined;

  /**
   * <p>A list of port ranges.</p>
   * @public
   */
  PortSets?: RuleGroupVariablesPortSetsDetails | undefined;
}

/**
 * <p>Details about the rule group.</p>
 * @public
 */
export interface RuleGroupDetails {
  /**
   * <p>Additional settings to use in the specified rules.</p>
   * @public
   */
  RuleVariables?: RuleGroupVariables | undefined;

  /**
   * <p>The rules and actions for the rule group.</p>
   *          <p>For stateful rule groups, can contain <code>RulesString</code>, <code>RulesSourceList</code>, or <code>StatefulRules</code>.</p>
   *          <p>For stateless rule groups, contains <code>StatelessRulesAndCustomActions</code>.</p>
   * @public
   */
  RulesSource?: RuleGroupSource | undefined;
}

/**
 * <p>Details about an Network Firewall rule group. Rule groups are used to inspect and control network traffic. Stateless rule groups apply to individual packets. Stateful rule groups apply to packets in the context of their traffic flow.</p>
 *          <p>Rule groups are referenced in firewall policies.
 *       </p>
 * @public
 */
export interface AwsNetworkFirewallRuleGroupDetails {
  /**
   * <p>The maximum number of operating resources that this rule group can use.</p>
   * @public
   */
  Capacity?: number | undefined;

  /**
   * <p>A description of the rule group.</p>
   * @public
   */
  Description?: string | undefined;

  /**
   * <p>Details about the rule group.</p>
   * @public
   */
  RuleGroup?: RuleGroupDetails | undefined;

  /**
   * <p>The ARN of the rule group.</p>
   * @public
   */
  RuleGroupArn?: string | undefined;

  /**
   * <p>The identifier of the rule group.</p>
   * @public
   */
  RuleGroupId?: string | undefined;

  /**
   * <p>The descriptive name of the rule group.</p>
   * @public
   */
  RuleGroupName?: string | undefined;

  /**
   * <p>The type of rule group. A rule group can be stateful or stateless.</p>
   * @public
   */
  Type?: string | undefined;
}

/**
 * <p>Specifies information about the master user of the domain.
 *       </p>
 * @public
 */
export interface AwsOpenSearchServiceDomainMasterUserOptionsDetails {
  /**
   * <p>The Amazon Resource Name (ARN) for the master user.
   *       </p>
   * @public
   */
  MasterUserArn?: string | undefined;

  /**
   * <p>The username for the master user.
   *       </p>
   * @public
   */
  MasterUserName?: string | undefined;

  /**
   * <p>The password for the master user.
   *       </p>
   * @public
   */
  MasterUserPassword?: string | undefined;
}

/**
 * <p>Provides information about domain access control options.
 *       </p>
 * @public
 */
export interface AwsOpenSearchServiceDomainAdvancedSecurityOptionsDetails {
  /**
   * <p>Enables fine-grained access control.
   *       </p>
   * @public
   */
  Enabled?: boolean | undefined;

  /**
   * <p>Enables the internal user database.
   *       </p>
   * @public
   */
  InternalUserDatabaseEnabled?: boolean | undefined;

  /**
   * <p>Specifies information about the master user of the domain.
   *       </p>
   * @public
   */
  MasterUserOptions?: AwsOpenSearchServiceDomainMasterUserOptionsDetails | undefined;
}

/**
 * <p>Configuration options for zone awareness.</p>
 * @public
 */
export interface AwsOpenSearchServiceDomainClusterConfigZoneAwarenessConfigDetails {
  /**
   * <p>The number of Availability Zones that the domain uses. Valid values are <code>2</code> or <code>3</code>. The default is <code>2</code>.</p>
   * @public
   */
  AvailabilityZoneCount?: number | undefined;
}

/**
 * <p>Details about the configuration of an OpenSearch cluster.</p>
 * @public
 */
export interface AwsOpenSearchServiceDomainClusterConfigDetails {
  /**
   * <p>The number of data nodes to use in the OpenSearch domain.</p>
   * @public
   */
  InstanceCount?: number | undefined;

  /**
   * <p>Whether UltraWarm is enabled.</p>
   * @public
   */
  WarmEnabled?: boolean | undefined;

  /**
   * <p>The number of UltraWarm instances.</p>
   * @public
   */
  WarmCount?: number | undefined;

  /**
   * <p>Whether to use a dedicated master node for the OpenSearch domain. A dedicated master node performs cluster management tasks, but does not hold data or respond to data upload requests.</p>
   * @public
   */
  DedicatedMasterEnabled?: boolean | undefined;

  /**
   * <p>Configuration options for zone awareness. Provided if <code>ZoneAwarenessEnabled</code> is <code>true</code>.</p>
   * @public
   */
  ZoneAwarenessConfig?: AwsOpenSearchServiceDomainClusterConfigZoneAwarenessConfigDetails | undefined;

  /**
   * <p>The number of instances to use for the master node. If this attribute is specified, then <code>DedicatedMasterEnabled</code> must be <code>true</code>.</p>
   * @public
   */
  DedicatedMasterCount?: number | undefined;

  /**
   * <p>The instance type for your data nodes.</p>
   *          <p>For a list of valid values, see <a href="https://docs.aws.amazon.com/opensearch-service/latest/developerguide/supported-instance-types.html">Supported instance types in Amazon OpenSearch Service</a> in the <i>Amazon OpenSearch Service Developer Guide</i>.</p>
   * @public
   */
  InstanceType?: string | undefined;

  /**
   * <p>The type of UltraWarm instance.</p>
   * @public
   */
  WarmType?: string | undefined;

  /**
   * <p>Whether to enable zone awareness for the OpenSearch domain. When zone awareness is enabled, OpenSearch Service allocates the cluster's nodes and replica index shards across Availability Zones (AZs) in the same Region. This prevents data loss and minimizes downtime if a node or data center fails.</p>
   * @public
   */
  ZoneAwarenessEnabled?: boolean | undefined;

  /**
   * <p>The hardware configuration of the computer that hosts the dedicated master node.</p>
   *          <p>If this attribute is specified, then <code>DedicatedMasterEnabled</code> must be <code>true</code>.
   *       </p>
   * @public
   */
  DedicatedMasterType?: string | undefined;
}

/**
 * <p>Information about additional options for the domain endpoint.</p>
 * @public
 */
export interface AwsOpenSearchServiceDomainDomainEndpointOptionsDetails {
  /**
   * <p>The ARN for the security certificate. The certificate is managed in ACM.</p>
   * @public
   */
  CustomEndpointCertificateArn?: string | undefined;

  /**
   * <p>Whether to enable a custom endpoint for the domain.</p>
   * @public
   */
  CustomEndpointEnabled?: boolean | undefined;

  /**
   * <p>Whether to require that all traffic to the domain arrive over HTTPS.</p>
   * @public
   */
  EnforceHTTPS?: boolean | undefined;

  /**
   * <p>The fully qualified URL for the custom endpoint.</p>
   * @public
   */
  CustomEndpoint?: string | undefined;

  /**
   * <p>The TLS security policy to apply to the HTTPS endpoint of the OpenSearch domain.</p>
   * @public
   */
  TLSSecurityPolicy?: string | undefined;
}

/**
 * <p>Details about the configuration for encryption at rest for the OpenSearch domain.</p>
 * @public
 */
export interface AwsOpenSearchServiceDomainEncryptionAtRestOptionsDetails {
  /**
   * <p>Whether encryption at rest is enabled.</p>
   * @public
   */
  Enabled?: boolean | undefined;

  /**
   * <p>The KMS key ID.</p>
   * @public
   */
  KmsKeyId?: string | undefined;
}

/**
 * <p>Configuration details for a log publishing option.</p>
 * @public
 */
export interface AwsOpenSearchServiceDomainLogPublishingOption {
  /**
   * <p>The ARN of the CloudWatch Logs group to publish the logs to.</p>
   * @public
   */
  CloudWatchLogsLogGroupArn?: string | undefined;

  /**
   * <p>Whether the log publishing is enabled.</p>
   * @public
   */
  Enabled?: boolean | undefined;
}

/**
 * <p>Configures the CloudWatch Logs to publish for the OpenSearch domain.</p>
 * @public
 */
export interface AwsOpenSearchServiceDomainLogPublishingOptionsDetails {
  /**
   * <p>Configures the OpenSearch index logs publishing.</p>
   * @public
   */
  IndexSlowLogs?: AwsOpenSearchServiceDomainLogPublishingOption | undefined;

  /**
   * <p>Configures the OpenSearch search slow log publishing.</p>
   * @public
   */
  SearchSlowLogs?: AwsOpenSearchServiceDomainLogPublishingOption | undefined;

  /**
   * <p>Configures the OpenSearch audit logs publishing.</p>
   * @public
   */
  AuditLogs?: AwsOpenSearchServiceDomainLogPublishingOption | undefined;
}

/**
 * <p>Provides details about the configuration for node-to-node encryption.</p>
 * @public
 */
export interface AwsOpenSearchServiceDomainNodeToNodeEncryptionOptionsDetails {
  /**
   * <p>Whether node-to-node encryption is enabled.</p>
   * @public
   */
  Enabled?: boolean | undefined;
}

/**
 * <p>Provides information about the state of the domain relative to the latest service software.</p>
 * @public
 */
export interface AwsOpenSearchServiceDomainServiceSoftwareOptionsDetails {
  /**
   * <p>The epoch time when the deployment window closes for required updates. After this time, OpenSearch Service schedules the software upgrade automatically.</p>
   * @public
   */
  AutomatedUpdateDate?: string | undefined;

  /**
   * <p>Whether a request to update the domain can be canceled.</p>
   * @public
   */
  Cancellable?: boolean | undefined;

  /**
   * <p>The version of the service software that is currently installed on the domain.</p>
   * @public
   */
  CurrentVersion?: string | undefined;

  /**
   * <p>A more detailed description of the service software status.</p>
   * @public
   */
  Description?: string | undefined;

  /**
   * <p>The most recent version of the service software.</p>
   * @public
   */
  NewVersion?: string | undefined;

  /**
   * <p>Whether a service software update is available for the domain.</p>
   * @public
   */
  UpdateAvailable?: boolean | undefined;

  /**
   * <p>The status of the service software update. Valid values are as follows:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>COMPLETED</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>ELIGIBLE</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>IN_PROGRESS</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>NOT_ELIGIBLE</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>PENDING_UPDATE</code>
   *                </p>
   *             </li>
   *          </ul>
   * @public
   */
  UpdateStatus?: string | undefined;

  /**
   * <p>Whether the service software update is optional.</p>
   * @public
   */
  OptionalDeployment?: boolean | undefined;
}

/**
 * <p>Contains information that OpenSearch Service derives based on the <code>VPCOptions</code> for the domain.</p>
 * @public
 */
export interface AwsOpenSearchServiceDomainVpcOptionsDetails {
  /**
   * <p>The list of security group IDs that are associated with the VPC endpoints for the domain.</p>
   * @public
   */
  SecurityGroupIds?: string[] | undefined;

  /**
   * <p>A list of subnet IDs that are associated with the VPC endpoints for the domain.</p>
   * @public
   */
  SubnetIds?: string[] | undefined;
}

/**
 * <p>Information about an Amazon OpenSearch Service domain.</p>
 * @public
 */
export interface AwsOpenSearchServiceDomainDetails {
  /**
   * <p>The ARN of the OpenSearch Service domain.</p>
   * @public
   */
  Arn?: string | undefined;

  /**
   * <p>IAM policy document that specifies the access policies for the OpenSearch Service domain.</p>
   * @public
   */
  AccessPolicies?: string | undefined;

  /**
   * <p>The name of the endpoint.</p>
   * @public
   */
  DomainName?: string | undefined;

  /**
   * <p>The identifier of the domain.</p>
   * @public
   */
  Id?: string | undefined;

  /**
   * <p>The domain endpoint.</p>
   * @public
   */
  DomainEndpoint?: string | undefined;

  /**
   * <p>The version of the domain engine.</p>
   * @public
   */
  EngineVersion?: string | undefined;

  /**
   * <p>Details about the configuration for encryption at rest.</p>
   * @public
   */
  EncryptionAtRestOptions?: AwsOpenSearchServiceDomainEncryptionAtRestOptionsDetails | undefined;

  /**
   * <p>Details about the configuration for node-to-node encryption.</p>
   * @public
   */
  NodeToNodeEncryptionOptions?: AwsOpenSearchServiceDomainNodeToNodeEncryptionOptionsDetails | undefined;

  /**
   * <p>Information about the status of a domain relative to the latest service software.</p>
   * @public
   */
  ServiceSoftwareOptions?: AwsOpenSearchServiceDomainServiceSoftwareOptionsDetails | undefined;

  /**
   * <p>Details about the configuration of an OpenSearch cluster.</p>
   * @public
   */
  ClusterConfig?: AwsOpenSearchServiceDomainClusterConfigDetails | undefined;

  /**
   * <p>Additional options for the domain endpoint.</p>
   * @public
   */
  DomainEndpointOptions?: AwsOpenSearchServiceDomainDomainEndpointOptionsDetails | undefined;

  /**
   * <p>Information that OpenSearch Service derives based on <code>VPCOptions</code> for the domain.</p>
   * @public
   */
  VpcOptions?: AwsOpenSearchServiceDomainVpcOptionsDetails | undefined;

  /**
   * <p>Configures the CloudWatch Logs to publish for the OpenSearch domain.</p>
   * @public
   */
  LogPublishingOptions?: AwsOpenSearchServiceDomainLogPublishingOptionsDetails | undefined;

  /**
   * <p>The domain endpoints. Used if the OpenSearch domain resides in a VPC.</p>
   *          <p>This is a map of key-value pairs. The key is always <code>vpc</code>. The value is the endpoint.</p>
   * @public
   */
  DomainEndpoints?: Record<string, string> | undefined;

  /**
   * <p>Specifies options for fine-grained access control.
   *       </p>
   * @public
   */
  AdvancedSecurityOptions?: AwsOpenSearchServiceDomainAdvancedSecurityOptionsDetails | undefined;
}

/**
 * <p>An IAM role that is associated with the Amazon RDS DB cluster.</p>
 * @public
 */
export interface AwsRdsDbClusterAssociatedRole {
  /**
   * <p>The ARN of the IAM role.</p>
   * @public
   */
  RoleArn?: string | undefined;

  /**
   * <p>The status of the association between the IAM role and the DB cluster. Valid values are as follows:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>ACTIVE</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>INVALID</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>PENDING</code>
   *                </p>
   *             </li>
   *          </ul>
   * @public
   */
  Status?: string | undefined;
}

/**
 * <p>Information about an instance in the DB cluster.</p>
 * @public
 */
export interface AwsRdsDbClusterMember {
  /**
   * <p>Whether the cluster member is the primary instance for the DB cluster.</p>
   * @public
   */
  IsClusterWriter?: boolean | undefined;

  /**
   * <p>Specifies the order in which an Aurora replica is promoted to the primary instance when
   *          the existing primary instance fails.</p>
   * @public
   */
  PromotionTier?: number | undefined;

  /**
   * <p>The instance identifier for this member of the DB cluster.</p>
   * @public
   */
  DbInstanceIdentifier?: string | undefined;

  /**
   * <p>The status of the DB cluster parameter group for this member of the DB cluster.</p>
   * @public
   */
  DbClusterParameterGroupStatus?: string | undefined;
}

/**
 * <p>Information about an option group membership for a DB cluster.</p>
 * @public
 */
export interface AwsRdsDbClusterOptionGroupMembership {
  /**
   * <p>The name of the DB cluster option group.</p>
   * @public
   */
  DbClusterOptionGroupName?: string | undefined;

  /**
   * <p>The status of the DB cluster option group.</p>
   * @public
   */
  Status?: string | undefined;
}

/**
 * <p>Information about an Active Directory domain membership record associated with the DB
 *          instance.</p>
 * @public
 */
export interface AwsRdsDbDomainMembership {
  /**
   * <p>The identifier of the Active Directory domain.</p>
   * @public
   */
  Domain?: string | undefined;

  /**
   * <p>The status of the Active Directory Domain membership for the DB instance.</p>
   * @public
   */
  Status?: string | undefined;

  /**
   * <p>The fully qualified domain name of the Active Directory domain.</p>
   * @public
   */
  Fqdn?: string | undefined;

  /**
   * <p>The name of the IAM role to use when making API calls to the Directory Service.</p>
   * @public
   */
  IamRoleName?: string | undefined;
}

/**
 * <p>A VPC security groups that the DB instance belongs to.</p>
 * @public
 */
export interface AwsRdsDbInstanceVpcSecurityGroup {
  /**
   * <p>The name of the VPC security group.</p>
   * @public
   */
  VpcSecurityGroupId?: string | undefined;

  /**
   * <p>The status of the VPC security group.</p>
   * @public
   */
  Status?: string | undefined;
}

/**
 * <p>Information about an Amazon RDS DB cluster.</p>
 * @public
 */
export interface AwsRdsDbClusterDetails {
  /**
   * <p>For all database engines except Aurora, specifies the allocated storage size in
   *          gibibytes (GiB).</p>
   * @public
   */
  AllocatedStorage?: number | undefined;

  /**
   * <p>A list of Availability Zones (AZs) where instances in the DB cluster can be
   *          created.</p>
   * @public
   */
  AvailabilityZones?: string[] | undefined;

  /**
   * <p>The number of days for which automated backups are retained.</p>
   * @public
   */
  BackupRetentionPeriod?: number | undefined;

  /**
   * <p>The name of the database.</p>
   * @public
   */
  DatabaseName?: string | undefined;

  /**
   * <p>The current status of this DB cluster.</p>
   * @public
   */
  Status?: string | undefined;

  /**
   * <p>The connection endpoint for the primary instance of the DB cluster.</p>
   * @public
   */
  Endpoint?: string | undefined;

  /**
   * <p>The reader endpoint for the DB cluster.</p>
   * @public
   */
  ReaderEndpoint?: string | undefined;

  /**
   * <p>A list of custom endpoints for the DB cluster.</p>
   * @public
   */
  CustomEndpoints?: string[] | undefined;

  /**
   * <p>Whether the DB cluster has instances in multiple Availability Zones.</p>
   * @public
   */
  MultiAz?: boolean | undefined;

  /**
   * <p>The name of the database engine to use for this DB cluster. Valid values are as follows:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>aurora</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>aurora-mysql</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>aurora-postgresql</code>
   *                </p>
   *             </li>
   *          </ul>
   * @public
   */
  Engine?: string | undefined;

  /**
   * <p>The version number of the database engine to use.</p>
   * @public
   */
  EngineVersion?: string | undefined;

  /**
   * <p>The port number on which the DB instances in the DB cluster accept connections.</p>
   * @public
   */
  Port?: number | undefined;

  /**
   * <p>The name of the master user for the DB cluster.</p>
   * @public
   */
  MasterUsername?: string | undefined;

  /**
   * <p>The range of time each day when automated backups are created, if automated backups are
   *          enabled.</p>
   *          <p>Uses the format <code>HH:MM-HH:MM</code>. For example, <code>04:52-05:22</code>.</p>
   * @public
   */
  PreferredBackupWindow?: string | undefined;

  /**
   * <p>The weekly time range during which system maintenance can occur, in Universal
   *          Coordinated Time (UTC).</p>
   *          <p>Uses the format <code><day>:HH:MM-<day>:HH:MM</code>.</p>
   *          <p>For the day values, use
   *             <code>mon</code>|<code>tue</code>|<code>wed</code>|<code>thu</code>|<code>fri</code>|<code>sat</code>|<code>sun</code>.</p>
   *          <p>For example, <code>sun:09:32-sun:10:02</code>.</p>
   * @public
   */
  PreferredMaintenanceWindow?: string | undefined;

  /**
   * <p>The identifiers of the read replicas that are associated with this DB cluster.</p>
   * @public
   */
  ReadReplicaIdentifiers?: string[] | undefined;

  /**
   * <p>A list of VPC security groups that the DB cluster belongs to.</p>
   * @public
   */
  VpcSecurityGroups?: AwsRdsDbInstanceVpcSecurityGroup[] | undefined;

  /**
   * <p>Specifies the identifier that Amazon Route 53 assigns when you create a hosted
   *          zone.</p>
   * @public
   */
  HostedZoneId?: string | undefined;

  /**
   * <p>Whether the DB cluster is encrypted.</p>
   * @public
   */
  StorageEncrypted?: boolean | undefined;

  /**
   * <p>The ARN of the KMS master key that is used to encrypt the database instances in the
   *          DB cluster.</p>
   * @public
   */
  KmsKeyId?: string | undefined;

  /**
   * <p>The identifier of the DB cluster. The identifier must be unique within each Amazon Web Services Region
   *          and is immutable.</p>
   * @public
   */
  DbClusterResourceId?: string | undefined;

  /**
   * <p>A list of the IAM roles that are associated with the DB cluster.</p>
   * @public
   */
  AssociatedRoles?: AwsRdsDbClusterAssociatedRole[] | undefined;

  /**
   * <p>Indicates when the DB cluster was created, in Universal Coordinated Time (UTC).</p>
   *          <p>For more information about the validation and formatting of timestamp fields in Security Hub, see <a href="https://docs.aws.amazon.com/securityhub/1.0/APIReference/Welcome.html#timestamps">Timestamps</a>.</p>
   * @public
   */
  ClusterCreateTime?: string | undefined;

  /**
   * <p>A list of log types that this DB cluster is configured to export to CloudWatch
   *          Logs.</p>
   * @public
   */
  EnabledCloudWatchLogsExports?: string[] | undefined;

  /**
   * <p>The database engine mode of the DB cluster.Valid values are as follows:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>global</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>multimaster</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>parallelquery</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>provisioned</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>serverless</code>
   *                </p>
   *             </li>
   *          </ul>
   * @public
   */
  EngineMode?: string | undefined;

  /**
   * <p>Whether the DB cluster has deletion protection enabled.</p>
   * @public
   */
  DeletionProtection?: boolean | undefined;

  /**
   * <p>Whether the HTTP endpoint for an Aurora Serverless DB cluster is enabled.</p>
   * @public
   */
  HttpEndpointEnabled?: boolean | undefined;

  /**
   * <p>The status of the database activity stream. Valid values are as follows:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>started</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>starting</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>stopped</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>stopping</code>
   *                </p>
   *             </li>
   *          </ul>
   * @public
   */
  ActivityStreamStatus?: string | undefined;

  /**
   * <p>Whether tags are copied from the DB cluster to snapshots of the DB cluster.</p>
   * @public
   */
  CopyTagsToSnapshot?: boolean | undefined;

  /**
   * <p>Whether the DB cluster is a clone of a DB cluster owned by a different Amazon Web Services
   *          account.</p>
   * @public
   */
  CrossAccountClone?: boolean | undefined;

  /**
   * <p>The Active Directory domain membership records that are associated with the DB
   *          cluster.</p>
   * @public
   */
  DomainMemberships?: AwsRdsDbDomainMembership[] | undefined;

  /**
   * <p>The name of the DB cluster parameter group for the DB cluster.</p>
   * @public
   */
  DbClusterParameterGroup?: string | undefined;

  /**
   * <p>The subnet group that is associated with the DB cluster, including the name,
   *          description, and subnets in the subnet group.</p>
   * @public
   */
  DbSubnetGroup?: string | undefined;

  /**
   * <p>The list of option group memberships for this DB cluster.</p>
   * @public
   */
  DbClusterOptionGroupMemberships?: AwsRdsDbClusterOptionGroupMembership[] | undefined;

  /**
   * <p>The DB cluster identifier that the user assigned to the cluster. This identifier is the
   *          unique key that identifies a DB cluster.</p>
   * @public
   */
  DbClusterIdentifier?: string | undefined;

  /**
   * <p>The list of instances that make up the DB cluster.</p>
   * @public
   */
  DbClusterMembers?: AwsRdsDbClusterMember[] | undefined;

  /**
   * <p>Whether the mapping of IAM accounts to database accounts is enabled.</p>
   * @public
   */
  IamDatabaseAuthenticationEnabled?: boolean | undefined;

  /**
   * <p>
   *             Indicates if minor version upgrades are automatically applied to the cluster.</p>
   * @public
   */
  AutoMinorVersionUpgrade?: boolean | undefined;
}

/**
 * <p>
 *             Contains the name and values of a manual Amazon Relational Database Service (RDS) DB cluster snapshot attribute.
 *         </p>
 * @public
 */
export interface AwsRdsDbClusterSnapshotDbClusterSnapshotAttribute {
  /**
   * <p>
   *             The name of the manual DB cluster snapshot attribute. The attribute named <code>restore</code> refers to the list of
   *             Amazon Web Services accounts that have permission to copy or restore the manual DB cluster snapshot.
   *         </p>
   * @public
   */
  AttributeName?: string | undefined;

  /**
   * <p>
   *             The value(s) for the manual DB cluster snapshot attribute. If the <code>AttributeName</code> field is set to
   *             <code>restore</code>, then this element returns a list of IDs of the Amazon Web Services accounts that are authorized
   *             to copy or restore the manual DB cluster snapshot. If a value of <code>all</code> is in the list, then the manual
   *             DB cluster snapshot is public and available for any Amazon Web Services account to copy or restore.
   *         </p>
   * @public
   */
  AttributeValues?: string[] | undefined;
}

/**
 * <p>Information about an Amazon RDS DB cluster snapshot.</p>
 * @public
 */
export interface AwsRdsDbClusterSnapshotDetails {
  /**
   * <p>A list of Availability Zones where instances in the DB cluster can be created.</p>
   * @public
   */
  AvailabilityZones?: string[] | undefined;

  /**
   * <p>Indicates when the snapshot was taken.</p>
   *          <p>For more information about the validation and formatting of timestamp fields in Security Hub, see <a href="https://docs.aws.amazon.com/securityhub/1.0/APIReference/Welcome.html#timestamps">Timestamps</a>.</p>
   * @public
   */
  SnapshotCreateTime?: string | undefined;

  /**
   * <p>The name of the database engine that you want to use for this DB instance.</p>
   * @public
   */
  Engine?: string | undefined;

  /**
   * <p>Specifies the allocated storage size in gibibytes (GiB).</p>
   * @public
   */
  AllocatedStorage?: number | undefined;

  /**
   * <p>The status of this DB cluster snapshot.</p>
   * @public
   */
  Status?: string | undefined;

  /**
   * <p>The port number on which the DB instances in the DB cluster accept connections.</p>
   * @public
   */
  Port?: number | undefined;

  /**
   * <p>The VPC ID that is associated with the DB cluster snapshot.</p>
   * @public
   */
  VpcId?: string | undefined;

  /**
   * <p>Indicates when the DB cluster was created, in Universal Coordinated Time (UTC).</p>
   *          <p>For more information about the validation and formatting of timestamp fields in Security Hub, see <a href="https://docs.aws.amazon.com/securityhub/1.0/APIReference/Welcome.html#timestamps">Timestamps</a>.</p>
   * @public
   */
  ClusterCreateTime?: string | undefined;

  /**
   * <p>The name of the master user for the DB cluster.</p>
   * @public
   */
  MasterUsername?: string | undefined;

  /**
   * <p>The version of the database engine to use.</p>
   * @public
   */
  EngineVersion?: string | undefined;

  /**
   * <p>The license model information for this DB cluster snapshot.</p>
   * @public
   */
  LicenseModel?: string | undefined;

  /**
   * <p>The type of DB cluster snapshot.</p>
   * @public
   */
  SnapshotType?: string | undefined;

  /**
   * <p>Specifies the percentage of the estimated data that has been transferred.</p>
   * @public
   */
  PercentProgress?: number | undefined;

  /**
   * <p>Whether the DB cluster is encrypted.</p>
   * @public
   */
  StorageEncrypted?: boolean | undefined;

  /**
   * <p>The ARN of the KMS master key that is used to encrypt the database instances in the
   *          DB cluster.</p>
   * @public
   */
  KmsKeyId?: string | undefined;

  /**
   * <p>The DB cluster identifier.</p>
   * @public
   */
  DbClusterIdentifier?: string | undefined;

  /**
   * <p>The identifier of the DB cluster snapshot.</p>
   * @public
   */
  DbClusterSnapshotIdentifier?: string | undefined;

  /**
   * <p>Whether mapping of IAM accounts to database accounts is enabled.</p>
   * @public
   */
  IamDatabaseAuthenticationEnabled?: boolean | undefined;

  /**
   * <p>
   *             Contains the name and values of a manual DB cluster snapshot attribute.
   *         </p>
   * @public
   */
  DbClusterSnapshotAttributes?: AwsRdsDbClusterSnapshotDbClusterSnapshotAttribute[] | undefined;
}

/**
 * <p>An IAM role associated with the DB instance.</p>
 * @public
 */
export interface AwsRdsDbInstanceAssociatedRole {
  /**
   * <p>The ARN of the IAM role that is associated with the DB
   *          instance.</p>
   * @public
   */
  RoleArn?: string | undefined;

  /**
   * <p>The name of the feature associated with the IAM role.</p>
   * @public
   */
  FeatureName?: string | undefined;

  /**
   * <p>Describes the state of the association between the IAM role and the DB instance. The
   *             <code>Status</code> property returns one of the following values:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>ACTIVE</code> - The IAM role ARN is associated with the DB instance and can
   *                be used to access other Amazon Web Services services on your behalf.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>PENDING</code> - The IAM role ARN is being associated with the DB
   *                instance.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>INVALID</code> - The IAM role ARN is associated with the DB instance. But
   *                the DB instance is unable to assume the IAM role in order to access other Amazon Web Services
   *                services on your behalf. </p>
   *             </li>
   *          </ul>
   * @public
   */
  Status?: string | undefined;
}

/**
 * <p>Provides information about a parameter group for a DB instance.</p>
 * @public
 */
export interface AwsRdsDbParameterGroup {
  /**
   * <p>The name of the parameter group.</p>
   * @public
   */
  DbParameterGroupName?: string | undefined;

  /**
   * <p>The status of parameter updates.</p>
   * @public
   */
  ParameterApplyStatus?: string | undefined;
}

/**
 * <p>An Availability Zone for a subnet in a subnet group.</p>
 * @public
 */
export interface AwsRdsDbSubnetGroupSubnetAvailabilityZone {
  /**
   * <p>The name of the Availability Zone for a subnet in the subnet group.</p>
   * @public
   */
  Name?: string | undefined;
}

/**
 * <p>Information about a subnet in a subnet group.</p>
 * @public
 */
export interface AwsRdsDbSubnetGroupSubnet {
  /**
   * <p>The identifier of a subnet in the subnet group.</p>
   * @public
   */
  SubnetIdentifier?: string | undefined;

  /**
   * <p>Information about the Availability Zone for a subnet in the subnet group.</p>
   * @public
   */
  SubnetAvailabilityZone?: AwsRdsDbSubnetGroupSubnetAvailabilityZone | undefined;

  /**
   * <p>The status of a subnet in the subnet group.</p>
   * @public
   */
  SubnetStatus?: string | undefined;
}

/**
 * <p>Information about the subnet group for the database instance.</p>
 * @public
 */
export interface AwsRdsDbSubnetGroup {
  /**
   * <p>The name of the subnet group.</p>
   * @public
   */
  DbSubnetGroupName?: string | undefined;

  /**
   * <p>The description of the subnet group.</p>
   * @public
   */
  DbSubnetGroupDescription?: string | undefined;

  /**
   * <p>The VPC ID of the subnet group.</p>
   * @public
   */
  VpcId?: string | undefined;

  /**
   * <p>The status of the subnet group.</p>
   * @public
   */
  SubnetGroupStatus?: string | undefined;

  /**
   * <p>A list of subnets in the subnet group.</p>
   * @public
   */
  Subnets?: AwsRdsDbSubnetGroupSubnet[] | undefined;

  /**
   * <p>The ARN of the subnet group.</p>
   * @public
   */
  DbSubnetGroupArn?: string | undefined;
}

/**
 * <p>Specifies the connection endpoint.</p>
 * @public
 */
export interface AwsRdsDbInstanceEndpoint {
  /**
   * <p>Specifies the DNS address of the DB instance.</p>
   * @public
   */
  Address?: string | undefined;

  /**
   * <p>Specifies the port that the database engine is listening on.</p>
   * @public
   */
  Port?: number | undefined;

  /**
   * <p>Specifies the ID that Amazon Route 53 assigns when you create a hosted zone.</p>
   * @public
   */
  HostedZoneId?: string | undefined;
}

/**
 * <p>An option group membership.</p>
 * @public
 */
export interface AwsRdsDbOptionGroupMembership {
  /**
   * <p>The name of the option group.</p>
   * @public
   */
  OptionGroupName?: string | undefined;

  /**
   * <p>The status of the option group membership.</p>
   * @public
   */
  Status?: string | undefined;
}

/**
 * <p>Identifies the log types to enable and disable.</p>
 * @public
 */
export interface AwsRdsPendingCloudWatchLogsExports {
  /**
   * <p>A list of log types that are being enabled.</p>
   * @public
   */
  LogTypesToEnable?: string[] | undefined;

  /**
   * <p>A list of log types that are being disabled.</p>
   * @public
   */
  LogTypesToDisable?: string[] | undefined;
}

/**
 * <p>A processor feature.</p>
 * @public
 */
export interface AwsRdsDbProcessorFeature {
  /**
   * <p>The name of the processor feature. Valid values are <code>coreCount</code> or <code>threadsPerCore</code>.</p>
   * @public
   */
  Name?: string | undefined;

  /**
   * <p>The value of the processor feature.</p>
   * @public
   */
  Value?: string | undefined;
}

/**
 * <p>Changes to a DB instance that are currently pending.</p>
 * @public
 */
export interface AwsRdsDbPendingModifiedValues {
  /**
   * <p>The new DB instance class for the DB instance.</p>
   * @public
   */
  DbInstanceClass?: string | undefined;

  /**
   * <p>The new value of the allocated storage for the DB instance.</p>
   * @public
   */
  AllocatedStorage?: number | undefined;

  /**
   * <p>The new master user password for the DB instance.</p>
   * @public
   */
  MasterUserPassword?: string | undefined;

  /**
   * <p>The new port for the DB instance.</p>
   * @public
   */
  Port?: number | undefined;

  /**
   * <p>The new backup retention period for the DB instance.</p>
   * @public
   */
  BackupRetentionPeriod?: number | undefined;

  /**
   * <p>Indicates that a single Availability Zone DB instance is changing to a multiple Availability Zone deployment.</p>
   * @public
   */
  MultiAZ?: boolean | undefined;

  /**
   * <p>The new engine version for the DB instance.</p>
   * @public
   */
  EngineVersion?: string | undefined;

  /**
   * <p>The new license model value for the DB instance.</p>
   * @public
   */
  LicenseModel?: string | undefined;

  /**
   * <p>The new provisioned IOPS value for the DB instance.</p>
   * @public
   */
  Iops?: number | undefined;

  /**
   * <p>The new DB instance identifier for the DB instance.</p>
   * @public
   */
  DbInstanceIdentifier?: string | undefined;

  /**
   * <p>The new storage type for the DB instance.</p>
   * @public
   */
  StorageType?: string | undefined;

  /**
   * <p>The new CA certificate identifier for the DB instance.</p>
   * @public
   */
  CaCertificateIdentifier?: string | undefined;

  /**
   * <p>The name of the new subnet group for the DB instance.</p>
   * @public
   */
  DbSubnetGroupName?: string | undefined;

  /**
   * <p>A list of log types that are being enabled or disabled.</p>
   * @public
   */
  PendingCloudWatchLogsExports?: AwsRdsPendingCloudWatchLogsExports | undefined;

  /**
   * <p>Processor features that are being updated.</p>
   * @public
   */
  ProcessorFeatures?: AwsRdsDbProcessorFeature[] | undefined;
}

/**
 * <p>Information about the status of a read replica.</p>
 * @public
 */
export interface AwsRdsDbStatusInfo {
  /**
   * <p>The type of status. For a read replica, the status type is read replication.</p>
   * @public
   */
  StatusType?: string | undefined;

  /**
   * <p>Whether the read replica instance is operating normally.</p>
   * @public
   */
  Normal?: boolean | undefined;

  /**
   * <p>The status of the read replica instance.</p>
   * @public
   */
  Status?: string | undefined;

  /**
   * <p>If the read replica is currently in an error state, provides the error details.</p>
   * @public
   */
  Message?: string | undefined;
}

/**
 * <p>Contains the details of an Amazon RDS DB instance.</p>
 * @public
 */
export interface AwsRdsDbInstanceDetails {
  /**
   * <p>The IAM roles associated with the DB
   *          instance.</p>
   * @public
   */
  AssociatedRoles?: AwsRdsDbInstanceAssociatedRole[] | undefined;

  /**
   * <p>The identifier of the CA certificate for this DB instance.</p>
   * @public
   */
  CACertificateIdentifier?: string | undefined;

  /**
   * <p>If the DB instance is a member of a DB cluster, contains the name of the DB cluster that
   *          the DB instance is a member of.</p>
   * @public
   */
  DBClusterIdentifier?: string | undefined;

  /**
   * <p>Contains a user-supplied database identifier. This identifier is the unique key that
   *          identifies a DB instance.</p>
   * @public
   */
  DBInstanceIdentifier?: string | undefined;

  /**
   * <p>Contains the name of the compute and memory capacity class of the DB instance.</p>
   * @public
   */
  DBInstanceClass?: string | undefined;

  /**
   * <p>Specifies the port that the DB instance listens on. If the DB instance is part of a DB
   *          cluster, this can be a different port than the DB cluster port.</p>
   * @public
   */
  DbInstancePort?: number | undefined;

  /**
   * <p>The Amazon Web Services Region-unique, immutable identifier for the DB instance. This identifier is
   *          found in CloudTrail log entries whenever the KMS key for the DB instance is
   *          accessed. </p>
   * @public
   */
  DbiResourceId?: string | undefined;

  /**
   * <p>The meaning of this parameter differs according to the database engine you use.</p>
   *          <p>
   *             <b>MySQL, MariaDB, SQL Server, PostgreSQL</b>
   *          </p>
   *          <p>Contains the name of the initial database of this instance that was provided at create
   *          time, if one was specified when the DB instance was created. This same name is returned for
   *          the life of the DB instance.</p>
   *          <p>
   *             <b>Oracle</b>
   *          </p>
   *          <p>Contains the Oracle System ID (SID) of the created DB instance. Not shown when the
   *          returned parameters don't apply to an Oracle DB instance. </p>
   * @public
   */
  DBName?: string | undefined;

  /**
   * <p>Indicates whether the DB instance has deletion protection enabled.</p>
   *          <p>When deletion protection is enabled, the database cannot be deleted.</p>
   * @public
   */
  DeletionProtection?: boolean | undefined;

  /**
   * <p>Specifies the connection endpoint.</p>
   * @public
   */
  Endpoint?: AwsRdsDbInstanceEndpoint | undefined;

  /**
   * <p>Provides the name of the database engine to use for this DB instance.</p>
   * @public
   */
  Engine?: string | undefined;

  /**
   * <p>Indicates the database engine version.</p>
   * @public
   */
  EngineVersion?: string | undefined;

  /**
   * <p>True if mapping of IAM accounts to database
   *          accounts is enabled, and otherwise false.</p>
   *          <p>IAM database authentication can be enabled for the following database engines.</p>
   *          <ul>
   *             <li>
   *                <p>For MySQL 5.6, minor version 5.6.34 or higher</p>
   *             </li>
   *             <li>
   *                <p>For MySQL 5.7, minor version 5.7.16 or higher</p>
   *             </li>
   *             <li>
   *                <p>Aurora 5.6 or higher</p>
   *             </li>
   *          </ul>
   * @public
   */
  IAMDatabaseAuthenticationEnabled?: boolean | undefined;

  /**
   * <p>Indicates when the DB instance was created.</p>
   *          <p>For more information about the validation and formatting of timestamp fields in Security Hub, see <a href="https://docs.aws.amazon.com/securityhub/1.0/APIReference/Welcome.html#timestamps">Timestamps</a>.</p>
   * @public
   */
  InstanceCreateTime?: string | undefined;

  /**
   * <p>If <code>StorageEncrypted</code> is true, the KMS key identifier for the encrypted
   *          DB instance.</p>
   * @public
   */
  KmsKeyId?: string | undefined;

  /**
   * <p>Specifies the accessibility options for the DB instance.</p>
   *          <p>A value of true specifies an Internet-facing instance with a publicly resolvable DNS
   *          name, which resolves to a public IP address.</p>
   *          <p>A value of false specifies an internal instance with a DNS name that resolves to a
   *          private IP address. </p>
   * @public
   */
  PubliclyAccessible?: boolean | undefined;

  /**
   * <p>Specifies whether the DB instance is encrypted.</p>
   * @public
   */
  StorageEncrypted?: boolean | undefined;

  /**
   * <p>The ARN from the key store with which the instance is associated for TDE
   *          encryption.</p>
   * @public
   */
  TdeCredentialArn?: string | undefined;

  /**
   * <p>A list of VPC security groups that the DB instance belongs to.</p>
   * @public
   */
  VpcSecurityGroups?: AwsRdsDbInstanceVpcSecurityGroup[] | undefined;

  /**
   * <p>Whether the DB instance is a multiple Availability Zone deployment.</p>
   * @public
   */
  MultiAz?: boolean | undefined;

  /**
   * <p>The ARN of the CloudWatch Logs log stream that receives the enhanced monitoring metrics
   *          data for the DB instance.</p>
   * @public
   */
  EnhancedMonitoringResourceArn?: string | undefined;

  /**
   * <p>The current status of the DB instance.</p>
   * @public
   */
  DbInstanceStatus?: string | undefined;

  /**
   * <p>The master user name of the DB instance.</p>
   * @public
   */
  MasterUsername?: string | undefined;

  /**
   * <p>The amount of storage (in gigabytes) to initially allocate for the DB instance.</p>
   * @public
   */
  AllocatedStorage?: number | undefined;

  /**
   * <p>The range of time each day when automated backups are created, if automated backups are
   *          enabled.</p>
   *          <p>Uses the format <code>HH:MM-HH:MM</code>. For example, <code>04:52-05:22</code>.</p>
   * @public
   */
  PreferredBackupWindow?: string | undefined;

  /**
   * <p>The number of days for which to retain automated backups.</p>
   * @public
   */
  BackupRetentionPeriod?: number | undefined;

  /**
   * <p>A list of the DB security groups to assign to the DB instance.</p>
   * @public
   */
  DbSecurityGroups?: string[] | undefined;

  /**
   * <p>A list of the DB parameter groups to assign to the DB instance.</p>
   * @public
   */
  DbParameterGroups?: AwsRdsDbParameterGroup[] | undefined;

  /**
   * <p>The Availability Zone where the DB instance will be created.</p>
   * @public
   */
  AvailabilityZone?: string | undefined;

  /**
   * <p>Information about the subnet group that is associated with the DB instance.</p>
   * @public
   */
  DbSubnetGroup?: AwsRdsDbSubnetGroup | undefined;

  /**
   * <p>The weekly time range during which system maintenance can occur, in Universal
   *          Coordinated Time (UTC).</p>
   *          <p>Uses the format <code><day>:HH:MM-<day>:HH:MM</code>.</p>
   *          <p>For the day values, use
   *             <code>mon</code>|<code>tue</code>|<code>wed</code>|<code>thu</code>|<code>fri</code>|<code>sat</code>|<code>sun</code>.</p>
   *          <p>For example, <code>sun:09:32-sun:10:02</code>.</p>
   * @public
   */
  PreferredMaintenanceWindow?: string | undefined;

  /**
   * <p>Changes to the DB instance that are currently pending.</p>
   * @public
   */
  PendingModifiedValues?: AwsRdsDbPendingModifiedValues | undefined;

  /**
   * <p>Specifies the latest time to which a database can be restored with point-in-time
   *          restore.</p>
   *          <p>For more information about the validation and formatting of timestamp fields in Security Hub, see <a href="https://docs.aws.amazon.com/securityhub/1.0/APIReference/Welcome.html#timestamps">Timestamps</a>.</p>
   * @public
   */
  LatestRestorableTime?: string | undefined;

  /**
   * <p>Indicates whether minor version patches are applied automatically.</p>
   * @public
   */
  AutoMinorVersionUpgrade?: boolean | undefined;

  /**
   * <p>If this DB instance is a read replica, contains the identifier of the source DB
   *          instance.</p>
   * @public
   */
  ReadReplicaSourceDBInstanceIdentifier?: string | undefined;

  /**
   * <p>List of identifiers of the read replicas associated with this DB instance.</p>
   * @public
   */
  ReadReplicaDBInstanceIdentifiers?: string[] | undefined;

  /**
   * <p>List of identifiers of Aurora DB clusters to which the RDS DB instance is replicated as
   *          a read replica.</p>
   * @public
   */
  ReadReplicaDBClusterIdentifiers?: string[] | undefined;

  /**
   * <p>License model information for this DB instance.</p>
   * @public
   */
  LicenseModel?: string | undefined;

  /**
   * <p>Specifies the provisioned IOPS (I/O operations per second) for this DB instance.</p>
   * @public
   */
  Iops?: number | undefined;

  /**
   * <p>The list of option group memberships for this DB instance.</p>
   * @public
   */
  OptionGroupMemberships?: AwsRdsDbOptionGroupMembership[] | undefined;

  /**
   * <p>The name of the character set that this DB instance is associated with.</p>
   * @public
   */
  CharacterSetName?: string | undefined;

  /**
   * <p>For a DB instance with multi-Availability Zone support, the name of the secondary
   *          Availability Zone.</p>
   * @public
   */
  SecondaryAvailabilityZone?: string | undefined;

  /**
   * <p>The status of a read replica. If the instance isn't a read replica, this is
   *          empty.</p>
   * @public
   */
  StatusInfos?: AwsRdsDbStatusInfo[] | undefined;

  /**
   * <p>The storage type for the DB instance.</p>
   * @public
   */
  StorageType?: string | undefined;

  /**
   * <p>The Active Directory domain membership records associated with the DB instance.</p>
   * @public
   */
  DomainMemberships?: AwsRdsDbDomainMembership[] | undefined;

  /**
   * <p>Whether to copy resource tags to snapshots of the DB instance.</p>
   * @public
   */
  CopyTagsToSnapshot?: boolean | undefined;

  /**
   * <p>The interval, in seconds, between points when enhanced monitoring metrics are collected
   *          for the DB instance.</p>
   * @public
   */
  MonitoringInterval?: number | undefined;

  /**
   * <p>The ARN for the IAM role that permits Amazon RDS to send enhanced monitoring metrics to
   *          CloudWatch Logs.</p>
   * @public
   */
  MonitoringRoleArn?: string | undefined;

  /**
   * <p>The order in which to promote an Aurora replica to the primary instance after a failure
   *          of the existing primary instance.</p>
   * @public
   */
  PromotionTier?: number | undefined;

  /**
   * <p>The time zone of the DB instance.</p>
   * @public
   */
  Timezone?: string | undefined;

  /**
   * <p>Indicates whether Performance Insights is enabled for the DB instance.</p>
   * @public
   */
  PerformanceInsightsEnabled?: boolean | undefined;

  /**
   * <p>The identifier of the KMS key used to encrypt the Performance Insights data.</p>
   * @public
   */
  PerformanceInsightsKmsKeyId?: string | undefined;

  /**
   * <p>The number of days to retain Performance Insights data.</p>
   * @public
   */
  PerformanceInsightsRetentionPeriod?: number | undefined;

  /**
   * <p>A list of log types that this DB instance is configured to export to CloudWatch Logs.</p>
   * @public
   */
  EnabledCloudWatchLogsExports?: string[] | undefined;

  /**
   * <p>The number of CPU cores and the number of threads per core for the DB instance class of
   *          the DB instance.</p>
   * @public
   */
  ProcessorFeatures?: AwsRdsDbProcessorFeature[] | undefined;

  /**
   * <p>Specifies the connection endpoint.</p>
   * @public
   */
  ListenerEndpoint?: AwsRdsDbInstanceEndpoint | undefined;

  /**
   * <p>The upper limit to which Amazon RDS can automatically scale the storage of the DB
   *          instance.</p>
   * @public
   */
  MaxAllocatedStorage?: number | undefined;
}

/**
 * <p>EC2 security group information for an RDS DB security group.</p>
 * @public
 */
export interface AwsRdsDbSecurityGroupEc2SecurityGroup {
  /**
   * <p>Specifies the ID for the EC2 security group.</p>
   * @public
   */
  Ec2SecurityGroupId?: string | undefined;

  /**
   * <p>Specifies the name of the EC2 security group.</p>
   * @public
   */
  Ec2SecurityGroupName?: string | undefined;

  /**
   * <p>Provides the Amazon Web Services ID of the owner of the EC2 security group.</p>
   * @public
   */
  Ec2SecurityGroupOwnerId?: string | undefined;

  /**
   * <p>Provides the status of the EC2 security group.</p>
   * @public
   */
  Status?: string | undefined;
}

/**
 * <p>IP range information for an RDS DB security group.</p>
 * @public
 */
export interface AwsRdsDbSecurityGroupIpRange {
  /**
   * <p>Specifies the IP range.</p>
   * @public
   */
  CidrIp?: string | undefined;

  /**
   * <p>Specifies the status of the IP range.</p>
   * @public
   */
  Status?: string | undefined;
}

/**
 * <p>Provides information about an Amazon RDS DB security group.</p>
 * @public
 */
export interface AwsRdsDbSecurityGroupDetails {
  /**
   * <p>The ARN for the DB security group.</p>
   * @public
   */
  DbSecurityGroupArn?: string | undefined;

  /**
   * <p>Provides the description of the DB security group.</p>
   * @public
   */
  DbSecurityGroupDescription?: string | undefined;

  /**
   * <p>Specifies the name of the DB security group.</p>
   * @public
   */
  DbSecurityGroupName?: string | undefined;

  /**
   * <p>Contains a list of EC2 security groups.</p>
   * @public
   */
  Ec2SecurityGroups?: AwsRdsDbSecurityGroupEc2SecurityGroup[] | undefined;

  /**
   * <p>Contains a list of IP ranges.</p>
   * @public
   */
  IpRanges?: AwsRdsDbSecurityGroupIpRange[] | undefined;

  /**
   * <p>Provides the Amazon Web Services ID of the owner of a specific DB security group.</p>
   * @public
   */
  OwnerId?: string | undefined;

  /**
   * <p>Provides VPC ID associated with the DB security group.
   *       </p>
   * @public
   */
  VpcId?: string | undefined;
}

/**
 * <p>Provides details about an Amazon RDS DB cluster snapshot.</p>
 * @public
 */
export interface AwsRdsDbSnapshotDetails {
  /**
   * <p>The name or ARN of the DB snapshot that is used to restore the DB instance.</p>
   * @public
   */
  DbSnapshotIdentifier?: string | undefined;

  /**
   * <p>A name for the DB instance.</p>
   * @public
   */
  DbInstanceIdentifier?: string | undefined;

  /**
   * <p>When the snapshot was taken in Coordinated Universal Time (UTC).</p>
   * @public
   */
  SnapshotCreateTime?: string | undefined;

  /**
   * <p>The name of the database engine to use for this DB instance. Valid values are as follows:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>aurora</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>aurora-mysql</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>aurora-postgresql</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>c</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>mariadb</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>mysql</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>oracle-ee</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>oracle-se</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>oracle-se1</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>oracle-se2</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>sqlserver-ee</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>sqlserver-ex</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>sqlserver-se</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>sqlserver-web</code>
   *                </p>
   *             </li>
   *          </ul>
   * @public
   */
  Engine?: string | undefined;

  /**
   * <p>The amount of storage (in gigabytes) to be initially allocated for the database instance.</p>
   * @public
   */
  AllocatedStorage?: number | undefined;

  /**
   * <p>The status of this DB snapshot.</p>
   * @public
   */
  Status?: string | undefined;

  /**
   * <p>The port that the database engine was listening on at the time of the snapshot.</p>
   * @public
   */
  Port?: number | undefined;

  /**
   * <p>Specifies the name of the Availability Zone in which the DB instance was located at the time of the DB snapshot.</p>
   * @public
   */
  AvailabilityZone?: string | undefined;

  /**
   * <p>The VPC ID associated with the DB snapshot.</p>
   * @public
   */
  VpcId?: string | undefined;

  /**
   * <p>Specifies the time in Coordinated Universal Time (UTC) when the DB instance, from which the snapshot was taken, was created.</p>
   * @public
   */
  InstanceCreateTime?: string | undefined;

  /**
   * <p>The master user name for the DB snapshot.</p>
   * @public
   */
  MasterUsername?: string | undefined;

  /**
   * <p>The version of the database engine.</p>
   * @public
   */
  EngineVersion?: string | undefined;

  /**
   * <p>License model information for the restored DB instance.</p>
   * @public
   */
  LicenseModel?: string | undefined;

  /**
   * <p>The type of the DB snapshot.</p>
   * @public
   */
  SnapshotType?: string | undefined;

  /**
   * <p>The provisioned IOPS (I/O operations per second) value of the DB instance at the time of the snapshot.</p>
   * @public
   */
  Iops?: number | undefined;

  /**
   * <p>The option group name for the DB snapshot.</p>
   * @public
   */
  OptionGroupName?: string | undefined;

  /**
   * <p>The percentage of the estimated data that has been transferred.</p>
   * @public
   */
  PercentProgress?: number | undefined;

  /**
   * <p>The Amazon Web Services Region that the DB snapshot was created in or copied from.</p>
   * @public
   */
  SourceRegion?: string | undefined;

  /**
   * <p>The DB snapshot ARN that the DB snapshot was copied from.</p>
   * @public
   */
  SourceDbSnapshotIdentifier?: string | undefined;

  /**
   * <p>The storage type associated with the DB snapshot. Valid values are as follows:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>gp2</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>io1</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>standard</code>
   *                </p>
   *             </li>
   *          </ul>
   * @public
   */
  StorageType?: string | undefined;

  /**
   * <p>The ARN from the key store with which to associate the instance for TDE encryption.</p>
   * @public
   */
  TdeCredentialArn?: string | undefined;

  /**
   * <p>Whether the DB snapshot is encrypted.</p>
   * @public
   */
  Encrypted?: boolean | undefined;

  /**
   * <p>If <code>Encrypted</code> is <code>true</code>, the KMS key identifier for the encrypted DB snapshot.</p>
   * @public
   */
  KmsKeyId?: string | undefined;

  /**
   * <p>The time zone of the DB snapshot.</p>
   * @public
   */
  Timezone?: string | undefined;

  /**
   * <p>Whether mapping of IAM accounts to database accounts is enabled.</p>
   * @public
   */
  IamDatabaseAuthenticationEnabled?: boolean | undefined;

  /**
   * <p>The number of CPU cores and the number of threads per core for the DB instance class of the DB instance.</p>
   * @public
   */
  ProcessorFeatures?: AwsRdsDbProcessorFeature[] | undefined;

  /**
   * <p>The identifier for the source DB instance.</p>
   * @public
   */
  DbiResourceId?: string | undefined;
}

/**
 * <p>Details about an Amazon RDS event notification subscription. The subscription allows Amazon RDS to post events to an SNS topic.</p>
 * @public
 */
export interface AwsRdsEventSubscriptionDetails {
  /**
   * <p>The identifier of the account that is associated with the event notification subscription.</p>
   * @public
   */
  CustSubscriptionId?: string | undefined;

  /**
   * <p>The identifier of the event notification subscription.</p>
   * @public
   */
  CustomerAwsId?: string | undefined;

  /**
   * <p>Whether the event notification subscription is enabled.</p>
   * @public
   */
  Enabled?: boolean | undefined;

  /**
   * <p>The list of event categories for the event notification subscription.</p>
   * @public
   */
  EventCategoriesList?: string[] | undefined;

  /**
   * <p>The ARN of the event notification subscription.</p>
   * @public
   */
  EventSubscriptionArn?: string | undefined;

  /**
   * <p>The ARN of the SNS topic to post the event notifications to.</p>
   * @public
   */
  SnsTopicArn?: string | undefined;

  /**
   * <p>A list of source identifiers for the event notification subscription.</p>
   * @public
   */
  SourceIdsList?: string[] | undefined;

  /**
   * <p>The source type for the event notification subscription.</p>
   * @public
   */
  SourceType?: string | undefined;

  /**
   * <p>The status of the event notification subscription.</p>
   *          <p>Valid values: <code>creating</code> | <code>modifying</code> | <code>deleting</code> | <code>active</code> | <code>no-permission</code> | <code>topic-not-exist</code>
   *          </p>
   * @public
   */
  Status?: string | undefined;

  /**
   * <p>The datetime when the event notification subscription was created.</p>
   *          <p>For more information about the validation and formatting of timestamp fields in Security Hub, see <a href="https://docs.aws.amazon.com/securityhub/1.0/APIReference/Welcome.html#timestamps">Timestamps</a>.</p>
   * @public
   */
  SubscriptionCreationTime?: string | undefined;
}

/**
 * <p>A node in an Amazon Redshift cluster.</p>
 * @public
 */
export interface AwsRedshiftClusterClusterNode {
  /**
   * <p>The role of the node. A node might be a leader node or a compute node.</p>
   * @public
   */
  NodeRole?: string | undefined;

  /**
   * <p>The private IP address of the node.</p>
   * @public
   */
  PrivateIpAddress?: string | undefined;

  /**
   * <p>The public IP address of the node.</p>
   * @public
   */
  PublicIpAddress?: string | undefined;
}

/**
 * <p>The status of a parameter in a cluster parameter group for an Amazon Redshift
 *          cluster.</p>
 * @public
 */
export interface AwsRedshiftClusterClusterParameterStatus {
  /**
   * <p>The name of the parameter.</p>
   * @public
   */
  ParameterName?: string | undefined;

  /**
   * <p>The status of the parameter. Indicates whether the parameter is in sync with the
   *          database, waiting for a cluster reboot, or encountered an error when it was applied.</p>
   *          <p>Valid values: <code>in-sync</code> | <code>pending-reboot</code> | <code>applying</code>
   *          | <code>invalid-parameter</code> | <code>apply-deferred</code> | <code>apply-error</code> |
   *             <code>unknown-error</code>
   *          </p>
   * @public
   */
  ParameterApplyStatus?: string | undefined;

  /**
   * <p>The error that prevented the parameter from being applied to the database.</p>
   * @public
   */
  ParameterApplyErrorDescription?: string | undefined;
}

/**
 * <p>A cluster parameter group that is associated with an Amazon Redshift cluster.</p>
 * @public
 */
export interface AwsRedshiftClusterClusterParameterGroup {
  /**
   * <p>The list of parameter statuses.</p>
   * @public
   */
  ClusterParameterStatusList?: AwsRedshiftClusterClusterParameterStatus[] | undefined;

  /**
   * <p>The status of updates to the parameters.</p>
   * @public
   */
  ParameterApplyStatus?: string | undefined;

  /**
   * <p>The name of the parameter group.</p>
   * @public
   */
  ParameterGroupName?: string | undefined;
}

/**
 * <p>A security group that is associated with the cluster.</p>
 * @public
 */
export interface AwsRedshiftClusterClusterSecurityGroup {
  /**
   * <p>The name of the cluster security group.</p>
   * @public
   */
  ClusterSecurityGroupName?: string | undefined;

  /**
   * <p>The status of the cluster security group.</p>
   * @public
   */
  Status?: string | undefined;
}

/**
 * <p>You can configure Amazon Redshift to copy snapshots for a cluster to another Amazon Web Services Region. This parameter
 *          provides information about a cross-Region snapshot copy.</p>
 * @public
 */
export interface AwsRedshiftClusterClusterSnapshotCopyStatus {
  /**
   * <p>The destination Region that snapshots are automatically copied to when cross-Region
   *          snapshot copy is enabled.</p>
   * @public
   */
  DestinationRegion?: string | undefined;

  /**
   * <p>The number of days that manual snapshots are retained in the destination Region after
   *          they are copied from a source Region.</p>
   *          <p>If the value is <code>-1</code>,
   *          then the manual snapshot is retained indefinitely.</p>
   *          <p>Valid values: Either <code>-1</code>
   *          or an integer between 1 and 3,653</p>
   * @public
   */
  ManualSnapshotRetentionPeriod?: number | undefined;

  /**
   * <p>The number of days to retain automated snapshots in the destination Region after they
   *          are copied from a source Region.</p>
   * @public
   */
  RetentionPeriod?: number | undefined;

  /**
   * <p>The name of the snapshot copy grant.</p>
   * @public
   */
  SnapshotCopyGrantName?: string | undefined;
}

/**
 * <p>A time windows during which maintenance was deferred for an Amazon Redshift
 *          cluster.</p>
 * @public
 */
export interface AwsRedshiftClusterDeferredMaintenanceWindow {
  /**
   * <p>The end of the time window for which maintenance was deferred.</p>
   *          <p>For more information about the validation and formatting of timestamp fields in Security Hub, see <a href="https://docs.aws.amazon.com/securityhub/1.0/APIReference/Welcome.html#timestamps">Timestamps</a>.</p>
   * @public
   */
  DeferMaintenanceEndTime?: string | undefined;

  /**
   * <p>The identifier of the maintenance window.</p>
   * @public
   */
  DeferMaintenanceIdentifier?: string | undefined;

  /**
   * <p>The start of the time window for which maintenance was deferred.</p>
   *          <p>For more information about the validation and formatting of timestamp fields in Security Hub, see <a href="https://docs.aws.amazon.com/securityhub/1.0/APIReference/Welcome.html#timestamps">Timestamps</a>.</p>
   * @public
   */
  DeferMaintenanceStartTime?: string | undefined;
}

/**
 * <p>The status of the elastic IP (EIP) address for an Amazon Redshift cluster.</p>
 * @public
 */
export interface AwsRedshiftClusterElasticIpStatus {
  /**
   * <p>The elastic IP address for the cluster.</p>
   * @public
   */
  ElasticIp?: string | undefined;

  /**
   * <p>The status of the elastic IP address.</p>
   * @public
   */
  Status?: string | undefined;
}

/**
 * <p>The connection endpoint for an Amazon Redshift cluster.</p>
 * @public
 */
export interface AwsRedshiftClusterEndpoint {
  /**
   * <p>The DNS address of the cluster.</p>
   * @public
   */
  Address?: string | undefined;

  /**
   * <p>The port that the database engine listens on.</p>
   * @public
   */
  Port?: number | undefined;
}

/**
 * <p>Information about whether an Amazon Redshift cluster finished applying any hardware
 *          changes to security module (HSM) settings that were specified in a modify cluster
 *          command.</p>
 * @public
 */
export interface AwsRedshiftClusterHsmStatus {
  /**
   * <p>The name of the HSM client certificate that the Amazon Redshift cluster uses to retrieve
   *          the data encryption keys that are stored in an HSM.</p>
   * @public
   */
  HsmClientCertificateIdentifier?: string | undefined;

  /**
   * <p>The name of the HSM configuration that contains the information that the Amazon Redshift
   *          cluster can use to retrieve and store keys in an HSM.</p>
   * @public
   */
  HsmConfigurationIdentifier?: string | undefined;

  /**
   * <p>Indicates whether the Amazon Redshift cluster has finished applying any HSM settings
   *          changes specified in a modify cluster command.</p>
   *          <p>Type: String</p>
   *          <p>Valid values: <code>active</code> | <code>applying</code>
   *          </p>
   * @public
   */
  Status?: string | undefined;
}

/**
 * <p>An IAM role that the cluster can use to access other Amazon Web Services services.</p>
 * @public
 */
export interface AwsRedshiftClusterIamRole {
  /**
   * <p>The status of the IAM role's association with the cluster.</p>
   *          <p>Valid values: <code>in-sync</code> | <code>adding</code> | <code>removing</code>
   *          </p>
   * @public
   */
  ApplyStatus?: string | undefined;

  /**
   * <p>The ARN of the IAM role.</p>
   * @public
   */
  IamRoleArn?: string | undefined;
}

/**
 * <p>Provides information about the logging status of the cluster.</p>
 * @public
 */
export interface AwsRedshiftClusterLoggingStatus {
  /**
   * <p>The name of the S3 bucket where the log files are stored.</p>
   * @public
   */
  BucketName?: string | undefined;

  /**
   * <p>The message indicating that the logs failed to be delivered.</p>
   * @public
   */
  LastFailureMessage?: string | undefined;

  /**
   * <p>The last time when logs failed to be delivered.</p>
   *          <p>For more information about the validation and formatting of timestamp fields in Security Hub, see <a href="https://docs.aws.amazon.com/securityhub/1.0/APIReference/Welcome.html#timestamps">Timestamps</a>.</p>
   * @public
   */
  LastFailureTime?: string | undefined;

  /**
   * <p>The last time that logs were delivered successfully.</p>
   *          <p>For more information about the validation and formatting of timestamp fields in Security Hub, see <a href="https://docs.aws.amazon.com/securityhub/1.0/APIReference/Welcome.html#timestamps">Timestamps</a>.</p>
   * @public
   */
  LastSuccessfulDeliveryTime?: string | undefined;

  /**
   * <p>Indicates whether logging is enabled.</p>
   * @public
   */
  LoggingEnabled?: boolean | undefined;

  /**
   * <p>Provides the prefix applied to the log file names.</p>
   * @public
   */
  S3KeyPrefix?: string | undefined;
}

/**
 * <p>Changes to the Amazon Redshift cluster that are currently pending.</p>
 * @public
 */
export interface AwsRedshiftClusterPendingModifiedValues {
  /**
   * <p>The pending or in-progress change to the automated snapshot retention period.</p>
   * @public
   */
  AutomatedSnapshotRetentionPeriod?: number | undefined;

  /**
   * <p>The pending or in-progress change to the identifier for the cluster.</p>
   * @public
   */
  ClusterIdentifier?: string | undefined;

  /**
   * <p>The pending or in-progress change to the cluster type.</p>
   * @public
   */
  ClusterType?: string | undefined;

  /**
   * <p>The pending or in-progress change to the service version.</p>
   * @public
   */
  ClusterVersion?: string | undefined;

  /**
   * <p>The encryption type for a cluster.</p>
   * @public
   */
  EncryptionType?: string | undefined;

  /**
   * <p>Indicates whether to create the cluster with enhanced VPC routing enabled.</p>
   * @public
   */
  EnhancedVpcRouting?: boolean | undefined;

  /**
   * <p>The name of the maintenance track that the cluster changes to during the next
   *          maintenance window.</p>
   * @public
   */
  MaintenanceTrackName?: string | undefined;

  /**
   * <p>The pending or in-progress change to the master user password for the cluster.</p>
   * @public
   */
  MasterUserPassword?: string | undefined;

  /**
   * <p>The pending or in-progress change to the cluster's node type.</p>
   * @public
   */
  NodeType?: string | undefined;

  /**
   * <p>The pending or in-progress change to the number of nodes in the cluster.</p>
   * @public
   */
  NumberOfNodes?: number | undefined;

  /**
   * <p>The pending or in-progress change to whether the cluster can be connected to from the
   *          public network.</p>
   * @public
   */
  PubliclyAccessible?: boolean | undefined;
}

/**
 * <p>Information about the resize operation for the cluster.</p>
 * @public
 */
export interface AwsRedshiftClusterResizeInfo {
  /**
   * <p>Indicates whether the resize operation can be canceled.</p>
   * @public
   */
  AllowCancelResize?: boolean | undefined;

  /**
   * <p>The type of resize operation.</p>
   *          <p>Valid values: <code>ClassicResize</code>
   *          </p>
   * @public
   */
  ResizeType?: string | undefined;
}

/**
 * <p>Information about the status of a cluster restore action. It only applies if the cluster
 *          was created by restoring a snapshot.</p>
 * @public
 */
export interface AwsRedshiftClusterRestoreStatus {
  /**
   * <p>The number of megabytes per second being transferred from the backup storage. Returns
   *          the average rate for a completed backup.</p>
   *          <p>This field is only updated when you restore to DC2 and DS2 node types.</p>
   * @public
   */
  CurrentRestoreRateInMegaBytesPerSecond?: number | undefined;

  /**
   * <p>The amount of time an in-progress restore has been running, or the amount of time it
   *          took a completed restore to finish.</p>
   *          <p>This field is only updated when you restore to DC2 and DS2 node types.</p>
   * @public
   */
  ElapsedTimeInSeconds?: number | undefined;

  /**
   * <p>The estimate of the time remaining before the restore is complete. Returns 0 for a
   *          completed restore.</p>
   *          <p>This field is only updated when you restore to DC2 and DS2 node types.</p>
   * @public
   */
  EstimatedTimeToCompletionInSeconds?: number | undefined;

  /**
   * <p>The number of megabytes that were transferred from snapshot storage.</p>
   *          <p>This field is only updated when you restore to DC2 and DS2 node types.</p>
   * @public
   */
  ProgressInMegaBytes?: number | undefined;

  /**
   * <p>The size of the set of snapshot data that was used to restore the cluster.</p>
   *          <p>This field is only updated when you restore to DC2 and DS2 node types.</p>
   * @public
   */
  SnapshotSizeInMegaBytes?: number | undefined;

  /**
   * <p>The status of the restore action.</p>
   *          <p>Valid values: <code>starting</code> | <code>restoring</code> | <code>completed</code> |
   *             <code>failed</code>
   *          </p>
   * @public
   */
  Status?: string | undefined;
}

/**
 * <p>A VPC security group that the cluster belongs to, if the cluster is in a VPC.</p>
 * @public
 */
export interface AwsRedshiftClusterVpcSecurityGroup {
  /**
   * <p>The status of the VPC security group.</p>
   * @public
   */
  Status?: string | undefined;

  /**
   * <p>The identifier of the VPC security group.</p>
   * @public
   */
  VpcSecurityGroupId?: string | undefined;
}

/**
 * <p>Details about an Amazon Redshift cluster.</p>
 * @public
 */
export interface AwsRedshiftClusterDetails {
  /**
   * <p>Indicates whether major version upgrades are applied automatically to the cluster during
   *          the maintenance window.</p>
   * @public
   */
  AllowVersionUpgrade?: boolean | undefined;

  /**
   * <p>The number of days that automatic cluster snapshots are retained.</p>
   * @public
   */
  AutomatedSnapshotRetentionPeriod?: number | undefined;

  /**
   * <p>The name of the Availability Zone in which the cluster is located.</p>
   * @public
   */
  AvailabilityZone?: string | undefined;

  /**
   * <p>The availability status of the cluster for queries. Possible values are the
   *          following:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>Available</code> - The cluster is available for queries.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>Unavailable</code> - The cluster is not available for queries.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>Maintenance</code> - The cluster is intermittently available for queries due
   *                to maintenance activities.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>Modifying</code> -The cluster is intermittently available for queries due to
   *                changes that modify the cluster.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>Failed</code> - The cluster failed and is not available for queries.</p>
   *             </li>
   *          </ul>
   * @public
   */
  ClusterAvailabilityStatus?: string | undefined;

  /**
   * <p>Indicates when the cluster was created.</p>
   *          <p>For more information about the validation and formatting of timestamp fields in Security Hub, see <a href="https://docs.aws.amazon.com/securityhub/1.0/APIReference/Welcome.html#timestamps">Timestamps</a>.</p>
   * @public
   */
  ClusterCreateTime?: string | undefined;

  /**
   * <p>The unique identifier of the cluster.</p>
   * @public
   */
  ClusterIdentifier?: string | undefined;

  /**
   * <p>The nodes in the cluster.</p>
   * @public
   */
  ClusterNodes?: AwsRedshiftClusterClusterNode[] | undefined;

  /**
   * <p>The list of cluster parameter groups that are associated with this cluster.</p>
   * @public
   */
  ClusterParameterGroups?: AwsRedshiftClusterClusterParameterGroup[] | undefined;

  /**
   * <p>The public key for the cluster.</p>
   * @public
   */
  ClusterPublicKey?: string | undefined;

  /**
   * <p>The specific revision number of the database in the cluster.</p>
   * @public
   */
  ClusterRevisionNumber?: string | undefined;

  /**
   * <p>A list of cluster security groups that are associated with the cluster.</p>
   * @public
   */
  ClusterSecurityGroups?: AwsRedshiftClusterClusterSecurityGroup[] | undefined;

  /**
   * <p>Information about the destination Region and retention period for the cross-Region
   *          snapshot copy.</p>
   * @public
   */
  ClusterSnapshotCopyStatus?: AwsRedshiftClusterClusterSnapshotCopyStatus | undefined;

  /**
   * <p>The current status of the cluster.</p>
   *          <p>Valid values: <code>available</code> | <code>available, prep-for-resize</code> |
   *             <code>available, resize-cleanup</code> |<code> cancelling-resize</code> |
   *             <code>creating</code> | <code>deleting</code> | <code>final-snapshot</code> |
   *             <code>hardware-failure</code> | <code>incompatible-hsm</code> |<code>
   *             incompatible-network</code> | <code>incompatible-parameters</code> |
   *             <code>incompatible-restore</code> | <code>modifying</code> | <code>paused</code> |
   *             <code>rebooting</code> | <code>renaming</code> | <code>resizing</code> |
   *             <code>rotating-keys</code> | <code>storage-full</code> |
   *          <code>updating-hsm</code>
   *          </p>
   * @public
   */
  ClusterStatus?: string | undefined;

  /**
   * <p>The name of the subnet group that is associated with the cluster. This parameter is
   *          valid only when the cluster is in a VPC.</p>
   * @public
   */
  ClusterSubnetGroupName?: string | undefined;

  /**
   * <p>The version ID of the Amazon Redshift engine that runs on the cluster.</p>
   * @public
   */
  ClusterVersion?: string | undefined;

  /**
   * <p>The name of the initial database that was created when the cluster was created.</p>
   *          <p>The same name is returned for the life of the cluster.</p>
   *          <p>If an initial database is not specified, a database named <code>devdev</code> is created
   *          by default.</p>
   * @public
   */
  DBName?: string | undefined;

  /**
   * <p>List of time windows during which maintenance was deferred.</p>
   * @public
   */
  DeferredMaintenanceWindows?: AwsRedshiftClusterDeferredMaintenanceWindow[] | undefined;

  /**
   * <p>Information about the status of the Elastic IP (EIP) address.</p>
   * @public
   */
  ElasticIpStatus?: AwsRedshiftClusterElasticIpStatus | undefined;

  /**
   * <p>The number of nodes that you can use the elastic resize method to resize the cluster
   *          to.</p>
   * @public
   */
  ElasticResizeNumberOfNodeOptions?: string | undefined;

  /**
   * <p>Indicates whether the data in the cluster is encrypted at rest.</p>
   * @public
   */
  Encrypted?: boolean | undefined;

  /**
   * <p>The connection endpoint.</p>
   * @public
   */
  Endpoint?: AwsRedshiftClusterEndpoint | undefined;

  /**
   * <p>Indicates whether to create the cluster with enhanced VPC routing enabled.</p>
   * @public
   */
  EnhancedVpcRouting?: boolean | undefined;

  /**
   * <p>Indicates when the next snapshot is expected to be taken. The cluster must have a valid
   *          snapshot schedule and have backups enabled.</p>
   *          <p>For more information about the validation and formatting of timestamp fields in Security Hub, see <a href="https://docs.aws.amazon.com/securityhub/1.0/APIReference/Welcome.html#timestamps">Timestamps</a>.</p>
   * @public
   */
  ExpectedNextSnapshotScheduleTime?: string | undefined;

  /**
   * <p>The status of the next expected snapshot.</p>
   *          <p>Valid values: <code>OnTrack</code> | <code>Pending</code>
   *          </p>
   * @public
   */
  ExpectedNextSnapshotScheduleTimeStatus?: string | undefined;

  /**
   * <p>Information about whether the Amazon Redshift cluster finished applying any changes to
   *          hardware security module (HSM) settings that were specified in a modify cluster
   *          command.</p>
   * @public
   */
  HsmStatus?: AwsRedshiftClusterHsmStatus | undefined;

  /**
   * <p>A list of IAM roles that the cluster can use to access other Amazon Web Services services.</p>
   * @public
   */
  IamRoles?: AwsRedshiftClusterIamRole[] | undefined;

  /**
   * <p>The identifier of the KMS encryption key that is used to encrypt data in the
   *          cluster.</p>
   * @public
   */
  KmsKeyId?: string | undefined;

  /**
   * <p>The name of the maintenance track for the cluster.</p>
   * @public
   */
  MaintenanceTrackName?: string | undefined;

  /**
   * <p>The default number of days to retain a manual snapshot.</p>
   *          <p>If the value is <code>-1</code>, the snapshot is retained indefinitely.</p>
   *          <p>This setting doesn't change the retention period of existing snapshots.</p>
   *          <p>Valid values: Either <code>-1</code> or an integer between 1 and 3,653</p>
   * @public
   */
  ManualSnapshotRetentionPeriod?: number | undefined;

  /**
   * <p>The master user name for the cluster. This name is used to connect to the database that
   *          is specified in as the value of <code>DBName</code>.</p>
   * @public
   */
  MasterUsername?: string | undefined;

  /**
   * <p>Indicates the start of the next maintenance window.</p>
   *          <p>For more information about the validation and formatting of timestamp fields in Security Hub, see <a href="https://docs.aws.amazon.com/securityhub/1.0/APIReference/Welcome.html#timestamps">Timestamps</a>.</p>
   * @public
   */
  NextMaintenanceWindowStartTime?: string | undefined;

  /**
   * <p>The node type for the nodes in the cluster.</p>
   * @public
   */
  NodeType?: string | undefined;

  /**
   * <p>The number of compute nodes in the cluster.</p>
   * @public
   */
  NumberOfNodes?: number | undefined;

  /**
   * <p>A list of cluster operations that are waiting to start.</p>
   * @public
   */
  PendingActions?: string[] | undefined;

  /**
   * <p>A list of changes to the cluster that are currently pending.</p>
   * @public
   */
  PendingModifiedValues?: AwsRedshiftClusterPendingModifiedValues | undefined;

  /**
   * <p>The weekly time range, in Universal Coordinated Time (UTC), during which system
   *          maintenance can occur.</p>
   *          <p>Format:
   *             <code>
   *                <i><day></i>:HH:MM-<i><day></i>:HH:MM</code>
   *          </p>
   *          <p>For the day values, use <code>mon</code> | <code>tue</code> | <code>wed</code> |
   *             <code>thu</code> | <code>fri</code> | <code>sat</code> | <code>sun</code>
   *          </p>
   *          <p>For example, <code>sun:09:32-sun:10:02</code>
   *          </p>
   * @public
   */
  PreferredMaintenanceWindow?: string | undefined;

  /**
   * <p>Whether the cluster can be accessed from a public network.</p>
   * @public
   */
  PubliclyAccessible?: boolean | undefined;

  /**
   * <p>Information about the resize operation for the cluster.</p>
   * @public
   */
  ResizeInfo?: AwsRedshiftClusterResizeInfo | undefined;

  /**
   * <p>Information about the status of a cluster restore action. Only applies to a cluster that
   *          was created by restoring a snapshot.</p>
   * @public
   */
  RestoreStatus?: AwsRedshiftClusterRestoreStatus | undefined;

  /**
   * <p>A unique identifier for the cluster snapshot schedule.</p>
   * @public
   */
  SnapshotScheduleIdentifier?: string | undefined;

  /**
   * <p>The current state of the cluster snapshot schedule.</p>
   *          <p>Valid values: <code>MODIFYING</code> | <code>ACTIVE</code> | <code>FAILED</code>
   *          </p>
   * @public
   */
  SnapshotScheduleState?: string | undefined;

  /**
   * <p>The identifier of the VPC that the cluster is in, if the cluster is in a VPC.</p>
   * @public
   */
  VpcId?: string | undefined;

  /**
   * <p>The list of VPC security groups that the cluster belongs to, if the cluster is in a
   *          VPC.</p>
   * @public
   */
  VpcSecurityGroups?: AwsRedshiftClusterVpcSecurityGroup[] | undefined;

  /**
   * <p>Information about the logging status of the cluster.</p>
   * @public
   */
  LoggingStatus?: AwsRedshiftClusterLoggingStatus | undefined;
}

/**
 * <p>
 *             An object that contains an optional comment about your Amazon Route 53 hosted zone.</p>
 * @public
 */
export interface AwsRoute53HostedZoneConfigDetails {
  /**
   * <p> Any comments that you include about the hosted zone.
   *         </p>
   * @public
   */
  Comment?: string | undefined;
}

/**
 * <p>
 *             An object that contains information about an Amazon Route 53 hosted zone. </p>
 * @public
 */
export interface AwsRoute53HostedZoneObjectDetails {
  /**
   * <p>
   *             The ID that Route 53 assigns to the hosted zone when you create it. </p>
   * @public
   */
  Id?: string | undefined;

  /**
   * <p>
   *             The name of the domain. For public hosted zones, this is the name that you have registered with your DNS registrar.</p>
   * @public
   */
  Name?: string | undefined;

  /**
   * <p>
   *             An object that includes the <code>Comment</code> element.</p>
   * @public
   */
  Config?: AwsRoute53HostedZoneConfigDetails | undefined;
}

/**
 * <p>
 *             The Amazon Resource Name (ARN) and other details of the Amazon CloudWatch Logs log group that Amazon Route 53 is
 * publishing logs to.</p>
 * @public
 */
export interface CloudWatchLogsLogGroupArnConfigDetails {
  /**
   * <p>
   *             The ARN of the CloudWatch Logs log group that Route 53 is publishing logs to.</p>
   * @public
   */
  CloudWatchLogsLogGroupArn?: string | undefined;

  /**
   * <p>
   *             The ID of the hosted zone that CloudWatch Logs is logging queries for. </p>
   * @public
   */
  HostedZoneId?: string | undefined;

  /**
   * <p>
   *             The ID for a DNS query logging configuration.
   *         </p>
   * @public
   */
  Id?: string | undefined;
}

/**
 * <p>
 *             Provides details about a specified Amazon Route 53 configuration for DNS query logging.</p>
 * @public
 */
export interface AwsRoute53QueryLoggingConfigDetails {
  /**
   * <p>
   *             The Amazon Resource Name (ARN) of the Amazon CloudWatch Logs log group that Route 53 is publishing logs to.</p>
   * @public
   */
  CloudWatchLogsLogGroupArn?: CloudWatchLogsLogGroupArnConfigDetails | undefined;
}

/**
 * <p>
 *             For private hosted zones, this is a complex type that contains information about an Amazon VPC.</p>
 * @public
 */
export interface AwsRoute53HostedZoneVpcDetails {
  /**
   * <p>
   *             The identifier of an Amazon VPC.
   *         </p>
   * @public
   */
  Id?: string | undefined;

  /**
   * <p>
   *             The Amazon Web Services Region that an Amazon VPC was created in.</p>
   * @public
   */
  Region?: string | undefined;
}

/**
 * <p>
 *             Provides details about a specified Amazon Route 53 hosted zone, including the four name servers assigned to
 * the hosted zone. A hosted zone represents a collection of records that can be managed together, belonging to a single parent
 * domain name.</p>
 * @public
 */
export interface AwsRoute53HostedZoneDetails {
  /**
   * <p>
   *             An object that contains information about the specified hosted zone.</p>
   * @public
   */
  HostedZone?: AwsRoute53HostedZoneObjectDetails | undefined;

  /**
   * <p>
   *             An object that contains information about the Amazon Virtual Private Clouds (Amazon VPCs) that are associated with
   * the specified hosted zone.</p>
   * @public
   */
  Vpcs?: AwsRoute53HostedZoneVpcDetails[] | undefined;

  /**
   * <p>
   *             An object that contains a list of the authoritative name servers for a hosted zone or for a reusable delegation set.</p>
   * @public
   */
  NameServers?: string[] | undefined;

  /**
   * <p>
   *             An array that contains one <code>QueryLoggingConfig</code> element for each DNS query logging configuration that is
   * associated with the current Amazon Web Services account.</p>
   * @public
   */
  QueryLoggingConfig?: AwsRoute53QueryLoggingConfigDetails | undefined;
}

/**
 * <p>provides information about the Amazon S3 Public Access Block configuration for accounts.</p>
 * @public
 */
export interface AwsS3AccountPublicAccessBlockDetails {
  /**
   * <p>Indicates whether to reject calls to update an S3 bucket if the calls include a public access control list (ACL).</p>
   * @public
   */
  BlockPublicAcls?: boolean | undefined;

  /**
   * <p>Indicates whether to reject calls to update the access policy for an S3 bucket or access point if the policy allows public access.</p>
   * @public
   */
  BlockPublicPolicy?: boolean | undefined;

  /**
   * <p>Indicates whether Amazon S3 ignores public ACLs that are associated with an S3 bucket.</p>
   * @public
   */
  IgnorePublicAcls?: boolean | undefined;

  /**
   * <p>Indicates whether to restrict access to an access point or S3 bucket that has a public policy to only Amazon Web Services service principals and authorized users within the S3 bucket owner's account.</p>
   * @public
   */
  RestrictPublicBuckets?: boolean | undefined;
}

/**
 * <p>
 *             The virtual private cloud (VPC) configuration for an Amazon S3 access point.
 *         </p>
 * @public
 */
export interface AwsS3AccessPointVpcConfigurationDetails {
  /**
   * <p>
   *             If this field is specified, this access point will only allow connections from the specified VPC ID.
   *         </p>
   * @public
   */
  VpcId?: string | undefined;
}

/**
 * <p>
 *             Returns configuration information about the specified Amazon S3 access point. S3 access points are named
 *             network endpoints that are attached to buckets that you can use to perform S3 object operations.
 *         </p>
 * @public
 */
export interface AwsS3AccessPointDetails {
  /**
   * <p>
   *             The Amazon Resource Name (ARN) of the access point.
   *         </p>
   * @public
   */
  AccessPointArn?: string | undefined;

  /**
   * <p>
   *             The name or alias of the access point.
   *         </p>
   * @public
   */
  Alias?: string | undefined;

  /**
   * <p>
   *             The name of the S3 bucket associated with the specified access point.
   *         </p>
   * @public
   */
  Bucket?: string | undefined;

  /**
   * <p>
   *             The Amazon Web Services account ID associated with the S3 bucket associated with this access point.
   *         </p>
   * @public
   */
  BucketAccountId?: string | undefined;

  /**
   * <p>
   *             The name of the specified access point.
   *         </p>
   * @public
   */
  Name?: string | undefined;

  /**
   * <p>
   *             Indicates whether this access point allows access from the public internet.
   *         </p>
   * @public
   */
  NetworkOrigin?: string | undefined;

  /**
   * <p>provides information about the Amazon S3 Public Access Block configuration for accounts.</p>
   * @public
   */
  PublicAccessBlockConfiguration?: AwsS3AccountPublicAccessBlockDetails | undefined;

  /**
   * <p>
   *             Contains the virtual private cloud (VPC) configuration for the specified access point.
   *         </p>
   * @public
   */
  VpcConfiguration?: AwsS3AccessPointVpcConfigurationDetails | undefined;
}

/**
 * <p>Information about what Amazon S3
 *          does when a multipart upload is incomplete.</p>
 * @public
 */
export interface AwsS3BucketBucketLifecycleConfigurationRulesAbortIncompleteMultipartUploadDetails {
  /**
   * <p>The number of days after which Amazon S3 cancels an incomplete multipart upload.</p>
   * @public
   */
  DaysAfterInitiation?: number | undefined;
}

/**
 * <p>A tag that is assigned to matching objects.</p>
 * @public
 */
export interface AwsS3BucketBucketLifecycleConfigurationRulesFilterPredicateOperandsTagDetails {
  /**
   * <p>The tag key.</p>
   * @public
   */
  Key?: string | undefined;

  /**
   * <p>The tag value.</p>
   * @public
   */
  Value?: string | undefined;
}

/**
 * <p>A value to use for the filter.</p>
 * @public
 */
export interface AwsS3BucketBucketLifecycleConfigurationRulesFilterPredicateOperandsDetails {
  /**
   * <p>Prefix text for matching objects.</p>
   * @public
   */
  Prefix?: string | undefined;

  /**
   * <p>A tag that is assigned to matching objects.</p>
   * @public
   */
  Tag?: AwsS3BucketBucketLifecycleConfigurationRulesFilterPredicateOperandsTagDetails | undefined;

  /**
   * <p>The type of filter value.
   * Valid values are <code>LifecyclePrefixPredicate</code> or <code>LifecycleTagPredicate</code>.</p>
   * @public
   */
  Type?: string | undefined;
}

/**
 * <p>A tag filter.</p>
 * @public
 */
export interface AwsS3BucketBucketLifecycleConfigurationRulesFilterPredicateTagDetails {
  /**
   * <p>The tag key.</p>
   * @public
   */
  Key?: string | undefined;

  /**
   * <p>The tag value</p>
   * @public
   */
  Value?: string | undefined;
}

/**
 * <p>The configuration for the filter.</p>
 * @public
 */
export interface AwsS3BucketBucketLifecycleConfigurationRulesFilterPredicateDetails {
  /**
   * <p>The values to use for the filter.</p>
   * @public
   */
  Operands?: AwsS3BucketBucketLifecycleConfigurationRulesFilterPredicateOperandsDetails[] | undefined;

  /**
   * <p>A prefix filter.</p>
   * @public
   */
  Prefix?: string | undefined;

  /**
   * <p>A tag filter.</p>
   * @public
   */
  Tag?: AwsS3BucketBucketLifecycleConfigurationRulesFilterPredicateTagDetails | undefined;

  /**
   * <p>Whether to use <code>AND</code> or <code>OR</code> to join the operands.
   * Valid values are <code>LifecycleAndOperator</code> or <code>LifecycleOrOperator</code>.</p>
   * @public
   */
  Type?: string | undefined;
}

/**
 * <p>Identifies the objects that a rule applies to.</p>
 * @public
 */
export interface AwsS3BucketBucketLifecycleConfigurationRulesFilterDetails {
  /**
   * <p>The configuration for the filter.</p>
   * @public
   */
  Predicate?: AwsS3BucketBucketLifecycleConfigurationRulesFilterPredicateDetails | undefined;
}

/**
 * <p>A transition rule that describes when noncurrent objects transition to a specified storage class.</p>
 * @public
 */
export interface AwsS3BucketBucketLifecycleConfigurationRulesNoncurrentVersionTransitionsDetails {
  /**
   * <p>The number of days that an object is noncurrent before Amazon S3 can perform the associated action.</p>
   * @public
   */
  Days?: number | undefined;

  /**
   * <p>The class of storage to change the object to after the object is noncurrent for the specified number of days.</p>
   * @public
   */
  StorageClass?: string | undefined;
}

/**
 * <p>A rule for when objects transition to specific storage classes.</p>
 * @public
 */
export interface AwsS3BucketBucketLifecycleConfigurationRulesTransitionsDetails {
  /**
   * <p>A date on which to transition objects to the specified storage class. If you provide <code>Date</code>, you cannot provide <code>Days</code>.</p>
   *          <p>For more information about the validation and formatting of timestamp fields in Security Hub, see <a href="https://docs.aws.amazon.com/securityhub/1.0/APIReference/Welcome.html#timestamps">Timestamps</a>.</p>
   * @public
   */
  Date?: string | undefined;

  /**
   * <p>The number of days after which to transition the object to the specified storage class. If you provide <code>Days</code>, you cannot provide <code>Date</code>.</p>
   * @public
   */
  Days?: number | undefined;

  /**
   * <p>The storage class to transition the object to. Valid values are as follows:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>DEEP_ARCHIVE</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>GLACIER</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>INTELLIGENT_TIERING</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>ONEZONE_IA</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>STANDARD_IA</code>
   *                </p>
   *             </li>
   *          </ul>
   * @public
   */
  StorageClass?: string | undefined;
}

/**
 * <p>Configuration for a lifecycle rule.</p>
 * @public
 */
export interface AwsS3BucketBucketLifecycleConfigurationRulesDetails {
  /**
   * <p>How Amazon S3 responds when a multipart upload is incomplete. Specifically, provides a number
   *          of days before Amazon S3 cancels the entire upload.</p>
   * @public
   */
  AbortIncompleteMultipartUpload?:
    | AwsS3BucketBucketLifecycleConfigurationRulesAbortIncompleteMultipartUploadDetails
    | undefined;

  /**
   * <p>The date when objects are moved or deleted.</p>
   *          <p>For more information about the validation and formatting of timestamp fields in Security Hub, see <a href="https://docs.aws.amazon.com/securityhub/1.0/APIReference/Welcome.html#timestamps">Timestamps</a>.</p>
   * @public
   */
  ExpirationDate?: string | undefined;

  /**
   * <p>The length in days of the lifetime for objects that are subject to the rule.</p>
   * @public
   */
  ExpirationInDays?: number | undefined;

  /**
   * <p>Whether Amazon S3 removes a delete marker that has no noncurrent versions. If set to
   *          <code>true</code>, the delete marker is expired. If set to <code>false</code>, the policy
   *          takes no action.</p>
   *          <p>If you provide <code>ExpiredObjectDeleteMarker</code>, you cannot provide
   *          <code>ExpirationInDays</code> or <code>ExpirationDate</code>.</p>
   * @public
   */
  ExpiredObjectDeleteMarker?: boolean | undefined;

  /**
   * <p>Identifies the objects that a rule applies to.</p>
   * @public
   */
  Filter?: AwsS3BucketBucketLifecycleConfigurationRulesFilterDetails | undefined;

  /**
   * <p>The unique identifier of the rule.</p>
   * @public
   */
  ID?: string | undefined;

  /**
   * <p>The number of days that an object is noncurrent before Amazon S3 can perform the associated action.</p>
   * @public
   */
  NoncurrentVersionExpirationInDays?: number | undefined;

  /**
   * <p>Transition rules that describe when noncurrent objects transition to a specified storage class.</p>
   * @public
   */
  NoncurrentVersionTransitions?:
    | AwsS3BucketBucketLifecycleConfigurationRulesNoncurrentVersionTransitionsDetails[]
    | undefined;

  /**
   * <p>A prefix that identifies one or more objects that the rule applies to.</p>
   * @public
   */
  Prefix?: string | undefined;

  /**
   * <p>The current status of the rule. Indicates whether the rule is currently being applied.</p>
   * @public
   */
  Status?: string | undefined;

  /**
   * <p>Transition rules that indicate when objects transition to a specified storage class.</p>
   * @public
   */
  Transitions?: AwsS3BucketBucketLifecycleConfigurationRulesTransitionsDetails[] | undefined;
}

/**
 * <p>The lifecycle configuration for the objects in the S3 bucket.</p>
 * @public
 */
export interface AwsS3BucketBucketLifecycleConfigurationDetails {
  /**
   * <p>The lifecycle rules.</p>
   * @public
   */
  Rules?: AwsS3BucketBucketLifecycleConfigurationRulesDetails[] | undefined;
}

/**
 * <p>Describes the versioning state of an S3 bucket.</p>
 * @public
 */
export interface AwsS3BucketBucketVersioningConfiguration {
  /**
   * <p>Specifies whether MFA delete is currently enabled in the S3 bucket versioning configuration. If the S3 bucket was never configured with MFA delete, then this attribute is not included.</p>
   * @public
   */
  IsMfaDeleteEnabled?: boolean | undefined;

  /**
   * <p>The versioning status of the S3 bucket. Valid values are <code>Enabled</code> or <code>Suspended</code>.</p>
   * @public
   */
  Status?: string | undefined;
}

/**
 * <p>Information about logging for
 *          the S3 bucket</p>
 * @public
 */
export interface AwsS3BucketLoggingConfiguration {
  /**
   * <p>The name of the S3 bucket where log files for the S3 bucket are stored.</p>
   * @public
   */
  DestinationBucketName?: string | undefined;

  /**
   * <p>The prefix added to log files for the S3 bucket.</p>
   * @public
   */
  LogFilePrefix?: string | undefined;
}

/**
 * @public
 * @enum
 */
export const AwsS3BucketNotificationConfigurationS3KeyFilterRuleName = {
  PREFIX: "Prefix",
  SUFFIX: "Suffix",
} as const;

/**
 * @public
 */
export type AwsS3BucketNotificationConfigurationS3KeyFilterRuleName =
  (typeof AwsS3BucketNotificationConfigurationS3KeyFilterRuleName)[keyof typeof AwsS3BucketNotificationConfigurationS3KeyFilterRuleName];

/**
 * <p>Details for a filter rule.</p>
 * @public
 */
export interface AwsS3BucketNotificationConfigurationS3KeyFilterRule {
  /**
   * <p>Indicates whether the filter is based on the prefix or suffix of the Amazon S3 key.</p>
   * @public
   */
  Name?: AwsS3BucketNotificationConfigurationS3KeyFilterRuleName | undefined;

  /**
   * <p>The filter value.</p>
   * @public
   */
  Value?: string | undefined;
}

/**
 * <p>Details for an Amazon S3 filter.</p>
 * @public
 */
export interface AwsS3BucketNotificationConfigurationS3KeyFilter {
  /**
   * <p>The filter rules for the filter.</p>
   * @public
   */
  FilterRules?: AwsS3BucketNotificationConfigurationS3KeyFilterRule[] | undefined;
}

/**
 * <p>Filtering information for the notifications. The
 *          filtering is based on Amazon S3 key names.</p>
 * @public
 */
export interface AwsS3BucketNotificationConfigurationFilter {
  /**
   * <p>Details for an Amazon S3 filter.</p>
   * @public
   */
  S3KeyFilter?: AwsS3BucketNotificationConfigurationS3KeyFilter | undefined;
}

/**
 * <p>Details for an S3 bucket notification configuration.</p>
 * @public
 */
export interface AwsS3BucketNotificationConfigurationDetail {
  /**
   * <p>The list of events that trigger a notification.</p>
   * @public
   */
  Events?: string[] | undefined;

  /**
   * <p>The filters that determine which S3 buckets generate notifications.</p>
   * @public
   */
  Filter?: AwsS3BucketNotificationConfigurationFilter | undefined;

  /**
   * <p>The ARN of the Lambda function, Amazon SQS queue, or Amazon SNS topic that generates the
   *          notification.</p>
   * @public
   */
  Destination?: string | undefined;

  /**
   * <p>Indicates the type of notification. Notifications can be generated using Lambda functions,
   *          Amazon SQS queues, or Amazon SNS topics, with corresponding valid values as follows:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>LambdaConfiguration</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>QueueConfiguration</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>TopicConfiguration</code>
   *                </p>
   *             </li>
   *          </ul>
   * @public
   */
  Type?: string | undefined;
}

/**
 * <p>The notification
 *          configuration for the S3 bucket.</p>
 * @public
 */
export interface AwsS3BucketNotificationConfiguration {
  /**
   * <p>Configurations for S3 bucket notifications.</p>
   * @public
   */
  Configurations?: AwsS3BucketNotificationConfigurationDetail[] | undefined;
}

/**
 * <p>The redirect behavior for requests
 *          to the website.</p>
 * @public
 */
export interface AwsS3BucketWebsiteConfigurationRedirectTo {
  /**
   * <p>The name of the host to redirect requests to.</p>
   * @public
   */
  Hostname?: string | undefined;

  /**
   * <p>The protocol to use when redirecting requests. By default, this field uses the same protocol as the
   *          original request. Valid values are <code>http</code> or <code>https</code>.</p>
   * @public
   */
  Protocol?: string | undefined;
}

/**
 * <p>The condition that must be met in order to apply the routing rule.</p>
 * @public
 */
export interface AwsS3BucketWebsiteConfigurationRoutingRuleCondition {
  /**
   * <p>Indicates to redirect the request if the HTTP error code matches this value.</p>
   * @public
   */
  HttpErrorCodeReturnedEquals?: string | undefined;

  /**
   * <p>Indicates to redirect the request if the key prefix matches this value.</p>
   * @public
   */
  KeyPrefixEquals?: string | undefined;
}

/**
 * <p>The rules to redirect the request if the condition in <code>Condition</code> is
 *          met.</p>
 * @public
 */
export interface AwsS3BucketWebsiteConfigurationRoutingRuleRedirect {
  /**
   * <p>The host name to use in the redirect request.</p>
   * @public
   */
  Hostname?: string | undefined;

  /**
   * <p>The HTTP redirect code to use in the response.</p>
   * @public
   */
  HttpRedirectCode?: string | undefined;

  /**
   * <p>The protocol to use to redirect the request. By default, uses the protocol from the
   *          original request.</p>
   * @public
   */
  Protocol?: string | undefined;

  /**
   * <p>The object key prefix to use in the redirect request.</p>
   *          <p>Cannot be provided if <code>ReplaceKeyWith</code> is present.</p>
   * @public
   */
  ReplaceKeyPrefixWith?: string | undefined;

  /**
   * <p>The specific object key to use in the redirect request.</p>
   *          <p>Cannot be provided if <code>ReplaceKeyPrefixWith</code> is present.</p>
   * @public
   */
  ReplaceKeyWith?: string | undefined;
}

/**
 * <p>A rule for redirecting requests
 *          to the website.</p>
 * @public
 */
export interface AwsS3BucketWebsiteConfigurationRoutingRule {
  /**
   * <p>Provides the condition that must be met in order to apply the routing rule.</p>
   * @public
   */
  Condition?: AwsS3BucketWebsiteConfigurationRoutingRuleCondition | undefined;

  /**
   * <p>Provides the rules to redirect the request if the condition in <code>Condition</code> is
   *          met.</p>
   * @public
   */
  Redirect?: AwsS3BucketWebsiteConfigurationRoutingRuleRedirect | undefined;
}

/**
 * <p>Website parameters for the S3
 *          bucket.</p>
 * @public
 */
export interface AwsS3BucketWebsiteConfiguration {
  /**
   * <p>The name of the error document for the website.</p>
   * @public
   */
  ErrorDocument?: string | undefined;

  /**
   * <p>The name of the index document for the website.</p>
   * @public
   */
  IndexDocumentSuffix?: string | undefined;

  /**
   * <p>The redirect behavior for requests to the website.</p>
   * @public
   */
  RedirectAllRequestsTo?: AwsS3BucketWebsiteConfigurationRedirectTo | undefined;

  /**
   * <p>The rules for applying redirects for requests to the website.</p>
   * @public
   */
  RoutingRules?: AwsS3BucketWebsiteConfigurationRoutingRule[] | undefined;
}

/**
 * <p>
 *          The default S3 Object Lock retention mode and period that you want to apply to new objects placed in the specified Amazon S3 bucket.
 *       </p>
 * @public
 */
export interface AwsS3BucketObjectLockConfigurationRuleDefaultRetentionDetails {
  /**
   * <p>
   *          The number of days that you want to specify for the default retention period.
   *       </p>
   * @public
   */
  Days?: number | undefined;

  /**
   * <p>
   *          The default Object Lock retention mode you want to apply to new objects placed in the specified bucket.
   *       </p>
   * @public
   */
  Mode?: string | undefined;

  /**
   * <p>
   *          The number of years that you want to specify for the default retention period.
   *       </p>
   * @public
   */
  Years?: number | undefined;
}

/**
 * <p>
 *          Specifies the S3 Object Lock rule for the specified object. In Amazon S3, Object Lock can help prevent objects from being deleted or overwritten for a fixed amount of time or indefinitely.
 *       </p>
 * @public
 */
export interface AwsS3BucketObjectLockConfigurationRuleDetails {
  /**
   * <p>
   *          The default Object Lock retention mode and period that you want to apply to new objects placed in the specified bucket.
   *       </p>
   * @public
   */
  DefaultRetention?: AwsS3BucketObjectLockConfigurationRuleDefaultRetentionDetails | undefined;
}

/**
 * <p>
 *          The container element for S3 Object Lock configuration parameters. In Amazon S3, Object Lock can help prevent objects from being deleted or overwritten for a fixed amount of time or indefinitely.
 *       </p>
 * @public
 */
export interface AwsS3BucketObjectLockConfiguration {
  /**
   * <p>
   *          Indicates whether the bucket has an Object Lock configuration enabled.
   *       </p>
   * @public
   */
  ObjectLockEnabled?: string | undefined;

  /**
   * <p>
   *          Specifies the Object Lock rule for the specified object.
   *       </p>
   * @public
   */
  Rule?: AwsS3BucketObjectLockConfigurationRuleDetails | undefined;
}

/**
 * <p>Specifies the default server-side encryption to apply to new objects in the
 *          bucket.</p>
 * @public
 */
export interface AwsS3BucketServerSideEncryptionByDefault {
  /**
   * <p>Server-side encryption algorithm to use for the default encryption. Valid values are
   * <code>aws: kms</code> or <code>AES256</code>.</p>
   * @public
   */
  SSEAlgorithm?: string | undefined;

  /**
   * <p>KMS key ID to use for the default encryption.</p>
   * @public
   */
  KMSMasterKeyID?: string | undefined;
}

/**
 * <p>An encryption rule to apply to the S3 bucket.</p>
 * @public
 */
export interface AwsS3BucketServerSideEncryptionRule {
  /**
   * <p>Specifies the default server-side encryption to apply to new objects in the bucket. If a
   *             <code>PUT</code> object request doesn't specify any server-side encryption, this default
   *          encryption is applied.</p>
   * @public
   */
  ApplyServerSideEncryptionByDefault?: AwsS3BucketServerSideEncryptionByDefault | undefined;
}

/**
 * <p>The encryption configuration for the S3 bucket.</p>
 * @public
 */
export interface AwsS3BucketServerSideEncryptionConfiguration {
  /**
   * <p>The encryption rules that are applied to the S3 bucket.</p>
   * @public
   */
  Rules?: AwsS3BucketServerSideEncryptionRule[] | undefined;
}

/**
 * <p>The details of an Amazon Simple Storage Service (Amazon S3) bucket.</p>
 * @public
 */
export interface AwsS3BucketDetails {
  /**
   * <p>The canonical user ID of the owner of the S3 bucket.</p>
   * @public
   */
  OwnerId?: string | undefined;

  /**
   * <p>The display name of the owner of the S3 bucket.</p>
   * @public
   */
  OwnerName?: string | undefined;

  /**
   * <p>The Amazon Web Services account identifier of the account that owns the S3 bucket.</p>
   * @public
   */
  OwnerAccountId?: string | undefined;

  /**
   * <p>Indicates when the S3 bucket was created.</p>
   *          <p>For more information about the validation and formatting of timestamp fields in Security Hub, see <a href="https://docs.aws.amazon.com/securityhub/1.0/APIReference/Welcome.html#timestamps">Timestamps</a>.</p>
   * @public
   */
  CreatedAt?: string | undefined;

  /**
   * <p>The encryption rules that are applied to the S3 bucket.</p>
   * @public
   */
  ServerSideEncryptionConfiguration?: AwsS3BucketServerSideEncryptionConfiguration | undefined;

  /**
   * <p>The lifecycle configuration for objects in the specified bucket.</p>
   * @public
   */
  BucketLifecycleConfiguration?: AwsS3BucketBucketLifecycleConfigurationDetails | undefined;

  /**
   * <p>Provides information about the Amazon S3 Public Access Block configuration for the S3 bucket.</p>
   * @public
   */
  PublicAccessBlockConfiguration?: AwsS3AccountPublicAccessBlockDetails | undefined;

  /**
   * <p>The access control list for the S3 bucket.</p>
   * @public
   */
  AccessControlList?: string | undefined;

  /**
   * <p>The logging configuration for the S3 bucket.</p>
   * @public
   */
  BucketLoggingConfiguration?: AwsS3BucketLoggingConfiguration | undefined;

  /**
   * <p>The website configuration parameters for the S3 bucket.</p>
   * @public
   */
  BucketWebsiteConfiguration?: AwsS3BucketWebsiteConfiguration | undefined;

  /**
   * <p>The notification configuration for the S3 bucket.</p>
   * @public
   */
  BucketNotificationConfiguration?: AwsS3BucketNotificationConfiguration | undefined;

  /**
   * <p>The versioning state of an S3 bucket.</p>
   * @public
   */
  BucketVersioningConfiguration?: AwsS3BucketBucketVersioningConfiguration | undefined;

  /**
   * <p>
   *          Specifies which rule Amazon S3 applies by default to every new object placed in the bucket.
   *       </p>
   * @public
   */
  ObjectLockConfiguration?: AwsS3BucketObjectLockConfiguration | undefined;

  /**
   * <p>
   *             The name of the bucket.
   *         </p>
   * @public
   */
  Name?: string | undefined;
}

/**
 * <p>Details about an Amazon S3 object.</p>
 * @public
 */
export interface AwsS3ObjectDetails {
  /**
   * <p>Indicates when the object was last modified.</p>
   *          <p>For more information about the validation and formatting of timestamp fields in Security Hub, see <a href="https://docs.aws.amazon.com/securityhub/1.0/APIReference/Welcome.html#timestamps">Timestamps</a>.</p>
   * @public
   */
  LastModified?: string | undefined;

  /**
   * <p>The opaque identifier assigned by a web server to a specific version of a resource found
   *          at a URL.</p>
   * @public
   */
  ETag?: string | undefined;

  /**
   * <p>The version of the object.</p>
   * @public
   */
  VersionId?: string | undefined;

  /**
   * <p>A standard MIME type describing the format of the object data.</p>
   * @public
   */
  ContentType?: string | undefined;

  /**
   * <p>If the object is stored using server-side encryption, the value of the server-side
   *          encryption algorithm used when storing this object in Amazon S3.</p>
   * @public
   */
  ServerSideEncryption?: string | undefined;

  /**
   * <p>The identifier of the KMS symmetric customer managed key that was used for the object.</p>
   * @public
   */
  SSEKMSKeyId?: string | undefined;
}

/**
 * <p>
 *          Information on the instance metadata service (IMDS) configuration of the notebook instance.
 *       </p>
 * @public
 */
export interface AwsSageMakerNotebookInstanceMetadataServiceConfigurationDetails {
  /**
   * <p>
   *          Indicates the minimum IMDS version that the notebook instance supports.
   *       </p>
   * @public
   */
  MinimumInstanceMetadataServiceVersion?: string | undefined;
}

/**
 * <p>
 *          Provides details about an Amazon SageMaker AI notebook instance.
 *       </p>
 * @public
 */
export interface AwsSageMakerNotebookInstanceDetails {
  /**
   * <p>
   *          A list of Amazon Elastic Inference instance types to associate with the notebook instance. Currently, only one instance type can be associated with a notebook instance.
   *       </p>
   * @public
   */
  AcceleratorTypes?: string[] | undefined;

  /**
   * <p>
   *          An array of up to three Git repositories associated with the notebook instance. These can be either the names of Git repositories stored as resources in your account, or the URL of Git repositories in <a href="https://docs.aws.amazon.com/codecommit/latest/userguide/welcome.html">CodeCommit</a> or in any other Git repository.
   *          These repositories are cloned at the same level as the default repository of your notebook instance. For more information, see <a href="https://docs.aws.amazon.com/sagemaker/latest/dg/nbi-git-repo.html">Associating Git repositories with SageMaker AI notebook instances</a> in the <i>Amazon SageMaker AI Developer Guide</i>.
   *       </p>
   * @public
   */
  AdditionalCodeRepositories?: string[] | undefined;

  /**
   * <p>
   *          The Git repository associated with the notebook instance as its default code repository. This can be either the name of a Git repository stored as a resource in your account, or the URL of a Git repository in <a href="https://docs.aws.amazon.com/codecommit/latest/userguide/welcome.html">CodeCommit</a> or in any other Git repository.
   *          When you open a notebook instance, it opens in the directory that contains this repository. For more information, see <a href="https://docs.aws.amazon.com/sagemaker/latest/dg/nbi-git-repo.html">Associating Git repositories with SageMaker AI notebook instances</a> in the <i>Amazon SageMaker AI Developer Guide</i>.
   *       </p>
   * @public
   */
  DefaultCodeRepository?: string | undefined;

  /**
   * <p>
   *          Sets whether SageMaker AI provides internet access to the notebook instance. If you set this to <code>Disabled</code>, this notebook instance is able to access resources only in your VPC, and is not be able to connect to SageMaker AI training and endpoint services unless you configure a Network Address Translation (NAT) Gateway in your VPC.
   *       </p>
   * @public
   */
  DirectInternetAccess?: string | undefined;

  /**
   * <p>
   *          If status of the instance is <code>Failed</code>, the reason it failed.
   *       </p>
   * @public
   */
  FailureReason?: string | undefined;

  /**
   * <p>
   *          Information on the IMDS configuration of the notebook instance.
   *       </p>
   * @public
   */
  InstanceMetadataServiceConfiguration?: AwsSageMakerNotebookInstanceMetadataServiceConfigurationDetails | undefined;

  /**
   * <p>
   *          The type of machine learning (ML) compute instance to launch for the notebook instance.
   *       </p>
   * @public
   */
  InstanceType?: string | undefined;

  /**
   * <p>
   *          The Amazon Resource Name (ARN) of an Key Management Service (KMS) key that SageMaker AI uses to encrypt data on the storage volume attached to your notebook instance. The KMS key you provide must be enabled. For information, see
   *          <a href="https://docs.aws.amazon.com/kms/latest/developerguide/enabling-keys.html">Enabling and disabling keys</a> in the <i>Key Management Service Developer Guide</i>.
   *       </p>
   * @public
   */
  KmsKeyId?: string | undefined;

  /**
   * <p>
   *          The network interface ID that SageMaker AI created when the instance was created.
   *       </p>
   * @public
   */
  NetworkInterfaceId?: string | undefined;

  /**
   * <p>
   *          The Amazon Resource Name (ARN) of the notebook instance.
   *       </p>
   * @public
   */
  NotebookInstanceArn?: string | undefined;

  /**
   * <p>
   *          The name of a notebook instance lifecycle configuration.
   *       </p>
   * @public
   */
  NotebookInstanceLifecycleConfigName?: string | undefined;

  /**
   * <p>
   *          The name of the new notebook instance.
   *       </p>
   * @public
   */
  NotebookInstanceName?: string | undefined;

  /**
   * <p>
   *          The status of the notebook instance.
   *       </p>
   * @public
   */
  NotebookInstanceStatus?: string | undefined;

  /**
   * <p>
   *          The platform identifier of the notebook instance runtime environment.
   *       </p>
   * @public
   */
  PlatformIdentifier?: string | undefined;

  /**
   * <p>
   *          The Amazon Resource Name (ARN) of the IAM role associated with the instance.
   *       </p>
   * @public
   */
  RoleArn?: string | undefined;

  /**
   * <p>
   *          Whether root access is enabled or disabled for users of the notebook instance.
   *       </p>
   * @public
   */
  RootAccess?: string | undefined;

  /**
   * <p>
   *          The VPC security group IDs.
   *       </p>
   * @public
   */
  SecurityGroups?: string[] | undefined;

  /**
   * <p>
   *          The ID of the VPC subnet to which you have a connectivity from your ML compute instance.
   *       </p>
   * @public
   */
  SubnetId?: string | undefined;

  /**
   * <p>
   *          The URL that you use to connect to the Jupyter notebook that is running in your notebook instance.
   *       </p>
   * @public
   */
  Url?: string | undefined;

  /**
   * <p>
   *          The size, in GB, of the ML storage volume to attach to the notebook instance.
   *       </p>
   * @public
   */
  VolumeSizeInGB?: number | undefined;
}

/**
 * <p>Defines the rotation schedule for the secret.</p>
 * @public
 */
export interface AwsSecretsManagerSecretRotationRules {
  /**
   * <p>The number of days after the previous rotation to rotate the secret.</p>
   * @public
   */
  AutomaticallyAfterDays?: number | undefined;
}

/**
 * <p>Details about an Secrets Manager secret.</p>
 * @public
 */
export interface AwsSecretsManagerSecretDetails {
  /**
   * <p>Defines the rotation schedule for the secret.</p>
   * @public
   */
  RotationRules?: AwsSecretsManagerSecretRotationRules | undefined;

  /**
   * <p>Whether the rotation occurred within the specified rotation frequency.</p>
   * @public
   */
  RotationOccurredWithinFrequency?: boolean | undefined;

  /**
   * <p>The ARN, Key ID, or alias of the KMS key used to encrypt the
   *             <code>SecretString</code> or <code>SecretBinary</code> values for versions of this
   *          secret.</p>
   * @public
   */
  KmsKeyId?: string | undefined;

  /**
   * <p>Whether rotation is enabled.</p>
   * @public
   */
  RotationEnabled?: boolean | undefined;

  /**
   * <p>The ARN of the Lambda function that rotates the secret.</p>
   * @public
   */
  RotationLambdaArn?: string | undefined;

  /**
   * <p>Whether the secret is deleted.</p>
   * @public
   */
  Deleted?: boolean | undefined;

  /**
   * <p>The name of the secret.</p>
   * @public
   */
  Name?: string | undefined;

  /**
   * <p>The user-provided description of the secret.</p>
   * @public
   */
  Description?: string | undefined;
}

/**
 * <p>
 *             A parameter that a security control accepts.
 *         </p>
 * @public
 */
export interface SecurityControlParameter {
  /**
   * <p>
   *             The name of a
   *         </p>
   * @public
   */
  Name?: string | undefined;

  /**
   * <p>
   *             The current value of a control parameter.
   *         </p>
   * @public
   */
  Value?: string[] | undefined;
}

/**
 * @public
 * @enum
 */
export const ComplianceStatus = {
  FAILED: "FAILED",
  NOT_AVAILABLE: "NOT_AVAILABLE",
  PASSED: "PASSED",
  WARNING: "WARNING",
} as const;

/**
 * @public
 */
export type ComplianceStatus = (typeof ComplianceStatus)[keyof typeof ComplianceStatus];

/**
 * <p>Provides additional context for the value of <code>Compliance.Status</code>.</p>
 * @public
 */
export interface StatusReason {
  /**
   * <p>A code that represents a reason for the control status. For the list of status reason
   *          codes and their meanings, see <a href="https://docs.aws.amazon.com/securityhub/latest/userguide/controls-findings-create-update.html#control-findings-asff-compliance">Compliance details for control findings</a> in the
   *             <i>Security Hub User Guide</i>. </p>
   * @public
   */
  ReasonCode: string | undefined;

  /**
   * <p>The corresponding description for the status reason code.</p>
   * @public
   */
  Description?: string | undefined;
}

/**
 * <p>This object typically provides details about a control finding, such as applicable standards and the status of
 *             control checks. While finding providers can add custom content in <code>Compliance</code> object fields, they are
 *             typically used to review details of Security Hub control findings.</p>
 * @public
 */
export interface Compliance {
  /**
   * <p>Typically summarizes the result of a control check.</p>
   *          <p>For Security Hub controls, valid values for <code>Status</code> are as follows.</p>
   *          <ul>
   *             <li>
   *                <ul>
   *                   <li>
   *                      <p>
   *                         <code>PASSED</code> - Standards check passed for all evaluated
   *                      resources.</p>
   *                   </li>
   *                   <li>
   *                      <p>
   *                         <code>WARNING</code> - Some information is missing or this check is not
   *                      supported for your configuration.</p>
   *                   </li>
   *                   <li>
   *                      <p>
   *                         <code>FAILED</code> - Standards check failed for at least one evaluated
   *                      resource.</p>
   *                   </li>
   *                   <li>
   *                      <p>
   *                         <code>NOT_AVAILABLE</code> - Check could not be performed due to a service
   *                      outage, API error, or because the result of the Config evaluation was
   *                         <code>NOT_APPLICABLE</code>. If the Config evaluation result was
   *                      <code>NOT_APPLICABLE</code> for a Security Hub control, Security Hub automatically archives
   *                      the finding after 3 days.</p>
   *                   </li>
   *                </ul>
   *             </li>
   *          </ul>
   * @public
   */
  Status?: ComplianceStatus | undefined;

  /**
   * <p>Typically provides the industry or regulatory framework requirements that are related to a
   *          control. The check for that control is aligned with these requirements.</p>
   *          <p>Array Members: Maximum number of 32 items.</p>
   * @public
   */
  RelatedRequirements?: string[] | undefined;

  /**
   * <p>Typically used to provide a list of reasons for the value of <code>Status</code>.</p>
   * @public
   */
  StatusReasons?: StatusReason[] | undefined;

  /**
   * <p>
   *          Typically provides the unique identifier of a control across standards. For Security Hub controls, this field consists of an
   *           Amazon Web Services service and a unique number, such as <code>APIGateway.5</code>.
   *       </p>
   * @public
   */
  SecurityControlId?: string | undefined;

  /**
   * <p>Typically provides an array of enabled security standards in which a security control is currently enabled.
   *       </p>
   * @public
   */
  AssociatedStandards?: AssociatedStandard[] | undefined;

  /**
   * <p>
   *             Typically an object that includes security control parameter names and values.
   *         </p>
   * @public
   */
  SecurityControlParameters?: SecurityControlParameter[] | undefined;
}

/**
 * <p>
 *             Contains information about the Autonomous System (AS) of the network
 *             endpoints involved in an Amazon GuardDuty Extended Threat Detection attack sequence. GuardDuty generates an attack
 *             sequence finding when multiple events align to a potentially suspicious activity. To receive GuardDuty attack sequence findings in Security Hub, you
 * 				must have GuardDuty enabled. For more information, see <a href="https://docs.aws.amazon.com/guardduty/latest/ug/guardduty-extended-threat-detection.html">GuardDuty Extended Threat Detection </a> in the <i>Amazon GuardDuty User Guide</i>.
 *         </p>
 * @public
 */
export interface NetworkAutonomousSystem {
  /**
   * <p>
   *             The name associated with the AS.
   *         </p>
   * @public
   */
  Name?: string | undefined;

  /**
   * <p>
   *             The unique number that identifies the AS.
   *         </p>
   * @public
   */
  Number?: number | undefined;
}

/**
 * @public
 * @enum
 */
export const ConnectionDirection = {
  INBOUND: "INBOUND",
  OUTBOUND: "OUTBOUND",
} as const;

/**
 * @public
 */
export type ConnectionDirection = (typeof ConnectionDirection)[keyof typeof ConnectionDirection];

/**
 * <p>
 *             Contains information about the network connection involved in an Amazon GuardDuty Extended Threat Detection attack sequence. GuardDuty generates an attack
 *             sequence finding when multiple events align to a potentially suspicious activity. To receive GuardDuty attack sequence findings in Security Hub, you
 * 				must have GuardDuty enabled. For more information, see <a href="https://docs.aws.amazon.com/guardduty/latest/ug/guardduty-extended-threat-detection.html">GuardDuty Extended Threat Detection </a> in the <i>Amazon GuardDuty User Guide</i>.
 *         </p>
 * @public
 */
export interface NetworkConnection {
  /**
   * <p>
   *             The direction in which the network traffic is flowing.
   *         </p>
   * @public
   */
  Direction?: ConnectionDirection | undefined;
}

/**
 * <p>
 *             Contains information about the location of a network endpoint involved in an Amazon GuardDuty Extended Threat Detection attack sequence.
 * GuardDuty generates an attack
 *             sequence finding when multiple events align to a potentially suspicious activity. To receive GuardDuty attack sequence findings in Security Hub, you
 * 				must have GuardDuty enabled. For more information, see <a href="https://docs.aws.amazon.com/guardduty/latest/ug/guardduty-extended-threat-detection.html">GuardDuty Extended Threat Detection </a> in the <i>Amazon GuardDuty User Guide</i>.
 *         </p>
 * @public
 */
export interface NetworkGeoLocation {
  /**
   * <p>
   *             The name of the city.
   *         </p>
   * @public
   */
  City?: string | undefined;

  /**
   * <p>
   *             The name of the country.
   *         </p>
   * @public
   */
  Country?: string | undefined;

  /**
   * <p>
   *             The latitude information of the endpoint location.
   *         </p>
   * @public
   */
  Lat?: number | undefined;

  /**
   * <p>
   *             The longitude information of the endpoint location.
   *         </p>
   * @public
   */
  Lon?: number | undefined;
}

/**
 * <p>
 *             Contains information about network endpoints involved in an Amazon GuardDuty Extended Threat Detection attack sequence. GuardDuty generates an attack
 *             sequence finding when multiple events align to a potentially suspicious activity. To receive GuardDuty attack sequence findings in Security Hub, you
 * 				must have GuardDuty enabled. For more information, see <a href="https://docs.aws.amazon.com/guardduty/latest/ug/guardduty-extended-threat-detection.html">GuardDuty Extended Threat Detection </a> in the <i>Amazon GuardDuty User Guide</i>.
 *         </p>
 *          <p>This field can provide information about the network endpoints associated with the resource in the attack sequence finding,
 * or about a specific network endpoint used for the attack.</p>
 * @public
 */
export interface NetworkEndpoint {
  /**
   * <p>
   *             The identifier of the network endpoint involved in the attack sequence.
   *         </p>
   * @public
   */
  Id?: string | undefined;

  /**
   * <p>
   *             The IP address used in the network endpoint.
   *         </p>
   * @public
   */
  Ip?: string | undefined;

  /**
   * <p>
   *             The domain information for the network endpoint.
   *         </p>
   * @public
   */
  Domain?: string | undefined;

  /**
   * <p>
   *             The port number associated with the network endpoint.
   *         </p>
   * @public
   */
  Port?: number | undefined;

  /**
   * <p>
   *             Information about the location of the network endpoint.
   *         </p>
   * @public
   */
  Location?: NetworkGeoLocation | undefined;

  /**
   * <p>
   *             The Autonomous System Number (ASN) of the network endpoint.
   *         </p>
   * @public
   */
  AutonomousSystem?: NetworkAutonomousSystem | undefined;

  /**
   * <p>
   *             Information about the network connection.
   *         </p>
   * @public
   */
  Connection?: NetworkConnection | undefined;
}

/**
 * <p>
 *             Contains information about the indicators observed in an Amazon GuardDuty Extended Threat Detection attack sequence.
 *             Indicators include a set of signals, which can be API activities or findings that GuardDuty uses to detect an attack sequence finding. GuardDuty
 *             generates an attack sequence finding when multiple signals align to a potentially suspicious activity. To receive GuardDuty attack sequence findings in Security Hub, you
 *             must have GuardDuty and GuardDuty S3 Protection enabled. For more information, see <a href="https://docs.aws.amazon.com/guardduty/latest/ug/guardduty-extended-threat-detection.html">GuardDuty Extended Threat Detection </a> in the <i>Amazon GuardDuty User Guide</i>.
 *         </p>
 * @public
 */
export interface Indicator {
  /**
   * <p>
   *             The name of the indicator that’s present in the attack sequence finding.
   *         </p>
   * @public
   */
  Key?: string | undefined;

  /**
   * <p>Values associated with each indicator key. For example, if the indicator key is
   *             <code>SUSPICIOUS_NETWORK</code>, then the value will be the name of the network. If
   *             the indicator key is <code>ATTACK_TACTIC</code>, then the value will be one of the MITRE tactics.</p>
   * @public
   */
  Values?: string[] | undefined;

  /**
   * <p>
   *             The title describing the indicator.
   *         </p>
   * @public
   */
  Title?: string | undefined;

  /**
   * <p>
   *             The type of indicator.
   *         </p>
   * @public
   */
  Type?: string | undefined;
}

/**
 * <p>
 *             Contains information about the signals involved in an Amazon GuardDuty Extended Threat Detection attack sequence. An attack sequence is a
 * type of threat detected by GuardDuty. GuardDuty generates an attack sequence finding when multiple events, or
 * signals, align to a potentially suspicious activity. When GuardDuty and Security Hub are integrated, GuardDuty
 * sends attack sequence findings to Security Hub.</p>
 *          <p>A signal can be an API activity or a finding that GuardDuty uses to detect an attack sequence finding.</p>
 * @public
 */
export interface Signal {
  /**
   * <p>
   *             The type of the signal used to identify an attack sequence.
   *         </p>
   *          <p>Signals can be GuardDuty findings or activities observed in data sources that GuardDuty monitors.
   *             For
   *             more information, see
   *             <a href="https://docs.aws.amazon.com/guardduty/latest/ug/guardduty_data-sources.html">GuardDuty foundational data sources</a> in the
   *             <i>Amazon GuardDuty User Guide</i>.</p>
   *          <p>A signal type can be one of the following values. Here are the related descriptions:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>FINDING</code> - Individually generated GuardDuty finding.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>CLOUD_TRAIL</code> - Activity observed from CloudTrail logs</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>S3_DATA_EVENTS</code> - Activity observed from CloudTrail data events for Amazon Simple Storage Service (S3).
   *                     Activities associated
   *                     with this type will show up only when
   *                     you have enabled GuardDuty S3 Protection feature in your account. For more information about
   *                     S3 Protection and the
   *                     steps to enable it, see <a href="https://docs.aws.amazon.com/guardduty/latest/ug/s3-protection.html">S3 Protection</a> in the
   *                     <i>Amazon GuardDuty User Guide</i>.</p>
   *             </li>
   *          </ul>
   * @public
   */
  Type?: string | undefined;

  /**
   * <p>
   *             The identifier of the signal.
   *         </p>
   * @public
   */
  Id?: string | undefined;

  /**
   * <p>
   *             The description of the GuardDuty finding.
   *         </p>
   * @public
   */
  Title?: string | undefined;

  /**
   * <p>
   *             The Amazon Resource Name (ARN) of the product that generated the signal.
   *         </p>
   * @public
   */
  ProductArn?: string | undefined;

  /**
   * <p>
   *             The ARN or ID of the Amazon Web Services resource associated with the signal.
   *         </p>
   * @public
   */
  ResourceIds?: string[] | undefined;

  /**
   * <p>
   *             Contains information about the indicators associated with the signals in this attack sequence finding. The values for
   *             <code>SignalIndicators</code> are a subset of the values for <a href="https://docs.aws.amazon.com/securityhub/1.0/APIReference/API_Sequence.html">SequenceIndicators</a>, but the values for
   *             these fields don't always match 1:1.
   *         </p>
   * @public
   */
  SignalIndicators?: Indicator[] | undefined;

  /**
   * <p>
   *             The name of the GuardDuty signal. For example, when signal type is <code>FINDING</code>,
   *             the signal name is the name of the finding.
   *         </p>
   * @public
   */
  Name?: string | undefined;

  /**
   * <p>
   *             The timestamp when the first finding or activity related to this signal was observed.
   *         </p>
   * @public
   */
  CreatedAt?: number | undefined;

  /**
   * <p>
   *             The timestamp when this signal was last observed.
   *         </p>
   * @public
   */
  UpdatedAt?: number | undefined;

  /**
   * <p>
   *             The timestamp when the first finding or activity related to this signal was observed.
   *         </p>
   * @public
   */
  FirstSeenAt?: number | undefined;

  /**
   * <p>
   *             The timestamp when the last finding or activity related to this signal was observed.
   *         </p>
   * @public
   */
  LastSeenAt?: number | undefined;

  /**
   * <p>The severity associated with the signal. For more information about severity, see
   *             <a href="https://docs.aws.amazon.com/guardduty/latest/ug/guardduty_findings-severity.html">Severity levels for GuardDuty findings</a>
   *             in the <i>Amazon GuardDuty User Guide</i>.</p>
   * @public
   */
  Severity?: number | undefined;

  /**
   * <p>
   *             The number of times this signal was observed.
   *         </p>
   * @public
   */
  Count?: number | undefined;

  /**
   * <p>
   *             The IDs of the threat actors involved in the signal.
   *         </p>
   * @public
   */
  ActorIds?: string[] | undefined;

  /**
   * <p>Information about the endpoint IDs associated with this signal.</p>
   * @public
   */
  EndpointIds?: string[] | undefined;
}

/**
 * <p>
 *             Contains information about an Amazon GuardDuty Extended Threat Detection attack sequence finding. GuardDuty generates an attack
 *             sequence finding when multiple events align to a potentially suspicious activity. To receive GuardDuty attack sequence findings in Security Hub, you
 * 				must have GuardDuty enabled. For more information, see <a href="https://docs.aws.amazon.com/guardduty/latest/ug/guardduty-extended-threat-detection.html">GuardDuty Extended Threat Detection </a> in the <i>Amazon GuardDuty User Guide</i>.
 *         </p>
 * @public
 */
export interface Sequence {
  /**
   * <p>
   *             Unique identifier of the attack sequence.
   *         </p>
   * @public
   */
  Uid?: string | undefined;

  /**
   * <p>
   *             Provides information about the actors involved in the attack sequence.
   *         </p>
   * @public
   */
  Actors?: Actor[] | undefined;

  /**
   * <p>
   *             Contains information about the network endpoints that were used in the attack sequence.
   *         </p>
   * @public
   */
  Endpoints?: NetworkEndpoint[] | undefined;

  /**
   * <p>
   *             Contains information about the signals involved in the attack sequence.
   *         </p>
   * @public
   */
  Signals?: Signal[] | undefined;

  /**
   * <p>
   *             Contains information about the indicators observed in the attack sequence. The values for
   *             <a href="https://docs.aws.amazon.com/securityhub/1.0/APIReference/API_Signal.html">SignalIndicators</a> are a subset of the values for <code>SequenceIndicators</code>, but the values for
   *             these fields don't always match 1:1.</p>
   * @public
   */
  SequenceIndicators?: Indicator[] | undefined;
}

/**
 * <p>
 *             A top-level object field that provides details about an Amazon GuardDuty Extended Threat Detection attack sequence. GuardDuty generates an attack
 *             sequence finding when multiple events align to a potentially suspicious activity. To receive GuardDuty attack sequence findings in Security Hub, you
 * 				must have GuardDuty enabled. For more information, see <a href="https://docs.aws.amazon.com/guardduty/latest/ug/guardduty-extended-threat-detection.html">GuardDuty Extended Threat Detection </a> in the <i>Amazon GuardDuty User Guide</i>.</p>
 * @public
 */
export interface Detection {
  /**
   * <p>
   *             Provides details about an attack sequence.
   *         </p>
   * @public
   */
  Sequence?: Sequence | undefined;
}

/**
 * <p>The severity assigned to a finding by the finding provider. This object may include one or more of the following
 * attributes:</p>
 *          <ul>
 *             <li>
 *                <p>
 *                   <code>Label</code>
 *                </p>
 *             </li>
 *             <li>
 *                <p>
 *                   <code>Normalized</code>
 *                </p>
 *             </li>
 *             <li>
 *                <p>
 *                   <code>Original</code>
 *                </p>
 *             </li>
 *             <li>
 *                <p>
 *                   <code>Product</code>
 *                </p>
 *             </li>
 *          </ul>
 *          <p>If a <a href="https://docs.aws.amazon.com/securityhub/1.0/APIReference/API_BatchImportFindings.html">
 *                <code>BatchImportFindings</code>
 *             </a> request for a
 *            new finding only provides <code>Label</code> or only provides <code>Normalized</code>, Security Hub
 *            automatically populates the value of the other field.</p>
 *          <p>The <code>Normalized</code> and <code>Product</code> attributes are included in the <code>FindingProviderSeverity</code>
 *            structure to preserve the historical information associated with the finding, even if the top-level
 *            <code>Severity</code> object is later modified using the <a href="https://docs.aws.amazon.com/securityhub/1.0/APIReference/API_BatchUpdateFindings.html">
 *                <code>BatchUpdateFindings</code>
 *             </a> operation.</p>
 *          <p>If the top-level <code>Finding.Severity</code> object is present, but <code>Finding.FindingProviderFields</code> isn't present,
 *            Security Hub creates the <code>FindingProviderFields.Severity</code> object and copies the entire <code>Finding.Severity</code> object into it.
 *            This ensures that the original, provider-supplied details are retained within the <code>FindingProviderFields.Severity</code>
 *            object, even if the top-level <code>Severity</code> object is overwritten.
 *        </p>
 * @public
 */
export interface FindingProviderSeverity {
  /**
   * <p>The severity label assigned to the finding by the finding provider.</p>
   * @public
   */
  Label?: SeverityLabel | undefined;

  /**
   * <p>The finding provider's original value for the severity.</p>
   *          <p>Length Constraints: Minimum length of 1. Maximum length of 64.</p>
   * @public
   */
  Original?: string | undefined;
}

/**
 * <p>In a <a href="https://docs.aws.amazon.com/securityhub/1.0/APIReference/API_BatchImportFindings.html">
 *                <code>BatchImportFindings</code>
 *             </a> request, finding providers use <code>FindingProviderFields</code> to provide
 *            and update values for the following fields:</p>
 *          <ul>
 *             <li>
 *                <p>
 *                   <code>Confidence</code>
 *                </p>
 *             </li>
 *             <li>
 *                <p>
 *                   <code>Criticality</code>
 *                </p>
 *             </li>
 *             <li>
 *                <p>
 *                   <code>RelatedFindings</code>
 *                </p>
 *             </li>
 *             <li>
 *                <p>
 *                   <code>Severity</code>
 *                </p>
 *             </li>
 *             <li>
 *                <p>
 *                   <code>Types</code>
 *                </p>
 *             </li>
 *          </ul>
 *          <p>The preceding fields are nested under the <code>FindingProviderFields</code> object, but also have analogues of the same name
 *            as top-level ASFF fields. When a new finding is sent to Security Hub by a finding provider, Security Hub populates the
 *            <code>FindingProviderFields</code> object automatically, if it is empty, based on the corresponding top-level fields.</p>
 *          <p>Finding providers can update <code>FindingProviderFields</code> only by using the <code>BatchImportFindings</code>
 *         operation. Finding providers can't update
 *            this object with the <a href="https://docs.aws.amazon.com/securityhub/1.0/APIReference/API_BatchUpdateFindings.html">
 *                <code>BatchUpdateFindings</code>
 *             </a> operation. Customers can update the top-level fields by using the <code>BatchUpdateFindings</code> operation. Customers can't
 *            update <code>FindingProviderFields</code>.</p>
 *          <p>For information about how Security Hub handles updates from <code>BatchImportFindings</code> to
 *            <code>FindingProviderFields</code> and to the corresponding top-level
 *            attributes, see <a href="https://docs.aws.amazon.com/securityhub/latest/userguide/finding-update-batchimportfindings.html#batchimportfindings-findingproviderfields">Using <code>FindingProviderFields</code>
 *             </a> in the <i>Security Hub User Guide</i>.</p>
 *          <p></p>
 * @public
 */
export interface FindingProviderFields {
  /**
   * <p>A finding's confidence. Confidence is defined as the likelihood that a finding
   *          accurately identifies the behavior or issue that it was intended to identify.</p>
   *          <p>Confidence is scored on a 0-100 basis using a ratio scale, where 0 means zero percent
   *          confidence and 100 means 100 percent confidence.</p>
   * @public
   */
  Confidence?: number | undefined;

  /**
   * <p>The level of importance assigned to the resources associated with the finding.</p>
   *          <p>A score of 0 means that the underlying resources have no criticality, and a score of 100
   *          is reserved for the most critical resources.</p>
   * @public
   */
  Criticality?: number | undefined;

  /**
   * <p>A list of findings that are related to the current finding.</p>
   * @public
   */
  RelatedFindings?: RelatedFinding[] | undefined;

  /**
   * <p>The severity of a finding.</p>
   * @public
   */
  Severity?: FindingProviderSeverity | undefined;

  /**
   * <p>One or more finding types in the format of <code>namespace/category/classifier</code>
   *          that classify a finding.</p>
   *          <p>Valid namespace values are: Software and Configuration Checks | TTPs | Effects | Unusual
   *          Behaviors | Sensitive Data Identifications</p>
   * @public
   */
  Types?: string[] | undefined;
}

/**
 * <p>
 *                 Provides metadata for the Amazon CodeGuru detector associated with a finding. This field pertains to
 *                 findings that relate to Lambda functions. Amazon Inspector identifies policy violations and
 *                 vulnerabilities in Lambda function code based on internal detectors developed
 *                 in collaboration with Amazon CodeGuru. Security Hub receives those findings.
 *         </p>
 * @public
 */
export interface GeneratorDetails {
  /**
   * <p>
   *             The name of the detector used to identify the code vulnerability.
   *         </p>
   * @public
   */
  Name?: string | undefined;

  /**
   * <p>
   *             The description of the detector used to identify the code vulnerability.
   *         </p>
   * @public
   */
  Description?: string | undefined;

  /**
   * <p>
   *             An array of tags used to identify the detector associated with the finding.
   *         </p>
   *          <p>Array Members: Minimum number of 0 items. Maximum number of 10 items.</p>
   * @public
   */
  Labels?: string[] | undefined;
}

/**
 * @public
 * @enum
 */
export const MalwareState = {
  OBSERVED: "OBSERVED",
  REMOVAL_FAILED: "REMOVAL_FAILED",
  REMOVED: "REMOVED",
} as const;

/**
 * @public
 */
export type MalwareState = (typeof MalwareState)[keyof typeof MalwareState];

/**
 * @public
 * @enum
 */
export const MalwareType = {
  ADWARE: "ADWARE",
  BLENDED_THREAT: "BLENDED_THREAT",
  BOTNET_AGENT: "BOTNET_AGENT",
  COIN_MINER: "COIN_MINER",
  EXPLOIT_KIT: "EXPLOIT_KIT",
  KEYLOGGER: "KEYLOGGER",
  MACRO: "MACRO",
  POTENTIALLY_UNWANTED: "POTENTIALLY_UNWANTED",
  RANSOMWARE: "RANSOMWARE",
  REMOTE_ACCESS: "REMOTE_ACCESS",
  ROOTKIT: "ROOTKIT",
  SPYWARE: "SPYWARE",
  TROJAN: "TROJAN",
  VIRUS: "VIRUS",
  WORM: "WORM",
} as const;

/**
 * @public
 */
export type MalwareType = (typeof MalwareType)[keyof typeof MalwareType];

/**
 * <p>A list of malware related to a finding.</p>
 * @public
 */
export interface Malware {
  /**
   * <p>The name of the malware that was observed.</p>
   *          <p>Length Constraints: Minimum of 1. Maximum of 64.</p>
   * @public
   */
  Name: string | undefined;

  /**
   * <p>The type of the malware that was observed.</p>
   * @public
   */
  Type?: MalwareType | undefined;

  /**
   * <p>The file system path of the malware that was observed.</p>
   *          <p>Length Constraints: Minimum of 1. Maximum of 512.</p>
   * @public
   */
  Path?: string | undefined;

  /**
   * <p>The state of the malware that was observed.</p>
   * @public
   */
  State?: MalwareState | undefined;
}

/**
 * @public
 * @enum
 */
export const NetworkDirection = {
  IN: "IN",
  OUT: "OUT",
} as const;

/**
 * @public
 */
export type NetworkDirection = (typeof NetworkDirection)[keyof typeof NetworkDirection];

/**
 * <p>A range of ports.</p>
 * @public
 */
export interface PortRange {
  /**
   * <p>The first port in the port range.</p>
   * @public
   */
  Begin?: number | undefined;

  /**
   * <p>The last port in the port range.</p>
   * @public
   */
  End?: number | undefined;
}

/**
 * <p>The details of network-related information about a finding.</p>
 * @public
 */
export interface Network {
  /**
   * <p>The direction of network traffic associated with a finding.</p>
   * @public
   */
  Direction?: NetworkDirection | undefined;

  /**
   * <p>The protocol of network-related information about a finding.</p>
   *          <p>Length Constraints: Minimum of 1. Maximum of 16.</p>
   * @public
   */
  Protocol?: string | undefined;

  /**
   * <p>The range of open ports that is present on the network.</p>
   * @public
   */
  OpenPortRange?: PortRange | undefined;

  /**
   * <p>The source IPv4 address of network-related information about a finding.</p>
   * @public
   */
  SourceIpV4?: string | undefined;

  /**
   * <p>The source IPv6 address of network-related information about a finding.</p>
   * @public
   */
  SourceIpV6?: string | undefined;

  /**
   * <p>The source port of network-related information about a finding.</p>
   * @public
   */
  SourcePort?: number | undefined;

  /**
   * <p>The source domain of network-related information about a finding.</p>
   *          <p>Length Constraints: Minimum of 1. Maximum of 128.</p>
   * @public
   */
  SourceDomain?: string | undefined;

  /**
   * <p>The source media access control (MAC) address of network-related information about a
   *          finding.</p>
   * @public
   */
  SourceMac?: string | undefined;

  /**
   * <p>The destination IPv4 address of network-related information about a finding.</p>
   * @public
   */
  DestinationIpV4?: string | undefined;

  /**
   * <p>The destination IPv6 address of network-related information about a finding.</p>
   * @public
   */
  DestinationIpV6?: string | undefined;

  /**
   * <p>The destination port of network-related information about a finding.</p>
   * @public
   */
  DestinationPort?: number | undefined;

  /**
   * <p>The destination domain of network-related information about a finding.</p>
   *          <p>Length Constraints: Minimum of 1. Maximum of 128.</p>
   * @public
   */
  DestinationDomain?: string | undefined;
}

/**
 * <p>Information about the destination of the next component in the network path.</p>
 * @public
 */
export interface NetworkPathComponentDetails {
  /**
   * <p>The IP addresses of the destination.</p>
   * @public
   */
  Address?: string[] | undefined;

  /**
   * <p>A list of port ranges for the destination.</p>
   * @public
   */
  PortRanges?: PortRange[] | undefined;
}

/**
 * <p>Details about a network path component that occurs before or after the current
 *          component.</p>
 * @public
 */
export interface NetworkHeader {
  /**
   * <p>The protocol used for the component.</p>
   *          <p>Length Constraints: Minimum of 1. Maximum of 16.</p>
   * @public
   */
  Protocol?: string | undefined;

  /**
   * <p>Information about the destination of the component.</p>
   * @public
   */
  Destination?: NetworkPathComponentDetails | undefined;

  /**
   * <p>Information about the origin of the component.</p>
   * @public
   */
  Source?: NetworkPathComponentDetails | undefined;
}

/**
 * <p>Information about a network path component.</p>
 * @public
 */
export interface NetworkPathComponent {
  /**
   * <p>The identifier of a component in the network path.</p>
   *          <p>Length Constraints: Minimum of 1. Maximum of 32.</p>
   * @public
   */
  ComponentId?: string | undefined;

  /**
   * <p>The type of component.</p>
   *          <p>Length Constraints: Minimum of 1. Maximum of 32.</p>
   * @public
   */
  ComponentType?: string | undefined;

  /**
   * <p>Information about the component that comes after the current component in the network
   *          path.</p>
   * @public
   */
  Egress?: NetworkHeader | undefined;

  /**
   * <p>Information about the component that comes before the current node in the network
   *          path.</p>
   * @public
   */
  Ingress?: NetworkHeader | undefined;
}

/**
 * <p>A user-defined note added to a finding.</p>
 * @public
 */
export interface Note {
  /**
   * <p>The text of a note.</p>
   *          <p>Length Constraints: Minimum of 1. Maximum of 512.</p>
   * @public
   */
  Text: string | undefined;

  /**
   * <p>The principal that created a note.</p>
   * @public
   */
  UpdatedBy: string | undefined;

  /**
   * <p>A timestamp that indicates when the note was updated.</p>
   *          <p>For more information about the validation and formatting of timestamp fields in Security Hub, see <a href="https://docs.aws.amazon.com/securityhub/1.0/APIReference/Welcome.html#timestamps">Timestamps</a>.</p>
   * @public
   */
  UpdatedAt: string | undefined;
}

/**
 * <p>Provides an overview of the patch compliance status for an instance against a selected
 *          compliance standard.</p>
 * @public
 */
export interface PatchSummary {
  /**
   * <p>The identifier of the compliance standard that was used to determine the patch
   *          compliance status.</p>
   *          <p>Length Constraints: Minimum length of 1. Maximum length of 256.</p>
   * @public
   */
  Id: string | undefined;

  /**
   * <p>The number of patches from the compliance standard that were installed
   *          successfully.</p>
   *          <p>The value can be an integer from <code>0</code> to <code>100000</code>.</p>
   * @public
   */
  InstalledCount?: number | undefined;

  /**
   * <p>The number of patches that are part of the compliance standard but are not installed.
   *          The count includes patches that failed to install.</p>
   *          <p>The value can be an integer from <code>0</code> to <code>100000</code>.</p>
   * @public
   */
  MissingCount?: number | undefined;

  /**
   * <p>The number of patches from the compliance standard that failed to install.</p>
   *          <p>The value can be an integer from <code>0</code> to <code>100000</code>.</p>
   * @public
   */
  FailedCount?: number | undefined;

  /**
   * <p>The number of installed patches that are not part of the compliance standard.</p>
   *          <p>The value can be an integer from <code>0</code> to <code>100000</code>.</p>
   * @public
   */
  InstalledOtherCount?: number | undefined;

  /**
   * <p>The number of patches that are installed but are also on a list of patches that the
   *          customer rejected.</p>
   *          <p>The value can be an integer from <code>0</code> to <code>100000</code>.</p>
   * @public
   */
  InstalledRejectedCount?: number | undefined;

  /**
   * <p>The number of patches that were applied, but that require the instance to be rebooted in
   *          order to be marked as installed.</p>
   *          <p>The value can be an integer from <code>0</code> to <code>100000</code>.</p>
   * @public
   */
  InstalledPendingReboot?: number | undefined;

  /**
   * <p>Indicates when the operation started.</p>
   *          <p>For more information about the validation and formatting of timestamp fields in Security Hub, see <a href="https://docs.aws.amazon.com/securityhub/1.0/APIReference/Welcome.html#timestamps">Timestamps</a>.</p>
   * @public
   */
  OperationStartTime?: string | undefined;

  /**
   * <p>Indicates when the operation completed.</p>
   *          <p>For more information about the validation and formatting of timestamp fields in Security Hub, see <a href="https://docs.aws.amazon.com/securityhub/1.0/APIReference/Welcome.html#timestamps">Timestamps</a>.</p>
   * @public
   */
  OperationEndTime?: string | undefined;

  /**
   * <p>The reboot option specified for the instance.</p>
   *          <p>Length Constraints: Minimum length of 1. Maximum length of 256.</p>
   * @public
   */
  RebootOption?: string | undefined;

  /**
   * <p>The type of patch operation performed. For Patch Manager, the values are
   *             <code>SCAN</code> and <code>INSTALL</code>.</p>
   *          <p>Length Constraints: Minimum length of 1. Maximum length of 256.</p>
   * @public
   */
  Operation?: string | undefined;
}

/**
 * <p>The details of process-related information about a finding.</p>
 * @public
 */
export interface ProcessDetails {
  /**
   * <p>The name of the process.</p>
   *          <p>Length Constraints: Minimum of 1. Maximum of 64.</p>
   * @public
   */
  Name?: string | undefined;

  /**
   * <p>The path to the process executable.</p>
   *          <p>Length Constraints: Minimum of 1. Maximum of 512.</p>
   * @public
   */
  Path?: string | undefined;

  /**
   * <p>The process ID.</p>
   * @public
   */
  Pid?: number | undefined;

  /**
   * <p>The parent process ID. This field accepts positive integers between <code>O</code> and <code>2147483647</code>.</p>
   * @public
   */
  ParentPid?: number | undefined;

  /**
   * <p>Indicates when the process was launched.</p>
   *          <p>For more information about the validation and formatting of timestamp fields in Security Hub, see <a href="https://docs.aws.amazon.com/securityhub/1.0/APIReference/Welcome.html#timestamps">Timestamps</a>.</p>
   * @public
   */
  LaunchedAt?: string | undefined;

  /**
   * <p>Indicates when the process was terminated.</p>
   *          <p>For more information about the validation and formatting of timestamp fields in Security Hub, see <a href="https://docs.aws.amazon.com/securityhub/1.0/APIReference/Welcome.html#timestamps">Timestamps</a>.</p>
   * @public
   */
  TerminatedAt?: string | undefined;
}

/**
 * @public
 * @enum
 */
export const RecordState = {
  ACTIVE: "ACTIVE",
  ARCHIVED: "ARCHIVED",
} as const;

/**
 * @public
 */
export type RecordState = (typeof RecordState)[keyof typeof RecordState];

/**
 * <p>A recommendation on how to remediate the issue identified in a finding.</p>
 * @public
 */
export interface Recommendation {
  /**
   * <p>Describes the recommended steps to take to remediate an issue identified in a finding.</p>
   *          <p>Length Constraints: Minimum of 1 length. Maximum of 512 length.</p>
   * @public
   */
  Text?: string | undefined;

  /**
   * <p>A URL to a page or site that contains information about how to remediate a finding.</p>
   * @public
   */
  Url?: string | undefined;
}

/**
 * <p>Details about the remediation steps for a finding.</p>
 * @public
 */
export interface Remediation {
  /**
   * <p>A recommendation on the steps to take to remediate the issue identified by a finding.</p>
   * @public
   */
  Recommendation?: Recommendation | undefined;
}

/**
 * <p>An occurrence of sensitive data detected in a Microsoft Excel workbook, comma-separated value (CSV) file, or tab-separated value (TSV) file.</p>
 * @public
 */
export interface Cell {
  /**
   * <p>The column number of the column that contains the data. For a Microsoft Excel workbook, the column number corresponds to the alphabetical column identifiers. For example, a value of 1 for Column corresponds to the A column in the workbook.</p>
   * @public
   */
  Column?: number | undefined;

  /**
   * <p>The row number of the row that contains the data.</p>
   * @public
   */
  Row?: number | undefined;

  /**
   * <p>The name of the column that contains the data.</p>
   * @public
   */
  ColumnName?: string | undefined;

  /**
   * <p>For a Microsoft Excel workbook, provides the location of the cell, as an absolute cell reference, that contains the data. For example, Sheet2!C5 for cell C5 on Sheet2.</p>
   * @public
   */
  CellReference?: string | undefined;
}

/**
 * <p>Identifies where the sensitive data begins and ends.</p>
 * @public
 */
export interface Range {
  /**
   * <p>The number of lines (for a line range) or characters (for an offset range) from the beginning of the file to the end of the sensitive data.</p>
   * @public
   */
  Start?: number | undefined;

  /**
   * <p>The number of lines (for a line range) or characters (for an offset range) from the beginning of the file to the end of the sensitive data.</p>
   * @public
   */
  End?: number | undefined;

  /**
   * <p>In the line where the sensitive data starts, the column within the line where the sensitive data starts.</p>
   * @public
   */
  StartColumn?: number | undefined;
}

/**
 * <p>An occurrence of sensitive data in an Adobe Portable Document Format (PDF) file.</p>
 * @public
 */
export interface Page {
  /**
   * <p>The page number of the page that contains the sensitive data.</p>
   * @public
   */
  PageNumber?: number | undefined;

  /**
   * <p>An occurrence of sensitive data detected in a non-binary text file or a Microsoft Word file. Non-binary text files include files such as HTML, XML, JSON, and TXT files.</p>
   * @public
   */
  LineRange?: Range | undefined;

  /**
   * <p>An occurrence of sensitive data detected in a binary text file.</p>
   * @public
   */
  OffsetRange?: Range | undefined;
}

/**
 * <p>An occurrence of sensitive data in an Apache Avro object container or an Apache Parquet file.</p>
 * @public
 */
export interface _Record {
  /**
   * <p>The path, as a JSONPath expression, to the field in the record that contains the data. If the field name is longer than 20 characters, it is truncated. If the path is longer than 250 characters, it is truncated.</p>
   * @public
   */
  JsonPath?: string | undefined;

  /**
   * <p>The record index, starting from 0, for the record that contains the data.</p>
   * @public
   */
  RecordIndex?: number | undefined;
}

/**
 * <p>The detected occurrences of sensitive data.</p>
 * @public
 */
export interface Occurrences {
  /**
   * <p>Occurrences of sensitive data detected in a non-binary text file or a Microsoft Word file. Non-binary text files include files such as HTML, XML, JSON, and TXT files.</p>
   * @public
   */
  LineRanges?: Range[] | undefined;

  /**
   * <p>Occurrences of sensitive data detected in a binary text file.</p>
   * @public
   */
  OffsetRanges?: Range[] | undefined;

  /**
   * <p>Occurrences of sensitive data in an Adobe Portable Document Format (PDF) file.</p>
   * @public
   */
  Pages?: Page[] | undefined;

  /**
   * <p>Occurrences of sensitive data in an Apache Avro object container or an Apache Parquet file.</p>
   * @public
   */
  Records?: _Record[] | undefined;

  /**
   * <p>Occurrences of sensitive data detected in Microsoft Excel workbooks, comma-separated value (CSV) files, or tab-separated value (TSV) files.</p>
   * @public
   */
  Cells?: Cell[] | undefined;
}

/**
 * <p>The list of detected instances of sensitive data.</p>
 * @public
 */
export interface CustomDataIdentifiersDetections {
  /**
   * <p>The total number of occurrences of sensitive data that were detected.</p>
   * @public
   */
  Count?: number | undefined;

  /**
   * <p>The ARN of the custom identifier that was used to detect the sensitive data.</p>
   * @public
   */
  Arn?: string | undefined;

  /**
   * <p>he name of the custom identifier that detected the sensitive data.</p>
   * @public
   */
  Name?: string | undefined;

  /**
   * <p>Details about the sensitive data that was detected.</p>
   * @public
   */
  Occurrences?: Occurrences | undefined;
}

/**
 * <p>Contains an instance of sensitive data that was detected by a customer-defined identifier.</p>
 * @public
 */
export interface CustomDataIdentifiersResult {
  /**
   * <p>The list of detected instances of sensitive data.</p>
   * @public
   */
  Detections?: CustomDataIdentifiersDetections[] | undefined;

  /**
   * <p>The total number of occurrences of sensitive data.</p>
   * @public
   */
  TotalCount?: number | undefined;
}

/**
 * <p>The list of detected instances of sensitive data.</p>
 * @public
 */
export interface SensitiveDataDetections {
  /**
   * <p>The total number of occurrences of sensitive data that were detected.</p>
   * @public
   */
  Count?: number | undefined;

  /**
   * <p>The type of sensitive data that was detected. For example, the type might indicate that the data is an email address.</p>
   * @public
   */
  Type?: string | undefined;

  /**
   * <p>Details about the sensitive data that was detected.</p>
   * @public
   */
  Occurrences?: Occurrences | undefined;
}

/**
 * <p>Contains a detected instance of sensitive data that are based on built-in identifiers.</p>
 * @public
 */
export interface SensitiveDataResult {
  /**
   * <p>The category of sensitive data that was detected. For example, the category can indicate that the sensitive data involved credentials, financial information, or personal information.</p>
   * @public
   */
  Category?: string | undefined;

  /**
   * <p>The list of detected instances of sensitive data.</p>
   * @public
   */
  Detections?: SensitiveDataDetections[] | undefined;

  /**
   * <p>The total number of occurrences of sensitive data.</p>
   * @public
   */
  TotalCount?: number | undefined;
}

/**
 * <p>Provides details about the current status of the sensitive data detection.</p>
 * @public
 */
export interface ClassificationStatus {
  /**
   * <p>The code that represents the status of the sensitive data detection.</p>
   * @public
   */
  Code?: string | undefined;

  /**
   * <p>A longer description of the current status of the sensitive data detection.</p>
   * @public
   */
  Reason?: string | undefined;
}

/**
 * <p>Details about the sensitive data that was detected on the resource.</p>
 * @public
 */
export interface ClassificationResult {
  /**
   * <p>The type of content that the finding applies to.</p>
   * @public
   */
  MimeType?: string | undefined;

  /**
   * <p>The total size in bytes of the affected data.</p>
   * @public
   */
  SizeClassified?: number | undefined;

  /**
   * <p>Indicates whether there are additional occurrences of sensitive data that are not included in the finding. This occurs when the number of occurrences exceeds the maximum that can be included.</p>
   * @public
   */
  AdditionalOccurrences?: boolean | undefined;

  /**
   * <p>The current status of the sensitive data detection.</p>
   * @public
   */
  Status?: ClassificationStatus | undefined;

  /**
   * <p>Provides details about sensitive data that was identified based on built-in configuration.</p>
   * @public
   */
  SensitiveData?: SensitiveDataResult[] | undefined;

  /**
   * <p>Provides details about sensitive data that was identified based on customer-defined configuration.</p>
   * @public
   */
  CustomDataIdentifiers?: CustomDataIdentifiersResult | undefined;
}
