// smithy-typescript generated code
import { ExceptionOptionType as __ExceptionOptionType } from "@smithy/smithy-client";

import { ECSServiceException as __BaseException } from "./ECSServiceException";

import {
  AvailabilityZoneRebalancing,
  CapacityProvider,
  CapacityProviderStrategyItem,
  Cluster,
  ClusterConfiguration,
  ClusterServiceConnectDefaultsRequest,
  ClusterSetting,
  ContainerInstance,
  ContainerInstanceStatus,
  DeploymentConfiguration,
  DeploymentController,
  Failure,
  LoadBalancer,
  ManagedAgentName,
  ManagedDraining,
  ManagedScaling,
  ManagedTerminationProtection,
  NetworkBinding,
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
  Tag,
  Task,
  TaskSet,
  VpcLatticeConfiguration,
} from "./models_0";

/**
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
 * <p>An object representing a change in state for a task attachment.</p>
 * @public
 */
export interface AttachmentStateChange {
  /**
   * <p>The Amazon Resource Name (ARN) of the attachment.</p>
   * @public
   */
  attachmentArn: string | undefined;

  /**
   * <p>The status of the attachment.</p>
   * @public
   */
  status: string | undefined;
}

/**
 * @public
 */
export interface SubmitAttachmentStateChangesRequest {
  /**
   * <p>The short name or full ARN of the cluster that hosts the container instance the
   * 			attachment belongs to.</p>
   * @public
   */
  cluster?: string | undefined;

  /**
   * <p>Any attachments associated with the state change request.</p>
   * @public
   */
  attachments: AttachmentStateChange[] | undefined;
}

/**
 * @public
 */
export interface SubmitAttachmentStateChangesResponse {
  /**
   * <p>Acknowledgement of the state change.</p>
   * @public
   */
  acknowledgment?: string | undefined;
}

/**
 * @public
 */
export interface SubmitContainerStateChangeRequest {
  /**
   * <p>The short name or full ARN of the cluster that hosts the container.</p>
   * @public
   */
  cluster?: string | undefined;

  /**
   * <p>The task ID or full Amazon Resource Name (ARN) of the task that hosts the container.</p>
   * @public
   */
  task?: string | undefined;

  /**
   * <p>The name of the container.</p>
   * @public
   */
  containerName?: string | undefined;

  /**
   * <p>The ID of the Docker container.</p>
   * @public
   */
  runtimeId?: string | undefined;

  /**
   * <p>The status of the state change request.</p>
   * @public
   */
  status?: string | undefined;

  /**
   * <p>The exit code that's returned for the state change request.</p>
   * @public
   */
  exitCode?: number | undefined;

  /**
   * <p>The reason for the state change request.</p>
   * @public
   */
  reason?: string | undefined;

  /**
   * <p>The network bindings of the container.</p>
   * @public
   */
  networkBindings?: NetworkBinding[] | undefined;
}

/**
 * @public
 */
export interface SubmitContainerStateChangeResponse {
  /**
   * <p>Acknowledgement of the state change.</p>
   * @public
   */
  acknowledgment?: string | undefined;
}

/**
 * <p>An object that represents a change in state for a container.</p>
 * @public
 */
export interface ContainerStateChange {
  /**
   * <p>The name of the container.</p>
   * @public
   */
  containerName?: string | undefined;

  /**
   * <p>The container image SHA 256 digest.</p>
   * @public
   */
  imageDigest?: string | undefined;

  /**
   * <p>The ID of the Docker container.</p>
   * @public
   */
  runtimeId?: string | undefined;

  /**
   * <p>The exit code for the container, if the state change is a result of the container
   * 			exiting.</p>
   * @public
   */
  exitCode?: number | undefined;

  /**
   * <p>Any network bindings that are associated with the container.</p>
   * @public
   */
  networkBindings?: NetworkBinding[] | undefined;

  /**
   * <p>The reason for the state change.</p>
   * @public
   */
  reason?: string | undefined;

  /**
   * <p>The status of the container.</p>
   * @public
   */
  status?: string | undefined;
}

/**
 * <p>An object representing a change in state for a managed agent.</p>
 * @public
 */
export interface ManagedAgentStateChange {
  /**
   * <p>The name of the container that's associated with the managed agent.</p>
   * @public
   */
  containerName: string | undefined;

  /**
   * <p>The name of the managed agent.</p>
   * @public
   */
  managedAgentName: ManagedAgentName | undefined;

  /**
   * <p>The status of the managed agent.</p>
   * @public
   */
  status: string | undefined;

