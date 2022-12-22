// smithy-typescript generated code
import { ExceptionOptionType as __ExceptionOptionType } from "@aws-sdk/smithy-client";

import { BatchServiceException as __BaseException } from "./BatchServiceException";

export enum ArrayJobDependency {
  N_TO_N = "N_TO_N",
  SEQUENTIAL = "SEQUENTIAL",
}

/**
 * <p>An object that represents an Batch array job.</p>
 */
export interface ArrayProperties {
  /**
   * <p>The size of the array job.</p>
   */
  size?: number;
}

/**
 * <p>An object that represents the array properties of a job.</p>
 */
export interface ArrayPropertiesDetail {
  /**
   * <p>A summary of the number of array job children in each available job status. This parameter is returned for
   *    parent array jobs.</p>
   */
  statusSummary?: Record<string, number>;

  /**
   * <p>The size of the array job. This parameter is returned for parent array jobs.</p>
   */
  size?: number;

  /**
   * <p>The job index within the array that's associated with this job. This parameter is returned for array job
   *    children.</p>
   */
  index?: number;
}

/**
 * <p>An object that represents the array properties of a job.</p>
 */
export interface ArrayPropertiesSummary {
  /**
   * <p>The size of the array job. This parameter is returned for parent array jobs.</p>
   */
  size?: number;

  /**
   * <p>The job index within the array that's associated with this job. This parameter is returned for children of array
   *    jobs.</p>
   */
  index?: number;
}

export enum AssignPublicIp {
  DISABLED = "DISABLED",
  ENABLED = "ENABLED",
}

/**
 * <p>An object that represents the elastic network interface for a multi-node parallel job node.</p>
 */
export interface NetworkInterface {
  /**
   * <p>The attachment ID for the network interface.</p>
   */
  attachmentId?: string;

  /**
   * <p>The private IPv6 address for the network interface.</p>
   */
  ipv6Address?: string;

  /**
   * <p>The private IPv4 address for the network interface.</p>
   */
  privateIpv4Address?: string;
}

/**
 * <p>An object that represents the details of a container that's part of a job attempt.</p>
 */
export interface AttemptContainerDetail {
  /**
   * <p>The Amazon Resource Name (ARN) of the Amazon ECS container instance that hosts the job attempt.</p>
   */
  containerInstanceArn?: string;

  /**
   * <p>The Amazon Resource Name (ARN) of the Amazon ECS task that's associated with the job attempt. Each container attempt receives a task
   *    ARN when they reach the <code>STARTING</code> status.</p>
   */
  taskArn?: string;

  /**
   * <p>The exit code for the job attempt. A non-zero exit code is considered failed.</p>
   */
  exitCode?: number;

  /**
   * <p>A short (255 max characters) human-readable string to provide additional details for a running or stopped
   *    container.</p>
   */
  reason?: string;

  /**
   * <p>The name of the CloudWatch Logs log stream that's associated with the container. The log group for Batch jobs
   *    is <code>/aws/batch/job</code>. Each container attempt receives a log stream name when they reach the
   *    <code>RUNNING</code> status.</p>
   */
  logStreamName?: string;

  /**
   * <p>The network interfaces that are associated with the job attempt.</p>
   */
  networkInterfaces?: NetworkInterface[];
}

/**
 * <p>An object that represents a job attempt.</p>
 */
export interface AttemptDetail {
  /**
   * <p>The details for the container in this job attempt.</p>
   */
  container?: AttemptContainerDetail;

  /**
   * <p>The Unix timestamp (in milliseconds) for when the attempt was started (when the attempt transitioned from the
   *    <code>STARTING</code> state to the <code>RUNNING</code> state).</p>
   */
  startedAt?: number;

  /**
   * <p>The Unix timestamp (in milliseconds) for when the attempt was stopped (when the attempt transitioned from the
   *    <code>RUNNING</code> state to a terminal state, such as <code>SUCCEEDED</code> or <code>FAILED</code>).</p>
   */
  stoppedAt?: number;

  /**
   * <p>A short, human-readable string to provide additional details for the current status of the job attempt.</p>
   */
  statusReason?: string;
}

/**
 * <p>Contains the parameters for <code>CancelJob</code>.</p>
 */
export interface CancelJobRequest {
  /**
   * <p>The Batch job ID of the job to cancel.</p>
   */
  jobId: string | undefined;

  /**
   * <p>A message to attach to the job that explains the reason for canceling it. This message is returned by future
   *     <a>DescribeJobs</a> operations on the job. This message is also recorded in the Batch activity
   *    logs.</p>
   */
  reason: string | undefined;
}

export interface CancelJobResponse {}

/**
 * <p>These errors are usually caused by a client action. One example cause is using an action or resource on behalf
 *    of a user that doesn't have permissions to use the action or resource. Another cause is specifying an identifier
 *    that's not valid.</p>
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

export enum CRAllocationStrategy {
  BEST_FIT = "BEST_FIT",
  BEST_FIT_PROGRESSIVE = "BEST_FIT_PROGRESSIVE",
  SPOT_CAPACITY_OPTIMIZED = "SPOT_CAPACITY_OPTIMIZED",
}

/**
 * <p>Provides information used to select Amazon Machine Images (AMIs) for instances in the compute environment. If
 *    <code>Ec2Configuration</code> isn't specified, the default is <code>ECS_AL2</code> (<a href="https://docs.aws.amazon.com/AmazonECS/latest/developerguide/ecs-optimized_AMI.html#al2ami">Amazon Linux 2</a>).</p>
 *          <note>
 *             <p>This object isn't applicable to jobs that are running on Fargate resources.</p>
 *          </note>
 */
export interface Ec2Configuration {
  /**
   * <p>The image type to match with the instance type to select an AMI. The supported values are different for
   *    <code>ECS</code> and <code>EKS</code> resources.</p>
   *          <dl>
   *             <dt>ECS</dt>
   *             <dd>
   *                <p>If the <code>imageIdOverride</code> parameter isn't specified, then a recent <a href="https://docs.aws.amazon.com/AmazonECS/latest/developerguide/ecs-optimized_AMI.html#al2ami">Amazon ECS-optimized Amazon Linux 2 AMI</a>
   *       (<code>ECS_AL2</code>) is used. If a new image type is specified in an update, but neither an <code>imageId</code>
   *       nor a <code>imageIdOverride</code> parameter is specified, then the latest Amazon ECS optimized AMI for that image type
   *       that's supported by Batch is used.</p>
   *                <dl>
   *                   <dt>ECS_AL2</dt>
   *                   <dd>
   *                      <p>
   *                         <a href="https://docs.aws.amazon.com/AmazonECS/latest/developerguide/ecs-optimized_AMI.html#al2ami">Amazon
   *          Linux 2</a>: Default for all non-GPU instance families.</p>
   *                   </dd>
   *                   <dt>ECS_AL2_NVIDIA</dt>
   *                   <dd>
   *                      <p>
   *                         <a href="https://docs.aws.amazon.com/AmazonECS/latest/developerguide/ecs-optimized_AMI.html#gpuami">Amazon
   *          Linux 2 (GPU)</a>: Default for all GPU instance families (for example <code>P4</code> and <code>G4</code>)
   *          and can be used for all non Amazon Web Services Graviton-based instance types.</p>
   *                   </dd>
   *                   <dt>ECS_AL1</dt>
   *                   <dd>
   *                      <p>
   *                         <a href="https://docs.aws.amazon.com/AmazonECS/latest/developerguide/ecs-optimized_AMI.html#alami">Amazon Linux</a>. Amazon Linux has reached the end-of-life of standard support. For more information, see <a href="http://aws.amazon.com/amazon-linux-ami/">Amazon Linux AMI</a>.</p>
   *                   </dd>
   *                </dl>
   *             </dd>
   *             <dt>EKS</dt>
   *             <dd>
   *                <p>If the <code>imageIdOverride</code> parameter isn't specified, then a recent <a href="https://docs.aws.amazon.com/eks/latest/userguide/eks-optimized-ami.html">Amazon EKS-optimized Amazon Linux AMI</a>
   *       (<code>EKS_AL2</code>) is used. If a new image type is specified in an update, but neither an <code>imageId</code>
   *       nor a <code>imageIdOverride</code> parameter is specified, then the latest Amazon EKS optimized AMI for that image type
   *       that Batch supports is used.</p>
   *                <dl>
   *                   <dt>EKS_AL2</dt>
   *                   <dd>
   *                      <p>
   *                         <a href="https://docs.aws.amazon.com/eks/latest/userguide/eks-optimized-ami.html">Amazon
   *          Linux 2</a>: Default for all non-GPU instance families.</p>
   *                   </dd>
   *                   <dt>EKS_AL2_NVIDIA</dt>
   *                   <dd>
   *                      <p>
   *                         <a href="https://docs.aws.amazon.com/eks/latest/userguide/eks-optimized-ami.html">Amazon Linux 2
   *           (accelerated)</a>: Default for all GPU instance families (for example, <code>P4</code> and
   *          <code>G4</code>) and can be used for all non Amazon Web Services Graviton-based instance types.</p>
   *                   </dd>
   *                </dl>
   *             </dd>
   *          </dl>
   */
  imageType: string | undefined;

  /**
   * <p>The AMI ID used for instances launched in the compute environment that match the image type. This setting
   *    overrides the <code>imageId</code> set in the <code>computeResource</code> object.</p>
   *          <note>
   *             <p>The AMI that you choose for a compute environment must match the architecture of the instance types that
   *     you intend to use for that compute environment. For example, if your compute environment uses A1 instance types,
   *     the compute resource AMI that you choose must support ARM instances. Amazon ECS vends both x86 and ARM versions of the
   *     Amazon ECS-optimized Amazon Linux 2 AMI. For more information, see <a href="https://docs.aws.amazon.com/AmazonECS/latest/developerguide/ecs-optimized_AMI.html#ecs-optimized-ami-linux-variants.html">Amazon ECS-optimized
   *     Amazon Linux 2 AMI</a>
   *     in the <i>Amazon Elastic Container Service Developer Guide</i>.</p>
   *          </note>
   */
  imageIdOverride?: string;

  /**
   * <p>The Kubernetes version for the compute environment. If you don't specify a value, the latest version that Batch
   *    supports is used.</p>
   */
  imageKubernetesVersion?: string;
}

/**
 * <p>An object that represents a launch template that's associated with a compute resource. You must specify either
 *    the launch template ID or launch template name in the request, but not both.</p>
 *          <p>If security groups are specified using both the <code>securityGroupIds</code> parameter of
 *    <code>CreateComputeEnvironment</code> and the launch template, the values in the <code>securityGroupIds</code>
 *    parameter of <code>CreateComputeEnvironment</code> will be used.</p>
 *          <note>
 *             <p>This object isn't applicable to jobs that are running on Fargate resources.</p>
 *          </note>
 */
export interface LaunchTemplateSpecification {
  /**
   * <p>The ID of the launch template.</p>
   */
  launchTemplateId?: string;

  /**
   * <p>The name of the launch template.</p>
   */
  launchTemplateName?: string;

  /**
   * <p>The version number of the launch template, <code>$Latest</code>, or <code>$Default</code>.</p>
   *          <p>If the value is <code>$Latest</code>, the latest version of the launch template is used. If the value is
   *    <code>$Default</code>, the default version of the launch template is used.</p>
   *          <important>
   *             <p>If the AMI ID that's used in a compute environment is from the launch template, the AMI isn't changed when the
   *     compute environment is updated. It's only changed if the <code>updateToLatestImageVersion</code> parameter for the
   *     compute environment is set to <code>true</code>. During an infrastructure update, if either <code>$Latest</code> or
   *     <code>$Default</code> is specified, Batch re-evaluates the launch template version, and it might use a different
   *     version of the launch template. This is the case even if the launch template isn't specified in the update. When
   *     updating a compute environment, changing the launch template requires an infrastructure update of the compute
   *     environment. For more information, see <a href="https://docs.aws.amazon.com/batch/latest/userguide/updating-compute-environments.html">Updating compute environments</a> in the
   *     <i>Batch User Guide</i>.</p>
   *          </important>
   *          <p>Default: <code>$Default</code>.</p>
   */
  version?: string;
}

export enum CRType {
  EC2 = "EC2",
  FARGATE = "FARGATE",
  FARGATE_SPOT = "FARGATE_SPOT",
  SPOT = "SPOT",
}

/**
 * <p>An object that represents an Batch compute resource. For more information, see <a href="https://docs.aws.amazon.com/batch/latest/userguide/compute_environments.html">Compute environments</a> in the
 *    <i>Batch User Guide</i>.</p>
 */
export interface ComputeResource {
  /**
   * <p>The type of compute environment: <code>EC2</code>, <code>SPOT</code>, <code>FARGATE</code>, or
   *    <code>FARGATE_SPOT</code>. For more information, see <a href="https://docs.aws.amazon.com/batch/latest/userguide/compute_environments.html">Compute environments</a> in the
   *    <i>Batch User Guide</i>.</p>
   *          <p> If you choose <code>SPOT</code>, you must also specify an Amazon EC2 Spot Fleet role with the
   *    <code>spotIamFleetRole</code> parameter. For more information, see <a href="https://docs.aws.amazon.com/batch/latest/userguide/spot_fleet_IAM_role.html">Amazon EC2 spot fleet role</a> in the
   *    <i>Batch User Guide</i>.</p>
   */
  type: CRType | string | undefined;

  /**
   * <p>The allocation strategy to use for the compute resource if not enough instances of the best fitting instance
   *    type can be allocated. This might be because of availability of the instance type in the Region or <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/ec2-resource-limits.html">Amazon EC2 service limits</a>. For more
   *    information, see <a href="https://docs.aws.amazon.com/batch/latest/userguide/allocation-strategies.html">Allocation strategies</a>
   *    in the <i>Batch User Guide</i>.</p>
   *          <note>
   *             <p>This parameter isn't applicable to jobs that are running on Fargate resources. Don't specify it.</p>
   *          </note>
   *          <dl>
   *             <dt>BEST_FIT (default)</dt>
   *             <dd>
   *                <p>Batch selects an instance type that best fits the needs of the jobs with a preference for the lowest-cost
   *       instance type. If additional instances of the selected instance type aren't available, Batch waits for the
   *       additional instances to be available. If there aren't enough instances available or the user is reaching <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/ec2-resource-limits.html">Amazon EC2 service limits</a>,
   *       additional jobs aren't run until the currently running jobs are completed. This allocation strategy keeps costs
   *       lower but can limit scaling. If you're using Spot Fleets with <code>BEST_FIT</code>, the Spot Fleet IAM Role must
   *       be specified. Compute resources that use a <code>BEST_FIT</code> allocation strategy don't support infrastructure
   *       updates and can't update some parameters. For more information, see <a href="https://docs.aws.amazon.com/batch/latest/userguide/updating-compute-environments.html">Updating compute environments</a> in the
   *       <i>Batch User Guide</i>.</p>
   *             </dd>
   *             <dt>BEST_FIT_PROGRESSIVE</dt>
   *             <dd>
   *                <p>Batch selects additional instance types that are large enough to meet the requirements of the jobs in the
   *       queue. Its preference is for instance types with lower cost vCPUs. If additional instances of the previously
   *       selected instance types aren't available, Batch selects new instance types.</p>
   *             </dd>
   *             <dt>SPOT_CAPACITY_OPTIMIZED</dt>
   *             <dd>
   *                <p>Batch selects one or more instance types that are large enough to meet the requirements of the jobs in the
   *       queue. Its preference is for instance types that are less likely to be interrupted. This allocation strategy is
   *       only available for Spot Instance compute resources.</p>
   *             </dd>
   *          </dl>
   *          <p>With both <code>BEST_FIT_PROGRESSIVE</code> and <code>SPOT_CAPACITY_OPTIMIZED</code> strategies using On-Demand
   *    or Spot Instances, and the <code>BEST_FIT</code> strategy using Spot Instances, Batch might need to exceed
   *     <code>maxvCpus</code> to meet your capacity requirements. In this event, Batch never exceeds <code>maxvCpus</code>
   *    by more than a single instance.</p>
   */
  allocationStrategy?: CRAllocationStrategy | string;

  /**
   * <p>The minimum number of Amazon EC2 vCPUs that an environment should maintain (even if the compute environment is
   *    <code>DISABLED</code>).</p>
   *          <note>
   *             <p>This parameter isn't applicable to jobs that are running on Fargate resources. Don't specify it.</p>
   *          </note>
   */
  minvCpus?: number;

  /**
   * <p>The maximum number of Amazon EC2 vCPUs that a compute environment can reach.</p>
   *          <note>
   *             <p>With both <code>BEST_FIT_PROGRESSIVE</code> and <code>SPOT_CAPACITY_OPTIMIZED</code> allocation strategies
   *     using On-Demand or Spot Instances, and the <code>BEST_FIT</code> strategy using Spot Instances, Batch might need to exceed <code>maxvCpus</code> to meet your capacity requirements. In this event, Batch never
   *     exceeds <code>maxvCpus</code> by more than a single instance. For example, no more than a single instance from among
   *     those specified in your compute environment is allocated.</p>
   *          </note>
   */
  maxvCpus: number | undefined;

  /**
   * <p>The desired number of Amazon EC2 vCPUS in the compute environment. Batch modifies this value between the minimum
   *    and maximum values based on job queue demand.</p>
   *          <note>
   *             <p>This parameter isn't applicable to jobs that are running on Fargate resources. Don't specify it.</p>
   *          </note>
   */
  desiredvCpus?: number;

  /**
   * <p>The instances types that can be launched. You can specify instance families to launch any instance type within
   *    those families (for example, <code>c5</code> or <code>p3</code>), or you can specify specific sizes within a family
   *    (such as <code>c5.8xlarge</code>). You can also choose <code>optimal</code> to select instance types (from the C4,
   *    M4, and R4 instance families) that match the demand of your job queues.</p>
   *          <note>
   *             <p>This parameter isn't applicable to jobs that are running on Fargate resources. Don't specify it.</p>
   *          </note>
   *          <note>
   *             <p>When you create a compute environment, the instance types that you select for the compute environment must
   *     share the same architecture. For example, you can't mix x86 and ARM instances in the same compute
   *     environment.</p>
   *          </note>
   *          <note>
   *             <p>Currently, <code>optimal</code> uses instance types from the C4, M4, and R4 instance families. In Regions that
   *     don't have instance types from those instance families, instance types from the C5, M5, and R5 instance families are
   *     used.</p>
   *          </note>
   */
  instanceTypes?: string[];

  /**
   * @deprecated
   *
   * <p>The Amazon Machine Image (AMI) ID used for instances launched in the compute environment. This parameter is
   *    overridden by the <code>imageIdOverride</code> member of the <code>Ec2Configuration</code> structure.</p>
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
   */
  imageId?: string;

  /**
   * <p>The VPC subnets where the compute resources are launched. These subnets must be within the same VPC. Fargate
   *    compute resources can contain up to 16 subnets. For more information, see <a href="https://docs.aws.amazon.com/vpc/latest/userguide/VPC_Subnets.html">VPCs and subnets</a> in the <i>Amazon VPC User
   *    Guide</i>.</p>
   *          <note>
   *             <p>Batch on Amazon EC2 and Batch on Amazon EKS support Local Zones. For more information, see
   *     <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/using-regions-availability-zones.html#concepts-local-zones"> Local Zones</a> in the <i>Amazon EC2 User Guide for Linux Instances</i>, <a href="https://docs.aws.amazon.com/eks/latest/userguide/local-zones.html">Amazon EKS and Amazon Web Services Local
   *       Zones</a> in the <i>Amazon EKS User Guide</i> and <a href="https://docs.aws.amazon.com/AmazonECS/latest/developerguide/cluster-regions-zones.html#clusters-local-zones">
   *        Amazon ECS clusters in Local Zones, Wavelength Zones, and Amazon Web Services Outposts</a> in the
   *     <i>Amazon ECS Developer Guide</i>.</p>
   *             <p>Batch on Fargate doesn't currently support Local Zones.</p>
   *          </note>
   */
  subnets: string[] | undefined;

  /**
   * <p>The Amazon EC2 security groups that are associated with instances launched in the compute environment. One or more
   *    security groups must be specified, either in <code>securityGroupIds</code> or using a launch template referenced in
   *    <code>launchTemplate</code>. This parameter is required for jobs that are running on Fargate resources and must
   *    contain at least one security group. Fargate doesn't support launch templates. If security groups are specified
   *    using both <code>securityGroupIds</code> and <code>launchTemplate</code>, the values in <code>securityGroupIds</code>
   *    are used.</p>
   */
  securityGroupIds?: string[];

  /**
   * <p>The Amazon EC2 key pair that's used for instances launched in the compute environment. You can use this key pair to
   *    log in to your instances with SSH.</p>
   *          <note>
   *             <p>This parameter isn't applicable to jobs that are running on Fargate resources. Don't specify it.</p>
   *          </note>
   */
  ec2KeyPair?: string;

  /**
   * <p>The Amazon ECS instance profile applied to Amazon EC2 instances in a compute environment. You can specify the short name
   *    or full Amazon Resource Name (ARN) of an instance profile. For example, <code>
   *                <i>ecsInstanceRole</i>
   *             </code> or
   *    <code>arn:aws:iam::<i><aws_account_id></i>:instance-profile/<i>ecsInstanceRole</i>
   *             </code>.
   *    For more information, see <a href="https://docs.aws.amazon.com/batch/latest/userguide/instance_IAM_role.html">Amazon ECS instance
   *    role</a> in the <i>Batch User Guide</i>.</p>
   *          <note>
   *             <p>This parameter isn't applicable to jobs that are running on Fargate resources. Don't specify it.</p>
   *          </note>
   */
  instanceRole?: string;

  /**
   * <p>Key-value pair tags to be applied to EC2 resources that are launched in the compute environment. For Batch,
   *    these take the form of <code>"String1": "String2"</code>, where <code>String1</code> is the tag key and
   *    <code>String2</code> is the tag value-for example, <code>{ "Name": "Batch Instance - C4OnDemand" }</code>. This is
   *    helpful for recognizing your Batch instances in the Amazon EC2 console. Updating these tags requires an infrastructure
   *    update to the compute environment. For more information, see <a href="https://docs.aws.amazon.com/batch/latest/userguide/updating-compute-environments.html">Updating compute environments</a> in the
   *    <i>Batch User Guide</i>. These tags aren't seen when using the Batch <code>ListTagsForResource</code>
   *    API operation.</p>
   *          <note>
   *             <p>This parameter isn't applicable to jobs that are running on Fargate resources. Don't specify it.</p>
   *          </note>
   */
  tags?: Record<string, string>;

  /**
   * <p>The Amazon EC2 placement group to associate with your compute resources. If you intend to submit multi-node parallel
   *    jobs to your compute environment, you should consider creating a cluster placement group and associate it with your
   *    compute resources. This keeps your multi-node parallel job on a logical grouping of instances within a single
   *    Availability Zone with high network flow potential. For more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/placement-groups.html">Placement groups</a> in the <i>Amazon EC2 User Guide for
   *    Linux Instances</i>.</p>
   *          <note>
   *             <p>This parameter isn't applicable to jobs that are running on Fargate resources. Don't specify it.</p>
   *          </note>
   */
  placementGroup?: string;

  /**
   * <p>The maximum percentage that a Spot Instance price can be when compared with the On-Demand price for that
   *    instance type before instances are launched. For example, if your maximum percentage is 20%, then the Spot price must
   *    be less than 20% of the current On-Demand price for that Amazon EC2 instance. You always pay the lowest (market) price and
   *    never more than your maximum percentage. If you leave this field empty, the default value is 100% of the On-Demand
   *    price. For most use cases, we recommend
   *    leaving this field empty.</p>
   *          <note>
   *             <p>This parameter isn't applicable to jobs that are running on Fargate resources. Don't specify it.</p>
   *          </note>
   */
  bidPercentage?: number;

  /**
   * <p>The Amazon Resource Name (ARN) of the Amazon EC2 Spot Fleet IAM role applied to a <code>SPOT</code> compute environment. This role is
   *    required if the allocation strategy set to <code>BEST_FIT</code> or if the allocation strategy isn't specified. For
   *    more information, see <a href="https://docs.aws.amazon.com/batch/latest/userguide/spot_fleet_IAM_role.html">Amazon EC2 spot fleet
   *    role</a> in the <i>Batch User Guide</i>.</p>
   *          <note>
   *             <p>This parameter isn't applicable to jobs that are running on Fargate resources. Don't specify it.</p>
   *          </note>
   *          <important>
   *             <p>To tag your Spot Instances on creation, the Spot Fleet IAM role specified here must use the newer <b>AmazonEC2SpotFleetTaggingRole</b> managed policy. The previously recommended <b>AmazonEC2SpotFleetRole</b> managed policy doesn't have the required permissions to tag Spot
   *     Instances. For more information, see <a href="https://docs.aws.amazon.com/batch/latest/userguide/troubleshooting.html#spot-instance-no-tag">Spot instances not tagged on creation</a> in the
   *     <i>Batch User Guide</i>.</p>
   *          </important>
   */
  spotIamFleetRole?: string;

  /**
   * <p>The launch template to use for your compute resources. Any other compute resource parameters that you specify in
   *    a <a>CreateComputeEnvironment</a> API operation override the same parameters in the launch template. You
   *    must specify either the launch template ID or launch template name in the request, but not both. For more
   *    information, see <a href="https://docs.aws.amazon.com/batch/latest/userguide/launch-templates.html">Launch template support</a> in
   *    the <i>Batch User Guide</i>.</p>
   *          <note>
   *             <p>This parameter isn't applicable to jobs that are running on Fargate resources. Don't specify it.</p>
   *          </note>
   */
  launchTemplate?: LaunchTemplateSpecification;

  /**
   * <p>Provides information that's used to select Amazon Machine Images (AMIs) for EC2 instances in the compute
   *    environment. If <code>Ec2Configuration</code> isn't specified, the default is <code>ECS_AL2</code>.</p>
   *          <p>One or two values can be provided.</p>
   *          <note>
   *             <p>This parameter isn't applicable to jobs that are running on Fargate resources. Don't specify it.</p>
   *          </note>
   */
  ec2Configuration?: Ec2Configuration[];
}

/**
 * <p>Configuration for the Amazon EKS cluster that supports the Batch compute environment. The cluster must exist before
 *    the compute environment can be created.</p>
 */
export interface EksConfiguration {
  /**
   * <p>The Amazon Resource Name (ARN) of the Amazon EKS cluster. An example is
   *    <code>arn:<i>aws</i>:eks:<i>us-east-1</i>:<i>123456789012</i>:cluster/<i>ClusterForBatch</i>
   *             </code>.
   *   </p>
   */
  eksClusterArn: string | undefined;

  /**
   * <p>The namespace of the Amazon EKS cluster. Batch manages pods in this namespace. The value can't left empty or
   *    null. It must be fewer than 64 characters long, can't be set to <code>default</code>, can't start with
   *    "<code>kube-</code>," and must match this regular expression: <code>^[a-z0-9]([-a-z0-9]*[a-z0-9])?$</code>. For more
   *    information, see <a href="https://kubernetes.io/docs/concepts/overview/working-with-objects/namespaces/">Namespaces</a> in the Kubernetes documentation.</p>
   */
  kubernetesNamespace: string | undefined;
}

export enum CEState {
  DISABLED = "DISABLED",
  ENABLED = "ENABLED",
}

export enum CEType {
  MANAGED = "MANAGED",
  UNMANAGED = "UNMANAGED",
}

/**
 * <p>Contains the parameters for <code>CreateComputeEnvironment</code>.</p>
 */
