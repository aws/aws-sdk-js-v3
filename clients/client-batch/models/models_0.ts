import { MetadataBearer as $MetadataBearer, SmithyException as __SmithyException } from "@aws-sdk/types";

export enum ArrayJobDependency {
  N_TO_N = "N_TO_N",
  SEQUENTIAL = "SEQUENTIAL",
}

/**
 * <p>An object representing an AWS Batch array job.</p>
 */
export interface ArrayProperties {
  /**
   * <p>The size of the array job.</p>
   */
  size?: number;
}

export namespace ArrayProperties {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ArrayProperties): any => ({
    ...obj,
  });
}

/**
 * <p>An object representing the array properties of a job.</p>
 */
export interface ArrayPropertiesDetail {
  /**
   * <p>A summary of the number of array job children in each available job status. This parameter is returned for
   *    parent array jobs.</p>
   */
  statusSummary?: { [key: string]: number };

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

export namespace ArrayPropertiesDetail {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ArrayPropertiesDetail): any => ({
    ...obj,
  });
}

/**
 * <p>An object representing the array properties of a job.</p>
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

export namespace ArrayPropertiesSummary {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ArrayPropertiesSummary): any => ({
    ...obj,
  });
}

export enum AssignPublicIp {
  DISABLED = "DISABLED",
  ENABLED = "ENABLED",
}

/**
 * <p>An object representing the elastic network interface for a multi-node parallel job node.</p>
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

export namespace NetworkInterface {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: NetworkInterface): any => ({
    ...obj,
  });
}

/**
 * <p>An object representing the details of a container that's part of a job attempt.</p>
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
   * <p>The exit code for the job attempt. A non-zero exit code is considered a failure.</p>
   */
  exitCode?: number;

  /**
   * <p>A short (255 max characters) human-readable string to provide additional details about a running or stopped
   *    container.</p>
   */
  reason?: string;

  /**
   * <p>The name of the CloudWatch Logs log stream associated with the container. The log group for AWS Batch jobs is
   *     <code>/aws/batch/job</code>. Each container attempt receives a log stream name when they reach the
   *     <code>RUNNING</code> status.</p>
   */
  logStreamName?: string;

  /**
   * <p>The network interfaces associated with the job attempt.</p>
   */
  networkInterfaces?: NetworkInterface[];
}

export namespace AttemptContainerDetail {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: AttemptContainerDetail): any => ({
    ...obj,
  });
}

/**
 * <p>An object representing a job attempt.</p>
 */
export interface AttemptDetail {
  /**
   * <p>Details about the container in this job attempt.</p>
   */
  container?: AttemptContainerDetail;

  /**
   * <p>The Unix timestamp (in milliseconds) for when the attempt was started (when the attempt transitioned from the
   *     <code>STARTING</code> state to the <code>RUNNING</code> state).</p>
   */
  startedAt?: number;

  /**
   * <p>The Unix timestamp (in milliseconds) for when the attempt was stopped (when the attempt transitioned from the
   *     <code>RUNNING</code> state to a terminal state, such as <code>SUCCEEDED</code> or <code>FAILED</code>).</p>
   */
  stoppedAt?: number;

  /**
   * <p>A short, human-readable string to provide additional details about the current status of the job attempt.</p>
   */
  statusReason?: string;
}

export namespace AttemptDetail {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: AttemptDetail): any => ({
    ...obj,
  });
}

/**
 * <p>Contains the parameters for <code>CancelJob</code>.</p>
 */
export interface CancelJobRequest {
  /**
   * <p>The AWS Batch job ID of the job to cancel.</p>
   */
  jobId: string | undefined;

  /**
   * <p>A message to attach to the job that explains the reason for canceling it. This message is returned by future
   *     <a>DescribeJobs</a> operations on the job. This message is also recorded in the AWS Batch activity
   *    logs.</p>
   */
  reason: string | undefined;
}

export namespace CancelJobRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: CancelJobRequest): any => ({
    ...obj,
  });
}

export interface CancelJobResponse {}

export namespace CancelJobResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: CancelJobResponse): any => ({
    ...obj,
  });
}

/**
 * <p>These errors are usually caused by a client action, such as using an action or resource on behalf of a user that
 *    doesn't have permissions to use the action or resource, or specifying an identifier that's not valid.</p>
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

export enum CRAllocationStrategy {
  BEST_FIT = "BEST_FIT",
  BEST_FIT_PROGRESSIVE = "BEST_FIT_PROGRESSIVE",
  SPOT_CAPACITY_OPTIMIZED = "SPOT_CAPACITY_OPTIMIZED",
}

/**
 * <p>Provides information used to select Amazon Machine Images (AMIs) for instances in the compute environment. If
 *     <code>Ec2Configuration</code> isn't specified, the default is currently <code>ECS_AL1</code> (<a href="https://docs.aws.amazon.com/AmazonECS/latest/developerguide/ecs-optimized_AMI.html#alami">Amazon Linux</a>) for
 *    non-GPU, non-Graviton instances. Starting on March 31, 2021, this default will be changing to <code>ECS_AL2</code>
 *     (<a href="https://docs.aws.amazon.com/AmazonECS/latest/developerguide/ecs-optimized_AMI.html#al2ami">Amazon Linux
 *     2</a>).</p>
 *          <note>
 *             <p>This object isn't applicable to jobs running on Fargate resources.</p>
 *          </note>
 */
export interface Ec2Configuration {
  /**
   * <p>The image type to match with the instance type to select an AMI. If the <code>imageIdOverride</code> parameter
   *    isn't specified, then a recent <a href="https://docs.aws.amazon.com/AmazonECS/latest/developerguide/ecs-optimized_AMI.html">Amazon ECS-optimized AMI</a> (<code>ECS_AL1</code>) is
   *    used. Starting on March 31, 2021, this default will be changing to <code>ECS_AL2</code> (<a href="https://docs.aws.amazon.com/AmazonECS/latest/developerguide/ecs-optimized_AMI.html#al2ami">Amazon Linux 2</a>).</p>
   *          <dl>
   *             <dt>ECS_AL2</dt>
   *             <dd>
   *                <p>
   *                   <a href="https://docs.aws.amazon.com/AmazonECS/latest/developerguide/ecs-optimized_AMI.html#al2ami">Amazon Linux
   *        2</a>− Default for all AWS Graviton-based instance families (for example, <code>C6g</code>,
   *        <code>M6g</code>, <code>R6g</code>, and <code>T4g</code>) and can be used for all non-GPU instance types.</p>
   *             </dd>
   *             <dt>ECS_AL2_NVIDIA</dt>
   *             <dd>
   *                <p>
   *                   <a href="https://docs.aws.amazon.com/AmazonECS/latest/developerguide/ecs-optimized_AMI.html#gpuami">Amazon Linux
   *        2 (GPU)</a>−Default for all GPU instance families (for example <code>P4</code> and <code>G4</code>) and
   *       can be used for all non-AWS Graviton-based instance types.</p>
   *             </dd>
   *             <dt>ECS_AL1</dt>
   *             <dd>
   *                <p>
   *                   <a href="https://docs.aws.amazon.com/AmazonECS/latest/developerguide/ecs-optimized_AMI.html#alami">Amazon
   *        Linux</a>−Default for all non-GPU, non-AWS Graviton instance families. Amazon Linux is reaching the
   *       end-of-life of standard support. For more information, see <a href="http://aws.amazon.com/amazon-linux-ami/">Amazon
   *        Linux AMI</a>.</p>
   *             </dd>
   *          </dl>
   */
  imageType: string | undefined;

  /**
   * <p>The AMI ID used for instances launched in the compute environment that match the image type. This setting
   *    overrides the <code>imageId</code> set in the <code>computeResource</code> object.</p>
   */
  imageIdOverride?: string;
}

export namespace Ec2Configuration {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: Ec2Configuration): any => ({
    ...obj,
  });
}

/**
 * <p>An object representing a launch template associated with a compute resource. You must specify either the launch
 *    template ID or launch template name in the request, but not both.</p>
 *          <p>If security groups are specified using both the <code>securityGroupIds</code> parameter of
 *     <code>CreateComputeEnvironment</code> and the launch template, the values in the <code>securityGroupIds</code>
 *    parameter of <code>CreateComputeEnvironment</code> will be used.</p>
 *          <note>
 *             <p>This object isn't applicable to jobs running on Fargate resources.</p>
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
   *     <code>$Default</code>, the default version of the launch template is used.</p>
   *          <important>
   *             <p>After the compute environment is created, the launch template version used will not be changed, even if the
   *      <code>$Default</code> or <code>$Latest</code> version for the launch template is updated. To use a new launch
   *     template version, create a new compute environment, add the new compute environment to the existing job queue,
   *     remove the old compute environment from the job queue, and delete the old compute environment.</p>
   *          </important>
   *          <p>Default: <code>$Default</code>.</p>
   */
  version?: string;
}

export namespace LaunchTemplateSpecification {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: LaunchTemplateSpecification): any => ({
    ...obj,
  });
}

export enum CRType {
  EC2 = "EC2",
  FARGATE = "FARGATE",
  FARGATE_SPOT = "FARGATE_SPOT",
  SPOT = "SPOT",
}

/**
 * <p>An object representing an AWS Batch compute resource. For more information, see <a href="https://docs.aws.amazon.com/batch/latest/userguide/compute_environments.html">Compute Environments</a> in the
 *    <i>AWS Batch User Guide</i>.</p>
 */
export interface ComputeResource {
  /**
   * <p>The type of compute environment: <code>EC2</code>, <code>SPOT</code>, <code>FARGATE</code>, or
   *     <code>FARGATE_SPOT</code>. For more information, see <a href="https://docs.aws.amazon.com/batch/latest/userguide/compute_environments.html">Compute Environments</a> in the
   *    <i>AWS Batch User Guide</i>.</p>
   *          <p> If you choose <code>SPOT</code>, you must also specify an Amazon EC2 Spot Fleet role with the
   *     <code>spotIamFleetRole</code> parameter. For more information, see <a href="https://docs.aws.amazon.com/batch/latest/userguide/spot_fleet_IAM_role.html">Amazon EC2 Spot Fleet role</a> in the
   *     <i>AWS Batch User Guide</i>.</p>
   */
  type: CRType | string | undefined;

  /**
   * <p>The allocation strategy to use for the compute resource if not enough instances of the best fitting instance
   *    type can be allocated. This might be because of availability of the instance type in the Region or <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/ec2-resource-limits.html">Amazon EC2 service limits</a>. For more
   *    information, see <a href="https://docs.aws.amazon.com/batch/latest/userguide/allocation-strategies.html">Allocation Strategies</a>
   *    in the <i>AWS Batch User Guide</i>.</p>
   *          <note>
   *             <p>This parameter isn't applicable to jobs running on Fargate resources, and shouldn't be specified.</p>
   *          </note>
   *          <dl>
   *             <dt>BEST_FIT (default)</dt>
   *             <dd>
   *                <p>AWS Batch selects an instance type that best fits the needs of the jobs with a preference for the lowest-cost
   *       instance type. If additional instances of the selected instance type aren't available, AWS Batch waits for the
   *       additional instances to be available. If there aren't enough instances available, or if the user is hitting <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/ec2-resource-limits.html">Amazon EC2 service limits</a> then
   *       additional jobs aren't run until the currently running jobs have completed. This allocation strategy keeps costs
   *       lower but can limit scaling. If you are using Spot Fleets with <code>BEST_FIT</code> then the Spot Fleet IAM Role
   *       must be specified.</p>
   *             </dd>
   *             <dt>BEST_FIT_PROGRESSIVE</dt>
   *             <dd>
   *                <p>AWS Batch will select additional instance types that are large enough to meet the requirements of the jobs in
   *       the queue, with a preference for instance types with a lower cost per unit vCPU. If additional instances of the
   *       previously selected instance types aren't available, AWS Batch will select new instance types.</p>
   *             </dd>
   *             <dt>SPOT_CAPACITY_OPTIMIZED</dt>
   *             <dd>
   *                <p>AWS Batch will select one or more instance types that are large enough to meet the requirements of the jobs in
   *       the queue, with a preference for instance types that are less likely to be interrupted. This allocation strategy
   *       is only available for Spot Instance compute resources.</p>
   *             </dd>
   *          </dl>
   *          <p>With both <code>BEST_FIT_PROGRESSIVE</code> and <code>SPOT_CAPACITY_OPTIMIZED</code> strategies, AWS Batch might
   *    need to go above <code>maxvCpus</code> to meet your capacity requirements. In this event, AWS Batch never exceeds
   *     <code>maxvCpus</code> by more than a single instance.</p>
   */
  allocationStrategy?: CRAllocationStrategy | string;

  /**
   * <p>The minimum number of Amazon EC2 vCPUs that an environment should maintain (even if the compute environment is
   *     <code>DISABLED</code>).</p>
   *          <note>
   *             <p>This parameter isn't applicable to jobs running on Fargate resources, and shouldn't be specified.</p>
   *          </note>
   */
  minvCpus?: number;

  /**
   * <p>The maximum number of Amazon EC2 vCPUs that a compute environment can reach.</p>
   *          <note>
   *             <p>With both <code>BEST_FIT_PROGRESSIVE</code> and <code>SPOT_CAPACITY_OPTIMIZED</code> allocation strategies,
   *     AWS Batch might need to exceed <code>maxvCpus</code> to meet your capacity requirements. In this event, AWS Batch never
   *     exceeds <code>maxvCpus</code> by more than a single instance. For example, no more than a single instance from among
   *     those specified in your compute environment is allocated.</p>
   *          </note>
   */
  maxvCpus: number | undefined;

  /**
   * <p>The desired number of Amazon EC2 vCPUS in the compute environment. AWS Batch modifies this value between the minimum
   *    and maximum values, based on job queue demand.</p>
   *          <note>
   *             <p>This parameter isn't applicable to jobs running on Fargate resources, and shouldn't be specified.</p>
   *          </note>
   */
  desiredvCpus?: number;

