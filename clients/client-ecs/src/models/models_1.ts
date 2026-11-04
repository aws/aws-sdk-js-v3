// smithy-typescript generated code
import type {
  AccessType,
  AvailabilityZoneRebalancing,
  Compatibility,
  Connectivity,
  DeploymentRolloutState,
  EBSResourceType,
  ExpressCpuArchitecture,
  ExpressGatewayServiceInclude,
  GatewayRouteStatus,
  HealthStatus,
  IpcMode,
  LaunchType,
  ManagedAgentName,
  ManagedResourceStatus,
  NetworkMode,
  PidMode,
  PropagateTags,
  ResourceManagementType,
  ScaleUnit,
  SchedulingStrategy,
  ServiceDeploymentStatus,
  ServiceField,
  SortOrder,
  StabilityStatus,
  StopServiceDeploymentStopType,
  TaskDefinitionStatus,
  TaskField,
  TaskFilesystemType,
  TaskSetField,
  TaskStopCode,
} from "./enums";
import type {
  Attachment,
  Attribute,
  CapacityProviderStrategyItem,
  ContainerDefinition,
  CreatedAt,
  DeploymentConfiguration,
  DeploymentController,
  ECSExpressGatewayService,
  EnvironmentFile,
  EphemeralStorage,
  ExpressGatewayContainer,
  ExpressGatewayScalingTarget,
  ExpressGatewayServiceConfiguration,
  ExpressGatewayServiceNetworkConfiguration,
  ExpressGatewayServiceStatus,
  Failure,
  GatewayConnector,
  InferenceAccelerator,
  KeyValuePair,
  LoadBalancer,
  LogConfiguration,
  MonitoringConfiguration,
  NetworkBinding,
  NetworkConfiguration,
  PlacementConstraint,
  PlacementStrategy,
  ProxyConfiguration,
  ResourceRequirement,
  RuntimePlatform,
  ServiceConnectAccessLogConfiguration,
  ServiceConnectClientAlias,
  ServiceConnectContainerConfiguration,
  SharingStrategy,
  Tag,
  TaskDefinition,
  TaskDefinitionPlacementConstraint,
  Volume,
} from "./models_0";

/**
 * An object that represents the timeout configurations for Service Connect.
 *
 * > **Note:** If `idleTimeout` is set to a time that is less than `perRequestTimeout`, the connection will close when the `idleTimeout` is reached and not the `perRequestTimeout`.
 *
 * @public
 */
export interface TimeoutConfiguration {
  /**
   * The amount of time in seconds a connection will stay active while idle. A value of `0` can be set to disable `idleTimeout`.
   *
   * The `idleTimeout` default for `HTTP`/`HTTP2`/`GRPC` is 5 minutes.
   *
   * The `idleTimeout` default for `TCP` is 1 hour.
   *
   * @public
   */
  idleTimeoutSeconds?: number | undefined;

  /**
   * The amount of time waiting for the upstream to respond with a complete response per request. A value of `0` can be set to disable `perRequestTimeout`. `perRequestTimeout` can only be set if Service Connect `appProtocol` isn't `TCP`. Only `idleTimeout` is allowed for `TCP` `appProtocol`.
   *
   * @public
   */
  perRequestTimeoutSeconds?: number | undefined;
}

/**
 * The certificate root authority that secures your service.
 *
 * @public
 */
export interface ServiceConnectTlsCertificateAuthority {
  /**
   * The ARN of the Amazon Web Services Private Certificate Authority certificate.
   *
   * @public
   */
  awsPcaAuthorityArn?: string | undefined;
}

/**
 * The key that encrypts and decrypts your resources for Service Connect TLS.
 *
 * @public
 */
export interface ServiceConnectTlsConfiguration {
  /**
   * The signer certificate authority.
   *
   * @public
   */
  issuerCertificateAuthority: ServiceConnectTlsCertificateAuthority | undefined;

  /**
   * The Amazon Web Services Key Management Service key.
   *
   * @public
   */
  kmsKey?: string | undefined;

  /**
   * The Amazon Resource Name (ARN) of the IAM role that's associated with the Service Connect TLS.
   *
   * @public
   */
  roleArn?: string | undefined;
}

/**
 * The Service Connect service object configuration. For more information, see [Service Connect](https://docs.aws.amazon.com/AmazonECS/latest/developerguide/service-connect.html) in the *Amazon Elastic Container Service Developer Guide*.
 *
 * @public
 */
export interface ServiceConnectService {
  /**
   * The `portName` must match the name of one of the `portMappings` from all the containers in the task definition of this Amazon ECS service.
   *
   * @public
   */
  portName: string | undefined;

  /**
   * The `discoveryName` is the name of the new Cloud Map service that Amazon ECS creates for this Amazon ECS service. This must be unique within the Cloud Map namespace. The name can contain up to 64 characters. The name can include lowercase letters, numbers, underscores (_), and hyphens (-). The name can't start with a hyphen.
   *
   * If the `discoveryName` isn't specified, the port mapping name from the task definition is used in `portName.namespace`.
   *
   * @public
   */
  discoveryName?: string | undefined;

  /**
   * The list of client aliases for this Service Connect service. You use these to assign names that can be used by client applications. The maximum number of client aliases that you can have in this list is 1.
   *
   * Each alias ("endpoint") is a fully-qualified name and port number that other Amazon ECS tasks ("clients") can use to connect to this service.
   *
   * Each name and port mapping must be unique within the namespace.
   *
   * For each `ServiceConnectService`, you must provide at least one `clientAlias` with one `port`.
   *
   * @public
   */
  clientAliases?: ServiceConnectClientAlias[] | undefined;

  /**
   * The port number for the Service Connect proxy to listen on.
   *
   * Use the value of this field to bypass the proxy for traffic on the port number specified in the named `portMapping` in the task definition of this application, and then use it in your VPC security groups to allow traffic into the proxy for this Amazon ECS service.
   *
   * In `awsvpc` mode and Fargate, the default value is the container port number. The container port number is in the `portMapping` in the task definition. In bridge mode, the default value is the ephemeral port of the Service Connect proxy.
   *
   * @public
   */
  ingressPortOverride?: number | undefined;

  /**
   * A reference to an object that represents the configured timeouts for Service Connect.
   *
   * @public
   */
  timeout?: TimeoutConfiguration | undefined;

  /**
   * A reference to an object that represents a Transport Layer Security (TLS) configuration.
   *
   * @public
   */
  tls?: ServiceConnectTlsConfiguration | undefined;
}

/**
 * The Service Connect configuration of your Amazon ECS service. The configuration for this service to discover and connect to services, and be discovered by, and connected from, other services within a namespace.
 *
 * Tasks that run in a namespace can use short names to connect to services in the namespace. Tasks can connect to services across all of the clusters in the namespace. Tasks connect through a managed proxy container that collects logs and metrics for increased visibility. Only the tasks that Amazon ECS services create are supported with Service Connect. For more information, see [Service Connect](https://docs.aws.amazon.com/AmazonECS/latest/developerguide/service-connect.html) in the *Amazon Elastic Container Service Developer Guide*.
 *
 * @public
 */
export interface ServiceConnectConfiguration {
  /**
   * Specifies whether to use Service Connect with this service.
   *
   * @public
   */
  enabled: boolean | undefined;

  /**
   * The namespace name or full Amazon Resource Name (ARN) of the Cloud Map namespace for use with Service Connect. The namespace must be in the same Amazon Web Services Region as the Amazon ECS service and cluster. The type of namespace doesn't affect Service Connect. For more information about Cloud Map, see [Working with Services](https://docs.aws.amazon.com/cloud-map/latest/dg/working-with-services.html) in the *Cloud Map Developer Guide*.
   *
   * @public
   */
  namespace?: string | undefined;

  /**
   * The list of Service Connect service objects. These are names and aliases (also known as endpoints) that are used by other Amazon ECS services to connect to this service.
   *
   * This field is not required for a "client" Amazon ECS service that's a member of a namespace only to connect to other services within the namespace. An example of this would be a frontend application that accepts incoming requests from either a load balancer that's attached to the service or by other means.
   *
   * An object selects a port from the task definition, assigns a name for the Cloud Map service, and a list of aliases (endpoints) and ports for client applications to refer to this service.
   *
   * @public
   */
  services?: ServiceConnectService[] | undefined;

  /**
   * The log configuration for the container. This parameter maps to `LogConfig` in the docker container create command and the `--log-driver` option to docker run.
   *
   * By default, containers use the same logging driver that the Docker daemon uses. However, the container might use a different logging driver than the Docker daemon by specifying a log driver configuration in the container definition.
   *
   * Understand the following when specifying a log configuration for your containers.
   *
   * - Amazon ECS currently supports a subset of the logging drivers available to the Docker daemon. Additional log drivers may be available in future releases of the Amazon ECS container agent.
   *
   *   For tasks on Fargate, the supported log drivers are `awslogs`, `splunk`, and `awsfirelens`.
   *
   *   For tasks hosted on Amazon EC2 instances, the supported log drivers are `awslogs`, `fluentd`, `gelf`, `json-file`, `journald`,`syslog`, `splunk`, and `awsfirelens`.
   * - This parameter requires version 1.18 of the Docker Remote API or greater on your container instance.
   * - For tasks that are hosted on Amazon EC2 instances, the Amazon ECS container agent must register the available logging drivers with the `ECS_AVAILABLE_LOGGING_DRIVERS` environment variable before containers placed on that instance can use these log configuration options. For more information, see [Amazon ECS container agent configuration](https://docs.aws.amazon.com/AmazonECS/latest/developerguide/ecs-agent-config.html) in the *Amazon Elastic Container Service Developer Guide*.
   * - For tasks that are on Fargate, because you don't have access to the underlying infrastructure your tasks are hosted on, any additional software needed must be installed outside of the task. For example, the Fluentd output aggregators or a remote host running Logstash to send Gelf logs to.
   *
   * @public
   */
  logConfiguration?: LogConfiguration | undefined;

  /**
   * The configuration for Service Connect access logging. Access logs capture detailed information about requests made to your service, including request patterns, response codes, and timing data. They can be useful for debugging connectivity issues, monitoring service performance, and auditing service-to-service communication for security and compliance purposes.
   *
   * > **Note:** To enable access logs, you must also specify a `logConfiguration` in the `serviceConnectConfiguration`.
   *
   * @public
   */
  accessLogConfiguration?: ServiceConnectAccessLogConfiguration | undefined;

  /**
   * The settings for the Service Connect proxy container that Amazon ECS adds to each task in this service. Each object in the list sets exactly one setting, and each setting can appear only once in the list.
   *
   * Your changes to these settings apply only to tasks that Amazon ECS launches after you update the service. Your running tasks keep their existing settings until Amazon ECS replaces them. If you update the `serviceConnectConfiguration` of your service and don't include `containerConfigurations`, the proxy container settings return to their defaults.
   *
   * @public
   */
  containerConfigurations?: ServiceConnectContainerConfiguration[] | undefined;
}

/**
 * The details for the service registry.
 *
 * Each service may be associated with one service registry. Multiple service registries for each service are not supported.
 *
 * When you add, update, or remove the service registries configuration, Amazon ECS starts a new deployment. New tasks are registered and deregistered to the updated service registry configuration.
 *
 * @public
 */
export interface ServiceRegistry {
  /**
   * The Amazon Resource Name (ARN) of the service registry. The currently supported service registry is Cloud Map. For more information, see [CreateService](https://docs.aws.amazon.com/cloud-map/latest/api/API_CreateService.html).
   *
   * @public
   */
  registryArn?: string | undefined;

  /**
   * The port value used if your service discovery service specified an SRV record. This field might be used if both the `awsvpc` network mode and SRV records are used.
   *
   * @public
   */
  port?: number | undefined;

  /**
   * The container name value to be used for your service discovery service. It's already specified in the task definition. If the task definition that your service task specifies uses the `bridge` or `host` network mode, you must specify a `containerName` and `containerPort` combination from the task definition. If the task definition that your service task specifies uses the `awsvpc` network mode and a type SRV DNS record is used, you must specify either a `containerName` and `containerPort` combination or a `port` value. However, you can't specify both.
   *
   * @public
   */
  containerName?: string | undefined;

  /**
   * The port value to be used for your service discovery service. It's already specified in the task definition. If the task definition your service task specifies uses the `bridge` or `host` network mode, you must specify a `containerName` and `containerPort` combination from the task definition. If the task definition your service task specifies uses the `awsvpc` network mode and a type SRV DNS record is used, you must specify either a `containerName` and `containerPort` combination or a `port` value. However, you can't specify both.
   *
   * @public
   */
  containerPort?: number | undefined;
}

/**
 * The tag specifications of an Amazon EBS volume.
 *
 * @public
 */
export interface EBSTagSpecification {
  /**
   * The type of volume resource.
   *
   * @public
   */
  resourceType: EBSResourceType | undefined;

  /**
   * The tags applied to this Amazon EBS volume. `AmazonECSCreated` and `AmazonECSManaged` are reserved tags that can't be used.
   *
   * @public
   */
  tags?: Tag[] | undefined;

  /**
   * Determines whether to propagate the tags from the task definition to the Amazon EBS volume. Tags can only propagate to a `SERVICE` specified in `ServiceVolumeConfiguration`. If no value is specified, the tags aren't propagated.
   *
   * @public
   */
  propagateTags?: PropagateTags | undefined;
}

/**
 * The configuration for the Amazon EBS volume that Amazon ECS creates and manages on your behalf. These settings are used to create each Amazon EBS volume, with one volume created for each task in the service. For information about the supported launch types and operating systems, see [Supported operating systems and launch types](https://docs.aws.amazon.com/AmazonECS/latest/developerguide/ebs-volumes.html#ebs-volumes-configuration) in the *Amazon Elastic Container Service Developer Guide*.
 *
 * Many of these parameters map 1:1 with the Amazon EBS `CreateVolume` API request parameters.
 *
 * @public
 */
export interface ServiceManagedEBSVolumeConfiguration {
  /**
   * Indicates whether the volume should be encrypted. If you turn on Region-level Amazon EBS encryption by default but set this value as `false`, the setting is overridden and the volume is encrypted with the KMS key specified for Amazon EBS encryption by default. This parameter maps 1:1 with the `Encrypted` parameter of the [CreateVolume API](https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_CreateVolume.html) in the *Amazon EC2 API Reference*.
   *
   * @public
   */
  encrypted?: boolean | undefined;

  /**
   * The Amazon Resource Name (ARN) identifier of the Amazon Web Services Key Management Service key to use for Amazon EBS encryption. When a key is specified using this parameter, it overrides Amazon EBS default encryption or any KMS key that you specified for cluster-level managed storage encryption. This parameter maps 1:1 with the `KmsKeyId` parameter of the [CreateVolume API](https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_CreateVolume.html) in the *Amazon EC2 API Reference*. For more information about encrypting Amazon EBS volumes attached to tasks, see [Encrypt data stored in Amazon EBS volumes attached to Amazon ECS tasks](https://docs.aws.amazon.com/AmazonECS/latest/developerguide/ebs-kms-encryption.html).
   *
   * > **Important:** Amazon Web Services authenticates the Amazon Web Services Key Management Service key asynchronously. Therefore, if you specify an ID, alias, or ARN that is invalid, the action can appear to complete, but eventually fails.
   *
   * @public
   */
  kmsKeyId?: string | undefined;

  /**
   * The volume type. This parameter maps 1:1 with the `VolumeType` parameter of the [CreateVolume API](https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_CreateVolume.html) in the *Amazon EC2 API Reference*. For more information, see [Amazon EBS volume types](https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/ebs-volume-types.html) in the *Amazon EC2 User Guide*.
   *
   * The following are the supported volume types.
   *
   * - General Purpose SSD: `gp2`|`gp3`
   * - Provisioned IOPS SSD: `io1`|`io2`
   * - Throughput Optimized HDD: `st1`
   * - Cold HDD: `sc1`
   * - Magnetic: `standard`
   *
   *   > **Note:** The magnetic volume type is not supported on Fargate.
   *
   * @public
   */
  volumeType?: string | undefined;

  /**
   * The size of the volume in GiB. You must specify either a volume size or a snapshot ID. If you specify a snapshot ID, the snapshot size is used for the volume size by default. You can optionally specify a volume size greater than or equal to the snapshot size. This parameter maps 1:1 with the `Size` parameter of the [CreateVolume API](https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_CreateVolume.html) in the *Amazon EC2 API Reference*.
   *
   * The following are the supported volume size values for each volume type.
   *
   * - `gp2` and `gp3`: 1-16,384
   * - `io1` and `io2`: 4-16,384
   * - `st1` and `sc1`: 125-16,384
   * - `standard`: 1-1,024
   *
   * @public
   */
  sizeInGiB?: number | undefined;

  /**
   * The snapshot that Amazon ECS uses to create volumes for attachment to tasks maintained by the service. You must specify either `snapshotId` or `sizeInGiB` in your volume configuration. This parameter maps 1:1 with the `SnapshotId` parameter of the [CreateVolume API](https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_CreateVolume.html) in the *Amazon EC2 API Reference*.
   *
   * @public
   */
  snapshotId?: string | undefined;

  /**
   * The rate, in MiB/s, at which data is fetched from a snapshot of an existing EBS volume to create new volumes for attachment to the tasks maintained by the service. This property can be specified only if you specify a `snapshotId`. For more information, see [Initialize Amazon EBS volumes](https://docs.aws.amazon.com/ebs/latest/userguide/initalize-volume.html) in the *Amazon EBS User Guide*.
   *
   * @public
   */
  volumeInitializationRate?: number | undefined;

  /**
   * The number of I/O operations per second (IOPS). For `gp3`, `io1`, and `io2` volumes, this represents the number of IOPS that are provisioned for the volume. For `gp2` volumes, this represents the baseline performance of the volume and the rate at which the volume accumulates I/O credits for bursting.
   *
   * The following are the supported values for each volume type.
   *
   * - `gp3`: 3,000 - 16,000 IOPS
   * - `io1`: 100 - 64,000 IOPS
   * - `io2`: 100 - 256,000 IOPS
   *
   * This parameter is required for `io1` and `io2` volume types. The default for `gp3` volumes is `3,000 IOPS`. This parameter is not supported for `st1`, `sc1`, or `standard` volume types.
   *
   * This parameter maps 1:1 with the `Iops` parameter of the [CreateVolume API](https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_CreateVolume.html) in the *Amazon EC2 API Reference*.
   *
   * @public
   */
  iops?: number | undefined;

  /**
   * The throughput to provision for a volume, in MiB/s, with a maximum of 1,000 MiB/s. This parameter maps 1:1 with the `Throughput` parameter of the [CreateVolume API](https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_CreateVolume.html) in the *Amazon EC2 API Reference*.
   *
   * > **Important:** This parameter is only supported for the `gp3` volume type.
   *
   * @public
   */
  throughput?: number | undefined;

  /**
   * The tags to apply to the volume. Amazon ECS applies service-managed tags by default. This parameter maps 1:1 with the `TagSpecifications.N` parameter of the [CreateVolume API](https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_CreateVolume.html) in the *Amazon EC2 API Reference*.
   *
   * @public
   */
  tagSpecifications?: EBSTagSpecification[] | undefined;

  /**
   * The ARN of the IAM role to associate with this volume. This is the Amazon ECS infrastructure IAM role that is used to manage your Amazon Web Services infrastructure. We recommend using the Amazon ECS-managed `AmazonECSInfrastructureRolePolicyForVolumes` IAM policy with this role. For more information, see [Amazon ECS infrastructure IAM role](https://docs.aws.amazon.com/AmazonECS/latest/developerguide/infrastructure_IAM_role.html) in the *Amazon ECS Developer Guide*.
   *
   * @public
   */
  roleArn: string | undefined;

  /**
   * The filesystem type for the volume. For volumes created from a snapshot, you must specify the same filesystem type that the volume was using when the snapshot was created. If there is a filesystem type mismatch, the tasks will fail to start.
   *
   * The available Linux filesystem types are `ext3`, `ext4`, and `xfs`. If no value is specified, the `xfs` filesystem type is used by default.
   *
   * The available Windows filesystem types are `NTFS`.
   *
   * @public
   */
  filesystemType?: TaskFilesystemType | undefined;
}

/**
 * The configuration for a volume specified in the task definition as a volume that is configured at launch time. Currently, the only supported volume type is an Amazon EBS volume.
 *
 * @public
 */
export interface ServiceVolumeConfiguration {
  /**
   * The name of the volume. This value must match the volume name from the `Volume` object in the task definition.
   *
   * @public
   */
  name: string | undefined;

  /**
   * The configuration for the Amazon EBS volume that Amazon ECS creates and manages on your behalf. These settings are used to create each Amazon EBS volume, with one volume created for each task in the service. The Amazon EBS volumes are visible in your account in the Amazon EC2 console once they are created.
   *
   * @public
   */
  managedEBSVolume?: ServiceManagedEBSVolumeConfiguration | undefined;
}

/**
 * The advanced settings for VPC Lattice used in blue/green deployments. Specify the alternate target group and listener rules required for traffic shifting during blue/green deployments. For more information, see [Required resources for Amazon ECS blue/green deployments](https://docs.aws.amazon.com/AmazonECS/latest/developerguide/blue-green-deployment-implementation.html) in the *Amazon Elastic Container Service Developer Guide*.
 *
 * @public
 */
export interface VpcLatticeAdvancedConfiguration {
  /**
   * The Amazon Resource Name (ARN) of the alternate target group associated with the VPC Lattice Configuration for Amazon ECS blue/green deployments.
   *
   * @public
   */
  alternateTargetGroupArn?: string | undefined;

  /**
   * The Amazon Resource Name (ARN) that identifies the production listener rule or listener for routing production traffic.
   *
   * @public
   */
  productionListenerRule?: string | undefined;

  /**
   * The Amazon Resource Name (ARN) that identifies the test listener rule or listener for routing test traffic.
   *
   * @public
   */
  testListenerRule?: string | undefined;
}

/**
 * The VPC Lattice configuration for your service that holds the information for the target group(s) Amazon ECS tasks will be registered to.
 *
 * @public
 */
export interface VpcLatticeConfiguration {
  /**
   * The ARN of the IAM role to associate with this VPC Lattice configuration. This is the Amazon ECS infrastructure IAM role that is used to manage your VPC Lattice infrastructure.
   *
   * @public
   */
  roleArn: string | undefined;

  /**
   * The full Amazon Resource Name (ARN) of the target group or groups associated with the VPC Lattice configuration that the Amazon ECS tasks will be registered to.
   *
   * @public
   */
  targetGroupArn: string | undefined;

  /**
   * The name of the port mapping to register in the VPC Lattice target group. This is the name of the `portMapping` you defined in your task definition.
   *
   * @public
   */
  portName: string | undefined;

  /**
   * The advanced settings for VPC Lattice used in blue/green deployments. Specify the alternate target group and listener rules required for traffic shifting during blue/green deployments. For more information, see [Required resources for Amazon ECS blue/green deployments](https://docs.aws.amazon.com/AmazonECS/latest/developerguide/blue-green-deployment-implementation.html) in the *Amazon Elastic Container Service Developer Guide*.
   *
   * @public
   */
  advancedConfiguration?: VpcLatticeAdvancedConfiguration | undefined;
}

/**
 *
 * @public
 */
export interface CreateServiceRequest {
  /**
   * The short name or full Amazon Resource Name (ARN) of the cluster that you run your service on. If you do not specify a cluster, the default cluster is assumed.
   *
   * @public
   */
  cluster?: string | undefined;

  /**
   * The name of your service. Up to 255 letters (uppercase and lowercase), numbers, underscores, and hyphens are allowed. Service names must be unique within a cluster, but you can have similarly named services in multiple clusters within a Region or across multiple Regions.
   *
   * @public
   */
  serviceName: string | undefined;

