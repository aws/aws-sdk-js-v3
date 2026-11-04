// smithy-typescript generated code
import type {
  AwsIamAccessKeyStatus,
  AwsS3BucketNotificationConfigurationS3KeyFilterRuleName,
  ComplianceStatus,
  ConnectionDirection,
  MalwareState,
  MalwareType,
  NetworkDirection,
  SeverityLabel,
} from "./enums";
import type {
  Actor,
  AssociatedStandard,
  AvailabilityZone,
  AwsEcsContainerDetails,
  AwsEcsTaskDefinitionContainerDefinitionsDetails,
  AwsEcsTaskDefinitionInferenceAcceleratorsDetails,
  AwsEcsTaskDefinitionPlacementConstraintsDetails,
  AwsEcsTaskDefinitionProxyConfigurationProxyConfigurationPropertiesDetails,
  RelatedFinding,
} from "./models_0";

/**
 * The configuration details for the App Mesh proxy.
 *
 * @public
 */
export interface AwsEcsTaskDefinitionProxyConfigurationDetails {
  /**
   * The name of the container that will serve as the App Mesh proxy.
   *
   * @public
   */
  ContainerName?: string | undefined;

  /**
   * The set of network configuration parameters to provide to the Container Network Interface (CNI) plugin, specified as key-value pairs.
   *
   * @public
   */
  ProxyConfigurationProperties?: AwsEcsTaskDefinitionProxyConfigurationProxyConfigurationPropertiesDetails[] | undefined;

  /**
   * The proxy type.
   *
   * @public
   */
  Type?: string | undefined;
}

/**
 * Information about a Docker volume.
 *
 * @public
 */
export interface AwsEcsTaskDefinitionVolumesDockerVolumeConfigurationDetails {
  /**
   * Whether to create the Docker volume automatically if it does not already exist.
   *
   * @public
   */
  Autoprovision?: boolean | undefined;

  /**
   * The Docker volume driver to use.
   *
   * @public
   */
  Driver?: string | undefined;

  /**
   * A map of Docker driver-specific options that are passed through.
   *
   * @public
   */
  DriverOpts?: Record<string, string> | undefined;

  /**
   * Custom metadata to add to the Docker volume.
   *
   * @public
   */
  Labels?: Record<string, string> | undefined;

  /**
   * The scope for the Docker volume that determines its lifecycle. Docker volumes that are scoped to a task are provisioned automatically when the task starts and destroyed when the task stops. Docker volumes that are shared persist after the task stops. Valid values are `shared` or `task`.
   *
   * @public
   */
  Scope?: string | undefined;
}

/**
 * @public
 */
export interface AwsEcsTaskDefinitionVolumesEfsVolumeConfigurationAuthorizationConfigDetails {
  /**
   * The Amazon EFS access point identifier to use.
   *
   * @public
   */
  AccessPointId?: string | undefined;

  /**
   * Whether to use the Amazon ECS task IAM role defined in a task definition when mounting the Amazon EFS file system.
   *
   * @public
   */
  Iam?: string | undefined;
}

/**
 * Information about the Amazon Elastic File System file system that is used for task storage.
 *
 * @public
 */
export interface AwsEcsTaskDefinitionVolumesEfsVolumeConfigurationDetails {
  /**
   * The authorization configuration details for the Amazon EFS file system.
   *
   * @public
   */
  AuthorizationConfig?: AwsEcsTaskDefinitionVolumesEfsVolumeConfigurationAuthorizationConfigDetails | undefined;

  /**
   * The Amazon EFS file system identifier to use.
   *
   * @public
   */
  FilesystemId?: string | undefined;

  /**
   * The directory within the Amazon EFS file system to mount as the root directory inside the host.
   *
   * @public
   */
  RootDirectory?: string | undefined;

  /**
   * Whether to enable encryption for Amazon EFS data in transit between the Amazon ECS host and the Amazon EFS server.
   *
   * @public
   */
  TransitEncryption?: string | undefined;

  /**
   * The port to use when sending encrypted data between the Amazon ECS host and the Amazon EFS server.
   *
   * @public
   */
  TransitEncryptionPort?: number | undefined;
}

/**
 * Information about a bind mount host volume.
 *
 * @public
 */
export interface AwsEcsTaskDefinitionVolumesHostDetails {
  /**
   * The path on the host container instance that is presented to the container.
   *
   * @public
   */
  SourcePath?: string | undefined;
}

/**
 * A data volume to mount from another container.
 *
 * @public
 */
export interface AwsEcsTaskDefinitionVolumesDetails {
  /**
   * Information about a Docker volume.
   *
   * @public
   */
  DockerVolumeConfiguration?: AwsEcsTaskDefinitionVolumesDockerVolumeConfigurationDetails | undefined;

  /**
   * Information about the Amazon Elastic File System file system that is used for task storage.
   *
   * @public
   */
  EfsVolumeConfiguration?: AwsEcsTaskDefinitionVolumesEfsVolumeConfigurationDetails | undefined;

  /**
   * Information about a bind mount host volume.
   *
   * @public
   */
  Host?: AwsEcsTaskDefinitionVolumesHostDetails | undefined;

  /**
   * The name of the data volume.
   *
   * @public
   */
  Name?: string | undefined;
}

/**
 * Details about a task definition. A task definition describes the container and volume definitions of an Amazon Elastic Container Service task.
 *
 * @public
 */
export interface AwsEcsTaskDefinitionDetails {
  /**
   * The container definitions that describe the containers that make up the task.
   *
   * @public
   */
  ContainerDefinitions?: AwsEcsTaskDefinitionContainerDefinitionsDetails[] | undefined;

  /**
   * The number of CPU units used by the task.Valid values are as follows:
   *
   * - `256 (.25 vCPU)`
   * - `512 (.5 vCPU)`
   * - `1024 (1 vCPU)`
   * - `2048 (2 vCPU)`
   * - `4096 (4 vCPU)`
   *
   * @public
   */
  Cpu?: string | undefined;

  /**
   * The ARN of the task execution role that grants the container agent permission to make API calls on behalf of the container user.
   *
   * @public
   */
  ExecutionRoleArn?: string | undefined;

  /**
   * The name of a family that this task definition is registered to.
   *
   * @public
   */
  Family?: string | undefined;

  /**
   * The Elastic Inference accelerators to use for the containers in the task.
   *
   * @public
   */
  InferenceAccelerators?: AwsEcsTaskDefinitionInferenceAcceleratorsDetails[] | undefined;

  /**
   * The inter-process communication (IPC) resource namespace to use for the containers in the task. Valid values are as follows:
   *
   * - `host`
   * - `none`
   * - `task`
   *
   * @public
   */
  IpcMode?: string | undefined;

  /**
   * The amount (in MiB) of memory used by the task.
   *
   * For tasks that are hosted on Amazon EC2, you can provide a task-level memory value or a container-level memory value. For tasks that are hosted on Fargate, you must use one of the [specified values](https://docs.aws.amazon.com/AmazonECS/latest/developerguide/task_definition_parameters.html#task_size) in the **Amazon Elastic Container Service Developer Guide** , which determines your range of supported values for the `Cpu` and `Memory` parameters.
   *
   * @public
   */
  Memory?: string | undefined;

  /**
   * The Docker networking mode to use for the containers in the task. Valid values are as follows:
   *
   * - `awsvpc`
   * - `bridge`
   * - `host`
   * - `none`
   *
   * @public
   */
  NetworkMode?: string | undefined;

  /**
   * The process namespace to use for the containers in the task. Valid values are `host` or `task`.
   *
   * @public
   */
  PidMode?: string | undefined;

  /**
   * The placement constraint objects to use for tasks.
   *
   * @public
   */
  PlacementConstraints?: AwsEcsTaskDefinitionPlacementConstraintsDetails[] | undefined;

  /**
   * The configuration details for the App Mesh proxy.
   *
   * @public
   */
  ProxyConfiguration?: AwsEcsTaskDefinitionProxyConfigurationDetails | undefined;

  /**
   * The task launch types that the task definition was validated against.
   *
   * @public
   */
  RequiresCompatibilities?: string[] | undefined;

  /**
   * The short name or ARN of the IAM role that grants containers in the task permission to call Amazon Web Services API operations on your behalf.
   *
   * @public
   */
  TaskRoleArn?: string | undefined;

  /**
   * The data volume definitions for the task.
   *
   * @public
   */
  Volumes?: AwsEcsTaskDefinitionVolumesDetails[] | undefined;

  /**
   * The status of the task definition.
   *
   * @public
   */
  Status?: string | undefined;
}

/**
 * Provides details on a container instance bind mount host volume.
 *
 * @public
 */
export interface AwsEcsTaskVolumeHostDetails {
  /**
   * When the `host` parameter is used, specify a `sourcePath` to declare the path on the host container instance that's presented to the container.
   *
   * @public
   */
  SourcePath?: string | undefined;
}

/**
 * Provides information about a data volume that's used in a task definition.
 *
 * @public
 */
export interface AwsEcsTaskVolumeDetails {
  /**
   * The name of the volume. Up to 255 letters (uppercase and lowercase), numbers, underscores, and hyphens are allowed. This name is referenced in the `sourceVolume` parameter of container definition `mountPoints`.
   *
   * @public
   */
  Name?: string | undefined;

  /**
   * This parameter is specified when you use bind mount host volumes. The contents of the `host` parameter determine whether your bind mount host volume persists on the host container instance and where it's stored.
   *
   * @public
   */
  Host?: AwsEcsTaskVolumeHostDetails | undefined;
}

/**
 * Provides details about a task in a cluster.
 *
 * @public
 */
export interface AwsEcsTaskDetails {
  /**
   * The Amazon Resource Name (ARN) of the cluster that hosts the task.
   *
   * @public
   */
  ClusterArn?: string | undefined;

  /**
   * The ARN of the task definition that creates the task.
   *
   * @public
   */
  TaskDefinitionArn?: string | undefined;

  /**
   * The version counter for the task.
   *
   * @public
   */
  Version?: string | undefined;

  /**
   * The Unix timestamp for the time when the task was created. More specifically, it's for the time when the task entered the `PENDING` state.
   *
   * @public
   */
  CreatedAt?: string | undefined;

  /**
   * The Unix timestamp for the time when the task started. More specifically, it's for the time when the task transitioned from the `PENDING` state to the `RUNNING` state.
   *
   * @public
   */
  StartedAt?: string | undefined;

  /**
   * The tag specified when a task is started. If an Amazon ECS service started the task, the `startedBy` parameter contains the deployment ID of that service.
   *
   * @public
   */
  StartedBy?: string | undefined;

  /**
   * The name of the task group that's associated with the task.
   *
   * @public
   */
  Group?: string | undefined;

  /**
   * Details about the data volume that is used in a task definition.
   *
   * @public
   */
  Volumes?: AwsEcsTaskVolumeDetails[] | undefined;

  /**
   * The containers that are associated with the task.
   *
   * @public
   */
  Containers?: AwsEcsContainerDetails[] | undefined;
}

/**
 * Provides details for all file system operations using this Amazon EFS access point.
 *
 * @public
 */
export interface AwsEfsAccessPointPosixUserDetails {
  /**
   * The POSIX group ID used for all file system operations using this access point.
   *
   * @public
   */
  Gid?: string | undefined;

  /**
   * Secondary POSIX group IDs used for all file system operations using this access point.
   *
   * @public
   */
  SecondaryGids?: string[] | undefined;

  /**
   * The POSIX user ID used for all file system operations using this access point.
   *
   * @public
   */
  Uid?: string | undefined;
}

/**
 * Provides information about the settings that Amazon EFS uses to create the root directory when a client connects to an access point.
 *
 * @public
 */
export interface AwsEfsAccessPointRootDirectoryCreationInfoDetails {
  /**
   * Specifies the POSIX group ID to apply to the root directory.
   *
   * @public
   */
  OwnerGid?: string | undefined;

  /**
   * Specifies the POSIX user ID to apply to the root directory.
   *
   * @public
   */
  OwnerUid?: string | undefined;

  /**
   * Specifies the POSIX permissions to apply to the root directory, in the format of an octal number representing the file's mode bits.
   *
   * @public
   */
  Permissions?: string | undefined;
}

/**
 * Provides information about the directory on the Amazon EFS file system that the access point exposes as the root directory to NFS clients using the access point.
 *
 * @public
 */
export interface AwsEfsAccessPointRootDirectoryDetails {
  /**
   * Specifies the POSIX IDs and permissions to apply to the access point's root directory.
   *
   * @public
   */
  CreationInfo?: AwsEfsAccessPointRootDirectoryCreationInfoDetails | undefined;

  /**
   * Specifies the path on the Amazon EFS file system to expose as the root directory to NFS clients using the access point to access the EFS file system. A path can have up to four subdirectories. If the specified path does not exist, you are required to provide `CreationInfo`.
   *
   * @public
   */
  Path?: string | undefined;
}

/**
 * Provides information about an Amazon EFS access point.
 *
 * @public
 */
export interface AwsEfsAccessPointDetails {
  /**
   * The ID of the Amazon EFS access point.
   *
   * @public
   */
  AccessPointId?: string | undefined;

  /**
   * The Amazon Resource Name (ARN) of the Amazon EFS access point.
   *
   * @public
   */
  Arn?: string | undefined;

  /**
   * The opaque string specified in the request to ensure idempotent creation.
   *
   * @public
   */
  ClientToken?: string | undefined;

  /**
   * The ID of the Amazon EFS file system that the access point applies to.
   *
   * @public
   */
  FileSystemId?: string | undefined;

  /**
   * The full POSIX identity, including the user ID, group ID, and secondary group IDs on the access point, that is used for all file operations by NFS clients using the access point.
   *
   * @public
   */
  PosixUser?: AwsEfsAccessPointPosixUserDetails | undefined;

  /**
   * The directory on the Amazon EFS file system that the access point exposes as the root directory to NFS clients using the access point.
   *
   * @public
   */
  RootDirectory?: AwsEfsAccessPointRootDirectoryDetails | undefined;
}

/**
 * Details for a cluster logging configuration.
 *
 * @public
 */
export interface AwsEksClusterLoggingClusterLoggingDetails {
  /**
   * Whether the logging types that are listed in `Types` are enabled.
   *
   * @public
   */
  Enabled?: boolean | undefined;

  /**
   * A list of logging types. Valid values are as follows:
   *
   * - `api`
   * - `audit`
   * - `authenticator`
   * - `controllerManager`
   * - `scheduler`
   *
   * @public
   */
  Types?: string[] | undefined;
}

/**
 * The logging configuration for an Amazon EKS cluster.
 *
 * @public
 */
export interface AwsEksClusterLoggingDetails {
  /**
   * Cluster logging configurations.
   *
   * @public
   */
  ClusterLogging?: AwsEksClusterLoggingClusterLoggingDetails[] | undefined;
}

/**
 * Information about the VPC configuration used by the cluster control plane.
 *
 * @public
 */
export interface AwsEksClusterResourcesVpcConfigDetails {
  /**
   * The security groups that are associated with the cross-account elastic network interfaces that are used to allow communication between your nodes and the Amazon EKS control plane.
   *
   * @public
   */
  SecurityGroupIds?: string[] | undefined;

  /**
   * The subnets that are associated with the cluster.
   *
   * @public
   */
  SubnetIds?: string[] | undefined;

  /**
   * Indicates whether the Amazon EKS public API server endpoint is turned on. If the Amazon EKS public API server endpoint is turned off, your cluster's Kubernetes API server can only receive requests that originate from within the cluster VPC.
   *
   * @public
   */
  EndpointPublicAccess?: boolean | undefined;
}

/**
 * Provides details about an Amazon EKS cluster.
 *
 * @public
 */
export interface AwsEksClusterDetails {
  /**
   * The ARN of the cluster.
   *
   * @public
   */
  Arn?: string | undefined;

  /**
   * The certificate authority data for the cluster.
   *
   * @public
   */
  CertificateAuthorityData?: string | undefined;

  /**
   * The status of the cluster. Valid values are as follows:
   *
   * - `ACTIVE`
   * - `CREATING`
   * - `DELETING`
   * - `FAILED`
   * - `PENDING`
   * - `UPDATING`
   *
   * @public
   */
  ClusterStatus?: string | undefined;

  /**
   * The endpoint for the Amazon EKS API server.
   *
   * @public
   */
  Endpoint?: string | undefined;

  /**
   * The name of the cluster.
   *
   * @public
   */
  Name?: string | undefined;

  /**
   * The VPC configuration used by the cluster control plane.
   *
   * @public
   */
  ResourcesVpcConfig?: AwsEksClusterResourcesVpcConfigDetails | undefined;

  /**
   * The ARN of the IAM role that provides permissions for the Amazon EKS control plane to make calls to Amazon Web Services API operations on your behalf.
   *
   * @public
   */
  RoleArn?: string | undefined;

  /**
   * The Amazon EKS server version for the cluster.
   *
   * @public
   */
  Version?: string | undefined;

  /**
   * The logging configuration for the cluster.
   *
   * @public
   */
  Logging?: AwsEksClusterLoggingDetails | undefined;
}

/**
 * Contains information about a link to another environment that is in the same group.
 *
 * @public
 */
export interface AwsElasticBeanstalkEnvironmentEnvironmentLink {
  /**
   * The name of the linked environment.
   *
   * @public
   */
  EnvironmentName?: string | undefined;

  /**
   * The name of the environment link.
   *
   * @public
   */
  LinkName?: string | undefined;
}

/**
 * A configuration option setting for the environment.
 *
 * @public
 */
export interface AwsElasticBeanstalkEnvironmentOptionSetting {
  /**
   * The type of resource that the configuration option is associated with.
   *
   * @public
   */
  Namespace?: string | undefined;

  /**
   * The name of the option.
   *
   * @public
   */
  OptionName?: string | undefined;

  /**
   * The name of the resource.
   *
   * @public
   */
  ResourceName?: string | undefined;

  /**
   * The value of the configuration setting.
   *
   * @public
   */
  Value?: string | undefined;
}

/**
 * Contains information about the tier of the environment.
 *
 * @public
 */
export interface AwsElasticBeanstalkEnvironmentTier {
  /**
   * The name of the environment tier. Valid values are `WebServer` or `Worker`.
   *
   * @public
   */
  Name?: string | undefined;

  /**
   * The type of environment tier. Valid values are `Standard` or `SQS/HTTP`.
   *
   * @public
   */
  Type?: string | undefined;

  /**
   * The version of the environment tier.
   *
   * @public
   */
  Version?: string | undefined;
}

/**
 * Contains details about an Elastic Beanstalk environment.
 *
 * @public
 */
export interface AwsElasticBeanstalkEnvironmentDetails {
  /**
   * The name of the application that is associated with the environment.
   *
   * @public
   */
  ApplicationName?: string | undefined;

  /**
   * The URL to the CNAME for this environment.
   *
   * @public
   */
  Cname?: string | undefined;

  /**
   * The creation date for this environment.
   *
   * @public
   */
  DateCreated?: string | undefined;

  /**
   * The date when this environment was last modified.
   *
   * @public
   */
  DateUpdated?: string | undefined;

  /**
   * A description of the environment.
   *
   * @public
   */
  Description?: string | undefined;

  /**
   * For load-balanced, autoscaling environments, the URL to the load balancer. For single-instance environments, the IP address of the instance.
   *
   * @public
   */
  EndpointUrl?: string | undefined;

  /**
   * The ARN of the environment.
   *
   * @public
   */
  EnvironmentArn?: string | undefined;

  /**
   * The identifier of the environment.
   *
   * @public
   */
  EnvironmentId?: string | undefined;

  /**
   * Links to other environments in the same group.
   *
   * @public
   */
  EnvironmentLinks?: AwsElasticBeanstalkEnvironmentEnvironmentLink[] | undefined;

  /**
   * The name of the environment.
   *
   * @public
   */
  EnvironmentName?: string | undefined;

  /**
   * The configuration setting for the environment.
   *
   * @public
   */
  OptionSettings?: AwsElasticBeanstalkEnvironmentOptionSetting[] | undefined;

  /**
   * The ARN of the platform version for the environment.
   *
   * @public
   */
  PlatformArn?: string | undefined;

  /**
   * The name of the solution stack that is deployed with the environment.
   *
   * @public
   */
  SolutionStackName?: string | undefined;

  /**
   * The current operational status of the environment. Valid values are as follows:
   *
   * - `Aborting`
   * - `Launching`
   * - `LinkingFrom`
   * - `LinkingTo`
   * - `Ready`
   * - `Terminated`
   * - `Terminating`
   * - `Updating`
   *
   * @public
   */
  Status?: string | undefined;

  /**
   * The tier of the environment.
   *
   * @public
   */
  Tier?: AwsElasticBeanstalkEnvironmentTier | undefined;

  /**
   * The application version of the environment.
   *
   * @public
   */
  VersionLabel?: string | undefined;
}

/**
 * Additional options for the domain endpoint, such as whether to require HTTPS for all traffic.
 *
 * @public
 */
export interface AwsElasticsearchDomainDomainEndpointOptions {
  /**
   * Whether to require that all traffic to the domain arrive over HTTPS.
   *
   * @public
   */
  EnforceHTTPS?: boolean | undefined;

  /**
   * The TLS security policy to apply to the HTTPS endpoint of the OpenSearch domain.
   *
   * Valid values:
   *
   * - `Policy-Min-TLS-1-0-2019-07`, which supports TLSv1.0 and higher
   * - `Policy-Min-TLS-1-2-2019-07`, which only supports TLSv1.2
   *
   * @public
   */
  TLSSecurityPolicy?: string | undefined;
}

/**
 * Configuration options for zone awareness.
 *
 * @public
 */
export interface AwsElasticsearchDomainElasticsearchClusterConfigZoneAwarenessConfigDetails {
  /**
   * he number of Availability Zones that the domain uses. Valid values are 2 and 3. The default is 2.
   *
   * @public
   */
  AvailabilityZoneCount?: number | undefined;
}

/**
 * details about the configuration of an OpenSearch cluster.
 *
 * @public
 */
export interface AwsElasticsearchDomainElasticsearchClusterConfigDetails {
  /**
   * The number of instances to use for the master node. If this attribute is specified, then `DedicatedMasterEnabled` must be `true`.
   *
   * @public
   */
  DedicatedMasterCount?: number | undefined;

  /**
   * Whether to use a dedicated master node for the Elasticsearch domain. A dedicated master node performs cluster management tasks, but doesn't hold data or respond to data upload requests.
   *
   * @public
   */
  DedicatedMasterEnabled?: boolean | undefined;

  /**
   * The hardware configuration of the computer that hosts the dedicated master node. A sample value is `m3.medium.elasticsearch`. If this attribute is specified, then `DedicatedMasterEnabled` must be `true`.
   *
   * For a list of valid values, see [Supported instance types in Amazon OpenSearch Service](https://docs.aws.amazon.com/opensearch-service/latest/developerguide/supported-instance-types.html) in the *Amazon OpenSearch Service Developer Guide*.
   *
   * @public
   */
  DedicatedMasterType?: string | undefined;

  /**
   * The number of data nodes to use in the Elasticsearch domain.
   *
   * @public
   */
  InstanceCount?: number | undefined;

  /**
   * The instance type for your data nodes. For example, `m3.medium.elasticsearch`.
   *
   * For a list of valid values, see [Supported instance types in Amazon OpenSearch Service](https://docs.aws.amazon.com/opensearch-service/latest/developerguide/supported-instance-types.html) in the *Amazon OpenSearch Service Developer Guide*.
   *
   * @public
   */
  InstanceType?: string | undefined;

  /**
   * Configuration options for zone awareness. Provided if `ZoneAwarenessEnabled` is `true`.
   *
   * @public
   */
  ZoneAwarenessConfig?: AwsElasticsearchDomainElasticsearchClusterConfigZoneAwarenessConfigDetails | undefined;

  /**
   * Whether to enable zone awareness for the Elasticsearch domain. When zone awareness is enabled, OpenSearch allocates the cluster's nodes and replica index shards across Availability Zones in the same Region. This prevents data loss and minimizes downtime if a node or data center fails.
   *
   * @public
   */
  ZoneAwarenessEnabled?: boolean | undefined;
}

/**
 * Details about the configuration for encryption at rest.
 *
 * @public
 */
export interface AwsElasticsearchDomainEncryptionAtRestOptions {
  /**
   * Whether encryption at rest is enabled.
   *
   * @public
   */
  Enabled?: boolean | undefined;

  /**
   * The KMS key ID. Takes the form `1a2a3a4-1a2a-3a4a-5a6a-1a2a3a4a5a6a`.
   *
   * @public
   */
  KmsKeyId?: string | undefined;
}

/**
 * The log configuration.
 *
 * @public
 */
export interface AwsElasticsearchDomainLogPublishingOptionsLogConfig {
  /**
   * The ARN of the CloudWatch Logs group to publish the logs to.
   *
   * @public
   */
  CloudWatchLogsLogGroupArn?: string | undefined;

  /**
   * Whether the log publishing is enabled.
   *
   * @public
   */
  Enabled?: boolean | undefined;
}

/**
 * configures the CloudWatch Logs to publish for the Elasticsearch domain.
 *
 * @public
 */
export interface AwsElasticsearchDomainLogPublishingOptions {
  /**
   * Configures the OpenSearch index logs publishing.
   *
   * @public
   */
  IndexSlowLogs?: AwsElasticsearchDomainLogPublishingOptionsLogConfig | undefined;

  /**
   * Configures the OpenSearch search slow log publishing.
   *
   * @public
   */
  SearchSlowLogs?: AwsElasticsearchDomainLogPublishingOptionsLogConfig | undefined;

  /**
   * The log configuration.
   *
   * @public
   */
  AuditLogs?: AwsElasticsearchDomainLogPublishingOptionsLogConfig | undefined;
}

/**
 * Details about the configuration for node-to-node encryption.
 *
 * @public
 */
export interface AwsElasticsearchDomainNodeToNodeEncryptionOptions {
  /**
   * Whether node-to-node encryption is enabled.
   *
   * @public
   */
  Enabled?: boolean | undefined;
}

/**
 * Information about the state of the domain relative to the latest service software.
 *
 * @public
 */
export interface AwsElasticsearchDomainServiceSoftwareOptions {
  /**
   * The epoch time when the deployment window closes for required updates. After this time, Amazon OpenSearch Service schedules the software upgrade automatically.
   *
   * @public
   */
  AutomatedUpdateDate?: string | undefined;

  /**
   * Whether a request to update the domain can be canceled.
   *
   * @public
   */
  Cancellable?: boolean | undefined;

  /**
   * The version of the service software that is currently installed on the domain.
   *
   * @public
   */
  CurrentVersion?: string | undefined;

  /**
   * A more detailed description of the service software status.
   *
   * @public
   */
  Description?: string | undefined;

  /**
   * The most recent version of the service software.
   *
   * @public
   */
  NewVersion?: string | undefined;

  /**
   * Whether a service software update is available for the domain.
   *
   * @public
   */
  UpdateAvailable?: boolean | undefined;

  /**
   * The status of the service software update. Valid values are as follows:
   *
   * - `COMPLETED`
   * - `ELIGIBLE`
   * - `IN_PROGRESS`
   * - `NOT_ELIGIBLE`
   * - `PENDING_UPDATE`
   *
   * @public
   */
  UpdateStatus?: string | undefined;
}

/**
 * Information that OpenSearch derives based on `VPCOptions` for the domain.
 *
 * @public
 */
export interface AwsElasticsearchDomainVPCOptions {
  /**
   * The list of Availability Zones associated with the VPC subnets.
   *
   * @public
   */
  AvailabilityZones?: string[] | undefined;

  /**
   * The list of security group IDs associated with the VPC endpoints for the domain.
   *
   * @public
   */
  SecurityGroupIds?: string[] | undefined;

  /**
   * A list of subnet IDs associated with the VPC endpoints for the domain.
   *
   * @public
   */
  SubnetIds?: string[] | undefined;

  /**
   * ID for the VPC.
   *
   * @public
   */
  VPCId?: string | undefined;
}

/**
 * Information about an Elasticsearch domain.
 *
 * @public
 */
export interface AwsElasticsearchDomainDetails {
  /**
   * IAM policy document specifying the access policies for the new Elasticsearch domain.
   *
   * @public
   */
  AccessPolicies?: string | undefined;

  /**
   * Additional options for the domain endpoint.
   *
   * @public
   */
  DomainEndpointOptions?: AwsElasticsearchDomainDomainEndpointOptions | undefined;

  /**
   * Unique identifier for an Elasticsearch domain.
   *
   * @public
   */
  DomainId?: string | undefined;

  /**
   * Name of an Elasticsearch domain.
   *
   * Domain names are unique across all domains owned by the same account within an Amazon Web Services Region.
   *
   * Domain names must start with a lowercase letter and must be between 3 and 28 characters.
   *
   * Valid characters are a-z (lowercase only), 0-9, and – (hyphen).
   *
   * @public
   */
  DomainName?: string | undefined;

  /**
   * Domain-specific endpoint used to submit index, search, and data upload requests to an Elasticsearch domain.
   *
   * The endpoint is a service URL.
   *
   * @public
   */
  Endpoint?: string | undefined;

  /**
   * The key-value pair that exists if the Elasticsearch domain uses VPC endpoints.
   *
   * @public
   */
  Endpoints?: Record<string, string> | undefined;

  /**
   * OpenSearch version.
   *
   * @public
   */
  ElasticsearchVersion?: string | undefined;

  /**
   * Information about an OpenSearch cluster configuration.
   *
   * @public
   */
  ElasticsearchClusterConfig?: AwsElasticsearchDomainElasticsearchClusterConfigDetails | undefined;

  /**
   * Details about the configuration for encryption at rest.
   *
   * @public
   */
  EncryptionAtRestOptions?: AwsElasticsearchDomainEncryptionAtRestOptions | undefined;

  /**
   * Configures the CloudWatch Logs to publish for the Elasticsearch domain.
   *
   * @public
   */
  LogPublishingOptions?: AwsElasticsearchDomainLogPublishingOptions | undefined;

  /**
   * Details about the configuration for node-to-node encryption.
   *
   * @public
   */
  NodeToNodeEncryptionOptions?: AwsElasticsearchDomainNodeToNodeEncryptionOptions | undefined;

  /**
   * Information about the status of a domain relative to the latest service software.
   *
   * @public
   */
  ServiceSoftwareOptions?: AwsElasticsearchDomainServiceSoftwareOptions | undefined;

  /**
   * Information that OpenSearch derives based on `VPCOptions` for the domain.
   *
   * @public
   */
  VPCOptions?: AwsElasticsearchDomainVPCOptions | undefined;
}

/**
 * Contains information about a stickiness policy that was created using `CreateAppCookieStickinessPolicy`.
 *
 * @public
 */
export interface AwsElbAppCookieStickinessPolicy {
  /**
   * The name of the application cookie used for stickiness.
   *
   * @public
   */
  CookieName?: string | undefined;

  /**
   * The mnemonic name for the policy being created. The name must be unique within the set of policies for the load balancer.
   *
   * @public
   */
  PolicyName?: string | undefined;
}

/**
 * Contains information about a stickiness policy that was created using `CreateLBCookieStickinessPolicy`.
 *
 * @public
 */
export interface AwsElbLbCookieStickinessPolicy {
  /**
   * The amount of time, in seconds, after which the cookie is considered stale. If an expiration period is not specified, the stickiness session lasts for the duration of the browser session.
   *
   * @public
   */
  CookieExpirationPeriod?: number | undefined;

  /**
   * The name of the policy. The name must be unique within the set of policies for the load balancer.
   *
   * @public
   */
  PolicyName?: string | undefined;
}

/**
 * Contains information about the access log configuration for the load balancer.
 *
 * @public
 */
export interface AwsElbLoadBalancerAccessLog {
  /**
   * The interval in minutes for publishing the access logs.
   *
   * You can publish access logs either every 5 minutes or every 60 minutes.
   *
   * @public
   */
  EmitInterval?: number | undefined;

  /**
   * Indicates whether access logs are enabled for the load balancer.
   *
   * @public
   */
  Enabled?: boolean | undefined;

  /**
   * The name of the S3 bucket where the access logs are stored.
   *
   * @public
   */
  S3BucketName?: string | undefined;

  /**
   * The logical hierarchy that was created for the S3 bucket.
   *
   * If a prefix is not provided, the log is placed at the root level of the bucket.
   *
   * @public
   */
  S3BucketPrefix?: string | undefined;
}

/**
 * Provides information about additional attributes for the load balancer.
 *
 * @public
 */
export interface AwsElbLoadBalancerAdditionalAttribute {
  /**
   * The name of the attribute.
   *
   * @public
   */
  Key?: string | undefined;

  /**
   * The value of the attribute.
   *
   * @public
   */
  Value?: string | undefined;
}

/**
 * Contains information about the connection draining configuration for the load balancer.
 *
 * @public
 */
export interface AwsElbLoadBalancerConnectionDraining {
  /**
   * Indicates whether connection draining is enabled for the load balancer.
   *
   * @public
   */
  Enabled?: boolean | undefined;

  /**
   * The maximum time, in seconds, to keep the existing connections open before deregistering the instances.
   *
   * @public
   */
  Timeout?: number | undefined;
}

/**
 * Contains connection settings for the load balancer.
 *
 * @public
 */
export interface AwsElbLoadBalancerConnectionSettings {
  /**
   * The time, in seconds, that the connection can be idle (no data is sent over the connection) before it is closed by the load balancer.
   *
   * @public
   */
  IdleTimeout?: number | undefined;
}

/**
 * Contains cross-zone load balancing settings for the load balancer.
 *
 * @public
 */
