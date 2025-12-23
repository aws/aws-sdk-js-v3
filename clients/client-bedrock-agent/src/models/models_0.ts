// smithy-typescript generated code
import { DocumentType as __DocumentType } from "@smithy/types";

import {
  ActionGroupSignature,
  ActionGroupState,
  AgentAliasStatus,
  AgentCollaboration,
  AgentStatus,
  AliasInvocationState,
  CachePointType,
  ChunkingStrategy,
  ConcurrencyType,
  ConfluenceAuthType,
  ConfluenceHostType,
  ContentDataSourceType,
  ContextEnrichmentType,
  ConversationRole,
  CrawlFilterConfigurationType,
  CreationMode,
  CustomControlMethod,
  CustomSourceType,
  DataDeletionPolicy,
  DataSourceStatus,
  DataSourceType,
  DocumentStatus,
  EnrichmentStrategyMethod,
  FlowConnectionType,
  FlowNodeInputCategory,
  FlowNodeIODataType,
  FlowStatus,
  FlowValidationSeverity,
  FlowValidationType,
  IncludeExclude,
  IncompatibleLoopNodeType,
  IngestionJobFilterAttribute,
  IngestionJobFilterOperator,
  IngestionJobSortByAttribute,
  IngestionJobStatus,
  InlineContentType,
  KnowledgeBaseState,
  MemoryType,
  MetadataSourceType,
  MetadataValueType,
  OrchestrationType,
  ParsingModality,
  ParsingStrategy,
  PerformanceConfigLatency,
  PromptState,
  PromptTemplateType,
  PromptType,
  QueryEngineType,
  RedshiftProvisionedAuthType,
  RedshiftQueryEngineStorageType,
  RedshiftQueryEngineType,
  RedshiftServerlessAuthType,
  RelayConversationHistory,
  RequireConfirmation,
  RerankingMetadataSelectionMode,
  SalesforceAuthType,
  SharePointAuthType,
  SharePointHostType,
  SortOrder,
  StepType,
  SupportedLanguages,
  Type,
  VectorSearchRerankingConfigurationType,
  WebScopeType,
} from "./enums";

/**
 * <p>Contains details about the Lambda function containing the business logic that is carried out upon invoking the action or the custom control method for handling the information elicited from the user.</p>
 * @public
 */
export type ActionGroupExecutor =
  | ActionGroupExecutor.CustomControlMember
  | ActionGroupExecutor.LambdaMember
  | ActionGroupExecutor.$UnknownMember;

/**
 * @public
 */
export namespace ActionGroupExecutor {
  /**
   * <p>The Amazon Resource Name (ARN) of the Lambda function containing the business logic that is carried out upon invoking the action.</p>
   * @public
   */
  export interface LambdaMember {
    lambda: string;
    customControl?: never;
    $unknown?: never;
  }

  /**
   * <p>To return the action group invocation results directly in the <code>InvokeAgent</code> response, specify <code>RETURN_CONTROL</code>.</p>
   * @public
   */
  export interface CustomControlMember {
    lambda?: never;
    customControl: CustomControlMethod;
    $unknown?: never;
  }

  /**
   * @public
   */
  export interface $UnknownMember {
    lambda?: never;
    customControl?: never;
    $unknown: [string, any];
  }

  /**
   * @deprecated unused in schema-serde mode.
   *
   */
  export interface Visitor<T> {
    lambda: (value: string) => T;
    customControl: (value: CustomControlMethod) => T;
    _: (name: string, value: any) => T;
  }
}

/**
 * <p>The identifier information for an Amazon S3 bucket.</p>
 * @public
 */
export interface S3Identifier {
  /**
   * <p>The name of the S3 bucket.</p>
   * @public
   */
  s3BucketName?: string | undefined;

  /**
   * <p>The S3 object key for the S3 resource.</p>
   * @public
   */
  s3ObjectKey?: string | undefined;
}

/**
 * <p>Contains details about the OpenAPI schema for the action group. For more information, see <a href="https://docs.aws.amazon.com/bedrock/latest/userguide/agents-api-schema.html">Action group OpenAPI schemas</a>. You can either include the schema directly in the <code>payload</code> field or you can upload it to an S3 bucket and specify the S3 bucket location in the <code>s3</code> field.</p>
 * @public
 */
export type APISchema =
  | APISchema.PayloadMember
  | APISchema.S3Member
  | APISchema.$UnknownMember;

/**
 * @public
 */
export namespace APISchema {
  /**
   * <p>Contains details about the S3 object containing the OpenAPI schema for the action group. For more information, see <a href="https://docs.aws.amazon.com/bedrock/latest/userguide/agents-api-schema.html">Action group OpenAPI schemas</a>.</p>
   * @public
   */
  export interface S3Member {
    s3: S3Identifier;
    payload?: never;
    $unknown?: never;
  }

  /**
   * <p>The JSON or YAML-formatted payload defining the OpenAPI schema for the action group. For more information, see <a href="https://docs.aws.amazon.com/bedrock/latest/userguide/agents-api-schema.html">Action group OpenAPI schemas</a>.</p>
   * @public
   */
  export interface PayloadMember {
    s3?: never;
    payload: string;
    $unknown?: never;
  }

  /**
   * @public
   */
  export interface $UnknownMember {
    s3?: never;
    payload?: never;
    $unknown: [string, any];
  }

  /**
   * @deprecated unused in schema-serde mode.
   *
   */
  export interface Visitor<T> {
    s3: (value: S3Identifier) => T;
    payload: (value: string) => T;
    _: (name: string, value: any) => T;
  }
}

/**
 * <p>Contains details about a parameter in a function for an action group.</p> <p>This data type is used in the following API operations:</p> <ul> <li> <p> <a href="https://docs.aws.amazon.com/bedrock/latest/APIReference/API_agent_CreateAgentActionGroup.html#API_agent_CreateAgentActionGroup_RequestSyntax">CreateAgentActionGroup request</a> </p> </li> <li> <p> <a href="https://docs.aws.amazon.com/bedrock/latest/APIReference/API_agent_CreateAgentActionGroup.html#API_agent_CreateAgentActionGroup_ResponseSyntax">CreateAgentActionGroup response</a> </p> </li> <li> <p> <a href="https://docs.aws.amazon.com/bedrock/latest/APIReference/API_agent_UpdateAgentActionGroup.html#API_agent_UpdateAgentActionGroup_RequestSyntax">UpdateAgentActionGroup request</a> </p> </li> <li> <p> <a href="https://docs.aws.amazon.com/bedrock/latest/APIReference/API_agent_UpdateAgentActionGroup.html#API_agent_UpdateAgentActionGroup_ResponseSyntax">UpdateAgentActionGroup response</a> </p> </li> <li> <p> <a href="https://docs.aws.amazon.com/bedrock/latest/APIReference/API_agent_GetAgentActionGroup.html#API_agent_GetAgentActionGroup_ResponseSyntax">GetAgentActionGroup response</a> </p> </li> </ul>
 * @public
 */
export interface ParameterDetail {
  /**
   * <p>A description of the parameter. Helps the foundation model determine how to elicit the parameters from the user.</p>
   * @public
   */
  description?: string | undefined;

  /**
   * <p>The data type of the parameter.</p>
   * @public
   */
  type: Type | undefined;

  /**
   * <p>Whether the parameter is required for the agent to complete the function for action group invocation.</p>
   * @public
   */
  required?: boolean | undefined;
}

/**
 * <p>Defines parameters that the agent needs to invoke from the user to complete the function. Corresponds to an action in an action group.</p> <p>This data type is used in the following API operations:</p> <ul> <li> <p> <a href="https://docs.aws.amazon.com/bedrock/latest/APIReference/API_agent_CreateAgentActionGroup.html#API_agent_CreateAgentActionGroup_RequestSyntax">CreateAgentActionGroup request</a> </p> </li> <li> <p> <a href="https://docs.aws.amazon.com/bedrock/latest/APIReference/API_agent_CreateAgentActionGroup.html#API_agent_CreateAgentActionGroup_ResponseSyntax">CreateAgentActionGroup response</a> </p> </li> <li> <p> <a href="https://docs.aws.amazon.com/bedrock/latest/APIReference/API_agent_UpdateAgentActionGroup.html#API_agent_UpdateAgentActionGroup_RequestSyntax">UpdateAgentActionGroup request</a> </p> </li> <li> <p> <a href="https://docs.aws.amazon.com/bedrock/latest/APIReference/API_agent_UpdateAgentActionGroup.html#API_agent_UpdateAgentActionGroup_ResponseSyntax">UpdateAgentActionGroup response</a> </p> </li> <li> <p> <a href="https://docs.aws.amazon.com/bedrock/latest/APIReference/API_agent_GetAgentActionGroup.html#API_agent_GetAgentActionGroup_ResponseSyntax">GetAgentActionGroup response</a> </p> </li> </ul>
 * @public
 */
export interface Function {
  /**
   * <p>A name for the function.</p>
   * @public
   */
  name: string | undefined;

  /**
   * <p>A description of the function and its purpose.</p>
   * @public
   */
  description?: string | undefined;

  /**
   * <p>The parameters that the agent elicits from the user to fulfill the function.</p>
   * @public
   */
  parameters?: Record<string, ParameterDetail> | undefined;

  /**
   * <p>Contains information if user confirmation is required to invoke the function.</p>
   * @public
   */
  requireConfirmation?: RequireConfirmation | undefined;
}

/**
 * <p>Defines functions that each define parameters that the agent needs to invoke from the user. Each function represents an action in an action group.</p> <p>This data type is used in the following API operations:</p> <ul> <li> <p> <a href="https://docs.aws.amazon.com/bedrock/latest/APIReference/API_agent_CreateAgentActionGroup.html#API_agent_CreateAgentActionGroup_RequestSyntax">CreateAgentActionGroup request</a> </p> </li> <li> <p> <a href="https://docs.aws.amazon.com/bedrock/latest/APIReference/API_agent_CreateAgentActionGroup.html#API_agent_CreateAgentActionGroup_ResponseSyntax">CreateAgentActionGroup response</a> </p> </li> <li> <p> <a href="https://docs.aws.amazon.com/bedrock/latest/APIReference/API_agent_UpdateAgentActionGroup.html#API_agent_UpdateAgentActionGroup_RequestSyntax">UpdateAgentActionGroup request</a> </p> </li> <li> <p> <a href="https://docs.aws.amazon.com/bedrock/latest/APIReference/API_agent_UpdateAgentActionGroup.html#API_agent_UpdateAgentActionGroup_ResponseSyntax">UpdateAgentActionGroup response</a> </p> </li> <li> <p> <a href="https://docs.aws.amazon.com/bedrock/latest/APIReference/API_agent_GetAgentActionGroup.html#API_agent_GetAgentActionGroup_ResponseSyntax">GetAgentActionGroup response</a> </p> </li> </ul>
 * @public
 */
export type FunctionSchema =
  | FunctionSchema.FunctionsMember
  | FunctionSchema.$UnknownMember;

/**
 * @public
 */
export namespace FunctionSchema {
  /**
   * <p>A list of functions that each define an action in the action group.</p>
   * @public
   */
  export interface FunctionsMember {
    functions: Function[];
    $unknown?: never;
  }

  /**
   * @public
   */
  export interface $UnknownMember {
    functions?: never;
    $unknown: [string, any];
  }

  /**
   * @deprecated unused in schema-serde mode.
   *
   */
  export interface Visitor<T> {
    functions: (value: Function[]) => T;
    _: (name: string, value: any) => T;
  }
}

/**
 * @public
 */
export interface CreateAgentActionGroupRequest {
  /**
   * <p>The unique identifier of the agent for which to create the action group.</p>
   * @public
   */
  agentId: string | undefined;

  /**
   * <p>The version of the agent for which to create the action group.</p>
   * @public
   */
  agentVersion: string | undefined;

  /**
   * <p>The name to give the action group.</p>
   * @public
   */
  actionGroupName: string | undefined;

  /**
   * <p>A unique, case-sensitive identifier to ensure that the API request completes no more than one time. If this token matches a previous request, Amazon Bedrock ignores the request, but does not return an error. For more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/APIReference/Run_Instance_Idempotency.html">Ensuring idempotency</a>.</p>
   * @public
   */
  clientToken?: string | undefined;

  /**
   * <p>A description of the action group.</p>
   * @public
   */
  description?: string | undefined;

  /**
   * <p>Specify a built-in or computer use action for this action group. If you specify a value, you must leave the <code>description</code>, <code>apiSchema</code>, and <code>actionGroupExecutor</code> fields empty for this action group. </p> <ul> <li> <p>To allow your agent to request the user for additional information when trying to complete a task, set this field to <code>AMAZON.UserInput</code>. </p> </li> <li> <p>To allow your agent to generate, run, and troubleshoot code when trying to complete a task, set this field to <code>AMAZON.CodeInterpreter</code>.</p> </li> <li> <p>To allow your agent to use an Anthropic computer use tool, specify one of the following values. </p> <important> <p> Computer use is a new Anthropic Claude model capability (in beta) available with Anthropic Claude 3.7 Sonnet and Claude 3.5 Sonnet v2 only. When operating computer use functionality, we recommend taking additional security precautions, such as executing computer actions in virtual environments with restricted data access and limited internet connectivity. For more information, see <a href="https://docs.aws.amazon.com/bedrock/latest/userguide/agents-computer-use.html">Configure an Amazon Bedrock Agent to complete tasks with computer use tools</a>. </p> </important> <ul> <li> <p> <code>ANTHROPIC.Computer</code> - Gives the agent permission to use the mouse and keyboard and take screenshots.</p> </li> <li> <p> <code>ANTHROPIC.TextEditor</code> - Gives the agent permission to view, create and edit files.</p> </li> <li> <p> <code>ANTHROPIC.Bash</code> - Gives the agent permission to run commands in a bash shell.</p> </li> </ul> </li> </ul>
   * @public
   */
  parentActionGroupSignature?: ActionGroupSignature | undefined;

  /**
   * <p>The configuration settings for a computer use action.</p> <important> <p> Computer use is a new Anthropic Claude model capability (in beta) available with Anthropic Claude 3.7 Sonnet and Claude 3.5 Sonnet v2 only. For more information, see <a href="https://docs.aws.amazon.com/bedrock/latest/userguide/agents-computer-use.html">Configure an Amazon Bedrock Agent to complete tasks with computer use tools</a>. </p> </important>
   * @public
   */
  parentActionGroupSignatureParams?: Record<string, string> | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the Lambda function containing the business logic that is carried out upon invoking the action or the custom control method for handling the information elicited from the user.</p>
   * @public
   */
  actionGroupExecutor?: ActionGroupExecutor | undefined;

  /**
   * <p>Contains either details about the S3 object containing the OpenAPI schema for the action group or the JSON or YAML-formatted payload defining the schema. For more information, see <a href="https://docs.aws.amazon.com/bedrock/latest/userguide/agents-api-schema.html">Action group OpenAPI schemas</a>.</p>
   * @public
   */
  apiSchema?: APISchema | undefined;

  /**
   * <p>Specifies whether the action group is available for the agent to invoke or not when sending an <a href="https://docs.aws.amazon.com/bedrock/latest/APIReference/API_agent-runtime_InvokeAgent.html">InvokeAgent</a> request.</p>
   * @public
   */
  actionGroupState?: ActionGroupState | undefined;

  /**
   * <p>Contains details about the function schema for the action group or the JSON or YAML-formatted payload defining the schema.</p>
   * @public
   */
  functionSchema?: FunctionSchema | undefined;
}

/**
 * <p>Contains details about an action group.</p>
 * @public
 */
export interface AgentActionGroup {
  /**
   * <p>The unique identifier of the agent to which the action group belongs.</p>
   * @public
   */
  agentId: string | undefined;

  /**
   * <p>The version of the agent to which the action group belongs.</p>
   * @public
   */
  agentVersion: string | undefined;

  /**
   * <p>The unique identifier of the action group.</p>
   * @public
   */
  actionGroupId: string | undefined;

  /**
   * <p>The name of the action group.</p>
   * @public
   */
  actionGroupName: string | undefined;

  /**
   * <p>A unique, case-sensitive identifier to ensure that the API request completes no more than one time. If this token matches a previous request, Amazon Bedrock ignores the request, but does not return an error. For more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/APIReference/Run_Instance_Idempotency.html">Ensuring idempotency</a>.</p>
   * @public
   */
  clientToken?: string | undefined;

  /**
   * <p>The description of the action group.</p>
   * @public
   */
  description?: string | undefined;

  /**
   * <p>The time at which the action group was created.</p>
   * @public
   */
  createdAt: Date | undefined;

  /**
   * <p>The time at which the action group was last updated.</p>
   * @public
   */
  updatedAt: Date | undefined;

  /**
   * <p>If this field is set as <code>AMAZON.UserInput</code>, the agent can request the user for additional information when trying to complete a task. The <code>description</code>, <code>apiSchema</code>, and <code>actionGroupExecutor</code> fields must be blank for this action group.</p> <p>During orchestration, if the agent determines that it needs to invoke an API in an action group, but doesn't have enough information to complete the API request, it will invoke this action group instead and return an <a href="https://docs.aws.amazon.com/bedrock/latest/APIReference/API_agent-runtime_Observation.html">Observation</a> reprompting the user for more information.</p>
   * @public
   */
  parentActionSignature?: ActionGroupSignature | undefined;

  /**
   * <p>The configuration settings for a computer use action.</p> <important> <p> Computer use is a new Anthropic Claude model capability (in beta) available with Claude 3.7 Sonnet and Claude 3.5 Sonnet v2 only. For more information, see <a href="https://docs.aws.amazon.com/bedrock/latest/userguide/agents-computer-use.html">Configure an Amazon Bedrock Agent to complete tasks with computer use tools</a>. </p> </important>
   * @public
   */
  parentActionGroupSignatureParams?: Record<string, string> | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the Lambda function containing the business logic that is carried out upon invoking the action or the custom control method for handling the information elicited from the user.</p>
   * @public
   */
  actionGroupExecutor?: ActionGroupExecutor | undefined;

  /**
   * <p>Contains either details about the S3 object containing the OpenAPI schema for the action group or the JSON or YAML-formatted payload defining the schema. For more information, see <a href="https://docs.aws.amazon.com/bedrock/latest/userguide/agents-api-schema.html">Action group OpenAPI schemas</a>.</p>
   * @public
   */
  apiSchema?: APISchema | undefined;

  /**
   * <p>Defines functions that each define parameters that the agent needs to invoke from the user. Each function represents an action in an action group.</p>
   * @public
   */
  functionSchema?: FunctionSchema | undefined;

  /**
   * <p>Specifies whether the action group is available for the agent to invoke or not when sending an <a href="https://docs.aws.amazon.com/bedrock/latest/APIReference/API_agent-runtime_InvokeAgent.html">InvokeAgent</a> request.</p>
   * @public
   */
  actionGroupState: ActionGroupState | undefined;
}

/**
 * @public
 */
export interface CreateAgentActionGroupResponse {
  /**
   * <p>Contains details about the action group that was created.</p>
   * @public
   */
  agentActionGroup: AgentActionGroup | undefined;
}

/**
 * <p>Stores information about a field passed inside a request that resulted in an validation error.</p>
 * @public
 */
export interface ValidationExceptionField {
  /**
   * <p>The name of the field.</p>
   * @public
   */
  name: string | undefined;

  /**
   * <p>A message describing why this field failed validation.</p>
   * @public
   */
  message: string | undefined;
}

/**
 * @public
 */
export interface DeleteAgentActionGroupRequest {
  /**
   * <p>The unique identifier of the agent that the action group belongs to.</p>
   * @public
   */
  agentId: string | undefined;

  /**
   * <p>The version of the agent that the action group belongs to.</p>
   * @public
   */
  agentVersion: string | undefined;

  /**
   * <p>The unique identifier of the action group to delete.</p>
   * @public
   */
  actionGroupId: string | undefined;

  /**
   * <p>By default, this value is <code>false</code> and deletion is stopped if the resource is in use. If you set it to <code>true</code>, the resource will be deleted even if the resource is in use.</p>
   * @public
   */
  skipResourceInUseCheck?: boolean | undefined;
}

/**
 * @public
 */
export interface DeleteAgentActionGroupResponse {}

/**
 * @public
 */
export interface GetAgentActionGroupRequest {
  /**
   * <p>The unique identifier of the agent that the action group belongs to.</p>
   * @public
   */
  agentId: string | undefined;

  /**
   * <p>The version of the agent that the action group belongs to.</p>
   * @public
   */
  agentVersion: string | undefined;

  /**
   * <p>The unique identifier of the action group for which to get information.</p>
   * @public
   */
  actionGroupId: string | undefined;
}

/**
 * @public
 */
export interface GetAgentActionGroupResponse {
  /**
   * <p>Contains details about the action group.</p>
   * @public
   */
  agentActionGroup: AgentActionGroup | undefined;
}

/**
 * @public
 */
export interface ListAgentActionGroupsRequest {
  /**
   * <p>The unique identifier of the agent.</p>
   * @public
   */
  agentId: string | undefined;

  /**
   * <p>The version of the agent.</p>
   * @public
   */
  agentVersion: string | undefined;

  /**
   * <p>The maximum number of results to return in the response. If the total number of results is greater than this value, use the token returned in the response in the <code>nextToken</code> field when making another request to return the next batch of results.</p>
   * @public
   */
  maxResults?: number | undefined;

  /**
   * <p>If the total number of results is greater than the <code>maxResults</code> value provided in the request, enter the token returned in the <code>nextToken</code> field in the response in this field to return the next batch of results.</p>
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * <p>Contains details about an action group.</p>
 * @public
 */
export interface ActionGroupSummary {
  /**
   * <p>The unique identifier of the action group.</p>
   * @public
   */
  actionGroupId: string | undefined;

  /**
   * <p>The name of the action group.</p>
   * @public
   */
  actionGroupName: string | undefined;

  /**
   * <p>Specifies whether the action group is available for the agent to invoke or not when sending an <a href="https://docs.aws.amazon.com/bedrock/latest/APIReference/API_agent-runtime_InvokeAgent.html">InvokeAgent</a> request.</p>
   * @public
   */
  actionGroupState: ActionGroupState | undefined;

  /**
   * <p>The description of the action group.</p>
   * @public
   */
  description?: string | undefined;

  /**
   * <p>The time at which the action group was last updated.</p>
   * @public
   */
  updatedAt: Date | undefined;
}

/**
 * @public
 */
export interface ListAgentActionGroupsResponse {
  /**
   * <p>A list of objects, each of which contains information about an action group.</p>
   * @public
   */
  actionGroupSummaries: ActionGroupSummary[] | undefined;

  /**
   * <p>If the total number of results is greater than the <code>maxResults</code> value provided in the request, use this token when making another request in the <code>nextToken</code> field to return the next batch of results.</p>
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * @public
 */
export interface UpdateAgentActionGroupRequest {
  /**
   * <p>The unique identifier of the agent for which to update the action group.</p>
   * @public
   */
  agentId: string | undefined;

  /**
   * <p>The unique identifier of the agent version for which to update the action group.</p>
   * @public
   */
  agentVersion: string | undefined;

  /**
   * <p>The unique identifier of the action group.</p>
   * @public
   */
  actionGroupId: string | undefined;

  /**
   * <p>Specifies a new name for the action group.</p>
   * @public
   */
  actionGroupName: string | undefined;

  /**
   * <p>Specifies a new name for the action group.</p>
   * @public
   */
  description?: string | undefined;

  /**
   * <p>Update the built-in or computer use action for this action group. If you specify a value, you must leave the <code>description</code>, <code>apiSchema</code>, and <code>actionGroupExecutor</code> fields empty for this action group. </p> <ul> <li> <p>To allow your agent to request the user for additional information when trying to complete a task, set this field to <code>AMAZON.UserInput</code>. </p> </li> <li> <p>To allow your agent to generate, run, and troubleshoot code when trying to complete a task, set this field to <code>AMAZON.CodeInterpreter</code>.</p> </li> <li> <p>To allow your agent to use an Anthropic computer use tool, specify one of the following values. </p> <important> <p> Computer use is a new Anthropic Claude model capability (in beta) available with Anthropic Claude 3.7 Sonnet and Claude 3.5 Sonnet v2 only. When operating computer use functionality, we recommend taking additional security precautions, such as executing computer actions in virtual environments with restricted data access and limited internet connectivity. For more information, see <a href="https://docs.aws.amazon.com/bedrock/latest/userguide/agents-computer-use.html">Configure an Amazon Bedrock Agent to complete tasks with computer use tools</a>. </p> </important> <ul> <li> <p> <code>ANTHROPIC.Computer</code> - Gives the agent permission to use the mouse and keyboard and take screenshots.</p> </li> <li> <p> <code>ANTHROPIC.TextEditor</code> - Gives the agent permission to view, create and edit files.</p> </li> <li> <p> <code>ANTHROPIC.Bash</code> - Gives the agent permission to run commands in a bash shell.</p> </li> </ul> </li> </ul> <p>During orchestration, if your agent determines that it needs to invoke an API in an action group, but doesn't have enough information to complete the API request, it will invoke this action group instead and return an <a href="https://docs.aws.amazon.com/bedrock/latest/APIReference/API_agent-runtime_Observation.html">Observation</a> reprompting the user for more information.</p>
   * @public
   */
  parentActionGroupSignature?: ActionGroupSignature | undefined;

  /**
   * <p>The configuration settings for a computer use action.</p> <important> <p> Computer use is a new Anthropic Claude model capability (in beta) available with Claude 3.7 Sonnet and Claude 3.5 Sonnet v2 only. For more information, see <a href="https://docs.aws.amazon.com/bedrock/latest/userguide/agents-computer-use.html">Configure an Amazon Bedrock Agent to complete tasks with computer use tools</a>. </p> </important>
   * @public
   */
  parentActionGroupSignatureParams?: Record<string, string> | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the Lambda function containing the business logic that is carried out upon invoking the action.</p>
   * @public
   */
  actionGroupExecutor?: ActionGroupExecutor | undefined;

  /**
   * <p>Specifies whether the action group is available for the agent to invoke or not when sending an <a href="https://docs.aws.amazon.com/bedrock/latest/APIReference/API_agent-runtime_InvokeAgent.html">InvokeAgent</a> request.</p>
   * @public
   */
  actionGroupState?: ActionGroupState | undefined;

  /**
   * <p>Contains either details about the S3 object containing the OpenAPI schema for the action group or the JSON or YAML-formatted payload defining the schema. For more information, see <a href="https://docs.aws.amazon.com/bedrock/latest/userguide/agents-api-schema.html">Action group OpenAPI schemas</a>.</p>
   * @public
   */
  apiSchema?: APISchema | undefined;

  /**
   * <p>Contains details about the function schema for the action group or the JSON or YAML-formatted payload defining the schema.</p>
   * @public
   */
  functionSchema?: FunctionSchema | undefined;
}

/**
 * @public
 */
export interface UpdateAgentActionGroupResponse {
  /**
   * <p>Contains details about the action group that was updated.</p>
   * @public
   */
  agentActionGroup: AgentActionGroup | undefined;
}

/**
 * <p> Contains details about the Lambda function containing the orchestration logic carried out upon invoking the custom orchestration. </p>
 * @public
 */
export type OrchestrationExecutor =
  | OrchestrationExecutor.LambdaMember
  | OrchestrationExecutor.$UnknownMember;

/**
 * @public
 */
export namespace OrchestrationExecutor {
  /**
   * <p> The Amazon Resource Name (ARN) of the Lambda function containing the business logic that is carried out upon invoking the action. </p>
   * @public
   */
  export interface LambdaMember {
    lambda: string;
    $unknown?: never;
  }

  /**
   * @public
   */
  export interface $UnknownMember {
    lambda?: never;
    $unknown: [string, any];
  }

  /**
   * @deprecated unused in schema-serde mode.
   *
   */
  export interface Visitor<T> {
    lambda: (value: string) => T;
    _: (name: string, value: any) => T;
  }
}

/**
 * <p> Details of custom orchestration. </p>
 * @public
 */
export interface CustomOrchestration {
  /**
   * <p> The structure of the executor invoking the actions in custom orchestration. </p>
   * @public
   */
  executor?: OrchestrationExecutor | undefined;
}

/**
 * <p>Details about a guardrail associated with a resource.</p>
 * @public
 */
export interface GuardrailConfiguration {
  /**
   * <p>The unique identifier of the guardrail.</p>
   * @public
   */
  guardrailIdentifier?: string | undefined;

  /**
   * <p>The version of the guardrail.</p>
   * @public
   */
  guardrailVersion?: string | undefined;
}

/**
 * <p>Configuration for SESSION_SUMMARY memory type enabled for the agent.</p>
 * @public
 */
export interface SessionSummaryConfiguration {
  /**
   * <p>Maximum number of recent session summaries to include in the agent's prompt context.</p>
   * @public
   */
  maxRecentSessions?: number | undefined;
}

/**
 * <p>Details of the memory configuration.</p>
 * @public
 */
export interface MemoryConfiguration {
  /**
   * <p>The type of memory that is stored. </p>
   * @public
   */
  enabledMemoryTypes: MemoryType[] | undefined;

  /**
   * <p>The number of days the agent is configured to retain the conversational context.</p>
   * @public
   */
  storageDays?: number | undefined;

  /**
   * <p>Contains the configuration for SESSION_SUMMARY memory type enabled for the agent. </p>
   * @public
   */
  sessionSummaryConfiguration?: SessionSummaryConfiguration | undefined;
}

/**
 * <p>Contains inference parameters to use when the agent invokes a foundation model in the part of the agent sequence defined by the <code>promptType</code>. For more information, see <a href="https://docs.aws.amazon.com/bedrock/latest/userguide/model-parameters.html">Inference parameters for foundation models</a>.</p>
 * @public
 */
export interface InferenceConfiguration {
  /**
   * <p>The likelihood of the model selecting higher-probability options while generating a response. A lower value makes the model more likely to choose higher-probability options, while a higher value makes the model more likely to choose lower-probability options.</p>
   * @public
   */
  temperature?: number | undefined;

  /**
   * <p>While generating a response, the model determines the probability of the following token at each point of generation. The value that you set for <code>Top P</code> determines the number of most-likely candidates from which the model chooses the next token in the sequence. For example, if you set <code>topP</code> to 0.8, the model only selects the next token from the top 80% of the probability distribution of next tokens.</p>
   * @public
   */
  topP?: number | undefined;

  /**
   * <p>While generating a response, the model determines the probability of the following token at each point of generation. The value that you set for <code>topK</code> is the number of most-likely candidates from which the model chooses the next token in the sequence. For example, if you set <code>topK</code> to 50, the model selects the next token from among the top 50 most likely choices.</p>
   * @public
   */
  topK?: number | undefined;

  /**
   * <p>The maximum number of tokens to allow in the generated response.</p>
   * @public
   */
  maximumLength?: number | undefined;

  /**
   * <p>A list of stop sequences. A stop sequence is a sequence of characters that causes the model to stop generating the response.</p>
   * @public
   */
  stopSequences?: string[] | undefined;
}

/**
 * <p>Contains configurations to override a prompt template in one part of an agent sequence. For more information, see <a href="https://docs.aws.amazon.com/bedrock/latest/userguide/advanced-prompts.html">Advanced prompts</a>.</p>
 * @public
 */
export interface PromptConfiguration {
  /**
   * <p>The step in the agent sequence that this prompt configuration applies to.</p>
   * @public
   */
  promptType?: PromptType | undefined;

  /**
   * <p>Specifies whether to override the default prompt template for this <code>promptType</code>. Set this value to <code>OVERRIDDEN</code> to use the prompt that you provide in the <code>basePromptTemplate</code>. If you leave it as <code>DEFAULT</code>, the agent uses a default prompt template.</p>
   * @public
   */
  promptCreationMode?: CreationMode | undefined;

  /**
   * <p>Specifies whether to allow the agent to carry out the step specified in the <code>promptType</code>. If you set this value to <code>DISABLED</code>, the agent skips that step. The default state for each <code>promptType</code> is as follows.</p> <ul> <li> <p> <code>PRE_PROCESSING</code> – <code>DISABLED</code> </p> </li> <li> <p> <code>ORCHESTRATION</code> – <code>ENABLED</code> </p> </li> <li> <p> <code>KNOWLEDGE_BASE_RESPONSE_GENERATION</code> – <code>ENABLED</code> </p> </li> <li> <p> <code>POST_PROCESSING</code> – <code>DISABLED</code> </p> </li> </ul>
   * @public
   */
  promptState?: PromptState | undefined;

  /**
   * <p>Defines the prompt template with which to replace the default prompt template. You can use placeholder variables in the base prompt template to customize the prompt. For more information, see <a href="https://docs.aws.amazon.com/bedrock/latest/userguide/prompt-placeholders.html">Prompt template placeholder variables</a>. For more information, see <a href="https://docs.aws.amazon.com/bedrock/latest/userguide/advanced-prompts-configure.html">Configure the prompt templates</a>.</p>
   * @public
   */
  basePromptTemplate?: string | undefined;

  /**
   * <p>Contains inference parameters to use when the agent invokes a foundation model in the part of the agent sequence defined by the <code>promptType</code>. For more information, see <a href="https://docs.aws.amazon.com/bedrock/latest/userguide/model-parameters.html">Inference parameters for foundation models</a>.</p>
   * @public
   */
  inferenceConfiguration?: InferenceConfiguration | undefined;

  /**
   * <p>Specifies whether to override the default parser Lambda function when parsing the raw foundation model output in the part of the agent sequence defined by the <code>promptType</code>. If you set the field as <code>OVERRIDDEN</code>, the <code>overrideLambda</code> field in the <a href="https://docs.aws.amazon.com/bedrock/latest/APIReference/API_agent_PromptOverrideConfiguration.html">PromptOverrideConfiguration</a> must be specified with the ARN of a Lambda function.</p>
   * @public
   */
  parserMode?: CreationMode | undefined;

