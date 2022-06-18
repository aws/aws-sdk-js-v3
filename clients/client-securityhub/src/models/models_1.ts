// smithy-typescript generated code
import {
  ActionLocalIpDetails,
  ActionLocalPortDetails,
  ActionRemoteIpDetails,
  Adjustment,
  AvailabilityZone,
  AwsApiGatewayRestApiDetails,
  AwsApiGatewayStageDetails,
  AwsApiGatewayV2ApiDetails,
  AwsApiGatewayV2StageDetails,
  AwsAutoScalingAutoScalingGroupDetails,
  AwsAutoScalingLaunchConfigurationDetails,
  AwsCertificateManagerCertificateDetails,
  AwsCloudFormationStackDetails,
  AwsCloudFrontDistributionDetails,
  AwsCloudTrailTrailDetails,
  AwsCloudWatchAlarmDetails,
  AwsCodeBuildProjectDetails,
  AwsDynamoDbTableDetails,
  AwsEc2EipDetails,
  AwsEc2InstanceDetails,
  AwsEc2NetworkAclDetails,
  AwsEc2NetworkInterfaceDetails,
  AwsEc2SecurityGroupDetails,
  AwsEc2SubnetDetails,
  AwsEc2TransitGatewayDetails,
  AwsEc2VolumeDetails,
  AwsEc2VpcDetails,
  AwsEc2VpcEndpointServiceDetails,
  AwsEc2VpcPeeringConnectionDetails,
  AwsEc2VpnConnectionDetails,
  AwsEcrContainerImageDetails,
  AwsEcrRepositoryDetails,
  AwsEcsClusterDetails,
  AwsEcsContainerDetails,
  AwsEcsServiceDetails,
  AwsEcsTaskDefinitionContainerDefinitionsDetails,
  RelatedFinding,
} from "./models_0";
import {
  DateRangeUnit,
  MalwareState,
  MalwareType,
  MapFilterComparison,
  NetworkDirection,
  Partition,
  StatusReasonCode,
  StringFilterComparison,
  ThreatIntelIndicatorCategory,
  ThreatIntelIndicatorType,
  WorkflowStatus,
} from "./models_2";

/**
 * <p>A port scan that was part of the port probe. For each scan, PortProbeDetails provides
 *          information about the local IP address and port that were scanned, and the remote IP
 *          address that the scan originated from.</p>
 */
export interface PortProbeDetail {
  /**
   * <p>Provides information about the port that was scanned.</p>
   */
  LocalPortDetails?: ActionLocalPortDetails;

  /**
   * <p>Provides information about the IP address where the scanned port is located.</p>
   */
  LocalIpDetails?: ActionLocalIpDetails;

  /**
   * <p>Provides information about the remote IP address that performed the scan.</p>
   */
  RemoteIpDetails?: ActionRemoteIpDetails;
}

export namespace PortProbeDetail {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: PortProbeDetail): any => ({
    ...obj,
  });
}

export enum AdminStatus {
  DISABLE_IN_PROGRESS = "DISABLE_IN_PROGRESS",
  ENABLED = "ENABLED",
}

export enum AutoEnableStandards {
  DEFAULT = "DEFAULT",
  NONE = "NONE",
}

/**
 * <p>A file that contain environment variables to pass to a container.</p>
 */
export interface AwsEcsTaskDefinitionContainerDefinitionsEnvironmentFilesDetails {
  /**
   * <p>The type of environment file.</p>
   */
  Type?: string;

  /**
   * <p>The ARN of the S3 object that contains the environment variable file.</p>
   */
  Value?: string;
}

export namespace AwsEcsTaskDefinitionContainerDefinitionsEnvironmentFilesDetails {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: AwsEcsTaskDefinitionContainerDefinitionsEnvironmentFilesDetails): any => ({
    ...obj,
  });
}

/**
 * <p>A hostname and IP address mapping to append to the <b>/etc/hosts</b> file on the container.</p>
 */
export interface AwsEcsTaskDefinitionContainerDefinitionsExtraHostsDetails {
  /**
   * <p>The hostname to use in the <b>/etc/hosts</b> entry.</p>
   */
  Hostname?: string;

  /**
   * <p>The IP address to use in the <b>/etc/hosts</b> entry.</p>
   */
  IpAddress?: string;
}

export namespace AwsEcsTaskDefinitionContainerDefinitionsExtraHostsDetails {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: AwsEcsTaskDefinitionContainerDefinitionsExtraHostsDetails): any => ({
    ...obj,
  });
}

/**
 * <p>The FireLens configuration for the container. The configuration specifies and configures a log router for container logs.</p>
 */
export interface AwsEcsTaskDefinitionContainerDefinitionsFirelensConfigurationDetails {
  /**
   * <p>The options to use to configure the log router.</p>
   *          <p>The valid option keys are as follows:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>enable-ecs-log-metadata</code>. The value can be <code>true</code> or
   *                <code>false</code>.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>config-file-type</code>. The value can be <code>s3</code> or
   *                <code>file</code>.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>config-file-value</code>. The value is either an S3 ARN or a file path.</p>
   *             </li>
   *          </ul>
   */
  Options?: Record<string, string>;

  /**
   * <p>The log router to use. </p>
   */
  Type?: string;
}

export namespace AwsEcsTaskDefinitionContainerDefinitionsFirelensConfigurationDetails {
  /**
   * @internal
   */
  export const filterSensitiveLog = (
    obj: AwsEcsTaskDefinitionContainerDefinitionsFirelensConfigurationDetails
  ): any => ({
    ...obj,
  });
}

/**
 * <p>The container health check command and associated configuration parameters for the container.</p>
 */
export interface AwsEcsTaskDefinitionContainerDefinitionsHealthCheckDetails {
  /**
   * <p>The command that the container runs to determine whether it is healthy.</p>
   */
  Command?: string[];

  /**
   * <p>The time period in seconds between each health check execution. The default value is 30 seconds.</p>
   */
  Interval?: number;

  /**
   * <p>The number of times to retry a failed health check before the container is considered unhealthy. The default value is 3.</p>
   */
  Retries?: number;

  /**
   * <p>The optional grace period in seconds that allows containers time to bootstrap before failed health checks count towards the maximum number of retries.</p>
   */
  StartPeriod?: number;

  /**
   * <p>The time period in seconds to wait for a health check to succeed before it is considered a failure. The default value is 5.</p>
   */
  Timeout?: number;
}

export namespace AwsEcsTaskDefinitionContainerDefinitionsHealthCheckDetails {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: AwsEcsTaskDefinitionContainerDefinitionsHealthCheckDetails): any => ({
    ...obj,
  });
}

/**
 * <p>The Linux capabilities for the container that are added to or dropped from the default configuration provided by Docker.</p>
 */
export interface AwsEcsTaskDefinitionContainerDefinitionsLinuxParametersCapabilitiesDetails {
  /**
   * <p>The Linux capabilities for the container that are added to the default configuration provided by Docker.</p>
   */
  Add?: string[];

  /**
   * <p>The Linux capabilities for the container that are dropped from the default configuration provided by Docker.</p>
   */
  Drop?: string[];
}

export namespace AwsEcsTaskDefinitionContainerDefinitionsLinuxParametersCapabilitiesDetails {
  /**
   * @internal
   */
  export const filterSensitiveLog = (
    obj: AwsEcsTaskDefinitionContainerDefinitionsLinuxParametersCapabilitiesDetails
  ): any => ({
    ...obj,
  });
}

/**
 * <p>A host device to expose to the container.</p>
 */
export interface AwsEcsTaskDefinitionContainerDefinitionsLinuxParametersDevicesDetails {
  /**
   * <p>The path inside the container at which to expose the host device.</p>
   */
  ContainerPath?: string;

  /**
   * <p>The path for the device on the host container instance.</p>
   */
  HostPath?: string;

  /**
   * <p>The explicit permissions to provide to the container for the device. By default, the container has permissions for read, write, and <code>mknod</code> for the device.</p>
   */
  Permissions?: string[];
}

export namespace AwsEcsTaskDefinitionContainerDefinitionsLinuxParametersDevicesDetails {
  /**
   * @internal
   */
  export const filterSensitiveLog = (
    obj: AwsEcsTaskDefinitionContainerDefinitionsLinuxParametersDevicesDetails
  ): any => ({
    ...obj,
  });
}

/**
 * <p>The container path, mount options, and size (in MiB) of a tmpfs mount.</p>
 */
export interface AwsEcsTaskDefinitionContainerDefinitionsLinuxParametersTmpfsDetails {
  /**
   * <p>The absolute file path where the tmpfs volume is to be mounted.</p>
   */
  ContainerPath?: string;

  /**
   * <p>The list of tmpfs volume mount options.</p>
   */
  MountOptions?: string[];

  /**
   * <p>The maximum size (in MiB) of the tmpfs volume.</p>
   */
  Size?: number;
}

export namespace AwsEcsTaskDefinitionContainerDefinitionsLinuxParametersTmpfsDetails {
  /**
   * @internal
   */
  export const filterSensitiveLog = (
    obj: AwsEcsTaskDefinitionContainerDefinitionsLinuxParametersTmpfsDetails
  ): any => ({
    ...obj,
  });
}

/**
 * <p>>Linux-specific modifications that are applied to the container, such as Linux kernel capabilities.</p>
 */
export interface AwsEcsTaskDefinitionContainerDefinitionsLinuxParametersDetails {
  /**
   * <p>The Linux capabilities for the container that are added to or dropped from the default configuration provided by Docker.</p>
   */
  Capabilities?: AwsEcsTaskDefinitionContainerDefinitionsLinuxParametersCapabilitiesDetails;

  /**
   * <p>The host devices to expose to the container.</p>
   */
  Devices?: AwsEcsTaskDefinitionContainerDefinitionsLinuxParametersDevicesDetails[];

  /**
   * <p>Whether to run an <code>init</code> process inside the container that forwards signals and reaps processes. </p>
   */
  InitProcessEnabled?: boolean;

  /**
   * <p>The total amount of swap memory (in MiB) that a container can use.</p>
   */
  MaxSwap?: number;

  /**
   * <p>The value for the size (in MiB) of the <b>/dev/shm</b> volume.</p>
   */
  SharedMemorySize?: number;

  /**
   * <p>Configures the container's memory swappiness behavior. Determines how aggressively pages are swapped. The higher the value, the more aggressive the swappiness. The default is 60.</p>
   */
  Swappiness?: number;

  /**
   * <p>The container path, mount options, and size (in MiB) of the tmpfs mount.</p>
   */
  Tmpfs?: AwsEcsTaskDefinitionContainerDefinitionsLinuxParametersTmpfsDetails[];
}

export namespace AwsEcsTaskDefinitionContainerDefinitionsLinuxParametersDetails {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: AwsEcsTaskDefinitionContainerDefinitionsLinuxParametersDetails): any => ({
    ...obj,
  });
}

/**
 * <p>A secret to pass to the log configuration.</p>
 */
export interface AwsEcsTaskDefinitionContainerDefinitionsLogConfigurationSecretOptionsDetails {
  /**
   * <p>The name of the secret.</p>
   */
  Name?: string;

  /**
   * <p>The secret to expose to the container.</p>
   *          <p>The value is either the full ARN of the Secrets Manager secret or the full ARN of the
   *          parameter in the Systems Manager Parameter Store.</p>
   */
  ValueFrom?: string;
}

export namespace AwsEcsTaskDefinitionContainerDefinitionsLogConfigurationSecretOptionsDetails {
  /**
   * @internal
   */
  export const filterSensitiveLog = (
    obj: AwsEcsTaskDefinitionContainerDefinitionsLogConfigurationSecretOptionsDetails
  ): any => ({
    ...obj,
  });
}

/**
 * <p>The log configuration specification for the container.</p>
 */
export interface AwsEcsTaskDefinitionContainerDefinitionsLogConfigurationDetails {
  /**
   * <p>The log driver to use for the container.</p>
   */
  LogDriver?: string;

  /**
   * <p>The configuration options to send to the log driver. Requires version 1.19 of the Docker Remote API or greater on your container instance.</p>
   */
  Options?: Record<string, string>;

  /**
   * <p>The secrets to pass to the log configuration.</p>
   */
  SecretOptions?: AwsEcsTaskDefinitionContainerDefinitionsLogConfigurationSecretOptionsDetails[];
}

export namespace AwsEcsTaskDefinitionContainerDefinitionsLogConfigurationDetails {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: AwsEcsTaskDefinitionContainerDefinitionsLogConfigurationDetails): any => ({
    ...obj,
  });
}

/**
 * <p>A mount point for the data volumes in the container.</p>
 */
export interface AwsEcsTaskDefinitionContainerDefinitionsMountPointsDetails {
  /**
   * <p>The path on the container to mount the host volume at.</p>
   */
  ContainerPath?: string;

  /**
   * <p>Whether the container has read-only access to the volume.</p>
   */
  ReadOnly?: boolean;

  /**
   * <p>The name of the volume to mount. Must match the name of a volume listed in <code>VolumeDetails</code> for the task definition.</p>
   */
  SourceVolume?: string;
}

export namespace AwsEcsTaskDefinitionContainerDefinitionsMountPointsDetails {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: AwsEcsTaskDefinitionContainerDefinitionsMountPointsDetails): any => ({
    ...obj,
  });
}

/**
 * <p>A port mapping for the container.</p>
 */
export interface AwsEcsTaskDefinitionContainerDefinitionsPortMappingsDetails {
  /**
   * <p>The port number on the container that is bound to the user-specified or automatically assigned host port.</p>
   */
  ContainerPort?: number;

  /**
   * <p>The port number on the container instance to reserve for the container.</p>
   */
  HostPort?: number;

  /**
   * <p>The protocol used for the port mapping. The default is <code>tcp</code>.</p>
   */
  Protocol?: string;
}

export namespace AwsEcsTaskDefinitionContainerDefinitionsPortMappingsDetails {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: AwsEcsTaskDefinitionContainerDefinitionsPortMappingsDetails): any => ({
    ...obj,
  });
}

/**
 * <p>The private repository authentication credentials to use.</p>
 */
export interface AwsEcsTaskDefinitionContainerDefinitionsRepositoryCredentialsDetails {
  /**
   * <p>The ARN of the secret that contains the private repository credentials.</p>
   */
  CredentialsParameter?: string;
}

export namespace AwsEcsTaskDefinitionContainerDefinitionsRepositoryCredentialsDetails {
  /**
   * @internal
   */
  export const filterSensitiveLog = (
    obj: AwsEcsTaskDefinitionContainerDefinitionsRepositoryCredentialsDetails
  ): any => ({
    ...obj,
  });
}

/**
 * <p>A resource to assign to a container.</p>
 */
export interface AwsEcsTaskDefinitionContainerDefinitionsResourceRequirementsDetails {
  /**
   * <p>The type of resource to assign to a container.</p>
   */
  Type?: string;

  /**
   * <p>The value for the specified resource type.</p>
   *          <p>For <code>GPU</code>, the value is the number of physical GPUs the Amazon ECS container agent
   *          reserves for the container.</p>
   *          <p>For <code>InferenceAccelerator</code>, the value should match the <code>DeviceName</code>
   *          attribute of an entry in <code>InferenceAccelerators</code>.</p>
   */
  Value?: string;
}

export namespace AwsEcsTaskDefinitionContainerDefinitionsResourceRequirementsDetails {
  /**
   * @internal
   */
  export const filterSensitiveLog = (
    obj: AwsEcsTaskDefinitionContainerDefinitionsResourceRequirementsDetails
  ): any => ({
    ...obj,
  });
}

/**
 * <p>A secret to pass to the container.</p>
 */
export interface AwsEcsTaskDefinitionContainerDefinitionsSecretsDetails {
  /**
   * <p>The name of the secret.</p>
   */
  Name?: string;

  /**
   * <p>The secret to expose to the container. The value is either the full ARN of the Secrets Manager
   *          secret or the full ARN of the parameter in the Systems Manager Parameter Store.</p>
   */
  ValueFrom?: string;
}

export namespace AwsEcsTaskDefinitionContainerDefinitionsSecretsDetails {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: AwsEcsTaskDefinitionContainerDefinitionsSecretsDetails): any => ({
    ...obj,
  });
}

/**
 * <p>A namespaced kernel parameter to set in the container.</p>
 */
export interface AwsEcsTaskDefinitionContainerDefinitionsSystemControlsDetails {
  /**
   * <p>The namespaced kernel parameter for which to set a value.</p>
   */
  Namespace?: string;

  /**
   * <p>The value of the parameter.</p>
   */
  Value?: string;
}

export namespace AwsEcsTaskDefinitionContainerDefinitionsSystemControlsDetails {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: AwsEcsTaskDefinitionContainerDefinitionsSystemControlsDetails): any => ({
    ...obj,
  });
}

/**
 * <p>A ulimit to set in the container.</p>
 */
export interface AwsEcsTaskDefinitionContainerDefinitionsUlimitsDetails {
  /**
   * <p>The hard limit for the ulimit type.</p>
   */
  HardLimit?: number;

  /**
   * <p>The type of the ulimit.</p>
   */
  Name?: string;

  /**
   * <p>The soft limit for the ulimit type.</p>
   */
  SoftLimit?: number;
}

export namespace AwsEcsTaskDefinitionContainerDefinitionsUlimitsDetails {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: AwsEcsTaskDefinitionContainerDefinitionsUlimitsDetails): any => ({
    ...obj,
  });
}

/**
 * <p>A data volume to mount from another container.</p>
 */
export interface AwsEcsTaskDefinitionContainerDefinitionsVolumesFromDetails {
  /**
   * <p>Whether the container has read-only access to the volume.</p>
   */
  ReadOnly?: boolean;

  /**
   * <p>The name of another container within the same task definition from which to mount volumes.</p>
   */
  SourceContainer?: string;
}

export namespace AwsEcsTaskDefinitionContainerDefinitionsVolumesFromDetails {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: AwsEcsTaskDefinitionContainerDefinitionsVolumesFromDetails): any => ({
    ...obj,
  });
}

/**
 * <p>An Elastic Inference accelerator to use
 *          for the containers in the task.</p>
 */
export interface AwsEcsTaskDefinitionInferenceAcceleratorsDetails {
  /**
   * <p>The Elastic Inference accelerator device name.</p>
   */
  DeviceName?: string;

  /**
   * <p>The Elastic Inference accelerator type to use.</p>
   */
  DeviceType?: string;
}

export namespace AwsEcsTaskDefinitionInferenceAcceleratorsDetails {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: AwsEcsTaskDefinitionInferenceAcceleratorsDetails): any => ({
    ...obj,
  });
}

/**
 * <p>A placement constraint object to use for tasks.</p>
 */
export interface AwsEcsTaskDefinitionPlacementConstraintsDetails {
  /**
   * <p>A cluster query language expression to apply to the constraint.</p>
   */
  Expression?: string;

  /**
   * <p>The type of constraint.</p>
   */
  Type?: string;
}

export namespace AwsEcsTaskDefinitionPlacementConstraintsDetails {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: AwsEcsTaskDefinitionPlacementConstraintsDetails): any => ({
    ...obj,
  });
}

/**
 * <p>A network configuration parameter to provide to the Container Network Interface (CNI) plugin.</p>
 */
export interface AwsEcsTaskDefinitionProxyConfigurationProxyConfigurationPropertiesDetails {
  /**
   * <p>The name of the property.</p>
   */
  Name?: string;

  /**
   * <p>The value of the property.</p>
   */
  Value?: string;
}

export namespace AwsEcsTaskDefinitionProxyConfigurationProxyConfigurationPropertiesDetails {
  /**
   * @internal
   */
  export const filterSensitiveLog = (
    obj: AwsEcsTaskDefinitionProxyConfigurationProxyConfigurationPropertiesDetails
  ): any => ({
    ...obj,
  });
}

/**
 * <p>The configuration details for the App Mesh
 *          proxy.</p>
 */
export interface AwsEcsTaskDefinitionProxyConfigurationDetails {
  /**
   * <p>The name of the container that will serve as the App Mesh proxy.</p>
   */
  ContainerName?: string;

  /**
   * <p>The set of network configuration parameters to provide to the Container Network Interface (CNI) plugin, specified as key-value pairs.</p>
   */
  ProxyConfigurationProperties?: AwsEcsTaskDefinitionProxyConfigurationProxyConfigurationPropertiesDetails[];

  /**
   * <p>The proxy type.</p>
   */
  Type?: string;
}

export namespace AwsEcsTaskDefinitionProxyConfigurationDetails {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: AwsEcsTaskDefinitionProxyConfigurationDetails): any => ({
    ...obj,
  });
}

/**
 * <p>Information about a Docker volume.</p>
 */
export interface AwsEcsTaskDefinitionVolumesDockerVolumeConfigurationDetails {
  /**
   * <p>Whether to create the Docker volume automatically if it does not already exist.</p>
   */
  Autoprovision?: boolean;

  /**
   * <p>The Docker volume driver to use.</p>
   */
  Driver?: string;

  /**
   * <p>A map of Docker driver-specific options that are passed through.</p>
   */
  DriverOpts?: Record<string, string>;

  /**
   * <p>Custom metadata to add to the Docker volume.</p>
   */
  Labels?: Record<string, string>;

  /**
   * <p>The scope for the Docker volume that determines its lifecycle. Docker volumes that are scoped to a task are provisioned automatically when the task starts and destroyed when the task stops. Docker volumes that are shared persist after the task stops.</p>
   */
  Scope?: string;
}

export namespace AwsEcsTaskDefinitionVolumesDockerVolumeConfigurationDetails {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: AwsEcsTaskDefinitionVolumesDockerVolumeConfigurationDetails): any => ({
    ...obj,
  });
}

/**
 * <p></p>
 */
export interface AwsEcsTaskDefinitionVolumesEfsVolumeConfigurationAuthorizationConfigDetails {
  /**
   * <p>The Amazon EFS access point identifier to use.</p>
   */
  AccessPointId?: string;

  /**
   * <p>Whether to use the Amazon ECS task IAM role defined in a task definition when mounting the Amazon EFS file system.</p>
   */
  Iam?: string;
}

export namespace AwsEcsTaskDefinitionVolumesEfsVolumeConfigurationAuthorizationConfigDetails {
  /**
   * @internal
   */
  export const filterSensitiveLog = (
    obj: AwsEcsTaskDefinitionVolumesEfsVolumeConfigurationAuthorizationConfigDetails
  ): any => ({
    ...obj,
  });
}

/**
 * <p>Information about the Amazon Elastic File System file system that is used for task storage.</p>
 */
export interface AwsEcsTaskDefinitionVolumesEfsVolumeConfigurationDetails {
  /**
   * <p>The authorization configuration details for the Amazon EFS file system.</p>
   */
  AuthorizationConfig?: AwsEcsTaskDefinitionVolumesEfsVolumeConfigurationAuthorizationConfigDetails;

  /**
   * <p>The Amazon EFS file system identifier to use.</p>
   */
  FilesystemId?: string;

  /**
   * <p>The directory within the Amazon EFS file system to mount as the root directory inside the host.</p>
   */
  RootDirectory?: string;

  /**
   * <p>Whether to enable encryption for Amazon EFS data in transit between the Amazon ECS host and the Amazon EFS server. </p>
   */
  TransitEncryption?: string;

  /**
   * <p>The port to use when sending encrypted data between the Amazon ECS host and the Amazon EFS server.</p>
   */
  TransitEncryptionPort?: number;
}

export namespace AwsEcsTaskDefinitionVolumesEfsVolumeConfigurationDetails {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: AwsEcsTaskDefinitionVolumesEfsVolumeConfigurationDetails): any => ({
    ...obj,
  });
}

/**
 * <p>Information about a bind mount host volume.</p>
 */
export interface AwsEcsTaskDefinitionVolumesHostDetails {
  /**
   * <p>The path on the host container instance that is presented to the container.</p>
   */
  SourcePath?: string;
}

export namespace AwsEcsTaskDefinitionVolumesHostDetails {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: AwsEcsTaskDefinitionVolumesHostDetails): any => ({
    ...obj,
  });
}

/**
 * <p>A data volume to mount from another container.</p>
 */
export interface AwsEcsTaskDefinitionVolumesDetails {
  /**
   * <p>Information about a Docker volume.</p>
   */
  DockerVolumeConfiguration?: AwsEcsTaskDefinitionVolumesDockerVolumeConfigurationDetails;

  /**
   * <p>Information about the Amazon Elastic File System file system that is used for task storage.</p>
   */
  EfsVolumeConfiguration?: AwsEcsTaskDefinitionVolumesEfsVolumeConfigurationDetails;

  /**
   * <p>Information about a bind mount host volume.</p>
   */
  Host?: AwsEcsTaskDefinitionVolumesHostDetails;

  /**
   * <p>The name of the data volume.</p>
   */
  Name?: string;
}

export namespace AwsEcsTaskDefinitionVolumesDetails {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: AwsEcsTaskDefinitionVolumesDetails): any => ({
    ...obj,
  });
}

/**
 * <p>Details about a task definition. A task definition describes the container and volume definitions
 *          of an Amazon Elastic Container Service task.</p>
 */
export interface AwsEcsTaskDefinitionDetails {
  /**
   * <p>The container definitions that describe the containers that make up the task.</p>
   */
  ContainerDefinitions?: AwsEcsTaskDefinitionContainerDefinitionsDetails[];

  /**
   * <p>The number of CPU units used by the task.</p>
   */
  Cpu?: string;

  /**
   * <p>The ARN of the task execution role that grants the container agent permission to make API calls on behalf of the container user.</p>
   */
  ExecutionRoleArn?: string;

  /**
   * <p>The name of a family that this task definition is registered to.</p>
   */
  Family?: string;

  /**
   * <p>The Elastic Inference accelerators to use for the containers in the task.</p>
   */
  InferenceAccelerators?: AwsEcsTaskDefinitionInferenceAcceleratorsDetails[];

  /**
   * <p>The IPC resource namespace to use for the containers in the task.</p>
   */
  IpcMode?: string;

  /**
   * <p>The amount (in MiB) of memory used by the task.</p>
   */
  Memory?: string;

  /**
   * <p>The Docker networking mode to use for the containers in the task.</p>
   */
  NetworkMode?: string;

  /**
   * <p>The process namespace to use for the containers in the task.</p>
   */
  PidMode?: string;

  /**
   * <p>The placement constraint objects to use for tasks.</p>
   */
  PlacementConstraints?: AwsEcsTaskDefinitionPlacementConstraintsDetails[];

  /**
   * <p>The configuration details for the App Mesh proxy.</p>
   */
  ProxyConfiguration?: AwsEcsTaskDefinitionProxyConfigurationDetails;

  /**
   * <p>The task launch types that the task definition was validated against.</p>
   */
  RequiresCompatibilities?: string[];

  /**
   * <p>The short name or ARN of the IAM role that grants containers in the task permission to call Amazon Web Services API operations on your behalf.</p>
   */
  TaskRoleArn?: string;

  /**
   * <p>The data volume definitions for the task.</p>
   */
  Volumes?: AwsEcsTaskDefinitionVolumesDetails[];
}

export namespace AwsEcsTaskDefinitionDetails {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: AwsEcsTaskDefinitionDetails): any => ({
    ...obj,
  });
}

/**
 * <p>Provides details on a container instance bind mount host volume.
 *       </p>
 */
export interface AwsEcsTaskVolumeHostDetails {
  /**
   * <p>When the <code>host</code> parameter is used, specify a <code>sourcePath</code> to declare the path
   * on the host container instance that's presented to the container.
   *       </p>
   */
  SourcePath?: string;
}

export namespace AwsEcsTaskVolumeHostDetails {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: AwsEcsTaskVolumeHostDetails): any => ({
    ...obj,
  });
}

/**
 * <p>Provides information about a data volume that's used in a task definition.
 *       </p>
 */
export interface AwsEcsTaskVolumeDetails {
  /**
   * <p>The name of the volume. Up to 255 letters (uppercase and lowercase), numbers, underscores, and
   * hyphens are allowed. This name is referenced in the <code>sourceVolume</code> parameter of container definition <code>mountPoints</code>.
   *       </p>
   */
  Name?: string;

  /**
   * <p>This parameter is specified when you use bind mount host volumes. The contents of the <code>host</code> parameter
   * determine whether your bind mount host volume persists on the host container instance and where it's stored.
   *       </p>
   */
  Host?: AwsEcsTaskVolumeHostDetails;
}

export namespace AwsEcsTaskVolumeDetails {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: AwsEcsTaskVolumeDetails): any => ({
    ...obj,
  });
}

/**
 * <p>Provides details about a task in a cluster.
 *       </p>
 */
export interface AwsEcsTaskDetails {
  /**
   * <p>The Amazon Resource Name (ARN) of the cluster that hosts the task.
   *       </p>
   */
  ClusterArn?: string;

  /**
   * <p>The ARN of the task definition that creates the task.
   *       </p>
   */
  TaskDefinitionArn?: string;

  /**
   * <p>The version counter for the task.
   *       </p>
   */
  Version?: string;

  /**
   * <p>The Unix timestamp for the time when the task was created. More specifically, it's for the time when
   * the task entered the <code>PENDING</code> state.
   *       </p>
   */
  CreatedAt?: string;

  /**
   * <p>The Unix timestamp for the time when the task started. More specifically, it's for the time when the
   *          task transitioned from the <code>PENDING</code> state to the <code>RUNNING</code> state.
   *    </p>
   */
  StartedAt?: string;

  /**
   * <p>The tag specified when a task is started. If an Amazon ECS service started the task, the
   *          <code>startedBy</code> parameter contains the deployment ID of that service.
   *       </p>
   */
  StartedBy?: string;

  /**
   * <p>The name of the task group that's associated with the task.
   *       </p>
   */
  Group?: string;

  /**
   * <p>Details about the data volume that is used in a task definition.
   *       </p>
   */
  Volumes?: AwsEcsTaskVolumeDetails[];

  /**
   * <p>The containers that are associated with the task.
   *       </p>
   */
  Containers?: AwsEcsContainerDetails[];
}

export namespace AwsEcsTaskDetails {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: AwsEcsTaskDetails): any => ({
    ...obj,
  });
}

/**
 * <p>Provides details for all file system operations using this Amazon EFS access point.
 *       </p>
 */
export interface AwsEfsAccessPointPosixUserDetails {
  /**
   * <p>The POSIX group ID used for all file system operations using this access point.
   *       </p>
   */
  Gid?: string;

  /**
   * <p>Secondary POSIX group IDs used for all file system operations using this access point.
   *       </p>
   */
  SecondaryGids?: string[];

  /**
   * <p>The POSIX user ID used for all file system operations using this access point.
   *       </p>
   */
  Uid?: string;
}

export namespace AwsEfsAccessPointPosixUserDetails {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: AwsEfsAccessPointPosixUserDetails): any => ({
    ...obj,
  });
}

/**
 * <p>Provides information about the settings that Amazon EFS uses to create the root directory
 * when a client connects to an access point.
 *       </p>
 */
export interface AwsEfsAccessPointRootDirectoryCreationInfoDetails {
  /**
   * <p>Specifies the POSIX group ID to apply to the root directory.
   *       </p>
   */
  OwnerGid?: string;

  /**
   * <p>Specifies the POSIX user ID to apply to the root directory.
   *       </p>
   */
  OwnerUid?: string;

  /**
   * <p>Specifies the POSIX permissions to apply to the root directory, in the format of an octal number
   * representing the file's mode bits.
   *       </p>
   */
  Permissions?: string;
}

export namespace AwsEfsAccessPointRootDirectoryCreationInfoDetails {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: AwsEfsAccessPointRootDirectoryCreationInfoDetails): any => ({
    ...obj,
  });
}

/**
 * <p>Provides information about the directory on the Amazon EFS file system that the access point exposes
 * as the root directory to NFS clients using the access point.
 *       </p>
 */
export interface AwsEfsAccessPointRootDirectoryDetails {
  /**
   * <p>Specifies the POSIX IDs and permissions to apply to the access point's root directory.
   *       </p>
   */
  CreationInfo?: AwsEfsAccessPointRootDirectoryCreationInfoDetails;

  /**
   * <p>Specifies the path on the Amazon EFS file system to expose as the root directory to NFS clients
   * using the access point to access the EFS file system. A path can have up to four subdirectories. If the specified
   * path does not exist, you are required to provide <code>CreationInfo</code>.
   *       </p>
   */
  Path?: string;
}

export namespace AwsEfsAccessPointRootDirectoryDetails {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: AwsEfsAccessPointRootDirectoryDetails): any => ({
    ...obj,
  });
}

/**
 * <p>Provides information about an Amazon EFS access point.
 *       </p>
 */
export interface AwsEfsAccessPointDetails {
  /**
   * <p>The ID of the Amazon EFS access point.
   *       </p>
   */
  AccessPointId?: string;

  /**
   * <p>The Amazon Resource Name (ARN) of the Amazon EFS access point. </p>
   */
  Arn?: string;

  /**
   * <p>The opaque string specified in the request to ensure idempotent creation.
   *       </p>
   */
  ClientToken?: string;

  /**
   * <p>The ID of the Amazon EFS file system that the access point applies to.
   *       </p>
   */
  FileSystemId?: string;

  /**
   * <p>The full POSIX identity, including the user ID, group ID, and secondary group IDs on the access point,
   * that is used for all file operations by NFS clients using the access point.
   *       </p>
   */
  PosixUser?: AwsEfsAccessPointPosixUserDetails;

  /**
   * <p>The directory on the Amazon EFS file system that the access point exposes as the root
   * directory to NFS clients using the access point.
   *       </p>
   */
  RootDirectory?: AwsEfsAccessPointRootDirectoryDetails;
}

export namespace AwsEfsAccessPointDetails {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: AwsEfsAccessPointDetails): any => ({
    ...obj,
  });
}

/**
 * <p>Details for a cluster logging configuration.</p>
 */
export interface AwsEksClusterLoggingClusterLoggingDetails {
  /**
   * <p>Whether the logging types that are listed in <code>Types</code> are enabled.</p>
   */
  Enabled?: boolean;

  /**
   * <p>A list of logging types.</p>
   */
  Types?: string[];
}

export namespace AwsEksClusterLoggingClusterLoggingDetails {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: AwsEksClusterLoggingClusterLoggingDetails): any => ({
    ...obj,
  });
}

/**
 * <p>The logging configuration for an Amazon EKS cluster.</p>
 */
export interface AwsEksClusterLoggingDetails {
  /**
   * <p>Cluster logging configurations.</p>
   */
  ClusterLogging?: AwsEksClusterLoggingClusterLoggingDetails[];
}

export namespace AwsEksClusterLoggingDetails {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: AwsEksClusterLoggingDetails): any => ({
    ...obj,
  });
}

/**
 * <p>Information about the VPC configuration used by the cluster control plane.</p>
 */
export interface AwsEksClusterResourcesVpcConfigDetails {
  /**
   * <p>The security groups that are associated with the cross-account elastic network interfaces that are used to allow communication between your nodes and the Amazon EKS control plane.</p>
   */
  SecurityGroupIds?: string[];

  /**
   * <p>The subnets that are associated with the cluster.</p>
   */
  SubnetIds?: string[];
}

export namespace AwsEksClusterResourcesVpcConfigDetails {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: AwsEksClusterResourcesVpcConfigDetails): any => ({
    ...obj,
  });
}

/**
 * <p>Provides details about an Amazon EKS cluster.</p>
 */
export interface AwsEksClusterDetails {
  /**
   * <p>The ARN of the cluster.</p>
   */
  Arn?: string;

  /**
   * <p>The certificate authority data for the cluster.</p>
   */
  CertificateAuthorityData?: string;

  /**
   * <p>The status of the cluster.</p>
   */
  ClusterStatus?: string;

  /**
   * <p>The endpoint for the Amazon EKS API server.</p>
   */
  Endpoint?: string;

  /**
   * <p>The name of the cluster.</p>
   */
  Name?: string;

  /**
   * <p>The VPC configuration used by the cluster control plane.</p>
   */
  ResourcesVpcConfig?: AwsEksClusterResourcesVpcConfigDetails;

  /**
   * <p>The ARN of the IAM role that provides permissions for the Amazon EKS control plane to make calls to Amazon Web Services API operations on your behalf.</p>
   */
  RoleArn?: string;

  /**
   * <p>The Amazon EKS server version for the cluster.</p>
   */
  Version?: string;

  /**
   * <p>The logging configuration for the cluster.</p>
   */
  Logging?: AwsEksClusterLoggingDetails;
}

export namespace AwsEksClusterDetails {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: AwsEksClusterDetails): any => ({
    ...obj,
  });
}

/**
 * <p>Contains information about a link to another environment that is in the same group.</p>
 */
export interface AwsElasticBeanstalkEnvironmentEnvironmentLink {
  /**
   * <p>The name of the linked environment.</p>
   */
  EnvironmentName?: string;

  /**
   * <p>The name of the environment link.</p>
   */
  LinkName?: string;
}

export namespace AwsElasticBeanstalkEnvironmentEnvironmentLink {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: AwsElasticBeanstalkEnvironmentEnvironmentLink): any => ({
    ...obj,
  });
}

/**
 * <p>A configuration option setting for the environment.</p>
 */
export interface AwsElasticBeanstalkEnvironmentOptionSetting {
  /**
   * <p>The type of resource that the configuration option is associated with.</p>
   */
  Namespace?: string;

  /**
   * <p>The name of the option.</p>
   */
  OptionName?: string;

  /**
   * <p>The name of the resource.</p>
   */
  ResourceName?: string;

  /**
   * <p>The value of the configuration setting.</p>
   */
  Value?: string;
}

