// smithy-typescript generated code
import { ExceptionOptionType as __ExceptionOptionType, SENSITIVE_STRING } from "@aws-sdk/smithy-client";

import { CodePipelineServiceException as __BaseException } from "./CodePipelineServiceException";

/**
 * <p>Represents the input of an AcknowledgeJob action.</p>
 */
export interface AcknowledgeJobInput {
  /**
   * <p>The unique system-generated ID of the job for which you want to confirm
   *             receipt.</p>
   */
  jobId: string | undefined;

  /**
   * <p>A system-generated random number that AWS CodePipeline uses to ensure that the job
   *             is being worked on by only one job worker. Get this number from the response of the
   *                 <a>PollForJobs</a> request that returned this job.</p>
   */
  nonce: string | undefined;
}

export enum JobStatus {
  Created = "Created",
  Dispatched = "Dispatched",
  Failed = "Failed",
  InProgress = "InProgress",
  Queued = "Queued",
  Succeeded = "Succeeded",
  TimedOut = "TimedOut",
}

/**
 * <p>Represents the output of an AcknowledgeJob action.</p>
 */
export interface AcknowledgeJobOutput {
  /**
   * <p>Whether the job worker has received the specified job.</p>
   */
  status?: JobStatus | string;
}

/**
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
 * <p>Represents the input of an AcknowledgeThirdPartyJob action.</p>
 */
export interface AcknowledgeThirdPartyJobInput {
  /**
   * <p>The unique system-generated ID of the job.</p>
   */
  jobId: string | undefined;

  /**
   * <p>A system-generated random number that AWS CodePipeline uses to ensure that the job
   *             is being worked on by only one job worker. Get this number from the response to a <a>GetThirdPartyJobDetails</a> request.</p>
   */
  nonce: string | undefined;

  /**
   * <p>The clientToken portion of the clientId and clientToken pair used to verify that
   *             the calling entity is allowed access to the job and its details.</p>
   */
  clientToken: string | undefined;
}

/**
 * <p>Represents the output of an AcknowledgeThirdPartyJob action.</p>
 */
export interface AcknowledgeThirdPartyJobOutput {
  /**
   * <p>The status information for the third party job, if any.</p>
   */
  status?: JobStatus | string;
}

/**
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

export enum ActionCategory {
  Approval = "Approval",
  Build = "Build",
  Deploy = "Deploy",
  Invoke = "Invoke",
  Source = "Source",
  Test = "Test",
}

/**
 * <p>Represents information about an action configuration.</p>
 */
export interface ActionConfiguration {
  /**
   * <p>The configuration data for the action.</p>
   */
  configuration?: Record<string, string>;
}

export enum ActionConfigurationPropertyType {
  Boolean = "Boolean",
  Number = "Number",
  String = "String",
}

/**
 * <p>Represents information about an action configuration property.</p>
 */
export interface ActionConfigurationProperty {
  /**
   * <p>The name of the action configuration property.</p>
   */
  name: string | undefined;

  /**
   * <p>Whether the configuration property is a required value.</p>
   */
  required: boolean | undefined;

  /**
   * <p>Whether the configuration property is a key.</p>
   */
  key: boolean | undefined;

  /**
   * <p>Whether the configuration property is secret. Secrets are hidden from all calls
   *             except for <code>GetJobDetails</code>, <code>GetThirdPartyJobDetails</code>,
   *                 <code>PollForJobs</code>, and <code>PollForThirdPartyJobs</code>.</p>
   *         <p>When updating a pipeline, passing * * * * * without changing any other values of
   *             the action preserves the previous value of the secret.</p>
   */
  secret: boolean | undefined;

  /**
   * <p>Indicates that the property is used with <code>PollForJobs</code>. When creating a
   *             custom action, an action can have up to one queryable property. If it has one, that
   *             property must be both required and not secret.</p>
   *         <p>If you create a pipeline with a custom action type, and that custom action contains
   *             a queryable property, the value for that configuration property is subject to other
   *             restrictions. The value must be less than or equal to twenty (20) characters. The value
   *             can contain only alphanumeric characters, underscores, and hyphens.</p>
   */
  queryable?: boolean;

  /**
   * <p>The description of the action configuration property that is displayed to
   *             users.</p>
   */
  description?: string;

  /**
   * <p>The type of the configuration property.</p>
   */
  type?: ActionConfigurationPropertyType | string;
}

/**
 * <p>Represents the context of an action in the stage of a pipeline to a job
 *             worker.</p>
 */
export interface ActionContext {
  /**
   * <p>The name of the action in the context of a job.</p>
   */
  name?: string;

  /**
   * <p>The system-generated unique ID that corresponds to an action's execution.</p>
   */
  actionExecutionId?: string;
}

export enum ActionOwner {
  AWS = "AWS",
  Custom = "Custom",
  ThirdParty = "ThirdParty",
}

/**
 * <p>Represents information about an action type.</p>
 */
export interface ActionTypeId {
  /**
   * <p>A category defines what kind of action can be taken in the stage, and constrains
   *             the provider type for the action. Valid categories are limited to one of the following
   *             values. </p>
   *         <ul>
   *             <li>
   *                 <p>Source</p>
   *             </li>
   *             <li>
   *                 <p>Build</p>
   *             </li>
   *             <li>
   *                 <p>Test</p>
   *             </li>
   *             <li>
   *                 <p>Deploy</p>
   *             </li>
   *             <li>
   *                 <p>Invoke</p>
   *             </li>
   *             <li>
   *                 <p>Approval</p>
   *             </li>
   *          </ul>
   */
  category: ActionCategory | string | undefined;

  /**
   * <p>The creator of the action being called. There are three valid values for the
   *                 <code>Owner</code> field in the action category section within your pipeline
   *             structure: <code>AWS</code>, <code>ThirdParty</code>, and <code>Custom</code>. For more
   *             information, see <a href="https://docs.aws.amazon.com/codepipeline/latest/userguide/reference-pipeline-structure.html#actions-valid-providers">Valid Action Types and Providers in CodePipeline</a>.</p>
   */
  owner: ActionOwner | string | undefined;

  /**
   * <p>The provider of the service being called by the action. Valid providers are
   *             determined by the action category. For example, an action in the Deploy category type
   *             might have a provider of AWS CodeDeploy, which would be specified as CodeDeploy. For
   *             more information, see <a href="https://docs.aws.amazon.com/codepipeline/latest/userguide/reference-pipeline-structure.html#actions-valid-providers">Valid Action Types and Providers in CodePipeline</a>.</p>
   */
  provider: string | undefined;

  /**
   * <p>A string that describes the action version.</p>
   */
  version: string | undefined;
}

/**
 * <p>Represents information about an artifact to be worked on, such as a test or build
 *             artifact.</p>
 */
export interface InputArtifact {
  /**
   * <p>The name of the artifact to be worked on (for example, "My App").</p>
   *         <p>The input artifact of an action must exactly match the output artifact declared in
   *             a preceding action, but the input artifact does not have to be the next action in strict
   *             sequence from the action that provided the output artifact. Actions in parallel can
   *             declare different output artifacts, which are in turn consumed by different following
   *             actions.</p>
   */
  name: string | undefined;
}

/**
 * <p>Represents information about the output of an action.</p>
 */
export interface OutputArtifact {
  /**
   * <p>The name of the output of an artifact, such as "My App".</p>
   *         <p>The input artifact of an action must exactly match the output artifact declared in
   *             a preceding action, but the input artifact does not have to be the next action in strict
   *             sequence from the action that provided the output artifact. Actions in parallel can
   *             declare different output artifacts, which are in turn consumed by different following
   *             actions.</p>
   *         <p>Output artifact names must be unique within a pipeline.</p>
   */
  name: string | undefined;
}

/**
 * <p>Represents information about an action declaration.</p>
 */
export interface ActionDeclaration {
  /**
   * <p>The action declaration's name.</p>
   */
  name: string | undefined;

  /**
   * <p>Specifies the action type and the provider of the action.</p>
   */
  actionTypeId: ActionTypeId | undefined;

  /**
   * <p>The order in which actions are run.</p>
   */
  runOrder?: number;

  /**
   * <p>The action's configuration. These are key-value pairs that specify input values for
   *             an action. For more information, see <a href="https://docs.aws.amazon.com/codepipeline/latest/userguide/reference-pipeline-structure.html#action-requirements">Action Structure Requirements in CodePipeline</a>. For the list of
   *             configuration properties for the AWS CloudFormation action type in CodePipeline, see
   *                 <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/continuous-delivery-codepipeline-action-reference.html">Configuration Properties Reference</a> in the <i>AWS CloudFormation User
   *                 Guide</i>. For template snippets with examples, see <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/continuous-delivery-codepipeline-parameter-override-functions.html">Using Parameter Override Functions with CodePipeline Pipelines</a> in the
   *                 <i>AWS CloudFormation User Guide</i>.</p>
   *         <p>The values can be represented in either JSON or YAML format. For example, the JSON
   *             configuration item format is as follows: </p>
   *         <p>
   *             <i>JSON:</i>
   *          </p>
   *         <p>
   *             <code>"Configuration" : { Key : Value },</code>
   *         </p>
   */
  configuration?: Record<string, string>;

  /**
   * <p>The name or ID of the result of the action declaration, such as a test or build
   *             artifact.</p>
   */
  outputArtifacts?: OutputArtifact[];

  /**
   * <p>The name or ID of the artifact consumed by the action, such as a test or build
   *             artifact.</p>
   */
  inputArtifacts?: InputArtifact[];

  /**
   * <p>The ARN of the IAM service role that performs the declared action. This is assumed
   *             through the roleArn for the pipeline.</p>
   */
  roleArn?: string;

  /**
   * <p>The action declaration's AWS Region, such as us-east-1.</p>
   */
  region?: string;

  /**
   * <p>The variable namespace associated with the action. All variables produced as output by
   *             this action fall under this namespace.</p>
   */
  namespace?: string;
}

/**
 * <p>Represents information about an error in AWS CodePipeline.</p>
 */
export interface ErrorDetails {
  /**
   * <p>The system ID or number code of the error.</p>
   */
  code?: string;

  /**
   * <p>The text of the error message.</p>
   */
  message?: string;
}

export enum ActionExecutionStatus {
  Abandoned = "Abandoned",
  Failed = "Failed",
  InProgress = "InProgress",
  Succeeded = "Succeeded",
}

/**
 * <p>Represents information about the run of an action.</p>
 */
export interface ActionExecution {
  /**
   * <p>ID of the workflow action execution in the current stage. Use the <a>GetPipelineState</a> action to retrieve the current action execution details
   *             of the current stage.</p>
   *         <note>
   *             <p>For older executions, this field might be empty. The action execution ID is
   *                 available for executions run on or after March 2020.</p>
   *         </note>
   */
  actionExecutionId?: string;

  /**
   * <p>The status of the action, or for a completed action, the last status of the
   *             action.</p>
   */
  status?: ActionExecutionStatus | string;

  /**
   * <p>A summary of the run of the action.</p>
   */
  summary?: string;

  /**
   * <p>The last status change of the action.</p>
   */
  lastStatusChange?: Date;

  /**
   * <p>The system-generated token used to identify a unique approval request. The token
   *             for each open approval request can be obtained using the <code>GetPipelineState</code>
   *             command. It is used to validate that the approval request corresponding to this token is
   *             still valid.</p>
   */
  token?: string;

  /**
   * <p>The ARN of the user who last changed the pipeline.</p>
   */
  lastUpdatedBy?: string;

  /**
   * <p>The external ID of the run of the action.</p>
   */
  externalExecutionId?: string;

  /**
   * <p>The URL of a resource external to AWS that is used when running the action (for
   *             example, an external repository URL).</p>
   */
  externalExecutionUrl?: string;

  /**
   * <p>A percentage of completeness of the action as it runs.</p>
   */
  percentComplete?: number;

  /**
   * <p>The details of an error returned by a URL external to AWS.</p>
   */
  errorDetails?: ErrorDetails;
}

/**
 * <p>The Amazon S3 artifact location for an action's artifacts.</p>
 */
export interface S3Location {
  /**
   * <p>The Amazon S3 artifact bucket for an action's artifacts.</p>
   */
  bucket?: string;

  /**
   * <p>The artifact name.</p>
   */
  key?: string;
}

/**
 * <p>Artifact details for the action execution, such as the artifact location.</p>
 */
export interface ArtifactDetail {
  /**
   * <p>The artifact object name for the action execution.</p>
   */
  name?: string;

  /**
   * <p>The Amazon S3 artifact location for the action execution.</p>
   */
  s3location?: S3Location;
}

/**
 * <p>Input information used for an action execution.</p>
 */
export interface ActionExecutionInput {
  /**
   * <p>Represents information about an action type.</p>
   */
  actionTypeId?: ActionTypeId;

  /**
   * <p>Configuration data for an action execution.</p>
   */
  configuration?: Record<string, string>;

  /**
   * <p>Configuration data for an action execution with all variable references replaced with
   *             their real values for the execution.</p>
   */
  resolvedConfiguration?: Record<string, string>;

  /**
   * <p>The ARN of the IAM service role that performs the declared action. This is assumed
   *             through the roleArn for the pipeline. </p>
   */
  roleArn?: string;