  /**
   * <p>The instances types that can be launched. You can specify instance families to launch any instance type within
   *    those families (for example, <code>c5</code> or <code>p3</code>), or you can specify specific sizes within a family
   *    (such as <code>c5.8xlarge</code>). You can also choose <code>optimal</code> to select instance types (from the C4,
   *    M4, and R4 instance families) that match the demand of your job queues.</p>
   *          <note>
   *             <p>This parameter isn't applicable to jobs running on Fargate resources, and shouldn't be specified.</p>
   *          </note>
   *          <note>
   *             <p>When you create a compute environment, the instance types that you select for the compute environment must
   *     share the same architecture. For example, you can't mix x86 and ARM instances in the same compute
   *     environment.</p>
   *          </note>
   *          <note>
   *             <p>Currently, <code>optimal</code> uses instance types from the C4, M4, and R4 instance families. In Regions that
   *     don't have instance types from those instance families, instance types from the C5, M5. and R5 instance families are
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
   *             <p>This parameter isn't applicable to jobs running on Fargate resources, and shouldn't be specified.</p>
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
   * <p>The VPC subnets into which the compute resources are launched. These subnets must be within the same VPC.
   *    Fargate compute resources can contain up to 16 subnets. For more information, see <a href="https://docs.aws.amazon.com/vpc/latest/userguide/VPC_Subnets.html">VPCs and Subnets</a> in the <i>Amazon VPC User
   *     Guide</i>.</p>
   */
  subnets: string[] | undefined;

  /**
   * <p>The Amazon EC2 security groups associated with instances launched in the compute environment. One or more security
   *    groups must be specified, either in <code>securityGroupIds</code> or using a launch template referenced in
   *     <code>launchTemplate</code>. This parameter is required for jobs running on Fargate resources and must contain at
   *    least one security group. Fargate doesn't support launch templates. If security groups are specified using both
   *     <code>securityGroupIds</code> and <code>launchTemplate</code>, the values in <code>securityGroupIds</code> is
   *    used.</p>
   */
  securityGroupIds?: string[];

  /**
   * <p>The Amazon EC2 key pair that's used for instances launched in the compute environment. You can use this key pair to
   *    log in to your instances with SSH.</p>
   *          <note>
   *             <p>This parameter isn't applicable to jobs running on Fargate resources, and shouldn't be specified.</p>
   *          </note>
   */
  ec2KeyPair?: string;

  /**
   * <p>The Amazon ECS instance profile applied to Amazon EC2 instances in a compute environment. You can specify the short name
   *    or full Amazon Resource Name (ARN) of an instance profile. For example,
   *     <code>
   *                <i>ecsInstanceRole</i>
   *             </code> or
   *      <code>arn:aws:iam::<i><aws_account_id></i>:instance-profile/<i>ecsInstanceRole</i>
   *             </code>.
   *    For more information, see <a href="https://docs.aws.amazon.com/batch/latest/userguide/instance_IAM_role.html">Amazon ECS Instance
   *     Role</a> in the <i>AWS Batch User Guide</i>.</p>
   *          <note>
   *             <p>This parameter isn't applicable to jobs running on Fargate resources, and shouldn't be specified.</p>
   *          </note>
   */
  instanceRole?: string;

  /**
   * <p>Key-value pair tags to be applied to EC2 resources that are launched in the compute environment. For AWS Batch,
   *    these take the form of "String1": "String2", where String1 is the tag key and String2 is the tag value−for
   *    example, { "Name": "AWS Batch Instance - C4OnDemand" }. This is helpful for recognizing your AWS Batch instances in the
   *    Amazon EC2 console. These tags can't be updated or removed after the compute environment has been created; any changes
   *    require creating a new compute environment and removing the old compute environment. These tags aren't seen when
   *    using the AWS Batch <code>ListTagsForResource</code> API operation.</p>
   *          <note>
   *             <p>This parameter isn't applicable to jobs running on Fargate resources, and shouldn't be specified.</p>
   *          </note>
   */
  tags?: { [key: string]: string };

  /**
   * <p>The Amazon EC2 placement group to associate with your compute resources. If you intend to submit multi-node parallel
   *    jobs to your compute environment, you should consider creating a cluster placement group and associate it with your
   *    compute resources. This keeps your multi-node parallel job on a logical grouping of instances within a single
   *    Availability Zone with high network flow potential. For more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/placement-groups.html">Placement Groups</a> in the <i>Amazon EC2 User Guide for
   *     Linux Instances</i>.</p>
   *          <note>
   *             <p>This parameter isn't applicable to jobs running on Fargate resources, and shouldn't be specified.</p>
   *          </note>
   */
  placementGroup?: string;

  /**
   * <p>The maximum percentage that a Spot Instance price can be when compared with the On-Demand price for that
   *    instance type before instances are launched. For example, if your maximum percentage is 20%, then the Spot price must
   *    be less than 20% of the current On-Demand price for that Amazon EC2 instance. You always pay the lowest (market) price and
   *    never more than your maximum percentage. If you leave this field empty, the default value is 100% of the On-Demand
   *    price.</p>
   *          <note>
   *             <p>This parameter isn't applicable to jobs running on Fargate resources, and shouldn't be specified.</p>
   *          </note>
   */
  bidPercentage?: number;

  /**
   * <p>The Amazon Resource Name (ARN) of the Amazon EC2 Spot Fleet IAM role applied to a <code>SPOT</code> compute environment. This role is
   *    required if the allocation strategy set to <code>BEST_FIT</code> or if the allocation strategy isn't specified. For
   *    more information, see <a href="https://docs.aws.amazon.com/batch/latest/userguide/spot_fleet_IAM_role.html">Amazon EC2 Spot Fleet
   *     Role</a> in the <i>AWS Batch User Guide</i>.</p>
   *          <note>
   *             <p>This parameter isn't applicable to jobs running on Fargate resources, and shouldn't be specified.</p>
   *          </note>
   *          <important>
   *             <p>To tag your Spot Instances on creation, the Spot Fleet IAM role specified here must use the newer <b>AmazonEC2SpotFleetTaggingRole</b> managed policy. The previously recommended <b>AmazonEC2SpotFleetRole</b> managed policy doesn't have the required permissions to tag Spot
   *     Instances. For more information, see <a href="https://docs.aws.amazon.com/batch/latest/userguide/troubleshooting.html#spot-instance-no-tag">Spot Instances not tagged on creation</a> in the
   *      <i>AWS Batch User Guide</i>.</p>
   *          </important>
   */
  spotIamFleetRole?: string;

  /**
   * <p>The launch template to use for your compute resources. Any other compute resource parameters that you specify in
   *    a <a>CreateComputeEnvironment</a> API operation override the same parameters in the launch template. You
   *    must specify either the launch template ID or launch template name in the request, but not both. For more
   *    information, see <a href="https://docs.aws.amazon.com/batch/latest/userguide/launch-templates.html">Launch Template Support</a> in
   *    the <i>AWS Batch User Guide</i>.</p>
   *          <note>
   *             <p>This parameter isn't applicable to jobs running on Fargate resources, and shouldn't be specified.</p>
   *          </note>
   */
  launchTemplate?: LaunchTemplateSpecification;

  /**
   * <p>Provides information used to select Amazon Machine Images (AMIs) for EC2 instances in the compute environment.
   *    If <code>Ec2Configuration</code> isn't specified, the default is <code>ECS_AL1</code>.</p>
   *          <note>
   *             <p>This parameter isn't applicable to jobs running on Fargate resources, and shouldn't be specified.</p>
   *          </note>
   */
  ec2Configuration?: Ec2Configuration[];
}

export namespace ComputeResource {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ComputeResource): any => ({
    ...obj,
  });
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
   * <p>The name for your compute environment. Up to 128 letters (uppercase and lowercase), numbers, hyphens, and
   *  underscores are allowed.</p>
   */
  computeEnvironmentName: string | undefined;

  /**
   * <p>The type of the compute environment: <code>MANAGED</code> or <code>UNMANAGED</code>. For more information, see
   *     <a href="https://docs.aws.amazon.com/batch/latest/userguide/compute_environments.html">Compute Environments</a> in the
   *     <i>AWS Batch User Guide</i>.</p>
   */
  type: CEType | string | undefined;

  /**
   * <p>The state of the compute environment. If the state is <code>ENABLED</code>, then the compute environment accepts
   *    jobs from a queue and can scale out automatically based on queues.</p>
   *          <p>If the state is <code>ENABLED</code>, then the AWS Batch scheduler can attempt to place jobs from an associated
   *    job queue on the compute resources within the environment. If the compute environment is managed, then it can scale
   *    its instances out or in automatically, based on the job queue demand.</p>
   *          <p>If the state is <code>DISABLED</code>, then the AWS Batch scheduler doesn't attempt to place jobs within the
   *    environment. Jobs in a <code>STARTING</code> or <code>RUNNING</code> state continue to progress normally. Managed
   *    compute environments in the <code>DISABLED</code> state don't scale out. However, they scale in to
   *     <code>minvCpus</code> value after instances become idle.</p>
   */
  state?: CEState | string;

  /**
   * <p>Details about the compute resources managed by the compute environment. This parameter is required for managed
   *    compute environments. For more information, see <a href="https://docs.aws.amazon.com/batch/latest/userguide/compute_environments.html">Compute Environments</a> in the <i>AWS Batch User Guide</i>.</p>
   */
  computeResources?: ComputeResource;

  /**
   * <p>The full Amazon Resource Name (ARN) of the IAM role that allows AWS Batch to make calls to other AWS services on your behalf. For
   *    more information, see <a href="https://docs.aws.amazon.com/batch/latest/userguide/service_IAM_role.html">AWS Batch service IAM
   *     role</a> in the <i>AWS Batch User Guide</i>.</p>
   *          <important>
   *             <p>If your account has already created the AWS Batch service-linked role, that role is used by default for your
   *     compute environment unless you specify a role here. If the AWS Batch service-linked role does not exist in your
   *     account, and no role is specified here, the service will try to create the AWS Batch service-linked role in your
   *     account.</p>
   *          </important>
   *          <p>If your specified role has a path other than <code>/</code>, then you must specify either the full role ARN
   *    (recommended) or prefix the role name with the path. For example, if a role with the name <code>bar</code> has a path
   *    of <code>/foo/</code> then you would specify <code>/foo/bar</code> as the role name. For more information, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_identifiers.html#identifiers-friendly-names">Friendly names
   *     and paths</a> in the <i>IAM User Guide</i>.</p>
   *          <note>
   *             <p>Depending on how you created your AWS Batch service role, its ARN might contain the <code>service-role</code>
   *     path prefix. When you only specify the name of the service role, AWS Batch assumes that your ARN doesn't use the
   *      <code>service-role</code> path prefix. Because of this, we recommend that you specify the full ARN of your service
   *     role when you create compute environments.</p>
   *          </note>
   */
  serviceRole?: string;

  /**
   * <p>The tags that you apply to the compute environment to help you categorize and organize your resources. Each tag
   *    consists of a key and an optional value. For more information, see <a href="https://docs.aws.amazon.com/general/latest/gr/aws_tagging.html">Tagging AWS Resources</a> in <i>AWS General
   *    Reference</i>.</p>
   *          <p>These tags can be updated or removed using the <a href="https://docs.aws.amazon.com/batch/latest/APIReference/API_TagResource.html">TagResource</a> and <a href="https://docs.aws.amazon.com/batch/latest/APIReference/API_UntagResource.html">UntagResource</a> API operations. These tags don't
   *    propagate to the underlying compute resources.</p>
   */
  tags?: { [key: string]: string };
}

export namespace CreateComputeEnvironmentRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: CreateComputeEnvironmentRequest): any => ({
    ...obj,
  });
}

export interface CreateComputeEnvironmentResponse {
  /**
   * <p>The name of the compute environment. Up to 128 letters (uppercase and lowercase), numbers, hyphens, and
   *  underscores are allowed.</p>
   */
  computeEnvironmentName?: string;

  /**
   * <p>The Amazon Resource Name (ARN) of the compute environment.</p>
   */
  computeEnvironmentArn?: string;
}

export namespace CreateComputeEnvironmentResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: CreateComputeEnvironmentResponse): any => ({
    ...obj,
  });
}

/**
 * <p>The order in which compute environments are tried for job placement within a queue. Compute environments are
 *    tried in ascending order. For example, if two compute environments are associated with a job queue, the compute
 *    environment with a lower order integer value is tried for job placement first. Compute environments must be in the
 *     <code>VALID</code> state before you can associate them with a job queue. All of the compute environments must be
 *    either EC2 (<code>EC2</code> or <code>SPOT</code>) or Fargate (<code>FARGATE</code> or <code>FARGATE_SPOT</code>);
 *    EC2 and Fargate compute environments can't be mixed.</p>
 *          <note>
 *             <p>All compute environments that are associated with a job queue must share the same architecture. AWS Batch doesn't
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

export namespace ComputeEnvironmentOrder {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ComputeEnvironmentOrder): any => ({
    ...obj,
  });
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
   * <p>The name of the job queue. Up to 128 letters (uppercase and lowercase), numbers, and underscores are
   *    allowed.</p>
   */
  jobQueueName: string | undefined;

  /**
   * <p>The state of the job queue. If the job queue state is <code>ENABLED</code>, it is able to accept jobs. If the
   *    job queue state is <code>DISABLED</code>, new jobs can't be added to the queue, but jobs already in the queue can
   *    finish.</p>
   */
  state?: JQState | string;

  /**
   * <p>The priority of the job queue. Job queues with a higher priority (or a higher integer value for the
   *     <code>priority</code> parameter) are evaluated first when associated with the same compute environment. Priority is
   *    determined in descending order. For example, a job queue with a priority value of <code>10</code> is given scheduling
   *    preference over a job queue with a priority value of <code>1</code>. All of the compute environments must be either
   *    EC2 (<code>EC2</code> or <code>SPOT</code>) or Fargate (<code>FARGATE</code> or <code>FARGATE_SPOT</code>); EC2 and
   *    Fargate compute environments cannot be mixed.</p>
   */
  priority: number | undefined;

  /**
   * <p>The set of compute environments mapped to a job queue and their order relative to each other. The job scheduler
   *    uses this parameter to determine which compute environment should run a specific job. Compute environments must be in
   *    the <code>VALID</code> state before you can associate them with a job queue. You can associate up to three compute
   *    environments with a job queue. All of the compute environments must be either EC2 (<code>EC2</code> or
   *     <code>SPOT</code>) or Fargate (<code>FARGATE</code> or <code>FARGATE_SPOT</code>); EC2 and Fargate compute
   *    environments can't be mixed.</p>
   *          <note>
   *             <p>All compute environments that are associated with a job queue must share the same architecture. AWS Batch doesn't
   *     support mixing compute environment architecture types in a single job queue.</p>
   *          </note>
   */
  computeEnvironmentOrder: ComputeEnvironmentOrder[] | undefined;

  /**
   * <p>The tags that you apply to the job queue to help you categorize and organize your resources. Each tag consists
   *    of a key and an optional value. For more information, see <a href="https://docs.aws.amazon.com/batch/latest/userguide/using-tags.html">Tagging your AWS Batch resources</a> in <i>AWS Batch User Guide</i>.</p>
   */
  tags?: { [key: string]: string };
}