export interface AwsElbLoadBalancerCrossZoneLoadBalancing {
  /**
   * Indicates whether cross-zone load balancing is enabled for the load balancer.
   *
   * @public
   */
  Enabled?: boolean | undefined;
}

/**
 * Contains attributes for the load balancer.
 *
 * @public
 */
export interface AwsElbLoadBalancerAttributes {
  /**
   * Information about the access log configuration for the load balancer.
   *
   * If the access log is enabled, the load balancer captures detailed information about all requests. It delivers the information to a specified S3 bucket.
   *
   * @public
   */
  AccessLog?: AwsElbLoadBalancerAccessLog | undefined;

  /**
   * Information about the connection draining configuration for the load balancer.
   *
   * If connection draining is enabled, the load balancer allows existing requests to complete before it shifts traffic away from a deregistered or unhealthy instance.
   *
   * @public
   */
  ConnectionDraining?: AwsElbLoadBalancerConnectionDraining | undefined;

  /**
   * Connection settings for the load balancer.
   *
   * If an idle timeout is configured, the load balancer allows connections to remain idle for the specified duration. When a connection is idle, no data is sent over the connection.
   *
   * @public
   */
  ConnectionSettings?: AwsElbLoadBalancerConnectionSettings | undefined;

  /**
   * Cross-zone load balancing settings for the load balancer.
   *
   * If cross-zone load balancing is enabled, the load balancer routes the request traffic evenly across all instances regardless of the Availability Zones.
   *
   * @public
   */
  CrossZoneLoadBalancing?: AwsElbLoadBalancerCrossZoneLoadBalancing | undefined;

  /**
   * Any additional attributes for a load balancer.
   *
   * @public
   */
  AdditionalAttributes?: AwsElbLoadBalancerAdditionalAttribute[] | undefined;
}

/**
 * Provides information about the configuration of an EC2 instance for the load balancer.
 *
 * @public
 */
export interface AwsElbLoadBalancerBackendServerDescription {
  /**
   * The port on which the EC2 instance is listening.
   *
   * @public
   */
  InstancePort?: number | undefined;

  /**
   * The names of the policies that are enabled for the EC2 instance.
   *
   * @public
   */
  PolicyNames?: string[] | undefined;
}

/**
 * Contains information about the health checks that are conducted on the load balancer.
 *
 * @public
 */
export interface AwsElbLoadBalancerHealthCheck {
  /**
   * The number of consecutive health check successes required before the instance is moved to the Healthy state.
   *
   * @public
   */
  HealthyThreshold?: number | undefined;

  /**
   * The approximate interval, in seconds, between health checks of an individual instance.
   *
   * @public
   */
  Interval?: number | undefined;

  /**
   * The instance that is being checked. The target specifies the protocol and port. The available protocols are TCP, SSL, HTTP, and HTTPS. The range of valid ports is 1 through 65535.
   *
   * For the HTTP and HTTPS protocols, the target also specifies the ping path.
   *
   * For the TCP protocol, the target is specified as `TCP: <port>`.
   *
   * For the SSL protocol, the target is specified as `SSL.<port>`.
   *
   * For the HTTP and HTTPS protocols, the target is specified as `<protocol>:<port>/<path to ping>`.
   *
   * @public
   */
  Target?: string | undefined;

  /**
   * The amount of time, in seconds, during which no response means a failed health check.
   *
   * @public
   */
  Timeout?: number | undefined;

  /**
   * The number of consecutive health check failures that must occur before the instance is moved to the Unhealthy state.
   *
   * @public
   */
  UnhealthyThreshold?: number | undefined;
}

/**
 * Provides information about an EC2 instance for a load balancer.
 *
 * @public
 */
export interface AwsElbLoadBalancerInstance {
  /**
   * The instance identifier.
   *
   * @public
   */
  InstanceId?: string | undefined;
}

/**
 * Information about a load balancer listener.
 *
 * @public
 */
export interface AwsElbLoadBalancerListener {
  /**
   * The port on which the instance is listening.
   *
   * @public
   */
  InstancePort?: number | undefined;

  /**
   * The protocol to use to route traffic to instances.
   *
   * Valid values: `HTTP` | `HTTPS` | `TCP` | `SSL`
   *
   * @public
   */
  InstanceProtocol?: string | undefined;

  /**
   * The port on which the load balancer is listening.
   *
   * On EC2-VPC, you can specify any port from the range 1-65535.
   *
   * On EC2-Classic, you can specify any port from the following list: 25, 80, 443, 465, 587, 1024-65535.
   *
   * @public
   */
  LoadBalancerPort?: number | undefined;

  /**
   * The load balancer transport protocol to use for routing.
   *
   * Valid values: `HTTP` | `HTTPS` | `TCP` | `SSL`
   *
   * @public
   */
  Protocol?: string | undefined;

  /**
   * The ARN of the server certificate.
   *
   * @public
   */
  SslCertificateId?: string | undefined;
}

/**
 * Lists the policies that are enabled for a load balancer listener.
 *
 * @public
 */
export interface AwsElbLoadBalancerListenerDescription {
  /**
   * Information about the listener.
   *
   * @public
   */
  Listener?: AwsElbLoadBalancerListener | undefined;

  /**
   * The policies enabled for the listener.
   *
   * @public
   */
  PolicyNames?: string[] | undefined;
}

/**
 * Contains information about the policies for a load balancer.
 *
 * @public
 */
export interface AwsElbLoadBalancerPolicies {
  /**
   * The stickiness policies that are created using `CreateAppCookieStickinessPolicy`.
   *
   * @public
   */
  AppCookieStickinessPolicies?: AwsElbAppCookieStickinessPolicy[] | undefined;

  /**
   * The stickiness policies that are created using `CreateLBCookieStickinessPolicy`.
   *
   * @public
   */
  LbCookieStickinessPolicies?: AwsElbLbCookieStickinessPolicy[] | undefined;

  /**
   * The policies other than the stickiness policies.
   *
   * @public
   */
  OtherPolicies?: string[] | undefined;
}

/**
 * Contains information about the security group for the load balancer.
 *
 * @public
 */
export interface AwsElbLoadBalancerSourceSecurityGroup {
  /**
   * The name of the security group.
   *
   * @public
   */
  GroupName?: string | undefined;

  /**
   * The owner of the security group.
   *
   * @public
   */
  OwnerAlias?: string | undefined;
}

/**
 * Contains details about a Classic Load Balancer.
 *
 * @public
 */
export interface AwsElbLoadBalancerDetails {
  /**
   * The list of Availability Zones for the load balancer.
   *
   * @public
   */
  AvailabilityZones?: string[] | undefined;

  /**
   * Information about the configuration of the EC2 instances.
   *
   * @public
   */
  BackendServerDescriptions?: AwsElbLoadBalancerBackendServerDescription[] | undefined;

  /**
   * The name of the Amazon Route 53 hosted zone for the load balancer.
   *
   * @public
   */
  CanonicalHostedZoneName?: string | undefined;

  /**
   * The ID of the Amazon Route 53 hosted zone for the load balancer.
   *
   * @public
   */
  CanonicalHostedZoneNameID?: string | undefined;

  /**
   * Indicates when the load balancer was created.
   *
   * For more information about the validation and formatting of timestamp fields in Security Hub CSPM, see [Timestamps](https://docs.aws.amazon.com/securityhub/1.0/APIReference/Welcome.html#timestamps).
   *
   * @public
   */
  CreatedTime?: string | undefined;

  /**
   * The DNS name of the load balancer.
   *
   * @public
   */
  DnsName?: string | undefined;

  /**
   * Information about the health checks that are conducted on the load balancer.
   *
   * @public
   */
  HealthCheck?: AwsElbLoadBalancerHealthCheck | undefined;

  /**
   * List of EC2 instances for the load balancer.
   *
   * @public
   */
  Instances?: AwsElbLoadBalancerInstance[] | undefined;

  /**
   * The policies that are enabled for the load balancer listeners.
   *
   * @public
   */
  ListenerDescriptions?: AwsElbLoadBalancerListenerDescription[] | undefined;

  /**
   * The attributes for a load balancer.
   *
   * @public
   */
  LoadBalancerAttributes?: AwsElbLoadBalancerAttributes | undefined;

  /**
   * The name of the load balancer.
   *
   * @public
   */
  LoadBalancerName?: string | undefined;

  /**
   * The policies for a load balancer.
   *
   * @public
   */
  Policies?: AwsElbLoadBalancerPolicies | undefined;

  /**
   * The type of load balancer. Only provided if the load balancer is in a VPC.
   *
   * If `Scheme` is `internet-facing`, the load balancer has a public DNS name that resolves to a public IP address.
   *
   * If `Scheme` is `internal`, the load balancer has a public DNS name that resolves to a private IP address.
   *
   * @public
   */
  Scheme?: string | undefined;

  /**
   * The security groups for the load balancer. Only provided if the load balancer is in a VPC.
   *
   * @public
   */
  SecurityGroups?: string[] | undefined;

  /**
   * Information about the security group for the load balancer. This is the security group that is used for inbound rules.
   *
   * @public
   */
  SourceSecurityGroup?: AwsElbLoadBalancerSourceSecurityGroup | undefined;

  /**
   * The list of subnet identifiers for the load balancer.
   *
   * @public
   */
  Subnets?: string[] | undefined;

  /**
   * The identifier of the VPC for the load balancer.
   *
   * @public
   */
  VpcId?: string | undefined;
}

/**
 * A load balancer attribute.
 *
 * @public
 */
export interface AwsElbv2LoadBalancerAttribute {
  /**
   * The name of the load balancer attribute.
   *
   * @public
   */
  Key?: string | undefined;

  /**
   * The value of the load balancer attribute.
   *
   * @public
   */
  Value?: string | undefined;
}

/**
 * Information about the state of the load balancer.
 *
 * @public
 */
export interface LoadBalancerState {
  /**
   * The state code. The initial state of the load balancer is provisioning.
   *
   * After the load balancer is fully set up and ready to route traffic, its state is active.
   *
   * If the load balancer could not be set up, its state is failed.
   *
   * @public
   */
  Code?: string | undefined;

  /**
   * A description of the state.
   *
   * @public
   */
  Reason?: string | undefined;
}

/**
 * Information about a load balancer.
 *
 * @public
 */
export interface AwsElbv2LoadBalancerDetails {
  /**
   * The Availability Zones for the load balancer.
   *
   * @public
   */
  AvailabilityZones?: AvailabilityZone[] | undefined;

  /**
   * The ID of the Amazon Route 53 hosted zone associated with the load balancer.
   *
   * @public
   */
  CanonicalHostedZoneId?: string | undefined;

  /**
   * Indicates when the load balancer was created.
   *
   * For more information about the validation and formatting of timestamp fields in Security Hub CSPM, see [Timestamps](https://docs.aws.amazon.com/securityhub/1.0/APIReference/Welcome.html#timestamps).
   *
   * @public
   */
  CreatedTime?: string | undefined;

  /**
   * The public DNS name of the load balancer.
   *
   * @public
   */
  DNSName?: string | undefined;

  /**
   * The type of IP addresses used by the subnets for your load balancer. The possible values are `ipv4` (for IPv4 addresses) and `dualstack` (for IPv4 and IPv6 addresses).
   *
   * @public
   */
  IpAddressType?: string | undefined;

  /**
   * The nodes of an Internet-facing load balancer have public IP addresses.
   *
   * @public
   */
  Scheme?: string | undefined;

  /**
   * The IDs of the security groups for the load balancer.
   *
   * @public
   */
  SecurityGroups?: string[] | undefined;

  /**
   * The state of the load balancer.
   *
   * @public
   */
  State?: LoadBalancerState | undefined;

  /**
   * The type of load balancer.
   *
   * @public
   */
  Type?: string | undefined;

  /**
   * The ID of the VPC for the load balancer.
   *
   * @public
   */
  VpcId?: string | undefined;

  /**
   * Attributes of the load balancer.
   *
   * @public
   */
  LoadBalancerAttributes?: AwsElbv2LoadBalancerAttribute[] | undefined;
}

/**
 * A schema defines the structure of events that are sent to Amazon EventBridge. Schema registries are containers for schemas. They collect and organize schemas so that your schemas are in logical groups.
 *
 * @public
 */
export interface AwsEventSchemasRegistryDetails {
  /**
   * A description of the registry to be created.
   *
   * @public
   */
  Description?: string | undefined;

  /**
   * The Amazon Resource Name (ARN) of the registry.
   *
   * @public
   */
  RegistryArn?: string | undefined;

  /**
   * The name of the schema registry.
   *
   * @public
   */
  RegistryName?: string | undefined;
}

/**
 * Provides details about the Amazon EventBridge event buses that the endpoint is associated with.
 *
 * @public
 */
export interface AwsEventsEndpointEventBusesDetails {
  /**
   * The Amazon Resource Name (ARN) of the event bus that the endpoint is associated with.
   *
   * @public
   */
  EventBusArn?: string | undefined;
}

/**
 * Indicates whether replication is enabled or disabled for the endpoint. If enabled, the endpoint can replicate all events to a secondary Amazon Web Services Region.
 *
 * @public
 */
export interface AwsEventsEndpointReplicationConfigDetails {
  /**
   * The state of event replication.
   *
   * @public
   */
  State?: string | undefined;
}

/**
 * Provides details about the primary Amazon Web Services Region of the endpoint.
 *
 * @public
 */
export interface AwsEventsEndpointRoutingConfigFailoverConfigPrimaryDetails {
  /**
   * The Amazon Resource Name (ARN) of the health check used by the endpoint to determine whether failover is triggered.
   *
   * @public
   */
  HealthCheck?: string | undefined;
}

/**
 * The Amazon Web Services Region that events are routed to when failover is triggered or event replication is enabled.
 *
 * @public
 */
export interface AwsEventsEndpointRoutingConfigFailoverConfigSecondaryDetails {
  /**
   * Defines the secondary Region.
   *
   * @public
   */
  Route?: string | undefined;
}

/**
 * The failover configuration for an endpoint. This includes what triggers failover and what happens when it's triggered.
 *
 * @public
 */
export interface AwsEventsEndpointRoutingConfigFailoverConfigDetails {
  /**
   * The main Region of the endpoint.
   *
   * @public
   */
  Primary?: AwsEventsEndpointRoutingConfigFailoverConfigPrimaryDetails | undefined;

  /**
   * The Region that events are routed to when failover is triggered or event replication is enabled.
   *
   * @public
   */
  Secondary?: AwsEventsEndpointRoutingConfigFailoverConfigSecondaryDetails | undefined;
}

/**
 * Provides details about the routing configuration of the endpoint.
 *
 * @public
 */
export interface AwsEventsEndpointRoutingConfigDetails {
  /**
   * The failover configuration for an endpoint. This includes what triggers failover and what happens when it's triggered.
   *
   * @public
   */
  FailoverConfig?: AwsEventsEndpointRoutingConfigFailoverConfigDetails | undefined;
}

/**
 * Provides details about an Amazon EventBridge global endpoint. The endpoint can improve your application’s availability by making it Regional-fault tolerant.
 *
 * @public
 */
export interface AwsEventsEndpointDetails {
  /**
   * The Amazon Resource Name (ARN) of the endpoint.
   *
   * @public
   */
  Arn?: string | undefined;

  /**
   * A description of the endpoint.
   *
   * @public
   */
  Description?: string | undefined;

  /**
   * The URL subdomain of the endpoint. For example, if `EndpointUrl` is `https://abcde.veo.endpoints.event.amazonaws.com`, then the `EndpointId` is `abcde.veo`.
   *
   * @public
   */
  EndpointId?: string | undefined;

  /**
   * The URL of the endpoint.
   *
   * @public
   */
  EndpointUrl?: string | undefined;

  /**
   * The event buses being used by the endpoint.
   *
   * @public
   */
  EventBuses?: AwsEventsEndpointEventBusesDetails[] | undefined;

  /**
   * The name of the endpoint.
   *
   * @public
   */
  Name?: string | undefined;

  /**
   * Whether event replication was enabled or disabled for this endpoint. The default state is `ENABLED`, which means you must supply a `RoleArn`. If you don't have a `RoleArn` or you don't want event replication enabled, set the state to `DISABLED`.
   *
   * @public
   */
  ReplicationConfig?: AwsEventsEndpointReplicationConfigDetails | undefined;

  /**
   * The ARN of the role used by event replication for the endpoint.
   *
   * @public
   */
  RoleArn?: string | undefined;

  /**
   * The routing configuration of the endpoint.
   *
   * @public
   */
  RoutingConfig?: AwsEventsEndpointRoutingConfigDetails | undefined;

  /**
   * The current state of the endpoint.
   *
   * @public
   */
  State?: string | undefined;

  /**
   * The reason the endpoint is in its current state.
   *
   * @public
   */
  StateReason?: string | undefined;
}

/**
 * Provides details about Amazon EventBridge event bus. An event bus is a router that receives events and delivers them to zero or more destinations, or targets. This can be a custom event bus which you can use to receive events from your custom applications and services, or it can be a partner event bus which can be matched to a partner event source.
 *
 * @public
 */
export interface AwsEventsEventbusDetails {
  /**
   * The Amazon Resource Name (ARN) of the account permitted to write events to the current account.
   *
   * @public
   */
  Arn?: string | undefined;

  /**
   * The name of the event bus.
   *
   * @public
   */
  Name?: string | undefined;

  /**
   * The policy that enables the external account to send events to your account.
   *
   * @public
   */
  Policy?: string | undefined;
}

/**
 * An object that contains information on the status of CloudTrail as a data source for the detector.
 *
 * @public
 */
export interface AwsGuardDutyDetectorDataSourcesCloudTrailDetails {
  /**
   * Specifies whether CloudTrail is activated as a data source for the detector.
   *
   * @public
   */
  Status?: string | undefined;
}

/**
 * An object that contains information on the status of DNS logs as a data source for the detector.
 *
 * @public
 */
export interface AwsGuardDutyDetectorDataSourcesDnsLogsDetails {
  /**
   * Describes whether DNS logs is enabled as a data source for the detector.
   *
   * @public
   */
  Status?: string | undefined;
}

/**
 * An object that contains information on the status of VPC Flow Logs as a data source for the detector.
 *
 * @public
 */
export interface AwsGuardDutyDetectorDataSourcesFlowLogsDetails {
  /**
   * Describes whether VPC Flow Logs are activated as a data source for the detector.
   *
   * @public
   */
  Status?: string | undefined;
}

/**
 * An object that contains information on the status of Kubernetes audit logs as a data source for the detector.
 *
 * @public
 */
export interface AwsGuardDutyDetectorDataSourcesKubernetesAuditLogsDetails {
  /**
   * Describes whether Kubernetes audit logs are activated as a data source for the detector.
   *
   * @public
   */
  Status?: string | undefined;
}

/**
 * An object that contains information on the status of Kubernetes data sources for the detector.
 *
 * @public
 */
export interface AwsGuardDutyDetectorDataSourcesKubernetesDetails {
  /**
   * Describes whether Kubernetes audit logs are activated as a data source for the detector.
   *
   * @public
   */
  AuditLogs?: AwsGuardDutyDetectorDataSourcesKubernetesAuditLogsDetails | undefined;
}

/**
 * Describes the configuration of scanning EBS volumes (Malware Protection) as a data source.
 *
 * @public
 */
export interface AwsGuardDutyDetectorDataSourcesMalwareProtectionScanEc2InstanceWithFindingsEbsVolumesDetails {
  /**
   * Specifies the reason why scanning EBS volumes (Malware Protection) isn’t activated as a data source.
   *
   * @public
   */
  Reason?: string | undefined;

  /**
   * Describes whether scanning EBS volumes is activated as a data source for the detector.
   *
   * @public
   */
  Status?: string | undefined;
}

/**
 * Describes the configuration of Malware Protection for EC2 instances with findings.
 *
 * @public
 */
export interface AwsGuardDutyDetectorDataSourcesMalwareProtectionScanEc2InstanceWithFindingsDetails {
  /**
   * Describes the configuration of scanning EBS volumes (Malware Protection) as a data source.
   *
   * @public
   */
  EbsVolumes?: AwsGuardDutyDetectorDataSourcesMalwareProtectionScanEc2InstanceWithFindingsEbsVolumesDetails | undefined;
}

/**
 * An object that contains information on the status of Malware Protection as a data source for the detector.
 *
 * @public
 */
export interface AwsGuardDutyDetectorDataSourcesMalwareProtectionDetails {
  /**
   * Describes the configuration of Malware Protection for EC2 instances with findings.
   *
   * @public
   */
  ScanEc2InstanceWithFindings?: AwsGuardDutyDetectorDataSourcesMalwareProtectionScanEc2InstanceWithFindingsDetails | undefined;

  /**
   * The GuardDuty Malware Protection service role.
   *
   * @public
   */
  ServiceRole?: string | undefined;
}

/**
 * An object that contains information on the status of S3 data event logs as a data source for the detector.
 *
 * @public
 */
export interface AwsGuardDutyDetectorDataSourcesS3LogsDetails {
  /**
   * A value that describes whether S3 data event logs are automatically enabled for new members of an organization.
   *
   * @public
   */
  Status?: string | undefined;
}

/**
 * Describes which data sources are activated for the detector.
 *
 * @public
 */
export interface AwsGuardDutyDetectorDataSourcesDetails {
  /**
   * An object that contains information on the status of CloudTrail as a data source for the detector.
   *
   * @public
   */
  CloudTrail?: AwsGuardDutyDetectorDataSourcesCloudTrailDetails | undefined;

  /**
   * An object that contains information on the status of DNS logs as a data source for the detector.
   *
   * @public
   */
  DnsLogs?: AwsGuardDutyDetectorDataSourcesDnsLogsDetails | undefined;

  /**
   * An object that contains information on the status of VPC Flow Logs as a data source for the detector.
   *
   * @public
   */
  FlowLogs?: AwsGuardDutyDetectorDataSourcesFlowLogsDetails | undefined;

  /**
   * An object that contains information on the status of Kubernetes data sources for the detector.
   *
   * @public
   */
  Kubernetes?: AwsGuardDutyDetectorDataSourcesKubernetesDetails | undefined;

  /**
   * An object that contains information on the status of Malware Protection as a data source for the detector.
   *
   * @public
   */
  MalwareProtection?: AwsGuardDutyDetectorDataSourcesMalwareProtectionDetails | undefined;

  /**
   * An object that contains information on the status of S3 Data event logs as a data source for the detector.
   *
   * @public
   */
  S3Logs?: AwsGuardDutyDetectorDataSourcesS3LogsDetails | undefined;
}

/**
 * Describes which features are activated for the detector.
 *
 * @public
 */
export interface AwsGuardDutyDetectorFeaturesDetails {
  /**
   * Indicates the name of the feature that is activated for the detector.
   *
   * @public
   */
  Name?: string | undefined;

  /**
   * Indicates the status of the feature that is activated for the detector.
   *
   * @public
   */
  Status?: string | undefined;
}

/**
 * Provides details about an Amazon GuardDuty detector. A detector is an object that represents the GuardDuty service. A detector is required for GuardDuty to become operational.
 *
 * @public
 */
export interface AwsGuardDutyDetectorDetails {
  /**
   * Describes which data sources are activated for the detector.
   *
   * @public
   */
  DataSources?: AwsGuardDutyDetectorDataSourcesDetails | undefined;

  /**
   * Describes which features are activated for the detector.
   *
   * @public
   */
  Features?: AwsGuardDutyDetectorFeaturesDetails[] | undefined;

  /**
   * The publishing frequency of the finding.
   *
   * @public
   */
  FindingPublishingFrequency?: string | undefined;

  /**
   * The GuardDuty service role.
   *
   * @public
   */
  ServiceRole?: string | undefined;

  /**
   * The activation status of the detector.
   *
   * @public
   */
  Status?: string | undefined;
}

/**
 * Attributes of the session that the key was used for.
 *
 * @public
 */
export interface AwsIamAccessKeySessionContextAttributes {
  /**
   * Indicates whether the session used multi-factor authentication (MFA).
   *
   * @public
   */
  MfaAuthenticated?: boolean | undefined;

  /**
   * Indicates when the session was created.
   *
   * For more information about the validation and formatting of timestamp fields in Security Hub CSPM, see [Timestamps](https://docs.aws.amazon.com/securityhub/1.0/APIReference/Welcome.html#timestamps).
   *
   * @public
   */
  CreationDate?: string | undefined;
}

/**
 * Information about the entity that created the session.
 *
 * @public
 */
export interface AwsIamAccessKeySessionContextSessionIssuer {
  /**
   * The type of principal (user, role, or group) that created the session.
   *
   * @public
   */
  Type?: string | undefined;

  /**
   * The principal ID of the principal (user, role, or group) that created the session.
   *
   * @public
   */
  PrincipalId?: string | undefined;

  /**
   * The ARN of the session.
   *
   * @public
   */
  Arn?: string | undefined;

  /**
   * The identifier of the Amazon Web Services account that created the session.
   *
   * @public
   */
  AccountId?: string | undefined;

  /**
   * The name of the principal that created the session.
   *
   * @public
   */
  UserName?: string | undefined;
}

/**
 * Provides information about the session that the key was used for.
 *
 * @public
 */
export interface AwsIamAccessKeySessionContext {
  /**
   * Attributes of the session that the key was used for.
   *
   * @public
   */
  Attributes?: AwsIamAccessKeySessionContextAttributes | undefined;

  /**
   * Information about the entity that created the session.
   *
   * @public
   */
  SessionIssuer?: AwsIamAccessKeySessionContextSessionIssuer | undefined;
}

/**
 * IAM access key details related to a finding.
 *
 * @public
 */
export interface AwsIamAccessKeyDetails {
  /**
   * The user associated with the IAM access key related to a finding.
   *
   * The `UserName` parameter has been replaced with the `PrincipalName` parameter because access keys can also be assigned to principals that are not IAM users.
   *
   * @deprecated This filter is deprecated. Instead, use PrincipalName.
   * @public
   */
  UserName?: string | undefined;

  /**
   * The status of the IAM access key related to a finding.
   *
   * @public
   */
  Status?: AwsIamAccessKeyStatus | undefined;

  /**
   * Indicates when the IAM access key was created.
   *
   * For more information about the validation and formatting of timestamp fields in Security Hub CSPM, see [Timestamps](https://docs.aws.amazon.com/securityhub/1.0/APIReference/Welcome.html#timestamps).
   *
   * @public
   */
  CreatedAt?: string | undefined;

  /**
   * The ID of the principal associated with an access key.
   *
   * @public
   */
  PrincipalId?: string | undefined;

  /**
   * The type of principal associated with an access key.
   *
   * @public
   */
  PrincipalType?: string | undefined;

  /**
   * The name of the principal.
   *
   * @public
   */
  PrincipalName?: string | undefined;

  /**
   * The Amazon Web Services account ID of the account for the key.
   *
   * @public
   */
  AccountId?: string | undefined;

  /**
   * The identifier of the access key.
   *
   * @public
   */
  AccessKeyId?: string | undefined;

  /**
   * Information about the session that the key was used for.
   *
   * @public
   */
  SessionContext?: AwsIamAccessKeySessionContext | undefined;
}

/**
 * A managed policy that is attached to an IAM principal.
 *
 * @public
 */
export interface AwsIamAttachedManagedPolicy {
  /**
   * The name of the policy.
   *
   * @public
   */
  PolicyName?: string | undefined;

  /**
   * The ARN of the policy.
   *
   * @public
   */
  PolicyArn?: string | undefined;
}

/**
 * A managed policy that is attached to the IAM group.
 *
 * @public
 */
export interface AwsIamGroupPolicy {
  /**
   * The name of the policy.
   *
   * @public
   */
  PolicyName?: string | undefined;
}

/**
 * Contains details about an IAM group.
 *
 * @public
 */
export interface AwsIamGroupDetails {
  /**
   * A list of the managed policies that are attached to the IAM group.
   *
   * @public
   */
  AttachedManagedPolicies?: AwsIamAttachedManagedPolicy[] | undefined;

  /**
   * Indicates when the IAM group was created.
   *
   * For more information about the validation and formatting of timestamp fields in Security Hub CSPM, see [Timestamps](https://docs.aws.amazon.com/securityhub/1.0/APIReference/Welcome.html#timestamps).
   *
   * @public
   */
  CreateDate?: string | undefined;

  /**
   * The identifier of the IAM group.
   *
   * @public
   */
  GroupId?: string | undefined;

  /**
   * The name of the IAM group.
   *
   * @public
   */
  GroupName?: string | undefined;

  /**
   * The list of inline policies that are embedded in the group.
   *
   * @public
   */
  GroupPolicyList?: AwsIamGroupPolicy[] | undefined;

  /**
   * The path to the group.
   *
   * @public
   */
  Path?: string | undefined;
}

/**
 * Information about a role associated with an instance profile.
 *
 * @public
 */
export interface AwsIamInstanceProfileRole {
  /**
   * The ARN of the role.
   *
   * @public
   */
  Arn?: string | undefined;

  /**
   * The policy that grants an entity permission to assume the role.
   *
   * @public
   */
  AssumeRolePolicyDocument?: string | undefined;

  /**
   * Indicates when the role was created.
   *
   * For more information about the validation and formatting of timestamp fields in Security Hub CSPM, see [Timestamps](https://docs.aws.amazon.com/securityhub/1.0/APIReference/Welcome.html#timestamps).
   *
   * @public
   */
  CreateDate?: string | undefined;

  /**
   * The path to the role.
   *
   * @public
   */
  Path?: string | undefined;

  /**
   * The identifier of the role.
   *
   * @public
   */
  RoleId?: string | undefined;

  /**
   * The name of the role.
   *
   * @public
   */
  RoleName?: string | undefined;
}

/**
 * Information about an instance profile.
 *
 * @public
 */
export interface AwsIamInstanceProfile {
  /**
   * The ARN of the instance profile.
   *
   * @public
   */
  Arn?: string | undefined;

  /**
   * Indicates when the instance profile was created.
   *
   * For more information about the validation and formatting of timestamp fields in Security Hub CSPM, see [Timestamps](https://docs.aws.amazon.com/securityhub/1.0/APIReference/Welcome.html#timestamps).
   *
   * @public
   */
  CreateDate?: string | undefined;

  /**
   * The identifier of the instance profile.
   *
   * @public
   */
  InstanceProfileId?: string | undefined;

  /**
   * The name of the instance profile.
   *
   * @public
   */
  InstanceProfileName?: string | undefined;

  /**
   * The path to the instance profile.
   *
   * @public
   */
  Path?: string | undefined;

  /**
   * The roles associated with the instance profile.
   *
   * @public
   */
  Roles?: AwsIamInstanceProfileRole[] | undefined;
}

/**
 * Information about the policy used to set the permissions boundary for an IAM principal.
 *
 * @public
 */
export interface AwsIamPermissionsBoundary {
  /**
   * The ARN of the policy used to set the permissions boundary.
   *
   * @public
   */
  PermissionsBoundaryArn?: string | undefined;

  /**
   * The usage type for the permissions boundary.
   *
   * @public
   */
  PermissionsBoundaryType?: string | undefined;
}

/**
 * A version of an IAM policy.
 *
 * @public
 */
export interface AwsIamPolicyVersion {
  /**
   * The identifier of the policy version.
   *
   * @public
   */
  VersionId?: string | undefined;

  /**
   * Whether the version is the default version.
   *
   * @public
   */
  IsDefaultVersion?: boolean | undefined;

  /**
   * Indicates when the version was created.
   *
   * For more information about the validation and formatting of timestamp fields in Security Hub CSPM, see [Timestamps](https://docs.aws.amazon.com/securityhub/1.0/APIReference/Welcome.html#timestamps).
   *
   * @public
   */
  CreateDate?: string | undefined;
}

/**
 * Represents an IAM permissions policy.
 *
 * @public
 */
export interface AwsIamPolicyDetails {
  /**
   * The number of users, groups, and roles that the policy is attached to.
   *
   * @public
   */
  AttachmentCount?: number | undefined;

  /**
   * When the policy was created.
   *
   * For more information about the validation and formatting of timestamp fields in Security Hub CSPM, see [Timestamps](https://docs.aws.amazon.com/securityhub/1.0/APIReference/Welcome.html#timestamps).
   *
   * @public
   */
  CreateDate?: string | undefined;

  /**
   * The identifier of the default version of the policy.
   *
   * @public
   */
  DefaultVersionId?: string | undefined;

  /**
   * A description of the policy.
   *
   * @public
   */
  Description?: string | undefined;

  /**
   * Whether the policy can be attached to a user, group, or role.
   *
   * @public
   */
  IsAttachable?: boolean | undefined;

  /**
   * The path to the policy.
   *
   * @public
   */
  Path?: string | undefined;

  /**
   * The number of users and roles that use the policy to set the permissions boundary.
   *
   * @public
   */
  PermissionsBoundaryUsageCount?: number | undefined;

  /**
   * The unique identifier of the policy.
   *
   * @public
   */
  PolicyId?: string | undefined;

  /**
   * The name of the policy.
   *
   * @public
   */
  PolicyName?: string | undefined;

  /**
   * List of versions of the policy.
   *
   * @public
   */
  PolicyVersionList?: AwsIamPolicyVersion[] | undefined;

  /**
   * When the policy was most recently updated.
   *
   * For more information about the validation and formatting of timestamp fields in Security Hub CSPM, see [Timestamps](https://docs.aws.amazon.com/securityhub/1.0/APIReference/Welcome.html#timestamps).
   *
   * @public
   */
  UpdateDate?: string | undefined;
}

/**
 * An inline policy that is embedded in the role.
 *
 * @public
 */
export interface AwsIamRolePolicy {
  /**
   * The name of the policy.
   *
   * @public
   */
  PolicyName?: string | undefined;
}

