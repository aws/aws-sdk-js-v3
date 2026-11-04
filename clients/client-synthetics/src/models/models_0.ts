// smithy-typescript generated code
import type {
  BrowserType,
  CanaryRunState,
  CanaryRunStateReasonCode,
  CanaryRunTestResult,
  CanaryState,
  CanaryStateReasonCode,
  DependencyType,
  EncryptionMode,
  LocationType,
  ProvisionedResourceCleanupSetting,
  ReplicationState,
  ResourceToTag,
  RunType,
} from "./enums";

/**
 * If this canary is to test an endpoint in a VPC, this structure contains information about the subnets and security groups of the VPC endpoint. For more information, see [Running a Canary in a VPC](https://docs.aws.amazon.com/AmazonCloudWatch/latest/monitoring/CloudWatch_Synthetics_Canaries_VPC.html).
 *
 * @public
 */
export interface VpcConfigInput {
  /**
   * The IDs of the subnets where this canary is to run.
   *
   * @public
   */
  SubnetIds?: string[] | undefined;

  /**
   * The IDs of the security groups for this canary.
   *
   * @public
   */
  SecurityGroupIds?: string[] | undefined;

  /**
   * Set this to `true` to allow outbound IPv6 traffic on VPC canaries that are connected to dual-stack subnets. The default is `false`
   *
   * @public
   */
  Ipv6AllowedForDualStack?: boolean | undefined;
}

/**
 * A structure that specifies a replica location for a canary, including the Region and optional VPC configuration.
 *
 * @public
 */
export interface AddReplicaLocationInput {
  /**
   * The Amazon Web Services Region where the canary replica should be created, for example `us-east-1`.
   *
   * @public
   */
  Location: string | undefined;

  /**
   * The VPC configuration to use for the canary replica in this location. If not specified, the replica runs without VPC connectivity.
   *
   * @public
   */
  VpcConfig?: VpcConfigInput | undefined;

  /**
   * The Amazon Resource Name (ARN) of the customer-managed AWS Key Management Service (AWS KMS) key used to encrypt the canary replica's AWS Lambda function environment variables at rest. If you don't specify a value, the service uses an AWS-managed key.
   *
   * @public
   */
  KmsKeyArn?: string | undefined;
}

/**
 * A structure that contains the configuration of encryption-at-rest settings for canary artifacts that the canary uploads to Amazon S3.
 *
 * For more information, see [Encrypting canary artifacts](https://docs.aws.amazon.com/AmazonCloudWatch/latest/monitoring/CloudWatch_Synthetics_artifact_encryption.html)
 *
 * @public
 */
export interface S3EncryptionConfig {
  /**
   * The encryption method to use for artifacts created by this canary. Specify `SSE_S3` to use server-side encryption (SSE) with an Amazon S3-managed key. Specify `SSE-KMS` to use server-side encryption with a customer-managed KMS key.
   *
   * If you omit this parameter, an Amazon Web Services-managed KMS key is used.
   *
   * @public
   */
  EncryptionMode?: EncryptionMode | undefined;

  /**
   * The ARN of the customer-managed KMS key to use, if you specify `SSE-KMS` for `EncryptionMode`
   *
   * @public
   */
  KmsKeyArn?: string | undefined;
}

/**
 * A structure that contains the configuration for canary artifacts, including the encryption-at-rest settings for artifacts that the canary uploads to Amazon S3.
 *
 * @public
 */
export interface ArtifactConfigInput {
  /**
   * A structure that contains the configuration of the encryption-at-rest settings for artifacts that the canary uploads to Amazon S3. Artifact encryption functionality is available only for canaries that use Synthetics runtime version syn-nodejs-puppeteer-3.3 or later. For more information, see [Encrypting canary artifacts](https://docs.aws.amazon.com/AmazonCloudWatch/latest/monitoring/CloudWatch_Synthetics_artifact_encryption.html)
   *
   * @public
   */
  S3Encryption?: S3EncryptionConfig | undefined;
}

/**
 * A structure that contains the configuration for canary artifacts, including the encryption-at-rest settings for artifacts that the canary uploads to Amazon S3.
 *
 * @public
 */
export interface ArtifactConfigOutput {
  /**
   * A structure that contains the configuration of encryption settings for canary artifacts that are stored in Amazon S3.
   *
   * @public
   */
  S3Encryption?: S3EncryptionConfig | undefined;
}

/**
 * @public
 */
export interface AssociateResourceRequest {
  /**
   * Specifies the group. You can specify the group name, the ARN, or the group ID as the `GroupIdentifier`.
   *
   * @public
   */
  GroupIdentifier: string | undefined;

  /**
   * The ARN of the canary that you want to associate with the specified group.
   *
   * @public
   */
  ResourceArn: string | undefined;
}

/**
 * @public
 */
export interface AssociateResourceResponse {}

/**
 * A structure representing a screenshot that is used as a baseline during visual monitoring comparisons made by the canary.
 *
 * @public
 */
export interface BaseScreenshot {
  /**
   * The name of the screenshot. This is generated the first time the canary is run after the `UpdateCanary` operation that specified for this canary to perform visual monitoring.
   *
   * @public
   */
  ScreenshotName: string | undefined;

  /**
   * Coordinates that define the part of a screen to ignore during screenshot comparisons. To obtain the coordinates to use here, use the CloudWatch console to draw the boundaries on the screen. For more information, see [Editing or deleting a canary](https://docs.aws.amazon.com/AmazonCloudWatch/latest/monitoring/synthetics_canaries_deletion.html)
   *
   * @public
   */
  IgnoreCoordinates?: string[] | undefined;
}

/**
 * A structure that specifies the browser type to use for a canary run.
 *
 * @public
 */
export interface BrowserConfig {
  /**
   * The browser type associated with this browser configuration.
   *
   * @public
   */
  BrowserType?: BrowserType | undefined;
}

/**
 * A structure that contains information about a dependency for a canary.
 *
 * @public
 */
export interface Dependency {
  /**
   * The type of dependency. Valid value is `LambdaLayer`.
   *
   * @public
   */
  Type?: DependencyType | undefined;

  /**
   * The dependency reference. For Lambda layers, this is the ARN of the Lambda layer. For more information about Lambda ARN format, see [Lambda](https://docs.aws.amazon.com/lambda/latest/api/API_Layer.html).
   *
   * @public
   */
  Reference: string | undefined;
}

/**
 * This structure contains information about the canary's Lambda handler and where its code is stored by CloudWatch Synthetics.
 *
 * @public
 */
export interface CanaryCodeOutput {
  /**
   * The ARN of the Lambda layer where Synthetics stores the canary script code.
   *
   * @public
   */
  SourceLocationArn?: string | undefined;

  /**
   * The entry point to use for the source code when running the canary.
   *
   * This field is required when you don't specify `BlueprintTypes` and is not allowed when you specify `BlueprintTypes`.
   *
   * @public
   */
  Handler?: string | undefined;

  /**
   * `BlueprintTypes` is a list of templates that enable simplified canary creation. You can create canaries for common monitoring scenarios by providing only a JSON configuration file instead of writing custom scripts. The only supported value is `multi-checks`.
   *
   * Multi-checks monitors HTTP/DNS/SSL/TCP endpoints with built-in authentication schemes (Basic, API Key, OAuth, SigV4) and assertion capabilities. When you specify `BlueprintTypes`, the `Handler` field cannot be specified since the blueprint provides a pre-defined entry point.
   *
   * `BlueprintTypes` is supported only on canaries for syn-nodejs-3.0 runtime or later.
   *
   * @public
   */
  BlueprintTypes?: string[] | undefined;

  /**
   * A list of dependencies that are used for running this canary. The dependencies are specified as a key-value pair, where the key is the type of dependency and the value is the dependency reference.
   *
   * @public
   */
  Dependencies?: Dependency[] | undefined;
}

/**
 * Returns the dry run configurations set for a canary.
 *
 * @public
 */
export interface DryRunConfigOutput {
  /**
   * The DryRunId associated with an existing canary’s dry run. You can use this DryRunId to retrieve information about the dry run.
   *
   * @public
   */
  DryRunId?: string | undefined;

  /**
   * Returns the last execution status for a canary's dry run.
   *
   * @public
   */
  LastDryRunExecutionStatus?: string | undefined;
}

/**
 * A structure of engine configurations for the canary, one for each browser type that the canary is configured to run on.
 *
 * @public
 */
export interface EngineConfig {
  /**
   * Each engine configuration contains the ARN of the Lambda function that is used as the canary's engine for a specific browser type.
   *
   * @public
   */
  EngineArn?: string | undefined;

  /**
   * The browser type associated with this engine configuration.
   *
   * @public
   */
  BrowserType?: BrowserType | undefined;
}

/**
 * A structure that contains information about the replication status of a canary replica.
 *
 * @public
 */
export interface ReplicationStatus {
  /**
   * The replication state of the replica. Valid values are `InProgress`, `InSync`, and `Inconsistent`.
   *
   * @public
   */
  State?: ReplicationState | undefined;

  /**
   * A description that provides more detail about the current replication state.
   *
   * @public
   */
  StateReason?: string | undefined;

  /**
   * A code that provides more detail about the current replication state.
   *
   * @public
   */
  StateReasonCode?: string | undefined;
}

