import { SENSITIVE_STRING, SmithyException as __SmithyException, isa as __isa } from "@aws-sdk/smithy-client";
import { MetadataBearer as $MetadataBearer } from "@aws-sdk/types";

/**
 * <p>This structure contains all information about one canary in your account.</p>
 */
export interface Canary {
  __type?: "Canary";
  /**
   * <p>The unique ID of this canary.</p>
   */
  Id?: string;

  /**
   * <p>The ARN of the Lambda function that is used as your canary's engine. For more information
   *          about Lambda ARN format, see <a href="https://docs.aws.amazon.com/lambda/latest/dg/lambda-api-permissions-ref.html">Resources and Conditions for Lambda Actions</a>.</p>
   */
  EngineArn?: string;

  /**
   * <p>If this canary is to test an endpoint in a VPC, this structure contains
   *          information about the subnets and security groups of the VPC endpoint.
   *          For more information, see <a href="https://docs.aws.amazon.com/AmazonCloudWatch/latest/monitoring/CloudWatch_Synthetics_Canaries_VPC.html">
   *             Running a Canary in a VPC</a>.</p>
   */
  VpcConfig?: VpcConfigOutput;

  /**
   * <p>The number of days to retain data about successful runs of this canary.</p>
   */
  SuccessRetentionPeriodInDays?: number;

  /**
   * <p>Specifies the runtime version to use for the canary. Currently, the only valid
   *          value is <code>syn-1.0</code>. For more information about
   *          runtime versions, see <a href="https://docs.aws.amazon.com/AmazonCloudWatch/latest/monitoring/CloudWatch_Synthetics_Canaries_Library.html">
   *             Canary Runtime Versions</a>.</p>
   */
  RuntimeVersion?: string;

  /**
   * <p>The list of key-value pairs that are associated with the canary.</p>
   */
  Tags?: { [key: string]: string };

  /**
   * <p>The number of days to retain data about failed runs of this canary.</p>
   */
  FailureRetentionPeriodInDays?: number;

  /**
   * <p>A structure that contains information about the canary's status.</p>
   */
  Status?: CanaryStatus;

  /**
   * <p>The location in Amazon S3 where Synthetics stores artifacts from the runs of this
   *          canary. Artifacts include the log file, screenshots, and HAR files.</p>
   */
  ArtifactS3Location?: string;

  /**
   * <p>The ARN of the IAM role used to run the canary. This role must include <code>lambda.amazonaws.com</code> as a principal in the trust
   *          policy.</p>
   */
  ExecutionRoleArn?: string;

  /**
   * <p>This structure contains information about the canary's Lambda handler and
   *       where its code is stored by CloudWatch Synthetics.</p>
   */
  Code?: CanaryCodeOutput;

  /**
   * <p>The name of the canary.</p>
   */
  Name?: string;

  /**
   * <p>A structure that contains information about how often the canary is to run, and when
   *          these runs are to stop.</p>
   */
  Schedule?: CanaryScheduleOutput;

  /**
   * <p>A structure that contains information about when the canary was created, modified, and
   *          most recently run.</p>
   */
  Timeline?: CanaryTimeline;

  /**
   * <p>A structure that contains information for a canary run.</p>
   */
  RunConfig?: CanaryRunConfigOutput;
}

export namespace Canary {
  export const filterSensitiveLog = (obj: Canary): any => ({
    ...obj,
  });
  export const isa = (o: any): o is Canary => __isa(o, "Canary");
}

/**
 * <p>Use this structure to input your script code for the canary. This structure contains the
 *          Lambda handler with the location where the canary should start running the script. If the
 *          script is stored in an S3 bucket, the bucket name, key, and version are also included. If
 *          the script was passed into the canary directly, the script code is contained in the value
 *          of <code>Zipfile</code>. </p>
 */
export interface CanaryCodeInput {
  __type?: "CanaryCodeInput";
  /**
   * <p>The S3 version ID of your script.</p>
   */
  S3Version?: string;

  /**
   * <p>The entry point to use for the source code when running the canary. This value must end
   *          with the string <code>.handler</code>.</p>
   */
  Handler: string | undefined;

