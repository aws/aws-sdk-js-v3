// smithy-typescript generated code
import { ExceptionOptionType as __ExceptionOptionType, SENSITIVE_STRING } from "@smithy/smithy-client";

import { CodePipelineServiceException as __BaseException } from "./CodePipelineServiceException";

/**
 * @public
 * <p>Represents the input of an AcknowledgeJob action.</p>
 */
export interface AcknowledgeJobInput {
  /**
   * @public
   * <p>The unique system-generated ID of the job for which you want to confirm
   *             receipt.</p>
   */
  jobId: string | undefined;

  /**
   * @public
   * <p>A system-generated random number that CodePipeline uses to ensure that the
   *             job is being worked on by only one job worker. Get this number from the response of the
   *                 <a>PollForJobs</a> request that returned this job.</p>
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
 * @public
 * <p>Represents the output of an AcknowledgeJob action.</p>
 */
export interface AcknowledgeJobOutput {
  /**
   * @public
   * <p>Whether the job worker has received the specified job.</p>
   */
  status?: JobStatus;
}

/**
 * @public
 * <p>The nonce was specified in an invalid format.</p>
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
 * @public
 * <p>The job was specified in an invalid format or cannot be found.</p>
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
 * @public
 * <p>The validation was specified in an invalid format.</p>
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
 * @public
 * <p>Represents the input of an AcknowledgeThirdPartyJob action.</p>
 */
export interface AcknowledgeThirdPartyJobInput {
  /**
   * @public
   * <p>The unique system-generated ID of the job.</p>
   */
  jobId: string | undefined;

  /**
   * @public
   * <p>A system-generated random number that CodePipeline uses to ensure that the
   *             job is being worked on by only one job worker. Get this number from the response to a
   *                 <a>GetThirdPartyJobDetails</a> request.</p>
   */
  nonce: string | undefined;

  /**
   * @public
   * <p>The clientToken portion of the clientId and clientToken pair used to verify that
   *             the calling entity is allowed access to the job and its details.</p>
   */
  clientToken: string | undefined;
}

/**
 * @public
 * <p>Represents the output of an AcknowledgeThirdPartyJob action.</p>
 */
export interface AcknowledgeThirdPartyJobOutput {
  /**
   * @public
   * <p>The status information for the third party job, if any.</p>
   */
  status?: JobStatus;
}

/**
 * @public
 * <p>The client token was specified in an invalid format</p>
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
 * @public
 * <p>Represents information about an action configuration.</p>
 */
export interface ActionConfiguration {
  /**
   * @public
   * <p>The configuration data for the action.</p>
   */
  configuration?: Record<string, string>;
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
 * @public
 * <p>Represents information about an action configuration property.</p>
 */
export interface ActionConfigurationProperty {
  /**
   * @public
   * <p>The name of the action configuration property.</p>
   */
  name: string | undefined;

  /**
   * @public
   * <p>Whether the configuration property is a required value.</p>
   */
  required: boolean | undefined;

  /**
   * @public
   * <p>Whether the configuration property is a key.</p>
   */
  key: boolean | undefined;

  /**
   * @public
   * <p>Whether the configuration property is secret. Secrets are hidden from all calls
   *             except for <code>GetJobDetails</code>, <code>GetThirdPartyJobDetails</code>,
   *                 <code>PollForJobs</code>, and <code>PollForThirdPartyJobs</code>.</p>
   *          <p>When updating a pipeline, passing * * * * * without changing any other values of
   *             the action preserves the previous value of the secret.</p>
   */
  secret: boolean | undefined;

  /**
   * @public
   * <p>Indicates that the property is used with <code>PollForJobs</code>. When creating a
   *             custom action, an action can have up to one queryable property. If it has one, that
   *             property must be both required and not secret.</p>
   *          <p>If you create a pipeline with a custom action type, and that custom action contains
   *             a queryable property, the value for that configuration property is subject to other
   *             restrictions. The value must be less than or equal to twenty (20) characters. The value
   *             can contain only alphanumeric characters, underscores, and hyphens.</p>
   */
  queryable?: boolean;

  /**
   * @public
   * <p>The description of the action configuration property that is displayed to
   *             users.</p>
   */
  description?: string;

  /**
   * @public
   * <p>The type of the configuration property.</p>
   */
  type?: ActionConfigurationPropertyType;
}

/**
 * @public
 * <p>Represents the context of an action in the stage of a pipeline to a job
 *             worker.</p>
 */
export interface ActionContext {
  /**
   * @public
   * <p>The name of the action in the context of a job.</p>
   */
  name?: string;

  /**
   * @public
   * <p>The system-generated unique ID that corresponds to an action's execution.</p>
   */
  actionExecutionId?: string;
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
 * @public
 * <p>Represents information about an action type.</p>
 */
export interface ActionTypeId {
  /**
   * @public
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
   *          </ul>
   */
  category: ActionCategory | undefined;

  /**
   * @public
   * <p>The creator of the action being called. There are three valid values for the
   *                 <code>Owner</code> field in the action category section within your pipeline
   *             structure: <code>AWS</code>, <code>ThirdParty</code>, and <code>Custom</code>. For more
   *             information, see <a href="https://docs.aws.amazon.com/codepipeline/latest/userguide/reference-pipeline-structure.html#actions-valid-providers">Valid Action Types and Providers in CodePipeline</a>.</p>
   */
  owner: ActionOwner | undefined;

  /**
   * @public
   * <p>The provider of the service being called by the action. Valid providers are
   *             determined by the action category. For example, an action in the Deploy category type
   *             might have a provider of CodeDeploy, which would be specified as
   *             <code>CodeDeploy</code>. For more information, see <a href="https://docs.aws.amazon.com/codepipeline/latest/userguide/reference-pipeline-structure.html#actions-valid-providers">Valid Action Types and Providers in CodePipeline</a>.</p>
   */
  provider: string | undefined;

  /**
   * @public
   * <p>A string that describes the action version.</p>
   */
  version: string | undefined;
}

/**
 * @public
 * <p>Represents information about an artifact to be worked on, such as a test or build
 *             artifact.</p>
 */
export interface InputArtifact {
  /**
   * @public
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
   */
  name: string | undefined;
}

/**
 * @public
 * <p>Represents information about the output of an action.</p>
 */
export interface OutputArtifact {
  /**
   * @public
   * <p>The name of the output of an artifact, such as "My App".</p>
   *          <p>The input artifact of an action must exactly match the output artifact declared in
   *             a preceding action, but the input artifact does not have to be the next action in strict
   *             sequence from the action that provided the output artifact. Actions in parallel can
   *             declare different output artifacts, which are in turn consumed by different following
   *             actions.</p>
   *          <p>Output artifact names must be unique within a pipeline.</p>
   */
  name: string | undefined;
}

/**
 * @public
 * <p>Represents information about an action declaration.</p>
 */
export interface ActionDeclaration {
  /**
   * @public
   * <p>The action declaration's name.</p>
   */
  name: string | undefined;

  /**
   * @public
   * <p>Specifies the action type and the provider of the action.</p>
   */
  actionTypeId: ActionTypeId | undefined;

  /**
   * @public
   * <p>The order in which actions are run.</p>
   */
  runOrder?: number;

  /**
   * @public
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
   */
  configuration?: Record<string, string>;

  /**
   * @public
   * <p>The name or ID of the result of the action declaration, such as a test or build
   *             artifact.</p>
   */
  outputArtifacts?: OutputArtifact[];

  /**
   * @public
   * <p>The name or ID of the artifact consumed by the action, such as a test or build
   *             artifact.</p>
   */
  inputArtifacts?: InputArtifact[];

  /**
   * @public
   * <p>The ARN of the IAM service role that performs the declared action. This is assumed
   *             through the roleArn for the pipeline.</p>
   */
  roleArn?: string;

  /**
   * @public
   * <p>The action declaration's Amazon Web Services Region, such as us-east-1.</p>
   */
  region?: string;

  /**
   * @public
   * <p>The variable namespace associated with the action. All variables produced as output by
   *             this action fall under this namespace.</p>
   */
  namespace?: string;
}

/**
 * @public
 * <p>Represents information about an error in CodePipeline.</p>
 */
export interface ErrorDetails {
  /**
   * @public
   * <p>The system ID or number code of the error.</p>
   */
  code?: string;

  /**
   * @public
   * <p>The text of the error message.</p>
   */
  message?: string;
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
 * @public
 * <p>Represents information about the run of an action.</p>
 */
export interface ActionExecution {
  /**
   * @public
   * <p>ID of the workflow action execution in the current stage. Use the <a>GetPipelineState</a> action to retrieve the current action execution details
   *             of the current stage.</p>
   *          <note>
   *             <p>For older executions, this field might be empty. The action execution ID is
   *                 available for executions run on or after March 2020.</p>
   *          </note>
   */
  actionExecutionId?: string;

  /**
   * @public
   * <p>The status of the action, or for a completed action, the last status of the
   *             action.</p>
   */
  status?: ActionExecutionStatus;

  /**
   * @public
   * <p>A summary of the run of the action.</p>
   */
  summary?: string;

  /**
   * @public
   * <p>The last status change of the action.</p>
   */
  lastStatusChange?: Date;

  /**
   * @public
   * <p>The system-generated token used to identify a unique approval request. The token
   *             for each open approval request can be obtained using the <code>GetPipelineState</code>
   *             command. It is used to validate that the approval request corresponding to this token is
   *             still valid.</p>
   */
  token?: string;

  /**
   * @public
   * <p>The ARN of the user who last changed the pipeline.</p>
   */
  lastUpdatedBy?: string;

  /**
   * @public
   * <p>The external ID of the run of the action.</p>
   */
  externalExecutionId?: string;

  /**
   * @public
   * <p>The URL of a resource external to Amazon Web Services that is used when running the
   *             action (for example, an external repository URL).</p>
   */
  externalExecutionUrl?: string;

  /**
   * @public
   * <p>A percentage of completeness of the action as it runs.</p>
   */
  percentComplete?: number;

  /**
   * @public
   * <p>The details of an error returned by a URL external to Amazon Web Services.</p>
   */
  errorDetails?: ErrorDetails;
}

/**
 * @public
 * <p>The Amazon S3 artifact location for an action's artifacts.</p>
 */
export interface S3Location {
  /**
   * @public
   * <p>The Amazon S3 artifact bucket for an action's artifacts.</p>
   */
  bucket?: string;

  /**
   * @public
   * <p>The artifact name.</p>
   */
  key?: string;
}

/**
 * @public
 * <p>Artifact details for the action execution, such as the artifact location.</p>
 */
export interface ArtifactDetail {
  /**
   * @public
   * <p>The artifact object name for the action execution.</p>
   */
  name?: string;

  /**
   * @public
   * <p>The Amazon S3 artifact location for the action execution.</p>
   */
  s3location?: S3Location;
}

/**
 * @public
 * <p>Input information used for an action execution.</p>
 */
export interface ActionExecutionInput {
  /**
   * @public
   * <p>Represents information about an action type.</p>
   */
  actionTypeId?: ActionTypeId;

  /**
   * @public
   * <p>Configuration data for an action execution.</p>
   */
  configuration?: Record<string, string>;

  /**
   * @public
   * <p>Configuration data for an action execution with all variable references replaced with
   *             their real values for the execution.</p>
   */
  resolvedConfiguration?: Record<string, string>;

  /**
   * @public
   * <p>The ARN of the IAM service role that performs the declared action. This is assumed
   *             through the roleArn for the pipeline. </p>
   */
  roleArn?: string;

  /**
   * @public
   * <p>The Amazon Web Services Region for the action, such as us-east-1.</p>
   */
  region?: string;

  /**
   * @public
   * <p>Details of input artifacts of the action that correspond to the action
   *             execution.</p>
   */
  inputArtifacts?: ArtifactDetail[];

  /**
   * @public
   * <p>The variable namespace associated with the action. All variables produced as output by
   *             this action fall under this namespace.</p>
   */
  namespace?: string;
}

/**
 * @public
 * <p>Execution result information, such as the external execution ID.</p>
 */
export interface ActionExecutionResult {
  /**
   * @public
   * <p>The action provider's external ID for the action execution.</p>
   */
  externalExecutionId?: string;

  /**
   * @public
   * <p>The action provider's summary for the action execution.</p>
   */
  externalExecutionSummary?: string;

  /**
   * @public
   * <p>The deepest external link to the external resource (for example, a repository URL or
   *             deployment endpoint) that is used when running the action.</p>
   */
  externalExecutionUrl?: string;
}

/**
 * @public
 * <p>Output details listed for an action execution, such as the action execution
 *             result.</p>
 */
export interface ActionExecutionOutput {
  /**
   * @public
   * <p>Details of output artifacts of the action that correspond to the action
   *             execution.</p>
   */
  outputArtifacts?: ArtifactDetail[];

