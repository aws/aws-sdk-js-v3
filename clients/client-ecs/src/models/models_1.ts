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
  ServiceConnectTlsConfiguration,
  Tag,
  TaskDefinition,
  TaskDefinitionPlacementConstraint,
  TimeoutConfiguration,
  Volume,
} from "./models_0";

/**
 * <p>The Service Connect service object configuration. For more information, see <a href="https://docs.aws.amazon.com/AmazonECS/latest/developerguide/service-connect.html">Service Connect</a> in the <i>Amazon Elastic Container Service Developer Guide</i>.</p>
 * @public
 */
export interface ServiceConnectService {
  /**
   * <p>The <code>portName</code> must match the name of one of the <code>portMappings</code> from all the containers in the task definition of this Amazon ECS service.</p>
   * @public
   */
  portName: string | undefined;

  /**
   * <p>The <code>discoveryName</code> is the name of the new Cloud Map service that Amazon ECS creates for this Amazon ECS service. This must be unique within the Cloud Map namespace. The name can contain up to 64 characters. The name can include lowercase letters, numbers, underscores (_), and hyphens (-). The name can't start with a hyphen.</p> <p>If the <code>discoveryName</code> isn't specified, the port mapping name from the task definition is used in <code>portName.namespace</code>.</p>
   * @public
   */
  discoveryName?: string | undefined;

  /**
   * <p>The list of client aliases for this Service Connect service. You use these to assign names that can be used by client applications. The maximum number of client aliases that you can have in this list is 1.</p> <p>Each alias ("endpoint") is a fully-qualified name and port number that other Amazon ECS tasks ("clients") can use to connect to this service.</p> <p>Each name and port mapping must be unique within the namespace.</p> <p>For each <code>ServiceConnectService</code>, you must provide at least one <code>clientAlias</code> with one <code>port</code>.</p>
   * @public
   */
  clientAliases?: ServiceConnectClientAlias[] | undefined;

  /**
   * <p>The port number for the Service Connect proxy to listen on.</p> <p>Use the value of this field to bypass the proxy for traffic on the port number specified in the named <code>portMapping</code> in the task definition of this application, and then use it in your VPC security groups to allow traffic into the proxy for this Amazon ECS service.</p> <p>In <code>awsvpc</code> mode and Fargate, the default value is the container port number. The container port number is in the <code>portMapping</code> in the task definition. In bridge mode, the default value is the ephemeral port of the Service Connect proxy.</p>
   * @public
   */
  ingressPortOverride?: number | undefined;

  /**
   * <p>A reference to an object that represents the configured timeouts for Service Connect.</p>
   * @public
   */
  timeout?: TimeoutConfiguration | undefined;

  /**
   * <p>A reference to an object that represents a Transport Layer Security (TLS) configuration.</p>
   * @public
   */
  tls?: ServiceConnectTlsConfiguration | undefined;
}

/**
 * <p>The Service Connect configuration of your Amazon ECS service. The configuration for this service to discover and connect to services, and be discovered by, and connected from, other services within a namespace.</p> <p>Tasks that run in a namespace can use short names to connect to services in the namespace. Tasks can connect to services across all of the clusters in the namespace. Tasks connect through a managed proxy container that collects logs and metrics for increased visibility. Only the tasks that Amazon ECS services create are supported with Service Connect. For more information, see <a href="https://docs.aws.amazon.com/AmazonECS/latest/developerguide/service-connect.html">Service Connect</a> in the <i>Amazon Elastic Container Service Developer Guide</i>.</p>
 * @public
 */
export interface ServiceConnectConfiguration {
  /**
   * <p>Specifies whether to use Service Connect with this service.</p>
   * @public
   */
  enabled: boolean | undefined;

  /**
   * <p>The namespace name or full Amazon Resource Name (ARN) of the Cloud Map namespace for use with Service Connect. The namespace must be in the same Amazon Web Services Region as the Amazon ECS service and cluster. The type of namespace doesn't affect Service Connect. For more information about Cloud Map, see <a href="https://docs.aws.amazon.com/cloud-map/latest/dg/working-with-services.html">Working with Services</a> in the <i>Cloud Map Developer Guide</i>.</p>
   * @public
   */
  namespace?: string | undefined;

  /**
   * <p>The list of Service Connect service objects. These are names and aliases (also known as endpoints) that are used by other Amazon ECS services to connect to this service. </p> <p>This field is not required for a "client" Amazon ECS service that's a member of a namespace only to connect to other services within the namespace. An example of this would be a frontend application that accepts incoming requests from either a load balancer that's attached to the service or by other means.</p> <p>An object selects a port from the task definition, assigns a name for the Cloud Map service, and a list of aliases (endpoints) and ports for client applications to refer to this service.</p>
   * @public
   */
  services?: ServiceConnectService[] | undefined;

  /**
   * <p>The log configuration for the container. This parameter maps to <code>LogConfig</code> in the docker container create command and the <code>--log-driver</code> option to docker run.</p> <p>By default, containers use the same logging driver that the Docker daemon uses. However, the container might use a different logging driver than the Docker daemon by specifying a log driver configuration in the container definition.</p> <p>Understand the following when specifying a log configuration for your containers.</p> <ul> <li> <p>Amazon ECS currently supports a subset of the logging drivers available to the Docker daemon. Additional log drivers may be available in future releases of the Amazon ECS container agent.</p> <p>For tasks on Fargate, the supported log drivers are <code>awslogs</code>, <code>splunk</code>, and <code>awsfirelens</code>.</p> <p>For tasks hosted on Amazon EC2 instances, the supported log drivers are <code>awslogs</code>, <code>fluentd</code>, <code>gelf</code>, <code>json-file</code>, <code>journald</code>,<code>syslog</code>, <code>splunk</code>, and <code>awsfirelens</code>.</p> </li> <li> <p>This parameter requires version 1.18 of the Docker Remote API or greater on your container instance.</p> </li> <li> <p>For tasks that are hosted on Amazon EC2 instances, the Amazon ECS container agent must register the available logging drivers with the <code>ECS_AVAILABLE_LOGGING_DRIVERS</code> environment variable before containers placed on that instance can use these log configuration options. For more information, see <a href="https://docs.aws.amazon.com/AmazonECS/latest/developerguide/ecs-agent-config.html">Amazon ECS container agent configuration</a> in the <i>Amazon Elastic Container Service Developer Guide</i>.</p> </li> <li> <p>For tasks that are on Fargate, because you don't have access to the underlying infrastructure your tasks are hosted on, any additional software needed must be installed outside of the task. For example, the Fluentd output aggregators or a remote host running Logstash to send Gelf logs to.</p> </li> </ul>
   * @public
   */
  logConfiguration?: LogConfiguration | undefined;

  /**
   * <p>The configuration for Service Connect access logging. Access logs capture detailed information about requests made to your service, including request patterns, response codes, and timing data. They can be useful for debugging connectivity issues, monitoring service performance, and auditing service-to-service communication for security and compliance purposes.</p> <note> <p>To enable access logs, you must also specify a <code>logConfiguration</code> in the <code>serviceConnectConfiguration</code>.</p> </note>
   * @public
   */
  accessLogConfiguration?: ServiceConnectAccessLogConfiguration | undefined;

  /**
   * <p>The settings for the Service Connect proxy container that Amazon ECS adds to each task in this service. Each object in the list sets exactly one setting, and each setting can appear only once in the list.</p> <p>Your changes to these settings apply only to tasks that Amazon ECS launches after you update the service. Your running tasks keep their existing settings until Amazon ECS replaces them. If you update the <code>serviceConnectConfiguration</code> of your service and don't include <code>containerConfigurations</code>, the proxy container settings return to their defaults.</p>
   * @public
   */
  containerConfigurations?: ServiceConnectContainerConfiguration[] | undefined;
}

/**
 * <p>The details for the service registry.</p> <p>Each service may be associated with one service registry. Multiple service registries for each service are not supported.</p> <p>When you add, update, or remove the service registries configuration, Amazon ECS starts a new deployment. New tasks are registered and deregistered to the updated service registry configuration.</p>
 * @public
 */
export interface ServiceRegistry {
  /**
   * <p>The Amazon Resource Name (ARN) of the service registry. The currently supported service registry is Cloud Map. For more information, see <a href="https://docs.aws.amazon.com/cloud-map/latest/api/API_CreateService.html">CreateService</a>.</p>
   * @public
   */
  registryArn?: string | undefined;

  /**
   * <p>The port value used if your service discovery service specified an SRV record. This field might be used if both the <code>awsvpc</code> network mode and SRV records are used.</p>
   * @public
   */
  port?: number | undefined;

  /**
   * <p>The container name value to be used for your service discovery service. It's already specified in the task definition. If the task definition that your service task specifies uses the <code>bridge</code> or <code>host</code> network mode, you must specify a <code>containerName</code> and <code>containerPort</code> combination from the task definition. If the task definition that your service task specifies uses the <code>awsvpc</code> network mode and a type SRV DNS record is used, you must specify either a <code>containerName</code> and <code>containerPort</code> combination or a <code>port</code> value. However, you can't specify both.</p>
   * @public
   */
  containerName?: string | undefined;

  /**
   * <p>The port value to be used for your service discovery service. It's already specified in the task definition. If the task definition your service task specifies uses the <code>bridge</code> or <code>host</code> network mode, you must specify a <code>containerName</code> and <code>containerPort</code> combination from the task definition. If the task definition your service task specifies uses the <code>awsvpc</code> network mode and a type SRV DNS record is used, you must specify either a <code>containerName</code> and <code>containerPort</code> combination or a <code>port</code> value. However, you can't specify both.</p>
   * @public
   */
  containerPort?: number | undefined;
}

/**
 * <p>The tag specifications of an Amazon EBS volume.</p>
 * @public
 */
export interface EBSTagSpecification {
  /**
   * <p>The type of volume resource.</p>
   * @public
   */
  resourceType: EBSResourceType | undefined;

  /**
   * <p>The tags applied to this Amazon EBS volume. <code>AmazonECSCreated</code> and <code>AmazonECSManaged</code> are reserved tags that can't be used.</p>
   * @public
   */
  tags?: Tag[] | undefined;

  /**
   * <p>Determines whether to propagate the tags from the task definition to the Amazon EBS volume. Tags can only propagate to a <code>SERVICE</code> specified in <code>ServiceVolumeConfiguration</code>. If no value is specified, the tags aren't propagated.</p>
   * @public
   */
  propagateTags?: PropagateTags | undefined;
}

/**
 * <p>The configuration for the Amazon EBS volume that Amazon ECS creates and manages on your behalf. These settings are used to create each Amazon EBS volume, with one volume created for each task in the service. For information about the supported launch types and operating systems, see <a href="https://docs.aws.amazon.com/AmazonECS/latest/developerguide/ebs-volumes.html#ebs-volumes-configuration">Supported operating systems and launch types</a> in the<i> Amazon Elastic Container Service Developer Guide</i>.</p> <p>Many of these parameters map 1:1 with the Amazon EBS <code>CreateVolume</code> API request parameters.</p>
 * @public
 */
export interface ServiceManagedEBSVolumeConfiguration {
  /**
   * <p>Indicates whether the volume should be encrypted. If you turn on Region-level Amazon EBS encryption by default but set this value as <code>false</code>, the setting is overridden and the volume is encrypted with the KMS key specified for Amazon EBS encryption by default. This parameter maps 1:1 with the <code>Encrypted</code> parameter of the <a href="https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_CreateVolume.html">CreateVolume API</a> in the <i>Amazon EC2 API Reference</i>.</p>
   * @public
   */
  encrypted?: boolean | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) identifier of the Amazon Web Services Key Management Service key to use for Amazon EBS encryption. When a key is specified using this parameter, it overrides Amazon EBS default encryption or any KMS key that you specified for cluster-level managed storage encryption. This parameter maps 1:1 with the <code>KmsKeyId</code> parameter of the <a href="https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_CreateVolume.html">CreateVolume API</a> in the <i>Amazon EC2 API Reference</i>. For more information about encrypting Amazon EBS volumes attached to tasks, see <a href="https://docs.aws.amazon.com/AmazonECS/latest/developerguide/ebs-kms-encryption.html">Encrypt data stored in Amazon EBS volumes attached to Amazon ECS tasks</a>.</p> <important> <p>Amazon Web Services authenticates the Amazon Web Services Key Management Service key asynchronously. Therefore, if you specify an ID, alias, or ARN that is invalid, the action can appear to complete, but eventually fails.</p> </important>
   * @public
   */
  kmsKeyId?: string | undefined;

  /**
   * <p>The volume type. This parameter maps 1:1 with the <code>VolumeType</code> parameter of the <a href="https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_CreateVolume.html">CreateVolume API</a> in the <i>Amazon EC2 API Reference</i>. For more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/ebs-volume-types.html">Amazon EBS volume types</a> in the <i>Amazon EC2 User Guide</i>.</p> <p>The following are the supported volume types.</p> <ul> <li> <p>General Purpose SSD: <code>gp2</code>|<code>gp3</code> </p> </li> <li> <p>Provisioned IOPS SSD: <code>io1</code>|<code>io2</code> </p> </li> <li> <p>Throughput Optimized HDD: <code>st1</code> </p> </li> <li> <p>Cold HDD: <code>sc1</code> </p> </li> <li> <p>Magnetic: <code>standard</code> </p> <note> <p>The magnetic volume type is not supported on Fargate.</p> </note> </li> </ul>
   * @public
   */
  volumeType?: string | undefined;

  /**
   * <p>The size of the volume in GiB. You must specify either a volume size or a snapshot ID. If you specify a snapshot ID, the snapshot size is used for the volume size by default. You can optionally specify a volume size greater than or equal to the snapshot size. This parameter maps 1:1 with the <code>Size</code> parameter of the <a href="https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_CreateVolume.html">CreateVolume API</a> in the <i>Amazon EC2 API Reference</i>.</p> <p>The following are the supported volume size values for each volume type.</p> <ul> <li> <p> <code>gp2</code> and <code>gp3</code>: 1-16,384</p> </li> <li> <p> <code>io1</code> and <code>io2</code>: 4-16,384</p> </li> <li> <p> <code>st1</code> and <code>sc1</code>: 125-16,384</p> </li> <li> <p> <code>standard</code>: 1-1,024</p> </li> </ul>
   * @public
   */
  sizeInGiB?: number | undefined;

  /**
   * <p>The snapshot that Amazon ECS uses to create volumes for attachment to tasks maintained by the service. You must specify either <code>snapshotId</code> or <code>sizeInGiB</code> in your volume configuration. This parameter maps 1:1 with the <code>SnapshotId</code> parameter of the <a href="https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_CreateVolume.html">CreateVolume API</a> in the <i>Amazon EC2 API Reference</i>.</p>
   * @public
   */
  snapshotId?: string | undefined;

  /**
   * <p>The rate, in MiB/s, at which data is fetched from a snapshot of an existing EBS volume to create new volumes for attachment to the tasks maintained by the service. This property can be specified only if you specify a <code>snapshotId</code>. For more information, see <a href="https://docs.aws.amazon.com/ebs/latest/userguide/initalize-volume.html">Initialize Amazon EBS volumes</a> in the <i>Amazon EBS User Guide</i>.</p>
   * @public
   */
  volumeInitializationRate?: number | undefined;

  /**
   * <p>The number of I/O operations per second (IOPS). For <code>gp3</code>, <code>io1</code>, and <code>io2</code> volumes, this represents the number of IOPS that are provisioned for the volume. For <code>gp2</code> volumes, this represents the baseline performance of the volume and the rate at which the volume accumulates I/O credits for bursting.</p> <p>The following are the supported values for each volume type.</p> <ul> <li> <p> <code>gp3</code>: 3,000 - 16,000 IOPS</p> </li> <li> <p> <code>io1</code>: 100 - 64,000 IOPS</p> </li> <li> <p> <code>io2</code>: 100 - 256,000 IOPS</p> </li> </ul> <p>This parameter is required for <code>io1</code> and <code>io2</code> volume types. The default for <code>gp3</code> volumes is <code>3,000 IOPS</code>. This parameter is not supported for <code>st1</code>, <code>sc1</code>, or <code>standard</code> volume types.</p> <p>This parameter maps 1:1 with the <code>Iops</code> parameter of the <a href="https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_CreateVolume.html">CreateVolume API</a> in the <i>Amazon EC2 API Reference</i>.</p>
   * @public
   */
  iops?: number | undefined;

  /**
   * <p>The throughput to provision for a volume, in MiB/s, with a maximum of 1,000 MiB/s. This parameter maps 1:1 with the <code>Throughput</code> parameter of the <a href="https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_CreateVolume.html">CreateVolume API</a> in the <i>Amazon EC2 API Reference</i>.</p> <important> <p>This parameter is only supported for the <code>gp3</code> volume type.</p> </important>
   * @public
   */
  throughput?: number | undefined;

  /**
   * <p>The tags to apply to the volume. Amazon ECS applies service-managed tags by default. This parameter maps 1:1 with the <code>TagSpecifications.N</code> parameter of the <a href="https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_CreateVolume.html">CreateVolume API</a> in the <i>Amazon EC2 API Reference</i>.</p>
   * @public
   */
  tagSpecifications?: EBSTagSpecification[] | undefined;

  /**
   * <p>The ARN of the IAM role to associate with this volume. This is the Amazon ECS infrastructure IAM role that is used to manage your Amazon Web Services infrastructure. We recommend using the Amazon ECS-managed <code>AmazonECSInfrastructureRolePolicyForVolumes</code> IAM policy with this role. For more information, see <a href="https://docs.aws.amazon.com/AmazonECS/latest/developerguide/infrastructure_IAM_role.html">Amazon ECS infrastructure IAM role</a> in the <i>Amazon ECS Developer Guide</i>.</p>
   * @public
   */
  roleArn: string | undefined;

  /**
   * <p>The filesystem type for the volume. For volumes created from a snapshot, you must specify the same filesystem type that the volume was using when the snapshot was created. If there is a filesystem type mismatch, the tasks will fail to start.</p> <p>The available Linux filesystem types are <code>ext3</code>, <code>ext4</code>, and <code>xfs</code>. If no value is specified, the <code>xfs</code> filesystem type is used by default.</p> <p>The available Windows filesystem types are <code>NTFS</code>.</p>
   * @public
   */
  filesystemType?: TaskFilesystemType | undefined;
}

/**
 * <p>The configuration for a volume specified in the task definition as a volume that is configured at launch time. Currently, the only supported volume type is an Amazon EBS volume.</p>
 * @public
 */
export interface ServiceVolumeConfiguration {
  /**
   * <p>The name of the volume. This value must match the volume name from the <code>Volume</code> object in the task definition.</p>
   * @public
   */
  name: string | undefined;

  /**
   * <p>The configuration for the Amazon EBS volume that Amazon ECS creates and manages on your behalf. These settings are used to create each Amazon EBS volume, with one volume created for each task in the service. The Amazon EBS volumes are visible in your account in the Amazon EC2 console once they are created.</p>
   * @public
   */
  managedEBSVolume?: ServiceManagedEBSVolumeConfiguration | undefined;
}

/**
 * <p>The advanced settings for VPC Lattice used in blue/green deployments. Specify the alternate target group and listener rules required for traffic shifting during blue/green deployments. For more information, see <a href="https://docs.aws.amazon.com/AmazonECS/latest/developerguide/blue-green-deployment-implementation.html">Required resources for Amazon ECS blue/green deployments</a> in the <i>Amazon Elastic Container Service Developer Guide</i>.</p>
 * @public
 */
export interface VpcLatticeAdvancedConfiguration {
  /**
   * <p>The Amazon Resource Name (ARN) of the alternate target group associated with the VPC Lattice Configuration for Amazon ECS blue/green deployments.</p>
   * @public
   */
  alternateTargetGroupArn?: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) that identifies the production listener rule or listener for routing production traffic.</p>
   * @public
   */
  productionListenerRule?: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) that identifies the test listener rule or listener for routing test traffic.</p>
   * @public
   */
  testListenerRule?: string | undefined;
}

/**
 * <p>The VPC Lattice configuration for your service that holds the information for the target group(s) Amazon ECS tasks will be registered to.</p>
 * @public
 */
export interface VpcLatticeConfiguration {
  /**
   * <p>The ARN of the IAM role to associate with this VPC Lattice configuration. This is the Amazon ECS infrastructure IAM role that is used to manage your VPC Lattice infrastructure.</p>
   * @public
   */
  roleArn: string | undefined;

  /**
   * <p>The full Amazon Resource Name (ARN) of the target group or groups associated with the VPC Lattice configuration that the Amazon ECS tasks will be registered to.</p>
   * @public
   */
  targetGroupArn: string | undefined;

  /**
   * <p>The name of the port mapping to register in the VPC Lattice target group. This is the name of the <code>portMapping</code> you defined in your task definition.</p>
   * @public
   */
  portName: string | undefined;

  /**
   * <p>The advanced settings for VPC Lattice used in blue/green deployments. Specify the alternate target group and listener rules required for traffic shifting during blue/green deployments. For more information, see <a href="https://docs.aws.amazon.com/AmazonECS/latest/developerguide/blue-green-deployment-implementation.html">Required resources for Amazon ECS blue/green deployments</a> in the <i>Amazon Elastic Container Service Developer Guide</i>.</p>
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
   * <p>The short name or full Amazon Resource Name (ARN) of the cluster that you run your service on. If you do not specify a cluster, the default cluster is assumed.</p>
   * @public
   */
  cluster?: string | undefined;

  /**
   * <p>The name of your service. Up to 255 letters (uppercase and lowercase), numbers, underscores, and hyphens are allowed. Service names must be unique within a cluster, but you can have similarly named services in multiple clusters within a Region or across multiple Regions.</p>
   * @public
   */
  serviceName: string | undefined;

  /**
   * <p>The <code>family</code> and <code>revision</code> (<code>family:revision</code>) or full ARN of the task definition to run in your service. If a <code>revision</code> isn't specified, the latest <code>ACTIVE</code> revision is used.</p> <p>A task definition must be specified if the service uses either the <code>ECS</code> or <code>CODE_DEPLOY</code> deployment controllers.</p> <p>For more information about deployment types, see <a href="https://docs.aws.amazon.com/AmazonECS/latest/developerguide/deployment-types.html">Amazon ECS deployment types</a>.</p>
   * @public
   */
  taskDefinition?: string | undefined;

  /**
   * <p>Indicates whether to use Availability Zone rebalancing for the service.</p> <p>For more information, see <a href="https://docs.aws.amazon.com/AmazonECS/latest/developerguide/service-rebalancing.html">Balancing an Amazon ECS service across Availability Zones</a> in the <i> <i>Amazon Elastic Container Service Developer Guide</i> </i>.</p> <p>The default behavior of <code>AvailabilityZoneRebalancing</code> differs between create and update requests:</p> <ul> <li> <p>For create service requests, when no value is specified for <code>AvailabilityZoneRebalancing</code>, Amazon ECS defaults the value to <code>ENABLED</code>.</p> </li> <li> <p>For update service requests, when no value is specified for <code>AvailabilityZoneRebalancing</code>, Amazon ECS defaults to the existing service’s <code>AvailabilityZoneRebalancing</code> value. If the service never had an <code>AvailabilityZoneRebalancing</code> value set, Amazon ECS treats this as <code>DISABLED</code>.</p> </li> </ul>
   * @public
   */
  availabilityZoneRebalancing?: AvailabilityZoneRebalancing | undefined;