  /**
   * <p>The S3 key of your script. For more information, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/dev/UsingObjects.html">Working with Amazon S3 Objects</a>.</p>
   */
  S3Key?: string;

  /**
   * <p>If your canary script is located in S3, specify the full bucket name here. The bucket
   *          must already exist. Specify the full bucket name, including <code>s3://</code> as the
   *          start of the bucket name.</p>
   */
  S3Bucket?: string;

  /**
   * <p>If you input your canary script directly into the canary instead of referring to an S3
   *          location, the value of this parameter is the .zip file that contains the script. It can be
   *          up to 5 MB.</p>
   */
  ZipFile?: Uint8Array;
}

export namespace CanaryCodeInput {
  export const filterSensitiveLog = (obj: CanaryCodeInput): any => ({
    ...obj,
  });
  export const isa = (o: any): o is CanaryCodeInput => __isa(o, "CanaryCodeInput");
}

/**
 * <p>This structure contains information about the canary's Lambda handler and
 *       where its code is stored by CloudWatch Synthetics.</p>
 */
export interface CanaryCodeOutput {
  __type?: "CanaryCodeOutput";
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
  export const filterSensitiveLog = (obj: CanaryCodeOutput): any => ({
    ...obj,
  });
  export const isa = (o: any): o is CanaryCodeOutput => __isa(o, "CanaryCodeOutput");
}

/**
 * <p>This structure contains information about the most recent run of a single canary.</p>
 */
export interface CanaryLastRun {
  __type?: "CanaryLastRun";
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
  export const filterSensitiveLog = (obj: CanaryLastRun): any => ({
    ...obj,
  });
  export const isa = (o: any): o is CanaryLastRun => __isa(o, "CanaryLastRun");
}

/**
 * <p>This structure contains the details about one run of one canary.</p>
 */
export interface CanaryRun {
  __type?: "CanaryRun";
  /**
   * <p>The name of the canary.</p>
   */
  Name?: string;

  /**
   * <p>The location where the canary stored artifacts from the run. Artifacts include
   *          the log file, screenshots, and HAR files.</p>
   */
  ArtifactS3Location?: string;

  /**
   * <p>A structure that contains the start and end times of this run.</p>
   */
  Timeline?: CanaryRunTimeline;

  /**
   * <p>The status of this run.</p>
   */
  Status?: CanaryRunStatus;
}

export namespace CanaryRun {
  export const filterSensitiveLog = (obj: CanaryRun): any => ({
    ...obj,
  });
  export const isa = (o: any): o is CanaryRun => __isa(o, "CanaryRun");
}

/**
 * <p>A structure that contains input information for a canary run.</p>
 */
export interface CanaryRunConfigInput {
  __type?: "CanaryRunConfigInput";
  /**
   * <p>The maximum amount of memory available to the canary while it is running, in MB. The value
   *       you specify must be a multiple of 64.</p>
   */
  MemoryInMB?: number;

  /**
   * <p>How long the canary is allowed to run before it must stop. If you omit this field, the
   *          frequency of the canary is used as this value, up to a maximum of 14 minutes.</p>
   */
  TimeoutInSeconds: number | undefined;
}

export namespace CanaryRunConfigInput {
  export const filterSensitiveLog = (obj: CanaryRunConfigInput): any => ({
    ...obj,
  });
  export const isa = (o: any): o is CanaryRunConfigInput => __isa(o, "CanaryRunConfigInput");
}

/**
 * <p>A structure that contains information for a canary run.</p>
 */
export interface CanaryRunConfigOutput {
  __type?: "CanaryRunConfigOutput";
  /**
   * <p>How long the canary is allowed to run before it must stop.</p>
   */
  TimeoutInSeconds?: number;

  /**
   * <p>The maximum amount of memory available to the canary while it is running, in MB. The value
   *          you must be a multiple of 64.</p>
   */
  MemoryInMB?: number;
}