  /**
   * The `family` and `revision` (`family:revision`) or full ARN of the task definition to run in your service. If a `revision` isn't specified, the latest `ACTIVE` revision is used.
   *
   * A task definition must be specified if the service uses either the `ECS` or `CODE_DEPLOY` deployment controllers.
   *
   * For more information about deployment types, see [Amazon ECS deployment types](https://docs.aws.amazon.com/AmazonECS/latest/developerguide/deployment-types.html).
   *
   * @public
   */
  taskDefinition?: string | undefined;

  /**
   * Indicates whether to use Availability Zone rebalancing for the service.
   *
   * For more information, see [Balancing an Amazon ECS service across Availability Zones](https://docs.aws.amazon.com/AmazonECS/latest/developerguide/service-rebalancing.html) in the **Amazon Elastic Container Service Developer Guide** .
   *
   * The default behavior of `AvailabilityZoneRebalancing` differs between create and update requests:
   *
   * - For create service requests, when no value is specified for `AvailabilityZoneRebalancing`, Amazon ECS defaults the value to `ENABLED`.
   * - For update service requests, when no value is specified for `AvailabilityZoneRebalancing`, Amazon ECS defaults to the existing service’s `AvailabilityZoneRebalancing` value. If the service never had an `AvailabilityZoneRebalancing` value set, Amazon ECS treats this as `DISABLED`.
   *
   * @public
   */
  availabilityZoneRebalancing?: AvailabilityZoneRebalancing | undefined;

  /**
   * A load balancer object representing the load balancers to use with your service. For more information, see [Service load balancing](https://docs.aws.amazon.com/AmazonECS/latest/developerguide/service-load-balancing.html) in the *Amazon Elastic Container Service Developer Guide*.
   *
   * If the service uses the `ECS` deployment controller and using either an Application Load Balancer or Network Load Balancer, you must specify one or more target group ARNs to attach to the service. The service-linked role is required for services that use multiple target groups. For more information, see [Using service-linked roles for Amazon ECS](https://docs.aws.amazon.com/AmazonECS/latest/developerguide/using-service-linked-roles.html) in the *Amazon Elastic Container Service Developer Guide*.
   *
   * If the service uses the `CODE_DEPLOY` deployment controller, the service is required to use either an Application Load Balancer or Network Load Balancer. When creating an CodeDeploy deployment group, you specify two target groups (referred to as a `targetGroupPair`). During a deployment, CodeDeploy determines which task set in your service has the status `PRIMARY`, and it associates one target group with it. Then, it also associates the other target group with the replacement task set. The load balancer can also have up to two listeners: a required listener for production traffic and an optional listener that you can use to perform validation tests with Lambda functions before routing production traffic to it.
   *
   * If you use the `CODE_DEPLOY` deployment controller, these values can be changed when updating the service.
   *
   * For Application Load Balancers and Network Load Balancers, this object must contain the load balancer target group ARN, the container name, and the container port to access from the load balancer. The container name must be as it appears in a container definition. The load balancer name parameter must be omitted. When a task from this service is placed on a container instance, the container instance and port combination is registered as a target in the target group that's specified here.
   *
   * For Classic Load Balancers, this object must contain the load balancer name, the container name , and the container port to access from the load balancer. The container name must be as it appears in a container definition. The target group ARN parameter must be omitted. When a task from this service is placed on a container instance, the container instance is registered with the load balancer that's specified here.
   *
   * Services with tasks that use the `awsvpc` network mode (for example, those with the Fargate launch type) only support Application Load Balancers and Network Load Balancers. Classic Load Balancers aren't supported. Also, when you create any target groups for these services, you must choose `ip` as the target type, not `instance`. This is because tasks that use the `awsvpc` network mode are associated with an elastic network interface, not an Amazon EC2 instance.
   *
   * @public
   */
  loadBalancers?: LoadBalancer[] | undefined;

  /**
   * The details of the service discovery registry to associate with this service. For more information, see [Service discovery](https://docs.aws.amazon.com/AmazonECS/latest/developerguide/service-discovery.html).
   *
   * > **Note:** Each service may be associated with one service registry. Multiple service registries for each service isn't supported.
   *
   * @public
   */
  serviceRegistries?: ServiceRegistry[] | undefined;

  /**
   * The number of instantiations of the specified task definition to place and keep running in your service.
   *
   * This is required if `schedulingStrategy` is `REPLICA` or isn't specified. If `schedulingStrategy` is `DAEMON` then this isn't required.
   *
   * @public
   */
  desiredCount?: number | undefined;

  /**
   * An identifier that you provide to ensure the idempotency of the request. It must be unique and is case sensitive. Up to 36 ASCII characters in the range of 33-126 (inclusive) are allowed.
   *
   * @public
   */
  clientToken?: string | undefined;

  /**
   * The infrastructure that you run your service on. For more information, see [Amazon ECS launch types](https://docs.aws.amazon.com/AmazonECS/latest/developerguide/launch_types.html) in the *Amazon Elastic Container Service Developer Guide*.
   *
   * > **Note:** If you want to use Amazon ECS Managed Instances, you must use the `capacityProviderStrategy` request parameter and omit the `launchType` request parameter.
   *
   * The `FARGATE` launch type runs your tasks on Fargate On-Demand infrastructure.
   *
   * > **Note:** Fargate Spot infrastructure is available for use but a capacity provider strategy must be used. For more information, see [Fargate capacity providers](https://docs.aws.amazon.com/AmazonECS/latest/developerguide/fargate-capacity-providers.html) in the *Amazon ECS Developer Guide*.
   *
   * The `EC2` launch type runs your tasks on Amazon EC2 instances registered to your cluster.
   *
   * The `EXTERNAL` launch type runs your tasks on your on-premises server or virtual machine (VM) capacity registered to your cluster.
   *
   * A service can use either a launch type or a capacity provider strategy. If a `launchType` is specified, the `capacityProviderStrategy` parameter must be omitted.
   *
   * @public
   */
  launchType?: LaunchType | undefined;

  /**
   * The capacity provider strategy to use for the service.
   *
   * > **Note:** If you want to use Amazon ECS Managed Instances, you must use the `capacityProviderStrategy` request parameter and omit the `launchType` request parameter.
   *
   * If a `capacityProviderStrategy` is specified, the `launchType` parameter must be omitted. If no `capacityProviderStrategy` or `launchType` is specified, the `defaultCapacityProviderStrategy` for the cluster is used.
   *
   * A capacity provider strategy can contain a maximum of 20 capacity providers.
   *
   * @public
   */
  capacityProviderStrategy?: CapacityProviderStrategyItem[] | undefined;

  /**
   * The platform version that your tasks in the service are running on. A platform version is specified only for tasks using the Fargate launch type. If one isn't specified, the `LATEST` platform version is used. For more information, see [Fargate platform versions](https://docs.aws.amazon.com/AmazonECS/latest/developerguide/platform_versions.html) in the *Amazon Elastic Container Service Developer Guide*.
   *
   * @public
   */
  platformVersion?: string | undefined;

  /**
   * The name or full Amazon Resource Name (ARN) of the IAM role that allows Amazon ECS to make calls to your load balancer on your behalf. This parameter is only permitted if you are using a load balancer with your service and your task definition doesn't use the `awsvpc` network mode. If you specify the `role` parameter, you must also specify a load balancer object with the `loadBalancers` parameter.
   *
   * > **Important:** If your account has already created the Amazon ECS service-linked role, that role is used for your service unless you specify a role here. The service-linked role is required if your task definition uses the `awsvpc` network mode or if the service is configured to use service discovery, an external deployment controller, multiple target groups, or Elastic Inference accelerators in which case you don't specify a role here. For more information, see [Using service-linked roles for Amazon ECS](https://docs.aws.amazon.com/AmazonECS/latest/developerguide/using-service-linked-roles.html) in the *Amazon Elastic Container Service Developer Guide*.
   *
   * If your specified role has a path other than `/`, then you must either specify the full role ARN (this is recommended) or prefix the role name with the path. For example, if a role with the name `bar` has a path of `/foo/` then you would specify `/foo/bar` as the role name. For more information, see [Friendly names and paths](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_identifiers.html#identifiers-friendly-names) in the *IAM User Guide*.
   *
   * @public
   */
  role?: string | undefined;

  /**
   * Optional deployment parameters that control how many tasks run during the deployment and the ordering of stopping and starting tasks.
   *
   * @public
   */
  deploymentConfiguration?: DeploymentConfiguration | undefined;

  /**
   * An array of placement constraint objects to use for tasks in your service. You can specify a maximum of 10 constraints for each task. This limit includes constraints in the task definition and those specified at runtime.
   *
   * @public
   */
  placementConstraints?: PlacementConstraint[] | undefined;

  /**
   * The placement strategy objects to use for tasks in your service. You can specify a maximum of 5 strategy rules for each service.
   *
   * @public
   */
  placementStrategy?: PlacementStrategy[] | undefined;

  /**
   * The network configuration for the service. This parameter is required for task definitions that use the `awsvpc` network mode to receive their own elastic network interface, and it isn't supported for other network modes. For more information, see [Task networking](https://docs.aws.amazon.com/AmazonECS/latest/developerguide/task-networking.html) in the *Amazon Elastic Container Service Developer Guide*.
   *
   * @public
   */
  networkConfiguration?: NetworkConfiguration | undefined;

  /**
   * The period of time, in seconds, that the Amazon ECS service scheduler ignores unhealthy Elastic Load Balancing, VPC Lattice, and container health checks after a task has first started. If you do not specify a health check grace period value, the default value of 0 is used. If you do not use any of the health checks, then `healthCheckGracePeriodSeconds` is unused.
   *
   * If your service has more running tasks than desired, unhealthy tasks in the grace period might be stopped to reach the desired count.
   *
   * @public
   */
  healthCheckGracePeriodSeconds?: number | undefined;

  /**
   * The scheduling strategy to use for the service. For more information, see [Services](https://docs.aws.amazon.com/AmazonECS/latest/developerguide/ecs_services.html).
   *
   * There are two service scheduler strategies available:
   *
   * - `REPLICA`-The replica scheduling strategy places and maintains the desired number of tasks across your cluster. By default, the service scheduler spreads tasks across Availability Zones. You can use task placement strategies and constraints to customize task placement decisions. This scheduler strategy is required if the service uses the `CODE_DEPLOY` or `EXTERNAL` deployment controller types.
   * - `DAEMON`-The daemon scheduling strategy deploys exactly one task on each active container instance that meets all of the task placement constraints that you specify in your cluster. The service scheduler also evaluates the task placement constraints for running tasks and will stop tasks that don't meet the placement constraints. When you're using this strategy, you don't need to specify a desired number of tasks, a task placement strategy, or use Service Auto Scaling policies.
   *
   *   > **Note:** Tasks using the Fargate launch type or the `CODE_DEPLOY` or `EXTERNAL` deployment controller types don't support the `DAEMON` scheduling strategy.
   *
   * @public
   */
  schedulingStrategy?: SchedulingStrategy | undefined;

  /**
   * The deployment controller to use for the service. If no deployment controller is specified, the default value of `ECS` is used.
   *
   * @public
   */
  deploymentController?: DeploymentController | undefined;

  /**
   * The metadata that you apply to the service to help you categorize and organize them. Each tag consists of a key and an optional value, both of which you define. When a service is deleted, the tags are deleted as well.
   *
   * The following basic restrictions apply to tags:
   *
   * - Maximum number of tags per resource - 50
   * - For each resource, each tag key must be unique, and each tag key can have only one value.
   * - Maximum key length - 128 Unicode characters in UTF-8
   * - Maximum value length - 256 Unicode characters in UTF-8
   * - If your tagging schema is used across multiple services and resources, remember that other services may have restrictions on allowed characters. Generally allowed characters are: letters, numbers, and spaces representable in UTF-8, and the following characters: + - = . _ : / @.
   * - Tag keys and values are case-sensitive.
   * - Do not use `aws:`, `AWS:`, or any upper or lowercase combination of such as a prefix for either keys or values as it is reserved for Amazon Web Services use. You cannot edit or delete tag keys or values with this prefix. Tags with this prefix do not count against your tags per resource limit.
   *
   * @public
   */
  tags?: Tag[] | undefined;

  /**
   * Specifies whether to turn on Amazon ECS managed tags for the tasks within the service. For more information, see [Tagging your Amazon ECS resources](https://docs.aws.amazon.com/AmazonECS/latest/developerguide/ecs-using-tags.html) in the *Amazon Elastic Container Service Developer Guide*.
   *
   * When you use Amazon ECS managed tags, you must set the `propagateTags` request parameter.
   *
   * @public
   */
  enableECSManagedTags?: boolean | undefined;

  /**
   * Specifies whether to propagate the tags from the task definition to the task. If no value is specified, the tags aren't propagated. Tags can only be propagated to the task during task creation. To add tags to a task after task creation, use the [TagResource](https://docs.aws.amazon.com/AmazonECS/latest/APIReference/API_TagResource.html) API action.
   *
   * You must set this to a value other than `NONE` when you use Cost Explorer. For more information, see [Amazon ECS usage reports](https://docs.aws.amazon.com/AmazonECS/latest/developerguide/usage-reports.html) in the *Amazon Elastic Container Service Developer Guide*.
   *
   * The default is `NONE`.
   *
   * @public
   */
  propagateTags?: PropagateTags | undefined;

  /**
   * Determines whether the execute command functionality is turned on for the service. If `true`, this enables execute command functionality on all containers in the service tasks.
   *
   * @public
   */
  enableExecuteCommand?: boolean | undefined;

  /**
   * The configuration for this service to discover and connect to services, and be discovered by, and connected from, other services within a namespace.
   *
   * Tasks that run in a namespace can use short names to connect to services in the namespace. Tasks can connect to services across all of the clusters in the namespace. Tasks connect through a managed proxy container that collects logs and metrics for increased visibility. Only the tasks that Amazon ECS services create are supported with Service Connect. For more information, see [Service Connect](https://docs.aws.amazon.com/AmazonECS/latest/developerguide/service-connect.html) in the *Amazon Elastic Container Service Developer Guide*.
   *
   * @public
   */
  serviceConnectConfiguration?: ServiceConnectConfiguration | undefined;

  /**
   * The configuration for a volume specified in the task definition as a volume that is configured at launch time. Currently, the only supported volume type is an Amazon EBS volume.
   *
   * @public
   */
  volumeConfigurations?: ServiceVolumeConfiguration[] | undefined;

  /**
   * The VPC Lattice configuration for the service being created.
   *
   * @public
   */
  vpcLatticeConfigurations?: VpcLatticeConfiguration[] | undefined;

  /**
   * The gateway connectors that attach the service to a gateway ingress path. You can specify at most one gateway connector.
   *
   * @public
   */
  gatewayConnectors?: GatewayConnector[] | undefined;

  /**
   * The optional monitoring configuration for the service, which defines the resolution for the service-level `CPUUtilization` and `MemoryUtilization` Amazon CloudWatch metrics. When not specified, Amazon ECS uses the default resolution of `60` seconds.
   *
   * @public
   */
  monitoring?: MonitoringConfiguration | undefined;
}

/**
 * The summary of the current service revision configuration
 *
 * @public
 */
export interface ServiceCurrentRevisionSummary {
  /**
   * The ARN of the current service revision.
   *
   * @public
   */
  arn?: string | undefined;

  /**
   * The number of requested tasks in the current service revision
   *
   * @public
   */
  requestedTaskCount?: number | undefined;

  /**
   * The number of running tasks of the current service revision
   *
   * @public
   */
  runningTaskCount?: number | undefined;

  /**
   * The number of pending tasks in the current service revision
   *
   * @public
   */
  pendingTaskCount?: number | undefined;
}

/**
 * The amount of ephemeral storage to allocate for the deployment.
 *
 * @public
 */
export interface DeploymentEphemeralStorage {
  /**
   * Specify an Key Management Service key ID to encrypt the ephemeral storage for deployment.
   *
   * @public
   */
  kmsKeyId?: string | undefined;
}

/**
 * The Service Connect resource. Each configuration maps a discovery name to a Cloud Map service name. The data is stored in Cloud Map as part of the Service Connect configuration for each discovery name of this Amazon ECS service.
 *
 * A task can resolve the `dnsName` for each of the `clientAliases` of a service. However a task can't resolve the discovery names. If you want to connect to a service, refer to the `ServiceConnectConfiguration` of that service for the list of `clientAliases` that you can use.
 *
 * @public
 */
export interface ServiceConnectServiceResource {
  /**
   * The discovery name of this Service Connect resource.
   *
   * The `discoveryName` is the name of the new Cloud Map service that Amazon ECS creates for this Amazon ECS service. This must be unique within the Cloud Map namespace. The name can contain up to 64 characters. The name can include lowercase letters, numbers, underscores (_), and hyphens (-). The name can't start with a hyphen.
   *
   * If the `discoveryName` isn't specified, the port mapping name from the task definition is used in `portName.namespace`.
   *
   * @public
   */
  discoveryName?: string | undefined;

  /**
   * The Amazon Resource Name (ARN) for the service in Cloud Map that matches the discovery name for this Service Connect resource. You can use this ARN in other integrations with Cloud Map. However, Service Connect can't ensure connectivity outside of Amazon ECS.
   *
   * @public
   */
  discoveryArn?: string | undefined;
}

/**
 * The details of an Amazon ECS service deployment. This is used only when a service uses the `ECS` deployment controller type.
 *
 * @public
 */
export interface Deployment {
  /**
   * The ID of the deployment.
   *
   * @public
   */
  id?: string | undefined;

  /**
   * The status of the deployment. The following describes each state.
   *
   * - **PRIMARY**
   *
   *   The most recent deployment of a service.
   *
   * - **ACTIVE**
   *
   *   A service deployment that still has running tasks, but are in the process of being replaced with a new `PRIMARY` deployment.
   *
   * - **INACTIVE**
   *
   *   A deployment that has been completely replaced.
   *
   * @public
   */
  status?: string | undefined;

  /**
   * The most recent task definition that was specified for the tasks in the service to use.
   *
   * @public
   */
  taskDefinition?: string | undefined;

  /**
   * The most recent desired count of tasks that was specified for the service to deploy or maintain.
   *
   * @public
   */
  desiredCount?: number | undefined;

  /**
   * The number of tasks in the deployment that are in the `PENDING` status.
   *
   * @public
   */
  pendingCount?: number | undefined;

  /**
   * The number of tasks in the deployment that are in the `RUNNING` status.
   *
   * @public
   */
  runningCount?: number | undefined;

  /**
   * The number of consecutively failed tasks in the deployment. A task is considered a failure if the service scheduler can't launch the task, the task doesn't transition to a `RUNNING` state, or if it fails any of its defined health checks and is stopped.
   *
   * > **Note:** Once a service deployment has one or more successfully running tasks, the failed task count resets to zero and stops being evaluated.
   *
   * @public
   */
  failedTasks?: number | undefined;

  /**
   * The Unix timestamp for the time when the service deployment was created.
   *
   * @public
   */
  createdAt?: Date | undefined;

  /**
   * The Unix timestamp for the time when the service deployment was last updated.
   *
   * @public
   */
  updatedAt?: Date | undefined;

  /**
   * The capacity provider strategy that the deployment is using.
   *
   * @public
   */
  capacityProviderStrategy?: CapacityProviderStrategyItem[] | undefined;

  /**
   * The launch type the tasks in the service are using. For more information, see [Amazon ECS Launch Types](https://docs.aws.amazon.com/AmazonECS/latest/developerguide/launch_types.html) in the *Amazon Elastic Container Service Developer Guide*.
   *
   * @public
   */
  launchType?: LaunchType | undefined;

  /**
   * The platform version that your tasks in the service run on. A platform version is only specified for tasks using the Fargate launch type. If one isn't specified, the `LATEST` platform version is used. For more information, see [Fargate Platform Versions](https://docs.aws.amazon.com/AmazonECS/latest/developerguide/platform_versions.html) in the *Amazon Elastic Container Service Developer Guide*.
   *
   * @public
   */
  platformVersion?: string | undefined;

  /**
   * The operating system that your tasks in the service, or tasks are running on. A platform family is specified only for tasks using the Fargate launch type.
   *
   * All tasks that run as part of this service must use the same `platformFamily` value as the service, for example, `LINUX.`.
   *
   * @public
   */
  platformFamily?: string | undefined;

  /**
   * The VPC subnet and security group configuration for tasks that receive their own elastic network interface by using the `awsvpc` networking mode.
   *
   * @public
   */
  networkConfiguration?: NetworkConfiguration | undefined;

  /**
   * > **Note:** The `rolloutState` of a service is only returned for services that use the rolling update (`ECS`) deployment type that aren't behind a Classic Load Balancer.
   *
   * The rollout state of the deployment. When a service deployment is started, it begins in an `IN_PROGRESS` state. When the service reaches a steady state, the deployment transitions to a `COMPLETED` state. If the service fails to reach a steady state and circuit breaker is turned on, the deployment transitions to a `FAILED` state. A deployment in `FAILED` state doesn't launch any new tasks. For more information, see [DeploymentCircuitBreaker](https://docs.aws.amazon.com/AmazonECS/latest/APIReference/API_DeploymentCircuitBreaker.html).
   *
   * @public
   */
  rolloutState?: DeploymentRolloutState | undefined;

  /**
   * A description of the rollout state of a deployment.
   *
   * @public
   */
  rolloutStateReason?: string | undefined;

  /**
   * The details of the Service Connect configuration that's used by this deployment. Compare the configuration between multiple deployments when troubleshooting issues with new deployments.
   *
   * The configuration for this service to discover and connect to services, and be discovered by, and connected from, other services within a namespace.
   *
   * Tasks that run in a namespace can use short names to connect to services in the namespace. Tasks can connect to services across all of the clusters in the namespace. Tasks connect through a managed proxy container that collects logs and metrics for increased visibility. Only the tasks that Amazon ECS services create are supported with Service Connect. For more information, see [Service Connect](https://docs.aws.amazon.com/AmazonECS/latest/developerguide/service-connect.html) in the *Amazon Elastic Container Service Developer Guide*.
   *
   * @public
   */
  serviceConnectConfiguration?: ServiceConnectConfiguration | undefined;

  /**
   * The list of Service Connect resources that are associated with this deployment. Each list entry maps a discovery name to a Cloud Map service name.
   *
   * @public
   */
  serviceConnectResources?: ServiceConnectServiceResource[] | undefined;

  /**
   * The details of the volume that was `configuredAtLaunch`. You can configure different settings like the size, throughput, volumeType, and ecryption in [ServiceManagedEBSVolumeConfiguration](https://docs.aws.amazon.com/AmazonECS/latest/APIReference/API_ServiceManagedEBSVolumeConfiguration.html). The `name` of the volume must match the `name` from the task definition.
   *
   * @public
   */
  volumeConfigurations?: ServiceVolumeConfiguration[] | undefined;

  /**
   * The Fargate ephemeral storage settings for the deployment.
   *
   * @public
   */
  fargateEphemeralStorage?: DeploymentEphemeralStorage | undefined;

  /**
   * The VPC Lattice configuration for the service deployment.
   *
   * @public
   */
  vpcLatticeConfigurations?: VpcLatticeConfiguration[] | undefined;
}

/**
 * The details for an event that's associated with a service.
 *
 * @public
 */
export interface ServiceEvent {
  /**
   * The ID string for the event.
   *
   * @public
   */
  id?: string | undefined;

  /**
   * The Unix timestamp for the time when the event was triggered.
   *
   * @public
   */
  createdAt?: Date | undefined;

  /**
   * The event message.
   *
   * @public
   */
  message?: string | undefined;
}

/**
 * A floating-point percentage of the desired number of tasks to place and keep running in the task set.
 *
 * @public
 */
