// smithy-typescript generated code
import type {
  AccountingMode,
  ClusterStatus,
  ComputeNodeGroupStatus,
  EndpointType,
  ExecutionPolicy,
  NetworkType,
  OnError,
  PurchaseOption,
  QueueStatus,
  SchedulerType,
  ScriptCachingPolicy,
  Size,
  SlurmRestMode,
  SpotAllocationStrategy,
} from "./enums";

/**
 * The accounting configuration includes configurable settings for Slurm accounting. It's a property of the **ClusterSlurmConfiguration** object.
 *
 * @public
 */
export interface Accounting {
  /**
   * The default value for all purge settings for `slurmdbd.conf`. For more information, see the [slurmdbd.conf documentation at SchedMD](https://slurm.schedmd.com/slurmdbd.conf.html).
   *
   * The default value for `defaultPurgeTimeInDays` is `-1`.
   *
   * A value of `-1` means there is no purge time and records persist as long as the cluster exists.
   *
   * > **Important:** `0` isn't a valid value.
   *
   * @public
   */
  defaultPurgeTimeInDays?: number | undefined;

  /**
   * The default value for `mode` is `NONE`. A value of `STANDARD` means Slurm accounting is enabled.
   *
   * @public
   */
  mode: AccountingMode | undefined;
}

/**
 * The accounting configuration includes configurable settings for Slurm accounting. It's a property of the **ClusterSlurmConfiguration** object.
 *
 * @public
 */
export interface AccountingRequest {
  /**
   * The default value for all purge settings for `slurmdbd.conf`. For more information, see the [slurmdbd.conf documentation at SchedMD](https://slurm.schedmd.com/slurmdbd.conf.html).
   *
   * The default value for `defaultPurgeTimeInDays` is `-1`.
   *
   * A value of `-1` means there is no purge time and records persist as long as the cluster exists.
   *
   * > **Important:** `0` isn't a valid value.
   *
   * @public
   */
  defaultPurgeTimeInDays?: number | undefined;

  /**
   * The default value for `mode` is `NONE`. A value of `STANDARD` means Slurm accounting is enabled.
   *
   * @public
   */
  mode: AccountingMode | undefined;
}

/**
 * An Amazon EC2 launch template PCS uses to launch compute nodes.
 *
 * @public
 */
export interface CustomLaunchTemplate {
  /**
   * The ID of the EC2 launch template to use to provision instances.
   *
   * Example: `lt-xxxx`
   *
   * @public
   */
  id: string | undefined;

  /**
   * The version of the EC2 launch template to use to provision instances.
   *
   * @public
   */
  version: string | undefined;
}

/**
 * An EC2 instance configuration PCS uses to launch compute nodes.
 *
 * @public
 */
export interface InstanceConfig {
  /**
   * The EC2 instance type that PCS can provision in the compute node group.
   *
   * Example: `t2.xlarge`
   *
   * @public
   */
  instanceType?: string | undefined;
}

/**
 * The source location and integrity information for a node lifecycle script.
 *
 * @public
 */
export interface ScriptSource {
  /**
   * The location of the script. Specify either an Amazon S3 URI in the format `s3://bucket-name/key` or an HTTPS URL.
   *
   * @public
   */
  scriptLocation: string | undefined;

  /**
   * The Amazon S3 version ID of the script. Use this value to pin the script to a specific version in a versioned Amazon S3 bucket. This value is only valid when `scriptLocation` is an Amazon S3 URI.
   *
   * @public
   */
  s3VersionId?: string | undefined;

  /**
   * The SHA-256 checksum of the script content, as a 64-character hexadecimal string. This value is optional. When specified, PCS uses this value to verify the integrity of the downloaded script.
   *
   * @public
   */
  checksum?: string | undefined;
}

/**
 * A script to run during a compute node lifecycle stage.
 *
 * @public
 */
export interface NodeLifecycleScript {
  /**
   * A unique name for the script. The name can be up to 64 characters long. Valid characters are letters, numbers, spaces, underscores (`_`), and hyphens (`-`). The first character must be a letter or a number.
   *
   * @public
   */
  name: string | undefined;

  /**
   * The source location and integrity information for the script.
   *
   * @public
   */
  scriptSource: ScriptSource | undefined;

  /**
   * The command-line arguments to pass to the script. You can specify up to 20 arguments, and each argument can be up to 256 characters long.
   *
   * @public
   */
  arguments?: string[] | undefined;

  /**
   * The behavior when the script fails. The default value is `TERMINATE`. Valid values:
   *
   * - `TERMINATE` – Terminates the compute node.
   * - `STOP_SEQUENCE` – Stops running subsequent scripts in the sequence but doesn't terminate the compute node.
   * - `CONTINUE` – Ignores the error and continues running the next script.
   *
   * @public
   */
  onError?: OnError | undefined;

  /**
   * The policy that determines when the script runs. The default value is `FIRST_BOOT_ONLY`. Valid values:
   *
   * - `FIRST_BOOT_ONLY` – Runs the script only the first time the compute node boots.
   * - `EVERY_BOOT` – Runs the script every time the compute node boots, including reboots.
   *
   * @public
   */
  executionPolicy?: ExecutionPolicy | undefined;
}

/**
 * The stages of a compute node's lifecycle where you can configure scripts to run.
 *
 * @public
 */
export interface NodeLifecycleStages {
  /**
   * The scripts to run after PCS finishes setting up the compute node and before the Slurm daemon (`slurmd`) starts. Use this stage for tasks that must complete before the node accepts jobs, such as mounting shared storage, configuring networking, or installing software packages.
   *
   * @public
   */
  nodeBootstrapped?: NodeLifecycleScript[] | undefined;

  /**
   * The scripts to run after the Slurm daemon (`slurmd`) starts and the compute node registers with the Slurm controller. Use this stage for tasks that require Slurm to be running, such as running Slurm commands.
   *
   * @public
   */
  nodeReady?: NodeLifecycleScript[] | undefined;
}

/**
 * The lifecycle actions to configure on a compute node group when you create it. Lifecycle actions define scripts that PCS runs on compute nodes at specific stages of their lifecycle.
 *
 * @public
 */
export interface NodeLifecycleActionsRequest {
  /**
   * The lifecycle stages where you configure scripts to run.
   *
   * @public
   */
  stages: NodeLifecycleStages | undefined;

  /**
   * The caching policy for node lifecycle scripts. The default value is `CACHE_ONCE`. Valid values:
   *
   * - `CACHE_ONCE` – Downloads each script once and reuses it on subsequent boots.
   * - `REFRESH_ON_REBOOT` – Downloads each script on every boot.
   *
   * @public
   */
  scriptCachingPolicy?: ScriptCachingPolicy | undefined;
}

/**
 * Specifies the boundaries of the compute node group auto scaling.
 *
 * @public
 */
export interface ScalingConfigurationRequest {
  /**
   * The lower bound of the number of instances allowed in the compute fleet.
   *
   * @public
   */
  minInstanceCount: number | undefined;

  /**
   * The upper bound of the number of instances allowed in the compute fleet.
   *
   * @public
   */
  maxInstanceCount: number | undefined;
}

/**
 * Additional settings that directly map to Slurm settings.
 *
 * > **Important:** PCS supports a subset of Slurm settings. For more information, see [Configuring custom Slurm settings in PCS](https://docs.aws.amazon.com/pcs/latest/userguide/slurm-custom-settings.html) in the *PCS User Guide*.
 *
 * @public
 */
export interface SlurmCustomSetting {
  /**
   * PCS supports custom Slurm settings for clusters, compute node groups, and queues. For more information, see [Configuring custom Slurm settings in PCS](https://docs.aws.amazon.com/pcs/latest/userguide/slurm-custom-settings.html) in the *PCS User Guide*.
   *
   * @public
   */
  parameterName: string | undefined;

  /**
   * The values for the configured Slurm settings.
   *
   * @public
   */
  parameterValue: string | undefined;
}

/**
 * Additional options related to the Slurm scheduler.
 *
 * @public
 */
export interface ComputeNodeGroupSlurmConfigurationRequest {
  /**
   * The time (in seconds) before an idle node is scaled down. If not specified, the cluster-level setting applies. This overrides the cluster-level `scaleDownIdleTimeInSeconds` setting. A value of `-1` removes the override and applies the cluster-level setting to this compute node group. Requires Slurm version 25.11 or later.
   *
   * @public
   */
  scaleDownIdleTimeInSeconds?: number | undefined;

