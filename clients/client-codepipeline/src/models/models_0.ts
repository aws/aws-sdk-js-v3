// smithy-typescript generated code
import { ExceptionOptionType as __ExceptionOptionType, SENSITIVE_STRING } from "@smithy/smithy-client";

import { CodePipelineServiceException as __BaseException } from "./CodePipelineServiceException";

/**
 * <p>Represents the input of an AcknowledgeJob action.</p>
 * @public
 */
export interface AcknowledgeJobInput {
  /**
   * <p>The unique system-generated ID of the job for which you want to confirm
   *             receipt.</p>
   * @public
   */
  jobId: string | undefined;

  /**
   * <p>A system-generated random number that CodePipeline uses to ensure that the
   *             job is being worked on by only one job worker. Get this number from the response of the
   *                 <a>PollForJobs</a> request that returned this job.</p>
   * @public
   */
  nonce: string | undefined;
}

/**
 * @public
 * @enum
 */
export const JobStatus = {
  Created: "Created",
  Dispatched: "Dispatched",
  Failed: "Failed",
  InProgress: "InProgress",
  Queued: "Queued",
  Succeeded: "Succeeded",
  TimedOut: "TimedOut",
} as const;

/**
 * @public
 */
export type JobStatus = (typeof JobStatus)[keyof typeof JobStatus];

/**
 * <p>Represents the output of an AcknowledgeJob action.</p>
 * @public
 */
export interface AcknowledgeJobOutput {
  /**
   * <p>Whether the job worker has received the specified job.</p>
   * @public
   */
  status?: JobStatus | undefined;
}

/**
 * <p>The nonce was specified in an invalid format.</p>
 * @public
 */