export interface Scale {
  /**
   * The value, specified as a percent total of a service's `desiredCount`, to scale the task set. Accepted values are numbers between 0 and 100.
   *
   * @public
   */
  value?: number | undefined;

  /**
   * The unit of measure for the scale value.
   *
   * @public
   */
  unit?: ScaleUnit | undefined;
}

/**
 * Information about a set of Amazon ECS tasks in either an CodeDeploy or an `EXTERNAL` deployment. An Amazon ECS task set includes details such as the desired number of tasks, how many tasks are running, and whether the task set serves production traffic.
 *
 * @public
 */
export interface TaskSet {
  /**
   * The ID of the task set.
   *
   * @public
   */
  id?: string | undefined;

  /**
   * The Amazon Resource Name (ARN) of the task set.
   *
   * @public
   */
  taskSetArn?: string | undefined;

  /**
   * The Amazon Resource Name (ARN) of the service the task set exists in.
   *
   * @public
   */
  serviceArn?: string | undefined;

  /**
   * The Amazon Resource Name (ARN) of the cluster that the service that hosts the task set exists in.
   *
   * @public
   */
  clusterArn?: string | undefined;

  /**
   * The tag specified when a task set is started. If an CodeDeploy deployment created the task set, the `startedBy` parameter is `CODE_DEPLOY`. If an external deployment created the task set, the `startedBy` field isn't used.
   *
   * @public
   */
  startedBy?: string | undefined;

  /**
   * The external ID associated with the task set.
   *
   * If an CodeDeploy deployment created a task set, the `externalId` parameter contains the CodeDeploy deployment ID.
   *
   * If a task set is created for an external deployment and is associated with a service discovery registry, the `externalId` parameter contains the `ECS_TASK_SET_EXTERNAL_ID` Cloud Map attribute.
   *
   * @public
   */
  externalId?: string | undefined;

  /**
   * The status of the task set. The following describes each state.
   *
   * - **PRIMARY**
   *
   *   The task set is serving production traffic.
   *
   * - **ACTIVE**
   *
   *   The task set isn't serving production traffic.
   *
   * - **DRAINING**
   *
   *   The tasks in the task set are being stopped, and their corresponding targets are being deregistered from their target group.
   *
   * @public
   */
  status?: string | undefined;

  /**
   * The task definition that the task set is using.
   *
   * @public
   */
  taskDefinition?: string | undefined;

  /**
   * The computed desired count for the task set. This is calculated by multiplying the service's `desiredCount` by the task set's `scale` percentage. The result is always rounded up. For example, if the computed desired count is 1.2, it rounds up to 2 tasks.
   *
   * @public
   */
  computedDesiredCount?: number | undefined;

  /**
   * The number of tasks in the task set that are in the `PENDING` status during a deployment. A task in the `PENDING` state is preparing to enter the `RUNNING` state. A task set enters the `PENDING` status when it launches for the first time or when it's restarted after being in the `STOPPED` state.
   *
   * @public
   */
  pendingCount?: number | undefined;

  /**
   * The number of tasks in the task set that are in the `RUNNING` status during a deployment. A task in the `RUNNING` state is running and ready for use.
   *
   * @public
   */
  runningCount?: number | undefined;

  /**
   * The Unix timestamp for the time when the task set was created.
   *
   * @public
   */
  createdAt?: Date | undefined;

  /**
   * The Unix timestamp for the time when the task set was last updated.
   *
   * @public
   */
  updatedAt?: Date | undefined;

  /**
   * The launch type the tasks in the task set are using. For more information, see [Amazon ECS launch types](https://docs.aws.amazon.com/AmazonECS/latest/developerguide/launch_types.html) in the *Amazon Elastic Container Service Developer Guide*.
   *
   * @public
   */
  launchType?: LaunchType | undefined;

  /**
   * The capacity provider strategy that are associated with the task set.
   *
   * @public
   */
  capacityProviderStrategy?: CapacityProviderStrategyItem[] | undefined;

  /**
   * The Fargate platform version where the tasks in the task set are running. A platform version is only specified for tasks run on Fargate. For more information, see [Fargate platform versions](https://docs.aws.amazon.com/AmazonECS/latest/developerguide/platform_versions.html) in the *Amazon Elastic Container Service Developer Guide*.
   *
   * @public
   */
  platformVersion?: string | undefined;

  /**
   * The operating system that your tasks in the set are running on. A platform family is specified only for tasks that use the Fargate launch type.
   *
   * All tasks in the set must have the same value.
   *
   * @public
   */
  platformFamily?: string | undefined;

  /**
   * The network configuration for the task set.
   *
   * @public
   */
  networkConfiguration?: NetworkConfiguration | undefined;

  /**
   * Details on a load balancer that are used with a task set.
   *
   * @public
   */
  loadBalancers?: LoadBalancer[] | undefined;

  /**
   * The details for the service discovery registries to assign to this task set. For more information, see [Service discovery](https://docs.aws.amazon.com/AmazonECS/latest/developerguide/service-discovery.html).
   *
   * @public
   */
  serviceRegistries?: ServiceRegistry[] | undefined;

  /**
   * A floating-point percentage of your desired number of tasks to place and keep running in the task set.
   *
   * @public
   */
  scale?: Scale | undefined;

  /**
   * The stability status. This indicates whether the task set has reached a steady state. If the following conditions are met, the task set are in `STEADY_STATE`:
   *
   * - The task `runningCount` is equal to the `computedDesiredCount`.
   * - The `pendingCount` is `0`.
   * - There are no tasks that are running on container instances in the `DRAINING` status.
   * - All tasks are reporting a healthy status from the load balancers, service discovery, and container health checks.
   *
   * If any of those conditions aren't met, the stability status returns `STABILIZING`.
   *
   * @public
   */
  stabilityStatus?: StabilityStatus | undefined;

  /**
   * The Unix timestamp for the time when the task set stability status was retrieved.
   *
   * @public
   */
  stabilityStatusAt?: Date | undefined;

  /**
   * The metadata that you apply to the task set to help you categorize and organize them. Each tag consists of a key and an optional value. You define both.
   *
   * The following basic restrictions apply to tags:
   *
   * - Maximum number of tags per resource - 50
   * - For each resource, each tag key must be unique, and each tag key can have only one value.
   * - Maximum key length - 128 Unicode characters in UTF-8
   * - Maximum value length - 256 Unicode characters in UTF-8
   * - If your tagging schema is used across multiple services and resources, remember that other services may have restrictions on allowed characters. Generally allowed characters are: letters, numbers, and spaces representable in UTF-8, and the following characters: + - = . _ : / @.
   * - Tag keys and values are case-sensitive.
   * - Do not use `aws:`, `AWS:`, or any upper or lowercase combination of such as a prefix for either keys or values as it is reserved for Amazon Web Services use. You cannot edit or delete tag keys or values with this prefix. Tags with this prefix do not count against your tags per resource limit.
   *
   * @public
   */
  tags?: Tag[] | undefined;

  /**
   * The Fargate ephemeral storage settings for the task set.
   *
   * @public
   */
  fargateEphemeralStorage?: DeploymentEphemeralStorage | undefined;
}

/**
 * Details on a service within a cluster.
 *
 * @public
 */
export interface Service {
  /**
   * The ARN that identifies the service. For more information about the ARN format, see [Amazon Resource Name (ARN)](https://docs.aws.amazon.com/AmazonECS/latest/developerguide/ecs-account-settings.html#ecs-resource-ids) in the *Amazon ECS Developer Guide*.
   *
   * @public
   */
  serviceArn?: string | undefined;

  /**
   * The name of your service. Up to 255 letters (uppercase and lowercase), numbers, underscores, and hyphens are allowed. Service names must be unique within a cluster. However, you can have similarly named services in multiple clusters within a Region or across multiple Regions.
   *
   * @public
   */
  serviceName?: string | undefined;

  /**
   * The Amazon Resource Name (ARN) of the cluster that hosts the service.
   *
   * @public
   */
  clusterArn?: string | undefined;

  /**
   * A list of Elastic Load Balancing load balancer objects. It contains the load balancer name, the container name, and the container port to access from the load balancer. The container name is as it appears in a container definition.
   *
   * @public
   */
  loadBalancers?: LoadBalancer[] | undefined;

  /**
   * The details for the service discovery registries to assign to this service. For more information, see [Service Discovery](https://docs.aws.amazon.com/AmazonECS/latest/developerguide/service-discovery.html).
   *
   * @public
   */
  serviceRegistries?: ServiceRegistry[] | undefined;

  /**
   * The status of the service. The valid values are `ACTIVE`, `DRAINING`, or `INACTIVE`.
   *
   * @public
   */
  status?: string | undefined;

  /**
   * The desired number of instantiations of the task definition to keep running on the service. This value is specified when the service is created with [CreateService](https://docs.aws.amazon.com/AmazonECS/latest/APIReference/API_CreateService.html) , and it can be modified with [UpdateService](https://docs.aws.amazon.com/AmazonECS/latest/APIReference/API_UpdateService.html).
   *
   * @public
   */
  desiredCount?: number | undefined;

  /**
   * The number of tasks in the cluster that are in the `RUNNING` state.
   *
   * @public
   */
  runningCount?: number | undefined;

  /**
   * The number of tasks in the cluster that are in the `PENDING` state.
   *
   * @public
   */
  pendingCount?: number | undefined;

  /**
   * The launch type the service is using. When using the DescribeServices API, this field is omitted if the service was created using a capacity provider strategy.
   *
   * @public
   */
  launchType?: LaunchType | undefined;

  /**
   * The capacity provider strategy the service uses. When using the DescribeServices API, this field is omitted if the service was created using a launch type.
   *
   * @public
   */
  capacityProviderStrategy?: CapacityProviderStrategyItem[] | undefined;

  /**
   * The platform version to run your service on. A platform version is only specified for tasks that are hosted on Fargate. If one isn't specified, the `LATEST` platform version is used. For more information, see [Fargate Platform Versions](https://docs.aws.amazon.com/AmazonECS/latest/developerguide/platform_versions.html) in the *Amazon Elastic Container Service Developer Guide*.
   *
   * @public
   */
  platformVersion?: string | undefined;

  /**
   * The operating system that your tasks in the service run on. A platform family is specified only for tasks using the Fargate launch type.
   *
   * All tasks that run as part of this service must use the same `platformFamily` value as the service (for example, `LINUX`).
   *
   * @public
   */
  platformFamily?: string | undefined;

  /**
   * The task definition to use for tasks in the service. This value is specified when the service is created with [CreateService](https://docs.aws.amazon.com/AmazonECS/latest/APIReference/API_CreateService.html), and it can be modified with [UpdateService](https://docs.aws.amazon.com/AmazonECS/latest/APIReference/API_UpdateService.html).
   *
   * @public
   */
  taskDefinition?: string | undefined;

  /**
   * Optional deployment parameters that control how many tasks run during the deployment and the ordering of stopping and starting tasks.
   *
   * @public
   */
  deploymentConfiguration?: DeploymentConfiguration | undefined;

  /**
   * Information about a set of Amazon ECS tasks in either an CodeDeploy or an `EXTERNAL` deployment. An Amazon ECS task set includes details such as the desired number of tasks, how many tasks are running, and whether the task set serves production traffic.
   *
   * @public
   */
  taskSets?: TaskSet[] | undefined;

  /**
   * The current state of deployments for the service.
   *
   * @public
   */
  deployments?: Deployment[] | undefined;

  /**
   * The ARN of the IAM role that's associated with the service. It allows the Amazon ECS container agent to register container instances with an Elastic Load Balancing load balancer.
   *
   * @public
   */
  roleArn?: string | undefined;

  /**
   * The event stream for your service. A maximum of 100 of the latest events are displayed.
   *
   * @public
   */
  events?: ServiceEvent[] | undefined;

  /**
   * The Unix timestamp for the time when the service was created.
   *
   * @public
   */
  createdAt?: Date | undefined;

  /**
   * The ARN of the current service deployment.
   *
   * @public
   */
  currentServiceDeployment?: string | undefined;

  /**
   * The list of the service revisions.
   *
   * @public
   */
  currentServiceRevisions?: ServiceCurrentRevisionSummary[] | undefined;

  /**
   * The placement constraints for the tasks in the service.
   *
   * @public
   */
  placementConstraints?: PlacementConstraint[] | undefined;

  /**
   * The placement strategy that determines how tasks for the service are placed.
   *
   * @public
   */
  placementStrategy?: PlacementStrategy[] | undefined;

  /**
   * The VPC subnet and security group configuration for tasks that receive their own elastic network interface by using the `awsvpc` networking mode.
   *
   * @public
   */
  networkConfiguration?: NetworkConfiguration | undefined;

  /**
   * The period of time, in seconds, that the Amazon ECS service scheduler ignores unhealthy Elastic Load Balancing, VPC Lattice, and container health checks after a task has first started.
   *
   * If your service has more running tasks than desired, unhealthy tasks in the grace period might be stopped to reach the desired count.
   *
   * @public
   */
  healthCheckGracePeriodSeconds?: number | undefined;

  /**
   * The scheduling strategy to use for the service. For more information, see [Services](https://docs.aws.amazon.com/AmazonECS/latest/developerguide/ecs_services.html).
   *
   * There are two service scheduler strategies available.
   *
   * - `REPLICA`-The replica scheduling strategy places and maintains the desired number of tasks across your cluster. By default, the service scheduler spreads tasks across Availability Zones. You can use task placement strategies and constraints to customize task placement decisions.
   * - `DAEMON`-The daemon scheduling strategy deploys exactly one task on each active container instance. This task meets all of the task placement constraints that you specify in your cluster. The service scheduler also evaluates the task placement constraints for running tasks. It stop tasks that don't meet the placement constraints.
   *
   *   > **Note:** Fargate tasks don't support the `DAEMON` scheduling strategy.
   *
   * @public
   */
  schedulingStrategy?: SchedulingStrategy | undefined;

  /**
   * The deployment controller type the service is using.
   *
   * @public
   */
  deploymentController?: DeploymentController | undefined;

  /**
   * The metadata that you apply to the service to help you categorize and organize them. Each tag consists of a key and an optional value. You define bot the key and value.
   *
   * The following basic restrictions apply to tags:
   *
   * - Maximum number of tags per resource - 50
   * - For each resource, each tag key must be unique, and each tag key can have only one value.
   * - Maximum key length - 128 Unicode characters in UTF-8
   * - Maximum value length - 256 Unicode characters in UTF-8
   * - If your tagging schema is used across multiple services and resources, remember that other services may have restrictions on allowed characters. Generally allowed characters are: letters, numbers, and spaces representable in UTF-8, and the following characters: + - = . _ : / @.
   * - Tag keys and values are case-sensitive.
   * - Do not use `aws:`, `AWS:`, or any upper or lowercase combination of such as a prefix for either keys or values as it is reserved for Amazon Web Services use. You cannot edit or delete tag keys or values with this prefix. Tags with this prefix do not count against your tags per resource limit.
   *
   * @public
   */
  tags?: Tag[] | undefined;

  /**
   * The principal that created the service.
   *
   * @public
   */
  createdBy?: string | undefined;

  /**
   * Determines whether to use Amazon ECS managed tags for the tasks in the service. For more information, see [Tagging Your Amazon ECS Resources](https://docs.aws.amazon.com/AmazonECS/latest/developerguide/ecs-using-tags.html) in the *Amazon Elastic Container Service Developer Guide*.
   *
   * @public
   */
  enableECSManagedTags?: boolean | undefined;

  /**
   * Determines whether to propagate the tags from the task definition or the service to the task. If no value is specified, the tags aren't propagated.
   *
   * @public
   */
  propagateTags?: PropagateTags | undefined;

  /**
   * Determines whether the execute command functionality is turned on for the service. If `true`, the execute command functionality is turned on for all containers in tasks as part of the service.
   *
   * @public
   */
  enableExecuteCommand?: boolean | undefined;

  /**
   * Indicates whether to use Availability Zone rebalancing for the service.
   *
   * For more information, see [Balancing an Amazon ECS service across Availability Zones](https://docs.aws.amazon.com/AmazonECS/latest/developerguide/service-rebalancing.html) in the **Amazon Elastic Container Service Developer Guide** .
   *
   * The default behavior of `AvailabilityZoneRebalancing` differs between create and update requests:
   *
   * - For create service requests, when no value is specified for `AvailabilityZoneRebalancing`, Amazon ECS defaults the value to `ENABLED`.
   * - For update service requests, when no value is specified for `AvailabilityZoneRebalancing`, Amazon ECS defaults to the existing service’s `AvailabilityZoneRebalancing` value. If the service never had an `AvailabilityZoneRebalancing` value set, Amazon ECS treats this as `DISABLED`.
   *
   * @public
   */
  availabilityZoneRebalancing?: AvailabilityZoneRebalancing | undefined;

  /**
   * Identifies whether an ECS Service is an Express Service managed by ECS, or managed by the customer. The valid values are `ECS` and `CUSTOMER`
   *
   * @public
   */
  resourceManagementType?: ResourceManagementType | undefined;
}

/**
 *
 * @public
 */
export interface CreateServiceResponse {
  /**
   * The full description of your service following the create call.
   *
   * A service will return either a `capacityProviderStrategy` or `launchType` parameter, but not both, depending where one was specified when it was created.
   *
   * If a service is using the `ECS` deployment controller, the `deploymentController` and `taskSets` parameters will not be returned.
   *
   * if the service uses the `CODE_DEPLOY` deployment controller, the `deploymentController`, `taskSets` and `deployments` parameters will be returned, however the `deployments` parameter will be an empty list.
   *
   * The response includes a `lifecycleHookDetails` field, which is an empty array when the service is created or updated. The values are populated when a lifecycle hook executes and are available as part of the service deployment details ([DescribeServiceDeployments](https://docs.aws.amazon.com/AmazonECS/latest/APIReference/API_DescribeServiceDeployments.html)).
   *
   * @public
   */
  service?: Service | undefined;
}

/**
 * @public
 */
export interface DeleteExpressGatewayServiceRequest {
  /**
   * The Amazon Resource Name (ARN) of the Express service to delete. The ARN uniquely identifies the service within your Amazon Web Services account and region.
   *
   * @public
   */
  serviceArn: string | undefined;
}

/**
 * @public
 */
export interface DeleteExpressGatewayServiceResponse {
  /**
   * The full description of the deleted express service.
   *
   * @public
   */
  service?: ECSExpressGatewayService | undefined;
}

/**
 *
 * @public
 */
export interface DeleteServiceRequest {
  /**
   * The short name or full Amazon Resource Name (ARN) of the cluster that hosts the service to delete. If you do not specify a cluster, the default cluster is assumed.
   *
   * @public
   */
  cluster?: string | undefined;

  /**
   * The name of the service to delete.
   *
   * @public
   */
  service: string | undefined;

  /**
   * If `true`, allows you to delete a service even if it wasn't scaled down to zero tasks. It's only necessary to use this if the service uses the `REPLICA` scheduling strategy.
   *
   * @public
   */
  force?: boolean | undefined;
}

/**
 *
 * @public
 */
export interface DeleteServiceResponse {
  /**
   * The full description of the deleted service.
   *
   * @public
   */
  service?: Service | undefined;
}

/**
 * @public
 */
export interface DescribeExpressGatewayServiceRequest {
  /**
   * The Amazon Resource Name (ARN) of the Express service to describe. The ARN uniquely identifies the service within your Amazon Web Services account and region.
   *
   * @public
   */
  serviceArn: string | undefined;

  /**
   * Specifies additional information to include in the response. Valid values are `TAGS` to include resource tags associated with the Express service.
   *
   * @public
   */
  include?: ExpressGatewayServiceInclude[] | undefined;
}

/**
 * @public
 */
export interface DescribeExpressGatewayServiceResponse {
  /**
   * The full description of the described express service.
   *
   * @public
   */
  service?: ECSExpressGatewayService | undefined;
}

/**
 *
 * @public
 */
export interface DescribeServicesRequest {
  /**
   * The short name or full Amazon Resource Name (ARN)the cluster that hosts the service to describe. If you do not specify a cluster, the default cluster is assumed. This parameter is required if the service or services you are describing were launched in any cluster other than the default cluster.
   *
   * @public
   */
  cluster?: string | undefined;

  /**
   * A list of services to describe. You may specify up to 10 services to describe in a single operation.
   *
   * @public
   */
  services: string[] | undefined;

  /**
   * Determines whether you want to see the resource tags for the service. If `TAGS` is specified, the tags are included in the response. If this field is omitted, tags aren't included in the response.
   *
   * @public
   */
  include?: ServiceField[] | undefined;
}

/**
 *
 * @public
 */
export interface DescribeServicesResponse {
  /**
   * The list of services described.
   *
   * @public
   */
  services?: Service[] | undefined;

  /**
   * Any failures associated with the call.
   *
   * @public
   */
  failures?: Failure[] | undefined;
}

/**
 * @public
 */
export interface ListServiceDeploymentsRequest {
  /**
   * The ARN or name of the service
   *
   * @public
   */
  service: string | undefined;

  /**
   * The cluster that hosts the service. This can either be the cluster name or ARN. Starting April 15, 2023, Amazon Web Services will not onboard new customers to Amazon Elastic Inference (EI), and will help current customers migrate their workloads to options that offer better price and performance. If you don't specify a cluster, `default` is used.
   *
   * @public
   */
  cluster?: string | undefined;

  /**
   * An optional filter you can use to narrow the results. If you do not specify a status, then all status values are included in the result.
   *
   * @public
   */
  status?: ServiceDeploymentStatus[] | undefined;

  /**
   * An optional filter you can use to narrow the results by the service creation date. If you do not specify a value, the result includes all services created before the current time. The format is yyyy-MM-dd HH:mm:ss.SSSSSS.
   *
   * @public
   */
  createdAt?: CreatedAt | undefined;

  /**
   * The `nextToken` value returned from a `ListServiceDeployments` request indicating that more results are available to fulfill the request and further calls are needed. If you provided `maxResults`, it's possible the number of results is fewer than `maxResults`.
   *
   * @public
   */
  nextToken?: string | undefined;

  /**
   * The maximum number of service deployment results that `ListServiceDeployments` returned in paginated output. When this parameter is used, `ListServiceDeployments` only returns `maxResults` results in a single page along with a `nextToken` response element. The remaining results of the initial request can be seen by sending another `ListServiceDeployments` request with the returned `nextToken` value. This value can be between 1 and 100. If this parameter isn't used, then `ListServiceDeployments` returns up to 20 results and a `nextToken` value if applicable.
   *
   * @public
   */
  maxResults?: number | undefined;
}

/**
 * The service deployment properties that are retured when you call `ListServiceDeployments`.
 *
 * This provides a high-level overview of the service deployment.
 *
 * @public
 */
export interface ServiceDeploymentBrief {
  /**
   * The ARN of the service deployment.
   *
   * @public
   */
  serviceDeploymentArn?: string | undefined;

  /**
   * The ARN of the service for this service deployment.
   *
   * @public
   */
  serviceArn?: string | undefined;

  /**
   * The ARN of the cluster that hosts the service.
   *
   * @public
   */
  clusterArn?: string | undefined;

  /**
   * The time that the service deployment statred. The format is yyyy-MM-dd HH:mm:ss.SSSSSS.
   *
   * @public
   */
  startedAt?: Date | undefined;

  /**
   * The time that the service deployment was created. The format is yyyy-MM-dd HH:mm:ss.SSSSSS.
   *
   * @public
   */
  createdAt?: Date | undefined;

  /**
   * The time that the service deployment completed. The format is yyyy-MM-dd HH:mm:ss.SSSSSS.
   *
   * @public
   */
  finishedAt?: Date | undefined;

  /**
   * The ARN of the service revision being deplyed.
   *
   * @public
   */
  targetServiceRevisionArn?: string | undefined;

