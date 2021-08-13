import { MetadataBearer as $MetadataBearer, SmithyException as __SmithyException } from "@aws-sdk/types";

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
   * <p>Coordinates that define the part of a screen to ignore during screenshot comparisons. To obtain the coordinates to use here, use the
   *          CloudWatch Logs console to draw the boundaries on the screen. For more information, see {LINK}</p>
   */
  IgnoreCoordinates?: string[];
}

export namespace BaseScreenshot {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: BaseScreenshot): any => ({
    ...obj,
  });
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

export namespace CanaryCodeOutput {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: CanaryCodeOutput): any => ({
    ...obj,
  });
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

export namespace CanaryRunConfigOutput {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: CanaryRunConfigOutput): any => ({
    ...obj,
  });
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

export namespace CanaryScheduleOutput {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: CanaryScheduleOutput): any => ({
    ...obj,
  });
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
  INVALID_PERMISSIONS = "INVALID_PERMISSIONS",
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

export namespace CanaryStatus {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: CanaryStatus): any => ({
    ...obj,
  });
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

export namespace CanaryTimeline {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: CanaryTimeline): any => ({
    ...obj,
  });
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
   * <p>The ID of the canary run that produced the screenshots that are used as the baseline for visual monitoring comparisons during future runs of this canary.</p>
   */
  BaseCanaryRunId?: string;
}

export namespace VisualReferenceOutput {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: VisualReferenceOutput): any => ({
    ...obj,
  });
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

export namespace VpcConfigOutput {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: VpcConfigOutput): any => ({
    ...obj,
  });
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
  Tags?: { [key: string]: string };
}

export namespace Canary {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: Canary): any => ({
    ...obj,
  });
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

export namespace CanaryRunStatus {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: CanaryRunStatus): any => ({
    ...obj,
  });
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

export namespace CanaryRunTimeline {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: CanaryRunTimeline): any => ({
    ...obj,
  });
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

export namespace CanaryRun {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: CanaryRun): any => ({
    ...obj,
  });
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

export namespace CanaryLastRun {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: CanaryLastRun): any => ({
    ...obj,
  });
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
   *          contains the script. It must be smaller than 256 Kb.</p>
   */
  ZipFile?: Uint8Array;

  /**
   * <p>The entry point to use for the source code when running the canary. This value must end
   *          with the string <code>.handler</code>. The string is limited to 29 characters or fewer.</p>
   */
  Handler: string | undefined;
}

export namespace CanaryCodeInput {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: CanaryCodeInput): any => ({
    ...obj,
  });
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
   */
  EnvironmentVariables?: { [key: string]: string };
}

export namespace CanaryRunConfigInput {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: CanaryRunConfigInput): any => ({
    ...obj,
  });
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

export namespace CanaryScheduleInput {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: CanaryScheduleInput): any => ({
    ...obj,
  });
}

/**
 * <p>A conflicting operation is already in progress.</p>
 */
export interface ConflictException extends __SmithyException, $MetadataBearer {
  name: "ConflictException";
  $fault: "client";
  Message?: string;
}

export namespace ConflictException {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ConflictException): any => ({
    ...obj,
  });
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

export namespace VpcConfigInput {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: VpcConfigInput): any => ({
    ...obj,
  });
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
   *          such as timeout value.</p>
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
  Tags?: { [key: string]: string };
}

export namespace CreateCanaryRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: CreateCanaryRequest): any => ({
    ...obj,
  });
}

export interface CreateCanaryResponse {
  /**
   * <p>The full details about the canary you have created.</p>
   */
  Canary?: Canary;
}

export namespace CreateCanaryResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: CreateCanaryResponse): any => ({
    ...obj,
  });
}

/**
 * <p>An unknown internal error occurred.</p>
 */
export interface InternalServerException extends __SmithyException, $MetadataBearer {
  name: "InternalServerException";
  $fault: "server";
  Message?: string;
}

export namespace InternalServerException {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: InternalServerException): any => ({
    ...obj,
  });
}

/**
 * <p>A parameter could not be validated.</p>
 */
export interface ValidationException extends __SmithyException, $MetadataBearer {
  name: "ValidationException";
  $fault: "client";
  Message?: string;
}

export namespace ValidationException {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ValidationException): any => ({
    ...obj,
  });
}

export interface DeleteCanaryRequest {
  /**
   * <p>The name of the canary that you want to delete. To find the names of your canaries, use <a href="https://docs.aws.amazon.com/AmazonSynthetics/latest/APIReference/API_DescribeCanaries.html">DescribeCanaries</a>.</p>
   */
  Name: string | undefined;
}

export namespace DeleteCanaryRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DeleteCanaryRequest): any => ({
    ...obj,
  });
}

export interface DeleteCanaryResponse {}

export namespace DeleteCanaryResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DeleteCanaryResponse): any => ({
    ...obj,
  });
}

/**
 * <p>One of the specified resources was not found.</p>
 */
export interface ResourceNotFoundException extends __SmithyException, $MetadataBearer {
  name: "ResourceNotFoundException";
  $fault: "client";
  Message?: string;
}

export namespace ResourceNotFoundException {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ResourceNotFoundException): any => ({
    ...obj,
  });
}

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
}