export interface CreateComputeEnvironmentRequest {
  /**
   * <p>The name for your compute environment. It can be up to 128 characters long. It can contain uppercase and
   *  lowercase letters, numbers, hyphens (-), and underscores (_).</p>
   */
  computeEnvironmentName: string | undefined;

  /**
   * <p>The type of the compute environment: <code>MANAGED</code> or <code>UNMANAGED</code>. For more information, see
   *     <a href="https://docs.aws.amazon.com/batch/latest/userguide/compute_environments.html">Compute Environments</a> in the
   *     <i>Batch User Guide</i>.</p>
   */
  type: CEType | string | undefined;

  /**
   * <p>The state of the compute environment. If the state is <code>ENABLED</code>, then the compute environment accepts
   *    jobs from a queue and can scale out automatically based on queues.</p>
   *          <p>If the state is <code>ENABLED</code>, then the Batch scheduler can attempt to place jobs from an associated
   *    job queue on the compute resources within the environment. If the compute environment is managed, then it can scale
   *    its instances out or in automatically, based on the job queue demand.</p>
   *          <p>If the state is <code>DISABLED</code>, then the Batch scheduler doesn't attempt to place jobs within the
   *    environment. Jobs in a <code>STARTING</code> or <code>RUNNING</code> state continue to progress normally. Managed
   *    compute environments in the <code>DISABLED</code> state don't scale out. However, they scale in to
   *     <code>minvCpus</code> value after instances become idle.</p>
   */
  state?: CEState | string;

  /**
   * <p>The maximum number of vCPUs for an unmanaged compute environment. This parameter is only used for fair share
   *    scheduling to reserve vCPU capacity for new share identifiers. If this parameter isn't provided for a fair share job
   *    queue, no vCPU capacity is reserved.</p>
   *          <note>
   *             <p>This parameter is only supported when the <code>type</code> parameter is set to <code>UNMANAGED</code>.</p>
   *          </note>
   */
  unmanagedvCpus?: number;

  /**
   * <p>Details about the compute resources managed by the compute environment. This parameter is required for managed
   *    compute environments. For more information, see <a href="https://docs.aws.amazon.com/batch/latest/userguide/compute_environments.html">Compute Environments</a> in the <i>Batch User Guide</i>.</p>
   */
  computeResources?: ComputeResource;

  /**
   * <p>The full Amazon Resource Name (ARN) of the IAM role that allows Batch to make calls to other Amazon Web Services services on your behalf. For
   *    more information, see <a href="https://docs.aws.amazon.com/batch/latest/userguide/service_IAM_role.html">Batch service IAM
   *     role</a> in the <i>Batch User Guide</i>.</p>
   *          <important>
   *             <p>If your account already created the Batch service-linked role, that role is used by default for your compute
   *     environment unless you specify a different role here. If the Batch service-linked role doesn't exist in your
   *     account, and no role is specified here, the service attempts to create the Batch service-linked role in your
   *     account.</p>
   *          </important>
   *          <p>If your specified role has a path other than <code>/</code>, then you must specify either the full role ARN
   *    (recommended) or prefix the role name with the path. For example, if a role with the name <code>bar</code> has a path
   *    of <code>/foo/</code>, specify <code>/foo/bar</code> as the role name. For more information, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_identifiers.html#identifiers-friendly-names">Friendly names
   *    and paths</a> in the <i>IAM User Guide</i>.</p>
   *          <note>
   *             <p>Depending on how you created your Batch service role, its ARN might contain the <code>service-role</code>
   *     path prefix. When you only specify the name of the service role, Batch assumes that your ARN doesn't use the
   *      <code>service-role</code> path prefix. Because of this, we recommend that you specify the full ARN of your service
   *     role when you create compute environments.</p>
   *          </note>
   */
  serviceRole?: string;

  /**
   * <p>The tags that you apply to the compute environment to help you categorize and organize your resources. Each tag
   *    consists of a key and an optional value. For more information, see <a href="https://docs.aws.amazon.com/general/latest/gr/aws_tagging.html">Tagging Amazon Web Services Resources</a> in <i>Amazon Web Services General
   *     Reference</i>.</p>
   *          <p>These tags can be updated or removed using the <a href="https://docs.aws.amazon.com/batch/latest/APIReference/API_TagResource.html">TagResource</a> and <a href="https://docs.aws.amazon.com/batch/latest/APIReference/API_UntagResource.html">UntagResource</a> API operations. These tags don't
   *    propagate to the underlying compute resources.</p>
   */
  tags?: Record<string, string>;

  /**
   * <p>The details for the Amazon EKS cluster that supports the compute environment.</p>
   */
  eksConfiguration?: EksConfiguration;
}

export interface CreateComputeEnvironmentResponse {
  /**
   * <p>The name of the compute environment. It can be up to 128 characters long. It can contain uppercase and
   *  lowercase letters, numbers, hyphens (-), and underscores (_).</p>
   */
  computeEnvironmentName?: string;

  /**
   * <p>The Amazon Resource Name (ARN) of the compute environment.</p>
   */
  computeEnvironmentArn?: string;
}

/**
 * <p>The order that compute environments are tried in for job placement within a queue. Compute environments are
 *    tried in ascending order. For example, if two compute environments are associated with a job queue, the compute
 *    environment with a lower order integer value is tried for job placement first. Compute environments must be in the
 *    <code>VALID</code> state before you can associate them with a job queue. All of the compute environments must be
 *    either EC2 (<code>EC2</code> or <code>SPOT</code>) or Fargate (<code>FARGATE</code> or <code>FARGATE_SPOT</code>);
 *    EC2 and Fargate compute environments can't be mixed.</p>
 *          <note>
 *             <p>All compute environments that are associated with a job queue must share the same architecture. Batch doesn't
 *     support mixing compute environment architecture types in a single job queue.</p>
 *          </note>
 */
export interface ComputeEnvironmentOrder {
  /**
   * <p>The order of the compute environment. Compute environments are tried in ascending order. For example, if two
   *    compute environments are associated with a job queue, the compute environment with a lower <code>order</code> integer
   *    value is tried for job placement first.</p>
   */
  order: number | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the compute environment.</p>
   */
  computeEnvironment: string | undefined;
}

export enum JQState {
  DISABLED = "DISABLED",
  ENABLED = "ENABLED",
}

/**
 * <p>Contains the parameters for <code>CreateJobQueue</code>.</p>
 */
export interface CreateJobQueueRequest {
  /**
   * <p>The name of the job queue. It can be up to 128 letters long. It can contain uppercase and lowercase letters,
   *    numbers, hyphens (-), and underscores (_).</p>
   */
  jobQueueName: string | undefined;

  /**
   * <p>The state of the job queue. If the job queue state is <code>ENABLED</code>, it is able to accept jobs. If the
   *    job queue state is <code>DISABLED</code>, new jobs can't be added to the queue, but jobs already in the queue can
   *    finish.</p>
   */
  state?: JQState | string;

  /**
   * <p>The Amazon Resource Name (ARN) of the fair share scheduling policy. If this parameter is specified, the job queue uses a fair
   *    share scheduling policy. If this parameter isn't specified, the job queue uses a first in, first out (FIFO)
   *    scheduling policy. After a job queue is created, you can replace but can't remove the fair share scheduling policy.
   *    The format is
   *      <code>aws:<i>Partition</i>:batch:<i>Region</i>:<i>Account</i>:scheduling-policy/<i>Name</i>
   *             </code>.
   *    An example is
   *    <code>aws:aws:batch:us-west-2:123456789012:scheduling-policy/MySchedulingPolicy</code>.</p>
   */
  schedulingPolicyArn?: string;

  /**
   * <p>The priority of the job queue. Job queues with a higher priority (or a higher integer value for the
   *     <code>priority</code> parameter) are evaluated first when associated with the same compute environment. Priority is
   *    determined in descending order. For example, a job queue with a priority value of <code>10</code> is given scheduling
   *    preference over a job queue with a priority value of <code>1</code>. All of the compute environments must be either
   *    EC2 (<code>EC2</code> or <code>SPOT</code>) or Fargate (<code>FARGATE</code> or <code>FARGATE_SPOT</code>); EC2 and
   *    Fargate compute environments can't be mixed.</p>
   */
  priority: number | undefined;

  /**
   * <p>The set of compute environments mapped to a job queue and their order relative to each other. The job scheduler
   *    uses this parameter to determine which compute environment runs a specific job. Compute environments must be in
   *    the <code>VALID</code> state before you can associate them with a job queue. You can associate up to three compute
   *    environments with a job queue. All of the compute environments must be either EC2 (<code>EC2</code> or
   *     <code>SPOT</code>) or Fargate (<code>FARGATE</code> or <code>FARGATE_SPOT</code>); EC2 and Fargate compute
   *    environments can't be mixed.</p>
   *          <note>
   *             <p>All compute environments that are associated with a job queue must share the same architecture. Batch doesn't
   *     support mixing compute environment architecture types in a single job queue.</p>
   *          </note>
   */
  computeEnvironmentOrder: ComputeEnvironmentOrder[] | undefined;

  /**
   * <p>The tags that you apply to the job queue to help you categorize and organize your resources. Each tag consists
   *    of a key and an optional value. For more information, see <a href="https://docs.aws.amazon.com/batch/latest/userguide/using-tags.html">Tagging your Batch resources</a> in <i>Batch User Guide</i>.</p>
   */
  tags?: Record<string, string>;
}

export interface CreateJobQueueResponse {
  /**
   * <p>The name of the job queue.</p>
   */
  jobQueueName: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the job queue.</p>
   */
  jobQueueArn: string | undefined;
}

/**
 * <p>Specifies the weights for the fair share identifiers for the fair share policy. Fair share identifiers that
 *    aren't included have a default weight of <code>1.0</code>.</p>
 */
export interface ShareAttributes {
  /**
   * <p>A fair share identifier or fair share identifier prefix. If the string ends with an asterisk (*), this entry
   *    specifies the weight factor to use for fair share identifiers that start with that prefix. The list of fair share
   *    identifiers in a fair share policy can't overlap. For example, you can't have one that specifies a
   *    <code>shareIdentifier</code> of <code>UserA*</code> and another that specifies a <code>shareIdentifier</code> of
   *    <code>UserA-1</code>.</p>
   *          <p>There can be no more than 500 fair share identifiers active in a job queue.</p>
   *          <p>The string is limited to 255 alphanumeric characters, and can be followed by an asterisk (*).</p>
   */
  shareIdentifier: string | undefined;

  /**
   * <p>The weight factor for the fair share identifier. The default value is 1.0. A lower value has a higher priority
   *    for compute resources. For example, jobs that use a share identifier with a weight factor of 0.125 (1/8) get 8 times
   *    the compute resources of jobs that use a share identifier with a weight factor of 1.</p>
   *          <p>The smallest supported value is 0.0001, and the largest supported value is 999.9999.</p>
   */
  weightFactor?: number;
}

/**
 * <p>The fair share policy for a scheduling policy.</p>
 */
export interface FairsharePolicy {
  /**
   * <p>The amount of time (in seconds) to use to calculate a fair share percentage for each fair share identifier in
   *    use. A value of zero (0) indicates that only current usage is measured. The decay allows for more recently run jobs
   *    to have more weight than jobs that ran earlier. The maximum supported value is 604800 (1 week).</p>
   */
  shareDecaySeconds?: number;

  /**
   * <p>A value used to reserve some of the available maximum vCPU for fair share identifiers that aren't already
   *    used.</p>
   *          <p>The reserved ratio is
   *    <code>(<i>computeReservation</i>/100)^<i>ActiveFairShares</i>
   *             </code> where
   *    <code>
   *                <i>ActiveFairShares</i>
   *             </code> is the number of active fair share identifiers.</p>
   *          <p>For example, a <code>computeReservation</code> value of 50 indicates that Batchreserves 50% of the maximum
   *    available vCPU if there's only one fair share identifier. It reserves 25% if there are two fair share identifiers. It
   *    reserves 12.5% if there are three fair share identifiers. A <code>computeReservation</code> value of 25 indicates
   *    that Batch should reserve 25% of the maximum available vCPU if there's only one fair share identifier, 6.25% if
   *    there are two fair share identifiers, and 1.56% if there are three fair share identifiers.</p>
   *          <p>The minimum value is 0 and the maximum value is 99.</p>
   */
  computeReservation?: number;

  /**
   * <p>An array of <code>SharedIdentifier</code> objects that contain the weights for the fair share identifiers for
   *    the fair share policy. Fair share identifiers that aren't included have a default weight of <code>1.0</code>.</p>
   */
  shareDistribution?: ShareAttributes[];
}

/**
 * <p>Contains the parameters for <code>CreateSchedulingPolicy</code>.</p>
 */
export interface CreateSchedulingPolicyRequest {
  /**
   * <p>The name of the scheduling policy. It can be up to 128 letters long. It can contain uppercase and lowercase
   *    letters, numbers, hyphens (-), and underscores (_).</p>
   */
  name: string | undefined;

  /**
   * <p>The fair share policy of the scheduling policy.</p>
   */
  fairsharePolicy?: FairsharePolicy;

  /**
   * <p>The tags that you apply to the scheduling policy to help you categorize and organize your resources. Each tag
   *    consists of a key and an optional value. For more information, see <a href="https://docs.aws.amazon.com/general/latest/gr/aws_tagging.html">Tagging Amazon Web Services Resources</a> in <i>Amazon Web Services General
   *     Reference</i>.</p>
   *          <p>These tags can be updated or removed using the <a href="https://docs.aws.amazon.com/batch/latest/APIReference/API_TagResource.html">TagResource</a> and <a href="https://docs.aws.amazon.com/batch/latest/APIReference/API_UntagResource.html">UntagResource</a> API operations.</p>
   */
  tags?: Record<string, string>;
}

export interface CreateSchedulingPolicyResponse {
  /**
   * <p>The name of the scheduling policy.</p>
   */
  name: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the scheduling policy. The format is
   *      <code>aws:<i>Partition</i>:batch:<i>Region</i>:<i>Account</i>:scheduling-policy/<i>Name</i>
   *             </code>.
   *    For example,
   *    <code>aws:aws:batch:us-west-2:123456789012:scheduling-policy/MySchedulingPolicy</code>.</p>
   */
  arn: string | undefined;
}

/**
 * <p>Contains the parameters for <code>DeleteComputeEnvironment</code>.</p>
 */
export interface DeleteComputeEnvironmentRequest {
  /**
   * <p>The name or Amazon Resource Name (ARN) of the compute environment to delete.</p>
   */
  computeEnvironment: string | undefined;
}

export interface DeleteComputeEnvironmentResponse {}

/**
 * <p>Contains the parameters for <code>DeleteJobQueue</code>.</p>
 */
export interface DeleteJobQueueRequest {
  /**
   * <p>The short name or full Amazon Resource Name (ARN) of the queue to delete.</p>
   */
  jobQueue: string | undefined;
}

export interface DeleteJobQueueResponse {}

/**
 * <p>Contains the parameters for <code>DeleteSchedulingPolicy</code>.</p>
 */
export interface DeleteSchedulingPolicyRequest {
  /**
   * <p>The Amazon Resource Name (ARN) of the scheduling policy to delete.</p>
   */
  arn: string | undefined;
}

export interface DeleteSchedulingPolicyResponse {}

export interface DeregisterJobDefinitionRequest {
  /**
   * <p>The name and revision (<code>name:revision</code>) or full Amazon Resource Name (ARN) of the job definition to deregister.</p>
   */
  jobDefinition: string | undefined;
}

export interface DeregisterJobDefinitionResponse {}

/**
 * <p>Contains the parameters for <code>DescribeComputeEnvironments</code>.</p>
 */
export interface DescribeComputeEnvironmentsRequest {
  /**
   * <p>A list of up to 100 compute environment names or full Amazon Resource Name (ARN) entries.</p>
   */
  computeEnvironments?: string[];

  /**
   * <p>The maximum number of cluster results returned by <code>DescribeComputeEnvironments</code> in paginated output.
   *    When this parameter is used, <code>DescribeComputeEnvironments</code> only returns <code>maxResults</code> results in
   *    a single page along with a <code>nextToken</code> response element. The remaining results of the initial request can
   *    be seen by sending another <code>DescribeComputeEnvironments</code> request with the returned <code>nextToken</code>
   *    value. This value can be between 1 and 100. If this parameter isn't used, then
   *     <code>DescribeComputeEnvironments</code> returns up to 100 results and a <code>nextToken</code>
   *    value if applicable.</p>
   */
  maxResults?: number;

  /**
   * <p>The <code>nextToken</code> value returned from a previous paginated <code>DescribeComputeEnvironments</code>
   *    request where <code>maxResults</code> was used and the results exceeded the value of that parameter. Pagination
   *    continues from the end of the previous results that returned the <code>nextToken</code> value. This value is
   *     <code>null</code> when there are no more results to return.</p>
   *          <note>
   *             <p>Treat this token as an opaque identifier that's only used to
   *  retrieve the next items in a list and not for other programmatic purposes.</p>
   *          </note>
   */
  nextToken?: string;
}

export enum OrchestrationType {
  ECS = "ECS",
  EKS = "EKS",
}

export enum CEStatus {
  CREATING = "CREATING",
  DELETED = "DELETED",
  DELETING = "DELETING",
  INVALID = "INVALID",
  UPDATING = "UPDATING",
  VALID = "VALID",
}

/**
 * <p>Specifies the infrastructure update policy for the compute environment. For more information about
 *    infrastructure updates, see <a href="https://docs.aws.amazon.com/batch/latest/userguide/updating-compute-environments.html">Updating
 *     compute environments</a> in the <i>Batch User Guide</i>.</p>
 */
export interface UpdatePolicy {
  /**
   * <p>Specifies whether jobs are automatically terminated when the computer environment infrastructure is updated. The
   *    default value is <code>false</code>.</p>
   */
  terminateJobsOnUpdate?: boolean;

  /**
   * <p>Specifies the job timeout (in minutes) when the compute environment infrastructure is updated. The default value
   *    is 30.</p>
   */
  jobExecutionTimeoutMinutes?: number;
}

/**
 * <p>An object that represents an Batch compute environment.</p>
 */
export interface ComputeEnvironmentDetail {
  /**
   * <p>The name of the compute environment. It can be up to 128 characters long. It can contain uppercase and
   *  lowercase letters, numbers, hyphens (-), and underscores (_).</p>
   */
  computeEnvironmentName: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the compute environment.</p>
   */
  computeEnvironmentArn: string | undefined;

  /**
   * <p>The maximum number of VCPUs expected to be used for an unmanaged compute environment.</p>
   */
  unmanagedvCpus?: number;

  /**
   * <p>The Amazon Resource Name (ARN) of the underlying Amazon ECS cluster that the compute environment uses.</p>
   */
  ecsClusterArn?: string;

  /**
   * <p>The tags applied to the compute environment.</p>
   */
  tags?: Record<string, string>;

  /**
   * <p>The type of the compute environment: <code>MANAGED</code> or <code>UNMANAGED</code>. For more information, see
   *    <a href="https://docs.aws.amazon.com/batch/latest/userguide/compute_environments.html">Compute environments</a> in the
   *    <i>Batch User Guide</i>.</p>
   */
  type?: CEType | string;

  /**
   * <p>The state of the compute environment. The valid values are <code>ENABLED</code> or <code>DISABLED</code>.</p>
   *          <p>If the state is <code>ENABLED</code>, then the Batch scheduler can attempt to place jobs from an associated
   *    job queue on the compute resources within the environment. If the compute environment is managed, then it can scale
   *    its instances out or in automatically based on the job queue demand.</p>
   *          <p>If the state is <code>DISABLED</code>, then the Batch scheduler doesn't attempt to place jobs within the
   *    environment. Jobs in a <code>STARTING</code> or <code>RUNNING</code> state continue to progress normally. Managed
   *    compute environments in the <code>DISABLED</code> state don't scale out. However, they scale in to
   *    <code>minvCpus</code> value after instances become idle.</p>
   */
  state?: CEState | string;

  /**
   * <p>The current status of the compute environment (for example, <code>CREATING</code> or <code>VALID</code>).</p>
   */
  status?: CEStatus | string;

  /**
   * <p>A short, human-readable string to provide additional details for the current status of the compute
   *    environment.</p>
   */
  statusReason?: string;

  /**
   * <p>The compute resources defined for the compute environment. For more information, see <a href="https://docs.aws.amazon.com/batch/latest/userguide/compute_environments.html">Compute environments</a> in the
   *    <i>Batch User Guide</i>.</p>
   */
  computeResources?: ComputeResource;

  /**
   * <p>The service role that's associated with the compute environment that allows Batch to make calls to Amazon Web Services API
   *    operations on your behalf. For more information, see <a href="https://docs.aws.amazon.com/batch/latest/userguide/service_IAM_role.html">Batch service IAM role</a> in the
   *    <i>Batch User Guide</i>.</p>
   */
  serviceRole?: string;

  /**
   * <p>Specifies the infrastructure update policy for the compute environment. For more information about
   *    infrastructure updates, see <a href="https://docs.aws.amazon.com/batch/latest/userguide/updating-compute-environments.html">Updating
   *    compute environments</a> in the <i>Batch User Guide</i>.</p>
   */
  updatePolicy?: UpdatePolicy;

  /**
   * <p>The configuration for the Amazon EKS cluster that supports the Batch compute environment. Only specify this
   *    parameter if the <code>containerOrchestrationType</code> is <code>EKS</code>.</p>
   */
  eksConfiguration?: EksConfiguration;

  /**
   * <p>The orchestration type of the compute environment. The valid values are <code>ECS</code> (default) or
   *    <code>EKS</code>.</p>
   */
  containerOrchestrationType?: OrchestrationType | string;

  /**
   * <p>Unique identifier for the compute environment.</p>
   */
  uuid?: string;
}

export interface DescribeComputeEnvironmentsResponse {
  /**
   * <p>The list of compute environments.</p>
   */
  computeEnvironments?: ComputeEnvironmentDetail[];

  /**
   * <p>The <code>nextToken</code> value to include in a future <code>DescribeComputeEnvironments</code> request. When
   *    the results of a <code>DescribeComputeEnvironments</code> request exceed <code>maxResults</code>, this value can be
   *    used to retrieve the next page of results. This value is <code>null</code> when there are no more results to
   *    return.</p>
   */
  nextToken?: string;
}

/**
 * <p>Contains the parameters for <code>DescribeJobDefinitions</code>.</p>
 */
export interface DescribeJobDefinitionsRequest {
  /**
   * <p>A list of up to 100 job definitions. Each entry in the list can either be an ARN in the format
   *     <code>arn:aws:batch:${Region}:${Account}:job-definition/${JobDefinitionName}:${Revision}</code> or a short version
   *    using the form <code>${JobDefinitionName}:${Revision}</code>.</p>
   */
  jobDefinitions?: string[];

  /**
   * <p>The maximum number of results returned by <code>DescribeJobDefinitions</code> in paginated output. When this
   *    parameter is used, <code>DescribeJobDefinitions</code> only returns <code>maxResults</code> results in a single page
   *    and a <code>nextToken</code> response element. The remaining results of the initial request can be seen by sending
   *    another <code>DescribeJobDefinitions</code> request with the returned <code>nextToken</code> value. This value can be
   *    between 1 and 100. If this parameter isn't used, then
   *     <code>DescribeJobDefinitions</code> returns up to 100 results and a <code>nextToken</code> value
   *    if applicable.</p>
   */
  maxResults?: number;

  /**
   * <p>The name of the job definition to describe.</p>
   */
  jobDefinitionName?: string;

  /**
   * <p>The status used to filter job definitions.</p>
   */
  status?: string;

  /**
   * <p>The <code>nextToken</code> value returned from a previous paginated <code>DescribeJobDefinitions</code> request
   *    where <code>maxResults</code> was used and the results exceeded the value of that parameter. Pagination continues
   *    from the end of the previous results that returned the <code>nextToken</code> value. This value is <code>null</code>
   *    when there are no more results to return.</p>
   *          <note>
   *             <p>Treat this token as an opaque identifier that's only used to
   *  retrieve the next items in a list and not for other programmatic purposes.</p>
   *          </note>
   */
  nextToken?: string;
}

/**
 * <p>A key-value pair object.</p>
 */
export interface KeyValuePair {
  /**
   * <p>The name of the key-value pair. For environment variables, this is the name of the environment variable.</p>
   */
  name?: string;

  /**
   * <p>The value of the key-value pair. For environment variables, this is the value of the environment
   *    variable.</p>
   */
  value?: string;
}

/**
 * <p>The platform configuration for jobs that are running on Fargate resources. Jobs that run on EC2 resources must
 *    not specify this parameter.</p>
 */
export interface FargatePlatformConfiguration {
  /**
   * <p>The Fargate platform version where the jobs are running. A platform version is specified only for jobs
   *    that are running on Fargate resources. If one isn't specified, the <code>LATEST</code> platform version is used by
   *    default. This uses a recent, approved version of the Fargate platform for compute resources. For more
   *    information, see <a href="https://docs.aws.amazon.com/AmazonECS/latest/developerguide/platform_versions.html">Fargate platform versions</a> in the <i>Amazon Elastic Container Service Developer Guide</i>.</p>
   */
  platformVersion?: string;
}

export enum DeviceCgroupPermission {
  MKNOD = "MKNOD",
  READ = "READ",
  WRITE = "WRITE",
}

/**
 * <p>An object that represents a container instance host device.</p>
 *          <note>
 *             <p>This object isn't applicable to jobs that are running on Fargate resources and shouldn't be provided.</p>
 *          </note>
 */
export interface Device {
  /**
   * <p>The path for the device on the host container instance.</p>
   */
  hostPath: string | undefined;

  /**
   * <p>The path inside the container that's used to expose the host device. By default, the <code>hostPath</code> value
   *    is used.</p>
   */
  containerPath?: string;

  /**
   * <p>The explicit permissions to provide to the container for the device. By default, the container has permissions
   *    for <code>read</code>, <code>write</code>, and <code>mknod</code> for the device.</p>
   */
  permissions?: (DeviceCgroupPermission | string)[];
}

/**
 * <p>The container path, mount options, and size of the <code>tmpfs</code> mount.</p>
 *          <note>
 *             <p>This object isn't applicable to jobs that are running on Fargate resources.</p>
 *          </note>
 */
export interface Tmpfs {
  /**
   * <p>The absolute file path in the container where the <code>tmpfs</code> volume is mounted.</p>
   */
  containerPath: string | undefined;

  /**
   * <p>The size (in MiB) of the <code>tmpfs</code> volume.</p>
   */
  size: number | undefined;

  /**
   * <p>The list of <code>tmpfs</code> volume mount options.</p>
   *          <p>Valid values: "<code>defaults</code>" | "<code>ro</code>" | "<code>rw</code>" | "<code>suid</code>" |
   *    "<code>nosuid</code>" | "<code>dev</code>" | "<code>nodev</code>" | "<code>exec</code>" | "<code>noexec</code>" |
   *    "<code>sync</code>" | "<code>async</code>" | "<code>dirsync</code>" | "<code>remount</code>" | "<code>mand</code>" |
   *    "<code>nomand</code>" | "<code>atime</code>" | "<code>noatime</code>" | "<code>diratime</code>" |
   *    "<code>nodiratime</code>" | "<code>bind</code>" | "<code>rbind" | "unbindable" | "runbindable" | "private" |
   *    "rprivate" | "shared" | "rshared" | "slave" | "rslave" | "relatime</code>" | "<code>norelatime</code>" |
   *    "<code>strictatime</code>" | "<code>nostrictatime</code>" | "<code>mode</code>" | "<code>uid</code>" |
   *    "<code>gid</code>" | "<code>nr_inodes</code>" | "<code>nr_blocks</code>" | "<code>mpol</code>"</p>
   */
  mountOptions?: string[];
}