/**
 * Contains information about an IAM role, including all of the role's policies.
 *
 * @public
 */
export interface AwsIamRoleDetails {
  /**
   * The trust policy that grants permission to assume the role.
   *
   * @public
   */
  AssumeRolePolicyDocument?: string | undefined;

  /**
   * The list of the managed policies that are attached to the role.
   *
   * @public
   */
  AttachedManagedPolicies?: AwsIamAttachedManagedPolicy[] | undefined;

  /**
   * Indicates when the role was created.
   *
   * For more information about the validation and formatting of timestamp fields in Security Hub CSPM, see [Timestamps](https://docs.aws.amazon.com/securityhub/1.0/APIReference/Welcome.html#timestamps).
   *
   * @public
   */
  CreateDate?: string | undefined;

  /**
   * The list of instance profiles that contain this role.
   *
   * @public
   */
  InstanceProfileList?: AwsIamInstanceProfile[] | undefined;

  /**
   * Information about the policy used to set the permissions boundary for an IAM principal.
   *
   * @public
   */
  PermissionsBoundary?: AwsIamPermissionsBoundary | undefined;

  /**
   * The stable and unique string identifying the role.
   *
   * @public
   */
  RoleId?: string | undefined;

  /**
   * The friendly name that identifies the role.
   *
   * @public
   */
  RoleName?: string | undefined;

  /**
   * The list of inline policies that are embedded in the role.
   *
   * @public
   */
  RolePolicyList?: AwsIamRolePolicy[] | undefined;

  /**
   * The maximum session duration (in seconds) that you want to set for the specified role.
   *
   * @public
   */
  MaxSessionDuration?: number | undefined;

  /**
   * The path to the role.
   *
   * @public
   */
  Path?: string | undefined;
}

/**
 * Information about an inline policy that is embedded in the user.
 *
 * @public
 */
export interface AwsIamUserPolicy {
  /**
   * The name of the policy.
   *
   * @public
   */
  PolicyName?: string | undefined;
}

/**
 * Information about an IAM user.
 *
 * @public
 */
export interface AwsIamUserDetails {
  /**
   * A list of the managed policies that are attached to the user.
   *
   * @public
   */
  AttachedManagedPolicies?: AwsIamAttachedManagedPolicy[] | undefined;

  /**
   * Indicates when the user was created.
   *
   * For more information about the validation and formatting of timestamp fields in Security Hub CSPM, see [Timestamps](https://docs.aws.amazon.com/securityhub/1.0/APIReference/Welcome.html#timestamps).
   *
   * @public
   */
  CreateDate?: string | undefined;

  /**
   * A list of IAM groups that the user belongs to.
   *
   * @public
   */
  GroupList?: string[] | undefined;

  /**
   * The path to the user.
   *
   * @public
   */
  Path?: string | undefined;

  /**
   * The permissions boundary for the user.
   *
   * @public
   */
  PermissionsBoundary?: AwsIamPermissionsBoundary | undefined;

  /**
   * The unique identifier for the user.
   *
   * @public
   */
  UserId?: string | undefined;

  /**
   * The name of the user.
   *
   * @public
   */
  UserName?: string | undefined;

  /**
   * The list of inline policies that are embedded in the user.
   *
   * @public
   */
  UserPolicyList?: AwsIamUserPolicy[] | undefined;
}

/**
 * Provides information about stream encryption.
 *
 * @public
 */
export interface AwsKinesisStreamStreamEncryptionDetails {
  /**
   * The encryption type to use.
   *
   * @public
   */
  EncryptionType?: string | undefined;

  /**
   * The globally unique identifier for the customer-managed KMS key to use for encryption.
   *
   * @public
   */
  KeyId?: string | undefined;
}

/**
 * Provides information about an Amazon Kinesis data stream.
 *
 * @public
 */
export interface AwsKinesisStreamDetails {
  /**
   * The name of the Kinesis stream. If you don't specify a name, CloudFront generates a unique physical ID and uses that ID for the stream name.
   *
   * @public
   */
  Name?: string | undefined;

  /**
   * The Amazon Resource Name (ARN) of the Kinesis data stream.
   *
   * @public
   */
  Arn?: string | undefined;

  /**
   * When specified, enables or updates server-side encryption using an KMS key for a specified stream. Removing this property from your stack template and updating your stack disables encryption.
   *
   * @public
   */
  StreamEncryption?: AwsKinesisStreamStreamEncryptionDetails | undefined;

  /**
   * The number of shards that the stream uses.
   *
   * @public
   */
  ShardCount?: number | undefined;

  /**
   * The number of hours for the data records that are stored in shards to remain accessible.
   *
   * @public
   */
  RetentionPeriodHours?: number | undefined;
}

/**
 * Contains metadata about an KMS key.
 *
 * @public
 */
export interface AwsKmsKeyDetails {
  /**
   * The twelve-digit account ID of the Amazon Web Services account that owns the KMS key.
   *
   * @public
   */
  AWSAccountId?: string | undefined;

  /**
   * Indicates when the KMS key was created.
   *
   * For more information about the validation and formatting of timestamp fields in Security Hub CSPM, see [Timestamps](https://docs.aws.amazon.com/securityhub/1.0/APIReference/Welcome.html#timestamps).
   *
   * @public
   */
  CreationDate?: number | undefined;

  /**
   * The globally unique identifier for the KMS key.
   *
   * @public
   */
  KeyId?: string | undefined;

  /**
   * The manager of the KMS key. KMS keys in your Amazon Web Services account are either customer managed or Amazon Web Services managed.
   *
   * @public
   */
  KeyManager?: string | undefined;

  /**
   * The state of the KMS key. Valid values are as follows:
   *
   * - `Disabled`
   * - `Enabled`
   * - `PendingDeletion`
   * - `PendingImport`
   * - `Unavailable`
   *
   * @public
   */
  KeyState?: string | undefined;

  /**
   * The source of the KMS key material.
   *
   * When this value is `AWS_KMS`, KMS created the key material.
   *
   * When this value is `EXTERNAL`, the key material was imported from your existing key management infrastructure or the KMS key lacks key material.
   *
   * When this value is `AWS_CLOUDHSM`, the key material was created in the CloudHSM cluster associated with a custom key store.
   *
   * @public
   */
  Origin?: string | undefined;

  /**
   * A description of the KMS key.
   *
   * @public
   */
  Description?: string | undefined;

  /**
   * Whether the key has key rotation enabled.
   *
   * @public
   */
  KeyRotationStatus?: boolean | undefined;
}

/**
 * The code for the Lambda function. You can specify either an object in Amazon S3, or upload a deployment package directly.
 *
 * @public
 */
export interface AwsLambdaFunctionCode {
  /**
   * An Amazon S3 bucket in the same Amazon Web Services Region as your function. The bucket can be in a different Amazon Web Services account.
   *
   * @public
   */
  S3Bucket?: string | undefined;

  /**
   * The Amazon S3 key of the deployment package.
   *
   * @public
   */
  S3Key?: string | undefined;

  /**
   * For versioned objects, the version of the deployment package object to use.
   *
   * @public
   */
  S3ObjectVersion?: string | undefined;

  /**
   * The base64-encoded contents of the deployment package. Amazon Web Services SDK and Amazon Web Services CLI clients handle the encoding for you.
   *
   * @public
   */
  ZipFile?: string | undefined;
}

/**
 * The dead-letter queue for failed asynchronous invocations.
 *
 * @public
 */
export interface AwsLambdaFunctionDeadLetterConfig {
  /**
   * The ARN of an SQS queue or SNS topic.
   *
   * @public
   */
  TargetArn?: string | undefined;
}

/**
 * Error messages for environment variables that could not be applied.
 *
 * @public
 */
export interface AwsLambdaFunctionEnvironmentError {
  /**
   * The error code.
   *
   * @public
   */
  ErrorCode?: string | undefined;

  /**
   * The error message.
   *
   * @public
   */
  Message?: string | undefined;
}

/**
 * A function's environment variable settings.
 *
 * @public
 */
export interface AwsLambdaFunctionEnvironment {
  /**
   * Environment variable key-value pairs.
   *
   * @public
   */
  Variables?: Record<string, string> | undefined;

  /**
   * An `AwsLambdaFunctionEnvironmentError` object.
   *
   * @public
   */
  Error?: AwsLambdaFunctionEnvironmentError | undefined;
}

/**
 * An Lambda layer.
 *
 * @public
 */
export interface AwsLambdaFunctionLayer {
  /**
   * The ARN of the function layer.
   *
   * @public
   */
  Arn?: string | undefined;

  /**
   * The size of the layer archive in bytes.
   *
   * @public
   */
  CodeSize?: number | undefined;
}

/**
 * The function's X-Ray tracing configuration.
 *
 * @public
 */
export interface AwsLambdaFunctionTracingConfig {
  /**
   * The tracing mode.
   *
   * @public
   */
  Mode?: string | undefined;
}

/**
 * The VPC security groups and subnets that are attached to a Lambda function.
 *
 * @public
 */
export interface AwsLambdaFunctionVpcConfig {
  /**
   * A list of VPC security groups IDs.
   *
   * @public
   */
  SecurityGroupIds?: string[] | undefined;

  /**
   * A list of VPC subnet IDs.
   *
   * @public
   */
  SubnetIds?: string[] | undefined;

  /**
   * The ID of the VPC.
   *
   * @public
   */
  VpcId?: string | undefined;
}

/**
 * Details about an Lambda function's configuration.
 *
 * @public
 */
export interface AwsLambdaFunctionDetails {
  /**
   * An `AwsLambdaFunctionCode` object.
   *
   * @public
   */
  Code?: AwsLambdaFunctionCode | undefined;

  /**
   * The SHA256 hash of the function's deployment package.
   *
   * @public
   */
  CodeSha256?: string | undefined;

  /**
   * The function's dead letter queue.
   *
   * @public
   */
  DeadLetterConfig?: AwsLambdaFunctionDeadLetterConfig | undefined;

  /**
   * The function's environment variables.
   *
   * @public
   */
  Environment?: AwsLambdaFunctionEnvironment | undefined;

  /**
   * The name of the function.
   *
   * @public
   */
  FunctionName?: string | undefined;

  /**
   * The function that Lambda calls to begin executing your function.
   *
   * @public
   */
  Handler?: string | undefined;

  /**
   * The KMS key that is used to encrypt the function's environment variables. This key is only returned if you've configured a customer managed customer managed key.
   *
   * @public
   */
  KmsKeyArn?: string | undefined;

  /**
   * Indicates when the function was last updated.
   *
   * For more information about the validation and formatting of timestamp fields in Security Hub CSPM, see [Timestamps](https://docs.aws.amazon.com/securityhub/1.0/APIReference/Welcome.html#timestamps).
   *
   * @public
   */
  LastModified?: string | undefined;

  /**
   * The function's layers.
   *
   * @public
   */
  Layers?: AwsLambdaFunctionLayer[] | undefined;

  /**
   * For Lambda@Edge functions, the ARN of the master function.
   *
   * @public
   */
  MasterArn?: string | undefined;

  /**
   * The memory that is allocated to the function.
   *
   * @public
   */
  MemorySize?: number | undefined;

  /**
   * The latest updated revision of the function or alias.
   *
   * @public
   */
  RevisionId?: string | undefined;

  /**
   * The function's execution role.
   *
   * @public
   */
  Role?: string | undefined;

  /**
   * The runtime environment for the Lambda function.
   *
   * @public
   */
  Runtime?: string | undefined;

  /**
   * The amount of time that Lambda allows a function to run before stopping it.
   *
   * @public
   */
  Timeout?: number | undefined;

  /**
   * The function's X-Ray tracing configuration.
   *
   * @public
   */
  TracingConfig?: AwsLambdaFunctionTracingConfig | undefined;

  /**
   * The function's networking configuration.
   *
   * @public
   */
  VpcConfig?: AwsLambdaFunctionVpcConfig | undefined;

  /**
   * The version of the Lambda function.
   *
   * @public
   */
  Version?: string | undefined;

  /**
   * The instruction set architecture that the function uses. Valid values are `x86_64` or `arm64`.
   *
   * @public
   */
  Architectures?: string[] | undefined;

  /**
   * The type of deployment package that's used to deploy the function code to Lambda. Set to `Image` for a container image and `Zip` for a .zip file archive.
   *
   * @public
   */
  PackageType?: string | undefined;
}

/**
 * Details about a Lambda layer version.
 *
 * @public
 */
export interface AwsLambdaLayerVersionDetails {
  /**
   * The version number.
   *
   * @public
   */
  Version?: number | undefined;

  /**
   * The layer's compatible [function runtimes](https://docs.aws.amazon.com/lambda/latest/dg/lambda-runtimes.html).
   *
   * The following list includes deprecated runtimes. For more information, see [Runtime deprecation policy](https://docs.aws.amazon.com/lambda/latest/dg/lambda-runtimes.html#runtime-support-policy) in the *Lambda Developer Guide*.
   *
   * Array Members: Maximum number of 5 items.
   *
   * Valid Values: `nodejs | nodejs4.3 | nodejs6.10 | nodejs8.10 | nodejs10.x | nodejs12.x | nodejs14.x | nodejs16.x | java8 | java8.al2 | java11 | python2.7 | python3.6 | python3.7 | python3.8 | python3.9 | dotnetcore1.0 | dotnetcore2.0 | dotnetcore2.1 | dotnetcore3.1 | dotnet6 | nodejs4.3-edge | go1.x | ruby2.5 | ruby2.7 | provided | provided.al2 | nodejs18.x | python3.10 | java17 | ruby3.2 | python3.11 | nodejs20.x | provided.al2023 | python3.12 | java21`
   *
   * @public
   */
  CompatibleRuntimes?: string[] | undefined;

  /**
   * Indicates when the version was created.
   *
   * For more information about the validation and formatting of timestamp fields in Security Hub CSPM, see [Timestamps](https://docs.aws.amazon.com/securityhub/1.0/APIReference/Welcome.html#timestamps).
   *
   * @public
   */
  CreatedDate?: string | undefined;
}

/**
 * Details for SASL/IAM client authentication.
 *
 * @public
 */
export interface AwsMskClusterClusterInfoClientAuthenticationSaslIamDetails {
  /**
   * Indicates whether SASL/IAM authentication is enabled or not.
   *
   * @public
   */
  Enabled?: boolean | undefined;
}

/**
 * Details for SASL/SCRAM client authentication.
 *
 * @public
 */
export interface AwsMskClusterClusterInfoClientAuthenticationSaslScramDetails {
  /**
   * Indicates whether SASL/SCRAM authentication is enabled or not.
   *
   * @public
   */
  Enabled?: boolean | undefined;
}

/**
 * Provides details for client authentication using SASL.
 *
 * @public
 */
export interface AwsMskClusterClusterInfoClientAuthenticationSaslDetails {
  /**
   * Provides details for SASL client authentication using IAM.
   *
   * @public
   */
  Iam?: AwsMskClusterClusterInfoClientAuthenticationSaslIamDetails | undefined;

  /**
   * Details for SASL client authentication using SCRAM.
   *
   * @public
   */
  Scram?: AwsMskClusterClusterInfoClientAuthenticationSaslScramDetails | undefined;
}

/**
 * Provides details for client authentication using TLS.
 *
 * @public
 */
export interface AwsMskClusterClusterInfoClientAuthenticationTlsDetails {
  /**
   * List of Amazon Web Services Private CA Amazon Resource Names (ARNs). Amazon Web Services Private CA enables creation of private certificate authority (CA) hierarchies, including root and subordinate CAs, without the investment and maintenance costs of operating an on-premises CA.
   *
   * @public
   */
  CertificateAuthorityArnList?: string[] | undefined;

  /**
   * Indicates whether TLS authentication is enabled or not.
   *
   * @public
   */
  Enabled?: boolean | undefined;
}

/**
 * Provides details for allowing no client authentication.
 *
 * @public
 */
export interface AwsMskClusterClusterInfoClientAuthenticationUnauthenticatedDetails {
  /**
   * Indicates whether unauthenticated is allowed or not.
   *
   * @public
   */
  Enabled?: boolean | undefined;
}

/**
 * Provides details about different modes of client authentication.
 *
 * @public
 */
export interface AwsMskClusterClusterInfoClientAuthenticationDetails {
  /**
   * Provides details for client authentication using SASL.
   *
   * @public
   */
  Sasl?: AwsMskClusterClusterInfoClientAuthenticationSaslDetails | undefined;

  /**
   * Provides details for allowing no client authentication.
   *
   * @public
   */
  Unauthenticated?: AwsMskClusterClusterInfoClientAuthenticationUnauthenticatedDetails | undefined;

  /**
   * Provides details for client authentication using TLS.
   *
   * @public
   */
  Tls?: AwsMskClusterClusterInfoClientAuthenticationTlsDetails | undefined;
}

/**
 * The data-volume encryption details. You can't update encryption at rest settings for existing clusters.
 *
 * @public
 */
export interface AwsMskClusterClusterInfoEncryptionInfoEncryptionAtRestDetails {
  /**
   * The Amazon Resource Name (ARN) of the KMS key for encrypting data at rest. If you don't specify a KMS key, MSK creates one for you and uses it.
   *
   * @public
   */
  DataVolumeKMSKeyId?: string | undefined;
}

/**
 * The settings for encrypting data in transit.
 *
 * @public
 */
export interface AwsMskClusterClusterInfoEncryptionInfoEncryptionInTransitDetails {
  /**
   * When set to `true`, it indicates that data communication among the broker nodes of the cluster is encrypted. When set to `false`, the communication happens in plain text. The default value is `true`.
   *
   * @public
   */
  InCluster?: boolean | undefined;

  /**
   * Indicates the encryption setting for data in transit between clients and brokers.
   *
   * @public
   */
  ClientBroker?: string | undefined;
}

/**
 * Includes encryption-related information, such as the KMS key used for encrypting data at rest and whether you want MSK to encrypt your data in transit.
 *
 * @public
 */
export interface AwsMskClusterClusterInfoEncryptionInfoDetails {
  /**
   * The settings for encrypting data in transit.
   *
   * @public
   */
  EncryptionInTransit?: AwsMskClusterClusterInfoEncryptionInfoEncryptionInTransitDetails | undefined;

  /**
   * The data-volume encryption details. You can't update encryption at rest settings for existing clusters.
   *
   * @public
   */
  EncryptionAtRest?: AwsMskClusterClusterInfoEncryptionInfoEncryptionAtRestDetails | undefined;
}

/**
 * Provide details about an Amazon Managed Streaming for Apache Kafka (Amazon MSK) cluster.
 *
 * @public
 */
export interface AwsMskClusterClusterInfoDetails {
  /**
   * Includes encryption-related information, such as the KMS key used for encrypting data at rest and whether you want Amazon MSK to encrypt your data in transit.
   *
   * @public
   */
  EncryptionInfo?: AwsMskClusterClusterInfoEncryptionInfoDetails | undefined;

  /**
   * The current version of the cluster.
   *
   * @public
   */
  CurrentVersion?: string | undefined;

  /**
   * The number of broker nodes in the cluster.
   *
   * @public
   */
  NumberOfBrokerNodes?: number | undefined;

  /**
   * The name of the cluster.
   *
   * @public
   */
  ClusterName?: string | undefined;

  /**
   * Provides information for different modes of client authentication.
   *
   * @public
   */
  ClientAuthentication?: AwsMskClusterClusterInfoClientAuthenticationDetails | undefined;

  /**
   * Specifies the level of monitoring for the cluster.
   *
   * @public
   */
  EnhancedMonitoring?: string | undefined;
}

/**
 * Provides details about an Amazon Managed Streaming for Apache Kafka (Amazon MSK) cluster.
 *
 * @public
 */
export interface AwsMskClusterDetails {
  /**
   * Provides information about a cluster.
   *
   * @public
   */
  ClusterInfo?: AwsMskClusterClusterInfoDetails | undefined;
}

/**
 * A public subnet that Network Firewall uses for the firewall.
 *
 * @public
 */
export interface AwsNetworkFirewallFirewallSubnetMappingsDetails {
  /**
   * The identifier of the subnet
   *
   * @public
   */
  SubnetId?: string | undefined;
}

/**
 * Details about an Network Firewall firewall.
 *
 * @public
 */
export interface AwsNetworkFirewallFirewallDetails {
  /**
   * Whether the firewall is protected from deletion. If set to `true`, then the firewall cannot be deleted.
   *
   * @public
   */
  DeleteProtection?: boolean | undefined;

  /**
   * A description of the firewall.
   *
   * @public
   */
  Description?: string | undefined;

  /**
   * The ARN of the firewall.
   *
   * @public
   */
  FirewallArn?: string | undefined;

  /**
   * The identifier of the firewall.
   *
   * @public
   */
  FirewallId?: string | undefined;

  /**
   * A descriptive name of the firewall.
   *
   * @public
   */
  FirewallName?: string | undefined;

  /**
   * The ARN of the firewall policy.
   *
   * @public
   */
  FirewallPolicyArn?: string | undefined;

  /**
   * Whether the firewall is protected from a change to the firewall policy. If set to `true`, you cannot associate a different policy with the firewall.
   *
   * @public
   */
  FirewallPolicyChangeProtection?: boolean | undefined;

  /**
   * Whether the firewall is protected from a change to the subnet associations. If set to `true`, you cannot map different subnets to the firewall.
   *
   * @public
   */
  SubnetChangeProtection?: boolean | undefined;

  /**
   * The public subnets that Network Firewall uses for the firewall. Each subnet must belong to a different Availability Zone.
   *
   * @public
   */
  SubnetMappings?: AwsNetworkFirewallFirewallSubnetMappingsDetails[] | undefined;

  /**
   * The identifier of the VPC where the firewall is used.
   *
   * @public
   */
  VpcId?: string | undefined;
}

/**
 * A stateful rule group that is used by the firewall policy.
 *
 * @public
 */
export interface FirewallPolicyStatefulRuleGroupReferencesDetails {
  /**
   * The ARN of the stateful rule group.
   *
   * @public
   */
  ResourceArn?: string | undefined;
}

/**
 * Defines a CloudWatch dimension value to publish.
 *
 * @public
 */
export interface StatelessCustomPublishMetricActionDimension {
  /**
   * The value to use for the custom metric dimension.
   *
   * @public
   */
  Value?: string | undefined;
}

/**
 * Information about metrics to publish to CloudWatch.
 *
 * @public
 */
export interface StatelessCustomPublishMetricAction {
  /**
   * Defines CloudWatch dimension values to publish.
   *
   * @public
   */
  Dimensions?: StatelessCustomPublishMetricActionDimension[] | undefined;
}

/**
 * The definition of a custom action that can be used for stateless packet handling.
 *
 * @public
 */
export interface StatelessCustomActionDefinition {
  /**
   * Information about metrics to publish to CloudWatch.
   *
   * @public
   */
  PublishMetricAction?: StatelessCustomPublishMetricAction | undefined;
}

/**
 * A custom action that can be used for stateless packet handling.
 *
 * @public
 */
export interface FirewallPolicyStatelessCustomActionsDetails {
  /**
   * The definition of the custom action.
   *
   * @public
   */
  ActionDefinition?: StatelessCustomActionDefinition | undefined;

  /**
   * The name of the custom action.
   *
   * @public
   */
  ActionName?: string | undefined;
}

/**
 * A stateless rule group that is used by the firewall policy.
 *
 * @public
 */
export interface FirewallPolicyStatelessRuleGroupReferencesDetails {
  /**
   * The order in which to run the stateless rule group.
   *
   * @public
   */
  Priority?: number | undefined;

  /**
   * The ARN of the stateless rule group.
   *
   * @public
   */
  ResourceArn?: string | undefined;
}

/**
 * Defines the behavior of the firewall.
 *
 * @public
 */
export interface FirewallPolicyDetails {
  /**
   * The stateful rule groups that are used in the firewall policy.
   *
   * @public
   */
  StatefulRuleGroupReferences?: FirewallPolicyStatefulRuleGroupReferencesDetails[] | undefined;

  /**
   * The custom action definitions that are available to use in the firewall policy's `StatelessDefaultActions` setting.
   *
   * @public
   */
  StatelessCustomActions?: FirewallPolicyStatelessCustomActionsDetails[] | undefined;

  /**
   * The actions to take on a packet if it doesn't match any of the stateless rules in the policy.
   *
   * You must specify a standard action (`aws:pass`, `aws:drop`, `aws:forward_to_sfe`), and can optionally include a custom action from `StatelessCustomActions`.
   *
   * @public
   */
  StatelessDefaultActions?: string[] | undefined;

  /**
   * The actions to take on a fragmented UDP packet if it doesn't match any of the stateless rules in the policy.
   *
   * You must specify a standard action (`aws:pass`, `aws:drop`, `aws:forward_to_sfe`), and can optionally include a custom action from `StatelessCustomActions`.
   *
   * @public
   */
  StatelessFragmentDefaultActions?: string[] | undefined;

  /**
   * The stateless rule groups that are used in the firewall policy.
   *
   * @public
   */
  StatelessRuleGroupReferences?: FirewallPolicyStatelessRuleGroupReferencesDetails[] | undefined;
}

/**
 * Details about a firewall policy. A firewall policy defines the behavior of a network firewall.
 *
 * @public
 */
export interface AwsNetworkFirewallFirewallPolicyDetails {
  /**
   * The firewall policy configuration.
   *
   * @public
   */
  FirewallPolicy?: FirewallPolicyDetails | undefined;

  /**
   * The ARN of the firewall policy.
   *
   * @public
   */
  FirewallPolicyArn?: string | undefined;

  /**
   * The identifier of the firewall policy.
   *
   * @public
   */
  FirewallPolicyId?: string | undefined;

  /**
   * The name of the firewall policy.
   *
   * @public
   */
  FirewallPolicyName?: string | undefined;

  /**
   * A description of the firewall policy.
   *
   * @public
   */
  Description?: string | undefined;
}

/**
 * Stateful inspection criteria for a domain list rule group.
 *
 * @public
 */
export interface RuleGroupSourceListDetails {
  /**
   * Indicates whether to allow or deny access to the domains listed in `Targets`.
   *
   * @public
   */
  GeneratedRulesType?: string | undefined;

  /**
   * The protocols that you want to inspect. Specify `LS_SNI` for HTTPS. Specify `HTTP_HOST` for HTTP. You can specify either or both.
   *
   * @public
   */
  TargetTypes?: string[] | undefined;

  /**
   * The domains that you want to inspect for in your traffic flows. You can provide full domain names, or use the '.' prefix as a wildcard. For example, `.example.com` matches all domains that end with `example.com`.
   *
   * @public
   */
  Targets?: string[] | undefined;
}

/**
 * The inspection criteria for a stateful rule.
 *
 * @public
 */
export interface RuleGroupSourceStatefulRulesHeaderDetails {
  /**
   * The destination IP address or address range to inspect for, in CIDR notation. To match with any address, specify `ANY`.
   *
   * @public
   */
  Destination?: string | undefined;

  /**
   * The destination port to inspect for. You can specify an individual port, such as `1994`. You also can specify a port range, such as `1990:1994`. To match with any port, specify `ANY`.
   *
   * @public
   */
  DestinationPort?: string | undefined;

  /**
   * The direction of traffic flow to inspect. If set to `ANY`, the inspection matches bidirectional traffic, both from the source to the destination and from the destination to the source. If set to `FORWARD`, the inspection only matches traffic going from the source to the destination.
   *
   * @public
   */
  Direction?: string | undefined;

  /**
   * The protocol to inspect for. To inspector for all protocols, use `IP`.
   *
   * @public
   */
  Protocol?: string | undefined;

  /**
   * The source IP address or address range to inspect for, in CIDR notation. To match with any address, specify `ANY`.
   *
   * @public
   */
  Source?: string | undefined;

  /**
   * The source port to inspect for. You can specify an individual port, such as `1994`. You also can specify a port range, such as `1990:1994`. To match with any port, specify `ANY`.
   *
   * @public
   */
  SourcePort?: string | undefined;
}

/**
 * A rule option for a stateful rule.
 *
 * @public
 */
export interface RuleGroupSourceStatefulRulesOptionsDetails {
  /**
   * A keyword to look for.
   *
   * @public
   */
  Keyword?: string | undefined;

  /**
   * A list of settings.
   *
   * @public
   */
  Settings?: string[] | undefined;
}

/**
 * A Suricata rule specification.
 *
 * @public
 */
export interface RuleGroupSourceStatefulRulesDetails {
  /**
   * Defines what Network Firewall should do with the packets in a traffic flow when the flow matches the stateful rule criteria.
   *
   * @public
   */
  Action?: string | undefined;

  /**
   * The stateful inspection criteria for the rule.
   *
   * @public
   */
  Header?: RuleGroupSourceStatefulRulesHeaderDetails | undefined;

  /**
   * Additional options for the rule.
   *
   * @public
   */
  RuleOptions?: RuleGroupSourceStatefulRulesOptionsDetails[] | undefined;
}

/**
 * A custom action definition. A custom action is an optional, non-standard action to use for stateless packet handling.
 *
 * @public
 */
export interface RuleGroupSourceCustomActionsDetails {
  /**
   * The definition of a custom action.
   *
   * @public
   */
  ActionDefinition?: StatelessCustomActionDefinition | undefined;

  /**
   * A descriptive name of the custom action.
   *
   * @public
   */
  ActionName?: string | undefined;
}

/**
 * A port range to specify the destination ports to inspect for.
 *
 * @public
 */
export interface RuleGroupSourceStatelessRuleMatchAttributesDestinationPorts {
  /**
   * The starting port value for the port range.
   *
   * @public
   */
  FromPort?: number | undefined;

  /**
   * The ending port value for the port range.
   *
   * @public
   */
  ToPort?: number | undefined;
}

/**
 * A destination IP address or range.
 *
 * @public
 */
export interface RuleGroupSourceStatelessRuleMatchAttributesDestinations {
  /**
   * An IP address or a block of IP addresses.
   *
   * @public
   */
  AddressDefinition?: string | undefined;
}

/**
 * A port range to specify the source ports to inspect for.
 *
 * @public
 */
export interface RuleGroupSourceStatelessRuleMatchAttributesSourcePorts {
  /**
   * The starting port value for the port range.
   *
   * @public
   */
  FromPort?: number | undefined;

  /**
   * The ending port value for the port range.
   *
   * @public
   */
  ToPort?: number | undefined;
}

/**
 * A source IP addresses and address range to inspect for.
 *
 * @public
 */
export interface RuleGroupSourceStatelessRuleMatchAttributesSources {
  /**
   * An IP address or a block of IP addresses.
   *
   * @public
   */
  AddressDefinition?: string | undefined;
}

/**
 * A set of TCP flags and masks to inspect for.
 *
 * @public
 */
export interface RuleGroupSourceStatelessRuleMatchAttributesTcpFlags {
  /**
   * Defines the flags from the `Masks` setting that must be set in order for the packet to match. Flags that are listed must be set. Flags that are not listed must not be set.
   *
   * @public
   */
  Flags?: string[] | undefined;

  /**
   * The set of flags to consider in the inspection. If not specified, then all flags are inspected.
   *
   * @public
   */
  Masks?: string[] | undefined;
}

/**
 * Criteria for the stateless rule.
 *
 * @public
 */
export interface RuleGroupSourceStatelessRuleMatchAttributes {
  /**
   * A list of port ranges to specify the destination ports to inspect for.
   *
   * @public
   */
  DestinationPorts?: RuleGroupSourceStatelessRuleMatchAttributesDestinationPorts[] | undefined;

  /**
   * The destination IP addresses and address ranges to inspect for, in CIDR notation.
   *
   * @public
   */
  Destinations?: RuleGroupSourceStatelessRuleMatchAttributesDestinations[] | undefined;

  /**
   * The protocols to inspect for.
   *
   * @public
   */
  Protocols?: number[] | undefined;

  /**
   * A list of port ranges to specify the source ports to inspect for.
   *
   * @public
   */
  SourcePorts?: RuleGroupSourceStatelessRuleMatchAttributesSourcePorts[] | undefined;

  /**
   * The source IP addresses and address ranges to inspect for, in CIDR notation.
   *
   * @public
   */
  Sources?: RuleGroupSourceStatelessRuleMatchAttributesSources[] | undefined;

  /**
   * The TCP flags and masks to inspect for.
   *
   * @public
   */
  TcpFlags?: RuleGroupSourceStatelessRuleMatchAttributesTcpFlags[] | undefined;
}

/**
 * The definition of the stateless rule.
 *
 * @public
 */
export interface RuleGroupSourceStatelessRuleDefinition {
  /**
   * The actions to take on a packet that matches one of the stateless rule definition's match attributes. You must specify a standard action (`aws:pass`, `aws:drop`, or `aws:forward_to_sfe`). You can then add custom actions.
   *
   * @public
   */
  Actions?: string[] | undefined;

  /**
   * The criteria for Network Firewall to use to inspect an individual packet in a stateless rule inspection.
   *
   * @public
   */
  MatchAttributes?: RuleGroupSourceStatelessRuleMatchAttributes | undefined;
}

/**
 * A stateless rule in the rule group.
 *
 * @public
 */
export interface RuleGroupSourceStatelessRulesDetails {
  /**
   * Indicates the order in which to run this rule relative to all of the rules in the stateless rule group.
   *
   * @public
   */
  Priority?: number | undefined;

  /**
   * Provides the definition of the stateless rule.
   *
   * @public
   */
  RuleDefinition?: RuleGroupSourceStatelessRuleDefinition | undefined;
}

/**
 * Stateless rules and custom actions for a stateless rule group.
 *
 * @public
 */
