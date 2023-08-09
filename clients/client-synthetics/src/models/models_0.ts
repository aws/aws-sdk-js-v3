// smithy-typescript generated code
import { ExceptionOptionType as __ExceptionOptionType } from "@smithy/smithy-client";

import { SyntheticsServiceException as __BaseException } from "./SyntheticsServiceException";

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
 * @public
 * <p>A structure that contains the configuration of encryption-at-rest settings for canary artifacts that the canary
 *          uploads to Amazon S3. </p>
 *          <p>For more information, see
 *          <a href="https://docs.aws.amazon.com/AmazonCloudWatch/latest/monitoring/CloudWatch_Synthetics_artifact_encryption.html">Encrypting canary artifacts</a>
 *             </p>
 */
export interface S3EncryptionConfig {
  /**
   * @public
   * <p> The encryption method to use for artifacts created by this canary. Specify <code>SSE_S3</code> to use
   *          server-side encryption (SSE) with an Amazon S3-managed
   *          key. Specify <code>SSE-KMS</code> to use server-side encryption with a customer-managed KMS key.</p>
   *          <p>If you omit this parameter, an
   *             Amazon Web Services-managed KMS key is used.
   *         </p>
   */
  EncryptionMode?: EncryptionMode | string;

  /**
   * @public
   * <p>The ARN of the customer-managed KMS key to use, if you specify <code>SSE-KMS</code>
   *          for <code>EncryptionMode</code>
   *          </p>
   */
  KmsKeyArn?: string;
}

/**
 * @public
 * <p>A structure that contains the configuration for canary artifacts, including the
 *          encryption-at-rest settings for artifacts that the canary uploads to Amazon S3.</p>
 */
export interface ArtifactConfigInput {
  /**
   * @public
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
 * @public
 * <p>A structure that contains the configuration for canary artifacts, including
 *          the encryption-at-rest settings for artifacts that the canary uploads to Amazon S3.</p>
 */
export interface ArtifactConfigOutput {
  /**
   * @public
   * <p>A structure that contains the configuration of encryption settings for canary artifacts that are stored in Amazon S3. </p>
   */
  S3Encryption?: S3EncryptionConfig;
}

/**
 * @public
 */
export interface AssociateResourceRequest {
  /**
   * @public
   * <p>Specifies the group. You can specify the group name, the ARN, or the
   *          group ID as the <code>GroupIdentifier</code>.</p>
   */
  GroupIdentifier: string | undefined;

  /**
   * @public
   * <p>The ARN of the canary that you want to associate with the specified group.</p>
   */
  ResourceArn: string | undefined;
}

/**
 * @public
 */
export interface AssociateResourceResponse {}

/**
 * @public
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
 * @public
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
 * @public
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
 * @public
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
 * @public
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
 * @public
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
 * @public
 * <p>A structure representing a screenshot that is used as a baseline during visual monitoring comparisons made by the canary.</p>
 */
export interface BaseScreenshot {
  /**
   * @public
   * <p>The name of the screenshot. This is generated the first time the canary is run after the <code>UpdateCanary</code> operation that
   *       specified for this canary to perform visual monitoring.</p>
   */
  ScreenshotName: string | undefined;

  /**
   * @public
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
 * @public
 * <p>This structure contains information about the canary's Lambda handler and
 *       where its code is stored by CloudWatch Synthetics.</p>
 */
export interface CanaryCodeOutput {
  /**
   * @public
   * <p>The ARN of the Lambda layer where Synthetics stores the canary script code.</p>
   */
  SourceLocationArn?: string;

  /**
   * @public
   * <p>The entry point to use for the source code when running the canary.</p>
   */
  Handler?: string;
}

/**
 * @public
 * <p>A structure that contains information about a canary run.</p>
 */
export interface CanaryRunConfigOutput {
  /**
   * @public
   * <p>How long the canary is allowed to run before it must stop.</p>
   */
  TimeoutInSeconds?: number;

  /**
   * @public
   * <p>The maximum amount of memory available to the canary while it is running, in MB. This value
   *          must be a multiple of 64.</p>
   */
  MemoryInMB?: number;

  /**
   * @public
   * <p>Displays whether this canary run used active X-Ray tracing. </p>
   */
  ActiveTracing?: boolean;
}

/**
 * @public
 * <p>How long, in seconds, for the canary to continue making regular runs according to the schedule in the
 *          <code>Expression</code> value.</p>
 */
export interface CanaryScheduleOutput {
  /**
   * @public
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
   * @public
   * <p>How long, in seconds, for the canary to continue making regular runs after it
   *          was created. The runs are performed according to the schedule in the
   *          <code>Expression</code> value.</p>
   */
  DurationInSeconds?: number;
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
 * @public
 * <p>A structure that contains the current state of the canary.</p>
 */
export interface CanaryStatus {
  /**
   * @public
   * <p>The current state of the canary.</p>
   */
  State?: CanaryState | string;