  /**
   * <p>The agent's foundation model.</p>
   * @public
   */
  foundationModel?: string | undefined;

  /**
   * <p>If the Converse or ConverseStream operations support the model, <code>additionalModelRequestFields</code> contains additional inference parameters, beyond the base set of inference parameters in the <code>inferenceConfiguration</code> field. </p> <p>For more information, see <i>Inference request parameters and response fields for foundation models</i> in the Amazon Bedrock user guide.</p>
   * @public
   */
  additionalModelRequestFields?: __DocumentType | undefined;
}

/**
 * <p>Contains configurations to override prompts in different parts of an agent sequence. For more information, see <a href="https://docs.aws.amazon.com/bedrock/latest/userguide/advanced-prompts.html">Advanced prompts</a>.</p>
 * @public
 */
export interface PromptOverrideConfiguration {
  /**
   * <p>Contains configurations to override a prompt template in one part of an agent sequence. For more information, see <a href="https://docs.aws.amazon.com/bedrock/latest/userguide/advanced-prompts.html">Advanced prompts</a>.</p>
   * @public
   */
  promptConfigurations: PromptConfiguration[] | undefined;

  /**
   * <p>The ARN of the Lambda function to use when parsing the raw foundation model output in parts of the agent sequence. If you specify this field, at least one of the <code>promptConfigurations</code> must contain a <code>parserMode</code> value that is set to <code>OVERRIDDEN</code>. For more information, see <a href="https://docs.aws.amazon.com/bedrock/latest/userguide/lambda-parser.html">Parser Lambda function in Amazon Bedrock Agents</a>.</p>
   * @public
   */
  overrideLambda?: string | undefined;
}

/**
 * <p>Contains details about an agent.</p>
 * @public
 */
export interface Agent {
  /**
   * <p>The unique identifier of the agent.</p>
   * @public
   */
  agentId: string | undefined;

  /**
   * <p>The name of the agent.</p>
   * @public
   */
  agentName: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the agent.</p>
   * @public
   */
  agentArn: string | undefined;

  /**
   * <p>The version of the agent.</p>
   * @public
   */
  agentVersion: string | undefined;

  /**
   * <p>A unique, case-sensitive identifier to ensure that the API request completes no more than one time. If this token matches a previous request, Amazon Bedrock ignores the request, but does not return an error. For more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/APIReference/Run_Instance_Idempotency.html">Ensuring idempotency</a>.</p>
   * @public
   */
  clientToken?: string | undefined;

  /**
   * <p>Instructions that tell the agent what it should do and how it should interact with users.</p>
   * @public
   */
  instruction?: string | undefined;

  /**
   * <p>The status of the agent and whether it is ready for use. The following statuses are possible:</p> <ul> <li> <p>CREATING – The agent is being created.</p> </li> <li> <p>PREPARING – The agent is being prepared.</p> </li> <li> <p>PREPARED – The agent is prepared and ready to be invoked.</p> </li> <li> <p>NOT_PREPARED – The agent has been created but not yet prepared.</p> </li> <li> <p>FAILED – The agent API operation failed.</p> </li> <li> <p>UPDATING – The agent is being updated.</p> </li> <li> <p>DELETING – The agent is being deleted.</p> </li> </ul>
   * @public
   */
  agentStatus: AgentStatus | undefined;

  /**
   * <p>The foundation model used for orchestration by the agent.</p>
   * @public
   */
  foundationModel?: string | undefined;

  /**
   * <p>The description of the agent.</p>
   * @public
   */
  description?: string | undefined;

  /**
   * <p> Specifies the orchestration strategy for the agent. </p>
   * @public
   */
  orchestrationType?: OrchestrationType | undefined;

  /**
   * <p> Contains custom orchestration configurations for the agent. </p>
   * @public
   */
  customOrchestration?: CustomOrchestration | undefined;

  /**
   * <p>The number of seconds for which Amazon Bedrock keeps information about a user's conversation with the agent.</p> <p>A user interaction remains active for the amount of time specified. If no conversation occurs during this time, the session expires and Amazon Bedrock deletes any data provided before the timeout.</p>
   * @public
   */
  idleSessionTTLInSeconds: number | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the IAM role with permissions to invoke API operations on the agent.</p>
   * @public
   */
  agentResourceRoleArn: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the KMS key that encrypts the agent.</p>
   * @public
   */
  customerEncryptionKeyArn?: string | undefined;

  /**
   * <p>The time at which the agent was created.</p>
   * @public
   */
  createdAt: Date | undefined;

  /**
   * <p>The time at which the agent was last updated.</p>
   * @public
   */
  updatedAt: Date | undefined;

  /**
   * <p>The time at which the agent was last prepared.</p>
   * @public
   */
  preparedAt?: Date | undefined;

  /**
   * <p>Contains reasons that the agent-related API that you invoked failed.</p>
   * @public
   */
  failureReasons?: string[] | undefined;

  /**
   * <p>Contains recommended actions to take for the agent-related API that you invoked to succeed.</p>
   * @public
   */
  recommendedActions?: string[] | undefined;

  /**
   * <p>Contains configurations to override prompt templates in different parts of an agent sequence. For more information, see <a href="https://docs.aws.amazon.com/bedrock/latest/userguide/advanced-prompts.html">Advanced prompts</a>.</p>
   * @public
   */
  promptOverrideConfiguration?: PromptOverrideConfiguration | undefined;

  /**
   * <p>Details about the guardrail associated with the agent.</p>
   * @public
   */
  guardrailConfiguration?: GuardrailConfiguration | undefined;

  /**
   * <p>Contains memory configuration for the agent.</p>
   * @public
   */
  memoryConfiguration?: MemoryConfiguration | undefined;

  /**
   * <p>The agent's collaboration settings.</p>
   * @public
   */
  agentCollaboration?: AgentCollaboration | undefined;
}

/**
 * <p>Contains details about the routing configuration of the alias.</p>
 * @public
 */
export interface AgentAliasRoutingConfigurationListItem {
  /**
   * <p>The version of the agent with which the alias is associated.</p>
   * @public
   */
  agentVersion?: string | undefined;

  /**
   * <p>Information on the Provisioned Throughput assigned to an agent alias.</p>
   * @public
   */
  provisionedThroughput?: string | undefined;
}

/**
 * <p>Contains details about the history of the alias.</p>
 * @public
 */
export interface AgentAliasHistoryEvent {
  /**
   * <p>Contains details about the version of the agent with which the alias is associated.</p>
   * @public
   */
  routingConfiguration?: AgentAliasRoutingConfigurationListItem[] | undefined;

  /**
   * <p>The date that the alias stopped being associated to the version in the <code>routingConfiguration</code> object</p>
   * @public
   */
  endDate?: Date | undefined;

  /**
   * <p>The date that the alias began being associated to the version in the <code>routingConfiguration</code> object.</p>
   * @public
   */
  startDate?: Date | undefined;
}

/**
 * <p>Contains details about an alias of an agent.</p>
 * @public
 */
export interface AgentAlias {
  /**
   * <p>The unique identifier of the agent.</p>
   * @public
   */
  agentId: string | undefined;

  /**
   * <p>The unique identifier of the alias of the agent.</p>
   * @public
   */
  agentAliasId: string | undefined;

  /**
   * <p>The name of the alias of the agent.</p>
   * @public
   */
  agentAliasName: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the alias of the agent.</p>
   * @public
   */
  agentAliasArn: string | undefined;

  /**
   * <p>A unique, case-sensitive identifier to ensure that the API request completes no more than one time. If this token matches a previous request, Amazon Bedrock ignores the request, but does not return an error. For more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/APIReference/Run_Instance_Idempotency.html">Ensuring idempotency</a>.</p>
   * @public
   */
  clientToken?: string | undefined;

  /**
   * <p>The description of the alias of the agent.</p>
   * @public
   */
  description?: string | undefined;

  /**
   * <p>Contains details about the routing configuration of the alias.</p>
   * @public
   */
  routingConfiguration: AgentAliasRoutingConfigurationListItem[] | undefined;

  /**
   * <p>The time at which the alias of the agent was created.</p>
   * @public
   */
  createdAt: Date | undefined;

  /**
   * <p>The time at which the alias was last updated.</p>
   * @public
   */
  updatedAt: Date | undefined;

  /**
   * <p>Contains details about the history of the alias.</p>
   * @public
   */
  agentAliasHistoryEvents?: AgentAliasHistoryEvent[] | undefined;

  /**
   * <p>The status of the alias of the agent and whether it is ready for use. The following statuses are possible:</p> <ul> <li> <p>CREATING – The agent alias is being created.</p> </li> <li> <p>PREPARED – The agent alias is finished being created or updated and is ready to be invoked.</p> </li> <li> <p>FAILED – The agent alias API operation failed.</p> </li> <li> <p>UPDATING – The agent alias is being updated.</p> </li> <li> <p>DELETING – The agent alias is being deleted.</p> </li> <li> <p>DISSOCIATED - The agent alias has no version associated with it.</p> </li> </ul>
   * @public
   */
  agentAliasStatus: AgentAliasStatus | undefined;

  /**
   * <p>Information on the failure of Provisioned Throughput assigned to an agent alias.</p>
   * @public
   */
  failureReasons?: string[] | undefined;

  /**
   * <p>The invocation state for the agent alias. If the agent alias is running, the value is <code>ACCEPT_INVOCATIONS</code>. If the agent alias is paused, the value is <code>REJECT_INVOCATIONS</code>. Use the <code>UpdateAgentAlias</code> operation to change the invocation state.</p>
   * @public
   */
  aliasInvocationState?: AliasInvocationState | undefined;
}

/**
 * <p>Contains details about an alias of an agent.</p>
 * @public
 */
export interface AgentAliasSummary {
  /**
   * <p>Contains details about </p>
   * @public
   */
  agentAliasId: string | undefined;

  /**
   * <p>The name of the alias.</p>
   * @public
   */
  agentAliasName: string | undefined;

  /**
   * <p>The description of the alias.</p>
   * @public
   */
  description?: string | undefined;

  /**
   * <p>Contains details about the version of the agent with which the alias is associated.</p>
   * @public
   */
  routingConfiguration?: AgentAliasRoutingConfigurationListItem[] | undefined;

  /**
   * <p>The status of the alias.</p>
   * @public
   */
  agentAliasStatus: AgentAliasStatus | undefined;

  /**
   * <p>The time at which the alias of the agent was created.</p>
   * @public
   */
  createdAt: Date | undefined;

  /**
   * <p>The time at which the alias was last updated.</p>
   * @public
   */
  updatedAt: Date | undefined;

  /**
   * <p>The invocation state for the agent alias. If the agent alias is running, the value is <code>ACCEPT_INVOCATIONS</code>. If the agent alias is paused, the value is <code>REJECT_INVOCATIONS</code>. Use the <code>UpdateAgentAlias</code> operation to change the invocation state.</p>
   * @public
   */
  aliasInvocationState?: AliasInvocationState | undefined;
}

/**
 * <p>An agent descriptor.</p>
 * @public
 */
export interface AgentDescriptor {
  /**
   * <p>The agent's alias ARN.</p>
   * @public
   */
  aliasArn?: string | undefined;
}

/**
 * <p>An agent collaborator.</p>
 * @public
 */
export interface AgentCollaborator {
  /**
   * <p>The collaborator's agent ID.</p>
   * @public
   */
  agentId: string | undefined;

  /**
   * <p>The collaborator's agent version.</p>
   * @public
   */
  agentVersion: string | undefined;

  /**
   * <p>The collaborator's agent descriptor.</p>
   * @public
   */
  agentDescriptor: AgentDescriptor | undefined;

  /**
   * <p>The collaborator's collaborator ID.</p>
   * @public
   */
  collaboratorId: string | undefined;

  /**
   * <p>The collaborator's instructions.</p>
   * @public
   */
  collaborationInstruction: string | undefined;

  /**
   * <p>The collaborator's collaborator name.</p>
   * @public
   */
  collaboratorName: string | undefined;

  /**
   * <p>When the collaborator was created.</p>
   * @public
   */
  createdAt: Date | undefined;

  /**
   * <p>When the collaborator was updated.</p>
   * @public
   */
  lastUpdatedAt: Date | undefined;

  /**
   * <p>The collaborator's relay conversation history.</p>
   * @public
   */
  relayConversationHistory?: RelayConversationHistory | undefined;

  /**
   * <p>The collaborator's client token.</p>
   * @public
   */
  clientToken?: string | undefined;
}

/**
 * @public
 */
export interface AssociateAgentCollaboratorRequest {
  /**
   * <p>The agent's ID.</p>
   * @public
   */
  agentId: string | undefined;

  /**
   * <p>An agent version.</p>
   * @public
   */
  agentVersion: string | undefined;

  /**
   * <p>The alias of the collaborator agent.</p>
   * @public
   */
  agentDescriptor: AgentDescriptor | undefined;

  /**
   * <p>A name for the collaborator.</p>
   * @public
   */
  collaboratorName: string | undefined;

  /**
   * <p>Instruction for the collaborator.</p>
   * @public
   */
  collaborationInstruction: string | undefined;

  /**
   * <p>A relay conversation history for the collaborator.</p>
   * @public
   */
  relayConversationHistory?: RelayConversationHistory | undefined;

  /**
   * <p>A client token.</p>
   * @public
   */
  clientToken?: string | undefined;
}

/**
 * @public
 */
export interface AssociateAgentCollaboratorResponse {
  /**
   * <p>Details about the collaborator.</p>
   * @public
   */
  agentCollaborator: AgentCollaborator | undefined;
}

/**
 * @public
 */
export interface DisassociateAgentCollaboratorRequest {
  /**
   * <p>An agent ID.</p>
   * @public
   */
  agentId: string | undefined;

  /**
   * <p>The agent's version.</p>
   * @public
   */
  agentVersion: string | undefined;

  /**
   * <p>The collaborator's ID.</p>
   * @public
   */
  collaboratorId: string | undefined;
}

/**
 * @public
 */
export interface DisassociateAgentCollaboratorResponse {}

/**
 * @public
 */
export interface GetAgentCollaboratorRequest {
  /**
   * <p>The agent's ID.</p>
   * @public
   */
  agentId: string | undefined;

  /**
   * <p>The agent's version.</p>
   * @public
   */
  agentVersion: string | undefined;

  /**
   * <p>The collaborator's ID.</p>
   * @public
   */
  collaboratorId: string | undefined;
}

/**
 * @public
 */
export interface GetAgentCollaboratorResponse {
  /**
   * <p>Details about the collaborator.</p>
   * @public
   */
  agentCollaborator: AgentCollaborator | undefined;
}

/**
 * @public
 */
export interface ListAgentCollaboratorsRequest {
  /**
   * <p>The agent's ID.</p>
   * @public
   */
  agentId: string | undefined;

  /**
   * <p>The agent's version.</p>
   * @public
   */
  agentVersion: string | undefined;

  /**
   * <p>The maximum number of agent collaborators to return in one page of results.</p>
   * @public
   */
  maxResults?: number | undefined;

  /**
   * <p>Specify the pagination token from a previous request to retrieve the next page of results.</p>
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * <p>An agent collaborator summary.</p>
 * @public
 */
export interface AgentCollaboratorSummary {
  /**
   * <p>The collaborator's agent ID.</p>
   * @public
   */
  agentId: string | undefined;

  /**
   * <p>The collaborator's agent version.</p>
   * @public
   */
  agentVersion: string | undefined;

  /**
   * <p>The collaborator's ID.</p>
   * @public
   */
  collaboratorId: string | undefined;

  /**
   * <p>The collaborator's agent descriptor.</p>
   * @public
   */
  agentDescriptor: AgentDescriptor | undefined;

  /**
   * <p>The collaborator's collaboration instruction.</p>
   * @public
   */
  collaborationInstruction: string | undefined;

  /**
   * <p>The collaborator's relay conversation history.</p>
   * @public
   */
  relayConversationHistory: RelayConversationHistory | undefined;

  /**
   * <p>The collaborator's name.</p>
   * @public
   */
  collaboratorName: string | undefined;

  /**
   * <p>When the collaborator was created.</p>
   * @public
   */
  createdAt: Date | undefined;

  /**
   * <p>When the collaborator was last updated.</p>
   * @public
   */
  lastUpdatedAt: Date | undefined;
}

/**
 * @public
 */
export interface ListAgentCollaboratorsResponse {
  /**
   * <p>A list of collaborator summaries.</p>
   * @public
   */
  agentCollaboratorSummaries: AgentCollaboratorSummary[] | undefined;

  /**
   * <p>Specify the pagination token from a previous request to retrieve the next page of results.</p>
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * @public
 */
export interface UpdateAgentCollaboratorRequest {
  /**
   * <p>The agent's ID.</p>
   * @public
   */
  agentId: string | undefined;

  /**
   * <p>The agent's version.</p>
   * @public
   */
  agentVersion: string | undefined;

  /**
   * <p>The collaborator's ID.</p>
   * @public
   */
  collaboratorId: string | undefined;

  /**
   * <p>An agent descriptor for the agent collaborator.</p>
   * @public
   */
  agentDescriptor: AgentDescriptor | undefined;

  /**
   * <p>The collaborator's name.</p>
   * @public
   */
  collaboratorName: string | undefined;

  /**
   * <p>Instruction for the collaborator.</p>
   * @public
   */
  collaborationInstruction: string | undefined;

  /**
   * <p>A relay conversation history for the collaborator.</p>
   * @public
   */
  relayConversationHistory?: RelayConversationHistory | undefined;
}

/**
 * @public
 */
export interface UpdateAgentCollaboratorResponse {
  /**
   * <p>Details about the collaborator.</p>
   * @public
   */
  agentCollaborator: AgentCollaborator | undefined;
}

/**
 * <p>Defines an agent node in your flow. You specify the agent to invoke at this point in the flow. For more information, see <a href="https://docs.aws.amazon.com/bedrock/latest/userguide/flows-nodes.html">Node types in a flow</a> in the Amazon Bedrock User Guide.</p>
 * @public
 */
export interface AgentFlowNodeConfiguration {
  /**
   * <p>The Amazon Resource Name (ARN) of the alias of the agent to invoke.</p>
   * @public
   */
  agentAliasArn: string | undefined;
}

/**
 * <p>Contains details about a knowledge base that is associated with an agent.</p>
 * @public
 */
export interface AgentKnowledgeBase {
  /**
   * <p>The unique identifier of the agent with which the knowledge base is associated.</p>
   * @public
   */
  agentId: string | undefined;

  /**
   * <p>The version of the agent with which the knowledge base is associated.</p>
   * @public
   */
  agentVersion: string | undefined;

  /**
   * <p>The unique identifier of the association between the agent and the knowledge base.</p>
   * @public
   */
  knowledgeBaseId: string | undefined;

  /**
   * <p>The description of the association between the agent and the knowledge base.</p>
   * @public
   */
  description: string | undefined;

  /**
   * <p>The time at which the association between the agent and the knowledge base was created.</p>
   * @public
   */
  createdAt: Date | undefined;

  /**
   * <p>The time at which the association between the agent and the knowledge base was last updated.</p>
   * @public
   */
  updatedAt: Date | undefined;

  /**
   * <p>Specifies whether to use the knowledge base or not when sending an <a href="https://docs.aws.amazon.com/bedrock/latest/APIReference/API_agent-runtime_InvokeAgent.html">InvokeAgent</a> request.</p>
   * @public
   */
  knowledgeBaseState: KnowledgeBaseState | undefined;
}

/**
 * <p>Contains details about a knowledge base associated with an agent.</p>
 * @public
 */
export interface AgentKnowledgeBaseSummary {
  /**
   * <p>The unique identifier of the knowledge base associated with an agent.</p>
   * @public
   */
  knowledgeBaseId: string | undefined;

  /**
   * <p>The description of the knowledge base associated with an agent.</p>
   * @public
   */
  description?: string | undefined;

  /**
   * <p>Specifies whether the agent uses the knowledge base or not when sending an <a href="https://docs.aws.amazon.com/bedrock/latest/APIReference/API_agent-runtime_InvokeAgent.html">InvokeAgent</a> request.</p>
   * @public
   */
  knowledgeBaseState: KnowledgeBaseState | undefined;

  /**
   * <p>The time at which the knowledge base associated with an agent was last updated.</p>
   * @public
   */
  updatedAt: Date | undefined;
}

/**
 * @public
 */
export interface CreateAgentRequest {
  /**
   * <p>A name for the agent that you create.</p>
   * @public
   */
  agentName: string | undefined;

  /**
   * <p>A unique, case-sensitive identifier to ensure that the API request completes no more than one time. If this token matches a previous request, Amazon Bedrock ignores the request, but does not return an error. For more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/APIReference/Run_Instance_Idempotency.html">Ensuring idempotency</a>.</p>
   * @public
   */
  clientToken?: string | undefined;

  /**
   * <p>Instructions that tell the agent what it should do and how it should interact with users.</p>
   * @public
   */
  instruction?: string | undefined;

  /**
   * <p>The identifier for the model that you want to be used for orchestration by the agent you create.</p> <p>The <code>modelId</code> to provide depends on the type of model or throughput that you use:</p> <ul> <li> <p>If you use a base model, specify the model ID or its ARN. For a list of model IDs for base models, see <a href="https://docs.aws.amazon.com/bedrock/latest/userguide/model-ids.html#model-ids-arns">Amazon Bedrock base model IDs (on-demand throughput)</a> in the Amazon Bedrock User Guide.</p> </li> <li> <p>If you use an inference profile, specify the inference profile ID or its ARN. For a list of inference profile IDs, see <a href="https://docs.aws.amazon.com/bedrock/latest/userguide/cross-region-inference-support.html">Supported Regions and models for cross-region inference</a> in the Amazon Bedrock User Guide.</p> </li> <li> <p>If you use a provisioned model, specify the ARN of the Provisioned Throughput. For more information, see <a href="https://docs.aws.amazon.com/bedrock/latest/userguide/prov-thru-use.html">Run inference using a Provisioned Throughput</a> in the Amazon Bedrock User Guide.</p> </li> <li> <p>If you use a custom model, first purchase Provisioned Throughput for it. Then specify the ARN of the resulting provisioned model. For more information, see <a href="https://docs.aws.amazon.com/bedrock/latest/userguide/model-customization-use.html">Use a custom model in Amazon Bedrock</a> in the Amazon Bedrock User Guide.</p> </li> <li> <p>If you use an <a href="https://docs.aws.amazon.com/bedrock/latest/userguide/model-customization-import-model.html">imported model</a>, specify the ARN of the imported model. You can get the model ARN from a successful call to <a href="https://docs.aws.amazon.com/bedrock/latest/APIReference/API_CreateModelImportJob.html">CreateModelImportJob</a> or from the Imported models page in the Amazon Bedrock console.</p> </li> </ul>
   * @public
   */
  foundationModel?: string | undefined;

  /**
   * <p>A description of the agent.</p>
   * @public
   */
  description?: string | undefined;

  /**
   * <p> Specifies the type of orchestration strategy for the agent. This is set to <code>DEFAULT</code> orchestration type, by default. </p>
   * @public
   */
  orchestrationType?: OrchestrationType | undefined;

  /**
   * <p> Contains details of the custom orchestration configured for the agent. </p>
   * @public
   */
  customOrchestration?: CustomOrchestration | undefined;

  /**
   * <p>The number of seconds for which Amazon Bedrock keeps information about a user's conversation with the agent.</p> <p>A user interaction remains active for the amount of time specified. If no conversation occurs during this time, the session expires and Amazon Bedrock deletes any data provided before the timeout.</p>
   * @public
   */
  idleSessionTTLInSeconds?: number | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the IAM role with permissions to invoke API operations on the agent.</p>
   * @public
   */
  agentResourceRoleArn?: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the KMS key with which to encrypt the agent.</p>
   * @public
   */
  customerEncryptionKeyArn?: string | undefined;

  /**
   * <p>Any tags that you want to attach to the agent.</p>
   * @public
   */
  tags?: Record<string, string> | undefined;

  /**
   * <p>Contains configurations to override prompts in different parts of an agent sequence. For more information, see <a href="https://docs.aws.amazon.com/bedrock/latest/userguide/advanced-prompts.html">Advanced prompts</a>.</p>
   * @public
   */
  promptOverrideConfiguration?: PromptOverrideConfiguration | undefined;

  /**
   * <p>The unique Guardrail configuration assigned to the agent when it is created.</p>
   * @public
   */
  guardrailConfiguration?: GuardrailConfiguration | undefined;

  /**
   * <p> Contains the details of the memory configured for the agent.</p>
   * @public
   */
  memoryConfiguration?: MemoryConfiguration | undefined;

  /**
   * <p>The agent's collaboration role.</p>
   * @public
   */
  agentCollaboration?: AgentCollaboration | undefined;
}

/**
 * @public
 */
export interface CreateAgentResponse {
  /**
   * <p>Contains details about the agent created.</p>
   * @public
   */
  agent: Agent | undefined;
}

/**
 * @public
 */
export interface DeleteAgentRequest {
  /**
   * <p>The unique identifier of the agent to delete.</p>
   * @public
   */
  agentId: string | undefined;

  /**
   * <p>By default, this value is <code>false</code> and deletion is stopped if the resource is in use. If you set it to <code>true</code>, the resource will be deleted even if the resource is in use.</p>
   * @public
   */
  skipResourceInUseCheck?: boolean | undefined;
}

/**
 * @public
 */
export interface DeleteAgentResponse {
  /**
   * <p>The unique identifier of the agent that was deleted.</p>
   * @public
   */
  agentId: string | undefined;

  /**
   * <p>The status of the agent.</p>
   * @public
   */
  agentStatus: AgentStatus | undefined;
}

/**
 * @public
 */
export interface GetAgentRequest {
  /**
   * <p>The unique identifier of the agent.</p>
   * @public
   */
  agentId: string | undefined;
}

/**
 * @public
 */
export interface GetAgentResponse {
  /**
   * <p>Contains details about the agent.</p>
   * @public
   */
  agent: Agent | undefined;
}

/**
 * @public
 */
export interface ListAgentsRequest {
  /**
   * <p>The maximum number of results to return in the response. If the total number of results is greater than this value, use the token returned in the response in the <code>nextToken</code> field when making another request to return the next batch of results.</p>
   * @public
   */
  maxResults?: number | undefined;

  /**
   * <p>If the total number of results is greater than the <code>maxResults</code> value provided in the request, enter the token returned in the <code>nextToken</code> field in the response in this field to return the next batch of results.</p>
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * <p>Contains details about an agent.</p>
 * @public
 */
export interface AgentSummary {
  /**
   * <p>The unique identifier of the agent.</p>
   * @public
   */
  agentId: string | undefined;

  /**
   * <p>The name of the agent.</p>
   * @public
   */
  agentName: string | undefined;

  /**
   * <p>The status of the agent.</p>
   * @public
   */
  agentStatus: AgentStatus | undefined;

  /**
   * <p>The description of the agent.</p>
   * @public
   */
  description?: string | undefined;

  /**
   * <p>The time at which the agent was last updated.</p>
   * @public
   */
  updatedAt: Date | undefined;

  /**
   * <p>The latest version of the agent.</p>
   * @public
   */
  latestAgentVersion?: string | undefined;

  /**
   * <p>Details about the guardrail associated with the agent.</p>
   * @public
   */
  guardrailConfiguration?: GuardrailConfiguration | undefined;
}

/**
 * @public
 */
export interface ListAgentsResponse {
  /**
   * <p>A list of objects, each of which contains information about an agent.</p>
   * @public
   */
  agentSummaries: AgentSummary[] | undefined;

  /**
   * <p>If the total number of results is greater than the <code>maxResults</code> value provided in the request, use this token when making another request in the <code>nextToken</code> field to return the next batch of results.</p>
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * @public
 */
export interface PrepareAgentRequest {
  /**
   * <p>The unique identifier of the agent for which to create a <code>DRAFT</code> version.</p>
   * @public
   */
  agentId: string | undefined;
}

/**
 * @public
 */
export interface PrepareAgentResponse {
  /**
   * <p>The unique identifier of the agent for which the <code>DRAFT</code> version was created.</p>
   * @public
   */
  agentId: string | undefined;

  /**
   * <p>The status of the <code>DRAFT</code> version and whether it is ready for use.</p>
   * @public
   */
  agentStatus: AgentStatus | undefined;

  /**
   * <p>The version of the agent.</p>
   * @public
   */
  agentVersion: string | undefined;

  /**
   * <p>The time at which the <code>DRAFT</code> version of the agent was last prepared.</p>
   * @public
   */
  preparedAt: Date | undefined;
}

/**
 * @public
 */
export interface UpdateAgentRequest {
  /**
   * <p>The unique identifier of the agent.</p>
   * @public
   */
  agentId: string | undefined;

  /**
   * <p>Specifies a new name for the agent.</p>
   * @public
   */
  agentName: string | undefined;

  /**
   * <p>Specifies new instructions that tell the agent what it should do and how it should interact with users.</p>
   * @public
   */
  instruction?: string | undefined;

  /**
   * <p>The identifier for the model that you want to be used for orchestration by the agent you create.</p> <p>The <code>modelId</code> to provide depends on the type of model or throughput that you use:</p> <ul> <li> <p>If you use a base model, specify the model ID or its ARN. For a list of model IDs for base models, see <a href="https://docs.aws.amazon.com/bedrock/latest/userguide/model-ids.html#model-ids-arns">Amazon Bedrock base model IDs (on-demand throughput)</a> in the Amazon Bedrock User Guide.</p> </li> <li> <p>If you use an inference profile, specify the inference profile ID or its ARN. For a list of inference profile IDs, see <a href="https://docs.aws.amazon.com/bedrock/latest/userguide/cross-region-inference-support.html">Supported Regions and models for cross-region inference</a> in the Amazon Bedrock User Guide.</p> </li> <li> <p>If you use a provisioned model, specify the ARN of the Provisioned Throughput. For more information, see <a href="https://docs.aws.amazon.com/bedrock/latest/userguide/prov-thru-use.html">Run inference using a Provisioned Throughput</a> in the Amazon Bedrock User Guide.</p> </li> <li> <p>If you use a custom model, first purchase Provisioned Throughput for it. Then specify the ARN of the resulting provisioned model. For more information, see <a href="https://docs.aws.amazon.com/bedrock/latest/userguide/model-customization-use.html">Use a custom model in Amazon Bedrock</a> in the Amazon Bedrock User Guide.</p> </li> <li> <p>If you use an <a href="https://docs.aws.amazon.com/bedrock/latest/userguide/model-customization-import-model.html">imported model</a>, specify the ARN of the imported model. You can get the model ARN from a successful call to <a href="https://docs.aws.amazon.com/bedrock/latest/APIReference/API_CreateModelImportJob.html">CreateModelImportJob</a> or from the Imported models page in the Amazon Bedrock console.</p> </li> </ul>
   * @public
   */
  foundationModel: string | undefined;

  /**
   * <p>Specifies a new description of the agent.</p>
   * @public
   */
  description?: string | undefined;

  /**
   * <p> Specifies the type of orchestration strategy for the agent. This is set to <code>DEFAULT</code> orchestration type, by default. </p>
   * @public
   */
  orchestrationType?: OrchestrationType | undefined;

  /**
   * <p> Contains details of the custom orchestration configured for the agent. </p>
   * @public
   */
  customOrchestration?: CustomOrchestration | undefined;

  /**
   * <p>The number of seconds for which Amazon Bedrock keeps information about a user's conversation with the agent.</p> <p>A user interaction remains active for the amount of time specified. If no conversation occurs during this time, the session expires and Amazon Bedrock deletes any data provided before the timeout.</p>
   * @public
   */
  idleSessionTTLInSeconds?: number | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the IAM role with permissions to invoke API operations on the agent.</p>
   * @public
   */
  agentResourceRoleArn: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the KMS key with which to encrypt the agent.</p>
   * @public
   */
  customerEncryptionKeyArn?: string | undefined;

  /**
   * <p>Contains configurations to override prompts in different parts of an agent sequence. For more information, see <a href="https://docs.aws.amazon.com/bedrock/latest/userguide/advanced-prompts.html">Advanced prompts</a>.</p>
   * @public
   */
  promptOverrideConfiguration?: PromptOverrideConfiguration | undefined;

  /**
   * <p>The unique Guardrail configuration assigned to the agent when it is updated.</p>
   * @public
   */
  guardrailConfiguration?: GuardrailConfiguration | undefined;

  /**
   * <p>Specifies the new memory configuration for the agent. </p>
   * @public
   */
  memoryConfiguration?: MemoryConfiguration | undefined;

  /**
   * <p>The agent's collaboration role.</p>
   * @public
   */
  agentCollaboration?: AgentCollaboration | undefined;
}

/**
 * @public
 */
export interface UpdateAgentResponse {
  /**
   * <p>Contains details about the agent that was updated.</p>
   * @public
   */
  agent: Agent | undefined;
}

/**
 * <p>Contains details about a version of an agent.</p>
 * @public
 */
export interface AgentVersion {
  /**
   * <p>The unique identifier of the agent that the version belongs to.</p>
   * @public
   */
  agentId: string | undefined;

  /**
   * <p>The name of the agent that the version belongs to.</p>
   * @public
   */
  agentName: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the agent that the version belongs to.</p>
   * @public
   */
  agentArn: string | undefined;

  /**
   * <p>The version number.</p>
   * @public
   */
  version: string | undefined;

  /**
   * <p>The instructions provided to the agent.</p>
   * @public
   */
  instruction?: string | undefined;