export namespace CanaryRunConfigOutput {
  export const filterSensitiveLog = (obj: CanaryRunConfigOutput): any => ({
    ...obj,
  });
  export const isa = (o: any): o is CanaryRunConfigOutput => __isa(o, "CanaryRunConfigOutput");
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
  __type?: "CanaryRunStatus";
  /**
   * <p>If this value is <code>CANARY_FAILURE</code>, an exception occurred in the
   *          canary code. If this value is <code>EXECUTION_FAILURE</code>, an exception occurred in
   *          CloudWatch Synthetics.</p>
   */
  StateReasonCode?: CanaryRunStateReasonCode | string;

  /**
   * <p>If run of the canary failed, this field contains the reason for the error.</p>
   */
  StateReason?: string;

  /**
   * <p>The current state of the run.</p>
   */
  State?: CanaryRunState | string;
}

export namespace CanaryRunStatus {
  export const filterSensitiveLog = (obj: CanaryRunStatus): any => ({
    ...obj,
  });
  export const isa = (o: any): o is CanaryRunStatus => __isa(o, "CanaryRunStatus");
}

/**
 * <p>This structure contains the start and end times of a single canary run.</p>
 */
export interface CanaryRunTimeline {
  __type?: "CanaryRunTimeline";
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
  export const filterSensitiveLog = (obj: CanaryRunTimeline): any => ({
    ...obj,
  });
  export const isa = (o: any): o is CanaryRunTimeline => __isa(o, "CanaryRunTimeline");
}

/**
 * <p>This structure specifies how often a canary is to make runs and the date and time
 *          when it should stop making runs.</p>
 */
export interface CanaryScheduleInput {
  __type?: "CanaryScheduleInput";
  /**
   * <p>How long, in seconds, for the canary to continue making regular runs according to
   *          the schedule in the <code>Expression</code> value. If you specify 0, the canary continues
   *          making runs until you stop it. If you omit this field, the default of 0 is used.</p>
   */
  DurationInSeconds?: number;

  /**
   * <p>A rate expression that defines how often the canary is to run. The syntax is
   *                <code>rate(<i>number unit</i>)</code>. <i>unit</i>
   *          can be <code>minute</code>, <code>minutes</code>, or <code>hour</code>. </p>
   *          <p>For example, <code>rate(1 minute)</code> runs the canary once a minute, <code>rate(10 minutes)</code> runs it once every
   *       10 minutes, and <code>rate(1 hour)</code> runs it once every hour. You can
   *          specify a frequency between <code>rate(1 minute)</code> and <code>rate(1 hour)</code>.</p>
   *          <p>Specifying <code>rate(0 minute)</code> or <code>rate(0 hour)</code> is a special value
   *          that causes the
   *          canary to run only once when it is started.</p>
   */
  Expression: string | undefined;
}

export namespace CanaryScheduleInput {
  export const filterSensitiveLog = (obj: CanaryScheduleInput): any => ({
    ...obj,
  });
  export const isa = (o: any): o is CanaryScheduleInput => __isa(o, "CanaryScheduleInput");
}

/**
 * <p>How long, in seconds, for the canary to continue making regular runs according to the schedule in the
 *          <code>Expression</code> value.</p>
 */
export interface CanaryScheduleOutput {
  __type?: "CanaryScheduleOutput";
  /**
   * <p>A rate expression that defines how often the canary is to run. The syntax is
   *          <code>rate(<i>number unit</i>)</code>. <i>unit</i>
   *          can be <code>minute</code>, <code>minutes</code>, or <code>hour</code>. </p>
   *          <p>For example, <code>rate(1 minute)</code> runs the canary once a minute, <code>rate(10 minutes)</code> runs it once every
   *          10 minutes, and <code>rate(1 hour)</code> runs it once every hour.</p>
   *          <p>Specifying <code>rate(0 minute)</code> or <code>rate(0 hour)</code> is a special value
   *          that causes the
   *          canary to run only once when it is started.</p>
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
  export const filterSensitiveLog = (obj: CanaryScheduleOutput): any => ({
    ...obj,
  });
  export const isa = (o: any): o is CanaryScheduleOutput => __isa(o, "CanaryScheduleOutput");
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
  __type?: "CanaryStatus";
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
  export const filterSensitiveLog = (obj: CanaryStatus): any => ({
    ...obj,
  });
  export const isa = (o: any): o is CanaryStatus => __isa(o, "CanaryStatus");
}

/**
 * <p>This structure contains information about when the canary was created and modified.</p>
 */
export interface CanaryTimeline {
  __type?: "CanaryTimeline";
  /**
   * <p>The date and time that the canary's most recent run started.</p>
   */
  LastStarted?: Date;