  /**
   * <p>A load balancer object representing the load balancers to use with your service. For more information, see <a href="https://docs.aws.amazon.com/AmazonECS/latest/developerguide/service-load-balancing.html">Service load balancing</a> in the <i>Amazon Elastic Container Service Developer Guide</i>.</p> <p>If the service uses the <code>ECS</code> deployment controller and using either an Application Load Balancer or Network Load Balancer, you must specify one or more target group ARNs to attach to the service. The service-linked role is required for services that use multiple target groups. For more information, see <a href="https://docs.aws.amazon.com/AmazonECS/latest/developerguide/using-service-linked-roles.html">Using service-linked roles for Amazon ECS</a> in the <i>Amazon Elastic Container Service Developer Guide</i>.</p> <p>If the service uses the <code>CODE_DEPLOY</code> deployment controller, the service is required to use either an Application Load Balancer or Network Load Balancer. When creating an CodeDeploy deployment group, you specify two target groups (referred to as a <code>targetGroupPair</code>). During a deployment, CodeDeploy determines which task set in your service has the status <code>PRIMARY</code>, and it associates one target group with it. Then, it also associates the other target group with the replacement task set. The load balancer can also have up to two listeners: a required listener for production traffic and an optional listener that you can use to perform validation tests with Lambda functions before routing production traffic to it.</p> <p>If you use the <code>CODE_DEPLOY</code> deployment controller, these values can be changed when updating the service.</p> <p>For Application Load Balancers and Network Load Balancers, this object must contain the load balancer target group ARN, the container name, and the container port to access from the load balancer. The container name must be as it appears in a container definition. The load balancer name parameter must be omitted. When a task from this service is placed on a container instance, the container instance and port combination is registered as a target in the target group that's specified here.</p> <p>For Classic Load Balancers, this object must contain the load balancer name, the container name , and the container port to access from the load balancer. The container name must be as it appears in a container definition. The target group ARN parameter must be omitted. When a task from this service is placed on a container instance, the container instance is registered with the load balancer that's specified here.</p> <p>Services with tasks that use the <code>awsvpc</code> network mode (for example, those with the Fargate launch type) only support Application Load Balancers and Network Load Balancers. Classic Load Balancers aren't supported. Also, when you create any target groups for these services, you must choose <code>ip</code> as the target type, not <code>instance</code>. This is because tasks that use the <code>awsvpc</code> network mode are associated with an elastic network interface, not an Amazon EC2 instance.</p>
   * @public
   */
  loadBalancers?: LoadBalancer[] | undefined;

  /**
   * <p>The details of the service discovery registry to associate with this service. For more information, see <a href="https://docs.aws.amazon.com/AmazonECS/latest/developerguide/service-discovery.html">Service discovery</a>.</p> <note> <p>Each service may be associated with one service registry. Multiple service registries for each service isn't supported.</p> </note>
   * @public
   */
  serviceRegistries?: ServiceRegistry[] | undefined;

  /**
   * <p>The number of instantiations of the specified task definition to place and keep running in your service.</p> <p>This is required if <code>schedulingStrategy</code> is <code>REPLICA</code> or isn't specified. If <code>schedulingStrategy</code> is <code>DAEMON</code> then this isn't required.</p>
   * @public
   */
  desiredCount?: number | undefined;

  /**
   * <p>An identifier that you provide to ensure the idempotency of the request. It must be unique and is case sensitive. Up to 36 ASCII characters in the range of 33-126 (inclusive) are allowed.</p>
   * @public
   */
  clientToken?: string | undefined;

  /**
   * <p>The infrastructure that you run your service on. For more information, see <a href="https://docs.aws.amazon.com/AmazonECS/latest/developerguide/launch_types.html">Amazon ECS launch types</a> in the <i>Amazon Elastic Container Service Developer Guide</i>.</p> <note> <p>If you want to use Amazon ECS Managed Instances, you must use the <code>capacityProviderStrategy</code> request parameter and omit the <code>launchType</code> request parameter.</p> </note> <p>The <code>FARGATE</code> launch type runs your tasks on Fargate On-Demand infrastructure.</p> <note> <p>Fargate Spot infrastructure is available for use but a capacity provider strategy must be used. For more information, see <a href="https://docs.aws.amazon.com/AmazonECS/latest/developerguide/fargate-capacity-providers.html">Fargate capacity providers</a> in the <i>Amazon ECS Developer Guide</i>.</p> </note> <p>The <code>EC2</code> launch type runs your tasks on Amazon EC2 instances registered to your cluster.</p> <p>The <code>EXTERNAL</code> launch type runs your tasks on your on-premises server or virtual machine (VM) capacity registered to your cluster.</p> <p>A service can use either a launch type or a capacity provider strategy. If a <code>launchType</code> is specified, the <code>capacityProviderStrategy</code> parameter must be omitted.</p>
   * @public
   */
  launchType?: LaunchType | undefined;

  /**
   * <p>The capacity provider strategy to use for the service.</p> <note> <p>If you want to use Amazon ECS Managed Instances, you must use the <code>capacityProviderStrategy</code> request parameter and omit the <code>launchType</code> request parameter.</p> </note> <p>If a <code>capacityProviderStrategy</code> is specified, the <code>launchType</code> parameter must be omitted. If no <code>capacityProviderStrategy</code> or <code>launchType</code> is specified, the <code>defaultCapacityProviderStrategy</code> for the cluster is used.</p> <p>A capacity provider strategy can contain a maximum of 20 capacity providers.</p>
   * @public
   */
  capacityProviderStrategy?: CapacityProviderStrategyItem[] | undefined;

  /**
   * <p>The platform version that your tasks in the service are running on. A platform version is specified only for tasks using the Fargate launch type. If one isn't specified, the <code>LATEST</code> platform version is used. For more information, see <a href="https://docs.aws.amazon.com/AmazonECS/latest/developerguide/platform_versions.html">Fargate platform versions</a> in the <i>Amazon Elastic Container Service Developer Guide</i>.</p>
   * @public
   */
  platformVersion?: string | undefined;

  /**
   * <p>The name or full Amazon Resource Name (ARN) of the IAM role that allows Amazon ECS to make calls to your load balancer on your behalf. This parameter is only permitted if you are using a load balancer with your service and your task definition doesn't use the <code>awsvpc</code> network mode. If you specify the <code>role</code> parameter, you must also specify a load balancer object with the <code>loadBalancers</code> parameter.</p> <important> <p>If your account has already created the Amazon ECS service-linked role, that role is used for your service unless you specify a role here. The service-linked role is required if your task definition uses the <code>awsvpc</code> network mode or if the service is configured to use service discovery, an external deployment controller, multiple target groups, or Elastic Inference accelerators in which case you don't specify a role here. For more information, see <a href="https://docs.aws.amazon.com/AmazonECS/latest/developerguide/using-service-linked-roles.html">Using service-linked roles for Amazon ECS</a> in the <i>Amazon Elastic Container Service Developer Guide</i>.</p> </important> <p>If your specified role has a path other than <code>/</code>, then you must either specify the full role ARN (this is recommended) or prefix the role name with the path. For example, if a role with the name <code>bar</code> has a path of <code>/foo/</code> then you would specify <code>/foo/bar</code> as the role name. For more information, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_identifiers.html#identifiers-friendly-names">Friendly names and paths</a> in the <i>IAM User Guide</i>.</p>
   * @public
   */
  role?: string | undefined;

  /**
   * <p>Optional deployment parameters that control how many tasks run during the deployment and the ordering of stopping and starting tasks.</p>
   * @public
   */
  deploymentConfiguration?: DeploymentConfiguration | undefined;

  /**
   * <p>An array of placement constraint objects to use for tasks in your service. You can specify a maximum of 10 constraints for each task. This limit includes constraints in the task definition and those specified at runtime.</p>
   * @public
   */
  placementConstraints?: PlacementConstraint[] | undefined;

  /**
   * <p>The placement strategy objects to use for tasks in your service. You can specify a maximum of 5 strategy rules for each service.</p>
   * @public
   */
  placementStrategy?: PlacementStrategy[] | undefined;

  /**
   * <p>The network configuration for the service. This parameter is required for task definitions that use the <code>awsvpc</code> network mode to receive their own elastic network interface, and it isn't supported for other network modes. For more information, see <a href="https://docs.aws.amazon.com/AmazonECS/latest/developerguide/task-networking.html">Task networking</a> in the <i>Amazon Elastic Container Service Developer Guide</i>.</p>
   * @public
   */
  networkConfiguration?: NetworkConfiguration | undefined;

  /**
   * <p>The period of time, in seconds, that the Amazon ECS service scheduler ignores unhealthy Elastic Load Balancing, VPC Lattice, and container health checks after a task has first started. If you do not specify a health check grace period value, the default value of 0 is used. If you do not use any of the health checks, then <code>healthCheckGracePeriodSeconds</code> is unused.</p> <p>If your service has more running tasks than desired, unhealthy tasks in the grace period might be stopped to reach the desired count.</p>
   * @public
   */
  healthCheckGracePeriodSeconds?: number | undefined;

  /**
   * <p>The scheduling strategy to use for the service. For more information, see <a href="https://docs.aws.amazon.com/AmazonECS/latest/developerguide/ecs_services.html">Services</a>.</p> <p>There are two service scheduler strategies available:</p> <ul> <li> <p> <code>REPLICA</code>-The replica scheduling strategy places and maintains the desired number of tasks across your cluster. By default, the service scheduler spreads tasks across Availability Zones. You can use task placement strategies and constraints to customize task placement decisions. This scheduler strategy is required if the service uses the <code>CODE_DEPLOY</code> or <code>EXTERNAL</code> deployment controller types.</p> </li> <li> <p> <code>DAEMON</code>-The daemon scheduling strategy deploys exactly one task on each active container instance that meets all of the task placement constraints that you specify in your cluster. The service scheduler also evaluates the task placement constraints for running tasks and will stop tasks that don't meet the placement constraints. When you're using this strategy, you don't need to specify a desired number of tasks, a task placement strategy, or use Service Auto Scaling policies.</p> <note> <p>Tasks using the Fargate launch type or the <code>CODE_DEPLOY</code> or <code>EXTERNAL</code> deployment controller types don't support the <code>DAEMON</code> scheduling strategy.</p> </note> </li> </ul>
   * @public
   */
  schedulingStrategy?: SchedulingStrategy | undefined;

  /**
   * <p>The deployment controller to use for the service. If no deployment controller is specified, the default value of <code>ECS</code> is used.</p>
   * @public
   */
  deploymentController?: DeploymentController | undefined;

  /**
   * <p>The metadata that you apply to the service to help you categorize and organize them. Each tag consists of a key and an optional value, both of which you define. When a service is deleted, the tags are deleted as well.</p> <p>The following basic restrictions apply to tags:</p> <ul> <li> <p>Maximum number of tags per resource - 50</p> </li> <li> <p>For each resource, each tag key must be unique, and each tag key can have only one value.</p> </li> <li> <p>Maximum key length - 128 Unicode characters in UTF-8</p> </li> <li> <p>Maximum value length - 256 Unicode characters in UTF-8</p> </li> <li> <p>If your tagging schema is used across multiple services and resources, remember that other services may have restrictions on allowed characters. Generally allowed characters are: letters, numbers, and spaces representable in UTF-8, and the following characters: + - = . _ : / @.</p> </li> <li> <p>Tag keys and values are case-sensitive.</p> </li> <li> <p>Do not use <code>aws:</code>, <code>AWS:</code>, or any upper or lowercase combination of such as a prefix for either keys or values as it is reserved for Amazon Web Services use. You cannot edit or delete tag keys or values with this prefix. Tags with this prefix do not count against your tags per resource limit.</p> </li> </ul>
   * @public
   */
  tags?: Tag[] | undefined;

  /**
   * <p>Specifies whether to turn on Amazon ECS managed tags for the tasks within the service. For more information, see <a href="https://docs.aws.amazon.com/AmazonECS/latest/developerguide/ecs-using-tags.html">Tagging your Amazon ECS resources</a> in the <i>Amazon Elastic Container Service Developer Guide</i>.</p> <p>When you use Amazon ECS managed tags, you must set the <code>propagateTags</code> request parameter.</p>
   * @public
   */
  enableECSManagedTags?: boolean | undefined;

  /**
   * <p>Specifies whether to propagate the tags from the task definition to the task. If no value is specified, the tags aren't propagated. Tags can only be propagated to the task during task creation. To add tags to a task after task creation, use the <a href="https://docs.aws.amazon.com/AmazonECS/latest/APIReference/API_TagResource.html">TagResource</a> API action.</p> <p>You must set this to a value other than <code>NONE</code> when you use Cost Explorer. For more information, see <a href="https://docs.aws.amazon.com/AmazonECS/latest/developerguide/usage-reports.html">Amazon ECS usage reports</a> in the <i>Amazon Elastic Container Service Developer Guide</i>.</p> <p>The default is <code>NONE</code>.</p>
   * @public
   */
  propagateTags?: PropagateTags | undefined;

  /**
   * <p>Determines whether the execute command functionality is turned on for the service. If <code>true</code>, this enables execute command functionality on all containers in the service tasks.</p>
   * @public
   */
  enableExecuteCommand?: boolean | undefined;

  /**
   * <p>The configuration for this service to discover and connect to services, and be discovered by, and connected from, other services within a namespace.</p> <p>Tasks that run in a namespace can use short names to connect to services in the namespace. Tasks can connect to services across all of the clusters in the namespace. Tasks connect through a managed proxy container that collects logs and metrics for increased visibility. Only the tasks that Amazon ECS services create are supported with Service Connect. For more information, see <a href="https://docs.aws.amazon.com/AmazonECS/latest/developerguide/service-connect.html">Service Connect</a> in the <i>Amazon Elastic Container Service Developer Guide</i>.</p>
   * @public
   */
  serviceConnectConfiguration?: ServiceConnectConfiguration | undefined;

  /**
   * <p>The configuration for a volume specified in the task definition as a volume that is configured at launch time. Currently, the only supported volume type is an Amazon EBS volume.</p>
   * @public
   */
  volumeConfigurations?: ServiceVolumeConfiguration[] | undefined;

  /**
   * <p>The VPC Lattice configuration for the service being created.</p>
   * @public
   */
  vpcLatticeConfigurations?: VpcLatticeConfiguration[] | undefined;

  /**
   * <p>The gateway connectors that attach the service to a gateway ingress path. You can specify at most one gateway connector.</p>
   * @public
   */
  gatewayConnectors?: GatewayConnector[] | undefined;

  /**
   * <p>The optional monitoring configuration for the service, which defines the resolution for the service-level <code>CPUUtilization</code> and <code>MemoryUtilization</code> Amazon CloudWatch metrics. When not specified, Amazon ECS uses the default resolution of <code>60</code> seconds.</p>
   * @public
   */
  monitoring?: MonitoringConfiguration | undefined;
}

/**
 * <p>The summary of the current service revision configuration</p>
 * @public
 */
export interface ServiceCurrentRevisionSummary {
  /**
   * <p>The ARN of the current service revision.</p>
   * @public
   */
  arn?: string | undefined;

  /**
   * <p>The number of requested tasks in the current service revision</p>
   * @public
   */
  requestedTaskCount?: number | undefined;

  /**
   * <p>The number of running tasks of the current service revision</p>
   * @public
   */
  runningTaskCount?: number | undefined;

  /**
   * <p>The number of pending tasks in the current service revision</p>
   * @public
   */
  pendingTaskCount?: number | undefined;
}

/**
 * <p>The amount of ephemeral storage to allocate for the deployment.</p>
 * @public
 */
export interface DeploymentEphemeralStorage {
  /**
   * <p>Specify an Key Management Service key ID to encrypt the ephemeral storage for deployment.</p>
   * @public
   */
  kmsKeyId?: string | undefined;
}

/**
 * <p>The Service Connect resource. Each configuration maps a discovery name to a Cloud Map service name. The data is stored in Cloud Map as part of the Service Connect configuration for each discovery name of this Amazon ECS service.</p> <p>A task can resolve the <code>dnsName</code> for each of the <code>clientAliases</code> of a service. However a task can't resolve the discovery names. If you want to connect to a service, refer to the <code>ServiceConnectConfiguration</code> of that service for the list of <code>clientAliases</code> that you can use.</p>
 * @public
 */
export interface ServiceConnectServiceResource {
  /**
   * <p>The discovery name of this Service Connect resource.</p> <p>The <code>discoveryName</code> is the name of the new Cloud Map service that Amazon ECS creates for this Amazon ECS service. This must be unique within the Cloud Map namespace. The name can contain up to 64 characters. The name can include lowercase letters, numbers, underscores (_), and hyphens (-). The name can't start with a hyphen.</p> <p>If the <code>discoveryName</code> isn't specified, the port mapping name from the task definition is used in <code>portName.namespace</code>.</p>
   * @public
   */
  discoveryName?: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) for the service in Cloud Map that matches the discovery name for this Service Connect resource. You can use this ARN in other integrations with Cloud Map. However, Service Connect can't ensure connectivity outside of Amazon ECS.</p>
   * @public
   */
  discoveryArn?: string | undefined;
}

/**
 * <p>The details of an Amazon ECS service deployment. This is used only when a service uses the <code>ECS</code> deployment controller type.</p>
 * @public
 */
export interface Deployment {
  /**
   * <p>The ID of the deployment.</p>
   * @public
   */
  id?: string | undefined;

  /**
   * <p>The status of the deployment. The following describes each state.</p> <dl> <dt>PRIMARY</dt> <dd> <p>The most recent deployment of a service.</p> </dd> <dt>ACTIVE</dt> <dd> <p>A service deployment that still has running tasks, but are in the process of being replaced with a new <code>PRIMARY</code> deployment.</p> </dd> <dt>INACTIVE</dt> <dd> <p>A deployment that has been completely replaced.</p> </dd> </dl>
   * @public
   */
  status?: string | undefined;

  /**
   * <p>The most recent task definition that was specified for the tasks in the service to use.</p>
   * @public
   */
  taskDefinition?: string | undefined;

  /**
   * <p>The most recent desired count of tasks that was specified for the service to deploy or maintain.</p>
   * @public
   */
  desiredCount?: number | undefined;

  /**
   * <p>The number of tasks in the deployment that are in the <code>PENDING</code> status.</p>
   * @public
   */
  pendingCount?: number | undefined;

  /**
   * <p>The number of tasks in the deployment that are in the <code>RUNNING</code> status.</p>
   * @public
   */
  runningCount?: number | undefined;

  /**
   * <p>The number of consecutively failed tasks in the deployment. A task is considered a failure if the service scheduler can't launch the task, the task doesn't transition to a <code>RUNNING</code> state, or if it fails any of its defined health checks and is stopped.</p> <note> <p>Once a service deployment has one or more successfully running tasks, the failed task count resets to zero and stops being evaluated.</p> </note>
   * @public
   */
  failedTasks?: number | undefined;

  /**
   * <p>The Unix timestamp for the time when the service deployment was created.</p>
   * @public
   */
  createdAt?: Date | undefined;

  /**
   * <p>The Unix timestamp for the time when the service deployment was last updated.</p>
   * @public
   */
  updatedAt?: Date | undefined;

  /**
   * <p>The capacity provider strategy that the deployment is using.</p>
   * @public
   */
  capacityProviderStrategy?: CapacityProviderStrategyItem[] | undefined;

  /**
   * <p>The launch type the tasks in the service are using. For more information, see <a href="https://docs.aws.amazon.com/AmazonECS/latest/developerguide/launch_types.html">Amazon ECS Launch Types</a> in the <i>Amazon Elastic Container Service Developer Guide</i>.</p>
   * @public
   */
  launchType?: LaunchType | undefined;

  /**
   * <p>The platform version that your tasks in the service run on. A platform version is only specified for tasks using the Fargate launch type. If one isn't specified, the <code>LATEST</code> platform version is used. For more information, see <a href="https://docs.aws.amazon.com/AmazonECS/latest/developerguide/platform_versions.html">Fargate Platform Versions</a> in the <i>Amazon Elastic Container Service Developer Guide</i>.</p>
   * @public
   */
  platformVersion?: string | undefined;

  /**
   * <p>The operating system that your tasks in the service, or tasks are running on. A platform family is specified only for tasks using the Fargate launch type. </p> <p> All tasks that run as part of this service must use the same <code>platformFamily</code> value as the service, for example, <code> LINUX.</code>.</p>
   * @public
   */
  platformFamily?: string | undefined;

  /**
   * <p>The VPC subnet and security group configuration for tasks that receive their own elastic network interface by using the <code>awsvpc</code> networking mode.</p>
   * @public
   */
  networkConfiguration?: NetworkConfiguration | undefined;

  /**
   * <note> <p>The <code>rolloutState</code> of a service is only returned for services that use the rolling update (<code>ECS</code>) deployment type that aren't behind a Classic Load Balancer.</p> </note> <p>The rollout state of the deployment. When a service deployment is started, it begins in an <code>IN_PROGRESS</code> state. When the service reaches a steady state, the deployment transitions to a <code>COMPLETED</code> state. If the service fails to reach a steady state and circuit breaker is turned on, the deployment transitions to a <code>FAILED</code> state. A deployment in <code>FAILED</code> state doesn't launch any new tasks. For more information, see <a href="https://docs.aws.amazon.com/AmazonECS/latest/APIReference/API_DeploymentCircuitBreaker.html">DeploymentCircuitBreaker</a>.</p>
   * @public
   */
  rolloutState?: DeploymentRolloutState | undefined;

  /**
   * <p>A description of the rollout state of a deployment.</p>
   * @public
   */
  rolloutStateReason?: string | undefined;

  /**
   * <p>The details of the Service Connect configuration that's used by this deployment. Compare the configuration between multiple deployments when troubleshooting issues with new deployments.</p> <p>The configuration for this service to discover and connect to services, and be discovered by, and connected from, other services within a namespace.</p> <p>Tasks that run in a namespace can use short names to connect to services in the namespace. Tasks can connect to services across all of the clusters in the namespace. Tasks connect through a managed proxy container that collects logs and metrics for increased visibility. Only the tasks that Amazon ECS services create are supported with Service Connect. For more information, see <a href="https://docs.aws.amazon.com/AmazonECS/latest/developerguide/service-connect.html">Service Connect</a> in the <i>Amazon Elastic Container Service Developer Guide</i>.</p>
   * @public
   */
  serviceConnectConfiguration?: ServiceConnectConfiguration | undefined;

  /**
   * <p>The list of Service Connect resources that are associated with this deployment. Each list entry maps a discovery name to a Cloud Map service name.</p>
   * @public
   */
  serviceConnectResources?: ServiceConnectServiceResource[] | undefined;

  /**
   * <p>The details of the volume that was <code>configuredAtLaunch</code>. You can configure different settings like the size, throughput, volumeType, and ecryption in <a href="https://docs.aws.amazon.com/AmazonECS/latest/APIReference/API_ServiceManagedEBSVolumeConfiguration.html">ServiceManagedEBSVolumeConfiguration</a>. The <code>name</code> of the volume must match the <code>name</code> from the task definition.</p>
   * @public
   */
  volumeConfigurations?: ServiceVolumeConfiguration[] | undefined;

  /**
   * <p>The Fargate ephemeral storage settings for the deployment.</p>
   * @public
   */
  fargateEphemeralStorage?: DeploymentEphemeralStorage | undefined;

  /**
   * <p>The VPC Lattice configuration for the service deployment.</p>
   * @public
   */
  vpcLatticeConfigurations?: VpcLatticeConfiguration[] | undefined;
}

/**
 * <p>The details for an event that's associated with a service.</p>
 * @public
 */
export interface ServiceEvent {
  /**
   * <p>The ID string for the event.</p>
   * @public
   */
  id?: string | undefined;

  /**
   * <p>The Unix timestamp for the time when the event was triggered.</p>
   * @public
   */
  createdAt?: Date | undefined;

  /**
   * <p>The event message.</p>
   * @public
   */
  message?: string | undefined;
}

/**
 * <p>A floating-point percentage of the desired number of tasks to place and keep running in the task set.</p>
 * @public
 */
export interface Scale {
  /**
   * <p>The value, specified as a percent total of a service's <code>desiredCount</code>, to scale the task set. Accepted values are numbers between 0 and 100.</p>
   * @public
   */
  value?: number | undefined;

  /**
   * <p>The unit of measure for the scale value.</p>
   * @public
   */
  unit?: ScaleUnit | undefined;
}

/**
 * <p>Information about a set of Amazon ECS tasks in either an CodeDeploy or an <code>EXTERNAL</code> deployment. An Amazon ECS task set includes details such as the desired number of tasks, how many tasks are running, and whether the task set serves production traffic.</p>
 * @public
 */
export interface TaskSet {
  /**
   * <p>The ID of the task set.</p>
   * @public
   */
  id?: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the task set.</p>
   * @public
   */
  taskSetArn?: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the service the task set exists in.</p>
   * @public
   */
  serviceArn?: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the cluster that the service that hosts the task set exists in.</p>
   * @public
   */
  clusterArn?: string | undefined;

  /**
   * <p>The tag specified when a task set is started. If an CodeDeploy deployment created the task set, the <code>startedBy</code> parameter is <code>CODE_DEPLOY</code>. If an external deployment created the task set, the <code>startedBy</code> field isn't used.</p>
   * @public
   */
  startedBy?: string | undefined;

  /**
   * <p>The external ID associated with the task set.</p> <p>If an CodeDeploy deployment created a task set, the <code>externalId</code> parameter contains the CodeDeploy deployment ID.</p> <p>If a task set is created for an external deployment and is associated with a service discovery registry, the <code>externalId</code> parameter contains the <code>ECS_TASK_SET_EXTERNAL_ID</code> Cloud Map attribute.</p>
   * @public
   */
  externalId?: string | undefined;