  /**
   * Additional Slurm-specific configuration that directly maps to Slurm settings.
   *
   * @public
   */
  slurmCustomSettings?: SlurmCustomSetting[] | undefined;

  /**
   * The additional Slurm `gres.conf` records for the compute node group. Each item is a map of `gres.conf` attribute names to values that describes one `gres.conf` record, such as a GPU topology, MIG, MPS, or custom GRES entry. PCS adds the `NodeName=` prefix and merges these records with the GPU record it derives from the instance type.
   *
   * @public
   */
  gresCustomSettings?: Record<string, string>[] | undefined;
}

/**
 * Additional configuration when you specify `SPOT` as the `purchaseOption` for the `CreateComputeNodeGroup` API action.
 *
 * @public
 */
export interface SpotOptions {
  /**
   * The Amazon EC2 allocation strategy PCS uses to provision EC2 instances. PCS supports **lowest price**, **capacity optimized**, and **price capacity optimized**. For more information, see [Use allocation strategies to determine how EC2 Fleet or Spot Fleet fulfills Spot and On-Demand capacity](https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/spot-fleet-allocation-strategy.html) in the *Amazon Elastic Compute Cloud User Guide*. If you don't provide this option, it defaults to **price capacity optimized**.
   *
   * @public
   */
  allocationStrategy?: SpotAllocationStrategy | undefined;
}

/**
 * @public
 */
export interface CreateComputeNodeGroupRequest {
  /**
   * The name or ID of the cluster to create a compute node group in.
   *
   * @public
   */
  clusterIdentifier: string | undefined;

  /**
   * A name to identify the cluster. Example: `MyCluster`
   *
   * @public
   */
  computeNodeGroupName: string | undefined;

  /**
   * The ID of the Amazon Machine Image (AMI) that PCS uses to launch compute nodes (Amazon EC2 instances). If you don't provide this value, PCS uses the AMI ID specified in the custom launch template.
   *
   * @public
   */
  amiId?: string | undefined;

  /**
   * The list of subnet IDs where the compute node group launches instances. Subnets must be in the same VPC as the cluster.
   *
   * @public
   */
  subnetIds: string[] | undefined;

  /**
   * Specifies how EC2 instances are purchased on your behalf. PCS supports On-Demand Instances, Spot Instances, Interruptible Capacity Reservations, On-Demand Capacity Reservations, and Amazon EC2 Capacity Blocks for ML. For more information, see [Amazon EC2 billing and purchasing options](https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/instance-purchasing-options.html) in the *Amazon Elastic Compute Cloud User Guide*. For more information about PCS support for Capacity Blocks, see [Using Amazon EC2 Capacity Blocks for ML with PCS](https://docs.aws.amazon.com/pcs/latest/userguide/capacity-blocks.html) in the *PCS User Guide*. For more information about PCS support for interruptible capacity reservations, see [Using I-ODCRs with PCS](https://docs.aws.amazon.com/pcs/latest/userguide/capacity-reservations-iodcr.html) in the *PCS User Guide*. Choose On-Demand if you plan to use an On-Demand Capacity Reservation (ODCR). For more information, see [Using ODCRs with PCS](https://docs.aws.amazon.com/pcs/latest/userguide/capacity-reservations-odcr.html). If you don't provide this option, it defaults to On-Demand.
   *
   * @public
   */
  purchaseOption?: PurchaseOption | undefined;

  /**
   * An Amazon EC2 launch template PCS uses to launch compute nodes.
   *
   * @public
   */
  customLaunchTemplate: CustomLaunchTemplate | undefined;

  /**
   * The Amazon Resource Name (ARN) of the IAM instance profile used to pass an IAM role when launching EC2 instances. The role contained in your instance profile must have the `pcs:RegisterComputeNodeGroupInstance` permission and the role name must start with `AWSPCS` or must have the path `/aws-pcs/`. For more information, see [IAM instance profiles for PCS](https://docs.aws.amazon.com/pcs/latest/userguide/security-instance-profiles.html) in the *PCS User Guide*.
   *
   * @public
   */
  iamInstanceProfileArn: string | undefined;

  /**
   * Specifies the boundaries of the compute node group auto scaling.
   *
   * @public
   */
  scalingConfiguration: ScalingConfigurationRequest | undefined;

  /**
   * A list of EC2 instance configurations that PCS can provision in the compute node group.
   *
   * @public
   */
  instanceConfigs: InstanceConfig[] | undefined;

  /**
   * Additional configuration when you specify `SPOT` as the `purchaseOption` for the `CreateComputeNodeGroup` API action.
   *
   * @public
   */
  spotOptions?: SpotOptions | undefined;

  /**
   * Additional options related to the Slurm scheduler.
   *
   * @public
   */
  slurmConfiguration?: ComputeNodeGroupSlurmConfigurationRequest | undefined;

  /**
   * The lifecycle actions to run on compute nodes in the compute node group. Use lifecycle actions to run custom scripts at defined stages of a compute node's lifecycle, such as when a compute node finishes bootstrapping or becomes ready to accept jobs.
   *
   * @public
   */
  nodeLifecycleActions?: NodeLifecycleActionsRequest | undefined;

  /**
   * A unique, case-sensitive identifier that you provide to ensure the idempotency of the request. Idempotency ensures that an API request completes only once. With an idempotent request, if the original request completes successfully, the subsequent retries with the same client token return the result from the original successful request and they have no additional effect. If you don't specify a client token, the CLI and SDK automatically generate 1 for you.
   *
   * @public
   */
  clientToken?: string | undefined;

  /**
   * 1 or more tags added to the resource. Each tag consists of a tag key and tag value. The tag value is optional and can be an empty string.
   *
   * @public
   */
  tags?: Record<string, string> | undefined;
}

/**
 * An error that occurred during resource creation.
 *
 * @public
 */
export interface ErrorInfo {
  /**
   * The short-form error code.
   *
   * @public
   */
  code?: string | undefined;

  /**
   * The detailed error information.
   *
   * @public
   */
  message?: string | undefined;
}

/**
 * The lifecycle actions configured on a compute node group. Lifecycle actions define scripts that PCS runs on compute nodes at specific stages of their lifecycle.
 *
 * @public
 */
export interface NodeLifecycleActions {
  /**
   * The lifecycle stages where you configure scripts to run.
   *
   * @public
   */
  stages: NodeLifecycleStages | undefined;

  /**
   * The caching policy for node lifecycle scripts. The default value is `CACHE_ONCE`. Valid values:
   *
   * - `CACHE_ONCE` – Downloads each script once and reuses it on subsequent boots.
   * - `REFRESH_ON_REBOOT` – Downloads each script on every boot.
   *
   * @public
   */
  scriptCachingPolicy?: ScriptCachingPolicy | undefined;
}

/**
 * Specifies the boundaries of the compute node group auto scaling.
 *
 * @public
 */
export interface ScalingConfiguration {
  /**
   * The lower bound of the number of instances allowed in the compute fleet.
   *
   * @public
   */
  minInstanceCount: number | undefined;

  /**
   * The upper bound of the number of instances allowed in the compute fleet.
   *
   * @public
   */
  maxInstanceCount: number | undefined;
}

/**
 * Additional options related to the Slurm scheduler.
 *
 * @public
 */
export interface ComputeNodeGroupSlurmConfiguration {
  /**
   * The time (in seconds) before an idle node is scaled down. If not specified, the cluster-level setting applies. This overrides the cluster-level `scaleDownIdleTimeInSeconds` setting. A value of `-1` removes the override and applies the cluster-level setting to this compute node group. Requires Slurm version 25.11 or later.
   *
   * @public
   */
  scaleDownIdleTimeInSeconds?: number | undefined;

  /**
   * Additional Slurm-specific configuration that directly maps to Slurm settings.
   *
   * @public
   */
  slurmCustomSettings?: SlurmCustomSetting[] | undefined;

  /**
   * The additional Slurm `gres.conf` records for the compute node group. Each item is a map of `gres.conf` attribute names to values that describes one `gres.conf` record, such as a GPU topology, MIG, MPS, or custom GRES entry. PCS adds the `NodeName=` prefix and merges these records with the GPU record it derives from the instance type.
   *
   * @public
   */
  gresCustomSettings?: Record<string, string>[] | undefined;
}

/**
 * A compute node group associated with a cluster.
 *
 * @public
 */
export interface ComputeNodeGroup {
  /**
   * The name that identifies the compute node group.
   *
   * @public
   */
  name: string | undefined;

  /**
   * The generated unique ID of the compute node group.
   *
   * @public
   */
  id: string | undefined;