  /**
   * @public
   * <p>Execution result information listed in the output details for an action
   *             execution.</p>
   */
  executionResult?: ActionExecutionResult;

  /**
   * @public
   * <p>The outputVariables field shows the key-value pairs that were output as part of that
   *             execution.</p>
   */
  outputVariables?: Record<string, string>;
}

/**
 * @public
 * <p>Returns information about an execution of an action, including the action execution
 *             ID, and the name, version, and timing of the action. </p>
 */
export interface ActionExecutionDetail {
  /**
   * @public
   * <p>The pipeline execution ID for the action execution.</p>
   */
  pipelineExecutionId?: string;

  /**
   * @public
   * <p>The action execution ID.</p>
   */
  actionExecutionId?: string;

  /**
   * @public
   * <p>The version of the pipeline where the action was run.</p>
   */
  pipelineVersion?: number;

  /**
   * @public
   * <p>The name of the stage that contains the action.</p>
   */
  stageName?: string;

  /**
   * @public
   * <p>The name of the action.</p>
   */
  actionName?: string;

  /**
   * @public
   * <p>The start time of the action execution.</p>
   */
  startTime?: Date;

  /**
   * @public
   * <p>The last update time of the action execution.</p>
   */
  lastUpdateTime?: Date;

  /**
   * @public
   * <p> The status of the action execution. Status categories are <code>InProgress</code>,
   *                 <code>Succeeded</code>, and <code>Failed</code>.</p>
   */
  status?: ActionExecutionStatus;

  /**
   * @public
   * <p>Input details for the action execution, such as role ARN, Region, and input
   *             artifacts.</p>
   */
  input?: ActionExecutionInput;

  /**
   * @public
   * <p>Output details for the action execution, such as the action execution result.</p>
   */
  output?: ActionExecutionOutput;
}

/**
 * @public
 * <p>Filter values for the action execution.</p>
 */
export interface ActionExecutionFilter {
  /**
   * @public
   * <p>The pipeline execution ID used to filter action execution history.</p>
   */
  pipelineExecutionId?: string;
}

/**
 * @public
 * <p>The specified action cannot be found.</p>
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
 * @public
 * <p>Represents information about the version (or revision) of an action.</p>
 */
export interface ActionRevision {
  /**
   * @public
   * <p>The system-generated unique ID that identifies the revision number of the
   *             action.</p>
   */
  revisionId: string | undefined;

  /**
   * @public
   * <p>The unique identifier of the change that set the state to this revision (for
   *             example, a deployment ID or timestamp).</p>
   */
  revisionChangeId: string | undefined;

  /**
   * @public
   * <p>The date and time when the most recent version of the action was created, in
   *             timestamp format.</p>
   */
  created: Date | undefined;
}

/**
 * @public
 * <p>Represents information about the state of an action.</p>
 */
export interface ActionState {
  /**
   * @public
   * <p>The name of the action.</p>
   */
  actionName?: string;

  /**
   * @public
   * <p>Represents information about the version (or revision) of an action.</p>
   */
  currentRevision?: ActionRevision;

  /**
   * @public
   * <p>Represents information about the run of an action.</p>
   */
  latestExecution?: ActionExecution;

  /**
   * @public
   * <p>A URL link for more information about the state of the action, such as a deployment
   *             group details page.</p>
   */
  entityUrl?: string;

  /**
   * @public
   * <p>A URL link for more information about the revision, such as a commit details
   *             page.</p>
   */
  revisionUrl?: string;
}

/**
 * @public
 * <p>Returns information about the details of an artifact.</p>
 */
export interface ArtifactDetails {
  /**
   * @public
   * <p>The minimum number of artifacts allowed for the action type.</p>
   */
  minimumCount: number | undefined;

  /**
   * @public
   * <p>The maximum number of artifacts allowed for the action type.</p>
   */
  maximumCount: number | undefined;
}

/**
 * @public
 * <p>Returns information about the settings for an action type.</p>
 */
export interface ActionTypeSettings {
  /**
   * @public
   * <p>The URL of a sign-up page where users can sign up for an external service and
   *             perform initial configuration of the action provided by that service.</p>
   */
  thirdPartyConfigurationUrl?: string;

  /**
   * @public
   * <p>The URL returned to the CodePipeline console that provides a deep link to the
   *             resources of the external system, such as the configuration page for a CodeDeploy
   *             deployment group. This link is provided as part of the action display in the
   *             pipeline.</p>
   */
  entityUrlTemplate?: string;

  /**
   * @public
   * <p>The URL returned to the CodePipeline console that contains a link to the
   *             top-level landing page for the external system, such as the console page for CodeDeploy.
   *             This link is shown on the pipeline view page in the CodePipeline console and
   *             provides a link to the execution entity of the external action.</p>
   */
  executionUrlTemplate?: string;

  /**
   * @public
   * <p>The URL returned to the CodePipeline console that contains a link to the page
   *             where customers can update or change the configuration of the external action.</p>
   */
  revisionUrlTemplate?: string;
}

/**
 * @public
 * <p>Returns information about the details of an action type.</p>
 */
export interface ActionType {
  /**
   * @public
   * <p>Represents information about an action type.</p>
   */
  id: ActionTypeId | undefined;

  /**
   * @public
   * <p>The settings for the action type.</p>
   */
  settings?: ActionTypeSettings;

  /**
   * @public
   * <p>The configuration properties for the action type.</p>
   */
  actionConfigurationProperties?: ActionConfigurationProperty[];

  /**
   * @public
   * <p>The details of the input artifact for the action, such as its commit ID.</p>
   */
  inputArtifactDetails: ArtifactDetails | undefined;

  /**
   * @public
   * <p>The details of the output artifact of the action, such as its commit ID.</p>
   */
  outputArtifactDetails: ArtifactDetails | undefined;
}

/**
 * @public
 * <p>Information about parameters for artifacts associated with the action type, such as
 *             the minimum and maximum artifacts allowed.</p>
 */
export interface ActionTypeArtifactDetails {
  /**
   * @public
   * <p>The minimum number of artifacts that can be used with the action type. For example,
   *             you should specify a minimum and maximum of zero input artifacts for an action type with
   *             a category of <code>source</code>.</p>
   */
  minimumCount: number | undefined;

  /**
   * @public
   * <p>The maximum number of artifacts that can be used with the actiontype. For example, you
   *             should specify a minimum and maximum of zero input artifacts for an action type with a
   *             category of <code>source</code>.</p>
   */
  maximumCount: number | undefined;
}

/**
 * @public
 * <p>Details about the polling configuration for the <code>JobWorker</code> action engine,
 *             or executor.</p>
 */
export interface JobWorkerExecutorConfiguration {
  /**
   * @public
   * <p>The accounts in which the job worker is configured and might poll for jobs as part of
   *             the action execution.</p>
   */
  pollingAccounts?: string[];

  /**
   * @public
   * <p>The service Principals in which the job worker is configured and might poll for jobs
   *             as part of the action execution.</p>
   */
  pollingServicePrincipals?: string[];
}

/**
 * @public
 * <p>Details about the configuration for the <code>Lambda</code> action engine, or
 *             executor.</p>
 */
export interface LambdaExecutorConfiguration {
  /**
   * @public
   * <p>The ARN of the Lambda function used by the action engine.</p>
   */
  lambdaFunctionArn: string | undefined;
}

/**
 * @public
 * <p>The action engine, or executor, related to the supported integration model used to
 *             create and update the action type. The available executor types are <code>Lambda</code>
 *             and <code>JobWorker</code>.</p>
 */
export interface ExecutorConfiguration {
  /**
   * @public
   * <p>Details about the <code>Lambda</code> executor of the action type.</p>
   */
  lambdaExecutorConfiguration?: LambdaExecutorConfiguration;

  /**
   * @public
   * <p>Details about the <code>JobWorker</code> executor of the action type.</p>
   */
  jobWorkerExecutorConfiguration?: JobWorkerExecutorConfiguration;
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
 * @public
 * <p>The action engine, or executor, for an action type created for a provider, where the
 *             action is to be used by customers of the provider. The action engine is associated with
 *             the model used to create and update the action, such as the Lambda integration
 *             model.</p>
 */
export interface ActionTypeExecutor {
  /**
   * @public
   * <p>The action configuration properties for the action type. These properties are
   *             specified in the action definition when the action type is created.</p>
   */
  configuration: ExecutorConfiguration | undefined;

  /**
   * @public
   * <p>The integration model used to create and update the action type, <code>Lambda</code>
   *             or <code>JobWorker</code>. </p>
   */
  type: ExecutorType | undefined;

  /**
   * @public
   * <p>The policy statement that specifies the permissions in the CodePipeline customer
   *             account that are needed to successfully run an action.</p>
   *          <p>To grant permission to another account, specify the account ID as the Principal, a
   *             domain-style identifier defined by the service, for example
   *                 <code>codepipeline.amazonaws.com</code>.</p>
   *          <note>
   *             <p>The size of the passed JSON policy document cannot exceed 2048 characters.</p>
   *          </note>
   */
  policyStatementsTemplate?: string;

  /**
   * @public
   * <p>The timeout in seconds for the job. An action execution can have multiple jobs. This
   *             is the timeout for a single job, not the entire action execution.</p>
   */
  jobTimeout?: number;
}

/**
 * @public
 * <p>Specifies the category, owner, provider, and version of the action type.</p>
 */
export interface ActionTypeIdentifier {
  /**
   * @public
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
   */
  category: ActionCategory | undefined;

  /**
   * @public
   * <p>The creator of the action type being called: <code>AWS</code> or
   *                 <code>ThirdParty</code>.</p>
   */
  owner: string | undefined;

  /**
   * @public
   * <p>The provider of the action type being called. The provider name is supplied when the
   *             action type is created.</p>
   */
  provider: string | undefined;

  /**
   * @public
   * <p>A string that describes the action type version.</p>
   */
  version: string | undefined;
}

/**
 * @public
 * <p>Details identifying the users with permissions to use the action type.</p>
 */
export interface ActionTypePermissions {
  /**
   * @public
   * <p>A list of Amazon Web Services account IDs with access to use the action type in their
   *             pipelines.</p>
   */
  allowedAccounts: string[] | undefined;
}

/**
 * @public
 * <p>Represents information about each property specified in the action configuration, such
 *             as the description and key name that display for the customer using the action
 *             type.</p>
 */
export interface ActionTypeProperty {
  /**
   * @public
   * <p>The property name that is displayed to users.</p>
   */
  name: string | undefined;

  /**
   * @public
   * <p>Whether the configuration property is an optional value.</p>
   */
  optional: boolean | undefined;

  /**
   * @public
   * <p>Whether the configuration property is a key.</p>
   */
  key: boolean | undefined;

  /**
   * @public
   * <p>Whether to omit the field value entered by the customer in the log. If
   *                 <code>true</code>, the value is not saved in CloudTrail logs for the action
   *             execution.</p>
   */
  noEcho: boolean | undefined;

  /**
   * @public
   * <p>Indicates that the property is used with polling. An action type can have up to one
   *             queryable property. If it has one, that property must be both required and not
   *             secret.</p>
   */
  queryable?: boolean;

  /**
   * @public
   * <p>The description of the property that is displayed to users.</p>
   */
  description?: string;
}

/**
 * @public
 * <p>Returns information about URLs for web pages that display to customers as links on the
 *             pipeline view, such as an external configuration page for the action type.</p>
 */
export interface ActionTypeUrls {
  /**
   * @public
   * <p>The URL returned to the CodePipeline console that contains a link to the page
   *             where customers can configure the external action.</p>
   */
  configurationUrl?: string;

  /**
   * @public
   * <p>The URL returned to the CodePipeline console that provides a deep link to the
   *             resources of the external system, such as a status page. This link is provided as part
   *             of the action display in the pipeline.</p>
   */
  entityUrlTemplate?: string;

  /**
   * @public
   * <p>The link to an execution page for the action type in progress. For example, for a
   *             CodeDeploy action, this link is shown on the pipeline view page in the CodePipeline console, and it links to a CodeDeploy status page.</p>
   */
  executionUrlTemplate?: string;

  /**
   * @public
   * <p>The URL returned to the CodePipeline console that contains a link to the page
   *             where customers can update or change the configuration of the external action.</p>
   */
  revisionUrlTemplate?: string;
}

/**
 * @public
 * <p>The parameters for the action type definition that are provided when the action type
 *             is created or updated.</p>
 */
export interface ActionTypeDeclaration {
  /**
   * @public
   * <p>The description for the action type to be updated.</p>
   */
  description?: string;