export namespace CreateJobQueueRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: CreateJobQueueRequest): any => ({
    ...obj,
  });
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

export namespace CreateJobQueueResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: CreateJobQueueResponse): any => ({
    ...obj,
  });
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

export namespace DeleteComputeEnvironmentRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DeleteComputeEnvironmentRequest): any => ({
    ...obj,
  });
}

export interface DeleteComputeEnvironmentResponse {}

export namespace DeleteComputeEnvironmentResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DeleteComputeEnvironmentResponse): any => ({
    ...obj,
  });
}

/**
 * <p>Contains the parameters for <code>DeleteJobQueue</code>.</p>
 */
export interface DeleteJobQueueRequest {
  /**
   * <p>The short name or full Amazon Resource Name (ARN) of the queue to delete.</p>
   */
  jobQueue: string | undefined;
}

export namespace DeleteJobQueueRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DeleteJobQueueRequest): any => ({
    ...obj,
  });
}

export interface DeleteJobQueueResponse {}

export namespace DeleteJobQueueResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DeleteJobQueueResponse): any => ({
    ...obj,
  });
}

export interface DeregisterJobDefinitionRequest {
  /**
   * <p>The name and revision (<code>name:revision</code>) or full Amazon Resource Name (ARN) of the job definition to deregister.</p>
   */
  jobDefinition: string | undefined;
}

export namespace DeregisterJobDefinitionRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DeregisterJobDefinitionRequest): any => ({
    ...obj,
  });
}

export interface DeregisterJobDefinitionResponse {}

export namespace DeregisterJobDefinitionResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DeregisterJobDefinitionResponse): any => ({
    ...obj,
  });
}

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
   *             <p>This token should be treated as an opaque identifier that's only used to
   *  retrieve the next items in a list and not for other programmatic purposes.</p>
   *          </note>
   */
  nextToken?: string;
}

export namespace DescribeComputeEnvironmentsRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DescribeComputeEnvironmentsRequest): any => ({
    ...obj,
  });
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
 * <p>An object representing an AWS Batch compute environment.</p>
 */
export interface ComputeEnvironmentDetail {
  /**
   * <p>The name of the compute environment. Up to 128 letters (uppercase and lowercase), numbers, hyphens, and
   *  underscores are allowed.</p>
   */
  computeEnvironmentName: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the compute environment.</p>
   */
  computeEnvironmentArn: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the underlying Amazon ECS cluster used by the compute environment.</p>
   */
  ecsClusterArn: string | undefined;

  /**
   * <p>The tags applied to the compute environment.</p>
   */
  tags?: { [key: string]: string };

  /**
   * <p>The type of the compute environment: <code>MANAGED</code> or <code>UNMANAGED</code>. For more information, see
   *     <a href="https://docs.aws.amazon.com/batch/latest/userguide/compute_environments.html">Compute Environments</a> in the
   *     <i>AWS Batch User Guide</i>.</p>
   */
  type?: CEType | string;

  /**
   * <p>The state of the compute environment. The valid values are <code>ENABLED</code> or <code>DISABLED</code>.</p>
   *          <p>If the state is <code>ENABLED</code>, then the AWS Batch scheduler can attempt to place jobs from an associated
   *    job queue on the compute resources within the environment. If the compute environment is managed, then it can scale
   *    its instances out or in automatically, based on the job queue demand.</p>
   *          <p>If the state is <code>DISABLED</code>, then the AWS Batch scheduler doesn't attempt to place jobs within the
   *    environment. Jobs in a <code>STARTING</code> or <code>RUNNING</code> state continue to progress normally. Managed
   *    compute environments in the <code>DISABLED</code> state don't scale out. However, they scale in to
   *     <code>minvCpus</code> value after instances become idle.</p>
   */
  state?: CEState | string;

  /**
   * <p>The current status of the compute environment (for example, <code>CREATING</code> or <code>VALID</code>).</p>
   */
  status?: CEStatus | string;

  /**
   * <p>A short, human-readable string to provide additional details about the current status of the compute
   *    environment.</p>
   */
  statusReason?: string;

  /**
   * <p>The compute resources defined for the compute environment. For more information, see <a href="https://docs.aws.amazon.com/batch/latest/userguide/compute_environments.html">Compute Environments</a> in the
   *    <i>AWS Batch User Guide</i>.</p>
   */
  computeResources?: ComputeResource;

  /**
   * <p>The service role associated with the compute environment that allows AWS Batch to make calls to AWS API
   *    operations on your behalf. For more information, see <a href="https://docs.aws.amazon.com/batch/latest/userguide/service_IAM_role.html">AWS Batch service IAM role</a> in the
   *    <i>AWS Batch User Guide</i>.</p>
   */
  serviceRole?: string;
}

export namespace ComputeEnvironmentDetail {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ComputeEnvironmentDetail): any => ({
    ...obj,
  });
}

export interface DescribeComputeEnvironmentsResponse {
  /**
   * <p>The list of compute environments.</p>
   */
  computeEnvironments?: ComputeEnvironmentDetail[];

  /**
   * <p>The <code>nextToken</code> value to include in a future <code>DescribeComputeEnvironments</code> request. When
   *    the results of a <code>DescribeJobDefinitions</code> request exceed <code>maxResults</code>, this value can be used
   *    to retrieve the next page of results. This value is <code>null</code> when there are no more results to
   *    return.</p>
   */
  nextToken?: string;
}

export namespace DescribeComputeEnvironmentsResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DescribeComputeEnvironmentsResponse): any => ({
    ...obj,
  });
}

/**
 * <p>Contains the parameters for <code>DescribeJobDefinitions</code>.</p>
 */
export interface DescribeJobDefinitionsRequest {
  /**
   * <p>A list of up to 100 job definition names or full Amazon Resource Name (ARN) entries.</p>
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
   *             <p>This token should be treated as an opaque identifier that's only used to
   *  retrieve the next items in a list and not for other programmatic purposes.</p>
   *          </note>
   */
  nextToken?: string;
}

export namespace DescribeJobDefinitionsRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DescribeJobDefinitionsRequest): any => ({
    ...obj,
  });
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

export namespace KeyValuePair {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: KeyValuePair): any => ({
    ...obj,
  });
}

/**
 * <p>The platform configuration for jobs running on Fargate resources. For jobs that run on EC2 resources, you
 *    shouldn't specify this parameter.</p>
 */
export interface FargatePlatformConfiguration {
  /**
   * <p>The AWS Fargate platform version where the jobs are running. A platform version is specified only for jobs
   *    running on Fargate resources. If one isn't specified, the <code>LATEST</code> platform version is used by default.
   *    This uses a recent, approved version of the AWS Fargate platform for compute resources. For more information, see
   *     <a href="https://docs.aws.amazon.com/AmazonECS/latest/developerguide/platform_versions.html">AWS Fargate platform
   *     versions</a> in the <i>Amazon Elastic Container Service Developer Guide</i>.</p>
   */
  platformVersion?: string;
}

export namespace FargatePlatformConfiguration {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: FargatePlatformConfiguration): any => ({
    ...obj,
  });
}

export enum DeviceCgroupPermission {
  MKNOD = "MKNOD",
  READ = "READ",
  WRITE = "WRITE",
}

/**
 * <p>An object representing a container instance host device.</p>
 *          <note>
 *             <p>This object isn't applicable to jobs running on Fargate resources and shouldn't be provided.</p>
 *          </note>
 */
export interface Device {
  /**
   * <p>The path for the device on the host container instance.</p>
   */
  hostPath: string | undefined;

  /**
   * <p>The path inside the container used to expose the host device. By default, the <code>hostPath</code> value is
   *    used.</p>
   */
  containerPath?: string;

  /**
   * <p>The explicit permissions to provide to the container for the device. By default, the container has permissions
   *    for <code>read</code>, <code>write</code>, and <code>mknod</code> for the device.</p>
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
 *          <note>
 *             <p>This object isn't applicable to jobs running on Fargate resources.</p>
 *          </note>
 */
export interface Tmpfs {
  /**
   * <p>The absolute file path in the container where the tmpfs volume is mounted.</p>
   */
  containerPath: string | undefined;

  /**
   * <p>The size (in MiB) of the tmpfs volume.</p>
   */
  size: number | undefined;

  /**
   * <p>The list of tmpfs volume mount options.</p>
   *          <p>Valid values: "<code>defaults</code>" | "<code>ro</code>" | "<code>rw</code>" | "<code>suid</code>" |
   *     "<code>nosuid</code>" | "<code>dev</code>" | "<code>nodev</code>" | "<code>exec</code>" | "<code>noexec</code>" |
   *     "<code>sync</code>" | "<code>async</code>" | "<code>dirsync</code>" | "<code>remount</code>" | "<code>mand</code>" |
   *     "<code>nomand</code>" | "<code>atime</code>" | "<code>noatime</code>" | "<code>diratime</code>" |
   *     "<code>nodiratime</code>" | "<code>bind</code>" | "<code>rbind" | "unbindable" | "runbindable" | "private" |
   *     "rprivate" | "shared" | "rshared" | "slave" | "rslave" | "relatime</code>" | "<code>norelatime</code>" |
   *     "<code>strictatime</code>" | "<code>nostrictatime</code>" | "<code>mode</code>" | "<code>uid</code>" |
   *     "<code>gid</code>" | "<code>nr_inodes</code>" | "<code>nr_blocks</code>" | "<code>mpol</code>"</p>
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
 * <p>Linux-specific modifications that are applied to the container, such as details for device mappings.</p>
 */
export interface LinuxParameters {
  /**
   * <p>Any host devices to expose to the container. This parameter maps to <code>Devices</code> in the
   *    <a href="https://docs.docker.com/engine/api/v1.23/#create-a-container">Create a container</a> section of the <a href="https://docs.docker.com/engine/api/v1.23/">Docker Remote API</a> and the <code>--device</code> option to <a href="https://docs.docker.com/engine/reference/run/">docker run</a>.</p>
   *          <note>
   *             <p>This parameter isn't applicable to jobs running on Fargate resources and shouldn't be provided.</p>
   *          </note>
   */
  devices?: Device[];

  /**
   * <p>If true, run an <code>init</code> process inside the container that forwards signals and reaps processes. This
   *    parameter maps to the <code>--init</code> option to <a href="https://docs.docker.com/engine/reference/run/">docker run</a>.
   *    This parameter requires version 1.25 of the Docker Remote API or greater on your
   *  container instance. To check the Docker Remote API version on your container instance, log into your
   *  container instance and run the following command: <code>sudo docker version | grep "Server API version"</code>
   *          </p>
   */
  initProcessEnabled?: boolean;

  /**
   * <p>The value for the size (in MiB) of the <code>/dev/shm</code> volume. This parameter maps to the
   *     <code>--shm-size</code> option to <a href="https://docs.docker.com/engine/reference/run/">docker run</a>.</p>
   *          <note>
   *             <p>This parameter isn't applicable to jobs running on Fargate resources and shouldn't be provided.</p>
   *          </note>
   */
  sharedMemorySize?: number;

  /**
   * <p>The container path, mount options, and size (in MiB) of the tmpfs mount. This parameter maps to the
   *     <code>--tmpfs</code> option to <a href="https://docs.docker.com/engine/reference/run/">docker run</a>.</p>
   *          <note>
   *             <p>This parameter isn't applicable to jobs running on Fargate resources and shouldn't be provided.</p>
   *          </note>
   */
  tmpfs?: Tmpfs[];

  /**
   * <p>The total amount of swap memory (in MiB) a container can use. This parameter is translated to the
   *     <code>--memory-swap</code> option to <a href="https://docs.docker.com/engine/reference/run/">docker run</a> where the value is the
   *    sum of the container memory plus the <code>maxSwap</code> value. For more information, see <a href="https://docs.docker.com/config/containers/resource_constraints/#--memory-swap-details">
   *                <code>--memory-swap</code> details</a> in the Docker documentation.</p>
   *          <p>If a <code>maxSwap</code> value of <code>0</code> is specified, the container doesn't use swap. Accepted values
   *    are <code>0</code> or any positive integer. If the <code>maxSwap</code> parameter is omitted, the container doesn't
   *    use the swap configuration for the container instance it is running on. A <code>maxSwap</code> value must be set for
   *    the <code>swappiness</code> parameter to be used.</p>
   *          <note>
   *             <p>This parameter isn't applicable to jobs running on Fargate resources and shouldn't be provided.</p>
   *          </note>
   */
  maxSwap?: number;

  /**
   * <p>This allows you to tune a container's memory swappiness behavior. A <code>swappiness</code> value of
   *     <code>0</code> causes swapping not to happen unless absolutely necessary. A <code>swappiness</code> value of
   *     <code>100</code> causes pages to be swapped very aggressively. Accepted values are whole numbers between
   *     <code>0</code> and <code>100</code>. If the <code>swappiness</code> parameter isn't specified, a default value of
   *     <code>60</code> is used. If a value isn't specified for <code>maxSwap</code> then this parameter is ignored. If
   *     <code>maxSwap</code> is set to 0, the container doesn't use swap. This parameter maps to the
   *     <code>--memory-swappiness</code> option to <a href="https://docs.docker.com/engine/reference/run/">docker run</a>.</p>
   *          <p>Consider the following when you use a per-container swap configuration.</p>
   *          <ul>
   *             <li>
   *                <p>Swap space must be enabled and allocated on the container instance for the containers to use.</p>
   *                <note>
   *                   <p>The Amazon ECS optimized AMIs don't have swap enabled by default. You must enable swap on the instance to use this
   *       feature. For more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/instance-store-swap-volumes.html">Instance Store Swap Volumes</a> in the
   *        <i>Amazon EC2 User Guide for Linux Instances</i> or <a href="http://aws.amazon.com/premiumsupport/knowledge-center/ec2-memory-swap-file/">How do I allocate memory to work as swap space in an
   *        Amazon EC2 instance by using a swap file?</a>
   *                   </p>
   *                </note>
   *             </li>
   *             <li>
   *                <p>The swap space parameters are only supported for job definitions using EC2 resources.</p>
   *             </li>
   *             <li>
   *                <p>If the <code>maxSwap</code> and <code>swappiness</code> parameters are omitted from a job definition, each
   *      container will have a default <code>swappiness</code> value of 60, and the total swap usage will be limited to two
   *      times the memory reservation of the container.</p>
   *             </li>
   *          </ul>
   *          <note>
   *             <p>This parameter isn't applicable to jobs running on Fargate resources and shouldn't be provided.</p>
   *          </note>
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
  AWSLOGS = "awslogs",
  FLUENTD = "fluentd",
  GELF = "gelf",
  JOURNALD = "journald",
  JSON_FILE = "json-file",
  SPLUNK = "splunk",
  SYSLOG = "syslog",
}

/**
 * <p>An object representing the secret to expose to your container. Secrets can be exposed to a container in the
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
 *     sensitive data</a> in the <i>AWS Batch User Guide</i>.</p>
 */
export interface Secret {
  /**
   * <p>The name of the secret.</p>
   */
  name: string | undefined;