  /**
   * The unique Amazon Resource Name (ARN) of the compute node group.
   *
   * @public
   */
  arn: string | undefined;

  /**
   * The ID of the cluster of the compute node group.
   *
   * @public
   */
  clusterId: string | undefined;

  /**
   * The date and time the resource was created.
   *
   * @public
   */
  createdAt: Date | undefined;

  /**
   * The date and time the resource was modified.
   *
   * @public
   */
  modifiedAt: Date | undefined;

  /**
   * The provisioning status of the compute node group.
   *
   * > **Note:** The provisioning status doesn't indicate the overall health of the compute node group.
   *
   * > **Important:** The resource enters the `SUSPENDING` and `SUSPENDED` states when the scheduler is beyond end of life and we have suspended the cluster. When in these states, you can't use the cluster. The cluster controller is down and all compute instances are terminated. The resources still count toward your service quotas. You can delete a resource if its status is `SUSPENDED`. For more information, see [Frequently asked questions about Slurm versions in PCS](https://docs.aws.amazon.com/pcs/latest/userguide/slurm-versions_faq.html) in the *PCS User Guide*.
   *
   * @public
   */
  status: ComputeNodeGroupStatus | undefined;

  /**
   * The ID of the Amazon Machine Image (AMI) that PCS uses to launch instances. If not provided, PCS uses the AMI ID specified in the custom launch template.
   *
   * @public
   */
  amiId?: string | undefined;

  /**
   * The list of subnet IDs where instances are provisioned by the compute node group. The subnets must be in the same VPC as the cluster.
   *
   * @public
   */
  subnetIds: string[] | undefined;

  /**
   * Specifies how EC2 instances are purchased on your behalf. PCS supports On-Demand Instances, Spot Instances, Interruptible Capacity Reservations, On-Demand Capacity Reservations, and Amazon EC2 Capacity Blocks for ML. For more information, see [Amazon EC2 billing and purchasing options](https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/instance-purchasing-options.html) in the *Amazon Elastic Compute Cloud User Guide*. For more information about PCS support for Capacity Blocks, see [Using Amazon EC2 Capacity Blocks for ML with PCS](https://docs.aws.amazon.com/pcs/latest/userguide/capacity-blocks.html) in the *PCS User Guide*. For more information about PCS support for interruptible capacity reservations, see [Using I-ODCRs with PCS](https://docs.aws.amazon.com/pcs/latest/userguide/capacity-reservations-iodcr.html) in the *PCS User Guide*. Choose On-Demand if you plan to use an On-Demand Capacity Reservation (ODCR). For more information, see [Using ODCRs with PCS](https://docs.aws.amazon.com/pcs/latest/userguide/capacity-reservations-odcr.html). If you don't provide this option, it defaults to On-Demand.
   *
   * @public
   */
  purchaseOption?: PurchaseOption | undefined;

  /**
   * An Amazon EC2 launch template PCS uses to launch compute nodes.
   *
   * @public
   */
  customLaunchTemplate: CustomLaunchTemplate | undefined;

  /**
   * The Amazon Resource Name (ARN) of the IAM instance profile used to pass an IAM role when launching EC2 instances. The role contained in your instance profile must have the `pcs:RegisterComputeNodeGroupInstance` permission and the role name must start with `AWSPCS` or must have the path `/aws-pcs/`. For more information, see [IAM instance profiles for PCS](https://docs.aws.amazon.com/pcs/latest/userguide/security-instance-profiles.html) in the *PCS User Guide*.
   *
   * @public
   */
  iamInstanceProfileArn: string | undefined;

  /**
   * Specifies the boundaries of the compute node group auto scaling.
   *
   * @public
   */
  scalingConfiguration: ScalingConfiguration | undefined;

  /**
   * A list of EC2 instance configurations that PCS can provision in the compute node group.
   *
   * @public
   */
  instanceConfigs: InstanceConfig[] | undefined;

  /**
   * Additional configuration when you specify `SPOT` as the `purchaseOption` for the `CreateComputeNodeGroup` API action.
   *
   * @public
   */
  spotOptions?: SpotOptions | undefined;

  /**
   * Additional options related to the Slurm scheduler.
   *
   * @public
   */
  slurmConfiguration?: ComputeNodeGroupSlurmConfiguration | undefined;

  /**
   * The lifecycle actions to run on compute nodes in the compute node group. Use lifecycle actions to run custom scripts at defined stages of a compute node's lifecycle, such as when a compute node finishes bootstrapping or becomes ready to accept jobs.
   *
   * @public
   */
  nodeLifecycleActions?: NodeLifecycleActions | undefined;

  /**
   * The list of errors that occurred during compute node group provisioning.
   *
   * @public
   */
  errorInfo?: ErrorInfo[] | undefined;
}

/**
 * @public
 */
export interface CreateComputeNodeGroupResponse {
  /**
   * A compute node group associated with a cluster.
   *
   * @public
   */
  computeNodeGroup?: ComputeNodeGroup | undefined;
}

/**
 * Stores information about a field in a request that caused an exception.
 *
 * @public
 */
export interface ValidationExceptionField {
  /**
   * The name of the exception.
   *
   * @public
   */
  name: string | undefined;

  /**
   * The message body of the exception.
   *
   * @public
   */
  message: string | undefined;
}

/**
 * @public
 */
export interface DeleteComputeNodeGroupRequest {
  /**
   * The name or ID of the cluster of the compute node group.
   *
   * @public
   */
  clusterIdentifier: string | undefined;

  /**
   * The name or ID of the compute node group to delete.
   *
   * @public
   */
  computeNodeGroupIdentifier: string | undefined;

  /**
   * A unique, case-sensitive identifier that you provide to ensure the idempotency of the request. Idempotency ensures that an API request completes only once. With an idempotent request, if the original request completes successfully, the subsequent retries with the same client token return the result from the original successful request and they have no additional effect. If you don't specify a client token, the CLI and SDK automatically generate 1 for you.
   *
   * @public
   */
  clientToken?: string | undefined;
}

/**
 * @public
 */
export interface DeleteComputeNodeGroupResponse {}

/**
 * @public
 */
export interface GetComputeNodeGroupRequest {
  /**
   * The name or ID of the cluster.
   *
   * @public
   */
  clusterIdentifier: string | undefined;

  /**
   * The name or ID of the compute node group.
   *
   * @public
   */
  computeNodeGroupIdentifier: string | undefined;
}

/**
 * @public
 */
export interface GetComputeNodeGroupResponse {
  /**
   * A compute node group associated with a cluster.
   *
   * @public
   */
  computeNodeGroup?: ComputeNodeGroup | undefined;
}

/**
 * @public
 */
export interface ListComputeNodeGroupsRequest {
  /**
   * The name or ID of the cluster to list compute node groups for.
   *
   * @public
   */
  clusterIdentifier: string | undefined;

  /**
   * The value of `nextToken` is a unique pagination token for each page of results returned. If `nextToken` is returned, there are more results available. Make the call again using the returned token to retrieve the next page. Keep all other arguments unchanged. Each pagination token expires after 24 hours. Using an expired pagination token returns an `HTTP 400 InvalidToken` error.
   *
   * @public
   */
  nextToken?: string | undefined;

  /**
   * The maximum number of results that are returned per call. You can use `nextToken` to obtain further pages of results. The default is 10 results, and the maximum allowed page size is 100 results. A value of 0 uses the default.
   *
   * @public
   */
  maxResults?: number | undefined;
}

/**
 * The object returned by the `ListComputeNodeGroups` API action.
 *
 * @public
 */
export interface ComputeNodeGroupSummary {
  /**
   * The name that identifies the compute node group.
   *
   * @public
   */
  name: string | undefined;

  /**
   * The generated unique ID of the compute node group.
   *
   * @public
   */
  id: string | undefined;

  /**
   * The unique Amazon Resource Name (ARN) of the compute node group.
   *
   * @public
   */
  arn: string | undefined;

  /**
   * The ID of the cluster of the compute node group.
   *
   * @public
   */
  clusterId: string | undefined;

  /**
   * The date and time the resource was created.
   *
   * @public
   */
  createdAt: Date | undefined;

  /**
   * The date and time the resource was modified.
   *
   * @public
   */
  modifiedAt: Date | undefined;