  /**
   * @public
   * <p>Information about the executor for an action type that was created with any supported
   *             integration model.</p>
   */
  executor: ActionTypeExecutor | undefined;

  /**
   * @public
   * <p>The action category, owner, provider, and version of the action type to be
   *             updated.</p>
   */
  id: ActionTypeIdentifier | undefined;

  /**
   * @public
   * <p>Details for the artifacts, such as application files, to be worked on by the action.
   *             For example, the minimum and maximum number of input artifacts allowed.</p>
   */
  inputArtifactDetails: ActionTypeArtifactDetails | undefined;

  /**
   * @public
   * <p>Details for the output artifacts, such as a built application, that are the result of
   *             the action. For example, the minimum and maximum number of output artifacts
   *             allowed.</p>
   */
  outputArtifactDetails: ActionTypeArtifactDetails | undefined;

  /**
   * @public
   * <p>Details identifying the accounts with permissions to use the action type.</p>
   */
  permissions?: ActionTypePermissions;

  /**
   * @public
   * <p>The properties of the action type to be updated.</p>
   */
  properties?: ActionTypeProperty[];

  /**
   * @public
   * <p>The links associated with the action type to be updated.</p>
   */
  urls?: ActionTypeUrls;
}

/**
 * @public
 * <p>The specified action type cannot be found.</p>
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
 * @public
 * <p>The approval action has already been approved or rejected.</p>
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
 * @public
 * <p>Represents information about the result of an approval request.</p>
 */
export interface ApprovalResult {
  /**
   * @public
   * <p>The summary of the current status of the approval request.</p>
   */
  summary: string | undefined;

  /**
   * @public
   * <p>The response submitted by a reviewer assigned to an approval action
   *             request.</p>
   */
  status: ApprovalStatus | undefined;
}

/**
 * @public
 * <p>The location of the S3 bucket that contains a revision.</p>
 */
export interface S3ArtifactLocation {
  /**
   * @public
   * <p>The name of the S3 bucket.</p>
   */
  bucketName: string | undefined;

  /**
   * @public
   * <p>The key of the object in the S3 bucket, which uniquely identifies the object in the
   *             bucket.</p>
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
 * @public
 * <p>Represents information about the location of an artifact.</p>
 */
export interface ArtifactLocation {
  /**
   * @public
   * <p>The type of artifact in the location.</p>
   */
  type?: ArtifactLocationType;

  /**
   * @public
   * <p>The S3 bucket that contains the artifact.</p>
   */
  s3Location?: S3ArtifactLocation;
}

/**
 * @public
 * <p>Artifacts are the files that are worked on by actions in the pipeline. See the
 *             action configuration for each action for details about artifact parameters. For example,
 *             the S3 source action artifact is a file name (or file path), and the files are generally
 *             provided as a ZIP file. Example artifact name: SampleApp_Windows.zip</p>
 */
export interface Artifact {
  /**
   * @public
   * <p>The artifact's name.</p>
   */
  name?: string;

  /**
   * @public
   * <p>The artifact's revision ID. Depending on the type of object, this could be a commit
   *             ID (GitHub) or a revision ID (Amazon S3).</p>
   */
  revision?: string;

  /**
   * @public
   * <p>The location of an artifact.</p>
   */
  location?: ArtifactLocation;
}

/**
 * @public
 * <p>Represents revision details of an artifact. </p>
 */
export interface ArtifactRevision {
  /**
   * @public
   * <p>The name of an artifact. This name might be system-generated, such as "MyApp", or
   *             defined by the user when an action is created.</p>
   */
  name?: string;

  /**
   * @public
   * <p>The revision ID of the artifact.</p>
   */
  revisionId?: string;

  /**
   * @public
   * <p>An additional identifier for a revision, such as a commit date or, for artifacts
   *             stored in Amazon S3 buckets, the ETag value.</p>
   */
  revisionChangeIdentifier?: string;

  /**
   * @public
   * <p>Summary information about the most recent revision of the artifact. For GitHub and
   *             CodeCommit repositories, the commit message. For Amazon S3 buckets or actions, the
   *             user-provided content of a <code>codepipeline-artifact-revision-summary</code> key
   *             specified in the object metadata.</p>
   */
  revisionSummary?: string;

  /**
   * @public
   * <p>The date and time when the most recent revision of the artifact was created, in
   *             timestamp format.</p>
   */
  created?: Date;

  /**
   * @public
   * <p>The commit ID for the artifact revision. For artifacts stored in GitHub or
   *             CodeCommit repositories, the commit ID is linked to a commit details page.</p>
   */
  revisionUrl?: string;
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
 * @public
 * <p>Represents information about the key used to encrypt data in the artifact store,
 *             such as an Amazon Web Services Key Management Service (Key Management Service)
 *             key.</p>
 */
export interface EncryptionKey {
  /**
   * @public
   * <p>The ID used to identify the key. For an Amazon Web Services KMS key, you can use the
   *             key ID, the key ARN, or the alias ARN.</p>
   *          <note>
   *             <p>Aliases are recognized only in the account that created the KMS
   *                 key. For cross-account actions, you can only use the key ID or key ARN to identify
   *                 the key. Cross-account actions involve using the role from the other account
   *                 (AccountB), so specifying the key ID will use the key from the other account
   *                 (AccountB).</p>
   *          </note>
   */
  id: string | undefined;

  /**
   * @public
   * <p>The type of encryption key, such as an Amazon Web Services KMS key. When creating or
   *             updating a pipeline, the value must be set to 'KMS'.</p>
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
 * @public
 * <p>The S3 bucket where artifacts for the pipeline are stored.</p>
 *          <note>
 *             <p>You must include either <code>artifactStore</code> or
 *                     <code>artifactStores</code> in your pipeline, but you cannot use both. If you
 *                 create a cross-region action in your pipeline, you must use
 *                     <code>artifactStores</code>.</p>
 *          </note>
 */
export interface ArtifactStore {
  /**
   * @public
   * <p>The type of the artifact store, such as S3.</p>
   */
  type: ArtifactStoreType | undefined;

  /**
   * @public
   * <p>The S3 bucket used for storing the artifacts for a pipeline. You can specify the
   *             name of an S3 bucket but not a folder in the bucket. A folder to contain the pipeline
   *             artifacts is created for you based on the name of the pipeline. You can use any S3
   *             bucket in the same Amazon Web Services Region as the pipeline to store your pipeline
   *             artifacts.</p>
   */
  location: string | undefined;

  /**
   * @public
   * <p>The encryption key used to encrypt the data in the artifact store, such as an
   *                 Amazon Web Services Key Management Service key. If this is undefined, the default key
   *             for Amazon S3 is used.</p>
   */
  encryptionKey?: EncryptionKey;
}

/**
 * @public
 * <p>Represents an Amazon Web Services session credentials object. These credentials are
 *             temporary credentials that are issued by Amazon Web Services Secure Token Service (STS).
 *             They can be used to access input and output artifacts in the S3 bucket used to store
 *             artifact for the pipeline in CodePipeline.</p>
 */
export interface AWSSessionCredentials {
  /**
   * @public
   * <p>The access key for the session.</p>
   */
  accessKeyId: string | undefined;

  /**
   * @public
   * <p>The secret access key for the session.</p>
   */
  secretAccessKey: string | undefined;

  /**
   * @public
   * <p>The token for the session.</p>
   */
  sessionToken: string | undefined;
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
 * @public
 * <p>Reserved for future use.</p>
 */
export interface BlockerDeclaration {
  /**
   * @public
   * <p>Reserved for future use.</p>
   */
  name: string | undefined;

  /**
   * @public
   * <p>Reserved for future use.</p>
   */
  type: BlockerType | undefined;
}

/**
 * @public
 * <p>Unable to modify the tag due to a simultaneous update request.</p>
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
 * @public
 * <p>A tag is a key-value pair that is used to manage the resource.</p>
 */
export interface Tag {
  /**
   * @public
   * <p>The tag's key.</p>
   */
  key: string | undefined;

  /**
   * @public
   * <p>The tag's value.</p>
   */
  value: string | undefined;
}

/**
 * @public
 * <p>Represents the input of a CreateCustomActionType operation.</p>
 */
export interface CreateCustomActionTypeInput {
  /**
   * @public
   * <p>The category of the custom action, such as a build action or a test
   *             action.</p>
   */
  category: ActionCategory | undefined;

  /**
   * @public
   * <p>The provider of the service used in the custom action, such as
   *             CodeDeploy.</p>
   */
  provider: string | undefined;

  /**
   * @public
   * <p>The version identifier of the custom action.</p>
   */
  version: string | undefined;

  /**
   * @public
   * <p>URLs that provide users information about this custom action.</p>
   */
  settings?: ActionTypeSettings;

  /**
   * @public
   * <p>The configuration properties for the custom action.</p>
   *          <note>
   *             <p>You can refer to a name in the configuration properties of the custom action
   *                 within the URL templates by following the format of \{Config:name\}, as long as the
   *                 configuration property is both required and not secret. For more information, see
   *                     <a href="https://docs.aws.amazon.com/codepipeline/latest/userguide/how-to-create-custom-action.html">Create a
   *                     Custom Action for a Pipeline</a>.</p>
   *          </note>
   */
  configurationProperties?: ActionConfigurationProperty[];

  /**
   * @public
   * <p>The details of the input artifact for the action, such as its commit ID.</p>
   */
  inputArtifactDetails: ArtifactDetails | undefined;

  /**
   * @public
   * <p>The details of the output artifact of the action, such as its commit ID.</p>
   */
  outputArtifactDetails: ArtifactDetails | undefined;

  /**
   * @public
   * <p>The tags for the custom action.</p>
   */
  tags?: Tag[];
}

/**
 * @public
 * <p>Represents the output of a <code>CreateCustomActionType</code> operation.</p>
 */
export interface CreateCustomActionTypeOutput {
  /**
   * @public
   * <p>Returns information about the details of an action type.</p>
   */
  actionType: ActionType | undefined;

  /**
   * @public
   * <p>Specifies the tags applied to the custom action.</p>
   */
  tags?: Tag[];
}

/**
 * @public
 * <p>The specified resource tags are invalid.</p>
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
 * @public
 * <p>The number of pipelines associated with the Amazon Web Services account has exceeded
 *             the limit allowed for the account.</p>
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
 * @public
 * <p>The tags limit for a resource has been exceeded.</p>
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
 * <p>Represents information about a stage and its definition.</p>
 */
export interface StageDeclaration {
  /**
   * @public
   * <p>The name of the stage.</p>
   */
  name: string | undefined;

  /**
   * @public
   * <p>Reserved for future use.</p>
   */
  blockers?: BlockerDeclaration[];

  /**
   * @public
   * <p>The actions included in a stage.</p>
   */
  actions: ActionDeclaration[] | undefined;
}

/**
 * @public
 * <p>The Git tags specified as filter criteria for whether a Git tag repository event
 *             will start the pipeline.</p>
 */
export interface GitTagFilterCriteria {
  /**
   * @public
   * <p>The list of patterns of Git tags that, when pushed, are to be included as criteria
   *             that starts the pipeline.</p>
   */
  includes?: string[];

  /**
   * @public
   * <p>The list of patterns of Git tags that, when pushed, are to be excluded from
   *             starting the pipeline.</p>
   */
  excludes?: string[];
}

/**
 * @public
 * <p>The event criteria that specify when a specified repository event will start the pipeline for the specified trigger configuration, such as the lists of Git tags to include and exclude.</p>
 */
export interface GitPushFilter {
  /**
   * @public
   * <p>The field that contains the details for the Git tags trigger
   *             configuration.</p>
   */
  tags?: GitTagFilterCriteria;
}

/**
 * @public
 * <p>A type of trigger configuration for Git-based source actions.</p>
 *          <note>
 *             <p>You can specify the Git configuration trigger type for all third-party
 *                 Git-based source actions that are supported by the
 *                     <code>CodeStarSourceConnection</code> action type.</p>
 *          </note>
 *          <note>
 *             <p>V2 type pipelines, along with triggers on Git tags and pipeline-level variables,
 *                 are not currently supported for CloudFormation and CDK resources in CodePipeline. For more information about V2 type pipelines, see <a href="https://docs.aws.amazon.com/codepipeline/latest/userguide/pipeline-types.html">Pipeline types</a>
 *                 in the <i>CodePipeline User Guide</i>.</p>
 *          </note>
 */
export interface GitConfiguration {
  /**
   * @public
   * <p>The name of the pipeline source action where the trigger configuration, such as Git
   *             tags, is specified. The trigger configuration will start the pipeline upon the specified
   *             change only.</p>
   *          <note>
   *             <p>You can only specify one trigger configuration per source action.</p>
   *          </note>
   */
  sourceActionName: string | undefined;