  /**
   * <p>The reason for the status of the managed agent.</p>
   * @public
   */
  reason?: string | undefined;
}

/**
 * @public
 */
export interface SubmitTaskStateChangeRequest {
  /**
   * <p>The short name or full Amazon Resource Name (ARN) of the cluster that hosts the task.</p>
   * @public
   */
  cluster?: string | undefined;

  /**
   * <p>The task ID or full ARN of the task in the state change request.</p>
   * @public
   */
  task?: string | undefined;

  /**
   * <p>The status of the state change request.</p>
   * @public
   */
  status?: string | undefined;

  /**
   * <p>The reason for the state change request.</p>
   * @public
   */
  reason?: string | undefined;

  /**
   * <p>Any containers that's associated with the state change request.</p>
   * @public
   */
  containers?: ContainerStateChange[] | undefined;

  /**
   * <p>Any attachments associated with the state change request.</p>
   * @public
   */
  attachments?: AttachmentStateChange[] | undefined;

  /**
   * <p>The details for the managed agent that's associated with the task.</p>
   * @public
   */
  managedAgents?: ManagedAgentStateChange[] | undefined;

  /**
   * <p>The Unix timestamp for the time when the container image pull started.</p>
   * @public
   */
  pullStartedAt?: Date | undefined;

  /**
   * <p>The Unix timestamp for the time when the container image pull completed.</p>
   * @public
   */
  pullStoppedAt?: Date | undefined;

  /**
   * <p>The Unix timestamp for the time when the task execution stopped.</p>
   * @public
   */
  executionStoppedAt?: Date | undefined;
}

/**
 * @public
 */
export interface SubmitTaskStateChangeResponse {
  /**
   * <p>Acknowledgement of the state change.</p>
   * @public
   */
  acknowledgment?: string | undefined;
}

/**
 * @public
 */
export interface TagResourceRequest {
  /**
   * <p>The Amazon Resource Name (ARN) of the resource to add tags to. Currently, the supported resources are
   * 			Amazon ECS capacity providers, tasks, services, task definitions, clusters, and container
   * 			instances.</p>
   *          <p>In order to tag a service that has the following ARN format, you need to migrate the
   * 			service to the long ARN. For more information, see <a href="https://docs.aws.amazon.com/AmazonECS/latest/developerguide/service-arn-migration.html">Migrate an Amazon ECS short service ARN to a long ARN</a> in the <i>Amazon Elastic Container Service
   * 				Developer Guide</i>.</p>
   *          <p>
   *             <code>arn:aws:ecs:region:aws_account_id:service/service-name</code>
   *          </p>
   *          <p>After the migration is complete, the service has the long ARN format, as shown below. Use this ARN to tag the service.</p>
   *          <p>
   *             <code>arn:aws:ecs:region:aws_account_id:service/cluster-name/service-name</code>
   *          </p>
   *          <p>If you try to tag a service with a short ARN, you receive an
   * 				<code>InvalidParameterException</code> error.</p>
   * @public
   */
  resourceArn: string | undefined;

  /**
   * <p>The tags to add to the resource. A tag is an array of key-value pairs.</p>
   *          <p>The following basic restrictions apply to tags:</p>
   *          <ul>
   *             <li>
   *                <p>Maximum number of tags per resource - 50</p>
   *             </li>
   *             <li>
   *                <p>For each resource, each tag key must be unique, and each tag key can have only
   *                     one value.</p>
   *             </li>
   *             <li>
   *                <p>Maximum key length - 128 Unicode characters in UTF-8</p>
   *             </li>
   *             <li>
   *                <p>Maximum value length - 256 Unicode characters in UTF-8</p>
   *             </li>
   *             <li>
   *                <p>If your tagging schema is used across multiple services and resources,
   *                     remember that other services may have restrictions on allowed characters.
   *                     Generally allowed characters are: letters, numbers, and spaces representable in
   *                     UTF-8, and the following characters: + - = . _ : / @.</p>
   *             </li>
   *             <li>
   *                <p>Tag keys and values are case-sensitive.</p>
   *             </li>
   *             <li>
   *                <p>Do not use <code>aws:</code>, <code>AWS:</code>, or any upper or lowercase
   *                     combination of such as a prefix for either keys or values as it is reserved for
   *                     Amazon Web Services use. You cannot edit or delete tag keys or values with this prefix. Tags with
   *                     this prefix do not count against your tags per resource limit.</p>
   *             </li>
   *          </ul>
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
export interface UntagResourceRequest {
  /**
   * <p>The Amazon Resource Name (ARN) of the resource to delete tags from. Currently, the supported resources
   * 			are Amazon ECS capacity providers, tasks, services, task definitions, clusters, and container
   * 			instances.</p>
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

/**
 * <p>The details of the Auto Scaling group capacity provider to update.</p>
 * @public
 */
export interface AutoScalingGroupProviderUpdate {
  /**
   * <p>The managed scaling settings for the Auto Scaling group capacity provider.</p>
   * @public
   */
  managedScaling?: ManagedScaling | undefined;