  /**
   * <p>The status of the task set. The following describes each state.</p> <dl> <dt>PRIMARY</dt> <dd> <p>The task set is serving production traffic.</p> </dd> <dt>ACTIVE</dt> <dd> <p>The task set isn't serving production traffic.</p> </dd> <dt>DRAINING</dt> <dd> <p>The tasks in the task set are being stopped, and their corresponding targets are being deregistered from their target group.</p> </dd> </dl>
   * @public
   */
  status?: string | undefined;

  /**
   * <p>The task definition that the task set is using.</p>
   * @public
   */
  taskDefinition?: string | undefined;

  /**
   * <p>The computed desired count for the task set. This is calculated by multiplying the service's <code>desiredCount</code> by the task set's <code>scale</code> percentage. The result is always rounded up. For example, if the computed desired count is 1.2, it rounds up to 2 tasks.</p>
   * @public
   */
  computedDesiredCount?: number | undefined;

  /**
   * <p>The number of tasks in the task set that are in the <code>PENDING</code> status during a deployment. A task in the <code>PENDING</code> state is preparing to enter the <code>RUNNING</code> state. A task set enters the <code>PENDING</code> status when it launches for the first time or when it's restarted after being in the <code>STOPPED</code> state.</p>
   * @public
   */
  pendingCount?: number | undefined;

  /**
   * <p>The number of tasks in the task set that are in the <code>RUNNING</code> status during a deployment. A task in the <code>RUNNING</code> state is running and ready for use.</p>
   * @public
   */
  runningCount?: number | undefined;

  /**
   * <p>The Unix timestamp for the time when the task set was created.</p>
   * @public
   */
  createdAt?: Date | undefined;

  /**
   * <p>The Unix timestamp for the time when the task set was last updated.</p>
   * @public
   */
  updatedAt?: Date | undefined;

  /**
   * <p>The launch type the tasks in the task set are using. For more information, see <a href="https://docs.aws.amazon.com/AmazonECS/latest/developerguide/launch_types.html">Amazon ECS launch types</a> in the <i>Amazon Elastic Container Service Developer Guide</i>.</p>
   * @public
   */
  launchType?: LaunchType | undefined;

  /**
   * <p>The capacity provider strategy that are associated with the task set.</p>
   * @public
   */
  capacityProviderStrategy?: CapacityProviderStrategyItem[] | undefined;

  /**
   * <p>The Fargate platform version where the tasks in the task set are running. A platform version is only specified for tasks run on Fargate. For more information, see <a href="https://docs.aws.amazon.com/AmazonECS/latest/developerguide/platform_versions.html">Fargate platform versions</a> in the <i>Amazon Elastic Container Service Developer Guide</i>.</p>
   * @public
   */
  platformVersion?: string | undefined;

  /**
   * <p>The operating system that your tasks in the set are running on. A platform family is specified only for tasks that use the Fargate launch type. </p> <p> All tasks in the set must have the same value.</p>
   * @public
   */
  platformFamily?: string | undefined;

  /**
   * <p>The network configuration for the task set.</p>
   * @public
   */
  networkConfiguration?: NetworkConfiguration | undefined;

  /**
   * <p>Details on a load balancer that are used with a task set.</p>
   * @public
   */
  loadBalancers?: LoadBalancer[] | undefined;

  /**
   * <p>The details for the service discovery registries to assign to this task set. For more information, see <a href="https://docs.aws.amazon.com/AmazonECS/latest/developerguide/service-discovery.html">Service discovery</a>.</p>
   * @public
   */
  serviceRegistries?: ServiceRegistry[] | undefined;

  /**
   * <p>A floating-point percentage of your desired number of tasks to place and keep running in the task set.</p>
   * @public
   */
  scale?: Scale | undefined;

  /**
   * <p>The stability status. This indicates whether the task set has reached a steady state. If the following conditions are met, the task set are in <code>STEADY_STATE</code>:</p> <ul> <li> <p>The task <code>runningCount</code> is equal to the <code>computedDesiredCount</code>.</p> </li> <li> <p>The <code>pendingCount</code> is <code>0</code>.</p> </li> <li> <p>There are no tasks that are running on container instances in the <code>DRAINING</code> status.</p> </li> <li> <p>All tasks are reporting a healthy status from the load balancers, service discovery, and container health checks.</p> </li> </ul> <p>If any of those conditions aren't met, the stability status returns <code>STABILIZING</code>.</p>
   * @public
   */
  stabilityStatus?: StabilityStatus | undefined;

  /**
   * <p>The Unix timestamp for the time when the task set stability status was retrieved.</p>
   * @public
   */
  stabilityStatusAt?: Date | undefined;

  /**
   * <p>The metadata that you apply to the task set to help you categorize and organize them. Each tag consists of a key and an optional value. You define both.</p> <p>The following basic restrictions apply to tags:</p> <ul> <li> <p>Maximum number of tags per resource - 50</p> </li> <li> <p>For each resource, each tag key must be unique, and each tag key can have only one value.</p> </li> <li> <p>Maximum key length - 128 Unicode characters in UTF-8</p> </li> <li> <p>Maximum value length - 256 Unicode characters in UTF-8</p> </li> <li> <p>If your tagging schema is used across multiple services and resources, remember that other services may have restrictions on allowed characters. Generally allowed characters are: letters, numbers, and spaces representable in UTF-8, and the following characters: + - = . _ : / @.</p> </li> <li> <p>Tag keys and values are case-sensitive.</p> </li> <li> <p>Do not use <code>aws:</code>, <code>AWS:</code>, or any upper or lowercase combination of such as a prefix for either keys or values as it is reserved for Amazon Web Services use. You cannot edit or delete tag keys or values with this prefix. Tags with this prefix do not count against your tags per resource limit.</p> </li> </ul>
   * @public
   */
  tags?: Tag[] | undefined;

  /**
   * <p>The Fargate ephemeral storage settings for the task set.</p>
   * @public
   */
  fargateEphemeralStorage?: DeploymentEphemeralStorage | undefined;
}

/**
 * <p>Details on a service within a cluster.</p>
 * @public
 */
export interface Service {
  /**
   * <p>The ARN that identifies the service. For more information about the ARN format, see <a href="https://docs.aws.amazon.com/AmazonECS/latest/developerguide/ecs-account-settings.html#ecs-resource-ids">Amazon Resource Name (ARN)</a> in the <i>Amazon ECS Developer Guide</i>.</p>
   * @public
   */
  serviceArn?: string | undefined;

  /**
   * <p>The name of your service. Up to 255 letters (uppercase and lowercase), numbers, underscores, and hyphens are allowed. Service names must be unique within a cluster. However, you can have similarly named services in multiple clusters within a Region or across multiple Regions.</p>
   * @public
   */
  serviceName?: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the cluster that hosts the service.</p>
   * @public
   */
  clusterArn?: string | undefined;

  /**
   * <p>A list of Elastic Load Balancing load balancer objects. It contains the load balancer name, the container name, and the container port to access from the load balancer. The container name is as it appears in a container definition.</p>
   * @public
   */
  loadBalancers?: LoadBalancer[] | undefined;

  /**
   * <p>The details for the service discovery registries to assign to this service. For more information, see <a href="https://docs.aws.amazon.com/AmazonECS/latest/developerguide/service-discovery.html">Service Discovery</a>.</p>
   * @public
   */
  serviceRegistries?: ServiceRegistry[] | undefined;

  /**
   * <p>The status of the service. The valid values are <code>ACTIVE</code>, <code>DRAINING</code>, or <code>INACTIVE</code>.</p>
   * @public
   */
  status?: string | undefined;

  /**
   * <p>The desired number of instantiations of the task definition to keep running on the service. This value is specified when the service is created with <a href="https://docs.aws.amazon.com/AmazonECS/latest/APIReference/API_CreateService.html">CreateService</a> , and it can be modified with <a href="https://docs.aws.amazon.com/AmazonECS/latest/APIReference/API_UpdateService.html">UpdateService</a>.</p>
   * @public
   */
  desiredCount?: number | undefined;

  /**
   * <p>The number of tasks in the cluster that are in the <code>RUNNING</code> state.</p>
   * @public
   */
  runningCount?: number | undefined;

  /**
   * <p>The number of tasks in the cluster that are in the <code>PENDING</code> state.</p>
   * @public
   */
  pendingCount?: number | undefined;

  /**
   * <p>The launch type the service is using. When using the DescribeServices API, this field is omitted if the service was created using a capacity provider strategy.</p>
   * @public
   */
  launchType?: LaunchType | undefined;

  /**
   * <p>The capacity provider strategy the service uses. When using the DescribeServices API, this field is omitted if the service was created using a launch type.</p>
   * @public
   */
  capacityProviderStrategy?: CapacityProviderStrategyItem[] | undefined;

  /**
   * <p>The platform version to run your service on. A platform version is only specified for tasks that are hosted on Fargate. If one isn't specified, the <code>LATEST</code> platform version is used. For more information, see <a href="https://docs.aws.amazon.com/AmazonECS/latest/developerguide/platform_versions.html">Fargate Platform Versions</a> in the <i>Amazon Elastic Container Service Developer Guide</i>.</p>
   * @public
   */
  platformVersion?: string | undefined;

  /**
   * <p>The operating system that your tasks in the service run on. A platform family is specified only for tasks using the Fargate launch type. </p> <p> All tasks that run as part of this service must use the same <code>platformFamily</code> value as the service (for example, <code>LINUX</code>).</p>
   * @public
   */
  platformFamily?: string | undefined;

  /**
   * <p>The task definition to use for tasks in the service. This value is specified when the service is created with <a href="https://docs.aws.amazon.com/AmazonECS/latest/APIReference/API_CreateService.html">CreateService</a>, and it can be modified with <a href="https://docs.aws.amazon.com/AmazonECS/latest/APIReference/API_UpdateService.html">UpdateService</a>.</p>
   * @public
   */
  taskDefinition?: string | undefined;

  /**
   * <p>Optional deployment parameters that control how many tasks run during the deployment and the ordering of stopping and starting tasks.</p>
   * @public
   */
  deploymentConfiguration?: DeploymentConfiguration | undefined;

  /**
   * <p>Information about a set of Amazon ECS tasks in either an CodeDeploy or an <code>EXTERNAL</code> deployment. An Amazon ECS task set includes details such as the desired number of tasks, how many tasks are running, and whether the task set serves production traffic.</p>
   * @public
   */
  taskSets?: TaskSet[] | undefined;

  /**
   * <p>The current state of deployments for the service.</p>
   * @public
   */
  deployments?: Deployment[] | undefined;

  /**
   * <p>The ARN of the IAM role that's associated with the service. It allows the Amazon ECS container agent to register container instances with an Elastic Load Balancing load balancer.</p>
   * @public
   */
  roleArn?: string | undefined;

  /**
   * <p>The event stream for your service. A maximum of 100 of the latest events are displayed.</p>
   * @public
   */
  events?: ServiceEvent[] | undefined;

  /**
   * <p>The Unix timestamp for the time when the service was created.</p>
   * @public
   */
  createdAt?: Date | undefined;

  /**
   * <p>The ARN of the current service deployment.</p>
   * @public
   */
  currentServiceDeployment?: string | undefined;

  /**
   * <p>The list of the service revisions.</p>
   * @public
   */
  currentServiceRevisions?: ServiceCurrentRevisionSummary[] | undefined;

  /**
   * <p>The placement constraints for the tasks in the service.</p>
   * @public
   */
  placementConstraints?: PlacementConstraint[] | undefined;

  /**
   * <p>The placement strategy that determines how tasks for the service are placed.</p>
   * @public
   */
  placementStrategy?: PlacementStrategy[] | undefined;

  /**
   * <p>The VPC subnet and security group configuration for tasks that receive their own elastic network interface by using the <code>awsvpc</code> networking mode.</p>
   * @public
   */
  networkConfiguration?: NetworkConfiguration | undefined;

  /**
   * <p>The period of time, in seconds, that the Amazon ECS service scheduler ignores unhealthy Elastic Load Balancing, VPC Lattice, and container health checks after a task has first started.</p> <p>If your service has more running tasks than desired, unhealthy tasks in the grace period might be stopped to reach the desired count.</p>
   * @public
   */
  healthCheckGracePeriodSeconds?: number | undefined;

  /**
   * <p>The scheduling strategy to use for the service. For more information, see <a href="https://docs.aws.amazon.com/AmazonECS/latest/developerguide/ecs_services.html">Services</a>.</p> <p>There are two service scheduler strategies available.</p> <ul> <li> <p> <code>REPLICA</code>-The replica scheduling strategy places and maintains the desired number of tasks across your cluster. By default, the service scheduler spreads tasks across Availability Zones. You can use task placement strategies and constraints to customize task placement decisions.</p> </li> <li> <p> <code>DAEMON</code>-The daemon scheduling strategy deploys exactly one task on each active container instance. This task meets all of the task placement constraints that you specify in your cluster. The service scheduler also evaluates the task placement constraints for running tasks. It stop tasks that don't meet the placement constraints.</p> <note> <p>Fargate tasks don't support the <code>DAEMON</code> scheduling strategy.</p> </note> </li> </ul>
   * @public
   */
  schedulingStrategy?: SchedulingStrategy | undefined;

  /**
   * <p>The deployment controller type the service is using. </p>
   * @public
   */
  deploymentController?: DeploymentController | undefined;

  /**
   * <p>The metadata that you apply to the service to help you categorize and organize them. Each tag consists of a key and an optional value. You define bot the key and value.</p> <p>The following basic restrictions apply to tags:</p> <ul> <li> <p>Maximum number of tags per resource - 50</p> </li> <li> <p>For each resource, each tag key must be unique, and each tag key can have only one value.</p> </li> <li> <p>Maximum key length - 128 Unicode characters in UTF-8</p> </li> <li> <p>Maximum value length - 256 Unicode characters in UTF-8</p> </li> <li> <p>If your tagging schema is used across multiple services and resources, remember that other services may have restrictions on allowed characters. Generally allowed characters are: letters, numbers, and spaces representable in UTF-8, and the following characters: + - = . _ : / @.</p> </li> <li> <p>Tag keys and values are case-sensitive.</p> </li> <li> <p>Do not use <code>aws:</code>, <code>AWS:</code>, or any upper or lowercase combination of such as a prefix for either keys or values as it is reserved for Amazon Web Services use. You cannot edit or delete tag keys or values with this prefix. Tags with this prefix do not count against your tags per resource limit.</p> </li> </ul>
   * @public
   */
  tags?: Tag[] | undefined;

  /**
   * <p>The principal that created the service.</p>
   * @public
   */
  createdBy?: string | undefined;

  /**
   * <p>Determines whether to use Amazon ECS managed tags for the tasks in the service. For more information, see <a href="https://docs.aws.amazon.com/AmazonECS/latest/developerguide/ecs-using-tags.html">Tagging Your Amazon ECS Resources</a> in the <i>Amazon Elastic Container Service Developer Guide</i>.</p>
   * @public
   */
  enableECSManagedTags?: boolean | undefined;

  /**
   * <p>Determines whether to propagate the tags from the task definition or the service to the task. If no value is specified, the tags aren't propagated.</p>
   * @public
   */
  propagateTags?: PropagateTags | undefined;

  /**
   * <p>Determines whether the execute command functionality is turned on for the service. If <code>true</code>, the execute command functionality is turned on for all containers in tasks as part of the service.</p>
   * @public
   */
  enableExecuteCommand?: boolean | undefined;

  /**
   * <p>Indicates whether to use Availability Zone rebalancing for the service.</p> <p>For more information, see <a href="https://docs.aws.amazon.com/AmazonECS/latest/developerguide/service-rebalancing.html">Balancing an Amazon ECS service across Availability Zones</a> in the <i> <i>Amazon Elastic Container Service Developer Guide</i> </i>.</p> <p>The default behavior of <code>AvailabilityZoneRebalancing</code> differs between create and update requests:</p> <ul> <li> <p>For create service requests, when no value is specified for <code>AvailabilityZoneRebalancing</code>, Amazon ECS defaults the value to <code>ENABLED</code>.</p> </li> <li> <p>For update service requests, when no value is specified for <code>AvailabilityZoneRebalancing</code>, Amazon ECS defaults to the existing service’s <code>AvailabilityZoneRebalancing</code> value. If the service never had an <code>AvailabilityZoneRebalancing</code> value set, Amazon ECS treats this as <code>DISABLED</code>.</p> </li> </ul>
   * @public
   */
  availabilityZoneRebalancing?: AvailabilityZoneRebalancing | undefined;

  /**
   * <p>Identifies whether an ECS Service is an Express Service managed by ECS, or managed by the customer. The valid values are <code>ECS</code> and <code>CUSTOMER</code> </p>
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
   * <p>The full description of your service following the create call.</p> <p>A service will return either a <code>capacityProviderStrategy</code> or <code>launchType</code> parameter, but not both, depending where one was specified when it was created.</p> <p>If a service is using the <code>ECS</code> deployment controller, the <code>deploymentController</code> and <code>taskSets</code> parameters will not be returned.</p> <p>if the service uses the <code>CODE_DEPLOY</code> deployment controller, the <code>deploymentController</code>, <code>taskSets</code> and <code>deployments</code> parameters will be returned, however the <code>deployments</code> parameter will be an empty list.</p> <p>The response includes a <code>lifecycleHookDetails</code> field, which is an empty array when the service is created or updated. The values are populated when a lifecycle hook executes and are available as part of the service deployment details (<a href="https://docs.aws.amazon.com/AmazonECS/latest/APIReference/API_DescribeServiceDeployments.html">DescribeServiceDeployments</a>).</p>
   * @public
   */
  service?: Service | undefined;
}

/**
 * @public
 */
export interface DeleteExpressGatewayServiceRequest {
  /**
   * <p>The Amazon Resource Name (ARN) of the Express service to delete. The ARN uniquely identifies the service within your Amazon Web Services account and region.</p>
   * @public
   */
  serviceArn: string | undefined;
}

/**
 * @public
 */
export interface DeleteExpressGatewayServiceResponse {
  /**
   * <p>The full description of the deleted express service.</p>
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
   * <p>The short name or full Amazon Resource Name (ARN) of the cluster that hosts the service to delete. If you do not specify a cluster, the default cluster is assumed.</p>
   * @public
   */
  cluster?: string | undefined;

  /**
   * <p>The name of the service to delete.</p>
   * @public
   */
  service: string | undefined;

  /**
   * <p>If <code>true</code>, allows you to delete a service even if it wasn't scaled down to zero tasks. It's only necessary to use this if the service uses the <code>REPLICA</code> scheduling strategy.</p>
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
   * <p>The full description of the deleted service.</p>
   * @public
   */
  service?: Service | undefined;
}

/**
 * @public
 */
export interface DescribeExpressGatewayServiceRequest {
  /**
   * <p>The Amazon Resource Name (ARN) of the Express service to describe. The ARN uniquely identifies the service within your Amazon Web Services account and region.</p>
   * @public
   */
  serviceArn: string | undefined;

  /**
   * <p>Specifies additional information to include in the response. Valid values are <code>TAGS</code> to include resource tags associated with the Express service.</p>
   * @public
   */
  include?: ExpressGatewayServiceInclude[] | undefined;
}

/**
 * @public
 */
export interface DescribeExpressGatewayServiceResponse {
  /**
   * <p>The full description of the described express service.</p>
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
   * <p>The short name or full Amazon Resource Name (ARN)the cluster that hosts the service to describe. If you do not specify a cluster, the default cluster is assumed. This parameter is required if the service or services you are describing were launched in any cluster other than the default cluster.</p>
   * @public
   */
  cluster?: string | undefined;

  /**
   * <p>A list of services to describe. You may specify up to 10 services to describe in a single operation.</p>
   * @public
   */
  services: string[] | undefined;

  /**
   * <p>Determines whether you want to see the resource tags for the service. If <code>TAGS</code> is specified, the tags are included in the response. If this field is omitted, tags aren't included in the response.</p>
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
   * <p>The list of services described.</p>
   * @public
   */
  services?: Service[] | undefined;

  /**
   * <p>Any failures associated with the call.</p>
   * @public
   */
  failures?: Failure[] | undefined;
}

/**
 * @public
 */
export interface ListServiceDeploymentsRequest {
  /**
   * <p>The ARN or name of the service</p>
   * @public
   */
  service: string | undefined;

  /**
   * <p>The cluster that hosts the service. This can either be the cluster name or ARN. Starting April 15, 2023, Amazon Web Services will not onboard new customers to Amazon Elastic Inference (EI), and will help current customers migrate their workloads to options that offer better price and performance. If you don't specify a cluster, <code>default</code> is used.</p>
   * @public
   */
  cluster?: string | undefined;

  /**
   * <p>An optional filter you can use to narrow the results. If you do not specify a status, then all status values are included in the result.</p>
   * @public
   */
  status?: ServiceDeploymentStatus[] | undefined;

  /**
   * <p>An optional filter you can use to narrow the results by the service creation date. If you do not specify a value, the result includes all services created before the current time. The format is yyyy-MM-dd HH:mm:ss.SSSSSS.</p>
   * @public
   */
  createdAt?: CreatedAt | undefined;

  /**
   * <p>The <code>nextToken</code> value returned from a <code>ListServiceDeployments</code> request indicating that more results are available to fulfill the request and further calls are needed. If you provided <code>maxResults</code>, it's possible the number of results is fewer than <code>maxResults</code>.</p>
   * @public
   */
  nextToken?: string | undefined;

  /**
   * <p>The maximum number of service deployment results that <code>ListServiceDeployments</code> returned in paginated output. When this parameter is used, <code>ListServiceDeployments</code> only returns <code>maxResults</code> results in a single page along with a <code>nextToken</code> response element. The remaining results of the initial request can be seen by sending another <code>ListServiceDeployments</code> request with the returned <code>nextToken</code> value. This value can be between 1 and 100. If this parameter isn't used, then <code>ListServiceDeployments</code> returns up to 20 results and a <code>nextToken</code> value if applicable.</p>
   * @public
   */
  maxResults?: number | undefined;
}

/**
 * <p>The service deployment properties that are retured when you call <code>ListServiceDeployments</code>.</p> <p>This provides a high-level overview of the service deployment. </p>
 * @public
 */
export interface ServiceDeploymentBrief {
  /**
   * <p>The ARN of the service deployment.</p>
   * @public
   */
  serviceDeploymentArn?: string | undefined;

  /**
   * <p>The ARN of the service for this service deployment.</p>
   * @public
   */
  serviceArn?: string | undefined;

  /**
   * <p>The ARN of the cluster that hosts the service.</p>
   * @public
   */
  clusterArn?: string | undefined;

  /**
   * <p>The time that the service deployment statred. The format is yyyy-MM-dd HH:mm:ss.SSSSSS.</p>
   * @public
   */
  startedAt?: Date | undefined;

  /**
   * <p>The time that the service deployment was created. The format is yyyy-MM-dd HH:mm:ss.SSSSSS.</p>
   * @public
   */
  createdAt?: Date | undefined;

  /**
   * <p>The time that the service deployment completed. The format is yyyy-MM-dd HH:mm:ss.SSSSSS.</p>
   * @public
   */
  finishedAt?: Date | undefined;

  /**
   * <p>The ARN of the service revision being deplyed.</p>
   * @public
   */
  targetServiceRevisionArn?: string | undefined;

  /**
   * <p>The status of the service deployment</p>
   * @public
   */
  status?: ServiceDeploymentStatus | undefined;

  /**
   * <p>Information about why the service deployment is in the current status. For example, the circuit breaker detected a deployment failure.</p>
   * @public
   */
  statusReason?: string | undefined;
}

/**
 * @public
 */
export interface ListServiceDeploymentsResponse {
  /**
   * <p>An overview of the service deployment, including the following properties:</p> <ul> <li> <p>The ARN of the service deployment.</p> </li> <li> <p>The ARN of the service being deployed.</p> </li> <li> <p>The ARN of the cluster that hosts the service in the service deployment.</p> </li> <li> <p>The time that the service deployment started.</p> </li> <li> <p>The time that the service deployment completed.</p> </li> <li> <p>The service deployment status.</p> </li> <li> <p>Information about why the service deployment is in the current state.</p> </li> <li> <p>The ARN of the service revision that is being deployed.</p> </li> </ul>
   * @public
   */
  serviceDeployments?: ServiceDeploymentBrief[] | undefined;

  /**
   * <p>The <code>nextToken</code> value to include in a future <code>ListServiceDeployments</code> request. When the results of a <code>ListServiceDeployments</code> request exceed <code>maxResults</code>, this value can be used to retrieve the next page of results. This value is null when there are no more results to return.</p>
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
   * <p>The short name or full Amazon Resource Name (ARN) of the cluster to use when filtering the <code>ListServices</code> results. If you do not specify a cluster, the default cluster is assumed.</p>
   * @public
   */
  cluster?: string | undefined;