/**
 * If this canary is to test an endpoint in a VPC, this structure contains information about the subnets and security groups of the VPC endpoint. For more information, see [Running a Canary in a VPC](https://docs.aws.amazon.com/AmazonCloudWatch/latest/monitoring/CloudWatch_Synthetics_Canaries_VPC.html).
 *
 * @public
 */
export interface VpcConfigOutput {
  /**
   * The IDs of the VPC where this canary is to run.
   *
   * @public
   */
  VpcId?: string | undefined;

  /**
   * The IDs of the subnets where this canary is to run.
   *
   * @public
   */
  SubnetIds?: string[] | undefined;

  /**
   * The IDs of the security groups for this canary.
   *
   * @public
   */
  SecurityGroupIds?: string[] | undefined;

  /**
   * Indicates whether this canary allows outbound IPv6 traffic if it is connected to dual-stack subnets.
   *
   * @public
   */
  Ipv6AllowedForDualStack?: boolean | undefined;
}

/**
 * A structure that contains information about a canary replica in a specific location.
 *
 * @public
 */
export interface Replica {
  /**
   * The Amazon Web Services Region where this replica is located.
   *
   * @public
   */
  Location?: string | undefined;

  /**
   * A structure that contains information about the replication status of this replica.
   *
   * @public
   */
  ReplicationStatus?: ReplicationStatus | undefined;

  /**
   * The current state of the canary in this replica location.
   *
   * @public
   */
  CanaryState?: CanaryState | undefined;

  /**
   * The date and time that the replica was last modified.
   *
   * @public
   */
  LastModified?: Date | undefined;

  /**
   * The VPC configuration for the canary replica in this location.
   *
   * @public
   */
  VpcConfig?: VpcConfigOutput | undefined;
}

/**
 * A structure that contains information about the multi-location configuration of a canary, including whether it is a primary or replica, the primary location, and the list of replicas.
 *
 * @public
 */
export interface MultiLocationConfig {
  /**
   * Indicates whether this canary is the `Primary` or a `Replica` in the multi-location configuration.
   *
   * @public
   */
  LocationType?: LocationType | undefined;

  /**
   * The Amazon Web Services Region where the primary canary is located.
   *
   * @public
   */
  PrimaryLocation?: string | undefined;

  /**
   * A list of replicas for this canary. This field is present only for the primary location canary.
   *
   * @public
   */
  Replicas?: Replica[] | undefined;

  /**
   * The overall replication state of the canary across all replica locations. This field is present only for the primary location canary. Valid values are `InProgress`, `InSync`, and `Inconsistent`.
   *
   * @public
   */
  ReplicationState?: ReplicationState | undefined;
}

/**
 * A structure that contains information about a canary run.
 *
 * @public
 */
export interface CanaryRunConfigOutput {
  /**
   * How long the canary is allowed to run before it must stop.
   *
   * @public
   */
  TimeoutInSeconds?: number | undefined;

  /**
   * The maximum amount of memory available to the canary while it is running, in MB. This value must be a multiple of 64.
   *
   * @public
   */
  MemoryInMB?: number | undefined;

  /**
   * Displays whether this canary run used active X-Ray tracing.
   *
   * @public
   */
  ActiveTracing?: boolean | undefined;

  /**
   * Specifies the amount of ephemeral storage (in MB) to allocate for the canary run during execution. This temporary storage is used for storing canary run artifacts (which are uploaded to an Amazon S3 bucket at the end of the run), and any canary browser operations. This temporary storage is cleared after the run is completed. Default storage value is 1024 MB.
   *
   * @public
   */
  EphemeralStorage?: number | undefined;
}

/**
 * This structure contains information about the canary's retry configuration.
 *
 * @public
 */
export interface RetryConfigOutput {
  /**
   * The maximum number of retries. The value must be less than or equal to 2.
   *
   * @public
   */
  MaxRetries?: number | undefined;
}

/**
 * How long, in seconds, for the canary to continue making regular runs according to the schedule in the `Expression` value.
 *
 * @public
 */
export interface CanaryScheduleOutput {
  /**
   * A `rate` expression or a `cron` expression that defines how often the canary is to run.
   *
   * For a rate expression, The syntax is `rate(number unit)`. *unit* can be `minute`, `minutes`, or `hour`.
   *
   * For example, `rate(1 minute)` runs the canary once a minute, `rate(10 minutes)` runs it once every 10 minutes, and `rate(1 hour)` runs it once every hour. You can specify a frequency between `rate(1 minute)` and `rate(1 hour)`.
   *
   * Specifying `rate(0 minute)` or `rate(0 hour)` is a special value that causes the canary to run only once when it is started.
   *
   * Use `cron(expression)` to specify a cron expression. For information about the syntax for cron expressions, see [Scheduling canary runs using cron](https://docs.aws.amazon.com/AmazonCloudWatch/latest/monitoring/CloudWatch_Synthetics_Canaries_cron.html).
   *
   * @public
   */
  Expression?: string | undefined;

  /**
   * How long, in seconds, for the canary to continue making regular runs after it was created. The runs are performed according to the schedule in the `Expression` value.
   *
   * @public
   */
  DurationInSeconds?: number | undefined;

  /**
   * A structure that contains the retry configuration for a canary
   *
   * @public
   */
  RetryConfig?: RetryConfigOutput | undefined;
}

/**
 * A structure that contains the current state of the canary.
 *
 * @public
 */
export interface CanaryStatus {
  /**
   * The current state of the canary.
   *
   * @public
   */
  State?: CanaryState | undefined;

  /**
   * If the canary creation or update failed, this field provides details on the failure.
   *
   * @public
   */
  StateReason?: string | undefined;

  /**
   * If the canary creation or update failed, this field displays the reason code.
   *
   * @public
   */
  StateReasonCode?: CanaryStateReasonCode | undefined;
}

/**
 * This structure contains information about when the canary was created and modified.
 *
 * @public
 */
export interface CanaryTimeline {
  /**
   * The date and time the canary was created.
   *
   * @public
   */
  Created?: Date | undefined;

  /**
   * The date and time the canary was most recently modified.
   *
   * @public
   */
  LastModified?: Date | undefined;

  /**
   * The date and time that the canary's most recent run started.
   *
   * @public
   */
  LastStarted?: Date | undefined;

  /**
   * The date and time that the canary's most recent run ended.
   *
   * @public
   */
  LastStopped?: Date | undefined;
}

/**
 * If this canary performs visual monitoring by comparing screenshots, this structure contains the ID of the canary run that is used as the baseline for screenshots, and the coordinates of any parts of those screenshots that are ignored during visual monitoring comparison.
 *
 * Visual monitoring is supported only on canaries running the **syn-puppeteer-node-3.2** runtime or later.
 *
 * @public
 */
export interface VisualReferenceOutput {
  /**
   * An array of screenshots that are used as the baseline for comparisons during visual monitoring.
   *
   * @public
   */
  BaseScreenshots?: BaseScreenshot[] | undefined;

  /**
   * The ID of the canary run that produced the baseline screenshots that are used for visual monitoring comparisons by this canary.
   *
   * @public
   */
  BaseCanaryRunId?: string | undefined;

  /**
   * The browser type associated with this visual reference.
   *
   * @public
   */
  BrowserType?: BrowserType | undefined;
}

/**
 * This structure contains all information about one canary in your account.
 *
 * @public
 */
export interface Canary {
  /**
   * The unique ID of this canary.
   *
   * @public
   */
  Id?: string | undefined;

  /**
   * The name of the canary.
   *
   * @public
   */
  Name?: string | undefined;

  /**
   * This structure contains information about the canary's Lambda handler and where its code is stored by CloudWatch Synthetics.
   *
   * @public
   */
  Code?: CanaryCodeOutput | undefined;

  /**
   * The ARN of the IAM role used to run the canary. This role must include `lambda.amazonaws.com` as a principal in the trust policy.
   *
   * @public
   */
  ExecutionRoleArn?: string | undefined;

  /**
   * A structure that contains information about how often the canary is to run, and when these runs are to stop.
   *
   * @public
   */
  Schedule?: CanaryScheduleOutput | undefined;

  /**
   * A structure that contains information about a canary run.
   *
   * @public
   */
  RunConfig?: CanaryRunConfigOutput | undefined;

  /**
   * The number of days to retain data about successful runs of this canary.
   *
   * This setting affects the range of information returned by [GetCanaryRuns](https://docs.aws.amazon.com/AmazonSynthetics/latest/APIReference/API_GetCanaryRuns.html), as well as the range of information displayed in the Synthetics console.
   *
   * @public
   */
  SuccessRetentionPeriodInDays?: number | undefined;

  /**
   * The number of days to retain data about failed runs of this canary.
   *
   * This setting affects the range of information returned by [GetCanaryRuns](https://docs.aws.amazon.com/AmazonSynthetics/latest/APIReference/API_GetCanaryRuns.html), as well as the range of information displayed in the Synthetics console.
   *
   * @public
   */
  FailureRetentionPeriodInDays?: number | undefined;

  /**
   * A structure that contains information about the canary's status.
   *
   * @public
   */
  Status?: CanaryStatus | undefined;

  /**
   * A structure that contains information about when the canary was created, modified, and most recently run.
   *
   * @public
   */
  Timeline?: CanaryTimeline | undefined;

  /**
   * The location in Amazon S3 where Synthetics stores artifacts from the runs of this canary. Artifacts include the log file, screenshots, and HAR files.
   *
   * @public
   */
  ArtifactS3Location?: string | undefined;

