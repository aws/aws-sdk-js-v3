// smithy-typescript generated code
import { ExceptionOptionType as __ExceptionOptionType } from "@smithy/smithy-client";

import { BatchServiceException as __BaseException } from "./BatchServiceException";

/**
 * @public
 * @enum
 */
export const ArrayJobDependency = {
  N_TO_N: "N_TO_N",
  SEQUENTIAL: "SEQUENTIAL",
} as const;

/**
 * @public
 */
export type ArrayJobDependency = (typeof ArrayJobDependency)[keyof typeof ArrayJobDependency];

/**
 * <p>An object that represents an Batch array job.</p>
 * @public
 */
export interface ArrayProperties {
  /**
   * <p>The size of the array job.</p>
   * @public
   */
  size?: number | undefined;
}

/**
 * <p>An object that represents the array properties of a job.</p>
 * @public
 */
export interface ArrayPropertiesDetail {
  /**
   * <p>A summary of the number of array job children in each available job status. This parameter
   *    is returned for parent array jobs.</p>
   * @public
   */
  statusSummary?: Record<string, number> | undefined;

  /**
   * <p>The size of the array job. This parameter is returned for parent array jobs.</p>
   * @public
   */
  size?: number | undefined;

  /**
   * <p>The job index within the array that's associated with this job. This parameter is returned
   *    for array job children.</p>
   * @public
   */
  index?: number | undefined;
}

/**
 * <p>An object that represents the array properties of a job.</p>
 * @public
 */
export interface ArrayPropertiesSummary {
  /**
   * <p>The size of the array job. This parameter is returned for parent array jobs.</p>
   * @public
   */
  size?: number | undefined;

  /**
   * <p>The job index within the array that's associated with this job. This parameter is returned
   *    for children of array jobs.</p>
   * @public
   */
  index?: number | undefined;
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
 * <p>An object that represents the elastic network interface for a multi-node parallel job
 *    node.</p>
 * @public
 */
export interface NetworkInterface {
  /**
   * <p>The attachment ID for the network interface.</p>
   * @public
   */
  attachmentId?: string | undefined;

  /**
   * <p>The private IPv6 address for the network interface.</p>
   * @public
   */
  ipv6Address?: string | undefined;

  /**
   * <p>The private IPv4 address for the network interface.</p>
   * @public
   */
  privateIpv4Address?: string | undefined;
}

/**
 * <p>An object that represents the details of a container that's part of a job attempt.</p>
 * @public
 */
export interface AttemptContainerDetail {
  /**
   * <p>The Amazon Resource Name (ARN) of the Amazon ECS container instance that hosts the job attempt.</p>
   * @public
   */
  containerInstanceArn?: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the Amazon ECS task that's associated with the job attempt. Each container
   *    attempt receives a task ARN when they reach the <code>STARTING</code> status.</p>
   * @public
   */
  taskArn?: string | undefined;

  /**
   * <p>The exit code for the job attempt. A non-zero exit code is considered failed.</p>
   * @public
   */
  exitCode?: number | undefined;

  /**
   * <p>A short (255 max characters) human-readable string to provide additional details for a
   *    running or stopped container.</p>
   * @public
   */
  reason?: string | undefined;

  /**
   * <p>The name of the CloudWatch Logs log stream that's associated with the container. The log
   *    group for Batch jobs is <code>/aws/batch/job</code>. Each container attempt receives a log
   *    stream name when they reach the <code>RUNNING</code> status.</p>
   * @public
   */
  logStreamName?: string | undefined;

  /**
   * <p>The network interfaces that are associated with the job attempt.</p>
   * @public
   */
  networkInterfaces?: NetworkInterface[] | undefined;
}

/**
 * <p>An object that represents the details of a container that's part of a job attempt.</p>
 * @public
 */
export interface AttemptTaskContainerDetails {
  /**
   * <p>The exit code for the container’s attempt. A non-zero exit code is considered failed.</p>
   * @public
   */
  exitCode?: number | undefined;

  /**
   * <p>The name of a container.</p>
   * @public
   */
  name?: string | undefined;

  /**
   * <p>A short (255 max characters) string that's easy to understand and provides additional details for a
   *    running or stopped container.</p>
   * @public
   */
  reason?: string | undefined;

  /**
   * <p>The name of the Amazon CloudWatch Logs log stream that's associated with the container. The log
   *    group for Batch jobs is <code>/aws/batch/job</code>. Each container attempt receives a log stream name
   *    when they reach the <code>RUNNING</code> status.</p>
   * @public
   */
  logStreamName?: string | undefined;

  /**
   * <p>The network interfaces that are associated with the job attempt.</p>
   * @public
   */
  networkInterfaces?: NetworkInterface[] | undefined;
}

/**
 * <p>An object that represents the details of a task.</p>
 * @public
 */
export interface AttemptEcsTaskDetails {
  /**
   * <p>The Amazon Resource Name (ARN) of the container instance that hosts the task.</p>
   * @public
   */
  containerInstanceArn?: string | undefined;

  /**
   * <p>The ARN of the Amazon ECS task.</p>
   * @public
   */
  taskArn?: string | undefined;

  /**
   * <p>A list of containers that are included in the <code>taskProperties</code> list.</p>
   * @public
   */
  containers?: AttemptTaskContainerDetails[] | undefined;
}

/**
 * <p>An object that represents a job attempt.</p>
 * @public
 */
export interface AttemptDetail {
  /**
   * <p>The details for the container in this job attempt.</p>
   * @public
   */
  container?: AttemptContainerDetail | undefined;

  /**
   * <p>The Unix timestamp (in milliseconds) for when the attempt was started (when the attempt
   *    transitioned from the <code>STARTING</code> state to the <code>RUNNING</code> state).</p>
   * @public
   */
  startedAt?: number | undefined;

  /**
   * <p>The Unix timestamp (in milliseconds) for when the attempt was stopped (when the attempt
   *    transitioned from the <code>RUNNING</code> state to a terminal state, such as
   *     <code>SUCCEEDED</code> or <code>FAILED</code>).</p>
   * @public
   */
  stoppedAt?: number | undefined;

  /**
   * <p>A short, human-readable string to provide additional details for the current status of the
   *    job attempt.</p>
   * @public
   */
  statusReason?: string | undefined;

  /**
   * <p>The properties for a task definition that describes the container and volume definitions of
   *    an Amazon ECS task.</p>
   * @public
   */
  taskProperties?: AttemptEcsTaskDetails[] | undefined;
}

/**
 * <p>Contains the parameters for <code>CancelJob</code>.</p>
 * @public
 */
export interface CancelJobRequest {
  /**
   * <p>The Batch job ID of the job to cancel.</p>
   * @public
   */
  jobId: string | undefined;

  /**
   * <p>A message to attach to the job that explains the reason for canceling it. This message is
   *       returned by future <a>DescribeJobs</a> operations on the job. It is also
   *       recorded in the Batch activity logs.</p>
   *          <p>This parameter has as limit of 1024 characters.</p>
   * @public
   */
  reason: string | undefined;
}

/**
 * @public
 */
export interface CancelJobResponse {}

/**
 * <p>These errors are usually caused by a client action. One example cause is using an action or resource on behalf
 *    of a user that doesn't have permissions to use the action or resource. Another cause is specifying an identifier
 *    that's not valid.</p>
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
 * @public
 * @enum
 */
export const CRAllocationStrategy = {
  BEST_FIT: "BEST_FIT",
  BEST_FIT_PROGRESSIVE: "BEST_FIT_PROGRESSIVE",
  SPOT_CAPACITY_OPTIMIZED: "SPOT_CAPACITY_OPTIMIZED",
  SPOT_PRICE_CAPACITY_OPTIMIZED: "SPOT_PRICE_CAPACITY_OPTIMIZED",
} as const;

/**
 * @public
 */
export type CRAllocationStrategy = (typeof CRAllocationStrategy)[keyof typeof CRAllocationStrategy];

/**
 * <p>Provides information used to select Amazon Machine Images (AMIs) for instances in the
 *    compute environment. If <code>Ec2Configuration</code> isn't specified, the default is
 *     <code>ECS_AL2</code> (<a href="https://docs.aws.amazon.com/AmazonECS/latest/developerguide/ecs-optimized_AMI.html#al2ami">Amazon Linux 2</a>).</p>
 *          <note>
 *             <p>This object isn't applicable to jobs that are running on Fargate resources.</p>
 *          </note>
 * @public
 */
export interface Ec2Configuration {
  /**
   * <p>The image type to match with the instance type to select an AMI. The supported values are
   *    different for <code>ECS</code> and <code>EKS</code> resources.</p>
   *          <dl>
   *             <dt>ECS</dt>
   *             <dd>
   *                <p>If the <code>imageIdOverride</code> parameter isn't specified, then a recent <a href="https://docs.aws.amazon.com/AmazonECS/latest/developerguide/ecs-optimized_AMI.html#al2ami">Amazon ECS-optimized Amazon Linux 2 AMI</a> (<code>ECS_AL2</code>) is used. If a new image type is
   *       specified in an update, but neither an <code>imageId</code> nor a <code>imageIdOverride</code>
   *       parameter is specified, then the latest Amazon ECS optimized AMI for that image type that's
   *       supported by Batch is used.</p>
   *                <important>
   *                   <p>Amazon Web Services will end support for Amazon ECS optimized AL2-optimized and AL2-accelerated AMIs. Starting in January 2026, Batch will change
   *        the default AMI for new Amazon ECS compute environments from Amazon Linux 2 to Amazon Linux 2023.
   *        We recommend migrating Batch Amazon ECS compute environments to Amazon Linux 2023 to maintain
   *        optimal performance and security. For more information on upgrading from AL2 to AL2023, see <a href="https://docs.aws.amazon.com/batch/latest/userguide/ecs-migration-2023.html">How to migrate
   *         from ECS AL2 to ECS AL2023</a> in the <i>Batch User Guide</i>.</p>
   *                </important>
   *                <dl>
   *                   <dt>ECS_AL2</dt>
   *                   <dd>
   *                      <p>
   *                         <a href="https://docs.aws.amazon.com/AmazonECS/latest/developerguide/ecs-optimized_AMI.html#al2ami">Amazon Linux
   *          2</a>: Default for all non-GPU instance families.</p>
   *                   </dd>
   *                   <dt>ECS_AL2_NVIDIA</dt>
   *                   <dd>
   *                      <p>
   *                         <a href="https://docs.aws.amazon.com/AmazonECS/latest/developerguide/ecs-optimized_AMI.html#gpuami">Amazon Linux 2
   *           (GPU)</a>: Default for all GPU instance families (for example <code>P4</code> and
   *           <code>G4</code>) and can be used for all non Amazon Web Services Graviton-based instance types.</p>
   *                   </dd>
   *                   <dt>ECS_AL2023</dt>
   *                   <dd>
   *                      <p>
   *                         <a href="https://docs.aws.amazon.com/AmazonECS/latest/developerguide/ecs-optimized_AMI.html">Amazon Linux 2023</a>: Batch
   *          supports Amazon Linux 2023.</p>
   *                      <note>
   *                         <p>Amazon Linux 2023 does not support <code>A1</code> instances.</p>
   *                      </note>
   *                   </dd>
   *                   <dt>ECS_AL2023_NVIDIA</dt>
   *                   <dd>
   *                      <p>
   *                         <a href="https://docs.aws.amazon.com/AmazonECS/latest/developerguide/ecs-optimized_AMI.html#gpuami">Amazon Linux 2023
   *           (GPU)</a>: For all GPU instance families and can be used for all non Amazon Web Services Graviton-based instance types.</p>
   *                      <note>
   *                         <p>ECS_AL2023_NVIDIA doesn't support <code>p3</code> and <code>g3</code> instance types.</p>
   *                      </note>
   *                   </dd>
   *                </dl>
   *             </dd>
   *             <dt>EKS</dt>
   *             <dd>
   *                <p>If the <code>imageIdOverride</code> parameter isn't specified, then a recent <a href="https://docs.aws.amazon.com/eks/latest/userguide/eks-optimized-ami.html">Amazon EKS-optimized Amazon Linux
   *        AMI</a> (<code>EKS_AL2</code>) is used. If a new image type is specified in an update,
   *       but neither an <code>imageId</code> nor a <code>imageIdOverride</code> parameter is specified,
   *       then the latest Amazon EKS optimized AMI for that image type that Batch supports is used.</p>
   *                <important>
   *                   <p>Starting end of October 2025 Amazon EKS optimized Amazon Linux 2023 AMIs will be the
   *        default on Batch for EKS versions prior to 1.33. Starting from Kubernetes version 1.33,
   *        EKS optimized Amazon Linux 2023 AMIs will be the default when it becomes supported on
   *        Batch.</p>
   *                   <p>Amazon Web Services will end
   *        support for Amazon EKS AL2-optimized and AL2-accelerated AMIs, starting 11/26/25. You can continue
   *        using Batch-provided Amazon EKS optimized Amazon Linux 2 AMIs on your Amazon EKS compute
   *        environments beyond the 11/26/25 end-of-support date, these compute environments will no
   *        longer receive any new software updates, security patches, or bug fixes from
   *        Amazon Web Services. For more information on upgrading from AL2 to AL2023, see <a href="https://docs.aws.amazon.com/batch/latest/userguide/eks-migration-2023.html">How to upgrade from EKS AL2 to EKS AL2023</a> in the <i>Batch User Guide</i>.</p>
   *                </important>
   *                <dl>
   *                   <dt>EKS_AL2</dt>
   *                   <dd>
   *                      <p>
   *                         <a href="https://docs.aws.amazon.com/eks/latest/userguide/eks-optimized-ami.html">Amazon
   *           Linux 2</a>: Default for all non-GPU instance families.</p>
   *                   </dd>
   *                   <dt>EKS_AL2_NVIDIA</dt>
   *                   <dd>
   *                      <p>
   *                         <a href="https://docs.aws.amazon.com/eks/latest/userguide/eks-optimized-ami.html">Amazon
   *           Linux 2 (accelerated)</a>: Default for all GPU instance families (for example,
   *           <code>P4</code> and <code>G4</code>) and can be used for all non Amazon Web Services Graviton-based
   *          instance types.</p>
   *                   </dd>
   *                   <dt>EKS_AL2023</dt>
   *                   <dd>
   *                      <p>
   *                         <a href="https://docs.aws.amazon.com/eks/latest/userguide/eks-optimized-ami.html">Amazon
   *           Linux 2023</a>: Batch supports Amazon Linux 2023.</p>
   *                      <note>
   *                         <p>Amazon Linux 2023 does not support <code>A1</code> instances.</p>
   *                      </note>
   *                   </dd>
   *                   <dt>EKS_AL2023_NVIDIA</dt>
   *                   <dd>
   *                      <p>
   *                         <a href="https://docs.aws.amazon.com/eks/latest/userguide/eks-optimized-ami.html">Amazon
   *           Linux 2023 (accelerated)</a>: GPU instance families and can be used for all non Amazon Web Services
   *          Graviton-based instance types.</p>
   *                   </dd>
   *                </dl>
   *             </dd>
   *          </dl>
   * @public
   */
  imageType: string | undefined;

  /**
   * <p>The AMI ID used for instances launched in the compute environment that match the image type.
   *    This setting overrides the <code>imageId</code> set in the <code>computeResource</code>
   *    object.</p>
   *          <note>
   *             <p>The AMI that you choose for a compute environment must match the architecture of the instance types that
   *     you intend to use for that compute environment. For example, if your compute environment uses A1 instance types,
   *     the compute resource AMI that you choose must support ARM instances. Amazon ECS vends both x86 and ARM versions of the
   *     Amazon ECS-optimized Amazon Linux 2 AMI. For more information, see <a href="https://docs.aws.amazon.com/AmazonECS/latest/developerguide/ecs-optimized_AMI.html#ecs-optimized-ami-linux-variants.html">Amazon ECS-optimized
   *     Amazon Linux 2 AMI</a>
   *     in the <i>Amazon Elastic Container Service Developer Guide</i>.</p>
   *          </note>
   * @public
   */
  imageIdOverride?: string | undefined;

  /**
   * <p>The Kubernetes version for the compute environment. If you don't specify a value, the latest
   *    version that Batch supports is used.</p>
   * @public
   */
  imageKubernetesVersion?: string | undefined;
}

/**
 * @public
 * @enum
 */
export const UserdataType = {
  EKS_BOOTSTRAP_SH: "EKS_BOOTSTRAP_SH",
  EKS_NODEADM: "EKS_NODEADM",
} as const;

/**
 * @public
 */
export type UserdataType = (typeof UserdataType)[keyof typeof UserdataType];

/**
 * <p>An object that represents a launch template to use in place of the default launch template. You must specify either the launch template ID or launch template name in the request, but not
 *    both.</p>
 *          <p>If security groups are specified using both the <code>securityGroupIds</code> parameter of
 *     <code>CreateComputeEnvironment</code> and the launch template, the values in the
 *     <code>securityGroupIds</code> parameter of <code>CreateComputeEnvironment</code> will be
 *    used.</p>
 *          <p>You can define up to ten (10) overrides for each compute environment.</p>
 *          <note>
 *             <p>This object isn't applicable to jobs that are running on Fargate resources.</p>
 *          </note>
 *          <note>
 *             <p>To unset all override templates for a compute environment, you can pass an empty array to the <a href="https://docs.aws.amazon.com/batch/latest/APIReference/API_UpdateComputeEnvironment.html">UpdateComputeEnvironment.overrides</a> parameter, or not include the <code>overrides</code> parameter when submitting the <code>UpdateComputeEnvironment</code> API operation.</p>
 *          </note>
 * @public
 */
export interface LaunchTemplateSpecificationOverride {
  /**
   * <p>The ID of the launch template.</p>
   *          <p>
   *             <b>Note:</b> If you specify the <code>launchTemplateId</code> you can't specify the <code>launchTemplateName</code> as well.</p>
   * @public
   */
  launchTemplateId?: string | undefined;

  /**
   * <p>The name of the launch template.</p>
   *          <p>
   *             <b>Note:</b> If you specify the <code>launchTemplateName</code> you can't specify the <code>launchTemplateId</code> as well.</p>
   * @public
   */
  launchTemplateName?: string | undefined;

  /**
   * <p>The version number of the launch template,
   *    <code>$Default</code>, or <code>$Latest</code>.</p>
   *          <p>If the value is <code>$Default</code>, the default version of the launch template is used. If the value is <code>$Latest</code>, the latest version of the launch template is used. </p>
   *          <important>
   *             <p>If the AMI ID that's used in a compute environment is from the launch template, the AMI
   *     isn't changed when the compute environment is updated. It's only changed if the
   *      <code>updateToLatestImageVersion</code> parameter for the compute environment is set to
   *      <code>true</code>. During an infrastructure update, if either <code>$Default</code> or <code>$Latest</code> is specified, Batch re-evaluates the launch template version, and it
   *     might use a different version of the launch template. This is the case even if the launch
   *     template isn't specified in the update. When updating a compute environment, changing the launch
   *     template requires an infrastructure update of the compute environment. For more information, see
   *      <a href="https://docs.aws.amazon.com/batch/latest/userguide/updating-compute-environments.html">Updating compute
   *      environments</a> in the <i>Batch User Guide</i>.</p>
   *          </important>
   *          <p>Default: <code>$Default</code>
   *          </p>
   *          <p>Latest: <code>$Latest</code>
   *          </p>
   * @public
   */
  version?: string | undefined;

  /**
   * <p>The instance type or family that this override launch template should be applied to.</p>
   *          <p>This parameter is required when defining a launch template override.</p>
   *          <p>Information included in this parameter must meet the following requirements:</p>
   *          <ul>
   *             <li>
   *                <p>Must be a valid Amazon EC2 instance type or family.</p>
   *             </li>
   *             <li>
   *                <p>The following Batch <code>InstanceTypes</code> are not allowed: <code>optimal</code>, <code>default_x86_64</code>, and <code>default_arm64</code>.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>targetInstanceTypes</code> can target only instance types and families that are included within the <a href="https://docs.aws.amazon.com/batch/latest/APIReference/API_ComputeResource.html#Batch-Type-ComputeResource-instanceTypes">
   *                      <code>ComputeResource.instanceTypes</code>
   *                   </a> set. <code>targetInstanceTypes</code> doesn't need to include all of the instances from the <code>instanceType</code> set, but at least a subset. For example, if <code>ComputeResource.instanceTypes</code> includes <code>[m5, g5]</code>, <code>targetInstanceTypes</code> can include <code>[m5.2xlarge]</code> and <code>[m5.large]</code> but not <code>[c5.large]</code>.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>targetInstanceTypes</code> included within the same launch template override or across launch template overrides can't overlap for the same compute environment. For example, you can't define one launch template override to target an instance family and another define an instance type within this same family.</p>
   *             </li>
   *          </ul>
   * @public
   */
  targetInstanceTypes?: string[] | undefined;

  /**
   * <p>The EKS node initialization process to use. You only need to specify this value if you are
   *    using a custom AMI. The default value is <code>EKS_BOOTSTRAP_SH</code>. If
   *     <i>imageType</i> is a custom AMI based on EKS_AL2023 or EKS_AL2023_NVIDIA then you
   *    must choose <code>EKS_NODEADM</code>.</p>
   * @public
   */
  userdataType?: UserdataType | undefined;
}

/**
 * <p>An object that represents a launch template that's associated with a compute resource. You
 *    must specify either the launch template ID or launch template name in the request, but not
 *    both.</p>
 *          <p>If security groups are specified using both the <code>securityGroupIds</code> parameter of
 *     <code>CreateComputeEnvironment</code> and the launch template, the values in the
 *     <code>securityGroupIds</code> parameter of <code>CreateComputeEnvironment</code> will be
 *    used.</p>
 *          <note>
 *             <p>This object isn't applicable to jobs that are running on Fargate resources.</p>
 *          </note>
 * @public
 */
export interface LaunchTemplateSpecification {
  /**
   * <p>The ID of the launch template.</p>
   * @public
   */
  launchTemplateId?: string | undefined;

  /**
   * <p>The name of the launch template.</p>
   * @public
   */
  launchTemplateName?: string | undefined;

  /**
   * <p>The version number of the launch template,
   *    <code>$Default</code>, or <code>$Latest</code>.</p>
   *          <p>If the value is <code>$Default</code>, the default version of the launch template is used. If the value is <code>$Latest</code>, the latest version of the launch template is used. </p>
   *          <important>
   *             <p>If the AMI ID that's used in a compute environment is from the launch template, the AMI
   *     isn't changed when the compute environment is updated. It's only changed if the
   *      <code>updateToLatestImageVersion</code> parameter for the compute environment is set to
   *      <code>true</code>. During an infrastructure update, if either <code>$Default</code> or
   *      <code>$Latest</code> is specified, Batch re-evaluates the launch template version, and it
   *     might use a different version of the launch template. This is the case even if the launch
   *     template isn't specified in the update. When updating a compute environment, changing the launch
   *     template requires an infrastructure update of the compute environment. For more information, see
   *      <a href="https://docs.aws.amazon.com/batch/latest/userguide/updating-compute-environments.html">Updating compute
   *      environments</a> in the <i>Batch User Guide</i>.</p>
   *          </important>
   *          <p>Default: <code>$Default</code>
   *          </p>
   *          <p>Latest: <code>$Latest</code>
   *          </p>
   * @public
   */
  version?: string | undefined;

  /**
   * <p>A launch template to use in place of the default launch template. You must specify either the launch template ID or launch template name in the request, but not both.</p>
   *          <p>You can specify up to ten (10) launch template overrides that are associated to unique instance types or families for each compute environment.</p>
   *          <note>
   *             <p>To unset all override templates for a compute environment, you can pass an empty array to the <a href="https://docs.aws.amazon.com/batch/latest/APIReference/API_UpdateComputeEnvironment.html">UpdateComputeEnvironment.overrides</a> parameter, or not include the <code>overrides</code> parameter when submitting the <code>UpdateComputeEnvironment</code> API operation.</p>
   *          </note>
   * @public
   */
  overrides?: LaunchTemplateSpecificationOverride[] | undefined;

  /**
   * <p>The EKS node initialization process to use. You only need to specify this value if you are
   *    using a custom AMI. The default value is <code>EKS_BOOTSTRAP_SH</code>. If
   *     <i>imageType</i> is a custom AMI based on EKS_AL2023 or EKS_AL2023_NVIDIA then you
   *    must choose <code>EKS_NODEADM</code>.</p>
   * @public
   */
  userdataType?: UserdataType | undefined;
}

/**
 * @public
 * @enum
 */
export const CRType = {
  EC2: "EC2",
  FARGATE: "FARGATE",
  FARGATE_SPOT: "FARGATE_SPOT",
  SPOT: "SPOT",
} as const;

/**
 * @public
 */
export type CRType = (typeof CRType)[keyof typeof CRType];

/**
 * <p>An object that represents an Batch compute resource. For more information, see <a href="https://docs.aws.amazon.com/batch/latest/userguide/compute_environments.html">Compute environments</a> in
 *    the <i>Batch User Guide</i>.</p>
 * @public
 */
export interface ComputeResource {
  /**
   * <p>The type of compute environment: <code>EC2</code>, <code>SPOT</code>, <code>FARGATE</code>,
   *    or <code>FARGATE_SPOT</code>. For more information, see <a href="https://docs.aws.amazon.com/batch/latest/userguide/compute_environments.html">Compute environments</a> in the
   *     <i>Batch User Guide</i>.</p>
   *          <p> If you choose <code>SPOT</code>, you must also specify an Amazon EC2 Spot Fleet role with the
   *     <code>spotIamFleetRole</code> parameter. For more information, see <a href="https://docs.aws.amazon.com/batch/latest/userguide/spot_fleet_IAM_role.html">Amazon EC2 spot fleet role</a> in the
   *     <i>Batch User Guide</i>.</p>
   *          <note>
   *             <p>Multi-node parallel jobs aren't supported on Spot Instances.</p>
   *          </note>
   * @public
   */
  type: CRType | undefined;

  /**
   * <p>The allocation strategy to use for the compute resource if not enough instances of the best
   *    fitting instance type can be allocated. This might be because of availability of the instance
   *    type in the Region or <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/ec2-resource-limits.html">Amazon EC2 service limits</a>. For more
   *    information, see <a href="https://docs.aws.amazon.com/batch/latest/userguide/allocation-strategies.html">Allocation strategies</a> in the <i>Batch User Guide</i>.</p>
   *          <note>
   *             <p>This parameter isn't applicable to jobs that are running on Fargate resources. Don't specify it.</p>
   *          </note>
   *          <dl>
   *             <dt>BEST_FIT (default)</dt>
   *             <dd>
   *                <p>Batch selects an instance type that best fits the needs of the jobs with a preference
   *       for the lowest-cost instance type. If additional instances of the selected instance type
   *       aren't available, Batch waits for the additional instances to be available. If there aren't
   *       enough instances available or the user is reaching <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/ec2-resource-limits.html">Amazon EC2 service limits</a>,
   *       additional jobs aren't run until the currently running jobs are completed. This allocation
   *       strategy keeps costs lower but can limit scaling. If you're using Spot Fleets with
   *        <code>BEST_FIT</code>, the Spot Fleet IAM Role must be specified. Compute resources that use
   *       a <code>BEST_FIT</code> allocation strategy don't support infrastructure updates and can't
   *       update some parameters. For more information, see <a href="https://docs.aws.amazon.com/batch/latest/userguide/updating-compute-environments.html">Updating compute environments</a> in
   *       the <i>Batch User Guide</i>.</p>
   *             </dd>
   *             <dt>BEST_FIT_PROGRESSIVE</dt>
   *             <dd>
   *                <p>Batch selects additional instance types that are large enough to meet the requirements
   *       of the jobs in the queue. Its preference is for instance types with lower cost vCPUs. If
   *       additional instances of the previously selected instance types aren't available, Batch
   *       selects new instance types.</p>
   *             </dd>
   *             <dt>SPOT_CAPACITY_OPTIMIZED</dt>
   *             <dd>
   *                <p>Batch selects one or more instance types that are large enough to meet the requirements
   *       of the jobs in the queue. Its preference is for instance types that are less likely to be
   *       interrupted. This allocation strategy is only available for Spot Instance compute
   *       resources.</p>
   *             </dd>
   *             <dt>SPOT_PRICE_CAPACITY_OPTIMIZED</dt>
   *             <dd>
   *                <p>The price and capacity optimized allocation strategy looks at both price and capacity to
   *       select the Spot Instance pools that are the least likely to be interrupted and have the lowest
   *       possible price. This allocation strategy is only available for Spot Instance compute
   *       resources.</p>
   *             </dd>
   *          </dl>
   *          <p>With <code>BEST_FIT_PROGRESSIVE</code>,<code>SPOT_CAPACITY_OPTIMIZED</code> and
   *     <code>SPOT_PRICE_CAPACITY_OPTIMIZED</code> (recommended) strategies using On-Demand or Spot
   *     Instances, and the <code>BEST_FIT</code> strategy using Spot Instances, Batch might need to
   *     exceed <code>maxvCpus</code> to meet your capacity requirements. In this event, Batch never
   *     exceeds <code>maxvCpus</code> by more than a single instance.</p>
   * @public
   */
  allocationStrategy?: CRAllocationStrategy | undefined;

  /**
   * <p>The minimum number of vCPUs that a compute environment should maintain (even if the compute
   *    environment is <code>DISABLED</code>).</p>
   *          <note>
   *             <p>This parameter isn't applicable to jobs that are running on Fargate resources. Don't specify it.</p>
   *          </note>
   * @public
   */
  minvCpus?: number | undefined;

  /**
   * <p>The maximum number of vCPUs that a compute environment can support.</p>
   *          <note>
   *             <p>With <code>BEST_FIT_PROGRESSIVE</code>,<code>SPOT_CAPACITY_OPTIMIZED</code> and
   *      <code>SPOT_PRICE_CAPACITY_OPTIMIZED</code> (recommended) strategies using On-Demand or Spot Instances,
   *      and the <code>BEST_FIT</code> strategy using Spot Instances, Batch might need to exceed
   *      <code>maxvCpus</code> to meet your capacity requirements. In this event, Batch never exceeds
   *      <code>maxvCpus</code> by more than a single instance.</p>
   *          </note>
   * @public
   */
  maxvCpus: number | undefined;

  /**
   * <p>The desired number of vCPUS in the compute environment. Batch modifies this value between
   *    the minimum and maximum values based on job queue demand.</p>
   *          <note>
   *             <p>This parameter isn't applicable to jobs that are running on Fargate resources. Don't specify it.</p>
   *          </note>
   * @public
   */
  desiredvCpus?: number | undefined;

  /**
   * <p>The instances types that can be launched. You can specify instance families to launch any
   *    instance type within those families (for example, <code>c5</code> or <code>p3</code>), or you can
   *    specify specific sizes within a family (such as <code>c5.8xlarge</code>). </p>
   *          <p>Batch can select the instance type for you if you choose one of the following:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>optimal</code> to select instance types (from the <code>c4</code>, <code>m4</code>,
   *     <code>r4</code>, <code>c5</code>, <code>m5</code>, and <code>r5</code>
   *     instance families) that match the demand of your job queues. </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>default_x86_64</code> to choose x86 based instance types (from the <code>m6i</code>,
   *      <code>c6i</code>, <code>r6i</code>, and <code>c7i</code> instance families) that matches the resource demands of the job queue.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>default_arm64</code> to choose x86 based instance types (from the <code>m6g</code>,
   *      <code>c6g</code>, <code>r6g</code>, and <code>c7g</code> instance families) that matches the resource demands of the job queue.</p>
   *             </li>
   *          </ul>
   *          <note>
   *             <p>Starting on 11/01/2025 the behavior of <code>optimal</code> is going to be changed to
   *     match <code>default_x86_64</code>.
   *
   *     During the change your instance families could be updated to a newer
   *     generation.
   *     You do not need to perform any actions for the upgrade to
   *     happen. For more information about change, see <a href="https://docs.aws.amazon.com/batch/latest/userguide/optimal-default-instance-troubleshooting.html">Optimal instance type configuration to
   *      receive automatic instance family updates</a>.</p>
   *          </note>
   *          <note>
   *             <p>Instance family availability varies by
   *     Amazon Web Services Region.
   *     For example, some Amazon Web Services Regions may not have any fourth generation instance families
   *     but have fifth and sixth generation instance families.</p>
   *             <p>When using <code>default_x86_64</code> or <code>default_arm64</code>
   *     instance bundles, Batch selects instance families based on a balance of
   *     cost-effectiveness and performance. While newer generation instances often provide
   *     better price-performance, Batch may choose an earlier generation instance family
   *     if it provides the optimal combination of availability, cost, and performance for
   *     your workload. For example, in an
   *     Amazon Web Services Region
   *     where both c6i and c7i instances are available, Batch might select c6i instances
   *     if they offer better cost-effectiveness for your specific job requirements. For more information on Batch instance types and Amazon Web Services Region availability, see <a href="https://docs.aws.amazon.com/batch/latest/userguide/instance-type-compute-table.html">Instance type compute table</a> in the <i>Batch User Guide</i>.</p>
   *             <p>Batch periodically updates your instances in default bundles to newer,
   *     more cost-effective options. Updates happen automatically without requiring any
   *     action from you. Your workloads continue running during updates with no interruption
   *    </p>
   *          </note>
   *          <note>
   *             <p>This parameter isn't applicable to jobs that are running on Fargate resources. Don't specify it.</p>
   *          </note>
   *          <note>
   *             <p>When you create a compute environment, the instance types that you select for the compute environment must
   *     share the same architecture. For example, you can't mix x86 and ARM instances in the same compute
   *     environment.</p>
   *          </note>
   * @public
   */
  instanceTypes?: string[] | undefined;

  /**
   * <p>The Amazon Machine Image (AMI) ID used for instances launched in the compute environment.
   *    This parameter is overridden by the <code>imageIdOverride</code> member of the
   *     <code>Ec2Configuration</code> structure.</p>
   *          <note>
   *             <p>This parameter isn't applicable to jobs that are running on Fargate resources. Don't specify it.</p>
   *          </note>
   *          <note>
   *             <p>The AMI that you choose for a compute environment must match the architecture of the instance types that
   *     you intend to use for that compute environment. For example, if your compute environment uses A1 instance types,
   *     the compute resource AMI that you choose must support ARM instances. Amazon ECS vends both x86 and ARM versions of the
   *     Amazon ECS-optimized Amazon Linux 2 AMI. For more information, see <a href="https://docs.aws.amazon.com/AmazonECS/latest/developerguide/ecs-optimized_AMI.html#ecs-optimized-ami-linux-variants.html">Amazon ECS-optimized
   *     Amazon Linux 2 AMI</a>
   *     in the <i>Amazon Elastic Container Service Developer Guide</i>.</p>
   *          </note>
   *
   * @deprecated This field is deprecated, use ec2Configuration[].imageIdOverride instead.
   * @public
   */
  imageId?: string | undefined;

  /**
   * <p>The VPC subnets where the compute resources are launched. These subnets must be within the
   *    same VPC. Fargate compute resources can contain up to 16 subnets. For more information, see
   *     <a href="https://docs.aws.amazon.com/vpc/latest/userguide/VPC_Subnets.html">VPCs and subnets</a>
   *    in the <i>Amazon VPC User Guide</i>.</p>
   *          <note>
   *             <p>Batch on Amazon EC2 and Batch on Amazon EKS support Local Zones. For more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/using-regions-availability-zones.html#concepts-local-zones"> Local
   *      Zones</a> in the <i>Amazon EC2 User Guide for Linux Instances</i>, <a href="https://docs.aws.amazon.com/eks/latest/userguide/local-zones.html">Amazon EKS and Amazon Web Services Local
   *      Zones</a> in the <i>Amazon EKS User Guide</i> and <a href="https://docs.aws.amazon.com/AmazonECS/latest/developerguide/cluster-regions-zones.html#clusters-local-zones"> Amazon ECS
   *      clusters in Local Zones, Wavelength Zones, and Amazon Web Services Outposts</a> in the <i>Amazon ECS
   *      Developer Guide</i>.</p>
   *             <p>Batch on Fargate doesn't currently support Local Zones.</p>
   *          </note>
   * @public
   */
  subnets: string[] | undefined;

  /**
   * <p>The Amazon EC2 security groups that are associated with instances launched in the compute
   *    environment. One or more security groups must be specified, either in
   *     <code>securityGroupIds</code> or using a launch template referenced in
   *     <code>launchTemplate</code>. This parameter is required for jobs that are running on Fargate
   *    resources and must contain at least one security group. Fargate doesn't support launch
   *    templates. If security groups are specified using both <code>securityGroupIds</code> and
   *     <code>launchTemplate</code>, the values in <code>securityGroupIds</code> are used.</p>
   * @public
   */
  securityGroupIds?: string[] | undefined;

  /**
   * <p>The Amazon EC2 key pair that's used for instances launched in the compute environment. You can
   *    use this key pair to log in to your instances with SSH.</p>
   *          <note>
   *             <p>This parameter isn't applicable to jobs that are running on Fargate resources. Don't specify it.</p>
   *          </note>
   * @public
   */
  ec2KeyPair?: string | undefined;

  /**
   * <p>The Amazon ECS instance profile applied to Amazon EC2 instances in a compute environment. This
   *    parameter is required for Amazon EC2 instances types. You can specify the short name or full Amazon Resource Name (ARN)
   *    of an instance profile. For example, <code>
   *                <i>ecsInstanceRole</i>
   *             </code> or
   *      <code>arn:aws:iam::<i><aws_account_id></i>:instance-profile/<i>ecsInstanceRole</i>
   *             </code>.
   *    For more information, see <a href="https://docs.aws.amazon.com/batch/latest/userguide/instance_IAM_role.html">Amazon ECS instance role</a> in the <i>Batch User Guide</i>.</p>
   *          <note>
   *             <p>This parameter isn't applicable to jobs that are running on Fargate resources. Don't specify it.</p>
   *          </note>
   * @public
   */
  instanceRole?: string | undefined;

  /**
   * <p>Key-value pair tags to be applied to Amazon EC2 resources that are launched in the compute
   *    environment. For Batch, these take the form of <code>"String1": "String2"</code>, where
   *     <code>String1</code> is the tag key and <code>String2</code> is the tag value (for example,
   *     <code>\{ "Name": "Batch Instance - C4OnDemand" \}</code>). This is helpful for recognizing your
   *    Batch instances in the Amazon EC2 console. Updating these tags requires an infrastructure update to
   *    the compute environment. For more information, see <a href="https://docs.aws.amazon.com/batch/latest/userguide/updating-compute-environments.html">Updating compute environments</a> in the
   *     <i>Batch User Guide</i>. These tags aren't seen when using the Batch
   *     <code>ListTagsForResource</code> API operation.</p>
   *          <note>
   *             <p>This parameter isn't applicable to jobs that are running on Fargate resources. Don't specify it.</p>
   *          </note>
   * @public
   */
  tags?: Record<string, string> | undefined;

  /**
   * <p>The Amazon EC2 placement group to associate with your compute resources. If you intend to submit
   *    multi-node parallel jobs to your compute environment, you should consider creating a cluster
   *    placement group and associate it with your compute resources. This keeps your multi-node parallel
   *    job on a logical grouping of instances within a single Availability Zone with high network flow
   *    potential. For more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/placement-groups.html">Placement groups</a> in the
   *     <i>Amazon EC2 User Guide for Linux Instances</i>.</p>
   *          <note>
   *             <p>This parameter isn't applicable to jobs that are running on Fargate resources. Don't specify it.</p>
   *          </note>
   * @public
   */
  placementGroup?: string | undefined;

  /**
   * <p>The maximum percentage that a Spot Instance price can be when compared with the On-Demand
   *    price for that instance type before instances are launched. For example, if your maximum
   *    percentage is 20%, then the Spot price must be less than 20% of the current On-Demand price for
   *    that Amazon EC2 instance. You always pay the lowest (market) price and never more than your maximum
   *    percentage. If you leave this field empty, the default value is 100% of the On-Demand
   *    price. For most use cases, we recommend leaving this field empty.</p>
   *          <note>
   *             <p>This parameter isn't applicable to jobs that are running on Fargate resources. Don't specify it.</p>
   *          </note>
   * @public
   */
  bidPercentage?: number | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the Amazon EC2 Spot Fleet IAM role applied to a <code>SPOT</code> compute
   *    environment. This role is required if the allocation strategy set to <code>BEST_FIT</code> or if
   *    the allocation strategy isn't specified. For more information, see <a href="https://docs.aws.amazon.com/batch/latest/userguide/spot_fleet_IAM_role.html">Amazon EC2 spot fleet role</a> in the
   *     <i>Batch User Guide</i>.</p>
   *          <note>
   *             <p>This parameter isn't applicable to jobs that are running on Fargate resources. Don't specify it.</p>
   *          </note>
   *          <important>
   *             <p>To tag your Spot Instances on creation, the Spot Fleet IAM role specified here must use
   *     the newer <b>AmazonEC2SpotFleetTaggingRole</b> managed policy. The
   *     previously recommended <b>AmazonEC2SpotFleetRole</b> managed policy
   *     doesn't have the required permissions to tag Spot Instances. For more information, see <a href="https://docs.aws.amazon.com/batch/latest/userguide/troubleshooting.html#spot-instance-no-tag">Spot instances
   *      not tagged on creation</a> in the <i>Batch User Guide</i>.</p>
   *          </important>
   * @public
   */
  spotIamFleetRole?: string | undefined;

  /**
   * <p>The launch template to use for your compute resources. Any other compute resource parameters
   *    that you specify in a <a href="https://docs.aws.amazon.com/batch/latest/APIReference/API_CreateComputeEnvironment.html">CreateComputeEnvironment</a> API operation override the same parameters in the launch
   *    template. You must specify either the launch template ID or launch template name in the request,
   *    but not both. For more information, see <a href="https://docs.aws.amazon.com/batch/latest/userguide/launch-templates.html">Launch template support</a> in the
   *     <i>Batch User Guide</i>.</p>
   *          <note>
   *             <p>This parameter isn't applicable to jobs that are running on Fargate resources. Don't specify it.</p>
   *          </note>
   * @public
   */
  launchTemplate?: LaunchTemplateSpecification | undefined;

  /**
   * <p>Provides information that's used to select Amazon Machine Images (AMIs) for Amazon EC2 instances
   *    in the compute environment. If <code>Ec2Configuration</code> isn't specified, the default is
   *     <code>ECS_AL2</code>.</p>
   *          <p>One or two values can be provided.</p>
   *          <note>
   *             <p>This parameter isn't applicable to jobs that are running on Fargate resources. Don't specify it.</p>
   *          </note>
   * @public
   */
  ec2Configuration?: Ec2Configuration[] | undefined;
}

/**
 * <p>Configuration for the Amazon EKS cluster that supports the Batch compute environment. The
 *    cluster must exist before the compute environment can be created.</p>
 * @public
 */
export interface EksConfiguration {
  /**
   * <p>The Amazon Resource Name (ARN) of the Amazon EKS cluster. An example is
   *      <code>arn:<i>aws</i>:eks:<i>us-east-1</i>:<i>123456789012</i>:cluster/<i>ClusterForBatch</i>
   *             </code>.
   *   </p>
   * @public
   */
  eksClusterArn: string | undefined;

  /**
   * <p>The namespace of the Amazon EKS cluster. Batch manages pods in this namespace. The value
   *    can't left empty or null. It must be fewer than 64 characters long, can't be set to
   *     <code>default</code>, can't start with "<code>kube-</code>," and must match this regular
   *    expression: <code>^[a-z0-9]([-a-z0-9]*[a-z0-9])?$</code>. For more information, see <a href="https://kubernetes.io/docs/concepts/overview/working-with-objects/namespaces/">Namespaces</a> in the Kubernetes documentation.</p>
   * @public
   */
  kubernetesNamespace: string | undefined;
}

/**
 * @public
 * @enum
 */
export const CEState = {
  DISABLED: "DISABLED",
  ENABLED: "ENABLED",
} as const;

/**
 * @public
 */
export type CEState = (typeof CEState)[keyof typeof CEState];

/**
 * @public
 * @enum
 */
export const CEType = {
  MANAGED: "MANAGED",
  UNMANAGED: "UNMANAGED",
} as const;

/**
 * @public
 */
export type CEType = (typeof CEType)[keyof typeof CEType];

/**
 * <p>Contains the parameters for <code>CreateComputeEnvironment</code>.</p>
 * @public
 */
export interface CreateComputeEnvironmentRequest {
  /**
   * <p>The name for your compute environment. It can be up to 128 characters long. It can contain uppercase and
   *  lowercase letters, numbers, hyphens (-), and underscores (_).</p>
   * @public
   */
  computeEnvironmentName: string | undefined;

  /**
   * <p>The type of the compute environment: <code>MANAGED</code> or <code>UNMANAGED</code>. For
   *       more information, see <a href="https://docs.aws.amazon.com/batch/latest/userguide/compute_environments.html">Compute Environments</a> in the <i>Batch User Guide</i>.</p>
   * @public
   */
  type: CEType | undefined;

  /**
   * <p>The state of the compute environment. If the state is <code>ENABLED</code>, then the
   *       compute environment accepts jobs from a queue and can scale out automatically based on
   *       queues.</p>
   *          <p>If the state is <code>ENABLED</code>, then the Batch scheduler can attempt to place jobs
   *       from an associated job queue on the compute resources within the environment. If the compute
   *       environment is managed, then it can scale its instances out or in automatically, based on the
   *       job queue demand.</p>
   *          <p>If the state is <code>DISABLED</code>, then the Batch scheduler doesn't attempt to place
   *       jobs within the environment. Jobs in a <code>STARTING</code> or <code>RUNNING</code> state
   *       continue to progress normally. Managed compute environments in the <code>DISABLED</code> state
   *       don't scale out. </p>
   *          <note>
   *             <p>Compute environments in a <code>DISABLED</code> state may continue to incur billing
   *         charges. To prevent additional charges, turn off and then delete the compute environment.
   *         For more information, see <a href="https://docs.aws.amazon.com/batch/latest/userguide/compute_environment_parameters.html#compute_environment_state">State</a> in the <i>Batch User Guide</i>.</p>
   *          </note>
   *          <p>When an instance is idle, the instance scales down to the <code>minvCpus</code> value.
   *       However, the instance size doesn't change. For example, consider a <code>c5.8xlarge</code>
   *       instance with a <code>minvCpus</code> value of <code>4</code> and a <code>desiredvCpus</code>
   *       value of <code>36</code>. This instance doesn't scale down to a <code>c5.large</code>
   *       instance.</p>
   * @public
   */
  state?: CEState | undefined;

  /**
   * <p>The maximum number of vCPUs for an unmanaged compute environment. This parameter is only
   *       used for fair-share scheduling to reserve vCPU capacity for new share identifiers. If this
   *       parameter isn't provided for a fair-share job queue, no vCPU capacity is reserved.</p>
   *          <note>
   *             <p>This parameter is only supported when the <code>type</code> parameter is set to
   *           <code>UNMANAGED</code>.</p>
   *          </note>
   * @public
   */
  unmanagedvCpus?: number | undefined;

  /**
   * <p>Details about the compute resources managed by the compute environment. This parameter is
   *       required for managed compute environments. For more information, see <a href="https://docs.aws.amazon.com/batch/latest/userguide/compute_environments.html">Compute Environments</a>
   *       in the <i>Batch User Guide</i>.</p>
   * @public
   */
  computeResources?: ComputeResource | undefined;

  /**
   * <p>The full Amazon Resource Name (ARN) of the IAM role that allows Batch to make calls to other Amazon Web Services
   *       services on your behalf. For more information, see <a href="https://docs.aws.amazon.com/batch/latest/userguide/service_IAM_role.html">Batch service IAM role</a> in the
   *         <i>Batch User Guide</i>.</p>
   *          <important>
   *             <p>If your account already created the Batch service-linked role, that role is used by
   *         default for your compute environment unless you specify a different role here. If the
   *         Batch service-linked role doesn't exist in your account, and no role is specified here,
   *         the service attempts to create the Batch service-linked role in your account.</p>
   *          </important>
   *          <p>If your specified role has a path other than <code>/</code>, then you must specify either
   *       the full role ARN (recommended) or prefix the role name with the path. For example, if a
   *       role with the name <code>bar</code> has a path of <code>/foo/</code>, specify
   *         <code>/foo/bar</code> as the role name. For more information, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_identifiers.html#identifiers-friendly-names">Friendly
   *         names and paths</a> in the <i>IAM User Guide</i>.</p>
   *          <note>
   *             <p>Depending on how you created your Batch service role, its ARN might contain the
   *           <code>service-role</code> path prefix. When you only specify the name of the service role,
   *         Batch assumes that your ARN doesn't use the <code>service-role</code> path prefix. Because
   *         of this, we recommend that you specify the full ARN of your service role when you create
   *         compute environments.</p>
   *          </note>
   * @public
   */
  serviceRole?: string | undefined;

  /**
   * <p>The tags that you apply to the compute environment to help you categorize and organize
   *       your resources. Each tag consists of a key and an optional value. For more information, see
   *         <a href="https://docs.aws.amazon.com/general/latest/gr/aws_tagging.html">Tagging Amazon Web Services
   *         Resources</a> in <i>Amazon Web Services General Reference</i>.</p>
   *          <p>These tags can be updated or removed using the <a href="https://docs.aws.amazon.com/batch/latest/APIReference/API_TagResource.html">TagResource</a> and <a href="https://docs.aws.amazon.com/batch/latest/APIReference/API_UntagResource.html">UntagResource</a> API operations. These tags don't propagate to the underlying compute
   *       resources.</p>
   * @public
   */
  tags?: Record<string, string> | undefined;

  /**
   * <p>The details for the Amazon EKS cluster that supports the compute environment.</p>
   *          <note>
   *             <p>To create a compute environment that uses EKS resources, the caller must have
   *         permissions to call <code>eks:DescribeCluster</code>.</p>
   *          </note>
   * @public
   */
  eksConfiguration?: EksConfiguration | undefined;

  /**
   * <p>Reserved.</p>
   * @public
   */
  context?: string | undefined;
}

/**
 * @public
 */
export interface CreateComputeEnvironmentResponse {
  /**
   * <p>The name of the compute environment. It can be up to 128 characters long. It can contain uppercase and
   *  lowercase letters, numbers, hyphens (-), and underscores (_).</p>
   * @public
   */
  computeEnvironmentName?: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the compute environment.</p>
   * @public
   */
  computeEnvironmentArn?: string | undefined;
}

/**
 * @public
 */
export interface CreateConsumableResourceRequest {
  /**
   * <p>The name of the consumable resource. Must be unique.</p>
   * @public
   */
  consumableResourceName: string | undefined;

  /**
   * <p>The total amount of the consumable resource that is available. Must be non-negative.</p>
   * @public
   */
  totalQuantity?: number | undefined;

  /**
   * <p>Indicates whether the resource is available to be re-used after a job completes. Can be
   *             one of: </p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>REPLENISHABLE</code> (default)</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>NON_REPLENISHABLE</code>
   *                </p>
   *             </li>
   *          </ul>
   * @public
   */
  resourceType?: string | undefined;

  /**
   * <p>The tags that you apply to the consumable resource to help you categorize and organize your
   *             resources. Each tag consists of a key and an optional value. For more information, see <a href="https://docs.aws.amazon.com/batch/latest/userguide/using-tags.html">Tagging your Batch resources</a>.</p>
   * @public
   */
  tags?: Record<string, string> | undefined;
}

/**
 * @public
 */
export interface CreateConsumableResourceResponse {
  /**
   * <p>The name of the consumable resource.</p>
   * @public
   */
  consumableResourceName: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the consumable resource.</p>
   * @public
   */
  consumableResourceArn: string | undefined;
}

/**
 * <p>The order that compute environments are tried in for job placement within a queue. Compute
 *    environments are tried in ascending order. For example, if two compute environments are
 *    associated with a job queue, the compute environment with a lower order integer value is tried
 *    for job placement first. Compute environments must be in the <code>VALID</code> state before you
 *    can associate them with a job queue. All of the compute environments must be either EC2
 *     (<code>EC2</code> or <code>SPOT</code>) or Fargate (<code>FARGATE</code> or
 *     <code>FARGATE_SPOT</code>); Amazon EC2 and Fargate compute environments can't be mixed.</p>
 *          <note>
 *             <p>All compute environments that are associated with a job queue must share the same
 *     architecture. Batch doesn't support mixing compute environment architecture types in a single
 *     job queue.</p>
 *          </note>
 * @public
 */
export interface ComputeEnvironmentOrder {
  /**
   * <p>The order of the compute environment. Compute environments are tried in ascending order. For
   *    example, if two compute environments are associated with a job queue, the compute environment
   *    with a lower <code>order</code> integer value is tried for job placement first.</p>
   * @public
   */
  order: number | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the compute environment.</p>
   * @public
   */
  computeEnvironment: string | undefined;
}

/**
 * @public
 * @enum
 */
export const JobQueueType = {
  ECS: "ECS",
  ECS_FARGATE: "ECS_FARGATE",
  EKS: "EKS",
  SAGEMAKER_TRAINING: "SAGEMAKER_TRAINING",
} as const;

/**
 * @public
 */
export type JobQueueType = (typeof JobQueueType)[keyof typeof JobQueueType];

/**
 * @public
 * @enum
 */
export const JobStateTimeLimitActionsAction = {
  CANCEL: "CANCEL",
  TERMINATE: "TERMINATE",
} as const;

/**
 * @public
 */
export type JobStateTimeLimitActionsAction =
  (typeof JobStateTimeLimitActionsAction)[keyof typeof JobStateTimeLimitActionsAction];

/**
 * @public
 * @enum
 */
export const JobStateTimeLimitActionsState = {
  RUNNABLE: "RUNNABLE",
} as const;

/**
 * @public
 */
export type JobStateTimeLimitActionsState =
  (typeof JobStateTimeLimitActionsState)[keyof typeof JobStateTimeLimitActionsState];

/**
 * <p>Specifies an action that Batch will take after the job has remained at the head of the queue in the specified state for longer than the specified time.</p>
 * @public
 */
export interface JobStateTimeLimitAction {
  /**
   * <p>The reason to log for the action being taken.</p>
   * @public
   */
  reason: string | undefined;

  /**
   * <p>The state of the job needed to trigger the action. The only supported value is <code>RUNNABLE</code>.</p>
   * @public
   */
  state: JobStateTimeLimitActionsState | undefined;

  /**
   * <p>The approximate amount of time, in seconds, that must pass with the job in the specified state before the action
   *    is taken. The minimum value is 600 (10 minutes) and the maximum value is 86,400 (24 hours).</p>
   * @public
   */
  maxTimeSeconds: number | undefined;

  /**
   * <p>The action to take when a job is at the head of the job queue in the specified state for the specified period of
   *    time. The only supported value is <code>CANCEL</code>, which will cancel the job.</p>
   * @public
   */
  action: JobStateTimeLimitActionsAction | undefined;
}

/**
 * <p>Specifies the order of a service environment for a job queue. This determines the priority order when multiple service environments are associated with the same job queue.</p>
 * @public
 */
export interface ServiceEnvironmentOrder {
  /**
   * <p>The order of the service environment. Job queues with a higher priority are evaluated first when associated with the same service environment.</p>
   * @public
   */
  order: number | undefined;

  /**
   * <p>The name or ARN of the service environment.</p>
   * @public
   */
  serviceEnvironment: string | undefined;
}

/**
 * @public
 * @enum
 */
export const JQState = {
  DISABLED: "DISABLED",
  ENABLED: "ENABLED",
} as const;

/**
 * @public
 */
export type JQState = (typeof JQState)[keyof typeof JQState];

/**
 * <p>Contains the parameters for <code>CreateJobQueue</code>.</p>
 * @public
 */
export interface CreateJobQueueRequest {
  /**
   * <p>The name of the job queue. It can be up to 128 letters long. It can contain uppercase and
   *       lowercase letters, numbers, hyphens (-), and underscores (_).</p>
   * @public
   */
  jobQueueName: string | undefined;

  /**
   * <p>The state of the job queue. If the job queue state is <code>ENABLED</code>, it is able to
   *       accept jobs. If the job queue state is <code>DISABLED</code>, new jobs can't be added to the
   *       queue, but jobs already in the queue can finish.</p>
   * @public
   */
  state?: JQState | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the fair-share scheduling policy. Job queues that don't have a fair-share scheduling policy are scheduled in a first-in, first-out (FIFO) model.  After a job queue has a fair-share scheduling policy, it can be replaced but can't be removed.</p>
   *          <p>The format is
   *           <code>aws:<i>Partition</i>:batch:<i>Region</i>:<i>Account</i>:scheduling-policy/<i>Name</i>
   *             </code>.</p>
   *          <p>An example is
   *         <code>aws:aws:batch:us-west-2:123456789012:scheduling-policy/MySchedulingPolicy</code>.</p>
   *          <p>A job queue without a fair-share scheduling policy is scheduled as a FIFO job queue and can't have a fair-share scheduling policy added. Jobs queues with a fair-share scheduling policy can have a maximum of 500 active share identifiers. When the limit has been reached, submissions of any jobs that add a new share identifier fail.</p>
   * @public
   */
  schedulingPolicyArn?: string | undefined;

  /**
   * <p>The priority of the job queue. Job queues with a higher priority (or a higher integer
   *       value for the <code>priority</code> parameter) are evaluated first when associated with the
   *       same compute environment. Priority is determined in descending order. For example, a job queue
   *       with a priority value of <code>10</code> is given scheduling preference over a job queue with
   *       a priority value of <code>1</code>. All of the compute environments must be either EC2
   *         (<code>EC2</code> or <code>SPOT</code>) or Fargate (<code>FARGATE</code> or
   *         <code>FARGATE_SPOT</code>); EC2 and Fargate compute environments can't be mixed.</p>
   * @public
   */
  priority: number | undefined;

  /**
   * <p>The set of compute environments mapped to a job queue and their order relative to each
   *       other. The job scheduler uses this parameter to determine which compute environment runs a
   *       specific job. Compute environments must be in the <code>VALID</code> state before you can
   *       associate them with a job queue. You can associate up to three compute environments with a job
   *       queue. All of the compute environments must be either EC2 (<code>EC2</code> or
   *         <code>SPOT</code>) or Fargate (<code>FARGATE</code> or <code>FARGATE_SPOT</code>); EC2 and
   *       Fargate compute environments can't be mixed.</p>
   *          <note>
   *             <p>All compute environments that are associated with a job queue must share the same
   *         architecture. Batch doesn't support mixing compute environment architecture types in a
   *         single job queue.</p>
   *          </note>
   * @public
   */
  computeEnvironmentOrder?: ComputeEnvironmentOrder[] | undefined;

  /**
   * <p>A list of service environments that this job queue can use to allocate jobs. All serviceEnvironments must have the same type. A job queue can't have both a serviceEnvironmentOrder and a computeEnvironmentOrder field.</p>
   * @public
   */
  serviceEnvironmentOrder?: ServiceEnvironmentOrder[] | undefined;

  /**
   * <p>The type of job queue. For service jobs that run on SageMaker Training, this value is <code>SAGEMAKER_TRAINING</code>. For regular container jobs, this value is <code>EKS</code>, <code>ECS</code>, or <code>ECS_FARGATE</code> depending on the compute environment.</p>
   * @public
   */
  jobQueueType?: JobQueueType | undefined;

  /**
   * <p>The tags that you apply to the job queue to help you categorize and organize your
   *       resources. Each tag consists of a key and an optional value. For more information, see <a href="https://docs.aws.amazon.com/batch/latest/userguide/using-tags.html">Tagging your Batch resources</a>
   *       in <i>Batch User Guide</i>.</p>
   * @public
   */
  tags?: Record<string, string> | undefined;

  /**
   * <p>The set of actions that Batch performs on jobs that remain at the head of the job queue in the specified state longer than specified times. Batch will perform each action after <code>maxTimeSeconds</code> has passed. (<b>Note</b>: The minimum value for maxTimeSeconds is 600 (10 minutes) and its maximum value is 86,400 (24 hours).)</p>
   * @public
   */
  jobStateTimeLimitActions?: JobStateTimeLimitAction[] | undefined;
}

/**
 * @public
 */
export interface CreateJobQueueResponse {
  /**
   * <p>The name of the job queue.</p>
   * @public
   */
  jobQueueName: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the job queue.</p>
   * @public
   */
  jobQueueArn: string | undefined;
}

/**
 * <p>Specifies the weights for the share identifiers for the fair-share policy. Share
 *    identifiers that aren't included have a default weight of <code>1.0</code>.</p>
 * @public
 */
export interface ShareAttributes {
  /**
   * <p>A share identifier or share identifier prefix. If the string ends with an asterisk
   *    (*), this entry specifies the weight factor to use for share identifiers that start with
   *    that prefix. The list of share identifiers in a fair-share policy can't overlap. For
   *    example, you can't have one that specifies a <code>shareIdentifier</code> of <code>UserA*</code>
   *    and another that specifies a <code>shareIdentifier</code> of <code>UserA1</code>.</p>
   *          <p>There can be no more than 500 share identifiers active in a job queue.</p>
   *          <p>The string is limited to 255 alphanumeric characters, and can be followed by an asterisk
   *    (*).</p>
   * @public
   */
  shareIdentifier: string | undefined;

  /**
   * <p>The weight factor for the share identifier. The default value is 1.0. A lower value has
   *    a higher priority for compute resources. For example, jobs that use a share identifier with a
   *    weight factor of 0.125 (1/8) get 8 times the compute resources of jobs that use a share
   *    identifier with a weight factor of 1.</p>
   *          <p>The smallest supported value is 0.0001, and the largest supported value is 999.9999.</p>
   * @public
   */
  weightFactor?: number | undefined;
}

/**
 * <p>The fair-share scheduling policy details.</p>
 * @public
 */
export interface FairsharePolicy {
  /**
   * <p>The amount of time (in seconds) to use to calculate a fair-share percentage for each
   *    share identifier in use. A value of zero (0) indicates the default minimum time window (600 seconds).
   *    The maximum supported value is 604800 (1 week).</p>
   *          <p>The decay allows for more recently run jobs to have more weight than jobs that ran earlier.
   *    Consider adjusting this number if you have jobs that (on average) run longer than ten minutes,
   *    or a large difference in job count or job run times between share identifiers, and the allocation
   *    of resources doesn't meet your needs.</p>
   * @public
   */
  shareDecaySeconds?: number | undefined;

  /**
   * <p>A value used to reserve some of the available maximum vCPU for share identifiers that
   *    aren't already used.</p>
   *          <p>The reserved ratio is
   *      <code>(<i>computeReservation</i>/100)^<i>ActiveFairShares</i>
   *             </code>
   *    where <code>
   *                <i>ActiveFairShares</i>
   *             </code> is the number of active share
   *    identifiers.</p>
   *          <p>For example, a <code>computeReservation</code> value of 50 indicates that Batch reserves
   *    50% of the maximum available vCPU if there's only one share identifier. It reserves 25% if
   *    there are two share identifiers. It reserves 12.5% if there are three share
   *    identifiers. A <code>computeReservation</code> value of 25 indicates that Batch should reserve
   *    25% of the maximum available vCPU if there's only one share identifier, 6.25% if there are
   *    two fair share identifiers, and 1.56% if there are three share identifiers.</p>
   *          <p>The minimum value is 0 and the maximum value is 99.</p>
   * @public
   */
  computeReservation?: number | undefined;

  /**
   * <p>An array of <code>SharedIdentifier</code> objects that contain the weights for the
   *    share identifiers for the fair-share policy. Share identifiers that aren't included have a
   *    default weight of <code>1.0</code>.</p>
   * @public
   */
  shareDistribution?: ShareAttributes[] | undefined;
}

/**
 * <p>Contains the parameters for <code>CreateSchedulingPolicy</code>.</p>
 * @public
 */
export interface CreateSchedulingPolicyRequest {
  /**
   * <p>The name of the fair-share scheduling policy. It can be up to 128 letters long. It can contain
   *       uppercase and lowercase letters, numbers, hyphens (-), and underscores (_).</p>
   * @public
   */
  name: string | undefined;

  /**
   * <p>The fair-share scheduling policy details.</p>
   * @public
   */
  fairsharePolicy?: FairsharePolicy | undefined;

  /**
   * <p>The tags that you apply to the scheduling policy to help you categorize and organize your
   *       resources. Each tag consists of a key and an optional value. For more information, see <a href="https://docs.aws.amazon.com/general/latest/gr/aws_tagging.html">Tagging Amazon Web Services
   *         Resources</a> in <i>Amazon Web Services General Reference</i>.</p>
   *          <p>These tags can be updated or removed using the <a href="https://docs.aws.amazon.com/batch/latest/APIReference/API_TagResource.html">TagResource</a> and <a href="https://docs.aws.amazon.com/batch/latest/APIReference/API_UntagResource.html">UntagResource</a> API operations.</p>
   * @public
   */
  tags?: Record<string, string> | undefined;
}

/**
 * @public
 */
export interface CreateSchedulingPolicyResponse {
  /**
   * <p>The name of the scheduling policy.</p>
   * @public
   */
  name: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the scheduling policy. The format is
   *           <code>aws:<i>Partition</i>:batch:<i>Region</i>:<i>Account</i>:scheduling-policy/<i>Name</i>
   *             </code>.
   *       For example,
   *         <code>aws:aws:batch:us-west-2:123456789012:scheduling-policy/MySchedulingPolicy</code>.</p>
   * @public
   */
  arn: string | undefined;
}

/**
 * <p>Defines the capacity limit for a service environment. This structure specifies the maximum amount of resources that can be used by service jobs in the environment.</p>
 * @public
 */
export interface CapacityLimit {
  /**
   * <p>The maximum capacity available for the service environment. This value represents the maximum amount of resources that can be allocated to service jobs.</p>
   *          <p>For example, <code>maxCapacity=50</code>, <code>capacityUnit=NUM_INSTANCES</code>. This indicates that the
   *             maximum number of instances that can be run on this service environment is 50. You could
   *             then run 5 SageMaker Training jobs that each use 10 instances. However, if you submit another job that
   *             requires 10 instances, it will wait in the queue.</p>
   * @public
   */
  maxCapacity?: number | undefined;

  /**
   * <p>The unit of measure for the capacity limit. This defines how the maxCapacity value should be interpreted. For <code>SAGEMAKER_TRAINING</code> jobs, use <code>NUM_INSTANCES</code>.</p>
   * @public
   */
  capacityUnit?: string | undefined;
}

/**
 * @public
 * @enum
 */
export const ServiceEnvironmentType = {
  SAGEMAKER_TRAINING: "SAGEMAKER_TRAINING",
} as const;

/**
 * @public
 */
export type ServiceEnvironmentType = (typeof ServiceEnvironmentType)[keyof typeof ServiceEnvironmentType];

/**
 * @public
 * @enum
 */
export const ServiceEnvironmentState = {
  DISABLED: "DISABLED",
  ENABLED: "ENABLED",
} as const;

/**
 * @public
 */
export type ServiceEnvironmentState = (typeof ServiceEnvironmentState)[keyof typeof ServiceEnvironmentState];

/**
 * @public
 */
export interface CreateServiceEnvironmentRequest {
  /**
   * <p>The name for the service environment. It can be up to 128 characters long and can contain letters, numbers, hyphens (-), and underscores (_).</p>
   * @public
   */
  serviceEnvironmentName: string | undefined;

  /**
   * <p>The type of service environment. For SageMaker Training jobs, specify <code>SAGEMAKER_TRAINING</code>.</p>
   * @public
   */
  serviceEnvironmentType: ServiceEnvironmentType | undefined;

  /**
   * <p>The state of the service environment. Valid values are <code>ENABLED</code> and <code>DISABLED</code>. The default value is <code>ENABLED</code>.</p>
   * @public
   */
  state?: ServiceEnvironmentState | undefined;

  /**
   * <p>The capacity limits for the service environment. The number of instances a job consumes is the total number of instances requested in the submit training job request resource configuration.</p>
   * @public
   */
  capacityLimits: CapacityLimit[] | undefined;

  /**
   * <p>The tags that you apply to the service environment to help you categorize and organize your resources. Each tag consists of a key and an optional value. For more information, see <a href="https://docs.aws.amazon.com/batch/latest/userguide/using-tags.html">Tagging your Batch resources</a>.</p>
   * @public
   */
  tags?: Record<string, string> | undefined;
}

/**
 * @public
 */
export interface CreateServiceEnvironmentResponse {
  /**
   * <p>The name of the service environment.</p>
   * @public
   */
  serviceEnvironmentName: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the service environment.</p>
   * @public
   */
  serviceEnvironmentArn: string | undefined;
}

/**
 * <p>Contains the parameters for <code>DeleteComputeEnvironment</code>.</p>
 * @public
 */
export interface DeleteComputeEnvironmentRequest {
  /**
   * <p>The name or Amazon Resource Name (ARN) of the compute environment to delete.</p>
   * @public
   */
  computeEnvironment: string | undefined;
}

/**
 * @public
 */
export interface DeleteComputeEnvironmentResponse {}

/**
 * @public
 */
export interface DeleteConsumableResourceRequest {
  /**
   * <p>The name or ARN of the consumable resource that will be deleted.</p>
   * @public
   */
  consumableResource: string | undefined;
}

/**
 * @public
 */
export interface DeleteConsumableResourceResponse {}

/**
 * <p>Contains the parameters for <code>DeleteJobQueue</code>.</p>
 * @public
 */
export interface DeleteJobQueueRequest {
  /**
   * <p>The short name or full Amazon Resource Name (ARN) of the queue to delete.</p>
   * @public
   */
  jobQueue: string | undefined;
}

/**
 * @public
 */
export interface DeleteJobQueueResponse {}

/**
 * <p>Contains the parameters for <code>DeleteSchedulingPolicy</code>.</p>
 * @public
 */
export interface DeleteSchedulingPolicyRequest {
  /**
   * <p>The Amazon Resource Name (ARN) of the scheduling policy to delete.</p>
   * @public
   */
  arn: string | undefined;
}

/**
 * @public
 */
export interface DeleteSchedulingPolicyResponse {}

/**
 * @public
 */
export interface DeleteServiceEnvironmentRequest {
  /**
   * <p>The name or ARN of the service environment to delete.</p>
   * @public
   */
  serviceEnvironment: string | undefined;
}

/**
 * @public
 */
export interface DeleteServiceEnvironmentResponse {}

/**
 * @public
 */
export interface DeregisterJobDefinitionRequest {
  /**
   * <p>The name and revision (<code>name:revision</code>) or full Amazon Resource Name (ARN) of the job definition
   *       to deregister.</p>
   * @public
   */
  jobDefinition: string | undefined;
}

/**
 * @public
 */
export interface DeregisterJobDefinitionResponse {}

/**
 * <p>Contains the parameters for <code>DescribeComputeEnvironments</code>.</p>
 * @public
 */
export interface DescribeComputeEnvironmentsRequest {
  /**
   * <p>A list of up to 100 compute environment names or full Amazon Resource Name (ARN) entries.</p>
   * @public
   */
  computeEnvironments?: string[] | undefined;

  /**
   * <p>The maximum number of cluster results returned by <code>DescribeComputeEnvironments</code>
   *       in paginated output. When this parameter is used, <code>DescribeComputeEnvironments</code>
   *       only returns <code>maxResults</code> results in a single page along with a
   *         <code>nextToken</code> response element. The remaining results of the initial request can be
   *       seen by sending another <code>DescribeComputeEnvironments</code> request with the returned
   *         <code>nextToken</code> value. This value can be between 1 and
   *       100. If this parameter isn't used, then <code>DescribeComputeEnvironments</code>
   *       returns up to 100 results and a <code>nextToken</code> value if
   *       applicable.</p>
   * @public
   */
  maxResults?: number | undefined;

  /**
   * <p>The <code>nextToken</code> value returned from a previous paginated
   *         <code>DescribeComputeEnvironments</code> request where <code>maxResults</code> was used and
   *       the results exceeded the value of that parameter. Pagination continues from the end of the
   *       previous results that returned the <code>nextToken</code> value. This value is
   *         <code>null</code> when there are no more results to return.</p>
   *          <note>
   *             <p>Treat this token as an opaque identifier that's only used to
   *  retrieve the next items in a list and not for other programmatic purposes.</p>
   *          </note>
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * @public
 * @enum
 */
export const OrchestrationType = {
  ECS: "ECS",
  EKS: "EKS",
} as const;

/**
 * @public
 */
export type OrchestrationType = (typeof OrchestrationType)[keyof typeof OrchestrationType];

/**
 * @public
 * @enum
 */
export const CEStatus = {
  CREATING: "CREATING",
  DELETED: "DELETED",
  DELETING: "DELETING",
  INVALID: "INVALID",
  UPDATING: "UPDATING",
  VALID: "VALID",
} as const;

/**
 * @public
 */
export type CEStatus = (typeof CEStatus)[keyof typeof CEStatus];

/**
 * <p>Specifies the infrastructure update policy for the Amazon EC2 compute environment. For more information
 *    about infrastructure updates, see <a href="https://docs.aws.amazon.com/batch/latest/userguide/updating-compute-environments.html">Updating compute environments</a> in the
 *     <i>Batch User Guide</i>.</p>
 * @public
 */
export interface UpdatePolicy {
  /**
   * <p>Specifies whether jobs are automatically terminated when the compute environment
   *    infrastructure is updated. The default value is <code>false</code>.</p>
   * @public
   */
  terminateJobsOnUpdate?: boolean | undefined;

  /**
   * <p>Specifies the job timeout (in minutes) when the compute environment infrastructure is
   *    updated. The default value is 30.</p>
   * @public
   */
  jobExecutionTimeoutMinutes?: number | undefined;
}

/**
 * <p>An object that represents an Batch compute environment.</p>
 * @public
 */
export interface ComputeEnvironmentDetail {
  /**
   * <p>The name of the compute environment. It can be up to 128 characters long. It can contain uppercase and
   *  lowercase letters, numbers, hyphens (-), and underscores (_).</p>
   * @public
   */
  computeEnvironmentName: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the compute environment.</p>
   * @public
   */
  computeEnvironmentArn: string | undefined;

  /**
   * <p>The maximum number of VCPUs expected to be used for an unmanaged compute environment.</p>
   * @public
   */
  unmanagedvCpus?: number | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the underlying Amazon ECS cluster that the compute environment uses.</p>
   * @public
   */
  ecsClusterArn?: string | undefined;

  /**
   * <p>The tags applied to the compute environment.</p>
   * @public
   */
  tags?: Record<string, string> | undefined;

  /**
   * <p>The type of the compute environment: <code>MANAGED</code> or <code>UNMANAGED</code>. For
   *    more information, see <a href="https://docs.aws.amazon.com/batch/latest/userguide/compute_environments.html">Compute environments</a> in the <i>Batch User Guide</i>.</p>
   * @public
   */
  type?: CEType | undefined;

  /**
   * <p>The state of the compute environment. The valid values are <code>ENABLED</code> or
   *     <code>DISABLED</code>.</p>
   *          <p>If the state is <code>ENABLED</code>, then the Batch scheduler can attempt to place jobs
   *    from an associated job queue on the compute resources within the environment. If the compute
   *    environment is managed, then it can scale its instances out or in automatically based on the job
   *    queue demand.</p>
   *          <p>If the state is <code>DISABLED</code>, then the Batch scheduler doesn't attempt to place
   *    jobs within the environment. Jobs in a <code>STARTING</code> or <code>RUNNING</code> state
   *    continue to progress normally. Managed compute environments in the <code>DISABLED</code> state
   *    don't scale out. </p>
   *          <note>
   *             <p>Compute environments in a <code>DISABLED</code> state may continue to incur billing
   *     charges. To prevent additional charges, turn off and then delete the compute environment. For
   *     more information, see <a href="https://docs.aws.amazon.com/batch/latest/userguide/compute_environment_parameters.html#compute_environment_state">State</a> in the <i>Batch User Guide</i>.</p>
   *          </note>
   *          <p>When an instance is idle, the instance scales down to the <code>minvCpus</code> value.
   *    However, the instance size doesn't change. For example, consider a <code>c5.8xlarge</code>
   *    instance with a <code>minvCpus</code> value of <code>4</code> and a <code>desiredvCpus</code>
   *    value of <code>36</code>. This instance doesn't scale down to a <code>c5.large</code>
   *    instance.</p>
   * @public
   */
  state?: CEState | undefined;

  /**
   * <p>The current status of the compute environment (for example, <code>CREATING</code> or
   *     <code>VALID</code>).</p>
   * @public
   */
  status?: CEStatus | undefined;

  /**
   * <p>A short, human-readable string to provide additional details for the current status of the
   *    compute environment.</p>
   * @public
   */
  statusReason?: string | undefined;

  /**
   * <p>The compute resources defined for the compute environment. For more information, see <a href="https://docs.aws.amazon.com/batch/latest/userguide/compute_environments.html">Compute environments</a> in
   *    the <i>Batch User Guide</i>.</p>
   * @public
   */
  computeResources?: ComputeResource | undefined;

  /**
   * <p>The service role that's associated with the compute environment that allows Batch to make
   *    calls to Amazon Web Services API operations on your behalf. For more information, see <a href="https://docs.aws.amazon.com/batch/latest/userguide/service_IAM_role.html">Batch service IAM role</a> in the
   *     <i>Batch User Guide</i>.</p>
   * @public
   */
  serviceRole?: string | undefined;

  /**
   * <p>Specifies the infrastructure update policy for the compute environment. For more information
   *    about infrastructure updates, see <a href="https://docs.aws.amazon.com/batch/latest/userguide/updating-compute-environments.html">Updating compute environments</a> in the
   *     <i>Batch User Guide</i>.</p>
   * @public
   */
  updatePolicy?: UpdatePolicy | undefined;

  /**
   * <p>The configuration for the Amazon EKS cluster that supports the Batch compute environment. Only
   *    specify this parameter if the <code>containerOrchestrationType</code> is <code>EKS</code>.</p>
   * @public
   */
  eksConfiguration?: EksConfiguration | undefined;

  /**
   * <p>The orchestration type of the compute environment. The valid values are <code>ECS</code>
   *    (default) or <code>EKS</code>.</p>
   * @public
   */
  containerOrchestrationType?: OrchestrationType | undefined;

  /**
   * <p>Unique identifier for the compute environment.</p>
   * @public
   */
  uuid?: string | undefined;

  /**
   * <p>Reserved.</p>
   * @public
   */
  context?: string | undefined;
}

/**
 * @public
 */
export interface DescribeComputeEnvironmentsResponse {
  /**
   * <p>The list of compute environments.</p>
   * @public
   */
  computeEnvironments?: ComputeEnvironmentDetail[] | undefined;

  /**
   * <p>The <code>nextToken</code> value to include in a future
   *         <code>DescribeComputeEnvironments</code> request. When the results of a
   *         <code>DescribeComputeEnvironments</code> request exceed <code>maxResults</code>, this value
   *       can be used to retrieve the next page of results. This value is <code>null</code> when there
   *       are no more results to return.</p>
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * @public
 */
export interface DescribeConsumableResourceRequest {
  /**
   * <p>The name or ARN of the consumable resource whose description will be returned.</p>
   * @public
   */
  consumableResource: string | undefined;
}

/**
 * @public
 */
export interface DescribeConsumableResourceResponse {
  /**
   * <p>The name of the consumable resource.</p>
   * @public
   */
  consumableResourceName: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the consumable resource.</p>
   * @public
   */
  consumableResourceArn: string | undefined;

  /**
   * <p>The total amount of the consumable resource that is available.</p>
   * @public
   */
  totalQuantity?: number | undefined;

  /**
   * <p>The amount of the consumable resource that is currently in use.</p>
   * @public
   */
  inUseQuantity?: number | undefined;

  /**
   * <p>The amount of the consumable resource that is currently available to use.</p>
   * @public
   */
  availableQuantity?: number | undefined;

  /**
   * <p>Indicates whether the resource is available to be re-used after a job completes. Can be
   *             one of: </p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>REPLENISHABLE</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>NON_REPLENISHABLE</code>
   *                </p>
   *             </li>
   *          </ul>
   * @public
   */
  resourceType?: string | undefined;

  /**
   * <p>The Unix timestamp (in milliseconds) for when the consumable resource was created.</p>
   * @public
   */
  createdAt?: number | undefined;

  /**
   * <p>The tags that you apply to the consumable resource to help you categorize and organize your
   *             resources. Each tag consists of a key and an optional value. For more information, see <a href="https://docs.aws.amazon.com/batch/latest/userguide/using-tags.html">Tagging your Batch resources</a>.</p>
   * @public
   */
  tags?: Record<string, string> | undefined;
}

/**
 * <p>Contains the parameters for <code>DescribeJobDefinitions</code>.</p>
 * @public
 */
export interface DescribeJobDefinitionsRequest {
  /**
   * <p>A list of up to 100 job definitions. Each entry in the list can either be an ARN in the
   *       format
   *         <code>arn:aws:batch:$\{Region\}:$\{Account\}:job-definition/$\{JobDefinitionName\}:$\{Revision\}</code>
   *       or a short version using the form <code>$\{JobDefinitionName\}:$\{Revision\}</code>. This
   *       parameter can't be used with other parameters.</p>
   * @public
   */
  jobDefinitions?: string[] | undefined;

  /**
   * <p>The maximum number of results returned by <code>DescribeJobDefinitions</code> in paginated
   *       output. When this parameter is used, <code>DescribeJobDefinitions</code> only returns
   *         <code>maxResults</code> results in a single page and a <code>nextToken</code> response
   *       element. The remaining results of the initial request can be seen by sending another
   *         <code>DescribeJobDefinitions</code> request with the returned <code>nextToken</code> value.
   *       This value can be between 1 and 100. If this parameter isn't
   *       used, then <code>DescribeJobDefinitions</code> returns up to 100 results and
   *       a <code>nextToken</code> value if applicable.</p>
   * @public
   */
  maxResults?: number | undefined;

  /**
   * <p>The name of the job definition to describe.</p>
   * @public
   */
  jobDefinitionName?: string | undefined;

  /**
   * <p>The status used to filter job definitions.</p>
   * @public
   */
  status?: string | undefined;

  /**
   * <p>The <code>nextToken</code> value returned from a previous paginated
   *         <code>DescribeJobDefinitions</code> request where <code>maxResults</code> was used and the
   *       results exceeded the value of that parameter. Pagination continues from the end of the
   *       previous results that returned the <code>nextToken</code> value. This value is
   *         <code>null</code> when there are no more results to return.</p>
   *          <note>
   *             <p>Treat this token as an opaque identifier that's only used to
   *  retrieve the next items in a list and not for other programmatic purposes.</p>
   *          </note>
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * <p>Information about a consumable resource required to run a job.</p>
 * @public
 */
export interface ConsumableResourceRequirement {
  /**
   * <p>The name or ARN of the consumable resource.</p>
   * @public
   */
  consumableResource?: string | undefined;

  /**
   * <p>The quantity of the consumable resource that is needed.</p>
   * @public
   */
  quantity?: number | undefined;
}

/**
 * <p>Contains a list of consumable resources required by a job.</p>
 * @public
 */
export interface ConsumableResourceProperties {
  /**
   * <p>The list of consumable resources required by a job.</p>
   * @public
   */
  consumableResourceList?: ConsumableResourceRequirement[] | undefined;
}

/**
 * <p>A key-value pair object.</p>
 * @public
 */
export interface KeyValuePair {
  /**
   * <p>The name of the key-value pair. For environment variables, this is the name of the
   *    environment variable.</p>
   * @public
   */
  name?: string | undefined;

  /**
   * <p>The value of the key-value pair. For environment variables, this is the value of the
   *    environment variable.</p>
   * @public
   */
  value?: string | undefined;
}

/**
 * <p>The amount of ephemeral storage to allocate for the task. This parameter is used to expand
 *    the total amount of ephemeral storage available, beyond the default amount, for tasks hosted on
 *    Fargate.</p>
 * @public
 */
export interface EphemeralStorage {
  /**
   * <p>The total amount, in GiB, of ephemeral storage to set for the task. The minimum supported
   *    value is <code>21</code> GiB and the maximum supported value is <code>200</code> GiB.</p>
   * @public
   */
  sizeInGiB: number | undefined;
}

/**
 * <p>The platform configuration for jobs that are running on Fargate resources. Jobs that run
 *    on Amazon EC2 resources must not specify this parameter.</p>
 * @public
 */
export interface FargatePlatformConfiguration {
  /**
   * <p>The Fargate platform version where the jobs are running. A platform version is
   *    specified only for jobs that are running on Fargate resources. If one isn't specified, the
   *     <code>LATEST</code> platform version is used by default. This uses a recent, approved version of
   *    the Fargate platform for compute resources. For more information, see <a href="https://docs.aws.amazon.com/AmazonECS/latest/developerguide/platform_versions.html">Fargate
   *     platform versions</a> in the <i>Amazon Elastic Container Service Developer Guide</i>.</p>
   * @public
   */
  platformVersion?: string | undefined;
}

/**
 * @public
 * @enum
 */
export const DeviceCgroupPermission = {
  MKNOD: "MKNOD",
  READ: "READ",
  WRITE: "WRITE",
} as const;

/**
 * @public
 */
export type DeviceCgroupPermission = (typeof DeviceCgroupPermission)[keyof typeof DeviceCgroupPermission];

/**
 * <p>An object that represents a container instance host device.</p>
 *          <note>
 *             <p>This object isn't applicable to jobs that are running on Fargate resources and shouldn't
 *     be provided.</p>
 *          </note>
 * @public
 */
export interface Device {
  /**
   * <p>The path for the device on the host container instance.</p>
   * @public
   */
  hostPath: string | undefined;

  /**
   * <p>The path inside the container that's used to expose the host device. By default, the
   *     <code>hostPath</code> value is used.</p>
   * @public
   */
  containerPath?: string | undefined;

  /**
   * <p>The explicit permissions to provide to the container for the device. By default, the
   *    container has permissions for <code>read</code>, <code>write</code>, and <code>mknod</code> for
   *    the device.</p>
   * @public
   */
  permissions?: DeviceCgroupPermission[] | undefined;
}

/**
 * <p>The container path, mount options, and size of the <code>tmpfs</code> mount.</p>
 *          <note>
 *             <p>This object isn't applicable to jobs that are running on Fargate resources.</p>
 *          </note>
 * @public
 */
export interface Tmpfs {
  /**
   * <p>The absolute file path in the container where the <code>tmpfs</code> volume is
   *    mounted.</p>
   * @public
   */
  containerPath: string | undefined;

  /**
   * <p>The size (in MiB) of the <code>tmpfs</code> volume.</p>
   * @public
   */
  size: number | undefined;

  /**
   * <p>The list of <code>tmpfs</code> volume mount options.</p>
   *          <p>Valid values: "<code>defaults</code>" | "<code>ro</code>" | "<code>rw</code>" |
   *     "<code>suid</code>" | "<code>nosuid</code>" | "<code>dev</code>" | "<code>nodev</code>" |
   *     "<code>exec</code>" | "<code>noexec</code>" | "<code>sync</code>" | "<code>async</code>" |
   *     "<code>dirsync</code>" | "<code>remount</code>" | "<code>mand</code>" | "<code>nomand</code>" |
   *     "<code>atime</code>" | "<code>noatime</code>" | "<code>diratime</code>" |
   *     "<code>nodiratime</code>" | "<code>bind</code>" | "<code>rbind" | "unbindable" | "runbindable" |
   *     "private" | "rprivate" | "shared" | "rshared" | "slave" | "rslave" | "relatime</code>" |
   *     "<code>norelatime</code>" | "<code>strictatime</code>" | "<code>nostrictatime</code>" |
   *     "<code>mode</code>" | "<code>uid</code>" | "<code>gid</code>" | "<code>nr_inodes</code>" |
   *     "<code>nr_blocks</code>" | "<code>mpol</code>"</p>
   * @public
   */
  mountOptions?: string[] | undefined;
}

/**
 * <p>Linux-specific modifications that are applied to the container, such as details for device
 *    mappings.</p>
 * @public
 */
export interface LinuxParameters {
  /**
   * <p>Any of the host devices to expose to the container. This parameter maps to
   *     <code>Devices</code> in the <a href="https://docs.docker.com/engine/api/v1.23/#create-a-container">Create a container</a> section of the <a href="https://docs.docker.com/engine/api/v1.23/">Docker Remote API</a>
   *    and the <code>--device</code> option to <a href="https://docs.docker.com/engine/reference/run/">docker
   *    run</a>.</p>
   *          <note>
   *             <p>This parameter isn't applicable to jobs that are running on Fargate resources. Don't
   *     provide it for these jobs.</p>
   *          </note>
   * @public
   */
  devices?: Device[] | undefined;

  /**
   * <p>If true, run an <code>init</code> process inside the container that forwards signals and
   *    reaps processes. This parameter maps to the <code>--init</code> option to <a href="https://docs.docker.com/engine/reference/run/">docker run</a>. This parameter requires version 1.25 of the Docker Remote API or greater on your
   *  container instance. To check the Docker Remote API version on your container instance, log in to your
   *  container instance and run the following command: <code>sudo docker version | grep "Server API version"</code>
   *          </p>
   * @public
   */
  initProcessEnabled?: boolean | undefined;

  /**
   * <p>The value for the size (in MiB) of the <code>/dev/shm</code> volume. This parameter maps to
   *    the <code>--shm-size</code> option to <a href="https://docs.docker.com/engine/reference/run/">docker
   *    run</a>.</p>
   *          <note>
   *             <p>This parameter isn't applicable to jobs that are running on Fargate resources. Don't
   *     provide it for these jobs.</p>
   *          </note>
   * @public
   */
  sharedMemorySize?: number | undefined;

  /**
   * <p>The container path, mount options, and size (in MiB) of the <code>tmpfs</code> mount. This
   *    parameter maps to the <code>--tmpfs</code> option to <a href="https://docs.docker.com/engine/reference/run/">docker
   *     run</a>.</p>
   *          <note>
   *             <p>This parameter isn't applicable to jobs that are running on Fargate resources. Don't
   *     provide this parameter for this resource type.</p>
   *          </note>
   * @public
   */
  tmpfs?: Tmpfs[] | undefined;

  /**
   * <p>The total amount of swap memory (in MiB) a container can use. This parameter is translated
   *    to the <code>--memory-swap</code> option to <a href="https://docs.docker.com/engine/reference/run/">docker
   *     run</a> where the value is the sum of the container memory plus the <code>maxSwap</code>
   *    value. For more information, see <a href="https://docs.docker.com/config/containers/resource_constraints/#--memory-swap-details">
   *                <code>--memory-swap</code> details</a> in the Docker documentation.</p>
   *          <p>If a <code>maxSwap</code> value of <code>0</code> is specified, the container doesn't use
   *    swap. Accepted values are <code>0</code> or any positive integer. If the <code>maxSwap</code>
   *    parameter is omitted, the container doesn't use the swap configuration for the container instance
   *    on which it runs. A <code>maxSwap</code> value must be set for the <code>swappiness</code>
   *    parameter to be used.</p>
   *          <note>
   *             <p>This parameter isn't applicable to jobs that are running on Fargate resources. Don't
   *     provide it for these jobs.</p>
   *          </note>
   * @public
   */
  maxSwap?: number | undefined;

  /**
   * <p>You can use this parameter to tune a container's memory swappiness behavior. A
   *     <code>swappiness</code> value of <code>0</code> causes swapping to not occur unless absolutely
   *    necessary. A <code>swappiness</code> value of <code>100</code> causes pages to be swapped
   *    aggressively. Valid values are whole numbers between <code>0</code> and <code>100</code>. If the
   *     <code>swappiness</code> parameter isn't specified, a default value of <code>60</code> is used.
   *    If a value isn't specified for <code>maxSwap</code>, then this parameter is ignored. If
   *     <code>maxSwap</code> is set to 0, the container doesn't use swap. This parameter maps to the
   *     <code>--memory-swappiness</code> option to <a href="https://docs.docker.com/engine/reference/run/">docker
   *     run</a>.</p>
   *          <p>Consider the following when you use a per-container swap configuration.</p>
   *          <ul>
   *             <li>
   *                <p>Swap space must be enabled and allocated on the container instance for the containers to
   *      use.</p>
   *                <note>
   *                   <p>By default, the Amazon ECS optimized AMIs don't have swap enabled. You must enable swap on the
   *       instance to use this feature. For more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/instance-store-swap-volumes.html">Instance store swap
   *        volumes</a> in the <i>Amazon EC2 User Guide for Linux Instances</i> or <a href="http://aws.amazon.com/premiumsupport/knowledge-center/ec2-memory-swap-file/">How do I
   *        allocate memory to work as swap space in an Amazon EC2 instance by using a swap
   *       file?</a>
   *                   </p>
   *                </note>
   *             </li>
   *             <li>
   *                <p>The swap space parameters are only supported for job definitions using EC2
   *      resources.</p>
   *             </li>
   *             <li>
   *                <p>If the <code>maxSwap</code> and <code>swappiness</code> parameters are omitted from a job
   *      definition, each container has a default <code>swappiness</code> value of 60. Moreover, the
   *      total swap usage is limited to two times the memory reservation of the container.</p>
   *             </li>
   *          </ul>
   *          <note>
   *             <p>This parameter isn't applicable to jobs that are running on Fargate resources. Don't
   *     provide it for these jobs.</p>
   *          </note>
   * @public
   */
  swappiness?: number | undefined;
}

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
 * <p>An object that represents the secret to expose to your container. Secrets can be exposed to
 *    a container in the following ways:</p>
 *          <ul>
 *             <li>
 *                <p>To inject sensitive data into your containers as environment variables, use the
 *       <code>secrets</code> container definition parameter.</p>
 *             </li>
 *             <li>
 *                <p>To reference sensitive information in the log configuration of a container, use the
 *       <code>secretOptions</code> container definition parameter.</p>
 *             </li>
 *          </ul>
 *          <p>For more information, see <a href="https://docs.aws.amazon.com/batch/latest/userguide/specifying-sensitive-data.html">Specifying sensitive data</a> in the
 *     <i>Batch User Guide</i>.</p>
 * @public
 */
export interface Secret {
  /**
   * <p>The name of the secret.</p>
   * @public
   */
  name: string | undefined;

  /**
   * <p>The secret to expose to the container. The supported values are either the full Amazon Resource Name (ARN) of
   *    the Secrets Manager secret or the full ARN of the parameter in the Amazon Web Services Systems Manager Parameter Store.</p>
   *          <note>
   *             <p>If the Amazon Web Services Systems Manager Parameter Store parameter exists in the same Region as the job you're
   *     launching, then you can use either the full Amazon Resource Name (ARN) or name of the parameter. If the parameter
   *     exists in a different Region, then the full ARN must be specified.</p>
   *          </note>
   * @public
   */
  valueFrom: string | undefined;
}

/**
 * <p>Log configuration options to send to a custom log driver for the container.</p>
 * @public
 */
export interface LogConfiguration {
  /**
   * <p>The log driver to use for the container. The valid values that are listed for this parameter
   *    are log drivers that the Amazon ECS container agent can communicate with by default.</p>
   *          <p>The supported log drivers are <code>awsfirelens</code>, <code>awslogs</code>, <code>fluentd</code>, <code>gelf</code>,
   *     <code>json-file</code>, <code>journald</code>, <code>logentries</code>, <code>syslog</code>, and
   *     <code>splunk</code>.</p>
   *          <note>
   *             <p>Jobs that are running on Fargate resources are restricted to the <code>awslogs</code> and
   *      <code>splunk</code> log drivers.</p>
   *          </note>
   *          <dl>
   *             <dt>awsfirelens</dt>
   *             <dd>
   *                <p>Specifies the firelens logging driver. For more information on configuring Firelens, see
   *        <a href="https://docs.aws.amazon.com/AmazonECS/latest/developerguide/using_firelens.html">Send
   *        Amazon ECS logs to an Amazon Web Services service or Amazon Web Services Partner</a> in the
   *        <i>Amazon Elastic Container Service Developer Guide</i>.</p>
   *             </dd>
   *             <dt>awslogs</dt>
   *             <dd>
   *                <p>Specifies the Amazon CloudWatch Logs logging driver. For more information, see <a href="https://docs.aws.amazon.com/batch/latest/userguide/using_awslogs.html">Using the awslogs log driver</a>
   *       in the <i>Batch User Guide</i> and <a href="https://docs.docker.com/config/containers/logging/awslogs/">Amazon CloudWatch Logs logging
   *        driver</a> in the Docker documentation.</p>
   *             </dd>
   *             <dt>fluentd</dt>
   *             <dd>
   *                <p>Specifies the Fluentd logging driver. For more information including usage and options,
   *       see <a href="https://docs.docker.com/config/containers/logging/fluentd/">Fluentd logging
   *        driver</a> in the <i>Docker documentation</i>.</p>
   *             </dd>
   *             <dt>gelf</dt>
   *             <dd>
   *                <p>Specifies the Graylog Extended Format (GELF) logging driver. For more information
   *       including usage and options, see <a href="https://docs.docker.com/config/containers/logging/gelf/">Graylog Extended Format logging
   *        driver</a> in the <i>Docker documentation</i>.</p>
   *             </dd>
   *             <dt>journald</dt>
   *             <dd>
   *                <p>Specifies the journald logging driver. For more information including usage and options,
   *       see <a href="https://docs.docker.com/config/containers/logging/journald/">Journald logging
   *        driver</a> in the <i>Docker documentation</i>.</p>
   *             </dd>
   *             <dt>json-file</dt>
   *             <dd>
   *                <p>Specifies the JSON file logging driver. For more information including usage and options,
   *       see <a href="https://docs.docker.com/config/containers/logging/json-file/">JSON File
   *        logging driver</a> in the <i>Docker documentation</i>.</p>
   *             </dd>
   *             <dt>splunk</dt>
   *             <dd>
   *                <p>Specifies the Splunk logging driver. For more information including usage and options,
   *       see <a href="https://docs.docker.com/config/containers/logging/splunk/">Splunk logging
   *        driver</a> in the <i>Docker documentation</i>.</p>
   *             </dd>
   *             <dt>syslog</dt>
   *             <dd>
   *                <p>Specifies the syslog logging driver. For more information including usage and options,
   *       see <a href="https://docs.docker.com/config/containers/logging/syslog/">Syslog logging
   *        driver</a> in the <i>Docker documentation</i>.</p>
   *             </dd>
   *          </dl>
   *          <note>
   *             <p>If you have a custom driver that's not listed earlier that you want to work with the Amazon ECS
   *     container agent, you can fork the Amazon ECS container agent project that's <a href="https://github.com/aws/amazon-ecs-agent">available on GitHub</a> and customize it to
   *     work with that driver. We encourage you to submit pull requests for changes that you want to
   *     have included. However, Amazon Web Services doesn't currently support running modified copies of this
   *     software.</p>
   *          </note>
   *          <p>This parameter requires version 1.18 of the Docker Remote API or greater on your
   *  container instance. To check the Docker Remote API version on your container instance, log in to your
   *  container instance and run the following command: <code>sudo docker version | grep "Server API version"</code>
   *          </p>
   * @public
   */
  logDriver: LogDriver | undefined;

  /**
   * <p>The configuration options to send to the log driver. This parameter requires version 1.19 of the Docker Remote API or greater on your
   *  container instance. To check the Docker Remote API version on your container instance, log in to your
   *  container instance and run the following command: <code>sudo docker version | grep "Server API version"</code>
   *          </p>
   * @public
   */
  options?: Record<string, string> | undefined;

  /**
   * <p>The secrets to pass to the log configuration. For more information, see <a href="https://docs.aws.amazon.com/batch/latest/userguide/specifying-sensitive-data.html">Specifying sensitive
   *     data</a> in the <i>Batch User Guide</i>.</p>
   * @public
   */
  secretOptions?: Secret[] | undefined;
}

/**
 * <p>Details for a Docker volume mount point that's used in a job's container properties. This
 *    parameter maps to <code>Volumes</code> in the <a href="https://docs.docker.com/engine/api/v1.43/#tag/Container/operation/ContainerCreate">Create a
 *     container</a> section of the <i>Docker Remote API</i> and the
 *     <code>--volume</code> option to docker run.</p>
 * @public
 */
export interface MountPoint {
  /**
   * <p>The path on the container where the host volume is mounted.</p>
   * @public
   */
  containerPath?: string | undefined;

  /**
   * <p>If this value is <code>true</code>, the container has read-only access to the volume.
   *    Otherwise, the container can write to the volume. The default value is <code>false</code>.</p>
   * @public
   */
  readOnly?: boolean | undefined;

  /**
   * <p>The name of the volume to mount.</p>
   * @public
   */
  sourceVolume?: string | undefined;
}

/**
 * <p>The network configuration for jobs that are running on Fargate resources. Jobs that are
 *    running on Amazon EC2 resources must not specify this parameter.</p>
 * @public
 */
export interface NetworkConfiguration {
  /**
   * <p>Indicates whether the job has a public IP address. For a job that's running on Fargate
   *    resources in a private subnet to send outbound traffic to the internet (for example, to pull
   *    container images), the private subnet requires a NAT gateway be attached to route requests to the
   *    internet. For more information, see <a href="https://docs.aws.amazon.com/AmazonECS/latest/developerguide/task-networking.html">Amazon ECS task networking</a> in the
   *     <i>Amazon Elastic Container Service Developer Guide</i>. The default value is "<code>DISABLED</code>".</p>
   * @public
   */
  assignPublicIp?: AssignPublicIp | undefined;
}

/**
 * <p>The repository credentials for private registry authentication.</p>
 * @public
 */
export interface RepositoryCredentials {
  /**
   * <p>The Amazon Resource Name (ARN) of the secret containing the private repository
   *    credentials.</p>
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
  MEMORY: "MEMORY",
  VCPU: "VCPU",
} as const;

/**
 * @public
 */
export type ResourceType = (typeof ResourceType)[keyof typeof ResourceType];

/**
 * <p>The type and amount of a resource to assign to a container. The supported resources include
 *     <code>GPU</code>, <code>MEMORY</code>, and <code>VCPU</code>.</p>
 * @public
 */
export interface ResourceRequirement {
  /**
   * <p>The quantity of the specified resource to reserve for the container. The values vary based
   *    on the <code>type</code> specified.</p>
   *          <dl>
   *             <dt>type="GPU"</dt>
   *             <dd>
   *                <p>The number of physical GPUs to reserve for the container. Make sure that the number of
   *       GPUs reserved for all containers in a job doesn't exceed the number of available GPUs on the
   *       compute resource that the job is launched on.</p>
   *                <note>
   *                   <p>GPUs aren't available for jobs that are running on Fargate resources.</p>
   *                </note>
   *             </dd>
   *             <dt>type="MEMORY"</dt>
   *             <dd>
   *                <p>The memory hard limit (in MiB) present to the container. This parameter is supported for
   *       jobs that are running on Amazon EC2 resources. If your container attempts to exceed the memory
   *       specified, the container is terminated. This parameter maps to <code>Memory</code> in the
   *       <a href="https://docs.docker.com/engine/api/v1.23/#create-a-container">Create a container</a> section of the <a href="https://docs.docker.com/engine/api/v1.23/">Docker Remote API</a> and the
   *        <code>--memory</code> option to <a href="https://docs.docker.com/engine/reference/run/">docker run</a>. You
   *       must specify at least 4 MiB of memory for a job. This is required but can be specified in
   *       several places for multi-node parallel (MNP) jobs. It must be specified for each node at least
   *       once. This parameter maps to <code>Memory</code> in the <a href="https://docs.docker.com/engine/api/v1.23/#create-a-container">Create a container</a>
   *       section of the <a href="https://docs.docker.com/engine/api/v1.23/">Docker Remote API</a> and the <code>--memory</code> option to <a href="https://docs.docker.com/engine/reference/run/">docker run</a>.</p>
   *                <note>
   *                   <p>If you're trying to maximize your resource utilization by providing your jobs as much
   *        memory as possible for a particular instance type, see <a href="https://docs.aws.amazon.com/batch/latest/userguide/memory-management.html">Memory management</a> in the
   *         <i>Batch User Guide</i>.</p>
   *                </note>
   *                <p>For jobs that are running on Fargate resources, then <code>value</code> is the hard
   *       limit (in MiB), and must match one of the supported values and the <code>VCPU</code> values
   *       must be one of the values supported for that memory value.</p>
   *                <dl>
   *                   <dt>value = 512</dt>
   *                   <dd>
   *                      <p>
   *                         <code>VCPU</code> = 0.25</p>
   *                   </dd>
   *                   <dt>value = 1024</dt>
   *                   <dd>
   *                      <p>
   *                         <code>VCPU</code> = 0.25 or 0.5</p>
   *                   </dd>
   *                   <dt>value = 2048</dt>
   *                   <dd>
   *                      <p>
   *                         <code>VCPU</code> = 0.25, 0.5, or 1</p>
   *                   </dd>
   *                   <dt>value = 3072</dt>
   *                   <dd>
   *                      <p>
   *                         <code>VCPU</code> = 0.5, or 1</p>
   *                   </dd>
   *                   <dt>value = 4096</dt>
   *                   <dd>
   *                      <p>
   *                         <code>VCPU</code> = 0.5, 1, or 2</p>
   *                   </dd>
   *                   <dt>value = 5120, 6144, or 7168</dt>
   *                   <dd>
   *                      <p>
   *                         <code>VCPU</code> = 1 or 2</p>
   *                   </dd>
   *                   <dt>value = 8192</dt>
   *                   <dd>
   *                      <p>
   *                         <code>VCPU</code> = 1, 2, or 4</p>
   *                   </dd>
   *                   <dt>value = 9216, 10240, 11264, 12288, 13312, 14336, or 15360</dt>
   *                   <dd>
   *                      <p>
   *                         <code>VCPU</code> = 2 or 4</p>
   *                   </dd>
   *                   <dt>value = 16384</dt>
   *                   <dd>
   *                      <p>
   *                         <code>VCPU</code> = 2, 4, or 8</p>
   *                   </dd>
   *                   <dt>value = 17408, 18432, 19456, 21504, 22528, 23552, 25600, 26624, 27648, 29696, or 30720</dt>
   *                   <dd>
   *                      <p>
   *                         <code>VCPU</code> = 4</p>
   *                   </dd>
   *                   <dt>value = 20480, 24576, or 28672</dt>
   *                   <dd>
   *                      <p>
   *                         <code>VCPU</code> = 4 or 8</p>
   *                   </dd>
   *                   <dt>value = 36864, 45056, 53248, or 61440</dt>
   *                   <dd>
   *                      <p>
   *                         <code>VCPU</code> = 8</p>
   *                   </dd>
   *                   <dt>value = 32768, 40960, 49152, or 57344</dt>
   *                   <dd>
   *                      <p>
   *                         <code>VCPU</code> = 8 or 16</p>
   *                   </dd>
   *                   <dt>value = 65536, 73728, 81920, 90112, 98304, 106496, 114688, or 122880</dt>
   *                   <dd>
   *                      <p>
   *                         <code>VCPU</code> = 16</p>
   *                   </dd>
   *                </dl>
   *             </dd>
   *             <dt>type="VCPU"</dt>
   *             <dd>
   *                <p>The number of vCPUs reserved for the container. This parameter maps to
   *        <code>CpuShares</code> in the <a href="https://docs.docker.com/engine/api/v1.23/#create-a-container">Create a container</a> section of the
   *       <a href="https://docs.docker.com/engine/api/v1.23/">Docker Remote API</a> and the <code>--cpu-shares</code> option to <a href="https://docs.docker.com/engine/reference/run/">docker run</a>. Each vCPU is equivalent to 1,024 CPU shares.
   *       For Amazon EC2 resources, you must specify at least one vCPU. This is required but can be specified
   *       in several places; it must be specified for each node at least once.</p>
   *                <p>The default for the Fargate On-Demand vCPU resource count quota is 6 vCPUs. For more
   *       information about Fargate quotas, see <a href="https://docs.aws.amazon.com/general/latest/gr/ecs-service.html#service-quotas-fargate">Fargate quotas</a>
   *       in the <i>Amazon Web Services General Reference</i>.</p>
   *                <p>For jobs that are running on Fargate resources, then <code>value</code> must match one
   *       of the supported values and the <code>MEMORY</code> values must be one of the values supported
   *       for that <code>VCPU</code> value. The supported values are 0.25, 0.5, 1, 2, 4, 8, and
   *       16</p>
   *                <dl>
   *                   <dt>value = 0.25</dt>
   *                   <dd>
   *                      <p>
   *                         <code>MEMORY</code> = 512, 1024, or 2048</p>
   *                   </dd>
   *                   <dt>value = 0.5</dt>
   *                   <dd>
   *                      <p>
   *                         <code>MEMORY</code> = 1024, 2048, 3072, or 4096</p>
   *                   </dd>
   *                   <dt>value = 1</dt>
   *                   <dd>
   *                      <p>
   *                         <code>MEMORY</code> = 2048, 3072, 4096, 5120, 6144, 7168, or 8192</p>
   *                   </dd>
   *                   <dt>value = 2</dt>
   *                   <dd>
   *                      <p>
   *                         <code>MEMORY</code> = 4096, 5120, 6144, 7168, 8192, 9216, 10240, 11264, 12288, 13312, 14336, 15360, or 16384</p>
   *                   </dd>
   *                   <dt>value = 4</dt>
   *                   <dd>
   *                      <p>
   *                         <code>MEMORY</code> = 8192, 9216, 10240, 11264, 12288, 13312, 14336, 15360, 16384, 17408, 18432, 19456,
   *      20480, 21504, 22528, 23552, 24576, 25600, 26624, 27648, 28672, 29696, or 30720</p>
   *                   </dd>
   *                   <dt>value = 8</dt>
   *                   <dd>
   *                      <p>
   *                         <code>MEMORY</code> = 16384, 20480, 24576, 28672, 32768, 36864, 40960, 45056, 49152, 53248, 57344, or 61440
   * </p>
   *                   </dd>
   *                   <dt>value = 16</dt>
   *                   <dd>
   *                      <p>
   *                         <code>MEMORY</code> = 32768, 40960, 49152, 57344, 65536, 73728, 81920, 90112, 98304, 106496, 114688, or 122880
   * </p>
   *                   </dd>
   *                </dl>
   *             </dd>
   *          </dl>
   * @public
   */
  value: string | undefined;

  /**
   * <p>The type of resource to assign to a container. The supported resources include
   *     <code>GPU</code>, <code>MEMORY</code>, and <code>VCPU</code>.</p>
   * @public
   */
  type: ResourceType | undefined;
}

/**
 * <p> An object that represents the compute environment architecture for Batch jobs on
 *    Fargate. </p>
 * @public
 */
export interface RuntimePlatform {
  /**
   * <p>The operating system for the compute environment. Valid values are:
   *     <code>LINUX</code> (default), <code>WINDOWS_SERVER_2019_CORE</code>,
   *     <code>WINDOWS_SERVER_2019_FULL</code>, <code>WINDOWS_SERVER_2022_CORE</code>, and
   *     <code>WINDOWS_SERVER_2022_FULL</code>.</p>
   *          <note>
   *             <p>The following parameters can’t be set for Windows containers: <code>linuxParameters</code>,
   *      <code>privileged</code>, <code>user</code>, <code>ulimits</code>,
   *      <code>readonlyRootFilesystem</code>, and <code>efsVolumeConfiguration</code>.</p>
   *          </note>
   *          <note>
   *             <p>The Batch Scheduler checks the compute environments that are attached to the job queue before
   *     registering a task definition with Fargate. In this scenario, the job queue is where the job is
   *     submitted. If the job requires a Windows container and the first compute environment is <code>LINUX</code>,
   *     the compute environment is skipped and the next compute environment is checked until a Windows-based
   *     compute environment is found.</p>
   *          </note>
   *          <note>
   *             <p>Fargate Spot is not supported on Windows-based containers on Fargate.
   *     A job queue will be blocked if a Windows job is submitted to a job
   *     queue with only Fargate Spot compute environments. However, you can attach both <code>FARGATE</code> and
   *      <code>FARGATE_SPOT</code> compute environments to the same job queue.</p>
   *          </note>
   * @public
   */
  operatingSystemFamily?: string | undefined;

  /**
   * <p>The vCPU architecture. The default value is <code>X86_64</code>. Valid values are
   *     <code>X86_64</code> and <code>ARM64</code>.</p>
   *          <note>
   *             <p>This parameter must be set to <code>X86_64</code> for Windows containers.</p>
   *          </note>
   *          <note>
   *             <p>Fargate Spot is not supported on Windows-based containers on
   *     Fargate. A job queue will be blocked if a Windows job is
   *     submitted to a job queue with only Fargate Spot compute environments. However, you can attach
   *     both <code>FARGATE</code> and <code>FARGATE_SPOT</code> compute environments to the same job
   *     queue.</p>
   *          </note>
   * @public
   */
  cpuArchitecture?: string | undefined;
}

/**
 * <p>The <code>ulimit</code> settings to pass to the container. For more information, see <a href="https://docs.aws.amazon.com/AmazonECS/latest/APIReference/API_Ulimit.html">Ulimit</a>.</p>
 *          <note>
 *             <p>This object isn't applicable to jobs that are running on Fargate resources.</p>
 *          </note>
 * @public
 */
export interface Ulimit {
  /**
   * <p>The hard limit for the <code>ulimit</code> type. </p>
   * @public
   */
  hardLimit: number | undefined;

  /**
   * <p>The <code>type</code> of the <code>ulimit</code>. Valid values are: <code>core</code> |
   *     <code>cpu</code> | <code>data</code> | <code>fsize</code> | <code>locks</code> |
   *     <code>memlock</code> | <code>msgqueue</code> | <code>nice</code> | <code>nofile</code> |
   *     <code>nproc</code> | <code>rss</code> | <code>rtprio</code> | <code>rttime</code> |
   *     <code>sigpending</code> | <code>stack</code>.</p>
   * @public
   */
  name: string | undefined;

  /**
   * <p>The soft limit for the <code>ulimit</code> type.</p>
   * @public
   */
  softLimit: number | undefined;
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
   * <p>The Amazon EFS access point ID to use. If an access point is specified, the root directory value
   *    specified in the <code>EFSVolumeConfiguration</code> must either be omitted or set to
   *     <code>/</code> which enforces the path set on the EFS access point. If an access point is used,
   *    transit encryption must be enabled in the <code>EFSVolumeConfiguration</code>. For more
   *    information, see <a href="https://docs.aws.amazon.com/efs/latest/ug/efs-access-points.html">Working
   *     with Amazon EFS access points</a> in the <i>Amazon Elastic File System User Guide</i>.</p>
   * @public
   */
  accessPointId?: string | undefined;

  /**
   * <p>Whether or not to use the Batch job IAM role defined in a job definition when mounting the
   *    Amazon EFS file system. If enabled, transit encryption must be enabled in the
   *     <code>EFSVolumeConfiguration</code>. If this parameter is omitted, the default value of
   *     <code>DISABLED</code> is used. For more information, see <a href="https://docs.aws.amazon.com/batch/latest/userguide/efs-volumes.html#efs-volume-accesspoints">Using Amazon EFS access points</a> in
   *    the <i>Batch User Guide</i>. EFS IAM authorization requires that
   *     <code>TransitEncryption</code> be <code>ENABLED</code> and that a <code>JobRoleArn</code> is
   *    specified.</p>
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
 * <p>This is used when you're using an Amazon Elastic File System file system for job storage. For more
 *    information, see <a href="https://docs.aws.amazon.com/batch/latest/userguide/efs-volumes.html">Amazon EFS
 *     Volumes</a> in the <i>Batch User Guide</i>.</p>
 * @public
 */
export interface EFSVolumeConfiguration {
  /**
   * <p>The Amazon EFS file system ID to use.</p>
   * @public
   */
  fileSystemId: string | undefined;

  /**
   * <p>The directory within the Amazon EFS file system to mount as the root directory inside the host.
   *    If this parameter is omitted, the root of the Amazon EFS volume is used instead. Specifying
   *     <code>/</code> has the same effect as omitting this parameter. The maximum length is 4,096
   *    characters.</p>
   *          <important>
   *             <p>If an EFS access point is specified in the <code>authorizationConfig</code>, the root
   *     directory parameter must either be omitted or set to <code>/</code>, which enforces the path set
   *     on the Amazon EFS access point.</p>
   *          </important>
   * @public
   */
  rootDirectory?: string | undefined;

  /**
   * <p>Determines whether to enable encryption for Amazon EFS data in transit between the Amazon ECS host and
   *    the Amazon EFS server. Transit encryption must be enabled if Amazon EFS IAM authorization is used. If
   *    this parameter is omitted, the default value of <code>DISABLED</code> is used. For more
   *    information, see <a href="https://docs.aws.amazon.com/efs/latest/ug/encryption-in-transit.html">Encrypting data in transit</a> in the <i>Amazon Elastic File System User Guide</i>.</p>
   * @public
   */
  transitEncryption?: EFSTransitEncryption | undefined;

  /**
   * <p>The port to use when sending encrypted data between the Amazon ECS host and the Amazon EFS server. If
   *    you don't specify a transit encryption port, it uses the port selection strategy that the Amazon EFS
   *    mount helper uses. The value must be between 0 and 65,535. For more information, see <a href="https://docs.aws.amazon.com/efs/latest/ug/efs-mount-helper.html">EFS mount helper</a> in the
   *     <i>Amazon Elastic File System User Guide</i>.</p>
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
 * <p>Determine whether your data volume persists on the host container instance and where it's
 *    stored. If this parameter is empty, then the Docker daemon assigns a host path for your data
 *    volume. However, the data isn't guaranteed to persist after the containers that are associated
 *    with it stop running.</p>
 * @public
 */
export interface Host {
  /**
   * <p>The path on the host container instance that's presented to the container. If this parameter
   *    is empty, then the Docker daemon has assigned a host path for you. If this parameter contains a
   *    file location, then the data volume persists at the specified location on the host container
   *    instance until you delete it manually. If the source path location doesn't exist on the host
   *    container instance, the Docker daemon creates it. If the location does exist, the contents of the
   *    source path folder are exported.</p>
   *          <note>
   *             <p>This parameter isn't applicable to jobs that run on Fargate resources. Don't provide this
   *     for these jobs.</p>
   *          </note>
   * @public
   */
  sourcePath?: string | undefined;
}

/**
 * <p>A data volume that's used in a job's container properties.</p>
 * @public
 */
export interface Volume {
  /**
   * <p>The contents of the <code>host</code> parameter determine whether your data volume persists
   *    on the host container instance and where it's stored. If the host parameter is empty, then the
   *    Docker daemon assigns a host path for your data volume. However, the data isn't guaranteed to
   *    persist after the containers that are associated with it stop running.</p>
   *          <note>
   *             <p>This parameter isn't applicable to jobs that are running on Fargate resources and
   *     shouldn't be provided.</p>
   *          </note>
   * @public
   */
  host?: Host | undefined;

  /**
   * <p>The name of the volume. It can be up to 255 characters long. It can contain uppercase and lowercase letters,
   *  numbers, hyphens (-), and underscores (_). This name is referenced in the
   *     <code>sourceVolume</code> parameter of container definition <code>mountPoints</code>.</p>
   * @public
   */
  name?: string | undefined;

  /**
   * <p>This parameter is specified when you're using an Amazon Elastic File System file system for job storage. Jobs
   *    that are running on Fargate resources must specify a <code>platformVersion</code> of at least
   *     <code>1.4.0</code>.</p>
   * @public
   */
  efsVolumeConfiguration?: EFSVolumeConfiguration | undefined;
}

/**
 * <p>Container properties are used for Amazon ECS based job definitions. These properties to describe the
 *    container that's launched as part of a job.</p>
 * @public
 */
export interface ContainerProperties {
  /**
   * <p>Required. The image used to start a container. This string is passed directly to the
   *    Docker daemon. Images in the Docker Hub registry are available by default. Other repositories are
   *    specified with
   *      <code>
   *                <i>repository-url</i>/<i>image</i>:<i>tag</i>
   *             </code>.
   *    It can be 255 characters long. It can contain uppercase and lowercase letters, numbers,
   *  hyphens (-), underscores (_), colons (:), periods (.), forward slashes (/), and number signs (#). This parameter maps to <code>Image</code> in the
   *    <a href="https://docs.docker.com/engine/api/v1.23/#create-a-container">Create a container</a> section of the <a href="https://docs.docker.com/engine/api/v1.23/">Docker Remote API</a> and the <code>IMAGE</code>
   *    parameter of <a href="https://docs.docker.com/engine/reference/run/">docker run</a>.</p>
   *          <note>
   *             <p>Docker image architecture must match the processor architecture of the compute resources
   *     that they're scheduled on. For example, ARM-based Docker images can only run on ARM-based
   *     compute resources.</p>
   *          </note>
   *          <ul>
   *             <li>
   *                <p>Images in Amazon ECR Public repositories use the full <code>registry/repository[:tag]</code> or
   *       <code>registry/repository[@digest]</code> naming conventions. For example,
   *        <code>public.ecr.aws/<i>registry_alias</i>/<i>my-web-app</i>:<i>latest</i>
   *                   </code>.</p>
   *             </li>
   *             <li>
   *                <p>Images in Amazon ECR repositories use the full registry and repository URI (for example,
   *       <code>123456789012.dkr.ecr.<region-name>.amazonaws.com/<repository-name></code>).</p>
   *             </li>
   *             <li>
   *                <p>Images in official repositories on Docker Hub use a single name (for example,
   *       <code>ubuntu</code> or <code>mongo</code>).</p>
   *             </li>
   *             <li>
   *                <p>Images in other repositories on Docker Hub are qualified with an organization name (for
   *      example, <code>amazon/amazon-ecs-agent</code>).</p>
   *             </li>
   *             <li>
   *                <p>Images in other online repositories are qualified further by a domain name (for example,
   *       <code>quay.io/assemblyline/ubuntu</code>).</p>
   *             </li>
   *          </ul>
   * @public
   */
  image?: string | undefined;

  /**
   * <p>This parameter is deprecated, use <code>resourceRequirements</code> to specify the vCPU
   *    requirements for the job definition. It's not supported for jobs running on Fargate resources.
   *    For jobs running on Amazon EC2 resources, it specifies the number of vCPUs reserved for the
   *    job.</p>
   *          <p>Each vCPU is equivalent to 1,024 CPU shares. This parameter maps to <code>CpuShares</code>
   *    in the <a href="https://docs.docker.com/engine/api/v1.23/#create-a-container">Create a container</a> section of the <a href="https://docs.docker.com/engine/api/v1.23/">Docker Remote API</a> and the
   *     <code>--cpu-shares</code> option to <a href="https://docs.docker.com/engine/reference/run/">docker run</a>. The
   *    number of vCPUs must be specified but can be specified in several places. You must specify it at
   *    least once for each node.</p>
   *
   * @deprecated This field is deprecated, use resourceRequirements instead.
   * @public
   */
  vcpus?: number | undefined;

  /**
   * <p>This parameter is deprecated, use <code>resourceRequirements</code> to specify the memory
   *    requirements for the job definition. It's not supported for jobs running on Fargate resources.
   *    For jobs that run on Amazon EC2 resources, it specifies the memory hard limit (in MiB) for a
   *    container. If your container attempts to exceed the specified number, it's terminated. You must
   *    specify at least 4 MiB of memory for a job using this parameter. The memory hard limit can be
   *    specified in several places. It must be specified for each node at least once.</p>
   *
   * @deprecated This field is deprecated, use resourceRequirements instead.
   * @public
   */
  memory?: number | undefined;

  /**
   * <p>The command that's passed to the container. This parameter maps to <code>Cmd</code> in the
   *    <a href="https://docs.docker.com/engine/api/v1.23/#create-a-container">Create a container</a> section of the <a href="https://docs.docker.com/engine/api/v1.23/">Docker Remote API</a> and the <code>COMMAND</code>
   *    parameter to <a href="https://docs.docker.com/engine/reference/run/">docker run</a>. For more information, see
   *     <a href="https://docs.docker.com/engine/reference/builder/#cmd">https://docs.docker.com/engine/reference/builder/#cmd</a>.</p>
   * @public
   */
  command?: string[] | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the IAM role that the container can assume for Amazon Web Services permissions. For more
   *    information, see <a href="https://docs.aws.amazon.com/AmazonECS/latest/developerguide/task-iam-roles.html">IAM roles for tasks</a> in the
   *     <i>Amazon Elastic Container Service Developer Guide</i>.</p>
   * @public
   */
  jobRoleArn?: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the execution role that Batch can assume. For jobs that run on Fargate
   *    resources, you must provide an execution role. For more information, see <a href="https://docs.aws.amazon.com/batch/latest/userguide/execution-IAM-role.html">Batch execution IAM role</a>
   *    in the <i>Batch User Guide</i>.</p>
   * @public
   */
  executionRoleArn?: string | undefined;

  /**
   * <p>A list of data volumes used in a job.</p>
   * @public
   */
  volumes?: Volume[] | undefined;

  /**
   * <p>The environment variables to pass to a container. This parameter maps to <code>Env</code> in
   *    the <a href="https://docs.docker.com/engine/api/v1.23/#create-a-container">Create a container</a> section of the <a href="https://docs.docker.com/engine/api/v1.23/">Docker Remote API</a> and the
   *     <code>--env</code> option to <a href="https://docs.docker.com/engine/reference/run/">docker run</a>.</p>
   *          <important>
   *             <p>We don't recommend using plaintext environment variables for sensitive information, such as
   *     credential data.</p>
   *          </important>
   *          <note>
   *             <p>Environment variables cannot start with "<code>AWS_BATCH</code>". This naming
   *  convention is reserved for variables that Batch sets.</p>
   *          </note>
   * @public
   */
  environment?: KeyValuePair[] | undefined;

  /**
   * <p>The mount points for data volumes in your container. This parameter maps to
   *     <code>Volumes</code> in the <a href="https://docs.docker.com/engine/api/v1.23/#create-a-container">Create a container</a> section of the <a href="https://docs.docker.com/engine/api/v1.23/">Docker Remote API</a>
   *    and the <code>--volume</code> option to <a href="https://docs.docker.com/engine/reference/run/">docker
   *    run</a>.</p>
   * @public
   */
  mountPoints?: MountPoint[] | undefined;

  /**
   * <p>When this parameter is true, the container is given read-only access to its root file
   *    system. This parameter maps to <code>ReadonlyRootfs</code> in the
   *    <a href="https://docs.docker.com/engine/api/v1.23/#create-a-container">Create a container</a> section of the <a href="https://docs.docker.com/engine/api/v1.23/">Docker Remote API</a> and the
   *     <code>--read-only</code> option to <code>docker run</code>.</p>
   * @public
   */
  readonlyRootFilesystem?: boolean | undefined;

  /**
   * <p>When this parameter is true, the container is given elevated permissions on the host
   *    container instance (similar to the <code>root</code> user). This parameter maps to
   *     <code>Privileged</code> in the <a href="https://docs.docker.com/engine/api/v1.23/#create-a-container">Create a container</a> section of the
   *    <a href="https://docs.docker.com/engine/api/v1.23/">Docker Remote API</a> and the <code>--privileged</code> option to <a href="https://docs.docker.com/engine/reference/run/">docker run</a>. The default value is false.</p>
   *          <note>
   *             <p>This parameter isn't applicable to jobs that are running on Fargate resources and
   *     shouldn't be provided, or specified as false.</p>
   *          </note>
   * @public
   */
  privileged?: boolean | undefined;

  /**
   * <p>A list of <code>ulimits</code> to set in the container. This parameter maps to
   *     <code>Ulimits</code> in the <a href="https://docs.docker.com/engine/api/v1.23/#create-a-container">Create a container</a> section of the <a href="https://docs.docker.com/engine/api/v1.23/">Docker Remote API</a>
   *    and the <code>--ulimit</code> option to <a href="https://docs.docker.com/engine/reference/run/">docker
   *    run</a>.</p>
   *          <note>
   *             <p>This parameter isn't applicable to jobs that are running on Fargate resources and
   *     shouldn't be provided.</p>
   *          </note>
   * @public
   */
  ulimits?: Ulimit[] | undefined;

  /**
   * <p>The user name to use inside the container. This parameter maps to <code>User</code> in the
   *    <a href="https://docs.docker.com/engine/api/v1.23/#create-a-container">Create a container</a> section of the <a href="https://docs.docker.com/engine/api/v1.23/">Docker Remote API</a> and the <code>--user</code>
   *    option to <a href="https://docs.docker.com/engine/reference/run/">docker run</a>.</p>
   * @public
   */
  user?: string | undefined;

  /**
   * <p>The instance type to use for a multi-node parallel job. All node groups in a multi-node
   *    parallel job must use the same instance type.</p>
   *          <note>
   *             <p>This parameter isn't applicable to single-node container jobs or jobs that run on Fargate
   *     resources, and shouldn't be provided.</p>
   *          </note>
   * @public
   */
  instanceType?: string | undefined;

  /**
   * <p>The type and amount of resources to assign to a container. The supported resources include
   *     <code>GPU</code>, <code>MEMORY</code>, and <code>VCPU</code>.</p>
   * @public
   */
  resourceRequirements?: ResourceRequirement[] | undefined;

  /**
   * <p>Linux-specific modifications that are applied to the container, such as details for device
   *    mappings.</p>
   * @public
   */
  linuxParameters?: LinuxParameters | undefined;

  /**
   * <p>The log configuration specification for the container.</p>
   *          <p>This parameter maps to <code>LogConfig</code> in the <a href="https://docs.docker.com/engine/api/v1.23/#create-a-container">Create a container</a>
   *    section of the <a href="https://docs.docker.com/engine/api/v1.23/">Docker Remote API</a> and the <code>--log-driver</code> option to <a href="https://docs.docker.com/engine/reference/run/">docker run</a>. By default, containers use the same logging
   *    driver that the Docker daemon uses. However the container might use a different logging driver
   *    than the Docker daemon by specifying a log driver with this parameter in the container
   *    definition. To use a different logging driver for a container, the log system must be configured
   *    properly on the container instance (or on a different log server for remote logging options). For
   *    more information on the options for different supported log drivers, see <a href="https://docs.docker.com/engine/admin/logging/overview/">Configure logging drivers</a>
   *    in the Docker documentation.</p>
   *          <note>
   *             <p>Batch currently supports a subset of the logging drivers available to the Docker daemon
   *     (shown in the <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-batch-jobdefinition-containerproperties-logconfiguration.html">LogConfiguration</a> data type).</p>
   *          </note>
   *          <p>This parameter requires version 1.18 of the Docker Remote API or greater on your
   *  container instance. To check the Docker Remote API version on your container instance, log in to your
   *  container instance and run the following command: <code>sudo docker version | grep "Server API version"</code>
   *          </p>
   *          <note>
   *             <p>The Amazon ECS container agent running on a container instance must register the logging drivers
   *     available on that instance with the <code>ECS_AVAILABLE_LOGGING_DRIVERS</code> environment
   *     variable before containers placed on that instance can use these log configuration options. For
   *     more information, see <a href="https://docs.aws.amazon.com/AmazonECS/latest/developerguide/ecs-agent-config.html">Amazon ECS container agent
   *      configuration</a> in the <i>Amazon Elastic Container Service Developer Guide</i>.</p>
   *          </note>
   * @public
   */
  logConfiguration?: LogConfiguration | undefined;

  /**
   * <p>The secrets for the container. For more information, see <a href="https://docs.aws.amazon.com/batch/latest/userguide/specifying-sensitive-data.html">Specifying sensitive data</a> in the
   *     <i>Batch User Guide</i>.</p>
   * @public
   */
  secrets?: Secret[] | undefined;

  /**
   * <p>The network configuration for jobs that are running on Fargate resources. Jobs that are
   *    running on Amazon EC2 resources must not specify this parameter.</p>
   * @public
   */
  networkConfiguration?: NetworkConfiguration | undefined;

  /**
   * <p>The platform configuration for jobs that are running on Fargate resources. Jobs that are
   *    running on Amazon EC2 resources must not specify this parameter.</p>
   * @public
   */
  fargatePlatformConfiguration?: FargatePlatformConfiguration | undefined;

  /**
   * <p>Determines whether execute command functionality is turned on for this task. If <code>true</code>, execute
   *             command functionality is turned on all the containers in the task.</p>
   * @public
   */
  enableExecuteCommand?: boolean | undefined;

  /**
   * <p>The amount of ephemeral storage to allocate for the task. This parameter is used to expand
   *    the total amount of ephemeral storage available, beyond the default amount, for tasks hosted on
   *    Fargate.</p>
   * @public
   */
  ephemeralStorage?: EphemeralStorage | undefined;

  /**
   * <p>An object that represents the compute environment architecture for Batch jobs on
   *    Fargate.</p>
   * @public
   */
  runtimePlatform?: RuntimePlatform | undefined;

  /**
   * <p>The private repository authentication credentials to use.</p>
   * @public
   */
  repositoryCredentials?: RepositoryCredentials | undefined;
}

/**
 * <p>A list of containers that this task depends on.</p>
 * @public
 */
export interface TaskContainerDependency {
  /**
   * <p>A unique identifier for the container.</p>
   * @public
   */
  containerName?: string | undefined;

  /**
   * <p>The dependency condition of the container. The following are the available conditions and
   *    their behavior:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>START</code> - This condition emulates the behavior of links and volumes today. It
   *      validates that a dependent container is started before permitting other containers to start.
   *     </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>COMPLETE</code> - This condition validates that a dependent container runs to
   *      completion (exits) before permitting other containers to start. This can be useful for
   *      nonessential containers that run a script and then exit. This condition can't be set on an
   *      essential container. </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>SUCCESS</code> - This condition is the same as <code>COMPLETE</code>, but it also
   *      requires that the container exits with a zero status. This condition can't be set on an
   *      essential container. </p>
   *             </li>
   *          </ul>
   * @public
   */
  condition?: string | undefined;
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
 *             log router for container logs. For more information, see <a href="https://docs.aws.amazon.com/AmazonECS/latest/developerguide/using_firelens.html">Custom log</a> routing in the <i>Amazon Elastic Container Service Developer
 *             Guide</i>.</p>
 * @public
 */
export interface FirelensConfiguration {
  /**
   * <p>The log router to use. The valid values are <code>fluentd</code> or <code>fluentbit</code>.</p>
   * @public
   */
  type: FirelensConfigurationType | undefined;

  /**
   * <p>The options to use when configuring the log router. This field is optional and can be
   *             used to specify a custom configuration file or to add additional metadata, such as the
   *             task, task definition, cluster, and container instance details to the log event. If
   *             specified, the syntax to use is
   *             <code>"options":\{"enable-ecs-log-metadata":"true|false","config-file-type:"s3|file","config-file-value":"arn:aws:s3:::mybucket/fluent.conf|filepath"\}</code>.
   *             For more information, see <a href="https://docs.aws.amazon.com/AmazonECS/latest/developerguide/using_firelens.html#firelens-taskdef">Creating a task definition that uses a FireLens configuration</a>
   *             in the <i>Amazon Elastic Container Service Developer Guide</i>.</p>
   * @public
   */
  options?: Record<string, string> | undefined;
}

/**
 * <p>Container properties are used for Amazon ECS-based job definitions. These properties to describe
 *    the container that's launched as part of a job.</p>
 * @public
 */
export interface TaskContainerProperties {
  /**
   * <p>The command that's passed to the container. This parameter maps to <code>Cmd</code> in the
   *     <a href="https://docs.docker.com/engine/api/v1.23/#create-a-container">Create a
   *     container</a> section of the <a href="https://docs.docker.com/engine/api/v1.23/">Docker
   *     Remote API</a> and the <code>COMMAND</code> parameter to <a href="https://docs.docker.com/engine/reference/run/">docker run</a>. For more information,
   *    see <a href="https://docs.docker.com/engine/reference/builder/#cmd">Dockerfile reference:
   *     CMD</a>.</p>
   * @public
   */
  command?: string[] | undefined;

  /**
   * <p>A list of containers that this container depends on.</p>
   * @public
   */
  dependsOn?: TaskContainerDependency[] | undefined;

  /**
   * <p>The environment variables to pass to a container. This parameter maps to Env in the <a href="https://docs.docker.com/engine/api/v1.23/#create-a-container">Create a container</a>
   *    section of the <a href="https://docs.docker.com/engine/api/v1.23/">Docker Remote API</a>
   *    and the <code>--env</code> parameter to <a href="https://docs.docker.com/engine/reference/run/">docker run</a>. </p>
   *          <important>
   *             <p>We don't recommend using plaintext environment variables for sensitive information, such as
   *     credential data.</p>
   *          </important>
   *          <note>
   *             <p>Environment variables cannot start with <code>AWS_BATCH</code>. This naming convention is
   *     reserved for variables that Batch sets.</p>
   *          </note>
   * @public
   */
  environment?: KeyValuePair[] | undefined;

  /**
   * <p>If the essential parameter of a container is marked as <code>true</code>, and that container
   *    fails or stops for any reason, all other containers that are part of the task are stopped. If the
   *     <code>essential</code> parameter of a container is marked as false, its failure doesn't affect
   *    the rest of the containers in a task. If this parameter is omitted, a container is assumed to be
   *    essential.</p>
   *          <p>All jobs must have at least one essential container. If you have an application that's
   *    composed of multiple containers, group containers that are used for a common purpose into
   *    components, and separate the different components into multiple task definitions. For more
   *    information, see <a href="https://docs.aws.amazon.com/AmazonECS/latest/developerguide/application_architecture.html">Application
   *     Architecture</a> in the <i>Amazon Elastic Container Service Developer Guide</i>.</p>
   * @public
   */
  essential?: boolean | undefined;

  /**
   * <p>The FireLens configuration for the container. This is used to specify and configure a
   *             log router for container logs. For more information, see <a href="https://docs.aws.amazon.com/AmazonECS/latest/developerguide/using_firelens.html">Custom log</a> routing in the <i>Amazon Elastic Container Service Developer
   *                     Guide</i>.</p>
   * @public
   */
  firelensConfiguration?: FirelensConfiguration | undefined;

  /**
   * <p>The image used to start a container. This string is passed directly to the Docker daemon. By
   *    default, images in the Docker Hub registry are available. Other repositories are specified with
   *    either <code>repository-url/image:tag</code> or <code>repository-url/image@digest</code>. Up to
   *    255 letters (uppercase and lowercase), numbers, hyphens, underscores, colons, periods, forward
   *    slashes, and number signs are allowed. This parameter maps to <code>Image</code> in the <a href="https://docs.docker.com/engine/api/v1.35/#operation/ContainerCreate">Create a
   *     container</a> section of the <a href="https://docs.docker.com/engine/api/v1.35/">Docker
   *     Remote API</a> and the <code>IMAGE</code> parameter of the <a href="https://docs.docker.com/engine/reference/run/#security-configuration">
   *                <i>docker
   *      run</i>
   *             </a>.</p>
   * @public
   */
  image: string | undefined;

  /**
   * <p>Linux-specific modifications that are applied to the container, such as Linux kernel
   *    capabilities. For more information, see <a href="https://docs.aws.amazon.com/AmazonECS/latest/APIReference/API_KernelCapabilities.html">KernelCapabilities</a>.</p>
   * @public
   */
  linuxParameters?: LinuxParameters | undefined;

  /**
   * <p>The log configuration specification for the container.</p>
   *          <p>This parameter maps to <code>LogConfig</code> in the <a href="https://docs.docker.com/engine/api/v1.35/#operation/ContainerCreate">Create a
   *     container</a> section of the <a href="https://docs.docker.com/engine/api/v1.35/">Docker
   *     Remote API</a> and the <code>--log-driver</code> option to <a href="https://docs.docker.com/engine/reference/run/#security-configuration">docker
   *    run</a>.</p>
   *          <p>By default, containers use the same logging driver that the Docker daemon uses. However the
   *    container can use a different logging driver than the Docker daemon by specifying a log driver
   *    with this parameter in the container definition. To use a different logging driver for a
   *    container, the log system must be configured properly on the container instance (or on a
   *    different log server for remote logging options). For more information about the options for
   *    different supported log drivers, see <a href="https://docs.docker.com/engine/admin/logging/overview/">Configure logging drivers </a>
   *    in the <i>Docker documentation</i>.</p>
   *          <note>
   *             <p>Amazon ECS currently supports a subset of the logging drivers available to the Docker daemon
   *     (shown in the <code>LogConfiguration</code> data type). Additional log drivers may be available
   *     in future releases of the Amazon ECS container agent.</p>
   *          </note>
   *          <p>This parameter requires version 1.18 of the Docker Remote API or greater on your container
   *    instance. To check the Docker Remote API version on your container instance, log in to your
   *    container instance and run the following command: sudo docker version <code>--format
   *     '\{\{.Server.APIVersion\}\}'</code>
   *          </p>
   *          <note>
   *             <p>The Amazon ECS container agent running on a container instance must register the logging drivers
   *     available on that instance with the <code>ECS_AVAILABLE_LOGGING_DRIVERS</code> environment
   *     variable before containers placed on that instance can use these log configuration options. For
   *     more information, see <a href="https://docs.aws.amazon.com/AmazonECS/latest/developerguide/ecs-agent-config.html">Amazon ECS container agent
   *      configuration</a> in the <i>Amazon Elastic Container Service Developer Guide</i>.</p>
   *          </note>
   * @public
   */
  logConfiguration?: LogConfiguration | undefined;

  /**
   * <p>The mount points for data volumes in your container.</p>
   *          <p>This parameter maps to <code>Volumes</code> in the <a href="https://docs.docker.com/engine/api/v1.35/#operation/ContainerCreate">Create a
   *     container</a> section of the <a href="https://docs.docker.com/engine/api/v1.35/">Docker
   *     Remote API</a> and the <a href="">--volume</a> option to <a href="https://docs.docker.com/engine/reference/run/#security-configuration">docker
   *    run</a>.</p>
   *          <p>Windows containers can mount whole directories on the same drive as
   *     <code>$env:ProgramData</code>. Windows containers can't mount directories on a different drive,
   *    and mount point can't be across drives.</p>
   * @public
   */
  mountPoints?: MountPoint[] | undefined;

  /**
   * <p>The name of a container. The name can be used as a unique identifier to target your
   *     <code>dependsOn</code> and <code>Overrides</code> objects. </p>
   * @public
   */
  name?: string | undefined;

  /**
   * <p>When this parameter is <code>true</code>, the container is given elevated privileges on the
   *    host container instance (similar to the <code>root</code> user). This parameter maps to
   *     <code>Privileged</code> in the <a href="https://docs.docker.com/engine/api/v1.35/#operation/ContainerCreate">Create a
   *     container</a> section of the <a href="https://docs.docker.com/engine/api/v1.35/">Docker
   *     Remote API</a> and the <code>--privileged</code> option to <a href="https://docs.docker.com/engine/reference/run/#security-configuration">docker
   *    run</a>.</p>
   *          <note>
   *             <p>This parameter is not supported for Windows containers or tasks run on Fargate.</p>
   *          </note>
   * @public
   */
  privileged?: boolean | undefined;

  /**
   * <p>When this parameter is true, the container is given read-only access to its root file
   *    system. This parameter maps to <code>ReadonlyRootfs</code> in the <a href="https://docs.docker.com/engine/api/v1.35/#operation/ContainerCreate">Create a
   *     container</a> section of the <a href="https://docs.docker.com/engine/api/v1.35/">Docker
   *     Remote API</a> and the <code>--read-only</code> option to <a href="https://docs.docker.com/engine/reference/run/#security-configuration">docker
   *    run</a>.</p>
   *          <note>
   *             <p>This parameter is not supported for Windows containers.</p>
   *          </note>
   * @public
   */
  readonlyRootFilesystem?: boolean | undefined;

  /**
   * <p>The private repository authentication credentials to use.</p>
   * @public
   */
  repositoryCredentials?: RepositoryCredentials | undefined;

  /**
   * <p>The type and amount of a resource to assign to a container. The only supported resource is a
   *    GPU.</p>
   * @public
   */
  resourceRequirements?: ResourceRequirement[] | undefined;

  /**
   * <p>The secrets to pass to the container. For more information, see <a href="https://docs.aws.amazon.com/AmazonECS/latest/developerguide/specifying-sensitive-data.html">Specifying Sensitive
   *     Data</a> in the Amazon Elastic Container Service Developer Guide.</p>
   * @public
   */
  secrets?: Secret[] | undefined;

  /**
   * <p>A list of <code>ulimits</code> to set in the container. If a <code>ulimit</code> value is
   *    specified in a task definition, it overrides the default values set by Docker. This parameter
   *    maps to <code>Ulimits</code> in the <a href="https://docs.docker.com/engine/api/v1.35/#operation/ContainerCreate">Create a
   *     container</a> section of the <a href="https://docs.docker.com/engine/api/v1.35/">Docker
   *     Remote API</a> and the <code>--ulimit</code> option to <a href="https://docs.docker.com/engine/reference/run/#security-configuration">docker
   *    run</a>.</p>
   *          <p>Amazon ECS tasks hosted on Fargate use the default resource limit values set by the operating
   *    system with the exception of the nofile resource limit parameter which Fargate overrides. The
   *     <code>nofile</code> resource limit sets a restriction on the number of open files that a
   *    container can use. The default <code>nofile</code> soft limit is <code>1024</code> and the
   *    default hard limit is <code>65535</code>.</p>
   *          <p>This parameter requires version 1.18 of the Docker Remote API or greater on your container
   *    instance. To check the Docker Remote API version on your container instance, log in to your
   *    container instance and run the following command: sudo docker version <code>--format
   *     '\{\{.Server.APIVersion\}\}'</code>
   *          </p>
   *          <note>
   *             <p>This parameter is not supported for Windows containers.</p>
   *          </note>
   * @public
   */
  ulimits?: Ulimit[] | undefined;

  /**
   * <p>The user to use inside the container. This parameter maps to User in the Create a container
   *    section of the Docker Remote API and the --user option to docker run.</p>
   *          <note>
   *             <p>When running tasks using the <code>host</code> network mode, don't run containers using the
   *      <code>root user (UID 0)</code>. We recommend using a non-root user for better security.</p>
   *          </note>
   *          <p>You can specify the <code>user</code> using the following formats. If specifying a UID or
   *    GID, you must specify it as a positive integer.</p>
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
   *                   <code>user:gi</code>
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
}

/**
 * <p>The properties for a task definition that describes the container and volume definitions of
 *    an Amazon ECS task. You can specify which Docker images to use, the required resources, and other
 *    configurations related to launching the task definition through an Amazon ECS service or task.</p>
 * @public
 */
export interface EcsTaskProperties {
  /**
   * <p>This object is a list of containers.</p>
   * @public
   */
  containers: TaskContainerProperties[] | undefined;

  /**
   * <p>The amount of ephemeral storage to allocate for the task. This parameter is used to expand
   *    the total amount of ephemeral storage available, beyond the default amount, for tasks hosted on
   *    Fargate.</p>
   * @public
   */
  ephemeralStorage?: EphemeralStorage | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the execution role that Batch can assume. For jobs that run on Fargate
   *    resources, you must provide an execution role. For more information, see <a href="https://docs.aws.amazon.com/batch/latest/userguide/execution-IAM-role.html">Batch execution IAM role</a>
   *    in the <i>Batch User Guide</i>.</p>
   * @public
   */
  executionRoleArn?: string | undefined;

  /**
   * <p>The Fargate platform version where the jobs are running. A platform version is specified
   *    only for jobs that are running on Fargate resources. If one isn't specified, the
   *     <code>LATEST</code> platform version is used by default. This uses a recent, approved version of
   *    the Fargate platform for compute resources. For more information, see <a href="https://docs.aws.amazon.com/AmazonECS/latest/developerguide/platform_versions.html">Fargate
   *     platform versions</a> in the <i>Amazon Elastic Container Service Developer Guide</i>.</p>
   * @public
   */
  platformVersion?: string | undefined;

  /**
   * <p>The IPC resource namespace to use for the containers in the task. The valid values are
   *     <code>host</code>, <code>task</code>, or <code>none</code>.</p>
   *          <p>If <code>host</code> is specified, all containers within the tasks that specified the
   *     <code>host</code> IPC mode on the same container instance share the same IPC resources with the
   *    host Amazon EC2 instance.</p>
   *          <p>If <code>task</code> is specified, all containers within the specified <code>task</code>
   *    share the same IPC resources.</p>
   *          <p>If <code>none</code> is specified, the IPC resources within the containers of a task are
   *    private, and are not shared with other containers in a task or on the container instance. </p>
   *          <p>If no value is specified, then the IPC resource namespace sharing depends on the Docker
   *    daemon setting on the container instance. For more information, see <a href="https://docs.docker.com/engine/reference/run/#ipc-settings---ipc">IPC settings</a> in
   *    the Docker run reference.</p>
   * @public
   */
  ipcMode?: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) that's associated with the Amazon ECS task.</p>
   *          <note>
   *             <p>This is object is comparable to <a href="https://docs.aws.amazon.com/batch/latest/APIReference/API_ContainerProperties.html">ContainerProperties:jobRoleArn</a>.</p>
   *          </note>
   * @public
   */
  taskRoleArn?: string | undefined;

  /**
   * <p>The process namespace to use for the containers in the task. The valid values are
   *     <code>host</code> or <code>task</code>. For example, monitoring sidecars might need
   *     <code>pidMode</code> to access information about other containers running in the same
   *    task.</p>
   *          <p>If <code>host</code> is specified, all containers within the tasks that specified the
   *     <code>host</code> PID mode on the same container instance share the process namespace with the
   *    host Amazon EC2 instance.</p>
   *          <p>If <code>task</code> is specified, all containers within the specified task share the same
   *    process namespace.</p>
   *          <p>If no value is specified, the default is a private namespace for each container. For more
   *    information, see <a href="https://docs.docker.com/engine/reference/run/#pid-settings---pid">PID settings</a> in the Docker run reference.</p>
   * @public
   */
  pidMode?: string | undefined;

  /**
   * <p>The network configuration for jobs that are running on Fargate resources. Jobs that are
   *    running on Amazon EC2 resources must not specify this parameter.</p>
   * @public
   */
  networkConfiguration?: NetworkConfiguration | undefined;

  /**
   * <p>An object that represents the compute environment architecture for Batch jobs on
   *    Fargate.</p>
   * @public
   */
  runtimePlatform?: RuntimePlatform | undefined;

  /**
   * <p>A list of volumes that are associated with the job.</p>
   * @public
   */
  volumes?: Volume[] | undefined;

  /**
   * <p>Determines whether execute command functionality is turned on for this task. If <code>true</code>, execute
   *             command functionality is turned on all the containers in the task.</p>
   * @public
   */
  enableExecuteCommand?: boolean | undefined;
}

/**
 * <p>An object that contains the properties for the Amazon ECS resources of a job.</p>
 * @public
 */
export interface EcsProperties {
  /**
   * <p>An object that contains the properties for the Amazon ECS task definition of a job.</p>
   *          <note>
   *             <p>This object is currently limited to one task element. However, the task element can run up to 10 containers.</p>
   *          </note>
   * @public
   */
  taskProperties: EcsTaskProperties[] | undefined;
}

/**
 * <p>An environment variable.</p>
 * @public
 */
export interface EksContainerEnvironmentVariable {
  /**
   * <p>The name of the environment variable.</p>
   * @public
   */
  name: string | undefined;

  /**
   * <p>The value of the environment variable.</p>
   * @public
   */
  value?: string | undefined;
}

/**
 * <p>The type and amount of resources to assign to a container. The supported resources include
 *     <code>memory</code>, <code>cpu</code>, and <code>nvidia.com/gpu</code>. For more information,
 *    see <a href="https://kubernetes.io/docs/concepts/configuration/manage-resources-containers/">Resource management for pods and containers</a> in the <i>Kubernetes
 *     documentation</i>.</p>
 * @public
 */
export interface EksContainerResourceRequirements {
  /**
   * <p>The type and quantity of the resources to reserve for the container. The values vary based
   *    on the <code>name</code> that's specified. Resources can be requested using either the
   *     <code>limits</code> or the <code>requests</code> objects.</p>
   *          <dl>
   *             <dt>memory</dt>
   *             <dd>
   *                <p>The memory hard limit (in MiB) for the container, using whole integers, with a "Mi"
   *       suffix. If your container attempts to exceed the memory specified, the container is
   *       terminated. You must specify at least 4 MiB of memory for a job. <code>memory</code> can be
   *       specified in <code>limits</code>, <code>requests</code>, or both. If <code>memory</code> is
   *       specified in both places, then the value that's specified in <code>limits</code> must be equal
   *       to the value that's specified in <code>requests</code>.</p>
   *                <note>
   *                   <p>To maximize your resource utilization, provide your jobs with as much memory as possible
   *        for the specific instance type that you are using. To learn how, see <a href="https://docs.aws.amazon.com/batch/latest/userguide/memory-management.html">Memory management</a> in the
   *         <i>Batch User Guide</i>.</p>
   *                </note>
   *             </dd>
   *             <dt>cpu</dt>
   *             <dd>
   *                <p>The number of CPUs that's reserved for the container. Values must be an even multiple of
   *        <code>0.25</code>. <code>cpu</code> can be specified in <code>limits</code>,
   *        <code>requests</code>, or both. If <code>cpu</code> is specified in both places, then the
   *       value that's specified in <code>limits</code> must be at least as large as the value that's
   *       specified in <code>requests</code>.</p>
   *             </dd>
   *             <dt>nvidia.com/gpu</dt>
   *             <dd>
   *                <p>The number of GPUs that's reserved for the container. Values must be a whole integer.
   *        <code>memory</code> can be specified in <code>limits</code>, <code>requests</code>, or both.
   *       If <code>memory</code> is specified in both places, then the value that's specified in
   *        <code>limits</code> must be equal to the value that's specified in
   *       <code>requests</code>.</p>
   *             </dd>
   *          </dl>
   * @public
   */
  limits?: Record<string, string> | undefined;

  /**
   * <p>The type and quantity of the resources to request for the container. The values vary based
   *    on the <code>name</code> that's specified. Resources can be requested by using either the
   *     <code>limits</code> or the <code>requests</code> objects.</p>
   *          <dl>
   *             <dt>memory</dt>
   *             <dd>
   *                <p>The memory hard limit (in MiB) for the container, using whole integers, with a "Mi"
   *       suffix. If your container attempts to exceed the memory specified, the container is
   *       terminated. You must specify at least 4 MiB of memory for a job. <code>memory</code> can be
   *       specified in <code>limits</code>, <code>requests</code>, or both. If <code>memory</code> is
   *       specified in both, then the value that's specified in <code>limits</code> must be equal to the
   *       value that's specified in <code>requests</code>.</p>
   *                <note>
   *                   <p>If you're trying to maximize your resource utilization by providing your jobs as much
   *        memory as possible for a particular instance type, see <a href="https://docs.aws.amazon.com/batch/latest/userguide/memory-management.html">Memory management</a> in the
   *         <i>Batch User Guide</i>.</p>
   *                </note>
   *             </dd>
   *             <dt>cpu</dt>
   *             <dd>
   *                <p>The number of CPUs that are reserved for the container. Values must be an even multiple
   *       of <code>0.25</code>. <code>cpu</code> can be specified in <code>limits</code>,
   *        <code>requests</code>, or both. If <code>cpu</code> is specified in both, then the value
   *       that's specified in <code>limits</code> must be at least as large as the value that's
   *       specified in <code>requests</code>.</p>
   *             </dd>
   *             <dt>nvidia.com/gpu</dt>
   *             <dd>
   *                <p>The number of GPUs that are reserved for the container. Values must be a whole integer.
   *        <code>nvidia.com/gpu</code> can be specified in <code>limits</code>, <code>requests</code>,
   *       or both. If <code>nvidia.com/gpu</code> is specified in both, then the value that's specified
   *       in <code>limits</code> must be equal to the value that's specified in
   *       <code>requests</code>.</p>
   *             </dd>
   *          </dl>
   * @public
   */
  requests?: Record<string, string> | undefined;
}

/**
 * <p>The security context for a job. For more information, see <a href="https://kubernetes.io/docs/tasks/configure-pod-container/security-context/">Configure a
 *     security context for a pod or container</a> in the <i>Kubernetes
 *     documentation</i>.</p>
 * @public
 */
export interface EksContainerSecurityContext {
  /**
   * <p>When this parameter is specified, the container is run as the specified user ID
   *     (<code>uid</code>). If this parameter isn't specified, the default is the user that's specified
   *    in the image metadata. This parameter maps to <code>RunAsUser</code> and <code>MustRanAs</code>
   *    policy in the <a href="https://kubernetes.io/docs/concepts/security/pod-security-policy/#users-and-groups">Users
   *     and groups pod security policies</a> in the <i>Kubernetes
   *    documentation</i>.</p>
   * @public
   */
  runAsUser?: number | undefined;

  /**
   * <p>When this parameter is specified, the container is run as the specified group ID
   *     (<code>gid</code>). If this parameter isn't specified, the default is the group that's specified
   *    in the image metadata. This parameter maps to <code>RunAsGroup</code> and <code>MustRunAs</code>
   *    policy in the <a href="https://kubernetes.io/docs/concepts/security/pod-security-policy/#users-and-groups">Users
   *     and groups pod security policies</a> in the <i>Kubernetes
   *    documentation</i>.</p>
   * @public
   */
  runAsGroup?: number | undefined;

  /**
   * <p>When this parameter is <code>true</code>, the container is given elevated permissions on the
   *    host container instance. The level of permissions are similar to the <code>root</code> user
   *    permissions. The default value is <code>false</code>. This parameter maps to
   *     <code>privileged</code> policy in the <a href="https://kubernetes.io/docs/concepts/security/pod-security-policy/#privileged">Privileged
   *     pod security policies</a> in the <i>Kubernetes documentation</i>.</p>
   * @public
   */
  privileged?: boolean | undefined;

  /**
   * <p>Whether or not a container or a Kubernetes pod is allowed to gain more privileges than its parent
   *    process. The default value is <code>false</code>.</p>
   * @public
   */
  allowPrivilegeEscalation?: boolean | undefined;

  /**
   * <p>When this parameter is <code>true</code>, the container is given read-only access to its
   *    root file system. The default value is <code>false</code>. This parameter maps to
   *     <code>ReadOnlyRootFilesystem</code> policy in the <a href="https://kubernetes.io/docs/concepts/security/pod-security-policy/#volumes-and-file-systems">Volumes and file systems pod security policies</a> in the <i>Kubernetes
   *     documentation</i>.</p>
   * @public
   */
  readOnlyRootFilesystem?: boolean | undefined;

  /**
   * <p>When this parameter is specified, the container is run as a user with a <code>uid</code>
   *    other than 0. If this parameter isn't specified, so such rule is enforced. This parameter maps to
   *     <code>RunAsUser</code> and <code>MustRunAsNonRoot</code> policy in the <a href="https://kubernetes.io/docs/concepts/security/pod-security-policy/#users-and-groups">Users
   *     and groups pod security policies</a> in the <i>Kubernetes
   *    documentation</i>.</p>
   * @public
   */
  runAsNonRoot?: boolean | undefined;
}

/**
 * <p>The volume mounts for a container for an Amazon EKS job. For more information about volumes and
 *    volume mounts in Kubernetes, see <a href="https://kubernetes.io/docs/concepts/storage/volumes/">Volumes</a> in the <i>Kubernetes documentation</i>.</p>
 * @public
 */
export interface EksContainerVolumeMount {
  /**
   * <p>The name the volume mount. This must match the name of one of the volumes in the
   *    pod.</p>
   * @public
   */
  name?: string | undefined;

  /**
   * <p>The path on the container where the volume is mounted.</p>
   * @public
   */
  mountPath?: string | undefined;

  /**
   * <p>A sub-path inside the referenced volume instead of its root.</p>
   * @public
   */
  subPath?: string | undefined;

  /**
   * <p>If this value is <code>true</code>, the container has read-only access to the volume.
   *    Otherwise, the container can write to the volume. The default value is <code>false</code>.</p>
   * @public
   */
  readOnly?: boolean | undefined;
}

/**
 * <p>EKS container properties are used in job definitions for Amazon EKS based job definitions to
 *    describe the properties for a container node in the pod that's launched as part of a job. This
 *    can't be specified for Amazon ECS based job definitions.</p>
 * @public
 */
export interface EksContainer {
  /**
   * <p>The name of the container. If the name isn't specified, the default name
   *     "<code>Default</code>" is used. Each container in a pod must have a unique name.</p>
   * @public
   */
  name?: string | undefined;

  /**
   * <p>The Docker image used to start the container.</p>
   * @public
   */
  image: string | undefined;

  /**
   * <p>The image pull policy for the container. Supported values are <code>Always</code>,
   *     <code>IfNotPresent</code>, and <code>Never</code>. This parameter defaults to
   *     <code>IfNotPresent</code>. However, if the <code>:latest</code> tag is specified, it defaults to
   *     <code>Always</code>. For more information, see <a href="https://kubernetes.io/docs/concepts/containers/images/#updating-images">Updating
   *     images</a> in the <i>Kubernetes documentation</i>.</p>
   * @public
   */
  imagePullPolicy?: string | undefined;

  /**
   * <p>The entrypoint for the container. This isn't run within a shell. If this isn't specified,
   *    the <code>ENTRYPOINT</code> of the container image is used. Environment variable references are
   *    expanded using the container's environment.</p>
   *          <p>If the referenced environment variable doesn't exist, the reference in the command isn't
   *    changed. For example, if the reference is to "<code>$(NAME1)</code>" and the <code>NAME1</code>
   *    environment variable doesn't exist, the command string will remain "<code>$(NAME1)</code>."
   *     <code>$$</code> is replaced with <code>$</code> and the resulting string isn't expanded. For
   *    example, <code>$$(VAR_NAME)</code> will be passed as <code>$(VAR_NAME)</code> whether or not the
   *     <code>VAR_NAME</code> environment variable exists. The entrypoint can't be updated. For more
   *    information, see <a href="https://docs.docker.com/engine/reference/builder/#entrypoint">ENTRYPOINT</a> in the <i>Dockerfile reference</i> and <a href="https://kubernetes.io/docs/tasks/inject-data-application/define-command-argument-container/">Define a command and arguments for a container</a> and <a href="https://kubernetes.io/docs/reference/kubernetes-api/workload-resources/pod-v1/#entrypoint">Entrypoint</a> in the <i>Kubernetes documentation</i>.</p>
   * @public
   */
  command?: string[] | undefined;

  /**
   * <p>An array of arguments to the entrypoint. If this isn't specified, the <code>CMD</code> of
   *    the container image is used. This corresponds to the <code>args</code> member in the <a href="https://kubernetes.io/docs/reference/kubernetes-api/workload-resources/pod-v1/#entrypoint">Entrypoint</a> portion of the <a href="https://kubernetes.io/docs/reference/kubernetes-api/workload-resources/pod-v1/">Pod</a>
   *    in Kubernetes. Environment variable references are expanded using the container's environment.</p>
   *          <p>If the referenced environment variable doesn't exist, the reference in the command isn't
   *    changed. For example, if the reference is to "<code>$(NAME1)</code>" and the <code>NAME1</code>
   *    environment variable doesn't exist, the command string will remain "<code>$(NAME1)</code>."
   *     <code>$$</code> is replaced with <code>$</code>, and the resulting string isn't expanded. For
   *    example, <code>$$(VAR_NAME)</code> is passed as <code>$(VAR_NAME)</code> whether or not the
   *     <code>VAR_NAME</code> environment variable exists. For more information, see <a href="https://docs.docker.com/engine/reference/builder/#cmd">Dockerfile reference: CMD</a>
   *    and <a href="https://kubernetes.io/docs/tasks/inject-data-application/define-command-argument-container/">Define a command and arguments for a pod</a> in the <i>Kubernetes
   *     documentation</i>.</p>
   * @public
   */
  args?: string[] | undefined;

  /**
   * <p>The environment variables to pass to a container.</p>
   *          <note>
   *             <p>Environment variables cannot start with "<code>AWS_BATCH</code>". This naming
   *  convention is reserved for variables that Batch sets.</p>
   *          </note>
   * @public
   */
  env?: EksContainerEnvironmentVariable[] | undefined;

  /**
   * <p>The type and amount of resources to assign to a container. The supported resources include
   *     <code>memory</code>, <code>cpu</code>, and <code>nvidia.com/gpu</code>. For more information,
   *    see <a href="https://kubernetes.io/docs/concepts/configuration/manage-resources-containers/">Resource management for pods and containers</a> in the <i>Kubernetes
   *     documentation</i>.</p>
   * @public
   */
  resources?: EksContainerResourceRequirements | undefined;

  /**
   * <p>The volume mounts for the container. Batch supports <code>emptyDir</code>,
   *     <code>hostPath</code>, and <code>secret</code> volume types. For more information about volumes
   *    and volume mounts in Kubernetes, see <a href="https://kubernetes.io/docs/concepts/storage/volumes/">Volumes</a> in the <i>Kubernetes documentation</i>.</p>
   * @public
   */
  volumeMounts?: EksContainerVolumeMount[] | undefined;

  /**
   * <p>The security context for a job. For more information, see <a href="https://kubernetes.io/docs/tasks/configure-pod-container/security-context/">Configure a
   *     security context for a pod or container</a> in the <i>Kubernetes
   *     documentation</i>.</p>
   * @public
   */
  securityContext?: EksContainerSecurityContext | undefined;
}

/**
 * <p>References a Kubernetes secret resource. This name of the secret must start and end with an
 *    alphanumeric character, is required to be lowercase, can include periods (.) and hyphens (-), and
 *    can't contain more than 253 characters.</p>
 * @public
 */
export interface ImagePullSecret {
  /**
   * <p>Provides a unique identifier for the <code>ImagePullSecret</code>. This object is required
   *    when <code>EksPodProperties$imagePullSecrets</code> is used.</p>
   * @public
   */
  name: string | undefined;
}

/**
 * <p>Describes and uniquely identifies Kubernetes resources. For example, the compute environment that
 *    a pod runs in or the <code>jobID</code> for a job running in the pod. For more information, see
 *    <a href="https://kubernetes.io/docs/concepts/overview/working-with-objects/kubernetes-objects/">
 *    Understanding Kubernetes Objects</a> in the <i>Kubernetes documentation</i>.</p>
 * @public
 */
export interface EksMetadata {
  /**
   * <p>Key-value pairs used to identify, sort, and organize cube resources. Can contain up to 63
   *    uppercase letters, lowercase letters, numbers, hyphens (-), and underscores (_). Labels can be
   *    added or modified at any time. Each resource can have multiple labels, but each key must be
   *    unique for a given object.</p>
   * @public
   */
  labels?: Record<string, string> | undefined;

  /**
   * <p>Key-value pairs used to attach arbitrary, non-identifying metadata to Kubernetes objects.
   *         Valid annotation keys have two segments: an optional prefix and a name, separated by a
   *         slash (/). </p>
   *          <ul>
   *             <li>
   *                <p>The prefix is optional and must be 253 characters or less. If specified, the prefix
   *                 must be a DNS subdomain− a series of DNS labels separated by dots (.), and it must
   *                 end with a slash (/).</p>
   *             </li>
   *             <li>
   *                <p>The name segment is required and must be 63 characters or less. It can include alphanumeric
   *                 characters ([a-z0-9A-Z]), dashes (-), underscores (_), and dots (.), but must begin and end
   *                 with an alphanumeric character.</p>
   *             </li>
   *          </ul>
   *          <note>
   *             <p>Annotation values must be 255 characters or less.</p>
   *          </note>
   *          <p>Annotations can be added or modified at any time. Each resource can have multiple annotations. </p>
   * @public
   */
  annotations?: Record<string, string> | undefined;

  /**
   * <p>The namespace of the Amazon EKS cluster. In Kubernetes, namespaces provide a mechanism for isolating
   *       groups of resources within a single cluster. Names of resources need to be unique within a namespace,
   *       but not across namespaces. Batch places Batch Job pods in this namespace. If this field is provided,
   *       the value can't be empty or null. It must meet the following requirements:</p>
   *          <ul>
   *             <li>
   *                <p>1-63 characters long</p>
   *             </li>
   *             <li>
   *                <p>Can't be set to default</p>
   *             </li>
   *             <li>
   *                <p>Can't start with <code>kube</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>Must match the following regular expression:
   *   <code>^[a-z0-9]([-a-z0-9]*[a-z0-9])?$</code>
   *                </p>
   *             </li>
   *          </ul>
   *          <p>
   *    For more information, see
   *    <a href="https://kubernetes.io/docs/concepts/overview/working-with-objects/namespaces/">Namespaces</a> in the <i>Kubernetes documentation</i>. This namespace can be
   *    different from the <code>kubernetesNamespace</code> set in the compute environment's
   *    <code>EksConfiguration</code>, but must have identical role-based access control (RBAC) roles as
   *    the compute environment's <code>kubernetesNamespace</code>. For multi-node parallel jobs,
   *    the same value must be provided across all the node ranges.</p>
   * @public
   */
  namespace?: string | undefined;
}

/**
 * <p>Specifies the configuration of a Kubernetes <code>emptyDir</code> volume. An
 *     <code>emptyDir</code> volume is first created when a pod is assigned to a node. It exists as
 *    long as that pod is running on that node. The <code>emptyDir</code> volume is initially empty.
 *    All containers in the pod can read and write the files in the <code>emptyDir</code> volume.
 *    However, the <code>emptyDir</code> volume can be mounted at the same or different paths in each
 *    container. When a pod is removed from a node for any reason, the data in the
 *     <code>emptyDir</code> is deleted permanently. For more information, see <a href="https://kubernetes.io/docs/concepts/storage/volumes/#emptydir">emptyDir</a> in the
 *     <i>Kubernetes documentation</i>.</p>
 * @public
 */
export interface EksEmptyDir {
  /**
   * <p>The medium to store the volume. The default value is an empty string, which uses the storage
   *    of the node.</p>
   *          <dl>
   *             <dt>""</dt>
   *             <dd>
   *                <p>
   *                   <b>(Default)</b> Use the disk storage of the node.</p>
   *             </dd>
   *             <dt>"Memory"</dt>
   *             <dd>
   *                <p>Use the <code>tmpfs</code> volume that's backed by the RAM of the node. Contents of the
   *       volume are lost when the node reboots, and any storage on the volume counts against the
   *       container's memory limit.</p>
   *             </dd>
   *          </dl>
   * @public
   */
  medium?: string | undefined;

  /**
   * <p>The maximum size of the volume. By default, there's no maximum size defined.</p>
   * @public
   */
  sizeLimit?: string | undefined;
}

/**
 * <p>Specifies the configuration of a Kubernetes <code>hostPath</code> volume. A <code>hostPath</code>
 *    volume mounts an existing file or directory from the host node's filesystem into your pod. For
 *    more information, see <a href="https://kubernetes.io/docs/concepts/storage/volumes/#hostpath">hostPath</a> in the <i>Kubernetes documentation</i>.</p>
 * @public
 */
export interface EksHostPath {
  /**
   * <p>The path of the file or directory on the host to mount into containers on the pod.</p>
   * @public
   */
  path?: string | undefined;
}

/**
 * <p>A <code>persistentVolumeClaim</code> volume is used to mount a <a href="https://kubernetes.io/docs/concepts/storage/persistent-volumes/">PersistentVolume</a>
 *          into a Pod. PersistentVolumeClaims are a way for users to "claim" durable storage without knowing
 *          the details of the particular cloud environment. See the information about <a href="https://kubernetes.io/docs/concepts/storage/persistent-volumes/">PersistentVolumes</a>
 *          in the <i>Kubernetes documentation</i>.</p>
 * @public
 */
export interface EksPersistentVolumeClaim {
  /**
   * <p>The name of the <code>persistentVolumeClaim</code> bounded to a <code>persistentVolume</code>.
   *          For more information, see <a href="https://kubernetes.io/docs/concepts/storage/persistent-volumes/#persistentvolumeclaims">
   *          Persistent Volume Claims</a> in the <i>Kubernetes documentation</i>.</p>
   * @public
   */
  claimName: string | undefined;

  /**
   * <p>An optional boolean value indicating if the mount is read only. Default is false. For more
   *          information, see <a href="https://kubernetes.io/docs/concepts/storage/volumes/#read-only-mounts">
   *          Read Only Mounts</a> in the <i>Kubernetes documentation</i>.</p>
   * @public
   */
  readOnly?: boolean | undefined;
}

/**
 * <p>Specifies the configuration of a Kubernetes <code>secret</code> volume. For more information, see
 *     <a href="https://kubernetes.io/docs/concepts/storage/volumes/#secret">secret</a> in the
 *     <i>Kubernetes documentation</i>.</p>
 * @public
 */
export interface EksSecret {
  /**
   * <p>The name of the secret. The name must be allowed as a DNS subdomain name. For more
   *    information, see <a href="https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#dns-subdomain-names">DNS subdomain names</a> in the <i>Kubernetes documentation</i>.</p>
   * @public
   */
  secretName: string | undefined;

  /**
   * <p>Specifies whether the secret or the secret's keys must be defined.</p>
   * @public
   */
  optional?: boolean | undefined;
}

/**
 * <p>Specifies an Amazon EKS volume for a job definition.</p>
 * @public
 */
export interface EksVolume {
  /**
   * <p>The name of the volume. The name must be allowed as a DNS subdomain name. For more
   *    information, see <a href="https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#dns-subdomain-names">DNS subdomain names</a> in the <i>Kubernetes documentation</i>.</p>
   * @public
   */
  name: string | undefined;

  /**
   * <p>Specifies the configuration of a Kubernetes <code>hostPath</code> volume. For more information,
   *    see <a href="https://kubernetes.io/docs/concepts/storage/volumes/#hostpath">hostPath</a>
   *    in the <i>Kubernetes documentation</i>.</p>
   * @public
   */
  hostPath?: EksHostPath | undefined;

  /**
   * <p>Specifies the configuration of a Kubernetes <code>emptyDir</code> volume. For more information,
   *    see <a href="https://kubernetes.io/docs/concepts/storage/volumes/#emptydir">emptyDir</a>
   *    in the <i>Kubernetes documentation</i>.</p>
   * @public
   */
  emptyDir?: EksEmptyDir | undefined;

  /**
   * <p>Specifies the configuration of a Kubernetes <code>secret</code> volume. For more information, see
   *     <a href="https://kubernetes.io/docs/concepts/storage/volumes/#secret">secret</a> in the
   *     <i>Kubernetes documentation</i>.</p>
   * @public
   */
  secret?: EksSecret | undefined;

  /**
   * <p>Specifies the configuration of a Kubernetes <code>persistentVolumeClaim</code> bounded to a
   *         <code>persistentVolume</code>. For more information, see <a href="https://kubernetes.io/docs/concepts/storage/persistent-volumes/#persistentvolumeclaims">
   *         Persistent Volume Claims</a> in the <i>Kubernetes documentation</i>.</p>
   * @public
   */
  persistentVolumeClaim?: EksPersistentVolumeClaim | undefined;
}

/**
 * <p>The properties for the pod.</p>
 * @public
 */
export interface EksPodProperties {
  /**
   * <p>The name of the service account that's used to run the pod. For more information, see
   *     <a href="https://docs.aws.amazon.com/eks/latest/userguide/service-accounts.html">Kubernetes service
   *     accounts</a> and <a href="https://docs.aws.amazon.com/eks/latest/userguide/associate-service-account-role.html">Configure a Kubernetes service account
   *     to assume an IAM role</a> in the <i>Amazon EKS User Guide</i> and <a href="https://kubernetes.io/docs/tasks/configure-pod-container/configure-service-account/">Configure service accounts for pods</a> in the <i>Kubernetes
   *    documentation</i>.</p>
   * @public
   */
  serviceAccountName?: string | undefined;

  /**
   * <p>Indicates if the pod uses the hosts' network IP address. The default value is
   *     <code>true</code>. Setting this to <code>false</code> enables the Kubernetes pod networking model.
   *    Most Batch workloads are egress-only and don't require the overhead of IP allocation for each
   *    pod for incoming connections. For more information, see <a href="https://kubernetes.io/docs/concepts/security/pod-security-policy/#host-namespaces">Host
   *     namespaces</a> and <a href="https://kubernetes.io/docs/concepts/workloads/pods/#pod-networking">Pod networking</a>
   *    in the <i>Kubernetes documentation</i>.</p>
   * @public
   */
  hostNetwork?: boolean | undefined;

  /**
   * <p>The DNS policy for the pod. The default value is <code>ClusterFirst</code>. If the
   *     <code>hostNetwork</code> parameter is not specified, the default is
   *     <code>ClusterFirstWithHostNet</code>. <code>ClusterFirst</code> indicates that any DNS query
   *    that does not match the configured cluster domain suffix is forwarded to the upstream nameserver
   *    inherited from the node. For more information, see <a href="https://kubernetes.io/docs/concepts/services-networking/dns-pod-service/#pod-s-dns-policy">Pod's DNS policy</a> in the <i>Kubernetes documentation</i>.</p>
   *          <p>Valid values: <code>Default</code> | <code>ClusterFirst</code> |
   *     <code>ClusterFirstWithHostNet</code>
   *          </p>
   * @public
   */
  dnsPolicy?: string | undefined;

  /**
   * <p>References a Kubernetes secret resource. It holds a list of secrets. These secrets help to gain
   *    access to pull an images from a private registry.</p>
   *          <p>
   *             <code>ImagePullSecret$name</code> is required when this object is used.</p>
   * @public
   */
  imagePullSecrets?: ImagePullSecret[] | undefined;

  /**
   * <p>The properties of the container that's used on the Amazon EKS pod.</p>
   *          <note>
   *             <p>This object is limited to 10 elements.</p>
   *          </note>
   * @public
   */
  containers?: EksContainer[] | undefined;

  /**
   * <p>These containers run before application containers, always runs to completion, and must
   *    complete successfully before the next container starts. These containers are registered with the
   *    Amazon EKS Connector agent and persists the registration information in the Kubernetes backend data store.
   *    For more information, see <a href="https://kubernetes.io/docs/concepts/workloads/pods/init-containers/">Init
   *     Containers</a> in the <i>Kubernetes documentation</i>.</p>
   *          <note>
   *             <p>This object is limited to 10 elements.</p>
   *          </note>
   * @public
   */
  initContainers?: EksContainer[] | undefined;

  /**
   * <p>Specifies the volumes for a job definition that uses Amazon EKS resources.</p>
   * @public
   */
  volumes?: EksVolume[] | undefined;

  /**
   * <p>Metadata about the Kubernetes pod. For more information, see <a href="https://kubernetes.io/docs/concepts/overview/working-with-objects/kubernetes-objects/">Understanding Kubernetes Objects</a> in the <i>Kubernetes
   *    documentation</i>.</p>
   * @public
   */
  metadata?: EksMetadata | undefined;

  /**
   * <p>Indicates if the processes in a container are shared, or visible, to other containers in the
   *    same pod. For more information, see <a href="https://kubernetes.io/docs/tasks/configure-pod-container/share-process-namespace/">Share
   *     Process Namespace between Containers in a Pod</a>.</p>
   * @public
   */
  shareProcessNamespace?: boolean | undefined;
}

/**
 * <p>An object that contains the properties for the Kubernetes resources of a job.</p>
 * @public
 */
export interface EksProperties {
  /**
   * <p>The properties for the Kubernetes pod resources of a job.</p>
   * @public
   */
  podProperties?: EksPodProperties | undefined;
}

/**
 * <p>This is an object that represents the properties of the node range for a multi-node parallel
 *    job.</p>
 * @public
 */
export interface NodeRangeProperty {
  /**
   * <p>The range of nodes, using node index values. A range of <code>0:3</code> indicates nodes
   *    with index values of <code>0</code> through <code>3</code>. If the starting range value is
   *    omitted (<code>:n</code>), then <code>0</code> is used to start the range. If the ending range
   *    value is omitted (<code>n:</code>), then the highest possible node index is used to end the
   *    range. Your accumulative node ranges must account for all nodes (<code>0:n</code>). You can nest
   *    node ranges (for example, <code>0:10</code> and <code>4:5</code>). In this case, the
   *     <code>4:5</code> range properties override the <code>0:10</code> properties.</p>
   * @public
   */
  targetNodes: string | undefined;

  /**
   * <p>The container details for the node range.</p>
   * @public
   */
  container?: ContainerProperties | undefined;

  /**
   * <p>The instance types of the underlying host infrastructure of a multi-node parallel
   *    job.</p>
   *          <note>
   *             <p>This parameter isn't applicable to jobs that are running on Fargate resources.</p>
   *             <p>In addition, this list object is currently limited to one element.</p>
   *          </note>
   * @public
   */
  instanceTypes?: string[] | undefined;

  /**
   * <p>This is an object that represents the properties of the node range for a multi-node parallel
   *    job.</p>
   * @public
   */
  ecsProperties?: EcsProperties | undefined;

  /**
   * <p>This is an object that represents the properties of the node range for a multi-node parallel job.</p>
   * @public
   */
  eksProperties?: EksProperties | undefined;

  /**
   * <p>Contains a list of consumable resources required by a job.</p>
   * @public
   */
  consumableResourceProperties?: ConsumableResourceProperties | undefined;
}

/**
 * <p>An object that represents the node properties of a multi-node parallel job.</p>
 *          <note>
 *             <p>Node properties can't be specified for Amazon EKS based job definitions.</p>
 *          </note>
 * @public
 */
export interface NodeProperties {
  /**
   * <p>The number of nodes that are associated with a multi-node parallel job.</p>
   * @public
   */
  numNodes: number | undefined;

  /**
   * <p>Specifies the node index for the main node of a multi-node parallel job. This node index
   *    value must be fewer than the number of nodes.</p>
   * @public
   */
  mainNode: number | undefined;

  /**
   * <p>A list of node ranges and their properties that are associated with a multi-node parallel
   *    job.</p>
   * @public
   */
  nodeRangeProperties: NodeRangeProperty[] | undefined;
}

/**
 * @public
 * @enum
 */
export const PlatformCapability = {
  EC2: "EC2",
  FARGATE: "FARGATE",
} as const;

/**
 * @public
 */
export type PlatformCapability = (typeof PlatformCapability)[keyof typeof PlatformCapability];

/**
 * @public
 * @enum
 */
export const RetryAction = {
  EXIT: "EXIT",
  RETRY: "RETRY",
} as const;

/**
 * @public
 */
export type RetryAction = (typeof RetryAction)[keyof typeof RetryAction];

/**
 * <p>Specifies an array of up to 5 conditions to be met, and an action to take
 *     (<code>RETRY</code> or <code>EXIT</code>) if all conditions are met. If none of the
 *     <code>EvaluateOnExit</code> conditions in a <code>RetryStrategy</code> match, then the job is
 *    retried.</p>
 * @public
 */
export interface EvaluateOnExit {
  /**
   * <p>Contains a glob pattern to match against the <code>StatusReason</code> returned for a job.
   *    The pattern can contain up to 512 characters. It can contain letters, numbers, periods (.),
   *    colons (:), and white spaces (including spaces or tabs). It can optionally end with an asterisk (*)
   *    so that only the start of the string needs to be an exact match.</p>
   * @public
   */
  onStatusReason?: string | undefined;

  /**
   * <p>Contains a glob pattern to match against the <code>Reason</code> returned for a job. The
   *    pattern can contain up to 512 characters. It can contain letters, numbers, periods (.), colons
   *    (:), and white space (including spaces and tabs). It can optionally end with an asterisk (*) so
   *    that only the start of the string needs to be an exact match.</p>
   * @public
   */
  onReason?: string | undefined;

  /**
   * <p>Contains a glob pattern to match against the decimal representation of the
   *     <code>ExitCode</code> returned for a job. The pattern can be up to 512 characters long. It can
   *    contain only numbers, and can end with an asterisk (*) so that only the start of the string needs
   *    to be an exact match.</p>
   *          <p>The string can contain up to 512 characters.</p>
   * @public
   */
  onExitCode?: string | undefined;

  /**
   * <p>Specifies the action to take if all of the specified conditions
   *    (<code>onStatusReason</code>, <code>onReason</code>, and <code>onExitCode</code>) are met. The
   *    values aren't case sensitive.</p>
   * @public
   */
  action: RetryAction | undefined;
}

/**
 * <p>The retry strategy that's associated with a job. For more information, see <a href="https://docs.aws.amazon.com/batch/latest/userguide/job_retries.html">Automated job retries</a> in the
 *     <i>Batch User Guide</i>.</p>
 * @public
 */
export interface RetryStrategy {
  /**
   * <p>The number of times to move a job to the <code>RUNNABLE</code> status. You can specify
   *    between 1 and 10 attempts. If the value of <code>attempts</code> is greater than one, the job is
   *    retried on failure the same number of attempts as the value.</p>
   * @public
   */
  attempts?: number | undefined;

  /**
   * <p>Array of up to 5 objects that specify the conditions where jobs are retried or failed. If
   *    this parameter is specified, then the <code>attempts</code> parameter must also be specified. If
   *    none of the listed conditions match, then the job is retried.</p>
   * @public
   */
  evaluateOnExit?: EvaluateOnExit[] | undefined;
}

/**
 * <p>An object that represents a job timeout configuration.</p>
 * @public
 */
export interface JobTimeout {
  /**
   * <p>The job timeout time (in seconds) that's measured from the job attempt's
   *     <code>startedAt</code> timestamp. After this time passes, Batch terminates your jobs if they
   *    aren't finished. The minimum value for the timeout is 60 seconds.</p>
   *          <p>For array jobs, the timeout applies to the child jobs, not to the parent array job.</p>
   *          <p>For multi-node parallel (MNP) jobs, the timeout applies to the whole job, not to the
   *    individual nodes.</p>
   * @public
   */
  attemptDurationSeconds?: number | undefined;
}

/**
 * <p>An object that represents an Batch job definition.</p>
 * @public
 */
export interface JobDefinition {
  /**
   * <p>The name of the job definition.</p>
   * @public
   */
  jobDefinitionName: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) for the job definition.</p>
   * @public
   */
  jobDefinitionArn: string | undefined;

  /**
   * <p>The revision of the job definition.</p>
   * @public
   */
  revision: number | undefined;

  /**
   * <p>The status of the job definition.</p>
   * @public
   */
  status?: string | undefined;

  /**
   * <p>The type of job definition. It's either <code>container</code> or <code>multinode</code>. If
   *    the job is run on Fargate resources, then <code>multinode</code> isn't supported. For more
   *    information about multi-node parallel jobs, see <a href="https://docs.aws.amazon.com/batch/latest/userguide/multi-node-job-def.html">Creating a multi-node parallel job definition</a> in
   *    the <i>Batch User Guide</i>.</p>
   * @public
   */
  type: string | undefined;

  /**
   * <p>The scheduling priority of the job definition. This only affects jobs in job queues with a
   *    fair-share policy. Jobs with a higher scheduling priority are scheduled before jobs with a lower
   *    scheduling priority.</p>
   * @public
   */
  schedulingPriority?: number | undefined;

  /**
   * <p>Default parameters or parameter substitution placeholders that are set in the job
   *    definition. Parameters are specified as a key-value pair mapping. Parameters in a
   *     <code>SubmitJob</code> request override any corresponding parameter defaults from the job
   *    definition. For more information about specifying parameters, see <a href="https://docs.aws.amazon.com/batch/latest/userguide/job_definition_parameters.html">Job definition parameters</a> in the
   *     <i>Batch User Guide</i>.</p>
   * @public
   */
  parameters?: Record<string, string> | undefined;

  /**
   * <p>The retry strategy to use for failed jobs that are submitted with this job
   *    definition.</p>
   * @public
   */
  retryStrategy?: RetryStrategy | undefined;

  /**
   * <p>An object with properties specific to Amazon ECS-based jobs. When
   *     <code>containerProperties</code> is used in the job definition, it can't be used in addition to
   *     <code>eksProperties</code>, <code>ecsProperties</code>, or <code>nodeProperties</code>.</p>
   * @public
   */
  containerProperties?: ContainerProperties | undefined;

  /**
   * <p>The timeout time for jobs that are submitted with this job definition. After the amount of
   *    time you specify passes, Batch terminates your jobs if they aren't finished.</p>
   * @public
   */
  timeout?: JobTimeout | undefined;

  /**
   * <p>An object with properties that are specific to multi-node parallel jobs. When
   *     <code>nodeProperties</code> is used in the job definition, it can't be used in addition to
   *     <code>containerProperties</code>, <code>ecsProperties</code>, or
   *    <code>eksProperties</code>.</p>
   *          <note>
   *             <p>If the job runs on Fargate resources, don't specify <code>nodeProperties</code>. Use
   *      <code>containerProperties</code> instead.</p>
   *          </note>
   * @public
   */
  nodeProperties?: NodeProperties | undefined;

  /**
   * <p>The tags that are applied to the job definition.</p>
   * @public
   */
  tags?: Record<string, string> | undefined;

  /**
   * <p>Specifies whether to propagate the tags from the job or job definition to the corresponding
   *    Amazon ECS task. If no value is specified, the tags aren't propagated. Tags can only be propagated to
   *    the tasks when the tasks are created. For tags with the same name, job tags are given priority
   *    over job definitions tags. If the total number of combined tags from the job and job definition
   *    is over 50, the job is moved to the <code>FAILED</code> state.</p>
   * @public
   */
  propagateTags?: boolean | undefined;

  /**
   * <p>The platform capabilities required by the job definition. If no value is specified, it
   *    defaults to <code>EC2</code>. Jobs run on Fargate resources specify
   *    <code>FARGATE</code>.</p>
   * @public
   */
  platformCapabilities?: PlatformCapability[] | undefined;

  /**
   * <p>An object that contains the properties for the Amazon ECS resources of a job.When
   *     <code>ecsProperties</code> is used in the job definition, it can't be used in addition to
   *     <code>containerProperties</code>, <code>eksProperties</code>, or
   *    <code>nodeProperties</code>.</p>
   * @public
   */
  ecsProperties?: EcsProperties | undefined;

  /**
   * <p>An object with properties that are specific to Amazon EKS-based jobs. When
   *     <code>eksProperties</code> is used in the job definition, it can't be used in addition to
   *     <code>containerProperties</code>, <code>ecsProperties</code>, or
   *    <code>nodeProperties</code>.</p>
   * @public
   */
  eksProperties?: EksProperties | undefined;

  /**
   * <p>The orchestration type of the compute environment. The valid values are <code>ECS</code>
   *    (default) or <code>EKS</code>.</p>
   * @public
   */
  containerOrchestrationType?: OrchestrationType | undefined;

  /**
   * <p>Contains a list of consumable resources required by the job.</p>
   * @public
   */
  consumableResourceProperties?: ConsumableResourceProperties | undefined;
}

/**
 * @public
 */
export interface DescribeJobDefinitionsResponse {
  /**
   * <p>The list of job definitions.</p>
   * @public
   */
  jobDefinitions?: JobDefinition[] | undefined;

  /**
   * <p>The <code>nextToken</code> value to include in a future
   *         <code>DescribeJobDefinitions</code> request. When the results of a
   *         <code>DescribeJobDefinitions</code> request exceed <code>maxResults</code>, this value can
   *       be used to retrieve the next page of results. This value is <code>null</code> when there are
   *       no more results to return.</p>
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * <p>Contains the parameters for <code>DescribeJobQueues</code>.</p>
 * @public
 */
export interface DescribeJobQueuesRequest {
  /**
   * <p>A list of up to 100 queue names or full queue Amazon Resource Name (ARN) entries.</p>
   * @public
   */
  jobQueues?: string[] | undefined;

  /**
   * <p>The maximum number of results returned by <code>DescribeJobQueues</code> in paginated
   *       output. When this parameter is used, <code>DescribeJobQueues</code> only returns
   *         <code>maxResults</code> results in a single page and a <code>nextToken</code> response
   *       element. The remaining results of the initial request can be seen by sending another
   *         <code>DescribeJobQueues</code> request with the returned <code>nextToken</code> value. This
   *       value can be between 1 and 100. If this parameter isn't used,
   *       then <code>DescribeJobQueues</code> returns up to 100 results and a
   *         <code>nextToken</code> value if applicable.</p>
   * @public
   */
  maxResults?: number | undefined;

  /**
   * <p>The <code>nextToken</code> value returned from a previous paginated
   *         <code>DescribeJobQueues</code> request where <code>maxResults</code> was used and the
   *       results exceeded the value of that parameter. Pagination continues from the end of the
   *       previous results that returned the <code>nextToken</code> value. This value is
   *         <code>null</code> when there are no more results to return.</p>
   *          <note>
   *             <p>Treat this token as an opaque identifier that's only used to
   *  retrieve the next items in a list and not for other programmatic purposes.</p>
   *          </note>
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * @public
 * @enum
 */
export const JQStatus = {
  CREATING: "CREATING",
  DELETED: "DELETED",
  DELETING: "DELETING",
  INVALID: "INVALID",
  UPDATING: "UPDATING",
  VALID: "VALID",
} as const;

/**
 * @public
 */
export type JQStatus = (typeof JQStatus)[keyof typeof JQStatus];

/**
 * <p>An object that represents the details for an Batch job queue.</p>
 * @public
 */
export interface JobQueueDetail {
  /**
   * <p>The job queue name.</p>
   * @public
   */
  jobQueueName: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the job queue.</p>
   * @public
   */
  jobQueueArn: string | undefined;

  /**
   * <p>Describes the ability of the queue to accept new jobs. If the job queue state is
   *     <code>ENABLED</code>, it can accept jobs. If the job queue state is <code>DISABLED</code>, new
   *    jobs can't be added to the queue, but jobs already in the queue can finish.</p>
   * @public
   */
  state: JQState | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the scheduling policy. The format is
   *      <code>aws:<i>Partition</i>:batch:<i>Region</i>:<i>Account</i>:scheduling-policy/<i>Name</i>
   *             </code>.
   *    For example,
   *     <code>aws:aws:batch:us-west-2:123456789012:scheduling-policy/MySchedulingPolicy</code>.</p>
   * @public
   */
  schedulingPolicyArn?: string | undefined;

  /**
   * <p>The status of the job queue (for example, <code>CREATING</code> or
   *    <code>VALID</code>).</p>
   * @public
   */
  status?: JQStatus | undefined;

  /**
   * <p>A short, human-readable string to provide additional details for the current status of the
   *    job queue.</p>
   * @public
   */
  statusReason?: string | undefined;

  /**
   * <p>The priority of the job queue. Job queue priority determines the order
   *    that job queues are evaluated when multiple queues dispatch jobs within a
   *    shared compute environment. A higher value for <code>priority</code> indicates
   *    a higher priority. Queues are evaluated in cycles, in descending order by
   *    priority. For example, a job queue with a priority value of <code>10</code> is
   *    evaluated before a queue with a priority value of <code>1</code>. All of the
   *    compute environments must be either Amazon EC2 (<code>EC2</code> or <code>SPOT</code>)
   *    or Fargate (<code>FARGATE</code> or <code>FARGATE_SPOT</code>). Amazon EC2 and
   *    Fargate compute environments can't be mixed.</p>
   *          <note>
   *             <p>Job queue priority doesn't guarantee that a particular job executes before
   *     a job in a lower priority queue. Jobs added to higher priority queues during the
   *     queue evaluation cycle might not be evaluated until the next cycle. A job is
   *     dispatched from a queue only if resources are available when the queue is evaluated.
   *     If there are insufficient resources available at that time, the cycle proceeds to the
   *     next queue. This means that jobs added to higher priority queues might have to wait
   *     for jobs in multiple lower priority queues to complete before they are dispatched.
   *     You can use job dependencies to control the order for jobs from queues with different
   *     priorities. For more information, see <a href="https://docs.aws.amazon.com/batch/latest/userguide/job_dependencies.html">Job Dependencies</a>
   *     in the <i>Batch User Guide</i>.</p>
   *          </note>
   * @public
   */
  priority: number | undefined;

  /**
   * <p>The compute environments that are attached to the job queue and the order that job placement
   *    is preferred. Compute environments are selected for job placement in ascending order.</p>
   * @public
   */
  computeEnvironmentOrder: ComputeEnvironmentOrder[] | undefined;

  /**
   * <p>The order of the service environment associated with the job queue. Job queues with a higher priority are evaluated first when associated with the same service environment.</p>
   * @public
   */
  serviceEnvironmentOrder?: ServiceEnvironmentOrder[] | undefined;

  /**
   * <p>The type of job queue. For service jobs that run on SageMaker Training, this value is <code>SAGEMAKER_TRAINING</code>. For regular container jobs, this value is <code>EKS</code>, <code>ECS</code>, or <code>ECS_FARGATE</code> depending on the compute environment.</p>
   * @public
   */
  jobQueueType?: JobQueueType | undefined;

  /**
   * <p>The tags that are applied to the job queue. For more information, see <a href="https://docs.aws.amazon.com/batch/latest/userguide/using-tags.html">Tagging your Batch resources</a> in
   *     <i>Batch User Guide</i>.</p>
   * @public
   */
  tags?: Record<string, string> | undefined;

  /**
   * <p>The set of actions that Batch perform on jobs that remain at the head of the job queue in the specified state longer than specified times. Batch will perform each action after <code>maxTimeSeconds</code> has passed.</p>
   * @public
   */
  jobStateTimeLimitActions?: JobStateTimeLimitAction[] | undefined;
}

/**
 * @public
 */
export interface DescribeJobQueuesResponse {
  /**
   * <p>The list of job queues.</p>
   * @public
   */
  jobQueues?: JobQueueDetail[] | undefined;

  /**
   * <p>The <code>nextToken</code> value to include in a future <code>DescribeJobQueues</code>
   *       request. When the results of a <code>DescribeJobQueues</code> request exceed
   *         <code>maxResults</code>, this value can be used to retrieve the next page of results. This
   *       value is <code>null</code> when there are no more results to return.</p>
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * <p>Contains the parameters for <code>DescribeJobs</code>.</p>
 * @public
 */
export interface DescribeJobsRequest {
  /**
   * <p>A list of up to 100 job IDs.</p>
   * @public
   */
  jobs: string[] | undefined;
}

/**
 * <p>An object that represents the details of a container that's part of a job.</p>
 * @public
 */
export interface ContainerDetail {
  /**
   * <p>The image used to start the container.</p>
   * @public
   */
  image?: string | undefined;

  /**
   * <p>The number of vCPUs reserved for the container. For jobs that run on Amazon EC2 resources, you
   *    can specify the vCPU requirement for the job using <code>resourceRequirements</code>, but you
   *    can't specify the vCPU requirements in both the <code>vcpus</code> and
   *     <code>resourceRequirements</code> object. This parameter maps to <code>CpuShares</code> in the
   *    <a href="https://docs.docker.com/engine/api/v1.23/#create-a-container">Create a container</a> section of the <a href="https://docs.docker.com/engine/api/v1.23/">Docker Remote API</a> and the
   *     <code>--cpu-shares</code> option to <a href="https://docs.docker.com/engine/reference/run/">docker run</a>. Each
   *    vCPU is equivalent to 1,024 CPU shares. You must specify at least one vCPU. This is required but
   *    can be specified in several places. It must be specified for each node at least once.</p>
   *          <note>
   *             <p>This parameter isn't applicable to jobs that run on Fargate resources. For jobs that run
   *     on Fargate resources, you must specify the vCPU requirement for the job using
   *      <code>resourceRequirements</code>.</p>
   *          </note>
   * @public
   */
  vcpus?: number | undefined;

  /**
   * <p>For jobs running on Amazon EC2 resources that didn't specify memory requirements using
   *     <code>resourceRequirements</code>, the number of MiB of memory reserved for the job. For other
   *    jobs, including all run on Fargate resources, see <code>resourceRequirements</code>.</p>
   * @public
   */
  memory?: number | undefined;

  /**
   * <p>The command that's passed to the container.</p>
   * @public
   */
  command?: string[] | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) that's associated with the job when run.</p>
   * @public
   */
  jobRoleArn?: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the execution role that Batch can assume. For more information,
   *    see <a href="https://docs.aws.amazon.com/batch/latest/userguide/execution-IAM-role.html">Batch execution IAM
   *     role</a> in the <i>Batch User Guide</i>.</p>
   * @public
   */
  executionRoleArn?: string | undefined;

  /**
   * <p>A list of volumes that are associated with the job.</p>
   * @public
   */
  volumes?: Volume[] | undefined;

  /**
   * <p>The environment variables to pass to a container.</p>
   *          <note>
   *             <p>Environment variables cannot start with "<code>AWS_BATCH</code>". This naming
   *  convention is reserved for variables that Batch sets.</p>
   *          </note>
   * @public
   */
  environment?: KeyValuePair[] | undefined;

  /**
   * <p>The mount points for data volumes in your container.</p>
   * @public
   */
  mountPoints?: MountPoint[] | undefined;

  /**
   * <p>When this parameter is true, the container is given read-only access to its root file
   *    system. This parameter maps to <code>ReadonlyRootfs</code> in the
   *    <a href="https://docs.docker.com/engine/api/v1.23/#create-a-container">Create a container</a> section of the <a href="https://docs.docker.com/engine/api/v1.23/">Docker Remote API</a> and the
   *     <code>--read-only</code> option to <a href="https://docs.docker.com/engine/reference/commandline/run/">
   *                <code>docker
   *    run</code>
   *             </a>.</p>
   * @public
   */
  readonlyRootFilesystem?: boolean | undefined;

  /**
   * <p>A list of <code>ulimit</code> values to set in the container. This parameter maps to
   *     <code>Ulimits</code> in the <a href="https://docs.docker.com/engine/api/v1.23/#create-a-container">Create a container</a> section of the <a href="https://docs.docker.com/engine/api/v1.23/">Docker Remote API</a>
   *    and the <code>--ulimit</code> option to <a href="https://docs.docker.com/engine/reference/run/">docker
   *    run</a>.</p>
   *          <note>
   *             <p>This parameter isn't applicable to jobs that are running on Fargate resources.</p>
   *          </note>
   * @public
   */
  ulimits?: Ulimit[] | undefined;

  /**
   * <p>When this parameter is true, the container is given elevated permissions on the host
   *    container instance (similar to the <code>root</code> user). The default value is
   *     <code>false</code>.</p>
   *          <note>
   *             <p>This parameter isn't applicable to jobs that are running on Fargate resources and
   *     shouldn't be provided, or specified as <code>false</code>.</p>
   *          </note>
   * @public
   */
  privileged?: boolean | undefined;

  /**
   * <p>The user name to use inside the container. This parameter maps to <code>User</code> in the
   *    <a href="https://docs.docker.com/engine/api/v1.23/#create-a-container">Create a container</a> section of the <a href="https://docs.docker.com/engine/api/v1.23/">Docker Remote API</a> and the <code>--user</code>
   *    option to <a href="https://docs.docker.com/engine/reference/run/">docker run</a>.</p>
   * @public
   */
  user?: string | undefined;

  /**
   * <p>The exit code returned upon completion.</p>
   * @public
   */
  exitCode?: number | undefined;

  /**
   * <p>A short (255 max characters) human-readable string to provide additional details for a
   *    running or stopped container.</p>
   * @public
   */
  reason?: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the container instance that the container is running on.</p>
   * @public
   */
  containerInstanceArn?: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the Amazon ECS task that's associated with the container job. Each container
   *    attempt receives a task ARN when they reach the <code>STARTING</code> status.</p>
   * @public
   */
  taskArn?: string | undefined;

  /**
   * <p>The name of the Amazon CloudWatch Logs log stream that's associated with the container. The log group for
   *    Batch jobs is <code>/aws/batch/job</code>. Each container attempt receives a log stream name
   *    when they reach the <code>RUNNING</code> status.</p>
   * @public
   */
  logStreamName?: string | undefined;

  /**
   * <p>The instance type of the underlying host infrastructure of a multi-node parallel job.</p>
   *          <note>
   *             <p>This parameter isn't applicable to jobs that are running on Fargate resources.</p>
   *          </note>
   * @public
   */
  instanceType?: string | undefined;

  /**
   * <p>The network interfaces that are associated with the job.</p>
   * @public
   */
  networkInterfaces?: NetworkInterface[] | undefined;

  /**
   * <p>The type and amount of resources to assign to a container. The supported resources include
   *     <code>GPU</code>, <code>MEMORY</code>, and <code>VCPU</code>.</p>
   * @public
   */
  resourceRequirements?: ResourceRequirement[] | undefined;

  /**
   * <p>Linux-specific modifications that are applied to the container, such as details for device
   *    mappings.</p>
   * @public
   */
  linuxParameters?: LinuxParameters | undefined;

  /**
   * <p>The log configuration specification for the container.</p>
   *          <p>This parameter maps to <code>LogConfig</code> in the <a href="https://docs.docker.com/engine/api/v1.23/#create-a-container">Create a container</a>
   *    section of the <a href="https://docs.docker.com/engine/api/v1.23/">Docker Remote API</a> and the <code>--log-driver</code> option to <a href="https://docs.docker.com/engine/reference/run/">docker run</a>. By default, containers use the same logging
   *    driver that the Docker daemon uses. However, the container might use a different logging driver
   *    than the Docker daemon by specifying a log driver with this parameter in the container
   *    definition. To use a different logging driver for a container, the log system must be configured
   *    properly on the container instance. Or, alternatively, it must be configured on a different log
   *    server for remote logging options. For more information on the options for different supported
   *    log drivers, see <a href="https://docs.docker.com/engine/admin/logging/overview/">Configure
   *     logging drivers</a> in the Docker documentation.</p>
   *          <note>
   *             <p>Batch currently supports a subset of the logging drivers available to the Docker daemon
   *     (shown in the <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-batch-jobdefinition-containerproperties-logconfiguration.html">LogConfiguration</a> data type). Additional log drivers might be available in future
   *     releases of the Amazon ECS container agent.</p>
   *          </note>
   *          <p>This parameter requires version 1.18 of the Docker Remote API or greater on your
   *  container instance. To check the Docker Remote API version on your container instance, log in to your
   *  container instance and run the following command: <code>sudo docker version | grep "Server API version"</code>
   *          </p>
   *          <note>
   *             <p>The Amazon ECS container agent running on a container instance must register the logging drivers
   *     available on that instance with the <code>ECS_AVAILABLE_LOGGING_DRIVERS</code> environment
   *     variable before containers placed on that instance can use these log configuration options. For
   *     more information, see <a href="https://docs.aws.amazon.com/AmazonECS/latest/developerguide/ecs-agent-config.html">Amazon ECS container agent
   *      configuration</a> in the <i>Amazon Elastic Container Service Developer Guide</i>.</p>
   *          </note>
   * @public
   */
  logConfiguration?: LogConfiguration | undefined;

  /**
   * <p>The secrets to pass to the container. For more information, see <a href="https://docs.aws.amazon.com/batch/latest/userguide/specifying-sensitive-data.html">Specifying sensitive data</a> in the
   *     <i>Batch User Guide</i>.</p>
   * @public
   */
  secrets?: Secret[] | undefined;

  /**
   * <p>The network configuration for jobs that are running on Fargate resources. Jobs that are
   *    running on Amazon EC2 resources must not specify this parameter.</p>
   * @public
   */
  networkConfiguration?: NetworkConfiguration | undefined;

  /**
   * <p>The platform configuration for jobs that are running on Fargate resources. Jobs that are
   *    running on Amazon EC2 resources must not specify this parameter.</p>
   * @public
   */
  fargatePlatformConfiguration?: FargatePlatformConfiguration | undefined;

  /**
   * <p>The amount of ephemeral storage allocated for the task. This parameter is used to expand the
   *    total amount of ephemeral storage available, beyond the default amount, for tasks hosted on
   *    Fargate.</p>
   * @public
   */
  ephemeralStorage?: EphemeralStorage | undefined;

  /**
   * <p>An object that represents the compute environment architecture for Batch jobs on
   *    Fargate.</p>
   * @public
   */
  runtimePlatform?: RuntimePlatform | undefined;

  /**
   * <p>The private repository authentication credentials to use.</p>
   * @public
   */
  repositoryCredentials?: RepositoryCredentials | undefined;

  /**
   * <p>Determines whether execute command functionality is turned on for this task. If <code>true</code>, execute
   *             command functionality is turned on all the containers in the task.</p>
   * @public
   */
  enableExecuteCommand?: boolean | undefined;
}

/**
 * <p>An object that represents an Batch job dependency.</p>
 * @public
 */
export interface JobDependency {
  /**
   * <p>The job ID of the Batch job that's associated with this dependency.</p>
   * @public
   */
  jobId?: string | undefined;

  /**
   * <p>The type of the job dependency.</p>
   * @public
   */
  type?: ArrayJobDependency | undefined;
}

/**
 * <p>The details for the container in this task attempt.</p>
 * @public
 */
export interface TaskContainerDetails {
  /**
   * <p>The command that's passed to the container. This parameter maps to <code>Cmd</code> in the
   *    <a href="https://docs.docker.com/engine/api/v1.23/#create-a-container">Create a container</a> section of the <a href="https://docs.docker.com/engine/api/v1.23/">Docker Remote API</a> and the <code>COMMAND</code>
   *    parameter to <a href="https://docs.docker.com/engine/reference/run/">docker run</a>. For more information, see
   *     <a href="https://docs.docker.com/engine/reference/builder/#cmd">https://docs.docker.com/engine/reference/builder/#cmd</a>.</p>
   * @public
   */
  command?: string[] | undefined;

  /**
   * <p>A list of containers that this container depends on.</p>
   * @public
   */
  dependsOn?: TaskContainerDependency[] | undefined;

  /**
   * <p>The environment variables to pass to a container. This parameter maps to <code>Env</code> in
   *    the <a href="https://docs.docker.com/engine/api/v1.23/#create-a-container">Create a container</a> section of the <a href="https://docs.docker.com/engine/api/v1.23/">Docker Remote API</a> and the
   *     <code>--env</code> option to <a href="https://docs.docker.com/engine/reference/run/">docker run</a>.</p>
   *          <important>
   *             <p>We don't recommend using plaintext environment variables for sensitive information, such as
   *     credential data.</p>
   *          </important>
   * @public
   */
  environment?: KeyValuePair[] | undefined;

  /**
   * <p>If the essential parameter of a container is marked as <code>true</code>, and that container
   *    fails or stops for any reason, all other containers that are part of the task are stopped. If the
   *     <code>essential</code> parameter of a container is marked as false, its failure doesn't affect
   *    the rest of the containers in a task. If this parameter is omitted, a container is assumed to be
   *    essential.</p>
   *          <p>All jobs must have at least one essential container. If you have an application that's
   *    composed of multiple containers, group containers that are used for a common purpose into
   *    components, and separate the different components into multiple task definitions. For more
   *    information, see <a href="https://docs.aws.amazon.com/AmazonECS/latest/developerguide/application_architecture.html">Application
   *     Architecture</a> in the <i>Amazon Elastic Container Service Developer Guide</i>.</p>
   * @public
   */
  essential?: boolean | undefined;

  /**
   * <p>The FireLens configuration for the container. This is used to specify and configure a
   *             log router for container logs. For more information, see <a href="https://docs.aws.amazon.com/AmazonECS/latest/developerguide/using_firelens.html">Custom log</a> routing in the <i>Amazon Elastic Container Service Developer
   *                     Guide</i>.</p>
   * @public
   */
  firelensConfiguration?: FirelensConfiguration | undefined;

  /**
   * <p>The image used to start a container. This string is passed directly to the Docker daemon. By
   *    default, images in the Docker Hub registry are available. Other repositories are specified with
   *    either <code>repository-url/image:tag</code> or <code>repository-url/image@digest</code>. Up to
   *    255 letters (uppercase and lowercase), numbers, hyphens, underscores, colons, periods, forward
   *    slashes, and number signs are allowed. This parameter maps to <code>Image</code> in the <a href="https://docs.docker.com/engine/api/v1.35/#operation/ContainerCreate">Create a
   *     container</a> section of the <a href="https://docs.docker.com/engine/api/v1.35/">Docker
   *     Remote API</a> and the <code>IMAGE</code> parameter of the <a href="https://docs.docker.com/engine/reference/run/#security-configuration">
   *                <i>docker
   *      run</i>
   *             </a>.</p>
   * @public
   */
  image?: string | undefined;

  /**
   * <p>Linux-specific modifications that are applied to the container, such as Linux kernel
   *    capabilities. For more information, see <a href="https://docs.aws.amazon.com/AmazonECS/latest/APIReference/API_KernelCapabilities.html">KernelCapabilities</a>.</p>
   *          <note>
   *             <p>This parameter is not supported for Windows containers.</p>
   *          </note>
   * @public
   */
  linuxParameters?: LinuxParameters | undefined;

  /**
   * <p>The log configuration specification for the container.</p>
   *          <p>This parameter maps to <code>LogConfig</code> in the <a href="https://docs.docker.com/engine/api/v1.35/#operation/ContainerCreate">Create a
   *     container</a> section of the <a href="https://docs.docker.com/engine/api/v1.35/">Docker
   *     Remote API</a> and the <code>--log-driver</code> option to <a href="https://docs.docker.com/engine/reference/run/#security-configuration">docker
   *    run</a>.</p>
   *          <p>By default, containers use the same logging driver that the Docker daemon uses. However the
   *    container can use a different logging driver than the Docker daemon by specifying a log driver
   *    with this parameter in the container definition. To use a different logging driver for a
   *    container, the log system must be configured properly on the container instance (or on a
   *    different log server for remote logging options). For more information about the options for
   *    different supported log drivers, see <a href="https://docs.docker.com/engine/admin/logging/overview/">Configure logging drivers </a>
   *    in the <i>Docker documentation</i>.</p>
   *          <note>
   *             <p>Amazon ECS currently supports a subset of the logging drivers available to the Docker daemon
   *     (shown in the <code>LogConfiguration</code> data type). Additional log drivers may be available
   *     in future releases of the Amazon ECS container agent.</p>
   *          </note>
   *          <p>This parameter requires version 1.18 of the Docker Remote API or greater on your container
   *    instance. To check the Docker Remote API version on your container instance, log in to your
   *    container instance and run the following command: sudo docker version <code>--format
   *     '\{\{.Server.APIVersion\}\}'</code>
   *          </p>
   *          <note>
   *             <p>The Amazon ECS container agent running on a container instance must register the logging drivers
   *     available on that instance with the <code>ECS_AVAILABLE_LOGGING_DRIVERS</code> environment
   *     variable before containers placed on that instance can use these log configuration options. For
   *     more information, see <a href="https://docs.aws.amazon.com/AmazonECS/latest/developerguide/ecs-agent-config.html">Amazon ECS container agent
   *      configuration</a> in the <i>Amazon Elastic Container Service Developer Guide</i>.</p>
   *          </note>
   * @public
   */
  logConfiguration?: LogConfiguration | undefined;

  /**
   * <p>The mount points for data volumes in your container.</p>
   *          <p>This parameter maps to <code>Volumes</code> in the <a href="https://docs.docker.com/engine/api/v1.35/#operation/ContainerCreate">Create a
   *     container</a> section of the <a href="https://docs.docker.com/engine/api/v1.35/">Docker
   *     Remote API</a> and the <a href="">--volume</a> option to <a href="https://docs.docker.com/engine/reference/run/#security-configuration">docker
   *    run</a>.</p>
   *          <p>Windows containers can mount whole directories on the same drive as
   *     <code>$env:ProgramData</code>. Windows containers can't mount directories on a different drive,
   *    and mount point can't be across drives.</p>
   * @public
   */
  mountPoints?: MountPoint[] | undefined;

  /**
   * <p>The name of a container.</p>
   * @public
   */
  name?: string | undefined;

  /**
   * <p>When this parameter is <code>true</code>, the container is given elevated privileges on the
   *    host container instance (similar to the <code>root</code> user). This parameter maps to
   *     <code>Privileged</code> in the <a href="https://docs.docker.com/engine/api/v1.35/#operation/ContainerCreate">Create a
   *     container</a> section of the <a href="https://docs.docker.com/engine/api/v1.35/">Docker
   *     Remote API</a> and the <code>--privileged</code> option to <a href="https://docs.docker.com/engine/reference/run/#security-configuration">docker
   *    run</a>.</p>
   *          <note>
   *             <p>This parameter is not supported for Windows containers or tasks run on Fargate.</p>
   *          </note>
   * @public
   */
  privileged?: boolean | undefined;

  /**
   * <p>When this parameter is true, the container is given read-only access to its root file
   *    system. This parameter maps to <code>ReadonlyRootfs</code> in the <a href="https://docs.docker.com/engine/api/v1.35/#operation/ContainerCreate">Create a
   *     container</a> section of the <a href="https://docs.docker.com/engine/api/v1.35/">Docker
   *     Remote API</a> and the <code>--read-only</code> option to <a href="https://docs.docker.com/engine/reference/run/#security-configuration">docker
   *    run</a>.</p>
   *          <note>
   *             <p>This parameter is not supported for Windows containers.</p>
   *          </note>
   * @public
   */
  readonlyRootFilesystem?: boolean | undefined;

  /**
   * <p>The private repository authentication credentials to use.</p>
   * @public
   */
  repositoryCredentials?: RepositoryCredentials | undefined;

  /**
   * <p>The type and amount of a resource to assign to a container. The only supported resource is a
   *    GPU.</p>
   * @public
   */
  resourceRequirements?: ResourceRequirement[] | undefined;

  /**
   * <p>The secrets to pass to the container. For more information, see <a href="https://docs.aws.amazon.com/AmazonECS/latest/developerguide/specifying-sensitive-data.html">Specifying Sensitive
   *     Data</a> in the Amazon Elastic Container Service Developer Guide.</p>
   * @public
   */
  secrets?: Secret[] | undefined;

  /**
   * <p>A list of <code>ulimits</code> to set in the container. If a <code>ulimit</code> value is
   *    specified in a task definition, it overrides the default values set by Docker. This parameter
   *    maps to <code>Ulimits</code> in the <a href="https://docs.docker.com/engine/api/v1.35/#operation/ContainerCreate">Create a
   *     container</a> section of the <a href="https://docs.docker.com/engine/api/v1.35/">Docker
   *     Remote API</a> and the <code>--ulimit</code> option to <a href="https://docs.docker.com/engine/reference/run/#security-configuration">docker
   *    run</a>.</p>
   *          <p>Amazon ECS tasks hosted on Fargate use the default resource limit values set by the operating
   *    system with the exception of the nofile resource limit parameter which Fargate overrides. The
   *     <code>nofile</code> resource limit sets a restriction on the number of open files that a
   *    container can use. The default <code>nofile</code> soft limit is <code>1024</code> and the
   *    default hard limit is <code>65535</code>.</p>
   *          <p>This parameter requires version 1.18 of the Docker Remote API or greater on your container
   *    instance. To check the Docker Remote API version on your container instance, log in to your
   *    container instance and run the following command: sudo docker version <code>--format
   *     '\{\{.Server.APIVersion\}\}'</code>
   *          </p>
   *          <note>
   *             <p>This parameter is not supported for Windows containers.</p>
   *          </note>
   * @public
   */
  ulimits?: Ulimit[] | undefined;

  /**
   * <p>The user to use inside the container. This parameter maps to User in the Create a container
   *    section of the Docker Remote API and the --user option to docker run.</p>
   *          <note>
   *             <p>When running tasks using the <code>host</code> network mode, don't run containers using the
   *      <code>root user (UID 0)</code>. We recommend using a non-root user for better security.</p>
   *          </note>
   *          <p>You can specify the <code>user</code> using the following formats. If specifying a UID or
   *    GID, you must specify it as a positive integer.</p>
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
   *                   <code>user:gi</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>uid:group</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code></code>
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
   * <p>The exit code returned upon completion.</p>
   * @public
   */
  exitCode?: number | undefined;

  /**
   * <p>A short (255 max characters) human-readable string to provide additional details for a
   *    running or stopped container.</p>
   * @public
   */
  reason?: string | undefined;

  /**
   * <p>The name of the CloudWatch Logs log stream that's associated with the container. The log group for
   *    Batch jobs is /aws/batch/job. Each container attempt receives a log stream name when they reach
   *    the <code>RUNNING</code> status. </p>
   * @public
   */
  logStreamName?: string | undefined;

  /**
   * <p>The network interfaces that are associated with the job.</p>
   * @public
   */
  networkInterfaces?: NetworkInterface[] | undefined;
}

/**
 * <p>The details of a task definition that describes the container and volume definitions of an
 *    Amazon ECS task.</p>
 * @public
 */
export interface EcsTaskDetails {
  /**
   * <p>A list of containers that are included in the <code>taskProperties</code> list.</p>
   * @public
   */
  containers?: TaskContainerDetails[] | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the container instance that hosts the task.</p>
   * @public
   */
  containerInstanceArn?: string | undefined;

  /**
   * <p>The ARN of the Amazon ECS task.</p>
   * @public
   */
  taskArn?: string | undefined;

  /**
   * <p>The amount of ephemeral storage allocated for the task.</p>
   * @public
   */
  ephemeralStorage?: EphemeralStorage | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the execution role that Batch can assume. For more information, see
   *     <a href="https://docs.aws.amazon.com/batch/latest/userguide/execution-IAM-role.html">Batch execution IAM
   *     role</a> in the <i>Batch User Guide</i>.</p>
   * @public
   */
  executionRoleArn?: string | undefined;

  /**
   * <p>The Fargate platform version where the jobs are running.</p>
   * @public
   */
  platformVersion?: string | undefined;

  /**
   * <p>The IPC resource namespace to use for the containers in the task. The valid values are
   *    <code>host</code>, <code>task</code>, or <code>none</code>. For more information see <code>ipcMode</code> in <a href="https://docs.aws.amazon.com/batch/latest/APIReference/API_EcsTaskProperties.html">EcsTaskProperties</a>.</p>
   * @public
   */
  ipcMode?: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the IAM role that the container can assume for Amazon Web Services permissions. For more
   *    information, see <a href="https://docs.aws.amazon.com/AmazonECS/latest/developerguide/task-iam-roles.html">IAM roles for tasks</a> in the
   *     <i>Amazon Elastic Container Service Developer Guide</i>.</p>
   *          <note>
   *             <p>This is object is comparable to <a href="https://docs.aws.amazon.com/batch/latest/APIReference/API_ContainerProperties.html">ContainerProperties:jobRoleArn</a>.</p>
   *          </note>
   * @public
   */
  taskRoleArn?: string | undefined;

  /**
   * <p>The process namespace to use for the containers in the task. The valid values are
   *    <code>host</code>, or <code>task</code>. For more information see <code>pidMode</code> in <a href="https://docs.aws.amazon.com/batch/latest/APIReference/API_EcsTaskProperties.html">EcsTaskProperties</a>.</p>
   * @public
   */
  pidMode?: string | undefined;

  /**
   * <p>The network configuration for jobs that are running on Fargate resources. Jobs that are
   *    running on Amazon EC2 resources must not specify this parameter.</p>
   * @public
   */
  networkConfiguration?: NetworkConfiguration | undefined;

  /**
   * <p>An object that represents the compute environment architecture for Batch jobs on
   *    Fargate.</p>
   * @public
   */
  runtimePlatform?: RuntimePlatform | undefined;

  /**
   * <p>A list of data volumes used in a job.</p>
   * @public
   */
  volumes?: Volume[] | undefined;

  /**
   * <p>Determines whether execute command functionality is turned on for this task. If <code>true</code>, execute
   *             command functionality is turned on all the containers in the task.</p>
   * @public
   */
  enableExecuteCommand?: boolean | undefined;
}

/**
 * <p>An object that contains the details for the Amazon ECS resources of a job.</p>
 * @public
 */
export interface EcsPropertiesDetail {
  /**
   * <p>The properties for the Amazon ECS task definition of a job.</p>
   * @public
   */
  taskProperties?: EcsTaskDetails[] | undefined;
}

/**
 * <p>An object that represents the details for an attempt for a job attempt that an Amazon EKS
 *    container runs.</p>
 * @public
 */
export interface EksAttemptContainerDetail {
  /**
   * <p>The name of a container.</p>
   * @public
   */
  name?: string | undefined;

  /**
   * <p>The ID for the container.</p>
   * @public
   */
  containerID?: string | undefined;

  /**
   * <p>The exit code returned for the job attempt. A non-zero exit code is considered
   *    failed.</p>
   * @public
   */
  exitCode?: number | undefined;

  /**
   * <p>A short (255 max characters) human-readable string to provide additional details for a
   *    running or stopped container.</p>
   * @public
   */
  reason?: string | undefined;
}

/**
 * <p>An object that represents the details of a job attempt for a job attempt by an Amazon EKS
 *    container.</p>
 * @public
 */
export interface EksAttemptDetail {
  /**
   * <p>The details for the final status of the containers for this job attempt.</p>
   * @public
   */
  containers?: EksAttemptContainerDetail[] | undefined;

  /**
   * <p>The details for the init containers.</p>
   * @public
   */
  initContainers?: EksAttemptContainerDetail[] | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the Amazon EKS cluster.</p>
   * @public
   */
  eksClusterArn?: string | undefined;

  /**
   * <p>The name of the pod for this job attempt.</p>
   * @public
   */
  podName?: string | undefined;

  /**
   * <p>The namespace of the Amazon EKS cluster that the pod exists in.</p>
   * @public
   */
  podNamespace?: string | undefined;

  /**
   * <p>The name of the node for this job attempt.</p>
   * @public
   */
  nodeName?: string | undefined;

  /**
   * <p>The Unix timestamp (in milliseconds) for when the attempt was started (when the attempt
   *    transitioned from the <code>STARTING</code> state to the <code>RUNNING</code> state).</p>
   * @public
   */
  startedAt?: number | undefined;

  /**
   * <p>The Unix timestamp (in milliseconds) for when the attempt was stopped. This happens when the
   *    attempt transitioned from the <code>RUNNING</code> state to a terminal state, such as
   *     <code>SUCCEEDED</code> or <code>FAILED</code>.</p>
   * @public
   */
  stoppedAt?: number | undefined;

  /**
   * <p>A short, human-readable string to provide additional details for the current status of the
   *    job attempt.</p>
   * @public
   */
  statusReason?: string | undefined;
}

/**
 * <p>The details for container properties that are returned by <code>DescribeJobs</code> for jobs
 *    that use Amazon EKS.</p>
 * @public
 */
export interface EksContainerDetail {
  /**
   * <p>The name of the container. If the name isn't specified, the default name
   *     "<code>Default</code>" is used. Each container in a pod must have a unique name.</p>
   * @public
   */
  name?: string | undefined;

  /**
   * <p>The Docker image used to start the container.</p>
   * @public
   */
  image?: string | undefined;

  /**
   * <p>The image pull policy for the container. Supported values are <code>Always</code>,
   *     <code>IfNotPresent</code>, and <code>Never</code>. This parameter defaults to
   *     <code>Always</code> if the <code>:latest</code> tag is specified, <code>IfNotPresent</code>
   *    otherwise. For more information, see <a href="https://kubernetes.io/docs/concepts/containers/images/#updating-images">Updating
   *     images</a> in the <i>Kubernetes documentation</i>.</p>
   * @public
   */
  imagePullPolicy?: string | undefined;

  /**
   * <p>The entrypoint for the container. For more information, see <a href="https://kubernetes.io/docs/reference/kubernetes-api/workload-resources/pod-v1/#entrypoint">Entrypoint</a> in the <i>Kubernetes documentation</i>.</p>
   * @public
   */
  command?: string[] | undefined;

  /**
   * <p>An array of arguments to the entrypoint. If this isn't specified, the <code>CMD</code> of
   *    the container image is used. This corresponds to the <code>args</code> member in the <a href="https://kubernetes.io/docs/reference/kubernetes-api/workload-resources/pod-v1/#entrypoint">Entrypoint</a> portion of the <a href="https://kubernetes.io/docs/reference/kubernetes-api/workload-resources/pod-v1/">Pod</a>
   *    in Kubernetes. Environment variable references are expanded using the container's environment.</p>
   *          <p>If the referenced environment variable doesn't exist, the reference in the command isn't
   *    changed. For example, if the reference is to "<code>$(NAME1)</code>" and the <code>NAME1</code>
   *    environment variable doesn't exist, the command string will remain "<code>$(NAME1)</code>".
   *     <code>$$</code> is replaced with <code>$</code> and the resulting string isn't expanded. For
   *    example, <code>$$(VAR_NAME)</code> is passed as <code>$(VAR_NAME)</code> whether or not the
   *     <code>VAR_NAME</code> environment variable exists. For more information, see <a href="https://docs.docker.com/engine/reference/builder/#cmd">Dockerfile reference: CMD</a>
   *    and <a href="https://kubernetes.io/docs/tasks/inject-data-application/define-command-argument-container/">Define a command and arguments for a pod</a> in the <i>Kubernetes
   *     documentation</i>.</p>
   * @public
   */
  args?: string[] | undefined;

  /**
   * <p>The environment variables to pass to a container.</p>
   *          <note>
   *             <p>Environment variables cannot start with "<code>AWS_BATCH</code>". This naming
   *  convention is reserved for variables that Batch sets.</p>
   *          </note>
   * @public
   */
  env?: EksContainerEnvironmentVariable[] | undefined;

  /**
   * <p>The type and amount of resources to assign to a container. The supported resources include
   *     <code>memory</code>, <code>cpu</code>, and <code>nvidia.com/gpu</code>. For more information,
   *    see <a href="https://kubernetes.io/docs/concepts/configuration/manage-resources-containers/">Resource management for pods and containers</a> in the <i>Kubernetes
   *     documentation</i>.</p>
   * @public
   */
  resources?: EksContainerResourceRequirements | undefined;

  /**
   * <p>The exit code returned for the job attempt. A non-zero exit code is considered
   *    failed.</p>
   * @public
   */
  exitCode?: number | undefined;

  /**
   * <p>A short human-readable string to provide additional details for a running or stopped
   *    container. It can be up to 255 characters long.</p>
   * @public
   */
  reason?: string | undefined;

  /**
   * <p>The volume mounts for the container. Batch supports <code>emptyDir</code>,
   *     <code>hostPath</code>, and <code>secret</code> volume types. For more information about volumes
   *    and volume mounts in Kubernetes, see <a href="https://kubernetes.io/docs/concepts/storage/volumes/">Volumes</a> in the <i>Kubernetes documentation</i>.</p>
   * @public
   */
  volumeMounts?: EksContainerVolumeMount[] | undefined;

  /**
   * <p>The security context for a job. For more information, see <a href="https://kubernetes.io/docs/tasks/configure-pod-container/security-context/">Configure a
   *     security context for a pod or container</a> in the <i>Kubernetes
   *     documentation</i>.</p>
   * @public
   */
  securityContext?: EksContainerSecurityContext | undefined;
}

/**
 * <p>The details for the pod.</p>
 * @public
 */
export interface EksPodPropertiesDetail {
  /**
   * <p>The name of the service account that's used to run the pod. For more information, see
   *     <a href="https://docs.aws.amazon.com/eks/latest/userguide/service-accounts.html">Kubernetes service
   *     accounts</a> and <a href="https://docs.aws.amazon.com/eks/latest/userguide/associate-service-account-role.html">Configure a Kubernetes service account
   *     to assume an IAM role</a> in the <i>Amazon EKS User Guide</i> and <a href="https://kubernetes.io/docs/tasks/configure-pod-container/configure-service-account/">Configure service accounts for pods</a> in the <i>Kubernetes
   *    documentation</i>.</p>
   * @public
   */
  serviceAccountName?: string | undefined;

  /**
   * <p>Indicates if the pod uses the hosts' network IP address. The default value is
   *     <code>true</code>. Setting this to <code>false</code> enables the Kubernetes pod networking model.
   *    Most Batch workloads are egress-only and don't require the overhead of IP allocation for each
   *    pod for incoming connections. For more information, see <a href="https://kubernetes.io/docs/concepts/security/pod-security-policy/#host-namespaces">Host
   *     namespaces</a> and <a href="https://kubernetes.io/docs/concepts/workloads/pods/#pod-networking">Pod networking</a>
   *    in the <i>Kubernetes documentation</i>.</p>
   * @public
   */
  hostNetwork?: boolean | undefined;

  /**
   * <p>The DNS policy for the pod. The default value is <code>ClusterFirst</code>. If the
   *     <code>hostNetwork</code> parameter is not specified, the default is
   *     <code>ClusterFirstWithHostNet</code>. <code>ClusterFirst</code> indicates that any DNS query
   *    that does not match the configured cluster domain suffix is forwarded to the upstream nameserver
   *    inherited from the node. If no value was specified for <code>dnsPolicy</code> in the <a href="https://docs.aws.amazon.com/batch/latest/APIReference/API_RegisterJobDefinition.html">RegisterJobDefinition</a> API operation, then no value will be returned for
   *     <code>dnsPolicy</code> by either of <a href="https://docs.aws.amazon.com/batch/latest/APIReference/API_DescribeJobDefinitions.html">DescribeJobDefinitions</a>
   *    or <a href="https://docs.aws.amazon.com/batch/latest/APIReference/API_DescribeJobs.html">DescribeJobs</a> API operations. The pod spec setting will contain either
   *     <code>ClusterFirst</code> or <code>ClusterFirstWithHostNet</code>, depending on the value of the
   *     <code>hostNetwork</code> parameter. For more information, see <a href="https://kubernetes.io/docs/concepts/services-networking/dns-pod-service/#pod-s-dns-policy">Pod's DNS policy</a> in the <i>Kubernetes documentation</i>.</p>
   *          <p>Valid values: <code>Default</code> | <code>ClusterFirst</code> |
   *     <code>ClusterFirstWithHostNet</code>
   *          </p>
   * @public
   */
  dnsPolicy?: string | undefined;

  /**
   * <p>Displays the reference pointer to the Kubernetes secret resource. These secrets help to gain
   *    access to pull an images from a private registry.</p>
   * @public
   */
  imagePullSecrets?: ImagePullSecret[] | undefined;

  /**
   * <p>The properties of the container that's used on the Amazon EKS pod.</p>
   * @public
   */
  containers?: EksContainerDetail[] | undefined;

  /**
   * <p>The container registered with the Amazon EKS Connector agent and persists the registration
   *    information in the Kubernetes backend data store.</p>
   * @public
   */
  initContainers?: EksContainerDetail[] | undefined;

  /**
   * <p>Specifies the volumes for a job definition using Amazon EKS resources.</p>
   * @public
   */
  volumes?: EksVolume[] | undefined;

  /**
   * <p>The name of the pod for this job.</p>
   * @public
   */
  podName?: string | undefined;

  /**
   * <p>The name of the node for this job.</p>
   * @public
   */
  nodeName?: string | undefined;

  /**
   * <p>Describes and uniquely identifies Kubernetes resources. For example, the compute environment that
   *    a pod runs in or the <code>jobID</code> for a job running in the pod. For more information, see
   *     <a href="https://kubernetes.io/docs/concepts/overview/working-with-objects/kubernetes-objects/">Understanding Kubernetes Objects</a> in the <i>Kubernetes documentation</i>.</p>
   * @public
   */
  metadata?: EksMetadata | undefined;

  /**
   * <p>Indicates if the processes in a container are shared, or visible, to other containers in the
   *    same pod. For more information, see <a href="https://kubernetes.io/docs/tasks/configure-pod-container/share-process-namespace/">Share
   *     Process Namespace between Containers in a Pod</a>.</p>
   * @public
   */
  shareProcessNamespace?: boolean | undefined;
}

/**
 * <p>An object that contains the details for the Kubernetes resources of a job.</p>
 * @public
 */
export interface EksPropertiesDetail {
  /**
   * <p>The properties for the Kubernetes pod resources of a job.</p>
   * @public
   */
  podProperties?: EksPodPropertiesDetail | undefined;
}

/**
 * <p>An object that represents the details of a multi-node parallel job node.</p>
 * @public
 */
export interface NodeDetails {
  /**
   * <p>The node index for the node. Node index numbering starts at zero. This index is also
   *    available on the node with the <code>AWS_BATCH_JOB_NODE_INDEX</code> environment variable.</p>
   * @public
   */
  nodeIndex?: number | undefined;

  /**
   * <p>Specifies whether the current node is the main node for a multi-node parallel job.</p>
   * @public
   */
  isMainNode?: boolean | undefined;
}

/**
 * @public
 * @enum
 */
export const JobStatus = {
  FAILED: "FAILED",
  PENDING: "PENDING",
  RUNNABLE: "RUNNABLE",
  RUNNING: "RUNNING",
  STARTING: "STARTING",
  SUBMITTED: "SUBMITTED",
  SUCCEEDED: "SUCCEEDED",
} as const;

/**
 * @public
 */
export type JobStatus = (typeof JobStatus)[keyof typeof JobStatus];

/**
 * <p>An object that represents an Batch job.</p>
 * @public
 */
export interface JobDetail {
  /**
   * <p>The Amazon Resource Name (ARN) of the job.</p>
   * @public
   */
  jobArn?: string | undefined;

  /**
   * <p>The job name.</p>
   * @public
   */
  jobName: string | undefined;

  /**
   * <p>The job ID.</p>
   * @public
   */
  jobId: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the job queue that the job is associated with.</p>
   * @public
   */
  jobQueue: string | undefined;

  /**
   * <p>The current status for the job.</p>
   *          <note>
   *             <p>If your jobs don't progress to <code>STARTING</code>, see <a href="https://docs.aws.amazon.com/batch/latest/userguide/troubleshooting.html#job_stuck_in_runnable">Jobs stuck in RUNNABLE
   *      status</a> in the troubleshooting section of the
   *     <i>Batch User Guide</i>.</p>
   *          </note>
   * @public
   */
  status: JobStatus | undefined;

  /**
   * <p>The share identifier for the job.</p>
   * @public
   */
  shareIdentifier?: string | undefined;

  /**
   * <p>The scheduling policy of the job definition. This only affects jobs in job queues with a
   *    fair-share policy. Jobs with a higher scheduling priority are scheduled before jobs with a lower
   *    scheduling priority.</p>
   * @public
   */
  schedulingPriority?: number | undefined;

  /**
   * <p>A list of job attempts that are associated with this job.</p>
   * @public
   */
  attempts?: AttemptDetail[] | undefined;

  /**
   * <p>A short, human-readable string to provide more details for the current status of the
   *    job.</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>CAPACITY:INSUFFICIENT_INSTANCE_CAPACITY</code> - All compute environments have
   *      insufficient capacity to service the job.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>MISCONFIGURATION:COMPUTE_ENVIRONMENT_MAX_RESOURCE</code> - All compute environments
   *      have a <code>maxVcpu</code> setting that is smaller than the job requirements.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>MISCONFIGURATION:JOB_RESOURCE_REQUIREMENT</code> - All compute environments have no
   *      connected instances that meet the job requirements.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>MISCONFIGURATION:SERVICE_ROLE_PERMISSIONS</code> - All compute environments have
   *      problems with the service role permissions.</p>
   *             </li>
   *          </ul>
   * @public
   */
  statusReason?: string | undefined;

  /**
   * <p>The Unix timestamp (in milliseconds) for when the job was created. For non-array jobs and
   *    parent array jobs, this is when the job entered the <code>SUBMITTED</code> state. This is
   *    specifically at the time <a href="https://docs.aws.amazon.com/batch/latest/APIReference/API_SubmitJob.html">SubmitJob</a> was called. For array child
   *    jobs, this is when the child job was spawned by its parent and entered the <code>PENDING</code>
   *    state.</p>
   * @public
   */
  createdAt?: number | undefined;

  /**
   * <p>The retry strategy to use for this job if an attempt fails.</p>
   * @public
   */
  retryStrategy?: RetryStrategy | undefined;

  /**
   * <p>The Unix timestamp (in milliseconds) for when the job was started. More specifically, it's
   *    when the job transitioned from the <code>STARTING</code> state to the <code>RUNNING</code> state.
   *   </p>
   * @public
   */
  startedAt: number | undefined;

  /**
   * <p>The Unix timestamp (in milliseconds) for when the job was stopped. More specifically, it's
   *    when the job transitioned from the <code>RUNNING</code> state to a terminal state, such as
   *     <code>SUCCEEDED</code> or <code>FAILED</code>.</p>
   * @public
   */
  stoppedAt?: number | undefined;

  /**
   * <p>A list of job IDs that this job depends on.</p>
   * @public
   */
  dependsOn?: JobDependency[] | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the job definition that this job uses.</p>
   * @public
   */
  jobDefinition: string | undefined;

  /**
   * <p>Additional parameters that are passed to the job that replace parameter substitution
   *    placeholders or override any corresponding parameter defaults from the job definition.</p>
   * @public
   */
  parameters?: Record<string, string> | undefined;

  /**
   * <p>An object that represents the details for the container that's associated with the job. If
   *    the details are for a multiple-container job, this object will be empty. </p>
   * @public
   */
  container?: ContainerDetail | undefined;

  /**
   * <p>An object that represents the details of a node that's associated with a multi-node parallel
   *    job.</p>
   * @public
   */
  nodeDetails?: NodeDetails | undefined;

  /**
   * <p>An object that represents the node properties of a multi-node parallel job.</p>
   *          <note>
   *             <p>This isn't applicable to jobs that are running on Fargate resources.</p>
   *          </note>
   * @public
   */
  nodeProperties?: NodeProperties | undefined;

  /**
   * <p>The array properties of the job, if it's an array job.</p>
   * @public
   */
  arrayProperties?: ArrayPropertiesDetail | undefined;

  /**
   * <p>The timeout configuration for the job.</p>
   * @public
   */
  timeout?: JobTimeout | undefined;

  /**
   * <p>The tags that are applied to the job.</p>
   * @public
   */
  tags?: Record<string, string> | undefined;

  /**
   * <p>Specifies whether to propagate the tags from the job or job definition to the corresponding
   *    Amazon ECS task. If no value is specified, the tags aren't propagated. Tags can only be propagated to
   *    the tasks when the tasks are created. For tags with the same name, job tags are given priority
   *    over job definitions tags. If the total number of combined tags from the job and job definition
   *    is over 50, the job is moved to the <code>FAILED</code> state.</p>
   * @public
   */
  propagateTags?: boolean | undefined;

  /**
   * <p>The platform capabilities required by the job definition. If no value is specified, it
   *    defaults to <code>EC2</code>. Jobs run on Fargate resources specify
   *    <code>FARGATE</code>.</p>
   * @public
   */
  platformCapabilities?: PlatformCapability[] | undefined;

  /**
   * <p>An object with various properties that are specific to Amazon EKS based jobs. </p>
   * @public
   */
  eksProperties?: EksPropertiesDetail | undefined;

  /**
   * <p>A list of job attempts that are associated with this job.</p>
   * @public
   */
  eksAttempts?: EksAttemptDetail[] | undefined;

  /**
   * <p>An object with properties that are specific to Amazon ECS-based jobs. </p>
   * @public
   */
  ecsProperties?: EcsPropertiesDetail | undefined;

  /**
   * <p>Indicates whether the job is canceled.</p>
   * @public
   */
  isCancelled?: boolean | undefined;

  /**
   * <p>Indicates whether the job is terminated.</p>
   * @public
   */
  isTerminated?: boolean | undefined;

  /**
   * <p>Contains a list of consumable resources required by the job.</p>
   * @public
   */
  consumableResourceProperties?: ConsumableResourceProperties | undefined;
}

/**
 * @public
 */
export interface DescribeJobsResponse {
  /**
   * <p>The list of jobs.</p>
   * @public
   */
  jobs?: JobDetail[] | undefined;
}

/**
 * <p>Contains the parameters for <code>DescribeSchedulingPolicies</code>.</p>
 * @public
 */
export interface DescribeSchedulingPoliciesRequest {
  /**
   * <p>A list of up to 100 scheduling policy Amazon Resource Name (ARN) entries.</p>
   * @public
   */
  arns: string[] | undefined;
}

/**
 * <p>An object that represents a scheduling policy.</p>
 * @public
 */
export interface SchedulingPolicyDetail {
  /**
   * <p>The name of the fair-share scheduling policy.</p>
   * @public
   */
  name: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the scheduling policy. An example is
   *      <code>arn:<i>aws</i>:batch:<i>us-east-1</i>:<i>123456789012</i>:scheduling-policy/<i>HighPriority</i>
   *             </code>.</p>
   * @public
   */
  arn: string | undefined;

  /**
   * <p>The fair-share scheduling policy details.</p>
   * @public
   */
  fairsharePolicy?: FairsharePolicy | undefined;

  /**
   * <p>The tags that you apply to the fair-share scheduling policy to categorize and organize your resources.
   *    Each tag consists of a key and an optional value. For more information, see <a href="https://docs.aws.amazon.com/general/latest/gr/aws_tagging.html">Tagging Amazon Web Services resources</a> in
   *     <i>Amazon Web Services General Reference</i>.</p>
   * @public
   */
  tags?: Record<string, string> | undefined;
}

/**
 * @public
 */
export interface DescribeSchedulingPoliciesResponse {
  /**
   * <p>The list of scheduling policies.</p>
   * @public
   */
  schedulingPolicies?: SchedulingPolicyDetail[] | undefined;
}

/**
 * @public
 */
export interface DescribeServiceEnvironmentsRequest {
  /**
   * <p>An array of service environment names or ARN entries.</p>
   * @public
   */
  serviceEnvironments?: string[] | undefined;

  /**
   * <p>The maximum number of results returned by <code>DescribeServiceEnvironments</code> in paginated output. When this parameter is used, <code>DescribeServiceEnvironments</code> only returns <code>maxResults</code> results in a single page and a <code>nextToken</code> response element. The remaining results of the initial request can be seen by sending another <code>DescribeServiceEnvironments</code> request with the returned <code>nextToken</code> value. This value can be between 1 and 100. If this parameter isn't used, then <code>DescribeServiceEnvironments</code> returns up to 100 results and a <code>nextToken</code> value if applicable.</p>
   * @public
   */
  maxResults?: number | undefined;

  /**
   * <p>The <code>nextToken</code> value returned from a previous paginated <code>DescribeServiceEnvironments</code> request where <code>maxResults</code> was used and the results exceeded the value of that parameter. Pagination continues from the end of the previous results that returned the <code>nextToken</code> value. This value is <code>null</code> when there are no more results to return.</p>
   *          <note>
   *             <p>Treat this token as an opaque identifier that's only used to
   *  retrieve the next items in a list and not for other programmatic purposes.</p>
   *          </note>
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * @public
 * @enum
 */
export const ServiceEnvironmentStatus = {
  CREATING: "CREATING",
  DELETED: "DELETED",
  DELETING: "DELETING",
  INVALID: "INVALID",
  UPDATING: "UPDATING",
  VALID: "VALID",
} as const;

/**
 * @public
 */
export type ServiceEnvironmentStatus = (typeof ServiceEnvironmentStatus)[keyof typeof ServiceEnvironmentStatus];

/**
 * <p>Detailed information about a service environment, including its configuration, state, and capacity limits.</p>
 * @public
 */
export interface ServiceEnvironmentDetail {
  /**
   * <p>The name of the service environment.</p>
   * @public
   */
  serviceEnvironmentName: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the service environment.</p>
   * @public
   */
  serviceEnvironmentArn: string | undefined;

  /**
   * <p>The type of service environment. For SageMaker Training jobs, this value is <code>SAGEMAKER_TRAINING</code>.</p>
   * @public
   */
  serviceEnvironmentType: ServiceEnvironmentType | undefined;

  /**
   * <p>The state of the service environment. Valid values are <code>ENABLED</code> and <code>DISABLED</code>.</p>
   * @public
   */
  state?: ServiceEnvironmentState | undefined;

  /**
   * <p>The current status of the service environment.</p>
   * @public
   */
  status?: ServiceEnvironmentStatus | undefined;

  /**
   * <p>The capacity limits for the service environment. This defines the maximum resources that can be used by service jobs in this environment.</p>
   * @public
   */
  capacityLimits: CapacityLimit[] | undefined;

  /**
   * <p>The tags associated with the service environment. Each tag consists of a key and an optional value. For more information, see <a href="https://docs.aws.amazon.com/batch/latest/userguide/using-tags.html">Tagging your Batch resources</a>.</p>
   * @public
   */
  tags?: Record<string, string> | undefined;
}

/**
 * @public
 */
export interface DescribeServiceEnvironmentsResponse {
  /**
   * <p>The list of service environments that match the request.</p>
   * @public
   */
  serviceEnvironments?: ServiceEnvironmentDetail[] | undefined;

  /**
   * <p>The <code>nextToken</code> value to include in a future <code>DescribeServiceEnvironments</code> request. When the results of a <code>DescribeServiceEnvironments</code> request exceed <code>maxResults</code>, this value can be used to retrieve the next page of results. This value is <code>null</code> when there are no more results to return.</p>
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * @public
 */
export interface DescribeServiceJobRequest {
  /**
   * <p>The job ID for the service job to describe.</p>
   * @public
   */
  jobId: string | undefined;
}

/**
 * @public
 * @enum
 */
export const ServiceResourceIdName = {
  SAGEMAKER_TRAINING_JOB_ARN: "TrainingJobArn",
} as const;

/**
 * @public
 */
export type ServiceResourceIdName = (typeof ServiceResourceIdName)[keyof typeof ServiceResourceIdName];

/**
 * <p>The Batch unique identifier.</p>
 * @public
 */
export interface ServiceResourceId {
  /**
   * <p>The name of the resource identifier. </p>
   * @public
   */
  name: ServiceResourceIdName | undefined;

  /**
   * <p>The value of the resource identifier. </p>
   * @public
   */
  value: string | undefined;
}

/**
 * <p>Detailed information about an attempt to run a service job.</p>
 * @public
 */
export interface ServiceJobAttemptDetail {
  /**
   * <p>The service resource identifier associated with the service job attempt.</p>
   * @public
   */
  serviceResourceId?: ServiceResourceId | undefined;

  /**
   * <p>The Unix timestamp (in milliseconds) for when the service job attempt was started.</p>
   * @public
   */
  startedAt?: number | undefined;

  /**
   * <p>The Unix timestamp (in milliseconds) for when the service job attempt stopped running.</p>
   * @public
   */
  stoppedAt?: number | undefined;

  /**
   * <p>A string that provides additional details for the current status of the service job attempt.</p>
   * @public
   */
  statusReason?: string | undefined;
}

/**
 * <p>Information about the latest attempt of a service job. A Service job can transition from <code>SCHEDULED</code> back to <code>RUNNABLE</code> state when they encounter capacity constraints.</p>
 * @public
 */
export interface LatestServiceJobAttempt {
  /**
   * <p>The service resource identifier associated with the service job attempt.</p>
   * @public
   */
  serviceResourceId?: ServiceResourceId | undefined;
}

/**
 * @public
 * @enum
 */
export const ServiceJobRetryAction = {
  EXIT: "EXIT",
  RETRY: "RETRY",
} as const;

/**
 * @public
 */
export type ServiceJobRetryAction = (typeof ServiceJobRetryAction)[keyof typeof ServiceJobRetryAction];

/**
 * <p>Specifies conditions for when to exit or retry a service job based on the exit status or status reason.</p>
 * @public
 */
export interface ServiceJobEvaluateOnExit {
  /**
   * <p>The action to take if the service job exits with the specified condition. Valid values are <code>RETRY</code> and <code>EXIT</code>.</p>
   * @public
   */
  action?: ServiceJobRetryAction | undefined;

  /**
   * <p>Contains a glob pattern to match against the StatusReason returned for a job. The pattern can contain up to 512 characters and can contain all printable characters. It can optionally end with an asterisk (*) so that only the start of the string needs to be an exact match.</p>
   * @public
   */
  onStatusReason?: string | undefined;
}

/**
 * <p>The retry strategy for service jobs. This defines how many times to retry a failed service job and under what conditions. For more information, see <a href="https://docs.aws.amazon.com/batch/latest/userguide/service-job-retries.html">Service job retry strategies</a> in the <i>Batch User Guide</i>.</p>
 * @public
 */
export interface ServiceJobRetryStrategy {
  /**
   * <p>The number of times to move a service job to <code>RUNNABLE</code> status. You can specify between 1 and 10 attempts.</p>
   * @public
   */
  attempts: number | undefined;

  /**
   * <p>Array of <code>ServiceJobEvaluateOnExit</code> objects that specify conditions under which the service job should be retried or failed.</p>
   * @public
   */
  evaluateOnExit?: ServiceJobEvaluateOnExit[] | undefined;
}

/**
 * @public
 * @enum
 */
export const ServiceJobType = {
  SAGEMAKER_TRAINING: "SAGEMAKER_TRAINING",
} as const;

/**
 * @public
 */
export type ServiceJobType = (typeof ServiceJobType)[keyof typeof ServiceJobType];

/**
 * @public
 * @enum
 */
export const ServiceJobStatus = {
  FAILED: "FAILED",
  PENDING: "PENDING",
  RUNNABLE: "RUNNABLE",
  RUNNING: "RUNNING",
  SCHEDULED: "SCHEDULED",
  STARTING: "STARTING",
  SUBMITTED: "SUBMITTED",
  SUCCEEDED: "SUCCEEDED",
} as const;

/**
 * @public
 */
export type ServiceJobStatus = (typeof ServiceJobStatus)[keyof typeof ServiceJobStatus];

/**
 * <p>The timeout configuration for service jobs. </p>
 * @public
 */
export interface ServiceJobTimeout {
  /**
   * <p>The maximum duration in seconds that a service job attempt can run. After this time is reached, Batch terminates the service job attempt.</p>
   * @public
   */
  attemptDurationSeconds?: number | undefined;
}

/**
 * @public
 */
export interface DescribeServiceJobResponse {
  /**
   * <p>A list of job attempts associated with the service job.</p>
   * @public
   */
  attempts?: ServiceJobAttemptDetail[] | undefined;

  /**
   * <p>The Unix timestamp (in milliseconds) for when the service job was created.</p>
   * @public
   */
  createdAt?: number | undefined;

  /**
   * <p>Indicates whether the service job has been terminated.</p>
   * @public
   */
  isTerminated?: boolean | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the service job.</p>
   * @public
   */
  jobArn?: string | undefined;

  /**
   * <p>The job ID for the service job.</p>
   * @public
   */
  jobId: string | undefined;

  /**
   * <p>The name of the service job.</p>
   * @public
   */
  jobName: string | undefined;

  /**
   * <p>The ARN of the job queue that the service job is associated with.</p>
   * @public
   */
  jobQueue: string | undefined;

  /**
   * <p>The latest attempt associated with the service job.</p>
   * @public
   */
  latestAttempt?: LatestServiceJobAttempt | undefined;

  /**
   * <p>The retry strategy to use for failed service jobs that are submitted with this service job.</p>
   * @public
   */
  retryStrategy?: ServiceJobRetryStrategy | undefined;

  /**
   * <p>The scheduling priority of the service job. </p>
   * @public
   */
  schedulingPriority?: number | undefined;

  /**
   * <p>The request, in JSON, for the service that the <code>SubmitServiceJob</code> operation is queueing. </p>
   * @public
   */
  serviceRequestPayload?: string | undefined;

  /**
   * <p>The type of service job. For SageMaker Training jobs, this value is <code>SAGEMAKER_TRAINING</code>.</p>
   * @public
   */
  serviceJobType: ServiceJobType | undefined;

  /**
   * <p>The share identifier for the service job. This is used for fair-share scheduling.</p>
   * @public
   */
  shareIdentifier?: string | undefined;

  /**
   * <p>The Unix timestamp (in milliseconds) for when the service job was started.</p>
   * @public
   */
  startedAt: number | undefined;

  /**
   * <p>The current status of the service job. </p>
   * @public
   */
  status: ServiceJobStatus | undefined;

  /**
   * <p>A short, human-readable string to provide more details for the current status of the service job.</p>
   * @public
   */
  statusReason?: string | undefined;

  /**
   * <p>The Unix timestamp (in milliseconds) for when the service job stopped running.</p>
   * @public
   */
  stoppedAt?: number | undefined;

  /**
   * <p>The tags that are associated with the service job. Each tag consists of a key and an optional value. For more information, see <a href="https://docs.aws.amazon.com/batch/latest/userguide/using-tags.html">Tagging your Batch resources</a>.</p>
   * @public
   */
  tags?: Record<string, string> | undefined;

  /**
   * <p>The timeout configuration for the service job.</p>
   * @public
   */
  timeoutConfig?: ServiceJobTimeout | undefined;
}

/**
 * @public
 */
export interface GetJobQueueSnapshotRequest {
  /**
   * <p>The job queue’s name or full queue Amazon Resource Name (ARN).</p>
   * @public
   */
  jobQueue: string | undefined;
}

/**
 * <p>An object that represents summary details for the first 100 <code>RUNNABLE</code> jobs in a job queue.</p>
 * @public
 */
export interface FrontOfQueueJobSummary {
  /**
   * <p>The ARN for a job in a named job queue.</p>
   * @public
   */
  jobArn?: string | undefined;

  /**
   * <p>The Unix timestamp (in milliseconds) for when the job transitioned to its current position in the job queue.</p>
   * @public
   */
  earliestTimeAtPosition?: number | undefined;
}

/**
 * <p>Contains a list of the first 100 <code>RUNNABLE</code> jobs associated to a single job queue.</p>
 * @public
 */
export interface FrontOfQueueDetail {
  /**
   * <p>The Amazon Resource Names (ARNs) of the first 100 <code>RUNNABLE</code> jobs in a named job queue. For first-in-first-out (FIFO) job queues, jobs are ordered based on their submission time. For fair-share scheduling (FSS) job queues, jobs are ordered based on their job priority and share usage.</p>
   * @public
   */
  jobs?: FrontOfQueueJobSummary[] | undefined;

  /**
   * <p>The Unix timestamp (in milliseconds) for when each of the first 100 <code>RUNNABLE</code> jobs were last updated. </p>
   * @public
   */
  lastUpdatedAt?: number | undefined;
}

/**
 * @public
 */
export interface GetJobQueueSnapshotResponse {
  /**
   * <p>The list of the first 100 <code>RUNNABLE</code> jobs in each job queue. For first-in-first-out (FIFO) job queues, jobs are ordered based on their submission time. For fair-share scheduling (FSS) job queues, jobs are ordered based on their job priority and share usage.</p>
   * @public
   */
  frontOfQueue?: FrontOfQueueDetail | undefined;
}

/**
 * <p>A filter name and value pair that's used to return a more specific list of results from a
 *     <code>ListJobs</code> or <code>ListJobsByConsumableResource</code> API operation.</p>
 * @public
 */
export interface KeyValuesPair {
  /**
   * <p>The name of the filter. Filter names are case sensitive.</p>
   * @public
   */
  name?: string | undefined;

  /**
   * <p>The filter values.</p>
   * @public
   */
  values?: string[] | undefined;
}

/**
 * @public
 */
export interface ListConsumableResourcesRequest {
  /**
   * <p>The filters to apply to the consumable resource list query. If used, only those consumable
   *             resources that match the filter are listed. Filter names and values can be:</p>
   *          <ul>
   *             <li>
   *                <p>name: <code>CONSUMABLE_RESOURCE_NAME </code>
   *                </p>
   *                <p>values: case-insensitive matches for the consumable resource name. If a filter
   *                     value ends with an asterisk (*), it matches any consumable resource name that begins
   *                     with the string before the '*'.</p>
   *             </li>
   *          </ul>
   * @public
   */
  filters?: KeyValuesPair[] | undefined;

  /**
   * <p>The maximum number of results returned by <code>ListConsumableResources</code> in paginated
   *             output. When this parameter is used, <code>ListConsumableResources</code> only returns
   *             <code>maxResults</code> results in a single page and a <code>nextToken</code> response
   *             element. The remaining results of the initial request can be seen by sending another
   *             <code>ListConsumableResources</code> request with the returned <code>nextToken</code> value.
   *             This value can be between 1 and 100. If this parameter isn't
   *             used, then <code>ListConsumableResources</code> returns up to 100 results and
   *             a <code>nextToken</code> value if applicable.</p>
   * @public
   */
  maxResults?: number | undefined;

  /**
   * <p>The <code>nextToken</code> value returned from a previous paginated
   *             <code>ListConsumableResources</code> request where <code>maxResults</code> was used and the
   *             results exceeded the value of that parameter. Pagination continues from the end of the previous
   *             results that returned the <code>nextToken</code> value. This value is <code>null</code> when
   *             there are no more results to return.</p>
   *          <note>
   *             <p>Treat this token as an opaque identifier that's only used to
   *  retrieve the next items in a list and not for other programmatic purposes.</p>
   *          </note>
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * <p>Current information about a consumable resource.</p>
 * @public
 */
export interface ConsumableResourceSummary {
  /**
   * <p>The Amazon Resource Name (ARN) of the consumable resource.</p>
   * @public
   */
  consumableResourceArn: string | undefined;

  /**
   * <p>The name of the consumable resource.</p>
   * @public
   */
  consumableResourceName: string | undefined;

  /**
   * <p>The total amount of the consumable resource that is available.</p>
   * @public
   */
  totalQuantity?: number | undefined;

  /**
   * <p>The amount of the consumable resource that is currently in use.</p>
   * @public
   */
  inUseQuantity?: number | undefined;

  /**
   * <p>Indicates whether the resource is available to be re-used after a job completes. Can be
   *             one of: </p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>REPLENISHABLE</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>NON_REPLENISHABLE</code>
   *                </p>
   *             </li>
   *          </ul>
   * @public
   */
  resourceType?: string | undefined;
}

/**
 * @public
 */
export interface ListConsumableResourcesResponse {
  /**
   * <p>A list of consumable resources that match the request.</p>
   * @public
   */
  consumableResources: ConsumableResourceSummary[] | undefined;

  /**
   * <p>The <code>nextToken</code> value to include in a future <code>ListConsumableResources</code>
   *             request. When the results of a <code>ListConsumableResources</code> request exceed <code>maxResults</code>,
   *             this value can be used to retrieve the next page of results. This value is <code>null</code>
   *             when there are no more results to return.</p>
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * <p>Contains the parameters for <code>ListJobs</code>.</p>
 * @public
 */
export interface ListJobsRequest {
  /**
   * <p>The name or full Amazon Resource Name (ARN) of the job queue used to list jobs.</p>
   * @public
   */
  jobQueue?: string | undefined;

  /**
   * <p>The job ID for an array job. Specifying an array job ID with this parameter lists all
   *       child jobs from within the specified array.</p>
   * @public
   */
  arrayJobId?: string | undefined;

  /**
   * <p>The job ID for a multi-node parallel job. Specifying a multi-node parallel job ID with
   *       this parameter lists all nodes that are associated with the specified job.</p>
   * @public
   */
  multiNodeJobId?: string | undefined;

  /**
   * <p>The job status used to filter jobs in the specified queue. If the <code>filters</code>
   *       parameter is specified, the <code>jobStatus</code> parameter is ignored and jobs with any
   *       status are returned. If you don't specify a status, only <code>RUNNING</code> jobs are
   *       returned.</p>
   * @public
   */
  jobStatus?: JobStatus | undefined;

  /**
   * <p>The maximum number of results returned by <code>ListJobs</code> in a paginated output. When this parameter is used, <code>ListJobs</code> returns up to <code>maxResults</code> results in a single page and a <code>nextToken</code> response element, if applicable. The remaining results of the initial request can be seen by sending another <code>ListJobs</code> request with the returned <code>nextToken</code> value.</p>
   *          <p>The following outlines key parameters and limitations:</p>
   *          <ul>
   *             <li>
   *                <p>The minimum value is 1. </p>
   *             </li>
   *             <li>
   *                <p>When <code>--job-status</code> is used, Batch returns up to 1000 values. </p>
   *             </li>
   *             <li>
   *                <p>When <code>--filters</code> is used, Batch returns up to 100 values.</p>
   *             </li>
   *             <li>
   *                <p>If neither parameter is used, then <code>ListJobs</code> returns up to
   *       1000 results (jobs that are in the <code>RUNNING</code> status) and a <code>nextToken</code> value, if applicable.</p>
   *             </li>
   *          </ul>
   * @public
   */
  maxResults?: number | undefined;

  /**
   * <p>The <code>nextToken</code> value returned from a previous paginated <code>ListJobs</code>
   *       request where <code>maxResults</code> was used and the results exceeded the value of that
   *       parameter. Pagination continues from the end of the previous results that returned the
   *         <code>nextToken</code> value. This value is <code>null</code> when there are no more results
   *       to return.</p>
   *          <note>
   *             <p>Treat this token as an opaque identifier that's only used to
   *  retrieve the next items in a list and not for other programmatic purposes.</p>
   *          </note>
   * @public
   */
  nextToken?: string | undefined;

  /**
   * <p>The filter to apply to the query. Only one filter can be used at a time. When the filter
   *       is used, <code>jobStatus</code> is ignored. The filter doesn't apply to child jobs in an array
   *       or multi-node parallel (MNP) jobs. The results are sorted by the <code>createdAt</code> field,
   *       with the most recent jobs being first.</p>
   *          <dl>
   *             <dt>JOB_NAME</dt>
   *             <dd>
   *                <p>The value of the filter is a case-insensitive match for the job name. If the value
   *             ends with an asterisk (*), the filter matches any job name that begins with the string
   *             before the '*'. This corresponds to the <code>jobName</code> value. For example,
   *               <code>test1</code> matches both <code>Test1</code> and <code>test1</code>, and
   *               <code>test1*</code> matches both <code>test1</code> and <code>Test10</code>. When the
   *               <code>JOB_NAME</code> filter is used, the results are grouped by the job name and
   *             version.</p>
   *             </dd>
   *             <dt>JOB_DEFINITION</dt>
   *             <dd>
   *                <p>The value for the filter is the name or Amazon Resource Name (ARN) of the job definition. This
   *             corresponds to the <code>jobDefinition</code> value. The value is case sensitive. When
   *             the value for the filter is the job definition name, the results include all the jobs
   *             that used any revision of that job definition name. If the value ends with an asterisk
   *             (*), the filter matches any job definition name that begins with the string before the
   *             '*'. For example, <code>jd1</code> matches only <code>jd1</code>, and <code>jd1*</code>
   *             matches both <code>jd1</code> and <code>jd1A</code>. The version of the job definition
   *             that's used doesn't affect the sort order. When the <code>JOB_DEFINITION</code> filter
   *             is used and the ARN is used (which is in the form
   *               <code>arn:$\{Partition\}:batch:$\{Region\}:$\{Account\}:job-definition/$\{JobDefinitionName\}:$\{Revision\}</code>),
   *             the results include jobs that used the specified revision of the job definition.
   *             Asterisk (*) isn't supported when the ARN is used.</p>
   *             </dd>
   *             <dt>BEFORE_CREATED_AT</dt>
   *             <dd>
   *                <p>The value for the filter is the time that's before the job was created. This
   *             corresponds to the <code>createdAt</code> value. The value is a string representation of
   *             the number of milliseconds since 00:00:00 UTC (midnight) on January 1, 1970.</p>
   *             </dd>
   *             <dt>AFTER_CREATED_AT</dt>
   *             <dd>
   *                <p>The value for the filter is the time that's after the job was created. This
   *             corresponds to the <code>createdAt</code> value. The value is a string representation of
   *             the number of milliseconds since 00:00:00 UTC (midnight) on January 1, 1970.</p>
   *             </dd>
   *          </dl>
   * @public
   */
  filters?: KeyValuesPair[] | undefined;
}

/**
 * <p>An object that represents summary details of a container within a job.</p>
 * @public
 */
export interface ContainerSummary {
  /**
   * <p>The exit code to return upon completion.</p>
   * @public
   */
  exitCode?: number | undefined;

  /**
   * <p>A short (255 max characters) human-readable string to provide additional details for a
   *    running or stopped container.</p>
   * @public
   */
  reason?: string | undefined;
}

/**
 * <p>An object that represents the properties of a node that's associated with a multi-node
 *    parallel job.</p>
 * @public
 */
export interface NodePropertiesSummary {
  /**
   * <p>Specifies whether the current node is the main node for a multi-node parallel job.</p>
   * @public
   */
  isMainNode?: boolean | undefined;

  /**
   * <p>The number of nodes that are associated with a multi-node parallel job.</p>
   * @public
   */
  numNodes?: number | undefined;

  /**
   * <p>The node index for the node. Node index numbering begins at zero. This index is also
   *    available on the node with the <code>AWS_BATCH_JOB_NODE_INDEX</code> environment variable.</p>
   * @public
   */
  nodeIndex?: number | undefined;
}

/**
 * <p>An object that represents summary details of a job.</p>
 * @public
 */
export interface JobSummary {
  /**
   * <p>The Amazon Resource Name (ARN) of the job.</p>
   * @public
   */
  jobArn?: string | undefined;

  /**
   * <p>The job ID.</p>
   * @public
   */
  jobId: string | undefined;

  /**
   * <p>The job name.</p>
   * @public
   */
  jobName: string | undefined;

  /**
   * <p>The Unix timestamp (in milliseconds) for when the job was created. For non-array jobs and
   *    parent array jobs, this is when the job entered the <code>SUBMITTED</code> state (at the time
   *     <a href="https://docs.aws.amazon.com/batch/latest/APIReference/API_SubmitJob.html">SubmitJob</a>
   *    was called). For array child jobs, this is when the child job was spawned by its parent and
   *    entered the <code>PENDING</code> state.</p>
   * @public
   */
  createdAt?: number | undefined;

  /**
   * <p>The current status for the job.</p>
   * @public
   */
  status?: JobStatus | undefined;

  /**
   * <p>A short, human-readable string to provide more details for the current status of the
   *    job.</p>
   * @public
   */
  statusReason?: string | undefined;

  /**
   * <p>The Unix timestamp for when the job was started. More specifically, it's when the job
   *    transitioned from the <code>STARTING</code> state to the <code>RUNNING</code> state.</p>
   * @public
   */
  startedAt?: number | undefined;

  /**
   * <p>The Unix timestamp for when the job was stopped. More specifically, it's when the job
   *    transitioned from the <code>RUNNING</code> state to a terminal state, such as
   *     <code>SUCCEEDED</code> or <code>FAILED</code>.</p>
   * @public
   */
  stoppedAt?: number | undefined;

  /**
   * <p>An object that represents the details of the container that's associated with the
   *    job.</p>
   * @public
   */
  container?: ContainerSummary | undefined;

  /**
   * <p>The array properties of the job, if it's an array job.</p>
   * @public
   */
  arrayProperties?: ArrayPropertiesSummary | undefined;

  /**
   * <p>The node properties for a single node in a job summary list.</p>
   *          <note>
   *             <p>This isn't applicable to jobs that are running on Fargate resources.</p>
   *          </note>
   * @public
   */
  nodeProperties?: NodePropertiesSummary | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the job definition.</p>
   * @public
   */
  jobDefinition?: string | undefined;
}

/**
 * @public
 */
export interface ListJobsResponse {
  /**
   * <p>A list of job summaries that match the request.</p>
   * @public
   */
  jobSummaryList: JobSummary[] | undefined;

  /**
   * <p>The <code>nextToken</code> value to include in a future <code>ListJobs</code> request.
   *       When the results of a <code>ListJobs</code> request exceed <code>maxResults</code>, this value
   *       can be used to retrieve the next page of results. This value is <code>null</code> when there
   *       are no more results to return.</p>
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListJobsByConsumableResourceRequest {
  /**
   * <p>The name or ARN of the consumable resource.</p>
   * @public
   */
  consumableResource: string | undefined;

  /**
   * <p>The filters to apply to the job list query. If used, only those jobs requiring the specified
   *             consumable resource (<code>consumableResource</code>) and that match the value of the filters
   *             are listed. The filter names and values can be:</p>
   *          <ul>
   *             <li>
   *                <p>name: <code>JOB_STATUS</code>
   *                </p>
   *                <p>values: <code>SUBMITTED | PENDING | RUNNABLE | STARTING | RUNNING | SUCCEEDED | FAILED</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>name: <code>JOB_NAME </code>
   *                </p>
   *                <p>The values are case-insensitive matches for the job name. If a filter value ends
   *                     with an asterisk (*), it matches any job name that begins with the string before
   *                     the '*'.</p>
   *             </li>
   *          </ul>
   * @public
   */
  filters?: KeyValuesPair[] | undefined;

  /**
   * <p>The maximum number of results returned by <code>ListJobsByConsumableResource</code> in paginated
   *             output. When this parameter is used, <code>ListJobsByConsumableResource</code> only returns
   *             <code>maxResults</code> results in a single page and a <code>nextToken</code> response
   *             element. The remaining results of the initial request can be seen by sending another
   *             <code>ListJobsByConsumableResource</code> request with the returned <code>nextToken</code> value.
   *             This value can be between 1 and 100. If this parameter isn't
   *             used, then <code>ListJobsByConsumableResource</code> returns up to 100 results
   *             and a <code>nextToken</code> value if applicable.</p>
   * @public
   */
  maxResults?: number | undefined;

  /**
   * <p>The <code>nextToken</code> value returned from a previous paginated
   *             <code>ListJobsByConsumableResource</code> request where <code>maxResults</code> was used and the
   *             results exceeded the value of that parameter. Pagination continues from the end of the previous
   *             results that returned the <code>nextToken</code> value. This value is <code>null</code> when
   *             there are no more results to return.</p>
   *          <note>
   *             <p>Treat this token as an opaque identifier that's only used to
   *  retrieve the next items in a list and not for other programmatic purposes.</p>
   *          </note>
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * <p>Current information about a consumable resource required by a job.</p>
 * @public
 */
export interface ListJobsByConsumableResourceSummary {
  /**
   * <p>The Amazon Resource Name (ARN) of the job.</p>
   * @public
   */
  jobArn: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the job queue.</p>
   * @public
   */
  jobQueueArn: string | undefined;

  /**
   * <p>The name of the job.</p>
   * @public
   */
  jobName: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the job definition.</p>
   * @public
   */
  jobDefinitionArn?: string | undefined;

  /**
   * <p>The fair-share scheduling policy identifier for the job.</p>
   * @public
   */
  shareIdentifier?: string | undefined;

  /**
   * <p>The status of the job. Can be one of:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>SUBMITTED</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>PENDING</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>RUNNABLE</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>STARTING</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>RUNNING</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>SUCCEEDED</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>FAILED</code>
   *                </p>
   *             </li>
   *          </ul>
   * @public
   */
  jobStatus: string | undefined;

  /**
   * <p>The total amount of the consumable resource that is available.</p>
   * @public
   */
  quantity: number | undefined;

  /**
   * <p>A short, human-readable string to provide more details for the current status of the job.</p>
   * @public
   */
  statusReason?: string | undefined;

  /**
   * <p>The Unix timestamp for when the job was started. More specifically, it's when the job transitioned
   *             from the <code>STARTING</code> state to the <code>RUNNING</code> state.</p>
   * @public
   */
  startedAt?: number | undefined;

  /**
   * <p>The Unix timestamp (in milliseconds) for when the consumable resource was created.</p>
   * @public
   */
  createdAt: number | undefined;

  /**
   * <p>Contains a list of consumable resources required by the job.</p>
   * @public
   */
  consumableResourceProperties: ConsumableResourceProperties | undefined;
}

/**
 * @public
 */
export interface ListJobsByConsumableResourceResponse {
  /**
   * <p>The list of jobs that require the specified consumable resources.</p>
   * @public
   */
  jobs: ListJobsByConsumableResourceSummary[] | undefined;

  /**
   * <p>The <code>nextToken</code> value to include in a future <code>ListJobsByConsumableResource</code>
   *             request. When the results of a <code>ListJobsByConsumableResource</code> request exceed
   *             <code>maxResults</code>, this value can be used to retrieve the next page of results. This
   *             value is <code>null</code> when there are no more results to return.</p>
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * <p>Contains the parameters for <code>ListSchedulingPolicies</code>.</p>
 * @public
 */
export interface ListSchedulingPoliciesRequest {
  /**
   * <p>The maximum number of results that's returned by <code>ListSchedulingPolicies</code> in
   *       paginated output. When this parameter is used, <code>ListSchedulingPolicies</code> only
   *       returns <code>maxResults</code> results in a single page and a <code>nextToken</code> response
   *       element. You can see the remaining results of the initial request by sending another
   *         <code>ListSchedulingPolicies</code> request with the returned <code>nextToken</code> value.
   *       This value can be between 1 and 100. If this parameter isn't
   *       used, <code>ListSchedulingPolicies</code> returns up to 100 results and a
   *         <code>nextToken</code> value if applicable.</p>
   * @public
   */
  maxResults?: number | undefined;

  /**
   * <p>The <code>nextToken</code> value that's returned from a previous paginated
   *         <code>ListSchedulingPolicies</code> request where <code>maxResults</code> was used and the
   *       results exceeded the value of that parameter. Pagination continues from the end of the
   *       previous results that returned the <code>nextToken</code> value. This value is
   *         <code>null</code> when there are no more results to return.</p>
   *          <note>
   *             <p>Treat this token as an opaque identifier that's only used to
   *  retrieve the next items in a list and not for other programmatic purposes.</p>
   *          </note>
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * <p>An object that contains the details of a scheduling policy that's returned in a
 *     <code>ListSchedulingPolicy</code> action.</p>
 * @public
 */
export interface SchedulingPolicyListingDetail {
  /**
   * <p>Amazon Resource Name (ARN) of the scheduling policy.</p>
   * @public
   */
  arn: string | undefined;
}

/**
 * @public
 */
export interface ListSchedulingPoliciesResponse {
  /**
   * <p>A list of scheduling policies that match the request.</p>
   * @public
   */
  schedulingPolicies?: SchedulingPolicyListingDetail[] | undefined;

  /**
   * <p>The <code>nextToken</code> value to include in a future
   *         <code>ListSchedulingPolicies</code> request. When the results of a
   *         <code>ListSchedulingPolicies</code> request exceed <code>maxResults</code>, this value can
   *       be used to retrieve the next page of results. This value is <code>null</code> when there are
   *       no more results to return.</p>
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListServiceJobsRequest {
  /**
   * <p>The name or ARN of the job queue with which to list service jobs.</p>
   * @public
   */
  jobQueue?: string | undefined;

  /**
   * <p>The job status with which to filter service jobs. </p>
   * @public
   */
  jobStatus?: ServiceJobStatus | undefined;

  /**
   * <p>The maximum number of results returned by <code>ListServiceJobs</code> in paginated output. When this parameter is used, <code>ListServiceJobs</code> only returns <code>maxResults</code> results in a single page and a <code>nextToken</code> response element. The remaining results of the initial request can be seen by sending another <code>ListServiceJobs</code> request with the returned <code>nextToken</code> value. This value can be between 1 and 100. If this parameter isn't used, then <code>ListServiceJobs</code> returns up to 100 results and a <code>nextToken</code> value if applicable.</p>
   * @public
   */
  maxResults?: number | undefined;

  /**
   * <p>The <code>nextToken</code> value returned from a previous paginated <code>ListServiceJobs</code> request where <code>maxResults</code> was used and the results exceeded the value of that parameter. Pagination continues from the end of the previous results that returned the <code>nextToken</code> value. This value is <code>null</code> when there are no more results to return.</p>
   *          <note>
   *             <p>Treat this token as an opaque identifier that's only used to
   *  retrieve the next items in a list and not for other programmatic purposes.</p>
   *          </note>
   * @public
   */
  nextToken?: string | undefined;

  /**
   * <p>The filter to apply to the query. Only one filter can be used at a time. When the filter
   *            is used, <code>jobStatus</code> is ignored. The results are sorted by the <code>createdAt</code> field,
   *            with the most recent jobs being first.</p>
   *          <dl>
   *             <dt>JOB_NAME</dt>
   *             <dd>
   *                <p>The value of the filter is a case-insensitive match for the job name. If the value
   *                        ends with an asterisk (*), the filter matches any job name that begins with the string
   *                        before the '*'. This corresponds to the <code>jobName</code> value. For example,
   *                        <code>test1</code> matches both <code>Test1</code> and <code>test1</code>, and
   *                        <code>test1*</code> matches both <code>test1</code> and <code>Test10</code>. When the
   *                        <code>JOB_NAME</code> filter is used, the results are grouped by the job name and
   *                        version.</p>
   *             </dd>
   *             <dt>BEFORE_CREATED_AT</dt>
   *             <dd>
   *                <p>The value for the filter is the time that's before the job was created. This
   *                        corresponds to the <code>createdAt</code> value. The value is a string representation of
   *                        the number of milliseconds since 00:00:00 UTC (midnight) on January 1, 1970.</p>
   *             </dd>
   *             <dt>AFTER_CREATED_AT</dt>
   *             <dd>
   *                <p>The value for the filter is the time that's after the job was created. This
   *                        corresponds to the <code>createdAt</code> value. The value is a string representation of
   *                        the number of milliseconds since 00:00:00 UTC (midnight) on January 1, 1970.</p>
   *             </dd>
   *          </dl>
   * @public
   */
  filters?: KeyValuesPair[] | undefined;
}

/**
 * <p>Summary information about a service job.</p>
 * @public
 */
export interface ServiceJobSummary {
  /**
   * <p>Information about the latest attempt for the service job.</p>
   * @public
   */
  latestAttempt?: LatestServiceJobAttempt | undefined;

  /**
   * <p>The Unix timestamp (in milliseconds) for when the service job was created.</p>
   * @public
   */
  createdAt?: number | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the service job.</p>
   * @public
   */
  jobArn?: string | undefined;

  /**
   * <p>The job ID for the service job.</p>
   * @public
   */
  jobId: string | undefined;

  /**
   * <p>The name of the service job.</p>
   * @public
   */
  jobName: string | undefined;

  /**
   * <p>The type of service job. For SageMaker Training jobs, this value is <code>SAGEMAKER_TRAINING</code>.</p>
   * @public
   */
  serviceJobType: ServiceJobType | undefined;

  /**
   * <p>The share identifier for the job.</p>
   * @public
   */
  shareIdentifier?: string | undefined;

  /**
   * <p>The current status of the service job. </p>
   * @public
   */
  status?: ServiceJobStatus | undefined;

  /**
   * <p>A short string to provide more details on the current status of the service job.</p>
   * @public
   */
  statusReason?: string | undefined;

  /**
   * <p>The Unix timestamp (in milliseconds) for when the service job was started.</p>
   * @public
   */
  startedAt?: number | undefined;

  /**
   * <p>The Unix timestamp (in milliseconds) for when the service job stopped running.</p>
   * @public
   */
  stoppedAt?: number | undefined;
}

/**
 * @public
 */
export interface ListServiceJobsResponse {
  /**
   * <p>A list of service job summaries.</p>
   * @public
   */
  jobSummaryList: ServiceJobSummary[] | undefined;

  /**
   * <p>The <code>nextToken</code> value to include in a future <code>ListServiceJobs</code> request. When the results of a <code>ListServiceJobs</code> request exceed <code>maxResults</code>, this value can be used to retrieve the next page of results. This value is <code>null</code> when there are no more results to return.</p>
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * <p>Contains the parameters for <code>ListTagsForResource</code>.</p>
 * @public
 */
export interface ListTagsForResourceRequest {
  /**
   * <p>The Amazon Resource Name (ARN) that identifies the resource that tags are listed for. Batch resources that support tags are compute environments, jobs, job definitions, job queues,
   *  and scheduling policies. ARNs for child jobs of array and multi-node parallel (MNP) jobs aren't supported.</p>
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
  tags?: Record<string, string> | undefined;
}

/**
 * @public
 * @enum
 */
export const JobDefinitionType = {
  Container: "container",
  Multinode: "multinode",
} as const;

/**
 * @public
 */
export type JobDefinitionType = (typeof JobDefinitionType)[keyof typeof JobDefinitionType];

/**
 * <p>Contains the parameters for <code>RegisterJobDefinition</code>.</p>
 * @public
 */
export interface RegisterJobDefinitionRequest {
  /**
   * <p>The name of the job definition to register. It can be up to 128 letters long. It can
   *       contain uppercase and lowercase letters, numbers, hyphens (-), and underscores (_).</p>
   * @public
   */
  jobDefinitionName: string | undefined;

  /**
   * <p>The type of job definition. For more information about multi-node parallel jobs, see
   *         <a href="https://docs.aws.amazon.com/batch/latest/userguide/multi-node-job-def.html">Creating a multi-node
   *         parallel job definition</a> in the <i>Batch User Guide</i>.</p>
   *          <ul>
   *             <li>
   *                <p>If the value is <code>container</code>, then one of the following is required: <code>containerProperties</code>, <code>ecsProperties</code>, or <code>eksProperties</code>.</p>
   *             </li>
   *             <li>
   *                <p>If the value is <code>multinode</code>, then <code>nodeProperties</code> is required.</p>
   *             </li>
   *          </ul>
   *          <note>
   *             <p>If the job is run on Fargate resources, then <code>multinode</code> isn't supported.</p>
   *          </note>
   * @public
   */
  type: JobDefinitionType | undefined;

  /**
   * <p>Default parameter substitution placeholders to set in the job definition. Parameters are
   *       specified as a key-value pair mapping. Parameters in a <code>SubmitJob</code> request override
   *       any corresponding parameter defaults from the job definition.</p>
   * @public
   */
  parameters?: Record<string, string> | undefined;

  /**
   * <p>The scheduling priority for jobs that are submitted with this job definition. This only
   *       affects jobs in job queues with a fair-share policy. Jobs with a higher scheduling priority
   *       are scheduled before jobs with a lower scheduling priority.</p>
   *          <p>The minimum supported value is 0 and the maximum supported value is 9999.</p>
   * @public
   */
  schedulingPriority?: number | undefined;

  /**
   * <p>An object with properties specific to Amazon ECS-based single-node container-based jobs. If the
   *       job definition's <code>type</code> parameter is <code>container</code>, then you must specify
   *       either <code>containerProperties</code> or <code>nodeProperties</code>. This must not be
   *       specified for Amazon EKS-based job definitions.</p>
   *          <note>
   *             <p>If the job runs on Fargate resources, then you must not specify
   *           <code>nodeProperties</code>; use only <code>containerProperties</code>.</p>
   *          </note>
   * @public
   */
  containerProperties?: ContainerProperties | undefined;

  /**
   * <p>An object with properties specific to multi-node parallel jobs. If you specify node
   *       properties for a job, it becomes a multi-node parallel job. For more information, see <a href="https://docs.aws.amazon.com/batch/latest/userguide/multi-node-parallel-jobs.html">Multi-node Parallel
   *         Jobs</a> in the <i>Batch User Guide</i>.</p>
   *          <note>
   *             <p>If the job runs on Fargate resources, then you must not specify
   *           <code>nodeProperties</code>; use <code>containerProperties</code> instead.</p>
   *          </note>
   *          <note>
   *             <p>If the job runs on Amazon EKS resources, then you must not specify
   *           <code>nodeProperties</code>.</p>
   *          </note>
   * @public
   */
  nodeProperties?: NodeProperties | undefined;

  /**
   * <p>The retry strategy to use for failed jobs that are submitted with this job definition. Any
   *       retry strategy that's specified during a <a>SubmitJob</a> operation overrides the
   *       retry strategy defined here. If a job is terminated due to a timeout, it isn't retried.</p>
   * @public
   */
  retryStrategy?: RetryStrategy | undefined;

  /**
   * <p>Specifies whether to propagate the tags from the job or job definition to the
   *       corresponding Amazon ECS task. If no value is specified, the tags are not propagated. Tags can only
   *       be propagated to the tasks during task creation. For tags with the same name, job tags are
   *       given priority over job definitions tags. If the total number of combined tags from the job
   *       and job definition is over 50, the job is moved to the <code>FAILED</code> state.</p>
   *          <note>
   *             <p>If the job runs on Amazon EKS resources, then you must not specify
   *         <code>propagateTags</code>.</p>
   *          </note>
   * @public
   */
  propagateTags?: boolean | undefined;

  /**
   * <p>The timeout configuration for jobs that are submitted with this job definition, after
   *       which Batch terminates your jobs if they have not finished. If a job is terminated due to a
   *       timeout, it isn't retried. The minimum value for the timeout is 60 seconds. Any timeout
   *       configuration that's specified during a <a>SubmitJob</a> operation overrides the
   *       timeout configuration defined here. For more information, see <a href="https://docs.aws.amazon.com/batch/latest/userguide/job_timeouts.html">Job Timeouts</a> in the
   *         <i>Batch User Guide</i>.</p>
   * @public
   */
  timeout?: JobTimeout | undefined;

  /**
   * <p>The tags that you apply to the job definition to help you categorize and organize your
   *       resources. Each tag consists of a key and an optional value. For more information, see <a href="https://docs.aws.amazon.com/batch/latest/userguide/using-tags.html">Tagging Amazon Web Services Resources</a> in
   *         <i>Batch User Guide</i>.</p>
   * @public
   */
  tags?: Record<string, string> | undefined;

  /**
   * <p>The platform capabilities required by the job definition. If no value is specified, it
   *       defaults to <code>EC2</code>. To run the job on Fargate resources, specify
   *         <code>FARGATE</code>.</p>
   *          <note>
   *             <p>If the job runs on Amazon EKS resources, then you must not specify
   *           <code>platformCapabilities</code>.</p>
   *          </note>
   * @public
   */
  platformCapabilities?: PlatformCapability[] | undefined;

  /**
   * <p>An object with properties that are specific to Amazon EKS-based jobs. This must not be
   *       specified for Amazon ECS based job definitions.</p>
   * @public
   */
  eksProperties?: EksProperties | undefined;

  /**
   * <p>An object with properties that are specific to Amazon ECS-based jobs. This must not be
   *       specified for Amazon EKS-based job definitions.</p>
   * @public
   */
  ecsProperties?: EcsProperties | undefined;

  /**
   * <p>Contains a list of consumable resources required by the job.</p>
   * @public
   */
  consumableResourceProperties?: ConsumableResourceProperties | undefined;
}

/**
 * @public
 */
export interface RegisterJobDefinitionResponse {
  /**
   * <p>The name of the job definition.</p>
   * @public
   */
  jobDefinitionName: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the job definition.</p>
   * @public
   */
  jobDefinitionArn: string | undefined;

  /**
   * <p>The revision of the job definition.</p>
   * @public
   */
  revision: number | undefined;
}

/**
 * <p>The overrides that should be sent to a container.</p>
 *          <p>For information about using Batch overrides when you connect event sources to targets, see
 *     <a href="https://docs.aws.amazon.com/eventbridge/latest/pipes-reference/API_BatchContainerOverrides.html">BatchContainerOverrides</a>.</p>
 * @public
 */
export interface ContainerOverrides {
  /**
   * <p>This parameter is deprecated, use <code>resourceRequirements</code> to override the
   *     <code>vcpus</code> parameter that's set in the job definition. It's not supported for jobs
   *    running on Fargate resources. For jobs that run on Amazon EC2 resources, it overrides the
   *     <code>vcpus</code> parameter set in the job definition, but doesn't override any vCPU
   *    requirement specified in the <code>resourceRequirements</code> structure in the job definition.
   *    To override vCPU requirements that are specified in the <code>resourceRequirements</code>
   *    structure in the job definition, <code>resourceRequirements</code> must be specified in the
   *     <code>SubmitJob</code> request, with <code>type</code> set to <code>VCPU</code> and
   *     <code>value</code> set to the new value. For more information, see <a href="https://docs.aws.amazon.com/batch/latest/userguide/troubleshooting.html#override-resource-requirements">Can't override job
   *     definition resource requirements</a> in the <i>Batch User Guide</i>.</p>
   *
   * @deprecated This field is deprecated, use resourceRequirements instead.
   * @public
   */
  vcpus?: number | undefined;

  /**
   * <p>This parameter is deprecated, use <code>resourceRequirements</code> to override the memory
   *    requirements specified in the job definition. It's not supported for jobs running on Fargate
   *    resources. For jobs that run on Amazon EC2 resources, it overrides the <code>memory</code> parameter
   *    set in the job definition, but doesn't override any memory requirement that's specified in the
   *     <code>resourceRequirements</code> structure in the job definition. To override memory
   *    requirements that are specified in the <code>resourceRequirements</code> structure in the job
   *    definition, <code>resourceRequirements</code> must be specified in the <code>SubmitJob</code>
   *    request, with <code>type</code> set to <code>MEMORY</code> and <code>value</code> set to the new
   *    value. For more information, see <a href="https://docs.aws.amazon.com/batch/latest/userguide/troubleshooting.html#override-resource-requirements">Can't override job
   *     definition resource requirements</a> in the <i>Batch User Guide</i>.</p>
   *
   * @deprecated This field is deprecated, use resourceRequirements instead.
   * @public
   */
  memory?: number | undefined;

  /**
   * <p>The command to send to the container that overrides the default command from the Docker
   *    image or the job definition.</p>
   *          <note>
   *             <p>This parameter can't contain an empty string.</p>
   *          </note>
   * @public
   */
  command?: string[] | undefined;

  /**
   * <p>The instance type to use for a multi-node parallel job.</p>
   *          <note>
   *             <p>This parameter isn't applicable to single-node container jobs or jobs that run on Fargate
   *     resources, and shouldn't be provided.</p>
   *          </note>
   * @public
   */
  instanceType?: string | undefined;

  /**
   * <p>The environment variables to send to the container. You can add new environment variables,
   *    which are added to the container at launch, or you can override the existing environment
   *    variables from the Docker image or the job definition.</p>
   *          <note>
   *             <p>Environment variables cannot start with "<code>AWS_BATCH</code>". This naming
   *  convention is reserved for variables that Batch sets.</p>
   *          </note>
   * @public
   */
  environment?: KeyValuePair[] | undefined;

  /**
   * <p>The type and amount of resources to assign to a container. This overrides the settings in
   *    the job definition. The supported resources include <code>GPU</code>, <code>MEMORY</code>, and
   *     <code>VCPU</code>.</p>
   * @public
   */
  resourceRequirements?: ResourceRequirement[] | undefined;
}

/**
 * <p>The overrides that should be sent to a container.</p>
 *          <p>For information about using Batch overrides when you connect event sources to targets, see
 *     <a href="https://docs.aws.amazon.com/eventbridge/latest/pipes-reference/API_BatchContainerOverrides.html">BatchContainerOverrides</a>.</p>
 * @public
 */
export interface TaskContainerOverrides {
  /**
   * <p>The command to send to the container that overrides the default command from the Docker
   *    image or the job definition.</p>
   *          <note>
   *             <p>This parameter can't contain an empty string.</p>
   *          </note>
   * @public
   */
  command?: string[] | undefined;

  /**
   * <p>The environment variables to send to the container. You can add new environment variables,
   *    which are added to the container at launch, or you can override the existing environment
   *    variables from the Docker image or the job definition.</p>
   *          <note>
   *             <p>Environment variables cannot start with <code>AWS_BATCH</code>. This naming convention is
   *     reserved for variables that Batch sets.</p>
   *          </note>
   * @public
   */
  environment?: KeyValuePair[] | undefined;

  /**
   * <p>A pointer to the container that you want to override. The container's name provides a unique
   *    identifier for the container being used.</p>
   * @public
   */
  name?: string | undefined;

  /**
   * <p>The type and amount of resources to assign to a container. This overrides the settings in
   *    the job definition. The supported resources include <code>GPU</code>, <code>MEMORY</code>, and
   *     <code>VCPU</code>.</p>
   * @public
   */
  resourceRequirements?: ResourceRequirement[] | undefined;
}

/**
 * <p>An object that contains overrides for the task definition of a job.</p>
 * @public
 */
export interface TaskPropertiesOverride {
  /**
   * <p>The overrides for the container definition of a job.</p>
   * @public
   */
  containers?: TaskContainerOverrides[] | undefined;
}

/**
 * <p>An object that contains overrides for the Amazon ECS task definition of a job.</p>
 * @public
 */
export interface EcsPropertiesOverride {
  /**
   * <p>The overrides for the Amazon ECS task definition of a job.</p>
   *          <note>
   *             <p>This object is currently limited to one element.</p>
   *          </note>
   * @public
   */
  taskProperties?: TaskPropertiesOverride[] | undefined;
}

/**
 * <p>Object representing any Kubernetes overrides to a job definition that's used in a <a href="https://docs.aws.amazon.com/batch/latest/APIReference/API_SubmitJob.html">SubmitJob</a> API
 *    operation.</p>
 * @public
 */
export interface EksContainerOverride {
  /**
   * <p>A pointer to the container that you want to override. The name must match a unique container
   *    name that you wish to override.</p>
   * @public
   */
  name?: string | undefined;

  /**
   * <p>The override of the Docker image that's used to start the container.</p>
   * @public
   */
  image?: string | undefined;

  /**
   * <p>The command to send to the container that overrides the default command from the Docker
   *    image or the job definition.</p>
   * @public
   */
  command?: string[] | undefined;

  /**
   * <p>The arguments to the entrypoint to send to the container that overrides the default
   *    arguments from the Docker image or the job definition. For more information, see <a href="https://docs.docker.com/engine/reference/builder/#cmd">Dockerfile reference: CMD</a>
   *    and <a href="https://kubernetes.io/docs/tasks/inject-data-application/define-command-argument-container/">Define a command an arguments for a pod</a> in the <i>Kubernetes
   *     documentation</i>.</p>
   * @public
   */
  args?: string[] | undefined;

  /**
   * <p>The environment variables to send to the container. You can add new environment variables,
   *    which are added to the container at launch. Or, you can override the existing environment
   *    variables from the Docker image or the job definition.</p>
   *          <note>
   *             <p>Environment variables cannot start with "<code>AWS_BATCH</code>". This naming
   *  convention is reserved for variables that Batch sets.</p>
   *          </note>
   * @public
   */
  env?: EksContainerEnvironmentVariable[] | undefined;

  /**
   * <p>The type and amount of resources to assign to a container. These override the settings in
   *    the job definition. The supported resources include <code>memory</code>, <code>cpu</code>, and
   *     <code>nvidia.com/gpu</code>. For more information, see <a href="https://kubernetes.io/docs/concepts/configuration/manage-resources-containers/">Resource
   *     management for pods and containers</a> in the <i>Kubernetes
   *    documentation</i>.</p>
   * @public
   */
  resources?: EksContainerResourceRequirements | undefined;
}

/**
 * <p>An object that contains overrides for the Kubernetes pod properties of a job.</p>
 * @public
 */
export interface EksPodPropertiesOverride {
  /**
   * <p>The overrides for the container that's used on the Amazon EKS pod.</p>
   * @public
   */
  containers?: EksContainerOverride[] | undefined;

  /**
   * <p>The overrides for the <code>initContainers</code> defined in the Amazon EKS pod. These containers run before
   *    application containers, always run to completion, and must complete successfully before the next
   *    container starts. These containers are registered with the Amazon EKS Connector agent and persists the
   *    registration information in the Kubernetes backend data store. For more information, see <a href="https://kubernetes.io/docs/concepts/workloads/pods/init-containers/">Init
   *     Containers</a> in the <i>Kubernetes documentation</i>.</p>
   * @public
   */
  initContainers?: EksContainerOverride[] | undefined;

  /**
   * <p>Metadata about the overrides for the container that's used on the Amazon EKS pod.</p>
   * @public
   */
  metadata?: EksMetadata | undefined;
}

/**
 * <p>An object that contains overrides for the Kubernetes resources of a job.</p>
 * @public
 */
export interface EksPropertiesOverride {
  /**
   * <p>The overrides for the Kubernetes pod resources of a job.</p>
   * @public
   */
  podProperties?: EksPodPropertiesOverride | undefined;
}

/**
 * <p>The object that represents any node overrides to a job definition that's used in a <a href="https://docs.aws.amazon.com/batch/latest/APIReference/API_SubmitJob.html">SubmitJob</a> API
 *    operation.</p>
 * @public
 */
export interface NodePropertyOverride {
  /**
   * <p>The range of nodes, using node index values, that's used to override. A range of
   *     <code>0:3</code> indicates nodes with index values of <code>0</code> through <code>3</code>. If
   *    the starting range value is omitted (<code>:n</code>), then <code>0</code> is used to start the
   *    range. If the ending range value is omitted (<code>n:</code>), then the highest possible node
   *    index is used to end the range.</p>
   * @public
   */
  targetNodes: string | undefined;

  /**
   * <p>The overrides that are sent to a node range.</p>
   * @public
   */
  containerOverrides?: ContainerOverrides | undefined;

  /**
   * <p>An object that contains the properties that you want to replace for the existing Amazon ECS
   *    resources of a job.</p>
   * @public
   */
  ecsPropertiesOverride?: EcsPropertiesOverride | undefined;

  /**
   * <p>An object that contains the instance types that you want to replace for the existing
   *    resources of a job.</p>
   * @public
   */
  instanceTypes?: string[] | undefined;

  /**
   * <p>An object that contains the properties that you want to replace for the existing Amazon EKS resources of a job.</p>
   * @public
   */
  eksPropertiesOverride?: EksPropertiesOverride | undefined;

  /**
   * <p>An object that contains overrides for the consumable resources of a job.</p>
   * @public
   */
  consumableResourcePropertiesOverride?: ConsumableResourceProperties | undefined;
}

/**
 * <p>An object that represents any node overrides to a job definition that's used in a <a href="https://docs.aws.amazon.com/batch/latest/APIReference/API_SubmitJob.html">SubmitJob</a> API
 *    operation.</p>
 *          <note>
 *             <p>This parameter isn't applicable to jobs that are running on Fargate resources. Don't
 *     provide it for these jobs. Rather, use <code>containerOverrides</code> instead.</p>
 *          </note>
 * @public
 */
export interface NodeOverrides {
  /**
   * <p>The number of nodes to use with a multi-node parallel job. This value overrides the number
   *    of nodes that are specified in the job definition. To use this override, you must meet the
   *    following conditions:</p>
   *          <ul>
   *             <li>
   *                <p>There must be at least one node range in your job definition that has an open upper
   *      boundary, such as <code>:</code> or <code>n:</code>.</p>
   *             </li>
   *             <li>
   *                <p>The lower boundary of the node range that's specified in the job definition must be fewer
   *      than the number of nodes specified in the override.</p>
   *             </li>
   *             <li>
   *                <p>The main node index that's specified in the job definition must be fewer than the number
   *      of nodes specified in the override.</p>
   *             </li>
   *          </ul>
   * @public
   */
  numNodes?: number | undefined;

  /**
   * <p>The node property overrides for the job.</p>
   * @public
   */
  nodePropertyOverrides?: NodePropertyOverride[] | undefined;
}

/**
 * <p>Contains the parameters for <code>SubmitJob</code>.</p>
 * @public
 */
export interface SubmitJobRequest {
  /**
   * <p>The name of the job. It can be up to 128 letters long. The first character must be
   *       alphanumeric, can contain uppercase and lowercase letters, numbers, hyphens (-), and
   *       underscores (_).</p>
   * @public
   */
  jobName: string | undefined;

  /**
   * <p>The job queue where the job is submitted. You can specify either the name or the Amazon Resource Name (ARN)
   *       of the queue.</p>
   * @public
   */
  jobQueue: string | undefined;

  /**
   * <p>The share identifier for the job. Don't specify this parameter if the job queue doesn't
   *       have a fair-share scheduling policy. If the job queue has a fair-share scheduling policy, then this parameter must
   *       be specified.</p>
   *          <p>This string is limited to 255 alphanumeric characters, and can be followed by an asterisk
   *       (*).</p>
   * @public
   */
  shareIdentifier?: string | undefined;

  /**
   * <p>The scheduling priority for the job. This only affects jobs in job queues with a
   *       fair-share policy. Jobs with a higher scheduling priority are scheduled before jobs with a lower
   *       scheduling priority. This overrides any scheduling priority in the job definition and works only
   *       within a single share identifier.</p>
   *          <p>The minimum supported value is 0 and the maximum supported value is 9999.</p>
   * @public
   */
  schedulingPriorityOverride?: number | undefined;

  /**
   * <p>The array properties for the submitted job, such as the size of the array. The array size
   *       can be between 2 and 10,000. If you specify array properties for a job, it becomes an array
   *       job. For more information, see <a href="https://docs.aws.amazon.com/batch/latest/userguide/array_jobs.html">Array Jobs</a> in the <i>Batch User Guide</i>.</p>
   * @public
   */
  arrayProperties?: ArrayProperties | undefined;

  /**
   * <p>A list of dependencies for the job. A job can depend upon a maximum of 20 jobs. You can
   *       specify a <code>SEQUENTIAL</code> type dependency without specifying a job ID for array jobs
   *       so that each child array job completes sequentially, starting at index 0. You can also specify
   *       an <code>N_TO_N</code> type dependency with a job ID for array jobs. In that case, each index
   *       child of this job must wait for the corresponding index child of each dependency to complete
   *       before it can begin.</p>
   * @public
   */
  dependsOn?: JobDependency[] | undefined;

  /**
   * <p>The job definition used by this job. This value can be one of
   *       <code>definition-name</code>, <code>definition-name:revision</code>, or the Amazon Resource Name (ARN) for the
   *       job definition, with or without the revision
   *           (<code>arn:aws:batch:<i>region</i>:<i>account</i>:job-definition/<i>definition-name</i>:<i>revision</i>
   *             </code>,
   *       or
   *           <code>arn:aws:batch:<i>region</i>:<i>account</i>:job-definition/<i>definition-name</i>
   *             </code>).</p>
   *          <p>If the revision is not specified, then the latest active revision is used.</p>
   * @public
   */
  jobDefinition: string | undefined;

  /**
   * <p>Additional parameters passed to the job that replace parameter substitution placeholders
   *       that are set in the job definition. Parameters are specified as a key and value pair mapping.
   *       Parameters in a <code>SubmitJob</code> request override any corresponding parameter defaults
   *       from the job definition.</p>
   * @public
   */
  parameters?: Record<string, string> | undefined;

  /**
   * <p>An object with properties that override the defaults for the job definition that specify
   *       the name of a container in the specified job definition and the overrides it should receive.
   *       You can override the default command for a container, which is specified in the job definition
   *       or the Docker image, with a <code>command</code> override. You can also override existing
   *       environment variables on a container or add new environment variables to it with an
   *         <code>environment</code> override.</p>
   * @public
   */
  containerOverrides?: ContainerOverrides | undefined;

  /**
   * <p>A list of node overrides in JSON format that specify the node range to target and the
   *       container overrides for that node range.</p>
   *          <note>
   *             <p>This parameter isn't applicable to jobs that are running on Fargate resources; use
   *           <code>containerOverrides</code> instead.</p>
   *          </note>
   * @public
   */
  nodeOverrides?: NodeOverrides | undefined;

  /**
   * <p>The retry strategy to use for failed jobs from this <a>SubmitJob</a> operation.
   *       When a retry strategy is specified here, it overrides the retry strategy defined in the job
   *       definition.</p>
   * @public
   */
  retryStrategy?: RetryStrategy | undefined;

  /**
   * <p>Specifies whether to propagate the tags from the job or job definition to the
   *       corresponding Amazon ECS task. If no value is specified, the tags aren't propagated. Tags can only
   *       be propagated to the tasks during task creation. For tags with the same name, job tags are
   *       given priority over job definitions tags. If the total number of combined tags from the job
   *       and job definition is over 50, the job is moved to the <code>FAILED</code> state. When
   *       specified, this overrides the tag propagation setting in the job definition.</p>
   * @public
   */
  propagateTags?: boolean | undefined;

  /**
   * <p>The timeout configuration for this <a>SubmitJob</a> operation. You can specify
   *       a timeout duration after which Batch terminates your jobs if they haven't finished. If a job
   *       is terminated due to a timeout, it isn't retried. The minimum value for the timeout is 60
   *       seconds. This configuration overrides any timeout configuration specified in the job
   *       definition. For array jobs, child jobs have the same timeout configuration as the parent job.
   *       For more information, see <a href="https://docs.aws.amazon.com/AmazonECS/latest/developerguide/job_timeouts.html">Job Timeouts</a> in the
   *         <i>Amazon Elastic Container Service Developer Guide</i>.</p>
   * @public
   */
  timeout?: JobTimeout | undefined;

  /**
   * <p>The tags that you apply to the job request to help you categorize and organize your
   *       resources. Each tag consists of a key and an optional value. For more information, see <a href="https://docs.aws.amazon.com/general/latest/gr/aws_tagging.html">Tagging Amazon Web Services
   *         Resources</a> in <i>Amazon Web Services General Reference</i>.</p>
   * @public
   */
  tags?: Record<string, string> | undefined;

  /**
   * <p>An object, with properties that override defaults for the job definition, can only be specified for jobs that are run on Amazon EKS resources.</p>
   * @public
   */
  eksPropertiesOverride?: EksPropertiesOverride | undefined;

  /**
   * <p>An object, with properties that override defaults for the job definition, can only be specified for jobs that are run on Amazon ECS resources.</p>
   * @public
   */
  ecsPropertiesOverride?: EcsPropertiesOverride | undefined;

  /**
   * <p>An object that contains overrides for the consumable resources of a job.</p>
   * @public
   */
  consumableResourcePropertiesOverride?: ConsumableResourceProperties | undefined;
}

/**
 * @public
 */
export interface SubmitJobResponse {
  /**
   * <p>The Amazon Resource Name (ARN) for the job.</p>
   * @public
   */
  jobArn?: string | undefined;

  /**
   * <p>The name of the job.</p>
   * @public
   */
  jobName: string | undefined;

  /**
   * <p>The unique identifier for the job.</p>
   * @public
   */
  jobId: string | undefined;
}

/**
 * @public
 */
export interface SubmitServiceJobRequest {
  /**
   * <p>The name of the service job. It can be up to 128 characters long. It can contain uppercase and lowercase letters, numbers, hyphens (-), and underscores (_).</p>
   * @public
   */
  jobName: string | undefined;

  /**
   * <p>The job queue into which the service job is submitted. You can specify either the name or the ARN of the queue. The job queue must have the type <code>SAGEMAKER_TRAINING</code>.</p>
   * @public
   */
  jobQueue: string | undefined;

  /**
   * <p>The retry strategy to use for failed service jobs that are submitted with this service job request. </p>
   * @public
   */
  retryStrategy?: ServiceJobRetryStrategy | undefined;

  /**
   * <p>The scheduling priority of the service job.  Valid values are integers between 0 and 9999.</p>
   * @public
   */
  schedulingPriority?: number | undefined;

  /**
   * <p>The request, in JSON, for the service that the SubmitServiceJob operation is queueing. </p>
   * @public
   */
  serviceRequestPayload: string | undefined;

  /**
   * <p>The type of service job. For SageMaker Training jobs, specify <code>SAGEMAKER_TRAINING</code>.</p>
   * @public
   */
  serviceJobType: ServiceJobType | undefined;

  /**
   * <p>The share identifier for the service job. Don't specify this parameter if the job
   *             queue doesn't have a fair-share scheduling policy. If the job queue has a fair-share
   *             scheduling policy, then this parameter must be specified.</p>
   * @public
   */
  shareIdentifier?: string | undefined;

  /**
   * <p>The timeout configuration for the service job. If none is specified, Batch defers to the default timeout of the underlying service handling the job.</p>
   * @public
   */
  timeoutConfig?: ServiceJobTimeout | undefined;

  /**
   * <p>The tags that you apply to the service job request. Each tag consists of a key and an optional value. For more information, see <a href="https://docs.aws.amazon.com/batch/latest/userguide/using-tags.html">Tagging your Batch resources</a>.</p>
   * @public
   */
  tags?: Record<string, string> | undefined;

  /**
   * <p>A unique identifier for the request. This token is used to ensure idempotency of requests. If this parameter is specified and two submit requests with identical payloads and <code>clientToken</code>s are received, these requests are considered the same request and the second request is rejected.</p>
   * @public
   */
  clientToken?: string | undefined;
}

/**
 * @public
 */
export interface SubmitServiceJobResponse {
  /**
   * <p>The Amazon Resource Name (ARN) for the service job.</p>
   * @public
   */
  jobArn?: string | undefined;

  /**
   * <p>The name of the service job.</p>
   * @public
   */
  jobName: string | undefined;

  /**
   * <p>The unique identifier for the service job.</p>
   * @public
   */
  jobId: string | undefined;
}

/**
 * <p>Contains the parameters for <code>TagResource</code>.</p>
 * @public
 */
export interface TagResourceRequest {
  /**
   * <p>The Amazon Resource Name (ARN) of the resource that tags are added to. Batch resources that support tags are compute environments, jobs, job definitions, job queues,
   *  and scheduling policies. ARNs for child jobs of array and multi-node parallel (MNP) jobs aren't supported.</p>
   * @public
   */
  resourceArn: string | undefined;

  /**
   * <p>The tags that you apply to the resource to help you categorize and organize your
   *       resources. Each tag consists of a key and an optional value. For more information, see <a href="https://docs.aws.amazon.com/general/latest/gr/aws_tagging.html">Tagging Amazon Web Services
   *         Resources</a> in <i>Amazon Web Services General Reference</i>.</p>
   * @public
   */
  tags: Record<string, string> | undefined;
}

/**
 * @public
 */
export interface TagResourceResponse {}

/**
 * <p>Contains the parameters for <code>TerminateJob</code>.</p>
 * @public
 */
export interface TerminateJobRequest {
  /**
   * <p>The Batch job ID of the job to terminate.</p>
   * @public
   */
  jobId: string | undefined;

  /**
   * <p>A message to attach to the job that explains the reason for canceling it. This message is
   *       returned by future <a>DescribeJobs</a> operations on the job. It is also
   *       recorded in the Batch activity logs.</p>
   *          <p>This parameter has as limit of 1024 characters.</p>
   * @public
   */
  reason: string | undefined;
}

/**
 * @public
 */
export interface TerminateJobResponse {}

/**
 * @public
 */
export interface TerminateServiceJobRequest {
  /**
   * <p>The service job ID of the service job to terminate.</p>
   * @public
   */
  jobId: string | undefined;

  /**
   * <p>A message to attach to the service job that explains the reason for canceling it. This message is returned by <code>DescribeServiceJob</code> operations on the service job.</p>
   * @public
   */
  reason: string | undefined;
}

/**
 * @public
 */
export interface TerminateServiceJobResponse {}

/**
 * <p>Contains the parameters for <code>UntagResource</code>.</p>
 * @public
 */
export interface UntagResourceRequest {
  /**
   * <p>The Amazon Resource Name (ARN) of the resource from which to delete tags. Batch resources that support tags are compute environments, jobs, job definitions, job queues,
   *  and scheduling policies. ARNs for child jobs of array and multi-node parallel (MNP) jobs aren't supported.</p>
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
 * @public
 * @enum
 */
export const CRUpdateAllocationStrategy = {
  BEST_FIT_PROGRESSIVE: "BEST_FIT_PROGRESSIVE",
  SPOT_CAPACITY_OPTIMIZED: "SPOT_CAPACITY_OPTIMIZED",
  SPOT_PRICE_CAPACITY_OPTIMIZED: "SPOT_PRICE_CAPACITY_OPTIMIZED",
} as const;

/**
 * @public
 */
export type CRUpdateAllocationStrategy = (typeof CRUpdateAllocationStrategy)[keyof typeof CRUpdateAllocationStrategy];

/**
 * <p>An object that represents the attributes of a compute environment that can be updated. For
 *    more information, see <a href="https://docs.aws.amazon.com/batch/latest/userguide/updating-compute-environments.html">Updating compute environments</a> in the
 *     <i>Batch User Guide</i>.</p>
 * @public
 */
export interface ComputeResourceUpdate {
  /**
   * <p>The minimum number of vCPUs that an environment should maintain (even if the compute environment
   *    is <code>DISABLED</code>).</p>
   *          <note>
   *             <p>This parameter isn't applicable to jobs that are running on Fargate resources. Don't specify it.</p>
   *          </note>
   * @public
   */
  minvCpus?: number | undefined;

  /**
   * <p>The maximum number of Amazon EC2 vCPUs that an environment can reach.</p>
   *          <note>
   *             <p>With <code>BEST_FIT_PROGRESSIVE</code>,<code>SPOT_CAPACITY_OPTIMIZED</code> and
   *      <code>SPOT_PRICE_CAPACITY_OPTIMIZED</code> (recommended) strategies using On-Demand or Spot
   *      Instances, and the <code>BEST_FIT</code> strategy using Spot Instances, Batch might need to
   *      exceed <code>maxvCpus</code> to meet your capacity requirements. In this event, Batch never
   *      exceeds <code>maxvCpus</code> by more than a single instance.</p>
   *          </note>
   * @public
   */
  maxvCpus?: number | undefined;

  /**
   * <p>The desired number of vCPUS in the compute environment. Batch modifies this value between
   *    the minimum and maximum values based on job queue demand.</p>
   *          <note>
   *             <p>This parameter isn't applicable to jobs that are running on Fargate resources. Don't specify it.</p>
   *          </note>
   *          <note>
   *             <p>Batch doesn't support changing the desired number of vCPUs of an existing compute
   *     environment. Don't specify this parameter for compute environments using Amazon EKS clusters.</p>
   *          </note>
   *          <note>
   *             <p>When you update the <code>desiredvCpus</code> setting, the value must be between the
   *      <code>minvCpus</code> and <code>maxvCpus</code> values. </p>
   *             <p>Additionally, the updated <code>desiredvCpus</code> value must be greater than or equal to
   *     the current <code>desiredvCpus</code> value. For more information, see <a href="https://docs.aws.amazon.com/batch/latest/userguide/troubleshooting.html#error-desired-vcpus-update">Troubleshooting
   *      Batch</a> in the <i>Batch User Guide</i>.</p>
   *          </note>
   * @public
   */
  desiredvCpus?: number | undefined;

  /**
   * <p>The VPC subnets where the compute resources are launched. Fargate compute resources can
   *    contain up to 16 subnets. For Fargate compute resources, providing an empty list will be
   *    handled as if this parameter wasn't specified and no change is made. For Amazon EC2 compute resources,
   *    providing an empty list removes the VPC subnets from the compute resource. For more information,
   *    see <a href="https://docs.aws.amazon.com/vpc/latest/userguide/VPC_Subnets.html">VPCs and
   *     subnets</a> in the <i>Amazon VPC User Guide</i>.</p>
   *          <p>When updating a compute environment, changing the VPC subnets requires an infrastructure
   *    update of the compute environment. For more information, see <a href="https://docs.aws.amazon.com/batch/latest/userguide/updating-compute-environments.html">Updating compute environments</a> in the
   *     <i>Batch User Guide</i>.</p>
   *          <note>
   *             <p>Batch on Amazon EC2 and Batch on Amazon EKS support Local Zones. For more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/using-regions-availability-zones.html#concepts-local-zones"> Local
   *      Zones</a> in the <i>Amazon EC2 User Guide for Linux Instances</i>, <a href="https://docs.aws.amazon.com/eks/latest/userguide/local-zones.html">Amazon EKS and Amazon Web Services Local
   *      Zones</a> in the <i>Amazon EKS User Guide</i> and <a href="https://docs.aws.amazon.com/AmazonECS/latest/developerguide/cluster-regions-zones.html#clusters-local-zones"> Amazon ECS
   *      clusters in Local Zones, Wavelength Zones, and Amazon Web Services Outposts</a> in the <i>Amazon ECS
   *      Developer Guide</i>.</p>
   *             <p>Batch on Fargate doesn't currently support Local Zones.</p>
   *          </note>
   * @public
   */
  subnets?: string[] | undefined;

  /**
   * <p>The Amazon EC2 security groups that are associated with instances launched in the compute
   *    environment. This parameter is required for Fargate compute resources, where it can contain up
   *    to 5 security groups. For Fargate compute resources, providing an empty list is handled as if
   *    this parameter wasn't specified and no change is made. For Amazon EC2 compute resources, providing an
   *    empty list removes the security groups from the compute resource.</p>
   *          <p>When updating a compute environment, changing the Amazon EC2 security groups requires an
   *    infrastructure update of the compute environment. For more information, see <a href="https://docs.aws.amazon.com/batch/latest/userguide/updating-compute-environments.html">Updating compute
   *     environments</a> in the <i>Batch User Guide</i>.</p>
   * @public
   */
  securityGroupIds?: string[] | undefined;

  /**
   * <p>The allocation strategy to use for the compute resource if there's not enough instances of
   *    the best fitting instance type that can be allocated. This might be because of availability of
   *    the instance type in the Region or <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/ec2-resource-limits.html">Amazon EC2 service limits</a>. For more
   *    information, see <a href="https://docs.aws.amazon.com/batch/latest/userguide/allocation-strategies.html">Allocation strategies</a> in the <i>Batch User Guide</i>.</p>
   *          <p>When updating a compute environment, changing the allocation strategy requires an
   *    infrastructure update of the compute environment. For more information, see <a href="https://docs.aws.amazon.com/batch/latest/userguide/updating-compute-environments.html">Updating compute
   *     environments</a> in the <i>Batch User Guide</i>. <code>BEST_FIT</code> isn't
   *    supported when updating a compute environment.</p>
   *          <note>
   *             <p>This parameter isn't applicable to jobs that are running on Fargate resources. Don't specify it.</p>
   *          </note>
   *          <dl>
   *             <dt>BEST_FIT_PROGRESSIVE</dt>
   *             <dd>
   *                <p>Batch selects additional instance types that are large enough to meet the requirements
   *       of the jobs in the queue. Its preference is for instance types with lower cost vCPUs. If
   *       additional instances of the previously selected instance types aren't available, Batch
   *       selects new instance types.</p>
   *             </dd>
   *             <dt>SPOT_CAPACITY_OPTIMIZED</dt>
   *             <dd>
   *                <p>Batch selects one or more instance types that are large enough to meet the requirements
   *       of the jobs in the queue. Its preference is for instance types that are less likely to be
   *       interrupted. This allocation strategy is only available for Spot Instance compute
   *       resources.</p>
   *             </dd>
   *             <dt>SPOT_PRICE_CAPACITY_OPTIMIZED</dt>
   *             <dd>
   *                <p>The price and capacity optimized allocation strategy looks at both price and capacity to
   *       select the Spot Instance pools that are the least likely to be interrupted and have the lowest
   *       possible price. This allocation strategy is only available for Spot Instance compute
   *       resources.</p>
   *             </dd>
   *          </dl>
   *          <p>With <code>BEST_FIT_PROGRESSIVE</code>,<code>SPOT_CAPACITY_OPTIMIZED</code> and
   *     <code>SPOT_PRICE_CAPACITY_OPTIMIZED</code> (recommended) strategies using On-Demand or Spot Instances,
   *     and the <code>BEST_FIT</code> strategy using Spot Instances, Batch might need to exceed
   *     <code>maxvCpus</code> to meet your capacity requirements. In this event, Batch never exceeds
   *     <code>maxvCpus</code> by more than a single instance.</p>
   * @public
   */
  allocationStrategy?: CRUpdateAllocationStrategy | undefined;

  /**
   * <p>The instances types that can be launched. You can specify instance families to launch any
   *    instance type within those families (for example, <code>c5</code> or <code>p3</code>), or you can
   *    specify specific sizes within a family (such as <code>c5.8xlarge</code>). </p>
   *          <p>Batch can select the instance type for you if you choose one of the following:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>optimal</code> to select instance types (from the <code>c4</code>, <code>m4</code>,
   *     <code>r4</code>, <code>c5</code>, <code>m5</code>, and <code>r5</code>
   *     instance families) that match the demand of your job queues. </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>default_x86_64</code> to choose x86 based instance types (from the <code>m6i</code>,
   *      <code>c6i</code>, <code>r6i</code>, and <code>c7i</code> instance families) that matches the resource demands of the job queue.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>default_arm64</code> to choose x86 based instance types (from the <code>m6g</code>,
   *      <code>c6g</code>, <code>r6g</code>, and <code>c7g</code> instance families) that matches the resource demands of the job queue.</p>
   *             </li>
   *          </ul>
   *          <note>
   *             <p>Starting on 11/01/2025 the behavior of <code>optimal</code> is going to be changed to
   *     match <code>default_x86_64</code>.
   *
   *     During the change your instance families could be updated to a newer
   *     generation.
   *     You do not need to perform any actions for the upgrade to
   *     happen. For more information about change, see <a href="https://docs.aws.amazon.com/batch/latest/userguide/optimal-default-instance-troubleshooting.html">Optimal instance type configuration to
   *      receive automatic instance family updates</a>.</p>
   *          </note>
   *          <note>
   *             <p>Instance family availability varies by
   *     Amazon Web Services Region.
   *     For example, some Amazon Web Services Regions may not have any fourth generation instance families
   *     but have fifth and sixth generation instance families.</p>
   *             <p>When using <code>default_x86_64</code> or <code>default_arm64</code>
   *     instance bundles, Batch selects instance families based on a balance of
   *     cost-effectiveness and performance. While newer generation instances often provide
   *     better price-performance, Batch may choose an earlier generation instance family
   *     if it provides the optimal combination of availability, cost, and performance for
   *     your workload. For example, in an
   *     Amazon Web Services Region
   *     where both c6i and c7i instances are available, Batch might select c6i instances
   *     if they offer better cost-effectiveness for your specific job requirements. For more information on Batch instance types and Amazon Web Services Region availability, see <a href="https://docs.aws.amazon.com/batch/latest/userguide/instance-type-compute-table.html">Instance type compute table</a> in the <i>Batch User Guide</i>.</p>
   *             <p>Batch periodically updates your instances in default bundles to newer,
   *     more cost-effective options. Updates happen automatically without requiring any
   *     action from you. Your workloads continue running during updates with no interruption
   *    </p>
   *          </note>
   *          <note>
   *             <p>This parameter isn't applicable to jobs that are running on Fargate resources. Don't specify it.</p>
   *          </note>
   *          <note>
   *             <p>When you create a compute environment, the instance types that you select for the compute environment must
   *     share the same architecture. For example, you can't mix x86 and ARM instances in the same compute
   *     environment.</p>
   *          </note>
   * @public
   */
  instanceTypes?: string[] | undefined;

  /**
   * <p>The Amazon EC2 key pair that's used for instances launched in the compute environment. You can
   *    use this key pair to log in to your instances with SSH. To remove the Amazon EC2 key pair, set this
   *    value to an empty string.</p>
   *          <p>When updating a compute environment, changing the Amazon EC2 key pair requires an infrastructure
   *    update of the compute environment. For more information, see <a href="https://docs.aws.amazon.com/batch/latest/userguide/updating-compute-environments.html">Updating compute environments</a> in the
   *     <i>Batch User Guide</i>.</p>
   *          <note>
   *             <p>This parameter isn't applicable to jobs that are running on Fargate resources. Don't specify it.</p>
   *          </note>
   * @public
   */
  ec2KeyPair?: string | undefined;

  /**
   * <p>The Amazon ECS instance profile applied to Amazon EC2 instances in a compute environment.
   *    Required for Amazon EC2 instances. You can specify the short name or full Amazon Resource Name (ARN) of an instance
   *    profile. For example, <code>
   *                <i>ecsInstanceRole</i>
   *             </code> or
   *      <code>arn:aws:iam::<i><aws_account_id></i>:instance-profile/<i>ecsInstanceRole</i>
   *             </code>.
   *    For more information, see <a href="https://docs.aws.amazon.com/batch/latest/userguide/instance_IAM_role.html">Amazon ECS instance role</a> in the <i>Batch User Guide</i>.</p>
   *          <p>When updating a compute environment, changing this setting requires an infrastructure update
   *    of the compute environment. For more information, see <a href="https://docs.aws.amazon.com/batch/latest/userguide/updating-compute-environments.html">Updating compute environments</a> in the
   *     <i>Batch User Guide</i>.</p>
   *          <note>
   *             <p>This parameter isn't applicable to jobs that are running on Fargate resources. Don't specify it.</p>
   *          </note>
   * @public
   */
  instanceRole?: string | undefined;

  /**
   * <p>Key-value pair tags to be applied to Amazon EC2 resources that are launched in the compute
   *    environment. For Batch, these take the form of <code>"String1": "String2"</code>, where
   *     <code>String1</code> is the tag key and <code>String2</code> is the tag value (for example,
   *     <code>\{ "Name": "Batch Instance - C4OnDemand" \}</code>). This is helpful for recognizing your
   *    Batch instances in the Amazon EC2 console. These tags aren't seen when using the Batch
   *     <code>ListTagsForResource</code> API operation.</p>
   *          <p>When updating a compute environment, changing this setting requires an infrastructure update
   *    of the compute environment. For more information, see <a href="https://docs.aws.amazon.com/batch/latest/userguide/updating-compute-environments.html">Updating compute environments</a> in the
   *     <i>Batch User Guide</i>.</p>
   *          <note>
   *             <p>This parameter isn't applicable to jobs that are running on Fargate resources. Don't specify it.</p>
   *          </note>
   * @public
   */
  tags?: Record<string, string> | undefined;

  /**
   * <p>The Amazon EC2 placement group to associate with your compute resources. If you intend to submit
   *    multi-node parallel jobs to your compute environment, you should consider creating a cluster
   *    placement group and associate it with your compute resources. This keeps your multi-node parallel
   *    job on a logical grouping of instances within a single Availability Zone with high network flow
   *    potential. For more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/placement-groups.html">Placement groups</a> in the
   *     <i>Amazon EC2 User Guide for Linux Instances</i>.</p>
   *          <p>When updating a compute environment, changing the placement group requires an infrastructure
   *    update of the compute environment. For more information, see <a href="https://docs.aws.amazon.com/batch/latest/userguide/updating-compute-environments.html">Updating compute environments</a> in the
   *     <i>Batch User Guide</i>.</p>
   *          <note>
   *             <p>This parameter isn't applicable to jobs that are running on Fargate resources. Don't specify it.</p>
   *          </note>
   * @public
   */
  placementGroup?: string | undefined;

  /**
   * <p>The maximum percentage that a Spot Instance price can be when compared with the On-Demand
   *    price for that instance type before instances are launched. For example, if your maximum
   *    percentage is 20%, the Spot price must be less than 20% of the current On-Demand price for that
   *    Amazon EC2 instance. You always pay the lowest (market) price and never more than your maximum
   *    percentage. For most use cases, we recommend leaving this field empty.</p>
   *          <p>When updating a compute environment, changing the bid percentage requires an infrastructure
   *    update of the compute environment. For more information, see <a href="https://docs.aws.amazon.com/batch/latest/userguide/updating-compute-environments.html">Updating compute environments</a> in the
   *     <i>Batch User Guide</i>.</p>
   *          <note>
   *             <p>This parameter isn't applicable to jobs that are running on Fargate resources. Don't specify it.</p>
   *          </note>
   * @public
   */
  bidPercentage?: number | undefined;

  /**
   * <p>The updated launch template to use for your compute resources. You must specify either the
   *    launch template ID or launch template name in the request, but not both. For more information,
   *    see <a href="https://docs.aws.amazon.com/batch/latest/userguide/launch-templates.html">Launch template
   *     support</a> in the <i>Batch User Guide</i>. To remove the custom launch
   *    template and use the default launch template, set <code>launchTemplateId</code> or
   *     <code>launchTemplateName</code> member of the launch template specification to an empty string.
   *    Removing the launch template from a compute environment will not remove the AMI specified in the
   *    launch template. In order to update the AMI specified in a launch template, the
   *     <code>updateToLatestImageVersion</code> parameter must be set to <code>true</code>.</p>
   *          <p>When updating a compute environment, changing the launch template requires an infrastructure
   *    update of the compute environment. For more information, see <a href="https://docs.aws.amazon.com/batch/latest/userguide/updating-compute-environments.html">Updating compute environments</a> in the
   *     <i>Batch User Guide</i>.</p>
   *          <note>
   *             <p>This parameter isn't applicable to jobs that are running on Fargate resources. Don't specify it.</p>
   *          </note>
   * @public
   */
  launchTemplate?: LaunchTemplateSpecification | undefined;

  /**
   * <p>Provides information used to select Amazon Machine Images (AMIs) for Amazon EC2 instances in the
   *    compute environment. If <code>Ec2Configuration</code> isn't specified, the default is
   *     <code>ECS_AL2</code>.</p>
   *          <p>When updating a compute environment, changing this setting requires an infrastructure update
   *    of the compute environment. For more information, see <a href="https://docs.aws.amazon.com/batch/latest/userguide/updating-compute-environments.html">Updating compute environments</a> in the
   *     <i>Batch User Guide</i>. To remove the Amazon EC2 configuration and any custom AMI ID
   *    specified in <code>imageIdOverride</code>, set this value to an empty string.</p>
   *          <p>One or two values can be provided.</p>
   *          <note>
   *             <p>This parameter isn't applicable to jobs that are running on Fargate resources. Don't specify it.</p>
   *          </note>
   * @public
   */
  ec2Configuration?: Ec2Configuration[] | undefined;

  /**
   * <p>Specifies whether the AMI ID is updated to the latest one that's supported by Batch when
   *    the compute environment has an infrastructure update. The default value is
   *    <code>false</code>.</p>
   *          <note>
   *             <p>An AMI ID can either be specified in the <code>imageId</code> or
   *      <code>imageIdOverride</code> parameters or be determined by the launch template that's
   *     specified in the <code>launchTemplate</code> parameter. If an AMI ID is specified any of these
   *     ways, this parameter is ignored. For more information about to update AMI IDs during an
   *     infrastructure update, see <a href="https://docs.aws.amazon.com/batch/latest/userguide/updating-compute-environments.html#updating-compute-environments-ami">Updating
   *      the AMI ID</a> in the <i>Batch User Guide</i>.</p>
   *          </note>
   *          <p>When updating a compute environment, changing this setting requires an infrastructure update
   *    of the compute environment. For more information, see <a href="https://docs.aws.amazon.com/batch/latest/userguide/updating-compute-environments.html">Updating compute environments</a> in the
   *     <i>Batch User Guide</i>.</p>
   * @public
   */
  updateToLatestImageVersion?: boolean | undefined;

  /**
   * <p>The type of compute environment: <code>EC2</code>, <code>SPOT</code>, <code>FARGATE</code>,
   *    or <code>FARGATE_SPOT</code>. For more information, see <a href="https://docs.aws.amazon.com/batch/latest/userguide/compute_environments.html">Compute environments</a> in the
   *     <i>Batch User Guide</i>.</p>
   *          <p> If you choose <code>SPOT</code>, you must also specify an Amazon EC2 Spot Fleet role with the
   *     <code>spotIamFleetRole</code> parameter. For more information, see <a href="https://docs.aws.amazon.com/batch/latest/userguide/spot_fleet_IAM_role.html">Amazon EC2 spot fleet role</a> in the
   *     <i>Batch User Guide</i>.</p>
   *          <p>When updating a compute environment, changing the type of a compute environment requires an
   *    infrastructure update of the compute environment. For more information, see <a href="https://docs.aws.amazon.com/batch/latest/userguide/updating-compute-environments.html">Updating compute
   *     environments</a> in the <i>Batch User Guide</i>.</p>
   * @public
   */
  type?: CRType | undefined;

  /**
   * <p>The Amazon Machine Image (AMI) ID used for instances launched in the compute environment.
   *    This parameter is overridden by the <code>imageIdOverride</code> member of the
   *     <code>Ec2Configuration</code> structure. To remove the custom AMI ID and use the default AMI ID,
   *    set this value to an empty string.</p>
   *          <p>When updating a compute environment, changing the AMI ID requires an infrastructure update
   *    of the compute environment. For more information, see <a href="https://docs.aws.amazon.com/batch/latest/userguide/updating-compute-environments.html">Updating compute environments</a> in the
   *     <i>Batch User Guide</i>.</p>
   *          <note>
   *             <p>This parameter isn't applicable to jobs that are running on Fargate resources. Don't specify it.</p>
   *          </note>
   *          <note>
   *             <p>The AMI that you choose for a compute environment must match the architecture of the instance types that
   *     you intend to use for that compute environment. For example, if your compute environment uses A1 instance types,
   *     the compute resource AMI that you choose must support ARM instances. Amazon ECS vends both x86 and ARM versions of the
   *     Amazon ECS-optimized Amazon Linux 2 AMI. For more information, see <a href="https://docs.aws.amazon.com/AmazonECS/latest/developerguide/ecs-optimized_AMI.html#ecs-optimized-ami-linux-variants.html">Amazon ECS-optimized
   *     Amazon Linux 2 AMI</a>
   *     in the <i>Amazon Elastic Container Service Developer Guide</i>.</p>
   *          </note>
   * @public
   */
  imageId?: string | undefined;
}

/**
 * <p>Contains the parameters for <code>UpdateComputeEnvironment</code>.</p>
 * @public
 */
export interface UpdateComputeEnvironmentRequest {
  /**
   * <p>The name or full Amazon Resource Name (ARN) of the compute environment to update.</p>
   * @public
   */
  computeEnvironment: string | undefined;

  /**
   * <p>The state of the compute environment. Compute environments in the <code>ENABLED</code>
   *       state can accept jobs from a queue and scale in or out automatically based on the workload
   *       demand of its associated queues.</p>
   *          <p>If the state is <code>ENABLED</code>, then the Batch scheduler can attempt to place jobs
   *       from an associated job queue on the compute resources within the environment. If the compute
   *       environment is managed, then it can scale its instances out or in automatically, based on the
   *       job queue demand.</p>
   *          <p>If the state is <code>DISABLED</code>, then the Batch scheduler doesn't attempt to place
   *       jobs within the environment. Jobs in a <code>STARTING</code> or <code>RUNNING</code> state
   *       continue to progress normally. Managed compute environments in the <code>DISABLED</code> state
   *       don't scale out. </p>
   *          <note>
   *             <p>Compute environments in a <code>DISABLED</code> state may continue to incur billing
   *         charges. To prevent additional charges, turn off and then delete the compute environment.
   *         For more information, see <a href="https://docs.aws.amazon.com/batch/latest/userguide/compute_environment_parameters.html#compute_environment_state">State</a> in the <i>Batch User Guide</i>.</p>
   *          </note>
   *          <p>When an instance is idle, the instance scales down to the <code>minvCpus</code> value.
   *       However, the instance size doesn't change. For example, consider a <code>c5.8xlarge</code>
   *       instance with a <code>minvCpus</code> value of <code>4</code> and a <code>desiredvCpus</code>
   *       value of <code>36</code>. This instance doesn't scale down to a <code>c5.large</code>
   *       instance.</p>
   * @public
   */
  state?: CEState | undefined;

  /**
   * <p>The maximum number of vCPUs expected to be used for an unmanaged compute environment.
   *       Don't specify this parameter for a managed compute environment. This parameter is only used
   *       for fair-share scheduling to reserve vCPU capacity for new share identifiers. If this
   *       parameter isn't provided for a fair-share job queue, no vCPU capacity is reserved.</p>
   * @public
   */
  unmanagedvCpus?: number | undefined;

  /**
   * <p>Details of the compute resources managed by the compute environment. Required for a
   *       managed compute environment. For more information, see <a href="https://docs.aws.amazon.com/batch/latest/userguide/compute_environments.html">Compute Environments</a> in the
   *         <i>Batch User Guide</i>.</p>
   * @public
   */
  computeResources?: ComputeResourceUpdate | undefined;

  /**
   * <p>The full Amazon Resource Name (ARN) of the IAM role that allows Batch to make calls to other Amazon Web Services
   *       services on your behalf. For more information, see <a href="https://docs.aws.amazon.com/batch/latest/userguide/service_IAM_role.html">Batch service IAM role</a> in the
   *         <i>Batch User Guide</i>.</p>
   *          <important>
   *             <p>If the compute environment has a service-linked role, it can't be changed to use a
   *         regular IAM role. Likewise, if the compute environment has a regular IAM role, it can't
   *         be changed to use a service-linked role. To update the parameters for the compute
   *         environment that require an infrastructure update to change, the <b>AWSServiceRoleForBatch</b> service-linked role must be used. For more information,
   *         see <a href="https://docs.aws.amazon.com/batch/latest/userguide/updating-compute-environments.html">Updating
   *           compute environments</a> in the <i>Batch User Guide</i>.</p>
   *          </important>
   *          <p>If your specified role has a path other than <code>/</code>, then you must either specify
   *       the full role ARN (recommended) or prefix the role name with the path.</p>
   *          <note>
   *             <p>Depending on how you created your Batch service role, its ARN might contain the
   *           <code>service-role</code> path prefix. When you only specify the name of the service role,
   *         Batch assumes that your ARN doesn't use the <code>service-role</code> path prefix. Because
   *         of this, we recommend that you specify the full ARN of your service role when you create
   *         compute environments.</p>
   *          </note>
   * @public
   */
  serviceRole?: string | undefined;

  /**
   * <p>Specifies the updated infrastructure update policy for the compute environment. For more
   *       information about infrastructure updates, see <a href="https://docs.aws.amazon.com/batch/latest/userguide/updating-compute-environments.html">Updating compute environments</a> in
   *       the <i>Batch User Guide</i>.</p>
   * @public
   */
  updatePolicy?: UpdatePolicy | undefined;

  /**
   * <p>Reserved.</p>
   * @public
   */
  context?: string | undefined;
}

/**
 * @public
 */
export interface UpdateComputeEnvironmentResponse {
  /**
   * <p>The name of the compute environment. It can be up to 128 characters long. It can contain uppercase and
   *  lowercase letters, numbers, hyphens (-), and underscores (_).</p>
   * @public
   */
  computeEnvironmentName?: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the compute environment.</p>
   * @public
   */
  computeEnvironmentArn?: string | undefined;
}

/**
 * @public
 */
export interface UpdateConsumableResourceRequest {
  /**
   * <p>The name or ARN of the consumable resource to be updated.</p>
   * @public
   */
  consumableResource: string | undefined;

  /**
   * <p>Indicates how the quantity of the consumable resource will be updated. Must be one of:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>SET</code>
   *                </p>
   *                <p>Sets the quantity of the resource to the value specified by the <code>quantity</code>
   *                     parameter.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>ADD</code>
   *                </p>
   *                <p>Increases the quantity of the resource by the value specified by the <code>quantity</code>
   *                     parameter.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>REMOVE</code>
   *                </p>
   *                <p>Reduces the quantity of the resource by the value specified by the <code>quantity</code>
   *                     parameter.</p>
   *             </li>
   *          </ul>
   * @public
   */
  operation?: string | undefined;

  /**
   * <p>The change in the total quantity of the consumable resource. The <code>operation</code>
   *             parameter determines whether the value specified here will be the new total quantity, or
   *             the amount by which the total quantity will be increased or reduced. Must be a non-negative
   *             value.</p>
   * @public
   */
  quantity?: number | undefined;

  /**
   * <p>If this parameter is specified and two update requests with identical payloads and
   *           <code>clientToken</code>s are received, these requests are considered the same request. Both requests will succeed, but the update will only happen once. A <code>clientToken</code> is valid for 8 hours.</p>
   * @public
   */
  clientToken?: string | undefined;
}

/**
 * @public
 */
export interface UpdateConsumableResourceResponse {
  /**
   * <p>The name of the consumable resource to be updated.</p>
   * @public
   */
  consumableResourceName: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the consumable resource.</p>
   * @public
   */
  consumableResourceArn: string | undefined;

  /**
   * <p>The total amount of the consumable resource that is available.</p>
   * @public
   */
  totalQuantity?: number | undefined;
}

/**
 * <p>Contains the parameters for <code>UpdateJobQueue</code>.</p>
 * @public
 */
export interface UpdateJobQueueRequest {
  /**
   * <p>The name or the Amazon Resource Name (ARN) of the job queue.</p>
   * @public
   */
  jobQueue: string | undefined;

  /**
   * <p>Describes the queue's ability to accept new jobs. If the job queue state is
   *         <code>ENABLED</code>, it can accept jobs. If the job queue state is <code>DISABLED</code>,
   *       new jobs can't be added to the queue, but jobs already in the queue can finish.</p>
   * @public
   */
  state?: JQState | undefined;

  /**
   * <p>Amazon Resource Name (ARN) of the fair-share scheduling policy. Once a job queue is created, the fair-share
   *       scheduling policy can be replaced but not removed. The format is
   *           <code>aws:<i>Partition</i>:batch:<i>Region</i>:<i>Account</i>:scheduling-policy/<i>Name</i>
   *             </code>.
   *       For example,
   *         <code>aws:aws:batch:us-west-2:123456789012:scheduling-policy/MySchedulingPolicy</code>.</p>
   * @public
   */
  schedulingPolicyArn?: string | undefined;

  /**
   * <p>The priority of the job queue. Job queues with a higher priority (or a higher integer
   *       value for the <code>priority</code> parameter) are evaluated first when associated with the
   *       same compute environment. Priority is determined in descending order. For example, a job queue
   *       with a priority value of <code>10</code> is given scheduling preference over a job queue with
   *       a priority value of <code>1</code>. All of the compute environments must be either EC2
   *         (<code>EC2</code> or <code>SPOT</code>) or Fargate (<code>FARGATE</code> or
   *         <code>FARGATE_SPOT</code>). EC2 and Fargate compute environments can't be mixed.</p>
   * @public
   */
  priority?: number | undefined;

  /**
   * <p>Details the set of compute environments mapped to a job queue and their order relative to
   *       each other. This is one of the parameters used by the job scheduler to determine which compute
   *       environment runs a given job. Compute environments must be in the <code>VALID</code> state
   *       before you can associate them with a job queue. All of the compute environments must be either
   *       EC2 (<code>EC2</code> or <code>SPOT</code>) or Fargate (<code>FARGATE</code> or
   *         <code>FARGATE_SPOT</code>). EC2 and Fargate compute environments can't be mixed.</p>
   *          <note>
   *             <p>All compute environments that are associated with a job queue must share the same
   *         architecture. Batch doesn't support mixing compute environment architecture types in a
   *         single job queue.</p>
   *          </note>
   * @public
   */
  computeEnvironmentOrder?: ComputeEnvironmentOrder[] | undefined;

  /**
   * <p>The order of the service environment associated with the job queue. Job queues with a higher priority are evaluated first when associated with the same service environment.</p>
   * @public
   */
  serviceEnvironmentOrder?: ServiceEnvironmentOrder[] | undefined;

  /**
   * <p>The set of actions that Batch perform on jobs that remain at the head of the job queue in the specified state longer than specified times. Batch will perform each action after <code>maxTimeSeconds</code> has passed. (<b>Note</b>: The minimum value for maxTimeSeconds is 600 (10 minutes) and its maximum value is 86,400 (24 hours).)</p>
   * @public
   */
  jobStateTimeLimitActions?: JobStateTimeLimitAction[] | undefined;
}

/**
 * @public
 */
export interface UpdateJobQueueResponse {
  /**
   * <p>The name of the job queue.</p>
   * @public
   */
  jobQueueName?: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the job queue.</p>
   * @public
   */
  jobQueueArn?: string | undefined;
}

/**
 * <p>Contains the parameters for <code>UpdateSchedulingPolicy</code>.</p>
 * @public
 */
export interface UpdateSchedulingPolicyRequest {
  /**
   * <p>The Amazon Resource Name (ARN) of the scheduling policy to update.</p>
   * @public
   */
  arn: string | undefined;

  /**
   * <p>The fair-share policy scheduling details.</p>
   * @public
   */
  fairsharePolicy?: FairsharePolicy | undefined;
}

/**
 * @public
 */
export interface UpdateSchedulingPolicyResponse {}

/**
 * @public
 */
export interface UpdateServiceEnvironmentRequest {
  /**
   * <p>The name or ARN of the service environment to update.</p>
   * @public
   */
  serviceEnvironment: string | undefined;

  /**
   * <p>The state of the service environment. </p>
   * @public
   */
  state?: ServiceEnvironmentState | undefined;

  /**
   * <p>The capacity limits for the service environment. This defines the maximum resources that can be used by service jobs in this environment.</p>
   * @public
   */
  capacityLimits?: CapacityLimit[] | undefined;
}

/**
 * @public
 */
export interface UpdateServiceEnvironmentResponse {
  /**
   * <p>The name of the service environment that was updated.</p>
   * @public
   */
  serviceEnvironmentName: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the service environment that was updated.</p>
   * @public
   */
  serviceEnvironmentArn: string | undefined;
}