/**
 * <p>Linux-specific modifications that are applied to the container, such as details for device mappings.</p>
 */
export interface LinuxParameters {
  /**
   * <p>Any of the host devices to expose to the container. This parameter maps to <code>Devices</code> in the
   *    <a href="https://docs.docker.com/engine/api/v1.23/#create-a-container">Create a container</a> section of the <a href="https://docs.docker.com/engine/api/v1.23/">Docker Remote API</a> and the <code>--device</code> option to <a href="https://docs.docker.com/engine/reference/run/">docker run</a>.</p>
   *          <note>
   *             <p>This parameter isn't applicable to jobs that are running on Fargate resources. Don't provide it for these
   *     jobs.</p>
   *          </note>
   */
  devices?: Device[];

  /**
   * <p>If true, run an <code>init</code> process inside the container that forwards signals and reaps processes. This
   *    parameter maps to the <code>--init</code> option to <a href="https://docs.docker.com/engine/reference/run/">docker run</a>.
   *    This parameter requires version 1.25 of the Docker Remote API or greater on your
   *  container instance. To check the Docker Remote API version on your container instance, log in to your
   *  container instance and run the following command: <code>sudo docker version | grep "Server API version"</code>
   *          </p>
   */
  initProcessEnabled?: boolean;

  /**
   * <p>The value for the size (in MiB) of the <code>/dev/shm</code> volume. This parameter maps to the
   *    <code>--shm-size</code> option to <a href="https://docs.docker.com/engine/reference/run/">docker run</a>.</p>
   *          <note>
   *             <p>This parameter isn't applicable to jobs that are running on Fargate resources. Don't provide it for these
   *     jobs.</p>
   *          </note>
   */
  sharedMemorySize?: number;

  /**
   * <p>The container path, mount options, and size (in MiB) of the <code>tmpfs</code> mount. This parameter maps to the
   *    <code>--tmpfs</code> option to <a href="https://docs.docker.com/engine/reference/run/">docker run</a>.</p>
   *          <note>
   *             <p>This parameter isn't applicable to jobs that are running on Fargate resources. Don't provide this parameter
   *     for this resource type.</p>
   *          </note>
   */
  tmpfs?: Tmpfs[];

  /**
   * <p>The total amount of swap memory (in MiB) a container can use. This parameter is translated to the
   *    <code>--memory-swap</code> option to <a href="https://docs.docker.com/engine/reference/run/">docker run</a> where the value is the
   *    sum of the container memory plus the <code>maxSwap</code> value. For more information, see <a href="https://docs.docker.com/config/containers/resource_constraints/#--memory-swap-details">
   *                <code>--memory-swap</code> details</a> in the Docker documentation.</p>
   *          <p>If a <code>maxSwap</code> value of <code>0</code> is specified, the container doesn't use swap. Accepted values
   *    are <code>0</code> or any positive integer. If the <code>maxSwap</code> parameter is omitted, the container doesn't
   *    use the swap configuration for the container instance that it's running on. A <code>maxSwap</code> value must be set
   *    for the <code>swappiness</code> parameter to be used.</p>
   *          <note>
   *             <p>This parameter isn't applicable to jobs that are running on Fargate resources. Don't provide it for these
   *     jobs.</p>
   *          </note>
   */
  maxSwap?: number;

  /**
   * <p>You can use this parameter to tune a container's memory swappiness behavior. A <code>swappiness</code> value of
   *    <code>0</code> causes swapping to not occur unless absolutely necessary. A <code>swappiness</code> value of
   *    <code>100</code> causes pages to be swapped aggressively. Valid values are whole numbers between <code>0</code> and
   *    <code>100</code>. If the <code>swappiness</code> parameter isn't specified, a default value of <code>60</code> is
   *    used. If a value isn't specified for <code>maxSwap</code>, then this parameter is ignored. If <code>maxSwap</code> is
   *    set to 0, the container doesn't use swap. This parameter maps to the <code>--memory-swappiness</code> option to
   *    <a href="https://docs.docker.com/engine/reference/run/">docker run</a>.</p>
   *          <p>Consider the following when you use a per-container swap configuration.</p>
   *          <ul>
   *             <li>
   *                <p>Swap space must be enabled and allocated on the container instance for the containers to use.</p>
   *                <note>
   *                   <p>By default, the Amazon ECS optimized AMIs don't have swap enabled. You must enable swap on the instance to use
   *       this feature. For more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/instance-store-swap-volumes.html">Instance store swap volumes</a> in the
   *       <i>Amazon EC2 User Guide for Linux Instances</i> or <a href="http://aws.amazon.com/premiumsupport/knowledge-center/ec2-memory-swap-file/">How do I allocate memory to work as swap space in an
   *       Amazon EC2 instance by using a swap file?</a>
   *                   </p>
   *                </note>
   *             </li>
   *             <li>
   *                <p>The swap space parameters are only supported for job definitions using EC2 resources.</p>
   *             </li>
   *             <li>
   *                <p>If the <code>maxSwap</code> and <code>swappiness</code> parameters are omitted from a job definition, each
   *      container has a default <code>swappiness</code> value of 60. Moreover, the total swap usage is limited to two times
   *      the memory reservation of the container.</p>
   *             </li>
   *          </ul>
   *          <note>
   *             <p>This parameter isn't applicable to jobs that are running on Fargate resources. Don't provide it for these
   *     jobs.</p>
   *          </note>
   */
  swappiness?: number;
}

export enum LogDriver {
  AWSLOGS = "awslogs",
  FLUENTD = "fluentd",
  GELF = "gelf",
  JOURNALD = "journald",
  JSON_FILE = "json-file",
  SPLUNK = "splunk",
  SYSLOG = "syslog",
}

/**
 * <p>An object that represents the secret to expose to your container. Secrets can be exposed to a container in the
 *    following ways:</p>
 *          <ul>
 *             <li>
 *                <p>To inject sensitive data into your containers as environment variables, use the <code>secrets</code> container
 *      definition parameter.</p>
 *             </li>
 *             <li>
 *                <p>To reference sensitive information in the log configuration of a container, use the <code>secretOptions</code>
 *      container definition parameter.</p>
 *             </li>
 *          </ul>
 *          <p>For more information, see <a href="https://docs.aws.amazon.com/batch/latest/userguide/specifying-sensitive-data.html">Specifying
 *    sensitive data</a> in the <i>Batch User Guide</i>.</p>
 */
export interface Secret {
  /**
   * <p>The name of the secret.</p>
   */
  name: string | undefined;

  /**
   * <p>The secret to expose to the container. The supported values are either the full Amazon Resource Name (ARN) of the Secrets Manager secret or
   *    the full ARN of the parameter in the Amazon Web Services Systems Manager Parameter Store.</p>
   *          <note>
   *             <p>If the Amazon Web Services Systems Manager Parameter Store parameter exists in the same Region as the job you're launching, then you can use
   *     either the full Amazon Resource Name (ARN) or name of the parameter. If the parameter exists in a different Region, then the full ARN
   *     must be specified.</p>
   *          </note>
   */
  valueFrom: string | undefined;
}

/**
 * <p>Log configuration options to send to a custom log driver for the container.</p>
 */
export interface LogConfiguration {
  /**
   * <p>The log driver to use for the container. The valid values that are listed for this parameter are log drivers
   *    that the Amazon ECS container agent can communicate with by default.</p>
   *          <p>The supported log drivers are <code>awslogs</code>, <code>fluentd</code>, <code>gelf</code>,
   *    <code>json-file</code>, <code>journald</code>, <code>logentries</code>, <code>syslog</code>, and
   *    <code>splunk</code>.</p>
   *          <note>
   *             <p>Jobs that are running on Fargate resources are restricted to the <code>awslogs</code> and <code>splunk</code>
   *     log drivers.</p>
   *          </note>
   *          <dl>
   *             <dt>awslogs</dt>
   *             <dd>
   *                <p>Specifies the Amazon CloudWatch Logs logging driver. For more information, see <a href="https://docs.aws.amazon.com/batch/latest/userguide/using_awslogs.html">Using the awslogs log driver</a> in the
   *       <i>Batch User Guide</i> and <a href="https://docs.docker.com/config/containers/logging/awslogs/">Amazon CloudWatch Logs logging driver</a> in the Docker documentation.</p>
   *             </dd>
   *             <dt>fluentd</dt>
   *             <dd>
   *                <p>Specifies the Fluentd logging driver. For more information including usage and options, see <a href="https://docs.docker.com/config/containers/logging/fluentd/">Fluentd logging driver</a> in the
   *       <i>Docker documentation</i>.</p>
   *             </dd>
   *             <dt>gelf</dt>
   *             <dd>
   *                <p>Specifies the Graylog Extended Format (GELF) logging driver. For more information including usage and
   *       options, see <a href="https://docs.docker.com/config/containers/logging/gelf/">Graylog Extended Format logging
   *       driver</a> in the <i>Docker documentation</i>.</p>
   *             </dd>
   *             <dt>journald</dt>
   *             <dd>
   *                <p>Specifies the journald logging driver. For more information including usage and options, see <a href="https://docs.docker.com/config/containers/logging/journald/">Journald logging driver</a> in the
   *       <i>Docker documentation</i>.</p>
   *             </dd>
   *             <dt>json-file</dt>
   *             <dd>
   *                <p>Specifies the JSON file logging driver. For more information including usage and options, see <a href="https://docs.docker.com/config/containers/logging/json-file/">JSON File logging driver</a> in the
   *       <i>Docker documentation</i>.</p>
   *             </dd>
   *             <dt>splunk</dt>
   *             <dd>
   *                <p>Specifies the Splunk logging driver. For more information including usage and options, see <a href="https://docs.docker.com/config/containers/logging/splunk/">Splunk logging driver</a> in the
   *       <i>Docker documentation</i>.</p>
   *             </dd>
   *             <dt>syslog</dt>
   *             <dd>
   *                <p>Specifies the syslog logging driver. For more information including usage and options, see <a href="https://docs.docker.com/config/containers/logging/syslog/">Syslog logging driver</a> in the
   *       <i>Docker documentation</i>.</p>
   *             </dd>
   *          </dl>
   *          <note>
   *             <p>If you have a custom driver that's not listed earlier that you want to work with the Amazon ECS container agent, you
   *     can fork the Amazon ECS container agent project that's <a href="https://github.com/aws/amazon-ecs-agent">available on
   *     GitHub</a> and customize it to work with that driver. We encourage you to submit pull requests for changes that
   *     you want to have included. However, Amazon Web Services doesn't currently support running modified copies of this
   *     software.</p>
   *          </note>
   *          <p>This parameter requires version 1.18 of the Docker Remote API or greater on your
   *  container instance. To check the Docker Remote API version on your container instance, log in to your
   *  container instance and run the following command: <code>sudo docker version | grep "Server API version"</code>
   *          </p>
   */
  logDriver: LogDriver | string | undefined;

  /**
   * <p>The configuration options to send to the log driver. This parameter requires version 1.19 of the Docker Remote API or greater on your
   *  container instance. To check the Docker Remote API version on your container instance, log in to your
   *  container instance and run the following command: <code>sudo docker version | grep "Server API version"</code>
   *          </p>
   */
  options?: Record<string, string>;

  /**
   * <p>The secrets to pass to the log configuration. For more information, see <a href="https://docs.aws.amazon.com/batch/latest/userguide/specifying-sensitive-data.html">Specifying sensitive data</a> in the
   *    <i>Batch User Guide</i>.</p>
   */
  secretOptions?: Secret[];
}

/**
 * <p>Details for a Docker volume mount point that's used in a job's container properties. This parameter maps to
 *    <code>Volumes</code> in the <a href="https://docs.docker.com/engine/reference/api/docker_remote_api_v1.19/#create-a-container">Create a
 *    container</a> section of the <i>Docker Remote API</i> and the <code>--volume</code> option to
 *    docker run.</p>
 */
export interface MountPoint {
  /**
   * <p>The path on the container where the host volume is mounted.</p>
   */
  containerPath?: string;

  /**
   * <p>If this value is <code>true</code>, the container has read-only access to the volume. Otherwise, the container
   *    can write to the volume. The default value is <code>false</code>.</p>
   */
  readOnly?: boolean;

  /**
   * <p>The name of the volume to mount.</p>
   */
  sourceVolume?: string;
}

/**
 * <p>The network configuration for jobs that are running on Fargate resources. Jobs that are running on EC2
 *    resources must not specify this parameter.</p>
 */
export interface NetworkConfiguration {
  /**
   * <p>Indicates whether the job has a public IP address. For a job that's running on Fargate resources in a private
   *    subnet to send outbound traffic to the internet (for example, to pull container images), the private subnet requires
   *    a NAT gateway be attached to route requests to the internet. For more information, see <a href="https://docs.aws.amazon.com/AmazonECS/latest/developerguide/task-networking.html">Amazon ECS task networking</a> in the
   *    <i>Amazon Elastic Container Service Developer Guide</i>. The default value is "<code>DISABLED</code>".</p>
   */
  assignPublicIp?: AssignPublicIp | string;
}

export enum ResourceType {
  GPU = "GPU",
  MEMORY = "MEMORY",
  VCPU = "VCPU",
}

/**
 * <p>The type and amount of a resource to assign to a container. The supported resources include <code>GPU</code>,
 *    <code>MEMORY</code>, and <code>VCPU</code>.</p>
 */
export interface ResourceRequirement {
  /**
   * <p>The quantity of the specified resource to reserve for the container. The values vary based on the
   *    <code>type</code> specified.</p>
   *          <dl>
   *             <dt>type="GPU"</dt>
   *             <dd>
   *                <p>The number of physical GPUs to reserve for the container. Make sure that the number of GPUs reserved for all
   *       containers in a job doesn't exceed the number of available GPUs on the compute resource that the job is launched
   *       on.</p>
   *                <note>
   *                   <p>GPUs aren't available for jobs that are running on Fargate resources.</p>
   *                </note>
   *             </dd>
   *             <dt>type="MEMORY"</dt>
   *             <dd>
   *                <p>The memory hard limit (in MiB) present to the container. This parameter is supported for jobs that are
   *       running on EC2 resources. If your container attempts to exceed the memory specified, the container is terminated.
   *       This parameter maps to <code>Memory</code> in the <a href="https://docs.docker.com/engine/api/v1.23/#create-a-container">Create a container</a> section of the
   *       <a href="https://docs.docker.com/engine/api/v1.23/">Docker Remote API</a> and the <code>--memory</code> option to <a href="https://docs.docker.com/engine/reference/run/">docker run</a>.
   *       You must specify at least 4 MiB of memory for a job. This is required but can be specified in several places for
   *       multi-node parallel (MNP) jobs. It must be specified for each node at least once. This parameter maps to
   *       <code>Memory</code> in the <a href="https://docs.docker.com/engine/api/v1.23/#create-a-container">Create a container</a> section of the <a href="https://docs.docker.com/engine/api/v1.23/">Docker Remote API</a> and the
   *       <code>--memory</code> option to <a href="https://docs.docker.com/engine/reference/run/">docker run</a>.</p>
   *                <note>
   *                   <p>If you're trying to maximize your resource utilization by providing your jobs as much memory as possible for
   *        a particular instance type, see <a href="https://docs.aws.amazon.com/batch/latest/userguide/memory-management.html">Memory
   *        management</a> in the <i>Batch User Guide</i>.</p>
   *                </note>
   *                <p>For jobs that are running on Fargate resources, then <code>value</code> is the hard limit (in MiB), and
   *       must match one of the supported values and the <code>VCPU</code> values must be one of the values supported for
   *       that memory value.</p>
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
   *                         <code>VCPU</code> = 1, 2, 4, or 8</p>
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
   *                <p>The number of vCPUs reserved for the container. This parameter maps to <code>CpuShares</code> in the
   *       <a href="https://docs.docker.com/engine/api/v1.23/#create-a-container">Create a container</a> section of the <a href="https://docs.docker.com/engine/api/v1.23/">Docker Remote API</a> and the <code>--cpu-shares</code> option to
   *       <a href="https://docs.docker.com/engine/reference/run/">docker run</a>. Each vCPU is equivalent to 1,024 CPU shares. For EC2
   *       resources, you must specify at least one vCPU. This is required but can be specified in several places; it must be
   *       specified for each node at least once.</p>
   *                <p>The default for the Fargate On-Demand vCPU resource count quota is 6 vCPUs. For more information about
   *       Fargate quotas, see <a href="https://docs.aws.amazon.com/general/latest/gr/ecs-service.html#service-quotas-fargate">Fargate quotas</a> in the <i>Amazon Web Services General Reference</i>.</p>
   *                <p>For jobs that are running on Fargate resources, then <code>value</code> must match one of the supported
   *       values and the <code>MEMORY</code> values must be one of the values supported for that <code>VCPU</code> value.
   *       The supported values are 0.25, 0.5, 1, 2, 4, 8, and 16</p>
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
   */
  value: string | undefined;

  /**
   * <p>The type of resource to assign to a container. The supported resources include <code>GPU</code>,
   *    <code>MEMORY</code>, and <code>VCPU</code>.</p>
   */
  type: ResourceType | string | undefined;
}

/**
 * <p>The <code>ulimit</code> settings to pass to the container.</p>
 *          <note>
 *             <p>This object isn't applicable to jobs that are running on Fargate resources.</p>
 *          </note>
 */
export interface Ulimit {
  /**
   * <p>The hard limit for the <code>ulimit</code> type.</p>
   */
  hardLimit: number | undefined;

  /**
   * <p>The <code>type</code> of the <code>ulimit</code>.</p>
   */
  name: string | undefined;

  /**
   * <p>The soft limit for the <code>ulimit</code> type.</p>
   */
  softLimit: number | undefined;
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
   * <p>The Amazon EFS access point ID to use. If an access point is specified, the root directory value specified in the
   *    <code>EFSVolumeConfiguration</code> must either be omitted or set to <code>/</code> which enforces the path set on
   *    the EFS access point. If an access point is used, transit encryption must be enabled in the
   *    <code>EFSVolumeConfiguration</code>. For more information, see <a href="https://docs.aws.amazon.com/efs/latest/ug/efs-access-points.html">Working with Amazon EFS access points</a> in the
   *    <i>Amazon Elastic File System User Guide</i>.</p>
   */
  accessPointId?: string;

  /**
   * <p>Whether or not to use the Batch job IAM role defined in a job definition when mounting the Amazon EFS file system.
   *    If enabled, transit encryption must be enabled in the <code>EFSVolumeConfiguration</code>. If this parameter is
   *    omitted, the default value of <code>DISABLED</code> is used. For more information, see <a href="https://docs.aws.amazon.com/batch/latest/userguide/efs-volumes.html#efs-volume-accesspoints">Using Amazon EFS access points</a> in the
   *    <i>Batch User Guide</i>. EFS IAM authorization requires that <code>TransitEncryption</code> be
   *    <code>ENABLED</code> and that a <code>JobRoleArn</code> is specified.</p>
   */
  iam?: EFSAuthorizationConfigIAM | string;
}

export enum EFSTransitEncryption {
  DISABLED = "DISABLED",
  ENABLED = "ENABLED",
}

/**
 * <p>This is used when you're using an Amazon Elastic File System file system for job storage. For more information, see <a href="https://docs.aws.amazon.com/batch/latest/userguide/efs-volumes.html">Amazon EFS Volumes</a> in the
 *    <i>Batch User Guide</i>.</p>
 */
export interface EFSVolumeConfiguration {
  /**
   * <p>The Amazon EFS file system ID to use.</p>
   */
  fileSystemId: string | undefined;

  /**
   * <p>The directory within the Amazon EFS file system to mount as the root directory inside the host. If this parameter is
   *    omitted, the root of the Amazon EFS volume is used instead. Specifying <code>/</code> has the same effect as omitting this
   *    parameter. The maximum length is 4,096 characters.</p>
   *          <important>
   *             <p>If an EFS access point is specified in the <code>authorizationConfig</code>, the root directory parameter must
   *     either be omitted or set to <code>/</code>, which enforces the path set on the Amazon EFS access point.</p>
   *          </important>
   */
  rootDirectory?: string;

  /**
   * <p>Determines whether to enable encryption for Amazon EFS data in transit between the Amazon ECS host and the Amazon EFS server.
   *    Transit encryption must be enabled if Amazon EFS IAM authorization is used. If this parameter is omitted, the default
   *    value of <code>DISABLED</code> is used. For more information, see <a href="https://docs.aws.amazon.com/efs/latest/ug/encryption-in-transit.html">Encrypting data in transit</a> in the
   *    <i>Amazon Elastic File System User Guide</i>.</p>
   */
  transitEncryption?: EFSTransitEncryption | string;

  /**
   * <p>The port to use when sending encrypted data between the Amazon ECS host and the Amazon EFS server. If you don't specify a
   *    transit encryption port, it uses the port selection strategy that the Amazon EFS mount helper uses. The value must be
   *    between 0 and 65,535. For more information, see <a href="https://docs.aws.amazon.com/efs/latest/ug/efs-mount-helper.html">EFS mount helper</a> in the <i>Amazon Elastic File System User Guide</i>.</p>
   */
  transitEncryptionPort?: number;

  /**
   * <p>The authorization configuration details for the Amazon EFS file system.</p>
   */
  authorizationConfig?: EFSAuthorizationConfig;
}

/**
 * <p>Determine whether your data volume persists on the host container instance and where it's stored. If this
 *    parameter is empty, then the Docker daemon assigns a host path for your data volume. However, the data isn't
 *    guaranteed to persist after the containers that are associated with it stop running.</p>
 */
export interface Host {
  /**
   * <p>The path on the host container instance that's presented to the container. If this parameter is empty, then the
   *    Docker daemon has assigned a host path for you. If this parameter contains a file location, then the data volume
   *    persists at the specified location on the host container instance until you delete it manually. If the source path
   *    location doesn't exist on the host container instance, the Docker daemon creates it. If the location does exist, the
   *    contents of the source path folder are exported.</p>
   *          <note>
   *             <p>This parameter isn't applicable to jobs that run on Fargate resources. Don't provide this for these
   *     jobs.</p>
   *          </note>
   */
  sourcePath?: string;
}

/**
 * <p>A data volume that's used in a job's container properties.</p>
 */
export interface Volume {
  /**
   * <p>The contents of the <code>host</code> parameter determine whether your data volume persists on the host
   *    container instance and where it's stored. If the host parameter is empty, then the Docker daemon assigns a host path
   *    for your data volume. However, the data isn't guaranteed to persist after the containers that are associated with it
   *    stop running.</p>
   *          <note>
   *             <p>This parameter isn't applicable to jobs that are running on Fargate resources and shouldn't be
   *     provided.</p>
   *          </note>
   */
  host?: Host;

  /**
   * <p>The name of the volume. It can be up to 255 characters long. It can contain uppercase and lowercase letters,
   *  numbers, hyphens (-), and underscores (_). This name is referenced in the <code>sourceVolume</code>
   *    parameter of container definition <code>mountPoints</code>.</p>
   */
  name?: string;

  /**
   * <p>This parameter is specified when you're using an Amazon Elastic File System file system for job storage. Jobs that are running on
   *    Fargate resources must specify a <code>platformVersion</code> of at least <code>1.4.0</code>.</p>
   */
  efsVolumeConfiguration?: EFSVolumeConfiguration;
}

/**
 * <p>Container properties are used
 *    for
 *    Amazon ECS based job definitions. These properties to describe the container that's launched as part of
 *    a job.</p>
 */
export interface ContainerProperties {
  /**
   * <p>The image used to start a container. This string is passed directly to the Docker daemon. Images in the Docker
   *    Hub registry are available by default. Other repositories are specified with
   *    <code>
   *                <i>repository-url</i>/<i>image</i>:<i>tag</i>
   *             </code>.
   *    It can be 255 characters long. It can contain uppercase and lowercase letters, numbers,
   *  hyphens (-), underscores (_), colons (:), periods (.), forward slashes (/), and number signs (#). This parameter maps to <code>Image</code> in the <a href="https://docs.docker.com/engine/api/v1.23/#create-a-container">Create a container</a> section of
   *    the <a href="https://docs.docker.com/engine/api/v1.23/">Docker Remote API</a> and the <code>IMAGE</code> parameter of <a href="https://docs.docker.com/engine/reference/run/">docker
   *    run</a>.</p>
   *          <note>
   *             <p>Docker image architecture must match the processor architecture of the compute resources that they're scheduled
   *     on. For example, ARM-based Docker images can only run on ARM-based compute resources.</p>
   *          </note>
   *          <ul>
   *             <li>
   *                <p>Images in Amazon ECR Public repositories use the full <code>registry/repository[:tag]</code> or
   *      <code>registry/repository[@digest]</code> naming conventions. For example,
   *      <code>public.ecr.aws/<i>registry_alias</i>/<i>my-web-app</i>:<i>latest</i>
   *                   </code>.</p>
   *             </li>
   *             <li>
   *                <p>Images in Amazon ECR repositories use the full registry and repository URI (for example,
   *      <code>123456789012.dkr.ecr.<region-name>.amazonaws.com/<repository-name></code>).</p>
   *             </li>
   *             <li>
   *                <p>Images in official repositories on Docker Hub use a single name (for example, <code>ubuntu</code> or
   *      <code>mongo</code>).</p>
   *             </li>
   *             <li>
   *                <p>Images in other repositories on Docker Hub are qualified with an organization name (for example,
   *      <code>amazon/amazon-ecs-agent</code>).</p>
   *             </li>
   *             <li>
   *                <p>Images in other online repositories are qualified further by a domain name (for example,
   *      <code>quay.io/assemblyline/ubuntu</code>).</p>
   *             </li>
   *          </ul>
   */
  image?: string;

  /**
   * @deprecated
   *
   * <p>This parameter is deprecated, use <code>resourceRequirements</code> to specify the vCPU requirements for the job
   *    definition. It's not supported for jobs running on Fargate resources. For jobs running on EC2 resources, it specifies
   *    the number of vCPUs reserved for the job.</p>
   *          <p>Each vCPU is equivalent to 1,024 CPU shares. This parameter maps to <code>CpuShares</code> in the
   *    <a href="https://docs.docker.com/engine/api/v1.23/#create-a-container">Create a container</a> section of the <a href="https://docs.docker.com/engine/api/v1.23/">Docker Remote API</a> and the <code>--cpu-shares</code> option to
   *    <a href="https://docs.docker.com/engine/reference/run/">docker run</a>. The number of vCPUs must be specified but can be specified in
   *    several places. You must specify it at least once for each node.</p>
   */
  vcpus?: number;

  /**
   * @deprecated
   *
   * <p>This parameter is deprecated, use <code>resourceRequirements</code> to specify the memory requirements for the
   *    job definition. It's not supported for jobs running on Fargate resources. For jobs that run on EC2 resources, it
   *    specifies the memory hard limit (in MiB) for a container. If your container attempts to exceed the specified number,
   *    it's terminated. You must specify at least 4 MiB of memory for a job using this parameter. The memory hard limit can
   *    be specified in several places. It must be specified for each node at least once.</p>
   */
  memory?: number;

  /**
   * <p>The command that's passed to the container. This parameter maps to <code>Cmd</code> in the
   *    <a href="https://docs.docker.com/engine/api/v1.23/#create-a-container">Create a container</a> section of the <a href="https://docs.docker.com/engine/api/v1.23/">Docker Remote API</a> and the <code>COMMAND</code> parameter to <a href="https://docs.docker.com/engine/reference/run/">docker run</a>. For more information, see <a href="https://docs.docker.com/engine/reference/builder/#cmd">https://docs.docker.com/engine/reference/builder/#cmd</a>.</p>
   */
  command?: string[];

