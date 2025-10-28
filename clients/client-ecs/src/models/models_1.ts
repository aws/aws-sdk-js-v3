// smithy-typescript generated code
import { ExceptionOptionType as __ExceptionOptionType } from "@smithy/smithy-client";

import { ECSServiceException as __BaseException } from "./ECSServiceException";

import {
  Attribute,
  AvailabilityZoneRebalancing,
  CapacityProvider,
  CapacityProviderStrategyItem,
  Cluster,
  ClusterConfiguration,
  ClusterServiceConnectDefaultsRequest,
  ClusterSetting,
  Compatibility,
  ContainerDefinition,
  ContainerInstance,
  ContainerInstanceStatus,
  DeploymentConfiguration,
  DeploymentController,
  EBSTagSpecification,
  EphemeralStorage,
  Failure,
  InferenceAccelerator,
  InstanceRequirementsRequest,
  IpcMode,
  LaunchType,
  LoadBalancer,
  ManagedAgentName,
  ManagedDraining,
  ManagedInstancesMonitoringOptions,
  ManagedInstancesNetworkConfiguration,
  ManagedInstancesStorageConfiguration,
  ManagedScaling,
  ManagedTerminationProtection,
  NetworkBinding,
  NetworkConfiguration,
  NetworkMode,
  PidMode,
  PlacementConstraint,
  PlacementStrategy,
  PropagateMITags,
  PropagateTags,
  ProtectedTask,
  ProxyConfiguration,
  Resource,
  RuntimePlatform,
  Scale,
  Service,
  ServiceConnectConfiguration,
  ServiceRegistry,
  ServiceVolumeConfiguration,
  Setting,
  SettingName,
  Tag,
  Task,
  TaskDefinition,
  TaskDefinitionPlacementConstraint,
  TaskFilesystemType,
  TaskOverride,
  TaskSet,
  VersionInfo,
  Volume,
  VpcLatticeConfiguration,
} from "./models_0";

/**
 * @public
 */
export interface PutAccountSettingRequest {
  /**
   * <p>The Amazon ECS account setting name to modify.</p>
   *          <p>The following are the valid values for the account setting name.</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>serviceLongArnFormat</code> - When modified, the Amazon Resource Name
   * 					(ARN) and resource ID format of the resource type for a specified user, role, or
   * 					the root user for an account is affected. The opt-in and opt-out account setting
   * 					must be set for each Amazon ECS resource separately. The ARN and resource ID format
   * 					of a resource is defined by the opt-in status of the user or role that created
   * 					the resource. You must turn on this setting to use Amazon ECS features such as
   * 					resource tagging.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>taskLongArnFormat</code> - When modified, the Amazon Resource Name (ARN)
   * 					and resource ID format of the resource type for a specified user, role, or the
   * 					root user for an account is affected. The opt-in and opt-out account setting must
   * 					be set for each Amazon ECS resource separately. The ARN and resource ID format of a
   * 					resource is defined by the opt-in status of the user or role that created the
   * 					resource. You must turn on this setting to use Amazon ECS features such as resource
   * 					tagging.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>containerInstanceLongArnFormat</code> - When modified, the Amazon
   * 					Resource Name (ARN) and resource ID format of the resource type for a specified
   * 					user, role, or the root user for an account is affected. The opt-in and opt-out
   * 					account setting must be set for each Amazon ECS resource separately. The ARN and
   * 					resource ID format of a resource is defined by the opt-in status of the user or
   * 					role that created the resource. You must turn on this setting to use Amazon ECS
   * 					features such as resource tagging.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>awsvpcTrunking</code> - When modified, the elastic network interface
   * 					(ENI) limit for any new container instances that support the feature is changed.
   * 					If <code>awsvpcTrunking</code> is turned on, any new container instances that
   * 					support the feature are launched have the increased ENI limits available to
   * 					them. For more information, see <a href="https://docs.aws.amazon.com/AmazonECS/latest/developerguide/container-instance-eni.html">Elastic
   * 						Network Interface Trunking</a> in the <i>Amazon Elastic Container Service Developer Guide</i>.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>containerInsights</code> - Container Insights with enhanced
   * 					observability provides all the Container Insights metrics, plus additional task
   * 					and container metrics. This version supports enhanced observability for Amazon ECS
   * 					clusters using the Amazon EC2 and Fargate launch types. After you configure
   * 					Container Insights with enhanced observability on Amazon ECS, Container Insights
   * 					auto-collects detailed infrastructure telemetry from the cluster level down to
   * 					the container level in your environment and displays these critical performance
   * 					data in curated dashboards removing the heavy lifting in observability set-up. </p>
   *                <p>To use Container Insights with enhanced observability, set the
   * 						<code>containerInsights</code> account setting to
   * 					<code>enhanced</code>.</p>
   *                <p>To use Container Insights, set the <code>containerInsights</code> account
   * 					setting to <code>enabled</code>.</p>
   *                <p>For more information, see <a href="https://docs.aws.amazon.com/AmazonECS/latest/developerguide/cloudwatch-container-insights.html">Monitor Amazon ECS containers using Container Insights with enhanced
   * 						observability</a> in the <i>Amazon Elastic Container Service Developer Guide</i>.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>dualStackIPv6</code> - When turned on, when using a VPC in dual stack
   * 					mode, your tasks using the <code>awsvpc</code> network mode can have an IPv6
   * 					address assigned. For more information on using IPv6 with tasks launched on
   * 					Amazon EC2 instances, see <a href="https://docs.aws.amazon.com/AmazonECS/latest/developerguide/task-networking-awsvpc.html#task-networking-vpc-dual-stack">Using a VPC in dual-stack mode</a>. For more information on using IPv6
   * 					with tasks launched on Fargate, see <a href="https://docs.aws.amazon.com/AmazonECS/latest/developerguide/fargate-task-networking.html#fargate-task-networking-vpc-dual-stack">Using a VPC in dual-stack mode</a>.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>fargateTaskRetirementWaitPeriod</code> - When Amazon Web Services determines that a
   * 					security or infrastructure update is needed for an Amazon ECS task hosted on
   * 					Fargate, the tasks need to be stopped and new tasks launched to replace them.
   * 					Use <code>fargateTaskRetirementWaitPeriod</code> to configure the wait time to
   * 					retire a Fargate task. For information about the Fargate tasks maintenance,
   * 					see <a href="https://docs.aws.amazon.com/AmazonECS/latest/developerguide/task-maintenance.html">Amazon Web Services Fargate
   * 						task maintenance</a> in the <i>Amazon ECS Developer
   * 					Guide</i>.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>tagResourceAuthorization</code> - Amazon ECS is introducing tagging
   * 					authorization for resource creation. Users must have permissions for actions
   * 					that create the resource, such as <code>ecsCreateCluster</code>. If tags are
   * 					specified when you create a resource, Amazon Web Services performs additional authorization to
   * 					verify if users or roles have permissions to create tags. Therefore, you must
   * 					grant explicit permissions to use the <code>ecs:TagResource</code> action. For
   * 					more information, see <a href="https://docs.aws.amazon.com/AmazonECS/latest/developerguide/supported-iam-actions-tagging.html">Grant permission to tag resources on creation</a> in the
   * 						<i>Amazon ECS Developer Guide</i>.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>defaultLogDriverMode</code> - Amazon ECS supports setting a default delivery
   * 					mode of log messages from a container to the <code>logDriver</code> that you specify in the container's <code>logConfiguration</code>. The delivery mode affects
   * 					application stability when the flow of logs from the container to the log driver is
   * 					interrupted. The <code>defaultLogDriverMode</code> setting supports two values:
   * 					<code>blocking</code> and <code>non-blocking</code>. If you don't specify a
   * 					delivery mode in your container definition's <code>logConfiguration</code>, the
   * 					mode you specify using this account setting will be used as the default. For
   * 					more information about log delivery modes, see <a href="https://docs.aws.amazon.com/AmazonECS/latest/APIReference/API_LogConfiguration.html">LogConfiguration</a>.
   * 				</p>
   *                <note>
   *                   <p>On June 25, 2025, Amazon ECS changed the default log driver mode from <code>blocking</code> to <code>non-blocking</code> to prioritize task availability over logging. To continue using the <code>blocking</code> mode after this change, do one of the following:</p>
   *                   <ul>
   *                      <li>
   *                         <p>Set the <code>mode</code> option in your container definition's <code>logConfiguration</code> as <code>blocking</code>.</p>
   *                      </li>
   *                      <li>
   *                         <p>Set the <code>defaultLogDriverMode</code> account setting to <code>blocking</code>.</p>
   *                      </li>
   *                   </ul>
   *                </note>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>guardDutyActivate</code> - The <code>guardDutyActivate</code> parameter is read-only in Amazon ECS and indicates whether
   * 			Amazon ECS Runtime Monitoring is enabled or disabled by your security administrator in your
   * 			Amazon ECS account. Amazon GuardDuty controls this account setting on your behalf. For more information, see <a href="https://docs.aws.amazon.com/AmazonECS/latest/developerguide/ecs-guard-duty-integration.html">Protecting Amazon ECS workloads with Amazon ECS Runtime Monitoring</a>.</p>
   *             </li>
   *          </ul>
   * @public
   */
  name: SettingName | undefined;

  /**
   * <p>The account setting value for the specified principal ARN. Accepted values are
   * 				<code>enabled</code>, <code>disabled</code>, <code>enhanced</code>, <code>on</code>,
   * 			and <code>off</code>.</p>
   *          <p>When you specify <code>fargateTaskRetirementWaitPeriod</code> for the
   * 				<code>name</code>, the following are the valid values:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>0</code> - Amazon Web Services sends the notification, and immediately retires the
   * 					affected tasks.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>7</code> - Amazon Web Services sends the notification, and waits 7 calendar days to
   * 					retire the tasks.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>14</code> - Amazon Web Services sends the notification, and waits 14 calendar days to
   * 					retire the tasks.</p>
   *             </li>
   *          </ul>
   * @public
   */
  value: string | undefined;