  /**
   * <p>The secret to expose to the container. The supported values are either the full ARN of the AWS Secrets Manager secret or the
   *    full ARN of the parameter in the AWS Systems Manager Parameter Store.</p>
   *          <note>
   *             <p>If the AWS Systems Manager Parameter Store parameter exists in the same Region as the job you're launching, then you can use
   *     either the full ARN or name of the parameter. If the parameter exists in a different Region, then the full ARN must
   *     be specified.</p>
   *          </note>
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
 * <p>Log configuration options to send to a custom log driver for the container.</p>
 */
export interface LogConfiguration {
  /**
   * <p>The log driver to use for the container. The valid values listed for this parameter are log drivers that the
   *    Amazon ECS container agent can communicate with by default.</p>
   *          <p>The supported log drivers are <code>awslogs</code>, <code>fluentd</code>, <code>gelf</code>,
   *     <code>json-file</code>, <code>journald</code>, <code>logentries</code>, <code>syslog</code>, and
   *    <code>splunk</code>.</p>
   *          <note>
   *             <p>Jobs running on Fargate resources are restricted to the <code>awslogs</code> and <code>splunk</code> log
   *     drivers.</p>
   *          </note>
   *          <dl>
   *             <dt>awslogs</dt>
   *             <dd>
   *                <p>Specifies the Amazon CloudWatch Logs logging driver. For more information, see <a href="https://docs.aws.amazon.com/batch/latest/userguide/using_awslogs.html">Using the awslogs Log Driver</a> in the
   *        <i>AWS Batch User Guide</i> and <a href="https://docs.docker.com/config/containers/logging/awslogs/">Amazon CloudWatch Logs logging driver</a> in the Docker documentation.</p>
   *             </dd>
   *             <dt>fluentd</dt>
   *             <dd>
   *                <p>Specifies the Fluentd logging driver. For more information, including usage and options, see <a href="https://docs.docker.com/config/containers/logging/fluentd/">Fluentd logging driver</a> in the Docker
   *       documentation.</p>
   *             </dd>
   *             <dt>gelf</dt>
   *             <dd>
   *                <p>Specifies the Graylog Extended Format (GELF) logging driver. For more information, including usage and
   *       options, see <a href="https://docs.docker.com/config/containers/logging/gelf/">Graylog Extended Format logging
   *        driver</a> in the Docker documentation.</p>
   *             </dd>
   *             <dt>journald</dt>
   *             <dd>
   *                <p>Specifies the journald logging driver. For more information, including usage and options, see <a href="https://docs.docker.com/config/containers/logging/journald/">Journald logging driver</a> in the Docker
   *       documentation.</p>
   *             </dd>
   *             <dt>json-file</dt>
   *             <dd>
   *                <p>Specifies the JSON file logging driver. For more information, including usage and options, see <a href="https://docs.docker.com/config/containers/logging/json-file/">JSON File logging driver</a> in the Docker
   *       documentation.</p>
   *             </dd>
   *             <dt>splunk</dt>
   *             <dd>
   *                <p>Specifies the Splunk logging driver. For more information, including usage and options, see <a href="https://docs.docker.com/config/containers/logging/splunk/">Splunk logging driver</a> in the Docker
   *       documentation.</p>
   *             </dd>
   *             <dt>syslog</dt>
   *             <dd>
   *                <p>Specifies the syslog logging driver. For more information, including usage and options, see <a href="https://docs.docker.com/config/containers/logging/syslog/">Syslog logging driver</a> in the Docker
   *       documentation.</p>
   *             </dd>
   *          </dl>
   *          <note>
   *             <p>If you have a custom driver that's not listed earlier that you want to work with the Amazon ECS container agent, you
   *     can fork the Amazon ECS container agent project that's <a href="https://github.com/aws/amazon-ecs-agent">available on
   *      GitHub</a> and customize it to work with that driver. We encourage you to submit pull requests for changes that
   *     you want to have included. However, Amazon Web Services doesn't currently support running modified copies of this
   *     software.</p>
   *          </note>
   *          <p>This parameter requires version 1.18 of the Docker Remote API or greater on your
   *  container instance. To check the Docker Remote API version on your container instance, log into your
   *  container instance and run the following command: <code>sudo docker version | grep "Server API version"</code>
   *          </p>
   */
  logDriver: LogDriver | string | undefined;

  /**
   * <p>The configuration options to send to the log driver. This parameter requires version 1.19 of the Docker Remote API or greater on your
   *  container instance. To check the Docker Remote API version on your container instance, log into your
   *  container instance and run the following command: <code>sudo docker version | grep "Server API version"</code>
   *          </p>
   */
  options?: { [key: string]: string };

  /**
   * <p>The secrets to pass to the log configuration. For more information, see <a href="https://docs.aws.amazon.com/batch/latest/userguide/specifying-sensitive-data.html">Specifying Sensitive Data</a> in the
   *     <i>AWS Batch User Guide</i>.</p>
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
 * <p>Details on a Docker volume mount point that's used in a job's container properties. This parameter maps to
 *     <code>Volumes</code> in the <a href="https://docs.docker.com/engine/reference/api/docker_remote_api_v1.19/#create-a-container">Create a
 *     container</a> section of the Docker Remote API and the <code>--volume</code> option to docker run.</p>
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

export namespace MountPoint {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: MountPoint): any => ({
    ...obj,
  });
}

/**
 * <p>The network configuration for jobs running on Fargate resources. Jobs running on EC2 resources must not
 *    specify this parameter.</p>
 */
export interface NetworkConfiguration {
  /**
   * <p>Indicates whether the job should have a public IP address. For a job running on Fargate resources in a private
   *    subnet to send outbound traffic to the internet (for example, in order to pull container images), the private subnet
   *    requires a NAT gateway be attached to route requests to the internet. For more information, see <a href="https://docs.aws.amazon.com/AmazonECS/latest/developerguide/task-networking.html">Amazon ECS task networking</a>. The
   *    default value is "DISABLED".</p>
   */
  assignPublicIp?: AssignPublicIp | string;
}

export namespace NetworkConfiguration {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: NetworkConfiguration): any => ({
    ...obj,
  });
}

export enum ResourceType {
  GPU = "GPU",
  MEMORY = "MEMORY",
  VCPU = "VCPU",
}

/**
 * <p>The type and amount of a resource to assign to a container. The supported resources include <code>GPU</code>,
 *     <code>MEMORY</code>, and <code>VCPU</code>.</p>
 */
export interface ResourceRequirement {
  /**
   * <p>The quantity of the specified resource to reserve for the container. The values vary based on the
   *     <code>type</code> specified.</p>
   *          <dl>
   *             <dt>type="GPU"</dt>
   *             <dd>
   *                <p>The number of physical GPUs to reserve for the container. The number of GPUs reserved for all containers in a
   *       job shouldn't exceed the number of available GPUs on the compute resource that the job is launched on.</p>
   *                <note>
   *                   <p>GPUs are not available for jobs running on Fargate resources.</p>
   *                </note>
   *             </dd>
   *             <dt>type="MEMORY"</dt>
   *             <dd>
   *                <p>The memory hard limit (in MiB) present to the container. This parameter is supported for jobs running on EC2
   *       resources. If your container attempts to exceed the memory specified, the container is terminated. This parameter
   *       maps to <code>Memory</code> in the <a href="https://docs.docker.com/engine/api/v1.23/#create-a-container">Create a container</a> section of the <a href="https://docs.docker.com/engine/api/v1.23/">Docker Remote API</a> and the
   *        <code>--memory</code> option to <a href="https://docs.docker.com/engine/reference/run/">docker run</a>. You must specify at least
   *       4 MiB of memory for a job. This is required but can be specified in several places for multi-node parallel (MNP)
   *       jobs. It must be specified for each node at least once. This parameter maps to <code>Memory</code> in the
   *       <a href="https://docs.docker.com/engine/api/v1.23/#create-a-container">Create a container</a> section of the <a href="https://docs.docker.com/engine/api/v1.23/">Docker Remote API</a> and the <code>--memory</code> option to <a href="https://docs.docker.com/engine/reference/run/">docker run</a>.</p>
   *                <note>
   *                   <p>If you're trying to maximize your resource utilization by providing your jobs as much memory as possible for
   *        a particular instance type, see <a href="https://docs.aws.amazon.com/batch/latest/userguide/memory-management.html">Memory
   *         Management</a> in the <i>AWS Batch User Guide</i>.</p>
   *                </note>
   *                <p>For jobs running on Fargate resources, then <code>value</code> is the hard limit (in MiB), and must match
   *       one of the supported values and the <code>VCPU</code> values must be one of the values supported for that memory
   *       value.</p>
   *                <dl>
   *                   <dt>value = 512</dt>
   *                   <dd>
   *                         <p>
   *                            <code>VCPU</code> = 0.25</p>
   *                      </dd>
   *                   <dt>value = 1024</dt>
   *                   <dd>
   *                         <p>
   *                            <code>VCPU</code> = 0.25 or 0.5</p>
   *                      </dd>
   *                   <dt>value = 2048</dt>
   *                   <dd>
   *                         <p>
   *                            <code>VCPU</code> = 0.25, 0.5, or 1</p>
   *                      </dd>
   *                   <dt>value = 3072</dt>
   *                   <dd>
   *                         <p>
   *                            <code>VCPU</code> = 0.5, or 1</p>
   *                      </dd>
   *                   <dt>value = 4096</dt>
   *                   <dd>
   *                         <p>
   *                            <code>VCPU</code> = 0.5, 1, or 2</p>
   *                      </dd>
   *                   <dt>value = 5120, 6144, or 7168</dt>
   *                   <dd>
   *                         <p>
   *                            <code>VCPU</code> = 1 or 2</p>
   *                      </dd>
   *                   <dt>value = 8192</dt>
   *                   <dd>
   *                         <p>
   *                            <code>VCPU</code> = 1, 2, or 4</p>
   *                      </dd>
   *                   <dt>value = 9216, 10240, 11264, 12288, 13312, 14336, 15360, or 16384</dt>
   *                   <dd>
   *                         <p>
   *                            <code>VCPU</code> = 2 or 4</p>
   *                      </dd>
   *                   <dt>value = 17408, 18432, 19456, 20480, 21504, 22528, 23552, 24576, 25600, 26624, 27648, 28672, 29696, or 30720</dt>
   *                   <dd>
   *                         <p>
   *                            <code>VCPU</code> = 4</p>
   *                      </dd>
   *                </dl>
   *             </dd>
   *             <dt>type="VCPU"</dt>
   *             <dd>
   *                <p>The number of vCPUs reserved for the container. This parameter maps to <code>CpuShares</code> in the
   *       <a href="https://docs.docker.com/engine/api/v1.23/#create-a-container">Create a container</a> section of the <a href="https://docs.docker.com/engine/api/v1.23/">Docker Remote API</a> and the <code>--cpu-shares</code> option to
   *        <a href="https://docs.docker.com/engine/reference/run/">docker run</a>. Each vCPU is equivalent to 1,024 CPU shares. For EC2
   *       resources, you must specify at least one vCPU. This is required but can be specified in several places; it must be
   *       specified for each node at least once.</p>
   *                <p>For jobs running on Fargate resources, then <code>value</code> must match one of the supported values and
   *       the <code>MEMORY</code> values must be one of the values supported for that VCPU value. The supported values are
   *       0.25, 0.5, 1, 2, and 4</p>
   *                <dl>
   *                   <dt>value = 0.25</dt>
   *                   <dd>
   *                         <p>
   *                            <code>MEMORY</code> = 512, 1024, or 2048</p>
   *                      </dd>
   *                   <dt>value = 0.5</dt>
   *                   <dd>
   *                         <p>
   *                            <code>MEMORY</code> = 1024, 2048, 3072, or 4096</p>
   *                      </dd>
   *                   <dt>value = 1</dt>
   *                   <dd>
   *                         <p>
   *                            <code>MEMORY</code> = 2048, 3072, 4096, 5120, 6144, 7168, or 8192</p>
   *                      </dd>
   *                   <dt>value = 2</dt>
   *                   <dd>
   *                         <p>
   *                            <code>MEMORY</code> = 4096, 5120, 6144, 7168, 8192, 9216, 10240, 11264, 12288, 13312, 14336, 15360, or 16384</p>
   *                      </dd>
   *                   <dt>value = 4</dt>
   *                   <dd>
   *                         <p>
   *                            <code>MEMORY</code> = 8192, 9216, 10240, 11264, 12288, 13312, 14336, 15360, 16384, 17408, 18432, 19456,
   *      20480, 21504, 22528, 23552, 24576, 25600, 26624, 27648, 28672, 29696, or 30720</p>
   *                      </dd>
   *                </dl>
   *             </dd>
   *          </dl>
   */
  value: string | undefined;

  /**
   * <p>The type of resource to assign to a container. The supported resources include <code>GPU</code>,
   *     <code>MEMORY</code>, and <code>VCPU</code>.</p>
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
 * <p>The <code>ulimit</code> settings to pass to the container.</p>
 *          <note>
 *             <p>This object isn't applicable to jobs running on Fargate resources.</p>
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

export namespace Ulimit {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: Ulimit): any => ({
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
   * <p>The Amazon EFS access point ID to use. If an access point is specified, the root directory value specified in the
   *     <code>EFSVolumeConfiguration</code> must either be omitted or set to <code>/</code> which will enforce the path set
   *    on the EFS access point. If an access point is used, transit encryption must be enabled in the
   *     <code>EFSVolumeConfiguration</code>. For more information, see <a href="https://docs.aws.amazon.com/efs/latest/ug/efs-access-points.html">Working with Amazon EFS Access Points</a> in the
   *     <i>Amazon Elastic File System User Guide</i>.</p>
   */
  accessPointId?: string;

