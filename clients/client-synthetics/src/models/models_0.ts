// smithy-typescript generated code
import { ExceptionOptionType as __ExceptionOptionType } from "@aws-sdk/smithy-client";

import { SyntheticsServiceException as __BaseException } from "./SyntheticsServiceException";

export enum EncryptionMode {
  SSE_KMS = "SSE_KMS",
  SSE_S3 = "SSE_S3",
}

/**
 * <p>A structure that contains the configuration of encryption-at-rest settings for canary artifacts that the canary
 *          uploads to Amazon S3. </p>
 *          <p>For more information, see
 *          <a href="https://docs.aws.amazon.com/AmazonCloudWatch/latest/monitoring/CloudWatch_Synthetics_artifact_encryption.html">Encrypting canary artifacts</a>
 *             </p>
 */
export interface S3EncryptionConfig {
  /**
   * <p> The encryption method to use for artifacts created by this canary. Specify <code>SSE_S3</code> to use
   *          server-side encryption (SSE) with an Amazon S3-managed
   *          key. Specify <code>SSE-KMS</code> to use server-side encryption with a customer-managed KMS key.</p>
   *          <p>If you omit this parameter, an
   *             Amazon Web Services-managed KMS key is used.
   *         </p>
   */
  EncryptionMode?: EncryptionMode | string;

  /**
   * <p>The ARN of the customer-managed KMS key to use, if you specify <code>SSE-KMS</code>
   *          for <code>EncryptionMode</code>
   *          </p>
   */
  KmsKeyArn?: string;
}

/**
 * <p>A structure that contains the configuration for canary artifacts, including the
 *          encryption-at-rest settings for artifacts that the canary uploads to Amazon S3.</p>
 */
export interface ArtifactConfigInput {
  /**
   * <p>A structure that contains the configuration of the encryption-at-rest settings for artifacts that the canary uploads
   *          to Amazon S3.
   *          Artifact encryption functionality is available only for canaries that use Synthetics runtime version
   *          syn-nodejs-puppeteer-3.3 or later. For more information, see
   *          <a href="https://docs.aws.amazon.com/AmazonCloudWatch/latest/monitoring/CloudWatch_Synthetics_artifact_encryption.html">Encrypting canary artifacts</a>
   *          </p>
   */
  S3Encryption?: S3EncryptionConfig;
}

/**
 * <p>A structure that contains the configuration for canary artifacts, including
 *          the encryption-at-rest settings for artifacts that the canary uploads to Amazon S3.</p>
 */
export interface ArtifactConfigOutput {
  /**
   * <p>A structure that contains the configuration of encryption settings for canary artifacts that are stored in Amazon S3. </p>
   */
  S3Encryption?: S3EncryptionConfig;
}

export interface AssociateResourceRequest {
  /**
   * <p>Specifies the group. You can specify the group name, the ARN, or the
   *          group ID as the <code>GroupIdentifier</code>.</p>
   */
  GroupIdentifier: string | undefined;

  /**
   * <p>The ARN of the canary that you want to associate with the specified group.</p>
   */
  ResourceArn: string | undefined;
}

export interface AssociateResourceResponse {}

/**
 * <p>A conflicting operation is already in progress.</p>
 */
export class ConflictException extends __BaseException {
  readonly name: "ConflictException" = "ConflictException";
  readonly $fault: "client" = "client";
  Message?: string;
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
 */
export class InternalServerException extends __BaseException {
  readonly name: "InternalServerException" = "InternalServerException";
  readonly $fault: "server" = "server";
  Message?: string;
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
 */
export class ResourceNotFoundException extends __BaseException {
  readonly name: "ResourceNotFoundException" = "ResourceNotFoundException";
  readonly $fault: "client" = "client";
  Message?: string;
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
 */
export class ServiceQuotaExceededException extends __BaseException {
  readonly name: "ServiceQuotaExceededException" = "ServiceQuotaExceededException";
  readonly $fault: "client" = "client";
  Message?: string;
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
 */
export class ValidationException extends __BaseException {
  readonly name: "ValidationException" = "ValidationException";
  readonly $fault: "client" = "client";
  Message?: string;
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
 */
export class BadRequestException extends __BaseException {
  readonly name: "BadRequestException" = "BadRequestException";
  readonly $fault: "client" = "client";
  Message?: string;
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
 */
export interface BaseScreenshot {
  /**
   * <p>The name of the screenshot. This is generated the first time the canary is run after the <code>UpdateCanary</code> operation that
   *       specified for this canary to perform visual monitoring.</p>
   */
  ScreenshotName: string | undefined;

  /**
   * <p>Coordinates that define the part of a screen to ignore during screenshot comparisons. To obtain the
   *          coordinates to use here, use the
   *          CloudWatch console to draw the boundaries on the screen. For more information, see
   *          <a href="https://docs.aws.amazon.com/AmazonCloudWatch/latest/monitoring/synthetics_canaries_deletion.html">
   *             Editing or deleting a canary</a>
   *          </p>
   */
  IgnoreCoordinates?: string[];
}

/**
 * <p>This structure contains information about the canary's Lambda handler and
 *       where its code is stored by CloudWatch Synthetics.</p>
 */
export interface CanaryCodeOutput {
  /**
   * <p>The ARN of the Lambda layer where Synthetics stores the canary script code.</p>
   */
  SourceLocationArn?: string;

  /**
   * <p>The entry point to use for the source code when running the canary.</p>
   */
  Handler?: string;
}

/**
 * <p>A structure that contains information about a canary run.</p>
 */
export interface CanaryRunConfigOutput {
  /**
   * <p>How long the canary is allowed to run before it must stop.</p>
   */
  TimeoutInSeconds?: number;

  /**
   * <p>The maximum amount of memory available to the canary while it is running, in MB. This value
   *          must be a multiple of 64.</p>
   */
  MemoryInMB?: number;

  /**
   * <p>Displays whether this canary run used active X-Ray tracing. </p>
   */
  ActiveTracing?: boolean;
}

/**
 * <p>How long, in seconds, for the canary to continue making regular runs according to the schedule in the
 *          <code>Expression</code> value.</p>
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
   */
  Expression?: string;