  /**
   * The status of the service deployment
   *
   * @public
   */
  status?: ServiceDeploymentStatus | undefined;

  /**
   * Information about why the service deployment is in the current status. For example, the circuit breaker detected a deployment failure.
   *
   * @public
   */
  statusReason?: string | undefined;
}

/**
 * @public
 */
export interface ListServiceDeploymentsResponse {
  /**
   * An overview of the service deployment, including the following properties:
   *
   * - The ARN of the service deployment.
   * - The ARN of the service being deployed.
   * - The ARN of the cluster that hosts the service in the service deployment.
   * - The time that the service deployment started.
   * - The time that the service deployment completed.
   * - The service deployment status.
   * - Information about why the service deployment is in the current state.
   * - The ARN of the service revision that is being deployed.
   *
   * @public
   */
  serviceDeployments?: ServiceDeploymentBrief[] | undefined;

  /**
   * The `nextToken` value to include in a future `ListServiceDeployments` request. When the results of a `ListServiceDeployments` request exceed `maxResults`, this value can be used to retrieve the next page of results. This value is null when there are no more results to return.
   *
   * @public
   */
  nextToken?: string | undefined;
}

/**
 *
 * @public
 */
export interface ListServicesRequest {
  /**
   * The short name or full Amazon Resource Name (ARN) of the cluster to use when filtering the `ListServices` results. If you do not specify a cluster, the default cluster is assumed.
   *
   * @public
   */
  cluster?: string | undefined;

  /**
   * The `nextToken` value returned from a `ListServices` request indicating that more results are available to fulfill the request and further calls will be needed. If `maxResults` was provided, it is possible the number of results to be fewer than `maxResults`.
   *
   * > **Note:** This token should be treated as an opaque identifier that is only used to retrieve the next items in a list and not for other programmatic purposes.
   *
   * @public
   */
  nextToken?: string | undefined;

  /**
   * The maximum number of service results that `ListServices` returned in paginated output. When this parameter is used, `ListServices` only returns `maxResults` results in a single page along with a `nextToken` response element. The remaining results of the initial request can be seen by sending another `ListServices` request with the returned `nextToken` value. This value can be between 1 and 100. If this parameter isn't used, then `ListServices` returns up to 10 results and a `nextToken` value if applicable.
   *
   * @public
   */
  maxResults?: number | undefined;

  /**
   * The launch type to use when filtering the `ListServices` results.
   *
   * @public
   */
  launchType?: LaunchType | undefined;

  /**
   * The scheduling strategy to use when filtering the `ListServices` results.
   *
   * @public
   */
  schedulingStrategy?: SchedulingStrategy | undefined;

  /**
   * The resourceManagementType type to use when filtering the `ListServices` results.
   *
   * @public
   */
  resourceManagementType?: ResourceManagementType | undefined;
}

/**
 *
 * @public
 */
export interface ListServicesResponse {
  /**
   * The list of full ARN entries for each service that's associated with the specified cluster.
   *
   * @public
   */
  serviceArns?: string[] | undefined;

  /**
   * The `nextToken` value to include in a future `ListServices` request. When the results of a `ListServices` request exceed `maxResults`, this value can be used to retrieve the next page of results. This value is `null` when there are no more results to return.
   *
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * @public
 */
export interface StopServiceDeploymentRequest {
  /**
   * The ARN of the service deployment that you want to stop.
   *
   * @public
   */
  serviceDeploymentArn: string | undefined;

  /**
   * How you want Amazon ECS to stop the service.
   *
   * The valid values are `ROLLBACK`.
   *
   * @public
   */
  stopType?: StopServiceDeploymentStopType | undefined;
}

/**
 * @public
 */
export interface StopServiceDeploymentResponse {
  /**
   * The ARN of the stopped service deployment.
   *
   * @public
   */
  serviceDeploymentArn?: string | undefined;
}

/**
 * @public
 */
export interface UpdateExpressGatewayServiceRequest {
  /**
   * The Amazon Resource Name (ARN) of the Express service to update.
   *
   * @public
   */
  serviceArn: string | undefined;

  /**
   * The Amazon Resource Name (ARN) of the task execution role for the Express service.
   *
   * @public
   */
  executionRoleArn?: string | undefined;

  /**
   * The path on the container for Application Load Balancer health checks.
   *
   * @public
   */
  healthCheckPath?: string | undefined;

  /**
   * The primary container configuration for the Express service.
   *
   * @public
   */
  primaryContainer?: ExpressGatewayContainer | undefined;

  /**
   * The Amazon Resource Name (ARN) of the IAM role for containers in this task.
   *
   * @public
   */
  taskRoleArn?: string | undefined;

  /**
   * The network configuration for the Express service tasks. By default, the network configuration for an Express service uses the default VPC.
   *
   * @public
   */
  networkConfiguration?: ExpressGatewayServiceNetworkConfiguration | undefined;

  /**
   * The number of CPU units used by the task.
   *
   * @public
   */
  cpu?: string | undefined;

  /**
   * The amount of memory (in MiB) used by the task.
   *
   * @public
   */
  memory?: string | undefined;

  /**
   * The CPU architecture that the task runs on. If you don't specify a value, the service keeps its current architecture.
   *
   * Valid values:
   *
   * - `X86_64` - The x86 64-bit architecture.
   * - `ARM64` - The 64-bit ARM architecture.
   *
   * Changing the architecture starts a new deployment that replaces the running tasks. Ensure that the container image you specify supports the architecture you choose. The operating system family for an Express service is always `LINUX`.
   *
   * You can't specify `cpuArchitecture` together with `taskDefinitionArn`.
   *
   * @public
   */
  cpuArchitecture?: ExpressCpuArchitecture | undefined;

  /**
   * The auto-scaling configuration for the Express service.
   *
   * @public
   */
  scalingTarget?: ExpressGatewayScalingTarget | undefined;

  /**
   * The Amazon Resource Name (ARN) of a task definition to use to update the Express Gateway service. This allows you to manage your own task definition, giving you more control over the service configuration such as adding sidecar containers.
   *
   * The task definition must have a container named `Main` with a single TCP port mapping that includes a container port and port name. The task definition must also have `FARGATE` compatibility.
   *
   * If you provide a task definition ARN, you cannot also specify `primaryContainer`, `executionRoleArn`, `taskRoleArn`, `cpu`, `memory`, or `cpuArchitecture`.
   *
   * @public
   */
  taskDefinitionArn?: string | undefined;
}

/**
 * An object that describes an Express service to be updated.
 *
 * @public
 */
export interface UpdatedExpressGatewayService {
  /**
   * The ARN of the Express service that is being updated.
   *
   * @public
   */
  serviceArn?: string | undefined;

  /**
   * The cluster associated with the Express service that is being updated.
   *
   * @public
   */
  cluster?: string | undefined;

  /**
   * The name of the Express service that is being updated.
   *
   * @public
   */
  serviceName?: string | undefined;

  /**
   * The status of the Express service that is being updated.
   *
   * @public
   */
  status?: ExpressGatewayServiceStatus | undefined;

  /**
   * The configuration to which the current Express service is being updated to.
   *
   * @public
   */
  targetConfiguration?: ExpressGatewayServiceConfiguration | undefined;

  /**
   * The Unix timestamp for when the Express service that is being updated was created.
   *
   * @public
   */
  createdAt?: Date | undefined;

  /**
   * The Unix timestamp for when the Express service that is being updated was most recently updated.
   *
   * @public
   */
  updatedAt?: Date | undefined;
}

/**
 * @public
 */
export interface UpdateExpressGatewayServiceResponse {
  /**
   * The full description of your express gateway service following the update call.
   *
   * @public
   */
  service?: UpdatedExpressGatewayService | undefined;
}

/**
 *
 * @public
 */
export interface UpdateServiceRequest {
  /**
   * The short name or full Amazon Resource Name (ARN) of the cluster that your service runs on. If you do not specify a cluster, the default cluster is assumed.
   *
   * You can't change the cluster name.
   *
   * @public
   */
  cluster?: string | undefined;

  /**
   * The name of the service to update.
   *
   * @public
   */
  service: string | undefined;

  /**
   * The number of instantiations of the task to place and keep running in your service.
   *
   * This parameter doesn't trigger a new service deployment.
   *
   * @public
   */
  desiredCount?: number | undefined;

  /**
   * The `family` and `revision` (`family:revision`) or full ARN of the task definition to run in your service. If a `revision` is not specified, the latest `ACTIVE` revision is used. If you modify the task definition with `UpdateService`, Amazon ECS spawns a task with the new version of the task definition and then stops an old task after the new version is running.
   *
   * This parameter triggers a new service deployment.
   *
   * @public
   */
  taskDefinition?: string | undefined;

  /**
   * The details of a capacity provider strategy. You can set a capacity provider when you create a cluster, run a task, or update a service.
   *
   * > **Note:** If you want to use Amazon ECS Managed Instances, you must use the `capacityProviderStrategy` request parameter.
   *
   * When you use Fargate, the capacity providers are `FARGATE` or `FARGATE_SPOT`.
   *
   * When you use Amazon EC2, the capacity providers are Auto Scaling groups.
   *
   * You can change capacity providers for rolling deployments and blue/green deployments.
   *
   * The following list provides the valid transitions:
   *
   * - Update the Fargate launch type to an Auto Scaling group capacity provider.
   * - Update the Amazon EC2 launch type to a Fargate capacity provider.
   * - Update the Fargate capacity provider to an Auto Scaling group capacity provider.
   * - Update the Amazon EC2 capacity provider to a Fargate capacity provider.
   * - Update the Auto Scaling group or Fargate capacity provider back to the launch type.
   *
   *   Pass an empty list in the `capacityProviderStrategy` parameter.
   *
   * For information about Amazon Web Services CDK considerations, see [Amazon Web Services CDK considerations](https://docs.aws.amazon.com/AmazonECS/latest/developerguide/update-service-parameters.html).
   *
   * This parameter doesn't trigger a new service deployment.
   *
   * @public
   */
  capacityProviderStrategy?: CapacityProviderStrategyItem[] | undefined;

  /**
   * Optional deployment parameters that control how many tasks run during the deployment and the ordering of stopping and starting tasks.
   *
   * This parameter doesn't trigger a new service deployment.
   *
   * @public
   */
  deploymentConfiguration?: DeploymentConfiguration | undefined;

  /**
   * Indicates whether to use Availability Zone rebalancing for the service.
   *
   * For more information, see [Balancing an Amazon ECS service across Availability Zones](https://docs.aws.amazon.com/AmazonECS/latest/developerguide/service-rebalancing.html) in the **Amazon Elastic Container Service Developer Guide** .
   *
   * The default behavior of `AvailabilityZoneRebalancing` differs between create and update requests:
   *
   * - For create service requests, when no value is specified for `AvailabilityZoneRebalancing`, Amazon ECS defaults the value to `ENABLED`.
   * - For update service requests, when no value is specified for `AvailabilityZoneRebalancing`, Amazon ECS defaults to the existing service’s `AvailabilityZoneRebalancing` value. If the service never had an `AvailabilityZoneRebalancing` value set, Amazon ECS treats this as `DISABLED`.
   *
   * This parameter doesn't trigger a new service deployment.
   *
   * @public
   */
  availabilityZoneRebalancing?: AvailabilityZoneRebalancing | undefined;

  /**
   * An object representing the network configuration for the service.
   *
   * This parameter triggers a new service deployment.
   *
   * @public
   */
  networkConfiguration?: NetworkConfiguration | undefined;

  /**
   * An array of task placement constraint objects to update the service to use. If no value is specified, the existing placement constraints for the service will remain unchanged. If this value is specified, it will override any existing placement constraints defined for the service. To remove all existing placement constraints, specify an empty array.
   *
   * You can specify a maximum of 10 constraints for each task. This limit includes constraints in the task definition and those specified at runtime.
   *
   * This parameter doesn't trigger a new service deployment.
   *
   * @public
   */
  placementConstraints?: PlacementConstraint[] | undefined;

  /**
   * The task placement strategy objects to update the service to use. If no value is specified, the existing placement strategy for the service will remain unchanged. If this value is specified, it will override the existing placement strategy defined for the service. To remove an existing placement strategy, specify an empty object.
   *
   * You can specify a maximum of five strategy rules for each service.
   *
   * This parameter doesn't trigger a new service deployment.
   *
   * @public
   */
  placementStrategy?: PlacementStrategy[] | undefined;

  /**
   * The platform version that your tasks in the service run on. A platform version is only specified for tasks using the Fargate launch type. If a platform version is not specified, the `LATEST` platform version is used. For more information, see [Fargate Platform Versions](https://docs.aws.amazon.com/AmazonECS/latest/developerguide/platform_versions.html) in the *Amazon Elastic Container Service Developer Guide*.
   *
   * This parameter triggers a new service deployment.
   *
   * @public
   */
  platformVersion?: string | undefined;

  /**
   * Determines whether to force a new deployment of the service. By default, deployments aren't forced. You can use this option to start a new deployment with no service definition changes. For example, you can update a service's tasks to use a newer Docker image with the same image/tag combination (`my_image:latest`) or to roll Fargate tasks onto a newer platform version.
   *
   * @public
   */
  forceNewDeployment?: boolean | undefined;

  /**
   * The period of time, in seconds, that the Amazon ECS service scheduler ignores unhealthy Elastic Load Balancing, VPC Lattice, and container health checks after a task has first started. If you don't specify a health check grace period value, the default value of `0` is used. If you don't use any of the health checks, then `healthCheckGracePeriodSeconds` is unused.
   *
   * If your service's tasks take a while to start and respond to health checks, you can specify a health check grace period of up to 2,147,483,647 seconds (about 69 years). During that time, the Amazon ECS service scheduler ignores health check status. This grace period can prevent the service scheduler from marking tasks as unhealthy and stopping them before they have time to come up.
   *
   * If your service has more running tasks than desired, unhealthy tasks in the grace period might be stopped to reach the desired count.
   *
   * This parameter doesn't trigger a new service deployment.
   *
   * @public
   */
  healthCheckGracePeriodSeconds?: number | undefined;

  /**
   * The deployment controller to use for the service.
   *
   * @public
   */
  deploymentController?: DeploymentController | undefined;

  /**
   * If `true`, this enables execute command functionality on all task containers.
   *
   * If you do not want to override the value that was set when the service was created, you can set this to `null` when performing this action.
   *
   * This parameter doesn't trigger a new service deployment.
   *
   * @public
   */
  enableExecuteCommand?: boolean | undefined;

  /**
   * Determines whether to turn on Amazon ECS managed tags for the tasks in the service. For more information, see [Tagging Your Amazon ECS Resources](https://docs.aws.amazon.com/AmazonECS/latest/developerguide/ecs-using-tags.html) in the *Amazon Elastic Container Service Developer Guide*.
   *
   * Only tasks launched after the update will reflect the update. To update the tags on all tasks, set `forceNewDeployment` to `true`, so that Amazon ECS starts new tasks with the updated tags.
   *
   * This parameter doesn't trigger a new service deployment.
   *
   * @public
   */
  enableECSManagedTags?: boolean | undefined;

  /**
   * > **Note:** You must have a service-linked role when you update this property
   *
   * A list of Elastic Load Balancing load balancer objects. It contains the load balancer name, the container name, and the container port to access from the load balancer. The container name is as it appears in a container definition.
   *
   * When you add, update, or remove a load balancer configuration, Amazon ECS starts new tasks with the updated Elastic Load Balancing configuration, and then stops the old tasks when the new tasks are running.
   *
   * For services that use rolling updates, you can add, update, or remove Elastic Load Balancing target groups. You can update from a single target group to multiple target groups and from multiple target groups to a single target group.
   *
   * For services that use blue/green deployments, you can update Elastic Load Balancing target groups by using `CreateDeployment` through CodeDeploy. Note that multiple target groups are not supported for blue/green deployments. For more information see [Register multiple target groups with a service](https://docs.aws.amazon.com/AmazonECS/latest/developerguide/register-multiple-targetgroups.html) in the *Amazon Elastic Container Service Developer Guide*.
   *
   * For services that use the external deployment controller, you can add, update, or remove load balancers by using [CreateTaskSet](https://docs.aws.amazon.com/AmazonECS/latest/APIReference/API_CreateTaskSet.html). Note that multiple target groups are not supported for external deployments. For more information see [Register multiple target groups with a service](https://docs.aws.amazon.com/AmazonECS/latest/developerguide/register-multiple-targetgroups.html) in the *Amazon Elastic Container Service Developer Guide*.
   *
   * You can remove existing `loadBalancers` by passing an empty list.
   *
   * This parameter triggers a new service deployment.
   *
   * @public
   */
  loadBalancers?: LoadBalancer[] | undefined;

  /**
   * Determines whether to propagate the tags from the task definition or the service to the task. If no value is specified, the tags aren't propagated.
   *
   * Only tasks launched after the update will reflect the update. To update the tags on all tasks, set `forceNewDeployment` to `true`, so that Amazon ECS starts new tasks with the updated tags.
   *
   * This parameter doesn't trigger a new service deployment.
   *
   * @public
   */
  propagateTags?: PropagateTags | undefined;

  /**
   * > **Note:**
   * >
   * > You must have a service-linked role when you update this property.
   * >
   * > For more information about the role see the `CreateService` request parameter [`role`](https://docs.aws.amazon.com/AmazonECS/latest/APIReference/API_CreateService.html#ECS-CreateService-request-role).
   *
   * The details for the service discovery registries to assign to this service. For more information, see [Service Discovery](https://docs.aws.amazon.com/AmazonECS/latest/developerguide/service-discovery.html).
   *
   * When you add, update, or remove the service registries configuration, Amazon ECS starts new tasks with the updated service registries configuration, and then stops the old tasks when the new tasks are running.
   *
   * You can remove existing `serviceRegistries` by passing an empty list.
   *
   * This parameter triggers a new service deployment.
   *
   * @public
   */
  serviceRegistries?: ServiceRegistry[] | undefined;

  /**
   * The configuration for this service to discover and connect to services, and be discovered by, and connected from, other services within a namespace.
   *
   * Tasks that run in a namespace can use short names to connect to services in the namespace. Tasks can connect to services across all of the clusters in the namespace. Tasks connect through a managed proxy container that collects logs and metrics for increased visibility. Only the tasks that Amazon ECS services create are supported with Service Connect. For more information, see [Service Connect](https://docs.aws.amazon.com/AmazonECS/latest/developerguide/service-connect.html) in the *Amazon Elastic Container Service Developer Guide*.
   *
   * This parameter triggers a new service deployment.
   *
   * @public
   */
  serviceConnectConfiguration?: ServiceConnectConfiguration | undefined;

  /**
   * The details of the volume that was `configuredAtLaunch`. You can configure the size, volumeType, IOPS, throughput, snapshot and encryption in [ServiceManagedEBSVolumeConfiguration](https://docs.aws.amazon.com/AmazonECS/latest/APIReference/API_ServiceManagedEBSVolumeConfiguration.html). The `name` of the volume must match the `name` from the task definition. If set to null, no new deployment is triggered. Otherwise, if this configuration differs from the existing one, it triggers a new deployment.
   *
   * This parameter triggers a new service deployment.
   *
   * @public
   */
  volumeConfigurations?: ServiceVolumeConfiguration[] | undefined;

  /**
   * An object representing the VPC Lattice configuration for the service being updated.
   *
   * This parameter triggers a new service deployment.
   *
   * @public
   */
  vpcLatticeConfigurations?: VpcLatticeConfiguration[] | undefined;

  /**
   * The updated set of gateway connectors that connect the service to a gateway ingress path. A service supports no more than one gateway connector.
   *
   * @public
   */
  gatewayConnectors?: GatewayConnector[] | undefined;

  /**
   * The optional monitoring configuration for the service, which defines the resolution for the service-level `CPUUtilization` and `MemoryUtilization` Amazon CloudWatch metrics. When not specified, Amazon ECS uses the default resolution of `60` seconds.
   *
   * @public
   */
  monitoring?: MonitoringConfiguration | undefined;
}

/**
 *
 * @public
 */
export interface UpdateServiceResponse {
  /**
   * The full description of your service following the update call.
   *
   * The response includes a `lifecycleHookDetails` field, which is an empty array when the service is created or updated. The values are populated when a lifecycle hook executes and are available as part of the service deployment details ([DescribeServiceDeployments](https://docs.aws.amazon.com/AmazonECS/latest/APIReference/API_DescribeServiceDeployments.html)).
   *
   * @public
   */
  service?: Service | undefined;
}

/**
 * @public
 */
export interface UpdateServicePrimaryTaskSetRequest {
  /**
   * The short name or full Amazon Resource Name (ARN) of the cluster that hosts the service that the task set exists in.
   *
   * @public
   */
  cluster: string | undefined;

  /**
   * The short name or full Amazon Resource Name (ARN) of the service that the task set exists in.
   *
   * @public
   */
  service: string | undefined;

  /**
   * The short name or full Amazon Resource Name (ARN) of the task set to set as the primary task set in the deployment.
   *
   * @public
   */
  primaryTaskSet: string | undefined;
}

/**
 * @public
 */
export interface UpdateServicePrimaryTaskSetResponse {
  /**
   * The details about the task set.
   *
   * @public
   */
  taskSet?: TaskSet | undefined;
}

/**
 * @public
 */
export interface DescribeServiceRevisionsRequest {
  /**
   * The ARN of the service revision.
   *
   * You can specify a maximum of 20 ARNs.
   *
   * You can call [ListServiceDeployments](https://docs.aws.amazon.com/AmazonECS/latest/APIReference/API_ListServiceDeployments.html) to get the ARNs.
   *
   * @public
   */
  serviceRevisionArns: string[] | undefined;
}

/**
 * The details about the container image a service revision uses.
 *
 * To ensure that all tasks in a service use the same container image, Amazon ECS resolves container image names and any image tags specified in the task definition to container image digests.
 *
 * After the container image digest has been established, Amazon ECS uses the digest to start any other desired tasks, and for any future service and service revision updates. This leads to all tasks in a service always running identical container images, resulting in version consistency for your software. For more information, see [Container image resolution](https://docs.aws.amazon.com/AmazonECS/latest/developerguide/deployment-type-ecs.html#deployment-container-image-stability) in the Amazon ECS Developer Guide.
 *
 * @public
 */
export interface ContainerImage {
  /**
   * The name of the container.
   *
   * @public
   */
  containerName?: string | undefined;

  /**
   * The container image digest.
   *
   * @public
   */
  imageDigest?: string | undefined;

  /**
   * The container image.
   *
   * @public
   */
  image?: string | undefined;
}

/**
 * The Application Auto Scaling policy created by Amazon ECS when you create an Express service.
 *
 * @public
 */
export interface ManagedApplicationAutoScalingPolicy {
  /**
   * The Amazon Resource Name (ARN) of the Application Auto Scaling policy associated with the Express service.
   *
   * @public
   */
  arn?: string | undefined;

  /**
   * The status of Application Auto Scaling policy creation.
   *
   * @public
   */
  status: ManagedResourceStatus | undefined;

  /**
   * Information about why the Application Auto Scaling policy is in the current status.
   *
   * @public
   */
  statusReason?: string | undefined;

  /**
   * The Unix timestamp for when the Application Auto Scaling policy was last updated.
   *
   * @public
   */
  updatedAt: Date | undefined;

  /**
   * The type of Application Auto Scaling policy associated with the Express service. Valid values are `TargetTrackingScaling`, `StepScaling`, and `PredictiveScaling`.
   *
   * @public
   */
  policyType: string | undefined;

  /**
   * The target value for the auto scaling metric.
   *
   * @public
   */
  targetValue: number | undefined;