  /**
   * <p>The date and time the canary was created.</p>
   */
  Created?: Date;

  /**
   * <p>The date and time the canary was most recently modified.</p>
   */
  LastModified?: Date;

  /**
   * <p>The date and time that the canary's most recent run ended.</p>
   */
  LastStopped?: Date;
}

export namespace CanaryTimeline {
  export const filterSensitiveLog = (obj: CanaryTimeline): any => ({
    ...obj,
  });
  export const isa = (o: any): o is CanaryTimeline => __isa(o, "CanaryTimeline");
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
  export const filterSensitiveLog = (obj: ConflictException): any => ({
    ...obj,
  });
  export const isa = (o: any): o is ConflictException => __isa(o, "ConflictException");
}

export interface CreateCanaryRequest {
  __type?: "CreateCanaryRequest";
  /**
   * <p>If this canary is to test an endpoint in a VPC, this structure contains
   *       information about the subnet and security groups of the VPC endpoint.
   *       For more information, see <a href="https://docs.aws.amazon.com/AmazonCloudWatch/latest/monitoring/CloudWatch_Synthetics_Canaries_VPC.html">
   *          Running a Canary in a VPC</a>.</p>
   */
  VpcConfig?: VpcConfigInput;

  /**
   * <p>The location in Amazon S3 where Synthetics stores artifacts from the test runs of this
   *          canary. Artifacts include the log file, screenshots, and HAR files.</p>
   */
  ArtifactS3Location: string | undefined;

  /**
   * <p>The number of days to retain data about successful runs of this canary. If you omit
   *          this field, the default of 31 days is used. The valid range is 1 to 455 days.</p>
   */
  SuccessRetentionPeriodInDays?: number;

  /**
   * <p>A structure that contains the configuration for individual canary runs,
   *          such as timeout value.</p>
   */
  RunConfig?: CanaryRunConfigInput;

  /**
   * <p>The number of days to retain data about failed runs of this canary. If you omit
   *          this field, the default of 31 days is used. The valid range is 1 to 455 days.</p>
   */
  FailureRetentionPeriodInDays?: number;

  /**
   * <p>A structure that contains information about how often the canary is to run and when
   *          these test runs are to stop.</p>
   */
  Schedule: CanaryScheduleInput | undefined;

  /**
   * <p>Specifies the runtime version to use for the canary. Currently, the only valid
   *          value is <code>syn-1.0</code>. For more information about
   *          runtime versions, see <a href="https://docs.aws.amazon.com/AmazonCloudWatch/latest/monitoring/CloudWatch_Synthetics_Canaries_Library.html">
   *             Canary Runtime Versions</a>.</p>
   */
  RuntimeVersion: string | undefined;

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
   * <p>A list of key-value pairs to associate with the canary.
   *          You can associate as many as 50 tags with a canary.</p>
   *          <p>Tags can help you organize and categorize your
   *          resources. You can also use them to scope user permissions, by
   *          granting a user permission to access or change only the resources that have
   *          certain tag values.</p>
   */
  Tags?: { [key: string]: string };

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
  ExecutionRoleArn: string | undefined;

