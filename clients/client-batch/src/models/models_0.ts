// smithy-typescript generated code
import type {
  ArrayJobDependency,
  AssignPublicIp,
  CEState,
  CEStatus,
  CEType,
  ContainerInsights,
  CRAllocationStrategy,
  CRType,
  CRUpdateAllocationStrategy,
  DeviceCgroupPermission,
  EFSAuthorizationConfigIAM,
  EFSTransitEncryption,
  EksAccessEntryDesiredState,
  EksAccessEntryStatus,
  FirelensConfigurationType,
  JobDefinitionType,
  JobQueueType,
  JobStateTimeLimitActionsAction,
  JobStateTimeLimitActionsState,
  JobStatus,
  JQState,
  JQStatus,
  LogDriver,
  OrchestrationType,
  PlatformCapability,
  QuotaShareIdleResourceAssignmentStrategy,
  QuotaShareInSharePreemptionState,
  QuotaShareResourceSharingStrategy,
  QuotaShareState,
  QuotaShareStatus,
  ResourceType,
  RetryAction,
  ServiceEnvironmentState,
  ServiceEnvironmentStatus,
  ServiceEnvironmentType,
  ServiceJobRetryAction,
  ServiceJobStatus,
  ServiceJobType,
  ServiceResourceIdName,
  UserdataType,
} from "./enums";

/**
 * An object that represents an Batch array job.
 *
 * @public
 */
export interface ArrayProperties {
  /**
   * The size of the array job.
   *
   * @public
   */
  size?: number | undefined;
}

/**
 * An object that represents the array properties of a job.
 *
 * @public
 */
export interface ArrayPropertiesDetail {
  /**
   * A summary of the number of array job children in each available job status. This parameter is returned for parent array jobs.
   *
   * @public
   */
  statusSummary?: Record<string, number> | undefined;

  /**
   * The Unix timestamp (in milliseconds) for when the `statusSummary` was last updated.
   *
   * @public
   */
  statusSummaryLastUpdatedAt?: number | undefined;

  /**
   * The size of the array job. This parameter is returned for parent array jobs.
   *
   * @public
   */
  size?: number | undefined;

  /**
   * The job index within the array that's associated with this job. This parameter is returned for array job children.
   *
   * @public
   */
  index?: number | undefined;
}

/**
 * An object that represents the array properties of a job.
 *
 * @public
 */
export interface ArrayPropertiesSummary {
  /**
   * The size of the array job. This parameter is returned for parent array jobs.
   *
   * @public
   */
  size?: number | undefined;

  /**
   * The job index within the array that's associated with this job. This parameter is returned for children of array jobs.
   *
   * @public
   */
  index?: number | undefined;

  /**
   * A summary of the number of array job children in each available job status. This parameter is returned for parent array jobs.
   *
   * @public
   */
  statusSummary?: Record<string, number> | undefined;

  /**
   * The Unix timestamp (in milliseconds) for when the `statusSummary` was last updated.
   *
   * @public
   */
  statusSummaryLastUpdatedAt?: number | undefined;
}

/**
 * An object that represents the elastic network interface for a multi-node parallel job node.
 *
 * @public
 */
export interface NetworkInterface {
  /**
   * The attachment ID for the network interface.
   *
   * @public
   */
  attachmentId?: string | undefined;

  /**
   * The private IPv6 address for the network interface.
   *
   * @public
   */
  ipv6Address?: string | undefined;

  /**
   * The private IPv4 address for the network interface.
   *
   * @public
   */
  privateIpv4Address?: string | undefined;
}

/**
 * An object that represents the details of a container that's part of a job attempt.
 *
 * @public
 */
export interface AttemptContainerDetail {
  /**
   * The Amazon Resource Name (ARN) of the Amazon ECS container instance that hosts the job attempt.
   *
   * @public
   */
  containerInstanceArn?: string | undefined;

  /**
   * The Amazon Resource Name (ARN) of the Amazon ECS task that's associated with the job attempt. Each container attempt receives a task ARN when they reach the `STARTING` status.
   *
   * @public
   */
  taskArn?: string | undefined;

  /**
   * The exit code for the job attempt. A non-zero exit code is considered failed.
   *
   * @public
   */
  exitCode?: number | undefined;

  /**
   * A short (255 max characters) human-readable string to provide additional details for a running or stopped container.
   *
   * @public
   */
  reason?: string | undefined;

  /**
   * The name of the CloudWatch Logs log stream that's associated with the container. The log group for Batch jobs is `/aws/batch/job`. Each container attempt receives a log stream name when they reach the `RUNNING` status.
   *
   * @public
   */
  logStreamName?: string | undefined;

  /**
   * The network interfaces that are associated with the job attempt.
   *
   * @public
   */
  networkInterfaces?: NetworkInterface[] | undefined;
}

/**
 * An object that represents the details of a container that's part of a job attempt.
 *
 * @public
 */
export interface AttemptTaskContainerDetails {
  /**
   * The exit code for the container’s attempt. A non-zero exit code is considered failed.
   *
   * @public
   */
  exitCode?: number | undefined;

  /**
   * The name of a container.
   *
   * @public
   */
  name?: string | undefined;

  /**
   * A short (255 max characters) string that's easy to understand and provides additional details for a running or stopped container.
   *
   * @public
   */
  reason?: string | undefined;

  /**
   * The name of the Amazon CloudWatch Logs log stream that's associated with the container. The log group for Batch jobs is `/aws/batch/job`. Each container attempt receives a log stream name when they reach the `RUNNING` status.
   *
   * @public
   */
  logStreamName?: string | undefined;

  /**
   * The network interfaces that are associated with the job attempt.
   *
   * @public
   */
  networkInterfaces?: NetworkInterface[] | undefined;
}

/**
 * An object that represents the details of a task.
 *
 * @public
 */
export interface AttemptEcsTaskDetails {
  /**
   * The Amazon Resource Name (ARN) of the container instance that hosts the task.
   *
   * @public
   */
  containerInstanceArn?: string | undefined;

  /**
   * The ARN of the Amazon ECS task.
   *
   * @public
   */
  taskArn?: string | undefined;

  /**
   * A list of containers that are included in the `taskProperties` list.
   *
   * @public
   */
  containers?: AttemptTaskContainerDetails[] | undefined;
}

/**
 * An object that represents a job attempt.
 *
 * @public
 */
export interface AttemptDetail {
  /**
   * The details for the container in this job attempt.
   *
   * @public
   */
  container?: AttemptContainerDetail | undefined;

  /**
   * The Unix timestamp (in milliseconds) for when the attempt was started (when the attempt transitioned from the `STARTING` state to the `RUNNING` state).
   *
   * @public
   */
  startedAt?: number | undefined;

  /**
   * The Unix timestamp (in milliseconds) for when the attempt was stopped (when the attempt transitioned from the `RUNNING` state to a terminal state, such as `SUCCEEDED` or `FAILED`).
   *
   * @public
   */
  stoppedAt?: number | undefined;

  /**
   * A short, human-readable string to provide additional details for the current status of the job attempt.
   *
   * @public
   */
  statusReason?: string | undefined;

  /**
   * The properties for a task definition that describes the container and volume definitions of an Amazon ECS task.
   *
   * @public
   */
  taskProperties?: AttemptEcsTaskDetails[] | undefined;
}

/**
 * Contains the parameters for `CancelJob`.
 *
 * @public
 */
export interface CancelJobRequest {
  /**
   * The Batch job ID of the job to cancel.
   *
   * @public
   */
  jobId: string | undefined;

  /**
   * A message to attach to the job that explains the reason for cancelling it. This message is returned by future DescribeJobs operations on the job. It is also recorded in the Batch activity logs.
   *
   * This parameter has a limit of 1024 characters.
   *
   * @public
   */
  reason: string | undefined;
}

/**
 * @public
 */
export interface CancelJobResponse {}

/**
 * Specifies the jobs to cancel and the reason for the cancellation.
 *
 * @public
 */
export interface CancelJobsRequest {
  /**
   * An array of up to 50 Batch job IDs of the jobs to cancel.
   *
   * @public
   */
  jobs: string[] | undefined;

  /**
   * A message to attach to the job that explains the reason for cancelling it. This message is returned by future DescribeJobs operations on the job. It is also recorded in the Batch activity logs.
   *
   * This parameter has a limit of 1024 characters.
   *
   * @public
   */
  reason: string | undefined;
}

/**
 * An object that contains the details of a job that couldn't be cancelled by a `CancelJobs` operation.
 *
 * @public
 */
export interface CancelJobsErrorDetail {
  /**
   * The Batch job ID of the job that couldn't be cancelled.
   *
   * @public
   */
  job: string | undefined;

  /**
   * An error code that identifies the reason the job couldn't be cancelled. Valid values are:
   *
   * - `ValidationException` – A job identifier in the request is malformed or isn't valid.
   * - `ClientException` – The request failed because of a client error.
   * - `ThrottlingException` – The request was throttled. Retry the request.
   * - `ServerException` – An internal error occurred. Retry the request.
   * - `AccessDenied` – The caller isn't authorized to perform the action on the specified job.
   *
   * @public
   */
  code: string | undefined;

  /**
   * A message that describes the reason the job couldn't be cancelled.
   *
   * @public
   */
  message: string | undefined;
}

/**
 * The result of a `CancelJobs` request, including the jobs whose cancellation request was accepted and the errors for jobs that couldn't be cancelled.
 *
 * @public
 */
export interface CancelJobsResponse {
  /**
   * A list of the job IDs whose cancellation request was accepted.
   *
   * @public
   */
  successful: string[] | undefined;

  /**
   * A list of `CancelJobsErrorDetail` items, one for each job that couldn't be cancelled. Each item includes the job ID along with a code and message that describe why the job wasn't cancelled.
   *
   * @public
   */
  errors: CancelJobsErrorDetail[] | undefined;
}

/**
 * Provides information used to select Amazon Machine Images (AMIs) for instances in the compute environment. If `Ec2Configuration` isn't specified, the default is `ECS_AL2023` ([Amazon ECS-optimized Amazon Linux 2023](https://docs.aws.amazon.com/AmazonECS/latest/developerguide/ecs-optimized_AMI.html)) for EC2 (ECS) compute environments and `EKS_AL2023` ([Amazon EKS-optimized Amazon Linux 2023 AMI](https://docs.aws.amazon.com/eks/latest/userguide/eks-optimized-ami.html)) for EKS compute environments.
 *
 * > **Note:** This object isn't applicable to jobs that are running on Fargate resources.
 *
 * @public
 */
export interface Ec2Configuration {
  /**
   * The image type to match with the instance type to select an AMI. The supported values are different for `ECS` and `EKS` resources.
   *
   * - **ECS**
   *
   *   If the `imageIdOverride` parameter isn't specified, then a recent [Amazon ECS-optimized Amazon Linux 2023 AMI](https://docs.aws.amazon.com/AmazonECS/latest/developerguide/ecs-optimized_AMI.html) (`ECS_AL2023`) is used. If a new image type is specified in an update, but neither an `imageId` nor a `imageIdOverride` parameter is specified, then the latest Amazon ECS optimized AMI for that image type that's supported by Batch is used.
   *
   *   > **Important:** Amazon Web Services is ending support for Amazon ECS Amazon Linux 2-optimized and accelerated AMIs on June 30, 2026. On January 12, 2026, Batch changed the default AMI for new Amazon ECS compute environments from Amazon Linux 2 to Amazon Linux 2023. Effective June 30, 2026, Batch will block creation of new Amazon ECS compute environments using Batch-provided Amazon Linux 2 AMIs. We strongly recommend migrating your existing Batch Amazon ECS compute environments to Amazon Linux 2023 prior to June 30, 2026. For more information on upgrading from AL2 to AL2023, see [How to migrate from ECS AL2 to ECS AL2023](https://docs.aws.amazon.com/batch/latest/userguide/ecs-migration-2023.html) in the *Batch User Guide*.
   *
   *   - **ECS_AL2**
   *
   *     [Amazon Linux 2](https://docs.aws.amazon.com/AmazonECS/latest/developerguide/ecs-optimized_AMI.html): Used for non-GPU instance families.
   *
   *   - **ECS_AL2_NVIDIA**
   *
   *     [Amazon Linux 2 (GPU)](https://docs.aws.amazon.com/AmazonECS/latest/developerguide/ecs-optimized_AMI.html#gpuami): Used for GPU instance families (for example `P4` and `G4`) and non Amazon Web Services Graviton-based instance types.
   *
   *   - **ECS_AL2023**
   *
   *     [Amazon Linux 2023](https://docs.aws.amazon.com/AmazonECS/latest/developerguide/ecs-optimized_AMI.html): Default for all non-GPU instance families.
   *
   *     > **Note:** Amazon Linux 2023 does not support `A1` instances.
   *
   *   - **ECS_AL2023_NVIDIA**
   *
   *     [Amazon Linux 2023 (GPU)](https://docs.aws.amazon.com/AmazonECS/latest/developerguide/ecs-optimized_AMI.html#gpuami): Default for all GPU instance families and can be used for all non Amazon Web Services Graviton-based instance types.
   *
   *     > **Note:** ECS_AL2023_NVIDIA doesn't support `p3` and `g3` instance types.
   *
   * - **EKS**
   *
   *   If the `imageIdOverride` parameter isn't specified, then a recent [Amazon EKS-optimized Amazon Linux 2023 AMI](https://docs.aws.amazon.com/eks/latest/userguide/eks-optimized-ami.html) (`EKS_AL2023`) is used. If a new image type is specified in an update, but neither an `imageId` nor a `imageIdOverride` parameter is specified, then the latest Amazon EKS optimized AMI for that image type that Batch supports is used.
   *
   *   > **Important:**
   *   >
   *   > Amazon Linux 2023 AMIs are the default on Batch for Amazon EKS.
   *   >
   *   > Amazon Web Services ended support for Amazon EKS AL2-optimized and AL2-accelerated AMIs on November 26, 2025. Batch Amazon EKS compute environments using Amazon Linux 2 will no longer receive software updates, security patches, or bug fixes from Amazon Web Services. We recommend migrating to Amazon Linux 2023. For more information on upgrading from AL2 to AL2023, see [How to upgrade from EKS AL2 to EKS AL2023](https://docs.aws.amazon.com/batch/latest/userguide/eks-migration-2023.html) in the *Batch User Guide*.
   *
   *   - **EKS_AL2**
   *
   *     [Amazon Linux 2](https://docs.aws.amazon.com/eks/latest/userguide/eks-optimized-ami.html): Used for non-GPU instance families.
   *
   *   - **EKS_AL2_NVIDIA**
   *
   *     [Amazon Linux 2 (accelerated)](https://docs.aws.amazon.com/eks/latest/userguide/eks-optimized-ami.html): Used for GPU instance families (for example, `P4` and `G4`) and can be used for all non Amazon Web Services Graviton-based instance types.
   *
   *   - **EKS_AL2023**
   *
   *     [Amazon Linux 2023](https://docs.aws.amazon.com/eks/latest/userguide/eks-optimized-ami.html): Default for non-GPU instance families.
   *
   *     > **Note:** Amazon Linux 2023 does not support `A1` instances.
   *
   *   - **EKS_AL2023_NVIDIA**
   *
   *     [Amazon Linux 2023 (accelerated)](https://docs.aws.amazon.com/eks/latest/userguide/eks-optimized-ami.html): Default for GPU instance families and can be used for all non Amazon Web Services Graviton-based instance types.
   *
   * @public
   */
  imageType: string | undefined;

  /**
   * The AMI ID used for instances launched in the compute environment that match the image type. This setting overrides the `imageId` set in the `computeResource` object.
   *
   * > **Note:** The AMI that you choose for a compute environment must match the architecture of the instance types that you intend to use for that compute environment. For example, if your compute environment uses A1 instance types, the compute resource AMI that you choose must support ARM instances. Amazon ECS vends both x86 and ARM versions of the Amazon ECS-optimized Amazon Linux 2023 AMI. For more information, see [Amazon ECS-optimized Amazon Linux 2023 AMI](https://docs.aws.amazon.com/AmazonECS/latest/developerguide/ecs-optimized_AMI.html#ecs-optimized-ami-linux-variants.html) in the *Amazon Elastic Container Service Developer Guide*.
   *
   * @public
   */
  imageIdOverride?: string | undefined;

  /**
   * The status of the Batch-provided default AMIs associated with the `imageType`.
   *
   * The field only appears after the compute environment has begun scaling instances using the `imageType`. The field is not present when an image is specified in `ComputeResources.imageId` (deprecated), the default launch template, or `Ec2Configuration.imageIdOverride`. The field is also not present when the compute environment has a launch template override. For more information on image selection, see [AMI selection order](https://docs.aws.amazon.com/batch/latest/userguide/ami-selection-order.html).
   *
   * > **Note:** This field is read-only and only appears in the [DescribeComputeEnvironments](https://docs.aws.amazon.com/batch/latest/APIReference/API_DescribeComputeEnvironments.html) response.
   *
   * - `LATEST` − Using the most recent AMI supported
   * - `UPDATE_AVAILABLE` − An updated AMI is available
   *
   *   - If a compute environment has multiple AMIs for the `imageType` and any one AMI has `UPDATE_AVAILABLE`, the status shows `UPDATE_AVAILABLE`.
   *   - For compute environments that use `BEST_FIT` as their allocation strategy, you can perform a [blue/green update](https://docs.aws.amazon.com/batch/latest/userguide/blue-green-updates.html) to update the AMI.
   *   - For all other compute environments, you can perform an [AMI version update](https://docs.aws.amazon.com/batch/latest/userguide/managing-ami-versions.html#updating-ami-versions) to update the AMI to the latest version.
   *
   * @public
   */
  batchImageStatus?: string | undefined;

  /**
   * The Kubernetes version for the compute environment. If you don't specify a value, the latest version that Batch supports is used.
   *
   * @public
   */
  imageKubernetesVersion?: string | undefined;
}

/**
 * An object that represents a launch template to use in place of the default launch template. You must specify either the launch template ID or launch template name in the request, but not both.
 *
 * If security groups are specified using both the `securityGroupIds` parameter of `CreateComputeEnvironment` and the launch template, the values in the `securityGroupIds` parameter of `CreateComputeEnvironment` will be used.
 *
 * You can define up to ten (10) overrides for each compute environment.
 *
 * > **Note:** This object isn't applicable to jobs that are running on Fargate resources.
 *
 * > **Note:** To unset all override templates for a compute environment, you can pass an empty array to the [UpdateComputeEnvironment.overrides](https://docs.aws.amazon.com/batch/latest/APIReference/API_UpdateComputeEnvironment.html) parameter, or not include the `overrides` parameter when submitting the `UpdateComputeEnvironment` API operation.
 *
 * @public
 */
export interface LaunchTemplateSpecificationOverride {
  /**
   * The ID of the launch template.
   *
   * **Note:** If you specify the `launchTemplateId` you can't specify the `launchTemplateName` as well.
   *
   * @public
   */
  launchTemplateId?: string | undefined;

  /**
   * The name of the launch template.
   *
   * **Note:** If you specify the `launchTemplateName` you can't specify the `launchTemplateId` as well.
   *
   * @public
   */
  launchTemplateName?: string | undefined;

  /**
   * The version number of the launch template, `$Default`, or `$Latest`.
   *
   * If the value is `$Default`, the default version of the launch template is used. If the value is `$Latest`, the latest version of the launch template is used.
   *
   * > **Important:** If the AMI ID that's used in a compute environment is from the launch template, the AMI isn't changed when the compute environment is updated. It's only changed if the `updateToLatestImageVersion` parameter for the compute environment is set to `true`. During an infrastructure update, if either `$Default` or `$Latest` is specified, Batch re-evaluates the launch template version, and it might use a different version of the launch template. This is the case even if the launch template isn't specified in the update. When updating a compute environment, changing the launch template requires an infrastructure update of the compute environment. For more information, see [Updating compute environments](https://docs.aws.amazon.com/batch/latest/userguide/updating-compute-environments.html) in the *Batch User Guide*.
   *
   * Default: `$Default`
   *
   * Latest: `$Latest`
   *
   * @public
   */
  version?: string | undefined;

  /**
   * The instance type or family that this override launch template should be applied to.
   *
   * This parameter is required when defining a launch template override.
   *
   * Information included in this parameter must meet the following requirements:
   *
   * - Must be a valid Amazon EC2 instance type or family.
   * - The following Batch `InstanceTypes` are not allowed: `optimal`, `default_x86_64`, and `default_arm64`.
   * - `targetInstanceTypes` can target only instance types and families that are included within the [`ComputeResource.instanceTypes`](https://docs.aws.amazon.com/batch/latest/APIReference/API_ComputeResource.html#Batch-Type-ComputeResource-instanceTypes) set. `targetInstanceTypes` doesn't need to include all of the instances from the `instanceType` set, but at least a subset. For example, if `ComputeResource.instanceTypes` includes `[m5, g5]`, `targetInstanceTypes` can include `[m5.2xlarge]` and `[m5.large]` but not `[c5.large]`.
   * - `targetInstanceTypes` included within the same launch template override or across launch template overrides can't overlap for the same compute environment. For example, you can't define one launch template override to target an instance family and another define an instance type within this same family.
   *
   * @public
   */
  targetInstanceTypes?: string[] | undefined;

  /**
   * The EKS node initialization process to use. You only need to specify this value if you are using a custom AMI. The default value is `EKS_BOOTSTRAP_SH`. If *imageType* is a custom AMI based on EKS_AL2023 or EKS_AL2023_NVIDIA then you must choose `EKS_NODEADM`.
   *
   * @public
   */
  userdataType?: UserdataType | undefined;
}

/**
 * An object that represents a launch template that's associated with a compute resource. You must specify either the launch template ID or launch template name in the request, but not both.
 *
 * If security groups are specified using both the `securityGroupIds` parameter of `CreateComputeEnvironment` and the launch template, the values in the `securityGroupIds` parameter of `CreateComputeEnvironment` will be used.
 *
 * > **Note:** This object isn't applicable to jobs that are running on Fargate resources.
 *
 * @public
 */
export interface LaunchTemplateSpecification {
  /**
   * The ID of the launch template.
   *
   * @public
   */
  launchTemplateId?: string | undefined;

  /**
   * The name of the launch template.
   *
   * @public
   */
  launchTemplateName?: string | undefined;

  /**
   * The version number of the launch template, `$Default`, or `$Latest`.
   *
   * If the value is `$Default`, the default version of the launch template is used. If the value is `$Latest`, the latest version of the launch template is used.
   *
   * > **Important:** If the AMI ID that's used in a compute environment is from the launch template, the AMI isn't changed when the compute environment is updated. It's only changed if the `updateToLatestImageVersion` parameter for the compute environment is set to `true`. During an infrastructure update, if either `$Default` or `$Latest` is specified, Batch re-evaluates the launch template version, and it might use a different version of the launch template. This is the case even if the launch template isn't specified in the update. When updating a compute environment, changing the launch template requires an infrastructure update of the compute environment. For more information, see [Updating compute environments](https://docs.aws.amazon.com/batch/latest/userguide/updating-compute-environments.html) in the *Batch User Guide*.
   *
   * Default: `$Default`
   *
   * Latest: `$Latest`
   *
   * @public
   */
  version?: string | undefined;

  /**
   * A launch template to use in place of the default launch template. You must specify either the launch template ID or launch template name in the request, but not both.
   *
   * You can specify up to ten (10) launch template overrides that are associated to unique instance types or families for each compute environment.
   *
   * > **Note:** To unset all override templates for a compute environment, you can pass an empty array to the [UpdateComputeEnvironment.overrides](https://docs.aws.amazon.com/batch/latest/APIReference/API_UpdateComputeEnvironment.html) parameter, or not include the `overrides` parameter when submitting the `UpdateComputeEnvironment` API operation.
   *
   * @public
   */
  overrides?: LaunchTemplateSpecificationOverride[] | undefined;

  /**
   * The EKS node initialization process to use. You only need to specify this value if you are using a custom AMI. The default value is `EKS_BOOTSTRAP_SH`. If *imageType* is a custom AMI based on EKS_AL2023 or EKS_AL2023_NVIDIA then you must choose `EKS_NODEADM`.
   *
   * @public
   */
  userdataType?: UserdataType | undefined;
}

/**
 * The infrastructure optimization configuration for an Amazon ECS Managed Instances capacity provider. Specifies the idle-instance scale-in behavior.
 *
 * @public
 */
export interface InfrastructureOptimization {
  /**
   * The number of seconds an instance can remain idle before it is terminated. Valid values are `-1` or `0` to `3600`. Use `-1` as a special value to disable scale-in (instances are never terminated for being idle). If not specified, a default value applies.
   *
   * @public
   */
  scaleInAfter?: number | undefined;
}

/**
 * The capacity reservation configuration for Amazon ECS Managed Instances. Use this to target On-Demand Capacity Reservations or Reserved Instances.
 *
 * @public
 */
export interface CapacityReservationRequest {
  /**
   * The Amazon Resource Name (ARN) of the capacity reservation group to target.
   *
   * @public
   */
  reservationGroupArn?: string | undefined;

  /**
   * The capacity reservation preference. Valid values:
   *
   * - `RESERVATIONS_ONLY` — Use only capacity reservations.
   * - `RESERVATIONS_FIRST` — Prefer capacity reservations but fall back to On-Demand if unavailable.
   * - `RESERVATIONS_EXCLUDED` — Do not use capacity reservations.
   *
   * @public
   */
  reservationPreference?: string | undefined;
}

/**
 * The instance type requirements for the Amazon ECS Managed Instances capacity provider. Use this to specify which Amazon EC2 instance types or instance families Amazon ECS can launch.
 *
 * @public
 */
export interface InstanceRequirementsRequest {
  /**
   * A list of specific instance types or instance families that Amazon ECS can launch (for example, `m5.large` or `g5`). When specified, only these instance types are used.
   *
   * @public
   */
  allowedInstanceTypes?: string[] | undefined;
}

/**
 * The local storage configuration for Amazon ECS Managed Instances.
 *
 * @public
 */
export interface ManagedInstancesLocalStorageConfiguration {
  /**
   * Specifies whether instance store volumes (local NVMe SSDs) are available to containers. When enabled, containers can use the instance store for high-performance temporary storage.
   *
   * @public
   */
  useLocalStorage?: boolean | undefined;
}

/**
 * The network configuration for Amazon ECS Managed Instances. Specifies the VPC subnets and security groups where instances are launched.
 *
 * @public
 */
export interface ManagedInstancesNetworkConfiguration {
  /**
   * The VPC subnets where managed instances are launched. If your subnets don't provide public IP addresses, they must have a NAT gateway for outbound internet access.
   *
   * @public
   */
  subnets: string[] | undefined;

  /**
   * The VPC security groups to associate with the managed instances.
   *
   * @public
   */
  securityGroups: string[] | undefined;
}

/**
 * The storage configuration for Amazon ECS Managed Instances.
 *
 * @public
 */
export interface ManagedInstancesStorageConfiguration {
  /**
   * The size of the root EBS volume in GiB for the managed instances.
   *
   * @public
   */
  storageSizeGiB?: number | undefined;
}

/**
 * The instance launch configuration for an Amazon ECS Managed Instances capacity provider. Specifies the instance profile, networking, instance selection constraints, capacity pricing model, storage, and monitoring settings.
 *
 * @public
 */
export interface InstanceLaunchTemplate {
  /**
   * The Amazon Resource Name (ARN) of the Amazon EC2 instance profile for the managed instances. The instance profile must use the `AmazonECSInstanceRolePolicyForManagedInstances` managed policy with a trust policy for `ec2.amazonaws.com`.
   *
   * @public
   */
  ec2InstanceProfileArn: string | undefined;

  /**
   * The network configuration for the managed instances. Specifies the VPC subnets and security groups where instances are launched.
   *
   * @public
   */
  networkConfiguration: ManagedInstancesNetworkConfiguration | undefined;

  /**
   * The instance type requirements for the capacity provider. Use this to constrain which Amazon EC2 instance types Amazon ECS can launch. If not specified, all available instance types are eligible.
   *
   * @public
   */
  instanceRequirements?: InstanceRequirementsRequest | undefined;

  /**
   * The capacity pricing model for the managed instances. Valid values:
   *
   * - `ON_DEMAND` (default) — On-Demand pricing.
   * - `SPOT` — Spot Instances, which can provide significant cost savings for fault-tolerant workloads.
   *
   * @public
   */
  capacityOptionType?: string | undefined;

  /**
   * The storage configuration for the managed instances. Configures the root EBS volume size. If not specified, the service uses the default EBS volume size for the instance type.
   *
   * @public
   */
  storageConfiguration?: ManagedInstancesStorageConfiguration | undefined;

  /**
   * The level of CloudWatch monitoring for the managed instances. Valid values are `BASIC` and `DETAILED`.
   *
   * @public
   */
  monitoring?: string | undefined;

  /**
   * Specifies whether FIPS 140-2 validated cryptographic modules are enabled on the managed instances. Not available in all Regions.
   *
   * @public
   */
  fipsEnabled?: boolean | undefined;

  /**
   * The capacity reservation configuration for the managed instances. Use this to target On-Demand Capacity Reservations or Reserved Instances for predictable capacity and cost optimization.
   *
   * @public
   */
  capacityReservations?: CapacityReservationRequest | undefined;

  /**
   * Specifies whether instance tags are accessible from the instance metadata service (IMDS). If not specified, instance tags are not accessible from IMDS.
   *
   * @public
   */
  instanceMetadataTagsPropagation?: boolean | undefined;

  /**
   * The local storage configuration for the managed instances. If not specified, instance store volumes are not available to containers.
   *
   * @public
   */
  localStorageConfiguration?: ManagedInstancesLocalStorageConfiguration | undefined;
}

/**
 * The configuration for an Amazon ECS Managed Instances capacity provider. This object is required when creating a compute environment with `computeResources.type` set to `ECS_MANAGED_INSTANCES`.
 *
 * @public
 */
export interface ManagedInstancesProvider {
  /**
   * Specifies whether tags on the capacity provider are propagated to the Amazon EC2 instances it launches. Valid values:
   *
   * - `CAPACITY_PROVIDER` — Propagates tags to instances.
   * - `NONE` (default) — Does not propagate tags to instances.
   *
   * @public
   */
  propagateTags?: string | undefined;

  /**
   * The Amazon Resource Name (ARN) of the IAM role that Amazon ECS assumes to manage Amazon EC2 instances on your behalf. This role must have a trust policy for `ecs.amazonaws.com`. You must have the `iam:PassRole` permission for this role with the condition `iam:PassedToService: ecs.amazonaws.com`.
   *
   * @public
   */
  infrastructureRoleArn: string | undefined;

  /**
   * The instance launch configuration for the Amazon ECS Managed Instances capacity provider. Contains networking, instance profile, instance requirements, capacity type, storage, and monitoring configuration.
   *
   * @public
   */
  instanceLaunchTemplate: InstanceLaunchTemplate | undefined;

  /**
   * The infrastructure optimization configuration for the capacity provider. Specifies the idle-instance scale-in behavior.
   *
   * @public
   */
  infrastructureOptimization?: InfrastructureOptimization | undefined;
}

/**
 * An object that represents a scaling policy for a compute environment.
 *
 * @public
 */
export interface ComputeScalingPolicy {
  /**
   * The minimum time (in minutes) that Batch keeps instances running in the compute environment after their jobs complete. For each instance, the delay period begins when the last job finishes. If no new jobs are placed on the instance during this delay, Batch terminates the instance once the delay expires.
   *
   * Valid Range: Minimum value of 20. Maximum value of 10080. Use 0 to unset and disable the scale down delay.
   *
   * > **Note:** Idle instances retained during the scale-down delay period are billable at standard EC2 pricing.
   *
   * > **Note:**
   * >
   * > The scale down delay does not apply to:
   * >
   * > - Instances being replaced during infrastructure updates
   * > - Newly launched instances that have not yet run any jobs
   * > - Spot instances reclaimed due to interruption
   *
   * @public
   */
  minScaleDownDelayMinutes?: number | undefined;
}

/**
 * An object that represents an Batch compute resource. For more information, see [Compute environments](https://docs.aws.amazon.com/batch/latest/userguide/compute_environments.html) in the *Batch User Guide*.
 *
 * @public
 */
export interface ComputeResource {
  /**
   * The type of compute environment: `EC2`, `SPOT`, `FARGATE`, `FARGATE_SPOT`, or `ECS_MANAGED_INSTANCES`. For more information, see [Compute environments](https://docs.aws.amazon.com/batch/latest/userguide/compute_environments.html) in the *Batch User Guide*.
   *
   * If you choose `SPOT`, you must also specify an Amazon EC2 Spot Fleet role with the `spotIamFleetRole` parameter. For more information, see [Amazon EC2 spot fleet role](https://docs.aws.amazon.com/batch/latest/userguide/spot_fleet_IAM_role.html) in the *Batch User Guide*.
   *
   * If you choose `ECS_MANAGED_INSTANCES`, you must also specify a `managedInstancesProvider` configuration. To use Spot capacity, set `capacityOptionType` to `SPOT` in the `managedInstancesProvider.instanceLaunchTemplate` configuration. For more information, see [Amazon ECS Managed Instances compute environments](https://docs.aws.amazon.com/batch/latest/userguide/ecs_managed_instances.html) in the *Batch User Guide*.
   *
   * > **Note:** Multi-node parallel jobs aren't supported on Spot Instances or Amazon ECS Managed Instances.
   *
   * @public
   */
  type: CRType | undefined;

  /**
   * The allocation strategy to use for the compute resource if not enough instances of the best fitting instance type can be allocated. This might be because of availability of the instance type in the Region or [Amazon EC2 service limits](https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/ec2-resource-limits.html). For more information, see [Allocation strategies](https://docs.aws.amazon.com/batch/latest/userguide/allocation-strategies.html) in the *Batch User Guide*.
   *
   * > **Note:** This parameter isn't applicable to jobs that are running on Fargate resources. Don't specify it.
   *
   * > **Note:** This parameter is required for Amazon EKS compute environments. For Amazon ECS compute environments, if this parameter isn't specified, the `BEST_FIT` allocation strategy is used by default.
   *
   * - **BEST_FIT (default)**
   *
   *   Batch selects an instance type that best fits the needs of the jobs with a preference for the lowest-cost instance type. If additional instances of the selected instance type aren't available, Batch waits for the additional instances to be available. If there aren't enough instances available or the user is reaching [Amazon EC2 service limits](https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/ec2-resource-limits.html), additional jobs aren't run until the currently running jobs are completed. This allocation strategy keeps costs lower but can limit scaling. If you're using Spot Fleets with `BEST_FIT`, the Spot Fleet IAM Role must be specified. Compute resources that use a `BEST_FIT` allocation strategy don't support infrastructure updates and can't update some parameters. For more information, see [Updating compute environments](https://docs.aws.amazon.com/batch/latest/userguide/updating-compute-environments.html) in the *Batch User Guide*.
   *
   * - **BEST_FIT_PROGRESSIVE**
   *
   *   Batch selects additional instance types that are large enough to meet the requirements of the jobs in the queue. Its preference is for instance types with lower cost vCPUs. If additional instances of the previously selected instance types aren't available, Batch selects new instance types.
   *
   * - **BEST_FIT_PROGRESSIVE_ORDERED**
   *
   *   > **Important:**
   *   >
   *   > This is an advanced allocation strategy only for customers who want to control which instance types are preferred during scaling.
   *   >
   *   > Placing large instance types at the top of the list may result in **over-provisioning** for small jobs. Placing small instance types at the top may cause the compute environment to reach Amazon EC2 instance count limits before reaching `maxvCpus`.
   *
   *   Batch selects instance types in the order they appear in the `instanceTypes` list. When an instance family is specified, sizes within that family are expanded using `BEST_FIT_PROGRESSIVE` logic—preferring sizes that best fit the jobs, with larger sizes as fallback. Instance types that cannot meet the resource requirements of the jobs are skipped. This strategy is only available for On-Demand Instance (`EC2`) compute resources.
   *
   *   If an instance family and an explicit instance type from that family both appear in `instanceTypes`, the explicit type takes its listed position and is excluded from the family expansion. For example, in `["m7a.4xlarge", "m7a", "m6a"]`, `m7a.4xlarge` is always placed first and is excluded from the `m7a` family expansion.
   *
   * - **SPOT_CAPACITY_OPTIMIZED**
   *
   *   Batch selects one or more instance types that are large enough to meet the requirements of the jobs in the queue. Its preference is for instance types that are less likely to be interrupted. This allocation strategy is only available for Spot Instance compute resources.
   *
   * - **SPOT_PRICE_CAPACITY_OPTIMIZED**
   *
   *   The price and capacity optimized allocation strategy looks at both price and capacity to select the Spot Instance pools that are the least likely to be interrupted and have the lowest possible price. This allocation strategy is only available for Spot Instance compute resources.
   *
   * - **SPOT_CAPACITY_OPTIMIZED_PRIORITIZED**
   *
   *   > **Important:**
   *   >
   *   > This is an advanced allocation strategy for customers who want to influence instance type selection during scaling. This strategy optimizes for **capacity first**, and honors instance type priorities on a best-effort basis (priorities are honored when they do not significantly reduce available Spot capacity).
   *   >
   *   > Placing large instance types at the top of the list may result in **over-provisioning** for small jobs. Placing small instance types at the top may cause the compute environment to reach Amazon EC2 instance count limits before reaching `maxvCpus`.
   *
   *   Batch selects instance types in the order they appear in the `instanceTypes` list, but **optimizes for capacity first**. The customer-defined priority is honored on a best-effort basis. When Spot Instance capacity pools are similarly available, priority order is respected. When capacity is constrained, Batch selects from the most available pools regardless of priority to minimize the likelihood of Spot Instance interruptions. This strategy is only available for Spot Instance compute resources.
   *
   * With any allocation strategy except `BEST_FIT` using On-Demand (`EC2`) compute resources, Batch might need to exceed `maxvCpus` to meet your capacity requirements. In this event, Batch never exceeds `maxvCpus` by more than a single instance.
   *
   * @public
   */
  allocationStrategy?: CRAllocationStrategy | undefined;

  /**
   * The minimum number of vCPUs that a compute environment should maintain (even if the compute environment is `DISABLED`).
   *
   * > **Note:** This parameter isn't applicable to jobs that are running on Fargate resources. Don't specify it.
   *
   * @public
   */
  minvCpus?: number | undefined;

  /**
   * The maximum number of vCPUs that a compute environment can support.
   *
   * > **Note:** With any allocation strategy except `BEST_FIT` using On-Demand (`EC2`) compute resources, Batch might need to exceed `maxvCpus` to meet your capacity requirements. In this event, Batch never exceeds `maxvCpus` by more than a single instance.
   *
   * @public
   */
  maxvCpus: number | undefined;

  /**
   * The desired number of vCPUS in the compute environment. Batch modifies this value between the minimum and maximum values based on job queue demand.
   *
   * > **Note:** This parameter isn't applicable to jobs that are running on Fargate resources. Don't specify it.
   *
   * @public
   */
  desiredvCpus?: number | undefined;

  /**
   * The instances types that can be launched. You can specify instance families to launch any instance type within those families (for example, `c5` or `p3`), or you can specify specific sizes within a family (such as `c5.8xlarge`).
   *
   * Batch can select the instance type for you if you choose one of the following:
   *
   * - `default_x86_64` to choose x86 based instance types (from the `m6i`, `c6i`, `r6i`, and `c7i` instance families) that matches the resource demands of the job queue.
   * - `default_arm64` to choose ARM based instance types (from the `m6g`, `c6g`, `r6g`, and `c7g` instance families) that matches the resource demands of the job queue.
   * - `optimal` Semantically equivalent to `default_x86_64`, see [Optimal instance type configuration to receive automatic instance family updates](https://docs.aws.amazon.com/batch/latest/userguide/optimal-default-instance-troubleshooting.html) for details.
   *
   * > **Note:**
   * >
   * > Instance family availability varies by Amazon Web Services Region. For example, some Amazon Web Services Regions may not have any fourth generation instance families but have fifth and sixth generation instance families.
   * >
   * > When using `default_x86_64` or `default_arm64` instance bundles, Batch selects instance families based on a balance of cost-effectiveness and performance. While newer generation instances often provide better price-performance, Batch may choose an earlier generation instance family if it provides the optimal combination of availability, cost, and performance for your workload. For example, in an Amazon Web Services Region where both c6i and c7i instances are available, Batch might select c6i instances if they offer better cost-effectiveness for your specific job requirements. For more information on Batch instance types and Amazon Web Services Region availability, see [Instance type compute table](https://docs.aws.amazon.com/batch/latest/userguide/instance-type-compute-table.html) in the *Batch User Guide*.
   * >
   * > Batch periodically updates your instances in default bundles to newer, more cost-effective options. Updates happen automatically without requiring any action from you. Your workloads continue running during updates with no interruption
   *
   * > **Note:** This parameter isn't applicable to jobs that are running on Fargate resources. Don't specify it.
   *
   * > **Note:** When you create a compute environment, the instance types that you select for the compute environment must share the same architecture. For example, you can't mix x86 and ARM instances in the same compute environment.
   *
   * @public
   */
  instanceTypes?: string[] | undefined;

  /**
   * The Amazon Machine Image (AMI) ID used for instances launched in the compute environment. This parameter is overridden by the `imageIdOverride` member of the `Ec2Configuration` structure.
   *
   * > **Note:** This parameter isn't applicable to jobs that are running on Fargate resources. Don't specify it.
   *
   * > **Note:** The AMI that you choose for a compute environment must match the architecture of the instance types that you intend to use for that compute environment. For example, if your compute environment uses A1 instance types, the compute resource AMI that you choose must support ARM instances. Amazon ECS vends both x86 and ARM versions of the Amazon ECS-optimized Amazon Linux 2023 AMI. For more information, see [Amazon ECS-optimized Amazon Linux 2023 AMI](https://docs.aws.amazon.com/AmazonECS/latest/developerguide/ecs-optimized_AMI.html#ecs-optimized-ami-linux-variants.html) in the *Amazon Elastic Container Service Developer Guide*.
   *
   * @deprecated This field is deprecated, use ec2Configuration[].imageIdOverride instead.
   * @public
   */
  imageId?: string | undefined;

  /**
   * The VPC subnets where the compute resources are launched. These subnets must be within the same VPC. Fargate compute resources can contain up to 16 subnets. For more information, see [VPCs and subnets](https://docs.aws.amazon.com/vpc/latest/userguide/VPC_Subnets.html) in the *Amazon VPC User Guide*. This parameter is required for compute environments using `EC2`, `SPOT`, `FARGATE`, or `FARGATE_SPOT` compute resources.
   *
   * > **Note:**
   * >
   * > Batch on Amazon EC2 and Batch on Amazon EKS support Local Zones. For more information, see [Local Zones](https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/using-regions-availability-zones.html#concepts-local-zones) in the *Amazon EC2 User Guide for Linux Instances*, [Amazon EKS and Amazon Web Services Local Zones](https://docs.aws.amazon.com/eks/latest/userguide/local-zones.html) in the *Amazon EKS User Guide* and [Amazon ECS clusters in Local Zones, Wavelength Zones, and Amazon Web Services Outposts](https://docs.aws.amazon.com/AmazonECS/latest/developerguide/cluster-regions-zones.html#clusters-local-zones) in the *Amazon ECS Developer Guide*.
   * >
   * > Batch on Fargate doesn't currently support Local Zones.
   *
   * @public
   */
  subnets?: string[] | undefined;

  /**
   * The Amazon EC2 security groups that are associated with instances launched in the compute environment. One or more security groups must be specified, either in `securityGroupIds` or using a launch template referenced in `launchTemplate`. This parameter is required for jobs that are running on Fargate resources and must contain at least one security group. Fargate doesn't support launch templates. If security groups are specified using both `securityGroupIds` and `launchTemplate`, the values in `securityGroupIds` are used.
   *
   * @public
   */
  securityGroupIds?: string[] | undefined;

  /**
   * The Amazon EC2 key pair that's used for instances launched in the compute environment. You can use this key pair to log in to your instances with SSH.
   *
   * > **Note:** This parameter isn't applicable to jobs that are running on Fargate resources. Don't specify it.
   *
   * @public
   */
  ec2KeyPair?: string | undefined;

  /**
   * The Amazon ECS instance profile applied to Amazon EC2 instances in a compute environment. This parameter is required for Amazon EC2 instances types. You can specify the short name or full Amazon Resource Name (ARN) of an instance profile. For example, `ecsInstanceRole` or `arn:aws:iam::<aws_account_id>:instance-profile/ecsInstanceRole`. For more information, see [Amazon ECS instance role](https://docs.aws.amazon.com/batch/latest/userguide/instance_IAM_role.html) in the *Batch User Guide*.
   *
   * > **Note:** This parameter isn't applicable to jobs that are running on Fargate resources. Don't specify it.
   *
   * @public
   */
  instanceRole?: string | undefined;

  /**
   * Key-value pair tags to be applied to Amazon EC2 resources that are launched in the compute environment. For Batch, these take the form of `"String1": "String2"`, where `String1` is the tag key and `String2` is the tag value (for example, `\{ "Name": "Batch Instance - C4OnDemand" \}`). This is helpful for recognizing your Batch instances in the Amazon EC2 console. Updating these tags requires an infrastructure update to the compute environment. For more information, see [Updating compute environments](https://docs.aws.amazon.com/batch/latest/userguide/updating-compute-environments.html) in the *Batch User Guide*. These tags aren't seen when using the Batch `ListTagsForResource` API operation.
   *
   * > **Note:** This parameter isn't applicable to jobs that are running on Fargate resources. Don't specify it.
   *
   * @public
   */
  tags?: Record<string, string> | undefined;

  /**
   * The Amazon EC2 placement group to associate with your compute resources. If you intend to submit multi-node parallel jobs to your compute environment, you should consider creating a cluster placement group and associate it with your compute resources. This keeps your multi-node parallel job on a logical grouping of instances within a single Availability Zone with high network flow potential. For more information, see [Placement groups](https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/placement-groups.html) in the *Amazon EC2 User Guide for Linux Instances*.
   *
   * > **Note:** This parameter isn't applicable to jobs that are running on Fargate resources. Don't specify it.
   *
   * @public
   */
  placementGroup?: string | undefined;

  /**
   * The maximum percentage that a Spot Instance price can be when compared with the On-Demand price for that instance type before instances are launched. For example, if your maximum percentage is 20%, then the Spot price must be less than 20% of the current On-Demand price for that Amazon EC2 instance. You always pay the lowest (market) price and never more than your maximum percentage. If you leave this field empty, the default value is 100% of the On-Demand price. For most use cases, we recommend leaving this field empty.
   *
   * > **Note:** This parameter isn't applicable to jobs that are running on Fargate resources. Don't specify it.
   *
   * @public
   */
  bidPercentage?: number | undefined;

  /**
   * The Amazon Resource Name (ARN) of the Amazon EC2 Spot Fleet IAM role applied to a `SPOT` compute environment. This role is required if the allocation strategy set to `BEST_FIT` or if the allocation strategy isn't specified. For more information, see [Amazon EC2 spot fleet role](https://docs.aws.amazon.com/batch/latest/userguide/spot_fleet_IAM_role.html) in the *Batch User Guide*.
   *
   * > **Note:** This parameter isn't applicable to jobs that are running on Fargate resources. Don't specify it.
   *
   * > **Important:** To tag your Spot Instances on creation, the Spot Fleet IAM role specified here must use the newer **AmazonEC2SpotFleetTaggingRole** managed policy. The previously recommended **AmazonEC2SpotFleetRole** managed policy doesn't have the required permissions to tag Spot Instances. For more information, see [Spot instances not tagged on creation](https://docs.aws.amazon.com/batch/latest/userguide/troubleshooting.html#spot-instance-no-tag) in the *Batch User Guide*.
   *
   * @public
   */
  spotIamFleetRole?: string | undefined;

  /**
   * The launch template to use for your compute resources. Any other compute resource parameters that you specify in a [CreateComputeEnvironment](https://docs.aws.amazon.com/batch/latest/APIReference/API_CreateComputeEnvironment.html) API operation override the same parameters in the launch template. You must specify either the launch template ID or launch template name in the request, but not both. For more information, see [Launch template support](https://docs.aws.amazon.com/batch/latest/userguide/launch-templates.html) in the *Batch User Guide*.
   *
   * > **Note:** This parameter isn't applicable to jobs that are running on Fargate resources. Don't specify it.
   *
   * @public
   */
  launchTemplate?: LaunchTemplateSpecification | undefined;

  /**
   * Provides information that's used to select Amazon Machine Images (AMIs) for Amazon EC2 instances in the compute environment. If `Ec2Configuration` isn't specified, the default is `ECS_AL2023` for EC2 (ECS) compute environments and `EKS_AL2023` for EKS compute environments.
   *
   * One or two values can be provided.
   *
   * > **Note:** This parameter isn't applicable to jobs that are running on Fargate resources. Don't specify it.
   *
   * @public
   */
  ec2Configuration?: Ec2Configuration[] | undefined;

  /**
   * The scaling policy configuration for the compute environment.
   *
   * > **Note:** This parameter isn't applicable to jobs that are running on Fargate resources. Don't specify it.
   *
   * @public
   */
  scalingPolicy?: ComputeScalingPolicy | undefined;

  /**
   * The configuration for the Amazon ECS Managed Instances capacity provider. This parameter is required when `computeResources.type` is `ECS_MANAGED_INSTANCES` and must not be specified for other compute environment types.
   *
   * For more information, see [Amazon ECS Managed Instances compute environments](https://docs.aws.amazon.com/batch/latest/userguide/ecs_managed_instances.html) in the *Batch User Guide*.
   *
   * @public
   */
  managedInstancesProvider?: ManagedInstancesProvider | undefined;

  /**
   * The tags to apply to the Amazon ECS capacity provider and Amazon EC2 instances launched by the compute environment. These tags are separate from the compute environment resource tags (the top-level `tags` parameter). Use `capacityTags` for cost allocation and organization of the underlying infrastructure resources.
   *
   * This parameter is only valid for `ECS_MANAGED_INSTANCES` compute environments. You must have the `batch:SetCapacityTags` permission on the compute environment resource to use this parameter.
   *
   * @public
   */
  capacityTags?: Record<string, string> | undefined;
}

/**
 * The Amazon ECS settings for a compute environment, including the CloudWatch Container Insights mode. Use this structure with `CreateComputeEnvironment` and `UpdateComputeEnvironment`.
 *
 * @public
 */
export interface EcsSettings {
  /**
   * Specifies the CloudWatch Container Insights mode for the compute environment. Valid values are:
   *
   * - **ENABLED**
   *
   *   Turns on standard Container Insights, which collects CPU, memory, disk, and network utilization metrics for the compute environment.
   *
   * - **ENHANCED**
   *
   *   Turns on enhanced Container Insights, which collects the standard metrics along with additional per-task observability metrics.
   *
   * - **DISABLED**
   *
   *   Turns off Container Insights for the compute environment.
   *
   * If you don't specify a value, the default is `DISABLED`. For more information, see [Container Insights](https://docs.aws.amazon.com/batch/latest/userguide/cloudwatch-container-insights.html) in the *Batch User Guide*.
   *
   * @public
   */
  containerInsights?: ContainerInsights | undefined;
}

/**
 * Configures whether Batch manages an Amazon EKS access entry on the cluster for the compute environment. For information on how the fields interact with the cluster's `authenticationMode` and with other compute environments that share the cluster, see [Amazon EKS access entry authentication](https://docs.aws.amazon.com/batch/latest/userguide/eks-access-entries.html) in the *Batch User Guide*.
 *
 * > **Note:** Setting `desiredState=ENABLED` on a single compute environment does not guarantee that Batch creates an access entry, and setting `desiredState=DISABLED` on a single compute environment does not guarantee that Batch deletes one. Batch compares the `desiredState` across all compute environments that target the same cluster. The Batch-managed access entry is created only when all compute environments have `desiredState=ENABLED`, and deleted only when all have `desiredState=DISABLED`. If you have multiple compute environments on the same cluster, set `desiredState` consistently across all of them to avoid uncertainty. For more information, see [Reconciling desiredState across compute environments](https://docs.aws.amazon.com/batch/latest/userguide/eks-access-entries.html#eks-access-entries-reconciliation) in the *Batch User Guide*.
 *
 * @public
 */
export interface EksAccessEntry {
  /**
   * The desired access entry state for the compute environment. Valid values:
   *
   * - **ENABLED**
   *
   *   Batch manages an access entry on the cluster for the compute environment.
   *
   * - **DISABLED**
   *
   *   Batch deletes the Batch-managed access entry for the cluster. This value is rejected if the cluster's `authenticationMode` is `API`, because such a cluster doesn't support the `aws-auth` ConfigMap.
   *
   * - **INHERIT_FROM_CLUSTER**
   *
   *   Batch defers to the cluster's current access entry `status`. On a cluster whose authentication mode is `API`, Batch creates and manages an access entry. On a cluster whose authentication mode is `API_AND_CONFIG_MAP` or `CONFIG_MAP`, Batch neither adds nor removes an access entry.
   *
   * @public
   */
  desiredState: EksAccessEntryDesiredState | undefined;

  /**
   * The observed state of the access entry on the cluster. `ACTIVE` means that an access entry for the compute environment exists on the cluster and takes precedence over the `aws-auth` ConfigMap. `INACTIVE` means that no Batch-managed access entry is present. This is a read-only field returned by `DescribeComputeEnvironments`.
   *
   * @public
   */
  status?: EksAccessEntryStatus | undefined;
}

/**
 * Configuration for the Amazon EKS cluster that supports the Batch compute environment. The cluster must exist before the compute environment can be created.
 *
 * @public
 */
export interface EksConfiguration {
  /**
   * The Amazon Resource Name (ARN) of the Amazon EKS cluster. An example is `arn:aws:eks:us-east-1:123456789012:cluster/ClusterForBatch`.
   *
   * @public
   */
  eksClusterArn: string | undefined;

  /**
   * The namespace of the Amazon EKS cluster. Batch manages pods in this namespace. The value can't left empty or null. It must be fewer than 64 characters long, can't be set to `default`, can't start with "`kube-`," and must match this regular expression: `^[a-z0-9]([-a-z0-9]*[a-z0-9])?$`. For more information, see [Namespaces](https://kubernetes.io/docs/concepts/overview/working-with-objects/namespaces/) in the Kubernetes documentation.
   *
   * @public
   */
  kubernetesNamespace: string | undefined;

  /**
   * The Batch-managed Amazon EKS access entry for the compute environment. Set `desiredState` to declare whether Batch manages an access entry on the cluster. In a `DescribeComputeEnvironments` response, `desiredState` is the value that Batch recorded for the compute environment and `status` is the observed state of the access entry on the cluster. To change the access entry on an existing compute environment, use [`EksConfigurationUpdate.accessEntry`](https://docs.aws.amazon.com/batch/latest/APIReference/API_EksConfigurationUpdate.html#Batch-Type-EksConfigurationUpdate-accessEntry).
   *
   * Whether the entry is provisioned on the cluster depends on the cluster's `authenticationMode` and the `desiredState` recorded for each Batch compute environment targeting the cluster. For more information, see [Amazon EKS access entry authentication](https://docs.aws.amazon.com/batch/latest/userguide/eks-access-entries.html) in the *Batch User Guide*.
   *
   * If you don't specify this field, Batch doesn't record a `desiredState` for the compute environment and `DescribeComputeEnvironments` doesn't return one. For the purpose of provisioning the access entry, Batch behaves as it does for `INHERIT_FROM_CLUSTER`.
   *
   * @public
   */
  accessEntry?: EksAccessEntry | undefined;
}

/**
 * Contains the parameters for `CreateComputeEnvironment`.
 *
 * @public
 */
export interface CreateComputeEnvironmentRequest {
  /**
   * The name for your compute environment. It can be up to 128 characters long. It can contain uppercase and lowercase letters, numbers, hyphens (-), and underscores (_).
   *
   * @public
   */
  computeEnvironmentName: string | undefined;

  /**
   * The type of the compute environment: `MANAGED` or `UNMANAGED`. For more information, see [Compute Environments](https://docs.aws.amazon.com/batch/latest/userguide/compute_environments.html) in the *Batch User Guide*.
   *
   * @public
   */
  type: CEType | undefined;

  /**
   * The state of the compute environment. A compute environment must be created in the `ENABLED` state.
   *
   * If the state is `ENABLED`, then the compute environment accepts jobs from a queue and can scale out automatically based on queues.
   *
   * If the state is `ENABLED`, then the Batch scheduler can attempt to place jobs from an associated job queue on the compute resources within the environment. If the compute environment is managed, then it can scale its instances out or in automatically, based on the job queue demand.
   *
   * If the state is `DISABLED`, then the Batch scheduler doesn't attempt to place jobs within the environment. Jobs in a `STARTING` or `RUNNING` state continue to progress normally. Managed compute environments in the `DISABLED` state don't scale out.
   *
   * > **Note:** Compute environments in a `DISABLED` state may continue to incur billing charges, for example, if they have running instances due to jobs that are still executing or a non-zero `minvCpus` setting. To prevent additional charges, disable and delete the compute environment.
   *
   * When an instance is idle, the instance scales down to the `minvCpus` value. However, the instance size doesn't change. For example, consider a `c5.8xlarge` instance with a `minvCpus` value of `4` and a `desiredvCpus` value of `36`. This instance doesn't scale down to a `c5.large` instance.
   *
   * @public
   */
  state?: CEState | undefined;

  /**
   * The maximum number of vCPUs for an unmanaged compute environment. This parameter is only used for fair-share scheduling to reserve vCPU capacity for new share identifiers. If this parameter isn't provided for a fair-share job queue, no vCPU capacity is reserved.
   *
   * > **Note:** This parameter is only supported when the `type` parameter is set to `UNMANAGED`.
   *
   * @public
   */
  unmanagedvCpus?: number | undefined;

  /**
   * Details about the compute resources managed by the compute environment. This parameter is required for managed compute environments. For more information, see [Compute Environments](https://docs.aws.amazon.com/batch/latest/userguide/compute_environments.html) in the *Batch User Guide*.
   *
   * @public
   */
  computeResources?: ComputeResource | undefined;

  /**
   * The full Amazon Resource Name (ARN) of the IAM role that allows Batch to make calls to other Amazon Web Services services on your behalf. For more information, see [Batch service IAM role](https://docs.aws.amazon.com/batch/latest/userguide/service_IAM_role.html) in the *Batch User Guide*.
   *
   * > **Important:**
   * >
   * > If your account already created the Batch service-linked role, that role is used by default for your compute environment unless you specify a different role here. If the Batch service-linked role doesn't exist in your account, and no role is specified here, the service attempts to create the Batch service-linked role in your account.
   * >
   * > This automatic service-linked role creation only applies to `MANAGED` compute environments. For `UNMANAGED` compute environments, you must explicitly specify a `serviceRole`.
   *
   * If your specified role has a path other than `/`, then you must specify either the full role ARN (recommended) or prefix the role name with the path. For example, if a role with the name `bar` has a path of `/foo/`, specify `/foo/bar` as the role name. For more information, see [Friendly names and paths](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_identifiers.html#identifiers-friendly-names) in the *IAM User Guide*.
   *
   * > **Note:** Depending on how you created your Batch service role, its ARN might contain the `service-role` path prefix. When you only specify the name of the service role, Batch assumes that your ARN doesn't use the `service-role` path prefix. Because of this, we recommend that you specify the full ARN of your service role when you create compute environments.
   *
   * @public
   */
  serviceRole?: string | undefined;

  /**
   * The tags that you apply to the compute environment to help you categorize and organize your resources. Each tag consists of a key and an optional value. For more information, see [Tagging Amazon Web Services Resources](https://docs.aws.amazon.com/general/latest/gr/aws_tagging.html) in *Amazon Web Services General Reference*.
   *
   * These tags can be updated or removed using the [TagResource](https://docs.aws.amazon.com/batch/latest/APIReference/API_TagResource.html) and [UntagResource](https://docs.aws.amazon.com/batch/latest/APIReference/API_UntagResource.html) API operations. These tags don't propagate to the underlying compute resources.
   *
   * @public
   */
  tags?: Record<string, string> | undefined;

  /**
   * The details for the Amazon EKS cluster that supports the compute environment.
   *
   * > **Note:** To create a compute environment that uses EKS resources, the caller must have permissions to call `eks:DescribeCluster`. Additional Amazon EKS permissions are required for Batch to manage an access entry on the cluster; see [Amazon EKS access entry authentication](https://docs.aws.amazon.com/batch/latest/userguide/eks-access-entries.html) in the *Batch User Guide*.
   *
   * @public
   */
  eksConfiguration?: EksConfiguration | undefined;

  /**
   * Reserved.
   *
   * @public
   */
  context?: string | undefined;

  /**
   * The Amazon ECS settings for the compute environment. These settings control CloudWatch Container Insights collection for the compute environment.
   *
   * @public
   */
  ecsSettings?: EcsSettings | undefined;
}

/**
 * @public
 */
export interface CreateComputeEnvironmentResponse {
  /**
   * The name of the compute environment. It can be up to 128 characters long. It can contain uppercase and lowercase letters, numbers, hyphens (-), and underscores (_).
   *
   * @public
   */
  computeEnvironmentName?: string | undefined;

  /**
   * The Amazon Resource Name (ARN) of the compute environment.
   *
   * @public
   */
  computeEnvironmentArn?: string | undefined;
}

/**
 * @public
 */
export interface CreateConsumableResourceRequest {
  /**
   * The name of the consumable resource. Must be unique.
   *
   * @public
   */
  consumableResourceName: string | undefined;

  /**
   * The total amount of the consumable resource that is available. Must be non-negative.
   *
   * @public
   */
  totalQuantity?: number | undefined;

  /**
   * Indicates whether the resource is available to be re-used after a job completes. Can be one of:
   *
   * - `REPLENISHABLE` (default)
   * - `NON_REPLENISHABLE`
   *
   * @public
   */
  resourceType?: string | undefined;

  /**
   * The tags that you apply to the consumable resource to help you categorize and organize your resources. Each tag consists of a key and an optional value. For more information, see [Tagging your Batch resources](https://docs.aws.amazon.com/batch/latest/userguide/using-tags.html).
   *
   * @public
   */
  tags?: Record<string, string> | undefined;
}

/**
 * @public
 */
export interface CreateConsumableResourceResponse {
  /**
   * The name of the consumable resource.
   *
   * @public
   */
  consumableResourceName: string | undefined;

  /**
   * The Amazon Resource Name (ARN) of the consumable resource.
   *
   * @public
   */
  consumableResourceArn: string | undefined;
}

/**
 * The order that compute environments are tried in for job placement within a queue. Compute environments are tried in ascending order. For example, if two compute environments are associated with a job queue, the compute environment with a lower order integer value is tried for job placement first. Compute environments must be in the `VALID` state before you can associate them with a job queue. All of the compute environments must be either EC2 (`EC2` or `SPOT`) or Fargate (`FARGATE` or `FARGATE_SPOT`); Amazon EC2 and Fargate compute environments can't be mixed.
 *
 * > **Note:** All compute environments that are associated with a job queue must share the same architecture. Batch doesn't support mixing compute environment architecture types in a single job queue.
 *
 * @public
 */
export interface ComputeEnvironmentOrder {
  /**
   * The order of the compute environment. Compute environments are tried in ascending order. For example, if two compute environments are associated with a job queue, the compute environment with a lower `order` integer value is tried for job placement first.
   *
   * @public
   */
  order: number | undefined;

  /**
   * The Amazon Resource Name (ARN) of the compute environment.
   *
   * @public
   */
  computeEnvironment: string | undefined;
}

/**
 * Specifies an action that Batch will take after the job has remained at the head of the queue in the specified state for longer than the specified time.
 *
 * @public
 */
export interface JobStateTimeLimitAction {
  /**
   * The reason to log for the action being taken.
   *
   * @public
   */
  reason: string | undefined;

  /**
   * The state of the job needed to trigger the action. The only supported value is `RUNNABLE`.
   *
   * @public
   */
  state: JobStateTimeLimitActionsState | undefined;

  /**
   * The approximate amount of time, in seconds, that must pass with the job in the specified state before the action is taken. The minimum value is 600 (10 minutes) and the maximum value is 86,400 (24 hours).
   *
   * @public
   */
  maxTimeSeconds: number | undefined;

  /**
   * The action to take when a job is at the head of the job queue in the specified state for the specified period of time. For job queues connected to a `ECS`, `FARGATE` or `EKS` compute environment, the only supported value is `CANCEL`, which will cancel the job. For job queues connected to a `SAGEMAKER_TRAINING` service environment, the only supported value is `TERMINATE`, which will terminate the job.
   *
   * @public
   */
  action: JobStateTimeLimitActionsAction | undefined;
}

/**
 * Specifies the order of a service environment for a job queue. This determines the priority order when multiple service environments are associated with the same job queue.
 *
 * @public
 */
export interface ServiceEnvironmentOrder {
  /**
   * The order of the service environment. Job queues with a higher priority are evaluated first when associated with the same service environment.
   *
   * @public
   */
  order: number | undefined;

  /**
   * The name or ARN of the service environment.
   *
   * @public
   */
  serviceEnvironment: string | undefined;
}

/**
 * Contains the parameters for `CreateJobQueue`.
 *
 * @public
 */
export interface CreateJobQueueRequest {
  /**
   * The name of the job queue. It can be up to 128 letters long. It can contain uppercase and lowercase letters, numbers, hyphens (-), and underscores (_).
   *
   * @public
   */
  jobQueueName: string | undefined;

  /**
   * The state of the job queue. If the job queue state is `ENABLED`, it is able to accept jobs. If the job queue state is `DISABLED`, new jobs can't be added to the queue, but jobs already in the queue can finish.
   *
   * @public
   */
  state?: JQState | undefined;

  /**
   * The Amazon Resource Name (ARN) of the fair-share scheduling policy. Job queues that don't have a fair-share scheduling policy are scheduled in a first-in, first-out (FIFO) model. After a job queue has a fair-share scheduling policy, it can be replaced but can't be removed.
   *
   * The format is `aws:Partition:batch:Region:Account:scheduling-policy/Name`.
   *
   * An example is `aws:aws:batch:us-west-2:123456789012:scheduling-policy/MySchedulingPolicy`.
   *
   * A job queue without a fair-share scheduling policy is scheduled as a FIFO job queue and can't have a fair-share scheduling policy added. Jobs queues with a fair-share scheduling policy can have a maximum of 500 active share identifiers. When the limit has been reached, submissions of any jobs that add a new share identifier fail.
   *
   * @public
   */
  schedulingPolicyArn?: string | undefined;

  /**
   * The priority of the job queue. Job queues with a higher priority (or a higher integer value for the `priority` parameter) are evaluated first when associated with the same compute environment. Priority is determined in descending order. For example, a job queue with a priority value of `10` is given scheduling preference over a job queue with a priority value of `1`. All of the compute environments must be either EC2 (`EC2` or `SPOT`) or Fargate (`FARGATE` or `FARGATE_SPOT`); EC2 and Fargate compute environments can't be mixed.
   *
   * @public
   */
  priority: number | undefined;

  /**
   * The set of compute environments mapped to a job queue and their order relative to each other. The job scheduler uses this parameter to determine which compute environment runs a specific job. Compute environments must be in the `VALID` state before you can associate them with a job queue. You can associate up to three compute environments with a job queue. All of the compute environments must be either EC2 (`EC2` or `SPOT`) or Fargate (`FARGATE` or `FARGATE_SPOT`); EC2 and Fargate compute environments can't be mixed.
   *
   * > **Note:** All compute environments that are associated with a job queue must share the same architecture. Batch doesn't support mixing compute environment architecture types in a single job queue.
   *
   * @public
   */
  computeEnvironmentOrder?: ComputeEnvironmentOrder[] | undefined;

  /**
   * A list of service environments that this job queue can use to allocate jobs. All serviceEnvironments must have the same type. A job queue can't have both a serviceEnvironmentOrder and a computeEnvironmentOrder field.
   *
   * @public
   */
  serviceEnvironmentOrder?: ServiceEnvironmentOrder[] | undefined;

  /**
   * The type of job queue. For service jobs that run on SageMaker Training, this value is `SAGEMAKER_TRAINING`. For regular container jobs, this value is `EKS`, `ECS`, or `ECS_FARGATE` depending on the compute environment.
   *
   * @public
   */
  jobQueueType?: JobQueueType | undefined;

  /**
   * The tags that you apply to the job queue to help you categorize and organize your resources. Each tag consists of a key and an optional value. For more information, see [Tagging your Batch resources](https://docs.aws.amazon.com/batch/latest/userguide/using-tags.html) in *Batch User Guide*.
   *
   * @public
   */
  tags?: Record<string, string> | undefined;

  /**
   * The set of actions that Batch performs on jobs that remain at the head of the job queue in the specified state longer than specified times. Batch will perform each action after `maxTimeSeconds` has passed. (**Note**: The minimum value for maxTimeSeconds is 600 (10 minutes) and its maximum value is 86,400 (24 hours).)
   *
   * @public
   */
  jobStateTimeLimitActions?: JobStateTimeLimitAction[] | undefined;
}

/**
 * @public
 */
export interface CreateJobQueueResponse {
  /**
   * The name of the job queue.
   *
   * @public
   */
  jobQueueName: string | undefined;

  /**
   * The Amazon Resource Name (ARN) of the job queue.
   *
   * @public
   */
  jobQueueArn: string | undefined;
}

/**
 * Defines the capacity limit for a quota share, or the type and maximum quantity of a particular resource that can be allocated to jobs in the quota share without borrowing.
 *
 * @public
 */
export interface QuotaShareCapacityLimit {
  /**
   * The maximum capacity available for the quota share. This value represents the maximum quantity of a resource that can be allocated to jobs in the quota share without borrowing.
   *
   * @public
   */
  maxCapacity: number | undefined;

  /**
   * The unit of compute capacity for the capacityLimit. For example, `ml.m5.large`.
   *
   * @public
   */
  capacityUnit: string | undefined;
}

/**
 * Specifies the preemption behavior for jobs in a quota share.
 *
 * @public
 */
export interface QuotaSharePreemptionConfiguration {
  /**
   * Specifies whether jobs within a quota share can be preempted by another, higher priority job in the same quota share.
   *
   * @public
   */
  inSharePreemption: QuotaShareInSharePreemptionState | undefined;
}

/**
 * Specifies whether a quota share reserves, lends, or both lends and borrows idle compute capacity.
 *
 * @public
 */
export interface QuotaShareResourceSharingConfiguration {
  /**
   * The resource sharing strategy for the quota share. The `RESERVE` strategy allows a quota share to reserve idle capacity for itself. `LEND` configures the share to lend its idle capacity to another share in need of capacity. The `LEND_AND_BORROW` strategy configures the share to borrow idle capacity from an underutilized share, as well as lend to another share.
   *
   * @public
   */
  strategy: QuotaShareResourceSharingStrategy | undefined;

  /**
   * The maximum percentage of additional capacity that the quota share can borrow from other shares. `borrowLimit` can only be applied to quota shares with a strategy of `LEND_AND_BORROW`. This value is expressed as a percentage of the quota share's configured [CapacityLimits](https://docs.aws.amazon.com/batch/latest/APIReference/API_QuotaShareCapacityLimit.html).
   *
   * The `borrowLimit` is applied uniformly across all capacity units. For example, if the `borrowLimit` is 200, the quota share can borrow up to 200% of its configured `maxCapacity` for each capacity unit. The default `borrowLimit` is -1, which indicates unlimited borrowing.
   *
   * @public
   */
  borrowLimit?: number | undefined;
}

/**
 * @public
 */
export interface CreateQuotaShareRequest {
  /**
   * The name of the quota share. It can be up to 128 characters long. It can contain uppercase and lowercase letters, numbers, hyphens (-), and underscores (_).
   *
   * @public
   */
  quotaShareName: string | undefined;

  /**
   * The Batch job queue associated with the quota share. This can be the job queue name or ARN. A job queue must be in the `VALID` state before you can associate it with a quota share.
   *
   * @public
   */
  jobQueue: string | undefined;

  /**
   * A list that specifies the quantity and type of compute capacity allocated to the quota share.
   *
   * @public
   */
  capacityLimits: QuotaShareCapacityLimit[] | undefined;

  /**
   * Specifies whether a quota share reserves, lends, or both lends and borrows idle compute capacity.
   *
   * @public
   */
  resourceSharingConfiguration: QuotaShareResourceSharingConfiguration | undefined;

  /**
   * Specifies the preemption behavior for jobs in a quota share.
   *
   * @public
   */
  preemptionConfiguration: QuotaSharePreemptionConfiguration | undefined;

  /**
   * The state of the quota share. If the quota share is `ENABLED`, it is able to accept jobs. If the quota share is `DISABLED`, new jobs won't be accepted but jobs already submitted can finish. The default state is `ENABLED`.
   *
   * @public
   */
  state?: QuotaShareState | undefined;

  /**
   * The tags that you apply to the quota share to help you categorize and organize your resources. Each tag consists of a key and an optional value. For more information, see [Tagging your Batch resources](https://docs.aws.amazon.com/batch/latest/userguide/using-tags.html) in *Batch User Guide*.
   *
   * @public
   */
  tags?: Record<string, string> | undefined;
}

/**
 * @public
 */
export interface CreateQuotaShareResponse {
  /**
   * The name of the quota share.
   *
   * @public
   */
  quotaShareName?: string | undefined;

  /**
   * The Amazon Resource Name (ARN) of the quota share.
   *
   * @public
   */
  quotaShareArn?: string | undefined;
}

/**
 * Specifies the weights for the share identifiers for the fair-share policy. Share identifiers that aren't included have a default weight of `1.0`.
 *
 * @public
 */
export interface ShareAttributes {
  /**
   * A share identifier or share identifier prefix. If the string ends with an asterisk (*), this entry specifies the weight factor to use for share identifiers that start with that prefix. The list of share identifiers in a fair-share policy can't overlap. For example, you can't have one that specifies a `shareIdentifier` of `UserA*` and another that specifies a `shareIdentifier` of `UserA1`.
   *
   * There can be no more than 500 share identifiers active in a job queue.
   *
   * The string is limited to 255 alphanumeric characters, and can be followed by an asterisk (*).
   *
   * @public
   */
  shareIdentifier: string | undefined;

  /**
   * The weight factor for the share identifier. The default value is 1.0. A lower value has a higher priority for compute resources. For example, jobs that use a share identifier with a weight factor of 0.125 (1/8) get 8 times the compute resources of jobs that use a share identifier with a weight factor of 1.
   *
   * The smallest supported value is 0.0001, and the largest supported value is 999.9999.
   *
   * @public
   */
  weightFactor?: number | undefined;
}

/**
 * The fair-share scheduling policy details.
 *
 * @public
 */
export interface FairsharePolicy {
  /**
   * The amount of time (in seconds) to use to calculate a fair-share percentage for each share identifier in use. A value of zero (0) indicates the default minimum time window (600 seconds). The maximum supported value is 604800 (1 week).
   *
   * The decay allows for more recently run jobs to have more weight than jobs that ran earlier. Consider adjusting this number if you have jobs that (on average) run longer than ten minutes, or a large difference in job count or job run times between share identifiers, and the allocation of resources doesn't meet your needs.
   *
   * @public
   */
  shareDecaySeconds?: number | undefined;

  /**
   * A value used to reserve some of the available maximum vCPU for share identifiers that aren't already used.
   *
   * The reserved ratio is `(computeReservation/100)^ActiveFairShares` where `ActiveFairShares` is the number of active share identifiers.
   *
   * For example, a `computeReservation` value of 50 indicates that Batch reserves 50% of the maximum available vCPU if there's only one share identifier. It reserves 25% if there are two share identifiers. It reserves 12.5% if there are three share identifiers. A `computeReservation` value of 25 indicates that Batch should reserve 25% of the maximum available vCPU if there's only one share identifier, 6.25% if there are two fair share identifiers, and 1.56% if there are three share identifiers.
   *
   * The minimum value is 0 and the maximum value is 99.
   *
   * @public
   */
  computeReservation?: number | undefined;

  /**
   * An array of `SharedIdentifier` objects that contain the weights for the share identifiers for the fair-share policy. Share identifiers that aren't included have a default weight of `1.0`.
   *
   * @public
   */
  shareDistribution?: ShareAttributes[] | undefined;
}

/**
 * The quota share scheduling policy details for a job queue.
 *
 * @public
 */
export interface QuotaSharePolicy {
  /**
   * The strategy that determines how idle resources are assigned to quota shares that are borrowing capacity. Currently, only `FIFO` is supported.
   *
   * @public
   */
  idleResourceAssignmentStrategy: QuotaShareIdleResourceAssignmentStrategy | undefined;
}

/**
 * Contains the parameters for `CreateSchedulingPolicy`.
 *
 * @public
 */
export interface CreateSchedulingPolicyRequest {
  /**
   * The name of the fair-share scheduling policy. It can be up to 128 letters long. It can contain uppercase and lowercase letters, numbers, hyphens (-), and underscores (_).
   *
   * @public
   */
  name: string | undefined;

  /**
   * The quota share scheduling policy details. Only one of fairsharePolicy or quotaSharePolicy can be set. Once set, this policy type cannot be removed or changed to a fairSharePolicy.
   *
   * @public
   */
  quotaSharePolicy?: QuotaSharePolicy | undefined;

  /**
   * The fair-share scheduling policy details. Only one of fairsharePolicy or quotaSharePolicy can be set. Once set, this policy type cannot be removed or changed to a quotaSharePolicy.
   *
   * @public
   */
  fairsharePolicy?: FairsharePolicy | undefined;

  /**
   * The tags that you apply to the scheduling policy to help you categorize and organize your resources. Each tag consists of a key and an optional value. For more information, see [Tagging Amazon Web Services Resources](https://docs.aws.amazon.com/general/latest/gr/aws_tagging.html) in *Amazon Web Services General Reference*.
   *
   * These tags can be updated or removed using the [TagResource](https://docs.aws.amazon.com/batch/latest/APIReference/API_TagResource.html) and [UntagResource](https://docs.aws.amazon.com/batch/latest/APIReference/API_UntagResource.html) API operations.
   *
   * @public
   */
  tags?: Record<string, string> | undefined;
}

/**
 * @public
 */
export interface CreateSchedulingPolicyResponse {
  /**
   * The name of the scheduling policy.
   *
   * @public
   */
  name: string | undefined;

  /**
   * The Amazon Resource Name (ARN) of the scheduling policy. The format is `aws:Partition:batch:Region:Account:scheduling-policy/Name`. For example, `aws:aws:batch:us-west-2:123456789012:scheduling-policy/MySchedulingPolicy`.
   *
   * @public
   */
  arn: string | undefined;
}

/**
 * Defines the type and maximum quantity of resources that can be allocated to service jobs in a service environment.
 *
 * @public
 */
export interface CapacityLimit {
  /**
   * The maximum capacity available for the service environment. For a quota management enabled service environment, this value represents the maximum quantity of a particular resource type (specified by `capacityUnit`) that can be allocated to service jobs. For other service environments, this value represents the maximum quantity of all resources that can be allocated to service jobs.
   *
   * For example, if `maxCapacity=50` and `capacityUnit=NUM_INSTANCES`, you can run up to 50 instances concurrently. If you run 5 SageMaker Training jobs that each use 10 instances, a subsequent job requiring 10 instances waits in the queue until capacity is available. In a quota management enabled service environment with `capacityUnit=ml.m5.large`, only `ml.m5.large` instances count against this limit, and jobs requiring other instance types wait until a matching capacity limit is configured.
   *
   * @public
   */
  maxCapacity?: number | undefined;

  /**
   * The unit of measure for the capacity limit, which defines how `maxCapacity` is interpreted. For `SAGEMAKER_TRAINING` jobs in a quota management enabled service environment, specify the [instance type](https://docs.aws.amazon.com/sagemaker/latest/APIReference/API_ResourceConfig.html#sagemaker-Type-ResourceConfig-InstanceType) (for example, `ml.m5.large`). Otherwise, use `NUM_INSTANCES`.
   *
   * @public
   */
  capacityUnit?: string | undefined;
}

/**
 * @public
 */
export interface CreateServiceEnvironmentRequest {
  /**
   * The name for the service environment. It can be up to 128 characters long and can contain letters, numbers, hyphens (-), and underscores (_).
   *
   * @public
   */
  serviceEnvironmentName: string | undefined;

  /**
   * The type of service environment. For SageMaker Training jobs, specify `SAGEMAKER_TRAINING`.
   *
   * @public
   */
  serviceEnvironmentType: ServiceEnvironmentType | undefined;

  /**
   * The state of the service environment. Valid values are `ENABLED` and `DISABLED`. The default value is `ENABLED`.
   *
   * @public
   */
  state?: ServiceEnvironmentState | undefined;

  /**
   * The capacity limits for the service environment. The number of instances a job consumes is the total number of instances requested in the submit training job request resource configuration.
   *
   * @public
   */
  capacityLimits: CapacityLimit[] | undefined;

  /**
   * The tags that you apply to the service environment to help you categorize and organize your resources. Each tag consists of a key and an optional value. For more information, see [Tagging your Batch resources](https://docs.aws.amazon.com/batch/latest/userguide/using-tags.html).
   *
   * @public
   */
  tags?: Record<string, string> | undefined;
}

/**
 * @public
 */
export interface CreateServiceEnvironmentResponse {
  /**
   * The name of the service environment.
   *
   * @public
   */
  serviceEnvironmentName: string | undefined;

  /**
   * The Amazon Resource Name (ARN) of the service environment.
   *
   * @public
   */
  serviceEnvironmentArn: string | undefined;
}

/**
 * Contains the parameters for `DeleteComputeEnvironment`.
 *
 * @public
 */
export interface DeleteComputeEnvironmentRequest {
  /**
   * The name or Amazon Resource Name (ARN) of the compute environment to delete.
   *
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
   * The name or ARN of the consumable resource that will be deleted.
   *
   * @public
   */
  consumableResource: string | undefined;
}

/**
 * @public
 */
export interface DeleteConsumableResourceResponse {}

/**
 * Contains the parameters for `DeleteJobQueue`.
 *
 * @public
 */
export interface DeleteJobQueueRequest {
  /**
   * The short name or full Amazon Resource Name (ARN) of the queue to delete.
   *
   * @public
   */
  jobQueue: string | undefined;
}

/**
 * @public
 */
export interface DeleteJobQueueResponse {}

/**
 * @public
 */
export interface DeleteQuotaShareRequest {
  /**
   * The Amazon Resource Name (ARN) of the quota share.
   *
   * @public
   */
  quotaShareArn: string | undefined;
}

/**
 * @public
 */
export interface DeleteQuotaShareResponse {}

/**
 * Contains the parameters for `DeleteSchedulingPolicy`.
 *
 * @public
 */
export interface DeleteSchedulingPolicyRequest {
  /**
   * The Amazon Resource Name (ARN) of the scheduling policy to delete.
   *
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
   * The name or ARN of the service environment to delete.
   *
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
   * The name and revision (`name:revision`) or full Amazon Resource Name (ARN) of the job definition to deregister.
   *
   * @public
   */
  jobDefinition: string | undefined;
}

/**
 * @public
 */
export interface DeregisterJobDefinitionResponse {}

/**
 * Contains the parameters for `DescribeComputeEnvironments`.
 *
 * @public
 */
export interface DescribeComputeEnvironmentsRequest {
  /**
   * A list of up to 100 compute environment names or full Amazon Resource Name (ARN) entries.
   *
   * @public
   */
  computeEnvironments?: string[] | undefined;

  /**
   * The maximum number of cluster results returned by `DescribeComputeEnvironments` in paginated output. When this parameter is used, `DescribeComputeEnvironments` only returns `maxResults` results in a single page along with a `nextToken` response element. The remaining results of the initial request can be seen by sending another `DescribeComputeEnvironments` request with the returned `nextToken` value. This value can be between 1 and 100. If this parameter isn't used, then `DescribeComputeEnvironments` returns up to 100 results and a `nextToken` value if applicable.
   *
   * @public
   */
  maxResults?: number | undefined;

  /**
   * The `nextToken` value returned from a previous paginated `DescribeComputeEnvironments` request where `maxResults` was used and the results exceeded the value of that parameter. Pagination continues from the end of the previous results that returned the `nextToken` value. This value is `null` when there are no more results to return.
   *
   * > **Note:** Treat this token as an opaque identifier that's only used to retrieve the next items in a list and not for other programmatic purposes.
   *
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * Specifies the infrastructure update policy for the Amazon EC2 compute environment. For more information about infrastructure updates, see [Updating compute environments](https://docs.aws.amazon.com/batch/latest/userguide/updating-compute-environments.html) in the *Batch User Guide*.
 *
 * > **Important:** The `updatePolicy` property applies only to Amazon EC2 managed compute environments. Batch doesn't support `updatePolicy` for Fargate compute environments. If you specify it for a Fargate compute environment, Batch ignores it.
 *
 * @public
 */
export interface UpdatePolicy {
  /**
   * Specifies whether jobs are automatically terminated when the compute environment infrastructure is updated. The default value is `false`.
   *
   * @public
   */
  terminateJobsOnUpdate?: boolean | undefined;

  /**
   * Specifies the job timeout (in minutes) when the compute environment infrastructure is updated. The default value is 30. The maximum value is 7200.
   *
   * > **Note:** Increasing `jobExecutionTimeoutMinutes` during infrastructure updates delays the replacement of instances with new instances that include updates such as security patches, but provides more time for jobs to execute. Consider the security implications of this tradeoff when setting timeout values.
   *
   * @public
   */
  jobExecutionTimeoutMinutes?: number | undefined;
}

/**
 * An object that represents an Batch compute environment.
 *
 * @public
 */
export interface ComputeEnvironmentDetail {
  /**
   * The name of the compute environment. It can be up to 128 characters long. It can contain uppercase and lowercase letters, numbers, hyphens (-), and underscores (_).
   *
   * @public
   */
  computeEnvironmentName: string | undefined;

  /**
   * The Amazon Resource Name (ARN) of the compute environment.
   *
   * @public
   */
  computeEnvironmentArn: string | undefined;

  /**
   * The maximum number of VCPUs expected to be used for an unmanaged compute environment.
   *
   * @public
   */
  unmanagedvCpus?: number | undefined;

  /**
   * The Amazon Resource Name (ARN) of the underlying Amazon ECS cluster that the compute environment uses.
   *
   * @public
   */
  ecsClusterArn?: string | undefined;

  /**
   * The tags applied to the compute environment.
   *
   * @public
   */
  tags?: Record<string, string> | undefined;

  /**
   * The type of the compute environment: `MANAGED` or `UNMANAGED`. For more information, see [Compute environments](https://docs.aws.amazon.com/batch/latest/userguide/compute_environments.html) in the *Batch User Guide*.
   *
   * @public
   */
  type?: CEType | undefined;

  /**
   * The state of the compute environment. The valid values are `ENABLED` or `DISABLED`.
   *
   * If the state is `ENABLED`, then the Batch scheduler can attempt to place jobs from an associated job queue on the compute resources within the environment. If the compute environment is managed, then it can scale its instances out or in automatically based on the job queue demand.
   *
   * If the state is `DISABLED`, then the Batch scheduler doesn't attempt to place jobs within the environment. Jobs in a `STARTING` or `RUNNING` state continue to progress normally. Managed compute environments in the `DISABLED` state don't scale out.
   *
   * > **Note:** Compute environments in a `DISABLED` state may continue to incur billing charges, for example, if they have running instances due to jobs that are still executing or a non-zero `minvCpus` setting. To prevent additional charges, disable and delete the compute environment.
   *
   * When an instance is idle, the instance scales down to the `minvCpus` value. However, the instance size doesn't change. For example, consider a `c5.8xlarge` instance with a `minvCpus` value of `4` and a `desiredvCpus` value of `36`. This instance doesn't scale down to a `c5.large` instance.
   *
   * @public
   */
  state?: CEState | undefined;

  /**
   * The current status of the compute environment (for example, `CREATING` or `VALID`).
   *
   * @public
   */
  status?: CEStatus | undefined;

  /**
   * A short, human-readable string to provide additional details for the current status of the compute environment.
   *
   * @public
   */
  statusReason?: string | undefined;

  /**
   * The compute resources defined for the compute environment. For more information, see [Compute environments](https://docs.aws.amazon.com/batch/latest/userguide/compute_environments.html) in the *Batch User Guide*.
   *
   * @public
   */
  computeResources?: ComputeResource | undefined;

  /**
   * The service role that's associated with the compute environment that allows Batch to make calls to Amazon Web Services API operations on your behalf. For more information, see [Batch service IAM role](https://docs.aws.amazon.com/batch/latest/userguide/service_IAM_role.html) in the *Batch User Guide*.
   *
   * @public
   */
  serviceRole?: string | undefined;

  /**
   * Specifies the infrastructure update policy for the compute environment. For more information about infrastructure updates, see [Updating compute environments](https://docs.aws.amazon.com/batch/latest/userguide/updating-compute-environments.html) in the *Batch User Guide*.
   *
   * @public
   */
  updatePolicy?: UpdatePolicy | undefined;

  /**
   * The configuration for the Amazon EKS cluster that supports the Batch compute environment. Only specify this parameter if the `containerOrchestrationType` is `EKS`.
   *
   * @public
   */
  eksConfiguration?: EksConfiguration | undefined;

  /**
   * The orchestration type of the compute environment. The valid values are `ECS` (default) or `EKS`.
   *
   * @public
   */
  containerOrchestrationType?: OrchestrationType | undefined;

  /**
   * Unique identifier for the compute environment.
   *
   * @public
   */
  uuid?: string | undefined;

  /**
   * Reserved.
   *
   * @public
   */
  context?: string | undefined;

  /**
   * The Amazon ECS settings for the compute environment. These settings control CloudWatch Container Insights collection.
   *
   * @public
   */
  ecsSettings?: EcsSettings | undefined;
}

/**
 * @public
 */
export interface DescribeComputeEnvironmentsResponse {
  /**
   * The list of compute environments.
   *
   * @public
   */
  computeEnvironments?: ComputeEnvironmentDetail[] | undefined;

  /**
   * The `nextToken` value to include in a future `DescribeComputeEnvironments` request. When the results of a `DescribeComputeEnvironments` request exceed `maxResults`, this value can be used to retrieve the next page of results. This value is `null` when there are no more results to return.
   *
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * @public
 */
export interface DescribeConsumableResourceRequest {
  /**
   * The name or ARN of the consumable resource whose description will be returned.
   *
   * @public
   */
  consumableResource: string | undefined;
}

/**
 * @public
 */
export interface DescribeConsumableResourceResponse {
  /**
   * The name of the consumable resource.
   *
   * @public
   */
  consumableResourceName: string | undefined;

  /**
   * The Amazon Resource Name (ARN) of the consumable resource.
   *
   * @public
   */
  consumableResourceArn: string | undefined;

  /**
   * The total amount of the consumable resource that is available.
   *
   * @public
   */
  totalQuantity?: number | undefined;

  /**
   * The amount of the consumable resource that is currently in use.
   *
   * @public
   */
  inUseQuantity?: number | undefined;

  /**
   * The amount of the consumable resource that is currently available to use.
   *
   * @public
   */
  availableQuantity?: number | undefined;

  /**
   * Indicates whether the resource is available to be re-used after a job completes. Can be one of:
   *
   * - `REPLENISHABLE`
   * - `NON_REPLENISHABLE`
   *
   * @public
   */
  resourceType?: string | undefined;

  /**
   * The Unix timestamp (in milliseconds) for when the consumable resource was created.
   *
   * @public
   */
  createdAt?: number | undefined;

  /**
   * The tags that you apply to the consumable resource to help you categorize and organize your resources. Each tag consists of a key and an optional value. For more information, see [Tagging your Batch resources](https://docs.aws.amazon.com/batch/latest/userguide/using-tags.html).
   *
   * @public
   */
  tags?: Record<string, string> | undefined;
}

/**
 * Contains the parameters for `DescribeJobDefinitions`.
 *
 * @public
 */
export interface DescribeJobDefinitionsRequest {
  /**
   * A list of up to 100 job definitions. Each entry in the list can either be an ARN in the format `arn:aws:batch:$\{Region\}:$\{Account\}:job-definition/$\{JobDefinitionName\}:$\{Revision\}` or a short version using the form `$\{JobDefinitionName\}:$\{Revision\}`. This parameter can't be used with other parameters.
   *
   * @public
   */
  jobDefinitions?: string[] | undefined;

  /**
   * The maximum number of results returned by `DescribeJobDefinitions` in paginated output. When this parameter is used, `DescribeJobDefinitions` only returns `maxResults` results in a single page and a `nextToken` response element. The remaining results of the initial request can be seen by sending another `DescribeJobDefinitions` request with the returned `nextToken` value. This value can be between 1 and 100. If this parameter isn't used, then `DescribeJobDefinitions` returns up to 100 results and a `nextToken` value if applicable.
   *
   * @public
   */
  maxResults?: number | undefined;

  /**
   * The name of the job definition to describe.
   *
   * @public
   */
  jobDefinitionName?: string | undefined;

  /**
   * The status used to filter job definitions.
   *
   * @public
   */
  status?: string | undefined;

  /**
   * The `nextToken` value returned from a previous paginated `DescribeJobDefinitions` request where `maxResults` was used and the results exceeded the value of that parameter. Pagination continues from the end of the previous results that returned the `nextToken` value. This value is `null` when there are no more results to return.
   *
   * > **Note:** Treat this token as an opaque identifier that's only used to retrieve the next items in a list and not for other programmatic purposes.
   *
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * Information about a consumable resource required to run a job.
 *
 * @public
 */
export interface ConsumableResourceRequirement {
  /**
   * The name or ARN of the consumable resource.
   *
   * @public
   */
  consumableResource?: string | undefined;

  /**
   * The quantity of the consumable resource that is needed.
   *
   * @public
   */
  quantity?: number | undefined;
}

/**
 * Contains a list of consumable resources required by a job.
 *
 * @public
 */
export interface ConsumableResourceProperties {
  /**
   * The list of consumable resources required by a job.
   *
   * @public
   */
  consumableResourceList?: ConsumableResourceRequirement[] | undefined;
}

/**
 * A key-value pair object.
 *
 * @public
 */
export interface KeyValuePair {
  /**
   * The name of the key-value pair. For environment variables, this is the name of the environment variable.
   *
   * @public
   */
  name?: string | undefined;

  /**
   * The value of the key-value pair. For environment variables, this is the value of the environment variable.
   *
   * @public
   */
  value?: string | undefined;
}

/**
 * The amount of ephemeral storage to allocate for the task. This parameter is used to expand the total amount of ephemeral storage available, beyond the default amount, for tasks hosted on Fargate.
 *
 * @public
 */
export interface EphemeralStorage {
  /**
   * The total amount, in GiB, of ephemeral storage to set for the task. The minimum supported value is `21` GiB and the maximum supported value is `200` GiB.
   *
   * @public
   */
  sizeInGiB: number | undefined;
}

/**
 * The platform configuration for jobs that are running on Fargate resources. Jobs that run on Amazon EC2 resources must not specify this parameter.
 *
 * @public
 */
export interface FargatePlatformConfiguration {
  /**
   * The Fargate platform version where the jobs are running. A platform version is specified only for jobs that are running on Fargate resources. If one isn't specified, the `LATEST` platform version is used by default. This uses a recent, approved version of the Fargate platform for compute resources. For more information, see [Fargate platform versions](https://docs.aws.amazon.com/AmazonECS/latest/developerguide/platform_versions.html) in the *Amazon Elastic Container Service Developer Guide*.
   *
   * @public
   */
  platformVersion?: string | undefined;
}

/**
 * An object that represents a container instance host device.
 *
 * > **Note:** This object isn't applicable to jobs that are running on Fargate resources and shouldn't be provided.
 *
 * @public
 */
export interface Device {
  /**
   * The path for the device on the host container instance.
   *
   * @public
   */
  hostPath: string | undefined;

  /**
   * The path inside the container that's used to expose the host device. By default, the `hostPath` value is used.
   *
   * @public
   */
  containerPath?: string | undefined;

  /**
   * The explicit permissions to provide to the container for the device. By default, the container has permissions for `read`, `write`, and `mknod` for the device.
   *
   * @public
   */
  permissions?: DeviceCgroupPermission[] | undefined;
}

/**
 * The container path, mount options, and size of the `tmpfs` mount.
 *
 * > **Note:** This object isn't applicable to jobs that are running on Fargate resources.
 *
 * @public
 */
export interface Tmpfs {
  /**
   * The absolute file path in the container where the `tmpfs` volume is mounted.
   *
   * @public
   */
  containerPath: string | undefined;

  /**
   * The size (in MiB) of the `tmpfs` volume.
   *
   * @public
   */
  size: number | undefined;

  /**
   * The list of `tmpfs` volume mount options.
   *
   * Valid values: "`defaults`" | "`ro`" | "`rw`" | "`suid`" | "`nosuid`" | "`dev`" | "`nodev`" | "`exec`" | "`noexec`" | "`sync`" | "`async`" | "`dirsync`" | "`remount`" | "`mand`" | "`nomand`" | "`atime`" | "`noatime`" | "`diratime`" | "`nodiratime`" | "`bind`" | "`rbind" | "unbindable" | "runbindable" | "private" | "rprivate" | "shared" | "rshared" | "slave" | "rslave" | "relatime`" | "`norelatime`" | "`strictatime`" | "`nostrictatime`" | "`mode`" | "`uid`" | "`gid`" | "`nr_inodes`" | "`nr_blocks`" | "`mpol`"
   *
   * @public
   */
  mountOptions?: string[] | undefined;
}

/**
 * Linux-specific modifications that are applied to the container, such as details for device mappings.
 *
 * @public
 */
export interface LinuxParameters {
  /**
   * Any of the host devices to expose to the container. This parameter maps to `Devices` in the [Create a container](https://docs.docker.com/engine/api/latest/#tag/Container/operation/ContainerCreate) section of the [Docker Remote API](https://docs.docker.com/engine/api/latest/) and the `--device` option to [docker run](https://docs.docker.com/engine/reference/run/).
   *
   * > **Note:** This parameter isn't applicable to jobs that are running on Fargate resources. Don't provide it for these jobs.
   *
   * @public
   */
  devices?: Device[] | undefined;

  /**
   * If true, run an `init` process inside the container that forwards signals and reaps processes. This parameter maps to the `--init` option to [docker run](https://docs.docker.com/engine/reference/run/). This parameter requires version 1.25 of the Docker Remote API or greater on your container instance. To check the Docker Remote API version on your container instance, log in to your container instance and run the following command: `sudo docker version | grep "Server API version"`
   *
   * @public
   */
  initProcessEnabled?: boolean | undefined;

  /**
   * The value for the size (in MiB) of the `/dev/shm` volume. This parameter maps to the `--shm-size` option to [docker run](https://docs.docker.com/engine/reference/run/).
   *
   * > **Note:** This parameter isn't applicable to jobs that are running on Fargate resources. Don't provide it for these jobs.
   *
   * @public
   */
  sharedMemorySize?: number | undefined;

  /**
   * The container path, mount options, and size (in MiB) of the `tmpfs` mount. This parameter maps to the `--tmpfs` option to [docker run](https://docs.docker.com/engine/reference/run/).
   *
   * > **Note:** This parameter isn't applicable to jobs that are running on Fargate resources. Don't provide this parameter for this resource type.
   *
   * @public
   */
  tmpfs?: Tmpfs[] | undefined;

  /**
   * The total amount of swap memory (in MiB) a container can use. This parameter is translated to the `--memory-swap` option to [docker run](https://docs.docker.com/engine/reference/run/) where the value is the sum of the container memory plus the `maxSwap` value. For more information, see [`--memory-swap` details](https://docs.docker.com/config/containers/resource_constraints/#--memory-swap-details) in the Docker documentation.
   *
   * If a `maxSwap` value of `0` is specified, the container doesn't use swap. Accepted values are `0` or any positive integer. If the `maxSwap` parameter is omitted, the container doesn't use the swap configuration for the container instance on which it runs. A `maxSwap` value must be set for the `swappiness` parameter to be used.
   *
   * > **Note:** This parameter isn't applicable to jobs that are running on Fargate resources. Don't provide it for these jobs.
   *
   * @public
   */
  maxSwap?: number | undefined;

  /**
   * You can use this parameter to tune a container's memory swappiness behavior. A `swappiness` value of `0` causes swapping to not occur unless absolutely necessary. A `swappiness` value of `100` causes pages to be swapped aggressively. Valid values are whole numbers between `0` and `100`. If the `swappiness` parameter isn't specified, a default value of `60` is used. If a value isn't specified for `maxSwap`, then this parameter is ignored. If `maxSwap` is set to 0, the container doesn't use swap. This parameter maps to the `--memory-swappiness` option to [docker run](https://docs.docker.com/engine/reference/run/).
   *
   * Consider the following when you use a per-container swap configuration.
   *
   * - Swap space must be enabled and allocated on the container instance for the containers to use.
   *
   *   > **Note:** By default, the Amazon ECS optimized AMIs don't have swap enabled. You must enable swap on the instance to use this feature. For more information, see [Instance store swap volumes](https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/instance-store-swap-volumes.html) in the *Amazon EC2 User Guide for Linux Instances* or [How do I allocate memory to work as swap space in an Amazon EC2 instance by using a swap file?](http://aws.amazon.com/premiumsupport/knowledge-center/ec2-memory-swap-file/)
   * - The swap space parameters are only supported for job definitions using EC2 resources.
   * - If the `maxSwap` and `swappiness` parameters are omitted from a job definition, each container has a default `swappiness` value of 60. Moreover, the total swap usage is limited to two times the memory reservation of the container.
   *
   * > **Note:** This parameter isn't applicable to jobs that are running on Fargate resources. Don't provide it for these jobs.
   *
   * @public
   */
  swappiness?: number | undefined;
}

/**
 * An object that represents the secret to expose to your container. Secrets can be exposed to a container in the following ways:
 *
 * - To inject sensitive data into your containers as environment variables, use the `secrets` container definition parameter.
 * - To reference sensitive information in the log configuration of a container, use the `secretOptions` container definition parameter.
 *
 * For more information, see [Specifying sensitive data](https://docs.aws.amazon.com/batch/latest/userguide/specifying-sensitive-data.html) in the *Batch User Guide*.
 *
 * @public
 */
export interface Secret {
  /**
   * The name of the secret.
   *
   * @public
   */
  name: string | undefined;

  /**
   * The secret to expose to the container. The supported values are either the full Amazon Resource Name (ARN) of the Secrets Manager secret or the full ARN of the parameter in the Amazon Web Services Systems Manager Parameter Store.
   *
   * > **Note:** If the Amazon Web Services Systems Manager Parameter Store parameter exists in the same Region as the job you're launching, then you can use either the full Amazon Resource Name (ARN) or name of the parameter. If the parameter exists in a different Region, then the full ARN must be specified.
   *
   * @public
   */
  valueFrom: string | undefined;
}

/**
 * Log configuration options to send to a custom log driver for the container.
 *
 * @public
 */
export interface LogConfiguration {
  /**
   * The log driver to use for the container. The valid values that are listed for this parameter are log drivers that the Amazon ECS container agent can communicate with by default.
   *
   * The supported log drivers are `awsfirelens`, `awslogs`, `fluentd`, `gelf`, `json-file`, `journald`, `logentries`, `syslog`, and `splunk`.
   *
   * > **Note:** Jobs that are running on Fargate resources are restricted to the `awslogs` and `splunk` log drivers.
   *
   * - **awsfirelens**
   *
   *   Specifies the firelens logging driver. For more information on configuring Firelens, see [Send Amazon ECS logs to an Amazon Web Services service or Amazon Web Services Partner](https://docs.aws.amazon.com/AmazonECS/latest/developerguide/using_firelens.html) in the *Amazon Elastic Container Service Developer Guide*.
   *
   * - **awslogs**
   *
   *   Specifies the Amazon CloudWatch Logs logging driver. For more information, see [Using the awslogs log driver](https://docs.aws.amazon.com/batch/latest/userguide/using_awslogs.html) in the *Batch User Guide* and [Amazon CloudWatch Logs logging driver](https://docs.docker.com/config/containers/logging/awslogs/) in the Docker documentation.
   *
   * - **fluentd**
   *
   *   Specifies the Fluentd logging driver. For more information including usage and options, see [Fluentd logging driver](https://docs.docker.com/config/containers/logging/fluentd/) in the *Docker documentation*.
   *
   * - **gelf**
   *
   *   Specifies the Graylog Extended Format (GELF) logging driver. For more information including usage and options, see [Graylog Extended Format logging driver](https://docs.docker.com/config/containers/logging/gelf/) in the *Docker documentation*.
   *
   * - **journald**
   *
   *   Specifies the journald logging driver. For more information including usage and options, see [Journald logging driver](https://docs.docker.com/config/containers/logging/journald/) in the *Docker documentation*.
   *
   * - **json-file**
   *
   *   Specifies the JSON file logging driver. For more information including usage and options, see [JSON File logging driver](https://docs.docker.com/config/containers/logging/json-file/) in the *Docker documentation*.
   *
   * - **splunk**
   *
   *   Specifies the Splunk logging driver. For more information including usage and options, see [Splunk logging driver](https://docs.docker.com/config/containers/logging/splunk/) in the *Docker documentation*.
   *
   * - **syslog**
   *
   *   Specifies the syslog logging driver. For more information including usage and options, see [Syslog logging driver](https://docs.docker.com/config/containers/logging/syslog/) in the *Docker documentation*.
   *
   * > **Note:** If you have a custom driver that's not listed earlier that you want to work with the Amazon ECS container agent, you can fork the Amazon ECS container agent project that's [available on GitHub](https://github.com/aws/amazon-ecs-agent) and customize it to work with that driver. We encourage you to submit pull requests for changes that you want to have included. However, Amazon Web Services doesn't currently support running modified copies of this software.
   *
   * This parameter requires version 1.18 of the Docker Remote API or greater on your container instance. To check the Docker Remote API version on your container instance, log in to your container instance and run the following command: `sudo docker version | grep "Server API version"`
   *
   * @public
   */
  logDriver: LogDriver | undefined;

  /**
   * The configuration options to send to the log driver. This parameter requires version 1.19 of the Docker Remote API or greater on your container instance. To check the Docker Remote API version on your container instance, log in to your container instance and run the following command: `sudo docker version | grep "Server API version"`
   *
   * @public
   */
  options?: Record<string, string> | undefined;

  /**
   * The secrets to pass to the log configuration. For more information, see [Specifying sensitive data](https://docs.aws.amazon.com/batch/latest/userguide/specifying-sensitive-data.html) in the *Batch User Guide*.
   *
   * @public
   */
  secretOptions?: Secret[] | undefined;
}

/**
 * Details for a Docker volume mount point that's used in a job's container properties. This parameter maps to `Volumes` in the [Create a container](https://docs.docker.com/engine/api/latest/#tag/Container/operation/ContainerCreate) section of the *Docker Remote API* and the `--volume` option to docker run.
 *
 * @public
 */
export interface MountPoint {
  /**
   * The path on the container where the host volume is mounted.
   *
   * @public
   */
  containerPath?: string | undefined;

  /**
   * If this value is `true`, the container has read-only access to the volume. Otherwise, the container can write to the volume. The default value is `false`.
   *
   * @public
   */
  readOnly?: boolean | undefined;

  /**
   * The name of the volume to mount.
   *
   * @public
   */
  sourceVolume?: string | undefined;
}

/**
 * The network configuration for jobs that are running on Fargate resources. Jobs that are running on Amazon EC2 resources must not specify this parameter.
 *
 * @public
 */
export interface NetworkConfiguration {
  /**
   * Indicates whether the job has a public IP address. For a job that's running on Fargate resources in a private subnet to send outbound traffic to the internet (for example, to pull container images), the private subnet requires a NAT gateway be attached to route requests to the internet. For more information, see [Amazon ECS task networking](https://docs.aws.amazon.com/AmazonECS/latest/developerguide/task-networking.html) in the *Amazon Elastic Container Service Developer Guide*. The default value is "`DISABLED`".
   *
   * @public
   */
  assignPublicIp?: AssignPublicIp | undefined;
}

/**
 * The repository credentials for private registry authentication.
 *
 * @public
 */
export interface RepositoryCredentials {
  /**
   * The Amazon Resource Name (ARN) of the secret containing the private repository credentials.
   *
   * @public
   */
  credentialsParameter: string | undefined;
}

/**
 * The type and amount of a resource to assign to a container. The supported resources include `GPU`, `MEMORY`, and `VCPU`.
 *
 * @public
 */
export interface ResourceRequirement {
  /**
   * The quantity of the specified resource to reserve for the container. The values vary based on the `type` specified.
   *
   * - **type="GPU"**
   *
   *   The number of physical GPUs to reserve for the container. Make sure that the number of GPUs reserved for all containers in a job doesn't exceed the number of available GPUs on the compute resource that the job is launched on.
   *
   *   > **Note:** GPUs aren't available for jobs that are running on Fargate resources.
   *
   * - **type="MEMORY"**
   *
   *   The memory hard limit (in MiB) present to the container. This parameter is supported for jobs that are running on Amazon EC2 resources. If your container attempts to exceed the memory specified, the container is terminated. This parameter maps to `Memory` in the [Create a container](https://docs.docker.com/engine/api/latest/#tag/Container/operation/ContainerCreate) section of the [Docker Remote API](https://docs.docker.com/engine/api/latest/) and the `--memory` option to [docker run](https://docs.docker.com/engine/reference/run/). You must specify at least 4 MiB of memory for a job. This is required but can be specified in several places for multi-node parallel (MNP) jobs. It must be specified for each node at least once. This parameter maps to `Memory` in the [Create a container](https://docs.docker.com/engine/api/latest/#tag/Container/operation/ContainerCreate) section of the [Docker Remote API](https://docs.docker.com/engine/api/latest/) and the `--memory` option to [docker run](https://docs.docker.com/engine/reference/run/).
   *
   *   > **Note:** If you're trying to maximize your resource utilization by providing your jobs as much memory as possible for a particular instance type, see [Memory management](https://docs.aws.amazon.com/batch/latest/userguide/memory-management.html) in the *Batch User Guide*.
   *
   *   For jobs that are running on Fargate resources, then `value` is the hard limit (in MiB), and must match one of the supported values and the `VCPU` values must be one of the values supported for that memory value.
   *
   *   - **value = 512**
   *
   *     `VCPU` = 0.25
   *
   *   - **value = 1024**
   *
   *     `VCPU` = 0.25 or 0.5
   *
   *   - **value = 2048**
   *
   *     `VCPU` = 0.25, 0.5, or 1
   *
   *   - **value = 3072**
   *
   *     `VCPU` = 0.5, or 1
   *
   *   - **value = 4096**
   *
   *     `VCPU` = 0.5, 1, or 2
   *
   *   - **value = 5120, 6144, or 7168**
   *
   *     `VCPU` = 1 or 2
   *
   *   - **value = 8192**
   *
   *     `VCPU` = 1, 2, or 4
   *
   *   - **value = 9216, 10240, 11264, 12288, 13312, 14336, or 15360**
   *
   *     `VCPU` = 2 or 4
   *
   *   - **value = 16384**
   *
   *     `VCPU` = 2, 4, or 8
   *
   *   - **value = 17408, 18432, 19456, 21504, 22528, 23552, 25600, 26624, 27648, 29696, or 30720**
   *
   *     `VCPU` = 4
   *
   *   - **value = 20480, 24576, or 28672**
   *
   *     `VCPU` = 4 or 8
   *
   *   - **value = 36864, 45056, or 53248**
   *
   *     `VCPU` = 8
   *
   *   - **value = 61440**
   *
   *     `VCPU` = 8 or 32
   *
   *   - **value = 32768, 40960, 49152, or 57344**
   *
   *     `VCPU` = 8 or 16
   *
   *   - **value = 65536, 73728, 81920, 90112, 98304, 106496, or 114688**
   *
   *     `VCPU` = 16
   *
   *   - **value = 122880**
   *
   *     `VCPU` = 16 or 32
   *
   *   - **value = 249856**
   *
   *     `VCPU` = 32
   *
   * - **type="VCPU"**
   *
   *   The number of vCPUs reserved for the container. This parameter maps to `CpuShares` in the [Create a container](https://docs.docker.com/engine/api/latest/#tag/Container/operation/ContainerCreate) section of the [Docker Remote API](https://docs.docker.com/engine/api/latest/) and the `--cpu-shares` option to [docker run](https://docs.docker.com/engine/reference/run/). Each vCPU is equivalent to 1,024 CPU shares. For Amazon EC2 resources, you must specify at least one vCPU. This is required but can be specified in several places; it must be specified for each node at least once.
   *
   *   The default for the Fargate On-Demand vCPU resource count quota is 6 vCPUs. For more information about Fargate quotas, see [Fargate quotas](https://docs.aws.amazon.com/general/latest/gr/ecs-service.html#service-quotas-fargate) in the *Amazon Web Services General Reference*.
   *
   *   For jobs that are running on Fargate resources, then `value` must match one of the supported values and the `MEMORY` values must be one of the values supported for that `VCPU` value. The supported values are 0.25, 0.5, 1, 2, 4, 8, 16, and 32.
   *
   *   - **value = 0.25**
   *
   *     `MEMORY` = 512, 1024, or 2048
   *
   *   - **value = 0.5**
   *
   *     `MEMORY` = 1024, 2048, 3072, or 4096
   *
   *   - **value = 1**
   *
   *     `MEMORY` = 2048, 3072, 4096, 5120, 6144, 7168, or 8192
   *
   *   - **value = 2**
   *
   *     `MEMORY` = 4096, 5120, 6144, 7168, 8192, 9216, 10240, 11264, 12288, 13312, 14336, 15360, or 16384
   *
   *   - **value = 4**
   *
   *     `MEMORY` = 8192, 9216, 10240, 11264, 12288, 13312, 14336, 15360, 16384, 17408, 18432, 19456, 20480, 21504, 22528, 23552, 24576, 25600, 26624, 27648, 28672, 29696, or 30720
   *
   *   - **value = 8**
   *
   *     `MEMORY` = 16384, 20480, 24576, 28672, 32768, 36864, 40960, 45056, 49152, 53248, 57344, or 61440
   *
   *   - **value = 16**
   *
   *     `MEMORY` = 32768, 40960, 49152, 57344, 65536, 73728, 81920, 90112, 98304, 106496, 114688, or 122880
   *
   *   - **value = 32**
   *
   *     `MEMORY` = 61440, 122880, or 249856
   *
   * @public
   */
  value: string | undefined;

  /**
   * The type of resource to assign to a container. The supported resources include `GPU`, `MEMORY`, and `VCPU`.
   *
   * @public
   */
  type: ResourceType | undefined;
}

/**
 * An object that represents the compute environment architecture for Batch jobs on Fargate.
 *
 * @public
 */
export interface RuntimePlatform {
  /**
   * The operating system for the compute environment. Valid values are: `LINUX` (default), `WINDOWS_SERVER_2019_CORE`, `WINDOWS_SERVER_2019_FULL`, `WINDOWS_SERVER_2022_CORE`, and `WINDOWS_SERVER_2022_FULL`.
   *
   * > **Note:** The following parameters can’t be set for Windows containers: `linuxParameters`, `privileged`, `user`, `ulimits`, `readonlyRootFilesystem`, and `efsVolumeConfiguration`.
   *
   * > **Note:** The Batch Scheduler checks the compute environments that are attached to the job queue before registering a task definition with Fargate. In this scenario, the job queue is where the job is submitted. If the job requires a Windows container and the first compute environment is `LINUX`, the compute environment is skipped and the next compute environment is checked until a Windows-based compute environment is found.
   *
   * > **Note:** Fargate Spot is not supported on Windows-based containers on Fargate. A job queue will be blocked if a Windows job is submitted to a job queue with only Fargate Spot compute environments. However, you can attach both `FARGATE` and `FARGATE_SPOT` compute environments to the same job queue.
   *
   * @public
   */
  operatingSystemFamily?: string | undefined;

  /**
   * The vCPU architecture. The default value is `X86_64`. Valid values are `X86_64` and `ARM64`.
   *
   * > **Note:** This parameter must be set to `X86_64` for Windows containers.
   *
   * > **Note:** Fargate Spot is not supported on Windows-based containers on Fargate. A job queue will be blocked if a Windows job is submitted to a job queue with only Fargate Spot compute environments. However, you can attach both `FARGATE` and `FARGATE_SPOT` compute environments to the same job queue.
   *
   * @public
   */
  cpuArchitecture?: string | undefined;
}

/**
 * The `ulimit` settings to pass to the container. For more information, see [Ulimit](https://docs.aws.amazon.com/AmazonECS/latest/APIReference/API_Ulimit.html).
 *
 * > **Note:** This object isn't applicable to jobs that are running on Fargate resources.
 *
 * @public
 */
export interface Ulimit {
  /**
   * The hard limit for the `ulimit` type.
   *
   * @public
   */
  hardLimit: number | undefined;

  /**
   * The `type` of the `ulimit`. Valid values are: `core` | `cpu` | `data` | `fsize` | `locks` | `memlock` | `msgqueue` | `nice` | `nofile` | `nproc` | `rss` | `rtprio` | `rttime` | `sigpending` | `stack`.
   *
   * @public
   */
  name: string | undefined;

  /**
   * The soft limit for the `ulimit` type.
   *
   * @public
   */
  softLimit: number | undefined;
}

/**
 * The authorization configuration details for the Amazon EFS file system.
 *
 * @public
 */
export interface EFSAuthorizationConfig {
  /**
   * The Amazon EFS access point ID to use. If an access point is specified, the root directory value specified in the `EFSVolumeConfiguration` must either be omitted or set to `/` which enforces the path set on the EFS access point. If an access point is used, transit encryption must be enabled in the `EFSVolumeConfiguration`. For more information, see [Working with Amazon EFS access points](https://docs.aws.amazon.com/efs/latest/ug/efs-access-points.html) in the *Amazon Elastic File System User Guide*.
   *
   * @public
   */
  accessPointId?: string | undefined;

  /**
   * Whether or not to use the Batch job IAM role defined in a job definition when mounting the Amazon EFS file system. If enabled, transit encryption must be enabled in the `EFSVolumeConfiguration`. If this parameter is omitted, the default value of `DISABLED` is used. For more information, see [Using Amazon EFS access points](https://docs.aws.amazon.com/batch/latest/userguide/efs-volumes.html#efs-volume-accesspoints) in the *Batch User Guide*. EFS IAM authorization requires that `TransitEncryption` be `ENABLED` and that a `JobRoleArn` is specified.
   *
   * @public
   */
  iam?: EFSAuthorizationConfigIAM | undefined;
}

/**
 * This is used when you're using an Amazon Elastic File System file system for job storage. For more information, see [Amazon EFS Volumes](https://docs.aws.amazon.com/batch/latest/userguide/efs-volumes.html) in the *Batch User Guide*.
 *
 * @public
 */
export interface EFSVolumeConfiguration {
  /**
   * The Amazon EFS file system ID to use.
   *
   * @public
   */
  fileSystemId: string | undefined;

  /**
   * The directory within the Amazon EFS file system to mount as the root directory inside the host. If this parameter is omitted, the root of the Amazon EFS volume is used instead. Specifying `/` has the same effect as omitting this parameter. The maximum length is 4,096 characters.
   *
   * > **Important:** If an EFS access point is specified in the `authorizationConfig`, the root directory parameter must either be omitted or set to `/`, which enforces the path set on the Amazon EFS access point.
   *
   * @public
   */
  rootDirectory?: string | undefined;

  /**
   * Determines whether to enable encryption for Amazon EFS data in transit between the Amazon ECS host and the Amazon EFS server. Transit encryption must be enabled if Amazon EFS IAM authorization is used. If this parameter is omitted, the default value of `DISABLED` is used. For more information, see [Encrypting data in transit](https://docs.aws.amazon.com/efs/latest/ug/encryption-in-transit.html) in the *Amazon Elastic File System User Guide*.
   *
   * @public
   */
  transitEncryption?: EFSTransitEncryption | undefined;

  /**
   * The port to use when sending encrypted data between the Amazon ECS host and the Amazon EFS server. If you don't specify a transit encryption port, it uses the port selection strategy that the Amazon EFS mount helper uses. The value must be between 0 and 65,535. For more information, see [EFS mount helper](https://docs.aws.amazon.com/efs/latest/ug/efs-mount-helper.html) in the *Amazon Elastic File System User Guide*.
   *
   * @public
   */
  transitEncryptionPort?: number | undefined;

  /**
   * The authorization configuration details for the Amazon EFS file system.
   *
   * @public
   */
  authorizationConfig?: EFSAuthorizationConfig | undefined;
}

/**
 * Determine whether your data volume persists on the host container instance and where it's stored. If this parameter is empty, then the Docker daemon assigns a host path for your data volume. However, the data isn't guaranteed to persist after the containers that are associated with it stop running.
 *
 * @public
 */
export interface Host {
  /**
   * The path on the host container instance that's presented to the container. If this parameter is empty, then the Docker daemon has assigned a host path for you. If this parameter contains a file location, then the data volume persists at the specified location on the host container instance until you delete it manually. If the source path location doesn't exist on the host container instance, the Docker daemon creates it. If the location does exist, the contents of the source path folder are exported.
   *
   * > **Note:** This parameter isn't applicable to jobs that run on Fargate resources. Don't provide this for these jobs.
   *
   * @public
   */
  sourcePath?: string | undefined;
}

/**
 * This is used when you're using an S3Files file system for job storage.
 *
 * @public
 */
export interface S3FilesVolumeConfiguration {
  /**
   * The Amazon Resource Name (ARN) of the S3Files file system to use.
   *
   * @public
   */
  fileSystemArn: string | undefined;

  /**
   * The directory within the S3Files file system to mount as the root directory.
   *
   * @public
   */
  rootDirectory?: string | undefined;

  /**
   * The port to use when sending encrypted data between the Amazon ECS host and the S3Files file system server.
   *
   * @public
   */
  transitEncryptionPort?: number | undefined;

  /**
   * The Amazon Resource Name (ARN) of the S3Files access point to use.
   *
   * @public
   */
  accessPointArn?: string | undefined;
}

/**
 * A data volume that's used in a job's container properties.
 *
 * @public
 */
export interface Volume {
  /**
   * The contents of the `host` parameter determine whether your data volume persists on the host container instance and where it's stored. If the host parameter is empty, then the Docker daemon assigns a host path for your data volume. However, the data isn't guaranteed to persist after the containers that are associated with it stop running.
   *
   * > **Note:** This parameter isn't applicable to jobs that are running on Fargate resources and shouldn't be provided.
   *
   * @public
   */
  host?: Host | undefined;

  /**
   * The name of the volume. It can be up to 255 characters long. It can contain uppercase and lowercase letters, numbers, hyphens (-), and underscores (_). This name is referenced in the `sourceVolume` parameter of container definition `mountPoints`.
   *
   * @public
   */
  name?: string | undefined;

  /**
   * This parameter is specified when you're using an Amazon Elastic File System file system for job storage. Jobs that are running on Fargate resources must specify a `platformVersion` of at least `1.4.0`.
   *
   * @public
   */
  efsVolumeConfiguration?: EFSVolumeConfiguration | undefined;

  /**
   * This parameter is specified when you're using an S3Files file system for job storage.
   *
   * @public
   */
  s3filesVolumeConfiguration?: S3FilesVolumeConfiguration | undefined;
}

/**
 * Container properties are used for Amazon ECS based job definitions. These properties to describe the container that's launched as part of a job.
 *
 * @public
 */
export interface ContainerProperties {
  /**
   * Required. The image used to start a container. This string is passed directly to the Docker daemon. Images in the Docker Hub registry are available by default. Other repositories are specified with `repository-url/image:tag`. It can be 255 characters long. It can contain uppercase and lowercase letters, numbers, hyphens (-), underscores (_), colons (:), periods (.), forward slashes (/), and number signs (#). This parameter maps to `Image` in the [Create a container](https://docs.docker.com/engine/api/latest/#tag/Container/operation/ContainerCreate) section of the [Docker Remote API](https://docs.docker.com/engine/api/latest/) and the `IMAGE` parameter of [docker run](https://docs.docker.com/engine/reference/run/).
   *
   * > **Note:** Docker image architecture must match the processor architecture of the compute resources that they're scheduled on. For example, ARM-based Docker images can only run on ARM-based compute resources.
   *
   * - Images in Amazon ECR Public repositories use the full `registry/repository[:tag]` or `registry/repository[@digest]` naming conventions. For example, `public.ecr.aws/registry_alias/my-web-app:latest`.
   * - Images in Amazon ECR repositories use the full registry and repository URI (for example, `123456789012.dkr.ecr.<region-name>.amazonaws.com/<repository-name>`).
   * - Images in official repositories on Docker Hub use a single name (for example, `ubuntu` or `mongo`).
   * - Images in other repositories on Docker Hub are qualified with an organization name (for example, `amazon/amazon-ecs-agent`).
   * - Images in other online repositories are qualified further by a domain name (for example, `quay.io/assemblyline/ubuntu`).
   *
   * @public
   */
  image?: string | undefined;

  /**
   * This parameter is deprecated, use `resourceRequirements` to specify the vCPU requirements for the job definition. It's not supported for jobs running on Fargate resources. For jobs running on Amazon EC2 resources, it specifies the number of vCPUs reserved for the job.
   *
   * Each vCPU is equivalent to 1,024 CPU shares. This parameter maps to `CpuShares` in the [Create a container](https://docs.docker.com/engine/api/latest/#tag/Container/operation/ContainerCreate) section of the [Docker Remote API](https://docs.docker.com/engine/api/latest/) and the `--cpu-shares` option to [docker run](https://docs.docker.com/engine/reference/run/). The number of vCPUs must be specified but can be specified in several places. You must specify it at least once for each node.
   *
   * @deprecated This field is deprecated, use resourceRequirements instead.
   * @public
   */
  vcpus?: number | undefined;

  /**
   * This parameter is deprecated, use `resourceRequirements` to specify the memory requirements for the job definition. It's not supported for jobs running on Fargate resources. For jobs that run on Amazon EC2 resources, it specifies the memory hard limit (in MiB) for a container. If your container attempts to exceed the specified number, it's terminated. You must specify at least 4 MiB of memory for a job using this parameter. The memory hard limit can be specified in several places. It must be specified for each node at least once.
   *
   * @deprecated This field is deprecated, use resourceRequirements instead.
   * @public
   */
  memory?: number | undefined;

  /**
   * The command that's passed to the container. This parameter maps to `Cmd` in the [Create a container](https://docs.docker.com/engine/api/latest/#tag/Container/operation/ContainerCreate) section of the [Docker Remote API](https://docs.docker.com/engine/api/latest/) and the `COMMAND` parameter to [docker run](https://docs.docker.com/engine/reference/run/). For more information, see [https://docs.docker.com/engine/reference/builder/#cmd](https://docs.docker.com/engine/reference/builder/#cmd).
   *
   * @public
   */
  command?: string[] | undefined;

  /**
   * The Amazon Resource Name (ARN) of the IAM role that the container can assume for Amazon Web Services permissions. For more information, see [IAM roles for tasks](https://docs.aws.amazon.com/AmazonECS/latest/developerguide/task-iam-roles.html) in the *Amazon Elastic Container Service Developer Guide*.
   *
   * @public
   */
  jobRoleArn?: string | undefined;

  /**
   * The Amazon Resource Name (ARN) of the execution role that Batch can assume. For jobs that run on Fargate resources, you must provide an execution role. For more information, see [Batch execution IAM role](https://docs.aws.amazon.com/batch/latest/userguide/execution-IAM-role.html) in the *Batch User Guide*.
   *
   * @public
   */
  executionRoleArn?: string | undefined;

  /**
   * A list of data volumes used in a job.
   *
   * @public
   */
  volumes?: Volume[] | undefined;

  /**
   * The environment variables to pass to a container. This parameter maps to `Env` in the [Create a container](https://docs.docker.com/engine/api/latest/#tag/Container/operation/ContainerCreate) section of the [Docker Remote API](https://docs.docker.com/engine/api/latest/) and the `--env` option to [docker run](https://docs.docker.com/engine/reference/run/).
   *
   * > **Important:** We don't recommend using plaintext environment variables for sensitive information, such as credential data.
   *
   * > **Note:** Environment variables cannot start with "`AWS_BATCH`". This naming convention is reserved for variables that Batch sets.
   *
   * @public
   */
  environment?: KeyValuePair[] | undefined;

  /**
   * The mount points for data volumes in your container. This parameter maps to `Volumes` in the [Create a container](https://docs.docker.com/engine/api/latest/#tag/Container/operation/ContainerCreate) section of the [Docker Remote API](https://docs.docker.com/engine/api/latest/) and the `--volume` option to [docker run](https://docs.docker.com/engine/reference/run/).
   *
   * @public
   */
  mountPoints?: MountPoint[] | undefined;

  /**
   * When this parameter is true, the container is given read-only access to its root file system. This parameter maps to `ReadonlyRootfs` in the [Create a container](https://docs.docker.com/engine/api/latest/#tag/Container/operation/ContainerCreate) section of the [Docker Remote API](https://docs.docker.com/engine/api/latest/) and the `--read-only` option to `docker run`.
   *
   * @public
   */
  readonlyRootFilesystem?: boolean | undefined;

  /**
   * When this parameter is true, the container is given elevated permissions on the host container instance (similar to the `root` user). This parameter maps to `Privileged` in the [Create a container](https://docs.docker.com/engine/api/latest/#tag/Container/operation/ContainerCreate) section of the [Docker Remote API](https://docs.docker.com/engine/api/latest/) and the `--privileged` option to [docker run](https://docs.docker.com/engine/reference/run/). The default value is false.
   *
   * > **Note:** This parameter isn't applicable to jobs that are running on Fargate resources and shouldn't be provided, or specified as false.
   *
   * @public
   */
  privileged?: boolean | undefined;

  /**
   * A list of `ulimits` to set in the container. This parameter maps to `Ulimits` in the [Create a container](https://docs.docker.com/engine/api/latest/#tag/Container/operation/ContainerCreate) section of the [Docker Remote API](https://docs.docker.com/engine/api/latest/) and the `--ulimit` option to [docker run](https://docs.docker.com/engine/reference/run/).
   *
   * > **Note:** This parameter isn't applicable to jobs that are running on Fargate resources and shouldn't be provided.
   *
   * @public
   */
  ulimits?: Ulimit[] | undefined;

  /**
   * The user name to use inside the container. This parameter maps to `User` in the [Create a container](https://docs.docker.com/engine/api/latest/#tag/Container/operation/ContainerCreate) section of the [Docker Remote API](https://docs.docker.com/engine/api/latest/) and the `--user` option to [docker run](https://docs.docker.com/engine/reference/run/).
   *
   * @public
   */
  user?: string | undefined;

  /**
   * The instance type to use for a multi-node parallel job. All node groups in a multi-node parallel job must use the same instance type.
   *
   * > **Note:** This parameter isn't applicable to single-node container jobs or jobs that run on Fargate resources, and shouldn't be provided.
   *
   * @public
   */
  instanceType?: string | undefined;

  /**
   * The type and amount of resources to assign to a container. The supported resources include `GPU`, `MEMORY`, and `VCPU`.
   *
   * @public
   */
  resourceRequirements?: ResourceRequirement[] | undefined;

  /**
   * Linux-specific modifications that are applied to the container, such as details for device mappings.
   *
   * @public
   */
  linuxParameters?: LinuxParameters | undefined;

  /**
   * The log configuration specification for the container.
   *
   * This parameter maps to `LogConfig` in the [Create a container](https://docs.docker.com/engine/api/latest/#tag/Container/operation/ContainerCreate) section of the [Docker Remote API](https://docs.docker.com/engine/api/latest/) and the `--log-driver` option to [docker run](https://docs.docker.com/engine/reference/run/). By default, containers use the same logging driver that the Docker daemon uses. However the container might use a different logging driver than the Docker daemon by specifying a log driver with this parameter in the container definition. To use a different logging driver for a container, the log system must be configured properly on the container instance (or on a different log server for remote logging options). For more information on the options for different supported log drivers, see [Configure logging drivers](https://docs.docker.com/engine/admin/logging/overview/) in the Docker documentation.
   *
   * > **Note:** Batch currently supports a subset of the logging drivers available to the Docker daemon (shown in the [LogConfiguration](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-batch-jobdefinition-containerproperties-logconfiguration.html) data type).
   *
   * This parameter requires version 1.18 of the Docker Remote API or greater on your container instance. To check the Docker Remote API version on your container instance, log in to your container instance and run the following command: `sudo docker version | grep "Server API version"`
   *
   * > **Note:** The Amazon ECS container agent running on a container instance must register the logging drivers available on that instance with the `ECS_AVAILABLE_LOGGING_DRIVERS` environment variable before containers placed on that instance can use these log configuration options. For more information, see [Amazon ECS container agent configuration](https://docs.aws.amazon.com/AmazonECS/latest/developerguide/ecs-agent-config.html) in the *Amazon Elastic Container Service Developer Guide*.
   *
   * @public
   */
  logConfiguration?: LogConfiguration | undefined;

  /**
   * The secrets for the container. For more information, see [Specifying sensitive data](https://docs.aws.amazon.com/batch/latest/userguide/specifying-sensitive-data.html) in the *Batch User Guide*.
   *
   * @public
   */
  secrets?: Secret[] | undefined;

  /**
   * The network configuration for jobs that are running on Fargate resources. Jobs that are running on Amazon EC2 resources must not specify this parameter.
   *
   * @public
   */
  networkConfiguration?: NetworkConfiguration | undefined;

  /**
   * The platform configuration for jobs that are running on Fargate resources. Jobs that are running on Amazon EC2 resources must not specify this parameter.
   *
   * @public
   */
  fargatePlatformConfiguration?: FargatePlatformConfiguration | undefined;

  /**
   * Determines whether execute command functionality is turned on for this task. If `true`, execute command functionality is turned on all the containers in the task.
   *
   * @public
   */
  enableExecuteCommand?: boolean | undefined;

  /**
   * The amount of ephemeral storage to allocate for the task. This parameter is used to expand the total amount of ephemeral storage available, beyond the default amount, for tasks hosted on Fargate.
   *
   * @public
   */
  ephemeralStorage?: EphemeralStorage | undefined;

  /**
   * An object that represents the compute environment architecture for Batch jobs on Fargate.
   *
   * @public
   */
  runtimePlatform?: RuntimePlatform | undefined;

  /**
   * The private repository authentication credentials to use.
   *
   * @public
   */
  repositoryCredentials?: RepositoryCredentials | undefined;
}

/**
 * A list of containers that this task depends on.
 *
 * @public
 */
export interface TaskContainerDependency {
  /**
   * A unique identifier for the container.
   *
   * @public
   */
  containerName?: string | undefined;

  /**
   * The dependency condition of the container. The following are the available conditions and their behavior:
   *
   * - `START` - This condition emulates the behavior of links and volumes today. It validates that a dependent container is started before permitting other containers to start.
   * - `COMPLETE` - This condition validates that a dependent container runs to completion (exits) before permitting other containers to start. This can be useful for nonessential containers that run a script and then exit. This condition can't be set on an essential container.
   * - `SUCCESS` - This condition is the same as `COMPLETE`, but it also requires that the container exits with a zero status. This condition can't be set on an essential container.
   *
   * @public
   */
  condition?: string | undefined;
}

/**
 * The FireLens configuration for the container. This is used to specify and configure a log router for container logs. For more information, see [Custom log](https://docs.aws.amazon.com/AmazonECS/latest/developerguide/using_firelens.html) routing in the *Amazon Elastic Container Service Developer Guide*.
 *
 * @public
 */
export interface FirelensConfiguration {
  /**
   * The log router to use. The valid values are `fluentd` or `fluentbit`.
   *
   * @public
   */
  type: FirelensConfigurationType | undefined;

  /**
   * The options to use when configuring the log router. This field is optional and can be used to specify a custom configuration file or to add additional metadata, such as the task, task definition, cluster, and container instance details to the log event. If specified, the syntax to use is `"options":\{"enable-ecs-log-metadata":"true|false","config-file-type:"s3|file","config-file-value":"arn:aws:s3:::mybucket/fluent.conf|filepath"\}`. For more information, see [Creating a task definition that uses a FireLens configuration](https://docs.aws.amazon.com/AmazonECS/latest/developerguide/using_firelens.html#firelens-taskdef) in the *Amazon Elastic Container Service Developer Guide*.
   *
   * @public
   */
  options?: Record<string, string> | undefined;
}

/**
 * Container properties are used for Amazon ECS-based job definitions. These properties to describe the container that's launched as part of a job.
 *
 * @public
 */
export interface TaskContainerProperties {
  /**
   * The command that's passed to the container. This parameter maps to `Cmd` in the [Create a container](https://docs.docker.com/engine/api/latest/#tag/Container/operation/ContainerCreate) section of the [Docker Remote API](https://docs.docker.com/engine/api/latest/) and the `COMMAND` parameter to [docker run](https://docs.docker.com/engine/reference/run/). For more information, see [Dockerfile reference: CMD](https://docs.docker.com/engine/reference/builder/#cmd).
   *
   * @public
   */
  command?: string[] | undefined;

  /**
   * A list of containers that this container depends on.
   *
   * @public
   */
  dependsOn?: TaskContainerDependency[] | undefined;

  /**
   * The environment variables to pass to a container. This parameter maps to Env in the [Create a container](https://docs.docker.com/engine/api/latest/#tag/Container/operation/ContainerCreate) section of the [Docker Remote API](https://docs.docker.com/engine/api/latest/) and the `--env` parameter to [docker run](https://docs.docker.com/engine/reference/run/).
   *
   * > **Important:** We don't recommend using plaintext environment variables for sensitive information, such as credential data.
   *
   * > **Note:** Environment variables cannot start with `AWS_BATCH`. This naming convention is reserved for variables that Batch sets.
   *
   * @public
   */
  environment?: KeyValuePair[] | undefined;

  /**
   * If the essential parameter of a container is marked as `true`, and that container fails or stops for any reason, all other containers that are part of the task are stopped. If the `essential` parameter of a container is marked as false, its failure doesn't affect the rest of the containers in a task. If this parameter is omitted, a container is assumed to be essential.
   *
   * All jobs must have at least one essential container. If you have an application that's composed of multiple containers, group containers that are used for a common purpose into components, and separate the different components into multiple task definitions. For more information, see [Application Architecture](https://docs.aws.amazon.com/AmazonECS/latest/developerguide/application_architecture.html) in the *Amazon Elastic Container Service Developer Guide*.
   *
   * @public
   */
  essential?: boolean | undefined;

  /**
   * The FireLens configuration for the container. This is used to specify and configure a log router for container logs. For more information, see [Custom log](https://docs.aws.amazon.com/AmazonECS/latest/developerguide/using_firelens.html) routing in the *Amazon Elastic Container Service Developer Guide*.
   *
   * @public
   */
  firelensConfiguration?: FirelensConfiguration | undefined;

  /**
   * The image used to start a container. This string is passed directly to the Docker daemon. By default, images in the Docker Hub registry are available. Other repositories are specified with either `repository-url/image:tag` or `repository-url/image@digest`. Up to 255 letters (uppercase and lowercase), numbers, hyphens, underscores, colons, periods, forward slashes, and number signs are allowed. This parameter maps to `Image` in the [Create a container](https://docs.docker.com/engine/api/latest/#tag/Container/operation/ContainerCreate) section of the [Docker Remote API](https://docs.docker.com/engine/api/latest/) and the `IMAGE` parameter of the [*docker run*](https://docs.docker.com/engine/reference/run/#security-configuration).
   *
   * @public
   */
  image: string | undefined;

  /**
   * Linux-specific modifications that are applied to the container, such as Linux kernel capabilities. For more information, see [KernelCapabilities](https://docs.aws.amazon.com/AmazonECS/latest/APIReference/API_KernelCapabilities.html).
   *
   * @public
   */
  linuxParameters?: LinuxParameters | undefined;

  /**
   * The log configuration specification for the container.
   *
   * This parameter maps to `LogConfig` in the [Create a container](https://docs.docker.com/engine/api/latest/#tag/Container/operation/ContainerCreate) section of the [Docker Remote API](https://docs.docker.com/engine/api/latest/) and the `--log-driver` option to [docker run](https://docs.docker.com/engine/reference/run/#security-configuration).
   *
   * By default, containers use the same logging driver that the Docker daemon uses. However the container can use a different logging driver than the Docker daemon by specifying a log driver with this parameter in the container definition. To use a different logging driver for a container, the log system must be configured properly on the container instance (or on a different log server for remote logging options). For more information about the options for different supported log drivers, see [Configure logging drivers](https://docs.docker.com/engine/admin/logging/overview/) in the *Docker documentation*.
   *
   * > **Note:** Amazon ECS currently supports a subset of the logging drivers available to the Docker daemon (shown in the `LogConfiguration` data type). Additional log drivers may be available in future releases of the Amazon ECS container agent.
   *
   * This parameter requires version 1.18 of the Docker Remote API or greater on your container instance. To check the Docker Remote API version on your container instance, log in to your container instance and run the following command: sudo docker version `--format '\{\{.Server.APIVersion\}\}'`
   *
   * > **Note:** The Amazon ECS container agent running on a container instance must register the logging drivers available on that instance with the `ECS_AVAILABLE_LOGGING_DRIVERS` environment variable before containers placed on that instance can use these log configuration options. For more information, see [Amazon ECS container agent configuration](https://docs.aws.amazon.com/AmazonECS/latest/developerguide/ecs-agent-config.html) in the *Amazon Elastic Container Service Developer Guide*.
   *
   * @public
   */
  logConfiguration?: LogConfiguration | undefined;

  /**
   * The mount points for data volumes in your container.
   *
   * This parameter maps to `Volumes` in the [Create a container](https://docs.docker.com/engine/api/latest/#tag/Container/operation/ContainerCreate) section of the [Docker Remote API](https://docs.docker.com/engine/api/latest/) and the --volume option to [docker run](https://docs.docker.com/engine/reference/run/#security-configuration).
   *
   * Windows containers can mount whole directories on the same drive as `$env:ProgramData`. Windows containers can't mount directories on a different drive, and mount point can't be across drives.
   *
   * @public
   */
  mountPoints?: MountPoint[] | undefined;

  /**
   * The name of a container. The name can be used as a unique identifier to target your `dependsOn` and `Overrides` objects.
   *
   * @public
   */
  name?: string | undefined;

  /**
   * When this parameter is `true`, the container is given elevated privileges on the host container instance (similar to the `root` user). This parameter maps to `Privileged` in the [Create a container](https://docs.docker.com/engine/api/latest/#tag/Container/operation/ContainerCreate) section of the [Docker Remote API](https://docs.docker.com/engine/api/latest/) and the `--privileged` option to [docker run](https://docs.docker.com/engine/reference/run/#security-configuration).
   *
   * > **Note:** This parameter is not supported for Windows containers or tasks run on Fargate.
   *
   * @public
   */
  privileged?: boolean | undefined;

  /**
   * When this parameter is true, the container is given read-only access to its root file system. This parameter maps to `ReadonlyRootfs` in the [Create a container](https://docs.docker.com/engine/api/latest/#tag/Container/operation/ContainerCreate) section of the [Docker Remote API](https://docs.docker.com/engine/api/latest/) and the `--read-only` option to [docker run](https://docs.docker.com/engine/reference/run/#security-configuration).
   *
   * > **Note:** This parameter is not supported for Windows containers.
   *
   * @public
   */
  readonlyRootFilesystem?: boolean | undefined;

  /**
   * The private repository authentication credentials to use.
   *
   * @public
   */
  repositoryCredentials?: RepositoryCredentials | undefined;

  /**
   * The type and amount of a resource to assign to a container. The supported resources include `GPU`, `MEMORY`, and `VCPU`.
   *
   * @public
   */
  resourceRequirements?: ResourceRequirement[] | undefined;

  /**
   * The secrets to pass to the container. For more information, see [Specifying Sensitive Data](https://docs.aws.amazon.com/AmazonECS/latest/developerguide/specifying-sensitive-data.html) in the Amazon Elastic Container Service Developer Guide.
   *
   * @public
   */
  secrets?: Secret[] | undefined;

  /**
   * A list of `ulimits` to set in the container. If a `ulimit` value is specified in a task definition, it overrides the default values set by Docker. This parameter maps to `Ulimits` in the [Create a container](https://docs.docker.com/engine/api/latest/#tag/Container/operation/ContainerCreate) section of the [Docker Remote API](https://docs.docker.com/engine/api/latest/) and the `--ulimit` option to [docker run](https://docs.docker.com/engine/reference/run/#security-configuration).
   *
   * Amazon ECS tasks hosted on Fargate use the default resource limit values set by the operating system with the exception of the nofile resource limit parameter which Fargate overrides. The `nofile` resource limit sets a restriction on the number of open files that a container can use. The default `nofile` soft limit is `1024` and the default hard limit is `65535`.
   *
   * This parameter requires version 1.18 of the Docker Remote API or greater on your container instance. To check the Docker Remote API version on your container instance, log in to your container instance and run the following command: sudo docker version `--format '\{\{.Server.APIVersion\}\}'`
   *
   * > **Note:** This parameter is not supported for Windows containers.
   *
   * @public
   */
  ulimits?: Ulimit[] | undefined;

  /**
   * The user to use inside the container. This parameter maps to User in the Create a container section of the Docker Remote API and the --user option to docker run.
   *
   * > **Note:** When running tasks using the `host` network mode, don't run containers using the `root user (UID 0)`. We recommend using a non-root user for better security.
   *
   * You can specify the `user` using the following formats. If specifying a UID or GID, you must specify it as a positive integer.
   *
   * - `user`
   * - `user:group`
   * - `uid`
   * - `uid:gid`
   * - `user:gi`
   * - `uid:group`
   *
   * > **Note:** This parameter is not supported for Windows containers.
   *
   * @public
   */
  user?: string | undefined;

  /**
   * Time duration (in seconds) to wait before giving up on resolving dependencies for a container. The minimum value is 2 seconds and the maximum value for Fargate is 120 seconds.
   *
   * @public
   */
  startTimeout?: number | undefined;

  /**
   * Time duration (in seconds) to wait before the container is forcefully killed if it doesn't exit normally on its own. The minimum value is 2 seconds and the maximum value for Fargate is 120 seconds. If the parameter is not specified, the default value of 30 seconds is used. For tasks that use the EC2 launch type, if the `stopTimeout` parameter isn't specified, the value set for the Amazon ECS container agent configuration variable `ECS_CONTAINER_STOP_TIMEOUT` is used. If neither the `stopTimeout` parameter nor the `ECS_CONTAINER_STOP_TIMEOUT` agent configuration variable are set, then the default value of 30 seconds is used.
   *
   * @public
   */
  stopTimeout?: number | undefined;
}

/**
 * The properties for a task definition that describes the container and volume definitions of an Amazon ECS task. You can specify which Docker images to use, the required resources, and other configurations related to launching the task definition through an Amazon ECS service or task.
 *
 * @public
 */
export interface EcsTaskProperties {
  /**
   * This object is a list of containers.
   *
   * @public
   */
  containers: TaskContainerProperties[] | undefined;

  /**
   * The amount of ephemeral storage to allocate for the task. This parameter is used to expand the total amount of ephemeral storage available, beyond the default amount, for tasks hosted on Fargate.
   *
   * @public
   */
  ephemeralStorage?: EphemeralStorage | undefined;

  /**
   * The Amazon Resource Name (ARN) of the execution role that Batch can assume. For jobs that run on Fargate resources, you must provide an execution role. For more information, see [Batch execution IAM role](https://docs.aws.amazon.com/batch/latest/userguide/execution-IAM-role.html) in the *Batch User Guide*.
   *
   * @public
   */
  executionRoleArn?: string | undefined;

  /**
   * The Fargate platform version where the jobs are running. A platform version is specified only for jobs that are running on Fargate resources. If one isn't specified, the `LATEST` platform version is used by default. This uses a recent, approved version of the Fargate platform for compute resources. For more information, see [Fargate platform versions](https://docs.aws.amazon.com/AmazonECS/latest/developerguide/platform_versions.html) in the *Amazon Elastic Container Service Developer Guide*.
   *
   * @public
   */
  platformVersion?: string | undefined;

  /**
   * The IPC resource namespace to use for the containers in the task. The valid values are `host`, `task`, or `none`.
   *
   * If `host` is specified, all containers within the tasks that specified the `host` IPC mode on the same container instance share the same IPC resources with the host Amazon EC2 instance.
   *
   * If `task` is specified, all containers within the specified `task` share the same IPC resources.
   *
   * If `none` is specified, the IPC resources within the containers of a task are private, and are not shared with other containers in a task or on the container instance.
   *
   * If no value is specified, then the IPC resource namespace sharing depends on the Docker daemon setting on the container instance. For more information, see [IPC settings](https://docs.docker.com/engine/reference/run/#ipc-settings---ipc) in the Docker run reference.
   *
   * > **Note:** This parameter is not supported for jobs that run on Fargate resources.
   *
   * @public
   */
  ipcMode?: string | undefined;

  /**
   * The Amazon Resource Name (ARN) that's associated with the Amazon ECS task.
   *
   * > **Note:** This is object is comparable to [ContainerProperties:jobRoleArn](https://docs.aws.amazon.com/batch/latest/APIReference/API_ContainerProperties.html).
   *
   * @public
   */
  taskRoleArn?: string | undefined;

  /**
   * The process namespace to use for the containers in the task. The valid values are `host` or `task`. For example, monitoring sidecars might need `pidMode` to access information about other containers running in the same task.
   *
   * If `host` is specified, all containers within the tasks that specified the `host` PID mode on the same container instance share the process namespace with the host Amazon EC2 instance.
   *
   * If `task` is specified, all containers within the specified task share the same process namespace.
   *
   * If no value is specified, the default is a private namespace for each container. For more information, see [PID settings](https://docs.docker.com/engine/reference/run/#pid-settings---pid) in the Docker run reference.
   *
   * @public
   */
  pidMode?: string | undefined;

  /**
   * The network configuration for jobs that are running on Fargate resources. Jobs that are running on Amazon EC2 resources or Amazon ECS Managed Instances must not specify this parameter.
   *
   * @public
   */
  networkConfiguration?: NetworkConfiguration | undefined;

  /**
   * An object that represents the compute environment architecture for Batch jobs on Fargate or Amazon ECS Managed Instances. Use this to specify the operating system family (`operatingSystemFamily`) and CPU architecture (`cpuArchitecture`).
   *
   * For Amazon ECS Managed Instances, the valid value for `operatingSystemFamily` is `LINUX` (default). The valid values for `cpuArchitecture` are `X86_64` and `ARM64`.
   *
   * @public
   */
  runtimePlatform?: RuntimePlatform | undefined;

  /**
   * A list of volumes that are associated with the job.
   *
   * @public
   */
  volumes?: Volume[] | undefined;

  /**
   * Determines whether execute command functionality is turned on for this task. If `true`, execute command functionality is turned on all the containers in the task.
   *
   * @public
   */
  enableExecuteCommand?: boolean | undefined;

  /**
   * The network mode to use for the task. Valid values: `host`. When not specified, the default is `host`.
   *
   * With `host` mode, the container shares the host instance's network stack directly. When running tasks that use the `host` network mode, do not run containers using the root user (UID 0). Running as root grants unrestricted access to host resources and increases the attack surface.
   *
   * This parameter only applies to jobs running on Amazon ECS Managed Instances (`MANAGED_INSTANCES` platform capability). It cannot be specified for Fargate or Amazon EC2 platform job definitions.
   *
   * @public
   */
  networkMode?: string | undefined;
}

/**
 * An object that contains the properties for the Amazon ECS resources of a job.
 *
 * @public
 */
export interface EcsProperties {
  /**
   * An object that contains the properties for the Amazon ECS task definition of a job.
   *
   * > **Note:** This object is currently limited to one task element. However, the task element can run up to 10 containers.
   *
   * @public
   */
  taskProperties: EcsTaskProperties[] | undefined;
}

/**
 * An environment variable.
 *
 * @public
 */
export interface EksContainerEnvironmentVariable {
  /**
   * The name of the environment variable.
   *
   * @public
   */
  name: string | undefined;

  /**
   * The value of the environment variable.
   *
   * @public
   */
  value?: string | undefined;
}

/**
 * The type and amount of resources to assign to a container. The supported resources include `memory`, `cpu`, and `nvidia.com/gpu`. For more information, see [Resource management for pods and containers](https://kubernetes.io/docs/concepts/configuration/manage-resources-containers/) in the *Kubernetes documentation*.
 *
 * @public
 */
export interface EksContainerResourceRequirements {
  /**
   * The type and quantity of the resources to reserve for the container. The values vary based on the `name` that's specified. Resources can be requested using either the `limits` or the `requests` objects.
   *
   * - **memory**
   *
   *   The memory hard limit (in MiB) for the container, using whole integers, with a "Mi" suffix. If your container attempts to exceed the memory specified, the container is terminated. You must specify at least 4 MiB of memory for a job. `memory` can be specified in `limits`, `requests`, or both. If `memory` is specified in both places, then the value that's specified in `limits` must be equal to the value that's specified in `requests`.
   *
   *   > **Note:** To maximize your resource utilization, provide your jobs with as much memory as possible for the specific instance type that you are using. To learn how, see [Memory management](https://docs.aws.amazon.com/batch/latest/userguide/memory-management.html) in the *Batch User Guide*.
   *
   * - **cpu**
   *
   *   The number of CPUs that's reserved for the container. Values must be an even multiple of `0.25`. `cpu` can be specified in `limits`, `requests`, or both. If `cpu` is specified in both places, then the value that's specified in `limits` must be at least as large as the value that's specified in `requests`.
   *
   * - **nvidia.com/gpu**
   *
   *   The number of GPUs that's reserved for the container. Values must be a whole integer. `memory` can be specified in `limits`, `requests`, or both. If `memory` is specified in both places, then the value that's specified in `limits` must be equal to the value that's specified in `requests`.
   *
   * @public
   */
  limits?: Record<string, string> | undefined;

  /**
   * The type and quantity of the resources to request for the container. The values vary based on the `name` that's specified. Resources can be requested by using either the `limits` or the `requests` objects.
   *
   * - **memory**
   *
   *   The memory hard limit (in MiB) for the container, using whole integers, with a "Mi" suffix. If your container attempts to exceed the memory specified, the container is terminated. You must specify at least 4 MiB of memory for a job. `memory` can be specified in `limits`, `requests`, or both. If `memory` is specified in both, then the value that's specified in `limits` must be equal to the value that's specified in `requests`.
   *
   *   > **Note:** If you're trying to maximize your resource utilization by providing your jobs as much memory as possible for a particular instance type, see [Memory management](https://docs.aws.amazon.com/batch/latest/userguide/memory-management.html) in the *Batch User Guide*.
   *
   * - **cpu**
   *
   *   The number of CPUs that are reserved for the container. Values must be an even multiple of `0.25`. `cpu` can be specified in `limits`, `requests`, or both. If `cpu` is specified in both, then the value that's specified in `limits` must be at least as large as the value that's specified in `requests`.
   *
   * - **nvidia.com/gpu**
   *
   *   The number of GPUs that are reserved for the container. Values must be a whole integer. `nvidia.com/gpu` can be specified in `limits`, `requests`, or both. If `nvidia.com/gpu` is specified in both, then the value that's specified in `limits` must be equal to the value that's specified in `requests`.
   *
   * @public
   */
  requests?: Record<string, string> | undefined;
}

/**
 * The security context for a job. For more information, see [Configure a security context for a pod or container](https://kubernetes.io/docs/tasks/configure-pod-container/security-context/) in the *Kubernetes documentation*.
 *
 * @public
 */
export interface EksContainerSecurityContext {
  /**
   * When this parameter is specified, the container is run as the specified user ID (`uid`). If this parameter isn't specified, the default is the user that's specified in the image metadata. This parameter maps to `RunAsUser` and `MustRanAs` policy in the [Users and groups pod security policies](https://kubernetes.io/docs/concepts/security/pod-security-policy/#users-and-groups) in the *Kubernetes documentation*.
   *
   * @public
   */
  runAsUser?: number | undefined;

  /**
   * When this parameter is specified, the container is run as the specified group ID (`gid`). If this parameter isn't specified, the default is the group that's specified in the image metadata. This parameter maps to `RunAsGroup` and `MustRunAs` policy in the [Users and groups pod security policies](https://kubernetes.io/docs/concepts/security/pod-security-policy/#users-and-groups) in the *Kubernetes documentation*.
   *
   * @public
   */
  runAsGroup?: number | undefined;

  /**
   * When this parameter is `true`, the container is given elevated permissions on the host container instance. The level of permissions are similar to the `root` user permissions. The default value is `false`. This parameter maps to `privileged` policy in the [Privileged pod security policies](https://kubernetes.io/docs/concepts/security/pod-security-policy/#privileged) in the *Kubernetes documentation*.
   *
   * @public
   */
  privileged?: boolean | undefined;

  /**
   * Whether or not a container or a Kubernetes pod is allowed to gain more privileges than its parent process. The default value is `false`.
   *
   * @public
   */
  allowPrivilegeEscalation?: boolean | undefined;

  /**
   * When this parameter is `true`, the container is given read-only access to its root file system. The default value is `false`. This parameter maps to `ReadOnlyRootFilesystem` policy in the [Volumes and file systems pod security policies](https://kubernetes.io/docs/concepts/security/pod-security-policy/#volumes-and-file-systems) in the *Kubernetes documentation*.
   *
   * @public
   */
  readOnlyRootFilesystem?: boolean | undefined;

  /**
   * When this parameter is specified, the container is run as a user with a `uid` other than 0. If this parameter isn't specified, so such rule is enforced. This parameter maps to `RunAsUser` and `MustRunAsNonRoot` policy in the [Users and groups pod security policies](https://kubernetes.io/docs/concepts/security/pod-security-policy/#users-and-groups) in the *Kubernetes documentation*.
   *
   * @public
   */
  runAsNonRoot?: boolean | undefined;
}

/**
 * The volume mounts for a container for an Amazon EKS job. For more information about volumes and volume mounts in Kubernetes, see [Volumes](https://kubernetes.io/docs/concepts/storage/volumes/) in the *Kubernetes documentation*.
 *
 * @public
 */
export interface EksContainerVolumeMount {
  /**
   * The name the volume mount. This must match the name of one of the volumes in the pod.
   *
   * @public
   */
  name?: string | undefined;

  /**
   * The path on the container where the volume is mounted.
   *
   * @public
   */
  mountPath?: string | undefined;

  /**
   * A sub-path inside the referenced volume instead of its root.
   *
   * @public
   */
  subPath?: string | undefined;

  /**
   * If this value is `true`, the container has read-only access to the volume. Otherwise, the container can write to the volume. The default value is `false`.
   *
   * @public
   */
  readOnly?: boolean | undefined;
}

/**
 * EKS container properties are used in job definitions for Amazon EKS based job definitions to describe the properties for a container node in the pod that's launched as part of a job. This can't be specified for Amazon ECS based job definitions.
 *
 * @public
 */
export interface EksContainer {
  /**
   * The name of the container. If the name isn't specified, the default name "`Default`" is used. Each container in a pod must have a unique name.
   *
   * @public
   */
  name?: string | undefined;

  /**
   * The Docker image used to start the container.
   *
   * @public
   */
  image: string | undefined;

  /**
   * The image pull policy for the container. Supported values are `Always`, `IfNotPresent`, and `Never`. This parameter defaults to `IfNotPresent`. However, if the `:latest` tag is specified, it defaults to `Always`. For more information, see [Updating images](https://kubernetes.io/docs/concepts/containers/images/#updating-images) in the *Kubernetes documentation*.
   *
   * @public
   */
  imagePullPolicy?: string | undefined;

  /**
   * The entrypoint for the container. This isn't run within a shell. If this isn't specified, the `ENTRYPOINT` of the container image is used. Environment variable references are expanded using the container's environment.
   *
   * If the referenced environment variable doesn't exist, the reference in the command isn't changed. For example, if the reference is to "`$(NAME1)`" and the `NAME1` environment variable doesn't exist, the command string will remain "`$(NAME1)`." `$$` is replaced with `$` and the resulting string isn't expanded. For example, `$$(VAR_NAME)` will be passed as `$(VAR_NAME)` whether or not the `VAR_NAME` environment variable exists. The entrypoint can't be updated. For more information, see [ENTRYPOINT](https://docs.docker.com/engine/reference/builder/#entrypoint) in the *Dockerfile reference* and [Define a command and arguments for a container](https://kubernetes.io/docs/tasks/inject-data-application/define-command-argument-container/) and [Entrypoint](https://kubernetes.io/docs/reference/kubernetes-api/workload-resources/pod-v1/#entrypoint) in the *Kubernetes documentation*.
   *
   * @public
   */
  command?: string[] | undefined;

  /**
   * An array of arguments to the entrypoint. If this isn't specified, the `CMD` of the container image is used. This corresponds to the `args` member in the [Entrypoint](https://kubernetes.io/docs/reference/kubernetes-api/workload-resources/pod-v1/#entrypoint) portion of the [Pod](https://kubernetes.io/docs/reference/kubernetes-api/workload-resources/pod-v1/) in Kubernetes. Environment variable references are expanded using the container's environment.
   *
   * If the referenced environment variable doesn't exist, the reference in the command isn't changed. For example, if the reference is to "`$(NAME1)`" and the `NAME1` environment variable doesn't exist, the command string will remain "`$(NAME1)`." `$$` is replaced with `$`, and the resulting string isn't expanded. For example, `$$(VAR_NAME)` is passed as `$(VAR_NAME)` whether or not the `VAR_NAME` environment variable exists. For more information, see [Dockerfile reference: CMD](https://docs.docker.com/engine/reference/builder/#cmd) and [Define a command and arguments for a pod](https://kubernetes.io/docs/tasks/inject-data-application/define-command-argument-container/) in the *Kubernetes documentation*.
   *
   * @public
   */
  args?: string[] | undefined;

  /**
   * The environment variables to pass to a container.
   *
   * > **Note:** Environment variables cannot start with "`AWS_BATCH`". This naming convention is reserved for variables that Batch sets.
   *
   * @public
   */
  env?: EksContainerEnvironmentVariable[] | undefined;

  /**
   * The type and amount of resources to assign to a container. The supported resources include `memory`, `cpu`, and `nvidia.com/gpu`. For more information, see [Resource management for pods and containers](https://kubernetes.io/docs/concepts/configuration/manage-resources-containers/) in the *Kubernetes documentation*.
   *
   * @public
   */
  resources?: EksContainerResourceRequirements | undefined;

  /**
   * The volume mounts for the container. Batch supports `emptyDir`, `hostPath`, and `secret` volume types. For more information about volumes and volume mounts in Kubernetes, see [Volumes](https://kubernetes.io/docs/concepts/storage/volumes/) in the *Kubernetes documentation*.
   *
   * @public
   */
  volumeMounts?: EksContainerVolumeMount[] | undefined;

  /**
   * The security context for a job. For more information, see [Configure a security context for a pod or container](https://kubernetes.io/docs/tasks/configure-pod-container/security-context/) in the *Kubernetes documentation*.
   *
   * @public
   */
  securityContext?: EksContainerSecurityContext | undefined;
}

/**
 * References a Kubernetes secret resource. This name of the secret must start and end with an alphanumeric character, is required to be lowercase, can include periods (.) and hyphens (-), and can't contain more than 253 characters.
 *
 * @public
 */
export interface ImagePullSecret {
  /**
   * Provides a unique identifier for the `ImagePullSecret`. This object is required when `EksPodProperties$imagePullSecrets` is used.
   *
   * @public
   */
  name: string | undefined;
}

/**
 * Describes and uniquely identifies Kubernetes resources. For example, the compute environment that a pod runs in or the `jobID` for a job running in the pod. For more information, see [Understanding Kubernetes Objects](https://kubernetes.io/docs/concepts/overview/working-with-objects/kubernetes-objects/) in the *Kubernetes documentation*.
 *
 * @public
 */
export interface EksMetadata {
  /**
   * Key-value pairs used to identify, sort, and organize cube resources. Can contain up to 63 uppercase letters, lowercase letters, numbers, hyphens (-), and underscores (_). Labels can be added or modified at any time. Each resource can have multiple labels, but each key must be unique for a given object.
   *
   * @public
   */
  labels?: Record<string, string> | undefined;

  /**
   * Key-value pairs used to attach arbitrary, non-identifying metadata to Kubernetes objects. Valid annotation keys have two segments: an optional prefix and a name, separated by a slash (/).
   *
   * - The prefix is optional and must be 253 characters or less. If specified, the prefix must be a DNS subdomain− a series of DNS labels separated by dots (.), and it must end with a slash (/).
   * - The name segment is required and must be 63 characters or less. It can include alphanumeric characters ([a-z0-9A-Z]), dashes (-), underscores (_), and dots (.), but must begin and end with an alphanumeric character.
   *
   * > **Note:** Annotation values must be 255 characters or less.
   *
   * Annotations can be added or modified at any time. Each resource can have multiple annotations.
   *
   * @public
   */
  annotations?: Record<string, string> | undefined;

  /**
   * The namespace of the Amazon EKS cluster. In Kubernetes, namespaces provide a mechanism for isolating groups of resources within a single cluster. Names of resources need to be unique within a namespace, but not across namespaces. Batch places Batch Job pods in this namespace. If this field is provided, the value can't be empty or null. It must meet the following requirements:
   *
   * - 1-63 characters long
   * - Can't be set to default
   * - Can't start with `kube`
   * - Must match the following regular expression: `^[a-z0-9]([-a-z0-9]*[a-z0-9])?$`
   *
   * For more information, see [Namespaces](https://kubernetes.io/docs/concepts/overview/working-with-objects/namespaces/) in the *Kubernetes documentation*. This namespace can be different from the `kubernetesNamespace` set in the compute environment's `EksConfiguration`, but must have identical role-based access control (RBAC) roles as the compute environment's `kubernetesNamespace`. For multi-node parallel jobs, the same value must be provided across all the node ranges.
   *
   * @public
   */
  namespace?: string | undefined;
}

/**
 * Specifies the configuration of a Kubernetes `emptyDir` volume. An `emptyDir` volume is first created when a pod is assigned to a node. It exists as long as that pod is running on that node. The `emptyDir` volume is initially empty. All containers in the pod can read and write the files in the `emptyDir` volume. However, the `emptyDir` volume can be mounted at the same or different paths in each container. When a pod is removed from a node for any reason, the data in the `emptyDir` is deleted permanently. For more information, see [emptyDir](https://kubernetes.io/docs/concepts/storage/volumes/#emptydir) in the *Kubernetes documentation*.
 *
 * @public
 */
export interface EksEmptyDir {
  /**
   * The medium to store the volume. The default value is an empty string, which uses the storage of the node.
   *
   * - **""**
   *
   *   **(Default)** Use the disk storage of the node.
   *
   * - **"Memory"**
   *
   *   Use the `tmpfs` volume that's backed by the RAM of the node. Contents of the volume are lost when the node reboots, and any storage on the volume counts against the container's memory limit.
   *
   * @public
   */
  medium?: string | undefined;

  /**
   * The maximum size of the volume. By default, there's no maximum size defined.
   *
   * @public
   */
  sizeLimit?: string | undefined;
}

/**
 * Specifies the configuration of a Kubernetes `hostPath` volume. A `hostPath` volume mounts an existing file or directory from the host node's filesystem into your pod. For more information, see [hostPath](https://kubernetes.io/docs/concepts/storage/volumes/#hostpath) in the *Kubernetes documentation*.
 *
 * @public
 */
export interface EksHostPath {
  /**
   * The path of the file or directory on the host to mount into containers on the pod.
   *
   * @public
   */
  path?: string | undefined;
}

/**
 * A `persistentVolumeClaim` volume is used to mount a [PersistentVolume](https://kubernetes.io/docs/concepts/storage/persistent-volumes/) into a Pod. PersistentVolumeClaims are a way for users to "claim" durable storage without knowing the details of the particular cloud environment. See the information about [PersistentVolumes](https://kubernetes.io/docs/concepts/storage/persistent-volumes/) in the *Kubernetes documentation*.
 *
 * @public
 */
export interface EksPersistentVolumeClaim {
  /**
   * The name of the `persistentVolumeClaim` bounded to a `persistentVolume`. For more information, see [Persistent Volume Claims](https://kubernetes.io/docs/concepts/storage/persistent-volumes/#persistentvolumeclaims) in the *Kubernetes documentation*.
   *
   * @public
   */
  claimName: string | undefined;

  /**
   * An optional boolean value indicating if the mount is read only. Default is false. For more information, see [Read Only Mounts](https://kubernetes.io/docs/concepts/storage/volumes/#read-only-mounts) in the *Kubernetes documentation*.
   *
   * @public
   */
  readOnly?: boolean | undefined;
}

/**
 * Specifies the configuration of a Kubernetes `secret` volume. For more information, see [secret](https://kubernetes.io/docs/concepts/storage/volumes/#secret) in the *Kubernetes documentation*.
 *
 * @public
 */
export interface EksSecret {
  /**
   * The name of the secret. The name must be allowed as a DNS subdomain name. For more information, see [DNS subdomain names](https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#dns-subdomain-names) in the *Kubernetes documentation*.
   *
   * @public
   */
  secretName: string | undefined;

  /**
   * Specifies whether the secret or the secret's keys must be defined.
   *
   * @public
   */
  optional?: boolean | undefined;
}

/**
 * Specifies an Amazon EKS volume for a job definition.
 *
 * @public
 */
export interface EksVolume {
  /**
   * The name of the volume. The name must be allowed as a DNS subdomain name. For more information, see [DNS subdomain names](https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#dns-subdomain-names) in the *Kubernetes documentation*.
   *
   * @public
   */
  name: string | undefined;

  /**
   * Specifies the configuration of a Kubernetes `hostPath` volume. For more information, see [hostPath](https://kubernetes.io/docs/concepts/storage/volumes/#hostpath) in the *Kubernetes documentation*.
   *
   * @public
   */
  hostPath?: EksHostPath | undefined;

  /**
   * Specifies the configuration of a Kubernetes `emptyDir` volume. For more information, see [emptyDir](https://kubernetes.io/docs/concepts/storage/volumes/#emptydir) in the *Kubernetes documentation*.
   *
   * @public
   */
  emptyDir?: EksEmptyDir | undefined;

  /**
   * Specifies the configuration of a Kubernetes `secret` volume. For more information, see [secret](https://kubernetes.io/docs/concepts/storage/volumes/#secret) in the *Kubernetes documentation*.
   *
   * @public
   */
  secret?: EksSecret | undefined;

  /**
   * Specifies the configuration of a Kubernetes `persistentVolumeClaim` bounded to a `persistentVolume`. For more information, see [Persistent Volume Claims](https://kubernetes.io/docs/concepts/storage/persistent-volumes/#persistentvolumeclaims) in the *Kubernetes documentation*.
   *
   * @public
   */
  persistentVolumeClaim?: EksPersistentVolumeClaim | undefined;
}

/**
 * The properties for the pod.
 *
 * @public
 */
export interface EksPodProperties {
  /**
   * The name of the service account that's used to run the pod. For more information, see [Kubernetes service accounts](https://docs.aws.amazon.com/eks/latest/userguide/service-accounts.html) and [Configure a Kubernetes service account to assume an IAM role](https://docs.aws.amazon.com/eks/latest/userguide/associate-service-account-role.html) in the *Amazon EKS User Guide* and [Configure service accounts for pods](https://kubernetes.io/docs/tasks/configure-pod-container/configure-service-account/) in the *Kubernetes documentation*.
   *
   * @public
   */
  serviceAccountName?: string | undefined;

  /**
   * Indicates if the pod uses the hosts' network IP address. The default value is `true`. Setting this to `false` enables the Kubernetes pod networking model. Most Batch workloads are egress-only and don't require the overhead of IP allocation for each pod for incoming connections. For more information, see [Host namespaces](https://kubernetes.io/docs/concepts/security/pod-security-policy/#host-namespaces) and [Pod networking](https://kubernetes.io/docs/concepts/workloads/pods/#pod-networking) in the *Kubernetes documentation*.
   *
   * @public
   */
  hostNetwork?: boolean | undefined;

  /**
   * The DNS policy for the pod. The default value is `ClusterFirst`. If the `hostNetwork` parameter is not specified, the default is `ClusterFirstWithHostNet`. `ClusterFirst` indicates that any DNS query that does not match the configured cluster domain suffix is forwarded to the upstream nameserver inherited from the node. For more information, see [Pod's DNS policy](https://kubernetes.io/docs/concepts/services-networking/dns-pod-service/#pod-s-dns-policy) in the *Kubernetes documentation*.
   *
   * Valid values: `Default` | `ClusterFirst` | `ClusterFirstWithHostNet`
   *
   * @public
   */
  dnsPolicy?: string | undefined;

  /**
   * References a Kubernetes secret resource. It holds a list of secrets. These secrets help to gain access to pull an images from a private registry.
   *
   * `ImagePullSecret$name` is required when this object is used.
   *
   * @public
   */
  imagePullSecrets?: ImagePullSecret[] | undefined;

  /**
   * The properties of the container that's used on the Amazon EKS pod.
   *
   * > **Note:** This object is limited to 10 elements.
   *
   * @public
   */
  containers?: EksContainer[] | undefined;

  /**
   * These containers run before application containers, always runs to completion, and must complete successfully before the next container starts. These containers are registered with the Amazon EKS Connector agent and persists the registration information in the Kubernetes backend data store. For more information, see [Init Containers](https://kubernetes.io/docs/concepts/workloads/pods/init-containers/) in the *Kubernetes documentation*.
   *
   * > **Note:** This object is limited to 10 elements.
   *
   * @public
   */
  initContainers?: EksContainer[] | undefined;

  /**
   * Specifies the volumes for a job definition that uses Amazon EKS resources.
   *
   * @public
   */
  volumes?: EksVolume[] | undefined;

  /**
   * Metadata about the Kubernetes pod. For more information, see [Understanding Kubernetes Objects](https://kubernetes.io/docs/concepts/overview/working-with-objects/kubernetes-objects/) in the *Kubernetes documentation*.
   *
   * @public
   */
  metadata?: EksMetadata | undefined;

  /**
   * Indicates if the processes in a container are shared, or visible, to other containers in the same pod. For more information, see [Share Process Namespace between Containers in a Pod](https://kubernetes.io/docs/tasks/configure-pod-container/share-process-namespace/).
   *
   * @public
   */
  shareProcessNamespace?: boolean | undefined;
}

/**
 * An object that contains the properties for the Kubernetes resources of a job.
 *
 * @public
 */
export interface EksProperties {
  /**
   * The properties for the Kubernetes pod resources of a job.
   *
   * @public
   */
  podProperties?: EksPodProperties | undefined;
}

/**
 * This is an object that represents the properties of the node range for a multi-node parallel job.
 *
 * @public
 */
export interface NodeRangeProperty {
  /**
   * The range of nodes, using node index values. A range of `0:3` indicates nodes with index values of `0` through `3`. If the starting range value is omitted (`:n`), then `0` is used to start the range. If the ending range value is omitted (`n:`), then the highest possible node index is used to end the range. Your accumulative node ranges must account for all nodes (`0:n`). You can nest node ranges (for example, `0:10` and `4:5`). In this case, the `4:5` range properties override the `0:10` properties.
   *
   * @public
   */
  targetNodes: string | undefined;

  /**
   * The container details for the node range.
   *
   * @public
   */
  container?: ContainerProperties | undefined;

  /**
   * The instance types of the underlying host infrastructure of a multi-node parallel job.
   *
   * > **Note:**
   * >
   * > This parameter isn't applicable to jobs that are running on Fargate resources.
   * >
   * > In addition, this list object is currently limited to one element.
   *
   * @public
   */
  instanceTypes?: string[] | undefined;

  /**
   * This is an object that represents the properties of the node range for a multi-node parallel job.
   *
   * @public
   */
  ecsProperties?: EcsProperties | undefined;

  /**
   * This is an object that represents the properties of the node range for a multi-node parallel job.
   *
   * @public
   */
  eksProperties?: EksProperties | undefined;

  /**
   * Contains a list of consumable resources required by a job.
   *
   * @public
   */
  consumableResourceProperties?: ConsumableResourceProperties | undefined;
}

/**
 * An object that represents the node properties of a multi-node parallel job.
 *
 * > **Note:** Node properties can't be specified for Amazon EKS based job definitions.
 *
 * @public
 */
export interface NodeProperties {
  /**
   * The number of nodes that are associated with a multi-node parallel job.
   *
   * @public
   */
  numNodes: number | undefined;

  /**
   * Specifies the node index for the main node of a multi-node parallel job. This node index value must be fewer than the number of nodes.
   *
   * @public
   */
  mainNode: number | undefined;

  /**
   * A list of node ranges and their properties that are associated with a multi-node parallel job.
   *
   * @public
   */
  nodeRangeProperties: NodeRangeProperty[] | undefined;
}

/**
 * Specifies an array of up to 5 conditions to be met, and an action to take (`RETRY` or `EXIT`) if all conditions are met. If none of the `EvaluateOnExit` conditions in a `RetryStrategy` match, then the job is retried.
 *
 * @public
 */
export interface EvaluateOnExit {
  /**
   * Contains a glob pattern to match against the `StatusReason` returned for a job. The pattern can contain up to 512 characters. It can contain letters, numbers, periods (.), colons (:), and white spaces (including spaces or tabs). It can optionally end with an asterisk (*) so that only the start of the string needs to be an exact match.
   *
   * @public
   */
  onStatusReason?: string | undefined;

  /**
   * Contains a glob pattern to match against the `Reason` returned for a job. The pattern can contain up to 512 characters. It can contain letters, numbers, periods (.), colons (:), and white space (including spaces and tabs). It can optionally end with an asterisk (*) so that only the start of the string needs to be an exact match.
   *
   * @public
   */
  onReason?: string | undefined;

  /**
   * Contains a glob pattern to match against the decimal representation of the `ExitCode` returned for a job. The pattern can be up to 512 characters long. It can contain only numbers, and can end with an asterisk (*) so that only the start of the string needs to be an exact match.
   *
   * The string can contain up to 512 characters.
   *
   * @public
   */
  onExitCode?: string | undefined;

  /**
   * Specifies the action to take if all of the specified conditions (`onStatusReason`, `onReason`, and `onExitCode`) are met. The values aren't case sensitive.
   *
   * @public
   */
  action: RetryAction | undefined;
}

/**
 * The retry strategy that's associated with a job. For more information, see [Automated job retries](https://docs.aws.amazon.com/batch/latest/userguide/job_retries.html) in the *Batch User Guide*.
 *
 * @public
 */
export interface RetryStrategy {
  /**
   * The number of times to move a job to the `RUNNABLE` status. You can specify between 1 and 10 attempts. If the value of `attempts` is greater than one, the job is retried on failure the same number of attempts as the value.
   *
   * @public
   */
  attempts?: number | undefined;

  /**
   * Array of up to 5 objects that specify the conditions where jobs are retried or failed. If this parameter is specified, then the `attempts` parameter must also be specified. If none of the listed conditions match, then the job is retried.
   *
   * @public
   */
  evaluateOnExit?: EvaluateOnExit[] | undefined;
}

/**
 * An object that represents a job timeout configuration.
 *
 * @public
 */
export interface JobTimeout {
  /**
   * The job timeout time (in seconds) that's measured from the job attempt's `startedAt` timestamp. After this time passes, Batch terminates your jobs if they aren't finished. The minimum value for the timeout is 60 seconds.
   *
   * For array jobs, the timeout applies to the child jobs, not to the parent array job.
   *
   * For multi-node parallel (MNP) jobs, the timeout applies to the whole job, not to the individual nodes.
   *
   * @public
   */
  attemptDurationSeconds?: number | undefined;
}

/**
 * An object that represents an Batch job definition.
 *
 * @public
 */
export interface JobDefinition {
  /**
   * The name of the job definition.
   *
   * @public
   */
  jobDefinitionName: string | undefined;

  /**
   * The Amazon Resource Name (ARN) for the job definition.
   *
   * @public
   */
  jobDefinitionArn: string | undefined;

  /**
   * The revision of the job definition.
   *
   * @public
   */
  revision: number | undefined;

  /**
   * The status of the job definition.
   *
   * @public
   */
  status?: string | undefined;

  /**
   * The type of job definition. It's either `container` or `multinode`. If the job is run on Fargate resources, then `multinode` isn't supported. For more information about multi-node parallel jobs, see [Creating a multi-node parallel job definition](https://docs.aws.amazon.com/batch/latest/userguide/multi-node-job-def.html) in the *Batch User Guide*.
   *
   * @public
   */
  type: string | undefined;

  /**
   * The scheduling priority of the job definition. This only affects jobs in job queues with a fair-share policy. Jobs with a higher scheduling priority are scheduled before jobs with a lower scheduling priority.
   *
   * @public
   */
  schedulingPriority?: number | undefined;

  /**
   * Default parameters or parameter substitution placeholders that are set in the job definition. Parameters are specified as a key-value pair mapping. Parameters in a `SubmitJob` request override any corresponding parameter defaults from the job definition. For more information about specifying parameters, see [Job definition parameters](https://docs.aws.amazon.com/batch/latest/userguide/job_definition_parameters.html) in the *Batch User Guide*.
   *
   * @public
   */
  parameters?: Record<string, string> | undefined;

  /**
   * The retry strategy to use for failed jobs that are submitted with this job definition.
   *
   * @public
   */
  retryStrategy?: RetryStrategy | undefined;

  /**
   * An object with properties specific to Amazon ECS-based jobs. When `containerProperties` is used in the job definition, it can't be used in addition to `eksProperties`, `ecsProperties`, or `nodeProperties`.
   *
   * @public
   */
  containerProperties?: ContainerProperties | undefined;

  /**
   * The timeout time for jobs that are submitted with this job definition. After the amount of time you specify passes, Batch terminates your jobs if they aren't finished.
   *
   * @public
   */
  timeout?: JobTimeout | undefined;

  /**
   * An object with properties that are specific to multi-node parallel jobs. When `nodeProperties` is used in the job definition, it can't be used in addition to `containerProperties`, `ecsProperties`, or `eksProperties`.
   *
   * > **Note:** If the job runs on Fargate resources, don't specify `nodeProperties`. Use `containerProperties` instead.
   *
   * @public
   */
  nodeProperties?: NodeProperties | undefined;

  /**
   * The tags that are applied to the job definition.
   *
   * @public
   */
  tags?: Record<string, string> | undefined;

  /**
   * Specifies whether to propagate the tags from the job or job definition to the corresponding Amazon ECS task. If no value is specified, the tags aren't propagated. Tags can only be propagated to the tasks when the tasks are created. For tags with the same name, job tags are given priority over job definitions tags. If the total number of combined tags from the job and job definition is over 50, the job is moved to the `FAILED` state.
   *
   * @public
   */
  propagateTags?: boolean | undefined;

  /**
   * The platform capabilities required by the job definition. If no value is specified, it defaults to `EC2`. Jobs run on Fargate resources specify `FARGATE`. Jobs run on Amazon ECS Managed Instances specify `MANAGED_INSTANCES`.
   *
   * @public
   */
  platformCapabilities?: PlatformCapability[] | undefined;

  /**
   * An object that contains the properties for the Amazon ECS resources of a job.When `ecsProperties` is used in the job definition, it can't be used in addition to `containerProperties`, `eksProperties`, or `nodeProperties`.
   *
   * @public
   */
  ecsProperties?: EcsProperties | undefined;

  /**
   * An object with properties that are specific to Amazon EKS-based jobs. When `eksProperties` is used in the job definition, it can't be used in addition to `containerProperties`, `ecsProperties`, or `nodeProperties`.
   *
   * @public
   */
  eksProperties?: EksProperties | undefined;

  /**
   * The orchestration type of the compute environment. The valid values are `ECS` (default) or `EKS`.
   *
   * @public
   */
  containerOrchestrationType?: OrchestrationType | undefined;

  /**
   * Contains a list of consumable resources required by the job.
   *
   * @public
   */
  consumableResourceProperties?: ConsumableResourceProperties | undefined;
}

/**
 * @public
 */
export interface DescribeJobDefinitionsResponse {
  /**
   * The list of job definitions.
   *
   * @public
   */
  jobDefinitions?: JobDefinition[] | undefined;

  /**
   * The `nextToken` value to include in a future `DescribeJobDefinitions` request. When the results of a `DescribeJobDefinitions` request exceed `maxResults`, this value can be used to retrieve the next page of results. This value is `null` when there are no more results to return.
   *
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * Contains the parameters for `DescribeJobQueues`.
 *
 * @public
 */
export interface DescribeJobQueuesRequest {
  /**
   * A list of up to 100 queue names or full queue Amazon Resource Name (ARN) entries.
   *
   * @public
   */
  jobQueues?: string[] | undefined;

  /**
   * The maximum number of results returned by `DescribeJobQueues` in paginated output. When this parameter is used, `DescribeJobQueues` only returns `maxResults` results in a single page and a `nextToken` response element. The remaining results of the initial request can be seen by sending another `DescribeJobQueues` request with the returned `nextToken` value. This value can be between 1 and 100. If this parameter isn't used, then `DescribeJobQueues` returns up to 100 results and a `nextToken` value if applicable.
   *
   * @public
   */
  maxResults?: number | undefined;

  /**
   * The `nextToken` value returned from a previous paginated `DescribeJobQueues` request where `maxResults` was used and the results exceeded the value of that parameter. Pagination continues from the end of the previous results that returned the `nextToken` value. This value is `null` when there are no more results to return.
   *
   * > **Note:** Treat this token as an opaque identifier that's only used to retrieve the next items in a list and not for other programmatic purposes.
   *
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * An object that represents the details for an Batch job queue.
 *
 * @public
 */
export interface JobQueueDetail {
  /**
   * The job queue name.
   *
   * @public
   */
  jobQueueName: string | undefined;

  /**
   * The Amazon Resource Name (ARN) of the job queue.
   *
   * @public
   */
  jobQueueArn: string | undefined;

  /**
   * Describes the ability of the queue to accept new jobs. If the job queue state is `ENABLED`, it can accept jobs. If the job queue state is `DISABLED`, new jobs can't be added to the queue, but jobs already in the queue can finish.
   *
   * @public
   */
  state: JQState | undefined;

  /**
   * The Amazon Resource Name (ARN) of the scheduling policy. The format is `aws:Partition:batch:Region:Account:scheduling-policy/Name`. For example, `aws:aws:batch:us-west-2:123456789012:scheduling-policy/MySchedulingPolicy`.
   *
   * @public
   */
  schedulingPolicyArn?: string | undefined;

  /**
   * The status of the job queue (for example, `CREATING` or `VALID`).
   *
   * @public
   */
  status?: JQStatus | undefined;

  /**
   * A short, human-readable string to provide additional details for the current status of the job queue.
   *
   * @public
   */
  statusReason?: string | undefined;

  /**
   * The priority of the job queue. Job queue priority determines the order that job queues are evaluated when multiple queues dispatch jobs within a shared compute environment. A higher value for `priority` indicates a higher priority. Queues are evaluated in cycles, in descending order by priority. For example, a job queue with a priority value of `10` is evaluated before a queue with a priority value of `1`. All of the compute environments must be either Amazon EC2 (`EC2` or `SPOT`) or Fargate (`FARGATE` or `FARGATE_SPOT`). Amazon EC2 and Fargate compute environments can't be mixed.
   *
   * > **Note:** Job queue priority doesn't guarantee that a particular job executes before a job in a lower priority queue. Jobs added to higher priority queues during the queue evaluation cycle might not be evaluated until the next cycle. A job is dispatched from a queue only if resources are available when the queue is evaluated. If there are insufficient resources available at that time, the cycle proceeds to the next queue. This means that jobs added to higher priority queues might have to wait for jobs in multiple lower priority queues to complete before they are dispatched. You can use job dependencies to control the order for jobs from queues with different priorities. For more information, see [Job Dependencies](https://docs.aws.amazon.com/batch/latest/userguide/job_dependencies.html) in the *Batch User Guide*.
   *
   * @public
   */
  priority: number | undefined;

  /**
   * The compute environments that are attached to the job queue and the order that job placement is preferred. Compute environments are selected for job placement in ascending order.
   *
   * @public
   */
  computeEnvironmentOrder: ComputeEnvironmentOrder[] | undefined;

  /**
   * The order of the service environment associated with the job queue. Job queues with a higher priority are evaluated first when associated with the same service environment.
   *
   * @public
   */
  serviceEnvironmentOrder?: ServiceEnvironmentOrder[] | undefined;

  /**
   * The type of job queue. For service jobs that run on SageMaker Training, this value is `SAGEMAKER_TRAINING`. For regular container jobs, this value is `EKS`, `ECS`, or `ECS_FARGATE` depending on the compute environment.
   *
   * @public
   */
  jobQueueType?: JobQueueType | undefined;

  /**
   * The tags that are applied to the job queue. For more information, see [Tagging your Batch resources](https://docs.aws.amazon.com/batch/latest/userguide/using-tags.html) in *Batch User Guide*.
   *
   * @public
   */
  tags?: Record<string, string> | undefined;

  /**
   * The set of actions that Batch perform on jobs that remain at the head of the job queue in the specified state longer than specified times. Batch will perform each action after `maxTimeSeconds` has passed.
   *
   * @public
   */
  jobStateTimeLimitActions?: JobStateTimeLimitAction[] | undefined;
}

/**
 * @public
 */
export interface DescribeJobQueuesResponse {
  /**
   * The list of job queues.
   *
   * @public
   */
  jobQueues?: JobQueueDetail[] | undefined;

  /**
   * The `nextToken` value to include in a future `DescribeJobQueues` request. When the results of a `DescribeJobQueues` request exceed `maxResults`, this value can be used to retrieve the next page of results. This value is `null` when there are no more results to return.
   *
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * Contains the parameters for `DescribeJobs`.
 *
 * @public
 */
export interface DescribeJobsRequest {
  /**
   * A list of up to 100 job IDs.
   *
   * @public
   */
  jobs: string[] | undefined;
}

/**
 * An object that represents the details of a container that's part of a job.
 *
 * @public
 */
export interface ContainerDetail {
  /**
   * The image used to start the container.
   *
   * @public
   */
  image?: string | undefined;

  /**
   * The number of vCPUs reserved for the container. For jobs that run on Amazon EC2 resources, you can specify the vCPU requirement for the job using `resourceRequirements`, but you can't specify the vCPU requirements in both the `vcpus` and `resourceRequirements` object. This parameter maps to `CpuShares` in the [Create a container](https://docs.docker.com/engine/api/latest/#tag/Container/operation/ContainerCreate) section of the [Docker Remote API](https://docs.docker.com/engine/api/latest/) and the `--cpu-shares` option to [docker run](https://docs.docker.com/engine/reference/run/). Each vCPU is equivalent to 1,024 CPU shares. You must specify at least one vCPU. This is required but can be specified in several places. It must be specified for each node at least once.
   *
   * > **Note:** This parameter isn't applicable to jobs that run on Fargate resources. For jobs that run on Fargate resources, you must specify the vCPU requirement for the job using `resourceRequirements`.
   *
   * @public
   */
  vcpus?: number | undefined;

  /**
   * For jobs running on Amazon EC2 resources that didn't specify memory requirements using `resourceRequirements`, the number of MiB of memory reserved for the job. For other jobs, including all run on Fargate resources, see `resourceRequirements`.
   *
   * @public
   */
  memory?: number | undefined;

  /**
   * The command that's passed to the container.
   *
   * @public
   */
  command?: string[] | undefined;

  /**
   * The Amazon Resource Name (ARN) that's associated with the job when run.
   *
   * @public
   */
  jobRoleArn?: string | undefined;

  /**
   * The Amazon Resource Name (ARN) of the execution role that Batch can assume. For more information, see [Batch execution IAM role](https://docs.aws.amazon.com/batch/latest/userguide/execution-IAM-role.html) in the *Batch User Guide*.
   *
   * @public
   */
  executionRoleArn?: string | undefined;

  /**
   * A list of volumes that are associated with the job.
   *
   * @public
   */
  volumes?: Volume[] | undefined;

  /**
   * The environment variables to pass to a container.
   *
   * > **Note:** Environment variables cannot start with "`AWS_BATCH`". This naming convention is reserved for variables that Batch sets.
   *
   * @public
   */
  environment?: KeyValuePair[] | undefined;

  /**
   * The mount points for data volumes in your container.
   *
   * @public
   */
  mountPoints?: MountPoint[] | undefined;

  /**
   * When this parameter is true, the container is given read-only access to its root file system. This parameter maps to `ReadonlyRootfs` in the [Create a container](https://docs.docker.com/engine/api/latest/#tag/Container/operation/ContainerCreate) section of the [Docker Remote API](https://docs.docker.com/engine/api/latest/) and the `--read-only` option to [`docker run`](https://docs.docker.com/engine/reference/commandline/run/).
   *
   * @public
   */
  readonlyRootFilesystem?: boolean | undefined;

  /**
   * A list of `ulimit` values to set in the container. This parameter maps to `Ulimits` in the [Create a container](https://docs.docker.com/engine/api/latest/#tag/Container/operation/ContainerCreate) section of the [Docker Remote API](https://docs.docker.com/engine/api/latest/) and the `--ulimit` option to [docker run](https://docs.docker.com/engine/reference/run/).
   *
   * > **Note:** This parameter isn't applicable to jobs that are running on Fargate resources.
   *
   * @public
   */
  ulimits?: Ulimit[] | undefined;

  /**
   * When this parameter is true, the container is given elevated permissions on the host container instance (similar to the `root` user). The default value is `false`.
   *
   * > **Note:** This parameter isn't applicable to jobs that are running on Fargate resources and shouldn't be provided, or specified as `false`.
   *
   * @public
   */
  privileged?: boolean | undefined;

  /**
   * The user name to use inside the container. This parameter maps to `User` in the [Create a container](https://docs.docker.com/engine/api/latest/#tag/Container/operation/ContainerCreate) section of the [Docker Remote API](https://docs.docker.com/engine/api/latest/) and the `--user` option to [docker run](https://docs.docker.com/engine/reference/run/).
   *
   * @public
   */
  user?: string | undefined;

  /**
   * The exit code returned upon completion.
   *
   * @public
   */
  exitCode?: number | undefined;

  /**
   * A short (255 max characters) human-readable string to provide additional details for a running or stopped container.
   *
   * @public
   */
  reason?: string | undefined;

  /**
   * The Amazon Resource Name (ARN) of the container instance that the container is running on.
   *
   * @public
   */
  containerInstanceArn?: string | undefined;

  /**
   * The Amazon Resource Name (ARN) of the Amazon ECS task that's associated with the container job. Each container attempt receives a task ARN when they reach the `STARTING` status.
   *
   * @public
   */
  taskArn?: string | undefined;

  /**
   * The name of the Amazon CloudWatch Logs log stream that's associated with the container. The log group for Batch jobs is `/aws/batch/job`. Each container attempt receives a log stream name when they reach the `RUNNING` status.
   *
   * @public
   */
  logStreamName?: string | undefined;

  /**
   * The instance type of the underlying host infrastructure of a multi-node parallel job.
   *
   * > **Note:** This parameter isn't applicable to jobs that are running on Fargate resources.
   *
   * @public
   */
  instanceType?: string | undefined;

  /**
   * The network interfaces that are associated with the job.
   *
   * @public
   */
  networkInterfaces?: NetworkInterface[] | undefined;

  /**
   * The type and amount of resources to assign to a container. The supported resources include `GPU`, `MEMORY`, and `VCPU`.
   *
   * @public
   */
  resourceRequirements?: ResourceRequirement[] | undefined;

  /**
   * Linux-specific modifications that are applied to the container, such as details for device mappings.
   *
   * @public
   */
  linuxParameters?: LinuxParameters | undefined;

  /**
   * The log configuration specification for the container.
   *
   * This parameter maps to `LogConfig` in the [Create a container](https://docs.docker.com/engine/api/latest/#tag/Container/operation/ContainerCreate) section of the [Docker Remote API](https://docs.docker.com/engine/api/latest/) and the `--log-driver` option to [docker run](https://docs.docker.com/engine/reference/run/). By default, containers use the same logging driver that the Docker daemon uses. However, the container might use a different logging driver than the Docker daemon by specifying a log driver with this parameter in the container definition. To use a different logging driver for a container, the log system must be configured properly on the container instance. Or, alternatively, it must be configured on a different log server for remote logging options. For more information on the options for different supported log drivers, see [Configure logging drivers](https://docs.docker.com/engine/admin/logging/overview/) in the Docker documentation.
   *
   * > **Note:** Batch currently supports a subset of the logging drivers available to the Docker daemon (shown in the [LogConfiguration](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-batch-jobdefinition-containerproperties-logconfiguration.html) data type). Additional log drivers might be available in future releases of the Amazon ECS container agent.
   *
   * This parameter requires version 1.18 of the Docker Remote API or greater on your container instance. To check the Docker Remote API version on your container instance, log in to your container instance and run the following command: `sudo docker version | grep "Server API version"`
   *
   * > **Note:** The Amazon ECS container agent running on a container instance must register the logging drivers available on that instance with the `ECS_AVAILABLE_LOGGING_DRIVERS` environment variable before containers placed on that instance can use these log configuration options. For more information, see [Amazon ECS container agent configuration](https://docs.aws.amazon.com/AmazonECS/latest/developerguide/ecs-agent-config.html) in the *Amazon Elastic Container Service Developer Guide*.
   *
   * @public
   */
  logConfiguration?: LogConfiguration | undefined;

  /**
   * The secrets to pass to the container. For more information, see [Specifying sensitive data](https://docs.aws.amazon.com/batch/latest/userguide/specifying-sensitive-data.html) in the *Batch User Guide*.
   *
   * @public
   */
  secrets?: Secret[] | undefined;

  /**
   * The network configuration for jobs that are running on Fargate resources. Jobs that are running on Amazon EC2 resources must not specify this parameter.
   *
   * @public
   */
  networkConfiguration?: NetworkConfiguration | undefined;

  /**
   * The platform configuration for jobs that are running on Fargate resources. Jobs that are running on Amazon EC2 resources must not specify this parameter.
   *
   * @public
   */
  fargatePlatformConfiguration?: FargatePlatformConfiguration | undefined;

  /**
   * The amount of ephemeral storage allocated for the task. This parameter is used to expand the total amount of ephemeral storage available, beyond the default amount, for tasks hosted on Fargate.
   *
   * @public
   */
  ephemeralStorage?: EphemeralStorage | undefined;

  /**
   * An object that represents the compute environment architecture for Batch jobs on Fargate.
   *
   * @public
   */
  runtimePlatform?: RuntimePlatform | undefined;

  /**
   * The private repository authentication credentials to use.
   *
   * @public
   */
  repositoryCredentials?: RepositoryCredentials | undefined;

  /**
   * Determines whether execute command functionality is turned on for this task. If `true`, execute command functionality is turned on all the containers in the task.
   *
   * @public
   */
  enableExecuteCommand?: boolean | undefined;
}

/**
 * An object that represents an Batch job dependency.
 *
 * @public
 */
export interface JobDependency {
  /**
   * The job ID of the Batch job that's associated with this dependency.
   *
   * @public
   */
  jobId?: string | undefined;

  /**
   * The type of the job dependency.
   *
   * @public
   */
  type?: ArrayJobDependency | undefined;
}

/**
 * The details for the container in this task attempt.
 *
 * @public
 */
export interface TaskContainerDetails {
  /**
   * The command that's passed to the container. This parameter maps to `Cmd` in the [Create a container](https://docs.docker.com/engine/api/latest/#tag/Container/operation/ContainerCreate) section of the [Docker Remote API](https://docs.docker.com/engine/api/latest/) and the `COMMAND` parameter to [docker run](https://docs.docker.com/engine/reference/run/). For more information, see [https://docs.docker.com/engine/reference/builder/#cmd](https://docs.docker.com/engine/reference/builder/#cmd).
   *
   * @public
   */
  command?: string[] | undefined;

  /**
   * A list of containers that this container depends on.
   *
   * @public
   */
  dependsOn?: TaskContainerDependency[] | undefined;

  /**
   * The environment variables to pass to a container. This parameter maps to `Env` in the [Create a container](https://docs.docker.com/engine/api/latest/#tag/Container/operation/ContainerCreate) section of the [Docker Remote API](https://docs.docker.com/engine/api/latest/) and the `--env` option to [docker run](https://docs.docker.com/engine/reference/run/).
   *
   * > **Important:** We don't recommend using plaintext environment variables for sensitive information, such as credential data.
   *
   * @public
   */
  environment?: KeyValuePair[] | undefined;

  /**
   * If the essential parameter of a container is marked as `true`, and that container fails or stops for any reason, all other containers that are part of the task are stopped. If the `essential` parameter of a container is marked as false, its failure doesn't affect the rest of the containers in a task. If this parameter is omitted, a container is assumed to be essential.
   *
   * All jobs must have at least one essential container. If you have an application that's composed of multiple containers, group containers that are used for a common purpose into components, and separate the different components into multiple task definitions. For more information, see [Application Architecture](https://docs.aws.amazon.com/AmazonECS/latest/developerguide/application_architecture.html) in the *Amazon Elastic Container Service Developer Guide*.
   *
   * @public
   */
  essential?: boolean | undefined;

  /**
   * The FireLens configuration for the container. This is used to specify and configure a log router for container logs. For more information, see [Custom log](https://docs.aws.amazon.com/AmazonECS/latest/developerguide/using_firelens.html) routing in the *Amazon Elastic Container Service Developer Guide*.
   *
   * @public
   */
  firelensConfiguration?: FirelensConfiguration | undefined;

  /**
   * The image used to start a container. This string is passed directly to the Docker daemon. By default, images in the Docker Hub registry are available. Other repositories are specified with either `repository-url/image:tag` or `repository-url/image@digest`. Up to 255 letters (uppercase and lowercase), numbers, hyphens, underscores, colons, periods, forward slashes, and number signs are allowed. This parameter maps to `Image` in the [Create a container](https://docs.docker.com/engine/api/latest/#tag/Container/operation/ContainerCreate) section of the [Docker Remote API](https://docs.docker.com/engine/api/latest/) and the `IMAGE` parameter of the [*docker run*](https://docs.docker.com/engine/reference/run/#security-configuration).
   *
   * @public
   */
  image?: string | undefined;

  /**
   * Linux-specific modifications that are applied to the container, such as Linux kernel capabilities. For more information, see [KernelCapabilities](https://docs.aws.amazon.com/AmazonECS/latest/APIReference/API_KernelCapabilities.html).
   *
   * > **Note:** This parameter is not supported for Windows containers.
   *
   * @public
   */
  linuxParameters?: LinuxParameters | undefined;

  /**
   * The log configuration specification for the container.
   *
   * This parameter maps to `LogConfig` in the [Create a container](https://docs.docker.com/engine/api/latest/#tag/Container/operation/ContainerCreate) section of the [Docker Remote API](https://docs.docker.com/engine/api/latest/) and the `--log-driver` option to [docker run](https://docs.docker.com/engine/reference/run/#security-configuration).
   *
   * By default, containers use the same logging driver that the Docker daemon uses. However the container can use a different logging driver than the Docker daemon by specifying a log driver with this parameter in the container definition. To use a different logging driver for a container, the log system must be configured properly on the container instance (or on a different log server for remote logging options). For more information about the options for different supported log drivers, see [Configure logging drivers](https://docs.docker.com/engine/admin/logging/overview/) in the *Docker documentation*.
   *
   * > **Note:** Amazon ECS currently supports a subset of the logging drivers available to the Docker daemon (shown in the `LogConfiguration` data type). Additional log drivers may be available in future releases of the Amazon ECS container agent.
   *
   * This parameter requires version 1.18 of the Docker Remote API or greater on your container instance. To check the Docker Remote API version on your container instance, log in to your container instance and run the following command: sudo docker version `--format '\{\{.Server.APIVersion\}\}'`
   *
   * > **Note:** The Amazon ECS container agent running on a container instance must register the logging drivers available on that instance with the `ECS_AVAILABLE_LOGGING_DRIVERS` environment variable before containers placed on that instance can use these log configuration options. For more information, see [Amazon ECS container agent configuration](https://docs.aws.amazon.com/AmazonECS/latest/developerguide/ecs-agent-config.html) in the *Amazon Elastic Container Service Developer Guide*.
   *
   * @public
   */
  logConfiguration?: LogConfiguration | undefined;

  /**
   * The mount points for data volumes in your container.
   *
   * This parameter maps to `Volumes` in the [Create a container](https://docs.docker.com/engine/api/latest/#tag/Container/operation/ContainerCreate) section of the [Docker Remote API](https://docs.docker.com/engine/api/latest/) and the --volume option to [docker run](https://docs.docker.com/engine/reference/run/#security-configuration).
   *
   * Windows containers can mount whole directories on the same drive as `$env:ProgramData`. Windows containers can't mount directories on a different drive, and mount point can't be across drives.
   *
   * @public
   */
  mountPoints?: MountPoint[] | undefined;

  /**
   * The name of a container.
   *
   * @public
   */
  name?: string | undefined;

  /**
   * When this parameter is `true`, the container is given elevated privileges on the host container instance (similar to the `root` user). This parameter maps to `Privileged` in the [Create a container](https://docs.docker.com/engine/api/latest/#tag/Container/operation/ContainerCreate) section of the [Docker Remote API](https://docs.docker.com/engine/api/latest/) and the `--privileged` option to [docker run](https://docs.docker.com/engine/reference/run/#security-configuration).
   *
   * > **Note:** This parameter is not supported for Windows containers or tasks run on Fargate.
   *
   * @public
   */
  privileged?: boolean | undefined;

  /**
   * When this parameter is true, the container is given read-only access to its root file system. This parameter maps to `ReadonlyRootfs` in the [Create a container](https://docs.docker.com/engine/api/latest/#tag/Container/operation/ContainerCreate) section of the [Docker Remote API](https://docs.docker.com/engine/api/latest/) and the `--read-only` option to [docker run](https://docs.docker.com/engine/reference/run/#security-configuration).
   *
   * > **Note:** This parameter is not supported for Windows containers.
   *
   * @public
   */
  readonlyRootFilesystem?: boolean | undefined;

  /**
   * The private repository authentication credentials to use.
   *
   * @public
   */
  repositoryCredentials?: RepositoryCredentials | undefined;

  /**
   * The type and amount of a resource to assign to a container. The only supported resource is a GPU.
   *
   * @public
   */
  resourceRequirements?: ResourceRequirement[] | undefined;

  /**
   * The secrets to pass to the container. For more information, see [Specifying Sensitive Data](https://docs.aws.amazon.com/AmazonECS/latest/developerguide/specifying-sensitive-data.html) in the Amazon Elastic Container Service Developer Guide.
   *
   * @public
   */
  secrets?: Secret[] | undefined;

  /**
   * A list of `ulimits` to set in the container. If a `ulimit` value is specified in a task definition, it overrides the default values set by Docker. This parameter maps to `Ulimits` in the [Create a container](https://docs.docker.com/engine/api/latest/#tag/Container/operation/ContainerCreate) section of the [Docker Remote API](https://docs.docker.com/engine/api/latest/) and the `--ulimit` option to [docker run](https://docs.docker.com/engine/reference/run/#security-configuration).
   *
   * Amazon ECS tasks hosted on Fargate use the default resource limit values set by the operating system with the exception of the nofile resource limit parameter which Fargate overrides. The `nofile` resource limit sets a restriction on the number of open files that a container can use. The default `nofile` soft limit is `1024` and the default hard limit is `65535`.
   *
   * This parameter requires version 1.18 of the Docker Remote API or greater on your container instance. To check the Docker Remote API version on your container instance, log in to your container instance and run the following command: sudo docker version `--format '\{\{.Server.APIVersion\}\}'`
   *
   * > **Note:** This parameter is not supported for Windows containers.
   *
   * @public
   */
  ulimits?: Ulimit[] | undefined;

  /**
   * The user to use inside the container. This parameter maps to User in the Create a container section of the Docker Remote API and the --user option to docker run.
   *
   * > **Note:** When running tasks using the `host` network mode, don't run containers using the `root user (UID 0)`. We recommend using a non-root user for better security.
   *
   * You can specify the `user` using the following formats. If specifying a UID or GID, you must specify it as a positive integer.
   *
   * - `user`
   * - `user:group`
   * - `uid`
   * - `uid:gid`
   * - `user:gi`
   * - `uid:group`
   *
   *
   * > **Note:** This parameter is not supported for Windows containers.
   *
   * @public
   */
  user?: string | undefined;

  /**
   * Time duration (in seconds) to wait before giving up on resolving dependencies for a container. The minimum value is 2 seconds and the maximum value for Fargate is 120 seconds.
   *
   * @public
   */
  startTimeout?: number | undefined;

  /**
   * Time duration (in seconds) to wait before the container is forcefully killed if it doesn't exit normally on its own. The minimum value is 2 seconds and the maximum value for Fargate is 120 seconds. If the parameter is not specified, the default value of 30 seconds is used. For tasks that use the EC2 launch type, if the `stopTimeout` parameter isn't specified, the value set for the Amazon ECS container agent configuration variable `ECS_CONTAINER_STOP_TIMEOUT` is used. If neither the `stopTimeout` parameter nor the `ECS_CONTAINER_STOP_TIMEOUT` agent configuration variable are set, then the default value of 30 seconds is used.
   *
   * @public
   */
  stopTimeout?: number | undefined;

  /**
   * The exit code returned upon completion.
   *
   * @public
   */
  exitCode?: number | undefined;

  /**
   * A short (255 max characters) human-readable string to provide additional details for a running or stopped container.
   *
   * @public
   */
  reason?: string | undefined;

  /**
   * The name of the CloudWatch Logs log stream that's associated with the container. The log group for Batch jobs is /aws/batch/job. Each container attempt receives a log stream name when they reach the `RUNNING` status.
   *
   * @public
   */
  logStreamName?: string | undefined;

  /**
   * The network interfaces that are associated with the job.
   *
   * @public
   */
  networkInterfaces?: NetworkInterface[] | undefined;
}

/**
 * The details of a task definition that describes the container and volume definitions of an Amazon ECS task.
 *
 * @public
 */
export interface EcsTaskDetails {
  /**
   * A list of containers that are included in the `taskProperties` list.
   *
   * @public
   */
  containers?: TaskContainerDetails[] | undefined;

  /**
   * The Amazon Resource Name (ARN) of the container instance that hosts the task.
   *
   * @public
   */
  containerInstanceArn?: string | undefined;

  /**
   * The ARN of the Amazon ECS task.
   *
   * @public
   */
  taskArn?: string | undefined;

  /**
   * The amount of ephemeral storage allocated for the task.
   *
   * @public
   */
  ephemeralStorage?: EphemeralStorage | undefined;

  /**
   * The Amazon Resource Name (ARN) of the execution role that Batch can assume. For more information, see [Batch execution IAM role](https://docs.aws.amazon.com/batch/latest/userguide/execution-IAM-role.html) in the *Batch User Guide*.
   *
   * @public
   */
  executionRoleArn?: string | undefined;

  /**
   * The Fargate platform version where the jobs are running.
   *
   * @public
   */
  platformVersion?: string | undefined;

  /**
   * The IPC resource namespace to use for the containers in the task. The valid values are `host`, `task`, or `none`. For more information see `ipcMode` in [EcsTaskProperties](https://docs.aws.amazon.com/batch/latest/APIReference/API_EcsTaskProperties.html).
   *
   * @public
   */
  ipcMode?: string | undefined;

  /**
   * The Amazon Resource Name (ARN) of the IAM role that the container can assume for Amazon Web Services permissions. For more information, see [IAM roles for tasks](https://docs.aws.amazon.com/AmazonECS/latest/developerguide/task-iam-roles.html) in the *Amazon Elastic Container Service Developer Guide*.
   *
   * > **Note:** This is object is comparable to [ContainerProperties:jobRoleArn](https://docs.aws.amazon.com/batch/latest/APIReference/API_ContainerProperties.html).
   *
   * @public
   */
  taskRoleArn?: string | undefined;

  /**
   * The process namespace to use for the containers in the task. The valid values are `host`, or `task`. For more information see `pidMode` in [EcsTaskProperties](https://docs.aws.amazon.com/batch/latest/APIReference/API_EcsTaskProperties.html).
   *
   * @public
   */
  pidMode?: string | undefined;

  /**
   * The network configuration for jobs that are running on Fargate resources. Jobs that are running on Amazon EC2 resources must not specify this parameter.
   *
   * @public
   */
  networkConfiguration?: NetworkConfiguration | undefined;

  /**
   * An object that represents the compute environment architecture for Batch jobs on Fargate or Amazon ECS Managed Instances. Contains the operating system family and CPU architecture of the task.
   *
   * @public
   */
  runtimePlatform?: RuntimePlatform | undefined;

  /**
   * A list of data volumes used in a job.
   *
   * @public
   */
  volumes?: Volume[] | undefined;

  /**
   * Determines whether execute command functionality is turned on for this task. If `true`, execute command functionality is turned on all the containers in the task.
   *
   * @public
   */
  enableExecuteCommand?: boolean | undefined;

  /**
   * The network mode configured for the task. This field is populated for jobs running on Amazon ECS Managed Instances (`MANAGED_INSTANCES` platform capability) and always returns `host`.
   *
   * @public
   */
  networkMode?: string | undefined;
}

/**
 * An object that contains the details for the Amazon ECS resources of a job.
 *
 * @public
 */
export interface EcsPropertiesDetail {
  /**
   * The properties for the Amazon ECS task definition of a job.
   *
   * @public
   */
  taskProperties?: EcsTaskDetails[] | undefined;
}

/**
 * An object that represents the details for an attempt for a job attempt that an Amazon EKS container runs.
 *
 * @public
 */
export interface EksAttemptContainerDetail {
  /**
   * The name of a container.
   *
   * @public
   */
  name?: string | undefined;

  /**
   * The ID for the container.
   *
   * @public
   */
  containerID?: string | undefined;

  /**
   * The exit code returned for the job attempt. A non-zero exit code is considered failed.
   *
   * @public
   */
  exitCode?: number | undefined;

  /**
   * A short (255 max characters) human-readable string to provide additional details for a running or stopped container.
   *
   * @public
   */
  reason?: string | undefined;
}

/**
 * An object that represents the details of a job attempt for a job attempt by an Amazon EKS container.
 *
 * @public
 */
export interface EksAttemptDetail {
  /**
   * The details for the final status of the containers for this job attempt.
   *
   * @public
   */
  containers?: EksAttemptContainerDetail[] | undefined;

  /**
   * The details for the init containers.
   *
   * @public
   */
  initContainers?: EksAttemptContainerDetail[] | undefined;

  /**
   * The Amazon Resource Name (ARN) of the Amazon EKS cluster.
   *
   * @public
   */
  eksClusterArn?: string | undefined;

  /**
   * The name of the pod for this job attempt.
   *
   * @public
   */
  podName?: string | undefined;

  /**
   * The namespace of the Amazon EKS cluster that the pod exists in.
   *
   * @public
   */
  podNamespace?: string | undefined;

  /**
   * The name of the node for this job attempt.
   *
   * @public
   */
  nodeName?: string | undefined;

  /**
   * The Unix timestamp (in milliseconds) for when the attempt was started (when the attempt transitioned from the `STARTING` state to the `RUNNING` state).
   *
   * @public
   */
  startedAt?: number | undefined;

  /**
   * The Unix timestamp (in milliseconds) for when the attempt was stopped. This happens when the attempt transitioned from the `RUNNING` state to a terminal state, such as `SUCCEEDED` or `FAILED`.
   *
   * @public
   */
  stoppedAt?: number | undefined;

  /**
   * A short, human-readable string to provide additional details for the current status of the job attempt.
   *
   * @public
   */
  statusReason?: string | undefined;
}

/**
 * The details for container properties that are returned by `DescribeJobs` for jobs that use Amazon EKS.
 *
 * @public
 */
export interface EksContainerDetail {
  /**
   * The name of the container. If the name isn't specified, the default name "`Default`" is used. Each container in a pod must have a unique name.
   *
   * @public
   */
  name?: string | undefined;

  /**
   * The Docker image used to start the container.
   *
   * @public
   */
  image?: string | undefined;

  /**
   * The image pull policy for the container. Supported values are `Always`, `IfNotPresent`, and `Never`. This parameter defaults to `Always` if the `:latest` tag is specified, `IfNotPresent` otherwise. For more information, see [Updating images](https://kubernetes.io/docs/concepts/containers/images/#updating-images) in the *Kubernetes documentation*.
   *
   * @public
   */
  imagePullPolicy?: string | undefined;

  /**
   * The entrypoint for the container. For more information, see [Entrypoint](https://kubernetes.io/docs/reference/kubernetes-api/workload-resources/pod-v1/#entrypoint) in the *Kubernetes documentation*.
   *
   * @public
   */
  command?: string[] | undefined;

  /**
   * An array of arguments to the entrypoint. If this isn't specified, the `CMD` of the container image is used. This corresponds to the `args` member in the [Entrypoint](https://kubernetes.io/docs/reference/kubernetes-api/workload-resources/pod-v1/#entrypoint) portion of the [Pod](https://kubernetes.io/docs/reference/kubernetes-api/workload-resources/pod-v1/) in Kubernetes. Environment variable references are expanded using the container's environment.
   *
   * If the referenced environment variable doesn't exist, the reference in the command isn't changed. For example, if the reference is to "`$(NAME1)`" and the `NAME1` environment variable doesn't exist, the command string will remain "`$(NAME1)`". `$$` is replaced with `$` and the resulting string isn't expanded. For example, `$$(VAR_NAME)` is passed as `$(VAR_NAME)` whether or not the `VAR_NAME` environment variable exists. For more information, see [Dockerfile reference: CMD](https://docs.docker.com/engine/reference/builder/#cmd) and [Define a command and arguments for a pod](https://kubernetes.io/docs/tasks/inject-data-application/define-command-argument-container/) in the *Kubernetes documentation*.
   *
   * @public
   */
  args?: string[] | undefined;

  /**
   * The environment variables to pass to a container.
   *
   * > **Note:** Environment variables cannot start with "`AWS_BATCH`". This naming convention is reserved for variables that Batch sets.
   *
   * @public
   */
  env?: EksContainerEnvironmentVariable[] | undefined;

  /**
   * The type and amount of resources to assign to a container. The supported resources include `memory`, `cpu`, and `nvidia.com/gpu`. For more information, see [Resource management for pods and containers](https://kubernetes.io/docs/concepts/configuration/manage-resources-containers/) in the *Kubernetes documentation*.
   *
   * @public
   */
  resources?: EksContainerResourceRequirements | undefined;

  /**
   * The exit code returned for the job attempt. A non-zero exit code is considered failed.
   *
   * @public
   */
  exitCode?: number | undefined;

  /**
   * A short human-readable string to provide additional details for a running or stopped container. It can be up to 255 characters long.
   *
   * @public
   */
  reason?: string | undefined;

  /**
   * The volume mounts for the container. Batch supports `emptyDir`, `hostPath`, and `secret` volume types. For more information about volumes and volume mounts in Kubernetes, see [Volumes](https://kubernetes.io/docs/concepts/storage/volumes/) in the *Kubernetes documentation*.
   *
   * @public
   */
  volumeMounts?: EksContainerVolumeMount[] | undefined;

  /**
   * The security context for a job. For more information, see [Configure a security context for a pod or container](https://kubernetes.io/docs/tasks/configure-pod-container/security-context/) in the *Kubernetes documentation*.
   *
   * @public
   */
  securityContext?: EksContainerSecurityContext | undefined;
}

/**
 * The details for the pod.
 *
 * @public
 */
export interface EksPodPropertiesDetail {
  /**
   * The name of the service account that's used to run the pod. For more information, see [Kubernetes service accounts](https://docs.aws.amazon.com/eks/latest/userguide/service-accounts.html) and [Configure a Kubernetes service account to assume an IAM role](https://docs.aws.amazon.com/eks/latest/userguide/associate-service-account-role.html) in the *Amazon EKS User Guide* and [Configure service accounts for pods](https://kubernetes.io/docs/tasks/configure-pod-container/configure-service-account/) in the *Kubernetes documentation*.
   *
   * @public
   */
  serviceAccountName?: string | undefined;

  /**
   * Indicates if the pod uses the hosts' network IP address. The default value is `true`. Setting this to `false` enables the Kubernetes pod networking model. Most Batch workloads are egress-only and don't require the overhead of IP allocation for each pod for incoming connections. For more information, see [Host namespaces](https://kubernetes.io/docs/concepts/security/pod-security-policy/#host-namespaces) and [Pod networking](https://kubernetes.io/docs/concepts/workloads/pods/#pod-networking) in the *Kubernetes documentation*.
   *
   * @public
   */
  hostNetwork?: boolean | undefined;

  /**
   * The DNS policy for the pod. The default value is `ClusterFirst`. If the `hostNetwork` parameter is not specified, the default is `ClusterFirstWithHostNet`. `ClusterFirst` indicates that any DNS query that does not match the configured cluster domain suffix is forwarded to the upstream nameserver inherited from the node. If no value was specified for `dnsPolicy` in the [RegisterJobDefinition](https://docs.aws.amazon.com/batch/latest/APIReference/API_RegisterJobDefinition.html) API operation, then no value will be returned for `dnsPolicy` by either of [DescribeJobDefinitions](https://docs.aws.amazon.com/batch/latest/APIReference/API_DescribeJobDefinitions.html) or [DescribeJobs](https://docs.aws.amazon.com/batch/latest/APIReference/API_DescribeJobs.html) API operations. The pod spec setting will contain either `ClusterFirst` or `ClusterFirstWithHostNet`, depending on the value of the `hostNetwork` parameter. For more information, see [Pod's DNS policy](https://kubernetes.io/docs/concepts/services-networking/dns-pod-service/#pod-s-dns-policy) in the *Kubernetes documentation*.
   *
   * Valid values: `Default` | `ClusterFirst` | `ClusterFirstWithHostNet`
   *
   * @public
   */
  dnsPolicy?: string | undefined;

  /**
   * Displays the reference pointer to the Kubernetes secret resource. These secrets help to gain access to pull an images from a private registry.
   *
   * @public
   */
  imagePullSecrets?: ImagePullSecret[] | undefined;

  /**
   * The properties of the container that's used on the Amazon EKS pod.
   *
   * @public
   */
  containers?: EksContainerDetail[] | undefined;

  /**
   * The container registered with the Amazon EKS Connector agent and persists the registration information in the Kubernetes backend data store.
   *
   * @public
   */
  initContainers?: EksContainerDetail[] | undefined;

  /**
   * Specifies the volumes for a job definition using Amazon EKS resources.
   *
   * @public
   */
  volumes?: EksVolume[] | undefined;

  /**
   * The name of the pod for this job.
   *
   * @public
   */
  podName?: string | undefined;

  /**
   * The name of the node for this job.
   *
   * @public
   */
  nodeName?: string | undefined;

  /**
   * Describes and uniquely identifies Kubernetes resources. For example, the compute environment that a pod runs in or the `jobID` for a job running in the pod. For more information, see [Understanding Kubernetes Objects](https://kubernetes.io/docs/concepts/overview/working-with-objects/kubernetes-objects/) in the *Kubernetes documentation*.
   *
   * @public
   */
  metadata?: EksMetadata | undefined;

  /**
   * Indicates if the processes in a container are shared, or visible, to other containers in the same pod. For more information, see [Share Process Namespace between Containers in a Pod](https://kubernetes.io/docs/tasks/configure-pod-container/share-process-namespace/).
   *
   * @public
   */
  shareProcessNamespace?: boolean | undefined;
}

/**
 * An object that contains the details for the Kubernetes resources of a job.
 *
 * @public
 */
export interface EksPropertiesDetail {
  /**
   * The properties for the Kubernetes pod resources of a job.
   *
   * @public
   */
  podProperties?: EksPodPropertiesDetail | undefined;
}

/**
 * An object that represents the details of a multi-node parallel job node.
 *
 * @public
 */
export interface NodeDetails {
  /**
   * The node index for the node. Node index numbering starts at zero. This index is also available on the node with the `AWS_BATCH_JOB_NODE_INDEX` environment variable.
   *
   * @public
   */
  nodeIndex?: number | undefined;

  /**
   * Specifies whether the current node is the main node for a multi-node parallel job.
   *
   * @public
   */
  isMainNode?: boolean | undefined;
}

/**
 * An object that represents an Batch job.
 *
 * @public
 */
export interface JobDetail {
  /**
   * The Amazon Resource Name (ARN) of the job.
   *
   * @public
   */
  jobArn?: string | undefined;

  /**
   * The job name.
   *
   * @public
   */
  jobName: string | undefined;

  /**
   * The job ID.
   *
   * @public
   */
  jobId: string | undefined;

  /**
   * The Amazon Resource Name (ARN) of the job queue that the job is associated with.
   *
   * @public
   */
  jobQueue: string | undefined;

  /**
   * The current status for the job.
   *
   * > **Note:** If your jobs don't progress to `STARTING`, see [Jobs stuck in RUNNABLE status](https://docs.aws.amazon.com/batch/latest/userguide/troubleshooting.html#job_stuck_in_runnable) in the troubleshooting section of the *Batch User Guide*.
   *
   * @public
   */
  status: JobStatus | undefined;

  /**
   * The share identifier for the job.
   *
   * @public
   */
  shareIdentifier?: string | undefined;

  /**
   * The scheduling policy of the job definition. This only affects jobs in job queues with a fair-share policy. Jobs with a higher scheduling priority are scheduled before jobs with a lower scheduling priority.
   *
   * @public
   */
  schedulingPriority?: number | undefined;

  /**
   * A list of job attempts that are associated with this job.
   *
   * @public
   */
  attempts?: AttemptDetail[] | undefined;

  /**
   * A short, human-readable string to provide more details for the current status of the job.
   *
   * - `CAPACITY:INSUFFICIENT_INSTANCE_CAPACITY` - All compute environments have insufficient capacity to service the job.
   * - `MISCONFIGURATION:COMPUTE_ENVIRONMENT_MAX_RESOURCE` - All compute environments have a `maxVcpu` setting that is smaller than the job requirements.
   * - `MISCONFIGURATION:JOB_RESOURCE_REQUIREMENT` - All compute environments have no connected instances that meet the job requirements.
   * - `MISCONFIGURATION:SERVICE_ROLE_PERMISSIONS` - All compute environments have problems with the service role permissions.
   *
   * @public
   */
  statusReason?: string | undefined;

  /**
   * The Unix timestamp (in milliseconds) for when the job was created. For non-array jobs and parent array jobs, this is when the job entered the `SUBMITTED` state. This is specifically at the time [SubmitJob](https://docs.aws.amazon.com/batch/latest/APIReference/API_SubmitJob.html) was called. For array child jobs, this is when the child job was spawned by its parent and entered the `PENDING` state.
   *
   * @public
   */
  createdAt?: number | undefined;

  /**
   * The retry strategy to use for this job if an attempt fails.
   *
   * @public
   */
  retryStrategy?: RetryStrategy | undefined;

  /**
   * The Unix timestamp (in milliseconds) for when the job was started. More specifically, it's when the job transitioned from the `STARTING` state to the `RUNNING` state.
   *
   * @public
   */
  startedAt: number | undefined;

  /**
   * The Unix timestamp (in milliseconds) for when the job was stopped. More specifically, it's when the job transitioned from the `RUNNING` state to a terminal state, such as `SUCCEEDED` or `FAILED`.
   *
   * @public
   */
  stoppedAt?: number | undefined;

  /**
   * A list of job IDs that this job depends on.
   *
   * @public
   */
  dependsOn?: JobDependency[] | undefined;

  /**
   * The Amazon Resource Name (ARN) of the job definition that this job uses.
   *
   * @public
   */
  jobDefinition: string | undefined;

  /**
   * Additional parameters that are passed to the job that replace parameter substitution placeholders or override any corresponding parameter defaults from the job definition.
   *
   * @public
   */
  parameters?: Record<string, string> | undefined;

  /**
   * An object that represents the details for the container that's associated with the job. If the details are for a multiple-container job, this object will be empty.
   *
   * @public
   */
  container?: ContainerDetail | undefined;

  /**
   * An object that represents the details of a node that's associated with a multi-node parallel job.
   *
   * @public
   */
  nodeDetails?: NodeDetails | undefined;

  /**
   * An object that represents the node properties of a multi-node parallel job.
   *
   * > **Note:** This isn't applicable to jobs that are running on Fargate resources.
   *
   * @public
   */
  nodeProperties?: NodeProperties | undefined;

  /**
   * The array properties of the job, if it's an array job.
   *
   * @public
   */
  arrayProperties?: ArrayPropertiesDetail | undefined;

  /**
   * The timeout configuration for the job.
   *
   * @public
   */
  timeout?: JobTimeout | undefined;

  /**
   * The tags that are applied to the job.
   *
   * @public
   */
  tags?: Record<string, string> | undefined;

  /**
   * Specifies whether to propagate the tags from the job or job definition to the corresponding Amazon ECS task. If no value is specified, the tags aren't propagated. Tags can only be propagated to the tasks when the tasks are created. For tags with the same name, job tags are given priority over job definitions tags. If the total number of combined tags from the job and job definition is over 50, the job is moved to the `FAILED` state.
   *
   * @public
   */
  propagateTags?: boolean | undefined;

  /**
   * The platform capabilities required by the job definition. If no value is specified, it defaults to `EC2`. Jobs run on Fargate resources specify `FARGATE`. Jobs run on Amazon ECS Managed Instances specify `MANAGED_INSTANCES`.
   *
   * @public
   */
  platformCapabilities?: PlatformCapability[] | undefined;

  /**
   * An object with various properties that are specific to Amazon EKS based jobs.
   *
   * @public
   */
  eksProperties?: EksPropertiesDetail | undefined;

  /**
   * A list of job attempts that are associated with this job.
   *
   * @public
   */
  eksAttempts?: EksAttemptDetail[] | undefined;

  /**
   * An object with properties that are specific to Amazon ECS-based jobs.
   *
   * @public
   */
  ecsProperties?: EcsPropertiesDetail | undefined;

  /**
   * Indicates whether the job is cancelled.
   *
   * @public
   */
  isCancelled?: boolean | undefined;

  /**
   * Indicates whether the job is terminated.
   *
   * @public
   */
  isTerminated?: boolean | undefined;

  /**
   * Contains a list of consumable resources required by the job.
   *
   * @public
   */
  consumableResourceProperties?: ConsumableResourceProperties | undefined;
}

/**
 * @public
 */
export interface DescribeJobsResponse {
  /**
   * The list of jobs.
   *
   * @public
   */
  jobs?: JobDetail[] | undefined;
}

/**
 * @public
 */
export interface DescribeQuotaShareRequest {
  /**
   * The Amazon Resource Name (ARN) of the quota share.
   *
   * @public
   */
  quotaShareArn: string | undefined;
}

/**
 * @public
 */
export interface DescribeQuotaShareResponse {
  /**
   * The name of the quota share.
   *
   * @public
   */
  quotaShareName?: string | undefined;

  /**
   * The Amazon Resource Name (ARN) of the quota share.
   *
   * @public
   */
  quotaShareArn?: string | undefined;

  /**
   * The ARN of the job queue associated with the quota share.
   *
   * @public
   */
  jobQueueArn?: string | undefined;

  /**
   * A list that specifies the quantity and type of compute capacity allocated to the quota share.
   *
   * @public
   */
  capacityLimits?: QuotaShareCapacityLimit[] | undefined;

  /**
   * Specifies whether a quota share reserves, lends, or both lends and borrows idle compute capacity.
   *
   * @public
   */
  resourceSharingConfiguration?: QuotaShareResourceSharingConfiguration | undefined;

  /**
   * Specifies the preemption behavior for jobs in a quota share.
   *
   * @public
   */
  preemptionConfiguration?: QuotaSharePreemptionConfiguration | undefined;

  /**
   * The state of the quota share.
   *
   * @public
   */
  state?: QuotaShareState | undefined;

  /**
   * The current status of the quota share.
   *
   * @public
   */
  status?: QuotaShareStatus | undefined;

  /**
   * The tags applied to the quota share.
   *
   * @public
   */
  tags?: Record<string, string> | undefined;
}

/**
 * Contains the parameters for `DescribeSchedulingPolicies`.
 *
 * @public
 */
export interface DescribeSchedulingPoliciesRequest {
  /**
   * A list of up to 100 scheduling policy Amazon Resource Name (ARN) entries.
   *
   * @public
   */
  arns: string[] | undefined;
}

/**
 * An object that represents a scheduling policy.
 *
 * @public
 */
export interface SchedulingPolicyDetail {
  /**
   * The name of the fair-share scheduling policy.
   *
   * @public
   */
  name: string | undefined;

  /**
   * The Amazon Resource Name (ARN) of the scheduling policy. An example is `arn:aws:batch:us-east-1:123456789012:scheduling-policy/HighPriority`.
   *
   * @public
   */
  arn: string | undefined;

  /**
   * The quota share scheduling policy details.
   *
   * @public
   */
  quotaSharePolicy?: QuotaSharePolicy | undefined;

  /**
   * The fair-share scheduling policy details.
   *
   * @public
   */
  fairsharePolicy?: FairsharePolicy | undefined;

  /**
   * The tags that you apply to the fair-share scheduling policy to categorize and organize your resources. Each tag consists of a key and an optional value. For more information, see [Tagging Amazon Web Services resources](https://docs.aws.amazon.com/general/latest/gr/aws_tagging.html) in *Amazon Web Services General Reference*.
   *
   * @public
   */
  tags?: Record<string, string> | undefined;
}

/**
 * @public
 */
export interface DescribeSchedulingPoliciesResponse {
  /**
   * The list of scheduling policies.
   *
   * @public
   */
  schedulingPolicies?: SchedulingPolicyDetail[] | undefined;
}

/**
 * @public
 */
export interface DescribeServiceEnvironmentsRequest {
  /**
   * An array of service environment names or ARN entries.
   *
   * @public
   */
  serviceEnvironments?: string[] | undefined;

  /**
   * The maximum number of results returned by `DescribeServiceEnvironments` in paginated output. When this parameter is used, `DescribeServiceEnvironments` only returns `maxResults` results in a single page and a `nextToken` response element. The remaining results of the initial request can be seen by sending another `DescribeServiceEnvironments` request with the returned `nextToken` value. This value can be between 1 and 100. If this parameter isn't used, then `DescribeServiceEnvironments` returns up to 100 results and a `nextToken` value if applicable.
   *
   * @public
   */
  maxResults?: number | undefined;

  /**
   * The `nextToken` value returned from a previous paginated `DescribeServiceEnvironments` request where `maxResults` was used and the results exceeded the value of that parameter. Pagination continues from the end of the previous results that returned the `nextToken` value. This value is `null` when there are no more results to return.
   *
   * > **Note:** Treat this token as an opaque identifier that's only used to retrieve the next items in a list and not for other programmatic purposes.
   *
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * Detailed information about a service environment, including its configuration, state, and capacity limits.
 *
 * @public
 */
export interface ServiceEnvironmentDetail {
  /**
   * The name of the service environment.
   *
   * @public
   */
  serviceEnvironmentName: string | undefined;

  /**
   * The Amazon Resource Name (ARN) of the service environment.
   *
   * @public
   */
  serviceEnvironmentArn: string | undefined;

  /**
   * The type of service environment. For SageMaker Training jobs, this value is `SAGEMAKER_TRAINING`.
   *
   * @public
   */
  serviceEnvironmentType: ServiceEnvironmentType | undefined;

  /**
   * The state of the service environment. Valid values are `ENABLED` and `DISABLED`.
   *
   * @public
   */
  state?: ServiceEnvironmentState | undefined;

  /**
   * The current status of the service environment.
   *
   * @public
   */
  status?: ServiceEnvironmentStatus | undefined;

  /**
   * The capacity limits for the service environment. This defines the maximum resources that can be used by service jobs in this environment.
   *
   * @public
   */
  capacityLimits: CapacityLimit[] | undefined;

  /**
   * The tags associated with the service environment. Each tag consists of a key and an optional value. For more information, see [Tagging your Batch resources](https://docs.aws.amazon.com/batch/latest/userguide/using-tags.html).
   *
   * @public
   */
  tags?: Record<string, string> | undefined;
}

/**
 * @public
 */
export interface DescribeServiceEnvironmentsResponse {
  /**
   * The list of service environments that match the request.
   *
   * @public
   */
  serviceEnvironments?: ServiceEnvironmentDetail[] | undefined;

  /**
   * The `nextToken` value to include in a future `DescribeServiceEnvironments` request. When the results of a `DescribeServiceEnvironments` request exceed `maxResults`, this value can be used to retrieve the next page of results. This value is `null` when there are no more results to return.
   *
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * @public
 */
export interface DescribeServiceJobRequest {
  /**
   * The job ID for the service job to describe.
   *
   * @public
   */
  jobId: string | undefined;
}

/**
 * The Batch unique identifier.
 *
 * @public
 */
export interface ServiceResourceId {
  /**
   * The name of the resource identifier.
   *
   * @public
   */
  name: ServiceResourceIdName | undefined;

  /**
   * The value of the resource identifier.
   *
   * @public
   */
  value: string | undefined;
}

/**
 * Detailed information about an attempt to run a service job.
 *
 * @public
 */
export interface ServiceJobAttemptDetail {
  /**
   * The service resource identifier associated with the service job attempt.
   *
   * @public
   */
  serviceResourceId?: ServiceResourceId | undefined;

  /**
   * The Unix timestamp (in milliseconds) for when the service job attempt was started.
   *
   * @public
   */
  startedAt?: number | undefined;

  /**
   * The Unix timestamp (in milliseconds) for when the service job attempt stopped running.
   *
   * @public
   */
  stoppedAt?: number | undefined;

  /**
   * A string that provides additional details for the current status of the service job attempt.
   *
   * @public
   */
  statusReason?: string | undefined;
}

/**
 * The capacity usage for a service job, including the unit of measure and quantity of resources being consumed.
 *
 * @public
 */
export interface ServiceJobCapacityUsageDetail {
  /**
   * The unit of measure for the service job capacity usage. For service jobs, this is the instance type.
   *
   * @public
   */
  capacityUnit?: string | undefined;

  /**
   * The quantity of capacity being used by the service job, measured in the units specified by `capacityUnit`.
   *
   * @public
   */
  quantity?: number | undefined;
}

/**
 * Information about the latest attempt of a service job. A Service job can transition from `SCHEDULED` back to `RUNNABLE` state when they encounter capacity constraints.
 *
 * @public
 */
export interface LatestServiceJobAttempt {
  /**
   * The service resource identifier associated with the service job attempt.
   *
   * @public
   */
  serviceResourceId?: ServiceResourceId | undefined;
}

/**
 * Specifies the service job behavior when preempted.
 *
 * @public
 */
export interface ServiceJobPreemptionConfiguration {
  /**
   * The number of times a service job can be retried after it is preempted. A job will be terminated when preemption retries have been exhausted. If this field is unset, preempted jobs will be requeued an unlimited number of times.
   *
   * @public
   */
  preemptionRetriesBeforeTermination?: number | undefined;
}

/**
 * Detailed information about a preempted attempt of a service job.
 *
 * @public
 */
export interface ServiceJobPreemptedAttempt {
  /**
   * The service resource identifier associated with the service job attempt.
   *
   * @public
   */
  serviceResourceId?: ServiceResourceId | undefined;

  /**
   * The Unix timestamp (in milliseconds) for when the service job attempt was started.
   *
   * @public
   */
  startedAt?: number | undefined;

  /**
   * The Unix timestamp (in milliseconds) for when the service job attempt stopped running.
   *
   * @public
   */
  stoppedAt?: number | undefined;

  /**
   * A string that provides additional details for the current status of the service job attempt.
   *
   * @public
   */
  statusReason?: string | undefined;
}

/**
 * Summarizes the preemptions of the service job. This field appears on a service job when it has been preempted.
 *
 * @public
 */
export interface ServiceJobPreemptionSummary {
  /**
   * The total number of times the service job has been preempted.
   *
   * @public
   */
  preemptedAttemptCount?: number | undefined;

  /**
   * A list of the most recent preemption attempts for the service job.
   *
   * @public
   */
  recentPreemptedAttempts?: ServiceJobPreemptedAttempt[] | undefined;
}

/**
 * Specifies conditions for when to exit or retry a service job based on the exit status or status reason.
 *
 * @public
 */
export interface ServiceJobEvaluateOnExit {
  /**
   * The action to take if the service job exits with the specified condition. Valid values are `RETRY` and `EXIT`.
   *
   * @public
   */
  action?: ServiceJobRetryAction | undefined;

  /**
   * Contains a glob pattern to match against the StatusReason returned for a job. The pattern can contain up to 512 characters and can contain all printable characters. It can optionally end with an asterisk (*) so that only the start of the string needs to be an exact match.
   *
   * @public
   */
  onStatusReason?: string | undefined;
}

/**
 * The retry strategy for service jobs. This defines how many times to retry a failed service job and under what conditions. For more information, see [Service job retry strategies](https://docs.aws.amazon.com/batch/latest/userguide/service-job-retries.html) in the *Batch User Guide*.
 *
 * @public
 */
export interface ServiceJobRetryStrategy {
  /**
   * The number of times to move a service job to `RUNNABLE` status. You can specify between 1 and 10 attempts.
   *
   * @public
   */
  attempts: number | undefined;

  /**
   * Array of `ServiceJobEvaluateOnExit` objects that specify conditions under which the service job should be retried or failed.
   *
   * @public
   */
  evaluateOnExit?: ServiceJobEvaluateOnExit[] | undefined;
}

/**
 * The timeout configuration for service jobs.
 *
 * @public
 */
export interface ServiceJobTimeout {
  /**
   * The maximum duration in seconds that a service job attempt can run. After this time is reached, Batch terminates the service job attempt.
   *
   * @public
   */
  attemptDurationSeconds?: number | undefined;
}

/**
 * @public
 */
export interface DescribeServiceJobResponse {
  /**
   * A list of job attempts associated with the service job.
   *
   * @public
   */
  attempts?: ServiceJobAttemptDetail[] | undefined;

  /**
   * The configured capacity for the service job, such as the number of instances. The number of instances should be the same value as the `serviceRequestPayload.InstanceCount` field.
   *
   * @public
   */
  capacityUsage?: ServiceJobCapacityUsageDetail[] | undefined;

  /**
   * The Unix timestamp (in milliseconds) for when the service job was created.
   *
   * @public
   */
  createdAt?: number | undefined;

  /**
   * Indicates whether the service job has been terminated.
   *
   * @public
   */
  isTerminated?: boolean | undefined;

  /**
   * The Amazon Resource Name (ARN) of the service job.
   *
   * @public
   */
  jobArn?: string | undefined;

  /**
   * The job ID for the service job.
   *
   * @public
   */
  jobId: string | undefined;

  /**
   * The name of the service job.
   *
   * @public
   */
  jobName: string | undefined;

  /**
   * The ARN of the job queue that the service job is associated with.
   *
   * @public
   */
  jobQueue: string | undefined;

  /**
   * The latest attempt associated with the service job.
   *
   * @public
   */
  latestAttempt?: LatestServiceJobAttempt | undefined;

  /**
   * The retry strategy to use for failed service jobs that are submitted with this service job.
   *
   * @public
   */
  retryStrategy?: ServiceJobRetryStrategy | undefined;

  /**
   * The Unix timestamp (in milliseconds) for when the service job was scheduled. This represents when the service job was dispatched to SageMaker and the service job transitioned to the `SCHEDULED` state.
   *
   * @public
   */
  scheduledAt?: number | undefined;

  /**
   * The scheduling priority of the service job.
   *
   * @public
   */
  schedulingPriority?: number | undefined;

  /**
   * The request, in JSON, for the service that the `SubmitServiceJob` operation is queueing.
   *
   * @public
   */
  serviceRequestPayload?: string | undefined;

  /**
   * The type of service job. For SageMaker Training jobs, this value is `SAGEMAKER_TRAINING`.
   *
   * @public
   */
  serviceJobType: ServiceJobType | undefined;

  /**
   * The share identifier for the service job. This is used for fair-share scheduling.
   *
   * @public
   */
  shareIdentifier?: string | undefined;

  /**
   * The name of the quota share that the service job is associated with.
   *
   * @public
   */
  quotaShareName?: string | undefined;

  /**
   * Specifies the service job behavior when preempted.
   *
   * @public
   */
  preemptionConfiguration?: ServiceJobPreemptionConfiguration | undefined;

  /**
   * Summarizes the preemptions of the service job. This field appears on a service job when it has been preempted.
   *
   * @public
   */
  preemptionSummary?: ServiceJobPreemptionSummary | undefined;

  /**
   * The Unix timestamp (in milliseconds) for when the service job was started.
   *
   * @public
   */
  startedAt: number | undefined;

  /**
   * The current status of the service job.
   *
   * @public
   */
  status: ServiceJobStatus | undefined;

  /**
   * A short, human-readable string to provide more details for the current status of the service job.
   *
   * @public
   */
  statusReason?: string | undefined;

  /**
   * The Unix timestamp (in milliseconds) for when the service job stopped running.
   *
   * @public
   */
  stoppedAt?: number | undefined;

  /**
   * The tags that are associated with the service job. Each tag consists of a key and an optional value. For more information, see [Tagging your Batch resources](https://docs.aws.amazon.com/batch/latest/userguide/using-tags.html).
   *
   * @public
   */
  tags?: Record<string, string> | undefined;

  /**
   * The timeout configuration for the service job.
   *
   * @public
   */
  timeoutConfig?: ServiceJobTimeout | undefined;
}

/**
 * @public
 */
export interface GetJobQueueSnapshotRequest {
  /**
   * The job queue’s name or full queue Amazon Resource Name (ARN).
   *
   * @public
   */
  jobQueue: string | undefined;
}

/**
 * An object that represents summary details for the first 100 `RUNNABLE` jobs in a job queue.
 *
 * @public
 */
export interface FrontOfQueueJobSummary {
  /**
   * The ARN for a job in a named job queue.
   *
   * @public
   */
  jobArn?: string | undefined;

  /**
   * The Unix timestamp (in milliseconds) for when the job transitioned to its current position in the job queue.
   *
   * @public
   */
  earliestTimeAtPosition?: number | undefined;
}

/**
 * Contains a list of the first 100 `RUNNABLE` jobs associated to a single job queue.
 *
 * @public
 */
export interface FrontOfQueueDetail {
  /**
   * The Amazon Resource Names (ARNs) of the first 100 `RUNNABLE` jobs in a named job queue. For first-in-first-out (FIFO) job queues, jobs are ordered based on their submission time. For fair-share scheduling (FSS) job queues, jobs are ordered based on their job priority and share usage.
   *
   * @public
   */
  jobs?: FrontOfQueueJobSummary[] | undefined;

  /**
   * The Unix timestamp (in milliseconds) for when each of the first 100 `RUNNABLE` jobs were last updated.
   *
   * @public
   */
  lastUpdatedAt?: number | undefined;
}

/**
 * An object that represents summary details for the first `RUNNABLE` job in a quota share.
 *
 * @public
 */
export interface FrontOfQuotaShareJobSummary {
  /**
   * The ARN for a job in a named quota share.
   *
   * @public
   */
  jobArn?: string | undefined;

  /**
   * The Unix timestamp (in milliseconds) for when the job transitioned to its current position in the quota share.
   *
   * @public
   */
  earliestTimeAtPosition?: number | undefined;
}

/**
 * An object that represents the details of the first `RUNNABLE` job in each named quota share associated with a single job queue.
 *
 * @public
 */
export interface FrontOfQuotaSharesDetail {
  /**
   * Contains a list of the first `RUNNABLE` job in each named quota share.
   *
   * @public
   */
  quotaShares?: Record<string, FrontOfQuotaShareJobSummary[]> | undefined;

  /**
   * The Unix timestamp (in milliseconds) for when the first `RUNNABLE` job per quota share were all last updated.
   *
   * @public
   */
  lastUpdatedAt?: number | undefined;
}

/**
 * The capacity usage for a fairshare scheduling job queue.
 *
 * @public
 */
export interface FairshareCapacityUsage {
  /**
   * The unit of measure for the capacity usage. For compute jobs, this is `VCPU` for Amazon EC2 and `cpu` for Amazon EKS. For service jobs, this is the instance type.
   *
   * @public
   */
  capacityUnit?: string | undefined;

  /**
   * The quantity of capacity being used, measured in the units specified by `capacityUnit`.
   *
   * @public
   */
  quantity?: number | undefined;
}

/**
 * The capacity utilization for a specific share in a fairshare scheduling job queue, including the share identifier and its current usage.
 *
 * @public
 */
export interface FairshareCapacityUtilization {
  /**
   * The share identifier for the fairshare scheduling job queue.
   *
   * @public
   */
  shareIdentifier?: string | undefined;

  /**
   * The capacity usage information for this share, including the unit of measure and quantity being used. This is `VCPU` for Amazon EC2 and `cpu` for Amazon EKS.
   *
   * @public
   */
  capacityUsage?: FairshareCapacityUsage[] | undefined;
}

/**
 * The fairshare utilization for a job queue, including the number of active shares and top capacity utilization.
 *
 * @public
 */
export interface FairshareUtilizationDetail {
  /**
   * The total number of active shares in the fairshare scheduling job queue that are currently utilizing capacity.
   *
   * @public
   */
  activeShareCount?: number | undefined;

  /**
   * A list of the top 20 shares with the highest capacity utilization, ordered by usage amount.
   *
   * @public
   */
  topCapacityUtilization?: FairshareCapacityUtilization[] | undefined;
}

/**
 * The capacity usage for a quota share, including units of compute capacity and quantity of resources being used.
 *
 * @public
 */
export interface QuotaShareCapacityUsage {
  /**
   * The unit of compute capacity for the capacity usage.
   *
   * @public
   */
  capacityUnit?: string | undefined;

  /**
   * The quantity of capacity being used.
   *
   * @public
   */
  quantity?: number | undefined;
}

/**
 * The capacity utilization for a specific quota share, including the quota share name and its current usage.
 *
 * @public
 */
export interface QuotaShareCapacityUtilization {
  /**
   * The name of the quota share.
   *
   * @public
   */
  quotaShareName?: string | undefined;

  /**
   * The capacity usage information for this quota share, including the units of compute capacity and quantity being used.
   *
   * @public
   */
  capacityUsage?: QuotaShareCapacityUsage[] | undefined;
}

/**
 * An object that represents the capacity utilization details of all quota shares associated with a single job queue.
 *
 * @public
 */
export interface QuotaShareUtilizationDetail {
  /**
   * A list of the top capacity utilizations across quota shares associated with a job queue.
   *
   * @public
   */
  topCapacityUtilization?: QuotaShareCapacityUtilization[] | undefined;
}

/**
 * The configured capacity usage for a job queue snapshot, including the unit of measure and quantity of resources being used.
 *
 * @public
 */
export interface QueueSnapshotCapacityUsage {
  /**
   * The unit of measure for the capacity usage. For compute jobs, this is `VCPU` for Amazon EC2 and `cpu` for Amazon EKS. For service jobs, this is the instance type.
   *
   * @public
   */
  capacityUnit?: string | undefined;

  /**
   * The quantity of capacity being used in the queue snapshot, measured in the units specified by `capacityUnit`.
   *
   * @public
   */
  quantity?: number | undefined;
}

/**
 * The job queue utilization at a specific point in time, including total capacity usage, and quota share or fairshare utilization breakdown depending on the job queue scheduling policy.
 *
 * @public
 */
export interface QueueSnapshotUtilizationDetail {
  /**
   * The total capacity usage for the entire job queue.
   *
   * @public
   */
  totalCapacityUsage?: QueueSnapshotCapacityUsage[] | undefined;

  /**
   * The utilization information for a fairshare scheduling job queues, including active share count and top capacity utilization by share.
   *
   * @public
   */
  fairshareUtilization?: FairshareUtilizationDetail | undefined;

  /**
   * The utilization information for a job queue with a quota share scheduling policy.
   *
   * @public
   */
  quotaShareUtilization?: QuotaShareUtilizationDetail | undefined;

  /**
   * The Unix timestamp (in milliseconds) for when the queue utilization information was last updated.
   *
   * @public
   */
  lastUpdatedAt?: number | undefined;
}

/**
 * @public
 */
export interface GetJobQueueSnapshotResponse {
  /**
   * The list of the first 100 `RUNNABLE` jobs in each job queue. For first-in-first-out (FIFO) job queues, jobs are ordered based on their submission time. For job queues with an attached fair-share scheduling (FSS) or quota-share policy, jobs are ordered based on their job priority and share usage.
   *
   * @public
   */
  frontOfQueue?: FrontOfQueueDetail | undefined;

  /**
   * The first `RUNNABLE` job in each quota share. Jobs are ordered based on their job priority and share usage.
   *
   * @public
   */
  frontOfQuotaShares?: FrontOfQuotaSharesDetail | undefined;

  /**
   * The job queue's capacity utilization, including total usage and breakdown per given share.
   *
   * @public
   */
  queueUtilization?: QueueSnapshotUtilizationDetail | undefined;
}

/**
 * A filter name and value pair that's used to return a more specific list of results from a `ListJobs` or `ListJobsByConsumableResource` API operation.
 *
 * @public
 */
export interface KeyValuesPair {
  /**
   * The name of the filter. Filter names are case sensitive.
   *
   * @public
   */
  name?: string | undefined;

  /**
   * The filter values.
   *
   * @public
   */
  values?: string[] | undefined;
}

/**
 * @public
 */
export interface ListConsumableResourcesRequest {
  /**
   * The filters to apply to the consumable resource list query. If used, only those consumable resources that match the filter are listed. Filter names and values can be:
   *
   * - name: `CONSUMABLE_RESOURCE_NAME`
   *
   *   values: case-insensitive matches for the consumable resource name. If a filter value ends with an asterisk (*), it matches any consumable resource name that begins with the string before the '*'.
   *
   * @public
   */
  filters?: KeyValuesPair[] | undefined;

  /**
   * The maximum number of results returned by `ListConsumableResources` in paginated output. When this parameter is used, `ListConsumableResources` only returns `maxResults` results in a single page and a `nextToken` response element. The remaining results of the initial request can be seen by sending another `ListConsumableResources` request with the returned `nextToken` value. This value can be between 1 and 100. If this parameter isn't used, then `ListConsumableResources` returns up to 100 results and a `nextToken` value if applicable.
   *
   * @public
   */
  maxResults?: number | undefined;

  /**
   * The `nextToken` value returned from a previous paginated `ListConsumableResources` request where `maxResults` was used and the results exceeded the value of that parameter. Pagination continues from the end of the previous results that returned the `nextToken` value. This value is `null` when there are no more results to return.
   *
   * > **Note:** Treat this token as an opaque identifier that's only used to retrieve the next items in a list and not for other programmatic purposes.
   *
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * Current information about a consumable resource.
 *
 * @public
 */
export interface ConsumableResourceSummary {
  /**
   * The Amazon Resource Name (ARN) of the consumable resource.
   *
   * @public
   */
  consumableResourceArn: string | undefined;

  /**
   * The name of the consumable resource.
   *
   * @public
   */
  consumableResourceName: string | undefined;

  /**
   * The total amount of the consumable resource that is available.
   *
   * @public
   */
  totalQuantity?: number | undefined;

  /**
   * The amount of the consumable resource that is currently in use.
   *
   * @public
   */
  inUseQuantity?: number | undefined;

  /**
   * Indicates whether the resource is available to be re-used after a job completes. Can be one of:
   *
   * - `REPLENISHABLE`
   * - `NON_REPLENISHABLE`
   *
   * @public
   */
  resourceType?: string | undefined;
}

/**
 * @public
 */
export interface ListConsumableResourcesResponse {
  /**
   * A list of consumable resources that match the request.
   *
   * @public
   */
  consumableResources: ConsumableResourceSummary[] | undefined;

  /**
   * The `nextToken` value to include in a future `ListConsumableResources` request. When the results of a `ListConsumableResources` request exceed `maxResults`, this value can be used to retrieve the next page of results. This value is `null` when there are no more results to return.
   *
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * Contains the parameters for `ListJobs`.
 *
 * @public
 */
export interface ListJobsRequest {
  /**
   * The name or full Amazon Resource Name (ARN) of the job queue used to list jobs.
   *
   * @public
   */
  jobQueue?: string | undefined;

  /**
   * The job ID for an array job. Specifying an array job ID with this parameter lists all child jobs from within the specified array.
   *
   * @public
   */
  arrayJobId?: string | undefined;

  /**
   * The job ID for a multi-node parallel job. Specifying a multi-node parallel job ID with this parameter lists all nodes that are associated with the specified job.
   *
   * @public
   */
  multiNodeJobId?: string | undefined;

  /**
   * The job status used to filter jobs in the specified queue. If the `filters` parameter is specified, the `jobStatus` parameter is ignored and jobs with any status are returned. The exception is the `SHARE_IDENTIFIER` filter and `jobStatus` can be used together. If you don't specify a status, only `RUNNING` jobs are returned.
   *
   * > **Note:** Array job parents are updated to `PENDING` when any child job is updated to `RUNNABLE` and remain in `PENDING` status while child jobs are running. To view these jobs, filter by `PENDING` status until all child jobs reach a terminal state.
   *
   * @public
   */
  jobStatus?: JobStatus | undefined;

  /**
   * The maximum number of results returned by `ListJobs` in a paginated output. When this parameter is used, `ListJobs` returns up to `maxResults` results in a single page and a `nextToken` response element, if applicable. The remaining results of the initial request can be seen by sending another `ListJobs` request with the returned `nextToken` value.
   *
   * The following outlines key parameters and limitations:
   *
   * - The minimum value is 1.
   * - When `--job-status` is used, Batch returns up to 1000 values.
   * - When `--filters` is used, Batch returns up to 100 values.
   * - If neither parameter is used, then `ListJobs` returns up to 1000 results (jobs that are in the `RUNNING` status) and a `nextToken` value, if applicable.
   *
   * @public
   */
  maxResults?: number | undefined;

  /**
   * The `nextToken` value returned from a previous paginated `ListJobs` request where `maxResults` was used and the results exceeded the value of that parameter. Pagination continues from the end of the previous results that returned the `nextToken` value. This value is `null` when there are no more results to return.
   *
   * > **Note:** Treat this token as an opaque identifier that's only used to retrieve the next items in a list and not for other programmatic purposes.
   *
   * @public
   */
  nextToken?: string | undefined;

  /**
   * The filter to apply to the query. Only one filter can be used at a time. When the filter is used, `jobStatus` is ignored with the exception that `SHARE_IDENTIFIER` and `jobStatus` can be used together. The filter doesn't apply to child jobs in an array or multi-node parallel (MNP) jobs. The results are sorted by the `createdAt` field, with the most recent jobs being first.
   *
   * > **Note:** The `SHARE_IDENTIFIER` filter and the `jobStatus` field can be used together to filter results.
   *
   * - **JOB_NAME**
   *
   *   The value of the filter is a case-insensitive match for the job name. If the value ends with an asterisk (*), the filter matches any job name that begins with the string before the '*'. This corresponds to the `jobName` value. For example, `test1` matches both `Test1` and `test1`, and `test1*` matches both `test1` and `Test10`. When the `JOB_NAME` filter is used, the results are grouped by the job name and version.
   *
   * - **JOB_DEFINITION**
   *
   *   The value for the filter is the name or Amazon Resource Name (ARN) of the job definition. This corresponds to the `jobDefinition` value. The value is case sensitive. When the value for the filter is the job definition name, the results include all the jobs that used any revision of that job definition name. If the value ends with an asterisk (*), the filter matches any job definition name that begins with the string before the '*'. For example, `jd1` matches only `jd1`, and `jd1*` matches both `jd1` and `jd1A`. The version of the job definition that's used doesn't affect the sort order. When the `JOB_DEFINITION` filter is used and the ARN is used (which is in the form `arn:$\{Partition\}:batch:$\{Region\}:$\{Account\}:job-definition/$\{JobDefinitionName\}:$\{Revision\}`), the results include jobs that used the specified revision of the job definition. Asterisk (*) isn't supported when the ARN is used.
   *
   * - **BEFORE_CREATED_AT**
   *
   *   The value for the filter is the time that's before the job was created. This corresponds to the `createdAt` value. The value is a string representation of the number of milliseconds since 00:00:00 UTC (midnight) on January 1, 1970.
   *
   * - **AFTER_CREATED_AT**
   *
   *   The value for the filter is the time that's after the job was created. This corresponds to the `createdAt` value. The value is a string representation of the number of milliseconds since 00:00:00 UTC (midnight) on January 1, 1970.
   *
   * - **SHARE_IDENTIFIER**
   *
   *   The value for the filter is the fairshare scheduling share identifier.
   *
   * @public
   */
  filters?: KeyValuesPair[] | undefined;
}

/**
 * The capacity usage for a job, including the unit of measure and quantity of resources being used.
 *
 * @public
 */
export interface JobCapacityUsageSummary {
  /**
   * The unit of measure for the capacity usage. This is `VCPU` for Amazon EC2 and `cpu` for Amazon EKS.
   *
   * @public
   */
  capacityUnit?: string | undefined;

  /**
   * The quantity of capacity being used by the job, measured in the units specified by `capacityUnit`.
   *
   * @public
   */
  quantity?: number | undefined;
}

/**
 * An object that represents summary details of a container within a job.
 *
 * @public
 */
export interface ContainerSummary {
  /**
   * The exit code to return upon completion.
   *
   * @public
   */
  exitCode?: number | undefined;

  /**
   * A short (255 max characters) human-readable string to provide additional details for a running or stopped container.
   *
   * @public
   */
  reason?: string | undefined;
}

/**
 * An object that represents the properties of a node that's associated with a multi-node parallel job.
 *
 * @public
 */
export interface NodePropertiesSummary {
  /**
   * Specifies whether the current node is the main node for a multi-node parallel job.
   *
   * @public
   */
  isMainNode?: boolean | undefined;

  /**
   * The number of nodes that are associated with a multi-node parallel job.
   *
   * @public
   */
  numNodes?: number | undefined;

  /**
   * The node index for the node. Node index numbering begins at zero. This index is also available on the node with the `AWS_BATCH_JOB_NODE_INDEX` environment variable.
   *
   * @public
   */
  nodeIndex?: number | undefined;
}

/**
 * An object that represents summary details of a job.
 *
 * @public
 */
export interface JobSummary {
  /**
   * The Amazon Resource Name (ARN) of the job.
   *
   * @public
   */
  jobArn?: string | undefined;

  /**
   * The job ID.
   *
   * @public
   */
  jobId: string | undefined;

  /**
   * The job name.
   *
   * @public
   */
  jobName: string | undefined;

  /**
   * The configured capacity usage information for this job, including the unit of measure and quantity of resources.
   *
   * @public
   */
  capacityUsage?: JobCapacityUsageSummary[] | undefined;

  /**
   * The Unix timestamp (in milliseconds) for when the job was created. For non-array jobs and parent array jobs, this is when the job entered the `SUBMITTED` state (at the time [SubmitJob](https://docs.aws.amazon.com/batch/latest/APIReference/API_SubmitJob.html) was called). For array child jobs, this is when the child job was spawned by its parent and entered the `PENDING` state.
   *
   * @public
   */
  createdAt?: number | undefined;

  /**
   * The Unix timestamp (in milliseconds) for when the job was scheduled for execution. For more information on job statues, see [Service job status](https://docs.aws.amazon.com/batch/latest/userguide/service-job-status.html) in the *Batch User Guide*.
   *
   * @public
   */
  scheduledAt?: number | undefined;

  /**
   * The share identifier for the fairshare scheduling queue that this job is associated with.
   *
   * @public
   */
  shareIdentifier?: string | undefined;

  /**
   * The current status for the job.
   *
   * @public
   */
  status?: JobStatus | undefined;

  /**
   * A short, human-readable string to provide more details for the current status of the job.
   *
   * @public
   */
  statusReason?: string | undefined;

  /**
   * The Unix timestamp for when the job was started. More specifically, it's when the job transitioned from the `STARTING` state to the `RUNNING` state.
   *
   * @public
   */
  startedAt?: number | undefined;

  /**
   * The Unix timestamp for when the job was stopped. More specifically, it's when the job transitioned from the `RUNNING` state to a terminal state, such as `SUCCEEDED` or `FAILED`.
   *
   * @public
   */
  stoppedAt?: number | undefined;

  /**
   * An object that represents the details of the container that's associated with the job.
   *
   * @public
   */
  container?: ContainerSummary | undefined;

  /**
   * The array properties of the job, if it's an array job.
   *
   * @public
   */
  arrayProperties?: ArrayPropertiesSummary | undefined;

  /**
   * The node properties for a single node in a job summary list.
   *
   * > **Note:** This isn't applicable to jobs that are running on Fargate resources.
   *
   * @public
   */
  nodeProperties?: NodePropertiesSummary | undefined;

  /**
   * The Amazon Resource Name (ARN) of the job definition.
   *
   * @public
   */
  jobDefinition?: string | undefined;

  /**
   * Indicates whether a cancellation request has been accepted for the job. This field is only present when the value is `true`.
   *
   * @public
   */
  isCancelled?: boolean | undefined;

  /**
   * Indicates whether a termination request has been accepted for the job. This field is only present when the value is `true`.
   *
   * @public
   */
  isTerminated?: boolean | undefined;
}

/**
 * @public
 */
export interface ListJobsResponse {
  /**
   * A list of job summaries that match the request.
   *
   * @public
   */
  jobSummaryList: JobSummary[] | undefined;

  /**
   * The `nextToken` value to include in a future `ListJobs` request. When the results of a `ListJobs` request exceed `maxResults`, this value can be used to retrieve the next page of results. This value is `null` when there are no more results to return.
   *
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListJobsByConsumableResourceRequest {
  /**
   * The name or ARN of the consumable resource.
   *
   * @public
   */
  consumableResource: string | undefined;

  /**
   * The filters to apply to the job list query. If used, only those jobs requiring the specified consumable resource (`consumableResource`) and that match the value of the filters are listed. The filter names and values can be:
   *
   * - name: `JOB_STATUS`
   *
   *   values: `SUBMITTED | PENDING | RUNNABLE | STARTING | RUNNING | SUCCEEDED | FAILED`
   * - name: `JOB_NAME`
   *
   *   The values are case-insensitive matches for the job name. If a filter value ends with an asterisk (*), it matches any job name that begins with the string before the '*'.
   *
   * @public
   */
  filters?: KeyValuesPair[] | undefined;

  /**
   * The maximum number of results returned by `ListJobsByConsumableResource` in paginated output. When this parameter is used, `ListJobsByConsumableResource` only returns `maxResults` results in a single page and a `nextToken` response element. The remaining results of the initial request can be seen by sending another `ListJobsByConsumableResource` request with the returned `nextToken` value. This value can be between 1 and 100. If this parameter isn't used, then `ListJobsByConsumableResource` returns up to 100 results and a `nextToken` value if applicable.
   *
   * @public
   */
  maxResults?: number | undefined;

  /**
   * The `nextToken` value returned from a previous paginated `ListJobsByConsumableResource` request where `maxResults` was used and the results exceeded the value of that parameter. Pagination continues from the end of the previous results that returned the `nextToken` value. This value is `null` when there are no more results to return.
   *
   * > **Note:** Treat this token as an opaque identifier that's only used to retrieve the next items in a list and not for other programmatic purposes.
   *
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * Current information about a consumable resource required by a job.
 *
 * @public
 */
export interface ListJobsByConsumableResourceSummary {
  /**
   * The Amazon Resource Name (ARN) of the job.
   *
   * @public
   */
  jobArn: string | undefined;

  /**
   * The Amazon Resource Name (ARN) of the job queue.
   *
   * @public
   */
  jobQueueArn: string | undefined;

  /**
   * The name of the job.
   *
   * @public
   */
  jobName: string | undefined;

  /**
   * The Amazon Resource Name (ARN) of the job definition.
   *
   * @public
   */
  jobDefinitionArn?: string | undefined;

  /**
   * The fair-share scheduling identifier for the job.
   *
   * @public
   */
  shareIdentifier?: string | undefined;

  /**
   * The status of the job. Can be one of:
   *
   * - `SUBMITTED`
   * - `PENDING`
   * - `RUNNABLE`
   * - `STARTING`
   * - `RUNNING`
   * - `SUCCEEDED`
   * - `FAILED`
   *
   * @public
   */
  jobStatus: string | undefined;

  /**
   * The total amount of the consumable resource that is available.
   *
   * @public
   */
  quantity: number | undefined;

  /**
   * A short, human-readable string to provide more details for the current status of the job.
   *
   * @public
   */
  statusReason?: string | undefined;

  /**
   * The Unix timestamp for when the job was started. More specifically, it's when the job transitioned from the `STARTING` state to the `RUNNING` state.
   *
   * @public
   */
  startedAt?: number | undefined;

  /**
   * The Unix timestamp (in milliseconds) for when the consumable resource was created.
   *
   * @public
   */
  createdAt: number | undefined;

  /**
   * Contains a list of consumable resources required by the job.
   *
   * @public
   */
  consumableResourceProperties: ConsumableResourceProperties | undefined;
}

/**
 * @public
 */
export interface ListJobsByConsumableResourceResponse {
  /**
   * The list of jobs that require the specified consumable resources.
   *
   * @public
   */
  jobs: ListJobsByConsumableResourceSummary[] | undefined;

  /**
   * The `nextToken` value to include in a future `ListJobsByConsumableResource` request. When the results of a `ListJobsByConsumableResource` request exceed `maxResults`, this value can be used to retrieve the next page of results. This value is `null` when there are no more results to return.
   *
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListQuotaSharesRequest {
  /**
   * The name or full Amazon Resource Name (ARN) of the job queue used to list quota shares.
   *
   * @public
   */
  jobQueue: string | undefined;

  /**
   * The maximum number of results returned by `ListQuotaShares` in paginated output. When this parameter is used, `ListQuotaShares` only returns `maxResults` results in a single page and a `nextToken` response element. You can see the remaining results of the initial request by sending another `ListQuotaShares` request with the returned `nextToken` value. This value can be between 1 and 100. If this parameter isn't used, `ListQuotaShares` returns up to 100 results and a `nextToken` value if applicable.
   *
   * @public
   */
  maxResults?: number | undefined;

  /**
   * The `nextToken` value that's returned from a previous paginated `ListQuotaShares` request where `maxResults` was used and the results exceeded the value of that parameter. Pagination continues from the end of the previous results that returned the `nextToken` value. This value is `null` when there are no more results to return.
   *
   * > **Note:** Treat this token as an opaque identifier that's only used to retrieve the next items in a list and not for other programmatic purposes.
   *
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * Detailed information about a quota share, including its configuration, state, and capacity limits.
 *
 * @public
 */
export interface QuotaShareDetail {
  /**
   * The name of the quota share.
   *
   * @public
   */
  quotaShareName?: string | undefined;

  /**
   * The Amazon Resource Name (ARN) of the quota share.
   *
   * @public
   */
  quotaShareArn?: string | undefined;

  /**
   * The Amazon Resource Name (ARN) of the job queue associated with the quota share.
   *
   * @public
   */
  jobQueueArn?: string | undefined;

  /**
   * A list that specifies the quantity and type of compute capacity allocated to the quota share.
   *
   * @public
   */
  capacityLimits?: QuotaShareCapacityLimit[] | undefined;

  /**
   * Specifies whether a quota share reserves, lends, or both lends and borrows idle compute capacity.
   *
   * @public
   */
  resourceSharingConfiguration?: QuotaShareResourceSharingConfiguration | undefined;

  /**
   * Specifies the preemption behavior for jobs in a quota share.
   *
   * @public
   */
  preemptionConfiguration?: QuotaSharePreemptionConfiguration | undefined;

  /**
   * The state of the quota share.
   *
   * @public
   */
  state?: QuotaShareState | undefined;

  /**
   * The current status of the quota share.
   *
   * @public
   */
  status?: QuotaShareStatus | undefined;
}

/**
 * @public
 */
export interface ListQuotaSharesResponse {
  /**
   * A list of quota shares that match the request.
   *
   * @public
   */
  quotaShares?: QuotaShareDetail[] | undefined;

  /**
   * The `nextToken` value to include in a future `ListQuotaShares` request. When the results of a `ListQuotaShares` request exceed `maxResults`, this value can be used to retrieve the next page of results. This value is `null` when there are no more results to return.
   *
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * Contains the parameters for `ListSchedulingPolicies`.
 *
 * @public
 */
export interface ListSchedulingPoliciesRequest {
  /**
   * The maximum number of results that's returned by `ListSchedulingPolicies` in paginated output. When this parameter is used, `ListSchedulingPolicies` only returns `maxResults` results in a single page and a `nextToken` response element. You can see the remaining results of the initial request by sending another `ListSchedulingPolicies` request with the returned `nextToken` value. This value can be between 1 and 100. If this parameter isn't used, `ListSchedulingPolicies` returns up to 100 results and a `nextToken` value if applicable.
   *
   * @public
   */
  maxResults?: number | undefined;

  /**
   * The `nextToken` value that's returned from a previous paginated `ListSchedulingPolicies` request where `maxResults` was used and the results exceeded the value of that parameter. Pagination continues from the end of the previous results that returned the `nextToken` value. This value is `null` when there are no more results to return.
   *
   * > **Note:** Treat this token as an opaque identifier that's only used to retrieve the next items in a list and not for other programmatic purposes.
   *
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * An object that contains the details of a scheduling policy that's returned in a `ListSchedulingPolicy` action.
 *
 * @public
 */
export interface SchedulingPolicyListingDetail {
  /**
   * Amazon Resource Name (ARN) of the scheduling policy.
   *
   * @public
   */
  arn: string | undefined;
}

/**
 * @public
 */
export interface ListSchedulingPoliciesResponse {
  /**
   * A list of scheduling policies that match the request.
   *
   * @public
   */
  schedulingPolicies?: SchedulingPolicyListingDetail[] | undefined;

  /**
   * The `nextToken` value to include in a future `ListSchedulingPolicies` request. When the results of a `ListSchedulingPolicies` request exceed `maxResults`, this value can be used to retrieve the next page of results. This value is `null` when there are no more results to return.
   *
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListServiceJobsRequest {
  /**
   * The name or ARN of the job queue with which to list service jobs.
   *
   * @public
   */
  jobQueue?: string | undefined;

  /**
   * The job status used to filter service jobs in the specified queue. If the `filters` parameter is specified, the `jobStatus` parameter is ignored and jobs with any status are returned. The exceptions are the `SHARE_IDENTIFIER` filter and `QUOTA_SHARE_NAME` filter, which can be used with `jobStatus`. If you don't specify a status, only `RUNNING` jobs are returned.
   *
   * > **Note:** The `SHARE_IDENTIFIER` filter or `QUOTA_SHARE_NAME` filter can be used with the `jobStatus` field to filter results.
   *
   * @public
   */
  jobStatus?: ServiceJobStatus | undefined;

  /**
   * The maximum number of results returned by `ListServiceJobs` in paginated output. When this parameter is used, `ListServiceJobs` only returns `maxResults` results in a single page and a `nextToken` response element. The remaining results of the initial request can be seen by sending another `ListServiceJobs` request with the returned `nextToken` value. This value can be between 1 and 100. If this parameter isn't used, then `ListServiceJobs` returns up to 100 results and a `nextToken` value if applicable.
   *
   * @public
   */
  maxResults?: number | undefined;

  /**
   * The `nextToken` value returned from a previous paginated `ListServiceJobs` request where `maxResults` was used and the results exceeded the value of that parameter. Pagination continues from the end of the previous results that returned the `nextToken` value. This value is `null` when there are no more results to return.
   *
   * > **Note:** Treat this token as an opaque identifier that's only used to retrieve the next items in a list and not for other programmatic purposes.
   *
   * @public
   */
  nextToken?: string | undefined;

  /**
   * The filter to apply to the query. Only one filter can be used at a time. When the filter is used, `jobStatus` is ignored with the exception that `SHARE_IDENTIFIER` or `QUOTA_SHARE_NAME` and `jobStatus` can be used together. The results are sorted by the `createdAt` field, with the most recent jobs being first.
   *
   * > **Note:** The `SHARE_IDENTIFIER` or `QUOTA_SHARE_NAME` filter and the `jobStatus` field can be used together to filter results.
   *
   * - **JOB_NAME**
   *
   *   The value of the filter is a case-insensitive match for the job name. If the value ends with an asterisk (*), the filter matches any job name that begins with the string before the '*'. This corresponds to the `jobName` value. For example, `test1` matches both `Test1` and `test1`, and `test1*` matches both `test1` and `Test10`. When the `JOB_NAME` filter is used, the results are grouped by the job name and version.
   *
   * - **BEFORE_CREATED_AT**
   *
   *   The value for the filter is the time that's before the job was created. This corresponds to the `createdAt` value. The value is a string representation of the number of milliseconds since 00:00:00 UTC (midnight) on January 1, 1970.
   *
   * - **AFTER_CREATED_AT**
   *
   *   The value for the filter is the time that's after the job was created. This corresponds to the `createdAt` value. The value is a string representation of the number of milliseconds since 00:00:00 UTC (midnight) on January 1, 1970.
   *
   * - **SHARE_IDENTIFIER**
   *
   *   The value for the filter is the fairshare scheduling share identifier.
   *
   * - **QUOTA_SHARE_NAME**
   *
   *   The value for the filter is the quota management share name.
   *
   * @public
   */
  filters?: KeyValuesPair[] | undefined;
}

/**
 * The capacity usage for a service job, including the unit of measure and quantity of resources being used.
 *
 * @public
 */
export interface ServiceJobCapacityUsageSummary {
  /**
   * The unit of measure for the service job capacity usage. For service jobs, this is the instance type.
   *
   * @public
   */
  capacityUnit?: string | undefined;

  /**
   * The quantity of capacity being used by the service job, measured in the units specified by `capacityUnit`.
   *
   * @public
   */
  quantity?: number | undefined;
}

/**
 * Summary information about a service job.
 *
 * @public
 */
export interface ServiceJobSummary {
  /**
   * Information about the latest attempt for the service job.
   *
   * @public
   */
  latestAttempt?: LatestServiceJobAttempt | undefined;

  /**
   * The capacity usage information for this service job, including the unit of measure and quantity of resources being used.
   *
   * @public
   */
  capacityUsage?: ServiceJobCapacityUsageSummary[] | undefined;

  /**
   * The Unix timestamp (in milliseconds) for when the service job was created.
   *
   * @public
   */
  createdAt?: number | undefined;

  /**
   * The Amazon Resource Name (ARN) of the service job.
   *
   * @public
   */
  jobArn?: string | undefined;

  /**
   * The job ID for the service job.
   *
   * @public
   */
  jobId: string | undefined;

  /**
   * The name of the service job.
   *
   * @public
   */
  jobName: string | undefined;

  /**
   * The Unix timestamp (in milliseconds) for when the service job was scheduled for execution.
   *
   * @public
   */
  scheduledAt?: number | undefined;

  /**
   * The type of service job. For SageMaker Training jobs, this value is `SAGEMAKER_TRAINING`.
   *
   * @public
   */
  serviceJobType: ServiceJobType | undefined;

  /**
   * The share identifier for the job.
   *
   * @public
   */
  shareIdentifier?: string | undefined;

  /**
   * The quota share for the service job.
   *
   * @public
   */
  quotaShareName?: string | undefined;

  /**
   * The current status of the service job.
   *
   * @public
   */
  status?: ServiceJobStatus | undefined;

  /**
   * A short string to provide more details on the current status of the service job.
   *
   * @public
   */
  statusReason?: string | undefined;

  /**
   * The Unix timestamp (in milliseconds) for when the service job was started.
   *
   * @public
   */
  startedAt?: number | undefined;

  /**
   * The Unix timestamp (in milliseconds) for when the service job stopped running.
   *
   * @public
   */
  stoppedAt?: number | undefined;

  /**
   * Indicates whether a termination request has been accepted for the service job. This field is only present when the value is `true`.
   *
   * @public
   */
  isTerminated?: boolean | undefined;
}

/**
 * @public
 */
export interface ListServiceJobsResponse {
  /**
   * A list of service job summaries.
   *
   * @public
   */
  jobSummaryList: ServiceJobSummary[] | undefined;

  /**
   * The `nextToken` value to include in a future `ListServiceJobs` request. When the results of a `ListServiceJobs` request exceed `maxResults`, this value can be used to retrieve the next page of results. This value is `null` when there are no more results to return.
   *
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * Contains the parameters for `ListTagsForResource`.
 *
 * @public
 */
export interface ListTagsForResourceRequest {
  /**
   * The Amazon Resource Name (ARN) that identifies the resource that tags are listed for. Batch resources that support tags are compute environments, jobs, job definitions, job queues, and scheduling policies. ARNs for child jobs of array and multi-node parallel (MNP) jobs aren't supported.
   *
   * @public
   */
  resourceArn: string | undefined;
}

/**
 * @public
 */
export interface ListTagsForResourceResponse {
  /**
   * The tags for the resource.
   *
   * @public
   */
  tags?: Record<string, string> | undefined;
}

/**
 * Contains the parameters for `RegisterJobDefinition`.
 *
 * @public
 */
export interface RegisterJobDefinitionRequest {
  /**
   * The name of the job definition to register. It can be up to 128 letters long. It can contain uppercase and lowercase letters, numbers, hyphens (-), and underscores (_).
   *
   * @public
   */
  jobDefinitionName: string | undefined;

  /**
   * The type of job definition. For more information about multi-node parallel jobs, see [Creating a multi-node parallel job definition](https://docs.aws.amazon.com/batch/latest/userguide/multi-node-job-def.html) in the *Batch User Guide*.
   *
   * - If the value is `container`, then one of the following is required: `containerProperties`, `ecsProperties`, or `eksProperties`.
   * - If the value is `multinode`, then `nodeProperties` is required.
   *
   * > **Note:** If the job is run on Fargate resources, then `multinode` isn't supported.
   *
   * @public
   */
  type: JobDefinitionType | undefined;

  /**
   * Default parameter substitution placeholders to set in the job definition. Parameters are specified as a key-value pair mapping. Parameters in a `SubmitJob` request override any corresponding parameter defaults from the job definition.
   *
   * @public
   */
  parameters?: Record<string, string> | undefined;

  /**
   * The scheduling priority for jobs that are submitted with this job definition. This only affects jobs in job queues with a fair-share policy. Jobs with a higher scheduling priority are scheduled before jobs with a lower scheduling priority.
   *
   * The minimum supported value is 0 and the maximum supported value is 9999.
   *
   * @public
   */
  schedulingPriority?: number | undefined;

  /**
   * An object with properties specific to Amazon ECS-based single-node container-based jobs. If the job definition's `type` parameter is `container`, then you must specify either `containerProperties` or `nodeProperties`. This must not be specified for Amazon EKS-based job definitions.
   *
   * > **Note:** If the job runs on Fargate resources, then you must not specify `nodeProperties`; use only `containerProperties`.
   *
   * @public
   */
  containerProperties?: ContainerProperties | undefined;

  /**
   * An object with properties specific to multi-node parallel jobs. If you specify node properties for a job, it becomes a multi-node parallel job. For more information, see [Multi-node Parallel Jobs](https://docs.aws.amazon.com/batch/latest/userguide/multi-node-parallel-jobs.html) in the *Batch User Guide*.
   *
   * > **Note:** If the job runs on Fargate resources, then you must not specify `nodeProperties`; use `containerProperties` instead.
   *
   * > **Note:** If the job runs on Amazon EKS resources, then you must not specify `nodeProperties`.
   *
   * @public
   */
  nodeProperties?: NodeProperties | undefined;

  /**
   * The retry strategy to use for failed jobs that are submitted with this job definition. Any retry strategy that's specified during a SubmitJob operation overrides the retry strategy defined here. If a job is terminated due to a timeout, it isn't retried.
   *
   * @public
   */
  retryStrategy?: RetryStrategy | undefined;

  /**
   * Specifies whether to propagate the tags from the job or job definition to the corresponding Amazon ECS task. If no value is specified, the tags are not propagated. Tags can only be propagated to the tasks during task creation. For tags with the same name, job tags are given priority over job definitions tags. If the total number of combined tags from the job and job definition is over 50, the job is moved to the `FAILED` state.
   *
   * > **Note:** If the job runs on Amazon EKS resources, then you must not specify `propagateTags`.
   *
   * @public
   */
  propagateTags?: boolean | undefined;

  /**
   * The timeout configuration for jobs that are submitted with this job definition, after which Batch terminates your jobs if they have not finished. If a job is terminated due to a timeout, it isn't retried. The minimum value for the timeout is 60 seconds. Any timeout configuration that's specified during a SubmitJob operation overrides the timeout configuration defined here. For more information, see [Job Timeouts](https://docs.aws.amazon.com/batch/latest/userguide/job_timeouts.html) in the *Batch User Guide*.
   *
   * @public
   */
  timeout?: JobTimeout | undefined;

  /**
   * The tags that you apply to the job definition to help you categorize and organize your resources. Each tag consists of a key and an optional value. For more information, see [Tagging Amazon Web Services Resources](https://docs.aws.amazon.com/batch/latest/userguide/using-tags.html) in *Batch User Guide*.
   *
   * @public
   */
  tags?: Record<string, string> | undefined;

  /**
   * The platform capabilities required by the job definition. If no value is specified, it defaults to `EC2`. To run the job on Fargate resources, specify `FARGATE`. To run the job on Amazon ECS Managed Instances, specify `MANAGED_INSTANCES`.
   *
   * Jobs with the `MANAGED_INSTANCES` platform capability must use `ecsProperties` (not `containerProperties`) and do not support multi-node parallel jobs.
   *
   * > **Note:** If the job runs on Amazon EKS resources, then you must not specify `platformCapabilities`.
   *
   * @public
   */
  platformCapabilities?: PlatformCapability[] | undefined;

  /**
   * An object with properties that are specific to Amazon EKS-based jobs. This must not be specified for Amazon ECS based job definitions.
   *
   * @public
   */
  eksProperties?: EksProperties | undefined;

  /**
   * An object with properties that are specific to Amazon ECS-based jobs. This must not be specified for Amazon EKS-based job definitions.
   *
   * @public
   */
  ecsProperties?: EcsProperties | undefined;

  /**
   * Contains a list of consumable resources required by the job.
   *
   * @public
   */
  consumableResourceProperties?: ConsumableResourceProperties | undefined;
}

/**
 * @public
 */
export interface RegisterJobDefinitionResponse {
  /**
   * The name of the job definition.
   *
   * @public
   */
  jobDefinitionName: string | undefined;

  /**
   * The Amazon Resource Name (ARN) of the job definition.
   *
   * @public
   */
  jobDefinitionArn: string | undefined;

  /**
   * The revision of the job definition.
   *
   * @public
   */
  revision: number | undefined;
}

/**
 * The overrides that should be sent to a container.
 *
 * For information about using Batch overrides when you connect event sources to targets, see [BatchContainerOverrides](https://docs.aws.amazon.com/eventbridge/latest/pipes-reference/API_BatchContainerOverrides.html).
 *
 * @public
 */
export interface ContainerOverrides {
  /**
   * This parameter is deprecated, use `resourceRequirements` to override the `vcpus` parameter that's set in the job definition. It's not supported for jobs running on Fargate resources. For jobs that run on Amazon EC2 resources, it overrides the `vcpus` parameter set in the job definition, but doesn't override any vCPU requirement specified in the `resourceRequirements` structure in the job definition. To override vCPU requirements that are specified in the `resourceRequirements` structure in the job definition, `resourceRequirements` must be specified in the `SubmitJob` request, with `type` set to `VCPU` and `value` set to the new value. For more information, see [Can't override job definition resource requirements](https://docs.aws.amazon.com/batch/latest/userguide/troubleshooting.html#override-resource-requirements) in the *Batch User Guide*.
   *
   * @deprecated This field is deprecated, use resourceRequirements instead.
   * @public
   */
  vcpus?: number | undefined;

  /**
   * This parameter is deprecated, use `resourceRequirements` to override the memory requirements specified in the job definition. It's not supported for jobs running on Fargate resources. For jobs that run on Amazon EC2 resources, it overrides the `memory` parameter set in the job definition, but doesn't override any memory requirement that's specified in the `resourceRequirements` structure in the job definition. To override memory requirements that are specified in the `resourceRequirements` structure in the job definition, `resourceRequirements` must be specified in the `SubmitJob` request, with `type` set to `MEMORY` and `value` set to the new value. For more information, see [Can't override job definition resource requirements](https://docs.aws.amazon.com/batch/latest/userguide/troubleshooting.html#override-resource-requirements) in the *Batch User Guide*.
   *
   * @deprecated This field is deprecated, use resourceRequirements instead.
   * @public
   */
  memory?: number | undefined;

  /**
   * The command to send to the container that overrides the default command from the Docker image or the job definition.
   *
   * > **Note:** This parameter can't contain an empty string.
   *
   * @public
   */
  command?: string[] | undefined;

  /**
   * The instance type to use for a multi-node parallel job.
   *
   * > **Note:** This parameter isn't applicable to single-node container jobs or jobs that run on Fargate resources, and shouldn't be provided.
   *
   * @public
   */
  instanceType?: string | undefined;

  /**
   * The environment variables to send to the container. You can add new environment variables, which are added to the container at launch, or you can override the existing environment variables from the Docker image or the job definition.
   *
   * > **Note:** Environment variables cannot start with "`AWS_BATCH`". This naming convention is reserved for variables that Batch sets.
   *
   * @public
   */
  environment?: KeyValuePair[] | undefined;

  /**
   * The type and amount of resources to assign to a container. This overrides the settings in the job definition. The supported resources include `GPU`, `MEMORY`, and `VCPU`.
   *
   * @public
   */
  resourceRequirements?: ResourceRequirement[] | undefined;
}

/**
 * The overrides that should be sent to a container.
 *
 * For information about using Batch overrides when you connect event sources to targets, see [BatchContainerOverrides](https://docs.aws.amazon.com/eventbridge/latest/pipes-reference/API_BatchContainerOverrides.html).
 *
 * @public
 */
export interface TaskContainerOverrides {
  /**
   * The command to send to the container that overrides the default command from the Docker image or the job definition.
   *
   * > **Note:** This parameter can't contain an empty string.
   *
   * @public
   */
  command?: string[] | undefined;

  /**
   * The environment variables to send to the container. You can add new environment variables, which are added to the container at launch, or you can override the existing environment variables from the Docker image or the job definition.
   *
   * > **Note:** Environment variables cannot start with `AWS_BATCH`. This naming convention is reserved for variables that Batch sets.
   *
   * @public
   */
  environment?: KeyValuePair[] | undefined;

  /**
   * A pointer to the container that you want to override. The container's name provides a unique identifier for the container being used.
   *
   * @public
   */
  name?: string | undefined;

  /**
   * The type and amount of resources to assign to a container. This overrides the settings in the job definition. The supported resources include `GPU`, `MEMORY`, and `VCPU`.
   *
   * @public
   */
  resourceRequirements?: ResourceRequirement[] | undefined;
}

/**
 * An object that contains overrides for the task definition of a job.
 *
 * @public
 */
export interface TaskPropertiesOverride {
  /**
   * The overrides for the container definition of a job.
   *
   * @public
   */
  containers?: TaskContainerOverrides[] | undefined;
}

/**
 * An object that contains overrides for the Amazon ECS task definition of a job.
 *
 * @public
 */
export interface EcsPropertiesOverride {
  /**
   * The overrides for the Amazon ECS task definition of a job.
   *
   * > **Note:** This object is currently limited to one element.
   *
   * @public
   */
  taskProperties?: TaskPropertiesOverride[] | undefined;
}

/**
 * Object representing any Kubernetes overrides to a job definition that's used in a [SubmitJob](https://docs.aws.amazon.com/batch/latest/APIReference/API_SubmitJob.html) API operation.
 *
 * @public
 */
export interface EksContainerOverride {
  /**
   * A pointer to the container that you want to override. The name must match a unique container name that you wish to override.
   *
   * @public
   */
  name?: string | undefined;

  /**
   * The override of the Docker image that's used to start the container.
   *
   * @public
   */
  image?: string | undefined;

  /**
   * The command to send to the container that overrides the default command from the Docker image or the job definition.
   *
   * @public
   */
  command?: string[] | undefined;

  /**
   * The arguments to the entrypoint to send to the container that overrides the default arguments from the Docker image or the job definition. For more information, see [Dockerfile reference: CMD](https://docs.docker.com/engine/reference/builder/#cmd) and [Define a command an arguments for a pod](https://kubernetes.io/docs/tasks/inject-data-application/define-command-argument-container/) in the *Kubernetes documentation*.
   *
   * @public
   */
  args?: string[] | undefined;

  /**
   * The environment variables to send to the container. You can add new environment variables, which are added to the container at launch. Or, you can override the existing environment variables from the Docker image or the job definition.
   *
   * > **Note:** Environment variables cannot start with "`AWS_BATCH`". This naming convention is reserved for variables that Batch sets.
   *
   * @public
   */
  env?: EksContainerEnvironmentVariable[] | undefined;

  /**
   * The type and amount of resources to assign to a container. These override the settings in the job definition. The supported resources include `memory`, `cpu`, and `nvidia.com/gpu`. For more information, see [Resource management for pods and containers](https://kubernetes.io/docs/concepts/configuration/manage-resources-containers/) in the *Kubernetes documentation*.
   *
   * @public
   */
  resources?: EksContainerResourceRequirements | undefined;
}

/**
 * An object that contains overrides for the Kubernetes pod properties of a job.
 *
 * @public
 */
export interface EksPodPropertiesOverride {
  /**
   * The overrides for the container that's used on the Amazon EKS pod.
   *
   * @public
   */
  containers?: EksContainerOverride[] | undefined;

  /**
   * The overrides for the `initContainers` defined in the Amazon EKS pod. These containers run before application containers, always run to completion, and must complete successfully before the next container starts. These containers are registered with the Amazon EKS Connector agent and persists the registration information in the Kubernetes backend data store. For more information, see [Init Containers](https://kubernetes.io/docs/concepts/workloads/pods/init-containers/) in the *Kubernetes documentation*.
   *
   * @public
   */
  initContainers?: EksContainerOverride[] | undefined;

  /**
   * Metadata about the overrides for the container that's used on the Amazon EKS pod.
   *
   * @public
   */
  metadata?: EksMetadata | undefined;
}

/**
 * An object that contains overrides for the Kubernetes resources of a job.
 *
 * @public
 */
export interface EksPropertiesOverride {
  /**
   * The overrides for the Kubernetes pod resources of a job.
   *
   * @public
   */
  podProperties?: EksPodPropertiesOverride | undefined;
}

/**
 * The object that represents any node overrides to a job definition that's used in a [SubmitJob](https://docs.aws.amazon.com/batch/latest/APIReference/API_SubmitJob.html) API operation.
 *
 * @public
 */
export interface NodePropertyOverride {
  /**
   * The range of nodes, using node index values, that's used to override. A range of `0:3` indicates nodes with index values of `0` through `3`. If the starting range value is omitted (`:n`), then `0` is used to start the range. If the ending range value is omitted (`n:`), then the highest possible node index is used to end the range.
   *
   * @public
   */
  targetNodes: string | undefined;

  /**
   * The overrides that are sent to a node range.
   *
   * @public
   */
  containerOverrides?: ContainerOverrides | undefined;

  /**
   * An object that contains the properties that you want to replace for the existing Amazon ECS resources of a job.
   *
   * @public
   */
  ecsPropertiesOverride?: EcsPropertiesOverride | undefined;

  /**
   * An object that contains the instance types that you want to replace for the existing resources of a job.
   *
   * @public
   */
  instanceTypes?: string[] | undefined;

  /**
   * An object that contains the properties that you want to replace for the existing Amazon EKS resources of a job.
   *
   * @public
   */
  eksPropertiesOverride?: EksPropertiesOverride | undefined;

  /**
   * An object that contains overrides for the consumable resources of a job.
   *
   * @public
   */
  consumableResourcePropertiesOverride?: ConsumableResourceProperties | undefined;
}

/**
 * An object that represents any node overrides to a job definition that's used in a [SubmitJob](https://docs.aws.amazon.com/batch/latest/APIReference/API_SubmitJob.html) API operation.
 *
 * > **Note:** This parameter isn't applicable to jobs that are running on Fargate resources. Don't provide it for these jobs. Rather, use `containerOverrides` instead.
 *
 * @public
 */
export interface NodeOverrides {
  /**
   * The number of nodes to use with a multi-node parallel job. This value overrides the number of nodes that are specified in the job definition. To use this override, you must meet the following conditions:
   *
   * - There must be at least one node range in your job definition that has an open upper boundary, such as `:` or `n:`.
   * - The lower boundary of the node range that's specified in the job definition must be fewer than the number of nodes specified in the override.
   * - The main node index that's specified in the job definition must be fewer than the number of nodes specified in the override.
   *
   * @public
   */
  numNodes?: number | undefined;

  /**
   * The node property overrides for the job.
   *
   * @public
   */
  nodePropertyOverrides?: NodePropertyOverride[] | undefined;
}

/**
 * Contains the parameters for `SubmitJob`.
 *
 * @public
 */
export interface SubmitJobRequest {
  /**
   * The name of the job. It can be up to 128 letters long. The first character must be alphanumeric, can contain uppercase and lowercase letters, numbers, hyphens (-), and underscores (_).
   *
   * @public
   */
  jobName: string | undefined;

  /**
   * The job queue where the job is submitted. You can specify either the name or the Amazon Resource Name (ARN) of the queue.
   *
   * @public
   */
  jobQueue: string | undefined;

  /**
   * The share identifier for the job. Don't specify this parameter if the job queue doesn't have a fair-share scheduling policy. If the job queue has a fair-share scheduling policy, then this parameter must be specified.
   *
   * This string is limited to 255 alphanumeric characters, and can be followed by an asterisk (*).
   *
   * @public
   */
  shareIdentifier?: string | undefined;

  /**
   * The scheduling priority for the job. This only affects jobs in job queues with a fair-share policy. Jobs with a higher scheduling priority are scheduled before jobs with a lower scheduling priority. This overrides any scheduling priority in the job definition and works only within a single share identifier.
   *
   * The minimum supported value is 0 and the maximum supported value is 9999.
   *
   * @public
   */
  schedulingPriorityOverride?: number | undefined;

  /**
   * The array properties for the submitted job, such as the size of the array. The array size can be between 2 and 10,000. If you specify array properties for a job, it becomes an array job. For more information, see [Array Jobs](https://docs.aws.amazon.com/batch/latest/userguide/array_jobs.html) in the *Batch User Guide*.
   *
   * @public
   */
  arrayProperties?: ArrayProperties | undefined;

  /**
   * A list of dependencies for the job. A job can depend upon a maximum of 20 jobs. You can specify a `SEQUENTIAL` type dependency without specifying a job ID for array jobs so that each child array job completes sequentially, starting at index 0. You can also specify an `N_TO_N` type dependency with a job ID for array jobs. In that case, each index child of this job must wait for the corresponding index child of each dependency to complete before it can begin.
   *
   * @public
   */
  dependsOn?: JobDependency[] | undefined;

  /**
   * The job definition used by this job. This value can be one of `definition-name`, `definition-name:revision`, or the Amazon Resource Name (ARN) for the job definition, with or without the revision (`arn:aws:batch:region:account:job-definition/definition-name:revision`, or `arn:aws:batch:region:account:job-definition/definition-name`).
   *
   * If the revision is not specified, then the latest active revision is used.
   *
   * @public
   */
  jobDefinition: string | undefined;

  /**
   * Additional parameters passed to the job that replace parameter substitution placeholders that are set in the job definition. Parameters are specified as a key and value pair mapping. Parameters in a `SubmitJob` request override any corresponding parameter defaults from the job definition.
   *
   * @public
   */
  parameters?: Record<string, string> | undefined;

  /**
   * An object with properties that override the defaults for the job definition that specify the name of a container in the specified job definition and the overrides it should receive. You can override the default command for a container, which is specified in the job definition or the Docker image, with a `command` override. You can also override existing environment variables on a container or add new environment variables to it with an `environment` override.
   *
   * @public
   */
  containerOverrides?: ContainerOverrides | undefined;

  /**
   * A list of node overrides in JSON format that specify the node range to target and the container overrides for that node range.
   *
   * > **Note:** This parameter isn't applicable to jobs that are running on Fargate resources; use `containerOverrides` instead.
   *
   * @public
   */
  nodeOverrides?: NodeOverrides | undefined;

  /**
   * The retry strategy to use for failed jobs from this SubmitJob operation. When a retry strategy is specified here, it overrides the retry strategy defined in the job definition.
   *
   * @public
   */
  retryStrategy?: RetryStrategy | undefined;

  /**
   * Specifies whether to propagate the tags from the job or job definition to the corresponding Amazon ECS task. If no value is specified, the tags aren't propagated. Tags can only be propagated to the tasks during task creation. For tags with the same name, job tags are given priority over job definitions tags. If the total number of combined tags from the job and job definition is over 50, the job is moved to the `FAILED` state. When specified, this overrides the tag propagation setting in the job definition.
   *
   * @public
   */
  propagateTags?: boolean | undefined;

  /**
   * The timeout configuration for this SubmitJob operation. You can specify a timeout duration after which Batch terminates your jobs if they haven't finished. If a job is terminated due to a timeout, it isn't retried. The minimum value for the timeout is 60 seconds. This configuration overrides any timeout configuration specified in the job definition. For array jobs, child jobs have the same timeout configuration as the parent job. For more information, see [Job Timeouts](https://docs.aws.amazon.com/AmazonECS/latest/developerguide/job_timeouts.html) in the *Amazon Elastic Container Service Developer Guide*.
   *
   * @public
   */
  timeout?: JobTimeout | undefined;

  /**
   * The tags that you apply to the job request to help you categorize and organize your resources. Each tag consists of a key and an optional value. For more information, see [Tagging Amazon Web Services Resources](https://docs.aws.amazon.com/general/latest/gr/aws_tagging.html) in *Amazon Web Services General Reference*.
   *
   * @public
   */
  tags?: Record<string, string> | undefined;

  /**
   * An object, with properties that override defaults for the job definition, can only be specified for jobs that are run on Amazon EKS resources.
   *
   * @public
   */
  eksPropertiesOverride?: EksPropertiesOverride | undefined;

  /**
   * An object, with properties that override defaults for the job definition, can only be specified for jobs that are run on Amazon ECS resources.
   *
   * @public
   */
  ecsPropertiesOverride?: EcsPropertiesOverride | undefined;

  /**
   * An object that contains overrides for the consumable resources of a job.
   *
   * @public
   */
  consumableResourcePropertiesOverride?: ConsumableResourceProperties | undefined;
}

/**
 * @public
 */
export interface SubmitJobResponse {
  /**
   * The Amazon Resource Name (ARN) for the job.
   *
   * @public
   */
  jobArn?: string | undefined;

  /**
   * The name of the job.
   *
   * @public
   */
  jobName: string | undefined;

  /**
   * The unique identifier for the job.
   *
   * @public
   */
  jobId: string | undefined;
}

/**
 * @public
 */
export interface SubmitServiceJobRequest {
  /**
   * The name of the service job. It can be up to 128 characters long. It can contain uppercase and lowercase letters, numbers, hyphens (-), and underscores (_).
   *
   * @public
   */
  jobName: string | undefined;

  /**
   * The job queue into which the service job is submitted. You can specify either the name or the ARN of the queue. The job queue must have the type `SAGEMAKER_TRAINING`.
   *
   * @public
   */
  jobQueue: string | undefined;

  /**
   * The retry strategy to use for failed service jobs that are submitted with this service job request.
   *
   * @public
   */
  retryStrategy?: ServiceJobRetryStrategy | undefined;

  /**
   * The scheduling priority of the service job. Valid values are integers between 0 and 9999.
   *
   * @public
   */
  schedulingPriority?: number | undefined;

  /**
   * The request, in JSON, for the service that the SubmitServiceJob operation is queueing.
   *
   * @public
   */
  serviceRequestPayload: string | undefined;

  /**
   * The type of service job. For SageMaker Training jobs, specify `SAGEMAKER_TRAINING`.
   *
   * @public
   */
  serviceJobType: ServiceJobType | undefined;

  /**
   * The share identifier for the service job. Don't specify this parameter if the job queue doesn't have a fair-share scheduling policy. If the job queue has a fair-share scheduling policy, then this parameter must be specified.
   *
   * @public
   */
  shareIdentifier?: string | undefined;

  /**
   * The quota share for the service job. Don't specify this parameter if the job queue doesn't have a quota share scheduling policy. If the job queue has a quota share scheduling policy, then this parameter must be specified.
   *
   * @public
   */
  quotaShareName?: string | undefined;

  /**
   * Specifies the service job behavior when preempted.
   *
   * @public
   */
  preemptionConfiguration?: ServiceJobPreemptionConfiguration | undefined;

  /**
   * The timeout configuration for the service job. If none is specified, Batch defers to the default timeout of the underlying service handling the job.
   *
   * @public
   */
  timeoutConfig?: ServiceJobTimeout | undefined;

  /**
   * The tags that you apply to the service job request. Each tag consists of a key and an optional value. For more information, see [Tagging your Batch resources](https://docs.aws.amazon.com/batch/latest/userguide/using-tags.html).
   *
   * @public
   */
  tags?: Record<string, string> | undefined;

  /**
   * A unique identifier for the request. This token is used to ensure idempotency of requests. If this parameter is specified and two submit requests with identical payloads and `clientToken`s are received, these requests are considered the same request and the second request is rejected.
   *
   * @public
   */
  clientToken?: string | undefined;
}

/**
 * @public
 */
export interface SubmitServiceJobResponse {
  /**
   * The Amazon Resource Name (ARN) for the service job.
   *
   * @public
   */
  jobArn?: string | undefined;

  /**
   * The name of the service job.
   *
   * @public
   */
  jobName: string | undefined;

  /**
   * The unique identifier for the service job.
   *
   * @public
   */
  jobId: string | undefined;
}

/**
 * Contains the parameters for `TagResource`.
 *
 * @public
 */
export interface TagResourceRequest {
  /**
   * The Amazon Resource Name (ARN) of the resource that tags are added to. Batch resources that support tags are compute environments, jobs, job definitions, job queues, and scheduling policies. ARNs for child jobs of array and multi-node parallel (MNP) jobs aren't supported.
   *
   * @public
   */
  resourceArn: string | undefined;

  /**
   * The tags that you apply to the resource to help you categorize and organize your resources. Each tag consists of a key and an optional value. For more information, see [Tagging Amazon Web Services Resources](https://docs.aws.amazon.com/general/latest/gr/aws_tagging.html) in *Amazon Web Services General Reference*.
   *
   * @public
   */
  tags: Record<string, string> | undefined;
}

/**
 * @public
 */
export interface TagResourceResponse {}

/**
 * Contains the parameters for `TerminateJob`.
 *
 * @public
 */
export interface TerminateJobRequest {
  /**
   * The Batch job ID of the job to terminate.
   *
   * @public
   */
  jobId: string | undefined;

  /**
   * A message to attach to the job that explains the reason for terminating it. This message is returned by future DescribeJobs operations on the job. It is also recorded in the Batch activity logs.
   *
   * This parameter has a limit of 1024 characters.
   *
   * @public
   */
  reason: string | undefined;
}

/**
 * @public
 */
export interface TerminateJobResponse {}

/**
 * Specifies the jobs to terminate and the reason for the termination.
 *
 * @public
 */
export interface TerminateJobsRequest {
  /**
   * An array of up to 50 Batch job IDs of the jobs to terminate.
   *
   * @public
   */
  jobs: string[] | undefined;

  /**
   * A message to attach to the job that explains the reason for terminating it. This message is returned by future DescribeJobs operations on the job. It is also recorded in the Batch activity logs.
   *
   * This parameter has a limit of 1024 characters.
   *
   * @public
   */
  reason: string | undefined;
}

/**
 * An object that contains the details of a job that couldn't be terminated by a `TerminateJobs` operation.
 *
 * @public
 */
export interface TerminateJobsErrorDetail {
  /**
   * The Batch job ID of the job that couldn't be terminated.
   *
   * @public
   */
  job: string | undefined;

  /**
   * An error code that identifies the reason the job couldn't be terminated. Valid values are:
   *
   * - `ValidationException` – A job identifier in the request is malformed or isn't valid.
   * - `ClientException` – The request failed because of a client error.
   * - `ThrottlingException` – The request was throttled. Retry the request.
   * - `ServerException` – An internal error occurred. Retry the request.
   * - `AccessDenied` – The caller isn't authorized to perform the action on the specified job.
   *
   * @public
   */
  code: string | undefined;

  /**
   * A message that describes the reason the job couldn't be terminated.
   *
   * @public
   */
  message: string | undefined;
}

/**
 * The result of a `TerminateJobs` request, including the jobs whose termination request was accepted and the errors for jobs that couldn't be terminated.
 *
 * @public
 */
export interface TerminateJobsResponse {
  /**
   * A list of the job IDs whose termination request was accepted.
   *
   * @public
   */
  successful: string[] | undefined;

  /**
   * A list of `TerminateJobsErrorDetail` items, one for each job that couldn't be terminated. Each item includes the job ID along with a code and message that describe why the job wasn't terminated.
   *
   * @public
   */
  errors: TerminateJobsErrorDetail[] | undefined;
}

/**
 * @public
 */
export interface TerminateServiceJobRequest {
  /**
   * The service job ID of the service job to terminate.
   *
   * @public
   */
  jobId: string | undefined;

  /**
   * A message to attach to the service job that explains the reason for terminating it. This message is returned by `DescribeServiceJob` operations on the service job.
   *
   * @public
   */
  reason: string | undefined;
}

/**
 * @public
 */
export interface TerminateServiceJobResponse {}

/**
 * Specifies the service jobs to terminate and the reason for the termination.
 *
 * @public
 */
export interface TerminateServiceJobsRequest {
  /**
   * An array of up to 50 service job IDs of the service jobs to terminate.
   *
   * @public
   */
  jobs: string[] | undefined;

  /**
   * A message to attach to the service job that explains the reason for terminating it. This message is returned by `DescribeServiceJob` operations on the service job.
   *
   * @public
   */
  reason: string | undefined;
}

/**
 * An object that contains the details of a service job that couldn't be terminated by a `TerminateServiceJobs` operation.
 *
 * @public
 */
export interface TerminateServiceJobsErrorDetail {
  /**
   * The service job ID of the service job that couldn't be terminated.
   *
   * @public
   */
  job: string | undefined;

  /**
   * An error code that identifies the reason the service job couldn't be terminated. Valid values are:
   *
   * - `ValidationException` – A service job identifier in the request is malformed or isn't valid.
   * - `ClientException` – The request failed because of a client error.
   * - `ThrottlingException` – The request was throttled. Retry the request.
   * - `ServerException` – An internal error occurred. Retry the request.
   * - `AccessDenied` – The caller isn't authorized to perform the action on the specified service job.
   *
   * @public
   */
  code: string | undefined;

  /**
   * A message that describes the reason the service job couldn't be terminated.
   *
   * @public
   */
  message: string | undefined;
}

/**
 * The result of a `TerminateServiceJobs` request, including the service jobs whose termination request was accepted and the errors for service jobs that couldn't be terminated.
 *
 * @public
 */
export interface TerminateServiceJobsResponse {
  /**
   * A list of the service job IDs whose termination request was accepted.
   *
   * @public
   */
  successful: string[] | undefined;

  /**
   * A list of `TerminateServiceJobsErrorDetail` items, one for each service job that couldn't be terminated. Each item includes the service job ID along with a code and message that describe why the service job wasn't terminated.
   *
   * @public
   */
  errors: TerminateServiceJobsErrorDetail[] | undefined;
}

/**
 * Contains the parameters for `UntagResource`.
 *
 * @public
 */
export interface UntagResourceRequest {
  /**
   * The Amazon Resource Name (ARN) of the resource from which to delete tags. Batch resources that support tags are compute environments, jobs, job definitions, job queues, and scheduling policies. ARNs for child jobs of array and multi-node parallel (MNP) jobs aren't supported.
   *
   * @public
   */
  resourceArn: string | undefined;

  /**
   * The keys of the tags to be removed.
   *
   * @public
   */
  tagKeys: string[] | undefined;
}

/**
 * @public
 */
export interface UntagResourceResponse {}

/**
 * The instance launch configuration for updating an Amazon ECS Managed Instances capacity provider. You cannot change `capacityOptionType` or `fipsEnabled` after the compute environment is created.
 *
 * @public
 */
export interface InstanceLaunchTemplateUpdate {
  /**
   * The updated Amazon Resource Name (ARN) of the Amazon EC2 instance profile for the managed instances.
   *
   * @public
   */
  ec2InstanceProfileArn?: string | undefined;

  /**
   * The updated network configuration for the managed instances.
   *
   * @public
   */
  networkConfiguration?: ManagedInstancesNetworkConfiguration | undefined;

  /**
   * The updated instance type requirements for the capacity provider.
   *
   * @public
   */
  instanceRequirements?: InstanceRequirementsRequest | undefined;

  /**
   * The updated storage configuration for the managed instances.
   *
   * @public
   */
  storageConfiguration?: ManagedInstancesStorageConfiguration | undefined;

  /**
   * The updated monitoring level. Valid values are `BASIC` and `DETAILED`.
   *
   * @public
   */
  monitoring?: string | undefined;

  /**
   * The updated capacity reservation configuration.
   *
   * @public
   */
  capacityReservations?: CapacityReservationRequest | undefined;

  /**
   * Specifies whether instance tags are accessible from the instance metadata service (IMDS).
   *
   * @public
   */
  instanceMetadataTagsPropagation?: boolean | undefined;

  /**
   * The updated local storage configuration.
   *
   * @public
   */
  localStorageConfiguration?: ManagedInstancesLocalStorageConfiguration | undefined;
}

/**
 * The configuration for updating an Amazon ECS Managed Instances capacity provider. Used in `UpdateComputeEnvironment` requests. The `capacityOptionType` and `fipsEnabled` fields cannot be changed on update.
 *
 * @public
 */
export interface UpdateManagedInstancesProviderConfiguration {
  /**
   * Specifies whether tags on the capacity provider are propagated to the Amazon EC2 instances it launches. Valid values:
   *
   * - `CAPACITY_PROVIDER` — Propagates tags to instances.
   * - `NONE` — Does not propagate tags to instances.
   *
   * @public
   */
  propagateTags?: string | undefined;

  /**
   * The updated Amazon Resource Name (ARN) of the IAM role that Amazon ECS assumes to manage Amazon EC2 instances on your behalf.
   *
   * @public
   */
  infrastructureRoleArn?: string | undefined;

  /**
   * The updated instance launch configuration for the Amazon ECS Managed Instances capacity provider.
   *
   * @public
   */
  instanceLaunchTemplate?: InstanceLaunchTemplateUpdate | undefined;

  /**
   * The updated infrastructure optimization configuration.
   *
   * @public
   */
  infrastructureOptimization?: InfrastructureOptimization | undefined;
}

/**
 * An object that represents the attributes of a compute environment that can be updated. For more information, see [Updating compute environments](https://docs.aws.amazon.com/batch/latest/userguide/updating-compute-environments.html) in the *Batch User Guide*.
 *
 * @public
 */
export interface ComputeResourceUpdate {
  /**
   * The minimum number of vCPUs that an environment should maintain (even if the compute environment is `DISABLED`).
   *
   * > **Note:** This parameter isn't applicable to jobs that are running on Fargate resources. Don't specify it.
   *
   * @public
   */
  minvCpus?: number | undefined;

  /**
   * The maximum number of Amazon EC2 vCPUs that an environment can reach.
   *
   * > **Note:** With any allocation strategy except `BEST_FIT` using On-Demand (`EC2`) compute resources, Batch might need to exceed `maxvCpus` to meet your capacity requirements. In this event, Batch never exceeds `maxvCpus` by more than a single instance.
   *
   * @public
   */
  maxvCpus?: number | undefined;

  /**
   * The desired number of vCPUS in the compute environment. Batch modifies this value between the minimum and maximum values based on job queue demand.
   *
   * > **Note:** This parameter isn't applicable to jobs that are running on Fargate resources. Don't specify it.
   *
   * > **Note:** Batch doesn't support changing the desired number of vCPUs of an existing compute environment. Don't specify this parameter for compute environments using Amazon EKS clusters.
   *
   * > **Note:**
   * >
   * > When you update the `desiredvCpus` setting, the value must be between the `minvCpus` and `maxvCpus` values.
   * >
   * > Additionally, the updated `desiredvCpus` value must be greater than or equal to the current `desiredvCpus` value. For more information, see [Troubleshooting Batch](https://docs.aws.amazon.com/batch/latest/userguide/troubleshooting.html#error-desired-vcpus-update) in the *Batch User Guide*.
   *
   * @public
   */
  desiredvCpus?: number | undefined;

  /**
   * The VPC subnets where the compute resources are launched. Fargate compute resources can contain up to 16 subnets. For Fargate compute resources, providing an empty list will be handled as if this parameter wasn't specified and no change is made. For Amazon EC2 compute resources, providing an empty list removes the VPC subnets from the compute resource. For more information, see [VPCs and subnets](https://docs.aws.amazon.com/vpc/latest/userguide/VPC_Subnets.html) in the *Amazon VPC User Guide*.
   *
   * When updating a compute environment, changing the VPC subnets requires an infrastructure update of the compute environment. For more information, see [Updating compute environments](https://docs.aws.amazon.com/batch/latest/userguide/updating-compute-environments.html) in the *Batch User Guide*.
   *
   * > **Note:**
   * >
   * > Batch on Amazon EC2 and Batch on Amazon EKS support Local Zones. For more information, see [Local Zones](https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/using-regions-availability-zones.html#concepts-local-zones) in the *Amazon EC2 User Guide for Linux Instances*, [Amazon EKS and Amazon Web Services Local Zones](https://docs.aws.amazon.com/eks/latest/userguide/local-zones.html) in the *Amazon EKS User Guide* and [Amazon ECS clusters in Local Zones, Wavelength Zones, and Amazon Web Services Outposts](https://docs.aws.amazon.com/AmazonECS/latest/developerguide/cluster-regions-zones.html#clusters-local-zones) in the *Amazon ECS Developer Guide*.
   * >
   * > Batch on Fargate doesn't currently support Local Zones.
   *
   * @public
   */
  subnets?: string[] | undefined;

  /**
   * The Amazon EC2 security groups that are associated with instances launched in the compute environment. This parameter is required for Fargate compute resources, where it can contain up to 5 security groups. For Fargate compute resources, providing an empty list is handled as if this parameter wasn't specified and no change is made. For Amazon EC2 compute resources, providing an empty list removes the security groups from the compute resource.
   *
   * When updating a compute environment, changing the Amazon EC2 security groups requires an infrastructure update of the compute environment. For more information, see [Updating compute environments](https://docs.aws.amazon.com/batch/latest/userguide/updating-compute-environments.html) in the *Batch User Guide*.
   *
   * @public
   */
  securityGroupIds?: string[] | undefined;

  /**
   * The allocation strategy to use for the compute resource if there's not enough instances of the best fitting instance type that can be allocated. This might be because of availability of the instance type in the Region or [Amazon EC2 service limits](https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/ec2-resource-limits.html). For more information, see [Allocation strategies](https://docs.aws.amazon.com/batch/latest/userguide/allocation-strategies.html) in the *Batch User Guide*.
   *
   * When updating a compute environment, changing the allocation strategy requires an infrastructure update of the compute environment. For more information, see [Updating compute environments](https://docs.aws.amazon.com/batch/latest/userguide/updating-compute-environments.html) in the *Batch User Guide*. `BEST_FIT` isn't supported when updating a compute environment.
   *
   * > **Note:** This parameter isn't applicable to jobs that are running on Fargate resources. Don't specify it.
   *
   * - **BEST_FIT_PROGRESSIVE**
   *
   *   Batch selects additional instance types that are large enough to meet the requirements of the jobs in the queue. Its preference is for instance types with lower cost vCPUs. If additional instances of the previously selected instance types aren't available, Batch selects new instance types.
   *
   * - **BEST_FIT_PROGRESSIVE_ORDERED**
   *
   *   > **Important:**
   *   >
   *   > This is an advanced allocation strategy only for customers who want to control which instance types are preferred during scaling.
   *   >
   *   > Placing large instance types at the top of the list may result in **over-provisioning** for small jobs. Placing small instance types at the top may cause the compute environment to reach Amazon EC2 instance count limits before reaching `maxvCpus`.
   *
   *   Batch selects instance types in the order they appear in the `instanceTypes` list. When an instance family is specified, sizes within that family are expanded using `BEST_FIT_PROGRESSIVE` logic—preferring sizes that best fit the jobs, with larger sizes as fallback. Instance types that cannot meet the resource requirements of the jobs are skipped. This strategy is only available for On-Demand Instance (`EC2`) compute resources.
   *
   *   If an instance family and an explicit instance type from that family both appear in `instanceTypes`, the explicit type takes its listed position and is excluded from the family expansion. For example, in `["m7a.4xlarge", "m7a", "m6a"]`, `m7a.4xlarge` is always placed first and is excluded from the `m7a` family expansion.
   *
   * - **SPOT_CAPACITY_OPTIMIZED**
   *
   *   Batch selects one or more instance types that are large enough to meet the requirements of the jobs in the queue. Its preference is for instance types that are less likely to be interrupted. This allocation strategy is only available for Spot Instance compute resources.
   *
   * - **SPOT_PRICE_CAPACITY_OPTIMIZED**
   *
   *   The price and capacity optimized allocation strategy looks at both price and capacity to select the Spot Instance pools that are the least likely to be interrupted and have the lowest possible price. This allocation strategy is only available for Spot Instance compute resources.
   *
   * - **SPOT_CAPACITY_OPTIMIZED_PRIORITIZED**
   *
   *   > **Important:**
   *   >
   *   > This is an advanced allocation strategy for customers who want to influence instance type selection during scaling. This strategy optimizes for **capacity first**, and honors instance type priorities on a best-effort basis (priorities are honored when they do not significantly reduce available Spot capacity).
   *   >
   *   > Placing large instance types at the top of the list may result in **over-provisioning** for small jobs. Placing small instance types at the top may cause the compute environment to reach Amazon EC2 instance count limits before reaching `maxvCpus`.
   *
   *   Batch selects instance types in the order they appear in the `instanceTypes` list, but **optimizes for capacity first**. The customer-defined priority is honored on a best-effort basis. When Spot Instance capacity pools are similarly available, priority order is respected. When capacity is constrained, Batch selects from the most available pools regardless of priority to minimize the likelihood of Spot Instance interruptions. This strategy is only available for Spot Instance compute resources.
   *
   * With any allocation strategy except `BEST_FIT` using On-Demand (`EC2`) compute resources, Batch might need to exceed `maxvCpus` to meet your capacity requirements. In this event, Batch never exceeds `maxvCpus` by more than a single instance.
   *
   * @public
   */
  allocationStrategy?: CRUpdateAllocationStrategy | undefined;

  /**
   * The instances types that can be launched. You can specify instance families to launch any instance type within those families (for example, `c5` or `p3`), or you can specify specific sizes within a family (such as `c5.8xlarge`).
   *
   * Batch can select the instance type for you if you choose one of the following:
   *
   * - `optimal` to select instance types (from the `c4`, `m4`, `r4`, `c5`, `m5`, and `r5` instance families) that match the demand of your job queues.
   * - `default_x86_64` to choose x86 based instance types (from the `m6i`, `c6i`, `r6i`, and `c7i` instance families) that matches the resource demands of the job queue.
   * - `default_arm64` to choose x86 based instance types (from the `m6g`, `c6g`, `r6g`, and `c7g` instance families) that matches the resource demands of the job queue.
   *
   * > **Note:** Starting on 11/01/2025 the behavior of `optimal` is going to be changed to match `default_x86_64`. During the change your instance families could be updated to a newer generation. You do not need to perform any actions for the upgrade to happen. For more information about change, see [Optimal instance type configuration to receive automatic instance family updates](https://docs.aws.amazon.com/batch/latest/userguide/optimal-default-instance-troubleshooting.html).
   *
   * > **Note:**
   * >
   * > Instance family availability varies by Amazon Web Services Region. For example, some Amazon Web Services Regions may not have any fourth generation instance families but have fifth and sixth generation instance families.
   * >
   * > When using `default_x86_64` or `default_arm64` instance bundles, Batch selects instance families based on a balance of cost-effectiveness and performance. While newer generation instances often provide better price-performance, Batch may choose an earlier generation instance family if it provides the optimal combination of availability, cost, and performance for your workload. For example, in an Amazon Web Services Region where both c6i and c7i instances are available, Batch might select c6i instances if they offer better cost-effectiveness for your specific job requirements. For more information on Batch instance types and Amazon Web Services Region availability, see [Instance type compute table](https://docs.aws.amazon.com/batch/latest/userguide/instance-type-compute-table.html) in the *Batch User Guide*.
   * >
   * > Batch periodically updates your instances in default bundles to newer, more cost-effective options. Updates happen automatically without requiring any action from you. Your workloads continue running during updates with no interruption
   *
   * > **Note:** This parameter isn't applicable to jobs that are running on Fargate resources. Don't specify it.
   *
   * > **Note:** When you create a compute environment, the instance types that you select for the compute environment must share the same architecture. For example, you can't mix x86 and ARM instances in the same compute environment.
   *
   * @public
   */
  instanceTypes?: string[] | undefined;

  /**
   * The Amazon EC2 key pair that's used for instances launched in the compute environment. You can use this key pair to log in to your instances with SSH. To remove the Amazon EC2 key pair, set this value to an empty string.
   *
   * When updating a compute environment, changing the Amazon EC2 key pair requires an infrastructure update of the compute environment. For more information, see [Updating compute environments](https://docs.aws.amazon.com/batch/latest/userguide/updating-compute-environments.html) in the *Batch User Guide*.
   *
   * > **Note:** This parameter isn't applicable to jobs that are running on Fargate resources. Don't specify it.
   *
   * @public
   */
  ec2KeyPair?: string | undefined;

  /**
   * The Amazon ECS instance profile applied to Amazon EC2 instances in a compute environment. Required for Amazon EC2 instances. You can specify the short name or full Amazon Resource Name (ARN) of an instance profile. For example, `ecsInstanceRole` or `arn:aws:iam::<aws_account_id>:instance-profile/ecsInstanceRole`. For more information, see [Amazon ECS instance role](https://docs.aws.amazon.com/batch/latest/userguide/instance_IAM_role.html) in the *Batch User Guide*.
   *
   * When updating a compute environment, changing this setting requires an infrastructure update of the compute environment. For more information, see [Updating compute environments](https://docs.aws.amazon.com/batch/latest/userguide/updating-compute-environments.html) in the *Batch User Guide*.
   *
   * > **Note:** This parameter isn't applicable to jobs that are running on Fargate resources. Don't specify it.
   *
   * @public
   */
  instanceRole?: string | undefined;

  /**
   * Key-value pair tags to be applied to Amazon EC2 resources that are launched in the compute environment. For Batch, these take the form of `"String1": "String2"`, where `String1` is the tag key and `String2` is the tag value (for example, `\{ "Name": "Batch Instance - C4OnDemand" \}`). This is helpful for recognizing your Batch instances in the Amazon EC2 console. These tags aren't seen when using the Batch `ListTagsForResource` API operation.
   *
   * When updating a compute environment, changing this setting requires an infrastructure update of the compute environment. For more information, see [Updating compute environments](https://docs.aws.amazon.com/batch/latest/userguide/updating-compute-environments.html) in the *Batch User Guide*.
   *
   * > **Note:** This parameter isn't applicable to jobs that are running on Fargate resources. Don't specify it.
   *
   * @public
   */
  tags?: Record<string, string> | undefined;

  /**
   * The Amazon EC2 placement group to associate with your compute resources. If you intend to submit multi-node parallel jobs to your compute environment, you should consider creating a cluster placement group and associate it with your compute resources. This keeps your multi-node parallel job on a logical grouping of instances within a single Availability Zone with high network flow potential. For more information, see [Placement groups](https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/placement-groups.html) in the *Amazon EC2 User Guide for Linux Instances*.
   *
   * When updating a compute environment, changing the placement group requires an infrastructure update of the compute environment. For more information, see [Updating compute environments](https://docs.aws.amazon.com/batch/latest/userguide/updating-compute-environments.html) in the *Batch User Guide*.
   *
   * > **Note:** This parameter isn't applicable to jobs that are running on Fargate resources. Don't specify it.
   *
   * @public
   */
  placementGroup?: string | undefined;

  /**
   * The maximum percentage that a Spot Instance price can be when compared with the On-Demand price for that instance type before instances are launched. For example, if your maximum percentage is 20%, the Spot price must be less than 20% of the current On-Demand price for that Amazon EC2 instance. You always pay the lowest (market) price and never more than your maximum percentage. For most use cases, we recommend leaving this field empty.
   *
   * When updating a compute environment, changing the bid percentage requires an infrastructure update of the compute environment. For more information, see [Updating compute environments](https://docs.aws.amazon.com/batch/latest/userguide/updating-compute-environments.html) in the *Batch User Guide*.
   *
   * > **Note:** This parameter isn't applicable to jobs that are running on Fargate resources. Don't specify it.
   *
   * @public
   */
  bidPercentage?: number | undefined;

  /**
   * The updated launch template to use for your compute resources. You must specify either the launch template ID or launch template name in the request, but not both. For more information, see [Launch template support](https://docs.aws.amazon.com/batch/latest/userguide/launch-templates.html) in the *Batch User Guide*. To remove the custom launch template and use the default launch template, set `launchTemplateId` or `launchTemplateName` member of the launch template specification to an empty string. Removing the launch template from a compute environment will not remove the AMI specified in the launch template. In order to update the AMI specified in a launch template, the `updateToLatestImageVersion` parameter must be set to `true`.
   *
   * When updating a compute environment, changing the launch template requires an infrastructure update of the compute environment. For more information, see [Updating compute environments](https://docs.aws.amazon.com/batch/latest/userguide/updating-compute-environments.html) in the *Batch User Guide*.
   *
   * > **Note:** This parameter isn't applicable to jobs that are running on Fargate resources. Don't specify it.
   *
   * @public
   */
  launchTemplate?: LaunchTemplateSpecification | undefined;

  /**
   * Provides information used to select Amazon Machine Images (AMIs) for Amazon EC2 instances in the compute environment. If `Ec2Configuration` isn't specified, the default is `ECS_AL2023` for EC2 (ECS) compute environments and `EKS_AL2023` for EKS compute environments.
   *
   * When updating a compute environment, changing this setting requires an infrastructure update of the compute environment. For more information, see [Updating compute environments](https://docs.aws.amazon.com/batch/latest/userguide/updating-compute-environments.html) in the *Batch User Guide*. To remove the Amazon EC2 configuration and any custom AMI ID specified in `imageIdOverride`, set this value to an empty string.
   *
   * One or two values can be provided.
   *
   * > **Note:** This parameter isn't applicable to jobs that are running on Fargate resources. Don't specify it.
   *
   * @public
   */
  ec2Configuration?: Ec2Configuration[] | undefined;

  /**
   * Specifies whether the AMI ID is updated to the latest one that's supported by Batch when the compute environment has an infrastructure update. The default value is `false`.
   *
   * > **Note:** An AMI ID can either be specified in the `imageId` or `imageIdOverride` parameters or be determined by the launch template that's specified in the `launchTemplate` parameter. If an AMI ID is specified any of these ways, this parameter is ignored. For more information about to update AMI IDs during an infrastructure update, see [Updating the AMI ID](https://docs.aws.amazon.com/batch/latest/userguide/updating-compute-environments.html#updating-compute-environments-ami) in the *Batch User Guide*.
   *
   * When updating a compute environment, changing this setting requires an infrastructure update of the compute environment. For more information, see [Updating compute environments](https://docs.aws.amazon.com/batch/latest/userguide/updating-compute-environments.html) in the *Batch User Guide*.
   *
   * @public
   */
  updateToLatestImageVersion?: boolean | undefined;

  /**
   * The type of compute environment: `EC2`, `SPOT`, `FARGATE`, `FARGATE_SPOT`, or `ECS_MANAGED_INSTANCES`. For more information, see [Compute environments](https://docs.aws.amazon.com/batch/latest/userguide/compute_environments.html) in the *Batch User Guide*.
   *
   * If you choose `SPOT`, you must also specify an Amazon EC2 Spot Fleet role with the `spotIamFleetRole` parameter. For more information, see [Amazon EC2 spot fleet role](https://docs.aws.amazon.com/batch/latest/userguide/spot_fleet_IAM_role.html) in the *Batch User Guide*.
   *
   * When updating a compute environment, changing the type of a compute environment requires an infrastructure update of the compute environment. For more information, see [Updating compute environments](https://docs.aws.amazon.com/batch/latest/userguide/updating-compute-environments.html) in the *Batch User Guide*.
   *
   * You cannot change the type to or from `ECS_MANAGED_INSTANCES`.
   *
   * @public
   */
  type?: CRType | undefined;

  /**
   * The Amazon Machine Image (AMI) ID used for instances launched in the compute environment. This parameter is overridden by the `imageIdOverride` member of the `Ec2Configuration` structure. To remove the custom AMI ID and use the default AMI ID, set this value to an empty string.
   *
   * When updating a compute environment, changing the AMI ID requires an infrastructure update of the compute environment. For more information, see [Updating compute environments](https://docs.aws.amazon.com/batch/latest/userguide/updating-compute-environments.html) in the *Batch User Guide*.
   *
   * > **Note:** This parameter isn't applicable to jobs that are running on Fargate resources. Don't specify it.
   *
   * > **Note:** The AMI that you choose for a compute environment must match the architecture of the instance types that you intend to use for that compute environment. For example, if your compute environment uses A1 instance types, the compute resource AMI that you choose must support ARM instances. Amazon ECS vends both x86 and ARM versions of the Amazon ECS-optimized Amazon Linux 2023 AMI. For more information, see [Amazon ECS-optimized Amazon Linux 2023 AMI](https://docs.aws.amazon.com/AmazonECS/latest/developerguide/ecs-optimized_AMI.html#ecs-optimized-ami-linux-variants.html) in the *Amazon Elastic Container Service Developer Guide*.
   *
   * @public
   */
  imageId?: string | undefined;

  /**
   * The scaling policy configuration for the compute environment.
   *
   * > **Note:** This parameter isn't applicable to jobs that are running on Fargate resources. Don't specify it.
   *
   * @public
   */
  scalingPolicy?: ComputeScalingPolicy | undefined;

  /**
   * The updated configuration for the Amazon ECS Managed Instances capacity provider. This parameter is only valid when the compute environment type is `ECS_MANAGED_INSTANCES`. You cannot change `capacityOptionType` or `fipsEnabled` on update.
   *
   * @public
   */
  managedInstancesProvider?: UpdateManagedInstancesProviderConfiguration | undefined;

  /**
   * The updated tags to apply to the Amazon ECS capacity provider and Amazon EC2 instances. This parameter is only valid for `ECS_MANAGED_INSTANCES` compute environments. You must have the `batch:SetCapacityTags` permission on the compute environment resource to use this parameter.
   *
   * @public
   */
  capacityTags?: Record<string, string> | undefined;
}

/**
 * An object that represents the attributes of an Batch compute environment's Amazon EKS configuration that can be updated. Currently `accessEntry` is the only attribute that you can change after the compute environment is created. For more information, see [Amazon EKS access entry authentication](https://docs.aws.amazon.com/batch/latest/userguide/eks-access-entries.html) in the *Batch User Guide*.
 *
 * @public
 */
export interface EksConfigurationUpdate {
  /**
   * The updated access entry configuration for the compute environment. Set `desiredState` to declare whether Batch will manage an access entry on the cluster. For the accepted values, see [`EksAccessEntry`](https://docs.aws.amazon.com/batch/latest/APIReference/API_EksAccessEntry.html).
   *
   * @public
   */
  accessEntry?: EksAccessEntry | undefined;
}

/**
 * Contains the parameters for `UpdateComputeEnvironment`.
 *
 * @public
 */
export interface UpdateComputeEnvironmentRequest {
  /**
   * The name or full Amazon Resource Name (ARN) of the compute environment to update.
   *
   * @public
   */
  computeEnvironment: string | undefined;

  /**
   * The state of the compute environment. Compute environments in the `ENABLED` state can accept jobs from a queue and scale in or out automatically based on the workload demand of its associated queues.
   *
   * If the state is `ENABLED`, then the Batch scheduler can attempt to place jobs from an associated job queue on the compute resources within the environment. If the compute environment is managed, then it can scale its instances out or in automatically, based on the job queue demand.
   *
   * If the state is `DISABLED`, then the Batch scheduler doesn't attempt to place jobs within the environment. Jobs in a `STARTING` or `RUNNING` state continue to progress normally. Managed compute environments in the `DISABLED` state don't scale out.
   *
   * > **Note:** Compute environments in a `DISABLED` state may continue to incur billing charges, for example, if they have running instances due to jobs that are still executing or a non-zero `minvCpus` setting. To prevent additional charges, disable and delete the compute environment.
   *
   * When an instance is idle, the instance scales down to the `minvCpus` value. However, the instance size doesn't change. For example, consider a `c5.8xlarge` instance with a `minvCpus` value of `4` and a `desiredvCpus` value of `36`. This instance doesn't scale down to a `c5.large` instance.
   *
   * @public
   */
  state?: CEState | undefined;

  /**
   * The maximum number of vCPUs expected to be used for an unmanaged compute environment. Don't specify this parameter for a managed compute environment. This parameter is only used for fair-share scheduling to reserve vCPU capacity for new share identifiers. If this parameter isn't provided for a fair-share job queue, no vCPU capacity is reserved.
   *
   * @public
   */
  unmanagedvCpus?: number | undefined;

  /**
   * Details of the compute resources managed by the compute environment. Required for a managed compute environment. For more information, see [Compute Environments](https://docs.aws.amazon.com/batch/latest/userguide/compute_environments.html) in the *Batch User Guide*.
   *
   * @public
   */
  computeResources?: ComputeResourceUpdate | undefined;

  /**
   * The full Amazon Resource Name (ARN) of the IAM role that allows Batch to make calls to other Amazon Web Services services on your behalf. For more information, see [Batch service IAM role](https://docs.aws.amazon.com/batch/latest/userguide/service_IAM_role.html) in the *Batch User Guide*.
   *
   * > **Important:** If the compute environment has a service-linked role, it can't be changed to use a regular IAM role. Likewise, if the compute environment has a regular IAM role, it can't be changed to use a service-linked role. To update the parameters for the compute environment that require an infrastructure update to change, the **AWSServiceRoleForBatch** service-linked role must be used. For more information, see [Updating compute environments](https://docs.aws.amazon.com/batch/latest/userguide/updating-compute-environments.html) in the *Batch User Guide*.
   *
   * If your specified role has a path other than `/`, then you must either specify the full role ARN (recommended) or prefix the role name with the path.
   *
   * > **Note:** Depending on how you created your Batch service role, its ARN might contain the `service-role` path prefix. When you only specify the name of the service role, Batch assumes that your ARN doesn't use the `service-role` path prefix. Because of this, we recommend that you specify the full ARN of your service role when you create compute environments.
   *
   * @public
   */
  serviceRole?: string | undefined;

  /**
   * Specifies the updated infrastructure update policy for the compute environment. For more information about infrastructure updates, see [Updating compute environments](https://docs.aws.amazon.com/batch/latest/userguide/updating-compute-environments.html) in the *Batch User Guide*.
   *
   * @public
   */
  updatePolicy?: UpdatePolicy | undefined;

  /**
   * Reserved.
   *
   * @public
   */
  context?: string | undefined;

  /**
   * The Amazon ECS settings for the compute environment. These settings control CloudWatch Container Insights collection for the compute environment.
   *
   * @public
   */
  ecsSettings?: EcsSettings | undefined;

  /**
   * Updates the Amazon EKS configuration for the compute environment. Only specify this parameter if the compute environment's `containerOrchestrationType` is `EKS`. Currently, the `accessEntry` setting is the only Amazon EKS configuration that you can change after the compute environment is created. For more information, see [Amazon EKS access entry authentication](https://docs.aws.amazon.com/batch/latest/userguide/eks-access-entries.html) in the *Batch User Guide*.
   *
   * @public
   */
  eksConfiguration?: EksConfigurationUpdate | undefined;
}

/**
 * @public
 */
export interface UpdateComputeEnvironmentResponse {
  /**
   * The name of the compute environment. It can be up to 128 characters long. It can contain uppercase and lowercase letters, numbers, hyphens (-), and underscores (_).
   *
   * @public
   */
  computeEnvironmentName?: string | undefined;

  /**
   * The Amazon Resource Name (ARN) of the compute environment.
   *
   * @public
   */
  computeEnvironmentArn?: string | undefined;
}

/**
 * @public
 */
export interface UpdateConsumableResourceRequest {
  /**
   * The name or ARN of the consumable resource to be updated.
   *
   * @public
   */
  consumableResource: string | undefined;

  /**
   * Indicates how the quantity of the consumable resource will be updated. Must be one of:
   *
   * - `SET`
   *
   *   Sets the quantity of the resource to the value specified by the `quantity` parameter.
   * - `ADD`
   *
   *   Increases the quantity of the resource by the value specified by the `quantity` parameter.
   * - `REMOVE`
   *
   *   Reduces the quantity of the resource by the value specified by the `quantity` parameter.
   *
   * @public
   */
  operation?: string | undefined;

  /**
   * The change in the total quantity of the consumable resource. The `operation` parameter determines whether the value specified here will be the new total quantity, or the amount by which the total quantity will be increased or reduced. Must be a non-negative value.
   *
   * @public
   */
  quantity?: number | undefined;

  /**
   * If this parameter is specified and two update requests with identical payloads and `clientToken`s are received, these requests are considered the same request. Both requests will succeed, but the update will only happen once. A `clientToken` is valid for 8 hours.
   *
   * @public
   */
  clientToken?: string | undefined;
}

/**
 * @public
 */
export interface UpdateConsumableResourceResponse {
  /**
   * The name of the consumable resource to be updated.
   *
   * @public
   */
  consumableResourceName: string | undefined;

  /**
   * The Amazon Resource Name (ARN) of the consumable resource.
   *
   * @public
   */
  consumableResourceArn: string | undefined;

  /**
   * The total amount of the consumable resource that is available.
   *
   * @public
   */
  totalQuantity?: number | undefined;
}

/**
 * Contains the parameters for `UpdateJobQueue`.
 *
 * @public
 */
export interface UpdateJobQueueRequest {
  /**
   * The name or the Amazon Resource Name (ARN) of the job queue.
   *
   * @public
   */
  jobQueue: string | undefined;

  /**
   * Describes the queue's ability to accept new jobs. If the job queue state is `ENABLED`, it can accept jobs. If the job queue state is `DISABLED`, new jobs can't be added to the queue, but jobs already in the queue can finish.
   *
   * @public
   */
  state?: JQState | undefined;

  /**
   * Amazon Resource Name (ARN) of the fair-share scheduling policy. Once a job queue is created, the fair-share scheduling policy can be replaced but not removed. The format is `aws:Partition:batch:Region:Account:scheduling-policy/Name`. For example, `aws:aws:batch:us-west-2:123456789012:scheduling-policy/MySchedulingPolicy`.
   *
   * @public
   */
  schedulingPolicyArn?: string | undefined;

  /**
   * The priority of the job queue. Job queues with a higher priority (or a higher integer value for the `priority` parameter) are evaluated first when associated with the same compute environment. Priority is determined in descending order. For example, a job queue with a priority value of `10` is given scheduling preference over a job queue with a priority value of `1`. All of the compute environments must be either EC2 (`EC2` or `SPOT`) or Fargate (`FARGATE` or `FARGATE_SPOT`). EC2 and Fargate compute environments can't be mixed.
   *
   * @public
   */
  priority?: number | undefined;

  /**
   * Details the set of compute environments mapped to a job queue and their order relative to each other. This is one of the parameters used by the job scheduler to determine which compute environment runs a given job. Compute environments must be in the `VALID` state before you can associate them with a job queue. All of the compute environments must be either EC2 (`EC2` or `SPOT`) or Fargate (`FARGATE` or `FARGATE_SPOT`). EC2 and Fargate compute environments can't be mixed.
   *
   * > **Note:** All compute environments that are associated with a job queue must share the same architecture. Batch doesn't support mixing compute environment architecture types in a single job queue.
   *
   * @public
   */
  computeEnvironmentOrder?: ComputeEnvironmentOrder[] | undefined;

  /**
   * The order of the service environment associated with the job queue. Job queues with a higher priority are evaluated first when associated with the same service environment.
   *
   * @public
   */
  serviceEnvironmentOrder?: ServiceEnvironmentOrder[] | undefined;

  /**
   * The set of actions that Batch perform on jobs that remain at the head of the job queue in the specified state longer than specified times. Batch will perform each action after `maxTimeSeconds` has passed. (**Note**: The minimum value for maxTimeSeconds is 600 (10 minutes) and its maximum value is 86,400 (24 hours).)
   *
   * @public
   */
  jobStateTimeLimitActions?: JobStateTimeLimitAction[] | undefined;
}

/**
 * @public
 */
export interface UpdateJobQueueResponse {
  /**
   * The name of the job queue.
   *
   * @public
   */
  jobQueueName?: string | undefined;

  /**
   * The Amazon Resource Name (ARN) of the job queue.
   *
   * @public
   */
  jobQueueArn?: string | undefined;
}

/**
 * @public
 */
export interface UpdateQuotaShareRequest {
  /**
   * The Amazon Resource Name (ARN) of the quota share to update.
   *
   * @public
   */
  quotaShareArn: string | undefined;

  /**
   * A list that specifies the quantity and type of compute capacity allocated to the quota share.
   *
   * @public
   */
  capacityLimits?: QuotaShareCapacityLimit[] | undefined;

  /**
   * Specifies whether a quota share reserves, lends, or both lends and borrows idle compute capacity.
   *
   * @public
   */
  resourceSharingConfiguration?: QuotaShareResourceSharingConfiguration | undefined;

  /**
   * Specifies the preemption behavior for jobs in a quota share.
   *
   * @public
   */
  preemptionConfiguration?: QuotaSharePreemptionConfiguration | undefined;

  /**
   * The state of the quota share. If the quota share is `ENABLED`, it is able to accept jobs. If the quota share is `DISABLED`, new jobs won't be accepted but jobs already submitted can finish.
   *
   * @public
   */
  state?: QuotaShareState | undefined;
}

/**
 * @public
 */
export interface UpdateQuotaShareResponse {
  /**
   * The name of the quota share.
   *
   * @public
   */
  quotaShareName?: string | undefined;

  /**
   * The Amazon Resource Name (ARN) of the quota share.
   *
   * @public
   */
  quotaShareArn?: string | undefined;
}

/**
 * Contains the parameters for `UpdateSchedulingPolicy`.
 *
 * @public
 */
export interface UpdateSchedulingPolicyRequest {
  /**
   * The Amazon Resource Name (ARN) of the scheduling policy to update.
   *
   * @public
   */
  arn: string | undefined;

  /**
   * The quota share scheduling policy details. Once set during creation, a quotaSharePolicy cannot be removed or changed to a fairsharePolicy.
   *
   * @public
   */
  quotaSharePolicy?: QuotaSharePolicy | undefined;

  /**
   * The fair-share policy scheduling details. Once set during creation, a fairsharePolicy cannot be removed or changed to a quotaSharePolicy.
   *
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
   * The name or ARN of the service environment to update.
   *
   * @public
   */
  serviceEnvironment: string | undefined;

  /**
   * The state of the service environment.
   *
   * @public
   */
  state?: ServiceEnvironmentState | undefined;

  /**
   * The capacity limits for the service environment. This defines the maximum resources that can be used by service jobs in this environment.
   *
   * @public
   */
  capacityLimits?: CapacityLimit[] | undefined;
}

/**
 * @public
 */
export interface UpdateServiceEnvironmentResponse {
  /**
   * The name of the service environment that was updated.
   *
   * @public
   */
  serviceEnvironmentName: string | undefined;

  /**
   * The Amazon Resource Name (ARN) of the service environment that was updated.
   *
   * @public
   */
  serviceEnvironmentArn: string | undefined;
}

/**
 * @public
 */
export interface UpdateServiceJobRequest {
  /**
   * The Batch job ID of the job to update.
   *
   * @public
   */
  jobId: string | undefined;

  /**
   * The scheduling priority for the job. This only affects jobs in job queues with a quota-share or fair-share scheduling policy. Jobs with a higher scheduling priority are scheduled before jobs with a lower scheduling priority within a share.
   *
   * The minimum supported value is 0 and the maximum supported value is 9999.
   *
   * @public
   */
  schedulingPriority: number | undefined;
}

/**
 * @public
 */
export interface UpdateServiceJobResponse {
  /**
   * The Amazon Resource Name (ARN) for the job.
   *
   * @public
   */
  jobArn?: string | undefined;

  /**
   * The name of the job.
   *
   * @public
   */
  jobName?: string | undefined;

  /**
   * The unique identifier for the job.
   *
   * @public
   */
  jobId?: string | undefined;
}
