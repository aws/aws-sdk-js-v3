// smithy-typescript generated code
import { DocumentType as __DocumentType } from "@smithy/types";

import {
  ActStatus,
  ModelStatus,
  SortOrder,
  TraceLocationType,
  WorkflowDefinitionStatus,
  WorkflowRunStatus,
} from "./enums";

/**
 * <p>Error information when an act fails to execute successfully.</p>
 * @public
 */
export interface ActError {
  /**
   * <p>A human-readable description of the error that occurred.</p>
   * @public
   */
  message: string | undefined;

  /**
   * <p>The type or category of error that occurred.</p>
   * @public
   */
  type?: string | undefined;
}

/**
 * <p>The schema definition for tool input parameters.</p>
 * @public
 */
export type ToolInputSchema = ToolInputSchema.JsonMember | ToolInputSchema.$UnknownMember;

/**
 * @public
 */
export namespace ToolInputSchema {
  /**
   * <p>The JSON schema that defines the expected input format for the tool.</p>
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
 * <p>Specification for a tool that acts can invoke, including its name, description, and input schema.</p>
 * @public
 */
export interface ToolSpec {
  /**
   * <p>The unique name of the tool that acts will use to invoke it.</p>
   * @public
   */
  name: string | undefined;

  /**
   * <p>A description of what the tool does and how it should be used.</p>
   * @public
   */
  description: string | undefined;

  /**
   * <p>The JSON schema that defines the expected input format for the tool.</p>
   * @public
   */
  inputSchema: ToolInputSchema | undefined;
}

/**
 * @public
 */
export interface CreateActRequest {
  /**
   * <p>The name of the workflow definition containing the session.</p>
   * @public
   */
  workflowDefinitionName: string | undefined;

  /**
   * <p>The unique identifier of the workflow run containing the session.</p>
   * @public
   */
  workflowRunId: string | undefined;

  /**
   * <p>The unique identifier of the session to create the act in.</p>
   * @public
   */
  sessionId: string | undefined;

  /**
   * <p>The task description that defines what the act should accomplish.</p>
   * @public
   */
  task: string | undefined;

  /**
   * <p>A list of tool specifications that the act can invoke to complete its task.</p>
   * @public
   */
  toolSpecs?: ToolSpec[] | undefined;

  /**
   * <p>A unique, case-sensitive identifier that you provide to ensure the idempotency of the request.</p>
   * @public
   */
  clientToken?: string | undefined;
}

/**
 * @public
 */
export interface CreateActResponse {
  /**
   * <p>The unique identifier for the created act.</p>
   * @public
   */
  actId: string | undefined;

  /**
   * <p>The initial status of the act after creation.</p>
   * @public
   */
  status: ActStatus | undefined;
}

/**
 * <p>Information about a field that failed validation.</p>
 * @public
 */
export interface ValidationExceptionField {
  /**
   * <p>The name of the field that failed validation.</p>
   * @public
   */
  name: string | undefined;

  /**
   * <p>A description of the validation error for this field.</p>
   * @public
   */
  message: string | undefined;
}

/**
 * <p>Content returned from a tool call execution.</p>
 * @public
 */
export type CallResultContent = CallResultContent.TextMember | CallResultContent.$UnknownMember;

/**
 * @public
 */
export namespace CallResultContent {
  /**
   * <p>Text content returned from the tool execution.</p>
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
 * <p>The result returned from executing a tool call.</p>
 * @public
 */
export interface CallResult {
  /**
   * <p>The identifier of the tool call that this result corresponds to.</p>
   * @public
   */
  callId?: string | undefined;

  /**
   * <p>The content returned by the tool execution, which can include text or other media types.</p>
   * @public
   */
  content: CallResultContent[] | undefined;
}

/**
 * @public
 */
export interface InvokeActStepRequest {
  /**
   * <p>The name of the workflow definition containing the act.</p>
   * @public
   */
  workflowDefinitionName: string | undefined;