  /**
   * <p>The status of the agent that the version belongs to.</p>
   * @public
   */
  agentStatus: AgentStatus | undefined;

  /**
   * <p>The foundation model that the version invokes.</p>
   * @public
   */
  foundationModel?: string | undefined;

  /**
   * <p>The description of the version.</p>
   * @public
   */
  description?: string | undefined;

  /**
   * <p>The number of seconds for which Amazon Bedrock keeps information about a user's conversation with the agent.</p> <p>A user interaction remains active for the amount of time specified. If no conversation occurs during this time, the session expires and Amazon Bedrock deletes any data provided before the timeout.</p>
   * @public
   */
  idleSessionTTLInSeconds: number | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the IAM role with permissions to invoke API operations on the agent.</p>
   * @public
   */
  agentResourceRoleArn: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the KMS key that encrypts the agent.</p>
   * @public
   */
  customerEncryptionKeyArn?: string | undefined;

  /**
   * <p>The time at which the version was created.</p>
   * @public
   */
  createdAt: Date | undefined;

  /**
   * <p>The time at which the version was last updated.</p>
   * @public
   */
  updatedAt: Date | undefined;

  /**
   * <p>A list of reasons that the API operation on the version failed.</p>
   * @public
   */
  failureReasons?: string[] | undefined;

  /**
   * <p>A list of recommended actions to take for the failed API operation on the version to succeed.</p>
   * @public
   */
  recommendedActions?: string[] | undefined;

  /**
   * <p>Contains configurations to override prompt templates in different parts of an agent sequence. For more information, see <a href="https://docs.aws.amazon.com/bedrock/latest/userguide/advanced-prompts.html">Advanced prompts</a>.</p>
   * @public
   */
  promptOverrideConfiguration?: PromptOverrideConfiguration | undefined;

  /**
   * <p>Details about the guardrail associated with the agent.</p>
   * @public
   */
  guardrailConfiguration?: GuardrailConfiguration | undefined;

  /**
   * <p> Contains details of the memory configuration on the version of the agent. </p>
   * @public
   */
  memoryConfiguration?: MemoryConfiguration | undefined;

  /**
   * <p>The agent's collaboration settings.</p>
   * @public
   */
  agentCollaboration?: AgentCollaboration | undefined;
}

/**
 * <p>Contains details about a version of an agent.</p>
 * @public
 */
export interface AgentVersionSummary {
  /**
   * <p>The name of the agent to which the version belongs.</p>
   * @public
   */
  agentName: string | undefined;

  /**
   * <p>The status of the agent to which the version belongs.</p>
   * @public
   */
  agentStatus: AgentStatus | undefined;

  /**
   * <p>The version of the agent.</p>
   * @public
   */
  agentVersion: string | undefined;

  /**
   * <p>The time at which the version was created.</p>
   * @public
   */
  createdAt: Date | undefined;

  /**
   * <p>The time at which the version was last updated.</p>
   * @public
   */
  updatedAt: Date | undefined;

  /**
   * <p>The description of the version of the agent.</p>
   * @public
   */
  description?: string | undefined;

  /**
   * <p>Details about the guardrail associated with the agent.</p>
   * @public
   */
  guardrailConfiguration?: GuardrailConfiguration | undefined;
}

/**
 * @public
 */
export interface CreateAgentAliasRequest {
  /**
   * <p>The unique identifier of the agent.</p>
   * @public
   */
  agentId: string | undefined;

  /**
   * <p>The name of the alias.</p>
   * @public
   */
  agentAliasName: string | undefined;

  /**
   * <p>A unique, case-sensitive identifier to ensure that the API request completes no more than one time. If this token matches a previous request, Amazon Bedrock ignores the request, but does not return an error. For more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/APIReference/Run_Instance_Idempotency.html">Ensuring idempotency</a>.</p>
   * @public
   */
  clientToken?: string | undefined;

  /**
   * <p>A description of the alias of the agent.</p>
   * @public
   */
  description?: string | undefined;

  /**
   * <p>Contains details about the routing configuration of the alias.</p>
   * @public
   */
  routingConfiguration?: AgentAliasRoutingConfigurationListItem[] | undefined;

  /**
   * <p>Any tags that you want to attach to the alias of the agent.</p>
   * @public
   */
  tags?: Record<string, string> | undefined;
}

/**
 * @public
 */
export interface CreateAgentAliasResponse {
  /**
   * <p>Contains details about the alias that was created.</p>
   * @public
   */
  agentAlias: AgentAlias | undefined;
}

/**
 * @public
 */
export interface DeleteAgentAliasRequest {
  /**
   * <p>The unique identifier of the agent that the alias belongs to.</p>
   * @public
   */
  agentId: string | undefined;

  /**
   * <p>The unique identifier of the alias to delete.</p>
   * @public
   */
  agentAliasId: string | undefined;
}

/**
 * @public
 */
export interface DeleteAgentAliasResponse {
  /**
   * <p>The unique identifier of the agent that the alias belongs to.</p>
   * @public
   */
  agentId: string | undefined;

  /**
   * <p>The unique identifier of the alias that was deleted.</p>
   * @public
   */
  agentAliasId: string | undefined;

  /**
   * <p>The status of the alias.</p>
   * @public
   */
  agentAliasStatus: AgentAliasStatus | undefined;
}

/**
 * @public
 */
export interface GetAgentAliasRequest {
  /**
   * <p>The unique identifier of the agent to which the alias to get information belongs.</p>
   * @public
   */
  agentId: string | undefined;

  /**
   * <p>The unique identifier of the alias for which to get information.</p>
   * @public
   */
  agentAliasId: string | undefined;
}

/**
 * @public
 */
export interface GetAgentAliasResponse {
  /**
   * <p>Contains information about the alias.</p>
   * @public
   */
  agentAlias: AgentAlias | undefined;
}

/**
 * @public
 */
export interface ListAgentAliasesRequest {
  /**
   * <p>The unique identifier of the agent.</p>
   * @public
   */
  agentId: string | undefined;

  /**
   * <p>The maximum number of results to return in the response. If the total number of results is greater than this value, use the token returned in the response in the <code>nextToken</code> field when making another request to return the next batch of results.</p>
   * @public
   */
  maxResults?: number | undefined;

  /**
   * <p>If the total number of results is greater than the <code>maxResults</code> value provided in the request, enter the token returned in the <code>nextToken</code> field in the response in this field to return the next batch of results.</p>
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListAgentAliasesResponse {
  /**
   * <p>A list of objects, each of which contains information about an alias of the agent.</p>
   * @public
   */
  agentAliasSummaries: AgentAliasSummary[] | undefined;

  /**
   * <p>If the total number of results is greater than the <code>maxResults</code> value provided in the request, use this token when making another request in the <code>nextToken</code> field to return the next batch of results.</p>
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * @public
 */
export interface UpdateAgentAliasRequest {
  /**
   * <p>The unique identifier of the agent.</p>
   * @public
   */
  agentId: string | undefined;

  /**
   * <p>The unique identifier of the alias.</p>
   * @public
   */
  agentAliasId: string | undefined;

  /**
   * <p>Specifies a new name for the alias.</p>
   * @public
   */
  agentAliasName: string | undefined;

  /**
   * <p>Specifies a new description for the alias.</p>
   * @public
   */
  description?: string | undefined;

  /**
   * <p>Contains details about the routing configuration of the alias.</p>
   * @public
   */
  routingConfiguration?: AgentAliasRoutingConfigurationListItem[] | undefined;

  /**
   * <p>The invocation state for the agent alias. To pause the agent alias, set the value to <code>REJECT_INVOCATIONS</code>. To start the agent alias running again, set the value to <code>ACCEPT_INVOCATIONS</code>. Use the <code>GetAgentAlias</code>, or <code>ListAgentAliases</code>, operation to get the invocation state of an agent alias.</p>
   * @public
   */
  aliasInvocationState?: AliasInvocationState | undefined;
}

/**
 * @public
 */
export interface UpdateAgentAliasResponse {
  /**
   * <p>Contains details about the alias that was updated.</p>
   * @public
   */
  agentAlias: AgentAlias | undefined;
}

/**
 * <p>The specific filters applied to your data source content. You can filter out or include certain content.</p>
 * @public
 */
export interface PatternObjectFilter {
  /**
   * <p>The supported object type or content type of the data source.</p>
   * @public
   */
  objectType: string | undefined;

  /**
   * <p>A list of one or more inclusion regular expression patterns to include certain object types that adhere to the pattern. If you specify an inclusion and exclusion filter/pattern and both match a document, the exclusion filter takes precedence and the document isn’t crawled.</p>
   * @public
   */
  inclusionFilters?: string[] | undefined;

  /**
   * <p>A list of one or more exclusion regular expression patterns to exclude certain object types that adhere to the pattern. If you specify an inclusion and exclusion filter/pattern and both match a document, the exclusion filter takes precedence and the document isn’t crawled.</p>
   * @public
   */
  exclusionFilters?: string[] | undefined;
}

/**
 * <p>The configuration of filtering certain objects or content types of the data source.</p>
 * @public
 */
export interface PatternObjectFilterConfiguration {
  /**
   * <p>The configuration of specific filters applied to your data source content. You can filter out or include certain content.</p>
   * @public
   */
  filters: PatternObjectFilter[] | undefined;
}

/**
 * <p>The configuration of filtering the data source content. For example, configuring regular expression patterns to include or exclude certain content.</p>
 * @public
 */
export interface CrawlFilterConfiguration {
  /**
   * <p>The type of filtering that you want to apply to certain objects or content of the data source. For example, the <code>PATTERN</code> type is regular expression patterns you can apply to filter your content.</p>
   * @public
   */
  type: CrawlFilterConfigurationType | undefined;

  /**
   * <p>The configuration of filtering certain objects or content types of the data source.</p>
   * @public
   */
  patternObjectFilter?: PatternObjectFilterConfiguration | undefined;
}

/**
 * <p>The configuration of the Confluence content. For example, configuring specific types of Confluence content.</p>
 * @public
 */
export interface ConfluenceCrawlerConfiguration {
  /**
   * <p>The configuration of filtering the Confluence content. For example, configuring regular expression patterns to include or exclude certain content.</p>
   * @public
   */
  filterConfiguration?: CrawlFilterConfiguration | undefined;
}

/**
 * <p>The endpoint information to connect to your Confluence data source.</p>
 * @public
 */
export interface ConfluenceSourceConfiguration {
  /**
   * <p>The Confluence host URL or instance URL.</p>
   * @public
   */
  hostUrl: string | undefined;

  /**
   * <p>The supported host type, whether online/cloud or server/on-premises.</p>
   * @public
   */
  hostType: ConfluenceHostType | undefined;

  /**
   * <p>The supported authentication type to authenticate and connect to your Confluence instance.</p>
   * @public
   */
  authType: ConfluenceAuthType | undefined;

  /**
   * <p>The Amazon Resource Name of an Secrets Manager secret that stores your authentication credentials for your Confluence instance URL. For more information on the key-value pairs that must be included in your secret, depending on your authentication type, see <a href="https://docs.aws.amazon.com/bedrock/latest/userguide/confluence-data-source-connector.html#configuration-confluence-connector">Confluence connection configuration</a>.</p>
   * @public
   */
  credentialsSecretArn: string | undefined;
}

/**
 * <p>The configuration information to connect to Confluence as your data source.</p>
 * @public
 */
export interface ConfluenceDataSourceConfiguration {
  /**
   * <p>The endpoint information to connect to your Confluence data source.</p>
   * @public
   */
  sourceConfiguration: ConfluenceSourceConfiguration | undefined;

  /**
   * <p>The configuration of the Confluence content. For example, configuring specific types of Confluence content.</p>
   * @public
   */
  crawlerConfiguration?: ConfluenceCrawlerConfiguration | undefined;
}

/**
 * <p>The configuration information to connect to Amazon S3 as your data source.</p>
 * @public
 */
export interface S3DataSourceConfiguration {
  /**
   * <p>The Amazon Resource Name (ARN) of the S3 bucket that contains your data.</p>
   * @public
   */
  bucketArn: string | undefined;

  /**
   * <p>A list of S3 prefixes to include certain files or content. For more information, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/userguide/using-prefixes.html">Organizing objects using prefixes</a>.</p>
   * @public
   */
  inclusionPrefixes?: string[] | undefined;

  /**
   * <p>The account ID for the owner of the S3 bucket.</p>
   * @public
   */
  bucketOwnerAccountId?: string | undefined;
}

/**
 * <p>The configuration of the Salesforce content. For example, configuring specific types of Salesforce content.</p>
 * @public
 */
export interface SalesforceCrawlerConfiguration {
  /**
   * <p>The configuration of filtering the Salesforce content. For example, configuring regular expression patterns to include or exclude certain content.</p>
   * @public
   */
  filterConfiguration?: CrawlFilterConfiguration | undefined;
}

/**
 * <p>The endpoint information to connect to your Salesforce data source.</p>
 * @public
 */
export interface SalesforceSourceConfiguration {
  /**
   * <p>The Salesforce host URL or instance URL.</p>
   * @public
   */
  hostUrl: string | undefined;

  /**
   * <p>The supported authentication type to authenticate and connect to your Salesforce instance.</p>
   * @public
   */
  authType: SalesforceAuthType | undefined;

  /**
   * <p>The Amazon Resource Name of an Secrets Manager secret that stores your authentication credentials for your Salesforce instance URL. For more information on the key-value pairs that must be included in your secret, depending on your authentication type, see <a href="https://docs.aws.amazon.com/bedrock/latest/userguide/salesforce-data-source-connector.html#configuration-salesforce-connector">Salesforce connection configuration</a>.</p>
   * @public
   */
  credentialsSecretArn: string | undefined;
}

/**
 * <p>The configuration information to connect to Salesforce as your data source.</p>
 * @public
 */
export interface SalesforceDataSourceConfiguration {
  /**
   * <p>The endpoint information to connect to your Salesforce data source.</p>
   * @public
   */
  sourceConfiguration: SalesforceSourceConfiguration | undefined;

  /**
   * <p>The configuration of the Salesforce content. For example, configuring specific types of Salesforce content.</p>
   * @public
   */
  crawlerConfiguration?: SalesforceCrawlerConfiguration | undefined;
}

/**
 * <p>The configuration of the SharePoint content. For example, configuring specific types of SharePoint content.</p>
 * @public
 */
export interface SharePointCrawlerConfiguration {
  /**
   * <p>The configuration of filtering the SharePoint content. For example, configuring regular expression patterns to include or exclude certain content.</p>
   * @public
   */
  filterConfiguration?: CrawlFilterConfiguration | undefined;
}

/**
 * <p>The endpoint information to connect to your SharePoint data source.</p>
 * @public
 */
export interface SharePointSourceConfiguration {
  /**
   * <p>The identifier of your Microsoft 365 tenant.</p>
   * @public
   */
  tenantId?: string | undefined;

  /**
   * <p>The domain of your SharePoint instance or site URL/URLs.</p>
   * @public
   */
  domain: string | undefined;

  /**
   * <p>A list of one or more SharePoint site URLs.</p>
   * @public
   */
  siteUrls: string[] | undefined;

  /**
   * <p>The supported host type, whether online/cloud or server/on-premises.</p>
   * @public
   */
  hostType: SharePointHostType | undefined;

  /**
   * <p>The supported authentication type to authenticate and connect to your SharePoint site/sites.</p>
   * @public
   */
  authType: SharePointAuthType | undefined;

  /**
   * <p>The Amazon Resource Name of an Secrets Manager secret that stores your authentication credentials for your SharePoint site/sites. For more information on the key-value pairs that must be included in your secret, depending on your authentication type, see <a href="https://docs.aws.amazon.com/bedrock/latest/userguide/sharepoint-data-source-connector.html#configuration-sharepoint-connector">SharePoint connection configuration</a>.</p>
   * @public
   */
  credentialsSecretArn: string | undefined;
}

/**
 * <p>The configuration information to connect to SharePoint as your data source.</p>
 * @public
 */
export interface SharePointDataSourceConfiguration {
  /**
   * <p>The endpoint information to connect to your SharePoint data source.</p>
   * @public
   */
  sourceConfiguration: SharePointSourceConfiguration | undefined;

  /**
   * <p>The configuration of the SharePoint content. For example, configuring specific types of SharePoint content.</p>
   * @public
   */
  crawlerConfiguration?: SharePointCrawlerConfiguration | undefined;
}

/**
 * <p>The rate limits for the URLs that you want to crawl. You should be authorized to crawl the URLs.</p>
 * @public
 */
export interface WebCrawlerLimits {
  /**
   * <p>The max rate at which pages are crawled, up to 300 per minute per host.</p>
   * @public
   */
  rateLimit?: number | undefined;

  /**
   * <p> The max number of web pages crawled from your source URLs, up to 25,000 pages. If the web pages exceed this limit, the data source sync will fail and no web pages will be ingested. </p>
   * @public
   */
  maxPages?: number | undefined;
}

/**
 * <p>The configuration of web URLs that you want to crawl. You should be authorized to crawl the URLs.</p>
 * @public
 */
export interface WebCrawlerConfiguration {
  /**
   * <p>The configuration of crawl limits for the web URLs.</p>
   * @public
   */
  crawlerLimits?: WebCrawlerLimits | undefined;

  /**
   * <p>A list of one or more inclusion regular expression patterns to include certain URLs. If you specify an inclusion and exclusion filter/pattern and both match a URL, the exclusion filter takes precedence and the web content of the URL isn’t crawled.</p>
   * @public
   */
  inclusionFilters?: string[] | undefined;

  /**
   * <p>A list of one or more exclusion regular expression patterns to exclude certain URLs. If you specify an inclusion and exclusion filter/pattern and both match a URL, the exclusion filter takes precedence and the web content of the URL isn’t crawled.</p>
   * @public
   */
  exclusionFilters?: string[] | undefined;

  /**
   * <p>The scope of what is crawled for your URLs.</p> <p>You can choose to crawl only web pages that belong to the same host or primary domain. For example, only web pages that contain the seed URL "https://docs.aws.amazon.com/bedrock/latest/userguide/" and no other domains. You can choose to include sub domains in addition to the host or primary domain. For example, web pages that contain "aws.amazon.com" can also include sub domain "docs.aws.amazon.com".</p>
   * @public
   */
  scope?: WebScopeType | undefined;

  /**
   * <p>Returns the user agent suffix for your web crawler.</p>
   * @public
   */
  userAgent?: string | undefined;

  /**
   * <p>A string used for identifying the crawler or bot when it accesses a web server. The user agent header value consists of the <code>bedrockbot</code>, UUID, and a user agent suffix for your crawler (if one is provided). By default, it is set to <code>bedrockbot_UUID</code>. You can optionally append a custom suffix to <code>bedrockbot_UUID</code> to allowlist a specific user agent permitted to access your source URLs. </p>
   * @public
   */
  userAgentHeader?: string | undefined;
}

/**
 * <p>The seed or starting point URL. You should be authorized to crawl the URL.</p>
 * @public
 */
export interface SeedUrl {
  /**
   * <p>A seed or starting point URL.</p>
   * @public
   */
  url?: string | undefined;
}

/**
 * <p>The configuration of web URLs that you want to crawl. You should be authorized to crawl the URLs.</p>
 * @public
 */
export interface UrlConfiguration {
  /**
   * <p>One or more seed or starting point URLs.</p>
   * @public
   */
  seedUrls?: SeedUrl[] | undefined;
}

/**
 * <p>The configuration of the URL/URLs for the web content that you want to crawl. You should be authorized to crawl the URLs.</p>
 * @public
 */
export interface WebSourceConfiguration {
  /**
   * <p>The configuration of the URL/URLs.</p>
   * @public
   */
  urlConfiguration: UrlConfiguration | undefined;
}

/**
 * <p>The configuration details for the web data source.</p>
 * @public
 */
export interface WebDataSourceConfiguration {
  /**
   * <p>The source configuration details for the web data source.</p>
   * @public
   */
  sourceConfiguration: WebSourceConfiguration | undefined;

  /**
   * <p>The Web Crawler configuration details for the web data source.</p>
   * @public
   */
  crawlerConfiguration?: WebCrawlerConfiguration | undefined;
}

/**
 * <p>The connection configuration for the data source.</p>
 * @public
 */
export interface DataSourceConfiguration {
  /**
   * <p>The type of data source.</p>
   * @public
   */
  type: DataSourceType | undefined;

  /**
   * <p>The configuration information to connect to Amazon S3 as your data source.</p>
   * @public
   */
  s3Configuration?: S3DataSourceConfiguration | undefined;

  /**
   * <p>The configuration of web URLs to crawl for your data source. You should be authorized to crawl the URLs.</p> <note> <p>Crawling web URLs as your data source is in preview release and is subject to change.</p> </note>
   * @public
   */
  webConfiguration?: WebDataSourceConfiguration | undefined;

  /**
   * <p>The configuration information to connect to Confluence as your data source.</p> <note> <p>Confluence data source connector is in preview release and is subject to change.</p> </note>
   * @public
   */
  confluenceConfiguration?: ConfluenceDataSourceConfiguration | undefined;

  /**
   * <p>The configuration information to connect to Salesforce as your data source.</p> <note> <p>Salesforce data source connector is in preview release and is subject to change.</p> </note>
   * @public
   */
  salesforceConfiguration?: SalesforceDataSourceConfiguration | undefined;

  /**
   * <p>The configuration information to connect to SharePoint as your data source.</p> <note> <p>SharePoint data source connector is in preview release and is subject to change.</p> </note>
   * @public
   */
  sharePointConfiguration?: SharePointDataSourceConfiguration | undefined;
}

/**
 * <p>Contains the configuration for server-side encryption.</p>
 * @public
 */
export interface ServerSideEncryptionConfiguration {
  /**
   * <p>The Amazon Resource Name (ARN) of the KMS key used to encrypt the resource.</p>
   * @public
   */
  kmsKeyArn?: string | undefined;
}

/**
 * <p>Configurations for when you choose fixed-size chunking. If you set the <code>chunkingStrategy</code> as <code>NONE</code>, exclude this field.</p>
 * @public
 */
export interface FixedSizeChunkingConfiguration {
  /**
   * <p>The maximum number of tokens to include in a chunk.</p>
   * @public
   */
  maxTokens: number | undefined;

  /**
   * <p>The percentage of overlap between adjacent chunks of a data source.</p>
   * @public
   */
  overlapPercentage: number | undefined;
}

/**
 * <p>Token settings for a layer in a hierarchical chunking configuration.</p>
 * @public
 */
export interface HierarchicalChunkingLevelConfiguration {
  /**
   * <p>The maximum number of tokens that a chunk can contain in this layer.</p>
   * @public
   */
  maxTokens: number | undefined;
}

/**
 * <p>Settings for hierarchical document chunking for a data source. Hierarchical chunking splits documents into layers of chunks where the first layer contains large chunks, and the second layer contains smaller chunks derived from the first layer.</p> <p>You configure the number of tokens to overlap, or repeat across adjacent chunks. For example, if you set overlap tokens to 60, the last 60 tokens in the first chunk are also included at the beginning of the second chunk. For each layer, you must also configure the maximum number of tokens in a chunk.</p>
 * @public
 */
export interface HierarchicalChunkingConfiguration {
  /**
   * <p>Token settings for each layer.</p>
   * @public
   */
  levelConfigurations: HierarchicalChunkingLevelConfiguration[] | undefined;

  /**
   * <p>The number of tokens to repeat across chunks in the same layer.</p>
   * @public
   */
  overlapTokens: number | undefined;
}

/**
 * <p>Settings for semantic document chunking for a data source. Semantic chunking splits a document into into smaller documents based on groups of similar content derived from the text with natural language processing.</p> <p>With semantic chunking, each sentence is compared to the next to determine how similar they are. You specify a threshold in the form of a percentile, where adjacent sentences that are less similar than that percentage of sentence pairs are divided into separate chunks. For example, if you set the threshold to 90, then the 10 percent of sentence pairs that are least similar are split. So if you have 101 sentences, 100 sentence pairs are compared, and the 10 with the least similarity are split, creating 11 chunks. These chunks are further split if they exceed the max token size.</p> <p>You must also specify a buffer size, which determines whether sentences are compared in isolation, or within a moving context window that includes the previous and following sentence. For example, if you set the buffer size to <code>1</code>, the embedding for sentence 10 is derived from sentences 9, 10, and 11 combined.</p>
 * @public
 */
export interface SemanticChunkingConfiguration {
  /**
   * <p>The maximum number of tokens that a chunk can contain.</p>
   * @public
   */
  maxTokens: number | undefined;

  /**
   * <p>The buffer size.</p>
   * @public
   */
  bufferSize: number | undefined;

  /**
   * <p>The dissimilarity threshold for splitting chunks.</p>
   * @public
   */
  breakpointPercentileThreshold: number | undefined;
}

/**
 * <p>Details about how to chunk the documents in the data source. A <i>chunk</i> refers to an excerpt from a data source that is returned when the knowledge base that it belongs to is queried.</p>
 * @public
 */
export interface ChunkingConfiguration {
  /**
   * <p>Knowledge base can split your source data into chunks. A <i>chunk</i> refers to an excerpt from a data source that is returned when the knowledge base that it belongs to is queried. You have the following options for chunking your data. If you opt for <code>NONE</code>, then you may want to pre-process your files by splitting them up such that each file corresponds to a chunk.</p> <ul> <li> <p> <code>FIXED_SIZE</code> – Amazon Bedrock splits your source data into chunks of the approximate size that you set in the <code>fixedSizeChunkingConfiguration</code>.</p> </li> <li> <p> <code>HIERARCHICAL</code> – Split documents into layers of chunks where the first layer contains large chunks, and the second layer contains smaller chunks derived from the first layer.</p> </li> <li> <p> <code>SEMANTIC</code> – Split documents into chunks based on groups of similar content derived with natural language processing.</p> </li> <li> <p> <code>NONE</code> – Amazon Bedrock treats each file as one chunk. If you choose this option, you may want to pre-process your documents by splitting them into separate files.</p> </li> </ul>
   * @public
   */
  chunkingStrategy: ChunkingStrategy | undefined;

  /**
   * <p>Configurations for when you choose fixed-size chunking. If you set the <code>chunkingStrategy</code> as <code>NONE</code>, exclude this field.</p>
   * @public
   */
  fixedSizeChunkingConfiguration?: FixedSizeChunkingConfiguration | undefined;

  /**
   * <p>Settings for hierarchical document chunking for a data source. Hierarchical chunking splits documents into layers of chunks where the first layer contains large chunks, and the second layer contains smaller chunks derived from the first layer.</p>
   * @public
   */
  hierarchicalChunkingConfiguration?: HierarchicalChunkingConfiguration | undefined;

  /**
   * <p>Settings for semantic document chunking for a data source. Semantic chunking splits a document into into smaller documents based on groups of similar content derived from the text with natural language processing.</p>
   * @public
   */
  semanticChunkingConfiguration?: SemanticChunkingConfiguration | undefined;
}

/**
 * <p>The strategy used for performing context enrichment.</p>
 * @public
 */
export interface EnrichmentStrategyConfiguration {
  /**
   * <p>The method used for the context enrichment strategy.</p>
   * @public
   */
  method: EnrichmentStrategyMethod | undefined;
}

/**
 * <p>Context enrichment configuration is used to provide additional context to the RAG application using Amazon Bedrock foundation models.</p>
 * @public
 */
export interface BedrockFoundationModelContextEnrichmentConfiguration {
  /**
   * <p>The enrichment stategy used to provide additional context. For example, Neptune GraphRAG uses Amazon Bedrock foundation models to perform chunk entity extraction.</p>
   * @public
   */
  enrichmentStrategyConfiguration: EnrichmentStrategyConfiguration | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the model used to create vector embeddings for the knowledge base.</p>
   * @public
   */
  modelArn: string | undefined;
}

/**
 * <p>Context enrichment configuration is used to provide additional context to the RAG application.</p>
 * @public
 */
export interface ContextEnrichmentConfiguration {
  /**
   * <p>The method used for context enrichment. It must be Amazon Bedrock foundation models.</p>
   * @public
   */
  type: ContextEnrichmentType | undefined;

  /**
   * <p>The configuration of the Amazon Bedrock foundation model used for context enrichment.</p>
   * @public
   */
  bedrockFoundationModelConfiguration?: BedrockFoundationModelContextEnrichmentConfiguration | undefined;
}

/**
 * <p>An Amazon S3 location.</p>
 * @public
 */
export interface S3Location {
  /**
   * <p>The location's URI. For example, <code>s3://my-bucket/chunk-processor/</code>.</p>
   * @public
   */
  uri: string | undefined;
}

/**
 * <p>A location for storing content from data sources temporarily as it is processed by custom components in the ingestion pipeline.</p>
 * @public
 */
export interface IntermediateStorage {
  /**
   * <p>An S3 bucket path.</p>
   * @public
   */
  s3Location: S3Location | undefined;
}

/**
 * <p>A Lambda function that processes documents.</p>
 * @public
 */
export interface TransformationLambdaConfiguration {
  /**
   * <p>The function's ARN identifier.</p>
   * @public
   */
  lambdaArn: string | undefined;
}

/**
 * <p>A Lambda function that processes documents.</p>
 * @public
 */
export interface TransformationFunction {
  /**
   * <p>The Lambda function.</p>
   * @public
   */
  transformationLambdaConfiguration: TransformationLambdaConfiguration | undefined;
}

/**
 * <p>A custom processing step for documents moving through a data source ingestion pipeline. To process documents after they have been converted into chunks, set the step to apply to <code>POST_CHUNKING</code>.</p>
 * @public
 */
export interface Transformation {
  /**
   * <p>A Lambda function that processes documents.</p>
   * @public
   */
  transformationFunction: TransformationFunction | undefined;

  /**
   * <p>When the service applies the transformation.</p>
   * @public
   */
  stepToApply: StepType | undefined;
}

/**
 * <p>Settings for customizing steps in the data source content ingestion pipeline.</p> <p>You can configure the data source to process documents with a Lambda function after they are parsed and converted into chunks. When you add a post-chunking transformation, the service stores chunked documents in an S3 bucket and invokes a Lambda function to process them.</p> <p>To process chunked documents with a Lambda function, define an S3 bucket path for input and output objects, and a transformation that specifies the Lambda function to invoke. You can use the Lambda function to customize how chunks are split, and the metadata for each chunk. </p>
 * @public
 */
export interface CustomTransformationConfiguration {
  /**
   * <p>An S3 bucket path for input and output objects.</p>
   * @public
   */
  intermediateStorage: IntermediateStorage | undefined;

  /**
   * <p>A Lambda function that processes documents.</p>
   * @public
   */
  transformations: Transformation[] | undefined;
}

/**
 * <p>Contains configurations for using Amazon Bedrock Data Automation as the parser for ingesting your data sources.</p>
 * @public
 */
export interface BedrockDataAutomationConfiguration {
  /**
   * <p>Specifies whether to enable parsing of multimodal data, including both text and/or images.</p>
   * @public
   */
  parsingModality?: ParsingModality | undefined;
}

/**
 * <p>Instructions for interpreting the contents of a document.</p>
 * @public
 */
export interface ParsingPrompt {
  /**
   * <p>Instructions for interpreting the contents of a document.</p>
   * @public
   */
  parsingPromptText: string | undefined;
}

/**
 * <p>Settings for a foundation model used to parse documents for a data source.</p>
 * @public
 */
export interface BedrockFoundationModelConfiguration {
  /**
   * <p>The ARN of the foundation model to use for parsing.</p>
   * @public
   */
  modelArn: string | undefined;

  /**
   * <p>Instructions for interpreting the contents of a document.</p>
   * @public
   */
  parsingPrompt?: ParsingPrompt | undefined;

  /**
   * <p>Specifies whether to enable parsing of multimodal data, including both text and/or images.</p>
   * @public
   */
  parsingModality?: ParsingModality | undefined;
}

/**
 * <p>Settings for parsing document contents. If you exclude this field, the default parser converts the contents of each document into text before splitting it into chunks. Specify the parsing strategy to use in the <code>parsingStrategy</code> field and include the relevant configuration, or omit it to use the Amazon Bedrock default parser. For more information, see <a href="https://docs.aws.amazon.com/bedrock/latest/userguide/kb-advanced-parsing.html">Parsing options for your data source</a>.</p> <note> <p>If you specify <code>BEDROCK_DATA_AUTOMATION</code> or <code>BEDROCK_FOUNDATION_MODEL</code> and it fails to parse a file, the Amazon Bedrock default parser will be used instead.</p> </note>
 * @public
 */
export interface ParsingConfiguration {
  /**
   * <p>The parsing strategy for the data source.</p>
   * @public
   */
  parsingStrategy: ParsingStrategy | undefined;

  /**
   * <p>If you specify <code>BEDROCK_FOUNDATION_MODEL</code> as the parsing strategy for ingesting your data source, use this object to modify configurations for using a foundation model to parse documents.</p>
   * @public
   */
  bedrockFoundationModelConfiguration?: BedrockFoundationModelConfiguration | undefined;

  /**
   * <p>If you specify <code>BEDROCK_DATA_AUTOMATION</code> as the parsing strategy for ingesting your data source, use this object to modify configurations for using the Amazon Bedrock Data Automation parser.</p>
   * @public
   */
  bedrockDataAutomationConfiguration?: BedrockDataAutomationConfiguration | undefined;
}

/**
 * <p>Contains details about how to ingest the documents in a data source.</p>
 * @public
 */
export interface VectorIngestionConfiguration {
  /**
   * <p>Details about how to chunk the documents in the data source. A <i>chunk</i> refers to an excerpt from a data source that is returned when the knowledge base that it belongs to is queried.</p>
   * @public
   */
  chunkingConfiguration?: ChunkingConfiguration | undefined;