export namespace AwsElasticBeanstalkEnvironmentOptionSetting {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: AwsElasticBeanstalkEnvironmentOptionSetting): any => ({
    ...obj,
  });
}

/**
 * <p>Contains information about the tier of the environment.</p>
 */
export interface AwsElasticBeanstalkEnvironmentTier {
  /**
   * <p>The name of the environment tier.</p>
   */
  Name?: string;

  /**
   * <p>The type of environment tier.</p>
   */
  Type?: string;

  /**
   * <p>The version of the environment tier.</p>
   */
  Version?: string;
}

export namespace AwsElasticBeanstalkEnvironmentTier {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: AwsElasticBeanstalkEnvironmentTier): any => ({
    ...obj,
  });
}

/**
 * <p>Contains details about an Elastic Beanstalk environment.</p>
 */
export interface AwsElasticBeanstalkEnvironmentDetails {
  /**
   * <p>The name of the application that is associated with the environment.</p>
   */
  ApplicationName?: string;

  /**
   * <p>The URL to the CNAME for this environment.</p>
   */
  Cname?: string;

  /**
   * <p>The creation date for this environment.</p>
   */
  DateCreated?: string;

  /**
   * <p>The date when this environment was last modified.</p>
   */
  DateUpdated?: string;

  /**
   * <p>A description of the environment.</p>
   */
  Description?: string;

  /**
   * <p>For load-balanced, autoscaling environments, the URL to the load balancer. For single-instance environments, the IP address of the instance.</p>
   */
  EndpointUrl?: string;

  /**
   * <p>The ARN of the environment.</p>
   */
  EnvironmentArn?: string;

  /**
   * <p>The identifier of the environment.</p>
   */
  EnvironmentId?: string;

  /**
   * <p>Links to other environments in the same group.</p>
   */
  EnvironmentLinks?: AwsElasticBeanstalkEnvironmentEnvironmentLink[];

  /**
   * <p>The name of the environment.</p>
   */
  EnvironmentName?: string;

  /**
   * <p>The configuration setting for the environment.</p>
   */
  OptionSettings?: AwsElasticBeanstalkEnvironmentOptionSetting[];

  /**
   * <p>The ARN of the platform version for the environment.</p>
   */
  PlatformArn?: string;

  /**
   * <p>The name of the solution stack that is deployed with the environment.</p>
   */
  SolutionStackName?: string;

  /**
   * <p>The current operational status of the environment.</p>
   */
  Status?: string;

  /**
   * <p>The tier of the environment.</p>
   */
  Tier?: AwsElasticBeanstalkEnvironmentTier;

  /**
   * <p>The application version of the environment.</p>
   */
  VersionLabel?: string;
}

export namespace AwsElasticBeanstalkEnvironmentDetails {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: AwsElasticBeanstalkEnvironmentDetails): any => ({
    ...obj,
  });
}

/**
 * <p>Additional options for the domain endpoint, such as whether to require HTTPS for all
 *          traffic.</p>
 */
export interface AwsElasticsearchDomainDomainEndpointOptions {
  /**
   * <p>Whether to require that all traffic to the domain arrive over HTTPS.</p>
   */
  EnforceHTTPS?: boolean;

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
   */
  TLSSecurityPolicy?: string;
}

export namespace AwsElasticsearchDomainDomainEndpointOptions {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: AwsElasticsearchDomainDomainEndpointOptions): any => ({
    ...obj,
  });
}

/**
 * <p>Configuration options for zone awareness.</p>
 */
export interface AwsElasticsearchDomainElasticsearchClusterConfigZoneAwarenessConfigDetails {
  /**
   * <p>he number of Availability Zones that the domain uses. Valid values are 2 and 3. The default is 2.</p>
   */
  AvailabilityZoneCount?: number;
}

export namespace AwsElasticsearchDomainElasticsearchClusterConfigZoneAwarenessConfigDetails {
  /**
   * @internal
   */
  export const filterSensitiveLog = (
    obj: AwsElasticsearchDomainElasticsearchClusterConfigZoneAwarenessConfigDetails
  ): any => ({
    ...obj,
  });
}

/**
 * <p>details about the configuration of an OpenSearch cluster.</p>
 */
export interface AwsElasticsearchDomainElasticsearchClusterConfigDetails {
  /**
   * <p>The number of instances to use for the master node. If this attribute is specified, then <code>DedicatedMasterEnabled</code> must be <code>true</code>.</p>
   */
  DedicatedMasterCount?: number;

  /**
   * <p>Whether to use a dedicated master node for the Elasticsearch domain. A dedicated master node performs cluster management tasks, but doesn't hold data or respond to data upload requests.</p>
   */
  DedicatedMasterEnabled?: boolean;

  /**
   * <p>The hardware configuration of the computer that hosts the dedicated master node. For example, <code>m3.medium.elasticsearch</code>. If this attribute is specified, then <code>DedicatedMasterEnabled</code> must be <code>true</code>.</p>
   */
  DedicatedMasterType?: string;

  /**
   * <p>The number of data nodes to use in the Elasticsearch domain.</p>
   */
  InstanceCount?: number;

  /**
   * <p>The instance type for your data nodes. For example, <code>m3.medium.elasticsearch</code>.</p>
   */
  InstanceType?: string;

  /**
   * <p>Configuration options for zone awareness. Provided if <code>ZoneAwarenessEnabled</code> is <code>true</code>.</p>
   */
  ZoneAwarenessConfig?: AwsElasticsearchDomainElasticsearchClusterConfigZoneAwarenessConfigDetails;

  /**
   * <p>Whether to enable zone awareness for the Elasticsearch domain. When zone awareness is enabled, OpenSearch allocates the cluster's nodes and replica index shards across Availability Zones in the same Region. This prevents data loss and minimizes downtime if a node or data center fails.</p>
   */
  ZoneAwarenessEnabled?: boolean;
}

export namespace AwsElasticsearchDomainElasticsearchClusterConfigDetails {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: AwsElasticsearchDomainElasticsearchClusterConfigDetails): any => ({
    ...obj,
  });
}

/**
 * <p>Details about the configuration for encryption at rest.</p>
 */
export interface AwsElasticsearchDomainEncryptionAtRestOptions {
  /**
   * <p>Whether encryption at rest is enabled.</p>
   */
  Enabled?: boolean;

  /**
   * <p>The KMS key ID. Takes the form <code>1a2a3a4-1a2a-3a4a-5a6a-1a2a3a4a5a6a</code>.</p>
   */
  KmsKeyId?: string;
}

export namespace AwsElasticsearchDomainEncryptionAtRestOptions {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: AwsElasticsearchDomainEncryptionAtRestOptions): any => ({
    ...obj,
  });
}

/**
 * <p>The log configuration.</p>
 */
export interface AwsElasticsearchDomainLogPublishingOptionsLogConfig {
  /**
   * <p>The ARN of the CloudWatch Logs group to publish the logs to.</p>
   */
  CloudWatchLogsLogGroupArn?: string;

  /**
   * <p>Whether the log publishing is enabled.</p>
   */
  Enabled?: boolean;
}

export namespace AwsElasticsearchDomainLogPublishingOptionsLogConfig {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: AwsElasticsearchDomainLogPublishingOptionsLogConfig): any => ({
    ...obj,
  });
}

/**
 * <p>configures the CloudWatch Logs to publish for the
 *          Elasticsearch domain.</p>
 */
export interface AwsElasticsearchDomainLogPublishingOptions {
  /**
   * <p>Configures the OpenSearch index logs
   *          publishing.</p>
   */
  IndexSlowLogs?: AwsElasticsearchDomainLogPublishingOptionsLogConfig;

  /**
   * <p>Configures the OpenSearch search slow log
   *          publishing.</p>
   */
  SearchSlowLogs?: AwsElasticsearchDomainLogPublishingOptionsLogConfig;

  /**
   * <p>The log configuration.</p>
   */
  AuditLogs?: AwsElasticsearchDomainLogPublishingOptionsLogConfig;
}

export namespace AwsElasticsearchDomainLogPublishingOptions {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: AwsElasticsearchDomainLogPublishingOptions): any => ({
    ...obj,
  });
}

/**
 * <p>Details about the configuration for node-to-node encryption.</p>
 */
export interface AwsElasticsearchDomainNodeToNodeEncryptionOptions {
  /**
   * <p>Whether node-to-node encryption is enabled.</p>
   */
  Enabled?: boolean;
}

export namespace AwsElasticsearchDomainNodeToNodeEncryptionOptions {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: AwsElasticsearchDomainNodeToNodeEncryptionOptions): any => ({
    ...obj,
  });
}

/**
 * <p>Information about the state of the domain relative to the latest service software.</p>
 */
export interface AwsElasticsearchDomainServiceSoftwareOptions {
  /**
   * <p>The epoch time when the deployment window closes for required updates. After this time,
   *          Amazon OpenSearch Service schedules the software upgrade automatically.</p>
   */
  AutomatedUpdateDate?: string;

  /**
   * <p>Whether a request to update the domain can be canceled.</p>
   */
  Cancellable?: boolean;

  /**
   * <p>The version of the service software that is currently installed on the domain.</p>
   */
  CurrentVersion?: string;

  /**
   * <p>A more detailed description of the service software status.</p>
   */
  Description?: string;

  /**
   * <p>The most recent version of the service software.</p>
   */
  NewVersion?: string;

  /**
   * <p>Whether a service software update is available for the domain.</p>
   */
  UpdateAvailable?: boolean;

  /**
   * <p>The status of the service software update.</p>
   */
  UpdateStatus?: string;
}

export namespace AwsElasticsearchDomainServiceSoftwareOptions {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: AwsElasticsearchDomainServiceSoftwareOptions): any => ({
    ...obj,
  });
}

/**
 * <p>Information that OpenSearch derives based on <code>VPCOptions</code> for the
 *          domain.</p>
 */
export interface AwsElasticsearchDomainVPCOptions {
  /**
   * <p>The list of Availability Zones associated with the VPC subnets.</p>
   */
  AvailabilityZones?: string[];

  /**
   * <p>The list of security group IDs associated with the VPC endpoints for the domain.</p>
   */
  SecurityGroupIds?: string[];

  /**
   * <p>A list of subnet IDs associated with the VPC endpoints for the domain.</p>
   */
  SubnetIds?: string[];

  /**
   * <p>ID for the VPC.</p>
   */
  VPCId?: string;
}

export namespace AwsElasticsearchDomainVPCOptions {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: AwsElasticsearchDomainVPCOptions): any => ({
    ...obj,
  });
}

/**
 * <p>Information about an Elasticsearch domain.</p>
 */
export interface AwsElasticsearchDomainDetails {
  /**
   * <p>IAM policy document specifying the access policies for the new Elasticsearch domain.</p>
   */
  AccessPolicies?: string;

  /**
   * <p>Additional options for the domain endpoint.</p>
   */
  DomainEndpointOptions?: AwsElasticsearchDomainDomainEndpointOptions;

  /**
   * <p>Unique identifier for an Elasticsearch domain.</p>
   */
  DomainId?: string;

  /**
   * <p>Name of an Elasticsearch domain.</p>
   *          <p>Domain names are unique across all domains owned by the same account within an Amazon Web Services
   *          Region.</p>
   *          <p>Domain names must start with a lowercase letter and must be between 3 and 28
   *          characters.</p>
   *          <p>Valid characters are a-z (lowercase only), 0-9, and – (hyphen). </p>
   */
  DomainName?: string;

  /**
   * <p>Domain-specific endpoint used to submit index, search, and data upload requests to an
   *          Elasticsearch domain.</p>
   *          <p>The endpoint is a service URL. </p>
   */
  Endpoint?: string;

  /**
   * <p>The key-value pair that exists if the Elasticsearch domain uses VPC endpoints.</p>
   */
  Endpoints?: Record<string, string>;

  /**
   * <p>OpenSearch version.</p>
   */
  ElasticsearchVersion?: string;

  /**
   * <p>Information about an OpenSearch cluster configuration.</p>
   */
  ElasticsearchClusterConfig?: AwsElasticsearchDomainElasticsearchClusterConfigDetails;

  /**
   * <p>Details about the configuration for encryption at rest.</p>
   */
  EncryptionAtRestOptions?: AwsElasticsearchDomainEncryptionAtRestOptions;

  /**
   * <p>Configures the CloudWatch Logs to publish for the Elasticsearch domain.</p>
   */
  LogPublishingOptions?: AwsElasticsearchDomainLogPublishingOptions;

  /**
   * <p>Details about the configuration for node-to-node encryption.</p>
   */
  NodeToNodeEncryptionOptions?: AwsElasticsearchDomainNodeToNodeEncryptionOptions;

  /**
   * <p>Information about the status of a domain relative to the latest service software.</p>
   */
  ServiceSoftwareOptions?: AwsElasticsearchDomainServiceSoftwareOptions;

  /**
   * <p>Information that OpenSearch derives based on <code>VPCOptions</code> for the
   *          domain.</p>
   */
  VPCOptions?: AwsElasticsearchDomainVPCOptions;
}

export namespace AwsElasticsearchDomainDetails {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: AwsElasticsearchDomainDetails): any => ({
    ...obj,
  });
}

/**
 * <p>Contains information about a stickiness policy that was created using
 *             <code>CreateAppCookieStickinessPolicy</code>.</p>
 */
export interface AwsElbAppCookieStickinessPolicy {
  /**
   * <p>The name of the application cookie used for stickiness.</p>
   */
  CookieName?: string;

  /**
   * <p>The mnemonic name for the policy being created. The name must be unique within the set
   *          of policies for the load balancer.</p>
   */
  PolicyName?: string;
}

export namespace AwsElbAppCookieStickinessPolicy {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: AwsElbAppCookieStickinessPolicy): any => ({
    ...obj,
  });
}

/**
 * <p>Contains information about a stickiness policy that was created using
 *             <code>CreateLBCookieStickinessPolicy</code>.</p>
 */
export interface AwsElbLbCookieStickinessPolicy {
  /**
   * <p>The amount of time, in seconds, after which the cookie is considered stale. If an
   *          expiration period is not specified, the stickiness session lasts for the duration of the
   *          browser session.</p>
   */
  CookieExpirationPeriod?: number;

  /**
   * <p>The name of the policy. The name must be unique within the set of policies for the load
   *          balancer.</p>
   */
  PolicyName?: string;
}

export namespace AwsElbLbCookieStickinessPolicy {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: AwsElbLbCookieStickinessPolicy): any => ({
    ...obj,
  });
}

/**
 * <p>Contains information about the access log configuration for the load balancer.</p>
 */
export interface AwsElbLoadBalancerAccessLog {
  /**
   * <p>The interval in minutes for publishing the access logs.</p>
   *          <p>You can publish access logs either every 5 minutes or every 60 minutes.</p>
   */
  EmitInterval?: number;

  /**
   * <p>Indicates whether access logs are enabled for the load balancer.</p>
   */
  Enabled?: boolean;

  /**
   * <p>The name of the S3 bucket where the access logs are stored.</p>
   */
  S3BucketName?: string;

  /**
   * <p>The logical hierarchy that was created for the S3 bucket.</p>
   *          <p>If a prefix is not provided, the log is placed at the root level of the bucket.</p>
   */
  S3BucketPrefix?: string;
}

export namespace AwsElbLoadBalancerAccessLog {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: AwsElbLoadBalancerAccessLog): any => ({
    ...obj,
  });
}

/**
 * <p>Provides information about additional attributes for the load balancer.</p>
 */
export interface AwsElbLoadBalancerAdditionalAttribute {
  /**
   * <p>The name of the attribute.</p>
   */
  Key?: string;

  /**
   * <p>The value of the attribute.</p>
   */
  Value?: string;
}

export namespace AwsElbLoadBalancerAdditionalAttribute {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: AwsElbLoadBalancerAdditionalAttribute): any => ({
    ...obj,
  });
}

/**
 * <p>Contains information about the connection draining configuration for the load
 *          balancer.</p>
 */
export interface AwsElbLoadBalancerConnectionDraining {
  /**
   * <p>Indicates whether connection draining is enabled for the load balancer.</p>
   */
  Enabled?: boolean;

  /**
   * <p>The maximum time, in seconds, to keep the existing connections open before deregistering
   *          the instances.</p>
   */
  Timeout?: number;
}

export namespace AwsElbLoadBalancerConnectionDraining {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: AwsElbLoadBalancerConnectionDraining): any => ({
    ...obj,
  });
}

/**
 * <p>Contains connection settings for the load balancer.</p>
 */
export interface AwsElbLoadBalancerConnectionSettings {
  /**
   * <p>The time, in seconds, that the connection can be idle (no data is sent over the
   *          connection) before it is closed by the load balancer.</p>
   */
  IdleTimeout?: number;
}

export namespace AwsElbLoadBalancerConnectionSettings {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: AwsElbLoadBalancerConnectionSettings): any => ({
    ...obj,
  });
}

/**
 * <p>Contains cross-zone load balancing settings for the load balancer.</p>
 */
export interface AwsElbLoadBalancerCrossZoneLoadBalancing {
  /**
   * <p>Indicates whether cross-zone load balancing is enabled for the load balancer.</p>
   */
  Enabled?: boolean;
}

export namespace AwsElbLoadBalancerCrossZoneLoadBalancing {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: AwsElbLoadBalancerCrossZoneLoadBalancing): any => ({
    ...obj,
  });
}

/**
 * <p>Contains attributes for the load balancer.</p>
 */
export interface AwsElbLoadBalancerAttributes {
  /**
   * <p>Information about the access log configuration for the load balancer.</p>
   *          <p>If the access log is enabled, the load balancer captures detailed information about all
   *          requests. It delivers the information to a specified S3 bucket.</p>
   */
  AccessLog?: AwsElbLoadBalancerAccessLog;

  /**
   * <p>Information about the connection draining configuration for the load balancer.</p>
   *          <p>If connection draining is enabled, the load balancer allows existing requests to
   *          complete before it shifts traffic away from a deregistered or unhealthy instance.</p>
   */
  ConnectionDraining?: AwsElbLoadBalancerConnectionDraining;

  /**
   * <p>Connection settings for the load balancer.</p>
   *          <p>If an idle timeout is configured, the load balancer allows connections to remain idle
   *          for the specified duration. When a connection is idle, no data is sent over the
   *          connection.</p>
   */
  ConnectionSettings?: AwsElbLoadBalancerConnectionSettings;

  /**
   * <p>Cross-zone load balancing settings for the load balancer.</p>
   *          <p>If cross-zone load balancing is enabled, the load balancer routes the request traffic
   *          evenly across all instances regardless of the Availability Zones.</p>
   */
  CrossZoneLoadBalancing?: AwsElbLoadBalancerCrossZoneLoadBalancing;

  /**
   * <p>Any additional attributes for a load balancer.</p>
   */
  AdditionalAttributes?: AwsElbLoadBalancerAdditionalAttribute[];
}

export namespace AwsElbLoadBalancerAttributes {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: AwsElbLoadBalancerAttributes): any => ({
    ...obj,
  });
}

/**
 * <p>Provides information about the configuration of an EC2 instance for the load
 *          balancer.</p>
 */
export interface AwsElbLoadBalancerBackendServerDescription {
  /**
   * <p>The port on which the EC2 instance is listening.</p>
   */
  InstancePort?: number;

  /**
   * <p>The names of the policies that are enabled for the EC2 instance.</p>
   */
  PolicyNames?: string[];
}

export namespace AwsElbLoadBalancerBackendServerDescription {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: AwsElbLoadBalancerBackendServerDescription): any => ({
    ...obj,
  });
}

/**
 * <p>Contains information about the health checks that are conducted on the load
 *          balancer.</p>
 */
export interface AwsElbLoadBalancerHealthCheck {
  /**
   * <p>The number of consecutive health check successes required before the instance is moved
   *          to the Healthy state.</p>
   */
  HealthyThreshold?: number;

  /**
   * <p>The approximate interval, in seconds, between health checks of an individual
   *          instance.</p>
   */
  Interval?: number;

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
   */
  Target?: string;

  /**
   * <p>The amount of time, in seconds, during which no response means a failed health
   *          check.</p>
   */
  Timeout?: number;

  /**
   * <p>The number of consecutive health check failures that must occur before the instance is
   *          moved to the Unhealthy state.</p>
   */
  UnhealthyThreshold?: number;
}

export namespace AwsElbLoadBalancerHealthCheck {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: AwsElbLoadBalancerHealthCheck): any => ({
    ...obj,
  });
}

/**
 * <p>Provides information about an EC2 instance for a load balancer.</p>
 */
export interface AwsElbLoadBalancerInstance {
  /**
   * <p>The instance identifier.</p>
   */
  InstanceId?: string;
}

export namespace AwsElbLoadBalancerInstance {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: AwsElbLoadBalancerInstance): any => ({
    ...obj,
  });
}

/**
 * <p>Information about a load balancer listener.</p>
 */
export interface AwsElbLoadBalancerListener {
  /**
   * <p>The port on which the instance is listening.</p>
   */
  InstancePort?: number;

  /**
   * <p>The protocol to use to route traffic to instances.</p>
   *          <p>Valid values: <code>HTTP</code> | <code>HTTPS</code> | <code>TCP</code> |
   *             <code>SSL</code>
   *          </p>
   */
  InstanceProtocol?: string;

  /**
   * <p>The port on which the load balancer is listening.</p>
   *          <p>On EC2-VPC, you can specify any port from the range 1-65535.</p>
   *          <p>On EC2-Classic, you can specify any port from the following list: 25, 80, 443, 465, 587,
   *          1024-65535.</p>
   */
  LoadBalancerPort?: number;

  /**
   * <p>The load balancer transport protocol to use for routing.</p>
   *          <p>Valid values: <code>HTTP</code> | <code>HTTPS</code> | <code>TCP</code> |
   *             <code>SSL</code>
   *          </p>
   */
  Protocol?: string;

  /**
   * <p>The ARN of the server certificate.</p>
   */
  SslCertificateId?: string;
}

export namespace AwsElbLoadBalancerListener {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: AwsElbLoadBalancerListener): any => ({
    ...obj,
  });
}

/**
 * <p>Lists the policies that are enabled for a load balancer listener.</p>
 */
export interface AwsElbLoadBalancerListenerDescription {
  /**
   * <p>Information about the listener.</p>
   */
  Listener?: AwsElbLoadBalancerListener;

  /**
   * <p>The policies enabled for the listener.</p>
   */
  PolicyNames?: string[];
}

export namespace AwsElbLoadBalancerListenerDescription {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: AwsElbLoadBalancerListenerDescription): any => ({
    ...obj,
  });
}

/**
 * <p>Contains information about the policies for a load balancer.</p>
 */
export interface AwsElbLoadBalancerPolicies {
  /**
   * <p>The stickiness policies that are created using
   *             <code>CreateAppCookieStickinessPolicy</code>.</p>
   */
  AppCookieStickinessPolicies?: AwsElbAppCookieStickinessPolicy[];

  /**
   * <p>The stickiness policies that are created using
   *             <code>CreateLBCookieStickinessPolicy</code>.</p>
   */
  LbCookieStickinessPolicies?: AwsElbLbCookieStickinessPolicy[];

  /**
   * <p>The policies other than the stickiness policies.</p>
   */
  OtherPolicies?: string[];
}

export namespace AwsElbLoadBalancerPolicies {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: AwsElbLoadBalancerPolicies): any => ({
    ...obj,
  });
}

/**
 * <p>Contains information about the security group for the load balancer.</p>
 */
export interface AwsElbLoadBalancerSourceSecurityGroup {
  /**
   * <p>The name of the security group.</p>
   */
  GroupName?: string;

  /**
   * <p>The owner of the security group.</p>
   */
  OwnerAlias?: string;
}

export namespace AwsElbLoadBalancerSourceSecurityGroup {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: AwsElbLoadBalancerSourceSecurityGroup): any => ({
    ...obj,
  });
}

/**
 * <p>Contains details about a Classic Load Balancer.</p>
 */
export interface AwsElbLoadBalancerDetails {
  /**
   * <p>The list of Availability Zones for the load balancer.</p>
   */
  AvailabilityZones?: string[];

  /**
   * <p>Information about the configuration of the EC2 instances.</p>
   */
  BackendServerDescriptions?: AwsElbLoadBalancerBackendServerDescription[];

  /**
   * <p>The name of the Amazon Route 53 hosted zone for the load balancer.</p>
   */
  CanonicalHostedZoneName?: string;

  /**
   * <p>The ID of the Amazon Route 53 hosted zone for the load balancer.</p>
   */
  CanonicalHostedZoneNameID?: string;

  /**
   * <p>Indicates when the load balancer was created.</p>
   *          <p>Uses the <code>date-time</code> format specified in <a href="https://tools.ietf.org/html/rfc3339#section-5.6">RFC 3339 section 5.6, Internet
   *             Date/Time Format</a>. The value cannot contain spaces. For example,
   *             <code>2020-03-22T13:22:13.933Z</code>.</p>
   */
  CreatedTime?: string;

  /**
   * <p>The DNS name of the load balancer.</p>
   */
  DnsName?: string;

  /**
   * <p>Information about the health checks that are conducted on the load balancer.</p>
   */
  HealthCheck?: AwsElbLoadBalancerHealthCheck;

  /**
   * <p>List of EC2 instances for the load balancer.</p>
   */
  Instances?: AwsElbLoadBalancerInstance[];

  /**
   * <p>The policies that are enabled for the load balancer listeners.</p>
   */
  ListenerDescriptions?: AwsElbLoadBalancerListenerDescription[];

  /**
   * <p>The attributes for a load balancer.</p>
   */
  LoadBalancerAttributes?: AwsElbLoadBalancerAttributes;

  /**
   * <p>The name of the load balancer.</p>
   */
  LoadBalancerName?: string;

  /**
   * <p>The policies for a load balancer.</p>
   */
  Policies?: AwsElbLoadBalancerPolicies;

  /**
   * <p>The type of load balancer. Only provided if the load balancer is in a VPC.</p>
   *          <p>If <code>Scheme</code> is <code>internet-facing</code>, the load balancer has a public
   *          DNS name that resolves to a public IP address.</p>
   *          <p>If <code>Scheme</code> is <code>internal</code>, the load balancer has a public DNS name
   *          that resolves to a private IP address.</p>
   */
  Scheme?: string;

  /**
   * <p>The security groups for the load balancer. Only provided if the load balancer is in a
   *          VPC.</p>
   */
  SecurityGroups?: string[];

  /**
   * <p>Information about the security group for the load balancer. This is the security group
   *          that is used for inbound rules.</p>
   */
  SourceSecurityGroup?: AwsElbLoadBalancerSourceSecurityGroup;

  /**
   * <p>The list of subnet identifiers for the load balancer.</p>
   */
  Subnets?: string[];

  /**
   * <p>The identifier of the VPC for the load balancer.</p>
   */
  VpcId?: string;
}

export namespace AwsElbLoadBalancerDetails {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: AwsElbLoadBalancerDetails): any => ({
    ...obj,
  });
}

/**
 * <p>A load balancer attribute.</p>
 */
export interface AwsElbv2LoadBalancerAttribute {
  /**
   * <p>The name of the load balancer attribute.</p>
   */
  Key?: string;

  /**
   * <p>The value of the load balancer attribute.</p>
   */
  Value?: string;
}

export namespace AwsElbv2LoadBalancerAttribute {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: AwsElbv2LoadBalancerAttribute): any => ({
    ...obj,
  });
}

/**
 * <p>Information about the state of the load balancer.</p>
 */
export interface LoadBalancerState {
  /**
   * <p>The state code. The initial state of the load balancer is provisioning.</p>
   *          <p>After the load balancer is fully set up and ready to route traffic, its state is
   *          active.</p>
   *          <p>If the load balancer could not be set up, its state is failed. </p>
   */
  Code?: string;

  /**
   * <p>A description of the state.</p>
   */
  Reason?: string;
}

export namespace LoadBalancerState {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: LoadBalancerState): any => ({
    ...obj,
  });
}

/**
 * <p>Information about a load balancer.</p>
 */
export interface AwsElbv2LoadBalancerDetails {
  /**
   * <p>The Availability Zones for the load balancer.</p>
   */
  AvailabilityZones?: AvailabilityZone[];

  /**
   * <p>The ID of the Amazon Route 53 hosted zone associated with the load balancer.</p>
   */
  CanonicalHostedZoneId?: string;

  /**
   * <p>Indicates when the load balancer was created.</p>
   *          <p>Uses the <code>date-time</code> format specified in <a href="https://tools.ietf.org/html/rfc3339#section-5.6">RFC 3339 section 5.6, Internet
   *             Date/Time Format</a>. The value cannot contain spaces. For example,
   *             <code>2020-03-22T13:22:13.933Z</code>.</p>
   */
  CreatedTime?: string;

  /**
   * <p>The public DNS name of the load balancer.</p>
   */
  DNSName?: string;

  /**
   * <p>The type of IP addresses used by the subnets for your load balancer. The possible values
   *          are <code>ipv4</code> (for IPv4 addresses) and <code>dualstack</code> (for IPv4 and IPv6
   *          addresses).</p>
   */
  IpAddressType?: string;

  /**
   * <p>The nodes of an Internet-facing load balancer have public IP addresses.</p>
   */
  Scheme?: string;

  /**
   * <p>The IDs of the security groups for the load balancer.</p>
   */
  SecurityGroups?: string[];

  /**
   * <p>The state of the load balancer.</p>
   */
  State?: LoadBalancerState;

  /**
   * <p>The type of load balancer.</p>
   */
  Type?: string;

  /**
   * <p>The ID of the VPC for the load balancer.</p>
   */
  VpcId?: string;

  /**
   * <p>Attributes of the load balancer.</p>
   */
  LoadBalancerAttributes?: AwsElbv2LoadBalancerAttribute[];
}

export namespace AwsElbv2LoadBalancerDetails {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: AwsElbv2LoadBalancerDetails): any => ({
    ...obj,
  });
}

/**
 * <p>Attributes of the session that the key was used for.</p>
 */
export interface AwsIamAccessKeySessionContextAttributes {
  /**
   * <p>Indicates whether the session used multi-factor authentication (MFA).</p>
   */
  MfaAuthenticated?: boolean;

  /**
   * <p>Indicates when the session was created.</p>
   *          <p>Uses the <code>date-time</code> format specified in <a href="https://tools.ietf.org/html/rfc3339#section-5.6">RFC 3339 section 5.6, Internet
   *             Date/Time Format</a>. The value cannot contain spaces. For example,
   *             <code>2020-03-22T13:22:13.933Z</code>.</p>
   */
  CreationDate?: string;
}

export namespace AwsIamAccessKeySessionContextAttributes {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: AwsIamAccessKeySessionContextAttributes): any => ({
    ...obj,
  });
}

/**
 * <p>Information about the entity that created the session.</p>
 */
export interface AwsIamAccessKeySessionContextSessionIssuer {
  /**
   * <p>The type of principal (user, role, or group) that created the session.</p>
   */
  Type?: string;

  /**
   * <p>The principal ID of the principal (user, role, or group) that created the
   *          session.</p>
   */
  PrincipalId?: string;

  /**
   * <p>The ARN of the session.</p>
   */
  Arn?: string;

  /**
   * <p>The identifier of the Amazon Web Services account that created the session.</p>
   */
  AccountId?: string;

  /**
   * <p>The name of the principal that created the session.</p>
   */
  UserName?: string;
}

export namespace AwsIamAccessKeySessionContextSessionIssuer {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: AwsIamAccessKeySessionContextSessionIssuer): any => ({
    ...obj,
  });
}

/**
 * <p>Provides information about the session that the key was used for.</p>
 */
export interface AwsIamAccessKeySessionContext {
  /**
   * <p>Attributes of the session that the key was used for.</p>
   */
  Attributes?: AwsIamAccessKeySessionContextAttributes;

  /**
   * <p>Information about the entity that created the session.</p>
   */
  SessionIssuer?: AwsIamAccessKeySessionContextSessionIssuer;
}

export namespace AwsIamAccessKeySessionContext {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: AwsIamAccessKeySessionContext): any => ({
    ...obj,
  });
}

export enum AwsIamAccessKeyStatus {
  ACTIVE = "Active",
  INACTIVE = "Inactive",
}

/**
 * <p>IAM access key details related to a finding.</p>
 */
export interface AwsIamAccessKeyDetails {
  /**
   * @deprecated
   *
   * <p>The user associated with the IAM access key related to a finding.</p>
   *          <p>The <code>UserName</code> parameter has been replaced with the
   *             <code>PrincipalName</code> parameter because access keys can also be assigned to
   *          principals that are not IAM users.</p>
   */
  UserName?: string;

  /**
   * <p>The status of the IAM access key related to a finding.</p>
   */
  Status?: AwsIamAccessKeyStatus | string;

  /**
   * <p>Indicates when the IAM access key was created.</p>
   *          <p>Uses the <code>date-time</code> format specified in <a href="https://tools.ietf.org/html/rfc3339#section-5.6">RFC 3339 section 5.6, Internet
   *             Date/Time Format</a>. The value cannot contain spaces. For example,
   *             <code>2020-03-22T13:22:13.933Z</code>.</p>
   */
  CreatedAt?: string;

  /**
   * <p>The ID of the principal associated with an access key.</p>
   */
  PrincipalId?: string;

  /**
   * <p>The type of principal associated with an access key.</p>
   */
  PrincipalType?: string;

  /**
   * <p>The name of the principal.</p>
   */
  PrincipalName?: string;

  /**
   * <p>The Amazon Web Services account ID of the account for the key.</p>
   */
  AccountId?: string;

  /**
   * <p>The identifier of the access key.</p>
   */
  AccessKeyId?: string;

  /**
   * <p>Information about the session that the key was used for.</p>
   */
  SessionContext?: AwsIamAccessKeySessionContext;
}

export namespace AwsIamAccessKeyDetails {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: AwsIamAccessKeyDetails): any => ({
    ...obj,
  });
}

/**
 * <p>A managed policy that is attached to an IAM principal.</p>
 */
export interface AwsIamAttachedManagedPolicy {
  /**
   * <p>The name of the policy.</p>
   */
  PolicyName?: string;

  /**
   * <p>The ARN of the policy.</p>
   */
  PolicyArn?: string;
}

export namespace AwsIamAttachedManagedPolicy {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: AwsIamAttachedManagedPolicy): any => ({
    ...obj,
  });
}

/**
 * <p>A managed policy that is attached to the IAM group.</p>
 */
export interface AwsIamGroupPolicy {
  /**
   * <p>The name of the policy.</p>
   */
  PolicyName?: string;
}

export namespace AwsIamGroupPolicy {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: AwsIamGroupPolicy): any => ({
    ...obj,
  });
}

/**
 * <p>Contains details about an IAM group.</p>
 */
export interface AwsIamGroupDetails {
  /**
   * <p>A list of the managed policies that are attached to the IAM group.</p>
   */
  AttachedManagedPolicies?: AwsIamAttachedManagedPolicy[];

  /**
   * <p>Indicates when the IAM group was created.</p>
   *          <p>Uses the <code>date-time</code> format specified in <a href="https://tools.ietf.org/html/rfc3339#section-5.6">RFC 3339 section 5.6, Internet
   *             Date/Time Format</a>. The value cannot contain spaces. For example,
   *             <code>2020-03-22T13:22:13.933Z</code>.</p>
   */
  CreateDate?: string;

  /**
   * <p>The identifier of the IAM group.</p>
   */
  GroupId?: string;

  /**
   * <p>The name of the IAM group.</p>
   */
  GroupName?: string;

  /**
   * <p>The list of inline policies that are embedded in the group.</p>
   */
  GroupPolicyList?: AwsIamGroupPolicy[];

  /**
   * <p>The path to the group.</p>
   */
  Path?: string;
}

export namespace AwsIamGroupDetails {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: AwsIamGroupDetails): any => ({
    ...obj,
  });
}

/**
 * <p>Information about a role associated with an instance profile.</p>
 */
export interface AwsIamInstanceProfileRole {
  /**
   * <p>The ARN of the role.</p>
   */
  Arn?: string;

  /**
   * <p>The policy that grants an entity permission to assume the role.</p>
   */
  AssumeRolePolicyDocument?: string;

  /**
   * <p>Indicates when the role was created.</p>
   *          <p>Uses the <code>date-time</code> format specified in <a href="https://tools.ietf.org/html/rfc3339#section-5.6">RFC 3339 section 5.6, Internet
   *             Date/Time Format</a>. The value cannot contain spaces. For example,
   *             <code>2020-03-22T13:22:13.933Z</code>.</p>
   */
  CreateDate?: string;

  /**
   * <p>The path to the role.</p>
   */
  Path?: string;

  /**
   * <p>The identifier of the role.</p>
   */
  RoleId?: string;

  /**
   * <p>The name of the role.</p>
   */
  RoleName?: string;
}

export namespace AwsIamInstanceProfileRole {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: AwsIamInstanceProfileRole): any => ({
    ...obj,
  });
}

/**
 * <p>Information about an instance profile.</p>
 */
export interface AwsIamInstanceProfile {
  /**
   * <p>The ARN of the instance profile.</p>
   */
  Arn?: string;

  /**
   * <p>Indicates when the instance profile was created.</p>
   *          <p>Uses the <code>date-time</code> format specified in <a href="https://tools.ietf.org/html/rfc3339#section-5.6">RFC 3339 section 5.6, Internet
   *             Date/Time Format</a>. The value cannot contain spaces. For example,
   *             <code>2020-03-22T13:22:13.933Z</code>.</p>
   */
  CreateDate?: string;

  /**
   * <p>The identifier of the instance profile.</p>
   */
  InstanceProfileId?: string;

  /**
   * <p>The name of the instance profile.</p>
   */
  InstanceProfileName?: string;