  /**
   * <p>The unique identifier of the workflow run containing the act.</p>
   * @public
   */
  workflowRunId: string | undefined;

  /**
   * <p>The unique identifier of the session containing the act.</p>
   * @public
   */
  sessionId: string | undefined;

  /**
   * <p>The unique identifier of the act to invoke the next step for.</p>
   * @public
   */
  actId: string | undefined;

  /**
   * <p>The results from previous tool calls that the act requested.</p>
   * @public
   */
  callResults: CallResult[] | undefined;

  /**
   * <p>The identifier of the previous step, used for tracking execution flow.</p>
   * @public
   */
  previousStepId?: string | undefined;
}

/**
 * <p>A request for the client to execute a specific tool with given parameters.</p>
 * @public
 */
export interface Call {
  /**
   * <p>A unique identifier for this tool call, used to match results back to requests.</p>
   * @public
   */
  callId: string | undefined;

  /**
   * <p>The input parameters for the tool call, formatted according to the tool's schema.</p>
   * @public
   */
  input: __DocumentType | undefined;

  /**
   * <p>The name of the tool to invoke, following the pattern 'tool.\{toolName\}' or 'browser.\{browserAction\}'.</p>
   * @public
   */
  name: string | undefined;
}

/**
 * @public
 */
export interface InvokeActStepResponse {
  /**
   * <p>A list of tool calls that the act wants to execute in this step.</p>
   * @public
   */
  calls: Call[] | undefined;

  /**
   * <p>The unique identifier for this execution step.</p>
   * @public
   */
  stepId: string | undefined;
}

/**
 * @public
 */
export interface ListActsRequest {
  /**
   * <p>The name of the workflow definition containing the session.</p>
   * @public
   */
  workflowDefinitionName: string | undefined;

  /**
   * <p>The unique identifier of the workflow run containing the session.</p>
   * @public
   */
  workflowRunId?: string | undefined;

  /**
   * <p>The unique identifier of the session to list acts for.</p>
   * @public
   */
  sessionId?: string | undefined;

  /**
   * <p>The maximum number of acts to return in a single response.</p>
   * @public
   */
  maxResults?: number | undefined;

  /**
   * <p>The token for retrieving the next page of results.</p>
   * @public
   */
  nextToken?: string | undefined;

  /**
   * <p>The sort order for the returned acts (ascending or descending).</p>
   * @public
   */
  sortOrder?: SortOrder | undefined;
}

/**
 * <p>Information about where trace data is stored for debugging and monitoring.</p>
 * @public
 */
export interface TraceLocation {
  /**
   * <p>The type of storage location for the trace data.</p>
   * @public
   */
  locationType: TraceLocationType | undefined;

  /**
   * <p>The specific location where the trace data is stored.</p>
   * @public
   */
  location: string | undefined;
}

/**
 * <p>Summary information about an act, including its status and execution timing.</p>
 * @public
 */
export interface ActSummary {
  /**
   * <p>The unique identifier of the workflow run containing this act.</p>
   * @public
   */
  workflowRunId: string | undefined;

  /**
   * <p>The unique identifier of the session containing this act.</p>
   * @public
   */
  sessionId: string | undefined;

  /**
   * <p>The unique identifier of the act.</p>
   * @public
   */
  actId: string | undefined;

  /**
   * <p>The current execution status of the act.</p>
   * @public
   */
  status: ActStatus | undefined;

  /**
   * <p>The timestamp when the act started execution.</p>
   * @public
   */
  startedAt: Date | undefined;

  /**
   * <p>The timestamp when the act completed execution, if applicable.</p>
   * @public
   */
  endedAt?: Date | undefined;

  /**
   * <p>The location where trace information for this act is stored.</p>
   * @public
   */
  traceLocation?: TraceLocation | undefined;
}

/**
 * @public
 */
export interface ListActsResponse {
  /**
   * <p>A list of summary information for acts in the session.</p>
   * @public
   */
  actSummaries: ActSummary[] | undefined;