  /**
   * <p>The Amazon Resource Name (ARN) of the IAM role that the container can assume for Amazon Web Services permissions. For more information, see
   *    <a href="https://docs.aws.amazon.com/AmazonECS/latest/developerguide/task-iam-roles.html">IAM roles for tasks</a>
   *    in the <i>Amazon Elastic Container Service Developer Guide</i>.</p>
   */
  jobRoleArn?: string;

  /**
   * <p>The Amazon Resource Name (ARN) of the execution role that Batch can assume. For jobs that run on Fargate resources, you must
   *    provide an execution role. For more information, see <a href="https://docs.aws.amazon.com/batch/latest/userguide/execution-IAM-role.html">Batch execution IAM role</a> in the
   *    <i>Batch User Guide</i>.</p>
   */
  executionRoleArn?: string;

  /**
   * <p>A list of data volumes used in a job.</p>
   */
  volumes?: Volume[];

  /**
   * <p>The environment variables to pass to a container. This parameter maps to <code>Env</code> in the
   *    <a href="https://docs.docker.com/engine/api/v1.23/#create-a-container">Create a container</a> section of the <a href="https://docs.docker.com/engine/api/v1.23/">Docker Remote API</a> and the <code>--env</code> option to <a href="https://docs.docker.com/engine/reference/run/">docker run</a>.</p>
   *          <important>
   *             <p>We don't recommend using plaintext environment variables for sensitive information, such as credential
   *     data.</p>
   *          </important>
   *          <note>
   *             <p>Environment variables cannot start with "<code>AWS_BATCH</code>". This naming
   *  convention is reserved for variables that Batch sets.</p>
   *          </note>
   */
  environment?: KeyValuePair[];

  /**
   * <p>The mount points for data volumes in your container. This parameter maps to <code>Volumes</code> in the
   *    <a href="https://docs.docker.com/engine/api/v1.23/#create-a-container">Create a container</a> section of the <a href="https://docs.docker.com/engine/api/v1.23/">Docker Remote API</a> and the <code>--volume</code> option to <a href="https://docs.docker.com/engine/reference/run/">docker run</a>.</p>
   */
  mountPoints?: MountPoint[];

  /**
   * <p>When this parameter is true, the container is given read-only access to its root file system. This parameter
   *    maps to <code>ReadonlyRootfs</code> in the <a href="https://docs.docker.com/engine/api/v1.23/#create-a-container">Create a container</a> section of the <a href="https://docs.docker.com/engine/api/v1.23/">Docker Remote API</a> and
   *    the <code>--read-only</code> option to <code>docker run</code>.</p>
   */
  readonlyRootFilesystem?: boolean;

  /**
   * <p>When this parameter is true, the container is given elevated permissions on the host container instance (similar
   *    to the <code>root</code> user). This parameter maps to <code>Privileged</code> in the
   *    <a href="https://docs.docker.com/engine/api/v1.23/#create-a-container">Create a container</a> section of the <a href="https://docs.docker.com/engine/api/v1.23/">Docker Remote API</a> and the <code>--privileged</code> option to
   *    <a href="https://docs.docker.com/engine/reference/run/">docker run</a>. The default value is false.</p>
   *          <note>
   *             <p>This parameter isn't applicable to jobs that are running on Fargate resources and shouldn't be provided, or
   *     specified as false.</p>
   *          </note>
   */
  privileged?: boolean;

  /**
   * <p>A list of <code>ulimits</code> to set in the container. This parameter maps to <code>Ulimits</code> in the
   *    <a href="https://docs.docker.com/engine/api/v1.23/#create-a-container">Create a container</a> section of the <a href="https://docs.docker.com/engine/api/v1.23/">Docker Remote API</a> and the <code>--ulimit</code> option to <a href="https://docs.docker.com/engine/reference/run/">docker run</a>.</p>
   *          <note>
   *             <p>This parameter isn't applicable to jobs that are running on Fargate resources and shouldn't be
   *     provided.</p>
   *          </note>
   */
  ulimits?: Ulimit[];

  /**
   * <p>The user name to use inside the container. This parameter maps to <code>User</code> in the
   *    <a href="https://docs.docker.com/engine/api/v1.23/#create-a-container">Create a container</a> section of the <a href="https://docs.docker.com/engine/api/v1.23/">Docker Remote API</a> and the <code>--user</code> option to <a href="https://docs.docker.com/engine/reference/run/">docker run</a>.</p>
   */
  user?: string;

  /**
   * <p>The instance type to use for a multi-node parallel job. All node groups in a multi-node parallel job must use
   *    the same instance type.</p>
   *          <note>
   *             <p>This parameter isn't applicable to single-node container jobs or jobs that run on Fargate resources, and
   *     shouldn't be provided.</p>
   *          </note>
   */
  instanceType?: string;

  /**
   * <p>The type and amount of resources to assign to a container. The supported resources include <code>GPU</code>,
   *    <code>MEMORY</code>, and <code>VCPU</code>.</p>
   */
  resourceRequirements?: ResourceRequirement[];

  /**
   * <p>Linux-specific modifications that are applied to the container, such as details for device mappings.</p>
   */
  linuxParameters?: LinuxParameters;

  /**
   * <p>The log configuration specification for the container.</p>
   *          <p>This parameter maps to <code>LogConfig</code> in the <a href="https://docs.docker.com/engine/api/v1.23/#create-a-container">Create a container</a> section of the
   *    <a href="https://docs.docker.com/engine/api/v1.23/">Docker Remote API</a> and the <code>--log-driver</code> option to <a href="https://docs.docker.com/engine/reference/run/">docker run</a>.
   *    By default, containers use the same logging driver that the Docker daemon uses. However the container might use a
   *    different logging driver than the Docker daemon by specifying a log driver with this parameter in the container
   *    definition. To use a different logging driver for a container, the log system must be configured properly on the
   *    container instance (or on a different log server for remote logging options). For more information on the options for
   *    different supported log drivers, see <a href="https://docs.docker.com/engine/admin/logging/overview/">Configure
   *    logging drivers</a> in the Docker documentation.</p>
   *          <note>
   *             <p>Batch currently supports a subset of the logging drivers available to the Docker daemon (shown in the <a>LogConfiguration</a> data type).</p>
   *          </note>
   *          <p>This parameter requires version 1.18 of the Docker Remote API or greater on your
   *  container instance. To check the Docker Remote API version on your container instance, log in to your
   *  container instance and run the following command: <code>sudo docker version | grep "Server API version"</code>
   *          </p>
   *          <note>
   *             <p>The Amazon ECS container agent running on a container instance must register the logging drivers available on that
   *     instance with the <code>ECS_AVAILABLE_LOGGING_DRIVERS</code> environment variable before containers placed on that
   *     instance can use these log configuration options. For more information, see <a href="https://docs.aws.amazon.com/AmazonECS/latest/developerguide/ecs-agent-config.html">Amazon ECS container agent configuration</a> in the
   *     <i>Amazon Elastic Container Service Developer Guide</i>.</p>
   *          </note>
   */
  logConfiguration?: LogConfiguration;

  /**
   * <p>The secrets for the container. For more information, see <a href="https://docs.aws.amazon.com/batch/latest/userguide/specifying-sensitive-data.html">Specifying sensitive data</a> in the
   *    <i>Batch User Guide</i>.</p>
   */
  secrets?: Secret[];

  /**
   * <p>The network configuration for jobs that are running on Fargate resources. Jobs that are running on EC2
   *    resources must not specify this parameter.</p>
   */
  networkConfiguration?: NetworkConfiguration;

  /**
   * <p>The platform configuration for jobs that are running on Fargate resources. Jobs that are running on EC2
   *    resources must not specify this parameter.</p>
   */
  fargatePlatformConfiguration?: FargatePlatformConfiguration;
}

/**
 * <p>An environment variable.</p>
 */
export interface EksContainerEnvironmentVariable {
  /**
   * <p>The name of the environment variable.</p>
   */
  name: string | undefined;

  /**
   * <p>The value of the environment variable.</p>
   */
  value?: string;
}

/**
 * <p>The type and amount of resources to assign to a container. The supported resources include <code>memory</code>,
 *    <code>cpu</code>, and <code>nvidia.com/gpu</code>. For more information, see <a href="https://kubernetes.io/docs/concepts/configuration/manage-resources-containers/">Resource management for pods
 *    and containers</a> in the <i>Kubernetes documentation</i>.</p>
 */
export interface EksContainerResourceRequirements {
  /**
   * <p>The type and quantity of the resources to reserve for the container. The values vary based on the
   *    <code>name</code> that's specified. Resources can be requested using either the <code>limits</code> or the
   *    <code>requests</code> objects.</p>
   *          <dl>
   *             <dt>memory</dt>
   *             <dd>
   *                <p>The memory hard limit (in MiB) for the container, using whole integers, with a "Mi" suffix. If your container
   *       attempts to exceed the memory specified, the container is terminated. You must specify at least 4 MiB of memory
   *       for a job. <code>memory</code> can be specified in <code>limits</code>, <code>requests</code>, or both. If
   *       <code>memory</code> is specified in both places, then the value that's specified in <code>limits</code> must be
   *       equal to the value that's specified in <code>requests</code>.</p>
   *                <note>
   *                   <p>To maximize your resource utilization, provide your jobs with as much memory as possible for the specific
   *        instance type that you are using. To learn how, see <a href="https://docs.aws.amazon.com/batch/latest/userguide/memory-management.html">Memory management</a> in the
   *        <i>Batch User Guide</i>.</p>
   *                </note>
   *             </dd>
   *             <dt>cpu</dt>
   *             <dd>
   *                <p>The number of CPUs that's reserved for the container. Values must be an even multiple of <code>0.25</code>.
   *       <code>cpu</code> can be specified in <code>limits</code>, <code>requests</code>, or both. If <code>cpu</code> is
   *       specified in both places, then the value that's specified in <code>limits</code> must be at least as large as the
   *       value that's specified in <code>requests</code>.</p>
   *             </dd>
   *             <dt>nvidia.com/gpu</dt>
   *             <dd>
   *                <p>The number of GPUs that's reserved for the container. Values must be a whole integer. <code>memory</code> can
   *       be specified in <code>limits</code>, <code>requests</code>, or both. If <code>memory</code> is specified in both
   *       places, then the value that's specified in <code>limits</code> must be equal to the value that's specified in
   *       <code>requests</code>.</p>
   *             </dd>
   *          </dl>
   */
  limits?: Record<string, string>;

  /**
   * <p>The type and quantity of the resources to request for the container. The values vary based on the
   *    <code>name</code> that's specified. Resources can be requested by using either the <code>limits</code> or the
   *    <code>requests</code> objects.</p>
   *          <dl>
   *             <dt>memory</dt>
   *             <dd>
   *                <p>The memory hard limit (in MiB) for the container, using whole integers, with a "Mi" suffix. If your container
   *       attempts to exceed the memory specified, the container is terminated. You must specify at least 4 MiB of memory
   *       for a job. <code>memory</code> can be specified in <code>limits</code>, <code>requests</code>, or both. If
   *       <code>memory</code> is specified in both, then the value that's specified in <code>limits</code> must be equal to
   *       the value that's specified in <code>requests</code>.</p>
   *                <note>
   *                   <p>If you're trying to maximize your resource utilization by providing your jobs as much memory as possible for
   *        a particular instance type, see <a href="https://docs.aws.amazon.com/batch/latest/userguide/memory-management.html">Memory
   *        management</a> in the <i>Batch User Guide</i>.</p>
   *                </note>
   *             </dd>
   *             <dt>cpu</dt>
   *             <dd>
   *                <p>The number of CPUs that are reserved for the container. Values must be an even multiple of <code>0.25</code>.
   *       <code>cpu</code> can be specified in <code>limits</code>, <code>requests</code>, or both. If <code>cpu</code> is
   *       specified in both, then the value that's specified in <code>limits</code> must be at least as large as the value
   *       that's specified in <code>requests</code>.</p>
   *             </dd>
   *             <dt>nvidia.com/gpu</dt>
   *             <dd>
   *                <p>The number of GPUs that are reserved for the container. Values must be a whole integer.
   *       <code>nvidia.com/gpu</code> can be specified in <code>limits</code>, <code>requests</code>, or both. If
   *       <code>nvidia.com/gpu</code> is specified in both, then the value that's specified in <code>limits</code> must be
   *       equal to the value that's specified in <code>requests</code>.</p>
   *             </dd>
   *          </dl>
   */
  requests?: Record<string, string>;
}

/**
 * <p>The security context for a job. For more information, see <a href="https://kubernetes.io/docs/tasks/configure-pod-container/security-context/">Configure a security context for a
 *    pod or container</a> in the <i>Kubernetes documentation</i>.</p>
 */
export interface EksContainerSecurityContext {
  /**
   * <p>When this parameter is specified, the container is run as the specified user ID (<code>uid</code>). If this
   *    parameter isn't specified, the default is the user that's specified in the image metadata. This parameter maps to
   *    <code>RunAsUser</code> and <code>MustRanAs</code> policy in the <a href="https://kubernetes.io/docs/concepts/security/pod-security-policy/#users-and-groups">Users and groups pod
   *    security policies</a> in the <i>Kubernetes documentation</i>.</p>
   */
  runAsUser?: number;

  /**
   * <p>When this parameter is specified, the container is run as the specified group ID (<code>gid</code>). If this
   *    parameter isn't specified, the default is the group that's specified in the image metadata. This parameter maps to
   *    <code>RunAsGroup</code> and <code>MustRunAs</code> policy in the <a href="https://kubernetes.io/docs/concepts/security/pod-security-policy/#users-and-groups">Users and groups pod
   *    security policies</a> in the <i>Kubernetes documentation</i>.</p>
   */
  runAsGroup?: number;

  /**
   * <p>When this parameter is <code>true</code>, the container is given elevated permissions on the host container
   *    instance. The level of permissions are similar to the <code>root</code> user permissions. The default value is
   *    <code>false</code>. This parameter maps to <code>privileged</code> policy in the <a href="https://kubernetes.io/docs/concepts/security/pod-security-policy/#privileged">Privileged pod security
   *    policies</a> in the <i>Kubernetes documentation</i>.</p>
   */
  privileged?: boolean;

  /**
   * <p>When this parameter is <code>true</code>, the container is given read-only access to its root file system. The
   *    default value is <code>false</code>. This parameter maps to <code>ReadOnlyRootFilesystem</code> policy in the <a href="https://kubernetes.io/docs/concepts/security/pod-security-policy/#volumes-and-file-systems">Volumes and file
   *    systems pod security policies</a> in the <i>Kubernetes documentation</i>.</p>
   */
  readOnlyRootFilesystem?: boolean;

  /**
   * <p>When this parameter is specified, the container is run as a user with a <code>uid</code> other than 0. If this
   *    parameter isn't specified, so such rule is enforced. This parameter maps to <code>RunAsUser</code> and
   *    <code>MustRunAsNonRoot</code> policy in the <a href="https://kubernetes.io/docs/concepts/security/pod-security-policy/#users-and-groups">Users and groups pod
   *    security policies</a> in the <i>Kubernetes documentation</i>.</p>
   */
  runAsNonRoot?: boolean;
}

/**
 * <p>The volume mounts for a container for an Amazon EKS job. For more information about volumes and volume mounts in
 *    Kubernetes, see <a href="https://kubernetes.io/docs/concepts/storage/volumes/">Volumes</a> in the <i>Kubernetes
 *    documentation</i>.</p>
 */
export interface EksContainerVolumeMount {
  /**
   * <p>The name the volume mount. This must match the name of one of the volumes in the pod.</p>
   */
  name?: string;

  /**
   * <p>The path on the container where the volume is mounted.</p>
   */
  mountPath?: string;

  /**
   * <p>If this value is <code>true</code>, the container has read-only access to the volume. Otherwise, the container
   *    can write to the volume. The default value is <code>false</code>.</p>
   */
  readOnly?: boolean;
}

/**
 * <p>EKS container properties are used in job definitions for Amazon EKS based job definitions to describe the properties
 *    for a container node in the pod that's launched as part of a job. This can't be specified for Amazon ECS based job
 *    definitions.</p>
 */
export interface EksContainer {
  /**
   * <p>The name of the container. If the name isn't specified, the default name "<code>Default</code>" is used. Each
   *    container in a pod must have a unique name.</p>
   */
  name?: string;

  /**
   * <p>The Docker image used to start the container.</p>
   */
  image: string | undefined;

  /**
   * <p>The image pull policy for the container. Supported values are <code>Always</code>, <code>IfNotPresent</code>,
   *    and <code>Never</code>. This parameter defaults to <code>IfNotPresent</code>. However, if the <code>:latest</code>
   *    tag is specified, it defaults to <code>Always</code>. For more information, see <a href="https://kubernetes.io/docs/concepts/containers/images/#updating-images">Updating images</a> in the
   *    <i>Kubernetes documentation</i>.</p>
   */
  imagePullPolicy?: string;

  /**
   * <p>The entrypoint for the container. This isn't run within a shell. If this isn't specified, the
   *    <code>ENTRYPOINT</code> of the container image is used. Environment variable references are expanded using the
   *    container's environment.</p>
   *          <p>If the referenced environment variable doesn't exist, the reference in the command isn't changed. For example,
   *    if the reference is to "<code>$(NAME1)</code>" and the <code>NAME1</code> environment variable doesn't exist, the
   *    command string will remain "<code>$(NAME1)</code>." <code>$$</code> is replaced with <code>$</code> and the resulting
   *    string isn't expanded. For example, <code>$$(VAR_NAME)</code> will be passed as <code>$(VAR_NAME)</code> whether or
   *    not the <code>VAR_NAME</code> environment variable exists. The entrypoint can't be updated. For more information, see
   *    <a href="https://docs.docker.com/engine/reference/builder/#entrypoint">ENTRYPOINT</a> in the
   *    <i>Dockerfile reference</i> and <a href="https://kubernetes.io/docs/tasks/inject-data-application/define-command-argument-container/">Define a command
   *    and arguments for a container</a> and <a href="https://kubernetes.io/docs/reference/kubernetes-api/workload-resources/pod-v1/#entrypoint">Entrypoint</a> in
   *    the <i>Kubernetes documentation</i>.</p>
   */
  command?: string[];

  /**
   * <p>An array of arguments to the entrypoint. If this isn't specified, the <code>CMD</code> of the container image is
   *    used. This corresponds to the <code>args</code> member in the <a href="https://kubernetes.io/docs/reference/kubernetes-api/workload-resources/pod-v1/#entrypoint">Entrypoint</a>
   *    portion of the <a href="https://kubernetes.io/docs/reference/kubernetes-api/workload-resources/pod-v1/">Pod</a> in Kubernetes. Environment variable references are expanded using the container's environment.</p>
   *          <p>If the referenced environment variable doesn't exist, the reference in the command isn't changed. For example,
   *    if the reference is to "<code>$(NAME1)</code>" and the <code>NAME1</code> environment variable doesn't exist, the
   *    command string will remain "<code>$(NAME1)</code>." <code>$$</code> is replaced with <code>$</code>, and the
   *    resulting string isn't expanded. For example, <code>$$(VAR_NAME)</code> is passed as <code>$(VAR_NAME)</code> whether
   *    or not the <code>VAR_NAME</code> environment variable exists. For more information, see <a href="https://docs.docker.com/engine/reference/builder/#cmd">CMD</a> in the <i>Dockerfile
   *    reference</i> and <a href="https://kubernetes.io/docs/tasks/inject-data-application/define-command-argument-container/">Define a command
   *    and arguments for a pod</a> in the <i>Kubernetes documentation</i>.</p>
   */
  args?: string[];

  /**
   * <p>The environment variables to pass to a container.</p>
   *          <note>
   *             <p>Environment variables cannot start with "<code>AWS_BATCH</code>". This naming
   *  convention is reserved for variables that Batch sets.</p>
   *          </note>
   */
  env?: EksContainerEnvironmentVariable[];

  /**
   * <p>The type and amount of resources to assign to a container. The supported resources include <code>memory</code>,
   *    <code>cpu</code>, and <code>nvidia.com/gpu</code>. For more information, see <a href="https://kubernetes.io/docs/concepts/configuration/manage-resources-containers/">Resource management for pods
   *    and containers</a> in the <i>Kubernetes documentation</i>.</p>
   */
  resources?: EksContainerResourceRequirements;

  /**
   * <p>The volume mounts for the container. Batch supports <code>emptyDir</code>, <code>hostPath</code>, and
   *    <code>secret</code> volume types. For more information about volumes and volume mounts in Kubernetes, see <a href="https://kubernetes.io/docs/concepts/storage/volumes/">Volumes</a> in the <i>Kubernetes
   *    documentation</i>.</p>
   */
  volumeMounts?: EksContainerVolumeMount[];

  /**
   * <p>The security context for a job. For more information, see <a href="https://kubernetes.io/docs/tasks/configure-pod-container/security-context/">Configure a security context for a
   *    pod or container</a> in the <i>Kubernetes documentation</i>.</p>
   */
  securityContext?: EksContainerSecurityContext;
}

/**
 * <p>Specifies the configuration of a Kubernetes <code>emptyDir</code> volume. An <code>emptyDir</code> volume is first
 *    created when a pod is assigned to a node. It exists as long as that pod is running on that node. The
 *    <code>emptyDir</code> volume is initially empty. All containers in the pod can read and write the files in the
 *    <code>emptyDir</code> volume. However, the <code>emptyDir</code> volume can be mounted at the same or different paths
 *    in each container. When a pod is removed from a node for any reason, the data in the <code>emptyDir</code> is
 *    deleted permanently. For more information, see <a href="https://kubernetes.io/docs/concepts/storage/volumes/#emptydir">emptyDir</a> in the <i>Kubernetes
 *    documentation</i>.</p>
 */
export interface EksEmptyDir {
  /**
   * <p>The medium to store the volume. The default value is an empty string, which uses the storage of the node.</p>
   *          <dl>
   *             <dt>""</dt>
   *             <dd>
   *                <p>
   *                   <b>(Default)</b> Use the disk storage of the node.</p>
   *             </dd>
   *             <dt>"Memory"</dt>
   *             <dd>
   *                <p>Use the <code>tmpfs</code> volume that's backed by the RAM of the node. Contents of the volume are lost when
   *       the node reboots, and any storage on the volume counts against the container's memory limit.</p>
   *             </dd>
   *          </dl>
   */
  medium?: string;

  /**
   * <p>The maximum size of the volume. By default, there's no maximum size defined.</p>
   */
  sizeLimit?: string;
}

/**
 * <p>Specifies the configuration of a Kubernetes <code>hostPath</code> volume. A <code>hostPath</code> volume mounts an
 *    existing file or directory from the host node's filesystem into your pod. For more information, see <a href="https://kubernetes.io/docs/concepts/storage/volumes/#hostpath">hostPath</a> in the <i>Kubernetes
 *    documentation</i>.</p>
 */
export interface EksHostPath {
  /**
   * <p>The path of the file or directory on the host to mount into containers on the pod.</p>
   */
  path?: string;
}

/**
 * <p>Specifies the configuration of a Kubernetes <code>secret</code> volume. For more information, see <a href="https://kubernetes.io/docs/concepts/storage/volumes/#secret">secret</a> in the <i>Kubernetes
 *    documentation</i>.</p>
 */
export interface EksSecret {
  /**
   * <p>The name of the secret. The name must be allowed as a DNS subdomain name. For more information, see <a href="https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#dns-subdomain-names">DNS subdomain
   *    names</a> in the <i>Kubernetes documentation</i>.</p>
   */
  secretName: string | undefined;

  /**
   * <p>Specifies whether the secret or the secret's keys must be defined.</p>
   */
  optional?: boolean;
}

/**
 * <p>Specifies an Amazon EKS volume for a job definition.</p>
 */
export interface EksVolume {
  /**
   * <p>The name of the volume. The name must be allowed as a DNS subdomain name. For more information, see <a href="https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#dns-subdomain-names">DNS subdomain
   *    names</a> in the <i>Kubernetes documentation</i>.</p>
   */
  name: string | undefined;

  /**
   * <p>Specifies the configuration of a Kubernetes <code>hostPath</code> volume. For more information, see <a href="https://kubernetes.io/docs/concepts/storage/volumes/#hostpath">hostPath</a> in the <i>Kubernetes
   *    documentation</i>.</p>
   */
  hostPath?: EksHostPath;

  /**
   * <p>Specifies the configuration of a Kubernetes <code>emptyDir</code> volume. For more information, see <a href="https://kubernetes.io/docs/concepts/storage/volumes/#emptydir">emptyDir</a> in the <i>Kubernetes
   *    documentation</i>.</p>
   */
  emptyDir?: EksEmptyDir;

  /**
   * <p>Specifies the configuration of a Kubernetes <code>secret</code> volume. For more information, see <a href="https://kubernetes.io/docs/concepts/storage/volumes/#secret">secret</a> in the <i>Kubernetes
   *    documentation</i>.</p>
   */
  secret?: EksSecret;
}

/**
 * <p>The properties for the pod.</p>
 */
export interface EksPodProperties {
  /**
   * <p>The name of the service account that's used to run the pod. For more information, see <a href="https://docs.aws.amazon.com/eks/latest/userguide/service-accounts.html">Kubernetes service accounts</a> and <a href="https://docs.aws.amazon.com/eks/latest/userguide/associate-service-account-role.html">Configure a Kubernetes service account
   *    to assume an IAM role</a> in the <i>Amazon EKS User Guide</i> and <a href="https://kubernetes.io/docs/tasks/configure-pod-container/configure-service-account/">Configure service accounts
   *    for pods</a> in the <i>Kubernetes documentation</i>.</p>
   */
  serviceAccountName?: string;

  /**
   * <p>Indicates if the pod uses the hosts' network IP address. The default value is <code>true</code>. Setting this
   *    to <code>false</code> enables the Kubernetes pod networking model. Most Batch workloads are egress-only and don't
   *    require the overhead of IP allocation for each pod for incoming connections. For more information, see <a href="https://kubernetes.io/docs/concepts/security/pod-security-policy/#host-namespaces">Host namespaces</a> and
   *    <a href="https://kubernetes.io/docs/concepts/workloads/pods/#pod-networking">Pod networking</a> in the
   *    <i>Kubernetes documentation</i>.</p>
   */
  hostNetwork?: boolean;

  /**
   * <p>The DNS policy for the pod. The default value is <code>ClusterFirst</code>. If the <code>hostNetwork</code>
   *    parameter is not specified, the default is <code>ClusterFirstWithHostNet</code>. <code>ClusterFirst</code> indicates
   *    that any DNS query that does not match the configured cluster domain suffix is forwarded to the upstream nameserver
   *    inherited from the node. For more information, see <a href="https://kubernetes.io/docs/concepts/services-networking/dns-pod-service/#pod-s-dns-policy">Pod's DNS
   *    policy</a> in the <i>Kubernetes documentation</i>.</p>
   *          <p>Valid values: <code>Default</code> | <code>ClusterFirst</code> | <code>ClusterFirstWithHostNet</code>
   *          </p>
   */
  dnsPolicy?: string;

  /**
   * <p>The properties of the container that's used on the Amazon EKS pod.</p>
   */
  containers?: EksContainer[];

  /**
   * <p>Specifies the volumes for a job definition that uses Amazon EKS resources.</p>
   */
  volumes?: EksVolume[];
}

/**
 * <p>An object that contains the properties for the Kubernetes resources of a job.</p>
 */
