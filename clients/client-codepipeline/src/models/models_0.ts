// smithy-typescript generated code
import type {
  ActionCategory,
  ActionConfigurationPropertyType,
  ActionExecutionStatus,
  ActionOwner,
  ApprovalStatus,
  ArtifactLocationType,
  ArtifactStoreType,
  BlockerType,
  ConditionExecutionStatus,
  ConditionType,
  EncryptionKeyType,
  EnvironmentVariableType,
  ExecutionMode,
  ExecutionType,
  ExecutorType,
  FailureType,
  GitPullRequestEventType,
  JobStatus,
  PipelineExecutionStatus,
  PipelineTriggerProviderType,
  PipelineType,
  Result,
  RetryTrigger,
  RuleCategory,
  RuleConfigurationPropertyType,
  RuleExecutionStatus,
  RuleOwner,
  SourceRevisionType,
  StageExecutionStatus,
  StageRetryMode,
  StageTransitionType,
  StartTimeRange,
  TargetFilterName,
  TriggerType,
  WebhookAuthenticationType,
} from "./enums";

/**
 * Represents the input of an AcknowledgeJob action.
 *
 * @public
 */
export interface AcknowledgeJobInput {
  /**
   * The unique system-generated ID of the job for which you want to confirm receipt.
   *
   * @public
   */
  jobId: string | undefined;

  /**
   * A system-generated random number that CodePipeline uses to ensure that the job is being worked on by only one job worker. Get this number from the response of the PollForJobs request that returned this job.
   *
   * @public
   */
  nonce: string | undefined;
}

/**
 * Represents the output of an AcknowledgeJob action.
 *
 * @public
 */
export interface AcknowledgeJobOutput {
  /**
   * Whether the job worker has received the specified job.
   *
   * @public
   */
  status?: JobStatus | undefined;
}

/**
 * Represents the input of an AcknowledgeThirdPartyJob action.
 *
 * @public
 */
export interface AcknowledgeThirdPartyJobInput {
  /**
   * The unique system-generated ID of the job.
   *
   * @public
   */
  jobId: string | undefined;

  /**
   * A system-generated random number that CodePipeline uses to ensure that the job is being worked on by only one job worker. Get this number from the response to a GetThirdPartyJobDetails request.
   *
   * @public
   */
  nonce: string | undefined;

  /**
   * The clientToken portion of the clientId and clientToken pair used to verify that the calling entity is allowed access to the job and its details.
   *
   * @public
   */
  clientToken: string | undefined;
}

/**
 * Represents the output of an AcknowledgeThirdPartyJob action.
 *
 * @public
 */
export interface AcknowledgeThirdPartyJobOutput {
  /**
   * The status information for the third party job, if any.
   *
   * @public
   */
  status?: JobStatus | undefined;
}

/**
 * Represents information about an action configuration.
 *
 * @public
 */
export interface ActionConfiguration {
  /**
   * The configuration data for the action.
   *
   * @public
   */
  configuration?: Record<string, string> | undefined;
}

/**
 * Represents information about an action configuration property.
 *
 * @public
 */
export interface ActionConfigurationProperty {
  /**
   * The name of the action configuration property.
   *
   * @public
   */
  name: string | undefined;

  /**
   * Whether the configuration property is a required value.
   *
   * @public
   */
  required: boolean | undefined;

  /**
   * Whether the configuration property is a key.
   *
   * @public
   */
  key: boolean | undefined;

  /**
   * Whether the configuration property is secret. Secrets are hidden from all calls except for `GetJobDetails`, `GetThirdPartyJobDetails`, `PollForJobs`, and `PollForThirdPartyJobs`.
   *
   * When updating a pipeline, passing * * * * * without changing any other values of the action preserves the previous value of the secret.
   *
   * @public
   */
  secret: boolean | undefined;

  /**
   * Indicates that the property is used with `PollForJobs`. When creating a custom action, an action can have up to one queryable property. If it has one, that property must be both required and not secret.
   *
   * If you create a pipeline with a custom action type, and that custom action contains a queryable property, the value for that configuration property is subject to other restrictions. The value must be less than or equal to twenty (20) characters. The value can contain only alphanumeric characters, underscores, and hyphens.
   *
   * @public
   */
  queryable?: boolean | undefined;

  /**
   * The description of the action configuration property that is displayed to users.
   *
   * @public
   */
  description?: string | undefined;

  /**
   * The type of the configuration property.
   *
   * @public
   */
  type?: ActionConfigurationPropertyType | undefined;
}

/**
 * Represents the context of an action in the stage of a pipeline to a job worker.
 *
 * @public
 */
export interface ActionContext {
  /**
   * The name of the action in the context of a job.
   *
   * @public
   */
  name?: string | undefined;

  /**
   * The system-generated unique ID that corresponds to an action's execution.
   *
   * @public
   */
  actionExecutionId?: string | undefined;
}

/**
 * Represents information about an action type.
 *
 * @public
 */
export interface ActionTypeId {
  /**
   * A category defines what kind of action can be taken in the stage, and constrains the provider type for the action. Valid categories are limited to one of the following values.
   *
   * - Source
   * - Build
   * - Test
   * - Deploy
   * - Invoke
   * - Approval
   * - Compute
   *
   * @public
   */
  category: ActionCategory | undefined;

  /**
   * The creator of the action being called. There are three valid values for the `Owner` field in the action category section within your pipeline structure: `AWS`, `ThirdParty`, and `Custom`. For more information, see [Valid Action Types and Providers in CodePipeline](https://docs.aws.amazon.com/codepipeline/latest/userguide/reference-pipeline-structure.html#actions-valid-providers).
   *
   * @public
   */
  owner: ActionOwner | undefined;

  /**
   * The provider of the service being called by the action. Valid providers are determined by the action category. For example, an action in the Deploy category type might have a provider of CodeDeploy, which would be specified as `CodeDeploy`. For more information, see [Valid Action Types and Providers in CodePipeline](https://docs.aws.amazon.com/codepipeline/latest/userguide/reference-pipeline-structure.html#actions-valid-providers).
   *
   * @public
   */
  provider: string | undefined;

  /**
   * A string that describes the action version.
   *
   * @public
   */
  version: string | undefined;
}

/**
 * The environment variables for the action.
 *
 * @public
 */
export interface EnvironmentVariable {
  /**
   * The environment variable name in the key-value pair.
   *
   * @public
   */
  name: string | undefined;

  /**
   * The environment variable value in the key-value pair.
   *
   * @public
   */
  value: string | undefined;

  /**
   * Specifies the type of use for the environment variable value. The value can be either `PLAINTEXT` or `SECRETS_MANAGER`. If the value is `SECRETS_MANAGER`, provide the Secrets reference in the EnvironmentVariable value.
   *
   * @public
   */
  type?: EnvironmentVariableType | undefined;
}

/**
 * Represents information about an artifact to be worked on, such as a test or build artifact.
 *
 * @public
 */
export interface InputArtifact {
  /**
   * The name of the artifact to be worked on (for example, "My App").
   *
   * Artifacts are the files that are worked on by actions in the pipeline. See the action configuration for each action for details about artifact parameters. For example, the S3 source action input artifact is a file name (or file path), and the files are generally provided as a ZIP file. Example artifact name: SampleApp_Windows.zip
   *
   * The input artifact of an action must exactly match the output artifact declared in a preceding action, but the input artifact does not have to be the next action in strict sequence from the action that provided the output artifact. Actions in parallel can declare different output artifacts, which are in turn consumed by different following actions.
   *
   * @public
   */
  name: string | undefined;
}

/**
 * Represents information about the output of an action.
 *
 * @public
 */
export interface OutputArtifact {
  /**
   * The name of the output of an artifact, such as "My App".
   *
   * The input artifact of an action must exactly match the output artifact declared in a preceding action, but the input artifact does not have to be the next action in strict sequence from the action that provided the output artifact. Actions in parallel can declare different output artifacts, which are in turn consumed by different following actions.
   *
   * Output artifact names must be unique within a pipeline.
   *
   * @public
   */
  name: string | undefined;

  /**
   * The files that you want to associate with the output artifact that will be exported from the compute action.
   *
   * @public
   */
  files?: string[] | undefined;
}

/**
 * Represents information about an action declaration.
 *
 * @public
 */
export interface ActionDeclaration {
  /**
   * The action declaration's name.
   *
   * @public
   */
  name: string | undefined;

  /**
   * Specifies the action type and the provider of the action.
   *
   * @public
   */
  actionTypeId: ActionTypeId | undefined;

  /**
   * The order in which actions are run.
   *
   * @public
   */
  runOrder?: number | undefined;

  /**
   * The action's configuration. These are key-value pairs that specify input values for an action. For more information, see [Action Structure Requirements in CodePipeline](https://docs.aws.amazon.com/codepipeline/latest/userguide/reference-pipeline-structure.html#action-requirements). For the list of configuration properties for the CloudFormation action type in CodePipeline, see [Configuration Properties Reference](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/continuous-delivery-codepipeline-action-reference.html) in the *CloudFormation User Guide*. For template snippets with examples, see [Using Parameter Override Functions with CodePipeline Pipelines](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/continuous-delivery-codepipeline-parameter-override-functions.html) in the *CloudFormation User Guide*.
   *
   * The values can be represented in either JSON or YAML format. For example, the JSON configuration item format is as follows:
   *
   * *JSON:*
   *
   * `"Configuration" : \{ Key : Value \},`
   *
   * @public
   */
  configuration?: Record<string, string> | undefined;

  /**
   * The shell commands to run with your compute action in CodePipeline. All commands are supported except multi-line formats. While CodeBuild logs and permissions are used, you do not need to create any resources in CodeBuild.
   *
   * > **Note:** Using compute time for this action will incur separate charges in CodeBuild.
   *
   * @public
   */
  commands?: string[] | undefined;

  /**
   * The name or ID of the result of the action declaration, such as a test or build artifact.
   *
   * @public
   */
  outputArtifacts?: OutputArtifact[] | undefined;

  /**
   * The name or ID of the artifact consumed by the action, such as a test or build artifact.
   *
   * @public
   */
  inputArtifacts?: InputArtifact[] | undefined;

  /**
   * The list of variables that are to be exported from the compute action. This is specifically CodeBuild environment variables as used for that action.
   *
   * @public
   */
  outputVariables?: string[] | undefined;

  /**
   * The ARN of the IAM service role that performs the declared action. This is assumed through the roleArn for the pipeline.
   *
   * @public
   */
  roleArn?: string | undefined;

  /**
   * The action declaration's Amazon Web Services Region, such as us-east-1.
   *
   * @public
   */
  region?: string | undefined;

  /**
   * The variable namespace associated with the action. All variables produced as output by this action fall under this namespace.
   *
   * @public
   */
  namespace?: string | undefined;

  /**
   * A timeout duration in minutes that can be applied against the ActionType’s default timeout value specified in [Quotas for CodePipeline](https://docs.aws.amazon.com/codepipeline/latest/userguide/limits.html). This attribute is available only to the manual approval ActionType.
   *
   * @public
   */
  timeoutInMinutes?: number | undefined;

  /**
   * The environment variables for the action.
   *
   * @public
   */
  environmentVariables?: EnvironmentVariable[] | undefined;
}

/**
 * Represents information about an error in CodePipeline.
 *
 * @public
 */
export interface ErrorDetails {
  /**
   * The system ID or number code of the error.
   *
   * @public
   */
  code?: string | undefined;

  /**
   * The text of the error message.
   *
   * @public
   */
  message?: string | undefined;
}

/**
 * Represents information about the run of an action.
 *
 * @public
 */
export interface ActionExecution {
  /**
   * ID of the workflow action execution in the current stage. Use the GetPipelineState action to retrieve the current action execution details of the current stage.
   *
   * > **Note:** For older executions, this field might be empty. The action execution ID is available for executions run on or after March 2020.
   *
   * @public
   */
  actionExecutionId?: string | undefined;

  /**
   * The status of the action, or for a completed action, the last status of the action.
   *
   * @public
   */
  status?: ActionExecutionStatus | undefined;

  /**
   * A summary of the run of the action.
   *
   * @public
   */
  summary?: string | undefined;

  /**
   * The last status change of the action.
   *
   * @public
   */
  lastStatusChange?: Date | undefined;

  /**
   * The system-generated token used to identify a unique approval request. The token for each open approval request can be obtained using the `GetPipelineState` command. It is used to validate that the approval request corresponding to this token is still valid.
   *
   * @public
   */
  token?: string | undefined;

  /**
   * The ARN of the user who last changed the pipeline.
   *
   * @public
   */
  lastUpdatedBy?: string | undefined;

  /**
   * The external ID of the run of the action.
   *
   * @public
   */
  externalExecutionId?: string | undefined;

  /**
   * The URL of a resource external to Amazon Web Services that is used when running the action (for example, an external repository URL).
   *
   * @public
   */
  externalExecutionUrl?: string | undefined;

  /**
   * A percentage of completeness of the action as it runs.
   *
   * @public
   */
  percentComplete?: number | undefined;

  /**
   * The details of an error returned by a URL external to Amazon Web Services.
   *
   * @public
   */
  errorDetails?: ErrorDetails | undefined;

  /**
   * The Amazon Resource Name (ARN) of the log stream for the action compute.
   *
   * @public
   */
  logStreamARN?: string | undefined;
}

/**
 * The Amazon S3 artifact location for an action's artifacts.
 *
 * @public
 */
export interface S3Location {
  /**
   * The Amazon S3 artifact bucket for an action's artifacts.
   *
   * @public
   */
  bucket?: string | undefined;

  /**
   * The artifact name.
   *
   * @public
   */
  key?: string | undefined;
}

/**
 * Artifact details for the action execution, such as the artifact location.
 *
 * @public
 */
export interface ArtifactDetail {
  /**
   * The artifact object name for the action execution.
   *
   * @public
   */
  name?: string | undefined;

  /**
   * The Amazon S3 artifact location for the action execution.
   *
   * @public
   */
  s3location?: S3Location | undefined;
}

/**
 * Input information used for an action execution.
 *
 * @public
 */
export interface ActionExecutionInput {
  /**
   * Represents information about an action type.
   *
   * @public
   */
  actionTypeId?: ActionTypeId | undefined;

  /**
   * Configuration data for an action execution.
   *
   * @public
   */
  configuration?: Record<string, string> | undefined;

  /**
   * Configuration data for an action execution with all variable references replaced with their real values for the execution.
   *
   * @public
   */
  resolvedConfiguration?: Record<string, string> | undefined;

  /**
   * The ARN of the IAM service role that performs the declared action. This is assumed through the roleArn for the pipeline.
   *
   * @public
   */
  roleArn?: string | undefined;

  /**
   * The Amazon Web Services Region for the action, such as us-east-1.
   *
   * @public
   */
  region?: string | undefined;

  /**
   * Details of input artifacts of the action that correspond to the action execution.
   *
   * @public
   */
  inputArtifacts?: ArtifactDetail[] | undefined;

  /**
   * The variable namespace associated with the action. All variables produced as output by this action fall under this namespace.
   *
   * @public
   */
  namespace?: string | undefined;
}

/**
 * Execution result information, such as the external execution ID.
 *
 * @public
 */
export interface ActionExecutionResult {
  /**
   * The action provider's external ID for the action execution.
   *
   * @public
   */
  externalExecutionId?: string | undefined;

  /**
   * The action provider's summary for the action execution.
   *
   * @public
   */
  externalExecutionSummary?: string | undefined;

  /**
   * The deepest external link to the external resource (for example, a repository URL or deployment endpoint) that is used when running the action.
   *
   * @public
   */
  externalExecutionUrl?: string | undefined;

  /**
   * Represents information about an error in CodePipeline.
   *
   * @public
   */
  errorDetails?: ErrorDetails | undefined;

  /**
   * The Amazon Resource Name (ARN) of the log stream for the action compute.
   *
   * @public
   */
  logStreamARN?: string | undefined;
}

/**
 * Output details listed for an action execution, such as the action execution result.
 *
 * @public
 */