  /**
   * The provisioning status of the compute node group.
   *
   * > **Note:** The provisioning status doesn't indicate the overall health of the compute node group.
   *
   * > **Important:** The resource enters the `SUSPENDING` and `SUSPENDED` states when the scheduler is beyond end of life and we have suspended the cluster. When in these states, you can't use the cluster. The cluster controller is down and all compute instances are terminated. The resources still count toward your service quotas. You can delete a resource if its status is `SUSPENDED`. For more information, see [Frequently asked questions about Slurm versions in PCS](https://docs.aws.amazon.com/pcs/latest/userguide/slurm-versions_faq.html) in the *PCS User Guide*.
   *
   * @public
   */
  status: ComputeNodeGroupStatus | undefined;
}

/**
 * @public
 */
export interface ListComputeNodeGroupsResponse {
  /**
   * The list of compute node groups for the cluster.
   *
   * @public
   */
  computeNodeGroups: ComputeNodeGroupSummary[] | undefined;

  /**
   * The value of `nextToken` is a unique pagination token for each page of results returned. If `nextToken` is returned, there are more results available. Make the call again using the returned token to retrieve the next page. Keep all other arguments unchanged. Each pagination token expires after 24 hours. Using an expired pagination token returns an `HTTP 400 InvalidToken` error.
   *
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * The lifecycle actions to configure on a compute node group when you update it. Lifecycle actions define scripts that PCS runs on compute nodes at specific stages of their lifecycle.
 *
 * @public
 */
export interface UpdateNodeLifecycleActionsRequest {
  /**
   * The lifecycle stages where you configure scripts to run.
   *
   * @public
   */
  stages: NodeLifecycleStages | undefined;

  /**
   * The caching policy for node lifecycle scripts. The default value is `CACHE_ONCE`. Valid values:
   *
   * - `CACHE_ONCE` – Downloads each script once and reuses it on subsequent boots.
   * - `REFRESH_ON_REBOOT` – Downloads each script on every boot.
   *
   * @public
   */
  scriptCachingPolicy?: ScriptCachingPolicy | undefined;
}

/**
 * Additional options related to the Slurm scheduler.
 *
 * @public
 */
export interface UpdateComputeNodeGroupSlurmConfigurationRequest {
  /**
   * The time (in seconds) before an idle node is scaled down. If not specified, the cluster-level setting applies. This overrides the cluster-level `scaleDownIdleTimeInSeconds` setting. A value of `-1` removes the override and applies the cluster-level setting to this compute node group. Requires Slurm version 25.11 or later.
   *
   * @public
   */
  scaleDownIdleTimeInSeconds?: number | undefined;

  /**
   * Additional Slurm-specific configuration that directly maps to Slurm settings.
   *
   * @public
   */
  slurmCustomSettings?: SlurmCustomSetting[] | undefined;

  /**
   * The additional Slurm `gres.conf` records for the compute node group. Each item is a map of `gres.conf` attribute names to values that describes one `gres.conf` record, such as a GPU topology, MIG, MPS, or custom GRES entry. PCS adds the `NodeName=` prefix and merges these records with the GPU record it derives from the instance type.
   *
   * @public
   */
  gresCustomSettings?: Record<string, string>[] | undefined;
}

/**
 * @public
 */
export interface UpdateComputeNodeGroupRequest {
  /**
   * The name or ID of the cluster of the compute node group.
   *
   * @public
   */
  clusterIdentifier: string | undefined;

  /**
   * The name or ID of the compute node group.
   *
   * @public
   */
  computeNodeGroupIdentifier: string | undefined;

  /**
   * The ID of the Amazon Machine Image (AMI) that PCS uses to launch instances. If not provided, PCS uses the AMI ID specified in the custom launch template.
   *
   * @public
   */
  amiId?: string | undefined;

  /**
   * The list of subnet IDs where the compute node group provisions instances. The subnets must be in the same VPC as the cluster.
   *
   * @public
   */
  subnetIds?: string[] | undefined;

  /**
   * An Amazon EC2 launch template PCS uses to launch compute nodes.
   *
   * @public
   */
  customLaunchTemplate?: CustomLaunchTemplate | undefined;

  /**
   * Specifies how EC2 instances are purchased on your behalf. PCS supports On-Demand Instances, Spot Instances, Interruptible Capacity Reservations, On-Demand Capacity Reservations, and Amazon EC2 Capacity Blocks for ML. For more information, see [Amazon EC2 billing and purchasing options](https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/instance-purchasing-options.html) in the *Amazon Elastic Compute Cloud User Guide*. For more information about PCS support for Capacity Blocks, see [Using Amazon EC2 Capacity Blocks for ML with PCS](https://docs.aws.amazon.com/pcs/latest/userguide/capacity-blocks.html) in the *PCS User Guide*. For more information about PCS support for interruptible capacity reservations, see [Using I-ODCRs with PCS](https://docs.aws.amazon.com/pcs/latest/userguide/capacity-reservations-iodcr.html) in the *PCS User Guide*. Choose On-Demand if you plan to use an On-Demand Capacity Reservation (ODCR). For more information, see [Using ODCRs with PCS](https://docs.aws.amazon.com/pcs/latest/userguide/capacity-reservations-odcr.html). If you don't provide this option, it defaults to On-Demand.
   *
   * @public
   */
  purchaseOption?: PurchaseOption | undefined;

  /**
   * Additional configuration when you specify `SPOT` as the `purchaseOption` for the `CreateComputeNodeGroup` API action.
   *
   * @public
   */
  spotOptions?: SpotOptions | undefined;

  /**
   * Specifies the boundaries of the compute node group auto scaling.
   *
   * @public
   */
  scalingConfiguration?: ScalingConfigurationRequest | undefined;

  /**
   * The Amazon Resource Name (ARN) of the IAM instance profile used to pass an IAM role when launching EC2 instances. The role contained in your instance profile must have the `pcs:RegisterComputeNodeGroupInstance` permission and the role name must start with `AWSPCS` or must have the path `/aws-pcs/`. For more information, see [IAM instance profiles for PCS](https://docs.aws.amazon.com/pcs/latest/userguide/security-instance-profiles.html) in the *PCS User Guide*.
   *
   * @public
   */
  iamInstanceProfileArn?: string | undefined;

  /**
   * Additional options related to the Slurm scheduler.
   *
   * @public
   */
  slurmConfiguration?: UpdateComputeNodeGroupSlurmConfigurationRequest | undefined;

  /**
   * The lifecycle actions to run on compute nodes in the compute node group. Use lifecycle actions to run custom scripts at defined stages of a compute node's lifecycle, such as when a compute node finishes bootstrapping or becomes ready to accept jobs.
   *
   * @public
   */
  nodeLifecycleActions?: UpdateNodeLifecycleActionsRequest | undefined;

  /**
   * A unique, case-sensitive identifier that you provide to ensure the idempotency of the request. Idempotency ensures that an API request completes only once. With an idempotent request, if the original request completes successfully, the subsequent retries with the same client token return the result from the original successful request and they have no additional effect. If you don't specify a client token, the CLI and SDK automatically generate 1 for you.
   *
   * @public
   */
  clientToken?: string | undefined;
}

/**
 * @public
 */
export interface UpdateComputeNodeGroupResponse {
  /**
   * A compute node group associated with a cluster.
   *
   * @public
   */
  computeNodeGroup?: ComputeNodeGroup | undefined;
}

/**
 * The networking configuration for the cluster's control plane.
 *
 * @public
 */
export interface NetworkingRequest {
  /**
   * The list of subnet IDs where PCS creates an Elastic Network Interface (ENI) to enable communication between managed controllers and PCS resources. Subnet IDs have the form `subnet-0123456789abcdef0`.
   *
   * Subnets can't be in Outposts, Wavelength or an Amazon Web Services Local Zone.
   *
   * > **Note:** PCS currently supports only 1 subnet in this list.
   *
   * @public
   */
  subnetIds?: string[] | undefined;

  /**
   * A list of security group IDs associated with the Elastic Network Interface (ENI) created in subnets.
   *
   * @public
   */
  securityGroupIds?: string[] | undefined;

  /**
   * The IP address version the cluster uses. The default is `IPV4`.
   *
   * @public
   */
  networkType?: NetworkType | undefined;
}

/**
 * The cluster management and job scheduling software associated with the cluster.
 *
 * @public
 */
export interface SchedulerRequest {
  /**
   * The software PCS uses to manage cluster scaling and job scheduling.
   *
   * @public
   */
  type: SchedulerType | undefined;