export interface EksProperties {
  /**
   * <p>The properties for the Kubernetes pod resources of a job.</p>
   */
  podProperties?: EksPodProperties;
}

/**
 * <p>An object that represents the properties of the node range for a multi-node parallel job.</p>
 */
export interface NodeRangeProperty {
  /**
   * <p>The range of nodes, using node index values. A range of <code>0:3</code> indicates nodes with index values of
   *    <code>0</code> through <code>3</code>. If the starting range value is omitted (<code>:n</code>), then <code>0</code>
   *    is used to start the range. If the ending range value is omitted (<code>n:</code>), then the highest possible node
   *    index is used to end the range. Your accumulative node ranges must account for all nodes (<code>0:n</code>). You can
   *    nest node ranges (for example, <code>0:10</code> and <code>4:5</code>). In this case, the <code>4:5</code> range
   *    properties override the <code>0:10</code> properties.</p>
   */
  targetNodes: string | undefined;

  /**
   * <p>The container details for the node range.</p>
   */
  container?: ContainerProperties;
}

/**
 * <p>An object that represents the node properties of a multi-node parallel job.</p>
 *          <note>
 *             <p>Node properties can't be specified for Amazon EKS based job definitions.</p>
 *          </note>
 */
export interface NodeProperties {
  /**
   * <p>The number of nodes that are associated with a multi-node parallel job.</p>
   */
  numNodes: number | undefined;

  /**
   * <p>Specifies the node index for the main node of a multi-node parallel job. This node index value must be fewer
   *    than the number of nodes.</p>
   */
  mainNode: number | undefined;

  /**
   * <p>A list of node ranges and their properties that are associated with a multi-node parallel job.</p>
   */
  nodeRangeProperties: NodeRangeProperty[] | undefined;
}

export enum PlatformCapability {
  EC2 = "EC2",
  FARGATE = "FARGATE",
}

export enum RetryAction {
  EXIT = "EXIT",
  RETRY = "RETRY",
}

/**
 * <p>Specifies an array of up to 5 conditions to be met, and an action to take (<code>RETRY</code> or
 *    <code>EXIT</code>) if all conditions are met. If none of the <code>EvaluateOnExit</code> conditions in a
 *    <code>RetryStrategy</code> match, then the job is retried.</p>
 */
export interface EvaluateOnExit {
  /**
   * <p>Contains a glob pattern to match against the <code>StatusReason</code> returned for a job. The pattern can
   *    contain up to 512 characters. It can contain letters, numbers, periods (.), colons (:), and white spaces (including
   *    spaces or tabs). It can optionally end with
   *    an asterisk (*) so that only the start of the string needs to be an exact match.</p>
   */
  onStatusReason?: string;

  /**
   * <p>Contains a glob pattern to match against the <code>Reason</code> returned for a job. The pattern can contain up
   *    to 512 characters. It can contain letters, numbers, periods (.), colons (:), and white space (including spaces and
   *    tabs). It can optionally end with an asterisk (*) so that only the start of the string needs to be an exact
   *    match.</p>
   */
  onReason?: string;

  /**
   * <p>Contains a glob pattern to match against the decimal representation of the <code>ExitCode</code> returned for a
   *    job. The pattern can be up to 512 characters long. It can contain only numbers, and can end with an asterisk (*) so
   *    that only the start of the string needs to be an exact match.</p>
   *          <p>The string can contain up to 512 characters.</p>
   */
  onExitCode?: string;

  /**
   * <p>Specifies the action to take if all of the specified conditions (<code>onStatusReason</code>,
   *    <code>onReason</code>, and <code>onExitCode</code>) are met. The values aren't case sensitive.</p>
   */
  action: RetryAction | string | undefined;
}

/**
 * <p>The retry strategy that's associated with a job. For more information, see <a href="https://docs.aws.amazon.com/batch/latest/userguide/job_retries.html">Automated job retries</a> in the <i>Batch User Guide</i>.</p>
 */
export interface RetryStrategy {
  /**
   * <p>The number of times to move a job to the <code>RUNNABLE</code> status. You can specify between 1 and 10
   *    attempts. If the value of <code>attempts</code> is greater than one, the job is retried on failure the same number of
   *    attempts as the value.</p>
   */
  attempts?: number;

  /**
   * <p>Array of up to 5 objects that specify the conditions where jobs are retried or failed. If this parameter is
   *    specified, then the <code>attempts</code> parameter must also be specified. If none of the listed conditions match,
   *    then the job is retried.</p>
   */
  evaluateOnExit?: EvaluateOnExit[];
}

/**
 * <p>An object that represents a job timeout configuration.</p>
 */
export interface JobTimeout {
  /**
   * <p>The job timeout time (in seconds) that's measured from the job attempt's <code>startedAt</code> timestamp. After
   *    this time passes, Batch terminates your jobs if they aren't finished. The minimum value for the timeout is 60
   *    seconds.</p>
   *          <p>For array jobs, the timeout applies to the child jobs, not to the parent array job.</p>
   *          <p>For multi-node parallel (MNP) jobs, the timeout applies to the whole job, not to the individual nodes.</p>
   */
  attemptDurationSeconds?: number;
}

/**
 * <p>An object that represents an Batch job definition.</p>
 */
export interface JobDefinition {
  /**
   * <p>The name of the job definition.</p>
   */
  jobDefinitionName: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) for the job definition.</p>
   */
  jobDefinitionArn: string | undefined;

  /**
   * <p>The revision of the job definition.</p>
   */
  revision: number | undefined;

  /**
   * <p>The status of the job definition.</p>
   */
  status?: string;

  /**
   * <p>The type of job definition. It's either <code>container</code> or <code>multinode</code>. If the job is run on
   *    Fargate resources, then <code>multinode</code> isn't supported. For more information about multi-node parallel
   *    jobs, see <a href="https://docs.aws.amazon.com/batch/latest/userguide/multi-node-job-def.html">Creating a multi-node parallel job
   *    definition</a> in the <i>Batch User Guide</i>.</p>
   */
  type: string | undefined;

  /**
   * <p>The scheduling priority of the job definition. This only affects jobs in job queues with a fair share policy.
   *    Jobs with a higher scheduling priority are scheduled before jobs with a lower scheduling priority.</p>
   */
  schedulingPriority?: number;

  /**
   * <p>Default parameters or parameter substitution placeholders that are set in the job definition. Parameters are
   *    specified as a key-value pair mapping. Parameters in a <code>SubmitJob</code> request override any corresponding
   *    parameter defaults from the job definition. For more information about specifying parameters, see <a href="https://docs.aws.amazon.com/batch/latest/userguide/job_definition_parameters.html">Job definition parameters</a> in the
   *    <i>Batch User Guide</i>.</p>
   */
  parameters?: Record<string, string>;

  /**
   * <p>The retry strategy to use for failed jobs that are submitted with this job definition.</p>
   */
  retryStrategy?: RetryStrategy;

  /**
   * <p>An object with various properties specific to Amazon ECS based jobs. Valid values are
   *    <code>containerProperties</code>, <code>eksProperties</code>, and <code>nodeProperties</code>. Only one can be
   *    specified.</p>
   */
  containerProperties?: ContainerProperties;

  /**
   * <p>The timeout time for jobs that are submitted with this job definition. After the amount of time you specify
   *    passes,  Batch terminates your jobs if they aren't finished.</p>
   */
  timeout?: JobTimeout;

  /**
   * <p>An object with various properties that are specific to multi-node parallel jobs. Valid values are
   *    <code>containerProperties</code>, <code>eksProperties</code>, and <code>nodeProperties</code>. Only one can be
   *    specified.</p>
   *          <note>
   *             <p>If the job runs on Fargate resources, don't specify <code>nodeProperties</code>. Use
   *     <code>containerProperties</code> instead.</p>
   *          </note>
   */
  nodeProperties?: NodeProperties;

  /**
   * <p>The tags that are applied to the job definition.</p>
   */
  tags?: Record<string, string>;

  /**
   * <p>Specifies whether to propagate the tags from the job or job definition to the corresponding Amazon ECS task. If no
   *    value is specified, the tags aren't propagated. Tags can only be propagated to the tasks when the tasks are created.
   *    For tags with the same name, job tags are given priority over job definitions tags. If the total number of combined
   *    tags from the job and job definition is over 50, the job is moved to the <code>FAILED</code> state.</p>
   */
  propagateTags?: boolean;

  /**
   * <p>The platform capabilities required by the job definition. If no value is specified, it defaults to
   *    <code>EC2</code>. Jobs run on Fargate resources specify <code>FARGATE</code>.</p>
   */
  platformCapabilities?: (PlatformCapability | string)[];

  /**
   * <p>An object with various properties that are specific to Amazon EKS based jobs. Valid values are
   *    <code>containerProperties</code>, <code>eksProperties</code>, and <code>nodeProperties</code>. Only one can be
   *    specified.</p>
   */
  eksProperties?: EksProperties;

  /**
   * <p>The orchestration type of the compute environment. The valid values are <code>ECS</code> (default) or
   *    <code>EKS</code>.</p>
   */
  containerOrchestrationType?: OrchestrationType | string;
}

export interface DescribeJobDefinitionsResponse {
  /**
   * <p>The list of job definitions.</p>
   */
  jobDefinitions?: JobDefinition[];

  /**
   * <p>The <code>nextToken</code> value to include in a future <code>DescribeJobDefinitions</code> request. When the
   *    results of a <code>DescribeJobDefinitions</code> request exceed <code>maxResults</code>, this value can be used to
   *    retrieve the next page of results. This value is <code>null</code> when there are no more results to return.</p>
   */
  nextToken?: string;
}

/**
 * <p>Contains the parameters for <code>DescribeJobQueues</code>.</p>
 */
export interface DescribeJobQueuesRequest {
  /**
   * <p>A list of up to 100 queue names or full queue Amazon Resource Name (ARN) entries.</p>
   */
  jobQueues?: string[];

  /**
   * <p>The maximum number of results returned by <code>DescribeJobQueues</code> in paginated output. When this
   *    parameter is used, <code>DescribeJobQueues</code> only returns <code>maxResults</code> results in a single page and a
   *     <code>nextToken</code> response element. The remaining results of the initial request can be seen by sending another
   *     <code>DescribeJobQueues</code> request with the returned <code>nextToken</code> value. This value can be between
   *    1 and 100. If this parameter isn't used, then <code>DescribeJobQueues</code> returns up
   *    to 100 results and a <code>nextToken</code> value if applicable.</p>
   */
  maxResults?: number;

  /**
   * <p>The <code>nextToken</code> value returned from a previous paginated <code>DescribeJobQueues</code> request where
   *     <code>maxResults</code> was used and the results exceeded the value of that parameter. Pagination continues from the
   *    end of the previous results that returned the <code>nextToken</code> value. This value is <code>null</code> when
   *    there are no more results to return.</p>
   *          <note>
   *             <p>Treat this token as an opaque identifier that's only used to
   *  retrieve the next items in a list and not for other programmatic purposes.</p>
   *          </note>
   */
  nextToken?: string;
}

export enum JQStatus {
  CREATING = "CREATING",
  DELETED = "DELETED",
  DELETING = "DELETING",
  INVALID = "INVALID",
  UPDATING = "UPDATING",
  VALID = "VALID",
}

/**
 * <p>An object that represents the details for an Batch job queue.</p>
 */
export interface JobQueueDetail {
  /**
   * <p>The job queue name.</p>
   */
  jobQueueName: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the job queue.</p>
   */
  jobQueueArn: string | undefined;

  /**
   * <p>Describes the ability of the queue to accept new jobs. If the job queue state is <code>ENABLED</code>, it can
   *    accept jobs. If the job queue state is <code>DISABLED</code>, new jobs can't be added to the queue, but jobs already
   *    in the queue can finish.</p>
   */
  state: JQState | string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the scheduling policy. The format is
   *    <code>aws:<i>Partition</i>:batch:<i>Region</i>:<i>Account</i>:scheduling-policy/<i>Name</i>
   *             </code>.
   *    For example,
   *    <code>aws:aws:batch:us-west-2:123456789012:scheduling-policy/MySchedulingPolicy</code>.</p>
   */
  schedulingPolicyArn?: string;

  /**
   * <p>The status of the job queue (for example, <code>CREATING</code> or <code>VALID</code>).</p>
   */
  status?: JQStatus | string;

  /**
   * <p>A short, human-readable string to provide additional details for the current status of the job queue.</p>
   */
  statusReason?: string;

  /**
   * <p>The priority of the job queue. Job queues with a higher priority (or a higher integer value for the
   *    <code>priority</code> parameter) are evaluated first when associated with the same compute environment. Priority is
   *    determined in descending order. For example, a job queue with a priority value of <code>10</code> is given scheduling
   *    preference over a job queue with a priority value of <code>1</code>. All of the compute environments must be either
   *    EC2 (<code>EC2</code> or <code>SPOT</code>) or Fargate (<code>FARGATE</code> or <code>FARGATE_SPOT</code>). EC2 and
   *    Fargate compute environments can't be mixed.</p>
   */
  priority: number | undefined;

  /**
   * <p>The compute environments that are attached to the job queue and the order that job placement is preferred.
   *    Compute environments are selected for job placement in ascending order.</p>
   */
  computeEnvironmentOrder: ComputeEnvironmentOrder[] | undefined;

  /**
   * <p>The tags that are applied to the job queue. For more information, see <a href="https://docs.aws.amazon.com/batch/latest/userguide/using-tags.html">Tagging your Batch resources</a> in
   *    <i>Batch User Guide</i>.</p>
   */
  tags?: Record<string, string>;
}

export interface DescribeJobQueuesResponse {
  /**
   * <p>The list of job queues.</p>
   */
  jobQueues?: JobQueueDetail[];

  /**
   * <p>The <code>nextToken</code> value to include in a future <code>DescribeJobQueues</code> request. When the results
   *    of a <code>DescribeJobQueues</code> request exceed <code>maxResults</code>, this value can be used to retrieve the
   *    next page of results. This value is <code>null</code> when there are no more results to return.</p>
   */
  nextToken?: string;
}

/**
 * <p>Contains the parameters for <code>DescribeJobs</code>.</p>
 */
export interface DescribeJobsRequest {
  /**
   * <p>A list of up to 100 job IDs.</p>
   */
  jobs: string[] | undefined;
}

/**
 * <p>An object that represents the details of a container that's part of a job.</p>
 */
export interface ContainerDetail {
  /**
   * <p>The image used to start the container.</p>
   */
  image?: string;

  /**
   * <p>The number of vCPUs reserved for the container. For jobs that run on EC2 resources, you can specify the vCPU
   *    requirement for the job using <code>resourceRequirements</code>, but you can't specify the vCPU requirements in both
   *    the <code>vcpus</code> and <code>resourceRequirements</code> object. This parameter maps to <code>CpuShares</code> in
   *    the <a href="https://docs.docker.com/engine/api/v1.23/#create-a-container">Create a container</a> section of the <a href="https://docs.docker.com/engine/api/v1.23/">Docker Remote API</a> and the <code>--cpu-shares</code> option to
   *    <a href="https://docs.docker.com/engine/reference/run/">docker run</a>. Each vCPU is equivalent to 1,024 CPU shares. You must specify
   *    at least one vCPU. This is required but can be specified in several places. It must be specified for each node at
   *    least once.</p>
   *          <note>
   *             <p>This parameter isn't applicable to jobs that run on Fargate resources. For jobs that run on Fargate
   *     resources, you must specify the vCPU requirement for the job using <code>resourceRequirements</code>.</p>
   *          </note>
   */
  vcpus?: number;

  /**
   * <p>For jobs running on EC2 resources that didn't specify memory requirements using
   *    <code>resourceRequirements</code>, the number of MiB of memory reserved for the job. For other jobs, including all
   *    run on Fargate resources, see <code>resourceRequirements</code>.</p>
   */
  memory?: number;

  /**
   * <p>The command that's passed to the container.</p>
   */
  command?: string[];

  /**
   * <p>The Amazon Resource Name (ARN) that's associated with the job when run.</p>
   */
  jobRoleArn?: string;

  /**
   * <p>The Amazon Resource Name (ARN) of the
   *    execution
   *    role that Batch can assume. For more information, see <a href="https://docs.aws.amazon.com/batch/latest/userguide/execution-IAM-role.html">Batch execution IAM role</a> in the
   *    <i>Batch User Guide</i>.</p>
   */
  executionRoleArn?: string;

  /**
   * <p>A list of volumes that are associated with the job.</p>
   */
  volumes?: Volume[];

  /**
   * <p>The environment variables to pass to a container.</p>
   *          <note>
   *             <p>Environment variables cannot start with "<code>AWS_BATCH</code>". This naming
   *  convention is reserved for variables that Batch sets.</p>
   *          </note>
   */
  environment?: KeyValuePair[];

  /**
   * <p>The mount points for data volumes in your container.</p>
   */
  mountPoints?: MountPoint[];

  /**
   * <p>When this parameter is true, the container is given read-only access to its root file system. This parameter
   *    maps to <code>ReadonlyRootfs</code> in the <a href="https://docs.docker.com/engine/api/v1.23/#create-a-container">Create a container</a> section of the <a href="https://docs.docker.com/engine/api/v1.23/">Docker Remote API</a> and
   *    the <code>--read-only</code> option to <a href="https://docs.docker.com/engine/reference/commandline/run/">
   *                <code>docker run</code>
   *             </a>.</p>
   */
  readonlyRootFilesystem?: boolean;

  /**
   * <p>A list of <code>ulimit</code> values to set in the container. This parameter maps to <code>Ulimits</code> in the
   *    <a href="https://docs.docker.com/engine/api/v1.23/#create-a-container">Create a container</a> section of the <a href="https://docs.docker.com/engine/api/v1.23/">Docker Remote API</a> and the <code>--ulimit</code> option to <a href="https://docs.docker.com/engine/reference/run/">docker run</a>.</p>
   *          <note>
   *             <p>This parameter isn't applicable to jobs that are running on Fargate resources.</p>
   *          </note>
   */
  ulimits?: Ulimit[];

  /**
   * <p>When this parameter is true, the container is given elevated permissions on the host container instance (similar
   *    to the <code>root</code> user). The default value is <code>false</code>.</p>
   *          <note>
   *             <p>This parameter isn't applicable to jobs that are running on Fargate resources and shouldn't be provided, or
   *     specified as <code>false</code>.</p>
   *          </note>
   */
  privileged?: boolean;

  /**
   * <p>The user name to use inside the container. This parameter maps to <code>User</code> in the
   *    <a href="https://docs.docker.com/engine/api/v1.23/#create-a-container">Create a container</a> section of the <a href="https://docs.docker.com/engine/api/v1.23/">Docker Remote API</a> and the <code>--user</code> option to <a href="https://docs.docker.com/engine/reference/run/">docker run</a>.</p>
   */
  user?: string;

  /**
   * <p>The exit code to return upon completion.</p>
   */
  exitCode?: number;

  /**
   * <p>A short (255 max characters) human-readable string to provide additional details for a running or stopped
   *    container.</p>
   */
  reason?: string;

  /**
   * <p>The Amazon Resource Name (ARN) of the container instance that the container is running on.</p>
   */
  containerInstanceArn?: string;

  /**
   * <p>The Amazon Resource Name (ARN) of the Amazon ECS task that's associated with the container job. Each container attempt receives a task
   *    ARN when they reach the <code>STARTING</code> status.</p>
   */
  taskArn?: string;

  /**
   * <p>The name of the Amazon CloudWatch Logs log stream that's associated with the container. The log group for Batch jobs is
   *    <code>/aws/batch/job</code>. Each container attempt receives a log stream name when they reach the
   *    <code>RUNNING</code> status.</p>
   */
  logStreamName?: string;

  /**
   * <p>The instance type of the underlying host infrastructure of a multi-node parallel job.</p>
   *          <note>
   *             <p>This parameter isn't applicable to jobs that are running on Fargate resources.</p>
   *          </note>
   */
  instanceType?: string;

  /**
   * <p>The network interfaces that are associated with the job.</p>
   */
  networkInterfaces?: NetworkInterface[];

  /**
   * <p>The type and amount of resources to assign to a container. The supported resources include <code>GPU</code>,
   *    <code>MEMORY</code>, and <code>VCPU</code>.</p>
   */
  resourceRequirements?: ResourceRequirement[];

  /**
   * <p>Linux-specific modifications that are applied to the container, such as details for device mappings.</p>
   */
  linuxParameters?: LinuxParameters;

  /**
   * <p>The log configuration specification for the container.</p>
   *          <p>This parameter maps to <code>LogConfig</code> in the <a href="https://docs.docker.com/engine/api/v1.23/#create-a-container">Create a container</a> section of the
   *    <a href="https://docs.docker.com/engine/api/v1.23/">Docker Remote API</a> and the <code>--log-driver</code> option to <a href="https://docs.docker.com/engine/reference/run/">docker run</a>.
   *    By default, containers use the same logging driver that the Docker daemon uses. However, the container might use a
   *    different logging driver than the Docker daemon by specifying a log driver with this parameter in the container
   *    definition. To use a different logging driver for a container, the log system must be configured properly on the
   *    container instance. Or, alternatively, it must be configured on a different log server for remote logging options.
   *    For more information on the options for different supported log drivers, see <a href="https://docs.docker.com/engine/admin/logging/overview/">Configure logging drivers</a> in the Docker
   *    documentation.</p>
   *          <note>
   *             <p>Batch currently supports a subset of the logging drivers available to the Docker daemon (shown in the <a>LogConfiguration</a> data type). Additional log drivers might be available in future releases of the Amazon ECS
   *     container agent.</p>
   *          </note>
   *          <p>This parameter requires version 1.18 of the Docker Remote API or greater on your
   *  container instance. To check the Docker Remote API version on your container instance, log in to your
   *  container instance and run the following command: <code>sudo docker version | grep "Server API version"</code>
   *          </p>
   *          <note>
   *             <p>The Amazon ECS container agent running on a container instance must register the logging drivers available on that
   *     instance with the <code>ECS_AVAILABLE_LOGGING_DRIVERS</code> environment variable before containers placed on that
   *     instance can use these log configuration options. For more information, see <a href="https://docs.aws.amazon.com/AmazonECS/latest/developerguide/ecs-agent-config.html">Amazon ECS container agent configuration</a> in the
   *     <i>Amazon Elastic Container Service Developer Guide</i>.</p>
   *          </note>
   */
  logConfiguration?: LogConfiguration;

  /**
   * <p>The secrets to pass to the container. For more information, see <a href="https://docs.aws.amazon.com/batch/latest/userguide/specifying-sensitive-data.html">Specifying sensitive data</a> in the
   *    <i>Batch User Guide</i>.</p>
   */
  secrets?: Secret[];

  /**
   * <p>The network configuration for jobs that are running on Fargate resources. Jobs that are running on EC2
   *    resources must not specify this parameter.</p>
   */
  networkConfiguration?: NetworkConfiguration;

  /**
   * <p>The platform configuration for jobs that are running on Fargate resources. Jobs that are running on EC2
   *    resources must not specify this parameter.</p>
   */
  fargatePlatformConfiguration?: FargatePlatformConfiguration;
}

/**
 * <p>An object that represents an Batch job dependency.</p>
 */
export interface JobDependency {
  /**
   * <p>The job ID of the Batch job that's associated with this dependency.</p>
   */
  jobId?: string;

  /**
   * <p>The type of the job dependency.</p>
   */
  type?: ArrayJobDependency | string;
}

/**
 * <p>An object that represents the details for an attempt for a job attempt that an Amazon EKS container runs.</p>
 */
export interface EksAttemptContainerDetail {
  /**
   * <p>The exit code for the job attempt. A non-zero exit code is considered failed.</p>
   */
  exitCode?: number;

  /**
   * <p>A short (255 max characters) human-readable string to provide additional details for a running or stopped
   *    container.</p>
   */
  reason?: string;
}

/**
 * <p>An object that represents the details of a job attempt for a job attempt by an Amazon EKS container.</p>
 */
export interface EksAttemptDetail {
  /**
   * <p>The details for the final status of the containers for this job attempt.</p>
   */
  containers?: EksAttemptContainerDetail[];

  /**
   * <p>The name of the pod for this job attempt.</p>
   */
  podName?: string;

  /**
   * <p>The name of the node for this job attempt.</p>
   */
  nodeName?: string;

  /**
   * <p>The Unix timestamp (in milliseconds) for when the attempt was started (when the attempt transitioned from the
   *    <code>STARTING</code> state to the <code>RUNNING</code> state).</p>
   */
  startedAt?: number;

  /**
   * <p>The Unix timestamp (in milliseconds) for when the attempt was stopped. This happens when the attempt
   *    transitioned from the <code>RUNNING</code> state to a terminal state, such as <code>SUCCEEDED</code> or
   *    <code>FAILED</code>.</p>
   */
  stoppedAt?: number;

  /**
   * <p>A short, human-readable string to provide additional details for the current status of the job attempt.</p>
   */
  statusReason?: string;
}

/**
 * <p>The details for container properties that are returned by <code>DescribeJobs</code> for jobs that use
 *    Amazon EKS.</p>
 */
export interface EksContainerDetail {
  /**
   * <p>The name of the container. If the name isn't specified, the default name "<code>Default</code>" is used. Each
   *    container in a pod must have a unique name.</p>
   */
  name?: string;

  /**
   * <p>The Docker image used to start the container.</p>
   */
  image?: string;

  /**
   * <p>The image pull policy for the container. Supported values are <code>Always</code>, <code>IfNotPresent</code>,
   *    and <code>Never</code>. This parameter defaults to <code>Always</code> if the <code>:latest</code> tag is specified,
   *    <code>IfNotPresent</code> otherwise. For more information, see <a href="https://kubernetes.io/docs/concepts/containers/images/#updating-images">Updating images</a> in the
   *    <i>Kubernetes documentation</i>.</p>
   */
  imagePullPolicy?: string;

  /**
   * <p>The entrypoint for the container. For more information, see <a href="https://kubernetes.io/docs/reference/kubernetes-api/workload-resources/pod-v1/#entrypoint">Entrypoint</a> in
   *    the <i>Kubernetes documentation</i>.</p>
   */
  command?: string[];

  /**
   * <p>An array of arguments to the entrypoint. If this isn't specified, the <code>CMD</code> of the container image is
   *    used. This corresponds to the <code>args</code> member in the <a href="https://kubernetes.io/docs/reference/kubernetes-api/workload-resources/pod-v1/#entrypoint">Entrypoint</a>
   *    portion of the <a href="https://kubernetes.io/docs/reference/kubernetes-api/workload-resources/pod-v1/">Pod</a> in Kubernetes. Environment variable references are expanded using the container's environment.</p>
   *          <p>If the referenced environment variable doesn't exist, the reference in the command isn't changed. For example,
   *    if the reference is to "<code>$(NAME1)</code>" and the <code>NAME1</code> environment variable doesn't exist, the
   *    command string will remain "<code>$(NAME1)</code>". <code>$$</code> is replaced with <code>$</code> and the resulting
   *    string isn't expanded. For example, <code>$$(VAR_NAME)</code> is passed as <code>$(VAR_NAME)</code> whether or not
   *    the <code>VAR_NAME</code> environment variable exists. For more information, see <a href="https://docs.docker.com/engine/reference/builder/#cmd">CMD</a> in the <i>Dockerfile
   *    reference</i> and <a href="https://kubernetes.io/docs/tasks/inject-data-application/define-command-argument-container/">Define a command
   *    and arguments for a pod</a> in the <i>Kubernetes documentation</i>.</p>
   */
  args?: string[];