  /**
   * <p>How long, in seconds, for the canary to continue making regular runs after it
   *          was created. The runs are performed according to the schedule in the
   *          <code>Expression</code> value.</p>
   */
  DurationInSeconds?: number;
}

export enum CanaryState {
  CREATING = "CREATING",
  DELETING = "DELETING",
  ERROR = "ERROR",
  READY = "READY",
  RUNNING = "RUNNING",
  STARTING = "STARTING",
  STOPPED = "STOPPED",
  STOPPING = "STOPPING",
  UPDATING = "UPDATING",
}

export enum CanaryStateReasonCode {
  CREATE_FAILED = "CREATE_FAILED",
  CREATE_IN_PROGRESS = "CREATE_IN_PROGRESS",
  CREATE_PENDING = "CREATE_PENDING",
  DELETE_FAILED = "DELETE_FAILED",
  DELETE_IN_PROGRESS = "DELETE_IN_PROGRESS",
  INVALID_PERMISSIONS = "INVALID_PERMISSIONS",
  ROLLBACK_COMPLETE = "ROLLBACK_COMPLETE",
  ROLLBACK_FAILED = "ROLLBACK_FAILED",
  SYNC_DELETE_IN_PROGRESS = "SYNC_DELETE_IN_PROGRESS",
  UPDATE_COMPLETE = "UPDATE_COMPLETE",
  UPDATE_IN_PROGRESS = "UPDATE_IN_PROGRESS",
  UPDATE_PENDING = "UPDATE_PENDING",
}

/**
 * <p>A structure that contains the current state of the canary.</p>
 */
export interface CanaryStatus {
  /**
   * <p>The current state of the canary.</p>
   */
  State?: CanaryState | string;

  /**
   * <p>If the canary has insufficient permissions to run, this field provides more details.</p>
   */
  StateReason?: string;

  /**
   * <p>If the canary cannot run or has failed, this field displays the reason.</p>
   */
  StateReasonCode?: CanaryStateReasonCode | string;
}

/**
 * <p>This structure contains information about when the canary was created and modified.</p>
 */
export interface CanaryTimeline {
  /**
   * <p>The date and time the canary was created.</p>
   */
  Created?: Date;

  /**
   * <p>The date and time the canary was most recently modified.</p>
   */
  LastModified?: Date;

  /**
   * <p>The date and time that the canary's most recent run started.</p>
   */
  LastStarted?: Date;

  /**
   * <p>The date and time that the canary's most recent run ended.</p>
   */
  LastStopped?: Date;
}

/**
 * <p>If this canary performs visual monitoring by comparing screenshots, this structure contains the ID of the canary run that is used as the baseline for screenshots, and the coordinates
 *          of any parts of those screenshots that are ignored during visual monitoring comparison.</p>
 *          <p>Visual monitoring is supported only on canaries running the <b>syn-puppeteer-node-3.2</b> runtime or later.</p>
 */
export interface VisualReferenceOutput {
  /**
   * <p>An array of screenshots that are used as the baseline for comparisons during visual monitoring.</p>
   */
  BaseScreenshots?: BaseScreenshot[];

  /**
   * <p>The ID of the canary run that produced the baseline screenshots
   *          that are used for visual monitoring comparisons by this canary.</p>
   */
  BaseCanaryRunId?: string;
}

/**
 * <p>If this canary is to test an endpoint in a VPC, this structure contains
 *          information about the subnets and security groups of the VPC endpoint.
 *          For more information, see <a href="https://docs.aws.amazon.com/AmazonCloudWatch/latest/monitoring/CloudWatch_Synthetics_Canaries_VPC.html">
 *             Running a Canary in a VPC</a>.</p>
 */
export interface VpcConfigOutput {
  /**
   * <p>The IDs of the VPC where this canary is to run.</p>
   */
  VpcId?: string;

  /**
   * <p>The IDs of the subnets where this canary is to run.</p>
   */
  SubnetIds?: string[];

  /**
   * <p>The IDs of the security groups for this canary.</p>
   */
  SecurityGroupIds?: string[];
}

/**
 * <p>This structure contains all information about one canary in your account.</p>
 */
export interface Canary {
  /**
   * <p>The unique ID of this canary.</p>
   */
  Id?: string;

  /**
   * <p>The name of the canary.</p>
   */
  Name?: string;

  /**
   * <p>This structure contains information about the canary's Lambda handler and
   *       where its code is stored by CloudWatch Synthetics.</p>
   */
  Code?: CanaryCodeOutput;

  /**
   * <p>The ARN of the IAM role used to run the canary. This role must include <code>lambda.amazonaws.com</code> as a principal in the trust
   *          policy.</p>
   */
  ExecutionRoleArn?: string;

  /**
   * <p>A structure that contains information about how often the canary is to run, and when
   *          these runs are to stop.</p>
   */
  Schedule?: CanaryScheduleOutput;

  /**
   * <p>A structure that contains information about a canary run.</p>
   */
  RunConfig?: CanaryRunConfigOutput;

  /**
   * <p>The number of days to retain data about successful runs of this canary.</p>
   */
  SuccessRetentionPeriodInDays?: number;

  /**
   * <p>The number of days to retain data about failed runs of this canary.</p>
   */
  FailureRetentionPeriodInDays?: number;

  /**
   * <p>A structure that contains information about the canary's status.</p>
   */
  Status?: CanaryStatus;

  /**
   * <p>A structure that contains information about when the canary was created, modified, and
   *          most recently run.</p>
   */
  Timeline?: CanaryTimeline;

  /**
   * <p>The location in Amazon S3 where Synthetics stores artifacts from the runs of this
   *          canary. Artifacts include the log file, screenshots, and HAR files.</p>
   */
  ArtifactS3Location?: string;

  /**
   * <p>The ARN of the Lambda function that is used as your canary's engine. For more information
   *          about Lambda ARN format, see <a href="https://docs.aws.amazon.com/lambda/latest/dg/lambda-api-permissions-ref.html">Resources and Conditions for Lambda Actions</a>.</p>
   */
  EngineArn?: string;

  /**
   * <p>Specifies the runtime version to use for the canary. For more information about
   *          runtime versions, see <a href="https://docs.aws.amazon.com/AmazonCloudWatch/latest/monitoring/CloudWatch_Synthetics_Canaries_Library.html">
   *             Canary Runtime Versions</a>.</p>
   */
  RuntimeVersion?: string;

