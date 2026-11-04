// smithy-typescript generated code
import type { DocumentType as __DocumentType } from "@smithy/types";

import type {
  ActStatus,
  ModelStatus,
  SortOrder,
  TraceLocationType,
  WorkflowDefinitionStatus,
  WorkflowRunStatus,
} from "./enums";

/**
 * Error information when an act fails to execute successfully.
 *
 * @public
 */
export interface ActError {
  /**
   * A human-readable description of the error that occurred.
   *
   * @public
   */
  message: string | undefined;

  /**
   * The type or category of error that occurred.
   *
   * @public
   */
  type?: string | undefined;
}

/**
 * The schema definition for tool input parameters.
 *
 * @public
 */
export type ToolInputSchema =
  | ToolInputSchema.JsonMember
  | ToolInputSchema.$UnknownMember;

/**
 * @public
 */
export namespace ToolInputSchema {
  /**
   * The JSON schema that defines the expected input format for the tool.
   *
   * @public
   */
  export interface JsonMember {
    json: __DocumentType;
    $unknown?: never;
  }

  /**
   * @public
   */
  export interface $UnknownMember {
    json?: never;
    $unknown: [string, any];
  }

  /**
   * @deprecated unused in schema-serde mode.
   *
   */
  export interface Visitor<T> {
    json: (value: __DocumentType) => T;
    _: (name: string, value: any) => T;
  }
}

/**
 * Specification for a tool that acts can invoke, including its name, description, and input schema.
 *
 * @public
 */
export interface ToolSpec {
  /**
   * The unique name of the tool that acts will use to invoke it.
   *
   * @public
   */
  name: string | undefined;

  /**
   * A description of what the tool does and how it should be used.
   *
   * @public
   */
  description: string | undefined;

  /**
   * The JSON schema that defines the expected input format for the tool.
   *
   * @public
   */
  inputSchema: ToolInputSchema | undefined;
}

/**
 * @public
 */
export interface CreateActRequest {
  /**
   * The name of the workflow definition containing the session.
   *
   * @public
   */
  workflowDefinitionName: string | undefined;

  /**
   * The unique identifier of the workflow run containing the session.
   *
   * @public
   */
  workflowRunId: string | undefined;

  /**
   * The unique identifier of the session to create the act in.
   *
   * @public
   */
  sessionId: string | undefined;

  /**
   * The task description that defines what the act should accomplish.
   *
   * @public
   */
  task: string | undefined;

  /**
   * A list of tool specifications that the act can invoke to complete its task.
   *
   * @public
   */
  toolSpecs?: ToolSpec[] | undefined;

  /**
   * A unique, case-sensitive identifier that you provide to ensure the idempotency of the request.
   *
   * @public
   */
  clientToken?: string | undefined;
}

/**
 * @public
 */
export interface CreateActResponse {
  /**
   * The unique identifier for the created act.
   *
   * @public
   */
  actId: string | undefined;

  /**
   * The initial status of the act after creation.
   *
   * @public
   */
  status: ActStatus | undefined;
}

/**
 * Information about a field that failed validation.
 *
 * @public
 */
export interface ValidationExceptionField {
  /**
   * The name of the field that failed validation.
   *
   * @public
   */
  name: string | undefined;

  /**
   * A description of the validation error for this field.
   *
   * @public
   */
  message: string | undefined;
}

/**
 * Content returned from a tool call execution.
 *
 * @public
 */
export type CallResultContent =
  | CallResultContent.TextMember
  | CallResultContent.$UnknownMember;

/**
 * @public
 */
export namespace CallResultContent {
  /**
   * Text content returned from the tool execution.
   *
   * @public
   */
  export interface TextMember {
    text: string;
    $unknown?: never;
  }

  /**
   * @public
   */
  export interface $UnknownMember {
    text?: never;
    $unknown: [string, any];
  }