  /**
   * @public
   * <p>The field where the repository event that will start the pipeline, such as pushing
   *             Git tags, is specified with details.</p>
   *          <note>
   *             <p>Git tags is the only supported event type.</p>
   *          </note>
   */
  push?: GitPushFilter[];
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
 * @public
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
 *          <note>
 *             <p>V2 type pipelines, along with triggers on Git tags and pipeline-level variables,
 *                 are not currently supported for CloudFormation and CDK resources in CodePipeline. For more information about V2 type pipelines, see <a href="https://docs.aws.amazon.com/codepipeline/latest/userguide/pipeline-types.html">Pipeline types</a>
 *                 in the <i>CodePipeline User Guide</i>.</p>
 *          </note>
 */
export interface PipelineTriggerDeclaration {
  /**
   * @public
   * <p>The source provider for the event, such as connections configured for a repository
   *             with Git tags, for the specified trigger configuration.</p>
   */
  providerType: PipelineTriggerProviderType | undefined;

  /**
   * @public
   * <p>Provides the filter criteria and the source stage for the repository event that
   *             starts the pipeline, such as Git tags.</p>
   */
  gitConfiguration: GitConfiguration | undefined;
}

/**
 * @public
 * <p>A variable declared at the pipeline level.</p>
 *          <note>
 *             <p>V2 type pipelines, along with triggers on Git tags and pipeline-level variables,
 *                 are not currently supported for CloudFormation and CDK resources in CodePipeline. For more information about V2 type pipelines, see <a href="https://docs.aws.amazon.com/codepipeline/latest/userguide/pipeline-types.html">Pipeline types</a>
 *                 in the <i>CodePipeline User Guide</i>.</p>
 *          </note>
 */
export interface PipelineVariableDeclaration {
  /**
   * @public
   * <p>The name of a pipeline-level variable.</p>
   */
  name: string | undefined;

  /**
   * @public
   * <p>The value of a pipeline-level variable.</p>
   */
  defaultValue?: string;

  /**
   * @public
   * <p>The description of a pipeline-level variable. It's used to add additional context about the variable, and not being used at time when pipeline executes.</p>
   */
  description?: string;
}

/**
 * @public
 * <p>Represents the structure of actions and stages to be performed in the
 *             pipeline.</p>
 */
export interface PipelineDeclaration {
  /**
   * @public
   * <p>The name of the pipeline.</p>
   */
  name: string | undefined;

  /**
   * @public
   * <p>The Amazon Resource Name (ARN) for CodePipeline to use to either perform
   *             actions with no <code>actionRoleArn</code>, or to use to assume roles for actions with
   *             an <code>actionRoleArn</code>.</p>
   */
  roleArn: string | undefined;

  /**
   * @public
   * <p>Represents information about the S3 bucket where artifacts are stored for the
   *             pipeline.</p>
   *          <note>
   *             <p>You must include either <code>artifactStore</code> or
   *                     <code>artifactStores</code> in your pipeline, but you cannot use both. If you
   *                 create a cross-region action in your pipeline, you must use
   *                     <code>artifactStores</code>.</p>
   *          </note>
   */
  artifactStore?: ArtifactStore;

  /**
   * @public
   * <p>A mapping of <code>artifactStore</code> objects and their corresponding Amazon Web Services Regions. There must be an artifact store for the pipeline Region and for
   *             each cross-region action in the pipeline.</p>
   *          <note>
   *             <p>You must include either <code>artifactStore</code> or
   *                     <code>artifactStores</code> in your pipeline, but you cannot use both. If you
   *                 create a cross-region action in your pipeline, you must use
   *                     <code>artifactStores</code>.</p>
   *          </note>
   */
  artifactStores?: Record<string, ArtifactStore>;

  /**
   * @public
   * <p>The stage in which to perform the action.</p>
   */
  stages: StageDeclaration[] | undefined;

  /**
   * @public
   * <p>The version number of the pipeline. A new pipeline always has a version number of
   *             1. This number is incremented when a pipeline is updated.</p>
   */
  version?: number;

  /**
   * @public
   * <p>CodePipeline provides the following pipeline types, which differ in characteristics and
   *             price, so that you can tailor your pipeline features and cost to the needs of your
   *             applications.</p>
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
   *          <p>For information about pricing for CodePipeline, see <a href="https://aws.amazon.com/codepipeline/pricing/">Pricing</a>.</p>
   *          <p>
   *             For information about which type of pipeline to choose, see <a href="https://docs.aws.amazon.com/codepipeline/latest/userguide/pipeline-types-planning.html">What type of pipeline is right for me?</a>.</p>
   *          <note>
   *             <p>V2 type pipelines, along with triggers on Git tags and pipeline-level variables,
   *                 are not currently supported for CloudFormation and CDK resources in CodePipeline. For more information about V2 type pipelines, see <a href="https://docs.aws.amazon.com/codepipeline/latest/userguide/pipeline-types.html">Pipeline types</a>
   *                 in the <i>CodePipeline User Guide</i>.</p>
   *          </note>
   */
  pipelineType?: PipelineType;

  /**
   * @public
   * <p>The trigger configuration specifying a type of event, such as Git tags, that starts the pipeline.</p>
   *          <note>
   *             <p>When a trigger configuration is specified, default change detection for
   *                 repository and branch commits is disabled.</p>
   *          </note>
   */
  triggers?: PipelineTriggerDeclaration[];

  /**
   * @public
   * <p>A list that defines the pipeline variables for a pipeline resource. Variable names can
   *             have alphanumeric and underscore characters, and the values must match
   *                 <code>[A-Za-z0-9@\-_]+</code>.</p>
   */
  variables?: PipelineVariableDeclaration[];
}

/**
 * @public
 * <p>Represents the input of a <code>CreatePipeline</code> action.</p>
 */
export interface CreatePipelineInput {
  /**
   * @public
   * <p>Represents the structure of actions and stages to be performed in the pipeline.
   *         </p>
   */
  pipeline: PipelineDeclaration | undefined;

  /**
   * @public
   * <p>The tags for the pipeline.</p>
   */
  tags?: Tag[];
}

/**
 * @public
 * <p>Represents the output of a <code>CreatePipeline</code> action.</p>
 */
export interface CreatePipelineOutput {
  /**
   * @public
   * <p>Represents the structure of actions and stages to be performed in the pipeline.
   *         </p>
   */
  pipeline?: PipelineDeclaration;

  /**
   * @public
   * <p>Specifies the tags applied to the pipeline.</p>
   */
  tags?: Tag[];
}

/**
 * @public
 * <p>The action declaration was specified in an invalid format.</p>
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
 * @public
 * <p>Reserved for future use.</p>
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
 * @public
 * <p>The stage declaration was specified in an invalid format.</p>
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
 * @public
 * <p>The structure was specified in an invalid format.</p>
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
 * @public
 * <p>The specified pipeline name is already in use.</p>
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
 * @public
 * <p>Represents the input of a <code>DeleteCustomActionType</code> operation. The custom
 *             action will be marked as deleted.</p>
 */
export interface DeleteCustomActionTypeInput {
  /**
   * @public
   * <p>The category of the custom action that you want to delete, such as source or
   *             deploy.</p>
   */
  category: ActionCategory | undefined;

  /**
   * @public
   * <p>The provider of the service used in the custom action, such as
   *             CodeDeploy.</p>
   */
  provider: string | undefined;

  /**
   * @public
   * <p>The version of the custom action to delete.</p>
   */
  version: string | undefined;
}

/**
 * @public
 * <p>Represents the input of a <code>DeletePipeline</code> action.</p>
 */
export interface DeletePipelineInput {
  /**
   * @public
   * <p>The name of the pipeline to be deleted.</p>
   */
  name: string | undefined;
}

/**
 * @public
 */
export interface DeleteWebhookInput {
  /**
   * @public
   * <p>The name of the webhook you want to delete.</p>
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
   * @public
   * <p>The name of the webhook you want to deregister.</p>
   */
  webhookName?: string;
}

/**
 * @public
 */
export interface DeregisterWebhookWithThirdPartyOutput {}

/**
 * @public
 * <p>The specified webhook was entered in an invalid format or cannot be
 *             found.</p>
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
 * @public
 * <p>Represents the input of a <code>DisableStageTransition</code> action.</p>
 */
export interface DisableStageTransitionInput {
  /**
   * @public
   * <p>The name of the pipeline in which you want to disable the flow of artifacts from
   *             one stage to another.</p>
   */
  pipelineName: string | undefined;

  /**
   * @public
   * <p>The name of the stage where you want to disable the inbound or outbound transition
   *             of artifacts.</p>
   */
  stageName: string | undefined;

  /**
   * @public
   * <p>Specifies whether artifacts are prevented from transitioning into the stage and
   *             being processed by the actions in that stage (inbound), or prevented from transitioning
   *             from the stage after they have been processed by the actions in that stage
   *             (outbound).</p>
   */
  transitionType: StageTransitionType | undefined;

  /**
   * @public
   * <p>The reason given to the user that a stage is disabled, such as waiting for manual
   *             approval or manual tests. This message is displayed in the pipeline console
   *             UI.</p>
   */
  reason: string | undefined;
}

/**
 * @public
 * <p>The pipeline was specified in an invalid format or cannot be found.</p>
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
 * @public
 * <p>The stage was specified in an invalid format or cannot be found.</p>
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
 * @public
 * <p>Represents the input of an <code>EnableStageTransition</code> action.</p>
 */
export interface EnableStageTransitionInput {
  /**
   * @public
   * <p>The name of the pipeline in which you want to enable the flow of artifacts from one
   *             stage to another.</p>
   */
  pipelineName: string | undefined;

  /**
   * @public
   * <p>The name of the stage where you want to enable the transition of artifacts, either
   *             into the stage (inbound) or from that stage to the next stage (outbound).</p>
   */
  stageName: string | undefined;

  /**
   * @public
   * <p>Specifies whether artifacts are allowed to enter the stage and be processed by the
   *             actions in that stage (inbound) or whether already processed artifacts are allowed to
   *             transition to the next stage (outbound).</p>
   */
  transitionType: StageTransitionType | undefined;
}

/**
 * @public
 */
export interface GetActionTypeInput {
  /**
   * @public
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
   *          </ul>
   */
  category: ActionCategory | undefined;

  /**
   * @public
   * <p>The creator of an action type that was created with any supported integration model.
   *             There are two valid values: <code>AWS</code> and <code>ThirdParty</code>.</p>
   */
  owner: string | undefined;

  /**
   * @public
   * <p>The provider of the action type being called. The provider name is specified when the
   *             action type is created.</p>
   */
  provider: string | undefined;

  /**
   * @public
   * <p>A string that describes the action type version.</p>
   */
  version: string | undefined;
}

/**
 * @public
 */
export interface GetActionTypeOutput {
  /**
   * @public
   * <p>The action type information for the requested action type, such as the action type
   *             ID.</p>
   */
  actionType?: ActionTypeDeclaration;
}

/**
 * @public
 * <p>Represents the input of a <code>GetJobDetails</code> action.</p>
 */
export interface GetJobDetailsInput {
  /**
   * @public
   * <p>The unique system-generated ID for the job.</p>
   */
  jobId: string | undefined;
}

/**
 * @public
 * <p>Represents information about a stage to a job worker.</p>
 */
export interface StageContext {
  /**
   * @public
   * <p>The name of the stage.</p>
   */
  name?: string;
}

/**
 * @public
 * <p>Represents information about a pipeline to a job worker.</p>
 *          <note>
 *             <p>PipelineContext contains <code>pipelineArn</code> and
 *                     <code>pipelineExecutionId</code> for custom action jobs. The
 *                     <code>pipelineArn</code> and <code>pipelineExecutionId</code> fields are not
 *                 populated for ThirdParty action jobs.</p>
 *          </note>
 */
export interface PipelineContext {
  /**
   * @public
   * <p>The name of the pipeline. This is a user-specified value. Pipeline names must be
   *             unique across all pipeline names under an Amazon Web Services account.</p>
   */
  pipelineName?: string;

  /**
   * @public
   * <p>The stage of the pipeline.</p>
   */
  stage?: StageContext;

  /**
   * @public
   * <p>The context of an action to a job worker in the stage of a pipeline.</p>
   */
  action?: ActionContext;

  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of the pipeline.</p>
   */
  pipelineArn?: string;

