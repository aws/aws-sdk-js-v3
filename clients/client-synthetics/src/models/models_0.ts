// smithy-typescript generated code
import { ExceptionOptionType as __ExceptionOptionType } from "@smithy/smithy-client";

import { SyntheticsServiceException as __BaseException } from "./SyntheticsServiceException";

/**
 * <p>You don't have permission to perform this operation on this resource.</p>
 * @public
 */
export class AccessDeniedException extends __BaseException {
  readonly name: "AccessDeniedException" = "AccessDeniedException";
  readonly $fault: "client" = "client";
  Message?: string | undefined;
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
    this.Message = opts.Message;
  }
}

/**
 * @public
 * @enum
 */
export const EncryptionMode = {
  SSE_KMS: "SSE_KMS",
  SSE_S3: "SSE_S3",
} as const;

/**
 * @public
 */
export type EncryptionMode = (typeof EncryptionMode)[keyof typeof EncryptionMode];

/**
 * <p>A structure that contains the configuration of encryption-at-rest settings for canary artifacts that the canary
 *          uploads to Amazon S3. </p>
 *          <p>For more information, see
 *          <a href="https://docs.aws.amazon.com/AmazonCloudWatch/latest/monitoring/CloudWatch_Synthetics_artifact_encryption.html">Encrypting canary artifacts</a>
 *          </p>
 * @public
 */
export interface S3EncryptionConfig {
  /**
   * <p> The encryption method to use for artifacts created by this canary. Specify <code>SSE_S3</code> to use
   *          server-side encryption (SSE) with an Amazon S3-managed
   *          key. Specify <code>SSE-KMS</code> to use server-side encryption with a customer-managed KMS key.</p>
   *          <p>If you omit this parameter, an
   *             Amazon Web Services-managed KMS key is used.
   *         </p>
   * @public
   */
  EncryptionMode?: EncryptionMode | undefined;

  /**
   * <p>The ARN of the customer-managed KMS key to use, if you specify <code>SSE-KMS</code>
   *          for <code>EncryptionMode</code>
   *          </p>
   * @public
   */
  KmsKeyArn?: string | undefined;
}

/**
 * <p>A structure that contains the configuration for canary artifacts, including the
 *          encryption-at-rest settings for artifacts that the canary uploads to Amazon S3.</p>
 * @public
 */
export interface ArtifactConfigInput {
  /**
   * <p>A structure that contains the configuration of the encryption-at-rest settings for artifacts that the canary uploads
   *          to Amazon S3.
   *          Artifact encryption functionality is available only for canaries that use Synthetics runtime version
   *          syn-nodejs-puppeteer-3.3 or later. For more information, see
   *          <a href="https://docs.aws.amazon.com/AmazonCloudWatch/latest/monitoring/CloudWatch_Synthetics_artifact_encryption.html">Encrypting canary artifacts</a>
   *          </p>
   * @public
   */
  S3Encryption?: S3EncryptionConfig | undefined;
}

/**
 * <p>A structure that contains the configuration for canary artifacts, including
 *          the encryption-at-rest settings for artifacts that the canary uploads to Amazon S3.</p>
 * @public
 */
export interface ArtifactConfigOutput {
  /**
   * <p>A structure that contains the configuration of encryption settings for canary artifacts that are stored in Amazon S3. </p>
   * @public
   */
  S3Encryption?: S3EncryptionConfig | undefined;
}

/**
 * @public
 */
export interface AssociateResourceRequest {
  /**
   * <p>Specifies the group. You can specify the group name, the ARN, or the
   *          group ID as the <code>GroupIdentifier</code>.</p>
   * @public
   */
  GroupIdentifier: string | undefined;

  /**
   * <p>The ARN of the canary that you want to associate with the specified group.</p>
   * @public
   */
  ResourceArn: string | undefined;
}

/**
 * @public
 */
export interface AssociateResourceResponse {}

/**
 * <p>A conflicting operation is already in progress.</p>
 * @public
 */
export class ConflictException extends __BaseException {
  readonly name: "ConflictException" = "ConflictException";
  readonly $fault: "client" = "client";
  Message?: string | undefined;
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
    this.Message = opts.Message;
  }
}

/**
 * <p>An unknown internal error occurred.</p>
 * @public
 */
export class InternalServerException extends __BaseException {
  readonly name: "InternalServerException" = "InternalServerException";
  readonly $fault: "server" = "server";
  Message?: string | undefined;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<InternalServerException, __BaseException>) {
    super({
      name: "InternalServerException",
      $fault: "server",
      ...opts,
    });
    Object.setPrototypeOf(this, InternalServerException.prototype);
    this.Message = opts.Message;
  }
}

/**
 * <p>One of the specified resources was not found.</p>
 * @public
 */
export class ResourceNotFoundException extends __BaseException {
  readonly name: "ResourceNotFoundException" = "ResourceNotFoundException";
  readonly $fault: "client" = "client";
  Message?: string | undefined;
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
    this.Message = opts.Message;
  }
}

/**
 * <p>The request exceeded a service quota value.</p>
 * @public
 */