  /**
   * <p>The environment variables to pass to a container.</p>
   *          <note>
   *             <p>Environment variables cannot start with "<code>AWS_BATCH</code>". This naming
   *  convention is reserved for variables that Batch sets.</p>
   *          </note>
   */
  env?: EksContainerEnvironmentVariable[];

  /**
   * <p>The type and amount of resources to assign to a container. The supported resources include <code>memory</code>,
   *    <code>cpu</code>, and <code>nvidia.com/gpu</code>. For more information, see <a href="https://kubernetes.io/docs/concepts/configuration/manage-resources-containers/">Resource management for pods
   *    and containers</a> in the <i>Kubernetes documentation</i>.</p>
   */
  resources?: EksContainerResourceRequirements;

  /**
   * <p>The exit code for the job attempt. A non-zero exit code is considered failed.</p>
   */
  exitCode?: number;

  /**
   * <p>A short human-readable string to provide additional details for a running or stopped container. It can be up to
   *    255 characters long.</p>
   */
  reason?: string;

  /**
   * <p>The volume mounts for the container. Batch supports <code>emptyDir</code>, <code>hostPath</code>, and
   *    <code>secret</code> volume types. For more information about volumes and volume mounts in Kubernetes, see <a href="https://kubernetes.io/docs/concepts/storage/volumes/">Volumes</a> in the <i>Kubernetes
   *    documentation</i>.</p>
   */
  volumeMounts?: EksContainerVolumeMount[];

  /**
   * <p>The security context for a job. For more information, see <a href="https://kubernetes.io/docs/tasks/configure-pod-container/security-context/">Configure a security context for a
   *    pod or container</a> in the <i>Kubernetes documentation</i>.</p>
   */
  securityContext?: EksContainerSecurityContext;
}

/**
 * <p>The details for the pod.</p>
 */
export interface EksPodPropertiesDetail {
  /**
   * <p>The name of the service account that's used to run the pod. For more information, see <a href="https://docs.aws.amazon.com/eks/latest/userguide/service-accounts.html">Kubernetes service accounts</a> and <a href="https://docs.aws.amazon.com/eks/latest/userguide/associate-service-account-role.html">Configure a Kubernetes service account
   *    to assume an IAM role</a> in the <i>Amazon EKS User Guide</i> and <a href="https://kubernetes.io/docs/tasks/configure-pod-container/configure-service-account/">Configure service accounts
   *    for pods</a> in the <i>Kubernetes documentation</i>.</p>
   */
  serviceAccountName?: string;

  /**
   * <p>Indicates if the pod uses the hosts' network IP address. The default value is <code>true</code>. Setting this
   *    to <code>false</code> enables the Kubernetes pod networking model. Most Batch workloads are egress-only and don't
   *    require the overhead of IP allocation for each pod for incoming connections. For more information, see <a href="https://kubernetes.io/docs/concepts/security/pod-security-policy/#host-namespaces">Host namespaces</a> and
   *    <a href="https://kubernetes.io/docs/concepts/workloads/pods/#pod-networking">Pod networking</a> in the
   *    <i>Kubernetes documentation</i>.</p>
   */
  hostNetwork?: boolean;

  /**
   * <p>The DNS policy for the pod. The default value is <code>ClusterFirst</code>. If the <code>hostNetwork</code>
   *    parameter is not specified, the default is <code>ClusterFirstWithHostNet</code>. <code>ClusterFirst</code> indicates
   *    that any DNS query that does not match the configured cluster domain suffix is forwarded to the upstream nameserver
   *    inherited from the node. If no value was specified for <code>dnsPolicy</code> in the <a href="https://docs.aws.amazon.com/batch/latest/APIReference/API_RegisterJobDefinition.html">RegisterJobDefinition</a> API operation, then no
   *    value will be returned for <code>dnsPolicy</code> by either of <a href="https://docs.aws.amazon.com/batch/latest/APIReference/API_DescribeJobDefinitions.html">DescribeJobDefinitions</a> or <a href="https://docs.aws.amazon.com/batch/latest/APIReference/API_DescribeJobs.html">DescribeJobs</a> API operations. The
   *    pod spec setting will contain either <code>ClusterFirst</code> or <code>ClusterFirstWithHostNet</code>, depending
   *    on the value of the <code>hostNetwork</code> parameter. For more information, see <a href="https://kubernetes.io/docs/concepts/services-networking/dns-pod-service/#pod-s-dns-policy">Pod's DNS
   *    policy</a> in the <i>Kubernetes documentation</i>.</p>
   *          <p>Valid values: <code>Default</code> | <code>ClusterFirst</code> | <code>ClusterFirstWithHostNet</code>
   *          </p>
   */
  dnsPolicy?: string;

  /**
   * <p>The properties of the container that's used on the Amazon EKS pod.</p>
   */
  containers?: EksContainerDetail[];

  /**
   * <p>Specifies the volumes for a job definition using Amazon EKS resources.</p>
   */
  volumes?: EksVolume[];

  /**
   * <p>The name of the pod for this job.</p>
   */
  podName?: string;

  /**
   * <p>The name of the node for this job.</p>
   */
  nodeName?: string;
}

/**
 * <p>An object that contains the details for the Kubernetes resources of a job.</p>
 */
export interface EksPropertiesDetail {
  /**
   * <p>The properties for the Kubernetes pod resources of a job.</p>
   */
  podProperties?: EksPodPropertiesDetail;
}

/**
 * <p>An object that represents the details of a multi-node parallel job node.</p>
 */
export interface NodeDetails {
  /**
   * <p>The node index for the node. Node index numbering starts at zero. This index is also available on the node with
   *    the <code>AWS_BATCH_JOB_NODE_INDEX</code> environment variable.</p>
   */
  nodeIndex?: number;

  /**
   * <p>Specifies whether the current node is the main node for a multi-node parallel job.</p>
   */
  isMainNode?: boolean;
}

export enum JobStatus {
  FAILED = "FAILED",
  PENDING = "PENDING",
  RUNNABLE = "RUNNABLE",
  RUNNING = "RUNNING",
  STARTING = "STARTING",
  SUBMITTED = "SUBMITTED",
  SUCCEEDED = "SUCCEEDED",
}

/**
 * <p>An object that represents an Batch job.</p>
 */
export interface JobDetail {
  /**
   * <p>The Amazon Resource Name (ARN) of the job.</p>
   */
  jobArn?: string;

  /**
   * <p>The job name.</p>
   */
  jobName: string | undefined;

  /**
   * <p>The job ID.</p>
   */
  jobId: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the job queue that the job is associated with.</p>
   */
  jobQueue: string | undefined;

  /**
   * <p>The current status for the job.</p>
   *          <note>
   *             <p>If your jobs don't progress to <code>STARTING</code>, see <a href="https://docs.aws.amazon.com/batch/latest/userguide/troubleshooting.html#job_stuck_in_runnable">Jobs stuck in RUNNABLE status</a> in the
   *     troubleshooting section of the <i>Batch User Guide</i>.</p>
   *          </note>
   */
  status: JobStatus | string | undefined;

  /**
   * <p>The share identifier for the job.</p>
   */
  shareIdentifier?: string;

  /**
   * <p>The scheduling policy of the job definition. This only affects jobs in job queues with a fair share policy. Jobs
   *    with a higher scheduling priority are scheduled before jobs with a lower scheduling priority.</p>
   */
  schedulingPriority?: number;

  /**
   * <p>A list of job attempts that are associated with this job.</p>
   */
  attempts?: AttemptDetail[];

  /**
   * <p>A short, human-readable string to provide more details for the current status of the job.</p>
   */
  statusReason?: string;

  /**
   * <p>The Unix timestamp (in milliseconds) for when the job was created. For non-array jobs and parent array jobs,
   *    this is when the job entered the <code>SUBMITTED</code> state. This is specifically at the time <a>SubmitJob</a> was called. For array child jobs, this is when the child job was spawned by its parent and
   *    entered the <code>PENDING</code> state.</p>
   */
  createdAt?: number;

  /**
   * <p>The retry strategy to use for this job if an attempt fails.</p>
   */
  retryStrategy?: RetryStrategy;

  /**
   * <p>The Unix timestamp (in milliseconds) for when the job was started. More specifically, it's when the job
   *    transitioned from the <code>STARTING</code> state to the <code>RUNNING</code> state. This parameter isn't provided
   *    for child jobs of array jobs or multi-node parallel jobs.</p>
   */
  startedAt: number | undefined;

  /**
   * <p>The Unix timestamp (in milliseconds) for when the job was stopped. More specifically, it's when the job
   *    transitioned from the <code>RUNNING</code> state to a terminal state, such as <code>SUCCEEDED</code> or
   *    <code>FAILED</code>.</p>
   */
  stoppedAt?: number;

  /**
   * <p>A list of job IDs that this job depends on.</p>
   */
  dependsOn?: JobDependency[];

  /**
   * <p>The Amazon Resource Name (ARN) of the job definition that this job uses.</p>
   */
  jobDefinition: string | undefined;

  /**
   * <p>Additional parameters that are passed to the job that replace parameter substitution placeholders or override
   *    any corresponding parameter defaults from the job definition.</p>
   */
  parameters?: Record<string, string>;

  /**
   * <p>An object that represents the details for the container that's associated with the job.</p>
   */
  container?: ContainerDetail;

  /**
   * <p>An object that represents the details of a node that's associated with a multi-node parallel job.</p>
   */
  nodeDetails?: NodeDetails;

  /**
   * <p>An object that represents the node properties of a multi-node parallel job.</p>
   *          <note>
   *             <p>This isn't applicable to jobs that are running on Fargate resources.</p>
   *          </note>
   */
  nodeProperties?: NodeProperties;

  /**
   * <p>The array properties of the job, if it's an array job.</p>
   */
  arrayProperties?: ArrayPropertiesDetail;

  /**
   * <p>The timeout configuration for the job.</p>
   */
  timeout?: JobTimeout;

  /**
   * <p>The tags that are applied to the job.</p>
   */
  tags?: Record<string, string>;

  /**
   * <p>Specifies whether to propagate the tags from the job or job definition to the corresponding Amazon ECS task. If no
   *    value is specified, the tags aren't propagated. Tags can only be propagated to the tasks when the tasks are created.
   *    For tags with the same name, job tags are given priority over job definitions tags. If the total number of combined
   *    tags from the job and job definition is over 50, the job is moved to the <code>FAILED</code> state.</p>
   */
  propagateTags?: boolean;

  /**
   * <p>The platform capabilities required by the job definition. If no value is specified, it defaults to
   *    <code>EC2</code>. Jobs run on Fargate resources specify <code>FARGATE</code>.</p>
   */
  platformCapabilities?: (PlatformCapability | string)[];

  /**
   * <p>An object with various properties that are specific to Amazon EKS based jobs. Only one of <code>container</code>,
   *    <code>eksProperties</code>, or <code>nodeDetails</code> is specified.</p>
   */
  eksProperties?: EksPropertiesDetail;

  /**
   * <p>A list of job attempts that are associated with this job.</p>
   */
  eksAttempts?: EksAttemptDetail[];

  /**
   * <p>Indicates whether the job is canceled.</p>
   */
  isCancelled?: boolean;

  /**
   * <p>Indicates whether the job is terminated.</p>
   */
  isTerminated?: boolean;
}

export interface DescribeJobsResponse {
  /**
   * <p>The list of jobs.</p>
   */
  jobs?: JobDetail[];
}

/**
 * <p>Contains the parameters for <code>DescribeSchedulingPolicies</code>.</p>
 */
export interface DescribeSchedulingPoliciesRequest {
  /**
   * <p>A list of up to 100 scheduling policy Amazon Resource Name (ARN) entries.</p>
   */
  arns: string[] | undefined;
}

/**
 * <p>An object that represents a scheduling policy.</p>
 */
export interface SchedulingPolicyDetail {
  /**
   * <p>The name of the scheduling policy.</p>
   */
  name: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the scheduling policy. An example is
   *    <code>arn:<i>aws</i>:batch:<i>us-east-1</i>:<i>123456789012</i>:scheduling-policy/<i>HighPriority</i>
   *             </code>.</p>
   */
  arn: string | undefined;

  /**
   * <p>The fair share policy for the scheduling policy.</p>
   */
  fairsharePolicy?: FairsharePolicy;

  /**
   * <p>The tags that you apply to the scheduling policy to categorize and organize your resources. Each tag consists of
   *    a key and an optional value. For more information, see <a href="https://docs.aws.amazon.com/general/latest/gr/aws_tagging.html">Tagging Amazon Web Services resources</a> in <i>Amazon Web Services General
   *    Reference</i>.</p>
   */
  tags?: Record<string, string>;
}

export interface DescribeSchedulingPoliciesResponse {
  /**
   * <p>The list of scheduling policies.</p>
   */
  schedulingPolicies?: SchedulingPolicyDetail[];
}

/**
 * <p>A filter name and value pair that's used to return a more specific list of results from a <code>ListJobs</code>
 *    API operation.</p>
 */
export interface KeyValuesPair {
  /**
   * <p>The name of the filter. Filter names are case sensitive.</p>
   */
  name?: string;

  /**
   * <p>The filter values.</p>
   */
  values?: string[];
}

/**
 * <p>Contains the parameters for <code>ListJobs</code>.</p>
 */
export interface ListJobsRequest {
  /**
   * <p>The name or full Amazon Resource Name (ARN) of the job queue used to list jobs.</p>
   */
  jobQueue?: string;

  /**
   * <p>The job ID for an array job. Specifying an array job ID with this parameter lists all child jobs from within the
   *    specified array.</p>
   */
  arrayJobId?: string;

  /**
   * <p>The job ID for a multi-node parallel job. Specifying a multi-node parallel job ID with this parameter lists all
   *    nodes that are associated with the specified job.</p>
   */
  multiNodeJobId?: string;

  /**
   * <p>The job status used to filter jobs in the specified queue. If the <code>filters</code> parameter is specified,
   *    the <code>jobStatus</code> parameter is ignored and jobs with any status are returned. If you don't specify a status,
   *    only <code>RUNNING</code> jobs are returned.</p>
   */
  jobStatus?: JobStatus | string;

  /**
   * <p>The maximum number of results returned by <code>ListJobs</code> in paginated output. When this parameter is
   *    used, <code>ListJobs</code> only returns <code>maxResults</code> results in a single page and a
   *     <code>nextToken</code> response element. The remaining results of the initial request can be seen by sending another
   *     <code>ListJobs</code> request with the returned <code>nextToken</code> value. This value can be between
   *    1 and 100. If this parameter isn't used, then <code>ListJobs</code> returns up to
   *    100 results and a <code>nextToken</code> value if applicable.</p>
   */
  maxResults?: number;

  /**
   * <p>The <code>nextToken</code> value returned from a previous paginated <code>ListJobs</code> request where
   *     <code>maxResults</code> was used and the results exceeded the value of that parameter. Pagination continues from the
   *    end of the previous results that returned the <code>nextToken</code> value. This value is <code>null</code> when
   *    there are no more results to return.</p>
   *          <note>
   *             <p>Treat this token as an opaque identifier that's only used to
   *  retrieve the next items in a list and not for other programmatic purposes.</p>
   *          </note>
   */
  nextToken?: string;

  /**
   * <p>The filter to apply to the query. Only one filter can be used at a time. When the filter is used,
   *     <code>jobStatus</code> is ignored. The filter doesn't apply to child jobs in an array or multi-node parallel (MNP)
   *    jobs. The results are sorted by the <code>createdAt</code> field, with the most recent jobs being first.</p>
   *          <dl>
   *             <dt>JOB_NAME</dt>
   *             <dd>
   *                <p>The value of the filter is a case-insensitive match for the job name. If the value ends with an asterisk (*),
   *       the filter matches any job name that begins with the string before the '*'. This corresponds to the
   *       <code>jobName</code> value. For example, <code>test1</code> matches both <code>Test1</code> and
   *       <code>test1</code>, and <code>test1*</code> matches both <code>test1</code> and <code>Test10</code>. When the
   *       <code>JOB_NAME</code> filter is used, the results are grouped by the job name and version.</p>
   *             </dd>
   *             <dt>JOB_DEFINITION</dt>
   *             <dd>
   *                <p>The value for the filter is the name or Amazon Resource Name (ARN) of the job definition. This corresponds to the
   *       <code>jobDefinition</code> value. The value is case sensitive. When the value for the filter is the job definition
   *       name, the results include all the jobs that used any revision of that job definition name. If the value ends with
   *       an asterisk (*), the filter matches any job definition name that begins with the string before the '*'. For
   *       example, <code>jd1</code> matches only <code>jd1</code>, and <code>jd1*</code> matches both <code>jd1</code> and
   *       <code>jd1A</code>. The version of the job definition that's used doesn't affect the sort order. When the
   *       <code>JOB_DEFINITION</code> filter is used and the ARN is used (which is in the form
   *       <code>arn:${Partition}:batch:${Region}:${Account}:job-definition/${JobDefinitionName}:${Revision}</code>), the
   *       results include jobs that used the specified revision of the job definition. Asterisk (*) isn't supported when the
   *       ARN is used.</p>
   *             </dd>
   *             <dt>BEFORE_CREATED_AT</dt>
   *             <dd>
   *                <p>The value for the filter is the time that's before the job was created. This corresponds to the
   *        <code>createdAt</code> value. The value is a string representation of the number of milliseconds since 00:00:00
   *       UTC (midnight) on January 1, 1970.</p>
   *             </dd>
   *             <dt>AFTER_CREATED_AT</dt>
   *             <dd>
   *                <p>The value for the filter is the time that's after the job was created. This corresponds to the
   *        <code>createdAt</code> value. The value is a string representation of the number of milliseconds since 00:00:00
   *       UTC (midnight) on January 1, 1970.</p>
   *             </dd>
   *          </dl>
   */
  filters?: KeyValuesPair[];
}

/**
 * <p>An object that represents summary details of a container within a job.</p>
 */
export interface ContainerSummary {
  /**
   * <p>The exit code to return upon completion.</p>
   */
  exitCode?: number;

  /**
   * <p>A short (255 max characters) human-readable string to provide additional details for a running or stopped
   *    container.</p>
   */
  reason?: string;
}

/**
 * <p>An object that represents the properties of a node that's associated with a multi-node parallel job.</p>
 */
export interface NodePropertiesSummary {
  /**
   * <p>Specifies whether the current node is the main node for a multi-node parallel job.</p>
   */
  isMainNode?: boolean;

  /**
   * <p>The number of nodes that are associated with a multi-node parallel job.</p>
   */
  numNodes?: number;

  /**
   * <p>The node index for the node. Node index numbering begins at zero. This index is also available on the node with
   *    the <code>AWS_BATCH_JOB_NODE_INDEX</code> environment variable.</p>
   */
  nodeIndex?: number;
}

/**
 * <p>An object that represents summary details of a job.</p>
 */
export interface JobSummary {
  /**
   * <p>The Amazon Resource Name (ARN) of the job.</p>
   */
  jobArn?: string;

  /**
   * <p>The job ID.</p>
   */
  jobId: string | undefined;

  /**
   * <p>The job name.</p>
   */
  jobName: string | undefined;

  /**
   * <p>The Unix timestamp (in milliseconds) for when the job was created. For non-array jobs and parent array jobs,
   *    this is when the job entered the <code>SUBMITTED</code> state (at the time <a>SubmitJob</a> was called).
   *    For array child jobs, this is when the child job was spawned by its parent and entered the <code>PENDING</code>
   *    state.</p>
   */
  createdAt?: number;

  /**
   * <p>The current status for the job.</p>
   */
  status?: JobStatus | string;

  /**
   * <p>A short, human-readable string to provide more details for the current status of the job.</p>
   */
  statusReason?: string;

  /**
   * <p>The Unix timestamp for when the job was started. More specifically, it's when the job transitioned from the
   *    <code>STARTING</code> state to the <code>RUNNING</code> state.</p>
   */
  startedAt?: number;

  /**
   * <p>The Unix timestamp for when the job was stopped. More specifically, it's when the job transitioned from the
   *    <code>RUNNING</code> state to a terminal state, such as <code>SUCCEEDED</code> or <code>FAILED</code>.</p>
   */
  stoppedAt?: number;

  /**
   * <p>An object that represents the details of the container that's associated with the job.</p>
   */
  container?: ContainerSummary;

  /**
   * <p>The array properties of the job, if it's an array job.</p>
   */
  arrayProperties?: ArrayPropertiesSummary;

  /**
   * <p>The node properties for a single node in a job summary list.</p>
   *          <note>
   *             <p>This isn't applicable to jobs that are running on Fargate resources.</p>
   *          </note>
   */
  nodeProperties?: NodePropertiesSummary;

  /**
   * <p>The Amazon Resource Name (ARN) of the job definition.</p>
   */
  jobDefinition?: string;
}

export interface ListJobsResponse {
  /**
   * <p>A list of job summaries that match the request.</p>
   */
  jobSummaryList: JobSummary[] | undefined;

  /**
   * <p>The <code>nextToken</code> value to include in a future <code>ListJobs</code> request. When the results of a
   *     <code>ListJobs</code> request exceed <code>maxResults</code>, this value can be used to retrieve the next page of
   *    results. This value is <code>null</code> when there are no more results to return.</p>
   */
  nextToken?: string;
}

/**
 * <p>Contains the parameters for <code>ListSchedulingPolicies</code>.</p>
 */
export interface ListSchedulingPoliciesRequest {
  /**
   * <p>The maximum number of results that's returned by <code>ListSchedulingPolicies</code> in paginated output. When
   *    this parameter is used, <code>ListSchedulingPolicies</code> only returns <code>maxResults</code> results in a single
   *    page and a <code>nextToken</code> response element. You can see the remaining results of the initial request by
   *    sending another <code>ListSchedulingPolicies</code> request with the returned <code>nextToken</code> value. This
   *    value can be between 1 and 100. If this parameter isn't used,
   *     <code>ListSchedulingPolicies</code> returns up to 100 results and a <code>nextToken</code> value
   *    if applicable.</p>
   */
  maxResults?: number;

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
   */
  nextToken?: string;
}

/**
 * <p>An object that contains the details of a scheduling policy that's returned in a
 *    <code>ListSchedulingPolicy</code> action.</p>
 */
export interface SchedulingPolicyListingDetail {
  /**
   * <p>Amazon Resource Name (ARN) of the scheduling policy.</p>
   */
  arn: string | undefined;
}

export interface ListSchedulingPoliciesResponse {
  /**
   * <p>A list of scheduling policies that match the request.</p>
   */
  schedulingPolicies?: SchedulingPolicyListingDetail[];

  /**
   * <p>The <code>nextToken</code> value to include in a future <code>ListSchedulingPolicies</code> request. When the
   *    results of a <code>ListSchedulingPolicies</code> request exceed <code>maxResults</code>, this value can be used to
   *    retrieve the next page of results. This value is <code>null</code> when there are no more results to return.</p>
   */
  nextToken?: string;
}

/**
 * <p>Contains the parameters for <code>ListTagsForResource</code>.</p>
 */
export interface ListTagsForResourceRequest {
  /**
   * <p>The Amazon Resource Name (ARN) that identifies the resource that tags are listed for. Batch resources that support tags are compute environments, jobs, job definitions, job queues,
   *  and scheduling policies. ARNs for child jobs of array and multi-node parallel (MNP) jobs aren't supported.</p>
   */
  resourceArn: string | undefined;
}

export interface ListTagsForResourceResponse {
  /**
   * <p>The tags for the resource.</p>
   */
  tags?: Record<string, string>;
}

export enum JobDefinitionType {
  Container = "container",
  Multinode = "multinode",
}

/**
 * <p>Contains the parameters for <code>RegisterJobDefinition</code>.</p>
 */
export interface RegisterJobDefinitionRequest {
  /**
   * <p>The name of the job definition to register. It can be up to 128 letters long. It can contain uppercase and
   *    lowercase letters, numbers, hyphens (-), and underscores (_).</p>
   */
  jobDefinitionName: string | undefined;

  /**
   * <p>The type of job definition. For more information about multi-node parallel jobs, see <a href="https://docs.aws.amazon.com/batch/latest/userguide/multi-node-job-def.html">Creating a multi-node parallel job definition</a> in the
   *     <i>Batch User Guide</i>.</p>
   *          <note>
   *             <p>If the job is run on Fargate resources, then <code>multinode</code> isn't supported.</p>
   *          </note>
   */
  type: JobDefinitionType | string | undefined;

  /**
   * <p>Default parameter substitution placeholders to set in the job definition. Parameters are specified as a
   *    key-value pair mapping. Parameters in a <code>SubmitJob</code> request override any corresponding parameter defaults
   *    from the job definition.</p>
   */
  parameters?: Record<string, string>;

  /**
   * <p>The scheduling priority for jobs that are submitted with this job definition. This only affects jobs in job
   *    queues with a fair share policy. Jobs with a higher scheduling priority are scheduled before jobs with a lower
   *    scheduling priority.</p>
   *          <p>The minimum supported value is 0 and the maximum supported value is 9999.</p>
   */
  schedulingPriority?: number;

  /**
   * <p>An object with various properties specific to Amazon ECS based single-node container-based jobs. If the job
   *    definition's <code>type</code> parameter is <code>container</code>, then you must specify either
   *    <code>containerProperties</code> or <code>nodeProperties</code>. This must not be specified for Amazon EKS based job
   *    definitions.</p>
   *          <note>
   *             <p>If the job runs on Fargate resources, then you must not specify <code>nodeProperties</code>; use only
   *      <code>containerProperties</code>.</p>
   *          </note>
   */
  containerProperties?: ContainerProperties;

  /**
   * <p>An object with various properties specific to multi-node parallel jobs. If you specify node properties for a
   *    job, it becomes a multi-node parallel job. For more information, see <a href="https://docs.aws.amazon.com/batch/latest/userguide/multi-node-parallel-jobs.html">Multi-node Parallel Jobs</a> in the
   *    <i>Batch User Guide</i>. If the job definition's <code>type</code> parameter is <code>container</code>,
   *    then you must specify either <code>containerProperties</code> or <code>nodeProperties</code>.</p>
   *          <note>
   *             <p>If the job runs on Fargate resources, then you must not specify <code>nodeProperties</code>; use
   *     <code>containerProperties</code> instead.</p>
   *          </note>
   *          <note>
   *             <p>If the job runs on Amazon EKS resources, then you must not specify <code>nodeProperties</code>.</p>
   *          </note>
   */
  nodeProperties?: NodeProperties;

  /**
   * <p>The retry strategy to use for failed jobs that are submitted with this job definition. Any retry strategy that's
   *    specified during a <a>SubmitJob</a> operation overrides the retry strategy defined here. If a job is
   *    terminated due to a timeout, it isn't retried.</p>
   */
  retryStrategy?: RetryStrategy;

  /**
   * <p>Specifies whether to propagate the tags from the job or job definition to the corresponding Amazon ECS task. If no
   *    value is specified, the tags are not propagated. Tags can only be propagated to the tasks during task creation. For
   *    tags with the same name, job tags are given priority over job definitions tags. If the total number of combined tags
   *    from the job and job definition is over 50, the job is moved to the <code>FAILED</code> state.</p>
   *          <note>
   *             <p>If the job runs on Amazon EKS resources, then you must not specify <code>propagateTags</code>.</p>
   *          </note>
   */
  propagateTags?: boolean;

  /**
   * <p>The timeout configuration for jobs that are submitted with this job definition, after which Batch terminates
   *    your jobs if they have not finished. If a job is terminated due to a timeout, it isn't retried. The minimum value for
   *    the timeout is 60 seconds. Any timeout configuration that's specified during a <a>SubmitJob</a> operation
   *    overrides the timeout configuration defined here. For more information, see <a href="https://docs.aws.amazon.com/batch/latest/userguide/job_timeouts.html">Job Timeouts</a> in the <i>Batch User Guide</i>.</p>
   */
  timeout?: JobTimeout;