  /**
   * @deprecated unused in schema-serde mode.
   *
   */
  export interface Visitor<T> {
    text: (value: string) => T;
    _: (name: string, value: any) => T;
  }
}

/**
 * The result returned from executing a tool call.
 *
 * @public
 */
export interface CallResult {
  /**
   * The identifier of the tool call that this result corresponds to.
   *
   * @public
   */
  callId?: string | undefined;

  /**
   * The content returned by the tool execution, which can include text or other media types.
   *
   * @public
   */
  content: CallResultContent[] | undefined;
}

/**
 * @public
 */
export interface InvokeActStepRequest {
  /**
   * The name of the workflow definition containing the act.
   *
   * @public
   */
  workflowDefinitionName: string | undefined;

  /**
   * The unique identifier of the workflow run containing the act.
   *
   * @public
   */
  workflowRunId: string | undefined;

  /**
   * The unique identifier of the session containing the act.
   *
   * @public
   */
  sessionId: string | undefined;

  /**
   * The unique identifier of the act to invoke the next step for.
   *
   * @public
   */
  actId: string | undefined;

  /**
   * The results from previous tool calls that the act requested.
   *
   * @public
   */
  callResults: CallResult[] | undefined;

  /**
   * The identifier of the previous step, used for tracking execution flow.
   *
   * @public
   */
  previousStepId?: string | undefined;
}

/**
 * A request for the client to execute a specific tool with given parameters.
 *
 * @public
 */
export interface Call {
  /**
   * A unique identifier for this tool call, used to match results back to requests.
   *
   * @public
   */
  callId: string | undefined;

  /**
   * The input parameters for the tool call, formatted according to the tool's schema.
   *
   * @public
   */
  input: __DocumentType | undefined;

  /**
   * The name of the tool to invoke, following the pattern 'tool.\{toolName\}' or 'browser.\{browserAction\}'.
   *
   * @public
   */
  name: string | undefined;
}

/**
 * @public
 */
export interface InvokeActStepResponse {
  /**
   * A list of tool calls that the act wants to execute in this step.
   *
   * @public
   */
  calls: Call[] | undefined;

  /**
   * The unique identifier for this execution step.
   *
   * @public
   */
  stepId: string | undefined;
}

/**
 * @public
 */
export interface ListActsRequest {
  /**
   * The name of the workflow definition containing the session.
   *
   * @public
   */
  workflowDefinitionName: string | undefined;

  /**
   * The unique identifier of the workflow run containing the session.
   *
   * @public
   */
  workflowRunId?: string | undefined;

  /**
   * The unique identifier of the session to list acts for.
   *
   * @public
   */
  sessionId?: string | undefined;

  /**
   * The maximum number of acts to return in a single response.
   *
   * @public
   */
  maxResults?: number | undefined;

  /**
   * The token for retrieving the next page of results.
   *
   * @public
   */
  nextToken?: string | undefined;

  /**
   * The sort order for the returned acts (ascending or descending).
   *
   * @public
   */
  sortOrder?: SortOrder | undefined;
}

/**
 * Information about where trace data is stored for debugging and monitoring.
 *
 * @public
 */
export interface TraceLocation {
  /**
   * The type of storage location for the trace data.
   *
   * @public
   */
  locationType: TraceLocationType | undefined;

  /**
   * The specific location where the trace data is stored.
   *
   * @public
   */
  location: string | undefined;
}

/**
 * Summary information about an act, including its status and execution timing.
 *
 * @public
 */
export interface ActSummary {
  /**
   * The unique identifier of the workflow run containing this act.
   *
   * @public
   */
  workflowRunId: string | undefined;

  /**
   * The unique identifier of the session containing this act.
   *
   * @public
   */
  sessionId: string | undefined;

  /**
   * The unique identifier of the act.
   *
   * @public
   */
  actId: string | undefined;

  /**
   * The current execution status of the act.
   *
   * @public
   */
  status: ActStatus | undefined;