  /**
   * <p>The path to the instance profile.</p>
   */
  Path?: string;

  /**
   * <p>The roles associated with the instance profile.</p>
   */
  Roles?: AwsIamInstanceProfileRole[];
}

export namespace AwsIamInstanceProfile {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: AwsIamInstanceProfile): any => ({
    ...obj,
  });
}

/**
 * <p>Information about the policy used to set the permissions boundary for an IAM
 *          principal.</p>
 */
export interface AwsIamPermissionsBoundary {
  /**
   * <p>The ARN of the policy used to set the permissions boundary.</p>
   */
  PermissionsBoundaryArn?: string;

  /**
   * <p>The usage type for the permissions boundary.</p>
   */
  PermissionsBoundaryType?: string;
}

export namespace AwsIamPermissionsBoundary {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: AwsIamPermissionsBoundary): any => ({
    ...obj,
  });
}

/**
 * <p>A version of an IAM policy.</p>
 */
export interface AwsIamPolicyVersion {
  /**
   * <p>The identifier of the policy version.</p>
   */
  VersionId?: string;

  /**
   * <p>Whether the version is the default version.</p>
   */
  IsDefaultVersion?: boolean;

  /**
   * <p>Indicates when the version was created.</p>
   *          <p>Uses the <code>date-time</code> format specified in <a href="https://tools.ietf.org/html/rfc3339#section-5.6">RFC 3339 section 5.6, Internet
   *             Date/Time Format</a>. The value cannot contain spaces. For example,
   *             <code>2020-03-22T13:22:13.933Z</code>.</p>
   */
  CreateDate?: string;
}

export namespace AwsIamPolicyVersion {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: AwsIamPolicyVersion): any => ({
    ...obj,
  });
}

/**
 * <p>Represents an IAM permissions policy.</p>
 */
export interface AwsIamPolicyDetails {
  /**
   * <p>The number of users, groups, and roles that the policy is attached to.</p>
   */
  AttachmentCount?: number;

  /**
   * <p>When the policy was created.</p>
   *          <p>Uses the <code>date-time</code> format specified in <a href="https://tools.ietf.org/html/rfc3339#section-5.6">RFC 3339 section 5.6, Internet
   *             Date/Time Format</a>. The value cannot contain spaces. For example,
   *             <code>2020-03-22T13:22:13.933Z</code>.</p>
   */
  CreateDate?: string;

  /**
   * <p>The identifier of the default version of the policy.</p>
   */
  DefaultVersionId?: string;

  /**
   * <p>A description of the policy.</p>
   */
  Description?: string;

  /**
   * <p>Whether the policy can be attached to a user, group, or role.</p>
   */
  IsAttachable?: boolean;

  /**
   * <p>The path to the policy.</p>
   */
  Path?: string;

  /**
   * <p>The number of users and roles that use the policy to set the permissions
   *          boundary.</p>
   */
  PermissionsBoundaryUsageCount?: number;

  /**
   * <p>The unique identifier of the policy.</p>
   */
  PolicyId?: string;

  /**
   * <p>The name of the policy.</p>
   */
  PolicyName?: string;

  /**
   * <p>List of versions of the policy.</p>
   */
  PolicyVersionList?: AwsIamPolicyVersion[];

  /**
   * <p>When the policy was most recently updated.</p>
   *          <p>Uses the <code>date-time</code> format specified in <a href="https://tools.ietf.org/html/rfc3339#section-5.6">RFC 3339 section 5.6, Internet
   *             Date/Time Format</a>. The value cannot contain spaces. For example,
   *             <code>2020-03-22T13:22:13.933Z</code>.</p>
   */
  UpdateDate?: string;
}

export namespace AwsIamPolicyDetails {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: AwsIamPolicyDetails): any => ({
    ...obj,
  });
}

/**
 * <p>An inline policy that is embedded in the role.</p>
 */
export interface AwsIamRolePolicy {
  /**
   * <p>The name of the policy.</p>
   */
  PolicyName?: string;
}

export namespace AwsIamRolePolicy {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: AwsIamRolePolicy): any => ({
    ...obj,
  });
}

/**
 * <p>Contains information about an IAM role, including all of the role's policies.</p>
 */
export interface AwsIamRoleDetails {
  /**
   * <p>The trust policy that grants permission to assume the role.</p>
   */
  AssumeRolePolicyDocument?: string;

  /**
   * <p>The list of the managed policies that are attached to the role.</p>
   */
  AttachedManagedPolicies?: AwsIamAttachedManagedPolicy[];

  /**
   * <p>Indicates when the role was created.</p>
   *          <p>Uses the <code>date-time</code> format specified in <a href="https://tools.ietf.org/html/rfc3339#section-5.6">RFC 3339 section 5.6, Internet
   *             Date/Time Format</a>. The value cannot contain spaces. For example,
   *             <code>2020-03-22T13:22:13.933Z</code>.</p>
   */
  CreateDate?: string;

  /**
   * <p>The list of instance profiles that contain this role.</p>
   */
  InstanceProfileList?: AwsIamInstanceProfile[];

  /**
   * <p>Information about the policy used to set the permissions boundary for an IAM
   *          principal.</p>
   */
  PermissionsBoundary?: AwsIamPermissionsBoundary;

  /**
   * <p>The stable and unique string identifying the role.</p>
   */
  RoleId?: string;

  /**
   * <p>The friendly name that identifies the role.</p>
   */
  RoleName?: string;

  /**
   * <p>The list of inline policies that are embedded in the role.</p>
   */
  RolePolicyList?: AwsIamRolePolicy[];

  /**
   * <p>The maximum session duration (in seconds) that you want to set for the specified role.</p>
   */
  MaxSessionDuration?: number;

  /**
   * <p>The path to the role.</p>
   */
  Path?: string;
}

export namespace AwsIamRoleDetails {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: AwsIamRoleDetails): any => ({
    ...obj,
  });
}

/**
 * <p>Information about an inline policy that is embedded in the user.</p>
 */
export interface AwsIamUserPolicy {
  /**
   * <p>The name of the policy.</p>
   */
  PolicyName?: string;
}

export namespace AwsIamUserPolicy {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: AwsIamUserPolicy): any => ({
    ...obj,
  });
}

/**
 * <p>Information about an IAM user.</p>
 */
export interface AwsIamUserDetails {
  /**
   * <p>A list of the managed policies that are attached to the user.</p>
   */
  AttachedManagedPolicies?: AwsIamAttachedManagedPolicy[];

  /**
   * <p>Indicates when the user was created.</p>
   *          <p>Uses the <code>date-time</code> format specified in <a href="https://tools.ietf.org/html/rfc3339#section-5.6">RFC 3339 section 5.6, Internet
   *             Date/Time Format</a>. The value cannot contain spaces. For example,
   *             <code>2020-03-22T13:22:13.933Z</code>.</p>
   */
  CreateDate?: string;

  /**
   * <p>A list of IAM groups that the user belongs to.</p>
   */
  GroupList?: string[];

  /**
   * <p>The path to the user.</p>
   */
  Path?: string;

  /**
   * <p>The permissions boundary for the user.</p>
   */
  PermissionsBoundary?: AwsIamPermissionsBoundary;

  /**
   * <p>The unique identifier for the user.</p>
   */
  UserId?: string;

  /**
   * <p>The name of the user.</p>
   */
  UserName?: string;

  /**
   * <p>The list of inline policies that are embedded in the user.</p>
   */
  UserPolicyList?: AwsIamUserPolicy[];
}

export namespace AwsIamUserDetails {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: AwsIamUserDetails): any => ({
    ...obj,
  });
}

/**
 * <p>Provides information about stream encryption.
 *       </p>
 */
export interface AwsKinesisStreamStreamEncryptionDetails {
  /**
   * <p>The encryption type to use.
   *       </p>
   */
  EncryptionType?: string;

  /**
   * <p>The globally unique identifier for the customer-managed KMS key to use for encryption. </p>
   */
  KeyId?: string;
}

export namespace AwsKinesisStreamStreamEncryptionDetails {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: AwsKinesisStreamStreamEncryptionDetails): any => ({
    ...obj,
  });
}

/**
 * <p>Provides information about an Amazon Kinesis data stream.
 *       </p>
 */
export interface AwsKinesisStreamDetails {
  /**
   * <p>The name of the Kinesis stream. If you don't specify a name, CloudFront generates a unique
   * physical ID and uses that ID for the stream name.
   *       </p>
   */
  Name?: string;

  /**
   * <p>The Amazon Resource Name (ARN) of the Kinesis data stream.
   *       </p>
   */
  Arn?: string;

  /**
   * <p>When specified, enables or updates server-side encryption using an KMS key for a specified stream.
   * Removing this property from your stack template and updating your stack disables encryption.
   *       </p>
   */
  StreamEncryption?: AwsKinesisStreamStreamEncryptionDetails;

  /**
   * <p>The number of shards that the stream uses.
   *       </p>
   */
  ShardCount?: number;

  /**
   * <p>The number of hours for the data records that are stored in shards to remain accessible.
   *       </p>
   */
  RetentionPeriodHours?: number;
}

export namespace AwsKinesisStreamDetails {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: AwsKinesisStreamDetails): any => ({
    ...obj,
  });
}

/**
 * <p>Contains metadata about an KMS key.</p>
 */
export interface AwsKmsKeyDetails {
  /**
   * <p>The twelve-digit account ID of the Amazon Web Services account that owns the KMS key.</p>
   */
  AWSAccountId?: string;

  /**
   * <p>Indicates when the KMS key was created.</p>
   *          <p>Uses the <code>date-time</code> format specified in <a href="https://tools.ietf.org/html/rfc3339#section-5.6">RFC 3339 section 5.6, Internet
   *             Date/Time Format</a>. The value cannot contain spaces. For example,
   *             <code>2020-03-22T13:22:13.933Z</code>.</p>
   */
  CreationDate?: number;

  /**
   * <p>The globally unique identifier for the KMS key.</p>
   */
  KeyId?: string;

  /**
   * <p>The manager of the KMS key. KMS keys in your Amazon Web Services account are either customer managed or Amazon Web Services managed.</p>
   */
  KeyManager?: string;

  /**
   * <p>The state of the KMS key.</p>
   */
  KeyState?: string;

  /**
   * <p>The source of the KMS key material.</p>
   *          <p>When this value is <code>AWS_KMS</code>, KMS created the key material.</p>
   *          <p>When this value is <code>EXTERNAL</code>, the key material was imported from your
   *          existing key management infrastructure or the KMS key lacks key material.</p>
   *          <p>When this value is <code>AWS_CLOUDHSM</code>, the key material was created in the CloudHSM cluster associated with a custom key store.</p>
   */
  Origin?: string;

  /**
   * <p>A description of the KMS key.</p>
   */
  Description?: string;

  /**
   * <p>Whether the key has key rotation enabled.</p>
   */
  KeyRotationStatus?: boolean;
}

export namespace AwsKmsKeyDetails {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: AwsKmsKeyDetails): any => ({
    ...obj,
  });
}

/**
 * <p>The code for the Lambda function. You can specify either an object in Amazon S3, or upload a deployment package directly.</p>
 */
export interface AwsLambdaFunctionCode {
  /**
   * <p>An Amazon S3 bucket in the same Amazon Web Services Region as your function. The bucket can be in a different Amazon Web Services account.</p>
   */
  S3Bucket?: string;

  /**
   * <p>The Amazon S3 key of the deployment package.</p>
   */
  S3Key?: string;

  /**
   * <p>For versioned objects, the version of the deployment package object to use.</p>
   */
  S3ObjectVersion?: string;

  /**
   * <p>The base64-encoded contents of the deployment package. Amazon Web Services SDK and Amazon Web Services CLI clients handle the encoding for you.</p>
   */
  ZipFile?: string;
}

export namespace AwsLambdaFunctionCode {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: AwsLambdaFunctionCode): any => ({
    ...obj,
  });
}

/**
 * <p>The dead-letter queue for failed asynchronous invocations.</p>
 */
export interface AwsLambdaFunctionDeadLetterConfig {
  /**
   * <p>The ARN of an SQS queue or SNS topic.</p>
   */
  TargetArn?: string;
}

export namespace AwsLambdaFunctionDeadLetterConfig {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: AwsLambdaFunctionDeadLetterConfig): any => ({
    ...obj,
  });
}

/**
 * <p>Error messages for environment variables that could not be applied.</p>
 */
export interface AwsLambdaFunctionEnvironmentError {
  /**
   * <p>The error code.</p>
   */
  ErrorCode?: string;

  /**
   * <p>The error message.</p>
   */
  Message?: string;
}

export namespace AwsLambdaFunctionEnvironmentError {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: AwsLambdaFunctionEnvironmentError): any => ({
    ...obj,
  });
}

/**
 * <p>A function's environment variable settings.</p>
 */
export interface AwsLambdaFunctionEnvironment {
  /**
   * <p>Environment variable key-value pairs.</p>
   */
  Variables?: Record<string, string>;

  /**
   * <p>An <code>AwsLambdaFunctionEnvironmentError</code> object.</p>
   */
  Error?: AwsLambdaFunctionEnvironmentError;
}

export namespace AwsLambdaFunctionEnvironment {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: AwsLambdaFunctionEnvironment): any => ({
    ...obj,
  });
}

/**
 * <p>An Lambda layer.</p>
 */
export interface AwsLambdaFunctionLayer {
  /**
   * <p>The ARN of the function layer.</p>
   */
  Arn?: string;

  /**
   * <p>The size of the layer archive in bytes.</p>
   */
  CodeSize?: number;
}

export namespace AwsLambdaFunctionLayer {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: AwsLambdaFunctionLayer): any => ({
    ...obj,
  });
}

/**
 * <p>The function's X-Ray tracing configuration.</p>
 */
export interface AwsLambdaFunctionTracingConfig {
  /**
   * <p>The tracing mode.</p>
   */
  Mode?: string;
}

export namespace AwsLambdaFunctionTracingConfig {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: AwsLambdaFunctionTracingConfig): any => ({
    ...obj,
  });
}

/**
 * <p>The VPC security groups and subnets that are attached to a Lambda function.</p>
 */
export interface AwsLambdaFunctionVpcConfig {
  /**
   * <p>A list of VPC security groups IDs.</p>
   */
  SecurityGroupIds?: string[];

  /**
   * <p>A list of VPC subnet IDs.</p>
   */
  SubnetIds?: string[];

  /**
   * <p>The ID of the VPC.</p>
   */
  VpcId?: string;
}

export namespace AwsLambdaFunctionVpcConfig {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: AwsLambdaFunctionVpcConfig): any => ({
    ...obj,
  });
}

/**
 * <p>Details about a function's configuration.</p>
 */
export interface AwsLambdaFunctionDetails {
  /**
   * <p>An <code>AwsLambdaFunctionCode</code> object.</p>
   */
  Code?: AwsLambdaFunctionCode;

  /**
   * <p>The SHA256 hash of the function's deployment package.</p>
   */
  CodeSha256?: string;

  /**
   * <p>The function's dead letter queue.</p>
   */
  DeadLetterConfig?: AwsLambdaFunctionDeadLetterConfig;

  /**
   * <p>The function's environment variables.</p>
   */
  Environment?: AwsLambdaFunctionEnvironment;

  /**
   * <p>The name of the function.</p>
   */
  FunctionName?: string;

  /**
   * <p>The function that Lambda calls to begin executing your function.</p>
   */
  Handler?: string;

  /**
   * <p>The KMS key that is used to encrypt the function's environment variables. This key is only returned if you've configured a customer managed customer managed key.</p>
   */
  KmsKeyArn?: string;

  /**
   * <p>Indicates when the function was last updated.</p>
   *          <p>Uses the <code>date-time</code> format specified in <a href="https://tools.ietf.org/html/rfc3339#section-5.6">RFC 3339 section 5.6, Internet
   *             Date/Time Format</a>. The value cannot contain spaces. For example,
   *             <code>2020-03-22T13:22:13.933Z</code>.</p>
   */
  LastModified?: string;

  /**
   * <p>The function's layers.</p>
   */
  Layers?: AwsLambdaFunctionLayer[];

  /**
   * <p>For Lambda@Edge functions, the ARN of the master function.</p>
   */
  MasterArn?: string;

  /**
   * <p>The memory that is allocated to the function.</p>
   */
  MemorySize?: number;

  /**
   * <p>The latest updated revision of the function or alias.</p>
   */
  RevisionId?: string;

  /**
   * <p>The function's execution role.</p>
   */
  Role?: string;

  /**
   * <p>The runtime environment for the Lambda function.</p>
   */
  Runtime?: string;

  /**
   * <p>The amount of time that Lambda allows a function to run before stopping it.</p>
   */
  Timeout?: number;

  /**
   * <p>The function's X-Ray tracing configuration.</p>
   */
  TracingConfig?: AwsLambdaFunctionTracingConfig;

  /**
   * <p>The function's networking configuration.</p>
   */
  VpcConfig?: AwsLambdaFunctionVpcConfig;

  /**
   * <p>The version of the Lambda function.</p>
   */
  Version?: string;
}

export namespace AwsLambdaFunctionDetails {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: AwsLambdaFunctionDetails): any => ({
    ...obj,
  });
}

/**
 * <p>Details about a Lambda layer version.</p>
 */
export interface AwsLambdaLayerVersionDetails {
  /**
   * <p>The version number.</p>
   */
  Version?: number;

  /**
   * <p>The layer's compatible runtimes. Maximum number of five items.</p>
   *          <p>Valid values: <code>nodejs10.x</code> | <code>nodejs12.x</code> | <code>java8</code> |
   *             <code>java11</code> | <code>python2.7</code> | <code>python3.6</code> |
   *             <code>python3.7</code> | <code>python3.8</code> | <code>dotnetcore1.0</code> |
   *             <code>dotnetcore2.1</code> | <code>go1.x</code> | <code>ruby2.5</code> |
   *             <code>provided</code>
   *          </p>
   */
  CompatibleRuntimes?: string[];

  /**
   * <p>Indicates when the version was created.</p>
   *          <p>Uses the <code>date-time</code> format specified in <a href="https://tools.ietf.org/html/rfc3339#section-5.6">RFC 3339 section 5.6, Internet
   *             Date/Time Format</a>. The value cannot contain spaces. For example,
   *             <code>2020-03-22T13:22:13.933Z</code>.</p>
   */
  CreatedDate?: string;
}

export namespace AwsLambdaLayerVersionDetails {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: AwsLambdaLayerVersionDetails): any => ({
    ...obj,
  });
}

/**
 * <p>A public subnet that Network Firewall uses for the firewall.</p>
 */
export interface AwsNetworkFirewallFirewallSubnetMappingsDetails {
  /**
   * <p>The identifier of the subnet</p>
   */
  SubnetId?: string;
}

export namespace AwsNetworkFirewallFirewallSubnetMappingsDetails {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: AwsNetworkFirewallFirewallSubnetMappingsDetails): any => ({
    ...obj,
  });
}

/**
 * <p>Details about an Network Firewall firewall.</p>
 */
export interface AwsNetworkFirewallFirewallDetails {
  /**
   * <p>Whether the firewall is protected from deletion. If set to <code>true</code>, then the firewall cannot be deleted.</p>
   */
  DeleteProtection?: boolean;

  /**
   * <p>A description of the firewall.</p>
   */
  Description?: string;

  /**
   * <p>The ARN of the firewall.</p>
   */
  FirewallArn?: string;

  /**
   * <p>The identifier of the firewall.</p>
   */
  FirewallId?: string;

  /**
   * <p>A descriptive name of the firewall.</p>
   */
  FirewallName?: string;

  /**
   * <p>The ARN of the firewall policy.</p>
   */
  FirewallPolicyArn?: string;

  /**
   * <p>Whether the firewall is protected from a change to the firewall policy. If set to <code>true</code>, you cannot associate a different policy with the firewall.</p>
   */
  FirewallPolicyChangeProtection?: boolean;

  /**
   * <p>Whether the firewall is protected from a change to the subnet associations. If set to <code>true</code>, you cannot map different subnets to the firewall.</p>
   */
  SubnetChangeProtection?: boolean;

  /**
   * <p>The public subnets that Network Firewall uses for the firewall. Each subnet must belong to a different Availability Zone.</p>
   */
  SubnetMappings?: AwsNetworkFirewallFirewallSubnetMappingsDetails[];

  /**
   * <p>The identifier of the VPC where the firewall is used.</p>
   */
  VpcId?: string;
}

export namespace AwsNetworkFirewallFirewallDetails {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: AwsNetworkFirewallFirewallDetails): any => ({
    ...obj,
  });
}

/**
 * <p>A stateful rule group that is used by the firewall policy.</p>
 */
export interface FirewallPolicyStatefulRuleGroupReferencesDetails {
  /**
   * <p>The ARN of the stateful rule group.</p>
   */
  ResourceArn?: string;
}

export namespace FirewallPolicyStatefulRuleGroupReferencesDetails {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: FirewallPolicyStatefulRuleGroupReferencesDetails): any => ({
    ...obj,
  });
}

/**
 * <p>Defines a CloudWatch dimension value to publish.</p>
 */
export interface StatelessCustomPublishMetricActionDimension {
  /**
   * <p>The value to use for the custom metric dimension.</p>
   */
  Value?: string;
}

export namespace StatelessCustomPublishMetricActionDimension {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: StatelessCustomPublishMetricActionDimension): any => ({
    ...obj,
  });
}

/**
 * <p>Information about metrics to publish to CloudWatch.</p>
 */
export interface StatelessCustomPublishMetricAction {
  /**
   * <p>Defines CloudWatch dimension values to publish.</p>
   */
  Dimensions?: StatelessCustomPublishMetricActionDimension[];
}

export namespace StatelessCustomPublishMetricAction {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: StatelessCustomPublishMetricAction): any => ({
    ...obj,
  });
}

/**
 * <p>The definition of a custom action that can be used for stateless packet handling.</p>
 */
export interface StatelessCustomActionDefinition {
  /**
   * <p>Information about metrics to publish to CloudWatch.</p>
   */
  PublishMetricAction?: StatelessCustomPublishMetricAction;
}

export namespace StatelessCustomActionDefinition {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: StatelessCustomActionDefinition): any => ({
    ...obj,
  });
}

/**
 * <p>A custom action that can be used for stateless packet handling.</p>
 */
export interface FirewallPolicyStatelessCustomActionsDetails {
  /**
   * <p>The definition of the custom action.</p>
   */
  ActionDefinition?: StatelessCustomActionDefinition;

  /**
   * <p>The name of the custom action.</p>
   */
  ActionName?: string;
}

export namespace FirewallPolicyStatelessCustomActionsDetails {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: FirewallPolicyStatelessCustomActionsDetails): any => ({
    ...obj,
  });
}

/**
 * <p>A stateless rule group that is used by the firewall policy.</p>
 */
export interface FirewallPolicyStatelessRuleGroupReferencesDetails {
  /**
   * <p>The order in which to run the stateless rule group.</p>
   */
  Priority?: number;

  /**
   * <p>The ARN of the stateless rule group.</p>
   */
  ResourceArn?: string;
}

export namespace FirewallPolicyStatelessRuleGroupReferencesDetails {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: FirewallPolicyStatelessRuleGroupReferencesDetails): any => ({
    ...obj,
  });
}

/**
 * <p>Defines the behavior of the firewall.</p>
 */
export interface FirewallPolicyDetails {
  /**
   * <p>The stateful rule groups that are used in the firewall policy.</p>
   */
  StatefulRuleGroupReferences?: FirewallPolicyStatefulRuleGroupReferencesDetails[];

  /**
   * <p>The custom action definitions that are available to use in the firewall policy's <code>StatelessDefaultActions</code> setting.</p>
   */
  StatelessCustomActions?: FirewallPolicyStatelessCustomActionsDetails[];

  /**
   * <p>The actions to take on a packet if it doesn't match any of the stateless rules in the policy.</p>
   *          <p>You must specify a standard action (<code>aws:pass</code>, <code>aws:drop</code>, <code>aws:forward_to_sfe</code>), and can optionally include a custom action from <code>StatelessCustomActions</code>.
   *       </p>
   */
  StatelessDefaultActions?: string[];

  /**
   * <p>The actions to take on a fragmented UDP packet if it doesn't match any of the stateless rules in the policy.</p>
   *          <p>You must specify a standard action (<code>aws:pass</code>, <code>aws:drop</code>, <code>aws:forward_to_sfe</code>), and can optionally include a custom action from <code>StatelessCustomActions</code>.
   *       </p>
   */
  StatelessFragmentDefaultActions?: string[];

  /**
   * <p>The stateless rule groups that are used in the firewall policy.</p>
   */
  StatelessRuleGroupReferences?: FirewallPolicyStatelessRuleGroupReferencesDetails[];
}

export namespace FirewallPolicyDetails {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: FirewallPolicyDetails): any => ({
    ...obj,
  });
}

/**
 * <p>Details about a firewall policy. A firewall policy defines the behavior of a network firewall.</p>
 */
export interface AwsNetworkFirewallFirewallPolicyDetails {
  /**
   * <p>The firewall policy configuration.</p>
   */
  FirewallPolicy?: FirewallPolicyDetails;

  /**
   * <p>The ARN of the firewall policy.</p>
   */
  FirewallPolicyArn?: string;

  /**
   * <p>The identifier of the firewall policy.</p>
   */
  FirewallPolicyId?: string;

  /**
   * <p>The name of the firewall policy.</p>
   */
  FirewallPolicyName?: string;

  /**
   * <p>A description of the firewall policy.</p>
   */
  Description?: string;
}

export namespace AwsNetworkFirewallFirewallPolicyDetails {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: AwsNetworkFirewallFirewallPolicyDetails): any => ({
    ...obj,
  });
}

/**
 * <p>Stateful inspection criteria for a domain list rule group.</p>
 */
export interface RuleGroupSourceListDetails {
  /**
   * <p>Indicates whether to allow or deny access to the domains listed in <code>Targets</code>.</p>
   */
  GeneratedRulesType?: string;

  /**
   * <p>The protocols that you want to inspect. Specify <code>LS_SNI</code> for HTTPS. Specify <code>HTTP_HOST</code> for HTTP. You can specify either or both.</p>
   */
  TargetTypes?: string[];

  /**
   * <p>The domains that you want to inspect for in your traffic flows. You can provide full domain names, or use the '.' prefix as a wildcard. For example, <code>.example.com</code> matches all domains that end with <code>example.com</code>.</p>
   */
  Targets?: string[];
}

export namespace RuleGroupSourceListDetails {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: RuleGroupSourceListDetails): any => ({
    ...obj,
  });
}

/**
 * <p>The inspection criteria for a stateful rule.</p>
 */
export interface RuleGroupSourceStatefulRulesHeaderDetails {
  /**
   * <p>The destination IP address or address range to inspect for, in CIDR notation. To match with any address, specify <code>ANY</code>.</p>
   */
  Destination?: string;

  /**
   * <p>The destination port to inspect for. You can specify an individual port, such as <code>1994</code>. You also can specify a port range, such as <code>1990:1994</code>. To match with any port, specify <code>ANY</code>.</p>
   */
  DestinationPort?: string;

  /**
   * <p>The direction of traffic flow to inspect. If set to <code>ANY</code>, the inspection matches bidirectional traffic, both from the source to the destination and from the destination to the source. If set to <code>FORWARD</code>, the inspection only matches traffic going from the source to the destination.</p>
   */
  Direction?: string;

  /**
   * <p>The protocol to inspect for. To inspector for all protocols, use <code>IP</code>.</p>
   */
  Protocol?: string;

  /**
   * <p>The source IP address or address range to inspect for, in CIDR notation. To match with any address, specify <code>ANY</code>.</p>
   */
  Source?: string;

  /**
   * <p>The source port to inspect for. You can specify an individual port, such as <code>1994</code>. You also can specify a port range, such as <code>1990:1994</code>. To match with any port, specify <code>ANY</code>.</p>
   */
  SourcePort?: string;
}

export namespace RuleGroupSourceStatefulRulesHeaderDetails {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: RuleGroupSourceStatefulRulesHeaderDetails): any => ({
    ...obj,
  });
}

/**
 * <p>A rule option for a stateful rule.</p>
 */
export interface RuleGroupSourceStatefulRulesOptionsDetails {
  /**
   * <p>A keyword to look for.</p>
   */
  Keyword?: string;

  /**
   * <p>A list of settings.</p>
   */
  Settings?: string[];
}

export namespace RuleGroupSourceStatefulRulesOptionsDetails {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: RuleGroupSourceStatefulRulesOptionsDetails): any => ({
    ...obj,
  });
}

/**
 * <p>A Suricata rule specification.</p>
 */
export interface RuleGroupSourceStatefulRulesDetails {
  /**
   * <p>Defines what Network Firewall should do with the packets in a traffic flow when the flow matches the stateful rule criteria.</p>
   */
  Action?: string;

  /**
   * <p>The stateful inspection criteria for the rule.</p>
   */
  Header?: RuleGroupSourceStatefulRulesHeaderDetails;

  /**
   * <p>Additional options for the rule.</p>
   */
  RuleOptions?: RuleGroupSourceStatefulRulesOptionsDetails[];
}

export namespace RuleGroupSourceStatefulRulesDetails {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: RuleGroupSourceStatefulRulesDetails): any => ({
    ...obj,
  });
}

/**
 * <p>A custom action definition. A custom action is an optional, non-standard action to use for stateless packet handling.</p>
 */
export interface RuleGroupSourceCustomActionsDetails {
  /**
   * <p>The definition of a custom action.</p>
   */
  ActionDefinition?: StatelessCustomActionDefinition;

  /**
   * <p>A descriptive name of the custom action.</p>
   */
  ActionName?: string;
}

export namespace RuleGroupSourceCustomActionsDetails {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: RuleGroupSourceCustomActionsDetails): any => ({
    ...obj,
  });
}

/**
 * <p>A port range to specify the destination ports to inspect for.</p>
 */
export interface RuleGroupSourceStatelessRuleMatchAttributesDestinationPorts {
  /**
   * <p>The starting port value for the port range.</p>
   */
  FromPort?: number;

  /**
   * <p>The ending port value for the port range.</p>
   */
  ToPort?: number;
}

export namespace RuleGroupSourceStatelessRuleMatchAttributesDestinationPorts {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: RuleGroupSourceStatelessRuleMatchAttributesDestinationPorts): any => ({
    ...obj,
  });
}

/**
 * <p>A destination IP address or range.</p>
 */
export interface RuleGroupSourceStatelessRuleMatchAttributesDestinations {
  /**
   * <p>An IP address or a block of IP addresses.</p>
   */
  AddressDefinition?: string;
}

export namespace RuleGroupSourceStatelessRuleMatchAttributesDestinations {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: RuleGroupSourceStatelessRuleMatchAttributesDestinations): any => ({
    ...obj,
  });
}

/**
 * <p>A port range to specify the source ports to inspect for.</p>
 */
export interface RuleGroupSourceStatelessRuleMatchAttributesSourcePorts {
  /**
   * <p>The starting port value for the port range.</p>
   */
  FromPort?: number;

  /**
   * <p>The ending port value for the port range.</p>
   */
  ToPort?: number;
}

export namespace RuleGroupSourceStatelessRuleMatchAttributesSourcePorts {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: RuleGroupSourceStatelessRuleMatchAttributesSourcePorts): any => ({
    ...obj,
  });
}

/**
 * <p>A source IP addresses and address range to inspect for.</p>
 */
export interface RuleGroupSourceStatelessRuleMatchAttributesSources {
  /**
   * <p>An IP address or a block of IP addresses.</p>
   */
  AddressDefinition?: string;
}

export namespace RuleGroupSourceStatelessRuleMatchAttributesSources {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: RuleGroupSourceStatelessRuleMatchAttributesSources): any => ({
    ...obj,
  });
}

/**
 * <p>A set of TCP flags and masks to inspect for.</p>
 */
export interface RuleGroupSourceStatelessRuleMatchAttributesTcpFlags {
  /**
   * <p>Defines the flags from the <code>Masks</code> setting that must be set in order for the packet to match. Flags that are listed must be set. Flags that are not listed must not be set.</p>
   */
  Flags?: string[];

  /**
   * <p>The set of flags to consider in the inspection. If not specified, then all flags are inspected.</p>
   */
  Masks?: string[];
}

export namespace RuleGroupSourceStatelessRuleMatchAttributesTcpFlags {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: RuleGroupSourceStatelessRuleMatchAttributesTcpFlags): any => ({
    ...obj,
  });
}

/**
 * <p>Criteria for the stateless rule.</p>
 */
export interface RuleGroupSourceStatelessRuleMatchAttributes {
  /**
   * <p>A list of port ranges to specify the destination ports to inspect for.</p>
   */
  DestinationPorts?: RuleGroupSourceStatelessRuleMatchAttributesDestinationPorts[];

  /**
   * <p>The destination IP addresses and address ranges to inspect for, in CIDR notation.</p>
   */
  Destinations?: RuleGroupSourceStatelessRuleMatchAttributesDestinations[];

  /**
   * <p>The protocols to inspect for.</p>
   */
  Protocols?: number[];

  /**
   * <p>A list of port ranges to specify the source ports to inspect for.</p>
   */
  SourcePorts?: RuleGroupSourceStatelessRuleMatchAttributesSourcePorts[];

  /**
   * <p>The source IP addresses and address ranges to inspect for, in CIDR notation.</p>
   */
  Sources?: RuleGroupSourceStatelessRuleMatchAttributesSources[];

  /**
   * <p>The TCP flags and masks to inspect for.</p>
   */
  TcpFlags?: RuleGroupSourceStatelessRuleMatchAttributesTcpFlags[];
}

export namespace RuleGroupSourceStatelessRuleMatchAttributes {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: RuleGroupSourceStatelessRuleMatchAttributes): any => ({
    ...obj,
  });
}

/**
 * <p>The definition of the stateless rule.</p>
 */
export interface RuleGroupSourceStatelessRuleDefinition {
  /**
   * <p>The actions to take on a packet that matches one of the stateless rule definition's match attributes. You must specify a standard action (<code>aws:pass</code>, <code>aws:drop</code>, or <code>aws:forward_to_sfe</code>). You can then add custom actions.</p>
   */
  Actions?: string[];

  /**
   * <p>The criteria for Network Firewall to use to inspect an individual packet in a stateless rule inspection.</p>
   */
  MatchAttributes?: RuleGroupSourceStatelessRuleMatchAttributes;
}

export namespace RuleGroupSourceStatelessRuleDefinition {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: RuleGroupSourceStatelessRuleDefinition): any => ({
    ...obj,
  });
}

/**
 * <p>A stateless rule in the rule group.</p>
 */
export interface RuleGroupSourceStatelessRulesDetails {
  /**
   * <p>Indicates the order in which to run this rule relative to all of the rules in the stateless rule group.</p>
   */
  Priority?: number;

  /**
   * <p>Provides the definition of the stateless rule.</p>
   */
  RuleDefinition?: RuleGroupSourceStatelessRuleDefinition;
}

export namespace RuleGroupSourceStatelessRulesDetails {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: RuleGroupSourceStatelessRulesDetails): any => ({
    ...obj,
  });
}

/**
 * <p>Stateless rules and custom actions for a stateless rule group.</p>
 */
export interface RuleGroupSourceStatelessRulesAndCustomActionsDetails {
  /**
   * <p>Custom actions for the rule group.</p>
   */
  CustomActions?: RuleGroupSourceCustomActionsDetails[];

  /**
   * <p>Stateless rules for the rule group.</p>
   */
  StatelessRules?: RuleGroupSourceStatelessRulesDetails[];
}

export namespace RuleGroupSourceStatelessRulesAndCustomActionsDetails {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: RuleGroupSourceStatelessRulesAndCustomActionsDetails): any => ({
    ...obj,
  });
}

/**
 * <p>The rules and actions for the rule group.</p>
 */
export interface RuleGroupSource {
  /**
   * <p>Stateful inspection criteria for a domain list rule group. A domain list rule group determines access by specific protocols to specific domains.</p>
   */
  RulesSourceList?: RuleGroupSourceListDetails;

  /**
   * <p>Stateful inspection criteria, provided in Suricata compatible intrusion prevention system (IPS) rules.</p>
   */
  RulesString?: string;

  /**
   * <p>Suricata rule specifications.</p>
   */
  StatefulRules?: RuleGroupSourceStatefulRulesDetails[];

  /**
   * <p>The stateless rules and custom actions used by a stateless rule group.</p>
   */
  StatelessRulesAndCustomActions?: RuleGroupSourceStatelessRulesAndCustomActionsDetails;
}

export namespace RuleGroupSource {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: RuleGroupSource): any => ({
    ...obj,
  });
}

/**
 * <p>A list of IP addresses and address ranges, in CIDR notation.</p>
 */
export interface RuleGroupVariablesIpSetsDetails {
  /**
   * <p>The list of IP addresses and ranges.</p>
   */
  Definition?: string[];
}

export namespace RuleGroupVariablesIpSetsDetails {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: RuleGroupVariablesIpSetsDetails): any => ({
    ...obj,
  });
}

/**
 * <p>A list of port ranges.</p>
 */
export interface RuleGroupVariablesPortSetsDetails {
  /**
   * <p>The list of port ranges.</p>
   */
  Definition?: string[];
}

export namespace RuleGroupVariablesPortSetsDetails {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: RuleGroupVariablesPortSetsDetails): any => ({
    ...obj,
  });
}

/**
 * <p>Additional settings to use in the specified rules.</p>
 */
export interface RuleGroupVariables {
  /**
   * <p>A list of IP addresses and address ranges, in CIDR notation.</p>
   */
  IpSets?: RuleGroupVariablesIpSetsDetails;