  /**
   * <p>The AWS Region for the action, such as us-east-1.</p>
   */
  region?: string;

  /**
   * <p>Details of input artifacts of the action that correspond to the action
   *             execution.</p>
   */
  inputArtifacts?: ArtifactDetail[];

  /**
   * <p>The variable namespace associated with the action. All variables produced as output by
   *             this action fall under this namespace.</p>
   */
  namespace?: string;
}

/**
 * <p>Execution result information, such as the external execution ID.</p>
 */
export interface ActionExecutionResult {
  /**
   * <p>The action provider's external ID for the action execution.</p>
   */
  externalExecutionId?: string;

  /**
   * <p>The action provider's summary for the action execution.</p>
   */
  externalExecutionSummary?: string;

  /**
   * <p>The deepest external link to the external resource (for example, a repository URL or
   *             deployment endpoint) that is used when running the action.</p>
   */
  externalExecutionUrl?: string;
}

/**
 * <p>Output details listed for an action execution, such as the action execution
 *             result.</p>
 */
export interface ActionExecutionOutput {
  /**
   * <p>Details of output artifacts of the action that correspond to the action
   *             execution.</p>
   */
  outputArtifacts?: ArtifactDetail[];

  /**
   * <p>Execution result information listed in the output details for an action
   *             execution.</p>
   */
  executionResult?: ActionExecutionResult;

  /**
   * <p>The outputVariables field shows the key-value pairs that were output as part of that
   *             execution.</p>
   */
  outputVariables?: Record<string, string>;
}

/**
 * <p>Returns information about an execution of an action, including the action execution
 *             ID, and the name, version, and timing of the action. </p>
 */
export interface ActionExecutionDetail {
  /**
   * <p>The pipeline execution ID for the action execution.</p>
   */
  pipelineExecutionId?: string;

  /**
   * <p>The action execution ID.</p>
   */
  actionExecutionId?: string;

  /**
   * <p>The version of the pipeline where the action was run.</p>
   */
  pipelineVersion?: number;

  /**
   * <p>The name of the stage that contains the action.</p>
   */
  stageName?: string;

  /**
   * <p>The name of the action.</p>
   */
  actionName?: string;

  /**
   * <p>The start time of the action execution.</p>
   */
  startTime?: Date;

  /**
   * <p>The last update time of the action execution.</p>
   */
  lastUpdateTime?: Date;

  /**
   * <p> The status of the action execution. Status categories are <code>InProgress</code>,
   *                 <code>Succeeded</code>, and <code>Failed</code>.</p>
   */
  status?: ActionExecutionStatus | string;

  /**
   * <p>Input details for the action execution, such as role ARN, Region, and input
   *             artifacts.</p>
   */
  input?: ActionExecutionInput;

  /**
   * <p>Output details for the action execution, such as the action execution result.</p>
   */
  output?: ActionExecutionOutput;
}

/**
 * <p>Filter values for the action execution.</p>
 */
export interface ActionExecutionFilter {
  /**
   * <p>The pipeline execution ID used to filter action execution history.</p>
   */
  pipelineExecutionId?: string;
}

/**
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
 * <p>Represents information about the version (or revision) of an action.</p>
 */
export interface ActionRevision {
  /**
   * <p>The system-generated unique ID that identifies the revision number of the
   *             action.</p>
   */
  revisionId: string | undefined;

  /**
   * <p>The unique identifier of the change that set the state to this revision (for
   *             example, a deployment ID or timestamp).</p>
   */
  revisionChangeId: string | undefined;

  /**
   * <p>The date and time when the most recent version of the action was created, in
   *             timestamp format.</p>
   */
  created: Date | undefined;
}

/**
 * <p>Represents information about the state of an action.</p>
 */
export interface ActionState {
  /**
   * <p>The name of the action.</p>
   */
  actionName?: string;

  /**
   * <p>Represents information about the version (or revision) of an action.</p>
   */
  currentRevision?: ActionRevision;

  /**
   * <p>Represents information about the run of an action.</p>
   */
  latestExecution?: ActionExecution;

  /**
   * <p>A URL link for more information about the state of the action, such as a deployment
   *             group details page.</p>
   */
  entityUrl?: string;

  /**
   * <p>A URL link for more information about the revision, such as a commit details
   *             page.</p>
   */
  revisionUrl?: string;
}

/**
 * <p>Returns information about the details of an artifact.</p>
 */
export interface ArtifactDetails {
  /**
   * <p>The minimum number of artifacts allowed for the action type.</p>
   */
  minimumCount: number | undefined;

  /**
   * <p>The maximum number of artifacts allowed for the action type.</p>
   */
  maximumCount: number | undefined;
}

/**
 * <p>Returns information about the settings for an action type.</p>
 */
export interface ActionTypeSettings {
  /**
   * <p>The URL of a sign-up page where users can sign up for an external service and
   *             perform initial configuration of the action provided by that service.</p>
   */
  thirdPartyConfigurationUrl?: string;

  /**
   * <p>The URL returned to the AWS CodePipeline console that provides a deep link to the
   *             resources of the external system, such as the configuration page for an AWS CodeDeploy
   *             deployment group. This link is provided as part of the action display in the
   *             pipeline.</p>
   */
  entityUrlTemplate?: string;

  /**
   * <p>The URL returned to the AWS CodePipeline console that contains a link to the
   *             top-level landing page for the external system, such as the console page for AWS
   *             CodeDeploy. This link is shown on the pipeline view page in the AWS CodePipeline console
   *             and provides a link to the execution entity of the external action.</p>
   */
  executionUrlTemplate?: string;

  /**
   * <p>The URL returned to the AWS CodePipeline console that contains a link to the page
   *             where customers can update or change the configuration of the external action.</p>
   */
  revisionUrlTemplate?: string;
}

/**
 * <p>Returns information about the details of an action type.</p>
 */
export interface ActionType {
  /**
   * <p>Represents information about an action type.</p>
   */
  id: ActionTypeId | undefined;

  /**
   * <p>The settings for the action type.</p>
   */
  settings?: ActionTypeSettings;

  /**
   * <p>The configuration properties for the action type.</p>
   */
  actionConfigurationProperties?: ActionConfigurationProperty[];

  /**
   * <p>The details of the input artifact for the action, such as its commit ID.</p>
   */
  inputArtifactDetails: ArtifactDetails | undefined;

  /**
   * <p>The details of the output artifact of the action, such as its commit ID.</p>
   */
  outputArtifactDetails: ArtifactDetails | undefined;
}

/**
 * <p>Information about parameters for artifacts associated with the action type, such as
 *             the minimum and maximum artifacts allowed.</p>
 */
export interface ActionTypeArtifactDetails {
  /**
   * <p>The minimum number of artifacts that can be used with the action type. For example,
   *             you should specify a minimum and maximum of zero input artifacts for an action type with
   *             a category of <code>source</code>.</p>
   */
  minimumCount: number | undefined;

  /**
   * <p>The maximum number of artifacts that can be used with the actiontype. For example, you
   *             should specify a minimum and maximum of zero input artifacts for an action type with a
   *             category of <code>source</code>.</p>
   */
  maximumCount: number | undefined;
}

/**
 * <p>Details about the polling configuration for the <code>JobWorker</code> action engine,
 *             or executor.</p>
 */
export interface JobWorkerExecutorConfiguration {
  /**
   * <p>The accounts in which the job worker is configured and might poll for jobs as part of
   *             the action execution.</p>
   */
  pollingAccounts?: string[];

  /**
   * <p>The service Principals in which the job worker is configured and might poll for jobs
   *             as part of the action execution.</p>
   */
  pollingServicePrincipals?: string[];
}

/**
 * <p>Details about the configuration for the <code>Lambda</code> action engine, or
 *             executor.</p>
 */
export interface LambdaExecutorConfiguration {
  /**
   * <p>The ARN of the Lambda function used by the action engine.</p>
   */
  lambdaFunctionArn: string | undefined;
}

/**
 * <p>The action engine, or executor, related to the supported integration model used to
 *             create and update the action type. The available executor types are <code>Lambda</code>
 *             and <code>JobWorker</code>.</p>
 */
export interface ExecutorConfiguration {
  /**
   * <p>Details about the <code>Lambda</code> executor of the action type.</p>
   */
  lambdaExecutorConfiguration?: LambdaExecutorConfiguration;

  /**
   * <p>Details about the <code>JobWorker</code> executor of the action type.</p>
   */
  jobWorkerExecutorConfiguration?: JobWorkerExecutorConfiguration;
}

export enum ExecutorType {
  JobWorker = "JobWorker",
  Lambda = "Lambda",
}

/**
 * <p>The action engine, or executor, for an action type created for a provider, where the
 *             action is to be used by customers of the provider. The action engine is associated with
 *             the model used to create and update the action, such as the Lambda integration
 *             model.</p>
 */
export interface ActionTypeExecutor {
  /**
   * <p>The action configuration properties for the action type. These properties are
   *             specified in the action definition when the action type is created.</p>
   */
  configuration: ExecutorConfiguration | undefined;

  /**
   * <p>The integration model used to create and update the action type, <code>Lambda</code>
   *             or <code>JobWorker</code>. </p>
   */
  type: ExecutorType | string | undefined;

  /**
   * <p>The policy statement that specifies the permissions in the CodePipeline customer’s
   *             account that are needed to successfully run an action.</p>
   *         <p>To grant permission to another account, specify the account ID as the Principal, a
   *             domain-style identifier defined by the service, for example
   *                 <code>codepipeline.amazonaws.com</code>.</p>
   *         <note>
   *             <p>The size of the passed JSON policy document cannot exceed 2048 characters.</p>
   *         </note>
   */
  policyStatementsTemplate?: string;

  /**
   * <p>The timeout in seconds for the job. An action execution can have multiple jobs. This
   *             is the timeout for a single job, not the entire action execution.</p>
   */
  jobTimeout?: number;
}

/**
 * <p>Specifies the category, owner, provider, and version of the action type.</p>
 */
export interface ActionTypeIdentifier {
  /**
   * <p>Defines what kind of action can be taken in the stage, one of the following:</p>
   *         <ul>
   *             <li>
   *                 <p>
   *                   <code>Source</code>
   *                </p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>Build</code>
   *                </p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>Test</code>
   *                </p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>Deploy</code>
   *                </p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>Approval</code>
   *                </p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>Invoke</code>
   *                </p>
   *             </li>
   *          </ul>
   */
  category: ActionCategory | string | undefined;

  /**
   * <p>The creator of the action type being called: <code>AWS</code> or
   *                 <code>ThirdParty</code>.</p>
   */
  owner: string | undefined;

  /**
   * <p>The provider of the action type being called. The provider name is supplied when the
   *             action type is created.</p>
   */
  provider: string | undefined;

  /**
   * <p>A string that describes the action type version.</p>
   */
  version: string | undefined;
}

/**
 * <p>Details identifying the users with permissions to use the action type.</p>
 */
export interface ActionTypePermissions {
  /**
   * <p>A list of AWS account IDs with access to use the action type in their
   *             pipelines.</p>
   */
  allowedAccounts: string[] | undefined;
}

/**
 * <p>Represents information about each property specified in the action configuration, such
 *             as the description and key name that display for the customer using the action
 *             type.</p>
 */
export interface ActionTypeProperty {
  /**
   * <p>The property name that is displayed to users.</p>
   */
  name: string | undefined;

  /**
   * <p>Whether the configuration property is an optional value.</p>
   */
  optional: boolean | undefined;

  /**
   * <p>Whether the configuration property is a key.</p>
   */
  key: boolean | undefined;

  /**
   * <p>Whether to omit the field value entered by the customer in the log. If
   *                 <code>true</code>, the value is not saved in CloudTrail logs for the action
   *             execution.</p>
   */
  noEcho: boolean | undefined;

  /**
   * <p>Indicates that the property is used with polling. An action type can have up to one
   *             queryable property. If it has one, that property must be both required and not
   *             secret.</p>
   */
  queryable?: boolean;

  /**
   * <p>The description of the property that is displayed to users.</p>
   */
  description?: string;
}

/**
 * <p>Returns information about URLs for web pages that display to customers as links on the
 *             pipeline view, such as an external configuration page for the action type.</p>
 */
export interface ActionTypeUrls {
  /**
   * <p>The URL returned to the CodePipeline console that contains a link to the page where
   *             customers can configure the external action.</p>
   */
  configurationUrl?: string;

  /**
   * <p>The URL returned to the CodePipeline console that provides a deep link to the
   *             resources of the external system, such as a status page. This link is provided as part
   *             of the action display in the pipeline.</p>
   */
  entityUrlTemplate?: string;

  /**
   * <p>The link to an execution page for the action type in progress. For example, for a
   *             CodeDeploy action, this link is shown on the pipeline view page in the CodePipeline
   *             console, and it links to a CodeDeploy status page.</p>
   */
  executionUrlTemplate?: string;

  /**
   * <p>The URL returned to the CodePipeline console that contains a link to the page where
   *             customers can update or change the configuration of the external action.</p>
   */
  revisionUrlTemplate?: string;
}

/**
 * <p>The parameters for the action type definition that are provided when the action type
 *             is created or updated.</p>
 */
export interface ActionTypeDeclaration {
  /**
   * <p>The description for the action type to be updated.</p>
   */
  description?: string;