  /**
   * <p>A custom document transformer for parsed data source documents.</p>
   * @public
   */
  customTransformationConfiguration?: CustomTransformationConfiguration | undefined;

  /**
   * <p>Configurations for a parser to use for parsing documents in your data source. If you exclude this field, the default parser will be used.</p>
   * @public
   */
  parsingConfiguration?: ParsingConfiguration | undefined;

  /**
   * <p>The context enrichment configuration used for ingestion of the data into the vector store.</p>
   * @public
   */
  contextEnrichmentConfiguration?: ContextEnrichmentConfiguration | undefined;
}

/**
 * @public
 */
export interface CreateDataSourceRequest {
  /**
   * <p>The unique identifier of the knowledge base to which to add the data source.</p>
   * @public
   */
  knowledgeBaseId: string | undefined;

  /**
   * <p>A unique, case-sensitive identifier to ensure that the API request completes no more than one time. If this token matches a previous request, Amazon Bedrock ignores the request, but does not return an error. For more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/APIReference/Run_Instance_Idempotency.html">Ensuring idempotency</a>.</p>
   * @public
   */
  clientToken?: string | undefined;

  /**
   * <p>The name of the data source.</p>
   * @public
   */
  name: string | undefined;

  /**
   * <p>A description of the data source.</p>
   * @public
   */
  description?: string | undefined;

  /**
   * <p>The connection configuration for the data source.</p>
   * @public
   */
  dataSourceConfiguration: DataSourceConfiguration | undefined;

  /**
   * <p>The data deletion policy for the data source.</p> <p>You can set the data deletion policy to:</p> <ul> <li> <p>DELETE: Deletes all data from your data source that’s converted into vector embeddings upon deletion of a knowledge base or data source resource. Note that the <b>vector store itself is not deleted</b>, only the data. This flag is ignored if an Amazon Web Services account is deleted.</p> </li> <li> <p>RETAIN: Retains all data from your data source that’s converted into vector embeddings upon deletion of a knowledge base or data source resource. Note that the <b>vector store itself is not deleted</b> if you delete a knowledge base or data source resource.</p> </li> </ul>
   * @public
   */
  dataDeletionPolicy?: DataDeletionPolicy | undefined;

  /**
   * <p>Contains details about the server-side encryption for the data source.</p>
   * @public
   */
  serverSideEncryptionConfiguration?: ServerSideEncryptionConfiguration | undefined;

  /**
   * <p>Contains details about how to ingest the documents in the data source.</p>
   * @public
   */
  vectorIngestionConfiguration?: VectorIngestionConfiguration | undefined;
}

/**
 * <p>Contains details about a data source.</p>
 * @public
 */
export interface DataSource {
  /**
   * <p>The unique identifier of the knowledge base to which the data source belongs.</p>
   * @public
   */
  knowledgeBaseId: string | undefined;

  /**
   * <p>The unique identifier of the data source.</p>
   * @public
   */
  dataSourceId: string | undefined;

  /**
   * <p>The name of the data source.</p>
   * @public
   */
  name: string | undefined;

  /**
   * <p>The status of the data source. The following statuses are possible:</p> <ul> <li> <p>Available – The data source has been created and is ready for ingestion into the knowledge base.</p> </li> <li> <p>Deleting – The data source is being deleted.</p> </li> </ul>
   * @public
   */
  status: DataSourceStatus | undefined;

  /**
   * <p>The description of the data source.</p>
   * @public
   */
  description?: string | undefined;

  /**
   * <p>The connection configuration for the data source.</p>
   * @public
   */
  dataSourceConfiguration: DataSourceConfiguration | undefined;

  /**
   * <p>Contains details about the configuration of the server-side encryption.</p>
   * @public
   */
  serverSideEncryptionConfiguration?: ServerSideEncryptionConfiguration | undefined;

  /**
   * <p>Contains details about how to ingest the documents in the data source.</p>
   * @public
   */
  vectorIngestionConfiguration?: VectorIngestionConfiguration | undefined;

  /**
   * <p>The data deletion policy for the data source.</p>
   * @public
   */
  dataDeletionPolicy?: DataDeletionPolicy | undefined;

  /**
   * <p>The time at which the data source was created.</p>
   * @public
   */
  createdAt: Date | undefined;

  /**
   * <p>The time at which the data source was last updated.</p>
   * @public
   */
  updatedAt: Date | undefined;

  /**
   * <p>The detailed reasons on the failure to delete a data source.</p>
   * @public
   */
  failureReasons?: string[] | undefined;
}

/**
 * @public
 */
export interface CreateDataSourceResponse {
  /**
   * <p>Contains details about the data source.</p>
   * @public
   */
  dataSource: DataSource | undefined;
}

/**
 * @public
 */
export interface DeleteDataSourceRequest {
  /**
   * <p>The unique identifier of the knowledge base from which to delete the data source.</p>
   * @public
   */
  knowledgeBaseId: string | undefined;

  /**
   * <p>The unique identifier of the data source to delete.</p>
   * @public
   */
  dataSourceId: string | undefined;
}

/**
 * @public
 */
export interface DeleteDataSourceResponse {
  /**
   * <p>The unique identifier of the knowledge base to which the data source that was deleted belonged.</p>
   * @public
   */
  knowledgeBaseId: string | undefined;

  /**
   * <p>The unique identifier of the data source that was deleted.</p>
   * @public
   */
  dataSourceId: string | undefined;

  /**
   * <p>The status of the data source.</p>
   * @public
   */
  status: DataSourceStatus | undefined;
}

/**
 * @public
 */
export interface GetDataSourceRequest {
  /**
   * <p>The unique identifier of the knowledge base for the data source.</p>
   * @public
   */
  knowledgeBaseId: string | undefined;

  /**
   * <p>The unique identifier of the data source.</p>
   * @public
   */
  dataSourceId: string | undefined;
}

/**
 * @public
 */
export interface GetDataSourceResponse {
  /**
   * <p>Contains details about the data source.</p>
   * @public
   */
  dataSource: DataSource | undefined;
}

/**
 * @public
 */
export interface ListDataSourcesRequest {
  /**
   * <p>The unique identifier of the knowledge base for which to return a list of information.</p>
   * @public
   */
  knowledgeBaseId: string | undefined;

  /**
   * <p>The maximum number of results to return in the response. If the total number of results is greater than this value, use the token returned in the response in the <code>nextToken</code> field when making another request to return the next batch of results.</p>
   * @public
   */
  maxResults?: number | undefined;

  /**
   * <p>If the total number of results is greater than the <code>maxResults</code> value provided in the request, enter the token returned in the <code>nextToken</code> field in the response in this field to return the next batch of results.</p>
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * <p>Contains details about a data source.</p>
 * @public
 */
export interface DataSourceSummary {
  /**
   * <p>The unique identifier of the knowledge base to which the data source belongs.</p>
   * @public
   */
  knowledgeBaseId: string | undefined;

  /**
   * <p>The unique identifier of the data source.</p>
   * @public
   */
  dataSourceId: string | undefined;

  /**
   * <p>The name of the data source.</p>
   * @public
   */
  name: string | undefined;

  /**
   * <p>The status of the data source.</p>
   * @public
   */
  status: DataSourceStatus | undefined;

  /**
   * <p>The description of the data source.</p>
   * @public
   */
  description?: string | undefined;

  /**
   * <p>The time at which the data source was last updated.</p>
   * @public
   */
  updatedAt: Date | undefined;
}

/**
 * @public
 */
export interface ListDataSourcesResponse {
  /**
   * <p>A list of objects, each of which contains information about a data source.</p>
   * @public
   */
  dataSourceSummaries: DataSourceSummary[] | undefined;

  /**
   * <p>If the total number of results is greater than the <code>maxResults</code> value provided in the request, use this token when making another request in the <code>nextToken</code> field to return the next batch of results.</p>
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * @public
 */
export interface UpdateDataSourceRequest {
  /**
   * <p>The unique identifier of the knowledge base for the data source.</p>
   * @public
   */
  knowledgeBaseId: string | undefined;

  /**
   * <p>The unique identifier of the data source.</p>
   * @public
   */
  dataSourceId: string | undefined;

  /**
   * <p>Specifies a new name for the data source.</p>
   * @public
   */
  name: string | undefined;

  /**
   * <p>Specifies a new description for the data source.</p>
   * @public
   */
  description?: string | undefined;

  /**
   * <p>The connection configuration for the data source that you want to update.</p>
   * @public
   */
  dataSourceConfiguration: DataSourceConfiguration | undefined;

  /**
   * <p>The data deletion policy for the data source that you want to update.</p>
   * @public
   */
  dataDeletionPolicy?: DataDeletionPolicy | undefined;

  /**
   * <p>Contains details about server-side encryption of the data source.</p>
   * @public
   */
  serverSideEncryptionConfiguration?: ServerSideEncryptionConfiguration | undefined;

  /**
   * <p>Contains details about how to ingest the documents in the data source.</p>
   * @public
   */
  vectorIngestionConfiguration?: VectorIngestionConfiguration | undefined;
}

/**
 * @public
 */
export interface UpdateDataSourceResponse {
  /**
   * <p>Contains details about the data source.</p>
   * @public
   */
  dataSource: DataSource | undefined;
}

/**
 * <p>The configuration of a connection between a condition node and another node.</p>
 * @public
 */
export interface FlowConditionalConnectionConfiguration {
  /**
   * <p>The condition that triggers this connection. For more information about how to write conditions, see the <b>Condition</b> node type in the <a href="https://docs.aws.amazon.com/bedrock/latest/userguide/node-types.html">Node types</a> topic in the Amazon Bedrock User Guide.</p>
   * @public
   */
  condition: string | undefined;
}

/**
 * <p>The configuration of a connection originating from a node that isn't a Condition node.</p>
 * @public
 */
export interface FlowDataConnectionConfiguration {
  /**
   * <p>The name of the output in the source node that the connection begins from.</p>
   * @public
   */
  sourceOutput: string | undefined;

  /**
   * <p>The name of the input in the target node that the connection ends at.</p>
   * @public
   */
  targetInput: string | undefined;
}

/**
 * <p>The configuration of the connection.</p>
 * @public
 */
export type FlowConnectionConfiguration =
  | FlowConnectionConfiguration.ConditionalMember
  | FlowConnectionConfiguration.DataMember
  | FlowConnectionConfiguration.$UnknownMember;

/**
 * @public
 */
export namespace FlowConnectionConfiguration {
  /**
   * <p>The configuration of a connection originating from a node that isn't a Condition node.</p>
   * @public
   */
  export interface DataMember {
    data: FlowDataConnectionConfiguration;
    conditional?: never;
    $unknown?: never;
  }

  /**
   * <p>The configuration of a connection originating from a Condition node.</p>
   * @public
   */
  export interface ConditionalMember {
    data?: never;
    conditional: FlowConditionalConnectionConfiguration;
    $unknown?: never;
  }

  /**
   * @public
   */
  export interface $UnknownMember {
    data?: never;
    conditional?: never;
    $unknown: [string, any];
  }

  /**
   * @deprecated unused in schema-serde mode.
   *
   */
  export interface Visitor<T> {
    data: (value: FlowDataConnectionConfiguration) => T;
    conditional: (value: FlowConditionalConnectionConfiguration) => T;
    _: (name: string, value: any) => T;
  }
}

/**
 * <p>Contains information about a connection between two nodes in the flow.</p>
 * @public
 */
export interface FlowConnection {
  /**
   * <p>Whether the source node that the connection begins from is a condition node (<code>Conditional</code>) or not (<code>Data</code>).</p>
   * @public
   */
  type: FlowConnectionType | undefined;

  /**
   * <p>A name for the connection that you can reference.</p>
   * @public
   */
  name: string | undefined;

  /**
   * <p>The node that the connection starts at.</p>
   * @public
   */
  source: string | undefined;

  /**
   * <p>The node that the connection ends at.</p>
   * @public
   */
  target: string | undefined;

  /**
   * <p>The configuration of the connection.</p>
   * @public
   */
  configuration?: FlowConnectionConfiguration | undefined;
}

/**
 * <p>Defines a collector node in your flow. This node takes an iteration of inputs and consolidates them into an array in the output. For more information, see <a href="https://docs.aws.amazon.com/bedrock/latest/userguide/flows-nodes.html">Node types in a flow</a> in the Amazon Bedrock User Guide.</p>
 * @public
 */
export interface CollectorFlowNodeConfiguration {}

/**
 * <p>Defines a condition in the condition node.</p>
 * @public
 */
export interface FlowCondition {
  /**
   * <p>A name for the condition that you can reference.</p>
   * @public
   */
  name: string | undefined;

  /**
   * <p>Defines the condition. You must refer to at least one of the inputs in the condition. For more information, expand the Condition node section in <a href="https://docs.aws.amazon.com/bedrock/latest/userguide/flows-how-it-works.html#flows-nodes">Node types in prompt flows</a>.</p>
   * @public
   */
  expression?: string | undefined;
}

/**
 * <p>Defines a condition node in your flow. You can specify conditions that determine which node comes next in the flow. For more information, see <a href="https://docs.aws.amazon.com/bedrock/latest/userguide/flows-nodes.html">Node types in a flow</a> in the Amazon Bedrock User Guide.</p>
 * @public
 */
export interface ConditionFlowNodeConfiguration {
  /**
   * <p>An array of conditions. Each member contains the name of a condition and an expression that defines the condition.</p>
   * @public
   */
  conditions: FlowCondition[] | undefined;
}

/**
 * <p>Contains configurations for an inline code node in your flow. Inline code nodes let you write and execute code directly within your flow, enabling data transformations, custom logic, and integrations without needing an external Lambda function.</p>
 * @public
 */
export interface InlineCodeFlowNodeConfiguration {
  /**
   * <p>The code that's executed in your inline code node. The code can access input data from previous nodes in the flow, perform operations on that data, and produce output that can be used by other nodes in your flow.</p> <p>The code must be valid in the programming <code>language</code> that you specify.</p>
   * @public
   */
  code: string | undefined;

  /**
   * <p>The programming language used by your inline code node.</p> <p>The code must be valid in the programming <code>language</code> that you specify. Currently, only Python 3 (<code>Python_3</code>) is supported.</p>
   * @public
   */
  language: SupportedLanguages | undefined;
}

/**
 * <p>Contains configurations for the input flow node for a flow. This node takes the input from flow invocation and passes it to the next node in the data type that you specify.</p>
 * @public
 */
export interface InputFlowNodeConfiguration {}

/**
 * <p>Contains configurations for an iterator node in a flow. Takes an input that is an array and iteratively sends each item of the array as an output to the following node. The size of the array is also returned in the output.</p> <p>The output flow node at the end of the flow iteration will return a response for each member of the array. To return only one response, you can include a collector node downstream from the iterator node.</p>
 * @public
 */
export interface IteratorFlowNodeConfiguration {}

/**
 * <p>Contains inference configurations related to model inference for a prompt. For more information, see <a href="https://docs.aws.amazon.com/bedrock/latest/userguide/inference-parameters.html">Inference parameters</a>.</p>
 * @public
 */
export interface PromptModelInferenceConfiguration {
  /**
   * <p>Controls the randomness of the response. Choose a lower value for more predictable outputs and a higher value for more surprising outputs.</p>
   * @public
   */
  temperature?: number | undefined;

  /**
   * <p>The percentage of most-likely candidates that the model considers for the next token.</p>
   * @public
   */
  topP?: number | undefined;

  /**
   * <p>The maximum number of tokens to return in the response.</p>
   * @public
   */
  maxTokens?: number | undefined;

  /**
   * <p>A list of strings that define sequences after which the model will stop generating.</p>
   * @public
   */
  stopSequences?: string[] | undefined;
}

/**
 * <p>Contains inference configurations for the prompt.</p>
 * @public
 */
export type PromptInferenceConfiguration =
  | PromptInferenceConfiguration.TextMember
  | PromptInferenceConfiguration.$UnknownMember;

/**
 * @public
 */
export namespace PromptInferenceConfiguration {
  /**
   * <p>Contains inference configurations for a text prompt.</p>
   * @public
   */
  export interface TextMember {
    text: PromptModelInferenceConfiguration;
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
    text: (value: PromptModelInferenceConfiguration) => T;
    _: (name: string, value: any) => T;
  }
}

/**
 * <p>The performance-related configuration options for the knowledge base retrieval and generation process.</p>
 * @public
 */
export interface PerformanceConfiguration {
  /**
   * <p>The latency optimization setting.</p>
   * @public
   */
  latency?: PerformanceConfigLatency | undefined;
}

/**
 * <p>Defines a custom prompt template for orchestrating the retrieval and generation process.</p>
 * @public
 */
export interface KnowledgeBasePromptTemplate {
  /**
   * <p>The text of the prompt template.</p>
   * @public
   */
  textPromptTemplate?: string | undefined;
}

/**
 * <p>Configures how the knowledge base orchestrates the retrieval and generation process, allowing for customization of prompts, inference parameters, and performance settings.</p>
 * @public
 */
export interface KnowledgeBaseOrchestrationConfiguration {
  /**
   * <p>A custom prompt template for orchestrating the retrieval and generation process.</p>
   * @public
   */
  promptTemplate?: KnowledgeBasePromptTemplate | undefined;

  /**
   * <p>Contains inference configurations for the prompt.</p>
   * @public
   */
  inferenceConfig?: PromptInferenceConfiguration | undefined;

  /**
   * <p>The additional model-specific request parameters as key-value pairs to be included in the request to the foundation model.</p>
   * @public
   */
  additionalModelRequestFields?: Record<string, __DocumentType> | undefined;

  /**
   * <p>The performance configuration options for the knowledge base retrieval and generation process.</p>
   * @public
   */
  performanceConfig?: PerformanceConfiguration | undefined;
}

/**
 * <p>Specifies a metadata field to include or exclude during the reranking process.</p>
 * @public
 */
export interface FieldForReranking {
  /**
   * <p>The name of the metadata field to include or exclude during reranking.</p>
   * @public
   */
  fieldName: string | undefined;
}

/**
 * <p>Configures the metadata fields to include or exclude during the reranking process when using selective mode.</p>
 * @public
 */
export type RerankingMetadataSelectiveModeConfiguration =
  | RerankingMetadataSelectiveModeConfiguration.FieldsToExcludeMember
  | RerankingMetadataSelectiveModeConfiguration.FieldsToIncludeMember
  | RerankingMetadataSelectiveModeConfiguration.$UnknownMember;

/**
 * @public
 */
export namespace RerankingMetadataSelectiveModeConfiguration {
  /**
   * <p>Specifies the metadata fields to include in the reranking process.</p>
   * @public
   */
  export interface FieldsToIncludeMember {
    fieldsToInclude: FieldForReranking[];
    fieldsToExclude?: never;
    $unknown?: never;
  }

  /**
   * <p>Specifies the metadata fields to exclude from the reranking process.</p>
   * @public
   */
  export interface FieldsToExcludeMember {
    fieldsToInclude?: never;
    fieldsToExclude: FieldForReranking[];
    $unknown?: never;
  }

  /**
   * @public
   */
  export interface $UnknownMember {
    fieldsToInclude?: never;
    fieldsToExclude?: never;
    $unknown: [string, any];
  }

  /**
   * @deprecated unused in schema-serde mode.
   *
   */
  export interface Visitor<T> {
    fieldsToInclude: (value: FieldForReranking[]) => T;
    fieldsToExclude: (value: FieldForReranking[]) => T;
    _: (name: string, value: any) => T;
  }
}

/**
 * <p>Specifies how metadata fields should be handled during the reranking process.</p>
 * @public
 */
export interface MetadataConfigurationForReranking {
  /**
   * <p>The mode for selecting metadata fields for reranking.</p>
   * @public
   */
  selectionMode: RerankingMetadataSelectionMode | undefined;

  /**
   * <p>The configuration for selective metadata field inclusion or exclusion during reranking.</p>
   * @public
   */
  selectiveModeConfiguration?: RerankingMetadataSelectiveModeConfiguration | undefined;
}

/**
 * <p>Configures the Amazon Bedrock model used for reranking retrieved results.</p>
 * @public
 */
export interface VectorSearchBedrockRerankingModelConfiguration {
  /**
   * <p>The Amazon Resource Name (ARN) of the Amazon Bedrock reranker model.</p>
   * @public
   */
  modelArn: string | undefined;

  /**
   * <p>Specifies additional model-specific request parameters as key-value pairs that are included in the request to the Amazon Bedrock reranker model.</p>
   * @public
   */
  additionalModelRequestFields?: Record<string, __DocumentType> | undefined;
}

/**
 * <p>Configures the Amazon Bedrock reranker model to improve the relevance of retrieved results.</p>
 * @public
 */
export interface VectorSearchBedrockRerankingConfiguration {
  /**
   * <p>Specifies the configuration for the Amazon Bedrock reranker model.</p>
   * @public
   */
  modelConfiguration: VectorSearchBedrockRerankingModelConfiguration | undefined;

  /**
   * <p>Specifies the number of results to return after reranking.</p>
   * @public
   */
  numberOfRerankedResults?: number | undefined;

  /**
   * <p>Specifies how metadata fields should be handled during the reranking process.</p>
   * @public
   */
  metadataConfiguration?: MetadataConfigurationForReranking | undefined;
}

/**
 * <p>Specifies how retrieved results from a knowledge base are reranked to improve relevance.</p>
 * @public
 */
export interface VectorSearchRerankingConfiguration {
  /**
   * <p>Specifies the type of reranking model to use. Currently, the only supported value is <code>BEDROCK_RERANKING_MODEL</code>.</p>
   * @public
   */
  type: VectorSearchRerankingConfigurationType | undefined;

  /**
   * <p>Specifies the configuration for using an Amazon Bedrock reranker model to rerank retrieved results.</p>
   * @public
   */
  bedrockRerankingConfiguration?: VectorSearchBedrockRerankingConfiguration | undefined;
}

/**
 * <p>Contains configurations for a knowledge base node in a flow. This node takes a query as the input and returns, as the output, the retrieved responses directly (as an array) or a response generated based on the retrieved responses. For more information, see <a href="https://docs.aws.amazon.com/bedrock/latest/userguide/flows-nodes.html">Node types in a flow</a> in the Amazon Bedrock User Guide.</p>
 * @public
 */
export interface KnowledgeBaseFlowNodeConfiguration {
  /**
   * <p>The unique identifier of the knowledge base to query.</p>
   * @public
   */
  knowledgeBaseId: string | undefined;

  /**
   * <p>The unique identifier of the model or <a href="https://docs.aws.amazon.com/bedrock/latest/userguide/cross-region-inference.html">inference profile</a> to use to generate a response from the query results. Omit this field if you want to return the retrieved results as an array.</p>
   * @public
   */
  modelId?: string | undefined;

  /**
   * <p>Contains configurations for a guardrail to apply during query and response generation for the knowledge base in this configuration.</p>
   * @public
   */
  guardrailConfiguration?: GuardrailConfiguration | undefined;

  /**
   * <p>The number of results to retrieve from the knowledge base.</p>
   * @public
   */
  numberOfResults?: number | undefined;

  /**
   * <p>A custom prompt template to use with the knowledge base for generating responses.</p>
   * @public
   */
  promptTemplate?: KnowledgeBasePromptTemplate | undefined;

  /**
   * <p>Contains inference configurations for the prompt.</p>
   * @public
   */
  inferenceConfiguration?: PromptInferenceConfiguration | undefined;

  /**
   * <p>The configuration for reranking the retrieved results from the knowledge base to improve relevance.</p>
   * @public
   */
  rerankingConfiguration?: VectorSearchRerankingConfiguration | undefined;

  /**
   * <p>The configuration for orchestrating the retrieval and generation process in the knowledge base node.</p>
   * @public
   */
  orchestrationConfiguration?: KnowledgeBaseOrchestrationConfiguration | undefined;
}

/**
 * <p>Contains configurations for a Lambda function node in the flow. You specify the Lambda function to invoke and the inputs into the function. The output is the response that is defined in the Lambda function. For more information, see <a href="https://docs.aws.amazon.com/bedrock/latest/userguide/flows-nodes.html">Node types in a flow</a> in the Amazon Bedrock User Guide.</p>
 * @public
 */
export interface LambdaFunctionFlowNodeConfiguration {
  /**
   * <p>The Amazon Resource Name (ARN) of the Lambda function to invoke.</p>
   * @public
   */
  lambdaArn: string | undefined;
}

/**
 * <p>Contains configurations for a Lex node in the flow. You specify a Amazon Lex bot to invoke. This node takes an utterance as the input and returns as the output the intent identified by the Amazon Lex bot. For more information, see <a href="https://docs.aws.amazon.com/bedrock/latest/userguide/flows-nodes.html">Node types in a flow</a> in the Amazon Bedrock User Guide.</p>
 * @public
 */
export interface LexFlowNodeConfiguration {
  /**
   * <p>The Amazon Resource Name (ARN) of the Amazon Lex bot alias to invoke.</p>
   * @public
   */
  botAliasArn: string | undefined;

  /**
   * <p>The Region to invoke the Amazon Lex bot in.</p>
   * @public
   */
  localeId: string | undefined;
}

/**
 * <p>Contains configurations for the controller node of a DoWhile loop in the flow.</p>
 * @public
 */
export interface LoopControllerFlowNodeConfiguration {
  /**
   * <p>Specifies the condition that determines when the flow exits the DoWhile loop. The loop executes until this condition evaluates to true.</p>
   * @public
   */
  continueCondition: FlowCondition | undefined;

  /**
   * <p>Specifies the maximum number of times the DoWhile loop can iterate before the flow exits the loop.</p>
   * @public
   */
  maxIterations?: number | undefined;
}

/**
 * <p>Contains configurations for the input node of a DoWhile loop in the flow.</p>
 * @public
 */
export interface LoopInputFlowNodeConfiguration {}

/**
 * <p>Contains configurations for an output flow node in the flow. You specify the data type expected for the input into the node in the <code>type</code> field and how to return the final output in the <code>expression</code> field.</p>
 * @public
 */
export interface OutputFlowNodeConfiguration {}

/**
 * <p>Contains information about a variable in the prompt.</p>
 * @public
 */
export interface PromptInputVariable {
  /**
   * <p>The name of the variable.</p>
   * @public
   */
  name?: string | undefined;
}

/**
 * <p>Indicates where a cache checkpoint is located. All information before this checkpoint is cached to be accessed on subsequent requests.</p>
 * @public
 */
export interface CachePointBlock {
  /**
   * <p>Indicates that the CachePointBlock is of the default type</p>
   * @public
   */
  type: CachePointType | undefined;
}

/**
 * <p>Contains the content for the message you pass to, or receive from a model. For more information, see <a href="https://docs.aws.amazon.com/bedrock/latest/userguide/prompt-management-create.html">Create a prompt using Prompt management</a>.</p>
 * @public
 */
export type ContentBlock =
  | ContentBlock.CachePointMember
  | ContentBlock.TextMember
  | ContentBlock.$UnknownMember;

/**
 * @public
 */
export namespace ContentBlock {
  /**
   * <p>The text in the message.</p>
   * @public
   */
  export interface TextMember {
    text: string;
    cachePoint?: never;
    $unknown?: never;
  }

  /**
   * <p>Creates a cache checkpoint within a message.</p>
   * @public
   */
  export interface CachePointMember {
    text?: never;
    cachePoint: CachePointBlock;
    $unknown?: never;
  }

  /**
   * @public
   */
  export interface $UnknownMember {
    text?: never;
    cachePoint?: never;
    $unknown: [string, any];
  }

  /**
   * @deprecated unused in schema-serde mode.
   *
   */
  export interface Visitor<T> {
    text: (value: string) => T;
    cachePoint: (value: CachePointBlock) => T;
    _: (name: string, value: any) => T;
  }
}

/**
 * <p>A message input or response from a model. For more information, see <a href="https://docs.aws.amazon.com/bedrock/latest/userguide/prompt-management-create.html">Create a prompt using Prompt management</a>.</p>
 * @public
 */
export interface Message {
  /**
   * <p>The role that the message belongs to.</p>
   * @public
   */
  role: ConversationRole | undefined;

  /**
   * <p>The content in the message.</p>
   * @public
   */
  content: ContentBlock[] | undefined;
}

/**
 * <p>Contains a system prompt to provide context to the model or to describe how it should behave. For more information, see <a href="https://docs.aws.amazon.com/bedrock/latest/userguide/prompt-management-create.html">Create a prompt using Prompt management</a>.</p>
 * @public
 */
export type SystemContentBlock =
  | SystemContentBlock.CachePointMember
  | SystemContentBlock.TextMember
  | SystemContentBlock.$UnknownMember;

/**
 * @public
 */
export namespace SystemContentBlock {
  /**
   * <p>The text in the system prompt.</p>
   * @public
   */
  export interface TextMember {
    text: string;
    cachePoint?: never;
    $unknown?: never;
  }

  /**
   * <p>Creates a cache checkpoint within a tool designation</p>
   * @public
   */
  export interface CachePointMember {
    text?: never;
    cachePoint: CachePointBlock;
    $unknown?: never;
  }

  /**
   * @public
   */
  export interface $UnknownMember {
    text?: never;
    cachePoint?: never;
    $unknown: [string, any];
  }

  /**
   * @deprecated unused in schema-serde mode.
   *
   */
  export interface Visitor<T> {
    text: (value: string) => T;
    cachePoint: (value: CachePointBlock) => T;
    _: (name: string, value: any) => T;
  }
}

/**
 * <p>Defines tools, at least one of which must be requested by the model. No text is generated but the results of tool use are sent back to the model to help generate a response. For more information, see <a href="https://docs.aws.amazon.com/bedrock/latest/userguide/tool-use.html">Use a tool to complete an Amazon Bedrock model response</a>.</p>
 * @public
 */
export interface AnyToolChoice {}

/**
 * <p>Defines tools. The model automatically decides whether to call a tool or to generate text instead. For more information, see <a href="https://docs.aws.amazon.com/bedrock/latest/userguide/tool-use.html">Use a tool to complete an Amazon Bedrock model response</a>.</p>
 * @public
 */
export interface AutoToolChoice {}

/**
 * <p>Defines a specific tool that the model must request. No text is generated but the results of tool use are sent back to the model to help generate a response. For more information, see <a href="https://docs.aws.amazon.com/bedrock/latest/userguide/tool-use.html">Use a tool to complete an Amazon Bedrock model response</a>.</p>
 * @public
 */
export interface SpecificToolChoice {
  /**
   * <p>The name of the tool.</p>
   * @public
   */
  name: string | undefined;
}

/**
 * <p>Defines which tools the model should request when invoked. For more information, see <a href="https://docs.aws.amazon.com/bedrock/latest/userguide/tool-use.html">Use a tool to complete an Amazon Bedrock model response</a>.</p>
 * @public
 */
export type ToolChoice =
  | ToolChoice.AnyMember
  | ToolChoice.AutoMember
  | ToolChoice.ToolMember
  | ToolChoice.$UnknownMember;

/**
 * @public
 */
export namespace ToolChoice {
  /**
   * <p>Defines tools. The model automatically decides whether to call a tool or to generate text instead.</p>
   * @public
   */
  export interface AutoMember {
    auto: AutoToolChoice;
    any?: never;
    tool?: never;
    $unknown?: never;
  }

  /**
   * <p>Defines tools, at least one of which must be requested by the model. No text is generated but the results of tool use are sent back to the model to help generate a response.</p>
   * @public
   */
  export interface AnyMember {
    auto?: never;
    any: AnyToolChoice;
    tool?: never;
    $unknown?: never;
  }

  /**
   * <p>Defines a specific tool that the model must request. No text is generated but the results of tool use are sent back to the model to help generate a response.</p>
   * @public
   */
  export interface ToolMember {
    auto?: never;
    any?: never;
    tool: SpecificToolChoice;
    $unknown?: never;
  }

  /**
   * @public
   */
  export interface $UnknownMember {
    auto?: never;
    any?: never;
    tool?: never;
    $unknown: [string, any];
  }

  /**
   * @deprecated unused in schema-serde mode.
   *
   */
  export interface Visitor<T> {
    auto: (value: AutoToolChoice) => T;
    any: (value: AnyToolChoice) => T;
    tool: (value: SpecificToolChoice) => T;
    _: (name: string, value: any) => T;
  }
}

/**
 * <p>The input schema for the tool. For more information, see <a href="https://docs.aws.amazon.com/bedrock/latest/userguide/tool-use.html">Use a tool to complete an Amazon Bedrock model response</a>.</p>
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
   * <p>A JSON object defining the input schema for the tool.</p>
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
 * <p>Contains a specification for a tool. For more information, see <a href="https://docs.aws.amazon.com/bedrock/latest/userguide/tool-use.html">Use a tool to complete an Amazon Bedrock model response</a>.</p>
 * @public
 */
export interface ToolSpecification {
  /**
   * <p>The name of the tool.</p>
   * @public
   */
  name: string | undefined;

  /**
   * <p>The description of the tool.</p>
   * @public
   */
  description?: string | undefined;

  /**
   * <p>The input schema for the tool.</p>
   * @public
   */
  inputSchema: ToolInputSchema | undefined;
}

/**
 * <p>Contains configurations for a tool that a model can use when generating a response. For more information, see <a href="https://docs.aws.amazon.com/bedrock/latest/userguide/tool-use.html">Use a tool to complete an Amazon Bedrock model response</a>.</p>
 * @public
 */
export type Tool =
  | Tool.CachePointMember
  | Tool.ToolSpecMember
  | Tool.$UnknownMember;

/**
 * @public
 */
export namespace Tool {
  /**
   * <p>The specification for the tool.</p>
   * @public
   */
  export interface ToolSpecMember {
    toolSpec: ToolSpecification;
    cachePoint?: never;
    $unknown?: never;
  }