  /**
   * <p>Whether or not to use the AWS Batch execution IAM role defined in a job definition when mounting the Amazon EFS file
   *    system. If enabled, transit encryption must be enabled in the <code>EFSVolumeConfiguration</code>. If this parameter
   *    is omitted, the default value of <code>DISABLED</code> is used. For more information, see <a href="https://docs.aws.amazon.com/batch/latest/ug/efs-volumes.html#efs-volume-accesspoints">Using Amazon EFS Access Points</a> in the
   *     <i>AWS Batch User Guide</i>. EFS IAM authorization requires that <code>TransitEncryption</code> be
   *     <code>ENABLED</code> and that a <code>JobRoleArn</code> is specified.</p>
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
 * <p>This parameter is specified when you are using an Amazon Elastic File System file system for task storage. For more information,
 *    see <a href="https://docs.aws.amazon.com/batch/latest/ug/efs-volumes.html">Amazon EFS Volumes</a> in the
 *     <i>AWS Batch User Guide</i>.</p>
 */
export interface EFSVolumeConfiguration {
  /**
   * <p>The Amazon EFS file system ID to use.</p>
   */
  fileSystemId: string | undefined;

  /**
   * <p>The directory within the Amazon EFS file system to mount as the root directory inside the host. If this parameter is
   *    omitted, the root of the Amazon EFS volume will be used. Specifying <code>/</code> will have the same effect as omitting
   *    this parameter.</p>
   *          <important>
   *             <p>If an EFS access point is specified in the <code>authorizationConfig</code>, the root directory parameter must
   *     either be omitted or set to <code>/</code> which will enforce the path set on the Amazon EFS access point.</p>
   *          </important>
   */
  rootDirectory?: string;

  /**
   * <p>Whether or not to enable encryption for Amazon EFS data in transit between the Amazon ECS host and the Amazon EFS server.
   *    Transit encryption must be enabled if Amazon EFS IAM authorization is used. If this parameter is omitted, the default
   *    value of <code>DISABLED</code> is used. For more information, see <a href="https://docs.aws.amazon.com/efs/latest/ug/encryption-in-transit.html">Encrypting data in transit</a> in the
   *     <i>Amazon Elastic File System User Guide</i>.</p>
   */
  transitEncryption?: EFSTransitEncryption | string;

  /**
   * <p>The port to use when sending encrypted data between the Amazon ECS host and the Amazon EFS server. If you do not specify a
   *    transit encryption port, it will use the port selection strategy that the Amazon EFS mount helper uses. For more
   *    information, see <a href="https://docs.aws.amazon.com/efs/latest/ug/efs-mount-helper.html">EFS Mount Helper</a> in
   *    the <i>Amazon Elastic File System User Guide</i>.</p>
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
 * <p>Determine whether your data volume persists on the host container instance and where it is stored. If this
 *    parameter is empty, then the Docker daemon assigns a host path for your data volume, but the data isn't guaranteed to
 *    persist after the containers associated with it stop running.</p>
 */
export interface Host {
  /**
   * <p>The path on the host container instance that's presented to the container. If this parameter is empty, then the
   *    Docker daemon has assigned a host path for you. If this parameter contains a file location, then the data volume
   *    persists at the specified location on the host container instance until you delete it manually. If the source path
   *    location doesn't exist on the host container instance, the Docker daemon creates it. If the location does exist, the
   *    contents of the source path folder are exported.</p>
   *          <note>
   *             <p>This parameter isn't applicable to jobs that run on Fargate resources and shouldn't be provided.</p>
   *          </note>
   */
  sourcePath?: string;
}

export namespace Host {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: Host): any => ({
    ...obj,
  });
}

/**
 * <p>A data volume used in a job's container properties.</p>
 */
export interface Volume {
  /**
   * <p>The contents of the <code>host</code> parameter determine whether your data volume persists on the host
   *    container instance and where it is stored. If the host parameter is empty, then the Docker daemon assigns a host path
   *    for your data volume. However, the data isn't guaranteed to persist after the containers associated with it stop
   *    running.</p>
   *          <note>
   *             <p>This parameter isn't applicable to jobs running on Fargate resources and shouldn't be provided.</p>
   *          </note>
   */
  host?: Host;

  /**
   * <p>The name of the volume. Up to 255 letters (uppercase and lowercase), numbers, hyphens, and underscores are
   *  allowed. This name is referenced in the <code>sourceVolume</code>
   *    parameter of container definition <code>mountPoints</code>.</p>
   */
  name?: string;

  /**
   * <p>This parameter is specified when you are using an Amazon Elastic File System file system for job storage. Jobs running on
   *    Fargate resources must specify a <code>platformVersion</code> of at least <code>1.4.0</code>.</p>
   */
  efsVolumeConfiguration?: EFSVolumeConfiguration;
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
 * <p>Container properties are used in job definitions to describe the container that's launched as part of a
 *    job.</p>
 */
export interface ContainerProperties {
  /**
   * <p>The image used to start a container. This string is passed directly to the Docker daemon. Images in the Docker
   *    Hub registry are available by default. Other repositories are specified with
   *      <code>
   *                <i>repository-url</i>/<i>image</i>:<i>tag</i>
   *             </code>.
   *    Up to 255 letters (uppercase and lowercase), numbers, hyphens, underscores, colons,
   *  periods, forward slashes, and number signs are allowed. This parameter maps to <code>Image</code> in the <a href="https://docs.docker.com/engine/api/v1.23/#create-a-container">Create a container</a> section of
   *    the <a href="https://docs.docker.com/engine/api/v1.23/">Docker Remote API</a> and the <code>IMAGE</code> parameter of <a href="https://docs.docker.com/engine/reference/run/">docker
   *    run</a>.</p>
   *          <note>
   *             <p>Docker image architecture must match the processor architecture of the compute resources that they're scheduled
   *     on. For example, ARM-based Docker images can only run on ARM-based compute resources.</p>
   *          </note>
   *          <ul>
   *             <li>
   *                <p>Images in Amazon ECR repositories use the full registry and repository URI (for example,
   *       <code>012345678910.dkr.ecr.<region-name>.amazonaws.com/<repository-name></code>).</p>
   *             </li>
   *             <li>
   *                <p>Images in official repositories on Docker Hub use a single name (for example, <code>ubuntu</code> or
   *       <code>mongo</code>).</p>
   *             </li>
   *             <li>
   *                <p>Images in other repositories on Docker Hub are qualified with an organization name (for example,
   *       <code>amazon/amazon-ecs-agent</code>).</p>
   *             </li>
   *             <li>
   *                <p>Images in other online repositories are qualified further by a domain name (for example,
   *       <code>quay.io/assemblyline/ubuntu</code>).</p>
   *             </li>
   *          </ul>
   */
  image?: string;

  /**
   * @deprecated
   *
   * <p>The number of vCPUs reserved for the job. Each vCPU is equivalent to 1,024 CPU shares. This parameter maps to
   *     <code>CpuShares</code> in the <a href="https://docs.docker.com/engine/api/v1.23/#create-a-container">Create a container</a> section of the <a href="https://docs.docker.com/engine/api/v1.23/">Docker Remote API</a> and the
   *     <code>--cpu-shares</code> option to <a href="https://docs.docker.com/engine/reference/run/">docker run</a>. The number of vCPUs must
   *    be specified but can be be specified in several places. You must specify it at least once for each node.</p>
   *          <p>This parameter is supported on EC2 resources but isn't supported for jobs that run on Fargate resources. For
   *    these resources, use <code>resourceRequirement</code> instead. You can use this parameter or
   *     <code>resourceRequirements</code> structure but not both.</p>
   *          <note>
   *             <p>This parameter isn't applicable to jobs running on Fargate resources and shouldn't be provided. For jobs that
   *     run on Fargate resources, you must specify the vCPU requirement for the job using
   *      <code>resourceRequirements</code>.</p>
   *          </note>
   */
  vcpus?: number;

  /**
   * @deprecated
   *
   * <p>This parameter indicates the memory hard limit (in MiB) for a container. If your container attempts to exceed
   *    the specified number, it is terminated. You must specify at least 4 MiB of memory for a job using this parameter. The
   *    memory hard limit can be specified in several places. It must be specified for each node at least once.</p>
   *          <p>This parameter maps to <code>Memory</code> in the <a href="https://docs.docker.com/engine/api/v1.23/#create-a-container">Create a container</a> section of the
   *    <a href="https://docs.docker.com/engine/api/v1.23/">Docker Remote API</a> and the <code>--memory</code> option to <a href="https://docs.docker.com/engine/reference/run/">docker
   *    run</a>.</p>
   *          <p>This parameter is supported on EC2 resources but isn't supported on Fargate resources. For Fargate
   *    resources, you should specify the memory requirement using <code>resourceRequirement</code>. You can do this for EC2
   *    resources.</p>
   *          <note>
   *             <p>If you're trying to maximize your resource utilization by providing your jobs as much memory as possible for a
   *     particular instance type, see <a href="https://docs.aws.amazon.com/batch/latest/userguide/memory-management.html">Memory
   *      Management</a> in the <i>AWS Batch User Guide</i>.</p>
   *          </note>
   */
  memory?: number;

  /**
   * <p>The command that's passed to the container. This parameter maps to <code>Cmd</code> in the
   *    <a href="https://docs.docker.com/engine/api/v1.23/#create-a-container">Create a container</a> section of the <a href="https://docs.docker.com/engine/api/v1.23/">Docker Remote API</a> and the <code>COMMAND</code> parameter to <a href="https://docs.docker.com/engine/reference/run/">docker run</a>. For more information, see <a href="https://docs.docker.com/engine/reference/builder/#cmd">https://docs.docker.com/engine/reference/builder/#cmd</a>.</p>
   */
  command?: string[];

  /**
   * <p>The Amazon Resource Name (ARN) of the IAM role that the container can assume for AWS permissions. For more information, see
   *     <a href="https://docs.aws.amazon.com/AmazonECS/latest/developerguide/task-iam-roles.html">IAM Roles for Tasks</a>
   *    in the <i>Amazon Elastic Container Service Developer Guide</i>.</p>
   */
  jobRoleArn?: string;

  /**
   * <p>The Amazon Resource Name (ARN) of the execution role that AWS Batch can assume. For jobs that run on Fargate resources, you must
   *    provide an execution role. For more information, see <a href="https://docs.aws.amazon.com/batch/latest/userguide/execution-IAM-role.html">AWS Batch execution IAM role</a> in the
   *     <i>AWS Batch User Guide</i>.</p>
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
   *             <p>Environment variables must not start with <code>AWS_BATCH</code>; this naming
   *  convention is reserved for variables that are set by the AWS Batch service.</p>
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
   *     <a href="https://docs.docker.com/engine/reference/run/">docker run</a>. The default value is false.</p>
   *          <note>
   *             <p>This parameter isn't applicable to jobs running on Fargate resources and shouldn't be provided, or specified
   *     as false.</p>
   *          </note>
   */
  privileged?: boolean;

  /**
   * <p>A list of <code>ulimits</code> to set in the container. This parameter maps to <code>Ulimits</code> in the
   *    <a href="https://docs.docker.com/engine/api/v1.23/#create-a-container">Create a container</a> section of the <a href="https://docs.docker.com/engine/api/v1.23/">Docker Remote API</a> and the <code>--ulimit</code> option to <a href="https://docs.docker.com/engine/reference/run/">docker run</a>.</p>
   *          <note>
   *             <p>This parameter isn't applicable to jobs running on Fargate resources and shouldn't be provided.</p>
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
   *             <p>This parameter isn't applicable to single-node container jobs or for jobs that run on Fargate resources and
   *     shouldn't be provided.</p>
   *          </note>
   */
  instanceType?: string;

  /**
   * <p>The type and amount of resources to assign to a container. The supported resources include <code>GPU</code>,
   *     <code>MEMORY</code>, and <code>VCPU</code>.</p>
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
   *     logging drivers</a> in the Docker documentation.</p>
   *          <note>
   *             <p>AWS Batch currently supports a subset of the logging drivers available to the Docker daemon (shown in the <a>LogConfiguration</a> data type).</p>
   *          </note>
   *          <p>This parameter requires version 1.18 of the Docker Remote API or greater on your
   *  container instance. To check the Docker Remote API version on your container instance, log into your
   *  container instance and run the following command: <code>sudo docker version | grep "Server API version"</code>
   *          </p>
   *          <note>
   *             <p>The Amazon ECS container agent running on a container instance must register the logging drivers available on that
   *     instance with the <code>ECS_AVAILABLE_LOGGING_DRIVERS</code> environment variable before containers placed on that
   *     instance can use these log configuration options. For more information, see <a href="https://docs.aws.amazon.com/AmazonECS/latest/developerguide/ecs-agent-config.html">Amazon ECS Container Agent Configuration</a> in the
   *      <i>Amazon Elastic Container Service Developer Guide</i>.</p>
   *          </note>
   */
  logConfiguration?: LogConfiguration;

  /**
   * <p>The secrets for the container. For more information, see <a href="https://docs.aws.amazon.com/batch/latest/userguide/specifying-sensitive-data.html">Specifying sensitive data</a> in the
   *     <i>AWS Batch User Guide</i>.</p>
   */
  secrets?: Secret[];

  /**
   * <p>The network configuration for jobs running on Fargate resources. Jobs running on EC2 resources must not
   *    specify this parameter.</p>
   */
  networkConfiguration?: NetworkConfiguration;

  /**
   * <p>The platform configuration for jobs running on Fargate resources. Jobs running on EC2 resources must not
   *    specify this parameter.</p>
   */
  fargatePlatformConfiguration?: FargatePlatformConfiguration;
}

export namespace ContainerProperties {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ContainerProperties): any => ({
    ...obj,
  });
}

/**
 * <p>An object representing the properties of the node range for a multi-node parallel job.</p>
 */
export interface NodeRangeProperty {
  /**
   * <p>The range of nodes, using node index values. A range of <code>0:3</code> indicates nodes with index values of
   *     <code>0</code> through <code>3</code>. If the starting range value is omitted (<code>:n</code>), then <code>0</code>
   *    is used to start the range. If the ending range value is omitted (<code>n:</code>), then the highest possible node
   *    index is used to end the range. Your accumulative node ranges must account for all nodes (<code>0:n</code>). You can
   *    nest node ranges, for example <code>0:10</code> and <code>4:5</code>, in which case the <code>4:5</code> range
   *    properties override the <code>0:10</code> properties.</p>
   */
  targetNodes: string | undefined;

  /**
   * <p>The container details for the node range.</p>
   */
  container?: ContainerProperties;
}

export namespace NodeRangeProperty {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: NodeRangeProperty): any => ({
    ...obj,
  });
}

/**
 * <p>An object representing the node properties of a multi-node parallel job.</p>
 */
export interface NodeProperties {
  /**
   * <p>The number of nodes associated with a multi-node parallel job.</p>
   */
  numNodes: number | undefined;