  /**
   * <p>Information about the executor for an action type that was created with any supported
   *             integration model.</p>
   */
  executor: ActionTypeExecutor | undefined;

  /**
   * <p>The action category, owner, provider, and version of the action type to be
   *             updated.</p>
   */
  id: ActionTypeIdentifier | undefined;

  /**
   * <p>Details for the artifacts, such as application files, to be worked on by the action.
   *             For example, the minimum and maximum number of input artifacts allowed.</p>
   */
  inputArtifactDetails: ActionTypeArtifactDetails | undefined;

  /**
   * <p>Details for the output artifacts, such as a built application, that are the result of
   *             the action. For example, the minimum and maximum number of output artifacts
   *             allowed.</p>
   */
  outputArtifactDetails: ActionTypeArtifactDetails | undefined;

  /**
   * <p>Details identifying the accounts with permissions to use the action type.</p>
   */
  permissions?: ActionTypePermissions;

  /**
   * <p>The properties of the action type to be updated.</p>
   */
  properties?: ActionTypeProperty[];

  /**
   * <p>The links associated with the action type to be updated.</p>
   */
  urls?: ActionTypeUrls;
}

/**
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

export enum ApprovalStatus {
  Approved = "Approved",
  Rejected = "Rejected",
}

/**
 * <p>Represents information about the result of an approval request.</p>
 */
export interface ApprovalResult {
  /**
   * <p>The summary of the current status of the approval request.</p>
   */
  summary: string | undefined;

  /**
   * <p>The response submitted by a reviewer assigned to an approval action
   *             request.</p>
   */
  status: ApprovalStatus | string | undefined;
}

/**
 * <p>The location of the S3 bucket that contains a revision.</p>
 */
export interface S3ArtifactLocation {
  /**
   * <p>The name of the S3 bucket.</p>
   */
  bucketName: string | undefined;

  /**
   * <p>The key of the object in the S3 bucket, which uniquely identifies the object in the
   *             bucket.</p>
   */
  objectKey: string | undefined;
}

export enum ArtifactLocationType {
  S3 = "S3",
}

/**
 * <p>Represents information about the location of an artifact.</p>
 */
export interface ArtifactLocation {
  /**
   * <p>The type of artifact in the location.</p>
   */
  type?: ArtifactLocationType | string;

  /**
   * <p>The S3 bucket that contains the artifact.</p>
   */
  s3Location?: S3ArtifactLocation;
}

/**
 * <p>Represents information about an artifact that is worked on by actions in the
 *             pipeline.</p>
 */
export interface Artifact {
  /**
   * <p>The artifact's name.</p>
   */
  name?: string;

  /**
   * <p>The artifact's revision ID. Depending on the type of object, this could be a commit
   *             ID (GitHub) or a revision ID (Amazon S3).</p>
   */
  revision?: string;

  /**
   * <p>The location of an artifact.</p>
   */
  location?: ArtifactLocation;
}

/**
 * <p>Represents revision details of an artifact. </p>
 */
export interface ArtifactRevision {
  /**
   * <p>The name of an artifact. This name might be system-generated, such as "MyApp", or
   *             defined by the user when an action is created.</p>
   */
  name?: string;

  /**
   * <p>The revision ID of the artifact.</p>
   */
  revisionId?: string;

  /**
   * <p>An additional identifier for a revision, such as a commit date or, for artifacts
   *             stored in Amazon S3 buckets, the ETag value.</p>
   */
  revisionChangeIdentifier?: string;

  /**
   * <p>Summary information about the most recent revision of the artifact. For GitHub and
   *             AWS CodeCommit repositories, the commit message. For Amazon S3 buckets or actions, the
   *             user-provided content of a <code>codepipeline-artifact-revision-summary</code> key
   *             specified in the object metadata.</p>
   */
  revisionSummary?: string;

  /**
   * <p>The date and time when the most recent revision of the artifact was created, in
   *             timestamp format.</p>
   */
  created?: Date;

  /**
   * <p>The commit ID for the artifact revision. For artifacts stored in GitHub or AWS
   *             CodeCommit repositories, the commit ID is linked to a commit details page.</p>
   */
  revisionUrl?: string;
}

export enum EncryptionKeyType {
  KMS = "KMS",
}

/**
 * <p>Represents information about the key used to encrypt data in the artifact store,
 *             such as an AWS Key Management Service (AWS KMS) key.</p>
 */
export interface EncryptionKey {
  /**
   * <p>The ID used to identify the key. For an AWS KMS key, you can use the key ID, the
   *             key ARN, or the alias ARN.</p>
   *         <note>
   *             <p>Aliases are recognized only in the account that created the customer master key
   *                 (CMK). For cross-account actions, you can only use the key ID or key ARN to identify
   *                 the key.</p>
   *         </note>
   */
  id: string | undefined;

  /**
   * <p>The type of encryption key, such as an AWS Key Management Service (AWS KMS) key.
   *             When creating or updating a pipeline, the value must be set to 'KMS'.</p>
   */
  type: EncryptionKeyType | string | undefined;
}

export enum ArtifactStoreType {
  S3 = "S3",
}

/**
 * <p>The S3 bucket where artifacts for the pipeline are stored.</p>
 *         <note>
 *             <p>You must include either <code>artifactStore</code> or
 *                     <code>artifactStores</code> in your pipeline, but you cannot use both. If you
 *                 create a cross-region action in your pipeline, you must use
 *                     <code>artifactStores</code>.</p>
 *         </note>
 */
export interface ArtifactStore {
  /**
   * <p>The type of the artifact store, such as S3.</p>
   */
  type: ArtifactStoreType | string | undefined;

  /**
   * <p>The S3 bucket used for storing the artifacts for a pipeline. You can specify the
   *             name of an S3 bucket but not a folder in the bucket. A folder to contain the pipeline
   *             artifacts is created for you based on the name of the pipeline. You can use any S3
   *             bucket in the same AWS Region as the pipeline to store your pipeline
   *             artifacts.</p>
   */
  location: string | undefined;

  /**
   * <p>The encryption key used to encrypt the data in the artifact store, such as an AWS
   *             Key Management Service (AWS KMS) key. If this is undefined, the default key for Amazon
   *             S3 is used.</p>
   */
  encryptionKey?: EncryptionKey;
}

/**
 * <p>Represents an AWS session credentials object. These credentials are temporary
 *             credentials that are issued by AWS Secure Token Service (STS). They can be used to
 *             access input and output artifacts in the S3 bucket used to store artifact for the
 *             pipeline in AWS CodePipeline.</p>
 */
export interface AWSSessionCredentials {
  /**
   * <p>The access key for the session.</p>
   */
  accessKeyId: string | undefined;

  /**
   * <p>The secret access key for the session.</p>
   */
  secretAccessKey: string | undefined;

  /**
   * <p>The token for the session.</p>
   */
  sessionToken: string | undefined;
}

export enum BlockerType {
  Schedule = "Schedule",
}

/**
 * <p>Reserved for future use.</p>
 */
export interface BlockerDeclaration {
  /**
   * <p>Reserved for future use.</p>
   */
  name: string | undefined;

  /**
   * <p>Reserved for future use.</p>
   */
  type: BlockerType | string | undefined;
}

/**
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
 * <p>A tag is a key-value pair that is used to manage the resource.</p>
 */
export interface Tag {
  /**
   * <p>The tag's key.</p>
   */
  key: string | undefined;

  /**
   * <p>The tag's value.</p>
   */
  value: string | undefined;
}

/**
 * <p>Represents the input of a CreateCustomActionType operation.</p>
 */
export interface CreateCustomActionTypeInput {
  /**
   * <p>The category of the custom action, such as a build action or a test
   *             action.</p>
   */
  category: ActionCategory | string | undefined;

  /**
   * <p>The provider of the service used in the custom action, such as AWS
   *             CodeDeploy.</p>
   */
  provider: string | undefined;

  /**
   * <p>The version identifier of the custom action.</p>
   */
  version: string | undefined;

  /**
   * <p>URLs that provide users information about this custom action.</p>
   */
  settings?: ActionTypeSettings;

  /**
   * <p>The configuration properties for the custom action.</p>
   *         <note>
   *             <p>You can refer to a name in the configuration properties of the custom action
   *                 within the URL templates by following the format of {Config:name}, as long as the
   *                 configuration property is both required and not secret. For more information, see
   *                     <a href="https://docs.aws.amazon.com/codepipeline/latest/userguide/how-to-create-custom-action.html">Create a
   *                     Custom Action for a Pipeline</a>.</p>
   *         </note>
   */
  configurationProperties?: ActionConfigurationProperty[];

  /**
   * <p>The details of the input artifact for the action, such as its commit ID.</p>
   */
  inputArtifactDetails: ArtifactDetails | undefined;

  /**
   * <p>The details of the output artifact of the action, such as its commit ID.</p>
   */
  outputArtifactDetails: ArtifactDetails | undefined;

  /**
   * <p>The tags for the custom action.</p>
   */
  tags?: Tag[];
}

/**
 * <p>Represents the output of a <code>CreateCustomActionType</code> operation.</p>
 */
export interface CreateCustomActionTypeOutput {
  /**
   * <p>Returns information about the details of an action type.</p>
   */
  actionType: ActionType | undefined;

  /**
   * <p>Specifies the tags applied to the custom action.</p>
   */
  tags?: Tag[];
}

/**
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
 * <p>The number of pipelines associated with the AWS account has exceeded the limit
 *             allowed for the account.</p>
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
 * <p>Represents information about a stage and its definition.</p>
 */
export interface StageDeclaration {
  /**
   * <p>The name of the stage.</p>
   */
  name: string | undefined;

  /**
   * <p>Reserved for future use.</p>
   */
  blockers?: BlockerDeclaration[];

  /**
   * <p>The actions included in a stage.</p>
   */
  actions: ActionDeclaration[] | undefined;
}

/**
 * <p>Represents the structure of actions and stages to be performed in the
 *             pipeline.</p>
 */
export interface PipelineDeclaration {
  /**
   * <p>The name of the pipeline.</p>
   */
  name: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) for AWS CodePipeline to use to either perform
   *             actions with no <code>actionRoleArn</code>, or to use to assume roles for actions with
   *             an <code>actionRoleArn</code>.</p>
   */
  roleArn: string | undefined;

  /**
   * <p>Represents information about the S3 bucket where artifacts are stored for the
   *             pipeline.</p>
   *         <note>
   *             <p>You must include either <code>artifactStore</code> or
   *                     <code>artifactStores</code> in your pipeline, but you cannot use both. If you
   *                 create a cross-region action in your pipeline, you must use
   *                     <code>artifactStores</code>.</p>
   *         </note>
   */
  artifactStore?: ArtifactStore;

  /**
   * <p>A mapping of <code>artifactStore</code> objects and their corresponding AWS
   *             Regions. There must be an artifact store for the pipeline Region and for each
   *             cross-region action in the pipeline.</p>
   *         <note>
   *             <p>You must include either <code>artifactStore</code> or
   *                     <code>artifactStores</code> in your pipeline, but you cannot use both. If you
   *                 create a cross-region action in your pipeline, you must use
   *                     <code>artifactStores</code>.</p>
   *         </note>
   */
  artifactStores?: Record<string, ArtifactStore>;

  /**
   * <p>The stage in which to perform the action.</p>
   */
  stages: StageDeclaration[] | undefined;

  /**
   * <p>The version number of the pipeline. A new pipeline always has a version number of
   *             1. This number is incremented when a pipeline is updated.</p>
   */
  version?: number;
}

/**
 * <p>Represents the input of a <code>CreatePipeline</code> action.</p>
 */
export interface CreatePipelineInput {
  /**
   * <p>Represents the structure of actions and stages to be performed in the pipeline.
   *         </p>
   */
  pipeline: PipelineDeclaration | undefined;

  /**
   * <p>The tags for the pipeline.</p>
   */
  tags?: Tag[];
}

/**
 * <p>Represents the output of a <code>CreatePipeline</code> action.</p>
 */
export interface CreatePipelineOutput {
  /**
   * <p>Represents the structure of actions and stages to be performed in the pipeline.
   *         </p>
   */
  pipeline?: PipelineDeclaration;

  /**
   * <p>Specifies the tags applied to the pipeline.</p>
   */
  tags?: Tag[];
}

/**
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
 * <p>Represents the input of a <code>DeleteCustomActionType</code> operation. The custom
 *             action will be marked as deleted.</p>
 */
export interface DeleteCustomActionTypeInput {
  /**
   * <p>The category of the custom action that you want to delete, such as source or
   *             deploy.</p>
   */
  category: ActionCategory | string | undefined;

  /**
   * <p>The provider of the service used in the custom action, such as AWS
   *             CodeDeploy.</p>
   */
  provider: string | undefined;

  /**
   * <p>The version of the custom action to delete.</p>
   */
  version: string | undefined;
}

/**
 * <p>Represents the input of a <code>DeletePipeline</code> action.</p>
 */
export interface DeletePipelineInput {
  /**
   * <p>The name of the pipeline to be deleted.</p>
   */
  name: string | undefined;
}

export interface DeleteWebhookInput {
  /**
   * <p>The name of the webhook you want to delete.</p>
   */
  name: string | undefined;
}

export interface DeleteWebhookOutput {}