export class ServiceQuotaExceededException extends __BaseException {
  readonly name: "ServiceQuotaExceededException" = "ServiceQuotaExceededException";
  readonly $fault: "client" = "client";
  Message?: string | undefined;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<ServiceQuotaExceededException, __BaseException>) {
    super({
      name: "ServiceQuotaExceededException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, ServiceQuotaExceededException.prototype);
    this.Message = opts.Message;
  }
}

/**
 * <p>A parameter could not be validated.</p>
 * @public
 */
export class ValidationException extends __BaseException {
  readonly name: "ValidationException" = "ValidationException";
  readonly $fault: "client" = "client";
  Message?: string | undefined;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<ValidationException, __BaseException>) {
    super({
      name: "ValidationException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, ValidationException.prototype);
    this.Message = opts.Message;
  }
}

/**
 * <p>The request was not valid.</p>
 * @public
 */
export class BadRequestException extends __BaseException {
  readonly name: "BadRequestException" = "BadRequestException";
  readonly $fault: "client" = "client";
  Message?: string | undefined;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<BadRequestException, __BaseException>) {
    super({
      name: "BadRequestException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, BadRequestException.prototype);
    this.Message = opts.Message;
  }
}

/**
 * <p>A structure representing a screenshot that is used as a baseline during visual monitoring comparisons made by the canary.</p>
 * @public
 */
export interface BaseScreenshot {
  /**
   * <p>The name of the screenshot. This is generated the first time the canary is run after the <code>UpdateCanary</code> operation that
   *       specified for this canary to perform visual monitoring.</p>
   * @public
   */
  ScreenshotName: string | undefined;

  /**
   * <p>Coordinates that define the part of a screen to ignore during screenshot comparisons. To obtain the
   *          coordinates to use here, use the
   *          CloudWatch console to draw the boundaries on the screen. For more information, see
   *          <a href="https://docs.aws.amazon.com/AmazonCloudWatch/latest/monitoring/synthetics_canaries_deletion.html">
   *             Editing or deleting a canary</a>
   *          </p>
   * @public
   */
  IgnoreCoordinates?: string[] | undefined;
}

/**
 * @public
 * @enum
 */
export const BrowserType = {
  CHROME: "CHROME",
  FIREFOX: "FIREFOX",
} as const;

/**
 * @public
 */
export type BrowserType = (typeof BrowserType)[keyof typeof BrowserType];

/**
 * <p>A structure that specifies the browser type to use for a canary run.</p>
 * @public
 */
export interface BrowserConfig {
  /**
   * <p>The browser type associated with this browser configuration.</p>
   * @public
   */
  BrowserType?: BrowserType | undefined;
}

/**
 * @public
 * @enum
 */
export const DependencyType = {
  LambdaLayer: "LambdaLayer",
} as const;

/**
 * @public
 */
export type DependencyType = (typeof DependencyType)[keyof typeof DependencyType];

/**
 * <p>A structure that contains information about a dependency for a canary.</p>
 * @public
 */
export interface Dependency {
  /**
   * <p>The type of dependency. Valid value is <code>LambdaLayer</code>.</p>
   * @public
   */
  Type?: DependencyType | undefined;

  /**
   * <p>The dependency reference. For Lambda layers, this is the ARN of the Lambda layer. For more information
   *          about Lambda ARN format, see <a href="https://docs.aws.amazon.com/lambda/latest/api/API_Layer.html">Lambda</a>.</p>
   * @public
   */
  Reference: string | undefined;
}

/**
 * <p>This structure contains information about the canary's Lambda handler and
 *       where its code is stored by CloudWatch Synthetics.</p>
 * @public
 */
export interface CanaryCodeOutput {
  /**
   * <p>The ARN of the Lambda layer where Synthetics stores the canary script code.</p>
   * @public
   */
  SourceLocationArn?: string | undefined;

  /**
   * <p>The entry point to use for the source code when running the canary.</p>
   * @public
   */
  Handler?: string | undefined;

  /**
   * <p>A list of dependencies that are used for running this canary. The dependencies are specified as a key-value pair, where the key is the type of dependency and the value is the dependency reference.</p>
   * @public
   */
  Dependencies?: Dependency[] | undefined;
}

/**
 * <p>Returns the dry run configurations set for a canary.</p>
 * @public
 */
export interface DryRunConfigOutput {
  /**
   * <p>The DryRunId associated with an existing canary’s dry run. You can use this DryRunId to retrieve information about the dry run.</p>
   * @public
   */
  DryRunId?: string | undefined;

  /**
   * <p>Returns the last execution status for a canary's dry run.</p>
   * @public
   */
  LastDryRunExecutionStatus?: string | undefined;
}

/**
 * <p>A structure of engine configurations for the canary, one for each browser type that the canary is configured to run on.</p>
 * @public
 */
export interface EngineConfig {
  /**
   * <p>Each engine configuration contains the ARN of the Lambda function that is used as the canary's engine for a specific browser type.
   *          </p>
   * @public
   */
  EngineArn?: string | undefined;

  /**
   * <p>The browser type associated with this engine configuration.</p>
   * @public
   */
  BrowserType?: BrowserType | undefined;
}

/**
 * @public
 * @enum
 */
export const ProvisionedResourceCleanupSetting = {
  AUTOMATIC: "AUTOMATIC",
  OFF: "OFF",
} as const;

/**
 * @public
 */
export type ProvisionedResourceCleanupSetting =
  (typeof ProvisionedResourceCleanupSetting)[keyof typeof ProvisionedResourceCleanupSetting];

/**
 * <p>A structure that contains information about a canary run.</p>
 * @public
 */
export interface CanaryRunConfigOutput {
  /**
   * <p>How long the canary is allowed to run before it must stop.</p>
   * @public
   */
  TimeoutInSeconds?: number | undefined;

  /**
   * <p>The maximum amount of memory available to the canary while it is running, in MB. This value
   *          must be a multiple of 64.</p>
   * @public
   */
  MemoryInMB?: number | undefined;

  /**
   * <p>Displays whether this canary run used active X-Ray tracing. </p>
   * @public
   */
  ActiveTracing?: boolean | undefined;

  /**
   * <p>Specifies the amount of ephemeral storage (in MB) to allocate for the canary run during execution. This temporary storage is used for storing canary run artifacts (which are uploaded to an Amazon S3 bucket at the end of the run), and any canary browser operations. This temporary storage is cleared after the run is completed. Default storage value is 1024 MB.</p>
   * @public
   */
  EphemeralStorage?: number | undefined;
}

/**
 * <p>This structure contains information about the canary's retry configuration.</p>
 * @public
 */
export interface RetryConfigOutput {
  /**
   * <p>The maximum number of retries. The value must be less than or equal to 2.</p>
   * @public
   */
  MaxRetries?: number | undefined;
}

/**
 * <p>How long, in seconds, for the canary to continue making regular runs according to the schedule in the
 *          <code>Expression</code> value.</p>
 * @public
 */
export interface CanaryScheduleOutput {
  /**
   * <p>A <code>rate</code> expression or a <code>cron</code> expression that defines how often the canary is to run.</p>
   *          <p>For a rate expression, The syntax is
   *          <code>rate(<i>number unit</i>)</code>. <i>unit</i>
   *          can be <code>minute</code>, <code>minutes</code>, or <code>hour</code>. </p>
   *          <p>For example, <code>rate(1 minute)</code> runs the canary once a minute, <code>rate(10 minutes)</code> runs it once every
   *          10 minutes, and <code>rate(1 hour)</code> runs it once every hour. You can
   *          specify a frequency between <code>rate(1 minute)</code> and <code>rate(1 hour)</code>.</p>
   *          <p>Specifying <code>rate(0 minute)</code> or <code>rate(0 hour)</code> is a special value
   *          that causes the
   *          canary to run only once when it is started.</p>
   *          <p>Use <code>cron(<i>expression</i>)</code> to specify a cron
   *          expression. For information about the syntax for cron expressions, see
   *          <a href="https://docs.aws.amazon.com/AmazonCloudWatch/latest/monitoring/CloudWatch_Synthetics_Canaries_cron.html">
   *             Scheduling canary runs using cron</a>.</p>
   * @public
   */
  Expression?: string | undefined;

  /**
   * <p>How long, in seconds, for the canary to continue making regular runs after it
   *          was created. The runs are performed according to the schedule in the
   *          <code>Expression</code> value.</p>
   * @public
   */
  DurationInSeconds?: number | undefined;

  /**
   * <p>A structure that contains the retry configuration for a canary</p>
   * @public
   */
  RetryConfig?: RetryConfigOutput | undefined;
}

/**
 * @public
 * @enum
 */
export const CanaryState = {
  CREATING: "CREATING",
  DELETING: "DELETING",
  ERROR: "ERROR",
  READY: "READY",
  RUNNING: "RUNNING",
  STARTING: "STARTING",
  STOPPED: "STOPPED",
  STOPPING: "STOPPING",
  UPDATING: "UPDATING",
} as const;

/**
 * @public
 */
export type CanaryState = (typeof CanaryState)[keyof typeof CanaryState];

/**
 * @public
 * @enum
 */
export const CanaryStateReasonCode = {
  CREATE_FAILED: "CREATE_FAILED",
  CREATE_IN_PROGRESS: "CREATE_IN_PROGRESS",
  CREATE_PENDING: "CREATE_PENDING",
  DELETE_FAILED: "DELETE_FAILED",
  DELETE_IN_PROGRESS: "DELETE_IN_PROGRESS",
  INVALID_PERMISSIONS: "INVALID_PERMISSIONS",
  ROLLBACK_COMPLETE: "ROLLBACK_COMPLETE",
  ROLLBACK_FAILED: "ROLLBACK_FAILED",
  SYNC_DELETE_IN_PROGRESS: "SYNC_DELETE_IN_PROGRESS",
  UPDATE_COMPLETE: "UPDATE_COMPLETE",
  UPDATE_IN_PROGRESS: "UPDATE_IN_PROGRESS",
  UPDATE_PENDING: "UPDATE_PENDING",
} as const;

/**
 * @public
 */
export type CanaryStateReasonCode = (typeof CanaryStateReasonCode)[keyof typeof CanaryStateReasonCode];

/**
 * <p>A structure that contains the current state of the canary.</p>
 * @public
 */
export interface CanaryStatus {
  /**
   * <p>The current state of the canary.</p>
   * @public
   */
  State?: CanaryState | undefined;

  /**
   * <p>If the canary creation or update failed, this field provides details on the failure.</p>
   * @public
   */
  StateReason?: string | undefined;

  /**
   * <p>If the canary creation or update failed, this field displays the reason code.</p>
   * @public
   */
  StateReasonCode?: CanaryStateReasonCode | undefined;
}

/**
 * <p>This structure contains information about when the canary was created and modified.</p>
 * @public
 */
export interface CanaryTimeline {
  /**
   * <p>The date and time the canary was created.</p>
   * @public
   */
  Created?: Date | undefined;

  /**
   * <p>The date and time the canary was most recently modified.</p>
   * @public
   */
  LastModified?: Date | undefined;

  /**
   * <p>The date and time that the canary's most recent run started.</p>
   * @public
   */
  LastStarted?: Date | undefined;

  /**
   * <p>The date and time that the canary's most recent run ended.</p>
   * @public
   */
  LastStopped?: Date | undefined;
}

/**
 * <p>If this canary performs visual monitoring by comparing screenshots, this structure contains the ID of the canary run that is used as the baseline for screenshots, and the coordinates
 *          of any parts of those screenshots that are ignored during visual monitoring comparison.</p>
 *          <p>Visual monitoring is supported only on canaries running the <b>syn-puppeteer-node-3.2</b> runtime or later.</p>
 * @public
 */
export interface VisualReferenceOutput {
  /**
   * <p>An array of screenshots that are used as the baseline for comparisons during visual monitoring.</p>
   * @public
   */
  BaseScreenshots?: BaseScreenshot[] | undefined;

  /**
   * <p>The ID of the canary run that produced the baseline screenshots
   *          that are used for visual monitoring comparisons by this canary.</p>
   * @public
   */
  BaseCanaryRunId?: string | undefined;

  /**
   * <p>The browser type associated with this visual reference.</p>
   * @public
   */
  BrowserType?: BrowserType | undefined;
}

/**
 * <p>If this canary is to test an endpoint in a VPC, this structure contains
 *          information about the subnets and security groups of the VPC endpoint.
 *          For more information, see <a href="https://docs.aws.amazon.com/AmazonCloudWatch/latest/monitoring/CloudWatch_Synthetics_Canaries_VPC.html">
 *             Running a Canary in a VPC</a>.</p>
 * @public
 */
export interface VpcConfigOutput {
  /**
   * <p>The IDs of the VPC where this canary is to run.</p>
   * @public
   */
  VpcId?: string | undefined;

  /**
   * <p>The IDs of the subnets where this canary is to run.</p>
   * @public
   */
  SubnetIds?: string[] | undefined;

  /**
   * <p>The IDs of the security groups for this canary.</p>
   * @public
   */
  SecurityGroupIds?: string[] | undefined;

  /**
   * <p>Indicates whether this canary allows outbound IPv6 traffic if it is connected to dual-stack subnets.</p>
   * @public
   */
  Ipv6AllowedForDualStack?: boolean | undefined;
}

/**
 * <p>This structure contains all information about one canary in your account.</p>
 * @public
 */
export interface Canary {
  /**
   * <p>The unique ID of this canary.</p>
   * @public
   */
  Id?: string | undefined;

  /**
   * <p>The name of the canary.</p>
   * @public
   */
  Name?: string | undefined;

  /**
   * <p>This structure contains information about the canary's Lambda handler and
   *       where its code is stored by CloudWatch Synthetics.</p>
   * @public
   */
  Code?: CanaryCodeOutput | undefined;

  /**
   * <p>The ARN of the IAM role used to run the canary. This role must include <code>lambda.amazonaws.com</code> as a principal in the trust
   *          policy.</p>
   * @public
   */
  ExecutionRoleArn?: string | undefined;

  /**
   * <p>A structure that contains information about how often the canary is to run, and when
   *          these runs are to stop.</p>
   * @public
   */
  Schedule?: CanaryScheduleOutput | undefined;

  /**
   * <p>A structure that contains information about a canary run.</p>
   * @public
   */
  RunConfig?: CanaryRunConfigOutput | undefined;

  /**
   * <p>The number of days to retain data about successful runs of this canary.</p>
   *          <p>This setting affects the range of information returned by <a href="https://docs.aws.amazon.com/AmazonSynthetics/latest/APIReference/API_GetCanaryRuns.html">GetCanaryRuns</a>, as well as
   *          the range of information displayed in the Synthetics console.
   *       </p>
   * @public
   */
  SuccessRetentionPeriodInDays?: number | undefined;

  /**
   * <p>The number of days to retain data about failed runs of this canary.</p>
   *          <p>This setting affects the range of information returned by <a href="https://docs.aws.amazon.com/AmazonSynthetics/latest/APIReference/API_GetCanaryRuns.html">GetCanaryRuns</a>, as well as
   *          the range of information displayed in the Synthetics console.
   *       </p>
   * @public
   */
  FailureRetentionPeriodInDays?: number | undefined;

  /**
   * <p>A structure that contains information about the canary's status.</p>
   * @public
   */
  Status?: CanaryStatus | undefined;

  /**
   * <p>A structure that contains information about when the canary was created, modified, and
   *          most recently run.</p>
   * @public
   */
  Timeline?: CanaryTimeline | undefined;

  /**
   * <p>The location in Amazon S3 where Synthetics stores artifacts from the runs of this
   *          canary. Artifacts include the log file, screenshots, and HAR files.</p>
   * @public
   */
  ArtifactS3Location?: string | undefined;

  /**
   * <p>The ARN of the Lambda function that is used as your canary's engine. For more information
   *          about Lambda ARN format, see <a href="https://docs.aws.amazon.com/lambda/latest/dg/lambda-api-permissions-ref.html">Resources and Conditions for Lambda Actions</a>.</p>
   * @public
   */
  EngineArn?: string | undefined;

  /**
   * <p>Specifies the runtime version to use for the canary. For more information about
   *          runtime versions, see <a href="https://docs.aws.amazon.com/AmazonCloudWatch/latest/monitoring/CloudWatch_Synthetics_Canaries_Library.html">
   *             Canary Runtime Versions</a>.</p>
   * @public
   */
  RuntimeVersion?: string | undefined;

  /**
   * <p>If this canary is to test an endpoint in a VPC, this structure contains
   *          information about the subnets and security groups of the VPC endpoint.
   *          For more information, see <a href="https://docs.aws.amazon.com/AmazonCloudWatch/latest/monitoring/CloudWatch_Synthetics_Canaries_VPC.html">
   *             Running a Canary in a VPC</a>.</p>
   * @public
   */
  VpcConfig?: VpcConfigOutput | undefined;

  /**
   * <p>If this canary performs visual monitoring by comparing screenshots, this structure contains the ID of the canary run to use as the baseline for screenshots, and the coordinates
   *       of any parts of the screen to ignore during the visual monitoring comparison.</p>
   * @public
   */
  VisualReference?: VisualReferenceOutput | undefined;

  /**
   * <p>Specifies whether to also delete the Lambda functions and layers used by this canary
   *          when the canary is deleted. If it is <code>AUTOMATIC</code>, the Lambda functions and layers will be deleted
   *          when the canary is deleted.</p>
   *          <p>If the value of this parameter is <code>OFF</code>, then the value of the <code>DeleteLambda</code> parameter
   *          of the <a href="https://docs.aws.amazon.com/AmazonSynthetics/latest/APIReference/API_DeleteCanary.html">DeleteCanary</a> operation
   *          determines whether the Lambda functions and layers will be deleted.</p>
   * @public
   */
  ProvisionedResourceCleanup?: ProvisionedResourceCleanupSetting | undefined;

  /**
   * <p>A structure that specifies the browser type to use for a canary run. CloudWatch Synthetics supports running canaries on both <code>CHROME</code> and <code>FIREFOX</code> browsers.</p>
   *          <note>
   *             <p>If not specified, <code>browserConfigs</code> defaults to Chrome.</p>
   *          </note>
   * @public
   */
  BrowserConfigs?: BrowserConfig[] | undefined;

  /**
   * <p>A list of engine configurations for the canary, one for each browser type that the canary is configured to run on.</p>
   *          <p>All runtime versions <code>syn-nodejs-puppeteer-11.0</code> and above, and <code>syn-nodejs-playwright-3.0</code> and above, use <code>engineConfigs</code> only.
   *          You can no longer use <code>engineArn</code> in these versions.</p>
   *          <p>Runtime versions older than <code>syn-nodejs-puppeteer-11.0</code> and <code>syn-nodejs-playwright-3.0</code> continue to support <code>engineArn</code> to ensure backward compatibility.</p>
   * @public
   */
  EngineConfigs?: EngineConfig[] | undefined;

  /**
   * <p>A list of visual reference configurations for the canary, one for each browser type that the canary is configured to run on. Visual references are used for visual monitoring comparisons.</p>
   *          <p>
   *             <code>syn-nodejs-puppeteer-11.0</code> and above, and <code>syn-nodejs-playwright-3.0</code> and above, only supports <code>visualReferences</code>. <code>visualReference</code> field is not supported.</p>
   *          <p>Versions older than <code>syn-nodejs-puppeteer-11.0</code> supports both <code>visualReference</code> and <code>visualReferences</code> for backward compatibility. It is recommended to use <code>visualReferences</code>
   *          for consistency and future compatibility.</p>
   * @public
   */
  VisualReferences?: VisualReferenceOutput[] | undefined;

  /**
   * <p>The list of key-value pairs that are associated with the canary.</p>
   * @public
   */
  Tags?: Record<string, string> | undefined;

  /**
   * <p>A structure that contains the configuration for canary artifacts, including
   *          the encryption-at-rest settings for artifacts that the canary uploads to Amazon S3.</p>
   * @public
   */
  ArtifactConfig?: ArtifactConfigOutput | undefined;

  /**
   * <p>Returns the dry run configurations for a canary.</p>
   * @public
   */
  DryRunConfig?: DryRunConfigOutput | undefined;
}

/**
 * <p>Returns the dry run configurations set for a canary.</p>
 * @public
 */
export interface CanaryDryRunConfigOutput {
  /**
   * <p>The DryRunId associated with an existing canary’s dry run. You can use this DryRunId to retrieve information about the dry run.</p>
   * @public
   */
  DryRunId?: string | undefined;
}

/**
 * @public
 * @enum
 */
export const CanaryRunState = {
  FAILED: "FAILED",
  PASSED: "PASSED",
  RUNNING: "RUNNING",
} as const;

/**
 * @public
 */
export type CanaryRunState = (typeof CanaryRunState)[keyof typeof CanaryRunState];

/**
 * @public
 * @enum
 */
export const CanaryRunStateReasonCode = {
  CANARY_FAILURE: "CANARY_FAILURE",
  EXECUTION_FAILURE: "EXECUTION_FAILURE",
} as const;

/**
 * @public
 */
export type CanaryRunStateReasonCode = (typeof CanaryRunStateReasonCode)[keyof typeof CanaryRunStateReasonCode];

/**
 * @public
 * @enum
 */
export const CanaryRunTestResult = {
  FAILED: "FAILED",
  PASSED: "PASSED",
  UNKNOWN: "UNKNOWN",
} as const;

/**
 * @public
 */
export type CanaryRunTestResult = (typeof CanaryRunTestResult)[keyof typeof CanaryRunTestResult];

/**
 * <p>This structure contains the status information about a canary run.</p>
 * @public
 */
export interface CanaryRunStatus {
  /**
   * <p>The current state of the run.</p>
   * @public
   */
  State?: CanaryRunState | undefined;

  /**
   * <p>If run of the canary failed, this field contains the reason for the error.</p>
   * @public
   */
  StateReason?: string | undefined;

  /**
   * <p>If this value is <code>CANARY_FAILURE</code>, either the canary script failed or Synthetics ran into a fatal error when running the canary. For example,  a canary timeout misconfiguration setting can cause the canary to timeout before Synthetics can evaluate its status.
   *         </p>
   *          <p> If this value is <code>EXECUTION_FAILURE</code>, a non-critical failure occurred such as failing to save generated debug artifacts (for example, screenshots or har files).</p>
   *          <p>If both types of failures occurred, the <code>CANARY_FAILURE</code> takes precedence. To understand the exact error, use the <a href="https://docs.aws.amazon.com/AmazonSynthetics/latest/APIReference/API_CanaryRunStatus.html">StateReason</a> API.</p>
   * @public
   */
  StateReasonCode?: CanaryRunStateReasonCode | undefined;

  /**
   * <p>Specifies the status of canary script for this run. When Synthetics tries to determine the status but fails, the result is marked as <code>UNKNOWN</code>.
   *          For the overall status of canary run, see <a href="https://docs.aws.amazon.com/AmazonSynthetics/latest/APIReference/API_CanaryRunStatus.html">State</a>.</p>
   * @public
   */
  TestResult?: CanaryRunTestResult | undefined;
}

/**
 * <p>This structure contains the start and end times of a single canary run.</p>
 * @public
 */
export interface CanaryRunTimeline {
  /**
   * <p>The start time of the run.</p>
   * @public
   */
  Started?: Date | undefined;

  /**
   * <p>The end time of the run.</p>
   * @public
   */
  Completed?: Date | undefined;

  /**
   * <p>The time at which the metrics will be generated for this run or retries.</p>
   * @public
   */
  MetricTimestampForRunAndRetries?: Date | undefined;
}

/**
 * <p>This structure contains the details about one run of one canary.</p>
 * @public
 */
export interface CanaryRun {
  /**
   * <p>A unique ID that identifies this canary run.</p>
   * @public
   */
  Id?: string | undefined;

  /**
   * <p>The ID of the scheduled canary run.</p>
   * @public
   */
  ScheduledRunId?: string | undefined;

  /**
   * <p>The count in number of the retry attempt.</p>
   * @public
   */
  RetryAttempt?: number | undefined;

  /**
   * <p>The name of the canary.</p>
   * @public
   */
  Name?: string | undefined;

  /**
   * <p>The status of this run.</p>
   * @public
   */
  Status?: CanaryRunStatus | undefined;

  /**
   * <p>A structure that contains the start and end times of this run.</p>
   * @public
   */
  Timeline?: CanaryRunTimeline | undefined;

  /**
   * <p>The location where the canary stored artifacts from the run. Artifacts include
   *          the log file, screenshots, and HAR files.</p>
   * @public
   */
  ArtifactS3Location?: string | undefined;

  /**
   * <p>Returns the dry run configurations for a canary.</p>
   * @public
   */
  DryRunConfig?: CanaryDryRunConfigOutput | undefined;

  /**
   * <p>The browser type associated with this canary run.</p>
   * @public
   */
  BrowserType?: BrowserType | undefined;
}

/**
 * <p>This structure contains information about the most recent run of a single canary.</p>
 * @public
 */
export interface CanaryLastRun {
  /**
   * <p>The name of the canary.</p>
   * @public
   */
  CanaryName?: string | undefined;

  /**
   * <p>The results from this canary's most recent run.</p>
   * @public
   */
  LastRun?: CanaryRun | undefined;
}

/**
 * <p>Use this structure to input your script code for the canary. This structure contains the
 *          Lambda handler with the location where the canary should start running the script. If the
 *          script is stored in an Amazon S3 bucket, the bucket name, key, and version are also included. If
 *          the script was passed into the canary directly, the script code is contained in the value
 *          of <code>Zipfile</code>. </p>
 *          <p>If you are uploading your canary scripts with an Amazon S3 bucket, your zip file should include your
 *       script in a certain folder structure.</p>
 *          <ul>
 *             <li>
 *                <p>For Node.js canaries, the folder structure must be <code>nodejs/node_modules/<i>myCanaryFilename.js</i>
 *                   </code>
 *             For more information, see <a href="https://docs.aws.amazon.com/AmazonCloudWatch/latest/monitoring/CloudWatch_Synthetics_Canaries_WritingCanary_Nodejs.html#CloudWatch_Synthetics_Canaries_package">Packaging your Node.js canary files</a>
 *                </p>
 *             </li>
 *             <li>
 *                <p>For Python canaries, the folder structure must be <code>python/<i>myCanaryFilename.py</i>
 *                   </code> or <code>python/<i>myFolder/myCanaryFilename.py</i>
 *                   </code>
 *             For more information, see <a href="https://docs.aws.amazon.com/AmazonCloudWatch/latest/monitoring/CloudWatch_Synthetics_Canaries_WritingCanary_Python.html#CloudWatch_Synthetics_Canaries_WritingCanary_Python_package">Packaging your Python canary files</a>
 *                </p>
 *             </li>
 *          </ul>
 * @public
 */
export interface CanaryCodeInput {
  /**
   * <p>If your canary script is located in Amazon S3, specify the bucket name here. Do not include <code>s3://</code> as the
   *          start of the bucket name.</p>
   * @public
   */
  S3Bucket?: string | undefined;

  /**
   * <p>The Amazon S3 key of your script. For more information, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/dev/UsingObjects.html">Working with Amazon S3 Objects</a>.</p>
   * @public
   */
  S3Key?: string | undefined;

  /**
   * <p>The Amazon S3 version ID of your script.</p>
   * @public
   */
  S3Version?: string | undefined;

  /**
   * <p>If you input your canary script directly into the canary instead of referring to an Amazon S3
   *          location, the value of this parameter is the base64-encoded contents of the .zip file that
   *          contains the script. It must be smaller than 225 Kb.</p>
   *          <p>For large canary scripts, we recommend that you use an Amazon S3 location instead of inputting it
   *       directly with this parameter.</p>
   * @public
   */
  ZipFile?: Uint8Array | undefined;

  /**
   * <p>The entry point to use for the source code when running the canary. For canaries that use the
   *          <code>syn-python-selenium-1.0</code> runtime
   *          or a <code>syn-nodejs.puppeteer</code> runtime earlier than <code>syn-nodejs.puppeteer-3.4</code>,
   *          the handler must be specified as <code>
   *                <i>fileName</i>.handler</code>. For
   *          <code>syn-python-selenium-1.1</code>, <code>syn-nodejs.puppeteer-3.4</code>, and later runtimes, the handler can be specified as
   *             <code>
   *                <i>fileName</i>.<i>functionName</i>
   *             </code>, or
   *             you can specify a folder where canary scripts reside as
   * <code>
   *                <i>folder</i>/<i>fileName</i>.<i>functionName</i>
   *             </code>.</p>
   * @public
   */
  Handler: string | undefined;

  /**
   * <p>A list of dependencies that should be used for running this canary. Specify the dependencies as a key-value pair, where the key is the type of dependency and the value is the dependency reference.</p>
   * @public
   */
  Dependencies?: Dependency[] | undefined;
}

/**
 * <p>A structure that contains input information for a canary run.</p>
 * @public
 */
export interface CanaryRunConfigInput {
  /**
   * <p>How long the canary is allowed to run before it must stop. You can't set this time to be longer
   *          than the frequency of the runs of this canary.</p>
   *          <p>If you omit this field, the
   *          frequency of the canary is used as this value, up to a maximum of 14 minutes.</p>
   * @public
   */
  TimeoutInSeconds?: number | undefined;

  /**
   * <p>The maximum amount of memory available to the canary while it is running, in MB. This value must be a multiple of 64.</p>
   * @public
   */
  MemoryInMB?: number | undefined;

  /**
   * <p>Specifies whether this canary is to use active X-Ray tracing when it runs. Active tracing
   *          enables
   *          this canary run to be displayed in the ServiceLens and X-Ray service maps even if the canary does
   *          not hit an endpoint that has X-Ray tracing enabled. Using X-Ray tracing incurs charges.
   *       For more information, see  <a href="https://docs.aws.amazon.com/AmazonCloudWatch/latest/monitoring/CloudWatch_Synthetics_Canaries_tracing.html">
   *          Canaries and X-Ray tracing</a>.</p>
   *          <p>You can enable active tracing only for canaries that use version <code>syn-nodejs-2.0</code>
   *       or later for their canary runtime.</p>
   * @public
   */
  ActiveTracing?: boolean | undefined;

  /**
   * <p>Specifies the keys and values to use for any environment variables
   *       used in the canary script. Use the following format:</p>
   *          <p>\{ "key1" : "value1", "key2" : "value2", ...\}</p>
   *          <p>Keys must start with a letter and be at least two characters. The total size
   *          of your environment variables cannot exceed 4 KB. You can't specify any Lambda
   *          reserved environment variables as the keys for your environment variables. For
   *          more information about reserved keys, see <a href="https://docs.aws.amazon.com/lambda/latest/dg/configuration-envvars.html#configuration-envvars-runtime">
   *             Runtime environment variables</a>.</p>
   *          <important>
   *             <p>Environment variable keys and values are encrypted at rest using Amazon Web Services owned KMS keys. However, the environment variables
   *          are not encrypted on the client side. Do not store sensitive information
   *          in them.</p>
   *          </important>
   * @public
   */
  EnvironmentVariables?: Record<string, string> | undefined;

  /**
   * <p>Specifies the amount of ephemeral storage (in MB) to allocate for the canary run during execution. This temporary storage is used for storing canary run artifacts (which are uploaded to an Amazon S3 bucket at the end of the run), and any canary browser operations. This temporary storage is cleared after the run is completed. Default storage value is 1024 MB.</p>
   * @public
   */
  EphemeralStorage?: number | undefined;
}

/**
 * <p>This structure contains information about the canary's retry configuration.</p>
 *          <note>
 *             <p>The default account level concurrent execution limit from Lambda is 1000. When you have more than 1000 canaries, it's possible there are more than 1000 Lambda invocations due to retries and the console might hang. For more information on the Lambda execution limit,
 *             see <a href="https://docs.aws.amazon.com/lambda/latest/dg/lambda-concurrency.html#:~:text=As%20your%20functions%20receive%20more,functions%20in%20an%20AWS%20Region">Understanding Lambda function scaling</a>.</p>
 *          </note>
 *          <note>
 *             <p>For canary with <code>MaxRetries = 2</code>, you need to set the <code>CanaryRunConfigInput.TimeoutInSeconds</code> to less than 600 seconds to avoid validation errors.</p>
 *          </note>
 * @public
 */
export interface RetryConfigInput {
  /**
   * <p>The maximum number of retries. The value must be less than or equal to 2.</p>
   * @public
   */
  MaxRetries: number | undefined;
}

/**
 * <p>This structure specifies how often a canary is to make runs and the date and time
 *          when it should stop making runs.</p>
 * @public
 */
export interface CanaryScheduleInput {
  /**
   * <p>A <code>rate</code> expression or a <code>cron</code> expression that defines how often the canary is to run.</p>
   *          <p>For a rate expression, The syntax is
   *                <code>rate(<i>number unit</i>)</code>. <i>unit</i>
   *          can be <code>minute</code>, <code>minutes</code>, or <code>hour</code>. </p>
   *          <p>For example, <code>rate(1 minute)</code> runs the canary once a minute, <code>rate(10 minutes)</code> runs it once every
   *       10 minutes, and <code>rate(1 hour)</code> runs it once every hour. You can
   *          specify a frequency between <code>rate(1 minute)</code> and <code>rate(1 hour)</code>.</p>
   *          <p>Specifying <code>rate(0 minute)</code> or <code>rate(0 hour)</code> is a special value
   *          that causes the
   *          canary to run only once when it is started.</p>
   *          <p>Use <code>cron(<i>expression</i>)</code> to specify a cron
   *          expression. You can't schedule a canary to wait for more than a year before running. For information about the syntax for cron expressions, see
   *          <a href="https://docs.aws.amazon.com/AmazonCloudWatch/latest/monitoring/CloudWatch_Synthetics_Canaries_cron.html">
   *             Scheduling canary runs using cron</a>.</p>
   * @public
   */
  Expression: string | undefined;

  /**
   * <p>How long, in seconds, for the canary to continue making regular runs according to
   *          the schedule in the <code>Expression</code> value. If you specify 0, the canary continues
   *          making runs until you stop it. If you omit this field, the default of 0 is used.</p>
   * @public
   */
  DurationInSeconds?: number | undefined;

  /**
   * <p>A structure that contains the retry configuration for a canary</p>
   * @public
   */
  RetryConfig?: RetryConfigInput | undefined;
}

/**
 * @public
 * @enum
 */
export const ResourceToTag = {
  LAMBDA_FUNCTION: "lambda-function",
} as const;

/**
 * @public
 */
export type ResourceToTag = (typeof ResourceToTag)[keyof typeof ResourceToTag];

/**
 * <p>If this canary is to test an endpoint in a VPC, this structure contains
 *          information about the subnets and security groups of the VPC endpoint.
 *          For more information, see <a href="https://docs.aws.amazon.com/AmazonCloudWatch/latest/monitoring/CloudWatch_Synthetics_Canaries_VPC.html">
 *             Running a Canary in a VPC</a>.</p>
 * @public
 */
export interface VpcConfigInput {
  /**
   * <p>The IDs of the subnets where this canary is to run.</p>
   * @public
   */
  SubnetIds?: string[] | undefined;

  /**
   * <p>The IDs of the security groups for this canary.</p>
   * @public
   */
  SecurityGroupIds?: string[] | undefined;

  /**
   * <p>Set this to <code>true</code> to allow outbound IPv6 traffic on VPC canaries that are connected to dual-stack subnets. The default is <code>false</code>
   *          </p>
   * @public
   */
  Ipv6AllowedForDualStack?: boolean | undefined;
}

/**
 * @public
 */
export interface CreateCanaryRequest {
  /**
   * <p>The name for this canary. Be sure to give it a descriptive name
   *          that distinguishes it from other canaries in your account.</p>
   *          <p>Do not include secrets or proprietary information in your canary names. The canary name
   *          makes up part of the canary ARN, and the ARN is included in outbound calls over the
   *          internet. For more information, see <a href="https://docs.aws.amazon.com/AmazonCloudWatch/latest/monitoring/servicelens_canaries_security.html">Security
   *             Considerations for Synthetics Canaries</a>.</p>
   * @public
   */
  Name: string | undefined;

  /**
   * <p>A structure that includes the entry point from which the canary should start
   *          running your script. If the script is stored in
   *          an Amazon S3 bucket, the bucket name, key, and version are also included.
   *       </p>
   * @public
   */
  Code: CanaryCodeInput | undefined;

  /**
   * <p>The location in Amazon S3 where Synthetics stores artifacts from the test runs of this
   *          canary. Artifacts include the log file, screenshots, and HAR files.  The name of the
   *          Amazon S3 bucket can't include a period (.).</p>
   * @public
   */
  ArtifactS3Location: string | undefined;

  /**
   * <p>The ARN of the IAM role to be used to run the canary. This role must already exist,
   *          and must include <code>lambda.amazonaws.com</code> as a principal in the trust
   *          policy. The role must also have the following permissions:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>s3:PutObject</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>s3:GetBucketLocation</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>s3:ListAllMyBuckets</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>cloudwatch:PutMetricData</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>logs:CreateLogGroup</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>logs:CreateLogStream</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>logs:PutLogEvents</code>
   *                </p>
   *             </li>
   *          </ul>
   * @public
   */
  ExecutionRoleArn: string | undefined;

  /**
   * <p>A structure that contains information about how often the canary is to run and when
   *          these test runs are to stop.</p>
   * @public
   */
  Schedule: CanaryScheduleInput | undefined;

  /**
   * <p>A structure that contains the configuration for individual canary runs,
   *          such as timeout value and environment variables.</p>
   *          <important>
   *             <p>Environment variable keys and values are encrypted at rest using Amazon Web Services owned KMS keys. However, the environment variables
   *          are not encrypted on the client side. Do not store sensitive information
   *          in them.</p>
   *          </important>
   * @public
   */
  RunConfig?: CanaryRunConfigInput | undefined;

  /**
   * <p>The number of days to retain data about successful runs of this canary. If you omit
   *          this field, the default of 31 days is used. The valid range is 1 to 455 days.</p>
   *          <p>This setting affects the range of information returned by <a href="https://docs.aws.amazon.com/AmazonSynthetics/latest/APIReference/API_GetCanaryRuns.html">GetCanaryRuns</a>, as well as
   *          the range of information displayed in the Synthetics console.
   *       </p>
   * @public
   */
  SuccessRetentionPeriodInDays?: number | undefined;

  /**
   * <p>The number of days to retain data about failed runs of this canary. If you omit
   *          this field, the default of 31 days is used. The valid range is 1 to 455 days.</p>
   *          <p>This setting affects the range of information returned by <a href="https://docs.aws.amazon.com/AmazonSynthetics/latest/APIReference/API_GetCanaryRuns.html">GetCanaryRuns</a>, as well as
   *          the range of information displayed in the Synthetics console.
   *       </p>
   * @public
   */
  FailureRetentionPeriodInDays?: number | undefined;

  /**
   * <p>Specifies the runtime version to use for the canary. For a list of valid
   *          runtime versions and more information about
   *          runtime versions, see <a href="https://docs.aws.amazon.com/AmazonCloudWatch/latest/monitoring/CloudWatch_Synthetics_Canaries_Library.html">
   *             Canary Runtime Versions</a>.</p>
   * @public
   */
  RuntimeVersion: string | undefined;

  /**
   * <p>If this canary is to test an endpoint in a VPC, this structure contains
   *       information about the subnet and security groups of the VPC endpoint.
   *       For more information, see <a href="https://docs.aws.amazon.com/AmazonCloudWatch/latest/monitoring/CloudWatch_Synthetics_Canaries_VPC.html">
   *          Running a Canary in a VPC</a>.</p>
   * @public
   */
  VpcConfig?: VpcConfigInput | undefined;

  /**
   * <p>To have the tags that you apply to this canary also be applied to the Lambda function that
   *          the canary uses, specify this parameter with the value <code>lambda-function</code>.</p>
   *          <p>If you specify this parameter and don't specify any tags in the <code>Tags</code>
   *          parameter, the canary creation fails.</p>
   * @public
   */
  ResourcesToReplicateTags?: ResourceToTag[] | undefined;

  /**
   * <p>Specifies whether to also delete the Lambda functions and layers used by this canary
   *       when the canary is deleted. If you omit this parameter, the default of <code>AUTOMATIC</code> is used, which means
   *          that the Lambda functions and layers will be deleted when the canary is deleted.</p>
   *          <p>If the value of this parameter is <code>OFF</code>, then the value of the <code>DeleteLambda</code> parameter
   *          of the <a href="https://docs.aws.amazon.com/AmazonSynthetics/latest/APIReference/API_DeleteCanary.html">DeleteCanary</a> operation
   *          determines whether the Lambda functions and layers will be deleted.</p>
   * @public
   */
  ProvisionedResourceCleanup?: ProvisionedResourceCleanupSetting | undefined;

  /**
   * <p>CloudWatch Synthetics now supports multibrowser canaries for <code>syn-nodejs-puppeteer-11.0</code> and <code>syn-nodejs-playwright-3.0</code> runtimes. This feature allows you to run your canaries on both
   *          Firefox and Chrome browsers. To create a multibrowser canary, you need to specify the BrowserConfigs with a list of browsers you want to use.</p>
   *          <note>
   *             <p>If not specified, <code>browserConfigs</code> defaults to Chrome.</p>
   *          </note>
   * @public
   */
  BrowserConfigs?: BrowserConfig[] | undefined;

  /**
   * <p>A list of key-value pairs to associate with the canary.
   *          You can associate as many as 50 tags with a canary.</p>
   *          <p>Tags can help you organize and categorize your
   *          resources. You can also use them to scope user permissions, by
   *          granting a user permission to access or change only the resources that have
   *          certain tag values.</p>
   *          <p>To have the tags that you apply to this canary also be applied to the Lambda function that
   *          the canary uses, specify this parameter with the value <code>lambda-function</code>.</p>
   * @public
   */
  Tags?: Record<string, string> | undefined;

  /**
   * <p>A structure that contains the configuration for canary artifacts, including
   *          the encryption-at-rest settings for artifacts that the canary uploads to Amazon S3.</p>
   * @public
   */
  ArtifactConfig?: ArtifactConfigInput | undefined;
}

/**
 * @public
 */
export interface CreateCanaryResponse {
  /**
   * <p>The full details about the canary you have created.</p>
   * @public
   */
  Canary?: Canary | undefined;
}

/**
 * <p>One of the input resources is larger than is allowed.</p>
 * @public
 */
export class RequestEntityTooLargeException extends __BaseException {
  readonly name: "RequestEntityTooLargeException" = "RequestEntityTooLargeException";
  readonly $fault: "client" = "client";
  Message?: string | undefined;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<RequestEntityTooLargeException, __BaseException>) {
    super({
      name: "RequestEntityTooLargeException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, RequestEntityTooLargeException.prototype);
    this.Message = opts.Message;
  }
}

/**
 * @public
 */
export interface CreateGroupRequest {
  /**
   * <p>The name for the group. It can include any Unicode characters.</p>
   *          <p>The names for all groups in your account, across all Regions, must be unique.</p>
   * @public
   */
  Name: string | undefined;

  /**
   * <p>A list of key-value pairs to associate with the group.
   *          You can associate as many as 50 tags with a group.</p>
   *          <p>Tags can help you organize and categorize your
   *          resources. You can also use them to scope user permissions, by
   *          granting a user permission to access or change only the resources that have
   *          certain tag values.</p>
   * @public
   */
  Tags?: Record<string, string> | undefined;
}

/**
 * <p>This structure contains information about one group.</p>
 * @public
 */
export interface Group {
  /**
   * <p>The unique ID of the group.</p>
   * @public
   */
  Id?: string | undefined;

  /**
   * <p>The name of the group.</p>
   * @public
   */
  Name?: string | undefined;

  /**
   * <p>The ARN of the group.</p>
   * @public
   */
  Arn?: string | undefined;

  /**
   * <p>The list of key-value pairs that are associated with the canary.</p>
   * @public
   */
  Tags?: Record<string, string> | undefined;

  /**
   * <p>The date and time that the group was created.</p>
   * @public
   */
  CreatedTime?: Date | undefined;

  /**
   * <p>The date and time that the group was most recently updated.</p>
   * @public
   */
  LastModifiedTime?: Date | undefined;
}

/**
 * @public
 */
export interface CreateGroupResponse {
  /**
   * <p>A structure that contains information about the group that was just created.</p>
   * @public
   */
  Group?: Group | undefined;
}

/**
 * @public
 */
export interface DeleteCanaryRequest {
  /**
   * <p>The name of the canary that you want to delete. To find the names of your canaries, use <a href="https://docs.aws.amazon.com/AmazonSynthetics/latest/APIReference/API_DescribeCanaries.html">DescribeCanaries</a>.</p>
   * @public
   */
  Name: string | undefined;

  /**
   * <p>Specifies whether to also delete the Lambda functions and layers used by this canary. The default
   *       is <code>false</code>.</p>
   *          <p>Your setting for this parameter is used only if the canary doesn't have <code>AUTOMATIC</code> for its
   *        <code>ProvisionedResourceCleanup</code> field. If that field is set to <code>AUTOMATIC</code>, then the
   *        Lambda functions and layers will be deleted when this canary is deleted. </p>
   *          <p>Type: Boolean</p>
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
   * <p>Specifies which group to delete. You can specify the group name, the ARN, or the
   *       group ID as the <code>GroupIdentifier</code>.</p>
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
   * <p>A token that indicates that there is more data
   *          available. You can use this token in a subsequent operation to retrieve the next
   *          set of results.</p>
   * @public
   */
  NextToken?: string | undefined;

  /**
   * <p>Specify this parameter to limit how many canaries are returned each time you use
   *       the <code>DescribeCanaries</code> operation. If you omit this parameter, the default of 20 is used.</p>
   * @public
   */
  MaxResults?: number | undefined;

  /**
   * <p>Use this parameter to return only canaries that match the names that you specify here. You can
   *          specify as many as five canary names.</p>
   *          <p>If you specify this parameter, the operation is successful only if you have authorization to view
   *          all the canaries that you specify in your request. If you do not have permission to view any of
   *          the canaries, the request fails with a 403 response.</p>
   *          <p>You are required to use this parameter if you are logged on to a user or role that has an
   *          IAM policy that restricts which canaries that you are allowed to view. For more information,
   *          see <a href="https://docs.aws.amazon.com/AmazonCloudWatch/latest/monitoring/CloudWatch_Synthetics_Canaries_Restricted.html">
   *             Limiting a user to viewing specific canaries</a>.</p>
   * @public
   */
  Names?: string[] | undefined;
}

/**
 * @public
 */
export interface DescribeCanariesResponse {
  /**
   * <p>Returns an array. Each item in the array contains the full information about
   *          one canary.</p>
   * @public
   */
  Canaries?: Canary[] | undefined;

  /**
   * <p>A token that indicates that there is more data
   *          available. You can use this token in a subsequent <code>DescribeCanaries</code> operation to retrieve the next
   *          set of results.</p>
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface DescribeCanariesLastRunRequest {
  /**
   * <p>A token that indicates that there is more data
   *          available. You can use this token in a subsequent <code>DescribeCanariesLastRun</code> operation to retrieve the next
   *          set of results.</p>
   * @public
   */
  NextToken?: string | undefined;

  /**
   * <p>Specify this parameter to limit how many runs are returned each time you use
   *          the <code>DescribeLastRun</code> operation. If you omit this parameter, the default of 100 is used.</p>
   * @public
   */
  MaxResults?: number | undefined;

  /**
   * <p>Use this parameter to return only canaries that match the names that you specify here. You can
   *          specify as many as five canary names.</p>
   *          <p>If you specify this parameter, the operation is successful only if you have authorization to view
   *          all the canaries that you specify in your request. If you do not have permission to view any of
   *          the canaries, the request fails with a 403 response.</p>
   *          <p>You are required to use the <code>Names</code> parameter if you are logged on to a user or role that has an
   *          IAM policy that restricts which canaries that you are allowed to view. For more information,
   *          see <a href="https://docs.aws.amazon.com/AmazonCloudWatch/latest/monitoring/CloudWatch_Synthetics_Canaries_Restricted.html">
   *             Limiting a user to viewing specific canaries</a>.</p>
   * @public
   */
  Names?: string[] | undefined;

  /**
   * <p>The type of browser to use for the canary run.</p>
   * @public
   */
  BrowserType?: BrowserType | undefined;
}

/**
 * @public
 */
export interface DescribeCanariesLastRunResponse {
  /**
   * <p>An array that contains the information from the most recent run of each
   *          canary.</p>
   * @public
   */
  CanariesLastRun?: CanaryLastRun[] | undefined;

  /**
   * <p>A token that indicates that there is more data
   *          available. You can use this token in a subsequent <code>DescribeCanariesLastRun</code> operation to retrieve the next
   *          set of results.</p>
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface DescribeRuntimeVersionsRequest {
  /**
   * <p>A token that indicates that there is more data
   *          available. You can use this token in a subsequent <code>DescribeRuntimeVersions</code> operation to retrieve the next
   *          set of results.</p>
   * @public
   */
  NextToken?: string | undefined;

  /**
   * <p>Specify this parameter to limit how many runs are returned each time you use
   *          the <code>DescribeRuntimeVersions</code> operation. If you omit this parameter, the default of 100 is used.</p>
   * @public
   */
  MaxResults?: number | undefined;
}

/**
 * <p>This structure contains information about one canary runtime version. For more information about
 *          runtime versions, see <a href="https://docs.aws.amazon.com/AmazonCloudWatch/latest/monitoring/CloudWatch_Synthetics_Canaries_Library.html">
 *             Canary Runtime Versions</a>.</p>
 * @public
 */
export interface RuntimeVersion {
  /**
   * <p>The name of the runtime version. For a list of valid runtime versions,
   *          see <a href="https://docs.aws.amazon.com/AmazonCloudWatch/latest/monitoring/CloudWatch_Synthetics_Canaries_Library.html">
   *             Canary Runtime Versions</a>.</p>
   * @public
   */
  VersionName?: string | undefined;

  /**
   * <p>A description of the runtime version, created by Amazon.</p>
   * @public
   */
  Description?: string | undefined;

  /**
   * <p>The date that the runtime version was released.</p>
   * @public
   */
  ReleaseDate?: Date | undefined;

  /**
   * <p>If this runtime version is deprecated, this value is the date of deprecation.</p>
   * @public
   */
  DeprecationDate?: Date | undefined;
}

/**
 * @public
 */
export interface DescribeRuntimeVersionsResponse {
  /**
   * <p>An array of objects that display the details about each Synthetics canary runtime
   *          version.</p>
   * @public
   */
  RuntimeVersions?: RuntimeVersion[] | undefined;

  /**
   * <p>A token that indicates that there is more data
   *          available. You can use this token in a subsequent <code>DescribeRuntimeVersions</code> operation to retrieve the next
   *          set of results.</p>
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface DisassociateResourceRequest {
  /**
   * <p>Specifies the group. You can specify the group name, the ARN, or the
   *          group ID as the <code>GroupIdentifier</code>.</p>
   * @public
   */
  GroupIdentifier: string | undefined;

  /**
   * <p>The ARN of the canary that you want to remove from the specified group.</p>
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
   * <p>The name of the canary that you want details for.</p>
   * @public
   */
  Name: string | undefined;

  /**
   * <p>The DryRunId associated with an existing canary’s dry run. You can use this DryRunId to retrieve information about the dry run.</p>
   * @public
   */
  DryRunId?: string | undefined;
}

/**
 * @public
 */
export interface GetCanaryResponse {
  /**
   * <p>A structure that contains the full information about the canary.</p>
   * @public
   */
  Canary?: Canary | undefined;
}

/**
 * @public
 * @enum
 */
export const RunType = {
  CANARY_RUN: "CANARY_RUN",
  DRY_RUN: "DRY_RUN",
} as const;

/**
 * @public
 */
export type RunType = (typeof RunType)[keyof typeof RunType];

/**
 * @public
 */
export interface GetCanaryRunsRequest {
  /**
   * <p>The name of the canary that you want to see runs for.</p>
   * @public
   */
  Name: string | undefined;

  /**
   * <p>A token that indicates that there is more data
   *          available. You can use this token in a subsequent <code>GetCanaryRuns</code> operation to retrieve the next
   *          set of results.</p>
   *          <note>
   *             <p>When auto retry is enabled for the canary, the first subsequent retry is suffixed with *1 indicating its the first retry and the next subsequent try is suffixed with *2.</p>
   *          </note>
   * @public
   */
  NextToken?: string | undefined;

  /**
   * <p>Specify this parameter to limit how many runs are returned each time you use
   *          the <code>GetCanaryRuns</code> operation. If you omit this parameter, the default of 100 is used.</p>
   * @public
   */
  MaxResults?: number | undefined;

  /**
   * <p>The DryRunId associated with an existing canary’s dry run. You can use this DryRunId to retrieve information about the dry run.</p>
   * @public
   */
  DryRunId?: string | undefined;

  /**
   * <ul>
   *             <li>
   *                <p>When you provide <code>RunType=CANARY_RUN</code> and <code>dryRunId</code>, you will get an exception
   *
   *
   *            </p>
   *             </li>
   *             <li>
   *                <p>When a value is not provided for <code>RunType</code>, the default value is <code>CANARY_RUN</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>When <code>CANARY_RUN</code> is provided, all canary runs excluding dry runs are returned</p>
   *             </li>
   *             <li>
   *                <p>When <code>DRY_RUN</code> is provided, all dry runs excluding canary runs are returned</p>
   *             </li>
   *          </ul>
   * @public
   */
  RunType?: RunType | undefined;
}

/**
 * @public
 */
export interface GetCanaryRunsResponse {
  /**
   * <p>An array of structures. Each structure contains the details of one of the
   *          retrieved canary runs.</p>
   * @public
   */
  CanaryRuns?: CanaryRun[] | undefined;

  /**
   * <p>A token that indicates that there is more data
   *          available. You can use this token in a subsequent <code>GetCanaryRuns</code>
   *          operation to retrieve the next
   *          set of results.</p>
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface GetGroupRequest {
  /**
   * <p>Specifies the group to return information for. You can specify the group name, the ARN, or the
   *          group ID as the <code>GroupIdentifier</code>.</p>
   * @public
   */
  GroupIdentifier: string | undefined;
}

/**
 * @public
 */
export interface GetGroupResponse {
  /**
   * <p>A structure that contains information about the group.</p>
   * @public
   */
  Group?: Group | undefined;
}

/**
 * <p>A structure containing some information about a group.</p>
 * @public
 */
export interface GroupSummary {
  /**
   * <p>The unique ID of the group.</p>
   * @public
   */
  Id?: string | undefined;

  /**
   * <p>The name of the group.</p>
   * @public
   */
  Name?: string | undefined;

  /**
   * <p>The ARN of the group.</p>
   * @public
   */
  Arn?: string | undefined;
}

/**
 * <p>An internal failure occurred. Try the operation again.</p>
 * @public
 */
export class InternalFailureException extends __BaseException {
  readonly name: "InternalFailureException" = "InternalFailureException";
  readonly $fault: "server" = "server";
  Message?: string | undefined;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<InternalFailureException, __BaseException>) {
    super({
      name: "InternalFailureException",
      $fault: "server",
      ...opts,
    });
    Object.setPrototypeOf(this, InternalFailureException.prototype);
    this.Message = opts.Message;
  }
}

/**
 * @public
 */
export interface ListAssociatedGroupsRequest {
  /**
   * <p>A token that indicates that there is more data
   *          available. You can use this token in a subsequent operation to retrieve the next
   *          set of results.</p>
   * @public
   */
  NextToken?: string | undefined;

  /**
   * <p>Specify this parameter to limit how many groups are returned each time you use
   *          the <code>ListAssociatedGroups</code> operation. If you omit this parameter, the default of 20 is used.</p>
   * @public
   */
  MaxResults?: number | undefined;

  /**
   * <p>The ARN of the canary that you want to view groups for.</p>
   * @public
   */
  ResourceArn: string | undefined;
}

/**
 * @public
 */
export interface ListAssociatedGroupsResponse {
  /**
   * <p>An array of structures that contain information about the groups that this canary is associated with.</p>
   * @public
   */
  Groups?: GroupSummary[] | undefined;

  /**
   * <p>A token that indicates that there is more data
   *          available. You can use this token in a subsequent <code>ListAssociatedGroups</code> operation to retrieve the next
   *          set of results.</p>
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListGroupResourcesRequest {
  /**
   * <p>A token that indicates that there is more data
   *          available. You can use this token in a subsequent operation to retrieve the next
   *          set of results.</p>
   * @public
   */
  NextToken?: string | undefined;

  /**
   * <p>Specify this parameter to limit how many canary ARNs are returned each time you use
   *          the <code>ListGroupResources</code> operation. If you omit this parameter, the default of 20 is used.</p>
   * @public
   */
  MaxResults?: number | undefined;

  /**
   * <p>Specifies the group to return information for. You can specify the group name, the ARN, or the
   *          group ID as the <code>GroupIdentifier</code>.</p>
   * @public
   */
  GroupIdentifier: string | undefined;
}

/**
 * @public
 */
export interface ListGroupResourcesResponse {
  /**
   * <p>An array of ARNs. These ARNs are for the canaries that are associated with the group.</p>
   * @public
   */
  Resources?: string[] | undefined;

  /**
   * <p>A token that indicates that there is more data
   *          available. You can use this token in a subsequent <code>ListGroupResources</code> operation to retrieve the next
   *          set of results.</p>
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListGroupsRequest {
  /**
   * <p>A token that indicates that there is more data
   *          available. You can use this token in a subsequent operation to retrieve the next
   *          set of results.</p>
   * @public
   */
  NextToken?: string | undefined;

  /**
   * <p>Specify this parameter to limit how many groups are returned each time you use
   *          the <code>ListGroups</code> operation. If you omit this parameter, the default of 20 is used.</p>
   * @public
   */
  MaxResults?: number | undefined;
}

/**
 * @public
 */
export interface ListGroupsResponse {
  /**
   * <p>An array of structures that each contain information about one group.</p>
   * @public
   */
  Groups?: GroupSummary[] | undefined;

  /**
   * <p>A token that indicates that there is more data
   *          available. You can use this token in a subsequent <code>ListGroups</code> operation to retrieve the next
   *          set of results.</p>
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListTagsForResourceRequest {
  /**
   * <p>The ARN of the canary or group that you want to view tags for.</p>
   *          <p>The ARN format of a canary is
   *                <code>arn:aws:synthetics:<i>Region</i>:<i>account-id</i>:canary:<i>canary-name</i>
   *             </code>.</p>
   *          <p>The ARN format of a group is
   *          <code>arn:aws:synthetics:<i>Region</i>:<i>account-id</i>:group:<i>group-name</i>
   *             </code>
   *          </p>
   * @public
   */
  ResourceArn: string | undefined;
}

/**
 * @public
 */
export interface ListTagsForResourceResponse {
  /**
   * <p>The list of tag keys and values associated with the resource that you specified.</p>
   * @public
   */
  Tags?: Record<string, string> | undefined;
}

/**
 * <p>The specified resource was not found.</p>
 * @public
 */
export class NotFoundException extends __BaseException {
  readonly name: "NotFoundException" = "NotFoundException";
  readonly $fault: "client" = "client";
  Message?: string | undefined;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<NotFoundException, __BaseException>) {
    super({
      name: "NotFoundException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, NotFoundException.prototype);
    this.Message = opts.Message;
  }
}

/**
 * <p>There were too many simultaneous requests. Try the operation again.</p>
 * @public
 */
export class TooManyRequestsException extends __BaseException {
  readonly name: "TooManyRequestsException" = "TooManyRequestsException";
  readonly $fault: "client" = "client";
  Message?: string | undefined;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<TooManyRequestsException, __BaseException>) {
    super({
      name: "TooManyRequestsException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, TooManyRequestsException.prototype);
    this.Message = opts.Message;
  }
}

/**
 * @public
 */
export interface StartCanaryRequest {
  /**
   * <p>The name of the canary that you want to run. To find
   *          canary names, use <a href="https://docs.aws.amazon.com/AmazonSynthetics/latest/APIReference/API_DescribeCanaries.html">DescribeCanaries</a>.</p>
   * @public
   */
  Name: string | undefined;
}

/**
 * @public
 */
export interface StartCanaryResponse {}

/**
 * <p>An object that specifies what screenshots to use as a baseline for visual monitoring by this canary. It can
 *          optionally also specify parts of the screenshots to ignore during the visual monitoring comparison.</p>
 *          <p>Visual monitoring is supported only on canaries running the <b>syn-puppeteer-node-3.2</b>
 *          runtime or later. For more information, see <a href="https://docs.aws.amazon.com/AmazonCloudWatch/latest/monitoring/CloudWatch_Synthetics_Library_SyntheticsLogger_VisualTesting.html">
 *             Visual monitoring</a> and <a href="https://docs.aws.amazon.com/AmazonCloudWatch/latest/monitoring/CloudWatch_Synthetics_Canaries_Blueprints_VisualTesting.html">
 *                Visual monitoring blueprint</a>
 *          </p>
 * @public
 */
export interface VisualReferenceInput {
  /**
   * <p>An array of screenshots that will be used as the baseline for visual monitoring in future runs of this canary. If there is a screenshot that you don't want to be used for
   *       visual monitoring, remove it from this array.</p>
   * @public
   */
  BaseScreenshots?: BaseScreenshot[] | undefined;

  /**
   * <p>Specifies which canary run to use the screenshots from as the baseline for future visual monitoring with this canary. Valid values are
   *          <code>nextrun</code> to use the screenshots from the next run after this update is made, <code>lastrun</code> to use the screenshots from the most recent run
   *          before this update was made, or the value of <code>Id</code> in the <a href="https://docs.aws.amazon.com/AmazonSynthetics/latest/APIReference/API_CanaryRun.html">
   *             CanaryRun</a> from a run of this a canary in the past 31 days. If you specify the <code>Id</code> of a canary run older than 31 days,
   *          the operation returns a 400 validation exception error..</p>
   * @public
   */
  BaseCanaryRunId: string | undefined;

  /**
   * <p>The browser type associated with this visual reference.</p>
   * @public
   */
  BrowserType?: BrowserType | undefined;
}

/**
 * @public
 */
export interface StartCanaryDryRunRequest {
  /**
   * <p>The name of the canary that you want to dry run. To find
   *          canary names, use <a href="https://docs.aws.amazon.com/AmazonSynthetics/latest/APIReference/API_DescribeCanaries.html">DescribeCanaries</a>.</p>
   * @public
   */
  Name: string | undefined;

  /**
   * <p>Use this structure to input your script code for the canary. This structure contains the
   *          Lambda handler with the location where the canary should start running the script. If the
   *          script is stored in an Amazon S3 bucket, the bucket name, key, and version are also included. If
   *          the script was passed into the canary directly, the script code is contained in the value
   *          of <code>Zipfile</code>. </p>
   *          <p>If you are uploading your canary scripts with an Amazon S3 bucket, your zip file should include your
   *       script in a certain folder structure.</p>
   *          <ul>
   *             <li>
   *                <p>For Node.js canaries, the folder structure must be <code>nodejs/node_modules/<i>myCanaryFilename.js</i>
   *                   </code>
   *             For more information, see <a href="https://docs.aws.amazon.com/AmazonCloudWatch/latest/monitoring/CloudWatch_Synthetics_Canaries_WritingCanary_Nodejs.html#CloudWatch_Synthetics_Canaries_package">Packaging your Node.js canary files</a>
   *                </p>
   *             </li>
   *             <li>
   *                <p>For Python canaries, the folder structure must be <code>python/<i>myCanaryFilename.py</i>
   *                   </code> or <code>python/<i>myFolder/myCanaryFilename.py</i>
   *                   </code>
   *             For more information, see <a href="https://docs.aws.amazon.com/AmazonCloudWatch/latest/monitoring/CloudWatch_Synthetics_Canaries_WritingCanary_Python.html#CloudWatch_Synthetics_Canaries_WritingCanary_Python_package">Packaging your Python canary files</a>
   *                </p>
   *             </li>
   *          </ul>
   * @public
   */
  Code?: CanaryCodeInput | undefined;

  /**
   * <p>Specifies the runtime version to use for the canary.
   *          For a list of valid runtime versions and for more information about
   *          runtime versions, see <a href="https://docs.aws.amazon.com/AmazonCloudWatch/latest/monitoring/CloudWatch_Synthetics_Canaries_Library.html">
   *             Canary Runtime Versions</a>.</p>
   * @public
   */
  RuntimeVersion?: string | undefined;

  /**
   * <p>A structure that contains input information for a canary run.</p>
   * @public
   */
  RunConfig?: CanaryRunConfigInput | undefined;

  /**
   * <p>If this canary is to test an endpoint in a VPC, this structure contains
   *          information about the subnets and security groups of the VPC endpoint.
   *          For more information, see <a href="https://docs.aws.amazon.com/AmazonCloudWatch/latest/monitoring/CloudWatch_Synthetics_Canaries_VPC.html">
   *             Running a Canary in a VPC</a>.</p>
   * @public
   */
  VpcConfig?: VpcConfigInput | undefined;

  /**
   * <p>The ARN of the IAM role to be used to run the canary. This role must already exist,
   *          and must include <code>lambda.amazonaws.com</code> as a principal in the trust
   *          policy. The role must also have the following permissions:</p>
   * @public
   */
  ExecutionRoleArn?: string | undefined;

  /**
   * <p>The number of days to retain data about successful runs of this canary. If you omit
   *          this field, the default of 31 days is used. The valid range is 1 to 455 days.</p>
   *          <p>This setting affects the range of information returned by <a href="https://docs.aws.amazon.com/AmazonSynthetics/latest/APIReference/API_GetCanaryRuns.html">GetCanaryRuns</a>, as well as
   *          the range of information displayed in the Synthetics console.
   *       </p>
   * @public
   */
  SuccessRetentionPeriodInDays?: number | undefined;

  /**
   * <p>The number of days to retain data about failed runs of this canary. If you omit
   *          this field, the default of 31 days is used. The valid range is 1 to 455 days.</p>
   *          <p>This setting affects the range of information returned by <a href="https://docs.aws.amazon.com/AmazonSynthetics/latest/APIReference/API_GetCanaryRuns.html">GetCanaryRuns</a>, as well as
   *          the range of information displayed in the Synthetics console.
   *       </p>
   * @public
   */
  FailureRetentionPeriodInDays?: number | undefined;

  /**
   * <p>An object that specifies what screenshots to use as a baseline for visual monitoring by this canary. It can
   *          optionally also specify parts of the screenshots to ignore during the visual monitoring comparison.</p>
   *          <p>Visual monitoring is supported only on canaries running the <b>syn-puppeteer-node-3.2</b>
   *          runtime or later. For more information, see <a href="https://docs.aws.amazon.com/AmazonCloudWatch/latest/monitoring/CloudWatch_Synthetics_Library_SyntheticsLogger_VisualTesting.html">
   *             Visual monitoring</a> and <a href="https://docs.aws.amazon.com/AmazonCloudWatch/latest/monitoring/CloudWatch_Synthetics_Canaries_Blueprints_VisualTesting.html">
   *                Visual monitoring blueprint</a>
   *          </p>
   * @public
   */
  VisualReference?: VisualReferenceInput | undefined;

  /**
   * <p>The location in Amazon S3 where Synthetics stores artifacts from the test runs of this
   *
   *          canary. Artifacts include the log file, screenshots, and HAR files.  The name of the
   *          Amazon S3 bucket can't include a period (.).</p>
   * @public
   */
  ArtifactS3Location?: string | undefined;

  /**
   * <p>A structure that contains the configuration for canary artifacts, including the
   *          encryption-at-rest settings for artifacts that the canary uploads to Amazon S3.</p>
   * @public
   */
  ArtifactConfig?: ArtifactConfigInput | undefined;

  /**
   * <p>Specifies whether to also delete the Lambda functions and layers used by this canary
   *          when the canary is deleted. If you omit this parameter, the default of <code>AUTOMATIC</code> is used, which means
   *
   *          that the Lambda functions and layers will be deleted when the canary is deleted.</p>
   *          <p>If the value of this parameter is <code>OFF</code>, then the value of the <code>DeleteLambda</code> parameter
   *          of the <a href="https://docs.aws.amazon.com/AmazonSynthetics/latest/APIReference/API_DeleteCanary.html">DeleteCanary</a> operation
   *          determines whether the Lambda functions and layers will be deleted.</p>
   * @public
   */
  ProvisionedResourceCleanup?: ProvisionedResourceCleanupSetting | undefined;

  /**
   * <p>A structure that specifies the browser type to use for a canary run. CloudWatch Synthetics supports running canaries on both <code>CHROME</code> and <code>FIREFOX</code> browsers.</p>
   *          <note>
   *             <p>If not specified, <code>browserConfigs</code> defaults to Chrome.</p>
   *          </note>
   * @public
   */
  BrowserConfigs?: BrowserConfig[] | undefined;

  /**
   * <p>A list of visual reference configurations for the canary, one for each browser type that the canary is configured to run on. Visual references are used for visual monitoring comparisons.</p>
   *          <p>
   *             <code>syn-nodejs-puppeteer-11.0</code> and above, and <code>syn-nodejs-playwright-3.0</code> and above, only supports <code>visualReferences</code>. <code>visualReference</code> field is not supported.</p>
   *          <p>Versions older than <code>syn-nodejs-puppeteer-11.0</code> supports both <code>visualReference</code> and <code>visualReferences</code> for backward compatibility. It is recommended to use <code>visualReferences</code>
   *          for consistency and future compatibility.</p>
   * @public
   */
  VisualReferences?: VisualReferenceInput[] | undefined;
}

/**
 * @public
 */
export interface StartCanaryDryRunResponse {
  /**
   * <p>Returns the dry run configurations for a canary.</p>
   * @public
   */
  DryRunConfig?: DryRunConfigOutput | undefined;
}

/**
 * @public
 */
export interface StopCanaryRequest {
  /**
   * <p>The name of the canary that you want to stop. To find the names of your
   *          canaries, use <a href="https://docs.aws.amazon.com/AmazonSynthetics/latest/APIReference/API_DescribeCanaries.html">ListCanaries</a>.</p>
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
   * <p>The ARN of the canary or group that you're adding tags to.</p>
   *          <p>The ARN format of a canary is
   * <code>arn:aws:synthetics:<i>Region</i>:<i>account-id</i>:canary:<i>canary-name</i>
   *             </code>.</p>
   *          <p>The ARN format of a group is
   *  <code>arn:aws:synthetics:<i>Region</i>:<i>account-id</i>:group:<i>group-name</i>
   *             </code>
   *          </p>
   * @public
   */
  ResourceArn: string | undefined;

  /**
   * <p>The list of key-value pairs to associate with the resource.</p>
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
   * <p>The ARN of the canary or group that you're removing tags from.</p>
   *          <p>The ARN format of a canary is
   *                <code>arn:aws:synthetics:<i>Region</i>:<i>account-id</i>:canary:<i>canary-name</i>
   *             </code>.</p>
   *          <p>The ARN format of a group is
   *          <code>arn:aws:synthetics:<i>Region</i>:<i>account-id</i>:group:<i>group-name</i>
   *             </code>
   *          </p>
   * @public
   */
  ResourceArn: string | undefined;

  /**
   * <p>The list of tag keys to remove from the resource.</p>
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
   * <p>The name of the canary that you want to update. To find the names of your
   *          canaries, use <a href="https://docs.aws.amazon.com/AmazonSynthetics/latest/APIReference/API_DescribeCanaries.html">DescribeCanaries</a>.</p>
   *          <p>You cannot change the name of a canary that has already been created.</p>
   * @public
   */
  Name: string | undefined;

  /**
   * <p>A structure that includes the entry point from which the canary should start
   *          running your script. If the script is stored in
   *          an Amazon S3 bucket, the bucket name, key, and version are also included.
   *       </p>
   * @public
   */
  Code?: CanaryCodeInput | undefined;

  /**
   * <p>The ARN of the IAM role to be used to run the canary. This role must already exist,
   *          and must include <code>lambda.amazonaws.com</code> as a principal in the trust
   *          policy. The role must also have the following permissions:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>s3:PutObject</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>s3:GetBucketLocation</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>s3:ListAllMyBuckets</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>cloudwatch:PutMetricData</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>logs:CreateLogGroup</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>logs:CreateLogStream</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>logs:CreateLogStream</code>
   *                </p>
   *             </li>
   *          </ul>
   * @public
   */
  ExecutionRoleArn?: string | undefined;

  /**
   * <p>Specifies the runtime version to use for the canary.
   *          For a list of valid runtime versions and for more information about
   *          runtime versions, see <a href="https://docs.aws.amazon.com/AmazonCloudWatch/latest/monitoring/CloudWatch_Synthetics_Canaries_Library.html">
   *             Canary Runtime Versions</a>.</p>
   * @public
   */
  RuntimeVersion?: string | undefined;

  /**
   * <p>A structure that contains information about how often the canary is to run, and when
   *          these runs are to stop.</p>
   * @public
   */
  Schedule?: CanaryScheduleInput | undefined;

  /**
   * <p>A structure that contains the timeout value that is used for each individual run of the
   *          canary.</p>
   *          <important>
   *             <p>Environment variable keys and values are encrypted at rest using Amazon Web Services owned KMS keys. However, the environment variables
   *          are not encrypted on the client side. Do not store sensitive information
   *          in them.</p>
   *          </important>
   * @public
   */
  RunConfig?: CanaryRunConfigInput | undefined;

  /**
   * <p>The number of days to retain data about successful runs of this canary.</p>
   *          <p>This setting affects the range of information returned by <a href="https://docs.aws.amazon.com/AmazonSynthetics/latest/APIReference/API_GetCanaryRuns.html">GetCanaryRuns</a>, as well as
   *          the range of information displayed in the Synthetics console.
   *       </p>
   * @public
   */
  SuccessRetentionPeriodInDays?: number | undefined;

  /**
   * <p>The number of days to retain data about failed runs of this canary.</p>
   *          <p>This setting affects the range of information returned by <a href="https://docs.aws.amazon.com/AmazonSynthetics/latest/APIReference/API_GetCanaryRuns.html">GetCanaryRuns</a>, as well as
   *          the range of information displayed in the Synthetics console.
   *       </p>
   * @public
   */
  FailureRetentionPeriodInDays?: number | undefined;

  /**
   * <p>If this canary is to test an endpoint in a VPC, this structure contains
   *          information about the subnet and security groups of the VPC endpoint.
   *          For more information, see <a href="https://docs.aws.amazon.com/AmazonCloudWatch/latest/monitoring/CloudWatch_Synthetics_Canaries_VPC.html">
   *             Running a Canary in a VPC</a>.</p>
   * @public
   */
  VpcConfig?: VpcConfigInput | undefined;

  /**
   * <p>Defines the screenshots to use as the baseline for comparisons during visual monitoring comparisons during future runs of this canary. If you omit this
   *       parameter, no changes are made to any baseline screenshots that the canary might be using already.</p>
   *          <p>Visual monitoring is supported only on canaries running the <b>syn-puppeteer-node-3.2</b>
   *          runtime or later. For more information, see <a href="https://docs.aws.amazon.com/AmazonCloudWatch/latest/monitoring/CloudWatch_Synthetics_Library_SyntheticsLogger_VisualTesting.html">
   *             Visual monitoring</a> and <a href="https://docs.aws.amazon.com/AmazonCloudWatch/latest/monitoring/CloudWatch_Synthetics_Canaries_Blueprints_VisualTesting.html">
   *                Visual monitoring blueprint</a>
   *          </p>
   * @public
   */
  VisualReference?: VisualReferenceInput | undefined;

  /**
   * <p>The location in Amazon S3 where Synthetics stores artifacts from the test runs of this canary.
   *          Artifacts include the log file, screenshots, and HAR files. The name of the
   *          Amazon S3 bucket can't include a period (.).</p>
   * @public
   */
  ArtifactS3Location?: string | undefined;

  /**
   * <p>A structure that contains the configuration for canary artifacts,
   *          including the encryption-at-rest settings for artifacts that
   *          the canary uploads to Amazon S3.</p>
   * @public
   */
  ArtifactConfig?: ArtifactConfigInput | undefined;

  /**
   * <p>Specifies whether to also delete the Lambda functions and layers used by this canary
   *          when the canary is deleted.</p>
   *          <p>If the value of this parameter is <code>OFF</code>, then the value of the <code>DeleteLambda</code> parameter
   *          of the <a href="https://docs.aws.amazon.com/AmazonSynthetics/latest/APIReference/API_DeleteCanary.html">DeleteCanary</a> operation
   *          determines whether the Lambda functions and layers will be deleted.</p>
   * @public
   */
  ProvisionedResourceCleanup?: ProvisionedResourceCleanupSetting | undefined;

  /**
   * <p>Update the existing canary using the updated configurations from the DryRun associated with the DryRunId.</p>
   *          <note>
   *             <p>When you use the <code>dryRunId</code> field when updating a canary, the only other field you can provide is the <code>Schedule</code>. Adding any other field will thrown an exception.</p>
   *          </note>
   * @public
   */
  DryRunId?: string | undefined;

  /**
   * <p>A list of visual reference configurations for the canary, one for each browser type that the canary is configured to run on. Visual references are used for visual monitoring comparisons.</p>
   *          <p>
   *             <code>syn-nodejs-puppeteer-11.0</code> and above, and <code>syn-nodejs-playwright-3.0</code> and above, only supports <code>visualReferences</code>. <code>visualReference</code> field is not supported.</p>
   *          <p>Versions older than <code>syn-nodejs-puppeteer-11.0</code> supports both <code>visualReference</code> and <code>visualReferences</code> for backward compatibility. It is recommended to use <code>visualReferences</code>
   *          for consistency and future compatibility.</p>
   *          <p>For multibrowser visual monitoring,  you can update the baseline for all configured browsers in a single update call by specifying a list of VisualReference objects, one per browser.
   *          Each VisualReference object maps to a specific browser configuration, allowing you to manage visual baselines for multiple browsers simultaneously.</p>
   *          <p>For single configuration canaries using Chrome browser (default browser), use visualReferences for <code>syn-nodejs-puppeteer-11.0</code> and above, and <code>syn-nodejs-playwright-3.0</code> and
   *          above canaries. The browserType in the visualReference object is not mandatory.</p>
   * @public
   */
  VisualReferences?: VisualReferenceInput[] | undefined;

  /**
   * <p>A structure that specifies the browser type to use for a canary run. CloudWatch Synthetics supports running canaries on both <code>CHROME</code> and <code>FIREFOX</code> browsers.</p>
   *          <note>
   *             <p>If not specified, <code>browserConfigs</code> defaults to Chrome.</p>
   *          </note>
   * @public
   */
  BrowserConfigs?: BrowserConfig[] | undefined;
}

/**
 * @public
 */
export interface UpdateCanaryResponse {}