  /**
   * The version of the specified scheduling software that PCS uses to manage cluster scaling and job scheduling. For more information, see [Slurm versions in PCS](https://docs.aws.amazon.com/pcs/latest/userguide/slurm-versions.html) in the *PCS User Guide*.
   *
   * Valid Values: `24.11 | 25.05 | 25.11 | 26.05`
   *
   * @public
   */
  version: string | undefined;
}

/**
 * Additional settings that directly map to Cgroup settings.
 *
 * > **Important:** PCS supports a subset of Cgroup settings. For more information, see [Configuring custom Cgroup settings in PCS](https://docs.aws.amazon.com/pcs/latest/userguide/cgroup-custom-settings.html) in the *PCS User Guide*.
 *
 * @public
 */
export interface CgroupCustomSetting {
  /**
   * PCS supports custom Cgroup settings for clusters. For more information, see [Configuring custom Cgroup settings in PCS](https://docs.aws.amazon.com/pcs/latest/userguide/cgroup-custom-settings.html) in the *PCS User Guide*.
   *
   * @public
   */
  parameterName: string | undefined;

  /**
   * The values for the configured Cgroup settings.
   *
   * @public
   */
  parameterValue: string | undefined;
}

/**
 * Additional settings that directly map to SlurmDBD settings.
 *
 * > **Important:** PCS supports a subset of SlurmDBD settings. For more information, see [Configuring custom SlurmDBD settings in PCS](https://docs.aws.amazon.com/pcs/latest/userguide/slurmdbd-custom-settings.html) in the *PCS User Guide*.
 *
 * @public
 */
export interface SlurmdbdCustomSetting {
  /**
   * PCS supports custom SlurmDBD settings for clusters. For more information, see [Configuring custom SlurmDBD settings in PCS](https://docs.aws.amazon.com/pcs/latest/userguide/slurmdbd-custom-settings.html) in the *PCS User Guide*.
   *
   * @public
   */
  parameterName: string | undefined;

  /**
   * The values for the configured SlurmDBD settings.
   *
   * @public
   */
  parameterValue: string | undefined;
}

/**
 * The Slurm REST API configuration includes settings for enabling and configuring the Slurm REST API. It's a property of the **ClusterSlurmConfiguration** object.
 *
 * @public
 */
export interface SlurmRestRequest {
  /**
   * The default value for `mode` is `NONE`. A value of `STANDARD` means the Slurm REST API is enabled.
   *
   * @public
   */
  mode: SlurmRestMode | undefined;
}

/**
 * Additional options related to the Slurm scheduler.
 *
 * @public
 */
export interface ClusterSlurmConfigurationRequest {
  /**
   * The time (in seconds) before an idle node is scaled down.
   *
   * Default: `600`
   *
   * @public
   */
  scaleDownIdleTimeInSeconds?: number | undefined;

  /**
   * Additional Slurm-specific configuration that directly maps to Slurm settings.
   *
   * @public
   */
  slurmCustomSettings?: SlurmCustomSetting[] | undefined;

  /**
   * Additional SlurmDBD-specific configuration that directly maps to SlurmDBD settings.
   *
   * @public
   */
  slurmdbdCustomSettings?: SlurmdbdCustomSetting[] | undefined;

  /**
   * Additional Cgroup-specific configuration that directly maps to Cgroup settings.
   *
   * @public
   */
  cgroupCustomSettings?: CgroupCustomSetting[] | undefined;

  /**
   * The accounting configuration includes configurable settings for Slurm accounting.
   *
   * @public
   */
  accounting?: AccountingRequest | undefined;

  /**
   * The Slurm REST API configuration for the cluster.
   *
   * @public
   */
  slurmRest?: SlurmRestRequest | undefined;
}

/**
 * @public
 */
export interface CreateClusterRequest {
  /**
   * A name to identify the cluster. Example: `MyCluster`
   *
   * @public
   */
  clusterName: string | undefined;

  /**
   * The cluster management and job scheduling software associated with the cluster.
   *
   * @public
   */
  scheduler: SchedulerRequest | undefined;

  /**
   * A value that determines the maximum number of compute nodes in the cluster and the maximum number of jobs (active and queued).
   *
   * - `SMALL`: 32 compute nodes and 256 jobs
   * - `MEDIUM`: 512 compute nodes and 8192 jobs
   * - `LARGE`: 2048 compute nodes and 16,384 jobs
   *
   * @public
   */
  size: Size | undefined;

  /**
   * The networking configuration used to set up the cluster's control plane.
   *
   * @public
   */
  networking: NetworkingRequest | undefined;

  /**
   * Additional options related to the Slurm scheduler.
   *
   * @public
   */
  slurmConfiguration?: ClusterSlurmConfigurationRequest | undefined;

  /**
   * A unique, case-sensitive identifier that you provide to ensure the idempotency of the request. Idempotency ensures that an API request completes only once. With an idempotent request, if the original request completes successfully, the subsequent retries with the same client token return the result from the original successful request and they have no additional effect. If you don't specify a client token, the CLI and SDK automatically generate 1 for you.
   *
   * @public
   */
  clientToken?: string | undefined;

  /**
   * 1 or more tags added to the resource. Each tag consists of a tag key and tag value. The tag value is optional and can be an empty string.
   *
   * @public
   */
  tags?: Record<string, string> | undefined;
}

/**
 * An endpoint available for interaction with the scheduler.
 *
 * @public
 */
export interface Endpoint {
  /**
   * Indicates the type of endpoint running at the specific IP address.
   *
   * @public
   */
  type: EndpointType | undefined;

  /**
   * For clusters that use IPv4, this is the endpoint's private IP address.
   *
   * Example: `10.1.2.3`
   *
   * For clusters configured to use IPv6, this is an empty string.
   *
   * @public
   */
  privateIpAddress: string | undefined;

  /**
   * The endpoint's public IP address.
   *
   * Example: `192.0.2.1`
   *
   * @public
   */
  publicIpAddress?: string | undefined;

  /**
   * The endpoint's IPv6 address.
   *
   * Example: `2001:db8::1`
   *
   * @public
   */
  ipv6Address?: string | undefined;

  /**
   * The endpoint's connection port number.
   *
   * Example: `1234`
   *
   * @public
   */
  port: string | undefined;
}

/**
 * The networking configuration for the cluster's control plane.
 *
 * @public
 */
export interface Networking {
  /**
   * The ID of the subnet where PCS creates an Elastic Network Interface (ENI) to enable communication between managed controllers and PCS resources. The subnet must have an available IP address, cannot reside in Outposts, Wavelength, or an Amazon Web Services Local Zone.
   *
   * Example: `subnet-abcd1234`
   *
   * @public
   */
  subnetIds?: string[] | undefined;

  /**
   * The list of security group IDs associated with the Elastic Network Interface (ENI) created in subnets.
   *
   * The following rules are required:
   *
   * - Inbound rule 1
   *
   *   - Protocol: All
   *   - Ports: All
   *   - Source: Self
   * - Outbound rule 1
   *
   *   - Protocol: All
   *   - Ports: All
   *   - Destination: 0.0.0.0/0 (IPv4) or ::/0 (IPv6)
   * - Outbound rule 2
   *
   *   - Protocol: All
   *   - Ports: All
   *   - Destination: Self
   *
   * @public
   */
  securityGroupIds?: string[] | undefined;

  /**
   * The IP address version the cluster uses. The default is `IPV4`.
   *
   * @public
   */
  networkType?: NetworkType | undefined;
}

/**
 * The cluster management and job scheduling software associated with the cluster.
 *
 * @public
 */
export interface Scheduler {
  /**
   * The software PCS uses to manage cluster scaling and job scheduling.
   *
   * @public
   */
  type: SchedulerType | undefined;

  /**
   * The version of the specified scheduling software that PCS uses to manage cluster scaling and job scheduling. You can update this version using the `UpdateCluster` API action. For more information, see [Updating the scheduler version on a cluster](https://docs.aws.amazon.com/pcs/latest/userguide/working-with_clusters_version_update.html) and [Slurm versions in PCS](https://docs.aws.amazon.com/pcs/latest/userguide/slurm-versions.html) in the *PCS User Guide*.
   *
   * Valid Values: `23.11 | 24.05 | 24.11 | 25.05 | 25.11 | 26.05`
   *
   * @public
   */
  version: string | undefined;
}

/**
 * The shared Slurm key for authentication, also known as the **cluster secret**.
 *
 * @public
 */
export interface SlurmAuthKey {
  /**
   * The Amazon Resource Name (ARN) of the shared Slurm key.
   *
   * @public
   */
  secretArn: string | undefined;

