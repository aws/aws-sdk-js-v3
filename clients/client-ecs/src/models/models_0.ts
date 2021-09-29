import { SENSITIVE_STRING } from "@aws-sdk/smithy-client";
import { MetadataBearer as $MetadataBearer, SmithyException as __SmithyException } from "@aws-sdk/types";

/**
 * <p>You do not have authorization to perform the requested action.</p>
 */
export interface AccessDeniedException extends __SmithyException, $MetadataBearer {
  name: "AccessDeniedException";
  $fault: "client";
  message?: string;
}

export namespace AccessDeniedException {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: AccessDeniedException): any => ({
    ...obj,
  });
}

export enum AgentUpdateStatus {
  FAILED = "FAILED",
  PENDING = "PENDING",
  STAGED = "STAGED",
  STAGING = "STAGING",
  UPDATED = "UPDATED",
  UPDATING = "UPDATING",
}

/**
 * <p>These errors are usually caused by a client action, such as using an action or
 * 			resource on behalf of a user that doesn't have permissions to use the action or
 * 			resource, or specifying an identifier that is not valid.</p>
 */
export interface ClientException extends __SmithyException, $MetadataBearer {
  name: "ClientException";
  $fault: "client";
  message?: string;
}

export namespace ClientException {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ClientException): any => ({
    ...obj,
  });
}

export enum ManagedScalingStatus {
  DISABLED = "DISABLED",
  ENABLED = "ENABLED",
}

/**
 * <p>The managed scaling settings for the Auto Scaling group capacity provider.</p>
 * 		       <p>When managed scaling is enabled, Amazon ECS manages the scale-in and scale-out actions of
 * 			the Auto Scaling group. Amazon ECS manages a target tracking scaling policy using an
 * 			Amazon ECS-managed CloudWatch metric with the specified <code>targetCapacity</code> value as the
 * 			target value for the metric. For more information, see <a href="https://docs.aws.amazon.com/AmazonECS/latest/developerguide/asg-capacity-providers.html#asg-capacity-providers-managed-scaling">Using Managed Scaling</a> in the <i>Amazon Elastic Container Service Developer Guide</i>.</p>
 * 		       <p>If managed scaling is disabled, the user must manage the scaling of the Auto Scaling
 * 			group.</p>
 */
export interface ManagedScaling {
  /**
   * <p>Whether or not to enable managed scaling for the capacity provider.</p>
   */
  status?: ManagedScalingStatus | string;

  /**
   * <p>The target capacity value for the capacity provider. The specified value must be
   * 			greater than <code>0</code> and less than or equal to <code>100</code>. A value of
   * 				<code>100</code> will result in the Amazon EC2 instances in your Auto Scaling group being
   * 			completely utilized.</p>
   */
  targetCapacity?: number;

  /**
   * <p>The minimum number of container instances that Amazon ECS will scale in or scale out at one
   * 			time. If this parameter is omitted, the default value of <code>1</code> is used.</p>
   */
  minimumScalingStepSize?: number;

  /**
   * <p>The maximum number of container instances that Amazon ECS will scale in or scale out at one
   * 			time. If this parameter is omitted, the default value of <code>10000</code> is
   * 			used.</p>
   */
  maximumScalingStepSize?: number;

  /**
   * <p>The period of time, in seconds, after a newly launched Amazon EC2 instance can contribute
   * 			to CloudWatch metrics for Auto Scaling group. If this parameter is omitted, the default value
   * 			of <code>300</code> seconds is used.</p>
   */
  instanceWarmupPeriod?: number;
}

export namespace ManagedScaling {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ManagedScaling): any => ({
    ...obj,
  });
}

export enum ManagedTerminationProtection {
  DISABLED = "DISABLED",
  ENABLED = "ENABLED",
}

/**
 * <p>The details of the Auto Scaling group for the capacity provider.</p>
 */
export interface AutoScalingGroupProvider {
  /**
   * <p>The Amazon Resource Name (ARN) that identifies the Auto Scaling group.</p>
   */
  autoScalingGroupArn: string | undefined;

  /**
   * <p>The managed scaling settings for the Auto Scaling group capacity provider.</p>
   */
  managedScaling?: ManagedScaling;

  /**
   * <p>The managed termination protection setting to use for the Auto Scaling group capacity
   * 			provider. This determines whether the Auto Scaling group has managed termination
   * 			protection.</p>
   * 		       <important>
   * 			         <p>When using managed termination protection, managed scaling must also be used
   * 				otherwise managed termination protection will not work.</p>
   * 		       </important>
   * 		       <p>When managed termination protection is enabled, Amazon ECS prevents the Amazon EC2 instances in
   * 			an Auto Scaling group that contain tasks from being terminated during a scale-in action.
   * 			The Auto Scaling group and each instance in the Auto Scaling group must have instance
   * 			protection from scale-in actions enabled as well. For more information, see <a href="https://docs.aws.amazon.com/autoscaling/ec2/userguide/as-instance-termination.html#instance-protection">Instance Protection</a> in the <i>Auto Scaling User Guide</i>.</p>
   * 		       <p>When managed termination protection is disabled, your Amazon EC2 instances are not
   * 			protected from termination when the Auto Scaling group scales in.</p>
   */
  managedTerminationProtection?: ManagedTerminationProtection | string;
}

export namespace AutoScalingGroupProvider {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: AutoScalingGroupProvider): any => ({
    ...obj,
  });
}

/**
 * <p>The metadata that you apply to a resource to help you categorize and organize them.
 * 			Each tag consists of a key and an optional value, both of which you define.</p>
 * 		       <p>The following basic restrictions apply to tags:</p>
 *         <ul>
 *             <li>
 *                 <p>Maximum number of tags per resource - 50</p>
 *             </li>
 *             <li>
 *                 <p>For each resource, each tag key must be unique, and each tag key can have only
 *                     one value.</p>
 *             </li>
 *             <li>
 *                 <p>Maximum key length - 128 Unicode characters in UTF-8</p>
 *             </li>
 *             <li>
 *                 <p>Maximum value length - 256 Unicode characters in UTF-8</p>
 *             </li>
 *             <li>
 *                 <p>If your tagging schema is used across multiple services and resources,
 *                     remember that other services may have restrictions on allowed characters.
 *                     Generally allowed characters are: letters, numbers, and spaces representable in
 *                     UTF-8, and the following characters: + - = . _ : / @.</p>
 *             </li>
 *             <li>
 *                 <p>Tag keys and values are case-sensitive.</p>
 *             </li>
 *             <li>
 *                 <p>Do not use <code>aws:</code>, <code>AWS:</code>, or any upper or lowercase
 *                     combination of such as a prefix for either keys or values as it is reserved for
 *                     Amazon Web Services use. You cannot edit or delete tag keys or values with this prefix. Tags with
 *                     this prefix do not count against your tags per resource limit.</p>
 *             </li>
 *          </ul>
 */
export interface Tag {
  /**
   * <p>One part of a key-value pair that make up a tag. A <code>key</code> is a general label
   * 			that acts like a category for more specific tag values.</p>
   */
  key?: string;

  /**
   * <p>The optional part of a key-value pair that make up a tag. A <code>value</code> acts as
   * 			a descriptor within a tag category (key).</p>
   */
  value?: string;
}

export namespace Tag {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: Tag): any => ({
    ...obj,
  });
}

export interface CreateCapacityProviderRequest {
  /**
   * <p>The name of the capacity provider. Up to 255 characters are allowed, including letters
   * 			(upper and lowercase), numbers, underscores, and hyphens. The name cannot be prefixed
   * 			with "<code>aws</code>", "<code>ecs</code>", or "<code>fargate</code>".</p>
   */
  name: string | undefined;

  /**
   * <p>The details of the Auto Scaling group for the capacity provider.</p>
   */
  autoScalingGroupProvider: AutoScalingGroupProvider | undefined;

  /**
   * <p>The metadata that you apply to the capacity provider to help you categorize and
   * 			organize them. Each tag consists of a key and an optional value, both of which you
   * 			define.</p>
   *          <p>The following basic restrictions apply to tags:</p>
   *         <ul>
   *             <li>
   *                 <p>Maximum number of tags per resource - 50</p>
   *             </li>
   *             <li>
   *                 <p>For each resource, each tag key must be unique, and each tag key can have only
   *                     one value.</p>
   *             </li>
   *             <li>
   *                 <p>Maximum key length - 128 Unicode characters in UTF-8</p>
   *             </li>
   *             <li>
   *                 <p>Maximum value length - 256 Unicode characters in UTF-8</p>
   *             </li>
   *             <li>
   *                 <p>If your tagging schema is used across multiple services and resources,
   *                     remember that other services may have restrictions on allowed characters.
   *                     Generally allowed characters are: letters, numbers, and spaces representable in
   *                     UTF-8, and the following characters: + - = . _ : / @.</p>
   *             </li>
   *             <li>
   *                 <p>Tag keys and values are case-sensitive.</p>
   *             </li>
   *             <li>
   *                 <p>Do not use <code>aws:</code>, <code>AWS:</code>, or any upper or lowercase
   *                     combination of such as a prefix for either keys or values as it is reserved for
   *                     Amazon Web Services use. You cannot edit or delete tag keys or values with this prefix. Tags with
   *                     this prefix do not count against your tags per resource limit.</p>
   *             </li>
   *          </ul>
   */
  tags?: Tag[];
}

export namespace CreateCapacityProviderRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: CreateCapacityProviderRequest): any => ({
    ...obj,
  });
}

export enum CapacityProviderStatus {
  ACTIVE = "ACTIVE",
  INACTIVE = "INACTIVE",
}

export enum CapacityProviderUpdateStatus {
  DELETE_COMPLETE = "DELETE_COMPLETE",
  DELETE_FAILED = "DELETE_FAILED",
  DELETE_IN_PROGRESS = "DELETE_IN_PROGRESS",
  UPDATE_COMPLETE = "UPDATE_COMPLETE",
  UPDATE_FAILED = "UPDATE_FAILED",
  UPDATE_IN_PROGRESS = "UPDATE_IN_PROGRESS",
}

/**
 * <p>The details of a capacity provider.</p>
 */
export interface CapacityProvider {
  /**
   * <p>The Amazon Resource Name (ARN) that identifies the capacity provider.</p>
   */
  capacityProviderArn?: string;

  /**
   * <p>The name of the capacity provider.</p>
   */
  name?: string;

  /**
   * <p>The current status of the capacity provider. Only capacity providers in an
   * 				<code>ACTIVE</code> state can be used in a cluster. When a capacity provider is
   * 			successfully deleted, it will have an <code>INACTIVE</code> status.</p>
   */
  status?: CapacityProviderStatus | string;

  /**
   * <p>The Auto Scaling group settings for the capacity provider.</p>
   */
  autoScalingGroupProvider?: AutoScalingGroupProvider;

  /**
   * <p>The update status of the capacity provider. The following are the possible states that
   * 			will be returned.</p>
   * 		       <dl>
   *             <dt>DELETE_IN_PROGRESS</dt>
   *             <dd>
   * 					          <p>The capacity provider is in the process of being deleted.</p>
   * 				        </dd>
   *             <dt>DELETE_COMPLETE</dt>
   *             <dd>
   * 					          <p>The capacity provider has been successfully deleted and will have an
   * 							<code>INACTIVE</code> status.</p>
   * 				        </dd>
   *             <dt>DELETE_FAILED</dt>
   *             <dd>
   * 					          <p>The capacity provider was unable to be deleted. The update status reason
   * 						will provide further details about why the delete failed.</p>
   * 				        </dd>
   *          </dl>
   */
  updateStatus?: CapacityProviderUpdateStatus | string;

  /**
   * <p>The update status reason. This provides further details about the update status for
   * 			the capacity provider.</p>
   */
  updateStatusReason?: string;

  /**
   * <p>The metadata that you apply to the capacity provider to help you categorize and
   * 			organize it. Each tag consists of a key and an optional value, both of which you
   * 			define.</p>
   *          <p>The following basic restrictions apply to tags:</p>
   *         <ul>
   *             <li>
   *                 <p>Maximum number of tags per resource - 50</p>
   *             </li>
   *             <li>
   *                 <p>For each resource, each tag key must be unique, and each tag key can have only
   *                     one value.</p>
   *             </li>
   *             <li>
   *                 <p>Maximum key length - 128 Unicode characters in UTF-8</p>
   *             </li>
   *             <li>
   *                 <p>Maximum value length - 256 Unicode characters in UTF-8</p>
   *             </li>
   *             <li>
   *                 <p>If your tagging schema is used across multiple services and resources,
   *                     remember that other services may have restrictions on allowed characters.
   *                     Generally allowed characters are: letters, numbers, and spaces representable in
   *                     UTF-8, and the following characters: + - = . _ : / @.</p>
   *             </li>
   *             <li>
   *                 <p>Tag keys and values are case-sensitive.</p>
   *             </li>
   *             <li>
   *                 <p>Do not use <code>aws:</code>, <code>AWS:</code>, or any upper or lowercase
   *                     combination of such as a prefix for either keys or values as it is reserved for
   *                     Amazon Web Services use. You cannot edit or delete tag keys or values with this prefix. Tags with
   *                     this prefix do not count against your tags per resource limit.</p>
   *             </li>
   *          </ul>
   */
  tags?: Tag[];
}

export namespace CapacityProvider {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: CapacityProvider): any => ({
    ...obj,
  });
}

export interface CreateCapacityProviderResponse {
  /**
   * <p>The full description of the new capacity provider.</p>
   */
  capacityProvider?: CapacityProvider;
}

export namespace CreateCapacityProviderResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: CreateCapacityProviderResponse): any => ({
    ...obj,
  });
}

/**
 * <p>The specified parameter is invalid. Review the available parameters for the API
 * 			request.</p>
 */
export interface InvalidParameterException extends __SmithyException, $MetadataBearer {
  name: "InvalidParameterException";
  $fault: "client";
  message?: string;
}

export namespace InvalidParameterException {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: InvalidParameterException): any => ({
    ...obj,
  });
}

/**
 * <p>The limit for the resource has been exceeded.</p>
 */
export interface LimitExceededException extends __SmithyException, $MetadataBearer {
  name: "LimitExceededException";
  $fault: "client";
  message?: string;
}

export namespace LimitExceededException {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: LimitExceededException): any => ({
    ...obj,
  });
}

/**
 * <p>These errors are usually caused by a server issue.</p>
 */
export interface ServerException extends __SmithyException, $MetadataBearer {
  name: "ServerException";
  $fault: "server";
  message?: string;
}

export namespace ServerException {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ServerException): any => ({
    ...obj,
  });
}

/**
 * <p>There is already a current Amazon ECS container agent update in progress on the specified
 * 			container instance. If the container agent becomes disconnected while it is in a
 * 			transitional stage, such as <code>PENDING</code> or <code>STAGING</code>, the update
 * 			process can get stuck in that state. However, when the agent reconnects, it resumes
 * 			where it stopped previously.</p>
 */
export interface UpdateInProgressException extends __SmithyException, $MetadataBearer {
  name: "UpdateInProgressException";
  $fault: "client";
  message?: string;
}

export namespace UpdateInProgressException {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: UpdateInProgressException): any => ({
    ...obj,
  });
}

/**
 * <p>The log configuration for the results of the execute command actions. The logs can be
 * 			sent to CloudWatch Logs or an Amazon S3 bucket.</p>
 */
export interface ExecuteCommandLogConfiguration {
  /**
   * <p>The name of the CloudWatch log group to send logs to.</p>
   * 		       <note>
   * 			         <p>The CloudWatch log group must already be created.</p>
   * 		       </note>
   */
  cloudWatchLogGroupName?: string;

  /**
   * <p>Whether or not to enable encryption on the CloudWatch logs. If not specified,
   * 			encryption will be disabled.</p>
   */
  cloudWatchEncryptionEnabled?: boolean;

  /**
   * <p>The name of the S3 bucket to send logs to.</p>
   * 		       <note>
   * 			         <p>The S3 bucket must already be created.</p>
   * 		       </note>
   */
  s3BucketName?: string;

  /**
   * <p>Whether or not to enable encryption on the CloudWatch logs. If not specified,
   * 			encryption will be disabled.</p>
   */
  s3EncryptionEnabled?: boolean;

  /**
   * <p>An optional folder in the S3 bucket to place logs in.</p>
   */
  s3KeyPrefix?: string;
}

export namespace ExecuteCommandLogConfiguration {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ExecuteCommandLogConfiguration): any => ({
    ...obj,
  });
}

export enum ExecuteCommandLogging {
  DEFAULT = "DEFAULT",
  NONE = "NONE",
  OVERRIDE = "OVERRIDE",
}

/**
 * <p>The details of the execute command configuration.</p>
 */
export interface ExecuteCommandConfiguration {
  /**
   * <p>Specify an Key Management Service key ID to encrypt the data between the local client
   * 			and the container.</p>
   */
  kmsKeyId?: string;

  /**
   * <p>The log setting to use for redirecting logs for your execute command results. The
   * 			following log settings are available.</p>
   * 		       <ul>
   *             <li>
   * 				           <p>
   *                   <code>NONE</code>: The execute command session is not logged.</p>
   * 			         </li>
   *             <li>
   * 				           <p>
   *                   <code>DEFAULT</code>: The <code>awslogs</code> configuration in the task
   * 					definition is used. If no logging parameter is specified, it defaults to this
   * 					value. If no <code>awslogs</code> log driver is configured in the task
   * 					definition, the output won't be logged.</p>
   * 			         </li>
   *             <li>
   * 				           <p>
   *                   <code>OVERRIDE</code>: Specify the logging details as a part of
   * 						<code>logConfiguration</code>. If the <code>OVERRIDE</code> logging option
   * 					is specified, the <code>logConfiguration</code> is required.</p>
   * 			         </li>
   *          </ul>
   */
  logging?: ExecuteCommandLogging | string;

  /**
   * <p>The log configuration for the results of the execute command actions. The logs can be
   * 			sent to CloudWatch Logs or an Amazon S3 bucket. When <code>logging=OVERRIDE</code> is
   * 			specified, a <code>logConfiguration</code> must be provided.</p>
   */
  logConfiguration?: ExecuteCommandLogConfiguration;
}

export namespace ExecuteCommandConfiguration {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ExecuteCommandConfiguration): any => ({
    ...obj,
  });
}

/**
 * <p>The execute command configuration for the cluster.</p>
 */
export interface ClusterConfiguration {
  /**
   * <p>The details of the execute command configuration.</p>
   */
  executeCommandConfiguration?: ExecuteCommandConfiguration;
}

export namespace ClusterConfiguration {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ClusterConfiguration): any => ({
    ...obj,
  });
}

/**
 * <p>The details of a capacity provider strategy. A capacity provider strategy can be set
 * 			when using the <a>RunTask</a> or <a>CreateCluster</a> APIs or as
 * 			the default capacity provider strategy for a cluster with the <a>CreateCluster</a> API.</p>
 * 		       <p>Only capacity providers that are already associated with a cluster and have an
 * 				<code>ACTIVE</code> or <code>UPDATING</code> status can be used in a capacity
 * 			provider strategy. The <a>PutClusterCapacityProviders</a> API is used to
 * 			associate a capacity provider with a cluster.</p>
 * 		       <p>If specifying a capacity provider that uses an Auto Scaling group, the capacity
 * 			provider must already be created. New Auto Scaling group capacity providers can be
 * 			created with the <a>CreateCapacityProvider</a> API operation.</p>
 * 		       <p>To use a Fargate capacity provider, specify either the <code>FARGATE</code> or
 * 				<code>FARGATE_SPOT</code> capacity providers. The Fargate capacity providers are
 * 			available to all accounts and only need to be associated with a cluster to be used in a
 * 			capacity provider strategy.</p>
 *          <p>A capacity provider strategy may contain a maximum of 6 capacity providers.</p>
 */
export interface CapacityProviderStrategyItem {
  /**
   * <p>The short name of the capacity provider.</p>
   */
  capacityProvider: string | undefined;

  /**
   * <p>The <i>weight</i> value designates the relative percentage of the total
   * 			number of tasks launched that should use the specified capacity provider. The
   * 				<code>weight</code> value is taken into consideration after the <code>base</code>
   * 			value, if defined, is satisfied.</p>
   * 		       <p>If no <code>weight</code> value is specified, the default value of <code>0</code> is
   * 			used. When multiple capacity providers are specified within a capacity provider
   * 			strategy, at least one of the capacity providers must have a weight value greater than
   * 			zero and any capacity providers with a weight of <code>0</code> will not be used to
   * 			place tasks. If you specify multiple capacity providers in a strategy that all have a
   * 			weight of <code>0</code>, any <code>RunTask</code> or <code>CreateService</code> actions
   * 			using the capacity provider strategy will fail.</p>
   * 		       <p>An example scenario for using weights is defining a strategy that contains two
   * 			capacity providers and both have a weight of <code>1</code>, then when the
   * 				<code>base</code> is satisfied, the tasks will be split evenly across the two
   * 			capacity providers. Using that same logic, if you specify a weight of <code>1</code> for
   * 				<i>capacityProviderA</i> and a weight of <code>4</code> for
   * 				<i>capacityProviderB</i>, then for every one task that is run using
   * 				<i>capacityProviderA</i>, four tasks would use
   * 				<i>capacityProviderB</i>.</p>
   */
  weight?: number;

  /**
   * <p>The <i>base</i> value designates how many tasks, at a minimum, to run on
   * 			the specified capacity provider. Only one capacity provider in a capacity provider
   * 			strategy can have a <i>base</i> defined. If no value is specified, the
   * 			default value of <code>0</code> is used.</p>
   */
  base?: number;
}

export namespace CapacityProviderStrategyItem {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: CapacityProviderStrategyItem): any => ({
    ...obj,
  });
}

export enum ClusterSettingName {
  CONTAINER_INSIGHTS = "containerInsights",
}

/**
 * <p>The settings to use when creating a cluster. This parameter is used to enable CloudWatch
 * 			Container Insights for a cluster.</p>
 */
export interface ClusterSetting {
  /**
   * <p>The name of the cluster setting. The only supported value is
   * 				<code>containerInsights</code>.</p>
   */
  name?: ClusterSettingName | string;

  /**
   * <p>The value to set for the cluster setting. The supported values are
   * 				<code>enabled</code> and <code>disabled</code>. If <code>enabled</code> is
   * 			specified, CloudWatch Container Insights will be enabled for the cluster, otherwise it will be
   * 			disabled unless the <code>containerInsights</code> account setting is enabled. If a
   * 			cluster value is specified, it will override the <code>containerInsights</code> value
   * 			set with <a>PutAccountSetting</a> or <a>PutAccountSettingDefault</a>.</p>
   */
  value?: string;
}

export namespace ClusterSetting {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ClusterSetting): any => ({
    ...obj,
  });
}

export interface CreateClusterRequest {
  /**
   * <p>The name of your cluster. If you do not specify a name for your cluster, you create a
   * 			cluster named <code>default</code>. Up to 255 letters (uppercase and lowercase), numbers, underscores, and hyphens are allowed. </p>
   */
  clusterName?: string;

  /**
   * <p>The metadata that you apply to the cluster to help you categorize and organize them.
   * 			Each tag consists of a key and an optional value, both of which you define.</p>
   * 		       <p>The following basic restrictions apply to tags:</p>
   *         <ul>
   *             <li>
   *                 <p>Maximum number of tags per resource - 50</p>
   *             </li>
   *             <li>
   *                 <p>For each resource, each tag key must be unique, and each tag key can have only
   *                     one value.</p>
   *             </li>
   *             <li>
   *                 <p>Maximum key length - 128 Unicode characters in UTF-8</p>
   *             </li>
   *             <li>
   *                 <p>Maximum value length - 256 Unicode characters in UTF-8</p>
   *             </li>
   *             <li>
   *                 <p>If your tagging schema is used across multiple services and resources,
   *                     remember that other services may have restrictions on allowed characters.
   *                     Generally allowed characters are: letters, numbers, and spaces representable in
   *                     UTF-8, and the following characters: + - = . _ : / @.</p>
   *             </li>
   *             <li>
   *                 <p>Tag keys and values are case-sensitive.</p>
   *             </li>
   *             <li>
   *                 <p>Do not use <code>aws:</code>, <code>AWS:</code>, or any upper or lowercase
   *                     combination of such as a prefix for either keys or values as it is reserved for
   *                     Amazon Web Services use. You cannot edit or delete tag keys or values with this prefix. Tags with
   *                     this prefix do not count against your tags per resource limit.</p>
   *             </li>
   *          </ul>
   */
  tags?: Tag[];

  /**
   * <p>The setting to use when creating a cluster. This parameter is used to enable CloudWatch
   * 			Container Insights for a cluster. If this value is specified, it will override the
   * 				<code>containerInsights</code> value set with <a>PutAccountSetting</a> or
   * 				<a>PutAccountSettingDefault</a>.</p>
   */
  settings?: ClusterSetting[];

  /**
   * <p>The execute command configuration for the cluster.</p>
   */
  configuration?: ClusterConfiguration;

  /**
   * <p>The short name of one or more capacity providers to associate with the cluster. A
   * 			capacity provider must be associated with a cluster before it can be included as part of
   * 			the default capacity provider strategy of the cluster or used in a capacity provider
   * 			strategy when calling the <a>CreateService</a> or <a>RunTask</a>
   * 			actions.</p>
   * 		       <p>If specifying a capacity provider that uses an Auto Scaling group, the capacity
   * 			provider must already be created and not already associated with another cluster. New
   * 			Auto Scaling group capacity providers can be created with the <a>CreateCapacityProvider</a> API operation.</p>
   * 		       <p>To use a Fargate capacity provider, specify either the <code>FARGATE</code> or
   * 				<code>FARGATE_SPOT</code> capacity providers. The Fargate capacity providers are
   * 			available to all accounts and only need to be associated with a cluster to be
   * 			used.</p>
   * 		       <p>The <a>PutClusterCapacityProviders</a> API operation is used to update the
   * 			list of available capacity providers for a cluster after the cluster is created.</p>
   */
  capacityProviders?: string[];

  /**
   * <p>The capacity provider strategy to set as the default for the cluster. When a default
   * 			capacity provider strategy is set for a cluster, when calling the <a>RunTask</a> or <a>CreateService</a> APIs with no capacity
   * 			provider strategy or launch type specified, the default capacity provider strategy for
   * 			the cluster is used.</p>
   * 		       <p>If a default capacity provider strategy is not defined for a cluster during creation,
   * 			it can be defined later with the <a>PutClusterCapacityProviders</a> API
   * 			operation.</p>
   */
  defaultCapacityProviderStrategy?: CapacityProviderStrategyItem[];
}

export namespace CreateClusterRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: CreateClusterRequest): any => ({
    ...obj,
  });
}

/**
 * <p>A key-value pair object.</p>
 */
export interface KeyValuePair {
  /**
   * <p>The name of the key-value pair. For environment variables, this is the name of the
   * 			environment variable.</p>
   */
  name?: string;

  /**
   * <p>The value of the key-value pair. For environment variables, this is the value of the
   * 			environment variable.</p>
   */
  value?: string;
}

export namespace KeyValuePair {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: KeyValuePair): any => ({
    ...obj,
  });
}

/**
 * <p>An object representing a container instance or task attachment.</p>
 */
export interface Attachment {
  /**
   * <p>The unique identifier for the attachment.</p>
   */
  id?: string;

  /**
   * <p>The type of the attachment, such as <code>ElasticNetworkInterface</code>.</p>
   */
  type?: string;

  /**
   * <p> The status of the attachment. Valid values are <code>PRECREATED</code>,
   * 				<code>CREATED</code>, <code>ATTACHING</code>, <code>ATTACHED</code>,
   * 				<code>DETACHING</code>, <code>DETACHED</code>, and <code>DELETED</code>.</p>
   */
  status?: string;

  /**
   * <p>Details of the attachment. For elastic network interfaces, this includes the network
   * 			interface ID, the MAC address, the subnet ID, and the private IPv4 address.</p>
   */
  details?: KeyValuePair[];
}

export namespace Attachment {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: Attachment): any => ({
    ...obj,
  });
}

/**
 * <p>A regional grouping of one or more container instances on which you can run task
 * 			requests. Each account receives a default cluster the first time you use the Amazon ECS
 * 			service, but you may also create other clusters. Clusters may contain more than one
 * 			instance type simultaneously.</p>
 */
export interface Cluster {
  /**
   * <p>The Amazon Resource Name (ARN) that identifies the cluster. The ARN contains the <code>arn:aws:ecs</code> namespace, followed by the Region of the cluster, the Amazon Web Services account ID of the cluster owner, the <code>cluster</code> namespace, and then the cluster name. For example, <code>arn:aws:ecs:region:012345678910:cluster/test</code>.</p>
   */
  clusterArn?: string;

  /**
   * <p>A user-generated string that you use to identify your cluster.</p>
   */
  clusterName?: string;

  /**
   * <p>The execute command configuration for the cluster.</p>
   */
  configuration?: ClusterConfiguration;

  /**
   * <p>The status of the cluster. The following are the possible states that will be
   * 			returned.</p>
   * 		       <dl>
   *             <dt>ACTIVE</dt>
   *             <dd>
   * 					          <p>The cluster is ready to accept tasks and if applicable you can register
   * 						container instances with the cluster.</p>
   * 				        </dd>
   *             <dt>PROVISIONING</dt>
   *             <dd>
   * 					          <p>The cluster has capacity providers associated with it and the resources
   * 						needed for the capacity provider are being created.</p>
   * 				        </dd>
   *             <dt>DEPROVISIONING</dt>
   *             <dd>
   * 					          <p>The cluster has capacity providers associated with it and the resources
   * 						needed for the capacity provider are being deleted.</p>
   * 				        </dd>
   *             <dt>FAILED</dt>
   *             <dd>
   * 					          <p>The cluster has capacity providers associated with it and the resources
   * 						needed for the capacity provider have failed to create.</p>
   * 				        </dd>
   *             <dt>INACTIVE</dt>
   *             <dd>
   * 					          <p>The cluster has been deleted. Clusters with an <code>INACTIVE</code>
   * 						status may remain discoverable in your account for a period of time.
   * 						However, this behavior is subject to change in the future, so you should not
   * 						rely on <code>INACTIVE</code> clusters persisting.</p>
   * 				        </dd>
   *          </dl>
   */
  status?: string;

  /**
   * <p>The number of container instances registered into the cluster. This includes container
   * 			instances in both <code>ACTIVE</code> and <code>DRAINING</code> status.</p>
   */
  registeredContainerInstancesCount?: number;

  /**
   * <p>The number of tasks in the cluster that are in the <code>RUNNING</code> state.</p>
   */
  runningTasksCount?: number;

  /**
   * <p>The number of tasks in the cluster that are in the <code>PENDING</code> state.</p>
   */
  pendingTasksCount?: number;

  /**
   * <p>The number of services that are running on the cluster in an <code>ACTIVE</code>
   * 			state. You can view these services with <a>ListServices</a>.</p>
   */
  activeServicesCount?: number;

  /**
   * <p>Additional information about your clusters that are separated by launch type,
   * 			including:</p>
   * 		       <ul>
   *             <li>
   * 				           <p>runningEC2TasksCount</p>
   * 			         </li>
   *             <li>
   * 				           <p>RunningFargateTasksCount</p>
   * 			         </li>
   *             <li>
   * 				           <p>pendingEC2TasksCount</p>
   * 			         </li>
   *             <li>
   * 				           <p>pendingFargateTasksCount</p>
   * 			         </li>
   *             <li>
   * 				           <p>activeEC2ServiceCount</p>
   * 			         </li>
   *             <li>
   * 				           <p>activeFargateServiceCount</p>
   * 			         </li>
   *             <li>
   * 				           <p>drainingEC2ServiceCount</p>
   * 			         </li>
   *             <li>
   * 				           <p>drainingFargateServiceCount</p>
   * 			         </li>
   *          </ul>
   */
  statistics?: KeyValuePair[];

  /**
   * <p>The metadata that you apply to the cluster to help you categorize and organize them.
   * 			Each tag consists of a key and an optional value, both of which you define.</p>
   * 		       <p>The following basic restrictions apply to tags:</p>
   *         <ul>
   *             <li>
   *                 <p>Maximum number of tags per resource - 50</p>
   *             </li>
   *             <li>
   *                 <p>For each resource, each tag key must be unique, and each tag key can have only
   *                     one value.</p>
   *             </li>
   *             <li>
   *                 <p>Maximum key length - 128 Unicode characters in UTF-8</p>
   *             </li>
   *             <li>
   *                 <p>Maximum value length - 256 Unicode characters in UTF-8</p>
   *             </li>
   *             <li>
   *                 <p>If your tagging schema is used across multiple services and resources,
   *                     remember that other services may have restrictions on allowed characters.
   *                     Generally allowed characters are: letters, numbers, and spaces representable in
   *                     UTF-8, and the following characters: + - = . _ : / @.</p>
   *             </li>
   *             <li>
   *                 <p>Tag keys and values are case-sensitive.</p>
   *             </li>
   *             <li>
   *                 <p>Do not use <code>aws:</code>, <code>AWS:</code>, or any upper or lowercase
   *                     combination of such as a prefix for either keys or values as it is reserved for
   *                     Amazon Web Services use. You cannot edit or delete tag keys or values with this prefix. Tags with
   *                     this prefix do not count against your tags per resource limit.</p>
   *             </li>
   *          </ul>
   */
  tags?: Tag[];

  /**
   * <p>The settings for the cluster. This parameter indicates whether CloudWatch Container Insights
   * 			is enabled or disabled for a cluster.</p>
   */
  settings?: ClusterSetting[];

  /**
   * <p>The capacity providers associated with the cluster.</p>
   */
  capacityProviders?: string[];

  /**
   * <p>The default capacity provider strategy for the cluster. When services or tasks are run
   * 			in the cluster with no launch type or capacity provider strategy specified, the default
   * 			capacity provider strategy is used.</p>
   */
  defaultCapacityProviderStrategy?: CapacityProviderStrategyItem[];

  /**
   * <p>The resources attached to a cluster. When using a capacity provider with a cluster,
   * 			the Auto Scaling plan that is created will be returned as a cluster attachment.</p>
   */
  attachments?: Attachment[];

  /**
   * <p>The status of the capacity providers associated with the cluster. The following are
   * 			the states that will be returned:</p>
   * 		       <dl>
   *             <dt>UPDATE_IN_PROGRESS</dt>
   *             <dd>
   * 					          <p>The available capacity providers for the cluster are updating. This occurs
   * 						when the Auto Scaling plan is provisioning or deprovisioning.</p>
   * 				        </dd>
   *             <dt>UPDATE_COMPLETE</dt>
   *             <dd>
   * 					          <p>The capacity providers have successfully updated.</p>
   * 				        </dd>
   *             <dt>UPDATE_FAILED</dt>
   *             <dd>
   * 					          <p>The capacity provider updates failed.</p>
   * 				        </dd>
   *          </dl>
   */
  attachmentsStatus?: string;
}

export namespace Cluster {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: Cluster): any => ({
    ...obj,
  });
}

export interface CreateClusterResponse {
  /**
   * <p>The full description of your new cluster.</p>
   */
  cluster?: Cluster;
}

export namespace CreateClusterResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: CreateClusterResponse): any => ({
    ...obj,
  });
}

/**
 * <p>The specified cluster could not be found. You can view your available clusters with
 * 				<a>ListClusters</a>. Amazon ECS clusters are Region-specific.</p>
 */
export interface ClusterNotFoundException extends __SmithyException, $MetadataBearer {
  name: "ClusterNotFoundException";
  $fault: "client";
  message?: string;
}

export namespace ClusterNotFoundException {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ClusterNotFoundException): any => ({
    ...obj,
  });
}

/**
 * <note>
 * 			         <p>The deployment circuit breaker can only be used for services using the rolling
 * 				update (<code>ECS</code>) deployment type that are not behind a Classic Load Balancer.</p>
 * 		       </note>
 * 		       <p>The <b>deployment circuit breaker</b> determines whether a
 * 			service deployment will fail if the service can't reach a steady state. If enabled, a
 * 			service deployment will transition to a failed state and stop launching new tasks. You
 * 			can also enable Amazon ECS to roll back your service to the last completed deployment after a
 * 			failure. For more information, see <a href="https://docs.aws.amazon.com/AmazonECS/latest/developerguide/deployment-type-ecs.html">Rolling
 * 				update</a> in the <i>Amazon Elastic Container Service Developer Guide</i>.</p>
 */
export interface DeploymentCircuitBreaker {
  /**
   * <p>Whether to enable the deployment circuit breaker logic for the service.</p>
   */
  enable: boolean | undefined;

  /**
   * <p>Whether to enable Amazon ECS to roll back the service if a service deployment fails. If
   * 			rollback is enabled, when a service deployment fails, the service is rolled back to the
   * 			last deployment that completed successfully.</p>
   */
  rollback: boolean | undefined;
}

export namespace DeploymentCircuitBreaker {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DeploymentCircuitBreaker): any => ({
    ...obj,
  });
}

/**
 * <p>Optional deployment parameters that control how many tasks run during a deployment and
 * 			the ordering of stopping and starting tasks.</p>
 */
export interface DeploymentConfiguration {
  /**
   * <note>
   * 			         <p>The deployment circuit breaker can only be used for services using the rolling
   * 				update (<code>ECS</code>) deployment type.</p>
   * 		       </note>
   * 		       <p>The <b>deployment circuit breaker</b> determines whether a
   * 			service deployment will fail if the service can't reach a steady state. If deployment
   * 			circuit breaker is enabled, a service deployment will transition to a failed state and
   * 			stop launching new tasks. If rollback is enabled, when a service deployment fails, the
   * 			service is rolled back to the last deployment that completed successfully.</p>
   */
  deploymentCircuitBreaker?: DeploymentCircuitBreaker;

  /**
   * <p>If a service is using the rolling update (<code>ECS</code>) deployment type, the
   * 				<b>maximum percent</b> parameter represents an upper limit
   * 			on the number of tasks in a service that are allowed in the <code>RUNNING</code> or
   * 				<code>PENDING</code> state during a deployment, as a percentage of the desired
   * 			number of tasks (rounded down to the nearest integer), and while any container instances
   * 			are in the <code>DRAINING</code> state if the service contains tasks using the
   * 			EC2 launch type. This parameter enables you to define the deployment batch
   * 			size. For example, if your service has a desired number of four tasks and a maximum
   * 			percent value of 200%, the scheduler may start four new tasks before stopping the four
   * 			older tasks (provided that the cluster resources required to do this are available). The
   * 			default value for maximum percent is 200%.</p>
   * 		       <p>If a service is using the blue/green (<code>CODE_DEPLOY</code>) or
   * 				<code>EXTERNAL</code> deployment types and tasks that use the EC2
   * 			launch type, the <b>maximum percent</b> value is set to the
   * 			default value and is used to define the upper limit on the number of the tasks in the
   * 			service that remain in the <code>RUNNING</code> state while the container instances are
   * 			in the <code>DRAINING</code> state. If the tasks in the service use the
   * 			Fargate launch type, the maximum percent value is not used, although it is
   * 			returned when describing your service.</p>
   */
  maximumPercent?: number;

  /**
   * <p>If a service is using the rolling update (<code>ECS</code>) deployment type, the
   * 				<b>minimum healthy percent</b> represents a lower limit on
   * 			the number of tasks in a service that must remain in the <code>RUNNING</code> state
   * 			during a deployment, as a percentage of the desired number of tasks (rounded up to the
   * 			nearest integer), and while any container instances are in the <code>DRAINING</code>
   * 			state if the service contains tasks using the EC2 launch type. This
   * 			parameter enables you to deploy without using additional cluster capacity. For example,
   * 			if your service has a desired number of four tasks and a minimum healthy percent of 50%,
   * 			the scheduler may stop two existing tasks to free up cluster capacity before starting
   * 			two new tasks. Tasks for services that <i>do not</i> use a load balancer
   * 			are considered healthy if they are in the <code>RUNNING</code> state; tasks for services
   * 			that <i>do</i> use a load balancer are considered healthy if they are in
   * 			the <code>RUNNING</code> state and they are reported as healthy by the load balancer.
   * 			The default value for minimum healthy percent is 100%.</p>
   * 		       <p>If a service is using the blue/green (<code>CODE_DEPLOY</code>) or
   * 				<code>EXTERNAL</code> deployment types and tasks that use the EC2
   * 			launch type, the <b>minimum healthy percent</b> value is set
   * 			to the default value and is used to define the lower limit on the number of the tasks in
   * 			the service that remain in the <code>RUNNING</code> state while the container instances
   * 			are in the <code>DRAINING</code> state. If the tasks in the service use the
   * 			Fargate launch type, the minimum healthy percent value is not used,
   * 			although it is returned when describing your service.</p>
   */
  minimumHealthyPercent?: number;
}

export namespace DeploymentConfiguration {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DeploymentConfiguration): any => ({
    ...obj,
  });
}

export enum DeploymentControllerType {
  CODE_DEPLOY = "CODE_DEPLOY",
  ECS = "ECS",
  EXTERNAL = "EXTERNAL",
}

/**
 * <p>The deployment controller to use for the service. For more information, see <a href="https://docs.aws.amazon.com/AmazonECS/latest/developerguide/deployment-types.html">Amazon ECS Deployment Types</a> in the <i>Amazon Elastic Container Service Developer Guide</i>.</p>
 */
export interface DeploymentController {
  /**
   * <p>The deployment controller type to use.</p>
   * 		       <p>There are three deployment controller types available:</p>
   * 		       <dl>
   *             <dt>ECS</dt>
   *             <dd>
   * 					          <p>The rolling update (<code>ECS</code>) deployment type involves replacing
   * 						the current running version of the container with the latest version. The
   * 						number of containers Amazon ECS adds or removes from the service during a rolling
   * 						update is controlled by adjusting the minimum and maximum number of healthy
   * 						tasks allowed during a service deployment, as specified in the <a>DeploymentConfiguration</a>.</p>
   * 				        </dd>
   *             <dt>CODE_DEPLOY</dt>
   *             <dd>
   * 					          <p>The blue/green (<code>CODE_DEPLOY</code>) deployment type uses the
   * 						blue/green deployment model powered by CodeDeploy, which allows you to verify a
   * 						new deployment of a service before sending production traffic to it.</p>
   * 				        </dd>
   *             <dt>EXTERNAL</dt>
   *             <dd>
   * 					          <p>The external (<code>EXTERNAL</code>) deployment type enables you to use
   * 						any third-party deployment controller for full control over the deployment
   * 						process for an Amazon ECS service.</p>
   * 				        </dd>
   *          </dl>
   */
  type: DeploymentControllerType | string | undefined;
}

export namespace DeploymentController {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DeploymentController): any => ({
    ...obj,
  });
}

export enum LaunchType {
  EC2 = "EC2",
  EXTERNAL = "EXTERNAL",
  FARGATE = "FARGATE",
}

/**
 * <p>The load balancer configuration to use with a service or task set.</p>
 * 		       <p>For specific notes and restrictions regarding the use of load balancers with services
 * 			and task sets, see the CreateService and CreateTaskSet actions.</p>
 */
export interface LoadBalancer {
  /**
   * <p>The full Amazon Resource Name (ARN) of the Elastic Load Balancing target group or groups associated with a service or
   * 			task set.</p>
   * 		       <p>A target group ARN is only specified when using an Application Load Balancer or Network Load Balancer. If you are using a
   * 			Classic Load Balancer the target group ARN should be omitted.</p>
   * 		       <p>For services using the <code>ECS</code> deployment controller, you can specify one or
   * 			multiple target groups. For more information, see <a href="https://docs.aws.amazon.com/AmazonECS/latest/developerguide/register-multiple-targetgroups.html">Registering Multiple Target Groups with a Service</a> in
   * 			the <i>Amazon Elastic Container Service Developer Guide</i>.</p>
   * 		       <p>For services using the <code>CODE_DEPLOY</code> deployment controller, you are
   * 			required to define two target groups for the load balancer. For more information, see
   * 				<a href="https://docs.aws.amazon.com/AmazonECS/latest/developerguide/deployment-type-bluegreen.html">Blue/Green Deployment with CodeDeploy</a> in the
   * 				<i>Amazon Elastic Container Service Developer Guide</i>.</p>
   * 		       <important>
   * 			         <p>If your service's task definition uses the <code>awsvpc</code> network mode (which
   * 				is required for the Fargate launch type), you must choose
   * 					<code>ip</code> as the target type, not <code>instance</code>, when creating
   * 				your target groups because tasks that use the <code>awsvpc</code> network mode are
   * 				associated with an elastic network interface, not an Amazon EC2 instance.</p>
   * 		       </important>
   */
  targetGroupArn?: string;

  /**
   * <p>The name of the load balancer to associate with the Amazon ECS service or task set.</p>
   * 		       <p>A load balancer name is only specified when using a Classic Load Balancer. If you are using an Application Load Balancer
   * 			or a Network Load Balancer the load balancer name parameter should be omitted.</p>
   */
  loadBalancerName?: string;

  /**
   * <p>The name of the container (as it appears in a container definition) to associate with
   * 			the load balancer.</p>
   */
  containerName?: string;

  /**
   * <p>The port on the container to associate with the load balancer. This port must
   * 			correspond to a <code>containerPort</code> in the task definition the tasks in the
   * 			service are using. For tasks that use the EC2 launch type, the container
   * 			instance they are launched on must allow ingress traffic on the <code>hostPort</code> of
   * 			the port mapping.</p>
   */
  containerPort?: number;
}

export namespace LoadBalancer {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: LoadBalancer): any => ({
    ...obj,
  });
}

export enum AssignPublicIp {
  DISABLED = "DISABLED",
  ENABLED = "ENABLED",
}

/**
 * <p>An object representing the networking details for a task or service.</p>
 */
export interface AwsVpcConfiguration {
  /**
   * <p>The IDs of the subnets associated with the task or service. There is a limit of 16
   * 			subnets that can be specified per <code>AwsVpcConfiguration</code>.</p>
   *
   * 		       <note>
   * 			         <p>All specified subnets must be from the same VPC.</p>
   * 		       </note>
   */
  subnets: string[] | undefined;

  /**
   * <p>The IDs of the security groups associated with the task or service. If you do not
   * 			specify a security group, the default security group for the VPC is used. There is a
   * 			limit of 5 security groups that can be specified per
   * 			<code>AwsVpcConfiguration</code>.</p>
   *
   * 		       <note>
   * 			         <p>All specified security groups must be from the same VPC.</p>
   * 		       </note>
   */
  securityGroups?: string[];

  /**
   * <p>Whether the task's elastic network interface receives a public IP address. The default
   * 			value is <code>DISABLED</code>.</p>
   */
  assignPublicIp?: AssignPublicIp | string;
}

export namespace AwsVpcConfiguration {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: AwsVpcConfiguration): any => ({
    ...obj,
  });
}

/**
 * <p>An object representing the network configuration for a task or service.</p>
 */
export interface NetworkConfiguration {
  /**
   * <p>The VPC subnets and security groups associated with a task.</p>
   * 		       <note>
   * 			         <p>All specified subnets and security groups must be from the same VPC.</p>
   * 		       </note>
   */
  awsvpcConfiguration?: AwsVpcConfiguration;
}

export namespace NetworkConfiguration {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: NetworkConfiguration): any => ({
    ...obj,
  });
}

export enum PlacementConstraintType {
  DISTINCT_INSTANCE = "distinctInstance",
  MEMBER_OF = "memberOf",
}

/**
 * <p>An object representing a constraint on task placement. For more information, see
 * 				<a href="https://docs.aws.amazon.com/AmazonECS/latest/developerguide/task-placement-constraints.html">Task Placement Constraints</a> in the
 * 				<i>Amazon Elastic Container Service Developer Guide</i>.</p>
 * 		       <note>
 * 			         <p>If you are using the Fargate launch type, task placement constraints
 * 				are not supported.</p>
 * 		       </note>
 */
export interface PlacementConstraint {
  /**
   * <p>The type of constraint. Use <code>distinctInstance</code> to ensure that each task in
   * 			a particular group is running on a different container instance. Use
   * 				<code>memberOf</code> to restrict the selection to a group of valid
   * 			candidates.</p>
   */
  type?: PlacementConstraintType | string;

  /**
   * <p>A cluster query language expression to apply to the constraint. The expression can
   * 			have a maximum length of 2000 characters. You can't specify an expression if the
   * 			constraint type is <code>distinctInstance</code>. For more information, see <a href="https://docs.aws.amazon.com/AmazonECS/latest/developerguide/cluster-query-language.html">Cluster query language</a> in the
   * 				<i>Amazon Elastic Container Service Developer Guide</i>.</p>
   */
  expression?: string;
}

export namespace PlacementConstraint {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: PlacementConstraint): any => ({
    ...obj,
  });
}

export enum PlacementStrategyType {
  BINPACK = "binpack",
  RANDOM = "random",
  SPREAD = "spread",
}

/**
 * <p>The task placement strategy for a task or service. For more information, see <a href="https://docs.aws.amazon.com/AmazonECS/latest/developerguide/task-placement-strategies.html">Task Placement Strategies</a> in the
 * 				<i>Amazon Elastic Container Service Developer Guide</i>.</p>
 */
export interface PlacementStrategy {
  /**
   * <p>The type of placement strategy. The <code>random</code> placement strategy randomly
   * 			places tasks on available candidates. The <code>spread</code> placement strategy spreads
   * 			placement across available candidates evenly based on the <code>field</code> parameter.
   * 			The <code>binpack</code> strategy places tasks on available candidates that have the
   * 			least available amount of the resource that is specified with the <code>field</code>
   * 			parameter. For example, if you binpack on memory, a task is placed on the instance with
   * 			the least amount of remaining memory (but still enough to run the task).</p>
   */
  type?: PlacementStrategyType | string;

  /**
   * <p>The field to apply the placement strategy against. For the <code>spread</code>
   * 			placement strategy, valid values are <code>instanceId</code> (or <code>host</code>,
   * 			which has the same effect), or any platform or custom attribute that is applied to a
   * 			container instance, such as <code>attribute:ecs.availability-zone</code>. For the
   * 				<code>binpack</code> placement strategy, valid values are <code>cpu</code> and
   * 				<code>memory</code>. For the <code>random</code> placement strategy, this field is
   * 			not used.</p>
   */
  field?: string;
}

export namespace PlacementStrategy {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: PlacementStrategy): any => ({
    ...obj,
  });
}

export enum PropagateTags {
  SERVICE = "SERVICE",
  TASK_DEFINITION = "TASK_DEFINITION",
}

export enum SchedulingStrategy {
  DAEMON = "DAEMON",
  REPLICA = "REPLICA",
}

/**
 * <p>Details of the service registry.</p>
 */
export interface ServiceRegistry {
  /**
   * <p>The Amazon Resource Name (ARN) of the service registry. The currently supported service registry is
   * 			Cloud Map. For more information, see <a href="https://docs.aws.amazon.com/cloud-map/latest/api/API_CreateService.html">CreateService</a>.</p>
   */
  registryArn?: string;

  /**
   * <p>The port value used if your service discovery service specified an SRV record. This
   * 			field may be used if both the <code>awsvpc</code> network mode and SRV records are
   * 			used.</p>
   */
  port?: number;

  /**
   * <p>The container name value, already specified in the task definition, to be used for
   * 			your service discovery service. If the task definition that your service task specifies
   * 			uses the <code>bridge</code> or <code>host</code> network mode, you must specify a
   * 				<code>containerName</code> and <code>containerPort</code> combination from the task
   * 			definition. If the task definition that your service task specifies uses the
   * 				<code>awsvpc</code> network mode and a type SRV DNS record is used, you must specify
   * 			either a <code>containerName</code> and <code>containerPort</code> combination or a
   * 				<code>port</code> value, but not both.</p>
   */
  containerName?: string;

  /**
   * <p>The port value, already specified in the task definition, to be used for your service
   * 			discovery service. If the task definition your service task specifies uses the
   * 				<code>bridge</code> or <code>host</code> network mode, you must specify a
   * 				<code>containerName</code> and <code>containerPort</code> combination from the task
   * 			definition. If the task definition your service task specifies uses the
   * 				<code>awsvpc</code> network mode and a type SRV DNS record is used, you must specify
   * 			either a <code>containerName</code> and <code>containerPort</code> combination or a
   * 				<code>port</code> value, but not both.</p>
   */
  containerPort?: number;
}

export namespace ServiceRegistry {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ServiceRegistry): any => ({
    ...obj,
  });
}

export interface CreateServiceRequest {
  /**
   * <p>The short name or full Amazon Resource Name (ARN) of the cluster on which to run your service.
   * 			If you do not specify a cluster, the default cluster is assumed.</p>
   */
  cluster?: string;

  /**
   * <p>The name of your service. Up to 255 letters (uppercase and lowercase), numbers, underscores, and hyphens are allowed. Service names must be unique within
   * 			a cluster, but you can have similarly named services in multiple clusters within a
   * 			Region or across multiple Regions.</p>
   */
  serviceName: string | undefined;

  /**
   * <p>The <code>family</code> and <code>revision</code> (<code>family:revision</code>) or
   * 			full ARN of the task definition to run in your service. If a <code>revision</code> is
   * 			not specified, the latest <code>ACTIVE</code> revision is used.</p>
   * 		       <p>A task definition must be specified if the service is using either the
   * 				<code>ECS</code> or <code>CODE_DEPLOY</code> deployment controllers.</p>
   */
  taskDefinition?: string;

  /**
   * <p>A load balancer object representing the load balancers to use with your service. For
   * 			more information, see <a href="https://docs.aws.amazon.com/AmazonECS/latest/developerguide/service-load-balancing.html">Service Load Balancing</a> in the
   * 				<i>Amazon Elastic Container Service Developer Guide</i>.</p>
   * 		       <p>If the service is using the rolling update (<code>ECS</code>) deployment controller
   * 			and using either an Application Load Balancer or Network Load Balancer, you must specify one or more target group ARNs to
   * 			attach to the service. The service-linked role is required for services that make use of
   * 			multiple target groups. For more information, see <a href="https://docs.aws.amazon.com/AmazonECS/latest/developerguide/using-service-linked-roles.html">Using service-linked roles for Amazon ECS</a> in the
   * 				<i>Amazon Elastic Container Service Developer Guide</i>.</p>
   * 		       <p>If the service is using the <code>CODE_DEPLOY</code> deployment controller, the
   * 			service is required to use either an Application Load Balancer or Network Load Balancer. When creating an CodeDeploy deployment
   * 			group, you specify two target groups (referred to as a <code>targetGroupPair</code>).
   * 			During a deployment, CodeDeploy determines which task set in your service has the status
   * 				<code>PRIMARY</code> and associates one target group with it, and then associates
   * 			the other target group with the replacement task set. The load balancer can also have up
   * 			to two listeners: a required listener for production traffic and an optional listener
   * 			that allows you perform validation tests with Lambda functions before routing production
   * 			traffic to it.</p>
   * 		       <p>After you create a service using the <code>ECS</code> deployment controller, the load
   * 			balancer name or target group ARN, container name, and container port specified in the
   * 			service definition are immutable. If you are using the <code>CODE_DEPLOY</code>
   * 			deployment controller, these values can be changed when updating the service.</p>
   * 		       <p>For Application Load Balancers and Network Load Balancers, this object must contain the load balancer target group ARN,
   * 			the container name (as it appears in a container definition), and the container port to
   * 			access from the load balancer. The load balancer name parameter must be omitted. When a
   * 			task from this service is placed on a container instance, the container instance and
   * 			port combination is registered as a target in the target group specified here.</p>
   * 		       <p>For Classic Load Balancers, this object must contain the load balancer name, the container name (as it
   * 			appears in a container definition), and the container port to access from the load
   * 			balancer. The target group ARN parameter must be omitted. When a task from this service
   * 			is placed on a container instance, the container instance is registered with the load
   * 			balancer specified here.</p>
   * 		       <p>Services with tasks that use the <code>awsvpc</code> network mode (for example, those
   * 			with the Fargate launch type) only support Application Load Balancers and Network Load Balancers. Classic Load Balancers are
   * 			not supported. Also, when you create any target groups for these services, you must
   * 			choose <code>ip</code> as the target type, not <code>instance</code>, because tasks that
   * 			use the <code>awsvpc</code> network mode are associated with an elastic network
   * 			interface, not an Amazon EC2 instance.</p>
   */
  loadBalancers?: LoadBalancer[];

  /**
   * <p>The details of the service discovery registry to associate with this service. For more
   * 			information, see <a href="https://docs.aws.amazon.com/AmazonECS/latest/developerguide/service-discovery.html">Service
   * 				discovery</a>.</p>
   * 		       <note>
   * 			         <p>Each service may be associated with one service registry. Multiple service
   * 				registries per service isn't supported.</p>
   * 		       </note>
   */
  serviceRegistries?: ServiceRegistry[];

  /**
   * <p>The number of instantiations of the specified task definition to place and keep
   * 			running on your cluster.</p>
   * 		       <p>This is required if <code>schedulingStrategy</code> is <code>REPLICA</code> or is not
   * 			specified. If <code>schedulingStrategy</code> is <code>DAEMON</code> then this is not
   * 			required.</p>
   */
  desiredCount?: number;

  /**
   * <p>Unique, case-sensitive identifier that you provide to ensure the idempotency of the
   * 			request. Up to 32 ASCII characters are allowed.</p>
   */
  clientToken?: string;

  /**
   * <p>The infrastructure on which to run your service. For more information, see <a href="https://docs.aws.amazon.com/AmazonECS/latest/developerguide/launch_types.html">Amazon ECS
   * 				launch types</a> in the <i>Amazon Elastic Container Service Developer Guide</i>.</p>
   * 		       <p>The <code>FARGATE</code> launch type runs your tasks on Fargate On-Demand
   * 			infrastructure.</p>
   * 		       <note>
   * 			         <p>Fargate Spot infrastructure is available for use but a capacity provider
   * 				strategy must be used. For more information, see <a href="https://docs.aws.amazon.com/AmazonECS/latest/userguide/fargate-capacity-providers.html">Fargate capacity providers</a> in the
   * 					<i>Amazon ECS User Guide for Fargate</i>.</p>
   * 		       </note>
   * 		       <p>The <code>EC2</code> launch type runs your tasks on Amazon EC2 instances registered to your
   * 			cluster.</p>
   * 		       <p>The <code>EXTERNAL</code> launch type runs your tasks on your on-premise server or
   * 			virtual machine (VM) capacity registered to your cluster.</p>
   * 		       <p>A service can use either a launch type or a capacity provider strategy. If a
   * 				<code>launchType</code> is specified, the <code>capacityProviderStrategy</code>
   * 			parameter must be omitted.</p>
   */
  launchType?: LaunchType | string;

  /**
   * <p>The capacity provider strategy to use for the service.</p>
   * 		       <p>If a <code>capacityProviderStrategy</code> is specified, the <code>launchType</code>
   * 			parameter must be omitted. If no <code>capacityProviderStrategy</code> or
   * 				<code>launchType</code> is specified, the
   * 				<code>defaultCapacityProviderStrategy</code> for the cluster is used.</p>
   * 		       <p>A capacity provider strategy may contain a maximum of 6 capacity providers.</p>
   */
  capacityProviderStrategy?: CapacityProviderStrategyItem[];

  /**
   * <p>The platform version that your tasks in the service are running on. A platform version
   * 			is specified only for tasks using the Fargate launch type. If one isn't
   * 			specified, the <code>LATEST</code> platform version is used by default. For more
   * 			information, see <a href="https://docs.aws.amazon.com/AmazonECS/latest/developerguide/platform_versions.html">Fargate platform
   * 				versions</a> in the <i>Amazon Elastic Container Service Developer Guide</i>.</p>
   */
  platformVersion?: string;

  /**
   * <p>The name or full Amazon Resource Name (ARN) of the IAM role that allows Amazon ECS to make calls to your
   * 			load balancer on your behalf. This parameter is only permitted if you are using a load
   * 			balancer with your service and your task definition does not use the <code>awsvpc</code>
   * 			network mode. If you specify the <code>role</code> parameter, you must also specify a
   * 			load balancer object with the <code>loadBalancers</code> parameter.</p>
   * 		       <important>
   * 			         <p>If your account has already created the Amazon ECS service-linked role, that role is
   * 				used by default for your service unless you specify a role here. The service-linked
   * 				role is required if your task definition uses the <code>awsvpc</code> network mode
   * 				or if the service is configured to use service discovery, an external deployment
   * 				controller, multiple target groups, or Elastic Inference accelerators in which case
   * 				you should not specify a role here. For more information, see <a href="https://docs.aws.amazon.com/AmazonECS/latest/developerguide/using-service-linked-roles.html">Using
   * 					service-linked roles for Amazon ECS</a> in the
   * 					<i>Amazon Elastic Container Service Developer Guide</i>.</p>
   * 		       </important>
   * 		       <p>If your specified role has a path other than <code>/</code>, then you must either
   * 			specify the full role ARN (this is recommended) or prefix the role name with the path.
   * 			For example, if a role with the name <code>bar</code> has a path of <code>/foo/</code>
   * 			then you would specify <code>/foo/bar</code> as the role name. For more information, see
   * 				<a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_identifiers.html#identifiers-friendly-names">Friendly names and paths</a> in the <i>IAM User Guide</i>.</p>
   */
  role?: string;

  /**
   * <p>Optional deployment parameters that control how many tasks run during the deployment
   * 			and the ordering of stopping and starting tasks.</p>
   */
  deploymentConfiguration?: DeploymentConfiguration;

  /**
   * <p>An array of placement constraint objects to use for tasks in your service. You can
   * 			specify a maximum of 10 constraints per task (this limit includes constraints in the
   * 			task definition and those specified at runtime).</p>
   */
  placementConstraints?: PlacementConstraint[];

  /**
   * <p>The placement strategy objects to use for tasks in your service. You can specify a
   * 			maximum of 5 strategy rules per service.</p>
   */
  placementStrategy?: PlacementStrategy[];

  /**
   * <p>The network configuration for the service. This parameter is required for task
   * 			definitions that use the <code>awsvpc</code> network mode to receive their own elastic
   * 			network interface, and it is not supported for other network modes. For more
   * 			information, see <a href="https://docs.aws.amazon.com/AmazonECS/latest/developerguide/task-networking.html">Task networking</a>
   * 			in the <i>Amazon Elastic Container Service Developer Guide</i>.</p>
   */
  networkConfiguration?: NetworkConfiguration;

  /**
   * <p>The period of time, in seconds, that the Amazon ECS service scheduler should ignore
   * 			unhealthy Elastic Load Balancing target health checks after a task has first started. This is only used
   * 			when your service is configured to use a load balancer. If your service has a load
   * 			balancer defined and you don't specify a health check grace period value, the default
   * 			value of <code>0</code> is used.</p>
   * 		       <p>If your service's tasks take a while to start and respond to Elastic Load Balancing health checks, you
   * 			can specify a health check grace period of up to 2,147,483,647 seconds. During that
   * 			time, the Amazon ECS service scheduler ignores health check status. This grace period can
   * 			prevent the service scheduler from marking tasks as unhealthy and stopping them before
   * 			they have time to come up.</p>
   */
  healthCheckGracePeriodSeconds?: number;

  /**
   * <p>The scheduling strategy to use for the service. For more information, see <a href="https://docs.aws.amazon.com/AmazonECS/latest/developerguide/ecs_services.html">Services</a>.</p>
   * 		       <p>There are two service scheduler strategies available:</p>
   * 		       <ul>
   *             <li>
   * 				           <p>
   *                   <code>REPLICA</code>-The replica scheduling strategy places and
   * 					maintains the desired number of tasks across your cluster. By default, the
   * 					service scheduler spreads tasks across Availability Zones. You can use task
   * 					placement strategies and constraints to customize task placement decisions. This
   * 					scheduler strategy is required if the service is using the
   * 						<code>CODE_DEPLOY</code> or <code>EXTERNAL</code> deployment controller
   * 					types.</p>
   * 			         </li>
   *             <li>
   * 				           <p>
   *                   <code>DAEMON</code>-The daemon scheduling strategy deploys exactly one
   * 					task on each active container instance that meets all of the task placement
   * 					constraints that you specify in your cluster. The service scheduler also
   * 					evaluates the task placement constraints for running tasks and will stop tasks
   * 					that do not meet the placement constraints. When you're using this strategy, you
   * 					don't need to specify a desired number of tasks, a task placement strategy, or
   * 					use Service Auto Scaling policies.</p>
   * 				           <note>
   * 					             <p>Tasks using the Fargate launch type or the
   * 							<code>CODE_DEPLOY</code> or <code>EXTERNAL</code> deployment controller
   * 						types don't support the <code>DAEMON</code> scheduling strategy.</p>
   * 				           </note>
   * 			         </li>
   *          </ul>
   */
  schedulingStrategy?: SchedulingStrategy | string;

  /**
   * <p>The deployment controller to use for the service. If no deployment controller is
   * 			specified, the default value of <code>ECS</code> is used.</p>
   */
  deploymentController?: DeploymentController;

  /**
   * <p>The metadata that you apply to the service to help you categorize and organize them.
   * 			Each tag consists of a key and an optional value, both of which you define. When a
   * 			service is deleted, the tags are deleted as well.</p>
   *          <p>The following basic restrictions apply to tags:</p>
   *         <ul>
   *             <li>
   *                 <p>Maximum number of tags per resource - 50</p>
   *             </li>
   *             <li>
   *                 <p>For each resource, each tag key must be unique, and each tag key can have only
   *                     one value.</p>
   *             </li>
   *             <li>
   *                 <p>Maximum key length - 128 Unicode characters in UTF-8</p>
   *             </li>
   *             <li>
   *                 <p>Maximum value length - 256 Unicode characters in UTF-8</p>
   *             </li>
   *             <li>
   *                 <p>If your tagging schema is used across multiple services and resources,
   *                     remember that other services may have restrictions on allowed characters.
   *                     Generally allowed characters are: letters, numbers, and spaces representable in
   *                     UTF-8, and the following characters: + - = . _ : / @.</p>
   *             </li>
   *             <li>
   *                 <p>Tag keys and values are case-sensitive.</p>
   *             </li>
   *             <li>
   *                 <p>Do not use <code>aws:</code>, <code>AWS:</code>, or any upper or lowercase
   *                     combination of such as a prefix for either keys or values as it is reserved for
   *                     Amazon Web Services use. You cannot edit or delete tag keys or values with this prefix. Tags with
   *                     this prefix do not count against your tags per resource limit.</p>
   *             </li>
   *          </ul>
   */
  tags?: Tag[];

  /**
   * <p>Specifies whether to enable Amazon ECS managed tags for the tasks within the service. For
   * 			more information, see <a href="https://docs.aws.amazon.com/AmazonECS/latest/developerguide/ecs-using-tags.html">Tagging Your Amazon ECS
   * 				Resources</a> in the <i>Amazon Elastic Container Service Developer Guide</i>.</p>
   */
  enableECSManagedTags?: boolean;

  /**
   * <p>Specifies whether to propagate the tags from the task definition or the service to the
   * 			tasks in the service. If no value is specified, the tags are not propagated. Tags can
   * 			only be propagated to the tasks within the service during service creation. To add tags
   * 			to a task after service creation, use the <a>TagResource</a> API
   * 			action.</p>
   */
  propagateTags?: PropagateTags | string;

  /**
   * <p>Whether or not the execute command functionality is enabled for the service. If
   * 				<code>true</code>, this enables execute command functionality on all containers in
   * 			the service tasks.</p>
   */
  enableExecuteCommand?: boolean;
}

export namespace CreateServiceRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: CreateServiceRequest): any => ({
    ...obj,
  });
}

export enum DeploymentRolloutState {
  COMPLETED = "COMPLETED",
  FAILED = "FAILED",
  IN_PROGRESS = "IN_PROGRESS",
}

/**
 * <p>The details of an Amazon ECS service deployment. This is used only when a service uses the
 * 				<code>ECS</code> deployment controller type.</p>
 */
export interface Deployment {
  /**
   * <p>The ID of the deployment.</p>
   */
  id?: string;

  /**
   * <p>The status of the deployment. The following describes each state:</p>
   * 		       <dl>
   *             <dt>PRIMARY</dt>
   *             <dd>
   * 					          <p>The most recent deployment of a service.</p>
   * 				        </dd>
   *             <dt>ACTIVE</dt>
   *             <dd>
   * 					          <p>A service deployment that still has running tasks, but are in the process
   * 						of being replaced with a new <code>PRIMARY</code> deployment.</p>
   * 				        </dd>
   *             <dt>INACTIVE</dt>
   *             <dd>
   * 					          <p>A deployment that has been completely replaced.</p>
   * 				        </dd>
   *          </dl>
   */
  status?: string;

  /**
   * <p>The most recent task definition that was specified for the tasks in the service to
   * 			use.</p>
   */
  taskDefinition?: string;

  /**
   * <p>The most recent desired count of tasks that was specified for the service to deploy or
   * 			maintain.</p>
   */
  desiredCount?: number;

  /**
   * <p>The number of tasks in the deployment that are in the <code>PENDING</code>
   * 			status.</p>
   */
  pendingCount?: number;

  /**
   * <p>The number of tasks in the deployment that are in the <code>RUNNING</code>
   * 			status.</p>
   */
  runningCount?: number;

  /**
   * <p>The number of consecutively failed tasks in the deployment. A task is considered a
   * 			failure if the service scheduler can't launch the task, the task doesn't transition to a
   * 				<code>RUNNING</code> state, or if it fails any of its defined health checks and is
   * 			stopped.</p>
   * 		       <note>
   * 			         <p>Once a service deployment has one or more successfully running tasks, the failed
   * 				task count resets to zero and stops being evaluated.</p>
   * 		       </note>
   */
  failedTasks?: number;

  /**
   * <p>The Unix timestamp for when the service deployment was created.</p>
   */
  createdAt?: Date;

  /**
   * <p>The Unix timestamp for when the service deployment was last updated.</p>
   */
  updatedAt?: Date;

  /**
   * <p>The capacity provider strategy that the deployment is using.</p>
   */
  capacityProviderStrategy?: CapacityProviderStrategyItem[];

  /**
   * <p>The launch type the tasks in the service are using. For more information, see <a href="https://docs.aws.amazon.com/AmazonECS/latest/developerguide/launch_types.html">Amazon ECS
   * 				Launch Types</a> in the <i>Amazon Elastic Container Service Developer Guide</i>.</p>
   */
  launchType?: LaunchType | string;

  /**
   * <p>The platform version on which your tasks in the service are running. A platform
   * 			version is only specified for tasks using the Fargate launch type. If one
   * 			is not specified, the <code>LATEST</code> platform version is used by default. For more
   * 			information, see <a href="https://docs.aws.amazon.com/AmazonECS/latest/developerguide/platform_versions.html">Fargate Platform
   * 				Versions</a> in the <i>Amazon Elastic Container Service Developer Guide</i>.</p>
   */
  platformVersion?: string;

  /**
   * <p>The VPC subnet and security group configuration for tasks that receive their own
   *             elastic network interface by using the <code>awsvpc</code> networking mode.</p>
   */
  networkConfiguration?: NetworkConfiguration;

  /**
   * <note>
   * 			         <p>The <code>rolloutState</code> of a service is only returned for services that use
   * 				the rolling update (<code>ECS</code>) deployment type that are not behind a
   * 				Classic Load Balancer.</p>
   * 		       </note>
   * 		       <p>The rollout state of the deployment. When a service deployment is started, it begins
   * 			in an <code>IN_PROGRESS</code> state. When the service reaches a steady state, the
   * 			deployment will transition to a <code>COMPLETED</code> state. If the service fails to
   * 			reach a steady state and circuit breaker is enabled, the deployment will transition to a
   * 				<code>FAILED</code> state. A deployment in <code>FAILED</code> state will launch no
   * 			new tasks. For more information, see <a>DeploymentCircuitBreaker</a>.</p>
   */
  rolloutState?: DeploymentRolloutState | string;

  /**
   * <p>A description of the rollout state of a deployment.</p>
   */
  rolloutStateReason?: string;
}

export namespace Deployment {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: Deployment): any => ({
    ...obj,
  });
}

/**
 * <p>Details on an event associated with a service.</p>
 */
export interface ServiceEvent {
  /**
   * <p>The ID string of the event.</p>
   */
  id?: string;

  /**
   * <p>The Unix timestamp for when the event was triggered.</p>
   */
  createdAt?: Date;

  /**
   * <p>The event message.</p>
   */
  message?: string;
}

export namespace ServiceEvent {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ServiceEvent): any => ({
    ...obj,
  });
}

export enum ScaleUnit {
  PERCENT = "PERCENT",
}

/**
 * <p>A floating-point percentage of the desired number of tasks to place and keep running
 * 			in the task set.</p>
 */
export interface Scale {
  /**
   * <p>The value, specified as a percent total of a service's <code>desiredCount</code>, to
   * 			scale the task set. Accepted values are numbers between 0 and 100.</p>
   */
  value?: number;

  /**
   * <p>The unit of measure for the scale value.</p>
   */
  unit?: ScaleUnit | string;
}

export namespace Scale {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: Scale): any => ({
    ...obj,
  });
}

export enum StabilityStatus {
  STABILIZING = "STABILIZING",
  STEADY_STATE = "STEADY_STATE",
}

/**
 * <p>Information about a set of Amazon ECS tasks in either an CodeDeploy or an <code>EXTERNAL</code>
 * 			deployment. An Amazon ECS task set includes details such as the desired number of tasks, how
 * 			many tasks are running, and whether the task set serves production traffic.</p>
 */
export interface TaskSet {
  /**
   * <p>The ID of the task set.</p>
   */
  id?: string;

  /**
   * <p>The Amazon Resource Name (ARN) of the task set.</p>
   */
  taskSetArn?: string;

  /**
   * <p>The Amazon Resource Name (ARN) of the service the task set exists in.</p>
   */
  serviceArn?: string;

  /**
   * <p>The Amazon Resource Name (ARN) of the cluster that the service that hosts the task set exists
   * 			in.</p>
   */
  clusterArn?: string;

  /**
   * <p>The tag specified when a task set is started. If the task set is created by an CodeDeploy
   * 			deployment, the <code>startedBy</code> parameter is <code>CODE_DEPLOY</code>. For a task
   * 			set created for an external deployment, the startedBy field isn't used.</p>
   */
  startedBy?: string;

  /**
   * <p>The external ID associated with the task set.</p>
   * 		       <p>If a task set is created by an CodeDeploy deployment, the <code>externalId</code> parameter
   * 			contains the CodeDeploy deployment ID.</p>
   * 		       <p>If a task set is created for an external deployment and is associated with a service
   * 			discovery registry, the <code>externalId</code> parameter contains the
   * 				<code>ECS_TASK_SET_EXTERNAL_ID</code> Cloud Map attribute.</p>
   */
  externalId?: string;

  /**
   * <p>The status of the task set. The following describes each state:</p>
   * 		       <dl>
   *             <dt>PRIMARY</dt>
   *             <dd>
   * 					          <p>The task set is serving production traffic.</p>
   * 				        </dd>
   *             <dt>ACTIVE</dt>
   *             <dd>
   * 					          <p>The task set is not serving production traffic.</p>
   * 				        </dd>
   *             <dt>DRAINING</dt>
   *             <dd>
   * 					          <p>The tasks in the task set are being stopped and their corresponding
   * 						targets are being deregistered from their target group.</p>
   * 				        </dd>
   *          </dl>
   */
  status?: string;

  /**
   * <p>The task definition the task set is using.</p>
   */
  taskDefinition?: string;

  /**
   * <p>The computed desired count for the task set. This is calculated by multiplying the
   * 			service's <code>desiredCount</code> by the task set's <code>scale</code> percentage. The
   * 			result is always rounded up. For example, if the computed desired count is 1.2, it
   * 			rounds up to 2 tasks.</p>
   */
  computedDesiredCount?: number;

  /**
   * <p>The number of tasks in the task set that are in the <code>PENDING</code> status during
   * 			a deployment. A task in the <code>PENDING</code> state is preparing to enter the
   * 				<code>RUNNING</code> state. A task set enters the <code>PENDING</code> status when
   * 			it launches for the first time or when it is restarted after being in the
   * 				<code>STOPPED</code> state.</p>
   */
  pendingCount?: number;

  /**
   * <p>The number of tasks in the task set that are in the <code>RUNNING</code> status during
   * 			a deployment. A task in the <code>RUNNING</code> state is running and ready for
   * 			use.</p>
   */
  runningCount?: number;

  /**
   * <p>The Unix timestamp for when the task set was created.</p>
   */
  createdAt?: Date;

  /**
   * <p>The Unix timestamp for when the task set was last updated.</p>
   */
  updatedAt?: Date;

  /**
   * <p>The launch type the tasks in the task set are using. For more information, see <a href="https://docs.aws.amazon.com/AmazonECS/latest/developerguide/launch_types.html">Amazon ECS
   * 				launch types</a> in the <i>Amazon Elastic Container Service Developer Guide</i>.</p>
   */
  launchType?: LaunchType | string;

  /**
   * <p>The capacity provider strategy associated with the task set.</p>
   */
  capacityProviderStrategy?: CapacityProviderStrategyItem[];

  /**
   * <p>The Fargate platform version on which the tasks in the task set are running. A
   * 			platform version is only specified for tasks run on Fargate. For more information, see
   * 				<a href="https://docs.aws.amazon.com/AmazonECS/latest/developerguide/platform_versions.html">Fargate platform
   * 				versions</a> in the <i>Amazon Elastic Container Service Developer Guide</i>.</p>
   */
  platformVersion?: string;

  /**
   * <p>The network configuration for the task set.</p>
   */
  networkConfiguration?: NetworkConfiguration;

  /**
   * <p>Details on a load balancer that is used with a task set.</p>
   */
  loadBalancers?: LoadBalancer[];

  /**
   * <p>The details of the service discovery registries to assign to this task set. For more
   * 			information, see <a href="https://docs.aws.amazon.com/AmazonECS/latest/developerguide/service-discovery.html">Service
   * 				discovery</a>.</p>
   */
  serviceRegistries?: ServiceRegistry[];

  /**
   * <p>A floating-point percentage of the desired number of tasks to place and keep running
   * 			in the task set.</p>
   */
  scale?: Scale;

  /**
   * <p>The stability status, which indicates whether the task set has reached a steady state.
   * 			If the following conditions are met, the task set will be in
   * 			<code>STEADY_STATE</code>:</p>
   * 		       <ul>
   *             <li>
   * 				           <p>The task <code>runningCount</code> is equal to the
   * 						<code>computedDesiredCount</code>.</p>
   * 			         </li>
   *             <li>
   * 				           <p>The <code>pendingCount</code> is <code>0</code>.</p>
   * 			         </li>
   *             <li>
   * 				           <p>There are no tasks running on container instances in the <code>DRAINING</code>
   * 					status.</p>
   * 			         </li>
   *             <li>
   * 				           <p>All tasks are reporting a healthy status from the load balancers, service
   * 					discovery, and container health checks.</p>
   * 			         </li>
   *          </ul>
   * 		       <p>If any of those conditions are not met, the stability status returns
   * 				<code>STABILIZING</code>.</p>
   */
  stabilityStatus?: StabilityStatus | string;

  /**
   * <p>The Unix timestamp for when the task set stability status was retrieved.</p>
   */
  stabilityStatusAt?: Date;

  /**
   * <p>The metadata that you apply to the task set to help you categorize and organize them.
   * 			Each tag consists of a key and an optional value, both of which you define.</p>
   * 		       <p>The following basic restrictions apply to tags:</p>
   *         <ul>
   *             <li>
   *                 <p>Maximum number of tags per resource - 50</p>
   *             </li>
   *             <li>
   *                 <p>For each resource, each tag key must be unique, and each tag key can have only
   *                     one value.</p>
   *             </li>
   *             <li>
   *                 <p>Maximum key length - 128 Unicode characters in UTF-8</p>
   *             </li>
   *             <li>
   *                 <p>Maximum value length - 256 Unicode characters in UTF-8</p>
   *             </li>
   *             <li>
   *                 <p>If your tagging schema is used across multiple services and resources,
   *                     remember that other services may have restrictions on allowed characters.
   *                     Generally allowed characters are: letters, numbers, and spaces representable in
   *                     UTF-8, and the following characters: + - = . _ : / @.</p>
   *             </li>
   *             <li>
   *                 <p>Tag keys and values are case-sensitive.</p>
   *             </li>
   *             <li>
   *                 <p>Do not use <code>aws:</code>, <code>AWS:</code>, or any upper or lowercase
   *                     combination of such as a prefix for either keys or values as it is reserved for
   *                     Amazon Web Services use. You cannot edit or delete tag keys or values with this prefix. Tags with
   *                     this prefix do not count against your tags per resource limit.</p>
   *             </li>
   *          </ul>
   */
  tags?: Tag[];
}

export namespace TaskSet {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: TaskSet): any => ({
    ...obj,
  });
}

/**
 * <p>Details on a service within a cluster</p>
 */
export interface Service {
  /**
   * <p>The ARN that identifies the service. The ARN contains the <code>arn:aws:ecs</code> namespace, followed by the Region of the service, the Amazon Web Services account ID of the service owner, the <code>service</code> namespace, and then the service name. For example, <code>arn:aws:ecs:region:012345678910:service/my-service</code>.</p>
   */
  serviceArn?: string;

  /**
   * <p>The name of your service. Up to 255 letters (uppercase and lowercase), numbers, underscores, and hyphens are allowed. Service names must be unique within
   * 			a cluster, but you can have similarly named services in multiple clusters within a
   * 			Region or across multiple Regions.</p>
   */
  serviceName?: string;

  /**
   * <p>The Amazon Resource Name (ARN) of the cluster that hosts the service.</p>
   */
  clusterArn?: string;

  /**
   * <p>A list of Elastic Load Balancing load balancer objects, containing the load balancer name, the
   * 			container name (as it appears in a container definition), and the container port to
   * 			access from the load balancer.</p>
   */
  loadBalancers?: LoadBalancer[];

  /**
   * <p>The details of the service discovery registries to assign to this service. For more
   * 			information, see <a href="https://docs.aws.amazon.com/AmazonECS/latest/developerguide/service-discovery.html">Service
   * 				Discovery</a>.</p>
   */
  serviceRegistries?: ServiceRegistry[];

  /**
   * <p>The status of the service. The valid values are <code>ACTIVE</code>,
   * 				<code>DRAINING</code>, or <code>INACTIVE</code>.</p>
   */
  status?: string;

  /**
   * <p>The desired number of instantiations of the task definition to keep running on the
   * 			service. This value is specified when the service is created with <a>CreateService</a>, and it can be modified with <a>UpdateService</a>.</p>
   */
  desiredCount?: number;

  /**
   * <p>The number of tasks in the cluster that are in the <code>RUNNING</code> state.</p>
   */
  runningCount?: number;

  /**
   * <p>The number of tasks in the cluster that are in the <code>PENDING</code> state.</p>
   */
  pendingCount?: number;

  /**
   * <p>The launch type the service is using. When using the DescribeServices API, this field
   * 			is omitted if the service was created using a capacity provider strategy.</p>
   */
  launchType?: LaunchType | string;

  /**
   * <p>The capacity provider strategy the service is using. When using the DescribeServices
   * 			API, this field is omitted if the service was created using a launch type.</p>
   */
  capacityProviderStrategy?: CapacityProviderStrategyItem[];

  /**
   * <p>The platform version on which to run your service. A platform version is only
   * 			specified for tasks hosted on Fargate. If one is not specified, the
   * 				<code>LATEST</code> platform version is used by default. For more information, see
   * 				<a href="https://docs.aws.amazon.com/AmazonECS/latest/developerguide/platform_versions.html">Fargate Platform
   * 				Versions</a> in the <i>Amazon Elastic Container Service Developer Guide</i>.</p>
   */
  platformVersion?: string;

  /**
   * <p>The task definition to use for tasks in the service. This value is specified when the
   * 			service is created with <a>CreateService</a>, and it can be modified with
   * 				<a>UpdateService</a>.</p>
   */
  taskDefinition?: string;

  /**
   * <p>Optional deployment parameters that control how many tasks run during the deployment
   * 			and the ordering of stopping and starting tasks.</p>
   */
  deploymentConfiguration?: DeploymentConfiguration;

  /**
   * <p>Information about a set of Amazon ECS tasks in either an CodeDeploy or an <code>EXTERNAL</code>
   * 			deployment. An Amazon ECS task set includes details such as the desired number of tasks, how
   * 			many tasks are running, and whether the task set serves production traffic.</p>
   */
  taskSets?: TaskSet[];

  /**
   * <p>The current state of deployments for the service.</p>
   */
  deployments?: Deployment[];

  /**
   * <p>The ARN of the IAM role associated with the service that allows the Amazon ECS container
   * 			agent to register container instances with an Elastic Load Balancing load balancer.</p>
   */
  roleArn?: string;

  /**
   * <p>The event stream for your service. A maximum of 100 of the latest events are
   * 			displayed.</p>
   */
  events?: ServiceEvent[];

  /**
   * <p>The Unix timestamp for when the service was created.</p>
   */
  createdAt?: Date;

  /**
   * <p>The placement constraints for the tasks in the service.</p>
   */
  placementConstraints?: PlacementConstraint[];

  /**
   * <p>The placement strategy that determines how tasks for the service are placed.</p>
   */
  placementStrategy?: PlacementStrategy[];

  /**
   * <p>The VPC subnet and security group configuration for tasks that receive their own
   *             elastic network interface by using the <code>awsvpc</code> networking mode.</p>
   */
  networkConfiguration?: NetworkConfiguration;

  /**
   * <p>The period of time, in seconds, that the Amazon ECS service scheduler ignores unhealthy
   * 			Elastic Load Balancing target health checks after a task has first started.</p>
   */
  healthCheckGracePeriodSeconds?: number;

  /**
   * <p>The scheduling strategy to use for the service. For more information, see <a href="https://docs.aws.amazon.com/AmazonECS/latest/developerguide/ecs_services.html">Services</a>.</p>
   * 		       <p>There are two service scheduler strategies available:</p>
   * 		       <ul>
   *             <li>
   * 				           <p>
   *                   <code>REPLICA</code>-The replica scheduling strategy places and
   * 					maintains the desired number of tasks across your cluster. By default, the
   * 					service scheduler spreads tasks across Availability Zones. You can use task
   * 					placement strategies and constraints to customize task placement
   * 					decisions.</p>
   * 			         </li>
   *             <li>
   * 				           <p>
   *                   <code>DAEMON</code>-The daemon scheduling strategy deploys exactly one
   * 					task on each active container instance that meets all of the task placement
   * 					constraints that you specify in your cluster. The service scheduler also
   * 					evaluates the task placement constraints for running tasks and will stop tasks
   * 					that do not meet the placement constraints.</p>
   * 				           <note>
   * 					             <p>Fargate tasks do not support the <code>DAEMON</code>
   * 						scheduling strategy.</p>
   * 				           </note>
   * 			         </li>
   *          </ul>
   */
  schedulingStrategy?: SchedulingStrategy | string;

  /**
   * <p>The deployment controller type the service is using. When using the DescribeServices
   * 			API, this field is omitted if the service is using the <code>ECS</code> deployment
   * 			controller type.</p>
   */
  deploymentController?: DeploymentController;

  /**
   * <p>The metadata that you apply to the service to help you categorize and organize them.
   * 			Each tag consists of a key and an optional value, both of which you define.</p>
   * 		       <p>The following basic restrictions apply to tags:</p>
   *         <ul>
   *             <li>
   *                 <p>Maximum number of tags per resource - 50</p>
   *             </li>
   *             <li>
   *                 <p>For each resource, each tag key must be unique, and each tag key can have only
   *                     one value.</p>
   *             </li>
   *             <li>
   *                 <p>Maximum key length - 128 Unicode characters in UTF-8</p>
   *             </li>
   *             <li>
   *                 <p>Maximum value length - 256 Unicode characters in UTF-8</p>
   *             </li>
   *             <li>
   *                 <p>If your tagging schema is used across multiple services and resources,
   *                     remember that other services may have restrictions on allowed characters.
   *                     Generally allowed characters are: letters, numbers, and spaces representable in
   *                     UTF-8, and the following characters: + - = . _ : / @.</p>
   *             </li>
   *             <li>
   *                 <p>Tag keys and values are case-sensitive.</p>
   *             </li>
   *             <li>
   *                 <p>Do not use <code>aws:</code>, <code>AWS:</code>, or any upper or lowercase
   *                     combination of such as a prefix for either keys or values as it is reserved for
   *                     Amazon Web Services use. You cannot edit or delete tag keys or values with this prefix. Tags with
   *                     this prefix do not count against your tags per resource limit.</p>
   *             </li>
   *          </ul>
   */
  tags?: Tag[];

  /**
   * <p>The principal that created the service.</p>
   */
  createdBy?: string;

  /**
   * <p>Specifies whether to enable Amazon ECS managed tags for the tasks in the service. For more
   * 			information, see <a href="https://docs.aws.amazon.com/AmazonECS/latest/developerguide/ecs-using-tags.html">Tagging Your Amazon ECS
   * 				Resources</a> in the <i>Amazon Elastic Container Service Developer Guide</i>.</p>
   */
  enableECSManagedTags?: boolean;

  /**
   * <p>Specifies whether to propagate the tags from the task definition or the service to the
   * 			task. If no value is specified, the tags are not propagated.</p>
   */
  propagateTags?: PropagateTags | string;

  /**
   * <p>Whether or not the execute command functionality is enabled for the service. If
   * 				<code>true</code>, the execute command functionality is enabled for all containers
   * 			in tasks as part of the service.</p>
   */
  enableExecuteCommand?: boolean;
}

export namespace Service {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: Service): any => ({
    ...obj,
  });
}

export interface CreateServiceResponse {
  /**
   * <p>The full description of your service following the create call.</p>
   * 		       <p>A service will return either a <code>capacityProviderStrategy</code> or
   * 				<code>launchType</code> parameter, but not both, depending on which one was
   * 			specified during creation.</p>
   * 		       <p>If a service is using the <code>ECS</code> deployment controller, the
   * 				<code>deploymentController</code> and <code>taskSets</code> parameters will not be
   * 			returned.</p>
   * 		       <p>If the service is using the <code>CODE_DEPLOY</code> deployment controller, the
   * 				<code>deploymentController</code>, <code>taskSets</code> and
   * 				<code>deployments</code> parameters will be returned, however the
   * 				<code>deployments</code> parameter will be an empty list.</p>
   */
  service?: Service;
}

export namespace CreateServiceResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: CreateServiceResponse): any => ({
    ...obj,
  });
}

/**
 * <p>The specified platform version does not satisfy the task definition's required
 * 			capabilities.</p>
 */
export interface PlatformTaskDefinitionIncompatibilityException extends __SmithyException, $MetadataBearer {
  name: "PlatformTaskDefinitionIncompatibilityException";
  $fault: "client";
  message?: string;
}

export namespace PlatformTaskDefinitionIncompatibilityException {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: PlatformTaskDefinitionIncompatibilityException): any => ({
    ...obj,
  });
}

/**
 * <p>The specified platform version does not exist.</p>
 */
export interface PlatformUnknownException extends __SmithyException, $MetadataBearer {
  name: "PlatformUnknownException";
  $fault: "client";
  message?: string;
}

export namespace PlatformUnknownException {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: PlatformUnknownException): any => ({
    ...obj,
  });
}

/**
 * <p>The specified task is not supported in this Region.</p>
 */
export interface UnsupportedFeatureException extends __SmithyException, $MetadataBearer {
  name: "UnsupportedFeatureException";
  $fault: "client";
  message?: string;
}

export namespace UnsupportedFeatureException {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: UnsupportedFeatureException): any => ({
    ...obj,
  });
}

export interface CreateTaskSetRequest {
  /**
   * <p>The short name or full Amazon Resource Name (ARN) of the service to create the task set in.</p>
   */
  service: string | undefined;

  /**
   * <p>The short name or full Amazon Resource Name (ARN) of the cluster that hosts the service to create the
   * 			task set in.</p>
   */
  cluster: string | undefined;

  /**
   * <p>An optional non-unique tag that identifies this task set in external systems. If the
   * 			task set is associated with a service discovery registry, the tasks in this task set
   * 			will have the <code>ECS_TASK_SET_EXTERNAL_ID</code> Cloud Map attribute set to the provided
   * 			value.</p>
   */
  externalId?: string;

  /**
   * <p>The task definition for the tasks in the task set to use.</p>
   */
  taskDefinition: string | undefined;

  /**
   * <p>An object representing the network configuration for a task set.</p>
   */
  networkConfiguration?: NetworkConfiguration;

  /**
   * <p>A load balancer object representing the load balancer to use with the task set. The
   * 			supported load balancer types are either an Application Load Balancer or a Network Load Balancer.</p>
   */
  loadBalancers?: LoadBalancer[];

  /**
   * <p>The details of the service discovery registries to assign to this task set. For more
   * 			information, see <a href="https://docs.aws.amazon.com/AmazonECS/latest/developerguide/service-discovery.html">Service
   * 				Discovery</a>.</p>
   */
  serviceRegistries?: ServiceRegistry[];

  /**
   * <p>The launch type that new tasks in the task set will use. For more information, see
   * 				<a href="https://docs.aws.amazon.com/AmazonECS/latest/developerguide/launch_types.html">Amazon ECS Launch Types</a> in the <i>Amazon Elastic Container Service Developer Guide</i>.</p>
   * 		       <p>If a <code>launchType</code> is specified, the <code>capacityProviderStrategy</code>
   * 			parameter must be omitted.</p>
   */
  launchType?: LaunchType | string;

  /**
   * <p>The capacity provider strategy to use for the task set.</p>
   * 		       <p>A capacity provider strategy consists of one or more capacity providers along with the
   * 				<code>base</code> and <code>weight</code> to assign to them. A capacity provider
   * 			must be associated with the cluster to be used in a capacity provider strategy. The
   * 				<a>PutClusterCapacityProviders</a> API is used to associate a capacity
   * 			provider with a cluster. Only capacity providers with an <code>ACTIVE</code> or
   * 				<code>UPDATING</code> status can be used.</p>
   * 		       <p>If a <code>capacityProviderStrategy</code> is specified, the <code>launchType</code>
   * 			parameter must be omitted. If no <code>capacityProviderStrategy</code> or
   * 				<code>launchType</code> is specified, the
   * 				<code>defaultCapacityProviderStrategy</code> for the cluster is used.</p>
   * 		       <p>If specifying a capacity provider that uses an Auto Scaling group, the capacity
   * 			provider must already be created. New capacity providers can be created with the <a>CreateCapacityProvider</a> API operation.</p>
   * 		       <p>To use a Fargate capacity provider, specify either the <code>FARGATE</code> or
   * 				<code>FARGATE_SPOT</code> capacity providers. The Fargate capacity providers are
   * 			available to all accounts and only need to be associated with a cluster to be
   * 			used.</p>
   * 		       <p>The <a>PutClusterCapacityProviders</a> API operation is used to update the
   * 			list of available capacity providers for a cluster after the cluster is created.</p>
   */
  capacityProviderStrategy?: CapacityProviderStrategyItem[];

  /**
   * <p>The platform version that the tasks in the task set should use. A platform version is
   * 			specified only for tasks using the Fargate launch type. If one isn't
   * 			specified, the <code>LATEST</code> platform version is used by default.</p>
   */
  platformVersion?: string;

  /**
   * <p>A floating-point percentage of the desired number of tasks to place and keep running
   * 			in the task set.</p>
   */
  scale?: Scale;

  /**
   * <p>Unique, case-sensitive identifier that you provide to ensure the idempotency of the
   * 			request. Up to 32 ASCII characters are allowed.</p>
   */
  clientToken?: string;

  /**
   * <p>The metadata that you apply to the task set to help you categorize and organize them.
   * 			Each tag consists of a key and an optional value, both of which you define. When a
   * 			service is deleted, the tags are deleted as well.</p>
   *          <p>The following basic restrictions apply to tags:</p>
   *         <ul>
   *             <li>
   *                 <p>Maximum number of tags per resource - 50</p>
   *             </li>
   *             <li>
   *                 <p>For each resource, each tag key must be unique, and each tag key can have only
   *                     one value.</p>
   *             </li>
   *             <li>
   *                 <p>Maximum key length - 128 Unicode characters in UTF-8</p>
   *             </li>
   *             <li>
   *                 <p>Maximum value length - 256 Unicode characters in UTF-8</p>
   *             </li>
   *             <li>
   *                 <p>If your tagging schema is used across multiple services and resources,
   *                     remember that other services may have restrictions on allowed characters.
   *                     Generally allowed characters are: letters, numbers, and spaces representable in
   *                     UTF-8, and the following characters: + - = . _ : / @.</p>
   *             </li>
   *             <li>
   *                 <p>Tag keys and values are case-sensitive.</p>
   *             </li>
   *             <li>
   *                 <p>Do not use <code>aws:</code>, <code>AWS:</code>, or any upper or lowercase
   *                     combination of such as a prefix for either keys or values as it is reserved for
   *                     Amazon Web Services use. You cannot edit or delete tag keys or values with this prefix. Tags with
   *                     this prefix do not count against your tags per resource limit.</p>
   *             </li>
   *          </ul>
   */
  tags?: Tag[];
}

export namespace CreateTaskSetRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: CreateTaskSetRequest): any => ({
    ...obj,
  });
}

export interface CreateTaskSetResponse {
  /**
   * <p>Information about a set of Amazon ECS tasks in either an CodeDeploy or an
   * 				<code>EXTERNAL</code> deployment. A task set includes details such as the desired
   * 			number of tasks, how many tasks are running, and whether the task set serves production
   * 			traffic.</p>
   */
  taskSet?: TaskSet;
}

export namespace CreateTaskSetResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: CreateTaskSetResponse): any => ({
    ...obj,
  });
}

/**
 * <p>The specified service is not active. You can't update a service that is inactive. If
 * 			you have previously deleted a service, you can re-create it with <a>CreateService</a>.</p>
 */
export interface ServiceNotActiveException extends __SmithyException, $MetadataBearer {
  name: "ServiceNotActiveException";
  $fault: "client";
  message?: string;
}

export namespace ServiceNotActiveException {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ServiceNotActiveException): any => ({
    ...obj,
  });
}

/**
 * <p>The specified service could not be found. You can view your available services with
 * 				<a>ListServices</a>. Amazon ECS services are cluster-specific and
 * 			Region-specific.</p>
 */
export interface ServiceNotFoundException extends __SmithyException, $MetadataBearer {
  name: "ServiceNotFoundException";
  $fault: "client";
  message?: string;
}

export namespace ServiceNotFoundException {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ServiceNotFoundException): any => ({
    ...obj,
  });
}

export enum SettingName {
  AWSVPC_TRUNKING = "awsvpcTrunking",
  CONTAINER_INSIGHTS = "containerInsights",
  CONTAINER_INSTANCE_LONG_ARN_FORMAT = "containerInstanceLongArnFormat",
  SERVICE_LONG_ARN_FORMAT = "serviceLongArnFormat",
  TASK_LONG_ARN_FORMAT = "taskLongArnFormat",
}

export interface DeleteAccountSettingRequest {
  /**
   * <p>The resource name for which to disable the account setting. If
   * 				<code>serviceLongArnFormat</code> is specified, the ARN for your Amazon ECS services is
   * 			affected. If <code>taskLongArnFormat</code> is specified, the ARN and resource ID for
   * 			your Amazon ECS tasks is affected. If <code>containerInstanceLongArnFormat</code> is
   * 			specified, the ARN and resource ID for your Amazon ECS container instances is affected. If
   * 				<code>awsvpcTrunking</code> is specified, the ENI limit for your Amazon ECS container
   * 			instances is affected.</p>
   */
  name: SettingName | string | undefined;

  /**
   * <p>The ARN of the principal, which can be an IAM user, IAM role, or the root user. If you
   * 			specify the root user, it disables the account setting for all IAM users, IAM roles, and
   * 			the root user of the account unless an IAM user or role explicitly overrides these
   * 			settings. If this field is omitted, the setting is changed only for the authenticated
   * 			user.</p>
   */
  principalArn?: string;
}

export namespace DeleteAccountSettingRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DeleteAccountSettingRequest): any => ({
    ...obj,
  });
}

/**
 * <p>The current account setting for a resource.</p>
 */
export interface Setting {
  /**
   * <p>The Amazon ECS resource name.</p>
   */
  name?: SettingName | string;

  /**
   * <p>Whether the account setting is enabled or disabled for the specified resource.</p>
   */
  value?: string;

  /**
   * <p>The ARN of the principal, which can be an IAM user, IAM role, or the root user. If
   * 			this field is omitted, the authenticated user is assumed.</p>
   */
  principalArn?: string;
}

export namespace Setting {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: Setting): any => ({
    ...obj,
  });
}

export interface DeleteAccountSettingResponse {
  /**
   * <p>The account setting for the specified principal ARN.</p>
   */
  setting?: Setting;
}

export namespace DeleteAccountSettingResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DeleteAccountSettingResponse): any => ({
    ...obj,
  });
}

export enum TargetType {
  CONTAINER_INSTANCE = "container-instance",
}

/**
 * <p>An attribute is a name-value pair associated with an Amazon ECS object. Attributes enable
 * 			you to extend the Amazon ECS data model by adding custom metadata to your resources. For more
 * 			information, see <a href="https://docs.aws.amazon.com/AmazonECS/latest/developerguide/task-placement-constraints.html#attributes">Attributes</a> in the <i>Amazon Elastic Container Service Developer Guide</i>.</p>
 */
export interface Attribute {
  /**
   * <p>The name of the attribute. The <code>name</code> must contain between 1 and 128
   * 			characters and name may contain letters (uppercase and lowercase), numbers, hyphens,
   * 			underscores, forward slashes, back slashes, or periods.</p>
   */
  name: string | undefined;

  /**
   * <p>The value of the attribute. The <code>value</code> must contain between 1 and 128
   * 			characters and may contain letters (uppercase and lowercase), numbers, hyphens,
   * 			underscores, periods, at signs (@), forward slashes, back slashes, colons, or spaces.
   * 			The value cannot contain any leading or trailing whitespace.</p>
   */
  value?: string;

  /**
   * <p>The type of the target with which to attach the attribute. This parameter is required
   * 			if you use the short form ID for a resource instead of the full ARN.</p>
   */
  targetType?: TargetType | string;

  /**
   * <p>The ID of the target. You can specify the short form ID for a resource or the full
   * 			Amazon Resource Name (ARN).</p>
   */
  targetId?: string;
}

export namespace Attribute {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: Attribute): any => ({
    ...obj,
  });
}

export interface DeleteAttributesRequest {
  /**
   * <p>The short name or full Amazon Resource Name (ARN) of the cluster that contains the resource to delete
   * 			attributes. If you do not specify a cluster, the default cluster is assumed.</p>
   */
  cluster?: string;

  /**
   * <p>The attributes to delete from your resource. You can specify up to 10 attributes per
   * 			request. For custom attributes, specify the attribute name and target ID, but do not
   * 			specify the value. If you specify the target ID using the short form, you must also
   * 			specify the target type.</p>
   */
  attributes: Attribute[] | undefined;
}

export namespace DeleteAttributesRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DeleteAttributesRequest): any => ({
    ...obj,
  });
}

export interface DeleteAttributesResponse {
  /**
   * <p>A list of attribute objects that were successfully deleted from your resource.</p>
   */
  attributes?: Attribute[];
}

export namespace DeleteAttributesResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DeleteAttributesResponse): any => ({
    ...obj,
  });
}

/**
 * <p>The specified target could not be found. You can view your available container
 * 			instances with <a>ListContainerInstances</a>. Amazon ECS container instances are
 * 			cluster-specific and Region-specific.</p>
 */
export interface TargetNotFoundException extends __SmithyException, $MetadataBearer {
  name: "TargetNotFoundException";
  $fault: "client";
  message?: string;
}

export namespace TargetNotFoundException {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: TargetNotFoundException): any => ({
    ...obj,
  });
}

export interface DeleteCapacityProviderRequest {
  /**
   * <p>The short name or full Amazon Resource Name (ARN) of the capacity provider to delete.</p>
   */
  capacityProvider: string | undefined;
}

export namespace DeleteCapacityProviderRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DeleteCapacityProviderRequest): any => ({
    ...obj,
  });
}

export interface DeleteCapacityProviderResponse {
  /**
   * <p>The details of the capacity provider.</p>
   */
  capacityProvider?: CapacityProvider;
}

export namespace DeleteCapacityProviderResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DeleteCapacityProviderResponse): any => ({
    ...obj,
  });
}

/**
 * <p>You cannot delete a cluster that has registered container instances. First, deregister
 * 			the container instances before you can delete the cluster. For more information, see
 * 				<a>DeregisterContainerInstance</a>.</p>
 */
export interface ClusterContainsContainerInstancesException extends __SmithyException, $MetadataBearer {
  name: "ClusterContainsContainerInstancesException";
  $fault: "client";
  message?: string;
}

export namespace ClusterContainsContainerInstancesException {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ClusterContainsContainerInstancesException): any => ({
    ...obj,
  });
}

/**
 * <p>You cannot delete a cluster that contains services. First, update the service to
 * 			reduce its desired task count to 0 and then delete the service. For more information,
 * 			see <a>UpdateService</a> and <a>DeleteService</a>.</p>
 */
export interface ClusterContainsServicesException extends __SmithyException, $MetadataBearer {
  name: "ClusterContainsServicesException";
  $fault: "client";
  message?: string;
}

export namespace ClusterContainsServicesException {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ClusterContainsServicesException): any => ({
    ...obj,
  });
}

/**
 * <p>You cannot delete a cluster that has active tasks.</p>
 */
export interface ClusterContainsTasksException extends __SmithyException, $MetadataBearer {
  name: "ClusterContainsTasksException";
  $fault: "client";
  message?: string;
}

export namespace ClusterContainsTasksException {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ClusterContainsTasksException): any => ({
    ...obj,
  });
}

export interface DeleteClusterRequest {
  /**
   * <p>The short name or full Amazon Resource Name (ARN) of the cluster to delete.</p>
   */
  cluster: string | undefined;
}

export namespace DeleteClusterRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DeleteClusterRequest): any => ({
    ...obj,
  });
}

export interface DeleteClusterResponse {
  /**
   * <p>The full description of the deleted cluster.</p>
   */
  cluster?: Cluster;
}

export namespace DeleteClusterResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DeleteClusterResponse): any => ({
    ...obj,
  });
}

export interface DeleteServiceRequest {
  /**
   * <p>The short name or full Amazon Resource Name (ARN) of the cluster that hosts the service to delete.
   * 			If you do not specify a cluster, the default cluster is assumed.</p>
   */
  cluster?: string;

  /**
   * <p>The name of the service to delete.</p>
   */
  service: string | undefined;

  /**
   * <p>If <code>true</code>, allows you to delete a service even if it has not been scaled
   * 			down to zero tasks. It is only necessary to use this if the service is using the
   * 				<code>REPLICA</code> scheduling strategy.</p>
   */
  force?: boolean;
}

export namespace DeleteServiceRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DeleteServiceRequest): any => ({
    ...obj,
  });
}

export interface DeleteServiceResponse {
  /**
   * <p>The full description of the deleted service.</p>
   */
  service?: Service;
}

export namespace DeleteServiceResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DeleteServiceResponse): any => ({
    ...obj,
  });
}

export interface DeleteTaskSetRequest {
  /**
   * <p>The short name or full Amazon Resource Name (ARN) of the cluster that hosts the service that the task
   * 			set exists in to delete.</p>
   */
  cluster: string | undefined;

  /**
   * <p>The short name or full Amazon Resource Name (ARN) of the service that hosts the task set to
   * 			delete.</p>
   */
  service: string | undefined;

  /**
   * <p>The task set ID or full Amazon Resource Name (ARN) of the task set to delete.</p>
   */
  taskSet: string | undefined;

  /**
   * <p>If <code>true</code>, this allows you to delete a task set even if it hasn't been
   * 			scaled down to zero.</p>
   */
  force?: boolean;
}

export namespace DeleteTaskSetRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DeleteTaskSetRequest): any => ({
    ...obj,
  });
}

export interface DeleteTaskSetResponse {
  /**
   * <p>Details about the task set.</p>
   */
  taskSet?: TaskSet;
}

export namespace DeleteTaskSetResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DeleteTaskSetResponse): any => ({
    ...obj,
  });
}

/**
 * <p>The specified task set could not be found. You can view your available task sets with
 * 				<a>DescribeTaskSets</a>. Task sets are specific to each cluster, service
 * 			and Region.</p>
 */
export interface TaskSetNotFoundException extends __SmithyException, $MetadataBearer {
  name: "TaskSetNotFoundException";
  $fault: "client";
  message?: string;
}

export namespace TaskSetNotFoundException {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: TaskSetNotFoundException): any => ({
    ...obj,
  });
}

export interface DeregisterContainerInstanceRequest {
  /**
   * <p>The short name or full Amazon Resource Name (ARN) of the cluster that hosts the container instance to
   * 			deregister. If you do not specify a cluster, the default cluster is assumed.</p>
   */
  cluster?: string;

  /**
   * <p>The container instance ID or full ARN of the container instance to deregister.
   * 			The ARN contains the <code>arn:aws:ecs</code> namespace, followed by the Region of the container instance, the Amazon Web Services account ID of the container instance owner, the <code>container-instance</code> namespace, and then the container instance ID. For example, <code>arn:aws:ecs:region:aws_account_id:container-instance/container_instance_ID</code>.</p>
   */
  containerInstance: string | undefined;

  /**
   * <p>Forces the deregistration of the container instance. If you have tasks running on the
   * 			container instance when you deregister it with the <code>force</code> option, these
   * 			tasks remain running until you terminate the instance or the tasks stop through some
   * 			other means, but they are orphaned (no longer monitored or accounted for by Amazon ECS). If
   * 			an orphaned task on your container instance is part of an Amazon ECS service, then the
   * 			service scheduler starts another copy of that task, on a different container instance if
   * 			possible. </p>
   * 		       <p>Any containers in orphaned service tasks that are registered with a Classic Load Balancer or an Application Load Balancer
   * 			target group are deregistered. They begin connection draining according to the settings
   * 			on the load balancer or target group.</p>
   */
  force?: boolean;
}

export namespace DeregisterContainerInstanceRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DeregisterContainerInstanceRequest): any => ({
    ...obj,
  });
}

/**
 * <p>Describes the resources available for a container instance.</p>
 */
export interface Resource {
  /**
   * <p>The name of the resource, such as <code>CPU</code>, <code>MEMORY</code>,
   * 				<code>PORTS</code>, <code>PORTS_UDP</code>, or a user-defined resource.</p>
   */
  name?: string;

  /**
   * <p>The type of the resource, such as <code>INTEGER</code>, <code>DOUBLE</code>,
   * 				<code>LONG</code>, or <code>STRINGSET</code>.</p>
   */
  type?: string;

  /**
   * <p>When the <code>doubleValue</code> type is set, the value of the resource must be a
   * 			double precision floating-point type.</p>
   */
  doubleValue?: number;

  /**
   * <p>When the <code>longValue</code> type is set, the value of the resource must be an
   * 			extended precision floating-point type.</p>
   */
  longValue?: number;

  /**
   * <p>When the <code>integerValue</code> type is set, the value of the resource must be an
   * 			integer.</p>
   */
  integerValue?: number;

  /**
   * <p>When the <code>stringSetValue</code> type is set, the value of the resource must be a
   * 			string type.</p>
   */
  stringSetValue?: string[];
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
 * <p>The Docker and Amazon ECS container agent version information about a container
 * 			instance.</p>
 */
export interface VersionInfo {
  /**
   * <p>The version number of the Amazon ECS container agent.</p>
   */
  agentVersion?: string;

  /**
   * <p>The Git commit hash for the Amazon ECS container agent build on the <a href="https://github.com/aws/amazon-ecs-agent/commits/master">amazon-ecs-agent
   * 			</a> GitHub repository.</p>
   */
  agentHash?: string;

  /**
   * <p>The Docker version running on the container instance.</p>
   */
  dockerVersion?: string;
}

export namespace VersionInfo {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: VersionInfo): any => ({
    ...obj,
  });
}

/**
 * <p>An EC2 instance that is running the Amazon ECS agent and has been registered with a
 * 			cluster.</p>
 */
export interface ContainerInstance {
  /**
   * <p>The Amazon Resource Name (ARN) of the container instance. The ARN contains the <code>arn:aws:ecs</code> namespace, followed by the Region of the container instance, the Amazon Web Services account ID of the container instance owner, the <code>container-instance</code> namespace, and then the container instance ID. For example, <code>arn:aws:ecs:region:aws_account_id:container-instance/container_instance_ID</code>.</p>
   */
  containerInstanceArn?: string;

  /**
   * <p>The ID of the container instance. For Amazon EC2 instances, this value is the Amazon EC2
   * 			instance ID. For external instances, this value is the Amazon Web Services Systems Manager managed instance ID.</p>
   */
  ec2InstanceId?: string;

  /**
   * <p>The capacity provider associated with the container instance.</p>
   */
  capacityProviderName?: string;

  /**
   * <p>The version counter for the container instance. Every time a container instance
   * 			experiences a change that triggers a CloudWatch event, the version counter is
   * 			incremented. If you are replicating your Amazon ECS container instance state with CloudWatch
   * 			Events, you can compare the version of a container instance reported by the Amazon ECS APIs
   * 			with the version reported in CloudWatch Events for the container instance (inside the
   * 				<code>detail</code> object) to verify that the version in your event stream is
   * 			current.</p>
   */
  version?: number;

  /**
   * <p>The version information for the Amazon ECS container agent and Docker daemon running on the
   * 			container instance.</p>
   */
  versionInfo?: VersionInfo;

  /**
   * <p>For CPU and memory resource types, this parameter describes the remaining CPU and
   * 			memory that has not already been allocated to tasks and is therefore available for new
   * 			tasks. For port resource types, this parameter describes the ports that were reserved by
   * 			the Amazon ECS container agent (at instance registration time) and any task containers that
   * 			have reserved port mappings on the host (with the <code>host</code> or
   * 				<code>bridge</code> network mode). Any port that is not specified here is available
   * 			for new tasks.</p>
   */
  remainingResources?: Resource[];

  /**
   * <p>For CPU and memory resource types, this parameter describes the amount of each
   * 			resource that was available on the container instance when the container agent
   * 			registered it with Amazon ECS. This value represents the total amount of CPU and memory that
   * 			can be allocated on this container instance to tasks. For port resource types, this
   * 			parameter describes the ports that were reserved by the Amazon ECS container agent when it
   * 			registered the container instance with Amazon ECS.</p>
   */
  registeredResources?: Resource[];

  /**
   * <p>The status of the container instance. The valid values are <code>REGISTERING</code>,
   * 				<code>REGISTRATION_FAILED</code>, <code>ACTIVE</code>, <code>INACTIVE</code>,
   * 				<code>DEREGISTERING</code>, or <code>DRAINING</code>.</p>
   * 		       <p>If your account has opted in to the <code>awsvpcTrunking</code> account setting, then
   * 			any newly registered container instance will transition to a <code>REGISTERING</code>
   * 			status while the trunk elastic network interface is provisioned for the instance. If the
   * 			registration fails, the instance will transition to a <code>REGISTRATION_FAILED</code>
   * 			status. You can describe the container instance and see the reason for failure in the
   * 				<code>statusReason</code> parameter. Once the container instance is terminated, the
   * 			instance transitions to a <code>DEREGISTERING</code> status while the trunk elastic
   * 			network interface is deprovisioned. The instance then transitions to an
   * 				<code>INACTIVE</code> status.</p>
   * 		       <p>The <code>ACTIVE</code> status indicates that the container instance can accept tasks.
   * 			The <code>DRAINING</code> indicates that new tasks are not placed on the container
   * 			instance and any service tasks running on the container instance are removed if
   * 			possible. For more information, see <a href="https://docs.aws.amazon.com/AmazonECS/latest/developerguide/container-instance-draining.html">Container Instance Draining</a> in the
   * 				<i>Amazon Elastic Container Service Developer Guide</i>.</p>
   */
  status?: string;

  /**
   * <p>The reason that the container instance reached its current status.</p>
   */
  statusReason?: string;

  /**
   * <p>This parameter returns <code>true</code> if the agent is connected to Amazon ECS.
   * 			Registered instances with an agent that may be unhealthy or stopped return
   * 				<code>false</code>. Only instances connected to an agent can accept placement
   * 			requests.</p>
   */
  agentConnected?: boolean;

  /**
   * <p>The number of tasks on the container instance that are in the <code>RUNNING</code>
   * 			status.</p>
   */
  runningTasksCount?: number;

  /**
   * <p>The number of tasks on the container instance that are in the <code>PENDING</code>
   * 			status.</p>
   */
  pendingTasksCount?: number;

  /**
   * <p>The status of the most recent agent update. If an update has never been requested,
   * 			this value is <code>NULL</code>.</p>
   */
  agentUpdateStatus?: AgentUpdateStatus | string;

  /**
   * <p>The attributes set for the container instance, either by the Amazon ECS container agent at
   * 			instance registration or manually with the <a>PutAttributes</a>
   * 			operation.</p>
   */
  attributes?: Attribute[];

  /**
   * <p>The Unix timestamp for when the container instance was registered.</p>
   */
  registeredAt?: Date;

  /**
   * <p>The resources attached to a container instance, such as elastic network
   * 			interfaces.</p>
   */
  attachments?: Attachment[];

  /**
   * <p>The metadata that you apply to the container instance to help you categorize and
   * 			organize them. Each tag consists of a key and an optional value, both of which you
   * 			define.</p>
   *          <p>The following basic restrictions apply to tags:</p>
   *         <ul>
   *             <li>
   *                 <p>Maximum number of tags per resource - 50</p>
   *             </li>
   *             <li>
   *                 <p>For each resource, each tag key must be unique, and each tag key can have only
   *                     one value.</p>
   *             </li>
   *             <li>
   *                 <p>Maximum key length - 128 Unicode characters in UTF-8</p>
   *             </li>
   *             <li>
   *                 <p>Maximum value length - 256 Unicode characters in UTF-8</p>
   *             </li>
   *             <li>
   *                 <p>If your tagging schema is used across multiple services and resources,
   *                     remember that other services may have restrictions on allowed characters.
   *                     Generally allowed characters are: letters, numbers, and spaces representable in
   *                     UTF-8, and the following characters: + - = . _ : / @.</p>
   *             </li>
   *             <li>
   *                 <p>Tag keys and values are case-sensitive.</p>
   *             </li>
   *             <li>
   *                 <p>Do not use <code>aws:</code>, <code>AWS:</code>, or any upper or lowercase
   *                     combination of such as a prefix for either keys or values as it is reserved for
   *                     Amazon Web Services use. You cannot edit or delete tag keys or values with this prefix. Tags with
   *                     this prefix do not count against your tags per resource limit.</p>
   *             </li>
   *          </ul>
   */
  tags?: Tag[];
}

export namespace ContainerInstance {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ContainerInstance): any => ({
    ...obj,
  });
}

export interface DeregisterContainerInstanceResponse {
  /**
   * <p>The container instance that was deregistered.</p>
   */
  containerInstance?: ContainerInstance;
}

export namespace DeregisterContainerInstanceResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DeregisterContainerInstanceResponse): any => ({
    ...obj,
  });
}

export interface DeregisterTaskDefinitionRequest {
  /**
   * <p>The <code>family</code> and <code>revision</code> (<code>family:revision</code>) or
   * 			full Amazon Resource Name (ARN) of the task definition to deregister. You must specify a
   * 				<code>revision</code>.</p>
   */
  taskDefinition: string | undefined;
}

export namespace DeregisterTaskDefinitionRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DeregisterTaskDefinitionRequest): any => ({
    ...obj,
  });
}

export enum Compatibility {
  EC2 = "EC2",
  EXTERNAL = "EXTERNAL",
  FARGATE = "FARGATE",
}

export enum ContainerCondition {
  COMPLETE = "COMPLETE",
  HEALTHY = "HEALTHY",
  START = "START",
  SUCCESS = "SUCCESS",
}

/**
 * <p>The dependencies defined for container startup and shutdown. A container can contain
 * 			multiple dependencies. When a dependency is defined for container startup, for container
 * 			shutdown it is reversed.</p>
 * 		       <p>Your Amazon ECS container instances require at least version 1.26.0 of the container agent
 * 			to enable container dependencies. However, we recommend using the latest container agent
 * 			version. For information about checking your agent version and updating to the latest
 * 			version, see <a href="https://docs.aws.amazon.com/AmazonECS/latest/developerguide/ecs-agent-update.html">Updating the Amazon ECS
 * 				Container Agent</a> in the <i>Amazon Elastic Container Service Developer Guide</i>. If you are
 * 			using an Amazon ECS-optimized Linux AMI, your instance needs at least version 1.26.0-1 of the
 * 				<code>ecs-init</code> package. If your container instances are launched from version
 * 				<code>20190301</code> or later, then they contain the required versions of the
 * 			container agent and <code>ecs-init</code>. For more information, see <a href="https://docs.aws.amazon.com/AmazonECS/latest/developerguide/ecs-optimized_AMI.html">Amazon ECS-optimized Linux AMI</a> in the <i>Amazon Elastic Container Service Developer Guide</i>.</p>
 * 		       <note>
 * 			         <p>For tasks using the Fargate launch type, this parameter requires
 * 				that the task or service uses platform version 1.3.0 or later.</p>
 * 		       </note>
 */
export interface ContainerDependency {
  /**
   * <p>The name of a container.</p>
   */
  containerName: string | undefined;

  /**
   * <p>The dependency condition of the container. The following are the available conditions
   * 			and their behavior:</p>
   * 		       <ul>
   *             <li>
   * 				           <p>
   *                   <code>START</code> - This condition emulates the behavior of links and
   * 					volumes today. It validates that a dependent container is started before
   * 					permitting other containers to start.</p>
   * 			         </li>
   *             <li>
   * 				           <p>
   *                   <code>COMPLETE</code> - This condition validates that a dependent
   * 					container runs to completion (exits) before permitting other containers to
   * 					start. This can be useful for nonessential containers that run a script and then
   * 					exit. This condition cannot be set on an essential container.</p>
   * 			         </li>
   *             <li>
   * 				           <p>
   *                   <code>SUCCESS</code> - This condition is the same as
   * 						<code>COMPLETE</code>, but it also requires that the container exits with a
   * 						<code>zero</code> status. This condition cannot be set on an essential
   * 					container.</p>
   * 			         </li>
   *             <li>
   * 				           <p>
   *                   <code>HEALTHY</code> - This condition validates that the dependent
   * 					container passes its Docker health check before permitting other containers to
   * 					start. This requires that the dependent container has health checks configured.
   * 					This condition is confirmed only at task startup.</p>
   * 			         </li>
   *          </ul>
   */
  condition: ContainerCondition | string | undefined;
}

export namespace ContainerDependency {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ContainerDependency): any => ({
    ...obj,
  });
}

export enum EnvironmentFileType {
  S3 = "s3",
}

/**
 * <p>A list of files containing the environment variables to pass to a container. You can
 * 			specify up to ten environment files. The file must have a <code>.env</code> file
 * 			extension. Each line in an environment file should contain an environment variable in
 * 				<code>VARIABLE=VALUE</code> format. Lines beginning with <code>#</code> are treated
 * 			as comments and are ignored. For more information on the environment variable file
 * 			syntax, see <a href="https://docs.docker.com/compose/env-file/">Declare default
 * 				environment variables in file</a>.</p>
 * 		       <p>If there are environment variables specified using the <code>environment</code>
 * 			parameter in a container definition, they take precedence over the variables contained
 * 			within an environment file. If multiple environment files are specified that contain the
 * 			same variable, they are processed from the top down. It is recommended to use unique
 * 			variable names. For more information, see <a href="https://docs.aws.amazon.com/AmazonECS/latest/developerguide/taskdef-envfiles.html">Specifying environment
 * 				variables</a> in the <i>Amazon Elastic Container Service Developer Guide</i>.</p>
 * 		       <p>This field is only valid for containers in Fargate tasks that use
 * 			platform version <code>1.4.0</code> or later.</p>
 */
export interface EnvironmentFile {
  /**
   * <p>The Amazon Resource Name (ARN) of the Amazon S3 object containing the environment
   * 			variable file.</p>
   */
  value: string | undefined;

  /**
   * <p>The file type to use. The only supported value is <code>s3</code>.</p>
   */
  type: EnvironmentFileType | string | undefined;
}

export namespace EnvironmentFile {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: EnvironmentFile): any => ({
    ...obj,
  });
}

/**
 * <p>Hostnames and IP address entries that are added to the <code>/etc/hosts</code> file of
 * 			a container via the <code>extraHosts</code> parameter of its <a>ContainerDefinition</a>. </p>
 */
export interface HostEntry {
  /**
   * <p>The hostname to use in the <code>/etc/hosts</code> entry.</p>
   */
  hostname: string | undefined;

  /**
   * <p>The IP address to use in the <code>/etc/hosts</code> entry.</p>
   */
  ipAddress: string | undefined;
}

export namespace HostEntry {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: HostEntry): any => ({
    ...obj,
  });
}

export enum FirelensConfigurationType {
  FLUENTBIT = "fluentbit",
  FLUENTD = "fluentd",
}

/**
 * <p>The FireLens configuration for the container. This is used to specify and configure a
 * 			log router for container logs. For more information, see <a href="https://docs.aws.amazon.com/AmazonECS/latest/developerguide/using_firelens.html">Custom Log Routing</a>
 * 			in the <i>Amazon Elastic Container Service Developer Guide</i>.</p>
 */
export interface FirelensConfiguration {
  /**
   * <p>The log router to use. The valid values are <code>fluentd</code> or
   * 				<code>fluentbit</code>.</p>
   */
  type: FirelensConfigurationType | string | undefined;

  /**
   * <p>The options to use when configuring the log router. This field is optional and can be
   * 			used to specify a custom configuration file or to add additional metadata, such as the
   * 			task, task definition, cluster, and container instance details to the log event. If
   * 			specified, the syntax to use is
   * 				<code>"options":{"enable-ecs-log-metadata":"true|false","config-file-type:"s3|file","config-file-value":"arn:aws:s3:::mybucket/fluent.conf|filepath"}</code>.
   * 			For more information, see <a href="https://docs.aws.amazon.com/AmazonECS/latest/developerguide/using_firelens.html#firelens-taskdef">Creating
   * 				a Task Definition that Uses a FireLens Configuration</a> in the
   * 				<i>Amazon Elastic Container Service Developer Guide</i>.</p>
   * 		       <note>
   * 			         <p>Tasks hosted on Fargate only support the <code>file</code> configuration file
   * 				type.</p>
   * 		       </note>
   */
  options?: { [key: string]: string };
}

export namespace FirelensConfiguration {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: FirelensConfiguration): any => ({
    ...obj,
  });
}

/**
 * <p>An object representing a container health check. Health check parameters that are
 * 			specified in a container definition override any Docker health checks that exist in the
 * 			container image (such as those specified in a parent image or from the image's
 * 			Dockerfile).</p>
 * 		       <p>You can view the health status of both individual containers and a task with the
 * 			DescribeTasks API operation or when viewing the task details in the console.</p>
 * 		       <p>The following describes the possible <code>healthStatus</code> values for a
 * 			container:</p>
 * 		       <ul>
 *             <li>
 * 				           <p>
 *                   <code>HEALTHY</code>-The container health check has passed
 * 					successfully.</p>
 * 			         </li>
 *             <li>
 * 				           <p>
 *                   <code>UNHEALTHY</code>-The container health check has failed.</p>
 * 			         </li>
 *             <li>
 * 				           <p>
 *                   <code>UNKNOWN</code>-The container health check is being evaluated or
 * 					there is no container health check defined.</p>
 * 			         </li>
 *          </ul>
 * 		       <p>The following describes the possible <code>healthStatus</code> values for a task. The
 * 			container health check status of nonessential containers do not have an effect on the
 * 			health status of a task.</p>
 * 		       <ul>
 *             <li>
 * 				           <p>
 *                   <code>HEALTHY</code>-All essential containers within the task have
 * 					passed their health checks.</p>
 * 			         </li>
 *             <li>
 * 				           <p>
 *                   <code>UNHEALTHY</code>-One or more essential containers have failed
 * 					their health check.</p>
 * 			         </li>
 *             <li>
 * 				           <p>
 *                   <code>UNKNOWN</code>-The essential containers within the task are still
 * 					having their health checks evaluated or there are no container health checks
 * 					defined.</p>
 * 			         </li>
 *          </ul>
 * 		       <p>If a task is run manually, and not as part of a service, the task will continue its
 * 			lifecycle regardless of its health status. For tasks that are part of a service, if the
 * 			task reports as unhealthy then the task will be stopped and the service scheduler will
 * 			replace it.</p>
 * 		       <p>The following are notes about container health check support:</p>
 * 		       <ul>
 *             <li>
 * 				           <p>Container health checks require version 1.17.0 or greater of the Amazon ECS
 * 					container agent. For more information, see <a href="https://docs.aws.amazon.com/AmazonECS/latest/developerguide/ecs-agent-update.html">Updating the
 * 						Amazon ECS Container Agent</a>.</p>
 * 			         </li>
 *             <li>
 * 				           <p>Container health checks are supported for Fargate tasks if you
 * 					are using platform version 1.1.0 or greater. For more information, see <a href="https://docs.aws.amazon.com/AmazonECS/latest/developerguide/platform_versions.html">Fargate
 * 						Platform Versions</a>.</p>
 * 			         </li>
 *             <li>
 * 				           <p>Container health checks are not supported for tasks that are part of a service
 * 					that is configured to use a Classic Load Balancer.</p>
 * 			         </li>
 *          </ul>
 */
export interface HealthCheck {
  /**
   * <p>A string array representing the command that the container runs to determine if it is
   * 			healthy. The string array must start with <code>CMD</code> to execute the command
   * 			arguments directly, or <code>CMD-SHELL</code> to run the command with the container's
   * 			default shell. </p>
   * 		       <p> When you use the Amazon Web Services Management Console JSON panel, the Command Line Interface, or the APIs, you should enclose the list of commands in brackets, as shown below.</p>
   * 		       <p>
   * 			         <code>[ "CMD-SHELL", "curl -f http://localhost/ || exit 1" ]</code>
   * 		       </p>
   * 		       <p>You do not need to include the brackets when you use the Amazon Web Services Management Consoleas shown below.</p>
   * 		       <p>
   * 			         <code> "CMD-SHELL", "curl -f http://localhost/ || exit 1" </code>
   * 		       </p>
   * 		       <p>An exit code of 0 indicates success, and non-zero exit code indicates failure. For
   * 			more information, see <code>HealthCheck</code> in the <a href="https://docs.docker.com/engine/api/v1.35/#operation/ContainerCreate">Create a container</a>
   * 			section of the <a href="https://docs.docker.com/engine/api/v1.35/">Docker Remote API</a>.</p>
   */
  command: string[] | undefined;

  /**
   * <p>The time period in seconds between each health check execution. You may specify
   * 			between 5 and 300 seconds. The default value is 30 seconds.</p>
   */
  interval?: number;

  /**
   * <p>The time period in seconds to wait for a health check to succeed before it is
   * 			considered a failure. You may specify between 2 and 60 seconds. The default value is
   * 			5.</p>
   */
  timeout?: number;

  /**
   * <p>The number of times to retry a failed health check before the container is considered
   * 			unhealthy. You may specify between 1 and 10 retries. The default value is 3.</p>
   */
  retries?: number;

  /**
   * <p>The optional grace period within which to provide containers time to bootstrap before
   * 			failed health checks count towards the maximum number of retries. You may specify
   * 			between 0 and 300 seconds. The <code>startPeriod</code> is disabled by default.</p>
   * 		       <note>
   * 			         <p>If a health check succeeds within the <code>startPeriod</code>, then the container
   * 				is considered healthy and any subsequent failures count toward the maximum number of
   * 				retries.</p>
   * 		       </note>
   */
  startPeriod?: number;
}

export namespace HealthCheck {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: HealthCheck): any => ({
    ...obj,
  });
}

/**
 * <p>The Linux capabilities for the container that are added to or dropped from the default
 * 			configuration provided by Docker. For more information on the default capabilities and
 * 			the non-default available capabilities, see <a href="https://docs.docker.com/engine/reference/run/#runtime-privilege-and-linux-capabilities">Runtime privilege and Linux capabilities</a> in the <i>Docker run
 * 				reference</i>. For more detailed information on these Linux capabilities, see
 * 			the <a href="http://man7.org/linux/man-pages/man7/capabilities.7.html">capabilities(7)</a> Linux manual page.</p>
 */
export interface KernelCapabilities {
  /**
   * <p>The Linux capabilities for the container that have been added to the default
   * 			configuration provided by Docker. This parameter maps to <code>CapAdd</code> in the
   * 			<a href="https://docs.docker.com/engine/api/v1.35/#operation/ContainerCreate">Create a container</a> section of the <a href="https://docs.docker.com/engine/api/v1.35/">Docker Remote API</a> and the
   * 				<code>--cap-add</code> option to <a href="https://docs.docker.com/engine/reference/run/#security-configuration">docker
   * 				run</a>.</p>
   * 		       <note>
   * 			         <p>Tasks launched on Fargate only support adding the <code>SYS_PTRACE</code> kernel
   * 				capability.</p>
   * 		       </note>
   * 		       <p>Valid values: <code>"ALL" | "AUDIT_CONTROL" | "AUDIT_WRITE" | "BLOCK_SUSPEND" |
   * 				"CHOWN" | "DAC_OVERRIDE" | "DAC_READ_SEARCH" | "FOWNER" | "FSETID" | "IPC_LOCK" |
   * 				"IPC_OWNER" | "KILL" | "LEASE" | "LINUX_IMMUTABLE" | "MAC_ADMIN" | "MAC_OVERRIDE" |
   * 				"MKNOD" | "NET_ADMIN" | "NET_BIND_SERVICE" | "NET_BROADCAST" | "NET_RAW" | "SETFCAP"
   * 				| "SETGID" | "SETPCAP" | "SETUID" | "SYS_ADMIN" | "SYS_BOOT" | "SYS_CHROOT" |
   * 				"SYS_MODULE" | "SYS_NICE" | "SYS_PACCT" | "SYS_PTRACE" | "SYS_RAWIO" |
   * 				"SYS_RESOURCE" | "SYS_TIME" | "SYS_TTY_CONFIG" | "SYSLOG" |
   * 			"WAKE_ALARM"</code>
   *          </p>
   */
  add?: string[];

  /**
   * <p>The Linux capabilities for the container that have been removed from the default
   * 			configuration provided by Docker. This parameter maps to <code>CapDrop</code> in the
   * 			<a href="https://docs.docker.com/engine/api/v1.35/#operation/ContainerCreate">Create a container</a> section of the <a href="https://docs.docker.com/engine/api/v1.35/">Docker Remote API</a> and the
   * 				<code>--cap-drop</code> option to <a href="https://docs.docker.com/engine/reference/run/#security-configuration">docker
   * 				run</a>.</p>
   * 		       <p>Valid values: <code>"ALL" | "AUDIT_CONTROL" | "AUDIT_WRITE" | "BLOCK_SUSPEND" |
   * 				"CHOWN" | "DAC_OVERRIDE" | "DAC_READ_SEARCH" | "FOWNER" | "FSETID" | "IPC_LOCK" |
   * 				"IPC_OWNER" | "KILL" | "LEASE" | "LINUX_IMMUTABLE" | "MAC_ADMIN" | "MAC_OVERRIDE" |
   * 				"MKNOD" | "NET_ADMIN" | "NET_BIND_SERVICE" | "NET_BROADCAST" | "NET_RAW" | "SETFCAP"
   * 				| "SETGID" | "SETPCAP" | "SETUID" | "SYS_ADMIN" | "SYS_BOOT" | "SYS_CHROOT" |
   * 				"SYS_MODULE" | "SYS_NICE" | "SYS_PACCT" | "SYS_PTRACE" | "SYS_RAWIO" |
   * 				"SYS_RESOURCE" | "SYS_TIME" | "SYS_TTY_CONFIG" | "SYSLOG" |
   * 			"WAKE_ALARM"</code>
   *          </p>
   */
  drop?: string[];
}

export namespace KernelCapabilities {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: KernelCapabilities): any => ({
    ...obj,
  });
}

export enum DeviceCgroupPermission {
  MKNOD = "mknod",
  READ = "read",
  WRITE = "write",
}

/**
 * <p>An object representing a container instance host device.</p>
 */
export interface Device {
  /**
   * <p>The path for the device on the host container instance.</p>
   */
  hostPath: string | undefined;

  /**
   * <p>The path inside the container at which to expose the host device.</p>
   */
  containerPath?: string;

  /**
   * <p>The explicit permissions to provide to the container for the device. By default, the
   * 			container has permissions for <code>read</code>, <code>write</code>, and
   * 				<code>mknod</code> for the device.</p>
   */
  permissions?: (DeviceCgroupPermission | string)[];
}

export namespace Device {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: Device): any => ({
    ...obj,
  });
}

/**
 * <p>The container path, mount options, and size of the tmpfs mount.</p>
 */
export interface Tmpfs {
  /**
   * <p>The absolute file path where the tmpfs volume is to be mounted.</p>
   */
  containerPath: string | undefined;

  /**
   * <p>The maximum size (in MiB) of the tmpfs volume.</p>
   */
  size: number | undefined;

  /**
   * <p>The list of tmpfs volume mount options.</p>
   * 		       <p>Valid values: <code>"defaults" | "ro" | "rw" | "suid" | "nosuid" | "dev" | "nodev" |
   * 				"exec" | "noexec" | "sync" | "async" | "dirsync" | "remount" | "mand" | "nomand" |
   * 				"atime" | "noatime" | "diratime" | "nodiratime" | "bind" | "rbind" | "unbindable" |
   * 				"runbindable" | "private" | "rprivate" | "shared" | "rshared" | "slave" | "rslave" |
   * 				"relatime" | "norelatime" | "strictatime" | "nostrictatime" | "mode" | "uid" | "gid"
   * 				| "nr_inodes" | "nr_blocks" | "mpol"</code>
   *          </p>
   */
  mountOptions?: string[];
}

export namespace Tmpfs {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: Tmpfs): any => ({
    ...obj,
  });
}

/**
 * <p>Linux-specific options that are applied to the container, such as Linux <a>KernelCapabilities</a>.</p>
 */
export interface LinuxParameters {
  /**
   * <p>The Linux capabilities for the container that are added to or dropped from the default
   * 			configuration provided by Docker.</p>
   * 		       <note>
   * 			         <p>For tasks that use the Fargate launch type,
   * 					<code>capabilities</code> is supported for all platform versions but the
   * 					<code>add</code> parameter is only supported if using platform version 1.4.0 or
   * 				later.</p>
   * 		       </note>
   */
  capabilities?: KernelCapabilities;

  /**
   * <p>Any host devices to expose to the container. This parameter maps to
   * 				<code>Devices</code> in the <a href="https://docs.docker.com/engine/api/v1.35/#operation/ContainerCreate">Create a container</a> section of the
   * 			<a href="https://docs.docker.com/engine/api/v1.35/">Docker Remote API</a> and the <code>--device</code> option to <a href="https://docs.docker.com/engine/reference/run/#security-configuration">docker run</a>.</p>
   * 		       <note>
   * 			         <p>If you are using tasks that use the Fargate launch type, the
   * 					<code>devices</code> parameter is not supported.</p>
   * 		       </note>
   */
  devices?: Device[];

  /**
   * <p>Run an <code>init</code> process inside the container that forwards signals and reaps
   * 			processes. This parameter maps to the <code>--init</code> option to <a href="https://docs.docker.com/engine/reference/run/#security-configuration">docker run</a>. This parameter requires version 1.25 of the Docker Remote API or greater on your container instance. To check the Docker Remote API version on your container instance, log in to your container instance and run the following command: <code>sudo docker version --format '{{.Server.APIVersion}}'</code>
   *          </p>
   */
  initProcessEnabled?: boolean;

  /**
   * <p>The value for the size (in MiB) of the <code>/dev/shm</code> volume. This parameter
   * 			maps to the <code>--shm-size</code> option to <a href="https://docs.docker.com/engine/reference/run/#security-configuration">docker
   * 				run</a>.</p>
   * 		       <note>
   * 			         <p>If you are using tasks that use the Fargate launch type, the
   * 					<code>sharedMemorySize</code> parameter is not supported.</p>
   * 		       </note>
   */
  sharedMemorySize?: number;

  /**
   * <p>The container path, mount options, and size (in MiB) of the tmpfs mount. This
   * 			parameter maps to the <code>--tmpfs</code> option to <a href="https://docs.docker.com/engine/reference/run/#security-configuration">docker run</a>.</p>
   * 		       <note>
   * 			         <p>If you are using tasks that use the Fargate launch type, the
   * 					<code>tmpfs</code> parameter is not supported.</p>
   * 		       </note>
   */
  tmpfs?: Tmpfs[];

  /**
   * <p>The total amount of swap memory (in MiB) a container can use. This parameter will be
   * 			translated to the <code>--memory-swap</code> option to <a href="https://docs.docker.com/engine/reference/run/#security-configuration">docker run</a> where the value would be the sum of
   * 			the container memory plus the <code>maxSwap</code> value.</p>
   * 		       <p>If a <code>maxSwap</code> value of <code>0</code> is specified, the container will not
   * 			use swap. Accepted values are <code>0</code> or any positive integer. If the
   * 				<code>maxSwap</code> parameter is omitted, the container will use the swap
   * 			configuration for the container instance it is running on. A <code>maxSwap</code> value
   * 			must be set for the <code>swappiness</code> parameter to be used.</p>
   * 		       <note>
   * 			         <p>If you are using tasks that use the Fargate launch type, the
   * 					<code>maxSwap</code> parameter is not supported.</p>
   * 		       </note>
   */
  maxSwap?: number;

  /**
   * <p>This allows you to tune a container's memory swappiness behavior. A
   * 				<code>swappiness</code> value of <code>0</code> will cause swapping to not happen
   * 			unless absolutely necessary. A <code>swappiness</code> value of <code>100</code> will
   * 			cause pages to be swapped very aggressively. Accepted values are whole numbers between
   * 				<code>0</code> and <code>100</code>. If the <code>swappiness</code> parameter is not
   * 			specified, a default value of <code>60</code> is used. If a value is not specified for
   * 				<code>maxSwap</code> then this parameter is ignored. This parameter maps to the
   * 				<code>--memory-swappiness</code> option to <a href="https://docs.docker.com/engine/reference/run/#security-configuration">docker run</a>.</p>
   * 		       <note>
   * 			         <p>If you are using tasks that use the Fargate launch type, the
   * 					<code>swappiness</code> parameter is not supported.</p>
   * 		       </note>
   */
  swappiness?: number;
}

export namespace LinuxParameters {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: LinuxParameters): any => ({
    ...obj,
  });
}

export enum LogDriver {
  AWSFIRELENS = "awsfirelens",
  AWSLOGS = "awslogs",
  FLUENTD = "fluentd",
  GELF = "gelf",
  JOURNALD = "journald",
  JSON_FILE = "json-file",
  SPLUNK = "splunk",
  SYSLOG = "syslog",
}

/**
 * <p>An object representing the secret to expose to your container. Secrets can be exposed
 * 			to a container in the following ways:</p>
 * 		       <ul>
 *             <li>
 * 				           <p>To inject sensitive data into your containers as environment variables, use
 * 					the <code>secrets</code> container definition parameter.</p>
 * 			         </li>
 *             <li>
 * 				           <p>To reference sensitive information in the log configuration of a container,
 * 					use the <code>secretOptions</code> container definition parameter.</p>
 * 			         </li>
 *          </ul>
 * 		       <p>For more information, see <a href="https://docs.aws.amazon.com/AmazonECS/latest/developerguide/specifying-sensitive-data.html">Specifying
 * 				Sensitive Data</a> in the <i>Amazon Elastic Container Service Developer Guide</i>.</p>
 */
export interface Secret {
  /**
   * <p>The name of the secret.</p>
   */
  name: string | undefined;

  /**
   * <p>The secret to expose to the container. The supported values are either the full ARN of
   * 			the Secrets Manager secret or the full ARN of the parameter in the SSM Parameter Store.</p>
   * 		       <note>
   * 			         <p>If the SSM Parameter Store parameter exists in the same Region as the task you
   * 				are launching, then you can use either the full ARN or name of the parameter. If the
   * 				parameter exists in a different Region, then the full ARN must be specified.</p>
   * 		       </note>
   */
  valueFrom: string | undefined;
}

export namespace Secret {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: Secret): any => ({
    ...obj,
  });
}

/**
 * <p>The log configuration for the container. This parameter maps to <code>LogConfig</code>
 * 			in the <a href="https://docs.docker.com/engine/api/v1.35/#operation/ContainerCreate">Create a container</a> section of the <a href="https://docs.docker.com/engine/api/v1.35/">Docker Remote API</a> and the
 * 				<code>--log-driver</code> option to <a href="https://docs.docker.com/engine/reference/commandline/run/">
 *                <code>docker
 * 					run</code>
 *             </a>.</p>
 * 		       <p>By default, containers use the same logging driver that the Docker daemon uses;
 * 			however the container may use a different logging driver than the Docker daemon by
 * 			specifying a log driver configuration in the container definition. For more information
 * 			on the options for different supported log drivers, see <a href="https://docs.docker.com/engine/admin/logging/overview/">Configure logging
 * 				drivers</a> in the Docker documentation.</p>
 * 		       <p>The following should be noted when specifying a log configuration for your
 * 			containers:</p>
 * 		       <ul>
 *             <li>
 * 				           <p>Amazon ECS currently supports a subset of the logging drivers available to the
 * 					Docker daemon (shown in the valid values below). Additional log drivers may be
 * 					available in future releases of the Amazon ECS container agent.</p>
 * 			         </li>
 *             <li>
 * 				           <p>This parameter requires version 1.18 of the Docker Remote API or greater on
 * 					your container instance.</p>
 * 			         </li>
 *             <li>
 * 				           <p>For tasks hosted on Amazon EC2 instances, the Amazon ECS container agent must register
 * 					the available logging drivers with the
 * 						<code>ECS_AVAILABLE_LOGGING_DRIVERS</code> environment variable before
 * 					containers placed on that instance can use these log configuration options. For
 * 					more information, see <a href="https://docs.aws.amazon.com/AmazonECS/latest/developerguide/ecs-agent-config.html">Amazon ECS container agent configuration</a> in the
 * 						<i>Amazon Elastic Container Service Developer Guide</i>.</p>
 * 			         </li>
 *             <li>
 * 				           <p>For tasks on Fargate, because you do not have access to the underlying
 * 					infrastructure your tasks are hosted on, any additional software needed will
 * 					have to be installed outside of the task. For example, the Fluentd output
 * 					aggregators or a remote host running Logstash to send Gelf logs to.</p>
 * 			         </li>
 *          </ul>
 */
export interface LogConfiguration {
  /**
   * <p>The log driver to use for the container.</p>
   * 		       <p>For tasks on Fargate, the supported log drivers are <code>awslogs</code>,
   * 				<code>splunk</code>, and <code>awsfirelens</code>.</p>
   * 		       <p>For tasks hosted on Amazon EC2 instances, the supported log drivers are
   * 				<code>awslogs</code>, <code>fluentd</code>, <code>gelf</code>,
   * 				<code>json-file</code>, <code>journald</code>,
   * 				<code>logentries</code>,<code>syslog</code>, <code>splunk</code>, and
   * 				<code>awsfirelens</code>.</p>
   * 		       <p>For more information about using the <code>awslogs</code> log driver, see <a href="https://docs.aws.amazon.com/AmazonECS/latest/developerguide/using_awslogs.html">Using
   * 				the awslogs log driver</a> in the <i>Amazon Elastic Container Service Developer Guide</i>.</p>
   * 		       <p>For more information about using the <code>awsfirelens</code> log driver, see <a href="https://docs.aws.amazon.com/AmazonECS/latest/developerguide/using_firelens.html">Custom log routing</a> in the <i>Amazon Elastic Container Service Developer Guide</i>.</p>
   * 		       <note>
   * 			         <p>If you have a custom driver that is not listed, you can fork the Amazon ECS container
   * 				agent project that is <a href="https://github.com/aws/amazon-ecs-agent">available
   * 					on GitHub</a> and customize it to work with that driver. We encourage you to
   * 				submit pull requests for changes that you would like to have included. However, we
   * 				do not currently provide support for running modified copies of this
   * 				software.</p>
   * 		       </note>
   */
  logDriver: LogDriver | string | undefined;

  /**
   * <p>The configuration options to send to the log driver. This parameter requires version 1.19 of the Docker Remote API or greater on your container instance. To check the Docker Remote API version on your container instance, log in to your container instance and run the following command: <code>sudo docker version --format '{{.Server.APIVersion}}'</code>
   *          </p>
   */
  options?: { [key: string]: string };

  /**
   * <p>The secrets to pass to the log configuration. For more information, see <a href="https://docs.aws.amazon.com/AmazonECS/latest/developerguide/specifying-sensitive-data.html">Specifying
   * 				Sensitive Data</a> in the <i>Amazon Elastic Container Service Developer Guide</i>.</p>
   */
  secretOptions?: Secret[];
}

export namespace LogConfiguration {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: LogConfiguration): any => ({
    ...obj,
  });
}

/**
 * <p>Details on a volume mount point that is used in a container definition.</p>
 */
export interface MountPoint {
  /**
   * <p>The name of the volume to mount. Must be a volume name referenced in the
   * 				<code>name</code> parameter of task definition <code>volume</code>.</p>
   */
  sourceVolume?: string;

  /**
   * <p>The path on the container to mount the host volume at.</p>
   */
  containerPath?: string;

  /**
   * <p>If this value is <code>true</code>, the container has read-only access to the volume.
   * 			If this value is <code>false</code>, then the container can write to the volume. The
   * 			default value is <code>false</code>.</p>
   */
  readOnly?: boolean;
}

export namespace MountPoint {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: MountPoint): any => ({
    ...obj,
  });
}

export enum TransportProtocol {
  TCP = "tcp",
  UDP = "udp",
}

/**
 * <p>Port mappings allow containers to access ports on the host container instance to send
 * 			or receive traffic. Port mappings are specified as part of the container
 * 			definition.</p>
 * 		       <p>If you are using containers in a task with the <code>awsvpc</code> or
 * 				<code>host</code> network mode, exposed ports should be specified using
 * 				<code>containerPort</code>. The <code>hostPort</code> can be left blank or it must
 * 			be the same value as the <code>containerPort</code>.</p>
 * 		       <note>
 * 			         <p>You cannot expose the same container port for multiple protocols. An error will be
 * 				returned if this is attempted</p>
 * 		       </note>
 * 		       <p>After a task reaches the <code>RUNNING</code> status, manual and automatic host and
 * 			container port assignments are visible in the <code>networkBindings</code> section of
 * 				<a>DescribeTasks</a> API responses.</p>
 */
export interface PortMapping {
  /**
   * <p>The port number on the container that is bound to the user-specified or automatically
   * 			assigned host port.</p>
   * 		       <p>If you are using containers in a task with the <code>awsvpc</code> or
   * 				<code>host</code> network mode, exposed ports should be specified using
   * 				<code>containerPort</code>.</p>
   * 		       <p>If you are using containers in a task with the <code>bridge</code> network mode and
   * 			you specify a container port and not a host port, your container automatically receives
   * 			a host port in the ephemeral port range. For more information, see
   * 			<code>hostPort</code>. Port mappings that are automatically assigned in this way do not
   * 			count toward the 100 reserved ports limit of a container instance.</p>
   */
  containerPort?: number;

  /**
   * <p>The port number on the container instance to reserve for your container.</p>
   * 		       <p>If you are using containers in a task with the <code>awsvpc</code> or
   * 				<code>host</code> network mode, the <code>hostPort</code> can either be left blank
   * 			or set to the same value as the <code>containerPort</code>.</p>
   * 		       <p>If you are using containers in a task with the <code>bridge</code> network mode, you
   * 			can specify a non-reserved host port for your container port mapping, or you can omit
   * 			the <code>hostPort</code> (or set it to <code>0</code>) while specifying a
   * 				<code>containerPort</code> and your container automatically receives a port in the
   * 			ephemeral port range for your container instance operating system and Docker
   * 			version.</p>
   * 		       <p>The default ephemeral port range for Docker version 1.6.0 and later is listed on the
   * 			instance under <code>/proc/sys/net/ipv4/ip_local_port_range</code>. If this kernel
   * 			parameter is unavailable, the default ephemeral port range from 49153 through 65535 is
   * 			used. Do not attempt to specify a host port in the ephemeral port range as these are
   * 			reserved for automatic assignment. In general, ports below 32768 are outside of the
   * 			ephemeral port range.</p>
   * 		       <note>
   * 			         <p>The default ephemeral port range from 49153 through 65535 is always used for
   * 				Docker versions before 1.6.0.</p>
   * 		       </note>
   * 		       <p>The default reserved ports are 22 for SSH, the Docker ports 2375 and 2376, and the
   * 			Amazon ECS container agent ports 51678-51680. Any host port that was previously specified in
   * 			a running task is also reserved while the task is running (after a task stops, the host
   * 			port is released). The current reserved ports are displayed in the
   * 				<code>remainingResources</code> of <a>DescribeContainerInstances</a>
   * 			output. A container instance can have up to 100 reserved ports at a time, including the
   * 			default reserved ports. Automatically assigned ports don't count toward the 100 reserved
   * 			ports limit.</p>
   */
  hostPort?: number;

  /**
   * <p>The protocol used for the port mapping. Valid values are <code>tcp</code> and
   * 				<code>udp</code>. The default is <code>tcp</code>.</p>
   */
  protocol?: TransportProtocol | string;
}

export namespace PortMapping {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: PortMapping): any => ({
    ...obj,
  });
}

/**
 * <p>The repository credentials for private registry authentication.</p>
 */
export interface RepositoryCredentials {
  /**
   * <p>The Amazon Resource Name (ARN) of the secret containing the private repository
   * 			credentials.</p>
   * 		       <note>
   * 			         <p>When you are using the Amazon ECS API, CLI, or Amazon Web Services SDK, if the secret exists in the
   * 				same Region as the task that you are launching then you can use either the full ARN
   * 				or the name of the secret. When you are using the Amazon Web Services Management Console, you must specify the
   * 				full ARN of the secret.</p>
   * 		       </note>
   */
  credentialsParameter: string | undefined;
}

export namespace RepositoryCredentials {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: RepositoryCredentials): any => ({
    ...obj,
  });
}

export enum ResourceType {
  GPU = "GPU",
  INFERENCE_ACCELERATOR = "InferenceAccelerator",
}

/**
 * <p>The type and amount of a resource to assign to a container. The supported resource
 * 			types are GPUs and Elastic Inference accelerators. For more information, see <a href="https://docs.aws.amazon.com/AmazonECS/latest/developerguide/ecs-gpu.html">Working with
 * 				GPUs on Amazon ECS</a> or <a href="https://docs.aws.amazon.com/AmazonECS/latest/developerguide/ecs-eia.html">Working with Amazon Elastic Inference on Amazon ECS</a> in the
 * 				<i>Amazon Elastic Container Service Developer Guide</i>
 *          </p>
 */
export interface ResourceRequirement {
  /**
   * <p>The value for the specified resource type.</p>
   * 		       <p>If the <code>GPU</code> type is used, the value is the number of physical
   * 				<code>GPUs</code> the Amazon ECS container agent will reserve for the container. The
   * 			number of GPUs reserved for all containers in a task should not exceed the number of
   * 			available GPUs on the container instance the task is launched on.</p>
   * 		       <p>If the <code>InferenceAccelerator</code> type is used, the <code>value</code> should
   * 			match the <code>deviceName</code> for an <a>InferenceAccelerator</a>
   * 			specified in a task definition.</p>
   */
  value: string | undefined;

  /**
   * <p>The type of resource to assign to a container. The supported values are
   * 				<code>GPU</code> or <code>InferenceAccelerator</code>.</p>
   */
  type: ResourceType | string | undefined;
}

export namespace ResourceRequirement {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ResourceRequirement): any => ({
    ...obj,
  });
}

/**
 * <p>A list of namespaced kernel parameters to set in the container. This parameter maps to
 * 				<code>Sysctls</code> in the <a href="https://docs.docker.com/engine/api/v1.35/#operation/ContainerCreate">Create a container</a> section of the
 * 			<a href="https://docs.docker.com/engine/api/v1.35/">Docker Remote API</a> and the <code>--sysctl</code> option to <a href="https://docs.docker.com/engine/reference/run/#security-configuration">docker run</a>.</p>
 * 		       <p>It is not recommended that you specify network-related <code>systemControls</code>
 * 			parameters for multiple containers in a single task that also uses either the
 * 				<code>awsvpc</code> or <code>host</code> network mode for the following
 * 			reasons:</p>
 * 		       <ul>
 *             <li>
 * 				           <p>For tasks that use the <code>awsvpc</code> network mode, if you set
 * 						<code>systemControls</code> for any container, it applies to all containers
 * 					in the task. If you set different <code>systemControls</code> for multiple
 * 					containers in a single task, the container that is started last determines which
 * 						<code>systemControls</code> take effect.</p>
 * 			         </li>
 *             <li>
 * 				           <p>For tasks that use the <code>host</code> network mode, the
 * 						<code>systemControls</code> parameter applies to the container instance's
 * 					kernel parameter as well as that of all containers of any tasks running on that
 * 					container instance.</p>
 * 			         </li>
 *          </ul>
 */
export interface SystemControl {
  /**
   * <p>The namespaced kernel parameter for which to set a <code>value</code>.</p>
   */
  namespace?: string;

  /**
   * <p>The value for the namespaced kernel parameter specified in
   * 			<code>namespace</code>.</p>
   */
  value?: string;
}

export namespace SystemControl {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: SystemControl): any => ({
    ...obj,
  });
}

export enum UlimitName {
  CORE = "core",
  CPU = "cpu",
  DATA = "data",
  FSIZE = "fsize",
  LOCKS = "locks",
  MEMLOCK = "memlock",
  MSGQUEUE = "msgqueue",
  NICE = "nice",
  NOFILE = "nofile",
  NPROC = "nproc",
  RSS = "rss",
  RTPRIO = "rtprio",
  RTTIME = "rttime",
  SIGPENDING = "sigpending",
  STACK = "stack",
}

/**
 * <p>The <code>ulimit</code> settings to pass to the container.</p>
 * 		       <p>Amazon ECS tasks hosted on Fargate use the default
 * 							resource limit values set by the operating system with the exception of
 * 							the <code>nofile</code> resource limit parameter which Fargate
 * 							overrides. The <code>nofile</code> resource limit sets a restriction on
 * 							the number of open files that a container can use. The default
 * 								<code>nofile</code> soft limit is <code>1024</code> and hard limit
 * 							is <code>4096</code>.</p>
 */
export interface Ulimit {
  /**
   * <p>The <code>type</code> of the <code>ulimit</code>.</p>
   */
  name: UlimitName | string | undefined;

  /**
   * <p>The soft limit for the ulimit type.</p>
   */
  softLimit: number | undefined;

  /**
   * <p>The hard limit for the ulimit type.</p>
   */
  hardLimit: number | undefined;
}

export namespace Ulimit {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: Ulimit): any => ({
    ...obj,
  });
}

/**
 * <p>Details on a data volume from another container in the same task definition.</p>
 */
export interface VolumeFrom {
  /**
   * <p>The name of another container within the same task definition from which to mount
   * 			volumes.</p>
   */
  sourceContainer?: string;

  /**
   * <p>If this value is <code>true</code>, the container has read-only access to the volume.
   * 			If this value is <code>false</code>, then the container can write to the volume. The
   * 			default value is <code>false</code>.</p>
   */
  readOnly?: boolean;
}

export namespace VolumeFrom {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: VolumeFrom): any => ({
    ...obj,
  });
}

/**
 * <p>Container definitions are used in task definitions to describe the different
 * 			containers that are launched as part of a task.</p>
 */
export interface ContainerDefinition {
  /**
   * <p>The name of a container. If you are linking multiple containers together in a task
   * 			definition, the <code>name</code> of one container can be entered in the
   * 				<code>links</code> of another container to connect the containers.
   * 			Up to 255 letters (uppercase and lowercase), numbers, underscores, and hyphens are allowed. This parameter maps to <code>name</code> in the
   * 			<a href="https://docs.docker.com/engine/api/v1.35/#operation/ContainerCreate">Create a container</a> section of the <a href="https://docs.docker.com/engine/api/v1.35/">Docker Remote API</a> and the
   * 				<code>--name</code> option to <a href="https://docs.docker.com/engine/reference/run/#security-configuration">docker
   * 			run</a>. </p>
   */
  name?: string;

  /**
   * <p>The image used to start a container. This string is passed directly to the Docker
   * 			daemon. Images in the Docker Hub registry are available by default. Other repositories
   * 			are specified with either <code>
   * 				           <i>repository-url</i>/<i>image</i>:<i>tag</i>
   * 			         </code> or <code>
   * 				           <i>repository-url</i>/<i>image</i>@<i>digest</i>
   * 			         </code>. Up to 255 letters (uppercase and lowercase), numbers, hyphens, underscores, colons, periods, forward slashes, and number signs are allowed. This parameter maps to <code>Image</code> in the
   * 			<a href="https://docs.docker.com/engine/api/v1.35/#operation/ContainerCreate">Create a container</a> section of the <a href="https://docs.docker.com/engine/api/v1.35/">Docker Remote API</a> and the
   * 				<code>IMAGE</code> parameter of <a href="https://docs.docker.com/engine/reference/run/#security-configuration">docker
   * 				run</a>.</p>
   * 		       <ul>
   *             <li>
   * 				           <p>When a new task starts, the Amazon ECS container agent pulls the latest version of
   * 					the specified image and tag for the container to use. However, subsequent
   * 					updates to a repository image are not propagated to already running
   * 					tasks.</p>
   * 			         </li>
   *             <li>
   * 				           <p>Images in Amazon ECR repositories can be specified by either using the full
   * 						<code>registry/repository:tag</code> or
   * 						<code>registry/repository@digest</code>. For example,
   * 						<code>012345678910.dkr.ecr.<region-name>.amazonaws.com/<repository-name>:latest</code>
   * 					or
   * 						<code>012345678910.dkr.ecr.<region-name>.amazonaws.com/<repository-name>@sha256:94afd1f2e64d908bc90dbca0035a5b567EXAMPLE</code>.
   * 				</p>
   * 			         </li>
   *             <li>
   * 				           <p>Images in official repositories on Docker Hub use a single name (for example,
   * 						<code>ubuntu</code> or <code>mongo</code>).</p>
   * 			         </li>
   *             <li>
   * 				           <p>Images in other repositories on Docker Hub are qualified with an organization
   * 					name (for example, <code>amazon/amazon-ecs-agent</code>).</p>
   * 			         </li>
   *             <li>
   * 				           <p>Images in other online repositories are qualified further by a domain name
   * 					(for example, <code>quay.io/assemblyline/ubuntu</code>).</p>
   * 			         </li>
   *          </ul>
   */
  image?: string;

  /**
   * <p>The private repository authentication credentials to use.</p>
   */
  repositoryCredentials?: RepositoryCredentials;

  /**
   * <p>The number of <code>cpu</code> units reserved for the container. This parameter maps
   * 			to <code>CpuShares</code> in the <a href="https://docs.docker.com/engine/api/v1.35/#operation/ContainerCreate">Create a container</a> section of the
   * 			<a href="https://docs.docker.com/engine/api/v1.35/">Docker Remote API</a> and the <code>--cpu-shares</code> option to <a href="https://docs.docker.com/engine/reference/run/#security-configuration">docker run</a>.</p>
   * 		       <p>This field is optional for tasks using the Fargate launch type, and the
   * 			only requirement is that the total amount of CPU reserved for all containers within a
   * 			task be lower than the task-level <code>cpu</code> value.</p>
   * 		       <note>
   * 			         <p>You can determine the number of CPU units that are available per EC2 instance type
   * 				by multiplying the vCPUs listed for that instance type on the <a href="http://aws.amazon.com/ec2/instance-types/">Amazon EC2 Instances</a> detail page
   * 				by 1,024.</p>
   * 		       </note>
   * 		       <p>Linux containers share unallocated CPU units with other containers on the container
   * 			instance with the same ratio as their allocated amount. For example, if you run a
   * 			single-container task on a single-core instance type with 512 CPU units specified for
   * 			that container, and that is the only task running on the container instance, that
   * 			container could use the full 1,024 CPU unit share at any given time. However, if you
   * 			launched another copy of the same task on that container instance, each task would be
   * 			guaranteed a minimum of 512 CPU units when needed, and each container could float to
   * 			higher CPU usage if the other container was not using it, but if both tasks were 100%
   * 			active all of the time, they would be limited to 512 CPU units.</p>
   * 		       <p>On Linux container instances, the Docker daemon on the container instance uses the CPU
   * 			value to calculate the relative CPU share ratios for running containers. For more
   * 			information, see <a href="https://docs.docker.com/engine/reference/run/#cpu-share-constraint">CPU share
   * 				constraint</a> in the Docker documentation. The minimum valid CPU share value
   * 			that the Linux kernel allows is 2. However, the CPU parameter is not required, and you
   * 			can use CPU values below 2 in your container definitions. For CPU values below 2
   * 			(including null), the behavior varies based on your Amazon ECS container agent
   * 			version:</p>
   * 		       <ul>
   *             <li>
   * 				           <p>
   * 					             <b>Agent versions less than or equal to 1.1.0:</b>
   * 					Null and zero CPU values are passed to Docker as 0, which Docker then converts
   * 					to 1,024 CPU shares. CPU values of 1 are passed to Docker as 1, which the Linux
   * 					kernel converts to two CPU shares.</p>
   * 			         </li>
   *             <li>
   * 				           <p>
   * 					             <b>Agent versions greater than or equal to 1.2.0:</b>
   * 					Null, zero, and CPU values of 1 are passed to Docker as 2.</p>
   * 			         </li>
   *          </ul>
   * 		       <p>On Windows container instances, the CPU limit is enforced as an absolute limit, or a
   * 			quota. Windows containers only have access to the specified amount of CPU that is
   * 			described in the task definition. A null or zero CPU value is passed to Docker as
   * 				<code>0</code>, which Windows interprets as 1% of one CPU.</p>
   */
  cpu?: number;

  /**
   * <p>The amount (in MiB) of memory to present to the container. If your container attempts
   * 			to exceed the memory specified here, the container is killed. The total amount of memory
   * 			reserved for all containers within a task must be lower than the task
   * 				<code>memory</code> value, if one is specified. This parameter maps to
   * 				<code>Memory</code> in the <a href="https://docs.docker.com/engine/api/v1.35/#operation/ContainerCreate">Create a container</a> section of the
   * 			<a href="https://docs.docker.com/engine/api/v1.35/">Docker Remote API</a> and the <code>--memory</code> option to <a href="https://docs.docker.com/engine/reference/run/#security-configuration">docker run</a>.</p>
   * 		       <p>If using the Fargate launch type, this parameter is optional.</p>
   * 		       <p>If using the EC2 launch type, you must specify either a task-level
   * 			memory value or a container-level memory value. If you specify both a container-level
   * 				<code>memory</code> and <code>memoryReservation</code> value, <code>memory</code>
   * 			must be greater than <code>memoryReservation</code>. If you specify
   * 				<code>memoryReservation</code>, then that value is subtracted from the available
   * 			memory resources for the container instance on which the container is placed. Otherwise,
   * 			the value of <code>memory</code> is used.</p>
   * 		       <p>The Docker daemon reserves a minimum of 4 MiB of memory for a container, so you should
   * 			not specify fewer than 4 MiB of memory for your containers.</p>
   */
  memory?: number;

  /**
   * <p>The soft limit (in MiB) of memory to reserve for the container. When system memory is
   * 			under heavy contention, Docker attempts to keep the container memory to this soft limit.
   * 			However, your container can consume more memory when it needs to, up to either the hard
   * 			limit specified with the <code>memory</code> parameter (if applicable), or all of the
   * 			available memory on the container instance, whichever comes first. This parameter maps
   * 			to <code>MemoryReservation</code> in the <a href="https://docs.docker.com/engine/api/v1.35/#operation/ContainerCreate">Create a container</a> section of
   * 			the <a href="https://docs.docker.com/engine/api/v1.35/">Docker Remote API</a> and the <code>--memory-reservation</code> option to <a href="https://docs.docker.com/engine/reference/run/#security-configuration">docker run</a>.</p>
   * 		       <p>If a task-level memory value is not specified, you must specify a non-zero integer for
   * 			one or both of <code>memory</code> or <code>memoryReservation</code> in a container
   * 			definition. If you specify both, <code>memory</code> must be greater than
   * 				<code>memoryReservation</code>. If you specify <code>memoryReservation</code>, then
   * 			that value is subtracted from the available memory resources for the container instance
   * 			on which the container is placed. Otherwise, the value of <code>memory</code> is
   * 			used.</p>
   * 		       <p>For example, if your container normally uses 128 MiB of memory, but occasionally
   * 			bursts to 256 MiB of memory for short periods of time, you can set a
   * 				<code>memoryReservation</code> of 128 MiB, and a <code>memory</code> hard limit of
   * 			300 MiB. This configuration would allow the container to only reserve 128 MiB of memory
   * 			from the remaining resources on the container instance, but also allow the container to
   * 			consume more memory resources when needed.</p>
   * 		       <p>The Docker daemon reserves a minimum of 4 MiB of memory for a container, so you should
   * 			not specify fewer than 4 MiB of memory for your containers. </p>
   */
  memoryReservation?: number;

  /**
   * <p>The <code>links</code> parameter allows containers to communicate with each other
   * 			without the need for port mappings. This parameter is only supported if the network mode
   * 			of a task definition is <code>bridge</code>. The <code>name:internalName</code>
   * 			construct is analogous to <code>name:alias</code> in Docker links.
   * 			Up to 255 letters (uppercase and lowercase), numbers, underscores, and hyphens are allowed. For more information about linking Docker containers, go to
   * 				<a href="https://docs.docker.com/network/links/">Legacy container links</a>
   * 			in the Docker documentation. This parameter maps to <code>Links</code> in the
   * 			<a href="https://docs.docker.com/engine/api/v1.35/#operation/ContainerCreate">Create a container</a> section of the <a href="https://docs.docker.com/engine/api/v1.35/">Docker Remote API</a> and the
   * 				<code>--link</code> option to <a href="https://docs.docker.com/engine/reference/run/#security-configuration">docker
   * 			run</a>.</p>
   *          <note>
   *                         <p>This parameter is not supported for Windows containers.</p>
   *                      </note>
   *          <important>
   * 			         <p>Containers that are collocated on a single container instance may be able to
   * 				communicate with each other without requiring links or host port mappings. Network
   * 				isolation is achieved on the container instance using security groups and VPC
   * 				settings.</p>
   * 		       </important>
   */
  links?: string[];

  /**
   * <p>The list of port mappings for the container. Port mappings allow containers to access
   * 			ports on the host container instance to send or receive traffic.</p>
   * 		       <p>For task definitions that use the <code>awsvpc</code> network mode, you should only
   * 			specify the <code>containerPort</code>. The <code>hostPort</code> can be left blank or
   * 			it must be the same value as the <code>containerPort</code>.</p>
   * 		       <p>Port mappings on Windows use the <code>NetNAT</code> gateway address rather than
   * 				<code>localhost</code>. There is no loopback for port mappings on Windows, so you
   * 			cannot access a container's mapped port from the host itself. </p>
   * 		       <p>This parameter maps to <code>PortBindings</code> in the
   * 			<a href="https://docs.docker.com/engine/api/v1.35/#operation/ContainerCreate">Create a container</a> section of the <a href="https://docs.docker.com/engine/api/v1.35/">Docker Remote API</a> and the
   * 				<code>--publish</code> option to <a href="https://docs.docker.com/engine/reference/run/#security-configuration">docker
   * 				run</a>. If the network mode of a task definition is set to <code>none</code>,
   * 			then you can't specify port mappings. If the network mode of a task definition is set to
   * 				<code>host</code>, then host ports must either be undefined or they must match the
   * 			container port in the port mapping.</p>
   * 		       <note>
   * 			         <p>After a task reaches the <code>RUNNING</code> status, manual and automatic host
   * 				and container port assignments are visible in the <b>Network
   * 					Bindings</b> section of a container description for a selected task in
   * 				the Amazon ECS console. The assignments are also visible in the
   * 					<code>networkBindings</code> section <a>DescribeTasks</a>
   * 				responses.</p>
   * 		       </note>
   */
  portMappings?: PortMapping[];

  /**
   * <p>If the <code>essential</code> parameter of a container is marked as <code>true</code>,
   * 			and that container fails or stops for any reason, all other containers that are part of
   * 			the task are stopped. If the <code>essential</code> parameter of a container is marked
   * 			as <code>false</code>, then its failure does not affect the rest of the containers in a
   * 			task. If this parameter is omitted, a container is assumed to be essential.</p>
   * 		       <p>All tasks must have at least one essential container. If you have an application that
   * 			is composed of multiple containers, you should group containers that are used for a
   * 			common purpose into components, and separate the different components into multiple task
   * 			definitions. For more information, see <a href="https://docs.aws.amazon.com/AmazonECS/latest/developerguide/application_architecture.html">Application
   * 				Architecture</a> in the <i>Amazon Elastic Container Service Developer Guide</i>.</p>
   */
  essential?: boolean;

  /**
   * <important>
   * 			         <p>Early versions of the Amazon ECS container agent do not properly handle
   * 					<code>entryPoint</code> parameters. If you have problems using
   * 					<code>entryPoint</code>, update your container agent or enter your commands and
   * 				arguments as <code>command</code> array items instead.</p>
   * 		       </important>
   * 		       <p>The entry point that is passed to the container. This parameter maps to
   * 				<code>Entrypoint</code> in the <a href="https://docs.docker.com/engine/api/v1.35/#operation/ContainerCreate">Create a container</a> section of the
   * 			<a href="https://docs.docker.com/engine/api/v1.35/">Docker Remote API</a> and the <code>--entrypoint</code> option to <a href="https://docs.docker.com/engine/reference/run/#security-configuration">docker run</a>. For more information, see <a href="https://docs.docker.com/engine/reference/builder/#entrypoint">https://docs.docker.com/engine/reference/builder/#entrypoint</a>.</p>
   */
  entryPoint?: string[];

  /**
   * <p>The command that is passed to the container. This parameter maps to <code>Cmd</code>
   * 			in the <a href="https://docs.docker.com/engine/api/v1.35/#operation/ContainerCreate">Create a container</a> section of the <a href="https://docs.docker.com/engine/api/v1.35/">Docker Remote API</a> and the
   * 				<code>COMMAND</code> parameter to <a href="https://docs.docker.com/engine/reference/run/#security-configuration">docker
   * 				run</a>. For more information, see <a href="https://docs.docker.com/engine/reference/builder/#cmd">https://docs.docker.com/engine/reference/builder/#cmd</a>. If there are multiple arguments, each
   * 			argument should be a separated string in the array.</p>
   */
  command?: string[];

  /**
   * <p>The environment variables to pass to a container. This parameter maps to
   * 				<code>Env</code> in the <a href="https://docs.docker.com/engine/api/v1.35/#operation/ContainerCreate">Create a container</a> section of the
   * 			<a href="https://docs.docker.com/engine/api/v1.35/">Docker Remote API</a> and the <code>--env</code> option to <a href="https://docs.docker.com/engine/reference/run/#security-configuration">docker run</a>.</p>
   * 		       <important>
   * 			         <p>We do not recommend using plaintext environment variables for sensitive
   * 				information, such as credential data.</p>
   * 		       </important>
   */
  environment?: KeyValuePair[];

  /**
   * <p>A list of files containing the environment variables to pass to a container. This
   * 			parameter maps to the <code>--env-file</code> option to <a href="https://docs.docker.com/engine/reference/run/#security-configuration">docker run</a>.</p>
   * 		       <p>You can specify up to ten environment files. The file must have a <code>.env</code>
   * 			file extension. Each line in an environment file should contain an environment variable
   * 			in <code>VARIABLE=VALUE</code> format. Lines beginning with <code>#</code> are treated
   * 			as comments and are ignored. For more information on the environment variable file
   * 			syntax, see <a href="https://docs.docker.com/compose/env-file/">Declare default
   * 				environment variables in file</a>.</p>
   * 		       <p>If there are environment variables specified using the <code>environment</code>
   * 			parameter in a container definition, they take precedence over the variables contained
   * 			within an environment file. If multiple environment files are specified that contain the
   * 			same variable, they are processed from the top down. It is recommended to use unique
   * 			variable names. For more information, see <a href="https://docs.aws.amazon.com/AmazonECS/latest/developerguide/taskdef-envfiles.html">Specifying Environment
   * 				Variables</a> in the <i>Amazon Elastic Container Service Developer Guide</i>.</p>
   */
  environmentFiles?: EnvironmentFile[];

  /**
   * <p>The mount points for data volumes in your container.</p>
   * 		       <p>This parameter maps to <code>Volumes</code> in the <a href="https://docs.docker.com/engine/api/v1.35/#operation/ContainerCreate">Create a container</a>
   * 			section of the <a href="https://docs.docker.com/engine/api/v1.35/">Docker Remote API</a> and the <code>--volume</code> option to <a href="https://docs.docker.com/engine/reference/run/#security-configuration">docker run</a>.</p>
   * 		       <p>Windows containers can mount whole directories on the same drive as
   * 				<code>$env:ProgramData</code>. Windows containers cannot mount directories on a
   * 			different drive, and mount point cannot be across drives.</p>
   */
  mountPoints?: MountPoint[];

  /**
   * <p>Data volumes to mount from another container. This parameter maps to
   * 				<code>VolumesFrom</code> in the <a href="https://docs.docker.com/engine/api/v1.35/#operation/ContainerCreate">Create a container</a> section of the
   * 			<a href="https://docs.docker.com/engine/api/v1.35/">Docker Remote API</a> and the <code>--volumes-from</code> option to <a href="https://docs.docker.com/engine/reference/run/#security-configuration">docker run</a>.</p>
   */
  volumesFrom?: VolumeFrom[];

  /**
   * <p>Linux-specific modifications that are applied to the container, such as Linux kernel
   * 			capabilities. For more information see <a>KernelCapabilities</a>.</p>
   * 		       <note>
   * 			         <p>This parameter is not supported for Windows containers.</p>
   * 		       </note>
   */
  linuxParameters?: LinuxParameters;

  /**
   * <p>The secrets to pass to the container. For more information, see <a href="https://docs.aws.amazon.com/AmazonECS/latest/developerguide/specifying-sensitive-data.html">Specifying
   * 				Sensitive Data</a> in the <i>Amazon Elastic Container Service Developer Guide</i>.</p>
   */
  secrets?: Secret[];

  /**
   * <p>The dependencies defined for container startup and shutdown. A container can contain
   * 			multiple dependencies. When a dependency is defined for container startup, for container
   * 			shutdown it is reversed.</p>
   * 		       <p>For tasks using the EC2 launch type, the container instances require at
   * 			least version 1.26.0 of the container agent to enable container dependencies. However,
   * 			we recommend using the latest container agent version. For information about checking
   * 			your agent version and updating to the latest version, see <a href="https://docs.aws.amazon.com/AmazonECS/latest/developerguide/ecs-agent-update.html">Updating the Amazon ECS
   * 				Container Agent</a> in the <i>Amazon Elastic Container Service Developer Guide</i>. If you are
   * 			using an Amazon ECS-optimized Linux AMI, your instance needs at least version 1.26.0-1 of the
   * 				<code>ecs-init</code> package. If your container instances are launched from version
   * 				<code>20190301</code> or later, then they contain the required versions of the
   * 			container agent and <code>ecs-init</code>. For more information, see <a href="https://docs.aws.amazon.com/AmazonECS/latest/developerguide/ecs-optimized_AMI.html">Amazon ECS-optimized Linux AMI</a> in the <i>Amazon Elastic Container Service Developer Guide</i>.</p>
   * 		       <p>For tasks using the Fargate launch type, the task or service requires
   * 			platform version <code>1.3.0</code> or later.</p>
   */
  dependsOn?: ContainerDependency[];

  /**
   * <p>Time duration (in seconds) to wait before giving up on resolving dependencies for a
   * 			container. For example, you specify two containers in a task definition with containerA
   * 			having a dependency on containerB reaching a <code>COMPLETE</code>,
   * 			<code>SUCCESS</code>, or <code>HEALTHY</code> status. If a <code>startTimeout</code>
   * 			value is specified for containerB and it does not reach the desired status within that
   * 			time then containerA will give up and not start. This results in the task transitioning
   * 			to a <code>STOPPED</code> state.</p>
   * 		       <note>
   * 			         <p>When the <code>ECS_CONTAINER_START_TIMEOUT</code> container agent configuration
   * 				variable is used, it is enforced indendently from this start timeout value.</p>
   * 		       </note>
   * 		       <p>For tasks using the Fargate launch type, this parameter requires that
   * 			the task or service uses platform version 1.3.0 or later.</p>
   * 		       <p>For tasks using the EC2 launch type, your container instances require at
   * 			least version <code>1.26.0</code> of the container agent to enable a container start
   * 			timeout value. However, we recommend using the latest container agent version. For
   * 			information about checking your agent version and updating to the latest version, see
   * 				<a href="https://docs.aws.amazon.com/AmazonECS/latest/developerguide/ecs-agent-update.html">Updating the Amazon ECS
   * 				Container Agent</a> in the <i>Amazon Elastic Container Service Developer Guide</i>. If you are
   * 			using an Amazon ECS-optimized Linux AMI, your instance needs at least version <code>1.26.0-1</code> of
   * 			the <code>ecs-init</code> package. If your container instances are launched from version
   * 				<code>20190301</code> or later, then they contain the required versions of the
   * 			container agent and <code>ecs-init</code>. For more information, see <a href="https://docs.aws.amazon.com/AmazonECS/latest/developerguide/ecs-optimized_AMI.html">Amazon ECS-optimized Linux AMI</a> in the <i>Amazon Elastic Container Service Developer Guide</i>.</p>
   */
  startTimeout?: number;

  /**
   * <p>Time duration (in seconds) to wait before the container is forcefully killed if it
   * 			doesn't exit normally on its own.</p>
   * 		       <p>For tasks using the Fargate launch type, the task or service requires
   * 			platform version 1.3.0 or later. The max stop timeout value is 120 seconds and if the
   * 			parameter is not specified, the default value of 30 seconds is used.</p>
   * 		       <p>For tasks using the EC2 launch type, if the <code>stopTimeout</code>
   * 			parameter is not specified, the value set for the Amazon ECS container agent configuration
   * 			variable <code>ECS_CONTAINER_STOP_TIMEOUT</code> is used by default. If neither the
   * 				<code>stopTimeout</code> parameter or the <code>ECS_CONTAINER_STOP_TIMEOUT</code>
   * 			agent configuration variable are set, then the default values of 30 seconds for Linux
   * 			containers and 30 seconds on Windows containers are used. Your container instances
   * 			require at least version 1.26.0 of the container agent to enable a container stop
   * 			timeout value. However, we recommend using the latest container agent version. For
   * 			information about checking your agent version and updating to the latest version, see
   * 				<a href="https://docs.aws.amazon.com/AmazonECS/latest/developerguide/ecs-agent-update.html">Updating the Amazon ECS
   * 				Container Agent</a> in the <i>Amazon Elastic Container Service Developer Guide</i>. If you are
   * 			using an Amazon ECS-optimized Linux AMI, your instance needs at least version 1.26.0-1 of the
   * 				<code>ecs-init</code> package. If your container instances are launched from version
   * 				<code>20190301</code> or later, then they contain the required versions of the
   * 			container agent and <code>ecs-init</code>. For more information, see <a href="https://docs.aws.amazon.com/AmazonECS/latest/developerguide/ecs-optimized_AMI.html">Amazon ECS-optimized Linux AMI</a> in the <i>Amazon Elastic Container Service Developer Guide</i>.</p>
   */
  stopTimeout?: number;

  /**
   * <p>The hostname to use for your container. This parameter maps to <code>Hostname</code>
   * 			in the <a href="https://docs.docker.com/engine/api/v1.35/#operation/ContainerCreate">Create a container</a> section of the <a href="https://docs.docker.com/engine/api/v1.35/">Docker Remote API</a> and the
   * 				<code>--hostname</code> option to <a href="https://docs.docker.com/engine/reference/run/#security-configuration">docker
   * 				run</a>.</p>
   * 		       <note>
   * 			         <p>The <code>hostname</code> parameter is not supported if you are using the
   * 					<code>awsvpc</code> network mode.</p>
   * 		       </note>
   */
  hostname?: string;

  /**
   * <p>The user to use inside the container. This parameter maps to <code>User</code> in the
   * 			<a href="https://docs.docker.com/engine/api/v1.35/#operation/ContainerCreate">Create a container</a> section of the <a href="https://docs.docker.com/engine/api/v1.35/">Docker Remote API</a> and the
   * 				<code>--user</code> option to <a href="https://docs.docker.com/engine/reference/run/#security-configuration">docker
   * 			run</a>.</p>
   * 		       <important>
   * 			         <p>When running tasks using the <code>host</code> network mode, you should not run
   * 				containers using the root user (UID 0). It is considered best practice to use a
   * 				non-root user.</p>
   * 		       </important>
   * 		       <p>You can specify the <code>user</code> using the following formats. If specifying a UID
   * 			or GID, you must specify it as a positive integer.</p>
   * 		       <ul>
   *             <li>
   * 				           <p>
   *                   <code>user</code>
   *                </p>
   * 			         </li>
   *             <li>
   * 				           <p>
   *                   <code>user:group</code>
   *                </p>
   * 			         </li>
   *             <li>
   * 				           <p>
   *                   <code>uid</code>
   *                </p>
   * 			         </li>
   *             <li>
   * 				           <p>
   *                   <code>uid:gid</code>
   *                </p>
   * 			         </li>
   *             <li>
   * 				           <p>
   *                   <code>user:gid</code>
   *                </p>
   * 			         </li>
   *             <li>
   * 				           <p>
   *                   <code>uid:group</code>
   *                </p>
   * 			         </li>
   *          </ul>
   *          <note>
   *                         <p>This parameter is not supported for Windows containers.</p>
   *                      </note>
   */
  user?: string;

  /**
   * <p>The working directory in which to run commands inside the container. This parameter
   * 			maps to <code>WorkingDir</code> in the <a href="https://docs.docker.com/engine/api/v1.35/#operation/ContainerCreate">Create a container</a> section of the
   * 			<a href="https://docs.docker.com/engine/api/v1.35/">Docker Remote API</a> and the <code>--workdir</code> option to <a href="https://docs.docker.com/engine/reference/run/#security-configuration">docker run</a>.</p>
   */
  workingDirectory?: string;

  /**
   * <p>When this parameter is true, networking is disabled within the container. This
   * 			parameter maps to <code>NetworkDisabled</code> in the <a href="https://docs.docker.com/engine/api/v1.35/#operation/ContainerCreate">Create a container</a>
   * 			section of the <a href="https://docs.docker.com/engine/api/v1.35/">Docker Remote API</a>.</p>
   *          <note>
   *                         <p>This parameter is not supported for Windows containers.</p>
   *                      </note>
   */
  disableNetworking?: boolean;

  /**
   * <p>When this parameter is true, the container is given elevated privileges on the host
   * 			container instance (similar to the <code>root</code> user). This parameter maps to
   * 				<code>Privileged</code> in the <a href="https://docs.docker.com/engine/api/v1.35/#operation/ContainerCreate">Create a container</a> section of the
   * 			<a href="https://docs.docker.com/engine/api/v1.35/">Docker Remote API</a> and the <code>--privileged</code> option to <a href="https://docs.docker.com/engine/reference/run/#security-configuration">docker run</a>.</p>
   *          <note>
   *                                 <p>This parameter is not supported for Windows containers or tasks run on Fargate.</p>
   *                              </note>
   */
  privileged?: boolean;

  /**
   * <p>When this parameter is true, the container is given read-only access to its root file
   * 			system. This parameter maps to <code>ReadonlyRootfs</code> in the
   * 			<a href="https://docs.docker.com/engine/api/v1.35/#operation/ContainerCreate">Create a container</a> section of the <a href="https://docs.docker.com/engine/api/v1.35/">Docker Remote API</a> and the
   * 				<code>--read-only</code> option to <a href="https://docs.docker.com/engine/reference/run/#security-configuration">docker
   * 				run</a>.</p>
   *          <note>
   *                         <p>This parameter is not supported for Windows containers.</p>
   *                      </note>
   */
  readonlyRootFilesystem?: boolean;

  /**
   * <p>A list of DNS servers that are presented to the container. This parameter maps to
   * 				<code>Dns</code> in the <a href="https://docs.docker.com/engine/api/v1.35/#operation/ContainerCreate">Create a container</a> section of the
   * 			<a href="https://docs.docker.com/engine/api/v1.35/">Docker Remote API</a> and the <code>--dns</code> option to <a href="https://docs.docker.com/engine/reference/run/#security-configuration">docker run</a>.</p>
   *          <note>
   *                         <p>This parameter is not supported for Windows containers.</p>
   *                      </note>
   */
  dnsServers?: string[];

  /**
   * <p>A list of DNS search domains that are presented to the container. This parameter maps
   * 			to <code>DnsSearch</code> in the <a href="https://docs.docker.com/engine/api/v1.35/#operation/ContainerCreate">Create a container</a> section of the
   * 			<a href="https://docs.docker.com/engine/api/v1.35/">Docker Remote API</a> and the <code>--dns-search</code> option to <a href="https://docs.docker.com/engine/reference/run/#security-configuration">docker run</a>.</p>
   *          <note>
   *                         <p>This parameter is not supported for Windows containers.</p>
   *                      </note>
   */
  dnsSearchDomains?: string[];

  /**
   * <p>A list of hostnames and IP address mappings to append to the <code>/etc/hosts</code>
   * 			file on the container. This parameter maps to <code>ExtraHosts</code> in the
   * 			<a href="https://docs.docker.com/engine/api/v1.35/#operation/ContainerCreate">Create a container</a> section of the <a href="https://docs.docker.com/engine/api/v1.35/">Docker Remote API</a> and the
   * 				<code>--add-host</code> option to <a href="https://docs.docker.com/engine/reference/run/#security-configuration">docker
   * 				run</a>.</p>
   * 		       <note>
   * 			         <p>This parameter is not supported for Windows containers or tasks that use the
   * 					<code>awsvpc</code> network mode.</p>
   * 		       </note>
   */
  extraHosts?: HostEntry[];

  /**
   * <p>A list of strings to provide custom labels for SELinux and AppArmor multi-level
   * 			security systems. This field is not valid for containers in tasks using the
   * 			Fargate launch type.</p>
   * 		       <p>With Windows containers, this parameter can be used to reference a credential spec
   * 			file when configuring a container for Active Directory authentication. For more
   * 			information, see <a href="https://docs.aws.amazon.com/AmazonECS/latest/developerguide/windows-gmsa.html">Using gMSAs for Windows
   * 				Containers</a> in the <i>Amazon Elastic Container Service Developer Guide</i>.</p>
   * 		       <p>This parameter maps to <code>SecurityOpt</code> in the
   * 			<a href="https://docs.docker.com/engine/api/v1.35/#operation/ContainerCreate">Create a container</a> section of the <a href="https://docs.docker.com/engine/api/v1.35/">Docker Remote API</a> and the
   * 				<code>--security-opt</code> option to <a href="https://docs.docker.com/engine/reference/run/#security-configuration">docker
   * 				run</a>.</p>
   * 		       <note>
   * 			         <p>The Amazon ECS container agent running on a container instance must register with the
   * 					<code>ECS_SELINUX_CAPABLE=true</code> or <code>ECS_APPARMOR_CAPABLE=true</code>
   * 				environment variables before containers placed on that instance can use these
   * 				security options. For more information, see <a href="https://docs.aws.amazon.com/AmazonECS/latest/developerguide/ecs-agent-config.html">Amazon ECS Container
   * 					Agent Configuration</a> in the <i>Amazon Elastic Container Service Developer Guide</i>.</p>
   * 		       </note>
   * 		       <p>For more information about valid values, see <a href="https://docs.docker.com/engine/reference/run/#security-configuration">Docker
   * 				Run Security Configuration</a>. </p>
   * 		       <p>Valid values: "no-new-privileges" | "apparmor:PROFILE" | "label:value" |
   * 			"credentialspec:CredentialSpecFilePath"</p>
   */
  dockerSecurityOptions?: string[];

  /**
   * <p>When this parameter is <code>true</code>, this allows you to deploy containerized
   * 			applications that require <code>stdin</code> or a <code>tty</code> to be allocated. This
   * 			parameter maps to <code>OpenStdin</code> in the <a href="https://docs.docker.com/engine/api/v1.35/#operation/ContainerCreate">Create a container</a>
   * 			section of the <a href="https://docs.docker.com/engine/api/v1.35/">Docker Remote API</a> and the <code>--interactive</code> option to <a href="https://docs.docker.com/engine/reference/run/#security-configuration">docker run</a>.</p>
   */
  interactive?: boolean;

  /**
   * <p>When this parameter is <code>true</code>, a TTY is allocated. This parameter maps to
   * 				<code>Tty</code> in the <a href="https://docs.docker.com/engine/api/v1.35/#operation/ContainerCreate">Create a container</a> section of the
   * 			<a href="https://docs.docker.com/engine/api/v1.35/">Docker Remote API</a> and the <code>--tty</code> option to <a href="https://docs.docker.com/engine/reference/run/#security-configuration">docker run</a>.</p>
   */
  pseudoTerminal?: boolean;

  /**
   * <p>A key/value map of labels to add to the container. This parameter maps to
   * 				<code>Labels</code> in the <a href="https://docs.docker.com/engine/api/v1.35/#operation/ContainerCreate">Create a container</a> section of the
   * 			<a href="https://docs.docker.com/engine/api/v1.35/">Docker Remote API</a> and the <code>--label</code> option to <a href="https://docs.docker.com/engine/reference/run/#security-configuration">docker run</a>. This parameter requires version 1.18 of the Docker Remote API or greater on your container instance. To check the Docker Remote API version on your container instance, log in to your container instance and run the following command: <code>sudo docker version --format '{{.Server.APIVersion}}'</code>
   *          </p>
   */
  dockerLabels?: { [key: string]: string };

  /**
   * <p>A list of <code>ulimits</code> to set in the container. If a ulimit value is specified
   * 			in a task definition, it will override the default values set by Docker. This parameter
   * 			maps to <code>Ulimits</code> in the <a href="https://docs.docker.com/engine/api/v1.35/#operation/ContainerCreate">Create a container</a> section of the
   * 			<a href="https://docs.docker.com/engine/api/v1.35/">Docker Remote API</a> and the <code>--ulimit</code> option to <a href="https://docs.docker.com/engine/reference/run/#security-configuration">docker run</a>. Valid naming values are displayed
   * 			in the <a>Ulimit</a> data type.</p>
   * 		       <p>Amazon ECS tasks hosted on Fargate use the default
   * 							resource limit values set by the operating system with the exception of
   * 							the <code>nofile</code> resource limit parameter which Fargate
   * 							overrides. The <code>nofile</code> resource limit sets a restriction on
   * 							the number of open files that a container can use. The default
   * 								<code>nofile</code> soft limit is <code>1024</code> and hard limit
   * 							is <code>4096</code>.</p>
   * 		       <p>This parameter requires version 1.18 of the Docker Remote API or greater on your container instance. To check the Docker Remote API version on your container instance, log in to your container instance and run the following command: <code>sudo docker version --format '{{.Server.APIVersion}}'</code>
   *          </p>
   *          <note>
   *                         <p>This parameter is not supported for Windows containers.</p>
   *                      </note>
   */
  ulimits?: Ulimit[];

  /**
   * <p>The log configuration specification for the container.</p>
   * 		       <p>This parameter maps to <code>LogConfig</code> in the
   * 			<a href="https://docs.docker.com/engine/api/v1.35/#operation/ContainerCreate">Create a container</a> section of the <a href="https://docs.docker.com/engine/api/v1.35/">Docker Remote API</a> and the
   * 				<code>--log-driver</code> option to <a href="https://docs.docker.com/engine/reference/run/#security-configuration">docker
   * 				run</a>. By default, containers use the same logging driver that the Docker
   * 			daemon uses. However the container may use a different logging driver than the Docker
   * 			daemon by specifying a log driver with this parameter in the container definition. To
   * 			use a different logging driver for a container, the log system must be configured
   * 			properly on the container instance (or on a different log server for remote logging
   * 			options). For more information on the options for different supported log drivers, see
   * 				<a href="https://docs.docker.com/engine/admin/logging/overview/">Configure
   * 				logging drivers</a> in the Docker documentation.</p>
   * 		       <note>
   * 			         <p>Amazon ECS currently supports a subset of the logging drivers available to the Docker
   * 				daemon (shown in the <a>LogConfiguration</a> data type). Additional log
   * 				drivers may be available in future releases of the Amazon ECS container agent.</p>
   * 		       </note>
   * 		       <p>This parameter requires version 1.18 of the Docker Remote API or greater on your container instance. To check the Docker Remote API version on your container instance, log in to your container instance and run the following command: <code>sudo docker version --format '{{.Server.APIVersion}}'</code>
   *          </p>
   * 		       <note>
   * 			         <p>The Amazon ECS container agent running on a container instance must register the
   * 				logging drivers available on that instance with the
   * 					<code>ECS_AVAILABLE_LOGGING_DRIVERS</code> environment variable before
   * 				containers placed on that instance can use these log configuration options. For more
   * 				information, see <a href="https://docs.aws.amazon.com/AmazonECS/latest/developerguide/ecs-agent-config.html">Amazon ECS Container
   * 					Agent Configuration</a> in the <i>Amazon Elastic Container Service Developer Guide</i>.</p>
   * 		       </note>
   */
  logConfiguration?: LogConfiguration;

  /**
   * <p>The container health check command and associated configuration parameters for the
   * 			container. This parameter maps to <code>HealthCheck</code> in the
   * 			<a href="https://docs.docker.com/engine/api/v1.35/#operation/ContainerCreate">Create a container</a> section of the <a href="https://docs.docker.com/engine/api/v1.35/">Docker Remote API</a> and the
   * 				<code>HEALTHCHECK</code> parameter of <a href="https://docs.docker.com/engine/reference/run/#security-configuration">docker
   * 				run</a>.</p>
   */
  healthCheck?: HealthCheck;

  /**
   * <p>A list of namespaced kernel parameters to set in the container. This parameter maps to
   * 				<code>Sysctls</code> in the <a href="https://docs.docker.com/engine/api/v1.35/#operation/ContainerCreate">Create a container</a> section of the
   * 			<a href="https://docs.docker.com/engine/api/v1.35/">Docker Remote API</a> and the <code>--sysctl</code> option to <a href="https://docs.docker.com/engine/reference/run/#security-configuration">docker run</a>.</p>
   * 		       <note>
   * 			         <p>It is not recommended that you specify network-related <code>systemControls</code>
   * 				parameters for multiple containers in a single task that also uses either the
   * 					<code>awsvpc</code> or <code>host</code> network modes. For tasks that use the
   * 					<code>awsvpc</code> network mode, the container that is started last determines
   * 				which <code>systemControls</code> parameters take effect. For tasks that use the
   * 					<code>host</code> network mode, it changes the container instance's namespaced
   * 				kernel parameters as well as the containers.</p>
   * 		       </note>
   */
  systemControls?: SystemControl[];

  /**
   * <p>The type and amount of a resource to assign to a container. The only supported
   * 			resource is a GPU.</p>
   */
  resourceRequirements?: ResourceRequirement[];

  /**
   * <p>The FireLens configuration for the container. This is used to specify and configure a
   * 			log router for container logs. For more information, see <a href="https://docs.aws.amazon.com/AmazonECS/latest/developerguide/using_firelens.html">Custom Log Routing</a>
   * 			in the <i>Amazon Elastic Container Service Developer Guide</i>.</p>
   */
  firelensConfiguration?: FirelensConfiguration;
}

export namespace ContainerDefinition {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ContainerDefinition): any => ({
    ...obj,
  });
}

/**
 * <p>The amount of ephemeral storage to allocate for the task. This parameter is used to
 * 			expand the total amount of ephemeral storage available, beyond the default amount, for
 * 			tasks hosted on Fargate. For more information, see <a href="https://docs.aws.amazon.com/AmazonECS/latest/userguide/using_data_volumes.html">Fargate task
 * 				storage</a> in the <i>Amazon ECS User Guide for Fargate</i>.</p>
 * 		       <note>
 * 			         <p>This parameter is only supported for tasks hosted on Fargate using platform
 * 				version <code>1.4.0</code> or later.</p>
 * 		       </note>
 */
export interface EphemeralStorage {
  /**
   * <p>The total amount, in GiB, of ephemeral storage to set for the task. The minimum
   * 			supported value is <code>21</code> GiB and the maximum supported value is
   * 				<code>200</code> GiB.</p>
   */
  sizeInGiB: number | undefined;
}

export namespace EphemeralStorage {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: EphemeralStorage): any => ({
    ...obj,
  });
}

/**
 * <p>Details on a Elastic Inference accelerator. For more information, see <a href="https://docs.aws.amazon.com/AmazonECS/latest/developerguide/ecs-eia.html">Working with
 * 				Amazon Elastic Inference on Amazon ECS</a> in the
 * 				<i>Amazon Elastic Container Service Developer Guide</i>.</p>
 */
export interface InferenceAccelerator {
  /**
   * <p>The Elastic Inference accelerator device name. The <code>deviceName</code> must also
   * 			be referenced in a container definition as a <a>ResourceRequirement</a>.</p>
   */
  deviceName: string | undefined;

  /**
   * <p>The Elastic Inference accelerator type to use.</p>
   */
  deviceType: string | undefined;
}

export namespace InferenceAccelerator {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: InferenceAccelerator): any => ({
    ...obj,
  });
}

export enum IpcMode {
  HOST = "host",
  NONE = "none",
  TASK = "task",
}

export enum NetworkMode {
  AWSVPC = "awsvpc",
  BRIDGE = "bridge",
  HOST = "host",
  NONE = "none",
}

export enum PidMode {
  HOST = "host",
  TASK = "task",
}

export enum TaskDefinitionPlacementConstraintType {
  MEMBER_OF = "memberOf",
}

/**
 * <p>An object representing a constraint on task placement in the task definition. For more
 * 			information, see <a href="https://docs.aws.amazon.com/AmazonECS/latest/developerguide/task-placement-constraints.html">Task placement constraints</a> in the
 * 				<i>Amazon Elastic Container Service Developer Guide</i>.</p>
 * 		       <note>
 * 			         <p>Task placement constraints are not supported for tasks run on Fargate.</p>
 * 		       </note>
 */
export interface TaskDefinitionPlacementConstraint {
  /**
   * <p>The type of constraint. The <code>MemberOf</code> constraint restricts selection to be
   * 			from a group of valid candidates.</p>
   */
  type?: TaskDefinitionPlacementConstraintType | string;

  /**
   * <p>A cluster query language expression to apply to the constraint. For more information,
   * 			see <a href="https://docs.aws.amazon.com/AmazonECS/latest/developerguide/cluster-query-language.html">Cluster query language</a> in the
   * 				<i>Amazon Elastic Container Service Developer Guide</i>.</p>
   */
  expression?: string;
}

export namespace TaskDefinitionPlacementConstraint {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: TaskDefinitionPlacementConstraint): any => ({
    ...obj,
  });
}

export enum ProxyConfigurationType {
  APPMESH = "APPMESH",
}

/**
 * <p>The configuration details for the App Mesh proxy.</p>
 * 		       <p>For tasks using the EC2 launch type, the container instances require at
 * 			least version 1.26.0 of the container agent and at least version 1.26.0-1 of the
 * 				<code>ecs-init</code> package to enable a proxy configuration. If your container
 * 			instances are launched from the Amazon ECS-optimized AMI version <code>20190301</code> or
 * 			later, then they contain the required versions of the container agent and
 * 				<code>ecs-init</code>. For more information, see <a href="https://docs.aws.amazon.com/AmazonECS/latest/developerguide/ecs-optimized_AMI.html">Amazon ECS-optimized Linux AMI</a>
 * 		       </p>
 */
export interface ProxyConfiguration {
  /**
   * <p>The proxy type. The only supported value is <code>APPMESH</code>.</p>
   */
  type?: ProxyConfigurationType | string;

  /**
   * <p>The name of the container that will serve as the App Mesh proxy.</p>
   */
  containerName: string | undefined;

  /**
   * <p>The set of network configuration parameters to provide the Container Network Interface
   * 			(CNI) plugin, specified as key-value pairs.</p>
   * 		       <ul>
   *             <li>
   * 				           <p>
   *                   <code>IgnoredUID</code> - (Required) The user ID (UID) of the proxy
   * 					container as defined by the <code>user</code> parameter in a container
   * 					definition. This is used to ensure the proxy ignores its own traffic. If
   * 						<code>IgnoredGID</code> is specified, this field can be empty.</p>
   * 			         </li>
   *             <li>
   * 				           <p>
   *                   <code>IgnoredGID</code> - (Required) The group ID (GID) of the proxy
   * 					container as defined by the <code>user</code> parameter in a container
   * 					definition. This is used to ensure the proxy ignores its own traffic. If
   * 						<code>IgnoredUID</code> is specified, this field can be empty.</p>
   * 			         </li>
   *             <li>
   * 				           <p>
   *                   <code>AppPorts</code> - (Required) The list of ports that the
   * 					application uses. Network traffic to these ports is forwarded to the
   * 						<code>ProxyIngressPort</code> and <code>ProxyEgressPort</code>.</p>
   * 			         </li>
   *             <li>
   * 				           <p>
   *                   <code>ProxyIngressPort</code> - (Required) Specifies the port that
   * 					incoming traffic to the <code>AppPorts</code> is directed to.</p>
   * 			         </li>
   *             <li>
   * 				           <p>
   *                   <code>ProxyEgressPort</code> - (Required) Specifies the port that
   * 					outgoing traffic from the <code>AppPorts</code> is directed to.</p>
   * 			         </li>
   *             <li>
   * 				           <p>
   *                   <code>EgressIgnoredPorts</code> - (Required) The egress traffic going to
   * 					the specified ports is ignored and not redirected to the
   * 						<code>ProxyEgressPort</code>. It can be an empty list.</p>
   * 			         </li>
   *             <li>
   * 				           <p>
   *                   <code>EgressIgnoredIPs</code> - (Required) The egress traffic going to
   * 					the specified IP addresses is ignored and not redirected to the
   * 						<code>ProxyEgressPort</code>. It can be an empty list.</p>
   * 			         </li>
   *          </ul>
   */
  properties?: KeyValuePair[];
}

export namespace ProxyConfiguration {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ProxyConfiguration): any => ({
    ...obj,
  });
}

export enum TaskDefinitionStatus {
  ACTIVE = "ACTIVE",
  INACTIVE = "INACTIVE",
}

export enum Scope {
  SHARED = "shared",
  TASK = "task",
}

/**
 * <p>This parameter is specified when you are using Docker volumes. Docker volumes are only
 * 			supported when you are using the EC2 launch type. Windows containers only
 * 			support the use of the <code>local</code> driver. To use bind mounts, specify a
 * 				<code>host</code> instead.</p>
 */
export interface DockerVolumeConfiguration {
  /**
   * <p>The scope for the Docker volume that determines its lifecycle. Docker volumes that are
   * 			scoped to a <code>task</code> are automatically provisioned when the task starts and
   * 			destroyed when the task stops. Docker volumes that are scoped as <code>shared</code>
   * 			persist after the task stops.</p>
   */
  scope?: Scope | string;

  /**
   * <p>If this value is <code>true</code>, the Docker volume is created if it does not
   * 			already exist.</p>
   * 		       <note>
   * 			         <p>This field is only used if the <code>scope</code> is <code>shared</code>.</p>
   * 		       </note>
   */
  autoprovision?: boolean;

  /**
   * <p>The Docker volume driver to use. The driver value must match the driver name provided
   * 			by Docker because it is used for task placement. If the driver was installed using the
   * 			Docker plugin CLI, use <code>docker plugin ls</code> to retrieve the driver name from
   * 			your container instance. If the driver was installed using another method, use Docker
   * 			plugin discovery to retrieve the driver name. For more information, see <a href="https://docs.docker.com/engine/extend/plugin_api/#plugin-discovery">Docker
   * 				plugin discovery</a>. This parameter maps to <code>Driver</code> in the
   * 			<a href="https://docs.docker.com/engine/api/v1.35/#operation/VolumeCreate">Create a volume</a> section of the <a href="https://docs.docker.com/engine/api/v1.35/">Docker Remote API</a> and the
   * 				<code>xxdriver</code> option to <a href="https://docs.docker.com/engine/reference/commandline/volume_create/">docker
   * 				volume create</a>.</p>
   */
  driver?: string;

  /**
   * <p>A map of Docker driver-specific options passed through. This parameter maps to
   * 				<code>DriverOpts</code> in the <a href="https://docs.docker.com/engine/api/v1.35/#operation/VolumeCreate">Create a volume</a> section of the
   * 			<a href="https://docs.docker.com/engine/api/v1.35/">Docker Remote API</a> and the <code>xxopt</code> option to <a href="https://docs.docker.com/engine/reference/commandline/volume_create/">docker
   * 				volume create</a>.</p>
   */
  driverOpts?: { [key: string]: string };

  /**
   * <p>Custom metadata to add to your Docker volume. This parameter maps to
   * 				<code>Labels</code> in the <a href="https://docs.docker.com/engine/api/v1.35/#operation/VolumeCreate">Create a volume</a> section of the
   * 			<a href="https://docs.docker.com/engine/api/v1.35/">Docker Remote API</a> and the <code>xxlabel</code> option to <a href="https://docs.docker.com/engine/reference/commandline/volume_create/">docker
   * 				volume create</a>.</p>
   */
  labels?: { [key: string]: string };
}

export namespace DockerVolumeConfiguration {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DockerVolumeConfiguration): any => ({
    ...obj,
  });
}

export enum EFSAuthorizationConfigIAM {
  DISABLED = "DISABLED",
  ENABLED = "ENABLED",
}

/**
 * <p>The authorization configuration details for the Amazon EFS file system.</p>
 */
export interface EFSAuthorizationConfig {
  /**
   * <p>The Amazon EFS access point ID to use. If an access point is specified, the root directory
   * 			value specified in the <code>EFSVolumeConfiguration</code> must either be omitted or set
   * 			to <code>/</code> which will enforce the path set on the EFS access point. If an access
   * 			point is used, transit encryption must be enabled in the
   * 				<code>EFSVolumeConfiguration</code>. For more information, see <a href="https://docs.aws.amazon.com/efs/latest/ug/efs-access-points.html">Working with Amazon
   * 				EFS Access Points</a> in the <i>Amazon Elastic File System User Guide</i>.</p>
   */
  accessPointId?: string;

  /**
   * <p>Whether or not to use the Amazon ECS task IAM role defined in a task definition when
   * 			mounting the Amazon EFS file system. If enabled, transit encryption must be enabled in the
   * 				<code>EFSVolumeConfiguration</code>. If this parameter is omitted, the default value
   * 			of <code>DISABLED</code> is used. For more information, see <a href="https://docs.aws.amazon.com/AmazonECS/latest/developerguide/efs-volumes.html#efs-volume-accesspoints">Using
   * 				Amazon EFS Access Points</a> in the <i>Amazon Elastic Container Service Developer Guide</i>.</p>
   */
  iam?: EFSAuthorizationConfigIAM | string;
}

export namespace EFSAuthorizationConfig {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: EFSAuthorizationConfig): any => ({
    ...obj,
  });
}

export enum EFSTransitEncryption {
  DISABLED = "DISABLED",
  ENABLED = "ENABLED",
}

/**
 * <p>This parameter is specified when you are using an Amazon Elastic File System file system for task
 * 			storage. For more information, see <a href="https://docs.aws.amazon.com/AmazonECS/latest/developerguide/efs-volumes.html">Amazon EFS Volumes</a> in the
 * 				<i>Amazon Elastic Container Service Developer Guide</i>.</p>
 */
export interface EFSVolumeConfiguration {
  /**
   * <p>The Amazon EFS file system ID to use.</p>
   */
  fileSystemId: string | undefined;

  /**
   * <p>The directory within the Amazon EFS file system to mount as the root directory inside the
   * 			host. If this parameter is omitted, the root of the Amazon EFS volume will be used.
   * 			Specifying <code>/</code> will have the same effect as omitting this parameter.</p>
   * 		       <important>
   * 			         <p>If an EFS access point is specified in the <code>authorizationConfig</code>, the
   * 				root directory parameter must either be omitted or set to <code>/</code> which will
   * 				enforce the path set on the EFS access point.</p>
   * 		       </important>
   */
  rootDirectory?: string;

  /**
   * <p>Whether or not to enable encryption for Amazon EFS data in transit between the Amazon ECS host
   * 			and the Amazon EFS server. Transit encryption must be enabled if Amazon EFS IAM authorization is
   * 			used. If this parameter is omitted, the default value of <code>DISABLED</code> is used.
   * 			For more information, see <a href="https://docs.aws.amazon.com/efs/latest/ug/encryption-in-transit.html">Encrypting Data in Transit</a> in
   * 			the <i>Amazon Elastic File System User Guide</i>.</p>
   */
  transitEncryption?: EFSTransitEncryption | string;

  /**
   * <p>The port to use when sending encrypted data between the Amazon ECS host and the Amazon EFS
   * 			server. If you do not specify a transit encryption port, it will use the port selection
   * 			strategy that the Amazon EFS mount helper uses. For more information, see <a href="https://docs.aws.amazon.com/efs/latest/ug/efs-mount-helper.html">EFS Mount
   * 				Helper</a> in the <i>Amazon Elastic File System User Guide</i>.</p>
   */
  transitEncryptionPort?: number;

  /**
   * <p>The authorization configuration details for the Amazon EFS file system.</p>
   */
  authorizationConfig?: EFSAuthorizationConfig;
}

export namespace EFSVolumeConfiguration {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: EFSVolumeConfiguration): any => ({
    ...obj,
  });
}

/**
 * <p>The authorization configuration details for Amazon FSx for Windows File Server file system. See <a href="https://docs.aws.amazon.com/AmazonECS/latest/APIReference/API_FSxWindowsFileServerVolumeConfiguration.html">FSxWindowsFileServerVolumeConfiguration</a> in the <i>Amazon Elastic
 * 				Container Service API Reference</i>.</p>
 * 		       <p>For more information and the input format, see <a href="https://docs.aws.amazon.com/AmazonECS/latest/developerguide/wfsx-volumes.html">Amazon FSx for Windows File Server Volumes</a>
 * 			in the <i>Amazon Elastic Container Service Developer Guide</i>.</p>
 */
export interface FSxWindowsFileServerAuthorizationConfig {
  /**
   * <p>The authorization credential option to use. The authorization credential options can
   * 			be provided using either the Amazon Resource Name (ARN) of an Secrets Manager secret or SSM
   * 			Parameter Store parameter. The ARNs refer to the stored credentials.</p>
   */
  credentialsParameter: string | undefined;

  /**
   * <p>A fully qualified domain name hosted by an <a href="https://docs.aws.amazon.com/directoryservice/latest/admin-guide/directory_microsoft_ad.html">Directory Service</a> Managed Microsoft AD (Active Directory) or self-hosted AD on
   * 			Amazon EC2.</p>
   */
  domain: string | undefined;
}

export namespace FSxWindowsFileServerAuthorizationConfig {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: FSxWindowsFileServerAuthorizationConfig): any => ({
    ...obj,
  });
}

/**
 * <p>This parameter is specified when you are using <a href="https://docs.aws.amazon.com/fsx/latest/WindowsGuide/what-is.html">Amazon FSx for Windows File Server</a> file system for task
 * 			storage.</p>
 * 		       <p>For more information and the input format, see <a href="https://docs.aws.amazon.com/AmazonECS/latest/developerguide/wfsx-volumes.html">Amazon FSx for Windows File Server Volumes</a>
 * 			in the <i>Amazon Elastic Container Service Developer Guide</i>.</p>
 */
export interface FSxWindowsFileServerVolumeConfiguration {
  /**
   * <p>The Amazon FSx for Windows File Server file system ID to use.</p>
   */
  fileSystemId: string | undefined;

  /**
   * <p>The directory within the Amazon FSx for Windows File Server file system to mount as the root directory
   * 			inside the host.</p>
   */
  rootDirectory: string | undefined;

  /**
   * <p>The authorization configuration details for the Amazon FSx for Windows File Server file system.</p>
   */
  authorizationConfig: FSxWindowsFileServerAuthorizationConfig | undefined;
}

export namespace FSxWindowsFileServerVolumeConfiguration {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: FSxWindowsFileServerVolumeConfiguration): any => ({
    ...obj,
  });
}

/**
 * <p>Details on a container instance bind mount host volume.</p>
 */
export interface HostVolumeProperties {
  /**
   * <p>When the <code>host</code> parameter is used, specify a <code>sourcePath</code> to
   * 			declare the path on the host container instance that is presented to the container. If
   * 			this parameter is empty, then the Docker daemon has assigned a host path for you. If the
   * 				<code>host</code> parameter contains a <code>sourcePath</code> file location, then
   * 			the data volume persists at the specified location on the host container instance until
   * 			you delete it manually. If the <code>sourcePath</code> value does not exist on the host
   * 			container instance, the Docker daemon creates it. If the location does exist, the
   * 			contents of the source path folder are exported.</p>
   * 		       <p>If you are using the Fargate launch type, the <code>sourcePath</code>
   * 			parameter is not supported.</p>
   */
  sourcePath?: string;
}

export namespace HostVolumeProperties {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: HostVolumeProperties): any => ({
    ...obj,
  });
}

/**
 * <p>A data volume used in a task definition. For tasks that use the Amazon Elastic File
 * 			System (Amazon EFS), specify an <code>efsVolumeConfiguration</code>. For Windows tasks
 * 			that use Amazon FSx for Windows File Server file system, specify a
 * 				<code>fsxWindowsFileServerVolumeConfiguration</code>. For tasks that use a Docker
 * 			volume, specify a <code>DockerVolumeConfiguration</code>. For tasks that use a bind
 * 			mount host volume, specify a <code>host</code> and optional <code>sourcePath</code>. For
 * 			more information, see <a href="https://docs.aws.amazon.com/AmazonECS/latest/developerguide/using_data_volumes.html">Using Data Volumes in
 * 				Tasks</a>.</p>
 */
export interface Volume {
  /**
   * <p>The name of the volume. Up to 255 letters (uppercase and lowercase), numbers, underscores, and hyphens are allowed. This name is referenced in the
   * 				<code>sourceVolume</code> parameter of container definition
   * 			<code>mountPoints</code>.</p>
   */
  name?: string;

  /**
   * <p>This parameter is specified when you are using bind mount host volumes. The contents
   * 			of the <code>host</code> parameter determine whether your bind mount host volume
   * 			persists on the host container instance and where it is stored. If the <code>host</code>
   * 			parameter is empty, then the Docker daemon assigns a host path for your data volume.
   * 			However, the data is not guaranteed to persist after the containers associated with it
   * 			stop running.</p>
   * 		       <p>Windows containers can mount whole directories on the same drive as
   * 				<code>$env:ProgramData</code>. Windows containers cannot mount directories on a
   * 			different drive, and mount point cannot be across drives. For example, you can mount
   * 				<code>C:\my\path:C:\my\path</code> and <code>D:\:D:\</code>, but not
   * 				<code>D:\my\path:C:\my\path</code> or <code>D:\:C:\my\path</code>.</p>
   */
  host?: HostVolumeProperties;

  /**
   * <p>This parameter is specified when you are using Docker volumes.</p>
   * 		       <p>Windows containers only support the use of the <code>local</code> driver. To use bind
   * 			mounts, specify the <code>host</code> parameter instead.</p>
   * 		       <note>
   * 			         <p>Docker volumes are not supported by tasks run on Fargate.</p>
   * 		       </note>
   */
  dockerVolumeConfiguration?: DockerVolumeConfiguration;

  /**
   * <p>This parameter is specified when you are using an Amazon Elastic File System file system for task
   * 			storage.</p>
   */
  efsVolumeConfiguration?: EFSVolumeConfiguration;

  /**
   * <p>This parameter is specified when you are using Amazon FSx for Windows File Server file system for task
   * 			storage.</p>
   */
  fsxWindowsFileServerVolumeConfiguration?: FSxWindowsFileServerVolumeConfiguration;
}

export namespace Volume {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: Volume): any => ({
    ...obj,
  });
}

/**
 * <p>The details of a task definition which describes the container and volume definitions
 * 			of an Amazon Elastic Container Service task. You can specify which Docker images to use, the required
 * 			resources, and other configurations related to launching the task definition through an
 * 			Amazon ECS service or task.</p>
 */
export interface TaskDefinition {
  /**
   * <p>The full Amazon Resource Name (ARN) of the task definition.</p>
   */
  taskDefinitionArn?: string;

  /**
   * <p>A list of container definitions in JSON format that describe the different containers
   * 			that make up your task. For more information about container definition parameters and
   * 			defaults, see <a href="https://docs.aws.amazon.com/AmazonECS/latest/developerguide/task_defintions.html">Amazon ECS Task
   * 				Definitions</a> in the <i>Amazon Elastic Container Service Developer Guide</i>.</p>
   */
  containerDefinitions?: ContainerDefinition[];

  /**
   * <p>The name of a family that this task definition is registered to. Up to 255 letters
   * 			(uppercase and lowercase), numbers, hyphens, and underscores are allowed.</p>
   * 		       <p>A family groups multiple versions of a task definition. Amazon ECS gives the first task
   * 			definition that you registered to a family a revision number of 1. Amazon ECS gives
   * 			sequential revision numbers to each task definition that you add.</p>
   */
  family?: string;

  /**
   * <p>The short name or full Amazon Resource Name (ARN) of the Identity and Access Management role that grants containers in the
   * 			task permission to call Amazon Web Services APIs on your behalf. For more information, see <a href="https://docs.aws.amazon.com/AmazonECS/latest/developerguide/task-iam-roles.html">Amazon ECS
   * 				Task Role</a> in the <i>Amazon Elastic Container Service Developer Guide</i>.</p>
   * 		       <p>IAM roles for tasks on Windows require that the <code>-EnableTaskIAMRole</code> option
   * 			is set when you launch the Amazon ECS-optimized Windows AMI. Your containers must also run some
   * 			configuration code in order to take advantage of the feature. For more information, see
   * 				<a href="https://docs.aws.amazon.com/AmazonECS/latest/developerguide/windows_task_IAM_roles.html">Windows IAM roles
   * 				for tasks</a> in the <i>Amazon Elastic Container Service Developer Guide</i>.</p>
   */
  taskRoleArn?: string;

  /**
   * <p>The Amazon Resource Name (ARN) of the task execution role that grants the Amazon ECS container agent
   *             permission to make Amazon Web Services API calls on your behalf. The task execution IAM role is required
   *             depending on the requirements of your task. For more information, see <a href="https://docs.aws.amazon.com/AmazonECS/latest/developerguide/task_execution_IAM_role.html">Amazon ECS task
   *                 execution IAM role</a> in the <i>Amazon Elastic Container Service Developer Guide</i>.</p>
   */
  executionRoleArn?: string;

  /**
   * <p>The Docker networking mode to use for the containers in the task. The valid values are
   *                 <code>none</code>, <code>bridge</code>, <code>awsvpc</code>, and <code>host</code>.
   *             If no network mode is specified, the default is <code>bridge</code>.</p>
   *             <p>For Amazon ECS tasks on Fargate, the <code>awsvpc</code> network mode is required.
   *             For Amazon ECS tasks on Amazon EC2 Linux instances, any network mode can be used.  For Amazon ECS tasks on Amazon EC2 Windows instances, <code><default></code> or <code>awsvpc</code> can be used. If the network
   *             mode is set to <code>none</code>, you cannot specify port mappings in your container
   *             definitions, and the tasks containers do not have external connectivity. The
   *                 <code>host</code> and <code>awsvpc</code> network modes offer the highest networking
   *             performance for containers because they use the EC2 network stack instead of the
   *             virtualized network stack provided by the <code>bridge</code> mode.</p>
   *         <p>With the <code>host</code> and <code>awsvpc</code> network modes, exposed container
   *             ports are mapped directly to the corresponding host port (for the <code>host</code>
   *             network mode) or the attached elastic network interface port (for the
   *                 <code>awsvpc</code> network mode), so you cannot take advantage of dynamic host port
   *             mappings. </p>
   *             <important>
   *                         <p>When using the <code>host</code> network mode, you should not run
   *                             containers using the root user (UID 0). It is considered best practice
   *                             to use a non-root user.</p>
   *                     </important>
   *         <p>If the network mode is <code>awsvpc</code>, the task is allocated an elastic network
   *             interface, and you must specify a <a>NetworkConfiguration</a> value when you create
   *             a service or run a task with the task definition. For more information, see <a href="https://docs.aws.amazon.com/AmazonECS/latest/developerguide/task-networking.html">Task Networking</a> in the
   *                 <i>Amazon Elastic Container Service Developer Guide</i>.</p>
   *         <p>If the network mode is <code>host</code>, you cannot run multiple instantiations of the
   *             same task on a single container instance when port mappings are used.</p>
   *         <p>For more information, see <a href="https://docs.docker.com/engine/reference/run/#network-settings">Network
   *                 settings</a> in the <i>Docker run reference</i>.</p>
   */
  networkMode?: NetworkMode | string;

  /**
   * <p>The revision of the task in a particular family. The revision is a version number of a
   * 			task definition in a family. When you register a task definition for the first time, the
   * 			revision is <code>1</code>. Each time that you register a new revision of a task
   * 			definition in the same family, the revision value always increases by one, even if you
   * 			have deregistered previous revisions in this family.</p>
   */
  revision?: number;

  /**
   * <p>The list of data volume definitions for the task. For more information, see <a href="https://docs.aws.amazon.com/AmazonECS/latest/developerguide/using_data_volumes.html">Using data volumes in tasks</a> in the
   * 			<i>Amazon Elastic Container Service Developer Guide</i>.</p>
   * 		       <note>
   * 			         <p>The <code>host</code> and <code>sourcePath</code> parameters are not supported for
   * 				tasks run on Fargate.</p>
   * 		       </note>
   */
  volumes?: Volume[];

  /**
   * <p>The status of the task definition.</p>
   */
  status?: TaskDefinitionStatus | string;

  /**
   * <p>The container instance attributes required by your task. When an Amazon EC2 instance is
   * 			registered to your cluster, the Amazon ECS container agent assigns some standard attributes
   * 			to the instance. You can apply custom attributes, specified as key-value pairs using the
   * 			Amazon ECS console or the <a>PutAttributes</a> API. These attributes are used when
   * 			considering task placement for tasks hosted on Amazon EC2 instances. For more information,
   * 			see <a href="https://docs.aws.amazon.com/AmazonECS/latest/developerguide/task-placement-constraints.html#attributes">Attributes</a> in the <i>Amazon Elastic Container Service Developer Guide</i>.</p>
   * 		       <note>
   * 			         <p>This parameter is not supported for tasks run on Fargate.</p>
   * 		       </note>
   */
  requiresAttributes?: Attribute[];

  /**
   * <p>An array of placement constraint objects to use for tasks.</p>
   * 		       <note>
   * 			         <p>This parameter is not supported for tasks run on Fargate.</p>
   * 		       </note>
   */
  placementConstraints?: TaskDefinitionPlacementConstraint[];

  /**
   * <p>The task launch types the task definition validated against during task definition
   * 			registration. For more information, see <a href="https://docs.aws.amazon.com/AmazonECS/latest/developerguide/launch_types.html">Amazon ECS launch types</a>
   * 			in the <i>Amazon Elastic Container Service Developer Guide</i>.</p>
   */
  compatibilities?: (Compatibility | string)[];

  /**
   * <p>The task launch types the task definition was validated against. To determine which
   * 			task launch types the task definition is validated for, see the <a>TaskDefinition$compatibilities</a> parameter.</p>
   */
  requiresCompatibilities?: (Compatibility | string)[];

  /**
   * <p>The number of <code>cpu</code> units used by the task. If you are using the EC2 launch
   * 			type, this field is optional and any value can be used. If you are using the Fargate
   * 			launch type, this field is required and you must use one of the following values, which
   * 			determines your range of valid values for the <code>memory</code> parameter:</p>
   * 		       <ul>
   *             <li>
   *                 <p>256 (.25 vCPU) - Available <code>memory</code> values: 512 (0.5 GB), 1024 (1 GB), 2048 (2 GB)</p>
   *             </li>
   *             <li>
   *                 <p>512 (.5 vCPU) - Available <code>memory</code> values: 1024 (1 GB), 2048 (2 GB), 3072 (3 GB), 4096 (4 GB)</p>
   *             </li>
   *             <li>
   *                 <p>1024 (1 vCPU) - Available <code>memory</code> values: 2048 (2 GB), 3072 (3 GB), 4096 (4 GB), 5120 (5 GB), 6144 (6 GB), 7168 (7 GB), 8192 (8 GB)</p>
   *             </li>
   *             <li>
   *                 <p>2048 (2 vCPU) - Available <code>memory</code> values: Between 4096 (4 GB) and 16384 (16 GB) in increments of 1024 (1 GB)</p>
   *             </li>
   *             <li>
   *                 <p>4096 (4 vCPU) - Available <code>memory</code> values: Between 8192 (8 GB) and 30720 (30 GB) in increments of 1024 (1 GB)</p>
   *             </li>
   *          </ul>
   */
  cpu?: string;

  /**
   * <p>The amount (in MiB) of memory used by the task.</p>
   * 		       <p>If your tasks will be run on Amazon EC2 instances, you must specify either a task-level
   * 			memory value or a container-level memory value. This field is optional and any value can
   * 			be used. If a task-level memory value is specified then the container-level memory value
   * 			is optional. For more information regarding container-level memory and memory
   * 			reservation, see <a href="https://docs.aws.amazon.com/AmazonECS/latest/APIReference/API_ContainerDefinition.html">ContainerDefinition</a>.</p>
   * 		       <p>If your tasks will be run on Fargate, this field is required and you must use one of
   * 			the following values, which determines your range of valid values for the
   * 				<code>cpu</code> parameter:</p>
   *          <ul>
   *             <li>
   *                 <p>512 (0.5 GB), 1024 (1 GB), 2048 (2 GB) - Available <code>cpu</code> values: 256 (.25 vCPU)</p>
   *             </li>
   *             <li>
   *                 <p>1024 (1 GB), 2048 (2 GB), 3072 (3 GB), 4096 (4 GB) - Available <code>cpu</code> values: 512 (.5 vCPU)</p>
   *             </li>
   *             <li>
   *                 <p>2048 (2 GB), 3072 (3 GB), 4096 (4 GB), 5120 (5 GB), 6144 (6 GB), 7168 (7 GB), 8192 (8 GB) - Available <code>cpu</code> values: 1024 (1 vCPU)</p>
   *             </li>
   *             <li>
   *                 <p>Between 4096 (4 GB) and 16384 (16 GB) in increments of 1024 (1 GB) - Available <code>cpu</code> values: 2048 (2 vCPU)</p>
   *             </li>
   *             <li>
   *                 <p>Between 8192 (8 GB) and 30720 (30 GB) in increments of 1024 (1 GB) - Available <code>cpu</code> values: 4096 (4 vCPU)</p>
   *             </li>
   *          </ul>
   */
  memory?: string;

  /**
   * <p>The Elastic Inference accelerator associated with the task.</p>
   */
  inferenceAccelerators?: InferenceAccelerator[];

  /**
   * <p>The process namespace to use for the containers in the task. The valid
   *                             values are <code>host</code> or <code>task</code>. If <code>host</code>
   *                             is specified, then all containers within the tasks that specified the
   *                                 <code>host</code> PID mode on the same container instance share the
   *                             same process namespace with the host Amazon EC2 instance. If <code>task</code> is
   *                             specified, all containers within the specified task share the same
   *                             process namespace. If no value is specified, the default is a private
   *                             namespace. For more information, see <a href="https://docs.docker.com/engine/reference/run/#pid-settings---pid">PID settings</a> in the <i>Docker run
   *                                 reference</i>.</p>
   *                         <p>If the <code>host</code> PID mode is used, be aware that there is a
   *                             heightened risk of undesired process namespace expose. For more
   *                             information, see <a href="https://docs.docker.com/engine/security/security/">Docker
   *                                 security</a>.</p>
   *          <note>
   *                                 <p>This parameter is not supported for Windows containers or tasks run on Fargate.</p>
   *                              </note>
   */
  pidMode?: PidMode | string;

  /**
   * <p>The IPC resource namespace to use for the containers in the task. The valid values are
   *                 <code>host</code>, <code>task</code>, or <code>none</code>. If <code>host</code> is
   *             specified, then all containers within the tasks that specified the <code>host</code> IPC
   *             mode on the same container instance share the same IPC resources with the host Amazon EC2
   *             instance. If <code>task</code> is specified, all containers within the specified task
   *             share the same IPC resources. If <code>none</code> is specified, then IPC resources
   *             within the containers of a task are private and not shared with other containers in a
   *             task or on the container instance. If no value is specified, then the IPC resource
   *             namespace sharing depends on the Docker daemon setting on the container instance. For
   *             more information, see <a href="https://docs.docker.com/engine/reference/run/#ipc-settings---ipc">IPC
   *                 settings</a> in the <i>Docker run reference</i>.</p>
   *         <p>If the <code>host</code> IPC mode is used, be aware that there is a heightened risk of
   *             undesired IPC namespace expose. For more information, see <a href="https://docs.docker.com/engine/security/security/">Docker
   *             security</a>.</p>
   *         <p>If you are setting namespaced kernel parameters using <code>systemControls</code> for
   *             the containers in the task, the following will apply to your IPC resource namespace. For
   *             more information, see <a href="https://docs.aws.amazon.com/AmazonECS/latest/developerguide/task_definition_parameters.html">System
   *                 Controls</a> in the <i>Amazon Elastic Container Service Developer Guide</i>.</p>
   *         <ul>
   *             <li>
   *                 <p>For tasks that use the <code>host</code> IPC mode, IPC namespace related
   *                         <code>systemControls</code> are not supported.</p>
   *             </li>
   *             <li>
   *                 <p>For tasks that use the <code>task</code> IPC mode, IPC namespace related
   *                         <code>systemControls</code> will apply to all containers within a
   *                     task.</p>
   *             </li>
   *          </ul>
   *          <note>
   *                                 <p>This parameter is not supported for Windows containers or tasks run on Fargate.</p>
   *                              </note>
   */
  ipcMode?: IpcMode | string;

  /**
   * <p>The configuration details for the App Mesh proxy.</p>
   * 		       <p>Your Amazon ECS container instances require at least version 1.26.0 of the container agent
   * 			and at least version 1.26.0-1 of the <code>ecs-init</code> package to enable a proxy
   * 			configuration. If your container instances are launched from the Amazon ECS-optimized AMI
   * 			version <code>20190301</code> or later, then they contain the required versions of the
   * 			container agent and <code>ecs-init</code>. For more information, see <a href="https://docs.aws.amazon.com/AmazonECS/latest/developerguide/ecs-optimized_AMI.html">Amazon ECS-optimized Linux AMI</a> in the <i>Amazon Elastic Container Service Developer Guide</i>.</p>
   */
  proxyConfiguration?: ProxyConfiguration;

  /**
   * <p>The Unix timestamp for when the task definition was registered.</p>
   */
  registeredAt?: Date;

  /**
   * <p>The Unix timestamp for when the task definition was deregistered.</p>
   */
  deregisteredAt?: Date;

  /**
   * <p>The principal that registered the task definition.</p>
   */
  registeredBy?: string;

  /**
   * <p>The ephemeral storage settings to use for tasks run with the task definition.</p>
   */
  ephemeralStorage?: EphemeralStorage;
}

export namespace TaskDefinition {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: TaskDefinition): any => ({
    ...obj,
  });
}

export interface DeregisterTaskDefinitionResponse {
  /**
   * <p>The full description of the deregistered task.</p>
   */
  taskDefinition?: TaskDefinition;
}

export namespace DeregisterTaskDefinitionResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DeregisterTaskDefinitionResponse): any => ({
    ...obj,
  });
}

export enum CapacityProviderField {
  TAGS = "TAGS",
}

export interface DescribeCapacityProvidersRequest {
  /**
   * <p>The short name or full Amazon Resource Name (ARN) of one or more capacity providers. Up to
   * 				<code>100</code> capacity providers can be described in an action.</p>
   */
  capacityProviders?: string[];

  /**
   * <p>Specifies whether or not you want to see the resource tags for the capacity provider.
   * 			If <code>TAGS</code> is specified, the tags are included in the response. If this field
   * 			is omitted, tags are not included in the response.</p>
   */
  include?: (CapacityProviderField | string)[];

  /**
   * <p>The maximum number of account setting results returned by
   * 				<code>DescribeCapacityProviders</code> in paginated output. When this parameter is
   * 			used, <code>DescribeCapacityProviders</code> only returns <code>maxResults</code>
   * 			results in a single page along with a <code>nextToken</code> response element. The
   * 			remaining results of the initial request can be seen by sending another
   * 				<code>DescribeCapacityProviders</code> request with the returned
   * 				<code>nextToken</code> value. This value can be between
   * 			1 and 10. If this
   * 			parameter is not used, then <code>DescribeCapacityProviders</code> returns up to
   * 			10 results and a <code>nextToken</code> value
   * 			if applicable.</p>
   */
  maxResults?: number;

  /**
   * <p>The <code>nextToken</code> value returned from a previous paginated
   * 				<code>DescribeCapacityProviders</code> request where <code>maxResults</code> was
   * 			used and the results exceeded the value of that parameter. Pagination continues from the
   * 			end of the previous results that returned the <code>nextToken</code> value.</p>
   * 		       <note>
   *             <p>This token should be treated as an opaque identifier that is only used to
   *                 retrieve the next items in a list and not for other programmatic purposes.</p>
   *         </note>
   */
  nextToken?: string;
}

export namespace DescribeCapacityProvidersRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DescribeCapacityProvidersRequest): any => ({
    ...obj,
  });
}

/**
 * <p>A failed resource. For a list of common causes, see <a href="https://docs.aws.amazon.com/AmazonECS/latest/developerguide/api_failures_messages.html">API failure
 * 				reasons</a> in the <i>Amazon Elastic Container Service Developer Guide</i>.</p>
 */
export interface Failure {
  /**
   * <p>The Amazon Resource Name (ARN) of the failed resource.</p>
   */
  arn?: string;

  /**
   * <p>The reason for the failure.</p>
   */
  reason?: string;

  /**
   * <p>The details of the failure.</p>
   */
  detail?: string;
}

export namespace Failure {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: Failure): any => ({
    ...obj,
  });
}

export interface DescribeCapacityProvidersResponse {
  /**
   * <p>The list of capacity providers.</p>
   */
  capacityProviders?: CapacityProvider[];

  /**
   * <p>Any failures associated with the call.</p>
   */
  failures?: Failure[];

  /**
   * <p>The <code>nextToken</code> value to include in a future
   * 				<code>DescribeCapacityProviders</code> request. When the results of a
   * 				<code>DescribeCapacityProviders</code> request exceed <code>maxResults</code>, this
   * 			value can be used to retrieve the next page of results. This value is <code>null</code>
   * 			when there are no more results to return.</p>
   */
  nextToken?: string;
}

export namespace DescribeCapacityProvidersResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DescribeCapacityProvidersResponse): any => ({
    ...obj,
  });
}

export enum ClusterField {
  ATTACHMENTS = "ATTACHMENTS",
  CONFIGURATIONS = "CONFIGURATIONS",
  SETTINGS = "SETTINGS",
  STATISTICS = "STATISTICS",
  TAGS = "TAGS",
}

export interface DescribeClustersRequest {
  /**
   * <p>A list of up to 100 cluster names or full cluster Amazon Resource Name (ARN) entries.
   * 			If you do not specify a cluster, the default cluster is assumed.</p>
   */
  clusters?: string[];

  /**
   * <p>Whether to include additional information about the clusters in the response. If this
   * 			field is omitted, this information isn't included.</p>
   * 		       <p>If <code>ATTACHMENTS</code> is specified, the attachments for the container instances
   * 			or tasks within the cluster are included.</p>
   * 		       <p>If <code>SETTINGS</code> is specified, the settings for the cluster are
   * 			included.</p>
   * 		       <p>If <code>CONFIGURATIONS</code> is specified, the configuration for the cluster is
   * 			included.</p>
   * 		       <p>If <code>STATISTICS</code> is specified, the task and service count is included,
   * 			separated by launch type.</p>
   * 		       <p>If <code>TAGS</code> is specified, the metadata tags associated with the cluster are
   * 			included.</p>
   */
  include?: (ClusterField | string)[];
}

export namespace DescribeClustersRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DescribeClustersRequest): any => ({
    ...obj,
  });
}

export interface DescribeClustersResponse {
  /**
   * <p>The list of clusters.</p>
   */
  clusters?: Cluster[];

  /**
   * <p>Any failures associated with the call.</p>
   */
  failures?: Failure[];
}

export namespace DescribeClustersResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DescribeClustersResponse): any => ({
    ...obj,
  });
}

export enum ContainerInstanceField {
  TAGS = "TAGS",
}

export interface DescribeContainerInstancesRequest {
  /**
   * <p>The short name or full Amazon Resource Name (ARN) of the cluster that hosts the container instances to
   * 			describe. If you do not specify a cluster, the default cluster is assumed. This parameter is required if the container instance
   * 			or container instances you are describing were launched in any cluster other than the
   * 			default cluster.</p>
   */
  cluster?: string;

  /**
   * <p>A list of up to 100 container instance IDs or full Amazon Resource Name (ARN) entries.</p>
   */
  containerInstances: string[] | undefined;

  /**
   * <p>Specifies whether you want to see the resource tags for the container instance. If
   * 				<code>TAGS</code> is specified, the tags are included in the response. If this field
   * 			is omitted, tags are not included in the response.</p>
   */
  include?: (ContainerInstanceField | string)[];
}

export namespace DescribeContainerInstancesRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DescribeContainerInstancesRequest): any => ({
    ...obj,
  });
}

export interface DescribeContainerInstancesResponse {
  /**
   * <p>The list of container instances.</p>
   */
  containerInstances?: ContainerInstance[];

  /**
   * <p>Any failures associated with the call.</p>
   */
  failures?: Failure[];
}

export namespace DescribeContainerInstancesResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DescribeContainerInstancesResponse): any => ({
    ...obj,
  });
}

export enum ServiceField {
  TAGS = "TAGS",
}

export interface DescribeServicesRequest {
  /**
   * <p>The short name or full Amazon Resource Name (ARN)the cluster that hosts the service to describe.
   * 			If you do not specify a cluster, the default cluster is assumed. This parameter is required if the service or services you are
   * 			describing were launched in any cluster other than the default cluster.</p>
   */
  cluster?: string;

  /**
   * <p>A list of services to describe. You may specify up to 10 services to describe in a
   * 			single operation.</p>
   */
  services: string[] | undefined;

  /**
   * <p>Specifies whether you want to see the resource tags for the service. If
   * 				<code>TAGS</code> is specified, the tags are included in the response. If this field
   * 			is omitted, tags are not included in the response.</p>
   */
  include?: (ServiceField | string)[];
}

export namespace DescribeServicesRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DescribeServicesRequest): any => ({
    ...obj,
  });
}

export interface DescribeServicesResponse {
  /**
   * <p>The list of services described.</p>
   */
  services?: Service[];

  /**
   * <p>Any failures associated with the call.</p>
   */
  failures?: Failure[];
}

export namespace DescribeServicesResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DescribeServicesResponse): any => ({
    ...obj,
  });
}

export enum TaskDefinitionField {
  TAGS = "TAGS",
}

export interface DescribeTaskDefinitionRequest {
  /**
   * <p>The <code>family</code> for the latest <code>ACTIVE</code> revision,
   * 				<code>family</code> and <code>revision</code> (<code>family:revision</code>) for a
   * 			specific revision in the family, or full Amazon Resource Name (ARN) of the task definition to
   * 			describe.</p>
   */
  taskDefinition: string | undefined;

  /**
   * <p>Specifies whether to see the resource tags for the task definition. If
   * 				<code>TAGS</code> is specified, the tags are included in the response. If this field
   * 			is omitted, tags are not included in the response.</p>
   */
  include?: (TaskDefinitionField | string)[];
}

export namespace DescribeTaskDefinitionRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DescribeTaskDefinitionRequest): any => ({
    ...obj,
  });
}

export interface DescribeTaskDefinitionResponse {
  /**
   * <p>The full task definition description.</p>
   */
  taskDefinition?: TaskDefinition;

  /**
   * <p>The metadata that is applied to the task definition to help you categorize and
   * 			organize them. Each tag consists of a key and an optional value, both of which you
   * 			define.</p>
   *          <p>The following basic restrictions apply to tags:</p>
   *         <ul>
   *             <li>
   *                 <p>Maximum number of tags per resource - 50</p>
   *             </li>
   *             <li>
   *                 <p>For each resource, each tag key must be unique, and each tag key can have only
   *                     one value.</p>
   *             </li>
   *             <li>
   *                 <p>Maximum key length - 128 Unicode characters in UTF-8</p>
   *             </li>
   *             <li>
   *                 <p>Maximum value length - 256 Unicode characters in UTF-8</p>
   *             </li>
   *             <li>
   *                 <p>If your tagging schema is used across multiple services and resources,
   *                     remember that other services may have restrictions on allowed characters.
   *                     Generally allowed characters are: letters, numbers, and spaces representable in
   *                     UTF-8, and the following characters: + - = . _ : / @.</p>
   *             </li>
   *             <li>
   *                 <p>Tag keys and values are case-sensitive.</p>
   *             </li>
   *             <li>
   *                 <p>Do not use <code>aws:</code>, <code>AWS:</code>, or any upper or lowercase
   *                     combination of such as a prefix for either keys or values as it is reserved for
   *                     Amazon Web Services use. You cannot edit or delete tag keys or values with this prefix. Tags with
   *                     this prefix do not count against your tags per resource limit.</p>
   *             </li>
   *          </ul>
   */
  tags?: Tag[];
}

export namespace DescribeTaskDefinitionResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DescribeTaskDefinitionResponse): any => ({
    ...obj,
  });
}

export enum TaskField {
  TAGS = "TAGS",
}

export interface DescribeTasksRequest {
  /**
   * <p>The short name or full Amazon Resource Name (ARN) of the cluster that hosts the task or tasks to
   * 			describe. If you do not specify a cluster, the default cluster is assumed. This parameter is required if the task or tasks you
   * 			are describing were launched in any cluster other than the default cluster.</p>
   */
  cluster?: string;

  /**
   * <p>A list of up to 100 task IDs or full ARN entries.</p>
   */
  tasks: string[] | undefined;

  /**
   * <p>Specifies whether you want to see the resource tags for the task. If <code>TAGS</code>
   * 			is specified, the tags are included in the response. If this field is omitted, tags are
   * 			not included in the response.</p>
   */
  include?: (TaskField | string)[];
}

export namespace DescribeTasksRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DescribeTasksRequest): any => ({
    ...obj,
  });
}

export enum Connectivity {
  CONNECTED = "CONNECTED",
  DISCONNECTED = "DISCONNECTED",
}

export enum HealthStatus {
  HEALTHY = "HEALTHY",
  UNHEALTHY = "UNHEALTHY",
  UNKNOWN = "UNKNOWN",
}

export enum ManagedAgentName {
  ExecuteCommandAgent = "ExecuteCommandAgent",
}

/**
 * <p>Details about the managed agent status for the container.</p>
 */
export interface ManagedAgent {
  /**
   * <p>The Unix timestamp for when the managed agent was last started.</p>
   */
  lastStartedAt?: Date;

  /**
   * <p>The name of the managed agent. When the execute command feature is enabled, the
   * 			managed agent name is <code>ExecuteCommandAgent</code>.</p>
   */
  name?: ManagedAgentName | string;

  /**
   * <p>The reason for why the managed agent is in the state it is in.</p>
   */
  reason?: string;

  /**
   * <p>The last known status of the managed agent.</p>
   */
  lastStatus?: string;
}

export namespace ManagedAgent {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ManagedAgent): any => ({
    ...obj,
  });
}

/**
 * <p>Details on the network bindings between a container and its host container instance.
 * 			After a task reaches the <code>RUNNING</code> status, manual and automatic host and
 * 			container port assignments are visible in the <code>networkBindings</code> section of
 * 				<a>DescribeTasks</a> API responses.</p>
 */
export interface NetworkBinding {
  /**
   * <p>The IP address that the container is bound to on the container instance.</p>
   */
  bindIP?: string;

  /**
   * <p>The port number on the container that is used with the network binding.</p>
   */
  containerPort?: number;

  /**
   * <p>The port number on the host that is used with the network binding.</p>
   */
  hostPort?: number;

  /**
   * <p>The protocol used for the network binding.</p>
   */
  protocol?: TransportProtocol | string;
}

export namespace NetworkBinding {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: NetworkBinding): any => ({
    ...obj,
  });
}

/**
 * <p>An object representing the elastic network interface for tasks that use the
 * 				<code>awsvpc</code> network mode.</p>
 */
export interface NetworkInterface {
  /**
   * <p>The attachment ID for the network interface.</p>
   */
  attachmentId?: string;

  /**
   * <p>The private IPv4 address for the network interface.</p>
   */
  privateIpv4Address?: string;

  /**
   * <p>The private IPv6 address for the network interface.</p>
   */
  ipv6Address?: string;
}

export namespace NetworkInterface {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: NetworkInterface): any => ({
    ...obj,
  });
}

/**
 * <p>A Docker container that is part of a task.</p>
 */
export interface Container {
  /**
   * <p>The Amazon Resource Name (ARN) of the container.</p>
   */
  containerArn?: string;

  /**
   * <p>The ARN of the task.</p>
   */
  taskArn?: string;

  /**
   * <p>The name of the container.</p>
   */
  name?: string;

  /**
   * <p>The image used for the container.</p>
   */
  image?: string;

  /**
   * <p>The container image manifest digest.</p>
   * 		       <note>
   * 			         <p>The <code>imageDigest</code> is only returned if the container is using an image
   * 				hosted in Amazon ECR, otherwise it is omitted.</p>
   * 		       </note>
   */
  imageDigest?: string;

  /**
   * <p>The ID of the Docker container.</p>
   */
  runtimeId?: string;

  /**
   * <p>The last known status of the container.</p>
   */
  lastStatus?: string;

  /**
   * <p>The exit code returned from the container.</p>
   */
  exitCode?: number;

  /**
   * <p>A short (255 max characters) human-readable string to provide additional details about
   * 			a running or stopped container.</p>
   */
  reason?: string;

  /**
   * <p>The network bindings associated with the container.</p>
   */
  networkBindings?: NetworkBinding[];

  /**
   * <p>The network interfaces associated with the container.</p>
   */
  networkInterfaces?: NetworkInterface[];

  /**
   * <p>The health status of the container. If health checks are not configured for this
   * 			container in its task definition, then it reports the health status as
   * 				<code>UNKNOWN</code>.</p>
   */
  healthStatus?: HealthStatus | string;

  /**
   * <p>The details of any Amazon ECS managed agents associated with the container.</p>
   */
  managedAgents?: ManagedAgent[];

  /**
   * <p>The number of CPU units set for the container. The value will be <code>0</code> if no
   * 			value was specified in the container definition when the task definition was
   * 			registered.</p>
   */
  cpu?: string;

  /**
   * <p>The hard limit (in MiB) of memory set for the container.</p>
   */
  memory?: string;

  /**
   * <p>The soft limit (in MiB) of memory set for the container.</p>
   */
  memoryReservation?: string;

  /**
   * <p>The IDs of each GPU assigned to the container.</p>
   */
  gpuIds?: string[];
}

export namespace Container {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: Container): any => ({
    ...obj,
  });
}

/**
 * <p>The overrides that should be sent to a container. An empty container override can be
 * 			passed in. An example of an empty container override would be
 * 				<code>{"containerOverrides": [ ] }</code>. If a non-empty container override is
 * 			specified, the <code>name</code> parameter must be included.</p>
 */
export interface ContainerOverride {
  /**
   * <p>The name of the container that receives the override. This parameter is required if
   * 			any override is specified.</p>
   */
  name?: string;

  /**
   * <p>The command to send to the container that overrides the default command from the
   * 			Docker image or the task definition. You must also specify a container name.</p>
   */
  command?: string[];

  /**
   * <p>The environment variables to send to the container. You can add new environment
   * 			variables, which are added to the container at launch, or you can override the existing
   * 			environment variables from the Docker image or the task definition. You must also
   * 			specify a container name.</p>
   */
  environment?: KeyValuePair[];

  /**
   * <p>A list of files containing the environment variables to pass to a container, instead
   * 			of the value from the container definition.</p>
   */
  environmentFiles?: EnvironmentFile[];

  /**
   * <p>The number of <code>cpu</code> units reserved for the container, instead of the
   * 			default value from the task definition. You must also specify a container name.</p>
   */
  cpu?: number;

  /**
   * <p>The hard limit (in MiB) of memory to present to the container, instead of the default
   * 			value from the task definition. If your container attempts to exceed the memory
   * 			specified here, the container is killed. You must also specify a container name.</p>
   */
  memory?: number;

  /**
   * <p>The soft limit (in MiB) of memory to reserve for the container, instead of the default
   * 			value from the task definition. You must also specify a container name.</p>
   */
  memoryReservation?: number;

  /**
   * <p>The type and amount of a resource to assign to a container, instead of the default
   * 			value from the task definition. The only supported resource is a GPU.</p>
   */
  resourceRequirements?: ResourceRequirement[];
}

export namespace ContainerOverride {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ContainerOverride): any => ({
    ...obj,
  });
}

/**
 * <p>Details on an Elastic Inference accelerator task override. This parameter is used to
 * 			override the Elastic Inference accelerator specified in the task definition. For more
 * 			information, see <a href="https://docs.aws.amazon.com/AmazonECS/latest/developerguide/ecs-eia.html">Working with Amazon Elastic Inference on Amazon ECS</a> in the
 * 				<i>Amazon Elastic Container Service Developer Guide</i>.</p>
 */
export interface InferenceAcceleratorOverride {
  /**
   * <p>The Elastic Inference accelerator device name to override for the task. This parameter
   * 			must match a <code>deviceName</code> specified in the task definition.</p>
   */
  deviceName?: string;

  /**
   * <p>The Elastic Inference accelerator type to use.</p>
   */
  deviceType?: string;
}

export namespace InferenceAcceleratorOverride {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: InferenceAcceleratorOverride): any => ({
    ...obj,
  });
}

/**
 * <p>The overrides associated with a task.</p>
 */
export interface TaskOverride {
  /**
   * <p>One or more container overrides sent to a task.</p>
   */
  containerOverrides?: ContainerOverride[];

  /**
   * <p>The cpu override for the task.</p>
   */
  cpu?: string;

  /**
   * <p>The Elastic Inference accelerator override for the task.</p>
   */
  inferenceAcceleratorOverrides?: InferenceAcceleratorOverride[];

  /**
   * <p>The Amazon Resource Name (ARN) of the task execution IAM role override for the task.</p>
   */
  executionRoleArn?: string;

  /**
   * <p>The memory override for the task.</p>
   */
  memory?: string;

  /**
   * <p>The Amazon Resource Name (ARN) of the IAM role that containers in this task can assume. All containers
   * 			in this task are granted the permissions that are specified in this role.</p>
   */
  taskRoleArn?: string;

  /**
   * <p>The ephemeral storage setting override for the task.</p>
   * 		       <note>
   * 			         <p>This parameter is only supported for tasks hosted on Fargate using platform
   * 				version <code>1.4.0</code> or later.</p>
   * 		       </note>
   */
  ephemeralStorage?: EphemeralStorage;
}

export namespace TaskOverride {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: TaskOverride): any => ({
    ...obj,
  });
}

export enum TaskStopCode {
  ESSENTIAL_CONTAINER_EXITED = "EssentialContainerExited",
  TASK_FAILED_TO_START = "TaskFailedToStart",
  USER_INITIATED = "UserInitiated",
}

/**
 * <p>Details on a task in a cluster.</p>
 */
export interface Task {
  /**
   * <p>The Elastic Network Adapter associated with the task if the task uses the
   * 				<code>awsvpc</code> network mode.</p>
   */
  attachments?: Attachment[];

  /**
   * <p>The attributes of the task</p>
   */
  attributes?: Attribute[];

  /**
   * <p>The availability zone of the task.</p>
   */
  availabilityZone?: string;

  /**
   * <p>The capacity provider associated with the task.</p>
   */
  capacityProviderName?: string;

  /**
   * <p>The ARN of the cluster that hosts the task.</p>
   */
  clusterArn?: string;

  /**
   * <p>The connectivity status of a task.</p>
   */
  connectivity?: Connectivity | string;

  /**
   * <p>The Unix timestamp for when the task last went into <code>CONNECTED</code>
   * 			status.</p>
   */
  connectivityAt?: Date;

  /**
   * <p>The ARN of the container instances that host the task.</p>
   */
  containerInstanceArn?: string;

  /**
   * <p>The containers associated with the task.</p>
   */
  containers?: Container[];

  /**
   * <p>The number of CPU units used by the task as expressed in a task definition. It can be
   * 			expressed as an integer using CPU units, for example <code>1024</code>. It can also be
   * 			expressed as a string using vCPUs, for example <code>1 vCPU</code> or <code>1
   * 				vcpu</code>. String values are converted to an integer indicating the CPU units when
   * 			the task definition is registered.</p>
   * 		       <p>If you are using the EC2 launch type, this field is optional. Supported
   * 			values are between <code>128</code> CPU units (<code>0.125</code> vCPUs) and
   * 				<code>10240</code> CPU units (<code>10</code> vCPUs).</p>
   * 		       <p>If you are using the Fargate launch type, this field is required and you
   * 			must use one of the following values, which determines your range of supported values
   * 			for the <code>memory</code> parameter:</p>
   *          <ul>
   *             <li>
   *                 <p>256 (.25 vCPU) - Available <code>memory</code> values: 512 (0.5 GB), 1024 (1 GB), 2048 (2 GB)</p>
   *             </li>
   *             <li>
   *                 <p>512 (.5 vCPU) - Available <code>memory</code> values: 1024 (1 GB), 2048 (2 GB), 3072 (3 GB), 4096 (4 GB)</p>
   *             </li>
   *             <li>
   *                 <p>1024 (1 vCPU) - Available <code>memory</code> values: 2048 (2 GB), 3072 (3 GB), 4096 (4 GB), 5120 (5 GB), 6144 (6 GB), 7168 (7 GB), 8192 (8 GB)</p>
   *             </li>
   *             <li>
   *                 <p>2048 (2 vCPU) - Available <code>memory</code> values: Between 4096 (4 GB) and 16384 (16 GB) in increments of 1024 (1 GB)</p>
   *             </li>
   *             <li>
   *                 <p>4096 (4 vCPU) - Available <code>memory</code> values: Between 8192 (8 GB) and 30720 (30 GB) in increments of 1024 (1 GB)</p>
   *             </li>
   *          </ul>
   */
  cpu?: string;

  /**
   * <p>The Unix timestamp for when the task was created (the task entered the
   * 				<code>PENDING</code> state).</p>
   */
  createdAt?: Date;

  /**
   * <p>The desired status of the task. For more information, see <a href="https://docs.aws.amazon.com/AmazonECS/latest/developerguide/task-lifecycle.html">Task
   * 			Lifecycle</a>.</p>
   */
  desiredStatus?: string;

  /**
   * <p>Whether or not execute command functionality is enabled for this task. If
   * 				<code>true</code>, this enables execute command functionality on all containers in
   * 			the task.</p>
   */
  enableExecuteCommand?: boolean;

  /**
   * <p>The Unix timestamp for when the task execution stopped.</p>
   */
  executionStoppedAt?: Date;

  /**
   * <p>The name of the task group associated with the task.</p>
   */
  group?: string;

  /**
   * <p>The health status for the task, which is determined by the health of the essential
   * 			containers in the task. If all essential containers in the task are reporting as
   * 				<code>HEALTHY</code>, then the task status also reports as <code>HEALTHY</code>. If
   * 			any essential containers in the task are reporting as <code>UNHEALTHY</code> or
   * 				<code>UNKNOWN</code>, then the task status also reports as <code>UNHEALTHY</code> or
   * 				<code>UNKNOWN</code>, accordingly.</p>
   * 		       <note>
   * 			         <p>The Amazon ECS container agent does not monitor or report on Docker health checks that
   * 				are embedded in a container image (such as those specified in a parent image or from
   * 				the image's Dockerfile) and not specified in the container definition. Health check
   * 				parameters that are specified in a container definition override any Docker health
   * 				checks that exist in the container image.</p>
   * 		       </note>
   */
  healthStatus?: HealthStatus | string;

  /**
   * <p>The Elastic Inference accelerator associated with the task.</p>
   */
  inferenceAccelerators?: InferenceAccelerator[];

  /**
   * <p>The last known status of the task. For more information, see <a href="https://docs.aws.amazon.com/AmazonECS/latest/developerguide/task-lifecycle.html">Task
   * 				Lifecycle</a>.</p>
   */
  lastStatus?: string;

  /**
   * <p>The infrastructure on which your task is running. For more information, see <a href="https://docs.aws.amazon.com/AmazonECS/latest/developerguide/launch_types.html">Amazon ECS
   * 				launch types</a> in the <i>Amazon Elastic Container Service Developer Guide</i>.</p>
   */
  launchType?: LaunchType | string;

  /**
   * <p>The amount of memory (in MiB) used by the task as expressed in a task definition. It
   * 			can be expressed as an integer using MiB, for example <code>1024</code>. It can also be
   * 			expressed as a string using GB, for example <code>1GB</code> or <code>1 GB</code>.
   * 			String values are converted to an integer indicating the MiB when the task definition is
   * 			registered.</p>
   * 		       <p>If you are using the EC2 launch type, this field is optional.</p>
   * 		       <p>If you are using the Fargate launch type, this field is required and you
   * 			must use one of the following values, which determines your range of supported values
   * 			for the <code>cpu</code> parameter:</p>
   *          <ul>
   *             <li>
   *                 <p>512 (0.5 GB), 1024 (1 GB), 2048 (2 GB) - Available <code>cpu</code> values: 256 (.25 vCPU)</p>
   *             </li>
   *             <li>
   *                 <p>1024 (1 GB), 2048 (2 GB), 3072 (3 GB), 4096 (4 GB) - Available <code>cpu</code> values: 512 (.5 vCPU)</p>
   *             </li>
   *             <li>
   *                 <p>2048 (2 GB), 3072 (3 GB), 4096 (4 GB), 5120 (5 GB), 6144 (6 GB), 7168 (7 GB), 8192 (8 GB) - Available <code>cpu</code> values: 1024 (1 vCPU)</p>
   *             </li>
   *             <li>
   *                 <p>Between 4096 (4 GB) and 16384 (16 GB) in increments of 1024 (1 GB) - Available <code>cpu</code> values: 2048 (2 vCPU)</p>
   *             </li>
   *             <li>
   *                 <p>Between 8192 (8 GB) and 30720 (30 GB) in increments of 1024 (1 GB) - Available <code>cpu</code> values: 4096 (4 vCPU)</p>
   *             </li>
   *          </ul>
   */
  memory?: string;

  /**
   * <p>One or more container overrides.</p>
   */
  overrides?: TaskOverride;

  /**
   * <p>The platform version on which your task is running. A platform version is only
   * 			specified for tasks using the Fargate launch type. If one is not
   * 			specified, the <code>LATEST</code> platform version is used by default. For more
   * 			information, see <a href="https://docs.aws.amazon.com/AmazonECS/latest/developerguide/platform_versions.html">Fargate Platform
   * 				Versions</a> in the <i>Amazon Elastic Container Service Developer Guide</i>.</p>
   */
  platformVersion?: string;

  /**
   * <p>The Unix timestamp for when the container image pull began.</p>
   */
  pullStartedAt?: Date;

  /**
   * <p>The Unix timestamp for when the container image pull completed.</p>
   */
  pullStoppedAt?: Date;

  /**
   * <p>The Unix timestamp for when the task started (the task transitioned from the
   * 				<code>PENDING</code> state to the <code>RUNNING</code> state).</p>
   */
  startedAt?: Date;

  /**
   * <p>The tag specified when a task is started. If the task is started by an Amazon ECS service,
   * 			then the <code>startedBy</code> parameter contains the deployment ID of the service that
   * 			starts it.</p>
   */
  startedBy?: string;

  /**
   * <p>The stop code indicating why a task was stopped. The <code>stoppedReason</code> may
   * 			contain additional details.</p>
   */
  stopCode?: TaskStopCode | string;

  /**
   * <p>The Unix timestamp for when the task was stopped (the task transitioned from the
   * 				<code>RUNNING</code> state to the <code>STOPPED</code> state).</p>
   */
  stoppedAt?: Date;

  /**
   * <p>The reason that the task was stopped.</p>
   */
  stoppedReason?: string;

  /**
   * <p>The Unix timestamp for when the task stops (transitions from the <code>RUNNING</code>
   * 			state to <code>STOPPED</code>).</p>
   */
  stoppingAt?: Date;

  /**
   * <p>The metadata that you apply to the task to help you categorize and organize them. Each
   * 			tag consists of a key and an optional value, both of which you define.</p>
   * 		       <p>The following basic restrictions apply to tags:</p>
   *         <ul>
   *             <li>
   *                 <p>Maximum number of tags per resource - 50</p>
   *             </li>
   *             <li>
   *                 <p>For each resource, each tag key must be unique, and each tag key can have only
   *                     one value.</p>
   *             </li>
   *             <li>
   *                 <p>Maximum key length - 128 Unicode characters in UTF-8</p>
   *             </li>
   *             <li>
   *                 <p>Maximum value length - 256 Unicode characters in UTF-8</p>
   *             </li>
   *             <li>
   *                 <p>If your tagging schema is used across multiple services and resources,
   *                     remember that other services may have restrictions on allowed characters.
   *                     Generally allowed characters are: letters, numbers, and spaces representable in
   *                     UTF-8, and the following characters: + - = . _ : / @.</p>
   *             </li>
   *             <li>
   *                 <p>Tag keys and values are case-sensitive.</p>
   *             </li>
   *             <li>
   *                 <p>Do not use <code>aws:</code>, <code>AWS:</code>, or any upper or lowercase
   *                     combination of such as a prefix for either keys or values as it is reserved for
   *                     Amazon Web Services use. You cannot edit or delete tag keys or values with this prefix. Tags with
   *                     this prefix do not count against your tags per resource limit.</p>
   *             </li>
   *          </ul>
   */
  tags?: Tag[];

  /**
   * <p>The Amazon Resource Name (ARN) of the task.</p>
   */
  taskArn?: string;

  /**
   * <p>The ARN of the task definition that creates the task.</p>
   */
  taskDefinitionArn?: string;

  /**
   * <p>The version counter for the task. Every time a task experiences a change that triggers
   * 			a CloudWatch event, the version counter is incremented. If you are replicating your Amazon ECS task
   * 			state with CloudWatch Events, you can compare the version of a task reported by the Amazon ECS API
   * 			actions with the version reported in CloudWatch Events for the task (inside the
   * 				<code>detail</code> object) to verify that the version in your event stream is
   * 			current.</p>
   */
  version?: number;

  /**
   * <p>The ephemeral storage settings for the task.</p>
   */
  ephemeralStorage?: EphemeralStorage;
}

export namespace Task {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: Task): any => ({
    ...obj,
  });
}

export interface DescribeTasksResponse {
  /**
   * <p>The list of tasks.</p>
   */
  tasks?: Task[];

  /**
   * <p>Any failures associated with the call.</p>
   */
  failures?: Failure[];
}

export namespace DescribeTasksResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DescribeTasksResponse): any => ({
    ...obj,
  });
}

export enum TaskSetField {
  TAGS = "TAGS",
}

export interface DescribeTaskSetsRequest {
  /**
   * <p>The short name or full Amazon Resource Name (ARN) of the cluster that hosts the service that the task
   * 			sets exist in.</p>
   */
  cluster: string | undefined;

  /**
   * <p>The short name or full Amazon Resource Name (ARN) of the service that the task sets exist in.</p>
   */
  service: string | undefined;

  /**
   * <p>The ID or full Amazon Resource Name (ARN) of task sets to
   * 			describe.</p>
   */
  taskSets?: string[];

  /**
   * <p>Specifies whether to see the resource tags for the task set. If <code>TAGS</code> is
   * 			specified, the tags are included in the response. If this field is omitted, tags are not
   * 			included in the response.</p>
   */
  include?: (TaskSetField | string)[];
}

export namespace DescribeTaskSetsRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DescribeTaskSetsRequest): any => ({
    ...obj,
  });
}

export interface DescribeTaskSetsResponse {
  /**
   * <p>The list of task sets described.</p>
   */
  taskSets?: TaskSet[];

  /**
   * <p>Any failures associated with the call.</p>
   */
  failures?: Failure[];
}

export namespace DescribeTaskSetsResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DescribeTaskSetsResponse): any => ({
    ...obj,
  });
}

export interface DiscoverPollEndpointRequest {
  /**
   * <p>The container instance ID or full ARN of the container instance.
   * 			The ARN contains the <code>arn:aws:ecs</code> namespace, followed by the Region of the container instance, the Amazon Web Services account ID of the container instance owner, the <code>container-instance</code> namespace, and then the container instance ID. For example, <code>arn:aws:ecs:region:aws_account_id:container-instance/container_instance_ID</code>.</p>
   */
  containerInstance?: string;

  /**
   * <p>The short name or full Amazon Resource Name (ARN) of the cluster to which the container instance
   * 			belongs.</p>
   */
  cluster?: string;
}

export namespace DiscoverPollEndpointRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DiscoverPollEndpointRequest): any => ({
    ...obj,
  });
}

export interface DiscoverPollEndpointResponse {
  /**
   * <p>The endpoint for the Amazon ECS agent to poll.</p>
   */
  endpoint?: string;

  /**
   * <p>The telemetry endpoint for the Amazon ECS agent.</p>
   */
  telemetryEndpoint?: string;
}

export namespace DiscoverPollEndpointResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DiscoverPollEndpointResponse): any => ({
    ...obj,
  });
}

export interface ExecuteCommandRequest {
  /**
   * <p>The Amazon Resource Name (ARN) or short name of the cluster the task is running in.
   * 			If you do not specify a cluster, the default cluster is assumed.</p>
   */
  cluster?: string;

  /**
   * <p>The name of the container to execute the command on. A container name only needs to be
   * 			specified for tasks containing multiple containers.</p>
   */
  container?: string;

  /**
   * <p>The command to run on the container.</p>
   */
  command: string | undefined;

  /**
   * <p>Use this flag to run your command in interactive mode.</p>
   */
  interactive: boolean | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) or ID of the task the container is part of.</p>
   */
  task: string | undefined;
}

export namespace ExecuteCommandRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ExecuteCommandRequest): any => ({
    ...obj,
  });
}

/**
 * <p>The details of the execute command session.</p>
 */
export interface Session {
  /**
   * <p>The ID of the execute command session.</p>
   */
  sessionId?: string;

  /**
   * <p>A URL back to managed agent on the container that the SSM Session Manager client uses
   * 			to send commands and receive output from the container.</p>
   */
  streamUrl?: string;

  /**
   * <p>An encrypted token value containing session and caller information. Used to
   * 			authenticate the connection to the container.</p>
   */
  tokenValue?: string;
}

export namespace Session {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: Session): any => ({
    ...obj,
    ...(obj.tokenValue && { tokenValue: SENSITIVE_STRING }),
  });
}

export interface ExecuteCommandResponse {
  /**
   * <p>The Amazon Resource Name (ARN) of the cluster.</p>
   */
  clusterArn?: string;

  /**
   * <p>The Amazon Resource Name (ARN) of the container.</p>
   */
  containerArn?: string;

  /**
   * <p>The name of the container.</p>
   */
  containerName?: string;

  /**
   * <p>Whether or not the execute command session is running in interactive mode. Amazon ECS only
   * 			supports initiating interactive sessions, so you must specify <code>true</code> for this
   * 			value.</p>
   */
  interactive?: boolean;

  /**
   * <p>The details of the SSM session that was created for this instance of
   * 			execute-command.</p>
   */
  session?: Session;

  /**
   * <p>The Amazon Resource Name (ARN) of the task.</p>
   */
  taskArn?: string;
}

export namespace ExecuteCommandResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ExecuteCommandResponse): any => ({
    ...obj,
    ...(obj.session && { session: Session.filterSensitiveLog(obj.session) }),
  });
}

/**
 * <p>The target container is not properly configured with the execute command agent or the
 * 			container is no longer active or running.</p>
 */
export interface TargetNotConnectedException extends __SmithyException, $MetadataBearer {
  name: "TargetNotConnectedException";
  $fault: "client";
  message?: string;
}

export namespace TargetNotConnectedException {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: TargetNotConnectedException): any => ({
    ...obj,
  });
}

export interface ListAccountSettingsRequest {
  /**
   * <p>The name of the account setting you want to list the settings for.</p>
   */
  name?: SettingName | string;

  /**
   * <p>The value of the account settings with which to filter results. You must also specify
   * 			an account setting name to use this parameter.</p>
   */
  value?: string;

  /**
   * <p>The ARN of the principal, which can be an IAM user, IAM role, or the root user. If
   * 			this field is omitted, the account settings are listed only for the authenticated
   * 			user.</p>
   * 		       <note>
   * 			         <p>Federated users assume the account setting of the root user and can't have
   * 				explicit account settings set for them.</p>
   * 		       </note>
   */
  principalArn?: string;

  /**
   * <p>Specifies whether to return the effective settings. If <code>true</code>, the account
   * 			settings for the root user or the default setting for the <code>principalArn</code> are
   * 			returned. If <code>false</code>, the account settings for the <code>principalArn</code>
   * 			are returned if they are set. Otherwise, no account settings are returned.</p>
   */
  effectiveSettings?: boolean;

  /**
   * <p>The <code>nextToken</code> value returned from a <code>ListAccountSettings</code>
   * 			request indicating that more results are available to fulfill the request and further
   * 			calls will be needed. If <code>maxResults</code> was provided, it is possible the number
   * 			of results to be fewer than <code>maxResults</code>.</p>
   *          <note>
   *             <p>This token should be treated as an opaque identifier that is only used to
   *                 retrieve the next items in a list and not for other programmatic purposes.</p>
   *         </note>
   */
  nextToken?: string;

  /**
   * <p>The maximum number of account setting results returned by
   * 				<code>ListAccountSettings</code> in paginated output. When this parameter is used,
   * 				<code>ListAccountSettings</code> only returns <code>maxResults</code> results in a
   * 			single page along with a <code>nextToken</code> response element. The remaining results
   * 			of the initial request can be seen by sending another <code>ListAccountSettings</code>
   * 			request with the returned <code>nextToken</code> value. This value can be between
   * 			1 and 10. If this
   * 			parameter is not used, then <code>ListAccountSettings</code> returns up to
   * 			10 results and a <code>nextToken</code> value
   * 			if applicable.</p>
   */
  maxResults?: number;
}

export namespace ListAccountSettingsRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ListAccountSettingsRequest): any => ({
    ...obj,
  });
}

export interface ListAccountSettingsResponse {
  /**
   * <p>The account settings for the resource.</p>
   */
  settings?: Setting[];

  /**
   * <p>The <code>nextToken</code> value to include in a future
   * 				<code>ListAccountSettings</code> request. When the results of a
   * 				<code>ListAccountSettings</code> request exceed <code>maxResults</code>, this value
   * 			can be used to retrieve the next page of results. This value is <code>null</code> when
   * 			there are no more results to return.</p>
   */
  nextToken?: string;
}

export namespace ListAccountSettingsResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ListAccountSettingsResponse): any => ({
    ...obj,
  });
}

export interface ListAttributesRequest {
  /**
   * <p>The short name or full Amazon Resource Name (ARN) of the cluster to list attributes.
   * 			If you do not specify a cluster, the default cluster is assumed.</p>
   */
  cluster?: string;

  /**
   * <p>The type of the target with which to list attributes.</p>
   */
  targetType: TargetType | string | undefined;

  /**
   * <p>The name of the attribute with which to filter the results. </p>
   */
  attributeName?: string;

  /**
   * <p>The value of the attribute with which to filter results. You must also specify an
   * 			attribute name to use this parameter.</p>
   */
  attributeValue?: string;

  /**
   * <p>The <code>nextToken</code> value returned from a <code>ListAttributes</code> request
   * 			indicating that more results are available to fulfill the request and further calls will
   * 			be needed. If <code>maxResults</code> was provided, it is possible the number of results
   * 			to be fewer than <code>maxResults</code>.</p>
   *          <note>
   *             <p>This token should be treated as an opaque identifier that is only used to
   *                 retrieve the next items in a list and not for other programmatic purposes.</p>
   *         </note>
   */
  nextToken?: string;

  /**
   * <p>The maximum number of cluster results returned by <code>ListAttributes</code> in
   * 			paginated output. When this parameter is used, <code>ListAttributes</code> only returns
   * 				<code>maxResults</code> results in a single page along with a <code>nextToken</code>
   * 			response element. The remaining results of the initial request can be seen by sending
   * 			another <code>ListAttributes</code> request with the returned <code>nextToken</code>
   * 			value. This value can be between 1 and 100. If this
   * 			parameter is not used, then <code>ListAttributes</code> returns up to
   * 			100 results and a <code>nextToken</code> value if applicable.</p>
   */
  maxResults?: number;
}

export namespace ListAttributesRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ListAttributesRequest): any => ({
    ...obj,
  });
}

export interface ListAttributesResponse {
  /**
   * <p>A list of attribute objects that meet the criteria of the request.</p>
   */
  attributes?: Attribute[];

  /**
   * <p>The <code>nextToken</code> value to include in a future <code>ListAttributes</code>
   * 			request. When the results of a <code>ListAttributes</code> request exceed
   * 				<code>maxResults</code>, this value can be used to retrieve the next page of
   * 			results. This value is <code>null</code> when there are no more results to
   * 			return.</p>
   */
  nextToken?: string;
}

export namespace ListAttributesResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ListAttributesResponse): any => ({
    ...obj,
  });
}

export interface ListClustersRequest {
  /**
   * <p>The <code>nextToken</code> value returned from a <code>ListClusters</code> request
   * 			indicating that more results are available to fulfill the request and further calls will
   * 			be needed. If <code>maxResults</code> was provided, it is possible the number of results
   * 			to be fewer than <code>maxResults</code>.</p>
   *          <note>
   *             <p>This token should be treated as an opaque identifier that is only used to
   *                 retrieve the next items in a list and not for other programmatic purposes.</p>
   *         </note>
   */
  nextToken?: string;

  /**
   * <p>The maximum number of cluster results returned by <code>ListClusters</code> in
   * 			paginated output. When this parameter is used, <code>ListClusters</code> only returns
   * 				<code>maxResults</code> results in a single page along with a <code>nextToken</code>
   * 			response element. The remaining results of the initial request can be seen by sending
   * 			another <code>ListClusters</code> request with the returned <code>nextToken</code>
   * 			value. This value can be between 1 and 100. If this
   * 			parameter is not used, then <code>ListClusters</code> returns up to
   * 			100 results and a <code>nextToken</code> value if applicable.</p>
   */
  maxResults?: number;
}

export namespace ListClustersRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ListClustersRequest): any => ({
    ...obj,
  });
}

export interface ListClustersResponse {
  /**
   * <p>The list of full Amazon Resource Name (ARN) entries for each cluster associated with your
   * 			account.</p>
   */
  clusterArns?: string[];

  /**
   * <p>The <code>nextToken</code> value to include in a future <code>ListClusters</code>
   * 			request. When the results of a <code>ListClusters</code> request exceed
   * 				<code>maxResults</code>, this value can be used to retrieve the next page of
   * 			results. This value is <code>null</code> when there are no more results to
   * 			return.</p>
   */
  nextToken?: string;
}

export namespace ListClustersResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ListClustersResponse): any => ({
    ...obj,
  });
}

export enum ContainerInstanceStatus {
  ACTIVE = "ACTIVE",
  DEREGISTERING = "DEREGISTERING",
  DRAINING = "DRAINING",
  REGISTERING = "REGISTERING",
  REGISTRATION_FAILED = "REGISTRATION_FAILED",
}

export interface ListContainerInstancesRequest {
  /**
   * <p>The short name or full Amazon Resource Name (ARN) of the cluster that hosts the container instances to
   * 			list. If you do not specify a cluster, the default cluster is assumed.</p>
   */
  cluster?: string;

  /**
   * <p>You can filter the results of a <code>ListContainerInstances</code> operation with
   * 			cluster query language statements. For more information, see <a href="https://docs.aws.amazon.com/AmazonECS/latest/developerguide/cluster-query-language.html">Cluster Query Language</a> in the
   * 				<i>Amazon Elastic Container Service Developer Guide</i>.</p>
   */
  filter?: string;

  /**
   * <p>The <code>nextToken</code> value returned from a <code>ListContainerInstances</code>
   * 			request indicating that more results are available to fulfill the request and further
   * 			calls will be needed. If <code>maxResults</code> was provided, it is possible the number
   * 			of results to be fewer than <code>maxResults</code>.</p>
   *          <note>
   *             <p>This token should be treated as an opaque identifier that is only used to
   *                 retrieve the next items in a list and not for other programmatic purposes.</p>
   *         </note>
   */
  nextToken?: string;

  /**
   * <p>The maximum number of container instance results returned by
   * 				<code>ListContainerInstances</code> in paginated output. When this parameter is
   * 			used, <code>ListContainerInstances</code> only returns <code>maxResults</code> results
   * 			in a single page along with a <code>nextToken</code> response element. The remaining
   * 			results of the initial request can be seen by sending another
   * 				<code>ListContainerInstances</code> request with the returned <code>nextToken</code>
   * 			value. This value can be between 1 and 100. If this
   * 			parameter is not used, then <code>ListContainerInstances</code> returns up to
   * 			100 results and a <code>nextToken</code> value if applicable.</p>
   */
  maxResults?: number;

  /**
   * <p>Filters the container instances by status. For example, if you specify the
   * 				<code>DRAINING</code> status, the results include only container instances that have
   * 			been set to <code>DRAINING</code> using <a>UpdateContainerInstancesState</a>.
   * 			If you do not specify this parameter, the default is to include container instances set
   * 			to all states other than <code>INACTIVE</code>.</p>
   */
  status?: ContainerInstanceStatus | string;
}

export namespace ListContainerInstancesRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ListContainerInstancesRequest): any => ({
    ...obj,
  });
}

export interface ListContainerInstancesResponse {
  /**
   * <p>The list of container instances with full ARN entries for each container instance
   * 			associated with the specified cluster.</p>
   */
  containerInstanceArns?: string[];

  /**
   * <p>The <code>nextToken</code> value to include in a future
   * 				<code>ListContainerInstances</code> request. When the results of a
   * 				<code>ListContainerInstances</code> request exceed <code>maxResults</code>, this
   * 			value can be used to retrieve the next page of results. This value is <code>null</code>
   * 			when there are no more results to return.</p>
   */
  nextToken?: string;
}

export namespace ListContainerInstancesResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ListContainerInstancesResponse): any => ({
    ...obj,
  });
}

export interface ListServicesRequest {
  /**
   * <p>The short name or full Amazon Resource Name (ARN) of the cluster to use when filtering the
   * 				<code>ListServices</code> results. If you do not specify a cluster, the default cluster is assumed.</p>
   */
  cluster?: string;

  /**
   * <p>The <code>nextToken</code> value returned from a <code>ListServices</code> request
   * 			indicating that more results are available to fulfill the request and further calls will
   * 			be needed. If <code>maxResults</code> was provided, it is possible the number of results
   * 			to be fewer than <code>maxResults</code>.</p>
   *          <note>
   *             <p>This token should be treated as an opaque identifier that is only used to
   *                 retrieve the next items in a list and not for other programmatic purposes.</p>
   *         </note>
   */
  nextToken?: string;

  /**
   * <p>The maximum number of service results returned by <code>ListServices</code> in
   * 			paginated output. When this parameter is used, <code>ListServices</code> only returns
   * 				<code>maxResults</code> results in a single page along with a <code>nextToken</code>
   * 			response element. The remaining results of the initial request can be seen by sending
   * 			another <code>ListServices</code> request with the returned <code>nextToken</code>
   * 			value. This value can be between 1 and 100. If
   * 			this parameter is not used, then <code>ListServices</code> returns up to
   * 			10 results and a <code>nextToken</code> value if
   * 			applicable.</p>
   */
  maxResults?: number;

  /**
   * <p>The launch type to use when filtering the <code>ListServices</code> results.</p>
   */
  launchType?: LaunchType | string;

  /**
   * <p>The scheduling strategy to use when filtering the <code>ListServices</code>
   * 			results.</p>
   */
  schedulingStrategy?: SchedulingStrategy | string;
}

export namespace ListServicesRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ListServicesRequest): any => ({
    ...obj,
  });
}

export interface ListServicesResponse {
  /**
   * <p>The list of full ARN entries for each service associated with the specified
   * 			cluster.</p>
   */
  serviceArns?: string[];

  /**
   * <p>The <code>nextToken</code> value to include in a future <code>ListServices</code>
   * 			request. When the results of a <code>ListServices</code> request exceed
   * 				<code>maxResults</code>, this value can be used to retrieve the next page of
   * 			results. This value is <code>null</code> when there are no more results to
   * 			return.</p>
   */
  nextToken?: string;
}

export namespace ListServicesResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ListServicesResponse): any => ({
    ...obj,
  });
}

export interface ListTagsForResourceRequest {
  /**
   * <p>The Amazon Resource Name (ARN) that identifies the resource for which to list the tags. Currently, the
   * 			supported resources are Amazon ECS tasks, services, task definitions, clusters, and container
   * 			instances.</p>
   */
  resourceArn: string | undefined;
}

export namespace ListTagsForResourceRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ListTagsForResourceRequest): any => ({
    ...obj,
  });
}

export interface ListTagsForResourceResponse {
  /**
   * <p>The tags for the resource.</p>
   */
  tags?: Tag[];
}

export namespace ListTagsForResourceResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ListTagsForResourceResponse): any => ({
    ...obj,
  });
}

export enum TaskDefinitionFamilyStatus {
  ACTIVE = "ACTIVE",
  ALL = "ALL",
  INACTIVE = "INACTIVE",
}

export interface ListTaskDefinitionFamiliesRequest {
  /**
   * <p>The <code>familyPrefix</code> is a string that is used to filter the results of
   * 				<code>ListTaskDefinitionFamilies</code>. If you specify a <code>familyPrefix</code>,
   * 			only task definition family names that begin with the <code>familyPrefix</code> string
   * 			are returned.</p>
   */
  familyPrefix?: string;

  /**
   * <p>The task definition family status with which to filter the
   * 				<code>ListTaskDefinitionFamilies</code> results. By default, both
   * 				<code>ACTIVE</code> and <code>INACTIVE</code> task definition families are listed.
   * 			If this parameter is set to <code>ACTIVE</code>, only task definition families that have
   * 			an <code>ACTIVE</code> task definition revision are returned. If this parameter is set
   * 			to <code>INACTIVE</code>, only task definition families that do not have any
   * 				<code>ACTIVE</code> task definition revisions are returned. If you paginate the
   * 			resulting output, be sure to keep the <code>status</code> value constant in each
   * 			subsequent request.</p>
   */
  status?: TaskDefinitionFamilyStatus | string;

  /**
   * <p>The <code>nextToken</code> value returned from a
   * 				<code>ListTaskDefinitionFamilies</code> request indicating that more results are
   * 			available to fulfill the request and further calls will be needed. If
   * 				<code>maxResults</code> was provided, it is possible the number of results to be
   * 			fewer than <code>maxResults</code>.</p>
   *          <note>
   *             <p>This token should be treated as an opaque identifier that is only used to
   *                 retrieve the next items in a list and not for other programmatic purposes.</p>
   *         </note>
   */
  nextToken?: string;

  /**
   * <p>The maximum number of task definition family results returned by
   * 				<code>ListTaskDefinitionFamilies</code> in paginated output. When this parameter is
   * 			used, <code>ListTaskDefinitions</code> only returns <code>maxResults</code> results in a
   * 			single page along with a <code>nextToken</code> response element. The remaining results
   * 			of the initial request can be seen by sending another
   * 				<code>ListTaskDefinitionFamilies</code> request with the returned
   * 				<code>nextToken</code> value. This value can be between 1 and
   * 			100. If this parameter is not used, then
   * 				<code>ListTaskDefinitionFamilies</code> returns up to 100 results
   * 			and a <code>nextToken</code> value if applicable.</p>
   */
  maxResults?: number;
}

export namespace ListTaskDefinitionFamiliesRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ListTaskDefinitionFamiliesRequest): any => ({
    ...obj,
  });
}

export interface ListTaskDefinitionFamiliesResponse {
  /**
   * <p>The list of task definition family names that match the
   * 				<code>ListTaskDefinitionFamilies</code> request.</p>
   */
  families?: string[];

  /**
   * <p>The <code>nextToken</code> value to include in a future
   * 				<code>ListTaskDefinitionFamilies</code> request. When the results of a
   * 				<code>ListTaskDefinitionFamilies</code> request exceed <code>maxResults</code>, this
   * 			value can be used to retrieve the next page of results. This value is <code>null</code>
   * 			when there are no more results to return.</p>
   */
  nextToken?: string;
}

export namespace ListTaskDefinitionFamiliesResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ListTaskDefinitionFamiliesResponse): any => ({
    ...obj,
  });
}

export enum SortOrder {
  ASC = "ASC",
  DESC = "DESC",
}

export interface ListTaskDefinitionsRequest {
  /**
   * <p>The full family name with which to filter the <code>ListTaskDefinitions</code>
   * 			results. Specifying a <code>familyPrefix</code> limits the listed task definitions to
   * 			task definition revisions that belong to that family.</p>
   */
  familyPrefix?: string;

  /**
   * <p>The task definition status with which to filter the <code>ListTaskDefinitions</code>
   * 			results. By default, only <code>ACTIVE</code> task definitions are listed. By setting
   * 			this parameter to <code>INACTIVE</code>, you can view task definitions that are
   * 				<code>INACTIVE</code> as long as an active task or service still references them. If
   * 			you paginate the resulting output, be sure to keep the <code>status</code> value
   * 			constant in each subsequent request.</p>
   */
  status?: TaskDefinitionStatus | string;

  /**
   * <p>The order in which to sort the results. Valid values are <code>ASC</code> and
   * 				<code>DESC</code>. By default (<code>ASC</code>), task definitions are listed
   * 			lexicographically by family name and in ascending numerical order by revision so that
   * 			the newest task definitions in a family are listed last. Setting this parameter to
   * 				<code>DESC</code> reverses the sort order on family name and revision so that the
   * 			newest task definitions in a family are listed first.</p>
   */
  sort?: SortOrder | string;

  /**
   * <p>The <code>nextToken</code> value returned from a <code>ListTaskDefinitions</code>
   * 			request indicating that more results are available to fulfill the request and further
   * 			calls will be needed. If <code>maxResults</code> was provided, it is possible the number
   * 			of results to be fewer than <code>maxResults</code>.</p>
   *          <note>
   *             <p>This token should be treated as an opaque identifier that is only used to
   *                 retrieve the next items in a list and not for other programmatic purposes.</p>
   *         </note>
   */
  nextToken?: string;

  /**
   * <p>The maximum number of task definition results returned by
   * 				<code>ListTaskDefinitions</code> in paginated output. When this parameter is used,
   * 				<code>ListTaskDefinitions</code> only returns <code>maxResults</code> results in a
   * 			single page along with a <code>nextToken</code> response element. The remaining results
   * 			of the initial request can be seen by sending another <code>ListTaskDefinitions</code>
   * 			request with the returned <code>nextToken</code> value. This value can be between
   * 			1 and 100. If this parameter is not used, then
   * 				<code>ListTaskDefinitions</code> returns up to 100 results and a
   * 				<code>nextToken</code> value if applicable.</p>
   */
  maxResults?: number;
}

export namespace ListTaskDefinitionsRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ListTaskDefinitionsRequest): any => ({
    ...obj,
  });
}

export interface ListTaskDefinitionsResponse {
  /**
   * <p>The list of task definition Amazon Resource Name (ARN) entries for the <code>ListTaskDefinitions</code>
   * 			request.</p>
   */
  taskDefinitionArns?: string[];

  /**
   * <p>The <code>nextToken</code> value to include in a future
   * 				<code>ListTaskDefinitions</code> request. When the results of a
   * 				<code>ListTaskDefinitions</code> request exceed <code>maxResults</code>, this value
   * 			can be used to retrieve the next page of results. This value is <code>null</code> when
   * 			there are no more results to return.</p>
   */
  nextToken?: string;
}

export namespace ListTaskDefinitionsResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ListTaskDefinitionsResponse): any => ({
    ...obj,
  });
}

export enum DesiredStatus {
  PENDING = "PENDING",
  RUNNING = "RUNNING",
  STOPPED = "STOPPED",
}

export interface ListTasksRequest {
  /**
   * <p>The short name or full Amazon Resource Name (ARN) of the cluster to use when filtering the
   * 				<code>ListTasks</code> results. If you do not specify a cluster, the default cluster is assumed.</p>
   */
  cluster?: string;

  /**
   * <p>The container instance ID or full ARN of the container instance to use when
   * 			filtering the <code>ListTasks</code> results. Specifying a
   * 				<code>containerInstance</code> limits the results to tasks that belong to that
   * 			container instance.</p>
   */
  containerInstance?: string;

  /**
   * <p>The name of the task definition family to use when filtering the
   * 				<code>ListTasks</code> results. Specifying a <code>family</code> limits the results
   * 			to tasks that belong to that family.</p>
   */
  family?: string;

  /**
   * <p>The <code>nextToken</code> value returned from a <code>ListTasks</code> request
   * 			indicating that more results are available to fulfill the request and further calls will
   * 			be needed. If <code>maxResults</code> was provided, it is possible the number of results
   * 			to be fewer than <code>maxResults</code>.</p>
   *          <note>
   *             <p>This token should be treated as an opaque identifier that is only used to
   *                 retrieve the next items in a list and not for other programmatic purposes.</p>
   *         </note>
   */
  nextToken?: string;

  /**
   * <p>The maximum number of task results returned by <code>ListTasks</code> in paginated
   * 			output. When this parameter is used, <code>ListTasks</code> only returns
   * 				<code>maxResults</code> results in a single page along with a <code>nextToken</code>
   * 			response element. The remaining results of the initial request can be seen by sending
   * 			another <code>ListTasks</code> request with the returned <code>nextToken</code> value.
   * 			This value can be between 1 and 100. If this parameter is
   * 			not used, then <code>ListTasks</code> returns up to 100 results and a
   * 				<code>nextToken</code> value if applicable.</p>
   */
  maxResults?: number;

  /**
   * <p>The <code>startedBy</code> value with which to filter the task results. Specifying a
   * 				<code>startedBy</code> value limits the results to tasks that were started with that
   * 			value.</p>
   */
  startedBy?: string;

  /**
   * <p>The name of the service to use when filtering the <code>ListTasks</code> results.
   * 			Specifying a <code>serviceName</code> limits the results to tasks that belong to that
   * 			service.</p>
   */
  serviceName?: string;

  /**
   * <p>The task desired status to use when filtering the <code>ListTasks</code> results.
   * 			Specifying a <code>desiredStatus</code> of <code>STOPPED</code> limits the results to
   * 			tasks that Amazon ECS has set the desired status to <code>STOPPED</code>. This can be useful
   * 			for debugging tasks that are not starting properly or have died or finished. The default
   * 			status filter is <code>RUNNING</code>, which shows tasks that Amazon ECS has set the desired
   * 			status to <code>RUNNING</code>.</p>
   * 		       <note>
   * 			         <p>Although you can filter results based on a desired status of <code>PENDING</code>,
   * 				this does not return any results. Amazon ECS never sets the desired status of a task to
   * 				that value (only a task's <code>lastStatus</code> may have a value of
   * 					<code>PENDING</code>).</p>
   * 		       </note>
   */
  desiredStatus?: DesiredStatus | string;

  /**
   * <p>The launch type to use when filtering the <code>ListTasks</code> results.</p>
   */
  launchType?: LaunchType | string;
}

export namespace ListTasksRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ListTasksRequest): any => ({
    ...obj,
  });
}

export interface ListTasksResponse {
  /**
   * <p>The list of task ARN entries for the <code>ListTasks</code> request.</p>
   */
  taskArns?: string[];

  /**
   * <p>The <code>nextToken</code> value to include in a future <code>ListTasks</code>
   * 			request. When the results of a <code>ListTasks</code> request exceed
   * 				<code>maxResults</code>, this value can be used to retrieve the next page of
   * 			results. This value is <code>null</code> when there are no more results to
   * 			return.</p>
   */
  nextToken?: string;
}

export namespace ListTasksResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ListTasksResponse): any => ({
    ...obj,
  });
}

export interface PutAccountSettingRequest {
  /**
   * <p>The Amazon ECS resource name for which to modify the account setting. If
   * 				<code>serviceLongArnFormat</code> is specified, the ARN for your Amazon ECS services is
   * 			affected. If <code>taskLongArnFormat</code> is specified, the ARN and resource ID for
   * 			your Amazon ECS tasks is affected. If <code>containerInstanceLongArnFormat</code> is
   * 			specified, the ARN and resource ID for your Amazon ECS container instances is affected. If
   * 				<code>awsvpcTrunking</code> is specified, the elastic network interface (ENI) limit
   * 			for your Amazon ECS container instances is affected. If <code>containerInsights</code> is
   * 			specified, the default setting for CloudWatch Container Insights for your clusters is
   * 			affected.</p>
   */
  name: SettingName | string | undefined;

  /**
   * <p>The account setting value for the specified principal ARN. Accepted values are
   * 				<code>enabled</code> and <code>disabled</code>.</p>
   */
  value: string | undefined;

  /**
   * <p>The ARN of the principal, which can be an IAM user, IAM role, or the root user. If you
   * 			specify the root user, it modifies the account setting for all IAM users, IAM roles, and
   * 			the root user of the account unless an IAM user or role explicitly overrides these
   * 			settings. If this field is omitted, the setting is changed only for the authenticated
   * 			user.</p>
   * 		       <note>
   * 			         <p>Federated users assume the account setting of the root user and can't have
   * 				explicit account settings set for them.</p>
   * 		       </note>
   */
  principalArn?: string;
}

export namespace PutAccountSettingRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: PutAccountSettingRequest): any => ({
    ...obj,
  });
}

export interface PutAccountSettingResponse {
  /**
   * <p>The current account setting for a resource.</p>
   */
  setting?: Setting;
}

export namespace PutAccountSettingResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: PutAccountSettingResponse): any => ({
    ...obj,
  });
}

export interface PutAccountSettingDefaultRequest {
  /**
   * <p>The resource name for which to modify the account setting. If
   * 				<code>serviceLongArnFormat</code> is specified, the ARN for your Amazon ECS services is
   * 			affected. If <code>taskLongArnFormat</code> is specified, the ARN and resource ID for
   * 			your Amazon ECS tasks is affected. If <code>containerInstanceLongArnFormat</code> is
   * 			specified, the ARN and resource ID for your Amazon ECS container instances is affected. If
   * 				<code>awsvpcTrunking</code> is specified, the ENI limit for your Amazon ECS container
   * 			instances is affected. If <code>containerInsights</code> is specified, the default
   * 			setting for CloudWatch Container Insights for your clusters is affected.</p>
   */
  name: SettingName | string | undefined;

  /**
   * <p>The account setting value for the specified principal ARN. Accepted values are
   * 				<code>enabled</code> and <code>disabled</code>.</p>
   */
  value: string | undefined;
}

export namespace PutAccountSettingDefaultRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: PutAccountSettingDefaultRequest): any => ({
    ...obj,
  });
}

export interface PutAccountSettingDefaultResponse {
  /**
   * <p>The current setting for a resource.</p>
   */
  setting?: Setting;
}

export namespace PutAccountSettingDefaultResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: PutAccountSettingDefaultResponse): any => ({
    ...obj,
  });
}

/**
 * <p>You can apply up to 10 custom attributes per resource. You can view the attributes of
 * 			a resource with <a>ListAttributes</a>. You can remove existing attributes on
 * 			a resource with <a>DeleteAttributes</a>.</p>
 */
export interface AttributeLimitExceededException extends __SmithyException, $MetadataBearer {
  name: "AttributeLimitExceededException";
  $fault: "client";
  message?: string;
}

export namespace AttributeLimitExceededException {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: AttributeLimitExceededException): any => ({
    ...obj,
  });
}

export interface PutAttributesRequest {
  /**
   * <p>The short name or full Amazon Resource Name (ARN) of the cluster that contains the resource to apply
   * 			attributes. If you do not specify a cluster, the default cluster is assumed.</p>
   */
  cluster?: string;

  /**
   * <p>The attributes to apply to your resource. You can specify up to 10 custom attributes
   * 			per resource. You can specify up to 10 attributes in a single call.</p>
   */
  attributes: Attribute[] | undefined;
}

export namespace PutAttributesRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: PutAttributesRequest): any => ({
    ...obj,
  });
}

export interface PutAttributesResponse {
  /**
   * <p>The attributes applied to your resource.</p>
   */
  attributes?: Attribute[];
}

export namespace PutAttributesResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: PutAttributesResponse): any => ({
    ...obj,
  });
}

export interface PutClusterCapacityProvidersRequest {
  /**
   * <p>The short name or full Amazon Resource Name (ARN) of the cluster to modify the capacity provider
   * 			settings for. If you do not specify a cluster, the default cluster is assumed.</p>
   */
  cluster: string | undefined;

  /**
   * <p>The name of one or more capacity providers to associate with the cluster.</p>
   * 		       <p>If specifying a capacity provider that uses an Auto Scaling group, the capacity
   * 			provider must already be created. New capacity providers can be created with the <a>CreateCapacityProvider</a> API operation.</p>
   * 		       <p>To use a Fargate capacity provider, specify either the <code>FARGATE</code> or
   * 				<code>FARGATE_SPOT</code> capacity providers. The Fargate capacity providers are
   * 			available to all accounts and only need to be associated with a cluster to be
   * 			used.</p>
   */
  capacityProviders: string[] | undefined;

  /**
   * <p>The capacity provider strategy to use by default for the cluster.</p>
   * 		       <p>When creating a service or running a task on a cluster, if no capacity provider or
   * 			launch type is specified then the default capacity provider strategy for the cluster is
   * 			used.</p>
   * 		       <p>A capacity provider strategy consists of one or more capacity providers along with the
   * 				<code>base</code> and <code>weight</code> to assign to them. A capacity provider
   * 			must be associated with the cluster to be used in a capacity provider strategy. The
   * 				<a>PutClusterCapacityProviders</a> API is used to associate a capacity
   * 			provider with a cluster. Only capacity providers with an <code>ACTIVE</code> or
   * 				<code>UPDATING</code> status can be used.</p>
   * 		       <p>If specifying a capacity provider that uses an Auto Scaling group, the capacity
   * 			provider must already be created. New capacity providers can be created with the <a>CreateCapacityProvider</a> API operation.</p>
   * 		       <p>To use a Fargate capacity provider, specify either the <code>FARGATE</code> or
   * 				<code>FARGATE_SPOT</code> capacity providers. The Fargate capacity providers are
   * 			available to all accounts and only need to be associated with a cluster to be
   * 			used.</p>
   */
  defaultCapacityProviderStrategy: CapacityProviderStrategyItem[] | undefined;
}

export namespace PutClusterCapacityProvidersRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: PutClusterCapacityProvidersRequest): any => ({
    ...obj,
  });
}

export interface PutClusterCapacityProvidersResponse {
  /**
   * <p>Details about the cluster.</p>
   */
  cluster?: Cluster;
}

export namespace PutClusterCapacityProvidersResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: PutClusterCapacityProvidersResponse): any => ({
    ...obj,
  });
}

/**
 * <p>The specified resource is in-use and cannot be removed.</p>
 */
export interface ResourceInUseException extends __SmithyException, $MetadataBearer {
  name: "ResourceInUseException";
  $fault: "client";
  message?: string;
}

export namespace ResourceInUseException {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ResourceInUseException): any => ({
    ...obj,
  });
}

export enum PlatformDeviceType {
  GPU = "GPU",
}

/**
 * <p>The devices that are available on the container instance. The only supported device
 * 			type is a GPU.</p>
 */
export interface PlatformDevice {
  /**
   * <p>The ID for the GPU(s) on the container instance. The available GPU IDs can also be
   * 			obtained on the container instance in the
   * 				<code>/var/lib/ecs/gpu/nvidia_gpu_info.json</code> file.</p>
   */
  id: string | undefined;

  /**
   * <p>The type of device that is available on the container instance. The only supported
   * 			value is <code>GPU</code>.</p>
   */
  type: PlatformDeviceType | string | undefined;
}

export namespace PlatformDevice {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: PlatformDevice): any => ({
    ...obj,
  });
}

export interface RegisterContainerInstanceRequest {
  /**
   * <p>The short name or full Amazon Resource Name (ARN) of the cluster with which to register your container
   * 			instance. If you do not specify a cluster, the default cluster is assumed.</p>
   */
  cluster?: string;

  /**
   * <p>The instance identity document for the EC2 instance to register. This document can be
   * 			found by running the following command from the instance: <code>curl
   * 				http://169.254.169.254/latest/dynamic/instance-identity/document/</code>
   * 		       </p>
   */
  instanceIdentityDocument?: string;

  /**
   * <p>The instance identity document signature for the EC2 instance to register. This
   * 			signature can be found by running the following command from the instance: <code>curl
   * 				http://169.254.169.254/latest/dynamic/instance-identity/signature/</code>
   * 		       </p>
   */
  instanceIdentityDocumentSignature?: string;

  /**
   * <p>The resources available on the instance.</p>
   */
  totalResources?: Resource[];

  /**
   * <p>The version information for the Amazon ECS container agent and Docker daemon running on the
   * 			container instance.</p>
   */
  versionInfo?: VersionInfo;

  /**
   * <p>The ARN of the container instance (if it was previously registered).</p>
   */
  containerInstanceArn?: string;

  /**
   * <p>The container instance attributes that this container instance supports.</p>
   */
  attributes?: Attribute[];

  /**
   * <p>The devices that are available on the container instance. The only supported device
   * 			type is a GPU.</p>
   */
  platformDevices?: PlatformDevice[];

  /**
   * <p>The metadata that you apply to the container instance to help you categorize and
   * 			organize them. Each tag consists of a key and an optional value, both of which you
   * 			define.</p>
   *          <p>The following basic restrictions apply to tags:</p>
   *         <ul>
   *             <li>
   *                 <p>Maximum number of tags per resource - 50</p>
   *             </li>
   *             <li>
   *                 <p>For each resource, each tag key must be unique, and each tag key can have only
   *                     one value.</p>
   *             </li>
   *             <li>
   *                 <p>Maximum key length - 128 Unicode characters in UTF-8</p>
   *             </li>
   *             <li>
   *                 <p>Maximum value length - 256 Unicode characters in UTF-8</p>
   *             </li>
   *             <li>
   *                 <p>If your tagging schema is used across multiple services and resources,
   *                     remember that other services may have restrictions on allowed characters.
   *                     Generally allowed characters are: letters, numbers, and spaces representable in
   *                     UTF-8, and the following characters: + - = . _ : / @.</p>
   *             </li>
   *             <li>
   *                 <p>Tag keys and values are case-sensitive.</p>
   *             </li>
   *             <li>
   *                 <p>Do not use <code>aws:</code>, <code>AWS:</code>, or any upper or lowercase
   *                     combination of such as a prefix for either keys or values as it is reserved for
   *                     Amazon Web Services use. You cannot edit or delete tag keys or values with this prefix. Tags with
   *                     this prefix do not count against your tags per resource limit.</p>
   *             </li>
   *          </ul>
   */
  tags?: Tag[];
}

export namespace RegisterContainerInstanceRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: RegisterContainerInstanceRequest): any => ({
    ...obj,
  });
}

export interface RegisterContainerInstanceResponse {
  /**
   * <p>The container instance that was registered.</p>
   */
  containerInstance?: ContainerInstance;
}

export namespace RegisterContainerInstanceResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: RegisterContainerInstanceResponse): any => ({
    ...obj,
  });
}

export interface RegisterTaskDefinitionRequest {
  /**
   * <p>You must specify a <code>family</code> for a task definition, which allows you to
   * 			track multiple versions of the same task definition. The <code>family</code> is used as
   * 			a name for your task definition. Up to 255 letters (uppercase and lowercase), numbers, underscores, and hyphens are allowed.</p>
   */
  family: string | undefined;

  /**
   * <p>The short name or full Amazon Resource Name (ARN) of the IAM role that containers in this task can
   * 			assume. All containers in this task are granted the permissions that are specified in
   * 			this role. For more information, see <a href="https://docs.aws.amazon.com/AmazonECS/latest/developerguide/task-iam-roles.html">IAM Roles for
   * 				Tasks</a> in the <i>Amazon Elastic Container Service Developer Guide</i>.</p>
   */
  taskRoleArn?: string;

  /**
   * <p>The Amazon Resource Name (ARN) of the task execution role that grants the Amazon ECS container agent
   *             permission to make Amazon Web Services API calls on your behalf. The task execution IAM role is required
   *             depending on the requirements of your task. For more information, see <a href="https://docs.aws.amazon.com/AmazonECS/latest/developerguide/task_execution_IAM_role.html">Amazon ECS task
   *                 execution IAM role</a> in the <i>Amazon Elastic Container Service Developer Guide</i>.</p>
   */
  executionRoleArn?: string;

  /**
   * <p>The Docker networking mode to use for the containers in the task. The valid values are
   *                 <code>none</code>, <code>bridge</code>, <code>awsvpc</code>, and <code>host</code>.
   *             If no network mode is specified, the default is <code>bridge</code>.</p>
   *             <p>For Amazon ECS tasks on Fargate, the <code>awsvpc</code> network mode is required.
   *             For Amazon ECS tasks on Amazon EC2 Linux instances, any network mode can be used.  For Amazon ECS tasks on Amazon EC2 Windows instances, <code><default></code> or <code>awsvpc</code> can be used. If the network
   *             mode is set to <code>none</code>, you cannot specify port mappings in your container
   *             definitions, and the tasks containers do not have external connectivity. The
   *                 <code>host</code> and <code>awsvpc</code> network modes offer the highest networking
   *             performance for containers because they use the EC2 network stack instead of the
   *             virtualized network stack provided by the <code>bridge</code> mode.</p>
   *         <p>With the <code>host</code> and <code>awsvpc</code> network modes, exposed container
   *             ports are mapped directly to the corresponding host port (for the <code>host</code>
   *             network mode) or the attached elastic network interface port (for the
   *                 <code>awsvpc</code> network mode), so you cannot take advantage of dynamic host port
   *             mappings. </p>
   *             <important>
   *                         <p>When using the <code>host</code> network mode, you should not run
   *                             containers using the root user (UID 0). It is considered best practice
   *                             to use a non-root user.</p>
   *                     </important>
   *         <p>If the network mode is <code>awsvpc</code>, the task is allocated an elastic network
   *             interface, and you must specify a <a>NetworkConfiguration</a> value when you create
   *             a service or run a task with the task definition. For more information, see <a href="https://docs.aws.amazon.com/AmazonECS/latest/developerguide/task-networking.html">Task Networking</a> in the
   *                 <i>Amazon Elastic Container Service Developer Guide</i>.</p>
   *         <p>If the network mode is <code>host</code>, you cannot run multiple instantiations of the
   *             same task on a single container instance when port mappings are used.</p>
   *         <p>For more information, see <a href="https://docs.docker.com/engine/reference/run/#network-settings">Network
   *                 settings</a> in the <i>Docker run reference</i>.</p>
   */
  networkMode?: NetworkMode | string;

  /**
   * <p>A list of container definitions in JSON format that describe the different containers
   * 			that make up your task.</p>
   */
  containerDefinitions: ContainerDefinition[] | undefined;

  /**
   * <p>A list of volume definitions in JSON format that containers in your task may
   * 			use.</p>
   */
  volumes?: Volume[];

  /**
   * <p>An array of placement constraint objects to use for the task. You can specify a
   * 			maximum of 10 constraints per task (this limit includes constraints in the task
   * 			definition and those specified at runtime).</p>
   */
  placementConstraints?: TaskDefinitionPlacementConstraint[];

  /**
   * <p>The task launch type that Amazon ECS should validate the task definition against. A client
   * 			exception is returned if the task definition doesn't validate against the
   * 			compatibilities specified. If no value is specified, the parameter is omitted from the
   * 			response.</p>
   */
  requiresCompatibilities?: (Compatibility | string)[];

  /**
   * <p>The number of CPU units used by the task. It can be expressed as an integer using CPU
   * 			units, for example <code>1024</code>, or as a string using vCPUs, for example <code>1
   * 				vCPU</code> or <code>1 vcpu</code>, in a task definition. String values are
   * 			converted to an integer indicating the CPU units when the task definition is
   * 			registered.</p>
   * 		       <note>
   * 			         <p>Task-level CPU and memory parameters are ignored for Windows containers. We
   * 				recommend specifying container-level resources for Windows containers.</p>
   * 		       </note>
   * 		       <p>If you are using the EC2 launch type, this field is optional. Supported
   * 			values are between <code>128</code> CPU units (<code>0.125</code> vCPUs) and
   * 				<code>10240</code> CPU units (<code>10</code> vCPUs).</p>
   * 		       <p>If you are using the Fargate launch type, this field is required and you
   * 			must use one of the following values, which determines your range of supported values
   * 			for the <code>memory</code> parameter:</p>
   *          <ul>
   *             <li>
   *                 <p>256 (.25 vCPU) - Available <code>memory</code> values: 512 (0.5 GB), 1024 (1 GB), 2048 (2 GB)</p>
   *             </li>
   *             <li>
   *                 <p>512 (.5 vCPU) - Available <code>memory</code> values: 1024 (1 GB), 2048 (2 GB), 3072 (3 GB), 4096 (4 GB)</p>
   *             </li>
   *             <li>
   *                 <p>1024 (1 vCPU) - Available <code>memory</code> values: 2048 (2 GB), 3072 (3 GB), 4096 (4 GB), 5120 (5 GB), 6144 (6 GB), 7168 (7 GB), 8192 (8 GB)</p>
   *             </li>
   *             <li>
   *                 <p>2048 (2 vCPU) - Available <code>memory</code> values: Between 4096 (4 GB) and 16384 (16 GB) in increments of 1024 (1 GB)</p>
   *             </li>
   *             <li>
   *                 <p>4096 (4 vCPU) - Available <code>memory</code> values: Between 8192 (8 GB) and 30720 (30 GB) in increments of 1024 (1 GB)</p>
   *             </li>
   *          </ul>
   */
  cpu?: string;

  /**
   * <p>The amount of memory (in MiB) used by the task. It can be expressed as an integer
   * 			using MiB, for example <code>1024</code>, or as a string using GB, for example
   * 				<code>1GB</code> or <code>1 GB</code>, in a task definition. String values are
   * 			converted to an integer indicating the MiB when the task definition is
   * 			registered.</p>
   * 		       <note>
   * 			         <p>Task-level CPU and memory parameters are ignored for Windows containers. We
   * 				recommend specifying container-level resources for Windows containers.</p>
   * 		       </note>
   * 		       <p>If using the EC2 launch type, this field is optional.</p>
   * 		       <p>If using the Fargate launch type, this field is required and you must
   * 			use one of the following values, which determines your range of supported values for the
   * 				<code>cpu</code> parameter:</p>
   *          <ul>
   *             <li>
   *                 <p>512 (0.5 GB), 1024 (1 GB), 2048 (2 GB) - Available <code>cpu</code> values: 256 (.25 vCPU)</p>
   *             </li>
   *             <li>
   *                 <p>1024 (1 GB), 2048 (2 GB), 3072 (3 GB), 4096 (4 GB) - Available <code>cpu</code> values: 512 (.5 vCPU)</p>
   *             </li>
   *             <li>
   *                 <p>2048 (2 GB), 3072 (3 GB), 4096 (4 GB), 5120 (5 GB), 6144 (6 GB), 7168 (7 GB), 8192 (8 GB) - Available <code>cpu</code> values: 1024 (1 vCPU)</p>
   *             </li>
   *             <li>
   *                 <p>Between 4096 (4 GB) and 16384 (16 GB) in increments of 1024 (1 GB) - Available <code>cpu</code> values: 2048 (2 vCPU)</p>
   *             </li>
   *             <li>
   *                 <p>Between 8192 (8 GB) and 30720 (30 GB) in increments of 1024 (1 GB) - Available <code>cpu</code> values: 4096 (4 vCPU)</p>
   *             </li>
   *          </ul>
   */
  memory?: string;

  /**
   * <p>The metadata that you apply to the task definition to help you categorize and organize
   * 			them. Each tag consists of a key and an optional value, both of which you define.</p>
   * 		       <p>The following basic restrictions apply to tags:</p>
   *         <ul>
   *             <li>
   *                 <p>Maximum number of tags per resource - 50</p>
   *             </li>
   *             <li>
   *                 <p>For each resource, each tag key must be unique, and each tag key can have only
   *                     one value.</p>
   *             </li>
   *             <li>
   *                 <p>Maximum key length - 128 Unicode characters in UTF-8</p>
   *             </li>
   *             <li>
   *                 <p>Maximum value length - 256 Unicode characters in UTF-8</p>
   *             </li>
   *             <li>
   *                 <p>If your tagging schema is used across multiple services and resources,
   *                     remember that other services may have restrictions on allowed characters.
   *                     Generally allowed characters are: letters, numbers, and spaces representable in
   *                     UTF-8, and the following characters: + - = . _ : / @.</p>
   *             </li>
   *             <li>
   *                 <p>Tag keys and values are case-sensitive.</p>
   *             </li>
   *             <li>
   *                 <p>Do not use <code>aws:</code>, <code>AWS:</code>, or any upper or lowercase
   *                     combination of such as a prefix for either keys or values as it is reserved for
   *                     Amazon Web Services use. You cannot edit or delete tag keys or values with this prefix. Tags with
   *                     this prefix do not count against your tags per resource limit.</p>
   *             </li>
   *          </ul>
   */
  tags?: Tag[];

  /**
   * <p>The process namespace to use for the containers in the task. The valid
   *                             values are <code>host</code> or <code>task</code>. If <code>host</code>
   *                             is specified, then all containers within the tasks that specified the
   *                                 <code>host</code> PID mode on the same container instance share the
   *                             same process namespace with the host Amazon EC2 instance. If <code>task</code> is
   *                             specified, all containers within the specified task share the same
   *                             process namespace. If no value is specified, the default is a private
   *                             namespace. For more information, see <a href="https://docs.docker.com/engine/reference/run/#pid-settings---pid">PID settings</a> in the <i>Docker run
   *                                 reference</i>.</p>
   *                         <p>If the <code>host</code> PID mode is used, be aware that there is a
   *                             heightened risk of undesired process namespace expose. For more
   *                             information, see <a href="https://docs.docker.com/engine/security/security/">Docker
   *                                 security</a>.</p>
   *          <note>
   *                                 <p>This parameter is not supported for Windows containers or tasks run on Fargate.</p>
   *                              </note>
   */
  pidMode?: PidMode | string;

  /**
   * <p>The IPC resource namespace to use for the containers in the task. The valid values are
   *                 <code>host</code>, <code>task</code>, or <code>none</code>. If <code>host</code> is
   *             specified, then all containers within the tasks that specified the <code>host</code> IPC
   *             mode on the same container instance share the same IPC resources with the host Amazon EC2
   *             instance. If <code>task</code> is specified, all containers within the specified task
   *             share the same IPC resources. If <code>none</code> is specified, then IPC resources
   *             within the containers of a task are private and not shared with other containers in a
   *             task or on the container instance. If no value is specified, then the IPC resource
   *             namespace sharing depends on the Docker daemon setting on the container instance. For
   *             more information, see <a href="https://docs.docker.com/engine/reference/run/#ipc-settings---ipc">IPC
   *                 settings</a> in the <i>Docker run reference</i>.</p>
   *         <p>If the <code>host</code> IPC mode is used, be aware that there is a heightened risk of
   *             undesired IPC namespace expose. For more information, see <a href="https://docs.docker.com/engine/security/security/">Docker
   *             security</a>.</p>
   *         <p>If you are setting namespaced kernel parameters using <code>systemControls</code> for
   *             the containers in the task, the following will apply to your IPC resource namespace. For
   *             more information, see <a href="https://docs.aws.amazon.com/AmazonECS/latest/developerguide/task_definition_parameters.html">System
   *                 Controls</a> in the <i>Amazon Elastic Container Service Developer Guide</i>.</p>
   *         <ul>
   *             <li>
   *                 <p>For tasks that use the <code>host</code> IPC mode, IPC namespace related
   *                         <code>systemControls</code> are not supported.</p>
   *             </li>
   *             <li>
   *                 <p>For tasks that use the <code>task</code> IPC mode, IPC namespace related
   *                         <code>systemControls</code> will apply to all containers within a
   *                     task.</p>
   *             </li>
   *          </ul>
   *          <note>
   *                                 <p>This parameter is not supported for Windows containers or tasks run on Fargate.</p>
   *                              </note>
   */
  ipcMode?: IpcMode | string;

  /**
   * <p>The configuration details for the App Mesh proxy.</p>
   * 		       <p>For tasks hosted on Amazon EC2 instances, the container instances require at least version
   * 				<code>1.26.0</code> of the container agent and at least version
   * 				<code>1.26.0-1</code> of the <code>ecs-init</code> package to enable a proxy
   * 			configuration. If your container instances are launched from the Amazon ECS-optimized
   * 			AMI version <code>20190301</code> or later, then they contain the required versions of
   * 			the container agent and <code>ecs-init</code>. For more information, see <a href="https://docs.aws.amazon.com/AmazonECS/latest/developerguide/ecs-ami-versions.html">Amazon ECS-optimized AMI versions</a> in the
   * 			<i>Amazon Elastic Container Service Developer Guide</i>.</p>
   */
  proxyConfiguration?: ProxyConfiguration;

  /**
   * <p>The Elastic Inference accelerators to use for the containers in the task.</p>
   */
  inferenceAccelerators?: InferenceAccelerator[];

  /**
   * <p>The amount of ephemeral storage to allocate for the task. This parameter is used to
   * 			expand the total amount of ephemeral storage available, beyond the default amount, for
   * 			tasks hosted on Fargate. For more information, see <a href="https://docs.aws.amazon.com/AmazonECS/latest/userguide/using_data_volumes.html">Fargate task
   * 				storage</a> in the <i>Amazon ECS User Guide for Fargate</i>.</p>
   * 		       <note>
   * 			         <p>This parameter is only supported for tasks hosted on Fargate using platform
   * 				version <code>1.4.0</code> or later.</p>
   * 		       </note>
   */
  ephemeralStorage?: EphemeralStorage;
}

export namespace RegisterTaskDefinitionRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: RegisterTaskDefinitionRequest): any => ({
    ...obj,
  });
}

export interface RegisterTaskDefinitionResponse {
  /**
   * <p>The full description of the registered task definition.</p>
   */
  taskDefinition?: TaskDefinition;

  /**
   * <p>The list of tags associated with the task definition.</p>
   */
  tags?: Tag[];
}

export namespace RegisterTaskDefinitionResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: RegisterTaskDefinitionResponse): any => ({
    ...obj,
  });
}

/**
 * <p>Your Amazon Web Services account has been blocked. For more information, contact <a href="http://aws.amazon.com/contact-us/">
 * 				Amazon Web Services Support</a>.</p>
 */
export interface BlockedException extends __SmithyException, $MetadataBearer {
  name: "BlockedException";
  $fault: "client";
  message?: string;
}

export namespace BlockedException {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: BlockedException): any => ({
    ...obj,
  });
}

export interface RunTaskRequest {
  /**
   * <p>The capacity provider strategy to use for the task.</p>
   * 		       <p>If a <code>capacityProviderStrategy</code> is specified, the <code>launchType</code>
   * 			parameter must be omitted. If no <code>capacityProviderStrategy</code> or
   * 				<code>launchType</code> is specified, the
   * 				<code>defaultCapacityProviderStrategy</code> for the cluster is used.</p>
   * 		       <p>When you use cluster auto scaling, you must specify <code>capacityProviderStrategy</code> and not <code>launchType</code>. </p>
   * 		       <p>A capacity provider strategy may contain a maximum of 6 capacity providers.</p>
   */
  capacityProviderStrategy?: CapacityProviderStrategyItem[];

  /**
   * <p>The short name or full Amazon Resource Name (ARN) of the cluster on which to run your task.
   * 			If you do not specify a cluster, the default cluster is assumed.</p>
   */
  cluster?: string;

  /**
   * <p>The number of instantiations of the specified task to place on your cluster. You can
   * 			specify up to 10 tasks per call.</p>
   */
  count?: number;

  /**
   * <p>Specifies whether to enable Amazon ECS managed tags for the task. For more information, see
   * 				<a href="https://docs.aws.amazon.com/AmazonECS/latest/developerguide/ecs-using-tags.html">Tagging Your Amazon ECS
   * 				Resources</a> in the <i>Amazon Elastic Container Service Developer Guide</i>.</p>
   */
  enableECSManagedTags?: boolean;

  /**
   * <p>Whether or not to enable the execute command functionality for the containers in this
   * 			task. If <code>true</code>, this enables execute command functionality on all containers
   * 			in the task.</p>
   */
  enableExecuteCommand?: boolean;

  /**
   * <p>The name of the task group to associate with the task. The default value is the family
   * 			name of the task definition (for example, <code>family:my-family-name</code>).</p>
   */
  group?: string;

  /**
   * <p>The infrastructure on which to run your standalone task. For more information, see
   * 				<a href="https://docs.aws.amazon.com/AmazonECS/latest/developerguide/launch_types.html">Amazon ECS launch types</a> in the <i>Amazon Elastic Container Service Developer Guide</i>.</p>
   * 		       <p>The <code>FARGATE</code> launch type runs your tasks on Fargate On-Demand
   * 			infrastructure.</p>
   * 		       <note>
   * 			         <p>Fargate Spot infrastructure is available for use but a capacity provider
   * 				strategy must be used. For more information, see <a href="https://docs.aws.amazon.com/AmazonECS/latest/userguide/fargate-capacity-providers.html">Fargate capacity providers</a> in the
   * 					<i>Amazon ECS User Guide for Fargate</i>.</p>
   * 		       </note>
   * 		       <p>The <code>EC2</code> launch type runs your tasks on Amazon EC2 instances registered to your
   * 			cluster.</p>
   * 		       <p>The <code>EXTERNAL</code> launch type runs your tasks on your on-premise server or
   * 			virtual machine (VM) capacity registered to your cluster.</p>
   * 		       <p>A task can use either a launch type or a capacity provider strategy. If a
   * 				<code>launchType</code> is specified, the <code>capacityProviderStrategy</code>
   * 			parameter must be omitted.</p>
   * 		       <p>When you use cluster auto scaling, you must specify <code>capacityProviderStrategy</code> and not <code>launchType</code>. </p>
   */
  launchType?: LaunchType | string;

  /**
   * <p>The network configuration for the task. This parameter is required for task
   * 			definitions that use the <code>awsvpc</code> network mode to receive their own elastic
   * 			network interface, and it is not supported for other network modes. For more
   * 			information, see <a href="https://docs.aws.amazon.com/AmazonECS/latest/developerguide/task-networking.html">Task networking</a>
   * 			in the <i>Amazon Elastic Container Service Developer Guide</i>.</p>
   */
  networkConfiguration?: NetworkConfiguration;

  /**
   * <p>A list of container overrides in JSON format that specify the name of a container in
   * 			the specified task definition and the overrides it should receive. You can override the
   * 			default command for a container (that is specified in the task definition or Docker
   * 			image) with a <code>command</code> override. You can also override existing environment
   * 			variables (that are specified in the task definition or Docker image) on a container or
   * 			add new environment variables to it with an <code>environment</code> override.</p>
   * 		       <p>A total of 8192 characters are allowed for overrides. This limit includes the JSON
   * 			formatting characters of the override structure.</p>
   */
  overrides?: TaskOverride;

  /**
   * <p>An array of placement constraint objects to use for the task. You can specify up to 10
   * 			constraints per task (including constraints in the task definition and those specified
   * 			at runtime).</p>
   */
  placementConstraints?: PlacementConstraint[];

  /**
   * <p>The placement strategy objects to use for the task. You can specify a maximum of 5
   * 			strategy rules per task.</p>
   */
  placementStrategy?: PlacementStrategy[];

  /**
   * <p>The platform version the task should use. A platform version is only specified for
   * 			tasks hosted on Fargate. If one is not specified, the <code>LATEST</code>
   * 			platform version is used by default. For more information, see <a href="https://docs.aws.amazon.com/AmazonECS/latest/developerguide/platform_versions.html">Fargate platform versions</a> in the
   * 			<i>Amazon Elastic Container Service Developer Guide</i>.</p>
   */
  platformVersion?: string;

  /**
   * <p>Specifies whether to propagate the tags from the task definition to the task. If no
   * 			value is specified, the tags are not propagated. Tags can only be propagated to the task
   * 			during task creation. To add tags to a task after task creation, use the <a>TagResource</a> API action.</p>
   * 		       <note>
   * 			         <p>An error will be received if you specify the <code>SERVICE</code> option when
   * 				running a task.</p>
   * 		       </note>
   */
  propagateTags?: PropagateTags | string;

  /**
   * <p>The reference ID to use for the task. The reference ID can have a maximum length of
   * 			1024 characters.</p>
   */
  referenceId?: string;

  /**
   * <p>An optional tag specified when a task is started. For example, if you automatically
   * 			trigger a task to run a batch process job, you could apply a unique identifier for that
   * 			job to your task with the <code>startedBy</code> parameter. You can then identify which
   * 			tasks belong to that job by filtering the results of a <a>ListTasks</a> call
   * 			with the <code>startedBy</code> value. Up to 36 letters (uppercase and lowercase),
   * 			numbers, hyphens, and underscores are allowed.</p>
   * 		       <p>If a task is started by an Amazon ECS service, then the <code>startedBy</code> parameter
   * 			contains the deployment ID of the service that starts it.</p>
   */
  startedBy?: string;

  /**
   * <p>The metadata that you apply to the task to help you categorize and organize them. Each
   * 			tag consists of a key and an optional value, both of which you define.</p>
   * 		       <p>The following basic restrictions apply to tags:</p>
   *         <ul>
   *             <li>
   *                 <p>Maximum number of tags per resource - 50</p>
   *             </li>
   *             <li>
   *                 <p>For each resource, each tag key must be unique, and each tag key can have only
   *                     one value.</p>
   *             </li>
   *             <li>
   *                 <p>Maximum key length - 128 Unicode characters in UTF-8</p>
   *             </li>
   *             <li>
   *                 <p>Maximum value length - 256 Unicode characters in UTF-8</p>
   *             </li>
   *             <li>
   *                 <p>If your tagging schema is used across multiple services and resources,
   *                     remember that other services may have restrictions on allowed characters.
   *                     Generally allowed characters are: letters, numbers, and spaces representable in
   *                     UTF-8, and the following characters: + - = . _ : / @.</p>
   *             </li>
   *             <li>
   *                 <p>Tag keys and values are case-sensitive.</p>
   *             </li>
   *             <li>
   *                 <p>Do not use <code>aws:</code>, <code>AWS:</code>, or any upper or lowercase
   *                     combination of such as a prefix for either keys or values as it is reserved for
   *                     Amazon Web Services use. You cannot edit or delete tag keys or values with this prefix. Tags with
   *                     this prefix do not count against your tags per resource limit.</p>
   *             </li>
   *          </ul>
   */
  tags?: Tag[];

  /**
   * <p>The <code>family</code> and <code>revision</code> (<code>family:revision</code>) or
   * 			full ARN of the task definition to run. If a <code>revision</code> is not specified,
   * 			the latest <code>ACTIVE</code> revision is used.</p>
   */
  taskDefinition: string | undefined;
}

export namespace RunTaskRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: RunTaskRequest): any => ({
    ...obj,
  });
}

export interface RunTaskResponse {
  /**
   * <p>A full description of the tasks that were run. The tasks that were successfully placed
   * 			on your cluster are described here.</p>
   */
  tasks?: Task[];

  /**
   * <p>Any failures associated with the call.</p>
   */
  failures?: Failure[];
}

export namespace RunTaskResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: RunTaskResponse): any => ({
    ...obj,
  });
}

export interface StartTaskRequest {
  /**
   * <p>The short name or full Amazon Resource Name (ARN) of the cluster on which to start your task.
   * 			If you do not specify a cluster, the default cluster is assumed.</p>
   */
  cluster?: string;

  /**
   * <p>The container instance IDs or full ARN entries for the container instances on which
   * 			you would like to place your task. You can specify up to 10 container instances.</p>
   */
  containerInstances: string[] | undefined;

  /**
   * <p>Specifies whether to enable Amazon ECS managed tags for the task. For more information, see
   * 				<a href="https://docs.aws.amazon.com/AmazonECS/latest/developerguide/ecs-using-tags.html">Tagging Your Amazon ECS
   * 				Resources</a> in the <i>Amazon Elastic Container Service Developer Guide</i>.</p>
   */
  enableECSManagedTags?: boolean;

  /**
   * <p>Whether or not the execute command functionality is enabled for the task. If
   * 				<code>true</code>, this enables execute command functionality on all containers in
   * 			the task.</p>
   */
  enableExecuteCommand?: boolean;

  /**
   * <p>The name of the task group to associate with the task. The default value is the family
   * 			name of the task definition (for example, family:my-family-name).</p>
   */
  group?: string;

  /**
   * <p>The VPC subnet and security group configuration for tasks that receive their own
   *             elastic network interface by using the <code>awsvpc</code> networking mode.</p>
   */
  networkConfiguration?: NetworkConfiguration;

  /**
   * <p>A list of container overrides in JSON format that specify the name of a container in
   * 			the specified task definition and the overrides it should receive. You can override the
   * 			default command for a container (that is specified in the task definition or Docker
   * 			image) with a <code>command</code> override. You can also override existing environment
   * 			variables (that are specified in the task definition or Docker image) on a container or
   * 			add new environment variables to it with an <code>environment</code> override.</p>
   * 		       <note>
   * 			         <p>A total of 8192 characters are allowed for overrides. This limit includes the JSON
   * 				formatting characters of the override structure.</p>
   * 		       </note>
   */
  overrides?: TaskOverride;

  /**
   * <p>Specifies whether to propagate the tags from the task definition or the service to the
   * 			task. If no value is specified, the tags are not propagated.</p>
   */
  propagateTags?: PropagateTags | string;

  /**
   * <p>The reference ID to use for the task.</p>
   */
  referenceId?: string;

  /**
   * <p>An optional tag specified when a task is started. For example, if you automatically
   * 			trigger a task to run a batch process job, you could apply a unique identifier for that
   * 			job to your task with the <code>startedBy</code> parameter. You can then identify which
   * 			tasks belong to that job by filtering the results of a <a>ListTasks</a> call
   * 			with the <code>startedBy</code> value. Up to 36 letters (uppercase and lowercase),
   * 			numbers, hyphens, and underscores are allowed.</p>
   * 		       <p>If a task is started by an Amazon ECS service, then the <code>startedBy</code> parameter
   * 			contains the deployment ID of the service that starts it.</p>
   */
  startedBy?: string;

  /**
   * <p>The metadata that you apply to the task to help you categorize and organize them. Each
   * 			tag consists of a key and an optional value, both of which you define.</p>
   * 		       <p>The following basic restrictions apply to tags:</p>
   *         <ul>
   *             <li>
   *                 <p>Maximum number of tags per resource - 50</p>
   *             </li>
   *             <li>
   *                 <p>For each resource, each tag key must be unique, and each tag key can have only
   *                     one value.</p>
   *             </li>
   *             <li>
   *                 <p>Maximum key length - 128 Unicode characters in UTF-8</p>
   *             </li>
   *             <li>
   *                 <p>Maximum value length - 256 Unicode characters in UTF-8</p>
   *             </li>
   *             <li>
   *                 <p>If your tagging schema is used across multiple services and resources,
   *                     remember that other services may have restrictions on allowed characters.
   *                     Generally allowed characters are: letters, numbers, and spaces representable in
   *                     UTF-8, and the following characters: + - = . _ : / @.</p>
   *             </li>
   *             <li>
   *                 <p>Tag keys and values are case-sensitive.</p>
   *             </li>
   *             <li>
   *                 <p>Do not use <code>aws:</code>, <code>AWS:</code>, or any upper or lowercase
   *                     combination of such as a prefix for either keys or values as it is reserved for
   *                     Amazon Web Services use. You cannot edit or delete tag keys or values with this prefix. Tags with
   *                     this prefix do not count against your tags per resource limit.</p>
   *             </li>
   *          </ul>
   */
  tags?: Tag[];

  /**
   * <p>The <code>family</code> and <code>revision</code> (<code>family:revision</code>) or
   * 			full ARN of the task definition to start. If a <code>revision</code> is not specified,
   * 			the latest <code>ACTIVE</code> revision is used.</p>
   */
  taskDefinition: string | undefined;
}

export namespace StartTaskRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: StartTaskRequest): any => ({
    ...obj,
  });
}

export interface StartTaskResponse {
  /**
   * <p>A full description of the tasks that were started. Each task that was successfully
   * 			placed on your container instances is described.</p>
   */
  tasks?: Task[];

  /**
   * <p>Any failures associated with the call.</p>
   */
  failures?: Failure[];
}

export namespace StartTaskResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: StartTaskResponse): any => ({
    ...obj,
  });
}

export interface StopTaskRequest {
  /**
   * <p>The short name or full Amazon Resource Name (ARN) of the cluster that hosts the task to stop.
   * 			If you do not specify a cluster, the default cluster is assumed.</p>
   */
  cluster?: string;

  /**
   * <p>The task ID or full Amazon Resource Name (ARN) of the task to stop.</p>
   */
  task: string | undefined;

  /**
   * <p>An optional message specified when a task is stopped. For example, if you are using a
   * 			custom scheduler, you can use this parameter to specify the reason for stopping the task
   * 			here, and the message appears in subsequent <a>DescribeTasks</a> API
   * 			operations on this task. Up to 255 characters are allowed in this message.</p>
   */
  reason?: string;
}

export namespace StopTaskRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: StopTaskRequest): any => ({
    ...obj,
  });
}

export interface StopTaskResponse {
  /**
   * <p>The task that was stopped.</p>
   */
  task?: Task;
}

export namespace StopTaskResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: StopTaskResponse): any => ({
    ...obj,
  });
}

/**
 * <p>An object representing a change in state for a task attachment.</p>
 */
export interface AttachmentStateChange {
  /**
   * <p>The Amazon Resource Name (ARN) of the attachment.</p>
   */
  attachmentArn: string | undefined;

  /**
   * <p>The status of the attachment.</p>
   */
  status: string | undefined;
}

export namespace AttachmentStateChange {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: AttachmentStateChange): any => ({
    ...obj,
  });
}

export interface SubmitAttachmentStateChangesRequest {
  /**
   * <p>The short name or full ARN of the cluster that hosts the container instance the
   * 			attachment belongs to.</p>
   */
  cluster?: string;

  /**
   * <p>Any attachments associated with the state change request.</p>
   */
  attachments: AttachmentStateChange[] | undefined;
}

export namespace SubmitAttachmentStateChangesRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: SubmitAttachmentStateChangesRequest): any => ({
    ...obj,
  });
}

export interface SubmitAttachmentStateChangesResponse {
  /**
   * <p>Acknowledgement of the state change.</p>
   */
  acknowledgment?: string;
}

export namespace SubmitAttachmentStateChangesResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: SubmitAttachmentStateChangesResponse): any => ({
    ...obj,
  });
}

export interface SubmitContainerStateChangeRequest {
  /**
   * <p>The short name or full ARN of the cluster that hosts the container.</p>
   */
  cluster?: string;

  /**
   * <p>The task ID or full Amazon Resource Name (ARN) of the task that hosts the container.</p>
   */
  task?: string;

  /**
   * <p>The name of the container.</p>
   */
  containerName?: string;

  /**
   * <p>The ID of the Docker container.</p>
   */
  runtimeId?: string;

  /**
   * <p>The status of the state change request.</p>
   */
  status?: string;

  /**
   * <p>The exit code returned for the state change request.</p>
   */
  exitCode?: number;

  /**
   * <p>The reason for the state change request.</p>
   */
  reason?: string;

  /**
   * <p>The network bindings of the container.</p>
   */
  networkBindings?: NetworkBinding[];
}

export namespace SubmitContainerStateChangeRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: SubmitContainerStateChangeRequest): any => ({
    ...obj,
  });
}

export interface SubmitContainerStateChangeResponse {
  /**
   * <p>Acknowledgement of the state change.</p>
   */
  acknowledgment?: string;
}

export namespace SubmitContainerStateChangeResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: SubmitContainerStateChangeResponse): any => ({
    ...obj,
  });
}

/**
 * <p>An object representing a change in state for a container.</p>
 */
export interface ContainerStateChange {
  /**
   * <p>The name of the container.</p>
   */
  containerName?: string;

  /**
   * <p>The container image SHA 256 digest.</p>
   */
  imageDigest?: string;

  /**
   * <p>The ID of the Docker container.</p>
   */
  runtimeId?: string;

  /**
   * <p>The exit code for the container, if the state change is a result of the container
   * 			exiting.</p>
   */
  exitCode?: number;

  /**
   * <p>Any network bindings associated with the container.</p>
   */
  networkBindings?: NetworkBinding[];

  /**
   * <p>The reason for the state change.</p>
   */
  reason?: string;

  /**
   * <p>The status of the container.</p>
   */
  status?: string;
}

export namespace ContainerStateChange {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ContainerStateChange): any => ({
    ...obj,
  });
}

/**
 * <p>An object representing a change in state for a managed agent.</p>
 */
export interface ManagedAgentStateChange {
  /**
   * <p>The name of the container associated with the managed agent.</p>
   */
  containerName: string | undefined;

  /**
   * <p>The name of the managed agent.</p>
   */
  managedAgentName: ManagedAgentName | string | undefined;

  /**
   * <p>The status of the managed agent.</p>
   */
  status: string | undefined;

  /**
   * <p>The reason for the status of the managed agent.</p>
   */
  reason?: string;
}

export namespace ManagedAgentStateChange {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ManagedAgentStateChange): any => ({
    ...obj,
  });
}

export interface SubmitTaskStateChangeRequest {
  /**
   * <p>The short name or full Amazon Resource Name (ARN) of the cluster that hosts the task.</p>
   */
  cluster?: string;

  /**
   * <p>The task ID or full ARN of the task in the state change request.</p>
   */
  task?: string;

  /**
   * <p>The status of the state change request.</p>
   */
  status?: string;

  /**
   * <p>The reason for the state change request.</p>
   */
  reason?: string;

  /**
   * <p>Any containers associated with the state change request.</p>
   */
  containers?: ContainerStateChange[];

  /**
   * <p>Any attachments associated with the state change request.</p>
   */
  attachments?: AttachmentStateChange[];

  /**
   * <p>The details for the managed agent associated with the task.</p>
   */
  managedAgents?: ManagedAgentStateChange[];

  /**
   * <p>The Unix timestamp for when the container image pull began.</p>
   */
  pullStartedAt?: Date;

  /**
   * <p>The Unix timestamp for when the container image pull completed.</p>
   */
  pullStoppedAt?: Date;

  /**
   * <p>The Unix timestamp for when the task execution stopped.</p>
   */
  executionStoppedAt?: Date;
}

export namespace SubmitTaskStateChangeRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: SubmitTaskStateChangeRequest): any => ({
    ...obj,
  });
}

export interface SubmitTaskStateChangeResponse {
  /**
   * <p>Acknowledgement of the state change.</p>
   */
  acknowledgment?: string;
}

export namespace SubmitTaskStateChangeResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: SubmitTaskStateChangeResponse): any => ({
    ...obj,
  });
}

/**
 * <p>The specified resource could not be found.</p>
 */
export interface ResourceNotFoundException extends __SmithyException, $MetadataBearer {
  name: "ResourceNotFoundException";
  $fault: "client";
  message?: string;
}

export namespace ResourceNotFoundException {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ResourceNotFoundException): any => ({
    ...obj,
  });
}

export interface TagResourceRequest {
  /**
   * <p>The Amazon Resource Name (ARN) of the resource to which to add tags. Currently, the supported resources
   * 			are Amazon ECS capacity providers, tasks, services, task definitions, clusters, and container
   * 			instances.</p>
   */
  resourceArn: string | undefined;

  /**
   * <p>The tags to add to the resource. A tag is an array of key-value pairs.</p>
   * 		       <p>The following basic restrictions apply to tags:</p>
   *         <ul>
   *             <li>
   *                 <p>Maximum number of tags per resource - 50</p>
   *             </li>
   *             <li>
   *                 <p>For each resource, each tag key must be unique, and each tag key can have only
   *                     one value.</p>
   *             </li>
   *             <li>
   *                 <p>Maximum key length - 128 Unicode characters in UTF-8</p>
   *             </li>
   *             <li>
   *                 <p>Maximum value length - 256 Unicode characters in UTF-8</p>
   *             </li>
   *             <li>
   *                 <p>If your tagging schema is used across multiple services and resources,
   *                     remember that other services may have restrictions on allowed characters.
   *                     Generally allowed characters are: letters, numbers, and spaces representable in
   *                     UTF-8, and the following characters: + - = . _ : / @.</p>
   *             </li>
   *             <li>
   *                 <p>Tag keys and values are case-sensitive.</p>
   *             </li>
   *             <li>
   *                 <p>Do not use <code>aws:</code>, <code>AWS:</code>, or any upper or lowercase
   *                     combination of such as a prefix for either keys or values as it is reserved for
   *                     Amazon Web Services use. You cannot edit or delete tag keys or values with this prefix. Tags with
   *                     this prefix do not count against your tags per resource limit.</p>
   *             </li>
   *          </ul>
   */
  tags: Tag[] | undefined;
}

export namespace TagResourceRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: TagResourceRequest): any => ({
    ...obj,
  });
}

export interface TagResourceResponse {}

export namespace TagResourceResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: TagResourceResponse): any => ({
    ...obj,
  });
}

export interface UntagResourceRequest {
  /**
   * <p>The Amazon Resource Name (ARN) of the resource from which to delete tags. Currently, the supported
   * 			resources are Amazon ECS capacity providers, tasks, services, task definitions, clusters, and
   * 			container instances.</p>
   */
  resourceArn: string | undefined;

  /**
   * <p>The keys of the tags to be removed.</p>
   */
  tagKeys: string[] | undefined;
}

export namespace UntagResourceRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: UntagResourceRequest): any => ({
    ...obj,
  });
}

export interface UntagResourceResponse {}

export namespace UntagResourceResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: UntagResourceResponse): any => ({
    ...obj,
  });
}

/**
 * <p>The details of the Auto Scaling group capacity provider to update.</p>
 */
export interface AutoScalingGroupProviderUpdate {
  /**
   * <p>The managed scaling settings for the Auto Scaling group capacity provider.</p>
   */
  managedScaling?: ManagedScaling;

  /**
   * <p>The managed termination protection setting to use for the Auto Scaling group capacity
   * 			provider. This determines whether the Auto Scaling group has managed termination
   * 			protection.</p>
   * 		       <important>
   * 			         <p>When using managed termination protection, managed scaling must also be used
   * 				otherwise managed termination protection will not work.</p>
   * 		       </important>
   * 		       <p>When managed termination protection is enabled, Amazon ECS prevents the Amazon EC2 instances in
   * 			an Auto Scaling group that contain tasks from being terminated during a scale-in action.
   * 			The Auto Scaling group and each instance in the Auto Scaling group must have instance
   * 			protection from scale-in actions enabled as well. For more information, see <a href="https://docs.aws.amazon.com/autoscaling/ec2/userguide/as-instance-termination.html#instance-protection">Instance Protection</a> in the <i>Auto Scaling User Guide</i>.</p>
   * 		       <p>When managed termination protection is disabled, your Amazon EC2 instances are not
   * 			protected from termination when the Auto Scaling group scales in.</p>
   */
  managedTerminationProtection?: ManagedTerminationProtection | string;
}

export namespace AutoScalingGroupProviderUpdate {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: AutoScalingGroupProviderUpdate): any => ({
    ...obj,
  });
}

export interface UpdateCapacityProviderRequest {
  /**
   * <p>The name of the capacity provider to update.</p>
   */
  name: string | undefined;

  /**
   * <p>An object representing the parameters to update for the Auto Scaling group capacity
   * 			provider.</p>
   */
  autoScalingGroupProvider: AutoScalingGroupProviderUpdate | undefined;
}

export namespace UpdateCapacityProviderRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: UpdateCapacityProviderRequest): any => ({
    ...obj,
  });
}

export interface UpdateCapacityProviderResponse {
  /**
   * <p>Details about the capacity provider.</p>
   */
  capacityProvider?: CapacityProvider;
}

export namespace UpdateCapacityProviderResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: UpdateCapacityProviderResponse): any => ({
    ...obj,
  });
}

export interface UpdateClusterRequest {
  /**
   * <p>The name of the cluster to modify the settings for.</p>
   */
  cluster: string | undefined;

  /**
   * <p>The cluster settings for your cluster.</p>
   */
  settings?: ClusterSetting[];

  /**
   * <p>The execute command configuration for the cluster.</p>
   */
  configuration?: ClusterConfiguration;
}

export namespace UpdateClusterRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: UpdateClusterRequest): any => ({
    ...obj,
  });
}

export interface UpdateClusterResponse {
  /**
   * <p>Details about the cluster.</p>
   */
  cluster?: Cluster;
}

export namespace UpdateClusterResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: UpdateClusterResponse): any => ({
    ...obj,
  });
}

export interface UpdateClusterSettingsRequest {
  /**
   * <p>The name of the cluster to modify the settings for.</p>
   */
  cluster: string | undefined;

  /**
   * <p>The setting to use by default for a cluster. This parameter is used to enable CloudWatch
   * 			Container Insights for a cluster. If this value is specified, it will override the
   * 				<code>containerInsights</code> value set with <a>PutAccountSetting</a> or
   * 				<a>PutAccountSettingDefault</a>.</p>
   */
  settings: ClusterSetting[] | undefined;
}

export namespace UpdateClusterSettingsRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: UpdateClusterSettingsRequest): any => ({
    ...obj,
  });
}

export interface UpdateClusterSettingsResponse {
  /**
   * <p>Details about the cluster</p>
   */
  cluster?: Cluster;
}

export namespace UpdateClusterSettingsResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: UpdateClusterSettingsResponse): any => ({
    ...obj,
  });
}

/**
 * <p>Amazon ECS is unable to determine the current version of the Amazon ECS container agent on the
 * 			container instance and does not have enough information to proceed with an update. This
 * 			could be because the agent running on the container instance is an older or custom
 * 			version that does not use our version information.</p>
 */
export interface MissingVersionException extends __SmithyException, $MetadataBearer {
  name: "MissingVersionException";
  $fault: "client";
  message?: string;
}

export namespace MissingVersionException {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: MissingVersionException): any => ({
    ...obj,
  });
}

/**
 * <p>There is no update available for this Amazon ECS container agent. This could be because the
 * 			agent is already running the latest version, or it is so old that there is no update
 * 			path to the current version.</p>
 */
export interface NoUpdateAvailableException extends __SmithyException, $MetadataBearer {
  name: "NoUpdateAvailableException";
  $fault: "client";
  message?: string;
}

export namespace NoUpdateAvailableException {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: NoUpdateAvailableException): any => ({
    ...obj,
  });
}

export interface UpdateContainerAgentRequest {
  /**
   * <p>The short name or full Amazon Resource Name (ARN) of the cluster that your container instance is
   * 			running on. If you do not specify a cluster, the default cluster is assumed.</p>
   */
  cluster?: string;

  /**
   * <p>The container instance ID or full ARN entries for the container instance on which
   * 			you would like to update the Amazon ECS container agent.</p>
   */
  containerInstance: string | undefined;
}

export namespace UpdateContainerAgentRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: UpdateContainerAgentRequest): any => ({
    ...obj,
  });
}

export interface UpdateContainerAgentResponse {
  /**
   * <p>The container instance for which the container agent was updated.</p>
   */
  containerInstance?: ContainerInstance;
}

export namespace UpdateContainerAgentResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: UpdateContainerAgentResponse): any => ({
    ...obj,
  });
}

export interface UpdateContainerInstancesStateRequest {
  /**
   * <p>The short name or full Amazon Resource Name (ARN) of the cluster that hosts the container instance to
   * 			update. If you do not specify a cluster, the default cluster is assumed.</p>
   */
  cluster?: string;

  /**
   * <p>A list of container instance IDs or full ARN entries.</p>
   */
  containerInstances: string[] | undefined;

  /**
   * <p>The container instance state with which to update the container instance. The only
   * 			valid values for this action are <code>ACTIVE</code> and <code>DRAINING</code>. A
   * 			container instance can only be updated to <code>DRAINING</code> status once it has
   * 			reached an <code>ACTIVE</code> state. If a container instance is in
   * 				<code>REGISTERING</code>, <code>DEREGISTERING</code>, or
   * 				<code>REGISTRATION_FAILED</code> state you can describe the container instance but
   * 			will be unable to update the container instance state.</p>
   */
  status: ContainerInstanceStatus | string | undefined;
}

export namespace UpdateContainerInstancesStateRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: UpdateContainerInstancesStateRequest): any => ({
    ...obj,
  });
}

export interface UpdateContainerInstancesStateResponse {
  /**
   * <p>The list of container instances.</p>
   */
  containerInstances?: ContainerInstance[];

  /**
   * <p>Any failures associated with the call.</p>
   */
  failures?: Failure[];
}

export namespace UpdateContainerInstancesStateResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: UpdateContainerInstancesStateResponse): any => ({
    ...obj,
  });
}

export interface UpdateServiceRequest {
  /**
   * <p>The short name or full Amazon Resource Name (ARN) of the cluster that your service is running on.
   * 			If you do not specify a cluster, the default cluster is assumed.</p>
   */
  cluster?: string;

  /**
   * <p>The name of the service to update.</p>
   */
  service: string | undefined;

  /**
   * <p>The number of instantiations of the task to place and keep running in your
   * 			service.</p>
   */
  desiredCount?: number;

  /**
   * <p>The <code>family</code> and <code>revision</code> (<code>family:revision</code>) or
   * 			full ARN of the task definition to run in your service. If a <code>revision</code> is
   * 			not specified, the latest <code>ACTIVE</code> revision is used. If you modify the task
   * 			definition with <code>UpdateService</code>, Amazon ECS spawns a task with the new version of
   * 			the task definition and then stops an old task after the new version is running.</p>
   */
  taskDefinition?: string;

  /**
   * <p>The capacity provider strategy to update the service to use.</p>
   * 		       <p>If the service is using the default capacity provider strategy for the cluster, the
   * 			service can be updated to use one or more capacity providers as opposed to the default
   * 			capacity provider strategy. However, when a service is using a capacity provider
   * 			strategy that is not the default capacity provider strategy, the service cannot be
   * 			updated to use the cluster's default capacity provider strategy.</p>
   * 		       <p>A capacity provider strategy consists of one or more capacity providers along with the
   * 				<code>base</code> and <code>weight</code> to assign to them. A capacity provider
   * 			must be associated with the cluster to be used in a capacity provider strategy. The
   * 				<a>PutClusterCapacityProviders</a> API is used to associate a capacity
   * 			provider with a cluster. Only capacity providers with an <code>ACTIVE</code> or
   * 				<code>UPDATING</code> status can be used.</p>
   * 		       <p>If specifying a capacity provider that uses an Auto Scaling group, the capacity
   * 			provider must already be created. New capacity providers can be created with the <a>CreateCapacityProvider</a> API operation.</p>
   * 		       <p>To use a Fargate capacity provider, specify either the <code>FARGATE</code> or
   * 				<code>FARGATE_SPOT</code> capacity providers. The Fargate capacity providers are
   * 			available to all accounts and only need to be associated with a cluster to be
   * 			used.</p>
   * 		       <p>The <a>PutClusterCapacityProviders</a> API operation is used to update the
   * 			list of available capacity providers for a cluster after the cluster is created.</p>
   * 		       <p></p>
   */
  capacityProviderStrategy?: CapacityProviderStrategyItem[];

  /**
   * <p>Optional deployment parameters that control how many tasks run during the deployment
   * 			and the ordering of stopping and starting tasks.</p>
   */
  deploymentConfiguration?: DeploymentConfiguration;

  /**
   * <p>An object representing the network configuration for the service.</p>
   */
  networkConfiguration?: NetworkConfiguration;

  /**
   * <p>An array of task placement constraint objects to update the service to use. If no
   * 			value is specified, the existing placement constraints for the service will remain
   * 			unchanged. If this value is specified, it will override any existing placement
   * 			constraints defined for the service. To remove all existing placement constraints,
   * 			specify an empty array.</p>
   * 		       <p>You can specify a maximum of 10 constraints per task (this limit includes constraints
   * 			in the task definition and those specified at runtime).</p>
   */
  placementConstraints?: PlacementConstraint[];

  /**
   * <p>The task placement strategy objects to update the service to use. If no value is
   * 			specified, the existing placement strategy for the service will remain unchanged. If
   * 			this value is specified, it will override the existing placement strategy defined for
   * 			the service. To remove an existing placement strategy, specify an empty object.</p>
   * 		       <p>You can specify a maximum of five strategy rules per service.</p>
   */
  placementStrategy?: PlacementStrategy[];

  /**
   * <p>The platform version on which your tasks in the service are running. A platform
   * 			version is only specified for tasks using the Fargate launch type. If a
   * 			platform version is not specified, the <code>LATEST</code> platform version is used by
   * 			default. For more information, see <a href="https://docs.aws.amazon.com/AmazonECS/latest/developerguide/platform_versions.html">Fargate Platform
   * 				Versions</a> in the <i>Amazon Elastic Container Service Developer Guide</i>.</p>
   */
  platformVersion?: string;

  /**
   * <p>Whether to force a new deployment of the service. Deployments are not forced by
   * 			default. You can use this option to trigger a new deployment with no service definition
   * 			changes. For example, you can update a service's tasks to use a newer Docker image with
   * 			the same image/tag combination (<code>my_image:latest</code>) or to roll Fargate tasks
   * 			onto a newer platform version.</p>
   */
  forceNewDeployment?: boolean;

  /**
   * <p>The period of time, in seconds, that the Amazon ECS service scheduler should ignore
   * 			unhealthy Elastic Load Balancing target health checks after a task has first started. This is only valid
   * 			if your service is configured to use a load balancer. If your service's tasks take a
   * 			while to start and respond to Elastic Load Balancing health checks, you can specify a health check grace
   * 			period of up to 2,147,483,647 seconds. During that time, the Amazon ECS service
   * 			scheduler ignores the Elastic Load Balancing health check status. This grace period can prevent the ECS
   * 			service scheduler from marking tasks as unhealthy and stopping them before they have
   * 			time to come up.</p>
   */
  healthCheckGracePeriodSeconds?: number;

  /**
   * <p>If <code>true</code>, this enables execute command functionality on all task
   * 			containers.</p>
   * 		       <p>If you do not want to override the value that was set when the service was created,
   * 			you can set this to <code>null</code> when performing this action.</p>
   */
  enableExecuteCommand?: boolean;
}

export namespace UpdateServiceRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: UpdateServiceRequest): any => ({
    ...obj,
  });
}

export interface UpdateServiceResponse {
  /**
   * <p>The full description of your service following the update call.</p>
   */
  service?: Service;
}

export namespace UpdateServiceResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: UpdateServiceResponse): any => ({
    ...obj,
  });
}

export interface UpdateServicePrimaryTaskSetRequest {
  /**
   * <p>The short name or full Amazon Resource Name (ARN) of the cluster that hosts the service that the task
   * 			set exists in.</p>
   */
  cluster: string | undefined;

  /**
   * <p>The short name or full Amazon Resource Name (ARN) of the service that the task set exists in.</p>
   */
  service: string | undefined;

  /**
   * <p>The short name or full Amazon Resource Name (ARN) of the task set to set as the primary task set in the
   * 			deployment.</p>
   */
  primaryTaskSet: string | undefined;
}

export namespace UpdateServicePrimaryTaskSetRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: UpdateServicePrimaryTaskSetRequest): any => ({
    ...obj,
  });
}

export interface UpdateServicePrimaryTaskSetResponse {
  /**
   * <p>Details about the task set.</p>
   */
  taskSet?: TaskSet;
}

export namespace UpdateServicePrimaryTaskSetResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: UpdateServicePrimaryTaskSetResponse): any => ({
    ...obj,
  });
}

export interface UpdateTaskSetRequest {
  /**
   * <p>The short name or full Amazon Resource Name (ARN) of the cluster that hosts the service that the task
   * 			set exists in.</p>
   */
  cluster: string | undefined;

  /**
   * <p>The short name or full Amazon Resource Name (ARN) of the service that the task set exists in.</p>
   */
  service: string | undefined;

  /**
   * <p>The short name or full Amazon Resource Name (ARN) of the task set to update.</p>
   */
  taskSet: string | undefined;

  /**
   * <p>A floating-point percentage of the desired number of tasks to place and keep running
   * 			in the task set.</p>
   */
  scale: Scale | undefined;
}

export namespace UpdateTaskSetRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: UpdateTaskSetRequest): any => ({
    ...obj,
  });
}

export interface UpdateTaskSetResponse {
  /**
   * <p>Details about the task set.</p>
   */
  taskSet?: TaskSet;
}

export namespace UpdateTaskSetResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: UpdateTaskSetResponse): any => ({
    ...obj,
  });
}