  /**
   * <p>Creates a cache checkpoint within a tool designation</p>
   * @public
   */
  export interface CachePointMember {
    toolSpec?: never;
    cachePoint: CachePointBlock;
    $unknown?: never;
  }

  /**
   * @public
   */
  export interface $UnknownMember {
    toolSpec?: never;
    cachePoint?: never;
    $unknown: [string, any];
  }

  /**
   * @deprecated unused in schema-serde mode.
   *
   */
  export interface Visitor<T> {
    toolSpec: (value: ToolSpecification) => T;
    cachePoint: (value: CachePointBlock) => T;
    _: (name: string, value: any) => T;
  }
}

/**
 * <p>Configuration information for the tools that the model can use when generating a response. For more information, see <a href="https://docs.aws.amazon.com/bedrock/latest/userguide/tool-use.html">Use a tool to complete an Amazon Bedrock model response</a>.</p>
 * @public
 */
export interface ToolConfiguration {
  /**
   * <p>An array of tools to pass to a model.</p>
   * @public
   */
  tools: Tool[] | undefined;

  /**
   * <p>Defines which tools the model should request when invoked.</p>
   * @public
   */
  toolChoice?: ToolChoice | undefined;
}

/**
 * <p>Contains configurations to use a prompt in a conversational format. For more information, see <a href="https://docs.aws.amazon.com/bedrock/latest/userguide/prompt-management-create.html">Create a prompt using Prompt management</a>.</p>
 * @public
 */
export interface ChatPromptTemplateConfiguration {
  /**
   * <p>Contains messages in the chat for the prompt.</p>
   * @public
   */
  messages: Message[] | undefined;

  /**
   * <p>Contains system prompts to provide context to the model or to describe how it should behave.</p>
   * @public
   */
  system?: SystemContentBlock[] | undefined;

  /**
   * <p>An array of the variables in the prompt template.</p>
   * @public
   */
  inputVariables?: PromptInputVariable[] | undefined;

  /**
   * <p>Configuration information for the tools that the model can use when generating a response.</p>
   * @public
   */
  toolConfiguration?: ToolConfiguration | undefined;
}

/**
 * <p>Contains configurations for a text prompt template. To include a variable, enclose a word in double curly braces as in <code>\{\{variable\}\}</code>.</p>
 * @public
 */
export interface TextPromptTemplateConfiguration {
  /**
   * <p>The message for the prompt.</p>
   * @public
   */
  text: string | undefined;

  /**
   * <p>A cache checkpoint within a template configuration.</p>
   * @public
   */
  cachePoint?: CachePointBlock | undefined;

  /**
   * <p>An array of the variables in the prompt template.</p>
   * @public
   */
  inputVariables?: PromptInputVariable[] | undefined;
}

/**
 * <p>Contains the message for a prompt. For more information, see <a href="https://docs.aws.amazon.com/bedrock/latest/userguide/prompt-management.html">Construct and store reusable prompts with Prompt management in Amazon Bedrock</a>.</p>
 * @public
 */
export type PromptTemplateConfiguration =
  | PromptTemplateConfiguration.ChatMember
  | PromptTemplateConfiguration.TextMember
  | PromptTemplateConfiguration.$UnknownMember;

/**
 * @public
 */
export namespace PromptTemplateConfiguration {
  /**
   * <p>Contains configurations for the text in a message for a prompt.</p>
   * @public
   */
  export interface TextMember {
    text: TextPromptTemplateConfiguration;
    chat?: never;
    $unknown?: never;
  }

  /**
   * <p>Contains configurations to use the prompt in a conversational format.</p>
   * @public
   */
  export interface ChatMember {
    text?: never;
    chat: ChatPromptTemplateConfiguration;
    $unknown?: never;
  }

  /**
   * @public
   */
  export interface $UnknownMember {
    text?: never;
    chat?: never;
    $unknown: [string, any];
  }

  /**
   * @deprecated unused in schema-serde mode.
   *
   */
  export interface Visitor<T> {
    text: (value: TextPromptTemplateConfiguration) => T;
    chat: (value: ChatPromptTemplateConfiguration) => T;
    _: (name: string, value: any) => T;
  }
}

/**
 * <p>Contains configurations for a prompt defined inline in the node.</p>
 * @public
 */
export interface PromptFlowNodeInlineConfiguration {
  /**
   * <p>The type of prompt template.</p>
   * @public
   */
  templateType: PromptTemplateType | undefined;

  /**
   * <p>Contains a prompt and variables in the prompt that can be replaced with values at runtime.</p>
   * @public
   */
  templateConfiguration: PromptTemplateConfiguration | undefined;

  /**
   * <p>The unique identifier of the model or <a href="https://docs.aws.amazon.com/bedrock/latest/userguide/cross-region-inference.html">inference profile</a> to run inference with.</p>
   * @public
   */
  modelId: string | undefined;

  /**
   * <p>Contains inference configurations for the prompt.</p>
   * @public
   */
  inferenceConfiguration?: PromptInferenceConfiguration | undefined;

  /**
   * <p>Additional fields to be included in the model request for the Prompt node.</p>
   * @public
   */
  additionalModelRequestFields?: __DocumentType | undefined;
}

/**
 * <p>Contains configurations for a prompt from Prompt management to use in a node.</p>
 * @public
 */
export interface PromptFlowNodeResourceConfiguration {
  /**
   * <p>The Amazon Resource Name (ARN) of the prompt from Prompt management.</p>
   * @public
   */
  promptArn: string | undefined;
}

/**
 * <p>Contains configurations for a prompt and whether it is from Prompt management or defined inline.</p>
 * @public
 */
export type PromptFlowNodeSourceConfiguration =
  | PromptFlowNodeSourceConfiguration.InlineMember
  | PromptFlowNodeSourceConfiguration.ResourceMember
  | PromptFlowNodeSourceConfiguration.$UnknownMember;

/**
 * @public
 */
export namespace PromptFlowNodeSourceConfiguration {
  /**
   * <p>Contains configurations for a prompt from Prompt management.</p>
   * @public
   */
  export interface ResourceMember {
    resource: PromptFlowNodeResourceConfiguration;
    inline?: never;
    $unknown?: never;
  }

  /**
   * <p>Contains configurations for a prompt that is defined inline</p>
   * @public
   */
  export interface InlineMember {
    resource?: never;
    inline: PromptFlowNodeInlineConfiguration;
    $unknown?: never;
  }

  /**
   * @public
   */
  export interface $UnknownMember {
    resource?: never;
    inline?: never;
    $unknown: [string, any];
  }

  /**
   * @deprecated unused in schema-serde mode.
   *
   */
  export interface Visitor<T> {
    resource: (value: PromptFlowNodeResourceConfiguration) => T;
    inline: (value: PromptFlowNodeInlineConfiguration) => T;
    _: (name: string, value: any) => T;
  }
}

/**
 * <p>Contains configurations for a prompt node in the flow. You can use a prompt from Prompt management or you can define one in this node. If the prompt contains variables, the inputs into this node will fill in the variables. The output from this node is the response generated by the model. For more information, see <a href="https://docs.aws.amazon.com/bedrock/latest/userguide/flows-nodes.html">Node types in a flow</a> in the Amazon Bedrock User Guide.</p>
 * @public
 */
export interface PromptFlowNodeConfiguration {
  /**
   * <p>Specifies whether the prompt is from Prompt management or defined inline.</p>
   * @public
   */
  sourceConfiguration: PromptFlowNodeSourceConfiguration | undefined;

  /**
   * <p>Contains configurations for a guardrail to apply to the prompt in this node and the response generated from it.</p>
   * @public
   */
  guardrailConfiguration?: GuardrailConfiguration | undefined;
}

/**
 * <p>Contains configurations for the Amazon S3 location from which to retrieve data to return as the output from the node.</p>
 * @public
 */
export interface RetrievalFlowNodeS3Configuration {
  /**
   * <p>The name of the Amazon S3 bucket from which to retrieve data.</p>
   * @public
   */
  bucketName: string | undefined;
}

/**
 * <p>Contains configurations for the service to use for retrieving data to return as the output from the node.</p>
 * @public
 */
export type RetrievalFlowNodeServiceConfiguration =
  | RetrievalFlowNodeServiceConfiguration.S3Member
  | RetrievalFlowNodeServiceConfiguration.$UnknownMember;

/**
 * @public
 */
export namespace RetrievalFlowNodeServiceConfiguration {
  /**
   * <p>Contains configurations for the Amazon S3 location from which to retrieve data to return as the output from the node.</p>
   * @public
   */
  export interface S3Member {
    s3: RetrievalFlowNodeS3Configuration;
    $unknown?: never;
  }

  /**
   * @public
   */
  export interface $UnknownMember {
    s3?: never;
    $unknown: [string, any];
  }

  /**
   * @deprecated unused in schema-serde mode.
   *
   */
  export interface Visitor<T> {
    s3: (value: RetrievalFlowNodeS3Configuration) => T;
    _: (name: string, value: any) => T;
  }
}

/**
 * <p>Contains configurations for a Retrieval node in a flow. This node retrieves data from the Amazon S3 location that you specify and returns it as the output.</p>
 * @public
 */
export interface RetrievalFlowNodeConfiguration {
  /**
   * <p>Contains configurations for the service to use for retrieving data to return as the output from the node.</p>
   * @public
   */
  serviceConfiguration: RetrievalFlowNodeServiceConfiguration | undefined;
}

/**
 * <p>Contains configurations for the Amazon S3 location in which to store the input into the node.</p>
 * @public
 */
export interface StorageFlowNodeS3Configuration {
  /**
   * <p>The name of the Amazon S3 bucket in which to store the input into the node.</p>
   * @public
   */
  bucketName: string | undefined;
}

/**
 * <p>Contains configurations for the service to use for storing the input into the node.</p>
 * @public
 */
export type StorageFlowNodeServiceConfiguration =
  | StorageFlowNodeServiceConfiguration.S3Member
  | StorageFlowNodeServiceConfiguration.$UnknownMember;

/**
 * @public
 */
export namespace StorageFlowNodeServiceConfiguration {
  /**
   * <p>Contains configurations for the Amazon S3 location in which to store the input into the node.</p>
   * @public
   */
  export interface S3Member {
    s3: StorageFlowNodeS3Configuration;
    $unknown?: never;
  }

  /**
   * @public
   */
  export interface $UnknownMember {
    s3?: never;
    $unknown: [string, any];
  }

  /**
   * @deprecated unused in schema-serde mode.
   *
   */
  export interface Visitor<T> {
    s3: (value: StorageFlowNodeS3Configuration) => T;
    _: (name: string, value: any) => T;
  }
}

/**
 * <p>Contains configurations for a Storage node in a flow. This node stores the input in an Amazon S3 location that you specify.</p>
 * @public
 */
export interface StorageFlowNodeConfiguration {
  /**
   * <p>Contains configurations for the service to use for storing the input into the node.</p>
   * @public
   */
  serviceConfiguration: StorageFlowNodeServiceConfiguration | undefined;
}

/**
 * <p>Contains configurations for an input in an Amazon Bedrock Flows node.</p>
 * @public
 */
export interface FlowNodeInput {
  /**
   * <p>Specifies a name for the input that you can reference.</p>
   * @public
   */
  name: string | undefined;

  /**
   * <p>Specifies the data type of the input. If the input doesn't match this type at runtime, a validation error will be thrown.</p>
   * @public
   */
  type: FlowNodeIODataType | undefined;

  /**
   * <p>An expression that formats the input for the node. For an explanation of how to create expressions, see <a href="https://docs.aws.amazon.com/bedrock/latest/userguide/flows-expressions.html">Expressions in Prompt flows in Amazon Bedrock</a>.</p>
   * @public
   */
  expression: string | undefined;

  /**
   * <p>Specifies how input data flows between iterations in a DoWhile loop.</p> <ul> <li> <p> <code>LoopCondition</code> - Controls whether the loop continues by evaluating condition expressions against the input data. Use this category to define the condition that determines if the loop should continue. </p> </li> <li> <p> <code>ReturnValueToLoopStart</code> - Defines data to pass back to the start of the loop's next iteration. Use this category for variables that you want to update for each loop iteration.</p> </li> <li> <p> <code>ExitLoop</code> - Defines the value that's available once the loop ends. Use this category to expose loop results to nodes outside the loop.</p> </li> </ul>
   * @public
   */
  category?: FlowNodeInputCategory | undefined;
}

/**
 * <p>Contains configurations for an output from a node.</p>
 * @public
 */
export interface FlowNodeOutput {
  /**
   * <p>A name for the output that you can reference.</p>
   * @public
   */
  name: string | undefined;

  /**
   * <p>The data type of the output. If the output doesn't match this type at runtime, a validation error will be thrown.</p>
   * @public
   */
  type: FlowNodeIODataType | undefined;
}

/**
 * @public
 */
export interface DeleteFlowRequest {
  /**
   * <p>The unique identifier of the flow.</p>
   * @public
   */
  flowIdentifier: string | undefined;

  /**
   * <p>By default, this value is <code>false</code> and deletion is stopped if the resource is in use. If you set it to <code>true</code>, the resource will be deleted even if the resource is in use.</p>
   * @public
   */
  skipResourceInUseCheck?: boolean | undefined;
}

/**
 * @public
 */
export interface DeleteFlowResponse {
  /**
   * <p>The unique identifier of the flow.</p>
   * @public
   */
  id: string | undefined;
}

/**
 * <p>Determines how multiple nodes in a flow can run in parallel. Running nodes concurrently can improve your flow's performance.</p>
 * @public
 */
export interface FlowAliasConcurrencyConfiguration {
  /**
   * <p>The type of concurrency to use for parallel node execution. Specify one of the following options:</p> <ul> <li> <p> <code>Automatic</code> - Amazon Bedrock determines which nodes can be executed in parallel based on the flow definition and its dependencies.</p> </li> <li> <p> <code>Manual</code> - You specify which nodes can be executed in parallel.</p> </li> </ul>
   * @public
   */
  type: ConcurrencyType | undefined;

  /**
   * <p>The maximum number of nodes that can be executed concurrently in the flow.</p>
   * @public
   */
  maxConcurrency?: number | undefined;
}

/**
 * <p>Contains information about a version that the alias maps to.</p>
 * @public
 */
export interface FlowAliasRoutingConfigurationListItem {
  /**
   * <p>The version that the alias maps to.</p>
   * @public
   */
  flowVersion?: string | undefined;
}

/**
 * @public
 */
export interface CreateFlowAliasRequest {
  /**
   * <p>A name for the alias.</p>
   * @public
   */
  name: string | undefined;

  /**
   * <p>A description for the alias.</p>
   * @public
   */
  description?: string | undefined;

  /**
   * <p>Contains information about the version to which to map the alias.</p>
   * @public
   */
  routingConfiguration: FlowAliasRoutingConfigurationListItem[] | undefined;

  /**
   * <p>The configuration that specifies how nodes in the flow are executed in parallel.</p>
   * @public
   */
  concurrencyConfiguration?: FlowAliasConcurrencyConfiguration | undefined;

  /**
   * <p>The unique identifier of the flow for which to create an alias.</p>
   * @public
   */
  flowIdentifier: string | undefined;

  /**
   * <p>A unique, case-sensitive identifier to ensure that the API request completes no more than one time. If this token matches a previous request, Amazon Bedrock ignores the request, but does not return an error. For more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/APIReference/Run_Instance_Idempotency.html">Ensuring idempotency</a>.</p>
   * @public
   */
  clientToken?: string | undefined;

  /**
   * <p>Any tags that you want to attach to the alias of the flow. For more information, see <a href="https://docs.aws.amazon.com/bedrock/latest/userguide/tagging.html">Tagging resources in Amazon Bedrock</a>.</p>
   * @public
   */
  tags?: Record<string, string> | undefined;
}

/**
 * @public
 */
export interface CreateFlowAliasResponse {
  /**
   * <p>The name of the alias.</p>
   * @public
   */
  name: string | undefined;

  /**
   * <p>The description of the alias.</p>
   * @public
   */
  description?: string | undefined;

  /**
   * <p>Contains information about the version that the alias is mapped to.</p>
   * @public
   */
  routingConfiguration: FlowAliasRoutingConfigurationListItem[] | undefined;

  /**
   * <p>The configuration that specifies how nodes in the flow are executed in parallel.</p>
   * @public
   */
  concurrencyConfiguration?: FlowAliasConcurrencyConfiguration | undefined;

  /**
   * <p>The unique identifier of the flow that the alias belongs to.</p>
   * @public
   */
  flowId: string | undefined;

  /**
   * <p>The unique identifier of the alias.</p>
   * @public
   */
  id: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the alias.</p>
   * @public
   */
  arn: string | undefined;

  /**
   * <p>The time at which the alias was created.</p>
   * @public
   */
  createdAt: Date | undefined;

  /**
   * <p>The time at which the alias of the flow was last updated.</p>
   * @public
   */
  updatedAt: Date | undefined;
}

/**
 * @public
 */
export interface DeleteFlowAliasRequest {
  /**
   * <p>The unique identifier of the flow that the alias belongs to.</p>
   * @public
   */
  flowIdentifier: string | undefined;

  /**
   * <p>The unique identifier of the alias to be deleted.</p>
   * @public
   */
  aliasIdentifier: string | undefined;
}

/**
 * @public
 */
export interface DeleteFlowAliasResponse {
  /**
   * <p>The unique identifier of the flow that the alias belongs to.</p>
   * @public
   */
  flowId: string | undefined;

  /**
   * <p>The unique identifier of the flow.</p>
   * @public
   */
  id: string | undefined;
}

/**
 * @public
 */
export interface GetFlowAliasRequest {
  /**
   * <p>The unique identifier of the flow that the alias belongs to.</p>
   * @public
   */
  flowIdentifier: string | undefined;

  /**
   * <p>The unique identifier of the alias for which to retrieve information.</p>
   * @public
   */
  aliasIdentifier: string | undefined;
}

/**
 * @public
 */
export interface GetFlowAliasResponse {
  /**
   * <p>The name of the alias.</p>
   * @public
   */
  name: string | undefined;

  /**
   * <p>The description of the flow.</p>
   * @public
   */
  description?: string | undefined;

  /**
   * <p>Contains information about the version that the alias is mapped to.</p>
   * @public
   */
  routingConfiguration: FlowAliasRoutingConfigurationListItem[] | undefined;

  /**
   * <p>The configuration that specifies how nodes in the flow are executed in parallel.</p>
   * @public
   */
  concurrencyConfiguration?: FlowAliasConcurrencyConfiguration | undefined;

  /**
   * <p>The unique identifier of the flow that the alias belongs to.</p>
   * @public
   */
  flowId: string | undefined;

  /**
   * <p>The unique identifier of the alias of the flow.</p>
   * @public
   */
  id: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the flow.</p>
   * @public
   */
  arn: string | undefined;

  /**
   * <p>The time at which the flow was created.</p>
   * @public
   */
  createdAt: Date | undefined;

  /**
   * <p>The time at which the alias was last updated.</p>
   * @public
   */
  updatedAt: Date | undefined;
}

/**
 * @public
 */
export interface ListFlowAliasesRequest {
  /**
   * <p>The unique identifier of the flow for which aliases are being returned.</p>
   * @public
   */
  flowIdentifier: string | undefined;

  /**
   * <p>The maximum number of results to return in the response. If the total number of results is greater than this value, use the token returned in the response in the <code>nextToken</code> field when making another request to return the next batch of results.</p>
   * @public
   */
  maxResults?: number | undefined;

  /**
   * <p>If the total number of results is greater than the <code>maxResults</code> value provided in the request, enter the token returned in the <code>nextToken</code> field in the response in this field to return the next batch of results.</p>
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * <p>Contains information about an alias of a flow.</p> <p>This data type is used in the following API operations:</p> <ul> <li> <p> <a href="https://docs.aws.amazon.com/bedrock/latest/APIReference/API_agent_ListFlowAliases.html#API_agent_ListFlowAliases_ResponseSyntax">ListFlowAliases response</a> </p> </li> </ul>
 * @public
 */
export interface FlowAliasSummary {
  /**
   * <p>The name of the alias.</p>
   * @public
   */
  name: string | undefined;

  /**
   * <p>A description of the alias.</p>
   * @public
   */
  description?: string | undefined;

  /**
   * <p>A list of configurations about the versions that the alias maps to. Currently, you can only specify one.</p>
   * @public
   */
  routingConfiguration: FlowAliasRoutingConfigurationListItem[] | undefined;

  /**
   * <p>The configuration that specifies how nodes in the flow are executed concurrently.</p>
   * @public
   */
  concurrencyConfiguration?: FlowAliasConcurrencyConfiguration | undefined;

  /**
   * <p>The unique identifier of the flow.</p>
   * @public
   */
  flowId: string | undefined;

  /**
   * <p>The unique identifier of the alias of the flow.</p>
   * @public
   */
  id: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the alias.</p>
   * @public
   */
  arn: string | undefined;

  /**
   * <p>The time at which the alias was created.</p>
   * @public
   */
  createdAt: Date | undefined;

  /**
   * <p>The time at which the alias was last updated.</p>
   * @public
   */
  updatedAt: Date | undefined;
}

/**
 * @public
 */
export interface ListFlowAliasesResponse {
  /**
   * <p>A list, each member of which contains information about an alias.</p>
   * @public
   */
  flowAliasSummaries: FlowAliasSummary[] | undefined;

  /**
   * <p>If the total number of results is greater than the <code>maxResults</code> value provided in the request, use this token when making another request in the <code>nextToken</code> field to return the next batch of results.</p>
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * @public
 */
export interface UpdateFlowAliasRequest {
  /**
   * <p>The name of the alias.</p>
   * @public
   */
  name: string | undefined;

  /**
   * <p>A description for the alias.</p>
   * @public
   */
  description?: string | undefined;

  /**
   * <p>Contains information about the version to which to map the alias.</p>
   * @public
   */
  routingConfiguration: FlowAliasRoutingConfigurationListItem[] | undefined;

  /**
   * <p>The configuration that specifies how nodes in the flow are executed in parallel.</p>
   * @public
   */
  concurrencyConfiguration?: FlowAliasConcurrencyConfiguration | undefined;

  /**
   * <p>The unique identifier of the flow.</p>
   * @public
   */
  flowIdentifier: string | undefined;

  /**
   * <p>The unique identifier of the alias.</p>
   * @public
   */
  aliasIdentifier: string | undefined;
}

/**
 * @public
 */
export interface UpdateFlowAliasResponse {
  /**
   * <p>The name of the alias.</p>
   * @public
   */
  name: string | undefined;

  /**
   * <p>The description of the flow.</p>
   * @public
   */
  description?: string | undefined;

  /**
   * <p>Contains information about the version that the alias is mapped to.</p>
   * @public
   */
  routingConfiguration: FlowAliasRoutingConfigurationListItem[] | undefined;

  /**
   * <p>The configuration that specifies how nodes in the flow are executed in parallel.</p>
   * @public
   */
  concurrencyConfiguration?: FlowAliasConcurrencyConfiguration | undefined;

  /**
   * <p>The unique identifier of the flow.</p>
   * @public
   */
  flowId: string | undefined;

  /**
   * <p>The unique identifier of the alias.</p>
   * @public
   */
  id: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the flow.</p>
   * @public
   */
  arn: string | undefined;

  /**
   * <p>The time at which the flow was created.</p>
   * @public
   */
  createdAt: Date | undefined;

  /**
   * <p>The time at which the alias was last updated.</p>
   * @public
   */
  updatedAt: Date | undefined;
}

/**
 * @public
 */
export interface CreateFlowVersionRequest {
  /**
   * <p>The unique identifier of the flow that you want to create a version of.</p>
   * @public
   */
  flowIdentifier: string | undefined;

  /**
   * <p>A description of the version of the flow.</p>
   * @public
   */
  description?: string | undefined;

  /**
   * <p>A unique, case-sensitive identifier to ensure that the API request completes no more than one time. If this token matches a previous request, Amazon Bedrock ignores the request, but does not return an error. For more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/APIReference/Run_Instance_Idempotency.html">Ensuring idempotency</a>.</p>
   * @public
   */
  clientToken?: string | undefined;
}

/**
 * @public
 */
export interface DeleteFlowVersionRequest {
  /**
   * <p>The unique identifier of the flow whose version that you want to delete</p>
   * @public
   */
  flowIdentifier: string | undefined;

  /**
   * <p>The version of the flow that you want to delete.</p>
   * @public
   */
  flowVersion: string | undefined;

  /**
   * <p>By default, this value is <code>false</code> and deletion is stopped if the resource is in use. If you set it to <code>true</code>, the resource will be deleted even if the resource is in use.</p>
   * @public
   */
  skipResourceInUseCheck?: boolean | undefined;
}

/**
 * @public
 */
export interface DeleteFlowVersionResponse {
  /**
   * <p>The unique identifier of the flow.</p>
   * @public
   */
  id: string | undefined;

  /**
   * <p>The version of the flow being deleted.</p>
   * @public
   */
  version: string | undefined;
}

/**
 * @public
 */
export interface GetFlowVersionRequest {
  /**
   * <p>The unique identifier of the flow for which to get information.</p>
   * @public
   */
  flowIdentifier: string | undefined;

  /**
   * <p>The version of the flow for which to get information.</p>
   * @public
   */
  flowVersion: string | undefined;
}

/**
 * @public
 */
export interface ListFlowVersionsRequest {
  /**
   * <p>The unique identifier of the flow.</p>
   * @public
   */
  flowIdentifier: string | undefined;

  /**
   * <p>The maximum number of results to return in the response. If the total number of results is greater than this value, use the token returned in the response in the <code>nextToken</code> field when making another request to return the next batch of results.</p>
   * @public
   */
  maxResults?: number | undefined;

  /**
   * <p>If the total number of results is greater than the <code>maxResults</code> value provided in the request, enter the token returned in the <code>nextToken</code> field in the response in this field to return the next batch of results.</p>
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * <p>Contains information about a version of a flow.</p> <p>This data type is used in the following API operations:</p> <ul> <li> <p> <a href="https://docs.aws.amazon.com/bedrock/latest/APIReference/API_agent_ListFlowVersions.html#API_agent_ListFlowVersions_ResponseSyntax">ListFlowVersions response</a> </p> </li> </ul>
 * @public
 */
export interface FlowVersionSummary {
  /**
   * <p>The unique identifier of the flow.</p>
   * @public
   */
  id: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the flow that the version belongs to.</p>
   * @public
   */
  arn: string | undefined;

  /**
   * <p>The status of the flow.</p>
   * @public
   */
  status: FlowStatus | undefined;

  /**
   * <p>The time at the version was created.</p>
   * @public
   */
  createdAt: Date | undefined;

  /**
   * <p>The version of the flow.</p>
   * @public
   */
  version: string | undefined;
}

/**
 * @public
 */
export interface ListFlowVersionsResponse {
  /**
   * <p>A list, each member of which contains information about a flow.</p>
   * @public
   */
  flowVersionSummaries: FlowVersionSummary[] | undefined;

  /**
   * <p>If the total number of results is greater than the <code>maxResults</code> value provided in the request, use this token when making another request in the <code>nextToken</code> field to return the next batch of results.</p>
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * @public
 */
export interface GetFlowRequest {
  /**
   * <p>The unique identifier of the flow.</p>
   * @public
   */
  flowIdentifier: string | undefined;
}

/**
 * <p>Details about a cyclic connection detected in the flow.</p>
 * @public
 */
export interface CyclicConnectionFlowValidationDetails {
  /**
   * <p>The name of the connection that causes the cycle in the flow.</p>
   * @public
   */
  connection: string | undefined;
}

/**
 * <p>Details about duplicate condition expressions found in a condition node.</p>
 * @public
 */
export interface DuplicateConditionExpressionFlowValidationDetails {
  /**
   * <p>The name of the node containing the duplicate condition expressions.</p>
   * @public
   */
  node: string | undefined;

  /**
   * <p>The duplicated condition expression.</p>
   * @public
   */
  expression: string | undefined;
}

/**
 * <p>Details about duplicate connections found between two nodes in the flow.</p>
 * @public
 */
export interface DuplicateConnectionsFlowValidationDetails {
  /**
   * <p>The name of the source node where the duplicate connection starts.</p>
   * @public
   */
  source: string | undefined;

  /**
   * <p>The name of the target node where the duplicate connection ends.</p>
   * @public
   */
  target: string | undefined;
}

/**
 * <p>Details about incompatible data types in a connection between nodes.</p>
 * @public
 */
export interface IncompatibleConnectionDataTypeFlowValidationDetails {
  /**
   * <p>The name of the connection with incompatible data types.</p>
   * @public
   */
  connection: string | undefined;
}

/**
 * <p>Details about a flow that contains connections that violate loop boundary rules.</p>
 * @public
 */
export interface InvalidLoopBoundaryFlowValidationDetails {
  /**
   * <p>The name of the connection that violates loop boundary rules.</p>
   * @public
   */
  connection: string | undefined;

  /**
   * <p>The source node of the connection that violates DoWhile loop boundary rules.</p>
   * @public
   */
  source: string | undefined;

  /**
   * <p>The target node of the connection that violates DoWhile loop boundary rules.</p>
   * @public
   */
  target: string | undefined;
}

/**
 * <p>Details about a flow that contains an incompatible node in a DoWhile loop.</p>
 * @public
 */
export interface LoopIncompatibleNodeTypeFlowValidationDetails {
  /**
   * <p>The <code>Loop</code> container node that contains an incompatible node.</p>
   * @public
   */
  node: string | undefined;

  /**
   * <p>The node type of the incompatible node in the DoWhile loop. Some node types, like a condition node, aren't allowed in a DoWhile loop.</p>
   * @public
   */
  incompatibleNodeType: IncompatibleLoopNodeType | undefined;

  /**
   * <p>The node that's incompatible in the DoWhile loop.</p>
   * @public
   */
  incompatibleNodeName: string | undefined;
}

/**
 * <p>Details about a malformed condition expression in a node.</p>
 * @public
 */
export interface MalformedConditionExpressionFlowValidationDetails {
  /**
   * <p>The name of the node containing the malformed condition expression.</p>
   * @public
   */
  node: string | undefined;

  /**
   * <p>The name of the malformed condition.</p>
   * @public
   */
  condition: string | undefined;

  /**
   * <p>The error message describing why the condition expression is malformed.</p>
   * @public
   */
  cause: string | undefined;
}

/**
 * <p>Details about a malformed input expression in a node.</p>
 * @public
 */
export interface MalformedNodeInputExpressionFlowValidationDetails {
  /**
   * <p>The name of the node containing the malformed input expression.</p>
   * @public
   */
  node: string | undefined;

  /**
   * <p>The name of the input with the malformed expression.</p>
   * @public
   */
  input: string | undefined;

  /**
   * <p>The error message describing why the input expression is malformed.</p>
   * @public
   */
  cause: string | undefined;
}

/**
 * <p>Details about mismatched input data types in a node.</p>
 * @public
 */
export interface MismatchedNodeInputTypeFlowValidationDetails {
  /**
   * <p>The name of the node containing the input with the mismatched data type.</p>
   * @public
   */
  node: string | undefined;

  /**
   * <p>The name of the input with the mismatched data type.</p>
   * @public
   */
  input: string | undefined;

  /**
   * <p>The expected data type for the node input.</p>
   * @public
   */
  expectedType: FlowNodeIODataType | undefined;
}

/**
 * <p>Details about mismatched output data types in a node.</p>
 * @public
 */
export interface MismatchedNodeOutputTypeFlowValidationDetails {
  /**
   * <p>The name of the node containing the output with the mismatched data type.</p>
   * @public
   */
  node: string | undefined;

  /**
   * <p>The name of the output with the mismatched data type.</p>
   * @public
   */
  output: string | undefined;

  /**
   * <p>The expected data type for the node output.</p>
   * @public
   */
  expectedType: FlowNodeIODataType | undefined;
}

/**
 * <p>Details about a connection missing required configuration.</p>
 * @public
 */
export interface MissingConnectionConfigurationFlowValidationDetails {
  /**
   * <p>The name of the connection missing configuration.</p>
   * @public
   */
  connection: string | undefined;
}

/**
 * <p>Details about a missing default condition in a conditional node.</p>
 * @public
 */
export interface MissingDefaultConditionFlowValidationDetails {
  /**
   * <p>The name of the node missing the default condition.</p>
   * @public
   */
  node: string | undefined;
}

/**
 * <p>Details about missing ending nodes (such as FlowOutputNode) in the flow.</p>
 * @public
 */
export interface MissingEndingNodesFlowValidationDetails {}

/**
 * <p>Details about a flow that's missing a required <code>LoopController</code> node in a DoWhile loop.</p>
 * @public
 */
export interface MissingLoopControllerNodeFlowValidationDetails {
  /**
   * <p>The DoWhile loop in a flow that's missing a required <code>LoopController</code> node.</p>
   * @public
   */
  loopNode: string | undefined;
}

/**
 * <p>Details about a flow that's missing a required <code>LoopInput</code> node in a DoWhile loop.</p>
 * @public
 */
export interface MissingLoopInputNodeFlowValidationDetails {
  /**
   * <p>The DoWhile loop in a flow that's missing a required <code>LoopInput</code> node.</p>
   * @public
   */
  loopNode: string | undefined;
}

/**
 * <p>Details about a node missing a required configuration.</p>
 * @public
 */
export interface MissingNodeConfigurationFlowValidationDetails {
  /**
   * <p>The name of the node missing a required configuration.</p>
   * @public
   */
  node: string | undefined;
}

/**
 * <p>Details about a missing required input in a node.</p>
 * @public
 */
export interface MissingNodeInputFlowValidationDetails {
  /**
   * <p>The name of the node missing the required input.</p>
   * @public
   */
  node: string | undefined;