  /**
   * <p>If this canary is to test an endpoint in a VPC, this structure contains
   *          information about the subnets and security groups of the VPC endpoint.
   *          For more information, see <a href="https://docs.aws.amazon.com/AmazonCloudWatch/latest/monitoring/CloudWatch_Synthetics_Canaries_VPC.html">
   *             Running a Canary in a VPC</a>.</p>
   */
  VpcConfig?: VpcConfigOutput;

  /**
   * <p>If this canary performs visual monitoring by comparing screenshots, this structure contains the ID of the canary run to use as the baseline for screenshots, and the coordinates
   *       of any parts of the screen to ignore during the visual monitoring comparison.</p>
   */
  VisualReference?: VisualReferenceOutput;

  /**
   * <p>The list of key-value pairs that are associated with the canary.</p>
   */
  Tags?: Record<string, string>;

  /**
   * <p>A structure that contains the configuration for canary artifacts, including
   *          the encryption-at-rest settings for artifacts that the canary uploads to Amazon S3.</p>
   */
  ArtifactConfig?: ArtifactConfigOutput;
}

export enum CanaryRunState {
  FAILED = "FAILED",
  PASSED = "PASSED",
  RUNNING = "RUNNING",
}

export enum CanaryRunStateReasonCode {
  CANARY_FAILURE = "CANARY_FAILURE",
  EXECUTION_FAILURE = "EXECUTION_FAILURE",
}

/**
 * <p>This structure contains the status information about a canary run.</p>
 */
export interface CanaryRunStatus {
  /**
   * <p>The current state of the run.</p>
   */
  State?: CanaryRunState | string;

  /**
   * <p>If run of the canary failed, this field contains the reason for the error.</p>
   */
  StateReason?: string;

  /**
   * <p>If this value is <code>CANARY_FAILURE</code>, an exception occurred in the
   *          canary code. If this value is <code>EXECUTION_FAILURE</code>, an exception occurred in
   *          CloudWatch Synthetics.</p>
   */
  StateReasonCode?: CanaryRunStateReasonCode | string;
}

/**
 * <p>This structure contains the start and end times of a single canary run.</p>
 */
export interface CanaryRunTimeline {
  /**
   * <p>The start time of the run.</p>
   */
  Started?: Date;

  /**
   * <p>The end time of the run.</p>
   */
  Completed?: Date;
}

/**
 * <p>This structure contains the details about one run of one canary.</p>
 */
export interface CanaryRun {
  /**
   * <p>A unique ID that identifies this canary run.</p>
   */
  Id?: string;

  /**
   * <p>The name of the canary.</p>
   */
  Name?: string;

  /**
   * <p>The status of this run.</p>
   */
  Status?: CanaryRunStatus;

  /**
   * <p>A structure that contains the start and end times of this run.</p>
   */
  Timeline?: CanaryRunTimeline;

  /**
   * <p>The location where the canary stored artifacts from the run. Artifacts include
   *          the log file, screenshots, and HAR files.</p>
   */
  ArtifactS3Location?: string;
}

/**
 * <p>This structure contains information about the most recent run of a single canary.</p>
 */
export interface CanaryLastRun {
  /**
   * <p>The name of the canary.</p>
   */
  CanaryName?: string;

  /**
   * <p>The results from this canary's most recent run.</p>
   */
  LastRun?: CanaryRun;
}

/**
 * <p>Use this structure to input your script code for the canary. This structure contains the
 *          Lambda handler with the location where the canary should start running the script. If the
 *          script is stored in an S3 bucket, the bucket name, key, and version are also included. If
 *          the script was passed into the canary directly, the script code is contained in the value
 *          of <code>Zipfile</code>. </p>
 */
export interface CanaryCodeInput {
  /**
   * <p>If your canary script is located in S3, specify the bucket name here. Do not include <code>s3://</code> as the
   *          start of the bucket name.</p>
   */
  S3Bucket?: string;

  /**
   * <p>The S3 key of your script. For more information, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/dev/UsingObjects.html">Working with Amazon S3 Objects</a>.</p>
   */
  S3Key?: string;

  /**
   * <p>The S3 version ID of your script.</p>
   */
  S3Version?: string;

  /**
   * <p>If you input your canary script directly into the canary instead of referring to an S3
   *          location, the value of this parameter is the base64-encoded contents of the .zip file that
   *          contains the script. It must be smaller than 225 Kb.</p>
   *          <p>For large canary scripts, we recommend that you use an S3 location instead of inputting it
   *       directly with this parameter.</p>
   */
  ZipFile?: Uint8Array;

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
   */
  Handler: string | undefined;
}

/**
 * <p>A structure that contains input information for a canary run.</p>
 */
export interface CanaryRunConfigInput {
  /**
   * <p>How long the canary is allowed to run before it must stop. You can't set this time to be longer
   *          than the frequency of the runs of this canary.</p>
   *          <p>If you omit this field, the
   *          frequency of the canary is used as this value, up to a maximum of 14 minutes.</p>
   */
  TimeoutInSeconds?: number;

  /**
   * <p>The maximum amount of memory available to the canary while it is running, in MB. This value must be a multiple of 64.</p>
   */
  MemoryInMB?: number;

  /**
   * <p>Specifies whether this canary is to use active X-Ray tracing when it runs. Active tracing
   *          enables
   *          this canary run to be displayed in the ServiceLens and X-Ray service maps even if the canary does
   *          not hit an endpoint that has X-Ray tracing enabled. Using X-Ray tracing incurs charges.
   *       For more information, see  <a href="https://docs.aws.amazon.com/AmazonCloudWatch/latest/monitoring/CloudWatch_Synthetics_Canaries_tracing.html">
   *          Canaries and X-Ray tracing</a>.</p>
   *          <p>You can enable active tracing only for canaries that use version <code>syn-nodejs-2.0</code>
   *       or later for their canary runtime.</p>
   */
  ActiveTracing?: boolean;