  /**
   * The ARN of the Lambda function that is used as your canary's engine. For more information about Lambda ARN format, see [Resources and Conditions for Lambda Actions](https://docs.aws.amazon.com/lambda/latest/dg/lambda-api-permissions-ref.html).
   *
   * @public
   */
  EngineArn?: string | undefined;

  /**
   * Specifies the runtime version to use for the canary. For more information about runtime versions, see [Canary Runtime Versions](https://docs.aws.amazon.com/AmazonCloudWatch/latest/monitoring/CloudWatch_Synthetics_Canaries_Library.html).
   *
   * @public
   */
  RuntimeVersion?: string | undefined;

  /**
   * If this canary is to test an endpoint in a VPC, this structure contains information about the subnets and security groups of the VPC endpoint. For more information, see [Running a Canary in a VPC](https://docs.aws.amazon.com/AmazonCloudWatch/latest/monitoring/CloudWatch_Synthetics_Canaries_VPC.html).
   *
   * @public
   */
  VpcConfig?: VpcConfigOutput | undefined;

  /**
   * If this canary performs visual monitoring by comparing screenshots, this structure contains the ID of the canary run to use as the baseline for screenshots, and the coordinates of any parts of the screen to ignore during the visual monitoring comparison.
   *
   * @public
   */
  VisualReference?: VisualReferenceOutput | undefined;

  /**
   * Specifies whether to also delete the Lambda functions and layers used by this canary when the canary is deleted. If it is `AUTOMATIC`, the Lambda functions and layers will be deleted when the canary is deleted.
   *
   * If the value of this parameter is `OFF`, then the value of the `DeleteLambda` parameter of the [DeleteCanary](https://docs.aws.amazon.com/AmazonSynthetics/latest/APIReference/API_DeleteCanary.html) operation determines whether the Lambda functions and layers will be deleted.
   *
   * @public
   */
  ProvisionedResourceCleanup?: ProvisionedResourceCleanupSetting | undefined;

  /**
   * A structure that specifies the browser type to use for a canary run. CloudWatch Synthetics supports running canaries on both `CHROME` and `FIREFOX` browsers.
   *
   * > **Note:** If not specified, `browserConfigs` defaults to Chrome.
   *
   * @public
   */
  BrowserConfigs?: BrowserConfig[] | undefined;

  /**
   * A list of engine configurations for the canary, one for each browser type that the canary is configured to run on.
   *
   * All runtime versions `syn-nodejs-puppeteer-11.0` and above, and `syn-nodejs-playwright-3.0` and above, use `engineConfigs` only. You can no longer use `engineArn` in these versions.
   *
   * Runtime versions older than `syn-nodejs-puppeteer-11.0` and `syn-nodejs-playwright-3.0` continue to support `engineArn` to ensure backward compatibility.
   *
   * @public
   */
  EngineConfigs?: EngineConfig[] | undefined;

  /**
   * A list of visual reference configurations for the canary, one for each browser type that the canary is configured to run on. Visual references are used for visual monitoring comparisons.
   *
   * `syn-nodejs-puppeteer-11.0` and above, and `syn-nodejs-playwright-3.0` and above, only supports `visualReferences`. `visualReference` field is not supported.
   *
   * Versions older than `syn-nodejs-puppeteer-11.0` supports both `visualReference` and `visualReferences` for backward compatibility. It is recommended to use `visualReferences` for consistency and future compatibility.
   *
   * @public
   */
  VisualReferences?: VisualReferenceOutput[] | undefined;

  /**
   * If this canary is part of a multi-location configuration, this structure contains information about the canary's location type, primary location, and replicas.
   *
   * @public
   */
  MultiLocationConfig?: MultiLocationConfig | undefined;

  /**
   * The list of key-value pairs that are associated with the canary.
   *
   * @public
   */
  Tags?: Record<string, string> | undefined;

  /**
   * A structure that contains the configuration for canary artifacts, including the encryption-at-rest settings for artifacts that the canary uploads to Amazon S3.
   *
   * @public
   */
  ArtifactConfig?: ArtifactConfigOutput | undefined;

  /**
   * The Amazon Resource Name (ARN) of the customer-managed AWS Key Management Service (AWS KMS) key used to encrypt the canary's AWS Lambda function environment variables at rest. If you don't specify a value, the service uses an AWS-managed key.
   *
   * @public
   */
  KmsKeyArn?: string | undefined;

  /**
   * Returns the dry run configurations for a canary.
   *
   * @public
   */
  DryRunConfig?: DryRunConfigOutput | undefined;
}

/**
 * Returns the dry run configurations set for a canary.
 *
 * @public
 */
export interface CanaryDryRunConfigOutput {
  /**
   * The DryRunId associated with an existing canary’s dry run. You can use this DryRunId to retrieve information about the dry run.
   *
   * @public
   */
  DryRunId?: string | undefined;
}

/**
 * This structure contains the status information about a canary run.
 *
 * @public
 */
export interface CanaryRunStatus {
  /**
   * The current state of the run.
   *
   * @public
   */
  State?: CanaryRunState | undefined;

  /**
   * If run of the canary failed, this field contains the reason for the error.
   *
   * @public
   */
  StateReason?: string | undefined;

  /**
   * If this value is `CANARY_FAILURE`, either the canary script failed or Synthetics ran into a fatal error when running the canary. For example, a canary timeout misconfiguration setting can cause the canary to timeout before Synthetics can evaluate its status.
   *
   * If this value is `EXECUTION_FAILURE`, a non-critical failure occurred such as failing to save generated debug artifacts (for example, screenshots or har files).
   *
   * If both types of failures occurred, the `CANARY_FAILURE` takes precedence. To understand the exact error, use the [StateReason](https://docs.aws.amazon.com/AmazonSynthetics/latest/APIReference/API_CanaryRunStatus.html) API.
   *
   * @public
   */
  StateReasonCode?: CanaryRunStateReasonCode | undefined;

  /**
   * Specifies the status of canary script for this run. When Synthetics tries to determine the status but fails, the result is marked as `UNKNOWN`. For the overall status of canary run, see [State](https://docs.aws.amazon.com/AmazonSynthetics/latest/APIReference/API_CanaryRunStatus.html).
   *
   * @public
   */
  TestResult?: CanaryRunTestResult | undefined;
}

/**
 * This structure contains the start and end times of a single canary run.
 *
 * @public
 */
export interface CanaryRunTimeline {
  /**
   * The start time of the run.
   *
   * @public
   */
  Started?: Date | undefined;

  /**
   * The end time of the run.
   *
   * @public
   */
  Completed?: Date | undefined;

  /**
   * The time at which the metrics will be generated for this run or retries.
   *
   * @public
   */
  MetricTimestampForRunAndRetries?: Date | undefined;
}

/**
 * This structure contains the details about one run of one canary.
 *
 * @public
 */
export interface CanaryRun {
  /**
   * A unique ID that identifies this canary run.
   *
   * @public
   */
  Id?: string | undefined;

  /**
   * The ID of the scheduled canary run.
   *
   * @public
   */
  ScheduledRunId?: string | undefined;

  /**
   * The count in number of the retry attempt.
   *
   * @public
   */
  RetryAttempt?: number | undefined;

  /**
   * The name of the canary.
   *
   * @public
   */
  Name?: string | undefined;

  /**
   * The status of this run.
   *
   * @public
   */
  Status?: CanaryRunStatus | undefined;

  /**
   * A structure that contains the start and end times of this run.
   *
   * @public
   */
  Timeline?: CanaryRunTimeline | undefined;

  /**
   * The location where the canary stored artifacts from the run. Artifacts include the log file, screenshots, and HAR files.
   *
   * @public
   */
  ArtifactS3Location?: string | undefined;

  /**
   * Returns the dry run configurations for a canary.
   *
   * @public
   */
  DryRunConfig?: CanaryDryRunConfigOutput | undefined;

  /**
   * The browser type associated with this canary run.
   *
   * @public
   */
  BrowserType?: BrowserType | undefined;

  /**
   * The Amazon Web Services Region where this canary run was executed.
   *
   * @public
   */
  Location?: string | undefined;
}

/**
 * This structure contains information about the most recent run of a single canary.
 *
 * @public
 */
export interface CanaryLastRun {
  /**
   * The name of the canary.
   *
   * @public
   */
  CanaryName?: string | undefined;

  /**
   * The results from this canary's most recent run.
   *
   * @public
   */
  LastRun?: CanaryRun | undefined;
}

/**
 * Use this structure to input your script code for the canary. This structure contains the Lambda handler with the location where the canary should start running the script. If the script is stored in an Amazon S3 bucket, the bucket name, key, and version are also included. If the script was passed into the canary directly, the script code is contained in the value of `Zipfile`.
 *
 * If you are uploading your canary scripts with an Amazon S3 bucket, your zip file should include your script in a certain folder structure.
 *
 * - For Node.js canaries, the folder structure must be `nodejs/node_modules/myCanaryFilename.js` For more information, see [Packaging your Node.js canary files](https://docs.aws.amazon.com/AmazonCloudWatch/latest/monitoring/CloudWatch_Synthetics_Canaries_WritingCanary_Nodejs.html#CloudWatch_Synthetics_Canaries_package)
 * - For Python canaries, the folder structure must be `python/myCanaryFilename.py` or `python/myFolder/myCanaryFilename.py` For more information, see [Packaging your Python canary files](https://docs.aws.amazon.com/AmazonCloudWatch/latest/monitoring/CloudWatch_Synthetics_Canaries_WritingCanary_Python.html#CloudWatch_Synthetics_Canaries_WritingCanary_Python_package)
 *
 * @public
 */