  /**
   * @public
   * <p>The execution ID of the pipeline.</p>
   */
  pipelineExecutionId?: string;
}

/**
 * @public
 * <p>Represents other information about a job required for a job worker to complete the
 *             job.</p>
 */
export interface JobData {
  /**
   * @public
   * <p>Represents information about an action type.</p>
   */
  actionTypeId?: ActionTypeId;

  /**
   * @public
   * <p>Represents information about an action configuration.</p>
   */
  actionConfiguration?: ActionConfiguration;

  /**
   * @public
   * <p>Represents information about a pipeline to a job worker.</p>
   *          <note>
   *             <p>Includes <code>pipelineArn</code> and <code>pipelineExecutionId</code> for
   *                 custom jobs.</p>
   *          </note>
   */
  pipelineContext?: PipelineContext;

  /**
   * @public
   * <p>The artifact supplied to the job.</p>
   */
  inputArtifacts?: Artifact[];

  /**
   * @public
   * <p>The output of the job.</p>
   */
  outputArtifacts?: Artifact[];

  /**
   * @public
   * <p>Represents an Amazon Web Services session credentials object. These credentials are
   *             temporary credentials that are issued by Amazon Web Services Secure Token Service (STS).
   *             They can be used to access input and output artifacts in the S3 bucket used to store
   *             artifacts for the pipeline in CodePipeline.</p>
   */
  artifactCredentials?: AWSSessionCredentials;

  /**
   * @public
   * <p>A system-generated token, such as a deployment ID, required by a job to continue
   *             the job asynchronously.</p>
   */
  continuationToken?: string;

  /**
   * @public
   * <p>Represents information about the key used to encrypt data in the artifact store,
   *             such as an KMS key. </p>
   */
  encryptionKey?: EncryptionKey;
}

/**
 * @public
 * <p>Represents information about the details of a job.</p>
 */
export interface JobDetails {
  /**
   * @public
   * <p>The unique system-generated ID of the job.</p>
   */
  id?: string;

  /**
   * @public
   * <p>Represents other information about a job required for a job worker to complete the
   *             job. </p>
   */
  data?: JobData;

  /**
   * @public
   * <p>The Amazon Web Services account ID associated with the job.</p>
   */
  accountId?: string;
}

/**
 * @public
 * <p>Represents the output of a <code>GetJobDetails</code> action.</p>
 */
export interface GetJobDetailsOutput {
  /**
   * @public
   * <p>The details of the job.</p>
   *          <note>
   *             <p>If AWSSessionCredentials is used, a long-running job can call
   *                     <code>GetJobDetails</code> again to obtain new credentials.</p>
   *          </note>
   */
  jobDetails?: JobDetails;
}

/**
 * @public
 * <p>Represents the input of a <code>GetPipeline</code> action.</p>
 */
export interface GetPipelineInput {
  /**
   * @public
   * <p>The name of the pipeline for which you want to get information. Pipeline names must
   *             be unique in an Amazon Web Services account.</p>
   */
  name: string | undefined;

  /**
   * @public
   * <p>The version number of the pipeline. If you do not specify a version, defaults to
   *             the current version.</p>
   */
  version?: number;
}

/**
 * @public
 * <p>Information about a pipeline.</p>
 */
export interface PipelineMetadata {
  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of the pipeline.</p>
   */
  pipelineArn?: string;

  /**
   * @public
   * <p>The date and time the pipeline was created, in timestamp format.</p>
   */
  created?: Date;

  /**
   * @public
   * <p>The date and time the pipeline was last updated, in timestamp format.</p>
   */
  updated?: Date;

  /**
   * @public
   * <p>The date and time that polling for source changes (periodic checks) was stopped for
   *             the pipeline, in timestamp format. You can migrate (update) a polling pipeline to use
   *             event-based change detection. For example, for a pipeline with a CodeCommit
   *             source, we recommend you migrate (update) your pipeline to use CloudWatch Events. To
   *             learn more, see <a href="https://docs.aws.amazon.com/codepipeline/latest/userguide/update-change-detection.html">Migrate polling
   *                 pipelines to use event-based change detection</a> in the CodePipeline
   *             User Guide.</p>
   */
  pollingDisabledAt?: Date;
}

/**
 * @public
 * <p>Represents the output of a <code>GetPipeline</code> action.</p>
 */
export interface GetPipelineOutput {
  /**
   * @public
   * <p>Represents the structure of actions and stages to be performed in the pipeline.
   *         </p>
   */
  pipeline?: PipelineDeclaration;

  /**
   * @public
   * <p>Represents the pipeline metadata information returned as part of the output of a
   *                 <code>GetPipeline</code> action.</p>
   */
  metadata?: PipelineMetadata;
}

/**
 * @public
 * <p>The pipeline version was specified in an invalid format or cannot be
 *             found.</p>
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
 * @public
 * <p>Represents the input of a <code>GetPipelineExecution</code> action.</p>
 */
export interface GetPipelineExecutionInput {
  /**
   * @public
   * <p>The name of the pipeline about which you want to get execution details.</p>
   */
  pipelineName: string | undefined;

  /**
   * @public
   * <p>The ID of the pipeline execution about which you want to get execution
   *             details.</p>
   */
  pipelineExecutionId: string | undefined;
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
  CloudWatchEvent: "CloudWatchEvent",
  CreatePipeline: "CreatePipeline",
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
 * @public
 * <p>The interaction or event that started a pipeline execution.</p>
 */
export interface ExecutionTrigger {
  /**
   * @public
   * <p>The type of change-detection method, command, or user interaction that started a
   *             pipeline execution.</p>
   */
  triggerType?: TriggerType;

  /**
   * @public
   * <p>Detail related to the event that started a pipeline execution, such as the webhook ARN
   *             of the webhook that triggered the pipeline execution or the user ARN for a
   *             user-initiated <code>start-pipeline-execution</code> CLI command.</p>
   */
  triggerDetail?: string;
}

/**
 * @public
 * <p>A pipeline-level variable used for a pipeline execution.</p>
 */
export interface ResolvedPipelineVariable {
  /**
   * @public
   * <p>The name of a pipeline-level variable.</p>
   */
  name?: string;

  /**
   * @public
   * <p>The resolved value of a pipeline-level variable.</p>
   */
  resolvedValue?: string;
}

/**
 * @public
 * <p>Represents information about an execution of a pipeline.</p>
 */
export interface PipelineExecution {
  /**
   * @public
   * <p>The name of the pipeline with the specified pipeline execution.</p>
   */
  pipelineName?: string;

  /**
   * @public
   * <p>The version number of the pipeline with the specified pipeline execution.</p>
   */
  pipelineVersion?: number;

  /**
   * @public
   * <p>The ID of the pipeline execution.</p>
   */
  pipelineExecutionId?: string;

  /**
   * @public
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
   */
  status?: PipelineExecutionStatus;

  /**
   * @public
   * <p>A summary that contains a description of the pipeline execution status.</p>
   */
  statusSummary?: string;

  /**
   * @public
   * <p>A list of <code>ArtifactRevision</code> objects included in a pipeline
   *             execution.</p>
   */
  artifactRevisions?: ArtifactRevision[];

  /**
   * @public
   * <p>The interaction or event that started a pipeline execution.</p>
   */
  trigger?: ExecutionTrigger;

  /**
   * @public
   * <p>A list of pipeline variables used for the pipeline execution.</p>
   */
  variables?: ResolvedPipelineVariable[];
}

/**
 * @public
 * <p>Represents the output of a <code>GetPipelineExecution</code> action.</p>
 */
export interface GetPipelineExecutionOutput {
  /**
   * @public
   * <p>Represents information about the execution of a pipeline.</p>
   */
  pipelineExecution?: PipelineExecution;
}

/**
 * @public
 * <p>The pipeline execution was specified in an invalid format or cannot be found, or an
 *             execution ID does not belong to the specified pipeline. </p>
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
 * @public
 * <p>Represents the input of a <code>GetPipelineState</code> action.</p>
 */
export interface GetPipelineStateInput {
  /**
   * @public
   * <p>The name of the pipeline about which you want to get information.</p>
   */
  name: string | undefined;
}

/**
 * @public
 * @enum
 */
export const StageExecutionStatus = {
  Cancelled: "Cancelled",
  Failed: "Failed",
  InProgress: "InProgress",
  Stopped: "Stopped",
  Stopping: "Stopping",
  Succeeded: "Succeeded",
} as const;

/**
 * @public
 */
export type StageExecutionStatus = (typeof StageExecutionStatus)[keyof typeof StageExecutionStatus];

/**
 * @public
 * <p>Represents information about the run of a stage.</p>
 */
export interface StageExecution {
  /**
   * @public
   * <p>The ID of the pipeline execution associated with the stage.</p>
   */
  pipelineExecutionId: string | undefined;

  /**
   * @public
   * <p>The status of the stage, or for a completed stage, the last status of the
   *             stage.</p>
   *          <note>
   *             <p>A status of cancelled means that the pipeline’s definition was updated before the
   *                 stage execution could be completed.</p>
   *          </note>
   */
  status: StageExecutionStatus | undefined;
}

/**
 * @public
 * <p>Represents information about the state of transitions between one stage and another
 *             stage.</p>
 */
export interface TransitionState {
  /**
   * @public
   * <p>Whether the transition between stages is enabled (true) or disabled
   *             (false).</p>
   */
  enabled?: boolean;

  /**
   * @public
   * <p>The ID of the user who last changed the transition state.</p>
   */
  lastChangedBy?: string;

  /**
   * @public
   * <p>The timestamp when the transition state was last changed.</p>
   */
  lastChangedAt?: Date;

  /**
   * @public
   * <p>The user-specified reason why the transition between two stages of a pipeline was
   *             disabled.</p>
   */
  disabledReason?: string;
}

/**
 * @public
 * <p>Represents information about the state of the stage.</p>
 */
export interface StageState {
  /**
   * @public
   * <p>The name of the stage.</p>
   */
  stageName?: string;

  /**
   * @public
   * <p>Represents information about the run of a stage.</p>
   */
  inboundExecution?: StageExecution;

  /**
   * @public
   * <p>The state of the inbound transition, which is either enabled or disabled.</p>
   */
  inboundTransitionState?: TransitionState;

  /**
   * @public
   * <p>The state of the stage.</p>
   */
  actionStates?: ActionState[];

  /**
   * @public
   * <p>Information about the latest execution in the stage, including its ID and
   *             status.</p>
   */
  latestExecution?: StageExecution;
}

/**
 * @public
 * <p>Represents the output of a <code>GetPipelineState</code> action.</p>
 */
export interface GetPipelineStateOutput {
  /**
   * @public
   * <p>The name of the pipeline for which you want to get the state.</p>
   */
  pipelineName?: string;

  /**
   * @public
   * <p>The version number of the pipeline.</p>
   *          <note>
   *             <p>A newly created pipeline is always assigned a version number of
   *                 <code>1</code>.</p>
   *          </note>
   */
  pipelineVersion?: number;

  /**
   * @public
   * <p>A list of the pipeline stage output information, including stage name, state, most
   *             recent run details, whether the stage is disabled, and other data.</p>
   */
  stageStates?: StageState[];

  /**
   * @public
   * <p>The date and time the pipeline was created, in timestamp format.</p>
   */
  created?: Date;

  /**
   * @public
   * <p>The date and time the pipeline was last updated, in timestamp format.</p>
   */
  updated?: Date;
}

/**
 * @public
 * <p>Represents the input of a <code>GetThirdPartyJobDetails</code> action.</p>
 */
export interface GetThirdPartyJobDetailsInput {
  /**
   * @public
   * <p>The unique system-generated ID used for identifying the job.</p>
   */
  jobId: string | undefined;

  /**
   * @public
   * <p>The clientToken portion of the clientId and clientToken pair used to verify that
   *             the calling entity is allowed access to the job and its details.</p>
   */
  clientToken: string | undefined;
}

/**
 * @public
 * <p>Represents information about the job data for a partner action.</p>
 */
export interface ThirdPartyJobData {
  /**
   * @public
   * <p>Represents information about an action type.</p>
   */
  actionTypeId?: ActionTypeId;

  /**
   * @public
   * <p>Represents information about an action configuration.</p>
   */
  actionConfiguration?: ActionConfiguration;

  /**
   * @public
   * <p>Represents information about a pipeline to a job worker.</p>
   *          <note>
   *             <p>Does not include <code>pipelineArn</code> and <code>pipelineExecutionId</code>
   *                 for ThirdParty jobs.</p>
   *          </note>
   */
  pipelineContext?: PipelineContext;