  /**
   * The timestamp when the act started execution.
   *
   * @public
   */
  startedAt: Date | undefined;

  /**
   * The timestamp when the act completed execution, if applicable.
   *
   * @public
   */
  endedAt?: Date | undefined;

  /**
   * The location where trace information for this act is stored.
   *
   * @public
   */
  traceLocation?: TraceLocation | undefined;
}

/**
 * @public
 */
export interface ListActsResponse {
  /**
   * A list of summary information for acts in the session.
   *
   * @public
   */
  actSummaries: ActSummary[] | undefined;

  /**
   * The token for retrieving the next page of results, if available.
   *
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * @public
 */
export interface UpdateActRequest {
  /**
   * The name of the workflow definition containing the act.
   *
   * @public
   */
  workflowDefinitionName: string | undefined;

  /**
   * The unique identifier of the workflow run containing the act.
   *
   * @public
   */
  workflowRunId: string | undefined;

  /**
   * The unique identifier of the session containing the act.
   *
   * @public
   */
  sessionId: string | undefined;

  /**
   * The unique identifier of the act to update.
   *
   * @public
   */
  actId: string | undefined;

  /**
   * The new status to set for the act.
   *
   * @public
   */
  status: ActStatus | undefined;

  /**
   * Error information to associate with the act, if applicable.
   *
   * @public
   */
  error?: ActError | undefined;
}

/**
 * @public
 */
export interface UpdateActResponse {}

/**
 * @public
 */
export interface ListModelsRequest {
  /**
   * The client compatibility version to filter models by compatibility.
   *
   * @public
   */
  clientCompatibilityVersion: number | undefined;
}

/**
 * Information about client compatibility and supported model versions.
 *
 * @public
 */
export interface CompatibilityInformation {
  /**
   * The client compatibility version that was requested.
   *
   * @public
   */
  clientCompatibilityVersion: number | undefined;

  /**
   * A list of model IDs that are supported for the client compatibility version.
   *
   * @public
   */
  supportedModelIds: string[] | undefined;

  /**
   * Additional information about compatibility requirements or recommendations.
   *
   * @public
   */
  message?: string | undefined;
}

/**
 * An alias that provides a stable reference to a model version.
 *
 * @public
 */
export interface ModelAlias {
  /**
   * The name of the model alias.
   *
   * @public
   */
  aliasName: string | undefined;

  /**
   * The model ID that this alias currently points to.
   *
   * @public
   */
  latestModelId: string | undefined;

  /**
   * The resolved model ID after alias resolution.
   *
   * @public
   */
  resolvedModelId?: string | undefined;
}

/**
 * Lifecycle information for an AI model.
 *
 * @public
 */
export interface ModelLifecycle {
  /**
   * The current lifecycle status of the model.
   *
   * @public
   */
  status: ModelStatus | undefined;
}

/**
 * Summary information about an available AI model.
 *
 * @public
 */
export interface ModelSummary {
  /**
   * The unique identifier of the model.
   *
   * @public
   */
  modelId: string | undefined;

  /**
   * The lifecycle information for the model.
   *
   * @public
   */
  modelLifecycle: ModelLifecycle | undefined;

  /**
   * The minimum client compatibility version required to use this model.
   *
   * @public
   */
  minimumCompatibilityVersion: number | undefined;
}

/**
 * @public
 */
export interface ListModelsResponse {
  /**
   * A list of available AI models with their status and compatibility information.
   *
   * @public
   */
  modelSummaries: ModelSummary[] | undefined;

  /**
   * A list of model aliases that provide stable references to model versions.
   *
   * @public
   */
  modelAliases: ModelAlias[] | undefined;

  /**
   * Information about client compatibility and supported models.
   *
   * @public
   */
  compatibilityInformation: CompatibilityInformation | undefined;
}

/**
 * @public
 */
export interface CreateSessionRequest {
  /**
   * The name of the workflow definition containing the workflow run.
   *
   * @public
   */
  workflowDefinitionName: string | undefined;