export interface CanaryCodeInput {
  /**
   * If your canary script is located in Amazon S3, specify the bucket name here. Do not include `s3://` as the start of the bucket name.
   *
   * @public
   */
  S3Bucket?: string | undefined;

  /**
   * The Amazon S3 key of your script. For more information, see [Working with Amazon S3 Objects](https://docs.aws.amazon.com/AmazonS3/latest/dev/UsingObjects.html).
   *
   * @public
   */
  S3Key?: string | undefined;

  /**
   * The Amazon S3 version ID of your script.
   *
   * @public
   */
  S3Version?: string | undefined;

  /**
   * If you input your canary script directly into the canary instead of referring to an Amazon S3 location, the value of this parameter is the base64-encoded contents of the .zip file that contains the script. It must be smaller than 225 Kb.
   *
   * For large canary scripts, we recommend that you use an Amazon S3 location instead of inputting it directly with this parameter.
   *
   * @public
   */
  ZipFile?: Uint8Array | undefined;

  /**
   * The entry point to use for the source code when running the canary. For canaries that use the `syn-python-selenium-1.0` runtime or a `syn-nodejs.puppeteer` runtime earlier than `syn-nodejs.puppeteer-3.4`, the handler must be specified as `fileName.handler`. For `syn-python-selenium-1.1`, `syn-nodejs.puppeteer-3.4`, and later runtimes, the handler can be specified as `fileName.functionName`, or you can specify a folder where canary scripts reside as `folder/fileName.functionName`.
   *
   * This field is required when you don't specify `BlueprintTypes` and is not allowed when you specify `BlueprintTypes`.
   *
   * @public
   */
  Handler?: string | undefined;

  /**
   * `BlueprintTypes` is a list of templates that enable simplified canary creation. You can create canaries for common monitoring scenarios by providing only a JSON configuration file instead of writing custom scripts. The only supported value is `multi-checks`.
   *
   * Multi-checks monitors HTTP/DNS/SSL/TCP endpoints with built-in authentication schemes (Basic, API Key, OAuth, SigV4) and assertion capabilities. When you specify `BlueprintTypes`, the `Handler` field cannot be specified since the blueprint provides a pre-defined entry point.
   *
   * `BlueprintTypes` is supported only on canaries for syn-nodejs-3.0 runtime or later.
   *
   * @public
   */
  BlueprintTypes?: string[] | undefined;

  /**
   * A list of dependencies that should be used for running this canary. Specify the dependencies as a key-value pair, where the key is the type of dependency and the value is the dependency reference.
   *
   * @public
   */
  Dependencies?: Dependency[] | undefined;
}

/**
 * A structure that contains input information for a canary run.
 *
 * @public
 */
export interface CanaryRunConfigInput {
  /**
   * How long the canary is allowed to run before it must stop. You can't set this time to be longer than the frequency of the runs of this canary.
   *
   * If you omit this field, the frequency of the canary is used as this value, up to a maximum of 14 minutes.
   *
   * @public
   */
  TimeoutInSeconds?: number | undefined;

  /**
   * The maximum amount of memory available to the canary while it is running, in MB. This value must be a multiple of 64.
   *
   * @public
   */
  MemoryInMB?: number | undefined;

  /**
   * Specifies whether this canary is to use active X-Ray tracing when it runs. Active tracing enables this canary run to be displayed in the ServiceLens and X-Ray service maps even if the canary does not hit an endpoint that has X-Ray tracing enabled. Using X-Ray tracing incurs charges. For more information, see [Canaries and X-Ray tracing](https://docs.aws.amazon.com/AmazonCloudWatch/latest/monitoring/CloudWatch_Synthetics_Canaries_tracing.html).
   *
   * You can enable active tracing only for canaries that use version `syn-nodejs-2.0` or later for their canary runtime.
   *
   * @public
   */
  ActiveTracing?: boolean | undefined;

  /**
   * Specifies the keys and values to use for any environment variables used in the canary script. Use the following format:
   *
   * \{ "key1" : "value1", "key2" : "value2", ...\}
   *
   * Keys must start with a letter and be at least two characters. The total size of your environment variables cannot exceed 4 KB. You can't specify any Lambda reserved environment variables as the keys for your environment variables. For more information about reserved keys, see [Runtime environment variables](https://docs.aws.amazon.com/lambda/latest/dg/configuration-envvars.html#configuration-envvars-runtime).
   *
   * > **Important:** Environment variable keys and values are encrypted at rest using Amazon Web Services owned KMS keys. However, the environment variables are not encrypted on the client side. Do not store sensitive information in them.
   *
   * @public
   */
  EnvironmentVariables?: Record<string, string> | undefined;

  /**
   * Specifies the amount of ephemeral storage (in MB) to allocate for the canary run during execution. This temporary storage is used for storing canary run artifacts (which are uploaded to an Amazon S3 bucket at the end of the run), and any canary browser operations. This temporary storage is cleared after the run is completed. Default storage value is 1024 MB.
   *
   * @public
   */
  EphemeralStorage?: number | undefined;
}

/**
 * This structure contains information about the canary's retry configuration.
 *
 * > **Note:** The default account level concurrent execution limit from Lambda is 1000. When you have more than 1000 canaries, it's possible there are more than 1000 Lambda invocations due to retries and the console might hang. For more information on the Lambda execution limit, see [Understanding Lambda function scaling](https://docs.aws.amazon.com/lambda/latest/dg/lambda-concurrency.html#:~:text=As%20your%20functions%20receive%20more,functions%20in%20an%20AWS%20Region).
 *
 * > **Note:** For canary with `MaxRetries = 2`, you need to set the `CanaryRunConfigInput.TimeoutInSeconds` to less than 600 seconds to avoid validation errors.
 *
 * @public
 */
export interface RetryConfigInput {
  /**
   * The maximum number of retries. The value must be less than or equal to 2.
   *
   * @public
   */
  MaxRetries: number | undefined;
}

/**
 * This structure specifies how often a canary is to make runs and the date and time when it should stop making runs.
 *
 * @public
 */
export interface CanaryScheduleInput {
  /**
   * A `rate` expression or a `cron` expression that defines how often the canary is to run.
   *
   * For a rate expression, The syntax is `rate(number unit)`. *unit* can be `minute`, `minutes`, or `hour`.
   *
   * For example, `rate(1 minute)` runs the canary once a minute, `rate(10 minutes)` runs it once every 10 minutes, and `rate(1 hour)` runs it once every hour. You can specify a frequency between `rate(1 minute)` and `rate(1 hour)`.
   *
   * Specifying `rate(0 minute)` or `rate(0 hour)` is a special value that causes the canary to run only once when it is started.
   *
   * Use `cron(expression)` to specify a cron expression. You can't schedule a canary to wait for more than a year before running. For information about the syntax for cron expressions, see [Scheduling canary runs using cron](https://docs.aws.amazon.com/AmazonCloudWatch/latest/monitoring/CloudWatch_Synthetics_Canaries_cron.html).
   *
   * @public
   */
  Expression: string | undefined;

  /**
   * How long, in seconds, for the canary to continue making regular runs according to the schedule in the `Expression` value. If you specify 0, the canary continues making runs until you stop it. If you omit this field, the default of 0 is used.
   *
   * @public
   */
  DurationInSeconds?: number | undefined;

  /**
   * A structure that contains the retry configuration for a canary
   *
   * @public
   */
  RetryConfig?: RetryConfigInput | undefined;
}

/**
 * @public
 */
export interface CreateCanaryRequest {
  /**
   * The name for this canary. Be sure to give it a descriptive name that distinguishes it from other canaries in your account.
   *
   * Do not include secrets or proprietary information in your canary names. The canary name makes up part of the canary ARN, and the ARN is included in outbound calls over the internet. For more information, see [Security Considerations for Synthetics Canaries](https://docs.aws.amazon.com/AmazonCloudWatch/latest/monitoring/servicelens_canaries_security.html).
   *
   * @public
   */
  Name: string | undefined;

  /**
   * A structure that includes the entry point from which the canary should start running your script. If the script is stored in an Amazon S3 bucket, the bucket name, key, and version are also included.
   *
   * @public
   */
  Code: CanaryCodeInput | undefined;

  /**
   * The location in Amazon S3 where Synthetics stores artifacts from the test runs of this canary. Artifacts include the log file, screenshots, and HAR files. The name of the Amazon S3 bucket can't include a period (.).
   *
   * @public
   */
  ArtifactS3Location: string | undefined;

  /**
   * The ARN of the IAM role to be used to run the canary. This role must already exist, and must include `lambda.amazonaws.com` as a principal in the trust policy. The role must also have the following permissions:
   *
   * - `s3:PutObject`
   * - `s3:GetBucketLocation`
   * - `s3:ListAllMyBuckets`
   * - `cloudwatch:PutMetricData`
   * - `logs:CreateLogGroup`
   * - `logs:CreateLogStream`
   * - `logs:PutLogEvents`
   *
   * @public
   */
  ExecutionRoleArn: string | undefined;

  /**
   * A structure that contains information about how often the canary is to run and when these test runs are to stop.
   *
   * @public
   */
  Schedule: CanaryScheduleInput | undefined;