  /**
   * <p>Specifies the keys and values to use for any environment variables
   *       used in the canary script. Use the following format:</p>
   *          <p>{ "key1" : "value1", "key2" : "value2", ...}</p>
   *          <p>Keys must start with a letter and be at least two characters. The total size
   *          of your environment variables cannot exceed 4 KB. You can't specify any Lambda
   *          reserved environment variables as the keys for your environment variables. For
   *          more information about reserved keys, see <a href="https://docs.aws.amazon.com/lambda/latest/dg/configuration-envvars.html#configuration-envvars-runtime">
   *             Runtime environment variables</a>.</p>
   *          <important>
   *             <p>The environment variables keys and values are not encrypted. Do not store sensitive information
   *          in this field.</p>
   *          </important>
   */
  EnvironmentVariables?: Record<string, string>;
}

/**
 * <p>This structure specifies how often a canary is to make runs and the date and time
 *          when it should stop making runs.</p>
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
   */
  Expression: string | undefined;

  /**
   * <p>How long, in seconds, for the canary to continue making regular runs according to
   *          the schedule in the <code>Expression</code> value. If you specify 0, the canary continues
   *          making runs until you stop it. If you omit this field, the default of 0 is used.</p>
   */
  DurationInSeconds?: number;
}

/**
 * <p>If this canary is to test an endpoint in a VPC, this structure contains
 *          information about the subnets and security groups of the VPC endpoint.
 *          For more information, see <a href="https://docs.aws.amazon.com/AmazonCloudWatch/latest/monitoring/CloudWatch_Synthetics_Canaries_VPC.html">
 *             Running a Canary in a VPC</a>.</p>
 */
export interface VpcConfigInput {
  /**
   * <p>The IDs of the subnets where this canary is to run.</p>
   */
  SubnetIds?: string[];

  /**
   * <p>The IDs of the security groups for this canary.</p>
   */
  SecurityGroupIds?: string[];
}

export interface CreateCanaryRequest {
  /**
   * <p>The name for this canary. Be sure to give it a descriptive name
   *          that distinguishes it from other canaries in your account.</p>
   *          <p>Do not include secrets or proprietary information in your canary names. The canary name
   *          makes up part of the canary ARN, and the ARN is included in outbound calls over the
   *          internet. For more information, see <a href="https://docs.aws.amazon.com/AmazonCloudWatch/latest/monitoring/servicelens_canaries_security.html">Security
   *             Considerations for Synthetics Canaries</a>.</p>
   */
  Name: string | undefined;

  /**
   * <p>A structure that includes the entry point from which the canary should start
   *          running your script. If the script is stored in
   *          an S3 bucket, the bucket name, key, and version are also included.
   *       </p>
   */
  Code: CanaryCodeInput | undefined;

  /**
   * <p>The location in Amazon S3 where Synthetics stores artifacts from the test runs of this
   *          canary. Artifacts include the log file, screenshots, and HAR files.  The name of the
   *          S3 bucket can't include a period (.).</p>
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
   */
  ExecutionRoleArn: string | undefined;

  /**
   * <p>A structure that contains information about how often the canary is to run and when
   *          these test runs are to stop.</p>
   */
  Schedule: CanaryScheduleInput | undefined;

  /**
   * <p>A structure that contains the configuration for individual canary runs,
   *          such as timeout value and environment variables.</p>
   *          <important>
   *             <p>The environment variables keys and values are not encrypted. Do not store sensitive information
   *       in this field.</p>
   *          </important>
   */
  RunConfig?: CanaryRunConfigInput;

  /**
   * <p>The number of days to retain data about successful runs of this canary. If you omit
   *          this field, the default of 31 days is used. The valid range is 1 to 455 days.</p>
   */
  SuccessRetentionPeriodInDays?: number;

  /**
   * <p>The number of days to retain data about failed runs of this canary. If you omit
   *          this field, the default of 31 days is used. The valid range is 1 to 455 days.</p>
   */
  FailureRetentionPeriodInDays?: number;

  /**
   * <p>Specifies the runtime version to use for the canary. For a list of valid
   *          runtime versions and more information about
   *          runtime versions, see <a href="https://docs.aws.amazon.com/AmazonCloudWatch/latest/monitoring/CloudWatch_Synthetics_Canaries_Library.html">
   *             Canary Runtime Versions</a>.</p>
   */
  RuntimeVersion: string | undefined;

  /**
   * <p>If this canary is to test an endpoint in a VPC, this structure contains
   *       information about the subnet and security groups of the VPC endpoint.
   *       For more information, see <a href="https://docs.aws.amazon.com/AmazonCloudWatch/latest/monitoring/CloudWatch_Synthetics_Canaries_VPC.html">
   *          Running a Canary in a VPC</a>.</p>
   */
  VpcConfig?: VpcConfigInput;

  /**
   * <p>A list of key-value pairs to associate with the canary.
   *          You can associate as many as 50 tags with a canary.</p>
   *          <p>Tags can help you organize and categorize your
   *          resources. You can also use them to scope user permissions, by
   *          granting a user permission to access or change only the resources that have
   *          certain tag values.</p>
   */
  Tags?: Record<string, string>;

  /**
   * <p>A structure that contains the configuration for canary artifacts, including
   *          the encryption-at-rest settings for artifacts that the canary uploads to Amazon S3.</p>
   */
  ArtifactConfig?: ArtifactConfigInput;
}

export interface CreateCanaryResponse {
  /**
   * <p>The full details about the canary you have created.</p>
   */
  Canary?: Canary;
}

/**
 * <p>One of the input resources is larger than is allowed.</p>
 */
export class RequestEntityTooLargeException extends __BaseException {
  readonly name: "RequestEntityTooLargeException" = "RequestEntityTooLargeException";
  readonly $fault: "client" = "client";
  Message?: string;
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

export interface CreateGroupRequest {
  /**
   * <p>The name for the group. It can include any Unicode characters.</p>
   *          <p>The names for all groups in your account, across all Regions, must be unique.</p>
   */
  Name: string | undefined;

  /**
   * <p>A list of key-value pairs to associate with the group.
   *          You can associate as many as 50 tags with a group.</p>
   *          <p>Tags can help you organize and categorize your
   *          resources. You can also use them to scope user permissions, by
   *          granting a user permission to access or change only the resources that have
   *          certain tag values.</p>
   */
  Tags?: Record<string, string>;
}

/**
 * <p>This structure contains information about one group.</p>
 */
export interface Group {
  /**
   * <p>The unique ID of the group.</p>
   */
  Id?: string;