export interface RuleGroupSourceStatelessRulesAndCustomActionsDetails {
  /**
   * Custom actions for the rule group.
   *
   * @public
   */
  CustomActions?: RuleGroupSourceCustomActionsDetails[] | undefined;

  /**
   * Stateless rules for the rule group.
   *
   * @public
   */
  StatelessRules?: RuleGroupSourceStatelessRulesDetails[] | undefined;
}

/**
 * The rules and actions for the rule group.
 *
 * @public
 */
export interface RuleGroupSource {
  /**
   * Stateful inspection criteria for a domain list rule group. A domain list rule group determines access by specific protocols to specific domains.
   *
   * @public
   */
  RulesSourceList?: RuleGroupSourceListDetails | undefined;

  /**
   * Stateful inspection criteria, provided in Suricata compatible intrusion prevention system (IPS) rules.
   *
   * @public
   */
  RulesString?: string | undefined;

  /**
   * Suricata rule specifications.
   *
   * @public
   */
  StatefulRules?: RuleGroupSourceStatefulRulesDetails[] | undefined;

  /**
   * The stateless rules and custom actions used by a stateless rule group.
   *
   * @public
   */
  StatelessRulesAndCustomActions?: RuleGroupSourceStatelessRulesAndCustomActionsDetails | undefined;
}

/**
 * A list of IP addresses and address ranges, in CIDR notation.
 *
 * @public
 */
export interface RuleGroupVariablesIpSetsDetails {
  /**
   * The list of IP addresses and ranges.
   *
   * @public
   */
  Definition?: string[] | undefined;
}

/**
 * A list of port ranges.
 *
 * @public
 */
export interface RuleGroupVariablesPortSetsDetails {
  /**
   * The list of port ranges.
   *
   * @public
   */
  Definition?: string[] | undefined;
}

/**
 * Additional settings to use in the specified rules.
 *
 * @public
 */
export interface RuleGroupVariables {
  /**
   * A list of IP addresses and address ranges, in CIDR notation.
   *
   * @public
   */
  IpSets?: RuleGroupVariablesIpSetsDetails | undefined;

  /**
   * A list of port ranges.
   *
   * @public
   */
  PortSets?: RuleGroupVariablesPortSetsDetails | undefined;
}

/**
 * Details about the rule group.
 *
 * @public
 */
export interface RuleGroupDetails {
  /**
   * Additional settings to use in the specified rules.
   *
   * @public
   */
  RuleVariables?: RuleGroupVariables | undefined;

  /**
   * The rules and actions for the rule group.
   *
   * For stateful rule groups, can contain `RulesString`, `RulesSourceList`, or `StatefulRules`.
   *
   * For stateless rule groups, contains `StatelessRulesAndCustomActions`.
   *
   * @public
   */
  RulesSource?: RuleGroupSource | undefined;
}

/**
 * Details about an Network Firewall rule group. Rule groups are used to inspect and control network traffic. Stateless rule groups apply to individual packets. Stateful rule groups apply to packets in the context of their traffic flow.
 *
 * Rule groups are referenced in firewall policies.
 *
 * @public
 */
export interface AwsNetworkFirewallRuleGroupDetails {
  /**
   * The maximum number of operating resources that this rule group can use.
   *
   * @public
   */
  Capacity?: number | undefined;

  /**
   * A description of the rule group.
   *
   * @public
   */
  Description?: string | undefined;

  /**
   * Details about the rule group.
   *
   * @public
   */
  RuleGroup?: RuleGroupDetails | undefined;

  /**
   * The ARN of the rule group.
   *
   * @public
   */
  RuleGroupArn?: string | undefined;

  /**
   * The identifier of the rule group.
   *
   * @public
   */
  RuleGroupId?: string | undefined;

  /**
   * The descriptive name of the rule group.
   *
   * @public
   */
  RuleGroupName?: string | undefined;

  /**
   * The type of rule group. A rule group can be stateful or stateless.
   *
   * @public
   */
  Type?: string | undefined;
}

/**
 * Specifies information about the master user of the domain.
 *
 * @public
 */
export interface AwsOpenSearchServiceDomainMasterUserOptionsDetails {
  /**
   * The Amazon Resource Name (ARN) for the master user.
   *
   * @public
   */
  MasterUserArn?: string | undefined;

  /**
   * The username for the master user.
   *
   * @public
   */
  MasterUserName?: string | undefined;

  /**
   * The password for the master user.
   *
   * @public
   */
  MasterUserPassword?: string | undefined;
}

/**
 * Provides information about domain access control options.
 *
 * @public
 */
export interface AwsOpenSearchServiceDomainAdvancedSecurityOptionsDetails {
  /**
   * Enables fine-grained access control.
   *
   * @public
   */
  Enabled?: boolean | undefined;

  /**
   * Enables the internal user database.
   *
   * @public
   */
  InternalUserDatabaseEnabled?: boolean | undefined;

  /**
   * Specifies information about the master user of the domain.
   *
   * @public
   */
  MasterUserOptions?: AwsOpenSearchServiceDomainMasterUserOptionsDetails | undefined;
}

/**
 * Configuration options for zone awareness.
 *
 * @public
 */
export interface AwsOpenSearchServiceDomainClusterConfigZoneAwarenessConfigDetails {
  /**
   * The number of Availability Zones that the domain uses. Valid values are `2` or `3`. The default is `2`.
   *
   * @public
   */
  AvailabilityZoneCount?: number | undefined;
}

/**
 * Details about the configuration of an OpenSearch cluster.
 *
 * @public
 */
export interface AwsOpenSearchServiceDomainClusterConfigDetails {
  /**
   * The number of data nodes to use in the OpenSearch domain.
   *
   * @public
   */
  InstanceCount?: number | undefined;

  /**
   * Whether UltraWarm is enabled.
   *
   * @public
   */
  WarmEnabled?: boolean | undefined;

  /**
   * The number of UltraWarm instances.
   *
   * @public
   */
  WarmCount?: number | undefined;

  /**
   * Whether to use a dedicated master node for the OpenSearch domain. A dedicated master node performs cluster management tasks, but does not hold data or respond to data upload requests.
   *
   * @public
   */
  DedicatedMasterEnabled?: boolean | undefined;

  /**
   * Configuration options for zone awareness. Provided if `ZoneAwarenessEnabled` is `true`.
   *
   * @public
   */
  ZoneAwarenessConfig?: AwsOpenSearchServiceDomainClusterConfigZoneAwarenessConfigDetails | undefined;

  /**
   * The number of instances to use for the master node. If this attribute is specified, then `DedicatedMasterEnabled` must be `true`.
   *
   * @public
   */
  DedicatedMasterCount?: number | undefined;

  /**
   * The instance type for your data nodes.
   *
   * For a list of valid values, see [Supported instance types in Amazon OpenSearch Service](https://docs.aws.amazon.com/opensearch-service/latest/developerguide/supported-instance-types.html) in the *Amazon OpenSearch Service Developer Guide*.
   *
   * @public
   */
  InstanceType?: string | undefined;

  /**
   * The type of UltraWarm instance.
   *
   * @public
   */
  WarmType?: string | undefined;

  /**
   * Whether to enable zone awareness for the OpenSearch domain. When zone awareness is enabled, OpenSearch Service allocates the cluster's nodes and replica index shards across Availability Zones (AZs) in the same Region. This prevents data loss and minimizes downtime if a node or data center fails.
   *
   * @public
   */
  ZoneAwarenessEnabled?: boolean | undefined;

  /**
   * The hardware configuration of the computer that hosts the dedicated master node.
   *
   * If this attribute is specified, then `DedicatedMasterEnabled` must be `true`.
   *
   * @public
   */
  DedicatedMasterType?: string | undefined;
}

/**
 * Information about additional options for the domain endpoint.
 *
 * @public
 */
export interface AwsOpenSearchServiceDomainDomainEndpointOptionsDetails {
  /**
   * The ARN for the security certificate. The certificate is managed in ACM.
   *
   * @public
   */
  CustomEndpointCertificateArn?: string | undefined;

  /**
   * Whether to enable a custom endpoint for the domain.
   *
   * @public
   */
  CustomEndpointEnabled?: boolean | undefined;

  /**
   * Whether to require that all traffic to the domain arrive over HTTPS.
   *
   * @public
   */
  EnforceHTTPS?: boolean | undefined;

  /**
   * The fully qualified URL for the custom endpoint.
   *
   * @public
   */
  CustomEndpoint?: string | undefined;

  /**
   * The TLS security policy to apply to the HTTPS endpoint of the OpenSearch domain.
   *
   * @public
   */
  TLSSecurityPolicy?: string | undefined;
}

/**
 * Details about the configuration for encryption at rest for the OpenSearch domain.
 *
 * @public
 */
export interface AwsOpenSearchServiceDomainEncryptionAtRestOptionsDetails {
  /**
   * Whether encryption at rest is enabled.
   *
   * @public
   */
  Enabled?: boolean | undefined;

  /**
   * The KMS key ID.
   *
   * @public
   */
  KmsKeyId?: string | undefined;
}

/**
 * Configuration details for a log publishing option.
 *
 * @public
 */
export interface AwsOpenSearchServiceDomainLogPublishingOption {
  /**
   * The ARN of the CloudWatch Logs group to publish the logs to.
   *
   * @public
   */
  CloudWatchLogsLogGroupArn?: string | undefined;

  /**
   * Whether the log publishing is enabled.
   *
   * @public
   */
  Enabled?: boolean | undefined;
}

/**
 * Configures the CloudWatch Logs to publish for the OpenSearch domain.
 *
 * @public
 */
export interface AwsOpenSearchServiceDomainLogPublishingOptionsDetails {
  /**
   * Configures the OpenSearch index logs publishing.
   *
   * @public
   */
  IndexSlowLogs?: AwsOpenSearchServiceDomainLogPublishingOption | undefined;

  /**
   * Configures the OpenSearch search slow log publishing.
   *
   * @public
   */
  SearchSlowLogs?: AwsOpenSearchServiceDomainLogPublishingOption | undefined;

  /**
   * Configures the OpenSearch audit logs publishing.
   *
   * @public
   */
  AuditLogs?: AwsOpenSearchServiceDomainLogPublishingOption | undefined;
}

/**
 * Provides details about the configuration for node-to-node encryption.
 *
 * @public
 */
export interface AwsOpenSearchServiceDomainNodeToNodeEncryptionOptionsDetails {
  /**
   * Whether node-to-node encryption is enabled.
   *
   * @public
   */
  Enabled?: boolean | undefined;
}

/**
 * Provides information about the state of the domain relative to the latest service software.
 *
 * @public
 */
export interface AwsOpenSearchServiceDomainServiceSoftwareOptionsDetails {
  /**
   * The epoch time when the deployment window closes for required updates. After this time, OpenSearch Service schedules the software upgrade automatically.
   *
   * @public
   */
  AutomatedUpdateDate?: string | undefined;

  /**
   * Whether a request to update the domain can be canceled.
   *
   * @public
   */
  Cancellable?: boolean | undefined;

  /**
   * The version of the service software that is currently installed on the domain.
   *
   * @public
   */
  CurrentVersion?: string | undefined;

  /**
   * A more detailed description of the service software status.
   *
   * @public
   */
  Description?: string | undefined;

  /**
   * The most recent version of the service software.
   *
   * @public
   */
  NewVersion?: string | undefined;

  /**
   * Whether a service software update is available for the domain.
   *
   * @public
   */
  UpdateAvailable?: boolean | undefined;

  /**
   * The status of the service software update. Valid values are as follows:
   *
   * - `COMPLETED`
   * - `ELIGIBLE`
   * - `IN_PROGRESS`
   * - `NOT_ELIGIBLE`
   * - `PENDING_UPDATE`
   *
   * @public
   */
  UpdateStatus?: string | undefined;

  /**
   * Whether the service software update is optional.
   *
   * @public
   */
  OptionalDeployment?: boolean | undefined;
}

/**
 * Contains information that OpenSearch Service derives based on the `VPCOptions` for the domain.
 *
 * @public
 */
export interface AwsOpenSearchServiceDomainVpcOptionsDetails {
  /**
   * The list of security group IDs that are associated with the VPC endpoints for the domain.
   *
   * @public
   */
  SecurityGroupIds?: string[] | undefined;

  /**
   * A list of subnet IDs that are associated with the VPC endpoints for the domain.
   *
   * @public
   */
  SubnetIds?: string[] | undefined;
}

/**
 * Information about an Amazon OpenSearch Service domain.
 *
 * @public
 */
export interface AwsOpenSearchServiceDomainDetails {
  /**
   * The ARN of the OpenSearch Service domain.
   *
   * @public
   */
  Arn?: string | undefined;

  /**
   * IAM policy document that specifies the access policies for the OpenSearch Service domain.
   *
   * @public
   */
  AccessPolicies?: string | undefined;

  /**
   * The name of the endpoint.
   *
   * @public
   */
  DomainName?: string | undefined;

  /**
   * The identifier of the domain.
   *
   * @public
   */
  Id?: string | undefined;

  /**
   * The domain endpoint.
   *
   * @public
   */
  DomainEndpoint?: string | undefined;

  /**
   * The version of the domain engine.
   *
   * @public
   */
  EngineVersion?: string | undefined;

  /**
   * Details about the configuration for encryption at rest.
   *
   * @public
   */
  EncryptionAtRestOptions?: AwsOpenSearchServiceDomainEncryptionAtRestOptionsDetails | undefined;

  /**
   * Details about the configuration for node-to-node encryption.
   *
   * @public
   */
  NodeToNodeEncryptionOptions?: AwsOpenSearchServiceDomainNodeToNodeEncryptionOptionsDetails | undefined;

  /**
   * Information about the status of a domain relative to the latest service software.
   *
   * @public
   */
  ServiceSoftwareOptions?: AwsOpenSearchServiceDomainServiceSoftwareOptionsDetails | undefined;

  /**
   * Details about the configuration of an OpenSearch cluster.
   *
   * @public
   */
  ClusterConfig?: AwsOpenSearchServiceDomainClusterConfigDetails | undefined;

  /**
   * Additional options for the domain endpoint.
   *
   * @public
   */
  DomainEndpointOptions?: AwsOpenSearchServiceDomainDomainEndpointOptionsDetails | undefined;

  /**
   * Information that OpenSearch Service derives based on `VPCOptions` for the domain.
   *
   * @public
   */
  VpcOptions?: AwsOpenSearchServiceDomainVpcOptionsDetails | undefined;

  /**
   * Configures the CloudWatch Logs to publish for the OpenSearch domain.
   *
   * @public
   */
  LogPublishingOptions?: AwsOpenSearchServiceDomainLogPublishingOptionsDetails | undefined;

  /**
   * The domain endpoints. Used if the OpenSearch domain resides in a VPC.
   *
   * This is a map of key-value pairs. The key is always `vpc`. The value is the endpoint.
   *
   * @public
   */
  DomainEndpoints?: Record<string, string> | undefined;

  /**
   * Specifies options for fine-grained access control.
   *
   * @public
   */
  AdvancedSecurityOptions?: AwsOpenSearchServiceDomainAdvancedSecurityOptionsDetails | undefined;
}

/**
 * Specifies an Organizations scope. Data from the specified organization or organizational unit is included in the response.
 *
 * To scope to a specific organizational unit, provide `OrganizationalUnitId`. You can optionally include `OrganizationId`. If you omit `OrganizationId`, Security Hub uses the caller's organization ID. To scope to the delegated administrator's entire organization, provide only `OrganizationId`.
 *
 * The organization ID and organizational unit must belong to the delegated administrator's own organization. Each request must use one scoping approach: either scope to the entire organization by providing an `AwsOrganizationScope` entry with only `OrganizationId`, or scope to specific organizational units by providing `AwsOrganizationScope` entries with `OrganizationalUnitId`. You can't combine both approaches in the same request.
 *
 * @public
 */
export interface AwsOrganizationScope {
  /**
   * The unique identifier (ID) of the organization (for example, `o-abcd1234567890`). The organization must be the delegated administrator's own organization. If you omit this value and provide `OrganizationalUnitId`, Security Hub uses the caller's organization ID.
   *
   * @public
   */
  OrganizationId?: string | undefined;

  /**
   * The unique identifier (ID) of the organizational unit (OU) (for example, `ou-ab12-cd345678`). The OU must exist within the delegated administrator's own organization. When specified, the results include only data from accounts in this OU.
   *
   * @public
   */
  OrganizationalUnitId?: string | undefined;
}

/**
 * An IAM role that is associated with the Amazon RDS DB cluster.
 *
 * @public
 */
export interface AwsRdsDbClusterAssociatedRole {
  /**
   * The ARN of the IAM role.
   *
   * @public
   */
  RoleArn?: string | undefined;

  /**
   * The status of the association between the IAM role and the DB cluster. Valid values are as follows:
   *
   * - `ACTIVE`
   * - `INVALID`
   * - `PENDING`
   *
   * @public
   */
  Status?: string | undefined;
}

/**
 * Information about an instance in the DB cluster.
 *
 * @public
 */
export interface AwsRdsDbClusterMember {
  /**
   * Whether the cluster member is the primary instance for the DB cluster.
   *
   * @public
   */
  IsClusterWriter?: boolean | undefined;

  /**
   * Specifies the order in which an Aurora replica is promoted to the primary instance when the existing primary instance fails.
   *
   * @public
   */
  PromotionTier?: number | undefined;

  /**
   * The instance identifier for this member of the DB cluster.
   *
   * @public
   */
  DbInstanceIdentifier?: string | undefined;

  /**
   * The status of the DB cluster parameter group for this member of the DB cluster.
   *
   * @public
   */
  DbClusterParameterGroupStatus?: string | undefined;
}

/**
 * Information about an option group membership for a DB cluster.
 *
 * @public
 */
export interface AwsRdsDbClusterOptionGroupMembership {
  /**
   * The name of the DB cluster option group.
   *
   * @public
   */
  DbClusterOptionGroupName?: string | undefined;

  /**
   * The status of the DB cluster option group.
   *
   * @public
   */
  Status?: string | undefined;
}

/**
 * Information about an Active Directory domain membership record associated with the DB instance.
 *
 * @public
 */
export interface AwsRdsDbDomainMembership {
  /**
   * The identifier of the Active Directory domain.
   *
   * @public
   */
  Domain?: string | undefined;

  /**
   * The status of the Active Directory Domain membership for the DB instance.
   *
   * @public
   */
  Status?: string | undefined;

  /**
   * The fully qualified domain name of the Active Directory domain.
   *
   * @public
   */
  Fqdn?: string | undefined;

  /**
   * The name of the IAM role to use when making API calls to the Directory Service.
   *
   * @public
   */
  IamRoleName?: string | undefined;
}

/**
 * A VPC security groups that the DB instance belongs to.
 *
 * @public
 */
export interface AwsRdsDbInstanceVpcSecurityGroup {
  /**
   * The name of the VPC security group.
   *
   * @public
   */
  VpcSecurityGroupId?: string | undefined;

  /**
   * The status of the VPC security group.
   *
   * @public
   */
  Status?: string | undefined;
}

/**
 * Information about an Amazon RDS DB cluster.
 *
 * @public
 */
export interface AwsRdsDbClusterDetails {
  /**
   * For all database engines except Aurora, specifies the allocated storage size in gibibytes (GiB).
   *
   * @public
   */
  AllocatedStorage?: number | undefined;

  /**
   * A list of Availability Zones (AZs) where instances in the DB cluster can be created.
   *
   * @public
   */
  AvailabilityZones?: string[] | undefined;

  /**
   * The number of days for which automated backups are retained.
   *
   * @public
   */
  BackupRetentionPeriod?: number | undefined;

  /**
   * The name of the database.
   *
   * @public
   */
  DatabaseName?: string | undefined;

  /**
   * The current status of this DB cluster.
   *
   * @public
   */
  Status?: string | undefined;

  /**
   * The connection endpoint for the primary instance of the DB cluster.
   *
   * @public
   */
  Endpoint?: string | undefined;

  /**
   * The reader endpoint for the DB cluster.
   *
   * @public
   */
  ReaderEndpoint?: string | undefined;

  /**
   * A list of custom endpoints for the DB cluster.
   *
   * @public
   */
  CustomEndpoints?: string[] | undefined;

  /**
   * Whether the DB cluster has instances in multiple Availability Zones.
   *
   * @public
   */
  MultiAz?: boolean | undefined;

  /**
   * The name of the database engine to use for this DB cluster. Valid values are as follows:
   *
   * - `aurora`
   * - `aurora-mysql`
   * - `aurora-postgresql`
   *
   * @public
   */
  Engine?: string | undefined;

  /**
   * The version number of the database engine to use.
   *
   * @public
   */
  EngineVersion?: string | undefined;

  /**
   * The port number on which the DB instances in the DB cluster accept connections.
   *
   * @public
   */
  Port?: number | undefined;

  /**
   * The name of the master user for the DB cluster.
   *
   * @public
   */
  MasterUsername?: string | undefined;

  /**
   * The range of time each day when automated backups are created, if automated backups are enabled.
   *
   * Uses the format `HH:MM-HH:MM`. For example, `04:52-05:22`.
   *
   * @public
   */
  PreferredBackupWindow?: string | undefined;

  /**
   * The weekly time range during which system maintenance can occur, in Universal Coordinated Time (UTC).
   *
   * Uses the format `<day>:HH:MM-<day>:HH:MM`.
   *
   * For the day values, use `mon`|`tue`|`wed`|`thu`|`fri`|`sat`|`sun`.
   *
   * For example, `sun:09:32-sun:10:02`.
   *
   * @public
   */
  PreferredMaintenanceWindow?: string | undefined;

  /**
   * The identifiers of the read replicas that are associated with this DB cluster.
   *
   * @public
   */
  ReadReplicaIdentifiers?: string[] | undefined;

  /**
   * A list of VPC security groups that the DB cluster belongs to.
   *
   * @public
   */
  VpcSecurityGroups?: AwsRdsDbInstanceVpcSecurityGroup[] | undefined;

  /**
   * Specifies the identifier that Amazon Route 53 assigns when you create a hosted zone.
   *
   * @public
   */
  HostedZoneId?: string | undefined;

  /**
   * Whether the DB cluster is encrypted.
   *
   * @public
   */
  StorageEncrypted?: boolean | undefined;

  /**
   * The ARN of the KMS master key that is used to encrypt the database instances in the DB cluster.
   *
   * @public
   */
  KmsKeyId?: string | undefined;

  /**
   * The identifier of the DB cluster. The identifier must be unique within each Amazon Web Services Region and is immutable.
   *
   * @public
   */
  DbClusterResourceId?: string | undefined;

  /**
   * A list of the IAM roles that are associated with the DB cluster.
   *
   * @public
   */
  AssociatedRoles?: AwsRdsDbClusterAssociatedRole[] | undefined;

  /**
   * Indicates when the DB cluster was created, in Universal Coordinated Time (UTC).
   *
   * For more information about the validation and formatting of timestamp fields in Security Hub CSPM, see [Timestamps](https://docs.aws.amazon.com/securityhub/1.0/APIReference/Welcome.html#timestamps).
   *
   * @public
   */
  ClusterCreateTime?: string | undefined;

  /**
   * A list of log types that this DB cluster is configured to export to CloudWatch Logs.
   *
   * @public
   */
  EnabledCloudWatchLogsExports?: string[] | undefined;

  /**
   * The database engine mode of the DB cluster.Valid values are as follows:
   *
   * - `global`
   * - `multimaster`
   * - `parallelquery`
   * - `provisioned`
   * - `serverless`
   *
   * @public
   */
  EngineMode?: string | undefined;

  /**
   * Whether the DB cluster has deletion protection enabled.
   *
   * @public
   */
  DeletionProtection?: boolean | undefined;

  /**
   * Whether the HTTP endpoint for an Aurora Serverless DB cluster is enabled.
   *
   * @public
   */
  HttpEndpointEnabled?: boolean | undefined;

  /**
   * The status of the database activity stream. Valid values are as follows:
   *
   * - `started`
   * - `starting`
   * - `stopped`
   * - `stopping`
   *
   * @public
   */
  ActivityStreamStatus?: string | undefined;

  /**
   * Whether tags are copied from the DB cluster to snapshots of the DB cluster.
   *
   * @public
   */
  CopyTagsToSnapshot?: boolean | undefined;

  /**
   * Whether the DB cluster is a clone of a DB cluster owned by a different Amazon Web Services account.
   *
   * @public
   */
  CrossAccountClone?: boolean | undefined;

  /**
   * The Active Directory domain membership records that are associated with the DB cluster.
   *
   * @public
   */
  DomainMemberships?: AwsRdsDbDomainMembership[] | undefined;

  /**
   * The name of the DB cluster parameter group for the DB cluster.
   *
   * @public
   */
  DbClusterParameterGroup?: string | undefined;

  /**
   * The subnet group that is associated with the DB cluster, including the name, description, and subnets in the subnet group.
   *
   * @public
   */
  DbSubnetGroup?: string | undefined;

  /**
   * The list of option group memberships for this DB cluster.
   *
   * @public
   */
  DbClusterOptionGroupMemberships?: AwsRdsDbClusterOptionGroupMembership[] | undefined;

  /**
   * The DB cluster identifier that the user assigned to the cluster. This identifier is the unique key that identifies a DB cluster.
   *
   * @public
   */
  DbClusterIdentifier?: string | undefined;

  /**
   * The list of instances that make up the DB cluster.
   *
   * @public
   */
  DbClusterMembers?: AwsRdsDbClusterMember[] | undefined;

  /**
   * Whether the mapping of IAM accounts to database accounts is enabled.
   *
   * @public
   */
  IamDatabaseAuthenticationEnabled?: boolean | undefined;

  /**
   * Indicates if minor version upgrades are automatically applied to the cluster.
   *
   * @public
   */
  AutoMinorVersionUpgrade?: boolean | undefined;
}

/**
 * Contains the name and values of a manual Amazon Relational Database Service (RDS) DB cluster snapshot attribute.
 *
 * @public
 */
export interface AwsRdsDbClusterSnapshotDbClusterSnapshotAttribute {
  /**
   * The name of the manual DB cluster snapshot attribute. The attribute named `restore` refers to the list of Amazon Web Services accounts that have permission to copy or restore the manual DB cluster snapshot.
   *
   * @public
   */
  AttributeName?: string | undefined;

  /**
   * The value(s) for the manual DB cluster snapshot attribute. If the `AttributeName` field is set to `restore`, then this element returns a list of IDs of the Amazon Web Services accounts that are authorized to copy or restore the manual DB cluster snapshot. If a value of `all` is in the list, then the manual DB cluster snapshot is public and available for any Amazon Web Services account to copy or restore.
   *
   * @public
   */
  AttributeValues?: string[] | undefined;
}

/**
 * Information about an Amazon RDS DB cluster snapshot.
 *
 * @public
 */
export interface AwsRdsDbClusterSnapshotDetails {
  /**
   * A list of Availability Zones where instances in the DB cluster can be created.
   *
   * @public
   */
  AvailabilityZones?: string[] | undefined;

  /**
   * Indicates when the snapshot was taken.
   *
   * For more information about the validation and formatting of timestamp fields in Security Hub CSPM, see [Timestamps](https://docs.aws.amazon.com/securityhub/1.0/APIReference/Welcome.html#timestamps).
   *
   * @public
   */
  SnapshotCreateTime?: string | undefined;

  /**
   * The name of the database engine that you want to use for this DB instance.
   *
   * @public
   */
  Engine?: string | undefined;

  /**
   * Specifies the allocated storage size in gibibytes (GiB).
   *
   * @public
   */
  AllocatedStorage?: number | undefined;

  /**
   * The status of this DB cluster snapshot.
   *
   * @public
   */
  Status?: string | undefined;

  /**
   * The port number on which the DB instances in the DB cluster accept connections.
   *
   * @public
   */
  Port?: number | undefined;

  /**
   * The VPC ID that is associated with the DB cluster snapshot.
   *
   * @public
   */
  VpcId?: string | undefined;

  /**
   * Indicates when the DB cluster was created, in Universal Coordinated Time (UTC).
   *
   * For more information about the validation and formatting of timestamp fields in Security Hub CSPM, see [Timestamps](https://docs.aws.amazon.com/securityhub/1.0/APIReference/Welcome.html#timestamps).
   *
   * @public
   */
  ClusterCreateTime?: string | undefined;

  /**
   * The name of the master user for the DB cluster.
   *
   * @public
   */
  MasterUsername?: string | undefined;

  /**
   * The version of the database engine to use.
   *
   * @public
   */
  EngineVersion?: string | undefined;

  /**
   * The license model information for this DB cluster snapshot.
   *
   * @public
   */
  LicenseModel?: string | undefined;

  /**
   * The type of DB cluster snapshot.
   *
   * @public
   */
  SnapshotType?: string | undefined;

  /**
   * Specifies the percentage of the estimated data that has been transferred.
   *
   * @public
   */
  PercentProgress?: number | undefined;

  /**
   * Whether the DB cluster is encrypted.
   *
   * @public
   */
  StorageEncrypted?: boolean | undefined;

  /**
   * The ARN of the KMS master key that is used to encrypt the database instances in the DB cluster.
   *
   * @public
   */
  KmsKeyId?: string | undefined;

  /**
   * The DB cluster identifier.
   *
   * @public
   */
  DbClusterIdentifier?: string | undefined;

  /**
   * The identifier of the DB cluster snapshot.
   *
   * @public
   */
  DbClusterSnapshotIdentifier?: string | undefined;

  /**
   * Whether mapping of IAM accounts to database accounts is enabled.
   *
   * @public
   */
  IamDatabaseAuthenticationEnabled?: boolean | undefined;

  /**
   * Contains the name and values of a manual DB cluster snapshot attribute.
   *
   * @public
   */
  DbClusterSnapshotAttributes?: AwsRdsDbClusterSnapshotDbClusterSnapshotAttribute[] | undefined;
}

/**
 * An IAM role associated with the DB instance.
 *
 * @public
 */
export interface AwsRdsDbInstanceAssociatedRole {
  /**
   * The ARN of the IAM role that is associated with the DB instance.
   *
   * @public
   */
  RoleArn?: string | undefined;

  /**
   * The name of the feature associated with the IAM role.
   *
   * @public
   */
  FeatureName?: string | undefined;

  /**
   * Describes the state of the association between the IAM role and the DB instance. The `Status` property returns one of the following values:
   *
   * - `ACTIVE` - The IAM role ARN is associated with the DB instance and can be used to access other Amazon Web Services services on your behalf.
   * - `PENDING` - The IAM role ARN is being associated with the DB instance.
   * - `INVALID` - The IAM role ARN is associated with the DB instance. But the DB instance is unable to assume the IAM role in order to access other Amazon Web Services services on your behalf.
   *
   * @public
   */
  Status?: string | undefined;
}

/**
 * Provides information about a parameter group for a DB instance.
 *
 * @public
 */
export interface AwsRdsDbParameterGroup {
  /**
   * The name of the parameter group.
   *
   * @public
   */
  DbParameterGroupName?: string | undefined;

  /**
   * The status of parameter updates.
   *
   * @public
   */
  ParameterApplyStatus?: string | undefined;
}

/**
 * An Availability Zone for a subnet in a subnet group.
 *
 * @public
 */
export interface AwsRdsDbSubnetGroupSubnetAvailabilityZone {
  /**
   * The name of the Availability Zone for a subnet in the subnet group.
   *
   * @public
   */
  Name?: string | undefined;
}

/**
 * Information about a subnet in a subnet group.
 *
 * @public
 */
export interface AwsRdsDbSubnetGroupSubnet {
  /**
   * The identifier of a subnet in the subnet group.
   *
   * @public
   */
  SubnetIdentifier?: string | undefined;

  /**
   * Information about the Availability Zone for a subnet in the subnet group.
   *
   * @public
   */
  SubnetAvailabilityZone?: AwsRdsDbSubnetGroupSubnetAvailabilityZone | undefined;

  /**
   * The status of a subnet in the subnet group.
   *
   * @public
   */
  SubnetStatus?: string | undefined;
}

/**
 * Information about the subnet group for the database instance.
 *
 * @public
 */
export interface AwsRdsDbSubnetGroup {
  /**
   * The name of the subnet group.
   *
   * @public
   */
  DbSubnetGroupName?: string | undefined;

  /**
   * The description of the subnet group.
   *
   * @public
   */
  DbSubnetGroupDescription?: string | undefined;

  /**
   * The VPC ID of the subnet group.
   *
   * @public
   */
  VpcId?: string | undefined;

  /**
   * The status of the subnet group.
   *
   * @public
   */
  SubnetGroupStatus?: string | undefined;

  /**
   * A list of subnets in the subnet group.
   *
   * @public
   */
  Subnets?: AwsRdsDbSubnetGroupSubnet[] | undefined;

  /**
   * The ARN of the subnet group.
   *
   * @public
   */
  DbSubnetGroupArn?: string | undefined;
}

/**
 * Specifies the connection endpoint.
 *
 * @public
 */
export interface AwsRdsDbInstanceEndpoint {
  /**
   * Specifies the DNS address of the DB instance.
   *
   * @public
   */
  Address?: string | undefined;

  /**
   * Specifies the port that the database engine is listening on.
   *
   * @public
   */
  Port?: number | undefined;

  /**
   * Specifies the ID that Amazon Route 53 assigns when you create a hosted zone.
   *
   * @public
   */
  HostedZoneId?: string | undefined;
}

/**
 * An option group membership.
 *
 * @public
 */
export interface AwsRdsDbOptionGroupMembership {
  /**
   * The name of the option group.
   *
   * @public
   */
  OptionGroupName?: string | undefined;

  /**
   * The status of the option group membership.
   *
   * @public
   */
  Status?: string | undefined;
}