  /**
   * The unique identifier of the workflow run to create the session in.
   *
   * @public
   */
  workflowRunId: string | undefined;

  /**
   * A unique, case-sensitive identifier that you provide to ensure the idempotency of the request.
   *
   * @public
   */
  clientToken?: string | undefined;
}

/**
 * @public
 */
export interface CreateSessionResponse {
  /**
   * The unique identifier for the created session.
   *
   * @public
   */
  sessionId: string | undefined;
}

/**
 * @public
 */
export interface ListSessionsRequest {
  /**
   * The name of the workflow definition containing the workflow run.
   *
   * @public
   */
  workflowDefinitionName: string | undefined;

  /**
   * The unique identifier of the workflow run to list sessions for.
   *
   * @public
   */
  workflowRunId: string | undefined;

  /**
   * The maximum number of sessions to return in a single response.
   *
   * @public
   */
  maxResults?: number | undefined;

  /**
   * The token for retrieving the next page of results.
   *
   * @public
   */
  nextToken?: string | undefined;

  /**
   * The sort order for the returned sessions (ascending or descending).
   *
   * @public
   */
  sortOrder?: SortOrder | undefined;
}

/**
 * Summary information about a session within a workflow run.
 *
 * @public
 */
export interface SessionSummary {
  /**
   * The unique identifier of the session.
   *
   * @public
   */
  sessionId: string | undefined;
}

/**
 * @public
 */
export interface ListSessionsResponse {
  /**
   * A list of summary information for sessions in the workflow run.
   *
   * @public
   */
  sessionSummaries: SessionSummary[] | undefined;

  /**
   * The token for retrieving the next page of results, if available.
   *
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * Configuration settings for exporting workflow execution data and logs to Amazon Simple Storage Service (Amazon S3).
 *
 * @public
 */
export interface WorkflowExportConfig {
  /**
   * The name of your Amazon S3 bucket, that Nova Act uses to export your workflow data. Note that the IAM role used to access Nova Act must also have write permissions to this bucket.
   *
   * @public
   */
  s3BucketName: string | undefined;

  /**
   * An optional prefix for Amazon S3 object keys to organize exported data.
   *
   * @public
   */
  s3KeyPrefix?: string | undefined;
}

/**
 * @public
 */
export interface CreateWorkflowDefinitionRequest {
  /**
   * The name of the workflow definition. Must be unique within your account and region.
   *
   * @public
   */
  name: string | undefined;

  /**
   * An optional description of the workflow definition's purpose and functionality.
   *
   * @public
   */
  description?: string | undefined;

  /**
   * Configuration for exporting workflow execution data to Amazon Simple Storage Service.
   *
   * @public
   */
  exportConfig?: WorkflowExportConfig | undefined;

  /**
   * A unique, case-sensitive identifier that you provide to ensure the idempotency of the request.
   *
   * @public
   */
  clientToken?: string | undefined;
}

/**
 * @public
 */
export interface CreateWorkflowDefinitionResponse {
  /**
   * The current status of the workflow definition after creation.
   *
   * @public
   */
  status: WorkflowDefinitionStatus | undefined;
}

/**
 * @public
 */
export interface DeleteWorkflowDefinitionRequest {
  /**
   * The name of the workflow definition to delete.
   *
   * @public
   */
  workflowDefinitionName: string | undefined;
}

/**
 * @public
 */
export interface DeleteWorkflowDefinitionResponse {
  /**
   * The status of the workflow definition after deletion request.
   *
   * @public
   */
  status: WorkflowDefinitionStatus | undefined;
}

/**
 * @public
 */
export interface GetWorkflowDefinitionRequest {
  /**
   * The name of the workflow definition to retrieve.
   *
   * @public
   */
  workflowDefinitionName: string | undefined;
}

/**
 * @public
 */
export interface GetWorkflowDefinitionResponse {
  /**
   * The name of the workflow definition.
   *
   * @public
   */
  name: string | undefined;