  /**
   * The version of the shared Slurm key.
   *
   * @public
   */
  secretVersion: string | undefined;
}

/**
 * The JWT key stored in Amazon Web Services Secrets Manager for Slurm REST API authentication.
 *
 * @public
 */
export interface JwtKey {
  /**
   * The Amazon Resource Name (ARN) of the Amazon Web Services Secrets Manager secret containing the JWT key.
   *
   * @public
   */
  secretArn: string | undefined;

  /**
   * The version of the Amazon Web Services Secrets Manager secret containing the JWT key.
   *
   * @public
   */
  secretVersion: string | undefined;
}

/**
 * The JWT authentication configuration for Slurm REST API access.
 *
 * @public
 */
export interface JwtAuth {
  /**
   * The JWT key for Slurm REST API authentication.
   *
   * @public
   */
  jwtKey?: JwtKey | undefined;
}

/**
 * The Slurm REST API configuration includes settings for enabling and configuring the Slurm REST API. It's a property of the **ClusterSlurmConfiguration** object.
 *
 * @public
 */
export interface SlurmRest {
  /**
   * The default value for `mode` is `NONE`. A value of `STANDARD` means the Slurm REST API is enabled.
   *
   * @public
   */
  mode: SlurmRestMode | undefined;
}

/**
 * Additional options related to the Slurm scheduler.
 *
 * @public
 */
export interface ClusterSlurmConfiguration {
  /**
   * The time (in seconds) before an idle node is scaled down.
   *
   * Default: `600`
   *
   * @public
   */
  scaleDownIdleTimeInSeconds?: number | undefined;

  /**
   * Additional Slurm-specific configuration that directly maps to Slurm settings.
   *
   * @public
   */
  slurmCustomSettings?: SlurmCustomSetting[] | undefined;

  /**
   * Additional SlurmDBD-specific configuration that directly maps to SlurmDBD settings.
   *
   * @public
   */
  slurmdbdCustomSettings?: SlurmdbdCustomSetting[] | undefined;

  /**
   * Additional Cgroup-specific configuration that directly maps to Cgroup settings.
   *
   * @public
   */
  cgroupCustomSettings?: CgroupCustomSetting[] | undefined;

  /**
   * The shared Slurm key for authentication, also known as the **cluster secret**.
   *
   * @public
   */
  authKey?: SlurmAuthKey | undefined;

  /**
   * The JWT authentication configuration for Slurm REST API access.
   *
   * @public
   */
  jwtAuth?: JwtAuth | undefined;

  /**
   * The accounting configuration includes configurable settings for Slurm accounting.
   *
   * @public
   */
  accounting?: Accounting | undefined;

  /**
   * The Slurm REST API configuration for the cluster.
   *
   * @public
   */
  slurmRest?: SlurmRest | undefined;
}

/**
 * The cluster resource and configuration.
 *
 * @public
 */
export interface Cluster {
  /**
   * The name that identifies the cluster.
   *
   * @public
   */
  name: string | undefined;

  /**
   * The generated unique ID of the cluster.
   *
   * @public
   */
  id: string | undefined;

  /**
   * The unique Amazon Resource Name (ARN) of the cluster.
   *
   * @public
   */
  arn: string | undefined;

  /**
   * The provisioning status of the cluster.
   *
   * > **Note:** The provisioning status doesn't indicate the overall health of the cluster.
   *
   * > **Important:** The resource enters the `SUSPENDING` and `SUSPENDED` states when the scheduler is beyond end of life and we have suspended the cluster. When in these states, you can't use the cluster. The cluster controller is down and all compute instances are terminated. The resources still count toward your service quotas. You can delete a resource if its status is `SUSPENDED`. For more information, see [Frequently asked questions about Slurm versions in PCS](https://docs.aws.amazon.com/pcs/latest/userguide/slurm-versions_faq.html) in the *PCS User Guide*.
   *
   * @public
   */
  status: ClusterStatus | undefined;

  /**
   * The date and time the resource was created.
   *
   * @public
   */
  createdAt: Date | undefined;

  /**
   * The date and time the resource was modified.
   *
   * @public
   */
  modifiedAt: Date | undefined;

  /**
   * The cluster management and job scheduling software associated with the cluster.
   *
   * @public
   */
  scheduler: Scheduler | undefined;

  /**
   * The size of the cluster.
   *
   * - `SMALL`: 32 compute nodes and 256 jobs
   * - `MEDIUM`: 512 compute nodes and 8192 jobs
   * - `LARGE`: 2048 compute nodes and 16,384 jobs
   *
   * @public
   */
  size: Size | undefined;

  /**
   * Additional options related to the Slurm scheduler.
   *
   * @public
   */
  slurmConfiguration?: ClusterSlurmConfiguration | undefined;

  /**
   * The networking configuration for the cluster's control plane.
   *
   * @public
   */
  networking: Networking | undefined;

  /**
   * The list of endpoints available for interaction with the scheduler.
   *
   * @public
   */
  endpoints?: Endpoint[] | undefined;

  /**
   * The list of errors that occurred during cluster provisioning.
   *
   * @public
   */
  errorInfo?: ErrorInfo[] | undefined;
}

/**
 * @public
 */
export interface CreateClusterResponse {
  /**
   * The cluster resource.
   *
   * @public
   */
  cluster?: Cluster | undefined;
}

/**
 * @public
 */
export interface DeleteClusterRequest {
  /**
   * The name or ID of the cluster to delete.
   *
   * @public
   */
  clusterIdentifier: string | undefined;

  /**
   * A unique, case-sensitive identifier that you provide to ensure the idempotency of the request. Idempotency ensures that an API request completes only once. With an idempotent request, if the original request completes successfully, the subsequent retries with the same client token return the result from the original successful request and they have no additional effect. If you don't specify a client token, the CLI and SDK automatically generate 1 for you.
   *
   * @public
   */
  clientToken?: string | undefined;
}

/**
 * @public
 */
export interface DeleteClusterResponse {}

/**
 * @public
 */
export interface GetClusterRequest {
  /**
   * The name or ID of the cluster.
   *
   * @public
   */
  clusterIdentifier: string | undefined;
}

/**
 * @public
 */
export interface GetClusterResponse {
  /**
   * The cluster resource.
   *
   * @public
   */
  cluster?: Cluster | undefined;
}

/**
 * @public
 */
export interface ListClustersRequest {
  /**
   * The value of `nextToken` is a unique pagination token for each page of results returned. If `nextToken` is returned, there are more results available. Make the call again using the returned token to retrieve the next page. Keep all other arguments unchanged. Each pagination token expires after 24 hours. Using an expired pagination token returns an `HTTP 400 InvalidToken` error.
   *
   * @public
   */
  nextToken?: string | undefined;

  /**
   * The maximum number of results that are returned per call. You can use `nextToken` to obtain further pages of results. The default is 10 results, and the maximum allowed page size is 100 results. A value of 0 uses the default.
   *
   * @public
   */
  maxResults?: number | undefined;
}

/**
 * The object returned by the `ListClusters` API action.
 *
 * @public
 */
export interface ClusterSummary {
  /**
   * The name that identifies the cluster.
   *
   * @public
   */
  name: string | undefined;

  /**
   * The generated unique ID of the cluster.
   *
   * @public
   */
  id: string | undefined;

  /**
   * The unique Amazon Resource Name (ARN) of the cluster.
   *
   * @public
   */
  arn: string | undefined;

  /**
   * The date and time the resource was created.
   *
   * @public
   */
  createdAt: Date | undefined;

  /**
   * The date and time the resource was modified.
   *
   * @public
   */
  modifiedAt: Date | undefined;

  /**
   * The provisioning status of the cluster.
   *
   * > **Note:** The provisioning status doesn't indicate the overall health of the cluster.
   *
   * > **Important:** The resource enters the `SUSPENDING` and `SUSPENDED` states when the scheduler is beyond end of life and we have suspended the cluster. When in these states, you can't use the cluster. The cluster controller is down and all compute instances are terminated. The resources still count toward your service quotas. You can delete a resource if its status is `SUSPENDED`. For more information, see [Frequently asked questions about Slurm versions in PCS](https://docs.aws.amazon.com/pcs/latest/userguide/slurm-versions_faq.html) in the *PCS User Guide*.
   *
   * @public
   */
  status: ClusterStatus | undefined;
}

/**
 * @public
 */
export interface ListClustersResponse {
  /**
   * The list of clusters.
   *
   * @public
   */
  clusters: ClusterSummary[] | undefined;