  /**
   * <p>A structure that includes the entry point from which the canary should start
   *          running your script. If the script is stored in
   *          an S3 bucket, the bucket name, key, and version are also included.
   *       </p>
   */
  Code: CanaryCodeInput | undefined;
}

export namespace CreateCanaryRequest {
  export const filterSensitiveLog = (obj: CreateCanaryRequest): any => ({
    ...obj,
  });
  export const isa = (o: any): o is CreateCanaryRequest => __isa(o, "CreateCanaryRequest");
}

export interface CreateCanaryResponse {
  __type?: "CreateCanaryResponse";
  /**
   * <p>The full details about the canary you have created.</p>
   */
  Canary?: Canary;
}

export namespace CreateCanaryResponse {
  export const filterSensitiveLog = (obj: CreateCanaryResponse): any => ({
    ...obj,
  });
  export const isa = (o: any): o is CreateCanaryResponse => __isa(o, "CreateCanaryResponse");
}

export interface DeleteCanaryRequest {
  __type?: "DeleteCanaryRequest";
  /**
   * <p>The name of the canary that you want to delete. To find the names of your canaries, use <a href="https://docs.aws.amazon.com/AmazonSynthetics/latest/APIReference/API_DescribeCanaries.html">DescribeCanaries</a>.</p>
   */
  Name: string | undefined;
}

export namespace DeleteCanaryRequest {
  export const filterSensitiveLog = (obj: DeleteCanaryRequest): any => ({
    ...obj,
  });
  export const isa = (o: any): o is DeleteCanaryRequest => __isa(o, "DeleteCanaryRequest");
}

export interface DeleteCanaryResponse {
  __type?: "DeleteCanaryResponse";
}

export namespace DeleteCanaryResponse {
  export const filterSensitiveLog = (obj: DeleteCanaryResponse): any => ({
    ...obj,
  });
  export const isa = (o: any): o is DeleteCanaryResponse => __isa(o, "DeleteCanaryResponse");
}

export interface DescribeCanariesLastRunRequest {
  __type?: "DescribeCanariesLastRunRequest";
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
  export const filterSensitiveLog = (obj: DescribeCanariesLastRunRequest): any => ({
    ...obj,
  });
  export const isa = (o: any): o is DescribeCanariesLastRunRequest => __isa(o, "DescribeCanariesLastRunRequest");
}

export interface DescribeCanariesLastRunResponse {
  __type?: "DescribeCanariesLastRunResponse";
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
  export const filterSensitiveLog = (obj: DescribeCanariesLastRunResponse): any => ({
    ...obj,
  });
  export const isa = (o: any): o is DescribeCanariesLastRunResponse => __isa(o, "DescribeCanariesLastRunResponse");
}

export interface DescribeCanariesRequest {
  __type?: "DescribeCanariesRequest";
  /**
   * <p>Specify this parameter to limit how many canaries are returned each time you use
   *       the <code>DescribeCanaries</code> operation. If you omit this parameter, the default of 100 is used.</p>
   */
  MaxResults?: number;

  /**
   * <p>A token that indicates that there is more data
   *          available. You can use this token in a subsequent operation to retrieve the next
   *          set of results.</p>
   */
  NextToken?: string;
}

export namespace DescribeCanariesRequest {
  export const filterSensitiveLog = (obj: DescribeCanariesRequest): any => ({
    ...obj,
  });
  export const isa = (o: any): o is DescribeCanariesRequest => __isa(o, "DescribeCanariesRequest");
}

export interface DescribeCanariesResponse {
  __type?: "DescribeCanariesResponse";
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
  export const filterSensitiveLog = (obj: DescribeCanariesResponse): any => ({
    ...obj,
  });
  export const isa = (o: any): o is DescribeCanariesResponse => __isa(o, "DescribeCanariesResponse");
}

export interface DescribeRuntimeVersionsRequest {
  __type?: "DescribeRuntimeVersionsRequest";
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
  export const filterSensitiveLog = (obj: DescribeRuntimeVersionsRequest): any => ({
    ...obj,
  });
  export const isa = (o: any): o is DescribeRuntimeVersionsRequest => __isa(o, "DescribeRuntimeVersionsRequest");
}

export interface DescribeRuntimeVersionsResponse {
  __type?: "DescribeRuntimeVersionsResponse";
  /**
   * <p>A token that indicates that there is more data
   *          available. You can use this token in a subsequent <code>DescribeRuntimeVersions</code> operation to retrieve the next
   *          set of results.</p>
   */
  NextToken?: string;