export interface DeregisterWebhookWithThirdPartyInput {
  /**
   * <p>The name of the webhook you want to deregister.</p>
   */
  webhookName?: string;
}

export interface DeregisterWebhookWithThirdPartyOutput {}

/**
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

export enum StageTransitionType {
  Inbound = "Inbound",
  Outbound = "Outbound",
}

/**
 * <p>Represents the input of a <code>DisableStageTransition</code> action.</p>
 */
export interface DisableStageTransitionInput {
  /**
   * <p>The name of the pipeline in which you want to disable the flow of artifacts from
   *             one stage to another.</p>
   */
  pipelineName: string | undefined;

  /**
   * <p>The name of the stage where you want to disable the inbound or outbound transition
   *             of artifacts.</p>
   */
  stageName: string | undefined;

  /**
   * <p>Specifies whether artifacts are prevented from transitioning into the stage and
   *             being processed by the actions in that stage (inbound), or prevented from transitioning
   *             from the stage after they have been processed by the actions in that stage
   *             (outbound).</p>
   */
  transitionType: StageTransitionType | string | undefined;

  /**
   * <p>The reason given to the user that a stage is disabled, such as waiting for manual
   *             approval or manual tests. This message is displayed in the pipeline console
   *             UI.</p>
   */
  reason: string | undefined;
}

/**
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
 * <p>Represents the input of an <code>EnableStageTransition</code> action.</p>
 */
export interface EnableStageTransitionInput {
  /**
   * <p>The name of the pipeline in which you want to enable the flow of artifacts from one
   *             stage to another.</p>
   */
  pipelineName: string | undefined;

  /**
   * <p>The name of the stage where you want to enable the transition of artifacts, either
   *             into the stage (inbound) or from that stage to the next stage (outbound).</p>
   */
  stageName: string | undefined;

  /**
   * <p>Specifies whether artifacts are allowed to enter the stage and be processed by the
   *             actions in that stage (inbound) or whether already processed artifacts are allowed to
   *             transition to the next stage (outbound).</p>
   */
  transitionType: StageTransitionType | string | undefined;
}

export interface GetActionTypeInput {
  /**
   * <p>Defines what kind of action can be taken in the stage. The following are the valid
   *             values:</p>
   *         <ul>
   *             <li>
   *                 <p>
   *                   <code>Source</code>
   *                </p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>Build</code>
   *                </p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>Test</code>
   *                </p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>Deploy</code>
   *                </p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>Approval</code>
   *                </p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>Invoke</code>
   *                </p>
   *             </li>
   *          </ul>
   */
  category: ActionCategory | string | undefined;

  /**
   * <p>The creator of an action type that was created with any supported integration model.
   *             There are two valid values: <code>AWS</code> and <code>ThirdParty</code>.</p>
   */
  owner: string | undefined;

  /**
   * <p>The provider of the action type being called. The provider name is specified when the
   *             action type is created.</p>
   */
  provider: string | undefined;

  /**
   * <p>A string that describes the action type version.</p>
   */
  version: string | undefined;
}

export interface GetActionTypeOutput {
  /**
   * <p>The action type information for the requested action type, such as the action type
   *             ID.</p>
   */
  actionType?: ActionTypeDeclaration;
}

/**
 * <p>Represents the input of a <code>GetJobDetails</code> action.</p>
 */
export interface GetJobDetailsInput {
  /**
   * <p>The unique system-generated ID for the job.</p>
   */
  jobId: string | undefined;
}

/**
 * <p>Represents information about a stage to a job worker.</p>
 */
export interface StageContext {
  /**
   * <p>The name of the stage.</p>
   */
  name?: string;
}

/**
 * <p>Represents information about a pipeline to a job worker.</p>
 *         <note>
 *             <p>PipelineContext contains <code>pipelineArn</code> and
 *                     <code>pipelineExecutionId</code> for custom action jobs. The
 *                     <code>pipelineArn</code> and <code>pipelineExecutionId</code> fields are not
 *                 populated for ThirdParty action jobs.</p>
 *         </note>
 */
export interface PipelineContext {
  /**
   * <p>The name of the pipeline. This is a user-specified value. Pipeline names must be
   *             unique across all pipeline names under an Amazon Web Services account.</p>
   */
  pipelineName?: string;

  /**
   * <p>The stage of the pipeline.</p>
   */
  stage?: StageContext;

  /**
   * <p>The context of an action to a job worker in the stage of a pipeline.</p>
   */
  action?: ActionContext;

  /**
   * <p>The Amazon Resource Name (ARN) of the pipeline.</p>
   */
  pipelineArn?: string;

  /**
   * <p>The execution ID of the pipeline.</p>
   */
  pipelineExecutionId?: string;
}

/**
 * <p>Represents other information about a job required for a job worker to complete the
 *             job.</p>
 */
export interface JobData {
  /**
   * <p>Represents information about an action type.</p>
   */
  actionTypeId?: ActionTypeId;

  /**
   * <p>Represents information about an action configuration.</p>
   */
  actionConfiguration?: ActionConfiguration;

  /**
   * <p>Represents information about a pipeline to a job worker.</p>
   *         <note>
   *             <p>Includes <code>pipelineArn</code> and <code>pipelineExecutionId</code> for
   *                 custom jobs.</p>
   *         </note>
   */
  pipelineContext?: PipelineContext;

  /**
   * <p>The artifact supplied to the job.</p>
   */
  inputArtifacts?: Artifact[];

  /**
   * <p>The output of the job.</p>
   */
  outputArtifacts?: Artifact[];

  /**
   * <p>Represents an AWS session credentials object. These credentials are temporary
   *             credentials that are issued by AWS Secure Token Service (STS). They can be used to
   *             access input and output artifacts in the S3 bucket used to store artifacts for the
   *             pipeline in AWS CodePipeline.</p>
   */
  artifactCredentials?: AWSSessionCredentials;

  /**
   * <p>A system-generated token, such as a AWS CodeDeploy deployment ID, required by a job
   *             to continue the job asynchronously.</p>
   */
  continuationToken?: string;

  /**
   * <p>Represents information about the key used to encrypt data in the artifact store,
   *             such as an AWS Key Management Service (AWS KMS) key. </p>
   */
  encryptionKey?: EncryptionKey;
}

/**
 * <p>Represents information about the details of a job.</p>
 */
export interface JobDetails {
  /**
   * <p>The unique system-generated ID of the job.</p>
   */
  id?: string;

  /**
   * <p>Represents other information about a job required for a job worker to complete the
   *             job. </p>
   */
  data?: JobData;

  /**
   * <p>The AWS account ID associated with the job.</p>
   */
  accountId?: string;
}

/**
 * <p>Represents the output of a <code>GetJobDetails</code> action.</p>
 */
export interface GetJobDetailsOutput {
  /**
   * <p>The details of the job.</p>
   *         <note>
   *             <p>If AWSSessionCredentials is used, a long-running job can call
   *                     <code>GetJobDetails</code> again to obtain new credentials.</p>
   *         </note>
   */
  jobDetails?: JobDetails;
}

/**
 * <p>Represents the input of a <code>GetPipeline</code> action.</p>
 */
export interface GetPipelineInput {
  /**
   * <p>The name of the pipeline for which you want to get information. Pipeline names must
   *             be unique under an AWS user account.</p>
   */
  name: string | undefined;

  /**
   * <p>The version number of the pipeline. If you do not specify a version, defaults to
   *             the current version.</p>
   */
  version?: number;
}

/**
 * <p>Information about a pipeline.</p>
 */
export interface PipelineMetadata {
  /**
   * <p>The Amazon Resource Name (ARN) of the pipeline.</p>
   */
  pipelineArn?: string;

  /**
   * <p>The date and time the pipeline was created, in timestamp format.</p>
   */
  created?: Date;

  /**
   * <p>The date and time the pipeline was last updated, in timestamp format.</p>
   */
  updated?: Date;
}

/**
 * <p>Represents the output of a <code>GetPipeline</code> action.</p>
 */
export interface GetPipelineOutput {
  /**
   * <p>Represents the structure of actions and stages to be performed in the pipeline.
   *         </p>
   */
  pipeline?: PipelineDeclaration;

  /**
   * <p>Represents the pipeline metadata information returned as part of the output of a
   *                 <code>GetPipeline</code> action.</p>
   */
  metadata?: PipelineMetadata;
}

/**
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
 * <p>Represents the input of a <code>GetPipelineExecution</code> action.</p>
 */
export interface GetPipelineExecutionInput {
  /**
   * <p>The name of the pipeline about which you want to get execution details.</p>
   */
  pipelineName: string | undefined;

  /**
   * <p>The ID of the pipeline execution about which you want to get execution
   *             details.</p>
   */
  pipelineExecutionId: string | undefined;
}

export enum PipelineExecutionStatus {
  Cancelled = "Cancelled",
  Failed = "Failed",
  InProgress = "InProgress",
  Stopped = "Stopped",
  Stopping = "Stopping",
  Succeeded = "Succeeded",
  Superseded = "Superseded",
}

/**
 * <p>Represents information about an execution of a pipeline.</p>
 */
export interface PipelineExecution {
  /**
   * <p>The name of the pipeline with the specified pipeline execution.</p>
   */
  pipelineName?: string;

  /**
   * <p>The version number of the pipeline with the specified pipeline execution.</p>
   */
  pipelineVersion?: number;

  /**
   * <p>The ID of the pipeline execution.</p>
   */
  pipelineExecutionId?: string;

  /**
   * <p>The status of the pipeline execution.</p>
   *         <ul>
   *             <li>
   *                 <p>Cancelled: The pipeline’s definition was updated before the pipeline
   *                     execution could be completed.</p>
   *             </li>
   *             <li>
   *                 <p>InProgress: The pipeline execution is currently running.</p>
   *             </li>
   *             <li>
   *                 <p>Stopped: The pipeline execution was manually stopped. For more information,
   *                     see <a href="https://docs.aws.amazon.com/codepipeline/latest/userguide/concepts.html#concepts-executions-stopped">Stopped Executions</a>.</p>
   *             </li>
   *             <li>
   *                 <p>Stopping: The pipeline execution received a request to be manually stopped.
   *                     Depending on the selected stop mode, the execution is either completing or
   *                     abandoning in-progress actions. For more information, see <a href="https://docs.aws.amazon.com/codepipeline/latest/userguide/concepts.html#concepts-executions-stopped">Stopped Executions</a>.</p>
   *             </li>
   *             <li>
   *                 <p>Succeeded: The pipeline execution was completed successfully. </p>
   *             </li>
   *             <li>
   *                 <p>Superseded: While this pipeline execution was waiting for the next stage to
   *                     be completed, a newer pipeline execution advanced and continued through the
   *                     pipeline instead. For more information, see <a href="https://docs.aws.amazon.com/codepipeline/latest/userguide/concepts.html#concepts-superseded">Superseded Executions</a>.</p>
   *             </li>
   *             <li>
   *                 <p>Failed: The pipeline execution was not completed successfully.</p>
   *             </li>
   *          </ul>
   */
  status?: PipelineExecutionStatus | string;

  /**
   * <p>A summary that contains a description of the pipeline execution status.</p>
   */
  statusSummary?: string;

  /**
   * <p>A list of <code>ArtifactRevision</code> objects included in a pipeline
   *             execution.</p>
   */
  artifactRevisions?: ArtifactRevision[];
}

/**
 * <p>Represents the output of a <code>GetPipelineExecution</code> action.</p>
 */
export interface GetPipelineExecutionOutput {
  /**
   * <p>Represents information about the execution of a pipeline.</p>
   */
  pipelineExecution?: PipelineExecution;
}

/**
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
 * <p>Represents the input of a <code>GetPipelineState</code> action.</p>
 */
export interface GetPipelineStateInput {
  /**
   * <p>The name of the pipeline about which you want to get information.</p>
   */
  name: string | undefined;
}

export enum StageExecutionStatus {
  Cancelled = "Cancelled",
  Failed = "Failed",
  InProgress = "InProgress",
  Stopped = "Stopped",
  Stopping = "Stopping",
  Succeeded = "Succeeded",
}

/**
 * <p>Represents information about the run of a stage.</p>
 */
export interface StageExecution {
  /**
   * <p>The ID of the pipeline execution associated with the stage.</p>
   */
  pipelineExecutionId: string | undefined;

  /**
   * <p>The status of the stage, or for a completed stage, the last status of the
   *             stage.</p>
   *         <note>
   *             <p>A status of cancelled means that the pipeline’s definition was updated before the
   *                 stage execution could be completed.</p>
   *         </note>
   */
  status: StageExecutionStatus | string | undefined;
}

/**
 * <p>Represents information about the state of transitions between one stage and another
 *             stage.</p>
 */
export interface TransitionState {
  /**
   * <p>Whether the transition between stages is enabled (true) or disabled
   *             (false).</p>
   */
  enabled?: boolean;

  /**
   * <p>The ID of the user who last changed the transition state.</p>
   */
  lastChangedBy?: string;

  /**
   * <p>The timestamp when the transition state was last changed.</p>
   */
  lastChangedAt?: Date;

  /**
   * <p>The user-specified reason why the transition between two stages of a pipeline was
   *             disabled.</p>
   */
  disabledReason?: string;
}

/**
 * <p>Represents information about the state of the stage.</p>
 */