  /**
   * The metric used for auto scaling decisions. The available metrics are `ECSServiceAverageCPUUtilization`, `ECSServiceAverageMemoryUtilization`, and `ALBRequestCOuntPerTarget`.
   *
   * @public
   */
  metric: string | undefined;
}

/**
 * Represents a scalable target.
 *
 * @public
 */
export interface ManagedScalableTarget {
  /**
   * The ARN of the scalable target.
   *
   * @public
   */
  arn?: string | undefined;

  /**
   * The status of the scalable target.
   *
   * @public
   */
  status: ManagedResourceStatus | undefined;

  /**
   * Information about why the scalable target is in the current status.
   *
   * @public
   */
  statusReason?: string | undefined;

  /**
   * The Unix timestamp for when the target was most recently updated.
   *
   * @public
   */
  updatedAt: Date | undefined;

  /**
   * The minimum value to scale to in response to a scale-in activity.
   *
   * @public
   */
  minCapacity: number | undefined;

  /**
   * The maximum value to scale to in response to a scale-out activity.
   *
   * @public
   */
  maxCapacity: number | undefined;
}

/**
 * The auto scaling configuration created by Amazon ECS for an Express service.
 *
 * @public
 */
export interface ManagedAutoScaling {
  /**
   * Represents a scalable target.
   *
   * @public
   */
  scalableTarget?: ManagedScalableTarget | undefined;

  /**
   * The policy used for auto scaling.
   *
   * @public
   */
  applicationAutoScalingPolicies?: ManagedApplicationAutoScalingPolicy[] | undefined;
}

/**
 * The Application Load Balancer resources that a gateway created and manages for a connection.
 *
 * @public
 */
export interface GatewayConnectionAlbResources {
  /**
   * The Amazon Resource Name (ARN) of the Amazon Web Services Certificate Manager certificate that is attached to the load balancer listener.
   *
   * @public
   */
  acmCertificateArn?: string | undefined;

  /**
   * The Amazon Resource Name (ARN) of the load balancer.
   *
   * @public
   */
  loadBalancerArn?: string | undefined;

  /**
   * The Amazon Resource Names (ARNs) of the security groups that the gateway attaches to the load balancer.
   *
   * @public
   */
  loadBalancerSecurityGroupArns?: string[] | undefined;

  /**
   * The Amazon Resource Name (ARN) of the listener on the load balancer.
   *
   * @public
   */
  listenerArn?: string | undefined;

  /**
   * The Amazon Resource Name (ARN) of the listener rule that routes production traffic to the service.
   *
   * @public
   */
  listenerRuleArn?: string | undefined;

  /**
   * The Amazon Resource Name (ARN) of the listener rule that routes test traffic to the service during progressive deployments.
   *
   * @public
   */
  testListenerRuleArn?: string | undefined;

  /**
   * The Amazon Resource Name (ARN) of the target group that receives production traffic.
   *
   * @public
   */
  targetGroupArn?: string | undefined;

  /**
   * The Amazon Resource Name (ARN) of the alternate target group that the gateway uses during progressive deployments.
   *
   * @public
   */
  alternateTargetGroupArn?: string | undefined;
}

/**
 * The gateway-managed infrastructure resources for a connection, as a union keyed by gateway type.
 *
 * @public
 */
export type GatewayConnectionResources =
  | GatewayConnectionResources.HostSharedAlbMember
  | GatewayConnectionResources.$UnknownMember;

/**
 * @public
 */
export namespace GatewayConnectionResources {
  /**
   * The Application Load Balancer resources for a host-based, shared ALB gateway.
   *
   * @public
   */
  export interface HostSharedAlbMember {
    hostSharedAlb: GatewayConnectionAlbResources[];
    $unknown?: never;
  }

  /**
   * @public
   */
  export interface $UnknownMember {
    hostSharedAlb?: never;
    $unknown: [string, any];
  }

  /**
   * @deprecated unused in schema-serde mode.
   *
   */
  export interface Visitor<T> {
    hostSharedAlb: (value: GatewayConnectionAlbResources[]) => T;
    _: (name: string, value: any) => T;
  }
}

/**
 * A gateway-managed connection for a service revision. A connection represents the association between the service's gateway connector and a specific gateway, along with the infrastructure that the gateway created for it.
 *
 * @public
 */
export interface GatewayConnection {
  /**
   * The Amazon Resource Name (ARN) of the gateway.
   *
   * @public
   */
  gatewayArn?: string | undefined;

  /**
   * The Amazon Resource Name (ARN) of the gateway route for the connection.
   *
   * @public
   */
  gatewayRouteArn?: string | undefined;

  /**
   * The name of the service port that receives gateway-managed ingress traffic.
   *
   * @public
   */
  portName?: string | undefined;

  /**
   * The URL that the gateway uses to route ingress traffic to the service.
   *
   * @public
   */
  serviceUrl?: string | undefined;

  /**
   * The access type of the gateway ingress path.
   *
   * Valid values:
   *
   * - `PUBLIC` - The ingress path is publicly accessible.
   * - `PRIVATE` - The ingress path is only accessible privately.
   *
   * @public
   */
  accessType?: AccessType | undefined;

  /**
   * The status of the gateway route for the connection.
   *
   * @public
   */
  status?: GatewayRouteStatus | undefined;

  /**
   * The gateway-managed infrastructure resources for the connection.
   *
   * @public
   */
  resources?: GatewayConnectionResources | undefined;
}

/**
 * The ACM certificate associated with the HTTPS domain created for the Express service.
 *
 * @public
 */
export interface ManagedCertificate {
  /**
   * The Amazon Resource Name (ARN) of the ACM certificate.
   *
   * @public
   */
  arn?: string | undefined;

  /**
   * The status of the ACM; certificate.
   *
   * @public
   */
  status: ManagedResourceStatus | undefined;

  /**
   * Information about why the ACM certificate is in the current status.
   *
   * @public
   */
  statusReason?: string | undefined;

  /**
   * The Unix timestamp for when the ACM certificate was last updated
   *
   * @public
   */
  updatedAt: Date | undefined;

  /**
   * The fully qualified domain name (FQDN) that is secured with this ACM certificate.
   *
   * @public
   */
  domainName: string | undefined;
}

/**
 * The listeners associated with the Express service's Application Load Balancer.
 *
 * @public
 */
export interface ManagedListener {
  /**
   * The Amazon Resource Name (ARN) of the load balancer listener.
   *
   * @public
   */
  arn?: string | undefined;

  /**
   * The status of the load balancer listener.
   *
   * @public
   */
  status: ManagedResourceStatus | undefined;

  /**
   * Informaion about why the load balancer listener is in the current status.
   *
   * @public
   */
  statusReason?: string | undefined;

  /**
   * The Unix timestamp for when this listener was most recently updated.
   *
   * @public
   */
  updatedAt: Date | undefined;
}

/**
 * The Application Load Balancer associated with the Express service.
 *
 * @public
 */
export interface ManagedLoadBalancer {
  /**
   * The Amazon Resource Name (ARN) of the load balancer.
   *
   * @public
   */
  arn?: string | undefined;

  /**
   * The status of the load balancer.
   *
   * @public
   */
  status: ManagedResourceStatus | undefined;

  /**
   * Information about why the load balancer is in the current status.
   *
   * @public
   */
  statusReason?: string | undefined;

  /**
   * The Unix timestamp for when this load balancer was most recently updated.
   *
   * @public
   */
  updatedAt: Date | undefined;

  /**
   * The scheme of the load balancer. By default, the scheme of the load balancer is `internet-facing`.
   *
   * @public
   */
  scheme: string | undefined;

  /**
   * The IDs of the subnets associated with the load balancer.
   *
   * @public
   */
  subnetIds?: string[] | undefined;

  /**
   * The IDs of the security groups associated with the load balancer.
   *
   * @public
   */
  securityGroupIds?: string[] | undefined;
}

/**
 * A security group associated with the Express service.
 *
 * @public
 */
export interface ManagedSecurityGroup {
  /**
   * The ARN of the security group.
   *
   * @public
   */
  arn?: string | undefined;

  /**
   * The status of the security group.
   *
   * @public
   */
  status: ManagedResourceStatus | undefined;

  /**
   * Information about why the security group is in the current status.
   *
   * @public
   */
  statusReason?: string | undefined;

  /**
   * The Unix timestamp for when the security group was last updated.
   *
   * @public
   */
  updatedAt: Date | undefined;
}

/**
 * The listener rule associated with the Express service's Application Load Balancer.
 *
 * @public
 */
export interface ManagedListenerRule {
  /**
   * The Amazon Resource Name (ARN) of the load balancer listener rule.
   *
   * @public
   */
  arn?: string | undefined;

  /**
   * The status of the load balancer listener rule.
   *
   * @public
   */
  status: ManagedResourceStatus | undefined;

  /**
   * Information about why the load balancer listener rule is in the current status.
   *
   * @public
   */
  statusReason?: string | undefined;

  /**
   * The Unix timestamp for when this listener rule was most recently updated.
   *
   * @public
   */
  updatedAt: Date | undefined;
}

/**
 * The target group associated with the Express service's Application Load Balancer. For more information about load balancer target groups, see [CreateTargetGroup](https://docs.aws.amazon.com/elasticloadbalancing/latest/APIReference/API_CreateTargetGroup.html) in the *Elastic Load Balancing API Reference*
 *
 * @public
 */
export interface ManagedTargetGroup {
  /**
   * The Amazon Resource Name (ARN) of the target group.
   *
   * @public
   */
  arn?: string | undefined;

  /**
   * The status of the target group.
   *
   * @public
   */
  status: ManagedResourceStatus | undefined;

  /**
   * Information about why the target group is in the current status.
   *
   * @public
   */
  statusReason?: string | undefined;

  /**
   * The Unix timestamp for when the target group was last updated.
   *
   * @public
   */
  updatedAt: Date | undefined;

  /**
   * The destination for health checks on the targets.
   *
   * @public
   */
  healthCheckPath: string | undefined;

  /**
   * The port the load balancer uses when performing health checks on targets.
   *
   * @public
   */
  healthCheckPort: number | undefined;

  /**
   * The port on which the targets receive traffic.
   *
   * @public
   */
  port: number | undefined;
}

/**
 * The entry point into the Express service.
 *
 * @public
 */
export interface ManagedIngressPath {
  /**
   * The type of access to the endpoint for the Express service.
   *
   * @public
   */
  accessType: AccessType | undefined;

  /**
   * The endpoint for access to the Express service.
   *
   * @public
   */
  endpoint: string | undefined;

  /**
   * The Application Load Balancer associated with the Express service.
   *
   * @public
   */
  loadBalancer?: ManagedLoadBalancer | undefined;

  /**
   * The security groups associated with the Application Load Balancer.
   *
   * @public
   */
  loadBalancerSecurityGroups?: ManagedSecurityGroup[] | undefined;

  /**
   * The ACM certificate for the Express service's domain.
   *
   * @public
   */
  certificate?: ManagedCertificate | undefined;

  /**
   * The listeners associated with the Application Load Balancer.
   *
   * @public
   */
  listener?: ManagedListener | undefined;

  /**
   * The listener rules for the Application Load Balancer.
   *
   * @public
   */
  rule?: ManagedListenerRule | undefined;

  /**
   * The target groups associated with the Application Load Balancer.
   *
   * @public
   */
  targetGroups?: ManagedTargetGroup[] | undefined;
}

/**
 * The Cloudwatch Log Group created by Amazon ECS for an Express service.
 *
 * @public
 */
export interface ManagedLogGroup {
  /**
   * The Amazon Resource Name (ARN) of the Cloudwatch Log Group associated with the Express service.
   *
   * @public
   */
  arn?: string | undefined;

  /**
   * The status of the Cloudwatch LogGroup.
   *
   * @public
   */
  status: ManagedResourceStatus | undefined;

  /**
   * Information about why the Cloudwatch LogGroup is in the current status.
   *
   * @public
   */
  statusReason?: string | undefined;

  /**
   * The Unix timestamp for when the Cloudwatch LogGroup was last updated
   *
   * @public
   */
  updatedAt: Date | undefined;

  /**
   * The name of the Cloudwatch Log Group associated with the Express service.
   *
   * @public
   */
  logGroupName: string | undefined;
}

/**
 * The CloudWatch metric alarm associated with the Express service's scaling policy.
 *
 * @public
 */
export interface ManagedMetricAlarm {
  /**
   * The Amazon Resource Name (ARN) of the CloudWatch metric alarm.
   *
   * @public
   */
  arn?: string | undefined;

  /**
   * The status of the CloudWatch metric alarm.
   *
   * @public
   */
  status: ManagedResourceStatus | undefined;

  /**
   * Information about why the CloudWatch metric alarm is in the current status.
   *
   * @public
   */
  statusReason?: string | undefined;

  /**
   * The Unix timestamp for when the CloudWatch metric alarm was last updated.
   *
   * @public
   */
  updatedAt: Date | undefined;
}

/**
 * Represents the Amazon Web Services resources managed by Amazon ECS for an Express service, including ingress paths, auto-scaling policies, metric alarms, and security groups.
 *
 * @public
 */
export interface ECSManagedResources {
  /**
   * The ingress paths and endpoints for the Express service.
   *
   * @public
   */
  ingressPaths?: ManagedIngressPath[] | undefined;

  /**
   * The auto-scaling configuration and policies for the Express service.
   *
   * @public
   */
  autoScaling?: ManagedAutoScaling | undefined;

  /**
   * The CloudWatch metric alarms associated with the Express service.
   *
   * @public
   */
  metricAlarms?: ManagedMetricAlarm[] | undefined;

  /**
   * The security groups managed by the Express service.
   *
   * @public
   */
  serviceSecurityGroups?: ManagedSecurityGroup[] | undefined;

  /**
   * The log groups managed by the Express service.
   *
   * @public
   */
  logGroups?: ManagedLogGroup[] | undefined;

  /**
   * The gateway-managed connections for the service revision, including the gateway routes and infrastructure that a gateway created for the service's connector.
   *
   * @public
   */
  gatewayConnections?: GatewayConnection[] | undefined;
}

/**
 * The runtime platform that Amazon ECS applies to a service revision. This value overrides the runtime platform specified in the task definition. You can't set this value.
 *
 * @public
 */
export interface RuntimePlatformOverride {
  /**
   * The CPU architecture that tasks in this service revision run on. This value might differ from the architecture declared in the task definition—for example, when Amazon ECS detects an architecture mismatch during an Amazon ECS Express deployment and runs tasks on a different architecture. You can't set this value.
   *
   * Valid values:
   *
   * - `X86_64` - The x86 64-bit architecture.
   * - `ARM64` - The 64-bit ARM architecture.
   *
   * @public
   */
  cpuArchitecture?: string | undefined;
}

/**
 * Contains the runtime overrides that Amazon ECS automatically applies to a service revision when the effective runtime configuration differs from the task definition. This value is read-only.
 *
 * @public
 */
export interface ServiceRevisionOverrides {
  /**
   * The runtime platform override that Amazon ECS automatically applies to the service revision. You can't set this value.
   *
   * @public
   */
  runtimePlatform?: RuntimePlatformOverride | undefined;
}

/**
 * The resolved load balancer configuration for a service revision. This includes information about which target groups serve traffic and which listener rules direct traffic to them.
 *
 * @public
 */
export interface ServiceRevisionLoadBalancer {
  /**
   * The Amazon Resource Name (ARN) of the target group associated with the service revision.
   *
   * @public
   */
  targetGroupArn?: string | undefined;

  /**
   * The Amazon Resource Name (ARN) of the production listener rule or listener that directs traffic to the target group associated with the service revision.
   *
   * @public
   */
  productionListenerRule?: string | undefined;
}

/**
 * The resolved VPC Lattice configuration for a service revision. This includes information about which target groups serve traffic and which listener rules direct traffic to them.
 *
 * @public
 */
export interface ServiceRevisionVpcLatticeConfiguration {
  /**
   * The Amazon Resource Name (ARN) of the target group associated with the service revision.
   *
   * @public
   */
  targetGroupArn?: string | undefined;

  /**
   * The Amazon Resource Name (ARN) of the production listener rule or listener that directs traffic to the target group associated with the service revision.
   *
   * @public
   */
  productionListenerRule?: string | undefined;
}

/**
 * The resolved configuration for a service revision, which contains the actual resources your service revision uses, such as which target groups serve traffic.
 *
 * @public
 */
export interface ResolvedConfiguration {
  /**
   * The resolved load balancer configuration for the service revision. This includes information about which target groups serve traffic and which listener rules direct traffic to them.
   *
   * @public
   */
  loadBalancers?: ServiceRevisionLoadBalancer[] | undefined;

  /**
   * The resolved VPC Lattice configuration for the service revision. This includes information about which target groups serve traffic and which listener rules direct traffic to them.
   *
   * @public
   */
  vpcLatticeConfigurations?: ServiceRevisionVpcLatticeConfiguration[] | undefined;
}

/**
 * Information about the service revision.
 *
 * A service revision contains a record of the workload configuration Amazon ECS is attempting to deploy. Whenever you create or deploy a service, Amazon ECS automatically creates and captures the configuration that you're trying to deploy in the service revision. For information about service revisions, see [Amazon ECS service revisions](https://docs.aws.amazon.com/AmazonECS/latest/developerguide/service-revision.html) in the **Amazon Elastic Container Service Developer Guide** .
 *
 * @public
 */
export interface ServiceRevision {
  /**
   * The ARN of the service revision.
   *
   * @public
   */
  serviceRevisionArn?: string | undefined;

  /**
   * The ARN of the service for the service revision.
   *
   * @public
   */
  serviceArn?: string | undefined;

  /**
   * The ARN of the cluster that hosts the service.
   *
   * @public
   */
  clusterArn?: string | undefined;

  /**
   * The task definition the service revision uses.
   *
   * @public
   */
  taskDefinition?: string | undefined;

  /**
   * The capacity provider strategy the service revision uses.
   *
   * @public
   */
  capacityProviderStrategy?: CapacityProviderStrategyItem[] | undefined;

  /**
   * The launch type the service revision uses.
   *
   * @public
   */
  launchType?: LaunchType | undefined;

  /**
   * For the Fargate launch type, the platform version the service revision uses.
   *
   * @public
   */
  platformVersion?: string | undefined;

  /**
   * The platform family the service revision uses.
   *
   * @public
   */
  platformFamily?: string | undefined;

  /**
   * The load balancers the service revision uses.
   *
   * @public
   */
  loadBalancers?: LoadBalancer[] | undefined;

  /**
   * The service registries (for Service Discovery) the service revision uses.
   *
   * @public
   */
  serviceRegistries?: ServiceRegistry[] | undefined;

  /**
   * The network configuration for a task or service.
   *
   * @public
   */
  networkConfiguration?: NetworkConfiguration | undefined;

  /**
   * The container images the service revision uses.
   *
   * @public
   */
  containerImages?: ContainerImage[] | undefined;

  /**
   * Indicates whether Runtime Monitoring is turned on.
   *
   * @public
   */
  guardDutyEnabled?: boolean | undefined;

  /**
   * The Service Connect configuration of your Amazon ECS service. The configuration for this service to discover and connect to services, and be discovered by, and connected from, other services within a namespace.
   *
   * Tasks that run in a namespace can use short names to connect to services in the namespace. Tasks can connect to services across all of the clusters in the namespace. Tasks connect through a managed proxy container that collects logs and metrics for increased visibility. Only the tasks that Amazon ECS services create are supported with Service Connect. For more information, see [Service Connect](https://docs.aws.amazon.com/AmazonECS/latest/developerguide/service-connect.html) in the *Amazon Elastic Container Service Developer Guide*.
   *
   * @public
   */
  serviceConnectConfiguration?: ServiceConnectConfiguration | undefined;

  /**
   * The volumes that are configured at deployment that the service revision uses.
   *
   * @public
   */
  volumeConfigurations?: ServiceVolumeConfiguration[] | undefined;

  /**
   * The amount of ephemeral storage to allocate for the deployment.
   *
   * @public
   */
  fargateEphemeralStorage?: DeploymentEphemeralStorage | undefined;

  /**
   * The time that the service revision was created. The format is yyyy-mm-dd HH:mm:ss.SSSSS.
   *
   * @public
   */
  createdAt?: Date | undefined;

  /**
   * The VPC Lattice configuration for the service revision.
   *
   * @public
   */
  vpcLatticeConfigurations?: VpcLatticeConfiguration[] | undefined;

  /**
   * The resolved configuration for the service revision which contains the actual resources your service revision uses, such as which target groups serve traffic.
   *
   * @public
   */
  resolvedConfiguration?: ResolvedConfiguration | undefined;

  /**
   * The resources created and managed by Amazon ECS when you create an Express service for Amazon ECS.
   *
   * @public
   */
  ecsManagedResources?: ECSManagedResources | undefined;

  /**
   * The effective runtime overrides that Amazon ECS applies to this service revision. This value is present only when Amazon ECS detects a difference between the task definition and the actual runtime configuration.
   *
   * @public
   */
  overrides?: ServiceRevisionOverrides | undefined;

  /**
   * The gateway connectors that are associated with the service revision.
   *
   * @public
   */
  gatewayConnectors?: GatewayConnector[] | undefined;

  /**
   * The optional monitoring configuration for the service, which defines the resolution for the service-level `CPUUtilization` and `MemoryUtilization` Amazon CloudWatch metrics. When not specified, Amazon ECS uses the default resolution of `60` seconds.
   *
   * @public
   */
  monitoring?: MonitoringConfiguration | undefined;
}

/**
 * @public
 */
export interface DescribeServiceRevisionsResponse {
  /**
   * The list of service revisions described.
   *
   * @public
   */
  serviceRevisions?: ServiceRevision[] | undefined;

  /**
   * Any failures associated with the call.
   *
   * @public
   */
  failures?: Failure[] | undefined;
}

/**
 * @public
 */
export interface TagResourceRequest {
  /**
   * The Amazon Resource Name (ARN) of the resource to add tags to. Currently, the supported resources are Amazon ECS capacity providers, tasks, services, task definitions, clusters, and container instances.
   *
   * In order to tag a service that has the following ARN format, you need to migrate the service to the long ARN. For more information, see [Migrate an Amazon ECS short service ARN to a long ARN](https://docs.aws.amazon.com/AmazonECS/latest/developerguide/service-arn-migration.html) in the *Amazon Elastic Container Service Developer Guide*.
   *
   * `arn:aws:ecs:region:aws_account_id:service/service-name`
   *
   * After the migration is complete, the service has the long ARN format, as shown below. Use this ARN to tag the service.
   *
   * `arn:aws:ecs:region:aws_account_id:service/cluster-name/service-name`
   *
   * If you try to tag a service with a short ARN, you receive an `InvalidParameterException` error.
   *
   * @public
   */
  resourceArn: string | undefined;

  /**
   * The tags to add to the resource. A tag is an array of key-value pairs.
   *
   * The following basic restrictions apply to tags:
   *
   * - Maximum number of tags per resource - 50
   * - For each resource, each tag key must be unique, and each tag key can have only one value.
   * - Maximum key length - 128 Unicode characters in UTF-8
   * - Maximum value length - 256 Unicode characters in UTF-8
   * - If your tagging schema is used across multiple services and resources, remember that other services may have restrictions on allowed characters. Generally allowed characters are: letters, numbers, and spaces representable in UTF-8, and the following characters: + - = . _ : / @.
   * - Tag keys and values are case-sensitive.
   * - Do not use `aws:`, `AWS:`, or any upper or lowercase combination of such as a prefix for either keys or values as it is reserved for Amazon Web Services use. You cannot edit or delete tag keys or values with this prefix. Tags with this prefix do not count against your tags per resource limit.
   *
   * @public
   */
  tags: Tag[] | undefined;
}

/**
 * @public
 */
export interface TagResourceResponse {}

/**
 * @public
 */
export interface DeleteTaskDefinitionsRequest {
  /**
   * The `family` and `revision` (`family:revision`) or full Amazon Resource Name (ARN) of the task definition to delete. You must specify a `revision`.
   *
   * You can specify up to 10 task definitions as a comma separated list.
   *
   * @public
   */
  taskDefinitions: string[] | undefined;
}

/**
 * @public
 */
export interface DeleteTaskDefinitionsResponse {
  /**
   * The list of deleted task definitions.
   *
   * @public
   */
  taskDefinitions?: TaskDefinition[] | undefined;

