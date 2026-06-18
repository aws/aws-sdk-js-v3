// smithy-typescript generated code
import type {
  Compatibility,
  Connectivity,
  HealthStatus,
  IpcMode,
  LaunchType,
  ManagedAgentName,
  NetworkMode,
  PidMode,
  PropagateTags,
  SortOrder,
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
  ContainerImage,
  DeploymentEphemeralStorage,
  EBSTagSpecification,
  ECSManagedResources,
  EnvironmentFile,
  EphemeralStorage,
  Failure,
  InferenceAccelerator,
  KeyValuePair,
  LoadBalancer,
  MonitoringConfiguration,
  NetworkBinding,
  NetworkConfiguration,
  PlacementConstraint,
  PlacementStrategy,
  ProxyConfiguration,
  ResourceRequirement,
  RuntimePlatform,
  Scale,
  ServiceConnectConfiguration,
  ServiceRegistry,
  ServiceRevisionLoadBalancer,
  ServiceVolumeConfiguration,
  Tag,
  TaskDefinition,
  TaskDefinitionPlacementConstraint,
  TaskSet,
  Volume,
  VpcLatticeConfiguration,
} from "./models_0";

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