  /**
   * <p>The token for retrieving the next page of results, if available.</p>
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * @public
 */
export interface UpdateActRequest {
  /**
   * <p>The name of the workflow definition containing the act.</p>
   * @public
   */
  workflowDefinitionName: string | undefined;

  /**
   * <p>The unique identifier of the workflow run containing the act.</p>
   * @public
   */
  workflowRunId: string | undefined;

  /**
   * <p>The unique identifier of the session containing the act.</p>
   * @public
   */
  sessionId: string | undefined;

  /**
   * <p>The unique identifier of the act to update.</p>
   * @public
   */
  actId: string | undefined;

  /**
   * <p>The new status to set for the act.</p>
   * @public
   */
  status: ActStatus | undefined;

  /**
   * <p>Error information to associate with the act, if applicable.</p>
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
   * <p>The client compatibility version to filter models by compatibility.</p>
   * @public
   */
  clientCompatibilityVersion: number | undefined;
}

/**
 * <p>Information about client compatibility and supported model versions.</p>
 * @public
 */
export interface CompatibilityInformation {
  /**
   * <p>The client compatibility version that was requested.</p>
   * @public
   */
  clientCompatibilityVersion: number | undefined;

  /**
   * <p>A list of model IDs that are supported for the client compatibility version.</p>
   * @public
   */
  supportedModelIds: string[] | undefined;

  /**
   * <p>Additional information about compatibility requirements or recommendations.</p>
   * @public
   */
  message?: string | undefined;
}

/**
 * <p>An alias that provides a stable reference to a model version.</p>
 * @public
 */
export interface ModelAlias {
  /**
   * <p>The name of the model alias.</p>
   * @public
   */
  aliasName: string | undefined;

  /**
   * <p>The model ID that this alias currently points to.</p>
   * @public
   */
  latestModelId: string | undefined;

  /**
   * <p>The resolved model ID after alias resolution.</p>
   * @public
   */
  resolvedModelId?: string | undefined;
}

/**
 * <p>Lifecycle information for an AI model.</p>
 * @public
 */
export interface ModelLifecycle {
  /**
   * <p>The current lifecycle status of the model.</p>
   * @public
   */
  status: ModelStatus | undefined;
}

/**
 * <p>Summary information about an available AI model.</p>
 * @public
 */
export interface ModelSummary {
  /**
   * <p>The unique identifier of the model.</p>
   * @public
   */
  modelId: string | undefined;

  /**
   * <p>The lifecycle information for the model.</p>
   * @public
   */
  modelLifecycle: ModelLifecycle | undefined;

  /**
   * <p>The minimum client compatibility version required to use this model.</p>
   * @public
   */
  minimumCompatibilityVersion: number | undefined;
}

/**
 * @public
 */
export interface ListModelsResponse {
  /**
   * <p>A list of available AI models with their status and compatibility information.</p>
   * @public
   */
  modelSummaries: ModelSummary[] | undefined;

  /**
   * <p>A list of model aliases that provide stable references to model versions.</p>
   * @public
   */
  modelAliases: ModelAlias[] | undefined;

  /**
   * <p>Information about client compatibility and supported models.</p>
   * @public
   */
  compatibilityInformation: CompatibilityInformation | undefined;
}

/**
 * @public
 */
export interface CreateSessionRequest {
  /**
   * <p>The name of the workflow definition containing the workflow run.</p>
   * @public
   */
  workflowDefinitionName: string | undefined;

  /**
   * <p>The unique identifier of the workflow run to create the session in.</p>
   * @public
   */
  workflowRunId: string | undefined;