/**
 * Identifies the log types to enable and disable.
 *
 * @public
 */
export interface AwsRdsPendingCloudWatchLogsExports {
  /**
   * A list of log types that are being enabled.
   *
   * @public
   */
  LogTypesToEnable?: string[] | undefined;

  /**
   * A list of log types that are being disabled.
   *
   * @public
   */
  LogTypesToDisable?: string[] | undefined;
}

/**
 * A processor feature.
 *
 * @public
 */
export interface AwsRdsDbProcessorFeature {
  /**
   * The name of the processor feature. Valid values are `coreCount` or `threadsPerCore`.
   *
   * @public
   */
  Name?: string | undefined;

  /**
   * The value of the processor feature.
   *
   * @public
   */
  Value?: string | undefined;
}

/**
 * Changes to a DB instance that are currently pending.
 *
 * @public
 */
export interface AwsRdsDbPendingModifiedValues {
  /**
   * The new DB instance class for the DB instance.
   *
   * @public
   */
  DbInstanceClass?: string | undefined;

  /**
   * The new value of the allocated storage for the DB instance.
   *
   * @public
   */
  AllocatedStorage?: number | undefined;

  /**
   * The new master user password for the DB instance.
   *
   * @public
   */
  MasterUserPassword?: string | undefined;

  /**
   * The new port for the DB instance.
   *
   * @public
   */
  Port?: number | undefined;

  /**
   * The new backup retention period for the DB instance.
   *
   * @public
   */
  BackupRetentionPeriod?: number | undefined;

  /**
   * Indicates that a single Availability Zone DB instance is changing to a multiple Availability Zone deployment.
   *
   * @public
   */
  MultiAZ?: boolean | undefined;

  /**
   * The new engine version for the DB instance.
   *
   * @public
   */
  EngineVersion?: string | undefined;

  /**
   * The new license model value for the DB instance.
   *
   * @public
   */
  LicenseModel?: string | undefined;

  /**
   * The new provisioned IOPS value for the DB instance.
   *
   * @public
   */
  Iops?: number | undefined;

  /**
   * The new DB instance identifier for the DB instance.
   *
   * @public
   */
  DbInstanceIdentifier?: string | undefined;

  /**
   * The new storage type for the DB instance.
   *
   * @public
   */
  StorageType?: string | undefined;

  /**
   * The new CA certificate identifier for the DB instance.
   *
   * @public
   */
  CaCertificateIdentifier?: string | undefined;

  /**
   * The name of the new subnet group for the DB instance.
   *
   * @public
   */
  DbSubnetGroupName?: string | undefined;

  /**
   * A list of log types that are being enabled or disabled.
   *
   * @public
   */
  PendingCloudWatchLogsExports?: AwsRdsPendingCloudWatchLogsExports | undefined;

  /**
   * Processor features that are being updated.
   *
   * @public
   */
  ProcessorFeatures?: AwsRdsDbProcessorFeature[] | undefined;
}

/**
 * Information about the status of a read replica.
 *
 * @public
 */
export interface AwsRdsDbStatusInfo {
  /**
   * The type of status. For a read replica, the status type is read replication.
   *
   * @public
   */
  StatusType?: string | undefined;

  /**
   * Whether the read replica instance is operating normally.
   *
   * @public
   */
  Normal?: boolean | undefined;

  /**
   * The status of the read replica instance.
   *
   * @public
   */
  Status?: string | undefined;

  /**
   * If the read replica is currently in an error state, provides the error details.
   *
   * @public
   */
  Message?: string | undefined;
}

/**
 * Contains the details of an Amazon RDS DB instance.
 *
 * @public
 */
export interface AwsRdsDbInstanceDetails {
  /**
   * The IAM roles associated with the DB instance.
   *
   * @public
   */
  AssociatedRoles?: AwsRdsDbInstanceAssociatedRole[] | undefined;

  /**
   * The identifier of the CA certificate for this DB instance.
   *
   * @public
   */
  CACertificateIdentifier?: string | undefined;

  /**
   * If the DB instance is a member of a DB cluster, contains the name of the DB cluster that the DB instance is a member of.
   *
   * @public
   */
  DBClusterIdentifier?: string | undefined;

  /**
   * Contains a user-supplied database identifier. This identifier is the unique key that identifies a DB instance.
   *
   * @public
   */
  DBInstanceIdentifier?: string | undefined;

  /**
   * Contains the name of the compute and memory capacity class of the DB instance.
   *
   * @public
   */
  DBInstanceClass?: string | undefined;

  /**
   * Specifies the port that the DB instance listens on. If the DB instance is part of a DB cluster, this can be a different port than the DB cluster port.
   *
   * @public
   */
  DbInstancePort?: number | undefined;

  /**
   * The Amazon Web Services Region-unique, immutable identifier for the DB instance. This identifier is found in CloudTrail log entries whenever the KMS key for the DB instance is accessed.
   *
   * @public
   */
  DbiResourceId?: string | undefined;

  /**
   * The meaning of this parameter differs according to the database engine you use.
   *
   * **MySQL, MariaDB, SQL Server, PostgreSQL**
   *
   * Contains the name of the initial database of this instance that was provided at create time, if one was specified when the DB instance was created. This same name is returned for the life of the DB instance.
   *
   * **Oracle**
   *
   * Contains the Oracle System ID (SID) of the created DB instance. Not shown when the returned parameters don't apply to an Oracle DB instance.
   *
   * @public
   */
  DBName?: string | undefined;

  /**
   * Indicates whether the DB instance has deletion protection enabled.
   *
   * When deletion protection is enabled, the database cannot be deleted.
   *
   * @public
   */
  DeletionProtection?: boolean | undefined;

  /**
   * Specifies the connection endpoint.
   *
   * @public
   */
  Endpoint?: AwsRdsDbInstanceEndpoint | undefined;

  /**
   * Provides the name of the database engine to use for this DB instance.
   *
   * @public
   */
  Engine?: string | undefined;

  /**
   * Indicates the database engine version.
   *
   * @public
   */
  EngineVersion?: string | undefined;

  /**
   * True if mapping of IAM accounts to database accounts is enabled, and otherwise false.
   *
   * IAM database authentication can be enabled for the following database engines.
   *
   * - For MySQL 5.6, minor version 5.6.34 or higher
   * - For MySQL 5.7, minor version 5.7.16 or higher
   * - Aurora 5.6 or higher
   *
   * @public
   */
  IAMDatabaseAuthenticationEnabled?: boolean | undefined;

  /**
   * Indicates when the DB instance was created.
   *
   * For more information about the validation and formatting of timestamp fields in Security Hub CSPM, see [Timestamps](https://docs.aws.amazon.com/securityhub/1.0/APIReference/Welcome.html#timestamps).
   *
   * @public
   */
  InstanceCreateTime?: string | undefined;

  /**
   * If `StorageEncrypted` is true, the KMS key identifier for the encrypted DB instance.
   *
   * @public
   */
  KmsKeyId?: string | undefined;

  /**
   * Specifies the accessibility options for the DB instance.
   *
   * A value of true specifies an Internet-facing instance with a publicly resolvable DNS name, which resolves to a public IP address.
   *
   * A value of false specifies an internal instance with a DNS name that resolves to a private IP address.
   *
   * @public
   */
  PubliclyAccessible?: boolean | undefined;

  /**
   * Specifies whether the DB instance is encrypted.
   *
   * @public
   */
  StorageEncrypted?: boolean | undefined;

  /**
   * The ARN from the key store with which the instance is associated for TDE encryption.
   *
   * @public
   */
  TdeCredentialArn?: string | undefined;

  /**
   * A list of VPC security groups that the DB instance belongs to.
   *
   * @public
   */
  VpcSecurityGroups?: AwsRdsDbInstanceVpcSecurityGroup[] | undefined;

  /**
   * Whether the DB instance is a multiple Availability Zone deployment.
   *
   * @public
   */
  MultiAz?: boolean | undefined;

  /**
   * The ARN of the CloudWatch Logs log stream that receives the enhanced monitoring metrics data for the DB instance.
   *
   * @public
   */
  EnhancedMonitoringResourceArn?: string | undefined;

  /**
   * The current status of the DB instance.
   *
   * @public
   */
  DbInstanceStatus?: string | undefined;

  /**
   * The master user name of the DB instance.
   *
   * @public
   */
  MasterUsername?: string | undefined;

  /**
   * The amount of storage (in gigabytes) to initially allocate for the DB instance.
   *
   * @public
   */
  AllocatedStorage?: number | undefined;

  /**
   * The range of time each day when automated backups are created, if automated backups are enabled.
   *
   * Uses the format `HH:MM-HH:MM`. For example, `04:52-05:22`.
   *
   * @public
   */
  PreferredBackupWindow?: string | undefined;

  /**
   * The number of days for which to retain automated backups.
   *
   * @public
   */
  BackupRetentionPeriod?: number | undefined;

  /**
   * A list of the DB security groups to assign to the DB instance.
   *
   * @public
   */
  DbSecurityGroups?: string[] | undefined;

  /**
   * A list of the DB parameter groups to assign to the DB instance.
   *
   * @public
   */
  DbParameterGroups?: AwsRdsDbParameterGroup[] | undefined;

  /**
   * The Availability Zone where the DB instance will be created.
   *
   * @public
   */
  AvailabilityZone?: string | undefined;

  /**
   * Information about the subnet group that is associated with the DB instance.
   *
   * @public
   */
  DbSubnetGroup?: AwsRdsDbSubnetGroup | undefined;

  /**
   * The weekly time range during which system maintenance can occur, in Universal Coordinated Time (UTC).
   *
   * Uses the format `<day>:HH:MM-<day>:HH:MM`.
   *
   * For the day values, use `mon`|`tue`|`wed`|`thu`|`fri`|`sat`|`sun`.
   *
   * For example, `sun:09:32-sun:10:02`.
   *
   * @public
   */
  PreferredMaintenanceWindow?: string | undefined;

  /**
   * Changes to the DB instance that are currently pending.
   *
   * @public
   */
  PendingModifiedValues?: AwsRdsDbPendingModifiedValues | undefined;

  /**
   * Specifies the latest time to which a database can be restored with point-in-time restore.
   *
   * For more information about the validation and formatting of timestamp fields in Security Hub CSPM, see [Timestamps](https://docs.aws.amazon.com/securityhub/1.0/APIReference/Welcome.html#timestamps).
   *
   * @public
   */
  LatestRestorableTime?: string | undefined;

  /**
   * Indicates whether minor version patches are applied automatically.
   *
   * @public
   */
  AutoMinorVersionUpgrade?: boolean | undefined;

  /**
   * If this DB instance is a read replica, contains the identifier of the source DB instance.
   *
   * @public
   */
  ReadReplicaSourceDBInstanceIdentifier?: string | undefined;

  /**
   * List of identifiers of the read replicas associated with this DB instance.
   *
   * @public
   */
  ReadReplicaDBInstanceIdentifiers?: string[] | undefined;

  /**
   * List of identifiers of Aurora DB clusters to which the RDS DB instance is replicated as a read replica.
   *
   * @public
   */
  ReadReplicaDBClusterIdentifiers?: string[] | undefined;

  /**
   * License model information for this DB instance.
   *
   * @public
   */
  LicenseModel?: string | undefined;

  /**
   * Specifies the provisioned IOPS (I/O operations per second) for this DB instance.
   *
   * @public
   */
  Iops?: number | undefined;

  /**
   * The list of option group memberships for this DB instance.
   *
   * @public
   */
  OptionGroupMemberships?: AwsRdsDbOptionGroupMembership[] | undefined;

  /**
   * The name of the character set that this DB instance is associated with.
   *
   * @public
   */
  CharacterSetName?: string | undefined;

  /**
   * For a DB instance with multi-Availability Zone support, the name of the secondary Availability Zone.
   *
   * @public
   */
  SecondaryAvailabilityZone?: string | undefined;

  /**
   * The status of a read replica. If the instance isn't a read replica, this is empty.
   *
   * @public
   */
  StatusInfos?: AwsRdsDbStatusInfo[] | undefined;

  /**
   * The storage type for the DB instance.
   *
   * @public
   */
  StorageType?: string | undefined;

  /**
   * The Active Directory domain membership records associated with the DB instance.
   *
   * @public
   */
  DomainMemberships?: AwsRdsDbDomainMembership[] | undefined;

  /**
   * Whether to copy resource tags to snapshots of the DB instance.
   *
   * @public
   */
  CopyTagsToSnapshot?: boolean | undefined;

  /**
   * The interval, in seconds, between points when enhanced monitoring metrics are collected for the DB instance.
   *
   * @public
   */
  MonitoringInterval?: number | undefined;

  /**
   * The ARN for the IAM role that permits Amazon RDS to send enhanced monitoring metrics to CloudWatch Logs.
   *
   * @public
   */
  MonitoringRoleArn?: string | undefined;

  /**
   * The order in which to promote an Aurora replica to the primary instance after a failure of the existing primary instance.
   *
   * @public
   */
  PromotionTier?: number | undefined;

  /**
   * The time zone of the DB instance.
   *
   * @public
   */
  Timezone?: string | undefined;

  /**
   * Indicates whether Performance Insights is enabled for the DB instance.
   *
   * @public
   */
  PerformanceInsightsEnabled?: boolean | undefined;

  /**
   * The identifier of the KMS key used to encrypt the Performance Insights data.
   *
   * @public
   */
  PerformanceInsightsKmsKeyId?: string | undefined;

  /**
   * The number of days to retain Performance Insights data.
   *
   * @public
   */
  PerformanceInsightsRetentionPeriod?: number | undefined;

  /**
   * A list of log types that this DB instance is configured to export to CloudWatch Logs.
   *
   * @public
   */
  EnabledCloudWatchLogsExports?: string[] | undefined;

  /**
   * The number of CPU cores and the number of threads per core for the DB instance class of the DB instance.
   *
   * @public
   */
  ProcessorFeatures?: AwsRdsDbProcessorFeature[] | undefined;

  /**
   * Specifies the connection endpoint.
   *
   * @public
   */
  ListenerEndpoint?: AwsRdsDbInstanceEndpoint | undefined;

  /**
   * The upper limit to which Amazon RDS can automatically scale the storage of the DB instance.
   *
   * @public
   */
  MaxAllocatedStorage?: number | undefined;
}

/**
 * EC2 security group information for an RDS DB security group.
 *
 * @public
 */
export interface AwsRdsDbSecurityGroupEc2SecurityGroup {
  /**
   * Specifies the ID for the EC2 security group.
   *
   * @public
   */
  Ec2SecurityGroupId?: string | undefined;

  /**
   * Specifies the name of the EC2 security group.
   *
   * @public
   */
  Ec2SecurityGroupName?: string | undefined;

  /**
   * Provides the Amazon Web Services ID of the owner of the EC2 security group.
   *
   * @public
   */
  Ec2SecurityGroupOwnerId?: string | undefined;

  /**
   * Provides the status of the EC2 security group.
   *
   * @public
   */
  Status?: string | undefined;
}

/**
 * IP range information for an RDS DB security group.
 *
 * @public
 */
export interface AwsRdsDbSecurityGroupIpRange {
  /**
   * Specifies the IP range.
   *
   * @public
   */
  CidrIp?: string | undefined;

  /**
   * Specifies the status of the IP range.
   *
   * @public
   */
  Status?: string | undefined;
}

/**
 * Provides information about an Amazon RDS DB security group.
 *
 * @public
 */
export interface AwsRdsDbSecurityGroupDetails {
  /**
   * The ARN for the DB security group.
   *
   * @public
   */
  DbSecurityGroupArn?: string | undefined;

  /**
   * Provides the description of the DB security group.
   *
   * @public
   */
  DbSecurityGroupDescription?: string | undefined;

  /**
   * Specifies the name of the DB security group.
   *
   * @public
   */
  DbSecurityGroupName?: string | undefined;

  /**
   * Contains a list of EC2 security groups.
   *
   * @public
   */
  Ec2SecurityGroups?: AwsRdsDbSecurityGroupEc2SecurityGroup[] | undefined;

  /**
   * Contains a list of IP ranges.
   *
   * @public
   */
  IpRanges?: AwsRdsDbSecurityGroupIpRange[] | undefined;

  /**
   * Provides the Amazon Web Services ID of the owner of a specific DB security group.
   *
   * @public
   */
  OwnerId?: string | undefined;

  /**
   * Provides VPC ID associated with the DB security group.
   *
   * @public
   */
  VpcId?: string | undefined;
}

/**
 * Provides details about an Amazon RDS DB cluster snapshot.
 *
 * @public
 */
export interface AwsRdsDbSnapshotDetails {
  /**
   * The name or ARN of the DB snapshot that is used to restore the DB instance.
   *
   * @public
   */
  DbSnapshotIdentifier?: string | undefined;

  /**
   * A name for the DB instance.
   *
   * @public
   */
  DbInstanceIdentifier?: string | undefined;

  /**
   * When the snapshot was taken in Coordinated Universal Time (UTC).
   *
   * @public
   */
  SnapshotCreateTime?: string | undefined;

  /**
   * The name of the database engine to use for this DB instance. Valid values are as follows:
   *
   * - `aurora`
   * - `aurora-mysql`
   * - `aurora-postgresql`
   * - `c`
   * - `mariadb`
   * - `mysql`
   * - `oracle-ee`
   * - `oracle-se`
   * - `oracle-se1`
   * - `oracle-se2`
   * - `sqlserver-ee`
   * - `sqlserver-ex`
   * - `sqlserver-se`
   * - `sqlserver-web`
   *
   * @public
   */
  Engine?: string | undefined;

  /**
   * The amount of storage (in gigabytes) to be initially allocated for the database instance.
   *
   * @public
   */
  AllocatedStorage?: number | undefined;

  /**
   * The status of this DB snapshot.
   *
   * @public
   */
  Status?: string | undefined;

  /**
   * The port that the database engine was listening on at the time of the snapshot.
   *
   * @public
   */
  Port?: number | undefined;

  /**
   * Specifies the name of the Availability Zone in which the DB instance was located at the time of the DB snapshot.
   *
   * @public
   */
  AvailabilityZone?: string | undefined;

  /**
   * The VPC ID associated with the DB snapshot.
   *
   * @public
   */
  VpcId?: string | undefined;

  /**
   * Specifies the time in Coordinated Universal Time (UTC) when the DB instance, from which the snapshot was taken, was created.
   *
   * @public
   */
  InstanceCreateTime?: string | undefined;

  /**
   * The master user name for the DB snapshot.
   *
   * @public
   */
  MasterUsername?: string | undefined;

  /**
   * The version of the database engine.
   *
   * @public
   */
  EngineVersion?: string | undefined;

  /**
   * License model information for the restored DB instance.
   *
   * @public
   */
  LicenseModel?: string | undefined;

  /**
   * The type of the DB snapshot.
   *
   * @public
   */
  SnapshotType?: string | undefined;

  /**
   * The provisioned IOPS (I/O operations per second) value of the DB instance at the time of the snapshot.
   *
   * @public
   */
  Iops?: number | undefined;

  /**
   * The option group name for the DB snapshot.
   *
   * @public
   */
  OptionGroupName?: string | undefined;

  /**
   * The percentage of the estimated data that has been transferred.
   *
   * @public
   */
  PercentProgress?: number | undefined;

  /**
   * The Amazon Web Services Region that the DB snapshot was created in or copied from.
   *
   * @public
   */
  SourceRegion?: string | undefined;

  /**
   * The DB snapshot ARN that the DB snapshot was copied from.
   *
   * @public
   */
  SourceDbSnapshotIdentifier?: string | undefined;

  /**
   * The storage type associated with the DB snapshot. Valid values are as follows:
   *
   * - `gp2`
   * - `io1`
   * - `standard`
   *
   * @public
   */
  StorageType?: string | undefined;

  /**
   * The ARN from the key store with which to associate the instance for TDE encryption.
   *
   * @public
   */
  TdeCredentialArn?: string | undefined;

  /**
   * Whether the DB snapshot is encrypted.
   *
   * @public
   */
  Encrypted?: boolean | undefined;

  /**
   * If `Encrypted` is `true`, the KMS key identifier for the encrypted DB snapshot.
   *
   * @public
   */
  KmsKeyId?: string | undefined;

  /**
   * The time zone of the DB snapshot.
   *
   * @public
   */
  Timezone?: string | undefined;

  /**
   * Whether mapping of IAM accounts to database accounts is enabled.
   *
   * @public
   */
  IamDatabaseAuthenticationEnabled?: boolean | undefined;

  /**
   * The number of CPU cores and the number of threads per core for the DB instance class of the DB instance.
   *
   * @public
   */
  ProcessorFeatures?: AwsRdsDbProcessorFeature[] | undefined;

  /**
   * The identifier for the source DB instance.
   *
   * @public
   */
  DbiResourceId?: string | undefined;
}

/**
 * Details about an Amazon RDS event notification subscription. The subscription allows Amazon RDS to post events to an SNS topic.
 *
 * @public
 */
export interface AwsRdsEventSubscriptionDetails {
  /**
   * The identifier of the account that is associated with the event notification subscription.
   *
   * @public
   */
  CustSubscriptionId?: string | undefined;

  /**
   * The identifier of the event notification subscription.
   *
   * @public
   */
  CustomerAwsId?: string | undefined;

  /**
   * Whether the event notification subscription is enabled.
   *
   * @public
   */
  Enabled?: boolean | undefined;

  /**
   * The list of event categories for the event notification subscription.
   *
   * @public
   */
  EventCategoriesList?: string[] | undefined;

  /**
   * The ARN of the event notification subscription.
   *
   * @public
   */
  EventSubscriptionArn?: string | undefined;

  /**
   * The ARN of the SNS topic to post the event notifications to.
   *
   * @public
   */
  SnsTopicArn?: string | undefined;

  /**
   * A list of source identifiers for the event notification subscription.
   *
   * @public
   */
  SourceIdsList?: string[] | undefined;

  /**
   * The source type for the event notification subscription.
   *
   * @public
   */
  SourceType?: string | undefined;

  /**
   * The status of the event notification subscription.
   *
   * Valid values: `creating` | `modifying` | `deleting` | `active` | `no-permission` | `topic-not-exist`
   *
   * @public
   */
  Status?: string | undefined;

  /**
   * The datetime when the event notification subscription was created.
   *
   * For more information about the validation and formatting of timestamp fields in Security Hub CSPM, see [Timestamps](https://docs.aws.amazon.com/securityhub/1.0/APIReference/Welcome.html#timestamps).
   *
   * @public
   */
  SubscriptionCreationTime?: string | undefined;
}

/**
 * A node in an Amazon Redshift cluster.
 *
 * @public
 */
export interface AwsRedshiftClusterClusterNode {
  /**
   * The role of the node. A node might be a leader node or a compute node.
   *
   * @public
   */
  NodeRole?: string | undefined;

  /**
   * The private IP address of the node.
   *
   * @public
   */
  PrivateIpAddress?: string | undefined;

  /**
   * The public IP address of the node.
   *
   * @public
   */
  PublicIpAddress?: string | undefined;
}

/**
 * The status of a parameter in a cluster parameter group for an Amazon Redshift cluster.
 *
 * @public
 */
export interface AwsRedshiftClusterClusterParameterStatus {
  /**
   * The name of the parameter.
   *
   * @public
   */
  ParameterName?: string | undefined;

  /**
   * The status of the parameter. Indicates whether the parameter is in sync with the database, waiting for a cluster reboot, or encountered an error when it was applied.
   *
   * Valid values: `in-sync` | `pending-reboot` | `applying` | `invalid-parameter` | `apply-deferred` | `apply-error` | `unknown-error`
   *
   * @public
   */
  ParameterApplyStatus?: string | undefined;

  /**
   * The error that prevented the parameter from being applied to the database.
   *
   * @public
   */
  ParameterApplyErrorDescription?: string | undefined;
}

/**
 * A cluster parameter group that is associated with an Amazon Redshift cluster.
 *
 * @public
 */
export interface AwsRedshiftClusterClusterParameterGroup {
  /**
   * The list of parameter statuses.
   *
   * @public
   */
  ClusterParameterStatusList?: AwsRedshiftClusterClusterParameterStatus[] | undefined;

  /**
   * The status of updates to the parameters.
   *
   * @public
   */
  ParameterApplyStatus?: string | undefined;

  /**
   * The name of the parameter group.
   *
   * @public
   */
  ParameterGroupName?: string | undefined;
}

/**
 * A security group that is associated with the cluster.
 *
 * @public
 */
export interface AwsRedshiftClusterClusterSecurityGroup {
  /**
   * The name of the cluster security group.
   *
   * @public
   */
  ClusterSecurityGroupName?: string | undefined;

  /**
   * The status of the cluster security group.
   *
   * @public
   */
  Status?: string | undefined;
}

/**
 * You can configure Amazon Redshift to copy snapshots for a cluster to another Amazon Web Services Region. This parameter provides information about a cross-Region snapshot copy.
 *
 * @public
 */
export interface AwsRedshiftClusterClusterSnapshotCopyStatus {
  /**
   * The destination Region that snapshots are automatically copied to when cross-Region snapshot copy is enabled.
   *
   * @public
   */
  DestinationRegion?: string | undefined;

  /**
   * The number of days that manual snapshots are retained in the destination Region after they are copied from a source Region.
   *
   * If the value is `-1`, then the manual snapshot is retained indefinitely.
   *
   * Valid values: Either `-1` or an integer between 1 and 3,653
   *
   * @public
   */
  ManualSnapshotRetentionPeriod?: number | undefined;

  /**
   * The number of days to retain automated snapshots in the destination Region after they are copied from a source Region.
   *
   * @public
   */
  RetentionPeriod?: number | undefined;

  /**
   * The name of the snapshot copy grant.
   *
   * @public
   */
  SnapshotCopyGrantName?: string | undefined;
}

/**
 * A time windows during which maintenance was deferred for an Amazon Redshift cluster.
 *
 * @public
 */
export interface AwsRedshiftClusterDeferredMaintenanceWindow {
  /**
   * The end of the time window for which maintenance was deferred.
   *
   * For more information about the validation and formatting of timestamp fields in Security Hub CSPM, see [Timestamps](https://docs.aws.amazon.com/securityhub/1.0/APIReference/Welcome.html#timestamps).
   *
   * @public
   */
  DeferMaintenanceEndTime?: string | undefined;

  /**
   * The identifier of the maintenance window.
   *
   * @public
   */
  DeferMaintenanceIdentifier?: string | undefined;

  /**
   * The start of the time window for which maintenance was deferred.
   *
   * For more information about the validation and formatting of timestamp fields in Security Hub CSPM, see [Timestamps](https://docs.aws.amazon.com/securityhub/1.0/APIReference/Welcome.html#timestamps).
   *
   * @public
   */
  DeferMaintenanceStartTime?: string | undefined;
}

/**
 * The status of the elastic IP (EIP) address for an Amazon Redshift cluster.
 *
 * @public
 */
export interface AwsRedshiftClusterElasticIpStatus {
  /**
   * The elastic IP address for the cluster.
   *
   * @public
   */
  ElasticIp?: string | undefined;

  /**
   * The status of the elastic IP address.
   *
   * @public
   */
  Status?: string | undefined;
}

/**
 * The connection endpoint for an Amazon Redshift cluster.
 *
 * @public
 */
export interface AwsRedshiftClusterEndpoint {
  /**
   * The DNS address of the cluster.
   *
   * @public
   */
  Address?: string | undefined;

  /**
   * The port that the database engine listens on.
   *
   * @public
   */
  Port?: number | undefined;
}

/**
 * Information about whether an Amazon Redshift cluster finished applying any hardware changes to security module (HSM) settings that were specified in a modify cluster command.
 *
 * @public
 */
export interface AwsRedshiftClusterHsmStatus {
  /**
   * The name of the HSM client certificate that the Amazon Redshift cluster uses to retrieve the data encryption keys that are stored in an HSM.
   *
   * @public
   */
  HsmClientCertificateIdentifier?: string | undefined;

  /**
   * The name of the HSM configuration that contains the information that the Amazon Redshift cluster can use to retrieve and store keys in an HSM.
   *
   * @public
   */
  HsmConfigurationIdentifier?: string | undefined;

  /**
   * Indicates whether the Amazon Redshift cluster has finished applying any HSM settings changes specified in a modify cluster command.
   *
   * Type: String
   *
   * Valid values: `active` | `applying`
   *
   * @public
   */
  Status?: string | undefined;
}

/**
 * An IAM role that the cluster can use to access other Amazon Web Services services.
 *
 * @public
 */
export interface AwsRedshiftClusterIamRole {
  /**
   * The status of the IAM role's association with the cluster.
   *
   * Valid values: `in-sync` | `adding` | `removing`
   *
   * @public
   */
  ApplyStatus?: string | undefined;

  /**
   * The ARN of the IAM role.
   *
   * @public
   */
  IamRoleArn?: string | undefined;
}

/**
 * Provides information about the logging status of the cluster.
 *
 * @public
 */
export interface AwsRedshiftClusterLoggingStatus {
  /**
   * The name of the S3 bucket where the log files are stored.
   *
   * @public
   */
  BucketName?: string | undefined;

  /**
   * The message indicating that the logs failed to be delivered.
   *
   * @public
   */
  LastFailureMessage?: string | undefined;

  /**
   * The last time when logs failed to be delivered.
   *
   * For more information about the validation and formatting of timestamp fields in Security Hub CSPM, see [Timestamps](https://docs.aws.amazon.com/securityhub/1.0/APIReference/Welcome.html#timestamps).
   *
   * @public
   */
  LastFailureTime?: string | undefined;

  /**
   * The last time that logs were delivered successfully.
   *
   * For more information about the validation and formatting of timestamp fields in Security Hub CSPM, see [Timestamps](https://docs.aws.amazon.com/securityhub/1.0/APIReference/Welcome.html#timestamps).
   *
   * @public
   */
  LastSuccessfulDeliveryTime?: string | undefined;

  /**
   * Indicates whether logging is enabled.
   *
   * @public
   */
  LoggingEnabled?: boolean | undefined;

  /**
   * Provides the prefix applied to the log file names.
   *
   * @public
   */
  S3KeyPrefix?: string | undefined;
}

/**
 * Changes to the Amazon Redshift cluster that are currently pending.
 *
 * @public
 */
export interface AwsRedshiftClusterPendingModifiedValues {
  /**
   * The pending or in-progress change to the automated snapshot retention period.
   *
   * @public
   */
  AutomatedSnapshotRetentionPeriod?: number | undefined;

  /**
   * The pending or in-progress change to the identifier for the cluster.
   *
   * @public
   */
  ClusterIdentifier?: string | undefined;

  /**
   * The pending or in-progress change to the cluster type.
   *
   * @public
   */
  ClusterType?: string | undefined;

  /**
   * The pending or in-progress change to the service version.
   *
   * @public
   */
  ClusterVersion?: string | undefined;

  /**
   * The encryption type for a cluster.
   *
   * @public
   */
  EncryptionType?: string | undefined;

  /**
   * Indicates whether to create the cluster with enhanced VPC routing enabled.
   *
   * @public
   */
  EnhancedVpcRouting?: boolean | undefined;

  /**
   * The name of the maintenance track that the cluster changes to during the next maintenance window.
   *
   * @public
   */
  MaintenanceTrackName?: string | undefined;

  /**
   * The pending or in-progress change to the master user password for the cluster.
   *
   * @public
   */
  MasterUserPassword?: string | undefined;

  /**
   * The pending or in-progress change to the cluster's node type.
   *
   * @public
   */
  NodeType?: string | undefined;

  /**
   * The pending or in-progress change to the number of nodes in the cluster.
   *
   * @public
   */
  NumberOfNodes?: number | undefined;

  /**
   * The pending or in-progress change to whether the cluster can be connected to from the public network.
   *
   * @public
   */
  PubliclyAccessible?: boolean | undefined;
}

/**
 * Information about the resize operation for the cluster.
 *
 * @public
 */
export interface AwsRedshiftClusterResizeInfo {
  /**
   * Indicates whether the resize operation can be canceled.
   *
   * @public
   */
  AllowCancelResize?: boolean | undefined;

  /**
   * The type of resize operation.
   *
   * Valid values: `ClassicResize`
   *
   * @public
   */
  ResizeType?: string | undefined;
}

/**
 * Information about the status of a cluster restore action. It only applies if the cluster was created by restoring a snapshot.
 *
 * @public
 */
export interface AwsRedshiftClusterRestoreStatus {
  /**
   * The number of megabytes per second being transferred from the backup storage. Returns the average rate for a completed backup.
   *
   * This field is only updated when you restore to DC2 and DS2 node types.
   *
   * @public
   */
  CurrentRestoreRateInMegaBytesPerSecond?: number | undefined;

  /**
   * The amount of time an in-progress restore has been running, or the amount of time it took a completed restore to finish.
   *
   * This field is only updated when you restore to DC2 and DS2 node types.
   *
   * @public
   */
  ElapsedTimeInSeconds?: number | undefined;

  /**
   * The estimate of the time remaining before the restore is complete. Returns 0 for a completed restore.
   *
   * This field is only updated when you restore to DC2 and DS2 node types.
   *
   * @public
   */
  EstimatedTimeToCompletionInSeconds?: number | undefined;

  /**
   * The number of megabytes that were transferred from snapshot storage.
   *
   * This field is only updated when you restore to DC2 and DS2 node types.
   *
   * @public
   */
  ProgressInMegaBytes?: number | undefined;

  /**
   * The size of the set of snapshot data that was used to restore the cluster.
   *
   * This field is only updated when you restore to DC2 and DS2 node types.
   *
   * @public
   */
  SnapshotSizeInMegaBytes?: number | undefined;