export class InvalidNonceException extends __BaseException {
  readonly name: "InvalidNonceException" = "InvalidNonceException";
  readonly $fault: "client" = "client";
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<InvalidNonceException, __BaseException>) {
    super({
      name: "InvalidNonceException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, InvalidNonceException.prototype);
  }
}

/**
 * <p>The job was specified in an invalid format or cannot be found.</p>
 * @public
 */
export class JobNotFoundException extends __BaseException {
  readonly name: "JobNotFoundException" = "JobNotFoundException";
  readonly $fault: "client" = "client";
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<JobNotFoundException, __BaseException>) {
    super({
      name: "JobNotFoundException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, JobNotFoundException.prototype);
  }
}

/**
 * <p>The validation was specified in an invalid format.</p>
 * @public
 */
export class ValidationException extends __BaseException {
  readonly name: "ValidationException" = "ValidationException";
  readonly $fault: "client" = "client";
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
  }
}

/**
 * <p>Represents the input of an AcknowledgeThirdPartyJob action.</p>
 * @public
 */
export interface AcknowledgeThirdPartyJobInput {
  /**
   * <p>The unique system-generated ID of the job.</p>
   * @public
   */
  jobId: string | undefined;

  /**
   * <p>A system-generated random number that CodePipeline uses to ensure that the
   *             job is being worked on by only one job worker. Get this number from the response to a
   *                 <a>GetThirdPartyJobDetails</a> request.</p>
   * @public
   */
  nonce: string | undefined;

  /**
   * <p>The clientToken portion of the clientId and clientToken pair used to verify that
   *             the calling entity is allowed access to the job and its details.</p>
   * @public
   */
  clientToken: string | undefined;
}

/**
 * <p>Represents the output of an AcknowledgeThirdPartyJob action.</p>
 * @public
 */
export interface AcknowledgeThirdPartyJobOutput {
  /**
   * <p>The status information for the third party job, if any.</p>
   * @public
   */
  status?: JobStatus | undefined;
}

/**
 * <p>The client token was specified in an invalid format</p>
 * @public
 */
export class InvalidClientTokenException extends __BaseException {
  readonly name: "InvalidClientTokenException" = "InvalidClientTokenException";
  readonly $fault: "client" = "client";
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<InvalidClientTokenException, __BaseException>) {
    super({
      name: "InvalidClientTokenException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, InvalidClientTokenException.prototype);
  }
}

/**
 * @public
 * @enum
 */
export const ActionCategory = {
  Approval: "Approval",
  Build: "Build",
  Compute: "Compute",
  Deploy: "Deploy",
  Invoke: "Invoke",
  Source: "Source",
  Test: "Test",
} as const;

/**
 * @public
 */
export type ActionCategory = (typeof ActionCategory)[keyof typeof ActionCategory];

/**
 * <p>Represents information about an action configuration.</p>
 * @public
 */
export interface ActionConfiguration {
  /**
   * <p>The configuration data for the action.</p>
   * @public
   */
  configuration?: Record<string, string> | undefined;
}

/**
 * @public
 * @enum
 */
export const ActionConfigurationPropertyType = {
  Boolean: "Boolean",
  Number: "Number",
  String: "String",
} as const;

/**
 * @public
 */
export type ActionConfigurationPropertyType =
  (typeof ActionConfigurationPropertyType)[keyof typeof ActionConfigurationPropertyType];

/**
 * <p>Represents information about an action configuration property.</p>
 * @public
 */
export interface ActionConfigurationProperty {
  /**
   * <p>The name of the action configuration property.</p>
   * @public
   */
  name: string | undefined;

  /**
   * <p>Whether the configuration property is a required value.</p>
   * @public
   */
  required: boolean | undefined;

  /**
   * <p>Whether the configuration property is a key.</p>
   * @public
   */
  key: boolean | undefined;

  /**
   * <p>Whether the configuration property is secret. Secrets are hidden from all calls
   *             except for <code>GetJobDetails</code>, <code>GetThirdPartyJobDetails</code>,
   *                 <code>PollForJobs</code>, and <code>PollForThirdPartyJobs</code>.</p>
   *          <p>When updating a pipeline, passing * * * * * without changing any other values of
   *             the action preserves the previous value of the secret.</p>
   * @public
   */
  secret: boolean | undefined;

  /**
   * <p>Indicates that the property is used with <code>PollForJobs</code>. When creating a
   *             custom action, an action can have up to one queryable property. If it has one, that
   *             property must be both required and not secret.</p>
   *          <p>If you create a pipeline with a custom action type, and that custom action contains
   *             a queryable property, the value for that configuration property is subject to other
   *             restrictions. The value must be less than or equal to twenty (20) characters. The value
   *             can contain only alphanumeric characters, underscores, and hyphens.</p>
   * @public
   */
  queryable?: boolean | undefined;

  /**
   * <p>The description of the action configuration property that is displayed to
   *             users.</p>
   * @public
   */
  description?: string | undefined;

  /**
   * <p>The type of the configuration property.</p>
   * @public
   */
  type?: ActionConfigurationPropertyType | undefined;
}

/**
 * <p>Represents the context of an action in the stage of a pipeline to a job
 *             worker.</p>
 * @public
 */
export interface ActionContext {
  /**
   * <p>The name of the action in the context of a job.</p>
   * @public
   */
  name?: string | undefined;

  /**
   * <p>The system-generated unique ID that corresponds to an action's execution.</p>
   * @public
   */
  actionExecutionId?: string | undefined;
}

/**
 * @public
 * @enum
 */
export const ActionOwner = {
  AWS: "AWS",
  Custom: "Custom",
  ThirdParty: "ThirdParty",
} as const;

/**
 * @public
 */
export type ActionOwner = (typeof ActionOwner)[keyof typeof ActionOwner];

/**
 * <p>Represents information about an action type.</p>
 * @public
 */
export interface ActionTypeId {
  /**
   * <p>A category defines what kind of action can be taken in the stage, and constrains
   *             the provider type for the action. Valid categories are limited to one of the following
   *             values. </p>
   *          <ul>
   *             <li>
   *                <p>Source</p>
   *             </li>
   *             <li>
   *                <p>Build</p>
   *             </li>
   *             <li>
   *                <p>Test</p>
   *             </li>
   *             <li>
   *                <p>Deploy</p>
   *             </li>
   *             <li>
   *                <p>Invoke</p>
   *             </li>
   *             <li>
   *                <p>Approval</p>
   *             </li>
   *             <li>
   *                <p>Compute</p>
   *             </li>
   *          </ul>
   * @public
   */
  category: ActionCategory | undefined;

  /**
   * <p>The creator of the action being called. There are three valid values for the
   *                 <code>Owner</code> field in the action category section within your pipeline
   *             structure: <code>AWS</code>, <code>ThirdParty</code>, and <code>Custom</code>. For more
   *             information, see <a href="https://docs.aws.amazon.com/codepipeline/latest/userguide/reference-pipeline-structure.html#actions-valid-providers">Valid Action Types and Providers in CodePipeline</a>.</p>
   * @public
   */
  owner: ActionOwner | undefined;

  /**
   * <p>The provider of the service being called by the action. Valid providers are
   *             determined by the action category. For example, an action in the Deploy category type
   *             might have a provider of CodeDeploy, which would be specified as
   *             <code>CodeDeploy</code>. For more information, see <a href="https://docs.aws.amazon.com/codepipeline/latest/userguide/reference-pipeline-structure.html#actions-valid-providers">Valid Action Types and Providers in CodePipeline</a>.</p>
   * @public
   */
  provider: string | undefined;

  /**
   * <p>A string that describes the action version.</p>
   * @public
   */
  version: string | undefined;
}

/**
 * @public
 * @enum
 */
export const EnvironmentVariableType = {
  PLAINTEXT: "PLAINTEXT",
  SECRETS_MANAGER: "SECRETS_MANAGER",
} as const;

/**
 * @public
 */
export type EnvironmentVariableType = (typeof EnvironmentVariableType)[keyof typeof EnvironmentVariableType];

/**
 * <p>The environment variables for the action.</p>
 * @public
 */
export interface EnvironmentVariable {
  /**
   * <p>The environment variable name in the key-value pair.</p>
   * @public
   */
  name: string | undefined;

  /**
   * <p>The environment variable value in the key-value pair.</p>
   * @public
   */
  value: string | undefined;

  /**
   * <p>Specifies the type of use for the environment variable value. The value can be either
   *             <code>PLAINTEXT</code> or <code>SECRETS_MANAGER</code>. If the value is <code>SECRETS_MANAGER</code>, provide the Secrets
   *             reference in the EnvironmentVariable value.</p>
   * @public
   */
  type?: EnvironmentVariableType | undefined;
}

/**
 * <p>Represents information about an artifact to be worked on, such as a test or build
 *             artifact.</p>
 * @public
 */
export interface InputArtifact {
  /**
   * <p>The name of the artifact to be worked on (for example, "My App").</p>
   *          <p>Artifacts are the files that are worked on by actions in the pipeline. See the
   *             action configuration for each action for details about artifact parameters. For example,
   *             the S3 source action input artifact is a file name (or file path), and the files are
   *             generally provided as a ZIP file. Example artifact name: SampleApp_Windows.zip</p>
   *          <p>The input artifact of an action must exactly match the output artifact declared in
   *             a preceding action, but the input artifact does not have to be the next action in strict
   *             sequence from the action that provided the output artifact. Actions in parallel can
   *             declare different output artifacts, which are in turn consumed by different following
   *             actions.</p>
   * @public
   */
  name: string | undefined;
}

/**
 * <p>Represents information about the output of an action.</p>
 * @public
 */
export interface OutputArtifact {
  /**
   * <p>The name of the output of an artifact, such as "My App".</p>
   *          <p>The input artifact of an action must exactly match the output artifact declared in
   *             a preceding action, but the input artifact does not have to be the next action in strict
   *             sequence from the action that provided the output artifact. Actions in parallel can
   *             declare different output artifacts, which are in turn consumed by different following
   *             actions.</p>
   *          <p>Output artifact names must be unique within a pipeline.</p>
   * @public
   */
  name: string | undefined;

  /**
   * <p>The files that you want to associate with the output artifact that will be exported
   *             from the compute action.</p>
   * @public
   */
  files?: string[] | undefined;
}

/**
 * <p>Represents information about an action declaration.</p>
 * @public
 */
export interface ActionDeclaration {
  /**
   * <p>The action declaration's name.</p>
   * @public
   */
  name: string | undefined;

  /**
   * <p>Specifies the action type and the provider of the action.</p>
   * @public
   */
  actionTypeId: ActionTypeId | undefined;

  /**
   * <p>The order in which actions are run.</p>
   * @public
   */
  runOrder?: number | undefined;

  /**
   * <p>The action's configuration. These are key-value pairs that specify input values for
   *             an action. For more information, see <a href="https://docs.aws.amazon.com/codepipeline/latest/userguide/reference-pipeline-structure.html#action-requirements">Action Structure Requirements in CodePipeline</a>. For the list of
   *             configuration properties for the CloudFormation action type in CodePipeline, see <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/continuous-delivery-codepipeline-action-reference.html">Configuration Properties Reference</a> in the <i>CloudFormation
   *                 User Guide</i>. For template snippets with examples, see <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/continuous-delivery-codepipeline-parameter-override-functions.html">Using Parameter Override Functions with CodePipeline Pipelines</a> in the
   *                     <i>CloudFormation User Guide</i>.</p>
   *          <p>The values can be represented in either JSON or YAML format. For example, the JSON
   *             configuration item format is as follows: </p>
   *          <p>
   *             <i>JSON:</i>
   *          </p>
   *          <p>
   *             <code>"Configuration" : \{ Key : Value \},</code>
   *          </p>
   * @public
   */
  configuration?: Record<string, string> | undefined;

  /**
   * <p>The shell commands to run with your compute action in CodePipeline. All commands
   *             are supported except multi-line formats. While CodeBuild logs and permissions
   *             are used, you do not need to create any resources in CodeBuild.</p>
   *          <note>
   *             <p>Using compute time for this action will incur separate charges in CodeBuild.</p>
   *          </note>
   * @public
   */
  commands?: string[] | undefined;

  /**
   * <p>The name or ID of the result of the action declaration, such as a test or build
   *             artifact.</p>
   * @public
   */
  outputArtifacts?: OutputArtifact[] | undefined;

  /**
   * <p>The name or ID of the artifact consumed by the action, such as a test or build
   *             artifact.</p>
   * @public
   */
  inputArtifacts?: InputArtifact[] | undefined;

  /**
   * <p>The list of variables that are to be exported from the compute action. This is
   *             specifically CodeBuild environment variables as used for that action.</p>
   * @public
   */
  outputVariables?: string[] | undefined;

  /**
   * <p>The ARN of the IAM service role that performs the declared action. This is assumed
   *             through the roleArn for the pipeline.</p>
   * @public
   */
  roleArn?: string | undefined;

  /**
   * <p>The action declaration's Amazon Web Services Region, such as us-east-1.</p>
   * @public
   */
  region?: string | undefined;

  /**
   * <p>The variable namespace associated with the action. All variables produced as output by
   *             this action fall under this namespace.</p>
   * @public
   */
  namespace?: string | undefined;

  /**
   * <p>A timeout duration in minutes that can be applied against the ActionType’s default
   *             timeout value specified in <a href="https://docs.aws.amazon.com/codepipeline/latest/userguide/limits.html">Quotas for CodePipeline
   *             </a>. This attribute is available only to the manual approval ActionType.</p>
   * @public
   */
  timeoutInMinutes?: number | undefined;

  /**
   * <p>The environment variables for the action.</p>
   * @public
   */
  environmentVariables?: EnvironmentVariable[] | undefined;
}

/**
 * <p>Represents information about an error in CodePipeline.</p>
 * @public
 */
export interface ErrorDetails {
  /**
   * <p>The system ID or number code of the error.</p>
   * @public
   */
  code?: string | undefined;

  /**
   * <p>The text of the error message.</p>
   * @public
   */
  message?: string | undefined;
}

/**
 * @public
 * @enum
 */
export const ActionExecutionStatus = {
  Abandoned: "Abandoned",
  Failed: "Failed",
  InProgress: "InProgress",
  Succeeded: "Succeeded",
} as const;

/**
 * @public
 */
export type ActionExecutionStatus = (typeof ActionExecutionStatus)[keyof typeof ActionExecutionStatus];

/**
 * <p>Represents information about the run of an action.</p>
 * @public
 */
export interface ActionExecution {
  /**
   * <p>ID of the workflow action execution in the current stage. Use the <a>GetPipelineState</a> action to retrieve the current action execution details
   *             of the current stage.</p>
   *          <note>
   *             <p>For older executions, this field might be empty. The action execution ID is
   *                 available for executions run on or after March 2020.</p>
   *          </note>
   * @public
   */
  actionExecutionId?: string | undefined;

  /**
   * <p>The status of the action, or for a completed action, the last status of the
   *             action.</p>
   * @public
   */
  status?: ActionExecutionStatus | undefined;

  /**
   * <p>A summary of the run of the action.</p>
   * @public
   */
  summary?: string | undefined;

  /**
   * <p>The last status change of the action.</p>
   * @public
   */
  lastStatusChange?: Date | undefined;

  /**
   * <p>The system-generated token used to identify a unique approval request. The token
   *             for each open approval request can be obtained using the <code>GetPipelineState</code>
   *             command. It is used to validate that the approval request corresponding to this token is
   *             still valid.</p>
   * @public
   */
  token?: string | undefined;

  /**
   * <p>The ARN of the user who last changed the pipeline.</p>
   * @public
   */
  lastUpdatedBy?: string | undefined;

  /**
   * <p>The external ID of the run of the action.</p>
   * @public
   */
  externalExecutionId?: string | undefined;

  /**
   * <p>The URL of a resource external to Amazon Web Services that is used when running the
   *             action (for example, an external repository URL).</p>
   * @public
   */
  externalExecutionUrl?: string | undefined;

  /**
   * <p>A percentage of completeness of the action as it runs.</p>
   * @public
   */
  percentComplete?: number | undefined;

  /**
   * <p>The details of an error returned by a URL external to Amazon Web Services.</p>
   * @public
   */
  errorDetails?: ErrorDetails | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the log stream for the action compute.</p>
   * @public
   */
  logStreamARN?: string | undefined;
}

/**
 * <p>The Amazon S3 artifact location for an action's artifacts.</p>
 * @public
 */
export interface S3Location {
  /**
   * <p>The Amazon S3 artifact bucket for an action's artifacts.</p>
   * @public
   */
  bucket?: string | undefined;

  /**
   * <p>The artifact name.</p>
   * @public
   */
  key?: string | undefined;
}

/**
 * <p>Artifact details for the action execution, such as the artifact location.</p>
 * @public
 */
export interface ArtifactDetail {
  /**
   * <p>The artifact object name for the action execution.</p>
   * @public
   */
  name?: string | undefined;

  /**
   * <p>The Amazon S3 artifact location for the action execution.</p>
   * @public
   */
  s3location?: S3Location | undefined;
}

/**
 * <p>Input information used for an action execution.</p>
 * @public
 */
export interface ActionExecutionInput {
  /**
   * <p>Represents information about an action type.</p>
   * @public
   */
  actionTypeId?: ActionTypeId | undefined;

  /**
   * <p>Configuration data for an action execution.</p>
   * @public
   */
  configuration?: Record<string, string> | undefined;

  /**
   * <p>Configuration data for an action execution with all variable references replaced with
   *             their real values for the execution.</p>
   * @public
   */
  resolvedConfiguration?: Record<string, string> | undefined;

  /**
   * <p>The ARN of the IAM service role that performs the declared action. This is assumed
   *             through the roleArn for the pipeline. </p>
   * @public
   */
  roleArn?: string | undefined;

  /**
   * <p>The Amazon Web Services Region for the action, such as us-east-1.</p>
   * @public
   */
  region?: string | undefined;

  /**
   * <p>Details of input artifacts of the action that correspond to the action
   *             execution.</p>
   * @public
   */
  inputArtifacts?: ArtifactDetail[] | undefined;

  /**
   * <p>The variable namespace associated with the action. All variables produced as output by
   *             this action fall under this namespace.</p>
   * @public
   */
  namespace?: string | undefined;
}

/**
 * <p>Execution result information, such as the external execution ID.</p>
 * @public
 */
export interface ActionExecutionResult {
  /**
   * <p>The action provider's external ID for the action execution.</p>
   * @public
   */
  externalExecutionId?: string | undefined;

  /**
   * <p>The action provider's summary for the action execution.</p>
   * @public
   */
  externalExecutionSummary?: string | undefined;

  /**
   * <p>The deepest external link to the external resource (for example, a repository URL or
   *             deployment endpoint) that is used when running the action.</p>
   * @public
   */
  externalExecutionUrl?: string | undefined;

  /**
   * <p>Represents information about an error in CodePipeline.</p>
   * @public
   */
  errorDetails?: ErrorDetails | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the log stream for the action compute.</p>
   * @public
   */
  logStreamARN?: string | undefined;
}

/**
 * <p>Output details listed for an action execution, such as the action execution
 *             result.</p>
 * @public
 */
export interface ActionExecutionOutput {
  /**
   * <p>Details of output artifacts of the action that correspond to the action
   *             execution.</p>
   * @public
   */
  outputArtifacts?: ArtifactDetail[] | undefined;

  /**
   * <p>Execution result information listed in the output details for an action
   *             execution.</p>
   * @public
   */
  executionResult?: ActionExecutionResult | undefined;

  /**
   * <p>The outputVariables field shows the key-value pairs that were output as part of that
   *             execution.</p>
   * @public
   */
  outputVariables?: Record<string, string> | undefined;
}

/**
 * <p>Returns information about an execution of an action, including the action execution
 *             ID, and the name, version, and timing of the action. </p>
 * @public
 */
export interface ActionExecutionDetail {
  /**
   * <p>The pipeline execution ID for the action execution.</p>
   * @public
   */
  pipelineExecutionId?: string | undefined;

  /**
   * <p>The action execution ID.</p>
   * @public
   */
  actionExecutionId?: string | undefined;

  /**
   * <p>The version of the pipeline where the action was run.</p>
   * @public
   */
  pipelineVersion?: number | undefined;

  /**
   * <p>The name of the stage that contains the action.</p>
   * @public
   */
  stageName?: string | undefined;

  /**
   * <p>The name of the action.</p>
   * @public
   */
  actionName?: string | undefined;

  /**
   * <p>The start time of the action execution.</p>
   * @public
   */
  startTime?: Date | undefined;

  /**
   * <p>The last update time of the action execution.</p>
   * @public
   */
  lastUpdateTime?: Date | undefined;

  /**
   * <p>The ARN of the user who changed the pipeline execution details.</p>
   * @public
   */
  updatedBy?: string | undefined;

  /**
   * <p> The status of the action execution. Status categories are <code>InProgress</code>,
   *                 <code>Succeeded</code>, and <code>Failed</code>.</p>
   * @public
   */
  status?: ActionExecutionStatus | undefined;

  /**
   * <p>Input details for the action execution, such as role ARN, Region, and input
   *             artifacts.</p>
   * @public
   */
  input?: ActionExecutionInput | undefined;

  /**
   * <p>Output details for the action execution, such as the action execution result.</p>
   * @public
   */
  output?: ActionExecutionOutput | undefined;
}

/**
 * @public
 * @enum
 */
export const StartTimeRange = {
  All: "All",
  Latest: "Latest",
} as const;

/**
 * @public
 */
export type StartTimeRange = (typeof StartTimeRange)[keyof typeof StartTimeRange];

/**
 * <p>The field that specifies to filter on the latest execution in the
 *             pipeline.</p>
 *          <note>
 *             <p>Filtering on the latest execution is available for executions run on or after
 *                 February 08, 2024.</p>
 *          </note>
 * @public
 */
export interface LatestInPipelineExecutionFilter {
  /**
   * <p>The execution ID for the latest execution in the pipeline.</p>
   * @public
   */
  pipelineExecutionId: string | undefined;

  /**
   * <p>The start time to filter on for the latest execution in the pipeline. Valid
   *             options:</p>
   *          <ul>
   *             <li>
   *                <p>All</p>
   *             </li>
   *             <li>
   *                <p>Latest</p>
   *             </li>
   *          </ul>
   * @public
   */
  startTimeRange: StartTimeRange | undefined;
}

/**
 * <p>Filter values for the action execution.</p>
 * @public
 */
export interface ActionExecutionFilter {
  /**
   * <p>The pipeline execution ID used to filter action execution history.</p>
   * @public
   */
  pipelineExecutionId?: string | undefined;

  /**
   * <p>The latest execution in the pipeline.</p>
   *          <note>
   *             <p>Filtering on the latest execution is available for executions run on or after
   *                 February 08, 2024.</p>
   *          </note>
   * @public
   */
  latestInPipelineExecution?: LatestInPipelineExecutionFilter | undefined;
}

/**
 * <p>The specified action cannot be found.</p>
 * @public
 */
export class ActionNotFoundException extends __BaseException {
  readonly name: "ActionNotFoundException" = "ActionNotFoundException";
  readonly $fault: "client" = "client";
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<ActionNotFoundException, __BaseException>) {
    super({
      name: "ActionNotFoundException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, ActionNotFoundException.prototype);
  }
}

/**
 * <p>Represents information about the version (or revision) of an action.</p>
 * @public
 */
export interface ActionRevision {
  /**
   * <p>The system-generated unique ID that identifies the revision number of the
   *             action.</p>
   * @public
   */
  revisionId: string | undefined;

  /**
   * <p>The unique identifier of the change that set the state to this revision (for
   *             example, a deployment ID or timestamp).</p>
   * @public
   */
  revisionChangeId: string | undefined;

  /**
   * <p>The date and time when the most recent version of the action was created, in
   *             timestamp format.</p>
   * @public
   */
  created: Date | undefined;
}

/**
 * <p>Represents information about the state of an action.</p>
 * @public
 */
export interface ActionState {
  /**
   * <p>The name of the action.</p>
   * @public
   */
  actionName?: string | undefined;

  /**
   * <p>Represents information about the version (or revision) of an action.</p>
   * @public
   */
  currentRevision?: ActionRevision | undefined;

  /**
   * <p>Represents information about the run of an action.</p>
   * @public
   */
  latestExecution?: ActionExecution | undefined;

  /**
   * <p>A URL link for more information about the state of the action, such as a deployment
   *             group details page.</p>
   * @public
   */
  entityUrl?: string | undefined;

  /**
   * <p>A URL link for more information about the revision, such as a commit details
   *             page.</p>
   * @public
   */
  revisionUrl?: string | undefined;
}

/**
 * <p>Returns information about the details of an artifact.</p>
 * @public
 */
export interface ArtifactDetails {
  /**
   * <p>The minimum number of artifacts allowed for the action type.</p>
   * @public
   */
  minimumCount: number | undefined;

  /**
   * <p>The maximum number of artifacts allowed for the action type.</p>
   * @public
   */
  maximumCount: number | undefined;
}

/**
 * <p>Returns information about the settings for an action type.</p>
 * @public
 */
export interface ActionTypeSettings {
  /**
   * <p>The URL of a sign-up page where users can sign up for an external service and
   *             perform initial configuration of the action provided by that service.</p>
   * @public
   */
  thirdPartyConfigurationUrl?: string | undefined;

  /**
   * <p>The URL returned to the CodePipeline console that provides a deep link to the
   *             resources of the external system, such as the configuration page for a CodeDeploy
   *             deployment group. This link is provided as part of the action display in the
   *             pipeline.</p>
   * @public
   */
  entityUrlTemplate?: string | undefined;

  /**
   * <p>The URL returned to the CodePipeline console that contains a link to the
   *             top-level landing page for the external system, such as the console page for CodeDeploy.
   *             This link is shown on the pipeline view page in the CodePipeline console and
   *             provides a link to the execution entity of the external action.</p>
   * @public
   */
  executionUrlTemplate?: string | undefined;

  /**
   * <p>The URL returned to the CodePipeline console that contains a link to the page
   *             where customers can update or change the configuration of the external action.</p>
   * @public
   */
  revisionUrlTemplate?: string | undefined;
}

/**
 * <p>Returns information about the details of an action type.</p>
 * @public
 */
export interface ActionType {
  /**
   * <p>Represents information about an action type.</p>
   * @public
   */
  id: ActionTypeId | undefined;

  /**
   * <p>The settings for the action type.</p>
   * @public
   */
  settings?: ActionTypeSettings | undefined;

  /**
   * <p>The configuration properties for the action type.</p>
   * @public
   */
  actionConfigurationProperties?: ActionConfigurationProperty[] | undefined;

  /**
   * <p>The details of the input artifact for the action, such as its commit ID.</p>
   * @public
   */
  inputArtifactDetails: ArtifactDetails | undefined;

  /**
   * <p>The details of the output artifact of the action, such as its commit ID.</p>
   * @public
   */
  outputArtifactDetails: ArtifactDetails | undefined;
}

/**
 * <p>Information about parameters for artifacts associated with the action type, such as
 *             the minimum and maximum artifacts allowed.</p>
 * @public
 */
export interface ActionTypeArtifactDetails {
  /**
   * <p>The minimum number of artifacts that can be used with the action type. For example,
   *             you should specify a minimum and maximum of zero input artifacts for an action type with
   *             a category of <code>source</code>.</p>
   * @public
   */
  minimumCount: number | undefined;

  /**
   * <p>The maximum number of artifacts that can be used with the actiontype. For example, you
   *             should specify a minimum and maximum of zero input artifacts for an action type with a
   *             category of <code>source</code>.</p>
   * @public
   */
  maximumCount: number | undefined;
}

/**
 * <p>Details about the polling configuration for the <code>JobWorker</code> action engine,
 *             or executor.</p>
 * @public
 */
export interface JobWorkerExecutorConfiguration {
  /**
   * <p>The accounts in which the job worker is configured and might poll for jobs as part of
   *             the action execution.</p>
   * @public
   */
  pollingAccounts?: string[] | undefined;

  /**
   * <p>The service Principals in which the job worker is configured and might poll for jobs
   *             as part of the action execution.</p>
   * @public
   */
  pollingServicePrincipals?: string[] | undefined;
}

/**
 * <p>Details about the configuration for the <code>Lambda</code> action engine, or
 *             executor.</p>
 * @public
 */
export interface LambdaExecutorConfiguration {
  /**
   * <p>The ARN of the Lambda function used by the action engine.</p>
   * @public
   */
  lambdaFunctionArn: string | undefined;
}

/**
 * <p>The action engine, or executor, related to the supported integration model used to
 *             create and update the action type. The available executor types are <code>Lambda</code>
 *             and <code>JobWorker</code>.</p>
 * @public
 */
export interface ExecutorConfiguration {
  /**
   * <p>Details about the <code>Lambda</code> executor of the action type.</p>
   * @public
   */
  lambdaExecutorConfiguration?: LambdaExecutorConfiguration | undefined;

  /**
   * <p>Details about the <code>JobWorker</code> executor of the action type.</p>
   * @public
   */
  jobWorkerExecutorConfiguration?: JobWorkerExecutorConfiguration | undefined;
}

/**
 * @public
 * @enum
 */
export const ExecutorType = {
  JobWorker: "JobWorker",
  Lambda: "Lambda",
} as const;

/**
 * @public
 */
export type ExecutorType = (typeof ExecutorType)[keyof typeof ExecutorType];

/**
 * <p>The action engine, or executor, for an action type created for a provider, where the
 *             action is to be used by customers of the provider. The action engine is associated with
 *             the model used to create and update the action, such as the Lambda integration
 *             model.</p>
 * @public
 */
export interface ActionTypeExecutor {
  /**
   * <p>The action configuration properties for the action type. These properties are
   *             specified in the action definition when the action type is created.</p>
   * @public
   */
  configuration: ExecutorConfiguration | undefined;

  /**
   * <p>The integration model used to create and update the action type, <code>Lambda</code>
   *             or <code>JobWorker</code>. </p>
   * @public
   */
  type: ExecutorType | undefined;

  /**
   * <p>The policy statement that specifies the permissions in the CodePipeline customer
   *             account that are needed to successfully run an action.</p>
   *          <p>To grant permission to another account, specify the account ID as the Principal, a
   *             domain-style identifier defined by the service, for example
   *                 <code>codepipeline.amazonaws.com</code>.</p>
   *          <note>
   *             <p>The size of the passed JSON policy document cannot exceed 2048 characters.</p>
   *          </note>
   * @public
   */
  policyStatementsTemplate?: string | undefined;

  /**
   * <p>The timeout in seconds for the job. An action execution can have multiple jobs. This
   *             is the timeout for a single job, not the entire action execution.</p>
   * @public
   */
  jobTimeout?: number | undefined;
}

/**
 * <p>Specifies the category, owner, provider, and version of the action type.</p>
 * @public
 */
export interface ActionTypeIdentifier {
  /**
   * <p>Defines what kind of action can be taken in the stage, one of the following:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>Source</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>Build</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>Test</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>Deploy</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>Approval</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>Invoke</code>
   *                </p>
   *             </li>
   *          </ul>
   * @public
   */
  category: ActionCategory | undefined;

  /**
   * <p>The creator of the action type being called: <code>AWS</code> or
   *                 <code>ThirdParty</code>.</p>
   * @public
   */
  owner: string | undefined;

  /**
   * <p>The provider of the action type being called. The provider name is supplied when the
   *             action type is created.</p>
   * @public
   */
  provider: string | undefined;

  /**
   * <p>A string that describes the action type version.</p>
   * @public
   */
  version: string | undefined;
}

/**
 * <p>Details identifying the users with permissions to use the action type.</p>
 * @public
 */
export interface ActionTypePermissions {
  /**
   * <p>A list of Amazon Web Services account IDs with access to use the action type in their
   *             pipelines.</p>
   * @public
   */
  allowedAccounts: string[] | undefined;
}

/**
 * <p>Represents information about each property specified in the action configuration, such
 *             as the description and key name that display for the customer using the action
 *             type.</p>
 * @public
 */
export interface ActionTypeProperty {
  /**
   * <p>The property name that is displayed to users.</p>
   * @public
   */
  name: string | undefined;

  /**
   * <p>Whether the configuration property is an optional value.</p>
   * @public
   */
  optional: boolean | undefined;

  /**
   * <p>Whether the configuration property is a key.</p>
   * @public
   */
  key: boolean | undefined;

  /**
   * <p>Whether to omit the field value entered by the customer in the log. If
   *                 <code>true</code>, the value is not saved in CloudTrail logs for the action
   *             execution.</p>
   * @public
   */
  noEcho: boolean | undefined;

  /**
   * <p>Indicates that the property is used with polling. An action type can have up to one
   *             queryable property. If it has one, that property must be both required and not
   *             secret.</p>
   * @public
   */
  queryable?: boolean | undefined;

  /**
   * <p>The description of the property that is displayed to users.</p>
   * @public
   */
  description?: string | undefined;
}

/**
 * <p>Returns information about URLs for web pages that display to customers as links on the
 *             pipeline view, such as an external configuration page for the action type.</p>
 * @public
 */
export interface ActionTypeUrls {
  /**
   * <p>The URL returned to the CodePipeline console that contains a link to the page
   *             where customers can configure the external action.</p>
   * @public
   */
  configurationUrl?: string | undefined;

  /**
   * <p>The URL returned to the CodePipeline console that provides a deep link to the
   *             resources of the external system, such as a status page. This link is provided as part
   *             of the action display in the pipeline.</p>
   * @public
   */
  entityUrlTemplate?: string | undefined;

  /**
   * <p>The link to an execution page for the action type in progress. For example, for a
   *             CodeDeploy action, this link is shown on the pipeline view page in the CodePipeline console, and it links to a CodeDeploy status page.</p>
   * @public
   */
  executionUrlTemplate?: string | undefined;

  /**
   * <p>The URL returned to the CodePipeline console that contains a link to the page
   *             where customers can update or change the configuration of the external action.</p>
   * @public
   */
  revisionUrlTemplate?: string | undefined;
}

/**
 * <p>The parameters for the action type definition that are provided when the action type
 *             is created or updated.</p>
 * @public
 */
export interface ActionTypeDeclaration {
  /**
   * <p>The description for the action type to be updated.</p>
   * @public
   */
  description?: string | undefined;

  /**
   * <p>Information about the executor for an action type that was created with any supported
   *             integration model.</p>
   * @public
   */
  executor: ActionTypeExecutor | undefined;

  /**
   * <p>The action category, owner, provider, and version of the action type to be
   *             updated.</p>
   * @public
   */
  id: ActionTypeIdentifier | undefined;

  /**
   * <p>Details for the artifacts, such as application files, to be worked on by the action.
   *             For example, the minimum and maximum number of input artifacts allowed.</p>
   * @public
   */
  inputArtifactDetails: ActionTypeArtifactDetails | undefined;

  /**
   * <p>Details for the output artifacts, such as a built application, that are the result of
   *             the action. For example, the minimum and maximum number of output artifacts
   *             allowed.</p>
   * @public
   */
  outputArtifactDetails: ActionTypeArtifactDetails | undefined;

  /**
   * <p>Details identifying the accounts with permissions to use the action type.</p>
   * @public
   */
  permissions?: ActionTypePermissions | undefined;

  /**
   * <p>The properties of the action type to be updated.</p>
   * @public
   */
  properties?: ActionTypeProperty[] | undefined;

  /**
   * <p>The links associated with the action type to be updated.</p>
   * @public
   */
  urls?: ActionTypeUrls | undefined;
}

/**
 * <p>The specified action type cannot be found.</p>
 * @public
 */
export class ActionTypeNotFoundException extends __BaseException {
  readonly name: "ActionTypeNotFoundException" = "ActionTypeNotFoundException";
  readonly $fault: "client" = "client";
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<ActionTypeNotFoundException, __BaseException>) {
    super({
      name: "ActionTypeNotFoundException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, ActionTypeNotFoundException.prototype);
  }
}

/**
 * <p>The approval action has already been approved or rejected.</p>
 * @public
 */
export class ApprovalAlreadyCompletedException extends __BaseException {
  readonly name: "ApprovalAlreadyCompletedException" = "ApprovalAlreadyCompletedException";
  readonly $fault: "client" = "client";
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<ApprovalAlreadyCompletedException, __BaseException>) {
    super({
      name: "ApprovalAlreadyCompletedException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, ApprovalAlreadyCompletedException.prototype);
  }
}

/**
 * @public
 * @enum
 */
export const ApprovalStatus = {
  Approved: "Approved",
  Rejected: "Rejected",
} as const;

/**
 * @public
 */
export type ApprovalStatus = (typeof ApprovalStatus)[keyof typeof ApprovalStatus];

/**
 * <p>Represents information about the result of an approval request.</p>
 * @public
 */
export interface ApprovalResult {
  /**
   * <p>The summary of the current status of the approval request.</p>
   * @public
   */
  summary: string | undefined;

  /**
   * <p>The response submitted by a reviewer assigned to an approval action
   *             request.</p>
   * @public
   */
  status: ApprovalStatus | undefined;
}

/**
 * <p>The location of the S3 bucket that contains a revision.</p>
 * @public
 */
export interface S3ArtifactLocation {
  /**
   * <p>The name of the S3 bucket.</p>
   * @public
   */
  bucketName: string | undefined;

  /**
   * <p>The key of the object in the S3 bucket, which uniquely identifies the object in the
   *             bucket.</p>
   * @public
   */
  objectKey: string | undefined;
}

/**
 * @public
 * @enum
 */
export const ArtifactLocationType = {
  S3: "S3",
} as const;

/**
 * @public
 */
export type ArtifactLocationType = (typeof ArtifactLocationType)[keyof typeof ArtifactLocationType];

/**
 * <p>Represents information about the location of an artifact.</p>
 * @public
 */
export interface ArtifactLocation {
  /**
   * <p>The type of artifact in the location.</p>
   * @public
   */
  type?: ArtifactLocationType | undefined;

  /**
   * <p>The S3 bucket that contains the artifact.</p>
   * @public
   */
  s3Location?: S3ArtifactLocation | undefined;
}

/**
 * <p>Artifacts are the files that are worked on by actions in the pipeline. See the
 *             action configuration for each action for details about artifact parameters. For example,
 *             the S3 source action artifact is a file name (or file path), and the files are generally
 *             provided as a ZIP file. Example artifact name: SampleApp_Windows.zip</p>
 * @public
 */
export interface Artifact {
  /**
   * <p>The artifact's name.</p>
   * @public
   */
  name?: string | undefined;

  /**
   * <p>The artifact's revision ID. Depending on the type of object, this could be a commit
   *             ID (GitHub) or a revision ID (Amazon S3).</p>
   * @public
   */
  revision?: string | undefined;

  /**
   * <p>The location of an artifact.</p>
   * @public
   */
  location?: ArtifactLocation | undefined;
}

/**
 * <p>Represents revision details of an artifact. </p>
 * @public
 */
export interface ArtifactRevision {
  /**
   * <p>The name of an artifact. This name might be system-generated, such as "MyApp", or
   *             defined by the user when an action is created.</p>
   * @public
   */
  name?: string | undefined;

  /**
   * <p>The revision ID of the artifact.</p>
   * @public
   */
  revisionId?: string | undefined;

  /**
   * <p>An additional identifier for a revision, such as a commit date or, for artifacts
   *             stored in Amazon S3 buckets, the ETag value.</p>
   * @public
   */
  revisionChangeIdentifier?: string | undefined;

  /**
   * <p>Summary information about the most recent revision of the artifact. For GitHub and
   *             CodeCommit repositories, the commit message. For Amazon S3 buckets or actions, the
   *             user-provided content of a <code>codepipeline-artifact-revision-summary</code> key
   *             specified in the object metadata.</p>
   * @public
   */
  revisionSummary?: string | undefined;

  /**
   * <p>The date and time when the most recent revision of the artifact was created, in
   *             timestamp format.</p>
   * @public
   */
  created?: Date | undefined;

  /**
   * <p>The commit ID for the artifact revision. For artifacts stored in GitHub or
   *             CodeCommit repositories, the commit ID is linked to a commit details page.</p>
   * @public
   */
  revisionUrl?: string | undefined;
}

/**
 * @public
 * @enum
 */
export const EncryptionKeyType = {
  KMS: "KMS",
} as const;

/**
 * @public
 */
export type EncryptionKeyType = (typeof EncryptionKeyType)[keyof typeof EncryptionKeyType];

/**
 * <p>Represents information about the key used to encrypt data in the artifact store,
 *             such as an Amazon Web Services Key Management Service (Key Management Service)
 *             key.</p>
 * @public
 */
export interface EncryptionKey {
  /**
   * <p>The ID used to identify the key. For an Amazon Web Services KMS key, you can use the
   *             key ID, the key ARN, or the alias ARN.</p>
   *          <note>
   *             <p>Aliases are recognized only in the account that created the KMS
   *                 key. For cross-account actions, you can only use the key ID or key ARN to identify
   *                 the key. Cross-account actions involve using the role from the other account
   *                 (AccountB), so specifying the key ID will use the key from the other account
   *                 (AccountB).</p>
   *          </note>
   * @public
   */
  id: string | undefined;

  /**
   * <p>The type of encryption key, such as an Amazon Web Services KMS key. When creating or
   *             updating a pipeline, the value must be set to 'KMS'.</p>
   * @public
   */
  type: EncryptionKeyType | undefined;
}

/**
 * @public
 * @enum
 */
export const ArtifactStoreType = {
  S3: "S3",
} as const;

/**
 * @public
 */
export type ArtifactStoreType = (typeof ArtifactStoreType)[keyof typeof ArtifactStoreType];

/**
 * <p>The S3 bucket where artifacts for the pipeline are stored.</p>
 *          <note>
 *             <p>You must include either <code>artifactStore</code> or
 *                     <code>artifactStores</code> in your pipeline, but you cannot use both. If you
 *                 create a cross-region action in your pipeline, you must use
 *                     <code>artifactStores</code>.</p>
 *          </note>
 * @public
 */
export interface ArtifactStore {
  /**
   * <p>The type of the artifact store, such as S3.</p>
   * @public
   */
  type: ArtifactStoreType | undefined;

  /**
   * <p>The S3 bucket used for storing the artifacts for a pipeline. You can specify the
   *             name of an S3 bucket but not a folder in the bucket. A folder to contain the pipeline
   *             artifacts is created for you based on the name of the pipeline. You can use any S3
   *             bucket in the same Amazon Web Services Region as the pipeline to store your pipeline
   *             artifacts.</p>
   * @public
   */
  location: string | undefined;

  /**
   * <p>The encryption key used to encrypt the data in the artifact store, such as an
   *                 Amazon Web Services Key Management Service key. If this is undefined, the default key
   *             for Amazon S3 is used.</p>
   * @public
   */
  encryptionKey?: EncryptionKey | undefined;
}

/**
 * <p>Represents an Amazon Web Services session credentials object. These credentials are
 *             temporary credentials that are issued by Amazon Web Services Secure Token Service (STS).
 *             They can be used to access input and output artifacts in the S3 bucket used to store
 *             artifact for the pipeline in CodePipeline.</p>
 * @public
 */
export interface AWSSessionCredentials {
  /**
   * <p>The access key for the session.</p>
   * @public
   */
  accessKeyId: string | undefined;

  /**
   * <p>The secret access key for the session.</p>
   * @public
   */
  secretAccessKey: string | undefined;

  /**
   * <p>The token for the session.</p>
   * @public
   */
  sessionToken: string | undefined;
}

/**
 * @public
 * @enum
 */
export const Result = {
  FAIL: "FAIL",
  RETRY: "RETRY",
  ROLLBACK: "ROLLBACK",
  SKIP: "SKIP",
} as const;

/**
 * @public
 */
export type Result = (typeof Result)[keyof typeof Result];

/**
 * @public
 * @enum
 */
export const RuleCategory = {
  Rule: "Rule",
} as const;

/**
 * @public
 */
export type RuleCategory = (typeof RuleCategory)[keyof typeof RuleCategory];

/**
 * @public
 * @enum
 */
export const RuleOwner = {
  AWS: "AWS",
} as const;

/**
 * @public
 */
export type RuleOwner = (typeof RuleOwner)[keyof typeof RuleOwner];

/**
 * <p>The ID for the rule type, which is made up of the combined values for category, owner,
 *             provider, and version. For more information about conditions, see <a href="https://docs.aws.amazon.com/codepipeline/latest/userguide/stage-conditions.html">Stage
 *                 conditions</a>. For more information about rules, see the <a href="https://docs.aws.amazon.com/codepipeline/latest/userguide/rule-reference.html">CodePipeline rule reference</a>.</p>
 * @public
 */
export interface RuleTypeId {
  /**
   * <p>A category defines what kind of rule can be run in the stage, and constrains the
   *             provider type for the rule. The valid category is <code>Rule</code>. </p>
   * @public
   */
  category: RuleCategory | undefined;

  /**
   * <p>The creator of the rule being called. The valid value for the <code>Owner</code> field
   *             in the rule category is <code>AWS</code>. </p>
   * @public
   */
  owner?: RuleOwner | undefined;

  /**
   * <p>The rule provider, such as the <code>DeploymentWindow</code> rule. For a list of rule
   *             provider names, see the rules listed in the <a href="https://docs.aws.amazon.com/codepipeline/latest/userguide/rule-reference.html">CodePipeline rule
   *                 reference</a>.</p>
   * @public
   */
  provider: string | undefined;

  /**
   * <p>A string that describes the rule version.</p>
   * @public
   */
  version?: string | undefined;
}

/**
 * <p>Represents information about the rule to be created for an associated condition. An
 *             example would be creating a new rule for an entry condition, such as a rule that checks
 *             for a test result before allowing the run to enter the deployment stage. For more
 *             information about conditions, see <a href="https://docs.aws.amazon.com/codepipeline/latest/userguide/stage-conditions.html">Stage conditions</a>
 *             and <a href="https://docs.aws.amazon.com/codepipeline/latest/userguide/concepts-how-it-works-conditions.html">How do
 *                 stage conditions work?</a>. For more information about rules, see the <a href="https://docs.aws.amazon.com/codepipeline/latest/userguide/rule-reference.html">CodePipeline rule reference</a>.</p>
 * @public
 */
export interface RuleDeclaration {
  /**
   * <p>The name of the rule that is created for the condition, such as
   *                 <code>VariableCheck</code>.</p>
   * @public
   */
  name: string | undefined;

  /**
   * <p>The ID for the rule type, which is made up of the combined values for category, owner,
   *             provider, and version.</p>
   * @public
   */
  ruleTypeId: RuleTypeId | undefined;

  /**
   * <p>The action configuration fields for the rule.</p>
   * @public
   */
  configuration?: Record<string, string> | undefined;

  /**
   * <p>The shell commands to run with your commands rule in CodePipeline. All commands
   *             are supported except multi-line formats. While CodeBuild logs and permissions
   *             are used, you do not need to create any resources in CodeBuild.</p>
   *          <note>
   *             <p>Using compute time for this action will incur separate charges in CodeBuild.</p>
   *          </note>
   * @public
   */
  commands?: string[] | undefined;

  /**
   * <p>The input artifacts fields for the rule, such as specifying an input file for the
   *             rule.</p>
   * @public
   */
  inputArtifacts?: InputArtifact[] | undefined;

  /**
   * <p>The pipeline role ARN associated with the rule.</p>
   * @public
   */
  roleArn?: string | undefined;

  /**
   * <p>The Region for the condition associated with the rule.</p>
   * @public
   */
  region?: string | undefined;

  /**
   * <p>The action timeout for the rule.</p>
   * @public
   */
  timeoutInMinutes?: number | undefined;
}

/**
 * <p>The condition for the stage. A condition is made up of the rules and the result for
 *             the condition. For more information about conditions, see <a href="https://docs.aws.amazon.com/codepipeline/latest/userguide/stage-conditions.html">Stage conditions</a>
 *             and <a href="https://docs.aws.amazon.com/codepipeline/latest/userguide/concepts-how-it-works-conditions.html">How do
 *                 stage conditions work?</a>.. For more information about rules, see the <a href="https://docs.aws.amazon.com/codepipeline/latest/userguide/rule-reference.html">CodePipeline rule reference</a>.</p>
 * @public
 */
export interface Condition {
  /**
   * <p>The action to be done when the condition is met. For example, rolling back an
   *             execution for a failure condition.</p>
   * @public
   */
  result?: Result | undefined;

  /**
   * <p>The rules that make up the condition.</p>
   * @public
   */
  rules?: RuleDeclaration[] | undefined;
}

/**
 * <p>The conditions for making checks for entry to a stage. For more information about
 *             conditions, see <a href="https://docs.aws.amazon.com/codepipeline/latest/userguide/stage-conditions.html">Stage conditions</a>
 *             and <a href="https://docs.aws.amazon.com/codepipeline/latest/userguide/concepts-how-it-works-conditions.html">How do
 *                 stage conditions work?</a>. </p>
 * @public
 */
export interface BeforeEntryConditions {
  /**
   * <p>The conditions that are configured as entry conditions.</p>
   * @public
   */
  conditions: Condition[] | undefined;
}

/**
 * @public
 * @enum
 */
export const BlockerType = {
  Schedule: "Schedule",
} as const;

/**
 * @public
 */
export type BlockerType = (typeof BlockerType)[keyof typeof BlockerType];

/**
 * <p>Reserved for future use.</p>
 * @public
 */
export interface BlockerDeclaration {
  /**
   * <p>Reserved for future use.</p>
   * @public
   */
  name: string | undefined;

  /**
   * <p>Reserved for future use.</p>
   * @public
   */
  type: BlockerType | undefined;
}

/**
 * <p>Unable to modify the tag due to a simultaneous update request.</p>
 * @public
 */
export class ConcurrentModificationException extends __BaseException {
  readonly name: "ConcurrentModificationException" = "ConcurrentModificationException";
  readonly $fault: "client" = "client";
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<ConcurrentModificationException, __BaseException>) {
    super({
      name: "ConcurrentModificationException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, ConcurrentModificationException.prototype);
  }
}

/**
 * <p>A tag is a key-value pair that is used to manage the resource.</p>
 * @public
 */
export interface Tag {
  /**
   * <p>The tag's key.</p>
   * @public
   */
  key: string | undefined;

  /**
   * <p>The tag's value.</p>
   * @public
   */
  value: string | undefined;
}

/**
 * <p>Represents the input of a CreateCustomActionType operation.</p>
 * @public
 */
export interface CreateCustomActionTypeInput {
  /**
   * <p>The category of the custom action, such as a build action or a test
   *             action.</p>
   * @public
   */
  category: ActionCategory | undefined;

  /**
   * <p>The provider of the service used in the custom action, such as
   *             CodeDeploy.</p>
   * @public
   */
  provider: string | undefined;

  /**
   * <p>The version identifier of the custom action.</p>
   * @public
   */
  version: string | undefined;

  /**
   * <p>URLs that provide users information about this custom action.</p>
   * @public
   */
  settings?: ActionTypeSettings | undefined;

  /**
   * <p>The configuration properties for the custom action.</p>
   *          <note>
   *             <p>You can refer to a name in the configuration properties of the custom action
   *                 within the URL templates by following the format of \{Config:name\}, as long as the
   *                 configuration property is both required and not secret. For more information, see
   *                     <a href="https://docs.aws.amazon.com/codepipeline/latest/userguide/how-to-create-custom-action.html">Create a
   *                     Custom Action for a Pipeline</a>.</p>
   *          </note>
   * @public
   */
  configurationProperties?: ActionConfigurationProperty[] | undefined;

  /**
   * <p>The details of the input artifact for the action, such as its commit ID.</p>
   * @public
   */
  inputArtifactDetails: ArtifactDetails | undefined;

  /**
   * <p>The details of the output artifact of the action, such as its commit ID.</p>
   * @public
   */
  outputArtifactDetails: ArtifactDetails | undefined;

  /**
   * <p>The tags for the custom action.</p>
   * @public
   */
  tags?: Tag[] | undefined;
}

/**
 * <p>Represents the output of a <code>CreateCustomActionType</code> operation.</p>
 * @public
 */
export interface CreateCustomActionTypeOutput {
  /**
   * <p>Returns information about the details of an action type.</p>
   * @public
   */
  actionType: ActionType | undefined;

  /**
   * <p>Specifies the tags applied to the custom action.</p>
   * @public
   */
  tags?: Tag[] | undefined;
}

/**
 * <p>The specified resource tags are invalid.</p>
 * @public
 */
export class InvalidTagsException extends __BaseException {
  readonly name: "InvalidTagsException" = "InvalidTagsException";
  readonly $fault: "client" = "client";
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<InvalidTagsException, __BaseException>) {
    super({
      name: "InvalidTagsException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, InvalidTagsException.prototype);
  }
}

/**
 * <p>The number of pipelines associated with the Amazon Web Services account has exceeded
 *             the limit allowed for the account.</p>
 * @public
 */
export class LimitExceededException extends __BaseException {
  readonly name: "LimitExceededException" = "LimitExceededException";
  readonly $fault: "client" = "client";
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<LimitExceededException, __BaseException>) {
    super({
      name: "LimitExceededException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, LimitExceededException.prototype);
  }
}

/**
 * <p>The tags limit for a resource has been exceeded.</p>
 * @public
 */
export class TooManyTagsException extends __BaseException {
  readonly name: "TooManyTagsException" = "TooManyTagsException";
  readonly $fault: "client" = "client";
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<TooManyTagsException, __BaseException>) {
    super({
      name: "TooManyTagsException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, TooManyTagsException.prototype);
  }
}

/**
 * @public
 * @enum
 */
export const ExecutionMode = {
  PARALLEL: "PARALLEL",
  QUEUED: "QUEUED",
  SUPERSEDED: "SUPERSEDED",
} as const;

/**
 * @public
 */
export type ExecutionMode = (typeof ExecutionMode)[keyof typeof ExecutionMode];

/**
 * @public
 * @enum
 */
export const PipelineType = {
  V1: "V1",
  V2: "V2",
} as const;

/**
 * @public
 */
export type PipelineType = (typeof PipelineType)[keyof typeof PipelineType];

/**
 * @public
 * @enum
 */
export const StageRetryMode = {
  ALL_ACTIONS: "ALL_ACTIONS",
  FAILED_ACTIONS: "FAILED_ACTIONS",
} as const;

/**
 * @public
 */
export type StageRetryMode = (typeof StageRetryMode)[keyof typeof StageRetryMode];

/**
 * <p>The retry configuration specifies automatic retry for a failed stage, along with the
 *             configured retry mode.</p>
 * @public
 */
export interface RetryConfiguration {
  /**
   * <p>The method that you want to configure for automatic stage retry on stage failure. You
   *             can specify to retry only failed action in the stage or all actions in the stage.</p>
   * @public
   */
  retryMode?: StageRetryMode | undefined;
}

/**
 * <p>The configuration that specifies the result, such as rollback, to occur upon stage
 *             failure. For more information about conditions, see <a href="https://docs.aws.amazon.com/codepipeline/latest/userguide/stage-conditions.html">Stage conditions</a>
 *             and <a href="https://docs.aws.amazon.com/codepipeline/latest/userguide/concepts-how-it-works-conditions.html">How do
 *                 stage conditions work?</a>. </p>
 * @public
 */
export interface FailureConditions {
  /**
   * <p>The specified result for when the failure conditions are met, such as rolling back the
   *             stage.</p>
   * @public
   */
  result?: Result | undefined;

  /**
   * <p>The retry configuration specifies automatic retry for a failed stage, along with the
   *             configured retry mode.</p>
   * @public
   */
  retryConfiguration?: RetryConfiguration | undefined;

  /**
   * <p>The conditions that are configured as failure conditions. For more information about
   *             conditions, see <a href="https://docs.aws.amazon.com/codepipeline/latest/userguide/stage-conditions.html">Stage conditions</a>
   *             and <a href="https://docs.aws.amazon.com/codepipeline/latest/userguide/concepts-how-it-works-conditions.html">How do
   *                 stage conditions work?</a>.</p>
   * @public
   */
  conditions?: Condition[] | undefined;
}

/**
 * <p>The conditions for making checks that, if met, succeed a stage. For more information
 *             about conditions, see <a href="https://docs.aws.amazon.com/codepipeline/latest/userguide/stage-conditions.html">Stage conditions</a>
 *             and <a href="https://docs.aws.amazon.com/codepipeline/latest/userguide/concepts-how-it-works-conditions.html">How do
 *                 stage conditions work?</a>.</p>
 * @public
 */
export interface SuccessConditions {
  /**
   * <p>The conditions that are success conditions.</p>
   * @public
   */
  conditions: Condition[] | undefined;
}

/**
 * <p>Represents information about a stage and its definition.</p>
 * @public
 */
export interface StageDeclaration {
  /**
   * <p>The name of the stage.</p>
   * @public
   */
  name: string | undefined;

  /**
   * <p>Reserved for future use.</p>
   * @public
   */
  blockers?: BlockerDeclaration[] | undefined;

  /**
   * <p>The actions included in a stage.</p>
   * @public
   */
  actions: ActionDeclaration[] | undefined;

  /**
   * <p>The method to use when a stage has not completed successfully. For example,
   *             configuring this field for rollback will roll back a failed stage automatically to the
   *             last successful pipeline execution in the stage.</p>
   * @public
   */
  onFailure?: FailureConditions | undefined;

  /**
   * <p>The method to use when a stage has succeeded. For example, configuring this field for
   *             conditions will allow the stage to succeed when the conditions are met.</p>
   * @public
   */
  onSuccess?: SuccessConditions | undefined;

  /**
   * <p>The method to use when a stage allows entry. For example, configuring this field for
   *             conditions will allow entry to the stage when the conditions are met.</p>
   * @public
   */
  beforeEntry?: BeforeEntryConditions | undefined;
}

/**
 * <p>The Git repository branches specified as filter criteria to start the
 *             pipeline.</p>
 * @public
 */
export interface GitBranchFilterCriteria {
  /**
   * <p>The list of patterns of Git branches that, when a commit is pushed, are to be
   *             included as criteria that starts the pipeline.</p>
   * @public
   */
  includes?: string[] | undefined;

  /**
   * <p>The list of patterns of Git branches that, when a commit is pushed, are to be
   *             excluded from starting the pipeline.</p>
   * @public
   */
  excludes?: string[] | undefined;
}

/**
 * @public
 * @enum
 */
export const GitPullRequestEventType = {
  CLOSED: "CLOSED",
  OPEN: "OPEN",
  UPDATED: "UPDATED",
} as const;

/**
 * @public
 */
export type GitPullRequestEventType = (typeof GitPullRequestEventType)[keyof typeof GitPullRequestEventType];

/**
 * <p>The Git repository file paths specified as filter criteria to start the
 *             pipeline.</p>
 * @public
 */
export interface GitFilePathFilterCriteria {
  /**
   * <p>The list of patterns of Git repository file paths that, when a commit is pushed,
   *             are to be included as criteria that starts the pipeline.</p>
   * @public
   */
  includes?: string[] | undefined;

  /**
   * <p>The list of patterns of Git repository file paths that, when a commit is pushed,
   *             are to be excluded from starting the pipeline.</p>
   * @public
   */
  excludes?: string[] | undefined;
}

/**
 * <p>The event criteria for the pull request trigger configuration, such as the lists of
 *             branches or file paths to include and exclude.</p>
 *          <p>The following are valid values for the events for this filter:</p>
 *          <ul>
 *             <li>
 *                <p>CLOSED</p>
 *             </li>
 *             <li>
 *                <p>OPEN</p>
 *             </li>
 *             <li>
 *                <p>UPDATED</p>
 *             </li>
 *          </ul>
 * @public
 */
export interface GitPullRequestFilter {
  /**
   * <p>The field that specifies which pull request events to filter on (OPEN, UPDATED,
   *             CLOSED) for the trigger configuration.</p>
   * @public
   */
  events?: GitPullRequestEventType[] | undefined;

  /**
   * <p>The field that specifies to filter on branches for the pull request trigger
   *             configuration.</p>
   * @public
   */
  branches?: GitBranchFilterCriteria | undefined;

  /**
   * <p>The field that specifies to filter on file paths for the pull request trigger
   *             configuration.</p>
   * @public
   */
  filePaths?: GitFilePathFilterCriteria | undefined;
}

/**
 * <p>The Git tags specified as filter criteria for whether a Git tag repository event
 *             will start the pipeline.</p>
 * @public
 */
export interface GitTagFilterCriteria {
  /**
   * <p>The list of patterns of Git tags that, when pushed, are to be included as criteria
   *             that starts the pipeline.</p>
   * @public
   */
  includes?: string[] | undefined;

  /**
   * <p>The list of patterns of Git tags that, when pushed, are to be excluded from
   *             starting the pipeline.</p>
   * @public
   */
  excludes?: string[] | undefined;
}

/**
 * <p>The event criteria that specify when a specified repository event will start the
 *             pipeline for the specified trigger configuration, such as the lists of Git tags to
 *             include and exclude.</p>
 * @public
 */
export interface GitPushFilter {
  /**
   * <p>The field that contains the details for the Git tags trigger
   *             configuration.</p>
   * @public
   */
  tags?: GitTagFilterCriteria | undefined;

  /**
   * <p>The field that specifies to filter on branches for the push trigger
   *             configuration.</p>
   * @public
   */
  branches?: GitBranchFilterCriteria | undefined;

  /**
   * <p>The field that specifies to filter on file paths for the push trigger
   *             configuration.</p>
   * @public
   */
  filePaths?: GitFilePathFilterCriteria | undefined;
}

/**
 * <p>A type of trigger configuration for Git-based source actions.</p>
 *          <note>
 *             <p>You can specify the Git configuration trigger type for all third-party
 *                 Git-based source actions that are supported by the
 *                     <code>CodeStarSourceConnection</code> action type.</p>
 *          </note>
 * @public
 */
export interface GitConfiguration {
  /**
   * <p>The name of the pipeline source action where the trigger configuration, such as Git
   *             tags, is specified. The trigger configuration will start the pipeline upon the specified
   *             change only.</p>
   *          <note>
   *             <p>You can only specify one trigger configuration per source action.</p>
   *          </note>
   * @public
   */
  sourceActionName: string | undefined;

  /**
   * <p>The field where the repository event that will start the pipeline, such as pushing
   *             Git tags, is specified with details.</p>
   * @public
   */
  push?: GitPushFilter[] | undefined;

  /**
   * <p>The field where the repository event that will start the pipeline is specified as
   *             pull requests.</p>
   * @public
   */
  pullRequest?: GitPullRequestFilter[] | undefined;
}

/**
 * @public
 * @enum
 */
export const PipelineTriggerProviderType = {
  CodeStarSourceConnection: "CodeStarSourceConnection",
} as const;

/**
 * @public
 */
export type PipelineTriggerProviderType =
  (typeof PipelineTriggerProviderType)[keyof typeof PipelineTriggerProviderType];

/**
 * <p>Represents information about the specified trigger configuration, such as the
 *             filter criteria and the source stage for the action that contains the trigger.</p>
 *          <note>
 *             <p>This is only supported for the <code>CodeStarSourceConnection</code> action
 *                 type.</p>
 *          </note>
 *          <note>
 *             <p>When a trigger configuration is specified, default change detection for
 *                 repository and branch commits is disabled.</p>
 *          </note>
 * @public
 */
export interface PipelineTriggerDeclaration {
  /**
   * <p>The source provider for the event, such as connections configured for a repository
   *             with Git tags, for the specified trigger configuration.</p>
   * @public
   */
  providerType: PipelineTriggerProviderType | undefined;

  /**
   * <p>Provides the filter criteria and the source stage for the repository event that
   *             starts the pipeline, such as Git tags.</p>
   * @public
   */
  gitConfiguration: GitConfiguration | undefined;
}

/**
 * <p>A variable declared at the pipeline level.</p>
 * @public
 */
export interface PipelineVariableDeclaration {
  /**
   * <p>The name of a pipeline-level variable.</p>
   * @public
   */
  name: string | undefined;

  /**
   * <p>The value of a pipeline-level variable.</p>
   * @public
   */
  defaultValue?: string | undefined;

  /**
   * <p>The description of a pipeline-level variable. It's used to add additional context
   *             about the variable, and not being used at time when pipeline executes.</p>
   * @public
   */
  description?: string | undefined;
}

/**
 * <p>Represents the structure of actions and stages to be performed in the
 *             pipeline.</p>
 * @public
 */
export interface PipelineDeclaration {
  /**
   * <p>The name of the pipeline.</p>
   * @public
   */
  name: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) for CodePipeline to use to either perform
   *             actions with no <code>actionRoleArn</code>, or to use to assume roles for actions with
   *             an <code>actionRoleArn</code>.</p>
   * @public
   */
  roleArn: string | undefined;

  /**
   * <p>Represents information about the S3 bucket where artifacts are stored for the
   *             pipeline.</p>
   *          <note>
   *             <p>You must include either <code>artifactStore</code> or
   *                     <code>artifactStores</code> in your pipeline, but you cannot use both. If you
   *                 create a cross-region action in your pipeline, you must use
   *                     <code>artifactStores</code>.</p>
   *          </note>
   * @public
   */
  artifactStore?: ArtifactStore | undefined;

  /**
   * <p>A mapping of <code>artifactStore</code> objects and their corresponding Amazon Web Services Regions. There must be an artifact store for the pipeline Region and for
   *             each cross-region action in the pipeline.</p>
   *          <note>
   *             <p>You must include either <code>artifactStore</code> or
   *                     <code>artifactStores</code> in your pipeline, but you cannot use both. If you
   *                 create a cross-region action in your pipeline, you must use
   *                     <code>artifactStores</code>.</p>
   *          </note>
   * @public
   */
  artifactStores?: Record<string, ArtifactStore> | undefined;

  /**
   * <p>The stage in which to perform the action.</p>
   * @public
   */
  stages: StageDeclaration[] | undefined;

  /**
   * <p>The version number of the pipeline. A new pipeline always has a version number of
   *             1. This number is incremented when a pipeline is updated.</p>
   * @public
   */
  version?: number | undefined;

  /**
   * <p>The method that the pipeline will use to handle multiple executions. The default
   *             mode is SUPERSEDED.</p>
   * @public
   */
  executionMode?: ExecutionMode | undefined;

  /**
   * <p>CodePipeline provides the following pipeline types, which differ in
   *             characteristics and price, so that you can tailor your pipeline features and cost to the
   *             needs of your applications.</p>
   *          <ul>
   *             <li>
   *                <p>V1 type pipelines have a JSON structure that contains standard pipeline,
   *                     stage, and action-level parameters.</p>
   *             </li>
   *             <li>
   *                <p>V2 type pipelines have the same structure as a V1 type, along with additional
   *                     parameters for release safety and trigger configuration.</p>
   *             </li>
   *          </ul>
   *          <important>
   *             <p>Including V2 parameters, such as triggers on Git tags, in the pipeline JSON when
   *                 creating or updating a pipeline will result in the pipeline having the V2 type of
   *                 pipeline and the associated costs.</p>
   *          </important>
   *          <p>For information about pricing for CodePipeline, see <a href="http://aws.amazon.com/codepipeline/pricing/">Pricing</a>.</p>
   *          <p> For information about which type of pipeline to choose, see <a href="https://docs.aws.amazon.com/codepipeline/latest/userguide/pipeline-types-planning.html">What type of
   *                 pipeline is right for me?</a>.</p>
   * @public
   */
  pipelineType?: PipelineType | undefined;

  /**
   * <p>A list that defines the pipeline variables for a pipeline resource. Variable names can
   *             have alphanumeric and underscore characters, and the values must match
   *                 <code>[A-Za-z0-9@\-_]+</code>.</p>
   * @public
   */
  variables?: PipelineVariableDeclaration[] | undefined;

  /**
   * <p>The trigger configuration specifying a type of event, such as Git tags, that starts
   *             the pipeline.</p>
   *          <note>
   *             <p>When a trigger configuration is specified, default change detection for
   *                 repository and branch commits is disabled.</p>
   *          </note>
   * @public
   */
  triggers?: PipelineTriggerDeclaration[] | undefined;
}

/**
 * <p>Represents the input of a <code>CreatePipeline</code> action.</p>
 * @public
 */
export interface CreatePipelineInput {
  /**
   * <p>Represents the structure of actions and stages to be performed in the pipeline.
   *         </p>
   * @public
   */
  pipeline: PipelineDeclaration | undefined;

  /**
   * <p>The tags for the pipeline.</p>
   * @public
   */
  tags?: Tag[] | undefined;
}

/**
 * <p>Represents the output of a <code>CreatePipeline</code> action.</p>
 * @public
 */
export interface CreatePipelineOutput {
  /**
   * <p>Represents the structure of actions and stages to be performed in the pipeline.
   *         </p>
   * @public
   */
  pipeline?: PipelineDeclaration | undefined;

  /**
   * <p>Specifies the tags applied to the pipeline.</p>
   * @public
   */
  tags?: Tag[] | undefined;
}

/**
 * <p>The action declaration was specified in an invalid format.</p>
 * @public
 */
export class InvalidActionDeclarationException extends __BaseException {
  readonly name: "InvalidActionDeclarationException" = "InvalidActionDeclarationException";
  readonly $fault: "client" = "client";
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<InvalidActionDeclarationException, __BaseException>) {
    super({
      name: "InvalidActionDeclarationException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, InvalidActionDeclarationException.prototype);
  }
}

/**
 * <p>Reserved for future use.</p>
 * @public
 */
export class InvalidBlockerDeclarationException extends __BaseException {
  readonly name: "InvalidBlockerDeclarationException" = "InvalidBlockerDeclarationException";
  readonly $fault: "client" = "client";
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<InvalidBlockerDeclarationException, __BaseException>) {
    super({
      name: "InvalidBlockerDeclarationException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, InvalidBlockerDeclarationException.prototype);
  }
}

/**
 * <p>The stage declaration was specified in an invalid format.</p>
 * @public
 */
export class InvalidStageDeclarationException extends __BaseException {
  readonly name: "InvalidStageDeclarationException" = "InvalidStageDeclarationException";
  readonly $fault: "client" = "client";
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<InvalidStageDeclarationException, __BaseException>) {
    super({
      name: "InvalidStageDeclarationException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, InvalidStageDeclarationException.prototype);
  }
}

/**
 * <p>The structure was specified in an invalid format.</p>
 * @public
 */
export class InvalidStructureException extends __BaseException {
  readonly name: "InvalidStructureException" = "InvalidStructureException";
  readonly $fault: "client" = "client";
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<InvalidStructureException, __BaseException>) {
    super({
      name: "InvalidStructureException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, InvalidStructureException.prototype);
  }
}

/**
 * <p>The specified pipeline name is already in use.</p>
 * @public
 */
export class PipelineNameInUseException extends __BaseException {
  readonly name: "PipelineNameInUseException" = "PipelineNameInUseException";
  readonly $fault: "client" = "client";
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<PipelineNameInUseException, __BaseException>) {
    super({
      name: "PipelineNameInUseException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, PipelineNameInUseException.prototype);
  }
}

/**
 * <p>Represents the input of a <code>DeleteCustomActionType</code> operation. The custom
 *             action will be marked as deleted.</p>
 * @public
 */
export interface DeleteCustomActionTypeInput {
  /**
   * <p>The category of the custom action that you want to delete, such as source or
   *             deploy.</p>
   * @public
   */
  category: ActionCategory | undefined;

  /**
   * <p>The provider of the service used in the custom action, such as
   *             CodeDeploy.</p>
   * @public
   */
  provider: string | undefined;

  /**
   * <p>The version of the custom action to delete.</p>
   * @public
   */
  version: string | undefined;
}

/**
 * <p>Represents the input of a <code>DeletePipeline</code> action.</p>
 * @public
 */
export interface DeletePipelineInput {
  /**
   * <p>The name of the pipeline to be deleted.</p>
   * @public
   */
  name: string | undefined;
}

/**
 * @public
 */
export interface DeleteWebhookInput {
  /**
   * <p>The name of the webhook you want to delete.</p>
   * @public
   */
  name: string | undefined;
}

/**
 * @public
 */
export interface DeleteWebhookOutput {}

/**
 * @public
 */
export interface DeregisterWebhookWithThirdPartyInput {
  /**
   * <p>The name of the webhook you want to deregister.</p>
   * @public
   */
  webhookName?: string | undefined;
}

/**
 * @public
 */
export interface DeregisterWebhookWithThirdPartyOutput {}

/**
 * <p>The specified webhook was entered in an invalid format or cannot be
 *             found.</p>
 * @public
 */
export class WebhookNotFoundException extends __BaseException {
  readonly name: "WebhookNotFoundException" = "WebhookNotFoundException";
  readonly $fault: "client" = "client";
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<WebhookNotFoundException, __BaseException>) {
    super({
      name: "WebhookNotFoundException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, WebhookNotFoundException.prototype);
  }
}

/**
 * @public
 * @enum
 */
export const StageTransitionType = {
  Inbound: "Inbound",
  Outbound: "Outbound",
} as const;

/**
 * @public
 */
export type StageTransitionType = (typeof StageTransitionType)[keyof typeof StageTransitionType];

/**
 * <p>Represents the input of a <code>DisableStageTransition</code> action.</p>
 * @public
 */
export interface DisableStageTransitionInput {
  /**
   * <p>The name of the pipeline in which you want to disable the flow of artifacts from
   *             one stage to another.</p>
   * @public
   */
  pipelineName: string | undefined;

  /**
   * <p>The name of the stage where you want to disable the inbound or outbound transition
   *             of artifacts.</p>
   * @public
   */
  stageName: string | undefined;

  /**
   * <p>Specifies whether artifacts are prevented from transitioning into the stage and
   *             being processed by the actions in that stage (inbound), or prevented from transitioning
   *             from the stage after they have been processed by the actions in that stage
   *             (outbound).</p>
   * @public
   */
  transitionType: StageTransitionType | undefined;

  /**
   * <p>The reason given to the user that a stage is disabled, such as waiting for manual
   *             approval or manual tests. This message is displayed in the pipeline console
   *             UI.</p>
   * @public
   */
  reason: string | undefined;
}

/**
 * <p>The pipeline was specified in an invalid format or cannot be found.</p>
 * @public
 */
export class PipelineNotFoundException extends __BaseException {
  readonly name: "PipelineNotFoundException" = "PipelineNotFoundException";
  readonly $fault: "client" = "client";
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<PipelineNotFoundException, __BaseException>) {
    super({
      name: "PipelineNotFoundException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, PipelineNotFoundException.prototype);
  }
}

/**
 * <p>The stage was specified in an invalid format or cannot be found.</p>
 * @public
 */
export class StageNotFoundException extends __BaseException {
  readonly name: "StageNotFoundException" = "StageNotFoundException";
  readonly $fault: "client" = "client";
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<StageNotFoundException, __BaseException>) {
    super({
      name: "StageNotFoundException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, StageNotFoundException.prototype);
  }
}

/**
 * <p>Represents the input of an <code>EnableStageTransition</code> action.</p>
 * @public
 */
export interface EnableStageTransitionInput {
  /**
   * <p>The name of the pipeline in which you want to enable the flow of artifacts from one
   *             stage to another.</p>
   * @public
   */
  pipelineName: string | undefined;

  /**
   * <p>The name of the stage where you want to enable the transition of artifacts, either
   *             into the stage (inbound) or from that stage to the next stage (outbound).</p>
   * @public
   */
  stageName: string | undefined;

  /**
   * <p>Specifies whether artifacts are allowed to enter the stage and be processed by the
   *             actions in that stage (inbound) or whether already processed artifacts are allowed to
   *             transition to the next stage (outbound).</p>
   * @public
   */
  transitionType: StageTransitionType | undefined;
}

/**
 * @public
 */
export interface GetActionTypeInput {
  /**
   * <p>Defines what kind of action can be taken in the stage. The following are the valid
   *             values:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>Source</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>Build</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>Test</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>Deploy</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>Approval</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>Invoke</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>Compute</code>
   *                </p>
   *             </li>
   *          </ul>
   * @public
   */
  category: ActionCategory | undefined;

  /**
   * <p>The creator of an action type that was created with any supported integration model.
   *             There are two valid values: <code>AWS</code> and <code>ThirdParty</code>.</p>
   * @public
   */
  owner: string | undefined;

  /**
   * <p>The provider of the action type being called. The provider name is specified when the
   *             action type is created.</p>
   * @public
   */
  provider: string | undefined;

  /**
   * <p>A string that describes the action type version.</p>
   * @public
   */
  version: string | undefined;
}

/**
 * @public
 */
export interface GetActionTypeOutput {
  /**
   * <p>The action type information for the requested action type, such as the action type
   *             ID.</p>
   * @public
   */
  actionType?: ActionTypeDeclaration | undefined;
}

/**
 * <p>Represents the input of a <code>GetJobDetails</code> action.</p>
 * @public
 */
export interface GetJobDetailsInput {
  /**
   * <p>The unique system-generated ID for the job.</p>
   * @public
   */
  jobId: string | undefined;
}

/**
 * <p>Represents information about a stage to a job worker.</p>
 * @public
 */
export interface StageContext {
  /**
   * <p>The name of the stage.</p>
   * @public
   */
  name?: string | undefined;
}

/**
 * <p>Represents information about a pipeline to a job worker.</p>
 *          <note>
 *             <p>PipelineContext contains <code>pipelineArn</code> and
 *                     <code>pipelineExecutionId</code> for custom action jobs. The
 *                     <code>pipelineArn</code> and <code>pipelineExecutionId</code> fields are not
 *                 populated for ThirdParty action jobs.</p>
 *          </note>
 * @public
 */
export interface PipelineContext {
  /**
   * <p>The name of the pipeline. This is a user-specified value. Pipeline names must be
   *             unique across all pipeline names under an Amazon Web Services account.</p>
   * @public
   */
  pipelineName?: string | undefined;

  /**
   * <p>The stage of the pipeline.</p>
   * @public
   */
  stage?: StageContext | undefined;

  /**
   * <p>The context of an action to a job worker in the stage of a pipeline.</p>
   * @public
   */
  action?: ActionContext | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the pipeline.</p>
   * @public
   */
  pipelineArn?: string | undefined;

  /**
   * <p>The execution ID of the pipeline.</p>
   * @public
   */
  pipelineExecutionId?: string | undefined;
}

/**
 * <p>Represents other information about a job required for a job worker to complete the
 *             job.</p>
 * @public
 */
export interface JobData {
  /**
   * <p>Represents information about an action type.</p>
   * @public
   */
  actionTypeId?: ActionTypeId | undefined;

  /**
   * <p>Represents information about an action configuration.</p>
   * @public
   */
  actionConfiguration?: ActionConfiguration | undefined;

  /**
   * <p>Represents information about a pipeline to a job worker.</p>
   *          <note>
   *             <p>Includes <code>pipelineArn</code> and <code>pipelineExecutionId</code> for
   *                 custom jobs.</p>
   *          </note>
   * @public
   */
  pipelineContext?: PipelineContext | undefined;

  /**
   * <p>The artifact supplied to the job.</p>
   * @public
   */
  inputArtifacts?: Artifact[] | undefined;

  /**
   * <p>The output of the job.</p>
   * @public
   */
  outputArtifacts?: Artifact[] | undefined;

  /**
   * <p>Represents an Amazon Web Services session credentials object. These credentials are
   *             temporary credentials that are issued by Amazon Web Services Secure Token Service (STS).
   *             They can be used to access input and output artifacts in the S3 bucket used to store
   *             artifacts for the pipeline in CodePipeline.</p>
   * @public
   */
  artifactCredentials?: AWSSessionCredentials | undefined;

  /**
   * <p>A system-generated token, such as a deployment ID, required by a job to continue
   *             the job asynchronously.</p>
   * @public
   */
  continuationToken?: string | undefined;

  /**
   * <p>Represents information about the key used to encrypt data in the artifact store,
   *             such as an KMS key. </p>
   * @public
   */
  encryptionKey?: EncryptionKey | undefined;
}

/**
 * <p>Represents information about the details of a job.</p>
 * @public
 */
export interface JobDetails {
  /**
   * <p>The unique system-generated ID of the job.</p>
   * @public
   */
  id?: string | undefined;

  /**
   * <p>Represents other information about a job required for a job worker to complete the
   *             job. </p>
   * @public
   */
  data?: JobData | undefined;

  /**
   * <p>The Amazon Web Services account ID associated with the job.</p>
   * @public
   */
  accountId?: string | undefined;
}

/**
 * <p>Represents the output of a <code>GetJobDetails</code> action.</p>
 * @public
 */
export interface GetJobDetailsOutput {
  /**
   * <p>The details of the job.</p>
   *          <note>
   *             <p>If AWSSessionCredentials is used, a long-running job can call
   *                     <code>GetJobDetails</code> again to obtain new credentials.</p>
   *          </note>
   * @public
   */
  jobDetails?: JobDetails | undefined;
}

/**
 * <p>Represents the input of a <code>GetPipeline</code> action.</p>
 * @public
 */
export interface GetPipelineInput {
  /**
   * <p>The name of the pipeline for which you want to get information. Pipeline names must
   *             be unique in an Amazon Web Services account.</p>
   * @public
   */
  name: string | undefined;

  /**
   * <p>The version number of the pipeline. If you do not specify a version, defaults to
   *             the current version.</p>
   * @public
   */
  version?: number | undefined;
}

/**
 * <p>Information about a pipeline.</p>
 * @public
 */
export interface PipelineMetadata {
  /**
   * <p>The Amazon Resource Name (ARN) of the pipeline.</p>
   * @public
   */
  pipelineArn?: string | undefined;

  /**
   * <p>The date and time the pipeline was created, in timestamp format.</p>
   * @public
   */
  created?: Date | undefined;

  /**
   * <p>The date and time the pipeline was last updated, in timestamp format.</p>
   * @public
   */
  updated?: Date | undefined;

  /**
   * <p>The date and time that polling for source changes (periodic checks) was stopped for
   *             the pipeline, in timestamp format. </p>
   *          <important>
   *             <p>Pipelines that are inactive for longer than 30 days will have polling disabled for
   *                 the pipeline. For more information, see <a href="https://docs.aws.amazon.com/codepipeline/latest/userguide/reference-pipeline-structure.html#metadata.pollingDisabledAt">pollingDisabledAt</a> in the pipeline structure reference. For the steps to
   *                 migrate your pipeline from polling to event-based change detection, see <a href="https://docs.aws.amazon.com/codepipeline/latest/userguide/update-change-detection.html">Migrate polling
   *                     pipelines to use event-based change detection</a>.</p>
   *          </important>
   *          <p>You can migrate (update) a polling pipeline to use event-based change detection. For
   *             example, for a pipeline with a CodeCommit source, we recommend you migrate
   *             (update) your pipeline to use CloudWatch Events. To learn more, see <a href="https://docs.aws.amazon.com/codepipeline/latest/userguide/update-change-detection.html">Migrate polling
   *                 pipelines to use event-based change detection</a> in the <i>CodePipeline User Guide</i>.</p>
   * @public
   */
  pollingDisabledAt?: Date | undefined;
}

/**
 * <p>Represents the output of a <code>GetPipeline</code> action.</p>
 * @public
 */
export interface GetPipelineOutput {
  /**
   * <p>Represents the structure of actions and stages to be performed in the pipeline.
   *         </p>
   * @public
   */
  pipeline?: PipelineDeclaration | undefined;

  /**
   * <p>Represents the pipeline metadata information returned as part of the output of a
   *                 <code>GetPipeline</code> action.</p>
   * @public
   */
  metadata?: PipelineMetadata | undefined;
}

/**
 * <p>The pipeline version was specified in an invalid format or cannot be
 *             found.</p>
 * @public
 */
export class PipelineVersionNotFoundException extends __BaseException {
  readonly name: "PipelineVersionNotFoundException" = "PipelineVersionNotFoundException";
  readonly $fault: "client" = "client";
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<PipelineVersionNotFoundException, __BaseException>) {
    super({
      name: "PipelineVersionNotFoundException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, PipelineVersionNotFoundException.prototype);
  }
}

/**
 * <p>Represents the input of a <code>GetPipelineExecution</code> action.</p>
 * @public
 */
export interface GetPipelineExecutionInput {
  /**
   * <p>The name of the pipeline about which you want to get execution details.</p>
   * @public
   */
  pipelineName: string | undefined;

  /**
   * <p>The ID of the pipeline execution about which you want to get execution
   *             details.</p>
   * @public
   */
  pipelineExecutionId: string | undefined;
}

/**
 * @public
 * @enum
 */
export const ExecutionType = {
  ROLLBACK: "ROLLBACK",
  STANDARD: "STANDARD",
} as const;

/**
 * @public
 */
export type ExecutionType = (typeof ExecutionType)[keyof typeof ExecutionType];

/**
 * <p>The metadata for the stage execution to be rolled back.</p>
 * @public
 */
export interface PipelineRollbackMetadata {
  /**
   * <p>The pipeline execution ID to which the stage will be rolled back.</p>
   * @public
   */
  rollbackTargetPipelineExecutionId?: string | undefined;
}

/**
 * @public
 * @enum
 */
export const PipelineExecutionStatus = {
  Cancelled: "Cancelled",
  Failed: "Failed",
  InProgress: "InProgress",
  Stopped: "Stopped",
  Stopping: "Stopping",
  Succeeded: "Succeeded",
  Superseded: "Superseded",
} as const;

/**
 * @public
 */
export type PipelineExecutionStatus = (typeof PipelineExecutionStatus)[keyof typeof PipelineExecutionStatus];

/**
 * @public
 * @enum
 */
export const TriggerType = {
  AutomatedRollback: "AutomatedRollback",
  CloudWatchEvent: "CloudWatchEvent",
  CreatePipeline: "CreatePipeline",
  ManualRollback: "ManualRollback",
  PollForSourceChanges: "PollForSourceChanges",
  PutActionRevision: "PutActionRevision",
  StartPipelineExecution: "StartPipelineExecution",
  Webhook: "Webhook",
  WebhookV2: "WebhookV2",
} as const;

/**
 * @public
 */
export type TriggerType = (typeof TriggerType)[keyof typeof TriggerType];

/**
 * <p>The interaction or event that started a pipeline execution.</p>
 * @public
 */
export interface ExecutionTrigger {
  /**
   * <p>The type of change-detection method, command, or user interaction that started a
   *             pipeline execution.</p>
   * @public
   */
  triggerType?: TriggerType | undefined;

  /**
   * <p>Detail related to the event that started a pipeline execution, such as the webhook ARN
   *             of the webhook that triggered the pipeline execution or the user ARN for a
   *             user-initiated <code>start-pipeline-execution</code> CLI command.</p>
   * @public
   */
  triggerDetail?: string | undefined;
}

/**
 * <p>A pipeline-level variable used for a pipeline execution.</p>
 * @public
 */
export interface ResolvedPipelineVariable {
  /**
   * <p>The name of a pipeline-level variable.</p>
   * @public
   */
  name?: string | undefined;

  /**
   * <p>The resolved value of a pipeline-level variable.</p>
   * @public
   */
  resolvedValue?: string | undefined;
}

/**
 * <p>Represents information about an execution of a pipeline.</p>
 * @public
 */
export interface PipelineExecution {
  /**
   * <p>The name of the pipeline with the specified pipeline execution.</p>
   * @public
   */
  pipelineName?: string | undefined;

  /**
   * <p>The version number of the pipeline with the specified pipeline execution.</p>
   * @public
   */
  pipelineVersion?: number | undefined;

  /**
   * <p>The ID of the pipeline execution.</p>
   * @public
   */
  pipelineExecutionId?: string | undefined;

  /**
   * <p>The status of the pipeline execution.</p>
   *          <ul>
   *             <li>
   *                <p>Cancelled: The pipeline’s definition was updated before the pipeline
   *                     execution could be completed.</p>
   *             </li>
   *             <li>
   *                <p>InProgress: The pipeline execution is currently running.</p>
   *             </li>
   *             <li>
   *                <p>Stopped: The pipeline execution was manually stopped. For more information,
   *                     see <a href="https://docs.aws.amazon.com/codepipeline/latest/userguide/concepts.html#concepts-executions-stopped">Stopped Executions</a>.</p>
   *             </li>
   *             <li>
   *                <p>Stopping: The pipeline execution received a request to be manually stopped.
   *                     Depending on the selected stop mode, the execution is either completing or
   *                     abandoning in-progress actions. For more information, see <a href="https://docs.aws.amazon.com/codepipeline/latest/userguide/concepts.html#concepts-executions-stopped">Stopped Executions</a>.</p>
   *             </li>
   *             <li>
   *                <p>Succeeded: The pipeline execution was completed successfully. </p>
   *             </li>
   *             <li>
   *                <p>Superseded: While this pipeline execution was waiting for the next stage to
   *                     be completed, a newer pipeline execution advanced and continued through the
   *                     pipeline instead. For more information, see <a href="https://docs.aws.amazon.com/codepipeline/latest/userguide/concepts.html#concepts-superseded">Superseded Executions</a>.</p>
   *             </li>
   *             <li>
   *                <p>Failed: The pipeline execution was not completed successfully.</p>
   *             </li>
   *          </ul>
   * @public
   */
  status?: PipelineExecutionStatus | undefined;

  /**
   * <p>A summary that contains a description of the pipeline execution status.</p>
   * @public
   */
  statusSummary?: string | undefined;

  /**
   * <p>A list of <code>ArtifactRevision</code> objects included in a pipeline
   *             execution.</p>
   * @public
   */
  artifactRevisions?: ArtifactRevision[] | undefined;

  /**
   * <p>A list of pipeline variables used for the pipeline execution.</p>
   * @public
   */
  variables?: ResolvedPipelineVariable[] | undefined;

  /**
   * <p>The interaction or event that started a pipeline execution.</p>
   * @public
   */
  trigger?: ExecutionTrigger | undefined;

  /**
   * <p>The method that the pipeline will use to handle multiple executions. The default
   *             mode is SUPERSEDED.</p>
   * @public
   */
  executionMode?: ExecutionMode | undefined;

  /**
   * <p>The type of the pipeline execution.</p>
   * @public
   */
  executionType?: ExecutionType | undefined;

  /**
   * <p>The metadata about the execution pertaining to stage rollback.</p>
   * @public
   */
  rollbackMetadata?: PipelineRollbackMetadata | undefined;
}

/**
 * <p>Represents the output of a <code>GetPipelineExecution</code> action.</p>
 * @public
 */
export interface GetPipelineExecutionOutput {
  /**
   * <p>Represents information about the execution of a pipeline.</p>
   * @public
   */
  pipelineExecution?: PipelineExecution | undefined;
}

/**
 * <p>The pipeline execution was specified in an invalid format or cannot be found, or an
 *             execution ID does not belong to the specified pipeline. </p>
 * @public
 */
export class PipelineExecutionNotFoundException extends __BaseException {
  readonly name: "PipelineExecutionNotFoundException" = "PipelineExecutionNotFoundException";
  readonly $fault: "client" = "client";
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<PipelineExecutionNotFoundException, __BaseException>) {
    super({
      name: "PipelineExecutionNotFoundException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, PipelineExecutionNotFoundException.prototype);
  }
}

/**
 * <p>Represents the input of a <code>GetPipelineState</code> action.</p>
 * @public
 */
export interface GetPipelineStateInput {
  /**
   * <p>The name of the pipeline about which you want to get information.</p>
   * @public
   */
  name: string | undefined;
}

/**
 * @public
 * @enum
 */
export const ConditionExecutionStatus = {
  Abandoned: "Abandoned",
  Cancelled: "Cancelled",
  Errored: "Errored",
  Failed: "Failed",
  InProgress: "InProgress",
  Overridden: "Overridden",
  Succeeded: "Succeeded",
} as const;

/**
 * @public
 */
export type ConditionExecutionStatus = (typeof ConditionExecutionStatus)[keyof typeof ConditionExecutionStatus];

/**
 * <p>The run of a condition.</p>
 * @public
 */
export interface ConditionExecution {
  /**
   * <p>The status of the run for a condition.</p>
   * @public
   */
  status?: ConditionExecutionStatus | undefined;

  /**
   * <p>The summary of information about a run for a condition.</p>
   * @public
   */
  summary?: string | undefined;

  /**
   * <p>The last status change of the condition.</p>
   * @public
   */
  lastStatusChange?: Date | undefined;
}

/**
 * <p>The change to a rule that creates a revision of the rule.</p>
 * @public
 */
export interface RuleRevision {
  /**
   * <p>The system-generated unique ID that identifies the revision number of the rule.</p>
   * @public
   */
  revisionId: string | undefined;

  /**
   * <p>The unique identifier of the change that set the state to this revision (for example,
   *             a deployment ID or timestamp).</p>
   * @public
   */
  revisionChangeId: string | undefined;

  /**
   * <p>The date and time when the most recent version of the rule was created, in timestamp
   *             format.</p>
   * @public
   */
  created: Date | undefined;
}

/**
 * @public
 * @enum
 */
export const RuleExecutionStatus = {
  Abandoned: "Abandoned",
  Failed: "Failed",
  InProgress: "InProgress",
  Succeeded: "Succeeded",
} as const;

/**
 * @public
 */
export type RuleExecutionStatus = (typeof RuleExecutionStatus)[keyof typeof RuleExecutionStatus];

/**
 * <p>Represents information about each time a rule is run as part of the pipeline execution
 *             for a pipeline configured with conditions.</p>
 * @public
 */
export interface RuleExecution {
  /**
   * <p>The execution ID for the run of the rule.</p>
   * @public
   */
  ruleExecutionId?: string | undefined;

  /**
   * <p>The status of the run of the rule, such as FAILED.</p>
   * @public
   */
  status?: RuleExecutionStatus | undefined;

  /**
   * <p>A summary of the run of the rule.</p>
   * @public
   */
  summary?: string | undefined;

  /**
   * <p>The last status change of the rule.</p>
   * @public
   */
  lastStatusChange?: Date | undefined;

  /**
   * <p>The system-generated token used to identify a unique request.</p>
   * @public
   */
  token?: string | undefined;

  /**
   * <p>The ARN of the user who last changed the rule.</p>
   * @public
   */
  lastUpdatedBy?: string | undefined;

  /**
   * <p>The external ID of the run of the rule.</p>
   * @public
   */
  externalExecutionId?: string | undefined;

  /**
   * <p>The URL of a resource external to Amazon Web Services that is used when running the
   *             rule (for example, an external repository URL).</p>
   * @public
   */
  externalExecutionUrl?: string | undefined;

  /**
   * <p>Represents information about an error in CodePipeline.</p>
   * @public
   */
  errorDetails?: ErrorDetails | undefined;
}

/**
 * <p>Returns information about the state of a rule.</p>
 *          <note>
 *             <p>Values returned in the <code>revisionId</code> field indicate the rule revision
 *                 information, such as the commit ID, for the current state.</p>
 *          </note>
 * @public
 */
export interface RuleState {
  /**
   * <p>The name of the rule.</p>
   * @public
   */
  ruleName?: string | undefined;

  /**
   * <p>The ID of the current revision of the artifact successfully worked on by the
   *             job.</p>
   * @public
   */
  currentRevision?: RuleRevision | undefined;

  /**
   * <p>Represents information about the latest run of an rule.</p>
   * @public
   */
  latestExecution?: RuleExecution | undefined;

  /**
   * <p>A URL link for more information about the state of the action, such as a details
   *             page.</p>
   * @public
   */
  entityUrl?: string | undefined;

  /**
   * <p>A URL link for more information about the revision, such as a commit details
   *             page.</p>
   * @public
   */
  revisionUrl?: string | undefined;
}

/**
 * <p>Information about the state of the condition.</p>
 * @public
 */
export interface ConditionState {
  /**
   * <p>The state of the latest run of the rule.</p>
   * @public
   */
  latestExecution?: ConditionExecution | undefined;

  /**
   * <p>The state of the rules for the condition.</p>
   * @public
   */
  ruleStates?: RuleState[] | undefined;
}

/**
 * <p>Represents information about the run of a condition for a stage.</p>
 * @public
 */
export interface StageConditionsExecution {
  /**
   * <p>The status of a run of a condition for a stage.</p>
   * @public
   */
  status?: ConditionExecutionStatus | undefined;

  /**
   * <p>A summary of the run of the condition for a stage.</p>
   * @public
   */
  summary?: string | undefined;
}

/**
 * <p>The state of a run of a condition for a stage.</p>
 * @public
 */
export interface StageConditionState {
  /**
   * <p>Represents information about the latest run of a condition for a stage.</p>
   * @public
   */
  latestExecution?: StageConditionsExecution | undefined;

  /**
   * <p>The states of the conditions for a run of a condition for a stage.</p>
   * @public
   */
  conditionStates?: ConditionState[] | undefined;
}

/**
 * @public
 * @enum
 */
export const StageExecutionStatus = {
  Cancelled: "Cancelled",
  Failed: "Failed",
  InProgress: "InProgress",
  Skipped: "Skipped",
  Stopped: "Stopped",
  Stopping: "Stopping",
  Succeeded: "Succeeded",
} as const;

/**
 * @public
 */
export type StageExecutionStatus = (typeof StageExecutionStatus)[keyof typeof StageExecutionStatus];

/**
 * <p>Represents information about the run of a stage.</p>
 * @public
 */
export interface StageExecution {
  /**
   * <p>The ID of the pipeline execution associated with the stage.</p>
   * @public
   */
  pipelineExecutionId: string | undefined;

  /**
   * <p>The status of the stage, or for a completed stage, the last status of the
   *             stage.</p>
   *          <note>
   *             <p>A status of cancelled means that the pipeline’s definition was updated before the
   *                 stage execution could be completed.</p>
   *          </note>
   * @public
   */
  status: StageExecutionStatus | undefined;

  /**
   * <p>The type of pipeline execution for the stage, such as a rollback pipeline
   *             execution.</p>
   * @public
   */
  type?: ExecutionType | undefined;
}

/**
 * <p>Represents information about the state of transitions between one stage and another
 *             stage.</p>
 * @public
 */
export interface TransitionState {
  /**
   * <p>Whether the transition between stages is enabled (true) or disabled
   *             (false).</p>
   * @public
   */
  enabled?: boolean | undefined;

  /**
   * <p>The ID of the user who last changed the transition state.</p>
   * @public
   */
  lastChangedBy?: string | undefined;

  /**
   * <p>The timestamp when the transition state was last changed.</p>
   * @public
   */
  lastChangedAt?: Date | undefined;

  /**
   * <p>The user-specified reason why the transition between two stages of a pipeline was
   *             disabled.</p>
   * @public
   */
  disabledReason?: string | undefined;
}

/**
 * @public
 * @enum
 */
export const RetryTrigger = {
  AutomatedStageRetry: "AutomatedStageRetry",
  ManualStageRetry: "ManualStageRetry",
} as const;

/**
 * @public
 */
export type RetryTrigger = (typeof RetryTrigger)[keyof typeof RetryTrigger];

/**
 * <p>The details of a specific automatic retry on stage failure, including the attempt
 *             number and trigger.</p>
 * @public
 */
export interface RetryStageMetadata {
  /**
   * <p>The number of attempts for a specific stage with automatic retry on stage failure. One
   *             attempt is allowed for automatic stage retry on failure.</p>
   * @public
   */
  autoStageRetryAttempt?: number | undefined;

  /**
   * <p>The number of attempts for a specific stage where manual retries have been made upon
   *             stage failure.</p>
   * @public
   */
  manualStageRetryAttempt?: number | undefined;

  /**
   * <p>The latest trigger for a specific stage where manual or automatic retries have been
   *             made upon stage failure.</p>
   * @public
   */
  latestRetryTrigger?: RetryTrigger | undefined;
}

/**
 * <p>Represents information about the state of the stage.</p>
 * @public
 */
export interface StageState {
  /**
   * <p>The name of the stage.</p>
   * @public
   */
  stageName?: string | undefined;

  /**
   * <p>Represents information about the run of a stage.</p>
   * @public
   */
  inboundExecution?: StageExecution | undefined;

  /**
   * <p>The inbound executions for a stage.</p>
   * @public
   */
  inboundExecutions?: StageExecution[] | undefined;

  /**
   * <p>The state of the inbound transition, which is either enabled or disabled.</p>
   * @public
   */
  inboundTransitionState?: TransitionState | undefined;

  /**
   * <p>The state of the stage.</p>
   * @public
   */
  actionStates?: ActionState[] | undefined;

  /**
   * <p>Information about the latest execution in the stage, including its ID and
   *             status.</p>
   * @public
   */
  latestExecution?: StageExecution | undefined;

  /**
   * <p>The state of the entry conditions for a stage.</p>
   * @public
   */
  beforeEntryConditionState?: StageConditionState | undefined;

  /**
   * <p>The state of the success conditions for a stage.</p>
   * @public
   */
  onSuccessConditionState?: StageConditionState | undefined;

  /**
   * <p>The state of the failure conditions for a stage.</p>
   * @public
   */
  onFailureConditionState?: StageConditionState | undefined;

  /**
   * <p>he details of a specific automatic retry on stage failure, including the attempt
   *             number and trigger.</p>
   * @public
   */
  retryStageMetadata?: RetryStageMetadata | undefined;
}

/**
 * <p>Represents the output of a <code>GetPipelineState</code> action.</p>
 * @public
 */
export interface GetPipelineStateOutput {
  /**
   * <p>The name of the pipeline for which you want to get the state.</p>
   * @public
   */
  pipelineName?: string | undefined;

  /**
   * <p>The version number of the pipeline.</p>
   *          <note>
   *             <p>A newly created pipeline is always assigned a version number of
   *                 <code>1</code>.</p>
   *          </note>
   * @public
   */
  pipelineVersion?: number | undefined;

  /**
   * <p>A list of the pipeline stage output information, including stage name, state, most
   *             recent run details, whether the stage is disabled, and other data.</p>
   * @public
   */
  stageStates?: StageState[] | undefined;

  /**
   * <p>The date and time the pipeline was created, in timestamp format.</p>
   * @public
   */
  created?: Date | undefined;

  /**
   * <p>The date and time the pipeline was last updated, in timestamp format.</p>
   * @public
   */
  updated?: Date | undefined;
}

/**
 * <p>Represents the input of a <code>GetThirdPartyJobDetails</code> action.</p>
 * @public
 */
export interface GetThirdPartyJobDetailsInput {
  /**
   * <p>The unique system-generated ID used for identifying the job.</p>
   * @public
   */
  jobId: string | undefined;

  /**
   * <p>The clientToken portion of the clientId and clientToken pair used to verify that
   *             the calling entity is allowed access to the job and its details.</p>
   * @public
   */
  clientToken: string | undefined;
}

/**
 * <p>Represents information about the job data for a partner action.</p>
 * @public
 */
export interface ThirdPartyJobData {
  /**
   * <p>Represents information about an action type.</p>
   * @public
   */
  actionTypeId?: ActionTypeId | undefined;

  /**
   * <p>Represents information about an action configuration.</p>
   * @public
   */
  actionConfiguration?: ActionConfiguration | undefined;

  /**
   * <p>Represents information about a pipeline to a job worker.</p>
   *          <note>
   *             <p>Does not include <code>pipelineArn</code> and <code>pipelineExecutionId</code>
   *                 for ThirdParty jobs.</p>
   *          </note>
   * @public
   */
  pipelineContext?: PipelineContext | undefined;

  /**
   * <p>The name of the artifact that is worked on by the action, if any. This name might
   *             be system-generated, such as "MyApp", or it might be defined by the user when the action
   *             is created. The input artifact name must match the name of an output artifact generated
   *             by an action in an earlier action or stage of the pipeline.</p>
   * @public
   */
  inputArtifacts?: Artifact[] | undefined;

  /**
   * <p>The name of the artifact that is the result of the action, if any. This name might
   *             be system-generated, such as "MyBuiltApp", or it might be defined by the user when the
   *             action is created.</p>
   * @public
   */
  outputArtifacts?: Artifact[] | undefined;

  /**
   * <p>Represents an Amazon Web Services session credentials object. These credentials are
   *             temporary credentials that are issued by Amazon Web Services Secure Token Service (STS).
   *             They can be used to access input and output artifacts in the S3 bucket used to store
   *             artifact for the pipeline in CodePipeline. </p>
   * @public
   */
  artifactCredentials?: AWSSessionCredentials | undefined;

  /**
   * <p>A system-generated token, such as a CodeDeploy deployment ID, that a job requires
   *             to continue the job asynchronously.</p>
   * @public
   */
  continuationToken?: string | undefined;

  /**
   * <p>The encryption key used to encrypt and decrypt data in the artifact store for the
   *             pipeline, such as an Amazon Web Services Key Management Service (Amazon Web Services KMS)
   *             key. This is optional and might not be present.</p>
   * @public
   */
  encryptionKey?: EncryptionKey | undefined;
}

/**
 * <p>The details of a job sent in response to a <code>GetThirdPartyJobDetails</code>
 *             request.</p>
 * @public
 */
export interface ThirdPartyJobDetails {
  /**
   * <p>The identifier used to identify the job details in CodePipeline.</p>
   * @public
   */
  id?: string | undefined;

  /**
   * <p>The data to be returned by the third party job worker.</p>
   * @public
   */
  data?: ThirdPartyJobData | undefined;

  /**
   * <p>A system-generated random number that CodePipeline uses to ensure that the
   *             job is being worked on by only one job worker. Use this number in an <a>AcknowledgeThirdPartyJob</a> request.</p>
   * @public
   */
  nonce?: string | undefined;
}

/**
 * <p>Represents the output of a <code>GetThirdPartyJobDetails</code> action.</p>
 * @public
 */
export interface GetThirdPartyJobDetailsOutput {
  /**
   * <p>The details of the job, including any protected values defined for the
   *             job.</p>
   * @public
   */
  jobDetails?: ThirdPartyJobDetails | undefined;
}

/**
 * <p>The job was specified in an invalid format or cannot be found.</p>
 * @public
 */
export class InvalidJobException extends __BaseException {
  readonly name: "InvalidJobException" = "InvalidJobException";
  readonly $fault: "client" = "client";
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<InvalidJobException, __BaseException>) {
    super({
      name: "InvalidJobException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, InvalidJobException.prototype);
  }
}

/**
 * <p>The next token was specified in an invalid format. Make sure that the next token
 *             you provide is the token returned by a previous call.</p>
 * @public
 */
export class InvalidNextTokenException extends __BaseException {
  readonly name: "InvalidNextTokenException" = "InvalidNextTokenException";
  readonly $fault: "client" = "client";
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<InvalidNextTokenException, __BaseException>) {
    super({
      name: "InvalidNextTokenException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, InvalidNextTokenException.prototype);
  }
}

/**
 * @public
 */
export interface ListActionExecutionsInput {
  /**
   * <p> The name of the pipeline for which you want to list action execution history.</p>
   * @public
   */
  pipelineName: string | undefined;

  /**
   * <p>Input information used to filter action execution history.</p>
   * @public
   */
  filter?: ActionExecutionFilter | undefined;

  /**
   * <p>The maximum number of results to return in a single call. To retrieve the remaining
   *             results, make another call with the returned nextToken value. Action execution history
   *             is retained for up to 12 months, based on action execution start times. Default value is
   *             100. </p>
   * @public
   */
  maxResults?: number | undefined;

  /**
   * <p>The token that was returned from the previous <code>ListActionExecutions</code> call,
   *             which can be used to return the next set of action executions in the list.</p>
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListActionExecutionsOutput {
  /**
   * <p>The details for a list of recent executions, such as action execution ID.</p>
   * @public
   */
  actionExecutionDetails?: ActionExecutionDetail[] | undefined;

  /**
   * <p>If the amount of returned information is significantly large, an identifier is also
   *             returned and can be used in a subsequent <code>ListActionExecutions</code> call to
   *             return the next set of action executions in the list.</p>
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * <p>Represents the input of a <code>ListActionTypes</code> action.</p>
 * @public
 */
export interface ListActionTypesInput {
  /**
   * <p>Filters the list of action types to those created by a specified entity.</p>
   * @public
   */
  actionOwnerFilter?: ActionOwner | undefined;

  /**
   * <p>An identifier that was returned from the previous list action types call, which can
   *             be used to return the next set of action types in the list.</p>
   * @public
   */
  nextToken?: string | undefined;

  /**
   * <p>The Region to filter on for the list of action types.</p>
   * @public
   */
  regionFilter?: string | undefined;
}

/**
 * <p>Represents the output of a <code>ListActionTypes</code> action.</p>
 * @public
 */
export interface ListActionTypesOutput {
  /**
   * <p>Provides details of the action types.</p>
   * @public
   */
  actionTypes: ActionType[] | undefined;

  /**
   * <p>If the amount of returned information is significantly large, an identifier is also
   *             returned. It can be used in a subsequent list action types call to return the next set
   *             of action types in the list.</p>
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * <p>Filter for pipeline executions that have successfully completed the stage in the
 *             current pipeline version.</p>
 * @public
 */
export interface SucceededInStageFilter {
  /**
   * <p>The name of the stage for filtering for pipeline executions where the stage was
   *             successful in the current pipeline version.</p>
   * @public
   */
  stageName?: string | undefined;
}

/**
 * <p>The pipeline execution to filter on.</p>
 * @public
 */
export interface PipelineExecutionFilter {
  /**
   * <p>Filter for pipeline executions where the stage was successful in the current pipeline
   *             version.</p>
   * @public
   */
  succeededInStage?: SucceededInStageFilter | undefined;
}

/**
 * <p>Represents the input of a <code>ListPipelineExecutions</code> action.</p>
 * @public
 */
export interface ListPipelineExecutionsInput {
  /**
   * <p>The name of the pipeline for which you want to get execution summary
   *             information.</p>
   * @public
   */
  pipelineName: string | undefined;

  /**
   * <p>The maximum number of results to return in a single call. To retrieve the remaining
   *             results, make another call with the returned nextToken value. Pipeline history is
   *             limited to the most recent 12 months, based on pipeline execution start times. Default
   *             value is 100.</p>
   * @public
   */
  maxResults?: number | undefined;

  /**
   * <p>The pipeline execution to filter on.</p>
   * @public
   */
  filter?: PipelineExecutionFilter | undefined;

  /**
   * <p>The token that was returned from the previous <code>ListPipelineExecutions</code>
   *             call, which can be used to return the next set of pipeline executions in the
   *             list.</p>
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * <p>Information about the version (or revision) of a source artifact that initiated a
 *             pipeline execution.</p>
 * @public
 */
export interface SourceRevision {
  /**
   * <p>The name of the action that processed the revision to the source
   *             artifact.</p>
   * @public
   */
  actionName: string | undefined;

  /**
   * <p>The system-generated unique ID that identifies the revision number of the
   *             artifact.</p>
   * @public
   */
  revisionId?: string | undefined;

  /**
   * <p>Summary information about the most recent revision of the artifact. For GitHub and
   *             CodeCommit repositories, the commit message. For Amazon S3 buckets or actions,
   *             the user-provided content of a <code>codepipeline-artifact-revision-summary</code> key
   *             specified in the object metadata.</p>
   * @public
   */
  revisionSummary?: string | undefined;

  /**
   * <p>The commit ID for the artifact revision. For artifacts stored in GitHub or
   *             CodeCommit repositories, the commit ID is linked to a commit details page.</p>
   * @public
   */
  revisionUrl?: string | undefined;
}

/**
 * <p>The interaction that stopped a pipeline execution.</p>
 * @public
 */
export interface StopExecutionTrigger {
  /**
   * <p>The user-specified reason the pipeline was stopped.</p>
   * @public
   */
  reason?: string | undefined;
}

/**
 * <p>Summary information about a pipeline execution.</p>
 * @public
 */
export interface PipelineExecutionSummary {
  /**
   * <p>The ID of the pipeline execution.</p>
   * @public
   */
  pipelineExecutionId?: string | undefined;

  /**
   * <p>The status of the pipeline execution.</p>
   *          <ul>
   *             <li>
   *                <p>InProgress: The pipeline execution is currently running.</p>
   *             </li>
   *             <li>
   *                <p>Stopped: The pipeline execution was manually stopped. For more information,
   *                     see <a href="https://docs.aws.amazon.com/codepipeline/latest/userguide/concepts.html#concepts-executions-stopped">Stopped Executions</a>.</p>
   *             </li>
   *             <li>
   *                <p>Stopping: The pipeline execution received a request to be manually stopped.
   *                     Depending on the selected stop mode, the execution is either completing or
   *                     abandoning in-progress actions. For more information, see <a href="https://docs.aws.amazon.com/codepipeline/latest/userguide/concepts.html#concepts-executions-stopped">Stopped Executions</a>.</p>
   *             </li>
   *             <li>
   *                <p>Succeeded: The pipeline execution was completed successfully. </p>
   *             </li>
   *             <li>
   *                <p>Superseded: While this pipeline execution was waiting for the next stage to
   *                     be completed, a newer pipeline execution advanced and continued through the
   *                     pipeline instead. For more information, see <a href="https://docs.aws.amazon.com/codepipeline/latest/userguide/concepts.html#concepts-superseded">Superseded Executions</a>.</p>
   *             </li>
   *             <li>
   *                <p>Failed: The pipeline execution was not completed successfully.</p>
   *             </li>
   *          </ul>
   * @public
   */
  status?: PipelineExecutionStatus | undefined;

  /**
   * <p>Status summary for the pipeline.</p>
   * @public
   */
  statusSummary?: string | undefined;

  /**
   * <p>The date and time when the pipeline execution began, in timestamp format.</p>
   * @public
   */
  startTime?: Date | undefined;

  /**
   * <p>The date and time of the last change to the pipeline execution, in timestamp
   *             format.</p>
   * @public
   */
  lastUpdateTime?: Date | undefined;

  /**
   * <p>A list of the source artifact revisions that initiated a pipeline
   *             execution.</p>
   * @public
   */
  sourceRevisions?: SourceRevision[] | undefined;

  /**
   * <p>The interaction or event that started a pipeline execution, such as automated change
   *             detection or a <code>StartPipelineExecution</code> API call.</p>
   * @public
   */
  trigger?: ExecutionTrigger | undefined;

  /**
   * <p>The interaction that stopped a pipeline execution.</p>
   * @public
   */
  stopTrigger?: StopExecutionTrigger | undefined;

  /**
   * <p>The method that the pipeline will use to handle multiple executions. The default
   *             mode is SUPERSEDED.</p>
   * @public
   */
  executionMode?: ExecutionMode | undefined;

  /**
   * <p>Type of the pipeline execution.</p>
   * @public
   */
  executionType?: ExecutionType | undefined;

  /**
   * <p>The metadata for the stage execution to be rolled back.</p>
   * @public
   */
  rollbackMetadata?: PipelineRollbackMetadata | undefined;
}

/**
 * <p>Represents the output of a <code>ListPipelineExecutions</code> action.</p>
 * @public
 */
export interface ListPipelineExecutionsOutput {
  /**
   * <p>A list of executions in the history of a pipeline.</p>
   * @public
   */
  pipelineExecutionSummaries?: PipelineExecutionSummary[] | undefined;

  /**
   * <p>A token that can be used in the next <code>ListPipelineExecutions</code> call. To
   *             view all items in the list, continue to call this operation with each subsequent token
   *             until no more nextToken values are returned.</p>
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * <p>Represents the input of a <code>ListPipelines</code> action.</p>
 * @public
 */
export interface ListPipelinesInput {
  /**
   * <p>An identifier that was returned from the previous list pipelines call. It can be
   *             used to return the next set of pipelines in the list.</p>
   * @public
   */
  nextToken?: string | undefined;

  /**
   * <p>The maximum number of pipelines to return in a single call. To retrieve the remaining
   *             pipelines, make another call with the returned nextToken value. The minimum value you
   *             can specify is 1. The maximum accepted value is 1000.</p>
   * @public
   */
  maxResults?: number | undefined;
}

/**
 * <p>Returns a summary of a pipeline.</p>
 * @public
 */
export interface PipelineSummary {
  /**
   * <p>The name of the pipeline.</p>
   * @public
   */
  name?: string | undefined;

  /**
   * <p>The version number of the pipeline.</p>
   * @public
   */
  version?: number | undefined;

  /**
   * <p>CodePipeline provides the following pipeline types, which differ in
   *             characteristics and price, so that you can tailor your pipeline features and cost to the
   *             needs of your applications.</p>
   *          <ul>
   *             <li>
   *                <p>V1 type pipelines have a JSON structure that contains standard pipeline,
   *                     stage, and action-level parameters.</p>
   *             </li>
   *             <li>
   *                <p>V2 type pipelines have the same structure as a V1 type, along with additional
   *                     parameters for release safety and trigger configuration.</p>
   *             </li>
   *          </ul>
   *          <important>
   *             <p>Including V2 parameters, such as triggers on Git tags, in the pipeline JSON when
   *                 creating or updating a pipeline will result in the pipeline having the V2 type of
   *                 pipeline and the associated costs.</p>
   *          </important>
   *          <p>For information about pricing for CodePipeline, see <a href="http://aws.amazon.com/codepipeline/pricing/">Pricing</a>.</p>
   *          <p> For information about which type of pipeline to choose, see <a href="https://docs.aws.amazon.com/codepipeline/latest/userguide/pipeline-types-planning.html">What type of
   *                 pipeline is right for me?</a>.</p>
   * @public
   */
  pipelineType?: PipelineType | undefined;

  /**
   * <p>The method that the pipeline will use to handle multiple executions. The default
   *             mode is SUPERSEDED.</p>
   * @public
   */
  executionMode?: ExecutionMode | undefined;

  /**
   * <p>The date and time the pipeline was created, in timestamp format.</p>
   * @public
   */
  created?: Date | undefined;

  /**
   * <p>The date and time of the last update to the pipeline, in timestamp
   *             format.</p>
   * @public
   */
  updated?: Date | undefined;
}

/**
 * <p>Represents the output of a <code>ListPipelines</code> action.</p>
 * @public
 */
export interface ListPipelinesOutput {
  /**
   * <p>The list of pipelines.</p>
   * @public
   */
  pipelines?: PipelineSummary[] | undefined;

  /**
   * <p>If the amount of returned information is significantly large, an identifier is also
   *             returned. It can be used in a subsequent list pipelines call to return the next set of
   *             pipelines in the list.</p>
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * <p>Filter values for the rule execution.</p>
 * @public
 */
export interface RuleExecutionFilter {
  /**
   * <p>The pipeline execution ID used to filter rule execution history.</p>
   * @public
   */
  pipelineExecutionId?: string | undefined;

  /**
   * <p>The field that specifies to filter on the latest execution in the
   *             pipeline.</p>
   *          <note>
   *             <p>Filtering on the latest execution is available for executions run on or after
   *                 February 08, 2024.</p>
   *          </note>
   * @public
   */
  latestInPipelineExecution?: LatestInPipelineExecutionFilter | undefined;
}

/**
 * @public
 */
export interface ListRuleExecutionsInput {
  /**
   * <p>The name of the pipeline for which you want to get execution summary
   *             information.</p>
   * @public
   */
  pipelineName: string | undefined;

  /**
   * <p>Input information used to filter rule execution history.</p>
   * @public
   */
  filter?: RuleExecutionFilter | undefined;

  /**
   * <p>The maximum number of results to return in a single call. To retrieve the remaining
   *             results, make another call with the returned nextToken value. Pipeline history is
   *             limited to the most recent 12 months, based on pipeline execution start times. Default
   *             value is 100.</p>
   * @public
   */
  maxResults?: number | undefined;

  /**
   * <p>The token that was returned from the previous <code>ListRuleExecutions</code> call,
   *             which can be used to return the next set of rule executions in the list.</p>
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * <p>Input information used for a rule execution.</p>
 * @public
 */
export interface RuleExecutionInput {
  /**
   * <p>The ID for the rule type, which is made up of the combined values for category, owner,
   *             provider, and version. For more information about conditions, see <a href="https://docs.aws.amazon.com/codepipeline/latest/userguide/stage-conditions.html">Stage
   *                 conditions</a>. For more information about rules, see the <a href="https://docs.aws.amazon.com/codepipeline/latest/userguide/rule-reference.html">CodePipeline rule reference</a>.</p>
   * @public
   */
  ruleTypeId?: RuleTypeId | undefined;

  /**
   * <p>Configuration data for a rule execution, such as the resolved values for that
   *             run.</p>
   * @public
   */
  configuration?: Record<string, string> | undefined;

  /**
   * <p>Configuration data for a rule execution with all variable references replaced with
   *             their real values for the execution.</p>
   * @public
   */
  resolvedConfiguration?: Record<string, string> | undefined;

  /**
   * <p>The ARN of the IAM service role that performs the declared rule. This is assumed
   *             through the roleArn for the pipeline.</p>
   * @public
   */
  roleArn?: string | undefined;

  /**
   * <p>The Amazon Web Services Region for the rule, such as us-east-1.</p>
   * @public
   */
  region?: string | undefined;

  /**
   * <p>Details of input artifacts of the rule that correspond to the rule execution.</p>
   * @public
   */
  inputArtifacts?: ArtifactDetail[] | undefined;
}

/**
 * <p>Execution result information, such as the external execution ID.</p>
 * @public
 */
export interface RuleExecutionResult {
  /**
   * <p>The external ID for the rule execution.</p>
   * @public
   */
  externalExecutionId?: string | undefined;

  /**
   * <p>The external provider summary for the rule execution.</p>
   * @public
   */
  externalExecutionSummary?: string | undefined;

  /**
   * <p>The deepest external link to the external resource (for example, a repository URL or
   *             deployment endpoint) that is used when running the rule.</p>
   * @public
   */
  externalExecutionUrl?: string | undefined;

  /**
   * <p>Represents information about an error in CodePipeline.</p>
   * @public
   */
  errorDetails?: ErrorDetails | undefined;
}

/**
 * <p>Output details listed for a rule execution, such as the rule execution result.</p>
 * @public
 */
export interface RuleExecutionOutput {
  /**
   * <p>Execution result information listed in the output details for a rule execution.</p>
   * @public
   */
  executionResult?: RuleExecutionResult | undefined;
}

/**
 * <p>The details of the runs for a rule and the results produced on an artifact as it
 *             passes through stages in the pipeline.</p>
 * @public
 */
export interface RuleExecutionDetail {
  /**
   * <p>The ID of the pipeline execution in the stage where the rule was run. Use the <a>GetPipelineState</a> action to retrieve the current pipelineExecutionId of
   *             the stage.</p>
   * @public
   */
  pipelineExecutionId?: string | undefined;

  /**
   * <p>The ID of the run for the rule.</p>
   * @public
   */
  ruleExecutionId?: string | undefined;

  /**
   * <p>The version number of the pipeline with the stage where the rule was run.</p>
   * @public
   */
  pipelineVersion?: number | undefined;

  /**
   * <p>The name of the stage where the rule was run.</p>
   * @public
   */
  stageName?: string | undefined;

  /**
   * <p>The name of the rule that was run in the stage.</p>
   * @public
   */
  ruleName?: string | undefined;

  /**
   * <p>The start time of the rule execution.</p>
   * @public
   */
  startTime?: Date | undefined;

  /**
   * <p>The date and time of the last change to the rule execution, in timestamp
   *             format.</p>
   * @public
   */
  lastUpdateTime?: Date | undefined;

  /**
   * <p>The ARN of the user who changed the rule execution details.</p>
   * @public
   */
  updatedBy?: string | undefined;

  /**
   * <p>The status of the rule execution. Status categories are <code>InProgress</code>,
   *                 <code>Succeeded</code>, and <code>Failed</code>. </p>
   * @public
   */
  status?: RuleExecutionStatus | undefined;

  /**
   * <p>Input details for the rule execution, such as role ARN, Region, and input
   *             artifacts.</p>
   * @public
   */
  input?: RuleExecutionInput | undefined;

  /**
   * <p>Output details for the rule execution, such as the rule execution result.</p>
   * @public
   */
  output?: RuleExecutionOutput | undefined;
}

/**
 * @public
 */
export interface ListRuleExecutionsOutput {
  /**
   * <p>Details about the output for listing rule executions.</p>
   * @public
   */
  ruleExecutionDetails?: RuleExecutionDetail[] | undefined;

  /**
   * <p>A token that can be used in the next <code>ListRuleExecutions</code> call. To view all
   *             items in the list, continue to call this operation with each subsequent token until no
   *             more nextToken values are returned.</p>
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListRuleTypesInput {
  /**
   * <p>The rule owner to filter on.</p>
   * @public
   */
  ruleOwnerFilter?: RuleOwner | undefined;

  /**
   * <p>The rule Region to filter on.</p>
   * @public
   */
  regionFilter?: string | undefined;
}

/**
 * @public
 * @enum
 */
export const RuleConfigurationPropertyType = {
  Boolean: "Boolean",
  Number: "Number",
  String: "String",
} as const;

/**
 * @public
 */
export type RuleConfigurationPropertyType =
  (typeof RuleConfigurationPropertyType)[keyof typeof RuleConfigurationPropertyType];

/**
 * <p>Represents information about a rule configuration property.</p>
 * @public
 */
export interface RuleConfigurationProperty {
  /**
   * <p>The name of the rule configuration property.</p>
   * @public
   */
  name: string | undefined;

  /**
   * <p>Whether the configuration property is a required value.</p>
   * @public
   */
  required: boolean | undefined;

  /**
   * <p>Whether the configuration property is a key.</p>
   * @public
   */
  key: boolean | undefined;

  /**
   * <p>Whether the configuration property is secret.</p>
   *          <p>When updating a pipeline, passing * * * * * without changing any other values of
   *             the action preserves the previous value of the secret.</p>
   * @public
   */
  secret: boolean | undefined;

  /**
   * <p>Indicates whether the property can be queried.</p>
   *          <p>If you create a pipeline with a condition and rule, and that rule contains a
   *             queryable property, the value for that configuration property is subject to other
   *             restrictions. The value must be less than or equal to twenty (20) characters. The value
   *             can contain only alphanumeric characters, underscores, and hyphens.</p>
   * @public
   */
  queryable?: boolean | undefined;

  /**
   * <p>The description of the action configuration property that is displayed to
   *             users.</p>
   * @public
   */
  description?: string | undefined;

  /**
   * <p>The type of the configuration property.</p>
   * @public
   */
  type?: RuleConfigurationPropertyType | undefined;
}

/**
 * <p>Returns information about the settings for a rule type.</p>
 * @public
 */
export interface RuleTypeSettings {
  /**
   * <p>The URL of a sign-up page where users can sign up for an external service and perform
   *             initial configuration of the action provided by that service.</p>
   * @public
   */
  thirdPartyConfigurationUrl?: string | undefined;

  /**
   * <p>The URL returned to the CodePipeline console that provides a deep link to the
   *             resources of the external system, such as the configuration page for a CodeDeploy
   *             deployment group. This link is provided as part of the action display in the
   *             pipeline.</p>
   * @public
   */
  entityUrlTemplate?: string | undefined;

  /**
   * <p>The URL returned to the CodePipeline console that contains a link to the
   *             top-level landing page for the external system, such as the console page for CodeDeploy.
   *             This link is shown on the pipeline view page in the CodePipeline console and
   *             provides a link to the execution entity of the external action.</p>
   * @public
   */
  executionUrlTemplate?: string | undefined;

  /**
   * <p>The URL returned to the CodePipeline console that contains a link to the page
   *             where customers can update or change the configuration of the external action.</p>
   * @public
   */
  revisionUrlTemplate?: string | undefined;
}

/**
 * <p>The rule type, which is made up of the combined values for category, owner, provider,
 *             and version.</p>
 * @public
 */
export interface RuleType {
  /**
   * <p>Represents information about a rule type.</p>
   * @public
   */
  id: RuleTypeId | undefined;

  /**
   * <p>Returns information about the settings for a rule type.</p>
   * @public
   */
  settings?: RuleTypeSettings | undefined;

  /**
   * <p>The configuration properties for the rule type.</p>
   * @public
   */
  ruleConfigurationProperties?: RuleConfigurationProperty[] | undefined;

  /**
   * <p>Returns information about the details of an artifact.</p>
   * @public
   */
  inputArtifactDetails: ArtifactDetails | undefined;
}

/**
 * @public
 */
export interface ListRuleTypesOutput {
  /**
   * <p>Lists the rules that are configured for the condition.</p>
   * @public
   */
  ruleTypes: RuleType[] | undefined;
}

/**
 * <p>The specified resource ARN is invalid.</p>
 * @public
 */
export class InvalidArnException extends __BaseException {
  readonly name: "InvalidArnException" = "InvalidArnException";
  readonly $fault: "client" = "client";
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<InvalidArnException, __BaseException>) {
    super({
      name: "InvalidArnException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, InvalidArnException.prototype);
  }
}

/**
 * @public
 */
export interface ListTagsForResourceInput {
  /**
   * <p>The Amazon Resource Name (ARN) of the resource to get tags for.</p>
   * @public
   */
  resourceArn: string | undefined;

  /**
   * <p>The token that was returned from the previous API call, which would be used to return
   *             the next page of the list. The ListTagsforResource call lists all available tags in one
   *             call and does not use pagination.</p>
   * @public
   */
  nextToken?: string | undefined;

  /**
   * <p>The maximum number of results to return in a single call.</p>
   * @public
   */
  maxResults?: number | undefined;
}

/**
 * @public
 */
export interface ListTagsForResourceOutput {
  /**
   * <p>The tags for the resource.</p>
   * @public
   */
  tags?: Tag[] | undefined;

  /**
   * <p>If the amount of returned information is significantly large, an identifier is also
   *             returned and can be used in a subsequent API call to return the next page of the list.
   *             The ListTagsforResource call lists all available tags in one call and does not use
   *             pagination.</p>
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * <p>The resource was specified in an invalid format.</p>
 * @public
 */
export class ResourceNotFoundException extends __BaseException {
  readonly name: "ResourceNotFoundException" = "ResourceNotFoundException";
  readonly $fault: "client" = "client";
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
  }
}

/**
 * @public
 */
export interface ListWebhooksInput {
  /**
   * <p>The token that was returned from the previous ListWebhooks call, which can be used
   *             to return the next set of webhooks in the list.</p>
   * @public
   */
  NextToken?: string | undefined;

  /**
   * <p>The maximum number of results to return in a single call. To retrieve the remaining
   *             results, make another call with the returned nextToken value.</p>
   * @public
   */
  MaxResults?: number | undefined;
}

/**
 * @public
 * @enum
 */
export const WebhookAuthenticationType = {
  GITHUB_HMAC: "GITHUB_HMAC",
  IP: "IP",
  UNAUTHENTICATED: "UNAUTHENTICATED",
} as const;

/**
 * @public
 */
export type WebhookAuthenticationType = (typeof WebhookAuthenticationType)[keyof typeof WebhookAuthenticationType];

/**
 * <p>The authentication applied to incoming webhook trigger requests.</p>
 * @public
 */
export interface WebhookAuthConfiguration {
  /**
   * <p>The property used to configure acceptance of webhooks in an IP address range. For
   *             IP, only the <code>AllowedIPRange</code> property must be set. This property must be set
   *             to a valid CIDR range.</p>
   * @public
   */
  AllowedIPRange?: string | undefined;

  /**
   * <p>The property used to configure GitHub authentication. For GITHUB_HMAC, only the
   *                 <code>SecretToken</code> property must be set.</p>
   *          <important>
   *             <p>When creating CodePipeline webhooks, do not use your own credentials or
   *                 reuse the same secret token across multiple webhooks. For optimal security, generate
   *                 a unique secret token for each webhook you create. The secret token is an arbitrary
   *                 string that you provide, which GitHub uses to compute and sign the webhook payloads
   *                 sent to CodePipeline, for protecting the integrity and authenticity of the
   *                 webhook payloads. Using your own credentials or reusing the same token across
   *                 multiple webhooks can lead to security vulnerabilities.</p>
   *          </important>
   *          <note>
   *             <p>If a secret token was provided, it will be redacted in the response.</p>
   *          </note>
   * @public
   */
  SecretToken?: string | undefined;
}

/**
 * <p>The event criteria that specify when a webhook notification is sent to your
 *             URL.</p>
 * @public
 */
export interface WebhookFilterRule {
  /**
   * <p>A JsonPath expression that is applied to the body/payload of the webhook. The value
   *             selected by the JsonPath expression must match the value specified in the
   *                 <code>MatchEquals</code> field. Otherwise, the request is ignored. For more
   *             information, see <a href="https://github.com/json-path/JsonPath">Java JsonPath
   *                 implementation</a> in GitHub.</p>
   * @public
   */
  jsonPath: string | undefined;

  /**
   * <p>The value selected by the <code>JsonPath</code> expression must match what is
   *             supplied in the <code>MatchEquals</code> field. Otherwise, the request is ignored.
   *             Properties from the target action configuration can be included as placeholders in this
   *             value by surrounding the action configuration key with curly brackets. For example, if
   *             the value supplied here is "refs/heads/\{Branch\}" and the target action has an action
   *             configuration property called "Branch" with a value of "main", the
   *                 <code>MatchEquals</code> value is evaluated as "refs/heads/main". For a list of
   *             action configuration properties for built-in action types, see <a href="https://docs.aws.amazon.com/codepipeline/latest/userguide/reference-pipeline-structure.html#action-requirements">Pipeline Structure Reference Action Requirements</a>.</p>
   * @public
   */
  matchEquals?: string | undefined;
}

/**
 * <p>Represents information about a webhook and its definition.</p>
 * @public
 */
export interface WebhookDefinition {
  /**
   * <p>The name of the webhook.</p>
   * @public
   */
  name: string | undefined;

  /**
   * <p>The name of the pipeline you want to connect to the webhook.</p>
   * @public
   */
  targetPipeline: string | undefined;

  /**
   * <p>The name of the action in a pipeline you want to connect to the webhook. The action
   *             must be from the source (first) stage of the pipeline.</p>
   * @public
   */
  targetAction: string | undefined;

  /**
   * <p>A list of rules applied to the body/payload sent in the POST request to a webhook
   *             URL. All defined rules must pass for the request to be accepted and the pipeline
   *             started.</p>
   * @public
   */
  filters: WebhookFilterRule[] | undefined;

  /**
   * <p>Supported options are GITHUB_HMAC, IP, and UNAUTHENTICATED.</p>
   *          <important>
   *             <p>When creating CodePipeline webhooks, do not use your own credentials or
   *                 reuse the same secret token across multiple webhooks. For optimal security, generate
   *                 a unique secret token for each webhook you create. The secret token is an arbitrary
   *                 string that you provide, which GitHub uses to compute and sign the webhook payloads
   *                 sent to CodePipeline, for protecting the integrity and authenticity of the
   *                 webhook payloads. Using your own credentials or reusing the same token across
   *                 multiple webhooks can lead to security vulnerabilities.</p>
   *          </important>
   *          <note>
   *             <p>If a secret token was provided, it will be redacted in the response.</p>
   *          </note>
   *          <ul>
   *             <li>
   *                <p>For information about the authentication scheme implemented by GITHUB_HMAC,
   *                     see <a href="https://developer.github.com/webhooks/securing/">Securing your
   *                         webhooks</a> on the GitHub Developer website.</p>
   *             </li>
   *             <li>
   *                <p> IP rejects webhooks trigger requests unless they originate from an IP
   *                     address in the IP range whitelisted in the authentication
   *                     configuration.</p>
   *             </li>
   *             <li>
   *                <p> UNAUTHENTICATED accepts all webhook trigger requests regardless of
   *                     origin.</p>
   *             </li>
   *          </ul>
   * @public
   */
  authentication: WebhookAuthenticationType | undefined;

  /**
   * <p>Properties that configure the authentication applied to incoming webhook trigger
   *             requests. The required properties depend on the authentication type. For GITHUB_HMAC,
   *             only the <code>SecretToken </code>property must be set. For IP, only the
   *                 <code>AllowedIPRange </code>property must be set to a valid CIDR range. For
   *             UNAUTHENTICATED, no properties can be set.</p>
   * @public
   */
  authenticationConfiguration: WebhookAuthConfiguration | undefined;
}

/**
 * <p>The detail returned for each webhook after listing webhooks, such as the webhook
 *             URL, the webhook name, and the webhook ARN.</p>
 * @public
 */
export interface ListWebhookItem {
  /**
   * <p>The detail returned for each webhook, such as the webhook authentication type and
   *             filter rules.</p>
   * @public
   */
  definition: WebhookDefinition | undefined;

  /**
   * <p>A unique URL generated by CodePipeline. When a POST request is made to this
   *             URL, the defined pipeline is started as long as the body of the post request satisfies
   *             the defined authentication and filtering conditions. Deleting and re-creating a webhook
   *             makes the old URL invalid and generates a new one.</p>
   * @public
   */
  url: string | undefined;

  /**
   * <p>The text of the error message about the webhook.</p>
   * @public
   */
  errorMessage?: string | undefined;

  /**
   * <p>The number code of the error.</p>
   * @public
   */
  errorCode?: string | undefined;

  /**
   * <p>The date and time a webhook was last successfully triggered, in timestamp
   *             format.</p>
   * @public
   */
  lastTriggered?: Date | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the webhook.</p>
   * @public
   */
  arn?: string | undefined;

  /**
   * <p>Specifies the tags applied to the webhook.</p>
   * @public
   */
  tags?: Tag[] | undefined;
}

/**
 * @public
 */
export interface ListWebhooksOutput {
  /**
   * <p>The JSON detail returned for each webhook in the list output for the ListWebhooks
   *             call.</p>
   * @public
   */
  webhooks?: ListWebhookItem[] | undefined;

  /**
   * <p>If the amount of returned information is significantly large, an identifier is also
   *             returned and can be used in a subsequent ListWebhooks call to return the next set of
   *             webhooks in the list. </p>
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * <p>The pipeline has reached the limit for concurrent pipeline executions.</p>
 * @public
 */
export class ConcurrentPipelineExecutionsLimitExceededException extends __BaseException {
  readonly name: "ConcurrentPipelineExecutionsLimitExceededException" =
    "ConcurrentPipelineExecutionsLimitExceededException";
  readonly $fault: "client" = "client";
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<ConcurrentPipelineExecutionsLimitExceededException, __BaseException>) {
    super({
      name: "ConcurrentPipelineExecutionsLimitExceededException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, ConcurrentPipelineExecutionsLimitExceededException.prototype);
  }
}

/**
 * <p>Unable to override because the condition does not allow overrides.</p>
 * @public
 */
export class ConditionNotOverridableException extends __BaseException {
  readonly name: "ConditionNotOverridableException" = "ConditionNotOverridableException";
  readonly $fault: "client" = "client";
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<ConditionNotOverridableException, __BaseException>) {
    super({
      name: "ConditionNotOverridableException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, ConditionNotOverridableException.prototype);
  }
}

/**
 * <p>Your request cannot be handled because the pipeline is busy handling ongoing
 *             activities. Try again later.</p>
 * @public
 */
export class ConflictException extends __BaseException {
  readonly name: "ConflictException" = "ConflictException";
  readonly $fault: "client" = "client";
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
  }
}

/**
 * <p>The stage has failed in a later run of the pipeline and the
 *                 <code>pipelineExecutionId</code> associated with the request is out of
 *             date.</p>
 * @public
 */
export class NotLatestPipelineExecutionException extends __BaseException {
  readonly name: "NotLatestPipelineExecutionException" = "NotLatestPipelineExecutionException";
  readonly $fault: "client" = "client";
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<NotLatestPipelineExecutionException, __BaseException>) {
    super({
      name: "NotLatestPipelineExecutionException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, NotLatestPipelineExecutionException.prototype);
  }
}

/**
 * @public
 * @enum
 */
export const ConditionType = {
  BEFORE_ENTRY: "BEFORE_ENTRY",
  ON_SUCCESS: "ON_SUCCESS",
} as const;

/**
 * @public
 */
export type ConditionType = (typeof ConditionType)[keyof typeof ConditionType];

/**
 * @public
 */
export interface OverrideStageConditionInput {
  /**
   * <p>The name of the pipeline with the stage that will override the condition.</p>
   * @public
   */
  pipelineName: string | undefined;

  /**
   * <p>The name of the stage for the override.</p>
   * @public
   */
  stageName: string | undefined;

  /**
   * <p>The ID of the pipeline execution for the override.</p>
   * @public
   */
  pipelineExecutionId: string | undefined;

  /**
   * <p>The type of condition to override for the stage, such as entry conditions, failure
   *             conditions, or success conditions.</p>
   * @public
   */
  conditionType: ConditionType | undefined;
}

/**
 * <p>Represents the input of a <code>PollForJobs</code> action.</p>
 * @public
 */
export interface PollForJobsInput {
  /**
   * <p>Represents information about an action type.</p>
   * @public
   */
  actionTypeId: ActionTypeId | undefined;

  /**
   * <p>The maximum number of jobs to return in a poll for jobs call.</p>
   * @public
   */
  maxBatchSize?: number | undefined;

  /**
   * <p>A map of property names and values. For an action type with no queryable
   *             properties, this value must be null or an empty map. For an action type with a queryable
   *             property, you must supply that property as a key in the map. Only jobs whose action
   *             configuration matches the mapped value are returned.</p>
   * @public
   */
  queryParam?: Record<string, string> | undefined;
}

/**
 * <p>Represents information about a job.</p>
 * @public
 */
export interface Job {
  /**
   * <p>The unique system-generated ID of the job.</p>
   * @public
   */
  id?: string | undefined;

  /**
   * <p>Other data about a job.</p>
   * @public
   */
  data?: JobData | undefined;

  /**
   * <p>A system-generated random number that CodePipeline uses to ensure that the
   *             job is being worked on by only one job worker. Use this number in an <a>AcknowledgeJob</a> request.</p>
   * @public
   */
  nonce?: string | undefined;

  /**
   * <p>The ID of the Amazon Web Services account to use when performing the job.</p>
   * @public
   */
  accountId?: string | undefined;
}

/**
 * <p>Represents the output of a <code>PollForJobs</code> action.</p>
 * @public
 */
export interface PollForJobsOutput {
  /**
   * <p>Information about the jobs to take action on.</p>
   * @public
   */
  jobs?: Job[] | undefined;
}

/**
 * <p>Represents the input of a <code>PollForThirdPartyJobs</code> action.</p>
 * @public
 */
export interface PollForThirdPartyJobsInput {
  /**
   * <p>Represents information about an action type.</p>
   * @public
   */
  actionTypeId: ActionTypeId | undefined;

  /**
   * <p>The maximum number of jobs to return in a poll for jobs call.</p>
   * @public
   */
  maxBatchSize?: number | undefined;
}

/**
 * <p>A response to a <code>PollForThirdPartyJobs</code> request returned by CodePipeline when there is a job to be worked on by a partner action.</p>
 * @public
 */
export interface ThirdPartyJob {
  /**
   * <p>The <code>clientToken</code> portion of the <code>clientId</code> and
   *                 <code>clientToken</code> pair used to verify that the calling entity is allowed
   *             access to the job and its details.</p>
   * @public
   */
  clientId?: string | undefined;

  /**
   * <p>The identifier used to identify the job in CodePipeline.</p>
   * @public
   */
  jobId?: string | undefined;
}

/**
 * <p>Represents the output of a <code>PollForThirdPartyJobs</code> action.</p>
 * @public
 */
export interface PollForThirdPartyJobsOutput {
  /**
   * <p>Information about the jobs to take action on.</p>
   * @public
   */
  jobs?: ThirdPartyJob[] | undefined;
}

/**
 * <p>Represents the input of a <code>PutActionRevision</code> action.</p>
 * @public
 */
export interface PutActionRevisionInput {
  /**
   * <p>The name of the pipeline that starts processing the revision to the
   *             source.</p>
   * @public
   */
  pipelineName: string | undefined;

  /**
   * <p>The name of the stage that contains the action that acts on the revision.</p>
   * @public
   */
  stageName: string | undefined;

  /**
   * <p>The name of the action that processes the revision.</p>
   * @public
   */
  actionName: string | undefined;

  /**
   * <p>Represents information about the version (or revision) of an action.</p>
   * @public
   */
  actionRevision: ActionRevision | undefined;
}

/**
 * <p>Represents the output of a <code>PutActionRevision</code> action.</p>
 * @public
 */
export interface PutActionRevisionOutput {
  /**
   * <p>Indicates whether the artifact revision was previously used in an execution of the
   *             specified pipeline.</p>
   * @public
   */
  newRevision?: boolean | undefined;

  /**
   * <p>The ID of the current workflow state of the pipeline.</p>
   * @public
   */
  pipelineExecutionId?: string | undefined;
}

/**
 * <p>The approval request already received a response or has expired.</p>
 * @public
 */
export class InvalidApprovalTokenException extends __BaseException {
  readonly name: "InvalidApprovalTokenException" = "InvalidApprovalTokenException";
  readonly $fault: "client" = "client";
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<InvalidApprovalTokenException, __BaseException>) {
    super({
      name: "InvalidApprovalTokenException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, InvalidApprovalTokenException.prototype);
  }
}

/**
 * <p>Represents the input of a <code>PutApprovalResult</code> action.</p>
 * @public
 */
export interface PutApprovalResultInput {
  /**
   * <p>The name of the pipeline that contains the action. </p>
   * @public
   */
  pipelineName: string | undefined;

  /**
   * <p>The name of the stage that contains the action.</p>
   * @public
   */
  stageName: string | undefined;

  /**
   * <p>The name of the action for which approval is requested.</p>
   * @public
   */
  actionName: string | undefined;

  /**
   * <p>Represents information about the result of the approval request.</p>
   * @public
   */
  result: ApprovalResult | undefined;

  /**
   * <p>The system-generated token used to identify a unique approval request. The token
   *             for each open approval request can be obtained using the <a>GetPipelineState</a> action. It is used to validate that the approval
   *             request corresponding to this token is still valid.</p>
   *          <important>
   *             <p>For a pipeline where the execution mode is set to PARALLEL, the token required to
   *                 approve/reject an approval request as detailed above is not available. Instead, use
   *                 the <code>externalExecutionId</code> in the response output from the <a>ListActionExecutions</a> action as the token in the approval
   *                 request.</p>
   *          </important>
   * @public
   */
  token: string | undefined;
}

/**
 * <p>Represents the output of a <code>PutApprovalResult</code> action.</p>
 * @public
 */
export interface PutApprovalResultOutput {
  /**
   * <p>The timestamp showing when the approval or rejection was submitted.</p>
   * @public
   */
  approvedAt?: Date | undefined;
}

/**
 * <p>The job state was specified in an invalid format.</p>
 * @public
 */
export class InvalidJobStateException extends __BaseException {
  readonly name: "InvalidJobStateException" = "InvalidJobStateException";
  readonly $fault: "client" = "client";
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<InvalidJobStateException, __BaseException>) {
    super({
      name: "InvalidJobStateException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, InvalidJobStateException.prototype);
  }
}

/**
 * @public
 * @enum
 */
export const FailureType = {
  ConfigurationError: "ConfigurationError",
  JobFailed: "JobFailed",
  PermissionError: "PermissionError",
  RevisionOutOfSync: "RevisionOutOfSync",
  RevisionUnavailable: "RevisionUnavailable",
  SystemUnavailable: "SystemUnavailable",
} as const;

/**
 * @public
 */
export type FailureType = (typeof FailureType)[keyof typeof FailureType];

/**
 * <p>Represents information about failure details.</p>
 * @public
 */
export interface FailureDetails {
  /**
   * <p>The type of the failure.</p>
   * @public
   */
  type: FailureType | undefined;

  /**
   * <p>The message about the failure.</p>
   * @public
   */
  message: string | undefined;

  /**
   * <p>The external ID of the run of the action that failed.</p>
   * @public
   */
  externalExecutionId?: string | undefined;
}

/**
 * <p>Represents the input of a <code>PutJobFailureResult</code> action.</p>
 * @public
 */
export interface PutJobFailureResultInput {
  /**
   * <p>The unique system-generated ID of the job that failed. This is the same ID returned
   *             from <code>PollForJobs</code>.</p>
   * @public
   */
  jobId: string | undefined;

  /**
   * <p>The details about the failure of a job.</p>
   * @public
   */
  failureDetails: FailureDetails | undefined;
}

/**
 * <p>Exceeded the total size limit for all variables in the pipeline.</p>
 * @public
 */
export class OutputVariablesSizeExceededException extends __BaseException {
  readonly name: "OutputVariablesSizeExceededException" = "OutputVariablesSizeExceededException";
  readonly $fault: "client" = "client";
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<OutputVariablesSizeExceededException, __BaseException>) {
    super({
      name: "OutputVariablesSizeExceededException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, OutputVariablesSizeExceededException.prototype);
  }
}

/**
 * <p>Represents information about a current revision.</p>
 * @public
 */
export interface CurrentRevision {
  /**
   * <p>The revision ID of the current version of an artifact.</p>
   * @public
   */
  revision: string | undefined;

  /**
   * <p>The change identifier for the current revision.</p>
   * @public
   */
  changeIdentifier: string | undefined;

  /**
   * <p>The date and time when the most recent revision of the artifact was created, in
   *             timestamp format.</p>
   * @public
   */
  created?: Date | undefined;

  /**
   * <p>The summary of the most recent revision of the artifact.</p>
   * @public
   */
  revisionSummary?: string | undefined;
}

/**
 * <p>The details of the actions taken and results produced on an artifact as it passes
 *             through stages in the pipeline.</p>
 * @public
 */
export interface ExecutionDetails {
  /**
   * <p>The summary of the current status of the actions.</p>
   * @public
   */
  summary?: string | undefined;

  /**
   * <p>The system-generated unique ID of this action used to identify this job worker in
   *             any external systems, such as CodeDeploy.</p>
   * @public
   */
  externalExecutionId?: string | undefined;

  /**
   * <p>The percentage of work completed on the action, represented on a scale of 0 to 100
   *             percent.</p>
   * @public
   */
  percentComplete?: number | undefined;
}

/**
 * <p>Represents the input of a <code>PutJobSuccessResult</code> action.</p>
 * @public
 */
export interface PutJobSuccessResultInput {
  /**
   * <p>The unique system-generated ID of the job that succeeded. This is the same ID
   *             returned from <code>PollForJobs</code>.</p>
   * @public
   */
  jobId: string | undefined;

  /**
   * <p>The ID of the current revision of the artifact successfully worked on by the
   *             job.</p>
   * @public
   */
  currentRevision?: CurrentRevision | undefined;

  /**
   * <p>A token generated by a job worker, such as a CodeDeploy deployment ID, that a
   *             successful job provides to identify a custom action in progress. Future jobs use this
   *             token to identify the running instance of the action. It can be reused to return more
   *             information about the progress of the custom action. When the action is complete, no
   *             continuation token should be supplied.</p>
   * @public
   */
  continuationToken?: string | undefined;

  /**
   * <p>The execution details of the successful job, such as the actions taken by the job
   *             worker.</p>
   * @public
   */
  executionDetails?: ExecutionDetails | undefined;

  /**
   * <p>Key-value pairs produced as output by a job worker that can be made available to a
   *             downstream action configuration. <code>outputVariables</code> can be included only when
   *             there is no continuation token on the request.</p>
   * @public
   */
  outputVariables?: Record<string, string> | undefined;
}

/**
 * <p>Represents the input of a <code>PutThirdPartyJobFailureResult</code>
 *             action.</p>
 * @public
 */
export interface PutThirdPartyJobFailureResultInput {
  /**
   * <p>The ID of the job that failed. This is the same ID returned from
   *                 <code>PollForThirdPartyJobs</code>.</p>
   * @public
   */
  jobId: string | undefined;

  /**
   * <p>The clientToken portion of the clientId and clientToken pair used to verify that
   *             the calling entity is allowed access to the job and its details.</p>
   * @public
   */
  clientToken: string | undefined;

  /**
   * <p>Represents information about failure details.</p>
   * @public
   */
  failureDetails: FailureDetails | undefined;
}

/**
 * <p>Represents the input of a <code>PutThirdPartyJobSuccessResult</code>
 *             action.</p>
 * @public
 */
export interface PutThirdPartyJobSuccessResultInput {
  /**
   * <p>The ID of the job that successfully completed. This is the same ID returned from
   *                 <code>PollForThirdPartyJobs</code>.</p>
   * @public
   */
  jobId: string | undefined;

  /**
   * <p>The clientToken portion of the clientId and clientToken pair used to verify that
   *             the calling entity is allowed access to the job and its details.</p>
   * @public
   */
  clientToken: string | undefined;

  /**
   * <p>Represents information about a current revision.</p>
   * @public
   */
  currentRevision?: CurrentRevision | undefined;

  /**
   * <p>A token generated by a job worker, such as a CodeDeploy deployment ID, that a
   *             successful job provides to identify a partner action in progress. Future jobs use this
   *             token to identify the running instance of the action. It can be reused to return more
   *             information about the progress of the partner action. When the action is complete, no
   *             continuation token should be supplied.</p>
   * @public
   */
  continuationToken?: string | undefined;

  /**
   * <p>The details of the actions taken and results produced on an artifact as it passes
   *             through stages in the pipeline. </p>
   * @public
   */
  executionDetails?: ExecutionDetails | undefined;
}

/**
 * <p>The specified authentication type is in an invalid format.</p>
 * @public
 */
export class InvalidWebhookAuthenticationParametersException extends __BaseException {
  readonly name: "InvalidWebhookAuthenticationParametersException" = "InvalidWebhookAuthenticationParametersException";
  readonly $fault: "client" = "client";
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<InvalidWebhookAuthenticationParametersException, __BaseException>) {
    super({
      name: "InvalidWebhookAuthenticationParametersException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, InvalidWebhookAuthenticationParametersException.prototype);
  }
}

/**
 * <p>The specified event filter rule is in an invalid format.</p>
 * @public
 */
export class InvalidWebhookFilterPatternException extends __BaseException {
  readonly name: "InvalidWebhookFilterPatternException" = "InvalidWebhookFilterPatternException";
  readonly $fault: "client" = "client";
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<InvalidWebhookFilterPatternException, __BaseException>) {
    super({
      name: "InvalidWebhookFilterPatternException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, InvalidWebhookFilterPatternException.prototype);
  }
}

/**
 * @public
 */
export interface PutWebhookInput {
  /**
   * <p>The detail provided in an input file to create the webhook, such as the webhook
   *             name, the pipeline name, and the action name. Give the webhook a unique name that helps
   *             you identify it. You might name the webhook after the pipeline and action it targets so
   *             that you can easily recognize what it's used for later.</p>
   * @public
   */
  webhook: WebhookDefinition | undefined;

  /**
   * <p>The tags for the webhook.</p>
   * @public
   */
  tags?: Tag[] | undefined;
}

/**
 * @public
 */
export interface PutWebhookOutput {
  /**
   * <p>The detail returned from creating the webhook, such as the webhook name, webhook
   *             URL, and webhook ARN.</p>
   * @public
   */
  webhook?: ListWebhookItem | undefined;
}

/**
 * @public
 */
export interface RegisterWebhookWithThirdPartyInput {
  /**
   * <p>The name of an existing webhook created with PutWebhook to register with a
   *             supported third party. </p>
   * @public
   */
  webhookName?: string | undefined;
}

/**
 * @public
 */
export interface RegisterWebhookWithThirdPartyOutput {}

/**
 * <p>Represents the input of a <code>RetryStageExecution</code> action.</p>
 * @public
 */
export interface RetryStageExecutionInput {
  /**
   * <p>The name of the pipeline that contains the failed stage.</p>
   * @public
   */
  pipelineName: string | undefined;

  /**
   * <p>The name of the failed stage to be retried.</p>
   * @public
   */
  stageName: string | undefined;

  /**
   * <p>The ID of the pipeline execution in the failed stage to be retried. Use the <a>GetPipelineState</a> action to retrieve the current pipelineExecutionId of
   *             the failed stage</p>
   * @public
   */
  pipelineExecutionId: string | undefined;

  /**
   * <p>The scope of the retry attempt.</p>
   * @public
   */
  retryMode: StageRetryMode | undefined;
}

/**
 * <p>Represents the output of a <code>RetryStageExecution</code> action.</p>
 * @public
 */
export interface RetryStageExecutionOutput {
  /**
   * <p>The ID of the current workflow execution in the failed stage.</p>
   * @public
   */
  pipelineExecutionId?: string | undefined;
}

/**
 * <p>Unable to retry. The pipeline structure or stage state might have changed while
 *             actions awaited retry, or the stage contains no failed
 *             actions.</p>
 * @public
 */
export class StageNotRetryableException extends __BaseException {
  readonly name: "StageNotRetryableException" = "StageNotRetryableException";
  readonly $fault: "client" = "client";
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<StageNotRetryableException, __BaseException>) {
    super({
      name: "StageNotRetryableException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, StageNotRetryableException.prototype);
  }
}

/**
 * <p>The specified pipeline execution is outdated and cannot be used as a target pipeline
 *             execution for rollback.</p>
 * @public
 */
export class PipelineExecutionOutdatedException extends __BaseException {
  readonly name: "PipelineExecutionOutdatedException" = "PipelineExecutionOutdatedException";
  readonly $fault: "client" = "client";
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<PipelineExecutionOutdatedException, __BaseException>) {
    super({
      name: "PipelineExecutionOutdatedException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, PipelineExecutionOutdatedException.prototype);
  }
}

/**
 * @public
 */
export interface RollbackStageInput {
  /**
   * <p>The name of the pipeline for which the stage will be rolled back. </p>
   * @public
   */
  pipelineName: string | undefined;

  /**
   * <p>The name of the stage in the pipeline to be rolled back. </p>
   * @public
   */
  stageName: string | undefined;

  /**
   * <p>The pipeline execution ID for the stage to be rolled back to. </p>
   * @public
   */
  targetPipelineExecutionId: string | undefined;
}

/**
 * @public
 */
export interface RollbackStageOutput {
  /**
   * <p>The execution ID of the pipeline execution for the stage that has been rolled
   *             back.</p>
   * @public
   */
  pipelineExecutionId: string | undefined;
}

/**
 * <p>Unable to roll back the stage. The cause might be if the pipeline version has changed
 *             since the target pipeline execution was deployed, the stage is currently running, or an
 *             incorrect target pipeline execution ID was provided.</p>
 * @public
 */
export class UnableToRollbackStageException extends __BaseException {
  readonly name: "UnableToRollbackStageException" = "UnableToRollbackStageException";
  readonly $fault: "client" = "client";
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<UnableToRollbackStageException, __BaseException>) {
    super({
      name: "UnableToRollbackStageException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, UnableToRollbackStageException.prototype);
  }
}

/**
 * @public
 * @enum
 */
export const SourceRevisionType = {
  COMMIT_ID: "COMMIT_ID",
  IMAGE_DIGEST: "IMAGE_DIGEST",
  S3_OBJECT_KEY: "S3_OBJECT_KEY",
  S3_OBJECT_VERSION_ID: "S3_OBJECT_VERSION_ID",
} as const;

/**
 * @public
 */
export type SourceRevisionType = (typeof SourceRevisionType)[keyof typeof SourceRevisionType];

/**
 * <p>A list that allows you to specify, or override, the source revision for a pipeline
 *             execution that's being started. A source revision is the version with all the changes to
 *             your application code, or source artifact, for the pipeline execution.</p>
 *          <note>
 *             <p>For the <code>S3_OBJECT_VERSION_ID</code> and <code>S3_OBJECT_KEY</code> types of
 *                 source revisions, either of the types can be used independently, or they can be used
 *                 together to override the source with a specific ObjectKey and VersionID.</p>
 *          </note>
 * @public
 */
export interface SourceRevisionOverride {
  /**
   * <p>The name of the action where the override will be applied.</p>
   * @public
   */
  actionName: string | undefined;

  /**
   * <p>The type of source revision, based on the source provider. For example, the revision
   *             type for the CodeCommit action provider is the commit ID.</p>
   * @public
   */
  revisionType: SourceRevisionType | undefined;

  /**
   * <p>The source revision, or version of your source artifact, with the changes that you
   *             want to run in the pipeline execution.</p>
   * @public
   */
  revisionValue: string | undefined;
}

/**
 * <p>A pipeline-level variable used for a pipeline execution.</p>
 * @public
 */
export interface PipelineVariable {
  /**
   * <p>The name of a pipeline-level variable.</p>
   * @public
   */
  name: string | undefined;

  /**
   * <p>The value of a pipeline-level variable.</p>
   * @public
   */
  value: string | undefined;
}

/**
 * <p>Represents the input of a <code>StartPipelineExecution</code> action.</p>
 * @public
 */
export interface StartPipelineExecutionInput {
  /**
   * <p>The name of the pipeline to start.</p>
   * @public
   */
  name: string | undefined;

  /**
   * <p>A list that overrides pipeline variables for a pipeline execution that's being
   *             started. Variable names must match <code>[A-Za-z0-9@\-_]+</code>, and the values can be
   *             anything except an empty string.</p>
   * @public
   */
  variables?: PipelineVariable[] | undefined;

  /**
   * <p>The system-generated unique ID used to identify a unique execution
   *             request.</p>
   * @public
   */
  clientRequestToken?: string | undefined;

  /**
   * <p>A list that allows you to specify, or override, the source revision for a pipeline
   *             execution that's being started. A source revision is the version with all the changes to
   *             your application code, or source artifact, for the pipeline execution.</p>
   * @public
   */
  sourceRevisions?: SourceRevisionOverride[] | undefined;
}

/**
 * <p>Represents the output of a <code>StartPipelineExecution</code> action.</p>
 * @public
 */
export interface StartPipelineExecutionOutput {
  /**
   * <p>The unique system-generated ID of the pipeline execution that was
   *             started.</p>
   * @public
   */
  pipelineExecutionId?: string | undefined;
}

/**
 * <p>The pipeline execution is already in a <code>Stopping</code> state. If you already
 *             chose to stop and wait, you cannot make that request again. You can choose to stop and
 *             abandon now, but be aware that this option can lead to failed tasks or out of sequence
 *             tasks. If you already chose to stop and abandon, you cannot make that request
 *             again.</p>
 * @public
 */
export class DuplicatedStopRequestException extends __BaseException {
  readonly name: "DuplicatedStopRequestException" = "DuplicatedStopRequestException";
  readonly $fault: "client" = "client";
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<DuplicatedStopRequestException, __BaseException>) {
    super({
      name: "DuplicatedStopRequestException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, DuplicatedStopRequestException.prototype);
  }
}

/**
 * <p>Unable to stop the pipeline execution. The execution might already be in a
 *                 <code>Stopped</code> state, or it might no longer be in progress.</p>
 * @public
 */
export class PipelineExecutionNotStoppableException extends __BaseException {
  readonly name: "PipelineExecutionNotStoppableException" = "PipelineExecutionNotStoppableException";
  readonly $fault: "client" = "client";
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<PipelineExecutionNotStoppableException, __BaseException>) {
    super({
      name: "PipelineExecutionNotStoppableException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, PipelineExecutionNotStoppableException.prototype);
  }
}

/**
 * @public
 */
export interface StopPipelineExecutionInput {
  /**
   * <p>The name of the pipeline to stop.</p>
   * @public
   */
  pipelineName: string | undefined;

  /**
   * <p>The ID of the pipeline execution to be stopped in the current stage. Use the
   *                 <code>GetPipelineState</code> action to retrieve the current
   *             pipelineExecutionId.</p>
   * @public
   */
  pipelineExecutionId: string | undefined;

  /**
   * <p>Use this option to stop the pipeline execution by abandoning, rather than finishing,
   *             in-progress actions.</p>
   *          <note>
   *             <p>This option can lead to failed or out-of-sequence tasks.</p>
   *          </note>
   * @public
   */
  abandon?: boolean | undefined;

  /**
   * <p>Use this option to enter comments, such as the reason the pipeline was stopped.</p>
   * @public
   */
  reason?: string | undefined;
}

/**
 * @public
 */
export interface StopPipelineExecutionOutput {
  /**
   * <p>The unique system-generated ID of the pipeline execution that was stopped.</p>
   * @public
   */
  pipelineExecutionId?: string | undefined;
}

/**
 * @public
 */
export interface TagResourceInput {
  /**
   * <p>The Amazon Resource Name (ARN) of the resource you want to add tags to.</p>
   * @public
   */
  resourceArn: string | undefined;

  /**
   * <p>The tags you want to modify or add to the resource.</p>
   * @public
   */
  tags: Tag[] | undefined;
}

/**
 * @public
 */
export interface TagResourceOutput {}

/**
 * @public
 */
export interface UntagResourceInput {
  /**
   * <p> The Amazon Resource Name (ARN) of the resource to remove tags from.</p>
   * @public
   */
  resourceArn: string | undefined;

  /**
   * <p>The list of keys for the tags to be removed from the resource.</p>
   * @public
   */
  tagKeys: string[] | undefined;
}

/**
 * @public
 */
export interface UntagResourceOutput {}

/**
 * <p>The request failed because of an unknown error, exception, or failure.</p>
 * @public
 */
export class RequestFailedException extends __BaseException {
  readonly name: "RequestFailedException" = "RequestFailedException";
  readonly $fault: "client" = "client";
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<RequestFailedException, __BaseException>) {
    super({
      name: "RequestFailedException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, RequestFailedException.prototype);
  }
}

/**
 * @public
 */
export interface UpdateActionTypeInput {
  /**
   * <p>The action type definition for the action type to be updated.</p>
   * @public
   */
  actionType: ActionTypeDeclaration | undefined;
}

/**
 * <p>Represents the input of an <code>UpdatePipeline</code> action.</p>
 * @public
 */
export interface UpdatePipelineInput {
  /**
   * <p>The name of the pipeline to be updated.</p>
   * @public
   */
  pipeline: PipelineDeclaration | undefined;
}

/**
 * <p>Represents the output of an <code>UpdatePipeline</code> action.</p>
 * @public
 */
export interface UpdatePipelineOutput {
  /**
   * <p>The structure of the updated pipeline.</p>
   * @public
   */
  pipeline?: PipelineDeclaration | undefined;
}

/**
 * @internal
 */
export const AWSSessionCredentialsFilterSensitiveLog = (obj: AWSSessionCredentials): any => ({
  ...obj,
  ...(obj.accessKeyId && { accessKeyId: SENSITIVE_STRING }),
  ...(obj.secretAccessKey && { secretAccessKey: SENSITIVE_STRING }),
  ...(obj.sessionToken && { sessionToken: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const JobDataFilterSensitiveLog = (obj: JobData): any => ({
  ...obj,
  ...(obj.artifactCredentials && { artifactCredentials: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const JobDetailsFilterSensitiveLog = (obj: JobDetails): any => ({
  ...obj,
  ...(obj.data && { data: JobDataFilterSensitiveLog(obj.data) }),
});

/**
 * @internal
 */
export const GetJobDetailsOutputFilterSensitiveLog = (obj: GetJobDetailsOutput): any => ({
  ...obj,
  ...(obj.jobDetails && { jobDetails: JobDetailsFilterSensitiveLog(obj.jobDetails) }),
});

/**
 * @internal
 */
export const ThirdPartyJobDataFilterSensitiveLog = (obj: ThirdPartyJobData): any => ({
  ...obj,
  ...(obj.artifactCredentials && { artifactCredentials: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const ThirdPartyJobDetailsFilterSensitiveLog = (obj: ThirdPartyJobDetails): any => ({
  ...obj,
  ...(obj.data && { data: ThirdPartyJobDataFilterSensitiveLog(obj.data) }),
});

/**
 * @internal
 */
export const GetThirdPartyJobDetailsOutputFilterSensitiveLog = (obj: GetThirdPartyJobDetailsOutput): any => ({
  ...obj,
  ...(obj.jobDetails && { jobDetails: ThirdPartyJobDetailsFilterSensitiveLog(obj.jobDetails) }),
});

/**
 * @internal
 */
export const JobFilterSensitiveLog = (obj: Job): any => ({
  ...obj,
  ...(obj.data && { data: JobDataFilterSensitiveLog(obj.data) }),
});

/**
 * @internal
 */
export const PollForJobsOutputFilterSensitiveLog = (obj: PollForJobsOutput): any => ({
  ...obj,
  ...(obj.jobs && { jobs: obj.jobs.map((item) => JobFilterSensitiveLog(item)) }),
});