  /**
   * @public
   * <p>If the canary has insufficient permissions to run, this field provides more details.</p>
   */
  StateReason?: string;

  /**
   * @public
   * <p>If the canary cannot run or has failed, this field displays the reason.</p>
   */
  StateReasonCode?: CanaryStateReasonCode | string;
}

/**
 * @public
 * <p>This structure contains information about when the canary was created and modified.</p>
 */
export interface CanaryTimeline {
  /**
   * @public
   * <p>The date and time the canary was created.</p>
   */
  Created?: Date;

  /**
   * @public
   * <p>The date and time the canary was most recently modified.</p>
   */
  LastModified?: Date;

  /**
   * @public
   * <p>The date and time that the canary's most recent run started.</p>
   */
  LastStarted?: Date;

  /**
   * @public
   * <p>The date and time that the canary's most recent run ended.</p>
   */
  LastStopped?: Date;
}

/**
 * @public
 * <p>If this canary performs visual monitoring by comparing screenshots, this structure contains the ID of the canary run that is used as the baseline for screenshots, and the coordinates
 *          of any parts of those screenshots that are ignored during visual monitoring comparison.</p>
 *          <p>Visual monitoring is supported only on canaries running the <b>syn-puppeteer-node-3.2</b> runtime or later.</p>
 */
export interface VisualReferenceOutput {
  /**
   * @public
   * <p>An array of screenshots that are used as the baseline for comparisons during visual monitoring.</p>
   */
  BaseScreenshots?: BaseScreenshot[];

  /**
   * @public
   * <p>The ID of the canary run that produced the baseline screenshots
   *          that are used for visual monitoring comparisons by this canary.</p>
   */
  BaseCanaryRunId?: string;
}

/**
 * @public
 * <p>If this canary is to test an endpoint in a VPC, this structure contains
 *          information about the subnets and security groups of the VPC endpoint.
 *          For more information, see <a href="https://docs.aws.amazon.com/AmazonCloudWatch/latest/monitoring/CloudWatch_Synthetics_Canaries_VPC.html">
 *             Running a Canary in a VPC</a>.</p>
 */
export interface VpcConfigOutput {
  /**
   * @public
   * <p>The IDs of the VPC where this canary is to run.</p>
   */
  VpcId?: string;

  /**
   * @public
   * <p>The IDs of the subnets where this canary is to run.</p>
   */
  SubnetIds?: string[];

  /**
   * @public
   * <p>The IDs of the security groups for this canary.</p>
   */
  SecurityGroupIds?: string[];
}

/**
 * @public
 * <p>This structure contains all information about one canary in your account.</p>
 */
export interface Canary {
  /**
   * @public
   * <p>The unique ID of this canary.</p>
   */
  Id?: string;

  /**
   * @public
   * <p>The name of the canary.</p>
   */
  Name?: string;

  /**
   * @public
   * <p>This structure contains information about the canary's Lambda handler and
   *       where its code is stored by CloudWatch Synthetics.</p>
   */
  Code?: CanaryCodeOutput;

  /**
   * @public
   * <p>The ARN of the IAM role used to run the canary. This role must include <code>lambda.amazonaws.com</code> as a principal in the trust
   *          policy.</p>
   */
  ExecutionRoleArn?: string;

  /**
   * @public
   * <p>A structure that contains information about how often the canary is to run, and when
   *          these runs are to stop.</p>
   */
  Schedule?: CanaryScheduleOutput;

  /**
   * @public
   * <p>A structure that contains information about a canary run.</p>
   */
  RunConfig?: CanaryRunConfigOutput;

  /**
   * @public
   * <p>The number of days to retain data about successful runs of this canary.</p>
   */
  SuccessRetentionPeriodInDays?: number;

  /**
   * @public
   * <p>The number of days to retain data about failed runs of this canary.</p>
   */
  FailureRetentionPeriodInDays?: number;

  /**
   * @public
   * <p>A structure that contains information about the canary's status.</p>
   */
  Status?: CanaryStatus;

  /**
   * @public
   * <p>A structure that contains information about when the canary was created, modified, and
   *          most recently run.</p>
   */
  Timeline?: CanaryTimeline;

  /**
   * @public
   * <p>The location in Amazon S3 where Synthetics stores artifacts from the runs of this
   *          canary. Artifacts include the log file, screenshots, and HAR files.</p>
   */
  ArtifactS3Location?: string;