  /**
   * <p>The managed termination protection setting to use for the Auto Scaling group capacity
   * 			provider. This determines whether the Auto Scaling group has managed termination
   * 			protection.</p>
   *          <important>
   *             <p>When using managed termination protection, managed scaling must also be used
   * 				otherwise managed termination protection doesn't work.</p>
   *          </important>
   *          <p>When managed termination protection is on, Amazon ECS prevents the Amazon EC2 instances in an
   * 			Auto Scaling group that contain tasks from being terminated during a scale-in action.
   * 			The Auto Scaling group and each instance in the Auto Scaling group must have instance
   * 			protection from scale-in actions on. For more information, see <a href="https://docs.aws.amazon.com/autoscaling/ec2/userguide/as-instance-termination.html#instance-protection">Instance Protection</a> in the <i>Auto Scaling User Guide</i>.</p>
   *          <p>When managed termination protection is off, your Amazon EC2 instances aren't protected from
   * 			termination when the Auto Scaling group scales in.</p>
   * @public
   */
  managedTerminationProtection?: ManagedTerminationProtection | undefined;

  /**
   * <p>The managed draining option for the Auto Scaling group capacity provider. When you enable this, Amazon ECS manages and gracefully drains the EC2 container instances that are in the Auto Scaling group capacity provider.</p>
   * @public
   */
  managedDraining?: ManagedDraining | undefined;
}

/**
 * @public
 */
export interface UpdateCapacityProviderRequest {
  /**
   * <p>The name of the capacity provider to update.</p>
   * @public
   */
  name: string | undefined;

  /**
   * <p>An object that represent the parameters to update for the Auto Scaling group capacity
   * 			provider.</p>
   * @public
   */
  autoScalingGroupProvider: AutoScalingGroupProviderUpdate | undefined;
}

/**
 * @public
 */
export interface UpdateCapacityProviderResponse {
  /**
   * <p>Details about the capacity provider.</p>
   * @public
   */
  capacityProvider?: CapacityProvider | undefined;
}

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
  settings?: ClusterSetting[] | undefined;

  /**
   * <p>The execute command configuration for the cluster.</p>
   * @public
   */
  configuration?: ClusterConfiguration | undefined;

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
  serviceConnectDefaults?: ClusterServiceConnectDefaultsRequest | undefined;
}

/**
 * @public
 */
export interface UpdateClusterResponse {
  /**
   * <p>Details about the cluster.</p>
   * @public
   */
  cluster?: Cluster | undefined;
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
   * 				<code>containerInsights</code> value set with <a href="https://docs.aws.amazon.com/AmazonECS/latest/APIReference/API_PutAccountSetting.html">PutAccountSetting</a> or <a href="https://docs.aws.amazon.com/AmazonECS/latest/APIReference/API_PutAccountSettingDefault.html">PutAccountSettingDefault</a>.</p>
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
  cluster?: Cluster | undefined;
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
  cluster?: string | undefined;

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
  containerInstance?: ContainerInstance | undefined;
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
  cluster?: string | undefined;

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
  containerInstances?: ContainerInstance[] | undefined;

  /**
   * <p>Any failures associated with the call.</p>
   * @public
   */
  failures?: Failure[] | undefined;
}

/**
 * @public
 */
export interface UpdateServiceRequest {
  /**
   * <p>The short name or full Amazon Resource Name (ARN) of the cluster that your service runs on.
   * 			If you do not specify a cluster, the default cluster is assumed.</p>
   *          <p>You can't change the cluster name.</p>
   * @public
   */
  cluster?: string | undefined;

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
  desiredCount?: number | undefined;

  /**
   * <p>The <code>family</code> and <code>revision</code> (<code>family:revision</code>) or
   * 			full ARN of the task definition to run in your service. If a <code>revision</code> is
   * 			not specified, the latest <code>ACTIVE</code> revision is used. If you modify the task
   * 			definition with <code>UpdateService</code>, Amazon ECS spawns a task with the new version of
   * 			the task definition and then stops an old task after the new version is running.</p>
   * @public
   */
  taskDefinition?: string | undefined;