  /**
   * <p>The name of the group.</p>
   */
  Name?: string;

  /**
   * <p>The ARN of the group.</p>
   */
  Arn?: string;

  /**
   * <p>The list of key-value pairs that are associated with the canary.</p>
   */
  Tags?: Record<string, string>;

  /**
   * <p>The date and time that the group was created.</p>
   */
  CreatedTime?: Date;

  /**
   * <p>The date and time that the group was most recently updated.</p>
   */
  LastModifiedTime?: Date;
}

export interface CreateGroupResponse {
  /**
   * <p>A structure that contains information about the group that was just created.</p>
   */
  Group?: Group;
}

export interface DeleteCanaryRequest {
  /**
   * <p>The name of the canary that you want to delete. To find the names of your canaries, use <a href="https://docs.aws.amazon.com/AmazonSynthetics/latest/APIReference/API_DescribeCanaries.html">DescribeCanaries</a>.</p>
   */
  Name: string | undefined;

  /**
   * <p>Specifies whether to also delete the Lambda functions and layers used by this canary. The default
   *       is false.</p>
   *          <p>Type: Boolean</p>
   */
  DeleteLambda?: boolean;
}

export interface DeleteCanaryResponse {}

export interface DeleteGroupRequest {
  /**
   * <p>Specifies which group to delete. You can specify the group name, the ARN, or the
   *       group ID as the <code>GroupIdentifier</code>.</p>
   */
  GroupIdentifier: string | undefined;
}

export interface DeleteGroupResponse {}

export interface DescribeCanariesRequest {
  /**
   * <p>A token that indicates that there is more data
   *          available. You can use this token in a subsequent operation to retrieve the next
   *          set of results.</p>
   */
  NextToken?: string;

  /**
   * <p>Specify this parameter to limit how many canaries are returned each time you use
   *       the <code>DescribeCanaries</code> operation. If you omit this parameter, the default of 100 is used.</p>
   */
  MaxResults?: number;

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
   */
  Names?: string[];
}

export interface DescribeCanariesResponse {
  /**
   * <p>Returns an array. Each item in the array contains the full information about
   *          one canary.</p>
   */
  Canaries?: Canary[];

  /**
   * <p>A token that indicates that there is more data
   *          available. You can use this token in a subsequent <code>DescribeCanaries</code> operation to retrieve the next
   *          set of results.</p>
   */
  NextToken?: string;
}

export interface DescribeCanariesLastRunRequest {
  /**
   * <p>A token that indicates that there is more data
   *          available. You can use this token in a subsequent <code>DescribeCanariesLastRun</code> operation to retrieve the next
   *          set of results.</p>
   */
  NextToken?: string;

  /**
   * <p>Specify this parameter to limit how many runs are returned each time you use
   *          the <code>DescribeLastRun</code> operation. If you omit this parameter, the default of 100 is used.</p>
   */
  MaxResults?: number;

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
   */
  Names?: string[];
}

export interface DescribeCanariesLastRunResponse {
  /**
   * <p>An array that contains the information from the most recent run of each
   *          canary.</p>
   */
  CanariesLastRun?: CanaryLastRun[];

  /**
   * <p>A token that indicates that there is more data
   *          available. You can use this token in a subsequent <code>DescribeCanariesLastRun</code> operation to retrieve the next
   *          set of results.</p>
   */
  NextToken?: string;
}

export interface DescribeRuntimeVersionsRequest {
  /**
   * <p>A token that indicates that there is more data
   *          available. You can use this token in a subsequent <code>DescribeRuntimeVersions</code> operation to retrieve the next
   *          set of results.</p>
   */
  NextToken?: string;

  /**
   * <p>Specify this parameter to limit how many runs are returned each time you use
   *          the <code>DescribeRuntimeVersions</code> operation. If you omit this parameter, the default of 100 is used.</p>
   */
  MaxResults?: number;
}

/**
 * <p>This structure contains information about one canary runtime version. For more information about
 *          runtime versions, see <a href="https://docs.aws.amazon.com/AmazonCloudWatch/latest/monitoring/CloudWatch_Synthetics_Canaries_Library.html">
 *             Canary Runtime Versions</a>.</p>
 */
export interface RuntimeVersion {
  /**
   * <p>The name of the runtime version. For a list of valid runtime versions,
   *          see <a href="https://docs.aws.amazon.com/AmazonCloudWatch/latest/monitoring/CloudWatch_Synthetics_Canaries_Library.html">
   *             Canary Runtime Versions</a>.</p>
   */
  VersionName?: string;

  /**
   * <p>A description of the runtime version, created by Amazon.</p>
   */
  Description?: string;

  /**
   * <p>The date that the runtime version was released.</p>
   */
  ReleaseDate?: Date;

  /**
   * <p>If this runtime version is deprecated, this value is the date of deprecation.</p>
   */
  DeprecationDate?: Date;
}

export interface DescribeRuntimeVersionsResponse {
  /**
   * <p>An array of objects that display the details about each Synthetics canary runtime
   *          version.</p>
   */
  RuntimeVersions?: RuntimeVersion[];

  /**
   * <p>A token that indicates that there is more data
   *          available. You can use this token in a subsequent <code>DescribeRuntimeVersions</code> operation to retrieve the next
   *          set of results.</p>
   */
  NextToken?: string;
}

export interface DisassociateResourceRequest {
  /**
   * <p>Specifies the group. You can specify the group name, the ARN, or the
   *          group ID as the <code>GroupIdentifier</code>.</p>
   */
  GroupIdentifier: string | undefined;

  /**
   * <p>The ARN of the canary that you want to remove from the specified group.</p>
   */
  ResourceArn: string | undefined;
}

export interface DisassociateResourceResponse {}

export interface GetCanaryRequest {
  /**
   * <p>The name of the canary that you want details for.</p>
   */
  Name: string | undefined;
}

export interface GetCanaryResponse {
  /**
   * <p>A structure that contains the full information about the canary.</p>
   */
  Canary?: Canary;
}

export interface GetCanaryRunsRequest {
  /**
   * <p>The name of the canary that you want to see runs for.</p>
   */
  Name: string | undefined;

