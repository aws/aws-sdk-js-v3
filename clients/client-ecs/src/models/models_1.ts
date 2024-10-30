// smithy-typescript generated code
import { ExceptionOptionType as __ExceptionOptionType } from "@smithy/smithy-client";

import { ECSServiceException as __BaseException } from "./ECSServiceException";

import {
  CapacityProviderStrategyItem,
  Cluster,
  ClusterConfiguration,
  ClusterServiceConnectDefaultsRequest,
  ClusterSetting,
  ContainerInstance,
  ContainerInstanceStatus,
  DeploymentConfiguration,
  Failure,
  LoadBalancer,
  NetworkConfiguration,
  PlacementConstraint,
  PlacementStrategy,
  PropagateTags,
  ProtectedTask,
  Scale,
  Service,
  ServiceConnectConfiguration,
  ServiceRegistry,
  ServiceVolumeConfiguration,
  TaskSet,
} from "./models_0";

/**
 * @public
 */
export interface UpdateClusterRequest {
  /**
   * <p>The name of the cluster to modify the settings for.</p>
   * @public
   */
  cluster: string | undefined;

  /**
   * <p>The cluster settings for your cluster.</p>
   * @public
   */
  settings?: ClusterSetting[];

  /**
   * <p>The execute command configuration for the cluster.</p>
   * @public
   */
  configuration?: ClusterConfiguration;

  /**
   * <p>Use this parameter to set a default Service Connect namespace. After you set a default
   * 	Service Connect namespace, any new services with Service Connect turned on that are created in the cluster are added as
   * 	client services in the namespace. This setting only applies to new services that set the <code>enabled</code> parameter to
   * 	<code>true</code> in the <code>ServiceConnectConfiguration</code>.
   * 	You can set the namespace of each service individually in the <code>ServiceConnectConfiguration</code> to override this default
   * 	parameter.</p>
   *          <p>Tasks that run in a namespace can use short names to connect
   * 	to services in the namespace. Tasks can connect to services across all of the clusters in the namespace.
   * 	Tasks connect through a managed proxy container
   * 	that collects logs and metrics for increased visibility.
   * 	Only the tasks that Amazon ECS services create are supported with Service Connect.
   * 	For more information, see <a href="https://docs.aws.amazon.com/AmazonECS/latest/developerguide/service-connect.html">Service Connect</a> in the <i>Amazon Elastic Container Service Developer Guide</i>.</p>
   * @public
   */
  serviceConnectDefaults?: ClusterServiceConnectDefaultsRequest;
}

/**
 * @public
 */
export interface UpdateClusterResponse {
  /**
   * <p>Details about the cluster.</p>
   * @public
   */
  cluster?: Cluster;
}

/**
 * @public
 */
export interface UpdateClusterSettingsRequest {
  /**
   * <p>The name of the cluster to modify the settings for.</p>
   * @public
   */
  cluster: string | undefined;

  /**
   * <p>The setting to use by default for a cluster. This parameter is used to turn on CloudWatch
   * 			Container Insights for a cluster. If this value is specified, it overrides the
   * 			<code>containerInsights</code> value set with <a href="https://docs.aws.amazon.com/AmazonECS/latest/APIReference/API_PutAccountSetting.html">PutAccountSetting</a> or
   * 			<a href="https://docs.aws.amazon.com/AmazonECS/latest/APIReference/API_PutAccountSettingDefault.html">PutAccountSettingDefault</a>.</p>
   *          <important>
   *             <p>Currently, if you delete an existing cluster that does not have Container Insights
   * 				turned on, and then create a new cluster with the same name with Container Insights
   * 				tuned on, Container Insights will not actually be turned on. If you want to preserve
   * 				the same name for your existing cluster and turn on Container Insights, you must
   * 				wait 7 days before you can re-create it.</p>
   *          </important>
   * @public
   */
  settings: ClusterSetting[] | undefined;
}

/**
 * @public
 */
export interface UpdateClusterSettingsResponse {
  /**
   * <p>Details about the cluster</p>
   * @public
   */
  cluster?: Cluster;
}

/**
 * <p>Amazon ECS can't determine the current version of the Amazon ECS container agent on the
 * 			container instance and doesn't have enough information to proceed with an update. This
 * 			could be because the agent running on the container instance is a previous or custom
 * 			version that doesn't use our version information.</p>
 * @public
 */