  /**
   * <p>The ARN of the principal, which can be a user, role, or the root user. If you specify
   * 			the root user, it modifies the account setting for all users, roles, and the root user of the
   * 			account unless a user or role explicitly overrides these settings. If this field is
   * 			omitted, the setting is changed only for the authenticated user.</p>
   *          <p>In order to use this parameter, you must be the root user, or the principal.</p>
   *          <note>
   *             <p>You must use the root user when you set the Fargate wait time
   * 					(<code>fargateTaskRetirementWaitPeriod</code>). </p>
   *             <p>Federated users assume the account setting of the root user and can't have explicit
   * 				account settings set for them.</p>
   *          </note>
   * @public
   */
  principalArn?: string | undefined;
}

/**
 * @public
 */
export interface PutAccountSettingResponse {
  /**
   * <p>The current account setting for a resource.</p>
   * @public
   */
  setting?: Setting | undefined;
}

/**
 * @public
 */
export interface PutAccountSettingDefaultRequest {
  /**
   * <p>The resource name for which to modify the account setting.</p>
   *          <p>The following are the valid values for the account setting name.</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>serviceLongArnFormat</code> - When modified, the Amazon Resource Name
   * 					(ARN) and resource ID format of the resource type for a specified user, role, or
   * 					the root user for an account is affected. The opt-in and opt-out account setting
   * 					must be set for each Amazon ECS resource separately. The ARN and resource ID format
   * 					of a resource is defined by the opt-in status of the user or role that created
   * 					the resource. You must turn on this setting to use Amazon ECS features such as
   * 					resource tagging.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>taskLongArnFormat</code> - When modified, the Amazon Resource Name (ARN)
   * 					and resource ID format of the resource type for a specified user, role, or the
   * 					root user for an account is affected. The opt-in and opt-out account setting must
   * 					be set for each Amazon ECS resource separately. The ARN and resource ID format of a
   * 					resource is defined by the opt-in status of the user or role that created the
   * 					resource. You must turn on this setting to use Amazon ECS features such as resource
   * 					tagging.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>containerInstanceLongArnFormat</code> - When modified, the Amazon
   * 					Resource Name (ARN) and resource ID format of the resource type for a specified
   * 					user, role, or the root user for an account is affected. The opt-in and opt-out
   * 					account setting must be set for each Amazon ECS resource separately. The ARN and
   * 					resource ID format of a resource is defined by the opt-in status of the user or
   * 					role that created the resource. You must turn on this setting to use Amazon ECS
   * 					features such as resource tagging.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>awsvpcTrunking</code> - When modified, the elastic network interface
   * 					(ENI) limit for any new container instances that support the feature is changed.
   * 					If <code>awsvpcTrunking</code> is turned on, any new container instances that
   * 					support the feature are launched have the increased ENI limits available to
   * 					them. For more information, see <a href="https://docs.aws.amazon.com/AmazonECS/latest/developerguide/container-instance-eni.html">Elastic
   * 						Network Interface Trunking</a> in the <i>Amazon Elastic Container Service Developer Guide</i>.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>containerInsights</code> - Container Insights with enhanced
   * 					observability provides all the Container Insights metrics, plus additional task
   * 					and container metrics. This version supports enhanced observability for Amazon ECS
   * 					clusters using the Amazon EC2 and Fargate launch types. After you configure
   * 					Container Insights with enhanced observability on Amazon ECS, Container Insights
   * 					auto-collects detailed infrastructure telemetry from the cluster level down to
   * 					the container level in your environment and displays these critical performance
   * 					data in curated dashboards removing the heavy lifting in observability set-up. </p>
   *                <p>To use Container Insights with enhanced observability, set the
   * 						<code>containerInsights</code> account setting to
   * 					<code>enhanced</code>.</p>
   *                <p>To use Container Insights, set the <code>containerInsights</code> account
   * 					setting to <code>enabled</code>.</p>
   *                <p>For more information, see <a href="https://docs.aws.amazon.com/AmazonECS/latest/developerguide/cloudwatch-container-insights.html">Monitor Amazon ECS containers using Container Insights with enhanced
   * 						observability</a> in the <i>Amazon Elastic Container Service Developer Guide</i>.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>dualStackIPv6</code> - When turned on, when using a VPC in dual stack
   * 					mode, your tasks using the <code>awsvpc</code> network mode can have an IPv6
   * 					address assigned. For more information on using IPv6 with tasks launched on
   * 					Amazon EC2 instances, see <a href="https://docs.aws.amazon.com/AmazonECS/latest/developerguide/task-networking-awsvpc.html#task-networking-vpc-dual-stack">Using a VPC in dual-stack mode</a>. For more information on using IPv6
   * 					with tasks launched on Fargate, see <a href="https://docs.aws.amazon.com/AmazonECS/latest/developerguide/fargate-task-networking.html#fargate-task-networking-vpc-dual-stack">Using a VPC in dual-stack mode</a>.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>fargateFIPSMode</code> - If you specify <code>fargateFIPSMode</code>,
   * 					Fargate FIPS 140 compliance is affected.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>fargateTaskRetirementWaitPeriod</code> - When Amazon Web Services determines that a
   * 					security or infrastructure update is needed for an Amazon ECS task hosted on
   * 					Fargate, the tasks need to be stopped and new tasks launched to replace them.
   * 					Use <code>fargateTaskRetirementWaitPeriod</code> to configure the wait time to
   * 					retire a Fargate task. For information about the Fargate tasks maintenance,
   * 					see <a href="https://docs.aws.amazon.com/AmazonECS/latest/developerguide/task-maintenance.html">Amazon Web Services Fargate
   * 						task maintenance</a> in the <i>Amazon ECS Developer
   * 					Guide</i>.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>tagResourceAuthorization</code> - Amazon ECS is introducing tagging
   * 					authorization for resource creation. Users must have permissions for actions
   * 					that create the resource, such as <code>ecsCreateCluster</code>. If tags are
   * 					specified when you create a resource, Amazon Web Services performs additional authorization to
   * 					verify if users or roles have permissions to create tags. Therefore, you must
   * 					grant explicit permissions to use the <code>ecs:TagResource</code> action. For
   * 					more information, see <a href="https://docs.aws.amazon.com/AmazonECS/latest/developerguide/supported-iam-actions-tagging.html">Grant permission to tag resources on creation</a> in the
   * 						<i>Amazon ECS Developer Guide</i>.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>defaultLogDriverMode</code> -Amazon ECS supports setting a default delivery
   * 					mode of log messages from a container to the <code>logDriver</code> that you specify in the container's <code>logConfiguration</code>. The delivery mode affects
   * 					application stability when the flow of logs from the container to the log driver is
   * 					interrupted. The <code>defaultLogDriverMode</code> setting supports two values:
   * 						<code>blocking</code> and <code>non-blocking</code>. If you don't specify a
   * 					delivery mode in your container definition's <code>logConfiguration</code>, the
   * 					mode you specify using this account setting will be used as the default. For
   * 					more information about log delivery modes, see <a href="https://docs.aws.amazon.com/AmazonECS/latest/APIReference/API_LogConfiguration.html">LogConfiguration</a>.</p>
   *                <note>
   *                   <p>On June 25, 2025, Amazon ECS changed the default log driver mode from <code>blocking</code> to <code>non-blocking</code> to prioritize task availability over logging. To continue using the <code>blocking</code> mode after this change, do one of the following:</p>
   *                   <ul>
   *                      <li>
   *                         <p>Set the <code>mode</code> option in your container definition's <code>logConfiguration</code> as <code>blocking</code>.</p>
   *                      </li>
   *                      <li>
   *                         <p>Set the <code>defaultLogDriverMode</code> account setting to <code>blocking</code>.</p>
   *                      </li>
   *                   </ul>
   *                </note>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>guardDutyActivate</code> - The <code>guardDutyActivate</code> parameter is read-only in Amazon ECS and indicates whether
   * 			Amazon ECS Runtime Monitoring is enabled or disabled by your security administrator in your
   * 			Amazon ECS account. Amazon GuardDuty controls this account setting on your behalf. For more information, see <a href="https://docs.aws.amazon.com/AmazonECS/latest/developerguide/ecs-guard-duty-integration.html">Protecting Amazon ECS workloads with Amazon ECS Runtime Monitoring</a>.</p>
   *             </li>
   *          </ul>
   * @public
   */
  name: SettingName | undefined;

  /**
   * <p>The account setting value for the specified principal ARN. Accepted values are
   * 				<code>enabled</code>, <code>disabled</code>, <code>on</code>, <code>enhanced</code>,
   * 			and <code>off</code>.</p>
   *          <p>When you specify <code>fargateTaskRetirementWaitPeriod</code> for the
   * 				<code>name</code>, the following are the valid values:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>0</code> - Amazon Web Services sends the notification, and immediately retires the
   * 					affected tasks.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>7</code> - Amazon Web Services sends the notification, and waits 7 calendar days to
   * 					retire the tasks.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>14</code> - Amazon Web Services sends the notification, and waits 14 calendar days to
   * 					retire the tasks.</p>
   *             </li>
   *          </ul>
   * @public
   */
  value: string | undefined;
}

/**
 * @public
 */
export interface PutAccountSettingDefaultResponse {
  /**
   * <p>The current setting for a resource.</p>
   * @public
   */
  setting?: Setting | undefined;
}

/**
 * <p>You can apply up to 10 custom attributes for each resource. You can view the
 * 			attributes of a resource with <a href="https://docs.aws.amazon.com/AmazonECS/latest/APIReference/API_ListAttributes.html">ListAttributes</a>.
 * 			You can remove existing attributes on a resource with <a href="https://docs.aws.amazon.com/AmazonECS/latest/APIReference/API_DeleteAttributes.html">DeleteAttributes</a>.</p>
 * @public
 */