  /**
   * <p>An array of objects that display the details about each Synthetics canary runtime
   *          version.</p>
   */
  RuntimeVersions?: RuntimeVersion[];
}

export namespace DescribeRuntimeVersionsResponse {
  export const filterSensitiveLog = (obj: DescribeRuntimeVersionsResponse): any => ({
    ...obj,
  });
  export const isa = (o: any): o is DescribeRuntimeVersionsResponse => __isa(o, "DescribeRuntimeVersionsResponse");
}

export interface GetCanaryRequest {
  __type?: "GetCanaryRequest";
  /**
   * <p>The name of the canary that you want details for.</p>
   */
  Name: string | undefined;
}

export namespace GetCanaryRequest {
  export const filterSensitiveLog = (obj: GetCanaryRequest): any => ({
    ...obj,
  });
  export const isa = (o: any): o is GetCanaryRequest => __isa(o, "GetCanaryRequest");
}

export interface GetCanaryResponse {
  __type?: "GetCanaryResponse";
  /**
   * <p>A strucure that contains the full information about the canary.</p>
   */
  Canary?: Canary;
}

export namespace GetCanaryResponse {
  export const filterSensitiveLog = (obj: GetCanaryResponse): any => ({
    ...obj,
  });
  export const isa = (o: any): o is GetCanaryResponse => __isa(o, "GetCanaryResponse");
}

export interface GetCanaryRunsRequest {
  __type?: "GetCanaryRunsRequest";
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
  export const filterSensitiveLog = (obj: GetCanaryRunsRequest): any => ({
    ...obj,
  });
  export const isa = (o: any): o is GetCanaryRunsRequest => __isa(o, "GetCanaryRunsRequest");
}

export interface GetCanaryRunsResponse {
  __type?: "GetCanaryRunsResponse";
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
  export const filterSensitiveLog = (obj: GetCanaryRunsResponse): any => ({
    ...obj,
  });
  export const isa = (o: any): o is GetCanaryRunsResponse => __isa(o, "GetCanaryRunsResponse");
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
  export const filterSensitiveLog = (obj: InternalServerException): any => ({
    ...obj,
  });
  export const isa = (o: any): o is InternalServerException => __isa(o, "InternalServerException");
}

export interface ListTagsForResourceRequest {
  __type?: "ListTagsForResourceRequest";
  /**
   * <p>The ARN of the canary that you want to view tags for.</p>
   *          <p>The ARN format of a canary is
   *                <code>arn:aws:synthetics:<i>Region</i>:<i>account-id</i>:canary:<i>canary-name</i>
   *             </code>.</p>
   */
  ResourceArn: string | undefined;
}

export namespace ListTagsForResourceRequest {
  export const filterSensitiveLog = (obj: ListTagsForResourceRequest): any => ({
    ...obj,
  });
  export const isa = (o: any): o is ListTagsForResourceRequest => __isa(o, "ListTagsForResourceRequest");
}

export interface ListTagsForResourceResponse {
  __type?: "ListTagsForResourceResponse";
  /**
   * <p>The list of tag keys and values associated with the canary that you specified.</p>
   */
  Tags?: { [key: string]: string };
}

export namespace ListTagsForResourceResponse {
  export const filterSensitiveLog = (obj: ListTagsForResourceResponse): any => ({
    ...obj,
  });
  export const isa = (o: any): o is ListTagsForResourceResponse => __isa(o, "ListTagsForResourceResponse");
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
  export const filterSensitiveLog = (obj: ResourceNotFoundException): any => ({
    ...obj,
  });
  export const isa = (o: any): o is ResourceNotFoundException => __isa(o, "ResourceNotFoundException");
}

/**
 * <p>This structure contains information about one canary runtime version. For more information about
 *          runtime versions, see <a href="https://docs.aws.amazon.com/AmazonCloudWatch/latest/monitoring/CloudWatch_Synthetics_Canaries_Library.html">
 *             Canary Runtime Versions</a>.</p>
 */
export interface RuntimeVersion {
  __type?: "RuntimeVersion";
  /**
   * <p>The name of the runtime version. Currently, the only valid
   *          value is <code>syn-1.0</code>. </p>
   *          <p>Specifies the runtime version to use for the canary. Currently, the only valid
   *          value is <code>syn-1.0</code>.</p>
   */
  VersionName?: string;

  /**
   * <p>The date that the runtime version was released.</p>
   */
  ReleaseDate?: Date;

  /**
   * <p>A description of the runtime version, created by Amazon.</p>
   */
  Description?: string;