  /**
   * @public
   * <p>The name of the artifact that is worked on by the action, if any. This name might
   *             be system-generated, such as "MyApp", or it might be defined by the user when the action
   *             is created. The input artifact name must match the name of an output artifact generated
   *             by an action in an earlier action or stage of the pipeline.</p>
   */
  inputArtifacts?: Artifact[];

  /**
   * @public
   * <p>The name of the artifact that is the result of the action, if any. This name might
   *             be system-generated, such as "MyBuiltApp", or it might be defined by the user when the
   *             action is created.</p>
   */
  outputArtifacts?: Artifact[];

  /**
   * @public
   * <p>Represents an Amazon Web Services session credentials object. These credentials are
   *             temporary credentials that are issued by Amazon Web Services Secure Token Service (STS).
   *             They can be used to access input and output artifacts in the S3 bucket used to store
   *             artifact for the pipeline in CodePipeline. </p>
   */
  artifactCredentials?: AWSSessionCredentials;

  /**
   * @public
   * <p>A system-generated token, such as a CodeDeploy deployment ID, that a job requires
   *             to continue the job asynchronously.</p>
   */
  continuationToken?: string;

  /**
   * @public
   * <p>The encryption key used to encrypt and decrypt data in the artifact store for the
   *             pipeline, such as an Amazon Web Services Key Management Service (Amazon Web Services KMS)
   *             key. This is optional and might not be present.</p>
   */
  encryptionKey?: EncryptionKey;
}

/**
 * @public
 * <p>The details of a job sent in response to a <code>GetThirdPartyJobDetails</code>
 *             request.</p>
 */
export interface ThirdPartyJobDetails {
  /**
   * @public
   * <p>The identifier used to identify the job details in CodePipeline.</p>
   */
  id?: string;

  /**
   * @public
   * <p>The data to be returned by the third party job worker.</p>
   */
  data?: ThirdPartyJobData;

  /**
   * @public
   * <p>A system-generated random number that CodePipeline uses to ensure that the
   *             job is being worked on by only one job worker. Use this number in an <a>AcknowledgeThirdPartyJob</a> request.</p>
   */
  nonce?: string;
}

/**
 * @public
 * <p>Represents the output of a <code>GetThirdPartyJobDetails</code> action.</p>
 */
export interface GetThirdPartyJobDetailsOutput {
  /**
   * @public
   * <p>The details of the job, including any protected values defined for the
   *             job.</p>
   */
  jobDetails?: ThirdPartyJobDetails;
}

/**
 * @public
 * <p>The job was specified in an invalid format or cannot be found.</p>
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
 * @public
 * <p>The next token was specified in an invalid format. Make sure that the next token
 *             you provide is the token returned by a previous call.</p>
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
   * @public
   * <p> The name of the pipeline for which you want to list action execution history.</p>
   */
  pipelineName: string | undefined;

  /**
   * @public
   * <p>Input information used to filter action execution history.</p>
   */
  filter?: ActionExecutionFilter;

  /**
   * @public
   * <p>The maximum number of results to return in a single call. To retrieve the remaining
   *             results, make another call with the returned nextToken value. Action execution history
   *             is retained for up to 12 months, based on action execution start times. Default value is
   *             100. </p>
   *          <note>
   *             <p>Detailed execution history is available for executions run on or after February
   *                 21, 2019.</p>
   *          </note>
   */
  maxResults?: number;

  /**
   * @public
   * <p>The token that was returned from the previous <code>ListActionExecutions</code> call,
   *             which can be used to return the next set of action executions in the list.</p>
   */
  nextToken?: string;
}

/**
 * @public
 */
export interface ListActionExecutionsOutput {
  /**
   * @public
   * <p>The details for a list of recent executions, such as action execution ID.</p>
   */
  actionExecutionDetails?: ActionExecutionDetail[];

  /**
   * @public
   * <p>If the amount of returned information is significantly large, an identifier is also
   *             returned and can be used in a subsequent <code>ListActionExecutions</code> call to
   *             return the next set of action executions in the list.</p>
   */
  nextToken?: string;
}

/**
 * @public
 * <p>Represents the input of a <code>ListActionTypes</code> action.</p>
 */
export interface ListActionTypesInput {
  /**
   * @public
   * <p>Filters the list of action types to those created by a specified entity.</p>
   */
  actionOwnerFilter?: ActionOwner;

  /**
   * @public
   * <p>An identifier that was returned from the previous list action types call, which can
   *             be used to return the next set of action types in the list.</p>
   */
  nextToken?: string;

  /**
   * @public
   * <p>The Region to filter on for the list of action types.</p>
   */
  regionFilter?: string;
}

/**
 * @public
 * <p>Represents the output of a <code>ListActionTypes</code> action.</p>
 */
export interface ListActionTypesOutput {
  /**
   * @public
   * <p>Provides details of the action types.</p>
   */
  actionTypes: ActionType[] | undefined;

  /**
   * @public
   * <p>If the amount of returned information is significantly large, an identifier is also
   *             returned. It can be used in a subsequent list action types call to return the next set
   *             of action types in the list.</p>
   */
  nextToken?: string;
}

/**
 * @public
 * <p>Represents the input of a <code>ListPipelineExecutions</code> action.</p>
 */
export interface ListPipelineExecutionsInput {
  /**
   * @public
   * <p>The name of the pipeline for which you want to get execution summary
   *             information.</p>
   */
  pipelineName: string | undefined;

  /**
   * @public
   * <p>The maximum number of results to return in a single call. To retrieve the remaining
   *             results, make another call with the returned nextToken value. Pipeline history is
   *             limited to the most recent 12 months, based on pipeline execution start times. Default
   *             value is 100.</p>
   */
  maxResults?: number;

  /**
   * @public
   * <p>The token that was returned from the previous <code>ListPipelineExecutions</code>
   *             call, which can be used to return the next set of pipeline executions in the
   *             list.</p>
   */
  nextToken?: string;
}

/**
 * @public
 * <p>Information about the version (or revision) of a source artifact that initiated a
 *             pipeline execution.</p>
 */
export interface SourceRevision {
  /**
   * @public
   * <p>The name of the action that processed the revision to the source
   *             artifact.</p>
   */
  actionName: string | undefined;

  /**
   * @public
   * <p>The system-generated unique ID that identifies the revision number of the
   *             artifact.</p>
   */
  revisionId?: string;

  /**
   * @public
   * <p>Summary information about the most recent revision of the artifact. For GitHub and
   *             CodeCommit repositories, the commit message. For Amazon S3 buckets or actions,
   *             the user-provided content of a <code>codepipeline-artifact-revision-summary</code> key
   *             specified in the object metadata.</p>
   */
  revisionSummary?: string;

  /**
   * @public
   * <p>The commit ID for the artifact revision. For artifacts stored in GitHub or
   *             CodeCommit repositories, the commit ID is linked to a commit details page.</p>
   */
  revisionUrl?: string;
}

/**
 * @public
 * <p>The interaction that stopped a pipeline execution.</p>
 */
export interface StopExecutionTrigger {
  /**
   * @public
   * <p>The user-specified reason the pipeline was stopped.</p>
   */
  reason?: string;
}

/**
 * @public
 * <p>Summary information about a pipeline execution.</p>
 */
export interface PipelineExecutionSummary {
  /**
   * @public
   * <p>The ID of the pipeline execution.</p>
   */
  pipelineExecutionId?: string;

  /**
   * @public
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
   */
  status?: PipelineExecutionStatus;

  /**
   * @public
   * <p>The date and time when the pipeline execution began, in timestamp format.</p>
   */
  startTime?: Date;

  /**
   * @public
   * <p>The date and time of the last change to the pipeline execution, in timestamp
   *             format.</p>
   */
  lastUpdateTime?: Date;

  /**
   * @public
   * <p>A list of the source artifact revisions that initiated a pipeline
   *             execution.</p>
   */
  sourceRevisions?: SourceRevision[];

  /**
   * @public
   * <p>The interaction or event that started a pipeline execution, such as automated change
   *             detection or a <code>StartPipelineExecution</code> API call.</p>
   */
  trigger?: ExecutionTrigger;

  /**
   * @public
   * <p>The interaction that stopped a pipeline execution.</p>
   */
  stopTrigger?: StopExecutionTrigger;
}

/**
 * @public
 * <p>Represents the output of a <code>ListPipelineExecutions</code> action.</p>
 */
export interface ListPipelineExecutionsOutput {
  /**
   * @public
   * <p>A list of executions in the history of a pipeline.</p>
   */
  pipelineExecutionSummaries?: PipelineExecutionSummary[];

  /**
   * @public
   * <p>A token that can be used in the next <code>ListPipelineExecutions</code> call. To
   *             view all items in the list, continue to call this operation with each subsequent token
   *             until no more nextToken values are returned.</p>
   */
  nextToken?: string;
}

/**
 * @public
 * <p>Represents the input of a <code>ListPipelines</code> action.</p>
 */
export interface ListPipelinesInput {
  /**
   * @public
   * <p>An identifier that was returned from the previous list pipelines call. It can be
   *             used to return the next set of pipelines in the list.</p>
   */
  nextToken?: string;

  /**
   * @public
   * <p>The maximum number of pipelines to return in a single call. To retrieve the remaining
   *             pipelines, make another call with the returned nextToken value. The minimum value you
   *             can specify is 1. The maximum accepted value is 1000.</p>
   */
  maxResults?: number;
}

/**
 * @public
 * <p>Returns a summary of a pipeline.</p>
 */
export interface PipelineSummary {
  /**
   * @public
   * <p>The name of the pipeline.</p>
   */
  name?: string;

  /**
   * @public
   * <p>The version number of the pipeline.</p>
   */
  version?: number;

  /**
   * @public
   * <p>CodePipeline provides the following pipeline types, which differ in characteristics and
   *             price, so that you can tailor your pipeline features and cost to the needs of your
   *             applications.</p>
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
   *          <p>For information about pricing for CodePipeline, see <a href="https://aws.amazon.com/codepipeline/pricing/">Pricing</a>.</p>
   *          <p>
   *             For information about which type of pipeline to choose, see <a href="https://docs.aws.amazon.com/codepipeline/latest/userguide/pipeline-types-planning.html">What type of pipeline is right for me?</a>.</p>
   *          <note>
   *             <p>V2 type pipelines, along with triggers on Git tags and pipeline-level variables,
   *                 are not currently supported for CloudFormation and CDK resources in CodePipeline. For more information about V2 type pipelines, see <a href="https://docs.aws.amazon.com/codepipeline/latest/userguide/pipeline-types.html">Pipeline types</a>
   *                 in the <i>CodePipeline User Guide</i>.</p>
   *          </note>
   */
  pipelineType?: PipelineType;

  /**
   * @public
   * <p>The date and time the pipeline was created, in timestamp format.</p>
   */
  created?: Date;

  /**
   * @public
   * <p>The date and time of the last update to the pipeline, in timestamp
   *             format.</p>
   */
  updated?: Date;
}

/**
 * @public
 * <p>Represents the output of a <code>ListPipelines</code> action.</p>
 */
export interface ListPipelinesOutput {
  /**
   * @public
   * <p>The list of pipelines.</p>
   */
  pipelines?: PipelineSummary[];

  /**
   * @public
   * <p>If the amount of returned information is significantly large, an identifier is also
   *             returned. It can be used in a subsequent list pipelines call to return the next set of
   *             pipelines in the list.</p>
   */
  nextToken?: string;
}

/**
 * @public
 * <p>The specified resource ARN is invalid.</p>
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
   * @public
   * <p>The Amazon Resource Name (ARN) of the resource to get tags for.</p>
   */
  resourceArn: string | undefined;

  /**
   * @public
   * <p>The token that was returned from the previous API call, which would be used to return
   *             the next page of the list. The ListTagsforResource call lists all available tags in one
   *             call and does not use pagination.</p>
   */
  nextToken?: string;

  /**
   * @public
   * <p>The maximum number of results to return in a single call.</p>
   */
  maxResults?: number;
}

/**
 * @public
 */
export interface ListTagsForResourceOutput {
  /**
   * @public
   * <p>The tags for the resource.</p>
   */
  tags?: Tag[];

  /**
   * @public
   * <p>If the amount of returned information is significantly large, an identifier is also
   *             returned and can be used in a subsequent API call to return the next page of the list.
   *             The ListTagsforResource call lists all available tags in one call and does not use
   *             pagination.</p>
   */
  nextToken?: string;
}

/**
 * @public
 * <p>The resource was specified in an invalid format.</p>
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
   * @public
   * <p>The token that was returned from the previous ListWebhooks call, which can be used
   *             to return the next set of webhooks in the list.</p>
   */
  NextToken?: string;