  /**
   * <p>A unique, case-sensitive identifier that you provide to ensure the idempotency of the request.</p>
   * @public
   */
  clientToken?: string | undefined;
}

/**
 * @public
 */
export interface CreateSessionResponse {
  /**
   * <p>The unique identifier for the created session.</p>
   * @public
   */
  sessionId: string | undefined;
}

/**
 * @public
 */
export interface ListSessionsRequest {
  /**
   * <p>The name of the workflow definition containing the workflow run.</p>
   * @public
   */
  workflowDefinitionName: string | undefined;

  /**
   * <p>The unique identifier of the workflow run to list sessions for.</p>
   * @public
   */
  workflowRunId: string | undefined;

  /**
   * <p>The maximum number of sessions to return in a single response.</p>
   * @public
   */
  maxResults?: number | undefined;

  /**
   * <p>The token for retrieving the next page of results.</p>
   * @public
   */
  nextToken?: string | undefined;

  /**
   * <p>The sort order for the returned sessions (ascending or descending).</p>
   * @public
   */
  sortOrder?: SortOrder | undefined;
}

/**
 * <p>Summary information about a session within a workflow run.</p>
 * @public
 */
export interface SessionSummary {
  /**
   * <p>The unique identifier of the session.</p>
   * @public
   */
  sessionId: string | undefined;
}

/**
 * @public
 */
export interface ListSessionsResponse {
  /**
   * <p>A list of summary information for sessions in the workflow run.</p>
   * @public
   */
  sessionSummaries: SessionSummary[] | undefined;

  /**
   * <p>The token for retrieving the next page of results, if available.</p>
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * <p>Configuration settings for exporting workflow execution data and logs to Amazon Simple Storage Service (Amazon S3).</p>
 * @public
 */
export interface WorkflowExportConfig {
  /**
   * <p>The name of your Amazon S3 bucket, that Nova Act uses to export your workflow data. Note that the IAM role used to access Nova Act must also have write permissions to this bucket.</p>
   * @public
   */
  s3BucketName: string | undefined;

  /**
   * <p>An optional prefix for Amazon S3 object keys to organize exported data.</p>
   * @public
   */
  s3KeyPrefix?: string | undefined;
}

/**
 * @public
 */
export interface CreateWorkflowDefinitionRequest {
  /**
   * <p>The name of the workflow definition. Must be unique within your account and region.</p>
   * @public
   */
  name: string | undefined;

  /**
   * <p>An optional description of the workflow definition's purpose and functionality.</p>
   * @public
   */
  description?: string | undefined;

  /**
   * <p>Configuration for exporting workflow execution data to Amazon Simple Storage Service.</p>
   * @public
   */
  exportConfig?: WorkflowExportConfig | undefined;

  /**
   * <p>A unique, case-sensitive identifier that you provide to ensure the idempotency of the request.</p>
   * @public
   */
  clientToken?: string | undefined;
}

/**
 * @public
 */
export interface CreateWorkflowDefinitionResponse {
  /**
   * <p>The current status of the workflow definition after creation.</p>
   * @public
   */
  status: WorkflowDefinitionStatus | undefined;
}

/**
 * @public
 */
export interface DeleteWorkflowDefinitionRequest {
  /**
   * <p>The name of the workflow definition to delete.</p>
   * @public
   */
  workflowDefinitionName: string | undefined;
}

/**
 * @public
 */
export interface DeleteWorkflowDefinitionResponse {
  /**
   * <p>The status of the workflow definition after deletion request.</p>
   * @public
   */
  status: WorkflowDefinitionStatus | undefined;
}

/**
 * @public
 */
export interface GetWorkflowDefinitionRequest {
  /**
   * <p>The name of the workflow definition to retrieve.</p>
   * @public
   */
  workflowDefinitionName: string | undefined;
}

/**
 * @public
 */
export interface GetWorkflowDefinitionResponse {
  /**
   * <p>The name of the workflow definition.</p>
   * @public
   */
  name: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the workflow definition.</p>
   * @public
   */
  arn: string | undefined;

  /**
   * <p>The timestamp when the workflow definition was created.</p>
   * @public
   */
  createdAt: Date | undefined;