  /**
   * The value of `nextToken` is a unique pagination token for each page of results returned. If `nextToken` is returned, there are more results available. Make the call again using the returned token to retrieve the next page. Keep all other arguments unchanged. Each pagination token expires after 24 hours. Using an expired pagination token returns an `HTTP 400 InvalidToken` error.
   *
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * The compute node group configuration for a queue.
 *
 * @public
 */
export interface ComputeNodeGroupConfiguration {
  /**
   * The compute node group ID for the compute node group configuration.
   *
   * @public
   */
  computeNodeGroupId?: string | undefined;
}

/**
 * Additional options related to the Slurm scheduler.
 *
 * @public
 */
export interface QueueSlurmConfigurationRequest {
  /**
   * Additional Slurm-specific configuration that directly maps to Slurm settings.
   *
   * @public
   */
  slurmCustomSettings?: SlurmCustomSetting[] | undefined;
}

/**
 * @public
 */
export interface CreateQueueRequest {
  /**
   * The name or ID of the cluster for which to create a queue.
   *
   * @public
   */
  clusterIdentifier: string | undefined;

  /**
   * A name to identify the queue.
   *
   * @public
   */
  queueName: string | undefined;

  /**
   * The list of compute node group configurations to associate with the queue. Queues assign jobs to associated compute node groups.
   *
   * @public
   */
  computeNodeGroupConfigurations?: ComputeNodeGroupConfiguration[] | undefined;

  /**
   * Additional options related to the Slurm scheduler.
   *
   * @public
   */
  slurmConfiguration?: QueueSlurmConfigurationRequest | undefined;

  /**
   * A unique, case-sensitive identifier that you provide to ensure the idempotency of the request. Idempotency ensures that an API request completes only once. With an idempotent request, if the original request completes successfully, the subsequent retries with the same client token return the result from the original successful request and they have no additional effect. If you don't specify a client token, the CLI and SDK automatically generate 1 for you.
   *
   * @public
   */
  clientToken?: string | undefined;

  /**
   * 1 or more tags added to the resource. Each tag consists of a tag key and tag value. The tag value is optional and can be an empty string.
   *
   * @public
   */
  tags?: Record<string, string> | undefined;
}

/**
 * Additional options related to the Slurm scheduler.
 *
 * @public
 */
export interface QueueSlurmConfiguration {
  /**
   * Additional Slurm-specific configuration that directly maps to Slurm settings.
   *
   * @public
   */
  slurmCustomSettings?: SlurmCustomSetting[] | undefined;
}

/**
 * A queue resource.
 *
 * @public
 */
export interface Queue {
  /**
   * The name that identifies the queue.
   *
   * @public
   */
  name: string | undefined;

  /**
   * The generated unique ID of the queue.
   *
   * @public
   */
  id: string | undefined;

  /**
   * The unique Amazon Resource Name (ARN) of the queue.
   *
   * @public
   */
  arn: string | undefined;

  /**
   * The ID of the cluster of the queue.
   *
   * @public
   */
  clusterId: string | undefined;

  /**
   * The date and time the resource was created.
   *
   * @public
   */
  createdAt: Date | undefined;

  /**
   * The date and time the resource was modified.
   *
   * @public
   */
  modifiedAt: Date | undefined;

  /**
   * The provisioning status of the queue.
   *
   * > **Note:** The provisioning status doesn't indicate the overall health of the queue.
   *
   * > **Important:** The resource enters the `SUSPENDING` and `SUSPENDED` states when the scheduler is beyond end of life and we have suspended the cluster. When in these states, you can't use the cluster. The cluster controller is down and all compute instances are terminated. The resources still count toward your service quotas. You can delete a resource if its status is `SUSPENDED`. For more information, see [Frequently asked questions about Slurm versions in PCS](https://docs.aws.amazon.com/pcs/latest/userguide/slurm-versions_faq.html) in the *PCS User Guide*.
   *
   * @public
   */
  status: QueueStatus | undefined;

  /**
   * The list of compute node group configurations associated with the queue. Queues assign jobs to associated compute node groups.
   *
   * @public
   */
  computeNodeGroupConfigurations: ComputeNodeGroupConfiguration[] | undefined;

  /**
   * Additional options related to the Slurm scheduler.
   *
   * @public
   */
  slurmConfiguration?: QueueSlurmConfiguration | undefined;

  /**
   * The list of errors that occurred during queue provisioning.
   *
   * @public
   */
  errorInfo?: ErrorInfo[] | undefined;
}

/**
 * @public
 */
export interface CreateQueueResponse {
  /**
   * A queue resource.
   *
   * @public
   */
  queue?: Queue | undefined;
}

/**
 * @public
 */
export interface DeleteQueueRequest {
  /**
   * The name or ID of the cluster of the queue.
   *
   * @public
   */
  clusterIdentifier: string | undefined;

  /**
   * The name or ID of the queue to delete.
   *
   * @public
   */
  queueIdentifier: string | undefined;

  /**
   * A unique, case-sensitive identifier that you provide to ensure the idempotency of the request. Idempotency ensures that an API request completes only once. With an idempotent request, if the original request completes successfully, the subsequent retries with the same client token return the result from the original successful request and they have no additional effect. If you don't specify a client token, the CLI and SDK automatically generate 1 for you.
   *
   * @public
   */
  clientToken?: string | undefined;
}

/**
 * @public
 */
export interface DeleteQueueResponse {}

/**
 * @public
 */
export interface GetQueueRequest {
  /**
   * The name or ID of the cluster of the queue.
   *
   * @public
   */
  clusterIdentifier: string | undefined;

  /**
   * The name or ID of the queue.
   *
   * @public
   */
  queueIdentifier: string | undefined;
}

/**
 * @public
 */
export interface GetQueueResponse {
  /**
   * A queue resource.
   *
   * @public
   */
  queue?: Queue | undefined;
}

/**
 * @public
 */
export interface ListQueuesRequest {
  /**
   * The name or ID of the cluster to list queues for.
   *
   * @public
   */
  clusterIdentifier: string | undefined;

  /**
   * The value of `nextToken` is a unique pagination token for each page of results returned. If `nextToken` is returned, there are more results available. Make the call again using the returned token to retrieve the next page. Keep all other arguments unchanged. Each pagination token expires after 24 hours. Using an expired pagination token returns an `HTTP 400 InvalidToken` error.
   *
   * @public
   */
  nextToken?: string | undefined;

  /**
   * The maximum number of results that are returned per call. You can use `nextToken` to obtain further pages of results. The default is 10 results, and the maximum allowed page size is 100 results. A value of 0 uses the default.
   *
   * @public
   */
  maxResults?: number | undefined;
}

/**
 * The object returned by the `ListQueues` API action.
 *
 * @public
 */
export interface QueueSummary {
  /**
   * The name that identifies the queue.
   *
   * @public
   */
  name: string | undefined;

  /**
   * The generated unique ID of the queue.
   *
   * @public
   */
  id: string | undefined;

  /**
   * The unique Amazon Resource Name (ARN) of the queue.
   *
   * @public
   */
  arn: string | undefined;

  /**
   * The ID of the cluster of the queue.
   *
   * @public
   */
  clusterId: string | undefined;

  /**
   * The date and time the resource was created.
   *
   * @public
   */
  createdAt: Date | undefined;

  /**
   * The date and time the resource was modified.
   *
   * @public
   */
  modifiedAt: Date | undefined;

  /**
   * The provisioning status of the queue.
   *
   * > **Note:** The provisioning status doesn't indicate the overall health of the queue.
   *
   * > **Important:** The resource enters the `SUSPENDING` and `SUSPENDED` states when the scheduler is beyond end of life and we have suspended the cluster. When in these states, you can't use the cluster. The cluster controller is down and all compute instances are terminated. The resources still count toward your service quotas. You can delete a resource if its status is `SUSPENDED`. For more information, see [Frequently asked questions about Slurm versions in PCS](https://docs.aws.amazon.com/pcs/latest/userguide/slurm-versions_faq.html) in the *PCS User Guide*.
   *
   * @public
   */
  status: QueueStatus | undefined;
}

/**
 * @public
 */
export interface ListQueuesResponse {
  /**
   * The list of queues associated with the cluster.
   *
   * @public
   */
  queues: QueueSummary[] | undefined;

  /**
   * The value of `nextToken` is a unique pagination token for each page of results returned. If `nextToken` is returned, there are more results available. Make the call again using the returned token to retrieve the next page. Keep all other arguments unchanged. Each pagination token expires after 24 hours. Using an expired pagination token returns an `HTTP 400 InvalidToken` error.
   *
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * Additional options related to the Slurm scheduler.
 *
 * @public
 */
export interface UpdateQueueSlurmConfigurationRequest {
  /**
   * Additional Slurm-specific configuration that directly maps to Slurm settings.
   *
   * @public
   */
  slurmCustomSettings?: SlurmCustomSetting[] | undefined;
}

/**
 * @public
 */
export interface UpdateQueueRequest {
  /**
   * The name or ID of the cluster of the queue.
   *
   * @public
   */
  clusterIdentifier: string | undefined;