  /**
   * <p>A list of port ranges.</p>
   */
  PortSets?: RuleGroupVariablesPortSetsDetails;
}

export namespace RuleGroupVariables {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: RuleGroupVariables): any => ({
    ...obj,
  });
}

/**
 * <p>Details about the rule group.</p>
 */
export interface RuleGroupDetails {
  /**
   * <p>Additional settings to use in the specified rules.</p>
   */
  RuleVariables?: RuleGroupVariables;

  /**
   * <p>The rules and actions for the rule group.</p>
   *          <p>For stateful rule groups, can contain <code>RulesString</code>, <code>RulesSourceList</code>, or <code>StatefulRules</code>.</p>
   *          <p>For stateless rule groups, contains <code>StatelessRulesAndCustomActions</code>.</p>
   */
  RulesSource?: RuleGroupSource;
}

export namespace RuleGroupDetails {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: RuleGroupDetails): any => ({
    ...obj,
  });
}

/**
 * <p>Details about an Network Firewall rule group. Rule groups are used to inspect and control network traffic. Stateless rule groups apply to individual packets. Stateful rule groups apply to packets in the context of their traffic flow.</p>
 *          <p>Rule groups are referenced in firewall policies.
 *       </p>
 */
export interface AwsNetworkFirewallRuleGroupDetails {
  /**
   * <p>The maximum number of operating resources that this rule group can use.</p>
   */
  Capacity?: number;

  /**
   * <p>A description of the rule group.</p>
   */
  Description?: string;

  /**
   * <p>Details about the rule group.</p>
   */
  RuleGroup?: RuleGroupDetails;

  /**
   * <p>The ARN of the rule group.</p>
   */
  RuleGroupArn?: string;

  /**
   * <p>The identifier of the rule group.</p>
   */
  RuleGroupId?: string;

  /**
   * <p>The descriptive name of the rule group.</p>
   */
  RuleGroupName?: string;

  /**
   * <p>The type of rule group. A rule group can be stateful or stateless.</p>
   */
  Type?: string;
}

export namespace AwsNetworkFirewallRuleGroupDetails {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: AwsNetworkFirewallRuleGroupDetails): any => ({
    ...obj,
  });
}

/**
 * <p>Specifies information about the master user of the domain.
 *       </p>
 */
export interface AwsOpenSearchServiceDomainMasterUserOptionsDetails {
  /**
   * <p>The Amazon Resource Name (ARN) for the master user.
   *       </p>
   */
  MasterUserArn?: string;

  /**
   * <p>The username for the master user.
   *       </p>
   */
  MasterUserName?: string;

  /**
   * <p>The password for the master user.
   *       </p>
   */
  MasterUserPassword?: string;
}

export namespace AwsOpenSearchServiceDomainMasterUserOptionsDetails {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: AwsOpenSearchServiceDomainMasterUserOptionsDetails): any => ({
    ...obj,
  });
}

/**
 * <p>Provides information about domain access control options.
 *       </p>
 */
export interface AwsOpenSearchServiceDomainAdvancedSecurityOptionsDetails {
  /**
   * <p>Enables fine-grained access control.
   *       </p>
   */
  Enabled?: boolean;

  /**
   * <p>Enables the internal user database.
   *       </p>
   */
  InternalUserDatabaseEnabled?: boolean;

  /**
   * <p>Specifies information about the master user of the domain.
   *       </p>
   */
  MasterUserOptions?: AwsOpenSearchServiceDomainMasterUserOptionsDetails;
}

export namespace AwsOpenSearchServiceDomainAdvancedSecurityOptionsDetails {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: AwsOpenSearchServiceDomainAdvancedSecurityOptionsDetails): any => ({
    ...obj,
  });
}

/**
 * <p>Configuration options for zone awareness.</p>
 */
export interface AwsOpenSearchServiceDomainClusterConfigZoneAwarenessConfigDetails {
  /**
   * <p>The number of Availability Zones that the domain uses. Valid values are 2 and 3. The default is 2.</p>
   */
  AvailabilityZoneCount?: number;
}

export namespace AwsOpenSearchServiceDomainClusterConfigZoneAwarenessConfigDetails {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: AwsOpenSearchServiceDomainClusterConfigZoneAwarenessConfigDetails): any => ({
    ...obj,
  });
}

/**
 * <p>Details about the configuration of an OpenSearch cluster.</p>
 */
export interface AwsOpenSearchServiceDomainClusterConfigDetails {
  /**
   * <p>The number of data nodes to use in the OpenSearch domain.</p>
   */
  InstanceCount?: number;

  /**
   * <p>Whether UltraWarm is enabled.</p>
   */
  WarmEnabled?: boolean;

  /**
   * <p>The number of UltraWarm instances.</p>
   */
  WarmCount?: number;

  /**
   * <p>Whether to use a dedicated master node for the OpenSearch domain. A dedicated master node performs cluster management tasks, but does not hold data or respond to data upload requests.</p>
   */
  DedicatedMasterEnabled?: boolean;

  /**
   * <p>Configuration options for zone awareness. Provided if <code>ZoneAwarenessEnabled</code> is <code>true</code>.</p>
   */
  ZoneAwarenessConfig?: AwsOpenSearchServiceDomainClusterConfigZoneAwarenessConfigDetails;

  /**
   * <p>The number of instances to use for the master node. If this attribute is specified, then <code>DedicatedMasterEnabled</code> must be <code>true</code>.</p>
   */
  DedicatedMasterCount?: number;

  /**
   * <p>The instance type for your data nodes. </p>
   */
  InstanceType?: string;

  /**
   * <p>The type of UltraWarm instance.</p>
   */
  WarmType?: string;

  /**
   * <p>Whether to enable zone awareness for the OpenSearch domain. When zone awareness is enabled, OpenSearch Service allocates the cluster's nodes and replica index shards across Availability Zones (AZs) in the same Region. This prevents data loss and minimizes downtime if a node or data center fails.</p>
   */
  ZoneAwarenessEnabled?: boolean;

  /**
   * <p>The hardware configuration of the computer that hosts the dedicated master node.</p>
   *          <p>If this attribute is specified, then <code>DedicatedMasterEnabled</code> must be <code>true</code>.
   *       </p>
   */
  DedicatedMasterType?: string;
}

export namespace AwsOpenSearchServiceDomainClusterConfigDetails {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: AwsOpenSearchServiceDomainClusterConfigDetails): any => ({
    ...obj,
  });
}

/**
 * <p>Information about additional options for the domain endpoint.</p>
 */
export interface AwsOpenSearchServiceDomainDomainEndpointOptionsDetails {
  /**
   * <p>The ARN for the security certificate. The certificate is managed in ACM.</p>
   */
  CustomEndpointCertificateArn?: string;

  /**
   * <p>Whether to enable a custom endpoint for the domain.</p>
   */
  CustomEndpointEnabled?: boolean;

  /**
   * <p>Whether to require that all traffic to the domain arrive over HTTPS.</p>
   */
  EnforceHTTPS?: boolean;

  /**
   * <p>The fully qualified URL for the custom endpoint.</p>
   */
  CustomEndpoint?: string;

  /**
   * <p>The TLS security policy to apply to the HTTPS endpoint of the OpenSearch domain.</p>
   */
  TLSSecurityPolicy?: string;
}

export namespace AwsOpenSearchServiceDomainDomainEndpointOptionsDetails {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: AwsOpenSearchServiceDomainDomainEndpointOptionsDetails): any => ({
    ...obj,
  });
}

/**
 * <p>Details about the configuration for encryption at rest for the OpenSearch domain.</p>
 */
export interface AwsOpenSearchServiceDomainEncryptionAtRestOptionsDetails {
  /**
   * <p>Whether encryption at rest is enabled.</p>
   */
  Enabled?: boolean;

  /**
   * <p>The KMS key ID.</p>
   */
  KmsKeyId?: string;
}

export namespace AwsOpenSearchServiceDomainEncryptionAtRestOptionsDetails {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: AwsOpenSearchServiceDomainEncryptionAtRestOptionsDetails): any => ({
    ...obj,
  });
}

/**
 * <p>Configuration details for a log publishing option.</p>
 */
export interface AwsOpenSearchServiceDomainLogPublishingOption {
  /**
   * <p>The ARN of the CloudWatch Logs group to publish the logs to.</p>
   */
  CloudWatchLogsLogGroupArn?: string;

  /**
   * <p>Whether the log publishing is enabled.</p>
   */
  Enabled?: boolean;
}

export namespace AwsOpenSearchServiceDomainLogPublishingOption {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: AwsOpenSearchServiceDomainLogPublishingOption): any => ({
    ...obj,
  });
}

/**
 * <p>Configures the CloudWatch Logs to publish for the OpenSearch domain.</p>
 */
export interface AwsOpenSearchServiceDomainLogPublishingOptionsDetails {
  /**
   * <p>Configures the OpenSearch index logs publishing.</p>
   */
  IndexSlowLogs?: AwsOpenSearchServiceDomainLogPublishingOption;

  /**
   * <p>Configures the OpenSearch search slow log publishing.</p>
   */
  SearchSlowLogs?: AwsOpenSearchServiceDomainLogPublishingOption;

  /**
   * <p>Configures the OpenSearch audit logs publishing.</p>
   */
  AuditLogs?: AwsOpenSearchServiceDomainLogPublishingOption;
}

export namespace AwsOpenSearchServiceDomainLogPublishingOptionsDetails {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: AwsOpenSearchServiceDomainLogPublishingOptionsDetails): any => ({
    ...obj,
  });
}

/**
 * <p>Provides details about the configuration for node-to-node encryption.</p>
 */
export interface AwsOpenSearchServiceDomainNodeToNodeEncryptionOptionsDetails {
  /**
   * <p>Whether node-to-node encryption is enabled.</p>
   */
  Enabled?: boolean;
}

export namespace AwsOpenSearchServiceDomainNodeToNodeEncryptionOptionsDetails {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: AwsOpenSearchServiceDomainNodeToNodeEncryptionOptionsDetails): any => ({
    ...obj,
  });
}

/**
 * <p>Provides information about the state of the domain relative to the latest service software.</p>
 */
export interface AwsOpenSearchServiceDomainServiceSoftwareOptionsDetails {
  /**
   * <p>The epoch time when the deployment window closes for required updates. After this time, OpenSearch Service schedules the software upgrade automatically.</p>
   */
  AutomatedUpdateDate?: string;

  /**
   * <p>Whether a request to update the domain can be canceled.</p>
   */
  Cancellable?: boolean;

  /**
   * <p>The version of the service software that is currently installed on the domain.</p>
   */
  CurrentVersion?: string;

  /**
   * <p>A more detailed description of the service software status.</p>
   */
  Description?: string;

  /**
   * <p>The most recent version of the service software.</p>
   */
  NewVersion?: string;

  /**
   * <p>Whether a service software update is available for the domain.</p>
   */
  UpdateAvailable?: boolean;

  /**
   * <p>The status of the service software update.</p>
   */
  UpdateStatus?: string;

  /**
   * <p>Whether the service software update is optional.</p>
   */
  OptionalDeployment?: boolean;
}

export namespace AwsOpenSearchServiceDomainServiceSoftwareOptionsDetails {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: AwsOpenSearchServiceDomainServiceSoftwareOptionsDetails): any => ({
    ...obj,
  });
}

/**
 * <p>Contains information that OpenSearch Service derives based on the <code>VPCOptions</code> for the domain.</p>
 */
export interface AwsOpenSearchServiceDomainVpcOptionsDetails {
  /**
   * <p>The list of security group IDs that are associated with the VPC endpoints for the domain.</p>
   */
  SecurityGroupIds?: string[];

  /**
   * <p>A list of subnet IDs that are associated with the VPC endpoints for the domain.</p>
   */
  SubnetIds?: string[];
}

export namespace AwsOpenSearchServiceDomainVpcOptionsDetails {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: AwsOpenSearchServiceDomainVpcOptionsDetails): any => ({
    ...obj,
  });
}

/**
 * <p>Information about an Amazon OpenSearch Service domain.</p>
 */
export interface AwsOpenSearchServiceDomainDetails {
  /**
   * <p>The ARN of the OpenSearch Service domain.</p>
   */
  Arn?: string;

  /**
   * <p>IAM policy document that specifies the access policies for the OpenSearch Service domain.</p>
   */
  AccessPolicies?: string;

  /**
   * <p>The name of the endpoint.</p>
   */
  DomainName?: string;

  /**
   * <p>The identifier of the domain.</p>
   */
  Id?: string;

  /**
   * <p>The domain endpoint.</p>
   */
  DomainEndpoint?: string;

  /**
   * <p>The version of the domain engine.</p>
   */
  EngineVersion?: string;

  /**
   * <p>Details about the configuration for encryption at rest.</p>
   */
  EncryptionAtRestOptions?: AwsOpenSearchServiceDomainEncryptionAtRestOptionsDetails;

  /**
   * <p>Details about the configuration for node-to-node encryption.</p>
   */
  NodeToNodeEncryptionOptions?: AwsOpenSearchServiceDomainNodeToNodeEncryptionOptionsDetails;

  /**
   * <p>Information about the status of a domain relative to the latest service software.</p>
   */
  ServiceSoftwareOptions?: AwsOpenSearchServiceDomainServiceSoftwareOptionsDetails;

  /**
   * <p>Details about the configuration of an OpenSearch cluster.</p>
   */
  ClusterConfig?: AwsOpenSearchServiceDomainClusterConfigDetails;

  /**
   * <p>Additional options for the domain endpoint.</p>
   */
  DomainEndpointOptions?: AwsOpenSearchServiceDomainDomainEndpointOptionsDetails;

  /**
   * <p>Information that OpenSearch Service derives based on <code>VPCOptions</code> for the domain.</p>
   */
  VpcOptions?: AwsOpenSearchServiceDomainVpcOptionsDetails;

  /**
   * <p>Configures the CloudWatch Logs to publish for the OpenSearch domain.</p>
   */
  LogPublishingOptions?: AwsOpenSearchServiceDomainLogPublishingOptionsDetails;

  /**
   * <p>The domain endpoints. Used if the OpenSearch domain resides in a VPC.</p>
   *          <p>This is a map of key-value pairs. The key is always <code>vpc</code>. The value is the endpoint.</p>
   */
  DomainEndpoints?: Record<string, string>;

  /**
   * <p>Specifies options for fine-grained access control.
   *       </p>
   */
  AdvancedSecurityOptions?: AwsOpenSearchServiceDomainAdvancedSecurityOptionsDetails;
}

export namespace AwsOpenSearchServiceDomainDetails {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: AwsOpenSearchServiceDomainDetails): any => ({
    ...obj,
  });
}

/**
 * <p>An IAM role that is associated with the Amazon RDS DB cluster.</p>
 */
export interface AwsRdsDbClusterAssociatedRole {
  /**
   * <p>The ARN of the IAM role.</p>
   */
  RoleArn?: string;

  /**
   * <p>The status of the association between the IAM role and the DB cluster.</p>
   */
  Status?: string;
}

export namespace AwsRdsDbClusterAssociatedRole {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: AwsRdsDbClusterAssociatedRole): any => ({
    ...obj,
  });
}

/**
 * <p>Information about an instance in the DB cluster.</p>
 */
export interface AwsRdsDbClusterMember {
  /**
   * <p>Whether the cluster member is the primary instance for the DB cluster.</p>
   */
  IsClusterWriter?: boolean;

  /**
   * <p>Specifies the order in which an Aurora replica is promoted to the primary instance when
   *          the existing primary instance fails.</p>
   */
  PromotionTier?: number;

  /**
   * <p>The instance identifier for this member of the DB cluster.</p>
   */
  DbInstanceIdentifier?: string;

  /**
   * <p>The status of the DB cluster parameter group for this member of the DB cluster.</p>
   */
  DbClusterParameterGroupStatus?: string;
}

export namespace AwsRdsDbClusterMember {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: AwsRdsDbClusterMember): any => ({
    ...obj,
  });
}

/**
 * <p>Information about an option group membership for a DB cluster.</p>
 */
export interface AwsRdsDbClusterOptionGroupMembership {
  /**
   * <p>The name of the DB cluster option group.</p>
   */
  DbClusterOptionGroupName?: string;

  /**
   * <p>The status of the DB cluster option group.</p>
   */
  Status?: string;
}

export namespace AwsRdsDbClusterOptionGroupMembership {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: AwsRdsDbClusterOptionGroupMembership): any => ({
    ...obj,
  });
}

/**
 * <p>Information about an Active Directory domain membership record associated with the DB
 *          instance.</p>
 */
export interface AwsRdsDbDomainMembership {
  /**
   * <p>The identifier of the Active Directory domain.</p>
   */
  Domain?: string;

  /**
   * <p>The status of the Active Directory Domain membership for the DB instance.</p>
   */
  Status?: string;

  /**
   * <p>The fully qualified domain name of the Active Directory domain.</p>
   */
  Fqdn?: string;

  /**
   * <p>The name of the IAM role to use when making API calls to the Directory Service.</p>
   */
  IamRoleName?: string;
}

export namespace AwsRdsDbDomainMembership {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: AwsRdsDbDomainMembership): any => ({
    ...obj,
  });
}

/**
 * <p>A VPC security groups that the DB instance belongs to.</p>
 */
export interface AwsRdsDbInstanceVpcSecurityGroup {
  /**
   * <p>The name of the VPC security group.</p>
   */
  VpcSecurityGroupId?: string;

  /**
   * <p>The status of the VPC security group.</p>
   */
  Status?: string;
}

export namespace AwsRdsDbInstanceVpcSecurityGroup {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: AwsRdsDbInstanceVpcSecurityGroup): any => ({
    ...obj,
  });
}

/**
 * <p>Information about an Amazon RDS DB cluster.</p>
 */
export interface AwsRdsDbClusterDetails {
  /**
   * <p>For all database engines except Aurora, specifies the allocated storage size in
   *          gibibytes (GiB).</p>
   */
  AllocatedStorage?: number;

  /**
   * <p>A list of Availability Zones (AZs) where instances in the DB cluster can be
   *          created.</p>
   */
  AvailabilityZones?: string[];

  /**
   * <p>The number of days for which automated backups are retained.</p>
   */
  BackupRetentionPeriod?: number;

  /**
   * <p>The name of the database.</p>
   */
  DatabaseName?: string;

  /**
   * <p>The current status of this DB cluster.</p>
   */
  Status?: string;

  /**
   * <p>The connection endpoint for the primary instance of the DB cluster.</p>
   */
  Endpoint?: string;

  /**
   * <p>The reader endpoint for the DB cluster.</p>
   */
  ReaderEndpoint?: string;

  /**
   * <p>A list of custom endpoints for the DB cluster.</p>
   */
  CustomEndpoints?: string[];

  /**
   * <p>Whether the DB cluster has instances in multiple Availability Zones.</p>
   */
  MultiAz?: boolean;

  /**
   * <p>The name of the database engine to use for this DB cluster.</p>
   */
  Engine?: string;

  /**
   * <p>The version number of the database engine to use.</p>
   */
  EngineVersion?: string;

  /**
   * <p>The port number on which the DB instances in the DB cluster accept connections.</p>
   */
  Port?: number;

  /**
   * <p>The name of the master user for the DB cluster.</p>
   */
  MasterUsername?: string;

  /**
   * <p>The range of time each day when automated backups are created, if automated backups are
   *          enabled.</p>
   *          <p>Uses the format <code>HH:MM-HH:MM</code>. For example, <code>04:52-05:22</code>.</p>
   */
  PreferredBackupWindow?: string;

  /**
   * <p>The weekly time range during which system maintenance can occur, in Universal
   *          Coordinated Time (UTC).</p>
   *          <p>Uses the format <code><day>:HH:MM-<day>:HH:MM</code>.</p>
   *          <p>For the day values, use
   *             <code>mon</code>|<code>tue</code>|<code>wed</code>|<code>thu</code>|<code>fri</code>|<code>sat</code>|<code>sun</code>.</p>
   *          <p>For example, <code>sun:09:32-sun:10:02</code>.</p>
   */
  PreferredMaintenanceWindow?: string;

  /**
   * <p>The identifiers of the read replicas that are associated with this DB cluster.</p>
   */
  ReadReplicaIdentifiers?: string[];

  /**
   * <p>A list of VPC security groups that the DB cluster belongs to.</p>
   */
  VpcSecurityGroups?: AwsRdsDbInstanceVpcSecurityGroup[];

  /**
   * <p>Specifies the identifier that Amazon Route 53 assigns when you create a hosted
   *          zone.</p>
   */
  HostedZoneId?: string;

  /**
   * <p>Whether the DB cluster is encrypted.</p>
   */
  StorageEncrypted?: boolean;

  /**
   * <p>The ARN of the KMS master key that is used to encrypt the database instances in the
   *          DB cluster.</p>
   */
  KmsKeyId?: string;

  /**
   * <p>The identifier of the DB cluster. The identifier must be unique within each Amazon Web Services Region
   *          and is immutable.</p>
   */
  DbClusterResourceId?: string;

  /**
   * <p>A list of the IAM roles that are associated with the DB cluster.</p>
   */
  AssociatedRoles?: AwsRdsDbClusterAssociatedRole[];

  /**
   * <p>Indicates when the DB cluster was created, in Universal Coordinated Time (UTC).</p>
   *          <p>Uses the <code>date-time</code> format specified in <a href="https://tools.ietf.org/html/rfc3339#section-5.6">RFC 3339 section 5.6, Internet
   *             Date/Time Format</a>. The value cannot contain spaces. For example,
   *             <code>2020-03-22T13:22:13.933Z</code>.</p>
   */
  ClusterCreateTime?: string;

  /**
   * <p>A list of log types that this DB cluster is configured to export to CloudWatch
   *          Logs.</p>
   */
  EnabledCloudWatchLogsExports?: string[];

  /**
   * <p>The database engine mode of the DB cluster.</p>
   */
  EngineMode?: string;

  /**
   * <p>Whether the DB cluster has deletion protection enabled.</p>
   */
  DeletionProtection?: boolean;

  /**
   * <p>Whether the HTTP endpoint for an Aurora Serverless DB cluster is enabled.</p>
   */
  HttpEndpointEnabled?: boolean;

  /**
   * <p>The status of the database activity stream.</p>
   */
  ActivityStreamStatus?: string;

  /**
   * <p>Whether tags are copied from the DB cluster to snapshots of the DB cluster.</p>
   */
  CopyTagsToSnapshot?: boolean;

  /**
   * <p>Whether the DB cluster is a clone of a DB cluster owned by a different Amazon Web Services
   *          account.</p>
   */
  CrossAccountClone?: boolean;

  /**
   * <p>The Active Directory domain membership records that are associated with the DB
   *          cluster.</p>
   */
  DomainMemberships?: AwsRdsDbDomainMembership[];

  /**
   * <p>The name of the DB cluster parameter group for the DB cluster.</p>
   */
  DbClusterParameterGroup?: string;

  /**
   * <p>The subnet group that is associated with the DB cluster, including the name,
   *          description, and subnets in the subnet group.</p>
   */
  DbSubnetGroup?: string;

  /**
   * <p>The list of option group memberships for this DB cluster.</p>
   */
  DbClusterOptionGroupMemberships?: AwsRdsDbClusterOptionGroupMembership[];

  /**
   * <p>The DB cluster identifier that the user assigned to the cluster. This identifier is the
   *          unique key that identifies a DB cluster.</p>
   */
  DbClusterIdentifier?: string;

  /**
   * <p>The list of instances that make up the DB cluster.</p>
   */
  DbClusterMembers?: AwsRdsDbClusterMember[];

  /**
   * <p>Whether the mapping of IAM accounts to database accounts is enabled.</p>
   */
  IamDatabaseAuthenticationEnabled?: boolean;
}

export namespace AwsRdsDbClusterDetails {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: AwsRdsDbClusterDetails): any => ({
    ...obj,
  });
}

/**
 * <p>Information about an Amazon RDS DB cluster snapshot.</p>
 */
export interface AwsRdsDbClusterSnapshotDetails {
  /**
   * <p>A list of Availability Zones where instances in the DB cluster can be created.</p>
   */
  AvailabilityZones?: string[];

  /**
   * <p>Indicates when the snapshot was taken.</p>
   *          <p>Uses the <code>date-time</code> format specified in <a href="https://tools.ietf.org/html/rfc3339#section-5.6">RFC 3339 section 5.6, Internet
   *             Date/Time Format</a>. The value cannot contain spaces. For example,
   *             <code>2020-03-22T13:22:13.933Z</code>.</p>
   */
  SnapshotCreateTime?: string;

  /**
   * <p>The name of the database engine that you want to use for this DB instance.</p>
   */
  Engine?: string;

  /**
   * <p>Specifies the allocated storage size in gibibytes (GiB).</p>
   */
  AllocatedStorage?: number;

  /**
   * <p>The status of this DB cluster snapshot.</p>
   */
  Status?: string;

  /**
   * <p>The port number on which the DB instances in the DB cluster accept connections.</p>
   */
  Port?: number;

  /**
   * <p>The VPC ID that is associated with the DB cluster snapshot.</p>
   */
  VpcId?: string;

  /**
   * <p>Indicates when the DB cluster was created, in Universal Coordinated Time (UTC).</p>
   *          <p>Uses the <code>date-time</code> format specified in <a href="https://tools.ietf.org/html/rfc3339#section-5.6">RFC 3339 section 5.6, Internet
   *             Date/Time Format</a>. The value cannot contain spaces. For example,
   *             <code>2020-03-22T13:22:13.933Z</code>.</p>
   */
  ClusterCreateTime?: string;

  /**
   * <p>The name of the master user for the DB cluster.</p>
   */
  MasterUsername?: string;

  /**
   * <p>The version of the database engine to use.</p>
   */
  EngineVersion?: string;

  /**
   * <p>The license model information for this DB cluster snapshot.</p>
   */
  LicenseModel?: string;

  /**
   * <p>The type of DB cluster snapshot.</p>
   */
  SnapshotType?: string;

  /**
   * <p>Specifies the percentage of the estimated data that has been transferred.</p>
   */
  PercentProgress?: number;

  /**
   * <p>Whether the DB cluster is encrypted.</p>
   */
  StorageEncrypted?: boolean;

  /**
   * <p>The ARN of the KMS master key that is used to encrypt the database instances in the
   *          DB cluster.</p>
   */
  KmsKeyId?: string;

  /**
   * <p>The DB cluster identifier.</p>
   */
  DbClusterIdentifier?: string;

  /**
   * <p>The identifier of the DB cluster snapshot.</p>
   */
  DbClusterSnapshotIdentifier?: string;

  /**
   * <p>Whether mapping of IAM accounts to database accounts is enabled.</p>
   */
  IamDatabaseAuthenticationEnabled?: boolean;
}

export namespace AwsRdsDbClusterSnapshotDetails {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: AwsRdsDbClusterSnapshotDetails): any => ({
    ...obj,
  });
}

/**
 * <p>An IAM role associated with the DB instance.</p>
 */
export interface AwsRdsDbInstanceAssociatedRole {
  /**
   * <p>The ARN of the IAM role that is associated with the DB
   *          instance.</p>
   */
  RoleArn?: string;

  /**
   * <p>The name of the feature associated with the IAM role.</p>
   */
  FeatureName?: string;

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
   */
  Status?: string;
}

export namespace AwsRdsDbInstanceAssociatedRole {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: AwsRdsDbInstanceAssociatedRole): any => ({
    ...obj,
  });
}

/**
 * <p>Provides information about a parameter group for a DB instance.</p>
 */
export interface AwsRdsDbParameterGroup {
  /**
   * <p>The name of the parameter group.</p>
   */
  DbParameterGroupName?: string;

  /**
   * <p>The status of parameter updates.</p>
   */
  ParameterApplyStatus?: string;
}

export namespace AwsRdsDbParameterGroup {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: AwsRdsDbParameterGroup): any => ({
    ...obj,
  });
}

/**
 * <p>An Availability Zone for a subnet in a subnet group.</p>
 */
export interface AwsRdsDbSubnetGroupSubnetAvailabilityZone {
  /**
   * <p>The name of the Availability Zone for a subnet in the subnet group.</p>
   */
  Name?: string;
}

export namespace AwsRdsDbSubnetGroupSubnetAvailabilityZone {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: AwsRdsDbSubnetGroupSubnetAvailabilityZone): any => ({
    ...obj,
  });
}

/**
 * <p>Information about a subnet in a subnet group.</p>
 */
export interface AwsRdsDbSubnetGroupSubnet {
  /**
   * <p>The identifier of a subnet in the subnet group.</p>
   */
  SubnetIdentifier?: string;

  /**
   * <p>Information about the Availability Zone for a subnet in the subnet group.</p>
   */
  SubnetAvailabilityZone?: AwsRdsDbSubnetGroupSubnetAvailabilityZone;

  /**
   * <p>The status of a subnet in the subnet group.</p>
   */
  SubnetStatus?: string;
}

export namespace AwsRdsDbSubnetGroupSubnet {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: AwsRdsDbSubnetGroupSubnet): any => ({
    ...obj,
  });
}

/**
 * <p>Information about the subnet group for the database instance.</p>
 */
export interface AwsRdsDbSubnetGroup {
  /**
   * <p>The name of the subnet group.</p>
   */
  DbSubnetGroupName?: string;

  /**
   * <p>The description of the subnet group.</p>
   */
  DbSubnetGroupDescription?: string;

  /**
   * <p>The VPC ID of the subnet group.</p>
   */
  VpcId?: string;

  /**
   * <p>The status of the subnet group.</p>
   */
  SubnetGroupStatus?: string;

  /**
   * <p>A list of subnets in the subnet group.</p>
   */
  Subnets?: AwsRdsDbSubnetGroupSubnet[];

  /**
   * <p>The ARN of the subnet group.</p>
   */
  DbSubnetGroupArn?: string;
}

export namespace AwsRdsDbSubnetGroup {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: AwsRdsDbSubnetGroup): any => ({
    ...obj,
  });
}

/**
 * <p>Specifies the connection endpoint.</p>
 */
export interface AwsRdsDbInstanceEndpoint {
  /**
   * <p>Specifies the DNS address of the DB instance.</p>
   */
  Address?: string;

  /**
   * <p>Specifies the port that the database engine is listening on.</p>
   */
  Port?: number;

  /**
   * <p>Specifies the ID that Amazon Route 53 assigns when you create a hosted zone.</p>
   */
  HostedZoneId?: string;
}

export namespace AwsRdsDbInstanceEndpoint {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: AwsRdsDbInstanceEndpoint): any => ({
    ...obj,
  });
}

/**
 * <p>An option group membership.</p>
 */
export interface AwsRdsDbOptionGroupMembership {
  /**
   * <p>The name of the option group.</p>
   */
  OptionGroupName?: string;

  /**
   * <p>The status of the option group membership.</p>
   */
  Status?: string;
}

export namespace AwsRdsDbOptionGroupMembership {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: AwsRdsDbOptionGroupMembership): any => ({
    ...obj,
  });
}

/**
 * <p>Identifies the log types to enable and disable.</p>
 */
export interface AwsRdsPendingCloudWatchLogsExports {
  /**
   * <p>A list of log types that are being enabled.</p>
   */
  LogTypesToEnable?: string[];

  /**
   * <p>A list of log types that are being disabled.</p>
   */
  LogTypesToDisable?: string[];
}

export namespace AwsRdsPendingCloudWatchLogsExports {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: AwsRdsPendingCloudWatchLogsExports): any => ({
    ...obj,
  });
}

/**
 * <p>A processor feature.</p>
 */
export interface AwsRdsDbProcessorFeature {
  /**
   * <p>The name of the processor feature.</p>
   */
  Name?: string;

  /**
   * <p>The value of the processor feature.</p>
   */
  Value?: string;
}

export namespace AwsRdsDbProcessorFeature {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: AwsRdsDbProcessorFeature): any => ({
    ...obj,
  });
}

/**
 * <p>Changes to a DB instance that are currently pending.</p>
 */
export interface AwsRdsDbPendingModifiedValues {
  /**
   * <p>The new DB instance class for the DB instance.</p>
   */
  DbInstanceClass?: string;

  /**
   * <p>The new value of the allocated storage for the DB instance.</p>
   */
  AllocatedStorage?: number;

  /**
   * <p>The new master user password for the DB instance.</p>
   */
  MasterUserPassword?: string;

  /**
   * <p>The new port for the DB instance.</p>
   */
  Port?: number;

  /**
   * <p>The new backup retention period for the DB instance.</p>
   */
  BackupRetentionPeriod?: number;

  /**
   * <p>Indicates that a single Availability Zone DB instance is changing to a multiple Availability Zone deployment.</p>
   */
  MultiAZ?: boolean;

  /**
   * <p>The new engine version for the DB instance.</p>
   */
  EngineVersion?: string;

  /**
   * <p>The new license model value for the DB instance.</p>
   */
  LicenseModel?: string;

  /**
   * <p>The new provisioned IOPS value for the DB instance.</p>
   */
  Iops?: number;

  /**
   * <p>The new DB instance identifier for the DB instance.</p>
   */
  DbInstanceIdentifier?: string;

  /**
   * <p>The new storage type for the DB instance.</p>
   */
  StorageType?: string;

  /**
   * <p>The new CA certificate identifier for the DB instance.</p>
   */
  CaCertificateIdentifier?: string;

  /**
   * <p>The name of the new subnet group for the DB instance.</p>
   */
  DbSubnetGroupName?: string;

  /**
   * <p>A list of log types that are being enabled or disabled.</p>
   */
  PendingCloudWatchLogsExports?: AwsRdsPendingCloudWatchLogsExports;

  /**
   * <p>Processor features that are being updated.</p>
   */
  ProcessorFeatures?: AwsRdsDbProcessorFeature[];
}

export namespace AwsRdsDbPendingModifiedValues {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: AwsRdsDbPendingModifiedValues): any => ({
    ...obj,
  });
}

/**
 * <p>Information about the status of a read replica.</p>
 */
export interface AwsRdsDbStatusInfo {
  /**
   * <p>The type of status. For a read replica, the status type is read replication.</p>
   */
  StatusType?: string;

  /**
   * <p>Whether the read replica instance is operating normally.</p>
   */
  Normal?: boolean;

  /**
   * <p>The status of the read replica instance.</p>
   */
  Status?: string;

  /**
   * <p>If the read replica is currently in an error state, provides the error details.</p>
   */
  Message?: string;
}

export namespace AwsRdsDbStatusInfo {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: AwsRdsDbStatusInfo): any => ({
    ...obj,
  });
}

/**
 * <p>Contains the details of an Amazon RDS DB instance.</p>
 */
export interface AwsRdsDbInstanceDetails {
  /**
   * <p>The IAM roles associated with the DB
   *          instance.</p>
   */
  AssociatedRoles?: AwsRdsDbInstanceAssociatedRole[];

  /**
   * <p>The identifier of the CA certificate for this DB instance.</p>
   */
  CACertificateIdentifier?: string;

  /**
   * <p>If the DB instance is a member of a DB cluster, contains the name of the DB cluster that
   *          the DB instance is a member of.</p>
   */
  DBClusterIdentifier?: string;

  /**
   * <p>Contains a user-supplied database identifier. This identifier is the unique key that
   *          identifies a DB instance.</p>
   */
  DBInstanceIdentifier?: string;

  /**
   * <p>Contains the name of the compute and memory capacity class of the DB instance.</p>
   */
  DBInstanceClass?: string;

  /**
   * <p>Specifies the port that the DB instance listens on. If the DB instance is part of a DB
   *          cluster, this can be a different port than the DB cluster port.</p>
   */
  DbInstancePort?: number;

  /**
   * <p>The Amazon Web Services Region-unique, immutable identifier for the DB instance. This identifier is
   *          found in CloudTrail log entries whenever the KMS key for the DB instance is
   *          accessed. </p>
   */
  DbiResourceId?: string;

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
   *          returned parameters do not apply to an Oracle DB instance. </p>
   */
  DBName?: string;

  /**
   * <p>Indicates whether the DB instance has deletion protection enabled.</p>
   *          <p>When deletion protection is enabled, the database cannot be deleted.</p>
   */
  DeletionProtection?: boolean;

  /**
   * <p>Specifies the connection endpoint.</p>
   */
  Endpoint?: AwsRdsDbInstanceEndpoint;

  /**
   * <p>Provides the name of the database engine to use for this DB instance.</p>
   */
  Engine?: string;

  /**
   * <p>Indicates the database engine version.</p>
   */
  EngineVersion?: string;

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
   */
  IAMDatabaseAuthenticationEnabled?: boolean;

  /**
   * <p>Indicates when the DB instance was created.</p>
   *          <p>Uses the <code>date-time</code> format specified in <a href="https://tools.ietf.org/html/rfc3339#section-5.6">RFC 3339 section 5.6, Internet
   *             Date/Time Format</a>. The value cannot contain spaces. For example,
   *             <code>2020-03-22T13:22:13.933Z</code>.</p>
   */
  InstanceCreateTime?: string;

  /**
   * <p>If <code>StorageEncrypted</code> is true, the KMS key identifier for the encrypted
   *          DB instance.</p>
   */
  KmsKeyId?: string;

  /**
   * <p>Specifies the accessibility options for the DB instance.</p>
   *          <p>A value of true specifies an Internet-facing instance with a publicly resolvable DNS
   *          name, which resolves to a public IP address.</p>
   *          <p>A value of false specifies an internal instance with a DNS name that resolves to a
   *          private IP address. </p>
   */
  PubliclyAccessible?: boolean;

  /**
   * <p>Specifies whether the DB instance is encrypted.</p>
   */
  StorageEncrypted?: boolean;