export interface ActionExecutionOutput {
  /**
   * Details of output artifacts of the action that correspond to the action execution.
   *
   * @public
   */
  outputArtifacts?: ArtifactDetail[] | undefined;

  /**
   * Execution result information listed in the output details for an action execution.
   *
   * @public
   */
  executionResult?: ActionExecutionResult | undefined;

  /**
   * The outputVariables field shows the key-value pairs that were output as part of that execution.
   *
   * @public
   */
  outputVariables?: Record<string, string> | undefined;
}

/**
 * Returns information about an execution of an action, including the action execution ID, and the name, version, and timing of the action.
 *
 * @public
 */
export interface ActionExecutionDetail {
  /**
   * The pipeline execution ID for the action execution.
   *
   * @public
   */
  pipelineExecutionId?: string | undefined;

  /**
   * The action execution ID.
   *
   * @public
   */
  actionExecutionId?: string | undefined;

  /**
   * The version of the pipeline where the action was run.
   *
   * @public
   */
  pipelineVersion?: number | undefined;

  /**
   * The name of the stage that contains the action.
   *
   * @public
   */
  stageName?: string | undefined;

  /**
   * The name of the action.
   *
   * @public
   */
  actionName?: string | undefined;

  /**
   * The start time of the action execution.
   *
   * @public
   */
  startTime?: Date | undefined;

  /**
   * The last update time of the action execution.
   *
   * @public
   */
  lastUpdateTime?: Date | undefined;

  /**
   * The ARN of the user who changed the pipeline execution details.
   *
   * @public
   */
  updatedBy?: string | undefined;

  /**
   * The status of the action execution. Status categories are `InProgress`, `Succeeded`, and `Failed`.
   *
   * @public
   */
  status?: ActionExecutionStatus | undefined;

  /**
   * Input details for the action execution, such as role ARN, Region, and input artifacts.
   *
   * @public
   */
  input?: ActionExecutionInput | undefined;

  /**
   * Output details for the action execution, such as the action execution result.
   *
   * @public
   */
  output?: ActionExecutionOutput | undefined;
}

/**
 * The field that specifies to filter on the latest execution in the pipeline.
 *
 * > **Note:** Filtering on the latest execution is available for executions run on or after February 08, 2024.
 *
 * @public
 */
export interface LatestInPipelineExecutionFilter {
  /**
   * The execution ID for the latest execution in the pipeline.
   *
   * @public
   */
  pipelineExecutionId: string | undefined;

  /**
   * The start time to filter on for the latest execution in the pipeline. Valid options:
   *
   * - All
   * - Latest
   *
   * @public
   */
  startTimeRange: StartTimeRange | undefined;
}

/**
 * Filter values for the action execution.
 *
 * @public
 */
export interface ActionExecutionFilter {
  /**
   * The pipeline execution ID used to filter action execution history.
   *
   * @public
   */
  pipelineExecutionId?: string | undefined;

  /**
   * The latest execution in the pipeline.
   *
   * > **Note:** Filtering on the latest execution is available for executions run on or after February 08, 2024.
   *
   * @public
   */
  latestInPipelineExecution?: LatestInPipelineExecutionFilter | undefined;
}

/**
 * Represents information about the version (or revision) of an action.
 *
 * @public
 */
export interface ActionRevision {
  /**
   * The system-generated unique ID that identifies the revision number of the action.
   *
   * @public
   */
  revisionId: string | undefined;

  /**
   * The unique identifier of the change that set the state to this revision (for example, a deployment ID or timestamp).
   *
   * @public
   */
  revisionChangeId: string | undefined;

  /**
   * The date and time when the most recent version of the action was created, in timestamp format.
   *
   * @public
   */
  created: Date | undefined;
}

/**
 * Represents information about the state of an action.
 *
 * @public
 */
export interface ActionState {
  /**
   * The name of the action.
   *
   * @public
   */
  actionName?: string | undefined;

  /**
   * Represents information about the version (or revision) of an action.
   *
   * @public
   */
  currentRevision?: ActionRevision | undefined;

  /**
   * Represents information about the run of an action.
   *
   * @public
   */
  latestExecution?: ActionExecution | undefined;

  /**
   * A URL link for more information about the state of the action, such as a deployment group details page.
   *
   * @public
   */
  entityUrl?: string | undefined;

  /**
   * A URL link for more information about the revision, such as a commit details page.
   *
   * @public
   */
  revisionUrl?: string | undefined;
}

/**
 * Returns information about the details of an artifact.
 *
 * @public
 */
export interface ArtifactDetails {
  /**
   * The minimum number of artifacts allowed for the action type.
   *
   * @public
   */
  minimumCount: number | undefined;

  /**
   * The maximum number of artifacts allowed for the action type.
   *
   * @public
   */
  maximumCount: number | undefined;
}

/**
 * Returns information about the settings for an action type.
 *
 * @public
 */
export interface ActionTypeSettings {
  /**
   * The URL of a sign-up page where users can sign up for an external service and perform initial configuration of the action provided by that service.
   *
   * @public
   */
  thirdPartyConfigurationUrl?: string | undefined;

  /**
   * The URL returned to the CodePipeline console that provides a deep link to the resources of the external system, such as the configuration page for a CodeDeploy deployment group. This link is provided as part of the action display in the pipeline.
   *
   * @public
   */
  entityUrlTemplate?: string | undefined;

  /**
   * The URL returned to the CodePipeline console that contains a link to the top-level landing page for the external system, such as the console page for CodeDeploy. This link is shown on the pipeline view page in the CodePipeline console and provides a link to the execution entity of the external action.
   *
   * @public
   */
  executionUrlTemplate?: string | undefined;

  /**
   * The URL returned to the CodePipeline console that contains a link to the page where customers can update or change the configuration of the external action.
   *
   * @public
   */
  revisionUrlTemplate?: string | undefined;
}

/**
 * Returns information about the details of an action type.
 *
 * @public
 */
export interface ActionType {
  /**
   * Represents information about an action type.
   *
   * @public
   */
  id: ActionTypeId | undefined;

  /**
   * The settings for the action type.
   *
   * @public
   */
  settings?: ActionTypeSettings | undefined;

  /**
   * The configuration properties for the action type.
   *
   * @public
   */
  actionConfigurationProperties?: ActionConfigurationProperty[] | undefined;

  /**
   * The details of the input artifact for the action, such as its commit ID.
   *
   * @public
   */
  inputArtifactDetails: ArtifactDetails | undefined;

  /**
   * The details of the output artifact of the action, such as its commit ID.
   *
   * @public
   */
  outputArtifactDetails: ArtifactDetails | undefined;
}

/**
 * Information about parameters for artifacts associated with the action type, such as the minimum and maximum artifacts allowed.
 *
 * @public
 */
export interface ActionTypeArtifactDetails {
  /**
   * The minimum number of artifacts that can be used with the action type. For example, you should specify a minimum and maximum of zero input artifacts for an action type with a category of `source`.
   *
   * @public
   */
  minimumCount: number | undefined;

  /**
   * The maximum number of artifacts that can be used with the actiontype. For example, you should specify a minimum and maximum of zero input artifacts for an action type with a category of `source`.
   *
   * @public
   */
  maximumCount: number | undefined;
}

/**
 * Details about the polling configuration for the `JobWorker` action engine, or executor.
 *
 * @public
 */
export interface JobWorkerExecutorConfiguration {
  /**
   * The accounts in which the job worker is configured and might poll for jobs as part of the action execution.
   *
   * @public
   */
  pollingAccounts?: string[] | undefined;

  /**
   * The service Principals in which the job worker is configured and might poll for jobs as part of the action execution.
   *
   * @public
   */
  pollingServicePrincipals?: string[] | undefined;
}

/**
 * Details about the configuration for the `Lambda` action engine, or executor.
 *
 * @public
 */
export interface LambdaExecutorConfiguration {
  /**
   * The ARN of the Lambda function used by the action engine.
   *
   * @public
   */
  lambdaFunctionArn: string | undefined;
}

/**
 * The action engine, or executor, related to the supported integration model used to create and update the action type. The available executor types are `Lambda` and `JobWorker`.
 *
 * @public
 */
export interface ExecutorConfiguration {
  /**
   * Details about the `Lambda` executor of the action type.
   *
   * @public
   */
  lambdaExecutorConfiguration?: LambdaExecutorConfiguration | undefined;

  /**
   * Details about the `JobWorker` executor of the action type.
   *
   * @public
   */
  jobWorkerExecutorConfiguration?: JobWorkerExecutorConfiguration | undefined;
}

/**
 * The action engine, or executor, for an action type created for a provider, where the action is to be used by customers of the provider. The action engine is associated with the model used to create and update the action, such as the Lambda integration model.
 *
 * @public
 */
export interface ActionTypeExecutor {
  /**
   * The action configuration properties for the action type. These properties are specified in the action definition when the action type is created.
   *
   * @public
   */
  configuration: ExecutorConfiguration | undefined;

  /**
   * The integration model used to create and update the action type, `Lambda` or `JobWorker`.
   *
   * @public
   */
  type: ExecutorType | undefined;

  /**
   * The policy statement that specifies the permissions in the CodePipeline customer account that are needed to successfully run an action.
   *
   * To grant permission to another account, specify the account ID as the Principal, a domain-style identifier defined by the service, for example `codepipeline.amazonaws.com`.
   *
   * > **Note:** The size of the passed JSON policy document cannot exceed 2048 characters.
   *
   * @public
   */
  policyStatementsTemplate?: string | undefined;

  /**
   * The timeout in seconds for the job. An action execution can have multiple jobs. This is the timeout for a single job, not the entire action execution.
   *
   * @public
   */
  jobTimeout?: number | undefined;
}

/**
 * Specifies the category, owner, provider, and version of the action type.
 *
 * @public
 */
export interface ActionTypeIdentifier {
  /**
   * Defines what kind of action can be taken in the stage, one of the following:
   *
   * - `Source`
   * - `Build`
   * - `Test`
   * - `Deploy`
   * - `Approval`
   * - `Invoke`
   *
   * @public
   */
  category: ActionCategory | undefined;

  /**
   * The creator of the action type being called: `AWS` or `ThirdParty`.
   *
   * @public
   */
  owner: string | undefined;

  /**
   * The provider of the action type being called. The provider name is supplied when the action type is created.
   *
   * @public
   */
  provider: string | undefined;

  /**
   * A string that describes the action type version.
   *
   * @public
   */
  version: string | undefined;
}

/**
 * Details identifying the users with permissions to use the action type.
 *
 * @public
 */
export interface ActionTypePermissions {
  /**
   * A list of Amazon Web Services account IDs with access to use the action type in their pipelines.
   *
   * @public
   */
  allowedAccounts: string[] | undefined;
}

/**
 * Represents information about each property specified in the action configuration, such as the description and key name that display for the customer using the action type.
 *
 * @public
 */
export interface ActionTypeProperty {
  /**
   * The property name that is displayed to users.
   *
   * @public
   */
  name: string | undefined;

  /**
   * Whether the configuration property is an optional value.
   *
   * @public
   */
  optional: boolean | undefined;

  /**
   * Whether the configuration property is a key.
   *
   * @public
   */
  key: boolean | undefined;

  /**
   * Whether to omit the field value entered by the customer in the log. If `true`, the value is not saved in CloudTrail logs for the action execution.
   *
   * @public
   */
  noEcho: boolean | undefined;

  /**
   * Indicates that the property is used with polling. An action type can have up to one queryable property. If it has one, that property must be both required and not secret.
   *
   * @public
   */
  queryable?: boolean | undefined;

  /**
   * The description of the property that is displayed to users.
   *
   * @public
   */
  description?: string | undefined;
}

/**
 * Returns information about URLs for web pages that display to customers as links on the pipeline view, such as an external configuration page for the action type.
 *
 * @public
 */
export interface ActionTypeUrls {
  /**
   * The URL returned to the CodePipeline console that contains a link to the page where customers can configure the external action.
   *
   * @public
   */
  configurationUrl?: string | undefined;

  /**
   * The URL returned to the CodePipeline console that provides a deep link to the resources of the external system, such as a status page. This link is provided as part of the action display in the pipeline.
   *
   * @public
   */
  entityUrlTemplate?: string | undefined;

  /**
   * The link to an execution page for the action type in progress. For example, for a CodeDeploy action, this link is shown on the pipeline view page in the CodePipeline console, and it links to a CodeDeploy status page.
   *
   * @public
   */
  executionUrlTemplate?: string | undefined;

  /**
   * The URL returned to the CodePipeline console that contains a link to the page where customers can update or change the configuration of the external action.
   *
   * @public
   */
  revisionUrlTemplate?: string | undefined;
}

/**
 * The parameters for the action type definition that are provided when the action type is created or updated.
 *
 * @public
 */
export interface ActionTypeDeclaration {
  /**
   * The description for the action type to be updated.
   *
   * @public
   */
  description?: string | undefined;

  /**
   * Information about the executor for an action type that was created with any supported integration model.
   *
   * @public
   */
  executor: ActionTypeExecutor | undefined;

  /**
   * The action category, owner, provider, and version of the action type to be updated.
   *
   * @public
   */
  id: ActionTypeIdentifier | undefined;

  /**
   * Details for the artifacts, such as application files, to be worked on by the action. For example, the minimum and maximum number of input artifacts allowed.
   *
   * @public
   */
  inputArtifactDetails: ActionTypeArtifactDetails | undefined;

  /**
   * Details for the output artifacts, such as a built application, that are the result of the action. For example, the minimum and maximum number of output artifacts allowed.
   *
   * @public
   */
  outputArtifactDetails: ActionTypeArtifactDetails | undefined;

  /**
   * Details identifying the accounts with permissions to use the action type.
   *
   * @public
   */
  permissions?: ActionTypePermissions | undefined;

  /**
   * The properties of the action type to be updated.
   *
   * @public
   */
  properties?: ActionTypeProperty[] | undefined;

  /**
   * The links associated with the action type to be updated.
   *
   * @public
   */
  urls?: ActionTypeUrls | undefined;
}

/**
 * Represents information about the result of an approval request.
 *
 * @public
 */
export interface ApprovalResult {
  /**
   * The summary of the current status of the approval request.
   *
   * @public
   */
  summary: string | undefined;

  /**
   * The response submitted by a reviewer assigned to an approval action request.
   *
   * @public
   */
  status: ApprovalStatus | undefined;
}

/**
 * The location of the S3 bucket that contains a revision.
 *
 * @public
 */
export interface S3ArtifactLocation {
  /**
   * The name of the S3 bucket.
   *
   * @public
   */
  bucketName: string | undefined;

  /**
   * The key of the object in the S3 bucket, which uniquely identifies the object in the bucket.
   *
   * @public
   */
  objectKey: string | undefined;
}

/**
 * Represents information about the location of an artifact.
 *
 * @public
 */
export interface ArtifactLocation {
  /**
   * The type of artifact in the location.
   *
   * @public
   */
  type?: ArtifactLocationType | undefined;

  /**
   * The S3 bucket that contains the artifact.
   *
   * @public
   */
  s3Location?: S3ArtifactLocation | undefined;
}

/**
 * Artifacts are the files that are worked on by actions in the pipeline. See the action configuration for each action for details about artifact parameters. For example, the S3 source action artifact is a file name (or file path), and the files are generally provided as a ZIP file. Example artifact name: SampleApp_Windows.zip
 *
 * @public
 */
export interface Artifact {
  /**
   * The artifact's name.
   *
   * @public
   */
  name?: string | undefined;

  /**
   * The artifact's revision ID. Depending on the type of object, this could be a commit ID (GitHub) or a revision ID (Amazon S3).
   *
   * @public
   */
  revision?: string | undefined;

  /**
   * The location of an artifact.
   *
   * @public
   */
  location?: ArtifactLocation | undefined;
}

/**
 * Represents revision details of an artifact.
 *
 * @public
 */
export interface ArtifactRevision {
  /**
   * The name of an artifact. This name might be system-generated, such as "MyApp", or defined by the user when an action is created.
   *
   * @public
   */
  name?: string | undefined;