  /**
   * The name or ID of the queue.
   *
   * @public
   */
  queueIdentifier: string | undefined;

  /**
   * The list of compute node group configurations to associate with the queue. Queues assign jobs to associated compute node groups.
   *
   * @public
   */
  computeNodeGroupConfigurations?: ComputeNodeGroupConfiguration[] | undefined;

  /**
   * Additional options related to the Slurm scheduler.
   *
   * @public
   */
  slurmConfiguration?: UpdateQueueSlurmConfigurationRequest | undefined;

  /**
   * A unique, case-sensitive identifier that you provide to ensure the idempotency of the request. Idempotency ensures that an API request completes only once. With an idempotent request, if the original request completes successfully, the subsequent retries with the same client token return the result from the original successful request and they have no additional effect. If you don't specify a client token, the CLI and SDK automatically generate 1 for you.
   *
   * @public
   */
  clientToken?: string | undefined;
}

/**
 * @public
 */
export interface UpdateQueueResponse {
  /**
   * A queue resource.
   *
   * @public
   */
  queue?: Queue | undefined;
}

/**
 * @public
 */
export interface RegisterComputeNodeGroupInstanceRequest {
  /**
   * The name or ID of the cluster to register the compute node group instance in.
   *
   * @public
   */
  clusterIdentifier: string | undefined;

  /**
   * The client-generated token to allow for retries.
   *
   * @public
   */
  bootstrapId: string | undefined;
}

/**
 * @public
 */
export interface RegisterComputeNodeGroupInstanceResponse {
  /**
   * The scheduler node ID for this instance.
   *
   * @public
   */
  nodeID: string | undefined;

  /**
   * For the Slurm scheduler, this is the shared Munge key the scheduler uses to authenticate compute node group instances.
   *
   * @public
   */
  sharedSecret: string | undefined;

  /**
   * The list of endpoints available for interaction with the scheduler.
   *
   * @public
   */
  endpoints: Endpoint[] | undefined;

  /**
   * The name of the cluster that the compute node registered into.
   *
   * @public
   */
  clusterName?: string | undefined;

  /**
   * The ID of the compute node group that the compute node registered into.
   *
   * @public
   */
  computeNodeGroupId?: string | undefined;

  /**
   * The name of the compute node group that the compute node registered into.
   *
   * @public
   */
  computeNodeGroupName?: string | undefined;

  /**
   * The node lifecycle actions configured for the node group, including scripts to run when a compute node finishes bootstrapping or becomes ready to accept jobs.
   *
   * @public
   */
  nodeLifecycleActions?: NodeLifecycleActions | undefined;

  /**
   * The scheduler version that the cluster is running. A compute node uses this value to run the matching scheduler version.
   *
   * @public
   */
  schedulerVersion?: string | undefined;
}

/**
 * The scheduler configuration for updating a cluster. Use this to specify the scheduler version to update to.
 *
 * @public
 */
export interface UpdateSchedulerRequest {
  /**
   * The scheduler version to update the cluster to. You can only update to a newer version. For more information about supported versions and update paths, see [Updating the scheduler version on a cluster](https://docs.aws.amazon.com/pcs/latest/userguide/working-with_clusters_version_update.html) in the *PCS User Guide*.
   *
   * Valid Values: `24.05 | 24.11 | 25.05 | 25.11 | 26.05`
   *
   * @public
   */
  version: string | undefined;
}

/**
 * The accounting configuration includes configurable settings for Slurm accounting.
 *
 * @public
 */
export interface UpdateAccountingRequest {
  /**
   * The default value for all purge settings for `slurmdbd.conf`. For more information, see the [slurmdbd.conf documentation at SchedMD](https://slurm.schedmd.com/slurmdbd.conf.html).
   *
   * The default value for `defaultPurgeTimeInDays` is `-1`.
   *
   * A value of `-1` means there is no purge time and records persist as long as the cluster exists.
   *
   * > **Important:** `0` isn't a valid value.
   *
   * @public
   */
  defaultPurgeTimeInDays?: number | undefined;

  /**
   * The default value for `mode` is `NONE`. A value of `STANDARD` means Slurm accounting is enabled.
   *
   * @public
   */
  mode?: AccountingMode | undefined;
}

/**
 * The Slurm REST API configuration includes settings for enabling and configuring the Slurm REST API.
 *
 * @public
 */
export interface UpdateSlurmRestRequest {
  /**
   * The default value for `mode` is `NONE`. A value of `STANDARD` means the Slurm REST API is enabled.
   *
   * @public
   */
  mode?: SlurmRestMode | undefined;
}

/**
 * Additional options related to the Slurm scheduler.
 *
 * @public
 */
export interface UpdateClusterSlurmConfigurationRequest {
  /**
   * The time (in seconds) before an idle node is scaled down.
   *
   * Default: `600`
   *
   * @public
   */
  scaleDownIdleTimeInSeconds?: number | undefined;

  /**
   * Additional Slurm-specific configuration that directly maps to Slurm settings.
   *
   * @public
   */
  slurmCustomSettings?: SlurmCustomSetting[] | undefined;

  /**
   * Additional SlurmDBD-specific configuration that directly maps to SlurmDBD settings.
   *
   * @public
   */
  slurmdbdCustomSettings?: SlurmdbdCustomSetting[] | undefined;

  /**
   * Additional Cgroup-specific configuration that directly maps to Cgroup settings.
   *
   * @public
   */
  cgroupCustomSettings?: CgroupCustomSetting[] | undefined;

  /**
   * The accounting configuration includes configurable settings for Slurm accounting.
   *
   * @public
   */
  accounting?: UpdateAccountingRequest | undefined;

  /**
   * The Slurm REST API configuration for the cluster.
   *
   * @public
   */
  slurmRest?: UpdateSlurmRestRequest | undefined;
}

/**
 * @public
 */
export interface UpdateClusterRequest {
  /**
   * The name or ID of the cluster to update.
   *
   * @public
   */
  clusterIdentifier: string | undefined;

  /**
   * A unique, case-sensitive identifier that you provide to ensure the idempotency of the request. Idempotency ensures that an API request completes only once. With an idempotent request, if the original request completes successfully, the subsequent retries with the same client token return the result from the original successful request and they have no additional effect. If you don't specify a client token, the CLI and SDK automatically generate 1 for you.
   *
   * @public
   */
  clientToken?: string | undefined;

  /**
   * Additional options related to the Slurm scheduler.
   *
   * @public
   */
  slurmConfiguration?: UpdateClusterSlurmConfigurationRequest | undefined;

  /**
   * The scheduler configuration to update for the cluster. Use this to update the scheduler version. For more information, see [Updating the scheduler version on a cluster](https://docs.aws.amazon.com/pcs/latest/userguide/working-with_clusters_version_update.html) in the *PCS User Guide*.
   *
   * @public
   */
  scheduler?: UpdateSchedulerRequest | undefined;
}

/**
 * @public
 */
export interface UpdateClusterResponse {
  /**
   * The cluster resource and configuration.
   *
   * @public
   */
  cluster?: Cluster | undefined;
}

/**
 * @public
 */
export interface ListTagsForResourceRequest {
  /**
   * The Amazon Resource Name (ARN) of the resource for which to list tags.
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
   * 1 or more tags added to the resource. Each tag consists of a tag key and tag value. The tag value is optional and can be an empty string.
   *
   * @public
   */
  tags?: Record<string, string> | undefined;
}

/**
 * @public
 */
export interface TagResourceRequest {
  /**
   * The Amazon Resource Name (ARN) of the resource.
   *
   * @public
   */
  resourceArn: string | undefined;

  /**
   * 1 or more tags added to the resource. Each tag consists of a tag key and tag value. The tag value is optional and can be an empty string.
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
 * @public
 */
export interface UntagResourceRequest {
  /**
   * The Amazon Resource Name (ARN) of the resource.
   *
   * @public
   */
  resourceArn: string | undefined;

  /**
   * 1 or more tag keys to remove from the resource. Specify only tag keys and not tag values.
   *
   * @public
   */
  tagKeys: string[] | undefined;
}

/**
 * @public
 */
export interface UntagResourceResponse {}