  /**
   * @public
   * <p>The ARN of the Lambda function that is used as your canary's engine. For more information
   *          about Lambda ARN format, see <a href="https://docs.aws.amazon.com/lambda/latest/dg/lambda-api-permissions-ref.html">Resources and Conditions for Lambda Actions</a>.</p>
   */
  EngineArn?: string;

  /**
   * @public
   * <p>Specifies the runtime version to use for the canary. For more information about
   *          runtime versions, see <a href="https://docs.aws.amazon.com/AmazonCloudWatch/latest/monitoring/CloudWatch_Synthetics_Canaries_Library.html">
   *             Canary Runtime Versions</a>.</p>
   */
  RuntimeVersion?: string;

  /**
   * @public
   * <p>If this canary is to test an endpoint in a VPC, this structure contains
   *          information about the subnets and security groups of the VPC endpoint.
   *          For more information, see <a href="https://docs.aws.amazon.com/AmazonCloudWatch/latest/monitoring/CloudWatch_Synthetics_Canaries_VPC.html">
   *             Running a Canary in a VPC</a>.</p>
   */
  VpcConfig?: VpcConfigOutput;

  /**
   * @public
   * <p>If this canary performs visual monitoring by comparing screenshots, this structure contains the ID of the canary run to use as the baseline for screenshots, and the coordinates
   *       of any parts of the screen to ignore during the visual monitoring comparison.</p>
   */
  VisualReference?: VisualReferenceOutput;

  /**
   * @public
   * <p>The list of key-value pairs that are associated with the canary.</p>
   */
  Tags?: Record<string, string>;

  /**
   * @public
   * <p>A structure that contains the configuration for canary artifacts, including
   *          the encryption-at-rest settings for artifacts that the canary uploads to Amazon S3.</p>
   */
  ArtifactConfig?: ArtifactConfigOutput;
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
 * <p>This structure contains the status information about a canary run.</p>
 */
export interface CanaryRunStatus {
  /**
   * @public
   * <p>The current state of the run.</p>
   */
  State?: CanaryRunState | string;

  /**
   * @public
   * <p>If run of the canary failed, this field contains the reason for the error.</p>
   */
  StateReason?: string;

  /**
   * @public
   * <p>If this value is <code>CANARY_FAILURE</code>, an exception occurred in the
   *          canary code. If this value is <code>EXECUTION_FAILURE</code>, an exception occurred in
   *          CloudWatch Synthetics.</p>
   */
  StateReasonCode?: CanaryRunStateReasonCode | string;
}

/**
 * @public
 * <p>This structure contains the start and end times of a single canary run.</p>
 */
export interface CanaryRunTimeline {
  /**
   * @public
   * <p>The start time of the run.</p>
   */
  Started?: Date;

  /**
   * @public
   * <p>The end time of the run.</p>
   */
  Completed?: Date;
}

/**
 * @public
 * <p>This structure contains the details about one run of one canary.</p>
 */
export interface CanaryRun {
  /**
   * @public
   * <p>A unique ID that identifies this canary run.</p>
   */
  Id?: string;

  /**
   * @public
   * <p>The name of the canary.</p>
   */
  Name?: string;

  /**
   * @public
   * <p>The status of this run.</p>
   */
  Status?: CanaryRunStatus;

  /**
   * @public
   * <p>A structure that contains the start and end times of this run.</p>
   */
  Timeline?: CanaryRunTimeline;

  /**
   * @public
   * <p>The location where the canary stored artifacts from the run. Artifacts include
   *          the log file, screenshots, and HAR files.</p>
   */
  ArtifactS3Location?: string;
}

/**
 * @public
 * <p>This structure contains information about the most recent run of a single canary.</p>
 */
export interface CanaryLastRun {
  /**
   * @public
   * <p>The name of the canary.</p>
   */
  CanaryName?: string;

  /**
   * @public
   * <p>The results from this canary's most recent run.</p>
   */
  LastRun?: CanaryRun;
}

/**
 * @public
 * <p>Use this structure to input your script code for the canary. This structure contains the
 *          Lambda handler with the location where the canary should start running the script. If the
 *          script is stored in an S3 bucket, the bucket name, key, and version are also included. If
 *          the script was passed into the canary directly, the script code is contained in the value
 *          of <code>Zipfile</code>. </p>
 */
export interface CanaryCodeInput {
  /**
   * @public
   * <p>If your canary script is located in S3, specify the bucket name here. Do not include <code>s3://</code> as the
   *          start of the bucket name.</p>
   */
  S3Bucket?: string;

  /**
   * @public
   * <p>The S3 key of your script. For more information, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/dev/UsingObjects.html">Working with Amazon S3 Objects</a>.</p>
   */
  S3Key?: string;

  /**
   * @public
   * <p>The S3 version ID of your script.</p>
   */
  S3Version?: string;