  /**
   * The revision ID of the artifact.
   *
   * @public
   */
  revisionId?: string | undefined;

  /**
   * An additional identifier for a revision, such as a commit date or, for artifacts stored in Amazon S3 buckets, the ETag value.
   *
   * @public
   */
  revisionChangeIdentifier?: string | undefined;

  /**
   * Summary information about the most recent revision of the artifact. For GitHub and CodeCommit repositories, the commit message. For Amazon S3 buckets or actions, the user-provided content of a `codepipeline-artifact-revision-summary` key specified in the object metadata.
   *
   * @public
   */
  revisionSummary?: string | undefined;

  /**
   * The date and time when the most recent revision of the artifact was created, in timestamp format.
   *
   * @public
   */
  created?: Date | undefined;

  /**
   * The commit ID for the artifact revision. For artifacts stored in GitHub or CodeCommit repositories, the commit ID is linked to a commit details page.
   *
   * @public
   */
  revisionUrl?: string | undefined;
}

/**
 * Represents information about the key used to encrypt data in the artifact store, such as an Amazon Web Services Key Management Service (Key Management Service) key.
 *
 * @public
 */
export interface EncryptionKey {
  /**
   * The ID used to identify the key. For an Amazon Web Services KMS key, you can use the key ID, the key ARN, or the alias ARN.
   *
   * > **Note:** Aliases are recognized only in the account that created the KMS key. For cross-account actions, you can only use the key ID or key ARN to identify the key. Cross-account actions involve using the role from the other account (AccountB), so specifying the key ID will use the key from the other account (AccountB).
   *
   * @public
   */
  id: string | undefined;

  /**
   * The type of encryption key, such as an Amazon Web Services KMS key. When creating or updating a pipeline, the value must be set to 'KMS'.
   *
   * @public
   */
  type: EncryptionKeyType | undefined;
}

/**
 * The S3 bucket where artifacts for the pipeline are stored.
 *
 * > **Note:** You must include either `artifactStore` or `artifactStores` in your pipeline, but you cannot use both. If you create a cross-region action in your pipeline, you must use `artifactStores`.
 *
 * @public
 */
export interface ArtifactStore {
  /**
   * The type of the artifact store, such as S3.
   *
   * @public
   */
  type: ArtifactStoreType | undefined;

  /**
   * The S3 bucket used for storing the artifacts for a pipeline. You can specify the name of an S3 bucket but not a folder in the bucket. A folder to contain the pipeline artifacts is created for you based on the name of the pipeline. You can use any S3 bucket in the same Amazon Web Services Region as the pipeline to store your pipeline artifacts.
   *
   * @public
   */
  location: string | undefined;

  /**
   * The encryption key used to encrypt the data in the artifact store, such as an Amazon Web Services Key Management Service key. If this is undefined, the default key for Amazon S3 is used.
   *
   * @public
   */
  encryptionKey?: EncryptionKey | undefined;
}

/**
 * Represents an Amazon Web Services session credentials object. These credentials are temporary credentials that are issued by Amazon Web Services Secure Token Service (STS). They can be used to access input and output artifacts in the S3 bucket used to store artifact for the pipeline in CodePipeline.
 *
 * @public
 */
export interface AWSSessionCredentials {
  /**
   * The access key for the session.
   *
   * @public
   */
  accessKeyId: string | undefined;

  /**
   * The secret access key for the session.
   *
   * @public
   */
  secretAccessKey: string | undefined;

  /**
   * The token for the session.
   *
   * @public
   */
  sessionToken: string | undefined;
}

/**
 * The ID for the rule type, which is made up of the combined values for category, owner, provider, and version. For more information about conditions, see [Stage conditions](https://docs.aws.amazon.com/codepipeline/latest/userguide/stage-conditions.html). For more information about rules, see the [CodePipeline rule reference](https://docs.aws.amazon.com/codepipeline/latest/userguide/rule-reference.html).
 *
 * @public
 */
export interface RuleTypeId {
  /**
   * A category defines what kind of rule can be run in the stage, and constrains the provider type for the rule. The valid category is `Rule`.
   *
   * @public
   */
  category: RuleCategory | undefined;

  /**
   * The creator of the rule being called. The valid value for the `Owner` field in the rule category is `AWS`.
   *
   * @public
   */
  owner?: RuleOwner | undefined;

  /**
   * The rule provider, such as the `DeploymentWindow` rule. For a list of rule provider names, see the rules listed in the [CodePipeline rule reference](https://docs.aws.amazon.com/codepipeline/latest/userguide/rule-reference.html).
   *
   * @public
   */
  provider: string | undefined;

  /**
   * A string that describes the rule version.
   *
   * @public
   */
  version?: string | undefined;
}

/**
 * Represents information about the rule to be created for an associated condition. An example would be creating a new rule for an entry condition, such as a rule that checks for a test result before allowing the run to enter the deployment stage. For more information about conditions, see [Stage conditions](https://docs.aws.amazon.com/codepipeline/latest/userguide/stage-conditions.html) and [How do stage conditions work?](https://docs.aws.amazon.com/codepipeline/latest/userguide/concepts-how-it-works-conditions.html). For more information about rules, see the [CodePipeline rule reference](https://docs.aws.amazon.com/codepipeline/latest/userguide/rule-reference.html).
 *
 * @public
 */
export interface RuleDeclaration {
  /**
   * The name of the rule that is created for the condition, such as `VariableCheck`.
   *
   * @public
   */
  name: string | undefined;

  /**
   * The ID for the rule type, which is made up of the combined values for category, owner, provider, and version.
   *
   * @public
   */
  ruleTypeId: RuleTypeId | undefined;

  /**
   * The action configuration fields for the rule.
   *
   * @public
   */
  configuration?: Record<string, string> | undefined;

  /**
   * The shell commands to run with your commands rule in CodePipeline. All commands are supported except multi-line formats. While CodeBuild logs and permissions are used, you do not need to create any resources in CodeBuild.
   *
   * > **Note:** Using compute time for this action will incur separate charges in CodeBuild.
   *
   * @public
   */
  commands?: string[] | undefined;

  /**
   * The input artifacts fields for the rule, such as specifying an input file for the rule.
   *
   * @public
   */
  inputArtifacts?: InputArtifact[] | undefined;

  /**
   * The pipeline role ARN associated with the rule.
   *
   * @public
   */
  roleArn?: string | undefined;

  /**
   * The Region for the condition associated with the rule.
   *
   * @public
   */
  region?: string | undefined;

  /**
   * The action timeout for the rule.
   *
   * @public
   */
  timeoutInMinutes?: number | undefined;
}

/**
 * The condition for the stage. A condition is made up of the rules and the result for the condition. For more information about conditions, see [Stage conditions](https://docs.aws.amazon.com/codepipeline/latest/userguide/stage-conditions.html) and [How do stage conditions work?](https://docs.aws.amazon.com/codepipeline/latest/userguide/concepts-how-it-works-conditions.html).. For more information about rules, see the [CodePipeline rule reference](https://docs.aws.amazon.com/codepipeline/latest/userguide/rule-reference.html).
 *
 * @public
 */
export interface Condition {
  /**
   * The action to be done when the condition is met. For example, rolling back an execution for a failure condition.
   *
   * @public
   */
  result?: Result | undefined;

  /**
   * The rules that make up the condition.
   *
   * @public
   */
  rules?: RuleDeclaration[] | undefined;
}

/**
 * The conditions for making checks for entry to a stage. For more information about conditions, see [Stage conditions](https://docs.aws.amazon.com/codepipeline/latest/userguide/stage-conditions.html) and [How do stage conditions work?](https://docs.aws.amazon.com/codepipeline/latest/userguide/concepts-how-it-works-conditions.html).
 *
 * @public
 */
export interface BeforeEntryConditions {
  /**
   * The conditions that are configured as entry conditions.
   *
   * @public
   */
  conditions: Condition[] | undefined;
}

/**
 * Reserved for future use.
 *
 * @public
 */
export interface BlockerDeclaration {
  /**
   * Reserved for future use.
   *
   * @public
   */
  name: string | undefined;

  /**
   * Reserved for future use.
   *
   * @public
   */
  type: BlockerType | undefined;
}

/**
 * A tag is a key-value pair that is used to manage the resource.
 *
 * @public
 */
export interface Tag {
  /**
   * The tag's key.
   *
   * @public
   */
  key: string | undefined;

  /**
   * The tag's value.
   *
   * @public
   */
  value: string | undefined;
}

/**
 * Represents the input of a CreateCustomActionType operation.
 *
 * @public
 */
export interface CreateCustomActionTypeInput {
  /**
   * The category of the custom action, such as a build action or a test action.
   *
   * @public
   */
  category: ActionCategory | undefined;

  /**
   * The provider of the service used in the custom action, such as CodeDeploy.
   *
   * @public
   */
  provider: string | undefined;

  /**
   * The version identifier of the custom action.
   *
   * @public
   */
  version: string | undefined;

  /**
   * URLs that provide users information about this custom action.
   *
   * @public
   */
  settings?: ActionTypeSettings | undefined;

  /**
   * The configuration properties for the custom action.
   *
   * > **Note:** You can refer to a name in the configuration properties of the custom action within the URL templates by following the format of \{Config:name\}, as long as the configuration property is both required and not secret. For more information, see [Create a Custom Action for a Pipeline](https://docs.aws.amazon.com/codepipeline/latest/userguide/how-to-create-custom-action.html).
   *
   * @public
   */
  configurationProperties?: ActionConfigurationProperty[] | undefined;

  /**
   * The details of the input artifact for the action, such as its commit ID.
   *
   * @public
   */
  inputArtifactDetails: ArtifactDetails | undefined;

  /**
   * The details of the output artifact of the action, such as its commit ID.
   *
   * @public
   */
  outputArtifactDetails: ArtifactDetails | undefined;

  /**
   * The tags for the custom action.
   *
   * @public
   */
  tags?: Tag[] | undefined;
}

/**
 * Represents the output of a `CreateCustomActionType` operation.
 *
 * @public
 */
export interface CreateCustomActionTypeOutput {
  /**
   * Returns information about the details of an action type.
   *
   * @public
   */
  actionType: ActionType | undefined;

  /**
   * Specifies the tags applied to the custom action.
   *
   * @public
   */
  tags?: Tag[] | undefined;
}

/**
 * The retry configuration specifies automatic retry for a failed stage, along with the configured retry mode.
 *
 * @public
 */
export interface RetryConfiguration {
  /**
   * The method that you want to configure for automatic stage retry on stage failure. You can specify to retry only failed action in the stage or all actions in the stage.
   *
   * @public
   */
  retryMode?: StageRetryMode | undefined;
}

/**
 * The configuration that specifies the result, such as rollback, to occur upon stage failure. For more information about conditions, see [Stage conditions](https://docs.aws.amazon.com/codepipeline/latest/userguide/stage-conditions.html) and [How do stage conditions work?](https://docs.aws.amazon.com/codepipeline/latest/userguide/concepts-how-it-works-conditions.html).
 *
 * @public
 */
export interface FailureConditions {
  /**
   * The specified result for when the failure conditions are met, such as rolling back the stage.
   *
   * @public
   */
  result?: Result | undefined;

  /**
   * The retry configuration specifies automatic retry for a failed stage, along with the configured retry mode.
   *
   * @public
   */
  retryConfiguration?: RetryConfiguration | undefined;

  /**
   * The conditions that are configured as failure conditions. For more information about conditions, see [Stage conditions](https://docs.aws.amazon.com/codepipeline/latest/userguide/stage-conditions.html) and [How do stage conditions work?](https://docs.aws.amazon.com/codepipeline/latest/userguide/concepts-how-it-works-conditions.html).
   *
   * @public
   */
  conditions?: Condition[] | undefined;
}

/**
 * The conditions for making checks that, if met, succeed a stage. For more information about conditions, see [Stage conditions](https://docs.aws.amazon.com/codepipeline/latest/userguide/stage-conditions.html) and [How do stage conditions work?](https://docs.aws.amazon.com/codepipeline/latest/userguide/concepts-how-it-works-conditions.html).
 *
 * @public
 */
export interface SuccessConditions {
  /**
   * The conditions that are success conditions.
   *
   * @public
   */
  conditions: Condition[] | undefined;
}

/**
 * Represents information about a stage and its definition.
 *
 * @public
 */
export interface StageDeclaration {
  /**
   * The name of the stage.
   *
   * @public
   */
  name: string | undefined;

  /**
   * Reserved for future use.
   *
   * @public
   */
  blockers?: BlockerDeclaration[] | undefined;

  /**
   * The actions included in a stage.
   *
   * @public
   */
  actions: ActionDeclaration[] | undefined;

  /**
   * The method to use when a stage has not completed successfully. For example, configuring this field for rollback will roll back a failed stage automatically to the last successful pipeline execution in the stage.
   *
   * @public
   */
  onFailure?: FailureConditions | undefined;

  /**
   * The method to use when a stage has succeeded. For example, configuring this field for conditions will allow the stage to succeed when the conditions are met.
   *
   * @public
   */
  onSuccess?: SuccessConditions | undefined;

  /**
   * The method to use when a stage allows entry. For example, configuring this field for conditions will allow entry to the stage when the conditions are met.
   *
   * @public
   */
  beforeEntry?: BeforeEntryConditions | undefined;
}

/**
 * The Git repository branches specified as filter criteria to start the pipeline.
 *
 * @public
 */
export interface GitBranchFilterCriteria {
  /**
   * The list of patterns of Git branches that, when a commit is pushed, are to be included as criteria that starts the pipeline.
   *
   * @public
   */
  includes?: string[] | undefined;

  /**
   * The list of patterns of Git branches that, when a commit is pushed, are to be excluded from starting the pipeline.
   *
   * @public
   */
  excludes?: string[] | undefined;
}

/**
 * The Git repository file paths specified as filter criteria to start the pipeline.
 *
 * @public
 */
export interface GitFilePathFilterCriteria {
  /**
   * The list of patterns of Git repository file paths that, when a commit is pushed, are to be included as criteria that starts the pipeline.
   *
   * @public
   */
  includes?: string[] | undefined;

  /**
   * The list of patterns of Git repository file paths that, when a commit is pushed, are to be excluded from starting the pipeline.
   *
   * @public
   */
  excludes?: string[] | undefined;
}

/**
 * The event criteria for the pull request trigger configuration, such as the lists of branches or file paths to include and exclude.
 *
 * The following are valid values for the events for this filter:
 *
 * - CLOSED
 * - OPEN
 * - UPDATED
 *
 * @public
 */
export interface GitPullRequestFilter {
  /**
   * The field that specifies which pull request events to filter on (OPEN, UPDATED, CLOSED) for the trigger configuration.
   *
   * @public
   */
  events?: GitPullRequestEventType[] | undefined;

  /**
   * The field that specifies to filter on branches for the pull request trigger configuration.
   *
   * @public
   */
  branches?: GitBranchFilterCriteria | undefined;

  /**
   * The field that specifies to filter on file paths for the pull request trigger configuration.
   *
   * @public
   */
  filePaths?: GitFilePathFilterCriteria | undefined;
}

/**
 * The Git tags specified as filter criteria for whether a Git tag repository event will start the pipeline.
 *
 * @public
 */
export interface GitTagFilterCriteria {
  /**
   * The list of patterns of Git tags that, when pushed, are to be included as criteria that starts the pipeline.
   *
   * @public
   */
  includes?: string[] | undefined;

  /**
   * The list of patterns of Git tags that, when pushed, are to be excluded from starting the pipeline.
   *
   * @public
   */
  excludes?: string[] | undefined;
}

/**
 * The event criteria that specify when a specified repository event will start the pipeline for the specified trigger configuration, such as the lists of Git tags to include and exclude.
 *
 * @public
 */
export interface GitPushFilter {
  /**
   * The field that contains the details for the Git tags trigger configuration.
   *
   * @public
   */
  tags?: GitTagFilterCriteria | undefined;