  /**
   * <p>A token that indicates that there is more data
   *          available. You can use this token in a subsequent <code>GetCanaryRuns</code> operation to retrieve the next
   *          set of results.</p>
   */
  NextToken?: string;

  /**
   * <p>Specify this parameter to limit how many runs are returned each time you use
   *          the <code>GetCanaryRuns</code> operation. If you omit this parameter, the default of 100 is used.</p>
   */
  MaxResults?: number;
}

export interface GetCanaryRunsResponse {
  /**
   * <p>An array of structures. Each structure contains the details of one of the
   *          retrieved canary runs.</p>
   */
  CanaryRuns?: CanaryRun[];

  /**
   * <p>A token that indicates that there is more data
   *          available. You can use this token in a subsequent <code>GetCanaryRuns</code>
   *          operation to retrieve the next
   *          set of results.</p>
   */
  NextToken?: string;
}

export interface GetGroupRequest {
  /**
   * <p>Specifies the group to return information for. You can specify the group name, the ARN, or the
   *          group ID as the <code>GroupIdentifier</code>.</p>
   */
  GroupIdentifier: string | undefined;
}

export interface GetGroupResponse {
  /**
   * <p>A structure that contains information about the group.</p>
   */
  Group?: Group;
}

/**
 * <p>A structure containing some information about a group.</p>
 */
export interface GroupSummary {
  /**
   * <p>The unique ID of the group.</p>
   */
  Id?: string;

  /**
   * <p>The name of the group.</p>
   */
  Name?: string;

  /**
   * <p>The ARN of the group.</p>
   */
  Arn?: string;
}

/**
 * <p>An internal failure occurred. Try the operation again.</p>
 */
export class InternalFailureException extends __BaseException {
  readonly name: "InternalFailureException" = "InternalFailureException";
  readonly $fault: "server" = "server";
  Message?: string;
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

export interface ListAssociatedGroupsRequest {
  /**
   * <p>A token that indicates that there is more data
   *          available. You can use this token in a subsequent operation to retrieve the next
   *          set of results.</p>
   */
  NextToken?: string;

  /**
   * <p>Specify this parameter to limit how many groups are returned each time you use
   *          the <code>ListAssociatedGroups</code> operation. If you omit this parameter, the default of 20 is used.</p>
   */
  MaxResults?: number;

  /**
   * <p>The ARN of the canary that you want to view groups for.</p>
   */
  ResourceArn: string | undefined;
}

export interface ListAssociatedGroupsResponse {
  /**
   * <p>An array of structures that contain information about the groups that this canary is associated with.</p>
   */
  Groups?: GroupSummary[];

  /**
   * <p>A token that indicates that there is more data
   *          available. You can use this token in a subsequent <code>ListAssociatedGroups</code> operation to retrieve the next
   *          set of results.</p>
   */
  NextToken?: string;
}

export interface ListGroupResourcesRequest {
  /**
   * <p>A token that indicates that there is more data
   *          available. You can use this token in a subsequent operation to retrieve the next
   *          set of results.</p>
   */
  NextToken?: string;

  /**
   * <p>Specify this parameter to limit how many canary ARNs are returned each time you use
   *          the <code>ListGroupResources</code> operation. If you omit this parameter, the default of 20 is used.</p>
   */
  MaxResults?: number;

  /**
   * <p>Specifies the group to return information for. You can specify the group name, the ARN, or the
   *          group ID as the <code>GroupIdentifier</code>.</p>
   */
  GroupIdentifier: string | undefined;
}

export interface ListGroupResourcesResponse {
  /**
   * <p>An array of ARNs. These ARNs are for the canaries that are associated with the group.</p>
   */
  Resources?: string[];

  /**
   * <p>A token that indicates that there is more data
   *          available. You can use this token in a subsequent <code>ListGroupResources</code> operation to retrieve the next
   *          set of results.</p>
   */
  NextToken?: string;
}

export interface ListGroupsRequest {
  /**
   * <p>A token that indicates that there is more data
   *          available. You can use this token in a subsequent operation to retrieve the next
   *          set of results.</p>
   */
  NextToken?: string;

  /**
   * <p>Specify this parameter to limit how many groups are returned each time you use
   *          the <code>ListGroups</code> operation. If you omit this parameter, the default of 20 is used.</p>
   */
  MaxResults?: number;
}

export interface ListGroupsResponse {
  /**
   * <p>An array of structures that each contain information about one group.</p>
   */
  Groups?: GroupSummary[];

  /**
   * <p>A token that indicates that there is more data
   *          available. You can use this token in a subsequent <code>ListGroups</code> operation to retrieve the next
   *          set of results.</p>
   */
  NextToken?: string;
}

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
   */
  ResourceArn: string | undefined;
}

export interface ListTagsForResourceResponse {
  /**
   * <p>The list of tag keys and values associated with the resource that you specified.</p>
   */
  Tags?: Record<string, string>;
}

/**
 * <p>The specified resource was not found.</p>
 */
export class NotFoundException extends __BaseException {
  readonly name: "NotFoundException" = "NotFoundException";
  readonly $fault: "client" = "client";
  Message?: string;
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
 */
export class TooManyRequestsException extends __BaseException {
  readonly name: "TooManyRequestsException" = "TooManyRequestsException";
  readonly $fault: "client" = "client";
  Message?: string;
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

export interface StartCanaryRequest {
  /**
   * <p>The name of the canary that you want to run. To find
   *          canary names, use <a href="https://docs.aws.amazon.com/AmazonSynthetics/latest/APIReference/API_DescribeCanaries.html">DescribeCanaries</a>.</p>
   */
  Name: string | undefined;
}

export interface StartCanaryResponse {}

export interface StopCanaryRequest {
  /**
   * <p>The name of the canary that you want to stop. To find the names of your
   *          canaries, use <a href="https://docs.aws.amazon.com/AmazonSynthetics/latest/APIReference/API_DescribeCanaries.html">ListCanaries</a>.</p>
   */
  Name: string | undefined;
}

export interface StopCanaryResponse {}

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
   */
  ResourceArn: string | undefined;

  /**
   * <p>The list of key-value pairs to associate with the resource.</p>
   */
  Tags: Record<string, string> | undefined;
}

export interface TagResourceResponse {}

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
   */
  ResourceArn: string | undefined;