  /**
   * <p>Specifies the node index for the main node of a multi-node parallel job. This node index value must be fewer
   *    than the number of nodes.</p>
   */
  mainNode: number | undefined;

  /**
   * <p>A list of node ranges and their properties associated with a multi-node parallel job.</p>
   */
  nodeRangeProperties: NodeRangeProperty[] | undefined;
}

export namespace NodeProperties {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: NodeProperties): any => ({
    ...obj,
  });
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
 * <p>Specifies a set of conditions to be met, and an action to take (<code>RETRY</code> or <code>EXIT</code>) if all
 *    conditions are met.</p>
 */
export interface EvaluateOnExit {
  /**
   * <p>Contains a glob pattern to match against the <code>StatusReason</code> returned for a job. The pattern can be up
   *    to 512 characters long, and can contain letters, numbers, periods (.), colons (:), and white space (including spaces
   *    or tabs).
   *    It can optionally end with an
   *    asterisk (*) so that only the start of the string needs to be an exact match.</p>
   */
  onStatusReason?: string;

  /**
   * <p>Contains a glob pattern to match against the <code>Reason</code> returned for a job. The pattern can be up to
   *    512 characters long, and can contain letters, numbers, periods (.), colons (:), and white space (including spaces and
   *    tabs). It can optionally end with an asterisk (*) so that only the start of the string needs to be an exact
   *    match.</p>
   */
  onReason?: string;

  /**
   * <p>Contains a glob pattern to match against the decimal representation of the <code>ExitCode</code> returned for a
   *    job. The pattern can be up to 512 characters long, can contain only numbers, and can optionally end with an asterisk
   *    (*) so that only the start of the string needs to be an exact match.</p>
   */
  onExitCode?: string;

  /**
   * <p>Specifies the action to take if all of the specified conditions (<code>onStatusReason</code>,
   *     <code>onReason</code>, and <code>onExitCode</code>) are met. The values aren't case sensitive.</p>
   */
  action: RetryAction | string | undefined;
}

export namespace EvaluateOnExit {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: EvaluateOnExit): any => ({
    ...obj,
  });
}

/**
 * <p>The retry strategy associated with a job. For more information, see <a href="https://docs.aws.amazon.com/batch/latest/userguide/job_retries.html">Automated job retries</a> in the <i>AWS Batch User Guide</i>.</p>
 */
export interface RetryStrategy {
  /**
   * <p>The number of times to move a job to the <code>RUNNABLE</code> status. You can specify between 1 and 10
   *    attempts. If the value of <code>attempts</code> is greater than one, the job is retried on failure the same number of
   *    attempts as the value.</p>
   */
  attempts?: number;

  /**
   * <p>Array of up to 5 objects that specify conditions under which the job should be retried or failed. If this
   *    parameter is specified, then the <code>attempts</code> parameter must also be specified.</p>
   */
  evaluateOnExit?: EvaluateOnExit[];
}

export namespace RetryStrategy {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: RetryStrategy): any => ({
    ...obj,
  });
}

/**
 * <p>An object representing a job timeout configuration.</p>
 */
export interface JobTimeout {
  /**
   * <p>The time duration in seconds (measured from the job attempt's <code>startedAt</code> timestamp) after which
   *    AWS Batch terminates your jobs if they have not finished. The minimum value for the timeout is 60 seconds.</p>
   */
  attemptDurationSeconds?: number;
}

export namespace JobTimeout {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: JobTimeout): any => ({
    ...obj,
  });
}

/**
 * <p>An object representing an AWS Batch job definition.</p>
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
   * <p>The type of job definition. If the job is run on Fargate resources, then <code>multinode</code> isn't
   *    supported. For more information about multi-node parallel jobs, see <a href="https://docs.aws.amazon.com/batch/latest/userguide/multi-node-job-def.html">Creating a multi-node parallel job definition</a> in the
   *     <i>AWS Batch User Guide</i>.</p>
   */
  type: string | undefined;

  /**
   * <p>Default parameters or parameter substitution placeholders that are set in the job definition. Parameters are
   *    specified as a key-value pair mapping. Parameters in a <code>SubmitJob</code> request override any corresponding
   *    parameter defaults from the job definition. For more information about specifying parameters, see <a href="https://docs.aws.amazon.com/batch/latest/userguide/job_definition_parameters.html">Job Definition Parameters</a> in the
   *     <i>AWS Batch User Guide</i>.</p>
   */
  parameters?: { [key: string]: string };

  /**
   * <p>The retry strategy to use for failed jobs that are submitted with this job definition.</p>
   */
  retryStrategy?: RetryStrategy;

  /**
   * <p>An object with various properties specific to container-based jobs.</p>
   */
  containerProperties?: ContainerProperties;

  /**
   * <p>The timeout configuration for jobs that are submitted with this job definition. You can specify a timeout
   *    duration after which AWS Batch terminates your jobs if they haven't finished.</p>
   */
  timeout?: JobTimeout;

  /**
   * <p>An object with various properties specific to multi-node parallel jobs.</p>
   *          <note>
   *             <p>If the job runs on Fargate resources, then you must not specify <code>nodeProperties</code>; use
   *      <code>containerProperties</code> instead.</p>
   *          </note>
   */
  nodeProperties?: NodeProperties;

  /**
   * <p>The tags applied to the job definition.</p>
   */
  tags?: { [key: string]: string };

  /**
   * <p>Specifies whether to propagate the tags from the job or job definition to the corresponding Amazon ECS task. If no
   *    value is specified, the tags aren't propagated. Tags can only be propagated to the tasks during task creation. For
   *    tags with the same name, job tags are given priority over job definitions tags. If the total number of combined tags
   *    from the job and job definition is over 50, the job is moved to the <code>FAILED</code> state.</p>
   */
  propagateTags?: boolean;

  /**
   * <p>The platform capabilities required by the job definition. If no value is specified, it defaults to
   *     <code>EC2</code>. Jobs run on Fargate resources specify <code>FARGATE</code>.</p>
   */
  platformCapabilities?: (PlatformCapability | string)[];
}

export namespace JobDefinition {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: JobDefinition): any => ({
    ...obj,
  });
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

export namespace DescribeJobDefinitionsResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DescribeJobDefinitionsResponse): any => ({
    ...obj,
  });
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
   *             <p>This token should be treated as an opaque identifier that's only used to
   *  retrieve the next items in a list and not for other programmatic purposes.</p>
   *          </note>
   */
  nextToken?: string;
}

export namespace DescribeJobQueuesRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DescribeJobQueuesRequest): any => ({
    ...obj,
  });
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
 * <p>An object representing the details of an AWS Batch job queue.</p>
 */
export interface JobQueueDetail {
  /**
   * <p>The name of the job queue.</p>
   */
  jobQueueName: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the job queue.</p>
   */
  jobQueueArn: string | undefined;

  /**
   * <p>Describes the ability of the queue to accept new jobs. If the job queue state is <code>ENABLED</code>, it's able
   *    to accept jobs. If the job queue state is <code>DISABLED</code>, new jobs can't be added to the queue, but jobs
   *    already in the queue can finish.</p>
   */
  state: JQState | string | undefined;

  /**
   * <p>The status of the job queue (for example, <code>CREATING</code> or <code>VALID</code>).</p>
   */
  status?: JQStatus | string;

  /**
   * <p>A short, human-readable string to provide additional details about the current status of the job queue.</p>
   */
  statusReason?: string;

  /**
   * <p>The priority of the job queue. Job queues with a higher priority (or a higher integer value for the
   *     <code>priority</code> parameter) are evaluated first when associated with the same compute environment. Priority is
   *    determined in descending order, for example, a job queue with a priority value of <code>10</code> is given scheduling
   *    preference over a job queue with a priority value of <code>1</code>. All of the compute environments must be either
   *    EC2 (<code>EC2</code> or <code>SPOT</code>) or Fargate (<code>FARGATE</code> or <code>FARGATE_SPOT</code>); EC2 and
   *    Fargate compute environments can't be mixed.</p>
   */
  priority: number | undefined;

  /**
   * <p>The compute environments that are attached to the job queue and the order that job placement is preferred.
   *    Compute environments are selected for job placement in ascending order.</p>
   */
  computeEnvironmentOrder: ComputeEnvironmentOrder[] | undefined;

  /**
   * <p>The tags applied to the job queue. For more information, see <a href="https://docs.aws.amazon.com/batch/latest/userguide/using-tags.html">Tagging your AWS Batch resources</a> in
   *    <i>AWS Batch User Guide</i>.</p>
   */
  tags?: { [key: string]: string };
}

export namespace JobQueueDetail {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: JobQueueDetail): any => ({
    ...obj,
  });
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

export namespace DescribeJobQueuesResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DescribeJobQueuesResponse): any => ({
    ...obj,
  });
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

export namespace DescribeJobsRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DescribeJobsRequest): any => ({
    ...obj,
  });
}

/**
 * <p>An object representing the details of a container that's part of a job.</p>
 */
export interface ContainerDetail {
  /**
   * <p>The image used to start the container.</p>
   */
  image?: string;

  /**
   * <p>The number of vCPUs reserved for the container. For jobs that run on EC2 resources, you can specify the vCPU
   *    requirement for the job using <code>resourceRequirements</code>, but you can't specify the vCPU requirements in both
   *    the <code>vcpus</code> and <code>resourceRequirement</code> object. This parameter maps to <code>CpuShares</code> in
   *    the <a href="https://docs.docker.com/engine/api/v1.23/#create-a-container">Create a container</a> section of the <a href="https://docs.docker.com/engine/api/v1.23/">Docker Remote API</a> and the <code>--cpu-shares</code> option to
   *     <a href="https://docs.docker.com/engine/reference/run/">docker run</a>. Each vCPU is equivalent to 1,024 CPU shares. You must
   *    specify at least one vCPU. This is required but can be specified in several places. It must be specified for each
   *    node at least once.</p>
   *          <note>
   *             <p>This parameter isn't applicable to jobs that run on Fargate resources. For jobs that run on Fargate
   *     resources, you must specify the vCPU requirement for the job using <code>resourceRequirements</code>.</p>
   *          </note>
   */
  vcpus?: number;

  /**
   * <p>For jobs run on EC2 resources that didn't specify memory requirements using <code>ResourceRequirement</code>,
   *    the number of MiB of memory reserved for the job. For other jobs, including all run on Fargate resources, see
   *     <code>resourceRequirements</code>.</p>
   */
  memory?: number;

  /**
   * <p>The command that's passed to the container.</p>
   */
  command?: string[];

  /**
   * <p>The Amazon Resource Name (ARN) associated with the job upon execution.</p>
   */
  jobRoleArn?: string;

  /**
   * <p>The Amazon Resource Name (ARN) of the
   *    execution
   *    role that AWS Batch can assume. For more information, see <a href="https://docs.aws.amazon.com/batch/latest/userguide/execution-IAM-role.html">AWS Batch execution IAM role</a> in the
   *     <i>AWS Batch User Guide</i>.</p>
   */
  executionRoleArn?: string;

  /**
   * <p>A list of volumes associated with the job.</p>
   */
  volumes?: Volume[];

  /**
   * <p>The environment variables to pass to a container.</p>
   *          <note>
   *             <p>Environment variables must not start with <code>AWS_BATCH</code>; this naming
   *  convention is reserved for variables that are set by the AWS Batch service.</p>
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
   *             <p>This parameter isn't applicable to jobs running on Fargate resources.</p>
   *          </note>
   */
  ulimits?: Ulimit[];

  /**
   * <p>When this parameter is true, the container is given elevated permissions on the host container instance (similar
   *    to the <code>root</code> user). The default value is false.</p>
   *          <note>
   *             <p>This parameter isn't applicable to jobs running on Fargate resources and shouldn't be provided, or specified
   *     as false.</p>
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
   * <p>A short (255 max characters) human-readable string to provide additional details about a running or stopped
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
   * <p>The name of the CloudWatch Logs log stream associated with the container. The log group for AWS Batch jobs is
   *     <code>/aws/batch/job</code>. Each container attempt receives a log stream name when they reach the
   *     <code>RUNNING</code> status.</p>
   */
  logStreamName?: string;

  /**
   * <p>The instance type of the underlying host infrastructure of a multi-node parallel job.</p>
   *          <note>
   *             <p>This parameter isn't applicable to jobs running on Fargate resources.</p>
   *          </note>
   */
  instanceType?: string;

  /**
   * <p>The network interfaces associated with the job.</p>
   */
  networkInterfaces?: NetworkInterface[];

  /**
   * <p>The type and amount of resources to assign to a container. The supported resources include <code>GPU</code>,
   *     <code>MEMORY</code>, and <code>VCPU</code>.</p>
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
   *             <p>AWS Batch currently supports a subset of the logging drivers available to the Docker daemon (shown in the <a>LogConfiguration</a> data type). Additional log drivers might be available in future releases of the Amazon ECS
   *     container agent.</p>
   *          </note>
   *          <p>This parameter requires version 1.18 of the Docker Remote API or greater on your
   *  container instance. To check the Docker Remote API version on your container instance, log into your
   *  container instance and run the following command: <code>sudo docker version | grep "Server API version"</code>
   *          </p>
   *          <note>
   *             <p>The Amazon ECS container agent running on a container instance must register the logging drivers available on that
   *     instance with the <code>ECS_AVAILABLE_LOGGING_DRIVERS</code> environment variable before containers placed on that
   *     instance can use these log configuration options. For more information, see <a href="https://docs.aws.amazon.com/AmazonECS/latest/developerguide/ecs-agent-config.html">Amazon ECS Container Agent Configuration</a> in the
   *      <i>Amazon Elastic Container Service Developer Guide</i>.</p>
   *          </note>
   */
  logConfiguration?: LogConfiguration;

  /**
   * <p>The secrets to pass to the container. For more information, see <a href="https://docs.aws.amazon.com/batch/latest/userguide/specifying-sensitive-data.html">Specifying sensitive data</a> in the
   *     <i>AWS Batch User Guide</i>.</p>
   */
  secrets?: Secret[];

  /**
   * <p>The network configuration for jobs running on Fargate resources. Jobs running on EC2 resources must not
   *    specify this parameter.</p>
   */
  networkConfiguration?: NetworkConfiguration;

  /**
   * <p>The platform configuration for jobs running on Fargate resources. Jobs running on EC2 resources must not
   *    specify this parameter.</p>
   */
  fargatePlatformConfiguration?: FargatePlatformConfiguration;
}