  /**
   * <p>The details of a capacity provider strategy. You can set a capacity provider when you
   * 			create a cluster, run a task, or update a service.</p>
   *          <p>When you use Fargate, the capacity providers are <code>FARGATE</code> or
   * 				<code>FARGATE_SPOT</code>.</p>
   *          <p>When you use Amazon EC2, the capacity providers are Auto Scaling groups.</p>
   *          <p>You can change capacity providers for rolling deployments and blue/green
   * 			deployments.</p>
   *          <p>The following list provides the valid transitions:</p>
   *          <ul>
   *             <li>
   *                <p>Update the Fargate launch type to an Auto Scaling group capacity provider.</p>
   *             </li>
   *             <li>
   *                <p>Update the Amazon EC2 launch type to a Fargate capacity provider.</p>
   *             </li>
   *             <li>
   *                <p>Update the Fargate capacity provider to an Auto Scaling group capacity provider.</p>
   *             </li>
   *             <li>
   *                <p>Update the Amazon EC2 capacity provider to a Fargate capacity provider. </p>
   *             </li>
   *             <li>
   *                <p>Update the Auto Scaling group or Fargate capacity provider back to the launch type.</p>
   *                <p>Pass an empty list in the <code>capacityProviderStrategy</code> parameter.</p>
   *             </li>
   *          </ul>
   *          <p>For information about Amazon Web Services CDK considerations, see <a href="https://docs.aws.amazon.com/AmazonECS/latest/developerguide/update-service-parameters.html">Amazon Web Services CDK considerations</a>.</p>
   * @public
   */
  capacityProviderStrategy?: CapacityProviderStrategyItem[] | undefined;

  /**
   * <p>Optional deployment parameters that control how many tasks run during the deployment
   * 			and the ordering of stopping and starting tasks.</p>
   * @public
   */
  deploymentConfiguration?: DeploymentConfiguration | undefined;

  /**
   * <p>Indicates whether to use Availability Zone rebalancing for the service.</p>
   *          <p>For more information, see <a href="https://docs.aws.amazon.com/AmazonECS/latest/developerguide/service-rebalancing.html">Balancing an Amazon ECS service across Availability Zones</a> in
   * 			the <i>
   *                <i>Amazon Elastic Container Service Developer Guide</i>
   *             </i>.</p>
   * @public
   */
  availabilityZoneRebalancing?: AvailabilityZoneRebalancing | undefined;

  /**
   * <p>An object representing the network configuration for the service.</p>
   * @public
   */
  networkConfiguration?: NetworkConfiguration | undefined;

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
  placementConstraints?: PlacementConstraint[] | undefined;

  /**
   * <p>The task placement strategy objects to update the service to use. If no value is
   * 			specified, the existing placement strategy for the service will remain unchanged. If
   * 			this value is specified, it will override the existing placement strategy defined for
   * 			the service. To remove an existing placement strategy, specify an empty object.</p>
   *          <p>You can specify a maximum of five strategy rules for each service.</p>
   * @public
   */
  placementStrategy?: PlacementStrategy[] | undefined;

  /**
   * <p>The platform version that your tasks in the service run on. A platform version is only
   * 			specified for tasks using the Fargate launch type. If a platform version
   * 			is not specified, the <code>LATEST</code> platform version is used. For more
   * 			information, see <a href="https://docs.aws.amazon.com/AmazonECS/latest/developerguide/platform_versions.html">Fargate Platform
   * 				Versions</a> in the <i>Amazon Elastic Container Service Developer Guide</i>.</p>
   * @public
   */
  platformVersion?: string | undefined;

  /**
   * <p>Determines whether to force a new deployment of the service. By default, deployments
   * 			aren't forced. You can use this option to start a new deployment with no service
   * 			definition changes. For example, you can update a service's tasks to use a newer Docker
   * 			image with the same image/tag combination (<code>my_image:latest</code>) or to roll
   * 			Fargate tasks onto a newer platform version.</p>
   * @public
   */
  forceNewDeployment?: boolean | undefined;

  /**
   * <p>The period of time, in seconds, that the Amazon ECS service scheduler ignores unhealthy
   * 			Elastic Load Balancing, VPC Lattice, and container health checks after a task has first started. If you don't
   * 			specify a health check grace period value, the default value of <code>0</code> is used.
   * 			If you don't use any of the health checks, then
   * 				<code>healthCheckGracePeriodSeconds</code> is unused.</p>
   *          <p>If your service's tasks take a while to start and respond to health checks, you can
   * 			specify a health check grace period of up to 2,147,483,647 seconds (about 69 years).
   * 			During that time, the Amazon ECS service scheduler ignores health check status. This grace
   * 			period can prevent the service scheduler from marking tasks as unhealthy and stopping
   * 			them before they have time to come up.</p>
   * @public
   */
  healthCheckGracePeriodSeconds?: number | undefined;