  /**
   * <p>The description of the workflow definition.</p>
   * @public
   */
  description?: string | undefined;

  /**
   * <p>The export configuration for the workflow definition.</p>
   * @public
   */
  exportConfig?: WorkflowExportConfig | undefined;

  /**
   * <p>The current status of the workflow definition.</p>
   * @public
   */
  status: WorkflowDefinitionStatus | undefined;
}

/**
 * @public
 */
export interface ListWorkflowDefinitionsRequest {
  /**
   * <p>The maximum number of workflow definitions to return in a single response.</p>
   * @public
   */
  maxResults?: number | undefined;

  /**
   * <p>The token for retrieving the next page of results.</p>
   * @public
   */
  nextToken?: string | undefined;

  /**
   * <p>The sort order for the returned workflow definitions (ascending or descending).</p>
   * @public
   */
  sortOrder?: SortOrder | undefined;
}

/**
 * <p>Summary information about a workflow definition, used in list operations.</p>
 * @public
 */
export interface WorkflowDefinitionSummary {
  /**
   * <p>The Amazon Resource Name (ARN) of the workflow definition.</p>
   * @public
   */
  workflowDefinitionArn: string | undefined;

  /**
   * <p>The name of the workflow definition.</p>
   * @public
   */
  workflowDefinitionName: string | undefined;

  /**
   * <p>The timestamp when the workflow definition was created.</p>
   * @public
   */
  createdAt: Date | undefined;

  /**
   * <p>The current status of the workflow definition.</p>
   * @public
   */
  status: WorkflowDefinitionStatus | undefined;
}

/**
 * @public
 */
export interface ListWorkflowDefinitionsResponse {
  /**
   * <p>A list of summary information for workflow definitions.</p>
   * @public
   */
  workflowDefinitionSummaries: WorkflowDefinitionSummary[] | undefined;

  /**
   * <p>The token for retrieving the next page of results, if available.</p>
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * <p>Information about the client making API requests, used for compatibility checking.</p>
 * @public
 */
export interface ClientInfo {
  /**
   * <p>The compatibility version of the client, used to ensure API compatibility.</p>
   * @public
   */
  compatibilityVersion: number | undefined;

  /**
   * <p>The version of the SDK being used by the client.</p>
   * @public
   */
  sdkVersion?: string | undefined;
}

/**
 * @public
 */
export interface CreateWorkflowRunRequest {
  /**
   * <p>The name of the workflow definition to execute.</p>
   * @public
   */
  workflowDefinitionName: string | undefined;

  /**
   * <p>The ID of the AI model to use for workflow execution.</p>
   * @public
   */
  modelId: string | undefined;

  /**
   * <p>A unique, case-sensitive identifier that you provide to ensure the idempotency of the request.</p>
   * @public
   */
  clientToken?: string | undefined;

  /**
   * <p>The CloudWatch log group name for storing workflow execution logs.</p>
   * @public
   */
  logGroupName?: string | undefined;

  /**
   * <p>Information about the client making the request, including compatibility version and SDK version.</p>
   * @public
   */
  clientInfo: ClientInfo | undefined;
}

/**
 * @public
 */
export interface CreateWorkflowRunResponse {
  /**
   * <p>The unique identifier for the created workflow run.</p>
   * @public
   */
  workflowRunId: string | undefined;

  /**
   * <p>The initial status of the workflow run after creation.</p>
   * @public
   */
  status: WorkflowRunStatus | undefined;
}

/**
 * @public
 */
export interface DeleteWorkflowRunRequest {
  /**
   * <p>The name of the workflow definition containing the workflow run.</p>
   * @public
   */
  workflowDefinitionName: string | undefined;