  /**
   * <p>The <code>nextToken</code> value returned from a <code>ListServices</code> request indicating that more results are available to fulfill the request and further calls will be needed. If <code>maxResults</code> was provided, it is possible the number of results to be fewer than <code>maxResults</code>.</p> <note> <p>This token should be treated as an opaque identifier that is only used to retrieve the next items in a list and not for other programmatic purposes.</p> </note>
   * @public
   */
  nextToken?: string | undefined;

  /**
   * <p>The maximum number of service results that <code>ListServices</code> returned in paginated output. When this parameter is used, <code>ListServices</code> only returns <code>maxResults</code> results in a single page along with a <code>nextToken</code> response element. The remaining results of the initial request can be seen by sending another <code>ListServices</code> request with the returned <code>nextToken</code> value. This value can be between 1 and 100. If this parameter isn't used, then <code>ListServices</code> returns up to 10 results and a <code>nextToken</code> value if applicable.</p>
   * @public
   */
  maxResults?: number | undefined;

  /**
   * <p>The launch type to use when filtering the <code>ListServices</code> results.</p>
   * @public
   */
  launchType?: LaunchType | undefined;

  /**
   * <p>The scheduling strategy to use when filtering the <code>ListServices</code> results.</p>
   * @public
   */
  schedulingStrategy?: SchedulingStrategy | undefined;

  /**
   * <p>The resourceManagementType type to use when filtering the <code>ListServices</code> results.</p>
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
   * <p>The list of full ARN entries for each service that's associated with the specified cluster.</p>
   * @public
   */
  serviceArns?: string[] | undefined;

  /**
   * <p>The <code>nextToken</code> value to include in a future <code>ListServices</code> request. When the results of a <code>ListServices</code> request exceed <code>maxResults</code>, this value can be used to retrieve the next page of results. This value is <code>null</code> when there are no more results to return.</p>
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * @public
 */
export interface StopServiceDeploymentRequest {
  /**
   * <p>The ARN of the service deployment that you want to stop.</p>
   * @public
   */
  serviceDeploymentArn: string | undefined;

  /**
   * <p>How you want Amazon ECS to stop the service. </p> <p>The valid values are <code>ROLLBACK</code>.</p>
   * @public
   */
  stopType?: StopServiceDeploymentStopType | undefined;
}

/**
 * @public
 */
export interface StopServiceDeploymentResponse {
  /**
   * <p>The ARN of the stopped service deployment.</p>
   * @public
   */
  serviceDeploymentArn?: string | undefined;
}

/**
 * @public
 */
export interface UpdateExpressGatewayServiceRequest {
  /**
   * <p>The Amazon Resource Name (ARN) of the Express service to update.</p>
   * @public
   */
  serviceArn: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the task execution role for the Express service.</p>
   * @public
   */
  executionRoleArn?: string | undefined;

  /**
   * <p>The path on the container for Application Load Balancer health checks.</p>
   * @public
   */
  healthCheckPath?: string | undefined;

  /**
   * <p>The primary container configuration for the Express service.</p>
   * @public
   */
  primaryContainer?: ExpressGatewayContainer | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the IAM role for containers in this task.</p>
   * @public
   */
  taskRoleArn?: string | undefined;

  /**
   * <p>The network configuration for the Express service tasks. By default, the network configuration for an Express service uses the default VPC.</p>
   * @public
   */
  networkConfiguration?: ExpressGatewayServiceNetworkConfiguration | undefined;

  /**
   * <p>The number of CPU units used by the task.</p>
   * @public
   */
  cpu?: string | undefined;

  /**
   * <p>The amount of memory (in MiB) used by the task.</p>
   * @public
   */
  memory?: string | undefined;

  /**
   * <p>The CPU architecture that the task runs on. If you don't specify a value, the service keeps its current architecture.</p> <p>Valid values:</p> <ul> <li> <p> <code>X86_64</code> - The x86 64-bit architecture.</p> </li> <li> <p> <code>ARM64</code> - The 64-bit ARM architecture.</p> </li> </ul> <p>Changing the architecture starts a new deployment that replaces the running tasks. Ensure that the container image you specify supports the architecture you choose. The operating system family for an Express service is always <code>LINUX</code>.</p> <p>You can't specify <code>cpuArchitecture</code> together with <code>taskDefinitionArn</code>.</p>
   * @public
   */
  cpuArchitecture?: ExpressCpuArchitecture | undefined;

  /**
   * <p>The auto-scaling configuration for the Express service.</p>
   * @public
   */
  scalingTarget?: ExpressGatewayScalingTarget | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of a task definition to use to update the Express Gateway service. This allows you to manage your own task definition, giving you more control over the service configuration such as adding sidecar containers.</p> <p>The task definition must have a container named <code>Main</code> with a single TCP port mapping that includes a container port and port name. The task definition must also have <code>FARGATE</code> compatibility.</p> <p>If you provide a task definition ARN, you cannot also specify <code>primaryContainer</code>, <code>executionRoleArn</code>, <code>taskRoleArn</code>, <code>cpu</code>, <code>memory</code>, or <code>cpuArchitecture</code>.</p>
   * @public
   */
  taskDefinitionArn?: string | undefined;
}

/**
 * <p>An object that describes an Express service to be updated.</p>
 * @public
 */
export interface UpdatedExpressGatewayService {
  /**
   * <p>The ARN of the Express service that is being updated.</p>
   * @public
   */
  serviceArn?: string | undefined;

  /**
   * <p>The cluster associated with the Express service that is being updated.</p>
   * @public
   */
  cluster?: string | undefined;

  /**
   * <p>The name of the Express service that is being updated.</p>
   * @public
   */
  serviceName?: string | undefined;

  /**
   * <p>The status of the Express service that is being updated.</p>
   * @public
   */
  status?: ExpressGatewayServiceStatus | undefined;

  /**
   * <p>The configuration to which the current Express service is being updated to.</p>
   * @public
   */
  targetConfiguration?: ExpressGatewayServiceConfiguration | undefined;

  /**
   * <p>The Unix timestamp for when the Express service that is being updated was created.</p>
   * @public
   */
  createdAt?: Date | undefined;

  /**
   * <p>The Unix timestamp for when the Express service that is being updated was most recently updated.</p>
   * @public
   */
  updatedAt?: Date | undefined;
}

/**
 * @public
 */
export interface UpdateExpressGatewayServiceResponse {
  /**
   * <p>The full description of your express gateway service following the update call.</p>
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
   * <p>The short name or full Amazon Resource Name (ARN) of the cluster that your service runs on. If you do not specify a cluster, the default cluster is assumed.</p> <p>You can't change the cluster name.</p>
   * @public
   */
  cluster?: string | undefined;

  /**
   * <p>The name of the service to update.</p>
   * @public
   */
  service: string | undefined;

  /**
   * <p>The number of instantiations of the task to place and keep running in your service.</p> <p>This parameter doesn't trigger a new service deployment.</p>
   * @public
   */
  desiredCount?: number | undefined;

  /**
   * <p>The <code>family</code> and <code>revision</code> (<code>family:revision</code>) or full ARN of the task definition to run in your service. If a <code>revision</code> is not specified, the latest <code>ACTIVE</code> revision is used. If you modify the task definition with <code>UpdateService</code>, Amazon ECS spawns a task with the new version of the task definition and then stops an old task after the new version is running.</p> <p>This parameter triggers a new service deployment.</p>
   * @public
   */
  taskDefinition?: string | undefined;

  /**
   * <p>The details of a capacity provider strategy. You can set a capacity provider when you create a cluster, run a task, or update a service.</p> <note> <p>If you want to use Amazon ECS Managed Instances, you must use the <code>capacityProviderStrategy</code> request parameter.</p> </note> <p>When you use Fargate, the capacity providers are <code>FARGATE</code> or <code>FARGATE_SPOT</code>.</p> <p>When you use Amazon EC2, the capacity providers are Auto Scaling groups.</p> <p>You can change capacity providers for rolling deployments and blue/green deployments.</p> <p>The following list provides the valid transitions:</p> <ul> <li> <p>Update the Fargate launch type to an Auto Scaling group capacity provider.</p> </li> <li> <p>Update the Amazon EC2 launch type to a Fargate capacity provider.</p> </li> <li> <p>Update the Fargate capacity provider to an Auto Scaling group capacity provider.</p> </li> <li> <p>Update the Amazon EC2 capacity provider to a Fargate capacity provider. </p> </li> <li> <p>Update the Auto Scaling group or Fargate capacity provider back to the launch type.</p> <p>Pass an empty list in the <code>capacityProviderStrategy</code> parameter.</p> </li> </ul> <p>For information about Amazon Web Services CDK considerations, see <a href="https://docs.aws.amazon.com/AmazonECS/latest/developerguide/update-service-parameters.html">Amazon Web Services CDK considerations</a>.</p> <p>This parameter doesn't trigger a new service deployment.</p>
   * @public
   */
  capacityProviderStrategy?: CapacityProviderStrategyItem[] | undefined;

  /**
   * <p>Optional deployment parameters that control how many tasks run during the deployment and the ordering of stopping and starting tasks.</p> <p>This parameter doesn't trigger a new service deployment.</p>
   * @public
   */
  deploymentConfiguration?: DeploymentConfiguration | undefined;

  /**
   * <p>Indicates whether to use Availability Zone rebalancing for the service.</p> <p>For more information, see <a href="https://docs.aws.amazon.com/AmazonECS/latest/developerguide/service-rebalancing.html">Balancing an Amazon ECS service across Availability Zones</a> in the <i> <i>Amazon Elastic Container Service Developer Guide</i> </i>.</p> <p>The default behavior of <code>AvailabilityZoneRebalancing</code> differs between create and update requests:</p> <ul> <li> <p>For create service requests, when no value is specified for <code>AvailabilityZoneRebalancing</code>, Amazon ECS defaults the value to <code>ENABLED</code>.</p> </li> <li> <p>For update service requests, when no value is specified for <code>AvailabilityZoneRebalancing</code>, Amazon ECS defaults to the existing service’s <code>AvailabilityZoneRebalancing</code> value. If the service never had an <code>AvailabilityZoneRebalancing</code> value set, Amazon ECS treats this as <code>DISABLED</code>.</p> </li> </ul> <p>This parameter doesn't trigger a new service deployment.</p>
   * @public
   */
  availabilityZoneRebalancing?: AvailabilityZoneRebalancing | undefined;

  /**
   * <p>An object representing the network configuration for the service.</p> <p>This parameter triggers a new service deployment.</p>
   * @public
   */
  networkConfiguration?: NetworkConfiguration | undefined;

  /**
   * <p>An array of task placement constraint objects to update the service to use. If no value is specified, the existing placement constraints for the service will remain unchanged. If this value is specified, it will override any existing placement constraints defined for the service. To remove all existing placement constraints, specify an empty array.</p> <p>You can specify a maximum of 10 constraints for each task. This limit includes constraints in the task definition and those specified at runtime.</p> <p>This parameter doesn't trigger a new service deployment.</p>
   * @public
   */
  placementConstraints?: PlacementConstraint[] | undefined;

  /**
   * <p>The task placement strategy objects to update the service to use. If no value is specified, the existing placement strategy for the service will remain unchanged. If this value is specified, it will override the existing placement strategy defined for the service. To remove an existing placement strategy, specify an empty object.</p> <p>You can specify a maximum of five strategy rules for each service.</p> <p>This parameter doesn't trigger a new service deployment.</p>
   * @public
   */
  placementStrategy?: PlacementStrategy[] | undefined;

  /**
   * <p>The platform version that your tasks in the service run on. A platform version is only specified for tasks using the Fargate launch type. If a platform version is not specified, the <code>LATEST</code> platform version is used. For more information, see <a href="https://docs.aws.amazon.com/AmazonECS/latest/developerguide/platform_versions.html">Fargate Platform Versions</a> in the <i>Amazon Elastic Container Service Developer Guide</i>.</p> <p>This parameter triggers a new service deployment.</p>
   * @public
   */
  platformVersion?: string | undefined;

  /**
   * <p>Determines whether to force a new deployment of the service. By default, deployments aren't forced. You can use this option to start a new deployment with no service definition changes. For example, you can update a service's tasks to use a newer Docker image with the same image/tag combination (<code>my_image:latest</code>) or to roll Fargate tasks onto a newer platform version.</p>
   * @public
   */
  forceNewDeployment?: boolean | undefined;

  /**
   * <p>The period of time, in seconds, that the Amazon ECS service scheduler ignores unhealthy Elastic Load Balancing, VPC Lattice, and container health checks after a task has first started. If you don't specify a health check grace period value, the default value of <code>0</code> is used. If you don't use any of the health checks, then <code>healthCheckGracePeriodSeconds</code> is unused.</p> <p>If your service's tasks take a while to start and respond to health checks, you can specify a health check grace period of up to 2,147,483,647 seconds (about 69 years). During that time, the Amazon ECS service scheduler ignores health check status. This grace period can prevent the service scheduler from marking tasks as unhealthy and stopping them before they have time to come up.</p> <p>If your service has more running tasks than desired, unhealthy tasks in the grace period might be stopped to reach the desired count.</p> <p>This parameter doesn't trigger a new service deployment.</p>
   * @public
   */
  healthCheckGracePeriodSeconds?: number | undefined;

  /**
   * <p>The deployment controller to use for the service. </p>
   * @public
   */
  deploymentController?: DeploymentController | undefined;

  /**
   * <p>If <code>true</code>, this enables execute command functionality on all task containers.</p> <p>If you do not want to override the value that was set when the service was created, you can set this to <code>null</code> when performing this action.</p> <p>This parameter doesn't trigger a new service deployment.</p>
   * @public
   */
  enableExecuteCommand?: boolean | undefined;

  /**
   * <p>Determines whether to turn on Amazon ECS managed tags for the tasks in the service. For more information, see <a href="https://docs.aws.amazon.com/AmazonECS/latest/developerguide/ecs-using-tags.html">Tagging Your Amazon ECS Resources</a> in the <i>Amazon Elastic Container Service Developer Guide</i>.</p> <p>Only tasks launched after the update will reflect the update. To update the tags on all tasks, set <code>forceNewDeployment</code> to <code>true</code>, so that Amazon ECS starts new tasks with the updated tags.</p> <p>This parameter doesn't trigger a new service deployment.</p>
   * @public
   */
  enableECSManagedTags?: boolean | undefined;

  /**
   * <note> <p>You must have a service-linked role when you update this property</p> </note> <p>A list of Elastic Load Balancing load balancer objects. It contains the load balancer name, the container name, and the container port to access from the load balancer. The container name is as it appears in a container definition.</p> <p>When you add, update, or remove a load balancer configuration, Amazon ECS starts new tasks with the updated Elastic Load Balancing configuration, and then stops the old tasks when the new tasks are running.</p> <p>For services that use rolling updates, you can add, update, or remove Elastic Load Balancing target groups. You can update from a single target group to multiple target groups and from multiple target groups to a single target group.</p> <p>For services that use blue/green deployments, you can update Elastic Load Balancing target groups by using <code> <a href="https://docs.aws.amazon.com/codedeploy/latest/APIReference/API_CreateDeployment.html">CreateDeployment</a> </code> through CodeDeploy. Note that multiple target groups are not supported for blue/green deployments. For more information see <a href="https://docs.aws.amazon.com/AmazonECS/latest/developerguide/register-multiple-targetgroups.html">Register multiple target groups with a service</a> in the <i>Amazon Elastic Container Service Developer Guide</i>. </p> <p>For services that use the external deployment controller, you can add, update, or remove load balancers by using <a href="https://docs.aws.amazon.com/AmazonECS/latest/APIReference/API_CreateTaskSet.html">CreateTaskSet</a>. Note that multiple target groups are not supported for external deployments. For more information see <a href="https://docs.aws.amazon.com/AmazonECS/latest/developerguide/register-multiple-targetgroups.html">Register multiple target groups with a service</a> in the <i>Amazon Elastic Container Service Developer Guide</i>. </p> <p>You can remove existing <code>loadBalancers</code> by passing an empty list.</p> <p>This parameter triggers a new service deployment.</p>
   * @public
   */
  loadBalancers?: LoadBalancer[] | undefined;

  /**
   * <p>Determines whether to propagate the tags from the task definition or the service to the task. If no value is specified, the tags aren't propagated.</p> <p>Only tasks launched after the update will reflect the update. To update the tags on all tasks, set <code>forceNewDeployment</code> to <code>true</code>, so that Amazon ECS starts new tasks with the updated tags.</p> <p>This parameter doesn't trigger a new service deployment.</p>
   * @public
   */
  propagateTags?: PropagateTags | undefined;

  /**
   * <note> <p>You must have a service-linked role when you update this property.</p> <p>For more information about the role see the <code>CreateService</code> request parameter <a href="https://docs.aws.amazon.com/AmazonECS/latest/APIReference/API_CreateService.html#ECS-CreateService-request-role"> <code>role</code> </a>. </p> </note> <p>The details for the service discovery registries to assign to this service. For more information, see <a href="https://docs.aws.amazon.com/AmazonECS/latest/developerguide/service-discovery.html">Service Discovery</a>.</p> <p>When you add, update, or remove the service registries configuration, Amazon ECS starts new tasks with the updated service registries configuration, and then stops the old tasks when the new tasks are running.</p> <p>You can remove existing <code>serviceRegistries</code> by passing an empty list.</p> <p>This parameter triggers a new service deployment.</p>
   * @public
   */
  serviceRegistries?: ServiceRegistry[] | undefined;

  /**
   * <p>The configuration for this service to discover and connect to services, and be discovered by, and connected from, other services within a namespace.</p> <p>Tasks that run in a namespace can use short names to connect to services in the namespace. Tasks can connect to services across all of the clusters in the namespace. Tasks connect through a managed proxy container that collects logs and metrics for increased visibility. Only the tasks that Amazon ECS services create are supported with Service Connect. For more information, see <a href="https://docs.aws.amazon.com/AmazonECS/latest/developerguide/service-connect.html">Service Connect</a> in the <i>Amazon Elastic Container Service Developer Guide</i>.</p> <p>This parameter triggers a new service deployment.</p>
   * @public
   */
  serviceConnectConfiguration?: ServiceConnectConfiguration | undefined;

  /**
   * <p>The details of the volume that was <code>configuredAtLaunch</code>. You can configure the size, volumeType, IOPS, throughput, snapshot and encryption in <a href="https://docs.aws.amazon.com/AmazonECS/latest/APIReference/API_ServiceManagedEBSVolumeConfiguration.html">ServiceManagedEBSVolumeConfiguration</a>. The <code>name</code> of the volume must match the <code>name</code> from the task definition. If set to null, no new deployment is triggered. Otherwise, if this configuration differs from the existing one, it triggers a new deployment.</p> <p>This parameter triggers a new service deployment.</p>
   * @public
   */
  volumeConfigurations?: ServiceVolumeConfiguration[] | undefined;

  /**
   * <p>An object representing the VPC Lattice configuration for the service being updated.</p> <p>This parameter triggers a new service deployment.</p>
   * @public
   */
  vpcLatticeConfigurations?: VpcLatticeConfiguration[] | undefined;

  /**
   * <p>The updated set of gateway connectors that connect the service to a gateway ingress path. A service supports no more than one gateway connector.</p>
   * @public
   */
  gatewayConnectors?: GatewayConnector[] | undefined;

  /**
   * <p>The optional monitoring configuration for the service, which defines the resolution for the service-level <code>CPUUtilization</code> and <code>MemoryUtilization</code> Amazon CloudWatch metrics. When not specified, Amazon ECS uses the default resolution of <code>60</code> seconds.</p>
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
   * <p>The full description of your service following the update call.</p> <p>The response includes a <code>lifecycleHookDetails</code> field, which is an empty array when the service is created or updated. The values are populated when a lifecycle hook executes and are available as part of the service deployment details (<a href="https://docs.aws.amazon.com/AmazonECS/latest/APIReference/API_DescribeServiceDeployments.html">DescribeServiceDeployments</a>).</p>
   * @public
   */
  service?: Service | undefined;
}

/**
 * @public
 */
export interface UpdateServicePrimaryTaskSetRequest {
  /**
   * <p>The short name or full Amazon Resource Name (ARN) of the cluster that hosts the service that the task set exists in.</p>
   * @public
   */
  cluster: string | undefined;

  /**
   * <p>The short name or full Amazon Resource Name (ARN) of the service that the task set exists in.</p>
   * @public
   */
  service: string | undefined;

  /**
   * <p>The short name or full Amazon Resource Name (ARN) of the task set to set as the primary task set in the deployment.</p>
   * @public
   */
  primaryTaskSet: string | undefined;
}

/**
 * @public
 */
export interface UpdateServicePrimaryTaskSetResponse {
  /**
   * <p>The details about the task set.</p>
   * @public
   */
  taskSet?: TaskSet | undefined;
}

/**
 * @public
 */
export interface DescribeServiceRevisionsRequest {
  /**
   * <p>The ARN of the service revision. </p> <p>You can specify a maximum of 20 ARNs.</p> <p>You can call <a href="https://docs.aws.amazon.com/AmazonECS/latest/APIReference/API_ListServiceDeployments.html">ListServiceDeployments</a> to get the ARNs.</p>
   * @public
   */
  serviceRevisionArns: string[] | undefined;
}

/**
 * <p>The details about the container image a service revision uses. </p> <p>To ensure that all tasks in a service use the same container image, Amazon ECS resolves container image names and any image tags specified in the task definition to container image digests. </p> <p>After the container image digest has been established, Amazon ECS uses the digest to start any other desired tasks, and for any future service and service revision updates. This leads to all tasks in a service always running identical container images, resulting in version consistency for your software. For more information, see <a href="https://docs.aws.amazon.com/AmazonECS/latest/developerguide/deployment-type-ecs.html#deployment-container-image-stability">Container image resolution</a> in the Amazon ECS Developer Guide.</p>
 * @public
 */
export interface ContainerImage {
  /**
   * <p>The name of the container.</p>
   * @public
   */
  containerName?: string | undefined;

  /**
   * <p>The container image digest.</p>
   * @public
   */
  imageDigest?: string | undefined;

  /**
   * <p>The container image. </p>
   * @public
   */
  image?: string | undefined;
}

/**
 * <p>The Application Auto Scaling policy created by Amazon ECS when you create an Express service.</p>
 * @public
 */
export interface ManagedApplicationAutoScalingPolicy {
  /**
   * <p>The Amazon Resource Name (ARN) of the Application Auto Scaling policy associated with the Express service.</p>
   * @public
   */
  arn?: string | undefined;

  /**
   * <p>The status of Application Auto Scaling policy creation.</p>
   * @public
   */
  status: ManagedResourceStatus | undefined;

  /**
   * <p>Information about why the Application Auto Scaling policy is in the current status.</p>
   * @public
   */
  statusReason?: string | undefined;

  /**
   * <p>The Unix timestamp for when the Application Auto Scaling policy was last updated.</p>
   * @public
   */
  updatedAt: Date | undefined;

  /**
   * <p>The type of Application Auto Scaling policy associated with the Express service. Valid values are <code>TargetTrackingScaling</code>, <code>StepScaling</code>, and <code>PredictiveScaling</code>.</p>
   * @public
   */
  policyType: string | undefined;

  /**
   * <p>The target value for the auto scaling metric.</p>
   * @public
   */
  targetValue: number | undefined;

  /**
   * <p>The metric used for auto scaling decisions. The available metrics are <code>ECSServiceAverageCPUUtilization</code>, <code>ECSServiceAverageMemoryUtilization</code>, and <code>ALBRequestCOuntPerTarget</code>.</p>
   * @public
   */
  metric: string | undefined;
}

/**
 * <p>Represents a scalable target.</p>
 * @public
 */
export interface ManagedScalableTarget {
  /**
   * <p>The ARN of the scalable target.</p>
   * @public
   */
  arn?: string | undefined;

  /**
   * <p>The status of the scalable target.</p>
   * @public
   */
  status: ManagedResourceStatus | undefined;

  /**
   * <p>Information about why the scalable target is in the current status.</p>
   * @public
   */
  statusReason?: string | undefined;

  /**
   * <p>The Unix timestamp for when the target was most recently updated.</p>
   * @public
   */
  updatedAt: Date | undefined;

  /**
   * <p>The minimum value to scale to in response to a scale-in activity.</p>
   * @public
   */
  minCapacity: number | undefined;