  /**
   * @public
   * <p>The maximum number of results to return in a single call. To retrieve the remaining
   *             results, make another call with the returned nextToken value.</p>
   */
  MaxResults?: number;
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
 * @public
 * <p>The authentication applied to incoming webhook trigger requests.</p>
 */
export interface WebhookAuthConfiguration {
  /**
   * @public
   * <p>The property used to configure acceptance of webhooks in an IP address range. For
   *             IP, only the <code>AllowedIPRange</code> property must be set. This property must be set
   *             to a valid CIDR range.</p>
   */
  AllowedIPRange?: string;

  /**
   * @public
   * <p>The property used to configure GitHub authentication. For GITHUB_HMAC, only the
   *                 <code>SecretToken</code> property must be set.</p>
   */
  SecretToken?: string;
}

/**
 * @public
 * <p>The event criteria that specify when a webhook notification is sent to your
 *             URL.</p>
 */
export interface WebhookFilterRule {
  /**
   * @public
   * <p>A JsonPath expression that is applied to the body/payload of the webhook. The value
   *             selected by the JsonPath expression must match the value specified in the
   *                 <code>MatchEquals</code> field. Otherwise, the request is ignored. For more
   *             information, see <a href="https://github.com/json-path/JsonPath">Java JsonPath
   *                 implementation</a> in GitHub.</p>
   */
  jsonPath: string | undefined;

  /**
   * @public
   * <p>The value selected by the <code>JsonPath</code> expression must match what is
   *             supplied in the <code>MatchEquals</code> field. Otherwise, the request is ignored.
   *             Properties from the target action configuration can be included as placeholders in this
   *             value by surrounding the action configuration key with curly brackets. For example, if
   *             the value supplied here is "refs/heads/\{Branch\}" and the target action has an action
   *             configuration property called "Branch" with a value of "main", the
   *                 <code>MatchEquals</code> value is evaluated as "refs/heads/main". For a list of
   *             action configuration properties for built-in action types, see <a href="https://docs.aws.amazon.com/codepipeline/latest/userguide/reference-pipeline-structure.html#action-requirements">Pipeline Structure Reference Action Requirements</a>.</p>
   */
  matchEquals?: string;
}

/**
 * @public
 * <p>Represents information about a webhook and its definition.</p>
 */
export interface WebhookDefinition {
  /**
   * @public
   * <p>The name of the webhook.</p>
   */
  name: string | undefined;

  /**
   * @public
   * <p>The name of the pipeline you want to connect to the webhook.</p>
   */
  targetPipeline: string | undefined;

  /**
   * @public
   * <p>The name of the action in a pipeline you want to connect to the webhook. The action
   *             must be from the source (first) stage of the pipeline.</p>
   */
  targetAction: string | undefined;

  /**
   * @public
   * <p>A list of rules applied to the body/payload sent in the POST request to a webhook
   *             URL. All defined rules must pass for the request to be accepted and the pipeline
   *             started.</p>
   */
  filters: WebhookFilterRule[] | undefined;

  /**
   * @public
   * <p>Supported options are GITHUB_HMAC, IP, and UNAUTHENTICATED.</p>
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
   */
  authentication: WebhookAuthenticationType | undefined;

  /**
   * @public
   * <p>Properties that configure the authentication applied to incoming webhook trigger
   *             requests. The required properties depend on the authentication type. For GITHUB_HMAC,
   *             only the <code>SecretToken </code>property must be set. For IP, only the
   *                 <code>AllowedIPRange </code>property must be set to a valid CIDR range. For
   *             UNAUTHENTICATED, no properties can be set.</p>
   */
  authenticationConfiguration: WebhookAuthConfiguration | undefined;
}

/**
 * @public
 * <p>The detail returned for each webhook after listing webhooks, such as the webhook
 *             URL, the webhook name, and the webhook ARN.</p>
 */
export interface ListWebhookItem {
  /**
   * @public
   * <p>The detail returned for each webhook, such as the webhook authentication type and
   *             filter rules.</p>
   */
  definition: WebhookDefinition | undefined;

  /**
   * @public
   * <p>A unique URL generated by CodePipeline. When a POST request is made to this
   *             URL, the defined pipeline is started as long as the body of the post request satisfies
   *             the defined authentication and filtering conditions. Deleting and re-creating a webhook
   *             makes the old URL invalid and generates a new one.</p>
   */
  url: string | undefined;

  /**
   * @public
   * <p>The text of the error message about the webhook.</p>
   */
  errorMessage?: string;

  /**
   * @public
   * <p>The number code of the error.</p>
   */
  errorCode?: string;

  /**
   * @public
   * <p>The date and time a webhook was last successfully triggered, in timestamp
   *             format.</p>
   */
  lastTriggered?: Date;

  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of the webhook.</p>
   */
  arn?: string;

  /**
   * @public
   * <p>Specifies the tags applied to the webhook.</p>
   */
  tags?: Tag[];
}

/**
 * @public
 */
export interface ListWebhooksOutput {
  /**
   * @public
   * <p>The JSON detail returned for each webhook in the list output for the ListWebhooks
   *             call.</p>
   */
  webhooks?: ListWebhookItem[];

  /**
   * @public
   * <p>If the amount of returned information is significantly large, an identifier is also
   *             returned and can be used in a subsequent ListWebhooks call to return the next set of
   *             webhooks in the list. </p>
   */
  NextToken?: string;
}

/**
 * @public
 * <p>Represents the input of a <code>PollForJobs</code> action.</p>
 */
export interface PollForJobsInput {
  /**
   * @public
   * <p>Represents information about an action type.</p>
   */
  actionTypeId: ActionTypeId | undefined;

  /**
   * @public
   * <p>The maximum number of jobs to return in a poll for jobs call.</p>
   */
  maxBatchSize?: number;

  /**
   * @public
   * <p>A map of property names and values. For an action type with no queryable
   *             properties, this value must be null or an empty map. For an action type with a queryable
   *             property, you must supply that property as a key in the map. Only jobs whose action
   *             configuration matches the mapped value are returned.</p>
   */
  queryParam?: Record<string, string>;
}

/**
 * @public
 * <p>Represents information about a job.</p>
 */
export interface Job {
  /**
   * @public
   * <p>The unique system-generated ID of the job.</p>
   */
  id?: string;

  /**
   * @public
   * <p>Other data about a job.</p>
   */
  data?: JobData;

  /**
   * @public
   * <p>A system-generated random number that CodePipeline uses to ensure that the
   *             job is being worked on by only one job worker. Use this number in an <a>AcknowledgeJob</a> request.</p>
   */
  nonce?: string;

  /**
   * @public
   * <p>The ID of the Amazon Web Services account to use when performing the job.</p>
   */
  accountId?: string;
}

/**
 * @public
 * <p>Represents the output of a <code>PollForJobs</code> action.</p>
 */
export interface PollForJobsOutput {
  /**
   * @public
   * <p>Information about the jobs to take action on.</p>
   */
  jobs?: Job[];
}

/**
 * @public
 * <p>Represents the input of a <code>PollForThirdPartyJobs</code> action.</p>
 */
export interface PollForThirdPartyJobsInput {
  /**
   * @public
   * <p>Represents information about an action type.</p>
   */
  actionTypeId: ActionTypeId | undefined;

  /**
   * @public
   * <p>The maximum number of jobs to return in a poll for jobs call.</p>
   */
  maxBatchSize?: number;
}

/**
 * @public
 * <p>A response to a <code>PollForThirdPartyJobs</code> request returned by CodePipeline when there is a job to be worked on by a partner action.</p>
 */
export interface ThirdPartyJob {
  /**
   * @public
   * <p>The <code>clientToken</code> portion of the <code>clientId</code> and
   *                 <code>clientToken</code> pair used to verify that the calling entity is allowed
   *             access to the job and its details.</p>
   */
  clientId?: string;

  /**
   * @public
   * <p>The identifier used to identify the job in CodePipeline.</p>
   */
  jobId?: string;
}

/**
 * @public
 * <p>Represents the output of a <code>PollForThirdPartyJobs</code> action.</p>
 */
export interface PollForThirdPartyJobsOutput {
  /**
   * @public
   * <p>Information about the jobs to take action on.</p>
   */
  jobs?: ThirdPartyJob[];
}

/**
 * @public
 * <p>Represents the input of a <code>PutActionRevision</code> action.</p>
 */
export interface PutActionRevisionInput {
  /**
   * @public
   * <p>The name of the pipeline that starts processing the revision to the
   *             source.</p>
   */
  pipelineName: string | undefined;

  /**
   * @public
   * <p>The name of the stage that contains the action that acts on the revision.</p>
   */
  stageName: string | undefined;

  /**
   * @public
   * <p>The name of the action that processes the revision.</p>
   */
  actionName: string | undefined;

  /**
   * @public
   * <p>Represents information about the version (or revision) of an action.</p>
   */
  actionRevision: ActionRevision | undefined;
}

/**
 * @public
 * <p>Represents the output of a <code>PutActionRevision</code> action.</p>
 */
export interface PutActionRevisionOutput {
  /**
   * @public
   * <p>Indicates whether the artifact revision was previously used in an execution of the
   *             specified pipeline.</p>
   */
  newRevision?: boolean;

  /**
   * @public
   * <p>The ID of the current workflow state of the pipeline.</p>
   */
  pipelineExecutionId?: string;
}

/**
 * @public
 * <p>The approval request already received a response or has expired.</p>
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
 * @public
 * <p>Represents the input of a <code>PutApprovalResult</code> action.</p>
 */
export interface PutApprovalResultInput {
  /**
   * @public
   * <p>The name of the pipeline that contains the action. </p>
   */
  pipelineName: string | undefined;

  /**
   * @public
   * <p>The name of the stage that contains the action.</p>
   */
  stageName: string | undefined;

  /**
   * @public
   * <p>The name of the action for which approval is requested.</p>
   */
  actionName: string | undefined;

  /**
   * @public
   * <p>Represents information about the result of the approval request.</p>
   */
  result: ApprovalResult | undefined;

  /**
   * @public
   * <p>The system-generated token used to identify a unique approval request. The token
   *             for each open approval request can be obtained using the <a>GetPipelineState</a> action. It is used to validate that the approval
   *             request corresponding to this token is still valid.</p>
   */
  token: string | undefined;
}

/**
 * @public
 * <p>Represents the output of a <code>PutApprovalResult</code> action.</p>
 */
export interface PutApprovalResultOutput {
  /**
   * @public
   * <p>The timestamp showing when the approval or rejection was submitted.</p>
   */
  approvedAt?: Date;
}

/**
 * @public
 * <p>The job state was specified in an invalid format.</p>
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
 * @public
 * <p>Represents information about failure details.</p>
 */
export interface FailureDetails {
  /**
   * @public
   * <p>The type of the failure.</p>
   */
  type: FailureType | undefined;

  /**
   * @public
   * <p>The message about the failure.</p>
   */
  message: string | undefined;

  /**
   * @public
   * <p>The external ID of the run of the action that failed.</p>
   */
  externalExecutionId?: string;
}

/**
 * @public
 * <p>Represents the input of a <code>PutJobFailureResult</code> action.</p>
 */
export interface PutJobFailureResultInput {
  /**
   * @public
   * <p>The unique system-generated ID of the job that failed. This is the same ID returned
   *             from <code>PollForJobs</code>.</p>
   */
  jobId: string | undefined;

  /**
   * @public
   * <p>The details about the failure of a job.</p>
   */
  failureDetails: FailureDetails | undefined;
}

/**
 * @public
 * <p>Exceeded the total size limit for all variables in the pipeline.</p>
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
 * @public
 * <p>Represents information about a current revision.</p>
 */
export interface CurrentRevision {
  /**
   * @public
   * <p>The revision ID of the current version of an artifact.</p>
   */
  revision: string | undefined;

  /**
   * @public
   * <p>The change identifier for the current revision.</p>
   */
  changeIdentifier: string | undefined;

  /**
   * @public
   * <p>The date and time when the most recent revision of the artifact was created, in
   *             timestamp format.</p>
   */
  created?: Date;

  /**
   * @public
   * <p>The summary of the most recent revision of the artifact.</p>
   */
  revisionSummary?: string;
}

/**
 * @public
 * <p>The details of the actions taken and results produced on an artifact as it passes
 *             through stages in the pipeline.</p>
 */
export interface ExecutionDetails {
  /**
   * @public
   * <p>The summary of the current status of the actions.</p>
   */
  summary?: string;