  /**
   * <p>The name of the missing input.</p>
   * @public
   */
  input: string | undefined;
}

/**
 * <p>Details about a missing required output in a node.</p>
 * @public
 */
export interface MissingNodeOutputFlowValidationDetails {
  /**
   * <p>The name of the node missing the required output.</p>
   * @public
   */
  node: string | undefined;

  /**
   * <p>The name of the missing output.</p>
   * @public
   */
  output: string | undefined;
}

/**
 * <p>Details about missing starting nodes (such as FlowInputNode) in the flow.</p>
 * @public
 */
export interface MissingStartingNodesFlowValidationDetails {}

/**
 * <p>Details about a flow that contains multiple <code>LoopController</code> nodes in a DoWhile loop.</p>
 * @public
 */
export interface MultipleLoopControllerNodesFlowValidationDetails {
  /**
   * <p>The DoWhile loop in a flow that contains multiple <code>LoopController</code> nodes.</p>
   * @public
   */
  loopNode: string | undefined;
}

/**
 * <p>Details about a flow that contains multiple <code>LoopInput</code> nodes in a DoWhile loop.</p>
 * @public
 */
export interface MultipleLoopInputNodesFlowValidationDetails {
  /**
   * <p>The DoWhile loop in a flow that contains multiple <code>LoopInput</code> nodes.</p>
   * @public
   */
  loopNode: string | undefined;
}

/**
 * <p>Details about multiple connections to a single node input.</p>
 * @public
 */
export interface MultipleNodeInputConnectionsFlowValidationDetails {
  /**
   * <p>The name of the node containing the input with multiple connections.</p>
   * @public
   */
  node: string | undefined;

  /**
   * <p>The name of the input with multiple connections to it.</p>
   * @public
   */
  input: string | undefined;
}

/**
 * <p>Details about an unfulfilled node input with no valid connections.</p>
 * @public
 */
export interface UnfulfilledNodeInputFlowValidationDetails {
  /**
   * <p>The name of the node containing the unfulfilled input.</p>
   * @public
   */
  node: string | undefined;

  /**
   * <p>The name of the unfulfilled input. An input is unfulfilled if there are no data connections to it.</p>
   * @public
   */
  input: string | undefined;
}

/**
 * <p>Details about an unknown condition for a connection.</p>
 * @public
 */
export interface UnknownConnectionConditionFlowValidationDetails {
  /**
   * <p>The name of the connection with the unknown condition.</p>
   * @public
   */
  connection: string | undefined;
}

/**
 * <p>Details about an unknown source node for a connection.</p>
 * @public
 */
export interface UnknownConnectionSourceFlowValidationDetails {
  /**
   * <p>The name of the connection with the unknown source.</p>
   * @public
   */
  connection: string | undefined;
}

/**
 * <p>Details about an unknown source output for a connection.</p>
 * @public
 */
export interface UnknownConnectionSourceOutputFlowValidationDetails {
  /**
   * <p>The name of the connection with the unknown source output.</p>
   * @public
   */
  connection: string | undefined;
}

/**
 * <p>Details about an unknown target node for a connection.</p>
 * @public
 */
export interface UnknownConnectionTargetFlowValidationDetails {
  /**
   * <p>The name of the connection with the unknown target.</p>
   * @public
   */
  connection: string | undefined;
}

/**
 * <p>Details about an unknown target input for a connection.</p>
 * @public
 */
export interface UnknownConnectionTargetInputFlowValidationDetails {
  /**
   * <p>The name of the connection with the unknown target input.</p>
   * @public
   */
  connection: string | undefined;
}

/**
 * <p>Details about an unknown input for a node.</p>
 * @public
 */
export interface UnknownNodeInputFlowValidationDetails {
  /**
   * <p>The name of the unknown input.</p>
   * @public
   */
  node: string | undefined;

  /**
   * <p>The name of the node with the unknown input.</p>
   * @public
   */
  input: string | undefined;
}

/**
 * <p>Details about an unknown output for a node.</p>
 * @public
 */
export interface UnknownNodeOutputFlowValidationDetails {
  /**
   * <p>The name of the node with the unknown output.</p>
   * @public
   */
  node: string | undefined;

  /**
   * <p>The name of the unknown output.</p>
   * @public
   */
  output: string | undefined;
}

/**
 * <p>Details about an unreachable node in the flow. A node is unreachable when there are no paths to it from any starting node.</p>
 * @public
 */
export interface UnreachableNodeFlowValidationDetails {
  /**
   * <p>The name of the unreachable node.</p>
   * @public
   */
  node: string | undefined;
}

/**
 * <p>Details about unsatisfied conditions for a connection. A condition is unsatisfied if it can never be true, for example two branches of condition node cannot be simultaneously true.</p>
 * @public
 */
export interface UnsatisfiedConnectionConditionsFlowValidationDetails {
  /**
   * <p>The name of the connection with unsatisfied conditions.</p>
   * @public
   */
  connection: string | undefined;
}

/**
 * <p>Details about an unspecified validation that doesn't fit other categories.</p>
 * @public
 */
export interface UnspecifiedFlowValidationDetails {}

/**
 * <p>A union type containing various possible validation issues in the flow.</p>
 * @public
 */
export type FlowValidationDetails =
  | FlowValidationDetails.CyclicConnectionMember
  | FlowValidationDetails.DuplicateConditionExpressionMember
  | FlowValidationDetails.DuplicateConnectionsMember
  | FlowValidationDetails.IncompatibleConnectionDataTypeMember
  | FlowValidationDetails.InvalidLoopBoundaryMember
  | FlowValidationDetails.LoopIncompatibleNodeTypeMember
  | FlowValidationDetails.MalformedConditionExpressionMember
  | FlowValidationDetails.MalformedNodeInputExpressionMember
  | FlowValidationDetails.MismatchedNodeInputTypeMember
  | FlowValidationDetails.MismatchedNodeOutputTypeMember
  | FlowValidationDetails.MissingConnectionConfigurationMember
  | FlowValidationDetails.MissingDefaultConditionMember
  | FlowValidationDetails.MissingEndingNodesMember
  | FlowValidationDetails.MissingLoopControllerNodeMember
  | FlowValidationDetails.MissingLoopInputNodeMember
  | FlowValidationDetails.MissingNodeConfigurationMember
  | FlowValidationDetails.MissingNodeInputMember
  | FlowValidationDetails.MissingNodeOutputMember
  | FlowValidationDetails.MissingStartingNodesMember
  | FlowValidationDetails.MultipleLoopControllerNodesMember
  | FlowValidationDetails.MultipleLoopInputNodesMember
  | FlowValidationDetails.MultipleNodeInputConnectionsMember
  | FlowValidationDetails.UnfulfilledNodeInputMember
  | FlowValidationDetails.UnknownConnectionConditionMember
  | FlowValidationDetails.UnknownConnectionSourceMember
  | FlowValidationDetails.UnknownConnectionSourceOutputMember
  | FlowValidationDetails.UnknownConnectionTargetMember
  | FlowValidationDetails.UnknownConnectionTargetInputMember
  | FlowValidationDetails.UnknownNodeInputMember
  | FlowValidationDetails.UnknownNodeOutputMember
  | FlowValidationDetails.UnreachableNodeMember
  | FlowValidationDetails.UnsatisfiedConnectionConditionsMember
  | FlowValidationDetails.UnspecifiedMember
  | FlowValidationDetails.$UnknownMember;

/**
 * @public
 */
export namespace FlowValidationDetails {
  /**
   * <p>Details about a cyclic connection in the flow.</p>
   * @public
   */
  export interface CyclicConnectionMember {
    cyclicConnection: CyclicConnectionFlowValidationDetails;
    duplicateConnections?: never;
    duplicateConditionExpression?: never;
    unreachableNode?: never;
    unknownConnectionSource?: never;
    unknownConnectionSourceOutput?: never;
    unknownConnectionTarget?: never;
    unknownConnectionTargetInput?: never;
    unknownConnectionCondition?: never;
    malformedConditionExpression?: never;
    malformedNodeInputExpression?: never;
    mismatchedNodeInputType?: never;
    mismatchedNodeOutputType?: never;
    incompatibleConnectionDataType?: never;
    missingConnectionConfiguration?: never;
    missingDefaultCondition?: never;
    missingEndingNodes?: never;
    missingNodeConfiguration?: never;
    missingNodeInput?: never;
    missingNodeOutput?: never;
    missingStartingNodes?: never;
    multipleNodeInputConnections?: never;
    unfulfilledNodeInput?: never;
    unsatisfiedConnectionConditions?: never;
    unspecified?: never;
    unknownNodeInput?: never;
    unknownNodeOutput?: never;
    missingLoopInputNode?: never;
    missingLoopControllerNode?: never;
    multipleLoopInputNodes?: never;
    multipleLoopControllerNodes?: never;
    loopIncompatibleNodeType?: never;
    invalidLoopBoundary?: never;
    $unknown?: never;
  }

  /**
   * <p>Details about duplicate connections between nodes.</p>
   * @public
   */
  export interface DuplicateConnectionsMember {
    cyclicConnection?: never;
    duplicateConnections: DuplicateConnectionsFlowValidationDetails;
    duplicateConditionExpression?: never;
    unreachableNode?: never;
    unknownConnectionSource?: never;
    unknownConnectionSourceOutput?: never;
    unknownConnectionTarget?: never;
    unknownConnectionTargetInput?: never;
    unknownConnectionCondition?: never;
    malformedConditionExpression?: never;
    malformedNodeInputExpression?: never;
    mismatchedNodeInputType?: never;
    mismatchedNodeOutputType?: never;
    incompatibleConnectionDataType?: never;
    missingConnectionConfiguration?: never;
    missingDefaultCondition?: never;
    missingEndingNodes?: never;
    missingNodeConfiguration?: never;
    missingNodeInput?: never;
    missingNodeOutput?: never;
    missingStartingNodes?: never;
    multipleNodeInputConnections?: never;
    unfulfilledNodeInput?: never;
    unsatisfiedConnectionConditions?: never;
    unspecified?: never;
    unknownNodeInput?: never;
    unknownNodeOutput?: never;
    missingLoopInputNode?: never;
    missingLoopControllerNode?: never;
    multipleLoopInputNodes?: never;
    multipleLoopControllerNodes?: never;
    loopIncompatibleNodeType?: never;
    invalidLoopBoundary?: never;
    $unknown?: never;
  }

  /**
   * <p>Details about duplicate condition expressions in a node.</p>
   * @public
   */
  export interface DuplicateConditionExpressionMember {
    cyclicConnection?: never;
    duplicateConnections?: never;
    duplicateConditionExpression: DuplicateConditionExpressionFlowValidationDetails;
    unreachableNode?: never;
    unknownConnectionSource?: never;
    unknownConnectionSourceOutput?: never;
    unknownConnectionTarget?: never;
    unknownConnectionTargetInput?: never;
    unknownConnectionCondition?: never;
    malformedConditionExpression?: never;
    malformedNodeInputExpression?: never;
    mismatchedNodeInputType?: never;
    mismatchedNodeOutputType?: never;
    incompatibleConnectionDataType?: never;
    missingConnectionConfiguration?: never;
    missingDefaultCondition?: never;
    missingEndingNodes?: never;
    missingNodeConfiguration?: never;
    missingNodeInput?: never;
    missingNodeOutput?: never;
    missingStartingNodes?: never;
    multipleNodeInputConnections?: never;
    unfulfilledNodeInput?: never;
    unsatisfiedConnectionConditions?: never;
    unspecified?: never;
    unknownNodeInput?: never;
    unknownNodeOutput?: never;
    missingLoopInputNode?: never;
    missingLoopControllerNode?: never;
    multipleLoopInputNodes?: never;
    multipleLoopControllerNodes?: never;
    loopIncompatibleNodeType?: never;
    invalidLoopBoundary?: never;
    $unknown?: never;
  }

  /**
   * <p>Details about an unreachable node in the flow.</p>
   * @public
   */
  export interface UnreachableNodeMember {
    cyclicConnection?: never;
    duplicateConnections?: never;
    duplicateConditionExpression?: never;
    unreachableNode: UnreachableNodeFlowValidationDetails;
    unknownConnectionSource?: never;
    unknownConnectionSourceOutput?: never;
    unknownConnectionTarget?: never;
    unknownConnectionTargetInput?: never;
    unknownConnectionCondition?: never;
    malformedConditionExpression?: never;
    malformedNodeInputExpression?: never;
    mismatchedNodeInputType?: never;
    mismatchedNodeOutputType?: never;
    incompatibleConnectionDataType?: never;
    missingConnectionConfiguration?: never;
    missingDefaultCondition?: never;
    missingEndingNodes?: never;
    missingNodeConfiguration?: never;
    missingNodeInput?: never;
    missingNodeOutput?: never;
    missingStartingNodes?: never;
    multipleNodeInputConnections?: never;
    unfulfilledNodeInput?: never;
    unsatisfiedConnectionConditions?: never;
    unspecified?: never;
    unknownNodeInput?: never;
    unknownNodeOutput?: never;
    missingLoopInputNode?: never;
    missingLoopControllerNode?: never;
    multipleLoopInputNodes?: never;
    multipleLoopControllerNodes?: never;
    loopIncompatibleNodeType?: never;
    invalidLoopBoundary?: never;
    $unknown?: never;
  }

  /**
   * <p>Details about an unknown source node for a connection.</p>
   * @public
   */
  export interface UnknownConnectionSourceMember {
    cyclicConnection?: never;
    duplicateConnections?: never;
    duplicateConditionExpression?: never;
    unreachableNode?: never;
    unknownConnectionSource: UnknownConnectionSourceFlowValidationDetails;
    unknownConnectionSourceOutput?: never;
    unknownConnectionTarget?: never;
    unknownConnectionTargetInput?: never;
    unknownConnectionCondition?: never;
    malformedConditionExpression?: never;
    malformedNodeInputExpression?: never;
    mismatchedNodeInputType?: never;
    mismatchedNodeOutputType?: never;
    incompatibleConnectionDataType?: never;
    missingConnectionConfiguration?: never;
    missingDefaultCondition?: never;
    missingEndingNodes?: never;
    missingNodeConfiguration?: never;
    missingNodeInput?: never;
    missingNodeOutput?: never;
    missingStartingNodes?: never;
    multipleNodeInputConnections?: never;
    unfulfilledNodeInput?: never;
    unsatisfiedConnectionConditions?: never;
    unspecified?: never;
    unknownNodeInput?: never;
    unknownNodeOutput?: never;
    missingLoopInputNode?: never;
    missingLoopControllerNode?: never;
    multipleLoopInputNodes?: never;
    multipleLoopControllerNodes?: never;
    loopIncompatibleNodeType?: never;
    invalidLoopBoundary?: never;
    $unknown?: never;
  }

  /**
   * <p>Details about an unknown source output for a connection.</p>
   * @public
   */
  export interface UnknownConnectionSourceOutputMember {
    cyclicConnection?: never;
    duplicateConnections?: never;
    duplicateConditionExpression?: never;
    unreachableNode?: never;
    unknownConnectionSource?: never;
    unknownConnectionSourceOutput: UnknownConnectionSourceOutputFlowValidationDetails;
    unknownConnectionTarget?: never;
    unknownConnectionTargetInput?: never;
    unknownConnectionCondition?: never;
    malformedConditionExpression?: never;
    malformedNodeInputExpression?: never;
    mismatchedNodeInputType?: never;
    mismatchedNodeOutputType?: never;
    incompatibleConnectionDataType?: never;
    missingConnectionConfiguration?: never;
    missingDefaultCondition?: never;
    missingEndingNodes?: never;
    missingNodeConfiguration?: never;
    missingNodeInput?: never;
    missingNodeOutput?: never;
    missingStartingNodes?: never;
    multipleNodeInputConnections?: never;
    unfulfilledNodeInput?: never;
    unsatisfiedConnectionConditions?: never;
    unspecified?: never;
    unknownNodeInput?: never;
    unknownNodeOutput?: never;
    missingLoopInputNode?: never;
    missingLoopControllerNode?: never;
    multipleLoopInputNodes?: never;
    multipleLoopControllerNodes?: never;
    loopIncompatibleNodeType?: never;
    invalidLoopBoundary?: never;
    $unknown?: never;
  }

  /**
   * <p>Details about an unknown target node for a connection.</p>
   * @public
   */
  export interface UnknownConnectionTargetMember {
    cyclicConnection?: never;
    duplicateConnections?: never;
    duplicateConditionExpression?: never;
    unreachableNode?: never;
    unknownConnectionSource?: never;
    unknownConnectionSourceOutput?: never;
    unknownConnectionTarget: UnknownConnectionTargetFlowValidationDetails;
    unknownConnectionTargetInput?: never;
    unknownConnectionCondition?: never;
    malformedConditionExpression?: never;
    malformedNodeInputExpression?: never;
    mismatchedNodeInputType?: never;
    mismatchedNodeOutputType?: never;
    incompatibleConnectionDataType?: never;
    missingConnectionConfiguration?: never;
    missingDefaultCondition?: never;
    missingEndingNodes?: never;
    missingNodeConfiguration?: never;
    missingNodeInput?: never;
    missingNodeOutput?: never;
    missingStartingNodes?: never;
    multipleNodeInputConnections?: never;
    unfulfilledNodeInput?: never;
    unsatisfiedConnectionConditions?: never;
    unspecified?: never;
    unknownNodeInput?: never;
    unknownNodeOutput?: never;
    missingLoopInputNode?: never;
    missingLoopControllerNode?: never;
    multipleLoopInputNodes?: never;
    multipleLoopControllerNodes?: never;
    loopIncompatibleNodeType?: never;
    invalidLoopBoundary?: never;
    $unknown?: never;
  }

  /**
   * <p>Details about an unknown target input for a connection.</p>
   * @public
   */
  export interface UnknownConnectionTargetInputMember {
    cyclicConnection?: never;
    duplicateConnections?: never;
    duplicateConditionExpression?: never;
    unreachableNode?: never;
    unknownConnectionSource?: never;
    unknownConnectionSourceOutput?: never;
    unknownConnectionTarget?: never;
    unknownConnectionTargetInput: UnknownConnectionTargetInputFlowValidationDetails;
    unknownConnectionCondition?: never;
    malformedConditionExpression?: never;
    malformedNodeInputExpression?: never;
    mismatchedNodeInputType?: never;
    mismatchedNodeOutputType?: never;
    incompatibleConnectionDataType?: never;
    missingConnectionConfiguration?: never;
    missingDefaultCondition?: never;
    missingEndingNodes?: never;
    missingNodeConfiguration?: never;
    missingNodeInput?: never;
    missingNodeOutput?: never;
    missingStartingNodes?: never;
    multipleNodeInputConnections?: never;
    unfulfilledNodeInput?: never;
    unsatisfiedConnectionConditions?: never;
    unspecified?: never;
    unknownNodeInput?: never;
    unknownNodeOutput?: never;
    missingLoopInputNode?: never;
    missingLoopControllerNode?: never;
    multipleLoopInputNodes?: never;
    multipleLoopControllerNodes?: never;
    loopIncompatibleNodeType?: never;
    invalidLoopBoundary?: never;
    $unknown?: never;
  }

  /**
   * <p>Details about an unknown condition for a connection.</p>
   * @public
   */
  export interface UnknownConnectionConditionMember {
    cyclicConnection?: never;
    duplicateConnections?: never;
    duplicateConditionExpression?: never;
    unreachableNode?: never;
    unknownConnectionSource?: never;
    unknownConnectionSourceOutput?: never;
    unknownConnectionTarget?: never;
    unknownConnectionTargetInput?: never;
    unknownConnectionCondition: UnknownConnectionConditionFlowValidationDetails;
    malformedConditionExpression?: never;
    malformedNodeInputExpression?: never;
    mismatchedNodeInputType?: never;
    mismatchedNodeOutputType?: never;
    incompatibleConnectionDataType?: never;
    missingConnectionConfiguration?: never;
    missingDefaultCondition?: never;
    missingEndingNodes?: never;
    missingNodeConfiguration?: never;
    missingNodeInput?: never;
    missingNodeOutput?: never;
    missingStartingNodes?: never;
    multipleNodeInputConnections?: never;
    unfulfilledNodeInput?: never;
    unsatisfiedConnectionConditions?: never;
    unspecified?: never;
    unknownNodeInput?: never;
    unknownNodeOutput?: never;
    missingLoopInputNode?: never;
    missingLoopControllerNode?: never;
    multipleLoopInputNodes?: never;
    multipleLoopControllerNodes?: never;
    loopIncompatibleNodeType?: never;
    invalidLoopBoundary?: never;
    $unknown?: never;
  }

  /**
   * <p>Details about a malformed condition expression in a node.</p>
   * @public
   */
  export interface MalformedConditionExpressionMember {
    cyclicConnection?: never;
    duplicateConnections?: never;
    duplicateConditionExpression?: never;
    unreachableNode?: never;
    unknownConnectionSource?: never;
    unknownConnectionSourceOutput?: never;
    unknownConnectionTarget?: never;
    unknownConnectionTargetInput?: never;
    unknownConnectionCondition?: never;
    malformedConditionExpression: MalformedConditionExpressionFlowValidationDetails;
    malformedNodeInputExpression?: never;
    mismatchedNodeInputType?: never;
    mismatchedNodeOutputType?: never;
    incompatibleConnectionDataType?: never;
    missingConnectionConfiguration?: never;
    missingDefaultCondition?: never;
    missingEndingNodes?: never;
    missingNodeConfiguration?: never;
    missingNodeInput?: never;
    missingNodeOutput?: never;
    missingStartingNodes?: never;
    multipleNodeInputConnections?: never;
    unfulfilledNodeInput?: never;
    unsatisfiedConnectionConditions?: never;
    unspecified?: never;
    unknownNodeInput?: never;
    unknownNodeOutput?: never;
    missingLoopInputNode?: never;
    missingLoopControllerNode?: never;
    multipleLoopInputNodes?: never;
    multipleLoopControllerNodes?: never;
    loopIncompatibleNodeType?: never;
    invalidLoopBoundary?: never;
    $unknown?: never;
  }

  /**
   * <p>Details about a malformed input expression in a node.</p>
   * @public
   */
  export interface MalformedNodeInputExpressionMember {
    cyclicConnection?: never;
    duplicateConnections?: never;
    duplicateConditionExpression?: never;
    unreachableNode?: never;
    unknownConnectionSource?: never;
    unknownConnectionSourceOutput?: never;
    unknownConnectionTarget?: never;
    unknownConnectionTargetInput?: never;
    unknownConnectionCondition?: never;
    malformedConditionExpression?: never;
    malformedNodeInputExpression: MalformedNodeInputExpressionFlowValidationDetails;
    mismatchedNodeInputType?: never;
    mismatchedNodeOutputType?: never;
    incompatibleConnectionDataType?: never;
    missingConnectionConfiguration?: never;
    missingDefaultCondition?: never;
    missingEndingNodes?: never;
    missingNodeConfiguration?: never;
    missingNodeInput?: never;
    missingNodeOutput?: never;
    missingStartingNodes?: never;
    multipleNodeInputConnections?: never;
    unfulfilledNodeInput?: never;
    unsatisfiedConnectionConditions?: never;
    unspecified?: never;
    unknownNodeInput?: never;
    unknownNodeOutput?: never;
    missingLoopInputNode?: never;
    missingLoopControllerNode?: never;
    multipleLoopInputNodes?: never;
    multipleLoopControllerNodes?: never;
    loopIncompatibleNodeType?: never;
    invalidLoopBoundary?: never;
    $unknown?: never;
  }

  /**
   * <p>Details about mismatched input data types in a node.</p>
   * @public
   */
  export interface MismatchedNodeInputTypeMember {
    cyclicConnection?: never;
    duplicateConnections?: never;
    duplicateConditionExpression?: never;
    unreachableNode?: never;
    unknownConnectionSource?: never;
    unknownConnectionSourceOutput?: never;
    unknownConnectionTarget?: never;
    unknownConnectionTargetInput?: never;
    unknownConnectionCondition?: never;
    malformedConditionExpression?: never;
    malformedNodeInputExpression?: never;
    mismatchedNodeInputType: MismatchedNodeInputTypeFlowValidationDetails;
    mismatchedNodeOutputType?: never;
    incompatibleConnectionDataType?: never;
    missingConnectionConfiguration?: never;
    missingDefaultCondition?: never;
    missingEndingNodes?: never;
    missingNodeConfiguration?: never;
    missingNodeInput?: never;
    missingNodeOutput?: never;
    missingStartingNodes?: never;
    multipleNodeInputConnections?: never;
    unfulfilledNodeInput?: never;
    unsatisfiedConnectionConditions?: never;
    unspecified?: never;
    unknownNodeInput?: never;
    unknownNodeOutput?: never;
    missingLoopInputNode?: never;
    missingLoopControllerNode?: never;
    multipleLoopInputNodes?: never;
    multipleLoopControllerNodes?: never;
    loopIncompatibleNodeType?: never;
    invalidLoopBoundary?: never;
    $unknown?: never;
  }

  /**
   * <p>Details about mismatched output data types in a node.</p>
   * @public
   */
  export interface MismatchedNodeOutputTypeMember {
    cyclicConnection?: never;
    duplicateConnections?: never;
    duplicateConditionExpression?: never;
    unreachableNode?: never;
    unknownConnectionSource?: never;
    unknownConnectionSourceOutput?: never;
    unknownConnectionTarget?: never;
    unknownConnectionTargetInput?: never;
    unknownConnectionCondition?: never;
    malformedConditionExpression?: never;
    malformedNodeInputExpression?: never;
    mismatchedNodeInputType?: never;
    mismatchedNodeOutputType: MismatchedNodeOutputTypeFlowValidationDetails;
    incompatibleConnectionDataType?: never;
    missingConnectionConfiguration?: never;
    missingDefaultCondition?: never;
    missingEndingNodes?: never;
    missingNodeConfiguration?: never;
    missingNodeInput?: never;
    missingNodeOutput?: never;
    missingStartingNodes?: never;
    multipleNodeInputConnections?: never;
    unfulfilledNodeInput?: never;
    unsatisfiedConnectionConditions?: never;
    unspecified?: never;
    unknownNodeInput?: never;
    unknownNodeOutput?: never;
    missingLoopInputNode?: never;
    missingLoopControllerNode?: never;
    multipleLoopInputNodes?: never;
    multipleLoopControllerNodes?: never;
    loopIncompatibleNodeType?: never;
    invalidLoopBoundary?: never;
    $unknown?: never;
  }

  /**
   * <p>Details about incompatible data types in a connection.</p>
   * @public
   */
  export interface IncompatibleConnectionDataTypeMember {
    cyclicConnection?: never;
    duplicateConnections?: never;
    duplicateConditionExpression?: never;
    unreachableNode?: never;
    unknownConnectionSource?: never;
    unknownConnectionSourceOutput?: never;
    unknownConnectionTarget?: never;
    unknownConnectionTargetInput?: never;
    unknownConnectionCondition?: never;
    malformedConditionExpression?: never;
    malformedNodeInputExpression?: never;
    mismatchedNodeInputType?: never;
    mismatchedNodeOutputType?: never;
    incompatibleConnectionDataType: IncompatibleConnectionDataTypeFlowValidationDetails;
    missingConnectionConfiguration?: never;
    missingDefaultCondition?: never;
    missingEndingNodes?: never;
    missingNodeConfiguration?: never;
    missingNodeInput?: never;
    missingNodeOutput?: never;
    missingStartingNodes?: never;
    multipleNodeInputConnections?: never;
    unfulfilledNodeInput?: never;
    unsatisfiedConnectionConditions?: never;
    unspecified?: never;
    unknownNodeInput?: never;
    unknownNodeOutput?: never;
    missingLoopInputNode?: never;
    missingLoopControllerNode?: never;
    multipleLoopInputNodes?: never;
    multipleLoopControllerNodes?: never;
    loopIncompatibleNodeType?: never;
    invalidLoopBoundary?: never;
    $unknown?: never;
  }

  /**
   * <p>Details about missing configuration for a connection.</p>
   * @public
   */
  export interface MissingConnectionConfigurationMember {
    cyclicConnection?: never;
    duplicateConnections?: never;
    duplicateConditionExpression?: never;
    unreachableNode?: never;
    unknownConnectionSource?: never;
    unknownConnectionSourceOutput?: never;
    unknownConnectionTarget?: never;
    unknownConnectionTargetInput?: never;
    unknownConnectionCondition?: never;
    malformedConditionExpression?: never;
    malformedNodeInputExpression?: never;
    mismatchedNodeInputType?: never;
    mismatchedNodeOutputType?: never;
    incompatibleConnectionDataType?: never;
    missingConnectionConfiguration: MissingConnectionConfigurationFlowValidationDetails;
    missingDefaultCondition?: never;
    missingEndingNodes?: never;
    missingNodeConfiguration?: never;
    missingNodeInput?: never;
    missingNodeOutput?: never;
    missingStartingNodes?: never;
    multipleNodeInputConnections?: never;
    unfulfilledNodeInput?: never;
    unsatisfiedConnectionConditions?: never;
    unspecified?: never;
    unknownNodeInput?: never;
    unknownNodeOutput?: never;
    missingLoopInputNode?: never;
    missingLoopControllerNode?: never;
    multipleLoopInputNodes?: never;
    multipleLoopControllerNodes?: never;
    loopIncompatibleNodeType?: never;
    invalidLoopBoundary?: never;
    $unknown?: never;
  }

  /**
   * <p>Details about a missing default condition in a conditional node.</p>
   * @public
   */
  export interface MissingDefaultConditionMember {
    cyclicConnection?: never;
    duplicateConnections?: never;
    duplicateConditionExpression?: never;
    unreachableNode?: never;
    unknownConnectionSource?: never;
    unknownConnectionSourceOutput?: never;
    unknownConnectionTarget?: never;
    unknownConnectionTargetInput?: never;
    unknownConnectionCondition?: never;
    malformedConditionExpression?: never;
    malformedNodeInputExpression?: never;
    mismatchedNodeInputType?: never;
    mismatchedNodeOutputType?: never;
    incompatibleConnectionDataType?: never;
    missingConnectionConfiguration?: never;
    missingDefaultCondition: MissingDefaultConditionFlowValidationDetails;
    missingEndingNodes?: never;
    missingNodeConfiguration?: never;
    missingNodeInput?: never;
    missingNodeOutput?: never;
    missingStartingNodes?: never;
    multipleNodeInputConnections?: never;
    unfulfilledNodeInput?: never;
    unsatisfiedConnectionConditions?: never;
    unspecified?: never;
    unknownNodeInput?: never;
    unknownNodeOutput?: never;
    missingLoopInputNode?: never;
    missingLoopControllerNode?: never;
    multipleLoopInputNodes?: never;
    multipleLoopControllerNodes?: never;
    loopIncompatibleNodeType?: never;
    invalidLoopBoundary?: never;
    $unknown?: never;
  }

  /**
   * <p>Details about missing ending nodes in the flow.</p>
   * @public
   */
  export interface MissingEndingNodesMember {
    cyclicConnection?: never;
    duplicateConnections?: never;
    duplicateConditionExpression?: never;
    unreachableNode?: never;
    unknownConnectionSource?: never;
    unknownConnectionSourceOutput?: never;
    unknownConnectionTarget?: never;
    unknownConnectionTargetInput?: never;
    unknownConnectionCondition?: never;
    malformedConditionExpression?: never;
    malformedNodeInputExpression?: never;
    mismatchedNodeInputType?: never;
    mismatchedNodeOutputType?: never;
    incompatibleConnectionDataType?: never;
    missingConnectionConfiguration?: never;
    missingDefaultCondition?: never;
    missingEndingNodes: MissingEndingNodesFlowValidationDetails;
    missingNodeConfiguration?: never;
    missingNodeInput?: never;
    missingNodeOutput?: never;
    missingStartingNodes?: never;
    multipleNodeInputConnections?: never;
    unfulfilledNodeInput?: never;
    unsatisfiedConnectionConditions?: never;
    unspecified?: never;
    unknownNodeInput?: never;
    unknownNodeOutput?: never;
    missingLoopInputNode?: never;
    missingLoopControllerNode?: never;
    multipleLoopInputNodes?: never;
    multipleLoopControllerNodes?: never;
    loopIncompatibleNodeType?: never;
    invalidLoopBoundary?: never;
    $unknown?: never;
  }

  /**
   * <p>Details about missing configuration for a node.</p>
   * @public
   */
  export interface MissingNodeConfigurationMember {
    cyclicConnection?: never;
    duplicateConnections?: never;
    duplicateConditionExpression?: never;
    unreachableNode?: never;
    unknownConnectionSource?: never;
    unknownConnectionSourceOutput?: never;
    unknownConnectionTarget?: never;
    unknownConnectionTargetInput?: never;
    unknownConnectionCondition?: never;
    malformedConditionExpression?: never;
    malformedNodeInputExpression?: never;
    mismatchedNodeInputType?: never;
    mismatchedNodeOutputType?: never;
    incompatibleConnectionDataType?: never;
    missingConnectionConfiguration?: never;
    missingDefaultCondition?: never;
    missingEndingNodes?: never;
    missingNodeConfiguration: MissingNodeConfigurationFlowValidationDetails;
    missingNodeInput?: never;
    missingNodeOutput?: never;
    missingStartingNodes?: never;
    multipleNodeInputConnections?: never;
    unfulfilledNodeInput?: never;
    unsatisfiedConnectionConditions?: never;
    unspecified?: never;
    unknownNodeInput?: never;
    unknownNodeOutput?: never;
    missingLoopInputNode?: never;
    missingLoopControllerNode?: never;
    multipleLoopInputNodes?: never;
    multipleLoopControllerNodes?: never;
    loopIncompatibleNodeType?: never;
    invalidLoopBoundary?: never;
    $unknown?: never;
  }