  /**
   * <p>The maximum value to scale to in response to a scale-out activity.</p>
   * @public
   */
  maxCapacity: number | undefined;
}

/**
 * <p>The auto scaling configuration created by Amazon ECS for an Express service.</p>
 * @public
 */
export interface ManagedAutoScaling {
  /**
   * <p>Represents a scalable target.</p>
   * @public
   */
  scalableTarget?: ManagedScalableTarget | undefined;

  /**
   * <p>The policy used for auto scaling.</p>
   * @public
   */
  applicationAutoScalingPolicies?: ManagedApplicationAutoScalingPolicy[] | undefined;
}

/**
 * <p>The Application Load Balancer resources that a gateway created and manages for a connection.</p>
 * @public
 */
export interface GatewayConnectionAlbResources {
  /**
   * <p>The Amazon Resource Name (ARN) of the Amazon Web Services Certificate Manager certificate that is attached to the load balancer listener.</p>
   * @public
   */
  acmCertificateArn?: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the load balancer.</p>
   * @public
   */
  loadBalancerArn?: string | undefined;

  /**
   * <p>The Amazon Resource Names (ARNs) of the security groups that the gateway attaches to the load balancer.</p>
   * @public
   */
  loadBalancerSecurityGroupArns?: string[] | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the listener on the load balancer.</p>
   * @public
   */
  listenerArn?: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the listener rule that routes production traffic to the service.</p>
   * @public
   */
  listenerRuleArn?: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the listener rule that routes test traffic to the service during progressive deployments.</p>
   * @public
   */
  testListenerRuleArn?: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the target group that receives production traffic.</p>
   * @public
   */
  targetGroupArn?: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the alternate target group that the gateway uses during progressive deployments.</p>
   * @public
   */
  alternateTargetGroupArn?: string | undefined;
}

/**
 * <p>The gateway-managed infrastructure resources for a connection, as a union keyed by gateway type.</p>
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
   * <p>The Application Load Balancer resources for a host-based, shared ALB gateway.</p>
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
 * <p>A gateway-managed connection for a service revision. A connection represents the association between the service's gateway connector and a specific gateway, along with the infrastructure that the gateway created for it.</p>
 * @public
 */
export interface GatewayConnection {
  /**
   * <p>The Amazon Resource Name (ARN) of the gateway.</p>
   * @public
   */
  gatewayArn?: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the gateway route for the connection.</p>
   * @public
   */
  gatewayRouteArn?: string | undefined;

  /**
   * <p>The name of the service port that receives gateway-managed ingress traffic.</p>
   * @public
   */
  portName?: string | undefined;

  /**
   * <p>The URL that the gateway uses to route ingress traffic to the service.</p>
   * @public
   */
  serviceUrl?: string | undefined;

  /**
   * <p>The access type of the gateway ingress path.</p> <p>Valid values:</p> <ul> <li> <p> <code>PUBLIC</code> - The ingress path is publicly accessible.</p> </li> <li> <p> <code>PRIVATE</code> - The ingress path is only accessible privately.</p> </li> </ul>
   * @public
   */
  accessType?: AccessType | undefined;

  /**
   * <p>The status of the gateway route for the connection.</p>
   * @public
   */
  status?: GatewayRouteStatus | undefined;

  /**
   * <p>The gateway-managed infrastructure resources for the connection.</p>
   * @public
   */
  resources?: GatewayConnectionResources | undefined;
}

/**
 * <p>The ACM certificate associated with the HTTPS domain created for the Express service.</p>
 * @public
 */
export interface ManagedCertificate {
  /**
   * <p>The Amazon Resource Name (ARN) of the ACM certificate.</p>
   * @public
   */
  arn?: string | undefined;

  /**
   * <p>The status of the ACM; certificate.</p>
   * @public
   */
  status: ManagedResourceStatus | undefined;

  /**
   * <p>Information about why the ACM certificate is in the current status.</p>
   * @public
   */
  statusReason?: string | undefined;

  /**
   * <p>The Unix timestamp for when the ACM certificate was last updated</p>
   * @public
   */
  updatedAt: Date | undefined;

  /**
   * <p>The fully qualified domain name (FQDN) that is secured with this ACM certificate.</p>
   * @public
   */
  domainName: string | undefined;
}

/**
 * <p>The listeners associated with the Express service's Application Load Balancer.</p>
 * @public
 */
export interface ManagedListener {
  /**
   * <p>The Amazon Resource Name (ARN) of the load balancer listener.</p>
   * @public
   */
  arn?: string | undefined;

  /**
   * <p>The status of the load balancer listener.</p>
   * @public
   */
  status: ManagedResourceStatus | undefined;

  /**
   * <p>Informaion about why the load balancer listener is in the current status.</p>
   * @public
   */
  statusReason?: string | undefined;

  /**
   * <p>The Unix timestamp for when this listener was most recently updated.</p>
   * @public
   */
  updatedAt: Date | undefined;
}

/**
 * <p>The Application Load Balancer associated with the Express service.</p>
 * @public
 */
export interface ManagedLoadBalancer {
  /**
   * <p>The Amazon Resource Name (ARN) of the load balancer.</p>
   * @public
   */
  arn?: string | undefined;

  /**
   * <p>The status of the load balancer.</p>
   * @public
   */
  status: ManagedResourceStatus | undefined;

  /**
   * <p>Information about why the load balancer is in the current status.</p>
   * @public
   */
  statusReason?: string | undefined;

  /**
   * <p>The Unix timestamp for when this load balancer was most recently updated.</p>
   * @public
   */
  updatedAt: Date | undefined;

  /**
   * <p>The scheme of the load balancer. By default, the scheme of the load balancer is <code>internet-facing</code>.</p>
   * @public
   */
  scheme: string | undefined;

  /**
   * <p>The IDs of the subnets associated with the load balancer.</p>
   * @public
   */
  subnetIds?: string[] | undefined;

  /**
   * <p>The IDs of the security groups associated with the load balancer.</p>
   * @public
   */
  securityGroupIds?: string[] | undefined;
}

/**
 * <p>A security group associated with the Express service.</p>
 * @public
 */
export interface ManagedSecurityGroup {
  /**
   * <p>The ARN of the security group.</p>
   * @public
   */
  arn?: string | undefined;

  /**
   * <p>The status of the security group.</p>
   * @public
   */
  status: ManagedResourceStatus | undefined;

  /**
   * <p>Information about why the security group is in the current status.</p>
   * @public
   */
  statusReason?: string | undefined;

  /**
   * <p>The Unix timestamp for when the security group was last updated.</p>
   * @public
   */
  updatedAt: Date | undefined;
}

/**
 * <p>The listener rule associated with the Express service's Application Load Balancer.</p>
 * @public
 */
export interface ManagedListenerRule {
  /**
   * <p>The Amazon Resource Name (ARN) of the load balancer listener rule.</p>
   * @public
   */
  arn?: string | undefined;

  /**
   * <p>The status of the load balancer listener rule.</p>
   * @public
   */
  status: ManagedResourceStatus | undefined;

  /**
   * <p>Information about why the load balancer listener rule is in the current status.</p>
   * @public
   */
  statusReason?: string | undefined;

  /**
   * <p>The Unix timestamp for when this listener rule was most recently updated.</p>
   * @public
   */
  updatedAt: Date | undefined;
}

/**
 * <p>The target group associated with the Express service's Application Load Balancer. For more information about load balancer target groups, see <a href="https://docs.aws.amazon.com/elasticloadbalancing/latest/APIReference/API_CreateTargetGroup.html">CreateTargetGroup</a> in the <i>Elastic Load Balancing API Reference</i> </p>
 * @public
 */
export interface ManagedTargetGroup {
  /**
   * <p>The Amazon Resource Name (ARN) of the target group.</p>
   * @public
   */
  arn?: string | undefined;

  /**
   * <p>The status of the target group.</p>
   * @public
   */
  status: ManagedResourceStatus | undefined;

  /**
   * <p>Information about why the target group is in the current status.</p>
   * @public
   */
  statusReason?: string | undefined;

  /**
   * <p>The Unix timestamp for when the target group was last updated.</p>
   * @public
   */
  updatedAt: Date | undefined;

  /**
   * <p>The destination for health checks on the targets.</p>
   * @public
   */
  healthCheckPath: string | undefined;

  /**
   * <p>The port the load balancer uses when performing health checks on targets.</p>
   * @public
   */
  healthCheckPort: number | undefined;

  /**
   * <p>The port on which the targets receive traffic.</p>
   * @public
   */
  port: number | undefined;
}

/**
 * <p>The entry point into the Express service.</p>
 * @public
 */
export interface ManagedIngressPath {
  /**
   * <p>The type of access to the endpoint for the Express service.</p>
   * @public
   */
  accessType: AccessType | undefined;

  /**
   * <p>The endpoint for access to the Express service.</p>
   * @public
   */
  endpoint: string | undefined;

  /**
   * <p>The Application Load Balancer associated with the Express service.</p>
   * @public
   */
  loadBalancer?: ManagedLoadBalancer | undefined;

  /**
   * <p>The security groups associated with the Application Load Balancer.</p>
   * @public
   */
  loadBalancerSecurityGroups?: ManagedSecurityGroup[] | undefined;

  /**
   * <p>The ACM certificate for the Express service's domain.</p>
   * @public
   */
  certificate?: ManagedCertificate | undefined;

  /**
   * <p>The listeners associated with the Application Load Balancer.</p>
   * @public
   */
  listener?: ManagedListener | undefined;

  /**
   * <p>The listener rules for the Application Load Balancer.</p>
   * @public
   */
  rule?: ManagedListenerRule | undefined;

  /**
   * <p>The target groups associated with the Application Load Balancer.</p>
   * @public
   */
  targetGroups?: ManagedTargetGroup[] | undefined;
}

/**
 * <p>The Cloudwatch Log Group created by Amazon ECS for an Express service.</p>
 * @public
 */
export interface ManagedLogGroup {
  /**
   * <p>The Amazon Resource Name (ARN) of the Cloudwatch Log Group associated with the Express service.</p>
   * @public
   */
  arn?: string | undefined;

  /**
   * <p>The status of the Cloudwatch LogGroup.</p>
   * @public
   */
  status: ManagedResourceStatus | undefined;

  /**
   * <p>Information about why the Cloudwatch LogGroup is in the current status.</p>
   * @public
   */
  statusReason?: string | undefined;

  /**
   * <p>The Unix timestamp for when the Cloudwatch LogGroup was last updated</p>
   * @public
   */
  updatedAt: Date | undefined;

  /**
   * <p>The name of the Cloudwatch Log Group associated with the Express service.</p>
   * @public
   */
  logGroupName: string | undefined;
}

/**
 * <p>The CloudWatch metric alarm associated with the Express service's scaling policy.</p>
 * @public
 */
export interface ManagedMetricAlarm {
  /**
   * <p>The Amazon Resource Name (ARN) of the CloudWatch metric alarm.</p>
   * @public
   */
  arn?: string | undefined;

  /**
   * <p>The status of the CloudWatch metric alarm.</p>
   * @public
   */
  status: ManagedResourceStatus | undefined;

  /**
   * <p>Information about why the CloudWatch metric alarm is in the current status.</p>
   * @public
   */
  statusReason?: string | undefined;

  /**
   * <p>The Unix timestamp for when the CloudWatch metric alarm was last updated.</p>
   * @public
   */
  updatedAt: Date | undefined;
}

/**
 * <p>Represents the Amazon Web Services resources managed by Amazon ECS for an Express service, including ingress paths, auto-scaling policies, metric alarms, and security groups.</p>
 * @public
 */
export interface ECSManagedResources {
  /**
   * <p>The ingress paths and endpoints for the Express service.</p>
   * @public
   */
  ingressPaths?: ManagedIngressPath[] | undefined;

  /**
   * <p>The auto-scaling configuration and policies for the Express service.</p>
   * @public
   */
  autoScaling?: ManagedAutoScaling | undefined;

  /**
   * <p>The CloudWatch metric alarms associated with the Express service.</p>
   * @public
   */
  metricAlarms?: ManagedMetricAlarm[] | undefined;

  /**
   * <p>The security groups managed by the Express service.</p>
   * @public
   */
  serviceSecurityGroups?: ManagedSecurityGroup[] | undefined;

  /**
   * <p>The log groups managed by the Express service.</p>
   * @public
   */
  logGroups?: ManagedLogGroup[] | undefined;

  /**
   * <p>The gateway-managed connections for the service revision, including the gateway routes and infrastructure that a gateway created for the service's connector.</p>
   * @public
   */
  gatewayConnections?: GatewayConnection[] | undefined;
}

/**
 * <p>The runtime platform that Amazon ECS applies to a service revision. This value overrides the runtime platform specified in the task definition. You can't set this value.</p>
 * @public
 */
export interface RuntimePlatformOverride {
  /**
   * <p>The CPU architecture that tasks in this service revision run on. This value might differ from the architecture declared in the task definition—for example, when Amazon ECS detects an architecture mismatch during an Amazon ECS Express deployment and runs tasks on a different architecture. You can't set this value.</p> <p>Valid values:</p> <ul> <li> <p> <code>X86_64</code> - The x86 64-bit architecture.</p> </li> <li> <p> <code>ARM64</code> - The 64-bit ARM architecture.</p> </li> </ul>
   * @public
   */
  cpuArchitecture?: string | undefined;
}

/**
 * <p>Contains the runtime overrides that Amazon ECS automatically applies to a service revision when the effective runtime configuration differs from the task definition. This value is read-only.</p>
 * @public
 */
export interface ServiceRevisionOverrides {
  /**
   * <p>The runtime platform override that Amazon ECS automatically applies to the service revision. You can't set this value.</p>
   * @public
   */
  runtimePlatform?: RuntimePlatformOverride | undefined;
}

/**
 * <p>The resolved load balancer configuration for a service revision. This includes information about which target groups serve traffic and which listener rules direct traffic to them.</p>
 * @public
 */
export interface ServiceRevisionLoadBalancer {
  /**
   * <p>The Amazon Resource Name (ARN) of the target group associated with the service revision.</p>
   * @public
   */
  targetGroupArn?: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the production listener rule or listener that directs traffic to the target group associated with the service revision.</p>
   * @public
   */
  productionListenerRule?: string | undefined;
}

/**
 * <p>The resolved VPC Lattice configuration for a service revision. This includes information about which target groups serve traffic and which listener rules direct traffic to them.</p>
 * @public
 */
export interface ServiceRevisionVpcLatticeConfiguration {
  /**
   * <p>The Amazon Resource Name (ARN) of the target group associated with the service revision.</p>
   * @public
   */
  targetGroupArn?: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the production listener rule or listener that directs traffic to the target group associated with the service revision.</p>
   * @public
   */
  productionListenerRule?: string | undefined;
}

/**
 * <p>The resolved configuration for a service revision, which contains the actual resources your service revision uses, such as which target groups serve traffic.</p>
 * @public
 */
export interface ResolvedConfiguration {
  /**
   * <p>The resolved load balancer configuration for the service revision. This includes information about which target groups serve traffic and which listener rules direct traffic to them.</p>
   * @public
   */
  loadBalancers?: ServiceRevisionLoadBalancer[] | undefined;

  /**
   * <p>The resolved VPC Lattice configuration for the service revision. This includes information about which target groups serve traffic and which listener rules direct traffic to them.</p>
   * @public
   */
  vpcLatticeConfigurations?: ServiceRevisionVpcLatticeConfiguration[] | undefined;
}

/**
 * <p>Information about the service revision.</p> <p>A service revision contains a record of the workload configuration Amazon ECS is attempting to deploy. Whenever you create or deploy a service, Amazon ECS automatically creates and captures the configuration that you're trying to deploy in the service revision. For information about service revisions, see <a href="https://docs.aws.amazon.com/AmazonECS/latest/developerguide/service-revision.html">Amazon ECS service revisions</a> in the <i> <i>Amazon Elastic Container Service Developer Guide</i> </i>.</p>
 * @public
 */
export interface ServiceRevision {
  /**
   * <p>The ARN of the service revision.</p>
   * @public
   */
  serviceRevisionArn?: string | undefined;

  /**
   * <p>The ARN of the service for the service revision.</p>
   * @public
   */
  serviceArn?: string | undefined;

  /**
   * <p>The ARN of the cluster that hosts the service.</p>
   * @public
   */
  clusterArn?: string | undefined;

  /**
   * <p>The task definition the service revision uses.</p>
   * @public
   */
  taskDefinition?: string | undefined;

  /**
   * <p>The capacity provider strategy the service revision uses.</p>
   * @public
   */
  capacityProviderStrategy?: CapacityProviderStrategyItem[] | undefined;

  /**
   * <p>The launch type the service revision uses.</p>
   * @public
   */
  launchType?: LaunchType | undefined;

  /**
   * <p>For the Fargate launch type, the platform version the service revision uses.</p>
   * @public
   */
  platformVersion?: string | undefined;

  /**
   * <p>The platform family the service revision uses.</p>
   * @public
   */
  platformFamily?: string | undefined;

  /**
   * <p>The load balancers the service revision uses.</p>
   * @public
   */
  loadBalancers?: LoadBalancer[] | undefined;

  /**
   * <p>The service registries (for Service Discovery) the service revision uses.</p>
   * @public
   */
  serviceRegistries?: ServiceRegistry[] | undefined;

  /**
   * <p>The network configuration for a task or service.</p>
   * @public
   */
  networkConfiguration?: NetworkConfiguration | undefined;

  /**
   * <p>The container images the service revision uses.</p>
   * @public
   */
  containerImages?: ContainerImage[] | undefined;

  /**
   * <p>Indicates whether Runtime Monitoring is turned on.</p>
   * @public
   */
  guardDutyEnabled?: boolean | undefined;

  /**
   * <p>The Service Connect configuration of your Amazon ECS service. The configuration for this service to discover and connect to services, and be discovered by, and connected from, other services within a namespace.</p> <p>Tasks that run in a namespace can use short names to connect to services in the namespace. Tasks can connect to services across all of the clusters in the namespace. Tasks connect through a managed proxy container that collects logs and metrics for increased visibility. Only the tasks that Amazon ECS services create are supported with Service Connect. For more information, see <a href="https://docs.aws.amazon.com/AmazonECS/latest/developerguide/service-connect.html">Service Connect</a> in the <i>Amazon Elastic Container Service Developer Guide</i>.</p>
   * @public
   */
  serviceConnectConfiguration?: ServiceConnectConfiguration | undefined;

  /**
   * <p>The volumes that are configured at deployment that the service revision uses.</p>
   * @public
   */
  volumeConfigurations?: ServiceVolumeConfiguration[] | undefined;

  /**
   * <p>The amount of ephemeral storage to allocate for the deployment.</p>
   * @public
   */
  fargateEphemeralStorage?: DeploymentEphemeralStorage | undefined;

  /**
   * <p>The time that the service revision was created. The format is yyyy-mm-dd HH:mm:ss.SSSSS.</p>
   * @public
   */
  createdAt?: Date | undefined;

  /**
   * <p>The VPC Lattice configuration for the service revision.</p>
   * @public
   */
  vpcLatticeConfigurations?: VpcLatticeConfiguration[] | undefined;

  /**
   * <p>The resolved configuration for the service revision which contains the actual resources your service revision uses, such as which target groups serve traffic.</p>
   * @public
   */
  resolvedConfiguration?: ResolvedConfiguration | undefined;

  /**
   * <p>The resources created and managed by Amazon ECS when you create an Express service for Amazon ECS.</p>
   * @public
   */
  ecsManagedResources?: ECSManagedResources | undefined;

  /**
   * <p>The effective runtime overrides that Amazon ECS applies to this service revision. This value is present only when Amazon ECS detects a difference between the task definition and the actual runtime configuration.</p>
   * @public
   */
  overrides?: ServiceRevisionOverrides | undefined;

  /**
   * <p>The gateway connectors that are associated with the service revision.</p>
   * @public
   */
  gatewayConnectors?: GatewayConnector[] | undefined;

  /**
   * <p>The optional monitoring configuration for the service, which defines the resolution for the service-level <code>CPUUtilization</code> and <code>MemoryUtilization</code> Amazon CloudWatch metrics. When not specified, Amazon ECS uses the default resolution of <code>60</code> seconds.</p>
   * @public
   */
  monitoring?: MonitoringConfiguration | undefined;
}

/**
 * @public
 */
export interface DescribeServiceRevisionsResponse {
  /**
   * <p>The list of service revisions described.</p>
   * @public
   */
  serviceRevisions?: ServiceRevision[] | undefined;

  /**
   * <p>Any failures associated with the call.</p>
   * @public
   */
  failures?: Failure[] | undefined;
}

/**
 * @public
 */
export interface TagResourceRequest {
  /**
   * <p>The Amazon Resource Name (ARN) of the resource to add tags to. Currently, the supported resources are Amazon ECS capacity providers, tasks, services, task definitions, clusters, and container instances.</p> <p>In order to tag a service that has the following ARN format, you need to migrate the service to the long ARN. For more information, see <a href="https://docs.aws.amazon.com/AmazonECS/latest/developerguide/service-arn-migration.html">Migrate an Amazon ECS short service ARN to a long ARN</a> in the <i>Amazon Elastic Container Service Developer Guide</i>.</p> <p> <code>arn:aws:ecs:region:aws_account_id:service/service-name</code> </p> <p>After the migration is complete, the service has the long ARN format, as shown below. Use this ARN to tag the service.</p> <p> <code>arn:aws:ecs:region:aws_account_id:service/cluster-name/service-name</code> </p> <p>If you try to tag a service with a short ARN, you receive an <code>InvalidParameterException</code> error.</p>
   * @public
   */
  resourceArn: string | undefined;

  /**
   * <p>The tags to add to the resource. A tag is an array of key-value pairs.</p> <p>The following basic restrictions apply to tags:</p> <ul> <li> <p>Maximum number of tags per resource - 50</p> </li> <li> <p>For each resource, each tag key must be unique, and each tag key can have only one value.</p> </li> <li> <p>Maximum key length - 128 Unicode characters in UTF-8</p> </li> <li> <p>Maximum value length - 256 Unicode characters in UTF-8</p> </li> <li> <p>If your tagging schema is used across multiple services and resources, remember that other services may have restrictions on allowed characters. Generally allowed characters are: letters, numbers, and spaces representable in UTF-8, and the following characters: + - = . _ : / @.</p> </li> <li> <p>Tag keys and values are case-sensitive.</p> </li> <li> <p>Do not use <code>aws:</code>, <code>AWS:</code>, or any upper or lowercase combination of such as a prefix for either keys or values as it is reserved for Amazon Web Services use. You cannot edit or delete tag keys or values with this prefix. Tags with this prefix do not count against your tags per resource limit.</p> </li> </ul>
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
   * <p>The <code>family</code> and <code>revision</code> (<code>family:revision</code>) or full Amazon Resource Name (ARN) of the task definition to delete. You must specify a <code>revision</code>.</p> <p>You can specify up to 10 task definitions as a comma separated list.</p>
   * @public
   */
  taskDefinitions: string[] | undefined;
}

/**
 * @public
 */
export interface DeleteTaskDefinitionsResponse {
  /**
   * <p>The list of deleted task definitions.</p>
   * @public
   */
  taskDefinitions?: TaskDefinition[] | undefined;

  /**
   * <p>Any failures associated with the call.</p>
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
   * <p>The full family name to filter the <code>ListTaskDefinitions</code> results with. Specifying a <code>familyPrefix</code> limits the listed task definitions to task definition revisions that belong to that family.</p>
   * @public
   */
  familyPrefix?: string | undefined;

  /**
   * <p>The task definition status to filter the <code>ListTaskDefinitions</code> results with. By default, only <code>ACTIVE</code> task definitions are listed. By setting this parameter to <code>INACTIVE</code>, you can view task definitions that are <code>INACTIVE</code> as long as an active task or service still references them. If you paginate the resulting output, be sure to keep the <code>status</code> value constant in each subsequent request.</p>
   * @public
   */
  status?: TaskDefinitionStatus | undefined;

  /**
   * <p>The order to sort the results in. Valid values are <code>ASC</code> and <code>DESC</code>. By default, (<code>ASC</code>) task definitions are listed lexicographically by family name and in ascending numerical order by revision so that the newest task definitions in a family are listed last. Setting this parameter to <code>DESC</code> reverses the sort order on family name and revision. This is so that the newest task definitions in a family are listed first.</p>
   * @public
   */
  sort?: SortOrder | undefined;

  /**
   * <p>The <code>nextToken</code> value returned from a <code>ListTaskDefinitions</code> request indicating that more results are available to fulfill the request and further calls will be needed. If <code>maxResults</code> was provided, it is possible the number of results to be fewer than <code>maxResults</code>.</p> <note> <p>This token should be treated as an opaque identifier that is only used to retrieve the next items in a list and not for other programmatic purposes.</p> </note>
   * @public
   */
  nextToken?: string | undefined;