  /**
   * The field that specifies to filter on branches for the push trigger configuration.
   *
   * @public
   */
  branches?: GitBranchFilterCriteria | undefined;

  /**
   * The field that specifies to filter on file paths for the push trigger configuration.
   *
   * @public
   */
  filePaths?: GitFilePathFilterCriteria | undefined;
}

/**
 * A type of trigger configuration for Git-based source actions.
 *
 * > **Note:** You can specify the Git configuration trigger type for all third-party Git-based source actions that are supported by the `CodeStarSourceConnection` action type.
 *
 * @public
 */
export interface GitConfiguration {
  /**
   * The name of the pipeline source action where the trigger configuration, such as Git tags, is specified. The trigger configuration will start the pipeline upon the specified change only.
   *
   * > **Note:** You can only specify one trigger configuration per source action.
   *
   * @public
   */
  sourceActionName: string | undefined;

  /**
   * The field where the repository event that will start the pipeline, such as pushing Git tags, is specified with details.
   *
   * @public
   */
  push?: GitPushFilter[] | undefined;

  /**
   * The field where the repository event that will start the pipeline is specified as pull requests.
   *
   * @public
   */
  pullRequest?: GitPullRequestFilter[] | undefined;
}

/**
 * Represents information about the specified trigger configuration, such as the filter criteria and the source stage for the action that contains the trigger.
 *
 * > **Note:** This is only supported for the `CodeStarSourceConnection` action type.
 *
 * > **Note:** When a trigger configuration is specified, default change detection for repository and branch commits is disabled.
 *
 * @public
 */
export interface PipelineTriggerDeclaration {
  /**
   * The source provider for the event, such as connections configured for a repository with Git tags, for the specified trigger configuration.
   *
   * @public
   */
  providerType: PipelineTriggerProviderType | undefined;

  /**
   * Provides the filter criteria and the source stage for the repository event that starts the pipeline, such as Git tags.
   *
   * @public
   */
  gitConfiguration: GitConfiguration | undefined;
}

/**
 * A variable declared at the pipeline level.
 *
 * @public
 */
export interface PipelineVariableDeclaration {
  /**
   * The name of a pipeline-level variable.
   *
   * @public
   */
  name: string | undefined;

  /**
   * The value of a pipeline-level variable.
   *
   * @public
   */
  defaultValue?: string | undefined;

  /**
   * The description of a pipeline-level variable. It's used to add additional context about the variable, and not being used at time when pipeline executes.
   *
   * @public
   */
  description?: string | undefined;
}

/**
 * Represents the structure of actions and stages to be performed in the pipeline.
 *
 * @public
 */
export interface PipelineDeclaration {
  /**
   * The name of the pipeline.
   *
   * @public
   */
  name: string | undefined;

  /**
   * The Amazon Resource Name (ARN) for CodePipeline to use to either perform actions with no `actionRoleArn`, or to use to assume roles for actions with an `actionRoleArn`.
   *
   * @public
   */
  roleArn: string | undefined;

  /**
   * Represents information about the S3 bucket where artifacts are stored for the pipeline.
   *
   * > **Note:** You must include either `artifactStore` or `artifactStores` in your pipeline, but you cannot use both. If you create a cross-region action in your pipeline, you must use `artifactStores`.
   *
   * @public
   */
  artifactStore?: ArtifactStore | undefined;

  /**
   * A mapping of `artifactStore` objects and their corresponding Amazon Web Services Regions. There must be an artifact store for the pipeline Region and for each cross-region action in the pipeline.
   *
   * > **Note:** You must include either `artifactStore` or `artifactStores` in your pipeline, but you cannot use both. If you create a cross-region action in your pipeline, you must use `artifactStores`.
   *
   * @public
   */
  artifactStores?: Record<string, ArtifactStore> | undefined;

  /**
   * The stage in which to perform the action.
   *
   * @public
   */
  stages: StageDeclaration[] | undefined;

  /**
   * The version number of the pipeline. A new pipeline always has a version number of 1. This number is incremented when a pipeline is updated.
   *
   * @public
   */
  version?: number | undefined;

  /**
   * The method that the pipeline will use to handle multiple executions. The default mode is SUPERSEDED.
   *
   * @public
   */
  executionMode?: ExecutionMode | undefined;

  /**
   * CodePipeline provides the following pipeline types, which differ in characteristics and price, so that you can tailor your pipeline features and cost to the needs of your applications.
   *
   * - V1 type pipelines have a JSON structure that contains standard pipeline, stage, and action-level parameters.
   * - V2 type pipelines have the same structure as a V1 type, along with additional parameters for release safety and trigger configuration.
   *
   * > **Important:** Including V2 parameters, such as triggers on Git tags, in the pipeline JSON when creating or updating a pipeline will result in the pipeline having the V2 type of pipeline and the associated costs.
   *
   * For information about pricing for CodePipeline, see [Pricing](http://aws.amazon.com/codepipeline/pricing/).
   *
   * For information about which type of pipeline to choose, see [What type of pipeline is right for me?](https://docs.aws.amazon.com/codepipeline/latest/userguide/pipeline-types-planning.html).
   *
   * @public
   */
  pipelineType?: PipelineType | undefined;

  /**
   * A list that defines the pipeline variables for a pipeline resource. Variable names can have alphanumeric and underscore characters, and the values must match `[A-Za-z0-9@\-_]+`.
   *
   * @public
   */
  variables?: PipelineVariableDeclaration[] | undefined;

  /**
   * The trigger configuration specifying a type of event, such as Git tags, that starts the pipeline.
   *
   * > **Note:** When a trigger configuration is specified, default change detection for repository and branch commits is disabled.
   *
   * @public
   */
  triggers?: PipelineTriggerDeclaration[] | undefined;
}

/**
 * Represents the input of a `CreatePipeline` action.
 *
 * @public
 */
export interface CreatePipelineInput {
  /**
   * Represents the structure of actions and stages to be performed in the pipeline.
   *
   * @public
   */
  pipeline: PipelineDeclaration | undefined;

  /**
   * The tags for the pipeline.
   *
   * @public
   */
  tags?: Tag[] | undefined;
}

/**
 * Represents the output of a `CreatePipeline` action.
 *
 * @public
 */
export interface CreatePipelineOutput {
  /**
   * Represents the structure of actions and stages to be performed in the pipeline.
   *
   * @public
   */
  pipeline?: PipelineDeclaration | undefined;

  /**
   * Specifies the tags applied to the pipeline.
   *
   * @public
   */
  tags?: Tag[] | undefined;
}

/**
 * Represents the input of a `DeleteCustomActionType` operation. The custom action will be marked as deleted.
 *
 * @public
 */
export interface DeleteCustomActionTypeInput {
  /**
   * The category of the custom action that you want to delete, such as source or deploy.
   *
   * @public
   */
  category: ActionCategory | undefined;

  /**
   * The provider of the service used in the custom action, such as CodeDeploy.
   *
   * @public
   */
  provider: string | undefined;

  /**
   * The version of the custom action to delete.
   *
   * @public
   */
  version: string | undefined;
}

/**
 * Represents the input of a `DeletePipeline` action.
 *
 * @public
 */
export interface DeletePipelineInput {
  /**
   * The name of the pipeline to be deleted.
   *
   * @public
   */
  name: string | undefined;
}

/**
 * @public
 */
export interface DeleteWebhookInput {
  /**
   * The name of the webhook you want to delete.
   *
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
   * The name of the webhook you want to deregister.
   *
   * @public
   */
  webhookName?: string | undefined;
}

/**
 * @public
 */
export interface DeregisterWebhookWithThirdPartyOutput {}

/**
 * Represents the input of a `DisableStageTransition` action.
 *
 * @public
 */
export interface DisableStageTransitionInput {
  /**
   * The name of the pipeline in which you want to disable the flow of artifacts from one stage to another.
   *
   * @public
   */
  pipelineName: string | undefined;

  /**
   * The name of the stage where you want to disable the inbound or outbound transition of artifacts.
   *
   * @public
   */
  stageName: string | undefined;

  /**
   * Specifies whether artifacts are prevented from transitioning into the stage and being processed by the actions in that stage (inbound), or prevented from transitioning from the stage after they have been processed by the actions in that stage (outbound).
   *
   * @public
   */
  transitionType: StageTransitionType | undefined;

  /**
   * The reason given to the user that a stage is disabled, such as waiting for manual approval or manual tests. This message is displayed in the pipeline console UI.
   *
   * @public
   */
  reason: string | undefined;
}

/**
 * Represents the input of an `EnableStageTransition` action.
 *
 * @public
 */
export interface EnableStageTransitionInput {
  /**
   * The name of the pipeline in which you want to enable the flow of artifacts from one stage to another.
   *
   * @public
   */
  pipelineName: string | undefined;

  /**
   * The name of the stage where you want to enable the transition of artifacts, either into the stage (inbound) or from that stage to the next stage (outbound).
   *
   * @public
   */
  stageName: string | undefined;

  /**
   * Specifies whether artifacts are allowed to enter the stage and be processed by the actions in that stage (inbound) or whether already processed artifacts are allowed to transition to the next stage (outbound).
   *
   * @public
   */
  transitionType: StageTransitionType | undefined;
}

/**
 * @public
 */
export interface GetActionTypeInput {
  /**
   * Defines what kind of action can be taken in the stage. The following are the valid values:
   *
   * - `Source`
   * - `Build`
   * - `Test`
   * - `Deploy`
   * - `Approval`
   * - `Invoke`
   * - `Compute`
   *
   * @public
   */
  category: ActionCategory | undefined;

  /**
   * The creator of an action type that was created with any supported integration model. There are two valid values: `AWS` and `ThirdParty`.
   *
   * @public
   */
  owner: string | undefined;

  /**
   * The provider of the action type being called. The provider name is specified when the action type is created.
   *
   * @public
   */
  provider: string | undefined;

  /**
   * A string that describes the action type version.
   *
   * @public
   */
  version: string | undefined;
}

/**
 * @public
 */
export interface GetActionTypeOutput {
  /**
   * The action type information for the requested action type, such as the action type ID.
   *
   * @public
   */
  actionType?: ActionTypeDeclaration | undefined;
}

/**
 * Represents the input of a `GetJobDetails` action.
 *
 * @public
 */
export interface GetJobDetailsInput {
  /**
   * The unique system-generated ID for the job.
   *
   * @public
   */
  jobId: string | undefined;
}

/**
 * Represents information about a stage to a job worker.
 *
 * @public
 */
export interface StageContext {
  /**
   * The name of the stage.
   *
   * @public
   */
  name?: string | undefined;
}

/**
 * Represents information about a pipeline to a job worker.
 *
 * > **Note:** PipelineContext contains `pipelineArn` and `pipelineExecutionId` for custom action jobs. The `pipelineArn` and `pipelineExecutionId` fields are not populated for ThirdParty action jobs.
 *
 * @public
 */
export interface PipelineContext {
  /**
   * The name of the pipeline. This is a user-specified value. Pipeline names must be unique across all pipeline names under an Amazon Web Services account.
   *
   * @public
   */
  pipelineName?: string | undefined;

  /**
   * The stage of the pipeline.
   *
   * @public
   */
  stage?: StageContext | undefined;

  /**
   * The context of an action to a job worker in the stage of a pipeline.
   *
   * @public
   */
  action?: ActionContext | undefined;

  /**
   * The Amazon Resource Name (ARN) of the pipeline.
   *
   * @public
   */
  pipelineArn?: string | undefined;

  /**
   * The execution ID of the pipeline.
   *
   * @public
   */
  pipelineExecutionId?: string | undefined;
}

/**
 * Represents other information about a job required for a job worker to complete the job.
 *
 * @public
 */
export interface JobData {
  /**
   * Represents information about an action type.
   *
   * @public
   */
  actionTypeId?: ActionTypeId | undefined;

  /**
   * Represents information about an action configuration.
   *
   * @public
   */
  actionConfiguration?: ActionConfiguration | undefined;

  /**
   * Represents information about a pipeline to a job worker.
   *
   * > **Note:** Includes `pipelineArn` and `pipelineExecutionId` for custom jobs.
   *
   * @public
   */
  pipelineContext?: PipelineContext | undefined;

  /**
   * The artifact supplied to the job.
   *
   * @public
   */
  inputArtifacts?: Artifact[] | undefined;

  /**
   * The output of the job.
   *
   * @public
   */
  outputArtifacts?: Artifact[] | undefined;

  /**
   * Represents an Amazon Web Services session credentials object. These credentials are temporary credentials that are issued by Amazon Web Services Secure Token Service (STS). They can be used to access input and output artifacts in the S3 bucket used to store artifacts for the pipeline in CodePipeline.
   *
   * @public
   */
  artifactCredentials?: AWSSessionCredentials | undefined;

  /**
   * A system-generated token, such as a deployment ID, required by a job to continue the job asynchronously.
   *
   * @public
   */
  continuationToken?: string | undefined;

  /**
   * Represents information about the key used to encrypt data in the artifact store, such as an KMS key.
   *
   * @public
   */
  encryptionKey?: EncryptionKey | undefined;
}

/**
 * Represents information about the details of a job.
 *
 * @public
 */
export interface JobDetails {
  /**
   * The unique system-generated ID of the job.
   *
   * @public
   */
  id?: string | undefined;

  /**
   * Represents other information about a job required for a job worker to complete the job.
   *
   * @public
   */
  data?: JobData | undefined;

  /**
   * The Amazon Web Services account ID associated with the job.
   *
   * @public
   */
  accountId?: string | undefined;
}

/**
 * Represents the output of a `GetJobDetails` action.
 *
 * @public
 */
export interface GetJobDetailsOutput {
  /**
   * The details of the job.
   *
   * > **Note:** If AWSSessionCredentials is used, a long-running job can call `GetJobDetails` again to obtain new credentials.
   *
   * @public
   */
  jobDetails?: JobDetails | undefined;
}

/**
 * Represents the input of a `GetPipeline` action.
 *
 * @public
 */
export interface GetPipelineInput {
  /**
   * The name of the pipeline for which you want to get information. Pipeline names must be unique in an Amazon Web Services account.
   *
   * @public
   */
  name: string | undefined;

  /**
   * The version number of the pipeline. If you do not specify a version, defaults to the current version.
   *
   * @public
   */
  version?: number | undefined;
}

/**
 * Information about a pipeline.
 *
 * @public
 */
export interface PipelineMetadata {
  /**
   * The Amazon Resource Name (ARN) of the pipeline.
   *
   * @public
   */
  pipelineArn?: string | undefined;

  /**
   * The date and time the pipeline was created, in timestamp format.
   *
   * @public
   */
  created?: Date | undefined;

  /**
   * The date and time the pipeline was last updated, in timestamp format.
   *
   * @public
   */
  updated?: Date | undefined;

  /**
   * The date and time that polling for source changes (periodic checks) was stopped for the pipeline, in timestamp format.
   *
   * > **Important:** Pipelines that are inactive for longer than 30 days will have polling disabled for the pipeline. For more information, see [pollingDisabledAt](https://docs.aws.amazon.com/codepipeline/latest/userguide/reference-pipeline-structure.html#metadata.pollingDisabledAt) in the pipeline structure reference. For the steps to migrate your pipeline from polling to event-based change detection, see [Migrate polling pipelines to use event-based change detection](https://docs.aws.amazon.com/codepipeline/latest/userguide/update-change-detection.html).
   *
   * You can migrate (update) a polling pipeline to use event-based change detection. For example, for a pipeline with a CodeCommit source, we recommend you migrate (update) your pipeline to use CloudWatch Events. To learn more, see [Migrate polling pipelines to use event-based change detection](https://docs.aws.amazon.com/codepipeline/latest/userguide/update-change-detection.html) in the *CodePipeline User Guide*.
   *
   * @public
   */
  pollingDisabledAt?: Date | undefined;
}

/**
 * Represents the output of a `GetPipeline` action.
 *
 * @public
 */
export interface GetPipelineOutput {
  /**
   * Represents the structure of actions and stages to be performed in the pipeline.
   *
   * @public
   */
  pipeline?: PipelineDeclaration | undefined;