  /**
   * The Amazon Resource Name (ARN) of the workflow definition.
   *
   * @public
   */
  arn: string | undefined;

  /**
   * The timestamp when the workflow definition was created.
   *
   * @public
   */
  createdAt: Date | undefined;

  /**
   * The description of the workflow definition.
   *
   * @public
   */
  description?: string | undefined;

  /**
   * The export configuration for the workflow definition.
   *
   * @public
   */
  exportConfig?: WorkflowExportConfig | undefined;

  /**
   * The current status of the workflow definition.
   *
   * @public
   */
  status: WorkflowDefinitionStatus | undefined;
}

/**
 * @public
 */
export interface ListWorkflowDefinitionsRequest {
  /**
   * The maximum number of workflow definitions to return in a single response.
   *
   * @public
   */
  maxResults?: number | undefined;

  /**
   * The token for retrieving the next page of results.
   *
   * @public
   */
  nextToken?: string | undefined;

  /**
   * The sort order for the returned workflow definitions (ascending or descending).
   *
   * @public
   */
  sortOrder?: SortOrder | undefined;
}

/**
 * Summary information about a workflow definition, used in list operations.
 *
 * @public
 */
export interface WorkflowDefinitionSummary {
  /**
   * The Amazon Resource Name (ARN) of the workflow definition.
   *
   * @public
   */
  workflowDefinitionArn: string | undefined;

  /**
   * The name of the workflow definition.
   *
   * @public
   */
  workflowDefinitionName: string | undefined;

  /**
   * The timestamp when the workflow definition was created.
   *
   * @public
   */
  createdAt: Date | undefined;

  /**
   * The current status of the workflow definition.
   *
   * @public
   */
  status: WorkflowDefinitionStatus | undefined;
}

/**
 * @public
 */
export interface ListWorkflowDefinitionsResponse {
  /**
   * A list of summary information for workflow definitions.
   *
   * @public
   */
  workflowDefinitionSummaries: WorkflowDefinitionSummary[] | undefined;

  /**
   * The token for retrieving the next page of results, if available.
   *
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * Information about the client making API requests, used for compatibility checking.
 *
 * @public
 */
export interface ClientInfo {
  /**
   * The compatibility version of the client, used to ensure API compatibility.
   *
   * @public
   */
  compatibilityVersion: number | undefined;

  /**
   * The version of the SDK being used by the client.
   *
   * @public
   */
  sdkVersion?: string | undefined;
}

/**
 * @public
 */
export interface CreateWorkflowRunRequest {
  /**
   * The name of the workflow definition to execute.
   *
   * @public
   */
  workflowDefinitionName: string | undefined;

  /**
   * The ID of the AI model to use for workflow execution.
   *
   * @public
   */
  modelId: string | undefined;

  /**
   * A unique, case-sensitive identifier that you provide to ensure the idempotency of the request.
   *
   * @public
   */
  clientToken?: string | undefined;

  /**
   * The CloudWatch log group name for storing workflow execution logs.
   *
   * @public
   */
  logGroupName?: string | undefined;

  /**
   * Information about the client making the request, including compatibility version and SDK version.
   *
   * @public
   */
  clientInfo: ClientInfo | undefined;
}

/**
 * @public
 */
export interface CreateWorkflowRunResponse {
  /**
   * The unique identifier for the created workflow run.
   *
   * @public
   */
  workflowRunId: string | undefined;

  /**
   * The initial status of the workflow run after creation.
   *
   * @public
   */
  status: WorkflowRunStatus | undefined;
}

/**
 * @public
 */
export interface DeleteWorkflowRunRequest {
  /**
   * The name of the workflow definition containing the workflow run.
   *
   * @public
   */
  workflowDefinitionName: string | undefined;