  /**
   * <p>The ARN from the key store with which the instance is associated for TDE
   *          encryption.</p>
   */
  TdeCredentialArn?: string;

  /**
   * <p>A list of VPC security groups that the DB instance belongs to.</p>
   */
  VpcSecurityGroups?: AwsRdsDbInstanceVpcSecurityGroup[];

  /**
   * <p>Whether the DB instance is a multiple Availability Zone deployment.</p>
   */
  MultiAz?: boolean;

  /**
   * <p>The ARN of the CloudWatch Logs log stream that receives the enhanced monitoring metrics
   *          data for the DB instance.</p>
   */
  EnhancedMonitoringResourceArn?: string;

  /**
   * <p>The current status of the DB instance.</p>
   */
  DbInstanceStatus?: string;

  /**
   * <p>The master user name of the DB instance.</p>
   */
  MasterUsername?: string;

  /**
   * <p>The amount of storage (in gigabytes) to initially allocate for the DB instance.</p>
   */
  AllocatedStorage?: number;

  /**
   * <p>The range of time each day when automated backups are created, if automated backups are
   *          enabled.</p>
   *          <p>Uses the format <code>HH:MM-HH:MM</code>. For example, <code>04:52-05:22</code>.</p>
   */
  PreferredBackupWindow?: string;

  /**
   * <p>The number of days for which to retain automated backups.</p>
   */
  BackupRetentionPeriod?: number;

  /**
   * <p>A list of the DB security groups to assign to the DB instance.</p>
   */
  DbSecurityGroups?: string[];

  /**
   * <p>A list of the DB parameter groups to assign to the DB instance.</p>
   */
  DbParameterGroups?: AwsRdsDbParameterGroup[];

  /**
   * <p>The Availability Zone where the DB instance will be created.</p>
   */
  AvailabilityZone?: string;

  /**
   * <p>Information about the subnet group that is associated with the DB instance.</p>
   */
  DbSubnetGroup?: AwsRdsDbSubnetGroup;

  /**
   * <p>The weekly time range during which system maintenance can occur, in Universal
   *          Coordinated Time (UTC).</p>
   *          <p>Uses the format <code><day>:HH:MM-<day>:HH:MM</code>.</p>
   *          <p>For the day values, use
   *             <code>mon</code>|<code>tue</code>|<code>wed</code>|<code>thu</code>|<code>fri</code>|<code>sat</code>|<code>sun</code>.</p>
   *          <p>For example, <code>sun:09:32-sun:10:02</code>.</p>
   */
  PreferredMaintenanceWindow?: string;

  /**
   * <p>Changes to the DB instance that are currently pending.</p>
   */
  PendingModifiedValues?: AwsRdsDbPendingModifiedValues;

  /**
   * <p>Specifies the latest time to which a database can be restored with point-in-time
   *          restore.</p>
   *          <p>Uses the <code>date-time</code> format specified in <a href="https://tools.ietf.org/html/rfc3339#section-5.6">RFC 3339 section 5.6, Internet
   *             Date/Time Format</a>. The value cannot contain spaces. For example,
   *             <code>2020-03-22T13:22:13.933Z</code>.</p>
   */
  LatestRestorableTime?: string;

  /**
   * <p>Indicates whether minor version patches are applied automatically.</p>
   */
  AutoMinorVersionUpgrade?: boolean;

  /**
   * <p>If this DB instance is a read replica, contains the identifier of the source DB
   *          instance.</p>
   */
  ReadReplicaSourceDBInstanceIdentifier?: string;

  /**
   * <p>List of identifiers of the read replicas associated with this DB instance.</p>
   */
  ReadReplicaDBInstanceIdentifiers?: string[];

  /**
   * <p>List of identifiers of Aurora DB clusters to which the RDS DB instance is replicated as
   *          a read replica.</p>
   */
  ReadReplicaDBClusterIdentifiers?: string[];

  /**
   * <p>License model information for this DB instance.</p>
   */
  LicenseModel?: string;

  /**
   * <p>Specifies the provisioned IOPS (I/O operations per second) for this DB instance.</p>
   */
  Iops?: number;

  /**
   * <p>The list of option group memberships for this DB instance.</p>
   */
  OptionGroupMemberships?: AwsRdsDbOptionGroupMembership[];

  /**
   * <p>The name of the character set that this DB instance is associated with.</p>
   */
  CharacterSetName?: string;

  /**
   * <p>For a DB instance with multi-Availability Zone support, the name of the secondary
   *          Availability Zone.</p>
   */
  SecondaryAvailabilityZone?: string;

  /**
   * <p>The status of a read replica. If the instance isn't a read replica, this is
   *          empty.</p>
   */
  StatusInfos?: AwsRdsDbStatusInfo[];

  /**
   * <p>The storage type for the DB instance.</p>
   */
  StorageType?: string;

  /**
   * <p>The Active Directory domain membership records associated with the DB instance.</p>
   */
  DomainMemberships?: AwsRdsDbDomainMembership[];

  /**
   * <p>Whether to copy resource tags to snapshots of the DB instance.</p>
   */
  CopyTagsToSnapshot?: boolean;

  /**
   * <p>The interval, in seconds, between points when enhanced monitoring metrics are collected
   *          for the DB instance.</p>
   */
  MonitoringInterval?: number;

  /**
   * <p>The ARN for the IAM role that permits Amazon RDS to send enhanced monitoring metrics to
   *          CloudWatch Logs.</p>
   */
  MonitoringRoleArn?: string;

  /**
   * <p>The order in which to promote an Aurora replica to the primary instance after a failure
   *          of the existing primary instance.</p>
   */
  PromotionTier?: number;

  /**
   * <p>The time zone of the DB instance.</p>
   */
  Timezone?: string;

  /**
   * <p>Indicates whether Performance Insights is enabled for the DB instance.</p>
   */
  PerformanceInsightsEnabled?: boolean;

  /**
   * <p>The identifier of the KMS key used to encrypt the Performance Insights data.</p>
   */
  PerformanceInsightsKmsKeyId?: string;

  /**
   * <p>The number of days to retain Performance Insights data.</p>
   */
  PerformanceInsightsRetentionPeriod?: number;

  /**
   * <p>A list of log types that this DB instance is configured to export to CloudWatch Logs.</p>
   */
  EnabledCloudWatchLogsExports?: string[];

  /**
   * <p>The number of CPU cores and the number of threads per core for the DB instance class of
   *          the DB instance.</p>
   */
  ProcessorFeatures?: AwsRdsDbProcessorFeature[];

  /**
   * <p>Specifies the connection endpoint.</p>
   */
  ListenerEndpoint?: AwsRdsDbInstanceEndpoint;

  /**
   * <p>The upper limit to which Amazon RDS can automatically scale the storage of the DB
   *          instance.</p>
   */
  MaxAllocatedStorage?: number;
}

export namespace AwsRdsDbInstanceDetails {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: AwsRdsDbInstanceDetails): any => ({
    ...obj,
  });
}

/**
 * <p>EC2 security group information for an RDS DB security group.</p>
 */
export interface AwsRdsDbSecurityGroupEc2SecurityGroup {
  /**
   * <p>Specifies the ID for the EC2 security group.</p>
   */
  Ec2SecurityGroupId?: string;

  /**
   * <p>Specifies the name of the EC2 security group.</p>
   */
  Ec2SecurityGroupName?: string;

  /**
   * <p>Provides the Amazon Web Services ID of the owner of the EC2 security group.</p>
   */
  Ec2SecurityGroupOwnerId?: string;

  /**
   * <p>Provides the status of the EC2 security group.</p>
   */
  Status?: string;
}

export namespace AwsRdsDbSecurityGroupEc2SecurityGroup {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: AwsRdsDbSecurityGroupEc2SecurityGroup): any => ({
    ...obj,
  });
}

/**
 * <p>IP range information for an RDS DB security group.</p>
 */
export interface AwsRdsDbSecurityGroupIpRange {
  /**
   * <p>Specifies the IP range.</p>
   */
  CidrIp?: string;

  /**
   * <p>Specifies the status of the IP range.</p>
   */
  Status?: string;
}

export namespace AwsRdsDbSecurityGroupIpRange {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: AwsRdsDbSecurityGroupIpRange): any => ({
    ...obj,
  });
}

/**
 * <p>Provides information about an Amazon RDS DB security group.</p>
 */
export interface AwsRdsDbSecurityGroupDetails {
  /**
   * <p>The ARN for the DB security group.</p>
   */
  DbSecurityGroupArn?: string;

  /**
   * <p>Provides the description of the DB security group.</p>
   */
  DbSecurityGroupDescription?: string;

  /**
   * <p>Specifies the name of the DB security group.</p>
   */
  DbSecurityGroupName?: string;

  /**
   * <p>Contains a list of EC2 security groups.</p>
   */
  Ec2SecurityGroups?: AwsRdsDbSecurityGroupEc2SecurityGroup[];

  /**
   * <p>Contains a list of IP ranges.</p>
   */
  IpRanges?: AwsRdsDbSecurityGroupIpRange[];

  /**
   * <p>Provides the Amazon Web Services ID of the owner of a specific DB security group.</p>
   */
  OwnerId?: string;

  /**
   * <p>Provides VPC ID associated with the DB security group.
   *       </p>
   */
  VpcId?: string;
}

export namespace AwsRdsDbSecurityGroupDetails {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: AwsRdsDbSecurityGroupDetails): any => ({
    ...obj,
  });
}

/**
 * <p>Provides details about an Amazon RDS DB cluster snapshot.</p>
 */
export interface AwsRdsDbSnapshotDetails {
  /**
   * <p>The name or ARN of the DB snapshot that is used to restore the DB instance.</p>
   */
  DbSnapshotIdentifier?: string;

  /**
   * <p>A name for the DB instance.</p>
   */
  DbInstanceIdentifier?: string;

  /**
   * <p>When the snapshot was taken in Coordinated Universal Time (UTC).</p>
   */
  SnapshotCreateTime?: string;

  /**
   * <p>The name of the database engine to use for this DB instance.</p>
   */
  Engine?: string;

  /**
   * <p>The amount of storage (in gigabytes) to be initially allocated for the database instance.</p>
   */
  AllocatedStorage?: number;

  /**
   * <p>The status of this DB snapshot.</p>
   */
  Status?: string;

  /**
   * <p>The port that the database engine was listening on at the time of the snapshot.</p>
   */
  Port?: number;

  /**
   * <p>Specifies the name of the Availability Zone in which the DB instance was located at the time of the DB snapshot.</p>
   */
  AvailabilityZone?: string;

  /**
   * <p>The VPC ID associated with the DB snapshot.</p>
   */
  VpcId?: string;

  /**
   * <p>Specifies the time in Coordinated Universal Time (UTC) when the DB instance, from which the snapshot was taken, was created.</p>
   */
  InstanceCreateTime?: string;

  /**
   * <p>The master user name for the DB snapshot.</p>
   */
  MasterUsername?: string;

  /**
   * <p>The version of the database engine.</p>
   */
  EngineVersion?: string;

  /**
   * <p>License model information for the restored DB instance.</p>
   */
  LicenseModel?: string;

  /**
   * <p>The type of the DB snapshot.</p>
   */
  SnapshotType?: string;

  /**
   * <p>The provisioned IOPS (I/O operations per second) value of the DB instance at the time of the snapshot.</p>
   */
  Iops?: number;

  /**
   * <p>The option group name for the DB snapshot.</p>
   */
  OptionGroupName?: string;

  /**
   * <p>The percentage of the estimated data that has been transferred.</p>
   */
  PercentProgress?: number;

  /**
   * <p>The Amazon Web Services Region that the DB snapshot was created in or copied from.</p>
   */
  SourceRegion?: string;

  /**
   * <p>The DB snapshot ARN that the DB snapshot was copied from.</p>
   */
  SourceDbSnapshotIdentifier?: string;

  /**
   * <p>The storage type associated with the DB snapshot.</p>
   */
  StorageType?: string;

  /**
   * <p>The ARN from the key store with which to associate the instance for TDE encryption.</p>
   */
  TdeCredentialArn?: string;

  /**
   * <p>Whether the DB snapshot is encrypted.</p>
   */
  Encrypted?: boolean;

  /**
   * <p>If <code>Encrypted</code> is <code>true</code>, the KMS key identifier for the encrypted DB snapshot.</p>
   */
  KmsKeyId?: string;

  /**
   * <p>The time zone of the DB snapshot.</p>
   */
  Timezone?: string;

  /**
   * <p>Whether mapping of IAM accounts to database accounts is enabled.</p>
   */
  IamDatabaseAuthenticationEnabled?: boolean;

  /**
   * <p>The number of CPU cores and the number of threads per core for the DB instance class of the DB instance.</p>
   */
  ProcessorFeatures?: AwsRdsDbProcessorFeature[];

  /**
   * <p>The identifier for the source DB instance.</p>
   */
  DbiResourceId?: string;
}

export namespace AwsRdsDbSnapshotDetails {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: AwsRdsDbSnapshotDetails): any => ({
    ...obj,
  });
}

/**
 * <p>Details about an Amazon RDS event notification subscription. The subscription allows Amazon RDS to post events to an SNS topic.</p>
 */
export interface AwsRdsEventSubscriptionDetails {
  /**
   * <p>The identifier of the account that is associated with the event notification subscription.</p>
   */
  CustSubscriptionId?: string;

  /**
   * <p>The identifier of the event notification subscription.</p>
   */
  CustomerAwsId?: string;

  /**
   * <p>Whether the event notification subscription is enabled.</p>
   */
  Enabled?: boolean;

  /**
   * <p>The list of event categories for the event notification subscription.</p>
   */
  EventCategoriesList?: string[];

  /**
   * <p>The ARN of the event notification subscription.</p>
   */
  EventSubscriptionArn?: string;

  /**
   * <p>The ARN of the SNS topic to post the event notifications to.</p>
   */
  SnsTopicArn?: string;

  /**
   * <p>A list of source identifiers for the event notification subscription.</p>
   */
  SourceIdsList?: string[];

  /**
   * <p>The source type for the event notification subscription.</p>
   */
  SourceType?: string;

  /**
   * <p>The status of the event notification subscription.</p>
   *          <p>Valid values: <code>creating</code> | <code>modifying</code> | <code>deleting</code> | <code>active</code> | <code>no-permission</code> | <code>topic-not-exist</code>
   *          </p>
   */
  Status?: string;

  /**
   * <p>The datetime when the event notification subscription was created.</p>
   *          <p>Uses the <code>date-time</code> format specified in <a href="https://tools.ietf.org/html/rfc3339#section-5.6">RFC 3339 section 5.6, Internet
   *          Date/Time Format</a>. The value cannot contain spaces. For example,
   *          <code>2020-03-22T13:22:13.933Z</code>.</p>
   */
  SubscriptionCreationTime?: string;
}

export namespace AwsRdsEventSubscriptionDetails {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: AwsRdsEventSubscriptionDetails): any => ({
    ...obj,
  });
}

/**
 * <p>A node in an Amazon Redshift cluster.</p>
 */
export interface AwsRedshiftClusterClusterNode {
  /**
   * <p>The role of the node. A node might be a leader node or a compute node.</p>
   */
  NodeRole?: string;

  /**
   * <p>The private IP address of the node.</p>
   */
  PrivateIpAddress?: string;

  /**
   * <p>The public IP address of the node.</p>
   */
  PublicIpAddress?: string;
}

export namespace AwsRedshiftClusterClusterNode {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: AwsRedshiftClusterClusterNode): any => ({
    ...obj,
  });
}

/**
 * <p>The status of a parameter in a cluster parameter group for an Amazon Redshift
 *          cluster.</p>
 */
export interface AwsRedshiftClusterClusterParameterStatus {
  /**
   * <p>The name of the parameter.</p>
   */
  ParameterName?: string;

  /**
   * <p>The status of the parameter. Indicates whether the parameter is in sync with the
   *          database, waiting for a cluster reboot, or encountered an error when it was applied.</p>
   *          <p>Valid values: <code>in-sync</code> | <code>pending-reboot</code> | <code>applying</code>
   *          | <code>invalid-parameter</code> | <code>apply-deferred</code> | <code>apply-error</code> |
   *             <code>unknown-error</code>
   *          </p>
   */
  ParameterApplyStatus?: string;

  /**
   * <p>The error that prevented the parameter from being applied to the database.</p>
   */
  ParameterApplyErrorDescription?: string;
}

export namespace AwsRedshiftClusterClusterParameterStatus {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: AwsRedshiftClusterClusterParameterStatus): any => ({
    ...obj,
  });
}

/**
 * <p>A cluster parameter group that is associated with an Amazon Redshift cluster.</p>
 */
export interface AwsRedshiftClusterClusterParameterGroup {
  /**
   * <p>The list of parameter statuses.</p>
   */
  ClusterParameterStatusList?: AwsRedshiftClusterClusterParameterStatus[];

  /**
   * <p>The status of updates to the parameters.</p>
   */
  ParameterApplyStatus?: string;

  /**
   * <p>The name of the parameter group.</p>
   */
  ParameterGroupName?: string;
}

export namespace AwsRedshiftClusterClusterParameterGroup {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: AwsRedshiftClusterClusterParameterGroup): any => ({
    ...obj,
  });
}

/**
 * <p>A security group that is associated with the cluster.</p>
 */
export interface AwsRedshiftClusterClusterSecurityGroup {
  /**
   * <p>The name of the cluster security group.</p>
   */
  ClusterSecurityGroupName?: string;

  /**
   * <p>The status of the cluster security group.</p>
   */
  Status?: string;
}

export namespace AwsRedshiftClusterClusterSecurityGroup {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: AwsRedshiftClusterClusterSecurityGroup): any => ({
    ...obj,
  });
}

/**
 * <p>Information about a cross-Region snapshot copy.</p>
 */
export interface AwsRedshiftClusterClusterSnapshotCopyStatus {
  /**
   * <p>The destination Region that snapshots are automatically copied to when cross-Region
   *          snapshot copy is enabled.</p>
   */
  DestinationRegion?: string;

  /**
   * <p>The number of days that manual snapshots are retained in the destination region after
   *          they are copied from a source region.</p>
   *          <p>If the value is <code>-1</code>,
   *          then the manual snapshot is retained indefinitely.</p>
   *          <p>Valid values: Either <code>-1</code>
   *          or an integer between 1 and 3,653</p>
   */
  ManualSnapshotRetentionPeriod?: number;

  /**
   * <p>The number of days to retain automated snapshots in the destination Region after they
   *          are copied from a source Region.</p>
   */
  RetentionPeriod?: number;

  /**
   * <p>The name of the snapshot copy grant.</p>
   */
  SnapshotCopyGrantName?: string;
}

export namespace AwsRedshiftClusterClusterSnapshotCopyStatus {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: AwsRedshiftClusterClusterSnapshotCopyStatus): any => ({
    ...obj,
  });
}

/**
 * <p>A time windows during which maintenance was deferred for an Amazon Redshift
 *          cluster.</p>
 */
export interface AwsRedshiftClusterDeferredMaintenanceWindow {
  /**
   * <p>The end of the time window for which maintenance was deferred.</p>
   *          <p>Uses the <code>date-time</code> format specified in <a href="https://tools.ietf.org/html/rfc3339#section-5.6">RFC 3339 section 5.6, Internet
   *             Date/Time Format</a>. The value cannot contain spaces. For example,
   *             <code>2020-03-22T13:22:13.933Z</code>.</p>
   */
  DeferMaintenanceEndTime?: string;

  /**
   * <p>The identifier of the maintenance window.</p>
   */
  DeferMaintenanceIdentifier?: string;

  /**
   * <p>The start of the time window for which maintenance was deferred.</p>
   *          <p>Uses the <code>date-time</code> format specified in <a href="https://tools.ietf.org/html/rfc3339#section-5.6">RFC 3339 section 5.6, Internet
   *             Date/Time Format</a>. The value cannot contain spaces. For example,
   *             <code>2020-03-22T13:22:13.933Z</code>.</p>
   */
  DeferMaintenanceStartTime?: string;
}

export namespace AwsRedshiftClusterDeferredMaintenanceWindow {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: AwsRedshiftClusterDeferredMaintenanceWindow): any => ({
    ...obj,
  });
}

/**
 * <p>The status of the elastic IP (EIP) address for an Amazon Redshift cluster.</p>
 */
export interface AwsRedshiftClusterElasticIpStatus {
  /**
   * <p>The elastic IP address for the cluster.</p>
   */
  ElasticIp?: string;

  /**
   * <p>The status of the elastic IP address.</p>
   */
  Status?: string;
}

export namespace AwsRedshiftClusterElasticIpStatus {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: AwsRedshiftClusterElasticIpStatus): any => ({
    ...obj,
  });
}

/**
 * <p>The connection endpoint for an Amazon Redshift cluster.</p>
 */
export interface AwsRedshiftClusterEndpoint {
  /**
   * <p>The DNS address of the cluster.</p>
   */
  Address?: string;

  /**
   * <p>The port that the database engine listens on.</p>
   */
  Port?: number;
}

export namespace AwsRedshiftClusterEndpoint {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: AwsRedshiftClusterEndpoint): any => ({
    ...obj,
  });
}

/**
 * <p>Information about whether an Amazon Redshift cluster finished applying any hardware
 *          changes to security module (HSM) settings that were specified in a modify cluster
 *          command.</p>
 */
export interface AwsRedshiftClusterHsmStatus {
  /**
   * <p>The name of the HSM client certificate that the Amazon Redshift cluster uses to retrieve
   *          the data encryption keys that are stored in an HSM.</p>
   */
  HsmClientCertificateIdentifier?: string;

  /**
   * <p>The name of the HSM configuration that contains the information that the Amazon Redshift
   *          cluster can use to retrieve and store keys in an HSM.</p>
   */
  HsmConfigurationIdentifier?: string;

  /**
   * <p>Indicates whether the Amazon Redshift cluster has finished applying any HSM settings
   *          changes specified in a modify cluster command.</p>
   *          <p>Type: String</p>
   *          <p>Valid values: <code>active</code> | <code>applying</code>
   *          </p>
   */
  Status?: string;
}

export namespace AwsRedshiftClusterHsmStatus {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: AwsRedshiftClusterHsmStatus): any => ({
    ...obj,
  });
}

/**
 * <p>An IAM role that the cluster can use to access other Amazon Web Services services.</p>
 */
export interface AwsRedshiftClusterIamRole {
  /**
   * <p>The status of the IAM role's association with the cluster.</p>
   *          <p>Valid values: <code>in-sync</code> | <code>adding</code> | <code>removing</code>
   *          </p>
   */
  ApplyStatus?: string;

  /**
   * <p>The ARN of the IAM role.</p>
   */
  IamRoleArn?: string;
}

export namespace AwsRedshiftClusterIamRole {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: AwsRedshiftClusterIamRole): any => ({
    ...obj,
  });
}

/**
 * <p>Provides information about the logging status of the cluster.</p>
 */
export interface AwsRedshiftClusterLoggingStatus {
  /**
   * <p>The name of the S3 bucket where the log files are stored.</p>
   */
  BucketName?: string;

  /**
   * <p>The message indicating that the logs failed to be delivered.</p>
   */
  LastFailureMessage?: string;

  /**
   * <p>The last time when logs failed to be delivered.</p>
   *          <p>Uses the <code>date-time</code> format specified in <a href="https://tools.ietf.org/html/rfc3339#section-5.6">RFC 3339 section 5.6, Internet
   *          Date/Time Format</a>. The value cannot contain spaces. For example,
   *          <code>2020-03-22T13:22:13.933Z</code>.</p>
   */
  LastFailureTime?: string;

  /**
   * <p>The last time that logs were delivered successfully.</p>
   *          <p>Uses the <code>date-time</code> format specified in <a href="https://tools.ietf.org/html/rfc3339#section-5.6">RFC 3339 section 5.6, Internet
   *          Date/Time Format</a>. The value cannot contain spaces. For example,
   *          <code>2020-03-22T13:22:13.933Z</code>.</p>
   */
  LastSuccessfulDeliveryTime?: string;

  /**
   * <p>Indicates whether logging is enabled.</p>
   */
  LoggingEnabled?: boolean;

  /**
   * <p>Provides the prefix applied to the log file names.</p>
   */
  S3KeyPrefix?: string;
}

export namespace AwsRedshiftClusterLoggingStatus {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: AwsRedshiftClusterLoggingStatus): any => ({
    ...obj,
  });
}

/**
 * <p>Changes to the Amazon Redshift cluster that are currently pending.</p>
 */
export interface AwsRedshiftClusterPendingModifiedValues {
  /**
   * <p>The pending or in-progress change to the automated snapshot retention period.</p>
   */
  AutomatedSnapshotRetentionPeriod?: number;

  /**
   * <p>The pending or in-progress change to the identifier for the cluster.</p>
   */
  ClusterIdentifier?: string;

  /**
   * <p>The pending or in-progress change to the cluster type.</p>
   */
  ClusterType?: string;

  /**
   * <p>The pending or in-progress change to the service version.</p>
   */
  ClusterVersion?: string;

  /**
   * <p>The encryption type for a cluster.</p>
   */
  EncryptionType?: string;

  /**
   * <p>Indicates whether to create the cluster with enhanced VPC routing enabled.</p>
   */
  EnhancedVpcRouting?: boolean;

  /**
   * <p>The name of the maintenance track that the cluster changes to during the next
   *          maintenance window.</p>
   */
  MaintenanceTrackName?: string;

  /**
   * <p>The pending or in-progress change to the master user password for the cluster.</p>
   */
  MasterUserPassword?: string;

  /**
   * <p>The pending or in-progress change to the cluster's node type.</p>
   */
  NodeType?: string;

  /**
   * <p>The pending or in-progress change to the number of nodes in the cluster.</p>
   */
  NumberOfNodes?: number;

  /**
   * <p>The pending or in-progress change to whether the cluster can be connected to from the
   *          public network.</p>
   */
  PubliclyAccessible?: boolean;
}

export namespace AwsRedshiftClusterPendingModifiedValues {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: AwsRedshiftClusterPendingModifiedValues): any => ({
    ...obj,
  });
}

/**
 * <p>Information about the resize operation for the cluster.</p>
 */
export interface AwsRedshiftClusterResizeInfo {
  /**
   * <p>Indicates whether the resize operation can be canceled.</p>
   */
  AllowCancelResize?: boolean;

  /**
   * <p>The type of resize operation.</p>
   *          <p>Valid values: <code>ClassicResize</code>
   *          </p>
   */
  ResizeType?: string;
}

export namespace AwsRedshiftClusterResizeInfo {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: AwsRedshiftClusterResizeInfo): any => ({
    ...obj,
  });
}

/**
 * <p>Information about the status of a cluster restore action. It only applies if the cluster
 *          was created by restoring a snapshot.</p>
 */
export interface AwsRedshiftClusterRestoreStatus {
  /**
   * <p>The number of megabytes per second being transferred from the backup storage. Returns
   *          the average rate for a completed backup.</p>
   *          <p>This field is only updated when you restore to DC2 and DS2 node types.</p>
   */
  CurrentRestoreRateInMegaBytesPerSecond?: number;

  /**
   * <p>The amount of time an in-progress restore has been running, or the amount of time it
   *          took a completed restore to finish.</p>
   *          <p>This field is only updated when you restore to DC2 and DS2 node types.</p>
   */
  ElapsedTimeInSeconds?: number;

  /**
   * <p>The estimate of the time remaining before the restore is complete. Returns 0 for a
   *          completed restore.</p>
   *          <p>This field is only updated when you restore to DC2 and DS2 node types.</p>
   */
  EstimatedTimeToCompletionInSeconds?: number;

  /**
   * <p>The number of megabytes that were transferred from snapshot storage.</p>
   *          <p>This field is only updated when you restore to DC2 and DS2 node types.</p>
   */
  ProgressInMegaBytes?: number;

  /**
   * <p>The size of the set of snapshot data that was used to restore the cluster.</p>
   *          <p>This field is only updated when you restore to DC2 and DS2 node types.</p>
   */
  SnapshotSizeInMegaBytes?: number;

  /**
   * <p>The status of the restore action.</p>
   *          <p>Valid values: <code>starting</code> | <code>restoring</code> | <code>completed</code> |
   *             <code>failed</code>
   *          </p>
   */
  Status?: string;
}

export namespace AwsRedshiftClusterRestoreStatus {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: AwsRedshiftClusterRestoreStatus): any => ({
    ...obj,
  });
}

/**
 * <p>A VPC security group that the cluster belongs to, if the cluster is in a VPC.</p>
 */
export interface AwsRedshiftClusterVpcSecurityGroup {
  /**
   * <p>The status of the VPC security group.</p>
   */
  Status?: string;

  /**
   * <p>The identifier of the VPC security group.</p>
   */
  VpcSecurityGroupId?: string;
}

export namespace AwsRedshiftClusterVpcSecurityGroup {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: AwsRedshiftClusterVpcSecurityGroup): any => ({
    ...obj,
  });
}

/**
 * <p>Details about an Amazon Redshift cluster.</p>
 */
export interface AwsRedshiftClusterDetails {
  /**
   * <p>Indicates whether major version upgrades are applied automatically to the cluster during
   *          the maintenance window.</p>
   */
  AllowVersionUpgrade?: boolean;

  /**
   * <p>The number of days that automatic cluster snapshots are retained.</p>
   */
  AutomatedSnapshotRetentionPeriod?: number;

  /**
   * <p>The name of the Availability Zone in which the cluster is located.</p>
   */
  AvailabilityZone?: string;

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
   */
  ClusterAvailabilityStatus?: string;

  /**
   * <p>Indicates when the cluster was created.</p>
   *          <p>Uses the <code>date-time</code> format specified in <a href="https://tools.ietf.org/html/rfc3339#section-5.6">RFC 3339 section 5.6, Internet
   *             Date/Time Format</a>. The value cannot contain spaces. For example,
   *             <code>2020-03-22T13:22:13.933Z</code>.</p>
   */
  ClusterCreateTime?: string;

  /**
   * <p>The unique identifier of the cluster.</p>
   */
  ClusterIdentifier?: string;

  /**
   * <p>The nodes in the cluster.</p>
   */
  ClusterNodes?: AwsRedshiftClusterClusterNode[];

  /**
   * <p>The list of cluster parameter groups that are associated with this cluster.</p>
   */
  ClusterParameterGroups?: AwsRedshiftClusterClusterParameterGroup[];

  /**
   * <p>The public key for the cluster.</p>
   */
  ClusterPublicKey?: string;

  /**
   * <p>The specific revision number of the database in the cluster.</p>
   */
  ClusterRevisionNumber?: string;

  /**
   * <p>A list of cluster security groups that are associated with the cluster.</p>
   */
  ClusterSecurityGroups?: AwsRedshiftClusterClusterSecurityGroup[];

  /**
   * <p>Information about the destination Region and retention period for the cross-Region
   *          snapshot copy.</p>
   */
  ClusterSnapshotCopyStatus?: AwsRedshiftClusterClusterSnapshotCopyStatus;

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
   */
  ClusterStatus?: string;

  /**
   * <p>The name of the subnet group that is associated with the cluster. This parameter is
   *          valid only when the cluster is in a VPC.</p>
   */
  ClusterSubnetGroupName?: string;

  /**
   * <p>The version ID of the Amazon Redshift engine that runs on the cluster.</p>
   */
  ClusterVersion?: string;

  /**
   * <p>The name of the initial database that was created when the cluster was created.</p>
   *          <p>The same name is returned for the life of the cluster.</p>
   *          <p>If an initial database is not specified, a database named <code>devdev</code> is created
   *          by default.</p>
   */
  DBName?: string;

  /**
   * <p>List of time windows during which maintenance was deferred.</p>
   */
  DeferredMaintenanceWindows?: AwsRedshiftClusterDeferredMaintenanceWindow[];

  /**
   * <p>Information about the status of the Elastic IP (EIP) address.</p>
   */
  ElasticIpStatus?: AwsRedshiftClusterElasticIpStatus;

  /**
   * <p>The number of nodes that you can use the elastic resize method to resize the cluster
   *          to.</p>
   */
  ElasticResizeNumberOfNodeOptions?: string;

  /**
   * <p>Indicates whether the data in the cluster is encrypted at rest.</p>
   */
  Encrypted?: boolean;

  /**
   * <p>The connection endpoint.</p>
   */
  Endpoint?: AwsRedshiftClusterEndpoint;

  /**
   * <p>Indicates whether to create the cluster with enhanced VPC routing enabled.</p>
   */
  EnhancedVpcRouting?: boolean;

  /**
   * <p>Indicates when the next snapshot is expected to be taken. The cluster must have a valid
   *          snapshot schedule and have backups enabled.</p>
   *          <p>Uses the <code>date-time</code> format specified in <a href="https://tools.ietf.org/html/rfc3339#section-5.6">RFC 3339 section 5.6, Internet
   *             Date/Time Format</a>. The value cannot contain spaces. For example,
   *             <code>2020-03-22T13:22:13.933Z</code>.</p>
   */
  ExpectedNextSnapshotScheduleTime?: string;

  /**
   * <p>The status of the next expected snapshot.</p>
   *          <p>Valid values: <code>OnTrack</code> | <code>Pending</code>
   *          </p>
   */
  ExpectedNextSnapshotScheduleTimeStatus?: string;

  /**
   * <p>Information about whether the Amazon Redshift cluster finished applying any changes to
   *          hardware security module (HSM) settings that were specified in a modify cluster
   *          command.</p>
   */
  HsmStatus?: AwsRedshiftClusterHsmStatus;

  /**
   * <p>A list of IAM roles that the cluster can use to access other Amazon Web Services services.</p>
   */
  IamRoles?: AwsRedshiftClusterIamRole[];

  /**
   * <p>The identifier of the KMS encryption key that is used to encrypt data in the
   *          cluster.</p>
   */
  KmsKeyId?: string;

  /**
   * <p>The name of the maintenance track for the cluster.</p>
   */
  MaintenanceTrackName?: string;

  /**
   * <p>The default number of days to retain a manual snapshot.</p>
   *          <p>If the value is <code>-1</code>, the snapshot is retained indefinitely.</p>
   *          <p>This setting doesn't change the retention period of existing snapshots.</p>
   *          <p>Valid values: Either <code>-1</code> or an integer between 1 and 3,653</p>
   */
  ManualSnapshotRetentionPeriod?: number;

  /**
   * <p>The master user name for the cluster. This name is used to connect to the database that
   *          is specified in as the value of <code>DBName</code>.</p>
   */
  MasterUsername?: string;

  /**
   * <p>Indicates the start of the next maintenance window.</p>
   *          <p>Uses the <code>date-time</code> format specified in <a href="https://tools.ietf.org/html/rfc3339#section-5.6">RFC 3339 section 5.6, Internet
   *             Date/Time Format</a>. The value cannot contain spaces. For example,
   *             <code>2020-03-22T13:22:13.933Z</code>.</p>
   */
  NextMaintenanceWindowStartTime?: string;

  /**
   * <p>The node type for the nodes in the cluster.</p>
   */
  NodeType?: string;

  /**
   * <p>The number of compute nodes in the cluster.</p>
   */
  NumberOfNodes?: number;

  /**
   * <p>A list of cluster operations that are waiting to start.</p>
   */
  PendingActions?: string[];

  /**
   * <p>A list of changes to the cluster that are currently pending.</p>
   */
  PendingModifiedValues?: AwsRedshiftClusterPendingModifiedValues;

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
   */
  PreferredMaintenanceWindow?: string;

  /**
   * <p>Whether the cluster can be accessed from a public network.</p>
   */
  PubliclyAccessible?: boolean;

  /**
   * <p>Information about the resize operation for the cluster.</p>
   */
  ResizeInfo?: AwsRedshiftClusterResizeInfo;

  /**
   * <p>Information about the status of a cluster restore action. Only applies to a cluster that
   *          was created by restoring a snapshot.</p>
   */
  RestoreStatus?: AwsRedshiftClusterRestoreStatus;

  /**
   * <p>A unique identifier for the cluster snapshot schedule.</p>
   */
  SnapshotScheduleIdentifier?: string;

  /**
   * <p>The current state of the cluster snapshot schedule.</p>
   *          <p>Valid values: <code>MODIFYING</code> | <code>ACTIVE</code> | <code>FAILED</code>
   *          </p>
   */
  SnapshotScheduleState?: string;

  /**
   * <p>The identifier of the VPC that the cluster is in, if the cluster is in a VPC.</p>
   */
  VpcId?: string;

  /**
   * <p>The list of VPC security groups that the cluster belongs to, if the cluster is in a
   *          VPC.</p>
   */
  VpcSecurityGroups?: AwsRedshiftClusterVpcSecurityGroup[];

  /**
   * <p>Information about the logging status of the cluster.</p>
   */
  LoggingStatus?: AwsRedshiftClusterLoggingStatus;
}

export namespace AwsRedshiftClusterDetails {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: AwsRedshiftClusterDetails): any => ({
    ...obj,
  });
}

/**
 * <p>provides information about the Amazon S3 Public Access Block configuration for accounts.</p>
 */
export interface AwsS3AccountPublicAccessBlockDetails {
  /**
   * <p>Indicates whether to reject calls to update an S3 bucket if the calls include a public access control list (ACL).</p>
   */
  BlockPublicAcls?: boolean;

  /**
   * <p>Indicates whether to reject calls to update the access policy for an S3 bucket or access point if the policy allows public access.</p>
   */
  BlockPublicPolicy?: boolean;

  /**
   * <p>Indicates whether Amazon S3 ignores public ACLs that are associated with an S3 bucket.</p>
   */
  IgnorePublicAcls?: boolean;