export interface StageState {
  /**
   * <p>The name of the stage.</p>
   */
  stageName?: string;

  /**
   * <p>Represents information about the run of a stage.</p>
   */
  inboundExecution?: StageExecution;

  /**
   * <p>The state of the inbound transition, which is either enabled or disabled.</p>
   */
  inboundTransitionState?: TransitionState;

  /**
   * <p>The state of the stage.</p>
   */
  actionStates?: ActionState[];

  /**
   * <p>Information about the latest execution in the stage, including its ID and
   *             status.</p>
   */
  latestExecution?: StageExecution;
}

/**
 * <p>Represents the output of a <code>GetPipelineState</code> action.</p>
 */
export interface GetPipelineStateOutput {
  /**
   * <p>The name of the pipeline for which you want to get the state.</p>
   */
  pipelineName?: string;

  /**
   * <p>The version number of the pipeline.</p>
   *         <note>
   *             <p>A newly created pipeline is always assigned a version number of
   *                 <code>1</code>.</p>
   *         </note>
   */
  pipelineVersion?: number;

  /**
   * <p>A list of the pipeline stage output information, including stage name, state, most
   *             recent run details, whether the stage is disabled, and other data.</p>
   */
  stageStates?: StageState[];

  /**
   * <p>The date and time the pipeline was created, in timestamp format.</p>
   */
  created?: Date;

  /**
   * <p>The date and time the pipeline was last updated, in timestamp format.</p>
   */
  updated?: Date;
}

/**
 * <p>Represents the input of a <code>GetThirdPartyJobDetails</code> action.</p>
 */
export interface GetThirdPartyJobDetailsInput {
  /**
   * <p>The unique system-generated ID used for identifying the job.</p>
   */
  jobId: string | undefined;

  /**
   * <p>The clientToken portion of the clientId and clientToken pair used to verify that
   *             the calling entity is allowed access to the job and its details.</p>
   */
  clientToken: string | undefined;
}

/**
 * <p>Represents information about the job data for a partner action.</p>
 */
export interface ThirdPartyJobData {
  /**
   * <p>Represents information about an action type.</p>
   */
  actionTypeId?: ActionTypeId;

  /**
   * <p>Represents information about an action configuration.</p>
   */
  actionConfiguration?: ActionConfiguration;

  /**
   * <p>Represents information about a pipeline to a job worker.</p>
   *         <note>
   *             <p>Does not include <code>pipelineArn</code> and <code>pipelineExecutionId</code>
   *                 for ThirdParty jobs.</p>
   *         </note>
   */
  pipelineContext?: PipelineContext;

  /**
   * <p>The name of the artifact that is worked on by the action, if any. This name might
   *             be system-generated, such as "MyApp", or it might be defined by the user when the action
   *             is created. The input artifact name must match the name of an output artifact generated
   *             by an action in an earlier action or stage of the pipeline.</p>
   */
  inputArtifacts?: Artifact[];

  /**
   * <p>The name of the artifact that is the result of the action, if any. This name might
   *             be system-generated, such as "MyBuiltApp", or it might be defined by the user when the
   *             action is created.</p>
   */
  outputArtifacts?: Artifact[];

  /**
   * <p>Represents an AWS session credentials object. These credentials are temporary
   *             credentials that are issued by AWS Secure Token Service (STS). They can be used to
   *             access input and output artifacts in the S3 bucket used to store artifact for the
   *             pipeline in AWS CodePipeline. </p>
   */
  artifactCredentials?: AWSSessionCredentials;

  /**
   * <p>A system-generated token, such as a AWS CodeDeploy deployment ID, that a job
   *             requires to continue the job asynchronously.</p>
   */
  continuationToken?: string;

  /**
   * <p>The encryption key used to encrypt and decrypt data in the artifact store for the
   *             pipeline, such as an AWS Key Management Service (AWS KMS) key. This is optional and
   *             might not be present.</p>
   */
  encryptionKey?: EncryptionKey;
}

/**
 * <p>The details of a job sent in response to a <code>GetThirdPartyJobDetails</code>
 *             request.</p>
 */
export interface ThirdPartyJobDetails {
  /**
   * <p>The identifier used to identify the job details in AWS CodePipeline.</p>
   */
  id?: string;

  /**
   * <p>The data to be returned by the third party job worker.</p>
   */
  data?: ThirdPartyJobData;

  /**
   * <p>A system-generated random number that AWS CodePipeline uses to ensure that the job
   *             is being worked on by only one job worker. Use this number in an <a>AcknowledgeThirdPartyJob</a> request.</p>
   */
  nonce?: string;
}

/**
 * <p>Represents the output of a <code>GetThirdPartyJobDetails</code> action.</p>
 */
export interface GetThirdPartyJobDetailsOutput {
  /**
   * <p>The details of the job, including any protected values defined for the
   *             job.</p>
   */
  jobDetails?: ThirdPartyJobDetails;
}

/**
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

export interface ListActionExecutionsInput {
  /**
   * <p> The name of the pipeline for which you want to list action execution history.</p>
   */
  pipelineName: string | undefined;

  /**
   * <p>Input information used to filter action execution history.</p>
   */
  filter?: ActionExecutionFilter;

  /**
   * <p>The maximum number of results to return in a single call. To retrieve the remaining
   *             results, make another call with the returned nextToken value. Action execution history
   *             is retained for up to 12 months, based on action execution start times. Default value is
   *             100. </p>
   *         <note>
   *             <p>Detailed execution history is available for executions run on or after February
   *                 21, 2019.</p>
   *         </note>
   */
  maxResults?: number;

  /**
   * <p>The token that was returned from the previous <code>ListActionExecutions</code> call,
   *             which can be used to return the next set of action executions in the list.</p>
   */
  nextToken?: string;
}

export interface ListActionExecutionsOutput {
  /**
   * <p>The details for a list of recent executions, such as action execution ID.</p>
   */
  actionExecutionDetails?: ActionExecutionDetail[];

  /**
   * <p>If the amount of returned information is significantly large, an identifier is also
   *             returned and can be used in a subsequent <code>ListActionExecutions</code> call to
   *             return the next set of action executions in the list.</p>
   */
  nextToken?: string;
}

/**
 * <p>Represents the input of a <code>ListActionTypes</code> action.</p>
 */
export interface ListActionTypesInput {
  /**
   * <p>Filters the list of action types to those created by a specified entity.</p>
   */
  actionOwnerFilter?: ActionOwner | string;

  /**
   * <p>An identifier that was returned from the previous list action types call, which can
   *             be used to return the next set of action types in the list.</p>
   */
  nextToken?: string;

  /**
   * <p>The Region to filter on for the list of action types.</p>
   */
  regionFilter?: string;
}

/**
 * <p>Represents the output of a <code>ListActionTypes</code> action.</p>
 */
export interface ListActionTypesOutput {
  /**
   * <p>Provides details of the action types.</p>
   */
  actionTypes: ActionType[] | undefined;

  /**
   * <p>If the amount of returned information is significantly large, an identifier is also
   *             returned. It can be used in a subsequent list action types call to return the next set
   *             of action types in the list.</p>
   */
  nextToken?: string;
}

/**
 * <p>Represents the input of a <code>ListPipelineExecutions</code> action.</p>
 */
export interface ListPipelineExecutionsInput {
  /**
   * <p>The name of the pipeline for which you want to get execution summary
   *             information.</p>
   */
  pipelineName: string | undefined;

  /**
   * <p>The maximum number of results to return in a single call. To retrieve the remaining
   *             results, make another call with the returned nextToken value. Pipeline history is
   *             limited to the most recent 12 months, based on pipeline execution start times. Default
   *             value is 100.</p>
   */
  maxResults?: number;

  /**
   * <p>The token that was returned from the previous <code>ListPipelineExecutions</code>
   *             call, which can be used to return the next set of pipeline executions in the
   *             list.</p>
   */
  nextToken?: string;
}

/**
 * <p>Information about the version (or revision) of a source artifact that initiated a
 *             pipeline execution.</p>
 */
export interface SourceRevision {
  /**
   * <p>The name of the action that processed the revision to the source
   *             artifact.</p>
   */
  actionName: string | undefined;

  /**
   * <p>The system-generated unique ID that identifies the revision number of the
   *             artifact.</p>
   */
  revisionId?: string;

  /**
   * <p>Summary information about the most recent revision of the artifact. For GitHub and
   *             AWS CodeCommit repositories, the commit message. For Amazon S3 buckets or actions, the
   *             user-provided content of a <code>codepipeline-artifact-revision-summary</code> key
   *             specified in the object metadata.</p>
   */
  revisionSummary?: string;

  /**
   * <p>The commit ID for the artifact revision. For artifacts stored in GitHub or AWS
   *             CodeCommit repositories, the commit ID is linked to a commit details page.</p>
   */
  revisionUrl?: string;
}

/**
 * <p>The interaction that stopped a pipeline execution.</p>
 */
export interface StopExecutionTrigger {
  /**
   * <p>The user-specified reason the pipeline was stopped.</p>
   */
  reason?: string;
}

export enum TriggerType {
  CloudWatchEvent = "CloudWatchEvent",
  CreatePipeline = "CreatePipeline",
  PollForSourceChanges = "PollForSourceChanges",
  PutActionRevision = "PutActionRevision",
  StartPipelineExecution = "StartPipelineExecution",
  Webhook = "Webhook",
}

/**
 * <p>The interaction or event that started a pipeline execution.</p>
 */
export interface ExecutionTrigger {
  /**
   * <p>The type of change-detection method, command, or user interaction that started a
   *             pipeline execution.</p>
   */
  triggerType?: TriggerType | string;

  /**
   * <p>Detail related to the event that started a pipeline execution, such as the webhook ARN
   *             of the webhook that triggered the pipeline execution or the user ARN for a
   *             user-initiated <code>start-pipeline-execution</code> CLI command.</p>
   */
  triggerDetail?: string;
}

/**
 * <p>Summary information about a pipeline execution.</p>
 */
export interface PipelineExecutionSummary {
  /**
   * <p>The ID of the pipeline execution.</p>
   */
  pipelineExecutionId?: string;

  /**
   * <p>The status of the pipeline execution.</p>
   *         <ul>
   *             <li>
   *                 <p>InProgress: The pipeline execution is currently running.</p>
   *             </li>
   *             <li>
   *                 <p>Stopped: The pipeline execution was manually stopped. For more information,
   *                     see <a href="https://docs.aws.amazon.com/codepipeline/latest/userguide/concepts.html#concepts-executions-stopped">Stopped Executions</a>.</p>
   *             </li>
   *             <li>
   *                 <p>Stopping: The pipeline execution received a request to be manually stopped.
   *                     Depending on the selected stop mode, the execution is either completing or
   *                     abandoning in-progress actions. For more information, see <a href="https://docs.aws.amazon.com/codepipeline/latest/userguide/concepts.html#concepts-executions-stopped">Stopped Executions</a>.</p>
   *             </li>
   *             <li>
   *                 <p>Succeeded: The pipeline execution was completed successfully. </p>
   *             </li>
   *             <li>
   *                 <p>Superseded: While this pipeline execution was waiting for the next stage to
   *                     be completed, a newer pipeline execution advanced and continued through the
   *                     pipeline instead. For more information, see <a href="https://docs.aws.amazon.com/codepipeline/latest/userguide/concepts.html#concepts-superseded">Superseded Executions</a>.</p>
   *             </li>
   *             <li>
   *                 <p>Failed: The pipeline execution was not completed successfully.</p>
   *             </li>
   *          </ul>
   */
  status?: PipelineExecutionStatus | string;

  /**
   * <p>The date and time when the pipeline execution began, in timestamp format.</p>
   */
  startTime?: Date;

  /**
   * <p>The date and time of the last change to the pipeline execution, in timestamp
   *             format.</p>
   */
  lastUpdateTime?: Date;

  /**
   * <p>A list of the source artifact revisions that initiated a pipeline
   *             execution.</p>
   */
  sourceRevisions?: SourceRevision[];

  /**
   * <p>The interaction or event that started a pipeline execution, such as automated change
   *             detection or a <code>StartPipelineExecution</code> API call.</p>
   */
  trigger?: ExecutionTrigger;

  /**
   * <p>The interaction that stopped a pipeline execution.</p>
   */
  stopTrigger?: StopExecutionTrigger;
}

/**
 * <p>Represents the output of a <code>ListPipelineExecutions</code> action.</p>
 */
export interface ListPipelineExecutionsOutput {
  /**
   * <p>A list of executions in the history of a pipeline.</p>
   */
  pipelineExecutionSummaries?: PipelineExecutionSummary[];

  /**
   * <p>A token that can be used in the next <code>ListPipelineExecutions</code> call. To
   *             view all items in the list, continue to call this operation with each subsequent token
   *             until no more nextToken values are returned.</p>
   */
  nextToken?: string;
}

/**
 * <p>Represents the input of a <code>ListPipelines</code> action.</p>
 */
export interface ListPipelinesInput {
  /**
   * <p>An identifier that was returned from the previous list pipelines call. It can be
   *             used to return the next set of pipelines in the list.</p>
   */
  nextToken?: string;

  /**
   * <p>The maximum number of pipelines to return in a single call. To retrieve the remaining
   *             pipelines, make another call with the returned nextToken value. The minimum value you
   *             can specify is 1. The maximum accepted value is 1000.</p>
   */
  maxResults?: number;
}