  /**
   * Any failures associated with the call.
   *
   * @public
   */
  failures?: Failure[] | undefined;
}

/**
 *
 * @public
 */
export interface ListTaskDefinitionsRequest {
  /**
   * The full family name to filter the `ListTaskDefinitions` results with. Specifying a `familyPrefix` limits the listed task definitions to task definition revisions that belong to that family.
   *
   * @public
   */
  familyPrefix?: string | undefined;

  /**
   * The task definition status to filter the `ListTaskDefinitions` results with. By default, only `ACTIVE` task definitions are listed. By setting this parameter to `INACTIVE`, you can view task definitions that are `INACTIVE` as long as an active task or service still references them. If you paginate the resulting output, be sure to keep the `status` value constant in each subsequent request.
   *
   * @public
   */
  status?: TaskDefinitionStatus | undefined;

  /**
   * The order to sort the results in. Valid values are `ASC` and `DESC`. By default, (`ASC`) task definitions are listed lexicographically by family name and in ascending numerical order by revision so that the newest task definitions in a family are listed last. Setting this parameter to `DESC` reverses the sort order on family name and revision. This is so that the newest task definitions in a family are listed first.
   *
   * @public
   */
  sort?: SortOrder | undefined;

  /**
   * The `nextToken` value returned from a `ListTaskDefinitions` request indicating that more results are available to fulfill the request and further calls will be needed. If `maxResults` was provided, it is possible the number of results to be fewer than `maxResults`.
   *
   * > **Note:** This token should be treated as an opaque identifier that is only used to retrieve the next items in a list and not for other programmatic purposes.
   *
   * @public
   */
  nextToken?: string | undefined;

  /**
   * The maximum number of task definition results that `ListTaskDefinitions` returned in paginated output. When this parameter is used, `ListTaskDefinitions` only returns `maxResults` results in a single page along with a `nextToken` response element. The remaining results of the initial request can be seen by sending another `ListTaskDefinitions` request with the returned `nextToken` value. This value can be between 1 and 100. If this parameter isn't used, then `ListTaskDefinitions` returns up to 100 results and a `nextToken` value if applicable.
   *
   * @public
   */
  maxResults?: number | undefined;
}

/**
 *
 * @public
 */
export interface ListTaskDefinitionsResponse {
  /**
   * The list of task definition Amazon Resource Name (ARN) entries for the `ListTaskDefinitions` request.
   *
   * @public
   */
  taskDefinitionArns?: string[] | undefined;

  /**
   * The `nextToken` value to include in a future `ListTaskDefinitions` request. When the results of a `ListTaskDefinitions` request exceed `maxResults`, this value can be used to retrieve the next page of results. This value is `null` when there are no more results to return.
   *
   * @public
   */
  nextToken?: string | undefined;
}

/**
 *
 * @public
 */
export interface RegisterTaskDefinitionRequest {
  /**
   * You must specify a `family` for a task definition. You can use it track multiple versions of the same task definition. The `family` is used as a name for your task definition. Up to 255 letters (uppercase and lowercase), numbers, underscores, and hyphens are allowed.
   *
   * @public
   */
  family: string | undefined;

  /**
   * The short name or full Amazon Resource Name (ARN) of the IAM role that containers in this task can assume. All containers in this task are granted the permissions that are specified in this role. For more information, see [IAM Roles for Tasks](https://docs.aws.amazon.com/AmazonECS/latest/developerguide/task-iam-roles.html) in the *Amazon Elastic Container Service Developer Guide*.
   *
   * @public
   */
  taskRoleArn?: string | undefined;

  /**
   * The Amazon Resource Name (ARN) of the task execution role that grants the Amazon ECS container agent permission to make Amazon Web Services API calls on your behalf. For informationabout the required IAM roles for Amazon ECS, see [IAM roles for Amazon ECS](https://docs.aws.amazon.com/AmazonECS/latest/developerguide/security-ecs-iam-role-overview.html) in the *Amazon Elastic Container Service Developer Guide*.
   *
   * @public
   */
  executionRoleArn?: string | undefined;

  /**
   * The Docker networking mode to use for the containers in the task. The valid values are `none`, `bridge`, `awsvpc`, and `host`. If no network mode is specified, the default is `bridge`.
   *
   * For Amazon ECS tasks on Fargate, the `awsvpc` network mode is required. For Amazon ECS tasks on Amazon EC2 Linux instances, any network mode can be used. For Amazon ECS tasks on Amazon EC2 Windows instances, `<default>` or `awsvpc` can be used. If the network mode is set to `none`, you cannot specify port mappings in your container definitions, and the tasks containers do not have external connectivity. The `host` and `awsvpc` network modes offer the highest networking performance for containers because they use the EC2 network stack instead of the virtualized network stack provided by the `bridge` mode.
   *
   * With the `host` and `awsvpc` network modes, exposed container ports are mapped directly to the corresponding host port (for the `host` network mode) or the attached elastic network interface port (for the `awsvpc` network mode), so you cannot take advantage of dynamic host port mappings.
   *
   * > **Important:** When using the `host` network mode, you should not run containers using the root user (UID 0). It is considered best practice to use a non-root user.
   *
   * If the network mode is `awsvpc`, the task is allocated an elastic network interface, and you must specify a [NetworkConfiguration](https://docs.aws.amazon.com/AmazonECS/latest/APIReference/API_NetworkConfiguration.html) value when you create a service or run a task with the task definition. For more information, see [Task Networking](https://docs.aws.amazon.com/AmazonECS/latest/developerguide/task-networking.html) in the *Amazon Elastic Container Service Developer Guide*.
   *
   * If the network mode is `host`, you cannot run multiple instantiations of the same task on a single container instance when port mappings are used.
   *
   * @public
   */
  networkMode?: NetworkMode | undefined;

  /**
   * A list of container definitions in JSON format that describe the different containers that make up your task.
   *
   * @public
   */
  containerDefinitions: ContainerDefinition[] | undefined;

  /**
   * A list of volume definitions in JSON format that containers in your task might use.
   *
   * @public
   */
  volumes?: Volume[] | undefined;

  /**
   * An array of placement constraint objects to use for the task. You can specify a maximum of 10 constraints for each task. This limit includes constraints in the task definition and those specified at runtime.
   *
   * @public
   */
  placementConstraints?: TaskDefinitionPlacementConstraint[] | undefined;

  /**
   * The task launch type that Amazon ECS validates the task definition against. A client exception is returned if the task definition doesn't validate against the compatibilities specified. If no value is specified, the parameter is omitted from the response.
   *
   * @public
   */
  requiresCompatibilities?: Compatibility[] | undefined;

  /**
   * The number of CPU units used by the task. It can be expressed as an integer using CPU units (for example, `1024`) or as a string using vCPUs (for example, `1 vCPU` or `1 vcpu`) in a task definition. String values are converted to an integer indicating the CPU units when the task definition is registered.
   *
   * > **Note:** Task-level CPU and memory parameters are ignored for Windows containers. We recommend specifying container-level resources for Windows containers.
   *
   * If you're using the EC2 launch type or external launch type, this field is optional. Supported values are between `128` CPU units (`0.125` vCPUs) and `196608` CPU units (`192` vCPUs). If you do not specify a value, the parameter is ignored.
   *
   * This field is required for Fargate. For information about the valid values, see [Task size](https://docs.aws.amazon.com/AmazonECS/latest/developerguide/task_definition_parameters.html#task_size) in the *Amazon Elastic Container Service Developer Guide*.
   *
   * @public
   */
  cpu?: string | undefined;

  /**
   * The amount of memory (in MiB) used by the task. It can be expressed as an integer using MiB (for example ,`1024`) or as a string using GB (for example, `1GB` or `1 GB`) in a task definition. String values are converted to an integer indicating the MiB when the task definition is registered.
   *
   * > **Note:** Task-level CPU and memory parameters are ignored for Windows containers. We recommend specifying container-level resources for Windows containers.
   *
   * If using the EC2 launch type, this field is optional.
   *
   * If using the Fargate launch type, this field is required and you must use one of the following values. This determines your range of supported values for the `cpu` parameter.
   *
   * The CPU units cannot be less than 1 vCPU when you use Windows containers on Fargate.
   *
   * - 512 (0.5 GB), 1024 (1 GB), 2048 (2 GB) - Available `cpu` values: 256 (.25 vCPU)
   * - 1024 (1 GB), 2048 (2 GB), 3072 (3 GB), 4096 (4 GB) - Available `cpu` values: 512 (.5 vCPU)
   * - 2048 (2 GB), 3072 (3 GB), 4096 (4 GB), 5120 (5 GB), 6144 (6 GB), 7168 (7 GB), 8192 (8 GB) - Available `cpu` values: 1024 (1 vCPU)
   * - Between 4096 (4 GB) and 16384 (16 GB) in increments of 1024 (1 GB) - Available `cpu` values: 2048 (2 vCPU)
   * - Between 8192 (8 GB) and 30720 (30 GB) in increments of 1024 (1 GB) - Available `cpu` values: 4096 (4 vCPU)
   * - Between 16 GB and 60 GB in 4 GB increments - Available `cpu` values: 8192 (8 vCPU)
   *
   *   This option requires Linux platform `1.4.0` or later.
   * - Between 32GB and 120 GB in 8 GB increments - Available `cpu` values: 16384 (16 vCPU)
   *
   *   This option requires Linux platform `1.4.0` or later.
   *
   * @public
   */
  memory?: string | undefined;

  /**
   * The metadata that you apply to the task definition to help you categorize and organize them. Each tag consists of a key and an optional value. You define both of them.
   *
   * The following basic restrictions apply to tags:
   *
   * - Maximum number of tags per resource - 50
   * - For each resource, each tag key must be unique, and each tag key can have only one value.
   * - Maximum key length - 128 Unicode characters in UTF-8
   * - Maximum value length - 256 Unicode characters in UTF-8
   * - If your tagging schema is used across multiple services and resources, remember that other services may have restrictions on allowed characters. Generally allowed characters are: letters, numbers, and spaces representable in UTF-8, and the following characters: + - = . _ : / @.
   * - Tag keys and values are case-sensitive.
   * - Do not use `aws:`, `AWS:`, or any upper or lowercase combination of such as a prefix for either keys or values as it is reserved for Amazon Web Services use. You cannot edit or delete tag keys or values with this prefix. Tags with this prefix do not count against your tags per resource limit.
   *
   * @public
   */
  tags?: Tag[] | undefined;

  /**
   * The process namespace to use for the containers in the task. The valid values are `host` or `task`. On Fargate for Linux containers, the only valid value is `task`. For example, monitoring sidecars might need `pidMode` to access information about other containers running in the same task.
   *
   * If `host` is specified, all containers within the tasks that specified the `host` PID mode on the same container instance share the same process namespace with the host Amazon EC2 instance.
   *
   * If `task` is specified, all containers within the specified task share the same process namespace.
   *
   * If no value is specified, the The default is a private namespace for each container.
   *
   * If the `host` PID mode is used, there's a heightened risk of undesired process namespace exposure.
   *
   * > **Note:** This parameter is not supported for Windows containers.
   *
   * > **Note:** This parameter is only supported for tasks that are hosted on Fargate if the tasks are using platform version `1.4.0` or later (Linux). This isn't supported for Windows containers on Fargate.
   *
   * @public
   */
  pidMode?: PidMode | undefined;

  /**
   * The IPC resource namespace to use for the containers in the task. The valid values are `host`, `task`, or `none`. If `host` is specified, then all containers within the tasks that specified the `host` IPC mode on the same container instance share the same IPC resources with the host Amazon EC2 instance. If `task` is specified, all containers within the specified task share the same IPC resources. If `none` is specified, then IPC resources within the containers of a task are private and not shared with other containers in a task or on the container instance. If no value is specified, then the IPC resource namespace sharing depends on the Docker daemon setting on the container instance.
   *
   * If the `host` IPC mode is used, be aware that there is a heightened risk of undesired IPC namespace expose.
   *
   * If you are setting namespaced kernel parameters using `systemControls` for the containers in the task, the following will apply to your IPC resource namespace. For more information, see [System Controls](https://docs.aws.amazon.com/AmazonECS/latest/developerguide/task_definition_parameters.html) in the *Amazon Elastic Container Service Developer Guide*.
   *
   * - For tasks that use the `host` IPC mode, IPC namespace related `systemControls` are not supported.
   * - For tasks that use the `task` IPC mode, IPC namespace related `systemControls` will apply to all containers within a task.
   *
   * > **Note:** This parameter is not supported for Windows containers or tasks run on Fargate.
   *
   * @public
   */
  ipcMode?: IpcMode | undefined;

  /**
   * The configuration details for the App Mesh proxy.
   *
   * For tasks hosted on Amazon EC2 instances, the container instances require at least version `1.26.0` of the container agent and at least version `1.26.0-1` of the `ecs-init` package to use a proxy configuration. If your container instances are launched from the Amazon ECS-optimized AMI version `20190301` or later, then they contain the required versions of the container agent and `ecs-init`. For more information, see [Amazon ECS-optimized AMI versions](https://docs.aws.amazon.com/AmazonECS/latest/developerguide/ecs-ami-versions.html) in the *Amazon Elastic Container Service Developer Guide*.
   *
   * @public
   */
  proxyConfiguration?: ProxyConfiguration | undefined;

  /**
   * The Elastic Inference accelerators to use for the containers in the task.
   *
   * @deprecated (since 2023-04-15) This feature is no longer available.
   * @public
   */
  inferenceAccelerators?: InferenceAccelerator[] | undefined;

  /**
   * The amount of ephemeral storage to allocate for the task. This parameter is used to expand the total amount of ephemeral storage available, beyond the default amount, for tasks hosted on Fargate. For more information, see [Using data volumes in tasks](https://docs.aws.amazon.com/AmazonECS/latest/developerguide/using_data_volumes.html) in the *Amazon ECS Developer Guide*.
   *
   * > **Note:**
   * >
   * > For tasks using the Fargate launch type, the task requires the following platforms:
   * >
   * > - Linux platform version `1.4.0` or later.
   * > - Windows platform version `1.0.0` or later.
   *
   * @public
   */
  ephemeralStorage?: EphemeralStorage | undefined;

  /**
   * The operating system that your tasks definitions run on.
   *
   * @public
   */
  runtimePlatform?: RuntimePlatform | undefined;

  /**
   * Enables fault injection when you register your task definition and allows for fault injection requests to be accepted from the task's containers. The default value is `false`.
   *
   * @public
   */
  enableFaultInjection?: boolean | undefined;
}

/**
 *
 * @public
 */
export interface RegisterTaskDefinitionResponse {
  /**
   * The full description of the registered task definition.
   *
   * @public
   */
  taskDefinition?: TaskDefinition | undefined;

  /**
   * The list of tags associated with the task definition.
   *
   * @public
   */
  tags?: Tag[] | undefined;
}

/**
 *
 * @public
 */
export interface DescribeTasksRequest {
  /**
   * The short name or full Amazon Resource Name (ARN) of the cluster that hosts the task or tasks to describe. If you do not specify a cluster, the default cluster is assumed.
   *
   * @public
   */
  cluster?: string | undefined;

  /**
   * A list of up to 100 task IDs or full ARN entries.
   *
   * @public
   */
  tasks: string[] | undefined;

  /**
   * Specifies whether you want to see the resource tags for the task. If `TAGS` is specified, the tags are included in the response. If this field is omitted, tags aren't included in the response.
   *
   * @public
   */
  include?: TaskField[] | undefined;
}

/**
 * Details about the managed agent status for the container.
 *
 * @public
 */
export interface ManagedAgent {
  /**
   * The Unix timestamp for the time when the managed agent was last started.
   *
   * @public
   */
  lastStartedAt?: Date | undefined;

  /**
   * The name of the managed agent. When the execute command feature is turned on, the managed agent name is `ExecuteCommandAgent`.
   *
   * @public
   */
  name?: ManagedAgentName | undefined;

  /**
   * The reason for why the managed agent is in the state it is in.
   *
   * @public
   */
  reason?: string | undefined;

  /**
   * The last known status of the managed agent.
   *
   * @public
   */
  lastStatus?: string | undefined;
}

/**
 * An object representing the elastic network interface for tasks that use the `awsvpc` network mode.
 *
 * @public
 */
export interface NetworkInterface {
  /**
   * The attachment ID for the network interface.
   *
   * @public
   */
  attachmentId?: string | undefined;

  /**
   * The private IPv4 address for the network interface.
   *
   * @public
   */
  privateIpv4Address?: string | undefined;

  /**
   * The private IPv6 address for the network interface.
   *
   * @public
   */
  ipv6Address?: string | undefined;
}

/**
 * A Docker container that's part of a task.
 *
 * @public
 */
export interface Container {
  /**
   * The Amazon Resource Name (ARN) of the container.
   *
   * @public
   */
  containerArn?: string | undefined;

  /**
   * The ARN of the task.
   *
   * @public
   */
  taskArn?: string | undefined;

  /**
   * The name of the container.
   *
   * @public
   */
  name?: string | undefined;

  /**
   * The image used for the container.
   *
   * @public
   */
  image?: string | undefined;

  /**
   * The container image manifest digest.
   *
   * @public
   */
  imageDigest?: string | undefined;

  /**
   * The ID of the Docker container.
   *
   * @public
   */
  runtimeId?: string | undefined;

  /**
   * The last known status of the container.
   *
   * @public
   */
  lastStatus?: string | undefined;

  /**
   * The exit code returned from the container.
   *
   * @public
   */
  exitCode?: number | undefined;

  /**
   * A short (1024 max characters) human-readable string to provide additional details about a running or stopped container.
   *
   * @public
   */
  reason?: string | undefined;

  /**
   * The network bindings associated with the container.
   *
   * @public
   */
  networkBindings?: NetworkBinding[] | undefined;

  /**
   * The network interfaces associated with the container.
   *
   * @public
   */
  networkInterfaces?: NetworkInterface[] | undefined;

  /**
   * The health status of the container. If health checks aren't configured for this container in its task definition, then it reports the health status as `UNKNOWN`.
   *
   * @public
   */
  healthStatus?: HealthStatus | undefined;

  /**
   * The details of any Amazon ECS managed agents associated with the container.
   *
   * @public
   */
  managedAgents?: ManagedAgent[] | undefined;

  /**
   * The number of CPU units set for the container. The value is `0` if no value was specified in the container definition when the task definition was registered.
   *
   * @public
   */
  cpu?: string | undefined;

  /**
   * The hard limit (in MiB) of memory set for the container.
   *
   * @public
   */
  memory?: string | undefined;

  /**
   * The soft limit (in MiB) of memory set for the container.
   *
   * @public
   */
  memoryReservation?: string | undefined;

  /**
   * The IDs of each GPU assigned to the container.
   *
   * @public
   */
  gpuIds?: string[] | undefined;

  /**
   * The IDs of each Neuron device assigned to the container.
   *
   * @public
   */
  neuronDeviceIds?: string[] | undefined;

  /**
   * The GPU sharing strategy that the task definition specifies for the container. This field is present only for containers whose resource requirements include `sharingStrategy`.
   *
   * @public
   */
  gpuSharingStrategy?: SharingStrategy | undefined;
}

/**
 * The amount of ephemeral storage to allocate for the task.
 *
 * @public
 */
export interface TaskEphemeralStorage {
  /**
   * The total amount, in GiB, of the ephemeral storage to set for the task. The minimum supported value is `20` GiB and the maximum supported value is `200` GiB.
   *
   * @public
   */
  sizeInGiB?: number | undefined;

  /**
   * Specify an Key Management Service key ID to encrypt the ephemeral storage for the task.
   *
   * @public
   */
  kmsKeyId?: string | undefined;
}

/**
 * The overrides that are sent to a container. An empty container override can be passed in. An example of an empty container override is `\{"containerOverrides": [ ] \}`. If a non-empty container override is specified, the `name` parameter must be included.
 *
 * You can use Secrets Manager or Amazon Web Services Systems Manager Parameter Store to store the sensitive data. For more information, see [Retrieve secrets through environment variables](https://docs.aws.amazon.com/AmazonECS/latest/developerguide/secrets-envvar.html) in the Amazon ECS Developer Guide.
 *
 * @public
 */
export interface ContainerOverride {
  /**
   * The name of the container that receives the override. This parameter is required if any override is specified.
   *
   * @public
   */
  name?: string | undefined;

  /**
   * The command to send to the container that overrides the default command from the Docker image or the task definition. You must also specify a container name.
   *
   * @public
   */
  command?: string[] | undefined;

  /**
   * The environment variables to send to the container. You can add new environment variables, which are added to the container at launch, or you can override the existing environment variables from the Docker image or the task definition. You must also specify a container name.
   *
   * @public
   */
  environment?: KeyValuePair[] | undefined;

  /**
   * A list of files containing the environment variables to pass to a container, instead of the value from the container definition.
   *
   * @public
   */
  environmentFiles?: EnvironmentFile[] | undefined;

  /**
   * The number of `cpu` units reserved for the container, instead of the default value from the task definition. You must also specify a container name.
   *
   * @public
   */
  cpu?: number | undefined;

  /**
   * The hard limit (in MiB) of memory to present to the container, instead of the default value from the task definition. If your container attempts to exceed the memory specified here, the container is killed. You must also specify a container name.
   *
   * @public
   */
  memory?: number | undefined;

  /**
   * The soft limit (in MiB) of memory to reserve for the container, instead of the default value from the task definition. You must also specify a container name.
   *
   * @public
   */
  memoryReservation?: number | undefined;

  /**
   * The type and amount of a resource to assign to a container, instead of the default value from the task definition. The supported resources are GPUs and Neuron devices.
   *
   * @public
   */
  resourceRequirements?: ResourceRequirement[] | undefined;
}

/**
 * Details on an Elastic Inference accelerator task override. This parameter is used to override the Elastic Inference accelerator specified in the task definition. For more information, see [Working with Amazon Elastic Inference on Amazon ECS](https://docs.aws.amazon.com/AmazonECS/latest/developerguide/ecs-inference.html) in the *Amazon Elastic Container Service Developer Guide*.
 *
 * @deprecated (since 2023-04-15) This feature is no longer available.
 * @public
 */
export interface InferenceAcceleratorOverride {
  /**
   * The Elastic Inference accelerator device name to override for the task. This parameter must match a `deviceName` specified in the task definition.
   *
   * @public
   */
  deviceName?: string | undefined;

  /**
   * The Elastic Inference accelerator type to use.
   *
   * @public
   */
  deviceType?: string | undefined;
}

/**
 * The overrides that are associated with a task.
 *
 * @public
 */
export interface TaskOverride {
  /**
   * One or more container overrides that are sent to a task.
   *
   * @public
   */
  containerOverrides?: ContainerOverride[] | undefined;

  /**
   * The CPU override for the task.
   *
   * @public
   */
  cpu?: string | undefined;

  /**
   * The Elastic Inference accelerator override for the task.
   *
   * @deprecated (since 2023-04-15) This feature is no longer available.
   * @public
   */
  inferenceAcceleratorOverrides?: InferenceAcceleratorOverride[] | undefined;

  /**
   * The Amazon Resource Name (ARN) of the task execution role override for the task. For more information, see [Amazon ECS task execution IAM role](https://docs.aws.amazon.com/AmazonECS/latest/developerguide/task_execution_IAM_role.html) in the *Amazon Elastic Container Service Developer Guide*.
   *
   * @public
   */
  executionRoleArn?: string | undefined;