  /**
   * Represents the pipeline metadata information returned as part of the output of a `GetPipeline` action.
   *
   * @public
   */
  metadata?: PipelineMetadata | undefined;
}

/**
 * Represents the input of a `GetPipelineExecution` action.
 *
 * @public
 */
export interface GetPipelineExecutionInput {
  /**
   * The name of the pipeline about which you want to get execution details.
   *
   * @public
   */
  pipelineName: string | undefined;

  /**
   * The ID of the pipeline execution about which you want to get execution details.
   *
   * @public
   */
  pipelineExecutionId: string | undefined;
}

/**
 * The metadata for the stage execution to be rolled back.
 *
 * @public
 */
export interface PipelineRollbackMetadata {
  /**
   * The pipeline execution ID to which the stage will be rolled back.
   *
   * @public
   */
  rollbackTargetPipelineExecutionId?: string | undefined;
}

/**
 * The interaction or event that started a pipeline execution.
 *
 * @public
 */
export interface ExecutionTrigger {
  /**
   * The type of change-detection method, command, or user interaction that started a pipeline execution.
   *
   * @public
   */
  triggerType?: TriggerType | undefined;

  /**
   * Detail related to the event that started a pipeline execution, such as the webhook ARN of the webhook that triggered the pipeline execution or the user ARN for a user-initiated `start-pipeline-execution` CLI command.
   *
   * @public
   */
  triggerDetail?: string | undefined;
}

/**
 * A pipeline-level variable used for a pipeline execution.
 *
 * @public
 */
export interface ResolvedPipelineVariable {
  /**
   * The name of a pipeline-level variable.
   *
   * @public
   */
  name?: string | undefined;

  /**
   * The resolved value of a pipeline-level variable.
   *
   * @public
   */
  resolvedValue?: string | undefined;
}

/**
 * Represents information about an execution of a pipeline.
 *
 * @public
 */
export interface PipelineExecution {
  /**
   * The name of the pipeline with the specified pipeline execution.
   *
   * @public
   */
  pipelineName?: string | undefined;

  /**
   * The version number of the pipeline with the specified pipeline execution.
   *
   * @public
   */
  pipelineVersion?: number | undefined;

  /**
   * The ID of the pipeline execution.
   *
   * @public
   */
  pipelineExecutionId?: string | undefined;

  /**
   * The status of the pipeline execution.
   *
   * - Cancelled: The pipeline’s definition was updated before the pipeline execution could be completed.
   * - InProgress: The pipeline execution is currently running.
   * - Stopped: The pipeline execution was manually stopped. For more information, see [Stopped Executions](https://docs.aws.amazon.com/codepipeline/latest/userguide/concepts.html#concepts-executions-stopped).
   * - Stopping: The pipeline execution received a request to be manually stopped. Depending on the selected stop mode, the execution is either completing or abandoning in-progress actions. For more information, see [Stopped Executions](https://docs.aws.amazon.com/codepipeline/latest/userguide/concepts.html#concepts-executions-stopped).
   * - Succeeded: The pipeline execution was completed successfully.
   * - Superseded: While this pipeline execution was waiting for the next stage to be completed, a newer pipeline execution advanced and continued through the pipeline instead. For more information, see [Superseded Executions](https://docs.aws.amazon.com/codepipeline/latest/userguide/concepts.html#concepts-superseded).
   * - Failed: The pipeline execution was not completed successfully.
   *
   * @public
   */
  status?: PipelineExecutionStatus | undefined;

  /**
   * A summary that contains a description of the pipeline execution status.
   *
   * @public
   */
  statusSummary?: string | undefined;

  /**
   * A list of `ArtifactRevision` objects included in a pipeline execution.
   *
   * @public
   */
  artifactRevisions?: ArtifactRevision[] | undefined;

  /**
   * A list of pipeline variables used for the pipeline execution.
   *
   * @public
   */
  variables?: ResolvedPipelineVariable[] | undefined;

  /**
   * The interaction or event that started a pipeline execution.
   *
   * @public
   */
  trigger?: ExecutionTrigger | undefined;

  /**
   * The method that the pipeline will use to handle multiple executions. The default mode is SUPERSEDED.
   *
   * @public
   */
  executionMode?: ExecutionMode | undefined;

  /**
   * The type of the pipeline execution.
   *
   * @public
   */
  executionType?: ExecutionType | undefined;

  /**
   * The metadata about the execution pertaining to stage rollback.
   *
   * @public
   */
  rollbackMetadata?: PipelineRollbackMetadata | undefined;
}

/**
 * Represents the output of a `GetPipelineExecution` action.
 *
 * @public
 */
export interface GetPipelineExecutionOutput {
  /**
   * Represents information about the execution of a pipeline.
   *
   * @public
   */
  pipelineExecution?: PipelineExecution | undefined;
}

/**
 * Represents the input of a `GetPipelineState` action.
 *
 * @public
 */
export interface GetPipelineStateInput {
  /**
   * The name of the pipeline about which you want to get information.
   *
   * @public
   */
  name: string | undefined;
}

/**
 * The run of a condition.
 *
 * @public
 */
export interface ConditionExecution {
  /**
   * The status of the run for a condition.
   *
   * @public
   */
  status?: ConditionExecutionStatus | undefined;

  /**
   * The summary of information about a run for a condition.
   *
   * @public
   */
  summary?: string | undefined;

  /**
   * The last status change of the condition.
   *
   * @public
   */
  lastStatusChange?: Date | undefined;
}

/**
 * The change to a rule that creates a revision of the rule.
 *
 * @public
 */
export interface RuleRevision {
  /**
   * The system-generated unique ID that identifies the revision number of the rule.
   *
   * @public
   */
  revisionId: string | undefined;

  /**
   * The unique identifier of the change that set the state to this revision (for example, a deployment ID or timestamp).
   *
   * @public
   */
  revisionChangeId: string | undefined;

  /**
   * The date and time when the most recent version of the rule was created, in timestamp format.
   *
   * @public
   */
  created: Date | undefined;
}

/**
 * Represents information about each time a rule is run as part of the pipeline execution for a pipeline configured with conditions.
 *
 * @public
 */
export interface RuleExecution {
  /**
   * The execution ID for the run of the rule.
   *
   * @public
   */
  ruleExecutionId?: string | undefined;

  /**
   * The status of the run of the rule, such as FAILED.
   *
   * @public
   */
  status?: RuleExecutionStatus | undefined;

  /**
   * A summary of the run of the rule.
   *
   * @public
   */
  summary?: string | undefined;

  /**
   * The last status change of the rule.
   *
   * @public
   */
  lastStatusChange?: Date | undefined;

  /**
   * The system-generated token used to identify a unique request.
   *
   * @public
   */
  token?: string | undefined;

  /**
   * The ARN of the user who last changed the rule.
   *
   * @public
   */
  lastUpdatedBy?: string | undefined;

  /**
   * The external ID of the run of the rule.
   *
   * @public
   */
  externalExecutionId?: string | undefined;

  /**
   * The URL of a resource external to Amazon Web Services that is used when running the rule (for example, an external repository URL).
   *
   * @public
   */
  externalExecutionUrl?: string | undefined;

  /**
   * Represents information about an error in CodePipeline.
   *
   * @public
   */
  errorDetails?: ErrorDetails | undefined;
}

/**
 * Returns information about the state of a rule.
 *
 * > **Note:** Values returned in the `revisionId` field indicate the rule revision information, such as the commit ID, for the current state.
 *
 * @public
 */
export interface RuleState {
  /**
   * The name of the rule.
   *
   * @public
   */
  ruleName?: string | undefined;

  /**
   * The ID of the current revision of the artifact successfully worked on by the job.
   *
   * @public
   */
  currentRevision?: RuleRevision | undefined;

  /**
   * Represents information about the latest run of an rule.
   *
   * @public
   */
  latestExecution?: RuleExecution | undefined;

  /**
   * A URL link for more information about the state of the action, such as a details page.
   *
   * @public
   */
  entityUrl?: string | undefined;

  /**
   * A URL link for more information about the revision, such as a commit details page.
   *
   * @public
   */
  revisionUrl?: string | undefined;
}

/**
 * Information about the state of the condition.
 *
 * @public
 */
export interface ConditionState {
  /**
   * The state of the latest run of the rule.
   *
   * @public
   */
  latestExecution?: ConditionExecution | undefined;

  /**
   * The state of the rules for the condition.
   *
   * @public
   */
  ruleStates?: RuleState[] | undefined;
}

/**
 * Represents information about the run of a condition for a stage.
 *
 * @public
 */
export interface StageConditionsExecution {
  /**
   * The status of a run of a condition for a stage.
   *
   * @public
   */
  status?: ConditionExecutionStatus | undefined;

  /**
   * A summary of the run of the condition for a stage.
   *
   * @public
   */
  summary?: string | undefined;
}

/**
 * The state of a run of a condition for a stage.
 *
 * @public
 */
export interface StageConditionState {
  /**
   * Represents information about the latest run of a condition for a stage.
   *
   * @public
   */
  latestExecution?: StageConditionsExecution | undefined;

  /**
   * The states of the conditions for a run of a condition for a stage.
   *
   * @public
   */
  conditionStates?: ConditionState[] | undefined;
}

/**
 * Represents information about the run of a stage.
 *
 * @public
 */
export interface StageExecution {
  /**
   * The ID of the pipeline execution associated with the stage.
   *
   * @public
   */
  pipelineExecutionId: string | undefined;

  /**
   * The status of the stage, or for a completed stage, the last status of the stage.
   *
   * > **Note:** A status of cancelled means that the pipeline’s definition was updated before the stage execution could be completed.
   *
   * @public
   */
  status: StageExecutionStatus | undefined;

  /**
   * The type of pipeline execution for the stage, such as a rollback pipeline execution.
   *
   * @public
   */
  type?: ExecutionType | undefined;
}

/**
 * Represents information about the state of transitions between one stage and another stage.
 *
 * @public
 */
export interface TransitionState {
  /**
   * Whether the transition between stages is enabled (true) or disabled (false).
   *
   * @public
   */
  enabled?: boolean | undefined;

  /**
   * The ID of the user who last changed the transition state.
   *
   * @public
   */
  lastChangedBy?: string | undefined;

  /**
   * The timestamp when the transition state was last changed.
   *
   * @public
   */
  lastChangedAt?: Date | undefined;

  /**
   * The user-specified reason why the transition between two stages of a pipeline was disabled.
   *
   * @public
   */
  disabledReason?: string | undefined;
}

/**
 * The details of a specific automatic retry on stage failure, including the attempt number and trigger.
 *
 * @public
 */
export interface RetryStageMetadata {
  /**
   * The number of attempts for a specific stage with automatic retry on stage failure. One attempt is allowed for automatic stage retry on failure.
   *
   * @public
   */
  autoStageRetryAttempt?: number | undefined;

  /**
   * The number of attempts for a specific stage where manual retries have been made upon stage failure.
   *
   * @public
   */
  manualStageRetryAttempt?: number | undefined;

  /**
   * The latest trigger for a specific stage where manual or automatic retries have been made upon stage failure.
   *
   * @public
   */
  latestRetryTrigger?: RetryTrigger | undefined;
}

/**
 * Represents information about the state of the stage.
 *
 * @public
 */
export interface StageState {
  /**
   * The name of the stage.
   *
   * @public
   */
  stageName?: string | undefined;

  /**
   * Represents information about the run of a stage.
   *
   * @public
   */
  inboundExecution?: StageExecution | undefined;

  /**
   * The inbound executions for a stage.
   *
   * @public
   */
  inboundExecutions?: StageExecution[] | undefined;

  /**
   * The state of the inbound transition, which is either enabled or disabled.
   *
   * @public
   */
  inboundTransitionState?: TransitionState | undefined;

  /**
   * The state of the stage.
   *
   * @public
   */
  actionStates?: ActionState[] | undefined;

  /**
   * Information about the latest execution in the stage, including its ID and status.
   *
   * @public
   */
  latestExecution?: StageExecution | undefined;

  /**
   * The state of the entry conditions for a stage.
   *
   * @public
   */
  beforeEntryConditionState?: StageConditionState | undefined;

  /**
   * The state of the success conditions for a stage.
   *
   * @public
   */
  onSuccessConditionState?: StageConditionState | undefined;

  /**
   * The state of the failure conditions for a stage.
   *
   * @public
   */
  onFailureConditionState?: StageConditionState | undefined;

  /**
   * he details of a specific automatic retry on stage failure, including the attempt number and trigger.
   *
   * @public
   */
  retryStageMetadata?: RetryStageMetadata | undefined;
}

/**
 * Represents the output of a `GetPipelineState` action.
 *
 * @public
 */
export interface GetPipelineStateOutput {
  /**
   * The name of the pipeline for which you want to get the state.
   *
   * @public
   */
  pipelineName?: string | undefined;

  /**
   * The version number of the pipeline.
   *
   * > **Note:** A newly created pipeline is always assigned a version number of `1`.
   *
   * @public
   */
  pipelineVersion?: number | undefined;

  /**
   * A list of the pipeline stage output information, including stage name, state, most recent run details, whether the stage is disabled, and other data.
   *
   * @public
   */
  stageStates?: StageState[] | undefined;

  /**
   * The date and time the pipeline was created, in timestamp format.
   *
   * @public
   */
  created?: Date | undefined;

  /**
   * The date and time the pipeline was last updated, in timestamp format.
   *
   * @public
   */
  updated?: Date | undefined;
}

/**
 * Represents the input of a `GetThirdPartyJobDetails` action.
 *
 * @public
 */
export interface GetThirdPartyJobDetailsInput {
  /**
   * The unique system-generated ID used for identifying the job.
   *
   * @public
   */
  jobId: string | undefined;

  /**
   * The clientToken portion of the clientId and clientToken pair used to verify that the calling entity is allowed access to the job and its details.
   *
   * @public
   */
  clientToken: string | undefined;
}

/**
 * Represents information about the job data for a partner action.
 *
 * @public
 */
export interface ThirdPartyJobData {
  /**
   * Represents information about an action type.
   *
   * @public
   */
  actionTypeId?: ActionTypeId | undefined;

  /**
   * Represents information about an action configuration.
   *
   * @public
   */
  actionConfiguration?: ActionConfiguration | undefined;

  /**
   * Represents information about a pipeline to a job worker.
   *
   * > **Note:** Does not include `pipelineArn` and `pipelineExecutionId` for ThirdParty jobs.
   *
   * @public
   */
  pipelineContext?: PipelineContext | undefined;

  /**
   * The name of the artifact that is worked on by the action, if any. This name might be system-generated, such as "MyApp", or it might be defined by the user when the action is created. The input artifact name must match the name of an output artifact generated by an action in an earlier action or stage of the pipeline.
   *
   * @public
   */
  inputArtifacts?: Artifact[] | undefined;

  /**
   * The name of the artifact that is the result of the action, if any. This name might be system-generated, such as "MyBuiltApp", or it might be defined by the user when the action is created.
   *
   * @public
   */
  outputArtifacts?: Artifact[] | undefined;

  /**
   * Represents an Amazon Web Services session credentials object. These credentials are temporary credentials that are issued by Amazon Web Services Secure Token Service (STS). They can be used to access input and output artifacts in the S3 bucket used to store artifact for the pipeline in CodePipeline.
   *
   * @public
   */
  artifactCredentials?: AWSSessionCredentials | undefined;

  /**
   * A system-generated token, such as a CodeDeploy deployment ID, that a job requires to continue the job asynchronously.
   *
   * @public
   */
  continuationToken?: string | undefined;

  /**
   * The encryption key used to encrypt and decrypt data in the artifact store for the pipeline, such as an Amazon Web Services Key Management Service (Amazon Web Services KMS) key. This is optional and might not be present.
   *
   * @public
   */
  encryptionKey?: EncryptionKey | undefined;
}

/**
 * The details of a job sent in response to a `GetThirdPartyJobDetails` request.
 *
 * @public
 */
export interface ThirdPartyJobDetails {
  /**
   * The identifier used to identify the job details in CodePipeline.
   *
   * @public
   */
  id?: string | undefined;