  /**
   * The status of the restore action.
   *
   * Valid values: `starting` | `restoring` | `completed` | `failed`
   *
   * @public
   */
  Status?: string | undefined;
}

/**
 * A VPC security group that the cluster belongs to, if the cluster is in a VPC.
 *
 * @public
 */
export interface AwsRedshiftClusterVpcSecurityGroup {
  /**
   * The status of the VPC security group.
   *
   * @public
   */
  Status?: string | undefined;

  /**
   * The identifier of the VPC security group.
   *
   * @public
   */
  VpcSecurityGroupId?: string | undefined;
}

/**
 * Details about an Amazon Redshift cluster.
 *
 * @public
 */
export interface AwsRedshiftClusterDetails {
  /**
   * Indicates whether major version upgrades are applied automatically to the cluster during the maintenance window.
   *
   * @public
   */
  AllowVersionUpgrade?: boolean | undefined;

  /**
   * The number of days that automatic cluster snapshots are retained.
   *
   * @public
   */
  AutomatedSnapshotRetentionPeriod?: number | undefined;

  /**
   * The name of the Availability Zone in which the cluster is located.
   *
   * @public
   */
  AvailabilityZone?: string | undefined;

  /**
   * The availability status of the cluster for queries. Possible values are the following:
   *
   * - `Available` - The cluster is available for queries.
   * - `Unavailable` - The cluster is not available for queries.
   * - `Maintenance` - The cluster is intermittently available for queries due to maintenance activities.
   * - `Modifying` -The cluster is intermittently available for queries due to changes that modify the cluster.
   * - `Failed` - The cluster failed and is not available for queries.
   *
   * @public
   */
  ClusterAvailabilityStatus?: string | undefined;

  /**
   * Indicates when the cluster was created.
   *
   * For more information about the validation and formatting of timestamp fields in Security Hub CSPM, see [Timestamps](https://docs.aws.amazon.com/securityhub/1.0/APIReference/Welcome.html#timestamps).
   *
   * @public
   */
  ClusterCreateTime?: string | undefined;

  /**
   * The unique identifier of the cluster.
   *
   * @public
   */
  ClusterIdentifier?: string | undefined;

  /**
   * The nodes in the cluster.
   *
   * @public
   */
  ClusterNodes?: AwsRedshiftClusterClusterNode[] | undefined;

  /**
   * The list of cluster parameter groups that are associated with this cluster.
   *
   * @public
   */
  ClusterParameterGroups?: AwsRedshiftClusterClusterParameterGroup[] | undefined;

  /**
   * The public key for the cluster.
   *
   * @public
   */
  ClusterPublicKey?: string | undefined;

  /**
   * The specific revision number of the database in the cluster.
   *
   * @public
   */
  ClusterRevisionNumber?: string | undefined;

  /**
   * A list of cluster security groups that are associated with the cluster.
   *
   * @public
   */
  ClusterSecurityGroups?: AwsRedshiftClusterClusterSecurityGroup[] | undefined;

  /**
   * Information about the destination Region and retention period for the cross-Region snapshot copy.
   *
   * @public
   */
  ClusterSnapshotCopyStatus?: AwsRedshiftClusterClusterSnapshotCopyStatus | undefined;

  /**
   * The current status of the cluster.
   *
   * Valid values: `available` | `available, prep-for-resize` | `available, resize-cleanup` |`cancelling-resize` | `creating` | `deleting` | `final-snapshot` | `hardware-failure` | `incompatible-hsm` |`incompatible-network` | `incompatible-parameters` | `incompatible-restore` | `modifying` | `paused` | `rebooting` | `renaming` | `resizing` | `rotating-keys` | `storage-full` | `updating-hsm`
   *
   * @public
   */
  ClusterStatus?: string | undefined;

  /**
   * The name of the subnet group that is associated with the cluster. This parameter is valid only when the cluster is in a VPC.
   *
   * @public
   */
  ClusterSubnetGroupName?: string | undefined;

  /**
   * The version ID of the Amazon Redshift engine that runs on the cluster.
   *
   * @public
   */
  ClusterVersion?: string | undefined;

  /**
   * The name of the initial database that was created when the cluster was created.
   *
   * The same name is returned for the life of the cluster.
   *
   * If an initial database is not specified, a database named `devdev` is created by default.
   *
   * @public
   */
  DBName?: string | undefined;

  /**
   * List of time windows during which maintenance was deferred.
   *
   * @public
   */
  DeferredMaintenanceWindows?: AwsRedshiftClusterDeferredMaintenanceWindow[] | undefined;

  /**
   * Information about the status of the Elastic IP (EIP) address.
   *
   * @public
   */
  ElasticIpStatus?: AwsRedshiftClusterElasticIpStatus | undefined;

  /**
   * The number of nodes that you can use the elastic resize method to resize the cluster to.
   *
   * @public
   */
  ElasticResizeNumberOfNodeOptions?: string | undefined;

  /**
   * Indicates whether the data in the cluster is encrypted at rest.
   *
   * @public
   */
  Encrypted?: boolean | undefined;

  /**
   * The connection endpoint.
   *
   * @public
   */
  Endpoint?: AwsRedshiftClusterEndpoint | undefined;

  /**
   * Indicates whether to create the cluster with enhanced VPC routing enabled.
   *
   * @public
   */
  EnhancedVpcRouting?: boolean | undefined;

  /**
   * Indicates when the next snapshot is expected to be taken. The cluster must have a valid snapshot schedule and have backups enabled.
   *
   * For more information about the validation and formatting of timestamp fields in Security Hub CSPM, see [Timestamps](https://docs.aws.amazon.com/securityhub/1.0/APIReference/Welcome.html#timestamps).
   *
   * @public
   */
  ExpectedNextSnapshotScheduleTime?: string | undefined;

  /**
   * The status of the next expected snapshot.
   *
   * Valid values: `OnTrack` | `Pending`
   *
   * @public
   */
  ExpectedNextSnapshotScheduleTimeStatus?: string | undefined;

  /**
   * Information about whether the Amazon Redshift cluster finished applying any changes to hardware security module (HSM) settings that were specified in a modify cluster command.
   *
   * @public
   */
  HsmStatus?: AwsRedshiftClusterHsmStatus | undefined;

  /**
   * A list of IAM roles that the cluster can use to access other Amazon Web Services services.
   *
   * @public
   */
  IamRoles?: AwsRedshiftClusterIamRole[] | undefined;

  /**
   * The identifier of the KMS encryption key that is used to encrypt data in the cluster.
   *
   * @public
   */
  KmsKeyId?: string | undefined;

  /**
   * The name of the maintenance track for the cluster.
   *
   * @public
   */
  MaintenanceTrackName?: string | undefined;

  /**
   * The default number of days to retain a manual snapshot.
   *
   * If the value is `-1`, the snapshot is retained indefinitely.
   *
   * This setting doesn't change the retention period of existing snapshots.
   *
   * Valid values: Either `-1` or an integer between 1 and 3,653
   *
   * @public
   */
  ManualSnapshotRetentionPeriod?: number | undefined;

  /**
   * The master user name for the cluster. This name is used to connect to the database that is specified in as the value of `DBName`.
   *
   * @public
   */
  MasterUsername?: string | undefined;

  /**
   * Indicates the start of the next maintenance window.
   *
   * For more information about the validation and formatting of timestamp fields in Security Hub CSPM, see [Timestamps](https://docs.aws.amazon.com/securityhub/1.0/APIReference/Welcome.html#timestamps).
   *
   * @public
   */
  NextMaintenanceWindowStartTime?: string | undefined;

  /**
   * The node type for the nodes in the cluster.
   *
   * @public
   */
  NodeType?: string | undefined;

  /**
   * The number of compute nodes in the cluster.
   *
   * @public
   */
  NumberOfNodes?: number | undefined;

  /**
   * A list of cluster operations that are waiting to start.
   *
   * @public
   */
  PendingActions?: string[] | undefined;

  /**
   * A list of changes to the cluster that are currently pending.
   *
   * @public
   */
  PendingModifiedValues?: AwsRedshiftClusterPendingModifiedValues | undefined;

  /**
   * The weekly time range, in Universal Coordinated Time (UTC), during which system maintenance can occur.
   *
   * Format: `<day>:HH:MM-<day>:HH:MM`
   *
   * For the day values, use `mon` | `tue` | `wed` | `thu` | `fri` | `sat` | `sun`
   *
   * For example, `sun:09:32-sun:10:02`
   *
   * @public
   */
  PreferredMaintenanceWindow?: string | undefined;

  /**
   * Whether the cluster can be accessed from a public network.
   *
   * @public
   */
  PubliclyAccessible?: boolean | undefined;

  /**
   * Information about the resize operation for the cluster.
   *
   * @public
   */
  ResizeInfo?: AwsRedshiftClusterResizeInfo | undefined;

  /**
   * Information about the status of a cluster restore action. Only applies to a cluster that was created by restoring a snapshot.
   *
   * @public
   */
  RestoreStatus?: AwsRedshiftClusterRestoreStatus | undefined;

  /**
   * A unique identifier for the cluster snapshot schedule.
   *
   * @public
   */
  SnapshotScheduleIdentifier?: string | undefined;

  /**
   * The current state of the cluster snapshot schedule.
   *
   * Valid values: `MODIFYING` | `ACTIVE` | `FAILED`
   *
   * @public
   */
  SnapshotScheduleState?: string | undefined;

  /**
   * The identifier of the VPC that the cluster is in, if the cluster is in a VPC.
   *
   * @public
   */
  VpcId?: string | undefined;

  /**
   * The list of VPC security groups that the cluster belongs to, if the cluster is in a VPC.
   *
   * @public
   */
  VpcSecurityGroups?: AwsRedshiftClusterVpcSecurityGroup[] | undefined;

  /**
   * Information about the logging status of the cluster.
   *
   * @public
   */
  LoggingStatus?: AwsRedshiftClusterLoggingStatus | undefined;
}

/**
 * An object that contains an optional comment about your Amazon Route 53 hosted zone.
 *
 * @public
 */
export interface AwsRoute53HostedZoneConfigDetails {
  /**
   * Any comments that you include about the hosted zone.
   *
   * @public
   */
  Comment?: string | undefined;
}

/**
 * An object that contains information about an Amazon Route 53 hosted zone.
 *
 * @public
 */
export interface AwsRoute53HostedZoneObjectDetails {
  /**
   * The ID that Route 53 assigns to the hosted zone when you create it.
   *
   * @public
   */
  Id?: string | undefined;

  /**
   * The name of the domain. For public hosted zones, this is the name that you have registered with your DNS registrar.
   *
   * @public
   */
  Name?: string | undefined;

  /**
   * An object that includes the `Comment` element.
   *
   * @public
   */
  Config?: AwsRoute53HostedZoneConfigDetails | undefined;
}

/**
 * The Amazon Resource Name (ARN) and other details of the Amazon CloudWatch Logs log group that Amazon Route 53 is publishing logs to.
 *
 * @public
 */
export interface CloudWatchLogsLogGroupArnConfigDetails {
  /**
   * The ARN of the CloudWatch Logs log group that Route 53 is publishing logs to.
   *
   * @public
   */
  CloudWatchLogsLogGroupArn?: string | undefined;

  /**
   * The ID of the hosted zone that CloudWatch Logs is logging queries for.
   *
   * @public
   */
  HostedZoneId?: string | undefined;

  /**
   * The ID for a DNS query logging configuration.
   *
   * @public
   */
  Id?: string | undefined;
}

/**
 * Provides details about a specified Amazon Route 53 configuration for DNS query logging.
 *
 * @public
 */
export interface AwsRoute53QueryLoggingConfigDetails {
  /**
   * The Amazon Resource Name (ARN) of the Amazon CloudWatch Logs log group that Route 53 is publishing logs to.
   *
   * @public
   */
  CloudWatchLogsLogGroupArn?: CloudWatchLogsLogGroupArnConfigDetails | undefined;
}

/**
 * For private hosted zones, this is a complex type that contains information about an Amazon VPC.
 *
 * @public
 */
export interface AwsRoute53HostedZoneVpcDetails {
  /**
   * The identifier of an Amazon VPC.
   *
   * @public
   */
  Id?: string | undefined;

  /**
   * The Amazon Web Services Region that an Amazon VPC was created in.
   *
   * @public
   */
  Region?: string | undefined;
}

/**
 * Provides details about a specified Amazon Route 53 hosted zone, including the four name servers assigned to the hosted zone. A hosted zone represents a collection of records that can be managed together, belonging to a single parent domain name.
 *
 * @public
 */
export interface AwsRoute53HostedZoneDetails {
  /**
   * An object that contains information about the specified hosted zone.
   *
   * @public
   */
  HostedZone?: AwsRoute53HostedZoneObjectDetails | undefined;

  /**
   * An object that contains information about the Amazon Virtual Private Clouds (Amazon VPCs) that are associated with the specified hosted zone.
   *
   * @public
   */
  Vpcs?: AwsRoute53HostedZoneVpcDetails[] | undefined;

  /**
   * An object that contains a list of the authoritative name servers for a hosted zone or for a reusable delegation set.
   *
   * @public
   */
  NameServers?: string[] | undefined;

  /**
   * An array that contains one `QueryLoggingConfig` element for each DNS query logging configuration that is associated with the current Amazon Web Services account.
   *
   * @public
   */
  QueryLoggingConfig?: AwsRoute53QueryLoggingConfigDetails | undefined;
}

/**
 * provides information about the Amazon S3 Public Access Block configuration for accounts.
 *
 * @public
 */
export interface AwsS3AccountPublicAccessBlockDetails {
  /**
   * Indicates whether to reject calls to update an S3 bucket if the calls include a public access control list (ACL).
   *
   * @public
   */
  BlockPublicAcls?: boolean | undefined;

  /**
   * Indicates whether to reject calls to update the access policy for an S3 bucket or access point if the policy allows public access.
   *
   * @public
   */
  BlockPublicPolicy?: boolean | undefined;

  /**
   * Indicates whether Amazon S3 ignores public ACLs that are associated with an S3 bucket.
   *
   * @public
   */
  IgnorePublicAcls?: boolean | undefined;

  /**
   * Indicates whether to restrict access to an access point or S3 bucket that has a public policy to only Amazon Web Services service principals and authorized users within the S3 bucket owner's account.
   *
   * @public
   */
  RestrictPublicBuckets?: boolean | undefined;
}

/**
 * The virtual private cloud (VPC) configuration for an Amazon S3 access point.
 *
 * @public
 */
export interface AwsS3AccessPointVpcConfigurationDetails {
  /**
   * If this field is specified, this access point will only allow connections from the specified VPC ID.
   *
   * @public
   */
  VpcId?: string | undefined;
}

/**
 * Returns configuration information about the specified Amazon S3 access point. S3 access points are named network endpoints that are attached to buckets that you can use to perform S3 object operations.
 *
 * @public
 */
export interface AwsS3AccessPointDetails {
  /**
   * The Amazon Resource Name (ARN) of the access point.
   *
   * @public
   */
  AccessPointArn?: string | undefined;

  /**
   * The name or alias of the access point.
   *
   * @public
   */
  Alias?: string | undefined;

  /**
   * The name of the S3 bucket associated with the specified access point.
   *
   * @public
   */
  Bucket?: string | undefined;

  /**
   * The Amazon Web Services account ID associated with the S3 bucket associated with this access point.
   *
   * @public
   */
  BucketAccountId?: string | undefined;

  /**
   * The name of the specified access point.
   *
   * @public
   */
  Name?: string | undefined;

  /**
   * Indicates whether this access point allows access from the public internet.
   *
   * @public
   */
  NetworkOrigin?: string | undefined;

  /**
   * provides information about the Amazon S3 Public Access Block configuration for accounts.
   *
   * @public
   */
  PublicAccessBlockConfiguration?: AwsS3AccountPublicAccessBlockDetails | undefined;

  /**
   * Contains the virtual private cloud (VPC) configuration for the specified access point.
   *
   * @public
   */
  VpcConfiguration?: AwsS3AccessPointVpcConfigurationDetails | undefined;
}

/**
 * Information about what Amazon S3 does when a multipart upload is incomplete.
 *
 * @public
 */
export interface AwsS3BucketBucketLifecycleConfigurationRulesAbortIncompleteMultipartUploadDetails {
  /**
   * The number of days after which Amazon S3 cancels an incomplete multipart upload.
   *
   * @public
   */
  DaysAfterInitiation?: number | undefined;
}

/**
 * A tag that is assigned to matching objects.
 *
 * @public
 */
export interface AwsS3BucketBucketLifecycleConfigurationRulesFilterPredicateOperandsTagDetails {
  /**
   * The tag key.
   *
   * @public
   */
  Key?: string | undefined;

  /**
   * The tag value.
   *
   * @public
   */
  Value?: string | undefined;
}

/**
 * A value to use for the filter.
 *
 * @public
 */
export interface AwsS3BucketBucketLifecycleConfigurationRulesFilterPredicateOperandsDetails {
  /**
   * Prefix text for matching objects.
   *
   * @public
   */
  Prefix?: string | undefined;

  /**
   * A tag that is assigned to matching objects.
   *
   * @public
   */
  Tag?: AwsS3BucketBucketLifecycleConfigurationRulesFilterPredicateOperandsTagDetails | undefined;

  /**
   * The type of filter value. Valid values are `LifecyclePrefixPredicate` or `LifecycleTagPredicate`.
   *
   * @public
   */
  Type?: string | undefined;
}

/**
 * A tag filter.
 *
 * @public
 */
export interface AwsS3BucketBucketLifecycleConfigurationRulesFilterPredicateTagDetails {
  /**
   * The tag key.
   *
   * @public
   */
  Key?: string | undefined;

  /**
   * The tag value
   *
   * @public
   */
  Value?: string | undefined;
}

/**
 * The configuration for the filter.
 *
 * @public
 */
export interface AwsS3BucketBucketLifecycleConfigurationRulesFilterPredicateDetails {
  /**
   * The values to use for the filter.
   *
   * @public
   */
  Operands?: AwsS3BucketBucketLifecycleConfigurationRulesFilterPredicateOperandsDetails[] | undefined;

  /**
   * A prefix filter.
   *
   * @public
   */
  Prefix?: string | undefined;

  /**
   * A tag filter.
   *
   * @public
   */
  Tag?: AwsS3BucketBucketLifecycleConfigurationRulesFilterPredicateTagDetails | undefined;

  /**
   * Whether to use `AND` or `OR` to join the operands. Valid values are `LifecycleAndOperator` or `LifecycleOrOperator`.
   *
   * @public
   */
  Type?: string | undefined;
}

/**
 * Identifies the objects that a rule applies to.
 *
 * @public
 */
export interface AwsS3BucketBucketLifecycleConfigurationRulesFilterDetails {
  /**
   * The configuration for the filter.
   *
   * @public
   */
  Predicate?: AwsS3BucketBucketLifecycleConfigurationRulesFilterPredicateDetails | undefined;
}

/**
 * A transition rule that describes when noncurrent objects transition to a specified storage class.
 *
 * @public
 */
export interface AwsS3BucketBucketLifecycleConfigurationRulesNoncurrentVersionTransitionsDetails {
  /**
   * The number of days that an object is noncurrent before Amazon S3 can perform the associated action.
   *
   * @public
   */
  Days?: number | undefined;

  /**
   * The class of storage to change the object to after the object is noncurrent for the specified number of days.
   *
   * @public
   */
  StorageClass?: string | undefined;
}

/**
 * A rule for when objects transition to specific storage classes.
 *
 * @public
 */
export interface AwsS3BucketBucketLifecycleConfigurationRulesTransitionsDetails {
  /**
   * A date on which to transition objects to the specified storage class. If you provide `Date`, you cannot provide `Days`.
   *
   * For more information about the validation and formatting of timestamp fields in Security Hub CSPM, see [Timestamps](https://docs.aws.amazon.com/securityhub/1.0/APIReference/Welcome.html#timestamps).
   *
   * @public
   */
  Date?: string | undefined;

  /**
   * The number of days after which to transition the object to the specified storage class. If you provide `Days`, you cannot provide `Date`.
   *
   * @public
   */
  Days?: number | undefined;

  /**
   * The storage class to transition the object to. Valid values are as follows:
   *
   * - `DEEP_ARCHIVE`
   * - `GLACIER`
   * - `INTELLIGENT_TIERING`
   * - `ONEZONE_IA`
   * - `STANDARD_IA`
   *
   * @public
   */
  StorageClass?: string | undefined;
}

/**
 * Configuration for a lifecycle rule.
 *
 * @public
 */
export interface AwsS3BucketBucketLifecycleConfigurationRulesDetails {
  /**
   * How Amazon S3 responds when a multipart upload is incomplete. Specifically, provides a number of days before Amazon S3 cancels the entire upload.
   *
   * @public
   */
  AbortIncompleteMultipartUpload?: AwsS3BucketBucketLifecycleConfigurationRulesAbortIncompleteMultipartUploadDetails | undefined;

  /**
   * The date when objects are moved or deleted.
   *
   * For more information about the validation and formatting of timestamp fields in Security Hub CSPM, see [Timestamps](https://docs.aws.amazon.com/securityhub/1.0/APIReference/Welcome.html#timestamps).
   *
   * @public
   */
  ExpirationDate?: string | undefined;

  /**
   * The length in days of the lifetime for objects that are subject to the rule.
   *
   * @public
   */
  ExpirationInDays?: number | undefined;

  /**
   * Whether Amazon S3 removes a delete marker that has no noncurrent versions. If set to `true`, the delete marker is expired. If set to `false`, the policy takes no action.
   *
   * If you provide `ExpiredObjectDeleteMarker`, you cannot provide `ExpirationInDays` or `ExpirationDate`.
   *
   * @public
   */
  ExpiredObjectDeleteMarker?: boolean | undefined;

  /**
   * Identifies the objects that a rule applies to.
   *
   * @public
   */
  Filter?: AwsS3BucketBucketLifecycleConfigurationRulesFilterDetails | undefined;

  /**
   * The unique identifier of the rule.
   *
   * @public
   */
  ID?: string | undefined;

  /**
   * The number of days that an object is noncurrent before Amazon S3 can perform the associated action.
   *
   * @public
   */
  NoncurrentVersionExpirationInDays?: number | undefined;

  /**
   * Transition rules that describe when noncurrent objects transition to a specified storage class.
   *
   * @public
   */
  NoncurrentVersionTransitions?: AwsS3BucketBucketLifecycleConfigurationRulesNoncurrentVersionTransitionsDetails[] | undefined;

  /**
   * A prefix that identifies one or more objects that the rule applies to.
   *
   * @public
   */
  Prefix?: string | undefined;

  /**
   * The current status of the rule. Indicates whether the rule is currently being applied.
   *
   * @public
   */
  Status?: string | undefined;

  /**
   * Transition rules that indicate when objects transition to a specified storage class.
   *
   * @public
   */
  Transitions?: AwsS3BucketBucketLifecycleConfigurationRulesTransitionsDetails[] | undefined;
}

/**
 * The lifecycle configuration for the objects in the S3 bucket.
 *
 * @public
 */
export interface AwsS3BucketBucketLifecycleConfigurationDetails {
  /**
   * The lifecycle rules.
   *
   * @public
   */
  Rules?: AwsS3BucketBucketLifecycleConfigurationRulesDetails[] | undefined;
}

/**
 * Describes the versioning state of an S3 bucket.
 *
 * @public
 */
export interface AwsS3BucketBucketVersioningConfiguration {
  /**
   * Specifies whether MFA delete is currently enabled in the S3 bucket versioning configuration. If the S3 bucket was never configured with MFA delete, then this attribute is not included.
   *
   * @public
   */
  IsMfaDeleteEnabled?: boolean | undefined;

  /**
   * The versioning status of the S3 bucket. Valid values are `Enabled` or `Suspended`.
   *
   * @public
   */
  Status?: string | undefined;
}

/**
 * Information about logging for the S3 bucket
 *
 * @public
 */
export interface AwsS3BucketLoggingConfiguration {
  /**
   * The name of the S3 bucket where log files for the S3 bucket are stored.
   *
   * @public
   */
  DestinationBucketName?: string | undefined;

  /**
   * The prefix added to log files for the S3 bucket.
   *
   * @public
   */
  LogFilePrefix?: string | undefined;
}

/**
 * Details for a filter rule.
 *
 * @public
 */
export interface AwsS3BucketNotificationConfigurationS3KeyFilterRule {
  /**
   * Indicates whether the filter is based on the prefix or suffix of the Amazon S3 key.
   *
   * @public
   */
  Name?: AwsS3BucketNotificationConfigurationS3KeyFilterRuleName | undefined;

  /**
   * The filter value.
   *
   * @public
   */
  Value?: string | undefined;
}

/**
 * Details for an Amazon S3 filter.
 *
 * @public
 */
export interface AwsS3BucketNotificationConfigurationS3KeyFilter {
  /**
   * The filter rules for the filter.
   *
   * @public
   */
  FilterRules?: AwsS3BucketNotificationConfigurationS3KeyFilterRule[] | undefined;
}

/**
 * Filtering information for the notifications. The filtering is based on Amazon S3 key names.
 *
 * @public
 */
export interface AwsS3BucketNotificationConfigurationFilter {
  /**
   * Details for an Amazon S3 filter.
   *
   * @public
   */
  S3KeyFilter?: AwsS3BucketNotificationConfigurationS3KeyFilter | undefined;
}

/**
 * Details for an S3 bucket notification configuration.
 *
 * @public
 */
export interface AwsS3BucketNotificationConfigurationDetail {
  /**
   * The list of events that trigger a notification.
   *
   * @public
   */
  Events?: string[] | undefined;

  /**
   * The filters that determine which S3 buckets generate notifications.
   *
   * @public
   */
  Filter?: AwsS3BucketNotificationConfigurationFilter | undefined;

  /**
   * The ARN of the Lambda function, Amazon SQS queue, or Amazon SNS topic that generates the notification.
   *
   * @public
   */
  Destination?: string | undefined;

  /**
   * Indicates the type of notification. Notifications can be generated using Lambda functions, Amazon SQS queues, or Amazon SNS topics, with corresponding valid values as follows:
   *
   * - `LambdaConfiguration`
   * - `QueueConfiguration`
   * - `TopicConfiguration`
   *
   * @public
   */
  Type?: string | undefined;
}

/**
 * The notification configuration for the S3 bucket.
 *
 * @public
 */
export interface AwsS3BucketNotificationConfiguration {
  /**
   * Configurations for S3 bucket notifications.
   *
   * @public
   */
  Configurations?: AwsS3BucketNotificationConfigurationDetail[] | undefined;
}

/**
 * The redirect behavior for requests to the website.
 *
 * @public
 */
export interface AwsS3BucketWebsiteConfigurationRedirectTo {
  /**
   * The name of the host to redirect requests to.
   *
   * @public
   */
  Hostname?: string | undefined;

  /**
   * The protocol to use when redirecting requests. By default, this field uses the same protocol as the original request. Valid values are `http` or `https`.
   *
   * @public
   */
  Protocol?: string | undefined;
}

/**
 * The condition that must be met in order to apply the routing rule.
 *
 * @public
 */
export interface AwsS3BucketWebsiteConfigurationRoutingRuleCondition {
  /**
   * Indicates to redirect the request if the HTTP error code matches this value.
   *
   * @public
   */
  HttpErrorCodeReturnedEquals?: string | undefined;

  /**
   * Indicates to redirect the request if the key prefix matches this value.
   *
   * @public
   */
  KeyPrefixEquals?: string | undefined;
}

/**
 * The rules to redirect the request if the condition in `Condition` is met.
 *
 * @public
 */
export interface AwsS3BucketWebsiteConfigurationRoutingRuleRedirect {
  /**
   * The host name to use in the redirect request.
   *
   * @public
   */
  Hostname?: string | undefined;

  /**
   * The HTTP redirect code to use in the response.
   *
   * @public
   */
  HttpRedirectCode?: string | undefined;

  /**
   * The protocol to use to redirect the request. By default, uses the protocol from the original request.
   *
   * @public
   */
  Protocol?: string | undefined;

  /**
   * The object key prefix to use in the redirect request.
   *
   * Cannot be provided if `ReplaceKeyWith` is present.
   *
   * @public
   */
  ReplaceKeyPrefixWith?: string | undefined;

  /**
   * The specific object key to use in the redirect request.
   *
   * Cannot be provided if `ReplaceKeyPrefixWith` is present.
   *
   * @public
   */
  ReplaceKeyWith?: string | undefined;
}

/**
 * A rule for redirecting requests to the website.
 *
 * @public
 */
export interface AwsS3BucketWebsiteConfigurationRoutingRule {
  /**
   * Provides the condition that must be met in order to apply the routing rule.
   *
   * @public
   */
  Condition?: AwsS3BucketWebsiteConfigurationRoutingRuleCondition | undefined;

  /**
   * Provides the rules to redirect the request if the condition in `Condition` is met.
   *
   * @public
   */
  Redirect?: AwsS3BucketWebsiteConfigurationRoutingRuleRedirect | undefined;
}

/**
 * Website parameters for the S3 bucket.
 *
 * @public
 */
export interface AwsS3BucketWebsiteConfiguration {
  /**
   * The name of the error document for the website.
   *
   * @public
   */
  ErrorDocument?: string | undefined;

  /**
   * The name of the index document for the website.
   *
   * @public
   */
  IndexDocumentSuffix?: string | undefined;

  /**
   * The redirect behavior for requests to the website.
   *
   * @public
   */
  RedirectAllRequestsTo?: AwsS3BucketWebsiteConfigurationRedirectTo | undefined;

  /**
   * The rules for applying redirects for requests to the website.
   *
   * @public
   */
  RoutingRules?: AwsS3BucketWebsiteConfigurationRoutingRule[] | undefined;
}

/**
 * The default S3 Object Lock retention mode and period that you want to apply to new objects placed in the specified Amazon S3 bucket.
 *
 * @public
 */
export interface AwsS3BucketObjectLockConfigurationRuleDefaultRetentionDetails {
  /**
   * The number of days that you want to specify for the default retention period.
   *
   * @public
   */
  Days?: number | undefined;

  /**
   * The default Object Lock retention mode you want to apply to new objects placed in the specified bucket.
   *
   * @public
   */
  Mode?: string | undefined;

  /**
   * The number of years that you want to specify for the default retention period.
   *
   * @public
   */
  Years?: number | undefined;
}

/**
 * Specifies the S3 Object Lock rule for the specified object. In Amazon S3, Object Lock can help prevent objects from being deleted or overwritten for a fixed amount of time or indefinitely.
 *
 * @public
 */
export interface AwsS3BucketObjectLockConfigurationRuleDetails {
  /**
   * The default Object Lock retention mode and period that you want to apply to new objects placed in the specified bucket.
   *
   * @public
   */
  DefaultRetention?: AwsS3BucketObjectLockConfigurationRuleDefaultRetentionDetails | undefined;
}

/**
 * The container element for S3 Object Lock configuration parameters. In Amazon S3, Object Lock can help prevent objects from being deleted or overwritten for a fixed amount of time or indefinitely.
 *
 * @public
 */
export interface AwsS3BucketObjectLockConfiguration {
  /**
   * Indicates whether the bucket has an Object Lock configuration enabled.
   *
   * @public
   */
  ObjectLockEnabled?: string | undefined;

  /**
   * Specifies the Object Lock rule for the specified object.
   *
   * @public
   */
  Rule?: AwsS3BucketObjectLockConfigurationRuleDetails | undefined;
}

/**
 * Specifies the default server-side encryption to apply to new objects in the bucket.
 *
 * @public
 */
export interface AwsS3BucketServerSideEncryptionByDefault {
  /**
   * Server-side encryption algorithm to use for the default encryption. Valid values are `aws: kms` or `AES256`.
   *
   * @public
   */
  SSEAlgorithm?: string | undefined;

  /**
   * KMS key ID to use for the default encryption.
   *
   * @public
   */
  KMSMasterKeyID?: string | undefined;
}

/**
 * An encryption rule to apply to the S3 bucket.
 *
 * @public
 */
export interface AwsS3BucketServerSideEncryptionRule {
  /**
   * Specifies the default server-side encryption to apply to new objects in the bucket. If a `PUT` object request doesn't specify any server-side encryption, this default encryption is applied.
   *
   * @public
   */
  ApplyServerSideEncryptionByDefault?: AwsS3BucketServerSideEncryptionByDefault | undefined;
}

/**
 * The encryption configuration for the S3 bucket.
 *
 * @public
 */
export interface AwsS3BucketServerSideEncryptionConfiguration {
  /**
   * The encryption rules that are applied to the S3 bucket.
   *
   * @public
   */
  Rules?: AwsS3BucketServerSideEncryptionRule[] | undefined;
}

/**
 * The details of an Amazon Simple Storage Service (Amazon S3) bucket.
 *
 * @public
 */
export interface AwsS3BucketDetails {
  /**
   * The canonical user ID of the owner of the S3 bucket.
   *
   * @public
   */
  OwnerId?: string | undefined;

  /**
   * The display name of the owner of the S3 bucket.
   *
   * @public
   */
  OwnerName?: string | undefined;

  /**
   * The Amazon Web Services account identifier of the account that owns the S3 bucket.
   *
   * @public
   */
  OwnerAccountId?: string | undefined;

  /**
   * Indicates when the S3 bucket was created.
   *
   * For more information about the validation and formatting of timestamp fields in Security Hub CSPM, see [Timestamps](https://docs.aws.amazon.com/securityhub/1.0/APIReference/Welcome.html#timestamps).
   *
   * @public
   */
  CreatedAt?: string | undefined;

  /**
   * The encryption rules that are applied to the S3 bucket.
   *
   * @public
   */
  ServerSideEncryptionConfiguration?: AwsS3BucketServerSideEncryptionConfiguration | undefined;