  /**
   * <p>Indicates whether to restrict access to an access point or S3 bucket that has a public policy to only Amazon Web Services service principals and authorized users within the S3 bucket owner's account.</p>
   */
  RestrictPublicBuckets?: boolean;
}

export namespace AwsS3AccountPublicAccessBlockDetails {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: AwsS3AccountPublicAccessBlockDetails): any => ({
    ...obj,
  });
}

/**
 * <p>Information about what Amazon S3
 *          does when a multipart upload is incomplete.</p>
 */
export interface AwsS3BucketBucketLifecycleConfigurationRulesAbortIncompleteMultipartUploadDetails {
  /**
   * <p>The number of days after which Amazon S3 cancels an incomplete multipart upload.</p>
   */
  DaysAfterInitiation?: number;
}

export namespace AwsS3BucketBucketLifecycleConfigurationRulesAbortIncompleteMultipartUploadDetails {
  /**
   * @internal
   */
  export const filterSensitiveLog = (
    obj: AwsS3BucketBucketLifecycleConfigurationRulesAbortIncompleteMultipartUploadDetails
  ): any => ({
    ...obj,
  });
}

/**
 * <p>A tag that is assigned to matching objects.</p>
 */
export interface AwsS3BucketBucketLifecycleConfigurationRulesFilterPredicateOperandsTagDetails {
  /**
   * <p>The tag key.</p>
   */
  Key?: string;

  /**
   * <p>The tag value.</p>
   */
  Value?: string;
}

export namespace AwsS3BucketBucketLifecycleConfigurationRulesFilterPredicateOperandsTagDetails {
  /**
   * @internal
   */
  export const filterSensitiveLog = (
    obj: AwsS3BucketBucketLifecycleConfigurationRulesFilterPredicateOperandsTagDetails
  ): any => ({
    ...obj,
  });
}

/**
 * <p>A value to use for the filter.</p>
 */
export interface AwsS3BucketBucketLifecycleConfigurationRulesFilterPredicateOperandsDetails {
  /**
   * <p>Prefix text for matching objects.</p>
   */
  Prefix?: string;

  /**
   * <p>A tag that is assigned to matching objects.</p>
   */
  Tag?: AwsS3BucketBucketLifecycleConfigurationRulesFilterPredicateOperandsTagDetails;

  /**
   * <p>The type of filter value.</p>
   */
  Type?: string;
}

export namespace AwsS3BucketBucketLifecycleConfigurationRulesFilterPredicateOperandsDetails {
  /**
   * @internal
   */
  export const filterSensitiveLog = (
    obj: AwsS3BucketBucketLifecycleConfigurationRulesFilterPredicateOperandsDetails
  ): any => ({
    ...obj,
  });
}

/**
 * <p>A tag filter.</p>
 */
export interface AwsS3BucketBucketLifecycleConfigurationRulesFilterPredicateTagDetails {
  /**
   * <p>The tag key.</p>
   */
  Key?: string;

  /**
   * <p>The tag value</p>
   */
  Value?: string;
}

export namespace AwsS3BucketBucketLifecycleConfigurationRulesFilterPredicateTagDetails {
  /**
   * @internal
   */
  export const filterSensitiveLog = (
    obj: AwsS3BucketBucketLifecycleConfigurationRulesFilterPredicateTagDetails
  ): any => ({
    ...obj,
  });
}

/**
 * <p>The configuration for the filter.</p>
 */
export interface AwsS3BucketBucketLifecycleConfigurationRulesFilterPredicateDetails {
  /**
   * <p>The values to use for the filter.</p>
   */
  Operands?: AwsS3BucketBucketLifecycleConfigurationRulesFilterPredicateOperandsDetails[];

  /**
   * <p>A prefix filter.</p>
   */
  Prefix?: string;

  /**
   * <p>A tag filter.</p>
   */
  Tag?: AwsS3BucketBucketLifecycleConfigurationRulesFilterPredicateTagDetails;

  /**
   * <p>Whether to use <code>AND</code> or <code>OR</code> to join the operands.</p>
   */
  Type?: string;
}

export namespace AwsS3BucketBucketLifecycleConfigurationRulesFilterPredicateDetails {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: AwsS3BucketBucketLifecycleConfigurationRulesFilterPredicateDetails): any => ({
    ...obj,
  });
}

/**
 * <p>Identifies the objects that a rule applies to.</p>
 */
export interface AwsS3BucketBucketLifecycleConfigurationRulesFilterDetails {
  /**
   * <p>The configuration for the filter.</p>
   */
  Predicate?: AwsS3BucketBucketLifecycleConfigurationRulesFilterPredicateDetails;
}

export namespace AwsS3BucketBucketLifecycleConfigurationRulesFilterDetails {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: AwsS3BucketBucketLifecycleConfigurationRulesFilterDetails): any => ({
    ...obj,
  });
}

/**
 * <p>A transition rule that describes when noncurrent objects transition to a specified storage class.</p>
 */
export interface AwsS3BucketBucketLifecycleConfigurationRulesNoncurrentVersionTransitionsDetails {
  /**
   * <p>The number of days that an object is noncurrent before Amazon S3 can perform the associated action.</p>
   */
  Days?: number;

  /**
   * <p>The class of storage to change the object to after the object is noncurrent for the specified number of days.</p>
   */
  StorageClass?: string;
}

export namespace AwsS3BucketBucketLifecycleConfigurationRulesNoncurrentVersionTransitionsDetails {
  /**
   * @internal
   */
  export const filterSensitiveLog = (
    obj: AwsS3BucketBucketLifecycleConfigurationRulesNoncurrentVersionTransitionsDetails
  ): any => ({
    ...obj,
  });
}

/**
 * <p>A rule for when objects transition to specific storage classes.</p>
 */
export interface AwsS3BucketBucketLifecycleConfigurationRulesTransitionsDetails {
  /**
   * <p>A date on which to transition objects to the specified storage class. If you provide <code>Date</code>, you cannot provide <code>Days</code>.</p>
   *          <p>Uses the <code>date-time</code> format specified in <a href="https://tools.ietf.org/html/rfc3339#section-5.6">RFC 3339 section 5.6, Internet
   *          Date/Time Format</a>. The value cannot contain spaces. For example,
   *          <code>2020-03-22T13:22:13.933Z</code>.</p>
   */
  Date?: string;

  /**
   * <p>The number of days after which to transition the object to the specified storage class. If you provide <code>Days</code>, you cannot provide <code>Date</code>.</p>
   */
  Days?: number;

  /**
   * <p>The storage class to transition the object to.</p>
   */
  StorageClass?: string;
}

export namespace AwsS3BucketBucketLifecycleConfigurationRulesTransitionsDetails {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: AwsS3BucketBucketLifecycleConfigurationRulesTransitionsDetails): any => ({
    ...obj,
  });
}

/**
 * <p>Configuration for a lifecycle rule.</p>
 */
export interface AwsS3BucketBucketLifecycleConfigurationRulesDetails {
  /**
   * <p>How Amazon S3 responds when a multipart upload is incomplete. Specifically, provides a number
   *          of days before Amazon S3 cancels the entire upload.</p>
   */
  AbortIncompleteMultipartUpload?: AwsS3BucketBucketLifecycleConfigurationRulesAbortIncompleteMultipartUploadDetails;

  /**
   * <p>The date when objects are moved or deleted.</p>
   *          <p>Uses the <code>date-time</code> format specified in <a href="https://tools.ietf.org/html/rfc3339#section-5.6">RFC 3339 section 5.6, Internet
   *          Date/Time Format</a>. The value cannot contain spaces. For example,
   *          <code>2020-03-22T13:22:13.933Z</code>.</p>
   */
  ExpirationDate?: string;

  /**
   * <p>The length in days of the lifetime for objects that are subject to the rule.</p>
   */
  ExpirationInDays?: number;

  /**
   * <p>Whether Amazon S3 removes a delete marker that has no noncurrent versions. If set to
   *          <code>true</code>, the delete marker is expired. If set to <code>false</code>, the policy
   *          takes no action.</p>
   *          <p>If you provide <code>ExpiredObjectDeleteMarker</code>, you cannot provide
   *          <code>ExpirationInDays</code> or <code>ExpirationDate</code>.</p>
   */
  ExpiredObjectDeleteMarker?: boolean;

  /**
   * <p>Identifies the objects that a rule applies to.</p>
   */
  Filter?: AwsS3BucketBucketLifecycleConfigurationRulesFilterDetails;

  /**
   * <p>The unique identifier of the rule.</p>
   */
  ID?: string;

  /**
   * <p>The number of days that an object is noncurrent before Amazon S3 can perform the associated action.</p>
   */
  NoncurrentVersionExpirationInDays?: number;

  /**
   * <p>Transition rules that describe when noncurrent objects transition to a specified storage class.</p>
   */
  NoncurrentVersionTransitions?: AwsS3BucketBucketLifecycleConfigurationRulesNoncurrentVersionTransitionsDetails[];

  /**
   * <p>A prefix that identifies one or more objects that the rule applies to.</p>
   */
  Prefix?: string;

  /**
   * <p>The current status of the rule. Indicates whether the rule is currently being applied.</p>
   */
  Status?: string;

  /**
   * <p>Transition rules that indicate when objects transition to a specified storage class.</p>
   */
  Transitions?: AwsS3BucketBucketLifecycleConfigurationRulesTransitionsDetails[];
}

export namespace AwsS3BucketBucketLifecycleConfigurationRulesDetails {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: AwsS3BucketBucketLifecycleConfigurationRulesDetails): any => ({
    ...obj,
  });
}

/**
 * <p>The lifecycle configuration for the objects in the S3 bucket.</p>
 */
export interface AwsS3BucketBucketLifecycleConfigurationDetails {
  /**
   * <p>The lifecycle rules.</p>
   */
  Rules?: AwsS3BucketBucketLifecycleConfigurationRulesDetails[];
}

export namespace AwsS3BucketBucketLifecycleConfigurationDetails {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: AwsS3BucketBucketLifecycleConfigurationDetails): any => ({
    ...obj,
  });
}

/**
 * <p>Describes the versioning state of an S3 bucket.</p>
 */
export interface AwsS3BucketBucketVersioningConfiguration {
  /**
   * <p>Specifies whether MFA delete is currently enabled in the S3 bucket versioning configuration. If the S3 bucket was never configured with MFA delete, then this attribute is not included.</p>
   */
  IsMfaDeleteEnabled?: boolean;

  /**
   * <p>The versioning status of the S3 bucket.</p>
   */
  Status?: string;
}

export namespace AwsS3BucketBucketVersioningConfiguration {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: AwsS3BucketBucketVersioningConfiguration): any => ({
    ...obj,
  });
}

/**
 * <p>Information about logging for
 *          the S3 bucket</p>
 */
export interface AwsS3BucketLoggingConfiguration {
  /**
   * <p>The name of the S3 bucket where log files for the S3 bucket are stored.</p>
   */
  DestinationBucketName?: string;

  /**
   * <p>The prefix added to log files for the S3 bucket.</p>
   */
  LogFilePrefix?: string;
}

export namespace AwsS3BucketLoggingConfiguration {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: AwsS3BucketLoggingConfiguration): any => ({
    ...obj,
  });
}

export enum AwsS3BucketNotificationConfigurationS3KeyFilterRuleName {
  PREFIX = "Prefix",
  SUFFIX = "Suffix",
}

/**
 * <p>Details for a filter rule.</p>
 */
export interface AwsS3BucketNotificationConfigurationS3KeyFilterRule {
  /**
   * <p>Indicates whether the filter is based on the prefix or suffix of the Amazon S3 key.</p>
   */
  Name?: AwsS3BucketNotificationConfigurationS3KeyFilterRuleName | string;

  /**
   * <p>The filter value.</p>
   */
  Value?: string;
}

export namespace AwsS3BucketNotificationConfigurationS3KeyFilterRule {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: AwsS3BucketNotificationConfigurationS3KeyFilterRule): any => ({
    ...obj,
  });
}

/**
 * <p>Details for an Amazon S3 filter.</p>
 */
export interface AwsS3BucketNotificationConfigurationS3KeyFilter {
  /**
   * <p>The filter rules for the filter.</p>
   */
  FilterRules?: AwsS3BucketNotificationConfigurationS3KeyFilterRule[];
}

export namespace AwsS3BucketNotificationConfigurationS3KeyFilter {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: AwsS3BucketNotificationConfigurationS3KeyFilter): any => ({
    ...obj,
  });
}

/**
 * <p>Filtering information for the notifications. The
 *          filtering is based on Amazon S3 key names.</p>
 */
export interface AwsS3BucketNotificationConfigurationFilter {
  /**
   * <p>Details for an Amazon S3 filter.</p>
   */
  S3KeyFilter?: AwsS3BucketNotificationConfigurationS3KeyFilter;
}

export namespace AwsS3BucketNotificationConfigurationFilter {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: AwsS3BucketNotificationConfigurationFilter): any => ({
    ...obj,
  });
}

/**
 * <p>Details for an S3 bucket notification configuration.</p>
 */
export interface AwsS3BucketNotificationConfigurationDetail {
  /**
   * <p>The list of events that trigger a notification.</p>
   */
  Events?: string[];

  /**
   * <p>The filters that determine which S3 buckets generate notifications.</p>
   */
  Filter?: AwsS3BucketNotificationConfigurationFilter;

  /**
   * <p>The ARN of the Lambda function, Amazon SQS queue, or Amazon SNS topic that generates the
   *          notification.</p>
   */
  Destination?: string;

  /**
   * <p>Indicates the type of notification. Notifications can be generated using Lambda functions,
   *          Amazon SQS queues or Amazon SNS topics.</p>
   */
  Type?: string;
}

export namespace AwsS3BucketNotificationConfigurationDetail {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: AwsS3BucketNotificationConfigurationDetail): any => ({
    ...obj,
  });
}

/**
 * <p>The notification
 *          configuration for the S3 bucket.</p>
 */
export interface AwsS3BucketNotificationConfiguration {
  /**
   * <p>Configurations for S3 bucket notifications.</p>
   */
  Configurations?: AwsS3BucketNotificationConfigurationDetail[];
}

export namespace AwsS3BucketNotificationConfiguration {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: AwsS3BucketNotificationConfiguration): any => ({
    ...obj,
  });
}

/**
 * <p>The redirect behavior for requests
 *          to the website.</p>
 */
export interface AwsS3BucketWebsiteConfigurationRedirectTo {
  /**
   * <p>The name of the host to redirect requests to.</p>
   */
  Hostname?: string;

  /**
   * <p>The protocol to use when redirecting requests. By default, uses the same protocol as the
   *          original request.</p>
   */
  Protocol?: string;
}

export namespace AwsS3BucketWebsiteConfigurationRedirectTo {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: AwsS3BucketWebsiteConfigurationRedirectTo): any => ({
    ...obj,
  });
}

/**
 * <p>The condition that must be met in order to apply the routing rule.</p>
 */
export interface AwsS3BucketWebsiteConfigurationRoutingRuleCondition {
  /**
   * <p>Indicates to redirect the request if the HTTP error code matches this value.</p>
   */
  HttpErrorCodeReturnedEquals?: string;

  /**
   * <p>Indicates to redirect the request if the key prefix matches this value.</p>
   */
  KeyPrefixEquals?: string;
}

export namespace AwsS3BucketWebsiteConfigurationRoutingRuleCondition {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: AwsS3BucketWebsiteConfigurationRoutingRuleCondition): any => ({
    ...obj,
  });
}

/**
 * <p>The rules to redirect the request if the condition in <code>Condition</code> is
 *          met.</p>
 */
export interface AwsS3BucketWebsiteConfigurationRoutingRuleRedirect {
  /**
   * <p>The host name to use in the redirect request.</p>
   */
  Hostname?: string;

  /**
   * <p>The HTTP redirect code to use in the response.</p>
   */
  HttpRedirectCode?: string;

  /**
   * <p>The protocol to use to redirect the request. By default, uses the protocol from the
   *          original request.</p>
   */
  Protocol?: string;

  /**
   * <p>The object key prefix to use in the redirect request.</p>
   *          <p>Cannot be provided if <code>ReplaceKeyWith</code> is present.</p>
   */
  ReplaceKeyPrefixWith?: string;

  /**
   * <p>The specific object key to use in the redirect request.</p>
   *          <p>Cannot be provided if <code>ReplaceKeyPrefixWith</code> is present.</p>
   */
  ReplaceKeyWith?: string;
}

export namespace AwsS3BucketWebsiteConfigurationRoutingRuleRedirect {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: AwsS3BucketWebsiteConfigurationRoutingRuleRedirect): any => ({
    ...obj,
  });
}

/**
 * <p>A rule for redirecting requests
 *          to the website.</p>
 */
export interface AwsS3BucketWebsiteConfigurationRoutingRule {
  /**
   * <p>Provides the condition that must be met in order to apply the routing rule.</p>
   */
  Condition?: AwsS3BucketWebsiteConfigurationRoutingRuleCondition;

  /**
   * <p>Provides the rules to redirect the request if the condition in <code>Condition</code> is
   *          met.</p>
   */
  Redirect?: AwsS3BucketWebsiteConfigurationRoutingRuleRedirect;
}

export namespace AwsS3BucketWebsiteConfigurationRoutingRule {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: AwsS3BucketWebsiteConfigurationRoutingRule): any => ({
    ...obj,
  });
}

/**
 * <p>Website parameters for the S3
 *          bucket.</p>
 */
export interface AwsS3BucketWebsiteConfiguration {
  /**
   * <p>The name of the error document for the website.</p>
   */
  ErrorDocument?: string;

  /**
   * <p>The name of the index document for the website.</p>
   */
  IndexDocumentSuffix?: string;

  /**
   * <p>The redirect behavior for requests to the website.</p>
   */
  RedirectAllRequestsTo?: AwsS3BucketWebsiteConfigurationRedirectTo;

  /**
   * <p>The rules for applying redirects for requests to the website.</p>
   */
  RoutingRules?: AwsS3BucketWebsiteConfigurationRoutingRule[];
}

export namespace AwsS3BucketWebsiteConfiguration {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: AwsS3BucketWebsiteConfiguration): any => ({
    ...obj,
  });
}

/**
 * <p>Specifies the default server-side encryption to apply to new objects in the
 *          bucket.</p>
 */
export interface AwsS3BucketServerSideEncryptionByDefault {
  /**
   * <p>Server-side encryption algorithm to use for the default encryption.</p>
   */
  SSEAlgorithm?: string;

  /**
   * <p>KMS key ID to use for the default encryption.</p>
   */
  KMSMasterKeyID?: string;
}

export namespace AwsS3BucketServerSideEncryptionByDefault {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: AwsS3BucketServerSideEncryptionByDefault): any => ({
    ...obj,
  });
}

/**
 * <p>An encryption rule to apply to the S3 bucket.</p>
 */
export interface AwsS3BucketServerSideEncryptionRule {
  /**
   * <p>Specifies the default server-side encryption to apply to new objects in the bucket. If a
   *             <code>PUT</code> object request doesn't specify any server-side encryption, this default
   *          encryption is applied.</p>
   */
  ApplyServerSideEncryptionByDefault?: AwsS3BucketServerSideEncryptionByDefault;
}

export namespace AwsS3BucketServerSideEncryptionRule {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: AwsS3BucketServerSideEncryptionRule): any => ({
    ...obj,
  });
}

/**
 * <p>The encryption configuration for the S3 bucket.</p>
 */
export interface AwsS3BucketServerSideEncryptionConfiguration {
  /**
   * <p>The encryption rules that are applied to the S3 bucket.</p>
   */
  Rules?: AwsS3BucketServerSideEncryptionRule[];
}

export namespace AwsS3BucketServerSideEncryptionConfiguration {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: AwsS3BucketServerSideEncryptionConfiguration): any => ({
    ...obj,
  });
}

/**
 * <p>The details of an Amazon S3 bucket.</p>
 */
export interface AwsS3BucketDetails {
  /**
   * <p>The canonical user ID of the owner of the S3 bucket.</p>
   */
  OwnerId?: string;

  /**
   * <p>The display name of the owner of the S3 bucket.</p>
   */
  OwnerName?: string;

  /**
   * <p>The Amazon Web Services account identifier of the account that owns the S3 bucket.</p>
   */
  OwnerAccountId?: string;

  /**
   * <p>Indicates when the S3 bucket was created.</p>
   *          <p>Uses the <code>date-time</code> format specified in <a href="https://tools.ietf.org/html/rfc3339#section-5.6">RFC 3339 section 5.6, Internet
   *             Date/Time Format</a>. The value cannot contain spaces. For example,
   *             <code>2020-03-22T13:22:13.933Z</code>.</p>
   */
  CreatedAt?: string;

  /**
   * <p>The encryption rules that are applied to the S3 bucket.</p>
   */
  ServerSideEncryptionConfiguration?: AwsS3BucketServerSideEncryptionConfiguration;

  /**
   * <p>The lifecycle configuration for objects in the S3 bucket.</p>
   */
  BucketLifecycleConfiguration?: AwsS3BucketBucketLifecycleConfigurationDetails;

  /**
   * <p>Provides information about the Amazon S3 Public Access Block configuration for the S3 bucket.</p>
   */
  PublicAccessBlockConfiguration?: AwsS3AccountPublicAccessBlockDetails;

  /**
   * <p>The access control list for the S3 bucket.</p>
   */
  AccessControlList?: string;

  /**
   * <p>The logging configuration for the S3 bucket.</p>
   */
  BucketLoggingConfiguration?: AwsS3BucketLoggingConfiguration;

  /**
   * <p>The website configuration parameters for the S3 bucket.</p>
   */
  BucketWebsiteConfiguration?: AwsS3BucketWebsiteConfiguration;

  /**
   * <p>The notification configuration for the S3 bucket.</p>
   */
  BucketNotificationConfiguration?: AwsS3BucketNotificationConfiguration;

  /**
   * <p>The versioning state of an S3 bucket.</p>
   */
  BucketVersioningConfiguration?: AwsS3BucketBucketVersioningConfiguration;
}

export namespace AwsS3BucketDetails {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: AwsS3BucketDetails): any => ({
    ...obj,
  });
}

/**
 * <p>Details about an Amazon S3 object.</p>
 */
export interface AwsS3ObjectDetails {
  /**
   * <p>Indicates when the object was last modified.</p>
   *          <p>Uses the <code>date-time</code> format specified in <a href="https://tools.ietf.org/html/rfc3339#section-5.6">RFC 3339 section 5.6, Internet
   *             Date/Time Format</a>. The value cannot contain spaces. For example,
   *             <code>2020-03-22T13:22:13.933Z</code>.</p>
   */
  LastModified?: string;

  /**
   * <p>The opaque identifier assigned by a web server to a specific version of a resource found
   *          at a URL.</p>
   */
  ETag?: string;

  /**
   * <p>The version of the object.</p>
   */
  VersionId?: string;

  /**
   * <p>A standard MIME type describing the format of the object data.</p>
   */
  ContentType?: string;

  /**
   * <p>If the object is stored using server-side encryption, the value of the server-side
   *          encryption algorithm used when storing this object in Amazon S3.</p>
   */
  ServerSideEncryption?: string;

  /**
   * <p>The identifier of the KMS symmetric customer managed key that was used for the object.</p>
   */
  SSEKMSKeyId?: string;
}

export namespace AwsS3ObjectDetails {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: AwsS3ObjectDetails): any => ({
    ...obj,
  });
}

/**
 * <p>Defines the rotation schedule for the secret.</p>
 */
export interface AwsSecretsManagerSecretRotationRules {
  /**
   * <p>The number of days after the previous rotation to rotate the secret.</p>
   */
  AutomaticallyAfterDays?: number;
}

export namespace AwsSecretsManagerSecretRotationRules {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: AwsSecretsManagerSecretRotationRules): any => ({
    ...obj,
  });
}

/**
 * <p>Details about an Secrets Manager secret.</p>
 */
export interface AwsSecretsManagerSecretDetails {
  /**
   * <p>Defines the rotation schedule for the secret.</p>
   */
  RotationRules?: AwsSecretsManagerSecretRotationRules;

  /**
   * <p>Whether the rotation occurred within the specified rotation frequency.</p>
   */
  RotationOccurredWithinFrequency?: boolean;

  /**
   * <p>The ARN, Key ID, or alias of the KMS key used to encrypt the
   *             <code>SecretString</code> or <code>SecretBinary</code> values for versions of this
   *          secret.</p>
   */
  KmsKeyId?: string;

  /**
   * <p>Whether rotation is enabled.</p>
   */
  RotationEnabled?: boolean;

  /**
   * <p>The ARN of the Lambda function that rotates the secret.</p>
   */
  RotationLambdaArn?: string;

  /**
   * <p>Whether the secret is deleted.</p>
   */
  Deleted?: boolean;

  /**
   * <p>The name of the secret.</p>
   */
  Name?: string;

  /**
   * <p>The user-provided description of the secret.</p>
   */
  Description?: string;
}

export namespace AwsSecretsManagerSecretDetails {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: AwsSecretsManagerSecretDetails): any => ({
    ...obj,
  });
}

export enum ComplianceStatus {
  FAILED = "FAILED",
  NOT_AVAILABLE = "NOT_AVAILABLE",
  PASSED = "PASSED",
  WARNING = "WARNING",
}

/**
 * <p>Provides additional context for the value of <code>Compliance.Status</code>.</p>
 */
export interface StatusReason {
  /**
   * <p>A code that represents a reason for the control status. For the list of status reason
   *          codes and their meanings, see <a href="https://docs.aws.amazon.com/securityhub/latest/userguide/securityhub-standards-results.html#securityhub-standards-results-asff">Standards-related information in the ASFF</a> in the
   *             <i>Security Hub User Guide</i>. </p>
   */
  ReasonCode: string | undefined;

  /**
   * <p>The corresponding description for the status reason code.</p>
   */
  Description?: string;
}

export namespace StatusReason {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: StatusReason): any => ({
    ...obj,
  });
}

/**
 * <p>Contains finding details that are specific to control-based findings. Only returned for
 *          findings generated from controls.</p>
 */
export interface Compliance {
  /**
   * <p>The result of a standards check.</p>
   *          <p>The valid values for <code>Status</code> are as follows.</p>
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
   *                      <code>NOT_APPLICABLE</code>, then after 3 days, Security Hub automatically archives
   *                      the finding.</p>
   *                   </li>
   *                </ul>
   *             </li>
   *          </ul>
   */
  Status?: ComplianceStatus | string;

  /**
   * <p>For a control, the industry or regulatory framework requirements that are related to the
   *          control. The check for that control is aligned with these requirements.</p>
   */
  RelatedRequirements?: string[];

  /**
   * <p>For findings generated from controls, a list of reasons behind the value of
   *             <code>Status</code>. For the list of status reason codes and their meanings, see <a href="https://docs.aws.amazon.com/securityhub/latest/userguide/securityhub-standards-results.html#securityhub-standards-results-asff">Standards-related information in the ASFF</a> in the
   *             <i>Security Hub User Guide</i>. </p>
   */
  StatusReasons?: StatusReason[];
}

export namespace Compliance {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: Compliance): any => ({
    ...obj,
  });
}

export enum SeverityLabel {
  CRITICAL = "CRITICAL",
  HIGH = "HIGH",
  INFORMATIONAL = "INFORMATIONAL",
  LOW = "LOW",
  MEDIUM = "MEDIUM",
}

/**
 * <p>The severity assigned to the finding by the finding provider.</p>
 */
export interface FindingProviderSeverity {
  /**
   * <p>The severity label assigned to the finding by the finding provider.</p>
   */
  Label?: SeverityLabel | string;

  /**
   * <p>The finding provider's original value for the severity.</p>
   */
  Original?: string;
}

export namespace FindingProviderSeverity {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: FindingProviderSeverity): any => ({
    ...obj,
  });
}

/**
 * <p>In a <code>BatchImportFindings</code> request, finding providers use <code>FindingProviderFields</code> to provide and update values for confidence, criticality, related findings, severity, and types.</p>
 */
export interface FindingProviderFields {
  /**
   * <p>A finding's confidence. Confidence is defined as the likelihood that a finding
   *          accurately identifies the behavior or issue that it was intended to identify.</p>
   *          <p>Confidence is scored on a 0-100 basis using a ratio scale, where 0 means zero percent
   *          confidence and 100 means 100 percent confidence.</p>
   */
  Confidence?: number;

  /**
   * <p>The level of importance assigned to the resources associated with the finding.</p>
   *          <p>A score of 0 means that the underlying resources have no criticality, and a score of 100
   *          is reserved for the most critical resources.</p>
   */
  Criticality?: number;

  /**
   * <p>A list of findings that are related to the current finding.</p>
   */
  RelatedFindings?: RelatedFinding[];

  /**
   * <p>The severity of a finding.</p>
   */
  Severity?: FindingProviderSeverity;

  /**
   * <p>One or more finding types in the format of <code>namespace/category/classifier</code>
   *          that classify a finding.</p>
   *          <p>Valid namespace values are: Software and Configuration Checks | TTPs | Effects | Unusual
   *          Behaviors | Sensitive Data Identifications</p>
   */
  Types?: string[];
}

export namespace FindingProviderFields {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: FindingProviderFields): any => ({
    ...obj,
  });
}

/**
 * <p>A list of malware related to a finding.</p>
 */
export interface Malware {
  /**
   * <p>The name of the malware that was observed.</p>
   */
  Name: string | undefined;

  /**
   * <p>The type of the malware that was observed.</p>
   */
  Type?: MalwareType | string;

  /**
   * <p>The file system path of the malware that was observed.</p>
   */
  Path?: string;

  /**
   * <p>The state of the malware that was observed.</p>
   */
  State?: MalwareState | string;
}

export namespace Malware {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: Malware): any => ({
    ...obj,
  });
}

/**
 * <p>A range of ports.</p>
 */
export interface PortRange {
  /**
   * <p>The first port in the port range.</p>
   */
  Begin?: number;

  /**
   * <p>The last port in the port range.</p>
   */
  End?: number;
}

export namespace PortRange {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: PortRange): any => ({
    ...obj,
  });
}

/**
 * <p>The details of network-related information about a finding.</p>
 */
export interface Network {
  /**
   * <p>The direction of network traffic associated with a finding.</p>
   */
  Direction?: NetworkDirection | string;

  /**
   * <p>The protocol of network-related information about a finding.</p>
   */
  Protocol?: string;

  /**
   * <p>The range of open ports that is present on the network.</p>
   */
  OpenPortRange?: PortRange;

  /**
   * <p>The source IPv4 address of network-related information about a finding.</p>
   */
  SourceIpV4?: string;

  /**
   * <p>The source IPv6 address of network-related information about a finding.</p>
   */
  SourceIpV6?: string;

  /**
   * <p>The source port of network-related information about a finding.</p>
   */
  SourcePort?: number;

  /**
   * <p>The source domain of network-related information about a finding.</p>
   */
  SourceDomain?: string;

  /**
   * <p>The source media access control (MAC) address of network-related information about a
   *          finding.</p>
   */
  SourceMac?: string;

  /**
   * <p>The destination IPv4 address of network-related information about a finding.</p>
   */
  DestinationIpV4?: string;

  /**
   * <p>The destination IPv6 address of network-related information about a finding.</p>
   */
  DestinationIpV6?: string;

  /**
   * <p>The destination port of network-related information about a finding.</p>
   */
  DestinationPort?: number;

  /**
   * <p>The destination domain of network-related information about a finding.</p>
   */
  DestinationDomain?: string;
}

export namespace Network {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: Network): any => ({
    ...obj,
  });
}

/**
 * <p>Information about the destination of the next component in the network path.</p>
 */
export interface NetworkPathComponentDetails {
  /**
   * <p>The IP addresses of the destination.</p>
   */
  Address?: string[];

  /**
   * <p>A list of port ranges for the destination.</p>
   */
  PortRanges?: PortRange[];
}

export namespace NetworkPathComponentDetails {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: NetworkPathComponentDetails): any => ({
    ...obj,
  });
}

/**
 * <p>Details about a network path component that occurs before or after the current
 *          component.</p>
 */
export interface NetworkHeader {
  /**
   * <p>The protocol used for the component.</p>
   */
  Protocol?: string;

  /**
   * <p>Information about the destination of the component.</p>
   */
  Destination?: NetworkPathComponentDetails;

  /**
   * <p>Information about the origin of the component.</p>
   */
  Source?: NetworkPathComponentDetails;
}

export namespace NetworkHeader {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: NetworkHeader): any => ({
    ...obj,
  });
}

/**
 * <p>Information about a network path component.</p>
 */
export interface NetworkPathComponent {
  /**
   * <p>The identifier of a component in the network path.</p>
   */
  ComponentId?: string;

  /**
   * <p>The type of component.</p>
   */
  ComponentType?: string;

  /**
   * <p>Information about the component that comes after the current component in the network
   *          path.</p>
   */
  Egress?: NetworkHeader;

  /**
   * <p>Information about the component that comes before the current node in the network
   *          path.</p>
   */
  Ingress?: NetworkHeader;
}

export namespace NetworkPathComponent {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: NetworkPathComponent): any => ({
    ...obj,
  });
}

/**
 * <p>A user-defined note added to a finding.</p>
 */
export interface Note {
  /**
   * <p>The text of a note.</p>
   */
  Text: string | undefined;

  /**
   * <p>The principal that created a note.</p>
   */
  UpdatedBy: string | undefined;

  /**
   * <p>The timestamp of when the note was updated.</p>
   *          <p>Uses the <code>date-time</code> format specified in <a href="https://tools.ietf.org/html/rfc3339#section-5.6">RFC 3339 section 5.6, Internet
   *             Date/Time Format</a>. The value cannot contain spaces. For example,
   *             <code>2020-03-22T13:22:13.933Z</code>.</p>
   */
  UpdatedAt: string | undefined;
}

export namespace Note {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: Note): any => ({
    ...obj,
  });
}

/**
 * <p>Provides an overview of the patch compliance status for an instance against a selected
 *          compliance standard.</p>
 */
export interface PatchSummary {
  /**
   * <p>The identifier of the compliance standard that was used to determine the patch
   *          compliance status.</p>
   */
  Id: string | undefined;

  /**
   * <p>The number of patches from the compliance standard that were installed
   *          successfully.</p>
   */
  InstalledCount?: number;

  /**
   * <p>The number of patches that are part of the compliance standard but are not installed.
   *          The count includes patches that failed to install.</p>
   */
  MissingCount?: number;

  /**
   * <p>The number of patches from the compliance standard that failed to install.</p>
   */
  FailedCount?: number;

  /**
   * <p>The number of installed patches that are not part of the compliance standard.</p>
   */
  InstalledOtherCount?: number;

  /**
   * <p>The number of patches that are installed but are also on a list of patches that the
   *          customer rejected.</p>
   */
  InstalledRejectedCount?: number;

  /**
   * <p>The number of patches that were applied, but that require the instance to be rebooted in
   *          order to be marked as installed.</p>
   */
  InstalledPendingReboot?: number;

  /**
   * <p>Indicates when the operation started.</p>
   *          <p>Uses the <code>date-time</code> format specified in <a href="https://tools.ietf.org/html/rfc3339#section-5.6">RFC 3339 section 5.6, Internet
   *             Date/Time Format</a>. The value cannot contain spaces. For example,
   *             <code>2020-03-22T13:22:13.933Z</code>.</p>
   */
  OperationStartTime?: string;

  /**
   * <p>Indicates when the operation completed.</p>
   *          <p>Uses the <code>date-time</code> format specified in <a href="https://tools.ietf.org/html/rfc3339#section-5.6">RFC 3339 section 5.6, Internet
   *             Date/Time Format</a>. The value cannot contain spaces. For example,
   *             <code>2020-03-22T13:22:13.933Z</code>.</p>
   */
  OperationEndTime?: string;

  /**
   * <p>The reboot option specified for the instance.</p>
   */
  RebootOption?: string;

  /**
   * <p>The type of patch operation performed. For Patch Manager, the values are
   *             <code>SCAN</code> and <code>INSTALL</code>. </p>
   */
  Operation?: string;
}

export namespace PatchSummary {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: PatchSummary): any => ({
    ...obj,
  });
}

/**
 * <p>The details of process-related information about a finding.</p>
 */
export interface ProcessDetails {
  /**
   * <p>The name of the process.</p>
   */
  Name?: string;

  /**
   * <p>The path to the process executable.</p>
   */
  Path?: string;

  /**
   * <p>The process ID.</p>
   */
  Pid?: number;

  /**
   * <p>The parent process ID.</p>
   */
  ParentPid?: number;

  /**
   * <p>Indicates when the process was launched.</p>
   *          <p>Uses the <code>date-time</code> format specified in <a href="https://tools.ietf.org/html/rfc3339#section-5.6">RFC 3339 section 5.6, Internet
   *             Date/Time Format</a>. The value cannot contain spaces. For example,
   *             <code>2020-03-22T13:22:13.933Z</code>.</p>
   */
  LaunchedAt?: string;

  /**
   * <p>Indicates when the process was terminated.</p>
   *          <p>Uses the <code>date-time</code> format specified in <a href="https://tools.ietf.org/html/rfc3339#section-5.6">RFC 3339 section 5.6, Internet
   *             Date/Time Format</a>. The value cannot contain spaces. For example,
   *             <code>2020-03-22T13:22:13.933Z</code>.</p>
   */
  TerminatedAt?: string;
}

export namespace ProcessDetails {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ProcessDetails): any => ({
    ...obj,
  });
}

/**
 * <p>A recommendation on how to remediate the issue identified in a finding.</p>
 */
export interface Recommendation {
  /**
   * <p>Describes the recommended steps to take to remediate an issue identified in a finding.</p>
   */
  Text?: string;