  /**
   * <p>The maximum number of task definition results that <code>ListTaskDefinitions</code> returned in paginated output. When this parameter is used, <code>ListTaskDefinitions</code> only returns <code>maxResults</code> results in a single page along with a <code>nextToken</code> response element. The remaining results of the initial request can be seen by sending another <code>ListTaskDefinitions</code> request with the returned <code>nextToken</code> value. This value can be between 1 and 100. If this parameter isn't used, then <code>ListTaskDefinitions</code> returns up to 100 results and a <code>nextToken</code> value if applicable.</p>
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
   * <p>The list of task definition Amazon Resource Name (ARN) entries for the <code>ListTaskDefinitions</code> request.</p>
   * @public
   */
  taskDefinitionArns?: string[] | undefined;

  /**
   * <p>The <code>nextToken</code> value to include in a future <code>ListTaskDefinitions</code> request. When the results of a <code>ListTaskDefinitions</code> request exceed <code>maxResults</code>, this value can be used to retrieve the next page of results. This value is <code>null</code> when there are no more results to return.</p>
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
   * <p>You must specify a <code>family</code> for a task definition. You can use it track multiple versions of the same task definition. The <code>family</code> is used as a name for your task definition. Up to 255 letters (uppercase and lowercase), numbers, underscores, and hyphens are allowed.</p>
   * @public
   */
  family: string | undefined;

  /**
   * <p>The short name or full Amazon Resource Name (ARN) of the IAM role that containers in this task can assume. All containers in this task are granted the permissions that are specified in this role. For more information, see <a href="https://docs.aws.amazon.com/AmazonECS/latest/developerguide/task-iam-roles.html">IAM Roles for Tasks</a> in the <i>Amazon Elastic Container Service Developer Guide</i>.</p>
   * @public
   */
  taskRoleArn?: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the task execution role that grants the Amazon ECS container agent permission to make Amazon Web Services API calls on your behalf. For informationabout the required IAM roles for Amazon ECS, see <a href="https://docs.aws.amazon.com/AmazonECS/latest/developerguide/security-ecs-iam-role-overview.html">IAM roles for Amazon ECS</a> in the <i>Amazon Elastic Container Service Developer Guide</i>.</p>
   * @public
   */
  executionRoleArn?: string | undefined;

  /**
   * <p>The Docker networking mode to use for the containers in the task. The valid values are <code>none</code>, <code>bridge</code>, <code>awsvpc</code>, and <code>host</code>. If no network mode is specified, the default is <code>bridge</code>.</p> <p>For Amazon ECS tasks on Fargate, the <code>awsvpc</code> network mode is required. For Amazon ECS tasks on Amazon EC2 Linux instances, any network mode can be used. For Amazon ECS tasks on Amazon EC2 Windows instances, <code>&lt;default&gt;</code> or <code>awsvpc</code> can be used. If the network mode is set to <code>none</code>, you cannot specify port mappings in your container definitions, and the tasks containers do not have external connectivity. The <code>host</code> and <code>awsvpc</code> network modes offer the highest networking performance for containers because they use the EC2 network stack instead of the virtualized network stack provided by the <code>bridge</code> mode.</p> <p>With the <code>host</code> and <code>awsvpc</code> network modes, exposed container ports are mapped directly to the corresponding host port (for the <code>host</code> network mode) or the attached elastic network interface port (for the <code>awsvpc</code> network mode), so you cannot take advantage of dynamic host port mappings. </p> <important> <p>When using the <code>host</code> network mode, you should not run containers using the root user (UID 0). It is considered best practice to use a non-root user.</p> </important> <p>If the network mode is <code>awsvpc</code>, the task is allocated an elastic network interface, and you must specify a <a href="https://docs.aws.amazon.com/AmazonECS/latest/APIReference/API_NetworkConfiguration.html">NetworkConfiguration</a> value when you create a service or run a task with the task definition. For more information, see <a href="https://docs.aws.amazon.com/AmazonECS/latest/developerguide/task-networking.html">Task Networking</a> in the <i>Amazon Elastic Container Service Developer Guide</i>.</p> <p>If the network mode is <code>host</code>, you cannot run multiple instantiations of the same task on a single container instance when port mappings are used.</p>
   * @public
   */
  networkMode?: NetworkMode | undefined;

  /**
   * <p>A list of container definitions in JSON format that describe the different containers that make up your task.</p>
   * @public
   */
  containerDefinitions: ContainerDefinition[] | undefined;

  /**
   * <p>A list of volume definitions in JSON format that containers in your task might use.</p>
   * @public
   */
  volumes?: Volume[] | undefined;

  /**
   * <p>An array of placement constraint objects to use for the task. You can specify a maximum of 10 constraints for each task. This limit includes constraints in the task definition and those specified at runtime.</p>
   * @public
   */
  placementConstraints?: TaskDefinitionPlacementConstraint[] | undefined;

  /**
   * <p>The task launch type that Amazon ECS validates the task definition against. A client exception is returned if the task definition doesn't validate against the compatibilities specified. If no value is specified, the parameter is omitted from the response.</p>
   * @public
   */
  requiresCompatibilities?: Compatibility[] | undefined;

  /**
   * <p>The number of CPU units used by the task. It can be expressed as an integer using CPU units (for example, <code>1024</code>) or as a string using vCPUs (for example, <code>1 vCPU</code> or <code>1 vcpu</code>) in a task definition. String values are converted to an integer indicating the CPU units when the task definition is registered.</p> <note> <p>Task-level CPU and memory parameters are ignored for Windows containers. We recommend specifying container-level resources for Windows containers.</p> </note> <p>If you're using the EC2 launch type or external launch type, this field is optional. Supported values are between <code>128</code> CPU units (<code>0.125</code> vCPUs) and <code>196608</code> CPU units (<code>192</code> vCPUs). If you do not specify a value, the parameter is ignored.</p> <p>This field is required for Fargate. For information about the valid values, see <a href="https://docs.aws.amazon.com/AmazonECS/latest/developerguide/task_definition_parameters.html#task_size">Task size</a> in the <i>Amazon Elastic Container Service Developer Guide</i>.</p>
   * @public
   */
  cpu?: string | undefined;

  /**
   * <p>The amount of memory (in MiB) used by the task. It can be expressed as an integer using MiB (for example ,<code>1024</code>) or as a string using GB (for example, <code>1GB</code> or <code>1 GB</code>) in a task definition. String values are converted to an integer indicating the MiB when the task definition is registered.</p> <note> <p>Task-level CPU and memory parameters are ignored for Windows containers. We recommend specifying container-level resources for Windows containers.</p> </note> <p>If using the EC2 launch type, this field is optional.</p> <p>If using the Fargate launch type, this field is required and you must use one of the following values. This determines your range of supported values for the <code>cpu</code> parameter.</p> <p>The CPU units cannot be less than 1 vCPU when you use Windows containers on Fargate.</p> <ul> <li> <p>512 (0.5 GB), 1024 (1 GB), 2048 (2 GB) - Available <code>cpu</code> values: 256 (.25 vCPU)</p> </li> <li> <p>1024 (1 GB), 2048 (2 GB), 3072 (3 GB), 4096 (4 GB) - Available <code>cpu</code> values: 512 (.5 vCPU)</p> </li> <li> <p>2048 (2 GB), 3072 (3 GB), 4096 (4 GB), 5120 (5 GB), 6144 (6 GB), 7168 (7 GB), 8192 (8 GB) - Available <code>cpu</code> values: 1024 (1 vCPU)</p> </li> <li> <p>Between 4096 (4 GB) and 16384 (16 GB) in increments of 1024 (1 GB) - Available <code>cpu</code> values: 2048 (2 vCPU)</p> </li> <li> <p>Between 8192 (8 GB) and 30720 (30 GB) in increments of 1024 (1 GB) - Available <code>cpu</code> values: 4096 (4 vCPU)</p> </li> <li> <p>Between 16 GB and 60 GB in 4 GB increments - Available <code>cpu</code> values: 8192 (8 vCPU)</p> <p>This option requires Linux platform <code>1.4.0</code> or later.</p> </li> <li> <p>Between 32GB and 120 GB in 8 GB increments - Available <code>cpu</code> values: 16384 (16 vCPU)</p> <p>This option requires Linux platform <code>1.4.0</code> or later.</p> </li> </ul>
   * @public
   */
  memory?: string | undefined;

  /**
   * <p>The metadata that you apply to the task definition to help you categorize and organize them. Each tag consists of a key and an optional value. You define both of them.</p> <p>The following basic restrictions apply to tags:</p> <ul> <li> <p>Maximum number of tags per resource - 50</p> </li> <li> <p>For each resource, each tag key must be unique, and each tag key can have only one value.</p> </li> <li> <p>Maximum key length - 128 Unicode characters in UTF-8</p> </li> <li> <p>Maximum value length - 256 Unicode characters in UTF-8</p> </li> <li> <p>If your tagging schema is used across multiple services and resources, remember that other services may have restrictions on allowed characters. Generally allowed characters are: letters, numbers, and spaces representable in UTF-8, and the following characters: + - = . _ : / @.</p> </li> <li> <p>Tag keys and values are case-sensitive.</p> </li> <li> <p>Do not use <code>aws:</code>, <code>AWS:</code>, or any upper or lowercase combination of such as a prefix for either keys or values as it is reserved for Amazon Web Services use. You cannot edit or delete tag keys or values with this prefix. Tags with this prefix do not count against your tags per resource limit.</p> </li> </ul>
   * @public
   */
  tags?: Tag[] | undefined;

  /**
   * <p>The process namespace to use for the containers in the task. The valid values are <code>host</code> or <code>task</code>. On Fargate for Linux containers, the only valid value is <code>task</code>. For example, monitoring sidecars might need <code>pidMode</code> to access information about other containers running in the same task.</p> <p>If <code>host</code> is specified, all containers within the tasks that specified the <code>host</code> PID mode on the same container instance share the same process namespace with the host Amazon EC2 instance.</p> <p>If <code>task</code> is specified, all containers within the specified task share the same process namespace.</p> <p>If no value is specified, the The default is a private namespace for each container.</p> <p>If the <code>host</code> PID mode is used, there's a heightened risk of undesired process namespace exposure.</p> <note> <p>This parameter is not supported for Windows containers.</p> </note> <note> <p>This parameter is only supported for tasks that are hosted on Fargate if the tasks are using platform version <code>1.4.0</code> or later (Linux). This isn't supported for Windows containers on Fargate.</p> </note>
   * @public
   */
  pidMode?: PidMode | undefined;

  /**
   * <p>The IPC resource namespace to use for the containers in the task. The valid values are <code>host</code>, <code>task</code>, or <code>none</code>. If <code>host</code> is specified, then all containers within the tasks that specified the <code>host</code> IPC mode on the same container instance share the same IPC resources with the host Amazon EC2 instance. If <code>task</code> is specified, all containers within the specified task share the same IPC resources. If <code>none</code> is specified, then IPC resources within the containers of a task are private and not shared with other containers in a task or on the container instance. If no value is specified, then the IPC resource namespace sharing depends on the Docker daemon setting on the container instance.</p> <p>If the <code>host</code> IPC mode is used, be aware that there is a heightened risk of undesired IPC namespace expose.</p> <p>If you are setting namespaced kernel parameters using <code>systemControls</code> for the containers in the task, the following will apply to your IPC resource namespace. For more information, see <a href="https://docs.aws.amazon.com/AmazonECS/latest/developerguide/task_definition_parameters.html">System Controls</a> in the <i>Amazon Elastic Container Service Developer Guide</i>.</p> <ul> <li> <p>For tasks that use the <code>host</code> IPC mode, IPC namespace related <code>systemControls</code> are not supported.</p> </li> <li> <p>For tasks that use the <code>task</code> IPC mode, IPC namespace related <code>systemControls</code> will apply to all containers within a task.</p> </li> </ul> <note> <p>This parameter is not supported for Windows containers or tasks run on Fargate.</p> </note>
   * @public
   */
  ipcMode?: IpcMode | undefined;

  /**
   * <p>The configuration details for the App Mesh proxy.</p> <p>For tasks hosted on Amazon EC2 instances, the container instances require at least version <code>1.26.0</code> of the container agent and at least version <code>1.26.0-1</code> of the <code>ecs-init</code> package to use a proxy configuration. If your container instances are launched from the Amazon ECS-optimized AMI version <code>20190301</code> or later, then they contain the required versions of the container agent and <code>ecs-init</code>. For more information, see <a href="https://docs.aws.amazon.com/AmazonECS/latest/developerguide/ecs-ami-versions.html">Amazon ECS-optimized AMI versions</a> in the <i>Amazon Elastic Container Service Developer Guide</i>.</p>
   * @public
   */
  proxyConfiguration?: ProxyConfiguration | undefined;

  /**
   * <p>The Elastic Inference accelerators to use for the containers in the task.</p>
   *
   * @deprecated (since 2023-04-15) This feature is no longer available.
   * @public
   */
  inferenceAccelerators?: InferenceAccelerator[] | undefined;

  /**
   * <p>The amount of ephemeral storage to allocate for the task. This parameter is used to expand the total amount of ephemeral storage available, beyond the default amount, for tasks hosted on Fargate. For more information, see <a href="https://docs.aws.amazon.com/AmazonECS/latest/developerguide/using_data_volumes.html">Using data volumes in tasks</a> in the <i>Amazon ECS Developer Guide</i>.</p> <note> <p>For tasks using the Fargate launch type, the task requires the following platforms:</p> <ul> <li> <p>Linux platform version <code>1.4.0</code> or later.</p> </li> <li> <p>Windows platform version <code>1.0.0</code> or later.</p> </li> </ul> </note>
   * @public
   */
  ephemeralStorage?: EphemeralStorage | undefined;

  /**
   * <p>The operating system that your tasks definitions run on.</p>
   * @public
   */
  runtimePlatform?: RuntimePlatform | undefined;

  /**
   * <p>Enables fault injection when you register your task definition and allows for fault injection requests to be accepted from the task's containers. The default value is <code>false</code>.</p>
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
   * <p>The full description of the registered task definition.</p>
   * @public
   */
  taskDefinition?: TaskDefinition | undefined;

  /**
   * <p>The list of tags associated with the task definition.</p>
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
   * <p>The short name or full Amazon Resource Name (ARN) of the cluster that hosts the task or tasks to describe. If you do not specify a cluster, the default cluster is assumed.</p>
   * @public
   */
  cluster?: string | undefined;

  /**
   * <p>A list of up to 100 task IDs or full ARN entries.</p>
   * @public
   */
  tasks: string[] | undefined;

  /**
   * <p>Specifies whether you want to see the resource tags for the task. If <code>TAGS</code> is specified, the tags are included in the response. If this field is omitted, tags aren't included in the response.</p>
   * @public
   */
  include?: TaskField[] | undefined;
}

/**
 * <p>Details about the managed agent status for the container.</p>
 * @public
 */
export interface ManagedAgent {
  /**
   * <p>The Unix timestamp for the time when the managed agent was last started.</p>
   * @public
   */
  lastStartedAt?: Date | undefined;

  /**
   * <p>The name of the managed agent. When the execute command feature is turned on, the managed agent name is <code>ExecuteCommandAgent</code>.</p>
   * @public
   */
  name?: ManagedAgentName | undefined;

  /**
   * <p>The reason for why the managed agent is in the state it is in.</p>
   * @public
   */
  reason?: string | undefined;

  /**
   * <p>The last known status of the managed agent.</p>
   * @public
   */
  lastStatus?: string | undefined;
}

/**
 * <p>An object representing the elastic network interface for tasks that use the <code>awsvpc</code> network mode.</p>
 * @public
 */
export interface NetworkInterface {
  /**
   * <p>The attachment ID for the network interface.</p>
   * @public
   */
  attachmentId?: string | undefined;

  /**
   * <p>The private IPv4 address for the network interface.</p>
   * @public
   */
  privateIpv4Address?: string | undefined;

  /**
   * <p>The private IPv6 address for the network interface.</p>
   * @public
   */
  ipv6Address?: string | undefined;
}

/**
 * <p>A Docker container that's part of a task.</p>
 * @public
 */
export interface Container {
  /**
   * <p>The Amazon Resource Name (ARN) of the container.</p>
   * @public
   */
  containerArn?: string | undefined;

  /**
   * <p>The ARN of the task.</p>
   * @public
   */
  taskArn?: string | undefined;

  /**
   * <p>The name of the container.</p>
   * @public
   */
  name?: string | undefined;

  /**
   * <p>The image used for the container.</p>
   * @public
   */
  image?: string | undefined;

  /**
   * <p>The container image manifest digest.</p>
   * @public
   */
  imageDigest?: string | undefined;

  /**
   * <p>The ID of the Docker container.</p>
   * @public
   */
  runtimeId?: string | undefined;

  /**
   * <p>The last known status of the container.</p>
   * @public
   */
  lastStatus?: string | undefined;

  /**
   * <p>The exit code returned from the container.</p>
   * @public
   */
  exitCode?: number | undefined;

  /**
   * <p>A short (1024 max characters) human-readable string to provide additional details about a running or stopped container.</p>
   * @public
   */
  reason?: string | undefined;

  /**
   * <p>The network bindings associated with the container.</p>
   * @public
   */
  networkBindings?: NetworkBinding[] | undefined;

  /**
   * <p>The network interfaces associated with the container.</p>
   * @public
   */
  networkInterfaces?: NetworkInterface[] | undefined;

  /**
   * <p>The health status of the container. If health checks aren't configured for this container in its task definition, then it reports the health status as <code>UNKNOWN</code>.</p>
   * @public
   */
  healthStatus?: HealthStatus | undefined;

  /**
   * <p>The details of any Amazon ECS managed agents associated with the container.</p>
   * @public
   */
  managedAgents?: ManagedAgent[] | undefined;

  /**
   * <p>The number of CPU units set for the container. The value is <code>0</code> if no value was specified in the container definition when the task definition was registered.</p>
   * @public
   */
  cpu?: string | undefined;

  /**
   * <p>The hard limit (in MiB) of memory set for the container.</p>
   * @public
   */
  memory?: string | undefined;

  /**
   * <p>The soft limit (in MiB) of memory set for the container.</p>
   * @public
   */
  memoryReservation?: string | undefined;

  /**
   * <p>The IDs of each GPU assigned to the container.</p>
   * @public
   */
  gpuIds?: string[] | undefined;

  /**
   * <p>The IDs of each Neuron device assigned to the container.</p>
   * @public
   */
  neuronDeviceIds?: string[] | undefined;
}

/**
 * <p>The amount of ephemeral storage to allocate for the task.</p>
 * @public
 */
export interface TaskEphemeralStorage {
  /**
   * <p>The total amount, in GiB, of the ephemeral storage to set for the task. The minimum supported value is <code>20</code> GiB and the maximum supported value is <code>200</code> GiB.</p>
   * @public
   */
  sizeInGiB?: number | undefined;

  /**
   * <p>Specify an Key Management Service key ID to encrypt the ephemeral storage for the task.</p>
   * @public
   */
  kmsKeyId?: string | undefined;
}

/**
 * <p>The overrides that are sent to a container. An empty container override can be passed in. An example of an empty container override is <code>\{"containerOverrides": [ ] \}</code>. If a non-empty container override is specified, the <code>name</code> parameter must be included.</p> <p>You can use Secrets Manager or Amazon Web Services Systems Manager Parameter Store to store the sensitive data. For more information, see <a href="https://docs.aws.amazon.com/AmazonECS/latest/developerguide/secrets-envvar.html">Retrieve secrets through environment variables</a> in the Amazon ECS Developer Guide.</p>
 * @public
 */
export interface ContainerOverride {
  /**
   * <p>The name of the container that receives the override. This parameter is required if any override is specified.</p>
   * @public
   */
  name?: string | undefined;

  /**
   * <p>The command to send to the container that overrides the default command from the Docker image or the task definition. You must also specify a container name.</p>
   * @public
   */
  command?: string[] | undefined;

  /**
   * <p>The environment variables to send to the container. You can add new environment variables, which are added to the container at launch, or you can override the existing environment variables from the Docker image or the task definition. You must also specify a container name.</p>
   * @public
   */
  environment?: KeyValuePair[] | undefined;

  /**
   * <p>A list of files containing the environment variables to pass to a container, instead of the value from the container definition.</p>
   * @public
   */
  environmentFiles?: EnvironmentFile[] | undefined;

  /**
   * <p>The number of <code>cpu</code> units reserved for the container, instead of the default value from the task definition. You must also specify a container name.</p>
   * @public
   */
  cpu?: number | undefined;

  /**
   * <p>The hard limit (in MiB) of memory to present to the container, instead of the default value from the task definition. If your container attempts to exceed the memory specified here, the container is killed. You must also specify a container name.</p>
   * @public
   */
  memory?: number | undefined;

  /**
   * <p>The soft limit (in MiB) of memory to reserve for the container, instead of the default value from the task definition. You must also specify a container name.</p>
   * @public
   */
  memoryReservation?: number | undefined;

  /**
   * <p>The type and amount of a resource to assign to a container, instead of the default value from the task definition. The supported resources are GPUs and Neuron devices.</p>
   * @public
   */
  resourceRequirements?: ResourceRequirement[] | undefined;
}

/**
 * <p>Details on an Elastic Inference accelerator task override. This parameter is used to override the Elastic Inference accelerator specified in the task definition. For more information, see <a href="https://docs.aws.amazon.com/AmazonECS/latest/developerguide/ecs-inference.html">Working with Amazon Elastic Inference on Amazon ECS</a> in the <i>Amazon Elastic Container Service Developer Guide</i>.</p>
 *
 * @deprecated (since 2023-04-15) This feature is no longer available.
 * @public
 */
export interface InferenceAcceleratorOverride {
  /**
   * <p>The Elastic Inference accelerator device name to override for the task. This parameter must match a <code>deviceName</code> specified in the task definition.</p>
   * @public
   */
  deviceName?: string | undefined;

  /**
   * <p>The Elastic Inference accelerator type to use.</p>
   * @public
   */
  deviceType?: string | undefined;
}

/**
 * <p>The overrides that are associated with a task.</p>
 * @public
 */
export interface TaskOverride {
  /**
   * <p>One or more container overrides that are sent to a task.</p>
   * @public
   */
  containerOverrides?: ContainerOverride[] | undefined;

  /**
   * <p>The CPU override for the task.</p>
   * @public
   */
  cpu?: string | undefined;

  /**
   * <p>The Elastic Inference accelerator override for the task.</p>
   *
   * @deprecated (since 2023-04-15) This feature is no longer available.
   * @public
   */
  inferenceAcceleratorOverrides?: InferenceAcceleratorOverride[] | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the task execution role override for the task. For more information, see <a href="https://docs.aws.amazon.com/AmazonECS/latest/developerguide/task_execution_IAM_role.html">Amazon ECS task execution IAM role</a> in the <i>Amazon Elastic Container Service Developer Guide</i>.</p>
   * @public
   */
  executionRoleArn?: string | undefined;

  /**
   * <p>The memory override for the task.</p>
   * @public
   */
  memory?: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the role that containers in this task can assume. All containers in this task are granted the permissions that are specified in this role. For more information, see <a href="https://docs.aws.amazon.com/AmazonECS/latest/developerguide/task-iam-roles.html">IAM Role for Tasks</a> in the <i>Amazon Elastic Container Service Developer Guide</i>.</p>
   * @public
   */
  taskRoleArn?: string | undefined;

  /**
   * <p>The ephemeral storage setting override for the task.</p> <note> <p>This parameter is only supported for tasks hosted on Fargate that use the following platform versions:</p> <ul> <li> <p>Linux platform version <code>1.4.0</code> or later.</p> </li> <li> <p>Windows platform version <code>1.0.0</code> or later.</p> </li> </ul> </note>
   * @public
   */
  ephemeralStorage?: EphemeralStorage | undefined;
}

/**
 * <p>Details on a task in a cluster.</p>
 * @public
 */
export interface Task {
  /**
   * <p>The Elastic Network Adapter that's associated with the task if the task uses the <code>awsvpc</code> network mode.</p>
   * @public
   */
  attachments?: Attachment[] | undefined;

  /**
   * <p>The attributes of the task</p>
   * @public
   */
  attributes?: Attribute[] | undefined;

  /**
   * <p>The Availability Zone for the task.</p>
   * @public
   */
  availabilityZone?: string | undefined;

  /**
   * <p>The capacity provider that's associated with the task.</p>
   * @public
   */
  capacityProviderName?: string | undefined;

  /**
   * <p>The ARN of the cluster that hosts the task.</p>
   * @public
   */
  clusterArn?: string | undefined;