export class AttributeLimitExceededException extends __BaseException {
  readonly name: "AttributeLimitExceededException" = "AttributeLimitExceededException";
  readonly $fault: "client" = "client";
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<AttributeLimitExceededException, __BaseException>) {
    super({
      name: "AttributeLimitExceededException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, AttributeLimitExceededException.prototype);
  }
}

/**
 * @public
 */
export interface PutAttributesRequest {
  /**
   * <p>The short name or full Amazon Resource Name (ARN) of the cluster that contains the resource to apply
   * 			attributes. If you do not specify a cluster, the default cluster is assumed.</p>
   * @public
   */
  cluster?: string | undefined;

  /**
   * <p>The attributes to apply to your resource. You can specify up to 10 custom attributes
   * 			for each resource. You can specify up to 10 attributes in a single call.</p>
   * @public
   */
  attributes: Attribute[] | undefined;
}

/**
 * @public
 */
export interface PutAttributesResponse {
  /**
   * <p>The attributes applied to your resource.</p>
   * @public
   */
  attributes?: Attribute[] | undefined;
}

/**
 * @public
 */
export interface PutClusterCapacityProvidersRequest {
  /**
   * <p>The short name or full Amazon Resource Name (ARN) of the cluster to modify the capacity provider
   * 			settings for. If you don't specify a cluster, the default cluster is assumed.</p>
   * @public
   */
  cluster: string | undefined;

  /**
   * <p>The name of one or more capacity providers to associate with the cluster.</p>
   *          <p>If specifying a capacity provider that uses an Auto Scaling group, the capacity
   * 			provider must already be created. New capacity providers can be created with the <a href="https://docs.aws.amazon.com/AmazonECS/latest/APIReference/API_CreateCapacityProvider.html">CreateCapacityProvider</a> API operation.</p>
   *          <p>To use a Fargate capacity provider, specify either the <code>FARGATE</code> or
   * 				<code>FARGATE_SPOT</code> capacity providers. The Fargate capacity providers are
   * 			available to all accounts and only need to be associated with a cluster to be
   * 			used.</p>
   * @public
   */
  capacityProviders: string[] | undefined;

  /**
   * <p>The capacity provider strategy to use by default for the cluster.</p>
   *          <p>When creating a service or running a task on a cluster, if no capacity provider or
   * 			launch type is specified then the default capacity provider strategy for the cluster is
   * 			used.</p>
   *          <p>A capacity provider strategy consists of one or more capacity providers along with the
   * 				<code>base</code> and <code>weight</code> to assign to them. A capacity provider
   * 			must be associated with the cluster to be used in a capacity provider strategy. The
   * 				<a href="https://docs.aws.amazon.com/AmazonECS/latest/APIReference/API_PutClusterCapacityProviders.html">PutClusterCapacityProviders</a> API is used to associate a capacity provider
   * 			with a cluster. Only capacity providers with an <code>ACTIVE</code> or
   * 				<code>UPDATING</code> status can be used.</p>
   *          <p>If specifying a capacity provider that uses an Auto Scaling group, the capacity
   * 			provider must already be created. New capacity providers can be created with the <a href="https://docs.aws.amazon.com/AmazonECS/latest/APIReference/API_CreateCapacityProvider.html">CreateCapacityProvider</a> API operation.</p>
   *          <p>To use a Fargate capacity provider, specify either the <code>FARGATE</code> or
   * 				<code>FARGATE_SPOT</code> capacity providers. The Fargate capacity providers are
   * 			available to all accounts and only need to be associated with a cluster to be
   * 			used.</p>
   * @public
   */
  defaultCapacityProviderStrategy: CapacityProviderStrategyItem[] | undefined;
}

/**
 * @public
 */
export interface PutClusterCapacityProvidersResponse {
  /**
   * <p>Details about the cluster.</p>
   * @public
   */
  cluster?: Cluster | undefined;
}

/**
 * <p>The specified resource is in-use and can't be removed.</p>
 * @public
 */
export class ResourceInUseException extends __BaseException {
  readonly name: "ResourceInUseException" = "ResourceInUseException";
  readonly $fault: "client" = "client";
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<ResourceInUseException, __BaseException>) {
    super({
      name: "ResourceInUseException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, ResourceInUseException.prototype);
  }
}

/**
 * @public
 * @enum
 */
export const PlatformDeviceType = {
  GPU: "GPU",
} as const;

/**
 * @public
 */
export type PlatformDeviceType = (typeof PlatformDeviceType)[keyof typeof PlatformDeviceType];

/**
 * <p>The devices that are available on the container instance. The only supported device
 * 			type is a GPU.</p>
 * @public
 */
export interface PlatformDevice {
  /**
   * <p>The ID for the GPUs on the container instance. The available GPU IDs can also be
   * 			obtained on the container instance in the
   * 				<code>/var/lib/ecs/gpu/nvidia_gpu_info.json</code> file.</p>
   * @public
   */
  id: string | undefined;

  /**
   * <p>The type of device that's available on the container instance. The only supported
   * 			value is <code>GPU</code>.</p>
   * @public
   */
  type: PlatformDeviceType | undefined;
}

/**
 * @public
 */
export interface RegisterContainerInstanceRequest {
  /**
   * <p>The short name or full Amazon Resource Name (ARN) of the cluster to register your container instance
   * 			with. If you do not specify a cluster, the default cluster is assumed.</p>
   * @public
   */
  cluster?: string | undefined;

  /**
   * <p>The instance identity document for the EC2 instance to register. This document can be
   * 			found by running the following command from the instance: <code>curl
   * 				http://169.254.169.254/latest/dynamic/instance-identity/document/</code>
   *          </p>
   * @public
   */
  instanceIdentityDocument?: string | undefined;

  /**
   * <p>The instance identity document signature for the EC2 instance to register. This
   * 			signature can be found by running the following command from the instance: <code>curl
   * 				http://169.254.169.254/latest/dynamic/instance-identity/signature/</code>
   *          </p>
   * @public
   */
  instanceIdentityDocumentSignature?: string | undefined;

  /**
   * <p>The resources available on the instance.</p>
   * @public
   */
  totalResources?: Resource[] | undefined;

  /**
   * <p>The version information for the Amazon ECS container agent and Docker daemon that runs on
   * 			the container instance.</p>
   * @public
   */
  versionInfo?: VersionInfo | undefined;

  /**
   * <p>The ARN of the container instance (if it was previously registered).</p>
   * @public
   */
  containerInstanceArn?: string | undefined;

  /**
   * <p>The container instance attributes that this container instance supports.</p>
   * @public
   */
  attributes?: Attribute[] | undefined;

  /**
   * <p>The devices that are available on the container instance. The only supported device
   * 			type is a GPU.</p>
   * @public
   */
  platformDevices?: PlatformDevice[] | undefined;

  /**
   * <p>The metadata that you apply to the container instance to help you categorize and
   * 			organize them. Each tag consists of a key and an optional value. You define both.</p>
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
  tags?: Tag[] | undefined;
}

/**
 * @public
 */
export interface RegisterContainerInstanceResponse {
  /**
   * <p>The container instance that was registered.</p>
   * @public
   */
  containerInstance?: ContainerInstance | undefined;
}

/**
 * @public
 */
export interface RegisterTaskDefinitionRequest {
  /**
   * <p>You must specify a <code>family</code> for a task definition. You can use it track
   * 			multiple versions of the same task definition. The <code>family</code> is used as a name
   * 			for your task definition. Up to 255 letters (uppercase and lowercase), numbers, underscores, and hyphens are allowed.</p>
   * @public
   */
  family: string | undefined;

  /**
   * <p>The short name or full Amazon Resource Name (ARN) of the IAM role that containers in this task can
   * 			assume. All containers in this task are granted the permissions that are specified in
   * 			this role. For more information, see <a href="https://docs.aws.amazon.com/AmazonECS/latest/developerguide/task-iam-roles.html">IAM Roles for
   * 				Tasks</a> in the <i>Amazon Elastic Container Service Developer Guide</i>.</p>
   * @public
   */
  taskRoleArn?: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the task execution role that grants the Amazon ECS container agent
   *             permission to make Amazon Web Services API calls on your behalf. For informationabout the required IAM roles for Amazon ECS, see <a href="https://docs.aws.amazon.com/AmazonECS/latest/developerguide/security-ecs-iam-role-overview.html">IAM roles for Amazon ECS</a> in the <i>Amazon Elastic Container Service Developer Guide</i>.</p>
   * @public
   */
  executionRoleArn?: string | undefined;

  /**
   * <p>The Docker networking mode to use for the containers in the task. The valid values are
   *                 <code>none</code>, <code>bridge</code>, <code>awsvpc</code>, and <code>host</code>.
   *             If no network mode is specified, the default is <code>bridge</code>.</p>
   *          <p>For Amazon ECS tasks on Fargate, the <code>awsvpc</code> network mode is required.
   *             For Amazon ECS tasks on Amazon EC2 Linux instances, any network mode can be used.  For Amazon ECS tasks on Amazon EC2 Windows instances, <code><default></code> or <code>awsvpc</code> can be used. If the network
   *             mode is set to <code>none</code>, you cannot specify port mappings in your container
   *             definitions, and the tasks containers do not have external connectivity. The
   *                 <code>host</code> and <code>awsvpc</code> network modes offer the highest networking
   *             performance for containers because they use the EC2 network stack instead of the
   *             virtualized network stack provided by the <code>bridge</code> mode.</p>
   *          <p>With the <code>host</code> and <code>awsvpc</code> network modes, exposed container
   *             ports are mapped directly to the corresponding host port (for the <code>host</code>
   *             network mode) or the attached elastic network interface port (for the
   *                 <code>awsvpc</code> network mode), so you cannot take advantage of dynamic host port
   *             mappings. </p>
   *          <important>
   *             <p>When using the <code>host</code> network mode, you should not run
   *                             containers using the root user (UID 0). It is considered best practice
   *                             to use a non-root user.</p>
   *          </important>
   *          <p>If the network mode is <code>awsvpc</code>, the task is allocated an elastic network
   *             interface, and you must specify a <a href="https://docs.aws.amazon.com/AmazonECS/latest/APIReference/API_NetworkConfiguration.html">NetworkConfiguration</a> value when you create
   *             a service or run a task with the task definition. For more information, see <a href="https://docs.aws.amazon.com/AmazonECS/latest/developerguide/task-networking.html">Task Networking</a> in the
   *                 <i>Amazon Elastic Container Service Developer Guide</i>.</p>
   *          <p>If the network mode is <code>host</code>, you cannot run multiple instantiations of the
   *             same task on a single container instance when port mappings are used.</p>
   * @public
   */
  networkMode?: NetworkMode | undefined;

  /**
   * <p>A list of container definitions in JSON format that describe the different containers
   * 			that make up your task.</p>
   * @public
   */
  containerDefinitions: ContainerDefinition[] | undefined;

  /**
   * <p>A list of volume definitions in JSON format that containers in your task might
   * 			use.</p>
   * @public
   */
  volumes?: Volume[] | undefined;

  /**
   * <p>An array of placement constraint objects to use for the task. You can specify a
   * 			maximum of 10 constraints for each task. This limit includes constraints in the task
   * 			definition and those specified at runtime.</p>
   * @public
   */
  placementConstraints?: TaskDefinitionPlacementConstraint[] | undefined;

  /**
   * <p>The task launch type that Amazon ECS validates the task definition against. A client
   * 			exception is returned if the task definition doesn't validate against the
   * 			compatibilities specified. If no value is specified, the parameter is omitted from the
   * 			response.</p>
   * @public
   */
  requiresCompatibilities?: Compatibility[] | undefined;

  /**
   * <p>The number of CPU units used by the task. It can be expressed as an integer using CPU
   * 			units (for example, <code>1024</code>) or as a string using vCPUs (for example, <code>1
   * 				vCPU</code> or <code>1 vcpu</code>) in a task definition. String values are
   * 			converted to an integer indicating the CPU units when the task definition is
   * 			registered.</p>
   *          <note>
   *             <p>Task-level CPU and memory parameters are ignored for Windows containers. We
   * 				recommend specifying container-level resources for Windows containers.</p>
   *          </note>
   *          <p>If you're using the EC2 launch type or external launch type, this field
   * 			is optional. Supported values are between <code>128</code> CPU units (<code>0.125</code>
   * 			vCPUs) and <code>196608</code> CPU units (<code>192</code> vCPUs). If you do not specify
   * 			a value, the parameter is ignored.</p>
   *          <p>This field is required for Fargate. For information about the valid values, see <a href="https://docs.aws.amazon.com/AmazonECS/latest/developerguide/task_definition_parameters.html#task_size">Task size</a> in the <i>Amazon Elastic Container Service Developer Guide</i>.</p>
   * @public
   */
  cpu?: string | undefined;

  /**
   * <p>The amount of memory (in MiB) used by the task. It can be expressed as an integer
   * 			using MiB (for example ,<code>1024</code>) or as a string using GB (for example,
   * 				<code>1GB</code> or <code>1 GB</code>) in a task definition. String values are
   * 			converted to an integer indicating the MiB when the task definition is
   * 			registered.</p>
   *          <note>
   *             <p>Task-level CPU and memory parameters are ignored for Windows containers. We
   * 				recommend specifying container-level resources for Windows containers.</p>
   *          </note>
   *          <p>If using the EC2 launch type, this field is optional.</p>
   *          <p>If using the Fargate launch type, this field is required and you must
   * 			use one of the following values. This determines your range of supported values for the
   * 				<code>cpu</code> parameter.</p>
   *          <p>The CPU units cannot be less than 1 vCPU when you use Windows containers on
   * 			Fargate.</p>
   *          <ul>
   *             <li>
   *                <p>512 (0.5 GB), 1024 (1 GB), 2048 (2 GB) - Available <code>cpu</code> values: 256 (.25 vCPU)</p>
   *             </li>
   *             <li>
   *                <p>1024 (1 GB), 2048 (2 GB), 3072 (3 GB), 4096 (4 GB) - Available <code>cpu</code> values: 512 (.5 vCPU)</p>
   *             </li>
   *             <li>
   *                <p>2048 (2 GB), 3072 (3 GB), 4096 (4 GB), 5120 (5 GB), 6144 (6 GB), 7168 (7 GB), 8192 (8 GB) - Available <code>cpu</code> values: 1024 (1 vCPU)</p>
   *             </li>
   *             <li>
   *                <p>Between 4096 (4 GB) and 16384 (16 GB) in increments of 1024 (1 GB) - Available <code>cpu</code> values: 2048 (2 vCPU)</p>
   *             </li>
   *             <li>
   *                <p>Between 8192 (8 GB) and 30720 (30 GB) in increments of 1024 (1 GB) - Available <code>cpu</code> values: 4096 (4 vCPU)</p>
   *             </li>
   *             <li>
   *                <p>Between 16 GB and 60 GB in 4 GB increments - Available <code>cpu</code> values: 8192 (8 vCPU)</p>
   *                <p>This option requires Linux platform <code>1.4.0</code> or
   *                                         later.</p>
   *             </li>
   *             <li>
   *                <p>Between 32GB and 120 GB in 8 GB increments - Available <code>cpu</code> values: 16384 (16 vCPU)</p>
   *                <p>This option requires Linux platform <code>1.4.0</code> or
   *                                         later.</p>
   *             </li>
   *          </ul>
   * @public
   */
  memory?: string | undefined;

  /**
   * <p>The metadata that you apply to the task definition to help you categorize and organize
   * 			them. Each tag consists of a key and an optional value. You define both of them.</p>
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
  tags?: Tag[] | undefined;

  /**
   * <p>The process namespace to use for the containers in the task. The valid
   *                             values are <code>host</code> or <code>task</code>. On Fargate for
   *                             Linux containers, the only valid value is <code>task</code>. For
   *                             example, monitoring sidecars might need <code>pidMode</code> to access
   *                             information about other containers running in the same task.</p>
   *          <p>If <code>host</code> is specified, all containers within the tasks
   *                             that specified the <code>host</code> PID mode on the same container
   *                             instance share the same process namespace with the host Amazon EC2
   *                             instance.</p>
   *          <p>If <code>task</code> is specified, all containers within the specified
   *                             task share the same process namespace.</p>
   *          <p>If no value is specified, the
   *                             The default is a private namespace for each container.</p>
   *          <p>If the <code>host</code> PID mode is used, there's a heightened risk
   *                             of undesired process namespace exposure.</p>
   *          <note>
   *             <p>This parameter is not supported for Windows containers.</p>
   *          </note>
   *          <note>
   *             <p>This parameter is only supported for tasks that are hosted on
   *         Fargate if the tasks are using platform version <code>1.4.0</code> or later
   *         (Linux). This isn't supported for Windows containers on
   *         Fargate.</p>
   *          </note>
   * @public
   */
  pidMode?: PidMode | undefined;

  /**
   * <p>The IPC resource namespace to use for the containers in the task. The valid values are
   *                 <code>host</code>, <code>task</code>, or <code>none</code>. If <code>host</code> is
   *             specified, then all containers within the tasks that specified the <code>host</code> IPC
   *             mode on the same container instance share the same IPC resources with the host Amazon EC2
   *             instance. If <code>task</code> is specified, all containers within the specified task
   *             share the same IPC resources. If <code>none</code> is specified, then IPC resources
   *             within the containers of a task are private and not shared with other containers in a
   *             task or on the container instance. If no value is specified, then the IPC resource
   *             namespace sharing depends on the Docker daemon setting on the container instance.</p>
   *          <p>If the <code>host</code> IPC mode is used, be aware that there is a heightened risk of
   *             undesired IPC namespace expose.</p>
   *          <p>If you are setting namespaced kernel parameters using <code>systemControls</code> for
   *             the containers in the task, the following will apply to your IPC resource namespace. For
   *             more information, see <a href="https://docs.aws.amazon.com/AmazonECS/latest/developerguide/task_definition_parameters.html">System
   *                 Controls</a> in the <i>Amazon Elastic Container Service Developer Guide</i>.</p>
   *          <ul>
   *             <li>
   *                <p>For tasks that use the <code>host</code> IPC mode, IPC namespace related
   *                         <code>systemControls</code> are not supported.</p>
   *             </li>
   *             <li>
   *                <p>For tasks that use the <code>task</code> IPC mode, IPC namespace related
   *                         <code>systemControls</code> will apply to all containers within a
   *                     task.</p>
   *             </li>
   *          </ul>
   *          <note>
   *             <p>This parameter is not supported for Windows containers or tasks run on Fargate.</p>
   *          </note>
   * @public
   */
  ipcMode?: IpcMode | undefined;

  /**
   * <p>The configuration details for the App Mesh proxy.</p>
   *          <p>For tasks hosted on Amazon EC2 instances, the container instances require at least version
   * 				<code>1.26.0</code> of the container agent and at least version
   * 				<code>1.26.0-1</code> of the <code>ecs-init</code> package to use a proxy
   * 			configuration. If your container instances are launched from the Amazon ECS-optimized
   * 			AMI version <code>20190301</code> or later, then they contain the required versions of
   * 			the container agent and <code>ecs-init</code>. For more information, see <a href="https://docs.aws.amazon.com/AmazonECS/latest/developerguide/ecs-ami-versions.html">Amazon ECS-optimized AMI versions</a> in the <i>Amazon Elastic Container Service Developer Guide</i>.</p>
   * @public
   */
  proxyConfiguration?: ProxyConfiguration | undefined;

  /**
   * <p>The Elastic Inference accelerators to use for the containers in the task.</p>
   * @public
   */
  inferenceAccelerators?: InferenceAccelerator[] | undefined;

  /**
   * <p>The amount of ephemeral storage to allocate for the task. This parameter is used to
   * 			expand the total amount of ephemeral storage available, beyond the default amount, for
   * 			tasks hosted on Fargate. For more information, see <a href="https://docs.aws.amazon.com/AmazonECS/latest/developerguide/using_data_volumes.html">Using data volumes in
   * 				tasks</a> in the <i>Amazon ECS Developer Guide</i>.</p>
   *          <note>
   *             <p>For tasks using the Fargate launch type, the task requires the
   * 				following platforms:</p>
   *             <ul>
   *                <li>
   *                   <p>Linux platform version <code>1.4.0</code> or later.</p>
   *                </li>
   *                <li>
   *                   <p>Windows platform version <code>1.0.0</code> or later.</p>
   *                </li>
   *             </ul>
   *          </note>
   * @public
   */
  ephemeralStorage?: EphemeralStorage | undefined;

  /**
   * <p>The operating system that your tasks definitions run on. A platform family is
   * 			specified only for tasks using the Fargate launch type. </p>
   * @public
   */
  runtimePlatform?: RuntimePlatform | undefined;

  /**
   * <p>Enables fault injection when you register your task definition and allows for fault
   * 			injection requests to be accepted from the task's containers. The default value is
   * 				<code>false</code>.</p>
   * @public
   */
  enableFaultInjection?: boolean | undefined;
}

/**
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
 * <p>Your Amazon Web Services account was blocked. For more information, contact <a href="http://aws.amazon.com/contact-us/">
 * 				Amazon Web ServicesSupport</a>.</p>
 * @public
 */
export class BlockedException extends __BaseException {
  readonly name: "BlockedException" = "BlockedException";
  readonly $fault: "client" = "client";
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<BlockedException, __BaseException>) {
    super({
      name: "BlockedException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, BlockedException.prototype);
  }
}

/**
 * <p>The request could not be processed because of conflict in the current state of the resource. </p>
 * @public
 */
export class ConflictException extends __BaseException {
  readonly name: "ConflictException" = "ConflictException";
  readonly $fault: "client" = "client";
  /**
   * <p>The existing task ARNs which are already associated with the
   * 				<code>clientToken</code>.</p>
   * @public
   */
  resourceIds?: string[] | undefined;

  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<ConflictException, __BaseException>) {
    super({
      name: "ConflictException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, ConflictException.prototype);
    this.resourceIds = opts.resourceIds;
  }
}

/**
 * <p>The termination policy for the Amazon EBS volume when the task exits. For more information,
 * 			see <a href="https://docs.aws.amazon.com/AmazonECS/latest/developerguide/ebs-volumes.html#ebs-volume-types">Amazon ECS volume termination policy</a>.</p>
 * @public
 */
export interface TaskManagedEBSVolumeTerminationPolicy {
  /**
   * <p>Indicates whether the volume should be deleted on when the task stops. If a value of
   * 				<code>true</code> is specified,  Amazon ECS deletes the Amazon EBS volume on your behalf when
   * 			the task goes into the <code>STOPPED</code> state. If no value is specified, the
   * 			 default value is <code>true</code> is used. When set to <code>false</code>, Amazon ECS
   * 			leaves the volume in your  account.</p>
   * @public
   */
  deleteOnTermination: boolean | undefined;
}

/**
 * <p>The configuration for the Amazon EBS volume that Amazon ECS creates and manages on your behalf.
 * 			These settings are used to create each Amazon EBS volume, with one volume created for each
 * 			task.</p>
 * @public
 */
export interface TaskManagedEBSVolumeConfiguration {
  /**
   * <p>Indicates whether the volume should be encrypted. If you turn on Region-level Amazon EBS
   * 			encryption by default but set this value as <code>false</code>, the setting is
   * 			overridden and the volume is encrypted with the KMS key specified for Amazon EBS encryption
   * 			by default. This parameter maps 1:1 with the <code>Encrypted</code> parameter of the
   * 				<a href="https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_CreateVolume.html">CreateVolume API</a> in the <i>Amazon EC2 API Reference</i>.</p>
   * @public
   */
  encrypted?: boolean | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) identifier of the Amazon Web Services Key Management Service key to use for Amazon EBS encryption. When a key
   * 			is specified using this parameter, it overrides Amazon EBS default encryption or any KMS key
   * 			that you specified for cluster-level managed storage encryption. This parameter maps 1:1
   * 			with the <code>KmsKeyId</code> parameter of the <a href="https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_CreateVolume.html">CreateVolume API</a> in
   * 			the <i>Amazon EC2 API Reference</i>. For more information about encrypting
   * 			Amazon EBS volumes attached to a task, see <a href="https://docs.aws.amazon.com/AmazonECS/latest/developerguide/ebs-kms-encryption.html">Encrypt data stored in Amazon EBS volumes attached to Amazon ECS tasks</a>.</p>
   *          <important>
   *             <p>Amazon Web Services authenticates the Amazon Web Services Key Management Service key asynchronously. Therefore, if you specify an
   * 				ID, alias, or ARN that is invalid, the action can appear to complete, but
   * 				eventually fails.</p>
   *          </important>
   * @public
   */
  kmsKeyId?: string | undefined;

  /**
   * <p>The volume type. This parameter maps 1:1 with the <code>VolumeType</code> parameter of
   * 			the <a href="https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_CreateVolume.html">CreateVolume API</a> in the <i>Amazon EC2 API Reference</i>. For more
   * 			information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/ebs-volume-types.html">Amazon EBS volume types</a> in
   * 			the <i>Amazon EC2 User Guide</i>.</p>
   *          <p>The following are the supported volume types.</p>
   *          <ul>
   *             <li>
   *                <p>General Purpose SSD: <code>gp2</code>|<code>gp3</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>Provisioned IOPS SSD: <code>io1</code>|<code>io2</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>Throughput Optimized HDD: <code>st1</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>Cold HDD: <code>sc1</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>Magnetic: <code>standard</code>
   *                </p>
   *                <note>
   *                   <p>The magnetic volume type is not supported on Fargate.</p>
   *                </note>
   *             </li>
   *          </ul>
   * @public
   */
  volumeType?: string | undefined;

  /**
   * <p>The size of the volume in GiB. You must specify either a volume size or a snapshot ID.
   * 			If you specify a snapshot ID, the snapshot size is used for the volume size by default.
   * 			You can optionally specify a volume size greater than or equal to the snapshot size.
   * 			This parameter maps 1:1 with the <code>Size</code> parameter of the <a href="https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_CreateVolume.html">CreateVolume API</a> in the <i>Amazon EC2 API Reference</i>.</p>
   *          <p>The following are the supported volume size values for each volume type.</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>gp2</code> and <code>gp3</code>: 1-16,384</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>io1</code> and <code>io2</code>: 4-16,384</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>st1</code> and <code>sc1</code>: 125-16,384</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>standard</code>: 1-1,024</p>
   *             </li>
   *          </ul>
   * @public
   */
  sizeInGiB?: number | undefined;

  /**
   * <p>The snapshot that Amazon ECS uses to create the volume. You must specify either a snapshot
   * 			ID or a volume size. This parameter maps 1:1 with the <code>SnapshotId</code> parameter
   * 			of the <a href="https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_CreateVolume.html">CreateVolume API</a> in
   * 			the <i>Amazon EC2 API Reference</i>.</p>
   * @public
   */
  snapshotId?: string | undefined;

  /**
   * <p>The rate, in MiB/s, at which data is fetched from a snapshot of an existing Amazon EBS
   * 			volume to create a new volume for attachment to the task. This property can be specified
   * 			only if you specify a <code>snapshotId</code>. For more information, see <a href="https://docs.aws.amazon.com/ebs/latest/userguide/initalize-volume.html">Initialize Amazon EBS volumes</a> in the <i>Amazon EBS User
   * 				Guide</i>.</p>
   * @public
   */
  volumeInitializationRate?: number | undefined;

  /**
   * <p>The number of I/O operations per second (IOPS). For <code>gp3</code>,
   * 			<code>io1</code>, and <code>io2</code> volumes, this represents the number of IOPS that
   * 			are provisioned for the volume. For <code>gp2</code> volumes, this represents the
   * 			baseline performance of the volume and the rate at which the volume accumulates I/O
   * 			credits for bursting.</p>
   *          <p>The following are the supported values for each volume type.</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>gp3</code>: 3,000 - 16,000 IOPS</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>io1</code>: 100 - 64,000 IOPS</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>io2</code>: 100 - 256,000 IOPS</p>
   *             </li>
   *          </ul>
   *          <p>This parameter is required for <code>io1</code> and <code>io2</code> volume types. The
   * 			default for <code>gp3</code> volumes is <code>3,000 IOPS</code>. This parameter is not
   * 			supported for <code>st1</code>, <code>sc1</code>, or <code>standard</code> volume
   * 			types.</p>
   *          <p>This parameter maps 1:1 with the <code>Iops</code> parameter of the <a href="https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_CreateVolume.html">CreateVolume API</a> in the <i>Amazon EC2 API Reference</i>.</p>
   * @public
   */
  iops?: number | undefined;

  /**
   * <p>The throughput to provision for a volume, in MiB/s, with a maximum of 1,000 MiB/s.
   * 			This parameter maps 1:1 with the <code>Throughput</code> parameter of the <a href="https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_CreateVolume.html">CreateVolume API</a> in the <i>Amazon EC2 API Reference</i>.</p>
   *          <important>
   *             <p>This parameter is only supported for the <code>gp3</code> volume type.</p>
   *          </important>
   * @public
   */
  throughput?: number | undefined;

  /**
   * <p>The tags to apply to the volume. Amazon ECS applies service-managed tags by default. This
   * 			parameter maps 1:1 with the <code>TagSpecifications.N</code> parameter of the <a href="https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_CreateVolume.html">CreateVolume API</a> in the <i>Amazon EC2 API Reference</i>.</p>
   * @public
   */
  tagSpecifications?: EBSTagSpecification[] | undefined;

  /**
   * <p>The ARN of the IAM role to associate with this volume. This is the Amazon ECS
   * 			infrastructure IAM role that is used to manage your Amazon Web Services infrastructure. We recommend
   * 			using the Amazon ECS-managed <code>AmazonECSInfrastructureRolePolicyForVolumes</code> IAM
   * 			policy with this role. For more information, see <a href="https://docs.aws.amazon.com/AmazonECS/latest/developerguide/infrastructure_IAM_role.html">Amazon ECS
   * 				infrastructure IAM role</a> in the <i>Amazon ECS Developer
   * 			Guide</i>.</p>
   * @public
   */
  roleArn: string | undefined;

  /**
   * <p>The termination policy for the volume when the task exits. This provides a way to
   * 			control whether Amazon ECS terminates the Amazon EBS volume when the task stops.</p>
   * @public
   */
  terminationPolicy?: TaskManagedEBSVolumeTerminationPolicy | undefined;

  /**
   * <p>The Linux filesystem type for the volume. For volumes created from a snapshot, you
   * 			must specify the same filesystem type that the volume was using when the snapshot was
   * 			created. If there is a filesystem type mismatch, the task will fail to start.</p>
   *          <p>The available filesystem types are  <code>ext3</code>, <code>ext4</code>, and
   * 				<code>xfs</code>. If no value is specified, the <code>xfs</code> filesystem type is
   * 			used by default.</p>
   * @public
   */
  filesystemType?: TaskFilesystemType | undefined;
}

/**
 * <p>Configuration settings for the task volume that was <code>configuredAtLaunch</code>
 * 			that weren't set during <code>RegisterTaskDef</code>.</p>
 * @public
 */
export interface TaskVolumeConfiguration {
  /**
   * <p>The name of the volume. This value must match the volume name from the
   * 				<code>Volume</code> object in the task definition.</p>
   * @public
   */
  name: string | undefined;

  /**
   * <p>The configuration for the Amazon EBS volume that Amazon ECS creates and manages on your behalf.
   * 			These settings are used to create each Amazon EBS volume, with one volume created for each
   * 			task. The Amazon EBS volumes are visible in your account in the Amazon EC2 console once they are
   * 			created.</p>
   * @public
   */
  managedEBSVolume?: TaskManagedEBSVolumeConfiguration | undefined;
}

/**
 * @public
 */
export interface RunTaskRequest {
  /**
   * <p>The capacity provider strategy to use for the task.</p>
   *          <note>
   *             <p>If you want to use Amazon ECS Managed Instances, you must use the
   * 			<code>capacityProviderStrategy</code> request parameter and omit the
   * 			<code>launchType</code> request parameter.</p>
   *          </note>
   *          <p>If a <code>capacityProviderStrategy</code> is specified, the <code>launchType</code>
   * 			parameter must be omitted. If no <code>capacityProviderStrategy</code> or
   * 				<code>launchType</code> is specified, the
   * 				<code>defaultCapacityProviderStrategy</code> for the cluster is used.</p>
   *          <p>When you use cluster auto scaling, you must specify
   * 				<code>capacityProviderStrategy</code> and not <code>launchType</code>. </p>
   *          <p>A capacity provider strategy can contain a maximum of 20 capacity providers.</p>
   * @public
   */
  capacityProviderStrategy?: CapacityProviderStrategyItem[] | undefined;

  /**
   * <p>The short name or full Amazon Resource Name (ARN) of the cluster to run your task on.
   * 			If you do not specify a cluster, the default cluster is assumed.</p>
   *          <p>Each account receives a default cluster the first time you use the service, but you
   * 			may also create other clusters.</p>
   * @public
   */
  cluster?: string | undefined;

  /**
   * <p>The number of instantiations of the specified task to place on your cluster. You can
   * 			specify up to 10 tasks for each call.</p>
   * @public
   */
  count?: number | undefined;

  /**
   * <p>Specifies whether to use Amazon ECS managed tags for the task. For more information, see
   * 				<a href="https://docs.aws.amazon.com/AmazonECS/latest/developerguide/ecs-using-tags.html">Tagging Your Amazon ECS
   * 				Resources</a> in the <i>Amazon Elastic Container Service Developer Guide</i>.</p>
   * @public
   */
  enableECSManagedTags?: boolean | undefined;

  /**
   * <p>Determines whether to use the execute command functionality for the containers in this
   * 			task. If <code>true</code>, this enables execute command functionality on all containers
   * 			in the task.</p>
   *          <p>If <code>true</code>, then the task definition must have a task role, or you must
   * 			provide one as an override.</p>
   * @public
   */
  enableExecuteCommand?: boolean | undefined;

  /**
   * <p>The name of the task group to associate with the task. The default value is the family
   * 			name of the task definition (for example, <code>family:my-family-name</code>).</p>
   * @public
   */
  group?: string | undefined;

  /**
   * <p>The infrastructure to run your standalone task on. For more information, see <a href="https://docs.aws.amazon.com/AmazonECS/latest/developerguide/launch_types.html">Amazon ECS
   * 				launch types</a> in the <i>Amazon Elastic Container Service Developer Guide</i>.</p>
   *          <note>
   *             <p>If you want to use Amazon ECS Managed Instances, you must use the
   * 				<code>capacityProviderStrategy</code> request parameter and omit the
   * 				<code>launchType</code> request parameter.</p>
   *          </note>
   *          <p>The <code>FARGATE</code> launch type runs your tasks on Fargate On-Demand
   * 			infrastructure.</p>
   *          <note>
   *             <p>Fargate Spot infrastructure is available for use but a capacity provider
   * 				strategy must be used. For more information, see <a href="https://docs.aws.amazon.com/AmazonECS/latest/developerguide/fargate-capacity-providers.html">Fargate capacity providers</a> in the
   * 					<i>Amazon ECS Developer Guide</i>.</p>
   *          </note>
   *          <p>The <code>EC2</code> launch type runs your tasks on Amazon EC2 instances registered to your
   * 			cluster.</p>
   *          <p>The <code>EXTERNAL</code> launch type runs your tasks on your on-premises server or
   * 			virtual machine (VM) capacity registered to your cluster.</p>
   *          <p>A task can use either a launch type or a capacity provider strategy. If a
   * 				<code>launchType</code> is specified, the <code>capacityProviderStrategy</code>
   * 			parameter must be omitted.</p>
   *          <p>When you use cluster auto scaling, you must specify
   * 				<code>capacityProviderStrategy</code> and not <code>launchType</code>. </p>
   * @public
   */
  launchType?: LaunchType | undefined;

  /**
   * <p>The network configuration for the task. This parameter is required for task
   * 			definitions that use the <code>awsvpc</code> network mode to receive their own elastic
   * 			network interface, and it isn't supported for other network modes. For more information,
   * 			see <a href="https://docs.aws.amazon.com/AmazonECS/latest/developerguide/task-networking.html">Task networking</a>
   * 			in the <i>Amazon Elastic Container Service Developer Guide</i>.</p>
   * @public
   */
  networkConfiguration?: NetworkConfiguration | undefined;

  /**
   * <p>A list of container overrides in JSON format that specify the name of a container in
   * 			the specified task definition and the overrides it should receive. You can override the
   * 			default command for a container (that's specified in the task definition or Docker
   * 			image) with a <code>command</code> override. You can also override existing environment
   * 			variables (that are specified in the task definition or Docker image) on a container or
   * 			add new environment variables to it with an <code>environment</code> override.</p>
   *          <p>A total of 8192 characters are allowed for overrides. This limit includes the JSON
   * 			formatting characters of the override structure.</p>
   * @public
   */
  overrides?: TaskOverride | undefined;

  /**
   * <p>An array of placement constraint objects to use for the task. You can specify up to 10
   * 			constraints for each task (including constraints in the task definition and those
   * 			specified at runtime).</p>
   * @public
   */
  placementConstraints?: PlacementConstraint[] | undefined;

  /**
   * <p>The placement strategy objects to use for the task. You can specify a maximum of 5
   * 			strategy rules for each task.</p>
   * @public
   */
  placementStrategy?: PlacementStrategy[] | undefined;

  /**
   * <p>The platform version the task uses. A platform version is only specified for tasks
   * 			hosted on Fargate. If one isn't specified, the <code>LATEST</code>
   * 			platform version is used. For more information, see <a href="https://docs.aws.amazon.com/AmazonECS/latest/developerguide/platform_versions.html">Fargate platform
   * 				versions</a> in the <i>Amazon Elastic Container Service Developer Guide</i>.</p>
   * @public
   */
  platformVersion?: string | undefined;

  /**
   * <p>Specifies whether to propagate the tags from the task definition to the task. If no
   * 			value is specified, the tags aren't propagated. Tags can only be propagated to the task
   * 			during task creation. To add tags to a task after task creation, use the<a href="https://docs.aws.amazon.com/AmazonECS/latest/APIReference/API_TagResource.html">TagResource</a> API action.</p>
   *          <note>
   *             <p>An error will be received if you specify the <code>SERVICE</code> option when
   * 				running a task.</p>
   *          </note>
   * @public
   */
  propagateTags?: PropagateTags | undefined;

  /**
   * <p>This parameter is only used by Amazon ECS. It is not intended for use by customers.</p>
   * @public
   */
  referenceId?: string | undefined;

  /**
   * <p>An optional tag specified when a task is started. For example, if you automatically
   * 			trigger a task to run a batch process job, you could apply a unique identifier for that
   * 			job to your task with the <code>startedBy</code> parameter. You can then identify which
   * 			tasks belong to that job by filtering the results of a <a href="https://docs.aws.amazon.com/AmazonECS/latest/APIReference/API_ListTasks.html">ListTasks</a> call with
   * 			the <code>startedBy</code> value. Up to 128 letters (uppercase and lowercase), numbers,
   * 			hyphens (-), forward slash (/), and underscores (_) are allowed.</p>
   *          <p>If a task is started by an Amazon ECS service, then the <code>startedBy</code> parameter
   * 			contains the deployment ID of the service that starts it.</p>
   * @public
   */
  startedBy?: string | undefined;

  /**
   * <p>The metadata that you apply to the task to help you categorize and organize them. Each
   * 			tag consists of a key and an optional value, both of which you define.</p>
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
  tags?: Tag[] | undefined;

  /**
   * <p>The <code>family</code> and <code>revision</code> (<code>family:revision</code>) or
   * 			full ARN of the task definition to run. If a <code>revision</code> isn't specified,
   * 			the latest <code>ACTIVE</code> revision is used.</p>
   *          <p>The full ARN value must match the value that you specified as the
   * 				<code>Resource</code> of the principal's permissions policy.</p>
   *          <p>When you specify a task definition, you must either specify a specific revision, or
   * 			all revisions in the ARN.</p>
   *          <p>To specify a specific revision, include the revision number in the ARN. For example,
   * 			to specify revision 2, use
   * 				<code>arn:aws:ecs:us-east-1:111122223333:task-definition/TaskFamilyName:2</code>.</p>
   *          <p>To specify all revisions, use the wildcard (*) in the ARN. For example, to specify
   * 			all revisions, use
   * 				<code>arn:aws:ecs:us-east-1:111122223333:task-definition/TaskFamilyName:*</code>.</p>
   *          <p>For more information, see <a href="https://docs.aws.amazon.com/AmazonECS/latest/developerguide/security_iam_service-with-iam.html#security_iam_service-with-iam-id-based-policies-resources">Policy Resources for Amazon ECS</a> in the Amazon Elastic Container Service Developer Guide.</p>
   * @public
   */
  taskDefinition: string | undefined;

  /**
   * <p>An identifier that you provide to ensure the idempotency of the request. It must be
   * 			unique and is case sensitive. Up to 64 characters are allowed. The valid characters are
   * 			characters in the range of 33-126, inclusive. For more information, see <a href="https://docs.aws.amazon.com/AmazonECS/latest/APIReference/ECS_Idempotency.html">Ensuring idempotency</a>.</p>
   * @public
   */
  clientToken?: string | undefined;

  /**
   * <p>The details of the volume that was <code>configuredAtLaunch</code>. You can configure
   * 			the size, volumeType, IOPS, throughput, snapshot and encryption in <a href="https://docs.aws.amazon.com/AmazonECS/latest/APIReference/API_TaskManagedEBSVolumeConfiguration.html">TaskManagedEBSVolumeConfiguration</a>. The <code>name</code> of the volume must
   * 			match the <code>name</code> from the task definition.</p>
   * @public
   */
  volumeConfigurations?: TaskVolumeConfiguration[] | undefined;
}

/**
 * @public
 */
export interface RunTaskResponse {
  /**
   * <p>A full description of the tasks that were run. The tasks that were successfully placed
   * 			on your cluster are described here.</p>
   * @public
   */
  tasks?: Task[] | undefined;

  /**
   * <p>Any failures associated with the call.</p>
   *          <p>For information about how to address failures, see <a href="https://docs.aws.amazon.com/AmazonECS/latest/developerguide/service-event-messages.html#service-event-messages-list">Service event messages</a> and <a href="https://docs.aws.amazon.com/AmazonECS/latest/developerguide/api_failures_messages.html">API failure
   * 				reasons</a> in the <i>Amazon Elastic Container Service Developer Guide</i>.</p>
   * @public
   */
  failures?: Failure[] | undefined;
}

/**
 * @public
 */
export interface StartTaskRequest {
  /**
   * <p>The short name or full Amazon Resource Name (ARN) of the cluster where to start your task.
   * 			If you do not specify a cluster, the default cluster is assumed.</p>
   * @public
   */
  cluster?: string | undefined;

  /**
   * <p>The container instance IDs or full ARN entries for the container instances where you
   * 			would like to place your task. You can specify up to 10 container instances.</p>
   * @public
   */
  containerInstances: string[] | undefined;

  /**
   * <p>Specifies whether to use Amazon ECS managed tags for the task. For more information, see
   * 				<a href="https://docs.aws.amazon.com/AmazonECS/latest/developerguide/ecs-using-tags.html">Tagging Your Amazon ECS
   * 				Resources</a> in the <i>Amazon Elastic Container Service Developer Guide</i>.</p>
   * @public
   */
  enableECSManagedTags?: boolean | undefined;

  /**
   * <p>Whether or not the execute command functionality is turned on for the task. If
   * 				<code>true</code>, this turns on the execute command functionality on all containers
   * 			in the task.</p>
   * @public
   */
  enableExecuteCommand?: boolean | undefined;

  /**
   * <p>The name of the task group to associate with the task. The default value is the family
   * 			name of the task definition (for example, family:my-family-name).</p>
   * @public
   */
  group?: string | undefined;

  /**
   * <p>The VPC subnet and security group configuration for tasks that receive their own
   *             elastic network interface by using the <code>awsvpc</code> networking mode.</p>
   * @public
   */
  networkConfiguration?: NetworkConfiguration | undefined;

  /**
   * <p>A list of container overrides in JSON format that specify the name of a container in
   * 			the specified task definition and the overrides it receives. You can override the
   * 			default command for a container (that's specified in the task definition or Docker
   * 			image) with a <code>command</code> override. You can also override existing environment
   * 			variables (that are specified in the task definition or Docker image) on a container or
   * 			add new environment variables to it with an <code>environment</code> override.</p>
   *          <note>
   *             <p>A total of 8192 characters are allowed for overrides. This limit includes the JSON
   * 				formatting characters of the override structure.</p>
   *          </note>
   * @public
   */
  overrides?: TaskOverride | undefined;

  /**
   * <p>Specifies whether to propagate the tags from the task definition or the service to the
   * 			task. If no value is specified, the tags aren't propagated.</p>
   * @public
   */
  propagateTags?: PropagateTags | undefined;

  /**
   * <p>This parameter is only used by Amazon ECS. It is not intended for use by customers.</p>
   * @public
   */
  referenceId?: string | undefined;

  /**
   * <p>An optional tag specified when a task is started. For example, if you automatically
   * 			trigger a task to run a batch process job, you could apply a unique identifier for that
   * 			job to your task with the <code>startedBy</code> parameter. You can then identify which
   * 			tasks belong to that job by filtering the results of a <a href="https://docs.aws.amazon.com/AmazonECS/latest/APIReference/API_ListTasks.html">ListTasks</a> call with
   * 			the <code>startedBy</code> value. Up to 36 letters (uppercase and lowercase), numbers,
   * 			hyphens (-), forward slash (/), and underscores (_) are allowed.</p>
   *          <p>If a task is started by an Amazon ECS service, the <code>startedBy</code> parameter
   * 			contains the deployment ID of the service that starts it.</p>
   * @public
   */
  startedBy?: string | undefined;

  /**
   * <p>The metadata that you apply to the task to help you categorize and organize them. Each
   * 			tag consists of a key and an optional value, both of which you define.</p>
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
  tags?: Tag[] | undefined;

  /**
   * <p>The <code>family</code> and <code>revision</code> (<code>family:revision</code>) or
   * 			full ARN of the task definition to start. If a <code>revision</code> isn't specified,
   * 			the latest <code>ACTIVE</code> revision is used.</p>
   * @public
   */
  taskDefinition: string | undefined;

  /**
   * <p>The details of the volume that was <code>configuredAtLaunch</code>. You can configure
   * 			the size, volumeType, IOPS, throughput, snapshot and encryption in <a href="https://docs.aws.amazon.com/AmazonECS/latest/APIReference/API_TaskManagedEBSVolumeConfiguration.html">TaskManagedEBSVolumeConfiguration</a>. The <code>name</code> of the volume must
   * 			match the <code>name</code> from the task definition.</p>
   * @public
   */
  volumeConfigurations?: TaskVolumeConfiguration[] | undefined;
}

/**
 * @public
 */
export interface StartTaskResponse {
  /**
   * <p>A full description of the tasks that were started. Each task that was successfully
   * 			placed on your container instances is described.</p>
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
 * <p>The service deploy ARN that you specified in the <code>StopServiceDeployment</code> doesn't exist. You can use <code>ListServiceDeployments</code> to retrieve the service deployment ARNs.</p>
 * @public
 */
export class ServiceDeploymentNotFoundException extends __BaseException {
  readonly name: "ServiceDeploymentNotFoundException" = "ServiceDeploymentNotFoundException";
  readonly $fault: "client" = "client";
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<ServiceDeploymentNotFoundException, __BaseException>) {
    super({
      name: "ServiceDeploymentNotFoundException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, ServiceDeploymentNotFoundException.prototype);
  }
}

/**
 * @public
 * @enum
 */
export const StopServiceDeploymentStopType = {
  ABORT: "ABORT",
  ROLLBACK: "ROLLBACK",
} as const;

/**
 * @public
 */
export type StopServiceDeploymentStopType =
  (typeof StopServiceDeploymentStopType)[keyof typeof StopServiceDeploymentStopType];

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
   * <p>How you want Amazon ECS to stop the service. </p>
   *          <p>The valid values are <code>ROLLBACK</code>.</p>
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
export interface StopTaskRequest {
  /**
   * <p>The short name or full Amazon Resource Name (ARN) of the cluster that hosts the task to stop.
   * 			If you do not specify a cluster, the default cluster is assumed.</p>
   * @public
   */
  cluster?: string | undefined;

  /**
   * <p>Thefull Amazon Resource Name (ARN) of the task.</p>
   * @public
   */
  task: string | undefined;

  /**
   * <p>An optional message specified when a task is stopped. For example, if you're using a
   * 			custom scheduler, you can use this parameter to specify the reason for stopping the task
   * 			here, and the message appears in subsequent <a href="https://docs.aws.amazon.com/AmazonECS/latest/APIReference/API_DescribeTasks.html">DescribeTasks</a>>
   * 			API operations on this task.</p>
   * @public
   */
  reason?: string | undefined;
}

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
 * <p>The updated launch template configuration for Amazon ECS Managed Instances. You can modify the instance profile, network configuration, storage settings, and instance requirements. Changes apply to new instances launched after the update.</p>
 *          <p>For more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/ec2-launch-templates.html">Store instance launch parameters in Amazon EC2 launch templates</a> in the <i>Amazon EC2 User Guide</i>.</p>
 * @public
 */
export interface InstanceLaunchTemplateUpdate {
  /**
   * <p>The updated Amazon Resource Name (ARN) of the instance profile. The new instance profile must have the necessary permissions for your tasks.</p>
   *          <p>For more information, see <a href="https://docs.aws.amazon.com/AmazonECS/latest/developerguide/managed-instances-instance-profile.html">Amazon ECS instance profile for Managed Instances</a> in the <i>Amazon ECS Developer Guide</i>.
   * 		</p>
   * @public
   */
  ec2InstanceProfileArn?: string | undefined;

  /**
   * <p>The updated network configuration for Amazon ECS Managed Instances. Changes to subnets and security groups affect new instances launched after the update.</p>
   * @public
   */
  networkConfiguration?: ManagedInstancesNetworkConfiguration | undefined;

  /**
   * <p>The updated storage configuration for Amazon ECS Managed Instances. Changes to storage settings apply to new instances launched after the update.</p>
   * @public
   */
  storageConfiguration?: ManagedInstancesStorageConfiguration | undefined;

  /**
   * <p>CloudWatch provides two categories of monitoring: basic monitoring and detailed monitoring. By default, your managed instance is configured for basic monitoring. You can optionally enable detailed monitoring to help you more quickly identify and act on operational issues. You can enable or turn off detailed monitoring at launch or when the managed instance is running or stopped. For more information, see <a href="https://docs.aws.amazon.com/AmazonECS/latest/developerguide/detailed-monitoring-managed-instances.html">Detailed monitoring  for Amazon ECS Managed Instances</a> in the Amazon ECS Developer Guide.</p>
   * @public
   */
  monitoring?: ManagedInstancesMonitoringOptions | undefined;

  /**
   * <p>The updated instance requirements for attribute-based instance type selection. Changes to instance requirements affect which instance types Amazon ECS selects for new instances.</p>
   * @public
   */
  instanceRequirements?: InstanceRequirementsRequest | undefined;
}

/**
 * <p>The updated configuration for a Amazon ECS Managed Instances provider. You can modify the infrastructure role, instance launch template, and tag propagation settings. Changes apply to new instances launched after the update.</p>
 * @public
 */
export interface UpdateManagedInstancesProviderConfiguration {
  /**
   * <p>The updated Amazon Resource Name (ARN) of the infrastructure role. The new role must have the necessary permissions to manage instances and access required Amazon Web Services services.</p>
   *          <p>For more information, see <a href="https://docs.aws.amazon.com/AmazonECS/latest/developerguide/infrastructure_IAM_role.html">Amazon ECS infrastructure IAM role</a> in the <i>Amazon ECS Developer Guide</i>.</p>
   * @public
   */
  infrastructureRoleArn: string | undefined;

  /**
   * <p>The updated launch template configuration. Changes to the launch template affect new instances launched after the update, while existing instances continue to use their original configuration.</p>
   * @public
   */
  instanceLaunchTemplate: InstanceLaunchTemplateUpdate | undefined;

  /**
   * <p>The updated tag propagation setting. When changed, this affects only new instances launched after the update.</p>
   * @public
   */
  propagateTags?: PropagateMITags | undefined;
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
   * <p>The name of the cluster that contains the capacity provider to update. Managed instances capacity providers are cluster-scoped and can only be updated within their associated cluster.</p>
   * @public
   */
  cluster?: string | undefined;

  /**
   * <p>An object that represent the parameters to update for the Auto Scaling group capacity
   * 			provider.</p>
   * @public
   */
  autoScalingGroupProvider?: AutoScalingGroupProviderUpdate | undefined;

  /**
   * <p>The updated configuration for the Amazon ECS Managed Instances provider. You can modify the infrastructure role, instance launch template, and tag propagation settings. Changes take effect for new instances launched after the update.</p>
   * @public
   */
  managedInstancesProvider?: UpdateManagedInstancesProviderConfiguration | undefined;
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
   *          <p>This parameter doesn't trigger a new service deployment.</p>
   * @public
   */
  desiredCount?: number | undefined;

  /**
   * <p>The <code>family</code> and <code>revision</code> (<code>family:revision</code>) or
   * 			full ARN of the task definition to run in your service. If a <code>revision</code> is
   * 			not specified, the latest <code>ACTIVE</code> revision is used. If you modify the task
   * 			definition with <code>UpdateService</code>, Amazon ECS spawns a task with the new version of
   * 			the task definition and then stops an old task after the new version is running.</p>
   *          <p>This parameter triggers a new service deployment.</p>
   * @public
   */
  taskDefinition?: string | undefined;

  /**
   * <p>The details of a capacity provider strategy. You can set a capacity provider when you
   * 			create a cluster, run a task, or update a service.</p>
   *          <note>
   *             <p>If you want to use Amazon ECS Managed Instances, you must use the
   * 				<code>capacityProviderStrategy</code> request parameter.</p>
   *          </note>
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
   *          <p>This parameter doesn't trigger a new service deployment.</p>
   * @public
   */
  capacityProviderStrategy?: CapacityProviderStrategyItem[] | undefined;

  /**
   * <p>Optional deployment parameters that control how many tasks run during the deployment
   * 			and the ordering of stopping and starting tasks.</p>
   *          <p>This parameter doesn't trigger a new service deployment.</p>
   * @public
   */
  deploymentConfiguration?: DeploymentConfiguration | undefined;

  /**
   * <p>Indicates whether to use Availability Zone rebalancing for the service.</p>
   *          <p>For more information, see <a href="https://docs.aws.amazon.com/AmazonECS/latest/developerguide/service-rebalancing.html">Balancing an Amazon ECS service across Availability Zones</a> in
   * 			the <i>
   *                <i>Amazon Elastic Container Service Developer Guide</i>
   *             </i>.</p>
   *          <p>The default behavior of <code>AvailabilityZoneRebalancing</code> differs between create and update requests:</p>
   *          <ul>
   *             <li>
   *                <p>For create service requests, when no value is specified for <code>AvailabilityZoneRebalancing</code>, Amazon ECS defaults the value to <code>ENABLED</code>.</p>
   *             </li>
   *             <li>
   *                <p>For update service requests, when no value is specified for <code>AvailabilityZoneRebalancing</code>, Amazon ECS defaults to the existing service’s <code>AvailabilityZoneRebalancing</code> value. If the service never had an <code>AvailabilityZoneRebalancing</code> value set, Amazon ECS treats this as <code>DISABLED</code>.</p>
   *             </li>
   *          </ul>
   *          <p>This parameter doesn't trigger a new service deployment.</p>
   * @public
   */
  availabilityZoneRebalancing?: AvailabilityZoneRebalancing | undefined;

  /**
   * <p>An object representing the network configuration for the service.</p>
   *          <p>This parameter triggers a new service deployment.</p>
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
   *          <p>This parameter doesn't trigger a new service deployment.</p>
   * @public
   */
  placementConstraints?: PlacementConstraint[] | undefined;

  /**
   * <p>The task placement strategy objects to update the service to use. If no value is
   * 			specified, the existing placement strategy for the service will remain unchanged. If
   * 			this value is specified, it will override the existing placement strategy defined for
   * 			the service. To remove an existing placement strategy, specify an empty object.</p>
   *          <p>You can specify a maximum of five strategy rules for each service.</p>
   *          <p>This parameter doesn't trigger a new service deployment.</p>
   * @public
   */
  placementStrategy?: PlacementStrategy[] | undefined;

  /**
   * <p>The platform version that your tasks in the service run on. A platform version is only
   * 			specified for tasks using the Fargate launch type. If a platform version
   * 			is not specified, the <code>LATEST</code> platform version is used. For more
   * 			information, see <a href="https://docs.aws.amazon.com/AmazonECS/latest/developerguide/platform_versions.html">Fargate Platform
   * 				Versions</a> in the <i>Amazon Elastic Container Service Developer Guide</i>.</p>
   *          <p>This parameter triggers a new service deployment.</p>
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
   *          <p>If your service has more running tasks than desired, unhealthy tasks in the grace period might be stopped to reach the desired count.</p>
   *          <p>This parameter doesn't trigger a new service deployment.</p>
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
   *          <p>This parameter doesn't trigger a new service deployment.</p>
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
   *          <p>This parameter doesn't trigger a new service deployment.</p>
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
   *          <p>This parameter triggers a new service deployment.</p>
   * @public
   */
  loadBalancers?: LoadBalancer[] | undefined;

  /**
   * <p>Determines whether to propagate the tags from the task definition or the service to
   * 			the task. If no value is specified, the tags aren't propagated.</p>
   *          <p>Only tasks launched after the update will reflect the update. To update the tags on
   * 			all tasks, set <code>forceNewDeployment</code> to <code>true</code>, so that Amazon ECS
   * 			starts new tasks with the updated tags.</p>
   *          <p>This parameter doesn't trigger a new service deployment.</p>
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
   *          <p>This parameter triggers a new service deployment.</p>
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
   *          <p>This parameter triggers a new service deployment.</p>
   * @public
   */
  serviceConnectConfiguration?: ServiceConnectConfiguration | undefined;

  /**
   * <p>The details of the volume that was <code>configuredAtLaunch</code>. You can configure
   * 			the size, volumeType, IOPS, throughput, snapshot and encryption in <a href="https://docs.aws.amazon.com/AmazonECS/latest/APIReference/API_ServiceManagedEBSVolumeConfiguration.html">ServiceManagedEBSVolumeConfiguration</a>. The <code>name</code> of the volume
   * 			must match the <code>name</code> from the task definition. If set to null, no new
   * 			deployment is triggered. Otherwise, if this configuration differs from the existing one,
   * 			it triggers a new deployment.</p>
   *          <p>This parameter triggers a new service deployment.</p>
   * @public
   */
  volumeConfigurations?: ServiceVolumeConfiguration[] | undefined;

  /**
   * <p>An object representing the VPC Lattice configuration for the service being
   * 			updated.</p>
   *          <p>This parameter triggers a new service deployment.</p>
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