export class MissingVersionException extends __BaseException {
  readonly name: "MissingVersionException" = "MissingVersionException";
  readonly $fault: "client" = "client";
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<MissingVersionException, __BaseException>) {
    super({
      name: "MissingVersionException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, MissingVersionException.prototype);
  }
}

/**
 * <p>There's no update available for this Amazon ECS container agent. This might be because the
 * 			agent is already running the latest version or because it's so old that there's no
 * 			update path to the current version.</p>
 * @public
 */
export class NoUpdateAvailableException extends __BaseException {
  readonly name: "NoUpdateAvailableException" = "NoUpdateAvailableException";
  readonly $fault: "client" = "client";
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<NoUpdateAvailableException, __BaseException>) {
    super({
      name: "NoUpdateAvailableException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, NoUpdateAvailableException.prototype);
  }
}

/**
 * @public
 */
export interface UpdateContainerAgentRequest {
  /**
   * <p>The short name or full Amazon Resource Name (ARN) of the cluster that your container instance is
   * 			running on. If you do not specify a cluster, the default cluster is assumed.</p>
   * @public
   */
  cluster?: string;

  /**
   * <p>The container instance ID or full ARN entries for the container instance where you
   * 			would like to update the Amazon ECS container agent.</p>
   * @public
   */
  containerInstance: string | undefined;
}

/**
 * @public
 */
export interface UpdateContainerAgentResponse {
  /**
   * <p>The container instance that the container agent was updated for.</p>
   * @public
   */
  containerInstance?: ContainerInstance;
}

/**
 * @public
 */
export interface UpdateContainerInstancesStateRequest {
  /**
   * <p>The short name or full Amazon Resource Name (ARN) of the cluster that hosts the container instance to
   * 			update. If you do not specify a cluster, the default cluster is assumed.</p>
   * @public
   */
  cluster?: string;

  /**
   * <p>A list of up to 10 container instance IDs or full ARN entries.</p>
   * @public
   */
  containerInstances: string[] | undefined;

  /**
   * <p>The container instance state to update the container instance with. The only valid
   * 			values for this action are <code>ACTIVE</code> and <code>DRAINING</code>. A container
   * 			instance can only be updated to <code>DRAINING</code> status once it has reached an
   * 				<code>ACTIVE</code> state. If a container instance is in <code>REGISTERING</code>,
   * 				<code>DEREGISTERING</code>, or <code>REGISTRATION_FAILED</code> state you can
   * 			describe the container instance but can't update the container instance state.</p>
   * @public
   */
  status: ContainerInstanceStatus | undefined;
}

/**
 * @public
 */
export interface UpdateContainerInstancesStateResponse {
  /**
   * <p>The list of container instances.</p>
   * @public
   */
  containerInstances?: ContainerInstance[];

  /**
   * <p>Any failures associated with the call.</p>
   * @public
   */
  failures?: Failure[];
}

/**
 * @public
 */
export interface UpdateServiceRequest {
  /**
   * <p>The short name or full Amazon Resource Name (ARN) of the cluster that your service runs on.
   * 			If you do not specify a cluster, the default cluster is assumed.</p>
   * @public
   */
  cluster?: string;

  /**
   * <p>The name of the service to update.</p>
   * @public
   */
  service: string | undefined;

  /**
   * <p>The number of instantiations of the task to place and keep running in your
   * 			service.</p>
   * @public
   */
  desiredCount?: number;

  /**
   * <p>The <code>family</code> and <code>revision</code> (<code>family:revision</code>) or
   * 			full ARN of the task definition to run in your service. If a <code>revision</code> is
   * 			not specified, the latest <code>ACTIVE</code> revision is used. If you modify the task
   * 			definition with <code>UpdateService</code>, Amazon ECS spawns a task with the new version of
   * 			the task definition and then stops an old task after the new version is running.</p>
   * @public
   */
  taskDefinition?: string;

  /**
   * <p>The capacity provider strategy to update the service to use.</p>
   *          <p>if the service uses the default capacity provider strategy for the cluster, the
   * 			service can be updated to use one or more capacity providers as opposed to the default
   * 			capacity provider strategy. However, when a service is using a capacity provider
   * 			strategy that's not the default capacity provider strategy, the service can't be updated
   * 			to use the cluster's default capacity provider strategy.</p>
   *          <p>A capacity provider strategy consists of one or more capacity providers along with the
   * 				<code>base</code> and <code>weight</code> to assign to them. A capacity provider
   * 			must be associated with the cluster to be used in a capacity provider strategy. The
   * 			<a href="https://docs.aws.amazon.com/AmazonECS/latest/APIReference/API_PutClusterCapacityProviders.html">PutClusterCapacityProviders</a> API is used to associate a capacity
   * 			provider with a cluster. Only capacity providers with an <code>ACTIVE</code> or
   * 				<code>UPDATING</code> status can be used.</p>
   *          <p>If specifying a capacity provider that uses an Auto Scaling group, the capacity
   * 			provider must already be created. New capacity providers can be created with the <a href="https://docs.aws.amazon.com/AmazonECS/latest/APIReference/API_CreateClusterCapacityProvider.html">CreateClusterCapacityProvider</a> API operation.</p>
   *          <p>To use a Fargate capacity provider, specify either the <code>FARGATE</code> or
   * 				<code>FARGATE_SPOT</code> capacity providers. The Fargate capacity providers are
   * 			available to all accounts and only need to be associated with a cluster to be
   * 			used.</p>
   *          <p>The <a href="https://docs.aws.amazon.com/AmazonECS/latest/APIReference/API_PutClusterCapacityProviders.html">PutClusterCapacityProviders</a>API operation is used to update the
   * 			list of available capacity providers for a cluster after the cluster is created.</p>
   *          <p></p>
   * @public
   */
  capacityProviderStrategy?: CapacityProviderStrategyItem[];

  /**
   * <p>Optional deployment parameters that control how many tasks run during the deployment and the
   * 			failure detection methods.</p>
   * @public
   */
  deploymentConfiguration?: DeploymentConfiguration;

  /**
   * <p>An object representing the network configuration for the service.</p>
   * @public
   */
  networkConfiguration?: NetworkConfiguration;

  /**
   * <p>An array of task placement constraint objects to update the service to use. If no
   * 			value is specified, the existing placement constraints for the service will remain
   * 			unchanged. If this value is specified, it will override any existing placement
   * 			constraints defined for the service. To remove all existing placement constraints,
   * 			specify an empty array.</p>
   *          <p>You can specify a maximum of 10 constraints for each task. This limit includes
   * 			constraints in the task definition and those specified at runtime.</p>
   * @public
   */
  placementConstraints?: PlacementConstraint[];

  /**
   * <p>The task placement strategy objects to update the service to use. If no value is
   * 			specified, the existing placement strategy for the service will remain unchanged. If
   * 			this value is specified, it will override the existing placement strategy defined for
   * 			the service. To remove an existing placement strategy, specify an empty object.</p>
   *          <p>You can specify a maximum of five strategy rules for each service.</p>
   * @public
   */
  placementStrategy?: PlacementStrategy[];

  /**
   * <p>The platform version that your tasks in the service run on. A platform version is only
   * 			specified for tasks using the Fargate launch type. If a platform version
   * 			is not specified, the <code>LATEST</code> platform version is used. For more
   * 			information, see <a href="https://docs.aws.amazon.com/AmazonECS/latest/developerguide/platform_versions.html">Fargate Platform
   * 				Versions</a> in the <i>Amazon Elastic Container Service Developer Guide</i>.</p>
   * @public
   */
  platformVersion?: string;

  /**
   * <p>Determines whether to force a new deployment of the service. By default, deployments
   * 			aren't forced. You can use this option to start a new deployment with no service
   * 			definition changes. For example, you can update a service's tasks to use a newer Docker
   * 			image with the same image/tag combination (<code>my_image:latest</code>) or to roll
   * 			Fargate tasks onto a newer platform version.</p>
   * @public
   */
  forceNewDeployment?: boolean;

  /**
   * <p>The period of time, in seconds, that the Amazon ECS service scheduler ignores unhealthy
   * 			Elastic Load Balancing target health checks after a task has first started. This is only valid if your
   * 			service is configured to use a load balancer. If your service's tasks take a while to
   * 			start and respond to Elastic Load Balancing health checks, you can specify a health check grace period of
   * 			up to 2,147,483,647 seconds. During that time, the Amazon ECS service scheduler ignores
   * 			the Elastic Load Balancing health check status. This grace period can prevent the ECS service scheduler
   * 			from marking tasks as unhealthy and stopping them before they have time to come
   * 			up.</p>
   * @public
   */
  healthCheckGracePeriodSeconds?: number;

  /**
   * <p>If <code>true</code>, this enables execute command functionality on all task
   * 			containers.</p>
   *          <p>If you do not want to override the value that was set when the service was created,
   * 			you can set this to <code>null</code> when performing this action.</p>
   * @public
   */
  enableExecuteCommand?: boolean;

  /**
   * <p>Determines whether to turn on Amazon ECS managed tags for the tasks in the service. For
   * 			more information, see <a href="https://docs.aws.amazon.com/AmazonECS/latest/developerguide/ecs-using-tags.html">Tagging Your Amazon ECS
   * 				Resources</a> in the <i>Amazon Elastic Container Service Developer Guide</i>.</p>
   *          <p>Only tasks launched after the update will reflect the update. To update the tags on
   * 			all tasks, set <code>forceNewDeployment</code> to <code>true</code>, so that Amazon ECS
   * 			starts new tasks with the updated tags.</p>
   * @public
   */
  enableECSManagedTags?: boolean;

  /**
   * <p>A list of Elastic Load Balancing load balancer objects. It contains the load balancer name, the
   * 			container name, and the container port to access from the load balancer. The container
   * 			name is as it appears in a container definition.</p>
   *          <p>When you add, update, or remove a load balancer configuration, Amazon ECS starts new tasks
   * 			with the updated Elastic Load Balancing configuration, and then stops the old tasks when the new tasks
   * 			are running.</p>
   *          <p>For services that use rolling updates, you can add, update, or remove Elastic Load Balancing target
   * 			groups. You can update from a single target group to multiple target groups and from
   * 			multiple target groups to a single target group.</p>
   *          <p>For services that use blue/green deployments, you can update Elastic Load Balancing target groups by
   * 			using <code>
   *                <a href="https://docs.aws.amazon.com/codedeploy/latest/APIReference/API_CreateDeployment.html">CreateDeployment</a>
   *             </code> through CodeDeploy. Note that multiple target groups
   * 			are not supported for blue/green deployments. For more information see <a href="https://docs.aws.amazon.com/AmazonECS/latest/developerguide/register-multiple-targetgroups.html">Register
   * 				multiple target groups with a service</a> in the <i>Amazon Elastic Container Service Developer Guide</i>. </p>
   *          <p>For services that use the external deployment controller, you can add, update, or
   * 			remove load balancers by using <a href="https://docs.aws.amazon.com/AmazonECS/latest/APIReference/API_CreateTaskSet.html">CreateTaskSet</a>.
   * 			Note that multiple target groups are not supported for external deployments. For more
   * 			information see <a href="https://docs.aws.amazon.com/AmazonECS/latest/developerguide/register-multiple-targetgroups.html">Register
   * 				multiple target groups with a service</a> in the <i>Amazon Elastic Container Service Developer Guide</i>. </p>
   *          <p>You can remove existing <code>loadBalancers</code> by passing an empty list.</p>
   * @public
   */
  loadBalancers?: LoadBalancer[];

  /**
   * <p>Determines whether to propagate the tags from the task definition or the service to
   * 			the task. If no value is specified, the tags aren't propagated.</p>
   *          <p>Only tasks launched after the update will reflect the update. To update the tags on
   * 			all tasks, set <code>forceNewDeployment</code> to <code>true</code>, so that Amazon ECS
   * 			starts new tasks with the updated tags.</p>
   * @public
   */
  propagateTags?: PropagateTags;

  /**
   * <p>The details for the service discovery registries to assign to this service. For more
   * 			information, see <a href="https://docs.aws.amazon.com/AmazonECS/latest/developerguide/service-discovery.html">Service
   * 				Discovery</a>.</p>
   *          <p>When you add, update, or remove the service registries configuration, Amazon ECS starts new
   * 			tasks with the updated service registries configuration, and then stops the old tasks
   * 			when the new tasks are running.</p>
   *          <p>You can remove existing <code>serviceRegistries</code> by passing an empty
   * 			list.</p>
   * @public
   */
  serviceRegistries?: ServiceRegistry[];

  /**
   * <p>The configuration for this service to discover and connect to
   * 	services, and be discovered by, and connected from, other services within a namespace.</p>
   *          <p>Tasks that run in a namespace can use short names to connect
   * 	to services in the namespace. Tasks can connect to services across all of the clusters in the namespace.
   * 	Tasks connect through a managed proxy container
   * 	that collects logs and metrics for increased visibility.
   * 	Only the tasks that Amazon ECS services create are supported with Service Connect.
   * 	For more information, see <a href="https://docs.aws.amazon.com/AmazonECS/latest/developerguide/service-connect.html">Service Connect</a> in the <i>Amazon Elastic Container Service Developer Guide</i>.</p>
   * @public
   */
  serviceConnectConfiguration?: ServiceConnectConfiguration;

  /**
   * <p>The details of the volume that was <code>configuredAtLaunch</code>. You can configure
   * 			the size, volumeType, IOPS, throughput, snapshot and encryption in <a href="https://docs.aws.amazon.com/AmazonECS/latest/APIReference/API_ServiceManagedEBSVolumeConfiguration.html">ServiceManagedEBSVolumeConfiguration</a>. The <code>name</code> of the volume
   * 			must match the <code>name</code> from the task definition. If set to null, no new
   * 			deployment is triggered. Otherwise, if this configuration differs from the existing one,
   * 			it triggers a new deployment.</p>
   * @public
   */
  volumeConfigurations?: ServiceVolumeConfiguration[];
}

/**
 * @public
 */
export interface UpdateServiceResponse {
  /**
   * <p>The full description of your service following the update call.</p>
   * @public
   */
  service?: Service;
}

/**
 * @public
 */
export interface UpdateServicePrimaryTaskSetRequest {
  /**
   * <p>The short name or full Amazon Resource Name (ARN) of the cluster that hosts the service that the task
   * 			set exists in.</p>
   * @public
   */
  cluster: string | undefined;

  /**
   * <p>The short name or full Amazon Resource Name (ARN) of the service that the task set exists in.</p>
   * @public
   */
  service: string | undefined;

  /**
   * <p>The short name or full Amazon Resource Name (ARN) of the task set to set as the primary task set in the
   * 			deployment.</p>
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
  taskSet?: TaskSet;
}

/**
 * @public
 */
export interface UpdateTaskProtectionRequest {
  /**
   * <p>The short name or full Amazon Resource Name (ARN) of the cluster that hosts the service that the task
   * 			sets exist in.</p>
   * @public
   */
  cluster: string | undefined;

  /**
   * <p>A list of up to 10 task IDs or full ARN entries.</p>
   * @public
   */
  tasks: string[] | undefined;

  /**
   * <p>Specify <code>true</code> to mark a task for protection and <code>false</code> to
   * 			unset protection, making it eligible for termination.</p>
   * @public
   */
  protectionEnabled: boolean | undefined;

  /**
   * <p>If you set <code>protectionEnabled</code> to <code>true</code>, you can specify the
   * 			duration for task protection in minutes. You can specify a value from 1 minute to up to
   * 			2,880 minutes (48 hours). During this time, your task will not be terminated by scale-in
   * 			events from Service Auto Scaling or deployments. After this time period lapses,
   * 				<code>protectionEnabled</code> will be reset to <code>false</code>.</p>
   *          <p>If you don’t specify the time, then the task is automatically protected for 120
   * 			minutes (2 hours).</p>
   * @public
   */
  expiresInMinutes?: number;
}

/**
 * @public
 */
export interface UpdateTaskProtectionResponse {
  /**
   * <p>A list of tasks with the following information.</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>taskArn</code>: The task ARN.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>protectionEnabled</code>: The protection status of the task. If scale-in
   * 					protection is turned on for a task, the value is <code>true</code>. Otherwise,
   * 					it is <code>false</code>.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>expirationDate</code>: The epoch time when protection for the task will
   * 					expire.</p>
   *             </li>
   *          </ul>
   * @public
   */
  protectedTasks?: ProtectedTask[];

  /**
   * <p>Any failures associated with the call.</p>
   * @public
   */
  failures?: Failure[];
}

/**
 * @public
 */
export interface UpdateTaskSetRequest {
  /**
   * <p>The short name or full Amazon Resource Name (ARN) of the cluster that hosts the service that the task
   * 			set is found in.</p>
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
   * <p>A floating-point percentage of the desired number of tasks to place and keep running
   * 			in the task set.</p>
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
  taskSet?: TaskSet;
}