  /**
   * <p>Details about a missing required input in a node.</p>
   * @public
   */
  export interface MissingNodeInputMember {
    cyclicConnection?: never;
    duplicateConnections?: never;
    duplicateConditionExpression?: never;
    unreachableNode?: never;
    unknownConnectionSource?: never;
    unknownConnectionSourceOutput?: never;
    unknownConnectionTarget?: never;
    unknownConnectionTargetInput?: never;
    unknownConnectionCondition?: never;
    malformedConditionExpression?: never;
    malformedNodeInputExpression?: never;
    mismatchedNodeInputType?: never;
    mismatchedNodeOutputType?: never;
    incompatibleConnectionDataType?: never;
    missingConnectionConfiguration?: never;
    missingDefaultCondition?: never;
    missingEndingNodes?: never;
    missingNodeConfiguration?: never;
    missingNodeInput: MissingNodeInputFlowValidationDetails;
    missingNodeOutput?: never;
    missingStartingNodes?: never;
    multipleNodeInputConnections?: never;
    unfulfilledNodeInput?: never;
    unsatisfiedConnectionConditions?: never;
    unspecified?: never;
    unknownNodeInput?: never;
    unknownNodeOutput?: never;
    missingLoopInputNode?: never;
    missingLoopControllerNode?: never;
    multipleLoopInputNodes?: never;
    multipleLoopControllerNodes?: never;
    loopIncompatibleNodeType?: never;
    invalidLoopBoundary?: never;
    $unknown?: never;
  }

  /**
   * <p>Details about a missing required output in a node.</p>
   * @public
   */
  export interface MissingNodeOutputMember {
    cyclicConnection?: never;
    duplicateConnections?: never;
    duplicateConditionExpression?: never;
    unreachableNode?: never;
    unknownConnectionSource?: never;
    unknownConnectionSourceOutput?: never;
    unknownConnectionTarget?: never;
    unknownConnectionTargetInput?: never;
    unknownConnectionCondition?: never;
    malformedConditionExpression?: never;
    malformedNodeInputExpression?: never;
    mismatchedNodeInputType?: never;
    mismatchedNodeOutputType?: never;
    incompatibleConnectionDataType?: never;
    missingConnectionConfiguration?: never;
    missingDefaultCondition?: never;
    missingEndingNodes?: never;
    missingNodeConfiguration?: never;
    missingNodeInput?: never;
    missingNodeOutput: MissingNodeOutputFlowValidationDetails;
    missingStartingNodes?: never;
    multipleNodeInputConnections?: never;
    unfulfilledNodeInput?: never;
    unsatisfiedConnectionConditions?: never;
    unspecified?: never;
    unknownNodeInput?: never;
    unknownNodeOutput?: never;
    missingLoopInputNode?: never;
    missingLoopControllerNode?: never;
    multipleLoopInputNodes?: never;
    multipleLoopControllerNodes?: never;
    loopIncompatibleNodeType?: never;
    invalidLoopBoundary?: never;
    $unknown?: never;
  }

  /**
   * <p>Details about missing starting nodes in the flow.</p>
   * @public
   */
  export interface MissingStartingNodesMember {
    cyclicConnection?: never;
    duplicateConnections?: never;
    duplicateConditionExpression?: never;
    unreachableNode?: never;
    unknownConnectionSource?: never;
    unknownConnectionSourceOutput?: never;
    unknownConnectionTarget?: never;
    unknownConnectionTargetInput?: never;
    unknownConnectionCondition?: never;
    malformedConditionExpression?: never;
    malformedNodeInputExpression?: never;
    mismatchedNodeInputType?: never;
    mismatchedNodeOutputType?: never;
    incompatibleConnectionDataType?: never;
    missingConnectionConfiguration?: never;
    missingDefaultCondition?: never;
    missingEndingNodes?: never;
    missingNodeConfiguration?: never;
    missingNodeInput?: never;
    missingNodeOutput?: never;
    missingStartingNodes: MissingStartingNodesFlowValidationDetails;
    multipleNodeInputConnections?: never;
    unfulfilledNodeInput?: never;
    unsatisfiedConnectionConditions?: never;
    unspecified?: never;
    unknownNodeInput?: never;
    unknownNodeOutput?: never;
    missingLoopInputNode?: never;
    missingLoopControllerNode?: never;
    multipleLoopInputNodes?: never;
    multipleLoopControllerNodes?: never;
    loopIncompatibleNodeType?: never;
    invalidLoopBoundary?: never;
    $unknown?: never;
  }

  /**
   * <p>Details about multiple connections to a single node input.</p>
   * @public
   */
  export interface MultipleNodeInputConnectionsMember {
    cyclicConnection?: never;
    duplicateConnections?: never;
    duplicateConditionExpression?: never;
    unreachableNode?: never;
    unknownConnectionSource?: never;
    unknownConnectionSourceOutput?: never;
    unknownConnectionTarget?: never;
    unknownConnectionTargetInput?: never;
    unknownConnectionCondition?: never;
    malformedConditionExpression?: never;
    malformedNodeInputExpression?: never;
    mismatchedNodeInputType?: never;
    mismatchedNodeOutputType?: never;
    incompatibleConnectionDataType?: never;
    missingConnectionConfiguration?: never;
    missingDefaultCondition?: never;
    missingEndingNodes?: never;
    missingNodeConfiguration?: never;
    missingNodeInput?: never;
    missingNodeOutput?: never;
    missingStartingNodes?: never;
    multipleNodeInputConnections: MultipleNodeInputConnectionsFlowValidationDetails;
    unfulfilledNodeInput?: never;
    unsatisfiedConnectionConditions?: never;
    unspecified?: never;
    unknownNodeInput?: never;
    unknownNodeOutput?: never;
    missingLoopInputNode?: never;
    missingLoopControllerNode?: never;
    multipleLoopInputNodes?: never;
    multipleLoopControllerNodes?: never;
    loopIncompatibleNodeType?: never;
    invalidLoopBoundary?: never;
    $unknown?: never;
  }

  /**
   * <p>Details about an unfulfilled node input with no valid connections.</p>
   * @public
   */
  export interface UnfulfilledNodeInputMember {
    cyclicConnection?: never;
    duplicateConnections?: never;
    duplicateConditionExpression?: never;
    unreachableNode?: never;
    unknownConnectionSource?: never;
    unknownConnectionSourceOutput?: never;
    unknownConnectionTarget?: never;
    unknownConnectionTargetInput?: never;
    unknownConnectionCondition?: never;
    malformedConditionExpression?: never;
    malformedNodeInputExpression?: never;
    mismatchedNodeInputType?: never;
    mismatchedNodeOutputType?: never;
    incompatibleConnectionDataType?: never;
    missingConnectionConfiguration?: never;
    missingDefaultCondition?: never;
    missingEndingNodes?: never;
    missingNodeConfiguration?: never;
    missingNodeInput?: never;
    missingNodeOutput?: never;
    missingStartingNodes?: never;
    multipleNodeInputConnections?: never;
    unfulfilledNodeInput: UnfulfilledNodeInputFlowValidationDetails;
    unsatisfiedConnectionConditions?: never;
    unspecified?: never;
    unknownNodeInput?: never;
    unknownNodeOutput?: never;
    missingLoopInputNode?: never;
    missingLoopControllerNode?: never;
    multipleLoopInputNodes?: never;
    multipleLoopControllerNodes?: never;
    loopIncompatibleNodeType?: never;
    invalidLoopBoundary?: never;
    $unknown?: never;
  }

  /**
   * <p>Details about unsatisfied conditions for a connection.</p>
   * @public
   */
  export interface UnsatisfiedConnectionConditionsMember {
    cyclicConnection?: never;
    duplicateConnections?: never;
    duplicateConditionExpression?: never;
    unreachableNode?: never;
    unknownConnectionSource?: never;
    unknownConnectionSourceOutput?: never;
    unknownConnectionTarget?: never;
    unknownConnectionTargetInput?: never;
    unknownConnectionCondition?: never;
    malformedConditionExpression?: never;
    malformedNodeInputExpression?: never;
    mismatchedNodeInputType?: never;
    mismatchedNodeOutputType?: never;
    incompatibleConnectionDataType?: never;
    missingConnectionConfiguration?: never;
    missingDefaultCondition?: never;
    missingEndingNodes?: never;
    missingNodeConfiguration?: never;
    missingNodeInput?: never;
    missingNodeOutput?: never;
    missingStartingNodes?: never;
    multipleNodeInputConnections?: never;
    unfulfilledNodeInput?: never;
    unsatisfiedConnectionConditions: UnsatisfiedConnectionConditionsFlowValidationDetails;
    unspecified?: never;
    unknownNodeInput?: never;
    unknownNodeOutput?: never;
    missingLoopInputNode?: never;
    missingLoopControllerNode?: never;
    multipleLoopInputNodes?: never;
    multipleLoopControllerNodes?: never;
    loopIncompatibleNodeType?: never;
    invalidLoopBoundary?: never;
    $unknown?: never;
  }

  /**
   * <p>Details about an unspecified validation.</p>
   * @public
   */
  export interface UnspecifiedMember {
    cyclicConnection?: never;
    duplicateConnections?: never;
    duplicateConditionExpression?: never;
    unreachableNode?: never;
    unknownConnectionSource?: never;
    unknownConnectionSourceOutput?: never;
    unknownConnectionTarget?: never;
    unknownConnectionTargetInput?: never;
    unknownConnectionCondition?: never;
    malformedConditionExpression?: never;
    malformedNodeInputExpression?: never;
    mismatchedNodeInputType?: never;
    mismatchedNodeOutputType?: never;
    incompatibleConnectionDataType?: never;
    missingConnectionConfiguration?: never;
    missingDefaultCondition?: never;
    missingEndingNodes?: never;
    missingNodeConfiguration?: never;
    missingNodeInput?: never;
    missingNodeOutput?: never;
    missingStartingNodes?: never;
    multipleNodeInputConnections?: never;
    unfulfilledNodeInput?: never;
    unsatisfiedConnectionConditions?: never;
    unspecified: UnspecifiedFlowValidationDetails;
    unknownNodeInput?: never;
    unknownNodeOutput?: never;
    missingLoopInputNode?: never;
    missingLoopControllerNode?: never;
    multipleLoopInputNodes?: never;
    multipleLoopControllerNodes?: never;
    loopIncompatibleNodeType?: never;
    invalidLoopBoundary?: never;
    $unknown?: never;
  }

  /**
   * <p>Details about an unknown input for a node.</p>
   * @public
   */
  export interface UnknownNodeInputMember {
    cyclicConnection?: never;
    duplicateConnections?: never;
    duplicateConditionExpression?: never;
    unreachableNode?: never;
    unknownConnectionSource?: never;
    unknownConnectionSourceOutput?: never;
    unknownConnectionTarget?: never;
    unknownConnectionTargetInput?: never;
    unknownConnectionCondition?: never;
    malformedConditionExpression?: never;
    malformedNodeInputExpression?: never;
    mismatchedNodeInputType?: never;
    mismatchedNodeOutputType?: never;
    incompatibleConnectionDataType?: never;
    missingConnectionConfiguration?: never;
    missingDefaultCondition?: never;
    missingEndingNodes?: never;
    missingNodeConfiguration?: never;
    missingNodeInput?: never;
    missingNodeOutput?: never;
    missingStartingNodes?: never;
    multipleNodeInputConnections?: never;
    unfulfilledNodeInput?: never;
    unsatisfiedConnectionConditions?: never;
    unspecified?: never;
    unknownNodeInput: UnknownNodeInputFlowValidationDetails;
    unknownNodeOutput?: never;
    missingLoopInputNode?: never;
    missingLoopControllerNode?: never;
    multipleLoopInputNodes?: never;
    multipleLoopControllerNodes?: never;
    loopIncompatibleNodeType?: never;
    invalidLoopBoundary?: never;
    $unknown?: never;
  }

  /**
   * <p>Details about an unknown output for a node.</p>
   * @public
   */
  export interface UnknownNodeOutputMember {
    cyclicConnection?: never;
    duplicateConnections?: never;
    duplicateConditionExpression?: never;
    unreachableNode?: never;
    unknownConnectionSource?: never;
    unknownConnectionSourceOutput?: never;
    unknownConnectionTarget?: never;
    unknownConnectionTargetInput?: never;
    unknownConnectionCondition?: never;
    malformedConditionExpression?: never;
    malformedNodeInputExpression?: never;
    mismatchedNodeInputType?: never;
    mismatchedNodeOutputType?: never;
    incompatibleConnectionDataType?: never;
    missingConnectionConfiguration?: never;
    missingDefaultCondition?: never;
    missingEndingNodes?: never;
    missingNodeConfiguration?: never;
    missingNodeInput?: never;
    missingNodeOutput?: never;
    missingStartingNodes?: never;
    multipleNodeInputConnections?: never;
    unfulfilledNodeInput?: never;
    unsatisfiedConnectionConditions?: never;
    unspecified?: never;
    unknownNodeInput?: never;
    unknownNodeOutput: UnknownNodeOutputFlowValidationDetails;
    missingLoopInputNode?: never;
    missingLoopControllerNode?: never;
    multipleLoopInputNodes?: never;
    multipleLoopControllerNodes?: never;
    loopIncompatibleNodeType?: never;
    invalidLoopBoundary?: never;
    $unknown?: never;
  }

  /**
   * <p>Details about a flow that's missing a required <code>LoopInput</code> node in a DoWhile loop.</p>
   * @public
   */
  export interface MissingLoopInputNodeMember {
    cyclicConnection?: never;
    duplicateConnections?: never;
    duplicateConditionExpression?: never;
    unreachableNode?: never;
    unknownConnectionSource?: never;
    unknownConnectionSourceOutput?: never;
    unknownConnectionTarget?: never;
    unknownConnectionTargetInput?: never;
    unknownConnectionCondition?: never;
    malformedConditionExpression?: never;
    malformedNodeInputExpression?: never;
    mismatchedNodeInputType?: never;
    mismatchedNodeOutputType?: never;
    incompatibleConnectionDataType?: never;
    missingConnectionConfiguration?: never;
    missingDefaultCondition?: never;
    missingEndingNodes?: never;
    missingNodeConfiguration?: never;
    missingNodeInput?: never;
    missingNodeOutput?: never;
    missingStartingNodes?: never;
    multipleNodeInputConnections?: never;
    unfulfilledNodeInput?: never;
    unsatisfiedConnectionConditions?: never;
    unspecified?: never;
    unknownNodeInput?: never;
    unknownNodeOutput?: never;
    missingLoopInputNode: MissingLoopInputNodeFlowValidationDetails;
    missingLoopControllerNode?: never;
    multipleLoopInputNodes?: never;
    multipleLoopControllerNodes?: never;
    loopIncompatibleNodeType?: never;
    invalidLoopBoundary?: never;
    $unknown?: never;
  }

  /**
   * <p>Details about a flow that's missing a required <code>LoopController</code> node in a DoWhile loop.</p>
   * @public
   */
  export interface MissingLoopControllerNodeMember {
    cyclicConnection?: never;
    duplicateConnections?: never;
    duplicateConditionExpression?: never;
    unreachableNode?: never;
    unknownConnectionSource?: never;
    unknownConnectionSourceOutput?: never;
    unknownConnectionTarget?: never;
    unknownConnectionTargetInput?: never;
    unknownConnectionCondition?: never;
    malformedConditionExpression?: never;
    malformedNodeInputExpression?: never;
    mismatchedNodeInputType?: never;
    mismatchedNodeOutputType?: never;
    incompatibleConnectionDataType?: never;
    missingConnectionConfiguration?: never;
    missingDefaultCondition?: never;
    missingEndingNodes?: never;
    missingNodeConfiguration?: never;
    missingNodeInput?: never;
    missingNodeOutput?: never;
    missingStartingNodes?: never;
    multipleNodeInputConnections?: never;
    unfulfilledNodeInput?: never;
    unsatisfiedConnectionConditions?: never;
    unspecified?: never;
    unknownNodeInput?: never;
    unknownNodeOutput?: never;
    missingLoopInputNode?: never;
    missingLoopControllerNode: MissingLoopControllerNodeFlowValidationDetails;
    multipleLoopInputNodes?: never;
    multipleLoopControllerNodes?: never;
    loopIncompatibleNodeType?: never;
    invalidLoopBoundary?: never;
    $unknown?: never;
  }

  /**
   * <p>Details about a flow that contains multiple <code>LoopInput</code> nodes in a DoWhile loop.</p>
   * @public
   */
  export interface MultipleLoopInputNodesMember {
    cyclicConnection?: never;
    duplicateConnections?: never;
    duplicateConditionExpression?: never;
    unreachableNode?: never;
    unknownConnectionSource?: never;
    unknownConnectionSourceOutput?: never;
    unknownConnectionTarget?: never;
    unknownConnectionTargetInput?: never;
    unknownConnectionCondition?: never;
    malformedConditionExpression?: never;
    malformedNodeInputExpression?: never;
    mismatchedNodeInputType?: never;
    mismatchedNodeOutputType?: never;
    incompatibleConnectionDataType?: never;
    missingConnectionConfiguration?: never;
    missingDefaultCondition?: never;
    missingEndingNodes?: never;
    missingNodeConfiguration?: never;
    missingNodeInput?: never;
    missingNodeOutput?: never;
    missingStartingNodes?: never;
    multipleNodeInputConnections?: never;
    unfulfilledNodeInput?: never;
    unsatisfiedConnectionConditions?: never;
    unspecified?: never;
    unknownNodeInput?: never;
    unknownNodeOutput?: never;
    missingLoopInputNode?: never;
    missingLoopControllerNode?: never;
    multipleLoopInputNodes: MultipleLoopInputNodesFlowValidationDetails;
    multipleLoopControllerNodes?: never;
    loopIncompatibleNodeType?: never;
    invalidLoopBoundary?: never;
    $unknown?: never;
  }

  /**
   * <p>Details about a flow that contains multiple <code>LoopController</code> nodes in a DoWhile loop.</p>
   * @public
   */
  export interface MultipleLoopControllerNodesMember {
    cyclicConnection?: never;
    duplicateConnections?: never;
    duplicateConditionExpression?: never;
    unreachableNode?: never;
    unknownConnectionSource?: never;
    unknownConnectionSourceOutput?: never;
    unknownConnectionTarget?: never;
    unknownConnectionTargetInput?: never;
    unknownConnectionCondition?: never;
    malformedConditionExpression?: never;
    malformedNodeInputExpression?: never;
    mismatchedNodeInputType?: never;
    mismatchedNodeOutputType?: never;
    incompatibleConnectionDataType?: never;
    missingConnectionConfiguration?: never;
    missingDefaultCondition?: never;
    missingEndingNodes?: never;
    missingNodeConfiguration?: never;
    missingNodeInput?: never;
    missingNodeOutput?: never;
    missingStartingNodes?: never;
    multipleNodeInputConnections?: never;
    unfulfilledNodeInput?: never;
    unsatisfiedConnectionConditions?: never;
    unspecified?: never;
    unknownNodeInput?: never;
    unknownNodeOutput?: never;
    missingLoopInputNode?: never;
    missingLoopControllerNode?: never;
    multipleLoopInputNodes?: never;
    multipleLoopControllerNodes: MultipleLoopControllerNodesFlowValidationDetails;
    loopIncompatibleNodeType?: never;
    invalidLoopBoundary?: never;
    $unknown?: never;
  }

  /**
   * <p>Details about a flow that includes incompatible node types in a DoWhile loop.</p>
   * @public
   */
  export interface LoopIncompatibleNodeTypeMember {
    cyclicConnection?: never;
    duplicateConnections?: never;
    duplicateConditionExpression?: never;
    unreachableNode?: never;
    unknownConnectionSource?: never;
    unknownConnectionSourceOutput?: never;
    unknownConnectionTarget?: never;
    unknownConnectionTargetInput?: never;
    unknownConnectionCondition?: never;
    malformedConditionExpression?: never;
    malformedNodeInputExpression?: never;
    mismatchedNodeInputType?: never;
    mismatchedNodeOutputType?: never;
    incompatibleConnectionDataType?: never;
    missingConnectionConfiguration?: never;
    missingDefaultCondition?: never;
    missingEndingNodes?: never;
    missingNodeConfiguration?: never;
    missingNodeInput?: never;
    missingNodeOutput?: never;
    missingStartingNodes?: never;
    multipleNodeInputConnections?: never;
    unfulfilledNodeInput?: never;
    unsatisfiedConnectionConditions?: never;
    unspecified?: never;
    unknownNodeInput?: never;
    unknownNodeOutput?: never;
    missingLoopInputNode?: never;
    missingLoopControllerNode?: never;
    multipleLoopInputNodes?: never;
    multipleLoopControllerNodes?: never;
    loopIncompatibleNodeType: LoopIncompatibleNodeTypeFlowValidationDetails;
    invalidLoopBoundary?: never;
    $unknown?: never;
  }

  /**
   * <p>Details about a flow that includes connections that violate loop boundary rules.</p>
   * @public
   */
  export interface InvalidLoopBoundaryMember {
    cyclicConnection?: never;
    duplicateConnections?: never;
    duplicateConditionExpression?: never;
    unreachableNode?: never;
    unknownConnectionSource?: never;
    unknownConnectionSourceOutput?: never;
    unknownConnectionTarget?: never;
    unknownConnectionTargetInput?: never;
    unknownConnectionCondition?: never;
    malformedConditionExpression?: never;
    malformedNodeInputExpression?: never;
    mismatchedNodeInputType?: never;
    mismatchedNodeOutputType?: never;
    incompatibleConnectionDataType?: never;
    missingConnectionConfiguration?: never;
    missingDefaultCondition?: never;
    missingEndingNodes?: never;
    missingNodeConfiguration?: never;
    missingNodeInput?: never;
    missingNodeOutput?: never;
    missingStartingNodes?: never;
    multipleNodeInputConnections?: never;
    unfulfilledNodeInput?: never;
    unsatisfiedConnectionConditions?: never;
    unspecified?: never;
    unknownNodeInput?: never;
    unknownNodeOutput?: never;
    missingLoopInputNode?: never;
    missingLoopControllerNode?: never;
    multipleLoopInputNodes?: never;
    multipleLoopControllerNodes?: never;
    loopIncompatibleNodeType?: never;
    invalidLoopBoundary: InvalidLoopBoundaryFlowValidationDetails;
    $unknown?: never;
  }

  /**
   * @public
   */
  export interface $UnknownMember {
    cyclicConnection?: never;
    duplicateConnections?: never;
    duplicateConditionExpression?: never;
    unreachableNode?: never;
    unknownConnectionSource?: never;
    unknownConnectionSourceOutput?: never;
    unknownConnectionTarget?: never;
    unknownConnectionTargetInput?: never;
    unknownConnectionCondition?: never;
    malformedConditionExpression?: never;
    malformedNodeInputExpression?: never;
    mismatchedNodeInputType?: never;
    mismatchedNodeOutputType?: never;
    incompatibleConnectionDataType?: never;
    missingConnectionConfiguration?: never;
    missingDefaultCondition?: never;
    missingEndingNodes?: never;
    missingNodeConfiguration?: never;
    missingNodeInput?: never;
    missingNodeOutput?: never;
    missingStartingNodes?: never;
    multipleNodeInputConnections?: never;
    unfulfilledNodeInput?: never;
    unsatisfiedConnectionConditions?: never;
    unspecified?: never;
    unknownNodeInput?: never;
    unknownNodeOutput?: never;
    missingLoopInputNode?: never;
    missingLoopControllerNode?: never;
    multipleLoopInputNodes?: never;
    multipleLoopControllerNodes?: never;
    loopIncompatibleNodeType?: never;
    invalidLoopBoundary?: never;
    $unknown: [string, any];
  }

  /**
   * @deprecated unused in schema-serde mode.
   *
   */
  export interface Visitor<T> {
    cyclicConnection: (value: CyclicConnectionFlowValidationDetails) => T;
    duplicateConnections: (value: DuplicateConnectionsFlowValidationDetails) => T;
    duplicateConditionExpression: (value: DuplicateConditionExpressionFlowValidationDetails) => T;
    unreachableNode: (value: UnreachableNodeFlowValidationDetails) => T;
    unknownConnectionSource: (value: UnknownConnectionSourceFlowValidationDetails) => T;
    unknownConnectionSourceOutput: (value: UnknownConnectionSourceOutputFlowValidationDetails) => T;
    unknownConnectionTarget: (value: UnknownConnectionTargetFlowValidationDetails) => T;
    unknownConnectionTargetInput: (value: UnknownConnectionTargetInputFlowValidationDetails) => T;
    unknownConnectionCondition: (value: UnknownConnectionConditionFlowValidationDetails) => T;
    malformedConditionExpression: (value: MalformedConditionExpressionFlowValidationDetails) => T;
    malformedNodeInputExpression: (value: MalformedNodeInputExpressionFlowValidationDetails) => T;
    mismatchedNodeInputType: (value: MismatchedNodeInputTypeFlowValidationDetails) => T;
    mismatchedNodeOutputType: (value: MismatchedNodeOutputTypeFlowValidationDetails) => T;
    incompatibleConnectionDataType: (value: IncompatibleConnectionDataTypeFlowValidationDetails) => T;
    missingConnectionConfiguration: (value: MissingConnectionConfigurationFlowValidationDetails) => T;
    missingDefaultCondition: (value: MissingDefaultConditionFlowValidationDetails) => T;
    missingEndingNodes: (value: MissingEndingNodesFlowValidationDetails) => T;
    missingNodeConfiguration: (value: MissingNodeConfigurationFlowValidationDetails) => T;
    missingNodeInput: (value: MissingNodeInputFlowValidationDetails) => T;
    missingNodeOutput: (value: MissingNodeOutputFlowValidationDetails) => T;
    missingStartingNodes: (value: MissingStartingNodesFlowValidationDetails) => T;
    multipleNodeInputConnections: (value: MultipleNodeInputConnectionsFlowValidationDetails) => T;
    unfulfilledNodeInput: (value: UnfulfilledNodeInputFlowValidationDetails) => T;
    unsatisfiedConnectionConditions: (value: UnsatisfiedConnectionConditionsFlowValidationDetails) => T;
    unspecified: (value: UnspecifiedFlowValidationDetails) => T;
    unknownNodeInput: (value: UnknownNodeInputFlowValidationDetails) => T;
    unknownNodeOutput: (value: UnknownNodeOutputFlowValidationDetails) => T;
    missingLoopInputNode: (value: MissingLoopInputNodeFlowValidationDetails) => T;
    missingLoopControllerNode: (value: MissingLoopControllerNodeFlowValidationDetails) => T;
    multipleLoopInputNodes: (value: MultipleLoopInputNodesFlowValidationDetails) => T;
    multipleLoopControllerNodes: (value: MultipleLoopControllerNodesFlowValidationDetails) => T;
    loopIncompatibleNodeType: (value: LoopIncompatibleNodeTypeFlowValidationDetails) => T;
    invalidLoopBoundary: (value: InvalidLoopBoundaryFlowValidationDetails) => T;
    _: (name: string, value: any) => T;
  }
}

/**
 * <p>Contains information about validation of the flow.</p> <p>This data type is used in the following API operations:</p> <ul> <li> <p> <a href="https://docs.aws.amazon.com/bedrock/latest/APIReference/API_agent_GetFlow.html#API_agent_GetFlow_ResponseSyntax">GetFlow response</a> </p> </li> <li> <p> <a href="https://docs.aws.amazon.com/bedrock/latest/APIReference/API_agent_GetFlowVersion.html#API_agent_GetFlowVersion_ResponseSyntax">GetFlowVersion response</a> </p> </li> </ul>
 * @public
 */
export interface FlowValidation {
  /**
   * <p>A message describing the validation error.</p>
   * @public
   */
  message: string | undefined;

  /**
   * <p>The severity of the issue described in the message.</p>
   * @public
   */
  severity: FlowValidationSeverity | undefined;

  /**
   * <p>Specific details about the validation issue encountered in the flow.</p>
   * @public
   */
  details?: FlowValidationDetails | undefined;

  /**
   * <p>The type of validation issue encountered in the flow.</p>
   * @public
   */
  type?: FlowValidationType | undefined;
}

/**
 * @public
 */
export interface ListFlowsRequest {
  /**
   * <p>The maximum number of results to return in the response. If the total number of results is greater than this value, use the token returned in the response in the <code>nextToken</code> field when making another request to return the next batch of results.</p>
   * @public
   */
  maxResults?: number | undefined;

  /**
   * <p>If the total number of results is greater than the <code>maxResults</code> value provided in the request, enter the token returned in the <code>nextToken</code> field in the response in this field to return the next batch of results.</p>
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * <p>Contains the definition of a flow.</p>
 * @public
 */
export interface FlowSummary {
  /**
   * <p>The name of the flow.</p>
   * @public
   */
  name: string | undefined;

  /**
   * <p>A description of the flow.</p>
   * @public
   */
  description?: string | undefined;

  /**
   * <p>The unique identifier of the flow.</p>
   * @public
   */
  id: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the flow.</p>
   * @public
   */
  arn: string | undefined;

  /**
   * <p>The status of the flow. The following statuses are possible:</p> <ul> <li> <p>NotPrepared – The flow has been created or updated, but hasn't been prepared. If you just created the flow, you can't test it. If you updated the flow, the <code>DRAFT</code> version won't contain the latest changes for testing. Send a <a href="https://docs.aws.amazon.com/bedrock/latest/APIReference/API_agent_PrepareFlow.html">PrepareFlow</a> request to package the latest changes into the <code>DRAFT</code> version.</p> </li> <li> <p>Preparing – The flow is being prepared so that the <code>DRAFT</code> version contains the latest changes for testing.</p> </li> <li> <p>Prepared – The flow is prepared and the <code>DRAFT</code> version contains the latest changes for testing.</p> </li> <li> <p>Failed – The last API operation that you invoked on the flow failed. Send a <a href="https://docs.aws.amazon.com/bedrock/latest/APIReference/API_agent_GetFlow.html">GetFlow</a> request and check the error message in the <code>validations</code> field.</p> </li> </ul>
   * @public
   */
  status: FlowStatus | undefined;

  /**
   * <p>The time at which the flow was created.</p>
   * @public
   */
  createdAt: Date | undefined;

  /**
   * <p>The time at which the flow was last updated.</p>
   * @public
   */
  updatedAt: Date | undefined;

  /**
   * <p>The latest version of the flow.</p>
   * @public
   */
  version: string | undefined;
}

/**
 * @public
 */
export interface ListFlowsResponse {
  /**
   * <p>A list, each member of which contains information about a flow.</p>
   * @public
   */
  flowSummaries: FlowSummary[] | undefined;

  /**
   * <p>If the total number of results is greater than the <code>maxResults</code> value provided in the request, use this token when making another request in the <code>nextToken</code> field to return the next batch of results.</p>
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * @public
 */
export interface PrepareFlowRequest {
  /**
   * <p>The unique identifier of the flow.</p>
   * @public
   */
  flowIdentifier: string | undefined;
}

/**
 * @public
 */
export interface PrepareFlowResponse {
  /**
   * <p>The unique identifier of the flow.</p>
   * @public
   */
  id: string | undefined;

  /**
   * <p>The status of the flow. When you submit this request, the status will be <code>NotPrepared</code>. If preparation succeeds, the status becomes <code>Prepared</code>. If it fails, the status becomes <code>FAILED</code>.</p>
   * @public
   */
  status: FlowStatus | undefined;
}

/**
 * @public
 */
export interface GetIngestionJobRequest {
  /**
   * <p>The unique identifier of the knowledge base for the data ingestion job you want to get information on.</p>
   * @public
   */
  knowledgeBaseId: string | undefined;

  /**
   * <p>The unique identifier of the data source for the data ingestion job you want to get information on.</p>
   * @public
   */
  dataSourceId: string | undefined;

  /**
   * <p>The unique identifier of the data ingestion job you want to get information on.</p>
   * @public
   */
  ingestionJobId: string | undefined;
}

/**
 * <p>Contains the statistics for the data ingestion job.</p>
 * @public
 */
export interface IngestionJobStatistics {
  /**
   * <p>The total number of source documents that were scanned. Includes new, updated, and unchanged documents.</p>
   * @public
   */
  numberOfDocumentsScanned?: number | undefined;

  /**
   * <p>The total number of metadata files that were scanned. Includes new, updated, and unchanged files.</p>
   * @public
   */
  numberOfMetadataDocumentsScanned?: number | undefined;

  /**
   * <p>The number of new source documents in the data source that were successfully indexed.</p>
   * @public
   */
  numberOfNewDocumentsIndexed?: number | undefined;

  /**
   * <p>The number of modified source documents in the data source that were successfully indexed.</p>
   * @public
   */
  numberOfModifiedDocumentsIndexed?: number | undefined;

  /**
   * <p>The number of metadata files that were updated or deleted.</p>
   * @public
   */
  numberOfMetadataDocumentsModified?: number | undefined;

  /**
   * <p>The number of source documents that were deleted.</p>
   * @public
   */
  numberOfDocumentsDeleted?: number | undefined;

