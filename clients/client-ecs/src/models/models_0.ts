// smithy-typescript generated code
import { ExceptionOptionType as __ExceptionOptionType, SENSITIVE_STRING } from "@smithy/smithy-client";

import { DocumentType as __DocumentType } from "@smithy/types";

import { ECSServiceException as __BaseException } from "./ECSServiceException";

/**
 * <p>You don't have authorization to perform the requested action.</p>
 * @public
 */
export class AccessDeniedException extends __BaseException {
  readonly name: "AccessDeniedException" = "AccessDeniedException";
  readonly $fault: "client" = "client";
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<AccessDeniedException, __BaseException>) {
    super({
      name: "AccessDeniedException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, AccessDeniedException.prototype);
  }
}

/**
 * <p>The advanced settings for a load balancer used in blue/green deployments. Specify the
 *          alternate target group, listener rules, and IAM role required for traffic shifting during
 *          blue/green deployments. For more information, see <a href="https://docs.aws.amazon.com/AmazonECS/latest/developerguide/blue-green-deployment-implementation.html">Required resources for Amazon ECS
 *             blue/green deployments</a> in the <i>Amazon Elastic Container Service Developer Guide</i>.</p>
 * @public
 */
export interface AdvancedConfiguration {
  /**
   * <p>The Amazon Resource Name (ARN) of the alternate target group for Amazon ECS blue/green deployments. </p>
   * @public
   */
  alternateTargetGroupArn?: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) that identifies the production listener rule for routing production traffic.</p>
   * @public
   */
  productionListenerRule?: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) that identifies the test listener rule or listener for routing test traffic.</p>
   * @public
   */
  testListenerRule?: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the IAM role that grants Amazon ECS permission to call the Elastic Load Balancing APIs for you.</p>
   * @public
   */
  roleArn?: string | undefined;
}

/**
 * @public
 * @enum
 */
export const AgentUpdateStatus = {
  FAILED: "FAILED",
  PENDING: "PENDING",
  STAGED: "STAGED",
  STAGING: "STAGING",
  UPDATED: "UPDATED",
  UPDATING: "UPDATING",
} as const;

/**
 * @public
 */
export type AgentUpdateStatus = (typeof AgentUpdateStatus)[keyof typeof AgentUpdateStatus];

/**
 * <p>These errors are usually caused by a client action. This client action might be using
 * 			an action or resource on behalf of a user that doesn't have permissions to use the
 * 			action or resource. Or, it might be specifying an identifier that isn't valid.</p>
 * @public
 */
export class ClientException extends __BaseException {
  readonly name: "ClientException" = "ClientException";
  readonly $fault: "client" = "client";
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<ClientException, __BaseException>) {
    super({
      name: "ClientException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, ClientException.prototype);
  }
}

/**
 * @public
 * @enum
 */
export const ManagedDraining = {
  DISABLED: "DISABLED",
  ENABLED: "ENABLED",
} as const;

/**
 * @public
 */
export type ManagedDraining = (typeof ManagedDraining)[keyof typeof ManagedDraining];

/**
 * @public
 * @enum
 */
export const ManagedScalingStatus = {
  DISABLED: "DISABLED",
  ENABLED: "ENABLED",
} as const;

/**
 * @public
 */
export type ManagedScalingStatus = (typeof ManagedScalingStatus)[keyof typeof ManagedScalingStatus];

/**
 * <p>The managed scaling settings for the Auto Scaling group capacity provider.</p>
 *          <p>When managed scaling is turned on, Amazon ECS manages the scale-in and scale-out actions of
 * 			the Auto Scaling group. Amazon ECS manages a target tracking scaling policy using an Amazon ECS
 * 			managed CloudWatch metric with the specified <code>targetCapacity</code> value as the target
 * 			value for the metric. For more information, see <a href="https://docs.aws.amazon.com/AmazonECS/latest/developerguide/asg-capacity-providers.html#asg-capacity-providers-managed-scaling">Using managed scaling</a> in the <i>Amazon Elastic Container Service Developer Guide</i>.</p>
 *          <p>If managed scaling is off, the user must manage the scaling of the Auto Scaling
 * 			group.</p>
 * @public
 */
export interface ManagedScaling {
  /**
   * <p>Determines whether to use managed scaling for the capacity provider.</p>
   * @public
   */
  status?: ManagedScalingStatus | undefined;

  /**
   * <p>The target capacity utilization as a percentage for the capacity provider. The
   * 			specified value must be greater than <code>0</code> and less than or equal to
   * 				<code>100</code>. For example, if you want the capacity provider to maintain 10%
   * 			spare capacity, then that means the utilization is 90%, so use a
   * 				<code>targetCapacity</code> of <code>90</code>. The default value of
   * 				<code>100</code> percent results in the Amazon EC2 instances in your Auto Scaling group
   * 			being completely used.</p>
   * @public
   */
  targetCapacity?: number | undefined;

  /**
   * <p>The minimum number of Amazon EC2 instances that Amazon ECS will scale out at one time. The scale
   * 			in process is not affected by this parameter If this parameter is omitted, the default
   * 			value of <code>1</code> is used.</p>
   *          <p>When additional capacity is required, Amazon ECS will scale up the minimum scaling step
   * 			size even if the actual demand is less than the minimum scaling step size.</p>
   *          <p>If you use a capacity provider with an Auto Scaling group configured with more than
   * 			one Amazon EC2 instance type or Availability Zone, Amazon ECS will scale up by the exact minimum
   * 			scaling step size value and will ignore both the maximum scaling step size as well as
   * 			the capacity demand.</p>
   * @public
   */
  minimumScalingStepSize?: number | undefined;

  /**
   * <p>The maximum number of Amazon EC2 instances that Amazon ECS will scale out at one time. If this
   * 			parameter is omitted, the default value of <code>10000</code> is used.</p>
   * @public
   */
  maximumScalingStepSize?: number | undefined;

  /**
   * <p>The period of time, in seconds, after a newly launched Amazon EC2 instance can contribute
   * 			to CloudWatch metrics for Auto Scaling group. If this parameter is omitted, the default value
   * 			of <code>300</code> seconds is used.</p>
   * @public
   */
  instanceWarmupPeriod?: number | undefined;
}

/**
 * @public
 * @enum
 */
export const ManagedTerminationProtection = {
  DISABLED: "DISABLED",
  ENABLED: "ENABLED",
} as const;

/**
 * @public
 */
export type ManagedTerminationProtection =
  (typeof ManagedTerminationProtection)[keyof typeof ManagedTerminationProtection];

/**
 * <p>The details of the Auto Scaling group for the capacity provider.</p>
 * @public
 */
export interface AutoScalingGroupProvider {
  /**
   * <p>The Amazon Resource Name (ARN) that identifies the Auto Scaling group, or the Auto Scaling group
   * 			name.</p>
   * @public
   */
  autoScalingGroupArn: string | undefined;

  /**
   * <p>The managed scaling settings for the Auto Scaling group capacity provider.</p>
   * @public
   */
  managedScaling?: ManagedScaling | undefined;

  /**
   * <p>The managed termination protection setting to use for the Auto Scaling group capacity
   * 			provider. This determines whether the Auto Scaling group has managed termination
   * 			protection. The default is off.</p>
   *          <important>
   *             <p>When using managed termination protection, managed scaling must also be used
   * 				otherwise managed termination protection doesn't work.</p>
   *          </important>
   *          <p>When managed termination protection is on, Amazon ECS prevents the Amazon EC2 instances in an
   * 			Auto Scaling group that contain tasks from being terminated during a scale-in action.
   * 			The Auto Scaling group and each instance in the Auto Scaling group must have instance
   * 			protection from scale-in actions on as well. For more information, see <a href="https://docs.aws.amazon.com/autoscaling/ec2/userguide/as-instance-termination.html#instance-protection">Instance Protection</a> in the <i>Auto Scaling User Guide</i>.</p>
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
 * <p>The metadata that you apply to a resource to help you categorize and organize them.
 * 			Each tag consists of a key and an optional value. You define them.</p>
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
export interface Tag {
  /**
   * <p>One part of a key-value pair that make up a tag. A <code>key</code> is a general label
   * 			that acts like a category for more specific tag values.</p>
   * @public
   */
  key?: string | undefined;

  /**
   * <p>The optional part of a key-value pair that make up a tag. A <code>value</code> acts as
   * 			a descriptor within a tag category (key).</p>
   * @public
   */
  value?: string | undefined;
}

/**
 * @public
 */
export interface CreateCapacityProviderRequest {
  /**
   * <p>The name of the capacity provider. Up to 255 characters are allowed. They include
   * 			letters (both upper and lowercase letters), numbers, underscores (_), and hyphens (-).
   * 			The name can't be prefixed with "<code>aws</code>", "<code>ecs</code>", or
   * 				"<code>fargate</code>".</p>
   * @public
   */
  name: string | undefined;

  /**
   * <p>The details of the Auto Scaling group for the capacity provider.</p>
   * @public
   */
  autoScalingGroupProvider: AutoScalingGroupProvider | undefined;

  /**
   * <p>The metadata that you apply to the capacity provider to categorize and organize them
   * 			more conveniently. Each tag consists of a key and an optional value. You define both of
   * 			them.</p>
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
 * @enum
 */
export const CapacityProviderStatus = {
  ACTIVE: "ACTIVE",
  INACTIVE: "INACTIVE",
} as const;

/**
 * @public
 */
export type CapacityProviderStatus = (typeof CapacityProviderStatus)[keyof typeof CapacityProviderStatus];

/**
 * @public
 * @enum
 */
export const CapacityProviderUpdateStatus = {
  DELETE_COMPLETE: "DELETE_COMPLETE",
  DELETE_FAILED: "DELETE_FAILED",
  DELETE_IN_PROGRESS: "DELETE_IN_PROGRESS",
  UPDATE_COMPLETE: "UPDATE_COMPLETE",
  UPDATE_FAILED: "UPDATE_FAILED",
  UPDATE_IN_PROGRESS: "UPDATE_IN_PROGRESS",
} as const;

/**
 * @public
 */
export type CapacityProviderUpdateStatus =
  (typeof CapacityProviderUpdateStatus)[keyof typeof CapacityProviderUpdateStatus];

/**
 * <p>The details for a capacity provider.</p>
 * @public
 */
export interface CapacityProvider {
  /**
   * <p>The Amazon Resource Name (ARN) that identifies the capacity provider.</p>
   * @public
   */
  capacityProviderArn?: string | undefined;

  /**
   * <p>The name of the capacity provider.</p>
   * @public
   */
  name?: string | undefined;

  /**
   * <p>The current status of the capacity provider. Only capacity providers in an
   * 				<code>ACTIVE</code> state can be used in a cluster. When a capacity provider is
   * 			successfully deleted, it has an <code>INACTIVE</code> status.</p>
   * @public
   */
  status?: CapacityProviderStatus | undefined;

  /**
   * <p>The Auto Scaling group settings for the capacity provider.</p>
   * @public
   */
  autoScalingGroupProvider?: AutoScalingGroupProvider | undefined;

  /**
   * <p>The update status of the capacity provider. The following are the possible states that
   * 			is returned.</p>
   *          <dl>
   *             <dt>DELETE_IN_PROGRESS</dt>
   *             <dd>
   *                <p>The capacity provider is in the process of being deleted.</p>
   *             </dd>
   *             <dt>DELETE_COMPLETE</dt>
   *             <dd>
   *                <p>The capacity provider was successfully deleted and has an
   * 							<code>INACTIVE</code> status.</p>
   *             </dd>
   *             <dt>DELETE_FAILED</dt>
   *             <dd>
   *                <p>The capacity provider can't be deleted. The update status reason provides
   * 						further details about why the delete failed.</p>
   *             </dd>
   *          </dl>
   * @public
   */
  updateStatus?: CapacityProviderUpdateStatus | undefined;

  /**
   * <p>The update status reason. This provides further details about the update status for
   * 			the capacity provider.</p>
   * @public
   */
  updateStatusReason?: string | undefined;

  /**
   * <p>The metadata that you apply to the capacity provider to help you categorize and
   * 			organize it. Each tag consists of a key and an optional value. You define both.</p>
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
export interface CreateCapacityProviderResponse {
  /**
   * <p>The full description of the new capacity provider.</p>
   * @public
   */
  capacityProvider?: CapacityProvider | undefined;
}

/**
 * <p>The specified parameter isn't valid. Review the available parameters for the API
 * 			request.</p>
 *          <p>For more information about service event errors, see <a href="https://docs.aws.amazon.com/AmazonECS/latest/developerguide/service-event-messages-list.html">Amazon ECS service
 * 				event messages</a>. </p>
 * @public
 */
export class InvalidParameterException extends __BaseException {
  readonly name: "InvalidParameterException" = "InvalidParameterException";
  readonly $fault: "client" = "client";
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<InvalidParameterException, __BaseException>) {
    super({
      name: "InvalidParameterException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, InvalidParameterException.prototype);
  }
}

/**
 * <p>The limit for the resource was exceeded.</p>
 * @public
 */
export class LimitExceededException extends __BaseException {
  readonly name: "LimitExceededException" = "LimitExceededException";
  readonly $fault: "client" = "client";
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<LimitExceededException, __BaseException>) {
    super({
      name: "LimitExceededException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, LimitExceededException.prototype);
  }
}

/**
 * <p>These errors are usually caused by a server issue.</p>
 * @public
 */
export class ServerException extends __BaseException {
  readonly name: "ServerException" = "ServerException";
  readonly $fault: "server" = "server";
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<ServerException, __BaseException>) {
    super({
      name: "ServerException",
      $fault: "server",
      ...opts,
    });
    Object.setPrototypeOf(this, ServerException.prototype);
  }
}

/**
 * <p>There's already a current Amazon ECS container agent update in progress on the container
 * 			instance that's specified. If the container agent becomes disconnected while it's in a
 * 			transitional stage, such as <code>PENDING</code> or <code>STAGING</code>, the update
 * 			process can get stuck in that state. However, when the agent reconnects, it resumes
 * 			where it stopped previously.</p>
 * @public
 */
export class UpdateInProgressException extends __BaseException {
  readonly name: "UpdateInProgressException" = "UpdateInProgressException";
  readonly $fault: "client" = "client";
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<UpdateInProgressException, __BaseException>) {
    super({
      name: "UpdateInProgressException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, UpdateInProgressException.prototype);
  }
}

/**
 * <p>The log configuration for the results of the execute command actions. The logs can be
 * 			sent to CloudWatch Logs or an Amazon S3 bucket.</p>
 * @public
 */
export interface ExecuteCommandLogConfiguration {
  /**
   * <p>The name of the CloudWatch log group to send logs to.</p>
   *          <note>
   *             <p>The CloudWatch log group must already be created.</p>
   *          </note>
   * @public
   */
  cloudWatchLogGroupName?: string | undefined;

  /**
   * <p>Determines whether to use encryption on the CloudWatch logs. If not specified,
   * 			encryption will be off.</p>
   * @public
   */
  cloudWatchEncryptionEnabled?: boolean | undefined;

  /**
   * <p>The name of the S3 bucket to send logs to.</p>
   *          <note>
   *             <p>The S3 bucket must already be created.</p>
   *          </note>
   * @public
   */
  s3BucketName?: string | undefined;

  /**
   * <p>Determines whether to use encryption on the S3 logs. If not specified, encryption is
   * 			not used.</p>
   * @public
   */
  s3EncryptionEnabled?: boolean | undefined;

  /**
   * <p>An optional folder in the S3 bucket to place logs in.</p>
   * @public
   */
  s3KeyPrefix?: string | undefined;
}

/**
 * @public
 * @enum
 */
export const ExecuteCommandLogging = {
  DEFAULT: "DEFAULT",
  NONE: "NONE",
  OVERRIDE: "OVERRIDE",
} as const;

/**
 * @public
 */
export type ExecuteCommandLogging = (typeof ExecuteCommandLogging)[keyof typeof ExecuteCommandLogging];

/**
 * <p>The details of the execute command configuration.</p>
 * @public
 */
export interface ExecuteCommandConfiguration {
  /**
   * <p>Specify an Key Management Service key ID to encrypt the data between the local client
   * 			and the container.</p>
   * @public
   */
  kmsKeyId?: string | undefined;

  /**
   * <p>The log setting to use for redirecting logs for your execute command results. The
   * 			following log settings are available.</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>NONE</code>: The execute command session is not logged.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>DEFAULT</code>: The <code>awslogs</code> configuration in the task
   * 					definition is used. If no logging parameter is specified, it defaults to this
   * 					value. If no <code>awslogs</code> log driver is configured in the task
   * 					definition, the output won't be logged.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>OVERRIDE</code>: Specify the logging details as a part of
   * 						<code>logConfiguration</code>. If the <code>OVERRIDE</code> logging option
   * 					is specified, the <code>logConfiguration</code> is required.</p>
   *             </li>
   *          </ul>
   * @public
   */
  logging?: ExecuteCommandLogging | undefined;

  /**
   * <p>The log configuration for the results of the execute command actions. The logs can be
   * 			sent to CloudWatch Logs or an Amazon S3 bucket. When <code>logging=OVERRIDE</code> is
   * 			specified, a <code>logConfiguration</code> must be provided.</p>
   * @public
   */
  logConfiguration?: ExecuteCommandLogConfiguration | undefined;
}

/**
 * <p>The managed storage configuration for the cluster.</p>
 * @public
 */
export interface ManagedStorageConfiguration {
  /**
   * <p>Specify a Key Management Service key ID to encrypt Amazon ECS managed storage.</p>
   *          <p> When you specify a <code>kmsKeyId</code>, Amazon ECS uses the key to encrypt data volumes
   * 			managed by Amazon ECS that are attached to tasks in the cluster. The following data volumes
   * 			are managed by Amazon ECS: Amazon EBS. For more information about encryption of Amazon EBS volumes
   * 			attached to Amazon ECS tasks, see <a href="https://docs.aws.amazon.com/AmazonECS/latest/developerguide/ebs-kms-encryption.html">Encrypt data stored in Amazon EBS volumes for Amazon ECS</a> in the
   * 			<i>Amazon Elastic Container Service Developer Guide</i>.</p>
   *          <p>The key must be a single Region key.</p>
   * @public
   */
  kmsKeyId?: string | undefined;

  /**
   * <p>Specify the Key Management Service key ID for Fargate ephemeral storage.</p>
   *          <p>When you specify a <code>fargateEphemeralStorageKmsKeyId</code>, Amazon Web Services Fargate uses
   * 			the key to encrypt data at rest in ephemeral storage. For more information about
   * 			Fargate ephemeral storage encryption, see <a href="https://docs.aws.amazon.com/AmazonECS/latest/developerguide/fargate-storage-encryption.html">Customer managed keys for Amazon Web Services Fargate ephemeral storage for
   * 				Amazon ECS</a> in the <i>Amazon Elastic Container Service Developer Guide</i>.</p>
   *          <p>The key must be a single Region key.</p>
   * @public
   */
  fargateEphemeralStorageKmsKeyId?: string | undefined;
}

/**
 * <p>The execute command and managed storage configuration for the cluster.</p>
 * @public
 */
export interface ClusterConfiguration {
  /**
   * <p>The details of the execute command configuration.</p>
   * @public
   */
  executeCommandConfiguration?: ExecuteCommandConfiguration | undefined;

  /**
   * <p>The details of the managed storage configuration.</p>
   * @public
   */
  managedStorageConfiguration?: ManagedStorageConfiguration | undefined;
}

/**
 * <p>The details of a capacity provider strategy. A capacity provider strategy can be set
 * 			when using the <a href="https://docs.aws.amazon.com/AmazonECS/latest/APIReference/API_RunTask.html">RunTask</a>or <a href="https://docs.aws.amazon.com/AmazonECS/latest/APIReference/API_CreateCluster.html">CreateCluster</a> APIs or as the default capacity provider strategy for a
 * 			cluster with the <code>CreateCluster</code> API.</p>
 *          <p>Only capacity providers that are already associated with a cluster and have an
 * 				<code>ACTIVE</code> or <code>UPDATING</code> status can be used in a capacity
 * 			provider strategy. The <a href="https://docs.aws.amazon.com/AmazonECS/latest/APIReference/API_PutClusterCapacityProviders.html">PutClusterCapacityProviders</a> API is used to associate a capacity provider
 * 			with a cluster.</p>
 *          <p>If specifying a capacity provider that uses an Auto Scaling group, the capacity
 * 			provider must already be created. New Auto Scaling group capacity providers can be
 * 			created with the <a href="https://docs.aws.amazon.com/AmazonECS/latest/APIReference/API_CreateClusterCapacityProvider.html">CreateClusterCapacityProvider</a> API operation.</p>
 *          <p>To use a Fargate capacity provider, specify either the <code>FARGATE</code> or
 * 				<code>FARGATE_SPOT</code> capacity providers. The Fargate capacity providers are
 * 			available to all accounts and only need to be associated with a cluster to be used in a
 * 			capacity provider strategy.</p>
 *          <p>With <code>FARGATE_SPOT</code>, you can run interruption tolerant tasks at a rate
 * 			that's discounted compared to the <code>FARGATE</code> price. <code>FARGATE_SPOT</code>
 * 			runs tasks on spare compute capacity. When Amazon Web Services needs the capacity back, your tasks are
 * 			interrupted with a two-minute warning. <code>FARGATE_SPOT</code> supports Linux tasks
 * 			with the X86_64 architecture on platform version 1.3.0 or later.
 * 				<code>FARGATE_SPOT</code> supports Linux tasks with the ARM64 architecture on
 * 			platform version 1.4.0 or later.</p>
 *          <p>A capacity provider strategy can contain a maximum of 20 capacity providers.</p>
 * @public
 */
export interface CapacityProviderStrategyItem {
  /**
   * <p>The short name of the capacity provider.</p>
   * @public
   */
  capacityProvider: string | undefined;

  /**
   * <p>The <i>weight</i> value designates the relative percentage of the total
   * 			number of tasks launched that should use the specified capacity provider. The
   * 				<code>weight</code> value is taken into consideration after the <code>base</code>
   * 			value, if defined, is satisfied.</p>
   *          <p>If no <code>weight</code> value is specified, the default value of <code>0</code> is
   * 			used. When multiple capacity providers are specified within a capacity provider
   * 			strategy, at least one of the capacity providers must have a weight value greater than
   * 			zero and any capacity providers with a weight of <code>0</code> can't be used to place
   * 			tasks. If you specify multiple capacity providers in a strategy that all have a weight
   * 			of <code>0</code>, any <code>RunTask</code> or <code>CreateService</code> actions using
   * 			the capacity provider strategy will fail.</p>
   *          <p>An example scenario for using weights is defining a strategy that contains two
   * 			capacity providers and both have a weight of <code>1</code>, then when the
   * 				<code>base</code> is satisfied, the tasks will be split evenly across the two
   * 			capacity providers. Using that same logic, if you specify a weight of <code>1</code> for
   * 				<i>capacityProviderA</i> and a weight of <code>4</code> for
   * 				<i>capacityProviderB</i>, then for every one task that's run using
   * 				<i>capacityProviderA</i>, four tasks would use
   * 				<i>capacityProviderB</i>.</p>
   * @public
   */
  weight?: number | undefined;

  /**
   * <p>The <i>base</i> value designates how many tasks, at a minimum, to run on
   * 			the specified capacity provider. Only one capacity provider in a capacity provider
   * 			strategy can have a <i>base</i> defined. If no value is specified, the
   * 			default value of <code>0</code> is used.</p>
   * @public
   */
  base?: number | undefined;
}

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
export interface ClusterServiceConnectDefaultsRequest {
  /**
   * <p>The namespace name or full Amazon Resource Name (ARN) of the Cloud Map namespace that's used when you create a service and don't specify
   * 			a Service Connect configuration. The namespace name can include up to 1024 characters.
   * 			The name is case-sensitive. The name can't include greater than (>), less than
   * 			(<), double quotation marks ("), or slash (/).</p>
   *          <p>If you enter an existing namespace name or ARN, then that namespace will be used.
   * 			Any namespace type is supported. The namespace must be in this account and this Amazon Web Services
   * 			Region.</p>
   *          <p>If you enter a new name, a Cloud Map namespace will be created. Amazon ECS creates a
   * 			Cloud Map namespace with the "API calls" method of instance discovery only. This instance
   * 			discovery method is the "HTTP" namespace type in the Command Line Interface. Other types of instance
   * 			discovery aren't used by Service Connect.</p>
   *          <p>If you update the cluster with an empty string <code>""</code> for the namespace name,
   * 			the cluster configuration for Service Connect is removed. Note that the namespace will
   * 			remain in Cloud Map and must be deleted separately.</p>
   *          <p>For more information about Cloud Map, see <a href="https://docs.aws.amazon.com/cloud-map/latest/dg/working-with-services.html">Working with Services</a>
   * 			in the <i>Cloud Map Developer Guide</i>.</p>
   * @public
   */
  namespace: string | undefined;
}

/**
 * @public
 * @enum
 */
export const ClusterSettingName = {
  CONTAINER_INSIGHTS: "containerInsights",
} as const;

/**
 * @public
 */
export type ClusterSettingName = (typeof ClusterSettingName)[keyof typeof ClusterSettingName];

/**
 * <p>The settings to use when creating a cluster. This parameter is used to turn on CloudWatch
 * 			Container Insights with enhanced observability or CloudWatch Container Insights for a
 * 			cluster.</p>
 *          <p>Container Insights with enhanced observability provides all the Container Insights
 * 			metrics, plus additional task and container metrics. This version supports enhanced
 * 			observability for Amazon ECS clusters using the Amazon EC2 and Fargate launch types. After you
 * 			configure Container Insights with enhanced observability on Amazon ECS, Container Insights
 * 			auto-collects detailed infrastructure telemetry from the cluster level down to the
 * 			container level in your environment and displays these critical performance data in
 * 			curated dashboards removing the heavy lifting in observability set-up. </p>
 *          <p>For more information, see <a href="https://docs.aws.amazon.com/AmazonECS/latest/developerguide/cloudwatch-container-insights.html">Monitor
 * 				Amazon ECS containers using Container Insights with enhanced observability</a> in the
 * 			<i>Amazon Elastic Container Service Developer Guide</i>.</p>
 * @public
 */
export interface ClusterSetting {
  /**
   * <p>The name of the cluster setting. The value is <code>containerInsights</code> .</p>
   * @public
   */
  name?: ClusterSettingName | undefined;

  /**
   * <p>The value to set for the cluster setting. The supported values are
   * 				<code>enhanced</code>, <code>enabled</code>, and <code>disabled</code>. </p>
   *          <p>To use Container Insights with enhanced observability, set the
   * 				<code>containerInsights</code> account setting to <code>enhanced</code>.</p>
   *          <p>To use Container Insights, set the <code>containerInsights</code> account setting to
   * 				<code>enabled</code>.</p>
   *          <p>If a cluster value is specified, it will override the <code>containerInsights</code>
   * 			value set with <a href="https://docs.aws.amazon.com/AmazonECS/latest/APIReference/API_PutAccountSetting.html">PutAccountSetting</a> or <a href="https://docs.aws.amazon.com/AmazonECS/latest/APIReference/API_PutAccountSettingDefault.html">PutAccountSettingDefault</a>.</p>
   * @public
   */
  value?: string | undefined;
}

/**
 * @public
 */
export interface CreateClusterRequest {
  /**
   * <p>The name of your cluster. If you don't specify a name for your cluster, you create a
   * 			cluster that's named <code>default</code>. Up to 255 letters (uppercase and lowercase), numbers, underscores, and hyphens are allowed. </p>
   * @public
   */
  clusterName?: string | undefined;

  /**
   * <p>The metadata that you apply to the cluster to help you categorize and organize them.
   * 			Each tag consists of a key and an optional value. You define both.</p>
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
   * <p>The setting to use when creating a cluster. This parameter is used to turn on CloudWatch
   * 			Container Insights for a cluster. If this value is specified, it overrides the
   * 				<code>containerInsights</code> value set with <a href="https://docs.aws.amazon.com/AmazonECS/latest/APIReference/API_PutAccountSetting.html">PutAccountSetting</a> or <a href="https://docs.aws.amazon.com/AmazonECS/latest/APIReference/API_PutAccountSettingDefault.html">PutAccountSettingDefault</a>.</p>
   * @public
   */
  settings?: ClusterSetting[] | undefined;

  /**
   * <p>The <code>execute</code> command configuration for the cluster.</p>
   * @public
   */
  configuration?: ClusterConfiguration | undefined;

  /**
   * <p>The short name of one or more capacity providers to associate with the cluster. A
   * 			capacity provider must be associated with a cluster before it can be included as part of
   * 			the default capacity provider strategy of the cluster or used in a capacity provider
   * 			strategy when calling the <a href="https://docs.aws.amazon.com/AmazonECS/latest/APIReference/API_CreateService.html">CreateService</a> or
   * 				<a href="https://docs.aws.amazon.com/AmazonECS/latest/APIReference/API_RunTask.html">RunTask</a> actions.</p>
   *          <p>If specifying a capacity provider that uses an Auto Scaling group, the capacity
   * 			provider must be created but not associated with another cluster. New Auto Scaling group
   * 			capacity providers can be created with the <a href="https://docs.aws.amazon.com/AmazonECS/latest/APIReference/API_CreateCapacityProvider.html">CreateCapacityProvider</a> API operation.</p>
   *          <p>To use a Fargate capacity provider, specify either the <code>FARGATE</code> or
   * 				<code>FARGATE_SPOT</code> capacity providers. The Fargate capacity providers are
   * 			available to all accounts and only need to be associated with a cluster to be
   * 			used.</p>
   *          <p>The <a href="https://docs.aws.amazon.com/AmazonECS/latest/APIReference/API_PutCapacityProvider.html">PutCapacityProvider</a> API operation is used to update the list of available
   * 			capacity providers for a cluster after the cluster is created.</p>
   * @public
   */
  capacityProviders?: string[] | undefined;

  /**
   * <p>The capacity provider strategy to set as the default for the cluster. After a default
   * 			capacity provider strategy is set for a cluster, when you call the <a href="https://docs.aws.amazon.com/AmazonECS/latest/APIReference/API_CreateService.html">CreateService</a> or <a href="https://docs.aws.amazon.com/AmazonECS/latest/APIReference/API_RunTask.html">RunTask</a> APIs with no
   * 			capacity provider strategy or launch type specified, the default capacity provider
   * 			strategy for the cluster is used.</p>
   *          <p>If a default capacity provider strategy isn't defined for a cluster when it was
   * 			created, it can be defined later with the <a href="https://docs.aws.amazon.com/AmazonECS/latest/APIReference/API_PutClusterCapacityProviders.html">PutClusterCapacityProviders</a> API operation.</p>
   * @public
   */
  defaultCapacityProviderStrategy?: CapacityProviderStrategyItem[] | undefined;

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
 * <p>A key-value pair object.</p>
 * @public
 */
export interface KeyValuePair {
  /**
   * <p>The name of the key-value pair. For environment variables, this is the name of the
   * 			environment variable.</p>
   * @public
   */
  name?: string | undefined;

  /**
   * <p>The value of the key-value pair. For environment variables, this is the value of the
   * 			environment variable.</p>
   * @public
   */
  value?: string | undefined;
}

/**
 * <p>An object representing a container instance or task attachment.</p>
 * @public
 */
export interface Attachment {
  /**
   * <p>The unique identifier for the attachment.</p>
   * @public
   */
  id?: string | undefined;

  /**
   * <p>The type of the attachment, such as <code>ElasticNetworkInterface</code>,
   * 				<code>Service Connect</code>, and <code>AmazonElasticBlockStorage</code>.</p>
   * @public
   */
  type?: string | undefined;

  /**
   * <p> The status of the attachment. Valid values are <code>PRECREATED</code>,
   * 				<code>CREATED</code>, <code>ATTACHING</code>, <code>ATTACHED</code>,
   * 				<code>DETACHING</code>, <code>DETACHED</code>, <code>DELETED</code>, and
   * 				<code>FAILED</code>.</p>
   * @public
   */
  status?: string | undefined;

  /**
   * <p>Details of the attachment.</p>
   *          <p>For elastic network interfaces, this includes the network interface ID, the MAC
   * 			address, the subnet ID, and the private IPv4 address.</p>
   *          <p>For Service Connect services, this includes <code>portName</code>,
   * 				<code>clientAliases</code>, <code>discoveryName</code>, and
   * 				<code>ingressPortOverride</code>.</p>
   *          <p>For Elastic Block Storage, this includes <code>roleArn</code>,
   * 				<code>deleteOnTermination</code>, <code>volumeName</code>, <code>volumeId</code>,
   * 			and <code>statusReason</code> (only when the attachment fails to create or
   * 			attach).</p>
   * @public
   */
  details?: KeyValuePair[] | undefined;
}

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
export interface ClusterServiceConnectDefaults {
  /**
   * <p>The namespace name or full Amazon Resource Name (ARN) of the Cloud Map namespace. When you create a service and don't specify a
   * 			Service Connect configuration, this namespace is used.</p>
   * @public
   */
  namespace?: string | undefined;
}

/**
 * <p>A regional grouping of one or more container instances where you can run task
 * 			requests. Each account receives a default cluster the first time you use the Amazon ECS
 * 			service, but you may also create other clusters. Clusters may contain more than one
 * 			instance type simultaneously.</p>
 * @public
 */
export interface Cluster {
  /**
   * <p>The Amazon Resource Name (ARN) that identifies the cluster. For more information about the ARN
   * 			format, see <a href="https://docs.aws.amazon.com/AmazonECS/latest/developerguide/ecs-account-settings.html#ecs-resource-ids">Amazon Resource Name (ARN)</a> in the <i>Amazon ECS Developer Guide</i>.</p>
   * @public
   */
  clusterArn?: string | undefined;

  /**
   * <p>A user-generated string that you use to identify your cluster.</p>
   * @public
   */
  clusterName?: string | undefined;

  /**
   * <p>The execute command and managed storage configuration for the cluster.</p>
   * @public
   */
  configuration?: ClusterConfiguration | undefined;

  /**
   * <p>The status of the cluster. The following are the possible states that are
   * 			returned.</p>
   *          <dl>
   *             <dt>ACTIVE</dt>
   *             <dd>
   *                <p>The cluster is ready to accept tasks and if applicable you can register
   * 						container instances with the cluster.</p>
   *             </dd>
   *             <dt>PROVISIONING</dt>
   *             <dd>
   *                <p>The cluster has capacity providers that are associated with it and the
   * 						resources needed for the capacity provider are being created.</p>
   *             </dd>
   *             <dt>DEPROVISIONING</dt>
   *             <dd>
   *                <p>The cluster has capacity providers that are associated with it and the
   * 						resources needed for the capacity provider are being deleted.</p>
   *             </dd>
   *             <dt>FAILED</dt>
   *             <dd>
   *                <p>The cluster has capacity providers that are associated with it and the
   * 						resources needed for the capacity provider have failed to create.</p>
   *             </dd>
   *             <dt>INACTIVE</dt>
   *             <dd>
   *                <p>The cluster has been deleted. Clusters with an <code>INACTIVE</code>
   * 						status may remain discoverable in your account for a period of time.
   * 						However, this behavior is subject to change in the future. We don't
   * 						recommend that you rely on <code>INACTIVE</code> clusters persisting.</p>
   *             </dd>
   *          </dl>
   * @public
   */
  status?: string | undefined;

  /**
   * <p>The number of container instances registered into the cluster. This includes container
   * 			instances in both <code>ACTIVE</code> and <code>DRAINING</code> status.</p>
   * @public
   */
  registeredContainerInstancesCount?: number | undefined;

  /**
   * <p>The number of tasks in the cluster that are in the <code>RUNNING</code> state.</p>
   * @public
   */
  runningTasksCount?: number | undefined;

  /**
   * <p>The number of tasks in the cluster that are in the <code>PENDING</code> state.</p>
   * @public
   */
  pendingTasksCount?: number | undefined;

  /**
   * <p>The number of services that are running on the cluster in an <code>ACTIVE</code>
   * 			state. You can view these services with <a href="https://docs.aws.amazon.com/AmazonECS/latest/APIReference/API_ListServices.html">PListServices</a>.</p>
   * @public
   */
  activeServicesCount?: number | undefined;

  /**
   * <p>Additional information about your clusters that are separated by launch type. They
   * 			include the following:</p>
   *          <ul>
   *             <li>
   *                <p>runningEC2TasksCount</p>
   *             </li>
   *             <li>
   *                <p>RunningFargateTasksCount</p>
   *             </li>
   *             <li>
   *                <p>pendingEC2TasksCount</p>
   *             </li>
   *             <li>
   *                <p>pendingFargateTasksCount</p>
   *             </li>
   *             <li>
   *                <p>activeEC2ServiceCount</p>
   *             </li>
   *             <li>
   *                <p>activeFargateServiceCount</p>
   *             </li>
   *             <li>
   *                <p>drainingEC2ServiceCount</p>
   *             </li>
   *             <li>
   *                <p>drainingFargateServiceCount</p>
   *             </li>
   *          </ul>
   * @public
   */
  statistics?: KeyValuePair[] | undefined;

  /**
   * <p>The metadata that you apply to the cluster to help you categorize and organize them.
   * 			Each tag consists of a key and an optional value. You define both.</p>
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
   * <p>The settings for the cluster. This parameter indicates whether CloudWatch Container Insights
   * 			is on or off for a cluster.</p>
   * @public
   */
  settings?: ClusterSetting[] | undefined;

  /**
   * <p>The capacity providers associated with the cluster.</p>
   * @public
   */
  capacityProviders?: string[] | undefined;

  /**
   * <p>The default capacity provider strategy for the cluster. When services or tasks are run
   * 			in the cluster with no launch type or capacity provider strategy specified, the default
   * 			capacity provider strategy is used.</p>
   * @public
   */
  defaultCapacityProviderStrategy?: CapacityProviderStrategyItem[] | undefined;

  /**
   * <p>The resources attached to a cluster. When using a capacity provider with a cluster,
   * 			the capacity provider and associated resources are returned as cluster
   * 			attachments.</p>
   * @public
   */
  attachments?: Attachment[] | undefined;

  /**
   * <p>The status of the capacity providers associated with the cluster. The following are
   * 			the states that are returned.</p>
   *          <dl>
   *             <dt>UPDATE_IN_PROGRESS</dt>
   *             <dd>
   *                <p>The available capacity providers for the cluster are updating.</p>
   *             </dd>
   *             <dt>UPDATE_COMPLETE</dt>
   *             <dd>
   *                <p>The capacity providers have successfully updated.</p>
   *             </dd>
   *             <dt>UPDATE_FAILED</dt>
   *             <dd>
   *                <p>The capacity provider updates failed.</p>
   *             </dd>
   *          </dl>
   * @public
   */
  attachmentsStatus?: string | undefined;

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
  serviceConnectDefaults?: ClusterServiceConnectDefaults | undefined;
}

/**
 * @public
 */
export interface CreateClusterResponse {
  /**
   * <p>The full description of your new cluster.</p>
   * @public
   */
  cluster?: Cluster | undefined;
}

/**
 * <p>The specified namespace wasn't found.</p>
 * @public
 */
export class NamespaceNotFoundException extends __BaseException {
  readonly name: "NamespaceNotFoundException" = "NamespaceNotFoundException";
  readonly $fault: "client" = "client";
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<NamespaceNotFoundException, __BaseException>) {
    super({
      name: "NamespaceNotFoundException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, NamespaceNotFoundException.prototype);
  }
}

/**
 * <p>The specified cluster wasn't found. You can view your available clusters with <a href="https://docs.aws.amazon.com/AmazonECS/latest/APIReference/API_ListClusters.html">ListClusters</a>. Amazon ECS clusters are Region specific.</p>
 * @public
 */
export class ClusterNotFoundException extends __BaseException {
  readonly name: "ClusterNotFoundException" = "ClusterNotFoundException";
  readonly $fault: "client" = "client";
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<ClusterNotFoundException, __BaseException>) {
    super({
      name: "ClusterNotFoundException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, ClusterNotFoundException.prototype);
  }
}

/**
 * @public
 * @enum
 */
export const AvailabilityZoneRebalancing = {
  DISABLED: "DISABLED",
  ENABLED: "ENABLED",
} as const;

/**
 * @public
 */
export type AvailabilityZoneRebalancing =
  (typeof AvailabilityZoneRebalancing)[keyof typeof AvailabilityZoneRebalancing];

/**
 * <p>One of the methods which provide a way for you to quickly identify when a deployment
 * 			has failed, and then to optionally roll back the failure to the last working
 * 			deployment.</p>
 *          <p>When the alarms are generated, Amazon ECS sets the service deployment to failed. Set the
 * 			rollback parameter to have Amazon ECS to roll back your service to the last completed
 * 			deployment after a failure.</p>
 *          <p>You can only use the <code>DeploymentAlarms</code> method to detect failures when the
 * 				<code>DeploymentController</code> is set to <code>ECS</code> (rolling
 * 			update).</p>
 *          <p>For more information, see <a href="https://docs.aws.amazon.com/AmazonECS/latest/developerguide/deployment-type-ecs.html">Rolling
 * 				update</a> in the <i>
 *                <i>Amazon Elastic Container Service Developer Guide</i>
 *             </i>.</p>
 * @public
 */
export interface DeploymentAlarms {
  /**
   * <p>One or more CloudWatch alarm names. Use a "," to separate the alarms.</p>
   * @public
   */
  alarmNames: string[] | undefined;

  /**
   * <p>Determines whether to configure Amazon ECS to roll back the service if a service deployment
   * 			fails. If rollback is used, when a service deployment fails, the service is rolled back
   * 			to the last deployment that completed successfully.</p>
   * @public
   */
  rollback: boolean | undefined;

  /**
   * <p>Determines whether to use the CloudWatch alarm option in the service deployment
   * 			process.</p>
   * @public
   */
  enable: boolean | undefined;
}

/**
 * <note>
 *             <p>The deployment circuit breaker can only be used for services using the rolling
 * 				update (<code>ECS</code>) deployment type.</p>
 *          </note>
 *          <p>The <b>deployment circuit breaker</b> determines whether a
 * 			service deployment will fail if the service can't reach a steady state. If it is turned
 * 			on, a service deployment will transition to a failed state and stop launching new tasks.
 * 			You can also configure Amazon ECS to roll back your service to the last completed deployment
 * 			after a failure. For more information, see <a href="https://docs.aws.amazon.com/AmazonECS/latest/developerguide/deployment-type-ecs.html">Rolling
 * 				update</a> in the <i>Amazon Elastic Container Service Developer Guide</i>.</p>
 *          <p>For more information about API failure reasons, see <a href="https://docs.aws.amazon.com/AmazonECS/latest/developerguide/api_failures_messages.html">API failure
 * 				reasons</a> in the <i>Amazon Elastic Container Service Developer Guide</i>.</p>
 * @public
 */
export interface DeploymentCircuitBreaker {
  /**
   * <p>Determines whether to use the deployment circuit breaker logic for the service.</p>
   * @public
   */
  enable: boolean | undefined;

  /**
   * <p>Determines whether to configure Amazon ECS to roll back the service if a service deployment
   * 			fails. If rollback is on, when a service deployment fails, the service is rolled back to
   * 			the last deployment that completed successfully.</p>
   * @public
   */
  rollback: boolean | undefined;
}

/**
 * @public
 * @enum
 */
export const DeploymentLifecycleHookStage = {
  POST_PRODUCTION_TRAFFIC_SHIFT: "POST_PRODUCTION_TRAFFIC_SHIFT",
  POST_SCALE_UP: "POST_SCALE_UP",
  POST_TEST_TRAFFIC_SHIFT: "POST_TEST_TRAFFIC_SHIFT",
  PRE_SCALE_UP: "PRE_SCALE_UP",
  PRODUCTION_TRAFFIC_SHIFT: "PRODUCTION_TRAFFIC_SHIFT",
  RECONCILE_SERVICE: "RECONCILE_SERVICE",
  TEST_TRAFFIC_SHIFT: "TEST_TRAFFIC_SHIFT",
} as const;

/**
 * @public
 */
export type DeploymentLifecycleHookStage =
  (typeof DeploymentLifecycleHookStage)[keyof typeof DeploymentLifecycleHookStage];

/**
 * <p>A deployment lifecycle hook runs custom logic at specific stages of the deployment process. Currently, you can use Lambda functions as hook targets.</p>
 * @public
 */
export interface DeploymentLifecycleHook {
  /**
   * <p>The Amazon Resource Name (ARN) of the hook target. Currently, only Lambda function ARNs are supported.</p>
   *          <p>You must provide this parameter when configuring a deployment lifecycle hook.</p>
   * @public
   */
  hookTargetArn?: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the IAM role that grants Amazon ECS permission to call Lambda functions on your behalf.</p>
   *          <p>For more information, see <a href="https://docs.aws.amazon.com/AmazonECS/latest/developerguide/blue-green-permissions.html">Permissions required
   *             for Lambda functions in Amazon ECS blue/green deployments</a> in the<i>
   *             Amazon Elastic Container Service Developer Guide</i>.</p>
   * @public
   */
  roleArn?: string | undefined;

  /**
   * <p>The lifecycle stages at which to run the hook. Choose from these valid values:</p>
   *          <ul>
   *             <li>
   *                <p>RECONCILE_SERVICE</p>
   *                <p>This stage only happens when you start a new service deployment with more than 1 service revision in an ACTIVE state.</p>
   *                <p>You can use a lifecycle hook for this stage.</p>
   *             </li>
   *             <li>
   *                <p>PRE_SCALE_UP</p>
   *                <p>The green service revision has not started. The blue service revision is handling 100% of the production traffic. There is no test traffic.</p>
   *                <p>You can use a lifecycle hook for this stage.</p>
   *             </li>
   *             <li>
   *                <p>SCALE_UP</p>
   *                <p>The time when the green service revision scales up to 100% and launches new tasks. The green service revision is not serving any traffic at this point.</p>
   *                <p>You can't use a lifecycle hook for this stage.</p>
   *             </li>
   *             <li>
   *                <p>POST_SCALE_UP</p>
   *                <p>The green service revision has started. The blue service revision is handling 100% of the production traffic. There is no test traffic.</p>
   *                <p>You can use a lifecycle hook for this stage.</p>
   *             </li>
   *             <li>
   *                <p>TEST_TRAFFIC_SHIFT</p>
   *                <p>The blue and green service revisions are running. The blue service revision handles 100% of the production traffic. The green service revision is migrating from 0% to 100% of test traffic.</p>
   *                <p>You can use a lifecycle hook for this stage.</p>
   *             </li>
   *             <li>
   *                <p>POST_TEST_TRAFFIC_SHIFT</p>
   *                <p>The test traffic shift is complete. The green service revision handles 100% of the test traffic.</p>
   *                <p>You can use a lifecycle hook for this stage.</p>
   *             </li>
   *             <li>
   *                <p>PRODUCTION_TRAFFIC_SHIFT</p>
   *                <p>Production traffic is shifting to the green service revision. The green service revision is migrating from 0% to 100% of production traffic.</p>
   *                <p>You can use a lifecycle hook for this stage.</p>
   *             </li>
   *             <li>
   *                <p>POST_PRODUCTION_TRAFFIC_SHIFT</p>
   *                <p>The production traffic shift is complete.</p>
   *                <p>Yes</p>
   *             </li>
   *             <li>
   *                <p>BAKE_TIME</p>
   *                <p>The duration when both blue and green service revisions are running simultaneously.</p>
   *                <p>You can't use a lifecycle hook for this stage.</p>
   *             </li>
   *             <li>
   *                <p>CLEAN_UP</p>
   *                <p>The blue service revision has completely scaled down to 0 running tasks. The green service revision is now the production service revision after this stage.</p>
   *                <p>You can't use a lifecycle hook for this stage.</p>
   *             </li>
   *          </ul>
   *          <p>You must provide this parameter when configuring a deployment lifecycle hook.</p>
   * @public
   */
  lifecycleStages?: DeploymentLifecycleHookStage[] | undefined;

  /**
   * <p>Optionally provide details about the hook. Use this field to pass custom parameters to your hook target (such as a Lambda function).</p>
   * @public
   */
  hookDetails?: __DocumentType | undefined;
}

/**
 * @public
 * @enum
 */
export const DeploymentStrategy = {
  BLUE_GREEN: "BLUE_GREEN",
  ROLLING: "ROLLING",
} as const;

/**
 * @public
 */
export type DeploymentStrategy = (typeof DeploymentStrategy)[keyof typeof DeploymentStrategy];

/**
 * <p>Optional deployment parameters that control how many tasks run during a deployment and
 * 			the ordering of stopping and starting tasks.</p>
 * @public
 */
export interface DeploymentConfiguration {
  /**
   * <note>
   *             <p>The deployment circuit breaker can only be used for services using the rolling
   * 				update (<code>ECS</code>) deployment type.</p>
   *          </note>
   *          <p>The <b>deployment circuit breaker</b> determines whether a
   * 			service deployment will fail if the service can't reach a steady state. If you use the
   * 			deployment circuit breaker, a service deployment will transition to a failed state and
   * 			stop launching new tasks. If you use the rollback option, when a service deployment
   * 			fails, the service is rolled back to the last deployment that completed successfully.
   * 			For more information, see <a href="https://docs.aws.amazon.com/AmazonECS/latest/developerguide/deployment-type-ecs.html">Rolling
   * 				update</a> in the <i>Amazon Elastic Container Service Developer
   * 				Guide</i>
   *          </p>
   * @public
   */
  deploymentCircuitBreaker?: DeploymentCircuitBreaker | undefined;

  /**
   * <p>If a service is using the rolling update (<code>ECS</code>) deployment type, the
   * 				<code>maximumPercent</code> parameter represents an upper limit on the number of
   * 			your service's tasks that are allowed in the <code>RUNNING</code> or
   * 				<code>PENDING</code> state during a deployment, as a percentage of the
   * 				<code>desiredCount</code> (rounded down to the nearest integer). This parameter
   * 			enables you to define the deployment batch size. For example, if your service is using
   * 			the <code>REPLICA</code> service scheduler and has a <code>desiredCount</code> of four
   * 			tasks and a <code>maximumPercent</code> value of 200%, the scheduler may start four new
   * 			tasks before stopping the four older tasks (provided that the cluster resources required
   * 			to do this are available). The default <code>maximumPercent</code> value for a service
   * 			using the <code>REPLICA</code> service scheduler is 200%.</p>
   *          <p>The Amazon ECS scheduler uses this parameter to replace unhealthy tasks by starting
   * 			replacement tasks first and then stopping the unhealthy tasks, as long as cluster
   * 			resources for starting replacement tasks are available. For more information about how
   * 			the scheduler replaces unhealthy tasks, see <a href="https://docs.aws.amazon.com/AmazonECS/latest/developerguide/ecs_services.html">Amazon ECS
   * 			services</a>.</p>
   *          <p>If a service is using either the blue/green (<code>CODE_DEPLOY</code>) or
   * 				<code>EXTERNAL</code> deployment types, and tasks in the service use the
   * 			EC2 launch type, the <b>maximum percent</b>
   * 			value is set to the default value. The <b>maximum percent</b>
   * 			value is used to define the upper limit on the number of the tasks in the service that
   * 			remain in the <code>RUNNING</code> state while the container instances are in the
   * 				<code>DRAINING</code> state.</p>
   *          <note>
   *             <p>You can't specify a custom <code>maximumPercent</code> value for a service that
   * 				uses either the blue/green (<code>CODE_DEPLOY</code>) or <code>EXTERNAL</code>
   * 				deployment types and has tasks that use the EC2 launch type.</p>
   *          </note>
   *          <p>If the service uses either the blue/green (<code>CODE_DEPLOY</code>) or
   * 				<code>EXTERNAL</code> deployment types, and the tasks in the service use the
   * 			Fargate launch type, the maximum percent value is not used. The value is
   * 			still returned when describing your service.</p>
   * @public
   */
  maximumPercent?: number | undefined;

  /**
   * <p>If a service is using the rolling update (<code>ECS</code>) deployment type, the
   * 				<code>minimumHealthyPercent</code> represents a lower limit on the number of your
   * 			service's tasks that must remain in the <code>RUNNING</code> state during a deployment,
   * 			as a percentage of the <code>desiredCount</code> (rounded up to the nearest integer).
   * 			This parameter enables you to deploy without using additional cluster capacity. For
   * 			example, if your service has a <code>desiredCount</code> of four tasks and a
   * 				<code>minimumHealthyPercent</code> of 50%, the service scheduler may stop two
   * 			existing tasks to free up cluster capacity before starting two new tasks. </p>
   *          <p> If any tasks are unhealthy and if <code>maximumPercent</code> doesn't allow the Amazon ECS
   * 			scheduler to start replacement tasks, the scheduler stops the unhealthy tasks one-by-one
   * 			— using the <code>minimumHealthyPercent</code> as a constraint — to clear up capacity to
   * 			launch replacement tasks. For more information about how the scheduler replaces
   * 			unhealthy tasks, see <a href="https://docs.aws.amazon.com/AmazonECS/latest/developerguide/ecs_services.html">Amazon ECS services</a> . </p>
   *          <p>For services that <i>do not</i> use a load balancer, the following
   * 			should be noted:</p>
   *          <ul>
   *             <li>
   *                <p>A service is considered healthy if all essential containers within the tasks
   * 					in the service pass their health checks.</p>
   *             </li>
   *             <li>
   *                <p>If a task has no essential containers with a health check defined, the service
   * 					scheduler will wait for 40 seconds after a task reaches a <code>RUNNING</code>
   * 					state before the task is counted towards the minimum healthy percent
   * 					total.</p>
   *             </li>
   *             <li>
   *                <p>If a task has one or more essential containers with a health check defined,
   * 					the service scheduler will wait for the task to reach a healthy status before
   * 					counting it towards the minimum healthy percent total. A task is considered
   * 					healthy when all essential containers within the task have passed their health
   * 					checks. The amount of time the service scheduler can wait for is determined by
   * 					the container health check settings. </p>
   *             </li>
   *          </ul>
   *          <p>For services that <i>do</i> use a load balancer, the following should be
   * 			noted:</p>
   *          <ul>
   *             <li>
   *                <p>If a task has no essential containers with a health check defined, the service
   * 					scheduler will wait for the load balancer target group health check to return a
   * 					healthy status before counting the task towards the minimum healthy percent
   * 					total.</p>
   *             </li>
   *             <li>
   *                <p>If a task has an essential container with a health check defined, the service
   * 					scheduler will wait for both the task to reach a healthy status and the load
   * 					balancer target group health check to return a healthy status before counting
   * 					the task towards the minimum healthy percent total.</p>
   *             </li>
   *          </ul>
   *          <p>The default value for a replica service for <code>minimumHealthyPercent</code> is
   * 			100%. The default <code>minimumHealthyPercent</code> value for a service using the
   * 				<code>DAEMON</code> service schedule is 0% for the CLI, the Amazon Web Services SDKs, and the
   * 			APIs and 50% for the Amazon Web Services Management Console.</p>
   *          <p>The minimum number of healthy tasks during a deployment is the
   * 				<code>desiredCount</code> multiplied by the <code>minimumHealthyPercent</code>/100,
   * 			rounded up to the nearest integer value.</p>
   *          <p>If a service is using either the blue/green (<code>CODE_DEPLOY</code>) or
   * 				<code>EXTERNAL</code> deployment types and is running tasks that use the
   * 			EC2 launch type, the <b>minimum healthy
   * 				percent</b> value is set to the default value. The <b>minimum healthy percent</b> value is used to define the lower limit on the
   * 			number of the tasks in the service that remain in the <code>RUNNING</code> state while
   * 			the container instances are in the <code>DRAINING</code> state.</p>
   *          <note>
   *             <p>You can't specify a custom <code>minimumHealthyPercent</code> value for a service
   * 				that uses either the blue/green (<code>CODE_DEPLOY</code>) or <code>EXTERNAL</code>
   * 				deployment types and has tasks that use the EC2 launch type.</p>
   *          </note>
   *          <p>If a service is using either the blue/green (<code>CODE_DEPLOY</code>) or
   * 				<code>EXTERNAL</code> deployment types and is running tasks that use the
   * 			Fargate launch type, the minimum healthy percent value is not used,
   * 			although it is returned when describing your service.</p>
   * @public
   */
  minimumHealthyPercent?: number | undefined;

  /**
   * <p>Information about the CloudWatch alarms.</p>
   * @public
   */
  alarms?: DeploymentAlarms | undefined;

  /**
   * <p>The deployment strategy for the service. Choose from these valid values:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>ROLLING</code> - When you create a service which uses the rolling update
   *                   (<code>ROLLING</code>) deployment strategy, the Amazon ECS service scheduler replaces
   *                the currently running tasks with new tasks. The number of tasks that Amazon ECS adds or
   *                removes from the service during a rolling update is controlled by the service
   *                deployment configuration.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>BLUE_GREEN</code> - A blue/green deployment strategy
   *                   (<code>BLUE_GREEN</code>) is a release methodology that reduces downtime and risk
   *                by running two identical production environments called blue and green. With Amazon ECS
   *                blue/green deployments, you can validate new service revisions before directing
   *                production traffic to them. This approach provides a safer way to deploy changes with
   *                the ability to quickly roll back if needed.</p>
   *             </li>
   *          </ul>
   * @public
   */
  strategy?: DeploymentStrategy | undefined;

  /**
   * <p>The duration when both blue and green service revisions are running simultaneously after the production traffic has shifted.</p>
   *          <p>You must provide this parameter when you use the <code>BLUE_GREEN</code> deployment
   *          strategy.</p>
   * @public
   */
  bakeTimeInMinutes?: number | undefined;

  /**
   * <p>An array of deployment lifecycle hook objects to run custom logic at specific stages of the deployment lifecycle. These hooks allow you to run custom logic at key points during the deployment process.</p>
   * @public
   */
  lifecycleHooks?: DeploymentLifecycleHook[] | undefined;
}

/**
 * @public
 * @enum
 */
export const DeploymentControllerType = {
  CODE_DEPLOY: "CODE_DEPLOY",
  ECS: "ECS",
  EXTERNAL: "EXTERNAL",
} as const;

/**
 * @public
 */
export type DeploymentControllerType = (typeof DeploymentControllerType)[keyof typeof DeploymentControllerType];

/**
 * <p>The deployment controller to use for the service. </p>
 * @public
 */
export interface DeploymentController {
  /**
   * <p>The deployment controller type to use.</p>
   *          <p>The deployment controller is the mechanism that determines how tasks are deployed for
   * 			your service. The valid options are:</p>
   *          <ul>
   *             <li>
   *                <p>ECS</p>
   *                <p>When you create a service which uses the <code>ECS</code> deployment controller, you can choose between the following deployment strategies:</p>
   *                <ul>
   *                   <li>
   *                      <p>
   *                         <code>ROLLING</code>: When you create a service which uses the <i>rolling update</i>
   * 							(<code>ROLLING</code>) deployment strategy, the Amazon ECS service scheduler replaces the
   * 							currently running tasks with new tasks. The number of tasks that Amazon ECS adds or
   * 							removes from the service during a rolling update is controlled by the service
   * 							deployment configuration. </p>
   *                      <p>Rolling update deployments are best suited for the following scenarios:</p>
   *                      <ul>
   *                         <li>
   *                            <p>Gradual service updates: You need to
   * 									update your service incrementally without taking the entire service
   * 									offline at once.</p>
   *                         </li>
   *                         <li>
   *                            <p>Limited resource requirements: You
   * 									want to avoid the additional resource costs of running two complete
   * 									environments simultaneously (as required by blue/green
   * 									deployments).</p>
   *                         </li>
   *                         <li>
   *                            <p>Acceptable deployment time: Your
   * 									application can tolerate a longer deployment process, as rolling updates
   * 									replace tasks one by one.</p>
   *                         </li>
   *                         <li>
   *                            <p>No need for instant roll back: Your
   * 									service can tolerate a rollback process that takes minutes rather than
   * 									seconds.</p>
   *                         </li>
   *                         <li>
   *                            <p>Simple deployment process: You prefer
   * 									a straightforward deployment approach without the complexity of managing
   * 									multiple environments, target groups, and listeners.</p>
   *                         </li>
   *                         <li>
   *                            <p>No load balancer requirement: Your
   * 									service doesn't use or require a load balancer, Application Load Balancer, Network Load Balancer, or Service Connect (which are required
   * 									for blue/green deployments).</p>
   *                         </li>
   *                         <li>
   *                            <p>Stateful applications: Your
   * 									application maintains state that makes it difficult to run two parallel
   * 									environments.</p>
   *                         </li>
   *                         <li>
   *                            <p>Cost sensitivity: You want to
   * 									minimize deployment costs by not running duplicate environments during
   * 									deployment.</p>
   *                         </li>
   *                      </ul>
   *                      <p>Rolling updates are the default deployment strategy for services and provide a
   * 							balance between deployment safety and resource efficiency for many common
   * 							application scenarios.</p>
   *                   </li>
   *                   <li>
   *                      <p>
   *                         <code>BLUE_GREEN</code>: A <i>blue/green</i> deployment strategy (<code>BLUE_GREEN</code>) is a release methodology that reduces downtime and
   * 							risk by running two identical production environments called blue and green.
   * 							With Amazon ECS blue/green deployments, you can validate new service revisions before
   * 							directing production traffic to them. This approach provides a safer way to
   * 							deploy changes with the ability to quickly roll back if needed.</p>
   *                      <p>Amazon ECS blue/green deployments are best suited for the following scenarios:</p>
   *                      <ul>
   *                         <li>
   *                            <p>Service validation: When you need to
   * 									validate new service revisions before directing production traffic to
   * 									them</p>
   *                         </li>
   *                         <li>
   *                            <p>Zero downtime: When your service
   * 									requires zero-downtime deployments</p>
   *                         </li>
   *                         <li>
   *                            <p>Instant roll back: When you
   * 									need the ability to quickly roll back if issues are detected</p>
   *                         </li>
   *                         <li>
   *                            <p>Load balancer requirement: When your
   * 									service uses Application Load Balancer, Network Load Balancer, or Service Connect</p>
   *                         </li>
   *                      </ul>
   *                   </li>
   *                </ul>
   *             </li>
   *             <li>
   *                <p>External</p>
   *                <p>Use a third-party deployment controller.</p>
   *             </li>
   *             <li>
   *                <p>Blue/green deployment (powered by CodeDeploy)</p>
   *                <p>CodeDeploy installs an updated version of the application as a new replacement task
   * 					set and reroutes production traffic from the original application task set to
   * 					the replacement task set. The original task set is terminated after a successful
   * 					deployment. Use this deployment controller to verify a new deployment of a service
   * 					before sending production traffic to it.</p>
   *             </li>
   *          </ul>
   * @public
   */
  type: DeploymentControllerType | undefined;
}

/**
 * @public
 * @enum
 */
export const LaunchType = {
  EC2: "EC2",
  EXTERNAL: "EXTERNAL",
  FARGATE: "FARGATE",
} as const;

/**
 * @public
 */
export type LaunchType = (typeof LaunchType)[keyof typeof LaunchType];

/**
 * <p>The load balancer configuration to use with a service or task set.</p>
 *          <p>When you add, update, or remove a load balancer configuration, Amazon ECS starts a new
 * 			deployment with the updated Elastic Load Balancing configuration. This causes tasks to register to and
 * 			deregister from load balancers.</p>
 *          <p>We recommend that you verify this on a test environment before you update the Elastic Load Balancing
 * 			configuration. </p>
 *          <p>A service-linked role is required for services that use multiple target groups. For
 * 			more information, see <a href="https://docs.aws.amazon.com/AmazonECS/latest/developerguide/using-service-linked-roles.html">Using
 * 				service-linked roles</a> in the <i>Amazon Elastic Container Service Developer Guide</i>.</p>
 * @public
 */
export interface LoadBalancer {
  /**
   * <p>The full Amazon Resource Name (ARN) of the Elastic Load Balancing target group or groups associated with a service or
   * 			task set.</p>
   *          <p>A target group ARN is only specified when using an Application Load Balancer or Network Load Balancer. </p>
   *          <p>For services using the <code>ECS</code> deployment controller, you can specify one or
   * 			multiple target groups. For more information, see <a href="https://docs.aws.amazon.com/AmazonECS/latest/developerguide/register-multiple-targetgroups.html">Registering multiple target groups with a service</a> in
   * 			the <i>Amazon Elastic Container Service Developer Guide</i>.</p>
   *          <p>For services using the <code>CODE_DEPLOY</code> deployment controller, you're required
   * 			to define two target groups for the load balancer. For more information, see <a href="https://docs.aws.amazon.com/AmazonECS/latest/developerguide/deployment-type-bluegreen.html">Blue/green deployment with CodeDeploy</a> in the
   * 			<i>Amazon Elastic Container Service Developer Guide</i>.</p>
   *          <important>
   *             <p>If your service's task definition uses the <code>awsvpc</code> network mode, you
   * 				must choose <code>ip</code> as the target type, not <code>instance</code>. Do this
   * 				when creating your target groups because tasks that use the <code>awsvpc</code>
   * 				network mode are associated with an elastic network interface, not an Amazon EC2
   * 				instance. This network mode is required for the Fargate launch
   * 				type.</p>
   *          </important>
   * @public
   */
  targetGroupArn?: string | undefined;

  /**
   * <p>The name of the load balancer to associate with the Amazon ECS service or task set.</p>
   *          <p>If you are using an Application Load Balancer or a Network Load Balancer the load balancer name parameter should be
   * 			omitted.</p>
   * @public
   */
  loadBalancerName?: string | undefined;

  /**
   * <p>The name of the container (as it appears in a container definition) to associate with
   * 			the load balancer.</p>
   *          <p>You need to specify the container name when configuring the target group for an Amazon ECS
   * 			load balancer.</p>
   * @public
   */
  containerName?: string | undefined;

  /**
   * <p>The port on the container to associate with the load balancer. This port must
   * 			correspond to a <code>containerPort</code> in the task definition the tasks in the
   * 			service are using. For tasks that use the EC2 launch type, the container
   * 			instance they're launched on must allow ingress traffic on the <code>hostPort</code> of
   * 			the port mapping.</p>
   * @public
   */
  containerPort?: number | undefined;

  /**
   * <p>The advanced settings for the load balancer used in blue/green deployments. Specify the alternate target group, listener rules, and IAM role required for traffic shifting during blue/green deployments.</p>
   * @public
   */
  advancedConfiguration?: AdvancedConfiguration | undefined;
}

/**
 * @public
 * @enum
 */
export const AssignPublicIp = {
  DISABLED: "DISABLED",
  ENABLED: "ENABLED",
} as const;

/**
 * @public
 */
export type AssignPublicIp = (typeof AssignPublicIp)[keyof typeof AssignPublicIp];

/**
 * <p>An object representing the networking details for a task or service. For example
 * 				<code>awsVpcConfiguration=\{subnets=["subnet-12344321"],securityGroups=["sg-12344321"]\}</code>.</p>
 * @public
 */
export interface AwsVpcConfiguration {
  /**
   * <p>The IDs of the subnets associated with the task or service. There's a limit of 16
   * 			subnets that can be specified.</p>
   *          <note>
   *             <p>All specified subnets must be from the same VPC.</p>
   *          </note>
   * @public
   */
  subnets: string[] | undefined;

  /**
   * <p>The IDs of the security groups associated with the task or service. If you don't
   * 			specify a security group, the default security group for the VPC is used. There's a
   * 			limit of 5 security groups that can be specified.</p>
   *          <note>
   *             <p>All specified security groups must be from the same VPC.</p>
   *          </note>
   * @public
   */
  securityGroups?: string[] | undefined;

  /**
   * <p>Whether the task's elastic network interface receives a public IP address. </p>
   *          <p>Consider the following when you set this value:</p>
   *          <ul>
   *             <li>
   *                <p>When you use <code>create-service</code> or <code>update-service</code>, the
   * 					default is <code>DISABLED</code>. </p>
   *             </li>
   *             <li>
   *                <p>When the service <code>deploymentController</code> is <code>ECS</code>, the
   * 					value must be <code>DISABLED</code>. </p>
   *             </li>
   *          </ul>
   * @public
   */
  assignPublicIp?: AssignPublicIp | undefined;
}

/**
 * <p>The network configuration for a task or service.</p>
 * @public
 */
export interface NetworkConfiguration {
  /**
   * <p>The VPC subnets and security groups that are associated with a task.</p>
   *          <note>
   *             <p>All specified subnets and security groups must be from the same VPC.</p>
   *          </note>
   * @public
   */
  awsvpcConfiguration?: AwsVpcConfiguration | undefined;
}

/**
 * @public
 * @enum
 */
export const PlacementConstraintType = {
  DISTINCT_INSTANCE: "distinctInstance",
  MEMBER_OF: "memberOf",
} as const;

/**
 * @public
 */
export type PlacementConstraintType = (typeof PlacementConstraintType)[keyof typeof PlacementConstraintType];

/**
 * <p>An object representing a constraint on task placement. For more information, see
 * 				<a href="https://docs.aws.amazon.com/AmazonECS/latest/developerguide/task-placement-constraints.html">Task placement constraints</a> in the
 * 			<i>Amazon Elastic Container Service Developer Guide</i>.</p>
 *          <note>
 *             <p>If you're using the Fargate launch type, task placement constraints
 * 				aren't supported.</p>
 *          </note>
 * @public
 */
export interface PlacementConstraint {
  /**
   * <p>The type of constraint. Use <code>distinctInstance</code> to ensure that each task in
   * 			a particular group is running on a different container instance. Use
   * 				<code>memberOf</code> to restrict the selection to a group of valid
   * 			candidates.</p>
   * @public
   */
  type?: PlacementConstraintType | undefined;

  /**
   * <p>A cluster query language expression to apply to the constraint. The expression can
   * 			have a maximum length of 2000 characters. You can't specify an expression if the
   * 			constraint type is <code>distinctInstance</code>. For more information, see <a href="https://docs.aws.amazon.com/AmazonECS/latest/developerguide/cluster-query-language.html">Cluster query language</a> in the <i>Amazon Elastic Container Service Developer Guide</i>.</p>
   * @public
   */
  expression?: string | undefined;
}

/**
 * @public
 * @enum
 */
export const PlacementStrategyType = {
  BINPACK: "binpack",
  RANDOM: "random",
  SPREAD: "spread",
} as const;

/**
 * @public
 */
export type PlacementStrategyType = (typeof PlacementStrategyType)[keyof typeof PlacementStrategyType];

/**
 * <p>The task placement strategy for a task or service. For more information, see <a href="https://docs.aws.amazon.com/AmazonECS/latest/developerguide/task-placement-strategies.html">Task placement strategies</a> in the
 * 			<i>Amazon Elastic Container Service Developer Guide</i>.</p>
 * @public
 */
export interface PlacementStrategy {
  /**
   * <p>The type of placement strategy. The <code>random</code> placement strategy randomly
   * 			places tasks on available candidates. The <code>spread</code> placement strategy spreads
   * 			placement across available candidates evenly based on the <code>field</code> parameter.
   * 			The <code>binpack</code> strategy places tasks on available candidates that have the
   * 			least available amount of the resource that's specified with the <code>field</code>
   * 			parameter. For example, if you binpack on memory, a task is placed on the instance with
   * 			the least amount of remaining memory but still enough to run the task.</p>
   * @public
   */
  type?: PlacementStrategyType | undefined;

  /**
   * <p>The field to apply the placement strategy against. For the <code>spread</code>
   * 			placement strategy, valid values are <code>instanceId</code> (or <code>host</code>,
   * 			which has the same effect), or any platform or custom attribute that's applied to a
   * 			container instance, such as <code>attribute:ecs.availability-zone</code>. For the
   * 				<code>binpack</code> placement strategy, valid values are <code>cpu</code> and
   * 				<code>memory</code>. For the <code>random</code> placement strategy, this field is
   * 			not used.</p>
   * @public
   */
  field?: string | undefined;
}

/**
 * @public
 * @enum
 */
export const PropagateTags = {
  NONE: "NONE",
  SERVICE: "SERVICE",
  TASK_DEFINITION: "TASK_DEFINITION",
} as const;

/**
 * @public
 */
export type PropagateTags = (typeof PropagateTags)[keyof typeof PropagateTags];

/**
 * @public
 * @enum
 */
export const SchedulingStrategy = {
  DAEMON: "DAEMON",
  REPLICA: "REPLICA",
} as const;

/**
 * @public
 */
export type SchedulingStrategy = (typeof SchedulingStrategy)[keyof typeof SchedulingStrategy];

/**
 * @public
 * @enum
 */
export const LogDriver = {
  AWSFIRELENS: "awsfirelens",
  AWSLOGS: "awslogs",
  FLUENTD: "fluentd",
  GELF: "gelf",
  JOURNALD: "journald",
  JSON_FILE: "json-file",
  SPLUNK: "splunk",
  SYSLOG: "syslog",
} as const;

/**
 * @public
 */
export type LogDriver = (typeof LogDriver)[keyof typeof LogDriver];

/**
 * <p>An object representing the secret to expose to your container. Secrets can be exposed
 * 			to a container in the following ways:</p>
 *          <ul>
 *             <li>
 *                <p>To inject sensitive data into your containers as environment variables, use
 * 					the <code>secrets</code> container definition parameter.</p>
 *             </li>
 *             <li>
 *                <p>To reference sensitive information in the log configuration of a container,
 * 					use the <code>secretOptions</code> container definition parameter.</p>
 *             </li>
 *          </ul>
 *          <p>For more information, see <a href="https://docs.aws.amazon.com/AmazonECS/latest/developerguide/specifying-sensitive-data.html">Specifying
 * 				sensitive data</a> in the <i>Amazon Elastic Container Service Developer Guide</i>.</p>
 * @public
 */
export interface Secret {
  /**
   * <p>The name of the secret.</p>
   * @public
   */
  name: string | undefined;

  /**
   * <p>The secret to expose to the container. The supported values are either the full ARN
   * 			of the Secrets Manager secret or the full ARN of the parameter in the SSM
   * 			Parameter Store.</p>
   *          <p>For information about the require Identity and Access Management permissions, see <a href="https://docs.aws.amazon.com/AmazonECS/latest/developerguide/specifying-sensitive-data-secrets.html#secrets-iam">Required IAM permissions for Amazon ECS secrets</a> (for Secrets Manager) or
   * 				<a href="https://docs.aws.amazon.com/AmazonECS/latest/developerguide/specifying-sensitive-data-parameters.html">Required IAM permissions for Amazon ECS secrets</a> (for Systems Manager Parameter
   * 			store) in the <i>Amazon Elastic Container Service Developer Guide</i>.</p>
   *          <note>
   *             <p>If the SSM Parameter Store parameter exists in the same Region as the task
   * 				you're launching, then you can use either the full ARN or name of the parameter.
   * 				If the parameter exists in a different Region, then the full ARN must be
   * 				specified.</p>
   *          </note>
   * @public
   */
  valueFrom: string | undefined;
}

/**
 * <p>The log configuration for the container. This parameter maps to <code>LogConfig</code>
 * 			in the docker container create command and the <code>--log-driver</code> option to
 * 			docker run.</p>
 *          <p>By default, containers use the same logging driver that the Docker daemon uses.
 * 			However, the container might use a different logging driver than the Docker daemon by
 * 			specifying a log driver configuration in the container definition.</p>
 *          <p>Understand the following when specifying a log configuration for your
 * 			containers.</p>
 *          <ul>
 *             <li>
 *                <p>Amazon ECS currently supports a subset of the logging drivers available to the
 * 					Docker daemon. Additional log drivers may be available in future releases of the
 * 					Amazon ECS container agent.</p>
 *                <p>For tasks on Fargate, the supported log drivers are <code>awslogs</code>,
 * 						<code>splunk</code>, and <code>awsfirelens</code>.</p>
 *                <p>For tasks hosted on Amazon EC2 instances, the supported log drivers are
 * 						<code>awslogs</code>, <code>fluentd</code>, <code>gelf</code>,
 * 						<code>json-file</code>, <code>journald</code>,<code>syslog</code>,
 * 						<code>splunk</code>, and <code>awsfirelens</code>.</p>
 *             </li>
 *             <li>
 *                <p>This parameter requires version 1.18 of the Docker Remote API or greater on
 * 					your container instance.</p>
 *             </li>
 *             <li>
 *                <p>For tasks that are hosted on Amazon EC2 instances, the Amazon ECS container agent must
 * 					register the available logging drivers with the
 * 						<code>ECS_AVAILABLE_LOGGING_DRIVERS</code> environment variable before
 * 					containers placed on that instance can use these log configuration options. For
 * 					more information, see <a href="https://docs.aws.amazon.com/AmazonECS/latest/developerguide/ecs-agent-config.html">Amazon ECS container agent configuration</a> in the
 * 					<i>Amazon Elastic Container Service Developer Guide</i>.</p>
 *             </li>
 *             <li>
 *                <p>For tasks that are on Fargate, because you don't have access to the
 * 					underlying infrastructure your tasks are hosted on, any additional software
 * 					needed must be installed outside of the task. For example, the Fluentd output
 * 					aggregators or a remote host running Logstash to send Gelf logs to.</p>
 *             </li>
 *          </ul>
 * @public
 */
export interface LogConfiguration {
  /**
   * <p>The log driver to use for the container.</p>
   *          <p>For tasks on Fargate, the supported log drivers are <code>awslogs</code>,
   * 				<code>splunk</code>, and <code>awsfirelens</code>.</p>
   *          <p>For tasks hosted on Amazon EC2 instances, the supported log drivers are
   * 				<code>awslogs</code>, <code>fluentd</code>, <code>gelf</code>,
   * 				<code>json-file</code>, <code>journald</code>, <code>syslog</code>,
   * 				<code>splunk</code>, and <code>awsfirelens</code>.</p>
   *          <p>For more information about using the <code>awslogs</code> log driver, see <a href="https://docs.aws.amazon.com/AmazonECS/latest/developerguide/using_awslogs.html">Send
   * 				Amazon ECS logs to CloudWatch</a> in the <i>Amazon Elastic Container Service Developer Guide</i>.</p>
   *          <p>For more information about using the <code>awsfirelens</code> log driver, see <a href="https://docs.aws.amazon.com/AmazonECS/latest/developerguide/using_firelens.html">Send
   * 				Amazon ECS logs to an Amazon Web Services service or Amazon Web Services Partner</a>.</p>
   *          <note>
   *             <p>If you have a custom driver that isn't listed, you can fork the Amazon ECS container
   * 				agent project that's <a href="https://github.com/aws/amazon-ecs-agent">available
   * 					on GitHub</a> and customize it to work with that driver. We encourage you to
   * 				submit pull requests for changes that you would like to have included. However, we
   * 				don't currently provide support for running modified copies of this software.</p>
   *          </note>
   * @public
   */
  logDriver: LogDriver | undefined;

  /**
   * <p>The configuration options to send to the log driver.</p>
   *          <p>The options you can specify depend on the log driver. Some of the options you can
   * 			specify when you use the <code>awslogs</code> log driver to route logs to Amazon CloudWatch
   * 			include the following:</p>
   *          <dl>
   *             <dt>awslogs-create-group</dt>
   *             <dd>
   *                <p>Required: No</p>
   *                <p>Specify whether you want the log group to be created automatically. If
   * 						this option isn't specified, it defaults to <code>false</code>.</p>
   *                <note>
   *                   <p>Your IAM policy must include the <code>logs:CreateLogGroup</code>
   * 							permission before you attempt to use
   * 							<code>awslogs-create-group</code>.</p>
   *                </note>
   *             </dd>
   *             <dt>awslogs-region</dt>
   *             <dd>
   *                <p>Required: Yes</p>
   *                <p>Specify the Amazon Web Services Region that the <code>awslogs</code> log driver is to
   * 						send your Docker logs to. You can choose to send all of your logs from
   * 						clusters in different Regions to a single region in CloudWatch Logs. This is so that
   * 						they're all visible in one location. Otherwise, you can separate them by
   * 						Region for more granularity. Make sure that the specified log group exists
   * 						in the Region that you specify with this option.</p>
   *             </dd>
   *             <dt>awslogs-group</dt>
   *             <dd>
   *                <p>Required: Yes</p>
   *                <p>Make sure to specify a log group that the <code>awslogs</code> log driver
   * 						sends its log streams to.</p>
   *             </dd>
   *             <dt>awslogs-stream-prefix</dt>
   *             <dd>
   *                <p>Required: Yes, when using Fargate.Optional when using EC2.</p>
   *                <p>Use the <code>awslogs-stream-prefix</code> option to associate a log
   * 						stream with the specified prefix, the container name, and the ID of the
   * 						Amazon ECS task that the container belongs to. If you specify a prefix with this
   * 						option, then the log stream takes the format
   * 							<code>prefix-name/container-name/ecs-task-id</code>.</p>
   *                <p>If you don't specify a prefix with this option, then the log stream is
   * 						named after the container ID that's assigned by the Docker daemon on the
   * 						container instance. Because it's difficult to trace logs back to the
   * 						container that sent them with just the Docker container ID (which is only
   * 						available on the container instance), we recommend that you specify a prefix
   * 						with this option.</p>
   *                <p>For Amazon ECS services, you can use the service name as the prefix. Doing so,
   * 						you can trace log streams to the service that the container belongs to, the
   * 						name of the container that sent them, and the ID of the task that the
   * 						container belongs to.</p>
   *                <p>You must specify a stream-prefix for your logs to have your logs appear in
   * 						the Log pane when using the Amazon ECS console.</p>
   *             </dd>
   *             <dt>awslogs-datetime-format</dt>
   *             <dd>
   *                <p>Required: No</p>
   *                <p>This option defines a multiline start pattern in Python
   * 							<code>strftime</code> format. A log message consists of a line that
   * 						matches the pattern and any following lines that don’t match the pattern.
   * 						The matched line is the delimiter between log messages.</p>
   *                <p>One example of a use case for using this format is for parsing output such
   * 						as a stack dump, which might otherwise be logged in multiple entries. The
   * 						correct pattern allows it to be captured in a single entry.</p>
   *                <p>For more information, see <a href="https://docs.docker.com/config/containers/logging/awslogs/#awslogs-datetime-format">awslogs-datetime-format</a>.</p>
   *                <p>You cannot configure both the <code>awslogs-datetime-format</code> and
   * 							<code>awslogs-multiline-pattern</code> options.</p>
   *                <note>
   *                   <p>Multiline logging performs regular expression parsing and matching of
   * 							all log messages. This might have a negative impact on logging
   * 							performance.</p>
   *                </note>
   *             </dd>
   *             <dt>awslogs-multiline-pattern</dt>
   *             <dd>
   *                <p>Required: No</p>
   *                <p>This option defines a multiline start pattern that uses a regular
   * 						expression. A log message consists of a line that matches the pattern and
   * 						any following lines that don’t match the pattern. The matched line is the
   * 						delimiter between log messages.</p>
   *                <p>For more information, see <a href="https://docs.docker.com/config/containers/logging/awslogs/#awslogs-multiline-pattern">awslogs-multiline-pattern</a>.</p>
   *                <p>This option is ignored if <code>awslogs-datetime-format</code> is also
   * 						configured.</p>
   *                <p>You cannot configure both the <code>awslogs-datetime-format</code> and
   * 							<code>awslogs-multiline-pattern</code> options.</p>
   *                <note>
   *                   <p>Multiline logging performs regular expression parsing and matching of
   * 							all log messages. This might have a negative impact on logging
   * 							performance.</p>
   *                </note>
   *             </dd>
   *          </dl>
   *          <p>The following options apply to all supported log drivers.</p>
   *          <dl>
   *             <dt>mode</dt>
   *             <dd>
   *                <p>Required: No</p>
   *                <p>Valid values: <code>non-blocking</code> | <code>blocking</code>
   *                </p>
   *                <p>This option defines the delivery mode of log messages from the container
   * 						to the log driver specified using <code>logDriver</code>. The delivery mode
   * 						you choose affects application availability when the flow of logs from
   * 						container is interrupted.</p>
   *                <p>If you use the <code>blocking</code> mode and the flow of logs is
   * 						interrupted, calls from container code to write to the <code>stdout</code>
   * 						and <code>stderr</code> streams will block. The logging thread of the
   * 						application will block as a result. This may cause the application to become
   * 						unresponsive and lead to container healthcheck failure. </p>
   *                <p>If you use the <code>non-blocking</code> mode, the container's logs are
   * 						instead stored in an in-memory intermediate buffer configured with the
   * 							<code>max-buffer-size</code> option. This prevents the application from
   * 						becoming unresponsive when logs cannot be sent. We recommend using this mode
   * 						if you want to ensure service availability and are okay with some log loss.
   * 						For more information, see <a href="http://aws.amazon.com/blogs/containers/preventing-log-loss-with-non-blocking-mode-in-the-awslogs-container-log-driver/">Preventing log loss with non-blocking mode in the <code>awslogs</code>
   * 							container log driver</a>.</p>
   *                <p>You can set a default <code>mode</code> for all containers in a specific
   * 						Amazon Web Services Region by using the <code>defaultLogDriverMode</code> account setting.
   * 						If you don't specify the <code>mode</code> option or
   * 						configure the account setting, Amazon ECS will default to the
   * 							<code>non-blocking</code> mode. For more information about the account setting, see <a href="https://docs.aws.amazon.com/AmazonECS/latest/developerguide/ecs-account-settings.html#default-log-driver-mode">Default log driver mode</a> in the <i>Amazon Elastic Container Service Developer Guide</i>.</p>
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
   *             </dd>
   *             <dt>max-buffer-size</dt>
   *             <dd>
   *                <p>Required: No</p>
   *                <p>Default value: <code>1m</code>
   *                </p>
   *                <p>When <code>non-blocking</code> mode is used, the
   * 							<code>max-buffer-size</code> log option controls the size of the buffer
   * 						that's used for intermediate message storage. Make sure to specify an
   * 						adequate buffer size based on your application. When the buffer fills up,
   * 						further logs cannot be stored. Logs that cannot be stored are lost. </p>
   *             </dd>
   *          </dl>
   *          <p>To route logs using the <code>splunk</code> log router, you need to specify a
   * 				<code>splunk-token</code> and a <code>splunk-url</code>.</p>
   *          <p>When you use the <code>awsfirelens</code> log router to route logs to an Amazon Web Services Service
   * 			or Amazon Web Services Partner Network destination for log storage and analytics, you can set the
   * 				<code>log-driver-buffer-limit</code> option to limit the number of events that are
   * 			buffered in memory, before being sent to the log router container. It can help to
   * 			resolve potential log loss issue because high throughput might result in memory running
   * 			out for the buffer inside of Docker.</p>
   *          <p>Other options you can specify when using <code>awsfirelens</code> to route logs depend
   * 			on the destination. When you export logs to Amazon Data Firehose, you can specify the Amazon Web Services Region
   * 			with <code>region</code> and a name for the log stream with
   * 			<code>delivery_stream</code>.</p>
   *          <p>When you export logs to Amazon Kinesis Data Streams, you can specify an Amazon Web Services Region with
   * 				<code>region</code> and a data stream name with <code>stream</code>.</p>
   *          <p> When you export logs to Amazon OpenSearch Service, you can specify options like <code>Name</code>,
   * 				<code>Host</code> (OpenSearch Service endpoint without protocol), <code>Port</code>,
   * 				<code>Index</code>, <code>Type</code>, <code>Aws_auth</code>,
   * 				<code>Aws_region</code>, <code>Suppress_Type_Name</code>, and <code>tls</code>. For
   * 			more information, see <a href="http://aws.amazon.com/blogs/containers/under-the-hood-firelens-for-amazon-ecs-tasks/">Under the hood:
   * 				FireLens for Amazon ECS Tasks</a>.</p>
   *          <p>When you export logs to Amazon S3, you can specify the bucket using the <code>bucket</code>
   * 			option. You can also specify <code>region</code>, <code>total_file_size</code>,
   * 				<code>upload_timeout</code>, and <code>use_put_object</code> as options.</p>
   *          <p>This parameter requires version 1.19 of the Docker Remote API or greater on your container instance. To check the Docker Remote API version on your container instance, log in to your container instance and run the following command: <code>sudo docker version --format '\{\{.Server.APIVersion\}\}'</code>
   *          </p>
   * @public
   */
  options?: Record<string, string> | undefined;

  /**
   * <p>The secrets to pass to the log configuration. For more information, see <a href="https://docs.aws.amazon.com/AmazonECS/latest/developerguide/specifying-sensitive-data.html">Specifying
   * 				sensitive data</a> in the <i>Amazon Elastic Container Service Developer Guide</i>.</p>
   * @public
   */
  secretOptions?: Secret[] | undefined;
}

/**
 * <p>The header matching rules for test traffic routing in Amazon ECS blue/green deployments.
 *          These rules determine how incoming requests are matched based on HTTP headers to route test
 *          traffic to the new service revision.</p>
 * @public
 */
export interface ServiceConnectTestTrafficHeaderMatchRules {
  /**
   * <p>The exact value that the HTTP header must match for the test traffic routing rule to apply. This provides precise control over which requests are routed to the new service revision during blue/green deployments.</p>
   * @public
   */
  exact: string | undefined;
}

/**
 * <p>The HTTP header rules used to identify and route test traffic during Amazon ECS blue/green
 *          deployments. These rules specify which HTTP headers to examine and what values to match for
 *          routing decisions.</p>
 * @public
 */
export interface ServiceConnectTestTrafficHeaderRules {
  /**
   * <p>The name of the HTTP header to examine for test traffic routing. Common examples include custom headers like <code>X-Test-Version</code> or <code>X-Canary-Request</code> that can be used to identify test traffic.</p>
   * @public
   */
  name: string | undefined;

  /**
   * <p>The header value matching configuration that determines how the HTTP header value is evaluated for test traffic routing decisions.</p>
   * @public
   */
  value?: ServiceConnectTestTrafficHeaderMatchRules | undefined;
}

/**
 * <p>The test traffic routing configuration for Amazon ECS blue/green deployments. This
 *          configuration allows you to define rules for routing specific traffic to the new service
 *          revision during the deployment process, allowing for safe testing before full production
 *          traffic shift.</p>
 * @public
 */
export interface ServiceConnectTestTrafficRules {
  /**
   * <p>The HTTP header-based routing rules that determine which requests should be routed to the new service version during blue/green deployment testing. These rules provide fine-grained control over test traffic routing based on request headers.</p>
   * @public
   */
  header: ServiceConnectTestTrafficHeaderRules | undefined;
}

/**
 * <p>Each alias ("endpoint") is a fully-qualified name and port number that other tasks
 * 			("clients") can use to connect to this service.</p>
 *          <p>Each name and port mapping must be unique within the namespace.</p>
 *          <p>Tasks that run in a namespace can use short names to connect
 * 	to services in the namespace. Tasks can connect to services across all of the clusters in the namespace.
 * 	Tasks connect through a managed proxy container
 * 	that collects logs and metrics for increased visibility.
 * 	Only the tasks that Amazon ECS services create are supported with Service Connect.
 * 	For more information, see <a href="https://docs.aws.amazon.com/AmazonECS/latest/developerguide/service-connect.html">Service Connect</a> in the <i>Amazon Elastic Container Service Developer Guide</i>.</p>
 * @public
 */
export interface ServiceConnectClientAlias {
  /**
   * <p>The listening port number for the Service Connect proxy. This port is available
   * 			inside of all of the tasks within the same namespace.</p>
   *          <p>To avoid changing your applications in client Amazon ECS services, set this to the same
   * 			port that the client application uses by default. For more information, see <a href="https://docs.aws.amazon.com/AmazonECS/latest/developerguide/service-connect.html">Service Connect</a> in the <i>Amazon Elastic Container Service Developer Guide</i>.</p>
   * @public
   */
  port: number | undefined;

  /**
   * <p>The <code>dnsName</code> is the name that you use in the applications of client tasks
   * 			to connect to this service. The name must be a valid DNS name but doesn't need to be
   * 			fully-qualified. The name can include up to 127 characters. The name can include
   * 			lowercase letters, numbers, underscores (_), hyphens (-), and periods (.). The name
   * 			can't start with a hyphen.</p>
   *          <p>If this parameter isn't specified, the default value of <code>discoveryName.namespace</code> is used. If the <code>discoveryName</code> isn't specified, the port mapping name from the task definition is used in <code>portName.namespace</code>.</p>
   *          <p>To avoid changing your applications in client Amazon ECS services, set this to the same
   * 			name that the client application uses by default. For example, a few common names are
   * 				<code>database</code>, <code>db</code>, or the lowercase name of a database, such as
   * 				<code>mysql</code> or <code>redis</code>. For more information, see <a href="https://docs.aws.amazon.com/AmazonECS/latest/developerguide/service-connect.html">Service Connect</a> in the <i>Amazon Elastic Container Service Developer Guide</i>.</p>
   * @public
   */
  dnsName?: string | undefined;

  /**
   * <p>The configuration for test traffic routing rules used during blue/green deployments with Amazon ECS Service Connect. This allows you to route a portion of traffic to the new service revision of your service for testing before shifting all production traffic.</p>
   * @public
   */
  testTrafficRules?: ServiceConnectTestTrafficRules | undefined;
}

/**
 * <p>An object that represents the timeout configurations for Service Connect.</p>
 *          <note>
 *             <p>If <code>idleTimeout</code> is set to a time that is less than
 * 					<code>perRequestTimeout</code>, the connection will close when the
 * 					<code>idleTimeout</code> is reached and not the
 * 				<code>perRequestTimeout</code>.</p>
 *          </note>
 * @public
 */
export interface TimeoutConfiguration {
  /**
   * <p>The amount of time in seconds a connection will stay active while idle. A value of
   * 				<code>0</code> can be set to disable <code>idleTimeout</code>.</p>
   *          <p>The <code>idleTimeout</code> default for
   * 				<code>HTTP</code>/<code>HTTP2</code>/<code>GRPC</code> is 5 minutes.</p>
   *          <p>The <code>idleTimeout</code> default for <code>TCP</code> is 1 hour.</p>
   * @public
   */
  idleTimeoutSeconds?: number | undefined;

  /**
   * <p>The amount of time waiting for the upstream to respond with a complete response per
   * 			request. A value of <code>0</code> can be set to disable <code>perRequestTimeout</code>.
   * 				<code>perRequestTimeout</code> can only be set if Service Connect
   * 				<code>appProtocol</code> isn't <code>TCP</code>. Only <code>idleTimeout</code> is
   * 			allowed for <code>TCP</code>
   *             <code>appProtocol</code>.</p>
   * @public
   */
  perRequestTimeoutSeconds?: number | undefined;
}

/**
 * <p>The certificate root authority that secures your service.</p>
 * @public
 */
export interface ServiceConnectTlsCertificateAuthority {
  /**
   * <p>The ARN of the Amazon Web Services Private Certificate Authority certificate.</p>
   * @public
   */
  awsPcaAuthorityArn?: string | undefined;
}

/**
 * <p>The key that encrypts and decrypts your resources for Service Connect TLS.</p>
 * @public
 */
export interface ServiceConnectTlsConfiguration {
  /**
   * <p>The signer certificate authority.</p>
   * @public
   */
  issuerCertificateAuthority: ServiceConnectTlsCertificateAuthority | undefined;

  /**
   * <p>The Amazon Web Services Key Management Service key.</p>
   * @public
   */
  kmsKey?: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the IAM role that's associated with the Service Connect TLS.</p>
   * @public
   */
  roleArn?: string | undefined;
}

/**
 * <p>The Service Connect service object configuration. For more information, see <a href="https://docs.aws.amazon.com/AmazonECS/latest/developerguide/service-connect.html">Service Connect</a> in the <i>Amazon Elastic Container Service Developer Guide</i>.</p>
 * @public
 */
export interface ServiceConnectService {
  /**
   * <p>The <code>portName</code> must match the name of one of the <code>portMappings</code>
   * 			from all the containers in the task definition of this Amazon ECS service.</p>
   * @public
   */
  portName: string | undefined;

  /**
   * <p>The <code>discoveryName</code> is the name of the new Cloud Map service that Amazon ECS creates
   * 			for this Amazon ECS service. This must be unique within the Cloud Map namespace. The name can contain up to 64 characters. The name can include lowercase letters,
   * 			numbers, underscores (_), and hyphens (-). The name can't start with a hyphen.</p>
   *          <p>If the <code>discoveryName</code> isn't specified, the port mapping name from the task definition is used in <code>portName.namespace</code>.</p>
   * @public
   */
  discoveryName?: string | undefined;

  /**
   * <p>The list of client aliases for this Service Connect service. You use these to assign
   * 			names that can be used by client applications. The maximum number of client aliases that
   * 			you can have in this list is 1.</p>
   *          <p>Each alias ("endpoint") is a fully-qualified name and port number that other Amazon ECS
   * 			tasks ("clients") can use to connect to this service.</p>
   *          <p>Each name and port mapping must be unique within the namespace.</p>
   *          <p>For each <code>ServiceConnectService</code>, you must provide at least one
   * 				<code>clientAlias</code> with one <code>port</code>.</p>
   * @public
   */
  clientAliases?: ServiceConnectClientAlias[] | undefined;

  /**
   * <p>The port number for the Service Connect proxy to listen on.</p>
   *          <p>Use the value of this field to bypass the proxy for traffic on the port number
   * 			specified in the named <code>portMapping</code> in the task definition of this
   * 			application, and then use it in your VPC security groups to allow traffic into the proxy
   * 			for this Amazon ECS service.</p>
   *          <p>In <code>awsvpc</code> mode and Fargate, the default value is the container port
   * 			number. The container port number is in the <code>portMapping</code> in the task
   * 			definition. In bridge mode, the default value is the ephemeral port of the
   * 			Service Connect proxy.</p>
   * @public
   */
  ingressPortOverride?: number | undefined;

  /**
   * <p>A reference to an object that represents the configured timeouts for
   * 			Service Connect.</p>
   * @public
   */
  timeout?: TimeoutConfiguration | undefined;

  /**
   * <p>A reference to an object that represents a Transport Layer Security (TLS)
   * 			configuration.</p>
   * @public
   */
  tls?: ServiceConnectTlsConfiguration | undefined;
}

/**
 * <p>The Service Connect configuration of your Amazon ECS service. The configuration for this
 * 			service to discover and connect to services, and be discovered by, and connected from,
 * 			other services within a namespace.</p>
 *          <p>Tasks that run in a namespace can use short names to connect
 * 	to services in the namespace. Tasks can connect to services across all of the clusters in the namespace.
 * 	Tasks connect through a managed proxy container
 * 	that collects logs and metrics for increased visibility.
 * 	Only the tasks that Amazon ECS services create are supported with Service Connect.
 * 	For more information, see <a href="https://docs.aws.amazon.com/AmazonECS/latest/developerguide/service-connect.html">Service Connect</a> in the <i>Amazon Elastic Container Service Developer Guide</i>.</p>
 * @public
 */
export interface ServiceConnectConfiguration {
  /**
   * <p>Specifies whether to use Service Connect with this service.</p>
   * @public
   */
  enabled: boolean | undefined;

  /**
   * <p>The namespace name or full Amazon Resource Name (ARN) of the Cloud Map namespace for use with Service Connect. The namespace must be in
   * 			the same Amazon Web Services Region as the Amazon ECS service and cluster. The type of namespace doesn't
   * 			affect Service Connect. For more information about Cloud Map, see <a href="https://docs.aws.amazon.com/cloud-map/latest/dg/working-with-services.html">Working
   * 				with Services</a> in the <i>Cloud Map Developer Guide</i>.</p>
   * @public
   */
  namespace?: string | undefined;

  /**
   * <p>The list of Service Connect service objects. These are names and aliases (also known
   * 			as endpoints) that are used by other Amazon ECS services to connect to this service.
   * 			</p>
   *          <p>This field is not required for a "client" Amazon ECS service that's a member of a namespace
   * 			only to connect to other services within the namespace. An example of this would be a
   * 			frontend application that accepts incoming requests from either a load balancer that's
   * 			attached to the service or by other means.</p>
   *          <p>An object selects a port from the task definition, assigns a name for the Cloud Map
   * 			service, and a list of aliases (endpoints) and ports for client applications to refer to
   * 			this service.</p>
   * @public
   */
  services?: ServiceConnectService[] | undefined;

  /**
   * <p>The log configuration for the container. This parameter maps to <code>LogConfig</code>
   * 			in the docker container create command and the <code>--log-driver</code> option to
   * 			docker run.</p>
   *          <p>By default, containers use the same logging driver that the Docker daemon uses.
   * 			However, the container might use a different logging driver than the Docker daemon by
   * 			specifying a log driver configuration in the container definition.</p>
   *          <p>Understand the following when specifying a log configuration for your
   * 			containers.</p>
   *          <ul>
   *             <li>
   *                <p>Amazon ECS currently supports a subset of the logging drivers available to the
   * 					Docker daemon. Additional log drivers may be available in future releases of the
   * 					Amazon ECS container agent.</p>
   *                <p>For tasks on Fargate, the supported log drivers are <code>awslogs</code>,
   * 						<code>splunk</code>, and <code>awsfirelens</code>.</p>
   *                <p>For tasks hosted on Amazon EC2 instances, the supported log drivers are
   * 						<code>awslogs</code>, <code>fluentd</code>, <code>gelf</code>,
   * 						<code>json-file</code>, <code>journald</code>,<code>syslog</code>,
   * 						<code>splunk</code>, and <code>awsfirelens</code>.</p>
   *             </li>
   *             <li>
   *                <p>This parameter requires version 1.18 of the Docker Remote API or greater on
   * 					your container instance.</p>
   *             </li>
   *             <li>
   *                <p>For tasks that are hosted on Amazon EC2 instances, the Amazon ECS container agent must
   * 					register the available logging drivers with the
   * 						<code>ECS_AVAILABLE_LOGGING_DRIVERS</code> environment variable before
   * 					containers placed on that instance can use these log configuration options. For
   * 					more information, see <a href="https://docs.aws.amazon.com/AmazonECS/latest/developerguide/ecs-agent-config.html">Amazon ECS container agent configuration</a> in the
   * 					<i>Amazon Elastic Container Service Developer Guide</i>.</p>
   *             </li>
   *             <li>
   *                <p>For tasks that are on Fargate, because you don't have access to the
   * 					underlying infrastructure your tasks are hosted on, any additional software
   * 					needed must be installed outside of the task. For example, the Fluentd output
   * 					aggregators or a remote host running Logstash to send Gelf logs to.</p>
   *             </li>
   *          </ul>
   * @public
   */
  logConfiguration?: LogConfiguration | undefined;
}

/**
 * <p>The details for the service registry.</p>
 *          <p>Each service may be associated with one service registry. Multiple service registries
 * 			for each service are not supported.</p>
 *          <p>When you add, update, or remove the service registries configuration, Amazon ECS starts a
 * 			new deployment. New tasks are registered and deregistered to the updated service
 * 			registry configuration.</p>
 * @public
 */
export interface ServiceRegistry {
  /**
   * <p>The Amazon Resource Name (ARN) of the service registry. The currently supported service registry is
   * 			Cloud Map. For more information, see <a href="https://docs.aws.amazon.com/cloud-map/latest/api/API_CreateService.html">CreateService</a>.</p>
   * @public
   */
  registryArn?: string | undefined;

  /**
   * <p>The port value used if your service discovery service specified an SRV record. This
   * 			field might be used if both the <code>awsvpc</code> network mode and SRV records are
   * 			used.</p>
   * @public
   */
  port?: number | undefined;

  /**
   * <p>The container name value to be used for your service discovery service. It's already
   * 			specified in the task definition. If the task definition that your service task
   * 			specifies uses the <code>bridge</code> or <code>host</code> network mode, you must
   * 			specify a <code>containerName</code> and <code>containerPort</code> combination from the
   * 			task definition. If the task definition that your service task specifies uses the
   * 				<code>awsvpc</code> network mode and a type SRV DNS record is used, you must specify
   * 			either a <code>containerName</code> and <code>containerPort</code> combination or a
   * 				<code>port</code> value. However, you can't specify both.</p>
   * @public
   */
  containerName?: string | undefined;

  /**
   * <p>The port value to be used for your service discovery service. It's already specified
   * 			in the task definition. If the task definition your service task specifies uses the
   * 				<code>bridge</code> or <code>host</code> network mode, you must specify a
   * 				<code>containerName</code> and <code>containerPort</code> combination from the task
   * 			definition. If the task definition your service task specifies uses the
   * 				<code>awsvpc</code> network mode and a type SRV DNS record is used, you must specify
   * 			either a <code>containerName</code> and <code>containerPort</code> combination or a
   * 				<code>port</code> value. However, you can't specify both.</p>
   * @public
   */
  containerPort?: number | undefined;
}

/**
 * @public
 * @enum
 */
export const TaskFilesystemType = {
  EXT3: "ext3",
  EXT4: "ext4",
  NTFS: "ntfs",
  XFS: "xfs",
} as const;

/**
 * @public
 */
export type TaskFilesystemType = (typeof TaskFilesystemType)[keyof typeof TaskFilesystemType];

/**
 * @public
 * @enum
 */
export const EBSResourceType = {
  VOLUME: "volume",
} as const;

/**
 * @public
 */
export type EBSResourceType = (typeof EBSResourceType)[keyof typeof EBSResourceType];

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
   * <p>The tags applied to this Amazon EBS volume. <code>AmazonECSCreated</code> and
   * 				<code>AmazonECSManaged</code> are reserved tags that can't be used.</p>
   * @public
   */
  tags?: Tag[] | undefined;

  /**
   * <p>Determines whether to propagate the tags from the task definition to  the Amazon EBS
   * 			volume. Tags can only propagate to a <code>SERVICE</code> specified in
   * 				 <code>ServiceVolumeConfiguration</code>. If no value is specified, the tags aren't
   * 			 propagated.</p>
   * @public
   */
  propagateTags?: PropagateTags | undefined;
}

/**
 * <p>The configuration for the Amazon EBS volume that Amazon ECS creates and manages on your behalf.
 * 			These settings are used to create each Amazon EBS volume, with one volume created for each
 * 			task in the service. For information about the supported launch types and operating
 * 			systems, see <a href="https://docs.aws.amazon.com/AmazonECS/latest/developerguide/ebs-volumes.html#ebs-volumes-configuration">Supported operating systems and launch types</a> in the<i> Amazon Elastic Container Service
 * 				Developer Guide</i>.</p>
 *          <p>Many of these parameters map 1:1 with the Amazon EBS <code>CreateVolume</code> API request
 * 			parameters.</p>
 * @public
 */
export interface ServiceManagedEBSVolumeConfiguration {
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
   * 			Amazon EBS volumes attached to tasks, see <a href="https://docs.aws.amazon.com/AmazonECS/latest/developerguide/ebs-kms-encryption.html">Encrypt data stored in Amazon EBS volumes attached to Amazon ECS tasks</a>.</p>
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
   * <p>The snapshot that Amazon ECS uses to create volumes for attachment to tasks maintained by
   * 			the service. You must specify either <code>snapshotId</code> or <code>sizeInGiB</code>
   * 			in your volume configuration. This parameter maps 1:1 with the <code>SnapshotId</code>
   * 			parameter of the <a href="https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_CreateVolume.html">CreateVolume API</a> in
   * 			the <i>Amazon EC2 API Reference</i>.</p>
   * @public
   */
  snapshotId?: string | undefined;

  /**
   * <p>The rate, in MiB/s, at which data is fetched from a snapshot of an existing EBS volume
   * 			to create new volumes for attachment to the tasks maintained by the service. This
   * 			property can be specified only if you specify a <code>snapshotId</code>. For more
   * 			information, see <a href="https://docs.aws.amazon.com/ebs/latest/userguide/initalize-volume.html">Initialize Amazon EBS volumes</a> in the <i>Amazon EBS User
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
   * <p>The filesystem type for the volume. For volumes created from a snapshot, you must
   * 			specify the same filesystem type that the volume was using when the snapshot was
   * 			created. If there is a filesystem type mismatch, the tasks will fail to start.</p>
   *          <p>The available Linux filesystem types are  <code>ext3</code>, <code>ext4</code>, and
   * 				<code>xfs</code>. If no value is specified, the <code>xfs</code> filesystem type is
   * 			used by default.</p>
   *          <p>The available Windows filesystem types are <code>NTFS</code>.</p>
   * @public
   */
  filesystemType?: TaskFilesystemType | undefined;
}

/**
 * <p>The configuration for a volume specified in the task definition as a volume that is
 * 			configured at launch time. Currently, the only supported volume type is an Amazon EBS
 * 			volume.</p>
 * @public
 */
export interface ServiceVolumeConfiguration {
  /**
   * <p>The name of the volume. This value must match the volume name from the
   * 				<code>Volume</code> object in the task definition.</p>
   * @public
   */
  name: string | undefined;

  /**
   * <p>The configuration for the Amazon EBS volume that Amazon ECS creates and manages on your behalf.
   * 			These settings are used to create each Amazon EBS volume, with one volume created for each
   * 			task in the service. The Amazon EBS volumes are visible in your account in the Amazon EC2 console
   * 			once they are created.</p>
   * @public
   */
  managedEBSVolume?: ServiceManagedEBSVolumeConfiguration | undefined;
}

/**
 * <p>The VPC Lattice configuration for your service that holds the information for the target
 * 			group(s) Amazon ECS tasks will be registered to.</p>
 * @public
 */
export interface VpcLatticeConfiguration {
  /**
   * <p>The ARN of the IAM role to associate with this VPC Lattice configuration. This is the
   * 			Amazon ECS  infrastructure IAM role that is used to manage your VPC Lattice
   * 			infrastructure.</p>
   * @public
   */
  roleArn: string | undefined;

  /**
   * <p>The full Amazon Resource Name (ARN) of the target group or groups associated with the VPC Lattice
   * 			configuration that the Amazon ECS tasks will be registered to.</p>
   * @public
   */
  targetGroupArn: string | undefined;

  /**
   * <p>The name of the port mapping to register in the VPC Lattice target group. This is the name
   * 			of the <code>portMapping</code> you defined in your task definition.</p>
   * @public
   */
  portName: string | undefined;
}

/**
 * @public
 */
export interface CreateServiceRequest {
  /**
   * <p>The short name or full Amazon Resource Name (ARN) of the cluster that you run your service on.
   * 			If you do not specify a cluster, the default cluster is assumed.</p>
   * @public
   */
  cluster?: string | undefined;

  /**
   * <p>The name of your service. Up to 255 letters (uppercase and lowercase), numbers, underscores, and hyphens are allowed. Service names must be unique within
   * 			a cluster, but you can have similarly named services in multiple clusters within a
   * 			Region or across multiple Regions.</p>
   * @public
   */
  serviceName: string | undefined;

  /**
   * <p>The <code>family</code> and <code>revision</code> (<code>family:revision</code>) or
   * 			full ARN of the task definition to run in your service. If a <code>revision</code>
   * 			isn't specified, the latest <code>ACTIVE</code> revision is used.</p>
   *          <p>A task definition must be specified if the service uses either the <code>ECS</code> or
   * 				<code>CODE_DEPLOY</code> deployment controllers.</p>
   *          <p>For more information about deployment types, see <a href="https://docs.aws.amazon.com/AmazonECS/latest/developerguide/deployment-types.html">Amazon ECS deployment
   * 				types</a>.</p>
   * @public
   */
  taskDefinition?: string | undefined;

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
   * <p>A load balancer object representing the load balancers to use with your service. For
   * 			more information, see <a href="https://docs.aws.amazon.com/AmazonECS/latest/developerguide/service-load-balancing.html">Service load balancing</a> in the <i>Amazon Elastic Container Service Developer Guide</i>.</p>
   *          <p>If the service uses the rolling update (<code>ECS</code>) deployment controller and
   * 			using either an Application Load Balancer or Network Load Balancer, you must specify one or more target group ARNs to attach
   * 			to the service. The service-linked role is required for services that use multiple
   * 			target groups. For more information, see <a href="https://docs.aws.amazon.com/AmazonECS/latest/developerguide/using-service-linked-roles.html">Using service-linked roles for Amazon ECS</a> in the
   * 			<i>Amazon Elastic Container Service Developer Guide</i>.</p>
   *          <p>If the service uses the <code>CODE_DEPLOY</code> deployment controller, the service is
   * 			required to use either an Application Load Balancer or Network Load Balancer. When creating an CodeDeploy deployment group, you
   * 			specify two target groups (referred to as a <code>targetGroupPair</code>). During a
   * 			deployment, CodeDeploy determines which task set in your service has the status
   * 				<code>PRIMARY</code>, and it associates one target group with it. Then, it also
   * 			associates the other target group with the replacement task set. The load balancer can
   * 			also have up to two listeners: a required listener for production traffic and an
   * 			optional listener that you can use to perform validation tests with Lambda functions
   * 			before routing production traffic to it.</p>
   *          <p>If you use the <code>CODE_DEPLOY</code> deployment controller, these values can be
   * 			changed when updating the service.</p>
   *          <p>For Application Load Balancers and Network Load Balancers, this object must contain the load balancer target group ARN,
   * 			the container name, and the container port to access from the load balancer. The
   * 			container name must be as it appears in a container definition. The load balancer name
   * 			parameter must be omitted. When a task from this service is placed on a container
   * 			instance, the container instance and port combination is registered as a target in the
   * 			target group that's specified here.</p>
   *          <p>For Classic Load Balancers, this object must contain the load balancer name, the container name , and
   * 			the container port to access from the load balancer. The container name must be as it
   * 			appears in a container definition. The target group ARN parameter must be omitted.
   * 			When a task from this service is placed on a container instance, the container instance
   * 			is registered with the load balancer that's specified here.</p>
   *          <p>Services with tasks that use the <code>awsvpc</code> network mode (for example, those
   * 			with the Fargate launch type) only support Application Load Balancers and Network Load Balancers. Classic Load Balancers
   * 			aren't supported. Also, when you create any target groups for these services, you must
   * 			choose <code>ip</code> as the target type, not <code>instance</code>. This is because
   * 			tasks that use the <code>awsvpc</code> network mode are associated with an elastic
   * 			network interface, not an Amazon EC2 instance.</p>
   * @public
   */
  loadBalancers?: LoadBalancer[] | undefined;

  /**
   * <p>The details of the service discovery registry to associate with this service. For more
   * 			information, see <a href="https://docs.aws.amazon.com/AmazonECS/latest/developerguide/service-discovery.html">Service
   * 				discovery</a>.</p>
   *          <note>
   *             <p>Each service may be associated with one service registry. Multiple service
   * 				registries for each service isn't supported.</p>
   *          </note>
   * @public
   */
  serviceRegistries?: ServiceRegistry[] | undefined;

  /**
   * <p>The number of instantiations of the specified task definition to place and keep
   * 			running in your service.</p>
   *          <p>This is required if <code>schedulingStrategy</code> is <code>REPLICA</code> or isn't
   * 			specified. If <code>schedulingStrategy</code> is <code>DAEMON</code> then this isn't
   * 			required.</p>
   * @public
   */
  desiredCount?: number | undefined;

  /**
   * <p>An identifier that you provide to ensure the idempotency of the request. It must be
   * 			unique and is case sensitive. Up to 36 ASCII characters in the range of 33-126 (inclusive) are allowed.</p>
   * @public
   */
  clientToken?: string | undefined;

  /**
   * <p>The infrastructure that you run your service on. For more information, see <a href="https://docs.aws.amazon.com/AmazonECS/latest/developerguide/launch_types.html">Amazon ECS
   * 				launch types</a> in the <i>Amazon Elastic Container Service Developer Guide</i>.</p>
   *          <p>The <code>FARGATE</code> launch type runs your tasks on Fargate On-Demand
   * 			infrastructure.</p>
   *          <note>
   *             <p>Fargate Spot infrastructure is available for use but a capacity provider
   * 				strategy must be used. For more information, see <a href="https://docs.aws.amazon.com/AmazonECS/latest/developerguide/fargate-capacity-providers.html">Fargate capacity providers</a> in the <i>Amazon ECS
   * 					Developer Guide</i>.</p>
   *          </note>
   *          <p>The <code>EC2</code> launch type runs your tasks on Amazon EC2 instances registered to your
   * 			cluster.</p>
   *          <p>The <code>EXTERNAL</code> launch type runs your tasks on your on-premises server or
   * 			virtual machine (VM) capacity registered to your cluster.</p>
   *          <p>A service can use either a launch type or a capacity provider strategy. If a
   * 				<code>launchType</code> is specified, the <code>capacityProviderStrategy</code>
   * 			parameter must be omitted.</p>
   * @public
   */
  launchType?: LaunchType | undefined;

  /**
   * <p>The capacity provider strategy to use for the service.</p>
   *          <p>If a <code>capacityProviderStrategy</code> is specified, the <code>launchType</code>
   * 			parameter must be omitted. If no <code>capacityProviderStrategy</code> or
   * 				<code>launchType</code> is specified, the
   * 				<code>defaultCapacityProviderStrategy</code> for the cluster is used.</p>
   *          <p>A capacity provider strategy can contain a maximum of 20 capacity providers.</p>
   * @public
   */
  capacityProviderStrategy?: CapacityProviderStrategyItem[] | undefined;

  /**
   * <p>The platform version that your tasks in the service are running on. A platform version
   * 			is specified only for tasks using the Fargate launch type. If one isn't
   * 			specified, the <code>LATEST</code> platform version is used. For more information, see
   * 				<a href="https://docs.aws.amazon.com/AmazonECS/latest/developerguide/platform_versions.html">Fargate platform
   * 				versions</a> in the <i>Amazon Elastic Container Service Developer Guide</i>.</p>
   * @public
   */
  platformVersion?: string | undefined;

  /**
   * <p>The name or full Amazon Resource Name (ARN) of the IAM role that allows Amazon ECS to make calls to your
   * 			load balancer on your behalf. This parameter is only permitted if you are using a load
   * 			balancer with your service and your task definition doesn't use the <code>awsvpc</code>
   * 			network mode. If you specify the <code>role</code> parameter, you must also specify a
   * 			load balancer object with the <code>loadBalancers</code> parameter.</p>
   *          <important>
   *             <p>If your account has already created the Amazon ECS service-linked role, that role is
   * 				used for your service unless you specify a role here. The service-linked role is
   * 				required if your task definition uses the <code>awsvpc</code> network mode or if the
   * 				service is configured to use service discovery, an external deployment controller,
   * 				multiple target groups, or Elastic Inference accelerators in which case you don't
   * 				specify a role here. For more information, see <a href="https://docs.aws.amazon.com/AmazonECS/latest/developerguide/using-service-linked-roles.html">Using
   * 					service-linked roles for Amazon ECS</a> in the <i>Amazon Elastic Container Service Developer Guide</i>.</p>
   *          </important>
   *          <p>If your specified role has a path other than <code>/</code>, then you must either
   * 			specify the full role ARN (this is recommended) or prefix the role name with the path.
   * 			For example, if a role with the name <code>bar</code> has a path of <code>/foo/</code>
   * 			then you would specify <code>/foo/bar</code> as the role name. For more information, see
   * 				<a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_identifiers.html#identifiers-friendly-names">Friendly names and paths</a> in the <i>IAM User
   * 			Guide</i>.</p>
   * @public
   */
  role?: string | undefined;

  /**
   * <p>Optional deployment parameters that control how many tasks run during the deployment
   * 			and the ordering of stopping and starting tasks.</p>
   * @public
   */
  deploymentConfiguration?: DeploymentConfiguration | undefined;

  /**
   * <p>An array of placement constraint objects to use for tasks in your service. You can
   * 			specify a maximum of 10 constraints for each task. This limit includes constraints in
   * 			the task definition and those specified at runtime.</p>
   * @public
   */
  placementConstraints?: PlacementConstraint[] | undefined;

  /**
   * <p>The placement strategy objects to use for tasks in your service. You can specify a
   * 			maximum of 5 strategy rules for each service.</p>
   * @public
   */
  placementStrategy?: PlacementStrategy[] | undefined;

  /**
   * <p>The network configuration for the service. This parameter is required for task
   * 			definitions that use the <code>awsvpc</code> network mode to receive their own elastic
   * 			network interface, and it isn't supported for other network modes. For more information,
   * 			see <a href="https://docs.aws.amazon.com/AmazonECS/latest/developerguide/task-networking.html">Task networking</a>
   * 			in the <i>Amazon Elastic Container Service Developer Guide</i>.</p>
   * @public
   */
  networkConfiguration?: NetworkConfiguration | undefined;

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
   * <p>The scheduling strategy to use for the service. For more information, see <a href="https://docs.aws.amazon.com/AmazonECS/latest/developerguide/ecs_services.html">Services</a>.</p>
   *          <p>There are two service scheduler strategies available:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>REPLICA</code>-The replica scheduling strategy places and
   * 					maintains the desired number of tasks across your cluster. By default, the
   * 					service scheduler spreads tasks across Availability Zones. You can use task
   * 					placement strategies and constraints to customize task placement decisions. This
   * 					scheduler strategy is required if the service uses the <code>CODE_DEPLOY</code>
   * 					or <code>EXTERNAL</code> deployment controller types.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>DAEMON</code>-The daemon scheduling strategy deploys exactly one
   * 					task on each active container instance that meets all of the task placement
   * 					constraints that you specify in your cluster. The service scheduler also
   * 					evaluates the task placement constraints for running tasks and will stop tasks
   * 					that don't meet the placement constraints. When you're using this strategy, you
   * 					don't need to specify a desired number of tasks, a task placement strategy, or
   * 					use Service Auto Scaling policies.</p>
   *                <note>
   *                   <p>Tasks using the Fargate launch type or the
   * 							<code>CODE_DEPLOY</code> or <code>EXTERNAL</code> deployment controller
   * 						types don't support the <code>DAEMON</code> scheduling strategy.</p>
   *                </note>
   *             </li>
   *          </ul>
   * @public
   */
  schedulingStrategy?: SchedulingStrategy | undefined;

  /**
   * <p>The deployment controller to use for the service. If no deployment controller is
   * 			specified, the default value of <code>ECS</code> is used.</p>
   * @public
   */
  deploymentController?: DeploymentController | undefined;

  /**
   * <p>The metadata that you apply to the service to help you categorize and organize them.
   * 			Each tag consists of a key and an optional value, both of which you define. When a
   * 			service is deleted, the tags are deleted as well.</p>
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
   * <p>Specifies whether to turn on Amazon ECS managed tags for the tasks within the service. For
   * 			more information, see <a href="https://docs.aws.amazon.com/AmazonECS/latest/developerguide/ecs-using-tags.html">Tagging your Amazon ECS
   * 				resources</a> in the <i>Amazon Elastic Container Service Developer Guide</i>.</p>
   *          <p>When you use Amazon ECS managed tags, you must set the <code>propagateTags</code>
   * 			request parameter.</p>
   * @public
   */
  enableECSManagedTags?: boolean | undefined;

  /**
   * <p>Specifies whether to propagate the tags from the task definition to the task. If no
   * 			value is specified, the tags aren't propagated. Tags can only be propagated to the task
   * 			during task creation. To add tags to a task after task creation, use the <a href="https://docs.aws.amazon.com/AmazonECS/latest/APIReference/API_TagResource.html">TagResource</a> API action.</p>
   *          <p>You must set this to a value other than <code>NONE</code> when you use Cost Explorer.
   * 			For more information, see <a href="https://docs.aws.amazon.com/AmazonECS/latest/developerguide/usage-reports.html">Amazon ECS usage reports</a>
   * 			in the <i>Amazon Elastic Container Service Developer Guide</i>.</p>
   *          <p>The default is <code>NONE</code>.</p>
   * @public
   */
  propagateTags?: PropagateTags | undefined;

  /**
   * <p>Determines whether the execute command functionality is turned on for the service. If
   * 				<code>true</code>, this enables execute command functionality on all containers in
   * 			the service tasks.</p>
   * @public
   */
  enableExecuteCommand?: boolean | undefined;

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
   * <p>The configuration for a volume specified in the task definition as a volume that is
   * 			configured at launch time. Currently, the only supported volume type is an Amazon EBS
   * 			volume.</p>
   * @public
   */
  volumeConfigurations?: ServiceVolumeConfiguration[] | undefined;

  /**
   * <p>The VPC Lattice configuration for the service being created.</p>
   * @public
   */
  vpcLatticeConfigurations?: VpcLatticeConfiguration[] | undefined;
}

/**
 * <p>The amount of ephemeral storage to allocate for the deployment.</p>
 * @public
 */
export interface DeploymentEphemeralStorage {
  /**
   * <p>Specify an Key Management Service key ID to encrypt the ephemeral storage for
   * 			deployment.</p>
   * @public
   */
  kmsKeyId?: string | undefined;
}

/**
 * @public
 * @enum
 */
export const DeploymentRolloutState = {
  COMPLETED: "COMPLETED",
  FAILED: "FAILED",
  IN_PROGRESS: "IN_PROGRESS",
} as const;

/**
 * @public
 */
export type DeploymentRolloutState = (typeof DeploymentRolloutState)[keyof typeof DeploymentRolloutState];

/**
 * <p>The Service Connect resource. Each configuration maps a discovery name to a
 * 			Cloud Map service name. The data is stored in Cloud Map as part of the
 * 			Service Connect configuration for each discovery name of this Amazon ECS service.</p>
 *          <p>A task can resolve the <code>dnsName</code> for each of the <code>clientAliases</code>
 * 			of a service. However a task can't resolve the discovery names. If you want to connect
 * 			to a service, refer to the <code>ServiceConnectConfiguration</code> of that service for
 * 			the list of <code>clientAliases</code> that you can use.</p>
 * @public
 */
export interface ServiceConnectServiceResource {
  /**
   * <p>The discovery name of this Service Connect resource.</p>
   *          <p>The <code>discoveryName</code> is the name of the new Cloud Map service that Amazon ECS creates
   * 			for this Amazon ECS service. This must be unique within the Cloud Map namespace. The name can contain up to 64 characters. The name can include lowercase letters,
   * 			numbers, underscores (_), and hyphens (-). The name can't start with a hyphen.</p>
   *          <p>If the <code>discoveryName</code> isn't specified, the port mapping name from the task definition is used in <code>portName.namespace</code>.</p>
   * @public
   */
  discoveryName?: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) for the service in Cloud Map that matches the discovery name for this
   * 			Service Connect resource. You can use this ARN in other integrations with Cloud Map.
   * 			However, Service Connect can't ensure connectivity outside of Amazon ECS.</p>
   * @public
   */
  discoveryArn?: string | undefined;
}

/**
 * <p>The details of an Amazon ECS service deployment. This is used only when a service uses the
 * 				<code>ECS</code> deployment controller type.</p>
 * @public
 */
export interface Deployment {
  /**
   * <p>The ID of the deployment.</p>
   * @public
   */
  id?: string | undefined;

  /**
   * <p>The status of the deployment. The following describes each state.</p>
   *          <dl>
   *             <dt>PRIMARY</dt>
   *             <dd>
   *                <p>The most recent deployment of a service.</p>
   *             </dd>
   *             <dt>ACTIVE</dt>
   *             <dd>
   *                <p>A service deployment that still has running tasks, but are in the process
   * 						of being replaced with a new <code>PRIMARY</code> deployment.</p>
   *             </dd>
   *             <dt>INACTIVE</dt>
   *             <dd>
   *                <p>A deployment that has been completely replaced.</p>
   *             </dd>
   *          </dl>
   * @public
   */
  status?: string | undefined;

  /**
   * <p>The most recent task definition that was specified for the tasks in the service to
   * 			use.</p>
   * @public
   */
  taskDefinition?: string | undefined;

  /**
   * <p>The most recent desired count of tasks that was specified for the service to deploy or
   * 			maintain.</p>
   * @public
   */
  desiredCount?: number | undefined;

  /**
   * <p>The number of tasks in the deployment that are in the <code>PENDING</code>
   * 			status.</p>
   * @public
   */
  pendingCount?: number | undefined;

  /**
   * <p>The number of tasks in the deployment that are in the <code>RUNNING</code>
   * 			status.</p>
   * @public
   */
  runningCount?: number | undefined;

  /**
   * <p>The number of consecutively failed tasks in the deployment. A task is considered a
   * 			failure if the service scheduler can't launch the task, the task doesn't transition to a
   * 				<code>RUNNING</code> state, or if it fails any of its defined health checks and is
   * 			stopped.</p>
   *          <note>
   *             <p>Once a service deployment has one or more successfully running tasks, the failed
   * 				task count resets to zero and stops being evaluated.</p>
   *          </note>
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
   * <p>The launch type the tasks in the service are using. For more information, see <a href="https://docs.aws.amazon.com/AmazonECS/latest/developerguide/launch_types.html">Amazon ECS
   * 				Launch Types</a> in the <i>Amazon Elastic Container Service Developer Guide</i>.</p>
   * @public
   */
  launchType?: LaunchType | undefined;

  /**
   * <p>The platform version that your tasks in the service run on. A platform version is only
   * 			specified for tasks using the Fargate launch type. If one isn't specified,
   * 			the <code>LATEST</code> platform version is used. For more information, see <a href="https://docs.aws.amazon.com/AmazonECS/latest/developerguide/platform_versions.html">Fargate Platform Versions</a> in the <i>Amazon Elastic Container Service Developer Guide</i>.</p>
   * @public
   */
  platformVersion?: string | undefined;

  /**
   * <p>The operating system that your tasks in the service, or tasks are running on. A
   * 			platform family is specified only for tasks using the Fargate launch type. </p>
   *          <p> All tasks that run as part of this service must use the same
   * 				<code>platformFamily</code> value as the service, for example, <code>
   * 			LINUX.</code>.</p>
   * @public
   */
  platformFamily?: string | undefined;

  /**
   * <p>The VPC subnet and security group configuration for tasks that receive their own
   *             elastic network interface by using the <code>awsvpc</code> networking mode.</p>
   * @public
   */
  networkConfiguration?: NetworkConfiguration | undefined;

  /**
   * <note>
   *             <p>The <code>rolloutState</code> of a service is only returned for services that use
   * 				the rolling update (<code>ECS</code>) deployment type that aren't behind a
   * 				Classic Load Balancer.</p>
   *          </note>
   *          <p>The rollout state of the deployment. When a service deployment is started, it begins
   * 			in an <code>IN_PROGRESS</code> state. When the service reaches a steady state, the
   * 			deployment transitions to a <code>COMPLETED</code> state. If the service fails to reach
   * 			a steady state and circuit breaker is turned on, the deployment transitions to a
   * 				<code>FAILED</code> state. A deployment in <code>FAILED</code> state doesn't launch
   * 			any new tasks. For more information, see <a href="https://docs.aws.amazon.com/AmazonECS/latest/APIReference/API_DeploymentCircuitBreaker.html">DeploymentCircuitBreaker</a>.</p>
   * @public
   */
  rolloutState?: DeploymentRolloutState | undefined;

  /**
   * <p>A description of the rollout state of a deployment.</p>
   * @public
   */
  rolloutStateReason?: string | undefined;

  /**
   * <p>The details of the Service Connect configuration that's used by this deployment.
   * 			Compare the configuration between multiple deployments when troubleshooting issues with
   * 			new deployments.</p>
   *          <p>The configuration for this service to discover and connect to
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
   * <p>The list of Service Connect resources that are associated with this deployment. Each
   * 			list entry maps a discovery name to a Cloud Map service name.</p>
   * @public
   */
  serviceConnectResources?: ServiceConnectServiceResource[] | undefined;

  /**
   * <p>The details of the volume that was <code>configuredAtLaunch</code>. You can configure
   * 			different settings like the size, throughput, volumeType, and ecryption in <a href="https://docs.aws.amazon.com/AmazonECS/latest/APIReference/API_ServiceManagedEBSVolumeConfiguration.html">ServiceManagedEBSVolumeConfiguration</a>. The <code>name</code> of the volume
   * 			must match the <code>name</code> from the task definition.</p>
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
 * @public
 * @enum
 */
export const ScaleUnit = {
  PERCENT: "PERCENT",
} as const;

/**
 * @public
 */
export type ScaleUnit = (typeof ScaleUnit)[keyof typeof ScaleUnit];

/**
 * <p>A floating-point percentage of the desired number of tasks to place and keep running
 * 			in the task set.</p>
 * @public
 */
export interface Scale {
  /**
   * <p>The value, specified as a percent total of a service's <code>desiredCount</code>, to
   * 			scale the task set. Accepted values are numbers between 0 and 100.</p>
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
 * @public
 * @enum
 */
export const StabilityStatus = {
  STABILIZING: "STABILIZING",
  STEADY_STATE: "STEADY_STATE",
} as const;

/**
 * @public
 */
export type StabilityStatus = (typeof StabilityStatus)[keyof typeof StabilityStatus];

/**
 * <p>Information about a set of Amazon ECS tasks in either an CodeDeploy or an <code>EXTERNAL</code>
 * 			deployment. An Amazon ECS task set includes details such as the desired number of tasks, how
 * 			many tasks are running, and whether the task set serves production traffic.</p>
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
   * <p>The Amazon Resource Name (ARN) of the cluster that the service that hosts the task set exists
   * 			in.</p>
   * @public
   */
  clusterArn?: string | undefined;

  /**
   * <p>The tag specified when a task set is started. If an CodeDeploy deployment created the task
   * 			set, the <code>startedBy</code> parameter is <code>CODE_DEPLOY</code>. If an external
   * 			deployment created the task set, the <code>startedBy</code> field isn't used.</p>
   * @public
   */
  startedBy?: string | undefined;

  /**
   * <p>The external ID associated with the task set.</p>
   *          <p>If an CodeDeploy deployment created a task set, the <code>externalId</code> parameter
   * 			contains the CodeDeploy deployment ID.</p>
   *          <p>If a task set is created for an external deployment and is associated with a service
   * 			discovery registry, the <code>externalId</code> parameter contains the
   * 				<code>ECS_TASK_SET_EXTERNAL_ID</code> Cloud Map attribute.</p>
   * @public
   */
  externalId?: string | undefined;

  /**
   * <p>The status of the task set. The following describes each state.</p>
   *          <dl>
   *             <dt>PRIMARY</dt>
   *             <dd>
   *                <p>The task set is serving production traffic.</p>
   *             </dd>
   *             <dt>ACTIVE</dt>
   *             <dd>
   *                <p>The task set isn't serving production traffic.</p>
   *             </dd>
   *             <dt>DRAINING</dt>
   *             <dd>
   *                <p>The tasks in the task set are being stopped, and their corresponding
   * 						targets are being deregistered from their target group.</p>
   *             </dd>
   *          </dl>
   * @public
   */
  status?: string | undefined;

  /**
   * <p>The task definition that the task set is using.</p>
   * @public
   */
  taskDefinition?: string | undefined;

  /**
   * <p>The computed desired count for the task set. This is calculated by multiplying the
   * 			service's <code>desiredCount</code> by the task set's <code>scale</code> percentage. The
   * 			result is always rounded up. For example, if the computed desired count is 1.2, it
   * 			rounds up to 2 tasks.</p>
   * @public
   */
  computedDesiredCount?: number | undefined;

  /**
   * <p>The number of tasks in the task set that are in the <code>PENDING</code> status during
   * 			a deployment. A task in the <code>PENDING</code> state is preparing to enter the
   * 				<code>RUNNING</code> state. A task set enters the <code>PENDING</code> status when
   * 			it launches for the first time or when it's restarted after being in the
   * 				<code>STOPPED</code> state.</p>
   * @public
   */
  pendingCount?: number | undefined;

  /**
   * <p>The number of tasks in the task set that are in the <code>RUNNING</code> status during
   * 			a deployment. A task in the <code>RUNNING</code> state is running and ready for
   * 			use.</p>
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
   * <p>The launch type the tasks in the task set are using. For more information, see <a href="https://docs.aws.amazon.com/AmazonECS/latest/developerguide/launch_types.html">Amazon ECS
   * 				launch types</a> in the <i>Amazon Elastic Container Service Developer Guide</i>.</p>
   * @public
   */
  launchType?: LaunchType | undefined;

  /**
   * <p>The capacity provider strategy that are associated with the task set.</p>
   * @public
   */
  capacityProviderStrategy?: CapacityProviderStrategyItem[] | undefined;

  /**
   * <p>The Fargate platform version where the tasks in the task set are running. A platform
   * 			version is only specified for tasks run on Fargate. For more information, see <a href="https://docs.aws.amazon.com/AmazonECS/latest/developerguide/platform_versions.html">Fargate platform versions</a> in the <i>Amazon Elastic Container Service Developer Guide</i>.</p>
   * @public
   */
  platformVersion?: string | undefined;

  /**
   * <p>The operating system that your tasks in the set are running on. A platform family is
   * 			specified only for tasks that use the Fargate launch type. </p>
   *          <p> All tasks in the set must have the same value.</p>
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
   * <p>The details for the service discovery registries to assign to this task set. For more
   * 			information, see <a href="https://docs.aws.amazon.com/AmazonECS/latest/developerguide/service-discovery.html">Service
   * 				discovery</a>.</p>
   * @public
   */
  serviceRegistries?: ServiceRegistry[] | undefined;

  /**
   * <p>A floating-point percentage of your desired number of tasks to place and keep running
   * 			in the task set.</p>
   * @public
   */
  scale?: Scale | undefined;

  /**
   * <p>The stability status. This indicates whether the task set has reached a steady state.
   * 			If the following conditions are met, the task set are in
   * 			<code>STEADY_STATE</code>:</p>
   *          <ul>
   *             <li>
   *                <p>The task <code>runningCount</code> is equal to the
   * 						<code>computedDesiredCount</code>.</p>
   *             </li>
   *             <li>
   *                <p>The <code>pendingCount</code> is <code>0</code>.</p>
   *             </li>
   *             <li>
   *                <p>There are no tasks that are running on container instances in the
   * 						<code>DRAINING</code> status.</p>
   *             </li>
   *             <li>
   *                <p>All tasks are reporting a healthy status from the load balancers, service
   * 					discovery, and container health checks.</p>
   *             </li>
   *          </ul>
   *          <p>If any of those conditions aren't met, the stability status returns
   * 				<code>STABILIZING</code>.</p>
   * @public
   */
  stabilityStatus?: StabilityStatus | undefined;

  /**
   * <p>The Unix timestamp for the time when the task set stability status was
   * 			retrieved.</p>
   * @public
   */
  stabilityStatusAt?: Date | undefined;

  /**
   * <p>The metadata that you apply to the task set to help you categorize and organize them.
   * 			Each tag consists of a key and an optional value. You define both.</p>
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
   * <p>The ARN that identifies the service. For more information about the ARN format,
   * 			see <a href="https://docs.aws.amazon.com/AmazonECS/latest/developerguide/ecs-account-settings.html#ecs-resource-ids">Amazon Resource Name (ARN)</a> in the <i>Amazon ECS Developer Guide</i>.</p>
   * @public
   */
  serviceArn?: string | undefined;

  /**
   * <p>The name of your service. Up to 255 letters (uppercase and lowercase), numbers, underscores, and hyphens are allowed. Service names must be unique within
   * 			a cluster. However, you can have similarly named services in multiple clusters within a
   * 			Region or across multiple Regions.</p>
   * @public
   */
  serviceName?: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the cluster that hosts the service.</p>
   * @public
   */
  clusterArn?: string | undefined;

  /**
   * <p>A list of Elastic Load Balancing load balancer objects. It contains the load balancer name, the
   * 			container name, and the container port to access from the load balancer. The container
   * 			name is as it appears in a container definition.</p>
   * @public
   */
  loadBalancers?: LoadBalancer[] | undefined;

  /**
   * <p>The details for the service discovery registries to assign to this service. For more
   * 			information, see <a href="https://docs.aws.amazon.com/AmazonECS/latest/developerguide/service-discovery.html">Service
   * 				Discovery</a>.</p>
   * @public
   */
  serviceRegistries?: ServiceRegistry[] | undefined;

  /**
   * <p>The status of the service. The valid values are <code>ACTIVE</code>,
   * 				<code>DRAINING</code>, or <code>INACTIVE</code>.</p>
   * @public
   */
  status?: string | undefined;

  /**
   * <p>The desired number of instantiations of the task definition to keep running on the
   * 			service. This value is specified when the service is created with <a href="https://docs.aws.amazon.com/AmazonECS/latest/APIReference/API_CreateService.html">CreateService</a> , and it can be modified with <a href="https://docs.aws.amazon.com/AmazonECS/latest/APIReference/API_UpdateService.html">UpdateService</a>.</p>
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
   * <p>The launch type the service is using. When using the DescribeServices API, this field
   * 			is omitted if the service was created using a capacity provider strategy.</p>
   * @public
   */
  launchType?: LaunchType | undefined;

  /**
   * <p>The capacity provider strategy the service uses. When using the DescribeServices API,
   * 			this field is omitted if the service was created using a launch type.</p>
   * @public
   */
  capacityProviderStrategy?: CapacityProviderStrategyItem[] | undefined;

  /**
   * <p>The platform version to run your service on. A platform version is only specified for
   * 			tasks that are hosted on Fargate. If one isn't specified, the <code>LATEST</code>
   * 			platform version is used. For more information, see <a href="https://docs.aws.amazon.com/AmazonECS/latest/developerguide/platform_versions.html">Fargate Platform
   * 				Versions</a> in the <i>Amazon Elastic Container Service Developer Guide</i>.</p>
   * @public
   */
  platformVersion?: string | undefined;

  /**
   * <p>The operating system that your tasks in the service run on. A platform family is
   * 			specified only for tasks using the Fargate launch type. </p>
   *          <p> All tasks that run as part of this service must use the same
   * 				<code>platformFamily</code> value as the service (for example,
   * 			<code>LINUX</code>).</p>
   * @public
   */
  platformFamily?: string | undefined;

  /**
   * <p>The task definition to use for tasks in the service. This value is specified when the
   * 			service is created with <a href="https://docs.aws.amazon.com/AmazonECS/latest/APIReference/API_CreateService.html">CreateService</a>,
   * 			and it can be modified with <a href="https://docs.aws.amazon.com/AmazonECS/latest/APIReference/API_UpdateService.html">UpdateService</a>.</p>
   * @public
   */
  taskDefinition?: string | undefined;

  /**
   * <p>Optional deployment parameters that control how many tasks run during the deployment
   * 			and the ordering of stopping and starting tasks.</p>
   * @public
   */
  deploymentConfiguration?: DeploymentConfiguration | undefined;

  /**
   * <p>Information about a set of Amazon ECS tasks in either an CodeDeploy or an <code>EXTERNAL</code>
   * 			deployment. An Amazon ECS task set includes details such as the desired number of tasks, how
   * 			many tasks are running, and whether the task set serves production traffic.</p>
   * @public
   */
  taskSets?: TaskSet[] | undefined;

  /**
   * <p>The current state of deployments for the service.</p>
   * @public
   */
  deployments?: Deployment[] | undefined;

  /**
   * <p>The ARN of the IAM role that's associated with the service. It allows the Amazon ECS
   * 			container agent to register container instances with an Elastic Load Balancing load balancer.</p>
   * @public
   */
  roleArn?: string | undefined;

  /**
   * <p>The event stream for your service. A maximum of 100 of the latest events are
   * 			displayed.</p>
   * @public
   */
  events?: ServiceEvent[] | undefined;

  /**
   * <p>The Unix timestamp for the time when the service was created.</p>
   * @public
   */
  createdAt?: Date | undefined;

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
   * <p>The VPC subnet and security group configuration for tasks that receive their own
   *             elastic network interface by using the <code>awsvpc</code> networking mode.</p>
   * @public
   */
  networkConfiguration?: NetworkConfiguration | undefined;

  /**
   * <p>The period of time, in seconds, that the Amazon ECS service scheduler ignores unhealthy
   * 			Elastic Load Balancing target health checks after a task has first started.</p>
   * @public
   */
  healthCheckGracePeriodSeconds?: number | undefined;

  /**
   * <p>The scheduling strategy to use for the service. For more information, see <a href="https://docs.aws.amazon.com/AmazonECS/latest/developerguide/ecs_services.html">Services</a>.</p>
   *          <p>There are two service scheduler strategies available.</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>REPLICA</code>-The replica scheduling strategy places and
   * 					maintains the desired number of tasks across your cluster. By default, the
   * 					service scheduler spreads tasks across Availability Zones. You can use task
   * 					placement strategies and constraints to customize task placement
   * 					decisions.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>DAEMON</code>-The daemon scheduling strategy deploys exactly one
   * 					task on each active container instance. This task meets all of the task
   * 					placement constraints that you specify in your cluster. The service scheduler
   * 					also evaluates the task placement constraints for running tasks. It stop tasks
   * 					that don't meet the placement constraints.</p>
   *                <note>
   *                   <p>Fargate tasks don't support the <code>DAEMON</code>
   * 						scheduling strategy.</p>
   *                </note>
   *             </li>
   *          </ul>
   * @public
   */
  schedulingStrategy?: SchedulingStrategy | undefined;

  /**
   * <p>The deployment controller type the service is using. </p>
   * @public
   */
  deploymentController?: DeploymentController | undefined;

  /**
   * <p>The metadata that you apply to the service to help you categorize and organize them.
   * 			Each tag consists of a key and an optional value. You define bot the key and
   * 			value.</p>
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
   * <p>The principal that created the service.</p>
   * @public
   */
  createdBy?: string | undefined;

  /**
   * <p>Determines whether to use Amazon ECS managed tags for the tasks in the service. For more
   * 			information, see <a href="https://docs.aws.amazon.com/AmazonECS/latest/developerguide/ecs-using-tags.html">Tagging Your Amazon ECS
   * 				Resources</a> in the <i>Amazon Elastic Container Service Developer Guide</i>.</p>
   * @public
   */
  enableECSManagedTags?: boolean | undefined;

  /**
   * <p>Determines whether to propagate the tags from the task definition or the service to
   * 			the task. If no value is specified, the tags aren't propagated.</p>
   * @public
   */
  propagateTags?: PropagateTags | undefined;

  /**
   * <p>Determines whether the execute command functionality is turned on for the service. If
   * 				<code>true</code>, the execute command functionality is turned on for all containers
   * 			in tasks as part of the service.</p>
   * @public
   */
  enableExecuteCommand?: boolean | undefined;

  /**
   * <p>Indicates whether to use Availability Zone rebalancing for the service.</p>
   *          <p>For more information, see <a href="https://docs.aws.amazon.com/AmazonECS/latest/developerguide/service-rebalancing.html">Balancing an Amazon ECS service across Availability Zones</a> in
   * 			the <i>
   *                <i>Amazon Elastic Container Service Developer Guide</i>
   *             </i>.</p>
   * @public
   */
  availabilityZoneRebalancing?: AvailabilityZoneRebalancing | undefined;
}

/**
 * @public
 */
export interface CreateServiceResponse {
  /**
   * <p>The full description of your service following the create call.</p>
   *          <p>A service will return either a <code>capacityProviderStrategy</code> or
   * 				<code>launchType</code> parameter, but not both, depending where one was specified
   * 			when it was created.</p>
   *          <p>If a service is using the <code>ECS</code> deployment controller, the
   * 				<code>deploymentController</code> and <code>taskSets</code> parameters will not be
   * 			returned.</p>
   *          <p>if the service uses the <code>CODE_DEPLOY</code> deployment controller, the
   * 				<code>deploymentController</code>, <code>taskSets</code> and
   * 				<code>deployments</code> parameters will be returned, however the
   * 				<code>deployments</code> parameter will be an empty list.</p>
   * @public
   */
  service?: Service | undefined;
}

/**
 * <p>The specified platform version doesn't satisfy the required capabilities of the task
 * 			definition.</p>
 * @public
 */
export class PlatformTaskDefinitionIncompatibilityException extends __BaseException {
  readonly name: "PlatformTaskDefinitionIncompatibilityException" = "PlatformTaskDefinitionIncompatibilityException";
  readonly $fault: "client" = "client";
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<PlatformTaskDefinitionIncompatibilityException, __BaseException>) {
    super({
      name: "PlatformTaskDefinitionIncompatibilityException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, PlatformTaskDefinitionIncompatibilityException.prototype);
  }
}

/**
 * <p>The specified platform version doesn't exist.</p>
 * @public
 */
export class PlatformUnknownException extends __BaseException {
  readonly name: "PlatformUnknownException" = "PlatformUnknownException";
  readonly $fault: "client" = "client";
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<PlatformUnknownException, __BaseException>) {
    super({
      name: "PlatformUnknownException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, PlatformUnknownException.prototype);
  }
}

/**
 * <p>The specified task isn't supported in this Region.</p>
 * @public
 */
export class UnsupportedFeatureException extends __BaseException {
  readonly name: "UnsupportedFeatureException" = "UnsupportedFeatureException";
  readonly $fault: "client" = "client";
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<UnsupportedFeatureException, __BaseException>) {
    super({
      name: "UnsupportedFeatureException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, UnsupportedFeatureException.prototype);
  }
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
   * <p>The short name or full Amazon Resource Name (ARN) of the cluster that hosts the service to create the
   * 			task set in.</p>
   * @public
   */
  cluster: string | undefined;

  /**
   * <p>An optional non-unique tag that identifies this task set in external systems. If the
   * 			task set is associated with a service discovery registry, the tasks in this task set
   * 			will have the <code>ECS_TASK_SET_EXTERNAL_ID</code> Cloud Map attribute set to the provided
   * 			value.</p>
   * @public
   */
  externalId?: string | undefined;

  /**
   * <p>The task definition for the tasks in the task set to use. If a revision isn't
   * 			specified, the latest <code>ACTIVE</code> revision is used.</p>
   * @public
   */
  taskDefinition: string | undefined;

  /**
   * <p>An object representing the network configuration for a task set.</p>
   * @public
   */
  networkConfiguration?: NetworkConfiguration | undefined;

  /**
   * <p>A load balancer object representing the load balancer to use with the task set. The
   * 			supported load balancer types are either an Application Load Balancer or a Network Load Balancer.</p>
   * @public
   */
  loadBalancers?: LoadBalancer[] | undefined;

  /**
   * <p>The details of the service discovery registries to assign to this task set. For more
   * 			information, see <a href="https://docs.aws.amazon.com/AmazonECS/latest/developerguide/service-discovery.html">Service
   * 				discovery</a>.</p>
   * @public
   */
  serviceRegistries?: ServiceRegistry[] | undefined;

  /**
   * <p>The launch type that new tasks in the task set uses. For more information, see <a href="https://docs.aws.amazon.com/AmazonECS/latest/developerguide/launch_types.html">Amazon ECS
   * 				launch types</a> in the <i>Amazon Elastic Container Service Developer Guide</i>.</p>
   *          <p>If a <code>launchType</code> is specified, the <code>capacityProviderStrategy</code>
   * 			parameter must be omitted.</p>
   * @public
   */
  launchType?: LaunchType | undefined;

  /**
   * <p>The capacity provider strategy to use for the task set.</p>
   *          <p>A capacity provider strategy consists of one or more capacity providers along with the
   * 				<code>base</code> and <code>weight</code> to assign to them. A capacity provider
   * 			must be associated with the cluster to be used in a capacity provider strategy. The
   * 				<a href="https://docs.aws.amazon.com/AmazonECS/latest/APIReference/API_PutClusterCapacityProviders.html">PutClusterCapacityProviders</a> API is used to associate a capacity provider
   * 			with a cluster. Only capacity providers with an <code>ACTIVE</code> or
   * 				<code>UPDATING</code> status can be used.</p>
   *          <p>If a <code>capacityProviderStrategy</code> is specified, the <code>launchType</code>
   * 			parameter must be omitted. If no <code>capacityProviderStrategy</code> or
   * 				<code>launchType</code> is specified, the
   * 				<code>defaultCapacityProviderStrategy</code> for the cluster is used.</p>
   *          <p>If specifying a capacity provider that uses an Auto Scaling group, the capacity
   * 			provider must already be created. New capacity providers can be created with the <a href="https://docs.aws.amazon.com/AmazonECS/latest/APIReference/API_CreateCapacityProviderProvider.html">CreateCapacityProviderProvider</a>API operation.</p>
   *          <p>To use a Fargate capacity provider, specify either the <code>FARGATE</code> or
   * 				<code>FARGATE_SPOT</code> capacity providers. The Fargate capacity providers are
   * 			available to all accounts and only need to be associated with a cluster to be
   * 			used.</p>
   *          <p>The <a href="https://docs.aws.amazon.com/AmazonECS/latest/APIReference/API_PutClusterCapacityProviders.html">PutClusterCapacityProviders</a> API operation is used to update the list of
   * 			available capacity providers for a cluster after the cluster is created.</p>
   * @public
   */
  capacityProviderStrategy?: CapacityProviderStrategyItem[] | undefined;

  /**
   * <p>The platform version that the tasks in the task set uses. A platform version is
   * 			specified only for tasks using the Fargate launch type. If one isn't
   * 			specified, the <code>LATEST</code> platform version is used.</p>
   * @public
   */
  platformVersion?: string | undefined;

  /**
   * <p>A floating-point percentage of the desired number of tasks to place and keep running
   * 			in the task set.</p>
   * @public
   */
  scale?: Scale | undefined;

  /**
   * <p>An identifier that you provide to ensure the idempotency of the request. It must be
   * 			unique and is case sensitive. Up to 36 ASCII characters in the range of 33-126 (inclusive) are allowed.</p>
   * @public
   */
  clientToken?: string | undefined;

  /**
   * <p>The metadata that you apply to the task set to help you categorize and organize them.
   * 			Each tag consists of a key and an optional value. You define both. When a service is
   * 			deleted, the tags are deleted.</p>
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
export interface CreateTaskSetResponse {
  /**
   * <p>Information about a set of Amazon ECS tasks in either an CodeDeploy or an
   * 				<code>EXTERNAL</code> deployment. A task set includes details such as the desired
   * 			number of tasks, how many tasks are running, and whether the task set serves production
   * 			traffic.</p>
   * @public
   */
  taskSet?: TaskSet | undefined;
}

/**
 * <p>The specified service isn't active. You can't update a service that's inactive. If you
 * 			have previously deleted a service, you can re-create it with <a href="https://docs.aws.amazon.com/AmazonECS/latest/APIReference/API_CreateService.html">CreateService</a>.</p>
 * @public
 */
export class ServiceNotActiveException extends __BaseException {
  readonly name: "ServiceNotActiveException" = "ServiceNotActiveException";
  readonly $fault: "client" = "client";
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<ServiceNotActiveException, __BaseException>) {
    super({
      name: "ServiceNotActiveException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, ServiceNotActiveException.prototype);
  }
}

/**
 * <p>The specified service wasn't found. You can view your available services with <a href="https://docs.aws.amazon.com/AmazonECS/latest/APIReference/API_ListServices.html">ListServices</a>. Amazon ECS services are cluster specific and Region
 * 			specific.</p>
 * @public
 */
export class ServiceNotFoundException extends __BaseException {
  readonly name: "ServiceNotFoundException" = "ServiceNotFoundException";
  readonly $fault: "client" = "client";
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<ServiceNotFoundException, __BaseException>) {
    super({
      name: "ServiceNotFoundException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, ServiceNotFoundException.prototype);
  }
}

/**
 * @public
 * @enum
 */
export const SettingName = {
  AWSVPC_TRUNKING: "awsvpcTrunking",
  CONTAINER_INSIGHTS: "containerInsights",
  CONTAINER_INSTANCE_LONG_ARN_FORMAT: "containerInstanceLongArnFormat",
  DEFAULT_LOG_DRIVER_MODE: "defaultLogDriverMode",
  FARGATE_FIPS_MODE: "fargateFIPSMode",
  FARGATE_TASK_RETIREMENT_WAIT_PERIOD: "fargateTaskRetirementWaitPeriod",
  GUARD_DUTY_ACTIVATE: "guardDutyActivate",
  SERVICE_LONG_ARN_FORMAT: "serviceLongArnFormat",
  TAG_RESOURCE_AUTHORIZATION: "tagResourceAuthorization",
  TASK_LONG_ARN_FORMAT: "taskLongArnFormat",
} as const;

/**
 * @public
 */
export type SettingName = (typeof SettingName)[keyof typeof SettingName];

/**
 * @public
 */
export interface DeleteAccountSettingRequest {
  /**
   * <p>The resource name to disable the account setting for. If
   * 				<code>serviceLongArnFormat</code> is specified, the ARN for your Amazon ECS services is
   * 			affected. If <code>taskLongArnFormat</code> is specified, the ARN and resource ID for
   * 			your Amazon ECS tasks is affected. If <code>containerInstanceLongArnFormat</code> is
   * 			specified, the ARN and resource ID for your Amazon ECS container instances is affected. If
   * 				<code>awsvpcTrunking</code> is specified, the ENI limit for your Amazon ECS container
   * 			instances is affected.</p>
   * @public
   */
  name: SettingName | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the principal. It can be a user, role, or the
   * 			root user. If you specify the root user, it disables the account setting for all users, roles,
   * 			and the root user of the account unless a user or role explicitly overrides these settings.
   * 			If this field is omitted, the setting is changed only for the authenticated user.</p>
   *          <p>In order to use this parameter, you must be the root user, or the principal.</p>
   * @public
   */
  principalArn?: string | undefined;
}

/**
 * @public
 * @enum
 */
export const SettingType = {
  AWS_MANAGED: "aws_managed",
  USER: "user",
} as const;

/**
 * @public
 */
export type SettingType = (typeof SettingType)[keyof typeof SettingType];

/**
 * <p>The current account setting for a resource.</p>
 * @public
 */
export interface Setting {
  /**
   * <p>The Amazon ECS resource name.</p>
   * @public
   */
  name?: SettingName | undefined;

  /**
   * <p>Determines whether the account setting is on or off for the specified resource.</p>
   * @public
   */
  value?: string | undefined;

  /**
   * <p>The ARN of the principal. It can be a user, role, or the root user. If this field is
   * 			omitted, the authenticated user is assumed.</p>
   * @public
   */
  principalArn?: string | undefined;

  /**
   * <p>Indicates whether Amazon Web Services manages the account setting, or if the user manages it.</p>
   *          <p>
   *             <code>aws_managed</code> account settings are read-only, as Amazon Web Services manages such on the
   * 			customer's behalf. Currently, the <code>guardDutyActivate</code> account setting is the
   * 			only one Amazon Web Services manages.</p>
   * @public
   */
  type?: SettingType | undefined;
}

/**
 * @public
 */
export interface DeleteAccountSettingResponse {
  /**
   * <p>The account setting for the specified principal ARN.</p>
   * @public
   */
  setting?: Setting | undefined;
}

/**
 * @public
 * @enum
 */
export const TargetType = {
  CONTAINER_INSTANCE: "container-instance",
} as const;

/**
 * @public
 */
export type TargetType = (typeof TargetType)[keyof typeof TargetType];

/**
 * <p>An attribute is a name-value pair that's associated with an Amazon ECS object. Use
 * 			attributes to extend the Amazon ECS data model by adding custom metadata to your resources.
 * 			For more information, see <a href="https://docs.aws.amazon.com/AmazonECS/latest/developerguide/task-placement-constraints.html#attributes">Attributes</a> in the <i>Amazon Elastic Container Service Developer Guide</i>.</p>
 * @public
 */
export interface Attribute {
  /**
   * <p>The name of the attribute. The <code>name</code> must contain between 1 and 128
   * 			characters. The name may contain letters (uppercase and lowercase), numbers, hyphens
   * 			(-), underscores (_), forward slashes (/), back slashes (\), or periods (.).</p>
   * @public
   */
  name: string | undefined;

  /**
   * <p>The value of the attribute. The <code>value</code> must contain between 1 and 128
   * 			characters. It can contain letters (uppercase and lowercase), numbers, hyphens (-),
   * 			underscores (_), periods (.), at signs (@), forward slashes (/), back slashes (\),
   * 			colons (:), or spaces. The value can't start or end with a space.</p>
   * @public
   */
  value?: string | undefined;

  /**
   * <p>The type of the target to attach the attribute with. This parameter is required if you
   * 			use the short form ID for a resource instead of the full ARN.</p>
   * @public
   */
  targetType?: TargetType | undefined;

  /**
   * <p>The ID of the target. You can specify the short form ID for a resource or the full
   * 			Amazon Resource Name (ARN).</p>
   * @public
   */
  targetId?: string | undefined;
}

/**
 * @public
 */
export interface DeleteAttributesRequest {
  /**
   * <p>The short name or full Amazon Resource Name (ARN) of the cluster that contains the resource to delete
   * 			attributes. If you do not specify a cluster, the default cluster is assumed.</p>
   * @public
   */
  cluster?: string | undefined;

  /**
   * <p>The attributes to delete from your resource. You can specify up to 10 attributes for
   * 			each request. For custom attributes, specify the attribute name and target ID, but don't
   * 			specify the value. If you specify the target ID using the short form, you must also
   * 			specify the target type.</p>
   * @public
   */
  attributes: Attribute[] | undefined;
}

/**
 * @public
 */
export interface DeleteAttributesResponse {
  /**
   * <p>A list of attribute objects that were successfully deleted from your resource.</p>
   * @public
   */
  attributes?: Attribute[] | undefined;
}

/**
 * <p>The specified target wasn't found. You can view your available container instances
 * 			with <a href="https://docs.aws.amazon.com/AmazonECS/latest/APIReference/API_ListContainerInstances.html">ListContainerInstances</a>. Amazon ECS container instances are cluster-specific and
 * 			Region-specific.</p>
 * @public
 */
export class TargetNotFoundException extends __BaseException {
  readonly name: "TargetNotFoundException" = "TargetNotFoundException";
  readonly $fault: "client" = "client";
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<TargetNotFoundException, __BaseException>) {
    super({
      name: "TargetNotFoundException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, TargetNotFoundException.prototype);
  }
}

/**
 * @public
 */
export interface DeleteCapacityProviderRequest {
  /**
   * <p>The short name or full Amazon Resource Name (ARN) of the capacity provider to delete.</p>
   * @public
   */
  capacityProvider: string | undefined;
}

/**
 * @public
 */
export interface DeleteCapacityProviderResponse {
  /**
   * <p>The details of the capacity provider.</p>
   * @public
   */
  capacityProvider?: CapacityProvider | undefined;
}

/**
 * <p>You can't delete a cluster that has registered container instances. First, deregister
 * 			the container instances before you can delete the cluster. For more information, see
 * 				<a href="https://docs.aws.amazon.com/AmazonECS/latest/APIReference/API_DeregisterContainerInstance.html">DeregisterContainerInstance</a>.</p>
 * @public
 */
export class ClusterContainsContainerInstancesException extends __BaseException {
  readonly name: "ClusterContainsContainerInstancesException" = "ClusterContainsContainerInstancesException";
  readonly $fault: "client" = "client";
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<ClusterContainsContainerInstancesException, __BaseException>) {
    super({
      name: "ClusterContainsContainerInstancesException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, ClusterContainsContainerInstancesException.prototype);
  }
}

/**
 * <p>You can't delete a cluster that contains services. First, update the service to reduce
 * 			its desired task count to 0, and then delete the service. For more information, see
 * 				<a href="https://docs.aws.amazon.com/AmazonECS/latest/APIReference/API_UpdateService.html">UpdateService</a> and
 * 				<a href="https://docs.aws.amazon.com/AmazonECS/latest/APIReference/API_DeleteService.html">DeleteService</a>.</p>
 * @public
 */
export class ClusterContainsServicesException extends __BaseException {
  readonly name: "ClusterContainsServicesException" = "ClusterContainsServicesException";
  readonly $fault: "client" = "client";
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<ClusterContainsServicesException, __BaseException>) {
    super({
      name: "ClusterContainsServicesException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, ClusterContainsServicesException.prototype);
  }
}

/**
 * <p>You can't delete a cluster that has active tasks.</p>
 * @public
 */
export class ClusterContainsTasksException extends __BaseException {
  readonly name: "ClusterContainsTasksException" = "ClusterContainsTasksException";
  readonly $fault: "client" = "client";
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<ClusterContainsTasksException, __BaseException>) {
    super({
      name: "ClusterContainsTasksException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, ClusterContainsTasksException.prototype);
  }
}

/**
 * @public
 */
export interface DeleteClusterRequest {
  /**
   * <p>The short name or full Amazon Resource Name (ARN) of the cluster to delete.</p>
   * @public
   */
  cluster: string | undefined;
}

/**
 * @public
 */
export interface DeleteClusterResponse {
  /**
   * <p>The full description of the deleted cluster.</p>
   * @public
   */
  cluster?: Cluster | undefined;
}

/**
 * @public
 */
export interface DeleteServiceRequest {
  /**
   * <p>The short name or full Amazon Resource Name (ARN) of the cluster that hosts the service to delete.
   * 			If you do not specify a cluster, the default cluster is assumed.</p>
   * @public
   */
  cluster?: string | undefined;

  /**
   * <p>The name of the service to delete.</p>
   * @public
   */
  service: string | undefined;

  /**
   * <p>If <code>true</code>, allows you to delete a service even if it wasn't scaled down to
   * 			zero tasks. It's only necessary to use this if the service uses the <code>REPLICA</code>
   * 			scheduling strategy.</p>
   * @public
   */
  force?: boolean | undefined;
}

/**
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
export interface DeleteTaskDefinitionsRequest {
  /**
   * <p>The <code>family</code> and <code>revision</code> (<code>family:revision</code>) or
   * 			full Amazon Resource Name (ARN) of the task definition to delete. You must specify a
   * 				<code>revision</code>.</p>
   *          <p>You can specify up to 10 task definitions as a comma separated list.</p>
   * @public
   */
  taskDefinitions: string[] | undefined;
}

/**
 * <p>A failed resource. For a list of common causes, see <a href="https://docs.aws.amazon.com/AmazonECS/latest/developerguide/api_failures_messages.html">API failure
 * 				reasons</a> in the <i>Amazon Elastic Container Service Developer Guide</i>.</p>
 * @public
 */
export interface Failure {
  /**
   * <p>The Amazon Resource Name (ARN) of the failed resource.</p>
   * @public
   */
  arn?: string | undefined;

  /**
   * <p>The reason for the failure.</p>
   * @public
   */
  reason?: string | undefined;

  /**
   * <p>The details of the failure.</p>
   * @public
   */
  detail?: string | undefined;
}

/**
 * @public
 * @enum
 */
export const Compatibility = {
  EC2: "EC2",
  EXTERNAL: "EXTERNAL",
  FARGATE: "FARGATE",
} as const;

/**
 * @public
 */
export type Compatibility = (typeof Compatibility)[keyof typeof Compatibility];

/**
 * @public
 * @enum
 */
export const ContainerCondition = {
  COMPLETE: "COMPLETE",
  HEALTHY: "HEALTHY",
  START: "START",
  SUCCESS: "SUCCESS",
} as const;

/**
 * @public
 */
export type ContainerCondition = (typeof ContainerCondition)[keyof typeof ContainerCondition];

/**
 * <p>The dependencies defined for container startup and shutdown. A container can contain
 * 			multiple dependencies. When a dependency is defined for container startup, for container
 * 			shutdown it is reversed.</p>
 *          <p>Your Amazon ECS container instances require at least version 1.26.0 of the container agent
 * 			to use container dependencies. However, we recommend using the latest container agent
 * 			version. For information about checking your agent version and updating to the latest
 * 			version, see <a href="https://docs.aws.amazon.com/AmazonECS/latest/developerguide/ecs-agent-update.html">Updating the Amazon ECS
 * 				Container Agent</a> in the <i>Amazon Elastic Container Service Developer Guide</i>. If you're using an Amazon ECS-optimized Linux AMI,
 * 			your instance needs at least version 1.26.0-1 of the <code>ecs-init</code> package. If
 * 			your container instances are launched from version <code>20190301</code> or later, then
 * 			they contain the required versions of the container agent and <code>ecs-init</code>. For
 * 			more information, see <a href="https://docs.aws.amazon.com/AmazonECS/latest/developerguide/ecs-optimized_AMI.html">Amazon ECS-optimized Linux AMI</a>
 * 			in the <i>Amazon Elastic Container Service Developer Guide</i>.</p>
 *          <note>
 *             <p>For tasks that use the Fargate launch type, the task or service
 * 				requires the following platforms:</p>
 *             <ul>
 *                <li>
 *                   <p>Linux platform version <code>1.3.0</code> or later.</p>
 *                </li>
 *                <li>
 *                   <p>Windows platform version <code>1.0.0</code> or later.</p>
 *                </li>
 *             </ul>
 *          </note>
 *          <p>For more information about how to create a container dependency, see <a href="https://docs.aws.amazon.com/AmazonECS/latest/developerguide/example_task_definitions.html#example_task_definition-containerdependency">Container dependency</a> in the <i>Amazon Elastic Container Service Developer Guide</i>.</p>
 * @public
 */
export interface ContainerDependency {
  /**
   * <p>The name of a container.</p>
   * @public
   */
  containerName: string | undefined;

  /**
   * <p>The dependency condition of the container. The following are the available conditions
   * 			and their behavior:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>START</code> - This condition emulates the behavior of links and
   * 					volumes today. It validates that a dependent container is started before
   * 					permitting other containers to start.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>COMPLETE</code> - This condition validates that a dependent
   * 					container runs to completion (exits) before permitting other containers to
   * 					start. This can be useful for nonessential containers that run a script and then
   * 					exit. This condition can't be set on an essential container.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>SUCCESS</code> - This condition is the same as
   * 						<code>COMPLETE</code>, but it also requires that the container exits with a
   * 						<code>zero</code> status. This condition can't be set on an essential
   * 					container.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>HEALTHY</code> - This condition validates that the dependent
   * 					container passes its Docker health check before permitting other containers to
   * 					start. This requires that the dependent container has health checks configured.
   * 					This condition is confirmed only at task startup.</p>
   *             </li>
   *          </ul>
   * @public
   */
  condition: ContainerCondition | undefined;
}

/**
 * @public
 * @enum
 */
export const EnvironmentFileType = {
  S3: "s3",
} as const;

/**
 * @public
 */
export type EnvironmentFileType = (typeof EnvironmentFileType)[keyof typeof EnvironmentFileType];

/**
 * <p>A list of files containing the environment variables to pass to a container. You can
 * 			specify up to ten environment files. The file must have a <code>.env</code> file
 * 			extension. Each line in an environment file should contain an environment variable in
 * 				<code>VARIABLE=VALUE</code> format. Lines beginning with <code>#</code> are treated
 * 			as comments and are ignored.</p>
 *          <p>If there are environment variables specified using the <code>environment</code>
 * 			parameter in a container definition, they take precedence over the variables contained
 * 			within an environment file. If multiple environment files are specified that contain the
 * 			same variable, they're processed from the top down. We recommend that you use unique
 * 			variable names. For more information, see <a href="https://docs.aws.amazon.com/AmazonECS/latest/developerguide/use-environment-file.html">Use a file to pass
 * 				environment variables to a container</a> in the <i>Amazon Elastic Container Service Developer Guide</i>.</p>
 *          <p>Environment variable files are objects in Amazon S3 and all Amazon S3 security considerations
 * 			apply. </p>
 *          <p>You must use the following platforms for the Fargate launch type:</p>
 *          <ul>
 *             <li>
 *                <p>Linux platform version <code>1.4.0</code> or later.</p>
 *             </li>
 *             <li>
 *                <p>Windows platform version <code>1.0.0</code> or later.</p>
 *             </li>
 *          </ul>
 *          <p>Consider the following when using the Fargate launch type:</p>
 *          <ul>
 *             <li>
 *                <p>The file is handled like a native Docker env-file.</p>
 *             </li>
 *             <li>
 *                <p>There is no support for shell escape handling.</p>
 *             </li>
 *             <li>
 *                <p>The container entry point interperts the <code>VARIABLE</code> values.</p>
 *             </li>
 *          </ul>
 * @public
 */
export interface EnvironmentFile {
  /**
   * <p>The Amazon Resource Name (ARN) of the Amazon S3 object containing the environment
   * 			variable file.</p>
   * @public
   */
  value: string | undefined;

  /**
   * <p>The file type to use. Environment files are objects in Amazon S3. The only supported value
   * 			is <code>s3</code>.</p>
   * @public
   */
  type: EnvironmentFileType | undefined;
}

/**
 * <p>Hostnames and IP address entries that are added to the <code>/etc/hosts</code> file of
 * 			a container via the <code>extraHosts</code> parameter of its <a href="https://docs.aws.amazon.com/AmazonECS/latest/APIReference/API_ContainerDefinition.html">ContainerDefinition</a>. </p>
 * @public
 */
export interface HostEntry {
  /**
   * <p>The hostname to use in the <code>/etc/hosts</code> entry.</p>
   * @public
   */
  hostname: string | undefined;

  /**
   * <p>The IP address to use in the <code>/etc/hosts</code> entry.</p>
   * @public
   */
  ipAddress: string | undefined;
}

/**
 * @public
 * @enum
 */
export const FirelensConfigurationType = {
  FLUENTBIT: "fluentbit",
  FLUENTD: "fluentd",
} as const;

/**
 * @public
 */
export type FirelensConfigurationType = (typeof FirelensConfigurationType)[keyof typeof FirelensConfigurationType];

/**
 * <p>The FireLens configuration for the container. This is used to specify and configure a
 * 			log router for container logs. For more information, see <a href="https://docs.aws.amazon.com/AmazonECS/latest/developerguide/using_firelens.html">Custom log routing</a>
 * 			in the <i>Amazon Elastic Container Service Developer Guide</i>.</p>
 * @public
 */
export interface FirelensConfiguration {
  /**
   * <p>The log router to use. The valid values are <code>fluentd</code> or
   * 				<code>fluentbit</code>.</p>
   * @public
   */
  type: FirelensConfigurationType | undefined;

  /**
   * <p>The options to use when configuring the log router. This field is optional and can be
   * 			used to specify a custom configuration file or to add additional metadata, such as the
   * 			task, task definition, cluster, and container instance details to the log event. If
   * 			specified, the syntax to use is
   * 				<code>"options":\{"enable-ecs-log-metadata":"true|false","config-file-type:"s3|file","config-file-value":"arn:aws:s3:::mybucket/fluent.conf|filepath"\}</code>.
   * 			For more information, see <a href="https://docs.aws.amazon.com/AmazonECS/latest/developerguide/using_firelens.html#firelens-taskdef">Creating
   * 				a task definition that uses a FireLens configuration</a> in the
   * 			<i>Amazon Elastic Container Service Developer Guide</i>.</p>
   *          <note>
   *             <p>Tasks hosted on Fargate only support the <code>file</code> configuration file
   * 				type.</p>
   *          </note>
   * @public
   */
  options?: Record<string, string> | undefined;
}

/**
 * <p>An object representing a container health check. Health check parameters that are
 * 			specified in a container definition override any Docker health checks that exist in the
 * 			container image (such as those specified in a parent image or from the image's
 * 			Dockerfile). This configuration maps to the <code>HEALTHCHECK</code> parameter of docker
 * 			run.</p>
 *          <note>
 *             <p>The Amazon ECS container agent only monitors and reports on the health checks specified
 * 				in the task definition. Amazon ECS does not monitor Docker health checks that are
 * 				embedded in a container image and not specified in the container definition. Health
 * 				check parameters that are specified in a container definition override any Docker
 * 				health checks that exist in the container image.</p>
 *          </note>
 *          <p>You can view the health status of both individual containers and a task with the
 * 			DescribeTasks API operation or when viewing the task details in the console.</p>
 *          <p>The health check is designed to make sure that your containers survive agent restarts,
 * 			upgrades, or temporary unavailability.</p>
 *          <p>Amazon ECS performs health checks on containers with the default that launched the
 * 			container instance or the task.</p>
 *          <p>The following describes the possible <code>healthStatus</code> values for a
 * 			container:</p>
 *          <ul>
 *             <li>
 *                <p>
 *                   <code>HEALTHY</code>-The container health check has passed
 * 					successfully.</p>
 *             </li>
 *             <li>
 *                <p>
 *                   <code>UNHEALTHY</code>-The container health check has failed.</p>
 *             </li>
 *             <li>
 *                <p>
 *                   <code>UNKNOWN</code>-The container health check is being evaluated,
 * 					there's no container health check defined, or Amazon ECS doesn't have the health
 * 					status of the container.</p>
 *             </li>
 *          </ul>
 *          <p>The following describes the possible <code>healthStatus</code> values based on the
 * 			container health checker status of essential containers in the task with the following
 * 			priority order (high to low):</p>
 *          <ul>
 *             <li>
 *                <p>
 *                   <code>UNHEALTHY</code>-One or more essential containers have failed
 * 					their health check.</p>
 *             </li>
 *             <li>
 *                <p>
 *                   <code>UNKNOWN</code>-Any essential container running within the task is
 * 					in an <code>UNKNOWN</code> state and no other essential containers have an
 * 						<code>UNHEALTHY</code> state.</p>
 *             </li>
 *             <li>
 *                <p>
 *                   <code>HEALTHY</code>-All essential containers within the task have
 * 					passed their health checks.</p>
 *             </li>
 *          </ul>
 *          <p>Consider the following task health example with 2 containers.</p>
 *          <ul>
 *             <li>
 *                <p>If Container1 is <code>UNHEALTHY</code> and Container2 is
 * 					<code>UNKNOWN</code>, the task health is <code>UNHEALTHY</code>.</p>
 *             </li>
 *             <li>
 *                <p>If Container1 is <code>UNHEALTHY</code> and Container2 is
 * 					<code>HEALTHY</code>, the task health is <code>UNHEALTHY</code>.</p>
 *             </li>
 *             <li>
 *                <p>If Container1 is <code>HEALTHY</code> and Container2 is <code>UNKNOWN</code>,
 * 					the task health is <code>UNKNOWN</code>.</p>
 *             </li>
 *             <li>
 *                <p>If Container1 is <code>HEALTHY</code> and Container2 is <code>HEALTHY</code>,
 * 					the task health is <code>HEALTHY</code>.</p>
 *             </li>
 *          </ul>
 *          <p>Consider the following task health example with 3 containers.</p>
 *          <ul>
 *             <li>
 *                <p>If Container1 is <code>UNHEALTHY</code> and Container2 is
 * 					<code>UNKNOWN</code>, and Container3 is <code>UNKNOWN</code>, the task health is
 * 						<code>UNHEALTHY</code>.</p>
 *             </li>
 *             <li>
 *                <p>If Container1 is <code>UNHEALTHY</code> and Container2 is
 * 					<code>UNKNOWN</code>, and Container3 is <code>HEALTHY</code>, the task health is
 * 						<code>UNHEALTHY</code>.</p>
 *             </li>
 *             <li>
 *                <p>If Container1 is <code>UNHEALTHY</code> and Container2 is
 * 					<code>HEALTHY</code>, and Container3 is <code>HEALTHY</code>, the task health is
 * 						<code>UNHEALTHY</code>.</p>
 *             </li>
 *             <li>
 *                <p>If Container1 is <code>HEALTHY</code> and Container2 is <code>UNKNOWN</code>,
 * 					and Container3 is <code>HEALTHY</code>, the task health is
 * 					<code>UNKNOWN</code>.</p>
 *             </li>
 *             <li>
 *                <p>If Container1 is <code>HEALTHY</code> and Container2 is <code>UNKNOWN</code>,
 * 					and Container3 is <code>UNKNOWN</code>, the task health is
 * 					<code>UNKNOWN</code>.</p>
 *             </li>
 *             <li>
 *                <p>If Container1 is <code>HEALTHY</code> and Container2 is <code>HEALTHY</code>,
 * 					and Container3 is <code>HEALTHY</code>, the task health is
 * 					<code>HEALTHY</code>.</p>
 *             </li>
 *          </ul>
 *          <p>If a task is run manually, and not as part of a service, the task will continue its
 * 			lifecycle regardless of its health status. For tasks that are part of a service, if the
 * 			task reports as unhealthy then the task will be stopped and the service scheduler will
 * 			replace it.</p>
 *          <p>When a container health check fails for a task that is part of a service, the following process occurs:</p>
 *          <ol>
 *             <li>
 *                <p>The task is marked as <code>UNHEALTHY</code>.</p>
 *             </li>
 *             <li>
 *                <p>The unhealthy task will be stopped, and during the stopping process, it will go through the following states:</p>
 *                <ul>
 *                   <li>
 *                      <p>
 *                         <code>DEACTIVATING</code> - In this state, Amazon ECS performs additional steps before stopping the
 * 							task. For example, for tasks that are part of services configured to use
 * 							Elastic Load Balancing target groups, target groups will be deregistered
 * 							in this state.</p>
 *                   </li>
 *                   <li>
 *                      <p>
 *                         <code>STOPPING</code> - The task is in the process of being stopped.</p>
 *                   </li>
 *                   <li>
 *                      <p>
 *                         <code>DEPROVISIONING</code> - Resources associated with the task are being cleaned up.</p>
 *                   </li>
 *                   <li>
 *                      <p>
 *                         <code>STOPPED</code> - The task has been completely stopped.</p>
 *                   </li>
 *                </ul>
 *             </li>
 *             <li>
 *                <p>After the old task stops, a new task will be launched to ensure service operation, and the new task will go through the following lifecycle:</p>
 *                <ul>
 *                   <li>
 *                      <p>
 *                         <code>PROVISIONING</code> - Resources required for the task are being provisioned.</p>
 *                   </li>
 *                   <li>
 *                      <p>
 *                         <code>PENDING</code> - The task is waiting to be placed on a container instance.</p>
 *                   </li>
 *                   <li>
 *                      <p>
 *                         <code>ACTIVATING</code> - In this state, Amazon ECS pulls container images, creates containers,
 * 							configures task networking, registers load balancer target groups, and
 * 							configures service discovery status.</p>
 *                   </li>
 *                   <li>
 *                      <p>
 *                         <code>RUNNING</code> - The task is running and performing its work.</p>
 *                   </li>
 *                </ul>
 *             </li>
 *          </ol>
 *          <p>For more detailed information about task lifecycle states, see <a href="https://docs.aws.amazon.com/AmazonECS/latest/developerguide/task-lifecycle-explanation.html">Task lifecycle</a> in the <i>Amazon Elastic Container Service Developer Guide</i>.</p>
 *          <p>The following are notes about container health check support:</p>
 *          <ul>
 *             <li>
 *                <p>If the Amazon ECS container agent becomes disconnected from the Amazon ECS service, this
 * 					won't cause a container to transition to an <code>UNHEALTHY</code> status. This
 * 					is by design, to ensure that containers remain running during agent restarts or
 * 					temporary unavailability. The health check status is the "last heard from"
 * 					response from the Amazon ECS agent, so if the container was considered
 * 						<code>HEALTHY</code> prior to the disconnect, that status will remain until
 * 					the agent reconnects and another health check occurs. There are no assumptions
 * 					made about the status of the container health checks.</p>
 *             </li>
 *             <li>
 *                <p>Container health checks require version <code>1.17.0</code> or greater of the
 * 					Amazon ECS container agent. For more information, see <a href="https://docs.aws.amazon.com/AmazonECS/latest/developerguide/ecs-agent-update.html">Updating the
 * 						Amazon ECS container agent</a>.</p>
 *             </li>
 *             <li>
 *                <p>Container health checks are supported for Fargate tasks if
 * 					you're using platform version <code>1.1.0</code> or greater. For more
 * 					information, see <a href="https://docs.aws.amazon.com/AmazonECS/latest/developerguide/platform_versions.html">Fargate
 * 						platform versions</a>.</p>
 *             </li>
 *             <li>
 *                <p>Container health checks aren't supported for tasks that are part of a service
 * 					that's configured to use a Classic Load Balancer.</p>
 *             </li>
 *          </ul>
 *          <p>For an example of how to specify a task definition with multiple containers where
 * 			container dependency is specified, see <a href="https://docs.aws.amazon.com/AmazonECS/latest/developerguide/example_task_definitions.html#example_task_definition-containerdependency">Container dependency</a> in the <i>Amazon Elastic Container Service Developer Guide</i>.</p>
 * @public
 */
export interface HealthCheck {
  /**
   * <p>A string array representing the command that the container runs to determine if it is
   * 			healthy. The string array must start with <code>CMD</code> to run the command arguments
   * 			directly, or <code>CMD-SHELL</code> to run the command with the container's default
   * 			shell. </p>
   *          <p> When you use the Amazon Web Services Management Console JSON panel, the Command Line Interface, or the APIs, enclose the list
   * 			of commands in double quotes and brackets.</p>
   *          <p>
   *             <code>[ "CMD-SHELL", "curl -f http://localhost/ || exit 1" ]</code>
   *          </p>
   *          <p>You don't include the double quotes and brackets when you use the Amazon Web Services Management Console.</p>
   *          <p>
   *             <code> CMD-SHELL, curl -f http://localhost/ || exit 1</code>
   *          </p>
   *          <p>An exit code of 0 indicates success, and non-zero exit code indicates failure. For
   * 			more information, see <code>HealthCheck</code> in the docker container create
   * 			command.</p>
   * @public
   */
  command: string[] | undefined;

  /**
   * <p>The time period in seconds between each health check execution. You may specify
   * 			between 5 and 300 seconds. The default value is 30 seconds. This value applies only when
   * 			you specify a <code>command</code>. </p>
   * @public
   */
  interval?: number | undefined;

  /**
   * <p>The time period in seconds to wait for a health check to succeed before it is
   * 			considered a failure. You may specify between 2 and 60 seconds. The default value is 5.
   * 			This value applies only when you specify a <code>command</code>. </p>
   * @public
   */
  timeout?: number | undefined;

  /**
   * <p>The number of times to retry a failed health check before the container is considered
   * 			unhealthy. You may specify between 1 and 10 retries. The default value is 3. This value
   * 			applies only when you specify a <code>command</code>. </p>
   * @public
   */
  retries?: number | undefined;

  /**
   * <p>The optional grace period to provide containers time to bootstrap before failed health
   * 			checks count towards the maximum number of retries. You can specify between 0 and 300
   * 			seconds. By default, the <code>startPeriod</code> is off. This value applies only when
   * 			you specify a <code>command</code>. </p>
   *          <note>
   *             <p>If a health check succeeds within the <code>startPeriod</code>, then the container
   * 				is considered healthy and any subsequent failures count toward the maximum number of
   * 				retries.</p>
   *          </note>
   * @public
   */
  startPeriod?: number | undefined;
}

/**
 * <p>The Linux capabilities to add or remove from the default Docker configuration for a
 * 			container defined in the task definition. For more detailed information about these
 * 			Linux capabilities, see the <a href="http://man7.org/linux/man-pages/man7/capabilities.7.html">capabilities(7)</a> Linux manual page.</p>
 *          <p>The following describes how Docker processes the Linux capabilities specified in the
 * 				<code>add</code> and <code>drop</code> request parameters. For information about the
 * 			latest behavior, see <a href="https://forums.docker.com/t/docker-compose-order-of-cap-drop-and-cap-add/97136/1">Docker Compose: order of cap_drop and cap_add</a> in the Docker Community
 * 			Forum.</p>
 *          <ul>
 *             <li>
 *                <p>When the container is a privleged container, the container capabilities are
 * 					all of the default Docker capabilities. The capabilities specified in the
 * 						<code>add</code> request parameter, and the <code>drop</code> request
 * 					parameter are ignored.</p>
 *             </li>
 *             <li>
 *                <p>When the <code>add</code> request parameter is set to ALL, the container
 * 					capabilities are all of the default Docker capabilities, excluding those
 * 					specified in the <code>drop</code> request parameter.</p>
 *             </li>
 *             <li>
 *                <p>When the <code>drop</code> request parameter is set to ALL, the container
 * 					capabilities are the capabilities specified in the <code>add</code> request
 * 					parameter.</p>
 *             </li>
 *             <li>
 *                <p>When the <code>add</code> request parameter and the <code>drop</code> request
 * 					parameter are both empty, the capabilities the container capabilities are all of
 * 					the default Docker capabilities.</p>
 *             </li>
 *             <li>
 *                <p>The default is to first drop the capabilities specified in the
 * 						<code>drop</code> request parameter, and then add the capabilities specified
 * 					in the <code>add</code> request parameter.</p>
 *             </li>
 *          </ul>
 * @public
 */
export interface KernelCapabilities {
  /**
   * <p>The Linux capabilities for the container that have been added to the default
   * 			configuration provided by Docker. This parameter maps to <code>CapAdd</code> in the
   * 			docker container create command and the <code>--cap-add</code> option to docker
   * 			run.</p>
   *          <note>
   *             <p>Tasks launched on Fargate only support adding the <code>SYS_PTRACE</code> kernel
   * 				capability.</p>
   *          </note>
   *          <p>Valid values: <code>"ALL" | "AUDIT_CONTROL" | "AUDIT_WRITE" | "BLOCK_SUSPEND" |
   * 				"CHOWN" | "DAC_OVERRIDE" | "DAC_READ_SEARCH" | "FOWNER" | "FSETID" | "IPC_LOCK" |
   * 				"IPC_OWNER" | "KILL" | "LEASE" | "LINUX_IMMUTABLE" | "MAC_ADMIN" | "MAC_OVERRIDE" |
   * 				"MKNOD" | "NET_ADMIN" | "NET_BIND_SERVICE" | "NET_BROADCAST" | "NET_RAW" | "SETFCAP"
   * 				| "SETGID" | "SETPCAP" | "SETUID" | "SYS_ADMIN" | "SYS_BOOT" | "SYS_CHROOT" |
   * 				"SYS_MODULE" | "SYS_NICE" | "SYS_PACCT" | "SYS_PTRACE" | "SYS_RAWIO" |
   * 				"SYS_RESOURCE" | "SYS_TIME" | "SYS_TTY_CONFIG" | "SYSLOG" |
   * 			"WAKE_ALARM"</code>
   *          </p>
   * @public
   */
  add?: string[] | undefined;

  /**
   * <p>The Linux capabilities for the container that have been removed from the default
   * 			configuration provided by Docker. This parameter maps to <code>CapDrop</code> in the
   * 			docker container create command and the <code>--cap-drop</code> option to docker
   * 			run.</p>
   *          <p>Valid values: <code>"ALL" | "AUDIT_CONTROL" | "AUDIT_WRITE" | "BLOCK_SUSPEND" |
   * 				"CHOWN" | "DAC_OVERRIDE" | "DAC_READ_SEARCH" | "FOWNER" | "FSETID" | "IPC_LOCK" |
   * 				"IPC_OWNER" | "KILL" | "LEASE" | "LINUX_IMMUTABLE" | "MAC_ADMIN" | "MAC_OVERRIDE" |
   * 				"MKNOD" | "NET_ADMIN" | "NET_BIND_SERVICE" | "NET_BROADCAST" | "NET_RAW" | "SETFCAP"
   * 				| "SETGID" | "SETPCAP" | "SETUID" | "SYS_ADMIN" | "SYS_BOOT" | "SYS_CHROOT" |
   * 				"SYS_MODULE" | "SYS_NICE" | "SYS_PACCT" | "SYS_PTRACE" | "SYS_RAWIO" |
   * 				"SYS_RESOURCE" | "SYS_TIME" | "SYS_TTY_CONFIG" | "SYSLOG" |
   * 			"WAKE_ALARM"</code>
   *          </p>
   * @public
   */
  drop?: string[] | undefined;
}

/**
 * @public
 * @enum
 */
export const DeviceCgroupPermission = {
  MKNOD: "mknod",
  READ: "read",
  WRITE: "write",
} as const;

/**
 * @public
 */
export type DeviceCgroupPermission = (typeof DeviceCgroupPermission)[keyof typeof DeviceCgroupPermission];

/**
 * <p>An object representing a container instance host device.</p>
 * @public
 */
export interface Device {
  /**
   * <p>The path for the device on the host container instance.</p>
   * @public
   */
  hostPath: string | undefined;

  /**
   * <p>The path inside the container at which to expose the host device.</p>
   * @public
   */
  containerPath?: string | undefined;

  /**
   * <p>The explicit permissions to provide to the container for the device. By default, the
   * 			container has permissions for <code>read</code>, <code>write</code>, and
   * 				<code>mknod</code> for the device.</p>
   * @public
   */
  permissions?: DeviceCgroupPermission[] | undefined;
}

/**
 * <p>The container path, mount options, and size of the tmpfs mount.</p>
 * @public
 */
export interface Tmpfs {
  /**
   * <p>The absolute file path where the tmpfs volume is to be mounted.</p>
   * @public
   */
  containerPath: string | undefined;

  /**
   * <p>The maximum size (in MiB) of the tmpfs volume.</p>
   * @public
   */
  size: number | undefined;

  /**
   * <p>The list of tmpfs volume mount options.</p>
   *          <p>Valid values: <code>"defaults" | "ro" | "rw" | "suid" | "nosuid" | "dev" | "nodev" |
   * 				"exec" | "noexec" | "sync" | "async" | "dirsync" | "remount" | "mand" | "nomand" |
   * 				"atime" | "noatime" | "diratime" | "nodiratime" | "bind" | "rbind" | "unbindable" |
   * 				"runbindable" | "private" | "rprivate" | "shared" | "rshared" | "slave" | "rslave" |
   * 				"relatime" | "norelatime" | "strictatime" | "nostrictatime" | "mode" | "uid" | "gid"
   * 				| "nr_inodes" | "nr_blocks" | "mpol"</code>
   *          </p>
   * @public
   */
  mountOptions?: string[] | undefined;
}

/**
 * <p>The Linux-specific options that are applied to the container, such as Linux <a href="https://docs.aws.amazon.com/AmazonECS/latest/APIReference/API_KernelCapabilities.html">KernelCapabilities</a>.</p>
 * @public
 */
export interface LinuxParameters {
  /**
   * <p>The Linux capabilities for the container that are added to or dropped from the default
   * 			configuration provided by Docker.</p>
   *          <note>
   *             <p>For tasks that use the Fargate launch type,
   * 					<code>capabilities</code> is supported for all platform versions but the
   * 					<code>add</code> parameter is only supported if using platform version 1.4.0 or
   * 				later.</p>
   *          </note>
   * @public
   */
  capabilities?: KernelCapabilities | undefined;

  /**
   * <p>Any host devices to expose to the container. This parameter maps to
   * 				<code>Devices</code> in the docker container create command and the
   * 				<code>--device</code> option to docker run.</p>
   *          <note>
   *             <p>If you're using tasks that use the Fargate launch type, the
   * 					<code>devices</code> parameter isn't supported.</p>
   *          </note>
   * @public
   */
  devices?: Device[] | undefined;

  /**
   * <p>Run an <code>init</code> process inside the container that forwards signals and reaps
   * 			processes. This parameter maps to the <code>--init</code> option to docker run.
   * 			This parameter requires version 1.25 of the Docker Remote API or greater on your container instance. To check the Docker Remote API version on your container instance, log in to your container instance and run the following command: <code>sudo docker version --format '\{\{.Server.APIVersion\}\}'</code>
   *          </p>
   * @public
   */
  initProcessEnabled?: boolean | undefined;

  /**
   * <p>The value for the size (in MiB) of the <code>/dev/shm</code> volume. This parameter
   * 			maps to the <code>--shm-size</code> option to docker run.</p>
   *          <note>
   *             <p>If you are using tasks that use the Fargate launch type, the
   * 					<code>sharedMemorySize</code> parameter is not supported.</p>
   *          </note>
   * @public
   */
  sharedMemorySize?: number | undefined;

  /**
   * <p>The container path, mount options, and size (in MiB) of the tmpfs mount. This
   * 			parameter maps to the <code>--tmpfs</code> option to docker run.</p>
   *          <note>
   *             <p>If you're using tasks that use the Fargate launch type, the
   * 					<code>tmpfs</code> parameter isn't supported.</p>
   *          </note>
   * @public
   */
  tmpfs?: Tmpfs[] | undefined;

  /**
   * <p>The total amount of swap memory (in MiB) a container can use. This parameter will be
   * 			translated to the <code>--memory-swap</code> option to docker run where the value would
   * 			be the sum of the container memory plus the <code>maxSwap</code> value.</p>
   *          <p>If a <code>maxSwap</code> value of <code>0</code> is specified, the container will not
   * 			use swap. Accepted values are <code>0</code> or any positive integer. If the
   * 				<code>maxSwap</code> parameter is omitted, the container will use the swap
   * 			configuration for the container instance it is running on. A <code>maxSwap</code> value
   * 			must be set for the <code>swappiness</code> parameter to be used.</p>
   *          <note>
   *             <p>If you're using tasks that use the Fargate launch type, the
   * 					<code>maxSwap</code> parameter isn't supported.</p>
   *             <p>If you're using tasks on Amazon Linux 2023 the <code>swappiness</code> parameter isn't
   * 				supported.</p>
   *          </note>
   * @public
   */
  maxSwap?: number | undefined;

  /**
   * <p>This allows you to tune a container's memory swappiness behavior. A
   * 				<code>swappiness</code> value of <code>0</code> will cause swapping to not happen
   * 			unless absolutely necessary. A <code>swappiness</code> value of <code>100</code> will
   * 			cause pages to be swapped very aggressively. Accepted values are whole numbers between
   * 				<code>0</code> and <code>100</code>. If the <code>swappiness</code> parameter is not
   * 			specified, a default value of <code>60</code> is used. If a value is not specified for
   * 				<code>maxSwap</code> then this parameter is ignored. This parameter maps to the
   * 				<code>--memory-swappiness</code> option to docker run.</p>
   *          <note>
   *             <p>If you're using tasks that use the Fargate launch type, the
   * 					<code>swappiness</code> parameter isn't supported.</p>
   *             <p>If you're using tasks on Amazon Linux 2023 the <code>swappiness</code> parameter isn't
   * 				supported.</p>
   *          </note>
   * @public
   */
  swappiness?: number | undefined;
}

/**
 * <p>The details for a volume mount point that's used in a container definition.</p>
 * @public
 */
export interface MountPoint {
  /**
   * <p>The name of the volume to mount. Must be a volume name referenced in the
   * 				<code>name</code> parameter of task definition <code>volume</code>.</p>
   * @public
   */
  sourceVolume?: string | undefined;

  /**
   * <p>The path on the container to mount the host volume at.</p>
   * @public
   */
  containerPath?: string | undefined;

  /**
   * <p>If this value is <code>true</code>, the container has read-only access to the volume.
   * 			If this value is <code>false</code>, then the container can write to the volume. The
   * 			default value is <code>false</code>.</p>
   * @public
   */
  readOnly?: boolean | undefined;
}

/**
 * @public
 * @enum
 */
export const ApplicationProtocol = {
  GRPC: "grpc",
  HTTP: "http",
  HTTP2: "http2",
} as const;

/**
 * @public
 */
export type ApplicationProtocol = (typeof ApplicationProtocol)[keyof typeof ApplicationProtocol];

/**
 * @public
 * @enum
 */
export const TransportProtocol = {
  TCP: "tcp",
  UDP: "udp",
} as const;

/**
 * @public
 */
export type TransportProtocol = (typeof TransportProtocol)[keyof typeof TransportProtocol];

/**
 * <p>Port mappings allow containers to access ports on the host container instance to send
 * 			or receive traffic. Port mappings are specified as part of the container
 * 			definition.</p>
 *          <p>If you use containers in a task with the <code>awsvpc</code> or <code>host</code>
 * 			network mode, specify the exposed ports using <code>containerPort</code>. The
 * 				<code>hostPort</code> can be left blank or it must be the same value as the
 * 				<code>containerPort</code>.</p>
 *          <p>Most fields of this parameter (<code>containerPort</code>, <code>hostPort</code>,
 * 				<code>protocol</code>) maps to <code>PortBindings</code> in the docker container
 * 			create command and the <code>--publish</code> option to <code>docker run</code>. If the
 * 			network mode of a task definition is set to <code>host</code>, host ports must either be
 * 			undefined or match the container port in the port mapping.</p>
 *          <note>
 *             <p>You can't expose the same container port for multiple protocols. If you attempt
 * 				this, an error is returned.</p>
 *          </note>
 *          <p>After a task reaches the <code>RUNNING</code> status, manual and automatic host and
 * 			container port assignments are visible in the <code>networkBindings</code> section of
 * 				<a href="https://docs.aws.amazon.com/AmazonECS/latest/APIReference/API_DescribeTasks.html">DescribeTasks</a> API
 * 			responses.</p>
 * @public
 */
export interface PortMapping {
  /**
   * <p>The port number on the container that's bound to the user-specified or automatically
   * 			assigned host port.</p>
   *          <p>If you use containers in a task with the <code>awsvpc</code> or <code>host</code>
   * 			network mode, specify the exposed ports using <code>containerPort</code>.</p>
   *          <p>If you use containers in a task with the <code>bridge</code> network mode and you
   * 			specify a container port and not a host port, your container automatically receives a
   * 			host port in the ephemeral port range. For more information, see <code>hostPort</code>.
   * 			Port mappings that are automatically assigned in this way do not count toward the 100
   * 			reserved ports limit of a container instance.</p>
   * @public
   */
  containerPort?: number | undefined;

  /**
   * <p>The port number on the container instance to reserve for your container.</p>
   *          <p>If you specify a <code>containerPortRange</code>, leave this field empty and the value
   * 			of the <code>hostPort</code> is set as follows:</p>
   *          <ul>
   *             <li>
   *                <p>For containers in a task with the <code>awsvpc</code> network mode, the
   * 						<code>hostPort</code> is set to the same value as the
   * 						<code>containerPort</code>. This is a static mapping strategy.</p>
   *             </li>
   *             <li>
   *                <p>For containers in a task with the <code>bridge</code> network mode, the Amazon ECS
   * 					agent finds open ports on the host and automatically binds them to the container
   * 					ports. This is a dynamic mapping strategy.</p>
   *             </li>
   *          </ul>
   *          <p>If you use containers in a task with the <code>awsvpc</code> or <code>host</code>
   * 			network mode, the <code>hostPort</code> can either be left blank or set to the same
   * 			value as the <code>containerPort</code>.</p>
   *          <p>If you use containers in a task with the <code>bridge</code> network mode, you can
   * 			specify a non-reserved host port for your container port mapping, or you can omit the
   * 				<code>hostPort</code> (or set it to <code>0</code>) while specifying a
   * 				<code>containerPort</code> and your container automatically receives a port in the
   * 			ephemeral port range for your container instance operating system and Docker
   * 			version.</p>
   *          <p>The default ephemeral port range for Docker version 1.6.0 and later is listed on the
   * 			instance under <code>/proc/sys/net/ipv4/ip_local_port_range</code>. If this kernel
   * 			parameter is unavailable, the default ephemeral port range from 49153 through 65535
   * 			(Linux) or 49152 through 65535 (Windows) is used. Do not attempt to specify a host port
   * 			in the ephemeral port range as these are reserved for automatic assignment. In general,
   * 			ports below 32768 are outside of the ephemeral port range.</p>
   *          <p>The default reserved ports are 22 for SSH, the Docker ports 2375 and 2376, and the
   * 			Amazon ECS container agent ports 51678-51680. Any host port that was previously specified in
   * 			a running task is also reserved while the task is running. That is, after a task stops,
   * 			the host port is released. The current reserved ports are displayed in the
   * 				<code>remainingResources</code> of <a href="https://docs.aws.amazon.com/AmazonECS/latest/APIReference/API_DescribeContainerInstances.html">DescribeContainerInstances</a> output. A container instance can have up to 100
   * 			reserved ports at a time. This number includes the default reserved ports. Automatically
   * 			assigned ports aren't included in the 100 reserved ports quota.</p>
   * @public
   */
  hostPort?: number | undefined;

  /**
   * <p>The protocol used for the port mapping. Valid values are <code>tcp</code> and
   * 				<code>udp</code>. The default is <code>tcp</code>. <code>protocol</code> is
   * 			immutable in a Service Connect service. Updating this field requires a service deletion
   * 			and redeployment. </p>
   * @public
   */
  protocol?: TransportProtocol | undefined;

  /**
   * <p>The name that's used for the port mapping. This parameter is the name that you use in
   * 			the <code>serviceConnectConfiguration</code> and the
   * 				<code>vpcLatticeConfigurations</code> of a service. The name can include up to 64
   * 			characters. The characters can include lowercase letters, numbers, underscores (_), and
   * 			hyphens (-). The name can't start with a hyphen.</p>
   * @public
   */
  name?: string | undefined;

  /**
   * <p>The application protocol that's used for the port mapping. This parameter only applies
   * 			to Service Connect. We recommend that you set this parameter to be consistent with the
   * 			protocol that your application uses. If you set this parameter, Amazon ECS adds
   * 			protocol-specific connection handling to the Service Connect proxy. If you set this
   * 			parameter, Amazon ECS adds protocol-specific telemetry in the Amazon ECS console and CloudWatch.</p>
   *          <p>If you don't set a value for this parameter, then TCP is used. However, Amazon ECS doesn't
   * 			add protocol-specific telemetry for TCP.</p>
   *          <p>
   *             <code>appProtocol</code> is immutable in a Service Connect service. Updating this
   * 			field requires a service deletion and redeployment.</p>
   *          <p>Tasks that run in a namespace can use short names to connect
   * 	to services in the namespace. Tasks can connect to services across all of the clusters in the namespace.
   * 	Tasks connect through a managed proxy container
   * 	that collects logs and metrics for increased visibility.
   * 	Only the tasks that Amazon ECS services create are supported with Service Connect.
   * 	For more information, see <a href="https://docs.aws.amazon.com/AmazonECS/latest/developerguide/service-connect.html">Service Connect</a> in the <i>Amazon Elastic Container Service Developer Guide</i>.</p>
   * @public
   */
  appProtocol?: ApplicationProtocol | undefined;

  /**
   * <p>The port number range on the container that's bound to the dynamically mapped host
   * 			port range. </p>
   *          <p>The following rules apply when you specify a <code>containerPortRange</code>:</p>
   *          <ul>
   *             <li>
   *                <p>You must use either the <code>bridge</code> network mode or the <code>awsvpc</code>
   * 					network mode.</p>
   *             </li>
   *             <li>
   *                <p>This parameter is available for both the EC2 and Fargate launch types.</p>
   *             </li>
   *             <li>
   *                <p>This parameter is available for both the Linux and Windows operating systems.</p>
   *             </li>
   *             <li>
   *                <p>The container instance must have at least version 1.67.0 of the container agent
   * 					and at least version 1.67.0-1 of the <code>ecs-init</code> package </p>
   *             </li>
   *             <li>
   *                <p>You can specify a maximum of 100 port ranges per container.</p>
   *             </li>
   *             <li>
   *                <p>You do not specify a <code>hostPortRange</code>. The value of the <code>hostPortRange</code> is set
   * 					as follows:</p>
   *                <ul>
   *                   <li>
   *                      <p>For containers in a task with the <code>awsvpc</code> network mode,
   * 							the <code>hostPortRange</code> is set to the same value as the
   * 								<code>containerPortRange</code>. This is a static mapping
   * 							strategy.</p>
   *                   </li>
   *                   <li>
   *                      <p>For containers in a task with the <code>bridge</code> network mode, the Amazon ECS agent finds open host ports from the default ephemeral range and passes it to docker to bind them to the container ports.</p>
   *                   </li>
   *                </ul>
   *             </li>
   *             <li>
   *                <p>The <code>containerPortRange</code> valid values are between 1 and
   * 					65535.</p>
   *             </li>
   *             <li>
   *                <p>A port can only be included in one port mapping per container.</p>
   *             </li>
   *             <li>
   *                <p>You cannot specify overlapping port ranges.</p>
   *             </li>
   *             <li>
   *                <p>The first port in the range must be less than last port in the range.</p>
   *             </li>
   *             <li>
   *                <p>Docker recommends that you turn off the docker-proxy in the Docker daemon config file when you have a large number of ports.</p>
   *                <p>For more information, see <a href="https://github.com/moby/moby/issues/11185"> Issue #11185</a> on the Github website.</p>
   *                <p>For information about how to  turn off the docker-proxy in the Docker daemon config file, see <a href="https://docs.aws.amazon.com/AmazonECS/latest/developerguide/bootstrap_container_instance.html#bootstrap_docker_daemon">Docker daemon</a> in the <i>Amazon ECS Developer Guide</i>.</p>
   *             </li>
   *          </ul>
   *          <p>You can call <a href="https://docs.aws.amazon.com/AmazonECS/latest/APIReference/API_DescribeTasks.html">
   *                <code>DescribeTasks</code>
   *             </a> to view the <code>hostPortRange</code> which
   * 			are the host ports that are bound to the container ports.</p>
   * @public
   */
  containerPortRange?: string | undefined;
}

/**
 * <p>The repository credentials for private registry authentication.</p>
 * @public
 */
export interface RepositoryCredentials {
  /**
   * <p>The Amazon Resource Name (ARN) of the secret containing the private repository
   * 			credentials.</p>
   *          <note>
   *             <p>When you use the Amazon ECS API, CLI, or Amazon Web Services SDK, if the secret exists in the same
   * 				Region as the task that you're launching then you can use either the full ARN or
   * 				the name of the secret. When you use the Amazon Web Services Management Console, you must specify the full ARN
   * 				of the secret.</p>
   *          </note>
   * @public
   */
  credentialsParameter: string | undefined;
}

/**
 * @public
 * @enum
 */
export const ResourceType = {
  GPU: "GPU",
  INFERENCE_ACCELERATOR: "InferenceAccelerator",
} as const;

/**
 * @public
 */
export type ResourceType = (typeof ResourceType)[keyof typeof ResourceType];

/**
 * <p>The type and amount of a resource to assign to a container. The supported resource
 * 			types are GPUs and Elastic Inference accelerators. For more information, see <a href="https://docs.aws.amazon.com/AmazonECS/latest/developerguide/ecs-gpu.html">Working with
 * 				GPUs on Amazon ECS</a> or <a href="https://docs.aws.amazon.com/AmazonECS/latest/developerguide/ecs-inference.html">Working with Amazon Elastic
 * 				Inference on Amazon ECS</a> in the <i>Amazon Elastic Container Service Developer Guide</i>
 *          </p>
 * @public
 */
export interface ResourceRequirement {
  /**
   * <p>The value for the specified resource type.</p>
   *          <p>When the type is <code>GPU</code>, the value is the number of physical
   * 				<code>GPUs</code> the Amazon ECS container agent reserves for the container. The number
   * 			of GPUs that's reserved for all containers in a task can't exceed the number of
   * 			available GPUs on the container instance that the task is launched on.</p>
   *          <p>When the type is <code>InferenceAccelerator</code>, the <code>value</code> matches the
   * 				<code>deviceName</code> for an <a href="https://docs.aws.amazon.com/AmazonECS/latest/APIReference/API_InferenceAccelerator.html">InferenceAccelerator</a> specified in a task definition.</p>
   * @public
   */
  value: string | undefined;

  /**
   * <p>The type of resource to assign to a container. </p>
   * @public
   */
  type: ResourceType | undefined;
}

/**
 * <p>You can enable a restart policy for each container defined in your task definition, to
 * 			overcome transient failures faster and maintain task availability. When you enable a
 * 			restart policy for a container, Amazon ECS can restart the container if it exits, without
 * 			needing to replace the task. For more information, see <a href="https://docs.aws.amazon.com/AmazonECS/latest/developerguide/container-restart-policy.html">Restart
 * 				individual containers in Amazon ECS tasks with container restart policies</a> in the
 * 			<i>Amazon Elastic Container Service Developer Guide</i>.</p>
 * @public
 */
export interface ContainerRestartPolicy {
  /**
   * <p>Specifies whether a restart policy is enabled for the container.</p>
   * @public
   */
  enabled: boolean | undefined;

  /**
   * <p>A list of exit codes that Amazon ECS will ignore and not attempt a restart on. You can
   * 			specify a maximum of 50 container exit codes. By default, Amazon ECS does not ignore any exit
   * 			codes.</p>
   * @public
   */
  ignoredExitCodes?: number[] | undefined;

  /**
   * <p>A period of time (in seconds) that the container must run for before a restart can be
   * 			attempted. A container can be restarted only once every
   * 				<code>restartAttemptPeriod</code> seconds. If a container isn't able to run for this
   * 			time period and exits early, it will not be restarted. You can set a minimum
   * 				<code>restartAttemptPeriod</code> of 60 seconds and a maximum
   * 				<code>restartAttemptPeriod</code> of 1800 seconds. By default, a container must run
   * 			for 300 seconds before it can be restarted.</p>
   * @public
   */
  restartAttemptPeriod?: number | undefined;
}

/**
 * <p>A list of namespaced kernel parameters to set in the container. This parameter maps to
 * 				<code>Sysctls</code> in the docker container create command and the
 * 				<code>--sysctl</code> option to docker run. For example, you can configure
 * 				<code>net.ipv4.tcp_keepalive_time</code> setting to maintain longer lived
 * 			connections.</p>
 *          <p>We don't recommend that you specify network-related <code>systemControls</code>
 * 			parameters for multiple containers in a single task that also uses either the
 * 				<code>awsvpc</code> or <code>host</code> network mode. Doing this has the following
 * 			disadvantages:</p>
 *          <ul>
 *             <li>
 *                <p>For tasks that use the <code>awsvpc</code> network mode including Fargate,
 * 					if you set <code>systemControls</code> for any container, it applies to all
 * 					containers in the task. If you set different <code>systemControls</code> for
 * 					multiple containers in a single task, the container that's started last
 * 					determines which <code>systemControls</code> take effect.</p>
 *             </li>
 *             <li>
 *                <p>For tasks that use the <code>host</code> network mode, the network namespace
 * 						<code>systemControls</code> aren't supported.</p>
 *             </li>
 *          </ul>
 *          <p>If you're setting an IPC resource namespace to use for the containers in the task, the
 * 			following conditions apply to your system controls. For more information, see <a href="https://docs.aws.amazon.com/AmazonECS/latest/developerguide/task_definition_parameters.html#task_definition_ipcmode">IPC mode</a>.</p>
 *          <ul>
 *             <li>
 *                <p>For tasks that use the <code>host</code> IPC mode, IPC namespace
 * 						<code>systemControls</code> aren't supported.</p>
 *             </li>
 *             <li>
 *                <p>For tasks that use the <code>task</code> IPC mode, IPC namespace
 * 						<code>systemControls</code> values apply to all containers within a
 * 					task.</p>
 *             </li>
 *          </ul>
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
export interface SystemControl {
  /**
   * <p>The namespaced kernel parameter to set a <code>value</code> for.</p>
   * @public
   */
  namespace?: string | undefined;

  /**
   * <p>The namespaced kernel parameter to set a <code>value</code> for.</p>
   *          <p>Valid IPC namespace values: <code>"kernel.msgmax" | "kernel.msgmnb" | "kernel.msgmni"
   * 				| "kernel.sem" | "kernel.shmall" | "kernel.shmmax" | "kernel.shmmni" |
   * 				"kernel.shm_rmid_forced"</code>, and <code>Sysctls</code> that start with
   * 				<code>"fs.mqueue.*"</code>
   *          </p>
   *          <p>Valid network namespace values: <code>Sysctls</code> that start with
   * 				<code>"net.*"</code>. Only namespaced <code>Sysctls</code> that exist within the
   * 			container starting with "net.* are accepted.</p>
   *          <p>All of these values are supported by Fargate.</p>
   * @public
   */
  value?: string | undefined;
}

/**
 * @public
 * @enum
 */
export const UlimitName = {
  CORE: "core",
  CPU: "cpu",
  DATA: "data",
  FSIZE: "fsize",
  LOCKS: "locks",
  MEMLOCK: "memlock",
  MSGQUEUE: "msgqueue",
  NICE: "nice",
  NOFILE: "nofile",
  NPROC: "nproc",
  RSS: "rss",
  RTPRIO: "rtprio",
  RTTIME: "rttime",
  SIGPENDING: "sigpending",
  STACK: "stack",
} as const;

/**
 * @public
 */
export type UlimitName = (typeof UlimitName)[keyof typeof UlimitName];

/**
 * <p>The <code>ulimit</code> settings to pass to the container.</p>
 *          <p>Amazon ECS tasks hosted on Fargate use the default
 * 							resource limit values set by the operating system with the exception of
 * 							the <code>nofile</code> resource limit parameter which Fargate
 * 							overrides. The <code>nofile</code> resource limit sets a restriction on
 * 							the number of open files that a container can use. The default
 * 								<code>nofile</code> soft limit is <code> 65535</code> and the default hard limit
 * 							is <code>65535</code>.</p>
 *          <p>You can specify the <code>ulimit</code> settings for a container in a task
 * 			definition.</p>
 * @public
 */
export interface Ulimit {
  /**
   * <p>The <code>type</code> of the <code>ulimit</code>.</p>
   * @public
   */
  name: UlimitName | undefined;

  /**
   * <p>The soft limit for the <code>ulimit</code> type. The value can be specified in bytes,
   * 			seconds, or as a count, depending on the <code>type</code> of the
   * 			<code>ulimit</code>.</p>
   * @public
   */
  softLimit: number | undefined;

  /**
   * <p>The hard limit for the <code>ulimit</code> type. The value can be specified in bytes,
   * 			seconds, or as a count, depending on the <code>type</code> of the
   * 			<code>ulimit</code>.</p>
   * @public
   */
  hardLimit: number | undefined;
}

/**
 * @public
 * @enum
 */
export const VersionConsistency = {
  DISABLED: "disabled",
  ENABLED: "enabled",
} as const;

/**
 * @public
 */
export type VersionConsistency = (typeof VersionConsistency)[keyof typeof VersionConsistency];

/**
 * <p>Details on a data volume from another container in the same task definition.</p>
 * @public
 */
export interface VolumeFrom {
  /**
   * <p>The name of another container within the same task definition to mount volumes
   * 			from.</p>
   * @public
   */
  sourceContainer?: string | undefined;

  /**
   * <p>If this value is <code>true</code>, the container has read-only access to the volume.
   * 			If this value is <code>false</code>, then the container can write to the volume. The
   * 			default value is <code>false</code>.</p>
   * @public
   */
  readOnly?: boolean | undefined;
}

/**
 * <p>Container definitions are used in task definitions to describe the different
 * 			containers that are launched as part of a task.</p>
 * @public
 */
export interface ContainerDefinition {
  /**
   * <p>The name of a container. If you're linking multiple containers together in a task
   * 			definition, the <code>name</code> of one container can be entered in the
   * 				<code>links</code> of another container to connect the containers.
   * 			Up to 255 letters (uppercase and lowercase), numbers, underscores, and hyphens are allowed. This parameter maps to <code>name</code> in the docker container
   * 			create command and the <code>--name</code> option to docker run. </p>
   * @public
   */
  name?: string | undefined;

  /**
   * <p>The image used to start a container. This string is passed directly to the Docker
   * 			daemon. By default, images in the Docker Hub registry are available. Other repositories
   * 			are specified with either <code>
   *                <i>repository-url</i>/<i>image</i>:<i>tag</i>
   *             </code> or <code>
   *                <i>repository-url</i>/<i>image</i>@<i>digest</i>
   *             </code>. For images using tags (repository-url/image:tag), up to 255 characters total are allowed, including letters (uppercase and lowercase), numbers, hyphens, underscores, colons, periods, forward slashes, and number signs (#). For images using digests (repository-url/image@digest), the 255 character limit applies only to the repository URL and image name (everything before the @ sign). The only supported hash function is sha256, and the hash value after sha256: must be exactly 64 characters (only letters A-F, a-f, and numbers 0-9 are allowed). This parameter maps to <code>Image</code> in the docker
   * 			container create command and the <code>IMAGE</code> parameter of docker run.</p>
   *          <ul>
   *             <li>
   *                <p>When a new task starts, the Amazon ECS container agent pulls the latest version of
   * 					the specified image and tag for the container to use. However, subsequent
   * 					updates to a repository image aren't propagated to already running tasks.</p>
   *             </li>
   *             <li>
   *                <p>Images in Amazon ECR repositories can be specified by either using the full
   * 						<code>registry/repository:tag</code> or
   * 						<code>registry/repository@digest</code>. For example,
   * 						<code>012345678910.dkr.ecr.<region-name>.amazonaws.com/<repository-name>:latest</code>
   * 					or
   * 						<code>012345678910.dkr.ecr.<region-name>.amazonaws.com/<repository-name>@sha256:94afd1f2e64d908bc90dbca0035a5b567EXAMPLE</code>.
   * 				</p>
   *             </li>
   *             <li>
   *                <p>Images in official repositories on Docker Hub use a single name (for example,
   * 						<code>ubuntu</code> or <code>mongo</code>).</p>
   *             </li>
   *             <li>
   *                <p>Images in other repositories on Docker Hub are qualified with an organization
   * 					name (for example, <code>amazon/amazon-ecs-agent</code>).</p>
   *             </li>
   *             <li>
   *                <p>Images in other online repositories are qualified further by a domain name
   * 					(for example, <code>quay.io/assemblyline/ubuntu</code>).</p>
   *             </li>
   *          </ul>
   * @public
   */
  image?: string | undefined;

  /**
   * <p>The private repository authentication credentials to use.</p>
   * @public
   */
  repositoryCredentials?: RepositoryCredentials | undefined;

  /**
   * <p>The number of <code>cpu</code> units reserved for the container. This parameter maps
   * 			to <code>CpuShares</code> in the docker container create commandand the
   * 				<code>--cpu-shares</code> option to docker run.</p>
   *          <p>This field is optional for tasks using the Fargate launch type, and the
   * 			only requirement is that the total amount of CPU reserved for all containers within a
   * 			task be lower than the task-level <code>cpu</code> value.</p>
   *          <note>
   *             <p>You can determine the number of CPU units that are available per EC2 instance type
   * 				by multiplying the vCPUs listed for that instance type on the <a href="http://aws.amazon.com/ec2/instance-types/">Amazon EC2 Instances</a> detail page
   * 				by 1,024.</p>
   *          </note>
   *          <p>Linux containers share unallocated CPU units with other containers on the container
   * 			instance with the same ratio as their allocated amount. For example, if you run a
   * 			single-container task on a single-core instance type with 512 CPU units specified for
   * 			that container, and that's the only task running on the container instance, that
   * 			container could use the full 1,024 CPU unit share at any given time. However, if you
   * 			launched another copy of the same task on that container instance, each task is
   * 			guaranteed a minimum of 512 CPU units when needed. Moreover, each container could float
   * 			to higher CPU usage if the other container was not using it. If both tasks were 100%
   * 			active all of the time, they would be limited to 512 CPU units.</p>
   *          <p>On Linux container instances, the Docker daemon on the container instance uses the CPU
   * 			value to calculate the relative CPU share ratios for running containers. The minimum
   * 			valid CPU share value that the Linux kernel allows is 2, and the maximum valid CPU share
   * 			value that the Linux kernel allows is 262144. However, the CPU parameter isn't required,
   * 			and you can use CPU values below 2 or above 262144 in your container definitions. For
   * 			CPU values below 2 (including null) or above 262144, the behavior varies based on your
   * 			Amazon ECS container agent version:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <b>Agent versions less than or equal to 1.1.0:</b>
   * 					Null and zero CPU values are passed to Docker as 0, which Docker then converts
   * 					to 1,024 CPU shares. CPU values of 1 are passed to Docker as 1, which the Linux
   * 					kernel converts to two CPU shares.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <b>Agent versions greater than or equal to 1.2.0:</b>
   * 					Null, zero, and CPU values of 1 are passed to Docker as 2.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <b>Agent versions greater than or equal to
   * 						1.84.0:</b> CPU values greater than 256 vCPU are passed to Docker as
   * 					256, which is equivalent to 262144 CPU shares.</p>
   *             </li>
   *          </ul>
   *          <p>On Windows container instances, the CPU limit is enforced as an absolute limit, or a
   * 			quota. Windows containers only have access to the specified amount of CPU that's
   * 			described in the task definition. A null or zero CPU value is passed to Docker as
   * 				<code>0</code>, which Windows interprets as 1% of one CPU.</p>
   * @public
   */
  cpu?: number | undefined;

  /**
   * <p>The amount (in MiB) of memory to present to the container. If your container attempts
   * 			to exceed the memory specified here, the container is killed. The total amount of memory
   * 			reserved for all containers within a task must be lower than the task
   * 				<code>memory</code> value, if one is specified. This parameter maps to
   * 				<code>Memory</code> in the docker container create command and the
   * 				<code>--memory</code> option to docker run.</p>
   *          <p>If using the Fargate launch type, this parameter is optional.</p>
   *          <p>If using the EC2 launch type, you must specify either a task-level
   * 			memory value or a container-level memory value. If you specify both a container-level
   * 				<code>memory</code> and <code>memoryReservation</code> value, <code>memory</code>
   * 			must be greater than <code>memoryReservation</code>. If you specify
   * 				<code>memoryReservation</code>, then that value is subtracted from the available
   * 			memory resources for the container instance where the container is placed. Otherwise,
   * 			the value of <code>memory</code> is used.</p>
   *          <p>The Docker 20.10.0 or later daemon reserves a minimum of 6 MiB of memory for a
   * 			container. So, don't specify less than 6 MiB of memory for your containers. </p>
   *          <p>The Docker 19.03.13-ce or earlier daemon reserves a minimum of 4 MiB of memory for a
   * 			container. So, don't specify less than 4 MiB of memory for your containers.</p>
   * @public
   */
  memory?: number | undefined;

  /**
   * <p>The soft limit (in MiB) of memory to reserve for the container. When system memory is
   * 			under heavy contention, Docker attempts to keep the container memory to this soft limit.
   * 			However, your container can consume more memory when it needs to, up to either the hard
   * 			limit specified with the <code>memory</code> parameter (if applicable), or all of the
   * 			available memory on the container instance, whichever comes first. This parameter maps
   * 			to <code>MemoryReservation</code> in the docker container create command and the
   * 				<code>--memory-reservation</code> option to docker run.</p>
   *          <p>If a task-level memory value is not specified, you must specify a non-zero integer for
   * 			one or both of <code>memory</code> or <code>memoryReservation</code> in a container
   * 			definition. If you specify both, <code>memory</code> must be greater than
   * 				<code>memoryReservation</code>. If you specify <code>memoryReservation</code>, then
   * 			that value is subtracted from the available memory resources for the container instance
   * 			where the container is placed. Otherwise, the value of <code>memory</code> is
   * 			used.</p>
   *          <p>For example, if your container normally uses 128 MiB of memory, but occasionally
   * 			bursts to 256 MiB of memory for short periods of time, you can set a
   * 				<code>memoryReservation</code> of 128 MiB, and a <code>memory</code> hard limit of
   * 			300 MiB. This configuration would allow the container to only reserve 128 MiB of memory
   * 			from the remaining resources on the container instance, but also allow the container to
   * 			consume more memory resources when needed.</p>
   *          <p>The Docker 20.10.0 or later daemon reserves a minimum of 6 MiB of memory for a
   * 			container. So, don't specify less than 6 MiB of memory for your containers. </p>
   *          <p>The Docker 19.03.13-ce or earlier daemon reserves a minimum of 4 MiB of memory for a
   * 			container. So, don't specify less than 4 MiB of memory for your containers.</p>
   * @public
   */
  memoryReservation?: number | undefined;

  /**
   * <p>The <code>links</code> parameter allows containers to communicate with each other
   * 			without the need for port mappings. This parameter is only supported if the network mode
   * 			of a task definition is <code>bridge</code>. The <code>name:internalName</code>
   * 			construct is analogous to <code>name:alias</code> in Docker links.
   * 			Up to 255 letters (uppercase and lowercase), numbers, underscores, and hyphens are allowed.. This parameter maps to <code>Links</code> in the docker
   * 			container create command and the <code>--link</code> option to docker run.</p>
   *          <note>
   *             <p>This parameter is not supported for Windows containers.</p>
   *          </note>
   *          <important>
   *             <p>Containers that are collocated on a single container instance may be able to
   * 				communicate with each other without requiring links or host port mappings. Network
   * 				isolation is achieved on the container instance using security groups and VPC
   * 				settings.</p>
   *          </important>
   * @public
   */
  links?: string[] | undefined;

  /**
   * <p>The list of port mappings for the container. Port mappings allow containers to access
   * 			ports on the host container instance to send or receive traffic.</p>
   *          <p>For task definitions that use the <code>awsvpc</code> network mode, only specify the
   * 				<code>containerPort</code>. The <code>hostPort</code> can be left blank or it must
   * 			be the same value as the <code>containerPort</code>.</p>
   *          <p>Port mappings on Windows use the <code>NetNAT</code> gateway address rather than
   * 				<code>localhost</code>. There's no loopback for port mappings on Windows, so you
   * 			can't access a container's mapped port from the host itself. </p>
   *          <p>This parameter maps to <code>PortBindings</code> in the the docker container create
   * 			command and the <code>--publish</code> option to docker run. If the network mode of a
   * 			task definition is set to <code>none</code>, then you can't specify port mappings. If
   * 			the network mode of a task definition is set to <code>host</code>, then host ports must
   * 			either be undefined or they must match the container port in the port mapping.</p>
   *          <note>
   *             <p>After a task reaches the <code>RUNNING</code> status, manual and automatic host
   * 				and container port assignments are visible in the <b>Network
   * 					Bindings</b> section of a container description for a selected task in
   * 				the Amazon ECS console. The assignments are also visible in the
   * 					<code>networkBindings</code> section <a href="https://docs.aws.amazon.com/AmazonECS/latest/APIReference/API_DescribeTasks.html">DescribeTasks</a>
   * 				responses.</p>
   *          </note>
   * @public
   */
  portMappings?: PortMapping[] | undefined;

  /**
   * <p>If the <code>essential</code> parameter of a container is marked as <code>true</code>,
   * 			and that container fails or stops for any reason, all other containers that are part of
   * 			the task are stopped. If the <code>essential</code> parameter of a container is marked
   * 			as <code>false</code>, its failure doesn't affect the rest of the containers in a task.
   * 			If this parameter is omitted, a container is assumed to be essential.</p>
   *          <p>All tasks must have at least one essential container. If you have an application
   * 			that's composed of multiple containers, group containers that are used for a common
   * 			purpose into components, and separate the different components into multiple task
   * 			definitions. For more information, see <a href="https://docs.aws.amazon.com/AmazonECS/latest/developerguide/application_architecture.html">Application
   * 				Architecture</a> in the <i>Amazon Elastic Container Service Developer Guide</i>.</p>
   * @public
   */
  essential?: boolean | undefined;

  /**
   * <p>The restart policy for a container. When you set up a restart policy, Amazon ECS can
   * 			restart the container without needing to replace the task. For more information, see
   * 				<a href="https://docs.aws.amazon.com/AmazonECS/latest/developerguide/container-restart-policy.html">Restart
   * 				individual containers in Amazon ECS tasks with container restart policies</a> in the
   * 			<i>Amazon Elastic Container Service Developer Guide</i>.</p>
   * @public
   */
  restartPolicy?: ContainerRestartPolicy | undefined;

  /**
   * <important>
   *             <p>Early versions of the Amazon ECS container agent don't properly handle
   * 					<code>entryPoint</code> parameters. If you have problems using
   * 					<code>entryPoint</code>, update your container agent or enter your commands and
   * 				arguments as <code>command</code> array items instead.</p>
   *          </important>
   *          <p>The entry point that's passed to the container. This parameter maps to
   * 				<code>Entrypoint</code> in the docker container create command and the
   * 				<code>--entrypoint</code> option to docker run.</p>
   * @public
   */
  entryPoint?: string[] | undefined;

  /**
   * <p>The command that's passed to the container. This parameter maps to <code>Cmd</code> in
   * 			the docker container create command and the <code>COMMAND</code> parameter to docker
   * 			run. If there are multiple arguments, each argument is a separated string in the
   * 			array.</p>
   * @public
   */
  command?: string[] | undefined;

  /**
   * <p>The environment variables to pass to a container. This parameter maps to
   * 				<code>Env</code> in the docker container create command and the <code>--env</code>
   * 			option to docker run.</p>
   *          <important>
   *             <p>We don't recommend that you use plaintext environment variables for sensitive
   * 				information, such as credential data.</p>
   *          </important>
   * @public
   */
  environment?: KeyValuePair[] | undefined;

  /**
   * <p>A list of files containing the environment variables to pass to a container. This
   * 			parameter maps to the <code>--env-file</code> option to docker run.</p>
   *          <p>You can specify up to ten environment files. The file must have a <code>.env</code>
   * 			file extension. Each line in an environment file contains an environment variable in
   * 				<code>VARIABLE=VALUE</code> format. Lines beginning with <code>#</code> are treated
   * 			as comments and are ignored.</p>
   *          <p>If there are environment variables specified using the <code>environment</code>
   * 			parameter in a container definition, they take precedence over the variables contained
   * 			within an environment file. If multiple environment files are specified that contain the
   * 			same variable, they're processed from the top down. We recommend that you use unique
   * 			variable names. For more information, see <a href="https://docs.aws.amazon.com/AmazonECS/latest/developerguide/taskdef-envfiles.html">Specifying Environment
   * 				Variables</a> in the <i>Amazon Elastic Container Service Developer Guide</i>.</p>
   * @public
   */
  environmentFiles?: EnvironmentFile[] | undefined;

  /**
   * <p>The mount points for data volumes in your container.</p>
   *          <p>This parameter maps to <code>Volumes</code> in the docker container create command and
   * 			the <code>--volume</code> option to docker run.</p>
   *          <p>Windows containers can mount whole directories on the same drive as
   * 				<code>$env:ProgramData</code>. Windows containers can't mount directories on a
   * 			different drive, and mount point can't be across drives.</p>
   * @public
   */
  mountPoints?: MountPoint[] | undefined;

  /**
   * <p>Data volumes to mount from another container. This parameter maps to
   * 				<code>VolumesFrom</code> in the docker container create command and the
   * 				<code>--volumes-from</code> option to docker run.</p>
   * @public
   */
  volumesFrom?: VolumeFrom[] | undefined;

  /**
   * <p>Linux-specific modifications that are applied to the default Docker container
   * 			configuration, such as Linux kernel capabilities. For more information see <a href="https://docs.aws.amazon.com/AmazonECS/latest/APIReference/API_KernelCapabilities.html">KernelCapabilities</a>.</p>
   *          <note>
   *             <p>This parameter is not supported for Windows containers.</p>
   *          </note>
   * @public
   */
  linuxParameters?: LinuxParameters | undefined;

  /**
   * <p>The secrets to pass to the container. For more information, see <a href="https://docs.aws.amazon.com/AmazonECS/latest/developerguide/specifying-sensitive-data.html">Specifying
   * 				Sensitive Data</a> in the <i>Amazon Elastic Container Service Developer Guide</i>.</p>
   * @public
   */
  secrets?: Secret[] | undefined;

  /**
   * <p>The dependencies defined for container startup and shutdown. A container can contain
   * 			multiple dependencies on other containers in a task definition. When a dependency is
   * 			defined for container startup, for container shutdown it is reversed.</p>
   *          <p>For tasks using the EC2 launch type, the container instances require at
   * 			least version 1.26.0 of the container agent to turn on container dependencies. However,
   * 			we recommend using the latest container agent version. For information about checking
   * 			your agent version and updating to the latest version, see <a href="https://docs.aws.amazon.com/AmazonECS/latest/developerguide/ecs-agent-update.html">Updating the Amazon ECS
   * 				Container Agent</a> in the <i>Amazon Elastic Container Service Developer Guide</i>. If you're using an Amazon ECS-optimized Linux AMI,
   * 			your instance needs at least version 1.26.0-1 of the <code>ecs-init</code> package. If
   * 			your container instances are launched from version <code>20190301</code> or later, then
   * 			they contain the required versions of the container agent and <code>ecs-init</code>. For
   * 			more information, see <a href="https://docs.aws.amazon.com/AmazonECS/latest/developerguide/ecs-optimized_AMI.html">Amazon ECS-optimized Linux AMI</a>
   * 			in the <i>Amazon Elastic Container Service Developer Guide</i>.</p>
   *          <p>For tasks using the Fargate launch type, the task or service requires
   * 			the following platforms:</p>
   *          <ul>
   *             <li>
   *                <p>Linux platform version <code>1.3.0</code> or later.</p>
   *             </li>
   *             <li>
   *                <p>Windows platform version <code>1.0.0</code> or later.</p>
   *             </li>
   *          </ul>
   * @public
   */
  dependsOn?: ContainerDependency[] | undefined;

  /**
   * <p>Time duration (in seconds) to wait before giving up on resolving dependencies for a
   * 			container. For example, you specify two containers in a task definition with containerA
   * 			having a dependency on containerB reaching a <code>COMPLETE</code>,
   * 			<code>SUCCESS</code>, or <code>HEALTHY</code> status. If a <code>startTimeout</code>
   * 			value is specified for containerB and it doesn't reach the desired status within that
   * 			time then containerA gives up and not start. This results in the task transitioning to a
   * 				<code>STOPPED</code> state.</p>
   *          <note>
   *             <p>When the <code>ECS_CONTAINER_START_TIMEOUT</code> container agent configuration
   * 				variable is used, it's enforced independently from this start timeout value.</p>
   *          </note>
   *          <p>For tasks using the Fargate launch type, the task or service requires
   * 			the following platforms:</p>
   *          <ul>
   *             <li>
   *                <p>Linux platform version <code>1.3.0</code> or later.</p>
   *             </li>
   *             <li>
   *                <p>Windows platform version <code>1.0.0</code> or later.</p>
   *             </li>
   *          </ul>
   *          <p>For tasks using the EC2 launch type, your container instances require at
   * 			least version <code>1.26.0</code> of the container agent to use a container start
   * 			timeout value. However, we recommend using the latest container agent version. For
   * 			information about checking your agent version and updating to the latest version, see
   * 				<a href="https://docs.aws.amazon.com/AmazonECS/latest/developerguide/ecs-agent-update.html">Updating the Amazon ECS
   * 				Container Agent</a> in the <i>Amazon Elastic Container Service Developer Guide</i>. If you're using an Amazon ECS-optimized Linux AMI,
   * 			your instance needs at least version <code>1.26.0-1</code> of the <code>ecs-init</code>
   * 			package. If your container instances are launched from version <code>20190301</code> or
   * 			later, then they contain the required versions of the container agent and
   * 				<code>ecs-init</code>. For more information, see <a href="https://docs.aws.amazon.com/AmazonECS/latest/developerguide/ecs-optimized_AMI.html">Amazon ECS-optimized Linux AMI</a>
   * 			in the <i>Amazon Elastic Container Service Developer Guide</i>.</p>
   *          <p>The valid values for Fargate are 2-120 seconds.</p>
   * @public
   */
  startTimeout?: number | undefined;

  /**
   * <p>Time duration (in seconds) to wait before the container is forcefully killed if it
   * 			doesn't exit normally on its own.</p>
   *          <p>For tasks using the Fargate launch type, the task or service requires
   * 			the following platforms:</p>
   *          <ul>
   *             <li>
   *                <p>Linux platform version <code>1.3.0</code> or later.</p>
   *             </li>
   *             <li>
   *                <p>Windows platform version <code>1.0.0</code> or later.</p>
   *             </li>
   *          </ul>
   *          <p>For tasks that use the Fargate launch type, the max stop timeout value is 120
   * 			seconds and if the parameter is not specified, the default value of 30 seconds is
   * 			used.</p>
   *          <p>For tasks that use the EC2 launch type, if the <code>stopTimeout</code>
   * 			parameter isn't specified, the value set for the Amazon ECS container agent configuration
   * 			variable <code>ECS_CONTAINER_STOP_TIMEOUT</code> is used. If neither the
   * 				<code>stopTimeout</code> parameter or the <code>ECS_CONTAINER_STOP_TIMEOUT</code>
   * 			agent configuration variable are set, then the default values of 30 seconds for Linux
   * 			containers and 30 seconds on Windows containers are used. Your container instances
   * 			require at least version 1.26.0 of the container agent to use a container stop timeout
   * 			value. However, we recommend using the latest container agent version. For information
   * 			about checking your agent version and updating to the latest version, see <a href="https://docs.aws.amazon.com/AmazonECS/latest/developerguide/ecs-agent-update.html">Updating the Amazon ECS Container Agent</a> in the <i>Amazon Elastic Container Service Developer Guide</i>. If you're using
   * 			an Amazon ECS-optimized Linux AMI, your instance needs at least version 1.26.0-1 of the
   * 				<code>ecs-init</code> package. If your container instances are launched from version
   * 				<code>20190301</code> or later, then they contain the required versions of the
   * 			container agent and <code>ecs-init</code>. For more information, see <a href="https://docs.aws.amazon.com/AmazonECS/latest/developerguide/ecs-optimized_AMI.html">Amazon ECS-optimized Linux AMI</a> in the <i>Amazon Elastic Container Service Developer Guide</i>.</p>
   *          <p>The valid values for Fargate are 2-120 seconds.</p>
   * @public
   */
  stopTimeout?: number | undefined;

  /**
   * <p>Specifies whether Amazon ECS will resolve the container image tag provided in the container
   * 			definition to an image digest. By default, the value is <code>enabled</code>. If you set
   * 			the value for a container as <code>disabled</code>, Amazon ECS will not resolve the provided
   * 			container image tag to a digest and will use the original image URI specified in the
   * 			container definition for deployment. For more information about container image
   * 			resolution, see <a href="https://docs.aws.amazon.com/AmazonECS/latest/developerguide/deployment-type-ecs.html#deployment-container-image-stability">Container image resolution</a> in the <i>Amazon ECS Developer
   * 				Guide</i>.</p>
   * @public
   */
  versionConsistency?: VersionConsistency | undefined;

  /**
   * <p>The hostname to use for your container. This parameter maps to <code>Hostname</code>
   * 			in the docker container create command and the <code>--hostname</code> option to docker
   * 			run.</p>
   *          <note>
   *             <p>The <code>hostname</code> parameter is not supported if you're using the
   * 					<code>awsvpc</code> network mode.</p>
   *          </note>
   * @public
   */
  hostname?: string | undefined;

  /**
   * <p>The user to use inside the container. This parameter maps to <code>User</code> in the
   * 			docker container create command and the <code>--user</code> option to docker run.</p>
   *          <important>
   *             <p>When running tasks using the <code>host</code> network mode, don't run containers
   * 				using the root user (UID 0). We recommend using a non-root user for better
   * 				security.</p>
   *          </important>
   *          <p>You can specify the <code>user</code> using the following formats. If specifying a UID
   * 			or GID, you must specify it as a positive integer.</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>user</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>user:group</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>uid</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>uid:gid</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>user:gid</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>uid:group</code>
   *                </p>
   *             </li>
   *          </ul>
   *          <note>
   *             <p>This parameter is not supported for Windows containers.</p>
   *          </note>
   * @public
   */
  user?: string | undefined;

  /**
   * <p>The working directory to run commands inside the container in. This parameter maps to
   * 				<code>WorkingDir</code> in the docker container create command and the
   * 				<code>--workdir</code> option to docker run.</p>
   * @public
   */
  workingDirectory?: string | undefined;

  /**
   * <p>When this parameter is true, networking is off within the container. This parameter
   * 			maps to <code>NetworkDisabled</code> in the docker container create command.</p>
   *          <note>
   *             <p>This parameter is not supported for Windows containers.</p>
   *          </note>
   * @public
   */
  disableNetworking?: boolean | undefined;

  /**
   * <p>When this parameter is true, the container is given elevated privileges on the host
   * 			container instance (similar to the <code>root</code> user). This parameter maps to
   * 				<code>Privileged</code> in the docker container create command and the
   * 				<code>--privileged</code> option to docker run</p>
   *          <note>
   *             <p>This parameter is not supported for Windows containers or tasks run on Fargate.</p>
   *          </note>
   * @public
   */
  privileged?: boolean | undefined;

  /**
   * <p>When this parameter is true, the container is given read-only access to its root file
   * 			system. This parameter maps to <code>ReadonlyRootfs</code> in the docker container
   * 			create command and the <code>--read-only</code> option to docker run.</p>
   *          <note>
   *             <p>This parameter is not supported for Windows containers.</p>
   *          </note>
   * @public
   */
  readonlyRootFilesystem?: boolean | undefined;

  /**
   * <p>A list of DNS servers that are presented to the container. This parameter maps to
   * 				<code>Dns</code> in the docker container create command and the <code>--dns</code>
   * 			option to docker run.</p>
   *          <note>
   *             <p>This parameter is not supported for Windows containers.</p>
   *          </note>
   * @public
   */
  dnsServers?: string[] | undefined;

  /**
   * <p>A list of DNS search domains that are presented to the container. This parameter maps
   * 			to <code>DnsSearch</code> in the docker container create command and the
   * 				<code>--dns-search</code> option to docker run.</p>
   *          <note>
   *             <p>This parameter is not supported for Windows containers.</p>
   *          </note>
   * @public
   */
  dnsSearchDomains?: string[] | undefined;

  /**
   * <p>A list of hostnames and IP address mappings to append to the <code>/etc/hosts</code>
   * 			file on the container. This parameter maps to <code>ExtraHosts</code> in the docker
   * 			container create command and the <code>--add-host</code> option to docker run.</p>
   *          <note>
   *             <p>This parameter isn't supported for Windows containers or tasks that use the
   * 					<code>awsvpc</code> network mode.</p>
   *          </note>
   * @public
   */
  extraHosts?: HostEntry[] | undefined;

  /**
   * <p>A list of strings to provide custom configuration for multiple security systems. This
   * 			field isn't valid for containers in tasks using the Fargate launch
   * 			type.</p>
   *          <p>For Linux tasks on EC2, this parameter can be used to reference custom
   * 			labels for SELinux and AppArmor multi-level security systems.</p>
   *          <p>For any tasks on EC2, this parameter can be used to reference a
   * 			credential spec file that configures a container for Active Directory authentication.
   * 			For more information, see <a href="https://docs.aws.amazon.com/AmazonECS/latest/developerguide/windows-gmsa.html">Using gMSAs for Windows
   * 				Containers</a> and <a href="https://docs.aws.amazon.com/AmazonECS/latest/developerguide/linux-gmsa.html">Using gMSAs for Linux
   * 				Containers</a> in the <i>Amazon Elastic Container Service Developer Guide</i>.</p>
   *          <p>This parameter maps to <code>SecurityOpt</code> in the docker container create command
   * 			and the <code>--security-opt</code> option to docker run.</p>
   *          <note>
   *             <p>The Amazon ECS container agent running on a container instance must register with the
   * 					<code>ECS_SELINUX_CAPABLE=true</code> or <code>ECS_APPARMOR_CAPABLE=true</code>
   * 				environment variables before containers placed on that instance can use these
   * 				security options. For more information, see <a href="https://docs.aws.amazon.com/AmazonECS/latest/developerguide/ecs-agent-config.html">Amazon ECS Container
   * 					Agent Configuration</a> in the <i>Amazon Elastic Container Service Developer Guide</i>.</p>
   *          </note>
   *          <p>Valid values: "no-new-privileges" | "apparmor:PROFILE" | "label:value" |
   * 			"credentialspec:CredentialSpecFilePath"</p>
   * @public
   */
  dockerSecurityOptions?: string[] | undefined;

  /**
   * <p>When this parameter is <code>true</code>, you can deploy containerized applications
   * 			that require <code>stdin</code> or a <code>tty</code> to be allocated. This parameter
   * 			maps to <code>OpenStdin</code> in the docker container create command and the
   * 				<code>--interactive</code> option to docker run.</p>
   * @public
   */
  interactive?: boolean | undefined;

  /**
   * <p>When this parameter is <code>true</code>, a TTY is allocated. This parameter maps to
   * 				<code>Tty</code> in the docker container create command and the <code>--tty</code>
   * 			option to docker run.</p>
   * @public
   */
  pseudoTerminal?: boolean | undefined;

  /**
   * <p>A key/value map of labels to add to the container. This parameter maps to
   * 				<code>Labels</code> in the docker container create command and the
   * 				<code>--label</code> option to docker run. This parameter requires version 1.18 of the Docker Remote API or greater on your container instance. To check the Docker Remote API version on your container instance, log in to your container instance and run the following command: <code>sudo docker version --format '\{\{.Server.APIVersion\}\}'</code>
   *          </p>
   * @public
   */
  dockerLabels?: Record<string, string> | undefined;

  /**
   * <p>A list of <code>ulimits</code> to set in the container. If a <code>ulimit</code> value
   * 			is specified in a task definition, it overrides the default values set by Docker. This
   * 			parameter maps to <code>Ulimits</code> in the docker container create command and the
   * 				<code>--ulimit</code> option to docker run. Valid naming values are displayed in the
   * 				<a href="https://docs.aws.amazon.com/AmazonECS/latest/APIReference/API_Ulimit.html">Ulimit</a> data type.</p>
   *          <p>Amazon ECS tasks hosted on Fargate use the default
   * 							resource limit values set by the operating system with the exception of
   * 							the <code>nofile</code> resource limit parameter which Fargate
   * 							overrides. The <code>nofile</code> resource limit sets a restriction on
   * 							the number of open files that a container can use. The default
   * 								<code>nofile</code> soft limit is <code> 65535</code> and the default hard limit
   * 							is <code>65535</code>.</p>
   *          <p>This parameter requires version 1.18 of the Docker Remote API or greater on your container instance. To check the Docker Remote API version on your container instance, log in to your container instance and run the following command: <code>sudo docker version --format '\{\{.Server.APIVersion\}\}'</code>
   *          </p>
   *          <note>
   *             <p>This parameter is not supported for Windows containers.</p>
   *          </note>
   * @public
   */
  ulimits?: Ulimit[] | undefined;

  /**
   * <p>The log configuration specification for the container.</p>
   *          <p>This parameter maps to <code>LogConfig</code> in the docker container create command
   * 			and the <code>--log-driver</code> option to docker run. By default, containers use the
   * 			same logging driver that the Docker daemon uses. However the container can use a
   * 			different logging driver than the Docker daemon by specifying a log driver with this
   * 			parameter in the container definition. To use a different logging driver for a
   * 			container, the log system must be configured properly on the container instance (or on a
   * 			different log server for remote logging options). </p>
   *          <note>
   *             <p>Amazon ECS currently supports a subset of the logging drivers available to the Docker
   * 				daemon (shown in the <a href="https://docs.aws.amazon.com/AmazonECS/latest/APIReference/API_LogConfiguration.html">LogConfiguration</a> data type). Additional log drivers may be available in
   * 				future releases of the Amazon ECS container agent.</p>
   *          </note>
   *          <p>This parameter requires version 1.18 of the Docker Remote API or greater on your container instance. To check the Docker Remote API version on your container instance, log in to your container instance and run the following command: <code>sudo docker version --format '\{\{.Server.APIVersion\}\}'</code>
   *          </p>
   *          <note>
   *             <p>The Amazon ECS container agent running on a container instance must register the
   * 				logging drivers available on that instance with the
   * 					<code>ECS_AVAILABLE_LOGGING_DRIVERS</code> environment variable before
   * 				containers placed on that instance can use these log configuration options. For more
   * 				information, see <a href="https://docs.aws.amazon.com/AmazonECS/latest/developerguide/ecs-agent-config.html">Amazon ECS Container
   * 					Agent Configuration</a> in the <i>Amazon Elastic Container Service Developer Guide</i>.</p>
   *          </note>
   * @public
   */
  logConfiguration?: LogConfiguration | undefined;

  /**
   * <p>The container health check command and associated configuration parameters for the
   * 			container. This parameter maps to <code>HealthCheck</code> in the docker container
   * 			create command and the <code>HEALTHCHECK</code> parameter of docker run.</p>
   * @public
   */
  healthCheck?: HealthCheck | undefined;

  /**
   * <p>A list of namespaced kernel parameters to set in the container. This parameter maps to
   * 				<code>Sysctls</code> in the docker container create command and the
   * 				<code>--sysctl</code> option to docker run. For example, you can configure
   * 				<code>net.ipv4.tcp_keepalive_time</code> setting to maintain longer lived
   * 			connections.</p>
   * @public
   */
  systemControls?: SystemControl[] | undefined;

  /**
   * <p>The type and amount of a resource to assign to a container. The only supported
   * 			resource is a GPU.</p>
   * @public
   */
  resourceRequirements?: ResourceRequirement[] | undefined;

  /**
   * <p>The FireLens configuration for the container. This is used to specify and configure a
   * 			log router for container logs. For more information, see <a href="https://docs.aws.amazon.com/AmazonECS/latest/developerguide/using_firelens.html">Custom Log Routing</a>
   * 			in the <i>Amazon Elastic Container Service Developer Guide</i>.</p>
   * @public
   */
  firelensConfiguration?: FirelensConfiguration | undefined;

  /**
   * <p>A list of ARNs in SSM or Amazon S3 to a credential spec (<code>CredSpec</code>) file that
   * 			configures the container for Active Directory authentication. We recommend that you use
   * 			this parameter instead of the <code>dockerSecurityOptions</code>. The maximum number of
   * 			ARNs is 1.</p>
   *          <p>There are two formats for each ARN.</p>
   *          <dl>
   *             <dt>credentialspecdomainless:MyARN</dt>
   *             <dd>
   *                <p>You use <code>credentialspecdomainless:MyARN</code> to provide a
   * 							<code>CredSpec</code> with an additional section for a secret in Secrets Manager.
   * 						You provide the login credentials to the domain in the secret.</p>
   *                <p>Each task that runs on any container instance can join different
   * 						domains.</p>
   *                <p>You can use this format without joining the container instance to a
   * 						domain.</p>
   *             </dd>
   *             <dt>credentialspec:MyARN</dt>
   *             <dd>
   *                <p>You use <code>credentialspec:MyARN</code> to provide a
   * 							<code>CredSpec</code> for a single domain.</p>
   *                <p>You must join the container instance to the domain before you start any
   * 						tasks that use this task definition.</p>
   *             </dd>
   *          </dl>
   *          <p>In both formats, replace <code>MyARN</code> with the ARN in SSM or Amazon S3.</p>
   *          <p>If you provide a <code>credentialspecdomainless:MyARN</code>, the
   * 				<code>credspec</code> must provide a ARN in Secrets Manager for a secret containing the
   * 			username, password, and the domain to connect to. For better security, the instance
   * 			isn't joined to the domain for domainless authentication. Other applications on the
   * 			instance can't use the domainless credentials. You can use this parameter to run tasks
   * 			on the same instance, even it the tasks need to join different domains. For more
   * 			information, see <a href="https://docs.aws.amazon.com/AmazonECS/latest/developerguide/windows-gmsa.html">Using gMSAs for Windows
   * 				Containers</a> and <a href="https://docs.aws.amazon.com/AmazonECS/latest/developerguide/linux-gmsa.html">Using gMSAs for Linux
   * 				Containers</a>.</p>
   * @public
   */
  credentialSpecs?: string[] | undefined;
}

/**
 * <p>The amount of ephemeral storage to allocate for the task. This parameter is used to
 * 			expand the total amount of ephemeral storage available, beyond the default amount, for
 * 			tasks hosted on Fargate. For more information, see <a href="https://docs.aws.amazon.com/AmazonECS/latest/developerguide/using_data_volumes.html">Using data volumes in
 * 				tasks</a> in the <i>Amazon ECS Developer Guide;</i>.</p>
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
export interface EphemeralStorage {
  /**
   * <p>The total amount, in GiB, of ephemeral storage to set for the task. The minimum
   * 			supported value is <code>21</code> GiB and the maximum supported value is
   * 				<code>200</code> GiB.</p>
   * @public
   */
  sizeInGiB: number | undefined;
}

/**
 * <p>Details on an Elastic Inference accelerator. For more information, see <a href="https://docs.aws.amazon.com/AmazonECS/latest/developerguide/ecs-inference.html">Working with Amazon Elastic Inference on Amazon ECS</a> in the
 * 			<i>Amazon Elastic Container Service Developer Guide</i>.</p>
 * @public
 */
export interface InferenceAccelerator {
  /**
   * <p>The Elastic Inference accelerator device name. The <code>deviceName</code> must also
   * 			be referenced in a container definition as a <a href="https://docs.aws.amazon.com/AmazonECS/latest/APIReference/API_ResourceRequirement.html">ResourceRequirement</a>.</p>
   * @public
   */
  deviceName: string | undefined;

  /**
   * <p>The Elastic Inference accelerator type to use.</p>
   * @public
   */
  deviceType: string | undefined;
}

/**
 * @public
 * @enum
 */
export const IpcMode = {
  HOST: "host",
  NONE: "none",
  TASK: "task",
} as const;

/**
 * @public
 */
export type IpcMode = (typeof IpcMode)[keyof typeof IpcMode];

/**
 * @public
 * @enum
 */
export const NetworkMode = {
  AWSVPC: "awsvpc",
  BRIDGE: "bridge",
  HOST: "host",
  NONE: "none",
} as const;

/**
 * @public
 */
export type NetworkMode = (typeof NetworkMode)[keyof typeof NetworkMode];

/**
 * @public
 * @enum
 */
export const PidMode = {
  HOST: "host",
  TASK: "task",
} as const;

/**
 * @public
 */
export type PidMode = (typeof PidMode)[keyof typeof PidMode];

/**
 * @public
 * @enum
 */
export const TaskDefinitionPlacementConstraintType = {
  MEMBER_OF: "memberOf",
} as const;

/**
 * @public
 */
export type TaskDefinitionPlacementConstraintType =
  (typeof TaskDefinitionPlacementConstraintType)[keyof typeof TaskDefinitionPlacementConstraintType];

/**
 * <p>The constraint on task placement in the task definition. For more information, see
 * 				<a href="https://docs.aws.amazon.com/AmazonECS/latest/developerguide/task-placement-constraints.html">Task placement constraints</a> in the
 * 			<i>Amazon Elastic Container Service Developer Guide</i>.</p>
 *          <note>
 *             <p>Task placement constraints aren't supported for tasks run on Fargate.</p>
 *          </note>
 * @public
 */
export interface TaskDefinitionPlacementConstraint {
  /**
   * <p>The type of constraint. The <code>MemberOf</code> constraint restricts selection to be
   * 			from a group of valid candidates.</p>
   * @public
   */
  type?: TaskDefinitionPlacementConstraintType | undefined;

  /**
   * <p>A cluster query language expression to apply to the constraint. For more information,
   * 			see <a href="https://docs.aws.amazon.com/AmazonECS/latest/developerguide/cluster-query-language.html">Cluster query language</a> in the <i>Amazon Elastic Container Service Developer Guide</i>.</p>
   * @public
   */
  expression?: string | undefined;
}

/**
 * @public
 * @enum
 */
export const ProxyConfigurationType = {
  APPMESH: "APPMESH",
} as const;

/**
 * @public
 */
export type ProxyConfigurationType = (typeof ProxyConfigurationType)[keyof typeof ProxyConfigurationType];

/**
 * <p>The configuration details for the App Mesh proxy.</p>
 *          <p>For tasks that use the EC2 launch type, the container instances require
 * 			at least version 1.26.0 of the container agent and at least version 1.26.0-1 of the
 * 				<code>ecs-init</code> package to use a proxy configuration. If your container
 * 			instances are launched from the Amazon ECS optimized AMI version <code>20190301</code> or
 * 			later, then they contain the required versions of the container agent and
 * 				<code>ecs-init</code>. For more information, see <a href="https://docs.aws.amazon.com/AmazonECS/latest/developerguide/ecs-optimized_AMI.html">Amazon ECS-optimized Linux AMI</a>
 *          </p>
 * @public
 */
export interface ProxyConfiguration {
  /**
   * <p>The proxy type. The only supported value is <code>APPMESH</code>.</p>
   * @public
   */
  type?: ProxyConfigurationType | undefined;

  /**
   * <p>The name of the container that will serve as the App Mesh proxy.</p>
   * @public
   */
  containerName: string | undefined;

  /**
   * <p>The set of network configuration parameters to provide the Container Network Interface
   * 			(CNI) plugin, specified as key-value pairs.</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>IgnoredUID</code> - (Required) The user ID (UID) of the proxy
   * 					container as defined by the <code>user</code> parameter in a container
   * 					definition. This is used to ensure the proxy ignores its own traffic. If
   * 						<code>IgnoredGID</code> is specified, this field can be empty.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>IgnoredGID</code> - (Required) The group ID (GID) of the proxy
   * 					container as defined by the <code>user</code> parameter in a container
   * 					definition. This is used to ensure the proxy ignores its own traffic. If
   * 						<code>IgnoredUID</code> is specified, this field can be empty.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>AppPorts</code> - (Required) The list of ports that the
   * 					application uses. Network traffic to these ports is forwarded to the
   * 						<code>ProxyIngressPort</code> and <code>ProxyEgressPort</code>.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>ProxyIngressPort</code> - (Required) Specifies the port that
   * 					incoming traffic to the <code>AppPorts</code> is directed to.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>ProxyEgressPort</code> - (Required) Specifies the port that
   * 					outgoing traffic from the <code>AppPorts</code> is directed to.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>EgressIgnoredPorts</code> - (Required) The egress traffic going to
   * 					the specified ports is ignored and not redirected to the
   * 						<code>ProxyEgressPort</code>. It can be an empty list.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>EgressIgnoredIPs</code> - (Required) The egress traffic going to
   * 					the specified IP addresses is ignored and not redirected to the
   * 						<code>ProxyEgressPort</code>. It can be an empty list.</p>
   *             </li>
   *          </ul>
   * @public
   */
  properties?: KeyValuePair[] | undefined;
}

/**
 * @public
 * @enum
 */
export const CPUArchitecture = {
  ARM64: "ARM64",
  X86_64: "X86_64",
} as const;

/**
 * @public
 */
export type CPUArchitecture = (typeof CPUArchitecture)[keyof typeof CPUArchitecture];

/**
 * @public
 * @enum
 */
export const OSFamily = {
  LINUX: "LINUX",
  WINDOWS_SERVER_2004_CORE: "WINDOWS_SERVER_2004_CORE",
  WINDOWS_SERVER_2016_FULL: "WINDOWS_SERVER_2016_FULL",
  WINDOWS_SERVER_2019_CORE: "WINDOWS_SERVER_2019_CORE",
  WINDOWS_SERVER_2019_FULL: "WINDOWS_SERVER_2019_FULL",
  WINDOWS_SERVER_2022_CORE: "WINDOWS_SERVER_2022_CORE",
  WINDOWS_SERVER_2022_FULL: "WINDOWS_SERVER_2022_FULL",
  WINDOWS_SERVER_2025_CORE: "WINDOWS_SERVER_2025_CORE",
  WINDOWS_SERVER_2025_FULL: "WINDOWS_SERVER_2025_FULL",
  WINDOWS_SERVER_20H2_CORE: "WINDOWS_SERVER_20H2_CORE",
} as const;

/**
 * @public
 */
export type OSFamily = (typeof OSFamily)[keyof typeof OSFamily];

/**
 * <p>Information about the platform for the Amazon ECS service or task.</p>
 *          <p>For more information about <code>RuntimePlatform</code>, see <a href="https://docs.aws.amazon.com/AmazonECS/latest/developerguide/task_definition_parameters.html#runtime-platform">RuntimePlatform</a> in the <i>Amazon Elastic Container Service Developer Guide</i>.</p>
 * @public
 */
export interface RuntimePlatform {
  /**
   * <p>The CPU architecture.</p>
   *          <p>You can run your Linux tasks on an ARM-based platform by setting the value to
   * 				<code>ARM64</code>. This option is available for tasks that run on Linux Amazon EC2
   * 			instance or Linux containers on Fargate.</p>
   * @public
   */
  cpuArchitecture?: CPUArchitecture | undefined;

  /**
   * <p>The operating system.</p>
   * @public
   */
  operatingSystemFamily?: OSFamily | undefined;
}

/**
 * @public
 * @enum
 */
export const TaskDefinitionStatus = {
  ACTIVE: "ACTIVE",
  DELETE_IN_PROGRESS: "DELETE_IN_PROGRESS",
  INACTIVE: "INACTIVE",
} as const;

/**
 * @public
 */
export type TaskDefinitionStatus = (typeof TaskDefinitionStatus)[keyof typeof TaskDefinitionStatus];

/**
 * @public
 * @enum
 */
export const Scope = {
  SHARED: "shared",
  TASK: "task",
} as const;

/**
 * @public
 */
export type Scope = (typeof Scope)[keyof typeof Scope];

/**
 * <p>This parameter is specified when you're using Docker volumes. Docker volumes are only
 * 			supported when you're using the EC2 launch type. Windows containers only
 * 			support the use of the <code>local</code> driver. To use bind mounts, specify a
 * 				<code>host</code> instead.</p>
 * @public
 */
export interface DockerVolumeConfiguration {
  /**
   * <p>The scope for the Docker volume that determines its lifecycle. Docker volumes that are
   * 			scoped to a <code>task</code> are automatically provisioned when the task starts and
   * 			destroyed when the task stops. Docker volumes that are scoped as <code>shared</code>
   * 			persist after the task stops.</p>
   * @public
   */
  scope?: Scope | undefined;

  /**
   * <p>If this value is <code>true</code>, the Docker volume is created if it doesn't already
   * 			exist.</p>
   *          <note>
   *             <p>This field is only used if the <code>scope</code> is <code>shared</code>.</p>
   *          </note>
   * @public
   */
  autoprovision?: boolean | undefined;

  /**
   * <p>The Docker volume driver to use. The driver value must match the driver name provided
   * 			by Docker because it is used for task placement. If the driver was installed using the
   * 			Docker plugin CLI, use <code>docker plugin ls</code> to retrieve the driver name from
   * 			your container instance. If the driver was installed using another method, use Docker
   * 			plugin discovery to retrieve the driver name. This parameter maps to <code>Driver</code>
   * 			in the docker container create command and the <code>xxdriver</code> option to docker
   * 			volume create.</p>
   * @public
   */
  driver?: string | undefined;

  /**
   * <p>A map of Docker driver-specific options passed through. This parameter maps to
   * 				<code>DriverOpts</code> in the docker create-volume command and the
   * 				<code>xxopt</code> option to docker volume create.</p>
   * @public
   */
  driverOpts?: Record<string, string> | undefined;

  /**
   * <p>Custom metadata to add to your Docker volume. This parameter maps to
   * 				<code>Labels</code> in the docker container create command and the
   * 				<code>xxlabel</code> option to docker volume create.</p>
   * @public
   */
  labels?: Record<string, string> | undefined;
}

/**
 * @public
 * @enum
 */
export const EFSAuthorizationConfigIAM = {
  DISABLED: "DISABLED",
  ENABLED: "ENABLED",
} as const;

/**
 * @public
 */
export type EFSAuthorizationConfigIAM = (typeof EFSAuthorizationConfigIAM)[keyof typeof EFSAuthorizationConfigIAM];

/**
 * <p>The authorization configuration details for the Amazon EFS file system.</p>
 * @public
 */
export interface EFSAuthorizationConfig {
  /**
   * <p>The Amazon EFS access point ID to use. If an access point is specified, the root directory
   * 			value specified in the <code>EFSVolumeConfiguration</code> must either be omitted or set
   * 			to <code>/</code> which will enforce the path set on the EFS access point. If an access
   * 			point is used, transit encryption must be on in the <code>EFSVolumeConfiguration</code>.
   * 			For more information, see <a href="https://docs.aws.amazon.com/efs/latest/ug/efs-access-points.html">Working with Amazon EFS access
   * 				points</a> in the <i>Amazon Elastic File System User Guide</i>.</p>
   * @public
   */
  accessPointId?: string | undefined;

  /**
   * <p>Determines whether to use the Amazon ECS task role defined in a task definition when
   * 			mounting the Amazon EFS file system. If it is turned on, transit encryption must be turned on
   * 			in the <code>EFSVolumeConfiguration</code>. If this parameter is omitted, the default
   * 			value of <code>DISABLED</code> is used. For more information, see <a href="https://docs.aws.amazon.com/AmazonECS/latest/developerguide/efs-volumes.html#efs-volume-accesspoints">Using
   * 				Amazon EFS access points</a> in the <i>Amazon Elastic Container Service Developer Guide</i>.</p>
   * @public
   */
  iam?: EFSAuthorizationConfigIAM | undefined;
}

/**
 * @public
 * @enum
 */
export const EFSTransitEncryption = {
  DISABLED: "DISABLED",
  ENABLED: "ENABLED",
} as const;

/**
 * @public
 */
export type EFSTransitEncryption = (typeof EFSTransitEncryption)[keyof typeof EFSTransitEncryption];

/**
 * <p>This parameter is specified when you're using an Amazon Elastic File System file system for task
 * 			storage. For more information, see <a href="https://docs.aws.amazon.com/AmazonECS/latest/developerguide/efs-volumes.html">Amazon EFS volumes</a> in the
 * 			<i>Amazon Elastic Container Service Developer Guide</i>.</p>
 * @public
 */
export interface EFSVolumeConfiguration {
  /**
   * <p>The Amazon EFS file system ID to use.</p>
   * @public
   */
  fileSystemId: string | undefined;

  /**
   * <p>The directory within the Amazon EFS file system to mount as the root directory inside the
   * 			host. If this parameter is omitted, the root of the Amazon EFS volume will be used.
   * 			Specifying <code>/</code> will have the same effect as omitting this parameter.</p>
   *          <important>
   *             <p>If an EFS access point is specified in the <code>authorizationConfig</code>, the
   * 				root directory parameter must either be omitted or set to <code>/</code> which will
   * 				enforce the path set on the EFS access point.</p>
   *          </important>
   * @public
   */
  rootDirectory?: string | undefined;

  /**
   * <p>Determines whether to use encryption for Amazon EFS data in transit between the Amazon ECS host
   * 			and the Amazon EFS server. Transit encryption must be turned on if Amazon EFS IAM authorization
   * 			is used. If this parameter is omitted, the default value of <code>DISABLED</code> is
   * 			used. For more information, see <a href="https://docs.aws.amazon.com/efs/latest/ug/encryption-in-transit.html">Encrypting data in transit</a> in
   * 			the <i>Amazon Elastic File System User Guide</i>.</p>
   * @public
   */
  transitEncryption?: EFSTransitEncryption | undefined;

  /**
   * <p>The port to use when sending encrypted data between the Amazon ECS host and the Amazon EFS
   * 			server. If you do not specify a transit encryption port, it will use the port selection
   * 			strategy that the Amazon EFS mount helper uses. For more information, see <a href="https://docs.aws.amazon.com/efs/latest/ug/efs-mount-helper.html">EFS mount
   * 				helper</a> in the <i>Amazon Elastic File System User Guide</i>.</p>
   * @public
   */
  transitEncryptionPort?: number | undefined;

  /**
   * <p>The authorization configuration details for the Amazon EFS file system.</p>
   * @public
   */
  authorizationConfig?: EFSAuthorizationConfig | undefined;
}

/**
 * <p>The authorization configuration details for Amazon FSx for Windows File Server file system. See <a href="https://docs.aws.amazon.com/AmazonECS/latest/APIReference/API_FSxWindowsFileServerVolumeConfiguration.html">FSxWindowsFileServerVolumeConfiguration</a> in the <i>Amazon ECS API
 * 				Reference</i>.</p>
 *          <p>For more information and the input format, see <a href="https://docs.aws.amazon.com/AmazonECS/latest/developerguide/wfsx-volumes.html">Amazon FSx for Windows File Server Volumes</a>
 * 			in the <i>Amazon Elastic Container Service Developer Guide</i>.</p>
 * @public
 */
export interface FSxWindowsFileServerAuthorizationConfig {
  /**
   * <p>The authorization credential option to use. The authorization credential options can
   * 			be provided using either the Amazon Resource Name (ARN) of an Secrets Manager secret or SSM Parameter Store
   * 			parameter. The ARN refers to the stored credentials.</p>
   * @public
   */
  credentialsParameter: string | undefined;

  /**
   * <p>A fully qualified domain name hosted by an <a href="https://docs.aws.amazon.com/directoryservice/latest/admin-guide/directory_microsoft_ad.html">Directory Service</a> Managed Microsoft AD (Active Directory) or self-hosted AD on
   * 			Amazon EC2.</p>
   * @public
   */
  domain: string | undefined;
}

/**
 * <p>This parameter is specified when you're using <a href="https://docs.aws.amazon.com/fsx/latest/WindowsGuide/what-is.html">Amazon FSx for Windows File Server</a> file system for task
 * 			storage.</p>
 *          <p>For more information and the input format, see <a href="https://docs.aws.amazon.com/AmazonECS/latest/developerguide/wfsx-volumes.html">Amazon FSx for Windows File Server volumes</a>
 * 			in the <i>Amazon Elastic Container Service Developer Guide</i>.</p>
 * @public
 */
export interface FSxWindowsFileServerVolumeConfiguration {
  /**
   * <p>The Amazon FSx for Windows File Server file system ID to use.</p>
   * @public
   */
  fileSystemId: string | undefined;

  /**
   * <p>The directory within the Amazon FSx for Windows File Server file system to mount as the root directory
   * 			inside the host.</p>
   * @public
   */
  rootDirectory: string | undefined;

  /**
   * <p>The authorization configuration details for the Amazon FSx for Windows File Server file system.</p>
   * @public
   */
  authorizationConfig: FSxWindowsFileServerAuthorizationConfig | undefined;
}

/**
 * <p>Details on a container instance bind mount host volume.</p>
 * @public
 */
export interface HostVolumeProperties {
  /**
   * <p>When the <code>host</code> parameter is used, specify a <code>sourcePath</code> to
   * 			declare the path on the host container instance that's presented to the container. If
   * 			this parameter is empty, then the Docker daemon has assigned a host path for you. If the
   * 				<code>host</code> parameter contains a <code>sourcePath</code> file location, then
   * 			the data volume persists at the specified location on the host container instance until
   * 			you delete it manually. If the <code>sourcePath</code> value doesn't exist on the host
   * 			container instance, the Docker daemon creates it. If the location does exist, the
   * 			contents of the source path folder are exported.</p>
   *          <p>If you're using the Fargate launch type, the <code>sourcePath</code>
   * 			parameter is not supported.</p>
   * @public
   */
  sourcePath?: string | undefined;
}

/**
 * <p>The data volume configuration for tasks launched using this task definition.
 * 			Specifying a volume configuration in a task definition is optional. The volume
 * 			configuration may contain multiple volumes but only one volume configured at launch is
 * 			supported. Each volume defined in the volume configuration may only specify a
 * 				<code>name</code> and one of either <code>configuredAtLaunch</code>,
 * 				<code>dockerVolumeConfiguration</code>, <code>efsVolumeConfiguration</code>,
 * 				<code>fsxWindowsFileServerVolumeConfiguration</code>, or <code>host</code>. If an
 * 			empty volume configuration is specified, by default Amazon ECS uses a host volume. For more
 * 			information, see <a href="https://docs.aws.amazon.com/AmazonECS/latest/developerguide/using_data_volumes.html">Using data volumes in
 * 				tasks</a>.</p>
 * @public
 */
export interface Volume {
  /**
   * <p>The name of the volume. Up to 255 letters (uppercase and lowercase), numbers, underscores, and hyphens are allowed.</p>
   *          <p>When using a volume configured at launch, the <code>name</code> is required and must
   * 			also be specified as the volume name in the <code>ServiceVolumeConfiguration</code> or
   * 				<code>TaskVolumeConfiguration</code> parameter when creating your service or
   * 			standalone task.</p>
   *          <p>For all other types of volumes, this name is referenced in the
   * 				<code>sourceVolume</code> parameter of the <code>mountPoints</code> object in the
   * 			container definition.</p>
   *          <p>When a volume is using the <code>efsVolumeConfiguration</code>, the name is
   * 			required.</p>
   * @public
   */
  name?: string | undefined;

  /**
   * <p>This parameter is specified when you use bind mount host volumes. The contents of the
   * 				<code>host</code> parameter determine whether your bind mount host volume persists
   * 			on the host container instance and where it's stored. If the <code>host</code> parameter
   * 			is empty, then the Docker daemon assigns a host path for your data volume. However, the
   * 			data isn't guaranteed to persist after the containers that are associated with it stop
   * 			running.</p>
   *          <p>Windows containers can mount whole directories on the same drive as
   * 				<code>$env:ProgramData</code>. Windows containers can't mount directories on a
   * 			different drive, and mount point can't be across drives. For example, you can mount
   * 				<code>C:\my\path:C:\my\path</code> and <code>D:\:D:\</code>, but not
   * 				<code>D:\my\path:C:\my\path</code> or <code>D:\:C:\my\path</code>.</p>
   * @public
   */
  host?: HostVolumeProperties | undefined;

  /**
   * <p>This parameter is specified when you use Docker volumes.</p>
   *          <p>Windows containers only support the use of the <code>local</code> driver. To use bind
   * 			mounts, specify the <code>host</code> parameter instead.</p>
   *          <note>
   *             <p>Docker volumes aren't supported by tasks run on Fargate.</p>
   *          </note>
   * @public
   */
  dockerVolumeConfiguration?: DockerVolumeConfiguration | undefined;

  /**
   * <p>This parameter is specified when you use an Amazon Elastic File System file system for task
   * 			storage.</p>
   * @public
   */
  efsVolumeConfiguration?: EFSVolumeConfiguration | undefined;

  /**
   * <p>This parameter is specified when you use Amazon FSx for Windows File Server file system for task
   * 			storage.</p>
   * @public
   */
  fsxWindowsFileServerVolumeConfiguration?: FSxWindowsFileServerVolumeConfiguration | undefined;

  /**
   * <p>Indicates whether the volume should be configured at launch time. This is used to
   * 			create Amazon EBS volumes for standalone tasks or tasks created as part of a service. Each
   * 			task definition revision may only have one volume configured at launch in the volume
   * 			configuration.</p>
   *          <p>To configure a volume at launch time, use this task definition revision and specify a
   * 				<code>volumeConfigurations</code> object when calling the
   * 			<code>CreateService</code>, <code>UpdateService</code>, <code>RunTask</code> or
   * 				<code>StartTask</code> APIs.</p>
   * @public
   */
  configuredAtLaunch?: boolean | undefined;
}

/**
 * <p>The details of a task definition which describes the container and volume definitions
 * 			of an Amazon Elastic Container Service task. You can specify which Docker images to use, the required
 * 			resources, and other configurations related to launching the task definition through an
 * 			Amazon ECS service or task.</p>
 * @public
 */
export interface TaskDefinition {
  /**
   * <p>The full Amazon Resource Name (ARN) of the task definition.</p>
   * @public
   */
  taskDefinitionArn?: string | undefined;

  /**
   * <p>A list of container definitions in JSON format that describe the different containers
   * 			that make up your task. For more information about container definition parameters and
   * 			defaults, see <a href="https://docs.aws.amazon.com/AmazonECS/latest/developerguide/task_defintions.html">Amazon ECS Task
   * 				Definitions</a> in the <i>Amazon Elastic Container Service Developer Guide</i>.</p>
   * @public
   */
  containerDefinitions?: ContainerDefinition[] | undefined;

  /**
   * <p>The name of a family that this task definition is registered to. Up to 255 characters
   * 			are allowed. Letters (both uppercase and lowercase letters), numbers, hyphens (-), and
   * 			underscores (_) are allowed.</p>
   *          <p>A family groups multiple versions of a task definition. Amazon ECS gives the first task
   * 			definition that you registered to a family a revision number of 1. Amazon ECS gives
   * 			sequential revision numbers to each task definition that you add.</p>
   * @public
   */
  family?: string | undefined;

  /**
   * <p>The short name or full Amazon Resource Name (ARN) of the Identity and Access Management role that grants containers in the
   * 			task permission to call Amazon Web Services APIs on your behalf. For informationabout the required
   * 			IAM roles for Amazon ECS, see <a href="https://docs.aws.amazon.com/AmazonECS/latest/developerguide/security-ecs-iam-role-overview.html">IAM
   * 				roles for Amazon ECS</a> in the <i>Amazon Elastic Container Service Developer Guide</i>.</p>
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
   * <p>The revision of the task in a particular family. The revision is a version number of a
   * 			task definition in a family. When you register a task definition for the first time, the
   * 			revision is <code>1</code>. Each time that you register a new revision of a task
   * 			definition in the same family, the revision value always increases by one. This is even
   * 			if you deregistered previous revisions in this family.</p>
   * @public
   */
  revision?: number | undefined;

  /**
   * <p>The list of data volume definitions for the task. For more information, see <a href="https://docs.aws.amazon.com/AmazonECS/latest/developerguide/using_data_volumes.html">Using data volumes in tasks</a> in the <i>Amazon Elastic Container Service Developer Guide</i>.</p>
   *          <note>
   *             <p>The <code>host</code> and <code>sourcePath</code> parameters aren't supported for
   * 				tasks run on Fargate. </p>
   *          </note>
   * @public
   */
  volumes?: Volume[] | undefined;

  /**
   * <p>The status of the task definition.</p>
   * @public
   */
  status?: TaskDefinitionStatus | undefined;

  /**
   * <p>The container instance attributes required by your task. When an Amazon EC2 instance is
   * 			registered to your cluster, the Amazon ECS container agent assigns some standard attributes
   * 			to the instance. You can apply custom attributes. These are specified as key-value pairs
   * 			using the Amazon ECS console or the <a href="https://docs.aws.amazon.com/AmazonECS/latest/APIReference/API_PutAttributes.html">PutAttributes</a>
   * 			API. These attributes are used when determining task placement for tasks hosted on Amazon EC2
   * 			instances. For more information, see <a href="https://docs.aws.amazon.com/AmazonECS/latest/developerguide/task-placement-constraints.html#attributes">Attributes</a> in the <i>Amazon Elastic Container Service Developer Guide</i>.</p>
   *          <note>
   *             <p>This parameter isn't supported for tasks run on Fargate.</p>
   *          </note>
   * @public
   */
  requiresAttributes?: Attribute[] | undefined;

  /**
   * <p>An array of placement constraint objects to use for tasks.</p>
   *          <note>
   *             <p>This parameter isn't supported for tasks run on Fargate.</p>
   *          </note>
   * @public
   */
  placementConstraints?: TaskDefinitionPlacementConstraint[] | undefined;

  /**
   * <p>Amazon ECS validates the task definition parameters with those supported by the launch
   * 			type. For more information, see <a href="https://docs.aws.amazon.com/AmazonECS/latest/developerguide/launch_types.html">Amazon ECS launch types</a>
   * 			in the <i>Amazon Elastic Container Service Developer Guide</i>.</p>
   * @public
   */
  compatibilities?: Compatibility[] | undefined;

  /**
   * <p>The operating system that your task definitions are running on. A platform family is
   * 			specified only for tasks using the Fargate launch type. </p>
   *          <p>When you specify a task in a service, this value must match the
   * 				<code>runtimePlatform</code> value of the service.</p>
   * @public
   */
  runtimePlatform?: RuntimePlatform | undefined;

  /**
   * <p>The task launch types the task definition was validated against. The valid values are
   * 				<code>EC2</code>, <code>FARGATE</code>, and <code>EXTERNAL</code>. For more
   * 			information, see <a href="https://docs.aws.amazon.com/AmazonECS/latest/developerguide/launch_types.html">Amazon ECS launch types</a>
   * 			in the <i>Amazon Elastic Container Service Developer Guide</i>.</p>
   * @public
   */
  requiresCompatibilities?: Compatibility[] | undefined;

  /**
   * <p>The number of <code>cpu</code> units used by the task. If you use the EC2 launch type,
   * 			this field is optional. Any value can be used. If you use the Fargate launch type, this
   * 			field is required. You must use one of the following values. The value that you choose
   * 			determines your range of valid values for the <code>memory</code> parameter.</p>
   *          <p>If you're using the EC2 launch type or the external launch type, this
   * 			field is optional. Supported values are between <code>128</code> CPU units
   * 				(<code>0.125</code> vCPUs) and <code>196608</code> CPU units (<code>192</code>
   * 			vCPUs). </p>
   *          <p>This field is required for Fargate. For information about the valid values, see <a href="https://docs.aws.amazon.com/AmazonECS/latest/developerguide/task_definition_parameters.html#task_size">Task size</a> in the <i>Amazon Elastic Container Service Developer Guide</i>.</p>
   * @public
   */
  cpu?: string | undefined;

  /**
   * <p>The amount (in MiB) of memory used by the task.</p>
   *          <p>If your tasks runs on Amazon EC2 instances, you must specify either a task-level memory
   * 			value or a container-level memory value. This field is optional and any value can be
   * 			used. If a task-level memory value is specified, the container-level memory value is
   * 			optional. For more information regarding container-level memory and memory reservation,
   * 			see <a href="https://docs.aws.amazon.com/AmazonECS/latest/APIReference/API_ContainerDefinition.html">ContainerDefinition</a>.</p>
   *          <p>If your tasks runs on Fargate, this field is required. You must use one of the
   * 			following values. The value you choose determines your range of valid values for the
   * 				<code>cpu</code> parameter.</p>
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
   * <p>The Elastic Inference accelerator that's associated with the task.</p>
   * @public
   */
  inferenceAccelerators?: InferenceAccelerator[] | undefined;

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
   *                             default is a private namespace for each container.</p>
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
   *          <p>Your Amazon ECS container instances require at least version 1.26.0 of the container agent
   * 			and at least version 1.26.0-1 of the <code>ecs-init</code> package to use a proxy
   * 			configuration. If your container instances are launched from the Amazon ECS optimized AMI
   * 			version <code>20190301</code> or later, they contain the required versions of the
   * 			container agent and <code>ecs-init</code>. For more information, see <a href="https://docs.aws.amazon.com/AmazonECS/latest/developerguide/ecs-optimized_AMI.html">Amazon ECS-optimized Linux AMI</a> in the <i>Amazon Elastic Container Service Developer Guide</i>.</p>
   * @public
   */
  proxyConfiguration?: ProxyConfiguration | undefined;

  /**
   * <p>The Unix timestamp for the time when the task definition was registered.</p>
   * @public
   */
  registeredAt?: Date | undefined;

  /**
   * <p>The Unix timestamp for the time when the task definition was deregistered.</p>
   * @public
   */
  deregisteredAt?: Date | undefined;

  /**
   * <p>The principal that registered the task definition.</p>
   * @public
   */
  registeredBy?: string | undefined;

  /**
   * <p>The ephemeral storage settings to use for tasks run with the task definition.</p>
   * @public
   */
  ephemeralStorage?: EphemeralStorage | undefined;

  /**
   * <p>Enables fault injection and allows for fault injection requests to be accepted from
   * 			the task's containers. The default value is <code>false</code>.</p>
   * @public
   */
  enableFaultInjection?: boolean | undefined;
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
 * @public
 */
export interface DeleteTaskSetRequest {
  /**
   * <p>The short name or full Amazon Resource Name (ARN) of the cluster that hosts the service that the task
   * 			set found in to delete.</p>
   * @public
   */
  cluster: string | undefined;

  /**
   * <p>The short name or full Amazon Resource Name (ARN) of the service that hosts the task set to
   * 			delete.</p>
   * @public
   */
  service: string | undefined;

  /**
   * <p>The task set ID or full Amazon Resource Name (ARN) of the task set to delete.</p>
   * @public
   */
  taskSet: string | undefined;

  /**
   * <p>If <code>true</code>, you can delete a task set even if it hasn't been scaled down to
   * 			zero.</p>
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
 * <p>The specified task set wasn't found. You can view your available task sets with <a href="https://docs.aws.amazon.com/AmazonECS/latest/APIReference/API_DescribeTaskSets.html">DescribeTaskSets</a>. Task sets are specific to each cluster, service and
 * 			Region.</p>
 * @public
 */
export class TaskSetNotFoundException extends __BaseException {
  readonly name: "TaskSetNotFoundException" = "TaskSetNotFoundException";
  readonly $fault: "client" = "client";
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<TaskSetNotFoundException, __BaseException>) {
    super({
      name: "TaskSetNotFoundException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, TaskSetNotFoundException.prototype);
  }
}

/**
 * @public
 */
export interface DeregisterContainerInstanceRequest {
  /**
   * <p>The short name or full Amazon Resource Name (ARN) of the cluster that hosts the container instance to
   * 			deregister. If you do not specify a cluster, the default cluster is assumed.</p>
   * @public
   */
  cluster?: string | undefined;

  /**
   * <p>The container instance ID or full ARN of the container instance to deregister. For
   * 			more information about the ARN format, see <a href="https://docs.aws.amazon.com/AmazonECS/latest/developerguide/ecs-account-settings.html#ecs-resource-ids">Amazon Resource Name (ARN)</a> in the <i>Amazon ECS Developer Guide</i>.</p>
   * @public
   */
  containerInstance: string | undefined;

  /**
   * <p>Forces the container instance to be deregistered. If you have tasks running on the
   * 			container instance when you deregister it with the <code>force</code> option, these
   * 			tasks remain running until you terminate the instance or the tasks stop through some
   * 			other means, but they're orphaned (no longer monitored or accounted for by Amazon ECS). If an
   * 			orphaned task on your container instance is part of an Amazon ECS service, then the service
   * 			scheduler starts another copy of that task, on a different container instance if
   * 			possible. </p>
   *          <p>Any containers in orphaned service tasks that are registered with a Classic Load Balancer or an Application Load Balancer
   * 			target group are deregistered. They begin connection draining according to the settings
   * 			on the load balancer or target group.</p>
   * @public
   */
  force?: boolean | undefined;
}

/**
 * @public
 * @enum
 */
export const InstanceHealthCheckState = {
  IMPAIRED: "IMPAIRED",
  INITIALIZING: "INITIALIZING",
  INSUFFICIENT_DATA: "INSUFFICIENT_DATA",
  OK: "OK",
} as const;

/**
 * @public
 */
export type InstanceHealthCheckState = (typeof InstanceHealthCheckState)[keyof typeof InstanceHealthCheckState];

/**
 * @public
 * @enum
 */
export const InstanceHealthCheckType = {
  CONTAINER_RUNTIME: "CONTAINER_RUNTIME",
} as const;

/**
 * @public
 */
export type InstanceHealthCheckType = (typeof InstanceHealthCheckType)[keyof typeof InstanceHealthCheckType];

/**
 * <p>An object representing the result of a container instance health status check.</p>
 * @public
 */
export interface InstanceHealthCheckResult {
  /**
   * <p>The type of container instance health status that was verified.</p>
   * @public
   */
  type?: InstanceHealthCheckType | undefined;

  /**
   * <p>The container instance health status.</p>
   * @public
   */
  status?: InstanceHealthCheckState | undefined;

  /**
   * <p>The Unix timestamp for when the container instance health status was last
   * 			updated.</p>
   * @public
   */
  lastUpdated?: Date | undefined;

  /**
   * <p>The Unix timestamp for when the container instance health status last changed.</p>
   * @public
   */
  lastStatusChange?: Date | undefined;
}

/**
 * <p>An object representing the health status of the container instance.</p>
 * @public
 */
export interface ContainerInstanceHealthStatus {
  /**
   * <p>The overall health status of the container instance. This is an aggregate status of
   * 			all container instance health checks.</p>
   * @public
   */
  overallStatus?: InstanceHealthCheckState | undefined;

  /**
   * <p>An array of objects representing the details of the container instance health
   * 			status.</p>
   * @public
   */
  details?: InstanceHealthCheckResult[] | undefined;
}

/**
 * <p>Describes the resources available for a container instance.</p>
 * @public
 */
export interface Resource {
  /**
   * <p>The name of the resource, such as <code>CPU</code>, <code>MEMORY</code>,
   * 				<code>PORTS</code>, <code>PORTS_UDP</code>, or a user-defined resource.</p>
   * @public
   */
  name?: string | undefined;

  /**
   * <p>The type of the resource. Valid values: <code>INTEGER</code>, <code>DOUBLE</code>,
   * 				<code>LONG</code>, or <code>STRINGSET</code>.</p>
   * @public
   */
  type?: string | undefined;

  /**
   * <p>When the <code>doubleValue</code> type is set, the value of the resource must be a
   * 			double precision floating-point type.</p>
   * @public
   */
  doubleValue?: number | undefined;

  /**
   * <p>When the <code>longValue</code> type is set, the value of the resource must be an
   * 			extended precision floating-point type.</p>
   * @public
   */
  longValue?: number | undefined;

  /**
   * <p>When the <code>integerValue</code> type is set, the value of the resource must be an
   * 			integer.</p>
   * @public
   */
  integerValue?: number | undefined;

  /**
   * <p>When the <code>stringSetValue</code> type is set, the value of the resource must be a
   * 			string type.</p>
   * @public
   */
  stringSetValue?: string[] | undefined;
}

/**
 * <p>The Docker and Amazon ECS container agent version information about a container
 * 			instance.</p>
 * @public
 */
export interface VersionInfo {
  /**
   * <p>The version number of the Amazon ECS container agent.</p>
   * @public
   */
  agentVersion?: string | undefined;

  /**
   * <p>The Git commit hash for the Amazon ECS container agent build on the <a href="https://github.com/aws/amazon-ecs-agent">amazon-ecs-agent
   * 			</a> GitHub repository.</p>
   * @public
   */
  agentHash?: string | undefined;

  /**
   * <p>The Docker version that's running on the container instance.</p>
   * @public
   */
  dockerVersion?: string | undefined;
}

/**
 * <p>An Amazon EC2 or External instance that's running the Amazon ECS agent and has been registered
 * 			with a cluster.</p>
 * @public
 */
export interface ContainerInstance {
  /**
   * <p>The Amazon Resource Name (ARN) of the container instance. For more information about the ARN format,
   * 			see <a href="https://docs.aws.amazon.com/AmazonECS/latest/developerguide/ecs-account-settings.html#ecs-resource-ids">Amazon Resource Name (ARN)</a> in the <i>Amazon ECS Developer Guide</i>.</p>
   * @public
   */
  containerInstanceArn?: string | undefined;

  /**
   * <p>The ID of the container instance. For Amazon EC2 instances, this value is the Amazon EC2
   * 			instance ID. For external instances, this value is the Amazon Web Services Systems Manager managed instance ID.</p>
   * @public
   */
  ec2InstanceId?: string | undefined;

  /**
   * <p>The capacity provider that's associated with the container instance.</p>
   * @public
   */
  capacityProviderName?: string | undefined;

  /**
   * <p>The version counter for the container instance. Every time a container instance
   * 			experiences a change that triggers a CloudWatch event, the version counter is
   * 			incremented. If you're replicating your Amazon ECS container instance state with CloudWatch
   * 			Events, you can compare the version of a container instance reported by the Amazon ECS APIs
   * 			with the version reported in CloudWatch Events for the container instance (inside the
   * 				<code>detail</code> object) to verify that the version in your event stream is
   * 			current.</p>
   * @public
   */
  version?: number | undefined;

  /**
   * <p>The version information for the Amazon ECS container agent and Docker daemon running on the
   * 			container instance.</p>
   * @public
   */
  versionInfo?: VersionInfo | undefined;

  /**
   * <p>For CPU and memory resource types, this parameter describes the remaining CPU and
   * 			memory that wasn't already allocated to tasks and is therefore available for new tasks.
   * 			For port resource types, this parameter describes the ports that were reserved by the
   * 			Amazon ECS container agent (at instance registration time) and any task containers that have
   * 			reserved port mappings on the host (with the <code>host</code> or <code>bridge</code>
   * 			network mode). Any port that's not specified here is available for new tasks.</p>
   * @public
   */
  remainingResources?: Resource[] | undefined;

  /**
   * <p>For CPU and memory resource types, this parameter describes the amount of each
   * 			resource that was available on the container instance when the container agent
   * 			registered it with Amazon ECS. This value represents the total amount of CPU and memory that
   * 			can be allocated on this container instance to tasks. For port resource types, this
   * 			parameter describes the ports that were reserved by the Amazon ECS container agent when it
   * 			registered the container instance with Amazon ECS.</p>
   * @public
   */
  registeredResources?: Resource[] | undefined;

  /**
   * <p>The status of the container instance. The valid values are <code>REGISTERING</code>,
   * 				<code>REGISTRATION_FAILED</code>, <code>ACTIVE</code>, <code>INACTIVE</code>,
   * 				<code>DEREGISTERING</code>, or <code>DRAINING</code>.</p>
   *          <p>If your account has opted in to the <code>awsvpcTrunking</code> account setting, then
   * 			any newly registered container instance will transition to a <code>REGISTERING</code>
   * 			status while the trunk elastic network interface is provisioned for the instance. If the
   * 			registration fails, the instance will transition to a <code>REGISTRATION_FAILED</code>
   * 			status. You can describe the container instance and see the reason for failure in the
   * 				<code>statusReason</code> parameter. Once the container instance is terminated, the
   * 			instance transitions to a <code>DEREGISTERING</code> status while the trunk elastic
   * 			network interface is deprovisioned. The instance then transitions to an
   * 				<code>INACTIVE</code> status.</p>
   *          <p>The <code>ACTIVE</code> status indicates that the container instance can accept tasks.
   * 			The <code>DRAINING</code> indicates that new tasks aren't placed on the container
   * 			instance and any service tasks running on the container instance are removed if
   * 			possible. For more information, see <a href="https://docs.aws.amazon.com/AmazonECS/latest/developerguide/container-instance-draining.html">Container instance draining</a> in the
   * 			<i>Amazon Elastic Container Service Developer Guide</i>.</p>
   * @public
   */
  status?: string | undefined;

  /**
   * <p>The reason that the container instance reached its current status.</p>
   * @public
   */
  statusReason?: string | undefined;

  /**
   * <p>This parameter returns <code>true</code> if the agent is connected to Amazon ECS. An
   * 			instance with an agent that may be unhealthy or stopped return <code>false</code>. Only
   * 			instances connected to an agent can accept task placement requests.</p>
   * @public
   */
  agentConnected?: boolean | undefined;

  /**
   * <p>The number of tasks on the container instance that have a desired status
   * 				(<code>desiredStatus</code>) of <code>RUNNING</code>.</p>
   * @public
   */
  runningTasksCount?: number | undefined;

  /**
   * <p>The number of tasks on the container instance that are in the <code>PENDING</code>
   * 			status.</p>
   * @public
   */
  pendingTasksCount?: number | undefined;

  /**
   * <p>The status of the most recent agent update. If an update wasn't ever requested, this
   * 			value is <code>NULL</code>.</p>
   * @public
   */
  agentUpdateStatus?: AgentUpdateStatus | undefined;

  /**
   * <p>The attributes set for the container instance, either by the Amazon ECS container agent at
   * 			instance registration or manually with the <a href="https://docs.aws.amazon.com/AmazonECS/latest/APIReference/API_PutAttributes.html">PutAttributes</a>
   * 			operation.</p>
   * @public
   */
  attributes?: Attribute[] | undefined;

  /**
   * <p>The Unix timestamp for the time when the container instance was registered.</p>
   * @public
   */
  registeredAt?: Date | undefined;

  /**
   * <p>The resources attached to a container instance, such as an elastic network
   * 			interface.</p>
   * @public
   */
  attachments?: Attachment[] | undefined;

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

  /**
   * <p>An object representing the health status of the container instance.</p>
   * @public
   */
  healthStatus?: ContainerInstanceHealthStatus | undefined;
}

/**
 * @public
 */
export interface DeregisterContainerInstanceResponse {
  /**
   * <p>The container instance that was deregistered.</p>
   * @public
   */
  containerInstance?: ContainerInstance | undefined;
}

/**
 * @public
 */
export interface DeregisterTaskDefinitionRequest {
  /**
   * <p>The <code>family</code> and <code>revision</code> (<code>family:revision</code>) or
   * 			full Amazon Resource Name (ARN) of the task definition to deregister. You must specify a
   * 				<code>revision</code>.</p>
   * @public
   */
  taskDefinition: string | undefined;
}

/**
 * @public
 */
export interface DeregisterTaskDefinitionResponse {
  /**
   * <p>The full description of the deregistered task.</p>
   * @public
   */
  taskDefinition?: TaskDefinition | undefined;
}

/**
 * @public
 * @enum
 */
export const CapacityProviderField = {
  TAGS: "TAGS",
} as const;

/**
 * @public
 */
export type CapacityProviderField = (typeof CapacityProviderField)[keyof typeof CapacityProviderField];

/**
 * @public
 */
export interface DescribeCapacityProvidersRequest {
  /**
   * <p>The short name or full Amazon Resource Name (ARN) of one or more capacity providers. Up to
   * 				<code>100</code> capacity providers can be described in an action.</p>
   * @public
   */
  capacityProviders?: string[] | undefined;

  /**
   * <p>Specifies whether or not you want to see the resource tags for the capacity provider.
   * 			If <code>TAGS</code> is specified, the tags are included in the response. If this field
   * 			is omitted, tags aren't included in the response.</p>
   * @public
   */
  include?: CapacityProviderField[] | undefined;

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
   * @public
   */
  maxResults?: number | undefined;

  /**
   * <p>The <code>nextToken</code> value returned from a previous paginated
   * 				<code>DescribeCapacityProviders</code> request where <code>maxResults</code> was
   * 			used and the results exceeded the value of that parameter. Pagination continues from the
   * 			end of the previous results that returned the <code>nextToken</code> value.</p>
   *          <note>
   *             <p>This token should be treated as an opaque identifier that is only used to
   *                 retrieve the next items in a list and not for other programmatic purposes.</p>
   *          </note>
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * @public
 */
export interface DescribeCapacityProvidersResponse {
  /**
   * <p>The list of capacity providers.</p>
   * @public
   */
  capacityProviders?: CapacityProvider[] | undefined;

  /**
   * <p>Any failures associated with the call.</p>
   * @public
   */
  failures?: Failure[] | undefined;

  /**
   * <p>The <code>nextToken</code> value to include in a future
   * 				<code>DescribeCapacityProviders</code> request. When the results of a
   * 				<code>DescribeCapacityProviders</code> request exceed <code>maxResults</code>, this
   * 			value can be used to retrieve the next page of results. This value is <code>null</code>
   * 			when there are no more results to return.</p>
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * @public
 * @enum
 */
export const ClusterField = {
  ATTACHMENTS: "ATTACHMENTS",
  CONFIGURATIONS: "CONFIGURATIONS",
  SETTINGS: "SETTINGS",
  STATISTICS: "STATISTICS",
  TAGS: "TAGS",
} as const;

/**
 * @public
 */
export type ClusterField = (typeof ClusterField)[keyof typeof ClusterField];

/**
 * @public
 */
export interface DescribeClustersRequest {
  /**
   * <p>A list of up to 100 cluster names or full cluster Amazon Resource Name (ARN) entries.
   * 			If you do not specify a cluster, the default cluster is assumed.</p>
   * @public
   */
  clusters?: string[] | undefined;

  /**
   * <p>Determines whether to include additional information about the clusters in the
   * 			response. If this field is omitted, this information isn't included.</p>
   *          <p>If <code>ATTACHMENTS</code> is specified, the attachments for the container instances
   * 			or tasks within the cluster are included, for example the capacity providers.</p>
   *          <p>If <code>SETTINGS</code> is specified, the settings for the cluster are
   * 			included.</p>
   *          <p>If <code>CONFIGURATIONS</code> is specified, the configuration for the cluster is
   * 			included.</p>
   *          <p>If <code>STATISTICS</code> is specified, the task and service count is included,
   * 			separated by launch type.</p>
   *          <p>If <code>TAGS</code> is specified, the metadata tags associated with the cluster are
   * 			included.</p>
   * @public
   */
  include?: ClusterField[] | undefined;
}

/**
 * @public
 */
export interface DescribeClustersResponse {
  /**
   * <p>The list of clusters.</p>
   * @public
   */
  clusters?: Cluster[] | undefined;

  /**
   * <p>Any failures associated with the call.</p>
   * @public
   */
  failures?: Failure[] | undefined;
}

/**
 * @public
 * @enum
 */
export const ContainerInstanceField = {
  CONTAINER_INSTANCE_HEALTH: "CONTAINER_INSTANCE_HEALTH",
  TAGS: "TAGS",
} as const;

/**
 * @public
 */
export type ContainerInstanceField = (typeof ContainerInstanceField)[keyof typeof ContainerInstanceField];

/**
 * @public
 */
export interface DescribeContainerInstancesRequest {
  /**
   * <p>The short name or full Amazon Resource Name (ARN) of the cluster that hosts the container instances to
   * 			describe. If you do not specify a cluster, the default cluster is assumed. This parameter is required if the container instance
   * 			or container instances you are describing were launched in any cluster other than the
   * 			default cluster.</p>
   * @public
   */
  cluster?: string | undefined;

  /**
   * <p>A list of up to 100 container instance IDs or full Amazon Resource Name (ARN) entries.</p>
   * @public
   */
  containerInstances: string[] | undefined;

  /**
   * <p>Specifies whether you want to see the resource tags for the container instance. If
   * 				<code>TAGS</code> is specified, the tags are included in the response. If
   * 				<code>CONTAINER_INSTANCE_HEALTH</code> is specified, the container instance health
   * 			is included in the response. If this field is omitted, tags and container instance
   * 			health status aren't included in the response.</p>
   * @public
   */
  include?: ContainerInstanceField[] | undefined;
}

/**
 * @public
 */
export interface DescribeContainerInstancesResponse {
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
export interface DescribeServiceDeploymentsRequest {
  /**
   * <p>The ARN of the service deployment.</p>
   *          <p>You can specify a maximum of 20 ARNs.</p>
   * @public
   */
  serviceDeploymentArns: string[] | undefined;
}

/**
 * @public
 * @enum
 */
export const ServiceDeploymentRollbackMonitorsStatus = {
  DISABLED: "DISABLED",
  MONITORING: "MONITORING",
  MONITORING_COMPLETE: "MONITORING_COMPLETE",
  TRIGGERED: "TRIGGERED",
} as const;

/**
 * @public
 */
export type ServiceDeploymentRollbackMonitorsStatus =
  (typeof ServiceDeploymentRollbackMonitorsStatus)[keyof typeof ServiceDeploymentRollbackMonitorsStatus];

/**
 * <p>The CloudWatch alarms used to determine a service deployment failed. </p>
 *          <p>Amazon ECS considers the service deployment as failed when any of the alarms move to
 * 			the <code>ALARM</code> state. For more information, see <a href="https://docs.aws.amazon.com/AmazonECS/latest/developerguide/deployment-alarm-failure.html">How CloudWatch
 * 				alarms detect Amazon ECS deployment failures</a> in the Amazon ECS Developer
 * 			Guide.</p>
 * @public
 */
export interface ServiceDeploymentAlarms {
  /**
   * <p>The status of the alarms check. Amazon ECS is not using alarms for service deployment
   * 			failures when the status is <code>DISABLED</code>.</p>
   * @public
   */
  status?: ServiceDeploymentRollbackMonitorsStatus | undefined;

  /**
   * <p>The name of the CloudWatch alarms that determine when a service deployment failed. A
   * 			"," separates the alarms.</p>
   * @public
   */
  alarmNames?: string[] | undefined;

  /**
   * <p>One or more CloudWatch alarm names that have been triggered during the service
   * 			deployment. A "," separates the alarm names.</p>
   * @public
   */
  triggeredAlarmNames?: string[] | undefined;
}

/**
 * <p>Information about the circuit breaker used to determine when a service deployment has
 * 			failed.</p>
 *          <p>The deployment circuit breaker is the rolling update mechanism that determines if the
 * 			tasks reach a steady state. The deployment circuit breaker has an option that will
 * 			automatically roll back a failed deployment to the last cpompleted service revision. For
 * 			more information, see <a href="https://docs.aws.amazon.com/AmazonECS/latest/developerguide/deployment-circuit-breaker.html">How the Amazon
 * 				ECS deployment circuit breaker detects failures</a> in the<i> Amazon ECS
 * 				Developer Guide</i>.</p>
 * @public
 */
export interface ServiceDeploymentCircuitBreaker {
  /**
   * <p>The circuit breaker status. Amazon ECS is not using the circuit breaker for service
   * 			deployment failures when the status is <code>DISABLED</code>.</p>
   * @public
   */
  status?: ServiceDeploymentRollbackMonitorsStatus | undefined;

  /**
   * <p>The number of times the circuit breaker detected a service deploymeny failure.</p>
   * @public
   */
  failureCount?: number | undefined;

  /**
   * <p>The threshhold which determines that the service deployment failed.</p>
   *          <p>The deployment circuit breaker calculates the threshold value, and then uses the value
   * 			to determine when to move the deployment to a FAILED state. The deployment circuit
   * 			breaker has a minimum threshold of 3 and a maximum threshold of 200. and uses the values
   * 			in the following formula to determine the deployment failure.</p>
   *          <p>
   *             <code>0.5 * desired task count</code>
   *          </p>
   * @public
   */
  threshold?: number | undefined;
}

/**
 * @public
 * @enum
 */
export const ServiceDeploymentLifecycleStage = {
  BAKE_TIME: "BAKE_TIME",
  CLEAN_UP: "CLEAN_UP",
  POST_PRODUCTION_TRAFFIC_SHIFT: "POST_PRODUCTION_TRAFFIC_SHIFT",
  POST_SCALE_UP: "POST_SCALE_UP",
  POST_TEST_TRAFFIC_SHIFT: "POST_TEST_TRAFFIC_SHIFT",
  PRE_SCALE_UP: "PRE_SCALE_UP",
  PRODUCTION_TRAFFIC_SHIFT: "PRODUCTION_TRAFFIC_SHIFT",
  RECONCILE_SERVICE: "RECONCILE_SERVICE",
  SCALE_UP: "SCALE_UP",
  TEST_TRAFFIC_SHIFT: "TEST_TRAFFIC_SHIFT",
} as const;

/**
 * @public
 */
export type ServiceDeploymentLifecycleStage =
  (typeof ServiceDeploymentLifecycleStage)[keyof typeof ServiceDeploymentLifecycleStage];

/**
 * <p>Information about the service deployment rollback.</p>
 * @public
 */
export interface Rollback {
  /**
   * <p>The reason the rollback happened. For example, the circuit breaker initiated the
   * 			rollback operation.</p>
   * @public
   */
  reason?: string | undefined;

  /**
   * <p>Time time that the rollback started. The format is yyyy-MM-dd HH:mm:ss.SSSSSS.</p>
   * @public
   */
  startedAt?: Date | undefined;

  /**
   * <p>The ARN of the service revision deployed as part of the rollback.</p>
   * @public
   */
  serviceRevisionArn?: string | undefined;
}

/**
 * <p>The information about the number of requested, pending, and running tasks for a
 * 			service revision.</p>
 * @public
 */
export interface ServiceRevisionSummary {
  /**
   * <p>The ARN of the service revision.</p>
   * @public
   */
  arn?: string | undefined;

  /**
   * <p>The number of requested tasks for the service revision.</p>
   * @public
   */
  requestedTaskCount?: number | undefined;

  /**
   * <p>The number of running tasks for the service revision.</p>
   * @public
   */
  runningTaskCount?: number | undefined;

  /**
   * <p>The number of pending tasks for the service revision.</p>
   * @public
   */
  pendingTaskCount?: number | undefined;
}

/**
 * @public
 * @enum
 */
export const ServiceDeploymentStatus = {
  IN_PROGRESS: "IN_PROGRESS",
  PENDING: "PENDING",
  ROLLBACK_FAILED: "ROLLBACK_FAILED",
  ROLLBACK_IN_PROGRESS: "ROLLBACK_IN_PROGRESS",
  ROLLBACK_REQUESTED: "ROLLBACK_REQUESTED",
  ROLLBACK_SUCCESSFUL: "ROLLBACK_SUCCESSFUL",
  STOPPED: "STOPPED",
  STOP_REQUESTED: "STOP_REQUESTED",
  SUCCESSFUL: "SUCCESSFUL",
} as const;

/**
 * @public
 */
export type ServiceDeploymentStatus = (typeof ServiceDeploymentStatus)[keyof typeof ServiceDeploymentStatus];

/**
 * <p>Information about the service deployment.</p>
 *          <p>Service deployments provide a comprehensive view of your deployments. For information
 * 			about service deployments, see <a href="https://docs.aws.amazon.com/AmazonECS/latest/developerguide/service-deployment.html">View service history using Amazon ECS service deployments</a> in the
 * 			<i>
 *                <i>Amazon Elastic Container Service Developer Guide</i>
 *             </i>.</p>
 * @public
 */
export interface ServiceDeployment {
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
   * <p>The time the service deployment was created. The format is yyyy-MM-dd
   * 			HH:mm:ss.SSSSSS.</p>
   * @public
   */
  createdAt?: Date | undefined;

  /**
   * <p>The time the service deployment statred. The format is yyyy-MM-dd
   * 			HH:mm:ss.SSSSSS.</p>
   * @public
   */
  startedAt?: Date | undefined;

  /**
   * <p>The time the service deployment finished. The format is yyyy-MM-dd
   * 			HH:mm:ss.SSSSSS.</p>
   * @public
   */
  finishedAt?: Date | undefined;

  /**
   * <p>The time the service deployment stopped. The format is yyyy-MM-dd
   * 			HH:mm:ss.SSSSSS.</p>
   *          <p>The service deployment stops when any of the following actions happen:</p>
   *          <ul>
   *             <li>
   *                <p>A user manually stops the deployment</p>
   *             </li>
   *             <li>
   *                <p>The rollback option is not in use for the failure detection mechanism (the
   * 					circuit breaker or alarm-based) and the service fails.</p>
   *             </li>
   *          </ul>
   * @public
   */
  stoppedAt?: Date | undefined;

  /**
   * <p>The time that the service deployment was last updated. The format is yyyy-MM-dd
   * 			HH:mm:ss.SSSSSS.</p>
   * @public
   */
  updatedAt?: Date | undefined;

  /**
   * <p>The currently deployed workload configuration.</p>
   * @public
   */
  sourceServiceRevisions?: ServiceRevisionSummary[] | undefined;

  /**
   * <p>The workload configuration being deployed.</p>
   * @public
   */
  targetServiceRevision?: ServiceRevisionSummary | undefined;

  /**
   * <p>The service deployment state.</p>
   * @public
   */
  status?: ServiceDeploymentStatus | undefined;

  /**
   * <p>Information about why the service deployment is in the current status. For example,
   * 			the circuit breaker detected a failure.</p>
   * @public
   */
  statusReason?: string | undefined;

  /**
   * <p>The current lifecycle stage of the deployment. Possible values include:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>SCALE_UP_IN_PROGRESS</code> - Creating the new (green) tasks</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>TEST_TRAFFIC_SHIFT_IN_PROGRESS</code> - Shifting test traffic to the new (green) tasks</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>PRODUCTION_TRAFFIC_SHIFT_IN_PROGRESS</code> - Shifting production traffic to the new (green) tasks</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>BAKE_TIME_IN_PROGRESS</code> - The duration when both blue and green service revisions are running simultaneously after the production traffic has shifted</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>CLEAN_UP_IN_PROGRESS</code> - Stopping the old (blue) tasks</p>
   *             </li>
   *          </ul>
   * @public
   */
  lifecycleStage?: ServiceDeploymentLifecycleStage | undefined;

  /**
   * <p>Optional deployment parameters that control how many tasks run during a deployment and
   * 			the ordering of stopping and starting tasks.</p>
   * @public
   */
  deploymentConfiguration?: DeploymentConfiguration | undefined;

  /**
   * <p>The rollback options the service deployment uses when the deployment fails.</p>
   * @public
   */
  rollback?: Rollback | undefined;

  /**
   * <p>The circuit breaker configuration that determines a service deployment failed.</p>
   * @public
   */
  deploymentCircuitBreaker?: ServiceDeploymentCircuitBreaker | undefined;

  /**
   * <p>The CloudWatch alarms that determine when a service deployment fails.</p>
   * @public
   */
  alarms?: ServiceDeploymentAlarms | undefined;
}

/**
 * @public
 */
export interface DescribeServiceDeploymentsResponse {
  /**
   * <p>The list of service deployments described.</p>
   * @public
   */
  serviceDeployments?: ServiceDeployment[] | undefined;

  /**
   * <p>Any failures associated with the call.</p>
   *          <p>If you decsribe a deployment with a service revision created before October 25, 2024,
   * 			the call fails. The failure includes the service revision ARN and the reason set to
   * 				<code>MISSING</code>.</p>
   * @public
   */
  failures?: Failure[] | undefined;
}

/**
 * @public
 */
export interface DescribeServiceRevisionsRequest {
  /**
   * <p>The ARN of the service revision. </p>
   *          <p>You can specify a maximum of 20 ARNs.</p>
   *          <p>You can call <a href="https://docs.aws.amazon.com/AmazonECS/latest/APIReference/API_ListServiceDeployments.html">ListServiceDeployments</a> to get the ARNs.</p>
   * @public
   */
  serviceRevisionArns: string[] | undefined;
}

/**
 * <p>The details about the container image a service revision uses. </p>
 *          <p>To ensure that all tasks in a service use the same container image, Amazon ECS
 * 			resolves container image names and any image tags specified in the task definition to
 * 			container image digests. </p>
 *          <p>After the container image digest has been established, Amazon ECS uses the digest to
 * 			start any other desired tasks, and for any future service and service revision updates.
 * 			This leads to all tasks in a service always running identical container images,
 * 			resulting in version consistency for your software. For more information, see <a href="https://docs.aws.amazon.com/AmazonECS/latest/developerguide/deployment-type-ecs.html#deployment-container-image-stability">Container image resolution</a> in the Amazon ECS Developer Guide.</p>
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
 * <p>Information about the service revision.</p>
 *          <p>A service revision contains a record of the workload configuration Amazon ECS is attempting
 * 			to deploy. Whenever you create or deploy a service, Amazon ECS automatically creates and
 * 			captures the configuration that you're trying to deploy in the service revision. For
 * 			information about service revisions, see <a href="https://docs.aws.amazon.com/AmazonECS/latest/developerguide/service-revision.html">Amazon ECS service
 * 				revisions</a> in the <i>
 *                <i>Amazon Elastic Container Service Developer Guide</i>
 *             </i>.</p>
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
   * <p>The Service Connect configuration of your Amazon ECS service. The configuration for this
   * 			service to discover and connect to services, and be discovered by, and connected from,
   * 			other services within a namespace.</p>
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
   * <p>The time that the service revision was created. The format is yyyy-mm-dd
   * 			HH:mm:ss.SSSSS.</p>
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
 * @enum
 */
export const ServiceField = {
  TAGS: "TAGS",
} as const;

/**
 * @public
 */
export type ServiceField = (typeof ServiceField)[keyof typeof ServiceField];

/**
 * @public
 */
export interface DescribeServicesRequest {
  /**
   * <p>The short name or full Amazon Resource Name (ARN)the cluster that hosts the service to describe.
   * 			If you do not specify a cluster, the default cluster is assumed. This parameter is required if the service or services you are
   * 			describing were launched in any cluster other than the default cluster.</p>
   * @public
   */
  cluster?: string | undefined;

  /**
   * <p>A list of services to describe. You may specify up to 10 services to describe in a
   * 			single operation.</p>
   * @public
   */
  services: string[] | undefined;

  /**
   * <p>Determines whether you want to see the resource tags for the service. If
   * 				<code>TAGS</code> is specified, the tags are included in the response. If this field
   * 			is omitted, tags aren't included in the response.</p>
   * @public
   */
  include?: ServiceField[] | undefined;
}

/**
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
 * @enum
 */
export const TaskDefinitionField = {
  TAGS: "TAGS",
} as const;

/**
 * @public
 */
export type TaskDefinitionField = (typeof TaskDefinitionField)[keyof typeof TaskDefinitionField];

/**
 * @public
 */
export interface DescribeTaskDefinitionRequest {
  /**
   * <p>The <code>family</code> for the latest <code>ACTIVE</code> revision,
   * 				<code>family</code> and <code>revision</code> (<code>family:revision</code>) for a
   * 			specific revision in the family, or full Amazon Resource Name (ARN) of the task definition to
   * 			describe.</p>
   * @public
   */
  taskDefinition: string | undefined;

  /**
   * <p>Determines whether to see the resource tags for the task definition. If
   * 				<code>TAGS</code> is specified, the tags are included in the response. If this field
   * 			is omitted, tags aren't included in the response.</p>
   * @public
   */
  include?: TaskDefinitionField[] | undefined;
}

/**
 * @public
 */
export interface DescribeTaskDefinitionResponse {
  /**
   * <p>The full task definition description.</p>
   * @public
   */
  taskDefinition?: TaskDefinition | undefined;

  /**
   * <p>The metadata that's applied to the task definition to help you categorize and organize
   * 			them. Each tag consists of a key and an optional value. You define both.</p>
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
 * @enum
 */
export const TaskField = {
  TAGS: "TAGS",
} as const;

/**
 * @public
 */
export type TaskField = (typeof TaskField)[keyof typeof TaskField];

/**
 * @public
 */
export interface DescribeTasksRequest {
  /**
   * <p>The short name or full Amazon Resource Name (ARN) of the cluster that hosts the task or tasks to
   * 			describe. If you do not specify a cluster, the default cluster is assumed. If you do not specify a
   * 			value, the <code>default</code> cluster is used.</p>
   * @public
   */
  cluster?: string | undefined;

  /**
   * <p>A list of up to 100 task IDs or full ARN entries.</p>
   * @public
   */
  tasks: string[] | undefined;

  /**
   * <p>Specifies whether you want to see the resource tags for the task. If <code>TAGS</code>
   * 			is specified, the tags are included in the response. If this field is omitted, tags
   * 			aren't included in the response.</p>
   * @public
   */
  include?: TaskField[] | undefined;
}

/**
 * @public
 * @enum
 */
export const Connectivity = {
  CONNECTED: "CONNECTED",
  DISCONNECTED: "DISCONNECTED",
} as const;

/**
 * @public
 */
export type Connectivity = (typeof Connectivity)[keyof typeof Connectivity];

/**
 * @public
 * @enum
 */
export const HealthStatus = {
  HEALTHY: "HEALTHY",
  UNHEALTHY: "UNHEALTHY",
  UNKNOWN: "UNKNOWN",
} as const;

/**
 * @public
 */
export type HealthStatus = (typeof HealthStatus)[keyof typeof HealthStatus];

/**
 * @public
 * @enum
 */
export const ManagedAgentName = {
  ExecuteCommandAgent: "ExecuteCommandAgent",
} as const;

/**
 * @public
 */
export type ManagedAgentName = (typeof ManagedAgentName)[keyof typeof ManagedAgentName];

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
   * <p>The name of the managed agent. When the execute command feature is turned on, the
   * 			managed agent name is <code>ExecuteCommandAgent</code>.</p>
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
 * <p>Details on the network bindings between a container and its host container instance.
 * 			After a task reaches the <code>RUNNING</code> status, manual and automatic host and
 * 			container port assignments are visible in the <code>networkBindings</code> section of
 * 				<a href="https://docs.aws.amazon.com/AmazonECS/latest/APIReference/API_DescribeTasks.html">DescribeTasks</a> API
 * 			responses.</p>
 * @public
 */
export interface NetworkBinding {
  /**
   * <p>The IP address that the container is bound to on the container instance.</p>
   * @public
   */
  bindIP?: string | undefined;

  /**
   * <p>The port number on the container that's used with the network binding.</p>
   * @public
   */
  containerPort?: number | undefined;

  /**
   * <p>The port number on the host that's used with the network binding.</p>
   * @public
   */
  hostPort?: number | undefined;

  /**
   * <p>The protocol used for the network binding.</p>
   * @public
   */
  protocol?: TransportProtocol | undefined;

  /**
   * <p>The port number range on the container that's bound to the dynamically mapped host
   * 			port range.</p>
   *          <p>The following rules apply when you specify a <code>containerPortRange</code>:</p>
   *          <ul>
   *             <li>
   *                <p>You must use either the <code>bridge</code> network mode or the <code>awsvpc</code>
   * 					network mode.</p>
   *             </li>
   *             <li>
   *                <p>This parameter is available for both the EC2 and Fargate launch types.</p>
   *             </li>
   *             <li>
   *                <p>This parameter is available for both the Linux and Windows operating systems.</p>
   *             </li>
   *             <li>
   *                <p>The container instance must have at least version 1.67.0 of the container agent
   * 					and at least version 1.67.0-1 of the <code>ecs-init</code> package </p>
   *             </li>
   *             <li>
   *                <p>You can specify a maximum of 100 port ranges per container.</p>
   *             </li>
   *             <li>
   *                <p>You do not specify a <code>hostPortRange</code>. The value of the <code>hostPortRange</code> is set
   * 					as follows:</p>
   *                <ul>
   *                   <li>
   *                      <p>For containers in a task with the <code>awsvpc</code> network mode,
   * 							the <code>hostPortRange</code> is set to the same value as the
   * 								<code>containerPortRange</code>. This is a static mapping
   * 							strategy.</p>
   *                   </li>
   *                   <li>
   *                      <p>For containers in a task with the <code>bridge</code> network mode, the Amazon ECS agent finds open host ports from the default ephemeral range and passes it to docker to bind them to the container ports.</p>
   *                   </li>
   *                </ul>
   *             </li>
   *             <li>
   *                <p>The <code>containerPortRange</code> valid values are between 1 and
   * 					65535.</p>
   *             </li>
   *             <li>
   *                <p>A port can only be included in one port mapping per container.</p>
   *             </li>
   *             <li>
   *                <p>You cannot specify overlapping port ranges.</p>
   *             </li>
   *             <li>
   *                <p>The first port in the range must be less than last port in the range.</p>
   *             </li>
   *             <li>
   *                <p>Docker recommends that you turn off the docker-proxy in the Docker daemon config file when you have a large number of ports.</p>
   *                <p>For more information, see <a href="https://github.com/moby/moby/issues/11185"> Issue #11185</a> on the Github website.</p>
   *                <p>For information about how to  turn off the docker-proxy in the Docker daemon config file, see <a href="https://docs.aws.amazon.com/AmazonECS/latest/developerguide/bootstrap_container_instance.html#bootstrap_docker_daemon">Docker daemon</a> in the <i>Amazon ECS Developer Guide</i>.</p>
   *             </li>
   *          </ul>
   *          <p>You can call <a href="https://docs.aws.amazon.com/AmazonECS/latest/APIReference/API_DescribeTasks.html">
   *                <code>DescribeTasks</code>
   *             </a> to view the <code>hostPortRange</code> which
   * 			are the host ports that are bound to the container ports.</p>
   * @public
   */
  containerPortRange?: string | undefined;

  /**
   * <p>The port number range on the host that's used with the network binding. This is
   * 			assigned is assigned by Docker and delivered by the Amazon ECS agent.</p>
   * @public
   */
  hostPortRange?: string | undefined;
}

/**
 * <p>An object representing the elastic network interface for tasks that use the
 * 				<code>awsvpc</code> network mode.</p>
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
   * <p>A short (1024 max characters) human-readable string to provide additional details about a
   * 			running or stopped container.</p>
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
   * <p>The health status of the container. If health checks aren't configured for this
   * 			container in its task definition, then it reports the health status as
   * 				<code>UNKNOWN</code>.</p>
   * @public
   */
  healthStatus?: HealthStatus | undefined;

  /**
   * <p>The details of any Amazon ECS managed agents associated with the container.</p>
   * @public
   */
  managedAgents?: ManagedAgent[] | undefined;

  /**
   * <p>The number of CPU units set for the container. The value is <code>0</code> if no value
   * 			was specified in the container definition when the task definition was
   * 			registered.</p>
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
}

/**
 * <p>The amount of ephemeral storage to allocate for the task.</p>
 * @public
 */
export interface TaskEphemeralStorage {
  /**
   * <p>The total amount, in GiB, of the ephemeral storage to set for the task. The minimum
   * 			supported value is <code>20</code> GiB and the maximum supported value is
   * 				<code>200</code> GiB.</p>
   * @public
   */
  sizeInGiB?: number | undefined;

  /**
   * <p>Specify an Key Management Service key ID to encrypt the ephemeral storage for the
   * 			task.</p>
   * @public
   */
  kmsKeyId?: string | undefined;
}

/**
 * <p>The overrides that are sent to a container. An empty container override can be passed
 * 			in. An example of an empty container override is <code>\{"containerOverrides": [ ]
 * 				\}</code>. If a non-empty container override is specified, the <code>name</code>
 * 			parameter must be included.</p>
 *          <p>You can use Secrets Manager or Amazon Web Services Systems Manager Parameter Store to store the
 * 			sensitive data. For more information, see <a href="https://docs.aws.amazon.com/AmazonECS/latest/developerguide/secrets-envvar.html">Retrieve secrets through
 * 				environment variables</a> in the Amazon ECS Developer Guide.</p>
 * @public
 */
export interface ContainerOverride {
  /**
   * <p>The name of the container that receives the override. This parameter is required if
   * 			any override is specified.</p>
   * @public
   */
  name?: string | undefined;

  /**
   * <p>The command to send to the container that overrides the default command from the
   * 			Docker image or the task definition. You must also specify a container name.</p>
   * @public
   */
  command?: string[] | undefined;

  /**
   * <p>The environment variables to send to the container. You can add new environment
   * 			variables, which are added to the container at launch, or you can override the existing
   * 			environment variables from the Docker image or the task definition. You must also
   * 			specify a container name.</p>
   * @public
   */
  environment?: KeyValuePair[] | undefined;

  /**
   * <p>A list of files containing the environment variables to pass to a container, instead
   * 			of the value from the container definition.</p>
   * @public
   */
  environmentFiles?: EnvironmentFile[] | undefined;

  /**
   * <p>The number of <code>cpu</code> units reserved for the container, instead of the
   * 			default value from the task definition. You must also specify a container name.</p>
   * @public
   */
  cpu?: number | undefined;

  /**
   * <p>The hard limit (in MiB) of memory to present to the container, instead of the default
   * 			value from the task definition. If your container attempts to exceed the memory
   * 			specified here, the container is killed. You must also specify a container name.</p>
   * @public
   */
  memory?: number | undefined;

  /**
   * <p>The soft limit (in MiB) of memory to reserve for the container, instead of the default
   * 			value from the task definition. You must also specify a container name.</p>
   * @public
   */
  memoryReservation?: number | undefined;

  /**
   * <p>The type and amount of a resource to assign to a container, instead of the default
   * 			value from the task definition. The only supported resource is a GPU.</p>
   * @public
   */
  resourceRequirements?: ResourceRequirement[] | undefined;
}

/**
 * <p>Details on an Elastic Inference accelerator task override. This parameter is used to
 * 			override the Elastic Inference accelerator specified in the task definition. For more
 * 			information, see <a href="https://docs.aws.amazon.com/AmazonECS/latest/developerguide/ecs-inference.html">Working with Amazon
 * 				Elastic Inference on Amazon ECS</a> in the <i>Amazon Elastic Container Service Developer Guide</i>.</p>
 * @public
 */
export interface InferenceAcceleratorOverride {
  /**
   * <p>The Elastic Inference accelerator device name to override for the task. This parameter
   * 			must match a <code>deviceName</code> specified in the task definition.</p>
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
   * @public
   */
  inferenceAcceleratorOverrides?: InferenceAcceleratorOverride[] | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the task execution role override for the task. For more information,
   * 			see <a href="https://docs.aws.amazon.com/AmazonECS/latest/developerguide/task_execution_IAM_role.html">Amazon ECS task
   * 				execution IAM role</a> in the <i>Amazon Elastic Container Service Developer Guide</i>.</p>
   * @public
   */
  executionRoleArn?: string | undefined;

  /**
   * <p>The memory override for the task.</p>
   * @public
   */
  memory?: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the role that containers in this task can assume. All containers in
   * 			this task are granted the permissions that are specified in this role. For more
   * 			information, see <a href="https://docs.aws.amazon.com/AmazonECS/latest/developerguide/task-iam-roles.html">IAM Role for Tasks</a>
   * 			in the <i>Amazon Elastic Container Service Developer Guide</i>.</p>
   * @public
   */
  taskRoleArn?: string | undefined;

  /**
   * <p>The ephemeral storage setting override for the task.</p>
   *          <note>
   *             <p>This parameter is only supported for tasks hosted on Fargate that
   * 				use the following platform versions:</p>
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
}

/**
 * @public
 * @enum
 */
export const TaskStopCode = {
  ESSENTIAL_CONTAINER_EXITED: "EssentialContainerExited",
  SERVICE_SCHEDULER_INITIATED: "ServiceSchedulerInitiated",
  SPOT_INTERRUPTION: "SpotInterruption",
  TASK_FAILED_TO_START: "TaskFailedToStart",
  TERMINATION_NOTICE: "TerminationNotice",
  USER_INITIATED: "UserInitiated",
} as const;

/**
 * @public
 */
export type TaskStopCode = (typeof TaskStopCode)[keyof typeof TaskStopCode];

/**
 * <p>Details on a task in a cluster.</p>
 * @public
 */
export interface Task {
  /**
   * <p>The Elastic Network Adapter that's associated with the task if the task uses the
   * 				<code>awsvpc</code> network mode.</p>
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
   * <p>The Unix timestamp for the time when the task last went into <code>CONNECTED</code>
   * 			status.</p>
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
   * <p>The number of CPU units used by the task as expressed in a task definition. It can be
   * 			expressed as an integer using CPU units (for example, <code>1024</code>). It can also be
   * 			expressed as a string using vCPUs (for example, <code>1 vCPU</code> or <code>1
   * 				vcpu</code>). String values are converted to an integer that indicates the CPU units
   * 			when the task definition is registered.</p>
   *          <p>If you're using the EC2 launch type or the external launch type, this field is
   * 			optional. Supported values are between <code>128</code> CPU units (<code>0.125</code>
   * 			vCPUs) and <code>196608</code> CPU units (<code>192</code> vCPUs). If you do not specify
   * 			a value, the parameter is ignored.</p>
   *          <p>This field is required for Fargate. For information about the valid values, see <a href="https://docs.aws.amazon.com/AmazonECS/latest/developerguide/task_definition_parameters.html#task_size">Task size</a> in the <i>Amazon Elastic Container Service Developer Guide</i>.</p>
   * @public
   */
  cpu?: string | undefined;

  /**
   * <p>The Unix timestamp for the time when the task was created. More specifically, it's for
   * 			the time when the task entered the <code>PENDING</code> state.</p>
   * @public
   */
  createdAt?: Date | undefined;

  /**
   * <p>The desired status of the task. For more information, see <a href="https://docs.aws.amazon.com/AmazonECS/latest/developerguide/task-lifecycle.html">Task
   * 			Lifecycle</a>.</p>
   * @public
   */
  desiredStatus?: string | undefined;

  /**
   * <p>Determines whether execute command functionality is turned on for this task. If
   * 				<code>true</code>, execute command functionality is turned on all the containers in
   * 			the task.</p>
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
   * <p>The health status for the task. It's determined by the health of the essential
   * 			containers in the task. If all essential containers in the task are reporting as
   * 				<code>HEALTHY</code>, the task status also reports as <code>HEALTHY</code>. If any
   * 			essential containers in the task are reporting as <code>UNHEALTHY</code> or
   * 				<code>UNKNOWN</code>, the task status also reports as <code>UNHEALTHY</code> or
   * 				<code>UNKNOWN</code>.</p>
   *          <note>
   *             <p>The Amazon ECS container agent doesn't monitor or report on Docker health checks that
   * 				are embedded in a container image and not specified in the container definition. For
   * 				example, this includes those specified in a parent image or from the image's
   * 				Dockerfile. Health check parameters that are specified in a container definition
   * 				override any Docker health checks that are found in the container image.</p>
   *          </note>
   * @public
   */
  healthStatus?: HealthStatus | undefined;

  /**
   * <p>The Elastic Inference accelerator that's associated with the task.</p>
   * @public
   */
  inferenceAccelerators?: InferenceAccelerator[] | undefined;

  /**
   * <p>The last known status for the task. For more information, see <a href="https://docs.aws.amazon.com/AmazonECS/latest/developerguide/task-lifecycle.html">Task
   * 				Lifecycle</a>.</p>
   * @public
   */
  lastStatus?: string | undefined;

  /**
   * <p>The infrastructure where your task runs on. For more information, see <a href="https://docs.aws.amazon.com/AmazonECS/latest/developerguide/launch_types.html">Amazon ECS
   * 				launch types</a> in the <i>Amazon Elastic Container Service Developer Guide</i>.</p>
   * @public
   */
  launchType?: LaunchType | undefined;

  /**
   * <p>The amount of memory (in MiB) that the task uses as expressed in a task definition. It
   * 			can be expressed as an integer using MiB (for example, <code>1024</code>). If it's
   * 			expressed as a string using GB (for example, <code>1GB</code> or <code>1 GB</code>),
   * 			it's converted to an integer indicating the MiB when the task definition is
   * 			registered.</p>
   *          <p>If you use the EC2 launch type, this field is optional.</p>
   *          <p>If you use the Fargate launch type, this field is required. You must use
   * 			one of the following values. The value that you choose determines the range of supported
   * 			values for the <code>cpu</code> parameter.</p>
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
   * <p>One or more container overrides.</p>
   * @public
   */
  overrides?: TaskOverride | undefined;

  /**
   * <p>The platform version where your task runs on. A platform version is only specified for
   * 			tasks that use the Fargate launch type. If you didn't specify one, the
   * 				<code>LATEST</code> platform version is used. For more information, see <a href="https://docs.aws.amazon.com/AmazonECS/latest/developerguide/platform_versions.html">Fargate Platform Versions</a> in the <i>Amazon Elastic Container Service Developer Guide</i>.</p>
   * @public
   */
  platformVersion?: string | undefined;

  /**
   * <p>The operating system that your tasks are running on. A platform family is specified
   * 			only for tasks that use the Fargate launch type. </p>
   *          <p> All tasks that run as part of this service must use the same
   * 				<code>platformFamily</code> value as the service (for example,
   * 			<code>LINUX.</code>).</p>
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
   * <p>The Unix timestamp for the time when the task started. More specifically, it's for the
   * 			time when the task transitioned from the <code>PENDING</code> state to the
   * 				<code>RUNNING</code> state.</p>
   * @public
   */
  startedAt?: Date | undefined;

  /**
   * <p>The tag specified when a task is started. If an Amazon ECS service started the task, the
   * 				<code>startedBy</code> parameter contains the deployment ID of that service.</p>
   * @public
   */
  startedBy?: string | undefined;

  /**
   * <p>The stop code indicating why a task was stopped. The <code>stoppedReason</code> might
   * 			contain additional details. </p>
   *          <p>For more information about stop code, see <a href="https://docs.aws.amazon.com/AmazonECS/latest/developerguide/stopped-task-error-codes.html">Stopped tasks
   * 				error codes</a> in the <i>Amazon ECS Developer Guide</i>.</p>
   * @public
   */
  stopCode?: TaskStopCode | undefined;

  /**
   * <p>The Unix timestamp for the time when the task was stopped. More specifically, it's for
   * 			the time when the task transitioned from the <code>RUNNING</code> state to the
   * 				<code>STOPPED</code> state.</p>
   * @public
   */
  stoppedAt?: Date | undefined;

  /**
   * <p>The reason that the task was stopped.</p>
   * @public
   */
  stoppedReason?: string | undefined;

  /**
   * <p>The Unix timestamp for the time when the task stops. More specifically, it's for the
   * 			time when the task transitions from the <code>RUNNING</code> state to
   * 				<code>STOPPING</code>.</p>
   * @public
   */
  stoppingAt?: Date | undefined;

  /**
   * <p>The metadata that you apply to the task to help you categorize and organize the task.
   * 			Each tag consists of a key and an optional value. You define both the key and
   * 			value.</p>
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
   * <p>The version counter for the task. Every time a task experiences a change that starts a
   * 			CloudWatch event, the version counter is incremented. If you replicate your Amazon ECS task state
   * 			with CloudWatch Events, you can compare the version of a task reported by the Amazon ECS API
   * 			actions with the version reported in CloudWatch Events for the task (inside the
   * 				<code>detail</code> object) to verify that the version in your event stream is
   * 			current.</p>
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
 * @enum
 */
export const TaskSetField = {
  TAGS: "TAGS",
} as const;

/**
 * @public
 */
export type TaskSetField = (typeof TaskSetField)[keyof typeof TaskSetField];

/**
 * @public
 */
export interface DescribeTaskSetsRequest {
  /**
   * <p>The short name or full Amazon Resource Name (ARN) of the cluster that hosts the service that the task
   * 			sets exist in.</p>
   * @public
   */
  cluster: string | undefined;

  /**
   * <p>The short name or full Amazon Resource Name (ARN) of the service that the task sets exist in.</p>
   * @public
   */
  service: string | undefined;

  /**
   * <p>The ID or full Amazon Resource Name (ARN) of task sets to
   * 			describe.</p>
   * @public
   */
  taskSets?: string[] | undefined;

  /**
   * <p>Specifies whether to see the resource tags for the task set. If <code>TAGS</code> is
   * 			specified, the tags are included in the response. If this field is omitted, tags aren't
   * 			included in the response.</p>
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
export interface DiscoverPollEndpointRequest {
  /**
   * <p>The container instance ID or full ARN of the container instance. For more
   * 			information about the ARN format, see <a href="https://docs.aws.amazon.com/AmazonECS/latest/developerguide/ecs-account-settings.html#ecs-resource-ids">Amazon Resource Name (ARN)</a> in the <i>Amazon ECS Developer Guide</i>.</p>
   * @public
   */
  containerInstance?: string | undefined;

  /**
   * <p>The short name or full Amazon Resource Name (ARN) of the cluster that the container instance belongs
   * 			to.</p>
   * @public
   */
  cluster?: string | undefined;
}

/**
 * @public
 */
export interface DiscoverPollEndpointResponse {
  /**
   * <p>The endpoint for the Amazon ECS agent to poll.</p>
   * @public
   */
  endpoint?: string | undefined;

  /**
   * <p>The telemetry endpoint for the Amazon ECS agent.</p>
   * @public
   */
  telemetryEndpoint?: string | undefined;

  /**
   * <p>The endpoint for the Amazon ECS agent to poll for Service Connect configuration.
   * 			For more information, see <a href="https://docs.aws.amazon.com/AmazonECS/latest/developerguide/service-connect.html">Service Connect</a> in the <i>Amazon Elastic Container Service Developer Guide</i>.</p>
   * @public
   */
  serviceConnectEndpoint?: string | undefined;
}

/**
 * @public
 */
export interface ExecuteCommandRequest {
  /**
   * <p>The Amazon Resource Name (ARN) or short name of the cluster the task is running in.
   * 			If you do not specify a cluster, the default cluster is assumed.</p>
   * @public
   */
  cluster?: string | undefined;

  /**
   * <p>The name of the container to execute the command on. A container name only needs to be
   * 			specified for tasks containing multiple containers.</p>
   * @public
   */
  container?: string | undefined;

  /**
   * <p>The command to run on the container.</p>
   * @public
   */
  command: string | undefined;

  /**
   * <p>Use this flag to run your command in interactive mode.</p>
   * @public
   */
  interactive: boolean | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) or ID of the task the container is part of.</p>
   * @public
   */
  task: string | undefined;
}

/**
 * <p>The details for the execute command session.</p>
 * @public
 */
export interface Session {
  /**
   * <p>The ID of the execute command session.</p>
   * @public
   */
  sessionId?: string | undefined;

  /**
   * <p>A URL to the managed agent on the container that the SSM Session Manager client uses
   * 			to send commands and receive output from the container.</p>
   * @public
   */
  streamUrl?: string | undefined;

  /**
   * <p>An encrypted token value containing session and caller information. It's used to
   * 			authenticate the connection to the container.</p>
   * @public
   */
  tokenValue?: string | undefined;
}

/**
 * @public
 */
export interface ExecuteCommandResponse {
  /**
   * <p>The Amazon Resource Name (ARN) of the cluster.</p>
   * @public
   */
  clusterArn?: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the container.</p>
   * @public
   */
  containerArn?: string | undefined;

  /**
   * <p>The name of the container.</p>
   * @public
   */
  containerName?: string | undefined;

  /**
   * <p>Determines whether the execute command session is running in interactive mode. Amazon ECS
   * 			only supports initiating interactive sessions, so you must specify <code>true</code> for
   * 			this value.</p>
   * @public
   */
  interactive?: boolean | undefined;

  /**
   * <p>The details of the SSM session that was created for this instance of
   * 			execute-command.</p>
   * @public
   */
  session?: Session | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the task.</p>
   * @public
   */
  taskArn?: string | undefined;
}

/**
 * <p>The execute command cannot run. This error can be caused by any of the following
 * 			configuration issues:</p>
 *          <ul>
 *             <li>
 *                <p>Incorrect IAM permissions</p>
 *             </li>
 *             <li>
 *                <p>The SSM agent is not installed or is not running</p>
 *             </li>
 *             <li>
 *                <p> There is an interface Amazon VPC endpoint for Amazon ECS, but there is not one for
 * 					Systems Manager Session Manager</p>
 *             </li>
 *          </ul>
 *          <p>For information about how to troubleshoot the issues, see <a href="https://docs.aws.amazon.com/AmazonECS/latest/developerguide/ecs-exec.html">Troubleshooting issues with ECS
 * 				Exec</a> in the <i>Amazon Elastic Container Service Developer Guide</i>.</p>
 * @public
 */
export class TargetNotConnectedException extends __BaseException {
  readonly name: "TargetNotConnectedException" = "TargetNotConnectedException";
  readonly $fault: "client" = "client";
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<TargetNotConnectedException, __BaseException>) {
    super({
      name: "TargetNotConnectedException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, TargetNotConnectedException.prototype);
  }
}

/**
 * @public
 */
export interface GetTaskProtectionRequest {
  /**
   * <p>The short name or full Amazon Resource Name (ARN) of the cluster that hosts the service that the task
   * 			sets exist in.</p>
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
 * <p>An object representing the protection status details for a task. You can set the
 * 			protection status with the <a href="https://docs.aws.amazon.com/AmazonECS/latest/APIReference/API_UpdateTaskProtection.html">UpdateTaskProtection</a> API and get the status of tasks with the <a href="https://docs.aws.amazon.com/AmazonECS/latest/APIReference/API_GetTaskProtection.html">GetTaskProtection</a> API.</p>
 * @public
 */
export interface ProtectedTask {
  /**
   * <p>The task ARN.</p>
   * @public
   */
  taskArn?: string | undefined;

  /**
   * <p>The protection status of the task. If scale-in protection is on for a task, the value
   * 			is <code>true</code>. Otherwise, it is <code>false</code>.</p>
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
 * <p>The specified resource wasn't found.</p>
 * @public
 */
export class ResourceNotFoundException extends __BaseException {
  readonly name: "ResourceNotFoundException" = "ResourceNotFoundException";
  readonly $fault: "client" = "client";
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<ResourceNotFoundException, __BaseException>) {
    super({
      name: "ResourceNotFoundException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, ResourceNotFoundException.prototype);
  }
}

/**
 * @public
 */
export interface ListAccountSettingsRequest {
  /**
   * <p>The name of the account setting you want to list the settings for.</p>
   * @public
   */
  name?: SettingName | undefined;

  /**
   * <p>The value of the account settings to filter results with. You must also specify an
   * 			account setting name to use this parameter.</p>
   * @public
   */
  value?: string | undefined;

  /**
   * <p>The ARN of the principal, which can be a user, role, or the root user. If this field is
   * 			omitted, the account settings are listed only for the authenticated user.</p>
   *          <p>In order to use this parameter, you must be the root user, or the principal.</p>
   *          <note>
   *             <p>Federated users assume the account setting of the root user and can't have explicit
   * 				account settings set for them.</p>
   *          </note>
   * @public
   */
  principalArn?: string | undefined;

  /**
   * <p>Determines whether to return the effective settings. If <code>true</code>, the account
   * 			settings for the root user or the default setting for the <code>principalArn</code> are
   * 			returned. If <code>false</code>, the account settings for the <code>principalArn</code>
   * 			are returned if they're set. Otherwise, no account settings are returned.</p>
   * @public
   */
  effectiveSettings?: boolean | undefined;

  /**
   * <p>The <code>nextToken</code> value returned from a <code>ListAccountSettings</code>
   * 			request indicating that more results are available to fulfill the request and further
   * 			calls will be needed. If <code>maxResults</code> was provided, it's possible the number
   * 			of results to be fewer than <code>maxResults</code>.</p>
   *          <note>
   *             <p>This token should be treated as an opaque identifier that is only used to
   *                 retrieve the next items in a list and not for other programmatic purposes.</p>
   *          </note>
   * @public
   */
  nextToken?: string | undefined;

  /**
   * <p>The maximum number of account setting results returned by
   * 				<code>ListAccountSettings</code> in paginated output. When this parameter is used,
   * 				<code>ListAccountSettings</code> only returns <code>maxResults</code> results in a
   * 			single page along with a <code>nextToken</code> response element. The remaining results
   * 			of the initial request can be seen by sending another <code>ListAccountSettings</code>
   * 			request with the returned <code>nextToken</code> value. This value can be between
   * 			1 and 10. If this
   * 			parameter isn't used, then <code>ListAccountSettings</code> returns up to
   * 			10 results and a <code>nextToken</code> value
   * 			if applicable.</p>
   * @public
   */
  maxResults?: number | undefined;
}

/**
 * @public
 */
export interface ListAccountSettingsResponse {
  /**
   * <p>The account settings for the resource.</p>
   * @public
   */
  settings?: Setting[] | undefined;

  /**
   * <p>The <code>nextToken</code> value to include in a future
   * 				<code>ListAccountSettings</code> request. When the results of a
   * 				<code>ListAccountSettings</code> request exceed <code>maxResults</code>, this value
   * 			can be used to retrieve the next page of results. This value is <code>null</code> when
   * 			there are no more results to return.</p>
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListAttributesRequest {
  /**
   * <p>The short name or full Amazon Resource Name (ARN) of the cluster to list attributes.
   * 			If you do not specify a cluster, the default cluster is assumed.</p>
   * @public
   */
  cluster?: string | undefined;

  /**
   * <p>The type of the target to list attributes with.</p>
   * @public
   */
  targetType: TargetType | undefined;

  /**
   * <p>The name of the attribute to filter the results with. </p>
   * @public
   */
  attributeName?: string | undefined;

  /**
   * <p>The value of the attribute to filter results with. You must also specify an attribute
   * 			name to use this parameter.</p>
   * @public
   */
  attributeValue?: string | undefined;

  /**
   * <p>The <code>nextToken</code> value returned from a <code>ListAttributes</code> request
   * 			indicating that more results are available to fulfill the request and further calls are
   * 			needed. If <code>maxResults</code> was provided, it's possible the number of results to
   * 			be fewer than <code>maxResults</code>.</p>
   *          <note>
   *             <p>This token should be treated as an opaque identifier that is only used to
   *                 retrieve the next items in a list and not for other programmatic purposes.</p>
   *          </note>
   * @public
   */
  nextToken?: string | undefined;

  /**
   * <p>The maximum number of cluster results that <code>ListAttributes</code> returned in
   * 			paginated output. When this parameter is used, <code>ListAttributes</code> only returns
   * 				<code>maxResults</code> results in a single page along with a <code>nextToken</code>
   * 			response element. The remaining results of the initial request can be seen by sending
   * 			another <code>ListAttributes</code> request with the returned <code>nextToken</code>
   * 			value. This value can be between 1 and 100. If this
   * 			parameter isn't used, then <code>ListAttributes</code> returns up to
   * 			100 results and a <code>nextToken</code> value if applicable.</p>
   * @public
   */
  maxResults?: number | undefined;
}

/**
 * @public
 */
export interface ListAttributesResponse {
  /**
   * <p>A list of attribute objects that meet the criteria of the request.</p>
   * @public
   */
  attributes?: Attribute[] | undefined;

  /**
   * <p>The <code>nextToken</code> value to include in a future <code>ListAttributes</code>
   * 			request. When the results of a <code>ListAttributes</code> request exceed
   * 				<code>maxResults</code>, this value can be used to retrieve the next page of
   * 			results. This value is <code>null</code> when there are no more results to
   * 			return.</p>
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListClustersRequest {
  /**
   * <p>The <code>nextToken</code> value returned from a <code>ListClusters</code> request
   * 			indicating that more results are available to fulfill the request and further calls are
   * 			needed. If <code>maxResults</code> was provided, it's possible the number of results to
   * 			be fewer than <code>maxResults</code>.</p>
   *          <note>
   *             <p>This token should be treated as an opaque identifier that is only used to
   *                 retrieve the next items in a list and not for other programmatic purposes.</p>
   *          </note>
   * @public
   */
  nextToken?: string | undefined;

  /**
   * <p>The maximum number of cluster results that <code>ListClusters</code> returned in
   * 			paginated output. When this parameter is used, <code>ListClusters</code> only returns
   * 				<code>maxResults</code> results in a single page along with a <code>nextToken</code>
   * 			response element. The remaining results of the initial request can be seen by sending
   * 			another <code>ListClusters</code> request with the returned <code>nextToken</code>
   * 			value. This value can be between 1 and 100. If this
   * 			parameter isn't used, then <code>ListClusters</code> returns up to 100
   * 			results and a <code>nextToken</code> value if applicable.</p>
   * @public
   */
  maxResults?: number | undefined;
}

/**
 * @public
 */
export interface ListClustersResponse {
  /**
   * <p>The list of full Amazon Resource Name (ARN) entries for each cluster that's associated with your
   * 			account.</p>
   * @public
   */
  clusterArns?: string[] | undefined;

  /**
   * <p>The <code>nextToken</code> value to include in a future <code>ListClusters</code>
   * 			request. When the results of a <code>ListClusters</code> request exceed
   * 				<code>maxResults</code>, this value can be used to retrieve the next page of
   * 			results. This value is <code>null</code> when there are no more results to
   * 			return.</p>
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * @public
 * @enum
 */
export const ContainerInstanceStatus = {
  ACTIVE: "ACTIVE",
  DEREGISTERING: "DEREGISTERING",
  DRAINING: "DRAINING",
  REGISTERING: "REGISTERING",
  REGISTRATION_FAILED: "REGISTRATION_FAILED",
} as const;

/**
 * @public
 */
export type ContainerInstanceStatus = (typeof ContainerInstanceStatus)[keyof typeof ContainerInstanceStatus];

/**
 * @public
 */
export interface ListContainerInstancesRequest {
  /**
   * <p>The short name or full Amazon Resource Name (ARN) of the cluster that hosts the container instances to
   * 			list. If you do not specify a cluster, the default cluster is assumed.</p>
   * @public
   */
  cluster?: string | undefined;

  /**
   * <p>You can filter the results of a <code>ListContainerInstances</code> operation with
   * 			cluster query language statements. For more information, see <a href="https://docs.aws.amazon.com/AmazonECS/latest/developerguide/cluster-query-language.html">Cluster Query Language</a> in the <i>Amazon Elastic Container Service Developer Guide</i>.</p>
   * @public
   */
  filter?: string | undefined;

  /**
   * <p>The <code>nextToken</code> value returned from a <code>ListContainerInstances</code>
   * 			request indicating that more results are available to fulfill the request and further
   * 			calls are needed. If <code>maxResults</code> was provided, it's possible the number of
   * 			results to be fewer than <code>maxResults</code>.</p>
   *          <note>
   *             <p>This token should be treated as an opaque identifier that is only used to
   *                 retrieve the next items in a list and not for other programmatic purposes.</p>
   *          </note>
   * @public
   */
  nextToken?: string | undefined;

  /**
   * <p>The maximum number of container instance results that
   * 				<code>ListContainerInstances</code> returned in paginated output. When this
   * 			parameter is used, <code>ListContainerInstances</code> only returns
   * 				<code>maxResults</code> results in a single page along with a <code>nextToken</code>
   * 			response element. The remaining results of the initial request can be seen by sending
   * 			another <code>ListContainerInstances</code> request with the returned
   * 				<code>nextToken</code> value. This value can be between 1 and
   * 			100. If this parameter isn't used, then
   * 				<code>ListContainerInstances</code> returns up to 100 results and
   * 			a <code>nextToken</code> value if applicable.</p>
   * @public
   */
  maxResults?: number | undefined;

  /**
   * <p>Filters the container instances by status. For example, if you specify the
   * 				<code>DRAINING</code> status, the results include only container instances that have
   * 			been set to <code>DRAINING</code> using <a href="https://docs.aws.amazon.com/AmazonECS/latest/APIReference/API_UpdateContainerInstancesState.html">UpdateContainerInstancesState</a>. If you don't specify this parameter, the
   * 			default is to include container instances set to all states other than
   * 				<code>INACTIVE</code>.</p>
   * @public
   */
  status?: ContainerInstanceStatus | undefined;
}

/**
 * @public
 */
export interface ListContainerInstancesResponse {
  /**
   * <p>The list of container instances with full ARN entries for each container instance
   * 			associated with the specified cluster.</p>
   * @public
   */
  containerInstanceArns?: string[] | undefined;

  /**
   * <p>The <code>nextToken</code> value to include in a future
   * 				<code>ListContainerInstances</code> request. When the results of a
   * 				<code>ListContainerInstances</code> request exceed <code>maxResults</code>, this
   * 			value can be used to retrieve the next page of results. This value is <code>null</code>
   * 			when there are no more results to return.</p>
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * <p>The optional filter to narrow the <code>ListServiceDeployment</code> results.</p>
 *          <p> If you do not specify a value, service deployments that were created before the
 * 			current time are included in the result.</p>
 * @public
 */
export interface CreatedAt {
  /**
   * <p>Include service deployments in the result that were created before this time. The
   * 			format is yyyy-MM-dd HH:mm:ss.SSSSSS.</p>
   * @public
   */
  before?: Date | undefined;

  /**
   * <p>Include service deployments in the result that were created after this time. The
   * 			format is yyyy-MM-dd HH:mm:ss.SSSSSS.</p>
   * @public
   */
  after?: Date | undefined;
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
   * <p>The cluster that hosts the service. This can either be the cluster name or ARN.
   * 			Starting April 15, 2023, Amazon Web Services will not onboard new customers to Amazon
   * 			Elastic Inference (EI), and will help current customers migrate their workloads to
   * 			options that offer better price and performance. If you don't specify a cluster,
   * 				<code>default</code> is used.</p>
   * @public
   */
  cluster?: string | undefined;

  /**
   * <p>An optional filter you can use to narrow the results. If you do not specify a status,
   * 			then all status values are included in the result.</p>
   * @public
   */
  status?: ServiceDeploymentStatus[] | undefined;

  /**
   * <p>An optional filter you can use to narrow the results by the service creation date. If
   * 			you do not specify a value, the result includes all services created before the current
   * 			time. The format is yyyy-MM-dd HH:mm:ss.SSSSSS.</p>
   * @public
   */
  createdAt?: CreatedAt | undefined;

  /**
   * <p>The <code>nextToken</code> value returned from a <code>ListServiceDeployments</code>
   * 			request indicating that more results are available to fulfill the request and further
   * 			calls are needed. If you provided <code>maxResults</code>, it's possible the number of
   * 			results is fewer than <code>maxResults</code>.</p>
   * @public
   */
  nextToken?: string | undefined;

  /**
   * <p>The maximum number of service deployment results that
   * 				<code>ListServiceDeployments</code> returned in paginated output. When this
   * 			parameter is used, <code>ListServiceDeployments</code> only returns
   * 				<code>maxResults</code> results in a single page along with a <code>nextToken</code>
   * 			response element. The remaining results of the initial request can be seen by sending
   * 			another <code>ListServiceDeployments</code> request with the returned
   * 				<code>nextToken</code> value. This value can be between 1 and 100. If this parameter
   * 			isn't used, then <code>ListServiceDeployments</code> returns up to 20 results and a
   * 				<code>nextToken</code> value if applicable.</p>
   * @public
   */
  maxResults?: number | undefined;
}

/**
 * <p>The service deployment properties that are retured when you call
 * 				<code>ListServiceDeployments</code>.</p>
 *          <p>This provides a high-level overview of the service deployment. </p>
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
   * <p>The time that the service deployment statred. The format is yyyy-MM-dd
   * 			HH:mm:ss.SSSSSS.</p>
   * @public
   */
  startedAt?: Date | undefined;

  /**
   * <p>The time that the service deployment was created. The format is yyyy-MM-dd
   * 			HH:mm:ss.SSSSSS.</p>
   * @public
   */
  createdAt?: Date | undefined;

  /**
   * <p>The time that the service deployment completed. The format is yyyy-MM-dd
   * 			HH:mm:ss.SSSSSS.</p>
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
   * <p>Information about why the service deployment is in the current status. For example,
   * 			the circuit breaker detected a deployment failure.</p>
   * @public
   */
  statusReason?: string | undefined;
}

/**
 * @public
 */
export interface ListServiceDeploymentsResponse {
  /**
   * <p>An overview of the service deployment, including the following properties:</p>
   *          <ul>
   *             <li>
   *                <p>The ARN of the service deployment.</p>
   *             </li>
   *             <li>
   *                <p>The ARN of the service being deployed.</p>
   *             </li>
   *             <li>
   *                <p>The ARN of the cluster that hosts the service in the service
   * 					deployment.</p>
   *             </li>
   *             <li>
   *                <p>The time that the service deployment started.</p>
   *             </li>
   *             <li>
   *                <p>The time that the service deployment completed.</p>
   *             </li>
   *             <li>
   *                <p>The service deployment status.</p>
   *             </li>
   *             <li>
   *                <p>Information about why the service deployment is in the current state.</p>
   *             </li>
   *             <li>
   *                <p>The ARN of the service revision that is being deployed.</p>
   *             </li>
   *          </ul>
   * @public
   */
  serviceDeployments?: ServiceDeploymentBrief[] | undefined;

  /**
   * <p>The <code>nextToken</code> value to include in a future
   * 				<code>ListServiceDeployments</code> request. When the results of a
   * 				<code>ListServiceDeployments</code> request exceed <code>maxResults</code>, this
   * 			value can be used to retrieve the next page of results. This value is null when there
   * 			are no more results to return.</p>
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListServicesRequest {
  /**
   * <p>The short name or full Amazon Resource Name (ARN) of the cluster to use when filtering the
   * 				<code>ListServices</code> results. If you do not specify a cluster, the default cluster is assumed.</p>
   * @public
   */
  cluster?: string | undefined;

  /**
   * <p>The <code>nextToken</code> value returned from a <code>ListServices</code> request
   * 			indicating that more results are available to fulfill the request and further calls will
   * 			be needed. If <code>maxResults</code> was provided, it is possible the number of results
   * 			to be fewer than <code>maxResults</code>.</p>
   *          <note>
   *             <p>This token should be treated as an opaque identifier that is only used to
   *                 retrieve the next items in a list and not for other programmatic purposes.</p>
   *          </note>
   * @public
   */
  nextToken?: string | undefined;

  /**
   * <p>The maximum number of service results that <code>ListServices</code> returned in
   * 			paginated output. When this parameter is used, <code>ListServices</code> only returns
   * 				<code>maxResults</code> results in a single page along with a <code>nextToken</code>
   * 			response element. The remaining results of the initial request can be seen by sending
   * 			another <code>ListServices</code> request with the returned <code>nextToken</code>
   * 			value. This value can be between 1 and 100. If
   * 			this parameter isn't used, then <code>ListServices</code> returns up to
   * 			10 results and a <code>nextToken</code> value if
   * 			applicable.</p>
   * @public
   */
  maxResults?: number | undefined;

  /**
   * <p>The launch type to use when filtering the <code>ListServices</code> results.</p>
   * @public
   */
  launchType?: LaunchType | undefined;

  /**
   * <p>The scheduling strategy to use when filtering the <code>ListServices</code>
   * 			results.</p>
   * @public
   */
  schedulingStrategy?: SchedulingStrategy | undefined;
}

/**
 * @public
 */
export interface ListServicesResponse {
  /**
   * <p>The list of full ARN entries for each service that's associated with the specified
   * 			cluster.</p>
   * @public
   */
  serviceArns?: string[] | undefined;

  /**
   * <p>The <code>nextToken</code> value to include in a future <code>ListServices</code>
   * 			request. When the results of a <code>ListServices</code> request exceed
   * 				<code>maxResults</code>, this value can be used to retrieve the next page of
   * 			results. This value is <code>null</code> when there are no more results to
   * 			return.</p>
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListServicesByNamespaceRequest {
  /**
   * <p>The namespace name or full Amazon Resource Name (ARN) of the Cloud Map namespace to list the services in.</p>
   *          <p>Tasks that run in a namespace can use short names to connect
   * 	to services in the namespace. Tasks can connect to services across all of the clusters in the namespace.
   * 	Tasks connect through a managed proxy container
   * 	that collects logs and metrics for increased visibility.
   * 	Only the tasks that Amazon ECS services create are supported with Service Connect.
   * 	For more information, see <a href="https://docs.aws.amazon.com/AmazonECS/latest/developerguide/service-connect.html">Service Connect</a> in the <i>Amazon Elastic Container Service Developer Guide</i>.</p>
   * @public
   */
  namespace: string | undefined;

  /**
   * <p>The <code>nextToken</code> value that's returned from a
   * 				<code>ListServicesByNamespace</code> request. It indicates that more results are
   * 			available to fulfill the request and further calls are needed. If
   * 				<code>maxResults</code> is returned, it is possible the number of results is less
   * 			than <code>maxResults</code>.</p>
   * @public
   */
  nextToken?: string | undefined;

  /**
   * <p>The maximum number of service results that <code>ListServicesByNamespace</code>
   * 			returns in paginated output. When this parameter is used,
   * 				<code>ListServicesByNamespace</code> only returns <code>maxResults</code> results in
   * 			a single page along with a <code>nextToken</code> response element. The remaining
   * 			results of the initial request can be seen by sending another
   * 				<code>ListServicesByNamespace</code> request with the returned
   * 				<code>nextToken</code> value. This value can be between 1 and
   * 			100. If this parameter isn't used, then
   * 				<code>ListServicesByNamespace</code> returns up to
   * 			10 results and a <code>nextToken</code>
   * 			value if applicable.</p>
   * @public
   */
  maxResults?: number | undefined;
}

/**
 * @public
 */
export interface ListServicesByNamespaceResponse {
  /**
   * <p>The list of full ARN entries for each service that's associated with the specified
   * 			namespace.</p>
   * @public
   */
  serviceArns?: string[] | undefined;

  /**
   * <p>The <code>nextToken</code> value to include in a future
   * 				<code>ListServicesByNamespace</code> request. When the results of a
   * 				<code>ListServicesByNamespace</code> request exceed <code>maxResults</code>, this
   * 			value can be used to retrieve the next page of results. When there are no more results
   * 			to return, this value is <code>null</code>.</p>
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListTagsForResourceRequest {
  /**
   * <p>The Amazon Resource Name (ARN) that identifies the resource to list the tags for. Currently, the
   * 			supported resources are Amazon ECS tasks, services, task definitions, clusters, and container
   * 			instances.</p>
   * @public
   */
  resourceArn: string | undefined;
}

/**
 * @public
 */
export interface ListTagsForResourceResponse {
  /**
   * <p>The tags for the resource.</p>
   * @public
   */
  tags?: Tag[] | undefined;
}

/**
 * @public
 * @enum
 */
export const TaskDefinitionFamilyStatus = {
  ACTIVE: "ACTIVE",
  ALL: "ALL",
  INACTIVE: "INACTIVE",
} as const;

/**
 * @public
 */
export type TaskDefinitionFamilyStatus = (typeof TaskDefinitionFamilyStatus)[keyof typeof TaskDefinitionFamilyStatus];

/**
 * @public
 */
export interface ListTaskDefinitionFamiliesRequest {
  /**
   * <p>The <code>familyPrefix</code> is a string that's used to filter the results of
   * 				<code>ListTaskDefinitionFamilies</code>. If you specify a <code>familyPrefix</code>,
   * 			only task definition family names that begin with the <code>familyPrefix</code> string
   * 			are returned.</p>
   * @public
   */
  familyPrefix?: string | undefined;

  /**
   * <p>The task definition family status to filter the
   * 				<code>ListTaskDefinitionFamilies</code> results with. By default, both
   * 				<code>ACTIVE</code> and <code>INACTIVE</code> task definition families are listed.
   * 			If this parameter is set to <code>ACTIVE</code>, only task definition families that have
   * 			an <code>ACTIVE</code> task definition revision are returned. If this parameter is set
   * 			to <code>INACTIVE</code>, only task definition families that do not have any
   * 				<code>ACTIVE</code> task definition revisions are returned. If you paginate the
   * 			resulting output, be sure to keep the <code>status</code> value constant in each
   * 			subsequent request.</p>
   * @public
   */
  status?: TaskDefinitionFamilyStatus | undefined;

  /**
   * <p>The <code>nextToken</code> value returned from a
   * 				<code>ListTaskDefinitionFamilies</code> request indicating that more results are
   * 			available to fulfill the request and further calls will be needed. If
   * 				<code>maxResults</code> was provided, it is possible the number of results to be
   * 			fewer than <code>maxResults</code>.</p>
   *          <note>
   *             <p>This token should be treated as an opaque identifier that is only used to
   *                 retrieve the next items in a list and not for other programmatic purposes.</p>
   *          </note>
   * @public
   */
  nextToken?: string | undefined;

  /**
   * <p>The maximum number of task definition family results that
   * 				<code>ListTaskDefinitionFamilies</code> returned in paginated output. When this
   * 			parameter is used, <code>ListTaskDefinitions</code> only returns <code>maxResults</code>
   * 			results in a single page along with a <code>nextToken</code> response element. The
   * 			remaining results of the initial request can be seen by sending another
   * 				<code>ListTaskDefinitionFamilies</code> request with the returned
   * 				<code>nextToken</code> value. This value can be between 1 and
   * 			100. If this parameter isn't used, then
   * 				<code>ListTaskDefinitionFamilies</code> returns up to 100 results
   * 			and a <code>nextToken</code> value if applicable.</p>
   * @public
   */
  maxResults?: number | undefined;
}

/**
 * @public
 */
export interface ListTaskDefinitionFamiliesResponse {
  /**
   * <p>The list of task definition family names that match the
   * 				<code>ListTaskDefinitionFamilies</code> request.</p>
   * @public
   */
  families?: string[] | undefined;

  /**
   * <p>The <code>nextToken</code> value to include in a future
   * 				<code>ListTaskDefinitionFamilies</code> request. When the results of a
   * 				<code>ListTaskDefinitionFamilies</code> request exceed <code>maxResults</code>, this
   * 			value can be used to retrieve the next page of results. This value is <code>null</code>
   * 			when there are no more results to return.</p>
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * @public
 * @enum
 */
export const SortOrder = {
  ASC: "ASC",
  DESC: "DESC",
} as const;

/**
 * @public
 */
export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder];

/**
 * @public
 */
export interface ListTaskDefinitionsRequest {
  /**
   * <p>The full family name to filter the <code>ListTaskDefinitions</code> results with.
   * 			Specifying a <code>familyPrefix</code> limits the listed task definitions to task
   * 			definition revisions that belong to that family.</p>
   * @public
   */
  familyPrefix?: string | undefined;

  /**
   * <p>The task definition status to filter the <code>ListTaskDefinitions</code> results
   * 			with. By default, only <code>ACTIVE</code> task definitions are listed. By setting this
   * 			parameter to <code>INACTIVE</code>, you can view task definitions that are
   * 				<code>INACTIVE</code> as long as an active task or service still references them. If
   * 			you paginate the resulting output, be sure to keep the <code>status</code> value
   * 			constant in each subsequent request.</p>
   * @public
   */
  status?: TaskDefinitionStatus | undefined;

  /**
   * <p>The order to sort the results in. Valid values are <code>ASC</code> and
   * 				<code>DESC</code>. By default, (<code>ASC</code>) task definitions are listed
   * 			lexicographically by family name and in ascending numerical order by revision so that
   * 			the newest task definitions in a family are listed last. Setting this parameter to
   * 				<code>DESC</code> reverses the sort order on family name and revision. This is so
   * 			that the newest task definitions in a family are listed first.</p>
   * @public
   */
  sort?: SortOrder | undefined;

  /**
   * <p>The <code>nextToken</code> value returned from a <code>ListTaskDefinitions</code>
   * 			request indicating that more results are available to fulfill the request and further
   * 			calls will be needed. If <code>maxResults</code> was provided, it is possible the number
   * 			of results to be fewer than <code>maxResults</code>.</p>
   *          <note>
   *             <p>This token should be treated as an opaque identifier that is only used to
   *                 retrieve the next items in a list and not for other programmatic purposes.</p>
   *          </note>
   * @public
   */
  nextToken?: string | undefined;

  /**
   * <p>The maximum number of task definition results that <code>ListTaskDefinitions</code>
   * 			returned in paginated output. When this parameter is used,
   * 				<code>ListTaskDefinitions</code> only returns <code>maxResults</code> results in a
   * 			single page along with a <code>nextToken</code> response element. The remaining results
   * 			of the initial request can be seen by sending another <code>ListTaskDefinitions</code>
   * 			request with the returned <code>nextToken</code> value. This value can be between
   * 			1 and 100. If this parameter isn't used, then
   * 				<code>ListTaskDefinitions</code> returns up to 100 results and a
   * 				<code>nextToken</code> value if applicable.</p>
   * @public
   */
  maxResults?: number | undefined;
}

/**
 * @public
 */
export interface ListTaskDefinitionsResponse {
  /**
   * <p>The list of task definition Amazon Resource Name (ARN) entries for the <code>ListTaskDefinitions</code>
   * 			request.</p>
   * @public
   */
  taskDefinitionArns?: string[] | undefined;

  /**
   * <p>The <code>nextToken</code> value to include in a future
   * 				<code>ListTaskDefinitions</code> request. When the results of a
   * 				<code>ListTaskDefinitions</code> request exceed <code>maxResults</code>, this value
   * 			can be used to retrieve the next page of results. This value is <code>null</code> when
   * 			there are no more results to return.</p>
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * @public
 * @enum
 */
export const DesiredStatus = {
  PENDING: "PENDING",
  RUNNING: "RUNNING",
  STOPPED: "STOPPED",
} as const;

/**
 * @public
 */
export type DesiredStatus = (typeof DesiredStatus)[keyof typeof DesiredStatus];

/**
 * @public
 */
export interface ListTasksRequest {
  /**
   * <p>The short name or full Amazon Resource Name (ARN) of the cluster to use when filtering the
   * 				<code>ListTasks</code> results. If you do not specify a cluster, the default cluster is assumed.</p>
   * @public
   */
  cluster?: string | undefined;

  /**
   * <p>The container instance ID or full ARN of the container instance to use when
   * 			filtering the <code>ListTasks</code> results. Specifying a
   * 				<code>containerInstance</code> limits the results to tasks that belong to that
   * 			container instance.</p>
   * @public
   */
  containerInstance?: string | undefined;

  /**
   * <p>The name of the task definition family to use when filtering the
   * 				<code>ListTasks</code> results. Specifying a <code>family</code> limits the results
   * 			to tasks that belong to that family.</p>
   * @public
   */
  family?: string | undefined;

  /**
   * <p>The <code>nextToken</code> value returned from a <code>ListTasks</code> request
   * 			indicating that more results are available to fulfill the request and further calls will
   * 			be needed. If <code>maxResults</code> was provided, it's possible the number of results
   * 			to be fewer than <code>maxResults</code>.</p>
   *          <note>
   *             <p>This token should be treated as an opaque identifier that is only used to
   *                 retrieve the next items in a list and not for other programmatic purposes.</p>
   *          </note>
   * @public
   */
  nextToken?: string | undefined;

  /**
   * <p>The maximum number of task results that <code>ListTasks</code> returned in paginated
   * 			output. When this parameter is used, <code>ListTasks</code> only returns
   * 				<code>maxResults</code> results in a single page along with a <code>nextToken</code>
   * 			response element. The remaining results of the initial request can be seen by sending
   * 			another <code>ListTasks</code> request with the returned <code>nextToken</code> value.
   * 			This value can be between 1 and 100. If this parameter
   * 			isn't used, then <code>ListTasks</code> returns up to 100 results and
   * 			a <code>nextToken</code> value if applicable.</p>
   * @public
   */
  maxResults?: number | undefined;

  /**
   * <p>The <code>startedBy</code> value to filter the task results with. Specifying a
   * 				<code>startedBy</code> value limits the results to tasks that were started with that
   * 			value.</p>
   *          <p>When you specify <code>startedBy</code> as the filter, it must be the only filter that
   * 			you use.</p>
   * @public
   */
  startedBy?: string | undefined;

  /**
   * <p>The name of the service to use when filtering the <code>ListTasks</code> results.
   * 			Specifying a <code>serviceName</code> limits the results to tasks that belong to that
   * 			service.</p>
   * @public
   */
  serviceName?: string | undefined;

  /**
   * <p>The task desired status to use when filtering the <code>ListTasks</code> results.
   * 			Specifying a <code>desiredStatus</code> of <code>STOPPED</code> limits the results to
   * 			tasks that Amazon ECS has set the desired status to <code>STOPPED</code>. This can be useful
   * 			for debugging tasks that aren't starting properly or have died or finished. The default
   * 			status filter is <code>RUNNING</code>, which shows tasks that Amazon ECS has set the desired
   * 			status to <code>RUNNING</code>.</p>
   *          <note>
   *             <p>Although you can filter results based on a desired status of <code>PENDING</code>,
   * 				this doesn't return any results. Amazon ECS never sets the desired status of a task to
   * 				that value (only a task's <code>lastStatus</code> may have a value of
   * 					<code>PENDING</code>).</p>
   *          </note>
   * @public
   */
  desiredStatus?: DesiredStatus | undefined;

  /**
   * <p>The launch type to use when filtering the <code>ListTasks</code> results.</p>
   * @public
   */
  launchType?: LaunchType | undefined;
}

/**
 * @public
 */
export interface ListTasksResponse {
  /**
   * <p>The list of task ARN entries for the <code>ListTasks</code> request.</p>
   * @public
   */
  taskArns?: string[] | undefined;

  /**
   * <p>The <code>nextToken</code> value to include in a future <code>ListTasks</code>
   * 			request. When the results of a <code>ListTasks</code> request exceed
   * 				<code>maxResults</code>, this value can be used to retrieve the next page of
   * 			results. This value is <code>null</code> when there are no more results to
   * 			return.</p>
   * @public
   */
  nextToken?: string | undefined;
}

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
   *                             default is a private namespace for each container.</p>
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
   * 			the size, volumeType, IOPS, throughput, snapshot and encryption in in <a href="https://docs.aws.amazon.com/AmazonECS/latest/APIReference/API_TaskManagedEBSVolumeConfiguration.html">TaskManagedEBSVolumeConfiguration</a>. The <code>name</code> of the volume must
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
 * @internal
 */
export const SessionFilterSensitiveLog = (obj: Session): any => ({
  ...obj,
  ...(obj.tokenValue && { tokenValue: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const ExecuteCommandResponseFilterSensitiveLog = (obj: ExecuteCommandResponse): any => ({
  ...obj,
  ...(obj.session && { session: SessionFilterSensitiveLog(obj.session) }),
});