  /**
   * @public
   * <p>If you input your canary script directly into the canary instead of referring to an S3
   *          location, the value of this parameter is the base64-encoded contents of the .zip file that
   *          contains the script. It must be smaller than 225 Kb.</p>
   *          <p>For large canary scripts, we recommend that you use an S3 location instead of inputting it
   *       directly with this parameter.</p>
   */
  ZipFile?: Uint8Array;

  /**
   * @public
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
 * @public
 * <p>A structure that contains input information for a canary run.</p>
 */
export interface CanaryRunConfigInput {
  /**
   * @public
   * <p>How long the canary is allowed to run before it must stop. You can't set this time to be longer
   *          than the frequency of the runs of this canary.</p>
   *          <p>If you omit this field, the
   *          frequency of the canary is used as this value, up to a maximum of 14 minutes.</p>
   */
  TimeoutInSeconds?: number;

  /**
   * @public
   * <p>The maximum amount of memory available to the canary while it is running, in MB. This value must be a multiple of 64.</p>
   */
  MemoryInMB?: number;

  /**
   * @public
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
   * @public
   * <p>Specifies the keys and values to use for any environment variables
   *       used in the canary script. Use the following format:</p>
   *          <p>\{ "key1" : "value1", "key2" : "value2", ...\}</p>
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
 * @public
 * <p>This structure specifies how often a canary is to make runs and the date and time
 *          when it should stop making runs.</p>
 */
export interface CanaryScheduleInput {
  /**
   * @public
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
   * @public
   * <p>How long, in seconds, for the canary to continue making regular runs according to
   *          the schedule in the <code>Expression</code> value. If you specify 0, the canary continues
   *          making runs until you stop it. If you omit this field, the default of 0 is used.</p>
   */
  DurationInSeconds?: number;
}

/**
 * @public
 * <p>If this canary is to test an endpoint in a VPC, this structure contains
 *          information about the subnets and security groups of the VPC endpoint.
 *          For more information, see <a href="https://docs.aws.amazon.com/AmazonCloudWatch/latest/monitoring/CloudWatch_Synthetics_Canaries_VPC.html">
 *             Running a Canary in a VPC</a>.</p>
 */
export interface VpcConfigInput {
  /**
   * @public
   * <p>The IDs of the subnets where this canary is to run.</p>
   */
  SubnetIds?: string[];

  /**
   * @public
   * <p>The IDs of the security groups for this canary.</p>
   */
  SecurityGroupIds?: string[];
}

/**
 * @public
 */
export interface CreateCanaryRequest {
  /**
   * @public
   * <p>The name for this canary. Be sure to give it a descriptive name
   *          that distinguishes it from other canaries in your account.</p>
   *          <p>Do not include secrets or proprietary information in your canary names. The canary name
   *          makes up part of the canary ARN, and the ARN is included in outbound calls over the
   *          internet. For more information, see <a href="https://docs.aws.amazon.com/AmazonCloudWatch/latest/monitoring/servicelens_canaries_security.html">Security
   *             Considerations for Synthetics Canaries</a>.</p>
   */
  Name: string | undefined;

  /**
   * @public
   * <p>A structure that includes the entry point from which the canary should start
   *          running your script. If the script is stored in
   *          an S3 bucket, the bucket name, key, and version are also included.
   *       </p>
   */
  Code: CanaryCodeInput | undefined;

  /**
   * @public
   * <p>The location in Amazon S3 where Synthetics stores artifacts from the test runs of this
   *          canary. Artifacts include the log file, screenshots, and HAR files.  The name of the
   *          S3 bucket can't include a period (.).</p>
   */
  ArtifactS3Location: string | undefined;

  /**
   * @public
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
   * @public
   * <p>A structure that contains information about how often the canary is to run and when
   *          these test runs are to stop.</p>
   */
  Schedule: CanaryScheduleInput | undefined;

  /**
   * @public
   * <p>A structure that contains the configuration for individual canary runs,
   *          such as timeout value and environment variables.</p>
   *          <important>
   *             <p>The environment variables keys and values are not encrypted. Do not store sensitive information
   *       in this field.</p>
   *          </important>
   */
  RunConfig?: CanaryRunConfigInput;

  /**
   * @public
   * <p>The number of days to retain data about successful runs of this canary. If you omit
   *          this field, the default of 31 days is used. The valid range is 1 to 455 days.</p>
   */
  SuccessRetentionPeriodInDays?: number;

  /**
   * @public
   * <p>The number of days to retain data about failed runs of this canary. If you omit
   *          this field, the default of 31 days is used. The valid range is 1 to 455 days.</p>
   */
  FailureRetentionPeriodInDays?: number;