/**
 * <p>Returns a summary of a pipeline.</p>
 */
export interface PipelineSummary {
  /**
   * <p>The name of the pipeline.</p>
   */
  name?: string;

  /**
   * <p>The version number of the pipeline.</p>
   */
  version?: number;

  /**
   * <p>The date and time the pipeline was created, in timestamp format.</p>
   */
  created?: Date;

  /**
   * <p>The date and time of the last update to the pipeline, in timestamp
   *             format.</p>
   */
  updated?: Date;
}

/**
 * <p>Represents the output of a <code>ListPipelines</code> action.</p>
 */
export interface ListPipelinesOutput {
  /**
   * <p>The list of pipelines.</p>
   */
  pipelines?: PipelineSummary[];

  /**
   * <p>If the amount of returned information is significantly large, an identifier is also
   *             returned. It can be used in a subsequent list pipelines call to return the next set of
   *             pipelines in the list.</p>
   */
  nextToken?: string;
}

/**
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

export interface ListTagsForResourceInput {
  /**
   * <p>The Amazon Resource Name (ARN) of the resource to get tags for.</p>
   */
  resourceArn: string | undefined;

  /**
   * <p>The token that was returned from the previous API call, which would be used to return
   *             the next page of the list. The ListTagsforResource call lists all available tags in one
   *             call and does not use pagination.</p>
   */
  nextToken?: string;

  /**
   * <p>The maximum number of results to return in a single call.</p>
   */
  maxResults?: number;
}

export interface ListTagsForResourceOutput {
  /**
   * <p>The tags for the resource.</p>
   */
  tags?: Tag[];

  /**
   * <p>If the amount of returned information is significantly large, an identifier is also
   *             returned and can be used in a subsequent API call to return the next page of the list.
   *             The ListTagsforResource call lists all available tags in one call and does not use
   *             pagination.</p>
   */
  nextToken?: string;
}

/**
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

export interface ListWebhooksInput {
  /**
   * <p>The token that was returned from the previous ListWebhooks call, which can be used
   *             to return the next set of webhooks in the list.</p>
   */
  NextToken?: string;

  /**
   * <p>The maximum number of results to return in a single call. To retrieve the remaining
   *             results, make another call with the returned nextToken value.</p>
   */
  MaxResults?: number;
}

export enum WebhookAuthenticationType {
  GITHUB_HMAC = "GITHUB_HMAC",
  IP = "IP",
  UNAUTHENTICATED = "UNAUTHENTICATED",
}

/**
 * <p>The authentication applied to incoming webhook trigger requests.</p>
 */
export interface WebhookAuthConfiguration {
  /**
   * <p>The property used to configure acceptance of webhooks in an IP address range. For
   *             IP, only the <code>AllowedIPRange</code> property must be set. This property must be set
   *             to a valid CIDR range.</p>
   */
  AllowedIPRange?: string;

  /**
   * <p>The property used to configure GitHub authentication. For GITHUB_HMAC, only the
   *                 <code>SecretToken</code> property must be set.</p>
   */
  SecretToken?: string;
}

/**
 * <p>The event criteria that specify when a webhook notification is sent to your
 *             URL.</p>
 */
export interface WebhookFilterRule {
  /**
   * <p>A JsonPath expression that is applied to the body/payload of the webhook. The value
   *             selected by the JsonPath expression must match the value specified in the
   *                 <code>MatchEquals</code> field. Otherwise, the request is ignored. For more
   *             information, see <a href="https://github.com/json-path/JsonPath">Java JsonPath
   *                 implementation</a> in GitHub.</p>
   */
  jsonPath: string | undefined;

  /**
   * <p>The value selected by the <code>JsonPath</code> expression must match what is
   *             supplied in the <code>MatchEquals</code> field. Otherwise, the request is ignored.
   *             Properties from the target action configuration can be included as placeholders in this
   *             value by surrounding the action configuration key with curly brackets. For example, if
   *             the value supplied here is "refs/heads/{Branch}" and the target action has an action
   *             configuration property called "Branch" with a value of "master", the
   *                 <code>MatchEquals</code> value is evaluated as "refs/heads/master". For a list of
   *             action configuration properties for built-in action types, see <a href="https://docs.aws.amazon.com/codepipeline/latest/userguide/reference-pipeline-structure.html#action-requirements">Pipeline Structure Reference Action Requirements</a>.</p>
   */
  matchEquals?: string;
}

/**
 * <p>Represents information about a webhook and its definition.</p>
 */
export interface WebhookDefinition {
  /**
   * <p>The name of the webhook.</p>
   */
  name: string | undefined;

  /**
   * <p>The name of the pipeline you want to connect to the webhook.</p>
   */
  targetPipeline: string | undefined;

  /**
   * <p>The name of the action in a pipeline you want to connect to the webhook. The action
   *             must be from the source (first) stage of the pipeline.</p>
   */
  targetAction: string | undefined;

  /**
   * <p>A list of rules applied to the body/payload sent in the POST request to a webhook
   *             URL. All defined rules must pass for the request to be accepted and the pipeline
   *             started.</p>
   */
  filters: WebhookFilterRule[] | undefined;

  /**
   * <p>Supported options are GITHUB_HMAC, IP, and UNAUTHENTICATED.</p>
   *         <ul>
   *             <li>
   *                 <p>For information about the authentication scheme implemented by GITHUB_HMAC,
   *                     see <a href="https://developer.github.com/webhooks/securing/">Securing your
   *                         webhooks</a> on the GitHub Developer website.</p>
   *             </li>
   *             <li>
   *                 <p> IP rejects webhooks trigger requests unless they originate from an IP
   *                     address in the IP range whitelisted in the authentication
   *                     configuration.</p>
   *             </li>
   *             <li>
   *                 <p> UNAUTHENTICATED accepts all webhook trigger requests regardless of
   *                     origin.</p>
   *             </li>
   *          </ul>
   */
  authentication: WebhookAuthenticationType | string | undefined;

  /**
   * <p>Properties that configure the authentication applied to incoming webhook trigger
   *             requests. The required properties depend on the authentication type. For GITHUB_HMAC,
   *             only the <code>SecretToken </code>property must be set. For IP, only the
   *                 <code>AllowedIPRange </code>property must be set to a valid CIDR range. For
   *             UNAUTHENTICATED, no properties can be set.</p>
   */
  authenticationConfiguration: WebhookAuthConfiguration | undefined;
}

/**
 * <p>The detail returned for each webhook after listing webhooks, such as the webhook
 *             URL, the webhook name, and the webhook ARN.</p>
 */
export interface ListWebhookItem {
  /**
   * <p>The detail returned for each webhook, such as the webhook authentication type and
   *             filter rules.</p>
   */
  definition: WebhookDefinition | undefined;

  /**
   * <p>A unique URL generated by CodePipeline. When a POST request is made to this URL,
   *             the defined pipeline is started as long as the body of the post request satisfies the
   *             defined authentication and filtering conditions. Deleting and re-creating a webhook
   *             makes the old URL invalid and generates a new one.</p>
   */
  url: string | undefined;

  /**
   * <p>The text of the error message about the webhook.</p>
   */
  errorMessage?: string;

  /**
   * <p>The number code of the error.</p>
   */
  errorCode?: string;

  /**
   * <p>The date and time a webhook was last successfully triggered, in timestamp
   *             format.</p>
   */
  lastTriggered?: Date;

  /**
   * <p>The Amazon Resource Name (ARN) of the webhook.</p>
   */
  arn?: string;

  /**
   * <p>Specifies the tags applied to the webhook.</p>
   */
  tags?: Tag[];
}

export interface ListWebhooksOutput {
  /**
   * <p>The JSON detail returned for each webhook in the list output for the ListWebhooks
   *             call.</p>
   */
  webhooks?: ListWebhookItem[];

  /**
   * <p>If the amount of returned information is significantly large, an identifier is also
   *             returned and can be used in a subsequent ListWebhooks call to return the next set of
   *             webhooks in the list. </p>
   */
  NextToken?: string;
}

/**
 * <p>Represents the input of a <code>PollForJobs</code> action.</p>
 */
export interface PollForJobsInput {
  /**
   * <p>Represents information about an action type.</p>
   */
  actionTypeId: ActionTypeId | undefined;

  /**
   * <p>The maximum number of jobs to return in a poll for jobs call.</p>
   */
  maxBatchSize?: number;

  /**
   * <p>A map of property names and values. For an action type with no queryable
   *             properties, this value must be null or an empty map. For an action type with a queryable
   *             property, you must supply that property as a key in the map. Only jobs whose action
   *             configuration matches the mapped value are returned.</p>
   */
  queryParam?: Record<string, string>;
}

/**
 * <p>Represents information about a job.</p>
 */
export interface Job {
  /**
   * <p>The unique system-generated ID of the job.</p>
   */
  id?: string;

  /**
   * <p>Other data about a job.</p>
   */
  data?: JobData;

  /**
   * <p>A system-generated random number that AWS CodePipeline uses to ensure that the job
   *             is being worked on by only one job worker. Use this number in an <a>AcknowledgeJob</a> request.</p>
   */
  nonce?: string;

  /**
   * <p>The ID of the AWS account to use when performing the job.</p>
   */
  accountId?: string;
}

/**
 * <p>Represents the output of a <code>PollForJobs</code> action.</p>
 */
export interface PollForJobsOutput {
  /**
   * <p>Information about the jobs to take action on.</p>
   */
  jobs?: Job[];
}

/**
 * <p>Represents the input of a <code>PollForThirdPartyJobs</code> action.</p>
 */
export interface PollForThirdPartyJobsInput {
  /**
   * <p>Represents information about an action type.</p>
   */
  actionTypeId: ActionTypeId | undefined;

  /**
   * <p>The maximum number of jobs to return in a poll for jobs call.</p>
   */
  maxBatchSize?: number;
}

/**
 * <p>A response to a <code>PollForThirdPartyJobs</code> request returned by AWS
 *             CodePipeline when there is a job to be worked on by a partner action.</p>
 */
export interface ThirdPartyJob {
  /**
   * <p>The <code>clientToken</code> portion of the <code>clientId</code> and
   *                 <code>clientToken</code> pair used to verify that the calling entity is allowed
   *             access to the job and its details.</p>
   */
  clientId?: string;

  /**
   * <p>The identifier used to identify the job in AWS CodePipeline.</p>
   */
  jobId?: string;
}

/**
 * <p>Represents the output of a <code>PollForThirdPartyJobs</code> action.</p>
 */
export interface PollForThirdPartyJobsOutput {
  /**
   * <p>Information about the jobs to take action on.</p>
   */
  jobs?: ThirdPartyJob[];
}

/**
 * <p>Represents the input of a <code>PutActionRevision</code> action.</p>
 */
export interface PutActionRevisionInput {
  /**
   * <p>The name of the pipeline that starts processing the revision to the
   *             source.</p>
   */
  pipelineName: string | undefined;

  /**
   * <p>The name of the stage that contains the action that acts on the revision.</p>
   */
  stageName: string | undefined;

  /**
   * <p>The name of the action that processes the revision.</p>
   */
  actionName: string | undefined;

  /**
   * <p>Represents information about the version (or revision) of an action.</p>
   */
  actionRevision: ActionRevision | undefined;
}

/**
 * <p>Represents the output of a <code>PutActionRevision</code> action.</p>
 */
export interface PutActionRevisionOutput {
  /**
   * <p>Indicates whether the artifact revision was previously used in an execution of the
   *             specified pipeline.</p>
   */
  newRevision?: boolean;

  /**
   * <p>The ID of the current workflow state of the pipeline.</p>
   */
  pipelineExecutionId?: string;
}

/**
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
 * <p>Represents the input of a <code>PutApprovalResult</code> action.</p>
 */
export interface PutApprovalResultInput {
  /**
   * <p>The name of the pipeline that contains the action. </p>
   */
  pipelineName: string | undefined;

  /**
   * <p>The name of the stage that contains the action.</p>
   */
  stageName: string | undefined;

  /**
   * <p>The name of the action for which approval is requested.</p>
   */
  actionName: string | undefined;

  /**
   * <p>Represents information about the result of the approval request.</p>
   */
  result: ApprovalResult | undefined;

  /**
   * <p>The system-generated token used to identify a unique approval request. The token
   *             for each open approval request can be obtained using the <a>GetPipelineState</a> action. It is used to validate that the approval
   *             request corresponding to this token is still valid.</p>
   */
  token: string | undefined;
}

/**
 * <p>Represents the output of a <code>PutApprovalResult</code> action.</p>
 */
export interface PutApprovalResultOutput {
  /**
   * <p>The timestamp showing when the approval or rejection was submitted.</p>
   */
  approvedAt?: Date;
}

/**
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

export enum FailureType {
  ConfigurationError = "ConfigurationError",
  JobFailed = "JobFailed",
  PermissionError = "PermissionError",
  RevisionOutOfSync = "RevisionOutOfSync",
  RevisionUnavailable = "RevisionUnavailable",
  SystemUnavailable = "SystemUnavailable",
}

/**
 * <p>Represents information about failure details.</p>
 */
export interface FailureDetails {
  /**
   * <p>The type of the failure.</p>
   */
  type: FailureType | string | undefined;