  /**
   * <p>The tags that you apply to the job definition to help you categorize and organize your resources. Each tag
   *    consists of a key and an optional value. For more information, see <a href="https://docs.aws.amazon.com/batch/latest/userguide/using-tags.html">Tagging Amazon Web Services Resources</a> in <i>Batch User Guide</i>.</p>
   */
  tags?: Record<string, string>;

  /**
   * <p>The platform capabilities required by the job definition. If no value is specified, it defaults to
   *    <code>EC2</code>. To run the job on Fargate resources, specify <code>FARGATE</code>.</p>
   *          <note>
   *             <p>If the job runs on Amazon EKS resources, then you must not specify <code>platformCapabilities</code>.</p>
   *          </note>
   */
  platformCapabilities?: (PlatformCapability | string)[];

  /**
   * <p>An object with various properties that are specific to Amazon EKS based jobs. This must not be specified for Amazon ECS
   *    based job definitions.</p>
   */
  eksProperties?: EksProperties;
}

export interface RegisterJobDefinitionResponse {
  /**
   * <p>The name of the job definition.</p>
   */
  jobDefinitionName: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the job definition.</p>
   */
  jobDefinitionArn: string | undefined;

  /**
   * <p>The revision of the job definition.</p>
   */
  revision: number | undefined;
}

/**
 * <p>The overrides that should be sent to a container.</p>
 */
export interface ContainerOverrides {
  /**
   * @deprecated
   *
   * <p>This parameter is deprecated, use <code>resourceRequirements</code> to override the <code>vcpus</code> parameter
   *    that's set in the job definition. It's not supported for jobs running on Fargate resources. For jobs that run on EC2
   *    resources, it overrides the <code>vcpus</code> parameter set in the job definition, but doesn't override any vCPU
   *    requirement specified in the <code>resourceRequirements</code> structure in the job definition. To override vCPU
   *    requirements that are specified in the <code>resourceRequirements</code> structure in the job definition,
   *    <code>resourceRequirements</code> must be specified in the <code>SubmitJob</code> request, with <code>type</code> set
   *    to <code>VCPU</code> and <code>value</code> set to the new value. For more information, see <a href="https://docs.aws.amazon.com/batch/latest/userguide/troubleshooting.html#override-resource-requirements">Can't override job
   *    definition resource requirements</a> in the <i>Batch User Guide</i>.</p>
   */
  vcpus?: number;

  /**
   * @deprecated
   *
   * <p>This parameter is deprecated, use <code>resourceRequirements</code> to override the memory requirements
   *    specified in the job definition. It's not supported for jobs running on Fargate resources. For jobs that run on EC2
   *    resources, it overrides the <code>memory</code> parameter set in the job definition, but doesn't override any memory
   *    requirement that's specified in the <code>resourceRequirements</code> structure in the job definition. To override
   *    memory requirements that are specified in the <code>resourceRequirements</code> structure in the job definition,
   *    <code>resourceRequirements</code> must be specified in the <code>SubmitJob</code> request, with <code>type</code> set
   *    to <code>MEMORY</code> and <code>value</code> set to the new value. For more information, see <a href="https://docs.aws.amazon.com/batch/latest/userguide/troubleshooting.html#override-resource-requirements">Can't override job
   *    definition resource requirements</a> in the <i>Batch User Guide</i>.</p>
   */
  memory?: number;

  /**
   * <p>The command to send to the container that overrides the default command from the Docker image or the job
   *    definition.</p>
   */
  command?: string[];

  /**
   * <p>The instance type to use for a multi-node parallel job.</p>
   *          <note>
   *             <p>This parameter isn't applicable to single-node container jobs or jobs that run on Fargate resources, and
   *     shouldn't be provided.</p>
   *          </note>
   */
  instanceType?: string;

  /**
   * <p>The environment variables to send to the container. You can add new environment variables, which are added to
   *    the container at launch, or you can override the existing environment variables from the Docker image or the job
   *    definition.</p>
   *          <note>
   *             <p>Environment variables cannot start with "<code>AWS_BATCH</code>". This naming
   *  convention is reserved for variables that Batch sets.</p>
   *          </note>
   */
  environment?: KeyValuePair[];

  /**
   * <p>The type and amount of resources to assign to a container. This overrides the settings in the job definition.
   *    The supported resources include <code>GPU</code>, <code>MEMORY</code>, and <code>VCPU</code>.</p>
   */
  resourceRequirements?: ResourceRequirement[];
}

/**
 * <p>Object representing any Kubernetes overrides to a job definition that's used in a <a>SubmitJob</a> API
 *    operation.</p>
 */
export interface EksContainerOverride {
  /**
   * <p>The override of the Docker image that's used to start the container.</p>
   */
  image?: string;

  /**
   * <p>The command to send to the container that overrides the default command from the Docker image or the job
   *    definition.</p>
   */
  command?: string[];

  /**
   * <p>The arguments to the entrypoint to send to the container that overrides the default arguments from the Docker
   *    image or the job definition. For more information, see <a href="https://docs.docker.com/engine/reference/builder/#cmd">CMD</a> in the <i>Dockerfile
   *    reference</i> and <a href="https://kubernetes.io/docs/tasks/inject-data-application/define-command-argument-container/">Define a command an
   *    arguments for a pod</a> in the <i>Kubernetes documentation</i>.</p>
   */
  args?: string[];

  /**
   * <p>The environment variables to send to the container. You can add new environment variables, which are added to
   *    the container at launch. Or, you can override the existing environment variables from the Docker image or the job
   *    definition.</p>
   *          <note>
   *             <p>Environment variables cannot start with "<code>AWS_BATCH</code>". This naming
   *  convention is reserved for variables that Batch sets.</p>
   *          </note>
   */
  env?: EksContainerEnvironmentVariable[];

  /**
   * <p>The type and amount of resources to assign to a container. These override the settings in the job definition.
   *    The supported resources include <code>memory</code>, <code>cpu</code>, and <code>nvidia.com/gpu</code>. For more
   *    information, see <a href="https://kubernetes.io/docs/concepts/configuration/manage-resources-containers/">Resource
   *    management for pods and containers</a> in the <i>Kubernetes documentation</i>.</p>
   */
  resources?: EksContainerResourceRequirements;
}

/**
 * <p>An object that contains overrides for the Kubernetes pod properties of a job.</p>
 */
export interface EksPodPropertiesOverride {
  /**
   * <p>The overrides for the container that's used on the Amazon EKS pod.</p>
   */
  containers?: EksContainerOverride[];
}

/**
 * <p>An object that contains overrides for the Kubernetes resources of a job.</p>
 */
export interface EksPropertiesOverride {
  /**
   * <p>The overrides for the Kubernetes pod resources of a job.</p>
   */
  podProperties?: EksPodPropertiesOverride;
}

/**
 * <p>The object that represents any node overrides to a job definition that's used in a <a>SubmitJob</a>
 *    API operation.</p>
 */
export interface NodePropertyOverride {
  /**
   * <p>The range of nodes, using node index values, that's used to override. A range of <code>0:3</code> indicates
   *    nodes with index values of <code>0</code> through <code>3</code>. If the starting range value is omitted
   *    (<code>:n</code>), then <code>0</code> is used to start the range. If the ending range value is omitted
   *    (<code>n:</code>), then the highest possible node index is used to end the range.</p>
   */
  targetNodes: string | undefined;

  /**
   * <p>The overrides that are sent to a node range.</p>
   */
  containerOverrides?: ContainerOverrides;
}

/**
 * <p>An object that represents any node overrides to a job definition that's used in a <a>SubmitJob</a>
 *    API operation.</p>
 *          <note>
 *             <p>This parameter isn't applicable to jobs that are running on Fargate resources. Don't provide it for these
 *     jobs. Rather, use <code>containerOverrides</code> instead.</p>
 *          </note>
 */
export interface NodeOverrides {
  /**
   * <p>The number of nodes to use with a multi-node parallel job. This value overrides the number of nodes that are
   *    specified in the job definition. To use this override, you must meet the following conditions:</p>
   *          <ul>
   *             <li>
   *                <p>There must be at least one node range in your job definition that has an open upper boundary, such as
   *      <code>:</code> or <code>n:</code>.</p>
   *             </li>
   *             <li>
   *                <p>The lower boundary of the node range that's specified in the job definition must be fewer than the number of
   *      nodes specified in the override.</p>
   *             </li>
   *             <li>
   *                <p>The main node index that's specified in the job definition must be fewer than the number of nodes specified in
   *      the override.</p>
   *             </li>
   *          </ul>
   */
  numNodes?: number;

  /**
   * <p>The node property overrides for the job.</p>
   */
  nodePropertyOverrides?: NodePropertyOverride[];
}

/**
 * <p>Contains the parameters for <code>SubmitJob</code>.</p>
 */
export interface SubmitJobRequest {
  /**
   * <p>The name of the job. It can be up to 128 letters long. The first character must be alphanumeric, can contain
   *    uppercase and lowercase letters, numbers, hyphens (-), and underscores (_).</p>
   */
  jobName: string | undefined;

  /**
   * <p>The job queue where the job is submitted. You can specify either the name or the Amazon Resource Name (ARN) of the queue.</p>
   */
  jobQueue: string | undefined;

  /**
   * <p>The share identifier for the job. If the job queue doesn't have a scheduling policy, then this parameter must
   *    not be specified. If the job queue has a scheduling policy, then this parameter must be specified.</p>
   */
  shareIdentifier?: string;

  /**
   * <p>The scheduling priority for the job. This only affects jobs in job queues with a fair share policy. Jobs with a
   *    higher scheduling priority are scheduled before jobs with a lower scheduling priority. This overrides any scheduling
   *    priority in the job definition.</p>
   *          <p>The minimum supported value is 0 and the maximum supported value is 9999.</p>
   */
  schedulingPriorityOverride?: number;

  /**
   * <p>The array properties for the submitted job, such as the size of the array. The array size can be between 2 and
   *    10,000. If you specify array properties for a job, it becomes an array job. For more information, see <a href="https://docs.aws.amazon.com/batch/latest/userguide/array_jobs.html">Array Jobs</a> in the
   *    <i>Batch User Guide</i>.</p>
   */
  arrayProperties?: ArrayProperties;

  /**
   * <p>A list of dependencies for the job. A job can depend upon a maximum of 20 jobs. You can specify a
   *     <code>SEQUENTIAL</code> type dependency without specifying a job ID for array jobs so that each child array job
   *    completes sequentially, starting at index 0. You can also specify an <code>N_TO_N</code> type dependency with a job
   *    ID for array jobs. In that case, each index child of this job must wait for the corresponding index child of each
   *    dependency to complete before it can begin.</p>
   */
  dependsOn?: JobDependency[];

  /**
   * <p>The job definition used by this job. This value can be one of <code>name</code>, <code>name:revision</code>, or
   *    the Amazon Resource Name (ARN) for the job definition. If <code>name</code> is specified without a revision then the latest active
   *    revision is used.</p>
   */
  jobDefinition: string | undefined;

  /**
   * <p>Additional parameters passed to the job that replace parameter substitution placeholders that are set in the job
   *    definition. Parameters are specified as a key and value pair mapping. Parameters in a <code>SubmitJob</code> request
   *    override any corresponding parameter defaults from the job definition.</p>
   */
  parameters?: Record<string, string>;

  /**
   * <p>An object with various properties that override the defaults for the job definition that specify the name of a
   *    container in the specified job definition and the overrides it should receive. You can override the default command
   *    for a container, which is specified in the job definition or the Docker image, with a <code>command</code> override.
   *    You can also override existing environment variables on a container or add new environment variables to it with an
   *    <code>environment</code> override.</p>
   */
  containerOverrides?: ContainerOverrides;

  /**
   * <p>A list of node overrides in JSON format that specify the node range to target and the container overrides for
   *    that node range.</p>
   *          <note>
   *             <p>This parameter isn't applicable to jobs that are running on Fargate resources; use
   *      <code>containerOverrides</code> instead.</p>
   *          </note>
   */
  nodeOverrides?: NodeOverrides;

  /**
   * <p>The retry strategy to use for failed jobs from this <a>SubmitJob</a> operation. When a retry strategy
   *    is specified here, it overrides the retry strategy defined in the job definition.</p>
   */
  retryStrategy?: RetryStrategy;

  /**
   * <p>Specifies whether to propagate the tags from the job or job definition to the corresponding Amazon ECS task. If no
   *    value is specified, the tags aren't propagated. Tags can only be propagated to the tasks during task creation. For
   *    tags with the same name, job tags are given priority over job definitions tags. If the total number of combined tags
   *    from the job and job definition is over 50, the job is moved to the <code>FAILED</code> state. When specified, this
   *    overrides the tag propagation setting in the job definition.</p>
   */
  propagateTags?: boolean;

  /**
   * <p>The timeout configuration for this <a>SubmitJob</a> operation. You can specify a timeout duration
   *    after which Batch terminates your jobs if they haven't finished. If a job is terminated due to a timeout, it isn't
   *    retried. The minimum value for the timeout is 60 seconds. This configuration overrides any timeout configuration
   *    specified in the job definition. For array jobs, child jobs have the same timeout configuration as the parent job.
   *    For more information, see <a href="https://docs.aws.amazon.com/AmazonECS/latest/developerguide/job_timeouts.html">Job
   *     Timeouts</a> in the <i>Amazon Elastic Container Service Developer Guide</i>.</p>
   */
  timeout?: JobTimeout;

  /**
   * <p>The tags that you apply to the job request to help you categorize and organize your resources. Each tag consists
   *    of a key and an optional value. For more information, see <a href="https://docs.aws.amazon.com/general/latest/gr/aws_tagging.html">Tagging Amazon Web Services Resources</a> in <i>Amazon Web Services General
   *     Reference</i>.</p>
   */
  tags?: Record<string, string>;

  /**
   * <p>An object that can only be specified for jobs that are run on Amazon EKS resources with various properties that
   *    override defaults for the job definition.</p>
   */
  eksPropertiesOverride?: EksPropertiesOverride;
}

export interface SubmitJobResponse {
  /**
   * <p>The Amazon Resource Name (ARN) for the job.</p>
   */
  jobArn?: string;

  /**
   * <p>The name of the job.</p>
   */
  jobName: string | undefined;

  /**
   * <p>The unique identifier for the job.</p>
   */
  jobId: string | undefined;
}

/**
 * <p>Contains the parameters for <code>TagResource</code>.</p>
 */
export interface TagResourceRequest {
  /**
   * <p>The Amazon Resource Name (ARN) of the resource that tags are added to. Batch resources that support tags are compute environments, jobs, job definitions, job queues,
   *  and scheduling policies. ARNs for child jobs of array and multi-node parallel (MNP) jobs aren't supported.</p>
   */
  resourceArn: string | undefined;

  /**
   * <p>The tags that you apply to the resource to help you categorize and organize your resources. Each tag consists of
   *    a key and an optional value. For more information, see <a href="https://docs.aws.amazon.com/general/latest/gr/aws_tagging.html">Tagging Amazon Web Services Resources</a> in <i>Amazon Web Services General
   *     Reference</i>.</p>
   */
  tags: Record<string, string> | undefined;
}

export interface TagResourceResponse {}

/**
 * <p>Contains the parameters for <code>TerminateJob</code>.</p>
 */
export interface TerminateJobRequest {
  /**
   * <p>The Batch job ID of the job to terminate.</p>
   */
  jobId: string | undefined;

  /**
   * <p>A message to attach to the job that explains the reason for canceling it. This message is returned by future
   *     <a>DescribeJobs</a> operations on the job. This message is also recorded in the Batch activity
   *    logs.</p>
   */
  reason: string | undefined;
}

export interface TerminateJobResponse {}

/**
 * <p>Contains the parameters for <code>UntagResource</code>.</p>
 */
export interface UntagResourceRequest {
  /**
   * <p>The Amazon Resource Name (ARN) of the resource from which to delete tags. Batch resources that support tags are compute environments, jobs, job definitions, job queues,
   *  and scheduling policies. ARNs for child jobs of array and multi-node parallel (MNP) jobs aren't supported.</p>
   */
  resourceArn: string | undefined;

  /**
   * <p>The keys of the tags to be removed.</p>
   */
  tagKeys: string[] | undefined;
}

export interface UntagResourceResponse {}

export enum CRUpdateAllocationStrategy {
  BEST_FIT_PROGRESSIVE = "BEST_FIT_PROGRESSIVE",
  SPOT_CAPACITY_OPTIMIZED = "SPOT_CAPACITY_OPTIMIZED",
}

/**
 * <p>An object that represents the attributes of a compute environment that can be updated. For more information, see
 *    <a href="https://docs.aws.amazon.com/batch/latest/userguide/updating-compute-environments.html">Updating compute environments</a>
 *    in the <i>Batch User Guide</i>.</p>
 */
export interface ComputeResourceUpdate {
  /**
   * <p>The minimum number of Amazon EC2 vCPUs that an environment should maintain (even if the compute environment is
   *    <code>DISABLED</code>).</p>
   *          <note>
   *             <p>This parameter isn't applicable to jobs that are running on Fargate resources. Don't specify it.</p>
   *          </note>
   */
  minvCpus?: number;

  /**
   * <p>The maximum number of Amazon EC2 vCPUs that an environment can reach.</p>
   *          <note>
   *             <p>With both <code>BEST_FIT_PROGRESSIVE</code> and <code>SPOT_CAPACITY_OPTIMIZED</code> allocation strategies
   *     using On-Demand or Spot Instances, and the <code>BEST_FIT</code> strategy using Spot Instances, Batch might need to exceed <code>maxvCpus</code> to meet your capacity requirements. In this event, Batch never
   *     exceeds <code>maxvCpus</code> by more than a single instance. That is, no more than a single instance from among
   *     those specified in your compute environment.</p>
   *          </note>
   */
  maxvCpus?: number;

  /**
   * <p>The desired number of Amazon EC2 vCPUS in the compute environment. Batch modifies this value between the minimum
   *    and maximum values based on job queue demand.</p>
   *          <note>
   *             <p>This parameter isn't applicable to jobs that are running on Fargate resources. Don't specify it.</p>
   *          </note>
   *          <note>
   *             <p>Batch doesn't support changing the desired number of vCPUs of an existing compute environment. Don't specify
   *     this parameter for compute environments using Amazon EKS clusters.</p>
   *          </note>
   */
  desiredvCpus?: number;

  /**
   * <p>The VPC subnets where the compute resources are launched. Fargate compute resources can
   *    contain up to 16 subnets. For Fargate compute resources, providing an empty list will be
   *    handled as if this parameter wasn't specified and no change is made. For EC2 compute resources,
   *    providing an empty list removes the VPC subnets from the compute resource. For more information,
   *    see <a href="https://docs.aws.amazon.com/vpc/latest/userguide/VPC_Subnets.html">VPCs and
   *     subnets</a> in the <i>Amazon VPC User Guide</i>.</p>
   *          <p>When updating a compute environment, changing the VPC subnets requires an infrastructure
   *    update of the compute environment. For more information, see <a href="https://docs.aws.amazon.com/batch/latest/userguide/updating-compute-environments.html">Updating compute environments</a> in the
   *     <i>Batch User Guide</i>.</p>
   *          <note>
   *             <p>Batch on Amazon EC2 and Batch on Amazon EKS support Local Zones. For more information, see
   *     <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/using-regions-availability-zones.html#concepts-local-zones"> Local Zones</a> in the <i>Amazon EC2 User Guide for Linux Instances</i>, <a href="https://docs.aws.amazon.com/eks/latest/userguide/local-zones.html">Amazon EKS and Amazon Web Services Local
   *       Zones</a> in the <i>Amazon EKS User Guide</i> and <a href="https://docs.aws.amazon.com/AmazonECS/latest/developerguide/cluster-regions-zones.html#clusters-local-zones">
   *        Amazon ECS clusters in Local Zones, Wavelength Zones, and Amazon Web Services Outposts</a> in the
   *     <i>Amazon ECS Developer Guide</i>.</p>
   *             <p>Batch on Fargate doesn't currently support Local Zones.</p>
   *          </note>
   */
  subnets?: string[];

  /**
   * <p>The Amazon EC2 security groups that are associated with instances launched in the compute environment. This parameter
   *    is required for Fargate compute resources, where it can contain up to 5 security groups. For Fargate compute
   *    resources, providing an empty list is handled as if this parameter wasn't specified and no change is made. For EC2
   *    compute resources, providing an empty list removes the security groups from the compute resource.</p>
   *          <p>When updating a compute environment, changing the EC2 security groups requires an infrastructure update of the
   *    compute environment. For more information, see <a href="https://docs.aws.amazon.com/batch/latest/userguide/updating-compute-environments.html">Updating compute environments</a> in the
   *    <i>Batch User Guide</i>.</p>
   */
  securityGroupIds?: string[];

  /**
   * <p>The allocation strategy to use for the compute resource if there's not enough instances of the best fitting
   *    instance type that can be allocated. This might be because of availability of the instance type in the Region or
   *    <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/ec2-resource-limits.html">Amazon EC2 service limits</a>. For
   *    more information, see <a href="https://docs.aws.amazon.com/batch/latest/userguide/allocation-strategies.html">Allocation
   *    strategies</a> in the <i>Batch User Guide</i>.</p>
   *          <p>When updating a compute environment, changing the allocation strategy requires an infrastructure update of the
   *    compute environment. For more information, see <a href="https://docs.aws.amazon.com/batch/latest/userguide/updating-compute-environments.html">Updating compute environments</a> in the
   *    <i>Batch User Guide</i>. <code>BEST_FIT</code> isn't supported when updating a compute
   *    environment.</p>
   *          <note>
   *             <p>This parameter isn't applicable to jobs that are running on Fargate resources. Don't specify it.</p>
   *          </note>
   *          <dl>
   *             <dt>BEST_FIT_PROGRESSIVE</dt>
   *             <dd>
   *                <p>Batch selects additional instance types that are large enough to meet the requirements of the jobs in the
   *       queue. Its preference is for instance types with lower cost vCPUs. If additional instances of the previously
   *       selected instance types aren't available, Batch selects new instance types.</p>
   *             </dd>
   *             <dt>SPOT_CAPACITY_OPTIMIZED</dt>
   *             <dd>
   *                <p>Batch selects one or more instance types that are large enough to meet the requirements of the jobs in the
   *       queue. Its preference is for instance types that are less likely to be interrupted. This allocation strategy is
   *       only available for Spot Instance compute resources.</p>
   *             </dd>
   *          </dl>
   *          <p>With both <code>BEST_FIT_PROGRESSIVE</code> and <code>SPOT_CAPACITY_OPTIMIZED</code> strategies using On-Demand
   *    or Spot Instances, and the <code>BEST_FIT</code> strategy using Spot Instances, Batch might need to exceed
   *     <code>maxvCpus</code> to meet your capacity requirements. In this event, Batch never exceeds <code>maxvCpus</code>
   *    by more than a single instance.</p>
   */
  allocationStrategy?: CRUpdateAllocationStrategy | string;

  /**
   * <p>The instances types that can be launched. You can specify instance families to launch any instance type within
   *    those families (for example, <code>c5</code> or <code>p3</code>), or you can specify specific sizes within a family
   *    (such as <code>c5.8xlarge</code>). You can also choose <code>optimal</code> to select instance types (from the C4,
   *    M4, and R4 instance families) that match the demand of your job queues.</p>
   *          <p>When updating a compute environment, changing this setting requires an infrastructure update of the compute
   *    environment. For more information, see <a href="https://docs.aws.amazon.com/batch/latest/userguide/updating-compute-environments.html">Updating compute environments</a> in the <i>Batch User Guide</i>.</p>
   *          <note>
   *             <p>This parameter isn't applicable to jobs that are running on Fargate resources. Don't specify it.</p>
   *          </note>
   *          <note>
   *             <p>When you create a compute environment, the instance types that you select for the compute environment must
   *     share the same architecture. For example, you can't mix x86 and ARM instances in the same compute
   *     environment.</p>
   *          </note>
   *          <note>
   *             <p>Currently, <code>optimal</code> uses instance types from the C4, M4, and R4 instance families. In Regions that
   *     don't have instance types from those instance families, instance types from the C5, M5, and R5 instance families are
   *     used.</p>
   *          </note>
   */
  instanceTypes?: string[];

  /**
   * <p>The Amazon EC2 key pair that's used for instances launched in the compute environment. You can use this key pair to
   *    log in to your instances with SSH. To remove the Amazon EC2 key pair, set this value to an empty string.</p>
   *          <p>When updating a compute environment, changing the EC2 key pair requires an infrastructure update of the compute
   *    environment. For more information, see <a href="https://docs.aws.amazon.com/batch/latest/userguide/updating-compute-environments.html">Updating compute environments</a> in the <i>Batch User Guide</i>.</p>
   *          <note>
   *             <p>This parameter isn't applicable to jobs that are running on Fargate resources. Don't specify it.</p>
   *          </note>
   */
  ec2KeyPair?: string;

  /**
   * <p>The Amazon ECS instance profile applied to Amazon EC2 instances in a compute environment. You can specify the short name
   *    or full Amazon Resource Name (ARN) of an instance profile. For example, <code>
   *                <i>ecsInstanceRole</i>
   *             </code> or
   *    <code>arn:aws:iam::<i><aws_account_id></i>:instance-profile/<i>ecsInstanceRole</i>
   *             </code>.
   *    For more information, see <a href="https://docs.aws.amazon.com/batch/latest/userguide/instance_IAM_role.html">Amazon ECS instance
   *    role</a> in the <i>Batch User Guide</i>.</p>
   *          <p>When updating a compute environment, changing this setting requires an infrastructure update of the compute
   *    environment. For more information, see <a href="https://docs.aws.amazon.com/batch/latest/userguide/updating-compute-environments.html">Updating compute environments</a> in the <i>Batch User Guide</i>.</p>
   *          <note>
   *             <p>This parameter isn't applicable to jobs that are running on Fargate resources. Don't specify it.</p>
   *          </note>
   */
  instanceRole?: string;

  /**
   * <p>Key-value pair tags to be applied to EC2 resources that are launched in the compute environment. For Batch,
   *    these take the form of <code>"String1": "String2"</code>, where <code>String1</code> is the tag key and
   *    <code>String2</code> is the tag value-for example, <code>{ "Name": "Batch Instance - C4OnDemand" }</code>. This is
   *    helpful for recognizing your Batch instances in the Amazon EC2 console. These tags aren't seen when using the Batch
   *    <code>ListTagsForResource</code> API operation.</p>
   *          <p>When updating a compute environment, changing this setting requires an infrastructure update of the compute
   *    environment. For more information, see <a href="https://docs.aws.amazon.com/batch/latest/userguide/updating-compute-environments.html">Updating compute environments</a> in the <i>Batch User Guide</i>.</p>
   *          <note>
   *             <p>This parameter isn't applicable to jobs that are running on Fargate resources. Don't specify it.</p>
   *          </note>
   */
  tags?: Record<string, string>;

  /**
   * <p>The Amazon EC2 placement group to associate with your compute resources. If you intend to submit multi-node parallel
   *    jobs to your compute environment, you should consider creating a cluster placement group and associate it with your
   *    compute resources. This keeps your multi-node parallel job on a logical grouping of instances within a single
   *    Availability Zone with high network flow potential. For more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/placement-groups.html">Placement groups</a> in the <i>Amazon EC2 User Guide for
   *    Linux Instances</i>.</p>
   *          <p>When updating a compute environment, changing the placement group requires an infrastructure update of the
   *    compute environment. For more information, see <a href="https://docs.aws.amazon.com/batch/latest/userguide/updating-compute-environments.html">Updating compute environments</a> in the
   *    <i>Batch User Guide</i>.</p>
   *          <note>
   *             <p>This parameter isn't applicable to jobs that are running on Fargate resources. Don't specify it.</p>
   *          </note>
   */
  placementGroup?: string;