  /**
   * The data to be returned by the third party job worker.
   *
   * @public
   */
  data?: ThirdPartyJobData | undefined;

  /**
   * A system-generated random number that CodePipeline uses to ensure that the job is being worked on by only one job worker. Use this number in an AcknowledgeThirdPartyJob request.
   *
   * @public
   */
  nonce?: string | undefined;
}

/**
 * Represents the output of a `GetThirdPartyJobDetails` action.
 *
 * @public
 */
export interface GetThirdPartyJobDetailsOutput {
  /**
   * The details of the job, including any protected values defined for the job.
   *
   * @public
   */
  jobDetails?: ThirdPartyJobDetails | undefined;
}

/**
 * @public
 */
export interface ListActionExecutionsInput {
  /**
   * The name of the pipeline for which you want to list action execution history.
   *
   * @public
   */
  pipelineName: string | undefined;

  /**
   * Input information used to filter action execution history.
   *
   * @public
   */
  filter?: ActionExecutionFilter | undefined;

  /**
   * The maximum number of results to return in a single call. To retrieve the remaining results, make another call with the returned nextToken value. Action execution history is retained for up to 12 months, based on action execution start times. Default value is 100.
   *
   * @public
   */
  maxResults?: number | undefined;

  /**
   * The token that was returned from the previous `ListActionExecutions` call, which can be used to return the next set of action executions in the list.
   *
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListActionExecutionsOutput {
  /**
   * The details for a list of recent executions, such as action execution ID.
   *
   * @public
   */
  actionExecutionDetails?: ActionExecutionDetail[] | undefined;

  /**
   * If the amount of returned information is significantly large, an identifier is also returned and can be used in a subsequent `ListActionExecutions` call to return the next set of action executions in the list.
   *
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * Represents the input of a `ListActionTypes` action.
 *
 * @public
 */
export interface ListActionTypesInput {
  /**
   * Filters the list of action types to those created by a specified entity.
   *
   * @public
   */
  actionOwnerFilter?: ActionOwner | undefined;

  /**
   * An identifier that was returned from the previous list action types call, which can be used to return the next set of action types in the list.
   *
   * @public
   */
  nextToken?: string | undefined;

  /**
   * The Region to filter on for the list of action types.
   *
   * @public
   */
  regionFilter?: string | undefined;
}

/**
 * Represents the output of a `ListActionTypes` action.
 *
 * @public
 */
export interface ListActionTypesOutput {
  /**
   * Provides details of the action types.
   *
   * @public
   */
  actionTypes: ActionType[] | undefined;

  /**
   * If the amount of returned information is significantly large, an identifier is also returned. It can be used in a subsequent list action types call to return the next set of action types in the list.
   *
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * Filters the list of targets.
 *
 * @public
 */
export interface TargetFilter {
  /**
   * The name on which to filter.
   *
   * @public
   */
  name?: TargetFilterName | undefined;

  /**
   * The values on which to filter.
   *
   * @public
   */
  values?: string[] | undefined;
}

/**
 * @public
 */
export interface ListDeployActionExecutionTargetsInput {
  /**
   * The name of the pipeline with the deploy action.
   *
   * @public
   */
  pipelineName?: string | undefined;

  /**
   * The execution ID for the deploy action.
   *
   * @public
   */
  actionExecutionId: string | undefined;

  /**
   * Filters the targets for a specified deploy action.
   *
   * @public
   */
  filters?: TargetFilter[] | undefined;

  /**
   * The maximum number of results to return in a single call. To retrieve the remaining results, make another call with the returned nextToken value.
   *
   * @public
   */
  maxResults?: number | undefined;

  /**
   * An identifier that was returned from the previous list action types call, which can be used to return the next set of action types in the list.
   *
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * The context for the event for the deploy action.
 *
 * @public
 */
export interface DeployTargetEventContext {
  /**
   * The command ID for the event for the deploy action.
   *
   * @public
   */
  ssmCommandId?: string | undefined;

  /**
   * The context message for the event for the deploy action.
   *
   * @public
   */
  message?: string | undefined;
}

/**
 * A lifecycle event for the deploy action.
 *
 * @public
 */
export interface DeployTargetEvent {
  /**
   * The name of the event for the deploy action.
   *
   * @public
   */
  name?: string | undefined;

  /**
   * The status of the event for the deploy action.
   *
   * @public
   */
  status?: string | undefined;

  /**
   * The start time for the event for the deploy action.
   *
   * @public
   */
  startTime?: Date | undefined;

  /**
   * The end time for the event for the deploy action.
   *
   * @public
   */
  endTime?: Date | undefined;

  /**
   * The context for the event for the deploy action.
   *
   * @public
   */
  context?: DeployTargetEventContext | undefined;
}

/**
 * The target for the deploy action.
 *
 * @public
 */
export interface DeployActionExecutionTarget {
  /**
   * The ID of the target for the deploy action.
   *
   * @public
   */
  targetId?: string | undefined;

  /**
   * The type of target for the deploy action.
   *
   * @public
   */
  targetType?: string | undefined;

  /**
   * The status of the deploy action.
   *
   * @public
   */
  status?: string | undefined;

  /**
   * The start time for the deploy action.
   *
   * @public
   */
  startTime?: Date | undefined;

  /**
   * The end time for the deploy action.
   *
   * @public
   */
  endTime?: Date | undefined;

  /**
   * The lifecycle events for the deploy action.
   *
   * @public
   */
  events?: DeployTargetEvent[] | undefined;
}

/**
 * @public
 */
export interface ListDeployActionExecutionTargetsOutput {
  /**
   * The targets for the deploy action.
   *
   * @public
   */
  targets?: DeployActionExecutionTarget[] | undefined;

  /**
   * An identifier that was returned from the previous list action types call, which can be used to return the next set of action types in the list.
   *
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * Filter for pipeline executions that have successfully completed the stage in the current pipeline version.
 *
 * @public
 */
export interface SucceededInStageFilter {
  /**
   * The name of the stage for filtering for pipeline executions where the stage was successful in the current pipeline version.
   *
   * @public
   */
  stageName?: string | undefined;
}

/**
 * The pipeline execution to filter on.
 *
 * @public
 */
export interface PipelineExecutionFilter {
  /**
   * Filter for pipeline executions where the stage was successful in the current pipeline version.
   *
   * @public
   */
  succeededInStage?: SucceededInStageFilter | undefined;
}

/**
 * Represents the input of a `ListPipelineExecutions` action.
 *
 * @public
 */
export interface ListPipelineExecutionsInput {
  /**
   * The name of the pipeline for which you want to get execution summary information.
   *
   * @public
   */
  pipelineName: string | undefined;

  /**
   * The maximum number of results to return in a single call. To retrieve the remaining results, make another call with the returned nextToken value. Pipeline history is limited to the most recent 12 months, based on pipeline execution start times. Default value is 100.
   *
   * @public
   */
  maxResults?: number | undefined;

  /**
   * The pipeline execution to filter on.
   *
   * @public
   */
  filter?: PipelineExecutionFilter | undefined;

  /**
   * The token that was returned from the previous `ListPipelineExecutions` call, which can be used to return the next set of pipeline executions in the list.
   *
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * Information about the version (or revision) of a source artifact that initiated a pipeline execution.
 *
 * @public
 */
export interface SourceRevision {
  /**
   * The name of the action that processed the revision to the source artifact.
   *
   * @public
   */
  actionName: string | undefined;

  /**
   * The system-generated unique ID that identifies the revision number of the artifact.
   *
   * @public
   */
  revisionId?: string | undefined;

  /**
   * Summary information about the most recent revision of the artifact. For GitHub and CodeCommit repositories, the commit message. For Amazon S3 buckets or actions, the user-provided content of a `codepipeline-artifact-revision-summary` key specified in the object metadata.
   *
   * @public
   */
  revisionSummary?: string | undefined;

  /**
   * The commit ID for the artifact revision. For artifacts stored in GitHub or CodeCommit repositories, the commit ID is linked to a commit details page.
   *
   * @public
   */
  revisionUrl?: string | undefined;
}

/**
 * The interaction that stopped a pipeline execution.
 *
 * @public
 */
export interface StopExecutionTrigger {
  /**
   * The user-specified reason the pipeline was stopped.
   *
   * @public
   */
  reason?: string | undefined;
}

/**
 * Summary information about a pipeline execution.
 *
 * @public
 */
export interface PipelineExecutionSummary {
  /**
   * The ID of the pipeline execution.
   *
   * @public
   */
  pipelineExecutionId?: string | undefined;

  /**
   * The status of the pipeline execution.
   *
   * - InProgress: The pipeline execution is currently running.
   * - Stopped: The pipeline execution was manually stopped. For more information, see [Stopped Executions](https://docs.aws.amazon.com/codepipeline/latest/userguide/concepts.html#concepts-executions-stopped).
   * - Stopping: The pipeline execution received a request to be manually stopped. Depending on the selected stop mode, the execution is either completing or abandoning in-progress actions. For more information, see [Stopped Executions](https://docs.aws.amazon.com/codepipeline/latest/userguide/concepts.html#concepts-executions-stopped).
   * - Succeeded: The pipeline execution was completed successfully.
   * - Superseded: While this pipeline execution was waiting for the next stage to be completed, a newer pipeline execution advanced and continued through the pipeline instead. For more information, see [Superseded Executions](https://docs.aws.amazon.com/codepipeline/latest/userguide/concepts.html#concepts-superseded).
   * - Failed: The pipeline execution was not completed successfully.
   *
   * @public
   */
  status?: PipelineExecutionStatus | undefined;

  /**
   * Status summary for the pipeline.
   *
   * @public
   */
  statusSummary?: string | undefined;

  /**
   * The date and time when the pipeline execution began, in timestamp format.
   *
   * @public
   */
  startTime?: Date | undefined;

  /**
   * The date and time of the last change to the pipeline execution, in timestamp format.
   *
   * @public
   */
  lastUpdateTime?: Date | undefined;

  /**
   * A list of the source artifact revisions that initiated a pipeline execution.
   *
   * @public
   */
  sourceRevisions?: SourceRevision[] | undefined;

  /**
   * The interaction or event that started a pipeline execution, such as automated change detection or a `StartPipelineExecution` API call.
   *
   * @public
   */
  trigger?: ExecutionTrigger | undefined;

  /**
   * The interaction that stopped a pipeline execution.
   *
   * @public
   */
  stopTrigger?: StopExecutionTrigger | undefined;

  /**
   * The method that the pipeline will use to handle multiple executions. The default mode is SUPERSEDED.
   *
   * @public
   */
  executionMode?: ExecutionMode | undefined;

  /**
   * Type of the pipeline execution.
   *
   * @public
   */
  executionType?: ExecutionType | undefined;

  /**
   * The metadata for the stage execution to be rolled back.
   *
   * @public
   */
  rollbackMetadata?: PipelineRollbackMetadata | undefined;
}

/**
 * Represents the output of a `ListPipelineExecutions` action.
 *
 * @public
 */
export interface ListPipelineExecutionsOutput {
  /**
   * A list of executions in the history of a pipeline.
   *
   * @public
   */
  pipelineExecutionSummaries?: PipelineExecutionSummary[] | undefined;

  /**
   * A token that can be used in the next `ListPipelineExecutions` call. To view all items in the list, continue to call this operation with each subsequent token until no more nextToken values are returned.
   *
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * Represents the input of a `ListPipelines` action.
 *
 * @public
 */
export interface ListPipelinesInput {
  /**
   * An identifier that was returned from the previous list pipelines call. It can be used to return the next set of pipelines in the list.
   *
   * @public
   */
  nextToken?: string | undefined;

  /**
   * The maximum number of pipelines to return in a single call. To retrieve the remaining pipelines, make another call with the returned nextToken value. The minimum value you can specify is 1. The maximum accepted value is 1000.
   *
   * @public
   */
  maxResults?: number | undefined;
}

/**
 * Returns a summary of a pipeline.
 *
 * @public
 */
export interface PipelineSummary {
  /**
   * The name of the pipeline.
   *
   * @public
   */
  name?: string | undefined;

  /**
   * The version number of the pipeline.
   *
   * @public
   */
  version?: number | undefined;

  /**
   * CodePipeline provides the following pipeline types, which differ in characteristics and price, so that you can tailor your pipeline features and cost to the needs of your applications.
   *
   * - V1 type pipelines have a JSON structure that contains standard pipeline, stage, and action-level parameters.
   * - V2 type pipelines have the same structure as a V1 type, along with additional parameters for release safety and trigger configuration.
   *
   * > **Important:** Including V2 parameters, such as triggers on Git tags, in the pipeline JSON when creating or updating a pipeline will result in the pipeline having the V2 type of pipeline and the associated costs.
   *
   * For information about pricing for CodePipeline, see [Pricing](http://aws.amazon.com/codepipeline/pricing/).
   *
   * For information about which type of pipeline to choose, see [What type of pipeline is right for me?](https://docs.aws.amazon.com/codepipeline/latest/userguide/pipeline-types-planning.html).
   *
   * @public
   */
  pipelineType?: PipelineType | undefined;

  /**
   * The method that the pipeline will use to handle multiple executions. The default mode is SUPERSEDED.
   *
   * @public
   */
  executionMode?: ExecutionMode | undefined;

  /**
   * The date and time the pipeline was created, in timestamp format.
   *
   * @public
   */
  created?: Date | undefined;

  /**
   * The date and time of the last update to the pipeline, in timestamp format.
   *
   * @public
   */
  updated?: Date | undefined;
}

/**
 * Represents the output of a `ListPipelines` action.
 *
 * @public
 */
export interface ListPipelinesOutput {
  /**
   * The list of pipelines.
   *
   * @public
   */
  pipelines?: PipelineSummary[] | undefined;

  /**
   * If the amount of returned information is significantly large, an identifier is also returned. It can be used in a subsequent list pipelines call to return the next set of pipelines in the list.
   *
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * Filter values for the rule execution.
 *
 * @public
 */
export interface RuleExecutionFilter {
  /**
   * The pipeline execution ID used to filter rule execution history.
   *
   * @public
   */
  pipelineExecutionId?: string | undefined;

  /**
   * The field that specifies to filter on the latest execution in the pipeline.
   *
   * > **Note:** Filtering on the latest execution is available for executions run on or after February 08, 2024.
   *
   * @public
   */
  latestInPipelineExecution?: LatestInPipelineExecutionFilter | undefined;
}

/**
 * @public
 */
export interface ListRuleExecutionsInput {
  /**
   * The name of the pipeline for which you want to get execution summary information.
   *
   * @public
   */
  pipelineName: string | undefined;

  /**
   * Input information used to filter rule execution history.
   *
   * @public
   */
  filter?: RuleExecutionFilter | undefined;

  /**
   * The maximum number of results to return in a single call. To retrieve the remaining results, make another call with the returned nextToken value. Pipeline history is limited to the most recent 12 months, based on pipeline execution start times. Default value is 100.
   *
   * @public
   */
  maxResults?: number | undefined;

  /**
   * The token that was returned from the previous `ListRuleExecutions` call, which can be used to return the next set of rule executions in the list.
   *
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * Input information used for a rule execution.
 *
 * @public
 */
export interface RuleExecutionInput {
  /**
   * The ID for the rule type, which is made up of the combined values for category, owner, provider, and version. For more information about conditions, see [Stage conditions](https://docs.aws.amazon.com/codepipeline/latest/userguide/stage-conditions.html). For more information about rules, see the [CodePipeline rule reference](https://docs.aws.amazon.com/codepipeline/latest/userguide/rule-reference.html).
   *
   * @public
   */
  ruleTypeId?: RuleTypeId | undefined;

  /**
   * Configuration data for a rule execution, such as the resolved values for that run.
   *
   * @public
   */
  configuration?: Record<string, string> | undefined;

  /**
   * Configuration data for a rule execution with all variable references replaced with their real values for the execution.
   *
   * @public
   */
  resolvedConfiguration?: Record<string, string> | undefined;