  /**
   * <p>The message about the failure.</p>
   */
  message: string | undefined;

  /**
   * <p>The external ID of the run of the action that failed.</p>
   */
  externalExecutionId?: string;
}

/**
 * <p>Represents the input of a <code>PutJobFailureResult</code> action.</p>
 */
export interface PutJobFailureResultInput {
  /**
   * <p>The unique system-generated ID of the job that failed. This is the same ID returned
   *             from <code>PollForJobs</code>.</p>
   */
  jobId: string | undefined;

  /**
   * <p>The details about the failure of a job.</p>
   */
  failureDetails: FailureDetails | undefined;
}

/**
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
 * <p>Represents information about a current revision.</p>
 */
export interface CurrentRevision {
  /**
   * <p>The revision ID of the current version of an artifact.</p>
   */
  revision: string | undefined;

  /**
   * <p>The change identifier for the current revision.</p>
   */
  changeIdentifier: string | undefined;

  /**
   * <p>The date and time when the most recent revision of the artifact was created, in
   *             timestamp format.</p>
   */
  created?: Date;

  /**
   * <p>The summary of the most recent revision of the artifact.</p>
   */
  revisionSummary?: string;
}

/**
 * <p>The details of the actions taken and results produced on an artifact as it passes
 *             through stages in the pipeline.</p>
 */
export interface ExecutionDetails {
  /**
   * <p>The summary of the current status of the actions.</p>
   */
  summary?: string;

  /**
   * <p>The system-generated unique ID of this action used to identify this job worker in
   *             any external systems, such as AWS CodeDeploy.</p>
   */
  externalExecutionId?: string;

  /**
   * <p>The percentage of work completed on the action, represented on a scale of 0 to 100
   *             percent.</p>
   */
  percentComplete?: number;
}

/**
 * <p>Represents the input of a <code>PutJobSuccessResult</code> action.</p>
 */
export interface PutJobSuccessResultInput {
  /**
   * <p>The unique system-generated ID of the job that succeeded. This is the same ID
   *             returned from <code>PollForJobs</code>.</p>
   */
  jobId: string | undefined;

  /**
   * <p>The ID of the current revision of the artifact successfully worked on by the
   *             job.</p>
   */
  currentRevision?: CurrentRevision;

  /**
   * <p>A token generated by a job worker, such as an AWS CodeDeploy deployment ID, that a
   *             successful job provides to identify a custom action in progress. Future jobs use this
   *             token to identify the running instance of the action. It can be reused to return more
   *             information about the progress of the custom action. When the action is complete, no
   *             continuation token should be supplied.</p>
   */
  continuationToken?: string;

  /**
   * <p>The execution details of the successful job, such as the actions taken by the job
   *             worker.</p>
   */
  executionDetails?: ExecutionDetails;

  /**
   * <p>Key-value pairs produced as output by a job worker that can be made available to a
   *             downstream action configuration. <code>outputVariables</code> can be included only when
   *             there is no continuation token on the request.</p>
   */
  outputVariables?: Record<string, string>;
}

/**
 * <p>Represents the input of a <code>PutThirdPartyJobFailureResult</code>
 *             action.</p>
 */
export interface PutThirdPartyJobFailureResultInput {
  /**
   * <p>The ID of the job that failed. This is the same ID returned from
   *                 <code>PollForThirdPartyJobs</code>.</p>
   */
  jobId: string | undefined;

  /**
   * <p>The clientToken portion of the clientId and clientToken pair used to verify that
   *             the calling entity is allowed access to the job and its details.</p>
   */
  clientToken: string | undefined;

  /**
   * <p>Represents information about failure details.</p>
   */
  failureDetails: FailureDetails | undefined;
}

/**
 * <p>Represents the input of a <code>PutThirdPartyJobSuccessResult</code>
 *             action.</p>
 */
export interface PutThirdPartyJobSuccessResultInput {
  /**
   * <p>The ID of the job that successfully completed. This is the same ID returned from
   *                 <code>PollForThirdPartyJobs</code>.</p>
   */
  jobId: string | undefined;

  /**
   * <p>The clientToken portion of the clientId and clientToken pair used to verify that
   *             the calling entity is allowed access to the job and its details.</p>
   */
  clientToken: string | undefined;

  /**
   * <p>Represents information about a current revision.</p>
   */
  currentRevision?: CurrentRevision;

  /**
   * <p>A token generated by a job worker, such as an AWS CodeDeploy deployment ID, that a
   *             successful job provides to identify a partner action in progress. Future jobs use this
   *             token to identify the running instance of the action. It can be reused to return more
   *             information about the progress of the partner action. When the action is complete, no
   *             continuation token should be supplied.</p>
   */
  continuationToken?: string;

  /**
   * <p>The details of the actions taken and results produced on an artifact as it passes
   *             through stages in the pipeline. </p>
   */
  executionDetails?: ExecutionDetails;
}

/**
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

export interface PutWebhookInput {
  /**
   * <p>The detail provided in an input file to create the webhook, such as the webhook
   *             name, the pipeline name, and the action name. Give the webhook a unique name that helps
   *             you identify it. You might name the webhook after the pipeline and action it targets so
   *             that you can easily recognize what it's used for later.</p>
   */
  webhook: WebhookDefinition | undefined;

  /**
   * <p>The tags for the webhook.</p>
   */
  tags?: Tag[];
}

export interface PutWebhookOutput {
  /**
   * <p>The detail returned from creating the webhook, such as the webhook name, webhook
   *             URL, and webhook ARN.</p>
   */
  webhook?: ListWebhookItem;
}

export interface RegisterWebhookWithThirdPartyInput {
  /**
   * <p>The name of an existing webhook created with PutWebhook to register with a
   *             supported third party. </p>
   */
  webhookName?: string;
}

export interface RegisterWebhookWithThirdPartyOutput {}

/**
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
 * <p>The stage has failed in a later run of the pipeline and the pipelineExecutionId
 *             associated with the request is out of date.</p>
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

export enum StageRetryMode {
  FAILED_ACTIONS = "FAILED_ACTIONS",
}

/**
 * <p>Represents the input of a <code>RetryStageExecution</code> action.</p>
 */
export interface RetryStageExecutionInput {
  /**
   * <p>The name of the pipeline that contains the failed stage.</p>
   */
  pipelineName: string | undefined;

  /**
   * <p>The name of the failed stage to be retried.</p>
   */
  stageName: string | undefined;

  /**
   * <p>The ID of the pipeline execution in the failed stage to be retried. Use the <a>GetPipelineState</a> action to retrieve the current pipelineExecutionId of
   *             the failed stage</p>
   */
  pipelineExecutionId: string | undefined;

  /**
   * <p>The scope of the retry attempt. Currently, the only supported value is
   *             FAILED_ACTIONS.</p>
   */
  retryMode: StageRetryMode | string | undefined;
}

/**
 * <p>Represents the output of a <code>RetryStageExecution</code> action.</p>
 */
export interface RetryStageExecutionOutput {
  /**
   * <p>The ID of the current workflow execution in the failed stage.</p>
   */
  pipelineExecutionId?: string;
}

/**
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
 * <p>Represents the input of a <code>StartPipelineExecution</code> action.</p>
 */
export interface StartPipelineExecutionInput {
  /**
   * <p>The name of the pipeline to start.</p>
   */
  name: string | undefined;

  /**
   * <p>The system-generated unique ID used to identify a unique execution
   *             request.</p>
   */
  clientRequestToken?: string;
}

/**
 * <p>Represents the output of a <code>StartPipelineExecution</code> action.</p>
 */
export interface StartPipelineExecutionOutput {
  /**
   * <p>The unique system-generated ID of the pipeline execution that was
   *             started.</p>
   */
  pipelineExecutionId?: string;
}

/**
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

export interface StopPipelineExecutionInput {
  /**
   * <p>The name of the pipeline to stop.</p>
   */
  pipelineName: string | undefined;

  /**
   * <p>The ID of the pipeline execution to be stopped in the current stage. Use the
   *                 <code>GetPipelineState</code> action to retrieve the current
   *             pipelineExecutionId.</p>
   */
  pipelineExecutionId: string | undefined;

  /**
   * <p>Use this option to stop the pipeline execution by abandoning, rather than finishing,
   *             in-progress actions.</p>
   *         <note>
   *             <p>This option can lead to failed or out-of-sequence tasks.</p>
   *         </note>
   */
  abandon?: boolean;

  /**
   * <p>Use this option to enter comments, such as the reason the pipeline was stopped.</p>
   */
  reason?: string;
}

export interface StopPipelineExecutionOutput {
  /**
   * <p>The unique system-generated ID of the pipeline execution that was stopped.</p>
   */
  pipelineExecutionId?: string;
}

export interface TagResourceInput {
  /**
   * <p>The Amazon Resource Name (ARN) of the resource you want to add tags to.</p>
   */
  resourceArn: string | undefined;

  /**
   * <p>The tags you want to modify or add to the resource.</p>
   */
  tags: Tag[] | undefined;
}

export interface TagResourceOutput {}

export interface UntagResourceInput {
  /**
   * <p> The Amazon Resource Name (ARN) of the resource to remove tags from.</p>
   */
  resourceArn: string | undefined;

  /**
   * <p>The list of keys for the tags to be removed from the resource.</p>
   */
  tagKeys: string[] | undefined;
}

export interface UntagResourceOutput {}

/**
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

export interface UpdateActionTypeInput {
  /**
   * <p>The action type definition for the action type to be updated.</p>
   */
  actionType: ActionTypeDeclaration | undefined;
}

/**
 * <p>Represents the input of an <code>UpdatePipeline</code> action.</p>
 */
export interface UpdatePipelineInput {
  /**
   * <p>The name of the pipeline to be updated.</p>
   */
  pipeline: PipelineDeclaration | undefined;
}

/**
 * <p>Represents the output of an <code>UpdatePipeline</code> action.</p>
 */
export interface UpdatePipelineOutput {
  /**
   * <p>The structure of the updated pipeline.</p>
   */
  pipeline?: PipelineDeclaration;
}

/**
 * @internal
 */
export const AcknowledgeJobInputFilterSensitiveLog = (obj: AcknowledgeJobInput): any => ({
  ...obj,
});

/**
 * @internal
 */
export const AcknowledgeJobOutputFilterSensitiveLog = (obj: AcknowledgeJobOutput): any => ({
  ...obj,
});

/**
 * @internal
 */
export const AcknowledgeThirdPartyJobInputFilterSensitiveLog = (obj: AcknowledgeThirdPartyJobInput): any => ({
  ...obj,
});

/**
 * @internal
 */
export const AcknowledgeThirdPartyJobOutputFilterSensitiveLog = (obj: AcknowledgeThirdPartyJobOutput): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ActionConfigurationFilterSensitiveLog = (obj: ActionConfiguration): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ActionConfigurationPropertyFilterSensitiveLog = (obj: ActionConfigurationProperty): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ActionContextFilterSensitiveLog = (obj: ActionContext): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ActionTypeIdFilterSensitiveLog = (obj: ActionTypeId): any => ({
  ...obj,
});

/**
 * @internal
 */
export const InputArtifactFilterSensitiveLog = (obj: InputArtifact): any => ({
  ...obj,
});

/**
 * @internal
 */
export const OutputArtifactFilterSensitiveLog = (obj: OutputArtifact): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ActionDeclarationFilterSensitiveLog = (obj: ActionDeclaration): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ErrorDetailsFilterSensitiveLog = (obj: ErrorDetails): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ActionExecutionFilterSensitiveLog = (obj: ActionExecution): any => ({
  ...obj,
});

/**
 * @internal
 */
export const S3LocationFilterSensitiveLog = (obj: S3Location): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ArtifactDetailFilterSensitiveLog = (obj: ArtifactDetail): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ActionExecutionInputFilterSensitiveLog = (obj: ActionExecutionInput): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ActionExecutionResultFilterSensitiveLog = (obj: ActionExecutionResult): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ActionExecutionOutputFilterSensitiveLog = (obj: ActionExecutionOutput): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ActionExecutionDetailFilterSensitiveLog = (obj: ActionExecutionDetail): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ActionExecutionFilterFilterSensitiveLog = (obj: ActionExecutionFilter): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ActionRevisionFilterSensitiveLog = (obj: ActionRevision): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ActionStateFilterSensitiveLog = (obj: ActionState): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ArtifactDetailsFilterSensitiveLog = (obj: ArtifactDetails): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ActionTypeSettingsFilterSensitiveLog = (obj: ActionTypeSettings): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ActionTypeFilterSensitiveLog = (obj: ActionType): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ActionTypeArtifactDetailsFilterSensitiveLog = (obj: ActionTypeArtifactDetails): any => ({
  ...obj,
});

/**
 * @internal
 */
export const JobWorkerExecutorConfigurationFilterSensitiveLog = (obj: JobWorkerExecutorConfiguration): any => ({
  ...obj,
});

/**
 * @internal
 */