  /**
   * <p>A URL to a page or site that contains information about how to remediate a finding.</p>
   */
  Url?: string;
}

export namespace Recommendation {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: Recommendation): any => ({
    ...obj,
  });
}

/**
 * <p>Details about the remediation steps for a finding.</p>
 */
export interface Remediation {
  /**
   * <p>A recommendation on the steps to take to remediate the issue identified by a finding.</p>
   */
  Recommendation?: Recommendation;
}

export namespace Remediation {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: Remediation): any => ({
    ...obj,
  });
}

/**
 * <p>An occurrence of sensitive data detected in a Microsoft Excel workbook, comma-separated value (CSV) file, or tab-separated value (TSV) file.</p>
 */
export interface Cell {
  /**
   * <p>The column number of the column that contains the data. For a Microsoft Excel workbook, the column number corresponds to the alphabetical column identifiers. For example, a value of 1 for Column corresponds to the A column in the workbook.</p>
   */
  Column?: number;

  /**
   * <p>The row number of the row that contains the data.</p>
   */
  Row?: number;

  /**
   * <p>The name of the column that contains the data.</p>
   */
  ColumnName?: string;

  /**
   * <p>For a Microsoft Excel workbook, provides the location of the cell, as an absolute cell reference, that contains the data. For example, Sheet2!C5 for cell C5 on Sheet2.</p>
   */
  CellReference?: string;
}

export namespace Cell {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: Cell): any => ({
    ...obj,
  });
}

/**
 * <p>Identifies where the sensitive data begins and ends.</p>
 */
export interface Range {
  /**
   * <p>The number of lines (for a line range) or characters (for an offset range) from the beginning of the file to the end of the sensitive data.</p>
   */
  Start?: number;

  /**
   * <p>The number of lines (for a line range) or characters (for an offset range) from the beginning of the file to the end of the sensitive data.</p>
   */
  End?: number;

  /**
   * <p>In the line where the sensitive data starts, the column within the line where the sensitive data starts.</p>
   */
  StartColumn?: number;
}

export namespace Range {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: Range): any => ({
    ...obj,
  });
}

/**
 * <p>An occurrence of sensitive data in an Adobe Portable Document Format (PDF) file.</p>
 */
export interface Page {
  /**
   * <p>The page number of the page that contains the sensitive data.</p>
   */
  PageNumber?: number;

  /**
   * <p>An occurrence of sensitive data detected in a non-binary text file or a Microsoft Word file. Non-binary text files include files such as HTML, XML, JSON, and TXT files.</p>
   */
  LineRange?: Range;

  /**
   * <p>An occurrence of sensitive data detected in a binary text file.</p>
   */
  OffsetRange?: Range;
}

export namespace Page {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: Page): any => ({
    ...obj,
  });
}

/**
 * <p>An occurrence of sensitive data in an Apache Avro object container or an Apache Parquet file.</p>
 */
export interface _Record {
  /**
   * <p>The path, as a JSONPath expression, to the field in the record that contains the data. If the field name is longer than 20 characters, it is truncated. If the path is longer than 250 characters, it is truncated.</p>
   */
  JsonPath?: string;

  /**
   * <p>The record index, starting from 0, for the record that contains the data.</p>
   */
  RecordIndex?: number;
}

export namespace _Record {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: _Record): any => ({
    ...obj,
  });
}

/**
 * <p>The detected occurrences of sensitive data.</p>
 */
export interface Occurrences {
  /**
   * <p>Occurrences of sensitive data detected in a non-binary text file or a Microsoft Word file. Non-binary text files include files such as HTML, XML, JSON, and TXT files.</p>
   */
  LineRanges?: Range[];

  /**
   * <p>Occurrences of sensitive data detected in a binary text file.</p>
   */
  OffsetRanges?: Range[];

  /**
   * <p>Occurrences of sensitive data in an Adobe Portable Document Format (PDF) file.</p>
   */
  Pages?: Page[];

  /**
   * <p>Occurrences of sensitive data in an Apache Avro object container or an Apache Parquet file.</p>
   */
  Records?: _Record[];

  /**
   * <p>Occurrences of sensitive data detected in Microsoft Excel workbooks, comma-separated value (CSV) files, or tab-separated value (TSV) files.</p>
   */
  Cells?: Cell[];
}

export namespace Occurrences {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: Occurrences): any => ({
    ...obj,
  });
}

/**
 * <p>The list of detected instances of sensitive data.</p>
 */
export interface CustomDataIdentifiersDetections {
  /**
   * <p>The total number of occurrences of sensitive data that were detected.</p>
   */
  Count?: number;

  /**
   * <p>The ARN of the custom identifier that was used to detect the sensitive data.</p>
   */
  Arn?: string;

  /**
   * <p>he name of the custom identifier that detected the sensitive data.</p>
   */
  Name?: string;

  /**
   * <p>Details about the sensitive data that was detected.</p>
   */
  Occurrences?: Occurrences;
}

export namespace CustomDataIdentifiersDetections {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: CustomDataIdentifiersDetections): any => ({
    ...obj,
  });
}

/**
 * <p>Contains an instance of sensitive data that was detected by a customer-defined identifier.</p>
 */
export interface CustomDataIdentifiersResult {
  /**
   * <p>The list of detected instances of sensitive data.</p>
   */
  Detections?: CustomDataIdentifiersDetections[];

  /**
   * <p>The total number of occurrences of sensitive data.</p>
   */
  TotalCount?: number;
}

export namespace CustomDataIdentifiersResult {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: CustomDataIdentifiersResult): any => ({
    ...obj,
  });
}

/**
 * <p>The list of detected instances of sensitive data.</p>
 */
export interface SensitiveDataDetections {
  /**
   * <p>The total number of occurrences of sensitive data that were detected.</p>
   */
  Count?: number;

  /**
   * <p>The type of sensitive data that was detected. For example, the type might indicate that the data is an email address.</p>
   */
  Type?: string;

  /**
   * <p>Details about the sensitive data that was detected.</p>
   */
  Occurrences?: Occurrences;
}

export namespace SensitiveDataDetections {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: SensitiveDataDetections): any => ({
    ...obj,
  });
}

/**
 * <p>Contains a detected instance of sensitive data that are based on built-in identifiers.</p>
 */
export interface SensitiveDataResult {
  /**
   * <p>The category of sensitive data that was detected. For example, the category can indicate that the sensitive data involved credentials, financial information, or personal information.</p>
   */
  Category?: string;

  /**
   * <p>The list of detected instances of sensitive data.</p>
   */
  Detections?: SensitiveDataDetections[];

  /**
   * <p>The total number of occurrences of sensitive data.</p>
   */
  TotalCount?: number;
}

export namespace SensitiveDataResult {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: SensitiveDataResult): any => ({
    ...obj,
  });
}

/**
 * <p>Provides details about the current status of the sensitive data detection.</p>
 */
export interface ClassificationStatus {
  /**
   * <p>The code that represents the status of the sensitive data detection.</p>
   */
  Code?: string;

  /**
   * <p>A longer description of the current status of the sensitive data detection.</p>
   */
  Reason?: string;
}

export namespace ClassificationStatus {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ClassificationStatus): any => ({
    ...obj,
  });
}

/**
 * <p>Details about the sensitive data that was detected on the resource.</p>
 */
export interface ClassificationResult {
  /**
   * <p>The type of content that the finding applies to.</p>
   */
  MimeType?: string;

  /**
   * <p>The total size in bytes of the affected data.</p>
   */
  SizeClassified?: number;

  /**
   * <p>Indicates whether there are additional occurrences of sensitive data that are not included in the finding. This occurs when the number of occurrences exceeds the maximum that can be included.</p>
   */
  AdditionalOccurrences?: boolean;

  /**
   * <p>The current status of the sensitive data detection.</p>
   */
  Status?: ClassificationStatus;

  /**
   * <p>Provides details about sensitive data that was identified based on built-in configuration.</p>
   */
  SensitiveData?: SensitiveDataResult[];

  /**
   * <p>Provides details about sensitive data that was identified based on customer-defined configuration.</p>
   */
  CustomDataIdentifiers?: CustomDataIdentifiersResult;
}

export namespace ClassificationResult {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ClassificationResult): any => ({
    ...obj,
  });
}

/**
 * <p>Provides details about sensitive data that was detected on a resource.</p>
 */
export interface DataClassificationDetails {
  /**
   * <p>The path to the folder or file that contains the sensitive data.</p>
   */
  DetailedResultsLocation?: string;

  /**
   * <p>The details about the sensitive data that was detected on the resource.</p>
   */
  Result?: ClassificationResult;
}

export namespace DataClassificationDetails {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DataClassificationDetails): any => ({
    ...obj,
  });
}

/**
 * <p>A wrapper type for the attributes of an Amazon SNS subscription.</p>
 */
export interface AwsSnsTopicSubscription {
  /**
   * <p>The subscription's endpoint (format depends on the protocol).</p>
   */
  Endpoint?: string;

  /**
   * <p>The subscription's protocol.</p>
   */
  Protocol?: string;
}

export namespace AwsSnsTopicSubscription {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: AwsSnsTopicSubscription): any => ({
    ...obj,
  });
}

/**
 * <p>Provides information about an Amazon SNS topic to which notifications can be published.</p>
 */
export interface AwsSnsTopicDetails {
  /**
   * <p>The ID of an Amazon Web Services managed key for Amazon SNS or a customer managed key.</p>
   */
  KmsMasterKeyId?: string;

  /**
   * <p>Subscription is an embedded property that describes the subscription endpoints of an Amazon SNS topic.</p>
   */
  Subscription?: AwsSnsTopicSubscription[];

  /**
   * <p>The name of the Amazon SNS topic.</p>
   */
  TopicName?: string;

  /**
   * <p>The subscription's owner.</p>
   */
  Owner?: string;

  /**
   * <p>Indicates successful message delivery status for an Amazon SNS topic that is subscribed to an Amazon SQS endpoint.
   *       </p>
   */
  SqsSuccessFeedbackRoleArn?: string;

  /**
   * <p>Indicates failed message delivery status for an Amazon SNS topic that is subscribed to an Amazon SQS endpoint.
   *       </p>
   */
  SqsFailureFeedbackRoleArn?: string;

  /**
   * <p>Indicates failed message delivery status for an Amazon SNS topic that is subscribed to a platform application endpoint.
   *       </p>
   */
  ApplicationSuccessFeedbackRoleArn?: string;

  /**
   * <p>Indicates successful message delivery status for an Amazon SNS topic that is subscribed to an Amazon Kinesis Data Firehose endpoint.
   *       </p>
   */
  FirehoseSuccessFeedbackRoleArn?: string;

  /**
   * <p>Indicates failed message delivery status for an Amazon SNS topic that is subscribed to an Amazon Kinesis Data Firehose endpoint.
   *       </p>
   */
  FirehoseFailureFeedbackRoleArn?: string;

  /**
   * <p>Indicates successful message delivery status for an Amazon SNS topic that is subscribed to an HTTP endpoint.
   *       </p>
   */
  HttpSuccessFeedbackRoleArn?: string;

  /**
   * <p>Indicates failed message delivery status for an Amazon SNS topic that is subscribed to an HTTP endpoint. </p>
   */
  HttpFailureFeedbackRoleArn?: string;
}

export namespace AwsSnsTopicDetails {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: AwsSnsTopicDetails): any => ({
    ...obj,
  });
}

/**
 * <p>Data about a queue.</p>
 */
export interface AwsSqsQueueDetails {
  /**
   * <p>The length of time, in seconds, for which Amazon SQS can reuse a data key to encrypt or decrypt messages before calling KMS again.</p>
   */
  KmsDataKeyReusePeriodSeconds?: number;

  /**
   * <p>The ID of an Amazon Web Services managed key for Amazon SQS or a custom
   *          KMS key.</p>
   */
  KmsMasterKeyId?: string;

  /**
   * <p>The name of the new queue.</p>
   */
  QueueName?: string;

  /**
   * <p>The ARN of the dead-letter queue to which Amazon SQS moves
   *          messages after the value of <code>maxReceiveCount</code> is exceeded. </p>
   */
  DeadLetterTargetArn?: string;
}

export namespace AwsSqsQueueDetails {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: AwsSqsQueueDetails): any => ({
    ...obj,
  });
}

/**
 * <p>Provides the details about the compliance status for a patch.</p>
 */
export interface AwsSsmComplianceSummary {
  /**
   * <p>The current patch compliance status.</p>
   *          <p>The possible status values are:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>COMPLIANT</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>NON_COMPLIANT</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>UNSPECIFIED_DATA</code>
   *                </p>
   *             </li>
   *          </ul>
   */
  Status?: string;

  /**
   * <p>For the patches that are compliant, the number that have a severity of
   *             <code>CRITICAL</code>.</p>
   */
  CompliantCriticalCount?: number;

  /**
   * <p>For the patches that are compliant, the number that have a severity of
   *          <code>HIGH</code>.</p>
   */
  CompliantHighCount?: number;

  /**
   * <p>For the patches that are compliant, the number that have a severity of
   *             <code>MEDIUM</code>.</p>
   */
  CompliantMediumCount?: number;

  /**
   * <p>The type of execution that was used determine compliance.</p>
   */
  ExecutionType?: string;

  /**
   * <p>For the patch items that are noncompliant, the number of items that have a severity of
   *             <code>CRITICAL</code>.</p>
   */
  NonCompliantCriticalCount?: number;

  /**
   * <p>For the patches that are compliant, the number that have a severity of
   *             <code>INFORMATIONAL</code>.</p>
   */
  CompliantInformationalCount?: number;

  /**
   * <p>For the patches that are noncompliant, the number that have a severity of
   *             <code>INFORMATIONAL</code>.</p>
   */
  NonCompliantInformationalCount?: number;

  /**
   * <p>For the patches that are compliant, the number that have a severity of
   *             <code>UNSPECIFIED</code>.</p>
   */
  CompliantUnspecifiedCount?: number;

  /**
   * <p>For the patches that are noncompliant, the number that have a severity of
   *             <code>LOW</code>.</p>
   */
  NonCompliantLowCount?: number;

  /**
   * <p>For the patches that are noncompliant, the number that have a severity of
   *             <code>HIGH</code>.</p>
   */
  NonCompliantHighCount?: number;

  /**
   * <p>For the patches that are compliant, the number that have a severity of
   *          <code>LOW</code>.</p>
   */
  CompliantLowCount?: number;

  /**
   * <p>The type of resource for which the compliance was determined. For
   *             <code>AwsSsmPatchCompliance</code>, <code>ComplianceType</code> is <code>Patch</code>. </p>
   */
  ComplianceType?: string;

  /**
   * <p>The identifier of the patch baseline. The patch baseline lists the patches that are
   *          approved for installation.</p>
   */
  PatchBaselineId?: string;

  /**
   * <p>The highest severity for the patches.</p>
   */
  OverallSeverity?: string;

  /**
   * <p>For the patches that are noncompliant, the number that have a severity of
   *             <code>MEDIUM</code>.</p>
   */
  NonCompliantMediumCount?: number;

  /**
   * <p>For the patches that are noncompliant, the number that have a severity of
   *             <code>UNSPECIFIED</code>.</p>
   */
  NonCompliantUnspecifiedCount?: number;

  /**
   * <p>The identifier of the patch group for which compliance was determined. A patch group
   *          uses tags to group EC2 instances that should have the same patch compliance.</p>
   */
  PatchGroup?: string;
}

export namespace AwsSsmComplianceSummary {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: AwsSsmComplianceSummary): any => ({
    ...obj,
  });
}

/**
 * <p>Provides details about the compliance for a patch.</p>
 */
export interface AwsSsmPatch {
  /**
   * <p>The compliance status details for the patch.</p>
   */
  ComplianceSummary?: AwsSsmComplianceSummary;
}

export namespace AwsSsmPatch {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: AwsSsmPatch): any => ({
    ...obj,
  });
}

/**
 * <p>Provides information about the state of a patch on an instance based on the patch
 *          baseline that was used to patch the instance.</p>
 */
export interface AwsSsmPatchComplianceDetails {
  /**
   * <p>Information about the status of a patch.</p>
   */
  Patch?: AwsSsmPatch;
}

export namespace AwsSsmPatchComplianceDetails {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: AwsSsmPatchComplianceDetails): any => ({
    ...obj,
  });
}

/**
 * <p>A match predicate. A predicate might look for characteristics such as specific IP addresses, geographic locations, or sizes.</p>
 */
export interface AwsWafRateBasedRuleMatchPredicate {
  /**
   * <p>The unique identifier for the predicate.</p>
   */
  DataId?: string;

  /**
   * <p>If set to <code>true</code>, then the rule actions are performed on requests that match the predicate settings.</p>
   *          <p>If set to <code>false</code>, then the rule actions are performed on all requests except those that match the predicate settings.
   *       </p>
   */
  Negated?: boolean;

  /**
   * <p>The type of predicate.</p>
   */
  Type?: string;
}

export namespace AwsWafRateBasedRuleMatchPredicate {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: AwsWafRateBasedRuleMatchPredicate): any => ({
    ...obj,
  });
}

/**
 * <p>Details about a rate-based rule for global resources. A rate-based rule provides settings to indicate when to allow, block, or count a request. Rate-based rules include the number of requests that arrive over a specified period of time.</p>
 */
export interface AwsWafRateBasedRuleDetails {
  /**
   * <p>The name of the metrics for the rate-based rule.</p>
   */
  MetricName?: string;

  /**
   * <p>The name of the rate-based rule.</p>
   */
  Name?: string;

  /**
   * <p>The field that WAF uses to determine whether requests are likely arriving from single source and are subject to rate monitoring.</p>
   */
  RateKey?: string;

  /**
   * <p>The maximum number of requests that have an identical value for the field specified in <code>RateKey</code> that are allowed within a five-minute period. If the number of requests exceeds <code>RateLimit</code> and the other predicates specified in the rule are met, WAF triggers the action for the rule.</p>
   */
  RateLimit?: number;

  /**
   * <p>The unique identifier for the rate-based rule.</p>
   */
  RuleId?: string;

  /**
   * <p>The predicates to include in the rate-based rule.</p>
   */
  MatchPredicates?: AwsWafRateBasedRuleMatchPredicate[];
}

export namespace AwsWafRateBasedRuleDetails {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: AwsWafRateBasedRuleDetails): any => ({
    ...obj,
  });
}

/**
 * <p>Details for a match predicate. A predicate might look for characteristics such as specific IP addresses, geographic locations, or sizes.</p>
 */
export interface AwsWafRegionalRateBasedRuleMatchPredicate {
  /**
   * <p>The unique identifier for the predicate.</p>
   */
  DataId?: string;

  /**
   * <p>If set to <code>true</code>, then the rule actions are performed on requests that match the predicate settings.</p>
   *          <p>If set to <code>false</code>, then the rule actions are performed on all requests except those that match the predicate settings.</p>
   */
  Negated?: boolean;

  /**
   * <p>The type of predicate.</p>
   */
  Type?: string;
}

export namespace AwsWafRegionalRateBasedRuleMatchPredicate {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: AwsWafRegionalRateBasedRuleMatchPredicate): any => ({
    ...obj,
  });
}

/**
 * <p>contains details about a rate-based rule for Regional resources. A rate-based rule provides settings to indicate when to allow, block, or count a request. Rate-based rules include the number of requests that arrive over a specified period of time.</p>
 */
export interface AwsWafRegionalRateBasedRuleDetails {
  /**
   * <p>The name of the metrics for the rate-based rule.</p>
   */
  MetricName?: string;

  /**
   * <p>The name of the rate-based rule.</p>
   */
  Name?: string;

  /**
   * <p>The field that WAF uses to determine whether requests are likely arriving from single source and are subject to rate monitoring.</p>
   */
  RateKey?: string;

  /**
   * <p>The maximum number of requests that have an identical value for the field specified in <code>RateKey</code> that are allowed within a five-minute period. If the number of requests exceeds <code>RateLimit</code> and the other predicates specified in the rule are met, WAF triggers the action for the rule.</p>
   */
  RateLimit?: number;

  /**
   * <p>The unique identifier for the rate-based rule.</p>
   */
  RuleId?: string;

  /**
   * <p>The predicates to include in the rate-based rule.</p>
   */
  MatchPredicates?: AwsWafRegionalRateBasedRuleMatchPredicate[];
}

export namespace AwsWafRegionalRateBasedRuleDetails {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: AwsWafRegionalRateBasedRuleDetails): any => ({
    ...obj,
  });
}

/**
 * <p>Provides details about the <code>ByteMatchSet</code>, <code>IPSet</code>, <code>SqlInjectionMatchSet</code>, <code>XssMatchSet</code>,
 *          <code>RegexMatchSet</code>, <code>GeoMatchSet</code>, and <code>SizeConstraintSet</code> objects that you want to add to a rule and, for each object, indicates whether you want to negate the settings.
 *       </p>
 */
export interface AwsWafRegionalRulePredicateListDetails {
  /**
   * <p>A unique identifier for a predicate in a rule, such as <code>ByteMatchSetId</code> or <code>IPSetId</code>.
   *       </p>
   */
  DataId?: string;

  /**
   * <p>Specifies if you want WAF to allow, block, or count requests based on the settings in the
   *          <code>ByteMatchSet</code>, <code>IPSet</code>, <code>SqlInjectionMatchSet</code>, <code>XssMatchSet</code>,
   *          <code>RegexMatchSet</code>, <code>GeoMatchSet</code>, or <code>SizeConstraintSet</code>.
   *       </p>
   */
  Negated?: boolean;

  /**
   * <p>The type of predicate in a rule, such as <code>ByteMatch</code> or <code>IPSet</code>.
   *       </p>
   */
  Type?: string;
}

export namespace AwsWafRegionalRulePredicateListDetails {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: AwsWafRegionalRulePredicateListDetails): any => ({
    ...obj,
  });
}

/**
 * <p>Provides information about an WAF Regional rule. This rule identifies the web requests that you want to allow, block, or count. </p>
 */
export interface AwsWafRegionalRuleDetails {
  /**
   * <p>A name for the metrics for the rule.
   *       </p>
   */
  MetricName?: string;

  /**
   * <p>A descriptive name for the rule.
   *       </p>
   */
  Name?: string;

  /**
   * <p>Specifies the <code>ByteMatchSet</code>, <code>IPSet</code>,
   *             <code>SqlInjectionMatchSet</code>, <code>XssMatchSet</code>, <code>RegexMatchSet</code>,
   *             <code>GeoMatchSet</code>, and <code>SizeConstraintSet</code> objects that you want to
   *          add to a rule and, for each object, indicates whether you want to negate the settings. </p>
   */
  PredicateList?: AwsWafRegionalRulePredicateListDetails[];

  /**
   * <p>The ID of the rule.
   *       </p>
   */
  RuleId?: string;
}

export namespace AwsWafRegionalRuleDetails {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: AwsWafRegionalRuleDetails): any => ({
    ...obj,
  });
}

/**
 * <p>Describes the action that AWS WAF should take on a web request when it matches the criteria defined in the rule.
 *       </p>
 */
export interface AwsWafRegionalRuleGroupRulesActionDetails {
  /**
   * <p>Specifies the <code>ByteMatchSet</code>, <code>IPSet</code>, <code>SqlInjectionMatchSet</code>, <code>XssMatchSet</code>, <code>RegexMatchSet</code>,
   * <code>GeoMatchSet</code>, and <code>SizeConstraintSet</code> objects that you want to add to a rule and, for each object, indicates whether you want to negate the settings.</p>
   */
  Type?: string;
}

export namespace AwsWafRegionalRuleGroupRulesActionDetails {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: AwsWafRegionalRuleGroupRulesActionDetails): any => ({
    ...obj,
  });
}

/**
 * <p>Provides information about the rules attached to a rule group
 *       </p>
 */
export interface AwsWafRegionalRuleGroupRulesDetails {
  /**
   * <p>The action that WAF should take on a web request when it matches the criteria defined in the rule. </p>
   */
  Action?: AwsWafRegionalRuleGroupRulesActionDetails;

  /**
   * <p>If you define more than one rule in a web ACL, WAF evaluates each request against the rules in
   *          order based on the value of <code>Priority</code>. </p>
   */
  Priority?: number;

  /**
   * <p>The ID for a rule.
   *       </p>
   */
  RuleId?: string;

  /**
   * <p>The type of rule in the rule group.
   *       </p>
   */
  Type?: string;
}

export namespace AwsWafRegionalRuleGroupRulesDetails {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: AwsWafRegionalRuleGroupRulesDetails): any => ({
    ...obj,
  });
}

/**
 * <p>Provides information about an WAF Regional rule group. The rule group is a collection of rules for inspecting and controlling web
 *          requests. </p>
 */
export interface AwsWafRegionalRuleGroupDetails {
  /**
   * <p>A name for the metrics for this rule group.
   *       </p>
   */
  MetricName?: string;

  /**
   * <p>The descriptive name of the rule group.
   *       </p>
   */
  Name?: string;

  /**
   * <p>The ID of the rule group.
   *       </p>
   */
  RuleGroupId?: string;

  /**
   * <p>Provides information about the rule statements used to identify the web requests that you want to allow, block, or
   * count.
   *       </p>
   */
  Rules?: AwsWafRegionalRuleGroupRulesDetails[];
}

export namespace AwsWafRegionalRuleGroupDetails {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: AwsWafRegionalRuleGroupDetails): any => ({
    ...obj,
  });
}

/**
 * <p>The action that WAF takes when a web request matches all conditions in the
 *          rule, such as allow, block, or count the request. </p>
 */
export interface AwsWafRegionalWebAclRulesListActionDetails {
  /**
   * <p>For actions that are associated with a rule, the action that WAF takes when a web request matches all conditions in a rule.
   *       </p>
   */
  Type?: string;
}

export namespace AwsWafRegionalWebAclRulesListActionDetails {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: AwsWafRegionalWebAclRulesListActionDetails): any => ({
    ...obj,
  });
}

/**
 * <p>Provides details about the action to use in the place of the action that results from the rule group
 * evaluation.
 *       </p>
 */
export interface AwsWafRegionalWebAclRulesListOverrideActionDetails {
  /**
   * <p>Overrides the rule evaluation result in the rule group.
   *       </p>
   */
  Type?: string;
}

export namespace AwsWafRegionalWebAclRulesListOverrideActionDetails {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: AwsWafRegionalWebAclRulesListOverrideActionDetails): any => ({
    ...obj,
  });
}

/**
 * <p>A combination of <code>ByteMatchSet</code>, <code>IPSet</code>, and/or <code>SqlInjectionMatchSet</code>
 * objects that identify the web requests that you want to allow, block, or count.
 *       </p>
 */
export interface AwsWafRegionalWebAclRulesListDetails {
  /**
   * <p>The action that AWS WAF takes when a web request matches all conditions in the rule, such as allow,
   *          block, or count the request.
   *       </p>
   */
  Action?: AwsWafRegionalWebAclRulesListActionDetails;

  /**
   * <p>Overrides the rule evaluation result in the rule group.
   *       </p>
   */
  OverrideAction?: AwsWafRegionalWebAclRulesListOverrideActionDetails;

  /**
   * <p>The order in which WAF evaluates the rules in a web ACL.
   *       </p>
   */
  Priority?: number;

  /**
   * <p>The ID of an WAF Regional rule to associate with a web ACL. </p>
   */
  RuleId?: string;

  /**
   * <p>For actions that are associated with a rule, the action that WAF takes when a web
   * request matches all conditions in a rule.
   *       </p>
   */
  Type?: string;
}

export namespace AwsWafRegionalWebAclRulesListDetails {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: AwsWafRegionalWebAclRulesListDetails): any => ({
    ...obj,
  });
}

/**
 * <p>Provides information about the web access control list (web ACL). The web ACL contains the rules that identify the requests that you
 *          want to allow, block, or count. </p>
 */
export interface AwsWafRegionalWebAclDetails {
  /**
   * <p>The action to perform if none of the rules contained in the web ACL match.
   *       </p>
   */
  DefaultAction?: string;

  /**
   * <p>A name for the metrics for this web ACL.
   *       </p>
   */
  MetricName?: string;

  /**
   * <p>A descriptive name for the web ACL.
   *       </p>
   */
  Name?: string;

  /**
   * <p>An array that contains the action for each rule in a web ACL, the priority of the rule, and the ID of
   * the rule.
   *       </p>
   */
  RulesList?: AwsWafRegionalWebAclRulesListDetails[];

  /**
   * <p>The ID of the web ACL.
   *       </p>
   */
  WebAclId?: string;
}

export namespace AwsWafRegionalWebAclDetails {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: AwsWafRegionalWebAclDetails): any => ({
    ...obj,
  });
}

/**
 * <p>Provides details about the <code>ByteMatchSet</code>, <code>IPSet</code>, <code>SqlInjectionMatchSet</code>, <code>XssMatchSet</code>,
 *          <code>RegexMatchSet</code>, <code>GeoMatchSet</code>, and <code>SizeConstraintSet</code> objects that you want to add to a rule and,
 * for each object, indicates whether you want to negate the settings.
 *       </p>
 */
export interface AwsWafRulePredicateListDetails {
  /**
   * <p>A unique identifier for a predicate in a rule, such as <code>ByteMatchSetId</code> or <code>IPSetId</code>.
   *       </p>
   */
  DataId?: string;

  /**
   * <p>Specifies if you want WAF to allow, block, or count requests based on the settings in the
   *          <code>ByteMatchSet</code>, <code>IPSet</code>, <code>SqlInjectionMatchSet</code>, <code>XssMatchSet</code>,
   *          <code>RegexMatchSet</code>, <code>GeoMatchSet</code>, or <code>SizeConstraintSet</code>.
   *       </p>
   */
  Negated?: boolean;

  /**
   * <p>The type of predicate in a rule, such as <code>ByteMatch</code> or <code>IPSet</code>.
   *       </p>
   */
  Type?: string;
}

export namespace AwsWafRulePredicateListDetails {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: AwsWafRulePredicateListDetails): any => ({
    ...obj,
  });
}

/**
 * <p>Provides information about a WAF rule. This rule specifies the web requests that you want to allow, block, or count.
 *       </p>
 */
export interface AwsWafRuleDetails {
  /**
   * <p>The name of the metrics for this rule.
   *       </p>
   */
  MetricName?: string;

  /**
   * <p>A descriptive name for the rule.
   *       </p>
   */
  Name?: string;

  /**
   * <p>Specifies the <code>ByteMatchSet</code>, <code>IPSet</code>, <code>SqlInjectionMatchSet</code>, <code>XssMatchSet</code>,
   *          <code>RegexMatchSet</code>, <code>GeoMatchSet</code>, and <code>SizeConstraintSet</code> objects that you want to add to a rule and,
   *          for each object, indicates whether you want to negate the settings.
   *       </p>
   */
  PredicateList?: AwsWafRulePredicateListDetails[];

  /**
   * <p>The ID of the WAF rule.
   *       </p>
   */
  RuleId?: string;
}

export namespace AwsWafRuleDetails {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: AwsWafRuleDetails): any => ({
    ...obj,
  });
}

/**
 * <p>Provides information about what action WAF should take on a web request when it matches the criteria defined in the rule.
 *       </p>
 */
export interface AwsWafRuleGroupRulesActionDetails {
  /**
   * <p>The action that WAF should take on a web request when it matches the rule's
   *          statement.</p>
   */
  Type?: string;
}

export namespace AwsWafRuleGroupRulesActionDetails {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: AwsWafRuleGroupRulesActionDetails): any => ({
    ...obj,
  });
}

/**
 * <p>Provides information about the rules attached to the rule group. These rules identify the web requests that you want to
 *          allow, block, or count.
 *       </p>
 */
export interface AwsWafRuleGroupRulesDetails {
  /**
   * <p>Provides information about what action WAF should take on a web request when it matches the criteria defined in the rule.
   *       </p>
   */
  Action?: AwsWafRuleGroupRulesActionDetails;

  /**
   * <p>If you define more than one rule in a web ACL, WAF evaluates each request against the rules in order
   *          based on the value of <code>Priority</code>.</p>
   */
  Priority?: number;

  /**
   * <p>The rule ID for a rule.
   *       </p>
   */
  RuleId?: string;

  /**
   * <p>The type of rule.
   *       </p>
   */
  Type?: string;
}

export namespace AwsWafRuleGroupRulesDetails {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: AwsWafRuleGroupRulesDetails): any => ({
    ...obj,
  });
}

/**
 * <p>Provides information about an WAF rule group. A rule group is a collection of rules for inspecting and controlling web requests.
 *       </p>
 */
export interface AwsWafRuleGroupDetails {
  /**
   * <p>The name of the metrics for this rule group.
   *       </p>
   */
  MetricName?: string;

  /**
   * <p>The name of the rule group.
   *       </p>
   */
  Name?: string;

  /**
   * <p>The ID of the rule group.
   *       </p>
   */
  RuleGroupId?: string;

  /**
   * <p>Provides information about the rules attached to the rule group. These rules identify the web requests that you want to
   * allow, block, or count.
   *       </p>
   */
  Rules?: AwsWafRuleGroupRulesDetails[];
}

export namespace AwsWafRuleGroupDetails {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: AwsWafRuleGroupDetails): any => ({
    ...obj,
  });
}

/**
 * <p>Details about the action that CloudFront or WAF takes when a web request matches the
 *          conditions in the rule. </p>
 */
export interface WafAction {
  /**
   * <p>Specifies how you want WAF to respond to requests that match the settings in a
   *          rule.</p>
   *          <p>Valid settings include the following:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>ALLOW</code> - WAF allows requests</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>BLOCK</code> - WAF blocks requests</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>COUNT</code> - WAF increments a counter of the requests that
   *                match all of the conditions in the rule. WAF then continues to inspect
   *                the web request based on the remaining rules in the web ACL. You can't specify
   *                   <code>COUNT</code> for the default action for a web ACL.</p>
   *             </li>
   *          </ul>
   */
  Type?: string;
}

export namespace WafAction {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: WafAction): any => ({
    ...obj,
  });
}

/**
 * <p>Details about a rule to exclude from a rule group.</p>
 */
export interface WafExcludedRule {
  /**
   * <p>The unique identifier for the rule to exclude from the rule group.</p>
   */
  RuleId?: string;
}

export namespace WafExcludedRule {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: WafExcludedRule): any => ({
    ...obj,
  });
}

/**
 * <p>Details about an override action for a rule.</p>
 */
export interface WafOverrideAction {
  /**
   * <p>
   *             <code>COUNT</code> overrides the action specified by the individual rule within a
   *             <code>RuleGroup</code> .</p>
   *          <p>If set to <code>NONE</code>, the rule's action takes place.</p>
   */
  Type?: string;
}

export namespace WafOverrideAction {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: WafOverrideAction): any => ({
    ...obj,
  });
}

/**
 * <p>Details for a rule in an WAF web ACL.</p>
 */
export interface AwsWafWebAclRule {
  /**
   * <p>Specifies the action that CloudFront or WAF takes when a web request matches the
   *          conditions in the rule. </p>
   */
  Action?: WafAction;

  /**
   * <p>Rules to exclude from a rule group.</p>
   */
  ExcludedRules?: WafExcludedRule[];

  /**
   * <p>Use the <code>OverrideAction</code> to test your <code>RuleGroup</code>.</p>
   *          <p>Any rule in a <code>RuleGroup</code> can potentially block a request. If you set the <code>OverrideAction</code> to
   *             <code>None</code>, the <code>RuleGroup</code> blocks a request if any individual rule in the <code>RuleGroup</code>
   *          matches the request and is configured to block that request.</p>
   *          <p>However, if you first want to test the <code>RuleGroup</code>,
   *          set the <code>OverrideAction</code> to <code>Count</code>. The <code>RuleGroup</code>
   *          then overrides any block action specified by individual rules contained within the group.
   *          Instead of blocking matching requests, those requests are counted.</p>
   *          <p>
   *             <code>ActivatedRule</code>|<code>OverrideAction</code> applies only when updating or
   *          adding a <code>RuleGroup</code>
   *          to a web ACL. In this case you do not use <code>ActivatedRule</code>
   *             <code>Action</code>. For all other update requests,
   *             <code>ActivatedRule</code>
   *             <code>Action</code> is used instead of <code>ActivatedRule</code>
   *             <code>OverrideAction</code>.</p>
   */
  OverrideAction?: WafOverrideAction;

  /**
   * <p>Specifies the order in which the rules in a web
   *          ACL are evaluated. Rules with a lower value for <code>Priority</code> are
   *          evaluated before rules with a higher value. The value must be a unique integer. If you add
   *          multiple rules to a web ACL, the values do not need to be consecutive.</p>
   */
  Priority?: number;

  /**
   * <p>The identifier for a rule.</p>
   */
  RuleId?: string;

  /**
   * <p>The rule type.</p>
   *          <p>Valid values: <code>REGULAR</code> | <code>RATE_BASED</code> | <code>GROUP</code>
   *          </p>
   *          <p>The default is <code>REGULAR</code>.</p>
   */
  Type?: string;
}

export namespace AwsWafWebAclRule {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: AwsWafWebAclRule): any => ({
    ...obj,
  });
}

/**
 * <p>Provides information about an WAF web access control list (web ACL).</p>
 */
export interface AwsWafWebAclDetails {
  /**
   * <p>A friendly name or description of the web ACL. You can't change the name of a web ACL  after you create it.</p>
   */
  Name?: string;

  /**
   * <p>The action to perform if none of the rules contained in the web ACL match.</p>
   */
  DefaultAction?: string;

  /**
   * <p>An array that contains the action for each rule in a web ACL, the priority of the rule, and the ID of the rule.</p>
   */
  Rules?: AwsWafWebAclRule[];

  /**
   * <p>A unique identifier for a web ACL.</p>
   */
  WebAclId?: string;
}