  /**
   * @public
   * <p>The system-generated unique ID of this action used to identify this job worker in
   *             any external systems, such as CodeDeploy.</p>
   */
  externalExecutionId?: string;

  /**
   * @public
   * <p>The percentage of work completed on the action, represented on a scale of 0 to 100
   *             percent.</p>
   */
  percentComplete?: number;
}

/**
 * @public
 * <p>Represents the input of a <code>PutJobSuccessResult</code> action.</p>
 */
export interface PutJobSuccessResultInput {
  /**
   * @public
   * <p>The unique system-generated ID of the job that succeeded. This is the same ID
   *             returned from <code>PollForJobs</code>.</p>
   */
  jobId: string | undefined;

  /**
   * @public
   * <p>The ID of the current revision of the artifact successfully worked on by the
   *             job.</p>
   */
  currentRevision?: CurrentRevision;

  /**
   * @public
   * <p>A token generated by a job worker, such as a CodeDeploy deployment ID, that a
   *             successful job provides to identify a custom action in progress. Future jobs use this
   *             token to identify the running instance of the action. It can be reused to return more
   *             information about the progress of the custom action. When the action is complete, no
   *             continuation token should be supplied.</p>
   */
  continuationToken?: string;

  /**
   * @public
   * <p>The execution details of the successful job, such as the actions taken by the job
   *             worker.</p>
   */
  executionDetails?: ExecutionDetails;

  /**
   * @public
   * <p>Key-value pairs produced as output by a job worker that can be made available to a
   *             downstream action configuration. <code>outputVariables</code> can be included only when
   *             there is no continuation token on the request.</p>
   */
  outputVariables?: Record<string, string>;
}

/**
 * @public
 * <p>Represents the input of a <code>PutThirdPartyJobFailureResult</code>
 *             action.</p>
 */
export interface PutThirdPartyJobFailureResultInput {
  /**
   * @public
   * <p>The ID of the job that failed. This is the same ID returned from
   *                 <code>PollForThirdPartyJobs</code>.</p>
   */
  jobId: string | undefined;

  /**
   * @public
   * <p>The clientToken portion of the clientId and clientToken pair used to verify that
   *             the calling entity is allowed access to the job and its details.</p>
   */
  clientToken: string | undefined;

  /**
   * @public
   * <p>Represents information about failure details.</p>
   */
  failureDetails: FailureDetails | undefined;
}

/**
 * @public
 * <p>Represents the input of a <code>PutThirdPartyJobSuccessResult</code>
 *             action.</p>
 */
export interface PutThirdPartyJobSuccessResultInput {
  /**
   * @public
   * <p>The ID of the job that successfully completed. This is the same ID returned from
   *                 <code>PollForThirdPartyJobs</code>.</p>
   */
  jobId: string | undefined;

  /**
   * @public
   * <p>The clientToken portion of the clientId and clientToken pair used to verify that
   *             the calling entity is allowed access to the job and its details.</p>
   */
  clientToken: string | undefined;

  /**
   * @public
   * <p>Represents information about a current revision.</p>
   */
  currentRevision?: CurrentRevision;

  /**
   * @public
   * <p>A token generated by a job worker, such as a CodeDeploy deployment ID, that a
   *             successful job provides to identify a partner action in progress. Future jobs use this
   *             token to identify the running instance of the action. It can be reused to return more
   *             information about the progress of the partner action. When the action is complete, no
   *             continuation token should be supplied.</p>
   */
  continuationToken?: string;

  /**
   * @public
   * <p>The details of the actions taken and results produced on an artifact as it passes
   *             through stages in the pipeline. </p>
   */
  executionDetails?: ExecutionDetails;
}

/**
 * @public
 * <p>The specified authentication type is in an invalid format.</p>
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
 * @public
 * <p>The specified event filter rule is in an invalid format.</p>
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
   * @public
   * <p>The detail provided in an input file to create the webhook, such as the webhook
   *             name, the pipeline name, and the action name. Give the webhook a unique name that helps
   *             you identify it. You might name the webhook after the pipeline and action it targets so
   *             that you can easily recognize what it's used for later.</p>
   */
  webhook: WebhookDefinition | undefined;

  /**
   * @public
   * <p>The tags for the webhook.</p>
   */
  tags?: Tag[];
}

/**
 * @public
 */
export interface PutWebhookOutput {
  /**
   * @public
   * <p>The detail returned from creating the webhook, such as the webhook name, webhook
   *             URL, and webhook ARN.</p>
   */
  webhook?: ListWebhookItem;
}

/**
 * @public
 */
export interface RegisterWebhookWithThirdPartyInput {
  /**
   * @public
   * <p>The name of an existing webhook created with PutWebhook to register with a
   *             supported third party. </p>
   */
  webhookName?: string;
}

/**
 * @public
 */
export interface RegisterWebhookWithThirdPartyOutput {}

/**
 * @public
 * <p>Your request cannot be handled because the pipeline is busy handling ongoing
 *             activities. Try again later.</p>
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
 * @public
 * <p>The stage has failed in a later run of the pipeline and the
 *                 <code>pipelineExecutionId</code> associated with the request is out of
 *             date.</p>
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
export const StageRetryMode = {
  ALL_ACTIONS: "ALL_ACTIONS",
  FAILED_ACTIONS: "FAILED_ACTIONS",
} as const;

/**
 * @public
 */
export type StageRetryMode = (typeof StageRetryMode)[keyof typeof StageRetryMode];

/**
 * @public
 * <p>Represents the input of a <code>RetryStageExecution</code> action.</p>
 */
export interface RetryStageExecutionInput {
  /**
   * @public
   * <p>The name of the pipeline that contains the failed stage.</p>
   */
  pipelineName: string | undefined;

  /**
   * @public
   * <p>The name of the failed stage to be retried.</p>
   */
  stageName: string | undefined;

  /**
   * @public
   * <p>The ID of the pipeline execution in the failed stage to be retried. Use the <a>GetPipelineState</a> action to retrieve the current pipelineExecutionId of
   *             the failed stage</p>
   */
  pipelineExecutionId: string | undefined;

  /**
   * @public
   * <p>The scope of the retry attempt.</p>
   */
  retryMode: StageRetryMode | undefined;
}

/**
 * @public
 * <p>Represents the output of a <code>RetryStageExecution</code> action.</p>
 */
export interface RetryStageExecutionOutput {
  /**
   * @public
   * <p>The ID of the current workflow execution in the failed stage.</p>
   */
  pipelineExecutionId?: string;
}

/**
 * @public
 * <p>Unable to retry. The pipeline structure or stage state might have changed while
 *             actions awaited retry, or the stage contains no failed
 *             actions.</p>
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
 * @public
 * @enum
 */
export const SourceRevisionType = {
  COMMIT_ID: "COMMIT_ID",
  IMAGE_DIGEST: "IMAGE_DIGEST",
  S3_OBJECT_VERSION_ID: "S3_OBJECT_VERSION_ID",
} as const;

/**
 * @public
 */
export type SourceRevisionType = (typeof SourceRevisionType)[keyof typeof SourceRevisionType];

/**
 * @public
 * <p>A list that allows you to specify, or override, the source revision for a pipeline
 *             execution that's being started. A source revision is the version with all the changes to
 *             your application code, or source artifact, for the pipeline execution.</p>
 */
export interface SourceRevisionOverride {
  /**
   * @public
   * <p>The name of the action where the override will be applied.</p>
   */
  actionName: string | undefined;

  /**
   * @public
   * <p>The type of source revision, based on the source provider. For example, the revision
   *             type for the CodeCommit action provider is the commit ID.</p>
   */
  revisionType: SourceRevisionType | undefined;

  /**
   * @public
   * <p>The source revision, or version of your source artifact, with the changes that you
   *             want to run in the pipeline execution.</p>
   */
  revisionValue: string | undefined;
}

/**
 * @public
 * <p>A pipeline-level variable used for a pipeline execution.</p>
 *          <note>
 *             <p>V2 type pipelines, along with triggers on Git tags and pipeline-level variables,
 *                 are not currently supported for CloudFormation and CDK resources in CodePipeline. For more information about V2 type pipelines, see <a href="https://docs.aws.amazon.com/codepipeline/latest/userguide/pipeline-types.html">Pipeline types</a>
 *                 in the <i>CodePipeline User Guide</i>.</p>
 *          </note>
 */
export interface PipelineVariable {
  /**
   * @public
   * <p>The name of a pipeline-level variable.</p>
   */
  name: string | undefined;

  /**
   * @public
   * <p>The value of a pipeline-level variable.</p>
   */
  value: string | undefined;
}

/**
 * @public
 * <p>Represents the input of a <code>StartPipelineExecution</code> action.</p>
 */
export interface StartPipelineExecutionInput {
  /**
   * @public
   * <p>The name of the pipeline to start.</p>
   */
  name: string | undefined;

  /**
   * @public
   * <p>A list that overrides pipeline variables for a pipeline execution that's being started. Variable names must match <code>[A-Za-z0-9@\-_]+</code>,
   *             and the values can be anything except an empty string.</p>
   */
  variables?: PipelineVariable[];

  /**
   * @public
   * <p>The system-generated unique ID used to identify a unique execution
   *             request.</p>
   */
  clientRequestToken?: string;

  /**
   * @public
   * <p>A list that allows you to specify, or override, the source revision for a pipeline execution that's being started. A source revision is the version with all the changes to your application code, or source artifact, for the pipeline execution.</p>
   */
  sourceRevisions?: SourceRevisionOverride[];
}

/**
 * @public
 * <p>Represents the output of a <code>StartPipelineExecution</code> action.</p>
 */
export interface StartPipelineExecutionOutput {
  /**
   * @public
   * <p>The unique system-generated ID of the pipeline execution that was
   *             started.</p>
   */
  pipelineExecutionId?: string;
}

/**
 * @public
 * <p>The pipeline execution is already in a <code>Stopping</code> state. If you already
 *             chose to stop and wait, you cannot make that request again. You can choose to stop and
 *             abandon now, but be aware that this option can lead to failed tasks or out of sequence
 *             tasks. If you already chose to stop and abandon, you cannot make that request
 *             again.</p>
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
 * @public
 * <p>Unable to stop the pipeline execution. The execution might already be in a
 *                 <code>Stopped</code> state, or it might no longer be in progress.</p>
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
   * @public
   * <p>The name of the pipeline to stop.</p>
   */
  pipelineName: string | undefined;

  /**
   * @public
   * <p>The ID of the pipeline execution to be stopped in the current stage. Use the
   *                 <code>GetPipelineState</code> action to retrieve the current
   *             pipelineExecutionId.</p>
   */
  pipelineExecutionId: string | undefined;

  /**
   * @public
   * <p>Use this option to stop the pipeline execution by abandoning, rather than finishing,
   *             in-progress actions.</p>
   *          <note>
   *             <p>This option can lead to failed or out-of-sequence tasks.</p>
   *          </note>
   */
  abandon?: boolean;

  /**
   * @public
   * <p>Use this option to enter comments, such as the reason the pipeline was stopped.</p>
   */
  reason?: string;
}

/**
 * @public
 */
export interface StopPipelineExecutionOutput {
  /**
   * @public
   * <p>The unique system-generated ID of the pipeline execution that was stopped.</p>
   */
  pipelineExecutionId?: string;
}

/**
 * @public
 */
export interface TagResourceInput {
  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of the resource you want to add tags to.</p>
   */
  resourceArn: string | undefined;

  /**
   * @public
   * <p>The tags you want to modify or add to the resource.</p>
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
   * @public
   * <p> The Amazon Resource Name (ARN) of the resource to remove tags from.</p>
   */
  resourceArn: string | undefined;

  /**
   * @public
   * <p>The list of keys for the tags to be removed from the resource.</p>
   */
  tagKeys: string[] | undefined;
}

/**
 * @public
 */
export interface UntagResourceOutput {}

/**
 * @public
 * <p>The request failed because of an unknown error, exception, or failure.</p>
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
   * @public
   * <p>The action type definition for the action type to be updated.</p>
   */
  actionType: ActionTypeDeclaration | undefined;
}

/**
 * @public
 * <p>Represents the input of an <code>UpdatePipeline</code> action.</p>
 */
export interface UpdatePipelineInput {
  /**
   * @public
   * <p>The name of the pipeline to be updated.</p>
   */
  pipeline: PipelineDeclaration | undefined;
}

/**
 * @public
 * <p>Represents the output of an <code>UpdatePipeline</code> action.</p>
 */
export interface UpdatePipelineOutput {
  /**
   * @public
   * <p>The structure of the updated pipeline.</p>
   */
  pipeline?: PipelineDeclaration;
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