  /**
   * @public
   * <p>Specifies the runtime version to use for the canary. For a list of valid
   *          runtime versions and more information about
   *          runtime versions, see <a href="https://docs.aws.amazon.com/AmazonCloudWatch/latest/monitoring/CloudWatch_Synthetics_Canaries_Library.html">
   *             Canary Runtime Versions</a>.</p>
   */
  RuntimeVersion: string | undefined;

  /**
   * @public
   * <p>If this canary is to test an endpoint in a VPC, this structure contains
   *       information about the subnet and security groups of the VPC endpoint.
   *       For more information, see <a href="https://docs.aws.amazon.com/AmazonCloudWatch/latest/monitoring/CloudWatch_Synthetics_Canaries_VPC.html">
   *          Running a Canary in a VPC</a>.</p>
   */
  VpcConfig?: VpcConfigInput;

  /**
   * @public
   * <p>A list of key-value pairs to associate with the canary.
   *          You can associate as many as 50 tags with a canary.</p>
   *          <p>Tags can help you organize and categorize your
   *          resources. You can also use them to scope user permissions, by
   *          granting a user permission to access or change only the resources that have
   *          certain tag values.</p>
   */
  Tags?: Record<string, string>;

  /**
   * @public
   * <p>A structure that contains the configuration for canary artifacts, including
   *          the encryption-at-rest settings for artifacts that the canary uploads to Amazon S3.</p>
   */
  ArtifactConfig?: ArtifactConfigInput;
}

/**
 * @public
 */
export interface CreateCanaryResponse {
  /**
   * @public
   * <p>The full details about the canary you have created.</p>
   */
  Canary?: Canary;
}

/**
 * @public
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

/**
 * @public
 */
export interface CreateGroupRequest {
  /**
   * @public
   * <p>The name for the group. It can include any Unicode characters.</p>
   *          <p>The names for all groups in your account, across all Regions, must be unique.</p>
   */
  Name: string | undefined;

  /**
   * @public
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
 * @public
 * <p>This structure contains information about one group.</p>
 */
export interface Group {
  /**
   * @public
   * <p>The unique ID of the group.</p>
   */
  Id?: string;

  /**
   * @public
   * <p>The name of the group.</p>
   */
  Name?: string;

  /**
   * @public
   * <p>The ARN of the group.</p>
   */
  Arn?: string;

  /**
   * @public
   * <p>The list of key-value pairs that are associated with the canary.</p>
   */
  Tags?: Record<string, string>;

  /**
   * @public
   * <p>The date and time that the group was created.</p>
   */
  CreatedTime?: Date;

  /**
   * @public
   * <p>The date and time that the group was most recently updated.</p>
   */
  LastModifiedTime?: Date;
}

/**
 * @public
 */
export interface CreateGroupResponse {
  /**
   * @public
   * <p>A structure that contains information about the group that was just created.</p>
   */
  Group?: Group;
}

/**
 * @public
 */
export interface DeleteCanaryRequest {
  /**
   * @public
   * <p>The name of the canary that you want to delete. To find the names of your canaries, use <a href="https://docs.aws.amazon.com/AmazonSynthetics/latest/APIReference/API_DescribeCanaries.html">DescribeCanaries</a>.</p>
   */
  Name: string | undefined;

  /**
   * @public
   * <p>Specifies whether to also delete the Lambda functions and layers used by this canary. The default
   *       is false.</p>
   *          <p>Type: Boolean</p>
   */
  DeleteLambda?: boolean;
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
   * @public
   * <p>Specifies which group to delete. You can specify the group name, the ARN, or the
   *       group ID as the <code>GroupIdentifier</code>.</p>
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
   * @public
   * <p>A token that indicates that there is more data
   *          available. You can use this token in a subsequent operation to retrieve the next
   *          set of results.</p>
   */
  NextToken?: string;

  /**
   * @public
   * <p>Specify this parameter to limit how many canaries are returned each time you use
   *       the <code>DescribeCanaries</code> operation. If you omit this parameter, the default of 100 is used.</p>
   */
  MaxResults?: number;

  /**
   * @public
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

/**
 * @public
 */
export interface DescribeCanariesResponse {
  /**
   * @public
   * <p>Returns an array. Each item in the array contains the full information about
   *          one canary.</p>
   */
  Canaries?: Canary[];

  /**
   * @public
   * <p>A token that indicates that there is more data
   *          available. You can use this token in a subsequent <code>DescribeCanaries</code> operation to retrieve the next
   *          set of results.</p>
   */
  NextToken?: string;
}

/**
 * @public
 */
export interface DescribeCanariesLastRunRequest {
  /**
   * @public
   * <p>A token that indicates that there is more data
   *          available. You can use this token in a subsequent <code>DescribeCanariesLastRun</code> operation to retrieve the next
   *          set of results.</p>
   */
  NextToken?: string;