  /**
   * The unique identifier of the workflow run to delete.
   *
   * @public
   */
  workflowRunId: string | undefined;
}

/**
 * @public
 */
export interface DeleteWorkflowRunResponse {
  /**
   * The status of the workflow run after deletion request.
   *
   * @public
   */
  status: WorkflowRunStatus | undefined;
}

/**
 * @public
 */
export interface GetWorkflowRunRequest {
  /**
   * The name of the workflow definition containing the workflow run.
   *
   * @public
   */
  workflowDefinitionName: string | undefined;

  /**
   * The unique identifier of the workflow run to retrieve.
   *
   * @public
   */
  workflowRunId: string | undefined;
}

/**
 * @public
 */
export interface GetWorkflowRunResponse {
  /**
   * The Amazon Resource Name (ARN) of the workflow run.
   *
   * @public
   */
  workflowRunArn: string | undefined;

  /**
   * The unique identifier of the workflow run.
   *
   * @public
   */
  workflowRunId: string | undefined;

  /**
   * The current execution status of the workflow run.
   *
   * @public
   */
  status: WorkflowRunStatus | undefined;

  /**
   * The timestamp when the workflow run started execution.
   *
   * @public
   */
  startedAt: Date | undefined;

  /**
   * The timestamp when the workflow run completed execution, if applicable.
   *
   * @public
   */
  endedAt?: Date | undefined;

  /**
   * The ID of the AI model being used for this workflow run.
   *
   * @public
   */
  modelId: string | undefined;

  /**
   * The CloudWatch log group name for this workflow run's logs.
   *
   * @public
   */
  logGroupName?: string | undefined;
}

/**
 * @public
 */
export interface ListWorkflowRunsRequest {
  /**
   * The name of the workflow definition to list workflow runs for.
   *
   * @public
   */
  workflowDefinitionName: string | undefined;

  /**
   * The maximum number of workflow runs to return in a single response.
   *
   * @public
   */
  maxResults?: number | undefined;

  /**
   * The token for retrieving the next page of results.
   *
   * @public
   */
  nextToken?: string | undefined;

  /**
   * The sort order for the returned workflow runs (ascending or descending).
   *
   * @public
   */
  sortOrder?: SortOrder | undefined;
}

/**
 * Summary information about a workflow run, including execution status and timing.
 *
 * @public
 */
export interface WorkflowRunSummary {
  /**
   * The Amazon Resource Name (ARN) of the workflow run.
   *
   * @public
   */
  workflowRunArn: string | undefined;

  /**
   * The unique identifier of the workflow run.
   *
   * @public
   */
  workflowRunId: string | undefined;

  /**
   * The current execution status of the workflow run.
   *
   * @public
   */
  status: WorkflowRunStatus | undefined;

  /**
   * The timestamp when the workflow run started execution.
   *
   * @public
   */
  startedAt: Date | undefined;

  /**
   * The timestamp when the workflow run completed execution, if applicable.
   *
   * @public
   */
  endedAt?: Date | undefined;

  /**
   * The location where trace information for this workflow run is stored.
   *
   * @public
   */
  traceLocation?: TraceLocation | undefined;
}

/**
 * @public
 */
export interface ListWorkflowRunsResponse {
  /**
   * A list of summary information for workflow runs.
   *
   * @public
   */
  workflowRunSummaries: WorkflowRunSummary[] | undefined;

  /**
   * The token for retrieving the next page of results, if available.
   *
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * @public
 */
export interface UpdateWorkflowRunRequest {
  /**
   * The name of the workflow definition containing the workflow run.
   *
   * @public
   */
  workflowDefinitionName: string | undefined;

  /**
   * The unique identifier of the workflow run to update.
   *
   * @public
   */
  workflowRunId: string | undefined;

  /**
   * The new status to set for the workflow run.
   *
   * @public
   */
  status: WorkflowRunStatus | undefined;
}

/**
 * @public
 */
export interface UpdateWorkflowRunResponse {}