export const LambdaExecutorConfigurationFilterSensitiveLog = (obj: LambdaExecutorConfiguration): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ExecutorConfigurationFilterSensitiveLog = (obj: ExecutorConfiguration): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ActionTypeExecutorFilterSensitiveLog = (obj: ActionTypeExecutor): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ActionTypeIdentifierFilterSensitiveLog = (obj: ActionTypeIdentifier): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ActionTypePermissionsFilterSensitiveLog = (obj: ActionTypePermissions): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ActionTypePropertyFilterSensitiveLog = (obj: ActionTypeProperty): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ActionTypeUrlsFilterSensitiveLog = (obj: ActionTypeUrls): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ActionTypeDeclarationFilterSensitiveLog = (obj: ActionTypeDeclaration): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ApprovalResultFilterSensitiveLog = (obj: ApprovalResult): any => ({
  ...obj,
});

/**
 * @internal
 */
export const S3ArtifactLocationFilterSensitiveLog = (obj: S3ArtifactLocation): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ArtifactLocationFilterSensitiveLog = (obj: ArtifactLocation): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ArtifactFilterSensitiveLog = (obj: Artifact): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ArtifactRevisionFilterSensitiveLog = (obj: ArtifactRevision): any => ({
  ...obj,
});

/**
 * @internal
 */
export const EncryptionKeyFilterSensitiveLog = (obj: EncryptionKey): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ArtifactStoreFilterSensitiveLog = (obj: ArtifactStore): any => ({
  ...obj,
});

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
export const BlockerDeclarationFilterSensitiveLog = (obj: BlockerDeclaration): any => ({
  ...obj,
});

/**
 * @internal
 */
export const TagFilterSensitiveLog = (obj: Tag): any => ({
  ...obj,
});

/**
 * @internal
 */
export const CreateCustomActionTypeInputFilterSensitiveLog = (obj: CreateCustomActionTypeInput): any => ({
  ...obj,
});

/**
 * @internal
 */
export const CreateCustomActionTypeOutputFilterSensitiveLog = (obj: CreateCustomActionTypeOutput): any => ({
  ...obj,
});

/**
 * @internal
 */
export const StageDeclarationFilterSensitiveLog = (obj: StageDeclaration): any => ({
  ...obj,
});

/**
 * @internal
 */
export const PipelineDeclarationFilterSensitiveLog = (obj: PipelineDeclaration): any => ({
  ...obj,
});

/**
 * @internal
 */
export const CreatePipelineInputFilterSensitiveLog = (obj: CreatePipelineInput): any => ({
  ...obj,
});

/**
 * @internal
 */
export const CreatePipelineOutputFilterSensitiveLog = (obj: CreatePipelineOutput): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DeleteCustomActionTypeInputFilterSensitiveLog = (obj: DeleteCustomActionTypeInput): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DeletePipelineInputFilterSensitiveLog = (obj: DeletePipelineInput): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DeleteWebhookInputFilterSensitiveLog = (obj: DeleteWebhookInput): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DeleteWebhookOutputFilterSensitiveLog = (obj: DeleteWebhookOutput): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DeregisterWebhookWithThirdPartyInputFilterSensitiveLog = (
  obj: DeregisterWebhookWithThirdPartyInput
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DeregisterWebhookWithThirdPartyOutputFilterSensitiveLog = (
  obj: DeregisterWebhookWithThirdPartyOutput
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DisableStageTransitionInputFilterSensitiveLog = (obj: DisableStageTransitionInput): any => ({
  ...obj,
});

/**
 * @internal
 */
export const EnableStageTransitionInputFilterSensitiveLog = (obj: EnableStageTransitionInput): any => ({
  ...obj,
});

/**
 * @internal
 */
export const GetActionTypeInputFilterSensitiveLog = (obj: GetActionTypeInput): any => ({
  ...obj,
});

/**
 * @internal
 */
export const GetActionTypeOutputFilterSensitiveLog = (obj: GetActionTypeOutput): any => ({
  ...obj,
});

/**
 * @internal
 */
export const GetJobDetailsInputFilterSensitiveLog = (obj: GetJobDetailsInput): any => ({
  ...obj,
});

/**
 * @internal
 */
export const StageContextFilterSensitiveLog = (obj: StageContext): any => ({
  ...obj,
});

/**
 * @internal
 */
export const PipelineContextFilterSensitiveLog = (obj: PipelineContext): any => ({
  ...obj,
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
export const GetPipelineInputFilterSensitiveLog = (obj: GetPipelineInput): any => ({
  ...obj,
});

/**
 * @internal
 */
export const PipelineMetadataFilterSensitiveLog = (obj: PipelineMetadata): any => ({
  ...obj,
});

/**
 * @internal
 */
export const GetPipelineOutputFilterSensitiveLog = (obj: GetPipelineOutput): any => ({
  ...obj,
});

/**
 * @internal
 */
export const GetPipelineExecutionInputFilterSensitiveLog = (obj: GetPipelineExecutionInput): any => ({
  ...obj,
});

/**
 * @internal
 */
export const PipelineExecutionFilterSensitiveLog = (obj: PipelineExecution): any => ({
  ...obj,
});

/**
 * @internal
 */
export const GetPipelineExecutionOutputFilterSensitiveLog = (obj: GetPipelineExecutionOutput): any => ({
  ...obj,
});

/**
 * @internal
 */
export const GetPipelineStateInputFilterSensitiveLog = (obj: GetPipelineStateInput): any => ({
  ...obj,
});

/**
 * @internal
 */
export const StageExecutionFilterSensitiveLog = (obj: StageExecution): any => ({
  ...obj,
});

/**
 * @internal
 */
export const TransitionStateFilterSensitiveLog = (obj: TransitionState): any => ({
  ...obj,
});

/**
 * @internal
 */
export const StageStateFilterSensitiveLog = (obj: StageState): any => ({
  ...obj,
});

/**
 * @internal
 */
export const GetPipelineStateOutputFilterSensitiveLog = (obj: GetPipelineStateOutput): any => ({
  ...obj,
});

/**
 * @internal
 */
export const GetThirdPartyJobDetailsInputFilterSensitiveLog = (obj: GetThirdPartyJobDetailsInput): any => ({
  ...obj,
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
export const ListActionExecutionsInputFilterSensitiveLog = (obj: ListActionExecutionsInput): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ListActionExecutionsOutputFilterSensitiveLog = (obj: ListActionExecutionsOutput): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ListActionTypesInputFilterSensitiveLog = (obj: ListActionTypesInput): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ListActionTypesOutputFilterSensitiveLog = (obj: ListActionTypesOutput): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ListPipelineExecutionsInputFilterSensitiveLog = (obj: ListPipelineExecutionsInput): any => ({
  ...obj,
});

/**
 * @internal
 */
export const SourceRevisionFilterSensitiveLog = (obj: SourceRevision): any => ({
  ...obj,
});

/**
 * @internal
 */
export const StopExecutionTriggerFilterSensitiveLog = (obj: StopExecutionTrigger): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ExecutionTriggerFilterSensitiveLog = (obj: ExecutionTrigger): any => ({
  ...obj,
});

/**
 * @internal
 */
export const PipelineExecutionSummaryFilterSensitiveLog = (obj: PipelineExecutionSummary): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ListPipelineExecutionsOutputFilterSensitiveLog = (obj: ListPipelineExecutionsOutput): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ListPipelinesInputFilterSensitiveLog = (obj: ListPipelinesInput): any => ({
  ...obj,
});

/**
 * @internal
 */
export const PipelineSummaryFilterSensitiveLog = (obj: PipelineSummary): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ListPipelinesOutputFilterSensitiveLog = (obj: ListPipelinesOutput): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ListTagsForResourceInputFilterSensitiveLog = (obj: ListTagsForResourceInput): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ListTagsForResourceOutputFilterSensitiveLog = (obj: ListTagsForResourceOutput): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ListWebhooksInputFilterSensitiveLog = (obj: ListWebhooksInput): any => ({
  ...obj,
});

/**
 * @internal
 */
export const WebhookAuthConfigurationFilterSensitiveLog = (obj: WebhookAuthConfiguration): any => ({
  ...obj,
});

/**
 * @internal
 */
export const WebhookFilterRuleFilterSensitiveLog = (obj: WebhookFilterRule): any => ({
  ...obj,
});

/**
 * @internal
 */
export const WebhookDefinitionFilterSensitiveLog = (obj: WebhookDefinition): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ListWebhookItemFilterSensitiveLog = (obj: ListWebhookItem): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ListWebhooksOutputFilterSensitiveLog = (obj: ListWebhooksOutput): any => ({
  ...obj,
});

/**
 * @internal
 */
export const PollForJobsInputFilterSensitiveLog = (obj: PollForJobsInput): any => ({
  ...obj,
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

/**
 * @internal
 */
export const PollForThirdPartyJobsInputFilterSensitiveLog = (obj: PollForThirdPartyJobsInput): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ThirdPartyJobFilterSensitiveLog = (obj: ThirdPartyJob): any => ({
  ...obj,
});

/**
 * @internal
 */
export const PollForThirdPartyJobsOutputFilterSensitiveLog = (obj: PollForThirdPartyJobsOutput): any => ({
  ...obj,
});

/**
 * @internal
 */
export const PutActionRevisionInputFilterSensitiveLog = (obj: PutActionRevisionInput): any => ({
  ...obj,
});

/**
 * @internal
 */
export const PutActionRevisionOutputFilterSensitiveLog = (obj: PutActionRevisionOutput): any => ({
  ...obj,
});

/**
 * @internal
 */
export const PutApprovalResultInputFilterSensitiveLog = (obj: PutApprovalResultInput): any => ({
  ...obj,
});

/**
 * @internal
 */
export const PutApprovalResultOutputFilterSensitiveLog = (obj: PutApprovalResultOutput): any => ({
  ...obj,
});

/**
 * @internal
 */
export const FailureDetailsFilterSensitiveLog = (obj: FailureDetails): any => ({
  ...obj,
});

/**
 * @internal
 */
export const PutJobFailureResultInputFilterSensitiveLog = (obj: PutJobFailureResultInput): any => ({
  ...obj,
});

/**
 * @internal
 */
export const CurrentRevisionFilterSensitiveLog = (obj: CurrentRevision): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ExecutionDetailsFilterSensitiveLog = (obj: ExecutionDetails): any => ({
  ...obj,
});

/**
 * @internal
 */
export const PutJobSuccessResultInputFilterSensitiveLog = (obj: PutJobSuccessResultInput): any => ({
  ...obj,
});

/**
 * @internal
 */
export const PutThirdPartyJobFailureResultInputFilterSensitiveLog = (obj: PutThirdPartyJobFailureResultInput): any => ({
  ...obj,
});

/**
 * @internal
 */
export const PutThirdPartyJobSuccessResultInputFilterSensitiveLog = (obj: PutThirdPartyJobSuccessResultInput): any => ({
  ...obj,
});

/**
 * @internal
 */
export const PutWebhookInputFilterSensitiveLog = (obj: PutWebhookInput): any => ({
  ...obj,
});

/**
 * @internal
 */
export const PutWebhookOutputFilterSensitiveLog = (obj: PutWebhookOutput): any => ({
  ...obj,
});

/**
 * @internal
 */
export const RegisterWebhookWithThirdPartyInputFilterSensitiveLog = (obj: RegisterWebhookWithThirdPartyInput): any => ({
  ...obj,
});

/**
 * @internal
 */
export const RegisterWebhookWithThirdPartyOutputFilterSensitiveLog = (
  obj: RegisterWebhookWithThirdPartyOutput
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const RetryStageExecutionInputFilterSensitiveLog = (obj: RetryStageExecutionInput): any => ({
  ...obj,
});

/**
 * @internal
 */
export const RetryStageExecutionOutputFilterSensitiveLog = (obj: RetryStageExecutionOutput): any => ({
  ...obj,
});

/**
 * @internal
 */
export const StartPipelineExecutionInputFilterSensitiveLog = (obj: StartPipelineExecutionInput): any => ({
  ...obj,
});

/**
 * @internal
 */
export const StartPipelineExecutionOutputFilterSensitiveLog = (obj: StartPipelineExecutionOutput): any => ({
  ...obj,
});

/**
 * @internal
 */
export const StopPipelineExecutionInputFilterSensitiveLog = (obj: StopPipelineExecutionInput): any => ({
  ...obj,
});

/**
 * @internal
 */
export const StopPipelineExecutionOutputFilterSensitiveLog = (obj: StopPipelineExecutionOutput): any => ({
  ...obj,
});

/**
 * @internal
 */
export const TagResourceInputFilterSensitiveLog = (obj: TagResourceInput): any => ({
  ...obj,
});

/**
 * @internal
 */
export const TagResourceOutputFilterSensitiveLog = (obj: TagResourceOutput): any => ({
  ...obj,
});

/**
 * @internal
 */
export const UntagResourceInputFilterSensitiveLog = (obj: UntagResourceInput): any => ({
  ...obj,
});

/**
 * @internal
 */
export const UntagResourceOutputFilterSensitiveLog = (obj: UntagResourceOutput): any => ({
  ...obj,
});

/**
 * @internal
 */
export const UpdateActionTypeInputFilterSensitiveLog = (obj: UpdateActionTypeInput): any => ({
  ...obj,
});

/**
 * @internal
 */
export const UpdatePipelineInputFilterSensitiveLog = (obj: UpdatePipelineInput): any => ({
  ...obj,
});

/**
 * @internal
 */
export const UpdatePipelineOutputFilterSensitiveLog = (obj: UpdatePipelineOutput): any => ({
  ...obj,
});