export namespace DescribeCanariesRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DescribeCanariesRequest): any => ({
    ...obj,
  });
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

export namespace DescribeCanariesResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DescribeCanariesResponse): any => ({
    ...obj,
  });
}

export interface DescribeCanariesLastRunRequest {
  /**
   * <p>A token that indicates that there is more data
   *          available. You can use this token in a subsequent <code>DescribeCanaries</code> operation to retrieve the next
   *          set of results.</p>
   */
  NextToken?: string;

  /**
   * <p>Specify this parameter to limit how many runs are returned each time you use
   *          the <code>DescribeLastRun</code> operation. If you omit this parameter, the default of 100 is used.</p>
   */
  MaxResults?: number;
}

export namespace DescribeCanariesLastRunRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DescribeCanariesLastRunRequest): any => ({
    ...obj,
  });
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

export namespace DescribeCanariesLastRunResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DescribeCanariesLastRunResponse): any => ({
    ...obj,
  });
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

export namespace DescribeRuntimeVersionsRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DescribeRuntimeVersionsRequest): any => ({
    ...obj,
  });
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

export namespace RuntimeVersion {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: RuntimeVersion): any => ({
    ...obj,
  });
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

export namespace DescribeRuntimeVersionsResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DescribeRuntimeVersionsResponse): any => ({
    ...obj,
  });
}

export interface GetCanaryRequest {
  /**
   * <p>The name of the canary that you want details for.</p>
   */
  Name: string | undefined;
}

export namespace GetCanaryRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: GetCanaryRequest): any => ({
    ...obj,
  });
}

export interface GetCanaryResponse {
  /**
   * <p>A strucure that contains the full information about the canary.</p>
   */
  Canary?: Canary;
}

export namespace GetCanaryResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: GetCanaryResponse): any => ({
    ...obj,
  });
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

export namespace GetCanaryRunsRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: GetCanaryRunsRequest): any => ({
    ...obj,
  });
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

export namespace GetCanaryRunsResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: GetCanaryRunsResponse): any => ({
    ...obj,
  });
}

export interface ListTagsForResourceRequest {
  /**
   * <p>The ARN of the canary that you want to view tags for.</p>
   *          <p>The ARN format of a canary is
   *                <code>arn:aws:synthetics:<i>Region</i>:<i>account-id</i>:canary:<i>canary-name</i>
   *             </code>.</p>
   */
  ResourceArn: string | undefined;
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
   * <p>The list of tag keys and values associated with the canary that you specified.</p>
   */
  Tags?: { [key: string]: string };
}

export namespace ListTagsForResourceResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ListTagsForResourceResponse): any => ({
    ...obj,
  });
}

export interface StartCanaryRequest {
  /**
   * <p>The name of the canary that you want to run. To find
   *          canary names, use <a href="https://docs.aws.amazon.com/AmazonSynthetics/latest/APIReference/API_DescribeCanaries.html">DescribeCanaries</a>.</p>
   */
  Name: string | undefined;
}

export namespace StartCanaryRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: StartCanaryRequest): any => ({
    ...obj,
  });
}

export interface StartCanaryResponse {}

export namespace StartCanaryResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: StartCanaryResponse): any => ({
    ...obj,
  });
}

export interface StopCanaryRequest {
  /**
   * <p>The name of the canary that you want to stop. To find the names of your
   *          canaries, use <a href="https://docs.aws.amazon.com/AmazonSynthetics/latest/APIReference/API_DescribeCanaries.html">DescribeCanaries</a>.</p>
   */
  Name: string | undefined;
}

export namespace StopCanaryRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: StopCanaryRequest): any => ({
    ...obj,
  });
}

export interface StopCanaryResponse {}

export namespace StopCanaryResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: StopCanaryResponse): any => ({
    ...obj,
  });
}

export interface TagResourceRequest {
  /**
   * <p>The ARN of the canary that you're adding tags to.</p>
   *          <p>The ARN format of a canary is
   *                <code>arn:aws:synthetics:<i>Region</i>:<i>account-id</i>:canary:<i>canary-name</i>
   *             </code>.</p>
   */
  ResourceArn: string | undefined;

  /**
   * <p>The list of key-value pairs to associate with the canary.</p>
   */
  Tags: { [key: string]: string } | undefined;
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

export interface UntagResourceRequest {
  /**
   * <p>The ARN of the canary that you're removing tags from.</p>
   *          <p>The ARN format of a canary is
   *                <code>arn:aws:synthetics:<i>Region</i>:<i>account-id</i>:canary:<i>canary-name</i>
   *             </code>.</p>
   */
  ResourceArn: string | undefined;

  /**
   * <p>The list of tag keys to remove from the resource.</p>
   */
  TagKeys: string[] | undefined;
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
 * <p>An object that specifies what screenshots to use as a baseline for visual monitoring by this canary, and optionally the parts of the screenshots to ignore during the visual monitoring comparison.</p>
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

export namespace VisualReferenceInput {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: VisualReferenceInput): any => ({
    ...obj,
  });
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
}

export namespace UpdateCanaryRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: UpdateCanaryRequest): any => ({
    ...obj,
  });
}

export interface UpdateCanaryResponse {}

export namespace UpdateCanaryResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: UpdateCanaryResponse): any => ({
    ...obj,
  });
}