  /**
   * <p>The maximum percentage that a Spot Instance price can be when compared with the On-Demand price for that
   *    instance type before instances are launched. For example, if your maximum percentage is 20%, the Spot price must be
   *    less than 20% of the current On-Demand price for that Amazon EC2 instance. You always pay the lowest (market) price and
   *    never more than your maximum percentage. For
   *    most use cases, we recommend leaving this field empty.</p>
   *          <p>When updating a compute environment, changing the bid percentage requires an infrastructure update of the
   *    compute environment. For more information, see <a href="https://docs.aws.amazon.com/batch/latest/userguide/updating-compute-environments.html">Updating compute environments</a> in the
   *    <i>Batch User Guide</i>.</p>
   *          <note>
   *             <p>This parameter isn't applicable to jobs that are running on Fargate resources. Don't specify it.</p>
   *          </note>
   */
  bidPercentage?: number;

  /**
   * <p>The updated launch template to use for your compute resources. You must specify either the launch template ID or
   *    launch template name in the request, but not both. For more information, see <a href="https://docs.aws.amazon.com/batch/latest/userguide/launch-templates.html">Launch template support</a> in the <i>Batch User Guide</i>.
   *    To remove the custom launch template and use the default launch template, set <code>launchTemplateId</code> or
   *    <code>launchTemplateName</code> member of the launch template specification to an empty string. Removing the launch
   *    template from a compute environment will not remove the AMI specified in the launch template. In order to update the
   *    AMI specified in a launch template, the <code>updateToLatestImageVersion</code> parameter must be set to
   *    <code>true</code>.</p>
   *          <p>When updating a compute environment, changing the launch template requires an infrastructure update of the
   *    compute environment. For more information, see <a href="https://docs.aws.amazon.com/batch/latest/userguide/updating-compute-environments.html">Updating compute environments</a> in the
   *    <i>Batch User Guide</i>.</p>
   *          <note>
   *             <p>This parameter isn't applicable to jobs that are running on Fargate resources. Don't specify it.</p>
   *          </note>
   */
  launchTemplate?: LaunchTemplateSpecification;

  /**
   * <p>Provides information used to select Amazon Machine Images (AMIs) for EC2 instances in the compute environment.
   *    If <code>Ec2Configuration</code> isn't specified, the default is <code>ECS_AL2</code>.</p>
   *          <p>When updating a compute environment, changing this setting requires an infrastructure update of the compute
   *    environment. For more information, see <a href="https://docs.aws.amazon.com/batch/latest/userguide/updating-compute-environments.html">Updating compute environments</a> in the <i>Batch User Guide</i>. To remove the EC2 configuration
   *    and any custom AMI ID specified in <code>imageIdOverride</code>, set this value to an empty string.</p>
   *          <p>One or two values can be provided.</p>
   *          <note>
   *             <p>This parameter isn't applicable to jobs that are running on Fargate resources. Don't specify it.</p>
   *          </note>
   */
  ec2Configuration?: Ec2Configuration[];

  /**
   * <p>Specifies whether the AMI ID is updated to the latest one that's supported by Batch when the compute
   *    environment has an infrastructure update. The default value is <code>false</code>.</p>
   *          <note>
   *             <p>An AMI ID can either be specified in the <code>imageId</code> or <code>imageIdOverride</code> parameters or be
   *     determined by the launch template that's specified in the <code>launchTemplate</code> parameter. If an AMI ID is
   *     specified any of these ways, this parameter is ignored. For more information about to update AMI IDs during an
   *     infrastructure update, see <a href="https://docs.aws.amazon.com/batch/latest/userguide/updating-compute-environments.html#updating-compute-environments-ami">Updating the AMI ID</a> in
   *     the <i>Batch User Guide</i>.</p>
   *          </note>
   *          <p>When updating a compute environment, changing this setting requires an infrastructure update of the compute
   *    environment. For more information, see <a href="https://docs.aws.amazon.com/batch/latest/userguide/updating-compute-environments.html">Updating compute environments</a> in the <i>Batch User Guide</i>.</p>
   */
  updateToLatestImageVersion?: boolean;

  /**
   * <p>The type of compute environment: <code>EC2</code>, <code>SPOT</code>, <code>FARGATE</code>, or
   *    <code>FARGATE_SPOT</code>. For more information, see <a href="https://docs.aws.amazon.com/batch/latest/userguide/compute_environments.html">Compute environments</a> in the
   *    <i>Batch User Guide</i>.</p>
   *          <p> If you choose <code>SPOT</code>, you must also specify an Amazon EC2 Spot Fleet role with the
   *    <code>spotIamFleetRole</code> parameter. For more information, see <a href="https://docs.aws.amazon.com/batch/latest/userguide/spot_fleet_IAM_role.html">Amazon EC2 spot fleet role</a> in the
   *    <i>Batch User Guide</i>.</p>
   *          <p>When updating a compute environment, changing the type of a compute environment requires an infrastructure
   *    update of the compute environment. For more information, see <a href="https://docs.aws.amazon.com/batch/latest/userguide/updating-compute-environments.html">Updating compute environments</a> in the
   *    <i>Batch User Guide</i>.</p>
   */
  type?: CRType | string;

  /**
   * <p>The Amazon Machine Image (AMI) ID used for instances launched in the compute environment. This parameter is
   *    overridden by the <code>imageIdOverride</code> member of the <code>Ec2Configuration</code> structure. To remove the
   *    custom AMI ID and use the default AMI ID, set this value to an empty string.</p>
   *          <p>When updating a compute environment, changing the AMI ID requires an infrastructure update of the compute
   *    environment. For more information, see <a href="https://docs.aws.amazon.com/batch/latest/userguide/updating-compute-environments.html">Updating compute environments</a> in the <i>Batch User Guide</i>.</p>
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
   */
  imageId?: string;
}

/**
 * <p>Contains the parameters for <code>UpdateComputeEnvironment</code>.</p>
 */
export interface UpdateComputeEnvironmentRequest {
  /**
   * <p>The name or full Amazon Resource Name (ARN) of the compute environment to update.</p>
   */
  computeEnvironment: string | undefined;

  /**
   * <p>The state of the compute environment. Compute environments in the <code>ENABLED</code> state can accept jobs
   *    from a queue and scale in or out automatically based on the workload demand of its associated queues.</p>
   *          <p>If the state is <code>ENABLED</code>, then the Batch scheduler can attempt to place jobs from an associated
   *    job queue on the compute resources within the environment. If the compute environment is managed, then it can scale
   *    its instances out or in automatically, based on the job queue demand.</p>
   *          <p>If the state is <code>DISABLED</code>, then the Batch scheduler doesn't attempt to place jobs within the
   *    environment. Jobs in a <code>STARTING</code> or <code>RUNNING</code> state continue to progress normally. Managed
   *    compute environments in the <code>DISABLED</code> state don't scale out. However, they scale in to
   *     <code>minvCpus</code> value after instances become idle.</p>
   */
  state?: CEState | string;

  /**
   * <p>The maximum number of vCPUs expected to be used for an unmanaged compute environment. Don't specify this
   *    parameter for a managed compute environment. This parameter is only used for fair share scheduling to reserve vCPU
   *    capacity for new share identifiers. If this parameter isn't provided for a fair share job queue, no vCPU capacity
   *    is reserved.</p>
   */
  unmanagedvCpus?: number;

  /**
   * <p>Details of the compute resources managed by the compute environment. Required for a managed compute environment.
   *    For more information, see <a href="https://docs.aws.amazon.com/batch/latest/userguide/compute_environments.html">Compute
   *     Environments</a> in the <i>Batch User Guide</i>.</p>
   */
  computeResources?: ComputeResourceUpdate;

  /**
   * <p>The full Amazon Resource Name (ARN) of the IAM role that allows Batch to make calls to other Amazon Web Services services on your behalf.
   *    For more information, see <a href="https://docs.aws.amazon.com/batch/latest/userguide/service_IAM_role.html">Batch service IAM
   *     role</a> in the <i>Batch User Guide</i>.</p>
   *          <important>
   *             <p>If the compute environment has a service-linked role, it can't be changed to use a regular IAM role.
   *     Likewise, if the compute environment has a regular IAM role, it can't be changed to use a service-linked role. To
   *     update the parameters for the compute environment that require an infrastructure update to change, the <b>AWSServiceRoleForBatch</b> service-linked role must be used. For more information, see
   *      <a href="https://docs.aws.amazon.com/batch/latest/userguide/updating-compute-environments.html">Updating compute
   *      environments</a> in the <i>Batch User Guide</i>.</p>
   *          </important>
   *          <p>If your specified role has a path other than <code>/</code>, then you must either specify the full role ARN
   *    (recommended) or prefix the role name with the path.</p>
   *          <note>
   *             <p>Depending on how you created your Batch service role, its ARN might contain the <code>service-role</code>
   *     path prefix. When you only specify the name of the service role, Batch assumes that your ARN doesn't use the
   *      <code>service-role</code> path prefix. Because of this, we recommend that you specify the full ARN of your service
   *     role when you create compute environments.</p>
   *          </note>
   */
  serviceRole?: string;

  /**
   * <p>Specifies the updated infrastructure update policy for the compute environment. For more information about
   *    infrastructure updates, see <a href="https://docs.aws.amazon.com/batch/latest/userguide/updating-compute-environments.html">Updating
   *     compute environments</a> in the <i>Batch User Guide</i>.</p>
   */
  updatePolicy?: UpdatePolicy;
}

export interface UpdateComputeEnvironmentResponse {
  /**
   * <p>The name of the compute environment. It can be up to 128 characters long. It can contain uppercase and
   *  lowercase letters, numbers, hyphens (-), and underscores (_).</p>
   */
  computeEnvironmentName?: string;

  /**
   * <p>The Amazon Resource Name (ARN) of the compute environment.</p>
   */
  computeEnvironmentArn?: string;
}

/**
 * <p>Contains the parameters for <code>UpdateJobQueue</code>.</p>
 */
export interface UpdateJobQueueRequest {
  /**
   * <p>The name or the Amazon Resource Name (ARN) of the job queue.</p>
   */
  jobQueue: string | undefined;

  /**
   * <p>Describes the queue's ability to accept new jobs. If the job queue state is <code>ENABLED</code>, it can accept
   *    jobs. If the job queue state is <code>DISABLED</code>, new jobs can't be added to the queue, but jobs already in the
   *    queue can finish.</p>
   */
  state?: JQState | string;

  /**
   * <p>Amazon Resource Name (ARN) of the fair share scheduling policy. Once a job queue is created, the fair share scheduling policy can
   *    be replaced but not removed. The format is
   *      <code>aws:<i>Partition</i>:batch:<i>Region</i>:<i>Account</i>:scheduling-policy/<i>Name</i>
   *             </code>.
   *    For example,
   *    <code>aws:aws:batch:us-west-2:123456789012:scheduling-policy/MySchedulingPolicy</code>.</p>
   */
  schedulingPolicyArn?: string;

  /**
   * <p>The priority of the job queue. Job queues with a higher priority (or a higher integer value for the
   *     <code>priority</code> parameter) are evaluated first when associated with the same compute environment. Priority is
   *    determined in descending order. For example, a job queue with a priority value of <code>10</code> is given scheduling
   *    preference over a job queue with a priority value of <code>1</code>. All of the compute environments must be either
   *    EC2 (<code>EC2</code> or <code>SPOT</code>) or Fargate (<code>FARGATE</code> or <code>FARGATE_SPOT</code>). EC2 and
   *    Fargate compute environments can't be mixed.</p>
   */
  priority?: number;

  /**
   * <p>Details the set of compute environments mapped to a job queue and their order relative to each other. This is
   *    one of the parameters used by the job scheduler to determine which compute environment runs a given job. Compute
   *    environments must be in the <code>VALID</code> state before you can associate them with a job queue. All of
   *    the compute environments must be either EC2 (<code>EC2</code> or <code>SPOT</code>) or Fargate
   *     (<code>FARGATE</code> or <code>FARGATE_SPOT</code>). EC2 and Fargate compute environments can't be mixed.</p>
   *          <note>
   *             <p>All compute environments that are associated with a job queue must share the same architecture. Batch doesn't
   *     support mixing compute environment architecture types in a single job queue.</p>
   *          </note>
   */
  computeEnvironmentOrder?: ComputeEnvironmentOrder[];
}

export interface UpdateJobQueueResponse {
  /**
   * <p>The name of the job queue.</p>
   */
  jobQueueName?: string;

  /**
   * <p>The Amazon Resource Name (ARN) of the job queue.</p>
   */
  jobQueueArn?: string;
}

/**
 * <p>Contains the parameters for <code>UpdateSchedulingPolicy</code>.</p>
 */
export interface UpdateSchedulingPolicyRequest {
  /**
   * <p>The Amazon Resource Name (ARN) of the scheduling policy to update.</p>
   */
  arn: string | undefined;

  /**
   * <p>The fair share policy.</p>
   */
  fairsharePolicy?: FairsharePolicy;
}

export interface UpdateSchedulingPolicyResponse {}

/**
 * @internal
 */
export const ArrayPropertiesFilterSensitiveLog = (obj: ArrayProperties): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ArrayPropertiesDetailFilterSensitiveLog = (obj: ArrayPropertiesDetail): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ArrayPropertiesSummaryFilterSensitiveLog = (obj: ArrayPropertiesSummary): any => ({
  ...obj,
});

/**
 * @internal
 */
export const NetworkInterfaceFilterSensitiveLog = (obj: NetworkInterface): any => ({
  ...obj,
});

/**
 * @internal
 */
export const AttemptContainerDetailFilterSensitiveLog = (obj: AttemptContainerDetail): any => ({
  ...obj,
});

/**
 * @internal
 */
export const AttemptDetailFilterSensitiveLog = (obj: AttemptDetail): any => ({
  ...obj,
});

/**
 * @internal
 */
export const CancelJobRequestFilterSensitiveLog = (obj: CancelJobRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const CancelJobResponseFilterSensitiveLog = (obj: CancelJobResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const Ec2ConfigurationFilterSensitiveLog = (obj: Ec2Configuration): any => ({
  ...obj,
});

/**
 * @internal
 */
export const LaunchTemplateSpecificationFilterSensitiveLog = (obj: LaunchTemplateSpecification): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ComputeResourceFilterSensitiveLog = (obj: ComputeResource): any => ({
  ...obj,
});

/**
 * @internal
 */
export const EksConfigurationFilterSensitiveLog = (obj: EksConfiguration): any => ({
  ...obj,
});

/**
 * @internal
 */
export const CreateComputeEnvironmentRequestFilterSensitiveLog = (obj: CreateComputeEnvironmentRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const CreateComputeEnvironmentResponseFilterSensitiveLog = (obj: CreateComputeEnvironmentResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ComputeEnvironmentOrderFilterSensitiveLog = (obj: ComputeEnvironmentOrder): any => ({
  ...obj,
});

/**
 * @internal
 */
export const CreateJobQueueRequestFilterSensitiveLog = (obj: CreateJobQueueRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const CreateJobQueueResponseFilterSensitiveLog = (obj: CreateJobQueueResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ShareAttributesFilterSensitiveLog = (obj: ShareAttributes): any => ({
  ...obj,
});

/**
 * @internal
 */
export const FairsharePolicyFilterSensitiveLog = (obj: FairsharePolicy): any => ({
  ...obj,
});

/**
 * @internal
 */
export const CreateSchedulingPolicyRequestFilterSensitiveLog = (obj: CreateSchedulingPolicyRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const CreateSchedulingPolicyResponseFilterSensitiveLog = (obj: CreateSchedulingPolicyResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DeleteComputeEnvironmentRequestFilterSensitiveLog = (obj: DeleteComputeEnvironmentRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DeleteComputeEnvironmentResponseFilterSensitiveLog = (obj: DeleteComputeEnvironmentResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DeleteJobQueueRequestFilterSensitiveLog = (obj: DeleteJobQueueRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DeleteJobQueueResponseFilterSensitiveLog = (obj: DeleteJobQueueResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DeleteSchedulingPolicyRequestFilterSensitiveLog = (obj: DeleteSchedulingPolicyRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DeleteSchedulingPolicyResponseFilterSensitiveLog = (obj: DeleteSchedulingPolicyResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DeregisterJobDefinitionRequestFilterSensitiveLog = (obj: DeregisterJobDefinitionRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DeregisterJobDefinitionResponseFilterSensitiveLog = (obj: DeregisterJobDefinitionResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DescribeComputeEnvironmentsRequestFilterSensitiveLog = (obj: DescribeComputeEnvironmentsRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const UpdatePolicyFilterSensitiveLog = (obj: UpdatePolicy): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ComputeEnvironmentDetailFilterSensitiveLog = (obj: ComputeEnvironmentDetail): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DescribeComputeEnvironmentsResponseFilterSensitiveLog = (
  obj: DescribeComputeEnvironmentsResponse
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DescribeJobDefinitionsRequestFilterSensitiveLog = (obj: DescribeJobDefinitionsRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const KeyValuePairFilterSensitiveLog = (obj: KeyValuePair): any => ({
  ...obj,
});

/**
 * @internal
 */
export const FargatePlatformConfigurationFilterSensitiveLog = (obj: FargatePlatformConfiguration): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DeviceFilterSensitiveLog = (obj: Device): any => ({
  ...obj,
});

/**
 * @internal
 */
export const TmpfsFilterSensitiveLog = (obj: Tmpfs): any => ({
  ...obj,
});

/**
 * @internal
 */
export const LinuxParametersFilterSensitiveLog = (obj: LinuxParameters): any => ({
  ...obj,
});

/**
 * @internal
 */
export const SecretFilterSensitiveLog = (obj: Secret): any => ({
  ...obj,
});

/**
 * @internal
 */
export const LogConfigurationFilterSensitiveLog = (obj: LogConfiguration): any => ({
  ...obj,
});

/**
 * @internal
 */
export const MountPointFilterSensitiveLog = (obj: MountPoint): any => ({
  ...obj,
});

/**
 * @internal
 */
export const NetworkConfigurationFilterSensitiveLog = (obj: NetworkConfiguration): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ResourceRequirementFilterSensitiveLog = (obj: ResourceRequirement): any => ({
  ...obj,
});

/**
 * @internal
 */
export const UlimitFilterSensitiveLog = (obj: Ulimit): any => ({
  ...obj,
});

/**
 * @internal
 */
export const EFSAuthorizationConfigFilterSensitiveLog = (obj: EFSAuthorizationConfig): any => ({
  ...obj,
});

/**
 * @internal
 */
export const EFSVolumeConfigurationFilterSensitiveLog = (obj: EFSVolumeConfiguration): any => ({
  ...obj,
});

/**
 * @internal
 */
export const HostFilterSensitiveLog = (obj: Host): any => ({
  ...obj,
});

/**
 * @internal
 */
export const VolumeFilterSensitiveLog = (obj: Volume): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ContainerPropertiesFilterSensitiveLog = (obj: ContainerProperties): any => ({
  ...obj,
});

/**
 * @internal
 */
export const EksContainerEnvironmentVariableFilterSensitiveLog = (obj: EksContainerEnvironmentVariable): any => ({
  ...obj,
});

/**
 * @internal
 */
export const EksContainerResourceRequirementsFilterSensitiveLog = (obj: EksContainerResourceRequirements): any => ({
  ...obj,
});

/**
 * @internal
 */
export const EksContainerSecurityContextFilterSensitiveLog = (obj: EksContainerSecurityContext): any => ({
  ...obj,
});

/**
 * @internal
 */
export const EksContainerVolumeMountFilterSensitiveLog = (obj: EksContainerVolumeMount): any => ({
  ...obj,
});

/**
 * @internal
 */
export const EksContainerFilterSensitiveLog = (obj: EksContainer): any => ({
  ...obj,
});

/**
 * @internal
 */
export const EksEmptyDirFilterSensitiveLog = (obj: EksEmptyDir): any => ({
  ...obj,
});

/**
 * @internal
 */
export const EksHostPathFilterSensitiveLog = (obj: EksHostPath): any => ({
  ...obj,
});

/**
 * @internal
 */
export const EksSecretFilterSensitiveLog = (obj: EksSecret): any => ({
  ...obj,
});

/**
 * @internal
 */
export const EksVolumeFilterSensitiveLog = (obj: EksVolume): any => ({
  ...obj,
});

/**
 * @internal
 */
export const EksPodPropertiesFilterSensitiveLog = (obj: EksPodProperties): any => ({
  ...obj,
});

/**
 * @internal
 */
export const EksPropertiesFilterSensitiveLog = (obj: EksProperties): any => ({
  ...obj,
});

/**
 * @internal
 */
export const NodeRangePropertyFilterSensitiveLog = (obj: NodeRangeProperty): any => ({
  ...obj,
});

/**
 * @internal
 */
export const NodePropertiesFilterSensitiveLog = (obj: NodeProperties): any => ({
  ...obj,
});

/**
 * @internal
 */
export const EvaluateOnExitFilterSensitiveLog = (obj: EvaluateOnExit): any => ({
  ...obj,
});

/**
 * @internal
 */
export const RetryStrategyFilterSensitiveLog = (obj: RetryStrategy): any => ({
  ...obj,
});

/**
 * @internal
 */
export const JobTimeoutFilterSensitiveLog = (obj: JobTimeout): any => ({
  ...obj,
});

/**
 * @internal
 */
export const JobDefinitionFilterSensitiveLog = (obj: JobDefinition): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DescribeJobDefinitionsResponseFilterSensitiveLog = (obj: DescribeJobDefinitionsResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DescribeJobQueuesRequestFilterSensitiveLog = (obj: DescribeJobQueuesRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const JobQueueDetailFilterSensitiveLog = (obj: JobQueueDetail): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DescribeJobQueuesResponseFilterSensitiveLog = (obj: DescribeJobQueuesResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DescribeJobsRequestFilterSensitiveLog = (obj: DescribeJobsRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ContainerDetailFilterSensitiveLog = (obj: ContainerDetail): any => ({
  ...obj,
});

/**
 * @internal
 */
export const JobDependencyFilterSensitiveLog = (obj: JobDependency): any => ({
  ...obj,
});

/**
 * @internal
 */
export const EksAttemptContainerDetailFilterSensitiveLog = (obj: EksAttemptContainerDetail): any => ({
  ...obj,
});

/**
 * @internal
 */
export const EksAttemptDetailFilterSensitiveLog = (obj: EksAttemptDetail): any => ({
  ...obj,
});

/**
 * @internal
 */
export const EksContainerDetailFilterSensitiveLog = (obj: EksContainerDetail): any => ({
  ...obj,
});

/**
 * @internal
 */
export const EksPodPropertiesDetailFilterSensitiveLog = (obj: EksPodPropertiesDetail): any => ({
  ...obj,
});

/**
 * @internal
 */
export const EksPropertiesDetailFilterSensitiveLog = (obj: EksPropertiesDetail): any => ({
  ...obj,
});

/**
 * @internal
 */
export const NodeDetailsFilterSensitiveLog = (obj: NodeDetails): any => ({
  ...obj,
});

/**
 * @internal
 */
export const JobDetailFilterSensitiveLog = (obj: JobDetail): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DescribeJobsResponseFilterSensitiveLog = (obj: DescribeJobsResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DescribeSchedulingPoliciesRequestFilterSensitiveLog = (obj: DescribeSchedulingPoliciesRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const SchedulingPolicyDetailFilterSensitiveLog = (obj: SchedulingPolicyDetail): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DescribeSchedulingPoliciesResponseFilterSensitiveLog = (obj: DescribeSchedulingPoliciesResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const KeyValuesPairFilterSensitiveLog = (obj: KeyValuesPair): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ListJobsRequestFilterSensitiveLog = (obj: ListJobsRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ContainerSummaryFilterSensitiveLog = (obj: ContainerSummary): any => ({
  ...obj,
});

/**
 * @internal
 */
export const NodePropertiesSummaryFilterSensitiveLog = (obj: NodePropertiesSummary): any => ({
  ...obj,
});

/**
 * @internal
 */
export const JobSummaryFilterSensitiveLog = (obj: JobSummary): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ListJobsResponseFilterSensitiveLog = (obj: ListJobsResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ListSchedulingPoliciesRequestFilterSensitiveLog = (obj: ListSchedulingPoliciesRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const SchedulingPolicyListingDetailFilterSensitiveLog = (obj: SchedulingPolicyListingDetail): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ListSchedulingPoliciesResponseFilterSensitiveLog = (obj: ListSchedulingPoliciesResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ListTagsForResourceRequestFilterSensitiveLog = (obj: ListTagsForResourceRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ListTagsForResourceResponseFilterSensitiveLog = (obj: ListTagsForResourceResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const RegisterJobDefinitionRequestFilterSensitiveLog = (obj: RegisterJobDefinitionRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const RegisterJobDefinitionResponseFilterSensitiveLog = (obj: RegisterJobDefinitionResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ContainerOverridesFilterSensitiveLog = (obj: ContainerOverrides): any => ({
  ...obj,
});

/**
 * @internal
 */
export const EksContainerOverrideFilterSensitiveLog = (obj: EksContainerOverride): any => ({
  ...obj,
});

/**
 * @internal
 */
export const EksPodPropertiesOverrideFilterSensitiveLog = (obj: EksPodPropertiesOverride): any => ({
  ...obj,
});

/**
 * @internal
 */
export const EksPropertiesOverrideFilterSensitiveLog = (obj: EksPropertiesOverride): any => ({
  ...obj,
});

/**
 * @internal
 */
export const NodePropertyOverrideFilterSensitiveLog = (obj: NodePropertyOverride): any => ({
  ...obj,
});

/**
 * @internal
 */
export const NodeOverridesFilterSensitiveLog = (obj: NodeOverrides): any => ({
  ...obj,
});

/**
 * @internal
 */
export const SubmitJobRequestFilterSensitiveLog = (obj: SubmitJobRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const SubmitJobResponseFilterSensitiveLog = (obj: SubmitJobResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const TagResourceRequestFilterSensitiveLog = (obj: TagResourceRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const TagResourceResponseFilterSensitiveLog = (obj: TagResourceResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const TerminateJobRequestFilterSensitiveLog = (obj: TerminateJobRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const TerminateJobResponseFilterSensitiveLog = (obj: TerminateJobResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const UntagResourceRequestFilterSensitiveLog = (obj: UntagResourceRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const UntagResourceResponseFilterSensitiveLog = (obj: UntagResourceResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ComputeResourceUpdateFilterSensitiveLog = (obj: ComputeResourceUpdate): any => ({
  ...obj,
});

/**
 * @internal
 */
export const UpdateComputeEnvironmentRequestFilterSensitiveLog = (obj: UpdateComputeEnvironmentRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const UpdateComputeEnvironmentResponseFilterSensitiveLog = (obj: UpdateComputeEnvironmentResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const UpdateJobQueueRequestFilterSensitiveLog = (obj: UpdateJobQueueRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const UpdateJobQueueResponseFilterSensitiveLog = (obj: UpdateJobQueueResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const UpdateSchedulingPolicyRequestFilterSensitiveLog = (obj: UpdateSchedulingPolicyRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const UpdateSchedulingPolicyResponseFilterSensitiveLog = (obj: UpdateSchedulingPolicyResponse): any => ({
  ...obj,
});