export namespace ContainerDetail {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ContainerDetail): any => ({
    ...obj,
  });
}

/**
 * <p>An object representing an AWS Batch job dependency.</p>
 */
export interface JobDependency {
  /**
   * <p>The job ID of the AWS Batch job associated with this dependency.</p>
   */
  jobId?: string;

  /**
   * <p>The type of the job dependency.</p>
   */
  type?: ArrayJobDependency | string;
}

export namespace JobDependency {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: JobDependency): any => ({
    ...obj,
  });
}

/**
 * <p>An object representing the details of a multi-node parallel job node.</p>
 */
export interface NodeDetails {
  /**
   * <p>The node index for the node. Node index numbering begins at zero. This index is also available on the node with
   *    the <code>AWS_BATCH_JOB_NODE_INDEX</code> environment variable.</p>
   */
  nodeIndex?: number;

  /**
   * <p>Specifies whether the current node is the main node for a multi-node parallel job.</p>
   */
  isMainNode?: boolean;
}

export namespace NodeDetails {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: NodeDetails): any => ({
    ...obj,
  });
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
 * <p>An object representing an AWS Batch job.</p>
 */
export interface JobDetail {
  /**
   * <p>The Amazon Resource Name (ARN) of the job.</p>
   */
  jobArn?: string;

  /**
   * <p>The name of the job.</p>
   */
  jobName: string | undefined;

  /**
   * <p>The ID for the job.</p>
   */
  jobId: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the job queue that the job is associated with.</p>
   */
  jobQueue: string | undefined;

  /**
   * <p>The current status for the job.</p>
   *          <note>
   *             <p>If your jobs don't progress to <code>STARTING</code>, see <a href="https://docs.aws.amazon.com/batch/latest/userguide/troubleshooting.html#job_stuck_in_runnable">Jobs Stuck in RUNNABLE Status</a> in the
   *     troubleshooting section of the <i>AWS Batch User Guide</i>.</p>
   *          </note>
   */
  status: JobStatus | string | undefined;

  /**
   * <p>A list of job attempts associated with this job.</p>
   */
  attempts?: AttemptDetail[];

  /**
   * <p>A short, human-readable string to provide additional details about the current status of the job.</p>
   */
  statusReason?: string;

  /**
   * <p>The Unix timestamp (in milliseconds) for when the job was created. For non-array jobs and parent array jobs,
   *    this is when the job entered the <code>SUBMITTED</code> state (at the time <a>SubmitJob</a> was called).
   *    For array child jobs, this is when the child job was spawned by its parent and entered the <code>PENDING</code>
   *    state.</p>
   */
  createdAt?: number;

  /**
   * <p>The retry strategy to use for this job if an attempt fails.</p>
   */
  retryStrategy?: RetryStrategy;

  /**
   * <p>The Unix timestamp (in milliseconds) for when the job was started (when the job transitioned from the
   *     <code>STARTING</code> state to the <code>RUNNING</code> state). This parameter isn't provided for child jobs of
   *    array jobs or multi-node parallel jobs.</p>
   */
  startedAt: number | undefined;

  /**
   * <p>The Unix timestamp (in milliseconds) for when the job was stopped (when the job transitioned from the
   *     <code>RUNNING</code> state to a terminal state, such as <code>SUCCEEDED</code> or <code>FAILED</code>).</p>
   */
  stoppedAt?: number;

  /**
   * <p>A list of job IDs that this job depends on.</p>
   */
  dependsOn?: JobDependency[];

  /**
   * <p>The job definition that's used by this job.</p>
   */
  jobDefinition: string | undefined;

  /**
   * <p>Additional parameters passed to the job that replace parameter substitution placeholders or override any
   *    corresponding parameter defaults from the job definition.</p>
   */
  parameters?: { [key: string]: string };

  /**
   * <p>An object representing the details of the container that's associated with the job.</p>
   */
  container?: ContainerDetail;

  /**
   * <p>An object representing the details of a node that's associated with a multi-node parallel job.</p>
   */
  nodeDetails?: NodeDetails;

  /**
   * <p>An object representing the node properties of a multi-node parallel job.</p>
   *          <note>
   *             <p>This isn't applicable to jobs running on Fargate resources.</p>
   *          </note>
   */
  nodeProperties?: NodeProperties;

  /**
   * <p>The array properties of the job, if it is an array job.</p>
   */
  arrayProperties?: ArrayPropertiesDetail;

  /**
   * <p>The timeout configuration for the job.</p>
   */
  timeout?: JobTimeout;

  /**
   * <p>The tags applied to the job.</p>
   */
  tags?: { [key: string]: string };

  /**
   * <p>Specifies whether to propagate the tags from the job or job definition to the corresponding Amazon ECS task. If no
   *    value is specified, the tags aren't propagated. Tags can only be propagated to the tasks during task creation. For
   *    tags with the same name, job tags are given priority over job definitions tags. If the total number of combined tags
   *    from the job and job definition is over 50, the job is moved to the <code>FAILED</code> state.</p>
   */
  propagateTags?: boolean;

  /**
   * <p>The platform capabilities required by the job definition. If no value is specified, it defaults to
   *     <code>EC2</code>. Jobs run on Fargate resources specify <code>FARGATE</code>.</p>
   */
  platformCapabilities?: (PlatformCapability | string)[];
}

export namespace JobDetail {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: JobDetail): any => ({
    ...obj,
  });
}

export interface DescribeJobsResponse {
  /**
   * <p>The list of jobs.</p>
   */
  jobs?: JobDetail[];
}

export namespace DescribeJobsResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DescribeJobsResponse): any => ({
    ...obj,
  });
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
   * <p>The job status used to filter jobs in the specified queue. If you don't specify a status, only
   *     <code>RUNNING</code> jobs are returned.</p>
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
   *             <p>This token should be treated as an opaque identifier that's only used to
   *  retrieve the next items in a list and not for other programmatic purposes.</p>
   *          </note>
   */
  nextToken?: string;
}

export namespace ListJobsRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ListJobsRequest): any => ({
    ...obj,
  });
}

/**
 * <p>An object representing summary details of a container within a job.</p>
 */
export interface ContainerSummary {
  /**
   * <p>The exit code to return upon completion.</p>
   */
  exitCode?: number;

  /**
   * <p>A short (255 max characters) human-readable string to provide additional details about a running or stopped
   *    container.</p>
   */
  reason?: string;
}

export namespace ContainerSummary {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ContainerSummary): any => ({
    ...obj,
  });
}

/**
 * <p>An object representing the properties of a node that's associated with a multi-node parallel job.</p>
 */
export interface NodePropertiesSummary {
  /**
   * <p>Specifies whether the current node is the main node for a multi-node parallel job.</p>
   */
  isMainNode?: boolean;

  /**
   * <p>The number of nodes associated with a multi-node parallel job.</p>
   */
  numNodes?: number;

  /**
   * <p>The node index for the node. Node index numbering begins at zero. This index is also available on the node with
   *    the <code>AWS_BATCH_JOB_NODE_INDEX</code> environment variable.</p>
   */
  nodeIndex?: number;
}

export namespace NodePropertiesSummary {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: NodePropertiesSummary): any => ({
    ...obj,
  });
}

/**
 * <p>An object representing summary details of a job.</p>
 */
export interface JobSummary {
  /**
   * <p>The Amazon Resource Name (ARN) of the job.</p>
   */
  jobArn?: string;

  /**
   * <p>The ID of the job.</p>
   */
  jobId: string | undefined;

  /**
   * <p>The name of the job.</p>
   */
  jobName: string | undefined;

  /**
   * <p>The Unix timestamp for when the job was created. For non-array jobs and parent array jobs, this is when the job
   *    entered the <code>SUBMITTED</code> state (at the time <a>SubmitJob</a> was called). For array child jobs,
   *    this is when the child job was spawned by its parent and entered the <code>PENDING</code> state.</p>
   */
  createdAt?: number;

  /**
   * <p>The current status for the job.</p>
   */
  status?: JobStatus | string;

  /**
   * <p>A short, human-readable string to provide additional details about the current status of the job.</p>
   */
  statusReason?: string;

  /**
   * <p>The Unix timestamp for when the job was started (when the job transitioned from the <code>STARTING</code> state
   *    to the <code>RUNNING</code> state).</p>
   */
  startedAt?: number;

  /**
   * <p>The Unix timestamp for when the job was stopped (when the job transitioned from the <code>RUNNING</code> state
   *    to a terminal state, such as <code>SUCCEEDED</code> or <code>FAILED</code>).</p>
   */
  stoppedAt?: number;

  /**
   * <p>An object representing the details of the container that's associated with the job.</p>
   */
  container?: ContainerSummary;

  /**
   * <p>The array properties of the job, if it is an array job.</p>
   */
  arrayProperties?: ArrayPropertiesSummary;

  /**
   * <p>The node properties for a single node in a job summary list.</p>
   *          <note>
   *             <p>This isn't applicable to jobs running on Fargate resources.</p>
   *          </note>
   */
  nodeProperties?: NodePropertiesSummary;
}

export namespace JobSummary {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: JobSummary): any => ({
    ...obj,
  });
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

export namespace ListJobsResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ListJobsResponse): any => ({
    ...obj,
  });
}

export interface ListTagsForResourceRequest {
  /**
   * <p>The Amazon Resource Name (ARN) that identifies the resource that tags are listed for. AWS Batch resources that support tags are compute environments, jobs, job definitions, and job
   *  queues. ARNs for child jobs of array and multi-node parallel (MNP) jobs are not supported.</p>
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
  tags?: { [key: string]: string };
}

export namespace ListTagsForResourceResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ListTagsForResourceResponse): any => ({
    ...obj,
  });
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
   * <p>The name of the job definition to register. Up to 128 letters (uppercase and lowercase), numbers, hyphens, and
   *    underscores are allowed.</p>
   */
  jobDefinitionName: string | undefined;

  /**
   * <p>The type of job definition. For more information about multi-node parallel jobs, see <a href="https://docs.aws.amazon.com/batch/latest/userguide/multi-node-job-def.html">Creating a multi-node parallel job definition</a> in the
   *     <i>AWS Batch User Guide</i>.</p>
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
  parameters?: { [key: string]: string };

  /**
   * <p>An object with various properties specific to single-node container-based jobs. If the job definition's
   *     <code>type</code> parameter is <code>container</code>, then you must specify either <code>containerProperties</code>
   *    or <code>nodeProperties</code>.</p>
   *          <note>
   *             <p>If the job runs on Fargate resources, then you must not specify <code>nodeProperties</code>; use only
   *      <code>containerProperties</code>.</p>
   *          </note>
   */
  containerProperties?: ContainerProperties;

  /**
   * <p>An object with various properties specific to multi-node parallel jobs. If you specify node properties for a
   *    job, it becomes a multi-node parallel job. For more information, see <a href="https://docs.aws.amazon.com/batch/latest/userguide/multi-node-parallel-jobs.html">Multi-node Parallel Jobs</a> in the
   *     <i>AWS Batch User Guide</i>. If the job definition's <code>type</code> parameter is
   *    <code>container</code>, then you must specify either <code>containerProperties</code> or
   *    <code>nodeProperties</code>.</p>
   *          <note>
   *             <p>If the job runs on Fargate resources, then you must not specify <code>nodeProperties</code>; use
   *      <code>containerProperties</code> instead.</p>
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
   */
  propagateTags?: boolean;

  /**
   * <p>The timeout configuration for jobs that are submitted with this job definition, after which AWS Batch terminates
   *    your jobs if they have not finished. If a job is terminated due to a timeout, it isn't retried. The minimum value for
   *    the timeout is 60 seconds. Any timeout configuration that's specified during a <a>SubmitJob</a> operation
   *    overrides the timeout configuration defined here. For more information, see <a href="https://docs.aws.amazon.com/batch/latest/userguide/job_timeouts.html">Job Timeouts</a> in the <i>AWS Batch User Guide</i>.</p>
   */
  timeout?: JobTimeout;

  /**
   * <p>The tags that you apply to the job definition to help you categorize and organize your resources. Each tag
   *    consists of a key and an optional value. For more information, see <a href="https://docs.aws.amazon.com/batch/latest/userguide/using-tags.html">Tagging AWS Resources</a> in <i>AWS Batch User Guide</i>.</p>
   */
  tags?: { [key: string]: string };

  /**
   * <p>The platform capabilities required by the job definition. If no value is specified, it defaults to
   *     <code>EC2</code>. To run the job on Fargate resources, specify <code>FARGATE</code>.</p>
   */
  platformCapabilities?: (PlatformCapability | string)[];
}

export namespace RegisterJobDefinitionRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: RegisterJobDefinitionRequest): any => ({
    ...obj,
  });
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

export namespace RegisterJobDefinitionResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: RegisterJobDefinitionResponse): any => ({
    ...obj,
  });
}

/**
 * <p>The overrides that should be sent to a container.</p>
 */
export interface ContainerOverrides {
  /**
   * @deprecated
   *
   * <p>This parameter indicates the number of vCPUs reserved for the container.It overrides the <code>vcpus</code>
   *    parameter that's set in the job definition, but doesn't override any vCPU requirement specified in the
   *     <code>resourceRequirement</code> structure in the job definition.</p>
   *          <p>This parameter is supported for jobs that run on EC2 resources, but isn't supported for jobs that run on Fargate
   *    resources. For Fargate resources, you can only use <code>resourceRequirement</code>. For EC2 resources, you can use
   *    either this parameter or <code>resourceRequirement</code> but not both. </p>
   *          <p>This parameter maps to <code>CpuShares</code> in the <a href="https://docs.docker.com/engine/api/v1.23/#create-a-container">Create a container</a> section of the
   *    <a href="https://docs.docker.com/engine/api/v1.23/">Docker Remote API</a> and the <code>--cpu-shares</code> option to <a href="https://docs.docker.com/engine/reference/run/">docker run</a>.
   *    Each vCPU is equivalent to 1,024 CPU shares. You must specify at least one vCPU.</p>
   *          <note>
   *
   *             <p>This parameter isn't applicable to jobs that run on Fargate resources and shouldn't be provided. For jobs
   *     that run on Fargate resources, you must specify the vCPU requirement for the job using
   *      <code>resourceRequirements</code>.</p>
   *
   *          </note>
   */
  vcpus?: number;