  /**
   * The ARN of the IAM service role that performs the declared rule. This is assumed through the roleArn for the pipeline.
   *
   * @public
   */
  roleArn?: string | undefined;

  /**
   * The Amazon Web Services Region for the rule, such as us-east-1.
   *
   * @public
   */
  region?: string | undefined;

  /**
   * Details of input artifacts of the rule that correspond to the rule execution.
   *
   * @public
   */
  inputArtifacts?: ArtifactDetail[] | undefined;
}

/**
 * Execution result information, such as the external execution ID.
 *
 * @public
 */
export interface RuleExecutionResult {
  /**
   * The external ID for the rule execution.
   *
   * @public
   */
  externalExecutionId?: string | undefined;

  /**
   * The external provider summary for the rule execution.
   *
   * @public
   */
  externalExecutionSummary?: string | undefined;

  /**
   * The deepest external link to the external resource (for example, a repository URL or deployment endpoint) that is used when running the rule.
   *
   * @public
   */
  externalExecutionUrl?: string | undefined;

  /**
   * Represents information about an error in CodePipeline.
   *
   * @public
   */
  errorDetails?: ErrorDetails | undefined;
}

/**
 * Output details listed for a rule execution, such as the rule execution result.
 *
 * @public
 */
export interface RuleExecutionOutput {
  /**
   * Execution result information listed in the output details for a rule execution.
   *
   * @public
   */
  executionResult?: RuleExecutionResult | undefined;
}

/**
 * The details of the runs for a rule and the results produced on an artifact as it passes through stages in the pipeline.
 *
 * @public
 */
export interface RuleExecutionDetail {
  /**
   * The ID of the pipeline execution in the stage where the rule was run. Use the GetPipelineState action to retrieve the current pipelineExecutionId of the stage.
   *
   * @public
   */
  pipelineExecutionId?: string | undefined;

  /**
   * The ID of the run for the rule.
   *
   * @public
   */
  ruleExecutionId?: string | undefined;

  /**
   * The version number of the pipeline with the stage where the rule was run.
   *
   * @public
   */
  pipelineVersion?: number | undefined;

  /**
   * The name of the stage where the rule was run.
   *
   * @public
   */
  stageName?: string | undefined;

  /**
   * The name of the rule that was run in the stage.
   *
   * @public
   */
  ruleName?: string | undefined;

  /**
   * The start time of the rule execution.
   *
   * @public
   */
  startTime?: Date | undefined;

  /**
   * The date and time of the last change to the rule execution, in timestamp format.
   *
   * @public
   */
  lastUpdateTime?: Date | undefined;

  /**
   * The ARN of the user who changed the rule execution details.
   *
   * @public
   */
  updatedBy?: string | undefined;

  /**
   * The status of the rule execution. Status categories are `InProgress`, `Succeeded`, and `Failed`.
   *
   * @public
   */
  status?: RuleExecutionStatus | undefined;

  /**
   * Input details for the rule execution, such as role ARN, Region, and input artifacts.
   *
   * @public
   */
  input?: RuleExecutionInput | undefined;

  /**
   * Output details for the rule execution, such as the rule execution result.
   *
   * @public
   */
  output?: RuleExecutionOutput | undefined;
}

/**
 * @public
 */
export interface ListRuleExecutionsOutput {
  /**
   * Details about the output for listing rule executions.
   *
   * @public
   */
  ruleExecutionDetails?: RuleExecutionDetail[] | undefined;

  /**
   * A token that can be used in the next `ListRuleExecutions` call. To view all items in the list, continue to call this operation with each subsequent token until no more nextToken values are returned.
   *
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListRuleTypesInput {
  /**
   * The rule owner to filter on.
   *
   * @public
   */
  ruleOwnerFilter?: RuleOwner | undefined;

  /**
   * The rule Region to filter on.
   *
   * @public
   */
  regionFilter?: string | undefined;
}

/**
 * Represents information about a rule configuration property.
 *
 * @public
 */
export interface RuleConfigurationProperty {
  /**
   * The name of the rule configuration property.
   *
   * @public
   */
  name: string | undefined;

  /**
   * Whether the configuration property is a required value.
   *
   * @public
   */
  required: boolean | undefined;

  /**
   * Whether the configuration property is a key.
   *
   * @public
   */
  key: boolean | undefined;

  /**
   * Whether the configuration property is secret.
   *
   * When updating a pipeline, passing * * * * * without changing any other values of the action preserves the previous value of the secret.
   *
   * @public
   */
  secret: boolean | undefined;

  /**
   * Indicates whether the property can be queried.
   *
   * If you create a pipeline with a condition and rule, and that rule contains a queryable property, the value for that configuration property is subject to other restrictions. The value must be less than or equal to twenty (20) characters. The value can contain only alphanumeric characters, underscores, and hyphens.
   *
   * @public
   */
  queryable?: boolean | undefined;

  /**
   * The description of the action configuration property that is displayed to users.
   *
   * @public
   */
  description?: string | undefined;

  /**
   * The type of the configuration property.
   *
   * @public
   */
  type?: RuleConfigurationPropertyType | undefined;
}

/**
 * Returns information about the settings for a rule type.
 *
 * @public
 */
export interface RuleTypeSettings {
  /**
   * The URL of a sign-up page where users can sign up for an external service and perform initial configuration of the action provided by that service.
   *
   * @public
   */
  thirdPartyConfigurationUrl?: string | undefined;

  /**
   * The URL returned to the CodePipeline console that provides a deep link to the resources of the external system, such as the configuration page for a CodeDeploy deployment group. This link is provided as part of the action display in the pipeline.
   *
   * @public
   */
  entityUrlTemplate?: string | undefined;

  /**
   * The URL returned to the CodePipeline console that contains a link to the top-level landing page for the external system, such as the console page for CodeDeploy. This link is shown on the pipeline view page in the CodePipeline console and provides a link to the execution entity of the external action.
   *
   * @public
   */
  executionUrlTemplate?: string | undefined;

  /**
   * The URL returned to the CodePipeline console that contains a link to the page where customers can update or change the configuration of the external action.
   *
   * @public
   */
  revisionUrlTemplate?: string | undefined;
}

/**
 * The rule type, which is made up of the combined values for category, owner, provider, and version.
 *
 * @public
 */
export interface RuleType {
  /**
   * Represents information about a rule type.
   *
   * @public
   */
  id: RuleTypeId | undefined;

  /**
   * Returns information about the settings for a rule type.
   *
   * @public
   */
  settings?: RuleTypeSettings | undefined;

  /**
   * The configuration properties for the rule type.
   *
   * @public
   */
  ruleConfigurationProperties?: RuleConfigurationProperty[] | undefined;

  /**
   * Returns information about the details of an artifact.
   *
   * @public
   */
  inputArtifactDetails: ArtifactDetails | undefined;
}

/**
 * @public
 */
export interface ListRuleTypesOutput {
  /**
   * Lists the rules that are configured for the condition.
   *
   * @public
   */
  ruleTypes: RuleType[] | undefined;
}

/**
 * @public
 */
export interface ListTagsForResourceInput {
  /**
   * The Amazon Resource Name (ARN) of the resource to get tags for.
   *
   * @public
   */
  resourceArn: string | undefined;

  /**
   * The token that was returned from the previous API call, which would be used to return the next page of the list. The ListTagsforResource call lists all available tags in one call and does not use pagination.
   *
   * @public
   */
  nextToken?: string | undefined;

  /**
   * The maximum number of results to return in a single call.
   *
   * @public
   */
  maxResults?: number | undefined;
}

/**
 * @public
 */
export interface ListTagsForResourceOutput {
  /**
   * The tags for the resource.
   *
   * @public
   */
  tags?: Tag[] | undefined;

  /**
   * If the amount of returned information is significantly large, an identifier is also returned and can be used in a subsequent API call to return the next page of the list. The ListTagsforResource call lists all available tags in one call and does not use pagination.
   *
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListWebhooksInput {
  /**
   * The token that was returned from the previous ListWebhooks call, which can be used to return the next set of webhooks in the list.
   *
   * @public
   */
  NextToken?: string | undefined;

  /**
   * The maximum number of results to return in a single call. To retrieve the remaining results, make another call with the returned nextToken value.
   *
   * @public
   */
  MaxResults?: number | undefined;
}

/**
 * The authentication applied to incoming webhook trigger requests.
 *
 * @public
 */
export interface WebhookAuthConfiguration {
  /**
   * The property used to configure acceptance of webhooks in an IP address range. For IP, only the `AllowedIPRange` property must be set. This property must be set to a valid CIDR range.
   *
   * @public
   */
  AllowedIPRange?: string | undefined;

  /**
   * The property used to configure GitHub authentication. For GITHUB_HMAC, only the `SecretToken` property must be set.
   *
   * > **Important:** When creating CodePipeline webhooks, do not use your own credentials or reuse the same secret token across multiple webhooks. For optimal security, generate a unique secret token for each webhook you create. The secret token is an arbitrary string that you provide, which GitHub uses to compute and sign the webhook payloads sent to CodePipeline, for protecting the integrity and authenticity of the webhook payloads. Using your own credentials or reusing the same token across multiple webhooks can lead to security vulnerabilities.
   *
   * > **Note:** If a secret token was provided, it will be redacted in the response.
   *
   * @public
   */
  SecretToken?: string | undefined;
}

/**
 * The event criteria that specify when a webhook notification is sent to your URL.
 *
 * @public
 */
export interface WebhookFilterRule {
  /**
   * A JsonPath expression that is applied to the body/payload of the webhook. The value selected by the JsonPath expression must match the value specified in the `MatchEquals` field. Otherwise, the request is ignored. For more information, see [Java JsonPath implementation](https://github.com/json-path/JsonPath) in GitHub.
   *
   * @public
   */
  jsonPath: string | undefined;

  /**
   * The value selected by the `JsonPath` expression must match what is supplied in the `MatchEquals` field. Otherwise, the request is ignored. Properties from the target action configuration can be included as placeholders in this value by surrounding the action configuration key with curly brackets. For example, if the value supplied here is "refs/heads/\{Branch\}" and the target action has an action configuration property called "Branch" with a value of "main", the `MatchEquals` value is evaluated as "refs/heads/main". For a list of action configuration properties for built-in action types, see [Pipeline Structure Reference Action Requirements](https://docs.aws.amazon.com/codepipeline/latest/userguide/reference-pipeline-structure.html#action-requirements).
   *
   * @public
   */
  matchEquals?: string | undefined;
}

/**
 * Represents information about a webhook and its definition.
 *
 * @public
 */
export interface WebhookDefinition {
  /**
   * The name of the webhook.
   *
   * @public
   */
  name: string | undefined;

  /**
   * The name of the pipeline you want to connect to the webhook.
   *
   * @public
   */
  targetPipeline: string | undefined;

  /**
   * The name of the action in a pipeline you want to connect to the webhook. The action must be from the source (first) stage of the pipeline.
   *
   * @public
   */
  targetAction: string | undefined;

  /**
   * A list of rules applied to the body/payload sent in the POST request to a webhook URL. All defined rules must pass for the request to be accepted and the pipeline started.
   *
   * @public
   */
  filters: WebhookFilterRule[] | undefined;

  /**
   * Supported options are GITHUB_HMAC, IP, and UNAUTHENTICATED.
   *
   * > **Important:** When creating CodePipeline webhooks, do not use your own credentials or reuse the same secret token across multiple webhooks. For optimal security, generate a unique secret token for each webhook you create. The secret token is an arbitrary string that you provide, which GitHub uses to compute and sign the webhook payloads sent to CodePipeline, for protecting the integrity and authenticity of the webhook payloads. Using your own credentials or reusing the same token across multiple webhooks can lead to security vulnerabilities.
   *
   * > **Note:** If a secret token was provided, it will be redacted in the response.
   *
   * - For information about the authentication scheme implemented by GITHUB_HMAC, see [Securing your webhooks](https://developer.github.com/webhooks/securing/) on the GitHub Developer website.
   * - IP rejects webhooks trigger requests unless they originate from an IP address in the IP range whitelisted in the authentication configuration.
   * - UNAUTHENTICATED accepts all webhook trigger requests regardless of origin.
   *
   * @public
   */
  authentication: WebhookAuthenticationType | undefined;

  /**
   * Properties that configure the authentication applied to incoming webhook trigger requests. The required properties depend on the authentication type. For GITHUB_HMAC, only the `SecretToken`property must be set. For IP, only the `AllowedIPRange`property must be set to a valid CIDR range. For UNAUTHENTICATED, no properties can be set.
   *
   * @public
   */
  authenticationConfiguration: WebhookAuthConfiguration | undefined;
}

/**
 * The detail returned for each webhook after listing webhooks, such as the webhook URL, the webhook name, and the webhook ARN.
 *
 * @public
 */
export interface ListWebhookItem {
  /**
   * The detail returned for each webhook, such as the webhook authentication type and filter rules.
   *
   * @public
   */
  definition: WebhookDefinition | undefined;

  /**
   * A unique URL generated by CodePipeline. When a POST request is made to this URL, the defined pipeline is started as long as the body of the post request satisfies the defined authentication and filtering conditions. Deleting and re-creating a webhook makes the old URL invalid and generates a new one.
   *
   * @public
   */
  url: string | undefined;

  /**
   * The text of the error message about the webhook.
   *
   * @public
   */
  errorMessage?: string | undefined;

  /**
   * The number code of the error.
   *
   * @public
   */
  errorCode?: string | undefined;

  /**
   * The date and time a webhook was last successfully triggered, in timestamp format.
   *
   * @public
   */
  lastTriggered?: Date | undefined;

  /**
   * The Amazon Resource Name (ARN) of the webhook.
   *
   * @public
   */
  arn?: string | undefined;

  /**
   * Specifies the tags applied to the webhook.
   *
   * @public
   */
  tags?: Tag[] | undefined;
}

/**
 * @public
 */
export interface ListWebhooksOutput {
  /**
   * The JSON detail returned for each webhook in the list output for the ListWebhooks call.
   *
   * @public
   */
  webhooks?: ListWebhookItem[] | undefined;

  /**
   * If the amount of returned information is significantly large, an identifier is also returned and can be used in a subsequent ListWebhooks call to return the next set of webhooks in the list.
   *
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface OverrideStageConditionInput {
  /**
   * The name of the pipeline with the stage that will override the condition.
   *
   * @public
   */
  pipelineName: string | undefined;

  /**
   * The name of the stage for the override.
   *
   * @public
   */
  stageName: string | undefined;

  /**
   * The ID of the pipeline execution for the override.
   *
   * @public
   */
  pipelineExecutionId: string | undefined;

  /**
   * The type of condition to override for the stage, such as entry conditions, failure conditions, or success conditions.
   *
   * @public
   */
  conditionType: ConditionType | undefined;
}

/**
 * Represents the input of a `PollForJobs` action.
 *
 * @public
 */
export interface PollForJobsInput {
  /**
   * Represents information about an action type.
   *
   * @public
   */
  actionTypeId: ActionTypeId | undefined;

  /**
   * The maximum number of jobs to return in a poll for jobs call.
   *
   * @public
   */
  maxBatchSize?: number | undefined;

  /**
   * A map of property names and values. For an action type with no queryable properties, this value must be null or an empty map. For an action type with a queryable property, you must supply that property as a key in the map. Only jobs whose action configuration matches the mapped value are returned.
   *
   * @public
   */
  queryParam?: Record<string, string> | undefined;
}

/**
 * Represents information about a job.
 *
 * @public
 */
export interface Job {
  /**
   * The unique system-generated ID of the job.
   *
   * @public
   */
  id?: string | undefined;

  /**
   * Other data about a job.
   *
   * @public
   */
  data?: JobData | undefined;

  /**
   * A system-generated random number that CodePipeline uses to ensure that the job is being worked on by only one job worker. Use this number in an AcknowledgeJob request.
   *
   * @public
   */
  nonce?: string | undefined;