  /**
   * The lifecycle configuration for objects in the specified bucket.
   *
   * @public
   */
  BucketLifecycleConfiguration?: AwsS3BucketBucketLifecycleConfigurationDetails | undefined;

  /**
   * Provides information about the Amazon S3 Public Access Block configuration for the S3 bucket.
   *
   * @public
   */
  PublicAccessBlockConfiguration?: AwsS3AccountPublicAccessBlockDetails | undefined;

  /**
   * The access control list for the S3 bucket.
   *
   * @public
   */
  AccessControlList?: string | undefined;

  /**
   * The logging configuration for the S3 bucket.
   *
   * @public
   */
  BucketLoggingConfiguration?: AwsS3BucketLoggingConfiguration | undefined;

  /**
   * The website configuration parameters for the S3 bucket.
   *
   * @public
   */
  BucketWebsiteConfiguration?: AwsS3BucketWebsiteConfiguration | undefined;

  /**
   * The notification configuration for the S3 bucket.
   *
   * @public
   */
  BucketNotificationConfiguration?: AwsS3BucketNotificationConfiguration | undefined;

  /**
   * The versioning state of an S3 bucket.
   *
   * @public
   */
  BucketVersioningConfiguration?: AwsS3BucketBucketVersioningConfiguration | undefined;

  /**
   * Specifies which rule Amazon S3 applies by default to every new object placed in the bucket.
   *
   * @public
   */
  ObjectLockConfiguration?: AwsS3BucketObjectLockConfiguration | undefined;

  /**
   * The name of the bucket.
   *
   * @public
   */
  Name?: string | undefined;
}

/**
 * Details about an Amazon S3 object.
 *
 * @public
 */
export interface AwsS3ObjectDetails {
  /**
   * Indicates when the object was last modified.
   *
   * For more information about the validation and formatting of timestamp fields in Security Hub CSPM, see [Timestamps](https://docs.aws.amazon.com/securityhub/1.0/APIReference/Welcome.html#timestamps).
   *
   * @public
   */
  LastModified?: string | undefined;

  /**
   * The opaque identifier assigned by a web server to a specific version of a resource found at a URL.
   *
   * @public
   */
  ETag?: string | undefined;

  /**
   * The version of the object.
   *
   * @public
   */
  VersionId?: string | undefined;

  /**
   * A standard MIME type describing the format of the object data.
   *
   * @public
   */
  ContentType?: string | undefined;

  /**
   * If the object is stored using server-side encryption, the value of the server-side encryption algorithm used when storing this object in Amazon S3.
   *
   * @public
   */
  ServerSideEncryption?: string | undefined;

  /**
   * The identifier of the KMS symmetric customer managed key that was used for the object.
   *
   * @public
   */
  SSEKMSKeyId?: string | undefined;
}

/**
 * Information on the instance metadata service (IMDS) configuration of the notebook instance.
 *
 * @public
 */
export interface AwsSageMakerNotebookInstanceMetadataServiceConfigurationDetails {
  /**
   * Indicates the minimum IMDS version that the notebook instance supports.
   *
   * @public
   */
  MinimumInstanceMetadataServiceVersion?: string | undefined;
}

/**
 * Provides details about an Amazon SageMaker AI notebook instance.
 *
 * @public
 */
export interface AwsSageMakerNotebookInstanceDetails {
  /**
   * A list of Amazon Elastic Inference instance types to associate with the notebook instance. Currently, only one instance type can be associated with a notebook instance.
   *
   * @public
   */
  AcceleratorTypes?: string[] | undefined;

  /**
   * An array of up to three Git repositories associated with the notebook instance. These can be either the names of Git repositories stored as resources in your account, or the URL of Git repositories in [CodeCommit](https://docs.aws.amazon.com/codecommit/latest/userguide/welcome.html) or in any other Git repository. These repositories are cloned at the same level as the default repository of your notebook instance. For more information, see [Associating Git repositories with SageMaker AI notebook instances](https://docs.aws.amazon.com/sagemaker/latest/dg/nbi-git-repo.html) in the *Amazon SageMaker AI Developer Guide*.
   *
   * @public
   */
  AdditionalCodeRepositories?: string[] | undefined;

  /**
   * The Git repository associated with the notebook instance as its default code repository. This can be either the name of a Git repository stored as a resource in your account, or the URL of a Git repository in [CodeCommit](https://docs.aws.amazon.com/codecommit/latest/userguide/welcome.html) or in any other Git repository. When you open a notebook instance, it opens in the directory that contains this repository. For more information, see [Associating Git repositories with SageMaker AI notebook instances](https://docs.aws.amazon.com/sagemaker/latest/dg/nbi-git-repo.html) in the *Amazon SageMaker AI Developer Guide*.
   *
   * @public
   */
  DefaultCodeRepository?: string | undefined;

  /**
   * Sets whether SageMaker AI provides internet access to the notebook instance. If you set this to `Disabled`, this notebook instance is able to access resources only in your VPC, and is not be able to connect to SageMaker AI training and endpoint services unless you configure a Network Address Translation (NAT) Gateway in your VPC.
   *
   * @public
   */
  DirectInternetAccess?: string | undefined;

  /**
   * If status of the instance is `Failed`, the reason it failed.
   *
   * @public
   */
  FailureReason?: string | undefined;

  /**
   * Information on the IMDS configuration of the notebook instance.
   *
   * @public
   */
  InstanceMetadataServiceConfiguration?: AwsSageMakerNotebookInstanceMetadataServiceConfigurationDetails | undefined;

  /**
   * The type of machine learning (ML) compute instance to launch for the notebook instance.
   *
   * @public
   */
  InstanceType?: string | undefined;

  /**
   * The Amazon Resource Name (ARN) of an Key Management Service (KMS) key that SageMaker AI uses to encrypt data on the storage volume attached to your notebook instance. The KMS key you provide must be enabled. For information, see [Enabling and disabling keys](https://docs.aws.amazon.com/kms/latest/developerguide/enabling-keys.html) in the *Key Management Service Developer Guide*.
   *
   * @public
   */
  KmsKeyId?: string | undefined;

  /**
   * The network interface ID that SageMaker AI created when the instance was created.
   *
   * @public
   */
  NetworkInterfaceId?: string | undefined;

  /**
   * The Amazon Resource Name (ARN) of the notebook instance.
   *
   * @public
   */
  NotebookInstanceArn?: string | undefined;

  /**
   * The name of a notebook instance lifecycle configuration.
   *
   * @public
   */
  NotebookInstanceLifecycleConfigName?: string | undefined;

  /**
   * The name of the new notebook instance.
   *
   * @public
   */
  NotebookInstanceName?: string | undefined;

  /**
   * The status of the notebook instance.
   *
   * @public
   */
  NotebookInstanceStatus?: string | undefined;

  /**
   * The platform identifier of the notebook instance runtime environment.
   *
   * @public
   */
  PlatformIdentifier?: string | undefined;

  /**
   * The Amazon Resource Name (ARN) of the IAM role associated with the instance.
   *
   * @public
   */
  RoleArn?: string | undefined;

  /**
   * Whether root access is enabled or disabled for users of the notebook instance.
   *
   * @public
   */
  RootAccess?: string | undefined;

  /**
   * The VPC security group IDs.
   *
   * @public
   */
  SecurityGroups?: string[] | undefined;

  /**
   * The ID of the VPC subnet to which you have a connectivity from your ML compute instance.
   *
   * @public
   */
  SubnetId?: string | undefined;

  /**
   * The URL that you use to connect to the Jupyter notebook that is running in your notebook instance.
   *
   * @public
   */
  Url?: string | undefined;

  /**
   * The size, in GB, of the ML storage volume to attach to the notebook instance.
   *
   * @public
   */
  VolumeSizeInGB?: number | undefined;
}

/**
 * Defines the rotation schedule for the secret.
 *
 * @public
 */
export interface AwsSecretsManagerSecretRotationRules {
  /**
   * The number of days after the previous rotation to rotate the secret.
   *
   * @public
   */
  AutomaticallyAfterDays?: number | undefined;
}

/**
 * Details about an Secrets Manager secret.
 *
 * @public
 */
export interface AwsSecretsManagerSecretDetails {
  /**
   * Defines the rotation schedule for the secret.
   *
   * @public
   */
  RotationRules?: AwsSecretsManagerSecretRotationRules | undefined;

  /**
   * Whether the rotation occurred within the specified rotation frequency.
   *
   * @public
   */
  RotationOccurredWithinFrequency?: boolean | undefined;

  /**
   * The ARN, Key ID, or alias of the KMS key used to encrypt the `SecretString` or `SecretBinary` values for versions of this secret.
   *
   * @public
   */
  KmsKeyId?: string | undefined;

  /**
   * Whether rotation is enabled.
   *
   * @public
   */
  RotationEnabled?: boolean | undefined;

  /**
   * The ARN of the Lambda function that rotates the secret.
   *
   * @public
   */
  RotationLambdaArn?: string | undefined;

  /**
   * Whether the secret is deleted.
   *
   * @public
   */
  Deleted?: boolean | undefined;

  /**
   * The name of the secret.
   *
   * @public
   */
  Name?: string | undefined;

  /**
   * The user-provided description of the secret.
   *
   * @public
   */
  Description?: string | undefined;
}

/**
 * A parameter that a security control accepts.
 *
 * @public
 */
export interface SecurityControlParameter {
  /**
   * The name of a
   *
   * @public
   */
  Name?: string | undefined;

  /**
   * The current value of a control parameter.
   *
   * @public
   */
  Value?: string[] | undefined;
}

/**
 * Provides additional context for the value of `Compliance.Status`.
 *
 * @public
 */
export interface StatusReason {
  /**
   * A code that represents a reason for the control status. For the list of status reason codes and their meanings, see [Compliance details for control findings](https://docs.aws.amazon.com/securityhub/latest/userguide/controls-findings-create-update.html#control-findings-asff-compliance) in the *Security Hub CSPM User Guide*.
   *
   * @public
   */
  ReasonCode: string | undefined;

  /**
   * The corresponding description for the status reason code.
   *
   * @public
   */
  Description?: string | undefined;
}

/**
 * This object typically provides details about a control finding, such as applicable standards and the status of control checks. While finding providers can add custom content in `Compliance` object fields, they are typically used to review details of Security Hub CSPM control findings.
 *
 * @public
 */
export interface Compliance {
  /**
   * Typically summarizes the result of a control check.
   *
   * For Security Hub CSPM controls, valid values for `Status` are as follows.
   *
   * - - `PASSED` - Standards check passed for all evaluated resources.
   *   - `WARNING` - Some information is missing or this check is not supported for your configuration.
   *   - `FAILED` - Standards check failed for at least one evaluated resource.
   *   - `NOT_AVAILABLE` - Check could not be performed due to a service outage, API error, or because the result of the Config evaluation was `NOT_APPLICABLE`. If the Config evaluation result was `NOT_APPLICABLE` for a Security Hub CSPM control, Security Hub CSPM automatically archives the finding after 3 days.
   *
   * @public
   */
  Status?: ComplianceStatus | undefined;

  /**
   * Typically provides the industry or regulatory framework requirements that are related to a control. The check for that control is aligned with these requirements.
   *
   * Array Members: Maximum number of 32 items.
   *
   * @public
   */
  RelatedRequirements?: string[] | undefined;

  /**
   * Typically used to provide a list of reasons for the value of `Status`.
   *
   * @public
   */
  StatusReasons?: StatusReason[] | undefined;

  /**
   * Typically provides the unique identifier of a control across standards. For Security Hub CSPM controls, this field consists of an Amazon Web Services service and a unique number, such as `APIGateway.5`.
   *
   * @public
   */
  SecurityControlId?: string | undefined;

  /**
   * Typically provides an array of enabled security standards in which a security control is currently enabled.
   *
   * @public
   */
  AssociatedStandards?: AssociatedStandard[] | undefined;

  /**
   * Typically an object that includes security control parameter names and values.
   *
   * @public
   */
  SecurityControlParameters?: SecurityControlParameter[] | undefined;
}

/**
 * Contains information about the Autonomous System (AS) of the network endpoints involved in an Amazon GuardDuty Extended Threat Detection attack sequence. GuardDuty generates an attack sequence finding when multiple events align to a potentially suspicious activity. To receive GuardDuty attack sequence findings in Security Hub CSPM, you must have GuardDuty enabled. For more information, see [GuardDuty Extended Threat Detection](https://docs.aws.amazon.com/guardduty/latest/ug/guardduty-extended-threat-detection.html) in the *Amazon GuardDuty User Guide*.
 *
 * @public
 */
export interface NetworkAutonomousSystem {
  /**
   * The name associated with the AS.
   *
   * @public
   */
  Name?: string | undefined;

  /**
   * The unique number that identifies the AS.
   *
   * @public
   */
  Number?: number | undefined;
}

/**
 * Contains information about the network connection involved in an Amazon GuardDuty Extended Threat Detection attack sequence. GuardDuty generates an attack sequence finding when multiple events align to a potentially suspicious activity. To receive GuardDuty attack sequence findings in Security Hub CSPM, you must have GuardDuty enabled. For more information, see [GuardDuty Extended Threat Detection](https://docs.aws.amazon.com/guardduty/latest/ug/guardduty-extended-threat-detection.html) in the *Amazon GuardDuty User Guide*.
 *
 * @public
 */
export interface NetworkConnection {
  /**
   * The direction in which the network traffic is flowing.
   *
   * @public
   */
  Direction?: ConnectionDirection | undefined;
}

/**
 * Contains information about the location of a network endpoint involved in an Amazon GuardDuty Extended Threat Detection attack sequence. GuardDuty generates an attack sequence finding when multiple events align to a potentially suspicious activity. To receive GuardDuty attack sequence findings in Security Hub CSPM, you must have GuardDuty enabled. For more information, see [GuardDuty Extended Threat Detection](https://docs.aws.amazon.com/guardduty/latest/ug/guardduty-extended-threat-detection.html) in the *Amazon GuardDuty User Guide*.
 *
 * @public
 */
export interface NetworkGeoLocation {
  /**
   * The name of the city.
   *
   * @public
   */
  City?: string | undefined;

  /**
   * The name of the country.
   *
   * @public
   */
  Country?: string | undefined;

  /**
   * The latitude information of the endpoint location.
   *
   * @public
   */
  Lat?: number | undefined;

  /**
   * The longitude information of the endpoint location.
   *
   * @public
   */
  Lon?: number | undefined;
}

/**
 * Contains information about network endpoints involved in an Amazon GuardDuty Extended Threat Detection attack sequence. GuardDuty generates an attack sequence finding when multiple events align to a potentially suspicious activity. To receive GuardDuty attack sequence findings in Security Hub CSPM, you must have GuardDuty enabled. For more information, see [GuardDuty Extended Threat Detection](https://docs.aws.amazon.com/guardduty/latest/ug/guardduty-extended-threat-detection.html) in the *Amazon GuardDuty User Guide*.
 *
 * This field can provide information about the network endpoints associated with the resource in the attack sequence finding, or about a specific network endpoint used for the attack.
 *
 * @public
 */
export interface NetworkEndpoint {
  /**
   * The identifier of the network endpoint involved in the attack sequence.
   *
   * @public
   */
  Id?: string | undefined;

  /**
   * The IP address used in the network endpoint.
   *
   * @public
   */
  Ip?: string | undefined;

  /**
   * The domain information for the network endpoint.
   *
   * @public
   */
  Domain?: string | undefined;

  /**
   * The port number associated with the network endpoint.
   *
   * @public
   */
  Port?: number | undefined;

  /**
   * Information about the location of the network endpoint.
   *
   * @public
   */
  Location?: NetworkGeoLocation | undefined;

  /**
   * The Autonomous System Number (ASN) of the network endpoint.
   *
   * @public
   */
  AutonomousSystem?: NetworkAutonomousSystem | undefined;

  /**
   * Information about the network connection.
   *
   * @public
   */
  Connection?: NetworkConnection | undefined;
}

/**
 * Contains information about the indicators observed in an Amazon GuardDuty Extended Threat Detection attack sequence. Indicators include a set of signals, which can be API activities or findings that GuardDuty uses to detect an attack sequence finding. GuardDuty generates an attack sequence finding when multiple signals align to a potentially suspicious activity. To receive GuardDuty attack sequence findings in Security Hub CSPM, you must have GuardDuty and GuardDuty S3 Protection enabled. For more information, see [GuardDuty Extended Threat Detection](https://docs.aws.amazon.com/guardduty/latest/ug/guardduty-extended-threat-detection.html) in the *Amazon GuardDuty User Guide*.
 *
 * @public
 */
export interface Indicator {
  /**
   * The name of the indicator that’s present in the attack sequence finding.
   *
   * @public
   */
  Key?: string | undefined;

  /**
   * Values associated with each indicator key. For example, if the indicator key is `SUSPICIOUS_NETWORK`, then the value will be the name of the network. If the indicator key is `ATTACK_TACTIC`, then the value will be one of the MITRE tactics.
   *
   * @public
   */
  Values?: string[] | undefined;

  /**
   * The title describing the indicator.
   *
   * @public
   */
  Title?: string | undefined;

  /**
   * The type of indicator.
   *
   * @public
   */
  Type?: string | undefined;
}

/**
 * Contains information about the signals involved in an Amazon GuardDuty Extended Threat Detection attack sequence. An attack sequence is a type of threat detected by GuardDuty. GuardDuty generates an attack sequence finding when multiple events, or signals, align to a potentially suspicious activity. When GuardDuty and Security Hub CSPM are integrated, GuardDuty sends attack sequence findings to Security Hub CSPM.
 *
 * A signal can be an API activity or a finding that GuardDuty uses to detect an attack sequence finding.
 *
 * @public
 */
export interface Signal {
  /**
   * The type of the signal used to identify an attack sequence.
   *
   * Signals can be GuardDuty findings or activities observed in data sources that GuardDuty monitors. For more information, see [GuardDuty foundational data sources](https://docs.aws.amazon.com/guardduty/latest/ug/guardduty_data-sources.html) in the *Amazon GuardDuty User Guide*.
   *
   * A signal type can be one of the following values. Here are the related descriptions:
   *
   * - `FINDING` - Individually generated GuardDuty finding.
   * - `CLOUD_TRAIL` - Activity observed from CloudTrail logs
   * - `S3_DATA_EVENTS` - Activity observed from CloudTrail data events for Amazon Simple Storage Service (S3). Activities associated with this type will show up only when you have enabled GuardDuty S3 Protection feature in your account. For more information about S3 Protection and the steps to enable it, see [S3 Protection](https://docs.aws.amazon.com/guardduty/latest/ug/s3-protection.html) in the *Amazon GuardDuty User Guide*.
   *
   * @public
   */
  Type?: string | undefined;

  /**
   * The identifier of the signal.
   *
   * @public
   */
  Id?: string | undefined;

  /**
   * The description of the GuardDuty finding.
   *
   * @public
   */
  Title?: string | undefined;

  /**
   * The Amazon Resource Name (ARN) of the product that generated the signal.
   *
   * @public
   */
  ProductArn?: string | undefined;

  /**
   * The ARN or ID of the Amazon Web Services resource associated with the signal.
   *
   * @public
   */
  ResourceIds?: string[] | undefined;

  /**
   * Contains information about the indicators associated with the signals in this attack sequence finding. The values for `SignalIndicators` are a subset of the values for [SequenceIndicators](https://docs.aws.amazon.com/securityhub/1.0/APIReference/API_Sequence.html), but the values for these fields don't always match 1:1.
   *
   * @public
   */
  SignalIndicators?: Indicator[] | undefined;

  /**
   * The name of the GuardDuty signal. For example, when signal type is `FINDING`, the signal name is the name of the finding.
   *
   * @public
   */
  Name?: string | undefined;

  /**
   * The timestamp when the first finding or activity related to this signal was observed.
   *
   * @public
   */
  CreatedAt?: number | undefined;

  /**
   * The timestamp when this signal was last observed.
   *
   * @public
   */
  UpdatedAt?: number | undefined;

  /**
   * The timestamp when the first finding or activity related to this signal was observed.
   *
   * @public
   */
  FirstSeenAt?: number | undefined;

  /**
   * The timestamp when the last finding or activity related to this signal was observed.
   *
   * @public
   */
  LastSeenAt?: number | undefined;

  /**
   * The severity associated with the signal. For more information about severity, see [Severity levels for GuardDuty findings](https://docs.aws.amazon.com/guardduty/latest/ug/guardduty_findings-severity.html) in the *Amazon GuardDuty User Guide*.
   *
   * @public
   */
  Severity?: number | undefined;

  /**
   * The number of times this signal was observed.
   *
   * @public
   */
  Count?: number | undefined;

  /**
   * The IDs of the threat actors involved in the signal.
   *
   * @public
   */
  ActorIds?: string[] | undefined;

  /**
   * Information about the endpoint IDs associated with this signal.
   *
   * @public
   */
  EndpointIds?: string[] | undefined;
}

/**
 * Contains information about an Amazon GuardDuty Extended Threat Detection attack sequence finding. GuardDuty generates an attack sequence finding when multiple events align to a potentially suspicious activity. To receive GuardDuty attack sequence findings in Security Hub CSPM, you must have GuardDuty enabled. For more information, see [GuardDuty Extended Threat Detection](https://docs.aws.amazon.com/guardduty/latest/ug/guardduty-extended-threat-detection.html) in the *Amazon GuardDuty User Guide*.
 *
 * @public
 */
export interface Sequence {
  /**
   * Unique identifier of the attack sequence.
   *
   * @public
   */
  Uid?: string | undefined;

  /**
   * Provides information about the actors involved in the attack sequence.
   *
   * @public
   */
  Actors?: Actor[] | undefined;

  /**
   * Contains information about the network endpoints that were used in the attack sequence.
   *
   * @public
   */
  Endpoints?: NetworkEndpoint[] | undefined;

  /**
   * Contains information about the signals involved in the attack sequence.
   *
   * @public
   */
  Signals?: Signal[] | undefined;

  /**
   * Contains information about the indicators observed in the attack sequence. The values for [SignalIndicators](https://docs.aws.amazon.com/securityhub/1.0/APIReference/API_Signal.html) are a subset of the values for `SequenceIndicators`, but the values for these fields don't always match 1:1.
   *
   * @public
   */
  SequenceIndicators?: Indicator[] | undefined;
}

/**
 * A top-level object field that provides details about an Amazon GuardDuty Extended Threat Detection attack sequence. GuardDuty generates an attack sequence finding when multiple events align to a potentially suspicious activity. To receive GuardDuty attack sequence findings in Security Hub CSPM, you must have GuardDuty enabled. For more information, see [GuardDuty Extended Threat Detection](https://docs.aws.amazon.com/guardduty/latest/ug/guardduty-extended-threat-detection.html) in the *Amazon GuardDuty User Guide*.
 *
 * @public
 */
export interface Detection {
  /**
   * Provides details about an attack sequence.
   *
   * @public
   */
  Sequence?: Sequence | undefined;
}

/**
 * The severity assigned to a finding by the finding provider. This object may include one or more of the following attributes:
 *
 * - `Label`
 * - `Normalized`
 * - `Original`
 * - `Product`
 *
 * If a [`BatchImportFindings`](https://docs.aws.amazon.com/securityhub/1.0/APIReference/API_BatchImportFindings.html) request for a new finding only provides `Label` or only provides `Normalized`, Security Hub CSPM automatically populates the value of the other field.
 *
 * The `Normalized` and `Product` attributes are included in the `FindingProviderSeverity` structure to preserve the historical information associated with the finding, even if the top-level `Severity` object is later modified using the [`BatchUpdateFindings`](https://docs.aws.amazon.com/securityhub/1.0/APIReference/API_BatchUpdateFindings.html) operation.
 *
 * If the top-level `Finding.Severity` object is present, but `Finding.FindingProviderFields` isn't present, Security Hub CSPM creates the `FindingProviderFields.Severity` object and copies the entire `Finding.Severity` object into it. This ensures that the original, provider-supplied details are retained within the `FindingProviderFields.Severity` object, even if the top-level `Severity` object is overwritten.
 *
 * @public
 */
export interface FindingProviderSeverity {
  /**
   * The severity label assigned to the finding by the finding provider.
   *
   * @public
   */
  Label?: SeverityLabel | undefined;

  /**
   * The finding provider's original value for the severity.
   *
   * Length Constraints: Minimum length of 1. Maximum length of 64.
   *
   * @public
   */
  Original?: string | undefined;
}

/**
 * In a [`BatchImportFindings`](https://docs.aws.amazon.com/securityhub/1.0/APIReference/API_BatchImportFindings.html) request, finding providers use `FindingProviderFields` to provide and update values for the following fields:
 *
 * - `Confidence`
 * - `Criticality`
 * - `RelatedFindings`
 * - `Severity`
 * - `Types`
 *
 * The preceding fields are nested under the `FindingProviderFields` object, but also have analogues of the same name as top-level ASFF fields. When a new finding is sent to Security Hub CSPM by a finding provider, Security Hub CSPM populates the `FindingProviderFields` object automatically, if it is empty, based on the corresponding top-level fields.
 *
 * Finding providers can update `FindingProviderFields` only by using the `BatchImportFindings` operation. Finding providers can't update this object with the [`BatchUpdateFindings`](https://docs.aws.amazon.com/securityhub/1.0/APIReference/API_BatchUpdateFindings.html) operation. Customers can update the top-level fields by using the `BatchUpdateFindings` operation. Customers can't update `FindingProviderFields`.
 *
 * For information about how Security Hub CSPM handles updates from `BatchImportFindings` to `FindingProviderFields` and to the corresponding top-level attributes, see [Using `FindingProviderFields`](https://docs.aws.amazon.com/securityhub/latest/userguide/finding-update-batchimportfindings.html#batchimportfindings-findingproviderfields) in the *Security Hub CSPM User Guide*.
 *
 * @public
 */
export interface FindingProviderFields {
  /**
   * A finding's confidence. Confidence is defined as the likelihood that a finding accurately identifies the behavior or issue that it was intended to identify.
   *
   * Confidence is scored on a 0-100 basis using a ratio scale, where 0 means zero percent confidence and 100 means 100 percent confidence.
   *
   * @public
   */
  Confidence?: number | undefined;

  /**
   * The level of importance assigned to the resources associated with the finding.
   *
   * A score of 0 means that the underlying resources have no criticality, and a score of 100 is reserved for the most critical resources.
   *
   * @public
   */
  Criticality?: number | undefined;

  /**
   * A list of findings that are related to the current finding.
   *
   * @public
   */
  RelatedFindings?: RelatedFinding[] | undefined;

  /**
   * The severity of a finding.
   *
   * @public
   */
  Severity?: FindingProviderSeverity | undefined;

  /**
   * One or more finding types in the format of `namespace/category/classifier` that classify a finding.
   *
   * Valid namespace values are: Software and Configuration Checks | TTPs | Effects | Unusual Behaviors | Sensitive Data Identifications
   *
   * @public
   */
  Types?: string[] | undefined;
}

/**
 * Provides metadata for the Amazon CodeGuru detector associated with a finding. This field pertains to findings that relate to Lambda functions. Amazon Inspector identifies policy violations and vulnerabilities in Lambda function code based on internal detectors developed in collaboration with Amazon CodeGuru. Security Hub CSPM receives those findings.
 *
 * @public
 */
export interface GeneratorDetails {
  /**
   * The name of the detector used to identify the code vulnerability.
   *
   * @public
   */
  Name?: string | undefined;

  /**
   * The description of the detector used to identify the code vulnerability.
   *
   * @public
   */
  Description?: string | undefined;

  /**
   * An array of tags used to identify the detector associated with the finding.
   *
   * Array Members: Minimum number of 0 items. Maximum number of 10 items.
   *
   * @public
   */
  Labels?: string[] | undefined;
}

/**
 * A list of malware related to a finding.
 *
 * @public
 */
export interface Malware {
  /**
   * The name of the malware that was observed.
   *
   * Length Constraints: Minimum of 1. Maximum of 64.
   *
   * @public
   */
  Name: string | undefined;

  /**
   * The type of the malware that was observed.
   *
   * @public
   */
  Type?: MalwareType | undefined;

  /**
   * The file system path of the malware that was observed.
   *
   * Length Constraints: Minimum of 1. Maximum of 512.
   *
   * @public
   */
  Path?: string | undefined;

  /**
   * The state of the malware that was observed.
   *
   * @public
   */
  State?: MalwareState | undefined;
}

/**
 * A range of ports.
 *
 * @public
 */
export interface PortRange {
  /**
   * The first port in the port range.
   *
   * @public
   */
  Begin?: number | undefined;

  /**
   * The last port in the port range.
   *
   * @public
   */
  End?: number | undefined;
}

/**
 * The details of network-related information about a finding.
 *
 * @public
 */
export interface Network {
  /**
   * The direction of network traffic associated with a finding.
   *
   * @public
   */
  Direction?: NetworkDirection | undefined;

  /**
   * The protocol of network-related information about a finding.
   *
   * Length Constraints: Minimum of 1. Maximum of 16.
   *
   * @public
   */
  Protocol?: string | undefined;

  /**
   * The range of open ports that is present on the network.
   *
   * @public
   */
  OpenPortRange?: PortRange | undefined;

  /**
   * The source IPv4 address of network-related information about a finding.
   *
   * @public
   */
  SourceIpV4?: string | undefined;

  /**
   * The source IPv6 address of network-related information about a finding.
   *
   * @public
   */
  SourceIpV6?: string | undefined;

  /**
   * The source port of network-related information about a finding.
   *
   * @public
   */
  SourcePort?: number | undefined;

  /**
   * The source domain of network-related information about a finding.
   *
   * Length Constraints: Minimum of 1. Maximum of 128.
   *
   * @public
   */
  SourceDomain?: string | undefined;

  /**
   * The source media access control (MAC) address of network-related information about a finding.
   *
   * @public
   */
  SourceMac?: string | undefined;

  /**
   * The destination IPv4 address of network-related information about a finding.
   *
   * @public
   */
  DestinationIpV4?: string | undefined;

  /**
   * The destination IPv6 address of network-related information about a finding.
   *
   * @public
   */
  DestinationIpV6?: string | undefined;

  /**
   * The destination port of network-related information about a finding.
   *
   * @public
   */
  DestinationPort?: number | undefined;

  /**
   * The destination domain of network-related information about a finding.
   *
   * Length Constraints: Minimum of 1. Maximum of 128.
   *
   * @public
   */
  DestinationDomain?: string | undefined;
}

/**
 * Information about the destination of the next component in the network path.
 *
 * @public
 */
export interface NetworkPathComponentDetails {
  /**
   * The IP addresses of the destination.
   *
   * @public
   */
  Address?: string[] | undefined;

  /**
   * A list of port ranges for the destination.
   *
   * @public
   */
  PortRanges?: PortRange[] | undefined;
}

/**
 * Details about a network path component that occurs before or after the current component.
 *
 * @public
 */
export interface NetworkHeader {
  /**
   * The protocol used for the component.
   *
   * Length Constraints: Minimum of 1. Maximum of 16.
   *
   * @public
   */
  Protocol?: string | undefined;

  /**
   * Information about the destination of the component.
   *
   * @public
   */
  Destination?: NetworkPathComponentDetails | undefined;

  /**
   * Information about the origin of the component.
   *
   * @public
   */
  Source?: NetworkPathComponentDetails | undefined;
}

/**
 * Information about a network path component.
 *
 * @public
 */
export interface NetworkPathComponent {
  /**
   * The identifier of a component in the network path.
   *
   * Length Constraints: Minimum of 1. Maximum of 32.
   *
   * @public
   */
  ComponentId?: string | undefined;

  /**
   * The type of component.
   *
   * Length Constraints: Minimum of 1. Maximum of 32.
   *
   * @public
   */
  ComponentType?: string | undefined;

  /**
   * Information about the component that comes after the current component in the network path.
   *
   * @public
   */
  Egress?: NetworkHeader | undefined;

  /**
   * Information about the component that comes before the current node in the network path.
   *
   * @public
   */
  Ingress?: NetworkHeader | undefined;
}

/**
 * A user-defined note added to a finding.
 *
 * @public
 */
export interface Note {
  /**
   * The text of a note.
   *
   * Length Constraints: Minimum of 1. Maximum of 512.
   *
   * @public
   */
  Text: string | undefined;

  /**
   * The principal that created a note.
   *
   * @public
   */
  UpdatedBy: string | undefined;

  /**
   * A timestamp that indicates when the note was updated.
   *
   * For more information about the validation and formatting of timestamp fields in Security Hub CSPM, see [Timestamps](https://docs.aws.amazon.com/securityhub/1.0/APIReference/Welcome.html#timestamps).
   *
   * @public
   */
  UpdatedAt: string | undefined;
}

/**
 * Provides an overview of the patch compliance status for an instance against a selected compliance standard.
 *
 * @public
 */
export interface PatchSummary {
  /**
   * The identifier of the compliance standard that was used to determine the patch compliance status.
   *
   * Length Constraints: Minimum length of 1. Maximum length of 256.
   *
   * @public
   */
  Id: string | undefined;

  /**
   * The number of patches from the compliance standard that were installed successfully.
   *
   * The value can be an integer from `0` to `100000`.
   *
   * @public
   */
  InstalledCount?: number | undefined;

  /**
   * The number of patches that are part of the compliance standard but are not installed. The count includes patches that failed to install.
   *
   * The value can be an integer from `0` to `100000`.
   *
   * @public
   */
  MissingCount?: number | undefined;

  /**
   * The number of patches from the compliance standard that failed to install.
   *
   * The value can be an integer from `0` to `100000`.
   *
   * @public
   */
  FailedCount?: number | undefined;