  /**
   * @deprecated
   *
   * <p>This parameter indicates the amount of memory (in MiB) that's reserved for the job. It overrides the
   *     <code>memory</code> parameter set in the job definition, but doesn't override any memory requirement specified in
   *    the <code>ResourceRequirement</code> structure in the job definition.</p>
   *          <p>This parameter is supported for jobs that run on EC2 resources, but isn't supported for jobs that run on Fargate
   *    resources. For these resources, use <code>resourceRequirement</code> instead.</p>
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
   *             <p>This parameter isn't applicable to single-node container jobs or for jobs running on Fargate resources and
   *     shouldn't be provided.</p>
   *          </note>
   */
  instanceType?: string;

  /**
   * <p>The environment variables to send to the container. You can add new environment variables, which are added to
   *    the container at launch, or you can override the existing environment variables from the Docker image or the job
   *    definition.</p>
   *          <note>
   *             <p>Environment variables must not start with <code>AWS_BATCH</code>; this naming
   *  convention is reserved for variables that are set by the AWS Batch service.</p>
   *          </note>
   */
  environment?: KeyValuePair[];

  /**
   * <p>The type and amount of resources to assign to a container. This overrides the settings in the job definition.
   *    The supported resources include <code>GPU</code>, <code>MEMORY</code>, and <code>VCPU</code>.</p>
   */
  resourceRequirements?: ResourceRequirement[];
}

export namespace ContainerOverrides {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ContainerOverrides): any => ({
    ...obj,
  });
}

/**
 * <p>Object representing any node overrides to a job definition that's used in a <a>SubmitJob</a> API
 *    operation.</p>
 */
export interface NodePropertyOverride {
  /**
   * <p>The range of nodes, using node index values, that's used to override. A range of <code>0:3</code> indicates
   *    nodes with index values of <code>0</code> through <code>3</code>. If the starting range value is omitted
   *     (<code>:n</code>), then <code>0</code> is used to start the range. If the ending range value is omitted
   *     (<code>n:</code>), then the highest possible node index is used to end the range.</p>
   */
  targetNodes: string | undefined;

  /**
   * <p>The overrides that should be sent to a node range.</p>
   */
  containerOverrides?: ContainerOverrides;
}

export namespace NodePropertyOverride {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: NodePropertyOverride): any => ({
    ...obj,
  });
}

/**
 * <p>Object representing any node overrides to a job definition that's used in a <a>SubmitJob</a> API
 *    operation.</p>
 *          <note>
 *             <p>This isn't applicable to jobs running on Fargate resources and shouldn't be provided; use
 *      <code>containerOverrides</code> instead.</p>
 *          </note>
 */
export interface NodeOverrides {
  /**
   * <p>The number of nodes to use with a multi-node parallel job. This value overrides the number of nodes that are
   *    specified in the job definition. To use this override:</p>
   *          <ul>
   *             <li>
   *                <p>There must be at least one node range in your job definition that has an open upper boundary (such as
   *       <code>:</code> or <code>n:</code>).</p>
   *             </li>
   *             <li>
   *                <p>The lower boundary of the node range specified in the job definition must be fewer than the number of nodes
   *      specified in the override.</p>
   *             </li>
   *             <li>
   *                <p>The main node index specified in the job definition must be fewer than the number of nodes specified in the
   *      override.</p>
   *             </li>
   *          </ul>
   */
  numNodes?: number;

  /**
   * <p>The node property overrides for the job.</p>
   */
  nodePropertyOverrides?: NodePropertyOverride[];
}

export namespace NodeOverrides {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: NodeOverrides): any => ({
    ...obj,
  });
}

/**
 * <p>Contains the parameters for <code>SubmitJob</code>.</p>
 */
export interface SubmitJobRequest {
  /**
   * <p>The name of the job. The first character must be alphanumeric, and up to 128 letters (uppercase and lowercase),
   *    numbers, hyphens, and underscores are allowed.</p>
   */
  jobName: string | undefined;

  /**
   * <p>The job queue where the job is submitted. You can specify either the name or the Amazon Resource Name (ARN) of the queue.</p>
   */
  jobQueue: string | undefined;

  /**
   * <p>The array properties for the submitted job, such as the size of the array. The array size can be between 2 and
   *    10,000. If you specify array properties for a job, it becomes an array job. For more information, see <a href="https://docs.aws.amazon.com/batch/latest/userguide/array_jobs.html">Array Jobs</a> in the
   *    <i>AWS Batch User Guide</i>.</p>
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
  parameters?: { [key: string]: string };

  /**
   * <p>A list of container overrides in the JSON format that specify the name of a container in the specified job
   *    definition and the overrides it should receive. You can override the default command for a container, which is
   *    specified in the job definition or the Docker image, with a <code>command</code> override. You can also override
   *    existing environment variables on a container or add new environment variables to it with an <code>environment</code>
   *    override.</p>
   */
  containerOverrides?: ContainerOverrides;

  /**
   * <p>A list of node overrides in JSON format that specify the node range to target and the container overrides for
   *    that node range.</p>
   *          <note>
   *             <p>This parameter isn't applicable to jobs running on Fargate resources; use <code>containerOverrides</code>
   *     instead.</p>
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
   *    after which AWS Batch terminates your jobs if they haven't finished. If a job is terminated due to a timeout, it isn't
   *    retried. The minimum value for the timeout is 60 seconds. This configuration overrides any timeout configuration
   *    specified in the job definition. For array jobs, child jobs have the same timeout configuration as the parent job.
   *    For more information, see <a href="https://docs.aws.amazon.com/AmazonECS/latest/developerguide/job_timeouts.html">Job
   *     Timeouts</a> in the <i>Amazon Elastic Container Service Developer Guide</i>.</p>
   */
  timeout?: JobTimeout;

  /**
   * <p>The tags that you apply to the job request to help you categorize and organize your resources. Each tag consists
   *    of a key and an optional value. For more information, see <a href="https://docs.aws.amazon.com/general/latest/gr/aws_tagging.html">Tagging AWS Resources</a> in <i>AWS General
   *    Reference</i>.</p>
   */
  tags?: { [key: string]: string };
}

export namespace SubmitJobRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: SubmitJobRequest): any => ({
    ...obj,
  });
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

export namespace SubmitJobResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: SubmitJobResponse): any => ({
    ...obj,
  });
}

export interface TagResourceRequest {
  /**
   * <p>The Amazon Resource Name (ARN) of the resource that tags are added to. AWS Batch resources that support tags are compute environments, jobs, job definitions, and job
   *  queues. ARNs for child jobs of array and multi-node parallel (MNP) jobs are not supported.</p>
   */
  resourceArn: string | undefined;

  /**
   * <p>The tags that you apply to the resource to help you categorize and organize your resources. Each tag consists of
   *    a key and an optional value. For more information, see <a href="https://docs.aws.amazon.com/general/latest/gr/aws_tagging.html">Tagging AWS Resources</a> in <i>AWS General
   *    Reference</i>.</p>
   */
  tags: { [key: string]: string } | undefined;
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

/**
 * <p>Contains the parameters for <code>TerminateJob</code>.</p>
 */
export interface TerminateJobRequest {
  /**
   * <p>The AWS Batch job ID of the job to terminate.</p>
   */
  jobId: string | undefined;

  /**
   * <p>A message to attach to the job that explains the reason for canceling it. This message is returned by future
   *     <a>DescribeJobs</a> operations on the job. This message is also recorded in the AWS Batch activity
   *    logs.</p>
   */
  reason: string | undefined;
}

export namespace TerminateJobRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: TerminateJobRequest): any => ({
    ...obj,
  });
}

export interface TerminateJobResponse {}

export namespace TerminateJobResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: TerminateJobResponse): any => ({
    ...obj,
  });
}

export interface UntagResourceRequest {
  /**
   * <p>The Amazon Resource Name (ARN) of the resource from which to delete tags. AWS Batch resources that support tags are compute environments, jobs, job definitions, and job
   *  queues. ARNs for child jobs of array and multi-node parallel (MNP) jobs are not supported.</p>
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
 * <p>An object representing the attributes of a compute environment that can be updated. For more information, see
 *     <a href="https://docs.aws.amazon.com/batch/latest/userguide/compute_environments.html">Compute Environments</a> in the
 *     <i>AWS Batch User Guide</i>.</p>
 */
export interface ComputeResourceUpdate {
  /**
   * <p>The minimum number of Amazon EC2 vCPUs that an environment should maintain.</p>
   *          <note>
   *             <p>This parameter isn't applicable to jobs running on Fargate resources, and shouldn't be specified.</p>
   *          </note>
   */
  minvCpus?: number;

  /**
   * <p>The maximum number of Amazon EC2 vCPUs that an environment can reach.</p>
   *          <note>
   *             <p>With both <code>BEST_FIT_PROGRESSIVE</code> and <code>SPOT_CAPACITY_OPTIMIZED</code> allocation strategies,
   *     AWS Batch might need to exceed <code>maxvCpus</code> to meet your capacity requirements. In this event, AWS Batch never
   *     exceeds <code>maxvCpus</code> by more than a single instance. That is, no more than a single instance from among
   *     those specified in your compute environment.</p>
   *          </note>
   */
  maxvCpus?: number;

  /**
   * <p>The desired number of Amazon EC2 vCPUS in the compute environment.</p>
   *          <note>
   *             <p>This parameter isn't applicable to jobs running on Fargate resources, and shouldn't be specified.</p>
   *          </note>
   */
  desiredvCpus?: number;

  /**
   * <p>The VPC subnets that the compute resources are launched into. Fargate compute resources can contain up to 16
   *    subnets. Providing an empty list will be handled as if this parameter wasn't specified and no change is made. This
   *    can't be specified for EC2 compute resources. For more information, see <a href="https://docs.aws.amazon.com/vpc/latest/userguide/VPC_Subnets.html">VPCs and Subnets</a> in the <i>Amazon VPC User
   *     Guide</i>.</p>
   */
  subnets?: string[];

  /**
   * <p>The Amazon EC2 security groups associated with instances launched in the compute environment. This parameter is
   *    required for Fargate compute resources, where it can contain up to 5 security groups. This can't be specified for
   *    EC2 compute resources. Providing an empty list is handled as if this parameter wasn't specified and no change is
   *    made.</p>
   */
  securityGroupIds?: string[];
}

export namespace ComputeResourceUpdate {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ComputeResourceUpdate): any => ({
    ...obj,
  });
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
   *          <p>If the state is <code>ENABLED</code>, then the AWS Batch scheduler can attempt to place jobs from an associated
   *    job queue on the compute resources within the environment. If the compute environment is managed, then it can scale
   *    its instances out or in automatically, based on the job queue demand.</p>
   *          <p>If the state is <code>DISABLED</code>, then the AWS Batch scheduler doesn't attempt to place jobs within the
   *    environment. Jobs in a <code>STARTING</code> or <code>RUNNING</code> state continue to progress normally. Managed
   *    compute environments in the <code>DISABLED</code> state don't scale out. However, they scale in to
   *     <code>minvCpus</code> value after instances become idle.</p>
   */
  state?: CEState | string;

  /**
   * <p>Details of the compute resources managed by the compute environment. Required for a managed compute environment.
   *    For more information, see <a href="https://docs.aws.amazon.com/batch/latest/userguide/compute_environments.html">Compute
   *     Environments</a> in the <i>AWS Batch User Guide</i>.</p>
   */
  computeResources?: ComputeResourceUpdate;

  /**
   * <p>The full Amazon Resource Name (ARN) of the IAM role that allows AWS Batch to make calls to other AWS services on your behalf. For
   *    more information, see <a href="https://docs.aws.amazon.com/batch/latest/userguide/service_IAM_role.html">AWS Batch service IAM
   *     role</a> in the <i>AWS Batch User Guide</i>.</p>
   *          <important>
   *             <p>If the compute environment has a service-linked role, it cannot be changed to use a regular IAM role. If the
   *     compute environment has a regular IAM role, it cannot be changed to use a service-linked role.</p>
   *          </important>
   *
   *          <p>If your specified role has a path other than <code>/</code>, then you must either specify the full role ARN
   *    (this is recommended) or prefix the role name with the path.</p>
   *          <note>
   *             <p>Depending on how you created your AWS Batch service role, its ARN might contain the <code>service-role</code>
   *     path prefix. When you only specify the name of the service role, AWS Batch assumes that your ARN doesn't use the
   *      <code>service-role</code> path prefix. Because of this, we recommend that you specify the full ARN of your service
   *     role when you create compute environments.</p>
   *          </note>
   */
  serviceRole?: string;
}

export namespace UpdateComputeEnvironmentRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: UpdateComputeEnvironmentRequest): any => ({
    ...obj,
  });
}

export interface UpdateComputeEnvironmentResponse {
  /**
   * <p>The name of the compute environment. Up to 128 letters (uppercase and lowercase), numbers, hyphens, and
   *  underscores are allowed.</p>
   */
  computeEnvironmentName?: string;

  /**
   * <p>The Amazon Resource Name (ARN) of the compute environment.</p>
   */
  computeEnvironmentArn?: string;
}

export namespace UpdateComputeEnvironmentResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: UpdateComputeEnvironmentResponse): any => ({
    ...obj,
  });
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
   * <p>The priority of the job queue. Job queues with a higher priority (or a higher integer value for the
   *     <code>priority</code> parameter) are evaluated first when associated with the same compute environment. Priority is
   *    determined in descending order, for example, a job queue with a priority value of <code>10</code> is given scheduling
   *    preference over a job queue with a priority value of <code>1</code>. All of the compute environments must be either
   *    EC2 (<code>EC2</code> or <code>SPOT</code>) or Fargate (<code>FARGATE</code> or <code>FARGATE_SPOT</code>). EC2 and
   *    Fargate compute environments can't be mixed.</p>
   */
  priority?: number;

  /**
   * <p>Details the set of compute environments mapped to a job queue and their order relative to each other. This is
   *    one of the parameters used by the job scheduler to determine which compute environment should run a given job.
   *    Compute environments must be in the <code>VALID</code> state before you can associate them with a job queue. All of
   *    the compute environments must be either EC2 (<code>EC2</code> or <code>SPOT</code>) or Fargate
   *     (<code>FARGATE</code> or <code>FARGATE_SPOT</code>). EC2 and Fargate compute environments can't be mixed.</p>
   *          <note>
   *             <p>All compute environments that are associated with a job queue must share the same architecture. AWS Batch doesn't
   *     support mixing compute environment architecture types in a single job queue.</p>
   *          </note>
   */
  computeEnvironmentOrder?: ComputeEnvironmentOrder[];
}

export namespace UpdateJobQueueRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: UpdateJobQueueRequest): any => ({
    ...obj,
  });
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

export namespace UpdateJobQueueResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: UpdateJobQueueResponse): any => ({
    ...obj,
  });
}