  /**
   * <p>The connectivity status of a task.</p>
   * @public
   */
  connectivity?: Connectivity | undefined;

  /**
   * <p>The Unix timestamp for the time when the task last went into <code>CONNECTED</code> status.</p>
   * @public
   */
  connectivityAt?: Date | undefined;

  /**
   * <p>The ARN of the container instances that host the task.</p>
   * @public
   */
  containerInstanceArn?: string | undefined;

  /**
   * <p>The containers that's associated with the task.</p>
   * @public
   */
  containers?: Container[] | undefined;

  /**
   * <p>The number of CPU units used by the task as expressed in a task definition. It can be expressed as an integer using CPU units (for example, <code>1024</code>). It can also be expressed as a string using vCPUs (for example, <code>1 vCPU</code> or <code>1 vcpu</code>). String values are converted to an integer that indicates the CPU units when the task definition is registered.</p> <p>If you're using the EC2 launch type or the external launch type, this field is optional. Supported values are between <code>128</code> CPU units (<code>0.125</code> vCPUs) and <code>196608</code> CPU units (<code>192</code> vCPUs). If you do not specify a value, the parameter is ignored.</p> <p>This field is required for Fargate. For information about the valid values, see <a href="https://docs.aws.amazon.com/AmazonECS/latest/developerguide/task_definition_parameters.html#task_size">Task size</a> in the <i>Amazon Elastic Container Service Developer Guide</i>.</p>
   * @public
   */
  cpu?: string | undefined;

  /**
   * <p>The Unix timestamp for the time when the task was created. More specifically, it's for the time when the task entered the <code>PENDING</code> state.</p>
   * @public
   */
  createdAt?: Date | undefined;

  /**
   * <p>The desired status of the task. For more information, see <a href="https://docs.aws.amazon.com/AmazonECS/latest/developerguide/task-lifecycle.html">Task Lifecycle</a>.</p>
   * @public
   */
  desiredStatus?: string | undefined;

  /**
   * <p>Determines whether execute command functionality is turned on for this task. If <code>true</code>, execute command functionality is turned on all the containers in the task.</p>
   * @public
   */
  enableExecuteCommand?: boolean | undefined;

  /**
   * <p>The Unix timestamp for the time when the task execution stopped.</p>
   * @public
   */
  executionStoppedAt?: Date | undefined;

  /**
   * <p>The name of the task group that's associated with the task.</p>
   * @public
   */
  group?: string | undefined;

  /**
   * <p>The health status for the task. It's determined by the health of the essential containers in the task. If all essential containers in the task are reporting as <code>HEALTHY</code>, the task status also reports as <code>HEALTHY</code>. If any essential containers in the task are reporting as <code>UNHEALTHY</code> or <code>UNKNOWN</code>, the task status also reports as <code>UNHEALTHY</code> or <code>UNKNOWN</code>.</p> <note> <p>The Amazon ECS container agent doesn't monitor or report on Docker health checks that are embedded in a container image and not specified in the container definition. For example, this includes those specified in a parent image or from the image's Dockerfile. Health check parameters that are specified in a container definition override any Docker health checks that are found in the container image.</p> </note>
   * @public
   */
  healthStatus?: HealthStatus | undefined;

  /**
   * <p>The Elastic Inference accelerator that's associated with the task.</p>
   *
   * @deprecated (since 2023-04-15) This feature is no longer available.
   * @public
   */
  inferenceAccelerators?: InferenceAccelerator[] | undefined;

  /**
   * <p>The last known status for the task. For more information, see <a href="https://docs.aws.amazon.com/AmazonECS/latest/developerguide/task-lifecycle.html">Task Lifecycle</a>.</p>
   * @public
   */
  lastStatus?: string | undefined;

  /**
   * <p>The infrastructure where your task runs on. For more information, see <a href="https://docs.aws.amazon.com/AmazonECS/latest/developerguide/launch_types.html">Amazon ECS launch types</a> in the <i>Amazon Elastic Container Service Developer Guide</i>.</p>
   * @public
   */
  launchType?: LaunchType | undefined;

  /**
   * <p>The amount of memory (in MiB) that the task uses as expressed in a task definition. It can be expressed as an integer using MiB (for example, <code>1024</code>). If it's expressed as a string using GB (for example, <code>1GB</code> or <code>1 GB</code>), it's converted to an integer indicating the MiB when the task definition is registered.</p> <p>If you use the EC2 launch type, this field is optional.</p> <p>If you use the Fargate launch type, this field is required. You must use one of the following values. The value that you choose determines the range of supported values for the <code>cpu</code> parameter.</p> <ul> <li> <p>512 (0.5 GB), 1024 (1 GB), 2048 (2 GB) - Available <code>cpu</code> values: 256 (.25 vCPU)</p> </li> <li> <p>1024 (1 GB), 2048 (2 GB), 3072 (3 GB), 4096 (4 GB) - Available <code>cpu</code> values: 512 (.5 vCPU)</p> </li> <li> <p>2048 (2 GB), 3072 (3 GB), 4096 (4 GB), 5120 (5 GB), 6144 (6 GB), 7168 (7 GB), 8192 (8 GB) - Available <code>cpu</code> values: 1024 (1 vCPU)</p> </li> <li> <p>Between 4096 (4 GB) and 16384 (16 GB) in increments of 1024 (1 GB) - Available <code>cpu</code> values: 2048 (2 vCPU)</p> </li> <li> <p>Between 8192 (8 GB) and 30720 (30 GB) in increments of 1024 (1 GB) - Available <code>cpu</code> values: 4096 (4 vCPU)</p> </li> <li> <p>Between 16 GB and 60 GB in 4 GB increments - Available <code>cpu</code> values: 8192 (8 vCPU)</p> <p>This option requires Linux platform <code>1.4.0</code> or later.</p> </li> <li> <p>Between 32GB and 120 GB in 8 GB increments - Available <code>cpu</code> values: 16384 (16 vCPU)</p> <p>This option requires Linux platform <code>1.4.0</code> or later.</p> </li> </ul>
   * @public
   */
  memory?: string | undefined;

  /**
   * <p>One or more container overrides.</p>
   * @public
   */
  overrides?: TaskOverride | undefined;

  /**
   * <p>The platform version where your task runs on. A platform version is only specified for tasks that use the Fargate launch type. If you didn't specify one, the <code>LATEST</code> platform version is used. For more information, see <a href="https://docs.aws.amazon.com/AmazonECS/latest/developerguide/platform_versions.html">Fargate Platform Versions</a> in the <i>Amazon Elastic Container Service Developer Guide</i>.</p>
   * @public
   */
  platformVersion?: string | undefined;

  /**
   * <p>The operating system that your tasks are running on. A platform family is specified only for tasks that use the Fargate launch type. </p> <p> All tasks that run as part of this service must use the same <code>platformFamily</code> value as the service (for example, <code>LINUX.</code>).</p>
   * @public
   */
  platformFamily?: string | undefined;

  /**
   * <p>The Unix timestamp for the time when the container image pull began.</p>
   * @public
   */
  pullStartedAt?: Date | undefined;

  /**
   * <p>The Unix timestamp for the time when the container image pull completed.</p>
   * @public
   */
  pullStoppedAt?: Date | undefined;

  /**
   * <p>The Unix timestamp for the time when the task started. More specifically, it's for the time when the task transitioned from the <code>PENDING</code> state to the <code>RUNNING</code> state.</p>
   * @public
   */
  startedAt?: Date | undefined;

  /**
   * <p>The tag specified when a task is started. If an Amazon ECS service started the task, the <code>startedBy</code> parameter contains the deployment ID of that service.</p>
   * @public
   */
  startedBy?: string | undefined;

  /**
   * <p>The stop code indicating why a task was stopped. The <code>stoppedReason</code> might contain additional details. </p> <p>For more information about stop code, see <a href="https://docs.aws.amazon.com/AmazonECS/latest/developerguide/stopped-task-error-codes.html">Stopped tasks error codes</a> in the <i>Amazon ECS Developer Guide</i>.</p>
   * @public
   */
  stopCode?: TaskStopCode | undefined;

  /**
   * <p>The Unix timestamp for the time when the task was stopped. More specifically, it's for the time when the task transitioned from the <code>RUNNING</code> state to the <code>STOPPED</code> state.</p>
   * @public
   */
  stoppedAt?: Date | undefined;

  /**
   * <p>The reason that the task was stopped.</p>
   * @public
   */
  stoppedReason?: string | undefined;

  /**
   * <p>The Unix timestamp for the time when the task stops. More specifically, it's for the time when the task transitions from the <code>RUNNING</code> state to <code>STOPPING</code>.</p>
   * @public
   */
  stoppingAt?: Date | undefined;

  /**
   * <p>The metadata that you apply to the task to help you categorize and organize the task. Each tag consists of a key and an optional value. You define both the key and value.</p> <p>The following basic restrictions apply to tags:</p> <ul> <li> <p>Maximum number of tags per resource - 50</p> </li> <li> <p>For each resource, each tag key must be unique, and each tag key can have only one value.</p> </li> <li> <p>Maximum key length - 128 Unicode characters in UTF-8</p> </li> <li> <p>Maximum value length - 256 Unicode characters in UTF-8</p> </li> <li> <p>If your tagging schema is used across multiple services and resources, remember that other services may have restrictions on allowed characters. Generally allowed characters are: letters, numbers, and spaces representable in UTF-8, and the following characters: + - = . _ : / @.</p> </li> <li> <p>Tag keys and values are case-sensitive.</p> </li> <li> <p>Do not use <code>aws:</code>, <code>AWS:</code>, or any upper or lowercase combination of such as a prefix for either keys or values as it is reserved for Amazon Web Services use. You cannot edit or delete tag keys or values with this prefix. Tags with this prefix do not count against your tags per resource limit.</p> </li> </ul>
   * @public
   */
  tags?: Tag[] | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the task.</p>
   * @public
   */
  taskArn?: string | undefined;

  /**
   * <p>The ARN of the task definition that creates the task.</p>
   * @public
   */
  taskDefinitionArn?: string | undefined;

  /**
   * <p>The version counter for the task. Every time a task experiences a change that starts a CloudWatch event, the version counter is incremented. If you replicate your Amazon ECS task state with CloudWatch Events, you can compare the version of a task reported by the Amazon ECS API actions with the version reported in CloudWatch Events for the task (inside the <code>detail</code> object) to verify that the version in your event stream is current.</p>
   * @public
   */
  version?: number | undefined;

  /**
   * <p>The ephemeral storage settings for the task.</p>
   * @public
   */
  ephemeralStorage?: EphemeralStorage | undefined;

  /**
   * <p>The Fargate ephemeral storage settings for the task.</p>
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
   * <p>The list of tasks.</p>
   * @public
   */
  tasks?: Task[] | undefined;

  /**
   * <p>Any failures associated with the call.</p>
   * @public
   */
  failures?: Failure[] | undefined;
}

/**
 * @public
 */
export interface GetTaskProtectionRequest {
  /**
   * <p>The short name or full Amazon Resource Name (ARN) of the cluster that hosts the service that the task sets exist in.</p>
   * @public
   */
  cluster: string | undefined;

  /**
   * <p>A list of up to 100 task IDs or full ARN entries.</p>
   * @public
   */
  tasks?: string[] | undefined;
}

/**
 * <p>An object representing the protection status details for a task. You can set the protection status with the <a href="https://docs.aws.amazon.com/AmazonECS/latest/APIReference/API_UpdateTaskProtection.html">UpdateTaskProtection</a> API and get the status of tasks with the <a href="https://docs.aws.amazon.com/AmazonECS/latest/APIReference/API_GetTaskProtection.html">GetTaskProtection</a> API.</p>
 * @public
 */
export interface ProtectedTask {
  /**
   * <p>The task ARN.</p>
   * @public
   */
  taskArn?: string | undefined;

  /**
   * <p>The protection status of the task. If scale-in protection is on for a task, the value is <code>true</code>. Otherwise, it is <code>false</code>.</p>
   * @public
   */
  protectionEnabled?: boolean | undefined;

  /**
   * <p>The epoch time when protection for the task will expire.</p>
   * @public
   */
  expirationDate?: Date | undefined;
}

/**
 * @public
 */
export interface GetTaskProtectionResponse {
  /**
   * <p>A list of tasks with the following information.</p> <ul> <li> <p> <code>taskArn</code>: The task ARN.</p> </li> <li> <p> <code>protectionEnabled</code>: The protection status of the task. If scale-in protection is turned on for a task, the value is <code>true</code>. Otherwise, it is <code>false</code>.</p> </li> <li> <p> <code>expirationDate</code>: The epoch time when protection for the task will expire.</p> </li> </ul>
   * @public
   */
  protectedTasks?: ProtectedTask[] | undefined;

  /**
   * <p>Any failures associated with the call.</p>
   * @public
   */
  failures?: Failure[] | undefined;
}

/**
 * <p>The termination policy for the Amazon EBS volume when the task exits. For more information, see <a href="https://docs.aws.amazon.com/AmazonECS/latest/developerguide/ebs-volumes.html#ebs-volume-types">Amazon ECS volume termination policy</a>.</p>
 * @public
 */
export interface TaskManagedEBSVolumeTerminationPolicy {
  /**
   * <p>Indicates whether the volume should be deleted on when the task stops. If a value of <code>true</code> is specified, Amazon ECS deletes the Amazon EBS volume on your behalf when the task goes into the <code>STOPPED</code> state. If no value is specified, the default value is <code>true</code> is used. When set to <code>false</code>, Amazon ECS leaves the volume in your account.</p>
   * @public
   */
  deleteOnTermination: boolean | undefined;
}

/**
 * <p>The configuration for the Amazon EBS volume that Amazon ECS creates and manages on your behalf. These settings are used to create each Amazon EBS volume, with one volume created for each task.</p>
 * @public
 */
export interface TaskManagedEBSVolumeConfiguration {
  /**
   * <p>Indicates whether the volume should be encrypted. If you turn on Region-level Amazon EBS encryption by default but set this value as <code>false</code>, the setting is overridden and the volume is encrypted with the KMS key specified for Amazon EBS encryption by default. This parameter maps 1:1 with the <code>Encrypted</code> parameter of the <a href="https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_CreateVolume.html">CreateVolume API</a> in the <i>Amazon EC2 API Reference</i>.</p>
   * @public
   */
  encrypted?: boolean | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) identifier of the Amazon Web Services Key Management Service key to use for Amazon EBS encryption. When a key is specified using this parameter, it overrides Amazon EBS default encryption or any KMS key that you specified for cluster-level managed storage encryption. This parameter maps 1:1 with the <code>KmsKeyId</code> parameter of the <a href="https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_CreateVolume.html">CreateVolume API</a> in the <i>Amazon EC2 API Reference</i>. For more information about encrypting Amazon EBS volumes attached to a task, see <a href="https://docs.aws.amazon.com/AmazonECS/latest/developerguide/ebs-kms-encryption.html">Encrypt data stored in Amazon EBS volumes attached to Amazon ECS tasks</a>.</p> <important> <p>Amazon Web Services authenticates the Amazon Web Services Key Management Service key asynchronously. Therefore, if you specify an ID, alias, or ARN that is invalid, the action can appear to complete, but eventually fails.</p> </important>
   * @public
   */
  kmsKeyId?: string | undefined;

  /**
   * <p>The volume type. This parameter maps 1:1 with the <code>VolumeType</code> parameter of the <a href="https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_CreateVolume.html">CreateVolume API</a> in the <i>Amazon EC2 API Reference</i>. For more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/ebs-volume-types.html">Amazon EBS volume types</a> in the <i>Amazon EC2 User Guide</i>.</p> <p>The following are the supported volume types.</p> <ul> <li> <p>General Purpose SSD: <code>gp2</code>|<code>gp3</code> </p> </li> <li> <p>Provisioned IOPS SSD: <code>io1</code>|<code>io2</code> </p> </li> <li> <p>Throughput Optimized HDD: <code>st1</code> </p> </li> <li> <p>Cold HDD: <code>sc1</code> </p> </li> <li> <p>Magnetic: <code>standard</code> </p> <note> <p>The magnetic volume type is not supported on Fargate.</p> </note> </li> </ul>
   * @public
   */
  volumeType?: string | undefined;

  /**
   * <p>The size of the volume in GiB. You must specify either a volume size or a snapshot ID. If you specify a snapshot ID, the snapshot size is used for the volume size by default. You can optionally specify a volume size greater than or equal to the snapshot size. This parameter maps 1:1 with the <code>Size</code> parameter of the <a href="https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_CreateVolume.html">CreateVolume API</a> in the <i>Amazon EC2 API Reference</i>.</p> <p>The following are the supported volume size values for each volume type.</p> <ul> <li> <p> <code>gp2</code> and <code>gp3</code>: 1-16,384</p> </li> <li> <p> <code>io1</code> and <code>io2</code>: 4-16,384</p> </li> <li> <p> <code>st1</code> and <code>sc1</code>: 125-16,384</p> </li> <li> <p> <code>standard</code>: 1-1,024</p> </li> </ul>
   * @public
   */
  sizeInGiB?: number | undefined;

  /**
   * <p>The snapshot that Amazon ECS uses to create the volume. You must specify either a snapshot ID or a volume size. This parameter maps 1:1 with the <code>SnapshotId</code> parameter of the <a href="https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_CreateVolume.html">CreateVolume API</a> in the <i>Amazon EC2 API Reference</i>.</p>
   * @public
   */
  snapshotId?: string | undefined;

  /**
   * <p>The rate, in MiB/s, at which data is fetched from a snapshot of an existing Amazon EBS volume to create a new volume for attachment to the task. This property can be specified only if you specify a <code>snapshotId</code>. For more information, see <a href="https://docs.aws.amazon.com/ebs/latest/userguide/initalize-volume.html">Initialize Amazon EBS volumes</a> in the <i>Amazon EBS User Guide</i>.</p>
   * @public
   */
  volumeInitializationRate?: number | undefined;

  /**
   * <p>The number of I/O operations per second (IOPS). For <code>gp3</code>, <code>io1</code>, and <code>io2</code> volumes, this represents the number of IOPS that are provisioned for the volume. For <code>gp2</code> volumes, this represents the baseline performance of the volume and the rate at which the volume accumulates I/O credits for bursting.</p> <p>The following are the supported values for each volume type.</p> <ul> <li> <p> <code>gp3</code>: 3,000 - 16,000 IOPS</p> </li> <li> <p> <code>io1</code>: 100 - 64,000 IOPS</p> </li> <li> <p> <code>io2</code>: 100 - 256,000 IOPS</p> </li> </ul> <p>This parameter is required for <code>io1</code> and <code>io2</code> volume types. The default for <code>gp3</code> volumes is <code>3,000 IOPS</code>. This parameter is not supported for <code>st1</code>, <code>sc1</code>, or <code>standard</code> volume types.</p> <p>This parameter maps 1:1 with the <code>Iops</code> parameter of the <a href="https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_CreateVolume.html">CreateVolume API</a> in the <i>Amazon EC2 API Reference</i>.</p>
   * @public
   */
  iops?: number | undefined;

  /**
   * <p>The throughput to provision for a volume, in MiB/s, with a maximum of 1,000 MiB/s. This parameter maps 1:1 with the <code>Throughput</code> parameter of the <a href="https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_CreateVolume.html">CreateVolume API</a> in the <i>Amazon EC2 API Reference</i>.</p> <important> <p>This parameter is only supported for the <code>gp3</code> volume type.</p> </important>
   * @public
   */
  throughput?: number | undefined;

  /**
   * <p>The tags to apply to the volume. Amazon ECS applies service-managed tags by default. This parameter maps 1:1 with the <code>TagSpecifications.N</code> parameter of the <a href="https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_CreateVolume.html">CreateVolume API</a> in the <i>Amazon EC2 API Reference</i>.</p>
   * @public
   */
  tagSpecifications?: EBSTagSpecification[] | undefined;

  /**
   * <p>The ARN of the IAM role to associate with this volume. This is the Amazon ECS infrastructure IAM role that is used to manage your Amazon Web Services infrastructure. We recommend using the Amazon ECS-managed <code>AmazonECSInfrastructureRolePolicyForVolumes</code> IAM policy with this role. For more information, see <a href="https://docs.aws.amazon.com/AmazonECS/latest/developerguide/infrastructure_IAM_role.html">Amazon ECS infrastructure IAM role</a> in the <i>Amazon ECS Developer Guide</i>.</p>
   * @public
   */
  roleArn: string | undefined;

  /**
   * <p>The termination policy for the volume when the task exits. This provides a way to control whether Amazon ECS terminates the Amazon EBS volume when the task stops.</p>
   * @public
   */
  terminationPolicy?: TaskManagedEBSVolumeTerminationPolicy | undefined;

  /**
   * <p>The Linux filesystem type for the volume. For volumes created from a snapshot, you must specify the same filesystem type that the volume was using when the snapshot was created. If there is a filesystem type mismatch, the task will fail to start.</p> <p>The available filesystem types are <code>ext3</code>, <code>ext4</code>, and <code>xfs</code>. If no value is specified, the <code>xfs</code> filesystem type is used by default.</p>
   * @public
   */
  filesystemType?: TaskFilesystemType | undefined;
}

/**
 * <p>Configuration settings for the task volume that was <code>configuredAtLaunch</code> that weren't set during <code>RegisterTaskDef</code>.</p>
 * @public
 */
export interface TaskVolumeConfiguration {
  /**
   * <p>The name of the volume. This value must match the volume name from the <code>Volume</code> object in the task definition.</p>
   * @public
   */
  name: string | undefined;

  /**
   * <p>The configuration for the Amazon EBS volume that Amazon ECS creates and manages on your behalf. These settings are used to create each Amazon EBS volume, with one volume created for each task. The Amazon EBS volumes are visible in your account in the Amazon EC2 console once they are created.</p>
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
   * <p>The capacity provider strategy to use for the task.</p> <note> <p>If you want to use Amazon ECS Managed Instances, you must use the <code>capacityProviderStrategy</code> request parameter and omit the <code>launchType</code> request parameter.</p> </note> <p>If a <code>capacityProviderStrategy</code> is specified, the <code>launchType</code> parameter must be omitted. If no <code>capacityProviderStrategy</code> or <code>launchType</code> is specified, the <code>defaultCapacityProviderStrategy</code> for the cluster is used.</p> <p>When you use cluster auto scaling, you must specify <code>capacityProviderStrategy</code> and not <code>launchType</code>. </p> <p>A capacity provider strategy can contain a maximum of 20 capacity providers.</p>
   * @public
   */
  capacityProviderStrategy?: CapacityProviderStrategyItem[] | undefined;

  /**
   * <p>The short name or full Amazon Resource Name (ARN) of the cluster to run your task on. If you do not specify a cluster, the default cluster is assumed.</p> <p>Each account receives a default cluster the first time you use the service, but you may also create other clusters.</p>
   * @public
   */
  cluster?: string | undefined;

  /**
   * <p>The number of instantiations of the specified task to place on your cluster. You can specify up to 10 tasks for each call.</p>
   * @public
   */
  count?: number | undefined;

  /**
   * <p>Specifies whether to use Amazon ECS managed tags for the task. For more information, see <a href="https://docs.aws.amazon.com/AmazonECS/latest/developerguide/ecs-using-tags.html">Tagging Your Amazon ECS Resources</a> in the <i>Amazon Elastic Container Service Developer Guide</i>.</p>
   * @public
   */
  enableECSManagedTags?: boolean | undefined;

  /**
   * <p>Determines whether to use the execute command functionality for the containers in this task. If <code>true</code>, this enables execute command functionality on all containers in the task.</p> <p>If <code>true</code>, then the task definition must have a task role, or you must provide one as an override.</p>
   * @public
   */
  enableExecuteCommand?: boolean | undefined;

  /**
   * <p>The name of the task group to associate with the task. The default value is the family name of the task definition (for example, <code>family:my-family-name</code>).</p>
   * @public
   */
  group?: string | undefined;