  /**
   * A structure that contains the configuration for individual canary runs, such as timeout value and environment variables.
   *
   * > **Important:** Environment variable keys and values are encrypted at rest using Amazon Web Services owned KMS keys. However, the environment variables are not encrypted on the client side. Do not store sensitive information in them.
   *
   * @public
   */
  RunConfig?: CanaryRunConfigInput | undefined;

  /**
   * The number of days to retain data about successful runs of this canary. If you omit this field, the default of 31 days is used. The valid range is 1 to 455 days.
   *
   * This setting affects the range of information returned by [GetCanaryRuns](https://docs.aws.amazon.com/AmazonSynthetics/latest/APIReference/API_GetCanaryRuns.html), as well as the range of information displayed in the Synthetics console.
   *
   * @public
   */
  SuccessRetentionPeriodInDays?: number | undefined;

  /**
   * The number of days to retain data about failed runs of this canary. If you omit this field, the default of 31 days is used. The valid range is 1 to 455 days.
   *
   * This setting affects the range of information returned by [GetCanaryRuns](https://docs.aws.amazon.com/AmazonSynthetics/latest/APIReference/API_GetCanaryRuns.html), as well as the range of information displayed in the Synthetics console.
   *
   * @public
   */
  FailureRetentionPeriodInDays?: number | undefined;

  /**
   * Specifies the runtime version to use for the canary. For a list of valid runtime versions and more information about runtime versions, see [Canary Runtime Versions](https://docs.aws.amazon.com/AmazonCloudWatch/latest/monitoring/CloudWatch_Synthetics_Canaries_Library.html).
   *
   * @public
   */
  RuntimeVersion: string | undefined;

  /**
   * If this canary is to test an endpoint in a VPC, this structure contains information about the subnet and security groups of the VPC endpoint. For more information, see [Running a Canary in a VPC](https://docs.aws.amazon.com/AmazonCloudWatch/latest/monitoring/CloudWatch_Synthetics_Canaries_VPC.html).
   *
   * @public
   */
  VpcConfig?: VpcConfigInput | undefined;

  /**
   * To have the tags that you apply to this canary also be applied to the Lambda function that the canary uses, specify this parameter with the value `lambda-function`.
   *
   * If you specify this parameter and don't specify any tags in the `Tags` parameter, the canary creation fails.
   *
   * @public
   */
  ResourcesToReplicateTags?: ResourceToTag[] | undefined;

  /**
   * Specifies whether to also delete the Lambda functions and layers used by this canary when the canary is deleted. If you omit this parameter, the default of `AUTOMATIC` is used, which means that the Lambda functions and layers will be deleted when the canary is deleted.
   *
   * If the value of this parameter is `OFF`, then the value of the `DeleteLambda` parameter of the [DeleteCanary](https://docs.aws.amazon.com/AmazonSynthetics/latest/APIReference/API_DeleteCanary.html) operation determines whether the Lambda functions and layers will be deleted.
   *
   * @public
   */
  ProvisionedResourceCleanup?: ProvisionedResourceCleanupSetting | undefined;

  /**
   * CloudWatch Synthetics now supports multibrowser canaries for `syn-nodejs-puppeteer-11.0` and `syn-nodejs-playwright-3.0` runtimes. This feature allows you to run your canaries on both Firefox and Chrome browsers. To create a multibrowser canary, you need to specify the BrowserConfigs with a list of browsers you want to use.
   *
   * > **Note:** If not specified, `browserConfigs` defaults to Chrome.
   *
   * @public
   */
  BrowserConfigs?: BrowserConfig[] | undefined;

  /**
   * A list of locations (Amazon Web Services Regions) to add as replicas for the canary. Each location specifies a Region and optional VPC configuration for the replica. You can add up to 50 replica locations.
   *
   * @public
   */
  AddReplicaLocations?: AddReplicaLocationInput[] | undefined;

  /**
   * A list of key-value pairs to associate with the canary. You can associate as many as 50 tags with a canary.
   *
   * Tags can help you organize and categorize your resources. You can also use them to scope user permissions, by granting a user permission to access or change only the resources that have certain tag values.
   *
   * To have the tags that you apply to this canary also be applied to the Lambda function that the canary uses, specify this parameter with the value `lambda-function`.
   *
   * @public
   */
  Tags?: Record<string, string> | undefined;

  /**
   * A structure that contains the configuration for canary artifacts, including the encryption-at-rest settings for artifacts that the canary uploads to Amazon S3.
   *
   * @public
   */
  ArtifactConfig?: ArtifactConfigInput | undefined;

  /**
   * The Amazon Resource Name (ARN) of the customer-managed AWS Key Management Service (AWS KMS) key used to encrypt the canary's AWS Lambda function environment variables at rest. If you don't specify a value, the service uses an AWS-managed key.
   *
   * @public
   */
  KmsKeyArn?: string | undefined;
}

/**
 * @public
 */
export interface CreateCanaryResponse {
  /**
   * The full details about the canary you have created.
   *
   * @public
   */
  Canary?: Canary | undefined;
}

/**
 * @public
 */
export interface CreateGroupRequest {
  /**
   * The name for the group. It can include any Unicode characters.
   *
   * The names for all groups in your account, across all Regions, must be unique.
   *
   * @public
   */
  Name: string | undefined;

  /**
   * A list of key-value pairs to associate with the group. You can associate as many as 50 tags with a group.
   *
   * Tags can help you organize and categorize your resources. You can also use them to scope user permissions, by granting a user permission to access or change only the resources that have certain tag values.
   *
   * @public
   */
  Tags?: Record<string, string> | undefined;
}

/**
 * This structure contains information about one group.
 *
 * @public
 */
export interface Group {
  /**
   * The unique ID of the group.
   *
   * @public
   */
  Id?: string | undefined;

  /**
   * The name of the group.
   *
   * @public
   */
  Name?: string | undefined;

  /**
   * The ARN of the group.
   *
   * @public
   */
  Arn?: string | undefined;

  /**
   * The list of key-value pairs that are associated with the canary.
   *
   * @public
   */
  Tags?: Record<string, string> | undefined;

  /**
   * The date and time that the group was created.
   *
   * @public
   */
  CreatedTime?: Date | undefined;

  /**
   * The date and time that the group was most recently updated.
   *
   * @public
   */
  LastModifiedTime?: Date | undefined;
}

/**
 * @public
 */
export interface CreateGroupResponse {
  /**
   * A structure that contains information about the group that was just created.
   *
   * @public
   */
  Group?: Group | undefined;
}

/**
 * @public
 */
export interface DeleteCanaryRequest {
  /**
   * The name of the canary that you want to delete. To find the names of your canaries, use [DescribeCanaries](https://docs.aws.amazon.com/AmazonSynthetics/latest/APIReference/API_DescribeCanaries.html).
   *
   * @public
   */
  Name: string | undefined;

  /**
   * Specifies whether to also delete the Lambda functions and layers used by this canary. The default is `false`.
   *
   * Your setting for this parameter is used only if the canary doesn't have `AUTOMATIC` for its `ProvisionedResourceCleanup` field. If that field is set to `AUTOMATIC`, then the Lambda functions and layers will be deleted when this canary is deleted.
   *
   * Type: Boolean
   *
   * @public
   */
  DeleteLambda?: boolean | undefined;
}

/**
 * @public
 */
export interface DeleteCanaryResponse {}

/**
 * @public
 */
export interface DeleteGroupRequest {
  /**
   * Specifies which group to delete. You can specify the group name, the ARN, or the group ID as the `GroupIdentifier`.
   *
   * @public
   */
  GroupIdentifier: string | undefined;
}

/**
 * @public
 */
export interface DeleteGroupResponse {}

/**
 * @public
 */
export interface DescribeCanariesRequest {
  /**
   * A token that indicates that there is more data available. You can use this token in a subsequent operation to retrieve the next set of results.
   *
   * @public
   */
  NextToken?: string | undefined;

  /**
   * Specify this parameter to limit how many canaries are returned each time you use the `DescribeCanaries` operation. If you omit this parameter, the default of 20 is used.
   *
   * @public
   */
  MaxResults?: number | undefined;

  /**
   * Use this parameter to return only canaries that match the names that you specify here. You can specify as many as five canary names.
   *
   * If you specify this parameter, the operation is successful only if you have authorization to view all the canaries that you specify in your request. If you do not have permission to view any of the canaries, the request fails with a 403 response.
   *
   * You are required to use this parameter if you are logged on to a user or role that has an IAM policy that restricts which canaries that you are allowed to view. For more information, see [Limiting a user to viewing specific canaries](https://docs.aws.amazon.com/AmazonCloudWatch/latest/monitoring/CloudWatch_Synthetics_Canaries_Restricted.html).
   *
   * @public
   */
  Names?: string[] | undefined;
}

/**
 * @public
 */
export interface DescribeCanariesResponse {
  /**
   * Returns an array. Each item in the array contains the full information about one canary.
   *
   * @public
   */
  Canaries?: Canary[] | undefined;

  /**
   * A token that indicates that there is more data available. You can use this token in a subsequent `DescribeCanaries` operation to retrieve the next set of results.
   *
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface DescribeCanariesLastRunRequest {
  /**
   * A token that indicates that there is more data available. You can use this token in a subsequent `DescribeCanariesLastRun` operation to retrieve the next set of results.
   *
   * @public
   */
  NextToken?: string | undefined;