  /**
   * <p>The list of tag keys to remove from the resource.</p>
   */
  TagKeys: string[] | undefined;
}

export interface UntagResourceResponse {}

/**
 * <p>An object that specifies what screenshots to use as a baseline for visual monitoring by this canary. It can
 *          optionally also specify parts of the screenshots to ignore during the visual monitoring comparison.</p>
 *
 *          <p>Visual monitoring is supported only on canaries running the <b>syn-puppeteer-node-3.2</b>
 *          runtime or later. For more information, see <a href="https://docs.aws.amazon.com/AmazonCloudWatch/latest/monitoring/CloudWatch_Synthetics_Library_SyntheticsLogger_VisualTesting.html">
 *             Visual monitoring</a> and <a href="https://docs.aws.amazon.com/AmazonCloudWatch/latest/monitoring/CloudWatch_Synthetics_Canaries_Blueprints_VisualTesting.html">
 *                Visual monitoring blueprint</a>
 *          </p>
 */
export interface VisualReferenceInput {
  /**
   * <p>An array of screenshots that will be used as the baseline for visual monitoring in future runs of this canary. If there is a screenshot that you don't want to be used for
   *       visual monitoring, remove it from this array.</p>
   */
  BaseScreenshots?: BaseScreenshot[];

  /**
   * <p>Specifies which canary run to use the screenshots from as the baseline for future visual monitoring with this canary. Valid values are
   *          <code>nextrun</code> to use the screenshots from the next run after this update is made, <code>lastrun</code> to use the screenshots from the most recent run
   *          before this update was made, or the value of <code>Id</code> in the <a href="https://docs.aws.amazon.com/AmazonSynthetics/latest/APIReference/API_CanaryRun.html">
   *             CanaryRun</a> from any past run of this canary.</p>
   */
  BaseCanaryRunId: string | undefined;
}

export interface UpdateCanaryRequest {
  /**
   * <p>The name of the canary that you want to update. To find the names of your
   *          canaries, use <a href="https://docs.aws.amazon.com/AmazonSynthetics/latest/APIReference/API_DescribeCanaries.html">DescribeCanaries</a>.</p>
   *          <p>You cannot change the name of a canary that has already been created.</p>
   */
  Name: string | undefined;

  /**
   * <p>A structure that includes the entry point from which the canary should start
   *          running your script. If the script is stored in
   *          an S3 bucket, the bucket name, key, and version are also included.
   *       </p>
   */
  Code?: CanaryCodeInput;

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
   */
  ExecutionRoleArn?: string;

  /**
   * <p>Specifies the runtime version to use for the canary.
   *          For a list of valid runtime versions and for more information about
   *          runtime versions, see <a href="https://docs.aws.amazon.com/AmazonCloudWatch/latest/monitoring/CloudWatch_Synthetics_Canaries_Library.html">
   *             Canary Runtime Versions</a>.</p>
   */
  RuntimeVersion?: string;

  /**
   * <p>A structure that contains information about how often the canary is to run, and when
   *          these runs are to stop.</p>
   */
  Schedule?: CanaryScheduleInput;

  /**
   * <p>A structure that contains the timeout value that is used for each individual run of the
   *          canary.</p>
   *          <important>
   *             <p>The environment variables keys and values are not encrypted. Do not store sensitive information
   *          in this field.</p>
   *          </important>
   */
  RunConfig?: CanaryRunConfigInput;

  /**
   * <p>The number of days to retain data about successful runs of this canary.</p>
   */
  SuccessRetentionPeriodInDays?: number;

  /**
   * <p>The number of days to retain data about failed runs of this canary.</p>
   */
  FailureRetentionPeriodInDays?: number;

  /**
   * <p>If this canary is to test an endpoint in a VPC, this structure contains
   *          information about the subnet and security groups of the VPC endpoint.
   *          For more information, see <a href="https://docs.aws.amazon.com/AmazonCloudWatch/latest/monitoring/CloudWatch_Synthetics_Canaries_VPC.html">
   *             Running a Canary in a VPC</a>.</p>
   */
  VpcConfig?: VpcConfigInput;

  /**
   * <p>Defines the screenshots to use as the baseline for comparisons during visual monitoring comparisons during future runs of this canary. If you omit this
   *       parameter, no changes are made to any baseline screenshots that the canary might be using already.</p>
   *          <p>Visual monitoring is supported only on canaries running the <b>syn-puppeteer-node-3.2</b>
   *          runtime or later. For more information, see <a href="https://docs.aws.amazon.com/AmazonCloudWatch/latest/monitoring/CloudWatch_Synthetics_Library_SyntheticsLogger_VisualTesting.html">
   *             Visual monitoring</a> and <a href="https://docs.aws.amazon.com/AmazonCloudWatch/latest/monitoring/CloudWatch_Synthetics_Canaries_Blueprints_VisualTesting.html">
   *                Visual monitoring blueprint</a>
   *          </p>
   */
  VisualReference?: VisualReferenceInput;

  /**
   * <p>The location in Amazon S3 where Synthetics stores artifacts from the test runs of this canary.
   *          Artifacts include the log file, screenshots, and HAR files. The name of the
   *          S3 bucket can't include a period (.).</p>
   */
  ArtifactS3Location?: string;