  /**
   * The number of installed patches that are not part of the compliance standard.
   *
   * The value can be an integer from `0` to `100000`.
   *
   * @public
   */
  InstalledOtherCount?: number | undefined;

  /**
   * The number of patches that are installed but are also on a list of patches that the customer rejected.
   *
   * The value can be an integer from `0` to `100000`.
   *
   * @public
   */
  InstalledRejectedCount?: number | undefined;

  /**
   * The number of patches that were applied, but that require the instance to be rebooted in order to be marked as installed.
   *
   * The value can be an integer from `0` to `100000`.
   *
   * @public
   */
  InstalledPendingReboot?: number | undefined;

  /**
   * Indicates when the operation started.
   *
   * For more information about the validation and formatting of timestamp fields in Security Hub CSPM, see [Timestamps](https://docs.aws.amazon.com/securityhub/1.0/APIReference/Welcome.html#timestamps).
   *
   * @public
   */
  OperationStartTime?: string | undefined;

  /**
   * Indicates when the operation completed.
   *
   * For more information about the validation and formatting of timestamp fields in Security Hub CSPM, see [Timestamps](https://docs.aws.amazon.com/securityhub/1.0/APIReference/Welcome.html#timestamps).
   *
   * @public
   */
  OperationEndTime?: string | undefined;

  /**
   * The reboot option specified for the instance.
   *
   * Length Constraints: Minimum length of 1. Maximum length of 256.
   *
   * @public
   */
  RebootOption?: string | undefined;

  /**
   * The type of patch operation performed. For Patch Manager, the values are `SCAN` and `INSTALL`.
   *
   * Length Constraints: Minimum length of 1. Maximum length of 256.
   *
   * @public
   */
  Operation?: string | undefined;
}

/**
 * The details of process-related information about a finding.
 *
 * @public
 */
export interface ProcessDetails {
  /**
   * The name of the process.
   *
   * Length Constraints: Minimum of 1. Maximum of 64.
   *
   * @public
   */
  Name?: string | undefined;

  /**
   * The path to the process executable.
   *
   * Length Constraints: Minimum of 1. Maximum of 512.
   *
   * @public
   */
  Path?: string | undefined;

  /**
   * The process ID.
   *
   * @public
   */
  Pid?: number | undefined;

  /**
   * The parent process ID. This field accepts positive integers between `O` and `2147483647`.
   *
   * @public
   */
  ParentPid?: number | undefined;

  /**
   * Indicates when the process was launched.
   *
   * For more information about the validation and formatting of timestamp fields in Security Hub CSPM, see [Timestamps](https://docs.aws.amazon.com/securityhub/1.0/APIReference/Welcome.html#timestamps).
   *
   * @public
   */
  LaunchedAt?: string | undefined;

  /**
   * Indicates when the process was terminated.
   *
   * For more information about the validation and formatting of timestamp fields in Security Hub CSPM, see [Timestamps](https://docs.aws.amazon.com/securityhub/1.0/APIReference/Welcome.html#timestamps).
   *
   * @public
   */
  TerminatedAt?: string | undefined;
}

/**
 * A recommendation on how to remediate the issue identified in a finding.
 *
 * @public
 */
export interface Recommendation {
  /**
   * Describes the recommended steps to take to remediate an issue identified in a finding.
   *
   * Length Constraints: Minimum of 1 length. Maximum of 512 length.
   *
   * @public
   */
  Text?: string | undefined;

  /**
   * A URL to a page or site that contains information about how to remediate a finding.
   *
   * @public
   */
  Url?: string | undefined;
}

/**
 * Details about the remediation steps for a finding.
 *
 * @public
 */
export interface Remediation {
  /**
   * A recommendation on the steps to take to remediate the issue identified by a finding.
   *
   * @public
   */
  Recommendation?: Recommendation | undefined;
}

/**
 * An occurrence of sensitive data detected in a Microsoft Excel workbook, comma-separated value (CSV) file, or tab-separated value (TSV) file.
 *
 * @public
 */
export interface Cell {
  /**
   * The column number of the column that contains the data. For a Microsoft Excel workbook, the column number corresponds to the alphabetical column identifiers. For example, a value of 1 for Column corresponds to the A column in the workbook.
   *
   * @public
   */
  Column?: number | undefined;

  /**
   * The row number of the row that contains the data.
   *
   * @public
   */
  Row?: number | undefined;

  /**
   * The name of the column that contains the data.
   *
   * @public
   */
  ColumnName?: string | undefined;

  /**
   * For a Microsoft Excel workbook, provides the location of the cell, as an absolute cell reference, that contains the data. For example, Sheet2!C5 for cell C5 on Sheet2.
   *
   * @public
   */
  CellReference?: string | undefined;
}

/**
 * Identifies where the sensitive data begins and ends.
 *
 * @public
 */
export interface Range {
  /**
   * The number of lines (for a line range) or characters (for an offset range) from the beginning of the file to the end of the sensitive data.
   *
   * @public
   */
  Start?: number | undefined;

  /**
   * The number of lines (for a line range) or characters (for an offset range) from the beginning of the file to the end of the sensitive data.
   *
   * @public
   */
  End?: number | undefined;

  /**
   * In the line where the sensitive data starts, the column within the line where the sensitive data starts.
   *
   * @public
   */
  StartColumn?: number | undefined;
}

/**
 * An occurrence of sensitive data in an Adobe Portable Document Format (PDF) file.
 *
 * @public
 */
export interface Page {
  /**
   * The page number of the page that contains the sensitive data.
   *
   * @public
   */
  PageNumber?: number | undefined;

  /**
   * An occurrence of sensitive data detected in a non-binary text file or a Microsoft Word file. Non-binary text files include files such as HTML, XML, JSON, and TXT files.
   *
   * @public
   */
  LineRange?: Range | undefined;

  /**
   * An occurrence of sensitive data detected in a binary text file.
   *
   * @public
   */
  OffsetRange?: Range | undefined;
}

/**
 * An occurrence of sensitive data in an Apache Avro object container or an Apache Parquet file.
 *
 * @public
 */
export interface _Record {
  /**
   * The path, as a JSONPath expression, to the field in the record that contains the data. If the field name is longer than 20 characters, it is truncated. If the path is longer than 250 characters, it is truncated.
   *
   * @public
   */
  JsonPath?: string | undefined;

  /**
   * The record index, starting from 0, for the record that contains the data.
   *
   * @public
   */
  RecordIndex?: number | undefined;
}

/**
 * The detected occurrences of sensitive data.
 *
 * @public
 */
export interface Occurrences {
  /**
   * Occurrences of sensitive data detected in a non-binary text file or a Microsoft Word file. Non-binary text files include files such as HTML, XML, JSON, and TXT files.
   *
   * @public
   */
  LineRanges?: Range[] | undefined;

  /**
   * Occurrences of sensitive data detected in a binary text file.
   *
   * @public
   */
  OffsetRanges?: Range[] | undefined;

  /**
   * Occurrences of sensitive data in an Adobe Portable Document Format (PDF) file.
   *
   * @public
   */
  Pages?: Page[] | undefined;

  /**
   * Occurrences of sensitive data in an Apache Avro object container or an Apache Parquet file.
   *
   * @public
   */
  Records?: _Record[] | undefined;

  /**
   * Occurrences of sensitive data detected in Microsoft Excel workbooks, comma-separated value (CSV) files, or tab-separated value (TSV) files.
   *
   * @public
   */
  Cells?: Cell[] | undefined;
}

/**
 * The list of detected instances of sensitive data.
 *
 * @public
 */
export interface CustomDataIdentifiersDetections {
  /**
   * The total number of occurrences of sensitive data that were detected.
   *
   * @public
   */
  Count?: number | undefined;

  /**
   * The ARN of the custom identifier that was used to detect the sensitive data.
   *
   * @public
   */
  Arn?: string | undefined;

  /**
   * he name of the custom identifier that detected the sensitive data.
   *
   * @public
   */
  Name?: string | undefined;

  /**
   * Details about the sensitive data that was detected.
   *
   * @public
   */
  Occurrences?: Occurrences | undefined;
}

/**
 * Contains an instance of sensitive data that was detected by a customer-defined identifier.
 *
 * @public
 */
export interface CustomDataIdentifiersResult {
  /**
   * The list of detected instances of sensitive data.
   *
   * @public
   */
  Detections?: CustomDataIdentifiersDetections[] | undefined;

  /**
   * The total number of occurrences of sensitive data.
   *
   * @public
   */
  TotalCount?: number | undefined;
}

/**
 * The list of detected instances of sensitive data.
 *
 * @public
 */
export interface SensitiveDataDetections {
  /**
   * The total number of occurrences of sensitive data that were detected.
   *
   * @public
   */
  Count?: number | undefined;

  /**
   * The type of sensitive data that was detected. For example, the type might indicate that the data is an email address.
   *
   * @public
   */
  Type?: string | undefined;

  /**
   * Details about the sensitive data that was detected.
   *
   * @public
   */
  Occurrences?: Occurrences | undefined;
}

/**
 * Contains a detected instance of sensitive data that are based on built-in identifiers.
 *
 * @public
 */
export interface SensitiveDataResult {
  /**
   * The category of sensitive data that was detected. For example, the category can indicate that the sensitive data involved credentials, financial information, or personal information.
   *
   * @public
   */
  Category?: string | undefined;

  /**
   * The list of detected instances of sensitive data.
   *
   * @public
   */
  Detections?: SensitiveDataDetections[] | undefined;

  /**
   * The total number of occurrences of sensitive data.
   *
   * @public
   */
  TotalCount?: number | undefined;
}

/**
 * Provides details about the current status of the sensitive data detection.
 *
 * @public
 */
export interface ClassificationStatus {
  /**
   * The code that represents the status of the sensitive data detection.
   *
   * @public
   */
  Code?: string | undefined;

  /**
   * A longer description of the current status of the sensitive data detection.
   *
   * @public
   */
  Reason?: string | undefined;
}

/**
 * Details about the sensitive data that was detected on the resource.
 *
 * @public
 */
export interface ClassificationResult {
  /**
   * The type of content that the finding applies to.
   *
   * @public
   */
  MimeType?: string | undefined;

  /**
   * The total size in bytes of the affected data.
   *
   * @public
   */
  SizeClassified?: number | undefined;

  /**
   * Indicates whether there are additional occurrences of sensitive data that are not included in the finding. This occurs when the number of occurrences exceeds the maximum that can be included.
   *
   * @public
   */
  AdditionalOccurrences?: boolean | undefined;

  /**
   * The current status of the sensitive data detection.
   *
   * @public
   */
  Status?: ClassificationStatus | undefined;

  /**
   * Provides details about sensitive data that was identified based on built-in configuration.
   *
   * @public
   */
  SensitiveData?: SensitiveDataResult[] | undefined;

  /**
   * Provides details about sensitive data that was identified based on customer-defined configuration.
   *
   * @public
   */
  CustomDataIdentifiers?: CustomDataIdentifiersResult | undefined;
}

/**
 * Provides details about sensitive data that was detected on a resource.
 *
 * @public
 */
export interface DataClassificationDetails {
  /**
   * The path to the folder or file that contains the sensitive data.
   *
   * @public
   */
  DetailedResultsLocation?: string | undefined;

  /**
   * The details about the sensitive data that was detected on the resource.
   *
   * @public
   */
  Result?: ClassificationResult | undefined;
}

/**
 * A wrapper type for the attributes of an Amazon SNS subscription.
 *
 * @public
 */
export interface AwsSnsTopicSubscription {
  /**
   * The subscription's endpoint (format depends on the protocol).
   *
   * @public
   */
  Endpoint?: string | undefined;

  /**
   * The subscription's protocol.
   *
   * @public
   */
  Protocol?: string | undefined;
}

/**
 * Provides information about an Amazon SNS topic to which notifications can be published.
 *
 * @public
 */
export interface AwsSnsTopicDetails {
  /**
   * The ID of an Amazon Web Services managed key for Amazon SNS or a customer managed key.
   *
   * @public
   */
  KmsMasterKeyId?: string | undefined;

  /**
   * Subscription is an embedded property that describes the subscription endpoints of an Amazon SNS topic.
   *
   * @public
   */
  Subscription?: AwsSnsTopicSubscription[] | undefined;

  /**
   * The name of the Amazon SNS topic.
   *
   * @public
   */
  TopicName?: string | undefined;

  /**
   * The subscription's owner.
   *
   * @public
   */
  Owner?: string | undefined;

  /**
   * Indicates successful message delivery status for an Amazon SNS topic that is subscribed to an Amazon SQS endpoint.
   *
   * @public
   */
  SqsSuccessFeedbackRoleArn?: string | undefined;

  /**
   * Indicates failed message delivery status for an Amazon SNS topic that is subscribed to an Amazon SQS endpoint.
   *
   * @public
   */
  SqsFailureFeedbackRoleArn?: string | undefined;

  /**
   * Indicates failed message delivery status for an Amazon SNS topic that is subscribed to a platform application endpoint.
   *
   * @public
   */
  ApplicationSuccessFeedbackRoleArn?: string | undefined;

  /**
   * Indicates successful message delivery status for an Amazon SNS topic that is subscribed to an Amazon Kinesis Data Firehose endpoint.
   *
   * @public
   */
  FirehoseSuccessFeedbackRoleArn?: string | undefined;

  /**
   * Indicates failed message delivery status for an Amazon SNS topic that is subscribed to an Amazon Kinesis Data Firehose endpoint.
   *
   * @public
   */
  FirehoseFailureFeedbackRoleArn?: string | undefined;

  /**
   * Indicates successful message delivery status for an Amazon SNS topic that is subscribed to an HTTP endpoint.
   *
   * @public
   */
  HttpSuccessFeedbackRoleArn?: string | undefined;

  /**
   * Indicates failed message delivery status for an Amazon SNS topic that is subscribed to an HTTP endpoint.
   *
   * @public
   */
  HttpFailureFeedbackRoleArn?: string | undefined;
}

/**
 * Data about a queue.
 *
 * @public
 */
export interface AwsSqsQueueDetails {
  /**
   * The length of time, in seconds, for which Amazon SQS can reuse a data key to encrypt or decrypt messages before calling KMS again.
   *
   * @public
   */
  KmsDataKeyReusePeriodSeconds?: number | undefined;

  /**
   * The ID of an Amazon Web Services managed key for Amazon SQS or a custom KMS key.
   *
   * @public
   */
  KmsMasterKeyId?: string | undefined;

  /**
   * The name of the new queue.
   *
   * @public
   */
  QueueName?: string | undefined;

  /**
   * The ARN of the dead-letter queue to which Amazon SQS moves messages after the value of `maxReceiveCount` is exceeded.
   *
   * @public
   */
  DeadLetterTargetArn?: string | undefined;
}

/**
 * Provides the details about the compliance status for a patch.
 *
 * @public
 */
export interface AwsSsmComplianceSummary {
  /**
   * The current patch compliance status. Valid values are as follows:
   *
   * - `COMPLIANT`
   * - `NON_COMPLIANT`
   * - `UNSPECIFIED_DATA`
   *
   * @public
   */
  Status?: string | undefined;

  /**
   * For the patches that are compliant, the number that have a severity of `CRITICAL`.
   *
   * @public
   */
  CompliantCriticalCount?: number | undefined;

  /**
   * For the patches that are compliant, the number that have a severity of `HIGH`.
   *
   * @public
   */
  CompliantHighCount?: number | undefined;

  /**
   * For the patches that are compliant, the number that have a severity of `MEDIUM`.
   *
   * @public
   */
  CompliantMediumCount?: number | undefined;

  /**
   * The type of execution that was used determine compliance.
   *
   * @public
   */
  ExecutionType?: string | undefined;

  /**
   * For the patch items that are noncompliant, the number of items that have a severity of `CRITICAL`.
   *
   * @public
   */
  NonCompliantCriticalCount?: number | undefined;

  /**
   * For the patches that are compliant, the number that have a severity of `INFORMATIONAL`.
   *
   * @public
   */
  CompliantInformationalCount?: number | undefined;

  /**
   * For the patches that are noncompliant, the number that have a severity of `INFORMATIONAL`.
   *
   * @public
   */
  NonCompliantInformationalCount?: number | undefined;

  /**
   * For the patches that are compliant, the number that have a severity of `UNSPECIFIED`.
   *
   * @public
   */
  CompliantUnspecifiedCount?: number | undefined;

  /**
   * For the patches that are noncompliant, the number that have a severity of `LOW`.
   *
   * @public
   */
  NonCompliantLowCount?: number | undefined;

  /**
   * For the patches that are noncompliant, the number that have a severity of `HIGH`.
   *
   * @public
   */
  NonCompliantHighCount?: number | undefined;

  /**
   * For the patches that are compliant, the number that have a severity of `LOW`.
   *
   * @public
   */
  CompliantLowCount?: number | undefined;

  /**
   * The type of resource for which the compliance was determined. For `AwsSsmPatchCompliance`, `ComplianceType` is `Patch`.
   *
   * @public
   */
  ComplianceType?: string | undefined;

  /**
   * The identifier of the patch baseline. The patch baseline lists the patches that are approved for installation.
   *
   * @public
   */
  PatchBaselineId?: string | undefined;

  /**
   * The highest severity for the patches. Valid values are as follows:
   *
   * - `CRITICAL`
   * - `HIGH`
   * - `MEDIUM`
   * - `LOW`
   * - `INFORMATIONAL`
   * - `UNSPECIFIED`
   *
   * @public
   */
  OverallSeverity?: string | undefined;

  /**
   * For the patches that are noncompliant, the number that have a severity of `MEDIUM`.
   *
   * @public
   */
  NonCompliantMediumCount?: number | undefined;

  /**
   * For the patches that are noncompliant, the number that have a severity of `UNSPECIFIED`.
   *
   * @public
   */
  NonCompliantUnspecifiedCount?: number | undefined;

  /**
   * The identifier of the patch group for which compliance was determined. A patch group uses tags to group EC2 instances that should have the same patch compliance.
   *
   * @public
   */
  PatchGroup?: string | undefined;
}

/**
 * Provides details about the compliance for a patch.
 *
 * @public
 */
export interface AwsSsmPatch {
  /**
   * The compliance status details for the patch.
   *
   * @public
   */
  ComplianceSummary?: AwsSsmComplianceSummary | undefined;
}

/**
 * Provides information about the state of a patch on an instance based on the patch baseline that was used to patch the instance.
 *
 * @public
 */
export interface AwsSsmPatchComplianceDetails {
  /**
   * Information about the status of a patch.
   *
   * @public
   */
  Patch?: AwsSsmPatch | undefined;
}

/**
 * An object describing a CloudWatch log group. For more information, see [Amazon Web Services::Logs::LogGroup](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-logs-loggroup.html) in the *CloudFormation User Guide*.
 *
 * @public
 */
export interface AwsStepFunctionStateMachineLoggingConfigurationDestinationsCloudWatchLogsLogGroupDetails {
  /**
   * The ARN (ends with `:*`) of the CloudWatch Logs log group to which you want your logs emitted.
   *
   * @public
   */
  LogGroupArn?: string | undefined;
}

/**
 * An array of objects that describes where your execution history events will be logged.
 *
 * @public
 */
export interface AwsStepFunctionStateMachineLoggingConfigurationDestinationsDetails {
  /**
   * An object describing a CloudWatch Logs log group. For more information, see [Amazon Web Services::Logs::LogGroup](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-logs-loggroup.html) in the *CloudFormation User Guide*.
   *
   * @public
   */
  CloudWatchLogsLogGroup?: AwsStepFunctionStateMachineLoggingConfigurationDestinationsCloudWatchLogsLogGroupDetails | undefined;
}

/**
 * The `LoggingConfiguration` data type is used to set CloudWatch Logs options.
 *
 * @public
 */
export interface AwsStepFunctionStateMachineLoggingConfigurationDetails {
  /**
   * An array of objects that describes where your execution history events will be logged.
   *
   * @public
   */
  Destinations?: AwsStepFunctionStateMachineLoggingConfigurationDestinationsDetails[] | undefined;

  /**
   * Determines whether execution data is included in your log. When set to false, data is excluded.
   *
   * @public
   */
  IncludeExecutionData?: boolean | undefined;

  /**
   * Defines which category of execution history events are logged.
   *
   * @public
   */
  Level?: string | undefined;
}

/**
 * Specifies whether X-Ray tracing is enabled.
 *
 * @public
 */
export interface AwsStepFunctionStateMachineTracingConfigurationDetails {
  /**
   * When set to true, X-Ray tracing is enabled.
   *
   * @public
   */
  Enabled?: boolean | undefined;
}

/**
 * Provides details about an Step Functions state machine, which is a workflow consisting of a series of event- driven steps.
 *
 * @public
 */
export interface AwsStepFunctionStateMachineDetails {
  /**
   * A user-defined or an auto-generated string that identifies a `Map` state. This parameter is present only if the `stateMachineArn` specified in input is a qualified state machine ARN.
   *
   * @public
   */
  Label?: string | undefined;

  /**
   * Used to set CloudWatch Logs options.
   *
   * @public
   */
  LoggingConfiguration?: AwsStepFunctionStateMachineLoggingConfigurationDetails | undefined;

  /**
   * The name of the state machine.
   *
   * @public
   */
  Name?: string | undefined;

  /**
   * The Amazon Resource Name (ARN) of the IAM role used when creating this state machine.
   *
   * @public
   */
  RoleArn?: string | undefined;

  /**
   * The ARN that identifies the state machine.
   *
   * @public
   */
  StateMachineArn?: string | undefined;

  /**
   * The current status of the state machine.
   *
   * @public
   */
  Status?: string | undefined;

  /**
   * Specifies whether X-Ray tracing is enabled.
   *
   * @public
   */
  TracingConfiguration?: AwsStepFunctionStateMachineTracingConfigurationDetails | undefined;

  /**
   * The type of the state machine (STANDARD or EXPRESS).
   *
   * @public
   */
  Type?: string | undefined;
}

/**
 * A match predicate. A predicate might look for characteristics such as specific IP addresses, geographic locations, or sizes.
 *
 * @public
 */
export interface AwsWafRateBasedRuleMatchPredicate {
  /**
   * The unique identifier for the predicate.
   *
   * @public
   */
  DataId?: string | undefined;

  /**
   * If set to `true`, then the rule actions are performed on requests that match the predicate settings.
   *
   * If set to `false`, then the rule actions are performed on all requests except those that match the predicate settings.
   *
   * @public
   */
  Negated?: boolean | undefined;

  /**
   * The type of predicate. Valid values are as follows:
   *
   * - `ByteMatch`
   * - `GeoMatch`
   * - `IPMatch`
   * - `RegexMatch`
   * - `SizeConstraint`
   * - `SqlInjectionMatch`
   * - `XssMatch`
   *
   * @public
   */
  Type?: string | undefined;
}

/**
 * Details about a rate-based rule for global resources. A rate-based rule provides settings to indicate when to allow, block, or count a request. Rate-based rules include the number of requests that arrive over a specified period of time.
 *
 * @public
 */
export interface AwsWafRateBasedRuleDetails {
  /**
   * The name of the metrics for the rate-based rule.
   *
   * @public
   */
  MetricName?: string | undefined;

  /**
   * The name of the rate-based rule.
   *
   * @public
   */
  Name?: string | undefined;

  /**
   * The field that WAF uses to determine whether requests are likely arriving from single source and are subject to rate monitoring.
   *
   * @public
   */
  RateKey?: string | undefined;

  /**
   * The maximum number of requests that have an identical value for the field specified in `RateKey` that are allowed within a five-minute period. If the number of requests exceeds `RateLimit` and the other predicates specified in the rule are met, WAF triggers the action for the rule.
   *
   * @public
   */
  RateLimit?: number | undefined;

  /**
   * The unique identifier for the rate-based rule.
   *
   * @public
   */
  RuleId?: string | undefined;

  /**
   * The predicates to include in the rate-based rule.
   *
   * @public
   */
  MatchPredicates?: AwsWafRateBasedRuleMatchPredicate[] | undefined;
}

/**
 * Details for a match predicate. A predicate might look for characteristics such as specific IP addresses, geographic locations, or sizes.
 *
 * @public
 */
export interface AwsWafRegionalRateBasedRuleMatchPredicate {
  /**
   * The unique identifier for the predicate.
   *
   * @public
   */
  DataId?: string | undefined;

  /**
   * If set to `true`, then the rule actions are performed on requests that match the predicate settings.
   *
   * If set to `false`, then the rule actions are performed on all requests except those that match the predicate settings.
   *
   * @public
   */
  Negated?: boolean | undefined;

  /**
   * The type of predicate. Valid values are as follows:
   *
   * - `ByteMatch`
   * - `GeoMatch`
   * - `IPMatch`
   * - `RegexMatch`
   * - `SizeConstraint`
   * - `SqlInjectionMatch`
   * - `XssMatch`
   *
   * @public
   */
  Type?: string | undefined;
}

/**
 * contains details about a rate-based rule for Regional resources. A rate-based rule provides settings to indicate when to allow, block, or count a request. Rate-based rules include the number of requests that arrive over a specified period of time.
 *
 * @public
 */
export interface AwsWafRegionalRateBasedRuleDetails {
  /**
   * The name of the metrics for the rate-based rule.
   *
   * @public
   */
  MetricName?: string | undefined;

  /**
   * The name of the rate-based rule.
   *
   * @public
   */
  Name?: string | undefined;

  /**
   * The field that WAF uses to determine whether requests are likely arriving from single source and are subject to rate monitoring.
   *
   * @public
   */
  RateKey?: string | undefined;

  /**
   * The maximum number of requests that have an identical value for the field specified in `RateKey` that are allowed within a five-minute period. If the number of requests exceeds `RateLimit` and the other predicates specified in the rule are met, WAF triggers the action for the rule.
   *
   * @public
   */
  RateLimit?: number | undefined;

  /**
   * The unique identifier for the rate-based rule.
   *
   * @public
   */
  RuleId?: string | undefined;

  /**
   * The predicates to include in the rate-based rule.
   *
   * @public
   */
  MatchPredicates?: AwsWafRegionalRateBasedRuleMatchPredicate[] | undefined;
}

/**
 * Provides details about the `ByteMatchSet`, `IPSet`, `SqlInjectionMatchSet`, `XssMatchSet`, `RegexMatchSet`, `GeoMatchSet`, and `SizeConstraintSet` objects that you want to add to a rule and, for each object, indicates whether you want to negate the settings.
 *
 * @public
 */
export interface AwsWafRegionalRulePredicateListDetails {
  /**
   * A unique identifier for a predicate in a rule, such as `ByteMatchSetId` or `IPSetId`.
   *
   * @public
   */
  DataId?: string | undefined;

  /**
   * Specifies if you want WAF to allow, block, or count requests based on the settings in the `ByteMatchSet`, `IPSet`, `SqlInjectionMatchSet`, `XssMatchSet`, `RegexMatchSet`, `GeoMatchSet`, or `SizeConstraintSet`.
   *
   * @public
   */
  Negated?: boolean | undefined;

  /**
   * The type of predicate in a rule, such as `ByteMatch` or `IPSet`.
   *
   * @public
   */
  Type?: string | undefined;
}

/**
 * Provides information about an WAF Regional rule. This rule identifies the web requests that you want to allow, block, or count.
 *
 * @public
 */
export interface AwsWafRegionalRuleDetails {
  /**
   * A name for the metrics for the rule.
   *
   * @public
   */
  MetricName?: string | undefined;

  /**
   * A descriptive name for the rule.
   *
   * @public
   */
  Name?: string | undefined;

  /**
   * Specifies the `ByteMatchSet`, `IPSet`, `SqlInjectionMatchSet`, `XssMatchSet`, `RegexMatchSet`, `GeoMatchSet`, and `SizeConstraintSet` objects that you want to add to a rule and, for each object, indicates whether you want to negate the settings.
   *
   * @public
   */
  PredicateList?: AwsWafRegionalRulePredicateListDetails[] | undefined;

  /**
   * The ID of the rule.
   *
   * @public
   */
  RuleId?: string | undefined;
}

/**
 * Describes the action that WAF should take on a web request when it matches the criteria defined in the rule.
 *
 * @public
 */
export interface AwsWafRegionalRuleGroupRulesActionDetails {
  /**
   * Specifies the `ByteMatchSet`, `IPSet`, `SqlInjectionMatchSet`, `XssMatchSet`, `RegexMatchSet`, `GeoMatchSet`, and `SizeConstraintSet` objects that you want to add to a rule and, for each object, indicates whether you want to negate the settings.
   *
   * @public
   */
  Type?: string | undefined;
}

/**
 * Provides information about the rules attached to a rule group
 *
 * @public
 */
export interface AwsWafRegionalRuleGroupRulesDetails {
  /**
   * The action that WAF should take on a web request when it matches the criteria defined in the rule.
   *
   * @public
   */
  Action?: AwsWafRegionalRuleGroupRulesActionDetails | undefined;

  /**
   * If you define more than one rule in a web ACL, WAF evaluates each request against the rules in order based on the value of `Priority`.
   *
   * @public
   */
  Priority?: number | undefined;

  /**
   * The ID for a rule.
   *
   * @public
   */
  RuleId?: string | undefined;

  /**
   * The type of rule in the rule group.
   *
   * @public
   */
  Type?: string | undefined;
}

/**
 * Provides information about an WAF Regional rule group. The rule group is a collection of rules for inspecting and controlling web requests.
 *
 * @public
 */
export interface AwsWafRegionalRuleGroupDetails {
  /**
   * A name for the metrics for this rule group.
   *
   * @public
   */
  MetricName?: string | undefined;

  /**
   * The descriptive name of the rule group.
   *
   * @public
   */
  Name?: string | undefined;

  /**
   * The ID of the rule group.
   *
   * @public
   */
  RuleGroupId?: string | undefined;

  /**
   * Provides information about the rule statements used to identify the web requests that you want to allow, block, or count.
   *
   * @public
   */
  Rules?: AwsWafRegionalRuleGroupRulesDetails[] | undefined;
}

/**
 * The action that WAF takes when a web request matches all conditions in the rule, such as allow, block, or count the request.
 *
 * @public
 */
export interface AwsWafRegionalWebAclRulesListActionDetails {
  /**
   * For actions that are associated with a rule, the action that WAF takes when a web request matches all conditions in a rule.
   *
   * @public
   */
  Type?: string | undefined;
}

/**
 * Provides details about the action to use in the place of the action that results from the rule group evaluation.
 *
 * @public
 */
export interface AwsWafRegionalWebAclRulesListOverrideActionDetails {
  /**
   * Overrides the rule evaluation result in the rule group.
   *
   * @public
   */
  Type?: string | undefined;
}

/**
 * A combination of `ByteMatchSet`, `IPSet`, and/or `SqlInjectionMatchSet` objects that identify the web requests that you want to allow, block, or count.
 *
 * @public
 */
export interface AwsWafRegionalWebAclRulesListDetails {
  /**
   * The action that WAF takes when a web request matches all conditions in the rule, such as allow, block, or count the request.
   *
   * @public
   */
  Action?: AwsWafRegionalWebAclRulesListActionDetails | undefined;

  /**
   * Overrides the rule evaluation result in the rule group.
   *
   * @public
   */
  OverrideAction?: AwsWafRegionalWebAclRulesListOverrideActionDetails | undefined;

  /**
   * The order in which WAF evaluates the rules in a web ACL.
   *
   * @public
   */
  Priority?: number | undefined;

  /**
   * The ID of an WAF Regional rule to associate with a web ACL.
   *
   * @public
   */
  RuleId?: string | undefined;

  /**
   * For actions that are associated with a rule, the action that WAF takes when a web request matches all conditions in a rule.
   *
   * @public
   */
  Type?: string | undefined;
}

/**
 * Provides information about the web access control list (web ACL). The web ACL contains the rules that identify the requests that you want to allow, block, or count.
 *
 * @public
 */
export interface AwsWafRegionalWebAclDetails {
  /**
   * The action to perform if none of the rules contained in the web ACL match.
   *
   * @public
   */
  DefaultAction?: string | undefined;

  /**
   * A name for the metrics for this web ACL.
   *
   * @public
   */
  MetricName?: string | undefined;

  /**
   * A descriptive name for the web ACL.
   *
   * @public
   */
  Name?: string | undefined;

  /**
   * An array that contains the action for each rule in a web ACL, the priority of the rule, and the ID of the rule.
   *
   * @public
   */
  RulesList?: AwsWafRegionalWebAclRulesListDetails[] | undefined;

  /**
   * The ID of the web ACL.
   *
   * @public
   */
  WebAclId?: string | undefined;
}

/**
 * Provides details about the `ByteMatchSet`, `IPSet`, `SqlInjectionMatchSet`, `XssMatchSet`, `RegexMatchSet`, `GeoMatchSet`, and `SizeConstraintSet` objects that you want to add to a rule and, for each object, indicates whether you want to negate the settings.
 *
 * @public
 */
export interface AwsWafRulePredicateListDetails {
  /**
   * A unique identifier for a predicate in a rule, such as `ByteMatchSetId` or `IPSetId`.
   *
   * @public
   */
  DataId?: string | undefined;

  /**
   * Specifies if you want WAF to allow, block, or count requests based on the settings in the `ByteMatchSet`, `IPSet`, `SqlInjectionMatchSet`, `XssMatchSet`, `RegexMatchSet`, `GeoMatchSet`, or `SizeConstraintSet`.
   *
   * @public
   */
  Negated?: boolean | undefined;

  /**
   * The type of predicate in a rule, such as `ByteMatch` or `IPSet`.
   *
   * @public
   */
  Type?: string | undefined;
}