  /**
   * @public
   * <p>Specify this parameter to limit how many runs are returned each time you use
   *          the <code>DescribeLastRun</code> operation. If you omit this parameter, the default of 100 is used.</p>
   */
  MaxResults?: number;

  /**
   * @public
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

/**
 * @public
 */
export interface DescribeCanariesLastRunResponse {
  /**
   * @public
   * <p>An array that contains the information from the most recent run of each
   *          canary.</p>
   */
  CanariesLastRun?: CanaryLastRun[];

  /**
   * @public
   * <p>A token that indicates that there is more data
   *          available. You can use this token in a subsequent <code>DescribeCanariesLastRun</code> operation to retrieve the next
   *          set of results.</p>
   */
  NextToken?: string;
}

/**
 * @public
 */
export interface DescribeRuntimeVersionsRequest {
  /**
   * @public
   * <p>A token that indicates that there is more data
   *          available. You can use this token in a subsequent <code>DescribeRuntimeVersions</code> operation to retrieve the next
   *          set of results.</p>
   */
  NextToken?: string;

  /**
   * @public
   * <p>Specify this parameter to limit how many runs are returned each time you use
   *          the <code>DescribeRuntimeVersions</code> operation. If you omit this parameter, the default of 100 is used.</p>
   */
  MaxResults?: number;
}

/**
 * @public
 * <p>This structure contains information about one canary runtime version. For more information about
 *          runtime versions, see <a href="https://docs.aws.amazon.com/AmazonCloudWatch/latest/monitoring/CloudWatch_Synthetics_Canaries_Library.html">
 *             Canary Runtime Versions</a>.</p>
 */
export interface RuntimeVersion {
  /**
   * @public
   * <p>The name of the runtime version. For a list of valid runtime versions,
   *          see <a href="https://docs.aws.amazon.com/AmazonCloudWatch/latest/monitoring/CloudWatch_Synthetics_Canaries_Library.html">
   *             Canary Runtime Versions</a>.</p>
   */
  VersionName?: string;

  /**
   * @public
   * <p>A description of the runtime version, created by Amazon.</p>
   */
  Description?: string;

  /**
   * @public
   * <p>The date that the runtime version was released.</p>
   */
  ReleaseDate?: Date;

  /**
   * @public
   * <p>If this runtime version is deprecated, this value is the date of deprecation.</p>
   */
  DeprecationDate?: Date;
}

/**
 * @public
 */
export interface DescribeRuntimeVersionsResponse {
  /**
   * @public
   * <p>An array of objects that display the details about each Synthetics canary runtime
   *          version.</p>
   */
  RuntimeVersions?: RuntimeVersion[];

  /**
   * @public
   * <p>A token that indicates that there is more data
   *          available. You can use this token in a subsequent <code>DescribeRuntimeVersions</code> operation to retrieve the next
   *          set of results.</p>
   */
  NextToken?: string;
}

/**
 * @public
 */
export interface DisassociateResourceRequest {
  /**
   * @public
   * <p>Specifies the group. You can specify the group name, the ARN, or the
   *          group ID as the <code>GroupIdentifier</code>.</p>
   */
  GroupIdentifier: string | undefined;

  /**
   * @public
   * <p>The ARN of the canary that you want to remove from the specified group.</p>
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
   * @public
   * <p>The name of the canary that you want details for.</p>
   */
  Name: string | undefined;
}

/**
 * @public
 */
export interface GetCanaryResponse {
  /**
   * @public
   * <p>A structure that contains the full information about the canary.</p>
   */
  Canary?: Canary;
}

/**
 * @public
 */
export interface GetCanaryRunsRequest {
  /**
   * @public
   * <p>The name of the canary that you want to see runs for.</p>
   */
  Name: string | undefined;

  /**
   * @public
   * <p>A token that indicates that there is more data
   *          available. You can use this token in a subsequent <code>GetCanaryRuns</code> operation to retrieve the next
   *          set of results.</p>
   */
  NextToken?: string;

  /**
   * @public
   * <p>Specify this parameter to limit how many runs are returned each time you use
   *          the <code>GetCanaryRuns</code> operation. If you omit this parameter, the default of 100 is used.</p>
   */
  MaxResults?: number;
}

/**
 * @public
 */
export interface GetCanaryRunsResponse {
  /**
   * @public
   * <p>An array of structures. Each structure contains the details of one of the
   *          retrieved canary runs.</p>
   */
  CanaryRuns?: CanaryRun[];