  /**
   * <p>The unique identifier of the workflow run to delete.</p>
   * @public
   */
  workflowRunId: string | undefined;
}

/**
 * @public
 */
export interface DeleteWorkflowRunResponse {
  /**
   * <p>The status of the workflow run after deletion request.</p>
   * @public
   */
  status: WorkflowRunStatus | undefined;
}

/**
 * @public
 */
export interface GetWorkflowRunRequest {
  /**
   * <p>The name of the workflow definition containing the workflow run.</p>
   * @public
   */
  workflowDefinitionName: string | undefined;

  /**
   * <p>The unique identifier of the workflow run to retrieve.</p>
   * @public
   */
  workflowRunId: string | undefined;
}

/**
 * @public
 */
export interface GetWorkflowRunResponse {
  /**
   * <p>The Amazon Resource Name (ARN) of the workflow run.</p>
   * @public
   */
  workflowRunArn: string | undefined;

  /**
   * <p>The unique identifier of the workflow run.</p>
   * @public
   */
  workflowRunId: string | undefined;

  /**
   * <p>The current execution status of the workflow run.</p>
   * @public
   */
  status: WorkflowRunStatus | undefined;

  /**
   * <p>The timestamp when the workflow run started execution.</p>
   * @public
   */
  startedAt: Date | undefined;

  /**
   * <p>The timestamp when the workflow run completed execution, if applicable.</p>
   * @public
   */
  endedAt?: Date | undefined;

  /**
   * <p>The ID of the AI model being used for this workflow run.</p>
   * @public
   */
  modelId: string | undefined;

  /**
   * <p>The CloudWatch log group name for this workflow run's logs.</p>
   * @public
   */
  logGroupName?: string | undefined;
}

/**
 * @public
 */
export interface ListWorkflowRunsRequest {
  /**
   * <p>The name of the workflow definition to list workflow runs for.</p>
   * @public
   */
  workflowDefinitionName: string | undefined;

  /**
   * <p>The maximum number of workflow runs to return in a single response.</p>
   * @public
   */
  maxResults?: number | undefined;

  /**
   * <p>The token for retrieving the next page of results.</p>
   * @public
   */
  nextToken?: string | undefined;

  /**
   * <p>The sort order for the returned workflow runs (ascending or descending).</p>
   * @public
   */
  sortOrder?: SortOrder | undefined;
}

/**
 * <p>Summary information about a workflow run, including execution status and timing.</p>
 * @public
 */
export interface WorkflowRunSummary {
  /**
   * <p>The Amazon Resource Name (ARN) of the workflow run.</p>
   * @public
   */
  workflowRunArn: string | undefined;

  /**
   * <p>The unique identifier of the workflow run.</p>
   * @public
   */
  workflowRunId: string | undefined;

  /**
   * <p>The current execution status of the workflow run.</p>
   * @public
   */
  status: WorkflowRunStatus | undefined;

  /**
   * <p>The timestamp when the workflow run started execution.</p>
   * @public
   */
  startedAt: Date | undefined;

  /**
   * <p>The timestamp when the workflow run completed execution, if applicable.</p>
   * @public
   */
  endedAt?: Date | undefined;

  /**
   * <p>The location where trace information for this workflow run is stored.</p>
   * @public
   */
  traceLocation?: TraceLocation | undefined;
}

/**
 * @public
 */
export interface ListWorkflowRunsResponse {
  /**
   * <p>A list of summary information for workflow runs.</p>
   * @public
   */
  workflowRunSummaries: WorkflowRunSummary[] | undefined;

  /**
   * <p>The token for retrieving the next page of results, if available.</p>
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * @public
 */
export interface UpdateWorkflowRunRequest {
  /**
   * <p>The name of the workflow definition containing the workflow run.</p>
   * @public
   */
  workflowDefinitionName: string | undefined;

  /**
   * <p>The unique identifier of the workflow run to update.</p>
   * @public
   */
  workflowRunId: string | undefined;

  /**
   * <p>The new status to set for the workflow run.</p>
   * @public
   */
  status: WorkflowRunStatus | undefined;
}

/**
 * @public
 */
export interface UpdateWorkflowRunResponse {}