  /**
   * <p>A structure that contains the configuration for canary artifacts,
   *          including the encryption-at-rest settings for artifacts that
   *          the canary uploads to Amazon S3.</p>
   */
  ArtifactConfig?: ArtifactConfigInput;
}

export interface UpdateCanaryResponse {}

/**
 * @internal
 */
export const S3EncryptionConfigFilterSensitiveLog = (obj: S3EncryptionConfig): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ArtifactConfigInputFilterSensitiveLog = (obj: ArtifactConfigInput): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ArtifactConfigOutputFilterSensitiveLog = (obj: ArtifactConfigOutput): any => ({
  ...obj,
});

/**
 * @internal
 */
export const AssociateResourceRequestFilterSensitiveLog = (obj: AssociateResourceRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const AssociateResourceResponseFilterSensitiveLog = (obj: AssociateResourceResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const BaseScreenshotFilterSensitiveLog = (obj: BaseScreenshot): any => ({
  ...obj,
});

/**
 * @internal
 */
export const CanaryCodeOutputFilterSensitiveLog = (obj: CanaryCodeOutput): any => ({
  ...obj,
});

/**
 * @internal
 */
export const CanaryRunConfigOutputFilterSensitiveLog = (obj: CanaryRunConfigOutput): any => ({
  ...obj,
});

/**
 * @internal
 */
export const CanaryScheduleOutputFilterSensitiveLog = (obj: CanaryScheduleOutput): any => ({
  ...obj,
});

/**
 * @internal
 */
export const CanaryStatusFilterSensitiveLog = (obj: CanaryStatus): any => ({
  ...obj,
});

/**
 * @internal
 */
export const CanaryTimelineFilterSensitiveLog = (obj: CanaryTimeline): any => ({
  ...obj,
});

/**
 * @internal
 */
export const VisualReferenceOutputFilterSensitiveLog = (obj: VisualReferenceOutput): any => ({
  ...obj,
});

/**
 * @internal
 */
export const VpcConfigOutputFilterSensitiveLog = (obj: VpcConfigOutput): any => ({
  ...obj,
});

/**
 * @internal
 */
export const CanaryFilterSensitiveLog = (obj: Canary): any => ({
  ...obj,
});

/**
 * @internal
 */
export const CanaryRunStatusFilterSensitiveLog = (obj: CanaryRunStatus): any => ({
  ...obj,
});

/**
 * @internal
 */
export const CanaryRunTimelineFilterSensitiveLog = (obj: CanaryRunTimeline): any => ({
  ...obj,
});

/**
 * @internal
 */
export const CanaryRunFilterSensitiveLog = (obj: CanaryRun): any => ({
  ...obj,
});

/**
 * @internal
 */
export const CanaryLastRunFilterSensitiveLog = (obj: CanaryLastRun): any => ({
  ...obj,
});

/**
 * @internal
 */
export const CanaryCodeInputFilterSensitiveLog = (obj: CanaryCodeInput): any => ({
  ...obj,
});

/**
 * @internal
 */
export const CanaryRunConfigInputFilterSensitiveLog = (obj: CanaryRunConfigInput): any => ({
  ...obj,
});

/**
 * @internal
 */
export const CanaryScheduleInputFilterSensitiveLog = (obj: CanaryScheduleInput): any => ({
  ...obj,
});

/**
 * @internal
 */
export const VpcConfigInputFilterSensitiveLog = (obj: VpcConfigInput): any => ({
  ...obj,
});

/**
 * @internal
 */
export const CreateCanaryRequestFilterSensitiveLog = (obj: CreateCanaryRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const CreateCanaryResponseFilterSensitiveLog = (obj: CreateCanaryResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const CreateGroupRequestFilterSensitiveLog = (obj: CreateGroupRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const GroupFilterSensitiveLog = (obj: Group): any => ({
  ...obj,
});

/**
 * @internal
 */
export const CreateGroupResponseFilterSensitiveLog = (obj: CreateGroupResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DeleteCanaryRequestFilterSensitiveLog = (obj: DeleteCanaryRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DeleteCanaryResponseFilterSensitiveLog = (obj: DeleteCanaryResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DeleteGroupRequestFilterSensitiveLog = (obj: DeleteGroupRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DeleteGroupResponseFilterSensitiveLog = (obj: DeleteGroupResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DescribeCanariesRequestFilterSensitiveLog = (obj: DescribeCanariesRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DescribeCanariesResponseFilterSensitiveLog = (obj: DescribeCanariesResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DescribeCanariesLastRunRequestFilterSensitiveLog = (obj: DescribeCanariesLastRunRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DescribeCanariesLastRunResponseFilterSensitiveLog = (obj: DescribeCanariesLastRunResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DescribeRuntimeVersionsRequestFilterSensitiveLog = (obj: DescribeRuntimeVersionsRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const RuntimeVersionFilterSensitiveLog = (obj: RuntimeVersion): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DescribeRuntimeVersionsResponseFilterSensitiveLog = (obj: DescribeRuntimeVersionsResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DisassociateResourceRequestFilterSensitiveLog = (obj: DisassociateResourceRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DisassociateResourceResponseFilterSensitiveLog = (obj: DisassociateResourceResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const GetCanaryRequestFilterSensitiveLog = (obj: GetCanaryRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const GetCanaryResponseFilterSensitiveLog = (obj: GetCanaryResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const GetCanaryRunsRequestFilterSensitiveLog = (obj: GetCanaryRunsRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const GetCanaryRunsResponseFilterSensitiveLog = (obj: GetCanaryRunsResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const GetGroupRequestFilterSensitiveLog = (obj: GetGroupRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const GetGroupResponseFilterSensitiveLog = (obj: GetGroupResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const GroupSummaryFilterSensitiveLog = (obj: GroupSummary): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ListAssociatedGroupsRequestFilterSensitiveLog = (obj: ListAssociatedGroupsRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ListAssociatedGroupsResponseFilterSensitiveLog = (obj: ListAssociatedGroupsResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ListGroupResourcesRequestFilterSensitiveLog = (obj: ListGroupResourcesRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ListGroupResourcesResponseFilterSensitiveLog = (obj: ListGroupResourcesResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ListGroupsRequestFilterSensitiveLog = (obj: ListGroupsRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ListGroupsResponseFilterSensitiveLog = (obj: ListGroupsResponse): any => ({
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
export const StartCanaryRequestFilterSensitiveLog = (obj: StartCanaryRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const StartCanaryResponseFilterSensitiveLog = (obj: StartCanaryResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const StopCanaryRequestFilterSensitiveLog = (obj: StopCanaryRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const StopCanaryResponseFilterSensitiveLog = (obj: StopCanaryResponse): any => ({
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
export const VisualReferenceInputFilterSensitiveLog = (obj: VisualReferenceInput): any => ({
  ...obj,
});

/**
 * @internal
 */
export const UpdateCanaryRequestFilterSensitiveLog = (obj: UpdateCanaryRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const UpdateCanaryResponseFilterSensitiveLog = (obj: UpdateCanaryResponse): any => ({
  ...obj,
});