  /**
   * @public
   * <p>A token that indicates that there is more data
   *          available. You can use this token in a subsequent <code>GetCanaryRuns</code>
   *          operation to retrieve the next
   *          set of results.</p>
   */
  NextToken?: string;
}

/**
 * @public
 */
export interface GetGroupRequest {
  /**
   * @public
   * <p>Specifies the group to return information for. You can specify the group name, the ARN, or the
   *          group ID as the <code>GroupIdentifier</code>.</p>
   */
  GroupIdentifier: string | undefined;
}

/**
 * @public
 */
export interface GetGroupResponse {
  /**
   * @public
   * <p>A structure that contains information about the group.</p>
   */
  Group?: Group;
}

/**
 * @public
 * <p>A structure containing some information about a group.</p>
 */
export interface GroupSummary {
  /**
   * @public
   * <p>The unique ID of the group.</p>
   */
  Id?: string;

  /**
   * @public
   * <p>The name of the group.</p>
   */
  Name?: string;

  /**
   * @public
   * <p>The ARN of the group.</p>
   */
  Arn?: string;
}

/**
 * @public
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

/**
 * @public
 */
export interface ListAssociatedGroupsRequest {
  /**
   * @public
   * <p>A token that indicates that there is more data
   *          available. You can use this token in a subsequent operation to retrieve the next
   *          set of results.</p>
   */
  NextToken?: string;

  /**
   * @public
   * <p>Specify this parameter to limit how many groups are returned each time you use
   *          the <code>ListAssociatedGroups</code> operation. If you omit this parameter, the default of 20 is used.</p>
   */
  MaxResults?: number;

  /**
   * @public
   * <p>The ARN of the canary that you want to view groups for.</p>
   */
  ResourceArn: string | undefined;
}

/**
 * @public
 */
export interface ListAssociatedGroupsResponse {
  /**
   * @public
   * <p>An array of structures that contain information about the groups that this canary is associated with.</p>
   */
  Groups?: GroupSummary[];

  /**
   * @public
   * <p>A token that indicates that there is more data
   *          available. You can use this token in a subsequent <code>ListAssociatedGroups</code> operation to retrieve the next
   *          set of results.</p>
   */
  NextToken?: string;
}

/**
 * @public
 */
export interface ListGroupResourcesRequest {
  /**
   * @public
   * <p>A token that indicates that there is more data
   *          available. You can use this token in a subsequent operation to retrieve the next
   *          set of results.</p>
   */
  NextToken?: string;

  /**
   * @public
   * <p>Specify this parameter to limit how many canary ARNs are returned each time you use
   *          the <code>ListGroupResources</code> operation. If you omit this parameter, the default of 20 is used.</p>
   */
  MaxResults?: number;

  /**
   * @public
   * <p>Specifies the group to return information for. You can specify the group name, the ARN, or the
   *          group ID as the <code>GroupIdentifier</code>.</p>
   */
  GroupIdentifier: string | undefined;
}

/**
 * @public
 */
export interface ListGroupResourcesResponse {
  /**
   * @public
   * <p>An array of ARNs. These ARNs are for the canaries that are associated with the group.</p>
   */
  Resources?: string[];

  /**
   * @public
   * <p>A token that indicates that there is more data
   *          available. You can use this token in a subsequent <code>ListGroupResources</code> operation to retrieve the next
   *          set of results.</p>
   */
  NextToken?: string;
}

/**
 * @public
 */
export interface ListGroupsRequest {
  /**
   * @public
   * <p>A token that indicates that there is more data
   *          available. You can use this token in a subsequent operation to retrieve the next
   *          set of results.</p>
   */
  NextToken?: string;

  /**
   * @public
   * <p>Specify this parameter to limit how many groups are returned each time you use
   *          the <code>ListGroups</code> operation. If you omit this parameter, the default of 20 is used.</p>
   */
  MaxResults?: number;
}

/**
 * @public
 */
export interface ListGroupsResponse {
  /**
   * @public
   * <p>An array of structures that each contain information about one group.</p>
   */
  Groups?: GroupSummary[];