  /**
   * Specify this parameter to limit how many runs are returned each time you use the `DescribeLastRun` operation. If you omit this parameter, the default of 100 is used.
   *
   * @public
   */
  MaxResults?: number | undefined;

  /**
   * Use this parameter to return only canaries that match the names that you specify here. You can specify as many as five canary names.
   *
   * If you specify this parameter, the operation is successful only if you have authorization to view all the canaries that you specify in your request. If you do not have permission to view any of the canaries, the request fails with a 403 response.
   *
   * You are required to use the `Names` parameter if you are logged on to a user or role that has an IAM policy that restricts which canaries that you are allowed to view. For more information, see [Limiting a user to viewing specific canaries](https://docs.aws.amazon.com/AmazonCloudWatch/latest/monitoring/CloudWatch_Synthetics_Canaries_Restricted.html).
   *
   * @public
   */
  Names?: string[] | undefined;

  /**
   * The type of browser to use for the canary run.
   *
   * @public
   */
  BrowserType?: BrowserType | undefined;
}

/**
 * @public
 */
export interface DescribeCanariesLastRunResponse {
  /**
   * An array that contains the information from the most recent run of each canary.
   *
   * @public
   */
  CanariesLastRun?: CanaryLastRun[] | undefined;

  /**
   * A token that indicates that there is more data available. You can use this token in a subsequent `DescribeCanariesLastRun` operation to retrieve the next set of results.
   *
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface DescribeRuntimeVersionsRequest {
  /**
   * A token that indicates that there is more data available. You can use this token in a subsequent `DescribeRuntimeVersions` operation to retrieve the next set of results.
   *
   * @public
   */
  NextToken?: string | undefined;

  /**
   * Specify this parameter to limit how many runs are returned each time you use the `DescribeRuntimeVersions` operation. If you omit this parameter, the default of 100 is used.
   *
   * @public
   */
  MaxResults?: number | undefined;
}

/**
 * This structure contains information about one canary runtime version. For more information about runtime versions, see [Canary Runtime Versions](https://docs.aws.amazon.com/AmazonCloudWatch/latest/monitoring/CloudWatch_Synthetics_Canaries_Library.html).
 *
 * @public
 */
export interface RuntimeVersion {
  /**
   * The name of the runtime version. For a list of valid runtime versions, see [Canary Runtime Versions](https://docs.aws.amazon.com/AmazonCloudWatch/latest/monitoring/CloudWatch_Synthetics_Canaries_Library.html).
   *
   * @public
   */
  VersionName?: string | undefined;

  /**
   * A description of the runtime version, created by Amazon.
   *
   * @public
   */
  Description?: string | undefined;

  /**
   * The date that the runtime version was released.
   *
   * @public
   */
  ReleaseDate?: Date | undefined;

  /**
   * If this runtime version is deprecated, this value is the date of deprecation.
   *
   * @public
   */
  DeprecationDate?: Date | undefined;
}

/**
 * @public
 */
export interface DescribeRuntimeVersionsResponse {
  /**
   * An array of objects that display the details about each Synthetics canary runtime version.
   *
   * @public
   */
  RuntimeVersions?: RuntimeVersion[] | undefined;

  /**
   * A token that indicates that there is more data available. You can use this token in a subsequent `DescribeRuntimeVersions` operation to retrieve the next set of results.
   *
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface DisassociateResourceRequest {
  /**
   * Specifies the group. You can specify the group name, the ARN, or the group ID as the `GroupIdentifier`.
   *
   * @public
   */
  GroupIdentifier: string | undefined;

  /**
   * The ARN of the canary that you want to remove from the specified group.
   *
   * @public
   */
  ResourceArn: string | undefined;
}

/**
 * @public
 */
export interface DisassociateResourceResponse {}

/**
 * @public
 */
export interface GetCanaryRequest {
  /**
   * The name of the canary that you want details for.
   *
   * @public
   */
  Name: string | undefined;

  /**
   * The DryRunId associated with an existing canary’s dry run. You can use this DryRunId to retrieve information about the dry run.
   *
   * @public
   */
  DryRunId?: string | undefined;
}

/**
 * @public
 */
export interface GetCanaryResponse {
  /**
   * A structure that contains the full information about the canary.
   *
   * @public
   */
  Canary?: Canary | undefined;
}

/**
 * @public
 */
export interface GetCanaryRunsRequest {
  /**
   * The name of the canary that you want to see runs for.
   *
   * @public
   */
  Name: string | undefined;

  /**
   * A token that indicates that there is more data available. You can use this token in a subsequent `GetCanaryRuns` operation to retrieve the next set of results.
   *
   * > **Note:** When auto retry is enabled for the canary, the first subsequent retry is suffixed with *1 indicating its the first retry and the next subsequent try is suffixed with *2.
   *
   * @public
   */
  NextToken?: string | undefined;

  /**
   * Specify this parameter to limit how many runs are returned each time you use the `GetCanaryRuns` operation. If you omit this parameter, the default of 100 is used.
   *
   * @public
   */
  MaxResults?: number | undefined;

  /**
   * The DryRunId associated with an existing canary’s dry run. You can use this DryRunId to retrieve information about the dry run.
   *
   * @public
   */
  DryRunId?: string | undefined;

  /**
   * - When you provide `RunType=CANARY_RUN` and `dryRunId`, you will get an exception
   * - When a value is not provided for `RunType`, the default value is `CANARY_RUN`
   * - When `CANARY_RUN` is provided, all canary runs excluding dry runs are returned
   * - When `DRY_RUN` is provided, all dry runs excluding canary runs are returned
   *
   * @public
   */
  RunType?: RunType | undefined;
}

/**
 * @public
 */
export interface GetCanaryRunsResponse {
  /**
   * An array of structures. Each structure contains the details of one of the retrieved canary runs.
   *
   * @public
   */
  CanaryRuns?: CanaryRun[] | undefined;

  /**
   * A token that indicates that there is more data available. You can use this token in a subsequent `GetCanaryRuns` operation to retrieve the next set of results.
   *
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface GetGroupRequest {
  /**
   * Specifies the group to return information for. You can specify the group name, the ARN, or the group ID as the `GroupIdentifier`.
   *
   * @public
   */
  GroupIdentifier: string | undefined;
}

/**
 * @public
 */
export interface GetGroupResponse {
  /**
   * A structure that contains information about the group.
   *
   * @public
   */
  Group?: Group | undefined;
}

/**
 * A structure containing some information about a group.
 *
 * @public
 */
export interface GroupSummary {
  /**
   * The unique ID of the group.
   *
   * @public
   */
  Id?: string | undefined;

  /**
   * The name of the group.
   *
   * @public
   */
  Name?: string | undefined;

  /**
   * The ARN of the group.
   *
   * @public
   */
  Arn?: string | undefined;
}

/**
 * @public
 */
export interface ListAssociatedGroupsRequest {
  /**
   * A token that indicates that there is more data available. You can use this token in a subsequent operation to retrieve the next set of results.
   *
   * @public
   */
  NextToken?: string | undefined;

  /**
   * Specify this parameter to limit how many groups are returned each time you use the `ListAssociatedGroups` operation. If you omit this parameter, the default of 20 is used.
   *
   * @public
   */
  MaxResults?: number | undefined;

  /**
   * The ARN of the canary that you want to view groups for.
   *
   * @public
   */
  ResourceArn: string | undefined;
}

/**
 * @public
 */
export interface ListAssociatedGroupsResponse {
  /**
   * An array of structures that contain information about the groups that this canary is associated with.
   *
   * @public
   */
  Groups?: GroupSummary[] | undefined;

  /**
   * A token that indicates that there is more data available. You can use this token in a subsequent `ListAssociatedGroups` operation to retrieve the next set of results.
   *
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListGroupResourcesRequest {
  /**
   * A token that indicates that there is more data available. You can use this token in a subsequent operation to retrieve the next set of results.
   *
   * @public
   */
  NextToken?: string | undefined;

  /**
   * Specify this parameter to limit how many canary ARNs are returned each time you use the `ListGroupResources` operation. If you omit this parameter, the default of 20 is used.
   *
   * @public
   */
  MaxResults?: number | undefined;

  /**
   * Specifies the group to return information for. You can specify the group name, the ARN, or the group ID as the `GroupIdentifier`.
   *
   * @public
   */
  GroupIdentifier: string | undefined;
}

/**
 * @public
 */
export interface ListGroupResourcesResponse {
  /**
   * An array of ARNs. These ARNs are for the canaries that are associated with the group.
   *
   * @public
   */
  Resources?: string[] | undefined;

  /**
   * A token that indicates that there is more data available. You can use this token in a subsequent `ListGroupResources` operation to retrieve the next set of results.
   *
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListGroupsRequest {
  /**
   * A token that indicates that there is more data available. You can use this token in a subsequent operation to retrieve the next set of results.
   *
   * @public
   */
  NextToken?: string | undefined;

  /**
   * Specify this parameter to limit how many groups are returned each time you use the `ListGroups` operation. If you omit this parameter, the default of 20 is used.
   *
   * @public
   */
  MaxResults?: number | undefined;
}

/**
 * @public
 */
export interface ListGroupsResponse {
  /**
   * An array of structures that each contain information about one group.
   *
   * @public
   */
  Groups?: GroupSummary[] | undefined;