  /**
   * The ID of the Amazon Web Services account to use when performing the job.
   *
   * @public
   */
  accountId?: string | undefined;
}

/**
 * Represents the output of a `PollForJobs` action.
 *
 * @public
 */
export interface PollForJobsOutput {
  /**
   * Information about the jobs to take action on.
   *
   * @public
   */
  jobs?: Job[] | undefined;
}

/**
 * Represents the input of a `PollForThirdPartyJobs` action.
 *
 * @public
 */
export interface PollForThirdPartyJobsInput {
  /**
   * Represents information about an action type.
   *
   * @public
   */
  actionTypeId: ActionTypeId | undefined;

  /**
   * The maximum number of jobs to return in a poll for jobs call.
   *
   * @public
   */
  maxBatchSize?: number | undefined;
}

/**
 * A response to a `PollForThirdPartyJobs` request returned by CodePipeline when there is a job to be worked on by a partner action.
 *
 * @public
 */
export interface ThirdPartyJob {
  /**
   * The `clientToken` portion of the `clientId` and `clientToken` pair used to verify that the calling entity is allowed access to the job and its details.
   *
   * @public
   */
  clientId?: string | undefined;

  /**
   * The identifier used to identify the job in CodePipeline.
   *
   * @public
   */
  jobId?: string | undefined;
}

/**
 * Represents the output of a `PollForThirdPartyJobs` action.
 *
 * @public
 */
export interface PollForThirdPartyJobsOutput {
  /**
   * Information about the jobs to take action on.
   *
   * @public
   */
  jobs?: ThirdPartyJob[] | undefined;
}

/**
 * Represents the input of a `PutActionRevision` action.
 *
 * @public
 */
export interface PutActionRevisionInput {
  /**
   * The name of the pipeline that starts processing the revision to the source.
   *
   * @public
   */
  pipelineName: string | undefined;

  /**
   * The name of the stage that contains the action that acts on the revision.
   *
   * @public
   */
  stageName: string | undefined;

  /**
   * The name of the action that processes the revision.
   *
   * @public
   */
  actionName: string | undefined;

  /**
   * Represents information about the version (or revision) of an action.
   *
   * @public
   */
  actionRevision: ActionRevision | undefined;
}

/**
 * Represents the output of a `PutActionRevision` action.
 *
 * @public
 */
export interface PutActionRevisionOutput {
  /**
   * Indicates whether the artifact revision was previously used in an execution of the specified pipeline.
   *
   * @public
   */
  newRevision?: boolean | undefined;

  /**
   * The ID of the current workflow state of the pipeline.
   *
   * @public
   */
  pipelineExecutionId?: string | undefined;
}

/**
 * Represents the input of a `PutApprovalResult` action.
 *
 * @public
 */
export interface PutApprovalResultInput {
  /**
   * The name of the pipeline that contains the action.
   *
   * @public
   */
  pipelineName: string | undefined;

  /**
   * The name of the stage that contains the action.
   *
   * @public
   */
  stageName: string | undefined;

  /**
   * The name of the action for which approval is requested.
   *
   * @public
   */
  actionName: string | undefined;

  /**
   * Represents information about the result of the approval request.
   *
   * @public
   */
  result: ApprovalResult | undefined;

  /**
   * The system-generated token used to identify a unique approval request. The token for each open approval request can be obtained using the GetPipelineState action. It is used to validate that the approval request corresponding to this token is still valid.
   *
   * > **Important:** For a pipeline where the execution mode is set to PARALLEL, the token required to approve/reject an approval request as detailed above is not available. Instead, use the `externalExecutionId` in the response output from the ListActionExecutions action as the token in the approval request.
   *
   * @public
   */
  token: string | undefined;
}

/**
 * Represents the output of a `PutApprovalResult` action.
 *
 * @public
 */
export interface PutApprovalResultOutput {
  /**
   * The timestamp showing when the approval or rejection was submitted.
   *
   * @public
   */
  approvedAt?: Date | undefined;
}

/**
 * Represents information about failure details.
 *
 * @public
 */
export interface FailureDetails {
  /**
   * The type of the failure.
   *
   * @public
   */
  type: FailureType | undefined;

  /**
   * The message about the failure.
   *
   * @public
   */
  message: string | undefined;

  /**
   * The external ID of the run of the action that failed.
   *
   * @public
   */
  externalExecutionId?: string | undefined;
}

/**
 * Represents the input of a `PutJobFailureResult` action.
 *
 * @public
 */
export interface PutJobFailureResultInput {
  /**
   * The unique system-generated ID of the job that failed. This is the same ID returned from `PollForJobs`.
   *
   * @public
   */
  jobId: string | undefined;

  /**
   * The details about the failure of a job.
   *
   * @public
   */
  failureDetails: FailureDetails | undefined;
}

/**
 * Represents information about a current revision.
 *
 * @public
 */
export interface CurrentRevision {
  /**
   * The revision ID of the current version of an artifact.
   *
   * @public
   */
  revision: string | undefined;

  /**
   * The change identifier for the current revision.
   *
   * @public
   */
  changeIdentifier: string | undefined;

  /**
   * The date and time when the most recent revision of the artifact was created, in timestamp format.
   *
   * @public
   */
  created?: Date | undefined;

  /**
   * The summary of the most recent revision of the artifact.
   *
   * @public
   */
  revisionSummary?: string | undefined;
}

/**
 * The details of the actions taken and results produced on an artifact as it passes through stages in the pipeline.
 *
 * @public
 */
export interface ExecutionDetails {
  /**
   * The summary of the current status of the actions.
   *
   * @public
   */
  summary?: string | undefined;

  /**
   * The system-generated unique ID of this action used to identify this job worker in any external systems, such as CodeDeploy.
   *
   * @public
   */
  externalExecutionId?: string | undefined;

  /**
   * The percentage of work completed on the action, represented on a scale of 0 to 100 percent.
   *
   * @public
   */
  percentComplete?: number | undefined;
}

/**
 * Represents the input of a `PutJobSuccessResult` action.
 *
 * @public
 */
export interface PutJobSuccessResultInput {
  /**
   * The unique system-generated ID of the job that succeeded. This is the same ID returned from `PollForJobs`.
   *
   * @public
   */
  jobId: string | undefined;

  /**
   * The ID of the current revision of the artifact successfully worked on by the job.
   *
   * @public
   */
  currentRevision?: CurrentRevision | undefined;

  /**
   * A token generated by a job worker, such as a CodeDeploy deployment ID, that a successful job provides to identify a custom action in progress. Future jobs use this token to identify the running instance of the action. It can be reused to return more information about the progress of the custom action. When the action is complete, no continuation token should be supplied.
   *
   * @public
   */
  continuationToken?: string | undefined;

  /**
   * The execution details of the successful job, such as the actions taken by the job worker.
   *
   * @public
   */
  executionDetails?: ExecutionDetails | undefined;

  /**
   * Key-value pairs produced as output by a job worker that can be made available to a downstream action configuration. `outputVariables` can be included only when there is no continuation token on the request.
   *
   * @public
   */
  outputVariables?: Record<string, string> | undefined;
}

/**
 * Represents the input of a `PutThirdPartyJobFailureResult` action.
 *
 * @public
 */
export interface PutThirdPartyJobFailureResultInput {
  /**
   * The ID of the job that failed. This is the same ID returned from `PollForThirdPartyJobs`.
   *
   * @public
   */
  jobId: string | undefined;

  /**
   * The clientToken portion of the clientId and clientToken pair used to verify that the calling entity is allowed access to the job and its details.
   *
   * @public
   */
  clientToken: string | undefined;

  /**
   * Represents information about failure details.
   *
   * @public
   */
  failureDetails: FailureDetails | undefined;
}

/**
 * Represents the input of a `PutThirdPartyJobSuccessResult` action.
 *
 * @public
 */
export interface PutThirdPartyJobSuccessResultInput {
  /**
   * The ID of the job that successfully completed. This is the same ID returned from `PollForThirdPartyJobs`.
   *
   * @public
   */
  jobId: string | undefined;

  /**
   * The clientToken portion of the clientId and clientToken pair used to verify that the calling entity is allowed access to the job and its details.
   *
   * @public
   */
  clientToken: string | undefined;

  /**
   * Represents information about a current revision.
   *
   * @public
   */
  currentRevision?: CurrentRevision | undefined;

  /**
   * A token generated by a job worker, such as a CodeDeploy deployment ID, that a successful job provides to identify a partner action in progress. Future jobs use this token to identify the running instance of the action. It can be reused to return more information about the progress of the partner action. When the action is complete, no continuation token should be supplied.
   *
   * @public
   */
  continuationToken?: string | undefined;

  /**
   * The details of the actions taken and results produced on an artifact as it passes through stages in the pipeline.
   *
   * @public
   */
  executionDetails?: ExecutionDetails | undefined;
}

/**
 * @public
 */
export interface PutWebhookInput {
  /**
   * The detail provided in an input file to create the webhook, such as the webhook name, the pipeline name, and the action name. Give the webhook a unique name that helps you identify it. You might name the webhook after the pipeline and action it targets so that you can easily recognize what it's used for later.
   *
   * @public
   */
  webhook: WebhookDefinition | undefined;

  /**
   * The tags for the webhook.
   *
   * @public
   */
  tags?: Tag[] | undefined;
}

/**
 * @public
 */
export interface PutWebhookOutput {
  /**
   * The detail returned from creating the webhook, such as the webhook name, webhook URL, and webhook ARN.
   *
   * @public
   */
  webhook?: ListWebhookItem | undefined;
}

/**
 * @public
 */
export interface RegisterWebhookWithThirdPartyInput {
  /**
   * The name of an existing webhook created with PutWebhook to register with a supported third party.
   *
   * @public
   */
  webhookName?: string | undefined;
}

/**
 * @public
 */
export interface RegisterWebhookWithThirdPartyOutput {}

/**
 * Represents the input of a `RetryStageExecution` action.
 *
 * @public
 */
export interface RetryStageExecutionInput {
  /**
   * The name of the pipeline that contains the failed stage.
   *
   * @public
   */
  pipelineName: string | undefined;

  /**
   * The name of the failed stage to be retried.
   *
   * @public
   */
  stageName: string | undefined;

  /**
   * The ID of the pipeline execution in the failed stage to be retried. Use the GetPipelineState action to retrieve the current pipelineExecutionId of the failed stage
   *
   * @public
   */
  pipelineExecutionId: string | undefined;

  /**
   * The scope of the retry attempt.
   *
   * @public
   */
  retryMode: StageRetryMode | undefined;
}

/**
 * Represents the output of a `RetryStageExecution` action.
 *
 * @public
 */
export interface RetryStageExecutionOutput {
  /**
   * The ID of the current workflow execution in the failed stage.
   *
   * @public
   */
  pipelineExecutionId?: string | undefined;
}

/**
 * @public
 */
export interface RollbackStageInput {
  /**
   * The name of the pipeline for which the stage will be rolled back.
   *
   * @public
   */
  pipelineName: string | undefined;

  /**
   * The name of the stage in the pipeline to be rolled back.
   *
   * @public
   */
  stageName: string | undefined;

  /**
   * The pipeline execution ID for the stage to be rolled back to.
   *
   * @public
   */
  targetPipelineExecutionId: string | undefined;
}

/**
 * @public
 */
export interface RollbackStageOutput {
  /**
   * The execution ID of the pipeline execution for the stage that has been rolled back.
   *
   * @public
   */
  pipelineExecutionId: string | undefined;
}

/**
 * A list that allows you to specify, or override, the source revision for a pipeline execution that's being started. A source revision is the version with all the changes to your application code, or source artifact, for the pipeline execution.
 *
 * > **Note:** For the `S3_OBJECT_VERSION_ID` and `S3_OBJECT_KEY` types of source revisions, either of the types can be used independently, or they can be used together to override the source with a specific ObjectKey and VersionID.
 *
 * @public
 */
export interface SourceRevisionOverride {
  /**
   * The name of the action where the override will be applied.
   *
   * @public
   */
  actionName: string | undefined;

  /**
   * The type of source revision, based on the source provider. For example, the revision type for the CodeCommit action provider is the commit ID.
   *
   * @public
   */
  revisionType: SourceRevisionType | undefined;

  /**
   * The source revision, or version of your source artifact, with the changes that you want to run in the pipeline execution.
   *
   * @public
   */
  revisionValue: string | undefined;
}

/**
 * A pipeline-level variable used for a pipeline execution.
 *
 * @public
 */
export interface PipelineVariable {
  /**
   * The name of a pipeline-level variable.
   *
   * @public
   */
  name: string | undefined;

  /**
   * The value of a pipeline-level variable.
   *
   * @public
   */
  value: string | undefined;
}

/**
 * Represents the input of a `StartPipelineExecution` action.
 *
 * @public
 */
export interface StartPipelineExecutionInput {
  /**
   * The name of the pipeline to start.
   *
   * @public
   */
  name: string | undefined;

  /**
   * A list that overrides pipeline variables for a pipeline execution that's being started. Variable names must match `[A-Za-z0-9@\-_]+`, and the values can be anything except an empty string.
   *
   * @public
   */
  variables?: PipelineVariable[] | undefined;

  /**
   * The system-generated unique ID used to identify a unique execution request.
   *
   * @public
   */
  clientRequestToken?: string | undefined;

  /**
   * A list that allows you to specify, or override, the source revision for a pipeline execution that's being started. A source revision is the version with all the changes to your application code, or source artifact, for the pipeline execution.
   *
   * @public
   */
  sourceRevisions?: SourceRevisionOverride[] | undefined;
}

/**
 * Represents the output of a `StartPipelineExecution` action.
 *
 * @public
 */
export interface StartPipelineExecutionOutput {
  /**
   * The unique system-generated ID of the pipeline execution that was started.
   *
   * @public
   */
  pipelineExecutionId?: string | undefined;
}

/**
 * @public
 */
export interface StopPipelineExecutionInput {
  /**
   * The name of the pipeline to stop.
   *
   * @public
   */
  pipelineName: string | undefined;

  /**
   * The ID of the pipeline execution to be stopped in the current stage. Use the `GetPipelineState` action to retrieve the current pipelineExecutionId.
   *
   * @public
   */
  pipelineExecutionId: string | undefined;

  /**
   * Use this option to stop the pipeline execution by abandoning, rather than finishing, in-progress actions.
   *
   * > **Note:** This option can lead to failed or out-of-sequence tasks.
   *
   * @public
   */
  abandon?: boolean | undefined;

  /**
   * Use this option to enter comments, such as the reason the pipeline was stopped.
   *
   * @public
   */
  reason?: string | undefined;
}

/**
 * @public
 */
export interface StopPipelineExecutionOutput {
  /**
   * The unique system-generated ID of the pipeline execution that was stopped.
   *
   * @public
   */
  pipelineExecutionId?: string | undefined;
}

/**
 * @public
 */
export interface TagResourceInput {
  /**
   * The Amazon Resource Name (ARN) of the resource you want to add tags to.
   *
   * @public
   */
  resourceArn: string | undefined;

  /**
   * The tags you want to modify or add to the resource.
   *
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
   * The Amazon Resource Name (ARN) of the resource to remove tags from.
   *
   * @public
   */
  resourceArn: string | undefined;

  /**
   * The list of keys for the tags to be removed from the resource.
   *
   * @public
   */
  tagKeys: string[] | undefined;
}

/**
 * @public
 */
export interface UntagResourceOutput {}

/**
 * @public
 */
export interface UpdateActionTypeInput {
  /**
   * The action type definition for the action type to be updated.
   *
   * @public
   */
  actionType: ActionTypeDeclaration | undefined;
}

/**
 * Represents the input of an `UpdatePipeline` action.
 *
 * @public
 */
export interface UpdatePipelineInput {
  /**
   * The name of the pipeline to be updated.
   *
   * @public
   */
  pipeline: PipelineDeclaration | undefined;
}

/**
 * Represents the output of an `UpdatePipeline` action.
 *
 * @public
 */
export interface UpdatePipelineOutput {
  /**
   * The structure of the updated pipeline.
   *
   * @public
   */
  pipeline?: PipelineDeclaration | undefined;
}