  /**
   * <p>The deployment controller to use for the service. </p>
   * @public
   */
  deploymentController?: DeploymentController | undefined;

  /**
   * <p>If <code>true</code>, this enables execute command functionality on all task
   * 			containers.</p>
   *          <p>If you do not want to override the value that was set when the service was created,
   * 			you can set this to <code>null</code> when performing this action.</p>
   * @public
   */
  enableExecuteCommand?: boolean | undefined;

  /**
   * <p>Determines whether to turn on Amazon ECS managed tags for the tasks in the service. For
   * 			more information, see <a href="https://docs.aws.amazon.com/AmazonECS/latest/developerguide/ecs-using-tags.html">Tagging Your Amazon ECS
   * 				Resources</a> in the <i>Amazon Elastic Container Service Developer Guide</i>.</p>
   *          <p>Only tasks launched after the update will reflect the update. To update the tags on
   * 			all tasks, set <code>forceNewDeployment</code> to <code>true</code>, so that Amazon ECS
   * 			starts new tasks with the updated tags.</p>
   * @public
   */
  enableECSManagedTags?: boolean | undefined;

  /**
   * <note>
   *             <p>You must have a service-linked role when you update this property</p>
   *          </note>
   *          <p>A list of Elastic Load Balancing load balancer objects. It contains the load balancer name, the
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
  loadBalancers?: LoadBalancer[] | undefined;

  /**
   * <p>Determines whether to propagate the tags from the task definition or the service to
   * 			the task. If no value is specified, the tags aren't propagated.</p>
   *          <p>Only tasks launched after the update will reflect the update. To update the tags on
   * 			all tasks, set <code>forceNewDeployment</code> to <code>true</code>, so that Amazon ECS
   * 			starts new tasks with the updated tags.</p>
   * @public
   */
  propagateTags?: PropagateTags | undefined;

  /**
   * <note>
   *             <p>You must have a service-linked role when you update this property.</p>
   *             <p>For more information about the role see the <code>CreateService</code> request
   * 				parameter <a href="https://docs.aws.amazon.com/AmazonECS/latest/APIReference/API_CreateService.html#ECS-CreateService-request-role">
   *                   <code>role</code>
   *                </a>. </p>
   *          </note>
   *          <p>The details for the service discovery registries to assign to this service. For more
   * 			information, see <a href="https://docs.aws.amazon.com/AmazonECS/latest/developerguide/service-discovery.html">Service
   * 				Discovery</a>.</p>
   *          <p>When you add, update, or remove the service registries configuration, Amazon ECS starts new
   * 			tasks with the updated service registries configuration, and then stops the old tasks
   * 			when the new tasks are running.</p>
   *          <p>You can remove existing <code>serviceRegistries</code> by passing an empty
   * 			list.</p>
   * @public
   */
  serviceRegistries?: ServiceRegistry[] | undefined;

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
  serviceConnectConfiguration?: ServiceConnectConfiguration | undefined;

  /**
   * <p>The details of the volume that was <code>configuredAtLaunch</code>. You can configure
   * 			the size, volumeType, IOPS, throughput, snapshot and encryption in <a href="https://docs.aws.amazon.com/AmazonECS/latest/APIReference/API_ServiceManagedEBSVolumeConfiguration.html">ServiceManagedEBSVolumeConfiguration</a>. The <code>name</code> of the volume
   * 			must match the <code>name</code> from the task definition. If set to null, no new
   * 			deployment is triggered. Otherwise, if this configuration differs from the existing one,
   * 			it triggers a new deployment.</p>
   * @public
   */
  volumeConfigurations?: ServiceVolumeConfiguration[] | undefined;

  /**
   * <p>An object representing the VPC Lattice configuration for the service being
   * 			updated.</p>
   * @public
   */
  vpcLatticeConfigurations?: VpcLatticeConfiguration[] | undefined;
}

/**
 * @public
 */
export interface UpdateServiceResponse {
  /**
   * <p>The full description of your service following the update call.</p>
   * @public
   */
  service?: Service | undefined;
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
  taskSet?: TaskSet | undefined;
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
  expiresInMinutes?: number | undefined;
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
  taskSet?: TaskSet | undefined;
}