  /**
   * A token that indicates that there is more data available. You can use this token in a subsequent `ListGroups` operation to retrieve the next set of results.
   *
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListTagsForResourceRequest {
  /**
   * The ARN of the canary or group that you want to view tags for.
   *
   * The ARN format of a canary is `arn:aws:synthetics:Region:account-id:canary:canary-name`.
   *
   * The ARN format of a group is `arn:aws:synthetics:Region:account-id:group:group-name`
   *
   * @public
   */
  ResourceArn: string | undefined;
}

/**
 * @public
 */
export interface ListTagsForResourceResponse {
  /**
   * The list of tag keys and values associated with the resource that you specified.
   *
   * @public
   */
  Tags?: Record<string, string> | undefined;
}

/**
 * @public
 */
export interface StartCanaryRequest {
  /**
   * The name of the canary that you want to run. To find canary names, use [DescribeCanaries](https://docs.aws.amazon.com/AmazonSynthetics/latest/APIReference/API_DescribeCanaries.html).
   *
   * @public
   */
  Name: string | undefined;
}

/**
 * @public
 */
export interface StartCanaryResponse {}

/**
 * An object that specifies what screenshots to use as a baseline for visual monitoring by this canary. It can optionally also specify parts of the screenshots to ignore during the visual monitoring comparison.
 *
 * Visual monitoring is supported only on canaries running the **syn-puppeteer-node-3.2** runtime or later. For more information, see [Visual monitoring](https://docs.aws.amazon.com/AmazonCloudWatch/latest/monitoring/CloudWatch_Synthetics_Library_SyntheticsLogger_VisualTesting.html) and [Visual monitoring blueprint](https://docs.aws.amazon.com/AmazonCloudWatch/latest/monitoring/CloudWatch_Synthetics_Canaries_Blueprints_VisualTesting.html)
 *
 * @public
 */
export interface VisualReferenceInput {
  /**
   * An array of screenshots that will be used as the baseline for visual monitoring in future runs of this canary. If there is a screenshot that you don't want to be used for visual monitoring, remove it from this array.
   *
   * @public
   */
  BaseScreenshots?: BaseScreenshot[] | undefined;

  /**
   * Specifies which canary run to use the screenshots from as the baseline for future visual monitoring with this canary. Valid values are `nextrun` to use the screenshots from the next run after this update is made, `lastrun` to use the screenshots from the most recent run before this update was made, or the value of `Id` in the [CanaryRun](https://docs.aws.amazon.com/AmazonSynthetics/latest/APIReference/API_CanaryRun.html) from a run of this a canary in the past 31 days. If you specify the `Id` of a canary run older than 31 days, the operation returns a 400 validation exception error..
   *
   * @public
   */
  BaseCanaryRunId: string | undefined;

  /**
   * The browser type associated with this visual reference.
   *
   * @public
   */
  BrowserType?: BrowserType | undefined;
}

/**
 * @public
 */
export interface StartCanaryDryRunRequest {
  /**
   * The name of the canary that you want to dry run. To find canary names, use [DescribeCanaries](https://docs.aws.amazon.com/AmazonSynthetics/latest/APIReference/API_DescribeCanaries.html).
   *
   * @public
   */
  Name: string | undefined;

  /**
   * Use this structure to input your script code for the canary. This structure contains the Lambda handler with the location where the canary should start running the script. If the script is stored in an Amazon S3 bucket, the bucket name, key, and version are also included. If the script was passed into the canary directly, the script code is contained in the value of `Zipfile`.
   *
   * If you are uploading your canary scripts with an Amazon S3 bucket, your zip file should include your script in a certain folder structure.
   *
   * - For Node.js canaries, the folder structure must be `nodejs/node_modules/myCanaryFilename.js` For more information, see [Packaging your Node.js canary files](https://docs.aws.amazon.com/AmazonCloudWatch/latest/monitoring/CloudWatch_Synthetics_Canaries_WritingCanary_Nodejs.html#CloudWatch_Synthetics_Canaries_package)
   * - For Python canaries, the folder structure must be `python/myCanaryFilename.py` or `python/myFolder/myCanaryFilename.py` For more information, see [Packaging your Python canary files](https://docs.aws.amazon.com/AmazonCloudWatch/latest/monitoring/CloudWatch_Synthetics_Canaries_WritingCanary_Python.html#CloudWatch_Synthetics_Canaries_WritingCanary_Python_package)
   *
   * @public
   */
  Code?: CanaryCodeInput | undefined;

  /**
   * Specifies the runtime version to use for the canary. For a list of valid runtime versions and for more information about runtime versions, see [Canary Runtime Versions](https://docs.aws.amazon.com/AmazonCloudWatch/latest/monitoring/CloudWatch_Synthetics_Canaries_Library.html).
   *
   * @public
   */
  RuntimeVersion?: string | undefined;

  /**
   * A structure that contains input information for a canary run.
   *
   * @public
   */
  RunConfig?: CanaryRunConfigInput | undefined;

  /**
   * If this canary is to test an endpoint in a VPC, this structure contains information about the subnets and security groups of the VPC endpoint. For more information, see [Running a Canary in a VPC](https://docs.aws.amazon.com/AmazonCloudWatch/latest/monitoring/CloudWatch_Synthetics_Canaries_VPC.html).
   *
   * @public
   */
  VpcConfig?: VpcConfigInput | undefined;

  /**
   * The ARN of the IAM role to be used to run the canary. This role must already exist, and must include `lambda.amazonaws.com` as a principal in the trust policy. The role must also have the following permissions:
   *
   * @public
   */
  ExecutionRoleArn?: string | undefined;

  /**
   * The number of days to retain data about successful runs of this canary. If you omit this field, the default of 31 days is used. The valid range is 1 to 455 days.
   *
   * This setting affects the range of information returned by [GetCanaryRuns](https://docs.aws.amazon.com/AmazonSynthetics/latest/APIReference/API_GetCanaryRuns.html), as well as the range of information displayed in the Synthetics console.
   *
   * @public
   */
  SuccessRetentionPeriodInDays?: number | undefined;

  /**
   * The number of days to retain data about failed runs of this canary. If you omit this field, the default of 31 days is used. The valid range is 1 to 455 days.
   *
   * This setting affects the range of information returned by [GetCanaryRuns](https://docs.aws.amazon.com/AmazonSynthetics/latest/APIReference/API_GetCanaryRuns.html), as well as the range of information displayed in the Synthetics console.
   *
   * @public
   */
  FailureRetentionPeriodInDays?: number | undefined;

  /**
   * An object that specifies what screenshots to use as a baseline for visual monitoring by this canary. It can optionally also specify parts of the screenshots to ignore during the visual monitoring comparison.
   *
   * Visual monitoring is supported only on canaries running the **syn-puppeteer-node-3.2** runtime or later. For more information, see [Visual monitoring](https://docs.aws.amazon.com/AmazonCloudWatch/latest/monitoring/CloudWatch_Synthetics_Library_SyntheticsLogger_VisualTesting.html) and [Visual monitoring blueprint](https://docs.aws.amazon.com/AmazonCloudWatch/latest/monitoring/CloudWatch_Synthetics_Canaries_Blueprints_VisualTesting.html)
   *
   * @public
   */
  VisualReference?: VisualReferenceInput | undefined;

  /**
   * The location in Amazon S3 where Synthetics stores artifacts from the test runs of this canary. Artifacts include the log file, screenshots, and HAR files. The name of the Amazon S3 bucket can't include a period (.).
   *
   * @public
   */
  ArtifactS3Location?: string | undefined;

  /**
   * A structure that contains the configuration for canary artifacts, including the encryption-at-rest settings for artifacts that the canary uploads to Amazon S3.
   *
   * @public
   */
  ArtifactConfig?: ArtifactConfigInput | undefined;

  /**
   * Specifies whether to also delete the Lambda functions and layers used by this canary when the canary is deleted. If you omit this parameter, the default of `AUTOMATIC` is used, which means that the Lambda functions and layers will be deleted when the canary is deleted.
   *
   * If the value of this parameter is `OFF`, then the value of the `DeleteLambda` parameter of the [DeleteCanary](https://docs.aws.amazon.com/AmazonSynthetics/latest/APIReference/API_DeleteCanary.html) operation determines whether the Lambda functions and layers will be deleted.
   *
   * @public
   */
  ProvisionedResourceCleanup?: ProvisionedResourceCleanupSetting | undefined;

  /**
   * A structure that specifies the browser type to use for a canary run. CloudWatch Synthetics supports running canaries on both `CHROME` and `FIREFOX` browsers.
   *
   * > **Note:** If not specified, `browserConfigs` defaults to Chrome.
   *
   * @public
   */
  BrowserConfigs?: BrowserConfig[] | undefined;

  /**
   * A list of visual reference configurations for the canary, one for each browser type that the canary is configured to run on. Visual references are used for visual monitoring comparisons.
   *
   * `syn-nodejs-puppeteer-11.0` and above, and `syn-nodejs-playwright-3.0` and above, only supports `visualReferences`. `visualReference` field is not supported.
   *
   * Versions older than `syn-nodejs-puppeteer-11.0` supports both `visualReference` and `visualReferences` for backward compatibility. It is recommended to use `visualReferences` for consistency and future compatibility.
   *
   * @public
   */
  VisualReferences?: VisualReferenceInput[] | undefined;
}

/**
 * @public
 */