  /**
   * The memory override for the task.
   *
   * @public
   */
  memory?: string | undefined;

  /**
   * The Amazon Resource Name (ARN) of the role that containers in this task can assume. All containers in this task are granted the permissions that are specified in this role. For more information, see [IAM Role for Tasks](https://docs.aws.amazon.com/AmazonECS/latest/developerguide/task-iam-roles.html) in the *Amazon Elastic Container Service Developer Guide*.
   *
   * @public
   */
  taskRoleArn?: string | undefined;

  /**
   * The ephemeral storage setting override for the task.
   *
   * > **Note:**
   * >
   * > This parameter is only supported for tasks hosted on Fargate that use the following platform versions:
   * >
   * > - Linux platform version `1.4.0` or later.
   * > - Windows platform version `1.0.0` or later.
   *
   * @public
   */
  ephemeralStorage?: EphemeralStorage | undefined;
}

/**
 * Details on a task in a cluster.
 *
 * @public
 */
export interface Task {
  /**
   * The Elastic Network Adapter that's associated with the task if the task uses the `awsvpc` network mode.
   *
   * @public
   */
  attachments?: Attachment[] | undefined;

  /**
   * The attributes of the task
   *
   * @public
   */
  attributes?: Attribute[] | undefined;

  /**
   * The Availability Zone for the task.
   *
   * @public
   */
  availabilityZone?: string | undefined;

  /**
   * The capacity provider that's associated with the task.
   *
   * @public
   */
  capacityProviderName?: string | undefined;

  /**
   * The ARN of the cluster that hosts the task.
   *
   * @public
   */
  clusterArn?: string | undefined;

  /**
   * The connectivity status of a task.
   *
   * @public
   */
  connectivity?: Connectivity | undefined;

  /**
   * The Unix timestamp for the time when the task last went into `CONNECTED` status.
   *
   * @public
   */
  connectivityAt?: Date | undefined;

  /**
   * The ARN of the container instances that host the task.
   *
   * @public
   */
  containerInstanceArn?: string | undefined;

  /**
   * The containers that's associated with the task.
   *
   * @public
   */
  containers?: Container[] | undefined;

  /**
   * The number of CPU units used by the task as expressed in a task definition. It can be expressed as an integer using CPU units (for example, `1024`). It can also be expressed as a string using vCPUs (for example, `1 vCPU` or `1 vcpu`). String values are converted to an integer that indicates the CPU units when the task definition is registered.
   *
   * If you're using the EC2 launch type or the external launch type, this field is optional. Supported values are between `128` CPU units (`0.125` vCPUs) and `196608` CPU units (`192` vCPUs). If you do not specify a value, the parameter is ignored.
   *
   * This field is required for Fargate. For information about the valid values, see [Task size](https://docs.aws.amazon.com/AmazonECS/latest/developerguide/task_definition_parameters.html#task_size) in the *Amazon Elastic Container Service Developer Guide*.
   *
   * @public
   */
  cpu?: string | undefined;

  /**
   * The Unix timestamp for the time when the task was created. More specifically, it's for the time when the task entered the `PENDING` state.
   *
   * @public
   */
  createdAt?: Date | undefined;

  /**
   * The desired status of the task. For more information, see [Task Lifecycle](https://docs.aws.amazon.com/AmazonECS/latest/developerguide/task-lifecycle.html).
   *
   * @public
   */
  desiredStatus?: string | undefined;

  /**
   * Determines whether execute command functionality is turned on for this task. If `true`, execute command functionality is turned on all the containers in the task.
   *
   * @public
   */
  enableExecuteCommand?: boolean | undefined;

  /**
   * The Unix timestamp for the time when the task execution stopped.
   *
   * @public
   */
  executionStoppedAt?: Date | undefined;

  /**
   * The name of the task group that's associated with the task.
   *
   * @public
   */
  group?: string | undefined;

  /**
   * The health status for the task. It's determined by the health of the essential containers in the task. If all essential containers in the task are reporting as `HEALTHY`, the task status also reports as `HEALTHY`. If any essential containers in the task are reporting as `UNHEALTHY` or `UNKNOWN`, the task status also reports as `UNHEALTHY` or `UNKNOWN`.
   *
   * > **Note:** The Amazon ECS container agent doesn't monitor or report on Docker health checks that are embedded in a container image and not specified in the container definition. For example, this includes those specified in a parent image or from the image's Dockerfile. Health check parameters that are specified in a container definition override any Docker health checks that are found in the container image.
   *
   * @public
   */
  healthStatus?: HealthStatus | undefined;

  /**
   * The Elastic Inference accelerator that's associated with the task.
   *
   * @deprecated (since 2023-04-15) This feature is no longer available.
   * @public
   */
  inferenceAccelerators?: InferenceAccelerator[] | undefined;

  /**
   * The last known status for the task. For more information, see [Task Lifecycle](https://docs.aws.amazon.com/AmazonECS/latest/developerguide/task-lifecycle.html).
   *
   * @public
   */
  lastStatus?: string | undefined;

  /**
   * The infrastructure where your task runs on. For more information, see [Amazon ECS launch types](https://docs.aws.amazon.com/AmazonECS/latest/developerguide/launch_types.html) in the *Amazon Elastic Container Service Developer Guide*.
   *
   * @public
   */
  launchType?: LaunchType | undefined;

  /**
   * The amount of memory (in MiB) that the task uses as expressed in a task definition. It can be expressed as an integer using MiB (for example, `1024`). If it's expressed as a string using GB (for example, `1GB` or `1 GB`), it's converted to an integer indicating the MiB when the task definition is registered.
   *
   * If you use the EC2 launch type, this field is optional.
   *
   * If you use the Fargate launch type, this field is required. You must use one of the following values. The value that you choose determines the range of supported values for the `cpu` parameter.
   *
   * - 512 (0.5 GB), 1024 (1 GB), 2048 (2 GB) - Available `cpu` values: 256 (.25 vCPU)
   * - 1024 (1 GB), 2048 (2 GB), 3072 (3 GB), 4096 (4 GB) - Available `cpu` values: 512 (.5 vCPU)
   * - 2048 (2 GB), 3072 (3 GB), 4096 (4 GB), 5120 (5 GB), 6144 (6 GB), 7168 (7 GB), 8192 (8 GB) - Available `cpu` values: 1024 (1 vCPU)
   * - Between 4096 (4 GB) and 16384 (16 GB) in increments of 1024 (1 GB) - Available `cpu` values: 2048 (2 vCPU)
   * - Between 8192 (8 GB) and 30720 (30 GB) in increments of 1024 (1 GB) - Available `cpu` values: 4096 (4 vCPU)
   * - Between 16 GB and 60 GB in 4 GB increments - Available `cpu` values: 8192 (8 vCPU)
   *
   *   This option requires Linux platform `1.4.0` or later.
   * - Between 32GB and 120 GB in 8 GB increments - Available `cpu` values: 16384 (16 vCPU)
   *
   *   This option requires Linux platform `1.4.0` or later.
   *
   * @public
   */
  memory?: string | undefined;

  /**
   * One or more container overrides.
   *
   * @public
   */
  overrides?: TaskOverride | undefined;

  /**
   * The platform version where your task runs on. A platform version is only specified for tasks that use the Fargate launch type. If you didn't specify one, the `LATEST` platform version is used. For more information, see [Fargate Platform Versions](https://docs.aws.amazon.com/AmazonECS/latest/developerguide/platform_versions.html) in the *Amazon Elastic Container Service Developer Guide*.
   *
   * @public
   */
  platformVersion?: string | undefined;

  /**
   * The operating system that your tasks are running on. A platform family is specified only for tasks that use the Fargate launch type.
   *
   * All tasks that run as part of this service must use the same `platformFamily` value as the service (for example, `LINUX.`).
   *
   * @public
   */
  platformFamily?: string | undefined;

  /**
   * The Unix timestamp for the time when the container image pull began.
   *
   * @public
   */
  pullStartedAt?: Date | undefined;

  /**
   * The Unix timestamp for the time when the container image pull completed.
   *
   * @public
   */
  pullStoppedAt?: Date | undefined;

  /**
   * The Unix timestamp for the time when the task started. More specifically, it's for the time when the task transitioned from the `PENDING` state to the `RUNNING` state.
   *
   * @public
   */
  startedAt?: Date | undefined;

  /**
   * The tag specified when a task is started. If an Amazon ECS service started the task, the `startedBy` parameter contains the deployment ID of that service.
   *
   * @public
   */
  startedBy?: string | undefined;

  /**
   * The stop code indicating why a task was stopped. The `stoppedReason` might contain additional details.
   *
   * For more information about stop code, see [Stopped tasks error codes](https://docs.aws.amazon.com/AmazonECS/latest/developerguide/stopped-task-error-codes.html) in the *Amazon ECS Developer Guide*.
   *
   * @public
   */
  stopCode?: TaskStopCode | undefined;

  /**
   * The Unix timestamp for the time when the task was stopped. More specifically, it's for the time when the task transitioned from the `RUNNING` state to the `STOPPED` state.
   *
   * @public
   */
  stoppedAt?: Date | undefined;

  /**
   * The reason that the task was stopped.
   *
   * @public
   */
  stoppedReason?: string | undefined;

  /**
   * The Unix timestamp for the time when the task stops. More specifically, it's for the time when the task transitions from the `RUNNING` state to `STOPPING`.
   *
   * @public
   */
  stoppingAt?: Date | undefined;

  /**
   * The metadata that you apply to the task to help you categorize and organize the task. Each tag consists of a key and an optional value. You define both the key and value.
   *
   * The following basic restrictions apply to tags:
   *
   * - Maximum number of tags per resource - 50
   * - For each resource, each tag key must be unique, and each tag key can have only one value.
   * - Maximum key length - 128 Unicode characters in UTF-8
   * - Maximum value length - 256 Unicode characters in UTF-8
   * - If your tagging schema is used across multiple services and resources, remember that other services may have restrictions on allowed characters. Generally allowed characters are: letters, numbers, and spaces representable in UTF-8, and the following characters: + - = . _ : / @.
   * - Tag keys and values are case-sensitive.
   * - Do not use `aws:`, `AWS:`, or any upper or lowercase combination of such as a prefix for either keys or values as it is reserved for Amazon Web Services use. You cannot edit or delete tag keys or values with this prefix. Tags with this prefix do not count against your tags per resource limit.
   *
   * @public
   */
  tags?: Tag[] | undefined;

  /**
   * The Amazon Resource Name (ARN) of the task.
   *
   * @public
   */
  taskArn?: string | undefined;

  /**
   * The ARN of the task definition that creates the task.
   *
   * @public
   */
  taskDefinitionArn?: string | undefined;

  /**
   * The version counter for the task. Every time a task experiences a change that starts a CloudWatch event, the version counter is incremented. If you replicate your Amazon ECS task state with CloudWatch Events, you can compare the version of a task reported by the Amazon ECS API actions with the version reported in CloudWatch Events for the task (inside the `detail` object) to verify that the version in your event stream is current.
   *
   * @public
   */
  version?: number | undefined;

  /**
   * The ephemeral storage settings for the task.
   *
   * @public
   */
  ephemeralStorage?: EphemeralStorage | undefined;

  /**
   * The Fargate ephemeral storage settings for the task.
   *
   * @public
   */
  fargateEphemeralStorage?: TaskEphemeralStorage | undefined;
}

/**
 *
 * @public
 */
export interface DescribeTasksResponse {
  /**
   * The list of tasks.
   *
   * @public
   */
  tasks?: Task[] | undefined;

  /**
   * Any failures associated with the call.
   *
   * @public
   */
  failures?: Failure[] | undefined;
}

/**
 * @public
 */
export interface GetTaskProtectionRequest {
  /**
   * The short name or full Amazon Resource Name (ARN) of the cluster that hosts the service that the task sets exist in.
   *
   * @public
   */
  cluster: string | undefined;

  /**
   * A list of up to 100 task IDs or full ARN entries.
   *
   * @public
   */
  tasks?: string[] | undefined;
}

/**
 * An object representing the protection status details for a task. You can set the protection status with the [UpdateTaskProtection](https://docs.aws.amazon.com/AmazonECS/latest/APIReference/API_UpdateTaskProtection.html) API and get the status of tasks with the [GetTaskProtection](https://docs.aws.amazon.com/AmazonECS/latest/APIReference/API_GetTaskProtection.html) API.
 *
 * @public
 */
export interface ProtectedTask {
  /**
   * The task ARN.
   *
   * @public
   */
  taskArn?: string | undefined;

  /**
   * The protection status of the task. If scale-in protection is on for a task, the value is `true`. Otherwise, it is `false`.
   *
   * @public
   */
  protectionEnabled?: boolean | undefined;

  /**
   * The epoch time when protection for the task will expire.
   *
   * @public
   */
  expirationDate?: Date | undefined;
}

/**
 * @public
 */
export interface GetTaskProtectionResponse {
  /**
   * A list of tasks with the following information.
   *
   * - `taskArn`: The task ARN.
   * - `protectionEnabled`: The protection status of the task. If scale-in protection is turned on for a task, the value is `true`. Otherwise, it is `false`.
   * - `expirationDate`: The epoch time when protection for the task will expire.
   *
   * @public
   */
  protectedTasks?: ProtectedTask[] | undefined;

  /**
   * Any failures associated with the call.
   *
   * @public
   */
  failures?: Failure[] | undefined;
}

/**
 * The termination policy for the Amazon EBS volume when the task exits. For more information, see [Amazon ECS volume termination policy](https://docs.aws.amazon.com/AmazonECS/latest/developerguide/ebs-volumes.html#ebs-volume-types).
 *
 * @public
 */
export interface TaskManagedEBSVolumeTerminationPolicy {
  /**
   * Indicates whether the volume should be deleted on when the task stops. If a value of `true` is specified, Amazon ECS deletes the Amazon EBS volume on your behalf when the task goes into the `STOPPED` state. If no value is specified, the default value is `true` is used. When set to `false`, Amazon ECS leaves the volume in your account.
   *
   * @public
   */
  deleteOnTermination: boolean | undefined;
}

/**
 * The configuration for the Amazon EBS volume that Amazon ECS creates and manages on your behalf. These settings are used to create each Amazon EBS volume, with one volume created for each task.
 *
 * @public
 */
export interface TaskManagedEBSVolumeConfiguration {
  /**
   * Indicates whether the volume should be encrypted. If you turn on Region-level Amazon EBS encryption by default but set this value as `false`, the setting is overridden and the volume is encrypted with the KMS key specified for Amazon EBS encryption by default. This parameter maps 1:1 with the `Encrypted` parameter of the [CreateVolume API](https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_CreateVolume.html) in the *Amazon EC2 API Reference*.
   *
   * @public
   */
  encrypted?: boolean | undefined;

  /**
   * The Amazon Resource Name (ARN) identifier of the Amazon Web Services Key Management Service key to use for Amazon EBS encryption. When a key is specified using this parameter, it overrides Amazon EBS default encryption or any KMS key that you specified for cluster-level managed storage encryption. This parameter maps 1:1 with the `KmsKeyId` parameter of the [CreateVolume API](https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_CreateVolume.html) in the *Amazon EC2 API Reference*. For more information about encrypting Amazon EBS volumes attached to a task, see [Encrypt data stored in Amazon EBS volumes attached to Amazon ECS tasks](https://docs.aws.amazon.com/AmazonECS/latest/developerguide/ebs-kms-encryption.html).
   *
   * > **Important:** Amazon Web Services authenticates the Amazon Web Services Key Management Service key asynchronously. Therefore, if you specify an ID, alias, or ARN that is invalid, the action can appear to complete, but eventually fails.
   *
   * @public
   */
  kmsKeyId?: string | undefined;

  /**
   * The volume type. This parameter maps 1:1 with the `VolumeType` parameter of the [CreateVolume API](https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_CreateVolume.html) in the *Amazon EC2 API Reference*. For more information, see [Amazon EBS volume types](https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/ebs-volume-types.html) in the *Amazon EC2 User Guide*.
   *
   * The following are the supported volume types.
   *
   * - General Purpose SSD: `gp2`|`gp3`
   * - Provisioned IOPS SSD: `io1`|`io2`
   * - Throughput Optimized HDD: `st1`
   * - Cold HDD: `sc1`
   * - Magnetic: `standard`
   *
   *   > **Note:** The magnetic volume type is not supported on Fargate.
   *
   * @public
   */
  volumeType?: string | undefined;

  /**
   * The size of the volume in GiB. You must specify either a volume size or a snapshot ID. If you specify a snapshot ID, the snapshot size is used for the volume size by default. You can optionally specify a volume size greater than or equal to the snapshot size. This parameter maps 1:1 with the `Size` parameter of the [CreateVolume API](https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_CreateVolume.html) in the *Amazon EC2 API Reference*.
   *
   * The following are the supported volume size values for each volume type.
   *
   * - `gp2` and `gp3`: 1-16,384
   * - `io1` and `io2`: 4-16,384
   * - `st1` and `sc1`: 125-16,384
   * - `standard`: 1-1,024
   *
   * @public
   */
  sizeInGiB?: number | undefined;

  /**
   * The snapshot that Amazon ECS uses to create the volume. You must specify either a snapshot ID or a volume size. This parameter maps 1:1 with the `SnapshotId` parameter of the [CreateVolume API](https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_CreateVolume.html) in the *Amazon EC2 API Reference*.
   *
   * @public
   */
  snapshotId?: string | undefined;

  /**
   * The rate, in MiB/s, at which data is fetched from a snapshot of an existing Amazon EBS volume to create a new volume for attachment to the task. This property can be specified only if you specify a `snapshotId`. For more information, see [Initialize Amazon EBS volumes](https://docs.aws.amazon.com/ebs/latest/userguide/initalize-volume.html) in the *Amazon EBS User Guide*.
   *
   * @public
   */
  volumeInitializationRate?: number | undefined;

  /**
   * The number of I/O operations per second (IOPS). For `gp3`, `io1`, and `io2` volumes, this represents the number of IOPS that are provisioned for the volume. For `gp2` volumes, this represents the baseline performance of the volume and the rate at which the volume accumulates I/O credits for bursting.
   *
   * The following are the supported values for each volume type.
   *
   * - `gp3`: 3,000 - 16,000 IOPS
   * - `io1`: 100 - 64,000 IOPS
   * - `io2`: 100 - 256,000 IOPS
   *
   * This parameter is required for `io1` and `io2` volume types. The default for `gp3` volumes is `3,000 IOPS`. This parameter is not supported for `st1`, `sc1`, or `standard` volume types.
   *
   * This parameter maps 1:1 with the `Iops` parameter of the [CreateVolume API](https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_CreateVolume.html) in the *Amazon EC2 API Reference*.
   *
   * @public
   */
  iops?: number | undefined;

  /**
   * The throughput to provision for a volume, in MiB/s, with a maximum of 1,000 MiB/s. This parameter maps 1:1 with the `Throughput` parameter of the [CreateVolume API](https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_CreateVolume.html) in the *Amazon EC2 API Reference*.
   *
   * > **Important:** This parameter is only supported for the `gp3` volume type.
   *
   * @public
   */
  throughput?: number | undefined;

  /**
   * The tags to apply to the volume. Amazon ECS applies service-managed tags by default. This parameter maps 1:1 with the `TagSpecifications.N` parameter of the [CreateVolume API](https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_CreateVolume.html) in the *Amazon EC2 API Reference*.
   *
   * @public
   */
  tagSpecifications?: EBSTagSpecification[] | undefined;

  /**
   * The ARN of the IAM role to associate with this volume. This is the Amazon ECS infrastructure IAM role that is used to manage your Amazon Web Services infrastructure. We recommend using the Amazon ECS-managed `AmazonECSInfrastructureRolePolicyForVolumes` IAM policy with this role. For more information, see [Amazon ECS infrastructure IAM role](https://docs.aws.amazon.com/AmazonECS/latest/developerguide/infrastructure_IAM_role.html) in the *Amazon ECS Developer Guide*.
   *
   * @public
   */
  roleArn: string | undefined;

  /**
   * The termination policy for the volume when the task exits. This provides a way to control whether Amazon ECS terminates the Amazon EBS volume when the task stops.
   *
   * @public
   */
  terminationPolicy?: TaskManagedEBSVolumeTerminationPolicy | undefined;

  /**
   * The Linux filesystem type for the volume. For volumes created from a snapshot, you must specify the same filesystem type that the volume was using when the snapshot was created. If there is a filesystem type mismatch, the task will fail to start.
   *
   * The available filesystem types are `ext3`, `ext4`, and `xfs`. If no value is specified, the `xfs` filesystem type is used by default.
   *
   * @public
   */
  filesystemType?: TaskFilesystemType | undefined;
}

/**
 * Configuration settings for the task volume that was `configuredAtLaunch` that weren't set during `RegisterTaskDef`.
 *
 * @public
 */
export interface TaskVolumeConfiguration {
  /**
   * The name of the volume. This value must match the volume name from the `Volume` object in the task definition.
   *
   * @public
   */
  name: string | undefined;

  /**
   * The configuration for the Amazon EBS volume that Amazon ECS creates and manages on your behalf. These settings are used to create each Amazon EBS volume, with one volume created for each task. The Amazon EBS volumes are visible in your account in the Amazon EC2 console once they are created.
   *
   * @public
   */
  managedEBSVolume?: TaskManagedEBSVolumeConfiguration | undefined;
}

/**
 *
 * @public
 */
export interface RunTaskRequest {
  /**
   * The capacity provider strategy to use for the task.
   *
   * > **Note:** If you want to use Amazon ECS Managed Instances, you must use the `capacityProviderStrategy` request parameter and omit the `launchType` request parameter.
   *
   * If a `capacityProviderStrategy` is specified, the `launchType` parameter must be omitted. If no `capacityProviderStrategy` or `launchType` is specified, the `defaultCapacityProviderStrategy` for the cluster is used.
   *
   * When you use cluster auto scaling, you must specify `capacityProviderStrategy` and not `launchType`.
   *
   * A capacity provider strategy can contain a maximum of 20 capacity providers.
   *
   * @public
   */
  capacityProviderStrategy?: CapacityProviderStrategyItem[] | undefined;

  /**
   * The short name or full Amazon Resource Name (ARN) of the cluster to run your task on. If you do not specify a cluster, the default cluster is assumed.
   *
   * Each account receives a default cluster the first time you use the service, but you may also create other clusters.
   *
   * @public
   */
  cluster?: string | undefined;

  /**
   * The number of instantiations of the specified task to place on your cluster. You can specify up to 10 tasks for each call.
   *
   * @public
   */
  count?: number | undefined;

  /**
   * Specifies whether to use Amazon ECS managed tags for the task. For more information, see [Tagging Your Amazon ECS Resources](https://docs.aws.amazon.com/AmazonECS/latest/developerguide/ecs-using-tags.html) in the *Amazon Elastic Container Service Developer Guide*.
   *
   * @public
   */
  enableECSManagedTags?: boolean | undefined;

  /**
   * Determines whether to use the execute command functionality for the containers in this task. If `true`, this enables execute command functionality on all containers in the task.
   *
   * If `true`, then the task definition must have a task role, or you must provide one as an override.
   *
   * @public
   */
  enableExecuteCommand?: boolean | undefined;

  /**
   * The name of the task group to associate with the task. The default value is the family name of the task definition (for example, `family:my-family-name`).
   *
   * @public
   */
  group?: string | undefined;