  /**
   * @public
   * <p>A token that indicates that there is more data
   *          available. You can use this token in a subsequent <code>ListGroups</code> operation to retrieve the next
   *          set of results.</p>
   */
  NextToken?: string;
}

/**
 * @public
 */
export interface ListTagsForResourceRequest {
  /**
   * @public
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

/**
 * @public
 */
export interface ListTagsForResourceResponse {
  /**
   * @public
   * <p>The list of tag keys and values associated with the resource that you specified.</p>
   */
  Tags?: Record<string, string>;
}

/**
 * @public
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
 * @public
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

/**
 * @public
 */
export interface StartCanaryRequest {
  /**
   * @public
   * <p>The name of the canary that you want to run. To find
   *          canary names, use <a href="https://docs.aws.amazon.com/AmazonSynthetics/latest/APIReference/API_DescribeCanaries.html">DescribeCanaries</a>.</p>
   */
  Name: string | undefined;
}

/**
 * @public
 */
export interface StartCanaryResponse {}

/**
 * @public
 */
export interface StopCanaryRequest {
  /**
   * @public
   * <p>The name of the canary that you want to stop. To find the names of your
   *          canaries, use <a href="https://docs.aws.amazon.com/AmazonSynthetics/latest/APIReference/API_DescribeCanaries.html">ListCanaries</a>.</p>
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
   * @public
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
   * @public
   * <p>The list of key-value pairs to associate with the resource.</p>
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
   * @public
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
   * @public
   * <p>The list of tag keys to remove from the resource.</p>
   */
  TagKeys: string[] | undefined;
}

/**
 * @public
 */
export interface UntagResourceResponse {}

/**
 * @public
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
   * @public
   * <p>An array of screenshots that will be used as the baseline for visual monitoring in future runs of this canary. If there is a screenshot that you don't want to be used for
   *       visual monitoring, remove it from this array.</p>
   */
  BaseScreenshots?: BaseScreenshot[];

  /**
   * @public
   * <p>Specifies which canary run to use the screenshots from as the baseline for future visual monitoring with this canary. Valid values are
   *          <code>nextrun</code> to use the screenshots from the next run after this update is made, <code>lastrun</code> to use the screenshots from the most recent run
   *          before this update was made, or the value of <code>Id</code> in the <a href="https://docs.aws.amazon.com/AmazonSynthetics/latest/APIReference/API_CanaryRun.html">
   *             CanaryRun</a> from any past run of this canary.</p>
   */
  BaseCanaryRunId: string | undefined;
}

/**
 * @public
 */
export interface UpdateCanaryRequest {
  /**
   * @public
   * <p>The name of the canary that you want to update. To find the names of your
   *          canaries, use <a href="https://docs.aws.amazon.com/AmazonSynthetics/latest/APIReference/API_DescribeCanaries.html">DescribeCanaries</a>.</p>
   *          <p>You cannot change the name of a canary that has already been created.</p>
   */
  Name: string | undefined;

  /**
   * @public
   * <p>A structure that includes the entry point from which the canary should start
   *          running your script. If the script is stored in
   *          an S3 bucket, the bucket name, key, and version are also included.
   *       </p>
   */
  Code?: CanaryCodeInput;

  /**
   * @public
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
   * @public
   * <p>Specifies the runtime version to use for the canary.
   *          For a list of valid runtime versions and for more information about
   *          runtime versions, see <a href="https://docs.aws.amazon.com/AmazonCloudWatch/latest/monitoring/CloudWatch_Synthetics_Canaries_Library.html">
   *             Canary Runtime Versions</a>.</p>
   */
  RuntimeVersion?: string;

  /**
   * @public
   * <p>A structure that contains information about how often the canary is to run, and when
   *          these runs are to stop.</p>
   */
  Schedule?: CanaryScheduleInput;

  /**
   * @public
   * <p>A structure that contains the timeout value that is used for each individual run of the
   *          canary.</p>
   *          <important>
   *             <p>The environment variables keys and values are not encrypted. Do not store sensitive information
   *          in this field.</p>
   *          </important>
   */
  RunConfig?: CanaryRunConfigInput;

  /**
   * @public
   * <p>The number of days to retain data about successful runs of this canary.</p>
   */
  SuccessRetentionPeriodInDays?: number;

  /**
   * @public
   * <p>The number of days to retain data about failed runs of this canary.</p>
   */
  FailureRetentionPeriodInDays?: number;

  /**
   * @public
   * <p>If this canary is to test an endpoint in a VPC, this structure contains
   *          information about the subnet and security groups of the VPC endpoint.
   *          For more information, see <a href="https://docs.aws.amazon.com/AmazonCloudWatch/latest/monitoring/CloudWatch_Synthetics_Canaries_VPC.html">
   *             Running a Canary in a VPC</a>.</p>
   */
  VpcConfig?: VpcConfigInput;

  /**
   * @public
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
   * @public
   * <p>The location in Amazon S3 where Synthetics stores artifacts from the test runs of this canary.
   *          Artifacts include the log file, screenshots, and HAR files. The name of the
   *          S3 bucket can't include a period (.).</p>
   */
  ArtifactS3Location?: string;

  /**
   * @public
   * <p>A structure that contains the configuration for canary artifacts,
   *          including the encryption-at-rest settings for artifacts that
   *          the canary uploads to Amazon S3.</p>
   */
  ArtifactConfig?: ArtifactConfigInput;
}

/**
 * @public
 */
export interface UpdateCanaryResponse {}