export interface StartCanaryDryRunResponse {
  /**
   * Returns the dry run configurations for a canary.
   *
   * @public
   */
  DryRunConfig?: DryRunConfigOutput | undefined;
}

/**
 * @public
 */
export interface StopCanaryRequest {
  /**
   * The name of the canary that you want to stop. To find the names of your canaries, use [ListCanaries](https://docs.aws.amazon.com/AmazonSynthetics/latest/APIReference/API_DescribeCanaries.html).
   *
   * @public
   */
  Name: string | undefined;
}

/**
 * @public
 */
export interface StopCanaryResponse {}

/**
 * @public
 */
export interface TagResourceRequest {
  /**
   * The ARN of the canary or group that you're adding tags to.
   *
   * The ARN format of a canary is `arn:aws:synthetics:Region:account-id:canary:canary-name`.
   *
   * The ARN format of a group is `arn:aws:synthetics:Region:account-id:group:group-name`
   *
   * @public
   */
  ResourceArn: string | undefined;

  /**
   * The list of key-value pairs to associate with the resource.
   *
   * @public
   */
  Tags: Record<string, string> | undefined;
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
   * The ARN of the canary or group that you're removing tags from.
   *
   * The ARN format of a canary is `arn:aws:synthetics:Region:account-id:canary:canary-name`.
   *
   * The ARN format of a group is `arn:aws:synthetics:Region:account-id:group:group-name`
   *
   * @public
   */
  ResourceArn: string | undefined;

  /**
   * The list of tag keys to remove from the resource.
   *
   * @public
   */
  TagKeys: string[] | undefined;
}

/**
 * @public
 */
export interface UntagResourceResponse {}

/**
 * @public
 */
export interface UpdateCanaryRequest {
  /**
   * The name of the canary that you want to update. To find the names of your canaries, use [DescribeCanaries](https://docs.aws.amazon.com/AmazonSynthetics/latest/APIReference/API_DescribeCanaries.html).
   *
   * You cannot change the name of a canary that has already been created.
   *
   * @public
   */
  Name: string | undefined;

  /**
   * A structure that includes the entry point from which the canary should start running your script. If the script is stored in an Amazon S3 bucket, the bucket name, key, and version are also included.
   *
   * @public
   */
  Code?: CanaryCodeInput | undefined;

  /**
   * The ARN of the IAM role to be used to run the canary. This role must already exist, and must include `lambda.amazonaws.com` as a principal in the trust policy. The role must also have the following permissions:
   *
   * - `s3:PutObject`
   * - `s3:GetBucketLocation`
   * - `s3:ListAllMyBuckets`
   * - `cloudwatch:PutMetricData`
   * - `logs:CreateLogGroup`
   * - `logs:CreateLogStream`
   * - `logs:CreateLogStream`
   *
   * @public
   */
  ExecutionRoleArn?: string | undefined;

  /**
   * Specifies the runtime version to use for the canary. For a list of valid runtime versions and for more information about runtime versions, see [Canary Runtime Versions](https://docs.aws.amazon.com/AmazonCloudWatch/latest/monitoring/CloudWatch_Synthetics_Canaries_Library.html).
   *
   * @public
   */
  RuntimeVersion?: string | undefined;

  /**
   * A structure that contains information about how often the canary is to run, and when these runs are to stop.
   *
   * @public
   */
  Schedule?: CanaryScheduleInput | undefined;

  /**
   * A structure that contains the timeout value that is used for each individual run of the canary.
   *
   * > **Important:** Environment variable keys and values are encrypted at rest using Amazon Web Services owned KMS keys. However, the environment variables are not encrypted on the client side. Do not store sensitive information in them.
   *
   * @public
   */
  RunConfig?: CanaryRunConfigInput | undefined;

  /**
   * The number of days to retain data about successful runs of this canary.
   *
   * This setting affects the range of information returned by [GetCanaryRuns](https://docs.aws.amazon.com/AmazonSynthetics/latest/APIReference/API_GetCanaryRuns.html), as well as the range of information displayed in the Synthetics console.
   *
   * @public
   */
  SuccessRetentionPeriodInDays?: number | undefined;

  /**
   * The number of days to retain data about failed runs of this canary.
   *
   * This setting affects the range of information returned by [GetCanaryRuns](https://docs.aws.amazon.com/AmazonSynthetics/latest/APIReference/API_GetCanaryRuns.html), as well as the range of information displayed in the Synthetics console.
   *
   * @public
   */
  FailureRetentionPeriodInDays?: number | undefined;

  /**
   * If this canary is to test an endpoint in a VPC, this structure contains information about the subnet and security groups of the VPC endpoint. For more information, see [Running a Canary in a VPC](https://docs.aws.amazon.com/AmazonCloudWatch/latest/monitoring/CloudWatch_Synthetics_Canaries_VPC.html).
   *
   * @public
   */
  VpcConfig?: VpcConfigInput | undefined;

  /**
   * Defines the screenshots to use as the baseline for comparisons during visual monitoring comparisons during future runs of this canary. If you omit this parameter, no changes are made to any baseline screenshots that the canary might be using already.
   *
   * Visual monitoring is supported only on canaries running the **syn-puppeteer-node-3.2** runtime or later. For more information, see [Visual monitoring](https://docs.aws.amazon.com/AmazonCloudWatch/latest/monitoring/CloudWatch_Synthetics_Library_SyntheticsLogger_VisualTesting.html) and [Visual monitoring blueprint](https://docs.aws.amazon.com/AmazonCloudWatch/latest/monitoring/CloudWatch_Synthetics_Canaries_Blueprints_VisualTesting.html)
   *
   * @public
   */
  VisualReference?: VisualReferenceInput | undefined;

  /**
   * The location in Amazon S3 where Synthetics stores artifacts from the test runs of this canary. Artifacts include the log file, screenshots, and HAR files. The name of the Amazon S3 bucket can't include a period (.).
   *
   * @public
   */
  ArtifactS3Location?: string | undefined;

  /**
   * A structure that contains the configuration for canary artifacts, including the encryption-at-rest settings for artifacts that the canary uploads to Amazon S3.
   *
   * @public
   */
  ArtifactConfig?: ArtifactConfigInput | undefined;

  /**
   * Specifies whether to also delete the Lambda functions and layers used by this canary when the canary is deleted.
   *
   * If the value of this parameter is `OFF`, then the value of the `DeleteLambda` parameter of the [DeleteCanary](https://docs.aws.amazon.com/AmazonSynthetics/latest/APIReference/API_DeleteCanary.html) operation determines whether the Lambda functions and layers will be deleted.
   *
   * @public
   */
  ProvisionedResourceCleanup?: ProvisionedResourceCleanupSetting | undefined;

  /**
   * Update the existing canary using the updated configurations from the DryRun associated with the DryRunId.
   *
   * > **Note:** When you use the `dryRunId` field when updating a canary, the only other field you can provide is the `Schedule`. Adding any other field will thrown an exception.
   *
   * @public
   */
  DryRunId?: string | undefined;

  /**
   * A list of visual reference configurations for the canary, one for each browser type that the canary is configured to run on. Visual references are used for visual monitoring comparisons.
   *
   * `syn-nodejs-puppeteer-11.0` and above, and `syn-nodejs-playwright-3.0` and above, only supports `visualReferences`. `visualReference` field is not supported.
   *
   * Versions older than `syn-nodejs-puppeteer-11.0` supports both `visualReference` and `visualReferences` for backward compatibility. It is recommended to use `visualReferences` for consistency and future compatibility.
   *
   * For multibrowser visual monitoring, you can update the baseline for all configured browsers in a single update call by specifying a list of VisualReference objects, one per browser. Each VisualReference object maps to a specific browser configuration, allowing you to manage visual baselines for multiple browsers simultaneously.
   *
   * For single configuration canaries using Chrome browser (default browser), use visualReferences for `syn-nodejs-puppeteer-11.0` and above, and `syn-nodejs-playwright-3.0` and above canaries. The browserType in the visualReference object is not mandatory.
   *
   * @public
   */
  VisualReferences?: VisualReferenceInput[] | undefined;

  /**
   * A structure that specifies the browser type to use for a canary run. CloudWatch Synthetics supports running canaries on both `CHROME` and `FIREFOX` browsers.
   *
   * > **Note:** If not specified, `browserConfigs` defaults to Chrome.
   *
   * @public
   */
  BrowserConfigs?: BrowserConfig[] | undefined;

  /**
   * A list of locations (Amazon Web Services Regions) to add as replicas for the canary. Each location specifies a Region and optional VPC configuration for the replica. You can add up to 50 replica locations.
   *
   * @public
   */
  AddReplicaLocations?: AddReplicaLocationInput[] | undefined;

  /**
   * A list of locations (Amazon Web Services Regions) to remove as replicas for the canary. You must specify at least one location to remove. All replicas can be removed in a single API call and you cannot remove the primary location.
   *
   * @public
   */
  RemoveReplicaLocations?: string[] | undefined;

  /**
   * The Amazon Resource Name (ARN) of the customer-managed AWS Key Management Service (AWS KMS) key used to encrypt the canary's AWS Lambda function environment variables at rest. If you don't specify a value, the service uses an AWS-managed key. If you omit this parameter, the service retains the existing value. To revert to the AWS-managed key, set this parameter to an empty string.
   *
   * @public
   */
  KmsKeyArn?: string | undefined;
}

/**
 * @public
 */
export interface UpdateCanaryResponse {}