  /**
   * <p>If this runtime version is deprecated, this value is the date of deprecation.</p>
   */
  DeprecationDate?: Date;
}

export namespace RuntimeVersion {
  export const filterSensitiveLog = (obj: RuntimeVersion): any => ({
    ...obj,
  });
  export const isa = (o: any): o is RuntimeVersion => __isa(o, "RuntimeVersion");
}

export interface StartCanaryRequest {
  __type?: "StartCanaryRequest";
  /**
   * <p>The name of the canary that you want to run. To find
   *          canary names, use <a href="https://docs.aws.amazon.com/AmazonSynthetics/latest/APIReference/API_DescribeCanaries.html">DescribeCanaries</a>.</p>
   */
  Name: string | undefined;
}

export namespace StartCanaryRequest {
  export const filterSensitiveLog = (obj: StartCanaryRequest): any => ({
    ...obj,
  });
  export const isa = (o: any): o is StartCanaryRequest => __isa(o, "StartCanaryRequest");
}

export interface StartCanaryResponse {
  __type?: "StartCanaryResponse";
}

export namespace StartCanaryResponse {
  export const filterSensitiveLog = (obj: StartCanaryResponse): any => ({
    ...obj,
  });
  export const isa = (o: any): o is StartCanaryResponse => __isa(o, "StartCanaryResponse");
}

export interface StopCanaryRequest {
  __type?: "StopCanaryRequest";
  /**
   * <p>The name of the canary that you want to stop. To find the names of your
   *          canaries, use <a href="https://docs.aws.amazon.com/AmazonSynthetics/latest/APIReference/API_DescribeCanaries.html">DescribeCanaries</a>.</p>
   */
  Name: string | undefined;
}

export namespace StopCanaryRequest {
  export const filterSensitiveLog = (obj: StopCanaryRequest): any => ({
    ...obj,
  });
  export const isa = (o: any): o is StopCanaryRequest => __isa(o, "StopCanaryRequest");
}

export interface StopCanaryResponse {
  __type?: "StopCanaryResponse";
}

export namespace StopCanaryResponse {
  export const filterSensitiveLog = (obj: StopCanaryResponse): any => ({
    ...obj,
  });
  export const isa = (o: any): o is StopCanaryResponse => __isa(o, "StopCanaryResponse");
}

export interface TagResourceRequest {
  __type?: "TagResourceRequest";
  /**
   * <p>The list of key-value pairs to associate with the canary.</p>
   */
  Tags: { [key: string]: string } | undefined;

  /**
   * <p>The ARN of the canary that you're adding tags to.</p>
   *          <p>The ARN format of a canary is
   *                <code>arn:aws:synthetics:<i>Region</i>:<i>account-id</i>:canary:<i>canary-name</i>
   *             </code>.</p>
   */
  ResourceArn: string | undefined;
}

export namespace TagResourceRequest {
  export const filterSensitiveLog = (obj: TagResourceRequest): any => ({
    ...obj,
  });
  export const isa = (o: any): o is TagResourceRequest => __isa(o, "TagResourceRequest");
}

export interface TagResourceResponse {
  __type?: "TagResourceResponse";
}

export namespace TagResourceResponse {
  export const filterSensitiveLog = (obj: TagResourceResponse): any => ({
    ...obj,
  });
  export const isa = (o: any): o is TagResourceResponse => __isa(o, "TagResourceResponse");
}

export interface UntagResourceRequest {
  __type?: "UntagResourceRequest";
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
  export const filterSensitiveLog = (obj: UntagResourceRequest): any => ({
    ...obj,
  });
  export const isa = (o: any): o is UntagResourceRequest => __isa(o, "UntagResourceRequest");
}

export interface UntagResourceResponse {
  __type?: "UntagResourceResponse";
}

export namespace UntagResourceResponse {
  export const filterSensitiveLog = (obj: UntagResourceResponse): any => ({
    ...obj,
  });
  export const isa = (o: any): o is UntagResourceResponse => __isa(o, "UntagResourceResponse");
}

export interface UpdateCanaryRequest {
  __type?: "UpdateCanaryRequest";
  /**
   * <p>The number of days to retain data about successful runs of this canary.</p>
   */
  SuccessRetentionPeriodInDays?: number;