  /**
   * <p>The infrastructure to run your standalone task on. For more information, see <a href="https://docs.aws.amazon.com/AmazonECS/latest/developerguide/launch_types.html">Amazon ECS launch types</a> in the <i>Amazon Elastic Container Service Developer Guide</i>.</p> <note> <p>If you want to use Amazon ECS Managed Instances, you must use the <code>capacityProviderStrategy</code> request parameter and omit the <code>launchType</code> request parameter.</p> </note> <p>The <code>FARGATE</code> launch type runs your tasks on Fargate On-Demand infrastructure.</p> <note> <p>Fargate Spot infrastructure is available for use but a capacity provider strategy must be used. For more information, see <a href="https://docs.aws.amazon.com/AmazonECS/latest/developerguide/fargate-capacity-providers.html">Fargate capacity providers</a> in the <i>Amazon ECS Developer Guide</i>.</p> </note> <p>The <code>EC2</code> launch type runs your tasks on Amazon EC2 instances registered to your cluster.</p> <p>The <code>EXTERNAL</code> launch type runs your tasks on your on-premises server or virtual machine (VM) capacity registered to your cluster.</p> <p>A task can use either a launch type or a capacity provider strategy. If a <code>launchType</code> is specified, the <code>capacityProviderStrategy</code> parameter must be omitted.</p> <p>When you use cluster auto scaling, you must specify <code>capacityProviderStrategy</code> and not <code>launchType</code>. </p>
   * @public
   */
  launchType?: LaunchType | undefined;

  /**
   * <p>The network configuration for the task. This parameter is required for task definitions that use the <code>awsvpc</code> network mode to receive their own elastic network interface, and it isn't supported for other network modes. For more information, see <a href="https://docs.aws.amazon.com/AmazonECS/latest/developerguide/task-networking.html">Task networking</a> in the <i>Amazon Elastic Container Service Developer Guide</i>.</p>
   * @public
   */
  networkConfiguration?: NetworkConfiguration | undefined;

  /**
   * <p>A list of container overrides in JSON format that specify the name of a container in the specified task definition and the overrides it should receive. You can override the default command for a container (that's specified in the task definition or Docker image) with a <code>command</code> override. You can also override existing environment variables (that are specified in the task definition or Docker image) on a container or add new environment variables to it with an <code>environment</code> override.</p> <p>A total of 8192 characters are allowed for overrides. This limit includes the JSON formatting characters of the override structure.</p>
   * @public
   */
  overrides?: TaskOverride | undefined;

  /**
   * <p>An array of placement constraint objects to use for the task. You can specify up to 10 constraints for each task (including constraints in the task definition and those specified at runtime).</p>
   * @public
   */
  placementConstraints?: PlacementConstraint[] | undefined;

  /**
   * <p>The placement strategy objects to use for the task. You can specify a maximum of 5 strategy rules for each task.</p>
   * @public
   */
  placementStrategy?: PlacementStrategy[] | undefined;

  /**
   * <p>The platform version the task uses. A platform version is only specified for tasks hosted on Fargate. If one isn't specified, the <code>LATEST</code> platform version is used. For more information, see <a href="https://docs.aws.amazon.com/AmazonECS/latest/developerguide/platform_versions.html">Fargate platform versions</a> in the <i>Amazon Elastic Container Service Developer Guide</i>.</p>
   * @public
   */
  platformVersion?: string | undefined;

  /**
   * <p>Specifies whether to propagate the tags from the task definition to the task. If no value is specified, the tags aren't propagated. Tags can only be propagated to the task during task creation. To add tags to a task after task creation, use the<a href="https://docs.aws.amazon.com/AmazonECS/latest/APIReference/API_TagResource.html">TagResource</a> API action.</p> <note> <p>An error will be received if you specify the <code>SERVICE</code> option when running a task.</p> </note>
   * @public
   */
  propagateTags?: PropagateTags | undefined;

  /**
   * <p>This parameter is only used by Amazon ECS. It is not intended for use by customers.</p>
   * @public
   */
  referenceId?: string | undefined;

  /**
   * <p>An optional tag specified when a task is started. For example, if you automatically trigger a task to run a batch process job, you could apply a unique identifier for that job to your task with the <code>startedBy</code> parameter. You can then identify which tasks belong to that job by filtering the results of a <a href="https://docs.aws.amazon.com/AmazonECS/latest/APIReference/API_ListTasks.html">ListTasks</a> call with the <code>startedBy</code> value. Up to 128 letters (uppercase and lowercase), numbers, hyphens (-), forward slash (/), and underscores (_) are allowed.</p> <p>If a task is started by an Amazon ECS service, then the <code>startedBy</code> parameter contains the deployment ID of the service that starts it.</p>
   * @public
   */
  startedBy?: string | undefined;

  /**
   * <p>The metadata that you apply to the task to help you categorize and organize them. Each tag consists of a key and an optional value, both of which you define.</p> <p>The following basic restrictions apply to tags:</p> <ul> <li> <p>Maximum number of tags per resource - 50</p> </li> <li> <p>For each resource, each tag key must be unique, and each tag key can have only one value.</p> </li> <li> <p>Maximum key length - 128 Unicode characters in UTF-8</p> </li> <li> <p>Maximum value length - 256 Unicode characters in UTF-8</p> </li> <li> <p>If your tagging schema is used across multiple services and resources, remember that other services may have restrictions on allowed characters. Generally allowed characters are: letters, numbers, and spaces representable in UTF-8, and the following characters: + - = . _ : / @.</p> </li> <li> <p>Tag keys and values are case-sensitive.</p> </li> <li> <p>Do not use <code>aws:</code>, <code>AWS:</code>, or any upper or lowercase combination of such as a prefix for either keys or values as it is reserved for Amazon Web Services use. You cannot edit or delete tag keys or values with this prefix. Tags with this prefix do not count against your tags per resource limit.</p> </li> </ul>
   * @public
   */
  tags?: Tag[] | undefined;

  /**
   * <p>The <code>family</code> and <code>revision</code> (<code>family:revision</code>) or full ARN of the task definition to run. If a <code>revision</code> isn't specified, the latest <code>ACTIVE</code> revision is used.</p> <p>The full ARN value must match the value that you specified as the <code>Resource</code> of the principal's permissions policy.</p> <p>When you specify a task definition, you must either specify a specific revision, or all revisions in the ARN.</p> <p>To specify a specific revision, include the revision number in the ARN. For example, to specify revision 2, use <code>arn:aws:ecs:us-east-1:111122223333:task-definition/TaskFamilyName:2</code>.</p> <p>To specify all revisions, use the wildcard (*) in the ARN. For example, to specify all revisions, use <code>arn:aws:ecs:us-east-1:111122223333:task-definition/TaskFamilyName:*</code>.</p> <p>For more information, see <a href="https://docs.aws.amazon.com/AmazonECS/latest/developerguide/security_iam_service-with-iam.html#security_iam_service-with-iam-id-based-policies-resources">Policy Resources for Amazon ECS</a> in the Amazon Elastic Container Service Developer Guide.</p>
   * @public
   */
  taskDefinition: string | undefined;

  /**
   * <p>An identifier that you provide to ensure the idempotency of the request. It must be unique and is case sensitive. Up to 64 characters are allowed. The valid characters are characters in the range of 33-126, inclusive. For more information, see <a href="https://docs.aws.amazon.com/AmazonECS/latest/APIReference/ECS_Idempotency.html">Ensuring idempotency</a>.</p>
   * @public
   */
  clientToken?: string | undefined;

  /**
   * <p>The details of the volume that was <code>configuredAtLaunch</code>. You can configure the size, volumeType, IOPS, throughput, snapshot and encryption in <a href="https://docs.aws.amazon.com/AmazonECS/latest/APIReference/API_TaskManagedEBSVolumeConfiguration.html">TaskManagedEBSVolumeConfiguration</a>. The <code>name</code> of the volume must match the <code>name</code> from the task definition.</p>
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
   * <p>A full description of the tasks that were run. The tasks that were successfully placed on your cluster are described here.</p>
   * @public
   */
  tasks?: Task[] | undefined;

  /**
   * <p>Any failures associated with the call.</p> <p>For information about how to address failures, see <a href="https://docs.aws.amazon.com/AmazonECS/latest/developerguide/service-event-messages.html#service-event-messages-list">Service event messages</a> and <a href="https://docs.aws.amazon.com/AmazonECS/latest/developerguide/api_failures_messages.html">API failure reasons</a> in the <i>Amazon Elastic Container Service Developer Guide</i>.</p>
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
   * <p>The short name or full Amazon Resource Name (ARN) of the cluster where to start your task. If you do not specify a cluster, the default cluster is assumed.</p>
   * @public
   */
  cluster?: string | undefined;

  /**
   * <p>The container instance IDs or full ARN entries for the container instances where you would like to place your task. You can specify up to 10 container instances.</p>
   * @public
   */
  containerInstances: string[] | undefined;

  /**
   * <p>Specifies whether to use Amazon ECS managed tags for the task. For more information, see <a href="https://docs.aws.amazon.com/AmazonECS/latest/developerguide/ecs-using-tags.html">Tagging Your Amazon ECS Resources</a> in the <i>Amazon Elastic Container Service Developer Guide</i>.</p>
   * @public
   */
  enableECSManagedTags?: boolean | undefined;

  /**
   * <p>Whether or not the execute command functionality is turned on for the task. If <code>true</code>, this turns on the execute command functionality on all containers in the task.</p>
   * @public
   */
  enableExecuteCommand?: boolean | undefined;

  /**
   * <p>The name of the task group to associate with the task. The default value is the family name of the task definition (for example, family:my-family-name).</p>
   * @public
   */
  group?: string | undefined;

  /**
   * <p>The VPC subnet and security group configuration for tasks that receive their own elastic network interface by using the <code>awsvpc</code> networking mode.</p>
   * @public
   */
  networkConfiguration?: NetworkConfiguration | undefined;

  /**
   * <p>A list of container overrides in JSON format that specify the name of a container in the specified task definition and the overrides it receives. You can override the default command for a container (that's specified in the task definition or Docker image) with a <code>command</code> override. You can also override existing environment variables (that are specified in the task definition or Docker image) on a container or add new environment variables to it with an <code>environment</code> override.</p> <note> <p>A total of 8192 characters are allowed for overrides. This limit includes the JSON formatting characters of the override structure.</p> </note>
   * @public
   */
  overrides?: TaskOverride | undefined;

  /**
   * <p>Specifies whether to propagate the tags from the task definition or the service to the task. If no value is specified, the tags aren't propagated.</p>
   * @public
   */
  propagateTags?: PropagateTags | undefined;

  /**
   * <p>This parameter is only used by Amazon ECS. It is not intended for use by customers.</p>
   * @public
   */
  referenceId?: string | undefined;

  /**
   * <p>An optional tag specified when a task is started. For example, if you automatically trigger a task to run a batch process job, you could apply a unique identifier for that job to your task with the <code>startedBy</code> parameter. You can then identify which tasks belong to that job by filtering the results of a <a href="https://docs.aws.amazon.com/AmazonECS/latest/APIReference/API_ListTasks.html">ListTasks</a> call with the <code>startedBy</code> value. Up to 36 letters (uppercase and lowercase), numbers, hyphens (-), forward slash (/), and underscores (_) are allowed.</p> <p>If a task is started by an Amazon ECS service, the <code>startedBy</code> parameter contains the deployment ID of the service that starts it.</p>
   * @public
   */
  startedBy?: string | undefined;

  /**
   * <p>The metadata that you apply to the task to help you categorize and organize them. Each tag consists of a key and an optional value, both of which you define.</p> <p>The following basic restrictions apply to tags:</p> <ul> <li> <p>Maximum number of tags per resource - 50</p> </li> <li> <p>For each resource, each tag key must be unique, and each tag key can have only one value.</p> </li> <li> <p>Maximum key length - 128 Unicode characters in UTF-8</p> </li> <li> <p>Maximum value length - 256 Unicode characters in UTF-8</p> </li> <li> <p>If your tagging schema is used across multiple services and resources, remember that other services may have restrictions on allowed characters. Generally allowed characters are: letters, numbers, and spaces representable in UTF-8, and the following characters: + - = . _ : / @.</p> </li> <li> <p>Tag keys and values are case-sensitive.</p> </li> <li> <p>Do not use <code>aws:</code>, <code>AWS:</code>, or any upper or lowercase combination of such as a prefix for either keys or values as it is reserved for Amazon Web Services use. You cannot edit or delete tag keys or values with this prefix. Tags with this prefix do not count against your tags per resource limit.</p> </li> </ul>
   * @public
   */
  tags?: Tag[] | undefined;

  /**
   * <p>The <code>family</code> and <code>revision</code> (<code>family:revision</code>) or full ARN of the task definition to start. If a <code>revision</code> isn't specified, the latest <code>ACTIVE</code> revision is used.</p>
   * @public
   */
  taskDefinition: string | undefined;

  /**
   * <p>The details of the volume that was <code>configuredAtLaunch</code>. You can configure the size, volumeType, IOPS, throughput, snapshot and encryption in <a href="https://docs.aws.amazon.com/AmazonECS/latest/APIReference/API_TaskManagedEBSVolumeConfiguration.html">TaskManagedEBSVolumeConfiguration</a>. The <code>name</code> of the volume must match the <code>name</code> from the task definition.</p>
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
   * <p>A full description of the tasks that were started. Each task that was successfully placed on your container instances is described.</p>
   * @public
   */
  tasks?: Task[] | undefined;

  /**
   * <p>Any failures associated with the call.</p>
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
   * <p>The short name or full Amazon Resource Name (ARN) of the cluster that hosts the task to stop. If you do not specify a cluster, the default cluster is assumed.</p>
   * @public
   */
  cluster?: string | undefined;

  /**
   * <p>Thefull Amazon Resource Name (ARN) of the task.</p>
   * @public
   */
  task: string | undefined;

  /**
   * <p>An optional message specified when a task is stopped. For example, if you're using a custom scheduler, you can use this parameter to specify the reason for stopping the task here, and the message appears in subsequent <a href="https://docs.aws.amazon.com/AmazonECS/latest/APIReference/API_DescribeTasks.html">DescribeTasks</a>&gt; API operations on this task.</p>
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
   * <p>The task that was stopped.</p>
   * @public
   */
  task?: Task | undefined;
}

/**
 * @public
 */
export interface UpdateTaskProtectionRequest {
  /**
   * <p>The short name or full Amazon Resource Name (ARN) of the cluster that hosts the service that the task sets exist in.</p>
   * @public
   */
  cluster: string | undefined;

  /**
   * <p>A list of up to 10 task IDs or full ARN entries.</p>
   * @public
   */
  tasks: string[] | undefined;

  /**
   * <p>Specify <code>true</code> to mark a task for protection and <code>false</code> to unset protection, making it eligible for termination.</p>
   * @public
   */
  protectionEnabled: boolean | undefined;

  /**
   * <p>If you set <code>protectionEnabled</code> to <code>true</code>, you can specify the duration for task protection in minutes. You can specify a value from 1 minute to up to 2,880 minutes (48 hours). During this time, your task will not be terminated by scale-in events from Service Auto Scaling or deployments. After this time period lapses, <code>protectionEnabled</code> will be reset to <code>false</code>.</p> <p>If you don’t specify the time, then the task is automatically protected for 120 minutes (2 hours).</p>
   * @public
   */
  expiresInMinutes?: number | undefined;
}

/**
 * @public
 */
export interface UpdateTaskProtectionResponse {
  /**
   * <p>A list of tasks with the following information.</p> <ul> <li> <p> <code>taskArn</code>: The task ARN.</p> </li> <li> <p> <code>protectionEnabled</code>: The protection status of the task. If scale-in protection is turned on for a task, the value is <code>true</code>. Otherwise, it is <code>false</code>.</p> </li> <li> <p> <code>expirationDate</code>: The epoch time when protection for the task will expire.</p> </li> </ul>
   * @public
   */
  protectedTasks?: ProtectedTask[] | undefined;

  /**
   * <p>Any failures associated with the call.</p>
   * @public
   */
  failures?: Failure[] | undefined;
}

/**
 * @public
 */
export interface CreateTaskSetRequest {
  /**
   * <p>The short name or full Amazon Resource Name (ARN) of the service to create the task set in.</p>
   * @public
   */
  service: string | undefined;

  /**
   * <p>The short name or full Amazon Resource Name (ARN) of the cluster that hosts the service to create the task set in.</p>
   * @public
   */
  cluster: string | undefined;

  /**
   * <p>An optional non-unique tag that identifies this task set in external systems. If the task set is associated with a service discovery registry, the tasks in this task set will have the <code>ECS_TASK_SET_EXTERNAL_ID</code> Cloud Map attribute set to the provided value.</p>
   * @public
   */
  externalId?: string | undefined;

  /**
   * <p>The task definition for the tasks in the task set to use. If a revision isn't specified, the latest <code>ACTIVE</code> revision is used.</p>
   * @public
   */
  taskDefinition: string | undefined;

  /**
   * <p>An object representing the network configuration for a task set.</p>
   * @public
   */
  networkConfiguration?: NetworkConfiguration | undefined;

  /**
   * <p>A load balancer object representing the load balancer to use with the task set. The supported load balancer types are either an Application Load Balancer or a Network Load Balancer.</p>
   * @public
   */
  loadBalancers?: LoadBalancer[] | undefined;

  /**
   * <p>The details of the service discovery registries to assign to this task set. For more information, see <a href="https://docs.aws.amazon.com/AmazonECS/latest/developerguide/service-discovery.html">Service discovery</a>.</p>
   * @public
   */
  serviceRegistries?: ServiceRegistry[] | undefined;

  /**
   * <p>The launch type that new tasks in the task set uses. For more information, see <a href="https://docs.aws.amazon.com/AmazonECS/latest/developerguide/launch_types.html">Amazon ECS launch types</a> in the <i>Amazon Elastic Container Service Developer Guide</i>.</p> <p>If a <code>launchType</code> is specified, the <code>capacityProviderStrategy</code> parameter must be omitted.</p>
   * @public
   */
  launchType?: LaunchType | undefined;

  /**
   * <p>The capacity provider strategy to use for the task set.</p> <p>A capacity provider strategy consists of one or more capacity providers along with the <code>base</code> and <code>weight</code> to assign to them. A capacity provider must be associated with the cluster to be used in a capacity provider strategy. The <a href="https://docs.aws.amazon.com/AmazonECS/latest/APIReference/API_PutClusterCapacityProviders.html">PutClusterCapacityProviders</a> API is used to associate a capacity provider with a cluster. Only capacity providers with an <code>ACTIVE</code> or <code>UPDATING</code> status can be used.</p> <p>If a <code>capacityProviderStrategy</code> is specified, the <code>launchType</code> parameter must be omitted. If no <code>capacityProviderStrategy</code> or <code>launchType</code> is specified, the <code>defaultCapacityProviderStrategy</code> for the cluster is used.</p> <p>If specifying a capacity provider that uses an Auto Scaling group, the capacity provider must already be created. New capacity providers can be created with the <a href="https://docs.aws.amazon.com/AmazonECS/latest/APIReference/API_CreateCapacityProviderProvider.html">CreateCapacityProviderProvider</a>API operation.</p> <p>To use a Fargate capacity provider, specify either the <code>FARGATE</code> or <code>FARGATE_SPOT</code> capacity providers. The Fargate capacity providers are available to all accounts and only need to be associated with a cluster to be used.</p> <p>The <a href="https://docs.aws.amazon.com/AmazonECS/latest/APIReference/API_PutClusterCapacityProviders.html">PutClusterCapacityProviders</a> API operation is used to update the list of available capacity providers for a cluster after the cluster is created.</p>
   * @public
   */
  capacityProviderStrategy?: CapacityProviderStrategyItem[] | undefined;

  /**
   * <p>The platform version that the tasks in the task set uses. A platform version is specified only for tasks using the Fargate launch type. If one isn't specified, the <code>LATEST</code> platform version is used.</p>
   * @public
   */
  platformVersion?: string | undefined;

  /**
   * <p>A floating-point percentage of the desired number of tasks to place and keep running in the task set.</p>
   * @public
   */
  scale?: Scale | undefined;

  /**
   * <p>An identifier that you provide to ensure the idempotency of the request. It must be unique and is case sensitive. Up to 36 ASCII characters in the range of 33-126 (inclusive) are allowed.</p>
   * @public
   */
  clientToken?: string | undefined;

  /**
   * <p>The metadata that you apply to the task set to help you categorize and organize them. Each tag consists of a key and an optional value. You define both. When a service is deleted, the tags are deleted.</p> <p>The following basic restrictions apply to tags:</p> <ul> <li> <p>Maximum number of tags per resource - 50</p> </li> <li> <p>For each resource, each tag key must be unique, and each tag key can have only one value.</p> </li> <li> <p>Maximum key length - 128 Unicode characters in UTF-8</p> </li> <li> <p>Maximum value length - 256 Unicode characters in UTF-8</p> </li> <li> <p>If your tagging schema is used across multiple services and resources, remember that other services may have restrictions on allowed characters. Generally allowed characters are: letters, numbers, and spaces representable in UTF-8, and the following characters: + - = . _ : / @.</p> </li> <li> <p>Tag keys and values are case-sensitive.</p> </li> <li> <p>Do not use <code>aws:</code>, <code>AWS:</code>, or any upper or lowercase combination of such as a prefix for either keys or values as it is reserved for Amazon Web Services use. You cannot edit or delete tag keys or values with this prefix. Tags with this prefix do not count against your tags per resource limit.</p> </li> </ul>
   * @public
   */
  tags?: Tag[] | undefined;
}

/**
 * @public
 */
export interface CreateTaskSetResponse {
  /**
   * <p>Information about a set of Amazon ECS tasks in either an CodeDeploy or an <code>EXTERNAL</code> deployment. A task set includes details such as the desired number of tasks, how many tasks are running, and whether the task set serves production traffic.</p>
   * @public
   */
  taskSet?: TaskSet | undefined;
}

/**
 * @public
 */
export interface DeleteTaskSetRequest {
  /**
   * <p>The short name or full Amazon Resource Name (ARN) of the cluster that hosts the service that the task set found in to delete.</p>
   * @public
   */
  cluster: string | undefined;

  /**
   * <p>The short name or full Amazon Resource Name (ARN) of the service that hosts the task set to delete.</p>
   * @public
   */
  service: string | undefined;

  /**
   * <p>The task set ID or full Amazon Resource Name (ARN) of the task set to delete.</p>
   * @public
   */
  taskSet: string | undefined;

  /**
   * <p>If <code>true</code>, you can delete a task set even if it hasn't been scaled down to zero.</p>
   * @public
   */
  force?: boolean | undefined;
}

/**
 * @public
 */
export interface DeleteTaskSetResponse {
  /**
   * <p>Details about the task set.</p>
   * @public
   */
  taskSet?: TaskSet | undefined;
}

/**
 * @public
 */
export interface DescribeTaskSetsRequest {
  /**
   * <p>The short name or full Amazon Resource Name (ARN) of the cluster that hosts the service that the task sets exist in.</p>
   * @public
   */
  cluster: string | undefined;

  /**
   * <p>The short name or full Amazon Resource Name (ARN) of the service that the task sets exist in.</p>
   * @public
   */
  service: string | undefined;

  /**
   * <p>The ID or full Amazon Resource Name (ARN) of task sets to describe.</p>
   * @public
   */
  taskSets?: string[] | undefined;

  /**
   * <p>Specifies whether to see the resource tags for the task set. If <code>TAGS</code> is specified, the tags are included in the response. If this field is omitted, tags aren't included in the response.</p>
   * @public
   */
  include?: TaskSetField[] | undefined;
}

/**
 * @public
 */
export interface DescribeTaskSetsResponse {
  /**
   * <p>The list of task sets described.</p>
   * @public
   */
  taskSets?: TaskSet[] | undefined;

  /**
   * <p>Any failures associated with the call.</p>
   * @public
   */
  failures?: Failure[] | undefined;
}

/**
 * @public
 */
export interface UpdateTaskSetRequest {
  /**
   * <p>The short name or full Amazon Resource Name (ARN) of the cluster that hosts the service that the task set is found in.</p>
   * @public
   */
  cluster: string | undefined;

  /**
   * <p>The short name or full Amazon Resource Name (ARN) of the service that the task set is found in.</p>
   * @public
   */
  service: string | undefined;

  /**
   * <p>The short name or full Amazon Resource Name (ARN) of the task set to update.</p>
   * @public
   */
  taskSet: string | undefined;

  /**
   * <p>A floating-point percentage of the desired number of tasks to place and keep running in the task set.</p>
   * @public
   */
  scale: Scale | undefined;
}

/**
 * @public
 */
export interface UpdateTaskSetResponse {
  /**
   * <p>Details about the task set.</p>
   * @public
   */
  taskSet?: TaskSet | undefined;
}

/**
 * @public
 */
export interface UntagResourceRequest {
  /**
   * <p>The Amazon Resource Name (ARN) of the resource to delete tags from. Currently, the supported resources are Amazon ECS capacity providers, tasks, services, task definitions, clusters, and container instances.</p>
   * @public
   */
  resourceArn: string | undefined;

  /**
   * <p>The keys of the tags to be removed.</p>
   * @public
   */
  tagKeys: string[] | undefined;
}

/**
 * @public
 */
export interface UntagResourceResponse {}