export namespace AwsWafWebAclDetails {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: AwsWafWebAclDetails): any => ({
    ...obj,
  });
}

/**
 * <p>Information about the encryption configuration for X-Ray.</p>
 */
export interface AwsXrayEncryptionConfigDetails {
  /**
   * <p>The identifier of the KMS key that is used for encryption. Provided if <code>Type</code> is <code>KMS</code>.</p>
   */
  KeyId?: string;

  /**
   * <p>The current status of the encryption configuration. When <code>Status</code> is <code>UPDATING</code>, X-Ray might use both the old and new encryption.</p>
   */
  Status?: string;

  /**
   * <p>The type of encryption. <code>KMS</code> indicates that the encryption uses KMS keys. <code>NONE</code> indicates to use the default encryption.</p>
   */
  Type?: string;
}

export namespace AwsXrayEncryptionConfigDetails {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: AwsXrayEncryptionConfigDetails): any => ({
    ...obj,
  });
}

/**
 * <p>Describes the mounting of a volume in a container.
 *       </p>
 */
export interface VolumeMount {
  /**
   * <p>The name of the volume.
   *       </p>
   */
  Name?: string;

  /**
   * <p>The path in the container at which the volume should be mounted.
   *       </p>
   */
  MountPath?: string;
}

export namespace VolumeMount {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: VolumeMount): any => ({
    ...obj,
  });
}

/**
 * <p>Container details related to a finding.</p>
 */
export interface ContainerDetails {
  /**
   * <p>The runtime of the container.
   *       </p>
   */
  ContainerRuntime?: string;

  /**
   * <p>The name of the container related to a finding.</p>
   */
  Name?: string;

  /**
   * <p>The identifier of the container image related to a finding.</p>
   */
  ImageId?: string;

  /**
   * <p>The name of the container image related to a finding.</p>
   */
  ImageName?: string;

  /**
   * <p>Indicates when the container started.</p>
   *          <p>Uses the <code>date-time</code> format specified in <a href="https://tools.ietf.org/html/rfc3339#section-5.6">RFC 3339 section 5.6, Internet
   *             Date/Time Format</a>. The value cannot contain spaces. For example,
   *             <code>2020-03-22T13:22:13.933Z</code>.</p>
   */
  LaunchedAt?: string;

  /**
   * <p>Provides information about the mounting of a volume in a container.
   *       </p>
   */
  VolumeMounts?: VolumeMount[];

  /**
   * <p>When this parameter is <code>true</code>, the container is given elevated privileges on the host
   * container instance (similar to the root user).
   *       </p>
   */
  Privileged?: boolean;
}

export namespace ContainerDetails {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ContainerDetails): any => ({
    ...obj,
  });
}

/**
 * <p>Additional details about a resource related to a finding.</p>
 *          <p>To provide the details, use the object that corresponds to the resource type. For
 *          example, if the resource type is <code>AwsEc2Instance</code>, then you use the
 *             <code>AwsEc2Instance</code> object to provide the details.</p>
 *          <p>If the type-specific object does not contain all of the fields you want to populate,
 *          then you use the <code>Other</code> object to populate those additional fields.</p>
 *          <p>You also use the <code>Other</code> object to populate the details when the selected
 *          type does not have a corresponding object.</p>
 */
export interface ResourceDetails {
  /**
   * <p>Details for an autoscaling group.</p>
   */
  AwsAutoScalingAutoScalingGroup?: AwsAutoScalingAutoScalingGroupDetails;

  /**
   * <p>Details for an CodeBuild project.</p>
   */
  AwsCodeBuildProject?: AwsCodeBuildProjectDetails;

  /**
   * <p>Details about a CloudFront distribution.</p>
   */
  AwsCloudFrontDistribution?: AwsCloudFrontDistributionDetails;

  /**
   * <p>Details about an EC2 instance related to a finding.</p>
   */
  AwsEc2Instance?: AwsEc2InstanceDetails;

  /**
   * <p>Details for an EC2 network interface.</p>
   */
  AwsEc2NetworkInterface?: AwsEc2NetworkInterfaceDetails;

  /**
   * <p>Details for an EC2 security group.</p>
   */
  AwsEc2SecurityGroup?: AwsEc2SecurityGroupDetails;

  /**
   * <p>Details for an Amazon EC2 volume.</p>
   */
  AwsEc2Volume?: AwsEc2VolumeDetails;

  /**
   * <p>Details for an Amazon EC2 VPC.</p>
   */
  AwsEc2Vpc?: AwsEc2VpcDetails;

  /**
   * <p>Details about an Elastic IP address.</p>
   */
  AwsEc2Eip?: AwsEc2EipDetails;

  /**
   * <p>Details about a subnet in Amazon EC2.</p>
   */
  AwsEc2Subnet?: AwsEc2SubnetDetails;

  /**
   * <p>Details about an EC2 network access control list (ACL).</p>
   */
  AwsEc2NetworkAcl?: AwsEc2NetworkAclDetails;

  /**
   * <p>Details about a load balancer.</p>
   */
  AwsElbv2LoadBalancer?: AwsElbv2LoadBalancerDetails;

  /**
   * <p>Details about an Elastic Beanstalk environment.</p>
   */
  AwsElasticBeanstalkEnvironment?: AwsElasticBeanstalkEnvironmentDetails;

  /**
   * <p>Details for an Elasticsearch domain.</p>
   */
  AwsElasticsearchDomain?: AwsElasticsearchDomainDetails;

  /**
   * <p>Details about an S3 bucket related to a finding.</p>
   */
  AwsS3Bucket?: AwsS3BucketDetails;

  /**
   * <p>Details about the Amazon S3 Public Access Block configuration for an account.</p>
   */
  AwsS3AccountPublicAccessBlock?: AwsS3AccountPublicAccessBlockDetails;

  /**
   * <p>Details about an S3 object related to a finding.</p>
   */
  AwsS3Object?: AwsS3ObjectDetails;

  /**
   * <p>Details about a Secrets Manager secret.</p>
   */
  AwsSecretsManagerSecret?: AwsSecretsManagerSecretDetails;

  /**
   * <p>Details about an IAM access key related to a finding.</p>
   */
  AwsIamAccessKey?: AwsIamAccessKeyDetails;

  /**
   * <p>Details about an IAM user.</p>
   */
  AwsIamUser?: AwsIamUserDetails;

  /**
   * <p>Details about an IAM permissions policy.</p>
   */
  AwsIamPolicy?: AwsIamPolicyDetails;

  /**
   * <p>Provides information about a version 2 stage for Amazon API Gateway.</p>
   */
  AwsApiGatewayV2Stage?: AwsApiGatewayV2StageDetails;

  /**
   * <p>Provides information about a version 2 API in Amazon API Gateway.</p>
   */
  AwsApiGatewayV2Api?: AwsApiGatewayV2ApiDetails;

  /**
   * <p>Details about a DynamoDB table.</p>
   */
  AwsDynamoDbTable?: AwsDynamoDbTableDetails;

  /**
   * <p>Provides information about a version 1 Amazon API Gateway stage.</p>
   */
  AwsApiGatewayStage?: AwsApiGatewayStageDetails;

  /**
   * <p>Provides information about a REST API in version 1 of Amazon API Gateway.</p>
   */
  AwsApiGatewayRestApi?: AwsApiGatewayRestApiDetails;

  /**
   * <p>Provides details about a CloudTrail trail.</p>
   */
  AwsCloudTrailTrail?: AwsCloudTrailTrailDetails;

  /**
   * <p>Provides information about the state of a patch on an instance based on the patch baseline that was used to patch the instance.</p>
   */
  AwsSsmPatchCompliance?: AwsSsmPatchComplianceDetails;

  /**
   * <p>Provides details about an Certificate Manager certificate.</p>
   */
  AwsCertificateManagerCertificate?: AwsCertificateManagerCertificateDetails;

  /**
   * <p>Contains details about an Amazon Redshift cluster.</p>
   */
  AwsRedshiftCluster?: AwsRedshiftClusterDetails;

  /**
   * <p>Contains details about a Classic Load Balancer.</p>
   */
  AwsElbLoadBalancer?: AwsElbLoadBalancerDetails;

  /**
   * <p>Contains details about an IAM group.</p>
   */
  AwsIamGroup?: AwsIamGroupDetails;

  /**
   * <p>Details about an IAM role.</p>
   */
  AwsIamRole?: AwsIamRoleDetails;

  /**
   * <p>Details about an KMS key.</p>
   */
  AwsKmsKey?: AwsKmsKeyDetails;

  /**
   * <p>Details about a Lambda function.</p>
   */
  AwsLambdaFunction?: AwsLambdaFunctionDetails;

  /**
   * <p>Details for a Lambda layer version.</p>
   */
  AwsLambdaLayerVersion?: AwsLambdaLayerVersionDetails;

  /**
   * <p>Details about an Amazon RDS database instance.</p>
   */
  AwsRdsDbInstance?: AwsRdsDbInstanceDetails;

  /**
   * <p>Details about an SNS topic.</p>
   */
  AwsSnsTopic?: AwsSnsTopicDetails;

  /**
   * <p>Details about an SQS queue.</p>
   */
  AwsSqsQueue?: AwsSqsQueueDetails;

  /**
   * <p>Details for an WAF web ACL.</p>
   */
  AwsWafWebAcl?: AwsWafWebAclDetails;

  /**
   * <p>Details about an Amazon RDS database snapshot.</p>
   */
  AwsRdsDbSnapshot?: AwsRdsDbSnapshotDetails;

  /**
   * <p>Details about an Amazon RDS database cluster snapshot.</p>
   */
  AwsRdsDbClusterSnapshot?: AwsRdsDbClusterSnapshotDetails;

  /**
   * <p>Details about an Amazon RDS database cluster.</p>
   */
  AwsRdsDbCluster?: AwsRdsDbClusterDetails;

  /**
   * <p>Details about an Amazon ECS cluster.</p>
   */
  AwsEcsCluster?: AwsEcsClusterDetails;

  /**
   * <p>Provides information about a Docker container that's part of a task.
   *       </p>
   */
  AwsEcsContainer?: AwsEcsContainerDetails;

  /**
   * <p>Details about a task definition. A task definition describes the container and volume definitions of an Amazon Elastic Container Service task.</p>
   */
  AwsEcsTaskDefinition?: AwsEcsTaskDefinitionDetails;

  /**
   * <p>Details about a container resource related to a finding.</p>
   */
  Container?: ContainerDetails;

  /**
   * <p>Details about a resource that are not available in a type-specific details object. Use
   *          the <code>Other</code> object in the following cases.</p>
   *          <ul>
   *             <li>
   *                <p>The type-specific object does not contain all of the fields that you want to
   *                populate. In this case, first use the type-specific object to populate those fields.
   *                Use the <code>Other</code> object to populate the fields that are missing from the
   *                type-specific object.</p>
   *             </li>
   *             <li>
   *                <p>The resource type does not have a corresponding object. This includes resources
   *                for which the type is <code>Other</code>. </p>
   *             </li>
   *          </ul>
   */
  Other?: Record<string, string>;

  /**
   * <p>Details about an RDS event notification subscription.</p>
   */
  AwsRdsEventSubscription?: AwsRdsEventSubscriptionDetails;

  /**
   * <p>Details about a service within an ECS cluster.</p>
   */
  AwsEcsService?: AwsEcsServiceDetails;

  /**
   * <p>Provides details about a launch configuration.</p>
   */
  AwsAutoScalingLaunchConfiguration?: AwsAutoScalingLaunchConfigurationDetails;

  /**
   * <p>Details about an Amazon EC2 VPN connection.</p>
   */
  AwsEc2VpnConnection?: AwsEc2VpnConnectionDetails;

  /**
   * <p>Information about an Amazon ECR image.</p>
   */
  AwsEcrContainerImage?: AwsEcrContainerImageDetails;

  /**
   * <p>Details about an Amazon OpenSearch Service domain.</p>
   */
  AwsOpenSearchServiceDomain?: AwsOpenSearchServiceDomainDetails;

  /**
   * <p>Details about the service configuration for a VPC endpoint service.</p>
   */
  AwsEc2VpcEndpointService?: AwsEc2VpcEndpointServiceDetails;

  /**
   * <p>Information about the encryption configuration for X-Ray.</p>
   */
  AwsXrayEncryptionConfig?: AwsXrayEncryptionConfigDetails;

  /**
   * <p>Details about a rate-based rule for global resources.</p>
   */
  AwsWafRateBasedRule?: AwsWafRateBasedRuleDetails;

  /**
   * <p>Details about a rate-based rule for Regional resources.</p>
   */
  AwsWafRegionalRateBasedRule?: AwsWafRegionalRateBasedRuleDetails;

  /**
   * <p>Information about an Amazon Elastic Container Registry repository.</p>
   */
  AwsEcrRepository?: AwsEcrRepositoryDetails;

  /**
   * <p>Details about an Amazon EKS cluster.</p>
   */
  AwsEksCluster?: AwsEksClusterDetails;

  /**
   * <p>Details about an Network Firewall firewall policy.</p>
   */
  AwsNetworkFirewallFirewallPolicy?: AwsNetworkFirewallFirewallPolicyDetails;

  /**
   * <p>Details about an Network Firewall firewall.</p>
   */
  AwsNetworkFirewallFirewall?: AwsNetworkFirewallFirewallDetails;

  /**
   * <p>Details about an Network Firewall rule group.</p>
   */
  AwsNetworkFirewallRuleGroup?: AwsNetworkFirewallRuleGroupDetails;

  /**
   * <p>Details about an Amazon RDS DB security group.</p>
   */
  AwsRdsDbSecurityGroup?: AwsRdsDbSecurityGroupDetails;

  /**
   * <p>Details about an Amazon Kinesis data stream.</p>
   */
  AwsKinesisStream?: AwsKinesisStreamDetails;

  /**
   * <p>Details about an Amazon EC2 transit gateway that interconnects your virtual private clouds (VPC) and on-premises networks.</p>
   */
  AwsEc2TransitGateway?: AwsEc2TransitGatewayDetails;

  /**
   * <p>Details about an Amazon EFS access point. An access point is an application-specific view into an EFS file system that
   * applies an operating system user and group, and a file system path, to any file system request made through the access point.
   *       </p>
   */
  AwsEfsAccessPoint?: AwsEfsAccessPointDetails;

  /**
   * <p>Details about an CloudFormation stack. A stack is a collection of Amazon Web Services resources that you can manage as a single unit.</p>
   */
  AwsCloudFormationStack?: AwsCloudFormationStackDetails;

  /**
   * <p>Details about an Amazon CloudWatch alarm. An alarm allows you to monitor and receive alerts about your Amazon Web Services resources and applications across multiple Regions.</p>
   */
  AwsCloudWatchAlarm?: AwsCloudWatchAlarmDetails;

  /**
   * <p>Details about an Amazon EC2 VPC peering connection. A VPC peering connection is
   *          a networking connection between two VPCs that enables you to route traffic between them
   *          privately.
   *       </p>
   */
  AwsEc2VpcPeeringConnection?: AwsEc2VpcPeeringConnectionDetails;

  /**
   * <p>Details about an WAF rule group for Regional resources.
   *       </p>
   */
  AwsWafRegionalRuleGroup?: AwsWafRegionalRuleGroupDetails;

  /**
   * <p>Details about an WAF rule for Regional resources.
   *       </p>
   */
  AwsWafRegionalRule?: AwsWafRegionalRuleDetails;

  /**
   * <p>Details about an WAF web access control list (web ACL) for Regional resources. </p>
   */
  AwsWafRegionalWebAcl?: AwsWafRegionalWebAclDetails;

  /**
   * <p>Details about an WAF rule for global resources.
   *       </p>
   */
  AwsWafRule?: AwsWafRuleDetails;

  /**
   * <p>Details about an WAF rule group for global resources.
   *       </p>
   */
  AwsWafRuleGroup?: AwsWafRuleGroupDetails;

  /**
   * <p>Details about a task in a cluster. </p>
   */
  AwsEcsTask?: AwsEcsTaskDetails;
}

export namespace ResourceDetails {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ResourceDetails): any => ({
    ...obj,
  });
}

/**
 * <p>A resource related to a finding.</p>
 */
export interface Resource {
  /**
   * <p>The type of the resource that details are provided for. If possible, set
   *             <code>Type</code> to one of the supported resource types. For example, if the resource
   *          is an EC2 instance, then set <code>Type</code> to <code>AwsEc2Instance</code>.</p>
   *          <p>If the resource does not match any of the provided types, then set <code>Type</code> to
   *             <code>Other</code>. </p>
   */
  Type: string | undefined;

  /**
   * <p>The canonical identifier for the given resource type.</p>
   */
  Id: string | undefined;

  /**
   * <p>The canonical Amazon Web Services partition name that the Region is assigned to.</p>
   */
  Partition?: Partition | string;

  /**
   * <p>The canonical Amazon Web Services external Region name where this resource is located.</p>
   */
  Region?: string;

  /**
   * <p>Identifies the role of the resource in the finding. A resource is either the actor or target of the finding activity,</p>
   */
  ResourceRole?: string;

  /**
   * <p>A list of Amazon Web Services tags associated with a resource at the time the finding was
   *          processed.</p>
   */
  Tags?: Record<string, string>;

  /**
   * <p>Contains information about sensitive data that was detected on the resource.</p>
   */
  DataClassification?: DataClassificationDetails;

  /**
   * <p>Additional details about the resource related to a finding.</p>
   */
  Details?: ResourceDetails;
}

export namespace Resource {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: Resource): any => ({
    ...obj,
  });
}

/**
 * <p>The severity of the finding.</p>
 *          <p>The finding provider can provide the initial severity. The finding provider can only
 *          update the severity if it has not been updated using
 *          <code>BatchUpdateFindings</code>.</p>
 *          <p>The finding must have either <code>Label</code> or <code>Normalized</code> populated. If
 *          only one of these attributes is populated, then Security Hub automatically populates the other
 *          one. If neither attribute is populated, then the finding is invalid. <code>Label</code> is
 *          the preferred attribute.</p>
 */
export interface Severity {
  /**
   * <p>Deprecated. This attribute is being deprecated. Instead of providing
   *             <code>Product</code>, provide <code>Original</code>.</p>
   *          <p>The native severity as defined by the Amazon Web Services service or integrated partner product that
   *          generated the finding.</p>
   */
  Product?: number;

  /**
   * <p>The severity value of the finding. The allowed values are the following.</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>INFORMATIONAL</code> - No issue was found.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>LOW</code> - The issue does not require action on its own.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>MEDIUM</code> - The issue must be addressed but not urgently.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>HIGH</code> - The issue must be addressed as a priority.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>CRITICAL</code> - The issue must be remediated immediately to avoid it
   *                escalating.</p>
   *             </li>
   *          </ul>
   *          <p>If you provide <code>Normalized</code> and do not provide <code>Label</code>, then
   *             <code>Label</code> is set automatically as follows. </p>
   *          <ul>
   *             <li>
   *                <p>0 - <code>INFORMATIONAL</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>1–39 - <code>LOW</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>40–69 - <code>MEDIUM</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>70–89 - <code>HIGH</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>90–100 - <code>CRITICAL</code>
   *                </p>
   *             </li>
   *          </ul>
   */
  Label?: SeverityLabel | string;

  /**
   * <p>Deprecated. The normalized severity of a finding. This attribute is being deprecated.
   *          Instead of providing <code>Normalized</code>, provide <code>Label</code>.</p>
   *          <p>If you provide <code>Label</code> and do not provide <code>Normalized</code>, then
   *             <code>Normalized</code> is set automatically as follows.</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>INFORMATIONAL</code> - 0</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>LOW</code> - 1</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>MEDIUM</code> - 40</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>HIGH</code> - 70</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>CRITICAL</code> - 90</p>
   *             </li>
   *          </ul>
   */
  Normalized?: number;

  /**
   * <p>The native severity from the finding product that generated the finding.</p>
   */
  Original?: string;
}

export namespace Severity {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: Severity): any => ({
    ...obj,
  });
}

/**
 * <p>Details about the threat intelligence related to a finding.</p>
 */
export interface ThreatIntelIndicator {
  /**
   * <p>The type of threat intelligence indicator.</p>
   */
  Type?: ThreatIntelIndicatorType | string;

  /**
   * <p>The value of a threat intelligence indicator.</p>
   */
  Value?: string;

  /**
   * <p>The category of a threat intelligence indicator.</p>
   */
  Category?: ThreatIntelIndicatorCategory | string;

  /**
   * <p>Indicates when the most recent instance of a threat intelligence indicator was
   *          observed.</p>
   *          <p>Uses the <code>date-time</code> format specified in <a href="https://tools.ietf.org/html/rfc3339#section-5.6">RFC 3339 section 5.6, Internet
   *             Date/Time Format</a>. The value cannot contain spaces. For example,
   *             <code>2020-03-22T13:22:13.933Z</code>.</p>
   */
  LastObservedAt?: string;

  /**
   * <p>The source of the threat intelligence indicator.</p>
   */
  Source?: string;

  /**
   * <p>The URL to the page or site where you can get more information about the threat
   *          intelligence indicator.</p>
   */
  SourceUrl?: string;
}

export namespace ThreatIntelIndicator {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ThreatIntelIndicator): any => ({
    ...obj,
  });
}

/**
 * <p>Provides information about the file paths that were affected by the threat.
 * 		</p>
 */
export interface FilePaths {
  /**
   * <p>Path to the infected or suspicious file on the resource it was detected on.
   * 		</p>
   */
  FilePath?: string;

  /**
   * <p>The name of the infected or suspicious file corresponding to the hash.
   * 		</p>
   */
  FileName?: string;

  /**
   * <p>The Amazon Resource Name (ARN) of the resource on which the threat was detected.
   * 		</p>
   */
  ResourceId?: string;

  /**
   * <p>The hash value for the infected or suspicious file.
   * 		</p>
   */
  Hash?: string;
}

export namespace FilePaths {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: FilePaths): any => ({
    ...obj,
  });
}

/**
 * <p>Provides information about the threat detected in a security finding and the file paths that were affected by the threat.
 * 		</p>
 */
export interface Threat {
  /**
   * <p>The name of the threat.
   * 		</p>
   */
  Name?: string;

  /**
   * <p>The severity of the threat.
   * 		</p>
   */
  Severity?: string;

  /**
   * <p>This total number of items in which the threat has been detected.
   * 		</p>
   */
  ItemCount?: number;

  /**
   * <p>Provides information about the file paths that were affected by the threat.
   * 		</p>
   */
  FilePaths?: FilePaths[];
}

export namespace Threat {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: Threat): any => ({
    ...obj,
  });
}

/**
 * <p>CVSS scores from the advisory related to the vulnerability.</p>
 */
export interface Cvss {
  /**
   * <p>The version of CVSS for the CVSS score.</p>
   */
  Version?: string;

  /**
   * <p>The base CVSS score.</p>
   */
  BaseScore?: number;

  /**
   * <p>The base scoring vector for the CVSS score.</p>
   */
  BaseVector?: string;

  /**
   * <p>The origin of the original CVSS score and vector.</p>
   */
  Source?: string;

  /**
   * <p>Adjustments to the CVSS metrics.</p>
   */
  Adjustments?: Adjustment[];
}

export namespace Cvss {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: Cvss): any => ({
    ...obj,
  });
}

/**
 * <p>A vendor that generates a vulnerability report.</p>
 */
export interface VulnerabilityVendor {
  /**
   * <p>The name of the vendor.</p>
   */
  Name: string | undefined;

  /**
   * <p>The URL of the vulnerability advisory.</p>
   */
  Url?: string;

  /**
   * <p>The severity that the vendor assigned to the vulnerability.</p>
   */
  VendorSeverity?: string;

  /**
   * <p>Indicates when the vulnerability advisory was created.</p>
   *          <p>Uses the <code>date-time</code> format specified in <a href="https://tools.ietf.org/html/rfc3339#section-5.6">RFC 3339 section 5.6, Internet
   *             Date/Time Format</a>. The value cannot contain spaces. For example,
   *             <code>2020-03-22T13:22:13.933Z</code>.</p>
   */
  VendorCreatedAt?: string;

  /**
   * <p>Indicates when the vulnerability advisory was last updated.</p>
   *          <p>Uses the <code>date-time</code> format specified in <a href="https://tools.ietf.org/html/rfc3339#section-5.6">RFC 3339 section 5.6, Internet
   *             Date/Time Format</a>. The value cannot contain spaces. For example,
   *             <code>2020-03-22T13:22:13.933Z</code>.</p>
   */
  VendorUpdatedAt?: string;
}

export namespace VulnerabilityVendor {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: VulnerabilityVendor): any => ({
    ...obj,
  });
}

/**
 * <p>Information about a software package.</p>
 */
export interface SoftwarePackage {
  /**
   * <p>The name of the software package.</p>
   */
  Name?: string;

  /**
   * <p>The version of the software package.</p>
   */
  Version?: string;

  /**
   * <p>The epoch of the software package.</p>
   */
  Epoch?: string;

  /**
   * <p>The release of the software package.</p>
   */
  Release?: string;

  /**
   * <p>The architecture used for the software package.</p>
   */
  Architecture?: string;

  /**
   * <p>The source of the package.</p>
   */
  PackageManager?: string;

  /**
   * <p>The file system path to the package manager inventory file.</p>
   */
  FilePath?: string;
}

export namespace SoftwarePackage {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: SoftwarePackage): any => ({
    ...obj,
  });
}

/**
 * <p>A vulnerability associated with a finding.</p>
 */
export interface Vulnerability {
  /**
   * <p>The identifier of the vulnerability.</p>
   */
  Id: string | undefined;

  /**
   * <p>List of software packages that have the vulnerability.</p>
   */
  VulnerablePackages?: SoftwarePackage[];

  /**
   * <p>CVSS scores from the advisory related to the vulnerability.</p>
   */
  Cvss?: Cvss[];

  /**
   * <p>List of vulnerabilities that are related to this vulnerability.</p>
   */
  RelatedVulnerabilities?: string[];

  /**
   * <p>Information about the vendor that generates the vulnerability report.</p>
   */
  Vendor?: VulnerabilityVendor;

  /**
   * <p>A list of URLs that provide additional information about the vulnerability.</p>
   */
  ReferenceUrls?: string[];
}

export namespace Vulnerability {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: Vulnerability): any => ({
    ...obj,
  });
}

/**
 * <p>Provides information about the status of the investigation into a finding.</p>
 */
export interface Workflow {
  /**
   * <p>The status of the investigation into the finding. The workflow status is specific to an individual finding. It does not affect the generation of new findings. For example, setting the workflow status to <code>SUPPRESSED</code> or <code>RESOLVED</code> does not prevent a new finding for the same issue.</p>
   *          <p>The allowed values are the following.</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>NEW</code> - The initial state of a finding, before it is reviewed.</p>
   *                <p>Security Hub also resets the workflow status from <code>NOTIFIED</code> or
   *                   <code>RESOLVED</code> to <code>NEW</code> in the following cases:</p>
   *                <ul>
   *                   <li>
   *                      <p>
   *                         <code>RecordState</code> changes from <code>ARCHIVED</code> to
   *                         <code>ACTIVE</code>.</p>
   *                   </li>
   *                   <li>
   *                      <p>
   *                         <code>ComplianceStatus</code> changes from <code>PASSED</code> to either
   *                         <code>WARNING</code>, <code>FAILED</code>, or
   *                      <code>NOT_AVAILABLE</code>.</p>
   *                   </li>
   *                </ul>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>NOTIFIED</code> - Indicates that you notified the resource owner about the
   *                security issue. Used when the initial reviewer is not the resource owner, and needs
   *                intervention from the resource owner.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>SUPPRESSED</code> - Indicates that you reviewed the finding and do not believe that any action is needed. The finding is no longer updated.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>RESOLVED</code> - The finding was reviewed and remediated and is now
   *                considered resolved. </p>
   *             </li>
   *          </ul>
   */
  Status?: WorkflowStatus | string;
}

export namespace Workflow {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: Workflow): any => ({
    ...obj,
  });
}

/**
 * <p>A string filter for querying findings.</p>
 */
export interface StringFilter {
  /**
   * <p>The string filter value. Filter values are case sensitive. For example, the product name
   *          for control-based findings is <code>Security Hub</code>. If you provide <code>security hub</code>
   *          as the filter text, then there is no match.</p>
   */
  Value?: string;

  /**
   * <p>The condition to apply to a string value when querying for findings. To search for
   *          values that contain the filter criteria value, use one of the following comparison
   *          operators:</p>
   *          <ul>
   *             <li>
   *                <p>To search for values that exactly match the filter value, use
   *                <code>EQUALS</code>.</p>
   *                <p>For example, the filter <code>ResourceType EQUALS AwsEc2SecurityGroup</code> only
   *                matches findings that have a resource type of
   *                <code>AwsEc2SecurityGroup</code>.</p>
   *             </li>
   *             <li>
   *                <p>To search for values that start with the filter value, use
   *                <code>PREFIX</code>.</p>
   *                <p>For example, the filter <code>ResourceType PREFIX AwsIam</code> matches findings
   *                that have a resource type that starts with <code>AwsIam</code>. Findings with a
   *                resource type of <code>AwsIamPolicy</code>, <code>AwsIamRole</code>, or
   *                   <code>AwsIamUser</code> would all match.</p>
   *             </li>
   *          </ul>
   *          <p>
   *             <code>EQUALS</code> and <code>PREFIX</code> filters on the same field are joined by
   *             <code>OR</code>. A finding matches if it matches any one of those filters.</p>
   *          <p>To search for values that do not contain the filter criteria value, use one of the
   *          following comparison operators:</p>
   *          <ul>
   *             <li>
   *                <p>To search for values that do not exactly match the filter value, use
   *                   <code>NOT_EQUALS</code>.</p>
   *                <p>For example, the filter <code>ResourceType NOT_EQUALS AwsIamPolicy</code> matches
   *                findings that have a resource type other than <code>AwsIamPolicy</code>.</p>
   *             </li>
   *             <li>
   *                <p>To search for values that do not start with the filter value, use
   *                   <code>PREFIX_NOT_EQUALS</code>.</p>
   *                <p>For example, the filter <code>ResourceType PREFIX_NOT_EQUALS AwsIam</code> matches
   *                findings that have a resource type that does not start with <code>AwsIam</code>.
   *                Findings with a resource type of <code>AwsIamPolicy</code>, <code>AwsIamRole</code>,
   *                or <code>AwsIamUser</code> would all be excluded from the results.</p>
   *             </li>
   *          </ul>
   *          <p>
   *             <code>NOT_EQUALS</code> and <code>PREFIX_NOT_EQUALS</code> filters on the same field are
   *          joined by <code>AND</code>. A finding matches only if it matches all of those
   *          filters.</p>
   *          <p>For filters on the same field, you cannot provide both an <code>EQUALS</code> filter and
   *          a <code>NOT_EQUALS</code> or <code>PREFIX_NOT_EQUALS</code> filter. Combining filters in
   *          this way always returns an error, even if the provided filter values would return valid
   *          results.</p>
   *          <p>You can combine <code>PREFIX</code> filters with <code>NOT_EQUALS</code> or
   *          <code>PREFIX_NOT_EQUALS</code> filters for the same field. Security Hub first processes the
   *             <code>PREFIX</code> filters, then the <code>NOT_EQUALS</code> or
   *             <code>PREFIX_NOT_EQUALS</code> filters.</p>
   *          <p> For example, for the following filter, Security Hub first identifies findings that have
   *          resource types that start with either <code>AwsIAM</code> or <code>AwsEc2</code>. It then
   *          excludes findings that have a resource type of <code>AwsIamPolicy</code> and findings that
   *          have a resource type of <code>AwsEc2NetworkInterface</code>.</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>ResourceType PREFIX AwsIam</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>ResourceType PREFIX AwsEc2</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>ResourceType NOT_EQUALS AwsIamPolicy</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>ResourceType NOT_EQUALS AwsEc2NetworkInterface</code>
   *                </p>
   *             </li>
   *          </ul>
   */
  Comparison?: StringFilterComparison | string;
}

export namespace StringFilter {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: StringFilter): any => ({
    ...obj,
  });
}

/**
 * <p>A number filter for querying findings.</p>
 */
export interface NumberFilter {
  /**
   * <p>The greater-than-equal condition to be applied to a single field when querying for
   *          findings. </p>
   */
  Gte?: number;

  /**
   * <p>The less-than-equal condition to be applied to a single field when querying for
   *          findings. </p>
   */
  Lte?: number;

  /**
   * <p>The equal-to condition to be applied to a single field when querying for
   *          findings.</p>
   */
  Eq?: number;
}

export namespace NumberFilter {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: NumberFilter): any => ({
    ...obj,
  });
}

/**
 * <p>A date range for the date filter.</p>
 */
export interface DateRange {
  /**
   * <p>A date range value for the date filter.</p>
   */
  Value?: number;

  /**
   * <p>A date range unit for the date filter.</p>
   */
  Unit?: DateRangeUnit | string;
}

export namespace DateRange {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DateRange): any => ({
    ...obj,
  });
}

/**
 * <p>A date filter for querying findings.</p>
 */
export interface DateFilter {
  /**
   * <p>A start date for the date filter.</p>
   */
  Start?: string;

  /**
   * <p>An end date for the date filter.</p>
   */
  End?: string;

  /**
   * <p>A date range for the date filter.</p>
   */
  DateRange?: DateRange;
}

export namespace DateFilter {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DateFilter): any => ({
    ...obj,
  });
}

/**
 * <p>A keyword filter for querying findings.</p>
 */
export interface KeywordFilter {
  /**
   * <p>A value for the keyword.</p>
   */
  Value?: string;
}

export namespace KeywordFilter {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: KeywordFilter): any => ({
    ...obj,
  });
}

/**
 * <p>The IP filter for querying findings.</p>
 */
export interface IpFilter {
  /**
   * <p>A finding's CIDR value.</p>
   */
  Cidr?: string;
}

export namespace IpFilter {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: IpFilter): any => ({
    ...obj,
  });
}

/**
 * <p>A map filter for querying findings. Each map filter provides the field to check, the
 *          value to look for, and the comparison operator.</p>
 */
export interface MapFilter {
  /**
   * <p>The key of the map filter. For example, for <code>ResourceTags</code>, <code>Key</code>
   *          identifies the name of the tag. For <code>UserDefinedFields</code>, <code>Key</code> is the
   *          name of the field.</p>
   */
  Key?: string;

  /**
   * <p>The value for the key in the map filter. Filter values are case sensitive. For example,
   *          one of the values for a tag called <code>Department</code> might be <code>Security</code>.
   *          If you provide <code>security</code> as the filter value, then there is no match.</p>
   */
  Value?: string;

  /**
   * <p>The condition to apply to the key value when querying for findings with a map
   *          filter.</p>
   *          <p>To search for values that exactly match the filter value, use <code>EQUALS</code>. For
   *          example, for the <code>ResourceTags</code> field, the filter <code>Department EQUALS
   *             Security</code> matches findings that have the value <code>Security</code> for the tag
   *             <code>Department</code>.</p>
   *          <p>To search for values other than the filter value, use <code>NOT_EQUALS</code>. For
   *          example, for the <code>ResourceTags</code> field, the filter <code>Department NOT_EQUALS
   *             Finance</code> matches findings that do not have the value <code>Finance</code> for the
   *          tag <code>Department</code>.</p>
   *          <p>
   *             <code>EQUALS</code> filters on the same field are joined by <code>OR</code>. A finding
   *          matches if it matches any one of those filters.</p>
   *          <p>
   *             <code>NOT_EQUALS</code> filters on the same field are joined by <code>AND</code>. A
   *          finding matches only if it matches all of those filters.</p>
   *          <p>You cannot have both an <code>EQUALS</code> filter and a <code>NOT_EQUALS</code> filter
   *          on the same field.</p>
   */
  Comparison?: MapFilterComparison | string;
}

export namespace MapFilter {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: MapFilter): any => ({
    ...obj,
  });
}

/**
 * <p>Boolean filter for querying findings.</p>
 */
export interface BooleanFilter {
  /**
   * <p>The value of the boolean.</p>
   */
  Value?: boolean;
}

export namespace BooleanFilter {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: BooleanFilter): any => ({
    ...obj,
  });
}

/**
 * <p>The reason for the current status of a standard subscription.</p>
 */
export interface StandardsStatusReason {
  /**
   * <p>The reason code that represents the reason for the current status of a standard subscription.</p>
   */
  StatusReasonCode: StatusReasonCode | string | undefined;
}

export namespace StandardsStatusReason {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: StandardsStatusReason): any => ({
    ...obj,
  });
}

export enum IntegrationType {
  RECEIVE_FINDINGS_FROM_SECURITY_HUB = "RECEIVE_FINDINGS_FROM_SECURITY_HUB",
  SEND_FINDINGS_TO_SECURITY_HUB = "SEND_FINDINGS_TO_SECURITY_HUB",
  UPDATE_FINDINGS_IN_SECURITY_HUB = "UPDATE_FINDINGS_IN_SECURITY_HUB",
}

/**
 * <p>The insight result values returned by the <code>GetInsightResults</code>
 *          operation.</p>
 */
export interface InsightResultValue {
  /**
   * <p>The value of the attribute that the findings are grouped by for the insight whose
   *          results are returned by the <code>GetInsightResults</code> operation.</p>
   */
  GroupByAttributeValue: string | undefined;

  /**
   * <p>The number of findings returned for each <code>GroupByAttributeValue</code>.</p>
   */
  Count: number | undefined;
}

export namespace InsightResultValue {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: InsightResultValue): any => ({
    ...obj,
  });
}