  /**
   * <p>A structure that includes the entry point from which the canary should start
   *          running your script. If the script is stored in
   *          an S3 bucket, the bucket name, key, and version are also included.
   *       </p>
   */
  Code?: CanaryCodeInput;

  /**
   * <p>The name of the canary that you want to update. To find the names of your
   *          canaries, use <a href="https://docs.aws.amazon.com/AmazonSynthetics/latest/APIReference/API_DescribeCanaries.html">DescribeCanaries</a>.</p>
   *          <p>You cannot change the name of a canary that has already been created.</p>
   */
  Name: string | undefined;

  /**
   * <p>A structure that contains the timeout value that is used for each individual run of the
   *          canary.</p>
   */
  RunConfig?: CanaryRunConfigInput;

  /**
   * <p>The number of days to retain data about failed runs of this canary.</p>
   */
  FailureRetentionPeriodInDays?: number;

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
   * <p>Specifies the runtime version to use for the canary. Currently, the only valid
   *          value is <code>syn-1.0</code>. For more information about
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
   * <p>If this canary is to test an endpoint in a VPC, this structure contains
   *          information about the subnet and security groups of the VPC endpoint.
   *          For more information, see <a href="https://docs.aws.amazon.com/AmazonCloudWatch/latest/monitoring/CloudWatch_Synthetics_Canaries_VPC.html">
   *             Running a Canary in a VPC</a>.</p>
   */
  VpcConfig?: VpcConfigInput;
}

export namespace UpdateCanaryRequest {
  export const filterSensitiveLog = (obj: UpdateCanaryRequest): any => ({
    ...obj,
  });
  export const isa = (o: any): o is UpdateCanaryRequest => __isa(o, "UpdateCanaryRequest");
}

export interface UpdateCanaryResponse {
  __type?: "UpdateCanaryResponse";
}

export namespace UpdateCanaryResponse {
  export const filterSensitiveLog = (obj: UpdateCanaryResponse): any => ({
    ...obj,
  });
  export const isa = (o: any): o is UpdateCanaryResponse => __isa(o, "UpdateCanaryResponse");
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
  export const filterSensitiveLog = (obj: ValidationException): any => ({
    ...obj,
  });
  export const isa = (o: any): o is ValidationException => __isa(o, "ValidationException");
}

/**
 * <p>If this canary is to test an endpoint in a VPC, this structure contains
 *          information about the subnets and security groups of the VPC endpoint.
 *          For more information, see <a href="https://docs.aws.amazon.com/AmazonCloudWatch/latest/monitoring/CloudWatch_Synthetics_Canaries_VPC.html">
 *             Running a Canary in a VPC</a>.</p>
 */
export interface VpcConfigInput {
  __type?: "VpcConfigInput";
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
  export const filterSensitiveLog = (obj: VpcConfigInput): any => ({
    ...obj,
  });
  export const isa = (o: any): o is VpcConfigInput => __isa(o, "VpcConfigInput");
}

/**
 * <p>If this canary is to test an endpoint in a VPC, this structure contains
 *          information about the subnets and security groups of the VPC endpoint.
 *          For more information, see <a href="https://docs.aws.amazon.com/AmazonCloudWatch/latest/monitoring/CloudWatch_Synthetics_Canaries_VPC.html">
 *             Running a Canary in a VPC</a>.</p>
 */
export interface VpcConfigOutput {
  __type?: "VpcConfigOutput";
  /**
   * <p>The IDs of the subnets where this canary is to run.</p>
   */
  SubnetIds?: string[];

  /**
   * <p>The IDs of the security groups for this canary.</p>
   */
  SecurityGroupIds?: string[];

  /**
   * <p>The IDs of the VPC where this canary is to run.</p>
   */
  VpcId?: string;
}

export namespace VpcConfigOutput {
  export const filterSensitiveLog = (obj: VpcConfigOutput): any => ({
    ...obj,
  });
  export const isa = (o: any): o is VpcConfigOutput => __isa(o, "VpcConfigOutput");
}