  /**
   * The infrastructure to run your standalone task on. For more information, see [Amazon ECS launch types](https://docs.aws.amazon.com/AmazonECS/latest/developerguide/launch_types.html) in the *Amazon Elastic Container Service Developer Guide*.
   *
   * > **Note:** If you want to use Amazon ECS Managed Instances, you must use the `capacityProviderStrategy` request parameter and omit the `launchType` request parameter.
   *
   * The `FARGATE` launch type runs your tasks on Fargate On-Demand infrastructure.
   *
   * > **Note:** Fargate Spot infrastructure is available for use but a capacity provider strategy must be used. For more information, see [Fargate capacity providers](https://docs.aws.amazon.com/AmazonECS/latest/developerguide/fargate-capacity-providers.html) in the *Amazon ECS Developer Guide*.
   *
   * The `EC2` launch type runs your tasks on Amazon EC2 instances registered to your cluster.
   *
   * The `EXTERNAL` launch type runs your tasks on your on-premises server or virtual machine (VM) capacity registered to your cluster.
   *
   * A task can use either a launch type or a capacity provider strategy. If a `launchType` is specified, the `capacityProviderStrategy` parameter must be omitted.
   *
   * When you use cluster auto scaling, you must specify `capacityProviderStrategy` and not `launchType`.
   *
   * @public
   */
  launchType?: LaunchType | undefined;

  /**
   * The network configuration for the task. This parameter is required for task definitions that use the `awsvpc` network mode to receive their own elastic network interface, and it isn't supported for other network modes. For more information, see [Task networking](https://docs.aws.amazon.com/AmazonECS/latest/developerguide/task-networking.html) in the *Amazon Elastic Container Service Developer Guide*.
   *
   * @public
   */
  networkConfiguration?: NetworkConfiguration | undefined;

  /**
   * A list of container overrides in JSON format that specify the name of a container in the specified task definition and the overrides it should receive. You can override the default command for a container (that's specified in the task definition or Docker image) with a `command` override. You can also override existing environment variables (that are specified in the task definition or Docker image) on a container or add new environment variables to it with an `environment` override.
   *
   * A total of 8192 characters are allowed for overrides. This limit includes the JSON formatting characters of the override structure.
   *
   * @public
   */
  overrides?: TaskOverride | undefined;

  /**
   * An array of placement constraint objects to use for the task. You can specify up to 10 constraints for each task (including constraints in the task definition and those specified at runtime).
   *
   * @public
   */
  placementConstraints?: PlacementConstraint[] | undefined;

  /**
   * The placement strategy objects to use for the task. You can specify a maximum of 5 strategy rules for each task.
   *
   * @public
   */
  placementStrategy?: PlacementStrategy[] | undefined;

  /**
   * The platform version the task uses. A platform version is only specified for tasks hosted on Fargate. If one isn't specified, the `LATEST` platform version is used. For more information, see [Fargate platform versions](https://docs.aws.amazon.com/AmazonECS/latest/developerguide/platform_versions.html) in the *Amazon Elastic Container Service Developer Guide*.
   *
   * @public
   */
  platformVersion?: string | undefined;

  /**
   * Specifies whether to propagate the tags from the task definition to the task. If no value is specified, the tags aren't propagated. Tags can only be propagated to the task during task creation. To add tags to a task after task creation, use the[TagResource](https://docs.aws.amazon.com/AmazonECS/latest/APIReference/API_TagResource.html) API action.
   *
   * > **Note:** An error will be received if you specify the `SERVICE` option when running a task.
   *
   * @public
   */
  propagateTags?: PropagateTags | undefined;

  /**
   * This parameter is only used by Amazon ECS. It is not intended for use by customers.
   *
   * @public
   */
  referenceId?: string | undefined;

  /**
   * An optional tag specified when a task is started. For example, if you automatically trigger a task to run a batch process job, you could apply a unique identifier for that job to your task with the `startedBy` parameter. You can then identify which tasks belong to that job by filtering the results of a [ListTasks](https://docs.aws.amazon.com/AmazonECS/latest/APIReference/API_ListTasks.html) call with the `startedBy` value. Up to 128 letters (uppercase and lowercase), numbers, hyphens (-), forward slash (/), and underscores (_) are allowed.
   *
   * If a task is started by an Amazon ECS service, then the `startedBy` parameter contains the deployment ID of the service that starts it.
   *
   * @public
   */
  startedBy?: string | undefined;

  /**
   * The metadata that you apply to the task to help you categorize and organize them. Each tag consists of a key and an optional value, both of which you define.
   *
   * The following basic restrictions apply to tags:
   *
   * - Maximum number of tags per resource - 50
   * - For each resource, each tag key must be unique, and each tag key can have only one value.
   * - Maximum key length - 128 Unicode characters in UTF-8
   * - Maximum value length - 256 Unicode characters in UTF-8
   * - If your tagging schema is used across multiple services and resources, remember that other services may have restrictions on allowed characters. Generally allowed characters are: letters, numbers, and spaces representable in UTF-8, and the following characters: + - = . _ : / @.
   * - Tag keys and values are case-sensitive.
   * - Do not use `aws:`, `AWS:`, or any upper or lowercase combination of such as a prefix for either keys or values as it is reserved for Amazon Web Services use. You cannot edit or delete tag keys or values with this prefix. Tags with this prefix do not count against your tags per resource limit.
   *
   * @public
   */
  tags?: Tag[] | undefined;

  /**
   * The `family` and `revision` (`family:revision`) or full ARN of the task definition to run. If a `revision` isn't specified, the latest `ACTIVE` revision is used.
   *
   * The full ARN value must match the value that you specified as the `Resource` of the principal's permissions policy.
   *
   * When you specify a task definition, you must either specify a specific revision, or all revisions in the ARN.
   *
   * To specify a specific revision, include the revision number in the ARN. For example, to specify revision 2, use `arn:aws:ecs:us-east-1:111122223333:task-definition/TaskFamilyName:2`.
   *
   * To specify all revisions, use the wildcard (*) in the ARN. For example, to specify all revisions, use `arn:aws:ecs:us-east-1:111122223333:task-definition/TaskFamilyName:*`.
   *
   * For more information, see [Policy Resources for Amazon ECS](https://docs.aws.amazon.com/AmazonECS/latest/developerguide/security_iam_service-with-iam.html#security_iam_service-with-iam-id-based-policies-resources) in the Amazon Elastic Container Service Developer Guide.
   *
   * @public
   */
  taskDefinition: string | undefined;

  /**
   * An identifier that you provide to ensure the idempotency of the request. It must be unique and is case sensitive. Up to 64 characters are allowed. The valid characters are characters in the range of 33-126, inclusive. For more information, see [Ensuring idempotency](https://docs.aws.amazon.com/AmazonECS/latest/APIReference/ECS_Idempotency.html).
   *
   * @public
   */
  clientToken?: string | undefined;

  /**
   * The details of the volume that was `configuredAtLaunch`. You can configure the size, volumeType, IOPS, throughput, snapshot and encryption in [TaskManagedEBSVolumeConfiguration](https://docs.aws.amazon.com/AmazonECS/latest/APIReference/API_TaskManagedEBSVolumeConfiguration.html). The `name` of the volume must match the `name` from the task definition.
   *
   * @public
   */
  volumeConfigurations?: TaskVolumeConfiguration[] | undefined;
}

/**
 *
 * @public
 */
export interface RunTaskResponse {
  /**
   * A full description of the tasks that were run. The tasks that were successfully placed on your cluster are described here.
   *
   * @public
   */
  tasks?: Task[] | undefined;

  /**
   * Any failures associated with the call.
   *
   * For information about how to address failures, see [Service event messages](https://docs.aws.amazon.com/AmazonECS/latest/developerguide/service-event-messages.html#service-event-messages-list) and [API failure reasons](https://docs.aws.amazon.com/AmazonECS/latest/developerguide/api_failures_messages.html) in the *Amazon Elastic Container Service Developer Guide*.
   *
   * @public
   */
  failures?: Failure[] | undefined;
}

/**
 *
 * @public
 */
export interface StartTaskRequest {
  /**
   * The short name or full Amazon Resource Name (ARN) of the cluster where to start your task. If you do not specify a cluster, the default cluster is assumed.
   *
   * @public
   */
  cluster?: string | undefined;

  /**
   * The container instance IDs or full ARN entries for the container instances where you would like to place your task. You can specify up to 10 container instances.
   *
   * @public
   */
  containerInstances: string[] | undefined;

  /**
   * Specifies whether to use Amazon ECS managed tags for the task. For more information, see [Tagging Your Amazon ECS Resources](https://docs.aws.amazon.com/AmazonECS/latest/developerguide/ecs-using-tags.html) in the *Amazon Elastic Container Service Developer Guide*.
   *
   * @public
   */
  enableECSManagedTags?: boolean | undefined;

  /**
   * Whether or not the execute command functionality is turned on for the task. If `true`, this turns on the execute command functionality on all containers in the task.
   *
   * @public
   */
  enableExecuteCommand?: boolean | undefined;

  /**
   * The name of the task group to associate with the task. The default value is the family name of the task definition (for example, family:my-family-name).
   *
   * @public
   */
  group?: string | undefined;

  /**
   * The VPC subnet and security group configuration for tasks that receive their own elastic network interface by using the `awsvpc` networking mode.
   *
   * @public
   */
  networkConfiguration?: NetworkConfiguration | undefined;

  /**
   * A list of container overrides in JSON format that specify the name of a container in the specified task definition and the overrides it receives. You can override the default command for a container (that's specified in the task definition or Docker image) with a `command` override. You can also override existing environment variables (that are specified in the task definition or Docker image) on a container or add new environment variables to it with an `environment` override.
   *
   * > **Note:** A total of 8192 characters are allowed for overrides. This limit includes the JSON formatting characters of the override structure.
   *
   * @public
   */
  overrides?: TaskOverride | undefined;

  /**
   * Specifies whether to propagate the tags from the task definition or the service to the task. If no value is specified, the tags aren't propagated.
   *
   * @public
   */
  propagateTags?: PropagateTags | undefined;

  /**
   * This parameter is only used by Amazon ECS. It is not intended for use by customers.
   *
   * @public
   */
  referenceId?: string | undefined;

  /**
   * An optional tag specified when a task is started. For example, if you automatically trigger a task to run a batch process job, you could apply a unique identifier for that job to your task with the `startedBy` parameter. You can then identify which tasks belong to that job by filtering the results of a [ListTasks](https://docs.aws.amazon.com/AmazonECS/latest/APIReference/API_ListTasks.html) call with the `startedBy` value. Up to 36 letters (uppercase and lowercase), numbers, hyphens (-), forward slash (/), and underscores (_) are allowed.
   *
   * If a task is started by an Amazon ECS service, the `startedBy` parameter contains the deployment ID of the service that starts it.
   *
   * @public
   */
  startedBy?: string | undefined;

  /**
   * The metadata that you apply to the task to help you categorize and organize them. Each tag consists of a key and an optional value, both of which you define.
   *
   * The following basic restrictions apply to tags:
   *
   * - Maximum number of tags per resource - 50
   * - For each resource, each tag key must be unique, and each tag key can have only one value.
   * - Maximum key length - 128 Unicode characters in UTF-8
   * - Maximum value length - 256 Unicode characters in UTF-8
   * - If your tagging schema is used across multiple services and resources, remember that other services may have restrictions on allowed characters. Generally allowed characters are: letters, numbers, and spaces representable in UTF-8, and the following characters: + - = . _ : / @.
   * - Tag keys and values are case-sensitive.
   * - Do not use `aws:`, `AWS:`, or any upper or lowercase combination of such as a prefix for either keys or values as it is reserved for Amazon Web Services use. You cannot edit or delete tag keys or values with this prefix. Tags with this prefix do not count against your tags per resource limit.
   *
   * @public
   */
  tags?: Tag[] | undefined;

  /**
   * The `family` and `revision` (`family:revision`) or full ARN of the task definition to start. If a `revision` isn't specified, the latest `ACTIVE` revision is used.
   *
   * @public
   */
  taskDefinition: string | undefined;

  /**
   * The details of the volume that was `configuredAtLaunch`. You can configure the size, volumeType, IOPS, throughput, snapshot and encryption in [TaskManagedEBSVolumeConfiguration](https://docs.aws.amazon.com/AmazonECS/latest/APIReference/API_TaskManagedEBSVolumeConfiguration.html). The `name` of the volume must match the `name` from the task definition.
   *
   * @public
   */
  volumeConfigurations?: TaskVolumeConfiguration[] | undefined;
}

/**
 *
 * @public
 */
export interface StartTaskResponse {
  /**
   * A full description of the tasks that were started. Each task that was successfully placed on your container instances is described.
   *
   * @public
   */
  tasks?: Task[] | undefined;

  /**
   * Any failures associated with the call.
   *
   * @public
   */
  failures?: Failure[] | undefined;
}

/**
 *
 * @public
 */
export interface StopTaskRequest {
  /**
   * The short name or full Amazon Resource Name (ARN) of the cluster that hosts the task to stop. If you do not specify a cluster, the default cluster is assumed.
   *
   * @public
   */
  cluster?: string | undefined;

  /**
   * Thefull Amazon Resource Name (ARN) of the task.
   *
   * @public
   */
  task: string | undefined;

  /**
   * An optional message specified when a task is stopped. For example, if you're using a custom scheduler, you can use this parameter to specify the reason for stopping the task here, and the message appears in subsequent [DescribeTasks](https://docs.aws.amazon.com/AmazonECS/latest/APIReference/API_DescribeTasks.html)&gt; API operations on this task.
   *
   * @public
   */
  reason?: string | undefined;
}

/**
 *
 * @public
 */
export interface StopTaskResponse {
  /**
   * The task that was stopped.
   *
   * @public
   */
  task?: Task | undefined;
}

/**
 * @public
 */
export interface UpdateTaskProtectionRequest {
  /**
   * The short name or full Amazon Resource Name (ARN) of the cluster that hosts the service that the task sets exist in.
   *
   * @public
   */
  cluster: string | undefined;

  /**
   * A list of up to 10 task IDs or full ARN entries.
   *
   * @public
   */
  tasks: string[] | undefined;

  /**
   * Specify `true` to mark a task for protection and `false` to unset protection, making it eligible for termination.
   *
   * @public
   */
  protectionEnabled: boolean | undefined;

  /**
   * If you set `protectionEnabled` to `true`, you can specify the duration for task protection in minutes. You can specify a value from 1 minute to up to 2,880 minutes (48 hours). During this time, your task will not be terminated by scale-in events from Service Auto Scaling or deployments. After this time period lapses, `protectionEnabled` will be reset to `false`.
   *
   * If you don’t specify the time, then the task is automatically protected for 120 minutes (2 hours).
   *
   * @public
   */
  expiresInMinutes?: number | undefined;
}

/**
 * @public
 */
export interface UpdateTaskProtectionResponse {
  /**
   * A list of tasks with the following information.
   *
   * - `taskArn`: The task ARN.
   * - `protectionEnabled`: The protection status of the task. If scale-in protection is turned on for a task, the value is `true`. Otherwise, it is `false`.
   * - `expirationDate`: The epoch time when protection for the task will expire.
   *
   * @public
   */
  protectedTasks?: ProtectedTask[] | undefined;

  /**
   * Any failures associated with the call.
   *
   * @public
   */
  failures?: Failure[] | undefined;
}

/**
 * @public
 */
export interface CreateTaskSetRequest {
  /**
   * The short name or full Amazon Resource Name (ARN) of the service to create the task set in.
   *
   * @public
   */
  service: string | undefined;

  /**
   * The short name or full Amazon Resource Name (ARN) of the cluster that hosts the service to create the task set in.
   *
   * @public
   */
  cluster: string | undefined;

  /**
   * An optional non-unique tag that identifies this task set in external systems. If the task set is associated with a service discovery registry, the tasks in this task set will have the `ECS_TASK_SET_EXTERNAL_ID` Cloud Map attribute set to the provided value.
   *
   * @public
   */
  externalId?: string | undefined;

  /**
   * The task definition for the tasks in the task set to use. If a revision isn't specified, the latest `ACTIVE` revision is used.
   *
   * @public
   */
  taskDefinition: string | undefined;

  /**
   * An object representing the network configuration for a task set.
   *
   * @public
   */
  networkConfiguration?: NetworkConfiguration | undefined;

  /**
   * A load balancer object representing the load balancer to use with the task set. The supported load balancer types are either an Application Load Balancer or a Network Load Balancer.
   *
   * @public
   */
  loadBalancers?: LoadBalancer[] | undefined;

  /**
   * The details of the service discovery registries to assign to this task set. For more information, see [Service discovery](https://docs.aws.amazon.com/AmazonECS/latest/developerguide/service-discovery.html).
   *
   * @public
   */
  serviceRegistries?: ServiceRegistry[] | undefined;

  /**
   * The launch type that new tasks in the task set uses. For more information, see [Amazon ECS launch types](https://docs.aws.amazon.com/AmazonECS/latest/developerguide/launch_types.html) in the *Amazon Elastic Container Service Developer Guide*.
   *
   * If a `launchType` is specified, the `capacityProviderStrategy` parameter must be omitted.
   *
   * @public
   */
  launchType?: LaunchType | undefined;

  /**
   * The capacity provider strategy to use for the task set.
   *
   * A capacity provider strategy consists of one or more capacity providers along with the `base` and `weight` to assign to them. A capacity provider must be associated with the cluster to be used in a capacity provider strategy. The [PutClusterCapacityProviders](https://docs.aws.amazon.com/AmazonECS/latest/APIReference/API_PutClusterCapacityProviders.html) API is used to associate a capacity provider with a cluster. Only capacity providers with an `ACTIVE` or `UPDATING` status can be used.
   *
   * If a `capacityProviderStrategy` is specified, the `launchType` parameter must be omitted. If no `capacityProviderStrategy` or `launchType` is specified, the `defaultCapacityProviderStrategy` for the cluster is used.
   *
   * If specifying a capacity provider that uses an Auto Scaling group, the capacity provider must already be created. New capacity providers can be created with the [CreateCapacityProviderProvider](https://docs.aws.amazon.com/AmazonECS/latest/APIReference/API_CreateCapacityProviderProvider.html)API operation.
   *
   * To use a Fargate capacity provider, specify either the `FARGATE` or `FARGATE_SPOT` capacity providers. The Fargate capacity providers are available to all accounts and only need to be associated with a cluster to be used.
   *
   * The [PutClusterCapacityProviders](https://docs.aws.amazon.com/AmazonECS/latest/APIReference/API_PutClusterCapacityProviders.html) API operation is used to update the list of available capacity providers for a cluster after the cluster is created.
   *
   * @public
   */
  capacityProviderStrategy?: CapacityProviderStrategyItem[] | undefined;

  /**
   * The platform version that the tasks in the task set uses. A platform version is specified only for tasks using the Fargate launch type. If one isn't specified, the `LATEST` platform version is used.
   *
   * @public
   */
  platformVersion?: string | undefined;

  /**
   * A floating-point percentage of the desired number of tasks to place and keep running in the task set.
   *
   * @public
   */
  scale?: Scale | undefined;

  /**
   * An identifier that you provide to ensure the idempotency of the request. It must be unique and is case sensitive. Up to 36 ASCII characters in the range of 33-126 (inclusive) are allowed.
   *
   * @public
   */
  clientToken?: string | undefined;

  /**
   * The metadata that you apply to the task set to help you categorize and organize them. Each tag consists of a key and an optional value. You define both. When a service is deleted, the tags are deleted.
   *
   * The following basic restrictions apply to tags:
   *
   * - Maximum number of tags per resource - 50
   * - For each resource, each tag key must be unique, and each tag key can have only one value.
   * - Maximum key length - 128 Unicode characters in UTF-8
   * - Maximum value length - 256 Unicode characters in UTF-8
   * - If your tagging schema is used across multiple services and resources, remember that other services may have restrictions on allowed characters. Generally allowed characters are: letters, numbers, and spaces representable in UTF-8, and the following characters: + - = . _ : / @.
   * - Tag keys and values are case-sensitive.
   * - Do not use `aws:`, `AWS:`, or any upper or lowercase combination of such as a prefix for either keys or values as it is reserved for Amazon Web Services use. You cannot edit or delete tag keys or values with this prefix. Tags with this prefix do not count against your tags per resource limit.
   *
   * @public
   */
  tags?: Tag[] | undefined;
}

/**
 * @public
 */
export interface CreateTaskSetResponse {
  /**
   * Information about a set of Amazon ECS tasks in either an CodeDeploy or an `EXTERNAL` deployment. A task set includes details such as the desired number of tasks, how many tasks are running, and whether the task set serves production traffic.
   *
   * @public
   */
  taskSet?: TaskSet | undefined;
}

/**
 * @public
 */
export interface DeleteTaskSetRequest {
  /**
   * The short name or full Amazon Resource Name (ARN) of the cluster that hosts the service that the task set found in to delete.
   *
   * @public
   */
  cluster: string | undefined;

  /**
   * The short name or full Amazon Resource Name (ARN) of the service that hosts the task set to delete.
   *
   * @public
   */
  service: string | undefined;

  /**
   * The task set ID or full Amazon Resource Name (ARN) of the task set to delete.
   *
   * @public
   */
  taskSet: string | undefined;

  /**
   * If `true`, you can delete a task set even if it hasn't been scaled down to zero.
   *
   * @public
   */
  force?: boolean | undefined;
}

/**
 * @public
 */
export interface DeleteTaskSetResponse {
  /**
   * Details about the task set.
   *
   * @public
   */
  taskSet?: TaskSet | undefined;
}

/**
 * @public
 */
export interface DescribeTaskSetsRequest {
  /**
   * The short name or full Amazon Resource Name (ARN) of the cluster that hosts the service that the task sets exist in.
   *
   * @public
   */
  cluster: string | undefined;

  /**
   * The short name or full Amazon Resource Name (ARN) of the service that the task sets exist in.
   *
   * @public
   */
  service: string | undefined;

  /**
   * The ID or full Amazon Resource Name (ARN) of task sets to describe.
   *
   * @public
   */
  taskSets?: string[] | undefined;

  /**
   * Specifies whether to see the resource tags for the task set. If `TAGS` is specified, the tags are included in the response. If this field is omitted, tags aren't included in the response.
   *
   * @public
   */
  include?: TaskSetField[] | undefined;
}

/**
 * @public
 */
export interface DescribeTaskSetsResponse {
  /**
   * The list of task sets described.
   *
   * @public
   */
  taskSets?: TaskSet[] | undefined;

  /**
   * Any failures associated with the call.
   *
   * @public
   */
  failures?: Failure[] | undefined;
}

/**
 * @public
 */
export interface UpdateTaskSetRequest {
  /**
   * The short name or full Amazon Resource Name (ARN) of the cluster that hosts the service that the task set is found in.
   *
   * @public
   */
  cluster: string | undefined;

  /**
   * The short name or full Amazon Resource Name (ARN) of the service that the task set is found in.
   *
   * @public
   */
  service: string | undefined;

  /**
   * The short name or full Amazon Resource Name (ARN) of the task set to update.
   *
   * @public
   */
  taskSet: string | undefined;

  /**
   * A floating-point percentage of the desired number of tasks to place and keep running in the task set.
   *
   * @public
   */
  scale: Scale | undefined;
}

/**
 * @public
 */
export interface UpdateTaskSetResponse {
  /**
   * Details about the task set.
   *
   * @public
   */
  taskSet?: TaskSet | undefined;
}

/**
 * @public
 */
export interface UntagResourceRequest {
  /**
   * The Amazon Resource Name (ARN) of the resource to delete tags from. Currently, the supported resources are Amazon ECS capacity providers, tasks, services, task definitions, clusters, and container instances.
   *
   * @public
   */
  resourceArn: string | undefined;

  /**
   * The keys of the tags to be removed.
   *
   * @public
   */
  tagKeys: string[] | undefined;
}

/**
 * @public
 */
export interface UntagResourceResponse {}