  /**
   * <p>The number of source documents that failed to be ingested.</p>
   * @public
   */
  numberOfDocumentsFailed?: number | undefined;
}

/**
 * <p>Contains details about a data ingestion job. Data sources are ingested into a knowledge base so that Large Language Models (LLMs) can use your data.</p> <p>This data type is used in the following API operations:</p> <ul> <li> <p> <a href="https://docs.aws.amazon.com/bedrock/latest/APIReference/API_agent_StartIngestionJob.html#API_agent_StartIngestionJob_ResponseSyntax">StartIngestionJob response</a> </p> </li> <li> <p> <a href="https://docs.aws.amazon.com/bedrock/latest/APIReference/API_agent_GetIngestionJob.html#API_agent_GetIngestionJob_ResponseSyntax">GetIngestionJob response</a> </p> </li> <li> <p> <a href="https://docs.aws.amazon.com/bedrock/latest/APIReference/API_agent_ListIngestionJobs.html#API_agent_ListIngestionJobs_ResponseSyntax">ListIngestionJob response</a> </p> </li> </ul>
 * @public
 */
export interface IngestionJob {
  /**
   * <p>The unique identifier of the knowledge for the data ingestion job.</p>
   * @public
   */
  knowledgeBaseId: string | undefined;

  /**
   * <p>The unique identifier of the data source for the data ingestion job.</p>
   * @public
   */
  dataSourceId: string | undefined;

  /**
   * <p>The unique identifier of the data ingestion job.</p>
   * @public
   */
  ingestionJobId: string | undefined;

  /**
   * <p>The description of the data ingestion job.</p>
   * @public
   */
  description?: string | undefined;

  /**
   * <p>The status of the data ingestion job.</p>
   * @public
   */
  status: IngestionJobStatus | undefined;

  /**
   * <p>Contains statistics about the data ingestion job.</p>
   * @public
   */
  statistics?: IngestionJobStatistics | undefined;

  /**
   * <p>A list of reasons that the data ingestion job failed.</p>
   * @public
   */
  failureReasons?: string[] | undefined;

  /**
   * <p>The time the data ingestion job started.</p> <p>If you stop a data ingestion job, the <code>startedAt</code> time is the time the job was started before the job was stopped.</p>
   * @public
   */
  startedAt: Date | undefined;

  /**
   * <p>The time the data ingestion job was last updated.</p> <p>If you stop a data ingestion job, the <code>updatedAt</code> time is the time the job was stopped.</p>
   * @public
   */
  updatedAt: Date | undefined;
}

/**
 * @public
 */
export interface GetIngestionJobResponse {
  /**
   * <p>Contains details about the data ingestion job.</p>
   * @public
   */
  ingestionJob: IngestionJob | undefined;
}

/**
 * <p>The definition of a filter to filter the data.</p>
 * @public
 */
export interface IngestionJobFilter {
  /**
   * <p>The name of field or attribute to apply the filter.</p>
   * @public
   */
  attribute: IngestionJobFilterAttribute | undefined;

  /**
   * <p>The operation to apply to the field or attribute.</p>
   * @public
   */
  operator: IngestionJobFilterOperator | undefined;

  /**
   * <p>A list of values that belong to the field or attribute.</p>
   * @public
   */
  values: string[] | undefined;
}

/**
 * <p>The parameters of sorting the data.</p>
 * @public
 */
export interface IngestionJobSortBy {
  /**
   * <p>The name of field or attribute to apply sorting of data.</p>
   * @public
   */
  attribute: IngestionJobSortByAttribute | undefined;

  /**
   * <p>The order for sorting the data.</p>
   * @public
   */
  order: SortOrder | undefined;
}

/**
 * @public
 */
export interface ListIngestionJobsRequest {
  /**
   * <p>The unique identifier of the knowledge base for the list of data ingestion jobs.</p>
   * @public
   */
  knowledgeBaseId: string | undefined;

  /**
   * <p>The unique identifier of the data source for the list of data ingestion jobs.</p>
   * @public
   */
  dataSourceId: string | undefined;

  /**
   * <p>Contains information about the filters for filtering the data.</p>
   * @public
   */
  filters?: IngestionJobFilter[] | undefined;

  /**
   * <p>Contains details about how to sort the data.</p>
   * @public
   */
  sortBy?: IngestionJobSortBy | undefined;

  /**
   * <p>The maximum number of results to return in the response. If the total number of results is greater than this value, use the token returned in the response in the <code>nextToken</code> field when making another request to return the next batch of results.</p>
   * @public
   */
  maxResults?: number | undefined;

  /**
   * <p>If the total number of results is greater than the <code>maxResults</code> value provided in the request, enter the token returned in the <code>nextToken</code> field in the response in this field to return the next batch of results.</p>
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * <p>Contains details about a data ingestion job.</p>
 * @public
 */
export interface IngestionJobSummary {
  /**
   * <p>The unique identifier of the knowledge base for the data ingestion job.</p>
   * @public
   */
  knowledgeBaseId: string | undefined;

  /**
   * <p>The unique identifier of the data source for the data ingestion job.</p>
   * @public
   */
  dataSourceId: string | undefined;

  /**
   * <p>The unique identifier of the data ingestion job.</p>
   * @public
   */
  ingestionJobId: string | undefined;

  /**
   * <p>The description of the data ingestion job.</p>
   * @public
   */
  description?: string | undefined;

  /**
   * <p>The status of the data ingestion job.</p>
   * @public
   */
  status: IngestionJobStatus | undefined;

  /**
   * <p>The time the data ingestion job started.</p>
   * @public
   */
  startedAt: Date | undefined;

  /**
   * <p>The time the data ingestion job was last updated.</p>
   * @public
   */
  updatedAt: Date | undefined;

  /**
   * <p>Contains statistics for the data ingestion job.</p>
   * @public
   */
  statistics?: IngestionJobStatistics | undefined;
}

/**
 * @public
 */
export interface ListIngestionJobsResponse {
  /**
   * <p>A list of data ingestion jobs with information about each job.</p>
   * @public
   */
  ingestionJobSummaries: IngestionJobSummary[] | undefined;

  /**
   * <p>If the total number of results is greater than the <code>maxResults</code> value provided in the request, use this token when making another request in the <code>nextToken</code> field to return the next batch of results.</p>
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * @public
 */
export interface StartIngestionJobRequest {
  /**
   * <p>The unique identifier of the knowledge base for the data ingestion job.</p>
   * @public
   */
  knowledgeBaseId: string | undefined;

  /**
   * <p>The unique identifier of the data source you want to ingest into your knowledge base.</p>
   * @public
   */
  dataSourceId: string | undefined;

  /**
   * <p>A unique, case-sensitive identifier to ensure that the API request completes no more than one time. If this token matches a previous request, Amazon Bedrock ignores the request, but does not return an error. For more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/APIReference/Run_Instance_Idempotency.html">Ensuring idempotency</a>.</p>
   * @public
   */
  clientToken?: string | undefined;

  /**
   * <p>A description of the data ingestion job.</p>
   * @public
   */
  description?: string | undefined;
}

/**
 * @public
 */
export interface StartIngestionJobResponse {
  /**
   * <p>Contains information about the data ingestion job.</p>
   * @public
   */
  ingestionJob: IngestionJob | undefined;
}

/**
 * @public
 */
export interface StopIngestionJobRequest {
  /**
   * <p>The unique identifier of the knowledge base for the data ingestion job you want to stop.</p>
   * @public
   */
  knowledgeBaseId: string | undefined;

  /**
   * <p>The unique identifier of the data source for the data ingestion job you want to stop.</p>
   * @public
   */
  dataSourceId: string | undefined;

  /**
   * <p>The unique identifier of the data ingestion job you want to stop.</p>
   * @public
   */
  ingestionJobId: string | undefined;
}

/**
 * @public
 */
export interface StopIngestionJobResponse {
  /**
   * <p>Contains information about the stopped data ingestion job.</p>
   * @public
   */
  ingestionJob: IngestionJob | undefined;
}

/**
 * <p>Contains information about the identifier of the document to ingest into a custom data source.</p>
 * @public
 */
export interface CustomDocumentIdentifier {
  /**
   * <p>The identifier of the document to ingest into a custom data source.</p>
   * @public
   */
  id: string | undefined;
}

/**
 * <p>Contains information that identifies the document.</p>
 * @public
 */
export interface DocumentIdentifier {
  /**
   * <p>The type of data source connected to the knowledge base that contains the document.</p>
   * @public
   */
  dataSourceType: ContentDataSourceType | undefined;

  /**
   * <p>Contains information that identifies the document in an S3 data source.</p>
   * @public
   */
  s3?: S3Location | undefined;

  /**
   * <p>Contains information that identifies the document in a custom data source.</p>
   * @public
   */
  custom?: CustomDocumentIdentifier | undefined;
}

/**
 * @public
 */
export interface DeleteKnowledgeBaseDocumentsRequest {
  /**
   * <p>The unique identifier of the knowledge base that is connected to the data source.</p>
   * @public
   */
  knowledgeBaseId: string | undefined;

  /**
   * <p>The unique identifier of the data source that contains the documents.</p>
   * @public
   */
  dataSourceId: string | undefined;

  /**
   * <p>A unique, case-sensitive identifier to ensure that the API request completes no more than one time. If this token matches a previous request, Amazon Bedrock ignores the request, but does not return an error. For more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/APIReference/Run_Instance_Idempotency.html">Ensuring idempotency</a>.</p>
   * @public
   */
  clientToken?: string | undefined;

  /**
   * <p>A list of objects, each of which contains information to identify a document to delete.</p>
   * @public
   */
  documentIdentifiers: DocumentIdentifier[] | undefined;
}

/**
 * <p>Contains the details for a document that was ingested or deleted.</p>
 * @public
 */
export interface KnowledgeBaseDocumentDetail {
  /**
   * <p>The identifier of the knowledge base that the document was ingested into or deleted from.</p>
   * @public
   */
  knowledgeBaseId: string | undefined;

  /**
   * <p>The identifier of the data source connected to the knowledge base that the document was ingested into or deleted from.</p>
   * @public
   */
  dataSourceId: string | undefined;

  /**
   * <p>The ingestion status of the document. The following statuses are possible:</p> <ul> <li> <p>STARTING – You submitted the ingestion job containing the document.</p> </li> <li> <p>PENDING – The document is waiting to be ingested.</p> </li> <li> <p>IN_PROGRESS – The document is being ingested.</p> </li> <li> <p>INDEXED – The document was successfully indexed.</p> </li> <li> <p>PARTIALLY_INDEXED – The document was partially indexed.</p> </li> <li> <p>METADATA_PARTIALLY_INDEXED – You submitted metadata for an existing document and it was partially indexed.</p> </li> <li> <p>METADATA_UPDATE_FAILED – You submitted a metadata update for an existing document but it failed.</p> </li> <li> <p>FAILED – The document failed to be ingested.</p> </li> <li> <p>NOT_FOUND – The document wasn't found.</p> </li> <li> <p>IGNORED – The document was ignored during ingestion.</p> </li> <li> <p>DELETING – You submitted the delete job containing the document.</p> </li> <li> <p>DELETE_IN_PROGRESS – The document is being deleted.</p> </li> </ul>
   * @public
   */
  status: DocumentStatus | undefined;

  /**
   * <p>Contains information that identifies the document.</p>
   * @public
   */
  identifier: DocumentIdentifier | undefined;

  /**
   * <p>The reason for the status. Appears alongside the status <code>IGNORED</code>.</p>
   * @public
   */
  statusReason?: string | undefined;

  /**
   * <p>The date and time at which the document was last updated.</p>
   * @public
   */
  updatedAt?: Date | undefined;
}

/**
 * @public
 */
export interface DeleteKnowledgeBaseDocumentsResponse {
  /**
   * <p>A list of objects, each of which contains information about the documents that were deleted.</p>
   * @public
   */
  documentDetails?: KnowledgeBaseDocumentDetail[] | undefined;
}

/**
 * @public
 */
export interface GetKnowledgeBaseDocumentsRequest {
  /**
   * <p>The unique identifier of the knowledge base that is connected to the data source.</p>
   * @public
   */
  knowledgeBaseId: string | undefined;

  /**
   * <p>The unique identifier of the data source that contains the documents.</p>
   * @public
   */
  dataSourceId: string | undefined;

  /**
   * <p>A list of objects, each of which contains information to identify a document for which to retrieve information.</p>
   * @public
   */
  documentIdentifiers: DocumentIdentifier[] | undefined;
}

/**
 * @public
 */
export interface GetKnowledgeBaseDocumentsResponse {
  /**
   * <p>A list of objects, each of which contains information about the documents that were retrieved.</p>
   * @public
   */
  documentDetails?: KnowledgeBaseDocumentDetail[] | undefined;
}

/**
 * <p>Contains information about content defined inline in bytes.</p>
 * @public
 */
export interface ByteContentDoc {
  /**
   * <p>The MIME type of the content. For a list of MIME types, see <a href="https://www.iana.org/assignments/media-types/media-types.xhtml">Media Types</a>. The following MIME types are supported:</p> <ul> <li> <p>text/plain</p> </li> <li> <p>text/html</p> </li> <li> <p>text/csv</p> </li> <li> <p>text/vtt</p> </li> <li> <p>message/rfc822</p> </li> <li> <p>application/xhtml+xml</p> </li> <li> <p>application/pdf</p> </li> <li> <p>application/msword</p> </li> <li> <p>application/vnd.ms-word.document.macroenabled.12</p> </li> <li> <p>application/vnd.ms-word.template.macroenabled.12</p> </li> <li> <p>application/vnd.ms-excel</p> </li> <li> <p>application/vnd.ms-excel.addin.macroenabled.12</p> </li> <li> <p>application/vnd.ms-excel.sheet.macroenabled.12</p> </li> <li> <p>application/vnd.ms-excel.template.macroenabled.12</p> </li> <li> <p>application/vnd.ms-excel.sheet.binary.macroenabled.12</p> </li> <li> <p>application/vnd.ms-spreadsheetml</p> </li> <li> <p>application/vnd.openxmlformats-officedocument.spreadsheetml.sheet</p> </li> <li> <p>application/vnd.openxmlformats-officedocument.spreadsheetml.template</p> </li> <li> <p>application/vnd.openxmlformats-officedocument.wordprocessingml.document</p> </li> <li> <p>application/vnd.openxmlformats-officedocument.wordprocessingml.template</p> </li> </ul>
   * @public
   */
  mimeType: string | undefined;

  /**
   * <p>The base64-encoded string of the content.</p>
   * @public
   */
  data: Uint8Array | undefined;
}

/**
 * <p>Contains information about content defined inline in text.</p>
 * @public
 */
export interface TextContentDoc {
  /**
   * <p>The text of the content.</p>
   * @public
   */
  data: string | undefined;
}

/**
 * <p>Contains information about content defined inline to ingest into a data source. Choose a <code>type</code> and include the field that corresponds to it.</p>
 * @public
 */
export interface InlineContent {
  /**
   * <p>The type of inline content to define.</p>
   * @public
   */
  type: InlineContentType | undefined;

  /**
   * <p>Contains information about content defined inline in bytes.</p>
   * @public
   */
  byteContent?: ByteContentDoc | undefined;

  /**
   * <p>Contains information about content defined inline in text.</p>
   * @public
   */
  textContent?: TextContentDoc | undefined;
}

/**
 * <p>Contains information about the Amazon S3 location of the file containing the content to ingest into a knowledge base connected to a custom data source.</p>
 * @public
 */
export interface CustomS3Location {
  /**
   * <p>The S3 URI of the file containing the content to ingest.</p>
   * @public
   */
  uri: string | undefined;

  /**
   * <p>The identifier of the Amazon Web Services account that owns the S3 bucket containing the content to ingest.</p>
   * @public
   */
  bucketOwnerAccountId?: string | undefined;
}

/**
 * <p>Contains information about the content to ingest into a knowledge base connected to a custom data source. Choose a <code>sourceType</code> and include the field that corresponds to it.</p>
 * @public
 */
export interface CustomContent {
  /**
   * <p>A unique identifier for the document.</p>
   * @public
   */
  customDocumentIdentifier: CustomDocumentIdentifier | undefined;

  /**
   * <p>The source of the data to ingest.</p>
   * @public
   */
  sourceType: CustomSourceType | undefined;

  /**
   * <p>Contains information about the Amazon S3 location of the file from which to ingest data.</p>
   * @public
   */
  s3Location?: CustomS3Location | undefined;

  /**
   * <p>Contains information about content defined inline to ingest into a knowledge base.</p>
   * @public
   */
  inlineContent?: InlineContent | undefined;
}

/**
 * <p>Contains information about the content to ingest into a knowledge base connected to an Amazon S3 data source.</p>
 * @public
 */
export interface S3Content {
  /**
   * <p>The S3 location of the file containing the content to ingest.</p>
   * @public
   */
  s3Location: S3Location | undefined;
}

/**
 * <p>Contains information about the content of a document. Choose a <code>dataSourceType</code> and include the field that corresponds to it.</p>
 * @public
 */
export interface DocumentContent {
  /**
   * <p>The type of data source that is connected to the knowledge base to which to ingest this document.</p>
   * @public
   */
  dataSourceType: ContentDataSourceType | undefined;

  /**
   * <p>Contains information about the content to ingest into a knowledge base connected to a custom data source.</p>
   * @public
   */
  custom?: CustomContent | undefined;

  /**
   * <p>Contains information about the content to ingest into a knowledge base connected to an Amazon S3 data source</p>
   * @public
   */
  s3?: S3Content | undefined;
}

/**
 * <p>Contains the value of the metadata attribute. Choose a <code>type</code> and include the field that corresponds to it.</p>
 * @public
 */
export interface MetadataAttributeValue {
  /**
   * <p>The type of the metadata attribute.</p>
   * @public
   */
  type: MetadataValueType | undefined;

  /**
   * <p>The value of the numeric metadata attribute.</p>
   * @public
   */
  numberValue?: number | undefined;

  /**
   * <p>The value of the Boolean metadata attribute.</p>
   * @public
   */
  booleanValue?: boolean | undefined;

  /**
   * <p>The value of the string metadata attribute.</p>
   * @public
   */
  stringValue?: string | undefined;

  /**
   * <p>An array of strings that define the value of the metadata attribute.</p>
   * @public
   */
  stringListValue?: string[] | undefined;
}

/**
 * <p>Contains information about a metadata attribute.</p>
 * @public
 */
export interface MetadataAttribute {
  /**
   * <p>The key of the metadata attribute.</p>
   * @public
   */
  key: string | undefined;

  /**
   * <p>Contains the value of the metadata attribute.</p>
   * @public
   */
  value: MetadataAttributeValue | undefined;
}

/**
 * <p>Contains information about the metadata associate with the content to ingest into a knowledge base. Choose a <code>type</code> and include the field that corresponds to it.</p>
 * @public
 */
export interface DocumentMetadata {
  /**
   * <p>The type of the source source from which to add metadata.</p>
   * @public
   */
  type: MetadataSourceType | undefined;

  /**
   * <p>An array of objects, each of which defines a metadata attribute to associate with the content to ingest. You define the attributes inline.</p>
   * @public
   */
  inlineAttributes?: MetadataAttribute[] | undefined;

  /**
   * <p>The Amazon S3 location of the file containing metadata to associate with the content to ingest.</p>
   * @public
   */
  s3Location?: CustomS3Location | undefined;
}

/**
 * <p>Contains information about a document to ingest into a knowledge base and metadata to associate with it.</p>
 * @public
 */
export interface KnowledgeBaseDocument {
  /**
   * <p>Contains the metadata to associate with the document.</p>
   * @public
   */
  metadata?: DocumentMetadata | undefined;

  /**
   * <p>Contains the content of the document.</p>
   * @public
   */
  content: DocumentContent | undefined;
}

/**
 * @public
 */
export interface IngestKnowledgeBaseDocumentsRequest {
  /**
   * <p>The unique identifier of the knowledge base to ingest the documents into.</p>
   * @public
   */
  knowledgeBaseId: string | undefined;

  /**
   * <p>The unique identifier of the data source connected to the knowledge base that you're adding documents to.</p>
   * @public
   */
  dataSourceId: string | undefined;

  /**
   * <p>A unique, case-sensitive identifier to ensure that the API request completes no more than one time. If this token matches a previous request, Amazon Bedrock ignores the request, but does not return an error. For more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/APIReference/Run_Instance_Idempotency.html">Ensuring idempotency</a>.</p>
   * @public
   */
  clientToken?: string | undefined;

  /**
   * <p>A list of objects, each of which contains information about the documents to add.</p>
   * @public
   */
  documents: KnowledgeBaseDocument[] | undefined;
}

/**
 * @public
 */
export interface IngestKnowledgeBaseDocumentsResponse {
  /**
   * <p>A list of objects, each of which contains information about the documents that were ingested.</p>
   * @public
   */
  documentDetails?: KnowledgeBaseDocumentDetail[] | undefined;
}

/**
 * @public
 */
export interface ListKnowledgeBaseDocumentsRequest {
  /**
   * <p>The unique identifier of the knowledge base that is connected to the data source.</p>
   * @public
   */
  knowledgeBaseId: string | undefined;

  /**
   * <p>The unique identifier of the data source that contains the documents.</p>
   * @public
   */
  dataSourceId: string | undefined;

  /**
   * <p>The maximum number of results to return in the response. If the total number of results is greater than this value, use the token returned in the response in the <code>nextToken</code> field when making another request to return the next batch of results.</p>
   * @public
   */
  maxResults?: number | undefined;

  /**
   * <p>If the total number of results is greater than the <code>maxResults</code> value provided in the request, enter the token returned in the <code>nextToken</code> field in the response in this field to return the next batch of results.</p>
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListKnowledgeBaseDocumentsResponse {
  /**
   * <p>A list of objects, each of which contains information about the documents that were retrieved.</p>
   * @public
   */
  documentDetails: KnowledgeBaseDocumentDetail[] | undefined;

  /**
   * <p>If the total number of results is greater than the <code>maxResults</code> value provided in the request, use this token when making another request in the <code>nextToken</code> field to return the next batch of results.</p>
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * @public
 */
export interface AssociateAgentKnowledgeBaseRequest {
  /**
   * <p>The unique identifier of the agent with which you want to associate the knowledge base.</p>
   * @public
   */
  agentId: string | undefined;

  /**
   * <p>The version of the agent with which you want to associate the knowledge base.</p>
   * @public
   */
  agentVersion: string | undefined;

  /**
   * <p>The unique identifier of the knowledge base to associate with the agent.</p>
   * @public
   */
  knowledgeBaseId: string | undefined;

  /**
   * <p>A description of what the agent should use the knowledge base for.</p>
   * @public
   */
  description: string | undefined;

  /**
   * <p>Specifies whether to use the knowledge base or not when sending an <a href="https://docs.aws.amazon.com/bedrock/latest/APIReference/API_agent-runtime_InvokeAgent.html">InvokeAgent</a> request.</p>
   * @public
   */
  knowledgeBaseState?: KnowledgeBaseState | undefined;
}

/**
 * @public
 */
export interface AssociateAgentKnowledgeBaseResponse {
  /**
   * <p>Contains details about the knowledge base that has been associated with the agent.</p>
   * @public
   */
  agentKnowledgeBase: AgentKnowledgeBase | undefined;
}

/**
 * <p>Settings for an Amazon Kendra knowledge base.</p>
 * @public
 */
export interface KendraKnowledgeBaseConfiguration {
  /**
   * <p>The ARN of the Amazon Kendra index.</p>
   * @public
   */
  kendraIndexArn: string | undefined;
}

/**
 * <p>Contains configurations for authentication to an Amazon Redshift provisioned data warehouse. Specify the type of authentication to use in the <code>type</code> field and include the corresponding field. If you specify IAM authentication, you don't need to include another field.</p>
 * @public
 */
export interface RedshiftProvisionedAuthConfiguration {
  /**
   * <p>The type of authentication to use.</p>
   * @public
   */
  type: RedshiftProvisionedAuthType | undefined;

  /**
   * <p>The database username for authentication to an Amazon Redshift provisioned data warehouse.</p>
   * @public
   */
  databaseUser?: string | undefined;

  /**
   * <p>The ARN of an Secrets Manager secret for authentication.</p>
   * @public
   */
  usernamePasswordSecretArn?: string | undefined;
}

/**
 * <p>Contains configurations for a provisioned Amazon Redshift query engine.</p>
 * @public
 */
export interface RedshiftProvisionedConfiguration {
  /**
   * <p>The ID of the Amazon Redshift cluster.</p>
   * @public
   */
  clusterIdentifier: string | undefined;

  /**
   * <p>Specifies configurations for authentication to Amazon Redshift.</p>
   * @public
   */
  authConfiguration: RedshiftProvisionedAuthConfiguration | undefined;
}

/**
 * <p>Specifies configurations for authentication to a Redshift Serverless. Specify the type of authentication to use in the <code>type</code> field and include the corresponding field. If you specify IAM authentication, you don't need to include another field.</p>
 * @public
 */
export interface RedshiftServerlessAuthConfiguration {
  /**
   * <p>The type of authentication to use.</p>
   * @public
   */
  type: RedshiftServerlessAuthType | undefined;

  /**
   * <p>The ARN of an Secrets Manager secret for authentication.</p>
   * @public
   */
  usernamePasswordSecretArn?: string | undefined;
}

/**
 * <p>Contains configurations for authentication to Amazon Redshift Serverless.</p>
 * @public
 */
export interface RedshiftServerlessConfiguration {
  /**
   * <p>The ARN of the Amazon Redshift workgroup.</p>
   * @public
   */
  workgroupArn: string | undefined;

  /**
   * <p>Specifies configurations for authentication to an Amazon Redshift provisioned data warehouse.</p>
   * @public
   */
  authConfiguration: RedshiftServerlessAuthConfiguration | undefined;
}

/**
 * <p>Contains configurations for an Amazon Redshift query engine. Specify the type of query engine in <code>type</code> and include the corresponding field. For more information, see <a href="https://docs.aws.amazon.com/bedrock/latest/userguide/knowledge-base-build-structured.html">Build a knowledge base by connecting to a structured data source</a> in the Amazon Bedrock User Guide.</p>
 * @public
 */
export interface RedshiftQueryEngineConfiguration {
  /**
   * <p>The type of query engine.</p>
   * @public
   */
  type: RedshiftQueryEngineType | undefined;

  /**
   * <p>Specifies configurations for a serverless Amazon Redshift query engine.</p>
   * @public
   */
  serverlessConfiguration?: RedshiftServerlessConfiguration | undefined;

  /**
   * <p>Specifies configurations for a provisioned Amazon Redshift query engine.</p>
   * @public
   */
  provisionedConfiguration?: RedshiftProvisionedConfiguration | undefined;
}

/**
 * <p>Contains configurations for a query, each of which defines information about example queries to help the query engine generate appropriate SQL queries.</p>
 * @public
 */
export interface CuratedQuery {
  /**
   * <p>An example natural language query.</p>
   * @public
   */
  naturalLanguage: string | undefined;

  /**
   * <p>The SQL equivalent of the natural language query.</p>
   * @public
   */
  sql: string | undefined;
}

/**
 * <p>Contains information about a column in the current table for the query engine to consider.</p>
 * @public
 */
export interface QueryGenerationColumn {
  /**
   * <p>The name of the column for which the other fields in this object apply.</p>
   * @public
   */
  name?: string | undefined;

  /**
   * <p>A description of the column that helps the query engine understand the contents of the column.</p>
   * @public
   */
  description?: string | undefined;

  /**
   * <p>Specifies whether to include or exclude the column during query generation. If you specify <code>EXCLUDE</code>, the column will be ignored. If you specify <code>INCLUDE</code>, all other columns in the table will be ignored.</p>
   * @public
   */
  inclusion?: IncludeExclude | undefined;
}

/**
 * <p>Contains information about a table for the query engine to consider.</p>
 * @public
 */
export interface QueryGenerationTable {
  /**
   * <p>The name of the table for which the other fields in this object apply.</p>
   * @public
   */
  name: string | undefined;

  /**
   * <p>A description of the table that helps the query engine understand the contents of the table.</p>
   * @public
   */
  description?: string | undefined;

  /**
   * <p>Specifies whether to include or exclude the table during query generation. If you specify <code>EXCLUDE</code>, the table will be ignored. If you specify <code>INCLUDE</code>, all other tables will be ignored.</p>
   * @public
   */
  inclusion?: IncludeExclude | undefined;

  /**
   * <p>An array of objects, each of which defines information about a column in the table.</p>
   * @public
   */
  columns?: QueryGenerationColumn[] | undefined;
}

/**
 * <p>&gt;Contains configurations for context to use during query generation.</p>
 * @public
 */
export interface QueryGenerationContext {
  /**
   * <p>An array of objects, each of which defines information about a table in the database.</p>
   * @public
   */
  tables?: QueryGenerationTable[] | undefined;

  /**
   * <p>An array of objects, each of which defines information about example queries to help the query engine generate appropriate SQL queries.</p>
   * @public
   */
  curatedQueries?: CuratedQuery[] | undefined;
}

/**
 * <p>Contains configurations for query generation. For more information, see <a href="https://docs.aws.amazon.com/bedrock/latest/userguide/knowledge-base-build-structured.html">Build a knowledge base by connecting to a structured data source</a> in the Amazon Bedrock User Guide..</p>
 * @public
 */
export interface QueryGenerationConfiguration {
  /**
   * <p>The time after which query generation will time out.</p>
   * @public
   */
  executionTimeoutSeconds?: number | undefined;

  /**
   * <p>Specifies configurations for context to use during query generation.</p>
   * @public
   */
  generationContext?: QueryGenerationContext | undefined;
}

/**
 * <p>Contains configurations for storage in Glue Data Catalog.</p>
 * @public
 */
export interface RedshiftQueryEngineAwsDataCatalogStorageConfiguration {
  /**
   * <p>A list of names of the tables to use.</p>
   * @public
   */
  tableNames: string[] | undefined;
}

/**
 * <p>Contains configurations for storage in Amazon Redshift.</p>
 * @public
 */
export interface RedshiftQueryEngineRedshiftStorageConfiguration {
  /**
   * <p>The name of the Amazon Redshift database.</p>
   * @public
   */
  databaseName: string | undefined;
}

/**
 * <p>Contains configurations for Amazon Redshift data storage. Specify the data storage service to use in the <code>type</code> field and include the corresponding field. For more information, see <a href="https://docs.aws.amazon.com/bedrock/latest/userguide/knowledge-base-build-structured.html">Build a knowledge base by connecting to a structured data source</a> in the Amazon Bedrock User Guide.</p>
 * @public
 */
export interface RedshiftQueryEngineStorageConfiguration {
  /**
   * <p>The data storage service to use.</p>
   * @public
   */
  type: RedshiftQueryEngineStorageType | undefined;

  /**
   * <p>Specifies configurations for storage in Glue Data Catalog.</p>
   * @public
   */
  awsDataCatalogConfiguration?: RedshiftQueryEngineAwsDataCatalogStorageConfiguration | undefined;

  /**
   * <p>Specifies configurations for storage in Amazon Redshift.</p>
   * @public
   */
  redshiftConfiguration?: RedshiftQueryEngineRedshiftStorageConfiguration | undefined;
}

/**
 * <p>Contains configurations for an Amazon Redshift database. For more information, see <a href="https://docs.aws.amazon.com/bedrock/latest/userguide/knowledge-base-build-structured.html">Build a knowledge base by connecting to a structured data source</a> in the Amazon Bedrock User Guide.</p>
 * @public
 */
export interface RedshiftConfiguration {
  /**
   * <p>Specifies configurations for Amazon Redshift database storage.</p>
   * @public
   */
  storageConfigurations: RedshiftQueryEngineStorageConfiguration[] | undefined;

  /**
   * <p>Specifies configurations for an Amazon Redshift query engine.</p>
   * @public
   */
  queryEngineConfiguration: RedshiftQueryEngineConfiguration | undefined;

  /**
   * <p>Specifies configurations for generating queries.</p>
   * @public
   */
  queryGenerationConfiguration?: QueryGenerationConfiguration | undefined;
}

/**
 * <p>Contains configurations for a knowledge base connected to an SQL database. Specify the SQL database type in the <code>type</code> field and include the corresponding field. For more information, see <a href="https://docs.aws.amazon.com/bedrock/latest/userguide/knowledge-base-build-structured.html">Build a knowledge base by connecting to a structured data source</a> in the Amazon Bedrock User Guide.</p>
 * @public
 */
export interface SqlKnowledgeBaseConfiguration {
  /**
   * <p>The type of SQL database to connect to the knowledge base.</p>
   * @public
   */
  type: QueryEngineType | undefined;

  /**
   * <p>Specifies configurations for a knowledge base connected to an Amazon Redshift database.</p>
   * @public
   */
  redshiftConfiguration?: RedshiftConfiguration | undefined;
}

/**
 * <p>Configuration for segmenting audio content during multimodal knowledge base ingestion. Determines how audio files are divided into chunks for processing.</p>
 * @public
 */
export interface AudioSegmentationConfiguration {
  /**
   * <p>The duration in seconds for each audio segment. Audio files will be divided into chunks of this length for processing.</p>
   * @public
   */
  fixedLengthDuration: number | undefined;
}

/**
 * <p>Configuration settings for processing audio content in multimodal knowledge bases.</p>
 * @public
 */
export interface AudioConfiguration {
  /**
   * <p>Configuration for segmenting audio content during processing.</p>
   * @public
   */
  segmentationConfiguration: AudioSegmentationConfiguration | undefined;
}

/**
 * <p>Configuration for segmenting video content during multimodal knowledge base ingestion. Determines how video files are divided into chunks for processing.</p>
 * @public
 */
export interface VideoSegmentationConfiguration {
  /**
   * <p>The duration in seconds for each video segment. Video files will be divided into chunks of this length for processing.</p>
   * @public
   */
  fixedLengthDuration: number | undefined;
}

/**
 * <p>Configuration settings for processing video content in multimodal knowledge bases.</p>
 * @public
 */
export interface VideoConfiguration {
  /**
   * <p>Configuration for segmenting video content during processing.</p>
   * @public
   */
  segmentationConfiguration: VideoSegmentationConfiguration | undefined;
}
